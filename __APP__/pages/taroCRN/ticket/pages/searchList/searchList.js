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
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [65133],
      {
        66388: function (e, t, i) {
          var n = i(32180),
            o = i(22276),
            a = i(298),
            l = i(57042),
            c = i(24460),
            r = i(81876),
            s = i(21867),
            u = i(86066),
            _ = i(45023),
            d = i(52500),
            f = i(92954),
            m = i.n(f),
            p = i(71515),
            h = i(87298),
            y = i(90582),
            g = i(19972),
            Z = i(23577),
            v = i(90098),
            N = i(88184),
            S = i(48813),
            w = [
              { title: "全部景点", type: "all" },
              { title: "智能排序", type: "sort" },
              { title: "筛选", type: "filter" },
            ],
            C = function (e) {
              var t = e.onFilterBar,
                i = e.sortLabel,
                n = e.sceneLabel,
                o = e.isShowFilterPop,
                a = e.optionListType,
                l = e.filterLabel,
                c = function (e) {
                  var t = {};
                  return (
                    "all" === e.type
                      ? ((t.txt = n || "全部景点"),
                        (t.select = !!n || (o && "all" === a)))
                      : "sort" === e.type
                      ? ((t.txt = i || "智能排序"),
                        (t.select = !!i || (o && "sort" === a)))
                      : "filter" === e.type &&
                        ((t.txt = l || "筛选"),
                        (t.select = !!l || (o && "filter" === a))),
                    t
                  );
                };
              return (0, S.tZ)(p.View, {
                className: " _i _Ga _m _l _Np _jj _yb",
                children: w.map(function (e, i) {
                  var n = c(e);
                  return (0, S.BX)(
                    p.View,
                    {
                      className: " _i _Ga _l",
                      id: "AMCo",
                      onClick: function () {
                        return t(e.type);
                      },
                      children: [
                        (0, S.tZ)(p.Text, {
                          className: n.select ? " _x _Oj" : " _Xb _Oj",
                          children: n.txt,
                        }),
                        (0, S.tZ)(p.Image, {
                          src: n.select
                            ? o
                              ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_xssq@3x.png"
                              : "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_xxsx@3x.png"
                            : "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_xxzk@3x.png",
                          className: " _Bb _dg _Zg",
                        }),
                      ],
                    },
                    i
                  );
                }),
              });
            },
            b = i(90129),
            I = function (e) {
              var t = e.optionList,
                i = e.onFilterItem,
                n = e.sortParameter,
                o = e.filterList,
                a = e.optionListType,
                l = e.canNowUse,
                c = (0, d.useState)([]),
                r = (0, b.Z)(c, 2),
                s = r[0],
                u = r[1];
              return (
                (0, d.useEffect)(
                  function () {
                    (null == t ? void 0 : t.length) > 0 &&
                      ("all" === a
                        ? t.forEach(function (e) {
                            var t;
                            (null == e ? void 0 : e.value) ===
                            (null === (t = o[0]) || void 0 === t
                              ? void 0
                              : t.value)
                              ? (e.select = !0)
                              : (e.select = !1);
                          })
                        : "sort" === a
                        ? t.forEach(function (e) {
                            (null == e ? void 0 : e.sortDirection) ===
                            (null == n ? void 0 : n.sortDirection)
                              ? (e.select = !0)
                              : (e.select = !1);
                          })
                        : "filter" === a &&
                          t.forEach(function (e) {
                            e.select = !!l;
                          }),
                      u(t));
                  },
                  [t, n, a, o]
                ),
                (0, S.tZ)(S.HY, {
                  children: (0, S.tZ)(p.ScrollView, {
                    className: " _Z _Fv _i _Zr _k _gw _jj",
                    scrollY: !0,
                    children:
                      null == s
                        ? void 0
                        : s.map(function (e, t) {
                            return (0, S.BX)(
                              p.View,
                              {
                                className: " _i _Ga _m _l _jk",
                                id: "AMCp",
                                onClick: function () {
                                  i(e);
                                },
                                children: [
                                  (0, S.tZ)(p.Text, {
                                    className:
                                      null != e && e.select
                                        ? " _x _hw"
                                        : " _Ma _G",
                                    children: e.text,
                                  }),
                                  (null == e ? void 0 : e.select) &&
                                    (0, S.tZ)(p.Image, {
                                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_dgxz@3x.png",
                                      className: " _Bb _dg _Xf",
                                    }),
                                ],
                              },
                              t
                            );
                          }),
                  }),
                })
              );
            },
            L = i(35537),
            x = i(34229),
            T = function (e) {
              var t = e.list,
                i = e.pageNum,
                n = e.pageSize,
                o = e.onRenderHeader,
                a = void 0 === o ? function () {} : o,
                l = e.onRequestNextPage,
                c = void 0 === l ? function () {} : l,
                r = e.onRenderItem,
                s = void 0 === r ? function () {} : r,
                u = e.scrollIntoView;
              return (0, S.tZ)(x.ZtVirtualList, {
                list: t,
                listId: "zt-virtial-list-ticket",
                listType: "multi",
                pageNum: i,
                segmentNum: n,
                autoScrollTop: !1,
                onRenderTop: a,
                className: " _Z _Y _Xv",
                scrollViewProps: {
                  onScrollToLower: function () {
                    return c();
                  },
                  lowerThreshold: 100,
                  scrollIntoView: u,
                },
                onRender: function (e, t) {
                  return s(e, t);
                },
              });
            },
            k = i(43884),
            V = function (e) {
              var t = e.onSearch,
                i = e.keyword;
              return (0, S.tZ)(p.View, {
                style: { backgroundColor: "#fff" },
                children: (0, S.BX)(p.View, {
                  className: Z.Z.isCRN
                    ? " _Qf _Gc _yd _Oa _i _Ga _l"
                    : " _Rd _Gc _yd _Oa _i _Ga _l",
                  children: [
                    (0, S.BX)(p.View, {
                      className: " _oo _i _l _Cc",
                      id: "AMCr",
                      onClick: t,
                      children: [
                        (0, S.tZ)(p.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_ss@3x.png",
                          className: " _Ce _De _Ne",
                        }),
                        (0, S.tZ)(p.View, {
                          className: " _G _Kc",
                          children: (0, S.tZ)(p.Text, {
                            className: " _G _Kc",
                            numberOfLines: 1,
                            ellipsizeMode: "tail",
                            children: i || "搜索你感兴趣的景点",
                          }),
                        }),
                      ],
                    }),
                    (0, S.tZ)(p.View, {
                      id: "AMCs",
                      onClick: t,
                      children: (0, S.tZ)(k.Z, {
                        className: " _ww _nf _qa _lj _i _n _l",
                        miniDirection: "X",
                        start: { x: 0, y: 0 },
                        end: { x: 1, y: 1 },
                        colors: ["rgb(25, 140, 255)", "rgb(13, 194, 255)"],
                        children: (0, S.tZ)(p.Text, {
                          className: " _qb _ck",
                          children: "搜索",
                        }),
                      }),
                    }),
                  ],
                }),
              });
            };
          function B(e) {
            var t = "暂无评论";
            return (
              e > 0 && e < 1e4
                ? (t = e + "条评论")
                : e >= 1e4 && (t = (e / 1e4).toFixed(1) + "w+条评论"),
              t
            );
          }
          var R = function (e) {
              return Number(e).toFixed(0) === Number(e)
                ? Number(e).toFixed(0)
                : Number(e);
            },
            D = function (e) {
              var t,
                i,
                n,
                o,
                a,
                l,
                c,
                r,
                s,
                u = e.isFirst,
                _ = e.isLast,
                d = e.data,
                f = e.onItem,
                m = e.index;
              if (!d) return (0, S.tZ)(p.View, {});
              var h = Z.Z.isCRN
                ? " _kl _Vb _Mb _yc _Bw _pb"
                : " _kl _Vb _Mb _yc _Oa _Cw";
              u
                ? (h = Z.Z.isCRN
                    ? " _Ew _Xw _Vb _Mb _yc _pb"
                    : " _Ew _Vb _Mb _yc _Fw _Fr")
                : _ &&
                  (h = Z.Z.isCRN
                    ? " _Gw _Vb _Mb _yc _Rd _pb"
                    : " _Fv _Hw _Vb _Mb _yc _Rd");
              return (0, S.tZ)(p.View, {
                className: h,
                id: "spot_item_".concat(m),
                children: (0, S.BX)(p.View, {
                  className: u
                    ? " _Hv _i _k"
                    : Z.Z.isCRN
                    ? " _Gv _i _k"
                    : " _Iw _i _k",
                  id: "AMCq",
                  onClick: function () {
                    return f(d);
                  },
                  style: Z.Z.isCRN ? { marginTop: 0, paddingBottom: 10 } : {},
                  children: [
                    (0, S.BX)(p.View, {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        (0, S.tZ)(p.View, {
                          className: " _rp _i _k _pf _Qf",
                          children: (0, S.tZ)(p.Image, {
                            src: d.imageURL,
                            className:
                              "ios" === Z.Z.os
                                ? " _rp _Iv _dc"
                                : " _xb _Jw _vi",
                          }),
                        }),
                        (0, S.BX)(p.View, {
                          className: " _Db _i _kk",
                          children: [
                            (0, S.BX)(p.Text, {
                              className: " _Xb _Jv",
                              children: [
                                d.name,
                                d.star && d.star >= 4
                                  ? "(".concat(d.star, "A)")
                                  : "",
                              ],
                            }),
                            !!d.rankingName &&
                              (0, S.BX)(p.View, {
                                className: " _i _Ga _l _Bj",
                                children: [
                                  (0, S.tZ)(k.Z, {
                                    className: " _Vf _Kv _i _Ga _l _n _Mw",
                                    start: { x: 0, y: 0.5 },
                                    end: { x: 1, y: 0.5 },
                                    colors: [
                                      "rgb(255, 249, 241)",
                                      "rgb(255, 236, 210)",
                                    ],
                                    children: (0, S.tZ)(p.Image, {
                                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_bq_jxb@3x.png",
                                      className: " _Zl _og",
                                    }),
                                  }),
                                  (0, S.tZ)(k.Z, {
                                    className: " _Kv _Nw _Lv _i _Ga _l",
                                    start: { x: 0, y: 0.5 },
                                    end: { x: 1, y: 0.5 },
                                    colors: [
                                      "rgb(255, 249, 241)",
                                      "rgb(255, 236, 210)",
                                    ],
                                    children: (0, S.tZ)(p.Text, {
                                      className: " _Ow _rl",
                                      children: d.rankingName,
                                    }),
                                  }),
                                ],
                              }),
                            !!d.pmRecommand &&
                              (0, S.BX)(p.View, {
                                className:
                                  " _Bj _vd _Kv _ji _Lv _i _Ga _l _xh _E",
                                children: ["“", d.pmRecommand, "”"],
                              }),
                            (0, S.BX)(p.View, {
                              className: " _Mv _i _Ga _l",
                              children: [
                                (0, S.tZ)(p.Text, {
                                  className: " _x _Nv",
                                  children: d.commentGrade
                                    ? "".concat(d.commentGrade.toFixed(1), "分")
                                    : "暂无评分",
                                }),
                                (0, S.tZ)(p.View, {
                                  className: " _uh _sf _Ov _Yk",
                                }),
                                (0, S.tZ)(p.Text, {
                                  className: " _uh _Ma _E",
                                  children: B(d.commentCount),
                                }),
                              ],
                            }),
                            (0, S.BX)(p.View, {
                              className: " _Z _i _Ga _m _l",
                              style:
                                null != d &&
                                d.salePrice &&
                                null != d &&
                                null !== (t = d.couponInfo) &&
                                void 0 !== t &&
                                t.couponDesc
                                  ? { marginTop: -6 }
                                  : {},
                              children: [
                                !!d.address &&
                                  (0, S.tZ)(p.View, {
                                    className:
                                      " _Bj _Kc _E _Q _yc _Xm _Ym _j _Pw",
                                    numberOfLines: 1,
                                    style: Z.Z.isCRN
                                      ? {
                                          maxWidth:
                                            null != d &&
                                            d.salePrice &&
                                            null != d &&
                                            null !== (i = d.couponInfo) &&
                                            void 0 !== i &&
                                            i.couponDesc
                                              ? 300
                                              : "100%",
                                        }
                                      : {},
                                    children: d.address,
                                  }),
                                !(null == d || !d.salePrice) &&
                                  !(
                                    null == d ||
                                    null === (n = d.couponInfo) ||
                                    void 0 === n ||
                                    !n.couponDesc
                                  ) &&
                                  (0, S.BX)(p.View, {
                                    className: " _i _Ga _pf _Xf",
                                    children: [
                                      (0, S.tZ)(p.View, {
                                        children: (0, S.tZ)(p.Text, {
                                          className: " _bf _Sv",
                                          style: Z.Z.isCRN
                                            ? {
                                                marginBottom:
                                                  "ios" === Z.Z.os ? 2 : 4,
                                              }
                                            : { marginBottom: 2 },
                                          children: "¥",
                                        }),
                                      }),
                                      (0, S.tZ)(p.View, {
                                        children: (0, S.tZ)(p.Text, {
                                          className: " _bf _Tv",
                                          style:
                                            Z.Z.isCRN && "ios" === Z.Z.os
                                              ? {}
                                              : {
                                                  fontSize: "zx_regular",
                                                  marginBottom: 2,
                                                },
                                          children: d.salePrice,
                                        }),
                                      }),
                                      (0, S.tZ)(p.View, {
                                        children: (0, S.tZ)(p.Text, {
                                          className: " _Ma _D",
                                          style: Z.Z.isCRN
                                            ? {
                                                marginBottom:
                                                  "ios" === Z.Z.os ? 2 : 4,
                                              }
                                            : { marginBottom: 2 },
                                          children: "起",
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, S.BX)(p.View, {
                              className: " _i _Z _Ga _pf",
                              style: Z.Z.isCRN ? { height: 26 } : {},
                              children: [
                                (0, S.BX)(p.View, {
                                  className:
                                    null != d && d.salePrice
                                      ? " _oo _i _l _Gi"
                                      : " _oo _i _l _Bj",
                                  children: [
                                    !(null == d || !d.advanceBookingDesc) &&
                                      (0, S.tZ)(p.View, {
                                        className:
                                          " _i _Ga _l _Rv _gb _Al _Va _C _Mb _x",
                                        style: Z.Z.isCRN
                                          ? {}
                                          : { borderStyle: "solid" },
                                        children:
                                          null == d
                                            ? void 0
                                            : d.advanceBookingDesc,
                                      }),
                                    (function () {
                                      var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                          ? arguments[0]
                                          : [];
                                      if (null == e || !e.length)
                                        return (0, S.tZ)(p.View, {});
                                      var t = e.filter(function (e) {
                                          return (
                                            e.key &&
                                            -1 === e.key.indexOf("可用") &&
                                            -1 === e.key.indexOf("可订")
                                          );
                                        }),
                                        i = [].concat(t[0] || {});
                                      return i.map(function (e, t) {
                                        return (0,
                                        S.tZ)(p.View, { className: " _i _Ga _l _Rv _gb _Al _Va _C _Mb _x", children: null == e ? void 0 : e.value }, t);
                                      });
                                    })(
                                      null == d ? void 0 : d.displayTagGroupList
                                    ),
                                  ],
                                }),
                                !(
                                  null == d ||
                                  null === (o = d.couponInfo) ||
                                  void 0 === o ||
                                  !o.couponDesc
                                ) &&
                                  (0, S.tZ)(p.View, {
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      flexDirection: "row",
                                      marginBottom: 4,
                                    },
                                    children: (0, S.tZ)(p.View, {
                                      className:
                                        " _i _Ga _l _Qv _gb _Al _C _Mb _Ze",
                                      style: Z.Z.isCRN
                                        ? { backgroundColor: "#fff2f2" }
                                        : {
                                            borderStyle: "solid",
                                            backgroundColor: "#fff2f2",
                                          },
                                      children:
                                        null == d ||
                                        null === (a = d.couponInfo) ||
                                        void 0 === a
                                          ? void 0
                                          : a.couponDesc,
                                    }),
                                  }),
                                !(null == d || !d.salePrice) &&
                                  !(
                                    null != d &&
                                    null !== (l = d.couponInfo) &&
                                    void 0 !== l &&
                                    l.couponDesc
                                  ) &&
                                  (0, S.BX)(p.View, {
                                    className: " _i _Ga _pf _Xf",
                                    children: [
                                      (0, S.tZ)(p.View, {
                                        style: { paddingTop: 6 },
                                        children: (0, S.tZ)(p.Text, {
                                          className: " _bf _Sv",
                                          style: Z.Z.isCRN
                                            ? {
                                                marginBottom:
                                                  "ios" === Z.Z.os ? 2 : 4,
                                              }
                                            : { marginBottom: 2 },
                                          children: "¥",
                                        }),
                                      }),
                                      (0, S.tZ)(p.View, {
                                        children: (0, S.tZ)(p.Text, {
                                          className: " _bf _Tv",
                                          style:
                                            Z.Z.isCRN && "ios" === Z.Z.os
                                              ? {}
                                              : {
                                                  fontSize: "zx_regular",
                                                  marginBottom: 2,
                                                },
                                          children: d.salePrice,
                                        }),
                                      }),
                                      (0, S.tZ)(p.View, {
                                        style: { paddingTop: 6 },
                                        children: (0, S.tZ)(p.Text, {
                                          className: " _Ma _D",
                                          style: Z.Z.isCRN
                                            ? {
                                                marginBottom:
                                                  "ios" === Z.Z.os ? 2 : 4,
                                              }
                                            : { marginBottom: 2 },
                                          children: "起",
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            !(
                              null == d ||
                              null === (c = d.discountInfo) ||
                              void 0 === c ||
                              !c.length
                            ) &&
                              (0, S.tZ)(p.View, {
                                className: " _Xk _Z _Zf _Yf",
                              }),
                          ],
                        }),
                      ],
                    }),
                    (!(null == d || !d.priceDiff) ||
                      (null == d ||
                      null === (r = d.discountInfo) ||
                      void 0 === r
                        ? void 0
                        : r.length)) &&
                      (0, S.tZ)(p.View, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 9,
                        },
                        children: (0, S.tZ)(p.View, {
                          style: { width: "100%" },
                          children:
                            null == d ||
                            null === (s = d.discountInfo) ||
                            void 0 === s
                              ? void 0
                              : s.map(function (e, t) {
                                  return (0,
                                  S.BX)(p.View, { className: " _i _Ga _l _Ua", children: [(0, S.tZ)(p.View, { className: " _rp _i _Ga _l _Sj _Qf", children: !(null == d || !d.priceDiff) && 0 === t && (0, S.BX)(p.View, { className: " _i _Xn _l", children: [(0, S.tZ)(p.View, { className: " _nc _yl _Cl _S _Eb _Rw", children: (0, S.tZ)(p.Text, { className: " _Ze _Cl _S", children: "比其他平台低¥".concat(d.priceDiff) }) }), (0, S.tZ)(p.Image, { src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_bjbq@3x.png", className: " _tf _nc" })] }) }), (0, S.BX)(p.View, { className: " _i _nl _l", children: [(0, S.tZ)(p.View, { className: " _xl _gb _Hi _ji _b _af _i _Ga _n _l _Va", children: "惠" }), !!e.ticketType && (0, S.tZ)(p.View, { className: " _sb _Na", children: e.ticketType }), (0, S.BX)(p.View, { className: " _oo _i _l _Sj", children: [!!e.discountDesc && (0, S.tZ)(p.View, { className: " _gb _yl _ji _Al _P _Bl _Qw _Va", children: e.discountDesc }), !!e.listPrice && (0, S.tZ)(p.View, { className: " _Kc _mk _zl", style: Z.Z.isCRN ? { textDecorationLine: "line-through", textDecorationColor: "#999999" } : {}, children: "¥".concat(R(e.listPrice)) }), (0, S.tZ)(p.View, { className: " _Ze _pc _Wh", children: "¥".concat(R(e.price)) })] })] })] }, t);
                                }),
                        }),
                      }),
                  ],
                }),
              });
            },
            P = (0, d.memo)(function (e) {
              var t = e.title,
                i = void 0 === t ? "未找到符合条件的结果哦～" : t,
                n = e.style,
                o = void 0 === n ? {} : n;
              return (0,
              S.BX)(p.View, { className: " _a _er _Oa _i _k _l _n _lv", style: o, children: [(0, S.tZ)(p.Image, { className: " _mv _nv", src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/cpp@3x.png" }), (0, S.tZ)(p.Text, { className: " _oc _G", children: i })] });
            }),
            F = i(3205),
            A = i(13025),
            E = i(27113),
            G =
              (i(79910),
              (function () {
                function e(t) {
                  (0, l.Z)(this, e), (this.key = t);
                }
                return (
                  (0, c.Z)(
                    e,
                    [
                      {
                        key: "set",
                        value: function (e) {
                          if (null == e)
                            return m().setStorageSync(this.key, "");
                          m().setStorageSync(this.key, e);
                        },
                      },
                      {
                        key: "get",
                        value: function () {
                          return m().getStorageSync(this.key);
                        },
                      },
                      {
                        key: "setAttr",
                        value: function (e, t) {
                          var i = this.get() || {};
                          (i[e] = t), this.set(i);
                        },
                      },
                      {
                        key: "getAttr",
                        value: function (e) {
                          return this.get()[e];
                        },
                      },
                      {
                        key: "removeAttr",
                        value: function (e) {
                          m().removeStorageSync(e);
                        },
                      },
                    ],
                    [
                      {
                        key: "getInstance",
                        value: function (t) {
                          return new e(t);
                        },
                      },
                    ]
                  ),
                  e
                );
              })()),
            X =
              (G.getInstance("HOME_DEFAULT_ALERT_STORE"),
              G.getInstance("CITY_CURRENT_STORE")),
            j = G.getInstance("CITY_LIST_STORE");
          function M(e) {
            var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : function () {};
            (0, E.PA)(
              function (n) {
                console.log("location res===", n),
                  t
                    ? null != n && n.lat && null != n && n.lng
                      ? e.setState(
                          {
                            currentCityInfo: {
                              cityID: null == n ? void 0 : n.cityId,
                              cityName: null == n ? void 0 : n.cityName,
                            },
                            locateCityInfo: {
                              cityID: null == n ? void 0 : n.cityId,
                              cityName: null == n ? void 0 : n.cityName,
                              latitude: null == n ? void 0 : n.lat,
                              longitude: null == n ? void 0 : n.lng,
                            },
                          },
                          function () {
                            e.initLoad(1);
                          }
                        )
                      : e.initLoad(1)
                    : e.setState(
                        {
                          locateCityInfo: {
                            cityID: (null == n ? void 0 : n.cityId) || 2,
                            cityName:
                              (null == n ? void 0 : n.cityName) || "上海",
                            latitude: null == n ? void 0 : n.lat,
                            longitude: null == n ? void 0 : n.lng,
                          },
                        },
                        function () {
                          null == i || i();
                        }
                      );
              },
              function () {
                return null == i ? void 0 : i();
              }
            );
          }
          G.getInstance("IS_CHANGE_CITY"),
            G.getInstance("SEARCH_HISTORY_STORE"),
            G.getInstance("HOME_HISTORY_STORE"),
            G.getInstance("BOOK_HANDTIP_STORE"),
            G.getInstance("FAIL_TICKETING_STORE");
          var O,
            z = i(980),
            H = [
              { sortType: "D", sortDirection: "", text: "智能排序" },
              { sortType: "V", sortDirection: "D", text: "销量最高" },
            ],
            q = [{ text: "可订今日", filterType: "canNowUse" }],
            Y = i(45090),
            K = Z.Z.isTieyou ? "kaPERwyFHgd" : "uBVystwQ1V6",
            U =
              ("ios" === v.Z.OS ? v.Z.safeAreaTop : v.Z.safeAreaTop || 0) +
              ("ios" === v.Z.OS ? 44 : 50),
            Q = v.Z.statusBarHeight + 44 + 50,
            W = {
              pageIndex: 1,
              isLoadingNext: !1,
              labelStatisticShowList: [],
              filterList: [{ key: "", value: "" }],
              sortParameter: { sortType: "D", sortDirection: "" },
              canNowUse: !1,
              showStaticSearchFilter: !1,
              rankList: [],
              entryList: [],
              isShowFilterPop: !1,
              optionListType: "",
              source: "",
              couponInfo: null,
              filterBarTop: 170,
              isStaticSearchBar: !1,
            },
            J =
              (0, h.h)(!1, { usePageWrapper: !Z.Z.isCRN })(
                (O = (function (e) {
                  (0, s.Z)(i, e);
                  var t = (0, u.Z)(i);
                  function i(e) {
                    var n;
                    (0, l.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, _.Z)(
                        (0, r.Z)(n),
                        "componentWillUnmount",
                        function () {}
                      ),
                      (0, _.Z)((0, r.Z)(n), "pageContentIsFullScreen", !0),
                      (0, _.Z)((0, r.Z)(n), "pageRootClassName", "ticket-home"),
                      (0, _.Z)((0, r.Z)(n), "pageTitle", "搜索结果"),
                      (0, _.Z)((0, r.Z)(n), "disableBgStyle", !0),
                      (0, _.Z)((0, r.Z)(n), "getCityList", function () {
                        (j.get() || {}).cityMainList ||
                          (0, L.Iq)({ overseasCityFlag: 0 })
                            .then(function (e) {
                              if (1 === (null == e ? void 0 : e.resultCode)) {
                                var t = e.domesticCity,
                                  i = t.cities;
                                i.forEach(function (e) {
                                  n.dealCityItem(e.cities);
                                });
                                var o = t.recommendcities;
                                n.dealCityItem(o), j.setAttr("hotCities", o);
                                var a = i.map(function () {
                                  return "firstchar";
                                });
                                j.setAttr("cityTags", a);
                                var l = {};
                                i.forEach(function (e) {
                                  l[e.firstchar] = e.cities;
                                }),
                                  j.setAttr("cityMainList", l);
                              }
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                      }),
                      (0, _.Z)((0, r.Z)(n), "dealCityItem", function (e) {
                        e.forEach(function (e) {
                          (e.cityName = e.name),
                            (e.cityID = e.id),
                            delete e.name,
                            delete e.id;
                        });
                      }),
                      (0, _.Z)((0, r.Z)(n), "selectCity", function () {
                        var e = n.state.currentCityInfo;
                        Z.Z.isCRN &&
                          n.ubtTrace("SZAHome_City_click", {
                            PageId: n.pageId,
                          }),
                          (function (e, t) {
                            var i = {
                              inlandCities: j.get() || {},
                              interCities: {},
                            };
                            console.log("citydata===", i),
                              F.Z.city(
                                {
                                  title: "目的地列表",
                                  bu: "ticket",
                                  handleSearch: function (e, t, i) {
                                    var n = [];
                                    (0, L.Z$)({
                                      keyword: e,
                                      overseasCityFlag: 0,
                                    }).then(function (e) {
                                      1 === e.resultCode &&
                                        ((n = e.cities).forEach(function (e) {
                                          (e.cityName = e.name),
                                            (e.cityID = e.id),
                                            delete e.name,
                                            delete e.id;
                                        }),
                                        i(n));
                                    });
                                  },
                                  loadData: function (e) {
                                    e(i);
                                  },
                                  handleCurrentPosition: function (e, t) {
                                    var i = {
                                      Latitude: e.latitude,
                                      Longitude: e.longitude,
                                      Language: "CN",
                                    };
                                    (0, A.T_)(i)
                                      .then(function (e) {
                                        console.log(e),
                                          t({
                                            cityName:
                                              e.CityEntities[0].CityName,
                                            cityID: e.DistrictId,
                                            countryName: e.CountryName,
                                          });
                                      })
                                      .catch(function () {});
                                  },
                                },
                                function (e) {
                                  console.log("选中的城市", e);
                                  var i = {
                                    cityID: e.cityID,
                                    cityName: e.cityName,
                                  };
                                  X.set(i), t(i);
                                  var n = j.getAttr("historyCities") || [];
                                  if (0 == n.length) n.push(e);
                                  else {
                                    for (
                                      var o = Object.assign({}, e), a = 0;
                                      a < n.length;
                                      a++
                                    )
                                      if (
                                        Number(e.cityID) ===
                                          Number(n[a].cityID) &&
                                        e.cityName === n[a].cityName
                                      ) {
                                        n.splice(a, 1);
                                        break;
                                      }
                                    n.unshift(o), (n = n.slice(0, 4));
                                  }
                                  j.setAttr("historyCities", n);
                                }
                              );
                          })((e.cityID, e.cityName), function (e) {
                            n.upDateCity(e);
                          });
                      }),
                      (0, _.Z)((0, r.Z)(n), "upDateCity", function (e) {
                        m().setStorageSync("TICKET_SELECT_CITY", e);
                        var t = n.state,
                          i = t.locateCityInfo,
                          o = t.initLoading,
                          l = function () {
                            (n.sceneLabel = ""),
                              (n.sortLabel = ""),
                              (n.filterLabel = ""),
                              n.setState(
                                (0, a.Z)(
                                  (0, a.Z)({}, W),
                                  {},
                                  {
                                    currentCityInfo: e,
                                    initLoading: !Z.Z.isCRN || o,
                                  }
                                ),
                                function () {
                                  n.initLoad(1);
                                }
                              );
                          },
                          c =
                            m().getStorageSync("TICKET_ASK_CHANGE_CITY") || !1;
                        (null == i ? void 0 : i.cityName) === e.cityName || c
                          ? l()
                          : (m().setStorageSync("TICKET_ASK_CHANGE_CITY", !0),
                            (0, y.v)(
                              "温馨提示",
                              "是否切换城市",
                              { text: "取消", callback: function () {} },
                              {
                                text: "确定",
                                callback: function () {
                                  l();
                                },
                              }
                            ));
                      }),
                      (0, _.Z)((0, r.Z)(n), "onSearch", function () {
                        var e = n.state,
                          t = e.currentCityInfo,
                          i = e.source,
                          o = e.initLoading;
                        Z.Z.isCRN &&
                          n.ubtTrace("SZAHome_SearchBox_click", {
                            PageId: n.pageId,
                          }),
                          n.navigateTo({
                            url: "/pages/taroCRN/ticket/pages/search/index",
                            data: {
                              cityID: (null == t ? void 0 : t.cityID) || 2,
                              cityName:
                                (null == t ? void 0 : t.cityName) || "上海",
                              source: i,
                              fromPage: "searchList",
                            },
                            callback: function (e) {
                              var t = e.cityID,
                                i = e.cityName,
                                l = e.keyword;
                              (n.sceneLabel = ""),
                                (n.sortLabel = ""),
                                (n.filterLabel = ""),
                                n.setState(
                                  (0, a.Z)(
                                    (0, a.Z)({}, W),
                                    {},
                                    {
                                      keyword: l,
                                      initLoading: !Z.Z.isCRN || o,
                                      currentCityInfo: {
                                        cityID: t,
                                        cityName: i,
                                      },
                                    }
                                  ),
                                  function () {
                                    n.initLoad(1);
                                  }
                                );
                            },
                          });
                      }),
                      (0, _.Z)((0, r.Z)(n), "onFilterItem", function (e, t) {
                        switch ((n.onCloseFilterPop(), t)) {
                          case "all":
                            n.filterAll(e);
                            break;
                          case "sort":
                            n.filterSort(e);
                            break;
                          case "filter":
                            n.otherFilter(e);
                        }
                      }),
                      (0, _.Z)((0, r.Z)(n), "filterAll", function (e) {
                        (n.sceneLabel = e.text),
                          n.setState(
                            {
                              filterList: [
                                { key: e.value ? "1007" : "", value: e.value },
                              ],
                              scrollIntoView: "spot_item_0",
                            },
                            function () {
                              n.filterGetSearchScenicSpotList();
                            }
                          );
                      }),
                      (0, _.Z)((0, r.Z)(n), "filterSort", function (e) {
                        var t = e.sortType,
                          i = e.sortDirection,
                          o = e.text;
                        (n.sortLabel = o),
                          n.setState(
                            {
                              sortParameter: {
                                sortType: t || "D",
                                sortDirection: i || "",
                              },
                              scrollIntoView: "spot_item_0",
                            },
                            function () {
                              n.filterGetSearchScenicSpotList();
                            }
                          );
                      }),
                      (0, _.Z)((0, r.Z)(n), "otherFilter", function (e) {
                        var t = n.state.canNowUse;
                        (n.filterLabel = t ? "" : e.text),
                          "canNowUse" === e.filterType &&
                            n.setState(
                              { canNowUse: !t, scrollIntoView: "spot_item_0" },
                              function () {
                                n.filterGetSearchScenicSpotList();
                              }
                            );
                      }),
                      (0, _.Z)(
                        (0, r.Z)(n),
                        "filterGetSearchScenicSpotList",
                        function () {
                          (0, g.Q)("加载中..."),
                            n
                              .getSearchScenicSpotList(1)
                              .then(function (e) {
                                (0, g.Z)(), n.handleScenicSpotRes(e, 1);
                              })
                              .catch(function (e) {
                                return console.log(e);
                              });
                        }
                      ),
                      (0, _.Z)((0, r.Z)(n), "onFilterBar", function (e) {
                        var t = n.state,
                          i = t.isShowFilterPop;
                        e === t.optionListType
                          ? n.setState({ isShowFilterPop: !i })
                          : n.setState({
                              isShowFilterPop: !0,
                              optionListType: e,
                            });
                      }),
                      (0, _.Z)((0, r.Z)(n), "onCloseFilterPop", function () {
                        n.setState({ isShowFilterPop: !1, optionListType: "" });
                      }),
                      (0, _.Z)(
                        (0, r.Z)(n),
                        "handleFilterBarProps",
                        function () {
                          var e = n.state,
                            t = e.filterList,
                            i = e.optionListType,
                            o = e.isShowFilterPop;
                          return {
                            onFilterBar: function (e) {
                              return n.onFilterBar(e);
                            },
                            sortParameter: e.sortParameter,
                            filterList: t,
                            optionListType: i,
                            sortLabel: n.sortLabel,
                            sceneLabel: n.sceneLabel,
                            filterLabel: n.filterLabel,
                            isShowFilterPop: o,
                          };
                        }
                      ),
                      (0, _.Z)(
                        (0, r.Z)(n),
                        "renderCrnHeaderRight",
                        function () {
                          var e,
                            t = n.state.couponInfo;
                          return null != t &&
                            null !== (e = t.couponList) &&
                            void 0 !== e &&
                            e.length
                            ? (0, S.tZ)(p.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_hbdx@3x.gif",
                                className: " _he _yf",
                                id: "AMCv",
                                onClick: function () {
                                  n.ubtTrace("SZAHome_Coupon_Get_click", {
                                    PageId: n.pageId,
                                  }),
                                    n.setState({
                                      couponInfo: (0, a.Z)(
                                        (0, a.Z)({}, t),
                                        {},
                                        { isShowPop: !0 }
                                      ),
                                    });
                                },
                              })
                            : (0, S.tZ)(p.View, {});
                        }
                      ),
                      (0, _.Z)((0, r.Z)(n), "jumpToDetail", function (e) {
                        var t, i;
                        Z.Z.isCRN
                          ? (0, z.l4)({
                              data: {
                                scenicSpotId: null == e ? void 0 : e.iD,
                                source: n.state.source,
                                CityName:
                                  (null === (t = n.state.currentCityInfo) ||
                                  void 0 === t
                                    ? void 0
                                    : t.cityName) || "",
                                ProductId: (null == e ? void 0 : e.iD) || "",
                                TypeSndAttr:
                                  (null == e ? void 0 : e.name) || "",
                              },
                            })
                          : (0, z.l4)({
                              data: {
                                scenicSpotId: null == e ? void 0 : e.iD,
                                source: n.state.source,
                                CityName:
                                  (null === (i = n.state.currentCityInfo) ||
                                  void 0 === i
                                    ? void 0
                                    : i.cityName) || "",
                                ProductId: (null == e ? void 0 : e.iD) || "",
                                TypeSndAttr:
                                  (null == e ? void 0 : e.name) || "",
                              },
                            });
                      }),
                      (0, _.Z)((0, r.Z)(n), "receiveCouponCb", function () {
                        n.initLoad(1);
                      }),
                      (0, _.Z)((0, r.Z)(n), "getOptionList", function (e) {
                        var t = e.optionListType,
                          i = [];
                        return (
                          "all" === t
                            ? (i = n.state.labelStatisticShowList)
                            : "sort" === t
                            ? (i = H)
                            : "filter" === t && (i = q),
                          i
                        );
                      }),
                      (0, _.Z)((0, r.Z)(n), "renderItem", function (e) {
                        var t = e.item,
                          i = e.index,
                          o = e.filterBarProps,
                          a = e.scenicSpotList;
                        return (0,
                        S.BX)(S.HY, { children: [(0, S.tZ)(D, { isFirst: 0 === i, isLast: i === a.length - 1, data: t, onFilterBar: n.onQuickFilterBar, filterBarProps: o, onItem: n.jumpToDetail, index: i }), i === a.length - 1 && (0, S.tZ)(p.View, { className: " _yb _Z" })] });
                      });
                    var o = Z.Z.isCRN
                      ? [
                          { isTitle: !0, isFilter: !1, titleAndFilterArr: !0 },
                          { isFilter: !0, isTitle: !1, titleAndFilterArr: !0 },
                        ]
                      : [];
                    return (
                      (n.state = (0, a.Z)(
                        (0, a.Z)({}, W),
                        {},
                        {
                          currentCityInfo: { cityName: "上海", cityID: 2 },
                          locateCityInfo: { cityName: "上海", cityID: 2 },
                          keyword: "",
                          initLoading: !0,
                          scenicSpotList: [].concat(o),
                        }
                      )),
                      (n.sceneLabel = ""),
                      (n.sortLabel = ""),
                      (n.filterLabel = ""),
                      n
                    );
                  }
                  return (
                    (0, c.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            t = this,
                            i = (0, f.getCurrentInstance)(),
                            n =
                              (null == i ||
                              null === (e = i.router) ||
                              void 0 === e
                                ? void 0
                                : e.params) || {},
                            o = n.cityId,
                            l = n.cityID,
                            c = n.cityName,
                            r = n.source,
                            s =
                              void 0 === r ? (Z.Z.isCRN ? "app" : "wechat") : r,
                            u = n.keyword,
                            _ = void 0 === u ? "" : u,
                            d = m().getStorageSync("TICKET_SELECT_CITY"),
                            p = { source: s, keyword: _ };
                          (o || l) && c
                            ? M(this, !1, function () {
                                t.setState(
                                  (0, a.Z)(
                                    (0, a.Z)({}, p),
                                    {},
                                    {
                                      currentCityInfo: {
                                        cityID: l || o,
                                        cityName: c,
                                      },
                                    }
                                  ),
                                  function () {
                                    return t.initLoad(1);
                                  }
                                );
                              })
                            : d
                            ? M(this, !1, function () {
                                t.setState(
                                  (0, a.Z)(
                                    (0, a.Z)({}, p),
                                    {},
                                    { currentCityInfo: d }
                                  ),
                                  function () {
                                    return t.initLoad(1);
                                  }
                                );
                              })
                            : (this.setState((0, a.Z)({}, p)),
                              M(this, !0, function () {
                                t.initLoad(1);
                              })),
                            this.getCityList();
                        },
                      },
                      {
                        key: "initLoad",
                        value: function (e) {
                          var t = this;
                          (0, g.Q)("加载中..."),
                            this.getSearchScenicSpotList(e)
                              .then(function (e) {
                                t.handleScenicSpotRes(e, 1);
                              })
                              .catch(function () {
                                (0, g.Z)();
                              });
                        },
                      },
                      {
                        key: "requestNextPage",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.pageIndex,
                            n = t.canRequestNextPage,
                            o = t.isLoadingNext;
                          n &&
                            !o &&
                            (this.setState({ isLoadingNext: !0 }),
                            (0, g.Q)("加载中..."),
                            this.getSearchScenicSpotList(i + 1)
                              .then(function (t) {
                                (0, g.Z)(), e.handleScenicSpotRes(t, i + 1);
                              })
                              .catch(function (e) {
                                return console.log(e);
                              }));
                        },
                      },
                      {
                        key: "handleScenicSpotRes",
                        value: function (e, t) {
                          var i = this.state.scenicSpotList;
                          if (1 === (null == e ? void 0 : e.resultCode)) {
                            var n =
                              (null == e ? void 0 : e.scenicSpotList) || [];
                            n.length < 20 &&
                              !Z.Z.isCRN &&
                              (n = n.concat(
                                new Array(20 - n.length).fill(null)
                              ));
                            var a;
                            (a = 1 === t ? n : i.concat(n)),
                              this.setState({
                                scenicSpotList: a,
                                pageIndex: t,
                                canRequestNextPage: t < (e.pagingCount || 1),
                                isLoadingNext: !1,
                                labelStatisticShowList:
                                  (null == e
                                    ? void 0
                                    : e.labelStatisticShowList) || [],
                                initLoading: !1,
                              });
                          } else
                            this.setState({
                              scenicSpotList: (0, o.Z)(i),
                              pageIndex: t,
                              canRequestNextPage: !1,
                              isLoadingNext: !1,
                              initLoading: !1,
                            });
                          (0, g.Z)();
                        },
                      },
                      {
                        key: "getSearchScenicSpotList",
                        value: function (e) {
                          var t = this.state,
                            i = t.locateCityInfo,
                            n = t.currentCityInfo,
                            o = t.filterList,
                            a = t.sortParameter,
                            l = t.canNowUse,
                            c = t.keyword,
                            r = t.source,
                            s = c
                              ? []
                              : [
                                  {
                                    key: "8",
                                    value: (null == n ? void 0 : n.cityID) + "",
                                  },
                                ],
                            u = {
                              searchParameter: {
                                canNowUse: l ? 1 : 0,
                                keyword: c,
                                longitude: null == i ? void 0 : i.longitude,
                                latitude: null == i ? void 0 : i.latitude,
                              },
                              filterList: [].concat(o, s),
                              sortParameter: a,
                              pagingParameter: { pageIndex: e, pageSize: 20 },
                              responseDataType: 2,
                              imageSizeKey: "C_192_192",
                              sceneID: K,
                              source: r,
                            };
                          return (0, L.Ki)(u);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.scenicSpotList,
                            n = t.pageIndex,
                            o = t.scrollIntoView,
                            l = t.initLoading,
                            c = t.currentCityInfo,
                            r = t.keyword,
                            s = this.handleFilterBarProps(),
                            u =
                              null == i
                                ? void 0
                                : i.filter(function (e) {
                                    return !(
                                      !e ||
                                      (null != e && e.titleAndFilterArr)
                                    );
                                  }),
                            _ = this.getOptionList(s);
                          return (0, S.BX)(p.View, {
                            className: Z.Z.isCRN ? " _j _Mr" : " _Y _Z _p",
                            children: [
                              Z.Z.isCRN &&
                                (0, S.tZ)(N.Z, {
                                  zIndex: 0,
                                  v2: !0,
                                  needHolder: !0,
                                  title: "",
                                  pop: function () {
                                    e.navigateBack();
                                  },
                                  defaultBackButtonColor: "#fff",
                                  renderCenterView: function () {
                                    return (0, S.BX)(p.View, {
                                      style: {
                                        display: "flex",
                                        flexDirection: "row",
                                      },
                                      children: [
                                        (0, S.tZ)(p.View, {
                                          style: {
                                            width: 50,
                                            height: 44,
                                            alignItems: "center",
                                            justifyContent: "center",
                                          },
                                          id: "AMCw",
                                          onClick: function () {
                                            e.navigateBack();
                                          },
                                          children: (0, S.tZ)(p.Text, {
                                            style: {
                                              fontFamily: "crn_font_rn_mini",
                                              color: "black",
                                              fontSize: 24,
                                              marginLeft: 10,
                                            },
                                            children: "󰲚",
                                          }),
                                        }),
                                        (0, S.tZ)(p.View, {
                                          style: { flex: 1 },
                                          children: (0, S.tZ)(V, {
                                            cityName:
                                              null == c ? void 0 : c.cityName,
                                            selectCity: e.selectCity,
                                            onSearch: e.onSearch,
                                            keyword: r,
                                          }),
                                        }),
                                      ],
                                    });
                                  },
                                  backgroundColor: "#fff",
                                  renderRightView: function () {
                                    return (0, S.tZ)(p.View, {});
                                  },
                                  rightViewWidth: 0,
                                  leftViewWidth: 0,
                                }),
                              !Z.Z.isCRN &&
                                (0, S.tZ)(V, {
                                  cityName: null == c ? void 0 : c.cityName,
                                  selectCity: this.selectCity,
                                  onSearch: this.onSearch,
                                  keyword: r,
                                }),
                              (0, S.tZ)(
                                C,
                                (0, a.Z)(
                                  (0, a.Z)({}, s),
                                  {},
                                  {
                                    onFilterBar: this.onFilterBar,
                                    onFilterItem: this.onFilterItem,
                                    onCloseFilterPop: this.onCloseFilterPop,
                                    pageId: this.pageId,
                                    ubtTrace: this.ubtTrace,
                                    labelStatisticShowList:
                                      this.state.labelStatisticShowList,
                                  }
                                )
                              ),
                              this.state.isShowFilterPop &&
                                (0, S.BX)(p.View, {
                                  style: {
                                    position: "absolute",
                                    top: Z.Z.isCRN ? Q : 94,
                                    left: 0,
                                    width: "100%",
                                    zIndex: 999,
                                    backgroundColor: "rgba(0,0,0,0.6)",
                                  },
                                  id: "AMCx",
                                  onClick: function () {
                                    return e.onCloseFilterPop(!1);
                                  },
                                  children: [
                                    (0, S.tZ)(
                                      I,
                                      (0, a.Z)(
                                        (0, a.Z)({ optionList: _ }, s),
                                        {},
                                        {
                                          onFilterItem: function (t) {
                                            e.onFilterItem(t, s.optionListType);
                                          },
                                          canNowUse: this.canNowUse,
                                          ubtTrace: this.ubtTrace,
                                          pageId: this.pageId,
                                        }
                                      )
                                    ),
                                    (0, S.tZ)(p.View, {
                                      underlayColor: "tansparent",
                                      id: "AMCy",
                                      onClick: function () {
                                        return e.onCloseFilterPop(!1);
                                      },
                                      style: {
                                        width: "100%",
                                        height: Y.Ro.windowHeight - U - 325,
                                      },
                                      children: (0, S.tZ)(p.View, {}),
                                    }),
                                  ],
                                }),
                              (null == u ? void 0 : u.length) > 0 &&
                                (0, S.tZ)(T, {
                                  onRenderHeader: function () {
                                    return (0, S.tZ)(S.HY, {});
                                  },
                                  pageNum: n,
                                  pageSize: 20,
                                  list: i,
                                  scrollIntoView: o,
                                  filterBarTop: this.state.filterBarTop,
                                  onRenderItem: function (t, n) {
                                    return e.renderItem({
                                      item: t,
                                      index: n,
                                      filterBarProps: s,
                                      scenicSpotList: i,
                                    });
                                  },
                                  onRequestNextPage: function () {
                                    e.requestNextPage();
                                  },
                                }),
                              !l &&
                                !(null != u && u.length) &&
                                (0, S.tZ)(P, { style: { height: 240 } }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(d.Component))
              ) || O;
          Page(
            (0, n.createPageConfig)(
              J,
              "pages/taroCRN/ticket/pages/searchList/searchList",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "搜索结果",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#ffffff",
                backgroundColor: "#ffffff",
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
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(66388);
          }
        ),
          e.O();
      },
    ]);
})();
