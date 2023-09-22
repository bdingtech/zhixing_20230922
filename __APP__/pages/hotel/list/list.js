!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [99956],
      {
        26274: function (e, t, n) {
          var i,
            a = n(32180),
            l = n(74921),
            o = n(298),
            r = n(79301),
            c = n(95308),
            s = n(90129),
            u = n(22276),
            d = n(57042),
            h = n(24460),
            f = n(81876),
            m = n(21867),
            p = n(86066),
            v = n(45023),
            g = n(52500),
            I = n(18783),
            y = n(8271),
            k = n.n(y),
            b = n(71515),
            w = n(92954),
            S = n.n(w),
            Z = n(81957),
            C = n(49120),
            N = n(34229),
            T = n(2809),
            x = n(79910),
            E = n(83358),
            D = n(27113),
            F = n(80626),
            V = n(3205),
            B = n(79404),
            P = n(79792),
            A = n(5050),
            L = n(39173),
            H = n(20592),
            O = n(90668),
            R = n(17767),
            _ = n(62607),
            X = n(92667),
            M = n(13025),
            U = n(73130),
            G = n(21999),
            K = n(46596),
            q = n(48813),
            Q =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/xiaochegnxu-shoucang/fanhui@3x.png",
            j =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/xiaochegnxu-shoucang/caidan@3x.png",
            W =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/xiaochegnxu-shoucang/Kirby-Yicon-IM-guanbi@3x.png",
            z = [
              {
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/xiaochegnxu-shoucang/Kirby-Yicon-shoucang@3x.png",
                name: "我的收藏",
                type: 1,
              },
              {
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/xiaochegnxu-shoucang/Kirby-Yicon-liulan@3x.png",
                name: "我浏览过",
                type: 2,
              },
              {
                icon: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/xiaochegnxu-shoucang/Kirby-Yicon-zhuguo@3x.png",
                name: "我住过的",
                type: 0,
              },
            ],
            Y = {
              1: "hotel_list_mycollect_click",
              2: "hotel_list_myview_click",
              0: "hotel_list_myordhotel_click",
            },
            J = "navbar_bubble_appeared",
            $ = g.default.memo(function (e) {
              var t = e.pageId,
                n = e.title,
                i = e.backgroundColor,
                a = e.EventsHub,
                l = e.isEconomic,
                o = S().getStorageSync(J),
                r = (0, g.useState)(!1),
                c = (0, s.Z)(r, 2),
                u = c[0],
                d = c[1],
                h = (0, g.useState)(!o),
                f = (0, s.Z)(h, 2),
                m = f[0],
                p = f[1],
                v = (0, O.LP)(u, "block"),
                y = (0, O.gP)(m, "block", "none"),
                k = i ? "background-color:".concat(i, ";") : "",
                w = "padding-top:"
                  .concat(T.ZP.statusBarHeight, "px;")
                  .concat(k),
                Z = "top:"
                  .concat(T.ZP.statusBarHeight, "px;display:")
                  .concat(y),
                N = "tit"
                  .concat((0, O.gP)(l, " economic"))
                  .concat((0, O.gP)(P.default.isBaidu, " swan")),
                E = (0, g.useCallback)(function () {
                  S().getCurrentPages().length <= 1
                    ? x.Z.relaunchHome("hotel")
                    : S().navigateBack();
                }, []),
                D = (0, g.useCallback)(
                  function (e) {
                    e.stopPropagation(), u && d(!1), m && p(!1);
                  },
                  [u, m]
                ),
                F = (0, g.useCallback)(
                  function (e) {
                    e.stopPropagation(), d(!u), m && p(!1);
                  },
                  [u, m]
                ),
                V = (0, g.useCallback)(
                  function (e, n) {
                    e.stopPropagation();
                    var i = (0, C.getCurrentPage)();
                    null != i &&
                      i.ubtTrace &&
                      i.ubtTrace(208561, { pageId: t, bizKey: Y[n] }),
                      I.ZP.isLogin
                        ? (S().navigateTo({
                            url: "/pages/hotel/packages/collect/collect?type=".concat(
                              n
                            ),
                          }),
                          d(!1))
                        : I.ZP.doLogin()
                            .then(function () {
                              S().navigateTo({
                                url: "/pages/hotel/packages/collect/collect?type=".concat(
                                  n
                                ),
                              }),
                                d(!1);
                            })
                            .catch(function () {
                              S().showToast({
                                title: "取消登录",
                                icon: "none",
                                duration: 1500,
                              });
                            });
                  },
                  [t]
                );
              return (
                (0, g.useEffect)(
                  function () {
                    null == a ||
                      a.on(K.H9.PAGE_CLICK, function () {
                        u && d(!1);
                      }),
                      m &&
                        (S().setStorage({ key: J, data: !0 }),
                        setTimeout(function () {
                          p(!1);
                        }, 3e3));
                  },
                  [a, u, m]
                ),
                (0, q.BX)(b.View, {
                  className: "custom-navbar",
                  style: w,
                  id: "AXBs",
                  onClick: D,
                  children: [
                    P.default.isWechat &&
                      (0, q.BX)(b.View, {
                        className: "left",
                        children: [
                          (0, q.tZ)(b.Image, {
                            mode: "widthFix",
                            className: "icon back",
                            src: Q,
                            id: "AXBt",
                            onClick: E,
                          }),
                          (0, q.tZ)(b.Text, { className: "line" }),
                          (0, q.BX)(b.View, {
                            className: "dropdown",
                            children: [
                              (0, q.tZ)(b.Image, {
                                mode: "widthFix",
                                className: "icon menu",
                                src: j,
                                id: "AXBu",
                                onClick: F,
                              }),
                              (0, q.tZ)(b.View, {
                                className: "dropdown-content",
                                style: v,
                                children: z.map(function (e) {
                                  return (0, q.BX)(
                                    b.View,
                                    {
                                      className: "li",
                                      id: "AXBv",
                                      onClick: function (t) {
                                        return V(t, e.type);
                                      },
                                      children: [
                                        (0, q.tZ)(b.Image, {
                                          mode: "widthFix",
                                          className: "icon",
                                          src: e.icon,
                                        }),
                                        (0, q.tZ)(b.Text, {
                                          className: "name",
                                          children: e.name,
                                        }),
                                      ],
                                    },
                                    e.type
                                  );
                                }),
                              }),
                            ],
                          }),
                          (0, q.BX)(b.View, {
                            className: "bubble ".concat(P.default.zxTyStr),
                            style: Z,
                            children: [
                              (0, q.tZ)(b.Text, {
                                children: "收藏/住过的酒店都在这里",
                              }),
                              (0, q.tZ)(b.Image, {
                                src: W,
                                className: "close",
                                id: "AXBw",
                                onClick: D,
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, q.tZ)(b.View, { className: N, children: n }),
                  ],
                })
              );
            }),
            ee = function (e, t, n) {
              var i = {
                inlandCities: Object.assign(_.DB.get() || {}, {
                  hotCities: B.Z.hotelHotCities,
                }),
                interCities: {},
              };
              V.Z.city(
                {
                  title: "选择城市",
                  hotelQueryModel: e,
                  bu: "hotel",
                  loadData: function (e) {
                    e(i);
                  },
                  handleCurrentPosition: function (e, t) {
                    (0, D.PA)(function (e) {
                      (e.isGeo = !0),
                        t &&
                          t({
                            cityName: e.cityName,
                            cityId: e.cityId,
                            cityAddress: e.address,
                            lat: e.lat,
                            lng: e.lng,
                          });
                    }, n);
                  },
                },
                function (e) {
                  e.isGeo || (e.cityAddress = e.cityName),
                    n({ city: e, item: e.keywordInfo });
                }
              );
            },
            te = function (e, t) {
              var n = !!t && t !== e,
                i = (0, O.gP)(n, "，".concat(t));
              return e ? "".concat(e).concat(i) : "";
            },
            ne = g.default.memo(function (e) {
              var t,
                n = e.checkInDate,
                i = e.checkOutDate,
                a = e.cityName,
                l = e.cityAddress,
                o = e.hotelQuery,
                r = e.isAtmosphere,
                c = e.isEconomic,
                u = e.keywordInfo,
                d = e.handleKeywordCallback,
                h = e.onCityChange,
                f = e.onDateChange,
                m = e.toKeywordSearch,
                p = e.handleKeywordClear,
                v = (0, g.useState)(n),
                I = (0, s.Z)(v, 2),
                y = I[0],
                w = I[1],
                S = (0, g.useState)(i),
                Z = (0, s.Z)(S, 2),
                N = Z[0],
                T = Z[1],
                x = (0, g.useState)(te(a, l)),
                E = (0, s.Z)(x, 2),
                D = E[0],
                V = E[1],
                B =
                  (null == u || null === (t = u.data) || void 0 === t
                    ? void 0
                    : t.title) || "",
                P = (0, O.gP)(c, " economic"),
                A = (0, O.gP)(r, " atmosphere"),
                L = k()(y).format("MM-DD"),
                H = k()(N).format("MM-DD"),
                R = "list-search".concat(P).concat(A),
                _ = (0, g.useCallback)(
                  function () {
                    var e = (0, C.getCurrentPage)();
                    null != e &&
                      e.ubtTrace &&
                      e.ubtTrace(208561, {
                        bizKey: "hotel_list_changecity_click",
                      }),
                      ee(o, 0, function (e) {
                        var t = e.city,
                          n = t.cityName,
                          i = t.cityAddress;
                        (n === a && i === l) || (V(te(n, i)), h(e.city));
                      });
                  },
                  [a, l, o, d, h]
                ),
                X = (0, g.useCallback)(
                  function () {
                    var e = (0, C.getCurrentPage)();
                    null != e &&
                      e.ubtTrace &&
                      e.ubtTrace(208561, {
                        bizKey: "hotel_list_datechange_click",
                      }),
                      F.ZP.chooseDate(
                        {
                          checkInDate: y,
                          checkOutDate: N,
                          smallHoursFlag: (0, F.mD)(y),
                        },
                        function (e) {
                          var t = e.date;
                          w(t.checkInDate),
                            T(t.checkOutDate),
                            (0, O.R3)(t),
                            f(t);
                        }
                      );
                  },
                  [y, N, f]
                ),
                M = (0, g.useCallback)(
                  function (e) {
                    e.stopPropagation(), p();
                  },
                  [p]
                );
              return (
                (0, g.useEffect)(
                  function () {
                    V(te(a, l));
                  },
                  [l, a]
                ),
                (0, g.useEffect)(
                  function () {
                    w(n);
                  },
                  [n]
                ),
                (0, g.useEffect)(
                  function () {
                    T(i);
                  },
                  [i]
                ),
                (0, q.tZ)(b.View, {
                  className: R,
                  children: (0, q.BX)(b.View, {
                    className: "list-search-bd",
                    children: [
                      (0, q.BX)(b.View, {
                        className: "city color-primary",
                        id: "AXFO",
                        onClick: _,
                        children: [
                          (0, q.tZ)(b.View, {
                            className: "city-str",
                            children: D,
                          }),
                          (0, q.tZ)(b.View, {
                            className: "ifont-triangle iconfont",
                          }),
                        ],
                      }),
                      (0, q.BX)(b.View, {
                        className: "date",
                        id: "AXFP",
                        onClick: X,
                        children: [
                          (0, q.BX)(b.View, {
                            className: "str",
                            children: [
                              (0, q.BX)(b.View, {
                                children: [
                                  "住",
                                  (0, q.tZ)(b.Text, {
                                    className: "color-primary",
                                    children: L,
                                  }),
                                ],
                              }),
                              (0, q.BX)(b.View, {
                                children: [
                                  "离",
                                  (0, q.tZ)(b.Text, {
                                    className: "color-primary",
                                    children: H,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, q.tZ)(b.View, {
                            className: "ifont-triangle iconfont",
                          }),
                        ],
                      }),
                      (0, q.BX)(b.View, {
                        className: "search",
                        children: [
                          (0, q.tZ)(b.Text, {
                            className: "ifont-search iconfont",
                          }),
                          (0, q.tZ)(b.View, {
                            className: "input-txt ".concat(
                              B ? "" : "placeholder"
                            ),
                            id: "AXFQ",
                            onClick: m,
                            children: B || "关键字/位置/品牌/酒店名",
                          }),
                          B &&
                            (0, q.tZ)(b.Text, {
                              className: "ifont-del iconfont",
                              id: "AXFR",
                              onClick: M,
                            }),
                        ],
                      }),
                    ],
                  }),
                })
              );
            }),
            ie = n(28333),
            ae = g.default.memo(function (e) {
              var t,
                n,
                i = e.EventsHub,
                a = e.cityAddress,
                l = e.data,
                o = e.dataSelected,
                r = void 0 === o ? {} : o,
                c = e.position,
                u = e.show,
                d = e.totalCount,
                h = e.confirmFilter,
                f = Object.keys(r).map(function (e) {
                  return r[e];
                }),
                m = (0, s.Z)(f, 1)[0],
                p = (null == m ? void 0 : m.tabOneIndex) || 1,
                v = (null == m ? void 0 : m.tabTwoIndex) || 0,
                I = (0, g.useState)(p),
                y = (0, s.Z)(I, 2),
                k = y[0],
                w = y[1],
                Z = (0, g.useState)(v),
                C = (0, s.Z)(Z, 2),
                T = C[0],
                x = C[1],
                E = (0, g.useState)(!0),
                D = (0, s.Z)(E, 2),
                F = D[0],
                V = D[1],
                B = "pop-wrap position".concat((0, O.gP)(u, " active")),
                A = "filter-two-line ".concat(P.default.zxTyStr),
                L = "distance-wrap ".concat(P.default.zxTyStr),
                H = l.subItems.findIndex(function (e) {
                  return e.data.filterID === K.a6;
                }),
                R = "您" === c.positionRemark ? "我的位置" : c.positionRemark,
                _ = "您" === c.positionRemark ? "(".concat(a, ")") : "",
                X = d ? "查看共".concat(d, "家酒店") : "确定",
                M =
                  null === (t = l.subItems[k].subItems[0]) ||
                  void 0 === t ||
                  null === (n = t.extra) ||
                  void 0 === n
                    ? void 0
                    : n.hasChild,
                U = (0, g.useCallback)(
                  function (e, t, n) {
                    var a, o;
                    null !== (a = l.subItems[k].subItems[n]) &&
                    void 0 !== a &&
                    null !== (o = a.extra) &&
                    void 0 !== o &&
                    o.hasChild
                      ? x(n)
                      : i.trigger(K.H9.FILTER_CHANGE, {
                          key: K._J.POSITION,
                          current: e,
                          parent: t,
                        });
                  },
                  [l, i, k, x]
                ),
                G = (0, g.useCallback)(
                  function (e) {
                    e !== k && w(e), 0 !== T && x(0);
                  },
                  [k, T, w, x]
                ),
                Q = (0, g.useCallback)(
                  function () {
                    i.trigger(K.H9.RESET_FILTER, 3);
                  },
                  [i]
                );
              return (
                (0, g.useEffect)(
                  function () {
                    u
                      ? S().nextTick(function () {
                          V(!1);
                        })
                      : (V(!0),
                        i.on(K.H9.HOT_POSITION, function () {
                          w(1);
                        }));
                  },
                  [u, i]
                ),
                (0, q.BX)(b.View, {
                  className: B,
                  children: [
                    F &&
                      u &&
                      (0, q.BX)(q.HY, {
                        children: [
                          (0, q.BX)(b.View, {
                            className: "distance-wrap skeleton",
                            children: [
                              (0, q.tZ)(b.View, {
                                className: "distance skeleton",
                              }),
                              (0, q.tZ)(b.View, {
                                className: "items",
                                children: [0, 1, 2, 3].map(function (e, t) {
                                  return (0,
                                  q.tZ)(b.View, { className: "item skeleton" }, "s_".concat(t));
                                }),
                              }),
                            ],
                          }),
                          (0, q.BX)(b.View, {
                            className: "filter-two-line",
                            children: [
                              (0, q.tZ)(b.View, {
                                className: "line-left",
                                children: (0, q.tZ)(b.View, {
                                  className: "item skeleton",
                                }),
                              }),
                              (0, q.tZ)(b.View, {
                                className: "filter-brand",
                                children: [0, 1, 2].map(function (e, t) {
                                  return (0, q.BX)(
                                    b.View,
                                    {
                                      className: "right-item-wrapper",
                                      children: [
                                        (0, q.tZ)(b.View, {
                                          className: "tit skeleton",
                                        }),
                                        (0, q.tZ)(b.View, {
                                          className: "filter-brand-bd",
                                          children: [0, 1, 2].map(function (
                                            e,
                                            t
                                          ) {
                                            return (0, q.tZ)(
                                              b.View,
                                              { className: "item skeleton" },
                                              "s_".concat(t)
                                            );
                                          }),
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    !F &&
                      u &&
                      (0, q.BX)(q.HY, {
                        children: [
                          (0, q.BX)(b.View, {
                            className: L,
                            children: [
                              (0, q.BX)(b.View, {
                                className: "distance",
                                children: [
                                  "直线距离",
                                  (0, q.tZ)(b.Text, {
                                    className: "strong",
                                    children: R,
                                  }),
                                  (0, q.tZ)(b.Text, {
                                    className: "light",
                                    children: _,
                                  }),
                                ],
                              }),
                              (0, q.tZ)(b.View, {
                                className: "items",
                                children: l.subItems[H].subItems
                                  .slice(0, 4)
                                  .map(function (e) {
                                    var t,
                                      n = r[e.data.filterID],
                                      i =
                                        (null == n ||
                                        null === (t = n.data) ||
                                        void 0 === t
                                          ? void 0
                                          : t.value) === e.data.value,
                                      a = "item".concat(i ? " cur" : "");
                                    return (0, q.tZ)(
                                      b.View,
                                      {
                                        className: a,
                                        id: "AXEv",
                                        onClick: function () {
                                          return U(e, l.subItems[H]);
                                        },
                                        children: e.data.title,
                                      },
                                      e.data.title
                                    );
                                  }),
                              }),
                            ],
                          }),
                          (0, q.BX)(b.View, {
                            className: A,
                            children: [
                              (0, q.tZ)(b.View, {
                                className: "line-left",
                                children: l.subItems.map(function (e, t) {
                                  var n = "item ".concat(k === t ? "cur" : ""),
                                    i =
                                      e.data.filterID === K.a6
                                        ? "display:none;"
                                        : "";
                                  return (0, q.tZ)(
                                    b.View,
                                    {
                                      className: n,
                                      id: "AXEw",
                                      onClick: function () {
                                        return G(t);
                                      },
                                      style: i,
                                      children: e.data.title,
                                    },
                                    t
                                  );
                                }),
                              }),
                              (0, q.tZ)(b.ScrollView, {
                                className: "filter-line",
                                scrollY: !0,
                                children: l.subItems[k].subItems.map(function (
                                  e,
                                  t
                                ) {
                                  var n,
                                    i = r[e.data.filterID],
                                    a = M
                                      ? T === t
                                      : (null == i ||
                                        null === (n = i.data) ||
                                        void 0 === n
                                          ? void 0
                                          : n.value) === e.data.value,
                                    o = "item".concat(a ? " cur" : ""),
                                    c = e.extra.extraInfo ? "add-extra" : "";
                                  return (0, q.BX)(
                                    b.View,
                                    {
                                      className: o,
                                      id: "AXEx",
                                      onClick: function () {
                                        return U(e, l.subItems[k], t);
                                      },
                                      children: [
                                        (0, q.BX)(b.View, {
                                          className:
                                            "ellipsis title-item ".concat(c),
                                          children: [
                                            (0, q.tZ)(b.View, {
                                              className: "title-text",
                                              children: e.data.title,
                                            }),
                                            e.extra.extraInfo &&
                                              (0, q.tZ)(b.View, {
                                                className: "extrainfo-text",
                                                children: (0, q.tZ)(
                                                  N.ZtRichText,
                                                  {
                                                    nodes: (0, O.xC)(
                                                      e.extra.extraInfo
                                                    ),
                                                  }
                                                ),
                                              }),
                                          ],
                                        }),
                                        a &&
                                          !M &&
                                          (0, q.tZ)(b.View, {
                                            className: "selected-arr ".concat(
                                              c
                                            ),
                                            children: (0, q.tZ)(ie.Z, {
                                              name: "checkboxed",
                                              type: "v2",
                                              primary: !0,
                                            }),
                                          }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              }),
                              M &&
                                (0, q.tZ)(b.View, {
                                  className: "filter-line",
                                  children: l.subItems[k].subItems[
                                    T
                                  ].subItems.map(function (e) {
                                    var t,
                                      n = r[e.data.filterID],
                                      i =
                                        (null == n ||
                                        null === (t = n.data) ||
                                        void 0 === t
                                          ? void 0
                                          : t.value) === e.data.value,
                                      a = e.data.title.includes("T"),
                                      o = (0, O.gP)(i, " cur"),
                                      c = (0, O.gP)(a, " sub"),
                                      s = "item".concat(o).concat(c);
                                    return (0, q.BX)(
                                      b.View,
                                      {
                                        className: s,
                                        id: "AXEy",
                                        onClick: function () {
                                          return U(
                                            e,
                                            l.subItems[k].subItems[T]
                                          );
                                        },
                                        children: [
                                          (0, q.tZ)(b.View, {
                                            className: "tit".concat(
                                              (0, O.gP)(i, " primary")
                                            ),
                                            children: e.data.title,
                                          }),
                                          i &&
                                            (0, q.tZ)(ie.Z, {
                                              name: "checkboxed",
                                              type: "v2",
                                              primary: !0,
                                            }),
                                        ],
                                      },
                                      e.data.title
                                    );
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    (0, q.BX)(b.View, {
                      className: "btn-box",
                      style: (0, O.LP)(u, "flex"),
                      children: [
                        (0, q.tZ)(b.Button, {
                          className: "btn-grey",
                          id: "AXEz",
                          onClick: Q,
                          children: "重置",
                        }),
                        (0, q.tZ)(b.Button, {
                          className: "btn-primary",
                          id: "AXFA",
                          onClick: h,
                          children: X,
                        }),
                      ],
                    }),
                  ],
                })
              );
            }),
            le = P.default.isTieyou ? "m.tieyou.com" : "m.suanya.com",
            oe = "https://"
              .concat(
                le,
                "/webapp/train/activity/ztrip-hotel-star-intruduction/?isHideNavBar=YES&titleBgColor="
              )
              .concat(encodeURIComponent("#ffffff"), "&titleColor=")
              .concat(
                encodeURIComponent("#000000"),
                "&autoawaken=close&popup=close"
              ),
            re = function (e) {
              var t = e,
                n = t.subItems[t.subItems.length - 2].data.value.split("|"),
                i = (0, s.Z)(n, 1)[0],
                a = t.subItems[0].data.value.split("|"),
                l = (0, s.Z)(a, 2),
                o = (l[0], l[1]);
              return parseInt(i) + parseInt(o);
            },
            ce = function (e, t) {
              var n = Object.keys(e)
                  .map(function (t) {
                    return e[t];
                  })
                  .find(function (e) {
                    return e.data.type === K._2;
                  }),
                i = Object.assign({}, K.GB, { priceEnd: t });
              if (n) {
                var a = n.data.value.split("|"),
                  l = (0, s.Z)(a, 2),
                  o = l[0],
                  r = l[1];
                (i.priceStart = o),
                  (i.priceEnd = "max" === r ? t : r),
                  (i.priceLeft = parseInt((o / t) * 100)),
                  (i.priceRight = parseInt(((t - i.priceEnd) / t) * 100));
              }
              return i;
            },
            se = function (e) {
              var t = e.parent,
                n = e.dataSelected,
                i = e.filterItemClick,
                a = e.isSuper;
              return (0, q.tZ)(g.default.Fragment, {
                children: t.subItems.map(function (e, t) {
                  var l,
                    o = !!n[e.data.filterID],
                    r =
                      -1 !== e.data.title.indexOf("/")
                        ? e.data.title.split("/")
                        : [e.data.title],
                    c = (0, s.Z)(r, 2),
                    u = c[0],
                    d = c[1],
                    h = (0, O.gP)(e.data.title.length > 6, " small"),
                    f = a ? 2 : 4,
                    m = (0, O.gP)((t + 1) % f == 0, " right-zero"),
                    p = (0, O.gP)(o, " cur"),
                    v = (0, O.gP)(a, " super"),
                    g = "item".concat(p).concat(h).concat(m).concat(v);
                  return (0, q.BX)(
                    b.View,
                    {
                      className: g,
                      id: "AXFB",
                      onClick: function () {
                        return i(e);
                      },
                      children: [
                        (null === (l = e.extra) || void 0 === l
                          ? void 0
                          : l.picUrl) &&
                          (0, q.tZ)(b.View, {
                            className: "left",
                            children: (0, q.tZ)(b.Image, {
                              src: e.extra.picUrl,
                              className: "icon",
                            }),
                          }),
                        (0, q.BX)(b.View, {
                          className: "right",
                          children: [
                            (0, q.tZ)(b.View, {
                              className: "name",
                              children: u,
                            }),
                            d &&
                              (0, q.tZ)(b.View, {
                                className: "desc",
                                children: d,
                              }),
                          ],
                        }),
                      ],
                    },
                    t
                  );
                }),
              });
            },
            ue = g.default.memo(function (e) {
              var t = e.show,
                n = e.data,
                i = e.EventsHub,
                a = e.screenWidth,
                l = e.slipperItem,
                o = e.dataSelected,
                r = e.totalCount,
                c = e.confirmFilter,
                u = n.subItems.find(function (e) {
                  return e.data.type === K._2;
                }),
                d = re(u),
                h = ce(o, d),
                f = (0, g.useState)(h),
                m = (0, s.Z)(f, 2),
                p = m[0],
                v = m[1],
                I = (0, g.useState)(h),
                y = (0, s.Z)(I, 2),
                k = y[0],
                w = y[1],
                S = (0, g.useState)(!1),
                Z = (0, s.Z)(S, 2),
                C = Z[0],
                N = Z[1],
                T = (0, g.useState)(!1),
                x = (0, s.Z)(T, 2),
                E = x[0],
                D = x[1],
                F = "pop-wrap price-star".concat((0, O.gP)(t, " active")),
                B = C ? " show" : "",
                A = E ? " show" : "",
                L = "price-bd ".concat(P.default.zxTyStr),
                H = "tooltiptext start"
                  .concat(B, " ")
                  .concat(P.default.zxTyStr),
                R = "tooltiptext end".concat(A, " ").concat(P.default.zxTyStr),
                _ = "pop-filter-tag ".concat(P.default.zxTyStr),
                X = "pop-star-card ".concat(P.default.zxTyStr),
                M = (0, s.Z)(n.subItems, 3),
                U = M[0],
                G = M[1],
                Q = M[2],
                j = p.priceStart,
                W = p.priceEnd,
                z = p.priceLeft,
                Y = p.priceRight,
                J = W == d || !W,
                $ = "¥".concat(j, "-").concat(J ? "不限" : W),
                ee = "left:".concat(z, "%;right:").concat(Y, "%"),
                te = "left:".concat(z, "%"),
                ne = "right:".concat(Y, "%"),
                ie = (0, g.useCallback)(
                  function (e) {
                    e.stopPropagation();
                    var t = parseInt(
                      ((e.touches[0].clientX - 25) / (a - 50)) * 100
                    );
                    t <= 0
                      ? (t = 0)
                      : t > 100 - Y
                      ? (t = 100 - Y)
                      : t >= 100 && (t = 100);
                    var n = 50 * parseInt(((t / 100) * d) / 50),
                      i = t;
                    v(
                      Object.assign(
                        {
                          priceStart: j,
                          priceLeft: z,
                          priceEnd: W,
                          priceRight: Y,
                        },
                        { priceStart: n, priceLeft: i }
                      )
                    );
                  },
                  [j, z, W, Y, d, a]
                ),
                ae = (0, g.useCallback)(
                  function () {
                    if (k.priceStart !== j || k.priceEnd !== W) {
                      var e = W === d || !W,
                        t = "¥".concat(j, "-").concat(e ? "不限" : W),
                        n = "".concat(j, "|").concat(e ? "max" : W),
                        a = (0, O.I8)(l);
                      (a.data.title = 0 === j && e ? l.data.title : t),
                        (a.data.value = n),
                        i.trigger(K.H9.FILTER_CHANGE, {
                          key: K._J.PRICE_STAR,
                          current: a,
                        }),
                        w({ priceStart: j, priceEnd: W });
                    }
                  },
                  [i, k, d, j, W, w, l]
                ),
                le = (0, g.useCallback)(
                  function (e) {
                    e.stopPropagation();
                    var t = parseInt(
                      ((350 - e.touches[0].clientX) / (a - 50)) * 100
                    );
                    t <= 0
                      ? (t = 0)
                      : t > 100 - z
                      ? (t = 100 - z)
                      : t >= 100 && (t = 100 - parseInt((50 / d) * 100));
                    var n =
                        (t >= 100 ? 50 : d) -
                        50 * parseInt(((t / 100) * d) / 50),
                      i = t >= 100 ? 100 - parseInt((50 / d) * 100) : t;
                    v(
                      Object.assign(
                        {
                          priceStart: j,
                          priceLeft: z,
                          priceEnd: W,
                          priceRight: Y,
                        },
                        { priceEnd: n, priceRight: i }
                      )
                    );
                  },
                  [j, z, W, Y, d, a]
                ),
                ue = (0, g.useCallback)(
                  function (e) {
                    N(!0), ie(e);
                  },
                  [ie]
                ),
                de = (0, g.useCallback)(
                  function (e) {
                    N(!1), D(!1), ae(e);
                  },
                  [ae]
                ),
                he = (0, g.useCallback)(
                  function (e) {
                    D(!0), le(e);
                  },
                  [le]
                ),
                fe = (0, g.useCallback)(
                  function (e) {
                    var t = e.data.filterID.split("|");
                    if (
                      (0, s.Z)(t, 1)[0] === K._2 &&
                      e.data.filterID !== K.KM
                    ) {
                      var n = e.data.value.split("|"),
                        a = (0, s.Z)(n, 2),
                        l = a[0],
                        o = a[1],
                        r = "max" === o ? d : o;
                      v(
                        Object.assign({}, p, {
                          priceStart: l,
                          priceEnd: r,
                          priceLeft: parseInt((l / d) * 100),
                          priceRight: parseInt(((d - r) / d) * 100),
                        })
                      );
                    }
                    i.trigger(K.H9.FILTER_CHANGE, {
                      key: K._J.PRICE_STAR,
                      current: e,
                    });
                  },
                  [i, d, p]
                ),
                me = (0, g.useCallback)(function () {
                  V.Z.twebview({ data: { url: oe } });
                }, []),
                pe = (0, g.useCallback)(
                  function () {
                    (p.priceStart || p.priceEnd) && v(K.GB),
                      i.trigger(K.H9.RESET_FILTER, 4);
                  },
                  [p, i]
                );
              return (
                (0, g.useEffect)(
                  function () {
                    var e = n.subItems.find(function (e) {
                        return e.data.type === K._2;
                      }),
                      t = re(e),
                      i = ce(o, t);
                    v(i);
                  },
                  [n, o]
                ),
                (0, q.BX)(b.View, {
                  className: F,
                  children: [
                    (0, q.BX)(b.View, {
                      className: "pop-filter-star",
                      children: [
                        (0, q.BX)(b.View, {
                          className: "pop-filter-price",
                          children: [
                            (0, q.BX)(b.View, {
                              className: "tit",
                              children: [
                                "价格",
                                (0, q.tZ)(b.Text, {
                                  className: "color-primary",
                                  children: $,
                                }),
                              ],
                            }),
                            (0, q.BX)(b.View, {
                              className: L,
                              children: [
                                (0, q.tZ)(b.View, {
                                  className: "line-star",
                                  children: "￥0",
                                }),
                                (0, q.tZ)(b.View, {
                                  className: "line-end",
                                  children: "不限",
                                }),
                              ],
                            }),
                            (0, q.BX)(b.View, {
                              className: "price-slider",
                              children: [
                                (0, q.tZ)(b.View, {
                                  className: "line",
                                  children: (0, q.tZ)(b.View, {
                                    className: "bgcolor-primary cur",
                                    style: ee,
                                  }),
                                }),
                                (0, q.BX)(b.Text, {
                                  className: H,
                                  style: te,
                                  children: ["¥", j],
                                }),
                                (0, q.tZ)(b.View, {
                                  className: "icon-slider start",
                                  style: te,
                                  onTouchMove: ue,
                                  onTouchEnd: de,
                                }),
                                (0, q.BX)(b.Text, {
                                  className: R,
                                  style: ne,
                                  children: ["¥", W],
                                }),
                                (0, q.tZ)(b.View, {
                                  className: "icon-slider end",
                                  style: ne,
                                  onTouchMove: he,
                                  onTouchEnd: de,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, q.tZ)(b.View, {
                          className: _,
                          children: U.subItems
                            .filter(function (e) {
                              return e.data.filterID !== K.KM;
                            })
                            .map(function (e, t) {
                              var n = !!o[e.data.filterID],
                                i = (0, O.gP)((t + 1) % 4 == 0, "right-zero"),
                                a = "item "
                                  .concat((0, O.gP)(n, "cur"), " ")
                                  .concat(i);
                              return (0, q.tZ)(
                                b.View,
                                {
                                  className: a,
                                  id: "AXFC",
                                  onClick: function () {
                                    return fe(e);
                                  },
                                  children: e.data.title,
                                },
                                t
                              );
                            }),
                        }),
                        (0, q.BX)(b.View, {
                          className: X,
                          children: [
                            (0, q.BX)(b.View, {
                              className: "tit",
                              children: [
                                (0, q.tZ)(b.Text, {
                                  children: n.subItems[1].data.title,
                                }),
                                (0, q.BX)(b.Text, {
                                  class: "star-link color-primary",
                                  id: "AXFD",
                                  onClick: me,
                                  children: [
                                    "国内星级/钻级说明",
                                    (0, q.tZ)(b.Text, {
                                      className: "ifont-arr iconfont",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            G &&
                              (0, q.tZ)(se, {
                                parent: G,
                                dataSelected: o,
                                filterItemClick: fe,
                              }),
                            Q &&
                              (0, q.tZ)(se, {
                                parent: Q,
                                dataSelected: o,
                                filterItemClick: fe,
                                isSuper: !0,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, q.BX)(b.View, {
                      className: "btn-box",
                      children: [
                        (0, q.tZ)(b.Button, {
                          className: "btn-grey",
                          id: "AXFE",
                          onClick: pe,
                          children: "重置",
                        }),
                        (0, q.tZ)(b.Button, {
                          className: "btn-primary",
                          id: "AXFF",
                          onClick: function () {
                            return c();
                          },
                          children: r ? "查看共" + r + "家酒店" : "确定",
                        }),
                      ],
                    }),
                  ],
                })
              );
            }),
            de = g.default.memo(function (e) {
              var t = e.show,
                n = e.data,
                i = e.dataSelected,
                a = e.EventsHub,
                l = ""
                  .concat(P.default.zxTyStr)
                  .concat((0, O.gP)(t, " active")),
                o = "pop-wrap sort-line ".concat(l),
                r = (0, g.useCallback)(
                  function (e) {
                    a.trigger(K.H9.FILTER_CHANGE, {
                      key: K._J.SORT,
                      current: e,
                    });
                  },
                  [a]
                );
              return (0, q.tZ)(b.View, {
                className: o,
                children: n.subItems[0].subItems.map(function (e, t) {
                  var n = i[e.data.filterID],
                    a = "item".concat((0, O.gP)(n, " cur"));
                  return (0, q.BX)(
                    b.View,
                    {
                      className: a,
                      id: "AXFS",
                      onClick: function () {
                        return r(e);
                      },
                      children: [
                        (0, q.tZ)(b.Text, {
                          className: "title",
                          children: e.data.title,
                        }),
                        n &&
                          (0, q.tZ)(ie.Z, {
                            name: "checkboxed",
                            type: "v2",
                            primary: !0,
                          }),
                      ],
                    },
                    t
                  );
                }),
              });
            }),
            he = g.default.memo(function (e) {
              var t = e.item,
                n = e.onClick,
                i = e.isSaleFilter,
                a = e.idx,
                l = e.isSelected,
                o = t.data.title,
                r = t.extra,
                c = r.extraInfo,
                s = r.selectIcon,
                u = r.unSelectIcon,
                d = (0, O.gP)(i, " sale"),
                h = (0, O.gP)(l, " cur"),
                f = (0, O.gP)(0 === a, " first"),
                m = (0, O.gP)((a + 1) % 3 == 0, " third"),
                p = (0, O.gP)(l, "checkboxed", "checkbox"),
                v = (0, O.gP)(l, s, u),
                I = "item".concat(d).concat(h).concat(f).concat(m),
                y = (0, q.BX)(b.View, {
                  className: "item-title",
                  children: [
                    !!v &&
                      (0, q.tZ)(b.Image, {
                        className: "icon",
                        src: v,
                        mode: "widthFix",
                      }),
                    (0, q.tZ)(b.Text, { children: o }),
                  ],
                }),
                k = (0, q.BX)(g.default.Fragment, {
                  children: [
                    (0, q.BX)(b.View, {
                      className: "info-wrapper",
                      children: [
                        y,
                        !!c &&
                          (0, q.tZ)(b.View, {
                            className: "item-extrainfo",
                            children: c,
                          }),
                      ],
                    }),
                    (0, q.tZ)(ie.Z, { name: p, type: "v2", primary: !0 }),
                  ],
                });
              return (0,
              q.tZ)(b.View, { className: I, id: "AXER", onClick: n, children: i ? k : y });
            }),
            fe = g.default.memo(function (e) {
              var t = e.hasExpand,
                n = e.onExpand;
              return (0,
              q.BX)(b.View, { className: "item-expand ".concat(P.default.zxTyStr), id: "AXES", onClick: n, children: [t ? "收起" : "展开", (0, q.tZ)(b.Text, { className: "iconfont " + (t ? "ifont-arrup" : "ifont-arrdown") })] });
            }),
            me = (function (e) {
              (0, m.Z)(n, e);
              var t = (0, p.Z)(n);
              function n(e) {
                var i;
                (0, d.Z)(this, n),
                  (i = t.call(this, e)),
                  (0, v.Z)(
                    (0, f.Z)(i),
                    "getInitialListExpanded",
                    function (e, t, n) {
                      var i,
                        a = t ? t.split(",") : [],
                        l =
                          null == n || null === (i = n.data) || void 0 === i
                            ? void 0
                            : i.title;
                      l && !a.includes(l) && a.push(l);
                      var o = [];
                      return (
                        e.forEach(function (e) {
                          a.filter(function (t) {
                            return e.titles.includes(t);
                          }).length && o.push(e.key);
                        }),
                        o
                      );
                    }
                  ),
                  (0, v.Z)((0, f.Z)(i), "optimizeFilterData", function (e, t) {
                    for (
                      var n,
                        i =
                          null == t || null === (n = t.data) || void 0 === n
                            ? void 0
                            : n.title,
                        a = e.subItems,
                        l = {},
                        o = [],
                        r = null,
                        c = 0;
                      c < a.length;
                      c++
                    ) {
                      var s = a[c],
                        u = s.data,
                        d = s.subItems,
                        h = "".concat(u.filterID, "_").concat(u.title);
                      d.length > 9 &&
                        o.push({
                          key: h,
                          titles: d.map(function (e) {
                            return e.data.title;
                          }),
                        }),
                        i === u.title && (r = c);
                      for (var f = 0; f < d.length; f++) {
                        var m = d[f].subItems;
                        d[f].data.title === i && (r = c),
                          (null == m ? void 0 : m.length) > 9 &&
                            o.push({
                              key: "".concat(h, "_").concat(d[f].data.title),
                              titles: m.map(function (e) {
                                return e.data.title;
                              }),
                            });
                      }
                      l[h] = a[c];
                    }
                    var p = r > 0 ? r : 0;
                    return {
                      brandViewStr: "filter-brand-".concat(p, "-0"),
                      filtersLeft: a,
                      filtersRight: l,
                      filtersExpandable: o,
                      tabOneIndex: p,
                    };
                  }),
                  (0, v.Z)((0, f.Z)(i), "getHeightPromise", function (e) {
                    return new Promise(function (t, n) {
                      var i = S().createSelectorQuery();
                      i.select(e).boundingClientRect(),
                        i.exec(function (e) {
                          var i = (0, s.Z)(e, 1)[0];
                          null != i && i.height
                            ? t(i.height)
                            : n("获取高度失败");
                        });
                    });
                  }),
                  (0, v.Z)(
                    (0, f.Z)(i),
                    "getAllRightBoxsHeight",
                    (0, c.Z)(
                      (0, r.Z)().mark(function e() {
                        var t,
                          n,
                          a,
                          l,
                          o,
                          c,
                          s = arguments;
                        return (0, r.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t =
                                      s.length > 0 && void 0 !== s[0]
                                        ? s[0]
                                        : {}),
                                    (e.prev = 1),
                                    (n = Object.keys(t).map(function (e, t) {
                                      return function () {
                                        return i.getHeightPromise(
                                          "#filter-box-".concat(t)
                                        );
                                      };
                                    })),
                                    (e.next = 5),
                                    Promise.all(
                                      n.map(function (e) {
                                        return e();
                                      })
                                    )
                                  );
                                case 5:
                                  for (
                                    a = e.sent, l = 0, o = [], c = 0;
                                    c < a.length;
                                    c++
                                  )
                                    (l += a[c] + 40), o.push(l);
                                  return e.abrupt("return", o);
                                case 11:
                                  (e.prev = 11),
                                    (e.t0 = e.catch(1)),
                                    console.error(
                                      "getAllRightBoxsHeight error",
                                      e.t0
                                    );
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[1, 11]]
                        );
                      })
                    )
                  ),
                  (0, v.Z)((0, f.Z)(i), "onScroll", function (e) {
                    var t = i.state,
                      n = t.heightsOfRightBoxs,
                      a = t.tabOneIndex,
                      l = t.filtersRight;
                    if (!((null != n && n.length) || i.isGettingBoxsHeight))
                      return (
                        (i.isGettingBoxsHeight = !0),
                        void i.getAllRightBoxsHeight(l).then(function (t) {
                          null != t &&
                            t.length &&
                            (i.setState({ heightsOfRightBoxs: t }),
                            i.setTabOneIndex(e.detail.scrollTop, a, t));
                        })
                      );
                    i.setTabOneIndex(e.detail.scrollTop, a, n);
                  }),
                  (0, v.Z)((0, f.Z)(i), "onScrollWithDebounce", function (e) {
                    0 !== e.detail.scrollTop &&
                      i.debounce(function () {
                        return i.onScroll(e);
                      }, 300);
                  }),
                  (0, v.Z)(
                    (0, f.Z)(i),
                    "onFilterItemClick",
                    function (e, t, n) {
                      n >= 0 && i.setState({ tabTwoIndex: n }),
                        i.props.EventsHub.trigger(K.H9.FILTER_CHANGE, {
                          key: K._J.FILTER,
                          current: e,
                          parent: t,
                        });
                    }
                  ),
                  (0, v.Z)((0, f.Z)(i), "onSetTabOneIndex", function (e) {
                    e !== i.state.tabOneIndex &&
                      i.setState({
                        tabOneIndex: e,
                        brandViewStr: "filter-brand-".concat(e),
                      });
                  }),
                  (0, v.Z)((0, f.Z)(i), "onExpandFilter", function (e) {
                    var t = i.state.filtersExpanded,
                      n = t.includes(e)
                        ? t.filter(function (t) {
                            return t !== e;
                          })
                        : [].concat((0, u.Z)(t), [e]);
                    i.setState({ filtersExpanded: n });
                  }),
                  (0, v.Z)((0, f.Z)(i), "resetFilter", function () {
                    i.setState({
                      filtersExpanded: [],
                      tabOneIndex: 0,
                      brandViewStr: null,
                    }),
                      i.props.EventsHub.trigger(K.H9.RESET_FILTER, 2);
                  });
                var a = e.data,
                  l = e.keywordInfo,
                  h = e.tabTitle,
                  m = i.optimizeFilterData(a, l),
                  p = i.getInitialListExpanded(m.filtersExpandable, h, l);
                return (
                  (i.state = (0, o.Z)(
                    (0, o.Z)({}, m),
                    {},
                    {
                      filtersExpanded: p,
                      heightsOfRightBoxs: [],
                      propsShow: !1,
                    }
                  )),
                  i
                );
              }
              return (
                (0, h.Z)(
                  n,
                  [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var e = this;
                        this.props.EventsHub.on(
                          K.H9.FILTER_CHANGED,
                          function (t) {
                            var n = e.props,
                              i = n.keywordInfo,
                              a = n.tabTitle,
                              l = e.optimizeFilterData(t, i),
                              r = e.getInitialListExpanded(
                                l.filtersExpandable,
                                a,
                                i
                              );
                            e.setState(
                              (0, o.Z)(
                                (0, o.Z)({}, l),
                                {},
                                { filtersExpanded: r }
                              )
                            );
                          }
                        );
                      },
                    },
                    {
                      key: "debounce",
                      value: function (e, t) {
                        clearTimeout(e._tId),
                          (e._tId = setTimeout(function () {
                            e();
                          }, t));
                      },
                    },
                    {
                      key: "setTabOneIndex",
                      value: function (e, t, n) {
                        var i = this,
                          a = n.findIndex(function (t) {
                            return t > e;
                          });
                        a !== t &&
                          this.setState({ tabOneIndex: a }, function () {
                            i.isGettingBoxsHeight = !1;
                          });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          t = this.props,
                          n = t.show,
                          i = t.dataSelected,
                          a = t.confirmFilter,
                          l = t.totalCount,
                          o = this.state,
                          r = o.brandViewStr,
                          c = o.filtersExpanded,
                          u = o.filtersLeft,
                          d = o.filtersRight,
                          h = void 0 === d ? {} : d,
                          f = o.tabOneIndex,
                          m = "filter-two-line ".concat(P.default.zxTyStr),
                          p = "pop-wrap filter".concat((0, O.gP)(n, " active")),
                          v = l ? "查看共".concat(l, "家酒店") : "确定";
                        return (0, q.BX)(b.View, {
                          className: p,
                          children: [
                            (0, q.BX)(b.View, {
                              className: m,
                              children: [
                                (0, q.tZ)(b.View, {
                                  className: "line-left",
                                  children: u.map(function (t, n) {
                                    var i = "item".concat(
                                      (0, O.gP)(f === n, " cur")
                                    );
                                    return (0, q.tZ)(
                                      b.View,
                                      {
                                        className: i,
                                        id: "AXET",
                                        onClick: function () {
                                          return e.onSetTabOneIndex(n);
                                        },
                                        children: t.data.title,
                                      },
                                      n
                                    );
                                  }),
                                }),
                                (0, q.tZ)(b.ScrollView, {
                                  className: "filter-brand",
                                  scrollIntoView: r,
                                  onScroll: this.onScrollWithDebounce,
                                  scrollY: !0,
                                  scrollWithAnimation: !0,
                                  children: Object.keys(h).map(function (t, n) {
                                    var a = t.split("_"),
                                      l = (0, s.Z)(a, 2),
                                      o = (l[0], l[1]),
                                      r = h[t],
                                      u =
                                        r.subItems.length > 9 &&
                                        !r.subItems[0].hasChild,
                                      d = c.includes(t),
                                      f = "filter-brand-".concat(n),
                                      m = "filter-brand-bd ".concat(
                                        P.default.zxTyStr
                                      ),
                                      p = "filter-box-".concat(n);
                                    return (0, q.BX)(
                                      b.View,
                                      {
                                        className: "right-item-wrapper",
                                        children: [
                                          (0, q.BX)(b.View, {
                                            className: "tit",
                                            id: f,
                                            children: [
                                              o,
                                              u &&
                                                (0, q.tZ)(fe, {
                                                  hasExpand: d,
                                                  onExpand: function () {
                                                    return e.onExpandFilter(t);
                                                  },
                                                }),
                                            ],
                                          }),
                                          (0, q.tZ)(b.View, {
                                            className: m,
                                            id: p,
                                            children: r.subItems
                                              .filter(function (e, t) {
                                                return !!d || t < 9;
                                              })
                                              .map(function (n, a) {
                                                var l =
                                                    !!n.subItems &&
                                                    n.subItems.length > 0,
                                                  o = ""
                                                    .concat(t, "_")
                                                    .concat(n.data.title),
                                                  s = c.includes(o),
                                                  u = i[n.data.filterID],
                                                  d = r.data.filterID === K.yd,
                                                  h = (0, O.gP)(d, " sale");
                                                return (0, q.BX)(
                                                  g.default.Fragment,
                                                  {
                                                    children: [
                                                      !l &&
                                                        (0, q.tZ)(he, {
                                                          item: n,
                                                          isSaleFilter: d,
                                                          isSelected: u,
                                                          id: "AXEU",
                                                          onClick: function () {
                                                            return e.onFilterItemClick(
                                                              n,
                                                              r
                                                            );
                                                          },
                                                        }),
                                                      l &&
                                                        (0, q.BX)(b.View, {
                                                          className:
                                                            "sub-wrapper",
                                                          children: [
                                                            (0, q.BX)(b.View, {
                                                              className:
                                                                "subtitle".concat(
                                                                  h
                                                                ),
                                                              id: ""
                                                                .concat(f, "-")
                                                                .concat(a),
                                                              children: [
                                                                n.data.title,
                                                                n.subItems
                                                                  .length > 9 &&
                                                                  (0, q.tZ)(
                                                                    fe,
                                                                    {
                                                                      hasExpand:
                                                                        s,
                                                                      onExpand:
                                                                        function () {
                                                                          return e.onExpandFilter(
                                                                            o
                                                                          );
                                                                        },
                                                                    }
                                                                  ),
                                                              ],
                                                            }),
                                                            n.subItems
                                                              .filter(function (
                                                                e,
                                                                t
                                                              ) {
                                                                return (
                                                                  !!s || t < 9
                                                                );
                                                              })
                                                              .map(function (
                                                                t,
                                                                l
                                                              ) {
                                                                return (0,
                                                                q.tZ)(
                                                                  he,
                                                                  {
                                                                    idx: l,
                                                                    isSelected:
                                                                      i[
                                                                        t.data
                                                                          .filterID
                                                                      ],
                                                                    isSaleFilter:
                                                                      d,
                                                                    item: t,
                                                                    id: "AXEV",
                                                                    onClick:
                                                                      function () {
                                                                        return e.onFilterItemClick(
                                                                          t,
                                                                          n,
                                                                          a
                                                                        );
                                                                      },
                                                                  },
                                                                  l
                                                                );
                                                              }),
                                                          ],
                                                        }),
                                                    ],
                                                  },
                                                  a
                                                );
                                              }),
                                          }),
                                        ],
                                      },
                                      n
                                    );
                                  }),
                                }),
                              ],
                            }),
                            (0, q.BX)(b.View, {
                              className: "btn-box",
                              children: [
                                (0, q.tZ)(b.Button, {
                                  className: "btn-grey",
                                  id: "AXEW",
                                  onClick: this.resetFilter,
                                  children: "重置",
                                }),
                                (0, q.tZ)(b.Button, {
                                  className: "btn-primary",
                                  id: "AXEX",
                                  onClick: a,
                                  children: v,
                                }),
                              ],
                            }),
                          ],
                        });
                      },
                    },
                  ],
                  [
                    {
                      key: "getDerivedStateFromProps",
                      value: function (e, t) {
                        var n = t.tabOneIndex,
                          i = t.tabTwoIndex,
                          a = t.propsShow,
                          l = e.show,
                          o = e.dataSelected,
                          r = void 0 === o ? {} : o;
                        if (!a && l) {
                          var c = {
                            brandViewStr: "filter-brand-".concat(n),
                            propsShow: !0,
                          };
                          i >= 0 &&
                            (c.brandViewStr = ""
                              .concat(c.brandViewStr, "-")
                              .concat(i));
                          var u = Object.keys(r).map(function (e) {
                              return r[e];
                            }),
                            d = (0, s.Z)(u, 1)[0];
                          return (
                            (null == d ? void 0 : d.tabOneIndex) >= 0 &&
                            (d.tabOneIndex !== n || d.tabTwoIndex !== i)
                              ? ((c.tabOneIndex = d.tabOneIndex),
                                (c.brandViewStr = "filter-brand-".concat(
                                  d.tabOneIndex
                                )),
                                d.tabTwoIndex !== i &&
                                  d.tabTwoIndex >= 0 &&
                                  ((c.tabTwoIndex = d.tabTwoIndex),
                                  (c.brandViewStr = ""
                                    .concat(c.brandViewStr, "-")
                                    .concat(d.tabTwoIndex))))
                              : d ||
                                0 === n ||
                                ((c.tabOneIndex = 0),
                                (c.brandViewStr = "filter-brand-0")),
                            c
                          );
                        }
                        return a ? null : { propsShow: !1 };
                      },
                    },
                  ]
                ),
                n
              );
            })(g.default.Component),
            pe = g.default.memo(me),
            ve = g.default.memo(function (e) {
              var t = e.EventsHub,
                n = e.cityAddress,
                i = e.currentPosition,
                a = e.filterFormatted,
                l = e.filterScenariosData,
                o = e.filterSelected,
                r = e.filterTabsTitle,
                c = e.keywordInfo,
                s = e.positionSelected,
                u = e.priceStarSelected,
                d = e.scenarioName,
                h = e.screenWidth,
                f = e.screenHeight,
                m = e.sortSelected,
                p = e.totalCount,
                v = e.onCloseFilterPop,
                I = l.filterData,
                y = l.positionData,
                k = l.priceStarData,
                w = l.sortData,
                S = (0, g.useCallback)(
                  function () {
                    t.trigger(K.H9.SHOW_SCENARIO, null);
                  },
                  [t]
                );
              return (0,
              q.BX)(b.View, { children: [(null == w ? void 0 : w.data) && (0, q.tZ)(de, { show: d === K.nj[5], data: w, dataSelected: m, EventsHub: t }), (null == y ? void 0 : y.data) && (0, q.tZ)(ae, { show: d === K.nj[3], data: y, dataSelected: s, position: i, cityAddress: n, totalCount: p, EventsHub: t, confirmFilter: S, screenHeight: f }), (null == k ? void 0 : k.data) && (0, q.tZ)(ue, { show: d === K.nj[4], data: k, dataSelected: u, slipperItem: a[K.KM], screenWidth: h, totalCount: p, EventsHub: t, confirmFilter: S }), (null == I ? void 0 : I.data) && (0, q.tZ)(pe, { confirmFilter: S, data: I, dataSelected: o, EventsHub: t, keywordInfo: c, show: d === K.nj[2], tabTitle: r[2], totalCount: p, screenHeight: f }), (0, q.tZ)(b.View, { className: "filter-mask", id: "AXEZ", onClick: v, style: (0, O.LP)(d) })] });
            }),
            ge = n(96427),
            Ie = n(25949),
            ye = n.n(Ie),
            ke = n(14203),
            be = [
              K.Zi.NOTICE,
              K.Zi.NEW_GUEST,
              K.Zi.ATMOSPHERE,
              K.Zi.ADVERTISEMENT,
              K.Zi.TRAIN_TIED_CASH,
              K.Zi.MEMBER,
              K.Zi.MEMBER_EXPERIENCE,
              K.Zi.ACTIVITY,
            ],
            we =
              "https://images3.c-ctrip.com/zt/wechat/hotel/couponbannericon.png",
            Se =
              "https://images3.c-ctrip.com/ztrip/hotel/2022/5/icon-login@3x.webp",
            Ze =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/yaopin/tag_kdj@3x.webp",
            Ce =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/zhouwudacu/icon_banner_guanbi@3x.png",
            Ne = (function (e) {
              (0, m.Z)(n, e);
              var t = (0, p.Z)(n);
              function n(e) {
                var i;
                return (
                  (0, d.Z)(this, n),
                  (i = t.call(this, e)),
                  (0, v.Z)((0, f.Z)(i), "clickBannerUbtTrace", function () {
                    var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      t = (0, O.Jk)(i.props.bannerList, be),
                      n = (0, C.getCurrentPage)();
                    null != t &&
                      t.type &&
                      null != n &&
                      n.ubtTrace &&
                      n.ubtTrace(
                        208561,
                        JSON.stringify({
                          bizKey: "hotel_list_banner_click",
                          type: t.type,
                          title: t.bannerInfo.title || t.bannerInfo.content,
                          clickType: e ? "abandon" : "choose",
                        })
                      );
                  }),
                  (0, v.Z)((0, f.Z)(i), "onClickJumpBanner", function (e, t) {
                    if ((i.clickBannerUbtTrace(), t)) {
                      var n = (0, C.getCurrentPage)();
                      null != n &&
                        n.ubtTrace &&
                        n.ubtTrace(
                          184161,
                          JSON.stringify({ title: e.title, index: t })
                        );
                    }
                    e.jumpUrl &&
                      (0 === e.jumpUrl.indexOf("http")
                        ? V.Z.twebview({ data: { url: e.jumpUrl } })
                        : S().navigateTo({ url: e.jumpUrl }));
                  }),
                  (0, v.Z)((0, f.Z)(i), "onClickTipsBanner", function (e) {
                    i.clickBannerUbtTrace(),
                      e.jumpUrl
                        ? 0 === e.jumpUrl.indexOf("http")
                          ? V.Z.twebview({ data: { url: e.jumpUrl } })
                          : S().navigateTo({ url: e.jumpUrl })
                        : S().showModal({
                            title: "重要公告",
                            showCancel: !1,
                            content: e.content,
                          });
                  }),
                  (0, v.Z)((0, f.Z)(i), "onCloseBanner", function (e, t) {
                    if (
                      (e.stopPropagation(),
                      i.clickBannerUbtTrace(!0),
                      t.type === K.Zi.NEW_GUEST)
                    ) {
                      var n = (0, C.getCurrentPage)();
                      null != n &&
                        n.ubtTrace &&
                        n.ubtTrace(
                          K.oN.newGuestClose.key,
                          JSON.stringify({ bizKey: K.oN.newGuestClose.bizKey })
                        );
                    }
                    t.thresholdKey &&
                      _.jg.setAttr(t.thresholdKey, new Date().getTime()),
                      i.props.EventsHub.trigger(K.H9.CLOSE_BANNER, t.type);
                  }),
                  (0, v.Z)((0, f.Z)(i), "onClickNewGuestBanner", function (e) {
                    2 === e.status &&
                      (i.clickBannerUbtTrace(),
                      i.props.onReceiveBenefitsCoupon());
                  }),
                  (0, v.Z)((0, f.Z)(i), "getCouponInfo", function (e) {
                    var t =
                        null == e
                          ? void 0
                          : e.find(function (e) {
                              return e.type === K.Zi.COUPON;
                            }),
                      n = !!t && (0, O.Bw)(t);
                    return t && n ? t : null;
                  }),
                  i
                );
              }
              return (
                (0, h.Z)(n, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.setBannerUbtTrace(this.props.bannerList);
                    },
                  },
                  {
                    key: "shouldComponentUpdate",
                    value: function (e) {
                      var t = e.bannerList,
                        n = this.props.bannerList,
                        i = t.filter(function (e) {
                          return !!n.find(function (t) {
                            return t.type === e.type;
                          });
                        });
                      return (
                        !i.length ||
                        i.length !== t.length ||
                        t.length !== n.length
                      );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      this.setBannerUbtTrace(e.bannerList);
                    },
                  },
                  {
                    key: "setBannerUbtTrace",
                    value: function (e) {
                      var t = (0, O.Jk)(e, be);
                      null != t &&
                        t.thresholdKey &&
                        t.autoThreshold &&
                        _.jg.setAttr(t.thresholdKey, new Date().getTime());
                      var n = (0, C.getCurrentPage)();
                      if (null != t && t.type && null != n && n.ubtTrace) {
                        var i = P.default.isTieyou
                          ? "10650018760"
                          : "10650018583";
                        n.ubtTrace(
                          208560,
                          JSON.stringify({
                            bizKey: "hotel_list_banner_show",
                            type: t.type,
                            title: t.bannerInfo.title || t.bannerInfo.content,
                            pageId: i,
                          })
                        ),
                          t.type === K.Zi.TRAIN_TIED_CASH &&
                            n.ubtTrace(
                              208560,
                              JSON.stringify({
                                bizKey: "hotel_list_banner_user_show",
                                bannerType: "trnservice",
                                pageId: i,
                              })
                            );
                      }
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t,
                        n,
                        i,
                        a,
                        l,
                        o,
                        r,
                        c,
                        s,
                        u,
                        d,
                        h,
                        f,
                        m,
                        p,
                        v = this,
                        I = this.props,
                        y = I.bannerList,
                        w = I.loginBannerVisible,
                        S = I.showTagSkeleton,
                        Z = I.onClickCouponBanner,
                        C = I.onLoginWithBanner,
                        T = I.onShowCouponModal,
                        x = I.onShowExtraModal,
                        E = I.isFilterSelected,
                        D = I.reload,
                        F = (0, O.Jk)(y, be),
                        V = F.bannerInfo,
                        B = F.bannerStyle,
                        P = F.type,
                        A = "".concat(
                          5 *
                            ((null == V ||
                            null === (e = V.homeBenefitsDetailInfo) ||
                            void 0 === e
                              ? void 0
                              : e.length) -
                              1),
                          "px"
                        ),
                        L = "width:calc((100% - "
                          .concat(A, ") / ")
                          .concat(
                            null == V ||
                              null === (t = V.homeBenefitsDetailInfo) ||
                              void 0 === t
                              ? void 0
                              : t.length,
                            ")"
                          ),
                        H = (0, O.gP)(
                          null == V ? void 0 : V.endTime,
                          k()(+(null == V ? void 0 : V.endTime)).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )
                        );
                      console.log("2222222222222", y);
                      var _ = this.getCouponInfo(y);
                      return (0, q.BX)(b.View, {
                        className: "banners",
                        children: [
                          P === K.Zi.NOTICE &&
                            (0, q.BX)(b.View, {
                              className: "tips-banner banner-top",
                              id: "AXEC",
                              onClick: function () {
                                return v.onClickTipsBanner(V);
                              },
                              children: [
                                (0, q.tZ)(b.View, {
                                  className: "icon-text",
                                  children: "重要提示",
                                }),
                                (0, q.tZ)(b.View, {
                                  className: "content",
                                  children: V.content,
                                }),
                                (0, q.tZ)(b.View, {
                                  className: "close",
                                  id: "AXED",
                                  onClick: function (e) {
                                    return v.onCloseBanner(e, F);
                                  },
                                  children: (0, q.tZ)(b.Text, {
                                    className: "ifont-closed iconfont",
                                  }),
                                }),
                              ],
                            }),
                          P === K.Zi.ADVERTISEMENT &&
                            (0, q.BX)(b.View, {
                              className: "ad-banner",
                              children: [
                                (0, q.tZ)(b.Swiper, {
                                  className: "ad-banner-bd",
                                  interval: "3000",
                                  indicatorColor: "rgba(255,255,255,.4)",
                                  indicatorActiveColor: "#FFFFFF",
                                  circular: !0,
                                  autoplay: !0,
                                  children: V.map(function (e, t) {
                                    return (0, q.tZ)(
                                      b.SwiperItem,
                                      {
                                        children: (0, q.tZ)(b.Image, {
                                          className: "img",
                                          src: e.picUrl,
                                          id: "AXEE",
                                          onClick: function () {
                                            return v.onClickJumpBanner(e, t);
                                          },
                                        }),
                                      },
                                      t
                                    );
                                  }),
                                }),
                                (0, q.tZ)(b.Image, {
                                  src: Ce,
                                  className: "b-close",
                                  id: "AXEF",
                                  onClick: function (e) {
                                    return v.onCloseBanner(e, F);
                                  },
                                }),
                              ],
                            }),
                          P === K.Zi.MEMBER &&
                            (0, q.tZ)(b.View, {
                              className: "student-banner banner-top",
                              children: V.isOnlyImage
                                ? (0, q.tZ)(b.Image, {
                                    className: "full-image",
                                    mode: "widthFix",
                                    src: V.icon,
                                  })
                                : (0, q.BX)(g.default.Fragment, {
                                    children: [
                                      (0, q.tZ)(b.View, {
                                        className: "icon-wrap",
                                        children: (0, q.tZ)(b.Image, {
                                          className: "icon",
                                          src: V.icon,
                                        }),
                                      }),
                                      (0, q.BX)(b.View, {
                                        className: "content",
                                        children: [
                                          (0, q.tZ)(b.View, {
                                            className: "title",
                                            children: V.title,
                                          }),
                                          (0, q.tZ)(b.View, {
                                            className: "desc",
                                            children:
                                              null === (n = V.rights) ||
                                              void 0 === n
                                                ? void 0
                                                : n.map(function (e, t) {
                                                    return (0,
                                                    q.tZ)(b.View, { className: "right", children: e }, "right-".concat(t));
                                                  }),
                                          }),
                                        ],
                                      }),
                                      (0, q.tZ)(b.View, {
                                        className: "btn",
                                        id: "AXEG",
                                        onClick: function () {
                                          return x(V, R.fG.YOUNG);
                                        },
                                        children: "点击查看",
                                      }),
                                    ],
                                  }),
                            }),
                          [
                            K.Zi.MEMBER_EXPERIENCE,
                            K.Zi.TRAIN_TIED_CASH,
                          ].includes(P) &&
                            (0, q.tZ)(b.View, {
                              className: "banner-top member",
                              children: (0, q.BX)(b.View, {
                                className: V.bannerViewClassName,
                                style: V.bannerViewStyle,
                                children: [
                                  (0, q.tZ)(b.View, {
                                    className: "icon-wrap",
                                    children: (0, q.tZ)(b.Image, {
                                      className: "icon",
                                      style: V.bannerIconStyle,
                                      src: V.iconUrl || V.icon,
                                    }),
                                  }),
                                  (0, q.BX)(b.View, {
                                    className: "content",
                                    children: [
                                      (0, q.tZ)(b.View, {
                                        className: "title",
                                        children: V.title,
                                      }),
                                      V.desc &&
                                        (0, q.tZ)(b.View, {
                                          className: "desc",
                                          children: (0, q.tZ)(N.ZtRichText, {
                                            nodes: V.desc,
                                          }),
                                        }),
                                      (null == V ||
                                      null === (i = V.rights) ||
                                      void 0 === i
                                        ? void 0
                                        : i.length) > 0 &&
                                        (0, q.tZ)(b.View, {
                                          className: "rights-wrap",
                                          children: V.rights.map(function (
                                            e,
                                            t
                                          ) {
                                            return (0, q.tZ)(
                                              b.Text,
                                              {
                                                className: "right",
                                                children: e,
                                              },
                                              t
                                            );
                                          }),
                                        }),
                                    ],
                                  }),
                                  1 === V.state &&
                                    (0, q.tZ)(b.View, {
                                      className: "btn",
                                      children: V.buttonText,
                                    }),
                                  2 === V.state &&
                                    (0, q.tZ)(b.View, {
                                      className: "btn strong-btn",
                                      children: V.buttonText,
                                    }),
                                  V.showClose &&
                                    (0, q.tZ)(b.View, {
                                      className: "close",
                                      id: "AXEH",
                                      onClick: function (e) {
                                        return v.onCloseBanner(e, F);
                                      },
                                      children: (0, q.tZ)(b.Text, {
                                        className: "ifont-closed iconfont",
                                      }),
                                    }),
                                ],
                              }),
                            }),
                          P === K.Zi.ACTIVITY &&
                            (0, q.tZ)(b.View, {
                              className: "banner-top activity-banner",
                              children: (0, q.BX)(b.View, {
                                className: "banner-view",
                                children: [
                                  (0, q.tZ)(b.View, {
                                    className: "icon-wrap",
                                    children: (0, q.tZ)(b.Image, {
                                      className: "icon",
                                      src: we,
                                    }),
                                  }),
                                  (0, q.BX)(b.View, {
                                    className: "content",
                                    children: [
                                      (0, q.tZ)(b.View, {
                                        className: "title",
                                        children: V.title,
                                      }),
                                      (0, q.tZ)(b.View, {
                                        className: "desc",
                                        children: V.describe,
                                      }),
                                    ],
                                  }),
                                  V.jumpUrl &&
                                    (0, q.tZ)(b.View, {
                                      className: "btn",
                                      id: "AXEL",
                                      onClick: function () {
                                        return v.onClickJumpBanner(V);
                                      },
                                      children: "查看",
                                    }),
                                  (0, q.tZ)(b.View, {
                                    className: "close",
                                    id: "AXEM",
                                    onClick: function (e) {
                                      return v.onCloseBanner(e, F);
                                    },
                                    children: (0, q.tZ)(b.Text, {
                                      className: "ifont-closed iconfont",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          P === K.Zi.NEW_GUEST &&
                            !w &&
                            (0, q.BX)(b.View, {
                              className: "banner-top new-guest",
                              style: B,
                              id: "AXEN",
                              onClick: function () {
                                return v.onClickNewGuestBanner(V);
                              },
                              children: [
                                (0, q.BX)(b.View, {
                                  className: "t-wrap",
                                  children: [
                                    (0, q.tZ)(ke.Z, {
                                      className: "title",
                                      mode: "widthFix",
                                      src: V.title,
                                      inline: !0,
                                    }),
                                    (0, q.tZ)(b.View, {
                                      className: "subtitle",
                                      children: V.subTitle,
                                    }),
                                  ],
                                }),
                                (0, q.tZ)(b.View, {
                                  className: "items",
                                  children:
                                    null === (a = V.homeBenefitsDetailInfo) ||
                                    void 0 === a
                                      ? void 0
                                      : a.map(function (e, t) {
                                          return (0,
                                          q.BX)(b.View, { className: "be-item", style: L, children: [(0, q.tZ)(ke.Z, { className: "rule", mode: "widthFix", src: Ze, inline: !0 }), (0, q.BX)(b.View, { className: "value", children: [1 === e.type && (0, q.tZ)(b.View, { className: "unit", children: e.unit }), (0, q.tZ)(b.View, { className: "number".concat((0, O.gP)(!e.unit, " txt")), children: e.number }), [2,
                                                      3].includes(e.type) && (0, q.tZ)(b.View, { className: "unit", children: e.unit })] }), (0, q.tZ)(b.View, { className: "desc", children: e.desc })] }, t);
                                        }),
                                }),
                              ],
                            }),
                          w &&
                            !S &&
                            (0, q.BX)(b.View, {
                              className: "login-banner banner-top",
                              children: [
                                (0, q.tZ)(ke.Z, {
                                  className: "icon",
                                  src: Se,
                                  inline: !0,
                                }),
                                (0, q.BX)(b.View, {
                                  className: "content",
                                  children: [
                                    (0, q.tZ)(b.View, {
                                      className: "title",
                                      children: "登录解锁超值低价！",
                                    }),
                                    (0, q.tZ)(b.View, {
                                      className: "subtit",
                                      children:
                                        "新客5折起, 买贵必赔, 超多优惠福利等你领",
                                    }),
                                  ],
                                }),
                                (0, q.tZ)(b.View, {
                                  className: "btn",
                                  id: "AXEO",
                                  onClick: C,
                                  children: "去登录",
                                }),
                              ],
                            }),
                          P === K.Zi.ATMOSPHERE &&
                            (0, q.BX)(b.View, {
                              className: "banner-top picture",
                              style: B,
                              children: [
                                (0, q.tZ)(b.Image, {
                                  src: Ce,
                                  className: "b-close",
                                  id: "AXEP",
                                  onClick: function (e) {
                                    return v.onCloseBanner(e, F);
                                  },
                                }),
                                H &&
                                  (0, q.BX)(b.View, {
                                    className: "count-down-wrap",
                                    children: [
                                      (0, q.tZ)(b.Text, {
                                        className: "prefix",
                                        children: "距结束",
                                      }),
                                      (0, q.tZ)(N.ZtCountdown, {
                                        className: "end-time",
                                        endTime: H,
                                        onTimeup: D,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          _ &&
                            !w &&
                            (0, q.tZ)(b.View, {
                              className: ye()(
                                "banner-top coupon-banner",
                                P ? "mt-20" : ""
                              ),
                              children: (0, q.BX)(b.View, {
                                className: "banner-view",
                                id: "AXEI",
                                onClick: function () {
                                  return Z(null == _ ? void 0 : _.bannerInfo);
                                },
                                children: [
                                  (0, q.tZ)(b.View, {
                                    className: "icon-wrap small",
                                    children: (0, q.tZ)(b.Image, {
                                      className: "icon",
                                      src:
                                        null == _ ||
                                        null === (l = _.bannerInfo) ||
                                        void 0 === l
                                          ? void 0
                                          : l.icon,
                                    }),
                                  }),
                                  (0, q.BX)(b.View, {
                                    className: "content",
                                    children: [
                                      (null == _ ||
                                      null === (o = _.bannerInfo) ||
                                      void 0 === o
                                        ? void 0
                                        : o.content) &&
                                        (0, q.tZ)(b.View, {
                                          className: "title",
                                          children: (0, q.tZ)(N.ZtRichText, {
                                            nodes:
                                              null == _ ||
                                              null === (r = _.bannerInfo) ||
                                              void 0 === r
                                                ? void 0
                                                : r.content,
                                          }),
                                        }),
                                      (null == _ ||
                                      null === (c = _.bannerInfo) ||
                                      void 0 === c
                                        ? void 0
                                        : c.desc) &&
                                        (0, q.tZ)(b.View, {
                                          className: "desc",
                                          children: (0, q.tZ)(N.ZtRichText, {
                                            nodes:
                                              null == _ ||
                                              null === (s = _.bannerInfo) ||
                                              void 0 === s
                                                ? void 0
                                                : s.desc,
                                          }),
                                        }),
                                      null == _ ||
                                      null === (u = _.bannerInfo) ||
                                      void 0 === u ||
                                      null === (d = u.tagList) ||
                                      void 0 === d
                                        ? void 0
                                        : d.map(function (e, t) {
                                            return (0,
                                            q.tZ)(b.View, { className: "new-guest-tag", children: e }, "new-guest-".concat(t));
                                          }),
                                    ],
                                  }),
                                  "receiveCoupon" ===
                                    (null == _ ||
                                    null === (h = _.bannerInfo) ||
                                    void 0 === h
                                      ? void 0
                                      : h.action) &&
                                    (0, q.tZ)(b.View, {
                                      className: "btn",
                                      id: "AXEJ",
                                      onClick: T,
                                      children: "点击领取",
                                    }),
                                  (null == _ ||
                                  null === (f = _.bannerInfo) ||
                                  void 0 === f
                                    ? void 0
                                    : f.action) === K.En &&
                                    (0, q.tZ)(b.View, {
                                      className: "btn",
                                      children: E ? "取消筛选" : "筛选酒店",
                                    }),
                                  (null == _ ||
                                  null === (m = _.bannerInfo) ||
                                  void 0 === m
                                    ? void 0
                                    : m.rightTitle) &&
                                    (0, q.tZ)(b.View, {
                                      className: "right-title",
                                      children:
                                        null == _ ||
                                        null === (p = _.bannerInfo) ||
                                        void 0 === p
                                          ? void 0
                                          : p.rightTitle,
                                    }),
                                  (0, q.tZ)(b.View, {
                                    className: "close",
                                    id: "AXEK",
                                    onClick: function (e) {
                                      return v.onCloseBanner(e, _);
                                    },
                                    children: (0, q.tZ)(b.Text, {
                                      className: "ifont-closed iconfont",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                        ],
                      });
                    },
                  },
                ]),
                n
              );
            })(g.default.Component),
            Te = g.default.memo(Ne),
            xe =
              "https://images3.c-ctrip.com/ztrip/hotel/202109/popup_bg@3x.png",
            Ee =
              "https://images3.c-ctrip.com/zt/wechat/hotel/pricedetailclose.png",
            De = g.default.memo(function (e) {
              var t,
                n = e.visible,
                i = e.modalInfo,
                a = e.onClose,
                l = (0, O.gP)(n, "visible", "hidden"),
                o = "young-modal ".concat(l);
              return (0, q.BX)(g.default.Fragment, {
                children: [
                  n &&
                    (0, q.tZ)(b.View, {
                      className: "shade-box",
                      id: "AXEl",
                      onClick: a,
                    }),
                  (0, q.BX)(b.View, {
                    className: o,
                    children: [
                      (0, q.tZ)(b.View, {
                        className: "linear-bg",
                        children: (0, q.tZ)(b.Image, {
                          className: "title-bg",
                          src: xe,
                        }),
                      }),
                      (0, q.tZ)(b.Image, {
                        src: Ee,
                        className: "close",
                        id: "AXEm",
                        onClick: a,
                      }),
                      (0, q.BX)(b.View, {
                        className: "block-ctn",
                        children: [
                          (0, q.tZ)(b.View, {
                            className: "title",
                            children: (0, q.tZ)(b.View, {
                              className: "txt",
                              children: "青年卡专享优惠",
                            }),
                          }),
                          (0, q.tZ)(b.View, {
                            className: "content",
                            children:
                              null == i ||
                              null === (t = i.rightDescs) ||
                              void 0 === t
                                ? void 0
                                : t.map(function (e, t) {
                                    var n, i, a;
                                    return (0, q.BX)(
                                      b.View,
                                      {
                                        className: "image-item",
                                        children: [
                                          (0, q.BX)(b.View, {
                                            className: "u-title",
                                            children: [t + 1, ".", e.title],
                                          }),
                                          null === (n = e.descsNew) ||
                                          void 0 === n
                                            ? void 0
                                            : n.map(function (n, i) {
                                                var a;
                                                return (0,
                                                q.BX)(b.View, { className: "subitem".concat((0, O.gP)(i === e.descsNew.length - 1, " last")), children: [(0, q.tZ)(b.View, { className: "u-desc", children: null === (a = n.descs) || void 0 === a ? void 0 : a.join("") }), (0, q.tZ)(b.View, { className: "u-img", children: (0, q.tZ)(b.Image, { src: n.img, className: "prompt-img", mode: "widthFix" }) })] }, "".concat(t, "_").concat(i));
                                              }),
                                          !(
                                            null !== (i = e.descsNew) &&
                                            void 0 !== i &&
                                            i.length
                                          ) &&
                                            (0, q.BX)(g.default.Fragment, {
                                              children: [
                                                (0, q.tZ)(b.View, {
                                                  className: "u-desc",
                                                  children:
                                                    null === (a = e.descs) ||
                                                    void 0 === a
                                                      ? void 0
                                                      : a.join(""),
                                                }),
                                                (0, q.tZ)(b.View, {
                                                  className: "u-img",
                                                  children: (0, q.tZ)(b.Image, {
                                                    src: e.img,
                                                    className: "prompt-img",
                                                    mode: "widthFix",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          (0, q.tZ)(b.View, {
                                            className: "u-bottom-desc",
                                            children: (0, q.tZ)(b.Text, {
                                              children: e.bottomDesc,
                                            }),
                                          }),
                                        ],
                                      },
                                      "right-desc-".concat(t)
                                    );
                                  }),
                          }),
                        ],
                      }),
                      (0, q.tZ)(b.View, {
                        className: "btn-ctn",
                        children: (0, q.tZ)(b.View, {
                          className: "btn",
                          id: "AXEn",
                          onClick: a,
                          children: "立即预订",
                        }),
                      }),
                    ],
                  }),
                ],
              });
            }),
            Fe = n(56819),
            Ve = (0, O.gP)(P.default.isTieyou, "img-blank-ty", "img-blank-zx"),
            Be = "https://images3.c-ctrip.com/zt/wechat/".concat(Ve, ".png"),
            Pe = "https://images3.c-ctrip.com/ztrip/hotel/loading.gif",
            Ae = function () {
              return (0, q.tZ)(b.View, {
                onTouchMove: function () {},
                children: [0, 1, 2, 3, 4, 5, 6].map(function (e, t) {
                  return (0,
                  q.BX)(b.View, { className: "skeleton-item", children: [(0, q.tZ)(b.View, { className: "left", children: (0, q.tZ)(b.View, { className: "image" }) }), (0, q.BX)(b.View, { className: "right", children: [(0, q.tZ)(b.View, { className: "title" }), (0, q.tZ)(b.View, { className: "desc" }), (0, q.tZ)(b.View, { className: "desc2" }), (0, q.BX)(b.View, { className: "bottom", children: [(0, q.tZ)(b.View, { className: "price" }), (0, q.tZ)(b.View, { className: "discount" })] })] })] }, t);
                }),
              });
            },
            Le = function (e) {
              var t = e.hotelRankingListInfo,
                n = t.title,
                i = t.jumpUrl,
                a = t.hotelRankCategoryList,
                l = e.onClickRankMore,
                o = e.toRankList,
                r = "list-rank ".concat(P.default.zxTyStr),
                c = (0, O.gP)(1 === (null == a ? void 0 : a.length), " line"),
                s = "lst".concat(c),
                u = (0, C.getCurrentPage)(),
                d = (0, g.useCallback)(
                  function (e) {
                    e.jumpUrl && o(e.jumpUrl),
                      null != u &&
                        u.ubtTrace &&
                        u.ubtTrace(208561, {
                          bizKey: "hotel_list_recommendlist_click",
                          pageId: P.default.isTieyou
                            ? "10650018760"
                            : "10650018583",
                          rankId: e.rankId,
                        });
                  },
                  [o, u]
                );
              return (
                (0, g.useEffect)(
                  function () {
                    null != a &&
                      a.length &&
                      null != u &&
                      u.ubtTrace &&
                      u.ubtTrace(208560, {
                        bizKey: "hotel_list_recommendlist_show",
                        pageId: P.default.isTieyou
                          ? "10650018760"
                          : "10650018583",
                      });
                  },
                  [u, a]
                ),
                (0, q.BX)(b.View, {
                  className: r,
                  children: [
                    (0, q.BX)(b.View, {
                      className: "title",
                      children: [
                        (0, q.tZ)(b.View, { className: "name", children: n }),
                        i &&
                          (0, q.BX)(b.View, {
                            className: "arr",
                            id: "AXEd",
                            onClick: function () {
                              return l(i);
                            },
                            children: [
                              (0, q.tZ)(b.Text, {
                                className: "color-primary",
                                children: "更多榜单",
                              }),
                              (0, q.tZ)(b.Text, {
                                className: "ifont-arr iconfont color-primary",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (null == a ? void 0 : a.length) > 0 &&
                      (0, q.tZ)(b.View, {
                        className: "rank-card",
                        children:
                          null == a
                            ? void 0
                            : a.map(function (e, t) {
                                return (0, q.BX)(
                                  b.View,
                                  {
                                    className: s,
                                    id: "AXEe",
                                    onClick: function () {
                                      return d(e);
                                    },
                                    style: "background-image: url(".concat(
                                      e.imageUrl,
                                      ");"
                                    ),
                                    children: [
                                      (0, q.tZ)(b.View, { className: "image" }),
                                      (0, q.tZ)(b.View, {
                                        className: "tit",
                                        children: e.title,
                                      }),
                                      (0, q.tZ)(b.View, {
                                        className: "txt",
                                        children: "“".concat(
                                          e.description,
                                          "”"
                                        ),
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                      }),
                  ],
                })
              );
            },
            He = (function (e) {
              (0, m.Z)(n, e);
              var t = (0, p.Z)(n);
              function n(e) {
                var i;
                return (
                  (0, d.Z)(this, n),
                  ((i = t.call(this, e)).state = {
                    boxHeight: "100%",
                    modalName: null,
                    modalInfo: null,
                    tonightSaleTime: {},
                  }),
                  i
                );
              }
              return (
                (0, h.Z)(n, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e,
                        t = this;
                      P.default.isAlipay &&
                        S()
                          .createSelectorQuery()
                          .select("#hotel-box")
                          .boundingClientRect()
                          .exec(function (e) {
                            var n = (0, s.Z)(e, 1)[0];
                            null != n &&
                              n.height &&
                              t.setState({
                                boxHeight: "".concat(
                                  null == n ? void 0 : n.height,
                                  "px"
                                ),
                              });
                          }),
                        P.default.isWechat &&
                          (null === (e = this.props.EventsHub) ||
                            void 0 === e ||
                            e.on(K.H9.TONIGHT_TIME, function (e) {
                              t.setState({ tonightSaleTime: e });
                            }));
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      var e;
                      null === (e = this.props.EventsHub) ||
                        void 0 === e ||
                        e.off(K.H9.TONIGHT_TIME);
                    },
                  },
                  {
                    key: "onClickHotFilter",
                    value: function (e) {
                      this.props.EventsHub.trigger(K.H9.RESET_ALL, e);
                    },
                  },
                  {
                    key: "onClickMoreHotFilter",
                    value: function () {
                      this.props.EventsHub.trigger(
                        K.H9.SHOW_SCENARIO,
                        "位置区域"
                      ),
                        this.props.EventsHub.trigger(K.H9.HOT_POSITION);
                    },
                  },
                  {
                    key: "onClickRankMore",
                    value: function () {
                      var e = this.props.hotelRankingListInfo;
                      if (e.jumpUrl) {
                        var t = "&titleBgColor="
                          .concat(encodeURIComponent("#ffffff"), "&titleColor=")
                          .concat(encodeURIComponent("#000000"));
                        V.Z.twebview({
                          data: { url: "".concat(e.jumpUrl).concat(t) },
                        });
                      }
                    },
                  },
                  {
                    key: "onClearFilterItem",
                    value: function (e) {
                      this.props.EventsHub.trigger(K.H9.CLEAR_FILTER_ITEM, e);
                    },
                  },
                  {
                    key: "onClearFilters",
                    value: function () {
                      this.props.EventsHub.trigger(K.H9.RESET_ALL);
                    },
                  },
                  { key: "changeHotLocation", value: function () {} },
                  {
                    key: "toRankList",
                    value: function (e) {
                      V.Z.twebview({ data: { url: e } });
                    },
                  },
                  {
                    key: "onCloseExtraModal",
                    value: function () {
                      this.setState({ modalInfo: null, modalName: null });
                    },
                  },
                  {
                    key: "onShowPriceModal",
                    value: function (e) {
                      var t,
                        n,
                        i = e.hotelStatus;
                      this.props.loginBannerVisible ||
                        0 !== i ||
                        this.setState({
                          modalInfo: {
                            hotel: e,
                            priceInfo: null == e ? void 0 : e.priceInfo,
                            price:
                              e.priceInfo.discountPrice ||
                              e.priceInfo.salePrice,
                            totalPrice:
                              e.priceInfo.couponSalePrice ||
                              e.priceInfo.salePrice,
                            discountList: e.promotionDetailList,
                            maskInfo: e.priceInfo.maskTag,
                            hotelTypeName:
                              null == e ||
                              null === (t = e.hotelExtraInfo) ||
                              void 0 === t ||
                              null === (n = t.minRoomDataInfo) ||
                              void 0 === n
                                ? void 0
                                : n.minPriceRoomName,
                          },
                          modalName: R.fG.PRICE,
                        });
                    },
                  },
                  {
                    key: "onShowExtraModal",
                    value: function (e, t) {
                      this.setState({ modalInfo: e, modalName: t });
                    },
                  },
                  {
                    key: "onComfirmPriceModal",
                    value: function (e) {
                      this.props.onComfirmPriceModal(e),
                        this.onCloseExtraModal();
                    },
                  },
                  {
                    key: "_renderHotelListItem",
                    value: function (e, t, n) {
                      var i,
                        a = this,
                        l = this.state.tonightSaleTime,
                        o = this.props,
                        r = o.EventsHub,
                        c = o.pageId,
                        s = o.toHotelDetail,
                        u =
                          !(null != l && l.stop) &&
                          e.tonightEndTime &&
                          !(
                            null !== (i = e.priceInfo) &&
                            void 0 !== i &&
                            i.priceExtraDatas
                          );
                      return P.default.isWechat
                        ? (0, q.tZ)("hotel-list-item", {
                            hotel: e,
                            itemType: n,
                            onToHotelDetail: function () {
                              return s(t, n);
                            },
                            onShowPriceModal: function () {
                              return a.onShowPriceModal(e);
                            },
                            bindShowPriceModal: !0,
                            bindToHotelDetail: !0,
                          })
                        : (0, q.tZ)(Fe.Z, {
                            EventsHub: r,
                            hotel: e,
                            index: t,
                            pageId: c,
                            itemType: n,
                            showTonightTime: u,
                            tonightSaleTime: l,
                            toHotelDetail: function () {
                              return s(t, n);
                            },
                            showPriceModal: function () {
                              return a.onShowPriceModal(e);
                            },
                          });
                    },
                  },
                  {
                    key: "_renderRecommendWrap",
                    value: function () {
                      var e = this,
                        t = this.props,
                        n = t.hotelList,
                        i = t.loadingState,
                        a = t.nextPageTips,
                        l = t.recommendList,
                        o = t.unrecommended,
                        r = t.unrecommendedFilters,
                        c =
                          (null == n ? void 0 : n.length) > 0
                            ? "相关酒店较少"
                            : "未找到符合条件的酒店";
                      return (0, q.BX)(g.default.Fragment, {
                        children: [
                          o &&
                            (null == r ? void 0 : r.length) > 0 &&
                            l.length > 0 &&
                            (0, q.BX)(b.View, {
                              className: "sel-recomd",
                              children: [
                                (0, q.BX)(b.View, {
                                  className: "sel-recomd-hd",
                                  children: [
                                    (0, q.tZ)(b.Icon, {
                                      className: "icon-search",
                                    }),
                                    (0, q.BX)(b.View, {
                                      className: "search-txt",
                                      children: [
                                        (0, q.tZ)(b.View, {
                                          className: "tit",
                                          children: c,
                                        }),
                                        (0, q.BX)(b.View, {
                                          className: "txt",
                                          children: [
                                            "建议修改查找条件或 ",
                                            (0, q.tZ)(b.Text, {
                                              className: "underline",
                                              id: "AXEf",
                                              onClick: function () {
                                                return e.onClearFilters();
                                              },
                                              children: "重置筛选",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, q.tZ)(b.View, {
                                  className: "sel-recomd-tag",
                                  children:
                                    null == r
                                      ? void 0
                                      : r.map(function (t, n) {
                                          return (0, q.BX)(
                                            b.View,
                                            {
                                              className: "lst",
                                              id: "AXEg",
                                              onClick: function () {
                                                return e.onClearFilterItem(t);
                                              },
                                              children: [
                                                t.data.title,
                                                " ",
                                                (0, q.tZ)(b.Text, {
                                                  className:
                                                    "ifont-clear iconfont",
                                                }),
                                              ],
                                            },
                                            n
                                          );
                                        }),
                                }),
                              ],
                            }),
                          o &&
                            !l.length &&
                            a &&
                            (0, q.BX)(b.View, {
                              className: "next-loading",
                              children: [
                                4 !== i &&
                                  (0, q.tZ)(b.Image, {
                                    className: "img",
                                    src: Pe,
                                  }),
                                (0, q.tZ)(b.Text, {
                                  className: "tips",
                                  children: a,
                                }),
                              ],
                            }),
                          (null == l ? void 0 : l.length) > 0 &&
                            (0, q.tZ)(b.View, {
                              className: "sel-recomd-list",
                              children: (0, q.BX)(b.View, {
                                className: "sel-recomd-list-hd",
                                children: [
                                  (0, q.tZ)(b.Icon, {
                                    className: "icon-hotel",
                                  }),
                                  (0, q.tZ)(b.View, {
                                    className: "cont",
                                    children: "您可能对以下酒店感兴趣",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      });
                    },
                  },
                  {
                    key: "onRenderTop",
                    value: function () {
                      var e = this,
                        t = this.props,
                        n = t.EventsHub,
                        i = t.reload,
                        a = t.hotelList,
                        l = t.isEconomic,
                        o = t.listSpecialFromPages,
                        r = t.loadingState,
                        c = t.loginBannerVisible,
                        s = t.recommendList,
                        d = t.showTagSkeleton,
                        h = t.topBanners,
                        f = t.filterAllSelected,
                        m = t.quickFilterSelected,
                        p = t.unrecommended,
                        v = t.onClickCouponBanner,
                        I = t.onCloseLoginBanner,
                        y = t.onHideCouponModal,
                        k = t.onLoginWithBanner,
                        w = t.onReceiveBenefitsCoupon,
                        S = t.onShowCouponModal,
                        Z = [].concat((0, u.Z)(f), (0, u.Z)(m)),
                        C = !1;
                      null == h ||
                        !h.find(function (e) {
                          var t;
                          return (
                            (null === (t = e.bannerInfo) || void 0 === t
                              ? void 0
                              : t.action) === K.En
                          );
                        }) ||
                        (C = !!(null == Z
                          ? void 0
                          : Z.find(function (e) {
                              var t;
                              return (
                                (null === (t = e.data) || void 0 === t
                                  ? void 0
                                  : t.filterID) === K.M_
                              );
                            })));
                      var N = p && (null == s ? void 0 : s.length) > 0;
                      return (0, q.BX)(g.default.Fragment, {
                        children: [
                          !l &&
                            (0, q.tZ)(Te, {
                              EventsHub: n,
                              bannerList: h,
                              loginBannerVisible: c,
                              showTagSkeleton: d,
                              isFilterSelected: C,
                              listSpecialFromPages: o,
                              onClickCouponBanner: v,
                              onCloseLoginBanner: I,
                              onHideCouponModal: y,
                              onLoginWithBanner: k,
                              onReceiveBenefitsCoupon: w,
                              onShowCouponModal: S,
                              onShowExtraModal: function (t, n) {
                                return e.onShowExtraModal(t, n);
                              },
                              reload: i,
                            }),
                          3 === r &&
                            (0, q.BX)(b.View, {
                              className: "page-blank-bd",
                              children: [
                                (0, q.tZ)(b.Image, {
                                  src: Be,
                                  className: "img-blank",
                                }),
                                (0, q.tZ)(b.View, {
                                  className: "txt",
                                  children:
                                    "当前网络不给力，请刷新当前页面重试",
                                }),
                                (0, q.tZ)(b.Button, {
                                  className: "btn-reload btn-primary",
                                  id: "AXEh",
                                  onClick: function () {
                                    return i();
                                  },
                                  children: "重新加载",
                                }),
                              ],
                            }),
                          N &&
                            a.map(function (t, n) {
                              return e._renderHotelListItem(t, n, "normal");
                            }),
                          N && this._renderRecommendWrap(),
                        ],
                      });
                    },
                  },
                  {
                    key: "onRenderHotelItem",
                    value: function (e, t) {
                      var n = this,
                        i = this.props,
                        a = i.QueryInstance,
                        l = i.cityName,
                        o = i.hotFilterList,
                        r = i.hotelList,
                        c = i.hotelRankingListInfo,
                        s = i.keywordInfo,
                        u = i.loadingState,
                        d = i.locationHotList,
                        h = i.nextPageTips,
                        f = i.recommendList,
                        m = i.unrecommended,
                        p = ((null == a ? void 0 : a.get()) || {}).pageSize,
                        v = (0, O.gP)(d.length < 6, "scroll", "twoline"),
                        g = d.length < 6 || t < 6 ? d.length : 0,
                        I = d.slice(0, g),
                        y = (0, O.gP)(m, "recommend", "normal"),
                        k = m ? f : r,
                        w = o && o[3] ? "two" : "one",
                        S = "list-hot ".concat(w),
                        Z = 7 === t && (null == o ? void 0 : o.length) > 0,
                        C =
                          (null == c ? void 0 : c.hotelRankCategoryList) &&
                          t === c.index - 2;
                      return (0, q.BX)(
                        b.View,
                        {
                          children: [
                            (null == k ? void 0 : k.length) > 0 &&
                              this._renderHotelListItem(e, t, y),
                            Z &&
                              3 !== u &&
                              (0, q.BX)(b.View, {
                                className: S,
                                children: [
                                  (0, q.BX)(b.View, {
                                    className: "title",
                                    children: [
                                      (0, q.BX)(b.View, {
                                        className: "name",
                                        children: [l, "热门住宿区域"],
                                      }),
                                      (0, q.BX)(b.View, {
                                        className: "right",
                                        id: "AXEi",
                                        onClick: function () {
                                          return n.onClickMoreHotFilter();
                                        },
                                        children: [
                                          (0, q.tZ)(b.Text, {
                                            className: "txt color-primary",
                                            children: "更多",
                                          }),
                                          (0, q.tZ)(b.Text, {
                                            className:
                                              "ifont-arr iconfont color-primary",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, q.tZ)(b.View, {
                                    className: "list-card",
                                    children: o.map(function (e, t) {
                                      return (0, q.BX)(
                                        b.View,
                                        {
                                          className: "hot-item",
                                          id: "AXEj",
                                          onClick: function () {
                                            return n.onClickHotFilter(e);
                                          },
                                          children: [
                                            (0, q.tZ)(b.View, {
                                              className: "name",
                                              children: e.data.title,
                                            }),
                                            (0, q.tZ)(b.View, {
                                              className: "desc",
                                              children: (0, q.tZ)(
                                                N.ZtRichText,
                                                {
                                                  nodes: (0, O.xC)(
                                                    e.extra.subTitle
                                                  ),
                                                }
                                              ),
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            C &&
                              (0, q.tZ)(Le, {
                                hotelRankingListInfo: c,
                                onClickRankMore: function () {
                                  return n.onClickRankMore();
                                },
                                toRankList: function (e) {
                                  return n.toRankList(e);
                                },
                              }),
                            t === p &&
                              (null == d ? void 0 : d.length) > 0 &&
                              s &&
                              !s.displayText &&
                              (0, q.BX)(b.View, {
                                className: "everybody-watch",
                                children: [
                                  (0, q.tZ)(b.View, {
                                    className: "tit",
                                    children: "大家都在看",
                                  }),
                                  (0, q.tZ)(b.View, {
                                    className: "everybody-watch-bd ".concat(v),
                                    children: I.map(function (e, t) {
                                      return (0, q.BX)(
                                        b.View,
                                        {
                                          className: "lst",
                                          id: "AXEk",
                                          onClick: function () {
                                            return n.changeHotLocation();
                                          },
                                          children: [
                                            (0, q.tZ)(b.View, {
                                              className: "strong",
                                              children: e.displayName,
                                            }),
                                            (0, q.tZ)(b.View, {
                                              className: "txt",
                                              children: (0, q.tZ)(
                                                N.ZtRichText,
                                                { nodes: e.userSelection }
                                              ),
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            t === k.length - 1 &&
                              (0, q.BX)(b.View, {
                                className: "next-loading",
                                children: [
                                  4 !== u &&
                                    (0, q.tZ)(b.Image, {
                                      className: "img",
                                      src: Pe,
                                    }),
                                  (0, q.tZ)(b.Text, {
                                    className: "tips",
                                    children: h,
                                  }),
                                ],
                              }),
                          ],
                        },
                        t
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        n = t.QueryInstance,
                        i = t.hotelList,
                        a = t.recommendList,
                        l = t.showSkeleton,
                        o = t.scrollToTop,
                        r = t.unrecommended,
                        c = t.getNextPageHotelList,
                        s = t.onGetScrollData,
                        u = t.date,
                        d = t.memberInfo,
                        h = t.roomNumber,
                        f = this.state,
                        m = f.boxHeight,
                        p = f.modalInfo,
                        v = f.modalName,
                        I = (null == n ? void 0 : n.get()) || {},
                        y = I.pageSize,
                        k = I.index,
                        w = r ? a : i,
                        S = { onScrollToLower: c, lowerThreshold: 70 },
                        Z = (0, F.vc)({
                          checkInDate: null == u ? void 0 : u.checkInDate,
                          checkOutDate: null == u ? void 0 : u.checkOutDate,
                        }),
                        C = "hotel-sel-list ".concat(P.default.zxTyStr),
                        T = "height: ".concat(m);
                      return (0, q.BX)(g.default.Fragment, {
                        children: [
                          (0, q.BX)(b.View, {
                            className: "hotel-box",
                            id: "hotel-box",
                            children: [
                              l && (0, q.tZ)(Ae, {}),
                              !l &&
                                (0, q.tZ)(N.ZtVirtualList, {
                                  autoScrollTop: o,
                                  className: C,
                                  listType: "multi",
                                  list: w,
                                  pageNum: k,
                                  scrollViewProps: S,
                                  segmentNum: y,
                                  style: T,
                                  onGetScrollData: s,
                                  onRender: function (t, n) {
                                    return e.onRenderHotelItem(t, n);
                                  },
                                  onRenderTop: function () {
                                    return e.onRenderTop();
                                  },
                                }),
                            ],
                          }),
                          (0, q.BX)(b.View, {
                            className: "extra-modals",
                            children: [
                              (0, q.tZ)(ge.Z, {
                                visible: v === R.fG.PRICE,
                                modalInfo: p,
                                date: Z,
                                memberInfo: d,
                                roomNumber: h,
                                onClose: function () {
                                  return e.onCloseExtraModal();
                                },
                                onComfirm: function (t) {
                                  return e.onComfirmPriceModal(t);
                                },
                              }),
                              (0, q.tZ)(De, {
                                visible: v === R.fG.YOUNG,
                                modalInfo: p,
                                onClose: function () {
                                  return e.onCloseExtraModal();
                                },
                              }),
                            ],
                          }),
                        ],
                      });
                    },
                  },
                ]),
                n
              );
            })(g.default.Component),
            Oe = "LIST_FLOAT",
            Re =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/0yuanzhu/0yuanzhu_dumiao.webp",
            _e =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/zhouwudacu/icon_banner_guanbi@3x.png",
            Xe = g.default.memo(function (e) {
              var t = e.isFreeRoomActivity,
                n = e.isScrolling,
                i = e.bookDelayInfo,
                a = e.onActivityFloatClick,
                l = e.pageId,
                o = S().getStorageSync(Oe),
                r = new Date().getDay() !== +o,
                c = (0, g.useState)(0),
                u = (0, s.Z)(c, 2),
                d = u[0],
                h = u[1],
                f = (0, g.useState)(r),
                m = (0, s.Z)(f, 2),
                p = m[0],
                v = m[1],
                I = t || ((null == i ? void 0 : i.iconImg) && p),
                y = 15 === d ? "完成" : "".concat(d, "S"),
                k = !t && (null == i ? void 0 : i.iconImg) && p,
                w = "item free-room".concat((0, O.gP)(n, " scrolling")),
                Z = "icon".concat(
                  (0, O.gP)(0 === (null == i ? void 0 : i.type), " exam")
                ),
                N = (0, g.useCallback)(function () {
                  v(!1), S().setStorageSync(Oe, new Date().getDay());
                }, []);
              return (
                (0, g.useEffect)(
                  function () {
                    var e;
                    if (
                      (k &&
                        0 === (null == i ? void 0 : i.type) &&
                        (null === (e = (0, C.getCurrentPage)()) ||
                          void 0 === e ||
                          e.ubtTrace(222828, { PageId: l })),
                      t)
                    ) {
                      var n = 0,
                        a = setInterval(function () {
                          (n += 1) <= 15 ? h(n) : clearInterval(a);
                        }, 1e3);
                      return function () {
                        clearInterval(a);
                      };
                    }
                  },
                  [k, i, l, t]
                ),
                (0, q.tZ)(b.View, {
                  className: "floats",
                  children: (0, q.BX)(b.View, {
                    className: w,
                    children: [
                      I &&
                        (0, q.tZ)(b.Image, {
                          src: _e,
                          className: "close",
                          id: "AXEa",
                          onClick: N,
                        }),
                      t &&
                        (0, q.BX)(g.default.Fragment, {
                          children: [
                            (0, q.tZ)(b.Image, {
                              src: Re,
                              className: "icon",
                              mode: "widthFix",
                              webp: !0,
                            }),
                            (0, q.tZ)(b.Text, {
                              className: "status",
                              children: y,
                            }),
                          ],
                        }),
                      k &&
                        (0, q.tZ)(b.Image, {
                          className: Z,
                          src: i.iconImg,
                          id: "AXEb",
                          onClick: a,
                          mode: "widthFix",
                          webp: !0,
                        }),
                    ],
                  }),
                })
              );
            }),
            Me = n(48882),
            Ue = n(47885),
            Ge = [
              R.fG.COUPON,
              R.fG.BARGAIN,
              R.fG.ACTIVITY,
              R.fG.HOME_WINDOW,
              R.fG.MEMBER,
            ],
            Ke = {
              couponStatusBtn: {
                1: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/kaoshenjia/kaoyanrili/anniu-lingqu@3x.png",
                2: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/kaoshenjia/kaoyanrili/anniu-yilingqu@3x.png",
              },
            },
            qe = (function (e) {
              (0, m.Z)(n, e);
              var t = (0, p.Z)(n);
              function n(e) {
                return (0, d.Z)(this, n), t.call(this, e);
              }
              return (
                (0, h.Z)(n, [
                  {
                    key: "shouldComponentUpdate",
                    value: function (e) {
                      var t = e.visibleModals,
                        n = this.props.visibleModals,
                        i = t.filter(function (e) {
                          var t = n.find(function (t) {
                            return t.type === e.type;
                          });
                          return (
                            (null == t ? void 0 : t.thresholdKey) ===
                            e.thresholdKey
                          );
                        });
                      return (
                        !i.length ||
                        i.length !== t.length ||
                        t.length !== n.length
                      );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function () {
                      var e,
                        t,
                        n,
                        i,
                        a,
                        l = this.props,
                        o = l.visibleModals,
                        r = l.bookDelayInfo,
                        c = l.pageId,
                        s = (0, O.Jk)(o, Ge);
                      null != s &&
                        s.thresholdKey &&
                        (s.autoThreshold || s.thresholdValue) &&
                        _.jg.setAttr(s.thresholdKey, new Date().getTime()),
                        (null == s ? void 0 : s.type) === R.fG.HOME_WINDOW &&
                          _.jg.setAttr(
                            B.Z.THRESHOLD_KEY.HOME_WINDOW,
                            new Date().getTime()
                          ),
                        (null == s ? void 0 : s.type) === R.fG.ACTIVITY &&
                          0 === (null == r ? void 0 : r.type) &&
                          (null === (t = (0, C.getCurrentPage)()) ||
                            void 0 === t ||
                            t.ubtTrace(222838, { PageId: c })),
                        (null == s ? void 0 : s.type) === R.fG.BARGAIN &&
                          (null === (n = (0, C.getCurrentPage)()) ||
                            void 0 === n ||
                            n.ubtTrace(222801, { PageId: c })),
                        (null == s ? void 0 : s.type) === R.fG.HOME_WINDOW &&
                          (("trainUser" !==
                            (null == s ? void 0 : s.modalInfo.windowCode) &&
                            "flightUser" !==
                              (null == s ? void 0 : s.modalInfo.windowCode)) ||
                            null === (i = (0, C.getCurrentPage)()) ||
                            void 0 === i ||
                            i.ubtTrace(222831, { PageId: c })),
                        (null == s ? void 0 : s.type) === R.fG.COUPON &&
                          null != s &&
                          s.isActivityConfig &&
                          1 ===
                            (null == s ||
                            null === (e = s.modalInfo) ||
                            void 0 === e
                              ? void 0
                              : e.popId) &&
                          (null === (a = (0, C.getCurrentPage)()) ||
                            void 0 === a ||
                            a.ubtTrace(243252, { PageId: c })),
                        null != s && s.type && this.props.onSetShowNewModal();
                    },
                  },
                  {
                    key: "onReceiveCoupon",
                    value: function (e, t) {
                      var n, i;
                      1 ===
                        (null == e || null === (n = e.coupon) || void 0 === n
                          ? void 0
                          : n.status) &&
                        (null === (i = (0, C.getCurrentPage)()) ||
                          void 0 === i ||
                          i.ubtTrace(222836, { PageId: this.props.pageId }),
                        this.props.onReceiveCoupon(e.coupon, t));
                    },
                  },
                  {
                    key: "clickActivityImg",
                    value: function (e, t) {
                      var n;
                      1 === (null == t ? void 0 : t.popId) &&
                        (null === (n = (0, C.getCurrentPage)()) ||
                          void 0 === n ||
                          n.ubtTrace(243253, { PageId: this.props.pageId })),
                        this.props.onCloseModal(e);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e,
                        t,
                        n,
                        i,
                        a,
                        l = this,
                        o = this.props,
                        r = o.bookDelayInfo,
                        c = o.fromPage,
                        s = o.listFromPagesMapping,
                        d = o.visibleModals,
                        h = o.showNewModal,
                        f = o.onReceiveOfAKey,
                        m = o.onFilterFreeRoom,
                        p = o.onHomeWindowClick,
                        v = o.onCloseModal,
                        g = s[c],
                        I = g
                          ? [g].concat(
                              (0, u.Z)(
                                Ge.filter(function (e) {
                                  return e !== g;
                                })
                              )
                            )
                          : Ge,
                        y = h ? (0, O.Jk)(d, I) : {},
                        k = y.type,
                        w = y.modalInfo,
                        S = y.isActivityConfig;
                      return (0, q.BX)(b.View, {
                        className: "hotel-list-modals",
                        children: [
                          k &&
                            ![R.fG.ACTIVITY, R.fG.BARGAIN].includes(k) &&
                            (0, q.tZ)(b.View, {
                              className: "shade-box",
                              id: "AXEo",
                              onClick: function () {
                                return v(k);
                              },
                            }),
                          k === R.fG.COUPON &&
                            (S
                              ? (0, q.BX)(b.View, {
                                  className: "pop-hotel-new-guest",
                                  children: [
                                    (0, q.tZ)(b.Image, {
                                      className: "new-guest-img",
                                      mode: "widthFix",
                                      src: null == w ? void 0 : w.img,
                                      onClick: function () {
                                        return l.clickActivityImg(k, w);
                                      },
                                    }),
                                    (0, q.tZ)(b.Text, {
                                      className: "ifont-closed iconfont",
                                      id: "AYBc",
                                      onClick: function () {
                                        return v(k);
                                      },
                                    }),
                                  ],
                                })
                              : (0, q.tZ)(Me.Z, {
                                  hotelCouponModalInfo: w,
                                  onHideCouponModal: function () {
                                    return v(k);
                                  },
                                  onReceiveCouponInModal: f,
                                })),
                          k === R.fG.MEMBER &&
                            (0, q.BX)(b.View, {
                              className: "pop-member",
                              children: [
                                w.headImgUrl &&
                                  (0, q.tZ)(b.View, {
                                    className: "pop-member-hd",
                                    children: (0, q.tZ)(b.Image, {
                                      src: w.headImgUrl,
                                      className: "pop-member-image",
                                    }),
                                  }),
                                (0, q.BX)(b.View, {
                                  className: "pop-member-bd",
                                  children: [
                                    (0, q.BX)(b.View, {
                                      className: "pop-member-example",
                                      children: [
                                        (0, q.tZ)(b.Image, {
                                          src: w.hotelItem.bigLogo,
                                          className: "hotel-img",
                                        }),
                                        (0, q.BX)(b.View, {
                                          className: "cont",
                                          children: [
                                            (0, q.BX)(b.View, {
                                              className: "hotel-tit",
                                              children: [
                                                w.hotelItem.name,
                                                (0, q.tZ)(b.Text, {
                                                  className: "tgrey",
                                                  children:
                                                    w.hotelItem.hotelStarType,
                                                }),
                                              ],
                                            }),
                                            (0, q.tZ)(b.View, {
                                              className: "hotel-txt",
                                              children:
                                                w.hotelItem.hotelAddInfo
                                                  .commentNumber,
                                            }),
                                          ],
                                        }),
                                        (0, q.BX)(b.View, {
                                          className: "hotel-white",
                                          children: [
                                            (0, q.BX)(b.View, {
                                              className: "tit",
                                              children: [
                                                (0, q.tZ)(b.View, {
                                                  className: "price",
                                                  children: w.salePrice,
                                                }),
                                                (0, q.tZ)(b.View, {
                                                  className: "s",
                                                  children:
                                                    "¥" + w.discountPrice,
                                                }),
                                              ],
                                            }),
                                            (0, q.tZ)(b.Image, {
                                              src: w.iconUrl,
                                              className: "tag",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, q.tZ)(b.View, {
                                      className: "txt",
                                      children: w.tips,
                                    }),
                                    (0, q.tZ)(b.Button, {
                                      className: "btn-go",
                                      id: "AXEp",
                                      onClick: function () {
                                        return v(k);
                                      },
                                      children: "立即体验",
                                    }),
                                  ],
                                }),
                                (0, q.tZ)(b.Text, {
                                  className: "ifont-closed iconfont",
                                  id: "AXEq",
                                  onClick: function () {
                                    return v(k);
                                  },
                                }),
                              ],
                            }),
                          k === R.fG.HOME_WINDOW &&
                            (0, q.BX)(b.View, {
                              className: "home-window-pop ".concat(
                                1 === w.type ? "full-screen" : ""
                              ),
                              children: [
                                (0, q.tZ)(b.Image, {
                                  className: "home-window-img",
                                  mode: "widthFix",
                                  src: w.imageUrl,
                                  id: "AXEr",
                                  onClick: function () {
                                    p(w);
                                  },
                                }),
                                (0, q.tZ)(b.Text, {
                                  className: "ifont-closed iconfont",
                                  id: "AXEs",
                                  onClick: function () {
                                    return v(k);
                                  },
                                }),
                              ],
                            }),
                          (0, q.tZ)(N.ZtActivityPop, {
                            className: "free-room-modal",
                            show: k === R.fG.ACTIVITY,
                            onClose: function () {
                              return v(k);
                            },
                            onWrapClose: function () {
                              return v(k);
                            },
                            children: (0, q.BX)(b.View, {
                              className: "wrap",
                              children: [
                                (0, q.tZ)(b.Image, {
                                  className: "bgimg",
                                  mode: "widthFix",
                                  src: null == r ? void 0 : r.backgroundImg,
                                }),
                                1 === (null == r ? void 0 : r.type) &&
                                  (0, q.tZ)(b.View, {
                                    className: "btn",
                                    id: "AXEt",
                                    onClick: m,
                                  }),
                                0 === (null == r ? void 0 : r.type) &&
                                  r.coupon &&
                                  (0, q.BX)(b.View, {
                                    className: "coupon-wrap",
                                    children: [
                                      (0, q.BX)(b.View, {
                                        className: "coupon",
                                        children: [
                                          (0, q.BX)(b.View, {
                                            className: "left",
                                            children: [
                                              (0, q.tZ)(b.Text, {
                                                className: "price",
                                                children:
                                                  null === (e = r.coupon) ||
                                                  void 0 === e
                                                    ? void 0
                                                    : e.leftTitle,
                                              }),
                                              (0, q.tZ)(b.Text, {
                                                className: "unit",
                                                children: "元",
                                              }),
                                            ],
                                          }),
                                          (0, q.BX)(b.View, {
                                            className: "right",
                                            children: [
                                              (0, q.tZ)(b.View, {
                                                className: "title",
                                                children:
                                                  null === (t = r.coupon) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.topTitle,
                                              }),
                                              (0, q.BX)(b.View, {
                                                className: "desc",
                                                children: [
                                                  (0, q.tZ)(b.View, {
                                                    children:
                                                      null === (n = r.coupon) ||
                                                      void 0 === n
                                                        ? void 0
                                                        : n.desc,
                                                  }),
                                                  (0, q.tZ)(b.View, {
                                                    children:
                                                      null === (i = r.coupon) ||
                                                      void 0 === i
                                                        ? void 0
                                                        : i.bottomTitle,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, q.tZ)(b.Image, {
                                        className: "btn-img",
                                        mode: "widthFix",
                                        src: Ke.couponStatusBtn[
                                          null === (a = r.coupon) ||
                                          void 0 === a
                                            ? void 0
                                            : a.status
                                        ],
                                        id: "AXEu",
                                        onClick: function () {
                                          return l.onReceiveCoupon(r, k);
                                        },
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                          (0, q.tZ)(Ue.Z, {
                            show: k === R.fG.BARGAIN,
                            onClose: function () {
                              return v(k);
                            },
                          }),
                        ],
                      });
                    },
                  },
                ]),
                n
              );
            })(g.default.Component),
            Qe = g.default.memo(qe),
            je = {
              filterTabsInfo: [
                { title: "排序", text: "智能排序", scenario: 5 },
                { title: "位置区域", text: "位置区域", scenario: 3 },
                { title: "价格/星级", text: "价格/星级", scenario: 4 },
                { title: "筛选", text: "筛选", scenario: 2 },
              ],
            },
            We = g.default.memo(function (e) {
              var t = e.scenarioName,
                n = e.filterTabsTitle,
                i = e.onFilterTabClick,
                a = (0, g.useCallback)(
                  function (e) {
                    i(e);
                  },
                  [i]
                );
              return (0, q.tZ)(b.View, {
                className: "list-filter ".concat(P.default.zxTyStr),
                children: je.filterTabsInfo.map(function (e, i) {
                  var l = e.title === t,
                    o = n[e.scenario],
                    r = l || o || 5 === e.scenario,
                    c = "item".concat((0, O.gP)(r, " cur")),
                    s = "".concat(c).concat((0, O.gP)(l, " open"));
                  return (0, q.BX)(
                    b.View,
                    {
                      className: s,
                      id: "AXEY",
                      onClick: function () {
                        return a(e);
                      },
                      children: [
                        (0, q.tZ)(b.Text, {
                          className: "ellipsis",
                          children: o || e.text,
                        }),
                        (0, q.tZ)(b.Text, {
                          className: "ifont-triangle iconfont",
                        }),
                      ],
                    },
                    i
                  );
                }),
              });
            }),
            ze = g.default.memo(function (e) {
              var t,
                n = e.dataSelected,
                i = e.isEconomic,
                a = e.showTagSkeleton,
                l = e.quickFilterData,
                o = e.onClickQuickFilter;
              if (i) return null;
              var r =
                null == l || null === (t = l.subItems) || void 0 === t
                  ? void 0
                  : t.filter(function (e) {
                      var t, n;
                      return !(
                        (null !== (t = e.extra) &&
                          void 0 !== t &&
                          t.hasChild) ||
                        (null !== (n = e.subItems) && void 0 !== n && n.length)
                      );
                    });
              return (0, q.BX)(b.View, {
                className: "quick-filter-list",
                children: [
                  (0, q.tZ)(b.View, {
                    className: "tag-skeleton",
                    style: (0, O.LP)(a),
                    children: [0, 1, 2, 3, 4].map(function (e, t) {
                      return (0, q.tZ)(b.View, { className: "item" }, t);
                    }),
                  }),
                  (0, q.tZ)(b.View, {
                    className: "list-filter-tag",
                    style: (0, O.LP)(!a && (null == r ? void 0 : r.length)),
                    children:
                      null == r
                        ? void 0
                        : r.map(function (e, t) {
                            var i = e.data,
                              a = e.extra,
                              l = !!n.find(function (e) {
                                return e.data.filterID === i.filterID;
                              }),
                              r = "item".concat((0, O.gP)(l, " cur")),
                              c = l
                                ? null == a
                                  ? void 0
                                  : a.selectIcon
                                : null == a
                                ? void 0
                                : a.unSelectIcon,
                              s = "".concat((0, O.gP)(c, "pic", r));
                            return (0, q.BX)(
                              b.View,
                              {
                                className: s,
                                id: "AXFG",
                                onClick: function () {
                                  return o(e);
                                },
                                children: [
                                  (0, q.tZ)(b.Image, {
                                    src: c,
                                    className: "icon",
                                    mode: "heightFix",
                                    style: (0, O.LP)(c),
                                  }),
                                  !c &&
                                    (0, q.tZ)(b.Text, {
                                      children: e.data.title,
                                    }),
                                ],
                              },
                              t
                            );
                          }),
                  }),
                ],
              });
            }),
            Ye = g.default.memo(function (e) {
              var t,
                n = e.isEconomic,
                i = e.data,
                a = e.dataSelected,
                l = e.onClickQuickFilter;
              return null != i &&
                null !== (t = i.subItems) &&
                void 0 !== t &&
                t.length &&
                n
                ? (0, q.tZ)(b.View, {
                    className: "economic-filter ".concat(
                      P.default.isBaidu ? "swan" : "wechat"
                    ),
                    children: i.subItems[0].subItems.map(function (e, t) {
                      var n = "2|TAG_999" === e.data.filterID,
                        i = !!a.find(function (t) {
                          return t.data.filterID === e.data.filterID;
                        }),
                        o = (0, O.gP)(n, " all"),
                        r = (0, O.gP)(i, " cur"),
                        c = "item".concat(o).concat(r);
                      return (0, q.BX)(
                        b.View,
                        {
                          className: c,
                          id: "AXEQ",
                          onClick: function () {
                            return l(e);
                          },
                          children: [
                            e.extra.picUrl &&
                              (0, q.tZ)(b.Image, {
                                src: e.extra.picUrl,
                                className: "logo",
                              }),
                            (0, q.tZ)(b.View, {
                              className: "txt",
                              children: e.data.title,
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  })
                : null;
            }),
            Je = ["topBanners", "modals"],
            $e = B.Z.clientVersion,
            et = {
              cacheControl: {
                useCache: !0,
                maxAge: 6e4,
                dedup: !0,
                dedupingInterval: 500,
              },
            },
            tt =
              (0, Z.h)(!1, { pageName: "hotel_list" })(
                (i = (function (e) {
                  (0, m.Z)(n, e);
                  var t = (0, p.Z)(n);
                  function n(e) {
                    var i, a;
                    (0, d.Z)(this, n),
                      (a = t.call(this, e)),
                      (0, v.Z)(
                        (0, f.Z)(a),
                        "formatInitialFilterData",
                        function (e, t, n, i, l, o, r, c) {
                          var s = [].concat(
                              (null == t ? void 0 : t.subItems) || []
                            ),
                            u =
                              i && null != s && s.length
                                ? "".concat(i, "_").concat(t.data.title)
                                : i || t.data.title;
                          if (null != s && s.length)
                            for (var d = 0; d < s.length; d++) {
                              var h,
                                f,
                                m,
                                p,
                                v = s[d],
                                g =
                                  (null !== (h = v.operation) &&
                                    void 0 !== h &&
                                    null !== (f = h.otherMutexIds) &&
                                    void 0 !== f &&
                                    f.length) ||
                                  (null !== (m = v.operation) &&
                                    void 0 !== m &&
                                    null !== (p = m.selfMutexIds) &&
                                    void 0 !== p &&
                                    p.length)
                                    ? v.operation
                                    : l,
                                I = Number.isInteger(r) ? r : d,
                                y = Number.isInteger(r) ? d : null,
                                k = Number.isInteger(c) ? c : y;
                              a.formatInitialFilterData(e, v, n, u, g, t, I, k);
                            }
                          else {
                            var b =
                                null != o && o.data
                                  ? ""
                                      .concat(t.data.filterID, "~")
                                      .concat(o.data.title)
                                  : t.data.filterID,
                              w = Object.assign({}, t, {
                                linkTitleStr: u,
                                filterKey: b,
                                parentOperation:
                                  null == o ? void 0 : o.operation,
                                parentData: null == o ? void 0 : o.data,
                                rootOperation: l,
                                scenarioNames: [e],
                                tabOneIndex: r,
                                tabTwoIndex: c,
                              }),
                              S = n[t.data.filterID];
                            S
                              ? (Array.isArray(S) || (n[t.data.filterID] = [S]),
                                n[t.data.filterID].push(w))
                              : (n[t.data.filterID] = w);
                          }
                        }
                      );
                    var l = (0, F.Nj)();
                    return (
                      (a.pageId = P.default.isTieyou
                        ? "10650018760"
                        : "10650018583"),
                      (a.state = {
                        screenWidth: T.ZP.screenWidth,
                        screenHeight: T.ZP.screenHeight,
                        atmosphereInfo: null,
                        bannerViewClass:
                          ((i = {}),
                          (0, v.Z)(i, K.Zi.SUBSIDY_ACTIVITY, "exam"),
                          (0, v.Z)(i, K.Zi.TRAIN_TIED_CASH, "train"),
                          i),
                        bookDelayInfo: null,
                        currentPosition: {},
                        checkInDate: l.date.checkInDate,
                        checkOutDate: l.date.checkOutDate,
                        cityId: "",
                        cityName: "",
                        economicScrollClass: "down",
                        filterFormatted: {},
                        filterAllSelected: [K.He],
                        filterScenariosData: {},
                        filterSelected: [],
                        filterTabsTitle: { 2: null, 3: null, 4: null, 5: null },
                        firstShow: !0,
                        hasNextPage: !0,
                        hotelList: [],
                        hotelRankingListInfo: {},
                        hotFilterList: [],
                        isEconomic: !1,
                        isHotelSearch: !1,
                        isScrolling: !1,
                        isLogin: I.ZP.isLogin,
                        listFromPagesMapping: {},
                        loadingState: 1,
                        locationHotList: [],
                        loginBannerVisible: !I.ZP.isLogin,
                        modals: [],
                        nextPageTips: K.X3.LOADING,
                        positionSelected: {},
                        priceStarSelected: {},
                        quickFilterData: {},
                        quickFilterFormatted: {},
                        quickFilterSelected: [],
                        recommendList: [],
                        recommendLimit: 7,
                        scenarioName: null,
                        scenarios: ["2", "3", "4", "5"],
                        smallHoursFlag: l.smallHoursFlag,
                        sortSelected: [K.He],
                        scrollToTop: !1,
                        showNewModal: !0,
                        showTagSkeleton: !0,
                        showSkeleton: !0,
                        showQuickFilter: !1,
                        traceDatas: {},
                        topBanners: [],
                        topIconVisible: !1,
                        unrecommended: !1,
                        unrecommendedFilters: [],
                        roomNumber: 1,
                      }),
                      a.setInstanceEvents(),
                      a.getHotelConfigData(),
                      a
                    );
                  }
                  return (
                    (0, h.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.initPageStates();
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          var e;
                          null === (e = this.EventsHub) ||
                            void 0 === e ||
                            e.off();
                        },
                      },
                      {
                        key: "setListShowUBTTrace",
                        value: function () {
                          var e = this.state,
                            t = e.traceDatas,
                            n = e.recommendList,
                            i = e.hotelList,
                            a = this.QueryInstance.get(),
                            l = a.index,
                            o = a.pageSize,
                            r = l > 1 ? l - 1 : 1,
                            c = []
                              .concat((0, u.Z)(n), (0, u.Z)(i))
                              .slice(0, o * r);
                          c.length &&
                            this.ubtTrace(K.oN.listShow, {
                              queryTimeMillis: this.queryTimeMillis,
                              traceData: null == t ? void 0 : t[l],
                              showItemList: {
                                hotelIds:
                                  null == c
                                    ? void 0
                                    : c.map(function (e) {
                                        return e.hotelId;
                                      }),
                              },
                            });
                        },
                      },
                      {
                        key: "getHotelConfigData",
                        value: function () {
                          var e = this;
                          (0, M.SZ)({ keys: ["mini-fe-hotel-config"] }).then(
                            function (t) {
                              var n, i;
                              if (
                                null != t &&
                                null !== (n = t.configDataList) &&
                                void 0 !== n &&
                                n.length
                              ) {
                                var a = (0, s.Z)(t.configDataList, 1)[0];
                                a.data && (H.wH.htQConfigs = a.data),
                                  null !== (i = a.data) &&
                                    void 0 !== i &&
                                    i.listFromPagesMapping &&
                                    e.setState({
                                      listFromPagesMapping:
                                        a.data.listFromPagesMapping,
                                    });
                              }
                            }
                          );
                        },
                      },
                      {
                        key: "getCurrentLocation",
                        value: function () {
                          var e = this;
                          return new Promise(function (t) {
                            e.getMyLocation(function (n) {
                              var i = n.cityId,
                                a = n.cityName,
                                l = n.districtId,
                                o = n.lat,
                                r = n.lng,
                                c = n.address || n.cityAddress;
                              (e.currentCityId = i),
                                (e.currentGeoInfo = o
                                  ? { lat: o, lon: r }
                                  : null),
                                t({
                                  cityAddress: c,
                                  cityId: i,
                                  cityName: a,
                                  districtId: l,
                                });
                            });
                          });
                        },
                      },
                      {
                        key: "beforeFetchData",
                        value: function (e) {
                          var t = Object.assign(
                            {},
                            {
                              checkInDate: this.state.checkInDate,
                              checkOutDate: this.state.checkOutDate,
                              fromPage: this.fromPage,
                              roomNumber: this.state.roomNumber,
                            },
                            e
                          );
                          this.QueryInstance = new E.Z(t);
                        },
                      },
                      {
                        key: "fetchData",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, i, a, l, o, c, u;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (t = {}),
                                          !I.ZP.isLogin)
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          (e.next = 5),
                                          this.getUserImportantRight()
                                        );
                                      case 5:
                                        1 ===
                                          (null == (n = e.sent)
                                            ? void 0
                                            : n.resultCode) &&
                                          n.data &&
                                          (t.modals = [
                                            {
                                              modalInfo: n.data,
                                              type: R.fG.MEMBER,
                                              visible: !0,
                                            },
                                          ]);
                                      case 7:
                                        return (
                                          (i = [
                                            this.getUserPreferential,
                                            this.getUserPromotionBanner,
                                            this.fetchHotelList,
                                          ]),
                                          (e.next = 10),
                                          Promise.all(
                                            i.map(function (e) {
                                              return e();
                                            })
                                          )
                                        );
                                      case 10:
                                        (a = e.sent),
                                          (l = (0, s.Z)(a, 3)),
                                          (o = l[0]),
                                          (c = l[1]),
                                          (u = l[2]),
                                          this.setState(
                                            this.processAllFetchedData(t, {
                                              hotelListRes: u,
                                              preferentialRes: o,
                                              bannerRes: c,
                                            })
                                          ),
                                          (e.next = 21);
                                        break;
                                      case 18:
                                        (e.prev = 18),
                                          (e.t0 = e.catch(0)),
                                          console.error(
                                            "=> fetchData error",
                                            e.t0
                                          );
                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 18]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "initPageStates",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, i, a, l;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((this.PageInstance = (0,
                                          w.getCurrentInstance)()),
                                          (n =
                                            (null ===
                                              (t = this.PageInstance.router) ||
                                            void 0 === t
                                              ? void 0
                                              : t.params) || {}),
                                          (i =
                                            null != n && n.data
                                              ? (0, O.X5)(
                                                  null == n ? void 0 : n.data
                                                )
                                              : {}),
                                          this.initPageValues(i),
                                          (a = (0, o.Z)(
                                            (0, o.Z)({}, i.queryModel),
                                            {},
                                            {
                                              useLocationCity:
                                                i.useLocationCity,
                                            }
                                          )).checkInDate &&
                                            ((l = (0, F.BB)({
                                              checkInDate: a.checkInDate,
                                              checkOutDate: a.checkOutDate,
                                            })),
                                            (a.checkInDate = l.checkInDate),
                                            (a.checkOutDate = l.checkOutDate),
                                            (a.smallHoursFlag =
                                              l.smallHoursFlag)),
                                          !a.useLocationCity &&
                                            a.cityId &&
                                            a.cityName)
                                        ) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          (e.t0 = Object),
                                          (e.t1 = a),
                                          (e.next = 11),
                                          this.getCurrentLocation()
                                        );
                                      case 11:
                                        (e.t2 = e.sent),
                                          e.t0.assign.call(e.t0, e.t1, e.t2);
                                      case 13:
                                        this.setState(a),
                                          this.initActivityActions(),
                                          this.beforeFetchData(a),
                                          this.initFilterStates(i),
                                          this.fetchData();
                                      case 18:
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
                        key: "initPageValues",
                        value: function (e) {
                          var t = e.currentCityId,
                            n = e.currentGeoInfo,
                            i = e.pageSource,
                            a = e.fromPage;
                          (this.currentCityId = t),
                            (this.currentGeoInfo = n),
                            (this.isLoading = !1),
                            (this.pageSource = i),
                            (this.freeRoomFilter = null),
                            (this._scrollTop = 0),
                            (this.fromPage = a || "applets_hotel_list");
                        },
                      },
                      {
                        key: "setInstanceEvents",
                        value: function () {
                          var e = this;
                          (this.EventsHub = new w.Events()),
                            this.EventsHub.on(K.H9.FILTER_CHANGE, function (t) {
                              var n = t.key === K._J.SORT,
                                i = n
                                  ? e.onSortItemChange(t)
                                  : e.onFilterItemChange(t);
                              e.refreshDataWithFilter(i),
                                n || e.setFilterUbtTrace(t.current, "filter");
                            }),
                            this.EventsHub.on(
                              K.H9.QUICK_FILTER_CHANGE,
                              function (t) {
                                var n = e.onQuickFilterItemChange(t);
                                e.refreshDataWithFilter(n),
                                  e.setFilterUbtTrace(t.current, "quickFilter");
                              }
                            ),
                            this.EventsHub.on(K.H9.RESET_FILTER, function (t) {
                              return e.resetFilterSelected(t);
                            }),
                            this.EventsHub.on(
                              K.H9.RESET_FILTER_ITEMS,
                              function (t) {
                                return e.resetQuickFilterItems(t);
                              }
                            ),
                            this.EventsHub.on(K.H9.RESET_ALL, function (t) {
                              return e.resetAllFilterStates(t);
                            }),
                            this.EventsHub.on(
                              K.H9.CLEAR_FILTER_ITEM,
                              function (t) {
                                var n = e.onClearFilterItem(t);
                                e.refreshDataWithFilter(n);
                              }
                            ),
                            this.EventsHub.on(K.H9.CLOSE_BANNER, function (t) {
                              e.setState({
                                topBanners: e.state.topBanners.filter(function (
                                  e
                                ) {
                                  return e.type !== t;
                                }),
                              });
                            }),
                            this.EventsHub.on(K.H9.SHOW_SCENARIO, function (t) {
                              return e.setState({ scenarioName: t });
                            });
                        },
                      },
                      {
                        key: "initActivityActions",
                        value: function () {
                          var e =
                            !S().getStorageSync("CardHelpers") &&
                            "CardHelpers" === this.fromPage;
                          e &&
                            (this.ubtTrace(222796, { PageId: this.pageId }),
                            S().setStorageSync("CardHelpers", 1)),
                            this.setState({ showCollectCardModal: e });
                        },
                      },
                      {
                        key: "setFilterUbtTrace",
                        value: function (e, t) {
                          var n, i;
                          if (
                            null != e &&
                            null !== (n = e.data) &&
                            void 0 !== n &&
                            n.filterID
                          ) {
                            var a = ((i = {}),
                              (0, v.Z)(i, K.zC.BARGAIN, {
                                filter: 222807,
                                quickFilter: 222803,
                              }),
                              (0, v.Z)(i, K.zC.TONIGHT_SALE, {
                                filter: 225308,
                                quickFilter: 225308,
                              }),
                              i)[e.data.filterID],
                              l = a ? a[t] : null;
                            if (l) {
                              var o = this.state.quickFilterSelected.findIndex(
                                function (t) {
                                  return t.data.filterID === e.data.filterID;
                                }
                              );
                              this.ubtTrace(l, {
                                PageId: this.pageId,
                                choose: String(o > -1),
                              });
                            }
                          }
                        },
                      },
                      {
                        key: "initFilterStates",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n,
                                i,
                                a,
                                l,
                                c,
                                s,
                                d,
                                h,
                                f,
                                m,
                                p,
                                v,
                                g,
                                I,
                                y,
                                k,
                                b,
                                w,
                                S,
                                Z = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        try {
                                          (a = t.filterInfo),
                                            (l = t.filterInfos),
                                            (c = t.keywordInfo),
                                            (s = t.isEconomic),
                                            (d =
                                              null != l && l.length
                                                ? (0, u.Z)(l).filter(function (
                                                    e
                                                  ) {
                                                    return !(0, O.xb)(e);
                                                  })
                                                : []),
                                            (h = {
                                              filterAllSelected: [K.He],
                                              quickFilterSelected: [],
                                              isEconomic: s,
                                              isFreeRoomActivity:
                                                this.fromPage === K.cF,
                                            }),
                                            ((null != c &&
                                              null !== (n = c.data) &&
                                              void 0 !== n &&
                                              n.filterID) ||
                                              (null != c && c.filterID)) &&
                                              ((m = c.data ? c : { data: c }),
                                              (p =
                                                (null === (f = c.data) ||
                                                void 0 === f
                                                  ? void 0
                                                  : f.filterID) || c.filterID),
                                              (v = d.find(function (e) {
                                                var t;
                                                return (
                                                  (null === (t = e.data) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.filterID) === p
                                                );
                                              })),
                                              m.data.sceneBitMap ||
                                                (m.data.sceneBitMap = 0),
                                              m.data.scenarioType ||
                                                (m.data.scenarioType =
                                                  "UrlSchema"),
                                              m.data.subType ||
                                                (m.data.subType = "3"),
                                              m.data.filterType ||
                                                (m.data.filterType = 0),
                                              (h.keywordInfo = m),
                                              v ||
                                                ((h.isHotelSearch =
                                                  null == m ||
                                                  null === (g = m.data) ||
                                                  void 0 === g
                                                    ? void 0
                                                    : g.isHotel),
                                                d.push(m))),
                                            ((null != a &&
                                              null !== (i = a.data) &&
                                              void 0 !== i &&
                                              i.filterID) ||
                                              (null != a && a.filterID)) &&
                                              ((y =
                                                (null === (I = a.data) ||
                                                void 0 === I
                                                  ? void 0
                                                  : I.filterID) || a.filterID),
                                              d.find(function (e) {
                                                var t;
                                                return (
                                                  (null === (t = e.data) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.filterID) === y
                                                );
                                              }) || d.push(a)),
                                            d.length &&
                                              ((k =
                                                this.processKeywordAndFilterInfo(
                                                  d
                                                )),
                                              (h.filterAllSelected =
                                                k.filterAllSelected),
                                              (h.quickFilterSelected =
                                                k.quickFilterSelected)),
                                            (b = h.filterAllSelected.map(
                                              function (e) {
                                                return e.data;
                                              }
                                            )),
                                            (w = h.quickFilterSelected.filter(
                                              function (e) {
                                                return !b.some(function (t) {
                                                  return (
                                                    t.filterID ===
                                                    e.data.filterID
                                                  );
                                                });
                                              }
                                            )),
                                            (S = b.concat(w)),
                                            this.QueryInstance.setQuery({
                                              queryFilterList: S,
                                            }),
                                            this.fetchCommonFilters()
                                              .then(function (e) {
                                                if (
                                                  1 !==
                                                  (null == e
                                                    ? void 0
                                                    : e.resultCode)
                                                )
                                                  return Z.setState(h);
                                                var t =
                                                    Z.processCommonFilters(e),
                                                  n = [],
                                                  i = [];
                                                h.filterAllSelected.forEach(
                                                  function (e) {
                                                    var a,
                                                      l,
                                                      o =
                                                        null == t ||
                                                        null ===
                                                          (a =
                                                            t.filterFormatted) ||
                                                        void 0 === a
                                                          ? void 0
                                                          : a[e.data.filterID],
                                                      r =
                                                        null == t ||
                                                        null ===
                                                          (l =
                                                            t.quickFilterFormatted) ||
                                                        void 0 === l
                                                          ? void 0
                                                          : l[e.data.filterID];
                                                    o || r
                                                      ? (o &&
                                                          n.push((0, O.Uu)(o)),
                                                        r &&
                                                          i.push((0, O.Uu)(r)))
                                                      : n.push(e);
                                                  }
                                                ),
                                                  h.quickFilterSelected.forEach(
                                                    function (e) {
                                                      var a,
                                                        l,
                                                        o =
                                                          null == t ||
                                                          null ===
                                                            (a =
                                                              t.filterFormatted) ||
                                                          void 0 === a
                                                            ? void 0
                                                            : a[
                                                                e.data.filterID
                                                              ],
                                                        r =
                                                          null == t ||
                                                          null ===
                                                            (l =
                                                              t.quickFilterFormatted) ||
                                                          void 0 === l
                                                            ? void 0
                                                            : l[
                                                                e.data.filterID
                                                              ];
                                                      o && n.push((0, O.Uu)(o)),
                                                        r &&
                                                          i.push((0, O.Uu)(r));
                                                    }
                                                  ),
                                                  (h.filterAllSelected = n),
                                                  (h.quickFilterSelected = i),
                                                  Z.setState(
                                                    (0, o.Z)(
                                                      (0, o.Z)(
                                                        (0, o.Z)({}, t),
                                                        h
                                                      ),
                                                      Z.convertScenarioFilter(h)
                                                    )
                                                  );
                                              })
                                              .catch(function () {
                                                Z.setState(h);
                                              }),
                                            s && this.getEconomicFilters();
                                        } catch (e) {
                                          console.error(
                                            "=> initFilterStates",
                                            e
                                          );
                                        }
                                      case 1:
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
                        key: "setPageUbtTrace",
                        value: function () {
                          var e = this.state,
                            t = e.cityId,
                            n = e.hotelList,
                            i = e.checkInDate,
                            a = e.checkOutDate,
                            l =
                              null == n
                                ? void 0
                                : n.map(function (e) {
                                    return e.hotelId;
                                  });
                          this.ubtTrace(203943, {
                            cityId: t,
                            hotelIds: l,
                            checkInDate: i,
                            checkOutDate: a,
                            fromPage: this.fromPage,
                          });
                        },
                      },
                      {
                        key: "getMyLocation",
                        value: function (e) {
                          var t = this;
                          S().getSetting({
                            success: function () {
                              (0, D.PA)(
                                function (n) {
                                  if (null == n || !n.cityId) return e(K.MP);
                                  (n.isGeo = !0),
                                    (t._hotelLocateCityId = n.cityId),
                                    e(n);
                                },
                                function () {
                                  return e(K.MP);
                                }
                              );
                            },
                            fail: function () {
                              return e(K.MP);
                            },
                          });
                        },
                      },
                      {
                        key: "getHotelAllCity",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, i;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = _.Yj.get()),
                                          (n = {
                                            data: {
                                              type: 1,
                                              lastUpdateTime: t || "",
                                              clientVersion: $e,
                                            },
                                          }),
                                          (e.prev = 2),
                                          (e.next = 5),
                                          (0, L.IM)(n)
                                        );
                                      case 5:
                                        if (null == (i = e.sent) || !i.data) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          this.handleHotelStation(i.data),
                                          _.Yj.set(
                                            k()().format("YYYY-MM-DD HH:mm:ss")
                                          ),
                                          e.abrupt("return", i.data)
                                        );
                                      case 10:
                                        return e.abrupt(
                                          "return",
                                          _.DB.get().hotelAllCities
                                        );
                                      case 13:
                                        (e.prev = 13),
                                          (e.t0 = e.catch(2)),
                                          console.log(e.t0);
                                      case 16:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 13]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleHotelStation",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n, i, a;
                              return (0, r.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (n = {}),
                                        t.forEach(function (e) {
                                          n[e.cityFirstLetter] ||
                                            (n[e.cityFirstLetter] = []),
                                            n[e.cityFirstLetter].push({
                                              cityName: e.cityName,
                                              cityId: e.cityId,
                                              cityPinYin: e.cityPinYin,
                                              cityBreviary: e.cityBreviary,
                                            });
                                        }),
                                        (i = Object.keys(n).sort()),
                                        (a = {}),
                                        i.forEach(function (e) {
                                          a[e] = n[e];
                                        }),
                                        _.DB.setAttr("cityMainList", a),
                                        _.DB.setAttr("hotelAllCities", t);
                                    case 7:
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
                        key: "componentDidShow",
                        value: function () {
                          if (
                            (this.setPageUbtTrace(),
                            this.checkScanHotelVipTask(),
                            this.state.firstShow)
                          )
                            this.setState({ firstShow: !1 });
                          else if (this.isReceivingCoupon)
                            this.isReceivingCoupon = !1;
                          else {
                            var e = this.state,
                              t = e.isLogin,
                              n = e.checkInDate,
                              i = e.checkOutDate,
                              a = e.roomNumber,
                              l = H.wH.checkInDate,
                              o = H.wH.checkOutDate,
                              r = H.wH.roomNumber,
                              c = !(!l || !o || (l === n && o === i)),
                              s = !!r && r !== a;
                            if ((!t && I.ZP.isLogin) || c || s) {
                              var u = { showSkeleton: !0 };
                              c &&
                                ((u.checkInDate = l),
                                (u.checkOutDate = o),
                                this.QueryInstance.setQuery({
                                  checkInDate: l,
                                  checkOutDate: o,
                                })),
                                s &&
                                  ((u.roomNumber = o),
                                  this.QueryInstance.setQuery({
                                    roomNumber: r,
                                  })),
                                this.setState(u),
                                this.refreshHotelQuery(),
                                this.refreshFetchData();
                            }
                          }
                        },
                      },
                      {
                        key: "refreshHotelQuery",
                        value: function () {
                          var e, t;
                          this.setState(this.getClearedStates()),
                            null === (e = this.QueryInstance) ||
                              void 0 === e ||
                              e.resetFilterQuery(),
                            null === (t = this.QueryInstance) ||
                              void 0 === t ||
                              t.setQuery({ index: 1 });
                        },
                      },
                      {
                        key: "refreshFetchData",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, i, a, l, o, c, u, d, h, f, m;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (t = this.state.isLogin),
                                          (n = t || (!t && I.ZP.isLogin)),
                                          (i = {}),
                                          (a = [
                                            this.getCommonFilters,
                                            this.fetchHotelList,
                                          ]),
                                          !n)
                                        ) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          !t &&
                                            I.ZP.isLogin &&
                                            ((i.isLogin = !0),
                                            (i.loginBannerVisible = !1)),
                                          (e.next = 9),
                                          this.getUserImportantRight()
                                        );
                                      case 9:
                                        1 ===
                                          (null == (l = e.sent)
                                            ? void 0
                                            : l.resultCode) &&
                                          l.data &&
                                          (i.modals = [
                                            {
                                              modalInfo: l.data,
                                              type: R.fG.MEMBER,
                                              visible: !0,
                                            },
                                          ]),
                                          a.push(this.getUserPreferential),
                                          a.push(this.getUserPromotionBanner);
                                      case 13:
                                        return (
                                          (e.next = 15),
                                          Promise.all(
                                            a.map(function (e) {
                                              return e();
                                            })
                                          )
                                        );
                                      case 15:
                                        (o = e.sent),
                                          (c = (0, s.Z)(o, 4)),
                                          (u = c[0]),
                                          (d = c[1]),
                                          (h = c[2]),
                                          (f = c[3]),
                                          (m = {
                                            filterRes: u,
                                            hotelListRes: d,
                                            preferentialRes: h,
                                            bannerRes: f,
                                          }),
                                          this.setState(
                                            this.processAllFetchedData(i, m, !0)
                                          ),
                                          (e.next = 28);
                                        break;
                                      case 25:
                                        (e.prev = 25),
                                          (e.t0 = e.catch(0)),
                                          console.error(
                                            "=> refreshFetchData error",
                                            e.t0
                                          );
                                      case 28:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 25]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "refreshDataWithFilter",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                n,
                                i,
                                a,
                                l,
                                c,
                                s,
                                u,
                                d,
                                h,
                                f,
                                m,
                                p,
                                v,
                                g,
                                I,
                                y,
                                k,
                                b,
                                w,
                                S = this,
                                Z = arguments;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            Z.length > 0 && void 0 !== Z[0]
                                              ? Z[0]
                                              : {}),
                                          (n = Z.length > 1 ? Z[1] : void 0),
                                          (e.prev = 2),
                                          (a = t.quickFilterSelected),
                                          (l = t.filterAllSelected),
                                          (c = t.isKeywordClear),
                                          (null != a && a.length) ||
                                            (null != l && l.length))
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 6:
                                        if (
                                          ((s =
                                            (null ===
                                              (i =
                                                l ||
                                                this.state.filterAllSelected) ||
                                            void 0 === i
                                              ? void 0
                                              : i.map(function (e) {
                                                  return e.data;
                                                })) || []),
                                          null ==
                                            (u =
                                              a ||
                                              this.state.quickFilterSelected) ||
                                            u.forEach(function (e) {
                                              s.find(function (t) {
                                                return (
                                                  t.filterID ===
                                                    e.data.filterID &&
                                                  t.value === e.data.value
                                                );
                                              }) || s.push(e.data);
                                            }),
                                          (d =
                                            this.QueryInstance.getQuery(
                                              "queryFilterList"
                                            )),
                                          (h = s.filter(function (e) {
                                            return d.some(function (t) {
                                              return (
                                                t.filterID === e.filterID &&
                                                t.value === e.value
                                              );
                                            });
                                          })),
                                          (f = s.length !== d.length),
                                          (m = h.length !== d.length),
                                          (p = d.find(function (e) {
                                            return e.filterID === K.KM;
                                          })),
                                          (v = s.find(function (e) {
                                            return e.filterID === K.KM;
                                          })),
                                          (g =
                                            (null == p ? void 0 : p.value) !==
                                            (null == v ? void 0 : v.value)),
                                          !(f || m || g))
                                        ) {
                                          e.next = 28;
                                          break;
                                        }
                                        return (
                                          (t.showTagSkeleton = n),
                                          (t.showSkeleton = !0),
                                          Object.assign(
                                            t,
                                            this.convertScenarioFilter(t)
                                          ),
                                          this.setState(t),
                                          (I = {
                                            index: 1,
                                            queryFilterList: s,
                                          }),
                                          c && (I.hiddenHotelList = []),
                                          this.QueryInstance.setQuery(I),
                                          (e.next = 26),
                                          this.fetchHotelList()
                                        );
                                      case 26:
                                        null != (y = e.sent) && y.data
                                          ? ((b = this.processHotelList(
                                              y.data
                                            )),
                                            (w =
                                              (null === (k = b.hotelList) ||
                                              void 0 === k
                                                ? void 0
                                                : k.length) <
                                              this.state.recommendLimit) ||
                                              (b.showSkeleton = !1),
                                            this.setState(
                                              (0, o.Z)({}, b),
                                              function () {
                                                w &&
                                                  ((b.unrecommended = !0),
                                                  S.getRecommendHotelList(
                                                    b.hotelList
                                                  ));
                                              }
                                            ))
                                          : (0, C.showToast)(K.X3.NO_HOTEL);
                                      case 28:
                                        e.next = 33;
                                        break;
                                      case 30:
                                        (e.prev = 30),
                                          (e.t0 = e.catch(2)),
                                          console.error(
                                            "===> refreshDataWithFilter error",
                                            e.t0
                                          );
                                      case 33:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 30]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "processAllFetchedData",
                        value: function (e, t, n) {
                          var i,
                            a,
                            o = t.filterRes,
                            r = t.hotelListRes,
                            c = t.preferentialRes,
                            s = t.bannerRes;
                          if (1 === (null == o ? void 0 : o.resultCode)) {
                            var u = this.processCommonFilters(o),
                              d = u.filterScenariosData,
                              h = u.filterFormatted;
                            (e.filterScenariosData = d),
                              (e.filterFormatted = h);
                          }
                          if (null != r && r.data) {
                            var f = this.processHotelList(r.data, n);
                            Object.assign(e, f);
                          }
                          var m =
                            null == s || null === (i = s.data) || void 0 === i
                              ? void 0
                              : i.userPromotionBannerList;
                          if (null != m && m.length) {
                            var p,
                              v = this.processPromotionBannerData(m);
                            v.length &&
                              (e.topBanners =
                                null !== (p = e.topBanners) &&
                                void 0 !== p &&
                                p.length
                                  ? e.topBanners.concat(v)
                                  : v);
                          }
                          if (null != c && c.data) {
                            var g,
                              I,
                              y = this.processPreferentialData(
                                null == c ? void 0 : c.data,
                                n
                              ),
                              k = y.topBanners,
                              b = y.modals,
                              w = (0, l.Z)(y, Je);
                            null != k &&
                              k.length &&
                              (e.topBanners =
                                null !== (g = e.topBanners) &&
                                void 0 !== g &&
                                g.length
                                  ? e.topBanners.concat(k)
                                  : k),
                              null != b &&
                                b.length &&
                                (e.modals =
                                  null !== (I = e.modals) &&
                                  void 0 !== I &&
                                  I.length
                                    ? e.modals.concat(b)
                                    : b),
                              Object.assign(e, w);
                          }
                          return (
                            (null === (a = e.hotelList) || void 0 === a
                              ? void 0
                              : a.length) < this.state.recommendLimit &&
                              ((e.unrecommended = !0),
                              (e.showSkeleton = !0),
                              this.getRecommendHotelList(e.hotelList)),
                            e
                          );
                        },
                      },
                      {
                        key: "getUserImportantRight",
                        value: function () {
                          return new Promise(function (e, t) {
                            (0, X.YO)({ data: { clientVersion: $e } })
                              .then(function (t) {
                                return e(t);
                              })
                              .catch(function (e) {
                                return t(e);
                              });
                          });
                        },
                      },
                      {
                        key: "getCommonFilters",
                        value: function () {
                          var e = this;
                          this.fetchCommonFilters()
                            .then(function (t) {
                              1 === (null == t ? void 0 : t.resultCode) &&
                                e.setState(e.processCommonFilters(t));
                            })
                            .catch(function () {});
                        },
                      },
                      {
                        key: "getEconomicFilters",
                        value: function () {
                          var e = this;
                          this.fetchCommonFilters(["10"]).then(function (t) {
                            var n, i;
                            if (
                              1 !== !(null != t && t.resultCode) &&
                              null != t &&
                              null !== (n = t.data) &&
                              void 0 !== n &&
                              null !== (i = n.filters) &&
                              void 0 !== i &&
                              i.length
                            ) {
                              var a = (0, s.Z)(t.data.filters, 1)[0],
                                l = { quickFilterData: a },
                                o = {};
                              e.formatInitialFilterData("快筛", a, o),
                                (l.quickFilterFormatted = o),
                                e.setState(l);
                            }
                          });
                        },
                      },
                      {
                        key: "fetchCommonFilters",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (n, i) {
                            var a = t.QueryInstance.get(),
                              l = a.checkInDate,
                              o = a.checkOutDate,
                              r = a.cityId,
                              c = a.districtId,
                              s = {
                                data: {
                                  clientVersion: $e,
                                  scenarios: e || t.state.scenarios,
                                  checkInDate: l,
                                  checkOutDate: o,
                                  cityId: r,
                                  districtId: c,
                                },
                              };
                            (0, L.r3)(s)
                              .then(function (e) {
                                return n(e);
                              })
                              .catch(function (e) {
                                return i(e);
                              });
                          });
                        },
                      },
                      {
                        key: "processCommonFilters",
                        value: function (e) {
                          var t,
                            n,
                            i = this.state.filterScenariosData,
                            a = {},
                            l = {};
                          if (
                            1 === (null == e ? void 0 : e.resultCode) &&
                            null !== (t = e.data) &&
                            void 0 !== t &&
                            null !== (n = t.filters) &&
                            void 0 !== n &&
                            n.length
                          )
                            for (var o = 0; o < e.data.filters.length; o++) {
                              var r = e.data.filters[o],
                                c = K.NT[r.data.title];
                              this.formatInitialFilterData(r.data.title, r, l),
                                (a[c] = r);
                            }
                          return (
                            null != i &&
                              i.filterData &&
                              Object.keys(a.filterData).length !==
                                Object.keys(i.filterData) &&
                              this.EventsHub.trigger(
                                K.H9.FILTER_CHANGED,
                                a.filterData
                              ),
                            { filterScenariosData: a, filterFormatted: l }
                          );
                        },
                      },
                      {
                        key: "getUserPreferential",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (t = {
                                            data: {
                                              couponType: 300,
                                              clientVersion: $e,
                                              testVersion: "C",
                                              cityId: this.state.cityId,
                                              source: "hotel_list",
                                              domainSource: this.fromPage,
                                            },
                                          }),
                                          this.pageSource &&
                                            (t.data.source =
                                              K.Bg[this.pageSource]),
                                          (e.next = 5),
                                          (0, L.jV)(t)
                                        );
                                      case 5:
                                        return e.abrupt("return", e.sent);
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          console.error(
                                            "getUserPreferential error",
                                            e.t0
                                          );
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
                        key: "processPreferentialData",
                        value: function (e, t) {
                          var n,
                            i = e.userPreferentailList,
                            a = e.homeBenefits,
                            l = e.homeWindowInfo,
                            o = { topBanners: [] },
                            r = [],
                            c = this.resolveCouponData(i);
                          c.topBanners.length &&
                            (c.topBanners.forEach(function (e) {
                              r.find(function (t) {
                                return t.type === e.type;
                              }) || r.push(e);
                            }),
                            (o.topBanners = r));
                          var s = [];
                          c.modals.length &&
                            c.modals.forEach(function (e) {
                              s.find(function (t) {
                                return t.type === e.type;
                              }) || s.push(e);
                            });
                          var u = this.resolveNewGuestData(a, t),
                            d = r.find(function (e) {
                              return e.type === (null == u ? void 0 : u.type);
                            });
                          if (
                            (u && !d && o.topBanners.push(u),
                            null != l &&
                              null !== (n = l.windowCode) &&
                              void 0 !== n &&
                              n.startsWith("xunjia") &&
                              !s.find(function (e) {
                                return e.type === R.fG.BARGAIN;
                              }))
                          )
                            s.push({
                              modalInfo: {
                                imageUrl: P.default.isTieyou
                                  ? K.Y_.BARGAIN_DESC_TY
                                  : K.Y_.BARGAIN_DESC_ZX,
                              },
                              type: R.fG.BARGAIN,
                              visible: !0,
                            });
                          else if (l && null != l && l.imageUrl) {
                            var h = _.jg.getAttr(B.Z.THRESHOLD_KEY.HOME_WINDOW);
                            (!h || k()().diff(h, "day") >= 1) &&
                              s.push({
                                type: R.fG.HOME_WINDOW,
                                visible: !0,
                                modalInfo: l,
                              });
                          }
                          return (o.modals = s), o;
                        },
                      },
                      {
                        key: "resolveCouponData",
                        value: function (e) {
                          var t,
                            n,
                            i,
                            a,
                            l = { topBanners: [], modals: [] },
                            o =
                              null == e
                                ? void 0
                                : e.find(function (e) {
                                    return 300 === e.couponType;
                                  });
                          if (
                            (null != o &&
                              o.banner &&
                              l.topBanners.push({
                                bannerInfo: Object.assign({}, o.banner, {
                                  desc: o.banner.desc
                                    ? x.Z.convertAppTextToHtmlStr(o.banner.desc)
                                    : null,
                                }),
                                type: K.Zi.COUPON,
                                thresholdKey: K.Zi.COUPON,
                              }),
                            null != o &&
                              o.promotionBanner &&
                              l.topBanners.push({
                                bannerInfo: o.promotionBanner,
                                type: K.Zi.ACTIVITY,
                                thresholdKey: K.Zi.ACTIVITY,
                              }),
                            null != o &&
                              null !== (t = o.couponPackage) &&
                              void 0 !== t &&
                              null !== (n = t.activityConfigs) &&
                              void 0 !== n &&
                              n.length)
                          ) {
                            var r,
                              c = {
                                autoThreshold: !0,
                                modalInfo:
                                  null == o ||
                                  null === (r = o.couponPackage) ||
                                  void 0 === r
                                    ? void 0
                                    : r.activityConfigs[0],
                                type: R.fG.COUPON,
                                visible: !0,
                                thresholdKey: B.Z.THRESHOLD_KEY.COUPON_DATE,
                                isActivityConfig: !0,
                              };
                            l.modals = [c];
                          } else if (
                            null != o &&
                            null !== (i = o.couponPackage) &&
                            void 0 !== i &&
                            null !== (a = i.childCouponPackageItemList) &&
                            void 0 !== a &&
                            a.length
                          ) {
                            var s =
                              o.couponPackage.childCouponPackageItemList.filter(
                                function (e) {
                                  return e.leftTitle && e.topTitle;
                                }
                              );
                            if (null != s && s.length) {
                              s.forEach(function (e) {
                                e.leftTitle = e.leftTitle.replace(
                                  /[^0-9]/gi,
                                  ""
                                );
                              }),
                                (o.couponPackage.couponList = s);
                              var u = {
                                autoThreshold: !0,
                                modalInfo: o,
                                type: R.fG.COUPON,
                                visible: !0,
                              };
                              this.state.listFromPagesMapping[this.fromPage] !==
                                R.fG.COUPON &&
                                (u.thresholdKey =
                                  B.Z.THRESHOLD_KEY.COUPON_DATE),
                                1 !== o.couponPackage.rowOrColumnType &&
                                  (l.modals = [u]);
                            }
                          }
                          return l;
                        },
                      },
                      {
                        key: "resolveNewGuestData",
                        value: function (e, t) {
                          var n, i, a, l;
                          if (t) {
                            var o =
                              (null == e ? void 0 : e.pictureUrl) &&
                              1 === e.status;
                            (e && !o) ||
                              S().setStorageSync("list_home_benefits", null),
                              (a = e);
                          } else if (
                            null != e &&
                            e.pictureUrl &&
                            2 === e.status
                          )
                            (a = e),
                              S().setStorageSync("list_home_benefits", e);
                          else if (1 === (null == e ? void 0 : e.status)) {
                            var r = S().getStorageSync("list_home_benefits"),
                              c = _.jg.getAttr("list_new_guest_float"),
                              s = k()().format(K.RA);
                            if (r) a = c && c === s ? {} : r;
                            else a = e;
                          }
                          return (
                            null !== (n = a) &&
                              void 0 !== n &&
                              n.pictureUrl &&
                              (this.ubtTrace(K.oN.newGuestShow.key, {
                                bizKey: K.oN.newGuestShow.bizKey,
                              }),
                              (i = {
                                bannerInfo: a,
                                bannerStyle: "background-image: url(".concat(
                                  null === (l = a) || void 0 === l
                                    ? void 0
                                    : l.pictureUrl,
                                  ")"
                                ),
                                type: K.Zi.NEW_GUEST,
                                thresholdKey: B.Z.THRESHOLD_KEY.NEW_GUEST,
                                thresholdValue: 6e4,
                              })),
                            i
                          );
                        },
                      },
                      {
                        key: "getUserPromotionBanner",
                        value: function () {
                          return (0, L.lD)({ data: { clientVersion: $e } })
                            .then(function (e) {
                              return Promise.resolve(e);
                            })
                            .catch(function (e) {
                              return Promise.reject(e);
                            });
                        },
                      },
                      {
                        key: "processPromotionBannerData",
                        value: function (e) {
                          var t = [],
                            n = (0, s.Z)(e, 1)[0],
                            i = [K.Zi.GUESS_STUDENT];
                          if (
                            ([
                              K.Zi.STUDENT_PROMOTION,
                              K.Zi.GUESS_STUDENT,
                            ].includes(null == n ? void 0 : n.typeEnum) &&
                              t.push({
                                bannerInfo: Object.assign({}, n, {
                                  isOnlyImage: i.includes(n.typeEnum),
                                }),
                                type: K.Zi.MEMBER,
                                thresholdKey: K.Zi.MEMBER,
                              }),
                            [
                              K.Zi.FLIGHT_CASH,
                              K.Zi.TRAIN_TIED_CASH,
                              K.Zi.SUBSIDY_ACTIVITY,
                              K.Zi.MEMBER_EXPERIENCE,
                            ].includes(null == n ? void 0 : n.typeEnum))
                          ) {
                            var a = {
                                backgroundImage: "url(".concat(K.wu, ")"),
                              },
                              l =
                                n.typeEnum === K.Zi.TRAIN_TIED_CASH
                                  ? K.Zi.TRAIN_TIED_CASH
                                  : K.Zi.MEMBER_EXPERIENCE,
                              o = n.backgroundImg
                                ? Object.assign(a, {
                                    backgroundImage: "url(".concat(
                                      n.backgroundImg,
                                      ")"
                                    ),
                                    height: "90rpx",
                                  })
                                : a;
                            t.push({
                              bannerInfo: Object.assign({}, n, {
                                bannerViewStyle: o,
                                bannerViewClassName: "banner-view ".concat(
                                  this.state.bannerViewClass[l]
                                ),
                                bannerIconStyle: {
                                  width: "34px",
                                  height: "34px",
                                },
                              }),
                              type: l,
                              thresholdKey: l,
                            });
                          }
                          return t;
                        },
                      },
                      {
                        key: "onClearFilterItem",
                        value: function (e) {
                          var t,
                            n = e.data.filterID,
                            i = this.state,
                            a = i.filterAllSelected,
                            l = i.quickFilterSelected,
                            o = i.unrecommendedFilters,
                            r = i.keywordInfo,
                            c = o.filter(function (e) {
                              return e.data.filterID !== n;
                            }),
                            s = {
                              showSkeleton: !0,
                              unrecommended: c.length > 0,
                              unrecommendedFilters: c,
                            };
                          (null == r || null === (t = r.data) || void 0 === t
                            ? void 0
                            : t.filterID) === n && (s.keywordInfo = {});
                          var u = a.filter(function (e) {
                            return e.data.filterID !== n;
                          });
                          u.length !== a.length && (s.filterAllSelected = u);
                          var d = l.filter(function (e) {
                            return e.data.filterID !== n;
                          });
                          return (
                            d.length !== l.length &&
                              (s.quickFilterSelected = d),
                            s
                          );
                        },
                      },
                      {
                        key: "combineFormattedInfo",
                        value: function (e, t, n) {
                          var i = e.data,
                            a = e.extra,
                            l = t[i.filterID];
                          if (!l) return [];
                          var o = [l];
                          if (Array.isArray(l) && n) {
                            var r = ""
                              .concat(i.filterID, "~")
                              .concat(n.data.title);
                            o = (l = l.find(function (e) {
                              return e.filterKey === r;
                            }))
                              ? [l]
                              : [];
                          } else Array.isArray(l) && (o = l);
                          var c = [];
                          return (
                            o.forEach(function (e) {
                              var t = e.linkTitleStr,
                                n = e.parentOperation,
                                l = e.rootOperation,
                                o = e.tabOneIndex,
                                r = e.tabTwoIndex,
                                u = e.scenarioNames,
                                d = e.operation,
                                h = (null == a ? void 0 : a.scenarios) || [],
                                f = (0, s.Z)(h, 1)[0],
                                m =
                                  !f || (null != u && u.includes(K.nj[f]))
                                    ? u
                                    : null == u
                                    ? void 0
                                    : u.concat([K.nj[f]]);
                              c.push({
                                data: i,
                                extra: a,
                                operation: d,
                                linkTitleStr: t,
                                parentOperation: n,
                                rootOperation: l,
                                scenarioNames: m,
                                tabOneIndex: o,
                                tabTwoIndex: r,
                              });
                            }),
                            c
                          );
                        },
                      },
                      {
                        key: "isExclusiveSelection",
                        value: function (e, t) {
                          var n,
                            i,
                            a,
                            l,
                            o = e.rootOperation,
                            r = e.linkTitleStr,
                            c = e.parentOperation,
                            s = (
                              (null === (n = t.rootOperation) || void 0 === n
                                ? void 0
                                : n.selfMutexIds) || []
                            ).some(function (e) {
                              var t;
                              return null == o ||
                                null === (t = o.otherMutexIds) ||
                                void 0 === t
                                ? void 0
                                : t.some(function (t) {
                                    return t === e;
                                  });
                            }),
                            u = (null == r ? void 0 : r.split("_")) || [],
                            d =
                              (null === (i = t.linkTitleStr) || void 0 === i
                                ? void 0
                                : i.split("_")) || [],
                            h = u.filter(function (e) {
                              return null == d ? void 0 : d.includes(e);
                            }),
                            f =
                              2 ===
                                (null === (a = e.extra) || void 0 === a
                                  ? void 0
                                  : a.nodeType) ||
                              2 ===
                                (null === (l = t.extra) || void 0 === l
                                  ? void 0
                                  : l.nodeType),
                            m =
                              (r === t.linkTitleStr && f) ||
                              (1 === (null == c ? void 0 : c.mode) &&
                                h.length > 1);
                          return s || m;
                        },
                      },
                      {
                        key: "clearMutuallyExclusiveSelects",
                        value: function (e, t) {
                          for (
                            var n = this,
                              i = [],
                              a = this.state.keywordInfo,
                              l = function (l) {
                                var o = t[l],
                                  r = !0,
                                  c = !1;
                                e.forEach(function (e) {
                                  var t = n.isExclusiveSelection(e, o),
                                    i = n.isKeywrodExclusive(e, o);
                                  (t || i) && (r = !1),
                                    null != a &&
                                      a.data &&
                                      n.isKeywrodExclusive(e, a) &&
                                      (c = !0);
                                }),
                                  r
                                    ? i.push(o)
                                    : n.isFilterSelected(o, a) && (c = !0),
                                  c && n.setState({ keywordInfo: {} });
                              },
                              o = 0;
                            o < t.length;
                            o++
                          )
                            l(o);
                          return [].concat(i, (0, u.Z)(e));
                        },
                      },
                      {
                        key: "isKeywrodExclusive",
                        value: function (e, t) {
                          var n,
                            i,
                            a,
                            l,
                            o,
                            r,
                            c,
                            s,
                            u,
                            d,
                            h =
                              (null === (n = t.operation) || void 0 === n
                                ? void 0
                                : n.selfMutexIds) ||
                              (null === (i = t.rootOperation) || void 0 === i
                                ? void 0
                                : i.selfMutexIds) ||
                              [],
                            f =
                              (null === (a = e.operation) || void 0 === a
                                ? void 0
                                : a.selfMutexIds) ||
                              (null === (l = e.rootOperation) || void 0 === l
                                ? void 0
                                : l.selfMutexIds) ||
                              [],
                            m =
                              (null === (o = t.operation) || void 0 === o
                                ? void 0
                                : o.otherMutexIds) ||
                              (null === (r = t.rootOperation) || void 0 === r
                                ? void 0
                                : r.otherMutexIds) ||
                              [],
                            p =
                              (null === (c = e.operation) || void 0 === c
                                ? void 0
                                : c.otherMutexIds) ||
                              (null === (s = e.rootOperation) || void 0 === s
                                ? void 0
                                : s.otherMutexIds) ||
                              [],
                            v = h.filter(function (e) {
                              return p.some(function (t) {
                                return t === e;
                              });
                            }),
                            g = f.filter(function (e) {
                              return m.some(function (t) {
                                return t === e;
                              });
                            }),
                            I = !1,
                            y =
                              (null == t ||
                              null === (u = t.extra) ||
                              void 0 === u
                                ? void 0
                                : u.scenarios) || [],
                            k =
                              (null == e ||
                              null === (d = e.extra) ||
                              void 0 === d
                                ? void 0
                                : d.scenarios) || [],
                            b = y.filter(function (e) {
                              return k.some(function (t) {
                                return t === e;
                              });
                            });
                          return (
                            null != b && b.length && (I = !0),
                            v.length > 0 || g.length > 0 || I
                          );
                        },
                      },
                      {
                        key: "onFilterTabClick",
                        value: function (e) {
                          var t = this.state.scenarioName !== e.title,
                            n = t ? "up" : "down",
                            i = {
                              scenarioName: t ? e.title : null,
                              showQuickFilter: !1,
                              showQuickFilterPop: !1,
                            };
                          0 === this._scrollTop && (i.economicScrollClass = n),
                            this.ubtTrace(
                              208561,
                              JSON.stringify({
                                bizKey: K.oN.filterTabClick[e.scenario],
                              })
                            ),
                            this.setState(i);
                        },
                      },
                      {
                        key: "getSelectedTitle",
                        value: function (e) {
                          return Object.keys(e)
                            .map(function (t) {
                              return e[t].data.title;
                            })
                            .join(",");
                        },
                      },
                      {
                        key: "getSelectedObject",
                        value: function (e, t) {
                          return null == e
                            ? void 0
                            : e
                                .filter(function (e) {
                                  var n;
                                  return null === (n = e.scenarioNames) ||
                                    void 0 === n
                                    ? void 0
                                    : n.includes(K.nj[t]);
                                })
                                .reduce(function (e, t) {
                                  return (0,
                                  o.Z)((0, o.Z)({}, e), {}, (0, v.Z)({}, t.data.filterID, t));
                                }, {});
                        },
                      },
                      {
                        key: "convertScenarioFilter",
                        value: function (e) {
                          this.state.quickFilterFormatted;
                          var t = e.filterAllSelected,
                            n = e.quickFilterSelected,
                            i = this.getSelectedObject(t, 2),
                            a = this.getSelectedObject(t, 3),
                            l = this.getSelectedObject(t, 4),
                            o = this.getSelectedObject(t, 5);
                          null != n &&
                            n.length &&
                            n.forEach(function (e) {
                              var t = e.scenarioNames,
                                n = e.data.filterID;
                              !i[n] &&
                                null != t &&
                                t.includes(K.nj[2]) &&
                                (i[n] = e),
                                !a[n] &&
                                  null != t &&
                                  t.includes(K.nj[3]) &&
                                  (a[n] = e),
                                !l[n] &&
                                  null != t &&
                                  t.includes(K.nj[4]) &&
                                  (l[n] = e);
                            });
                          var r = {
                            2: this.getSelectedTitle(i),
                            3: this.getSelectedTitle(a),
                            4: this.getSelectedTitle(l),
                            5: this.getSelectedTitle(o),
                          };
                          return {
                            filterSelected: i,
                            positionSelected: a,
                            priceStarSelected: l,
                            sortSelected: o,
                            filterTabsTitle: r,
                          };
                        },
                      },
                      {
                        key: "getQuickFiltersTitle",
                        value: function (e) {
                          var t = {};
                          if (null != e && e.length)
                            for (var n = 0; n < e.length; n++) {
                              var i = e[n],
                                a = i.linkTitleStr.split("_"),
                                l = (0, s.Z)(a, 2),
                                o = (l[0], l[1]);
                              o &&
                                (t[o] || (t[o] = []), t[o].push(i.data.title));
                            }
                          return t;
                        },
                      },
                      {
                        key: "isFilterSelected",
                        value: function (e, t) {
                          var n, i, a, l;
                          return (
                            (null == e || null === (n = e.data) || void 0 === n
                              ? void 0
                              : n.filterID) ===
                              (null == t ||
                              null === (i = t.data) ||
                              void 0 === i
                                ? void 0
                                : i.filterID) &&
                            (null == e || null === (a = e.data) || void 0 === a
                              ? void 0
                              : a.value) ===
                              (null == t ||
                              null === (l = t.data) ||
                              void 0 === l
                                ? void 0
                                : l.value)
                          );
                        },
                      },
                      {
                        key: "onFilterItemChange",
                        value: function (e) {
                          var t = this,
                            n = e.current,
                            i = e.parent,
                            a = n.data.filterID,
                            l = n.data.value,
                            o = this.state,
                            r = o.filterFormatted,
                            c = o.filterAllSelected,
                            s = o.keywordInfo,
                            u = o.quickFilterFormatted,
                            d = o.quickFilterSelected,
                            h = {
                              filterAllSelected: [K.He],
                              quickFilterSelected: [],
                            },
                            f = c.find(function (e) {
                              return t.isFilterSelected(e, n);
                            }),
                            m = d.find(function (e) {
                              return t.isFilterSelected(e, n);
                            }),
                            p = a === K.KM;
                          if (f) {
                            var v;
                            if (
                              ((h.filterAllSelected = c.filter(function (e) {
                                return e.data.filterID !== a;
                              })),
                              p && "0|max" !== l)
                            ) {
                              var g = Object.assign({}, r[K.KM], {
                                data: n.data,
                              });
                              h.filterAllSelected.push(g);
                            }
                            m &&
                              (h.quickFilterSelected = d.filter(function (e) {
                                return e.data.filterID !== a;
                              })),
                              (null == s ||
                              null === (v = s.data) ||
                              void 0 === v
                                ? void 0
                                : v.filterID) === a && (h.keywordInfo = {});
                          } else {
                            var I = this.combineFormattedInfo(n, r, i);
                            h.filterAllSelected =
                              this.clearMutuallyExclusiveSelects(I, c);
                            var y = this.combineFormattedInfo(n, u, i);
                            !m &&
                              null != y &&
                              y.length &&
                              (h.quickFilterSelected =
                                this.clearMutuallyExclusiveSelects(y, d));
                          }
                          return h;
                        },
                      },
                      {
                        key: "onSortItemChange",
                        value: function (e) {
                          var t = e.current,
                            n = e.parent,
                            i = e.key,
                            a = this.state,
                            l = a.filterAllSelected,
                            o = a.filterFormatted,
                            r = a.filterTabsTitle;
                          if (
                            !l.find(function (e) {
                              return e.data.filterID === t.data.filterID;
                            })
                          ) {
                            var c = this.combineFormattedInfo(t, o, n),
                              u = (0, s.Z)(c, 1)[0],
                              d = l.filter(function (e) {
                                var t;
                                return !(
                                  null !== (t = e.scenarioNames) &&
                                  void 0 !== t &&
                                  t.includes(K.nj[5])
                                );
                              });
                            d.push(u);
                            var h = [u];
                            return (
                              (r[i] = this.getSelectedTitle(h)),
                              {
                                filterAllSelected: d,
                                sortSelected: h,
                                filterTabsTitle: r,
                              }
                            );
                          }
                          this.setState({ scenarioName: null });
                        },
                      },
                      {
                        key: "onQuickFilterItemChange",
                        value: function (e) {
                          var t = this,
                            n = e.current,
                            i = e.parent,
                            a = n.data.filterID,
                            l = this.state,
                            o = l.filterFormatted,
                            r = l.quickFilterFormatted,
                            c = l.filterAllSelected,
                            s = l.quickFilterSelected,
                            u = {
                              quickFilterSelected: [],
                              filterAllSelected: [K.He],
                            },
                            d = c.find(function (e) {
                              return t.isFilterSelected(e, n);
                            });
                          if (
                            s.find(function (e) {
                              return t.isFilterSelected(e, n);
                            })
                          )
                            (u.quickFilterSelected = s.filter(function (e) {
                              return e.data.filterID !== a;
                            })),
                              d &&
                                (u.filterAllSelected = c.filter(function (e) {
                                  return e.data.filterID !== a;
                                }));
                          else {
                            var h = this.combineFormattedInfo(n, r, i);
                            u.quickFilterSelected =
                              this.clearMutuallyExclusiveSelects(h, s);
                            var f = this.combineFormattedInfo(n, o, i);
                            !d &&
                              null != f &&
                              f.length &&
                              (u.filterAllSelected =
                                this.clearMutuallyExclusiveSelects(f, c));
                          }
                          return u;
                        },
                      },
                      {
                        key: "onFilterFreeRoom",
                        value: function () {
                          var e;
                          this.onCloseModal(R.fG.ACTIVITY);
                          var t = this.state,
                            n = t.bookDelayInfo,
                            i = t.quickFilterSelected,
                            a = t.quickFilterFormatted;
                          if (
                            null != n &&
                            null !== (e = n.filterDatas) &&
                            void 0 !== e &&
                            e.length
                          ) {
                            var l = (0, s.Z)(n.filterDatas, 1)[0],
                              o = a[l.filterID],
                              r = i.find(function (e) {
                                return e.data.filterID === l.filterID;
                              });
                            if (o && !r) {
                              var c = this.onQuickFilterItemChange({
                                current: o,
                              });
                              (this.freeRoomFilter = l),
                                this.refreshDataWithFilter(c);
                            }
                          }
                        },
                      },
                      {
                        key: "resetAllFilterStates",
                        value: function (e) {
                          var t = [K.He],
                            n = [];
                          if (e) {
                            var i = this.state,
                              a = i.filterFormatted,
                              l = i.quickFilterFormatted,
                              o = this.combineFormattedInfo(e, a),
                              r = (0, s.Z)(o, 1)[0],
                              c = this.combineFormattedInfo(e, l),
                              u = (0, s.Z)(c, 1)[0];
                            r && t.push(r), u && n.push(r);
                          }
                          this.refreshDataWithFilter({
                            filterAllSelected: t,
                            quickFilterSelected: n,
                            keywordInfo: {},
                          });
                        },
                      },
                      {
                        key: "resetFilterSelected",
                        value: function (e) {
                          var t,
                            n,
                            i = this.state,
                            a = i.filterAllSelected,
                            l = i.quickFilterSelected,
                            o = i.keywordInfo,
                            r = K.nj[e],
                            c = a.filter(function (e) {
                              var t;
                              return !(
                                null !== (t = e.scenarioNames) &&
                                void 0 !== t &&
                                t.includes(r)
                              );
                            }),
                            s = a.filter(function (e) {
                              var t;
                              return null === (t = e.scenarioNames) ||
                                void 0 === t
                                ? void 0
                                : t.includes(r);
                            }),
                            u = {
                              filterAllSelected: c,
                              quickFilterSelected: l.filter(function (e) {
                                return !s.some(function (t) {
                                  return t.data.filterID === e.data.filterID;
                                });
                              }),
                            };
                          (null == o ||
                          null === (t = o.extra) ||
                          void 0 === t ||
                          null === (n = t.scenarios) ||
                          void 0 === n
                            ? void 0
                            : n[0]) == e && (u.keywordInfo = {}),
                            this.refreshDataWithFilter(u);
                        },
                      },
                      {
                        key: "resetQuickFilterItems",
                        value: function (e) {
                          var t = this.state,
                            n = t.filterAllSelected,
                            i = t.quickFilterSelected,
                            a = {},
                            l = n.filter(function (t) {
                              return !e.some(function (e) {
                                return e.data.filterID === t.data.filterID;
                              });
                            }),
                            o = i.filter(function (t) {
                              return !e.some(function (e) {
                                return e.data.filterID === t.data.filterID;
                              });
                            }),
                            r = !1;
                          l.length !== n.length &&
                            ((r = !0), (a.filterAllSelected = l)),
                            o.length !== i.length &&
                              ((r = !0), (a.quickFilterSelected = o)),
                            r && this.refreshDataWithFilter(a);
                        },
                      },
                      {
                        key: "handleKeywordCallback",
                        value: function (e) {
                          var t = e.city,
                            n = e.item,
                            i = this.state,
                            a = i.cityId;
                          if (
                            (i.filterFormatted,
                            i.quickFilterFormatted,
                            null != t &&
                              t.cityId &&
                              String(t.cityId) !== a &&
                              this.onCityChange(t),
                            null != n && n.data)
                          ) {
                            var l = this.processKeywordCallback(n);
                            this.refreshDataWithFilter(l, !0);
                          }
                        },
                      },
                      {
                        key: "processKeywordCallback",
                        value: function (e) {
                          var t = this,
                            n = this.state,
                            i = n.filterAllSelected,
                            a = n.filterFormatted,
                            l = n.quickFilterFormatted,
                            r = n.quickFilterSelected,
                            c = [],
                            s = [],
                            u = e.data.filterID;
                          if (a[u] || l[u]) {
                            if (a[u]) {
                              var d = (0, O.Uu)(a[u]);
                              i.find(function (n) {
                                return t.isFilterSelected(n, e);
                              }) ||
                                (c.push(d),
                                (c = this.clearMutuallyExclusiveSelects(c, i)));
                            }
                            if (l[u]) {
                              var h = (0, O.Uu)(l[u]);
                              r.find(function (n) {
                                return t.isFilterSelected(n, e);
                              }) ||
                                (s.push(h),
                                (s = this.clearMutuallyExclusiveSelects(s, r)));
                            }
                          } else {
                            var f = (0, o.Z)(
                              (0, o.Z)({}, e),
                              {},
                              { scenarioNames: [K.nj[7]] }
                            );
                            f.scenarioType || (f.scenarioType = ""),
                              f.hasOwnProperty("filterType") ||
                                (f.filterType = 0),
                              f.hasOwnProperty("sceneBitMap") ||
                                (f.sceneBitMap = 0);
                            var m = e.data.isHotel ? [K.He] : i;
                            c.push(null != f && f.data ? f : { data: f }),
                              (c = this.clearExclusiveWithKeyword(c, m));
                          }
                          return {
                            keywordInfo: e,
                            isHotelSearch: e.data.isHotel,
                            filterAllSelected: c,
                            quickFilterSelected: s,
                          };
                        },
                      },
                      {
                        key: "clearExclusiveWithKeyword",
                        value: function (e, t) {
                          for (
                            var n = this,
                              i = [],
                              a = function (a) {
                                var l = t[a],
                                  o = !0;
                                e.forEach(function (e) {
                                  n.isKeywrodExclusive(e, l) && (o = !1);
                                }),
                                  o && i.push(l);
                              },
                              l = 0;
                            l < t.length;
                            l++
                          )
                            a(l);
                          return [].concat(i, (0, u.Z)(e));
                        },
                      },
                      {
                        key: "processKeywordAndFilterInfo",
                        value: function (e) {
                          for (
                            var t = this.state,
                              n = t.filterAllSelected,
                              i = t.filterFormatted,
                              a = t.quickFilterFormatted,
                              l = t.quickFilterSelected,
                              o = {
                                filterAllSelected: (0, u.Z)(n),
                                quickFilterSelected: (0, u.Z)(l),
                              },
                              r = function (t) {
                                var n,
                                  l = e[t],
                                  r =
                                    (null === (n = l.data) || void 0 === n
                                      ? void 0
                                      : n.filterID) || l.filterID;
                                if (i[r]) {
                                  var c = (0, O.Uu)(i[r]);
                                  !o.filterAllSelected.find(function (e) {
                                    return e.data.filterID === r;
                                  }) && o.filterAllSelected.push(c);
                                } else if (a[r]) {
                                  var s = (0, O.Uu)(a[r]);
                                  !o.quickFilterSelected.find(function (e) {
                                    return e.data.filterID === r;
                                  }) && o.quickFilterSelected.push(s);
                                } else
                                  (l.scenarioNames = [K.nj[7]]),
                                    l.scenarioType || (l.scenarioType = ""),
                                    l.hasOwnProperty("filterType") ||
                                      (l.filterType = 0),
                                    l.hasOwnProperty("sceneBitMap") ||
                                      (l.sceneBitMap = 0),
                                    o.filterAllSelected.push(
                                      null != l && l.data ? l : { data: l }
                                    );
                              },
                              c = 0;
                            c < e.length;
                            c++
                          )
                            r(c);
                          return o;
                        },
                      },
                      {
                        key: "processHotelList",
                        value: function (e, t) {
                          var n,
                            i,
                            a,
                            l,
                            r,
                            c = this.state,
                            d = c.topBanners,
                            h = c.recommendLimit,
                            f = c.modals,
                            m = c.isEconomic,
                            p = c.cityName,
                            v = e.bizInfo,
                            g = void 0 === v ? {} : v,
                            I = e.totalCount,
                            y = e.filters,
                            k = e.currentPosition,
                            b = e.hotelList,
                            w = e.traceAdContextId,
                            S = g.regionExtraInfo,
                            Z = g.userExtraInfo,
                            C = g.activityExtraInfo,
                            N = (null == b ? void 0 : b.length) < h,
                            T = (null == b ? void 0 : b.length) > 0 && N,
                            x =
                              null != b && b.length
                                ? this.setHotelTagsInfo(b)
                                : [],
                            E = N ? x : [],
                            D = {
                              hasNextPage: I > x.length,
                              hotelList: x,
                              loadingState: 2,
                              realList: E,
                              showTagSkeleton: !1,
                              showSkeleton: T,
                              traceAdContextId: w,
                              topBanners: t ? [] : (0, u.Z)(d),
                              totalCount: I,
                              memberInfo: null == Z ? void 0 : Z.memberInfo,
                            };
                          k && (D.currentPosition = k);
                          var F,
                            V =
                              null == y
                                ? void 0
                                : y.find(function (e) {
                                    return 4 === e.type;
                                  });
                          if (
                            ((D.hotFilterList =
                              null == V ||
                              null === (n = V.filter) ||
                              void 0 === n
                                ? void 0
                                : n.subItems.slice(0, 6)),
                            null != b && b.length && !p)
                          ) {
                            var A = (0, s.Z)(b, 1)[0];
                            D.cityName = A.cityName;
                          }
                          if (
                            (null != S &&
                              S.hotelRankingListInfo &&
                              (D.hotelRankingListInfo =
                                null == S ? void 0 : S.hotelRankingListInfo),
                            null != S &&
                              null !== (i = S.hotLocationRecommend) &&
                              void 0 !== i &&
                              i.locationHotList)
                          ) {
                            var L =
                              S.hotLocationRecommend.locationHotList || [];
                            D.locationHotList = L.map(function (e) {
                              return (0,
                              o.Z)((0, o.Z)({}, e), {}, { userSelection: (0, O.xC)(e.userSelection) });
                            });
                          }
                          if (
                            (null != S &&
                              null !== (a = S.noticeInfo) &&
                              void 0 !== a &&
                              a.content &&
                              D.topBanners.push({
                                bannerInfo: g.regionExtraInfo.noticeInfo,
                                type: K.Zi.NOTICE,
                                thresholdKey: K.Zi.NOTICE,
                              }),
                            null != S &&
                              null !== (l = S.customConfigs) &&
                              void 0 !== l &&
                              l.length)
                          )
                            D.topBanners.push({
                              bannerInfo: g.regionExtraInfo.customConfigs,
                              type: K.Zi.ADVERTISEMENT,
                              thresholdKey: K.Zi.ADVERTISEMENT,
                            });
                          else {
                            var H = D.topBanners.findIndex(function (e) {
                              return e.type === K.Zi.ADVERTISEMENT;
                            });
                            H > -1 && D.topBanners.splice(H, 1);
                          }
                          if (
                            (null != Z &&
                              null !== (r = Z.userImportantRight) &&
                              void 0 !== r &&
                              r.state &&
                              !P.default.isAlipay &&
                              D.topBanners.push({
                                bannerInfo: (0, o.Z)(
                                  (0, o.Z)(
                                    {},
                                    g.userExtraInfo.userImportantRight
                                  ),
                                  {},
                                  {
                                    desc: (0, O.xC)(
                                      g.userExtraInfo.userImportantRight.desc ||
                                        ""
                                    ),
                                    showClose: !0,
                                  }
                                ),
                                type: K.Zi.MEMBER,
                                thresholdKey: K.Zi.MEMBER,
                              }),
                            !m && Array.isArray(y) && y.length >= 1)
                          ) {
                            var _ = y.filter(function (e) {
                                return 1 === e.type;
                              }),
                              X = (0, s.Z)(_, 1)[0];
                            if (X) {
                              D.quickFilterData = X.filter;
                              var M = {};
                              this.formatInitialFilterData(
                                "快筛",
                                D.quickFilterData,
                                M
                              ),
                                (D.quickFilterFormatted = M);
                            }
                          }
                          if (D.hasNextPage) {
                            var U = this.QueryInstance.get().index;
                            w && this.QueryInstance.setQuery({ adTraceId: w }),
                              this.fetchHotelList({ index: U + 1 });
                          }
                          if (null != C && C.bookDelayInfo) {
                            if (
                              ((D.bookDelayInfo = C.bookDelayInfo),
                              C.bookDelayInfo.backgroundImg)
                            ) {
                              var G;
                              null !== (G = C.bookDelayInfo.couponItemList) &&
                                void 0 !== G &&
                                G.length &&
                                (D.bookDelayInfo.coupon =
                                  C.bookDelayInfo.couponItemList[0]);
                              var q = f.filter(function (e) {
                                  return e.type !== R.fG.ACTIVITY;
                                }),
                                Q = {
                                  modalInfo: D.bookDelayInfo,
                                  type: R.fG.ACTIVITY,
                                  visible: !0,
                                };
                              (Q.thresholdKey = B.Z.THRESHOLD_KEY.ACTIVITY_POP),
                                (Q.thresholdValue = 864e5),
                                (D.modals = [].concat((0, u.Z)(q), [Q]));
                            }
                          } else D.bookDelayInfo = {};
                          return (
                            null != C && C.atmosphereInfo
                              ? ((D.atmosphereInfo = C.atmosphereInfo),
                                null !== (F = C.atmosphereInfo) &&
                                  void 0 !== F &&
                                  F.hotelPictureUrl &&
                                  D.topBanners.push({
                                    bannerInfo: C.atmosphereInfo,
                                    bannerStyle: "background-image:url(".concat(
                                      C.atmosphereInfo.hotelPictureUrl,
                                      ")"
                                    ),
                                    type: K.Zi.ATMOSPHERE,
                                  }))
                              : (D.topBanners = D.topBanners.filter(function (
                                  e
                                ) {
                                  return e.type !== K.Zi.ATMOSPHERE;
                                })),
                            D
                          );
                        },
                      },
                      {
                        key: "setHotelTagsInfo",
                        value: function (e) {
                          return null == e
                            ? void 0
                            : e.map(function (e) {
                                var t,
                                  n,
                                  i,
                                  a,
                                  l = e.recommendWord,
                                  r = e.commentView,
                                  c = e.hotelAddInfo,
                                  u = void 0 === c ? {} : c,
                                  d = e.hotelExtraInfo,
                                  h = void 0 === d ? {} : d,
                                  f = (0, o.Z)((0, o.Z)((0, o.Z)({}, e), u), h);
                                f.commonScore = parseFloat(
                                  f.commonScore
                                ).toFixed(1);
                                var m =
                                  null === (t = f.promotionTagList) ||
                                  void 0 === t
                                    ? void 0
                                    : t.findIndex(function (e) {
                                        return 1 === e.style;
                                      });
                                m > -1 && f.promotionTagList.splice(m, 1);
                                var p =
                                  null === (n = u.commentTagList) ||
                                  void 0 === n
                                    ? void 0
                                    : n
                                        .map(function (e) {
                                          return e.text;
                                        })
                                        .join("，");
                                p && (f.commentView = l || r || p),
                                  f.star &&
                                    (f.starList = new Array(
                                      parseInt(f.star)
                                    ).fill(1)),
                                  (f.nearByPoi || f.zone || f.location) &&
                                    (f.zoneStr =
                                      f.nearByPoi || f.zone || f.location);
                                var v = f.priceInfo,
                                  g = v.couponTag,
                                  I = v.couponSalePrice,
                                  y = v.salePrice,
                                  k = v.noLoginPrice,
                                  b = v.priceExtraDatas,
                                  w = void 0 === b ? [] : b,
                                  S = g ? I : y;
                                (f.displayPrice = k || S),
                                  (f.showDiscountInfo =
                                    !!g ||
                                    (null === (i = f.promotionDiscountList) ||
                                    void 0 === i
                                      ? void 0
                                      : i.length) > 0),
                                  (f.promotionDiscountList =
                                    (null === (a = f.promotionDiscountList) ||
                                    void 0 === a
                                      ? void 0
                                      : a.slice(0, 2)) || []);
                                var Z = (0, s.Z)(w, 1)[0];
                                return (
                                  [5, 6].includes(
                                    null == Z ? void 0 : Z.type
                                  ) && (f.bargainIcon = Z.icon),
                                  f
                                );
                              });
                        },
                      },
                      {
                        key: "getNextPageHotelList",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                n,
                                i,
                                a,
                                l,
                                c,
                                s,
                                u,
                                d,
                                h,
                                f,
                                m,
                                p,
                                v,
                                g,
                                I,
                                y,
                                k,
                                b,
                                w,
                                S = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          !this.isLoading &&
                                            4 !== this.loadingState)
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 3:
                                        if (
                                          ((this.isLoading = !0),
                                          this.setState({
                                            loadingState: 1,
                                            nextPageTips: K.X3.LOADING,
                                          }),
                                          (t = this.state),
                                          (n = t.hasNextPage),
                                          (i = t.hotelList),
                                          (a = t.traceAdContextId),
                                          (l = this.QueryInstance.get()),
                                          (c = l.index),
                                          (s = l.pageSize),
                                          this.QueryInstance.setQuery({
                                            index: c + 1,
                                          }),
                                          a &&
                                            this.QueryInstance.setQuery({
                                              adTraceId: a,
                                            }),
                                          n)
                                        ) {
                                          e.next = 17;
                                          break;
                                        }
                                        if (!(i.length < s)) {
                                          e.next = 15;
                                          break;
                                        }
                                        return (
                                          (e.next = 13),
                                          this.getRecommendHotelList()
                                        );
                                      case 13:
                                        e.next = 16;
                                        break;
                                      case 15:
                                        this.setState({
                                          loadingState: 4,
                                          nextPageTips: K.X3.NO_MORE,
                                        });
                                      case 16:
                                        return e.abrupt("return");
                                      case 17:
                                        return (
                                          (e.next = 19), this.fetchHotelList()
                                        );
                                      case 19:
                                        if (null == (u = e.sent) || !u.data) {
                                          e.next = 38;
                                          break;
                                        }
                                        if (
                                          ((h = u.data),
                                          (f = h.bizInfo),
                                          (m = h.totalCount),
                                          (p = h.traceAdContextId),
                                          (v = f.regionExtraInfo),
                                          (g = this.setHotelTagsInfo(
                                            u.data.hotelList || []
                                          )),
                                          (I = i.concat(g)),
                                          (y = {
                                            hasNextPage: !1,
                                            hotelList: I,
                                            loadingState: 2,
                                            totalCount: m,
                                            traceAdContextId: p,
                                          }),
                                          null != g && g.length)
                                        ) {
                                          e.next = 33;
                                          break;
                                        }
                                        return (
                                          (k = this.QueryInstance.get()),
                                          (b = k.index),
                                          (y.loadingState = 4),
                                          (y.nextPageTips = K.X3.NO_MORE),
                                          this.QueryInstance.setQuery({
                                            index: b - 1,
                                          }),
                                          this.setState(y, function () {
                                            S.isLoading = !1;
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 33:
                                        null != v &&
                                          null !==
                                            (d = v.hotLocationRecommend) &&
                                          void 0 !== d &&
                                          d.locationHotList &&
                                          ((w =
                                            v.hotLocationRecommend
                                              .locationHotList || []),
                                          (y.locationHotList = w.map(function (
                                            e
                                          ) {
                                            return (0, o.Z)(
                                              (0, o.Z)({}, e),
                                              {},
                                              {
                                                userSelection: (0, O.xC)(
                                                  e.userSelection
                                                ),
                                              }
                                            );
                                          }))),
                                          (y.hasNextPage = m > I.length),
                                          this.setState(y, function () {
                                            if (
                                              ((S.isLoading = !1),
                                              y.hasNextPage)
                                            ) {
                                              var e = S.QueryInstance.get();
                                              S.fetchHotelList({
                                                index: e.index + 1,
                                              });
                                            }
                                          }),
                                          (e.next = 40);
                                        break;
                                      case 38:
                                        (0, C.showToast)(K.X3.NO_HOTEL),
                                          (this.isLoading = !1);
                                      case 40:
                                        e.next = 46;
                                        break;
                                      case 42:
                                        (e.prev = 42),
                                          (e.t0 = e.catch(0)),
                                          (this.isLoading = !1),
                                          console.error(
                                            "=> getNextPageHotelList error",
                                            e.t0
                                          );
                                      case 46:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 42]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getHotelSearchFilter",
                        value: function (e) {
                          var t,
                            n,
                            i,
                            a = (0, s.Z)(e, 1)[0],
                            l = this.QueryInstance.get("hotelType"),
                            o =
                              null == a ||
                              null === (t = a.geoList) ||
                              void 0 === t
                                ? void 0
                                : t.find(function (e) {
                                    return 2 === e.type;
                                  }),
                            r =
                              null == a ||
                              null === (n = a.geoList) ||
                              void 0 === n
                                ? void 0
                                : n.find(function (e) {
                                    return 3 === e.type;
                                  }),
                            c = 2 === l ? o : r,
                            u = c ? [c.lat, c.lon, a.shortName] : [];
                          return (
                            null != c &&
                              c.lat &&
                              c.lon &&
                              (((i = {
                                scenarioType: "",
                                filterType: 0,
                                sceneBitMap: 0,
                              }).filterID = K.K4.type_key_destPosition),
                              (i.type = K.K4.type_key_destPosition),
                              (i.title = a.shortName),
                              (i.subType = "1"),
                              (i.value = u
                                .filter(function (e) {
                                  return !!e;
                                })
                                .join("|"))),
                            i
                          );
                        },
                      },
                      {
                        key: "getMyPositionSearchFilter",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, i, a;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          null !== (t = this.currentGeoInfo) &&
                                          void 0 !== t &&
                                          t.lat
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          (e.next = 3),
                                          (0, D.y9)("gcj02", !0).catch()
                                        );
                                      case 3:
                                        if (
                                          null != (i = e.sent) &&
                                          i.latitude
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 6:
                                        this.currentGeoInfo = {
                                          lat: i.latitude,
                                          lon: i.longitude,
                                        };
                                      case 7:
                                        return (
                                          ((n = {
                                            scenarioType: "",
                                            filterType: 0,
                                            sceneBitMap: 0,
                                          }).filterID = K.K4.type_my_position),
                                          (n.type = K.K4.type_my_position),
                                          (n.title = this.state.cityName),
                                          (n.subType = "1"),
                                          (a = [
                                            this.currentGeoInfo.lat,
                                            this.currentGeoInfo.lon,
                                            1,
                                          ]),
                                          (n.value = a
                                            .filter(function (e) {
                                              return !!e;
                                            })
                                            .join("|")),
                                          e.abrupt("return", n)
                                        );
                                      case 15:
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
                        key: "getRecommendHotelList",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n,
                                i,
                                a,
                                l,
                                o,
                                c,
                                s,
                                d,
                                h,
                                f,
                                m,
                                p,
                                v,
                                g,
                                I,
                                y,
                                k,
                                b,
                                w,
                                S,
                                Z,
                                C,
                                N,
                                T = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (n = this.state),
                                          (i = n.filterFormatted),
                                          (a = n.quickFilterFormatted),
                                          (l = n.recommendList),
                                          (o = n.isHotelSearch),
                                          (c = n.currentPosition),
                                          (s = t || this.state.realList || []),
                                          (d =
                                            this.QueryInstance.getQuery(
                                              "queryFilterList"
                                            )),
                                          (h = (0, u.Z)(K.UG)),
                                          c &&
                                            c.keywordType !== K.K4.type_10023 &&
                                            h.push(K.K4.type_hot_key_word),
                                          (f = d.filter(function (e) {
                                            return !h.includes(e.type);
                                          })),
                                          (m = {
                                            queryFilterList: f,
                                            hiddenHotelList: s.map(function (
                                              e
                                            ) {
                                              return e.hotelId;
                                            }),
                                          }),
                                          !o && 1 !== s.length)
                                        ) {
                                          e.next = 13;
                                          break;
                                        }
                                        (p = this.getHotelSearchFilter(s)) &&
                                          m.queryFilterList.push(p),
                                          (e.next = 18);
                                        break;
                                      case 13:
                                        if (!(s.length < 7)) {
                                          e.next = 18;
                                          break;
                                        }
                                        return (
                                          (e.next = 16),
                                          this.getMyPositionSearchFilter()
                                        );
                                      case 16:
                                        (v = e.sent) &&
                                          m.queryFilterList.push(v);
                                      case 18:
                                        return (
                                          (e.next = 20),
                                          this.fetchHotelList(m, !0)
                                        );
                                      case 20:
                                        if (
                                          ((g = e.sent),
                                          (I = g.data),
                                          (y = I.hotelList),
                                          (k = I.traceAdContextId),
                                          (b = I.totalCount),
                                          (w = this.setHotelTagsInfo(y)),
                                          (S =
                                            null != t && t.length
                                              ? w
                                              : l.concat(w)),
                                          (Z = {
                                            loadingState: 2,
                                            recommendList: S,
                                            showSkeleton: !1,
                                            traceAdContextId: k,
                                          }),
                                          y.length)
                                        ) {
                                          e.next = 31;
                                          break;
                                        }
                                        return (
                                          (null != t && t.length) ||
                                            ((C = this.QueryInstance.get()),
                                            (N = C.index),
                                            this.QueryInstance.setQuery({
                                              index: N - 1,
                                            })),
                                          (Z.loadingState = 4),
                                          (Z.nextPageTips = K.X3.NO_MORE),
                                          this.setState(Z, function () {
                                            T.isLoading = !1;
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 31:
                                        (Z.unrecommended = !0),
                                          (Z.unrecommendedFilters = d
                                            .filter(function (e) {
                                              return (
                                                "17" !== e.type &&
                                                e.filterID !==
                                                  K.K4.type_my_position
                                              );
                                            })
                                            .map(function (e) {
                                              var t =
                                                i[e.filterID] || a[e.filterID];
                                              return Array.isArray(t)
                                                ? t[0]
                                                : t;
                                            })
                                            .filter(function (e) {
                                              return !!e;
                                            })),
                                          this.setState(Z, function () {
                                            if (
                                              ((T.isLoading = !1), b > y.length)
                                            ) {
                                              var e = T.QueryInstance.get();
                                              (m.index = e.index + 1),
                                                T.fetchHotelList(m);
                                            }
                                          }),
                                          (e.next = 41);
                                        break;
                                      case 36:
                                        (e.prev = 36),
                                          (e.t0 = e.catch(0)),
                                          (this.isLoading = !1),
                                          this.setState({ showSkeleton: !1 }),
                                          console.error(
                                            "=> getRecommendHotelList",
                                            e.t0
                                          );
                                      case 41:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 36]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "fetchHotelList",
                        value: function (e, t) {
                          var n = this;
                          return new Promise(function (i) {
                            var a = n.state.traceDatas,
                              l = Object.assign({}, n.QueryInstance.get(), e);
                            n.queryTimeMillis ||
                              (n.queryTimeMillis = new Date().getTime());
                            var o = Object.assign({}, l, {
                              queryTimeMillis: n.queryTimeMillis,
                            });
                            t &&
                              (o.traceData = null == a ? void 0 : a[l.index]),
                              n.ubtTrace(K.oN.listQuery, {
                                DeviceToken: I.ZP.openid,
                                Sequence: o,
                              }),
                              (0, X.it)({ data: l }, et)
                                .then(function (e) {
                                  var t, o, r, c;
                                  if (
                                    (null !== (t = e.data) &&
                                      void 0 !== t &&
                                      t.traceData &&
                                      ((a[l.index] = e.data.traceData),
                                      n.setState({
                                        traceDatas: n.state.traceDatas,
                                      })),
                                    1 === e.resultCode)
                                  )
                                    return (
                                      n.ubtTrace(K.oN.listRes, {
                                        DeviceToken: I.ZP.openid,
                                        Sequence: {
                                          totalCount: e.data.totalCount,
                                          posrem:
                                            null ===
                                              (o = e.data.currentPosition) ||
                                            void 0 === o
                                              ? void 0
                                              : o.positionRemark,
                                          radius:
                                            null ===
                                              (r = e.data.currentPosition) ||
                                            void 0 === r
                                              ? void 0
                                              : r.radius,
                                          keyWordType:
                                            null ===
                                              (c = e.data.currentPosition) ||
                                            void 0 === c
                                              ? void 0
                                              : c.keyWordType,
                                          cityId: l.cityId,
                                          cityName: l.cityName,
                                          queryTimeMillis: n.queryTimeMillis,
                                          traceData: e.data.traceData,
                                        },
                                      }),
                                      i(e)
                                    );
                                  n.handleListFailedStates();
                                })
                                .catch(function (e) {
                                  console.error("fetchHotelList error", e),
                                    n.handleListFailedStates();
                                });
                          });
                        },
                      },
                      {
                        key: "handleListFailedStates",
                        value: function () {
                          this.setState({
                            hotelList: [],
                            totalCount: 0,
                            loadingState: 3,
                            showSkeleton: !1,
                            showTagSkeleton: !1,
                          });
                        },
                      },
                      {
                        key: "handleKeywordClear",
                        value: function () {
                          var e,
                            t = this.state,
                            n = t.filterAllSelected,
                            i = t.quickFilterSelected,
                            a = t.keywordInfo,
                            l =
                              (null === (e = a.data) || void 0 === e
                                ? void 0
                                : e.filterID) || a.filterID,
                            o = {
                              isHotelSearch: !1,
                              keywordInfo: {},
                              isKeywordClear: !0,
                            },
                            r = n.find(function (e) {
                              return e.data.filterID === l;
                            }),
                            c = i.find(function (e) {
                              return e.data.filterID === l;
                            });
                          r &&
                            (o.filterAllSelected = n.filter(function (e) {
                              return e.data.filterID !== l;
                            })),
                            c &&
                              (o.quickFilterSelected = i.filter(function (e) {
                                return e.data.filterID !== l;
                              })),
                            this.refreshDataWithFilter(o, !0);
                        },
                      },
                      {
                        key: "toKeywordSearch",
                        value: function () {
                          var e = this.state,
                            t = e.cityId,
                            n = e.cityAddress,
                            i = e.cityName,
                            a = e.checkInDate,
                            l = e.checkOutDate;
                          this.navigateTo({
                            url: "/pages/hotel/keywordsearch/index?cityId="
                              .concat(t, "&cityName=")
                              .concat(i, "&cityAddress=")
                              .concat(n, "&checkInDate=")
                              .concat(a, "&checkOutDate=")
                              .concat(l),
                            callback: this.handleKeywordCallback,
                          });
                        },
                      },
                      {
                        key: "getClearedStates",
                        value: function () {
                          return {
                            filterAllSelected: [K.He],
                            keywordInfo: {},
                            filterInfo: {},
                            isHotelSearch: !1,
                            quickFilterSelected: [],
                            unrecommended: !1,
                            unrecommendedFilters: [],
                          };
                        },
                      },
                      {
                        key: "setQueryWithCity",
                        value: function (e) {
                          this.setState(
                            (0, o.Z)(
                              (0, o.Z)(
                                (0, o.Z)(
                                  (0, o.Z)({}, e),
                                  this.getClearedStates()
                                ),
                                this.convertScenarioFilter({
                                  filterAllSelected: [K.He],
                                  quickFilterSelected: [],
                                })
                              ),
                              {},
                              {
                                scenarioName: null,
                                showSkeleton: !0,
                                showTagSkeleton: !0,
                              }
                            )
                          ),
                            this.QueryInstance.resetFilterQuery(),
                            this.QueryInstance.setQuery({
                              cityId: e.cityId,
                              cityAddress: e.cityAddress,
                              cityName: e.cityName,
                              districtId: e.districtId || "0",
                              index: 1,
                              sameCityFlag: this.currentCityId === e.cityId,
                            });
                        },
                      },
                      {
                        key: "onCityChange",
                        value: function (e) {
                          this.setQueryWithCity(e), this.refreshFetchData();
                        },
                      },
                      {
                        key: "onDateChange",
                        value: function (e) {
                          var t = this.state,
                            n = t.checkInDate,
                            i = t.checkOutDate;
                          (e.checkInDate === n && e.checkOutDate === i) ||
                            (this.QueryInstance.setQuery({
                              index: 1,
                              checkInDate: e.checkInDate,
                              checkOutDate: e.checkOutDate,
                            }),
                            this.setState({
                              showSkeleton: !0,
                              checkInDate: e.checkInDate,
                              checkOutDate: e.checkOutDate,
                            }),
                            this.refreshFetchData());
                        },
                      },
                      {
                        key: "onLoginWithBanner",
                        value: function () {
                          this.ubtTrace(208560, {
                            bizKey: "hotel_list_banner_click",
                            type: "LOGIN",
                            title: "登录",
                            clickType: "choose",
                          }),
                            I.ZP.doLogin()
                              .then(function () {})
                              .catch(function () {
                                console.log("login error");
                              });
                        },
                      },
                      {
                        key: "onCloseLoginBanner",
                        value: function () {
                          this.setState({ loginBannerVisible: !1 });
                        },
                      },
                      {
                        key: "onClickCouponBanner",
                        value: function (e) {
                          this.ubtTrace(208560, {
                            bizKey: "hotel_list_banner_click",
                            type: K.Zi.COUPON,
                            title: e.title || e.content,
                            clickType: "choose",
                          });
                          var t = e.action,
                            n = e.jumpUrl;
                          if ("checkCoupon" === t) this.toCardPage();
                          else if ("jumpH5" === t)
                            n.indexOf("http") > -1
                              ? V.Z.twebview({ data: { url: n } })
                              : this.navigateTo({ url: R.ns.MEMBER });
                          else if ("receiveCoupon" === t)
                            this.onShowCouponModal();
                          else if (t === K.En) {
                            var i = this.state.filterFormatted[K.M_],
                              a = this.onQuickFilterItemChange({ current: i });
                            a && this.refreshDataWithFilter(a);
                          }
                        },
                      },
                      {
                        key: "onHideCouponModal",
                        value: function () {
                          var e = this.state.modals,
                            t = e.find(function (e) {
                              return e.type === R.fG.COUPON;
                            }),
                            n = e.filter(function (e) {
                              return e.type !== R.fG.COUPON;
                            });
                          t &&
                            ((t.forceVisible = !1),
                            this.setState({
                              modals: [].concat((0, u.Z)(n), [t]),
                            }));
                        },
                      },
                      {
                        key: "onShowCouponModal",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.isLogin,
                            i = t.modals;
                          if (n) {
                            var a = i.find(function (e) {
                                return e.type === R.fG.COUPON;
                              }),
                              l = i.filter(function (e) {
                                return e.type !== R.fG.COUPON;
                              });
                            null != a && a.couponPackage
                              ? ((a.forceVisible = !0),
                                this.setState({
                                  modals: [].concat((0, u.Z)(l), [a]),
                                }))
                              : this.toCardPage();
                          } else
                            I.ZP.doLogin()
                              .then(function () {
                                e.refreshHotelQuery(), e.refreshFetchData();
                              })
                              .catch(function () {
                                console.log("login error");
                              });
                        },
                      },
                      {
                        key: "toCardPage",
                        value: function () {
                          var e = this;
                          I.ZP.isLogin
                            ? this.navigateTo({ url: R.ns.COUPON })
                            : I.ZP.doLogin()
                                .then(function () {
                                  e.refreshHotelQuery(),
                                    e.refreshFetchData(),
                                    e.navigateTo({ url: R.ns.COUPON });
                                })
                                .catch(function () {});
                        },
                      },
                      {
                        key: "onReceiveCoupon",
                        value: function (e, t) {
                          var n = this;
                          if (e.promotionKey && e.scene) {
                            var i = {
                              promotionReceiveEntityList: [
                                { promotionKey: e.promotionKey },
                              ],
                              scene: e.scene,
                            };
                            (0, M.Ro)(i)
                              .then(function (i) {
                                n.processReceivedCouponInfo(i, e, t),
                                  n.refreshFetchData();
                              })
                              .catch(function (e) {
                                n.getCouponError(e.toString());
                              });
                          }
                        },
                      },
                      {
                        key: "onReceiveOfAKey",
                        value: function (e, t) {
                          var n = this;
                          e.promotionKey &&
                            e.scene &&
                            (0, L.nG)({
                              data: {
                                scene: e.scene,
                                promotionKeyList: e.promotionKeyList,
                                clientVersion: B.Z.clientVersion,
                              },
                            })
                              .then(function (i) {
                                n.processReceivedCouponInfo(i, e, t),
                                  n.refreshFetchData();
                              })
                              .catch(function (e) {
                                n.getCouponError(e.toString());
                              });
                        },
                      },
                      {
                        key: "processReceivedCouponInfo",
                        value: function (e, t, n) {
                          var i = this.state.modals,
                            a =
                              null == e ? void 0 : e.promotionReceiveEntityList,
                            l = (0, s.Z)(a, 1)[0];
                          if (
                            1 !== (null == e ? void 0 : e.resultCode) ||
                            1 !== (null == l ? void 0 : l.receiveCode)
                          )
                            this.getCouponError(
                              (null == e ? void 0 : e.resultMessage) ||
                                l.message ||
                                "领取失败"
                            );
                          else {
                            (0, C.showToast)("领取成功");
                            var o = i.filter(function (e) {
                              return e.type !== (n || R.fG.COUPON);
                            });
                            "receiveCoupon" !== t.action &&
                              this.setState({ modals: o });
                          }
                        },
                      },
                      {
                        key: "getCouponError",
                        value: function (e) {
                          S().showToast({
                            title: e || "网络错误，请稍候再试",
                            icon: "none",
                            duration: 1500,
                          });
                        },
                      },
                      {
                        key: "onCloseModal",
                        value: function (e) {
                          var t = this.state.modals,
                            n = t.filter(function (t) {
                              return t.type !== e;
                            });
                          n !== t && this.setState({ modals: n });
                        },
                      },
                      {
                        key: "onCloseCollectCardModal",
                        value: function () {
                          this.ubtTrace(222797, { PageId: this.pageId }),
                            this.setState({ showCollectCardModal: !1 });
                        },
                      },
                      {
                        key: "onReceiveBenefitsCoupon",
                        value: function () {
                          var e = this;
                          this.ubtTrace(K.oN.newGuestClick.key, {
                            bizKey: K.oN.newGuestClick.bizKey,
                          });
                          var t = function () {
                            e.receiveCouponByScenePromise().then(function () {
                              e.setState({ showSkeleton: !0 }),
                                e.refreshHotelQuery(),
                                e.refreshFetchData();
                            });
                          };
                          if (!this.state.isLogin && !I.ZP.isLogin)
                            return (
                              (this.isReceivingCoupon = !0),
                              void I.ZP.doLogin()
                                .then(function () {
                                  return t();
                                })
                                .catch(function (e) {
                                  return console.error(e);
                                })
                            );
                          t();
                        },
                      },
                      {
                        key: "receiveCouponByScenePromise",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, i, a, l, o, c, s;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (i = this.state.topBanners),
                                          (a = i.find(function (e) {
                                            return e.type === K.Zi.NEW_GUEST;
                                          })),
                                          (l =
                                            (null == a
                                              ? void 0
                                              : a.bannerInfo) || {}),
                                          (o = l.promotionKeyList),
                                          (c = l.scene),
                                          2 === l.status && o && c)
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 6:
                                        return (
                                          (e.next = 8),
                                          (0, L.nG)({
                                            data: {
                                              scene: c,
                                              promotionKeyList: o,
                                              clientVersion: $e,
                                            },
                                          })
                                        );
                                      case 8:
                                        null != (s = e.sent) &&
                                        null !== (t = s.errors) &&
                                        void 0 !== t &&
                                        null !== (n = t.errorFields) &&
                                        void 0 !== n &&
                                        n.message
                                          ? (0, C.showToast)(
                                              s.errors.errorFields.message
                                            )
                                          : 1 === s.resultCode &&
                                            (_.jg.setAttr(
                                              B.Z.THRESHOLD_KEY.NEW_GUEST,
                                              new Date().getTime()
                                            ),
                                            (0, C.showToast)(
                                              K.X3.RECEIVED_SUCCESS
                                            )),
                                          (e.next = 15);
                                        break;
                                      case 12:
                                        (e.prev = 12),
                                          (e.t0 = e.catch(0)),
                                          console.error(
                                            "receiveCouponByScenePromise error",
                                            e.t0
                                          );
                                      case 15:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 12]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "checkScanHotelVipTask",
                        value: function () {
                          1 === H.Tr.scanHotelVipTaskStatus &&
                            setTimeout(function () {
                              (0, C.showToast)(
                                "已浏览酒店，抢票".concat(A.Z.SPEED_PACK, "+2")
                              ),
                                (H.Tr.scanHotelVipTaskStatus = 2);
                            }, 0);
                        },
                      },
                      {
                        key: "setCountDownImpl",
                        value: function (e) {
                          var t = new Date().getTime(),
                            n = this.millisToSecond(e) - this.millisToSecond(t);
                          return (0, O.JV)(n).stop;
                        },
                      },
                      {
                        key: "millisToSecond",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          if ("undefined" !== e)
                            return 10 == e.toString().length
                              ? e
                              : Math.floor(e / 1e3);
                        },
                      },
                      {
                        key: "checkTime",
                        value: function (e) {
                          var t = e;
                          return e < 10 && (t = "0" + e), t.toString();
                        },
                      },
                      {
                        key: "onComfirmPriceModal",
                        value: function (e) {
                          var t = e.hotel,
                            n = this.state,
                            i = n.currentPosition,
                            a = n.checkInDate,
                            l = n.checkOutDate,
                            o = {
                              query: this.QueryInstance.get(),
                              hotel: t,
                              geoList: null != i && i.geoList ? i.geoList : [],
                              posrem:
                                (null == i ? void 0 : i.positionRemark) || "",
                              positionRemarkType:
                                (null == i ? void 0 : i.keywordType) || "",
                              queryTimeMillis: this.queryTimeMillis,
                            };
                          (o.query.checkInDate = a),
                            (o.query.checkOutDate = l),
                            this.onSkipToDetailImpl(o);
                        },
                      },
                      {
                        key: "onSkipToDetailImpl",
                        value: function (e) {
                          var t,
                            n,
                            i = this,
                            a = !1;
                          null !== (t = e.hotel.hotelAddInfo) &&
                            void 0 !== t &&
                            t.tonightEndTime &&
                            (a = !this.setCountDownImpl(
                              null === (n = e.hotel.hotelAddInfo) ||
                                void 0 === n
                                ? void 0
                                : n.tonightEndTime
                            ));
                          var l = null,
                            o = e.hotel.hotelStatus;
                          o & K.Qj.CLOSED
                            ? (l = "歇业")
                            : o & K.Qj.SOLD_OUT && (l = "满房"),
                            this.ubtTrace(208561, {
                              bizKey: "hotel_list_hotelcard_click",
                              Hotelid: e.hotel.hotelId,
                              type: a ? "tonightSale" : "",
                              saleType: l,
                            }),
                            this.navigateTo({
                              url: "/pages/hotel/detail/detail",
                              data: e,
                              callback: function (e) {
                                return (
                                  (null == e ? void 0 : e.needResetList) &&
                                  i.resetAllFilterStates()
                                );
                              },
                            });
                        },
                      },
                      {
                        key: "toHotelDetail",
                        value: function (e, t) {
                          var n,
                            i,
                            a = this.state,
                            l = a.bookDelayInfo,
                            o = a.checkInDate,
                            r = a.checkOutDate,
                            c = a.hotelList,
                            u = a.recommendList,
                            d = a.currentPosition,
                            h = a.traceAdContextId,
                            f = a.quickFilterSelected,
                            m = a.filterFormatted,
                            p = a.quickFilterFormatted,
                            v = a.traceDatas,
                            g = "recommend" === t ? u[e] : c[e],
                            I = Object.assign({}, this.QueryInstance.get(), {
                              checkInDate: o,
                              checkOutDate: r,
                            }),
                            y = I.queryFilterList.map(function (e) {
                              var t = m[e.filterID] || p[e.filterID];
                              return t
                                ? Array.isArray(t)
                                  ? t[0]
                                  : t
                                : { data: e };
                            }),
                            k = "recommend" === t ? c.length - 1 + e : e,
                            b = {
                              query: I,
                              hotel: g,
                              filters: y,
                              geoList: null != d && d.geoList ? d.geoList : [],
                              posrem:
                                (null == d ? void 0 : d.positionRemark) || "",
                              positionRemarkType:
                                (null == d ? void 0 : d.keywordType) || "",
                              traceData: v[Math.ceil(I.index / I.pageSize)],
                              queryTimeMillis: this.queryTimeMillis,
                              hotelIndex: k,
                            };
                          if (
                            null != l &&
                            null !== (n = l.filterDatas) &&
                            void 0 !== n &&
                            n.length
                          ) {
                            var w,
                              S,
                              Z = (0, s.Z)(l.filterDatas, 1)[0],
                              C = f.find(function (e) {
                                return e.data.filterID === Z.filterID;
                              });
                            !C ||
                              null === (w = C.operation) ||
                              void 0 === w ||
                              !w.isRoomFilter ||
                              (null !== (S = C.operation) &&
                                void 0 !== S &&
                                S.islocalfilter) ||
                              (b.checkInFreeFilter = C.data);
                          }
                          if (
                            null !== (i = g.hotelExtraInfo) &&
                            void 0 !== i &&
                            i.advertiseFlag
                          ) {
                            this.ubtTrace(208561, {
                              adPosition: k,
                              bizKey: "hotel_list_advertising_click",
                              hotelId: g.hotelId,
                              traceAdContextId: h,
                            });
                            var N = {
                              data: {
                                adPosition: k,
                                hotelId: g.hotelId,
                                pageId: P.default.isTieyou
                                  ? 10650018760
                                  : 10650018583,
                                reportType: 2,
                                traceAdContextId: h,
                              },
                            };
                            (0, X.Yb)(N)
                              .then(function () {})
                              .catch(function (e) {
                                console.error(e);
                              });
                          }
                          this.onSkipToDetailImpl(b);
                        },
                      },
                      {
                        key: "onPageClick",
                        value: function () {
                          this.EventsHub.trigger(K.H9.PAGE_CLICK);
                        },
                      },
                      {
                        key: "onClickEconomicFilter",
                        value: function (e) {
                          var t =
                              this.state.quickFilterFormatted[e.data.filterID],
                            n = this.onQuickFilterItemChange({ current: t });
                          this.refreshDataWithFilter(n);
                        },
                      },
                      {
                        key: "onClickQuickFilter",
                        value: function (e) {
                          if (this.state.isEconomic)
                            return this.onClickEconomicFilter(e);
                          var t =
                              this.state.quickFilterFormatted[e.data.filterID],
                            n = Array.isArray(t) ? t[0] : t,
                            i = this.onQuickFilterItemChange({ current: n });
                          this.refreshDataWithFilter(i),
                            this.setFilterUbtTrace(n, "quickFilter");
                        },
                      },
                      {
                        key: "onResetQuickFilter",
                        value: function () {
                          var e = this.state,
                            t = e.quickFilterData,
                            n = e.quickFilterSelected,
                            i = e.quickFilterIndex,
                            a = t.subItems[i],
                            l = [];
                          a.subItems.forEach(function (e) {
                            var t;
                            if (
                              null !== (t = e.subItems) &&
                              void 0 !== t &&
                              t.length
                            )
                              e.subItems.forEach(function (e) {
                                var t = n.find(function (t) {
                                  return t.data.filterID === e.data.filterID;
                                });
                                t && l.push(t);
                              });
                            else {
                              var i = n.find(function (t) {
                                return t.data.filterID === e.data.filterID;
                              });
                              i && l.push(i);
                            }
                          }),
                            this.resetQuickFilterItems(l);
                        },
                      },
                      {
                        key: "onToggleQuickFilterPopup",
                        value: function (e) {
                          e.stopPropagation();
                          var t = {
                            showQuickFilter: !this.state.showQuickFilter,
                          };
                          t.showQuickFilter || (t.showQuickFilterPop = !1),
                            this.setState(t);
                        },
                      },
                      {
                        key: "onCloseQuickFilterPopup",
                        value: function () {
                          this.state.showQuickFilter &&
                            this.setState({ showQuickFilter: !1 });
                        },
                      },
                      {
                        key: "onCloseFilterPop",
                        value: function () {
                          this.setState({ scenarioName: null });
                        },
                      },
                      {
                        key: "onGetScrollData",
                        value: function (e) {
                          var t,
                            n = this;
                          if (
                            (console.log(e), null != e && e["zt-virtial-list"])
                          ) {
                            var i = this.state,
                              a = i.economicScrollClass,
                              l = i.topIconVisible,
                              o =
                                null === (t = e["zt-virtial-list"]) ||
                                void 0 === t
                                  ? void 0
                                  : t.detail;
                            (this._scrollTop =
                              (null == o ? void 0 : o.scrollTop) || 0),
                              this.state.isEconomic &&
                                ((null == o ? void 0 : o.scrollTop) < 50
                                  ? "down" !== a &&
                                    this.setState({
                                      economicScrollClass: "down",
                                    })
                                  : "up" !== a &&
                                    this.setState({
                                      economicScrollClass: "up",
                                    })),
                              (null == o ? void 0 : o.scrollTop) > 1500
                                ? !l && this.setState({ topIconVisible: !0 })
                                : l && this.setState({ topIconVisible: !1 }),
                              this.isScrolling ||
                                ((this.isScrolling = !0),
                                this.setState({ isScrolling: !0 })),
                              this.scrollTimeout &&
                                (clearTimeout(this.scrollTimeout),
                                (this.scrollTimeout = null)),
                              (this.scrollTimeout = setTimeout(function () {
                                n.isScrolling &&
                                  ((n.isScrolling = !1),
                                  n.setState({ isScrolling: !1 }));
                              }, 500));
                          }
                        },
                      },
                      {
                        key: "onHomeWindowClick",
                        value: function (e) {
                          var t = e.windowCode,
                            n = e.jumpUrl;
                          "trainUser" !== t
                            ? n && n.indexOf("http") > -1
                              ? this.toHotelWeb(n)
                              : n
                              ? this.navigateTo({ url: n })
                              : this.onCloseModal(R.fG.HOME_WINDOW)
                            : this.onCloseModal(R.fG.HOME_WINDOW);
                        },
                      },
                      {
                        key: "toHotelWeb",
                        value: function (e) {
                          e && V.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "onActivityFloatClick",
                        value: function () {
                          var e = this.state,
                            t = e.bookDelayInfo,
                            n = e.modals;
                          if (
                            (0 === t.type &&
                              this.ubtTrace(222829, { PageId: this.pageId }),
                            null != t && t.url)
                          )
                            return this.toHotelWeb(t.url);
                          var i = n.filter(function (e) {
                              return e.type !== R.fG.ACTIVITY;
                            }),
                            a = {
                              modalInfo: t,
                              type: R.fG.ACTIVITY,
                              visible: !0,
                            };
                          i.push(a), this.setState({ modals: i });
                        },
                      },
                      {
                        key: "toTop",
                        value: function () {
                          var e,
                            t = this,
                            n = { scrollToTop: !0, topIconVisible: !1 };
                          this._scrollTop > 2500 &&
                            (null === (e = this.state.hotelList) || void 0 === e
                              ? void 0
                              : e.length) > 30 &&
                            (n.showSkeleton = !0),
                            this.setState(n, function () {
                              setTimeout(function () {
                                t.setState({
                                  scrollToTop: !1,
                                  showSkeleton: !1,
                                });
                              }, 300);
                            });
                        },
                      },
                      {
                        key: "reload",
                        value: function () {
                          this.setState({
                            showTagSkeleton: !0,
                            showSkeleton: !0,
                          }),
                            this.fetchData();
                        },
                      },
                      {
                        key: "onSetShowNewModal",
                        value: function () {
                          this.setState({ showNewModal: !1 });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.atmosphereInfo,
                            i = t.bookDelayInfo,
                            a = t.checkInDate,
                            l = t.checkOutDate,
                            o = t.cityAddress,
                            r = t.cityName,
                            c = t.currentPosition,
                            s = t.economicScrollClass,
                            u = t.filterFormatted,
                            d = t.filterScenariosData,
                            h = t.filterSelected,
                            f = t.filterTabsTitle,
                            m = t.filterAllSelected,
                            p = t.hotFilterList,
                            v = t.hotelList,
                            g = t.hotelRankingListInfo,
                            I = t.isEconomic,
                            y = t.isFreeRoomActivity,
                            k = t.isScrolling,
                            w = t.keywordInfo,
                            S = t.listFromPagesMapping,
                            Z = t.loadingState,
                            C = t.locationHotList,
                            T = t.loginBannerVisible,
                            x = t.modals,
                            E = t.nextPageTips,
                            D = t.positionSelected,
                            F = t.priceStarSelected,
                            V = t.quickFilterData,
                            B = (t.quickFilterFormatted, t.quickFilterSelected),
                            A = t.recommendList,
                            L = t.scenarioName,
                            H = t.screenWidth,
                            R = t.screenHeight,
                            _ = t.scrollToTop,
                            X = t.showCollectCardModal,
                            M = t.showNewModal,
                            Q = t.showSkeleton,
                            j = t.showTagSkeleton,
                            W = t.smallHoursFlag,
                            z = t.sortSelected,
                            Y = t.topBanners,
                            J = t.topIconVisible,
                            ee = t.totalCount,
                            te = t.unrecommended,
                            ie = t.unrecommendedFilters,
                            ae = t.memberInfo,
                            le = t.roomNumber,
                            oe = this.QueryInstance,
                            re = this.EventsHub,
                            ce = this.fromPage,
                            se = X
                              ? []
                              : x.filter(function (e) {
                                  return e.visible;
                                }),
                            ue = (0, O.gP)(
                              null == n ? void 0 : n.basePictureUrl,
                              "background-image: url(".concat(
                                null == n ? void 0 : n.basePictureUrl,
                                ")"
                              )
                            ),
                            de = (0, O.gP)(I, "economic-theme ".concat(s)),
                            he = "page hotel-list ".concat(P.default.zxTyStr);
                          return (0, q.BX)(b.View, {
                            className: he,
                            id: "AXFT",
                            onClick: this.onPageClick,
                            children: [
                              (0, q.tZ)(b.View, { id: "scrollTopId" }),
                              (0, q.BX)(b.View, {
                                children: [
                                  (0, q.BX)(b.View, {
                                    className: "top-theme-wrap",
                                    style: ue,
                                    children: [
                                      (0, q.BX)(b.View, {
                                        className: de,
                                        children: [
                                          (0, q.tZ)($, {
                                            title: r,
                                            EventsHub: re,
                                            pageId: this.pageId,
                                            isEconomic: I,
                                          }),
                                          (0, q.tZ)(ne, {
                                            checkInDate: a,
                                            checkOutDate: l,
                                            cityAddress: o,
                                            cityName: r,
                                            isAtmosphere: ue,
                                            isEconomic: I,
                                            handleKeywordCallback:
                                              this.handleKeywordCallback,
                                            keywordInfo: w,
                                            onCityChange: this.onCityChange,
                                            onDateChange: this.onDateChange,
                                            onDateShow: this.onDateShow,
                                            smallHoursFlag: W,
                                            toKeywordSearch:
                                              this.toKeywordSearch,
                                            handleKeywordClear:
                                              this.handleKeywordClear,
                                          }),
                                        ],
                                      }),
                                      (0, q.tZ)(We, {
                                        scenarioName: L,
                                        filterTabsTitle: f,
                                        onFilterTabClick: this.onFilterTabClick,
                                      }),
                                    ],
                                  }),
                                  (0, q.tZ)(ve, {
                                    EventsHub: re,
                                    cityAddress: o,
                                    currentPosition: c,
                                    filterFormatted: u,
                                    filterScenariosData: d,
                                    filterSelected: h,
                                    filterTabsTitle: f,
                                    positionSelected: D,
                                    priceStarSelected: F,
                                    scenarioName: L,
                                    screenWidth: H,
                                    screenHeight: R,
                                    sortSelected: z,
                                    keywordInfo: w,
                                    totalCount: ee,
                                    onCloseFilterPop: this.onCloseFilterPop,
                                  }),
                                ],
                              }),
                              (0, q.tZ)(ze, {
                                dataSelected: B,
                                isEconomic: I,
                                showTagSkeleton: j,
                                quickFilterData: V,
                                onClickQuickFilter: this.onClickQuickFilter,
                              }),
                              (0, q.tZ)(Ye, {
                                isEconomic: I,
                                data: V,
                                dataSelected: B,
                                onClickQuickFilter: this.onClickQuickFilter,
                              }),
                              (0, q.tZ)(He, {
                                EventsHub: re,
                                QueryInstance: oe,
                                cityName: r,
                                reload: this.reload,
                                hotFilterList: p,
                                hotelList: v,
                                hotelRankingListInfo: g,
                                isEconomic: I,
                                keywordInfo: w,
                                listFromPagesMapping: S,
                                loginBannerVisible: T,
                                loadingState: Z,
                                locationHotList: C,
                                nextPageTips: E,
                                recommendList: A,
                                pageId: this.pageId,
                                showSkeleton: Q,
                                showTagSkeleton: j,
                                topBanners: Y,
                                totalCount: ee,
                                unrecommended: te,
                                unrecommendedFilters: ie,
                                filterAllSelected: m,
                                quickFilterSelected: B,
                                roomNumber: le,
                                toHotelDetail: this.toHotelDetail,
                                scrollToTop: _,
                                getNextPageHotelList: this.getNextPageHotelList,
                                onClickCouponBanner: this.onClickCouponBanner,
                                onCloseLoginBanner: this.onCloseLoginBanner,
                                onComfirmPriceModal: this.onComfirmPriceModal,
                                onHideCouponModal: this.onHideCouponModal,
                                onLoginWithBanner: this.onLoginWithBanner,
                                onReceiveBenefitsCoupon:
                                  this.onReceiveBenefitsCoupon,
                                onShowCouponModal: this.onShowCouponModal,
                                onGetScrollData: this.onGetScrollData,
                                date: { checkInDate: a, checkOutDate: l },
                                memberInfo: ae,
                              }),
                              (0, q.tZ)(Qe, {
                                pageId: this.pageId,
                                bookDelayInfo: i,
                                fromPage: ce,
                                listFromPagesMapping: S,
                                visibleModals: se,
                                showNewModal: M,
                                onCloseModal: this.onCloseModal,
                                onFilterFreeRoom: this.onFilterFreeRoom,
                                onHomeWindowClick: this.onHomeWindowClick,
                                onReceiveCoupon: this.onReceiveCoupon,
                                onReceiveOfAKey: this.onReceiveOfAKey,
                                onSetShowNewModal: this.onSetShowNewModal,
                              }),
                              (0, q.tZ)(N.ZtActivityPop, {
                                className: "free-room-modal",
                                show: X,
                                onClose: this.onCloseCollectCardModal,
                                onWrapClose: this.onCloseCollectCardModal,
                                children: (0, q.tZ)(b.View, {
                                  className: "wrap",
                                  children: (0, q.tZ)(b.Image, {
                                    src: K.Y_.COLLECT_CARD,
                                    mode: "widthFix",
                                    id: "AXFU",
                                    onClick: this.onCloseCollectCardModal,
                                  }),
                                }),
                              }),
                              (0, q.tZ)(Xe, {
                                pageId: this.pageId,
                                isFreeRoomActivity: y,
                                isScrolling: k,
                                bookDelayInfo: i,
                                onActivityFloatClick: this.onActivityFloatClick,
                              }),
                              (0, q.tZ)(b.Image, {
                                src: K.Y_.BACK_TOP,
                                className: "bt-icon",
                                style: (0, O.LP)(J),
                                id: "AXFV",
                                onClick: this.toTop,
                              }),
                              (0, q.tZ)(U.Z, {}),
                              (0, q.tZ)(G.Z, {
                                ref: function (t) {
                                  return e.onDrawerAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(g.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              tt,
              "pages/hotel/list/list",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#fff",
                backgroundColorBottom: "#efefef",
                navigationStyle: "custom",
                disableScroll: !0,
                usingComponents: {
                  "hotel-list-item":
                    "./components/HotelListItemV2/HotelListItemV2",
                },
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(26274);
        }),
          e.O();
      },
    ]);
})();
