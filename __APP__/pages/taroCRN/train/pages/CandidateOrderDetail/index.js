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
    require("../../../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../../../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    require("../../../sub-common/849af97262623a3a03a4c9ba6f8707d6.js"),
    require("../../../sub-common/21c38908e8fa4730fcf449c938917721.js"),
    require("../../../sub-common/e18ac9e89d62ef13595cf53c81489989.js"),
    require("../../../sub-common/af9a4e372fc86155ae3439262ddc36ee.js"),
    require("../../../sub-common/98288617f7b79bd93e6764129b2de6f6.js"),
    require("../../../sub-common/488f20d3ae601fc19d5c835f8ad41f52.js"),
    require("../../../sub-common/64b09328b6ab714bf257627ff5257a73.js"),
    require("../../../sub-common/a84a67620e54e4b0717aaaabef4d4f88.js"),
    require("../../../sub-common/1bfc4d45433b8de6b344d141f5c6c906.js"),
    require("../../../sub-common/6fe85c0e7576cabc17e868b8e899da37.js"),
    require("../../../sub-common/e255e3ffa6c0fa3b59639b749cd45155.js"),
    require("../../../sub-common/41e826946d5acf662d18dcccdf7ba9c9.js"),
    require("../../../sub-common/72d4a16e30125614fb36cb40015efca3.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [20854],
      {
        67566: function (e, t, i) {
          var n = i(32180),
            r = i(298),
            a = i(79301),
            o = i(95308),
            l = i(57042),
            s = i(24460),
            c = i(81876),
            d = i(21867),
            u = i(86066),
            h = i(45023),
            g = i(52500),
            m = i(8271),
            f = i.n(m),
            _ = i(92954),
            p = i.n(_),
            b = i(75786),
            y = i(71515),
            Z = i(64746),
            T = i(82954),
            w = i(23577),
            x = i(48813),
            v = function (e) {
              var t = e.showToast,
                i = e.ubtTrace,
                n = e.pageId;
              (0, g.useEffect)(function () {
                i("GrabAlternateDetail_DeleteButton_exposure", {
                  channel: w.Z.isCRN ? "App" : "Applets",
                  PageId: n,
                });
              }, []);
              return (0, x.tZ)(y.View, {
                onClick: function () {
                  null == t || t(),
                    i("GrabAlternateDetail_DeleteButton_click", {
                      channel: w.Z.isCRN ? "App" : "Applets",
                      PageId: n,
                    });
                },
                className: " _i _n _l _Rd _ss _jj _Oa",
                children: (0, x.tZ)(y.Text, {
                  className: " _G _Kc _U",
                  children: "删除订单",
                }),
              });
            },
            S = i(71458),
            N = i(90129),
            C = function (e) {
              var t = e || {},
                i = t.title,
                n = t.tagList,
                r = t.currentTag,
                a = t.setCurrentTag;
              if (null == n || !n.length) return null;
              return (0, x.BX)(y.View, {
                children: [
                  (0, x.tZ)(y.Text, {
                    className: " _Kc _E",
                    children: i || "",
                  }),
                  (0, x.tZ)(y.View, {
                    className: " _i _Mn _Sc _l",
                    children: n.map(function (e) {
                      var t = e === r;
                      return (0, x.BX)(
                        y.View,
                        {
                          className: ""
                            .concat(" _Gu _Hu _Iu _ij _Ju _Ku _i _l _n _p", " ")
                            .concat(t ? " _Lu _Mu" : ""),
                          onClick: function () {
                            return (function (e) {
                              null == a || a(e);
                            })(e);
                          },
                          children: [
                            (0, x.tZ)(y.Text, {
                              className: ""
                                .concat(" _Xb _G", " ")
                                .concat(t ? " _wp" : ""),
                              children: e,
                            }),
                            t &&
                              (0, x.tZ)(y.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/xz@3x.png",
                                className: " _Ye _og _u _Nu _Ou",
                              }),
                          ],
                        },
                        e
                      );
                    }),
                  }),
                ],
              });
            },
            I = function (e) {
              var t = e || {},
                i = t.isShow,
                n = t.hide,
                r = t.chosenTrainNo,
                a = t.onConfirm,
                o = t.smartSchemeRecommendInfoList,
                l = (0, g.useState)(null),
                s = (0, N.Z)(l, 2),
                c = s[0],
                d = s[1];
              if (!i || null == o || !o.length) return null;
              var u = o.map(function (e) {
                  return e.trainNo;
                }),
                h = [
                  {
                    text: "取消",
                    onClick: function () {
                      d(null), null == n || n();
                    },
                    color: "#198CFF",
                    bgColor: "#EDF6FF",
                  },
                  {
                    text: "确定",
                    color: "#fff",
                    bgColor: "#198CFF",
                    onClick: function () {
                      c
                        ? (null == a || a(c), null == n || n())
                        : null == n || n();
                    },
                  },
                ];
              return (0, x.tZ)(T.h, {
                hasBackground: !1,
                isShow: i,
                cancel: n,
                title: "筛选",
                buttons: h,
                icon: { uri: "" },
                children: (0, x.tZ)(y.View, {
                  className: " _Fu _Z",
                  children: (0, x.tZ)(C, {
                    tagList: u,
                    title: "选择查询车次",
                    currentTag: c || r,
                    setCurrentTag: d,
                  }),
                }),
              });
            },
            B = i(58374);
          function D(e, t) {
            if (null != t && t.length) {
              var i = [],
                n = {};
              t.forEach(function (e) {
                var t = f()(e.departDateTime).format("YYYY-MM-DD"),
                  i = f()(e.arriveDateTime).format("YYYY-MM-DD"),
                  r = ""
                    .concat(t, "-")
                    .concat(e.departStation, "-")
                    .concat(e.trainNo, "-")
                    .concat(e.arriveStation),
                  a = {
                    seatName: e.seatName,
                    price: +e.ticketPrice,
                    ticketLeft: 0,
                  };
                if (n[r]) {
                  var o, l, s, c;
                  null === (o = n[r]) ||
                    void 0 === o ||
                    null === (l = o.smartSchemeScreeningConditions) ||
                    void 0 === l ||
                    null === (s = l.seatList) ||
                    void 0 === s ||
                    null === (c = s.push) ||
                    void 0 === c ||
                    c.call(s, a);
                } else {
                  var d = e || {},
                    u = d.trainNo,
                    h = d.departStation,
                    g = d.arriveStation,
                    m = d.departTime,
                    _ = d.arriveTime;
                  n[r] = {
                    trainNo: u,
                    departDate: t,
                    arriveDate: i,
                    fromTime: m,
                    toTime: _,
                    fromStationName: h,
                    toStationName: g,
                    smartSchemeScreeningConditions: { seatList: [a] },
                  };
                }
              }),
                Object.keys(n).map(function (e) {
                  i.push(n[e]);
                });
              var r = {
                smartSchemeOptimizeInfoList: i,
                source: "appTicketCandidatePage",
              };
              (0, B.XO)(r)
                .then(function (t) {
                  var i, n, r;
                  1 === t.resultCode
                    ? e.setState({
                        smartSchemeRecommendInfoList:
                          t.smartSchemeRecommendInfoList,
                        currentSmartTrainNo:
                          null === (i = t.smartSchemeRecommendInfoList) ||
                          void 0 === i ||
                          null === (n = i[0]) ||
                          void 0 === n
                            ? void 0
                            : n.trainNo,
                      })
                    : null === (r = e.ubtDevTrace) ||
                      void 0 === r ||
                      r.call(e, "getSmartSchemeRecommendOptimize.failed", {
                        message: t.resultMessage,
                        code: t.resultCode,
                      });
                })
                .catch(function (t) {
                  var i;
                  null === (i = e.ubtDevTrace) ||
                    void 0 === i ||
                    i.call(e, "getSmartSchemeRecommendOptimize.error", {
                      message: t.message,
                    });
                });
            }
          }
          var V,
            k = i(81403),
            R = i(67026),
            z = function (e, t) {
              if (null != e && e.length) {
                var i = e.find(function (e) {
                  return (
                    "UrgeCandidateTicketToast" ===
                    (null == e ? void 0 : e.toastCode)
                  );
                });
                if (i)
                  try {
                    var n = JSON.parse(i.toastJson || "null");
                    if (!n) return;
                    null == t || t(n);
                  } catch (e) {
                    console.error(e);
                  }
              }
            },
            F = i(16940);
          !(function (e) {
            (e[(e.Toast = 1)] = "Toast"), (e[(e.Jump = 2)] = "Jump");
          })(V || (V = {}));
          var X,
            L = (0, g.memo)(
              function (e) {
                var t = e.toastInfo,
                  i = e.showUrgeCandidateDialog,
                  n = e.ubtTrace,
                  r = e.pageId;
                if (null == t || !t.icon) return null;
                var a = t.actionType,
                  o = t.icon,
                  l = t.jumpUrl;
                return (0, x.tZ)(y.View, {
                  onClick: function () {
                    w.Z.isCRN &&
                      (null == n ||
                        n("GrabAlternateDetail_HurryAgentButton_click", {
                          PageId: r,
                        })),
                      a === V.Jump
                        ? l && (0, F.yX)(l)
                        : a === V.Toast && (null == i || i());
                  },
                  className: " _u _Zy _rq",
                  "data-expose": {
                    ubtKeyName: "FltWMid_Card_BusiCashBackBanner_exposure",
                    data: { PageId: r },
                  },
                  children: (0, x.tZ)(y.Image, {
                    src: o,
                    className: " _If _az",
                  }),
                });
              },
              function (e, t) {
                var i, n;
                return (
                  (null === (i = e.toastInfo) || void 0 === i
                    ? void 0
                    : i.icon) ===
                  (null === (n = t.toastInfo) || void 0 === n ? void 0 : n.icon)
                );
              }
            ),
            j = i(43884),
            A = i(60450);
          !(function (e) {
            e[(e.Confirm = 2)] = "Confirm";
          })(X || (X = {}));
          var W = {
              backgroundImg: { height: 257, zIndex: -1 },
              box: { backgroundColor: "transparent", paddingBottom: 0 },
              closeIcon: { top: 35 },
            },
            P = function (e) {
              var t = (e || {}).buttons;
              return null != t && t.length
                ? (0, x.tZ)(y.View, {
                    className: " _kd _jj _jl _i _Ga _Sc _l",
                    children: t.map(function (e, t) {
                      return (0, x.BX)(
                        y.View,
                        {
                          onClick: function () {
                            var t;
                            return null === (t = e.onClick) || void 0 === t
                              ? void 0
                              : t.call(e);
                          },
                          className: ""
                            .concat(" _Oa _Gc _p _i _n _l _Ic", " ")
                            .concat(e.className, " ")
                            .concat(0 === t ? " _Qf" : ""),
                          children: [
                            e.text || "",
                            !!e.remark &&
                              (0, x.tZ)(y.View, {
                                className: " _u _on _t",
                                children: (0, x.tZ)(y.Image, {
                                  src: e.remark,
                                  className: " _Qb _ug",
                                }),
                              }),
                          ],
                        },
                        t
                      );
                    }),
                  })
                : null;
            },
            G = function (e) {
              var t = e || {},
                i = t.toast,
                n = t.isShow,
                r = t.hide,
                a = t.page,
                o = t.ubtTrace,
                l = t.pageId;
              if (
                ((0, g.useEffect)(
                  function () {
                    n &&
                      w.Z.isCRN &&
                      (null == o ||
                        o("GrabAlternateDetail_HurryAgentPopup_exposure", {
                          PageId: l,
                        }));
                  },
                  [n]
                ),
                !i || !n)
              )
                return null;
              var s = i.title,
                c = i.subTitle,
                d = i.tag,
                u = i.desc,
                h = i.backImg,
                m = i.buttons,
                f = i.items,
                _ = function () {
                  w.Z.isCRN &&
                    (null == o ||
                      o("GrabAlternateDetail_HurryAgentPopup_Know_click", {
                        PageId: l,
                      })),
                    null == r || r();
                },
                p = function () {
                  w.Z.isCRN &&
                    (null == o ||
                      o("GrabAlternateDetail_HurryAgentPopup_Speed_click", {
                        PageId: l,
                      })),
                    null == r || r(),
                    (0, A.$M)(a);
                },
                b =
                  null == m
                    ? void 0
                    : m.map(function (e) {
                        var t = e.buttonType === X.Confirm;
                        return {
                          text: e.buttonName || "",
                          onClick: t ? p : _,
                          className: t ? " _By _b _j" : " _hr _x _Iu _Yy",
                          remark: e.remark,
                        };
                      });
              return (0, x.tZ)(T.h, {
                isShow: n,
                cancel: r,
                backgroundIcon:
                  h ||
                  "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_09/cuidan/img_bg_tanchaung.webp",
                outerStyle: W,
                closeIcon:
                  "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_09/guoqingqiangpiao/icon_24_close.webp",
                isShowIphoneXAdapter: !0,
                iphoneXFooterColor: "#fff",
                children: (0, x.BX)(y.View, {
                  className: " _Z",
                  children: [
                    (0, x.BX)(y.View, {
                      className: " _qd _Ry",
                      children: [
                        (0, x.tZ)(y.Image, {
                          src:
                            s ||
                            "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_09/cuidan/title_cuidan.webp",
                          className: " _Sy _Ld",
                        }),
                        (0, x.BX)(j.Z, {
                          start: { x: 0, y: 1 },
                          end: { x: 1, y: 1 },
                          colors: [
                            "rgba(149, 175, 255, 0.31)",
                            "rgba(255, 255, 255, 0)",
                          ],
                          locations: [0, 1],
                          className: " _i _Ga _Sc _l _Ty _vi _Uy _ub",
                          children: [
                            (0, x.tZ)(y.Image, {
                              src:
                                d ||
                                "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_09/cuidan/tag_qpgj.webp",
                              className: " _Fq _eg _Ne",
                            }),
                            (0, x.tZ)(y.Text, {
                              className: " _Pe _Vy",
                              children: c || "",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, x.BX)(y.View, {
                      className: " _Wy _jl _a _Qi",
                      children: [
                        (0, x.tZ)(y.Text, {
                          className: " _Xy _qy _dd _U",
                          children: u || "",
                        }),
                        !(null == f || !f.length) &&
                          (0, x.tZ)(j.Z, {
                            start: { x: 0, y: 1 },
                            end: { x: 1, y: 1 },
                            colors: [
                              "rgb(246, 249, 252)",
                              "rgb(252, 253, 254)",
                            ],
                            locations: [0, 1],
                            className: " _Rx _i _Ga _m _l _be",
                            children: f.map(function (e) {
                              var t = e || {},
                                i = t.icon,
                                n = t.title;
                              return (0,
                              x.BX)(y.View, { className: " _i _Ga _Sc _l", children: [(0, x.tZ)(y.Image, { src: i || "", className: " _he _yf _Iu" }), (0, x.tZ)(y.Text, { className: " _Ee _hk _Vy", children: n || "" })] }, n);
                            }),
                          }),
                      ],
                    }),
                    (0, x.tZ)(P, { buttons: b }),
                  ],
                }),
              });
            },
            H = i(81023),
            O = function () {
              return (0, x.tZ)(y.View, {});
            },
            E = i(49528),
            M = i(87298),
            q = i(78995),
            Y = i(17152),
            U = i(83033),
            Q = function () {
              return (0, x.BX)(y.View, {
                className: " _i _Ga _m _u _vn",
                children: [
                  (0, x.tZ)(y.View, {
                    className: " _jb _Ja _Ia _hb _Vb",
                    style: { opacity: "0.2" },
                  }),
                  (0, x.tZ)(y.View, {
                    className: " _jb _Ja _Ia _hb _Vb",
                    style: { opacity: "0.5" },
                  }),
                  (0, x.tZ)(y.View, { className: " _jb _Ja _Ia _hb _Vb" }),
                ],
              });
            },
            J = g.default.memo(function (e) {
              var t = e.number,
                i = (0, g.useState)(!1),
                n = (0, N.Z)(i, 2),
                r = n[0],
                a = n[1],
                o = (0, g.useState)(!1),
                l = (0, N.Z)(o, 2),
                s = l[0],
                c = l[1];
              return (
                (0, g.useEffect)(function () {
                  setTimeout(function () {
                    a(!0);
                  }, 200),
                    setTimeout(function () {
                      c(!0);
                    }, 1200);
                }),
                1 === t
                  ? (0, x.tZ)(j.Z, {
                      useAngle: !0,
                      angle: 90,
                      colors: ["#198CFF", "#00D9FF"],
                      locations: [0, 1],
                      style: r
                        ? { flex: 2, transition: "flex 2s ease" }
                        : { transition: "flex 2s ease" },
                      className: " _p _Bb _dg _vi _i _Ga _l",
                      children: s ? Q() : (0, x.tZ)(x.HY, {}),
                    })
                  : 2 === t
                  ? (0, x.BX)(y.View, {
                      className: " _i _nl",
                      children: [
                        (0, x.tZ)(j.Z, {
                          useAngle: !0,
                          angle: 90,
                          colors: ["#198CFF", "#00D9FF"],
                          locations: [0, 1],
                          style: r
                            ? { flex: 2, transition: "flex 1s ease" }
                            : { transition: "flex 1s ease" },
                          className: " _p _Bb _dg _vi _i _Ga _l",
                          children: s ? Q() : (0, x.tZ)(x.HY, {}),
                        }),
                        (0, x.tZ)(y.View, { style: { flex: 1 } }),
                      ],
                    })
                  : (0, x.tZ)(x.HY, {})
              );
            }),
            K = g.default.memo(function (e) {
              var t = e.content;
              return (0,
              x.tZ)(y.View, { className: " _cg _Bh _jc _i _Ga", children: (0, x.BX)(y.View, { className: " _p _oo _dg _ty _vi _i _l", children: [(0, x.tZ)(y.View, { className: " _i _uy _p _nc", children: (0, x.tZ)(y.View, { className: " _u _s _vy _Hh _af _Bi", children: "当前时间" }) }), (0, x.tZ)(y.View, { className: " _i _Ga _p", style: { flex: t.length > 1 ? 1 : 2 }, children: (0, x.tZ)(J, { number: t.length }) }), t.length > 1 && (0, x.BX)(y.View, { className: " _p _Db _i _l", children: [(0, x.tZ)(j.Z, { useAngle: !0, angle: 270, colors: ["#F5FAFF", "#E8F8FF"], locations: [0,
                              1], className: " _Mb _Z _nc _xy", children: (0, x.tZ)(y.View, { className: " _yy _zy _o", children: t[0].rate + "出票率" }) }), (0, x.tZ)(y.View, { className: " _Bi _u _vy _xh _af", children: t[0].timePoint || "" })] }), (0, x.BX)(y.View, { className: " _wy _p _Db _i _l", children: [(0, x.tZ)(j.Z, { useAngle: !0, angle: 270, colors: ["#F5FAFF", "#E8F8FF"], locations: [0,
                            1], className: " _Mb _Z _nc _xy", children: (0, x.tZ)(y.View, { className: " _yy _zy _o", children: t[t.length - 1].rate + "出票率" }) }), (0, x.tZ)(y.View, { className: " _Bi _u _vy _xh _af", children: t[t.length - 1].timePoint || "" })] }), (0, x.tZ)(y.View, { className: " _nc _p _j", children: (0, x.tZ)(y.View, { className: " _u _t _vy _Hh _af", children: "抢票截止" }) })] }) });
            }),
            $ = i(1841),
            ee = i(93825),
            te = g.default.memo(function (e) {
              var t,
                i,
                n,
                r,
                a,
                o,
                l,
                s,
                c,
                d = e.page,
                u = e.orderInfo,
                h = u.successRateInfo,
                m = u.candidateUpgradeFreeProducts,
                f = !(0, ee.Qr)(m);
              (0, g.useEffect)(
                function () {
                  f &&
                    d.ubtTrace("GrabAlternateDetail_Update_exposure", {
                      fromSource: d.recognizeId ? "图片识别" : "其他",
                      PageId: d.pageId,
                    });
                },
                [f, d]
              );
              var _ = (0, x.BX)(y.View, {
                className: " _p _Oa _qd _Jy",
                children: [
                  (0, x.tZ)(j.Z, {
                    useAngle: !0,
                    angle: 180,
                    colors: ["#A4D2FF", "#E0EDFA"],
                    locations: [0, 1],
                    className: " _ua _u _s _t _q _r",
                  }),
                  (0, x.tZ)(y.View, {
                    className: " _p _i _Ga _kk _m _Ky _Ly",
                    children: (0, x.BX)(y.View, {
                      className: " _Z _p _i _Ga _l",
                      children: [
                        (0, x.tZ)(y.Image, {
                          className: " _Ta _Ua _Va",
                          src:
                            (null == m ? void 0 : m.icon) ||
                            "https://images3.c-ctrip.com/ztrip/train.song/grab/icon_sjqp@3x.png",
                        }),
                        (0, x.tZ)($.Z, {
                          className: " _yg _xh _W",
                          children:
                            (null == m ? void 0 : m.title) ||
                            "免费升级至候补+余票监控",
                        }),
                        (0, x.tZ)(y.Image, {
                          id: "AMDg",
                          onClick: function () {
                            (0, F.jn)(
                              "https://market.suanya.com/weblc/robticket/hb_upgrade.html?version=127245"
                            );
                          },
                          className: " _Ye _og _Zg",
                          src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_05/jg@3x.png",
                        }),
                        (0, x.tZ)(y.View, { style: { flex: 1 } }),
                        f &&
                          (0, x.BX)(y.View, {
                            className: " _p",
                            children: [
                              (0, x.tZ)(j.Z, {
                                useAngle: !0,
                                angle: 90,
                                colors: ["#198CFF", "#0DC2FF"],
                                locations: [0, 1],
                                className: " _u _ra _s _t _q _r",
                              }),
                              (0, x.tZ)(y.View, {
                                className: " _p _Ii _ra _ck _b",
                                id: "AMDh",
                                onClick: function () {
                                  d.ubtTrace(
                                    "GrabAlternateDetail_Update_click",
                                    {
                                      fromSource: d.recognizeId
                                        ? "图片识别"
                                        : "其他",
                                      PageId: d.pageId,
                                    }
                                  ),
                                    (0, A.$M)(d);
                                },
                                children:
                                  (null == m ? void 0 : m.buttonName) ||
                                  "免费升级",
                              }),
                              (0, x.tZ)(U.Z, {
                                source: {
                                  uri: "https://images3.c-ctrip.com/ztrip/train_snow/2023_05/bqbj@3x.png",
                                },
                                className: " _u _t _vg _pj _De _Iy _i _k _l",
                                children: (0, x.tZ)(y.View, {
                                  className: " _My _x",
                                  children:
                                    (null == m ? void 0 : m.buttonTag) ||
                                    "抢不到赔",
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  (0, x.BX)(y.View, {
                    className: " _p _i _Ga _m _l _jj _dc _Lo _zu",
                    children: [
                      (0, x.BX)(y.View, {
                        className: " _Db _i _l",
                        children: [
                          (0, x.tZ)(y.Text, {
                            className: " _hk _dd _S _Hp",
                            children:
                              (null == m ||
                              null === (t = m.freeProducts) ||
                              void 0 === t ||
                              null === (i = t[0]) ||
                              void 0 === i
                                ? void 0
                                : i.title) || "多种方式抢",
                          }),
                          (0, x.tZ)(y.Text, {
                            className: " _D _Oy _Q",
                            children:
                              (null == m ||
                              null === (n = m.freeProducts) ||
                              void 0 === n ||
                              null === (r = n[0]) ||
                              void 0 === r
                                ? void 0
                                : r.desc) || "候补+捡漏票+专人抢票",
                          }),
                        ],
                      }),
                      (0, x.tZ)(y.View, { className: " _cj _De _Ny" }),
                      (0, x.BX)(y.View, {
                        className: " _Db _i _l",
                        children: [
                          (0, x.tZ)(y.Text, {
                            className: " _hk _dd _S _Hp",
                            children:
                              (null == m ||
                              null === (a = m.freeProducts) ||
                              void 0 === a ||
                              null === (o = a[1]) ||
                              void 0 === o
                                ? void 0
                                : o.title) || "保障有票出行",
                          }),
                          (0, x.tZ)(y.Text, {
                            className: " _D _Oy _Q",
                            children:
                              (null == m ||
                              null === (l = m.freeProducts) ||
                              void 0 === l ||
                              null === (s = l[1]) ||
                              void 0 === s
                                ? void 0
                                : s.desc) || "多种智能行方案可选择",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
              return (0,
              x.BX)(y.View, { className: " _Dy _Rh", children: [(0, x.BX)(y.View, { className: " _i _Ga _l _m _Ey", children: [(0, x.tZ)(Y.Z, { className: " _Fy _Gy", loop: !1, defaultImg: "https://images3.c-ctrip.com/ztrip/train_snow/2023_05/xz.gif", source: "https://images3.c-ctrip.com/ztrip/train_snow/2023_05/tb.json" }), (0, x.BX)(y.View, { className: " _uh _i _nj", children: [(0, x.tZ)($.Z, { className: " _Hy _dd _nb", children: null == h ? void 0 : h.successDesc }), null != h && h.ticketRates && (null === (c = h.ticketRates) || void 0 === c ? void 0 : c.length) > 0 ? (0, x.tZ)(K, { content: null == h ? void 0 : h.ticketRates }) : (0, x.tZ)(y.Text, { className: " _D _Nd _Q _ub", children: (null == h ? void 0 : h.notation) || "" })] })] }), f && _] });
            }),
            ie = i(94190),
            ne = i(94924),
            re = g.default.memo(function (e) {
              var t = e.orderInfo,
                i = t.successRateInfo,
                n = t.statusCode,
                r = i || {},
                a = r.successFlag,
                o = void 0 === a ? 2 : a,
                l = r.dateDesc,
                s = void 0 === l ? "" : l,
                c = (0, g.useState)(!1),
                d = (0, N.Z)(c, 2),
                u = d[0],
                h = d[1];
              (0, g.useEffect)(function () {
                var t = ie.vO.get() || {},
                  i = e.orderNumber || "";
                (3 === n && t[i]) || ((t[i] = !0), ie.vO.set(t), h(!0));
              }, []);
              var m = (0, x.tZ)(y.View, {
                  className: "tipsWrapper",
                  children: (0, x.BX)(y.View, {
                    className: "roll",
                    children: [
                      (0, x.tZ)(y.View, {
                        className: "rollView",
                        children: (0, x.tZ)(ne.Z, {
                          style: ae.tipsText,
                          children: "智行大数据正在读取候补提交时间...",
                        }),
                      }),
                      (0, x.tZ)(y.View, {
                        className: "rollView",
                        children: (0, x.tZ)(ne.Z, {
                          style: ae.tipsText,
                          children: "智行大数据分析近期出票及退票规律中...",
                        }),
                      }),
                      1 === o &&
                        (0, x.BX)(y.View, {
                          className: "rollView",
                          children: [
                            (0, x.tZ)(ne.Z, {
                              style: ae.tipsText,
                              children: "预计",
                            }),
                            (0, x.tZ)(y.View, {
                              style: ae.tipsTime2,
                              children: "兑现失败",
                            }),
                            (0, x.tZ)(ne.Z, {
                              style: ae.tipsText,
                              children: "当前方案余票放出概率低",
                            }),
                          ],
                        }),
                      2 === o &&
                        (0, x.BX)(y.View, {
                          className: "rollView",
                          children: [
                            (0, x.tZ)(ne.Z, {
                              style: ae.tipsText,
                              children: "预计",
                            }),
                            (0, x.tZ)(y.View, {
                              style: ae.tipsTime1,
                              children: s || "2022-12-12",
                            }),
                            (0, x.tZ)(ne.Z, {
                              style: ae.tipsText,
                              children: "前可兑换成功",
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
                f = (0, x.BX)(y.View, {
                  className: "noAnimationWrapper",
                  children: [
                    1 === o &&
                      (0, x.BX)(x.HY, {
                        children: [
                          (0, x.tZ)(ne.Z, {
                            style: ae.tipsText,
                            children: "预计",
                          }),
                          (0, x.tZ)(y.View, {
                            style: ae.tipsTime2,
                            children: "兑现失败",
                          }),
                          (0, x.tZ)(ne.Z, {
                            style: ae.tipsText,
                            children: "当前方案余票放出概率低",
                          }),
                        ],
                      }),
                    2 === o &&
                      (0, x.BX)(x.HY, {
                        children: [
                          (0, x.tZ)(ne.Z, {
                            style: ae.tipsText,
                            children: "预计",
                          }),
                          (0, x.tZ)(y.View, {
                            style: ae.tipsTime1,
                            children: s || "2022-12-12",
                          }),
                          (0, x.tZ)(ne.Z, {
                            style: ae.tipsText,
                            children: "前可兑换成功",
                          }),
                        ],
                      }),
                  ],
                });
              return (0,
              x.tZ)(y.View, { style: ae.container, children: u ? m : f });
            }),
            ae = (0, E.lW)({
              container: { paddingLeft: 17 },
              tipsText: { fontSize: 14, color: "#fff", lineHeight: 20 },
              tipsTime1: {
                marginLeft: 6,
                marginRight: 6,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 2,
                paddingBottom: 2,
                borderWidth: 1,
                borderColor: "#00fff4",
                borderRadius: 7,
                color: "#00fff4",
                fontSize: 16,
                fontFamily: "ZX-Regular",
                lineHeight: 18,
                borderStyle: "solid",
              },
              tipsTime2: {
                marginLeft: 6,
                marginRight: 6,
                paddingTop: 2,
                paddingBottom: 2,
                borderRadius: 7,
                color: "#00fff4",
                lineHeight: 20,
                fontWeight: "500",
                fontSize: 14,
              },
            }),
            oe = g.default.memo(function (e) {
              var t = e.orderInfo,
                i = t.candidateStatusDesc,
                n = t.subTitle,
                a = t.successRateInfo,
                o = t.statusCode,
                l = (0, g.useState)(!1),
                s = (0, N.Z)(l, 2),
                c = s[0],
                d = s[1],
                u = !(0, ee.Qr)(a) && ![2, 4, 7].includes(o);
              return (
                (0, g.useEffect)(function () {
                  d(!0);
                }, []),
                (0, x.BX)(y.View, {
                  style: le.container,
                  children: [
                    (0, x.BX)(y.View, {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 14,
                        marginLeft: 19,
                      },
                      children: [
                        (0, x.BX)(y.View, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          },
                          children: [
                            (0, x.tZ)(y.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_jg@3x.png",
                              style: le.icon,
                            }),
                            (0, x.tZ)(y.Text, { style: le.title, children: i }),
                          ],
                        }),
                        !!n &&
                          (0, x.tZ)(y.Text, {
                            style: le.subTitle,
                            children: n,
                          }),
                      ],
                    }),
                    u &&
                      (0, x.BX)(y.View, {
                        style: (0, r.Z)(
                          (0, r.Z)(
                            {},
                            w.Z.isCRN ? le.rnWrapper : le.miniWrapper
                          ),
                          c ? { marginBottom: -12 } : {}
                        ),
                        children: [
                          (0, x.tZ)(y.Image, {
                            style: le.bg,
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/dxbj@3x.png",
                          }),
                          (0, x.tZ)(re, (0, r.Z)({}, e)),
                          (0, x.tZ)(Y.Z, {
                            loop: !1,
                            defaultImg:
                              "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/xz.gif",
                            style: le.lottie,
                            source:
                              "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/xiaozhi.json",
                          }),
                        ],
                      }),
                  ],
                })
              );
            }),
            le = (0, E.lW)({
              container: { marginTop: 13 },
              icon: { width: 26, height: 26, marginRight: 4 },
              icon2: { width: 16, height: 16, marginRight: 5 },
              title: {
                fontSize: 22,
                color: "#222",
                fontWeight: "500",
                lineHeight: 28,
              },
              subTitle: {
                fontSize: 14,
                color: "#6a7078",
                lineHeight: 18,
                marginTop: 5,
              },
              rnWrapper: {
                position: "relative",
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-start",
                marginLeft: 8,
                marginRight: 8,
                marginBottom: -12,
                height: 66,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              miniWrapper: {
                flex: 1,
                display: "flex",
                position: "relative",
                flexDirection: "row",
                alignItems: "flex-start",
                marginLeft: 8,
                marginRight: 8,
                height: 66,
                marginBottom: -66,
                transition: "all ease .5s",
                boxSizing: "border-box",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              flexCenter: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              richText: { fontSize: 14, lineHeight: 20 },
              bg: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 66,
              },
              tipsText: { fontSize: 14, color: "#fff", lineHeight: 20 },
              tipsTime1: {
                marginLeft: 6,
                marginRight: 6,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 2,
                paddingBottom: 2,
                borderWidth: 0.5,
                borderColor: "#00fff4",
                borderRadius: 7,
                color: "#00fff4",
                fontSize: 16,
                fontFamily: "ZX-Regular",
                lineHeight: 18,
                borderStyle: "solid",
              },
              tipsTime2: {
                marginLeft: 6,
                marginRight: 6,
                paddingTop: 2,
                paddingBottom: 2,
                borderRadius: 7,
                color: "#00fff4",
                lineHeight: 20,
                fontWeight: "500",
                fontSize: 14,
              },
              lottie: {
                position: "absolute",
                right: 0,
                top: 1,
                width: 82,
                height: 55,
              },
              floatTips: { position: "absolute", right: 6, top: -40 },
              floatTxt: {
                paddingLeft: 6,
                paddingRight: 6,
                borderRadius: 6,
                height: 21,
                lineHeight: 21,
                color: "#ffffff",
                fontSize: 10,
                fontFamily: "PingFangSC-Regular",
                backgroundColor: "#000000",
              },
              angleIcon: {
                position: "absolute",
                bottom: -5,
                right: 22,
                width: 24,
                height: 5,
              },
            }),
            se = g.default.memo(function (e) {
              var t,
                i = e.ticketList,
                n = void 0 === i ? [] : i,
                a = (0, g.useState)(!1),
                o = (0, N.Z)(a, 2),
                l = o[0],
                s = o[1],
                c = function (e, t) {
                  return (0, x.BX)(
                    y.View,
                    {
                      style: (0, r.Z)((0, r.Z)({}, ce.ticketWrapper), {
                        marginBottom:
                          t === (null == n ? void 0 : n.length) - 1 ? 0 : 8,
                      }),
                      children: [
                        (0, x.BX)(y.View, {
                          style: ce.trainInfoWrapper,
                          children: [
                            (0, x.BX)(y.View, {
                              style: ce.displayFlex,
                              children: [
                                (0, x.tZ)(y.Text, {
                                  style: ce.time,
                                  children: null == e ? void 0 : e.departTime,
                                }),
                                (0, x.tZ)(y.Text, {
                                  style: ce.station,
                                  children:
                                    null == e ? void 0 : e.departStation,
                                }),
                              ],
                            }),
                            (0, x.BX)(y.View, {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              },
                              children: [
                                (0, x.BX)(y.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 6,
                                  },
                                  children: [
                                    (0, x.tZ)(j.Z, {
                                      start: { x: 0, y: 1 },
                                      end: { x: 1, y: 1 },
                                      colors: [
                                        "rgba(135,159,194,0)",
                                        "#879FC2",
                                      ],
                                      locations: [0, 1],
                                      style: { width: 13, height: 1 },
                                      miniDirection: "X",
                                    }),
                                    (0, x.tZ)(y.View, {
                                      style: ce.timeTag,
                                      children: (0, x.tZ)(y.View, {
                                        style: ce.timeTagText,
                                        children: "时刻表",
                                      }),
                                    }),
                                    (0, x.tZ)(j.Z, {
                                      start: { x: 1, y: 1 },
                                      end: { x: 0, y: 1 },
                                      colors: [
                                        "rgba(135,159,194,0)",
                                        "#879FC2",
                                      ],
                                      locations: [0, 1],
                                      style: { width: 13, height: 1 },
                                      miniDirection: "-X",
                                    }),
                                  ],
                                }),
                                (0, x.BX)(y.Text, {
                                  style: ce.trainNo,
                                  children: [
                                    null == e ? void 0 : e.trainNo,
                                    "·",
                                    null == e ? void 0 : e.costTime,
                                  ],
                                }),
                              ],
                            }),
                            (0, x.BX)(y.View, {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                              },
                              children: [
                                (0, x.tZ)(y.Text, {
                                  style: ce.time,
                                  children: null == e ? void 0 : e.arriveTime,
                                }),
                                (0, x.tZ)(y.Text, {
                                  style: ce.station,
                                  children:
                                    null == e ? void 0 : e.arriveStation,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, x.tZ)(y.View, { style: ce.line }),
                        (0, x.BX)(y.View, {
                          style: { display: "flex", flexDirection: "row" },
                          children: [
                            (0, x.tZ)(y.Text, {
                              style: ce.departTime,
                              children: "出发时间",
                            }),
                            (0, x.tZ)(y.Text, {
                              style: ce.departTimeDetail,
                              children: null == e ? void 0 : e.ticketDate,
                            }),
                            (0, x.tZ)(y.Text, {
                              style: ce.ticketSeatName,
                              children: null == e ? void 0 : e.seatName,
                            }),
                            (0, x.tZ)(y.Text, {
                              style: ce.ticketDesc,
                              children: null == e ? void 0 : e.remark,
                            }),
                          ],
                        }),
                      ],
                    },
                    t
                  );
                },
                d = (0, x.tZ)(y.View, {
                  id: "AMDe",
                  onClick: function () {
                    s(!0);
                  },
                  style: ce.showMore,
                  children: (0, x.BX)(y.View, {
                    style: ce.showMoreInner,
                    children: [
                      (0, x.tZ)(y.Text, {
                        style: ce.showMoreText,
                        children: "查看全部",
                      }),
                      (0, x.tZ)(y.Image, {
                        style: (0, r.Z)(
                          {},
                          {
                            width: 12,
                            height: 12,
                            marginLeft: 4,
                            marginTop: w.Z.isCRN ? 0 : -2,
                          }
                        ),
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/jtjt@3x.png",
                      }),
                    ],
                  }),
                });
              return (0,
              x.BX)(y.View, { style: ce.container, children: [l ? (null == n ? void 0 : n.map(c)) : null == n || null === (t = n.slice(0, 1)) || void 0 === t ? void 0 : t.map(c), (null == n ? void 0 : n.length) > 1 && !l && d] });
            }),
            ce = (0, E.lW)({
              container: {
                marginLeft: 8,
                marginRight: 8,
                position: "relative",
                borderRadius: 12,
                zIndex: 1e3,
              },
              displayFlex: { display: "flex", flexDirection: "column" },
              ticketWrapper: {
                paddingTop: 11,
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 14,
                marginBottom: 8,
                borderRadius: 12,
                backgroundColor: "#fff",
                borderColor: "#f5f5f5",
                zIndex: 100,
              },
              trainInfoWrapper: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              time: {
                marginBottom: 6,
                fontSize: 26,
                color: "#333",
                fontFamily: "ZX-Regular",
              },
              station: { fontSize: 13, color: "#333", lineHeight: 16 },
              trainNo: { fontSize: 12, color: "#222", lineHeight: 17 },
              timeTag: {
                paddingLeft: 7,
                paddingRight: 7,
                paddingTop: 3,
                paddingBottom: 3,
                borderWidth: 1,
                borderColor: "#879fc2",
                borderRadius: 8,
                borderStyle: "solid",
              },
              timeTagText: {
                color: "#3c5a86",
                fontSize: 12,
                fontWeight: "600",
              },
              line: {
                marginTop: 12,
                marginBottom: 10,
                width: "100%",
                height: 0.3,
                backgroundColor: "#ededed",
              },
              showMore: {
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 10,
                paddingTop: 12,
                marginTop: -18,
                backgroundColor: "#fff",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              },
              showMoreInner: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 10,
                height: 36,
              },
              showMoreText: { fontSize: 12, color: "#666", lineHeight: 17 },
              departTime: { fontSize: 13, color: "#666", lineHeight: 18 },
              departTimeDetail: {
                fontSize: 13,
                color: "#666",
                lineHeight: 18,
                marginLeft: 6,
              },
              ticketSeatName: {
                fontSize: 13,
                color: "#666",
                lineHeight: 18,
                marginLeft: 12,
              },
              ticketDesc: {
                fontSize: 13,
                color: "#198cff",
                lineHeight: 18,
                marginLeft: "auto",
              },
            }),
            de = g.default.memo(function (e) {
              var t,
                i,
                n = e.ticketList,
                r = void 0 === n ? [] : n,
                a = e.showToast,
                o = e.passengerInfo,
                l = void 0 === o ? [] : o,
                s = e.orderInfo,
                c = void 0 === s ? {} : s,
                d = e.showWaitingNumberToast,
                u = null == r ? void 0 : r[0],
                h = u.arriveStation,
                g = void 0 === h ? "" : h,
                m = u.departStation,
                f = void 0 === m ? "" : m,
                _ = u.ticketDate,
                p = void 0 === _ ? "" : _,
                b = u.trainNo,
                Z = void 0 === b ? "" : b,
                T = u.remark,
                w = void 0 === T ? "" : T,
                v = u.seatName,
                S = void 0 === v ? "" : v,
                N = u.rankDesc,
                C = void 0 === N ? "" : N,
                I =
                  null == l ||
                  null ===
                    (t = l.map(function (e) {
                      return null == e ? void 0 : e.passengerName;
                    })) ||
                  void 0 === t
                    ? void 0
                    : t.join("、");
              return (0,
              x.BX)(y.View, { className: " _zu _py _dc _jj", children: [(0, x.BX)(y.View, { className: " _i _Ga _l", style: { marginBottom: 4 }, children: [(0, x.BX)(y.View, { className: " _i _Ga _l", children: [(0, x.tZ)(y.Text, { className: " _Hf _dd", children: f }), (0, x.tZ)(y.Image, { className: " _fl _Ye _ii", src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/jd@3x.png" }), (0, x.tZ)(y.Text, { className: " _Hf _dd", children: g })] }), 3 === (null == c ? void 0 : c.statusCode) && (0, x.tZ)(y.View, { className: " _Qu _Ru _Su _x _Ee", children: "待兑现" }), (0, x.BX)(y.View, { className: " _i _Ga _l _ex", id: "AMDd", onClick: a, children: [(0, x.tZ)(y.Text, { className: " _F _Kc", children: "详情" }), (0, x.tZ)(y.Image, { className: " _ot _dj _Og", src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_morego@3x.png" })] })] }), (0, x.BX)(y.View, { className: " _i _Ga _l", style: { marginBottom: 6 }, children: [(0, x.tZ)(y.Text, { className: " _E _Nd", children: null == p || null === (i = p.split(" ")) || void 0 === i ? void 0 : i[0] }), (0, x.tZ)(y.View, { className: " _wl _dg _Jt _Dm" }), (0, x.tZ)(y.Text, { className: " _E _Nd", children: Z }), (0, x.tZ)(y.View, { className: " _wl _dg _Jt _Dm" }), (0, x.tZ)(y.Text, { className: " _E _Nd", children: S }), I && (0, x.tZ)(y.View, { className: " _wl _dg _Jt _Dm" }), (0, x.tZ)(y.Text, { className: " _E _Nd", children: I })] }), (0, x.BX)(y.View, { className: " _i _Ga _l", children: [(0, x.tZ)(y.Text, { className: " _E _Nd", children: w }), C && C.length > 0 && (0, x.BX)(y.View, { className: " _i _Ga _l", onClick: d, children: [(0, x.tZ)(y.Text, { className: " _E _Nd", children: "·" }), (0, x.tZ)(y.Text, { className: " _E _x", children: C }), (0, x.tZ)(y.Image, { className: " _xl _gb _Og", src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/i@3x.png" })] })] })] });
            }),
            ue = i(32970),
            he = g.default.memo(function (e) {
              var t = e.passengerInfo,
                i = void 0 === t ? [] : t,
                n = function () {
                  (0, ue.jn)(
                    "https://".concat(
                      w.Z.isTieyou ? "m.tieyou.com" : "m.suanya.com",
                      "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=child"
                    )
                  );
                };
              return (0, x.tZ)(j.Z, {
                start: { x: 0, y: 0 },
                end: { x: 0, y: 1 },
                colors: ["rgba(255,255,255,0.4)", "#fff"],
                locations: [0, 1],
                style: ge.container,
                children: i.map(function (e, t) {
                  var i;
                  return (0,
                  x.BX)(y.View, { style: (0, r.Z)((0, r.Z)({}, ge.passengerWrapper), { borderTopWidth: t > 0 ? 0.3 : 0 }), children: [(0, x.BX)(y.View, { style: { display: "flex", flexDirection: "row", alignItems: "center" }, children: [(0, x.tZ)(y.Text, { style: ge.passengerName, children: null == e ? void 0 : e.passengerName }), (0, x.tZ)(y.View, { style: ge.tag, children: (0, x.tZ)(y.Text, { style: ge.tagText, children: null == e ? void 0 : e.passengerType }) }), !!e.isFreeChildren && !!e.freeDesc && (0, x.tZ)(y.View, { style: (0, r.Z)((0, r.Z)({}, ge.tag), { borderColor: "#03B86F" }), children: (0, x.tZ)(y.Text, { style: (0, r.Z)((0, r.Z)({}, ge.tagText), { color: "#03B86F" }), children: null == e ? void 0 : e.freeDesc }) })] }), (0, x.BX)(y.View, { style: { display: "flex", flexDirection: "row", alignItems: "center", marginTop: 4 }, children: [(0, x.BX)(y.Text, { style: ge.passengerNumber, children: [null == e ? void 0 : e.passportType, " ", null == e ? void 0 : e.passportNumber] }), (null == e || null === (i = e.passengerType) || void 0 === i ? void 0 : i.includes("儿童")) && (0, x.tZ)(y.Text, { style: ge.childTips, id: "AMDY", onClick: n, children: "儿童票说明" })] })] }, null == e ? void 0 : e.passportNumber);
                }),
              });
            }),
            ge = (0, E.lW)({
              container: {
                marginBottom: 8,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                paddingLeft: 16,
                paddingRight: 16,
                marginTop: -14,
                paddingTop: 14,
                overflow: "hidden",
                width: "100%",
              },
              passengerWrapper: {
                paddingTop: 14,
                paddingBottom: 14,
                borderColor: "#f5f5f5",
                zIndex: 100,
              },
              passengerName: {
                fontSize: 16,
                color: "#222",
                lineHeight: 20,
                fontWeight: "500",
              },
              tag: {
                borderStyle: "solid",
                borderWidth: 0.5,
                borderColor: "#ccc",
                marginLeft: 6,
                borderRadius: 4,
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop: 2,
                paddingBottom: 2,
                display: "flex",
                lineHeight: 13,
              },
              tagText: { fontSize: 9, color: "#999" },
              passengerNumber: { fontSize: 12, color: "#999", lineHeight: 16 },
              childTips: {
                marginLeft: 12,
                color: "#198CFF",
                fontSize: 12,
                lineHeight: 16,
              },
            }),
            me = g.default.memo(function (e) {
              var t = e.orderInfo,
                i = e.isShowTitle,
                n = void 0 === i || i,
                a = e.propStyle,
                o = (0, g.useState)(function () {
                  return !n;
                }),
                l = (0, N.Z)(o, 2),
                s = l[0],
                c = l[1],
                d = s
                  ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/s@3x.png"
                  : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/xxx@3x.png",
                u = function (e, t) {
                  var i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "",
                    n =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3];
                  return t
                    ? (0, x.BX)(y.View, {
                        style: (0, r.Z)((0, r.Z)({}, fe.orderWrapper), {
                          borderTopWidth: n ? 0.3 : 0,
                        }),
                        children: [
                          (0, x.tZ)(y.Text, { style: fe.left, children: e }),
                          (0, x.tZ)(y.Text, { style: fe.right, children: t }),
                          !!i &&
                            (0, x.tZ)(y.View, {
                              style: fe.tag,
                              children: (0, x.tZ)(y.Text, {
                                style: fe.tagText,
                                children: i,
                              }),
                            }),
                        ],
                      })
                    : (0, x.tZ)(x.HY, {});
                },
                h = (0, x.BX)(y.View, {
                  style: (0, r.Z)({}, fe.titleWrapper),
                  children: [
                    (0, x.tZ)(y.Text, {
                      style: fe.titleText,
                      children: "订单信息",
                    }),
                    (0, x.BX)(y.View, {
                      style: fe.subTitleWrapper,
                      id: "AMDX",
                      onClick: function () {
                        return c(!s);
                      },
                      children: [
                        (0, x.tZ)(y.Text, {
                          style: fe.subTitleText,
                          children: "详情",
                        }),
                        (0, x.tZ)(y.Image, {
                          style: { width: 12, height: 6 },
                          src: d,
                        }),
                      ],
                    }),
                  ],
                });
              return (0,
              x.BX)(y.View, { style: (0, r.Z)((0, r.Z)({}, fe.container), a || {}), children: [n && h, s && (0, x.BX)(x.HY, { children: [u("预付金额", null == t ? void 0 : t.priceDesc, null == t ? void 0 : t.priceTag, !1), u("截止时间", null == t ? void 0 : t.realizeLimitTimeDesc), u("接受无座", null == t ? void 0 : t.acceptNoSeatDesc), u("候补单号", null == t ? void 0 : t.candidateNumber)] })] });
            }),
            fe = (0, E.lW)({
              container: {
                marginBottom: 8,
                borderRadius: 12,
                paddingLeft: 16,
                paddingRight: 16,
                backgroundColor: "#fff",
                overflow: "hidden",
              },
              titleWrapper: {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 15,
                paddingBottom: 15,
                display: "flex",
              },
              titleText: {
                fontSize: 16,
                color: "#222",
                fontWeight: "500",
                lineHeight: 20,
              },
              subTitleText: {
                fontSize: 12,
                color: "#999",
                lineHeight: 19,
                marginRight: 4,
              },
              subTitleWrapper: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              orderWrapper: {
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 16,
                paddingBottom: 16,
                borderColor: "#f5f5f5",
                borderStyle: "solid",
                borderTopWidth: 0.5,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                display: "flex",
              },
              left: {
                fontSize: 16,
                color: "#999",
                lineHeight: 20,
                marginRight: 16,
              },
              right: { fontSize: 16, color: "#222", lineHeight: 20 },
              tag: {
                lineHeight: 12,
                display: "flex",
                paddingTop: 1,
                paddingBottom: 2,
                paddingLeft: 3,
                paddingRight: 3,
                borderWidth: 0.5,
                borderColor: "#ffd9b2",
                borderRadius: 4,
                marginLeft: 6,
                borderStyle: "solid",
              },
              tagText: { fontSize: 10, color: "#fd9227" },
            }),
            _e = i(53550),
            pe = function (e) {
              var t = e.page,
                i = t.state.orderInfo,
                n = void 0 === i ? {} : i;
              if (
                1 !== (null == n ? void 0 : n.isZhiXingCandidateOrder) ||
                ![3, 6].includes(null == n ? void 0 : n.statusCode)
              )
                return (0, x.tZ)(x.HY, {});
              return (0, x.tZ)(y.View, {
                id: "AMDP",
                onClick: function () {
                  t.setState({ showCancelOrderToast: !0 });
                },
                className: " _i _n _l _Rd _ss _jj _Oa",
                children: (0, x.tZ)(y.Text, {
                  className: " _G _Kc _U",
                  children: "取消订单",
                }),
              });
            },
            be = i(33003),
            ye = i(82977),
            Ze = g.default.memo(function (e) {
              var t = e.isShow,
                i = e.cancel,
                n = e.confirm,
                r = (0, be.c)(i),
                a = r.modalRef,
                o = r.modalClose;
              return t
                ? (0, x.tZ)(ye.Z, {
                    ref: a,
                    onCancel: o,
                    innerContainerStyle: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      backgroundColor: "#fff",
                    },
                    children: (0, x.BX)(y.View, {
                      className: " _p _Wb _md _Vb _i _k _l",
                      children: [
                        (0, x.tZ)(y.Image, {
                          className: " _Wb _od _u _q _s _t",
                          style: { width: (0, E.fM)() },
                          src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
                        }),
                        (0, x.tZ)(y.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                          className: " _u _xr _qk _cc _bc",
                          id: "AMDQ",
                          onClick: o,
                          webp: !0,
                        }),
                        (0, x.tZ)(y.View, {
                          className: " _p _bc _sb _pd _Oc",
                          children: "订单即将兑现，确认取消？",
                        }),
                        (0, x.tZ)(y.View, {
                          className: " _p _qd _rd _oc _sd _U _o",
                          children:
                            "候补取消后再次提交需重新排队，建议再耐心等待",
                        }),
                        (0, x.BX)(y.View, {
                          className: " _i _Ga _m _td _Cc _Z _Mb",
                          children: [
                            (0, x.tZ)(y.View, {
                              className: " _j _p _Gc _Qf _Xc _vd _Oa _o _x _Yw",
                              id: "AMDR",
                              onClick: o,
                              children: "我再等等",
                            }),
                            (0, x.tZ)(y.View, {
                              className: " _j _p _Gc _Xc _w _Oa _o _qb _Yw",
                              id: "AMDS",
                              onClick: n,
                              children: "确认取消",
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, x.tZ)(x.HY, {});
            }),
            Te = i(92049),
            we = i(70574),
            xe = function (e) {
              var t,
                i,
                n = e.statusCode;
              if (
                ![
                  we.sx.CANDIDATE_INTERCEPTED,
                  we.sx.CANDIDATE_CANCEL,
                  we.sx.CANDIDATE_FAIL,
                ].includes(n)
              )
                return (0, x.tZ)(x.HY, {});
              switch (n) {
                case we.sx.CANDIDATE_INTERCEPTED:
                  (t = "解决账号问题"), (i = ue.o$);
                  break;
                case we.sx.CANDIDATE_CANCEL || we.sx.CANDIDATE_FAIL:
                  (t = "重新下单"), (i = ue.Ku);
                  break;
                default:
                  (t = ""), (i = function () {});
              }
              return (0, x.BX)(y.View, {
                className: " _Ph _Vb _Wb _i _k _l",
                id: "AMDO",
                onClick: i,
                children: [
                  (0, x.tZ)(y.View, {
                    className: " _Qd _Gc _w _Oa _Xc _qb _Wc _o",
                    children: t,
                  }),
                  (0, x.tZ)(Te.Z, {}),
                ],
              });
            },
            ve = g.default.memo(function (e) {
              var t = e.isShow,
                i = e.confirm,
                n = e.cancel,
                r = (0, be.c)(n),
                a = r.modalRef,
                o = r.modalClose;
              return t
                ? (0, x.tZ)(ye.Z, {
                    ref: a,
                    onCancel: o,
                    innerContainerStyle: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      backgroundColor: "#fff",
                      overflow: "hidden",
                    },
                    children: (0, x.BX)(y.View, {
                      className: " _p _Wb _yc _i _k _l _Wx",
                      children: [
                        (0, x.tZ)(y.View, {
                          className: " _u _xr _qk _cc _bc _Ie",
                          id: "AMDb",
                          onClick: o,
                          children: (0, x.tZ)(y.Image, {
                            className: " _cc _bc",
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_tcgbss@3x.png",
                          }),
                        }),
                        (0, x.tZ)(j.Z, {
                          start: { x: 0, y: 0 },
                          end: { x: 0, y: 1 },
                          miniDirection: "Y",
                          colors: ["#DDEEFF", "#F7FBFF"],
                          locations: [0, 1],
                          className: " _u _q _s _Z _Zx",
                        }),
                        null !== w.Z && void 0 !== w.Z && w.Z.isCRN
                          ? (0, x.tZ)(y.View, {
                              className: " _Z _Xx _Wb",
                              children: (0, x.tZ)(Y.Z, {
                                defaultImg:
                                  "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/xcx.gif",
                                style: " _Yx _Xx",
                                source:
                                  "https://images3.c-ctrip.com/ztrip/train.song/order_details/Pop-ups/app.json",
                              }),
                            })
                          : (0, x.tZ)(y.Image, {
                              style: { width: 267, height: 150, zIndex: 100 },
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/xcx.gif",
                            }),
                        (0, x.tZ)(y.View, {
                          className: " _p _lf _dd _ay _Oc _o",
                          children: "下次去哪里找到订单",
                        }),
                        (0, x.BX)(y.View, {
                          className: " _i _Ga _l _Vv",
                          children: [
                            (0, x.tZ)(y.Text, {
                              className: " _p _oc _sd _U _o",
                              children: "抢票",
                            }),
                            (0, x.tZ)(y.Image, {
                              className: " _ot _dj _Dm",
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_morego@3x.png",
                            }),
                            (0, x.tZ)(y.Text, {
                              className: " _p _oc _sd _U _o",
                              children: "抢票列表",
                            }),
                          ],
                        }),
                        (0, x.tZ)(y.View, {
                          className: " _p _qf _ud _Gc _Xc _vd _Oa _o _x _Yw",
                          id: "AMDc",
                          onClick: function () {
                            o(), i();
                          },
                          children: "我知道了",
                        }),
                      ],
                    }),
                  })
                : (0, x.tZ)(x.HY, {});
            }),
            Se = i(62901),
            Ne = g.default.memo(function (e) {
              var t = e.candidateUpgradeInfo,
                i = void 0 === t ? {} : t,
                n = e.buttonTag,
                r = e.orderNumber;
              return (0, ee.Qr)(i)
                ? (0, x.tZ)(x.HY, {})
                : (0, x.BX)(y.View, {
                    className: " _Zw _Ay _jj _Oa",
                    children: [
                      (0, x.BX)(y.View, {
                        className: " _ob _i _Ga _l _m",
                        children: [
                          (0, x.BX)(y.View, {
                            className: " _i _k",
                            children: [
                              (0, x.tZ)(y.Text, {
                                className: " _E _Kc _Q",
                                children:
                                  (null == i ? void 0 : i.desc) ||
                                  "双通道模式抢票，成功率更高",
                              }),
                              (0, x.tZ)($.Z, {
                                className: " _Hf _dd _Gi _U",
                                children: null == i ? void 0 : i.title,
                              }),
                            ],
                          }),
                          (0, x.BX)(y.View, {
                            id: "AMDi",
                            onClick: function () {
                              (0, ue.Vu)(r);
                            },
                            className: " _p _ra _By _ue _gg _i _n _l",
                            children: [
                              (0, x.tZ)(y.Text, {
                                className: " _b _ck",
                                children: "免费升级",
                              }),
                              !!n &&
                                (0, x.tZ)(y.Image, {
                                  src: n || "",
                                  className: " _ka _ug _u _t _vg",
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, x.tZ)(y.Image, {
                        style: {
                          width: (0, E.u1)((0, E.Y1)() - 32),
                          height: (0, E.u1)((347 * ((0, E.Y1)() - 32)) / 542),
                          marginTop: 12,
                        },
                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_03/db@3x.png",
                      }),
                    ],
                  });
            }),
            Ce = i(94205),
            Ie = i(79634),
            Be = g.default.memo(function (e) {
              var t = e.showToast,
                i = e.orderInfo,
                n = void 0 === i ? {} : i,
                r = e.ubtTrace,
                a = e.pageId,
                o = n.candidateLuckyCodeShareInfo,
                l = void 0 === o ? {} : o,
                s = n.candidateLuckyCodeEntrance,
                c = void 0 === s ? {} : s;
              if (
                ((0, g.useEffect)(function () {
                  (0, ee.Qr)(l) ||
                    r("GrabAlternateDetail_ShareHbGoodLuckButton_exposure", {
                      channel: "Applets",
                      PageId: a,
                    }),
                    (0, ee.Qr)(
                      "GrabAlternateDetail_InputGoodLuckButton_exposure"
                    ) ||
                      r("GrabAlternateDetail_HoubuZdRukou_exposure", {
                        channel: "Applets",
                        PageId: a,
                      });
                }, []),
                (0, ee.Qr)(l) && (0, ee.Qr)(c))
              )
                return null;
              return (0, x.BX)(y.View, {
                className: " _Zw _ax _jj _Oa",
                children: [
                  !(0, ee.Qr)(l) &&
                    (0, x.BX)(j.Z, {
                      start: { x: 0, y: 0 },
                      end: { x: 1, y: 0 },
                      colors: ["#FFF9F4", "#FFEDDE"],
                      locations: [0, 1],
                      className: " _i _Ga _l _bx _dc",
                      children: [
                        (0, x.tZ)(y.Image, {
                          className: " _gp _ij _Ff",
                          src: null == l ? void 0 : l.icon,
                        }),
                        (0, x.BX)(y.View, {
                          className: " _i _k",
                          children: [
                            (0, x.tZ)(y.Text, {
                              className: " _cx _tb _U _Hp",
                              children: null == l ? void 0 : l.title,
                            }),
                            (0, x.tZ)(y.Text, {
                              className: " _dx _F _U",
                              children: null == l ? void 0 : l.desc,
                            }),
                          ],
                        }),
                        (0, x.tZ)(y.View, {
                          id: "AMDT",
                          onClick: function () {
                            null != l &&
                              l.jumpUrl &&
                              (r(
                                "GrabAlternateDetail_ShareHbGoodLuckButton_click",
                                { channel: "Applets", PageId: a }
                              ),
                              (0, F.jn)(null == l ? void 0 : l.jumpUrl));
                          },
                          className: " _i _n _l _ex _ue _gg _fx _ra _b _ck",
                          children: null == l ? void 0 : l.buttonName,
                        }),
                      ],
                    }),
                  !(0, ee.Qr)(c) &&
                    (0, x.BX)(y.View, {
                      id: "AMDU",
                      onClick: function () {
                        r("GrabAlternateDetail_InputGoodLuckButton_click", {
                          channel: "Applets",
                          PageId: a,
                        }),
                          t && t();
                      },
                      className: " _i _Ga _l _gx _hx",
                      children: [
                        (0, x.tZ)(y.Text, {
                          className: " _dd _Oj _U",
                          children: null == c ? void 0 : c.title,
                        }),
                        (0, x.tZ)(y.View, {
                          className: " _Ee _jj _ix _gf _Ze _Qk",
                          children: null == c ? void 0 : c.desc,
                        }),
                        (0, x.BX)(y.View, {
                          className: " _i _Ga _l _jx",
                          children: [
                            (0, x.tZ)(y.Text, {
                              className: " _Kc _E",
                              children: null == c ? void 0 : c.buttonName,
                            }),
                            (0, x.tZ)(y.Image, {
                              className: " _ot _dj _Og",
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_morego@3x.png",
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
            }),
            De = p().getSystemInfoSync().windowWidth,
            Ve = g.default.memo(function (e) {
              var t = e.isShow,
                i = e.cancel,
                n = e.page,
                r = (null == n ? void 0 : n.state) || {},
                l = r.orderNumber,
                s = void 0 === l ? {} : l,
                c = r.orderInfo,
                d = void 0 === c ? {} : c,
                u = ((null == d ? void 0 : d.candidateLuckyCodeEntrance) || {})
                  .useCodeToastInfo,
                h = void 0 === u ? {} : u,
                m = (0, be.c)(i),
                f = m.modalRef,
                _ = m.modalClose,
                b = (0, g.useState)(""),
                Z = (0, N.Z)(b, 2),
                T = Z[0],
                w = Z[1];
              if (!t) return (0, x.tZ)(x.HY, {});
              var v = (function () {
                var e = (0, o.Z)(
                  (0, a.Z)().mark(function e() {
                    return (0, a.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(T.length < 6)) {
                              e.next = 3;
                              break;
                            }
                            return (
                              p().showToast({
                                title: "请输入6位数好运码！",
                                icon: "none",
                                duration: 2e3,
                              }),
                              e.abrupt("return")
                            );
                          case 3:
                            (0, B.QI)({ orderNumber: s, luckCode: T })
                              .then(function (e) {
                                1 === e.resultCode
                                  ? ((0, A.PF)(n),
                                    _(),
                                    p().showToast({
                                      title: "接好运成功！",
                                      icon: "none",
                                      duration: 2e3,
                                    }))
                                  : p().showToast({
                                      title:
                                        e.resultMessage ||
                                        "好运码无效，请重新填写",
                                      icon: "none",
                                      duration: 2e3,
                                    });
                              })
                              .catch(function (e) {
                                p().showToast({
                                  title:
                                    e.message || "网络开小差了，请稍后再试～",
                                  icon: "none",
                                  duration: 2e3,
                                });
                              });
                          case 4:
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
              return (0, x.tZ)(ye.Z, {
                ref: f,
                onCancel: _,
                innerContainerStyle: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: "#fff",
                  overflow: "hidden",
                },
                children: (0, x.BX)(y.View, {
                  className: " _mx _go",
                  style: { paddingTop: 36 },
                  children: [
                    (0, x.tZ)(y.Text, {
                      style: {
                        position: "absolute",
                        top: 16,
                        left: 24,
                        color: "#8f1500",
                        fontSize: 20,
                        fontWeight: 600,
                        zIndex: 100,
                      },
                      children: null == h ? void 0 : h.title,
                    }),
                    (0, x.tZ)(y.Image, {
                      style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: De,
                        height: 140,
                      },
                      src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/bgtq@3x.png",
                    }),
                    (0, x.BX)(y.View, {
                      className: " _p _Mb _nx _ox _jj _Oa _Ie _yc",
                      children: [
                        (0, x.tZ)(y.View, {
                          className: " _u _px _qx _i _Ga _m _ce",
                          style: { width: De - 60, top: 26 },
                          children: (function () {
                            for (var e = [], t = 0; t < 6; t++)
                              e.push(
                                (0, x.tZ)(
                                  y.View,
                                  {
                                    className:
                                      " _i _n _l _ja _hs _rx _Xa _sx _tx",
                                    children: T[t],
                                  },
                                  t
                                )
                              );
                            return e;
                          })(),
                        }),
                        (0, x.tZ)(y.Input, {
                          style: {
                            marginTop: 32,
                            marginLeft: -120,
                            height: 55,
                          },
                          value: T,
                          className: " _ux _hs _pe _vx",
                          maxlength: 6,
                          type: "text",
                          onInput: function (e) {
                            var t = e.target.value;
                            t.length > 6 || w(t);
                          },
                          onBlur: function () {
                            w("");
                          },
                          focus: !0,
                          holdKeyboard: !0,
                        }),
                      ],
                    }),
                    (0, x.tZ)(y.View, {
                      className: " _Ph _Vb _Wb _i _k _l _Wq",
                      children: (0, x.BX)(y.View, {
                        className: " _i _k _n _l _Qd _Gc _w _Oa",
                        id: "AMDW",
                        onClick: v,
                        children: [
                          (0, x.tZ)(y.Text, {
                            className: " _b _Ic _Hp",
                            children: null == h ? void 0 : h.buttonName,
                          }),
                          (0, x.tZ)(y.Text, {
                            className: " _b _B",
                            children: null == h ? void 0 : h.buttonDesc,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              });
            }),
            ke = i(92001),
            Re = !1,
            ze = [
              "fontSize",
              "lineHeight",
              "letterSpacing",
              "width",
              "minWidth",
              "maxWidth",
              "height",
              "minHeight",
              "maxHeight",
              "top",
              "bottom",
              "left",
              "right",
              "margin",
              "marginBottom",
              "marginTop",
              "marginLeft",
              "marginRight",
              "padding",
              "paddingBottom",
              "paddingTop",
              "paddingLeft",
              "paddingRight",
              "borderWidth",
              "borderTopWidth",
              "borderRightWidth",
              "borderBottomWidth",
              "borderLeftWidth",
              "borderRadius",
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
              "transform",
              "flexBasis",
            ];
          function Fe(e) {
            return (
              Object.keys(e).forEach(function (t) {
                ze.includes(t) &&
                  ("[object Number]" === Object.prototype.toString.call(e[t])
                    ? (e[t] = 2 * e[t] + "rpx")
                    : "transform" === t &&
                      (e[t] = (function (e) {
                        if (!Array.isArray(e)) return e;
                        var t = "";
                        return (
                          e.forEach(function (e) {
                            var i = Object.keys(e) || [];
                            "[object Number]" ===
                            Object.prototype.toString.call(e[i[0]])
                              ? (t += ""
                                  .concat(i[0], "(")
                                  .concat(2 * e[i[0]], "rpx) "))
                              : (t += ""
                                  .concat(i[0], "(")
                                  .concat(e[i[0]], ") "));
                          }),
                          t
                        );
                      })(e[t])));
              }),
              e
            );
          }
          function Xe(e) {
            if (Re) return e;
            var t = {};
            return (
              Array.isArray(e)
                ? e.forEach(function (e) {
                    Object.assign(t, e);
                  })
                : Object.assign(t, e),
              Fe(t)
            );
          }
          var Le,
            je = function (e) {
              return (
                Re ||
                  (Object.keys(e).forEach(function (t) {
                    e[t] = Fe(e[t]);
                  }),
                  console.log(e)),
                e
              );
            },
            Ae = function (e) {
              var t = e.dashColor,
                i = void 0 === t ? "#DBE2EC" : t,
                n = e.dashStyle,
                r = void 0 === n ? {} : n,
                a = e.style,
                o = e.width;
              return (0, x.tZ)(y.View, {
                style: Xe([
                  {
                    display: "flex",
                    borderTopStyle: "dashed",
                    borderTopColor: i,
                    borderTopWidth: 0.5,
                    borderBottomWidth: 0,
                    width: o,
                  },
                  r,
                  a,
                ]),
              });
            },
            We = je({
              solidline: {
                flex: 1,
                display: "flex",
                height: 1,
                backgroundColor: "#DBE2EC",
              },
            }),
            Pe = function (e) {
              var t = e.width;
              return (0, x.tZ)(y.View, {
                style: Xe([We.solidline, t ? { width: t } : {}]),
              });
            },
            Ge = function () {
              return (0, x.tZ)(y.View, {
                style: Xe([He.circleWrap]),
                children: (0, x.tZ)(y.View, { style: He.circle }),
              });
            },
            He = je({
              circleWrap: {
                height: 17,
                marginTop: 3,
                marginBottom: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              circle: {
                width: 7,
                height: 7,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#DBE2EC",
                borderRadius: "50%",
              },
            });
          !(function (e) {
            (e[(e.BuyAndGrab = 1)] = "BuyAndGrab"),
              (e[(e.CombineSeat = 2)] = "CombineSeat"),
              (e[(e.BuyMore = 3)] = "BuyMore"),
              (e[(e.Transfer = 7)] = "Transfer");
          })(Le || (Le = {}));
          var Oe,
            Ee = function (e) {
              try {
                if (!e) return "0分";
                var t = Math.floor(e / 60),
                  i = e % 60;
                return t > 0
                  ? "".concat(t, "小时").concat(i, "分")
                  : "".concat(i, "分");
              } catch (t) {
                return console.error(t), e;
              }
            },
            Me = function (e) {
              var t = e.width;
              return (0, x.tZ)(Ae, {
                width: t,
                dashColor: "#DBE2EC",
                style: { flex: 1, height: 1 },
              });
            },
            qe = function (e) {
              var t = e.name;
              return (0, x.tZ)(y.View, {
                style: Xe([dt, ht, at.bdOp]),
                children: (0, x.tZ)(y.Text, {
                  style: at.bdOpTxt,
                  numberOfLines: 1,
                  children: t || "",
                }),
              });
            },
            Ye = function (e) {
              var t = e.time,
                i = e.station,
                n = e.type,
                r = e.name,
                a = e.dash,
                o = e.flex,
                l =
                  "start" == n ? lt.alignStart : "end" == n ? lt.alignEnd : ut;
              return (0, x.BX)(y.View, {
                style: Xe([
                  { flex: o || 1, flexDirection: "column", width: "100%" },
                  l,
                ]),
                children: [
                  (0, x.tZ)(y.Text, { style: at.time, children: t || "" }),
                  (0, x.BX)(y.View, {
                    style: Xe([dt, ut, { width: "100%" }]),
                    children: [
                      ("mid" == n || "end" == n) &&
                        (a
                          ? (0, x.tZ)(Me, { width: "100%" })
                          : (0, x.tZ)(Pe, { width: "100%" })),
                      (0, x.tZ)(qe, { name: r }),
                      ("mid" == n || "start" == n) &&
                        (0, x.tZ)(Pe, { width: "100%" }),
                    ],
                  }),
                  (0, x.tZ)(y.Text, {
                    style: at.station,
                    numberOfLines: 1,
                    children: i || "",
                  }),
                ],
              });
            },
            Ue = function (e) {
              var t = e.name;
              return (0, x.tZ)(y.View, {
                style: Xe([at.seat, ht]),
                children: (0, x.tZ)(y.Text, {
                  style: at.seatTxt,
                  children: t || "",
                }),
              });
            },
            Qe = function (e) {
              var t = e.name;
              return (0, x.tZ)(y.View, {
                style: Xe([dt, ht, at.chgOp]),
                children: (0, x.tZ)(y.Text, {
                  style: at.chgOpTxt,
                  children: t || "",
                }),
              });
            },
            Je = function (e) {
              var t = e.changeTime,
                i = e.changeStation,
                n = e.name;
              return (0, x.BX)(y.View, {
                style: Xe([ct, ut]),
                children: [
                  (0, x.tZ)(y.Text, { style: at.chgTime, children: t || "" }),
                  (0, x.BX)(y.View, {
                    style: Xe([dt, ut]),
                    children: [
                      (0, x.tZ)(Pe, { width: "10vw" }),
                      (0, x.tZ)(Qe, { name: n }),
                      (0, x.tZ)(Pe, { width: "10vw" }),
                    ],
                  }),
                  (0, x.tZ)(y.Text, {
                    style: at.chgStation,
                    numberOfLines: 1,
                    children: i || "",
                  }),
                ],
              });
            },
            Ke = function (e) {
              var t = (0, g.useState)(73),
                i = (0, N.Z)(t, 2),
                n = i[0],
                r = i[1],
                a = e.subTrainSegments;
              if (null == a || !a.length) return null;
              var o = a[0] || {},
                l = o.fromStation,
                s = o.toStation,
                c = o.startTime,
                d = o.arriveTime,
                u = o.seatName,
                h = a[1] || {},
                m = h.toStation,
                f = h.arriveTime,
                _ = h.seatName,
                p = (1.5 * n - 26 - 23) / 2 - (n - 26);
              return (0, x.BX)(y.View, {
                style: Xe([ct, dt, ut]),
                children: [
                  (0, x.BX)(y.View, {
                    style: Xe([ct, { zIndex: 1, position: "relative" }]),
                    onLayout: function (e) {
                      var t = e.nativeEvent.layout;
                      t.width && r(t.width);
                    },
                    children: [
                      (0, x.tZ)(Ye, {
                        time: c,
                        station: l,
                        name: "上车",
                        type: "start",
                      }),
                      (0, x.tZ)(y.View, {
                        style: Xe([
                          lt.float,
                          {
                            right: 0,
                            transform: [
                              {
                                translateX:
                                  p + 5 * (null == u ? void 0 : u.length) + 6,
                              },
                            ],
                          },
                        ]),
                        children: (0, x.tZ)(Ue, { name: u }),
                      }),
                    ],
                  }),
                  (0, x.tZ)(Je, {
                    changeTime: d,
                    changeStation: s,
                    name: "车内换座",
                  }),
                  (0, x.BX)(y.View, {
                    style: Xe([ct, { zIndex: 1, position: "relative" }]),
                    children: [
                      (0, x.tZ)(y.View, {
                        style: Xe([
                          lt.float,
                          {
                            left: 0,
                            transform: [
                              {
                                translateX:
                                  -p - 5 * (null == _ ? void 0 : _.length) - 4,
                              },
                            ],
                          },
                        ]),
                        children: (0, x.tZ)(Ue, { name: _ }),
                      }),
                      (0, x.tZ)(Ye, {
                        time: f,
                        station: m,
                        name: "下车",
                        type: "end",
                      }),
                    ],
                  }),
                ],
              });
            },
            $e = function (e) {
              var t = e.time,
                i = void 0 === t ? "" : t,
                n = e.station,
                r = void 0 === n ? "" : n,
                a = e.type,
                o = "start" == a ? gt : "end" == a ? mt : ut;
              return (0, x.BX)(y.View, {
                style: Xe([ct, o, { width: "100%" }]),
                children: [
                  (0, x.tZ)(y.Text, { style: at.chgTime, children: i || "" }),
                  (0, x.BX)(y.View, {
                    style: Xe([dt, ut, { width: "100%" }]),
                    children: [
                      ("mid" == a || "end" == a) && (0, x.tZ)(Pe, {}),
                      (0, x.tZ)(Ge, {}),
                      "start" == a && (0, x.tZ)(Pe, {}),
                      "mid" == a && (0, x.tZ)(Me, {}),
                    ],
                  }),
                  (0, x.tZ)(y.Text, {
                    style: at.chgStation,
                    numberOfLines: 1,
                    children: r || "",
                  }),
                ],
              });
            },
            et = function (e) {
              var t = e.subTrainSegments,
                i = e.originTrainInfo;
              if (null == t || !t.length) return null;
              var n = t[0] || {},
                r = n.fromStation,
                a = n.toStation,
                o = n.startTime,
                l = n.arriveTime,
                s = n.fromStationDiff,
                c = n.toStationDiff,
                d = i || {},
                u = d.departName,
                h = d.arriveName,
                g = d.departTime,
                m = d.arriveTime,
                f = s > 0,
                _ = c > 0;
              return (0, x.BX)(y.View, {
                style: Xe([ct, dt, ut]),
                children: [
                  f &&
                    (0, x.BX)(y.View, {
                      style: Xe([ct, { position: "relative" }]),
                      children: [
                        (0, x.tZ)($e, { time: o, station: r, type: "start" }),
                        (0, x.tZ)(y.View, {
                          style: Xe([lt.float, { right: 0 }]),
                          children: (0, x.tZ)(Qe, {
                            name: "多买".concat(s, "站"),
                          }),
                        }),
                      ],
                    }),
                  (0, x.tZ)(Ye, {
                    time: g,
                    station: u,
                    name: "上车",
                    type: f ? "mid" : "start",
                  }),
                  (0, x.tZ)(Ye, {
                    time: m,
                    station: h,
                    name: "下车",
                    type: _ ? "mid" : "end",
                  }),
                  _ &&
                    (0, x.BX)(y.View, {
                      style: Xe([ct, { position: "relative" }]),
                      children: [
                        (0, x.tZ)(y.View, {
                          style: lt.float,
                          children: (0, x.tZ)(Qe, {
                            name: "多买".concat(c, "站"),
                          }),
                        }),
                        (0, x.tZ)($e, { time: l, station: a, type: "end" }),
                      ],
                    }),
                ],
              });
            },
            tt = function (e) {
              var t = e.subTrainSegments,
                i = e.originTrainInfo;
              if (null == t || !t.length) return null;
              var n = t[0] || {},
                r = n.fromStation,
                a = n.toStation,
                o = n.startTime,
                l = n.arriveTime,
                s = n.toStationDiff,
                c = i || {},
                d = c.arriveTime,
                u = c.arriveName;
              return (0, x.BX)(y.View, {
                style: Xe([ct, dt, ut]),
                children: [
                  (0, x.tZ)(Ye, {
                    time: o,
                    station: r,
                    name: "上车",
                    type: "start",
                  }),
                  (0, x.tZ)($e, { time: l, station: a, type: "mid" }),
                  (0, x.BX)(y.View, {
                    style: Xe([ct, { position: "relative" }]),
                    children: [
                      (0, x.tZ)(y.View, {
                        style: Xe([lt.float, { left: -10 }]),
                        children: (0, x.tZ)(Qe, {
                          name: "补票".concat(Math.abs(s), "站"),
                        }),
                      }),
                      (0, x.tZ)(Ye, {
                        time: d,
                        station: u,
                        name: "下车",
                        type: "end",
                        dash: !0,
                      }),
                    ],
                  }),
                ],
              });
            },
            it = function (e) {
              var t = e.subTrainSegments,
                i = e.originTrainInfo,
                n = e.type;
              return n == Le.CombineSeat
                ? (0, x.tZ)(Ke, { subTrainSegments: t })
                : n == Le.BuyMore
                ? (0, x.tZ)(et, { subTrainSegments: t, originTrainInfo: i })
                : n == Le.BuyAndGrab
                ? (0, x.tZ)(tt, { subTrainSegments: t, originTrainInfo: i })
                : (0, x.tZ)(y.View, { style: ct });
            },
            nt = function (e) {
              return [Le.BuyAndGrab, Le.BuyMore, Le.CombineSeat].includes(e);
            },
            rt = function (e) {
              var t = e.smartSeatDetail,
                i = e.originTrainInfo,
                n = e.whiteBg,
                r = e.onClickBooking,
                a = e.outerStyle,
                o = e.reportExpose,
                l = a || {},
                s = l.btn,
                c = void 0 === s ? {} : s,
                d = l.btnText,
                u = void 0 === d ? {} : d,
                h = null == t ? void 0 : t.type;
              if (
                ((0, g.useEffect)(function () {
                  nt(h) && (null == o || o());
                }, []),
                !nt(h) || !t)
              )
                return null;
              var m = t.subTrainTripCard,
                f = t.subTrainSegments,
                _ = m || {},
                p = _.title,
                b = _.seatDesc,
                Z = _.button,
                T = _.totalPriceDesc;
              return (0, x.BX)(y.View, {
                style: Xe([
                  ot.container,
                  { paddingTop: n ? 5 : 9, paddingBottom: n ? 5 : 13 },
                ]),
                children: [
                  !n &&
                    (0, x.tZ)(ke.o, {
                      start: { x: 1, y: 0 },
                      end: { x: 0, y: 0 },
                      locations: [0, 1],
                      colors: ["rgb(250, 252, 255)", "rgb(245, 249, 255)"],
                      style: ot.bg,
                    }),
                  (0, x.BX)(y.View, {
                    style: Xe([dt, ut]),
                    children: [
                      (0, x.BX)(y.View, {
                        style: Xe([ct, dt, ut]),
                        children: [
                          (0, x.tZ)(y.Text, {
                            style: ot.title,
                            children: p || "",
                          }),
                          (0, x.tZ)(ke.Ho, {
                            style: ot.subTitle,
                            defaultColor: "#666",
                            lineHeight: 16,
                            children: b || "",
                          }),
                        ],
                      }),
                      (0, x.tZ)(y.Text, { style: ot.price, children: T || "" }),
                    ],
                  }),
                  (0, x.BX)(y.View, {
                    style: Xe([dt, ot.body]),
                    children: [
                      (0, x.tZ)(it, {
                        subTrainSegments: f,
                        originTrainInfo: i,
                        type: h,
                      }),
                      (0, x.tZ)(y.View, {
                        activeOpacity: 0.8,
                        style: Xe([ot.btn, lt.flexCenter, c]),
                        onClick: function () {
                          r(Z);
                        },
                        children: (0, x.tZ)(y.Text, {
                          style: Xe([ot.btnTxt, u]),
                          children: Z.value || "",
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
            at = je({
              time: {
                color: "#222222",
                fontSize: 16,
                fontFamily: "ZX-Regular",
                fontWeight: "normal",
                lineHeight: 18,
              },
              station: {
                color: "#222222",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                lineHeight: 16,
              },
              seat: {
                backgroundColor: "#F7FAFF",
                height: 17,
                marginTop: 3,
                marginBottom: 4,
                borderRadius: 5,
              },
              seatTxt: {
                color: "#879fc2",
                fontSize: 10,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                marginLeft: 4,
                marginRight: 4,
              },
              bdOp: {
                width: 26,
                height: 17,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#dbe2ec",
                borderRadius: 6,
                marginTop: 3,
                marginBottom: 4,
              },
              bdOpTxt: {
                color: "#3c5a86",
                fontSize: 9,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                textAlign: "center",
              },
              chgOp: {
                backgroundColor: "#e1e7f0",
                borderRadius: 6,
                height: 17,
                paddingLeft: 4,
                paddingRight: 4,
                marginTop: 3,
                marginBottom: 4,
              },
              chgOpTxt: {
                color: "#3c5a86",
                fontSize: 9,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                lineHeight: 13,
              },
              solidline: {
                height: 1,
                backgroundColor: "#DBE2EC",
                width: "100%",
              },
              chgTime: {
                color: "#999999",
                fontSize: 14,
                fontFamily: "ZX-Regular",
                fontWeight: "normal",
                lineHeight: 18,
              },
              chgStation: {
                color: "#999999",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                lineHeight: 16,
              },
            }),
            ot = je({
              container: {
                borderRadius: 8,
                paddingTop: 9,
                paddingBottom: 13,
                paddingLeft: 8,
                paddingRight: 8,
              },
              bg: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 8,
              },
              title: {
                color: "#222222",
                fontSize: 16,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                lineHeight: 20,
                marginRight: 8,
              },
              subTitle: { fontSize: 12, color: "#666" },
              price: {
                color: "#222222",
                fontSize: 19,
                fontFamily: "ZX-Regular",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 20,
              },
              body: { marginTop: 8, alignItems: "flex-end" },
              btn: {
                width: 68,
                height: 28,
                backgroundColor: "#198cff",
                borderRadius: 8,
                marginLeft: 40,
                display: "flex",
                flexShrink: 0,
                flexGrow: 0,
              },
              btnTxt: {
                textAlign: "center",
                color: "#ffffff",
                fontSize: 14,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                lineHeight: 18,
              },
            }),
            lt = je({
              container: { borderRadius: 12 },
              bg: {
                position: "absolute",
                zIndex: 0,
                top: 0,
                left: 0,
                right: 0,
                height: 77,
                borderRadius: 12,
              },
              whiteBox: {
                borderRadius: 12,
                backgroundColor: "#fff",
                padding: 8,
              },
              separator: {
                paddingTop: 8,
                marginTop: 9,
                paddingBottom: 4,
                borderTopWidth: 0.5,
                borderTopColor: "rgba(0, 0, 0, 0.05)",
              },
              flex1: { display: "flex", flex: 1, flexDirection: "column" },
              flexRow: { display: "flex", flexDirection: "row" },
              alignStart: { display: "flex", alignItems: "flex-start" },
              alignEnd: { display: "flex", alignItems: "flex-end" },
              alignCenter: { display: "flex", alignItems: "center" },
              flexCenter: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              head: { height: 46 },
              headIconWrap: {
                marginBottom: 2,
                marginLeft: 4,
                width: 66,
                height: 44,
              },
              headIcon: { width: 66, height: 44 },
              title: {
                color: "#f9fcfe",
                fontSize: 14,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                lineHeight: 20,
                marginLeft: -7,
              },
              subhead: { height: 44 },
              trainIcon: {
                marginLeft: 8,
                marginRight: 4,
                width: 18,
                height: 18,
              },
              subtitle: {
                color: "#666",
                fontSize: 14,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
              },
              rBtn: {
                color: "#ffffff",
                fontSize: 14,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                lineHeight: 19,
              },
              rArrow: { width: 12, height: 12, marginRight: 18 },
              float: { position: "absolute", top: 18, zIndex: 1 },
            }),
            st = lt,
            ct = st.flex1,
            dt = st.flexRow,
            ut = st.alignCenter,
            ht = st.flexCenter,
            gt = st.alignStart,
            mt = st.alignEnd,
            ft = function (e) {
              var t = e.newTags;
              if (null == t || !t.length) return null;
              var i = (0, N.Z)(t, 2),
                n = i[0],
                r = i[1];
              return (0, x.BX)(y.View, {
                style: wt.container,
                children: [
                  (0, x.tZ)(y.View, {
                    style: wt.tag,
                    children: (0, x.tZ)(y.Text, {
                      style: wt.tagText,
                      children: n || "",
                    }),
                  }),
                  !!r &&
                    (0, x.tZ)(y.View, {
                      style: wt.tagDescContent,
                      children: (0, x.tZ)(ke.o, {
                        start: { x: 0, y: 0 },
                        end: { x: 1, y: 0 },
                        colors: [
                          "rgba(237, 255, 248, 5.45)",
                          "rgba(237, 255, 248, 0)",
                        ],
                        locations: [0, 1],
                        style: wt.tagDesc,
                        children: (0, x.tZ)(y.View, {
                          style: wt.tagDescInner,
                          children: (0, x.tZ)(y.Text, {
                            style: wt.tagDescText,
                            children: r || "",
                          }),
                        }),
                      }),
                    }),
                ],
              });
            },
            _t = function (e) {
              var t = e.sTSimilar4Train || {},
                i = t.tag,
                n = t.sTTripDetails,
                r = void 0 === n ? [] : n;
              return (0, x.BX)(y.View, {
                style: Tt.container,
                children: [
                  !!i &&
                    (0, x.tZ)(y.Text, { style: Tt.tag, children: i || "" }),
                  !!i && (0, x.tZ)(y.View, { style: Tt.split }),
                  (0, x.tZ)(y.View, {
                    style: Tt.seatContent,
                    children:
                      !(null == r || !r.length) &&
                      r.map(function (e, t) {
                        return (0,
                        x.BX)(y.View, { style: Tt.seat, children: [(0, x.tZ)(y.View, { style: Tt.point, children: (0, x.tZ)(y.Text, { style: Tt.pointText, children: t + 1 }) }), (0, x.tZ)(y.Text, { style: Tt.seatText, children: e.seatName || "" }), (0, x.tZ)(y.Text, { style: Xe([Tt.seatText, { marginLeft: 4 }]), children: e.hasTicket || "" })] }, "".concat(e.seatName, "_").concat(t));
                      }),
                  }),
                ],
              });
            },
            pt = function (e) {
              var t = e.sTSimilar4Train,
                i = t || {},
                n = i.sTTransferDetails,
                r = i.fromStation,
                a = i.toStation,
                o = i.startTime,
                l = i.arriveTime,
                s = i.dayDiff,
                c = (null == n ? void 0 : n[0]) || {},
                d = c.transferMinutes,
                u = c.transferAreaName,
                h = c.transferDesc;
              return (0, x.BX)(y.View, {
                style: Zt.wrapper,
                children: [
                  (0, x.BX)(y.View, {
                    style: Zt.container,
                    children: [
                      (0, x.BX)(y.View, {
                        style: Zt.schedule,
                        children: [
                          !!h &&
                            (0, x.tZ)(y.Text, {
                              style: Zt.timeUsed,
                              children: h,
                            }),
                          (0, x.BX)(y.View, {
                            style: Zt.scheduleContent,
                            children: [
                              (0, x.tZ)(ke.o, {
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                                colors: ["#fff", "#ccc"],
                                locations: [0, 1],
                                style: Zt.scheduleLine,
                              }),
                              (0, x.tZ)(y.View, {
                                style: Zt.scheduleCon,
                                children: (0, x.tZ)(y.Text, {
                                  style: { color: "#222", fontSize: 9 },
                                  children: u || "",
                                }),
                              }),
                              (0, x.tZ)(ke.o, {
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                                colors: ["#ccc", "#fff"],
                                locations: [0, 1],
                                style: Zt.scheduleLine,
                              }),
                            ],
                          }),
                          !!d &&
                            (0, x.BX)(y.Text, {
                              style: Zt.timeUsed,
                              children: ["换乘", Ee(d)],
                            }),
                        ],
                      }),
                      (0, x.BX)(y.View, {
                        style: Zt.time,
                        children: [
                          !!s &&
                            (0, x.tZ)(y.Text, {
                              style: Zt.addOneDay,
                              children: "+".concat(s),
                            }),
                          (0, x.tZ)(y.Text, {
                            style: Zt.timeText,
                            children: o || "",
                          }),
                          (0, x.tZ)(y.Text, {
                            style: Zt.timeText,
                            children: l || "",
                          }),
                        ],
                      }),
                      (0, x.BX)(y.View, {
                        style: Zt.station,
                        children: [
                          (0, x.tZ)(y.Text, {
                            style: Zt.stationText,
                            children: r || "",
                          }),
                          (0, x.tZ)(y.Text, {
                            style: Zt.stationText,
                            children: a || "",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, x.tZ)(_t, { sTSimilar4Train: t }),
                ],
              });
            },
            bt = function (e) {
              var t = e || {},
                i = t.sTSimilar4Train,
                n = t.outerStyle,
                r = t.onClickBooking,
                a = t.reportExpose;
              if (
                ((0, g.useEffect)(function () {
                  null == a || a();
                }, []),
                !i)
              )
                return null;
              var o = n || {},
                l = o.btn,
                s = void 0 === l ? {} : l,
                c = o.btnText,
                d = void 0 === c ? {} : c,
                u = i.button,
                h = i.totalPriceDesc,
                m = void 0 === h ? "" : h,
                f = i.newTags,
                _ = !(null == f || !f.length);
              return (0, x.BX)(y.View, {
                style: yt.container,
                children: [
                  (0, x.BX)(y.View, {
                    style: Xe([yt.leftPart, { paddingTop: _ ? 12 : 0 }]),
                    children: [
                      _ && (0, x.tZ)(ft, { newTags: f }),
                      (0, x.tZ)(pt, { sTSimilar4Train: i }),
                    ],
                  }),
                  (0, x.BX)(y.View, {
                    style: Xe([yt.rightPart, { paddingTop: _ ? 10 : 0 }]),
                    children: [
                      (0, x.tZ)(y.Text, { style: yt.price, children: m || "" }),
                      (0, x.tZ)(y.View, {
                        activeOpacity: 0.8,
                        style: Xe([yt.btn, yt.flexCenter, s]),
                        onClick: function () {
                          return (function (e) {
                            null == r || r(e);
                          })(u);
                        },
                        children: (0, x.tZ)(y.Text, {
                          style: Xe([yt.btnTxt, d]),
                          children: (null == u ? void 0 : u.value) || "",
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
            yt = je({
              container: {
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 3,
                paddingBottom: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                position: "relative",
              },
              leftPart: {
                flex: 1,
                backgroundColor: "#fff",
                position: "relative",
              },
              rightPart: {
                width: 68,
                flexShrink: 0,
                flexGrow: 0,
                marginLeft: 40,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
              },
              flexCenter: { alignItems: "center", justifyContent: "center" },
              price: {
                lineHeight: 20,
                fontSize: 17,
                color: "#222",
                fontFamily: "ZX-Regular",
              },
              btn: {
                width: 68,
                height: 28,
                backgroundColor: "#198cff",
                borderRadius: 8,
                display: "flex",
              },
              btnTxt: {
                textAlign: "center",
                color: "#ffffff",
                fontSize: 14,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                lineHeight: 18,
              },
            }),
            Zt = je({
              wrapper: { display: "flex", flex: 1, flexDirection: "column" },
              container: { position: "relative" },
              schedule: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                left: "37%",
                zIndex: 1,
              },
              timeUsed: {
                color: "#999999",
                fontSize: 9,
                fontFamily: "PingFangSC-Regular",
                lineHeight: 11,
                marginTop: 2,
              },
              scheduleContent: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 1,
                marginBottom: 1,
              },
              scheduleLine: { width: 12, height: 1 },
              scheduleCon: {
                display: "flex",
                height: 14,
                paddingLeft: 3,
                paddingRight: 3,
                borderRadius: 4,
                borderWidth: 0.5,
                borderStyle: "solid",
                borderColor: "#c7cdd9",
                alignItems: "center",
                justifyContent: "center",
              },
              time: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              },
              timeText: {
                color: "#222",
                fontSize: 23,
                lineHeight: 24,
                fontFamily: "ZX-Regular",
              },
              station: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 2,
              },
              stationText: { color: "#222", fontSize: 12, lineHeight: 16 },
              addOneDay: {
                position: "absolute",
                alignSelf: "flex-end",
                right: -15,
                top: 0,
                color: "#222",
                fontFamily: "PingFangSC-Regular",
                fontSize: 10,
                lineHeight: 14,
              },
            }),
            Tt = je({
              container: {
                marginTop: 11,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              },
              tag: { fontSize: 11, lineHeight: 15, color: "#222" },
              split: {
                height: 10,
                width: 1,
                backgroundColor: "#ededed",
                marginLeft: 8,
                marginRight: 8,
              },
              seatContent: {
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              seat: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              },
              point: {
                backgroundColor: "#f5f5f5",
                borderRadius: 4,
                height: 12,
                width: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 3,
              },
              pointText: { fontSize: 9, color: "#999" },
              seatText: { fontSize: 11, color: "#666" },
            }),
            wt = je({
              container: {
                position: "absolute",
                top: -8,
                left: -14,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
              },
              tag: {
                backgroundColor: "#def7ed",
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 6,
                paddingLeft: 8,
                paddingRight: 8,
                height: 15,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 5,
              },
              tagText: { color: "#03b86f", fontSize: 9, fontWeight: "500" },
              tagDescContent: { position: "relative", left: -9, top: 0 },
              tagDesc: { height: 15 },
              tagDescInner: {
                paddingLeft: 13,
                display: "flex",
                height: 15,
                justifyContent: "center",
              },
              tagDescText: { color: "#46b789", fontSize: 10 },
            }),
            xt = function (e) {
              var t = e || {},
                i = t.desc,
                n = t.rightText,
                r = t.rightUrl,
                a = t.ubtTrace,
                o = t.pageId;
              return (0, x.BX)(y.View, {
                className: " _Sm _vr _i _Ga _m _l _p",
                children: [
                  (0, x.tZ)(j.Z, {
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 0 },
                    colors: ["rgb(230, 243, 255)", "rgba(226, 241, 255, 69)"],
                    locations: [0, 1],
                    className: " _u _s _q _Z _Wk _Nb _vr",
                  }),
                  (0, x.BX)(y.View, {
                    className: " _i _Ga _Sc _l _ag _kc",
                    children: [
                      (0, x.tZ)(ne.Z, {
                        className: " _W _xh _Pu",
                        children: i || "",
                      }),
                      (0, x.tZ)(y.View, {
                        className: " _Qu _Ru _Su _x _uh",
                        children: "立即出票",
                      }),
                    ],
                  }),
                  (0, x.BX)(y.View, {
                    className: " _i _Ga _Sc _l _ag _kc",
                    onClick: function () {
                      r && (0, ue.jn)(r),
                        null == a ||
                          a("GrabAlternateDetail_LookAllPlan_click", {
                            PageId: o,
                          });
                    },
                    children: [
                      (0, x.tZ)(y.Text, {
                        className: " _Hh _F _S",
                        children: n || "",
                      }),
                      (0, x.tZ)(y.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/y@3x.png",
                        className: " _Og _Oo _dj",
                      }),
                    ],
                  }),
                ],
              });
            },
            vt =
              ((Oe = {}),
              (0, h.Z)(Oe, Le.BuyMore, "多买几站"),
              (0, h.Z)(Oe, Le.BuyAndGrab, "上车补票"),
              (0, h.Z)(Oe, Le.CombineSeat, "同车换座"),
              (0, h.Z)(Oe, Le.Transfer, "中转"),
              Oe),
            St = (0, g.memo)(function (e) {
              var t = e.isCurrent,
                i = e.tab,
                n = e.setCurrentId,
                r = e.ubtTrace,
                a = e.pageId;
              (0, g.useEffect)(function () {
                null == r ||
                  r("GrabAlternateDetail_TicketPlanTab_exposure", {
                    PageId: a,
                    scmType: vt[i.type],
                  });
              }, []);
              return (0, x.BX)(y.View, {
                className: ""
                  .concat(" _jj _hp _av _i _l _n _p _bv _lj _cv", " ")
                  .concat(t ? " _Lu _dv" : ""),
                onClick: function () {
                  r("GrabAlternateDetail_TicketPlanTab_click", {
                    PageId: a,
                    scmType: vt[i.type],
                  }),
                    null == n || n(i.type);
                },
                children: [
                  (0, x.tZ)(y.Text, {
                    className: " _Yu",
                    style: { color: t ? "#198cff" : "#222" },
                    children: i.title || "",
                  }),
                  t &&
                    (0, x.tZ)(y.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/xz@3x.png",
                      className: " _u _Nu _Ou _Ye _og",
                    }),
                ],
              });
            }),
            Nt = function (e) {
              var t = e || {},
                i = t.trainNo,
                n = t.tabList,
                r = void 0 === n ? [] : n,
                a = t.currentId,
                o = t.setCurrentId,
                l = t.onClickTrain,
                s = t.ubtTrace,
                c = t.pageId;
              return (0, x.BX)(y.View, {
                className: " _p _vr",
                children: [
                  (0, x.tZ)(j.Z, {
                    start: { x: 0, y: 0 },
                    end: { x: 0, y: 1 },
                    colors: ["rgb(255, 255, 255)", "rgba(245, 245, 245, 51)"],
                    locations: [0, 1],
                    className: " _u _s _q _Z _Tb _ce _vr",
                  }),
                  (0, x.BX)(y.View, {
                    className: " _jl _i _Ga _Sc _l _kc",
                    children: [
                      (0, x.BX)(y.View, {
                        className: " _Uu _Vu _Wu _Xu _jj _i _n _l _lj _kc",
                        onClick: l,
                        children: [
                          (0, x.tZ)(y.Text, {
                            className: " _Yu",
                            children: i || "",
                          }),
                          (0, x.tZ)(y.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/sj@3x.png",
                            className: " _Bb _dg _Zg",
                          }),
                        ],
                      }),
                      (0, x.tZ)(y.ScrollView, {
                        className: " _Zu _Ym _Yj _i _Wu _Pd",
                        enableFlex: !0,
                        scrollX: !0,
                        showScrollbar: !1,
                        showsHorizontalScrollIndicator: !1,
                        children:
                          !(null == r || !r.length) &&
                          r.map(function (e) {
                            var t = e.type === a;
                            return (0,
                            x.tZ)(St, { tab: e, isCurrent: t, setCurrentId: o, ubtTrace: s, pageId: c }, e.type);
                          }),
                      }),
                    ],
                  }),
                ],
              });
            },
            Ct = i(61885),
            It = function () {
              return (0, x.BX)(y.View, {
                style: Dt.emptyContainer,
                children: [
                  (0, x.tZ)(y.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/k@3x.png",
                    style: Dt.emptyIcon,
                  }),
                  (0, x.tZ)(y.Text, {
                    style: Dt.emptyText,
                    children: "抱歉，当前条件暂无有票方案",
                  }),
                ],
              });
            },
            Bt = function (e) {
              var t = e.smartSeatSchemeDetailList,
                i = void 0 === t ? [] : t,
                n = e.sTSimilar4TrainList,
                r = e.type,
                a = e.ubtTrace,
                o = e.pageId;
              if (!((null != i && i.length) || (null != n && n.length)))
                return (0, x.tZ)(It, {});
              var l = [Le.BuyAndGrab, Le.BuyMore, Le.CombineSeat].includes(r),
                s = r === Le.Transfer,
                c = function (e, t) {
                  a("GrabAlternateDetail_TicketPlanAct_click", {
                    PageId: o,
                    scmType: vt[r],
                  }),
                    (function (e) {
                      var t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        i = e || {},
                        n = i.fromPage;
                      if (t) {
                        var r,
                          a = e || {},
                          o = a.sTSimilar4TrainDTO,
                          l = a.schemeInfoV1;
                        w.Z.isCRN
                          ? (0, Ct.T8)({
                              url:
                                null == o ||
                                null === (r = o.button) ||
                                void 0 === r
                                  ? void 0
                                  : r.url,
                            })
                          : (0, Ct.uq)(l);
                      } else if (e.type === we.EQ.CrossStation) {
                        var s;
                        if (
                          null !== (s = e.subTrainSegments) &&
                          void 0 !== s &&
                          s[0]
                        ) {
                          var c = e.subTrainSegments[0],
                            d = {
                              departStation: c.fromStation || "",
                              arriveStation: c.toStation || "",
                              departStationCode: c.fromStationCode || "SHH",
                              arriveStationCode: c.toStationCode || "OKH",
                              trainNo: c.trainNo || "",
                              departDate: c.startDate || "",
                              seatName: c.seatName || "",
                              fromPage: n || "HouBuDetailGrabTrainSmart",
                            };
                          (0, Ct.kO)(d);
                        }
                      } else {
                        var u, h;
                        w.Z.isCRN
                          ? (0, Ct.T8)({
                              url:
                                null === (u = e.subTrainTripCard) ||
                                void 0 === u ||
                                null === (h = u.button) ||
                                void 0 === h
                                  ? void 0
                                  : h.url,
                            })
                          : (0, Ct.uq)(e.schemeInfoV1);
                      }
                    })(e, t);
                },
                d = function () {
                  a("GrabAlternateDetail_TicketPlanAct_exposure", {
                    PageId: o,
                    scmType: vt[r],
                  });
                };
              return l
                ? (0, x.tZ)(y.View, {
                    children: i.slice(0, 2).map(function (e, t) {
                      var i = e.originArriveTime,
                        n = e.originFromStation,
                        r = e.originStartTime,
                        a = e.originToStation;
                      return (0, x.tZ)(
                        y.View,
                        {
                          style: Dt.cardContainer,
                          children: (0, x.tZ)(rt, {
                            smartSeatDetail: e,
                            originTrainInfo: {
                              departName: n,
                              arriveName: a,
                              departTime: r,
                              arriveTime: i,
                            },
                            whiteBg: !0,
                            onClickBooking: function () {
                              return c(e, !1);
                            },
                            reportExpose: d,
                            outerStyle: Vt,
                          }),
                        },
                        "".concat(e.trainNo, "-").concat(t)
                      );
                    }),
                  })
                : s
                ? (0, x.tZ)(y.View, {
                    children: n.slice(0, 2).map(function (e, t) {
                      return (0, x.tZ)(
                        y.View,
                        {
                          style: Dt.cardContainer,
                          children: (0, x.tZ)(
                            bt,
                            {
                              sTSimilar4Train: e.sTSimilar4TrainDTO,
                              outerStyle: Vt,
                              onClickBooking: function () {
                                return c(e, !0);
                              },
                              reportExpose: d,
                            },
                            t
                          ),
                        },
                        "".concat(t)
                      );
                    }),
                  })
                : null;
            },
            Dt = (0, E.lW)({
              cardContainer: {
                marginBottom: 8,
                backgroundColor: "#fff",
                borderRadius: 12,
                paddingTop: 8,
                paddingBottom: 10,
                paddingLeft: 8,
                paddingRight: 8,
              },
              emptyContainer: {
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                paddingTop: 20,
                paddingBottom: 24,
                marginBottom: 8,
              },
              emptyIcon: { width: 179, height: 98 },
              emptyText: {
                marginTop: 16,
                lineHeight: 22,
                fontSize: 16,
                color: "#666",
              },
            }),
            Vt = (0, E.lW)({
              btn: { backgroundColor: "#e8f4ff" },
              btnText: { color: "#198CFF" },
            }),
            kt = function (e) {
              var t,
                i,
                n,
                r = e.smartSchemeRecommendInfoList,
                a = void 0 === r ? [] : r,
                o = e.showChooseDialog,
                l = e.trainNo,
                s = e.ubtTrace,
                c = e.pageId,
                d = (0, g.useState)(null),
                u = (0, N.Z)(d, 2),
                h = u[0],
                m = u[1],
                f =
                  null == a || null === (t = a.find) || void 0 === t
                    ? void 0
                    : t.call(a, function (e) {
                        return e.trainNo === l;
                      }),
                _ = f || {},
                p = _.desc,
                b = void 0 === p ? "" : p,
                Z = _.iconUrl,
                T = void 0 === Z ? "" : Z,
                w = _.button,
                v = void 0 === w ? {} : w,
                S = _.smartSeatSchemeInfoList,
                C = void 0 === S ? [] : S,
                I =
                  null == C || null === (i = C[0]) || void 0 === i
                    ? void 0
                    : i.type;
              if (
                ((0, g.useEffect)(function () {
                  null == s ||
                    s("GrabAlternateDetail_TicketPlanRec_exposure", {
                      PageId: c,
                    });
                }),
                (0, g.useEffect)(
                  function () {
                    m(I);
                  },
                  [l]
                ),
                !f)
              )
                return null;
              var B = h || I,
                D =
                  (null == C || null === (n = C.find) || void 0 === n
                    ? void 0
                    : n.call(C, function (e) {
                        return e.type === B;
                      })) || {},
                V = D.smartSeatSchemeDetailList,
                k = void 0 === V ? [] : V,
                R = D.sTSimilar4TrainList,
                z = void 0 === R ? [] : R,
                F = D.type;
              return (0, x.BX)(y.View, {
                style: Rt.box,
                children: [
                  (0, x.tZ)(xt, {
                    desc: b,
                    iconUrl: T,
                    rightText: (null == v ? void 0 : v.value) || "",
                    rightUrl: (null == v ? void 0 : v.url) || "",
                    ubtTrace: s,
                    pageId: c,
                  }),
                  (0, x.tZ)(Nt, {
                    tabList: C,
                    currentId: B,
                    setCurrentId: m,
                    trainNo: l,
                    onClickTrain: o,
                    ubtTrace: s,
                    pageId: c,
                  }),
                  (0, x.tZ)(Bt, {
                    smartSeatSchemeDetailList: k,
                    sTSimilar4TrainList: z,
                    type: F,
                    ubtTrace: s,
                    pageId: c,
                  }),
                ],
              });
            },
            Rt = (0, E.lW)({ box: { marginLeft: 8, marginRight: 8 } }),
            zt = i(82225),
            Ft = i(82750),
            Xt = i(12806);
          function Lt(e) {
            return jt.apply(this, arguments);
          }
          function jt() {
            return (jt = (0, o.Z)(
              (0, a.Z)().mark(function e(t) {
                var i, n, r;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          console.log("getT6CandidateOrderList"),
                          (e.next = 3),
                          (0, Ft.q0)()
                        );
                      case 3:
                        if (
                          ((i = e.sent),
                          (n = i.userName),
                          (r = i.password),
                          n && r)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return");
                      case 8:
                        return (
                          (e.next = 10),
                          (0, Xt.T2)({
                            oid: t,
                            operateResult: 1,
                            operateResultMsg: "登陆成功",
                            login12306Name: n,
                            login12306Pas: r,
                            operateType: "login",
                          })
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function At() {
            return (At = (0, o.Z)(
              (0, a.Z)().mark(function e(t, i) {
                return (0, a.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), (0, ue.o$)();
                        case 3:
                          Lt(t), i && i(), (e.next = 11);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            i && i(),
                            console.error("jump12306Login", e.t0);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            )).apply(this, arguments);
          }
          var Wt,
            Pt = i(82955),
            Gt = function (e) {
              var t = e.className,
                i = e.style,
                n = e.content,
                r = void 0 === n ? [] : n,
                a = e.color;
              if (!(r && r.length > 0)) return (0, x.tZ)(y.View, {});
              var o = {},
                l = {};
              return (
                a && ((o.backgroundColor = a), (l.color = a)),
                (0, x.tZ)(y.View, {
                  className: t,
                  style: i,
                  children: r.map(function (e, t) {
                    return (0,
                    x.BX)(y.View, { className: " _i _Ga", children: [(0, x.tZ)(y.View, { className: " _Ha _Ia _Ja _Ka _La", style: o }), (0, x.tZ)(y.View, { className: " _j _Ma _Na _Q", style: l, children: e })] }, t);
                  }),
                })
              );
            },
            Ht = function (e) {
              var t = e.priceDetail,
                i = e.isShow,
                n = e.onClose,
                r = void 0 === n ? function () {} : n,
                a = (0, be.c)(r),
                o = a.modalRef,
                l = a.modalClose;
              return (0, x.tZ)(y.View, {
                style: { zIndex: 1001 },
                children:
                  i &&
                  (0, x.tZ)(ye.Z, {
                    ref: o,
                    onCancel: function () {
                      return l();
                    },
                    innerContainerStyle: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      backgroundColor: "#fff",
                    },
                    children: (0, x.BX)(y.View, {
                      className: " _p _Wb _mx _yd _i _k",
                      children: [
                        (0, x.tZ)(j.Z, {
                          className: " _Wb _Xs _u _q _s _t",
                          useAngle: !0,
                          angle: 180,
                          locations: [0, 1],
                          colors: ["#FFFFFF", "#F5F5F5"],
                        }),
                        (0, x.tZ)(y.View, {
                          className: " _p _Xb _Yb _o",
                          children: "价格明细",
                        }),
                        (0, x.tZ)(y.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                          className: " _u _xr _qk _cc _bc",
                          id: "AMDZ",
                          onClick: l,
                          webp: !0,
                        }),
                        (0, x.BX)(y.View, {
                          className: " _p _ny _Uf _Vb _Oa",
                          children: [
                            (0, x.tZ)(y.View, {
                              className: " _Xb _yg",
                              children: "预估票价",
                            }),
                            (0, x.tZ)(y.View, {
                              className: " _Xk _i _k",
                              children: t.map(function (e, t) {
                                return (0,
                                x.BX)(y.View, { className: " _ub _i _Ga _m _l", children: [(0, x.tZ)(y.Text, { className: " _Xb _Ti", children: e.title }), (0, x.BX)(y.Text, { className: " _Xb _Nv", children: ["¥".concat(e.price, "x").concat(e.amount), " "] })] }, "item".concat(t));
                              }),
                            }),
                            (0, x.tZ)(y.View, {
                              className: " _qd _xj _dc _oy",
                              children: (0, x.tZ)(Gt, {
                                content: [
                                  "购票车票需支付票款，实际价格以支付时为准。如果出票失败，将自动退回票款。注意，平台不会自动取消候补订单，出票成功后需手动取消候补",
                                ],
                                color: "#fd9227",
                              }),
                            }),
                          ],
                        }),
                        (0, x.tZ)(y.View, {
                          className: " _Fa _jl _Vb _Wb",
                          children: (0, x.tZ)(y.View, {
                            className: " _p _Gc _Xc _w _Oa _o _qb _Wc",
                            id: "AMDa",
                            onClick: l,
                            children: "我知道了",
                          }),
                        }),
                      ],
                    }),
                  }),
              });
            },
            Ot = i(22102),
            Et = i(16617),
            Mt = function (e) {
              var t = e.isShow,
                i = e.content,
                n = e.pageId,
                r = e.buttonTag,
                a = e.orderNumber,
                o = e.ubtTrace,
                l = void 0 === o ? function () {} : o,
                s = e.onClose,
                c = void 0 === s ? function () {} : s,
                d = (0, be.c)(c),
                u = d.modalRef,
                h = d.modalClose,
                m = i || {},
                f = m.topTitle,
                _ = m.title,
                b = m.barrages,
                Z = m.contents,
                T = m.confirmButtonName;
              return (
                (0, g.useEffect)(
                  function () {
                    t &&
                      l("GrabAlternateDetail_WanLiuPopup_exposure", {
                        channel: w.Z.isCRN ? "App" : "Applets",
                        PageId: n,
                      });
                  },
                  [t]
                ),
                (0, x.tZ)(y.View, {
                  style: { zIndex: 1001 },
                  children:
                    t &&
                    i &&
                    (0, x.tZ)(ye.Z, {
                      ref: u,
                      onCancel: function () {
                        l("GrabAlternateDetail_WanLiuPopup_CloseButton_click", {
                          channel: w.Z.isCRN ? "App" : "Applets",
                          PageId: n,
                        }),
                          h();
                      },
                      innerContainerStyle: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: "#fff",
                      },
                      children: (0, x.BX)(y.View, {
                        className: " _p _Wb _jz _yd _i _k",
                        children: [
                          (0, x.tZ)(j.Z, {
                            className: " _Wb _kz _u _q _s _t",
                            useAngle: !0,
                            angle: 0,
                            locations: [0, 1],
                            colors: ["#F0F8FF", "#DFEEFE"],
                          }),
                          (0, x.tZ)(y.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_03/zs@3x.png",
                            className: " _u _lz _t _mz _nz",
                          }),
                          (0, x.tZ)($.Z, {
                            className: " _lx _p _oz _dq",
                            children: f,
                          }),
                          (null == b ? void 0 : b.length) > 0 &&
                            (0, x.tZ)(y.View, {
                              className: " _pz",
                              children: (0, x.tZ)(Ot.Z, {
                                className: " _Pi _Ua _i _Ga _l",
                                interval: 2e3,
                                height: 20,
                                data: b.map(function (e, t) {
                                  return (0,
                                  x.tZ)(Et.Z, { content: e, style: { backgroundColor: "#ffffff", borderRadius: 7 } }, t);
                                }),
                              }),
                            }),
                          (0, x.BX)(y.View, {
                            className: " _qz _p _rz _Vb _Oa",
                            children: [
                              (0, x.BX)(y.View, {
                                className: " _Ld _mn _i _Ga _l",
                                children: [
                                  (0, x.tZ)(y.View, {
                                    className: " _Oo _gb _w _Ka",
                                  }),
                                  (0, x.tZ)(y.Text, {
                                    className: " _uh _W _Xb _Pa",
                                    children: _,
                                  }),
                                ],
                              }),
                              (0, x.tZ)(y.View, {
                                className: " _sz _i _Ga _m",
                                children: Z.map(function (e, t) {
                                  return (0,
                                  x.BX)(y.View, { className: " _Db _i _l _tz _Iv _uz _dc _Mb", style: 0 != t ? { marginLeft: 7 } : {}, children: [(0, x.tZ)(y.View, { className: " _sb _pc", children: e.title }), (0, x.tZ)(y.View, { className: " _Ac _oc _Ag", children: e.desc }), (0, x.tZ)(y.Image, { className: " _qd _vz _gg", src: e.icon })] }, "".concat(t));
                                }),
                              }),
                            ],
                          }),
                          (0, x.BX)(y.View, {
                            className: " _Fa _jl _Vb _Wb _i _Ga",
                            children: [
                              (0, x.tZ)(y.View, {
                                className: " _j _p _Gc _Xc _vd _Oa _o _x _Wc",
                                id: "AMDj",
                                onClick: function () {
                                  l(
                                    "GrabAlternateDetail_WanLiuPopup_NoNeed_click",
                                    {
                                      channel: w.Z.isCRN ? "App" : "Applets",
                                      PageId: n,
                                    }
                                  ),
                                    h(),
                                    p().navigateBack();
                                },
                                children: "暂不需要",
                              }),
                              (0, x.BX)(y.View, {
                                className: " _o _j _Sf _p _Gc _w _Oa",
                                id: "AMDk",
                                onClick: function () {
                                  l(
                                    "GrabAlternateDetail_WanLiuPopup_FreeUp_click",
                                    {
                                      channel: w.Z.isCRN ? "App" : "Applets",
                                      PageId: n,
                                    }
                                  ),
                                    h(),
                                    (0, ue.Vu)(a);
                                },
                                children: [
                                  (0, x.tZ)(y.Text, {
                                    className: " _Xc _o _qb _Wc",
                                    children: T,
                                  }),
                                  !!r &&
                                    (0, x.tZ)(y.Image, {
                                      src: r || "",
                                      className: " _ka _ug _u _t _qq",
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                })
              );
            },
            qt = g.default.memo(function (e) {
              var t,
                i = e.ticketList,
                n = void 0 === i ? [] : i,
                a = (0, g.useState)(!1),
                o = (0, N.Z)(a, 2),
                l = o[0],
                s = o[1],
                c = function (e, t) {
                  var i = !!(
                    (null != e && e.remark) ||
                    (null != e && e.rankDesc)
                  );
                  return (0, x.BX)(
                    y.View,
                    {
                      style: (0, r.Z)((0, r.Z)({}, Yt.ticketWrapper), {
                        marginBottom:
                          t === (null == n ? void 0 : n.length) - 1 ? 0 : 8,
                      }),
                      children: [
                        (0, x.BX)(y.View, {
                          style: (0, r.Z)((0, r.Z)({}, Yt.trainInfoWrapper), {
                            marginTop: i ? 10 : 0,
                          }),
                          children: [
                            (0, x.BX)(y.View, {
                              style: Yt.displayFlex,
                              children: [
                                (0, x.tZ)(y.Text, {
                                  style: Yt.time,
                                  children: null == e ? void 0 : e.departTime,
                                }),
                                (0, x.tZ)(y.Text, {
                                  style: Yt.station,
                                  children:
                                    null == e ? void 0 : e.departStation,
                                }),
                              ],
                            }),
                            (0, x.BX)(y.View, {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              },
                              children: [
                                (0, x.tZ)(y.Text, {
                                  style: Yt.trainNo,
                                  children: null == e ? void 0 : e.trainNo,
                                }),
                                (0, x.tZ)(y.Image, {
                                  style: Yt.iconLine,
                                  src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/icon_ht_lb.webp",
                                }),
                                (0, x.tZ)(y.Text, {
                                  style: Yt.trainNo,
                                  children: null == e ? void 0 : e.costTime,
                                }),
                              ],
                            }),
                            (0, x.BX)(y.View, {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                              },
                              children: [
                                (0, x.tZ)(y.Text, {
                                  style: Yt.time,
                                  children: null == e ? void 0 : e.arriveTime,
                                }),
                                (0, x.tZ)(y.Text, {
                                  style: Yt.station,
                                  children:
                                    null == e ? void 0 : e.arriveStation,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, x.tZ)(y.View, { style: Yt.line }),
                        (0, x.BX)(y.View, {
                          style: { display: "flex", flexDirection: "row" },
                          children: [
                            (0, x.tZ)(y.Text, {
                              style: Yt.departTime,
                              children: "出发时间",
                            }),
                            (0, x.tZ)(y.Text, {
                              style: Yt.departTimeDetail,
                              children: null == e ? void 0 : e.ticketDate,
                            }),
                            (0, x.tZ)(y.Text, {
                              style: Yt.ticketSeatName,
                              children: null == e ? void 0 : e.seatName,
                            }),
                          ],
                        }),
                        (0, x.BX)(y.View, {
                          style: Yt.topContent,
                          children: [
                            d(
                              "https://images3.c-ctrip.com/zt/train/common/trainListSufTagBg1.png",
                              null == e ? void 0 : e.remark,
                              { tagText: Yt.greenTag, tagImage: { width: 72 } },
                              ""
                            ),
                            d(
                              "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/tag_2@3x.png",
                              null == e ? void 0 : e.rankDesc,
                              {
                                tagText: Yt.blueTag,
                                tagImage: { width: 85 },
                                bgStyle: { marginLeft: 4 },
                              },
                              "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/i@3x.png"
                            ),
                          ],
                        }),
                      ],
                    },
                    t
                  );
                },
                d = function (t, i, n, a) {
                  return i && i.length > 0
                    ? (0, x.BX)(y.View, {
                        style: (0, r.Z)(
                          (0, r.Z)({}, Yt.tagContentView),
                          n.bgStyle
                        ),
                        children: [
                          (0, x.tZ)(y.Image, {
                            style: (0, r.Z)(
                              (0, r.Z)({}, Yt.tagBgImag),
                              n.tagImage
                            ),
                            src: t,
                          }),
                          (0, x.BX)(y.View, {
                            style: Yt.tagContentViewTextBg,
                            onClick: function () {
                              (null == e ? void 0 : e.showWaitingNumberToast) &&
                                (null == e || e.showWaitingNumberToast());
                            },
                            children: [
                              (0, x.tZ)(y.Text, {
                                style: (0, r.Z)({}, n.tagText),
                                children: i,
                              }),
                              !!a &&
                                a.length > 0 &&
                                (0, x.tZ)(y.Image, {
                                  style: (0, r.Z)((0, r.Z)({}, Yt.tagIcon), {
                                    marginTop: w.Z.isCRN ? 0 : 1,
                                  }),
                                  src: a,
                                }),
                            ],
                          }),
                        ],
                      })
                    : null;
                },
                u = (0, x.tZ)(y.View, {
                  id: "AMDf",
                  onClick: function () {
                    s(!0);
                  },
                  style: Yt.showMore,
                  children: (0, x.BX)(y.View, {
                    style: Yt.showMoreInner,
                    children: [
                      (0, x.tZ)(y.Text, {
                        style: Yt.showMoreText,
                        children: "查看全部",
                      }),
                      (0, x.tZ)(y.Image, {
                        style: (0, r.Z)(
                          {},
                          {
                            width: 12,
                            height: 12,
                            marginLeft: 4,
                            marginTop: w.Z.isCRN ? 0 : -2,
                          }
                        ),
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/jtjt@3x.png",
                      }),
                    ],
                  }),
                });
              return (0,
              x.BX)(y.View, { style: Yt.container, children: [l ? (null == n ? void 0 : n.map(c)) : null == n || null === (t = n.slice(0, 1)) || void 0 === t ? void 0 : t.map(c), (null == n ? void 0 : n.length) > 1 && !l && u] });
            }),
            Yt = (0, E.lW)({
              container: {
                position: "relative",
                zIndex: 2,
                borderRadius: 12,
                width: "100%",
              },
              displayFlex: { display: "flex", flexDirection: "column" },
              ticketWrapper: {
                paddingTop: 11,
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 14,
                marginBottom: 8,
                borderRadius: 12,
                backgroundColor: "#fff",
                borderColor: "#f5f5f5",
                zIndex: 100,
                position: "relative",
              },
              trainInfoWrapper: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              time: {
                marginBottom: 6,
                fontSize: 26,
                color: "#333",
                fontFamily: "ZX-Regular",
              },
              station: { fontSize: 13, color: "#333", lineHeight: 16 },
              trainNo: { fontSize: 12, color: "#222", lineHeight: 17 },
              timeTag: {
                paddingLeft: 7,
                paddingRight: 7,
                paddingTop: 3,
                paddingBottom: 3,
                borderWidth: 1,
                borderColor: "#879fc2",
                borderRadius: 8,
                borderStyle: "solid",
              },
              timeTagText: {
                color: "#3c5a86",
                fontSize: 12,
                fontWeight: "600",
              },
              line: {
                marginTop: 12,
                marginBottom: 10,
                width: "100%",
                height: 0.3,
                backgroundColor: "#ededed",
              },
              iconLine: {
                width: 56,
                height: 4.25,
                marginTop: 3,
                marginBottom: 3,
              },
              showMore: {
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 10,
                paddingTop: 12,
                marginTop: -18,
                backgroundColor: "#fff",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              },
              showMoreInner: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 10,
                height: 36,
              },
              showMoreText: { fontSize: 12, color: "#666", lineHeight: 17 },
              departTime: { fontSize: 13, color: "#666", lineHeight: 18 },
              departTimeDetail: {
                fontSize: 13,
                color: "#666",
                lineHeight: 18,
                marginLeft: 6,
              },
              ticketSeatName: {
                fontSize: 13,
                color: "#666",
                lineHeight: 18,
                marginLeft: "auto",
              },
              ticketDesc: {
                fontSize: 13,
                color: "#198cff",
                lineHeight: 18,
                marginLeft: "auto",
              },
              topContent: {
                position: "absolute",
                flexDirection: "row",
                display: "flex",
                top: 2,
                left: 2,
              },
              tagBgImag: { position: "absolute", width: 72, height: 15 },
              tagContentView: { display: "flex", flexDirection: "row" },
              tagContentViewTextBg: {
                display: "flex",
                position: "relative",
                flexDirection: "row",
                marginTop: 2,
                marginLeft: 6,
              },
              greenTag: {
                height: 12,
                color: "#00c777",
                fontSize: 10,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                lineHeight: 12,
              },
              blueTag: {
                height: 12,
                color: "#198cff",
                fontSize: 10,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                lineHeight: 12,
              },
              tagIcon: { width: 10, height: 10, marginLeft: 2 },
            }),
            Ut = g.default.memo(function (e) {
              var t = e.ticketList,
                i = void 0 === t ? [] : t,
                n = e.orderInfo,
                r = e.passengerInfo,
                a = void 0 === r ? [] : r,
                o = e.isShow,
                l = e.hideToast,
                s = e.showWaitingNumberToast,
                c = (0, be.c)(l),
                d = c.modalRef,
                u = c.modalClose;
              return o
                ? (0, x.tZ)(ye.Z, {
                    ref: d,
                    onCancel: u,
                    iphoneXFooterColor: "#f5f5f5",
                    innerContainerStyle: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      backgroundColor: "#f5f5f5",
                      overflow: "hidden",
                    },
                    children: (0, x.BX)(y.View, {
                      className: " _i _k _l _go _ry",
                      children: [
                        (0, x.tZ)(y.Image, {
                          style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: (0, E.fM)(),
                            height: 140,
                          },
                          src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/qinzi_bg@3x.png",
                        }),
                        (0, x.tZ)(y.Text, {
                          className: " _sy _rr _dd _Ie",
                          children: "候补详情",
                        }),
                        (0, x.tZ)(y.ScrollView, {
                          showScrollbar: !1,
                          showsVerticalScrollIndicator: !1,
                          enableFlex: !0,
                          scrollY: !0,
                          className: " _Db _ee _i _l _n",
                          style: {
                            width: (0, E.u1)((0, E.Y1)() - 16),
                            flex: 1,
                          },
                          children: (0, x.BX)(y.View, {
                            style: {
                              width: (0, E.u1)((0, E.Y1)() - 16),
                              height: "100%",
                            },
                            children: [
                              (0, x.tZ)(qt, {
                                ticketList: i,
                                showWaitingNumberToast: function () {
                                  s && s();
                                },
                              }),
                              (0, x.tZ)(he, { passengerInfo: a }),
                              n &&
                                (0, x.tZ)(me, {
                                  isShowTitle: !1,
                                  orderInfo: n,
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  })
                : (0, x.tZ)(x.HY, {});
            }),
            Qt = function (e) {
              var t = e.hideLoading;
              return (
                (0, g.useEffect)(
                  function () {
                    var e = setTimeout(function () {
                      clearTimeout(e), t();
                    }, 4e3);
                  },
                  [t]
                ),
                (0, x.BX)(y.View, {
                  className: " _i _k _l _cy _Rs",
                  children: [
                    (0, x.tZ)(Y.Z, {
                      defaultImg:
                        "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/ycd.gif",
                      className: " _dy _ey _tc",
                      source:
                        "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/yc.json",
                    }),
                    (0, x.tZ)(y.Text, {
                      className: " _x _bd _Qj _fy",
                      children: "正在预测结果中…",
                    }),
                    (0, x.tZ)(y.Text, {
                      className: " _oc _E _R _gy",
                      children: "智行疯狂读取数据中…请耐心等待3-5秒",
                    }),
                    (0, x.BX)(j.Z, {
                      start: { x: 0, y: 1 },
                      end: { x: 1, y: 1 },
                      colors: [
                        "rgba(255, 255, 255, 0.6)",
                        "rgba(255, 255, 255, 0.2)",
                      ],
                      locations: [0, 1],
                      className: " _Z _hy _iy _Mb",
                      miniDirection: "X",
                      children: [
                        (0, x.BX)(y.View, {
                          className: " _i _Ga _l _Yn _pe _jy",
                          children: [
                            (0, x.tZ)(Y.Z, {
                              defaultImg:
                                "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/fdj.gif",
                              className: " _Ce _De",
                              source:
                                "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/fdj.json",
                            }),
                            (0, x.tZ)(y.Text, {
                              className: " _Ee _G _sb",
                              children: "查询候补人数中…",
                            }),
                            (0, x.tZ)(y.Image, {
                              className: " _Bb _dg _my",
                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/dg@3x.png",
                            }),
                            (0, x.tZ)(y.Text, {
                              className: " _G _x",
                              children: "查询中",
                            }),
                          ],
                        }),
                        (0, x.BX)(y.View, {
                          className: " _i _Ga _l _Yn _pe _ky",
                          children: [
                            (0, x.tZ)(Y.Z, {
                              defaultImg:
                                "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/fdj.gif",
                              className: " _Ce _De",
                              source:
                                "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/fdj.json",
                            }),
                            (0, x.tZ)(y.Text, {
                              className: " _Ee _G _sb",
                              children: "查询候补排队情况…",
                            }),
                            (0, x.tZ)(y.Image, {
                              className: " _Bb _dg _my",
                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/dg@3x.png",
                            }),
                            (0, x.tZ)(y.Text, {
                              className: " _G _x",
                              children: "查询中",
                            }),
                          ],
                        }),
                        (0, x.BX)(y.View, {
                          className: " _i _Ga _l _Yn _pe _ly",
                          children: [
                            (0, x.tZ)(Y.Z, {
                              defaultImg:
                                "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/fdj.gif",
                              className: " _Ce _De",
                              source:
                                "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/fdj.json",
                            }),
                            (0, x.tZ)(y.Text, {
                              className: " _Ee _G _sb",
                              children: "计算当前候补订单成功率…",
                            }),
                            (0, x.tZ)(y.Image, {
                              className: " _Bb _dg _my",
                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/dg@3x.png",
                            }),
                            (0, x.tZ)(y.Text, {
                              className: " _G _x",
                              children: "计算中",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              );
            },
            Jt = function (e) {
              var t = e.page,
                i = e.isShow,
                n = e.onClose;
              return (
                (0, g.useEffect)(
                  function () {
                    i &&
                      t.ubtTrace("GrabAlternateDetail_UpdatePopup_exposure", {
                        fromSource: t.recognizeId ? "图片识别" : "其他",
                        PageId: t.pageId,
                      });
                  },
                  [i, t]
                ),
                (0, x.tZ)(zt.Z, {
                  isShow: i,
                  onClose: n,
                  title: "升级订单需先登录12306账号",
                  showType: zt.C.SINGLE,
                  buttonName: "立即登录",
                  content: "铁路局要求购买火车票需登录账号",
                  onButtonClick: function () {
                    t.ubtTrace(
                      "GrabAlternateDetail_UpdatePopup_Predict_click",
                      {
                        fromSource: t.recognizeId ? "图片识别" : "其他",
                        PageId: t.pageId,
                      }
                    ),
                      (0, A.wJ)(t);
                  },
                })
              );
            },
            Kt = p().getSystemInfoSync(),
            $t =
              (0, M.h)()(
                (Wt = (function (e) {
                  (0, d.Z)(i, e);
                  var t = (0, u.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, l.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, h.Z)(
                        (0, c.Z)(n),
                        "pageId",
                        w.Z.isCRN ? "10650090014" : "10650085079"
                      ),
                      (0, h.Z)((0, c.Z)(n), "isDeletingOrder", !1),
                      (0, h.Z)((0, c.Z)(n), "triggerScroll", void 0),
                      (0, h.Z)((0, c.Z)(n), "hasSyncFailFlagAction", void 0),
                      (0, h.Z)((0, c.Z)(n), "fromPage", ""),
                      (0, h.Z)((0, c.Z)(n), "recognizeId", ""),
                      (0, h.Z)((0, c.Z)(n), "orderNumber", ""),
                      (0, h.Z)((0, c.Z)(n), "state", {
                        fromPage: "",
                        orderNumber: "",
                        hasGetData: !1,
                        isShowShareRewardActivity: !1,
                        orderInfo: null,
                        showCancelOrderToast: !1,
                        showRetainToast: !1,
                        showLuckyCodeToast: !1,
                        showSyncFailFlagDialog: !1,
                        showAlternateGuideToast: !1,
                        showType: "",
                        priceDetail: [],
                        showTicketInfoToast: !1,
                        isFirst: !1,
                        showDeleteOrderToast: !1,
                        smartSchemeRecommendInfoList: [],
                        currentSmartTrainNo: "",
                        showSmartSchemeRecommendToast: !1,
                        urgeCandidateToast: null,
                        isUrgeCandidateDialogShow: !1,
                      }),
                      (0, h.Z)(
                        (0, c.Z)(n),
                        "deleteOrder",
                        (0, o.Z)(
                          (0, a.Z)().mark(function e() {
                            var t, i, r, o;
                            return (0, a.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (((e.prev = 0), !n.isDeletingOrder)) {
                                        e.next = 3;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 3:
                                      return (
                                        (t = n.recognizeId ? 1 : 0),
                                        (i = n.recognizeId || n.orderNumber),
                                        (n.isDeletingOrder = !0),
                                        n.setState({
                                          showDeleteOrderToast: !1,
                                        }),
                                        (e.next = 9),
                                        (0, F.FB)(
                                          i,
                                          function () {
                                            var e = i;
                                            b.Z.sendEvent("DeleteOrder", {
                                              data: e,
                                              type: t,
                                            }),
                                              (0, _.navigateBack)({ delta: 1 });
                                          },
                                          function (e) {
                                            var t, i;
                                            return null ===
                                              (t = (i = n).ubtDevTrace) ||
                                              void 0 === t
                                              ? void 0
                                              : t.call(
                                                  i,
                                                  "robTicket_common_log_key",
                                                  e
                                                );
                                          },
                                          t
                                        )
                                      );
                                    case 9:
                                      (n.isDeletingOrder = !1), (e.next = 16);
                                      break;
                                    case 12:
                                      (e.prev = 12),
                                        (e.t0 = e.catch(0)),
                                        (n.isDeletingOrder = !1),
                                        null === (r = (o = n).ubtDevTrace) ||
                                          void 0 === r ||
                                          r.call(
                                            o,
                                            "robTicket_common_log_key",
                                            {
                                              scene: "deleteOrder-error",
                                              message: e.t0.message,
                                              data: JSON.stringify({
                                                orderNumber:
                                                  n.recognizeId ||
                                                  n.orderNumber,
                                              }),
                                            }
                                          );
                                    case 16:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 12]]
                            );
                          })
                        )
                      ),
                      (0, h.Z)((0, c.Z)(n), "showDeleteToast", function () {
                        var e, t;
                        n.setState({ showDeleteOrderToast: !0 }),
                          null === (e = (t = n).ubtTrace) ||
                            void 0 === e ||
                            e.call(
                              t,
                              "GrabAlternateDetail_DeletePopup_exposure",
                              {
                                channel: w.Z.isCRN ? "App" : "Applets",
                                PageId: n.pageId,
                              }
                            );
                      }),
                      (0, h.Z)((0, c.Z)(n), "showCancelBanner", function () {
                        var e = n.state.orderInfo,
                          t = void 0 === e ? {} : e;
                        return !(
                          1 !==
                            (null == t ? void 0 : t.isZhiXingCandidateOrder) ||
                          ![3, 6].includes(null == t ? void 0 : t.statusCode)
                        );
                      }),
                      (0, h.Z)((0, c.Z)(n), "showDeleteBanner", function () {
                        return (
                          1 !==
                          (n.state.orderInfo || {}).isZhiXingCandidateOrder
                        );
                      }),
                      (n.triggerScroll = Pt.Z.throttle(function () {
                        _.eventCenter.trigger("CandidateDetailScroll");
                      }, 500)),
                      n
                    );
                  }
                  return (
                    (0, s.Z)(i, [
                      {
                        key: "handleParams",
                        value: function () {
                          var e = (0, _.getCurrentInstance)();
                          if (e && e.router && e.router.params) {
                            var t, i, n;
                            console.log("instance", e);
                            var r = JSON.parse(
                              decodeURIComponent(
                                (null === (t = e.router.params) || void 0 === t
                                  ? void 0
                                  : t.initData) || "{}"
                              )
                            );
                            (this.orderNumber =
                              (null == r ? void 0 : r.orderNumber) ||
                              e.router.params.orderNumber ||
                              ""),
                              (this.fromPage =
                                (null == r ? void 0 : r.fromPage) ||
                                e.router.params.fromPage ||
                                ""),
                              (this.recognizeId =
                                (null == r ? void 0 : r.recognizeId) ||
                                (null === (i = e.router.params) || void 0 === i
                                  ? void 0
                                  : i.recognizeId) ||
                                "");
                            var a =
                              0 ==
                              (null !== (n = null == r ? void 0 : r.status) &&
                              void 0 !== n
                                ? n
                                : e.router.params.status);
                            this.setState({
                              fromPage: this.fromPage,
                              orderNumber: this.orderNumber,
                              isFirst: a,
                              showDeleteOrderToast: !1,
                              showWaitingNumberToast: !1,
                            });
                          }
                        },
                      },
                      {
                        key: "componentDidMount",
                        value: function () {
                          _.eventCenter.trigger("CandidateDetailShow"),
                            this.handleParams(),
                            this.refresh(),
                            (0, A.s6)(this),
                            this.ubtTrace("GrabAlternateDetail_exposure", {
                              fromSource: this.recognizeId
                                ? "图片识别"
                                : "其他",
                              pageId: this.pageId,
                            }),
                            this.orderNumber && this.getTrainCross();
                        },
                      },
                      {
                        key: "refresh",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, a.Z)().mark(function e() {
                              var t,
                                i,
                                n = this;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!this.recognizeId) {
                                          e.next = 8;
                                          break;
                                        }
                                        return (e.next = 3), (0, A.Fq)(this);
                                      case 3:
                                        if ((i = e.sent)) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 6:
                                        return (
                                          D(
                                            this,
                                            this.formatRecognizeOrderTicketList(
                                              null ===
                                                (t = i.alternateOrderDetail) ||
                                                void 0 === t
                                                ? void 0
                                                : t.ticketInfoList
                                            )
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 8:
                                        return (
                                          (this.hasSyncFailFlagAction = !1),
                                          e.abrupt(
                                            "return",
                                            (0, A.PF)(this).then(function (e) {
                                              var t;
                                              e &&
                                                (1 ===
                                                  (null == e
                                                    ? void 0
                                                    : e.syncFailFlag) &&
                                                  n.setState(
                                                    {
                                                      showSyncFailFlagDialog:
                                                        !0,
                                                    },
                                                    function () {
                                                      n.ubtTrace(
                                                        "GrabAlternateDetail_YiChangPopup_exposure",
                                                        {
                                                          Pageid: n.pageId,
                                                          channel: w.Z.isCRN
                                                            ? "App"
                                                            : "Applets",
                                                        }
                                                      );
                                                    }
                                                  ),
                                                D(
                                                  n,
                                                  null ===
                                                    (t =
                                                      e.alternateOrderDetail) ||
                                                    void 0 === t
                                                    ? void 0
                                                    : t.ticketInfoList
                                                ));
                                            })
                                          )
                                        );
                                      case 10:
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
                        key: "componentWillUnmount",
                        value: function () {
                          this.timer && clearTimeout(this.timer);
                        },
                      },
                      {
                        key: "getTrainCross",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, a.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                r,
                                o,
                                l = this;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = {
                                            orderNumber: this.orderNumber,
                                            fromPage: "grabDetail",
                                            fromSource: 7,
                                          }),
                                          (e.next = 3),
                                          (0, Ft.of)()
                                        );
                                      case 3:
                                        (i = e.sent),
                                          (n = i.name),
                                          (r = i.userName),
                                          (o = i.userID),
                                          (this.curUserName =
                                            r || n || o || ""),
                                          console.log(
                                            "trainCross---\x3egrabDetail--curUserName",
                                            JSON.stringify(this.curUserName)
                                          ),
                                          console.log(
                                            "trainCross---\x3egrabDetail",
                                            JSON.stringify(t)
                                          ),
                                          (0, B.$q)(t).then(function (e) {
                                            var t;
                                            if (
                                              (console.log(
                                                "trainCross---\x3egrabDetail",
                                                JSON.stringify(e)
                                              ),
                                              1 === e.resultCode &&
                                                (null == e ||
                                                null === (t = e.toasts) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.length) > 0)
                                            ) {
                                              var i;
                                              z(e.toasts, function (e) {
                                                l.setState({
                                                  urgeCandidateToast: e,
                                                });
                                              });
                                              var n =
                                                null ===
                                                  (i = e.toasts.filter(
                                                    function (e) {
                                                      return (
                                                        "alternateGuideToast" ===
                                                        (null == e
                                                          ? void 0
                                                          : e.toastCode)
                                                      );
                                                    }
                                                  )) || void 0 === i
                                                  ? void 0
                                                  : i[0];
                                              if (n) {
                                                var r =
                                                  (null == n
                                                    ? void 0
                                                    : n.toastJson) || "";
                                                try {
                                                  if (
                                                    r &&
                                                    "string" == typeof r
                                                  ) {
                                                    var a = JSON.parse(r)
                                                      ? JSON.parse(r)
                                                      : null;
                                                    l.setState({
                                                      alternateGuideToast: a,
                                                    });
                                                  } else
                                                    l.setState({
                                                      alternateGuideToast: null,
                                                    });
                                                } catch (e) {
                                                  l.setState({
                                                    alternateGuideToast: null,
                                                  });
                                                }
                                              }
                                            }
                                          });
                                      case 11:
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
                        key: "componentDidShow",
                        value: function () {
                          var e = setTimeout(function () {
                            clearTimeout(e), (0, Ce.GN)();
                          });
                        },
                      },
                      {
                        key: "onViewScroll",
                        value: function () {
                          this.triggerScroll();
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "formatRecognizeOrderTicketList",
                        value: function (e) {
                          if (!Array.isArray(e)) return [];
                          var t = [];
                          return (
                            e.forEach(function (e) {
                              var i = (function (e) {
                                  var t = e.match(
                                    /(\d+)\u5c0f\u65f6(\d+)\u5206/
                                  );
                                  return t
                                    ? 60 * parseInt(t[1]) + parseInt(t[2])
                                    : null;
                                })(null == e ? void 0 : e.costTime),
                                n = (function (e) {
                                  var t = e.match(/^(\d{4}-\d{2}-\d{2})/);
                                  return t ? t[1] : null;
                                })(null == e ? void 0 : e.ticketDate);
                              if (i && n) {
                                var a =
                                    n +
                                    " " +
                                    (null == e ? void 0 : e.departTime) +
                                    ":00",
                                  o = f()(a)
                                    .add(i, "minute")
                                    .format("YYYY-MM-DD HH:mm:ss");
                                t.push(
                                  (0, r.Z)(
                                    (0, r.Z)({}, e),
                                    {},
                                    { departDateTime: a, arriveDateTime: o }
                                  )
                                );
                              }
                            }),
                            t
                          );
                        },
                      },
                      {
                        key: "closeShowType",
                        value: function () {
                          this.setState({ showType: "" });
                        },
                      },
                      {
                        key: "showPriceDetail",
                        value: function (e) {
                          this.setState({
                            showType: we.Iv.PriceDetailDrawer,
                            priceDetail: e,
                          });
                        },
                      },
                      {
                        key: "showPopupType",
                        value: function (e) {
                          this.setState({ showType: e });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i,
                            n,
                            a,
                            o,
                            l,
                            s = this,
                            c = this.state,
                            d = c.hasGetData,
                            u = c.orderInfo,
                            h = c.showRetainToast,
                            g = c.showLuckyCodeToast,
                            m = c.isShowShareRewardActivity,
                            _ = c.showSyncFailFlagDialog,
                            b = c.showAlternateGuideToast,
                            N = c.alternateGuideToast,
                            C = c.showType,
                            B = c.priceDetail,
                            D = c.isRefreshing;
                          if (!d) return (0, x.tZ)(y.View, {});
                          if (!u)
                            return (0, x.BX)(y.View, {
                              className: "page",
                              style: ei.container,
                              children: [
                                (0, x.tZ)(q.Z, {
                                  page: this,
                                  title: "",
                                  titleColor: "#222",
                                  needHolder: !0,
                                  titleFontSize: 17,
                                  defaultBackButtonColor: "black",
                                  backgroundColor: "transparent",
                                }),
                                (0, x.tZ)(O, {
                                  isShowReloadButton: !0,
                                  viewType: "NetError",
                                  title: "加载失败，请再试试吧",
                                  totalHeight: Kt.screenHeight - 200,
                                  subTitle: "",
                                  reloadCallback: function () {
                                    s.refresh();
                                  },
                                }),
                              ],
                            });
                          var V =
                              (null == u ? void 0 : u.statusCode) ===
                              we.sx.CANDIDATE_CANCEL
                                ? null == u
                                  ? void 0
                                  : u.ticketPlansInfos
                                : null == u ||
                                  null === (e = u.alternateOrderDetail) ||
                                  void 0 === e
                                ? void 0
                                : e.ticketInfoList,
                            z =
                              (null == u ? void 0 : u.statusCode) ===
                              we.sx.CANDIDATE_CANCEL
                                ? null == u
                                  ? void 0
                                  : u.passengerInfoTypes
                                : null == u ||
                                  null === (t = u.alternateOrderDetail) ||
                                  void 0 === t
                                ? void 0
                                : t.passengerInfoList,
                            X =
                              (null == u ? void 0 : u.candidateRankToast) || {},
                            A =
                              (null == u ? void 0 : u.statusCode) ==
                                we.sx.CANDIDATE_SUBMIT_SUCCESS ||
                              this.recognizeId,
                            W = {
                              enableTapBackground: !1,
                              title: "温馨提示",
                              content: "您的12306账号登录失败，请重新登录",
                              buttonName: "重新登录中",
                              onButtonClick: function () {
                                s.setState({ showSyncFailFlagDialog: !1 }),
                                  console.log("handle12306Exception-----\x3e"),
                                  s.hasSyncFailFlagAction ||
                                    ((s.hasSyncFailFlagAction = !0),
                                    (function (e, t) {
                                      At.apply(this, arguments);
                                    })(s.orderNumber, function () {
                                      s.hasSyncFailFlagAction = !1;
                                    }));
                              },
                              showType: "single",
                            };
                          return (0, x.BX)(y.View, {
                            className: "page",
                            style: (0, r.Z)(
                              (0, r.Z)({}, ei.container),
                              w.Z.isBaidu ? { height: "100vh" } : {}
                            ),
                            children: [
                              (0, x.BX)(y.View, {
                                style: {
                                  overflow: "hidden",
                                  zIndex: 2,
                                  position: "relative",
                                },
                                children: [
                                  !this.state.isFirst &&
                                    (0, x.tZ)(j.Z, {
                                      start: { x: 0, y: 0 },
                                      end: { x: 0, y: 1 },
                                      colors: w.Z.isTieyou
                                        ? ["#F5F5F5", "#ACB6E6"]
                                        : ["#B3D2FF", "#F5F5F5"],
                                      locations: [0, 1],
                                      style: ei.headerBg,
                                    }),
                                  (0, x.tZ)(q.Z, {
                                    page: this,
                                    title: "",
                                    titleColor: "#222",
                                    needHolder: !0,
                                    titleFontSize: 17,
                                    defaultBackButtonColor: "black",
                                    backgroundColor: "transparent",
                                    style: { position: "relative", zIndex: 2 },
                                    renderLeftView: w.Z.isCRN
                                      ? function () {
                                          return (0, x.tZ)(y.View, {
                                            id: "AMDl",
                                            onClick: function () {
                                              return (0, F.js)(s);
                                            },
                                            children: (0, x.tZ)(y.View, {
                                              style: {
                                                height: 44,
                                                width: 44,
                                                marginLeft: 5,
                                                justifyContent: "center",
                                                alignItems: "center",
                                              },
                                              children: (0, x.tZ)(_e.Z, {
                                                style: {
                                                  fontSize: 24,
                                                  alignSelf: "center",
                                                  color: "#222",
                                                  marginLeft: 5,
                                                },
                                                children: "󰲚",
                                              }),
                                            }),
                                          });
                                        }
                                      : null,
                                    renderRightView: function () {
                                      return w.Z.isCRN && !s.state.isFirst
                                        ? (0, x.BX)(y.View, {
                                            id: "AMDm",
                                            onClick: function () {
                                              return (0, F.jn)(
                                                "https://jinshuju.net/f/XHql45"
                                              );
                                            },
                                            style: {
                                              display: "flex",
                                              flexDirection: "column",
                                              marginRight: 16,
                                              justifyContent: "center",
                                              alignItems: "center",
                                            },
                                            children: [
                                              (0, x.tZ)(y.Image, {
                                                src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_05/fk@3x.png",
                                                style: {
                                                  width: 15.5,
                                                  height: 15.5,
                                                },
                                              }),
                                              (0, x.tZ)(y.View, {
                                                style: {
                                                  fontSize: 10,
                                                  color: "#222",
                                                  marginTop: 3,
                                                },
                                                children: "问卷",
                                              }),
                                            ],
                                          })
                                        : null;
                                    },
                                    renderCenterView: function () {
                                      return w.Z.isTieyou
                                        ? (0, x.tZ)(y.View, {})
                                        : (0, x.tZ)(y.View, {
                                            style: {
                                              display: "flex",
                                              justifyContent: "center",
                                              flexDirection: "row",
                                              zIndex: 99,
                                            },
                                            children: (0, x.tZ)(y.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_09/shenqi@3x.png",
                                              style: { width: 161, height: 20 },
                                            }),
                                          });
                                    },
                                  }),
                                ],
                              }),
                              this.state.isFirst &&
                                (0, x.tZ)(y.Image, {
                                  style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                  },
                                  src: w.Z.isTieyou
                                    ? "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/tyzt@3x.png"
                                    : "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/zt@3x.png",
                                }),
                              !this.state.isFirst &&
                                (0, x.tZ)(j.Z, {
                                  start: { x: 0, y: 0 },
                                  end: { x: 0, y: 1 },
                                  colors: w.Z.isTieyou
                                    ? ["#F5F5F5", "#ACB6E6"]
                                    : ["#B3D2FF", "#F5F5F5"],
                                  locations: [0, 1],
                                  style: ei.bg,
                                }),
                              this.state.isFirst &&
                                (0, x.tZ)(Qt, {
                                  hideLoading: function () {
                                    s.setState({ isFirst: !1 });
                                  },
                                }),
                              !this.state.isFirst &&
                                (0, x.BX)(k.Z, {
                                  flexHeight: !0,
                                  style: { backgroundColor: "transparent" },
                                  showsVerticalScrollIndicator: !1,
                                  refresherEnabled: !0,
                                  refresherThreshold: 100,
                                  refresherTriggered: D,
                                  refresherBackground: "transparent",
                                  showScrollbar: !1,
                                  onScroll: this.onViewScroll.bind(this),
                                  scrollY: !0,
                                  scrollEventThrottle: 16,
                                  onRefresherRefresh: function () {
                                    s.setState({ isRefreshing: !0 }),
                                      s.refresh().finally(function () {
                                        setTimeout(function () {
                                          s.setState({ isRefreshing: !1 });
                                        }, 500);
                                      });
                                  },
                                  refreshControl: (0, x.tZ)(H.Z, {
                                    refreshing: D,
                                    ref: function (e) {
                                      return (s._refreshControl = e);
                                    },
                                    style: { backgroundColor: "transparent" },
                                    onRefresh: function () {
                                      s.setState({ isRefreshing: !0 }),
                                        s.refresh().finally(function () {
                                          setTimeout(function () {
                                            var e, t;
                                            s.setState({ isRefreshing: !1 }),
                                              null ===
                                                (e = s._refreshControl) ||
                                                void 0 === e ||
                                                null ===
                                                  (t = e.finishRefresh) ||
                                                void 0 === t ||
                                                t.call(e);
                                          }, 500);
                                        });
                                    },
                                    stateLabelColor: "#666666",
                                    loadingStyleName: "white",
                                  }),
                                  children: [
                                    A &&
                                      (0, x.BX)(x.HY, {
                                        children: [
                                          (0, x.tZ)(te, {
                                            page: this,
                                            orderInfo: u,
                                          }),
                                          (0, x.tZ)(de, {
                                            orderInfo: u,
                                            ticketList: V,
                                            passengerInfo: z,
                                            showToast: function () {
                                              s.setState({
                                                showTicketInfoToast: !0,
                                              });
                                            },
                                            showWaitingNumberToast:
                                              function () {
                                                s.setState({
                                                  showWaitingNumberToast: !0,
                                                });
                                              },
                                          }),
                                        ],
                                      }),
                                    !A &&
                                      (0, x.BX)(x.HY, {
                                        children: [
                                          (0, x.tZ)(oe, { orderInfo: u }),
                                          (0, x.tZ)(se, { ticketList: V }),
                                          (0, x.tZ)(he, { passengerInfo: z }),
                                        ],
                                      }),
                                    !(
                                      null ===
                                        (i =
                                          this.state
                                            .smartSchemeRecommendInfoList) ||
                                      void 0 === i ||
                                      !i.length
                                    ) &&
                                      (0, x.tZ)(kt, {
                                        smartSchemeRecommendInfoList:
                                          this.state
                                            .smartSchemeRecommendInfoList,
                                        showChooseDialog: function () {
                                          return (function (e) {
                                            e.setState({
                                              showSmartSchemeRecommendToast: !0,
                                            });
                                          })(s);
                                        },
                                        trainNo: this.state.currentSmartTrainNo,
                                        pageId: this.pageId,
                                        ubtTrace: this.ubtTrace.bind(this),
                                        showPriceDetail:
                                          this.showPriceDetail.bind(this),
                                      }),
                                    !A &&
                                      (0, x.tZ)(Ne, {
                                        candidateUpgradeInfo:
                                          null == u
                                            ? void 0
                                            : u.candidateUpgradeInfo,
                                        buttonTag:
                                          null == u ||
                                          null ===
                                            (n = u.candidateUpgradeInfo) ||
                                          void 0 === n
                                            ? void 0
                                            : n.buttonTag,
                                        orderNumber: this.orderNumber,
                                      }),
                                    (0, x.tZ)(Be, {
                                      ubtTrace: this.ubtTrace,
                                      pageId: this.pageId,
                                      orderInfo: u,
                                      showToast: function () {
                                        return s.setState({
                                          showLuckyCodeToast: !0,
                                        });
                                      },
                                    }),
                                    !A &&
                                      (0, x.tZ)(me, {
                                        orderInfo: u,
                                        propStyle: {
                                          marginLeft: (0, E.u1)(8),
                                          marginRight: (0, E.u1)(8),
                                        },
                                      }),
                                    this.showCancelBanner() &&
                                      (0, x.tZ)(pe, { page: this }),
                                    this.showDeleteBanner() &&
                                      (0, x.tZ)(v, {
                                        showToast: this.showDeleteToast,
                                        ubtTrace: this.ubtTrace,
                                        pageId: this.pageId,
                                      }),
                                    (0, x.tZ)(R.Z, {}),
                                  ],
                                }),
                              (0, x.tZ)(xe, {
                                statusCode: null == u ? void 0 : u.statusCode,
                              }),
                              (0, x.BX)(y.View, {
                                style: { zIndex: 1001 },
                                children: [
                                  m &&
                                    !this.state.isFirst &&
                                    (0, x.tZ)(Ie.Z, {
                                      outerStyle: { bottom: 120 },
                                      data:
                                        null == u ? void 0 : u.rewardInfoJson,
                                      onClose: function () {
                                        p().setStorageSync(
                                          Se.Hj,
                                          f()().valueOf()
                                        ),
                                          s.setState({
                                            isShowShareRewardActivity: !1,
                                          });
                                      },
                                      fromPage: "candidateOrderDetail",
                                      ubtTrace: this.ubtTrace,
                                      pageId: this.pageId,
                                    }),
                                  (0, x.tZ)(Ze, {
                                    isShow: this.state.showCancelOrderToast,
                                    cancel: function () {
                                      s.setState({ showCancelOrderToast: !1 });
                                    },
                                    confirm: function () {
                                      (0, F.ok)(s),
                                        s.setState({
                                          showCancelOrderToast: !1,
                                        });
                                    },
                                  }),
                                  (0, x.tZ)(ve, {
                                    isShow: h,
                                    confirm: function () {
                                      return (0, F.js)(s);
                                    },
                                    cancel: function () {
                                      return s.setState({
                                        showRetainToast: !1,
                                      });
                                    },
                                  }),
                                  (0, x.tZ)(Ve, {
                                    page: this,
                                    isShow: g,
                                    cancel: function () {
                                      return s.setState({
                                        showLuckyCodeToast: !1,
                                      });
                                    },
                                  }),
                                  (0, x.tZ)(S.Z, {
                                    isShow: this.state.showDeleteOrderToast,
                                    confirm: this.deleteOrder,
                                    cancel: function () {
                                      return s.setState({
                                        showDeleteOrderToast: !1,
                                      });
                                    },
                                    ubtTrace: this.ubtTrace,
                                    pageId: this.pageId,
                                  }),
                                  (0, x.tZ)(Ht, {
                                    priceDetail: B,
                                    isShow: C === we.Iv.PriceDetailDrawer,
                                    onClose: this.closeShowType.bind(this),
                                  }),
                                  (0, x.tZ)(Mt, {
                                    isShow: C === we.Iv.UpgradeRetainDrawer,
                                    onClose: this.closeShowType.bind(this),
                                    pageId: this.pageId,
                                    ubtTrace: this.ubtTrace.bind(this),
                                    content:
                                      null == u
                                        ? void 0
                                        : u.upgradeRetainToastInfo,
                                    buttonTag:
                                      null == u ||
                                      null === (a = u.candidateUpgradeInfo) ||
                                      void 0 === a
                                        ? void 0
                                        : a.buttonTag,
                                    orderNumber: this.orderNumber,
                                  }),
                                  (0, x.tZ)(
                                    zt.Z,
                                    (0, r.Z)(
                                      {
                                        isShow: _,
                                        isShowClose: !0,
                                        timerCount: 4,
                                        onClose: function () {
                                          s.setState(
                                            { showSyncFailFlagDialog: !1 },
                                            function () {
                                              s.hasSyncFailFlagAction = !0;
                                            }
                                          );
                                        },
                                      },
                                      W
                                    )
                                  ),
                                  (0, x.tZ)(Z.Z, {
                                    isShow: !!b,
                                    extStyle: {
                                      marginTop:
                                        w.Z.isCRN && "ios" == w.Z.os ? 30 : 0,
                                    },
                                    img: (N && N.img) || "",
                                    title: (N && N.title) || "",
                                    subTitle: (N && N.subTitle) || "",
                                    onClose: function () {
                                      s.setState({
                                        showAlternateGuideToast: !1,
                                      });
                                    },
                                  }),
                                  (0, x.tZ)(Ut, {
                                    isShow: this.state.showTicketInfoToast,
                                    orderInfo: u,
                                    ticketList: V,
                                    passengerInfo: z,
                                    hideToast: function () {
                                      s.setState({ showTicketInfoToast: !1 });
                                    },
                                    showWaitingNumberToast: function () {
                                      s.setState({
                                        showWaitingNumberToast: !0,
                                      });
                                    },
                                  }),
                                  (0, x.tZ)(Jt, {
                                    page: this,
                                    isShow: C === we.Iv.OCRLoginT6Drawer,
                                    onClose: this.closeShowType.bind(this),
                                  }),
                                  (0, x.tZ)(T.h, {
                                    isShow:
                                      this.state.showWaitingNumberToast &&
                                      !(null == X || !X.title),
                                    cancel: function () {
                                      s.setState({
                                        showWaitingNumberToast: !1,
                                      });
                                    },
                                    title: null == X ? void 0 : X.title,
                                    subTitle:
                                      '\n            <div style="margin-left:20px;margin-right:20px;text-align:left;">\n            <span style="color: #666666;font-size:14px;line-height:20px;text-align:left;font-family:PingFangSC-Regular;font-weight:600">'
                                        .concat(
                                          null == X ? void 0 : X.content,
                                          '</span>\n            <div style = "margin-top:16px;">\n            <span style="color: #999999;font-size:13px;line-height: 20px;text-align:left;font-family:PingFangSC-Regular;font-weight:500">'
                                        )
                                        .concat(
                                          null == X ? void 0 : X.tips,
                                          "</span>\n            </div>\n            </div>\n            "
                                        ),
                                    buttons: [
                                      {
                                        text:
                                          (null == X ? void 0 : X.buttonName) ||
                                          "我知道了",
                                        onClick: function () {
                                          s.setState({
                                            showWaitingNumberToast: !1,
                                          });
                                        },
                                        color: "#fff",
                                        bgColor: "#198cff",
                                      },
                                    ],
                                  }),
                                ],
                              }),
                              (0, x.tZ)(I, {
                                smartSchemeRecommendInfoList:
                                  this.state.smartSchemeRecommendInfoList,
                                isShow:
                                  this.state.showSmartSchemeRecommendToast,
                                chosenTrainNo: this.state.currentSmartTrainNo,
                                onConfirm: function (e) {
                                  s.ubtTrace(
                                    "GrabAlternateDetail_TicketPlanTrainno_click",
                                    { PageId: s.pageId, trainNo: e }
                                  ),
                                    (function (e, t) {
                                      e.setState({ currentSmartTrainNo: t });
                                    })(s, e);
                                },
                                hide: function () {
                                  return (function (e) {
                                    e.setState({
                                      showSmartSchemeRecommendToast: !1,
                                    });
                                  })(s);
                                },
                              }),
                              !(
                                null === (o = this.state.urgeCandidateToast) ||
                                void 0 === o ||
                                !o.icon
                              ) &&
                                (0, x.tZ)(L, {
                                  toastInfo: this.state.urgeCandidateToast,
                                  showUrgeCandidateDialog: function () {
                                    s.setState({
                                      isUrgeCandidateDialogShow: !0,
                                    });
                                  },
                                  pageId: this.pageId,
                                  ubtTrace: this.ubtTrace.bind(this),
                                }),
                              (0, x.tZ)(G, {
                                hide: function () {
                                  s.setState({ isUrgeCandidateDialogShow: !1 });
                                },
                                toast:
                                  null ===
                                    (l = this.state.urgeCandidateToast) ||
                                  void 0 === l
                                    ? void 0
                                    : l.toast,
                                isShow: this.state.isUrgeCandidateDialogShow,
                                page: this,
                                pageId: this.pageId,
                                ubtTrace: this.ubtTrace.bind(this),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(g.Component))
              ) || Wt,
            ei = (0, E.lW)({
              container: {
                display: "flex",
                flex: 1,
                backgroundColor: "#f5f5f5",
                flexDirection: "column",
              },
              headerBg: {
                position: "absolute",
                top: 0,
                left: 0,
                width: w.Z.isCRN ? Kt.windowWidth : "750rpx",
                height: 240,
                overflow: "hidden",
              },
              bg: {
                position: "absolute",
                top: 0,
                left: 0,
                width: w.Z.isCRN ? Kt.windowWidth : "750rpx",
                height: 240,
              },
            }),
            ti = $t;
          Page(
            (0, n.createPageConfig)(
              ti,
              "pages/taroCRN/train/pages/CandidateOrderDetail/index",
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
            6878, 71229, 10313, 31162, 20858, 19772, 87032, 82524, 43278, 42552,
            67074, 62396, 54576, 85786, 20481, 14810, 3997, 55464, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(67566);
          }
        ),
          e.O();
      },
    ]);
})();
