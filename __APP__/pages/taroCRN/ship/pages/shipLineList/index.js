!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/6deb9d1305c2b84d9103247c2ddc9f3d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [7620],
      {
        31287: function (n, t, e) {
          var i = e(32180),
            o = e(57042),
            a = e(24460),
            r = e(81876),
            l = e(21867),
            s = e(86066),
            c = e(52500),
            u = e(71515),
            d = e(92954),
            f = e.n(d),
            _ = e(65573),
            h = e(87298),
            m = e(78995),
            p = e(22276),
            v = e(298),
            g = e(19972),
            Z = e(21961),
            y = e(45023),
            b = {
              state: {
                shipLines: [],
                boatLines: [],
                regionList: [],
                boatRegionList: [],
                shipLineGroupData: {},
                boatGroupData: {},
                shipLineList: [],
                boatLineList: [],
                selectedTab: "shipLine",
                searchWord: "",
                resultList: {},
                allGroupData: {},
                allBoatGroupData: {},
              },
              reducers: {
                setTitle: function (n, t) {},
                set: function (n, t) {
                  return (0, v.Z)((0, v.Z)({}, n), t);
                },
              },
            },
            N = (function (n) {
              (0, l.Z)(e, n);
              var t = (0, s.Z)(e);
              function e() {
                return (0, o.Z)(this, e), t.apply(this, arguments);
              }
              return (0, a.Z)(e);
            })(e(69410).Z);
          function w(n) {
            var t = {};
            return (
              n.forEach(function (n) {
                var e,
                  i,
                  o,
                  a =
                    null == n ||
                    null === (e = n.fromCityInfo) ||
                    void 0 === e ||
                    null === (i = e.stationShortPinyin) ||
                    void 0 === i ||
                    null === (o = i[0]) ||
                    void 0 === o
                      ? void 0
                      : o.toUpperCase();
                t[a] ? t[a].push(n) : (t[a] = [n]);
              }),
              t
            );
          }
          function k(n, t) {
            return (
              n.sort(function (n, e) {
                var i = t(n) || "",
                  o = t(e) || "";
                return i < o ? -1 : i > o ? 1 : 0;
              }),
              n
            );
          }
          function L(n) {
            k(n, function (n) {
              return n.fromCityInfo.stationShortPinyin;
            });
            var t = {};
            n.forEach(function (n) {
              var e = null == n ? void 0 : n.region;
              e && (t[e] ? t[e].push(n) : (t[e] = [n]));
            });
            var e = Object.keys(t);
            return (
              null == e ||
                e.forEach(function (n) {
                  var e = w(t[n]);
                  t[n] = e;
                }),
              t
            );
          }
          function C(n) {
            return (
              k(n, function (n) {
                return n.fromCityInfo.stationShortPinyin;
              }),
              w(n)
            );
          }
          function V(n, t) {
            var e = { s: -1, e: -1 };
            try {
              (e.s = t.indexOf(n)), e.s > -1 && (e.e = e.s + n.length - 1);
            } catch (n) {}
            return e;
          }
          function I(n, t) {
            if (n && n.length && t && t.length)
              for (var e = 0; e < t.length; e++) {
                var i = t[e],
                  o = { key: n, stationName: i.stationName },
                  a = V(n, i.stationName);
                if (a.s > -1) return (0, v.Z)((0, v.Z)({}, o), a);
                if ((a = V(n, i.stationShortPinyin)).s > -1)
                  return (0, v.Z)((0, v.Z)({}, o), a);
                if (i.stationPinyin === n)
                  return (0, v.Z)(
                    (0, v.Z)({}, o),
                    {},
                    { s: 0, e: i.stationName.length - 1 }
                  );
              }
            return null;
          }
          function S(n, t) {
            for (
              var e = ["fromCityInfo", "toCityInfo"], i = 0;
              i < e.length;
              i++
            ) {
              var o = e[i],
                a = V(n, t[o].stationName);
              if (a.s > -1) return (t.mapNode = o), (t.mapIndex = a), t;
              if ((a = V(n, t[o].stationShortPinyin)).s > -1)
                return (t.mapNode = o), (t.mapIndex = a), t;
              if (n == t[o].stationPinyin)
                return (
                  (t.mapNode = o),
                  (t.mapIndex = { s: 0, e: t[o].stationName.length - 1 }),
                  t
                );
              (t.mapNode = ""), (t.mapIndex = a);
            }
            (t.hasFromStationInfo = null), (t.hasToStationInfo = null);
            var r = I(n, t.fromCityInfo.stationInfo);
            if (r) return (t.hasFromStationInfo = r), t;
            if ((r = I(n, t.toCityInfo.stationInfo)))
              return (t.hasToStationInfo = r), t;
            try {
              var l,
                s = new RegExp("(" + n + "|\\|" + n + ")", "i");
              if (
                null === (l = t.cityMapInfo) || void 0 === l
                  ? void 0
                  : l.find(function (n) {
                      return s.test(n);
                    })
              )
                return t;
            } catch (n) {}
            return null;
          }
          function j(n, t) {
            var e =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              i = null == n ? void 0 : n.toLowerCase(),
              o = [],
              a = [],
              r = [],
              l = Object.keys(t);
            null == l ||
              l.forEach(function (l) {
                t[l].forEach(function (t) {
                  var l = S(i, t),
                    s = null == l ? void 0 : l.mapNode;
                  if (l) {
                    var c = (e && l.displayName) || l.toCityInfo.stationName,
                      u = ""
                        .concat(l.fromCityInfo.stationName, "-")
                        .concat(c)
                        .replace(
                          n,
                          '<span style="color:#198CFF">'.concat(n, "</span>")
                        );
                    (l.fromToStr = u),
                      "fromCityInfo" == s
                        ? o.push(l)
                        : "toCityInfo" == s
                        ? a.push(l)
                        : r.push(l);
                  }
                });
              });
            var s = [].concat(o, a, r);
            return s;
          }
          function D(n) {
            var t,
              e,
              i,
              o =
                null == n ||
                null === (t = n.detail) ||
                void 0 === t ||
                null === (e = t.value) ||
                void 0 === e
                  ? void 0
                  : e.trim(),
              a = j(o, N.getState().pageModel.allGroupData, !0),
              r = j(o, N.getState().pageModel.allBoatGroupData, !1),
              l = {};
            null != a && a.length && (l["船票"] = a),
              null != r && r.length && (l["游船"] = r),
              null === (i = N.getDispatch()) ||
                void 0 === i ||
                i.pageModel.set({ searchWord: o, resultList: l });
          }
          function G() {
            var n;
            null === (n = N.getDispatch()) ||
              void 0 === n ||
              n.pageModel.set({ searchWord: "", resultList: {} });
          }
          (0, y.Z)(N, "store", { models: { pageModel: b } });
          var B,
            W = function (n) {
              if (n) {
                var t = {
                  from: n.fromCityInfo.stationName,
                  to: n.toCityInfo.stationName,
                };
                N.getPage().invokeCallback(t), N.getPage().navigateBack();
              }
            },
            M = e(94262),
            T = e(53550),
            O = e(48813),
            R = (0, _.$j)(
              function (n) {
                return { searchWord: n.pageModel.searchWord };
              },
              function (n) {
                return (0, M.Z)(n), {};
              }
            )(function (n) {
              var t = n.searchWord;
              return (0,
              O.tZ)(u.View, { className: " _a _Ms", children: (0, O.BX)(u.View, { className: " _Gc _Vb _Ns _i _l _Os", children: [(0, O.tZ)(u.Input, { className: " _j _sb _os", placeholderClass: " _we _H", placeholder: "城市/港口/航线", onInput: D, value: t }), (0, O.tZ)(T.Z, { className: " _Bd _Ps", onClick: G, children: "󰳭" })] }) });
            }),
            Y = e(90129),
            x = e(94924),
            P = (0, _.$j)(
              function (n) {
                return { resultList: n.pageModel.resultList };
              },
              function (n) {
                return (0, M.Z)(n), {};
              }
            )(function (n) {
              var t,
                e = n.resultList;
              return null !== (t = Object.keys(e)) && void 0 !== t && t.length
                ? (0, O.tZ)(O.HY, {
                    children: Object.keys(e).map(function (n, t) {
                      var i;
                      return (0, O.BX)(
                        u.View,
                        {
                          className: " _i _Ga",
                          children: [
                            (0, O.tZ)(u.View, {
                              className: " _at _Sm _i _Ga _l",
                              children: (0, O.tZ)(u.View, {
                                className: " _nc _yl _vi _mn _ve _Ze _Cl _S",
                                children: n,
                              }),
                            }),
                            (0, O.tZ)(u.View, {
                              className: " _j _Io",
                              children:
                                null == e || null === (i = e[n]) || void 0 === i
                                  ? void 0
                                  : i.map(function (n, t) {
                                      return (0, O.tZ)(
                                        u.View,
                                        {
                                          className: " _Sm _bt",
                                          onClick: function () {
                                            return W(n);
                                          },
                                          children: (0, O.tZ)(
                                            x.Z,
                                            {
                                              className: " _ct _dt",
                                              nodes: n.fromToStr,
                                            },
                                            t
                                          ),
                                        },
                                        t
                                      );
                                    }),
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  })
                : (0, O.tZ)(u.View, {
                    className: " _Ma _G _o _lf",
                    children: "无搜索结果，请尝试修改后重试",
                  });
            }),
            X = [
              { name: "国内·港澳台", type: "shipLine" },
              { name: "游船", type: "boat" },
            ],
            E = c.default.memo(function (n) {
              var t = n.selectedTab;
              return (0, O.tZ)(u.View, {
                className: " _Sm _a _i _Ga _l",
                children: X.map(function (n, e) {
                  return (0, O.BX)(
                    u.View,
                    {
                      className: " _Db _sb _Ec _i _n _l _p _Y",
                      onClick: function () {
                        return (function (n) {
                          var t;
                          null === (t = N.getDispatch()) ||
                            void 0 === t ||
                            t.pageModel.set({ selectedTab: n });
                        })(n.type);
                      },
                      style:
                        t === n.type ? "color: #198cff;font-weight: 600" : "'",
                      children: [
                        (0, O.tZ)(u.Text, { children: n.name }),
                        t === n.type &&
                          (0, O.tZ)(u.View, {
                            className: " _ms _Ia _Ys _Zs _u _r",
                          }),
                      ],
                    },
                    e
                  );
                }),
              });
            }),
            F = c.default.memo(function (n) {
              var t = n.regionList,
                e = n.selectRegion,
                i = n.changeRegion;
              return (0, O.tZ)(u.View, {
                className: " _Y",
                children: (0, O.tZ)(u.ScrollView, {
                  className: " _yd _Hg _Y -pa",
                  scrollY: !0,
                  enhanced: !0,
                  showScrollbar: !1,
                  scrollWithAnimation: !0,
                  children:
                    null == t
                      ? void 0
                      : t.map(function (n, t) {
                          return (0, O.tZ)(
                            u.View,
                            {
                              onClick: function () {
                                return i(n);
                              },
                              className: " _Ae _ng _o _oc _G",
                              style:
                                e === n
                                  ? "background: #fff;font-weight:600"
                                  : "",
                              children: n,
                            },
                            t
                          );
                        }),
                }),
              });
            }),
            q = c.default.memo(function (n) {
              var t,
                e = n.data,
                i = n.selectWord;
              return e
                ? (0, O.tZ)(u.View, {
                    className: " _Y _j",
                    children: (0, O.tZ)(u.ScrollView, {
                      className: " _Y _qt _Mb -sa",
                      scrollY: !0,
                      enhanced: !0,
                      showScrollbar: !1,
                      scrollWithAnimation: !0,
                      scrollIntoView: i.replace("热门线路", "hot"),
                      children:
                        null === (t = Object.keys(e)) || void 0 === t
                          ? void 0
                          : t.map(function (n, t) {
                              var i,
                                o,
                                a = "热门线路" === n;
                              return (0, O.BX)(
                                u.View,
                                {
                                  id: n.replace("热门线路", "hot"),
                                  children: [
                                    (0, O.tZ)(u.View, {
                                      className: a
                                        ? " _a _ij _sb _hk _fk _ut"
                                        : " _yd _ij _sb _hk _fk _Os _bg",
                                      children: n,
                                    }),
                                    a
                                      ? (0, O.tZ)(u.View, {
                                          className: " _i _Mn _Ik",
                                          children:
                                            null === (i = e[n]) || void 0 === i
                                              ? void 0
                                              : i.map(function (n, t) {
                                                  var e, i;
                                                  return (0, O.tZ)(
                                                    u.View,
                                                    {
                                                      className:
                                                        " _rt _gg _ol _pb _st _tt _hg _yc _Ym _dd _F",
                                                      onClick: function () {
                                                        return W(n);
                                                      },
                                                      children: ""
                                                        .concat(
                                                          null == n ||
                                                            null ===
                                                              (e =
                                                                n.fromCityInfo) ||
                                                            void 0 === e
                                                            ? void 0
                                                            : e.stationName,
                                                          " - "
                                                        )
                                                        .concat(
                                                          null == n ||
                                                            null ===
                                                              (i =
                                                                n.toCityInfo) ||
                                                            void 0 === i
                                                            ? void 0
                                                            : i.stationName
                                                        ),
                                                    },
                                                    t
                                                  );
                                                }),
                                        })
                                      : null === (o = e[n]) || void 0 === o
                                      ? void 0
                                      : o.map(function (n, t) {
                                          var e, i;
                                          return (0, O.tZ)(
                                            u.View,
                                            {
                                              className: " _ij _fk _dd _F _Os",
                                              onClick: function () {
                                                return W(n);
                                              },
                                              children: ""
                                                .concat(
                                                  null == n ||
                                                    null ===
                                                      (e = n.fromCityInfo) ||
                                                    void 0 === e
                                                    ? void 0
                                                    : e.stationName,
                                                  " - "
                                                )
                                                .concat(
                                                  n.displayName ||
                                                    (null == n ||
                                                    null ===
                                                      (i = n.toCityInfo) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i.stationName)
                                                ),
                                            },
                                            t
                                          );
                                        }),
                                  ],
                                },
                                t
                              );
                            }),
                    }),
                  })
                : (0, O.tZ)(u.View, {});
            }),
            A = c.default.memo(function (n) {
              var t,
                e = n.data,
                i = n.selectWord;
              return e
                ? (0, O.tZ)(u.View, {
                    className: " _Y _j",
                    children: (0, O.tZ)(u.ScrollView, {
                      className: " _Y -ra",
                      scrollY: !0,
                      enhanced: !0,
                      showScrollbar: !1,
                      scrollWithAnimation: !0,
                      scrollIntoView: i.replace("热门线路", "hot"),
                      children:
                        null === (t = Object.keys(e)) || void 0 === t
                          ? void 0
                          : t.map(function (n, t) {
                              var i,
                                o = "热门线路" === n;
                              return (0, O.BX)(
                                u.View,
                                {
                                  id: n.replace("热门线路", "hot"),
                                  children: [
                                    (0, O.tZ)(u.View, {
                                      className: " _yd _ij _sb _hk _fk _Os",
                                      style: o ? "background: #fff" : "'",
                                      children: n,
                                    }),
                                    (0, O.tZ)(u.View, {
                                      className: " _gt",
                                      children:
                                        null === (i = e[n]) || void 0 === i
                                          ? void 0
                                          : i.map(function (n, t) {
                                              return (0, O.BX)(
                                                u.View,
                                                {
                                                  className:
                                                    " _i _Ga _ht _l _Ik _qd _sb _F",
                                                  onClick: function () {
                                                    return W(n);
                                                  },
                                                  children: [
                                                    (0, O.tZ)(u.Image, {
                                                      src: n.imgUrl,
                                                      className:
                                                        " _ht _at _dc _Yk _it",
                                                    }),
                                                    (0, O.tZ)(u.Text, {
                                                      children: n.displayName,
                                                    }),
                                                  ],
                                                },
                                                t
                                              );
                                            }),
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                    }),
                  })
                : (0, O.tZ)(u.View, {});
            }),
            H = c.default.memo(function (n) {
              var t = n.words,
                e = n.onChange,
                i = n.selectWord;
              return (0, O.tZ)(u.View, {
                className: " _u _Qs _Rs _i _k _l _n _r _q _Ss _qr",
                children:
                  null == t
                    ? void 0
                    : t.map(function (n, t) {
                        return (0, O.tZ)(
                          u.View,
                          {
                            className:
                              n === i
                                ? " _w _Rj _O _pa _Al _b _B"
                                : " _Ma _B _Ts",
                            onClick: function () {
                              return e(n);
                            },
                            children: n,
                          },
                          t
                        );
                      }),
              });
            }),
            $ = (0, _.$j)(
              function (n) {
                var t = n.pageModel;
                return {
                  isSearch: t.isSearch,
                  selectedTab: t.selectedTab,
                  shipLineGroupData: t.shipLineGroupData,
                  regionList: t.regionList,
                  boatRegionList: t.boatRegionList,
                  boatGroupData: t.boatGroupData,
                  searchWord: t.searchWord,
                };
              },
              function (n) {
                return (0, M.Z)(n), {};
              }
            )(function (n) {
              n.isSearch;
              var t = n.selectedTab,
                e = n.shipLineGroupData,
                i = n.regionList,
                o = n.boatRegionList,
                a = n.boatGroupData,
                r = n.searchWord,
                l = (0, c.useState)("全部航线"),
                s = (0, Y.Z)(l, 2),
                d = s[0],
                f = s[1],
                _ = (0, c.useState)("全部航线"),
                h = (0, Y.Z)(_, 2),
                m = h[0],
                p = h[1],
                v = (0, c.useState)("热门线路"),
                g = (0, Y.Z)(v, 2),
                Z = g[0],
                y = g[1],
                b = (0, c.useState)("热门线路"),
                N = (0, Y.Z)(b, 2),
                w = N[0],
                k = N[1],
                L = function (n, t) {
                  switch (n) {
                    case "shipLine":
                      y(t);
                      break;
                    case "boat":
                      k(t);
                  }
                };
              return r
                ? (0, O.tZ)(u.View, {
                    className: " _a _vr _er _i _nl _sj",
                    style: " flex-direction: column;padding-bottom:20px",
                    children: (0, O.tZ)(P, {}),
                  })
                : (0, O.BX)(O.HY, {
                    children: [
                      (0, O.tZ)(E, { selectedTab: t }),
                      (0, O.BX)(u.View, {
                        className: " _a _vr _er _i _nl _sj",
                        style:
                          "shipLine" === t ? "display: flex" : "display: none",
                        children: [
                          (0, O.tZ)(F, {
                            regionList: i,
                            selectRegion: d,
                            changeRegion: function (n) {
                              f(n);
                            },
                          }),
                          (0, O.tZ)(q, { data: e[d], selectWord: Z }),
                          (0, O.tZ)(H, {
                            words: Object.keys(e[d] || {}),
                            onChange: function (n) {
                              return L("shipLine", n);
                            },
                            selectWord: Z,
                          }),
                        ],
                      }),
                      (0, O.BX)(u.View, {
                        className: " _a _vr _er _i _nl _sj",
                        style: "boat" === t ? "display: flex" : "display: none",
                        children: [
                          (0, O.tZ)(F, {
                            regionList: o,
                            selectRegion: m,
                            changeRegion: function (n) {
                              p(n);
                            },
                          }),
                          (0, O.tZ)(A, { data: a[m], selectWord: w }),
                          (0, O.tZ)(H, {
                            words: Object.keys(a[m] || {}),
                            onChange: function (n) {
                              return L("boat", n);
                            },
                            selectWord: w,
                          }),
                        ],
                      }),
                    ],
                  });
            }),
            J =
              (0, h.h)(!1)(
                (B = (function (n) {
                  (0, l.Z)(e, n);
                  var t = (0, s.Z)(e);
                  function e(n) {
                    var i;
                    return (
                      (0, o.Z)(this, e),
                      ((i = t.call(this, n)).store = N.create(
                        (0, r.Z)(i)
                      ).store),
                      i
                    );
                  }
                  return (
                    (0, a.Z)(e, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          (0, g.Q)(),
                            (0, Z.k9)({})
                              .then(function (n) {
                                if (
                                  1 === (null == n ? void 0 : n.code) &&
                                  null != n &&
                                  n.data
                                ) {
                                  var t,
                                    e,
                                    i,
                                    o,
                                    a,
                                    r,
                                    l,
                                    s,
                                    c,
                                    u,
                                    d = ["全部航线"].concat(
                                      null == n ||
                                        null === (t = n.data) ||
                                        void 0 === t
                                        ? void 0
                                        : t.region
                                    ),
                                    _ =
                                      null == n ||
                                      null === (e = n.data) ||
                                      void 0 === e ||
                                      null === (i = e.boatRegion) ||
                                      void 0 === i
                                        ? void 0
                                        : i.map(function (n) {
                                            return n.name;
                                          }),
                                    h =
                                      (null == n ||
                                      null === (o = n.data) ||
                                      void 0 === o ||
                                      null === (a = o.topHot) ||
                                      void 0 === a ||
                                      null ===
                                        (r = a.find(function (n) {
                                          return "热门线路" === n.name;
                                        })) ||
                                      void 0 === r
                                        ? void 0
                                        : r.line) || [],
                                    m =
                                      null == n ||
                                      null === (l = n.data) ||
                                      void 0 === l
                                        ? void 0
                                        : l.hotBoatLine;
                                  if (
                                    (null === (s = N.getDispatch()) ||
                                      void 0 === s ||
                                      s.pageModel.set({
                                        regionList: d,
                                        boatRegionList: ["全部航线"].concat(
                                          (0, p.Z)(_)
                                        ),
                                      }),
                                    (null == n ||
                                    null === (c = n.data) ||
                                    void 0 === c ||
                                    null === (u = c.shipLine) ||
                                    void 0 === u
                                      ? void 0
                                      : u.length) > 0)
                                  ) {
                                    var g,
                                      Z,
                                      y,
                                      b,
                                      w =
                                        null == n ||
                                        null === (g = n.data) ||
                                        void 0 === g
                                          ? void 0
                                          : g.shipLine.filter(function (n) {
                                              return (
                                                0 === n.foreign ||
                                                2 === n.foreign
                                              );
                                            }),
                                      k =
                                        (null == n ||
                                        null === (Z = n.data) ||
                                        void 0 === Z ||
                                        null === (y = Z.boatLine) ||
                                        void 0 === y
                                          ? void 0
                                          : y.filter(function (n) {
                                              return (
                                                0 === n.foreign ||
                                                2 === n.foreign
                                              );
                                            })) || [],
                                      V = C(w),
                                      I = C(k),
                                      S = L(w),
                                      j = L(k);
                                    null === (b = N.getDispatch()) ||
                                      void 0 === b ||
                                      b.pageModel.set({
                                        shipLineGroupData: (0, v.Z)(
                                          {
                                            全部航线: (0, v.Z)(
                                              { 热门线路: h },
                                              V
                                            ),
                                          },
                                          S
                                        ),
                                        boatGroupData: (0, v.Z)(
                                          {
                                            全部航线: (0, v.Z)(
                                              { 热门线路: m },
                                              I
                                            ),
                                          },
                                          j
                                        ),
                                        shipLines: w,
                                        boatLines: k,
                                        allGroupData: V,
                                        allBoatGroupData: I,
                                      });
                                  }
                                } else f().showToast({ title: "网络异常，请稍后再试", icon: "none", duration: 2e3 });
                              })
                              .catch(function () {
                                f().showToast({
                                  title: "网络异常，请稍后再试",
                                  icon: "none",
                                  duration: 2e3,
                                });
                              })
                              .finally(function () {
                                (0, g.Z)();
                              });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var n = this;
                          return (0, O.tZ)(_.zt, {
                            store: this.store,
                            children: (0, O.BX)(u.View, {
                              className: " _i _k _Z _Y",
                              children: [
                                (0, O.tZ)(m.Z, {
                                  title: "选择航线",
                                  backgroundColor: "#fff",
                                  titleColor: "#333",
                                  defaultBackButtonColor: "#333",
                                  pop: function () {
                                    return n.navigateBack();
                                  },
                                }),
                                (0, O.tZ)(R, {}),
                                (0, O.tZ)($, {}),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    e
                  );
                })(c.default.Component))
              ) || B;
          Page(
            (0, i.createPageConfig)(
              J,
              "pages/taroCRN/ship/pages/shipLineList/index",
              { root: { cn: [] } },
              {
                backgroundColor: "#0066E6",
                navigationStyle: "custom",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (n) {
        n.O(0, [98946, 55076, 19559, 11216, 68592], function () {
          return (function (t) {
            return n((n.s = t));
          })(31287);
        }),
          n.O();
      },
    ]);
})();
