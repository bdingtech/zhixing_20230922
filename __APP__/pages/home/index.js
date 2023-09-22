!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [61311],
    {
      98403: function (e, t, i) {
        var a = i(32180),
          n = i(79301),
          o = i(95308),
          r = i(298),
          s = i(57042),
          c = i(24460),
          l = i(81876),
          d = i(21867),
          u = i(86066),
          h = i(45023),
          m = i(22276),
          p = i(52500),
          f = i(92954),
          g = i.n(f),
          v = i(71515),
          y = i(79792),
          b = i(49120),
          C = i(81957),
          w = i(79910),
          k = i(13025),
          Z = i(39173),
          S = i(34229),
          N = i(2809),
          I = i(48813),
          T = "ios" === N.ZP.platform,
          x = y.default.isTieyou,
          _ = function () {
            return (0, I.BX)(v.View, {
              className: "flex title",
              children: [
                !T && (0, I.tZ)(v.View, { className: "dot", children: "1" }),
                (0, I.BX)(v.View, {
                  className: "flex-align-items-center title-txt flex-1",
                  children: [
                    (0, I.tZ)(v.Text, { children: "点击右上角" }),
                    (0, I.tZ)(v.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Pop-ups/xdd@3x.png",
                      className: "guide-icon",
                    }),
                    (0, I.tZ)(v.Text, { children: "添加到我的小程序" }),
                  ],
                }),
              ],
            });
          },
          D = function () {
            return (0, I.tZ)(v.View, {
              className: "gif-bg ".concat(x ? "ty" : "zx"),
              children: (0, I.tZ)(v.Image, {
                src: x
                  ? T
                    ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/Pop-ups/TYiOS.gif"
                    : "https://images3.c-ctrip.com/ztrip/train.song/order_details/Pop-ups/TYAD.gif"
                  : T
                  ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/Pop-ups/ZXiOS.gif"
                  : "https://images3.c-ctrip.com/ztrip/train.song/order_details/Pop-ups/ZXAD.gif",
                className: "gif",
              }),
            });
          },
          B = (0, p.memo)(function (e) {
            var t = e.isShow,
              i = e.onClose,
              a = e.top;
            return (0,
            I.BX)(S.ZtActivityPop, { show: t, onClose: i, onWrapClose: i, isShowClose: !1, className: "home-add-guide-pop", animation: "scale", popStyle: "margin-top: ".concat(a + 10, "px;\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;"), children: [(0, I.tZ)(v.Image, { className: "triangle-icon", src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Pop-ups/xjt@3x.png" }), (0, I.BX)(v.View, { className: "content", children: [T ? (0, I.BX)(v.View, { children: [(0, I.tZ)(_, {}), (0, I.tZ)(D, {})] }) : (0, I.BX)(v.View, { children: [(0, I.tZ)(_, {}), (0, I.tZ)(D, {}), (0, I.BX)(v.View, { className: "step flex", children: [(0, I.tZ)(v.View, { className: "dot", children: "2" }), (0, I.BX)(v.View, { className: "flex-1 title-txt", children: ["如果添加失败, 前往设置开启微信", (0, I.tZ)(v.Text, { className: "color-primary", children: "「桌面快捷方式」" }), "权限"] })] }), (0, I.tZ)(v.Image, { className: "quick-icon", src: x ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/Pop-ups/tyaz@3x.png" : "https://images3.c-ctrip.com/ztrip/train.song/order_details/Pop-ups/zxaz@3x.png" }), (0, I.BX)(v.View, { className: "step flex", children: [(0, I.tZ)(v.View, { className: "dot", children: "3" }), (0, I.tZ)(v.View, { className: "flex-1 title-txt", children: "开启权限后再尝试添加桌面" })] })] }), (0, I.tZ)(v.Button, { className: "btn", id: "AAAE", onClick: i, children: "知道了，去试试" })] })] });
          }),
          V = i(18783),
          P = i(3205),
          M = i(58676),
          A = i(21999),
          L = i(894),
          H = i(8271),
          X = i.n(H),
          O = i(18433),
          F = y.default.isTieyou,
          Y = p.default.memo(function (e) {
            var t,
              i = e.title,
              a = e.showGuidePop,
              n = e.showSignInEntrance,
              o = e.toSignInActivity,
              r = e.observeCallback,
              s = (0, O.Z)({
                selector: "#home-cus-header",
                targetSelector: "#home-search-content",
                observeCallback: r,
                callbackDeps: [],
              });
            return (0,
            I.BX)(v.View, { style: "height: 44px", className: "home-header ".concat(F ? "ty" : "zx"), id: "home-cus-header", ref: s, children: [n ? (0, I.tZ)(v.View, { className: "sign-icon flex-center", id: "AYBP", onClick: o, children: (0, I.tZ)(v.Image, { src: F ? "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/ty/icon_sy_qd_ty@3x.png" : "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/icon_sy_qd@3x.png", className: "sign-img" }) }) : (0, I.tZ)(v.View, { className: "empty-sign" }), (0, I.tZ)(v.Text, { className: "title", children: i }), y.default.isWechat && (0, I.tZ)(v.View, { className: "guide flex-align-items-center", style: "right: " + (((null === (t = w.A.menuInfo) || void 0 === t ? void 0 : t.width) || 0) + 20) + "px", id: "AYBQ", onClick: a, children: (0, I.BX)(v.View, { className: "guide-add flex-align-items-center", children: [(0, I.tZ)(v.Image, { src: F ? "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/ty/icon_sy_add_ty@3x.png" : "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/icon_sy_add@3x.png", className: "add-sign" }), (0, I.tZ)(v.Text, { children: "ios" !== w.A.platform ? "加桌面" : "小程序" })] }) })] });
          }),
          R = y.default.isTieyou,
          z = {
            train:
              "https://images3.c-ctrip.com/ztrip/train_bin/23-04/zxlx/img_zxlx_bt_hcp@3x.png",
            hotel:
              "https://images3.c-ctrip.com/ztrip/train_bin/23-04/zxlx/img_zxlx_bt_jd@3x.png",
            flight:
              "https://images3.c-ctrip.com/ztrip/train_bin/23-04/zxlx/img_zxlx_bt_jp@3x.png",
            bus: "https://images3.c-ctrip.com/ztrip/train_bin/23-04/zxlx/img_zxlx_bt_qcp@3x.png",
          },
          U = p.default.memo(function (e) {
            var t = e.tab,
              i = e.onBack;
            return (0,
            I.BX)(v.View, { style: "height: 44px", className: "home-header st-home-header ".concat(R ? "ty" : "zx"), children: [(0, I.tZ)(v.View, { className: "back-view", onClick: i, children: (0, I.tZ)(v.Text, { className: "iconfont2 ifont2-fanhui_linea_24 back" }) }), (0, I.BX)(v.View, { style: "position:relative", children: [(0, I.tZ)(v.Image, { src: z[t], className: "title-bg" }), (0, I.tZ)(v.Image, { src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/zs_zxlx_bc@3x.png", className: "header-bc" })] })] });
          }),
          E = p.default.memo(function (e) {
            var t = e.onSearch;
            return (0,
            I.BX)(v.View, { className: "home-search-bar ".concat(y.default.isTieyou ? "ty" : "zx"), children: [(0, I.tZ)(v.Image, { src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/ywrk/icon_ss@3x.webp", className: "search-icon" }), (0, I.tZ)(v.View, { className: "search-txt ".concat(y.default.isTieyou ? "ty" : "zx"), id: "AYCE", onClick: t, children: "搜索：目的地·酒店·景点" }), (0, I.tZ)(v.Button, { className: "btn ".concat(y.default.isTieyou ? "ty" : "zx"), id: "AYCF", onClick: t, children: "搜索" })] });
          }),
          j = y.default.isTieyou,
          G = function (e) {
            var t = e.tabList,
              i = e.selectTab,
              a = e.switchTab,
              n = e.scrollBarClass,
              o = e.couponPrice,
              r = e.hotelCornerMark,
              s = e.flightCornerMark;
            return (0, I.tZ)(v.Block, {
              children: (0, I.BX)(v.View, {
                className: "home-tabs ".concat(j ? "ty" : "zx"),
                children: [
                  null == t
                    ? void 0
                    : t.map(function (e, t) {
                        return (0, I.BX)(
                          v.View,
                          {
                            className: "tab-item "
                              .concat(e.tab, " ")
                              .concat(i === e.tab ? "current" : ""),
                            id: "AYCH",
                            onClick: function () {
                              return a(e.tab);
                            },
                            children: [
                              (0, I.tZ)(v.View, {
                                className: "title",
                                children: e.title,
                              }),
                              "flight" === e.tab &&
                                (0, I.tZ)(v.View, {
                                  className: "coupon-tag " + (j ? "ty" : "zx"),
                                  children:
                                    s || (o > 0 ? "可减" + o + "元" : "买贵赔"),
                                }),
                              "hotel" === e.tab &&
                                r &&
                                (0, I.tZ)(v.View, {
                                  className: "coupon-tag " + (j ? "ty" : "zx"),
                                  children: r,
                                }),
                            ],
                          },
                          t
                        );
                      }),
                  (0, I.tZ)(v.View, {
                    className: "home-scrollbar ".concat(n),
                    style: "width:".concat(100 / t.length, "%"),
                    children: (0, I.tZ)(v.View, {
                      className: "scrollbar-icon",
                    }),
                  }),
                ],
              }),
            });
          },
          W = p.default.memo(function (e) {
            var t = e.tabList,
              i = e.selectTab,
              a = e.switchTab,
              n = e.scrollBarClass,
              o = e.couponPrice,
              r = e.hotelCornerMark,
              s = e.flightCornerMark;
            return (0,
            I.tZ)(G, { tabList: t, selectTab: i, switchTab: a, scrollBarClass: n, couponPrice: o, hotelCornerMark: r, flightCornerMark: s });
          }),
          K = {
            train: {
              icon_small_zx:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/icon_hc_xd_yx_wx@3x.png",
              icon_small_zx_select:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/icon_hc_xd_yx@3x.png",
              icon_small_ty:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/ty/icon_hc_xd_yx_wx_ty@3x.png",
              icon_small_ty_select:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/ty/icon_hc_xd_yx_ty@3x.png",
            },
            flight: {
              icon_small_zx:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/icon_fj_xd_yx_wx@3x.png",
              icon_small_zx_select:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/icon_fj_xd_yx@3x.png",
              icon_small_ty:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/ty/icon_fj_xd_yx_wx_ty@3x.png",
              icon_small_ty_select:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/ty/icon_fj_xd_yx_ty@3x.png",
            },
            hotel: {
              icon_small_zx:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/icon_jd_xd_yx_wx@3x.png",
              icon_small_zx_select:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/icon_jd_xd_yx@3x.png",
              icon_small_ty:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/ty/icon_jd_xd_yx_wx_ty@3x.png",
              icon_small_ty_select:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/ty/icon_jd_xd_yx_ty@3x.png",
            },
            bus: {
              icon_small_zx:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/icon_qc_xd_yx_wx@3x.png",
              icon_small_zx_select:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/icon_qc_xd_yx@3x.png",
              icon_small_ty:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/ty/icon_qc_xd_yx_wx_ty@3x.png",
              icon_small_ty_select:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-03/xcx/ty/icon_qc_xd_yx_ty@3x.png",
            },
            ticket: {
              icon_small_zx: "",
              icon_small_zx_select: "",
              icon_small_ty:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-08/sy/icon_ty_mp_jgq@3x.png",
              icon_small_ty_select:
                "https://images3.c-ctrip.com/ztrip/train_bin/23-08/icon_tysy_mp@3x.png",
            },
          },
          q = y.default.isTieyou,
          Q = p.default.memo(function (e) {
            var t = e.tabList,
              i = e.selectTab,
              a = e.switchTab,
              n = e.scrollBarClass,
              o = e.isShowSmallTab;
            return (0, I.tZ)(v.Block, {
              children: (0, I.BX)(v.View, {
                className: "home-small-tabs ".concat(q ? "ty" : "zx"),
                style: o ? "" : "display:none",
                children: [
                  null == t
                    ? void 0
                    : t.map(function (e, t) {
                        var n, o;
                        return (0, I.BX)(
                          v.View,
                          {
                            className: "tab-item "
                              .concat(q ? "ty" : "zx", " ")
                              .concat(e.tab, " ")
                              .concat(i === e.tab ? "current" : ""),
                            id: "AYCG",
                            onClick: function () {
                              return a(e.tab);
                            },
                            children: [
                              (0, I.tZ)(v.Image, {
                                src:
                                  null === (n = K[e.tab]) || void 0 === n
                                    ? void 0
                                    : n[
                                        "icon_small_".concat(
                                          q ? "ty" : "zx",
                                          "_select"
                                        )
                                      ],
                                className: "small-icon",
                                style: i === e.tab ? "" : "display:none",
                              }),
                              (0, I.tZ)(v.Image, {
                                src:
                                  null === (o = K[e.tab]) || void 0 === o
                                    ? void 0
                                    : o["icon_small_".concat(q ? "ty" : "zx")],
                                className: "small-icon",
                                style: i === e.tab ? "display:none" : "",
                              }),
                              (0, I.tZ)(v.Text, {
                                children:
                                  "汽车/船票" === e.title ? "汽车票" : e.title,
                              }),
                            ],
                          },
                          t
                        );
                      }),
                  (0, I.tZ)(v.View, {
                    className: "home-scrollbar ".concat(n),
                    style: "width:".concat(100 / t.length, "%"),
                    children: (0, I.tZ)(v.View, {
                      className: "small-scrollbar ".concat(q ? "ty" : "zx"),
                    }),
                  }),
                ],
              }),
            });
          }),
          J = i(90983),
          $ = i(90129),
          ee = i(9062),
          te = i(14469),
          ie = i(59086),
          ae = i(20592),
          ne = i(86977),
          oe = i(94190),
          re = i(2326),
          se = i(55916),
          ce = i(94350);
        var le = p.default.memo(function (e) {
            var t = e.startName,
              i = e.endName,
              a = e.handleExchange,
              n = e.handleSelect,
              o = e.isExchange;
            return (0, I.BX)(v.View, {
              className: "item station",
              children: [
                (0, I.tZ)(v.View, {
                  className: "cell from " + (o ? "slide" : ""),
                  "data-type": "d",
                  id: "AYAa",
                  onClick: n,
                  children: (0, I.tZ)(v.View, {
                    className: "station-txt",
                    children: t,
                  }),
                }),
                (0, I.tZ)(v.View, {
                  className: "cell to " + (o ? "slide" : ""),
                  "data-type": "a",
                  id: "AYAb",
                  onClick: n,
                  children: (0, I.tZ)(v.View, {
                    className: "station-txt",
                    children: i,
                  }),
                }),
                (0, I.tZ)(v.View, {
                  className: "switch " + (o ? "active" : ""),
                  id: "AYAc",
                  onClick: function (e) {
                    null == a || a(e);
                  },
                  children: (0, I.tZ)(v.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/icon_jh@3x.webp",
                    className: "switch-icon",
                  }),
                }),
              ],
            });
          }),
          de = i(74255);
        function ue(e) {
          var t = e.headHovers,
            i = e.onHeadHoverClick,
            a = e.onHeadHoverClose;
          return (null == t ? void 0 : t.length) > 0
            ? (0, I.tZ)(v.Swiper, {
                autoplay: !0,
                vertical: !0,
                circular: !0,
                className: "flt-head-hover",
                children: t.map(function (e, t) {
                  return (0, I.BX)(
                    v.SwiperItem,
                    {
                      className: "head-hover-item",
                      id: "AYAd",
                      onClick: function () {
                        return null == i ? void 0 : i(e);
                      },
                      children: [
                        (0, I.tZ)(v.Image, {
                          className: "icon",
                          src: e.icon || "",
                        }),
                        (0, I.tZ)(S.ZtRichText, {
                          className: "txt",
                          nodes: e.headText || "",
                        }),
                        (0, I.tZ)(v.Text, {
                          className: "ifont-closed iconfont",
                          id: "AYAe",
                          onClick: function () {
                            return null == a ? void 0 : a(e);
                          },
                        }),
                      ],
                    },
                    t
                  );
                }),
              })
            : (0, I.tZ)(I.HY, {});
        }
        var he,
          me,
          pe,
          fe,
          ge = i(85377),
          ve = i(60370),
          ye = i(62657),
          be = y.default.isTieyou,
          Ce =
            (0, C.h)(!0)(
              (he = (function (e) {
                (0, d.Z)(i, e);
                var t = (0, u.Z)(i);
                function i(e) {
                  var a;
                  return (
                    (0, s.Z)(this, i),
                    (a = t.call(this, e)),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "$instance",
                      (0, f.getCurrentInstance)()
                    ),
                    (0, h.Z)((0, l.Z)(a), "pageId", ""),
                    (0, h.Z)((0, l.Z)(a), "fromPage", ""),
                    (0, h.Z)((0, l.Z)(a), "doFlightOnLoadAction", function () {
                      var e = a.props,
                        t = e.onLoadOpts,
                        i = e.hidden,
                        n = t || {},
                        o = n.fromPage,
                        r = void 0 === o ? "" : o,
                        s = n.noPopup,
                        c = void 0 === s ? "0" : s,
                        l = n.shareToken,
                        d = void 0 === l ? "" : l;
                      (a.fromPage = r),
                        (a._noPopup = parseInt(c)),
                        a.loadFlightQueryFromStore(),
                        a.loadFlightAirportCity(),
                        a.getNewUserSubsidy(),
                        a.getFlightPopupAndHeadHovers(),
                        re.Z.recordFromPage(r),
                        "20220708-ztrip-flight-sharing-officer" == r &&
                          (ae.IK.shareOfficerInfo = { shareToken: d }),
                        a.props.onShareDataUpdate &&
                          a.props.onShareDataUpdate("flight", {
                            path: "/pages/home/index?tab=flight",
                          }),
                        i || a.getFlightAdsList(),
                        a.setState({});
                    }),
                    (0, h.Z)((0, l.Z)(a), "doFlightOnShowAction", function () {
                      a.updateSearchDate(),
                        V.ZP.isLogin
                          ? (a.getUnpaidFlightOrders(),
                            a.props.functions.getFlightCoupons())
                          : a.setState({ unpaidOrders: [] }),
                        a.getNewUserSubsidy();
                    }),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "doSwitchFlightTabAction",
                      function () {
                        var e = a.state,
                          t = e.flightAdInfos;
                        e.trainQueryCacheObj !== oe.vN.get() &&
                          a.flightQueryFromSync(),
                          (t && 0 !== t.length) || a.getFlightAdsList(),
                          g().nextTick(function () {
                            var e = a.state,
                              t = e.flightInnerType,
                              i = e.flightQuery,
                              n = a.getShowIntlExtraSearchInput(t, i);
                            a.setState({
                              showIntlExtraSearchInput: n,
                              isShowChildSelect: !n && t !== ee.C4.special,
                            });
                          });
                      }
                    ),
                    (0, h.Z)((0, l.Z)(a), "judgeForeign", function () {
                      var e = !1,
                        t = a.state,
                        i = t.flightInnerType,
                        n = t.flightQuery.multi;
                      return (
                        i == ee.C4.multi &&
                          (e = n.segments.some(function (e) {
                            return 1 != e.dptCountryId || 1 != e.arrCountryId;
                          })),
                        e
                      );
                    }),
                    (0, h.Z)((0, l.Z)(a), "departArriveCheck", function (e) {
                      var t,
                        i,
                        a = e.dptCode,
                        n = e.dptName,
                        o = e.arrCode,
                        r = e.arrName,
                        s = function (e, t) {
                          if (!e || "string" != typeof e)
                            try {
                              return (
                                re.Z.searchCityInfoFromStorage(t, "cityName")
                                  .cityCode || ""
                              );
                            } catch (e) {
                              return "";
                            }
                          return e;
                        };
                      return (
                        (t = s(a, n)),
                        (i = s(o, r)),
                        "" === t
                          ? ((0, b.showModal)("您所选择的出发站点没有机场"), !1)
                          : "" === i
                          ? ((0, b.showModal)("您所选择的到达站点没有机场"), !1)
                          : n == r
                          ? ((0, b.showModal)("出发地到达地不能相同"), !1)
                          : [t, i]
                      );
                    }),
                    (0, h.Z)((0, l.Z)(a), "doSingleSearch", function () {
                      var e = a.getSearchParam(),
                        t = e.hasBaby,
                        i = e.hasChild,
                        n = e.dptCode,
                        o = e.dptDate,
                        r = e.dptName,
                        s = e.dptAName,
                        c = e.arrCode,
                        l = e.arrName,
                        d = e.arrAName,
                        u = a.departArriveCheck({
                          dptCode: n,
                          dptName: r,
                          arrCode: c,
                          arrName: l,
                        });
                      if (!u) return !1;
                      var h = (0, $.Z)(u, 2),
                        m = h[0],
                        p = h[1],
                        f = {
                          hasBaby: t,
                          hasChild: i,
                          dptDate: o,
                          dptCode: m,
                          arrCode: p,
                        };
                      return (
                        a.getSingleFlightsList(f),
                        a.navigateTo({
                          url: "/pages/flight/list/list?departCity="
                            .concat(r, "&departCityCode=")
                            .concat(m, "&arriveCity=")
                            .concat(l, "&arriveCityCode=")
                            .concat(p, "&departDate=")
                            .concat(o, "&nearby=1"),
                          data: {
                            dAirportName: s,
                            aAirportName: d,
                            hasChild: i,
                            hasBaby: t,
                          },
                        }),
                        !0
                      );
                    }),
                    (0, h.Z)((0, l.Z)(a), "doGoBackSearch", function () {
                      var e = a.getSearchParam(),
                        t = e.hasBaby,
                        i = e.hasChild,
                        n = e.dptCode,
                        o = e.dptDate,
                        r = e.dptName,
                        s = e.dptAName,
                        c = e.arrCode,
                        l = e.arrName,
                        d = e.arrAName,
                        u = e.rtnDate,
                        h = a.departArriveCheck({
                          dptCode: n,
                          dptName: r,
                          arrCode: c,
                          arrName: l,
                        });
                      if (!h) return !1;
                      var m = (0, $.Z)(h, 2),
                        p = m[0],
                        f = m[1];
                      return (
                        a.navigateTo({
                          url: "/pages/flight/roundtrip/roundtrip?departCity="
                            .concat(r, "&departCityCode=")
                            .concat(p, "&arriveCity=")
                            .concat(l, "&arriveCityCode=")
                            .concat(f, "&departDate=")
                            .concat(o, "&returnDate=")
                            .concat(u),
                          data: {
                            dAirportName: s,
                            aAirportName: d,
                            hasChild: i,
                            hasBaby: t,
                          },
                        }),
                        !0
                      );
                    }),
                    (0, h.Z)((0, l.Z)(a), "doMultiSearch", function () {
                      var e = a.getSearchParam(),
                        t = e.hasBaby,
                        i = e.hasChild,
                        n = e.segments;
                      return n[1].arrCode
                        ? n[0].dptName === n[0].arrName ||
                          n[1].dptName === n[1].arrName
                          ? ((0, b.showModal)("出发地到达地不能相同"), !1)
                          : n[0].arrName === n[1].dptName &&
                            n[0].dptName === n[1].arrName
                          ? (a.navigateTo({
                              url: "/pages/flight/roundtrip/roundtrip?departCity="
                                .concat(n[0].dptName, "&departCityCode=")
                                .concat(n[0].dptCode, "&arriveCity=")
                                .concat(n[0].arrName, "&arriveCityCode=")
                                .concat(n[0].arrCode, "&departDate=")
                                .concat(n[0].dptDate, "&returnDate=")
                                .concat(n[1].dptDate),
                              data: { hasChild: i, hasBaby: t },
                            }),
                            !0)
                          : (a.navigateTo({
                              url: "/pages/flight/multiFlights/multiFlights",
                              data: { segments: n, hasChild: i, hasBaby: t },
                            }),
                            !0)
                        : ((0, b.showToast)("请选择第2程到达城市"), !1);
                    }),
                    (0, h.Z)((0, l.Z)(a), "doSpecialSearch", function () {
                      var e = a.getSearchParam(),
                        t = e.hasChild,
                        i = e.hasBaby,
                        n = e.dptCode,
                        o = e.dptName,
                        r = e.dptAName,
                        s = e.arrCode,
                        c = e.dptDate,
                        l = e.arrName,
                        d = e.arrAName,
                        u = e.rtnDate,
                        h = e.specialCityCode;
                      if (1 === h.length && n === (null == h ? void 0 : h[0]))
                        return (0, b.showModal)("出发地到达地不能相同"), !1;
                      var m = ie.C0.get() || [
                        { cityCode: s, cityName: l, arrAName: d },
                      ];
                      return (
                        a.navigateTo({
                          url: "/pages/flight/specialList/specialList",
                          data: {
                            departCity: o,
                            departCityCode: n,
                            departDate: c,
                            rtnDate: u,
                            dAirportName: r,
                            aAirportName: d,
                            hasChild: t,
                            hasBaby: i,
                            arriveCityInfo: m,
                          },
                        }),
                        !0
                      );
                    }),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "newFlightSearch",
                      (0, o.Z)(
                        (0, n.Z)().mark(function e() {
                          var t,
                            i,
                            o,
                            s,
                            c,
                            l,
                            d,
                            u,
                            h,
                            m,
                            p,
                            f,
                            g,
                            v,
                            y,
                            C,
                            k,
                            Z,
                            S,
                            N,
                            I,
                            T;
                          return (0, n.Z)().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = a.state),
                                    (o = i.flightInnerType),
                                    (s = i.flightQuery),
                                    (c = s.domestic),
                                    (l = s.multi),
                                    (d = (l || {}).segments),
                                    (u = void 0 === d ? [] : d),
                                    (h = c.dptName),
                                    (m = c.dptCode),
                                    (p = c.arrName),
                                    (f = c.arrCode),
                                    (g = c.dptDate),
                                    (v = c.dptCountryId),
                                    (y = c.arrCountryId),
                                    (C = 1 != v || 1 != y),
                                    (k =
                                      null == u ||
                                      null === (t = u.some) ||
                                      void 0 === t
                                        ? void 0
                                        : t.call(u, function (e) {
                                            return (
                                              1 != e.dptCountryId ||
                                              1 != e.arrCountryId
                                            );
                                          })),
                                    (Z = !1),
                                    (e.next = 9),
                                    w.Z.checkSecretToken()
                                  );
                                case 9:
                                  try {
                                    a.ubtTrace(
                                      "O_TRN_ZxFlight_HomePage_Basic",
                                      { FlightWay: ee.AJ[o], Sequence: s }
                                    );
                                  } catch (e) {
                                    console.log(e);
                                  }
                                  !C ||
                                    (o !== ee.C4.single &&
                                      o !== ee.C4.goback) ||
                                    (Z = a.flightIntlSearch()),
                                    o !== ee.C4.single ||
                                      C ||
                                      (Z = a.doSingleSearch()),
                                    o !== ee.C4.goback ||
                                      C ||
                                      (Z = a.doGoBackSearch()),
                                    o === ee.C4.multi &&
                                      (k
                                        ? ((0, b.showModal)(
                                            "暂不支持国际多程查询"
                                          ),
                                          (Z = !1))
                                        : (Z = a.doMultiSearch())),
                                    o === ee.C4.special &&
                                      (Z = a.doSpecialSearch()),
                                    Z &&
                                      (l &&
                                        ((S = (0, $.Z)(u, 2)),
                                        (N = S[0]),
                                        (I = S[1]),
                                        (T = (0, r.Z)(
                                          (0, r.Z)({}, N),
                                          {},
                                          {
                                            dptName: h,
                                            dptCode: m,
                                            dptDate: g,
                                            dptCountryId: v,
                                            arrCountryId: y,
                                          }
                                        )),
                                        ie.P3.set({ segments: [T, I] })),
                                      ie.rn.set({
                                        departCity: h,
                                        arriveCity: p,
                                        departCityCode: m,
                                        arriveCityCode: f,
                                        departDate: g,
                                        dptCountryId: v,
                                        arrCountryId: y,
                                      }));
                                case 16:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )
                    ),
                    (0, h.Z)((0, l.Z)(a), "flightIntlSearch", function () {
                      var e = a.state,
                        t = e.flightQuery,
                        i = e.intlPsgerNum,
                        n = e.seatGradeIndex,
                        o = e.flightInnerType,
                        r = t.domestic,
                        s = r.dptName,
                        c = r.dptCode,
                        l = r.dptCountryId,
                        d = r.arrName,
                        u = r.arrCode,
                        h = r.arrCountryId,
                        m = t.dptDate,
                        p = t.rtnDate;
                      return c === u
                        ? ((0, b.showModal)("出发地到达地不能相同"), !1)
                        : (a.navigateTo({
                            url: "/pages/flightIntl/list/list?departCity="
                              .concat(s, "&departCityCode=")
                              .concat(c, "&departCountryId=")
                              .concat(l, "&arriveCity=")
                              .concat(d, "&arriveCityCode=")
                              .concat(u, "&arriveCountryId=")
                              .concat(h, "&departDate=")
                              .concat(m, "&nearby=")
                              .concat(p ? 0 : 1)
                              .concat(
                                p && o == ee.C4.goback ? "&returnDate=" + p : ""
                              ),
                            data: { passengerList: i, seatGradeIndex: n },
                          }),
                          ie.gL.set({
                            departCity: s,
                            arriveCity: d,
                            departCityCode: c,
                            arriveCityCode: u,
                            departCountryId: l,
                            arriveCountryId: h,
                          }),
                          !0);
                    }),
                    (0, h.Z)((0, l.Z)(a), "getFlightAdsList", function () {
                      te.B8.call((0, l.Z)(a), {
                        pageId: "221490",
                        adInfosName: "flightAdInfos",
                      });
                    }),
                    (0, h.Z)((0, l.Z)(a), "toTejiaIndex", function () {
                      var e = a.state,
                        t = e.flightInnerType,
                        i = e.flightQuery,
                        n = i.domestic,
                        o = i.intl,
                        r = i.multi,
                        s =
                          t === ee.C4.multi
                            ? r.segments[0]
                            : t === ee.C4.internation
                            ? o
                            : n,
                        c = s.dptName,
                        l = s.dptCode,
                        d = s.dptCountryId,
                        u = void 0 === d ? 1 : d,
                        h = s.arrName,
                        m = s.arrCode,
                        p = s.arrCountryId,
                        f = void 0 === p ? 1 : p,
                        g = "?&departureCityName="
                          .concat(c, "&departureCityCode=")
                          .concat(l, "&departureInternational=")
                          .concat(2 === u ? 1 : 0, "&arrivalCityName=")
                          .concat(h, "&arrivalCityCode=")
                          .concat(m, "&arrivalInternational=")
                          .concat(2 === f ? 1 : 0, "&hideHeader=1&partner=")
                          .concat(
                            y.default.partner,
                            "&fromPage=xcx_tejia_index"
                          );
                      P.Z.twebview({
                        data: {
                          url: ""
                            .concat(
                              "https://market.suanya.com/activity/flight/201904tejia-index/"
                            )
                            .concat(g),
                        },
                      });
                    }),
                    (0, h.Z)((0, l.Z)(a), "loadFlightAirportCity", function () {
                      var e = ie.Q2.get().cityIntlList,
                        t = ie.Uj.get() || "2016-01-01 00:00:00";
                      e || (t = "2016-01-01 00:00:00");
                      var i = {
                        data: {
                          dataChangeLastTime: t,
                          distinctCity: !0,
                          mode: 1,
                        },
                      };
                      (0, se.c3)(i)
                        .then(function (e) {
                          var t = e.resultCode,
                            i = e.data,
                            n = void 0 === i ? [] : i;
                          1 === t &&
                            n &&
                            n.length > 0 &&
                            (a.handleFlightAirportList(e.data),
                            ie.Uj.set(X()().format("YYYY-MM-DD HH:mm")));
                        })
                        .catch(function (e) {
                          console.log(e);
                        });
                    }),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "handleFlightAirportList",
                      function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [],
                          t = {},
                          i = {};
                        e.forEach(function (e) {
                          var a = {
                            cityName: e.cityName,
                            cityCode: e.cityCode,
                            py: e.cityNamePY,
                            pyHead: e.cityNameJP,
                            countryName: e.countryName,
                            countryID: e.countryID,
                          };
                          1 === e.countryID
                            ? (t[e.firstLetter] || (t[e.firstLetter] = []),
                              t[e.firstLetter].push(a))
                            : 2 === e.countryID &&
                              (i[e.firstLetter] || (i[e.firstLetter] = []),
                              i[e.firstLetter].push(a));
                        });
                        var a = Object.keys(t),
                          n = Object.keys(i),
                          o = {},
                          r = {};
                        (a = a.sort()),
                          (n = n.sort()),
                          a.forEach(function (e) {
                            o[e] = t[e];
                          }),
                          n.forEach(function (e) {
                            r[e] = i[e];
                          }),
                          ie.Q2.setAttr("cityMainList", o),
                          ie.Q2.setAttr("cityIntlList", r);
                      }
                    ),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "getFlightPopupAndHeadHovers",
                      function () {
                        var e = a.props.onLoadOpts,
                          t = e.flightCouponId,
                          i = void 0 === t ? "" : t,
                          n = e.source,
                          o = void 0 === n ? "" : n;
                        (0, se.cz)({
                          source: i || o || "index",
                          sourcePage: "flight_home",
                        }).then(function (e) {
                          var t = e || {},
                            i = t.resultCode,
                            n = t.extendData,
                            o = t.extendHeadHovers;
                          if (1 == i) {
                            var r = a.canHeadHoverShow();
                            a.setState({
                              popupInfo: n,
                              headHoverList: r ? o : [],
                            });
                          }
                        });
                      }
                    ),
                    (0, h.Z)((0, l.Z)(a), "handlePopupClick", function (e) {
                      if (e) {
                        var t = e.popType,
                          i = e.jumpUrl;
                        t !== ye.A0.H5 && i && w.Z.commonNavigator(i);
                      }
                    }),
                    (0, h.Z)((0, l.Z)(a), "handlePopupClose", function () {
                      a.setState({ popupInfo: null });
                    }),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "loadIntlFlightQueryFromStore",
                      function () {
                        var e = a.state.flightQuery,
                          t = ie.gL.get() || {},
                          i = t.departCity,
                          n = void 0 === i ? "上海" : i,
                          o = t.arriveCity,
                          s = void 0 === o ? "曼谷" : o,
                          c = t.departCityCode,
                          l = void 0 === c ? "SHA" : c,
                          d = t.arriveCityCode,
                          u = void 0 === d ? "BKK" : d,
                          h = t.departCountryId,
                          m = void 0 === h ? 1 : h,
                          p = t.arriveCountryId,
                          f = void 0 === p ? 2 : p;
                        (e = (0, r.Z)(
                          (0, r.Z)({}, e),
                          {},
                          {
                            intl: {
                              dptName: n,
                              dptCode: l,
                              arrName: s,
                              arrCode: u,
                              dptCountryId: m,
                              arrCountryId: f,
                            },
                          }
                        )),
                          a.setState({ flightQuery: e });
                        var g,
                          v = ie.Q2.getAttr("historyIntlCities") || [],
                          y = [
                            "香港",
                            "澳门",
                            "台北",
                            "高雄",
                            "台中",
                            "台南",
                            "花莲",
                          ],
                          b = (0, J.Z)(v);
                        try {
                          var C = function () {
                            var e = g.value;
                            y.some(function (t) {
                              return t === e.cityName;
                            }) && (e.cityName = "中国".concat(e.cityName));
                          };
                          for (b.s(); !(g = b.n()).done; ) C();
                        } catch (e) {
                          b.e(e);
                        } finally {
                          b.f();
                        }
                        ie.Q2.setAttr("historyIntlCities", v);
                      }
                    ),
                    (0, h.Z)((0, l.Z)(a), "bindGradeChange", function (e) {
                      var t = e.detail.value;
                      console.log(t), a.setState({ seatGradeIndex: t });
                    }),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "loadFlightQueryFromStore",
                      function () {
                        var e,
                          t,
                          i = a.state.flightQuery,
                          n = ie.rn.get() || {},
                          o = ie.P3.get(),
                          s = { city: "上海", code: "SHA" };
                        y.default.isKMFlight &&
                          ((s.city = "昆明"), (s.code = "KMG"));
                        var c = n.departCity,
                          l = void 0 === c ? s.city : c,
                          d = n.arriveCity,
                          u = void 0 === d ? "北京" : d,
                          h = n.departCityCode,
                          m = void 0 === h ? s.code : h,
                          p = n.arriveCityCode,
                          g = void 0 === p ? "BJS" : p,
                          v = n.dptCountryId,
                          b = void 0 === v ? 1 : v,
                          C = n.arrCountryId,
                          k = void 0 === C ? 1 : C,
                          Z = n.departDate,
                          S = void 0 === Z ? "" : Z,
                          N =
                            (null === (e = (0, f.getCurrentInstance)()) ||
                            void 0 === e ||
                            null === (t = e.router) ||
                            void 0 === t
                              ? void 0
                              : t.params) || {};
                        N.departCity &&
                          N.departCityCode &&
                          ((l = decodeURIComponent(N.departCity)),
                          (m = decodeURIComponent(N.departCityCode))),
                          N.arriveCity &&
                            N.arriveCityCode &&
                            ((u = decodeURIComponent(N.arriveCity)),
                            (g = decodeURIComponent(N.arriveCityCode))),
                          N.departDate &&
                            (S = decodeURIComponent(N.departDate)),
                          new Date(re.Z.formatDateWithSlash(S)).getTime() <=
                            new Date().getTime() &&
                            (S = X()().add(1, "day").format("YYYY-MM-DD"));
                        var I = X()(S).format("M月D日"),
                          T = w.Z.getWeekInfo(S),
                          x = X()(S).add(2, "day").format("YYYY-MM-DD"),
                          _ = X()(x).format("M月D日"),
                          D = w.Z.getWeekInfo(x);
                        (i = (0, r.Z)(
                          (0, r.Z)({}, i),
                          {},
                          {
                            domestic: {
                              dptName: l,
                              dptCode: m,
                              dptCountryId: b,
                              arrName: u,
                              arrCode: g,
                              arrCountryId: k,
                            },
                            dptDate: S,
                            dptDateStr: I,
                            dptWeek: T,
                            multi: o,
                            rtnDate: x,
                            rtnDateStr: _,
                            rtnWeeK: D,
                            rtnGap: re.Z.getDayDiff(S, x) + 1,
                          }
                        )),
                          a.setState(
                            {
                              flightQuery: i,
                              specialPriceCity: l,
                              specialPriceCityCode: m,
                            },
                            function () {
                              a.loadIntlFlightQueryFromStore();
                            }
                          );
                      }
                    ),
                    (0, h.Z)((0, l.Z)(a), "goToMonitorList", function () {
                      g().reLaunch({
                        url: "/pages/trnshare/grablist/grablist?orderType=flightOrder&fromPage=xcx_jk_list",
                      });
                    }),
                    (0, h.Z)((0, l.Z)(a), "toPriceParity", function () {
                      a.navigateTo({
                        url: "/pages/flightSecondary/priceparity/priceparity",
                      });
                    }),
                    (0, h.Z)((0, l.Z)(a), "onHolidayClick", function (e) {
                      var t = e.depCityName,
                        i = e.depCityCode,
                        n = e.arrCityName,
                        o = e.arrCityCode,
                        r = e.depDate,
                        s = e.isDomestic,
                        c = e.retDate;
                      a.toFlightList({
                        departureCityName: t,
                        departureCityCode: i,
                        arrivalCityName: n,
                        arrivalCityCode: o,
                        departDate: r,
                        returnDate: c || "",
                        fromPage: ee.Ip.specialIndex,
                        isIntl: !s,
                      });
                    }),
                    (0, h.Z)((0, l.Z)(a), "toFlightList", function (e) {
                      var t = e.departureCityName,
                        i = e.departureCityCode,
                        n = e.arrivalCityName,
                        o = e.arrivalCityCode,
                        r = e.departDate,
                        s = e.returnDate,
                        c = void 0 === s ? "" : s,
                        l = e.fromPage,
                        d = e.isIntl
                          ? "/pages/flightIntl/list/list"
                          : "/pages/flight/list/list";
                      a.navigateTo({
                        url: ""
                          .concat(d, "?departCity=")
                          .concat(t, "&departCityCode=")
                          .concat(i, "&arriveCity=")
                          .concat(n, "&arriveCityCode=")
                          .concat(o, "&departDate=")
                          .concat(r, "&returnDate=")
                          .concat(c, "&nearby=1")
                          .concat(l ? "&fromPage=" + l : ""),
                      });
                    }),
                    (0, h.Z)((0, l.Z)(a), "toggleChild", function () {
                      var e = a.state.hasChild;
                      a.setState({ hasChild: !e });
                    }),
                    (0, h.Z)((0, l.Z)(a), "toggleBaby", function () {
                      var e = a.state.hasBaby;
                      a.setState({ hasBaby: !e });
                    }),
                    (0, h.Z)((0, l.Z)(a), "goToChildNotice", function () {
                      P.Z.twebview({
                        data: {
                          url: "https://pages.ctrip.com/ztrip/document/babyguide.html",
                        },
                      });
                    }),
                    (0, h.Z)((0, l.Z)(a), "getUnpaidFlightOrders", function () {
                      if (!V.ZP.isLogin)
                        return a.setState({ unpaidOrders: [] });
                      (0, se.ii)(
                        { data: { version: 0 } },
                        { checkLogin: !1, checkFrameworkLogin: !1 }
                      ).then(function (e) {
                        var t = e.resultCode,
                          i = e.data || {},
                          n = i.payOrderInfos || [];
                        if (1 === t && n.length > 0) {
                          var o = n.map(function (e) {
                              return (0,
                              r.Z)((0, r.Z)({}, e), {}, { parityTxtLeft: e.diffPrice > 0 ? "比".concat(e.vendorName) : "", parityTxtRight: e.diffPrice > 0 ? "省".concat(e.diffPrice) : "" });
                            }),
                            s = n.reduce(function (e, t) {
                              return X()(e.lastPayTime).valueOf() <
                                X()(t.lastPayTime).valueOf()
                                ? e
                                : t;
                            }, n[0]);
                          a.setState({
                            unpaidOrders: o,
                            restPayTime: null == s ? void 0 : s.lastPayTime,
                            payOffDes: i.payOrderDesc || "",
                          });
                        } else a.setState({ unpaidOrders: [] });
                      });
                    }),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "exchangeFlightStation",
                      function (e) {
                        var t = e.currentTarget.dataset.index,
                          i = a.state,
                          s = i.flightInnerType,
                          c = i.flightQuery,
                          l = c.domestic;
                        if (s === ee.C4.single || s == ee.C4.goback)
                          (l.exchange = !l.exchange),
                            a.setState(
                              { flightQuery: (0, r.Z)({}, c) },
                              (0, o.Z)(
                                (0, n.Z)().mark(function e() {
                                  return (0, n.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2), w.Z.awaitTime(500)
                                          );
                                        case 2:
                                          re.Z.exchangeDepartCity(l),
                                            (l.exchange = !l.exchange),
                                            a.setState({
                                              flightQuery: (0, r.Z)({}, c),
                                            });
                                        case 5:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              )
                            );
                        else if (s === ee.C4.internation) {
                          var d = c.intl;
                          (d.exchange = !d.exchange),
                            a.setState(
                              { flightQuery: (0, r.Z)({}, c) },
                              (0, o.Z)(
                                (0, n.Z)().mark(function e() {
                                  return (0, n.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2), w.Z.awaitTime(500)
                                          );
                                        case 2:
                                          re.Z.exchangeDepartCity(d),
                                            (d.exchange = !d.exchange),
                                            a.setState({
                                              flightQuery: (0, r.Z)({}, c),
                                            });
                                        case 5:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              )
                            );
                        } else if (s === ee.C4.multi) {
                          var u = c.multi,
                            h = u.segments[t];
                          if (!h.dptCode || !h.arrCode) return;
                          (h.exchange = !h.exchange),
                            a.setState(
                              { flightQuery: (0, r.Z)({}, c) },
                              (0, o.Z)(
                                (0, n.Z)().mark(function e() {
                                  return (0, n.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2), w.Z.awaitTime(500)
                                          );
                                        case 2:
                                          re.Z.exchangeDepartCity(h),
                                            0 == t &&
                                              re.Z.exchangeDepartCity(l),
                                            (h.exchange = !h.exchange),
                                            ie.P3.set(u),
                                            a.setState({
                                              flightQuery: (0, r.Z)({}, c),
                                            });
                                        case 7:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              )
                            );
                        }
                      }
                    ),
                    (0, h.Z)((0, l.Z)(a), "getCalendarParams", function (e) {
                      a.multiIndex = e;
                      var t = a.state,
                        i = t.flightInnerType,
                        n = t.flightQuery,
                        o = n.dptDate,
                        s = n.rtnDate,
                        c = n.domestic,
                        l = n.intl,
                        d = n.multi,
                        u = X()().format("YYYY-MM-DD"),
                        h = X()().startOf().valueOf(),
                        m = X()()
                          .add(ee.g2 - 1, "day")
                          .format("YYYY-MM-DD"),
                        p = {},
                        f = u,
                        g = o;
                      h > X()(o).valueOf() && (g = u);
                      var v = {
                        beginDate: f,
                        endDate: m,
                        chooseDate: o,
                        title: "选择日期",
                        bu: "flight",
                        queryParams: p,
                      };
                      if (i === ee.C4.single)
                        v = (0, r.Z)(
                          (0, r.Z)({}, v),
                          {},
                          {
                            flightType: ee.C4.single,
                            queryParams: {
                              data: {
                                isDomestic: 0,
                                departCityCode: c.dptCode,
                                arriveCityCode: c.arrCode,
                              },
                            },
                          }
                        );
                      else if (i === ee.C4.multi)
                        1 == e && (f = d.segments[e - 1].dptDate),
                          (v = (0, r.Z)(
                            (0, r.Z)({}, v),
                            {},
                            {
                              flightType: ee.C4.multi,
                              beginDate: f,
                              chooseDate: d.segments[e].dptDate,
                            }
                          ));
                      else {
                        var y = i === ee.C4.internation,
                          b = y ? l.dptCode : c.dptCode,
                          C = y ? l.arrCode : c.arrCode,
                          w = i === ee.C4.special;
                        v = {
                          beginDate: f,
                          endDate: m,
                          checkInDate: g,
                          checkOutDate: s,
                          title: "选择日期",
                          bu: "flight",
                          type: "checkInOut",
                          confirmBtn: !0,
                          queryParams: (p = {
                            data: {
                              isDomestic: y ? 1 : 0,
                              departCityCode: b,
                              arriveCityCode: C,
                            },
                          }),
                          haveRoundTotalPrice: !0,
                          sameDateAvailable: !0,
                          flightType: ee.C4.goback,
                          selectedText: {
                            sameText: w ? "最早/最晚" : "去/返",
                            dptText: w ? "最早出发" : "去程",
                            rtnText: w ? "最晚出发" : "返程",
                          },
                          bottomFixedConfig: w
                            ? {
                                dptLabel: "最早出发",
                                rtnLabel: "最晚出发",
                                showTotalPrice: !1,
                              }
                            : null,
                        };
                      }
                      return v;
                    }),
                    (0, h.Z)((0, l.Z)(a), "chooseFlightDate", function (e) {
                      var t = e.currentTarget.dataset.index;
                      (0,
                      ce.U)({ calendarParams: a.getCalendarParams(t), onConfirm: a.confirmCalendar, className: "home-flight-calendar-pop" });
                    }),
                    (0, h.Z)((0, l.Z)(a), "confirmCalendar", function (e) {
                      var t = a.state,
                        i = t.flightInnerType,
                        n = t.flightQuery,
                        o = n.multi,
                        s = {};
                      if (i === ee.C4.goback || i === ee.C4.special) {
                        var c = e.checkInDate,
                          l = e.checkOutDate,
                          d = X()(c).format("M月D日"),
                          u = X()(l).format("M月D日"),
                          h = w.Z.getWeekInfo(c),
                          m = w.Z.getWeekInfo(l);
                        s = (0, r.Z)(
                          (0, r.Z)({}, n),
                          {},
                          {
                            dptDate: c,
                            dptDateStr: d,
                            dptWeek: h,
                            rtnDate: l,
                            rtnDateStr: u,
                            rtnWeeK: m,
                            rtnGap: re.Z.getDayDiff(c, l) + 1,
                          }
                        );
                      } else {
                        var p = X()(e).format("YYYY-MM-DD"),
                          f = X()(e).format("M月D日"),
                          g = w.Z.getWeekInfo(e);
                        if (i === ee.C4.single) {
                          if (
                            (s = (0, r.Z)(
                              (0, r.Z)({}, n),
                              {},
                              { dptDate: p, dptDateStr: f, dptWeek: g }
                            )).rtnDate
                          ) {
                            if (re.Z.compareDateToDate(p, s.rtnDate)) {
                              var v = X()(p).add(2, "day");
                              (s.rtnDate = v.format("YYYY-MM-DD")),
                                (s.rtnDateStr = v.format("M月D日")),
                                (s.rtnWeeK = w.Z.getWeekInfo(s.rtnDate));
                            }
                            s.rtnGap = re.Z.getDayDiff(p, s.rtnDate) + 1;
                          }
                        } else if (i === ee.C4.multi) {
                          var y = a.multiIndex,
                            b = o.segments[y];
                          if (
                            ((b.dptDate = e),
                            (b.dptDateStr = f),
                            (b.dptWeek = g),
                            0 === y)
                          ) {
                            var C = o.segments[y + 1];
                            if (
                              ((n.dptDate = e),
                              (n.dptDateStr = f),
                              (n.dptWeek = g),
                              re.Z.compareDateToDate(e, C.dptDate))
                            ) {
                              var k = X()(e).add(2, "day");
                              (C.dptDate = k.format("YYYY-MM-DD")),
                                (C.dptDateStr = k.format("M月D日")),
                                (C.dptWeek = w.Z.getWeekInfo(C.dptDate));
                            }
                            if (re.Z.compareDateToDate(e, n.rtnDate)) {
                              var Z = X()(e).add(2, "day");
                              (n.rtnDate = Z.format("YYYY-MM-DD")),
                                (n.rtnDateStr = Z.format("M月D日")),
                                (n.rtnWeeK = w.Z.getWeekInfo(n.rtnDate)),
                                (n.rtnGap = re.Z.getDayDiff(e, n.rtnDate) + 1);
                            }
                          }
                          return (
                            ie.P3.set(o),
                            void a.setState({ flightQuery: (0, r.Z)({}, n) })
                          );
                        }
                      }
                      a.setState({ flightQuery: s });
                    }),
                    (0, h.Z)((0, l.Z)(a), "closeCouponTip", function (e) {
                      e.stopPropagation();
                      var t = e.currentTarget.dataset.type,
                        i = a.state,
                        n = i.flightIndexCoupon,
                        o = i.flightIntlIndexCoupon;
                      "intl" === t
                        ? a.setState({
                            flightIntlIndexCoupon: (0, r.Z)(
                              (0, r.Z)({}, o),
                              {},
                              { hidden: !0 }
                            ),
                          })
                        : a.setState({
                            flightIndexCoupon: (0, r.Z)(
                              (0, r.Z)({}, n),
                              {},
                              { hidden: !0 }
                            ),
                          });
                    }),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "bindPsgerPickerChange",
                      function (e) {
                        var t = e.detail.value;
                        a.setState({
                          intlPsgerNum: [t[0] + 1, t[1] ? t[1] : 0],
                        });
                      }
                    ),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "bindPsgerPickerColumnChange",
                      function (e) {
                        var t = e.detail,
                          i = t.column,
                          n = t.value + 1;
                        if (0 === i) {
                          for (
                            var o = 2 * n,
                              r = 9 - n,
                              s = o < r ? o : r,
                              c = [],
                              l = 0;
                            l <= s;
                            l++
                          )
                            c.push(l);
                          a.setState({
                            psgerNumberList: [[1, 2, 3, 4, 5, 6, 7, 8, 9], c],
                          });
                        }
                      }
                    ),
                    (0, h.Z)((0, l.Z)(a), "chooseFlightCity", function (e) {
                      var t,
                        i = e.currentTarget.dataset,
                        n = i.type,
                        o = i.mode,
                        r = void 0 === o ? "" : o,
                        s = i.index,
                        c = a.state,
                        l = c.flightQuery,
                        d = c.flightInnerType,
                        u = l.domestic,
                        h = l.intl,
                        m = l.multi,
                        p = u.dptCountryId,
                        f = u.arrCountryId,
                        g = d === ee.C4.single,
                        v = d === ee.C4.goback,
                        b = d === ee.C4.multi,
                        C = d === ee.C4.special,
                        w = "d" === n,
                        k =
                          "special" === r
                            ? "选择城市"
                            : w
                            ? "出发城市"
                            : "到达城市",
                        Z = ie.C0.get(),
                        S = "special" === r || b || y.default.isAlipay,
                        N =
                          C &&
                          (null == Z || null === (t = Z.some) || void 0 === t
                            ? void 0
                            : t.call(Z, function (e) {
                                return 1 != e.countryID;
                              })) &&
                          "special" !== r,
                        I =
                          ("special" !== r && !b && (w ? 1 !== p : 1 !== f)) ||
                          N,
                        T = C && !w && !r,
                        x = [],
                        _ = !0;
                      T &&
                        ((x = Z
                          ? Z.map(function (e) {
                              return e.cityCode;
                            })
                          : ["".concat(null == u ? void 0 : u.arrCode)]),
                        (_ = !1));
                      var D = "",
                        B = "",
                        V = "";
                      (g || v) &&
                        ((D = w
                          ? null == u
                            ? void 0
                            : u.arrCode
                          : null == u
                          ? void 0
                          : u.dptCode),
                        (B = w
                          ? null == u
                            ? void 0
                            : u.arrName
                          : null == u
                          ? void 0
                          : u.dptName),
                        (V = w
                          ? null == u
                            ? void 0
                            : u.arrCountryId
                          : null == u
                          ? void 0
                          : u.dptCountryId)),
                        P.Z.flightCity({
                          data: {
                            title: k,
                            intlHidden: S,
                            isIntl: I,
                            isDpt: w,
                            isSpecialTrip: C,
                            multiple: T,
                            multiSelectedCities: x,
                            multiNum: 3,
                            segmentType: g ? 1 : v ? 2 : 0,
                            anotherLocationCode: D,
                            anotherLocationName: B,
                            anotherLocationCountryId: V,
                            clearHistoryState: _,
                          },
                          callback: function (e) {
                            var t = e.cityName,
                              i = e.cityCode,
                              n = e.countryID,
                              o = e.airportName;
                            if ("special" === r)
                              return (
                                a.setState({
                                  specialPriceCity: t,
                                  specialPriceCityCode: i,
                                }),
                                void a.pushToFlightHistory(e)
                              );
                            var c = d;
                            if (0 === c || 3 == c || 4 == c)
                              w
                                ? ((u.dptName = t),
                                  (u.dptCode = i),
                                  (u.dptAName = o),
                                  (u.dptCountryId = n || 1))
                                : d === ee.C4.special
                                ? (ie.C0.set(e),
                                  a.setState({
                                    specialCityCode:
                                      null == e
                                        ? void 0
                                        : e.map(function (e) {
                                            return e.cityCode;
                                          }),
                                    specialCityName:
                                      null == e
                                        ? void 0
                                        : e
                                            .map(function (e) {
                                              return e.cityName;
                                            })
                                            .join("、"),
                                  }))
                                : ((u.arrName = t),
                                  (u.arrCode = i),
                                  (u.arrAName = o),
                                  (u.arrCountryId = n || 1));
                            else if (1 === c)
                              w
                                ? ((h.dptName = t),
                                  (h.dptCode = i),
                                  (h.dptAName = o),
                                  (h.dptCountryId = n))
                                : ((h.arrName = t),
                                  (h.arrCode = i),
                                  (h.arrAName = o),
                                  (h.arrCountryId = n));
                            else if (2 === c) {
                              var p = m.segments[s];
                              w
                                ? ((p.dptName = t),
                                  (p.dptCode = i),
                                  (p.dptAName = o),
                                  (p.dptCountryId = 1),
                                  0 == s &&
                                    ((u.dptName = t),
                                    (u.dptCode = i),
                                    (u.dptAName = o),
                                    (u.dptCountryId = 1)))
                                : ((p.arrName = t),
                                  (p.arrCode = i),
                                  (p.arrAName = o),
                                  (p.arrCountryId = 1),
                                  0 == s &&
                                    ((u.arrName = t),
                                    (u.arrCode = i),
                                    (u.arrAName = o),
                                    (u.arrCountryId = 1))),
                                ie.P3.set(m);
                            }
                            var f = a.getShowIntlExtraSearchInput(c, l);
                            a.setState({
                              flightQuery: l,
                              flightInnerType: c,
                              showIntlExtraSearchInput: f,
                              isShowChildSelect: c !== ee.C4.special && !f,
                            }),
                              T
                                ? a.setMultiHistoryStor(e)
                                : a.pushToFlightHistory(e);
                          },
                        });
                    }),
                    (0, h.Z)((0, l.Z)(a), "setMultiHistoryStor", function (e) {
                      var t = ie.Q2.getAttr("historyIntlCities") || [],
                        i = ie.Q2.getAttr("historyCities") || [];
                      e.forEach(function (e) {
                        var a = 1 === e.countryID ? i : t,
                          n = a.findIndex(function (t) {
                            return t.cityCode === e.cityCode;
                          });
                        n > -1 && a.splice(n, 1),
                          a.unshift(e),
                          (a = a.slice(0, 6)),
                          ie.Q2.setAttr(
                            1 === e.countryID
                              ? "historyCities"
                              : "historyIntlCities",
                            a
                          );
                      });
                    }),
                    (0, h.Z)((0, l.Z)(a), "pushToFlightHistory", function (e) {
                      var t =
                          ie.Q2.getAttr(
                            2 === e.countryID
                              ? "historyIntlCities"
                              : "historyCities"
                          ) || [],
                        i = t.findIndex(function (t) {
                          return t.cityCode === e.cityCode;
                        });
                      i > -1 && t.splice(i, 1),
                        t.unshift(e),
                        (t = t.slice(0, 6)),
                        ie.Q2.setAttr(
                          2 === e.countryID
                            ? "historyIntlCities"
                            : "historyCities",
                          t
                        );
                    }),
                    (0, h.Z)((0, l.Z)(a), "updateSearchDate", function () {
                      var e = a.state.flightQuery,
                        t = e.dptDate;
                      if (ae.IK.selectDate) {
                        var i = ae.IK.selectDate,
                          n = X()(i).format("M月D日"),
                          o = w.Z.getWeekInfo(i);
                        (e.dptDate = i),
                          (e.dptDateStr = n),
                          (e.dptWeek = o),
                          (ae.IK.selectDate = "");
                      }
                      if (e.rtnDate) {
                        var r = ae.IK.returnDate || e.rtnDate;
                        new Date(re.Z.formatDateWithSlash(r)).getTime() <
                          new Date(
                            re.Z.formatDateWithSlash(e.dptDate)
                          ).getTime() &&
                          (r = X()(e.dptDate)
                            .add(2, "day")
                            .format("YYYY-MM-DD"));
                        var s = X()(r).format("M月D日");
                        (e.rtnDate = r),
                          (e.rtnDateStr = s),
                          (e.rtnGap = re.Z.getDayDiff(e.dptDate, r) + 1),
                          (ae.IK.returnDate = "");
                      } else if (t) {
                        var c = X()(e.dptDate)
                            .add(2, "day")
                            .format("YYYY-MM-DD"),
                          l = X()(c).format("M月D日"),
                          d = w.Z.getWeekInfo(c);
                        (e.rtnDate = c),
                          (e.rtnDateStr = l),
                          (e.rtnWeeK = d),
                          (e.rtnGap = re.Z.getDayDiff(t, c) + 1);
                      }
                      a.setState({ flightQuery: e }),
                        (ae.IK.flightOverview = {}),
                        (ae.IK.flightOverviewReturn = {});
                    }),
                    (0, h.Z)((0, l.Z)(a), "switchFlightInnerTab", function (e) {
                      var t = e.value,
                        i = a.state,
                        n = i.flightInnerType,
                        o = i.flightQuery,
                        r = (i.curTabIndex, parseInt(t));
                      if (n !== r) {
                        r === ee.C4.special
                          ? a.setState({ searchBtnText: "搜索特价" })
                          : a.setState({ searchBtnText: "机票查询" });
                        try {
                          a.ubtTrace(e.ubtKey),
                            a.ubtDevTrace(181383, {
                              cid: V.ZP.cid || "",
                              userName: V.ZP.userName || "",
                            });
                        } catch (e) {
                          console.log(e);
                        }
                        if (r === ee.C4.multi) {
                          var s,
                            c,
                            l,
                            d,
                            u,
                            h,
                            m,
                            p,
                            f = o.domestic,
                            g = o.dptDate,
                            v = ie.P3.get().segments,
                            y = X()(g).add(2, "day").format("YYYY-MM-DD"),
                            b = f.dptName,
                            C = f.dptCode,
                            k = f.dptAName,
                            Z = f.arrName,
                            S = f.arrCode,
                            N = f.arrAName,
                            I = f.dptCountryId,
                            T = f.arrCountryId;
                          Array.isArray(v) &&
                            v.length > 1 &&
                            ((s = v[1].dptName),
                            (c = v[1].dptCode),
                            (l = v[1].dptAName),
                            (m = v[1].dptCountryId),
                            (d = v[1].arrName),
                            (u = v[1].arrCode),
                            (h = v[1].arrAName),
                            (p = v[1].arrCountryId),
                            (y = v[1].dptDate),
                            re.Z.compareDateToDate(g, v[1].dptDate) &&
                              (y = X()(g).add(2, "day").format("YYYY-MM-DD"))),
                            (o.multi = {
                              segments: [
                                {
                                  dptName: b,
                                  dptCode: C,
                                  dptAName: k,
                                  dptCountryId: I,
                                  arrName: Z,
                                  arrCode: S,
                                  arrAName: N,
                                  arrCountryId: T,
                                  dptDate: g,
                                  dptDateStr: X()(g).format("M月D日"),
                                  dptWeek: w.Z.getWeekInfo(g),
                                },
                                {
                                  dptName: s || Z,
                                  dptCode: c || S,
                                  dptAName: l || N,
                                  dptCountryId: m || T,
                                  arrName: d || "",
                                  arrCode: u || "",
                                  arrAName: h || "",
                                  arrCountryId: p || 1,
                                  dptDate: y,
                                  dptDateStr: X()(y).format("M月D日"),
                                  dptWeek: w.Z.getWeekInfo(y),
                                },
                              ],
                            });
                        }
                        var x = a.getShowIntlExtraSearchInput();
                        a.setState({
                          flightInnerType: r,
                          curTabIndex: e.index,
                          flightQuery: o,
                          isShowChildSelect: r !== ee.C4.special && !x,
                          showIntlExtraSearchInput: x,
                        });
                      }
                    }),
                    (0, h.Z)((0, l.Z)(a), "goMonitorPage", function () {
                      var e = a.state.flightQuery || {},
                        t = e.domestic,
                        i = e.dptDate,
                        n = t || {},
                        o = n.arrCode,
                        r = n.arrName,
                        s = n.dptCode,
                        c = n.dptName;
                      a.navigateTo({
                        url: "/pages/flight/monitoredit/monitoredit?departCityName="
                          .concat(c, "&departCityCode=")
                          .concat(s, "&arriveCityName=")
                          .concat(r, "&arriveCityCode=")
                          .concat(o, "&selectDate=")
                          .concat(i, "&fromPage=flight_home"),
                      });
                    }),
                    (0, h.Z)((0, l.Z)(a), "goToFlightDetail", function (e, t) {
                      var i = a.state.unpaidOrders;
                      (null == i ? void 0 : i.length) > 1
                        ? g().reLaunch({
                            url: "/pages/myctrip/list/list?orderType=flight",
                          })
                        : a.navigateTo({
                            url: "/pages/"
                              .concat(
                                1 === t ? "flightIntl" : "flight",
                                "/detail/detail?orderNumber="
                              )
                              .concat(e),
                          });
                    }),
                    (0, h.Z)((0, l.Z)(a), "toSurpriseInput", function () {
                      a.navigateTo({
                        url: "/pages/taroCRN/flight/pages/surpriseGrabInput/index",
                      });
                    }),
                    (a.state = {
                      flightInnerType: ee.C4.single,
                      flightQuery: {},
                      hasChild: !1,
                      hasBaby: !1,
                      psgerNumberList: [
                        [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [0, 1, 2],
                      ],
                      popupInfo: null,
                      intlPsgerNum: [1, 0],
                      seatGradeIndex: 0,
                      seatGradeRange: [
                        "经济/超级经济舱",
                        "公务/头等舱",
                        "公务舱",
                        "头等舱",
                      ],
                      curTabIndex: 0,
                      specialCityName: "",
                      specialCityCode: ["BJS"],
                      searchBtnText: "机票查询",
                      isShowChildSelect: !0,
                      restPayTime: "",
                      payOffDes: "",
                      trainQueryCacheObj: null,
                      showSurpriseInput: (0, ne.D8)(
                        be ? "tyShowSurpriseInput" : "showSurpriseInput"
                      ),
                      showIntlExtraSearchInput: !1,
                      searchBtnTagConfig: (0, ne.D8)("searchButtonTagConfig"),
                      headHoverList: [],
                      newUserSubsidyBannerInfo: null,
                      newUserSubsidyDrawerInfo: null,
                      isShowTjCities: !g().getStorageSync(
                        "SHOW_TJ_CITIES_TIPS"
                      ),
                    }),
                    a
                  );
                }
                return (
                  (0, c.Z)(i, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var e,
                          t,
                          i = this;
                        this.doFlightOnLoadAction(),
                          this.setState({ trainQueryCacheObj: oe.vN.get() });
                        var a = ie.C0.get();
                        if (a) {
                          var n = a
                              .map(function (e) {
                                return e.cityName;
                              })
                              .join(","),
                            o = a.map(function (e) {
                              return e.cityCode;
                            });
                          this.setState({
                            specialCityName: n,
                            specialCityCode: o,
                          });
                        }
                        var r =
                          null === (e = this.$instance) ||
                          void 0 === e ||
                          null === (t = e.router) ||
                          void 0 === t
                            ? void 0
                            : t.onShow;
                        r && f.eventCenter.on(r, this.onShow),
                          g().nextTick(function () {
                            i.onShow();
                          });
                        var s = this.props,
                          c = s.innerTab,
                          l = s.hidden,
                          d = s.pageId;
                        this.pageId || (this.pageId = d),
                          c &&
                            !l &&
                            this.setState({
                              flightInnerType: ee.C4[c] || ee.C4.single,
                              curTabIndex: ee.gv.find(function (e) {
                                return e.value == ee.C4[c];
                              }).index,
                            });
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (e) {
                        var t = this,
                          i = this.props.hidden;
                        i ||
                          i === e.hidden ||
                          (this.flightHomeExposure(),
                          this.doSwitchFlightTabAction(),
                          this.calenderPopPrerendered ||
                            ((this.calendarPopPrerendered = !0),
                            setTimeout(function () {
                              (0,
                              ce.X)({ calendarParams: t.getCalendarParams(0), onConfirm: t.confirmCalendar, className: "home-flight-calendar-pop" });
                            }, 300)));
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        var e,
                          t,
                          i =
                            null === (e = this.$instance) ||
                            void 0 === e ||
                            null === (t = e.router) ||
                            void 0 === t
                              ? void 0
                              : t.onShow;
                        i && f.eventCenter.off(i, this.onShow);
                      },
                    },
                    {
                      key: "onShow",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      this.doFlightOnShowAction();
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
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "componentDidShow",
                      value: function () {
                        this.props.hidden || this.flightHomeExposure();
                      },
                    },
                    {
                      key: "flightHomeExposure",
                      value: function () {
                        try {
                          this.ubtTrace("TZWHomePage_FlightPage_exposure", {
                            PageId: this.pageId,
                            fromPage: this.fromPage,
                          });
                        } catch (e) {}
                      },
                    },
                    {
                      key: "getSingleFlightsList",
                      value: function (e) {
                        var t = e.hasBaby,
                          i = e.hasChild,
                          a = e.dptDate,
                          n = e.dptCode,
                          o = e.arrCode,
                          r = {
                            data: {
                              version: 13,
                              source: 0,
                              cacheUsage: ae.IK.cacheUsage || 0,
                              hasChild: i,
                              hasBaby: t,
                              segments: [
                                { dptDate: a, dptCode: n, arrCode: o },
                              ],
                              student: !1,
                            },
                          };
                        (0, se.j7)(r, {
                          checkFrameworkLogin: !1,
                          checkLogin: !1,
                          cacheControl: {
                            useCache: !0,
                            maxAge: 3e4,
                            dedup: !0,
                            dedupingInterval: 500,
                          },
                        });
                      },
                    },
                    {
                      key: "getNewUserSubsidy",
                      value: function () {
                        var e = this,
                          t = { source: ee.cK.HOME_BANNER };
                        (0, se.C7)(t, {
                          checkFrameworkLogin: !1,
                          checkLogin: !1,
                        }).then(function (t) {
                          if (1 == t.resultCode) {
                            var i = t.data,
                              a = i.banner,
                              n = i.popUpInfo;
                            e.setState({
                              newUserSubsidyBannerInfo: a,
                              newUserSubsidyDrawerInfo: n,
                            });
                          } else e.setState({ newUserSubsidyBannerInfo: null, newUserSubsidyDrawerInfo: null });
                        });
                      },
                    },
                    {
                      key: "flightQueryFromSync",
                      value: function () {
                        var e = this.state.flightQuery,
                          t = (function () {
                            var e = oe.vN.get(),
                              t = ie.rn.get(),
                              i = ie.Q2.get();
                            if (e) {
                              var a,
                                n,
                                o = e.arriveInfo,
                                r = o.name,
                                s = o._cityInfo,
                                c = e.departInfo,
                                l = c.name,
                                d = c._cityInfo,
                                u = e.date,
                                h = (null == s ? void 0 : s.name) || r,
                                m = (null == d ? void 0 : d.name) || l,
                                p = {
                                  澳门: "中国澳门",
                                  香港: "中国香港",
                                  台湾: "中国台湾",
                                };
                              return {
                                date: u,
                                arrCountryId: Object.keys(p).includes(h)
                                  ? 2
                                  : 1,
                                dptCountryId: Object.keys(p).includes(m)
                                  ? 2
                                  : 1,
                                arriveCity: (h = p[h] || h),
                                departCity: (m = p[m] || m),
                                arriveCityCode:
                                  null ===
                                    (a = re.Z.searchCityInfoFromStorage(
                                      h,
                                      "cityName"
                                    )) || void 0 === a
                                    ? void 0
                                    : a.cityCode,
                                departCityCode:
                                  null ===
                                    (n = re.Z.searchCityInfoFromStorage(
                                      m,
                                      "cityName"
                                    )) || void 0 === n
                                    ? void 0
                                    : n.cityCode,
                              };
                            }
                            return t ? i : {};
                          })(),
                          i = {
                            arrCountryId: t.arrCountryId,
                            arrName: t.arriveCity,
                            arrCode: t.arriveCityCode,
                            dptCountryId: t.dptCountryId,
                            dptName: t.departCity,
                            dptCode: t.departCityCode,
                          },
                          a = t.date || e.dptDate,
                          n = X()(a).format("M月D日"),
                          o = w.Z.getWeekInfo(a),
                          s = X()(a).add(2, "day").format("YYYY-MM-DD"),
                          c = X()(s).format("M月D日"),
                          l = w.Z.getWeekInfo(s),
                          d = (0, r.Z)(
                            (0, r.Z)({}, e),
                            {},
                            {
                              domestic: i,
                              dptDate: a,
                              dptDateStr: n,
                              dptWeek: o,
                              rtnDate: s,
                              rtnDateStr: c,
                              rtnWeeK: l,
                              rtnGap: re.Z.getDayDiff(a, s) + 1,
                            }
                          );
                        this.setState({
                          flightQuery: d,
                          trainQueryCacheObj: oe.vN.get(),
                        });
                      },
                    },
                    {
                      key: "getShowIntlExtraSearchInput",
                      value: function (e, t) {
                        var i,
                          a,
                          n = this.state.showIntlExtraSearchInput;
                        return (
                          (e != ee.C4.goback && e != ee.C4.single) ||
                            (n =
                              2 ==
                                (null == t ||
                                null === (i = t.domestic) ||
                                void 0 === i
                                  ? void 0
                                  : i.dptCountryId) ||
                              2 ==
                                (null == t ||
                                null === (a = t.domestic) ||
                                void 0 === a
                                  ? void 0
                                  : a.arrCountryId)),
                          n
                        );
                      },
                    },
                    {
                      key: "getSearchParam",
                      value: function () {
                        var e = this.state,
                          t = e.flightQuery,
                          i = e.hasChild,
                          a = e.hasBaby,
                          n = e.specialCityCode,
                          o = t.domestic,
                          r = t.multi,
                          s = t.dptDate,
                          c = t.rtnDate,
                          l = o.dptCode,
                          d = o.arrCode;
                        return {
                          hasChild: i,
                          hasBaby: a,
                          dptName: o.dptName,
                          dptAName: o.dptAName,
                          dptCode: l,
                          dptDate: s,
                          arrName: o.arrName,
                          arrAName: o.arrAName,
                          arrCode: d,
                          rtnDate: c,
                          segments: r.segments,
                          specialCityCode: n,
                        };
                      },
                    },
                    {
                      key: "onFlightAdClick",
                      value: function (e) {
                        te.Bj.call(this, {
                          index: e,
                          adInfosName: "flightAdInfos",
                          businessLineName: "flightAd",
                        });
                      },
                    },
                    {
                      key: "canHeadHoverShow",
                      value: function () {
                        var e = ie.GK.getAttr("home_head-hover");
                        return !e || X()().diff(e, "hour") >= 48;
                      },
                    },
                    {
                      key: "handleHeadHoverClick",
                      value: function (e) {
                        var t = e.url;
                        w.Z.commonNavigator(t);
                      },
                    },
                    {
                      key: "handleHeadHoverClose",
                      value: function () {
                        ie.GK.setAttr(
                          "home_head-hover",
                          X()().format("YYYY-MM-DD hh:mm:ss")
                        ),
                          this.setState({ headHoverList: null });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e,
                          t = this,
                          i = this.props,
                          a = i.hidden,
                          n = i.functions,
                          o = i.showToTopBtn,
                          r = this.state,
                          s = r.flightInnerType,
                          c = r.flightQuery,
                          l = r.popupInfo,
                          d = r.hasChild,
                          u = r.hasBaby,
                          h = r.psgerNumberList,
                          m = r.intlPsgerNum,
                          p = r.seatGradeRange,
                          f = r.seatGradeIndex,
                          y = r.unpaidOrders,
                          b = r.flightAdInfos,
                          C = r.specialPriceCity,
                          k = r.curTabIndex,
                          Z = r.specialCityName,
                          N = r.searchBtnText,
                          T = r.specialPriceCityCode,
                          x = r.isShowChildSelect,
                          _ = r.restPayTime,
                          D = r.payOffDes,
                          B = r.specialCityCode,
                          P = r.showSurpriseInput,
                          M = r.headHoverList,
                          A = r.newUserSubsidyBannerInfo,
                          L = r.newUserSubsidyDrawerInfo,
                          H = r.showIntlExtraSearchInput,
                          O = r.searchBtnTagConfig,
                          F = r.isShowTjCities,
                          Y = {
                            width: "".concat(100 / ee.gv.length, "%"),
                            transform: "translateX(".concat(100 * k, "%)"),
                            transition: "all .5s ease",
                          },
                          R = null != y && y.length ? y[0] : null;
                        return c
                          ? (0, I.BX)(v.View, {
                              className: w.Z.mergeInnerGrayStyle(
                                "flight-module-container"
                              ),
                              style: "display: ".concat(a ? "none" : "block"),
                              children: [
                                (0, I.tZ)(v.View, {
                                  className: w.Z.mergeGrayStyle(),
                                  children: (0, I.BX)(v.View, {
                                    className:
                                      w.Z.mergeGrayStyle("selform flight"),
                                    style: { boxShadow: "none" },
                                    children: [
                                      ee.gv.length > 1 &&
                                        (0, I.BX)(v.View, {
                                          className:
                                            "home-second-tab-bar flt-tab " +
                                            (be ? "ty" : "zx"),
                                          children: [
                                            ee.gv.map(function (e) {
                                              return (0, I.tZ)(
                                                v.View,
                                                {
                                                  className:
                                                    "second-bar-item flt-tab-item " +
                                                    (e.value == s
                                                      ? "current"
                                                      : ""),
                                                  id: "AYAk",
                                                  onClick: function () {
                                                    return t.switchFlightInnerTab(
                                                      e
                                                    );
                                                  },
                                                  children: e.label,
                                                },
                                                e.value
                                              );
                                            }),
                                            (0, I.tZ)(v.View, {
                                              className: "active-scrollbar",
                                              style: Y,
                                            }),
                                          ],
                                        }),
                                      (0, I.tZ)(ue, {
                                        headHovers: M,
                                        onHeadHoverClick:
                                          this.handleHeadHoverClick.bind(this),
                                        onHeadHoverClose:
                                          this.handleHeadHoverClose.bind(this),
                                      }),
                                      (0, I.BX)(v.View, {
                                        className:
                                          s == ee.C4.goback
                                            ? ""
                                            : "flight-hidden",
                                        children: [
                                          (0, I.tZ)(le, {
                                            startName:
                                              c.domestic &&
                                              (c.domestic.dptAName ||
                                                c.domestic.dptName),
                                            endName:
                                              c.domestic &&
                                              (c.domestic.arrAName ||
                                                c.domestic.arrName),
                                            handleSelect: this.chooseFlightCity,
                                            handleExchange:
                                              this.exchangeFlightStation,
                                            isExchange:
                                              c.domestic && c.domestic.exchange,
                                          }),
                                          (0, I.BX)(v.View, {
                                            className: "item wangfan",
                                            children: [
                                              (0, I.tZ)(v.View, {
                                                className: "onward",
                                                id: "AYAl",
                                                onClick:
                                                  this.chooseFlightDate.bind(
                                                    this
                                                  ),
                                                children: (0, I.BX)(v.View, {
                                                  className: "pr",
                                                  children: [
                                                    (0, I.tZ)(v.Text, {
                                                      children: c.dptDateStr,
                                                    }),
                                                    (0, I.tZ)(v.Text, {
                                                      className: "small",
                                                      children: c.dptWeek,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, I.tZ)(v.View, {
                                                className: "date",
                                                children: "".concat(
                                                  c.rtnGap || 3,
                                                  "天"
                                                ),
                                              }),
                                              (0, I.tZ)(v.View, {
                                                className: "return-date",
                                                id: "AYAm",
                                                onClick:
                                                  this.chooseFlightDate.bind(
                                                    this
                                                  ),
                                                children: (0, I.BX)(v.View, {
                                                  className: "pr return",
                                                  children: [
                                                    (0, I.tZ)(v.Text, {
                                                      children: c.rtnDateStr,
                                                    }),
                                                    (0, I.tZ)(v.Text, {
                                                      className: "small",
                                                      children: c.rtnWeeK,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(v.View, {
                                        className:
                                          s == ee.C4.single
                                            ? ""
                                            : "flight-hidden",
                                        children: [
                                          c &&
                                            c.domestic &&
                                            (0, I.BX)(v.View, {
                                              className: "item station",
                                              children: [
                                                (0, I.tZ)(v.View, {
                                                  className:
                                                    "cell from " +
                                                    (c.domestic.exchange
                                                      ? "slide"
                                                      : ""),
                                                  "data-type": "d",
                                                  id: "AYAn",
                                                  onClick:
                                                    this.chooseFlightCity.bind(
                                                      this
                                                    ),
                                                  children: (0, I.tZ)(v.View, {
                                                    className: "station-txt",
                                                    children:
                                                      c.domestic.dptAName ||
                                                      c.domestic.dptName,
                                                  }),
                                                }),
                                                (0, I.tZ)(v.View, {
                                                  className:
                                                    "cell to " +
                                                    (c.domestic.exchange
                                                      ? "slide"
                                                      : ""),
                                                  "data-type": "a",
                                                  id: "AYAo",
                                                  onClick:
                                                    this.chooseFlightCity.bind(
                                                      this
                                                    ),
                                                  children: (0, I.tZ)(v.View, {
                                                    className: "station-txt",
                                                    children:
                                                      c.domestic.arrAName ||
                                                      c.domestic.arrName,
                                                  }),
                                                }),
                                                (0, I.tZ)(v.View, {
                                                  className:
                                                    "switch " +
                                                    (c.domestic.exchange
                                                      ? "active"
                                                      : ""),
                                                  id: "AYAp",
                                                  onClick:
                                                    this.exchangeFlightStation.bind(
                                                      this
                                                    ),
                                                  children: (0, I.tZ)(v.Image, {
                                                    src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/icon_jh@3x.webp",
                                                    className: "switch-icon",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          (0, I.BX)(v.View, {
                                            className: "item time",
                                            children: [
                                              (0, I.BX)(v.View, {
                                                className: "time-wrap",
                                                id: "AYAq",
                                                onClick:
                                                  this.chooseFlightDate.bind(
                                                    this
                                                  ),
                                                children: [
                                                  (0, I.tZ)(v.Text, {
                                                    className: "day-txt",
                                                    children: c.dptDateStr,
                                                  }),
                                                  (0, I.tZ)(v.Text, {
                                                    className: "day-desc",
                                                    children: c.dptWeek,
                                                  }),
                                                ],
                                              }),
                                              P &&
                                                (0, I.tZ)(v.Image, {
                                                  id: "AYAr",
                                                  onClick: this.toSurpriseInput,
                                                  className: "sgb-input-icon",
                                                  src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/xcx_shouye_jxf.png",
                                                  lazyLoad: !0,
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, I.tZ)(v.View, {
                                        className: "duocheng ".concat(
                                          s == ee.C4.multi
                                            ? ""
                                            : "flight-hidden"
                                        ),
                                        children:
                                          c &&
                                          c.multi &&
                                          c.multi.segments.map(function (e, i) {
                                            return (0,
                                            I.BX)(v.Block, { children: [(0, I.BX)(v.View, { className: "item station", children: [(0, I.tZ)(v.Text, { className: "no bgcolor-primary", children: i + 1 }), (0, I.tZ)(v.View, { className: "cell from " + (e.exchange ? "slide" : ""), "data-index": i, "data-type": "d", id: "AYAs", onClick: t.chooseFlightCity.bind(t), children: (0, I.tZ)(v.View, { className: "station-txt", children: e.dptName }) }), (0, I.tZ)(v.View, { className: "cell to " + (e.exchange ? "slide" : "") + " " + (e.arrName ? "" : "grey"), "data-index": i, "data-type": "a", id: "AYAt", onClick: t.chooseFlightCity.bind(t), children: (0, I.tZ)(v.View, { className: "station-txt", children: e.arrName || "到达城市" }) }), (0, I.tZ)(v.View, { className: "switch " + (e.exchange ? "active" : ""), "data-index": i, id: "AYAu", onClick: t.exchangeFlightStation.bind(t), children: (0, I.tZ)(v.Image, { src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/icon_jh@3x.webp", className: "switch-icon" }) })] }), (0, I.tZ)(v.View, { className: "item time", "data-index": i, id: "AYAv", onClick: t.chooseFlightDate.bind(t), children: (0, I.BX)(v.View, { className: "time-wrap", children: [(0, I.tZ)(v.Text, { className: "day-txt", children: e.dptDateStr }), (0, I.tZ)(v.Text, { className: "day-desc", children: e.dptWeek })] }) })] }, i);
                                          }),
                                      }),
                                      c &&
                                        c.domestic &&
                                        (0, I.BX)(v.View, {
                                          className:
                                            s == ee.C4.special
                                              ? ""
                                              : "flight-hidden",
                                          children: [
                                            (0, I.BX)(v.View, {
                                              className: "flight-tj",
                                              children: [
                                                (0, I.tZ)(v.View, {
                                                  className: "round",
                                                  children: (0, I.tZ)(v.View, {
                                                    className: "round-c",
                                                  }),
                                                }),
                                                (0, I.tZ)(v.View, {
                                                  className: "tj-station",
                                                  "data-type": "d",
                                                  id: "AYAw",
                                                  onClick:
                                                    this.chooseFlightCity,
                                                  children:
                                                    c.domestic.dptAName ||
                                                    c.domestic.dptName,
                                                }),
                                              ],
                                            }),
                                            (0, I.BX)(v.View, {
                                              className: "flight-tj",
                                              children: [
                                                (0, I.tZ)(v.View, {
                                                  className: "round to",
                                                  children: (0, I.tZ)(v.View, {
                                                    className: "round-c",
                                                  }),
                                                }),
                                                (0, I.BX)(v.View, {
                                                  className:
                                                    "tj-station flex-align-items-center",
                                                  "data-type": "a",
                                                  id: "AYAx",
                                                  onClick:
                                                    this.chooseFlightCity,
                                                  children: [
                                                    (0, I.tZ)(v.Text, {
                                                      children:
                                                        Z ||
                                                        c.domestic.arrAName ||
                                                        c.domestic.arrName,
                                                    }),
                                                    F &&
                                                      (0, I.BX)(I.HY, {
                                                        children: [
                                                          (0, I.tZ)(v.View, {
                                                            className:
                                                              "collapse",
                                                          }),
                                                          (0, I.BX)(v.View, {
                                                            className:
                                                              "tj-cities flex-align-items-center",
                                                            children: [
                                                              (0, I.tZ)(
                                                                v.Text,
                                                                {
                                                                  children:
                                                                    "可选多个城市",
                                                                }
                                                              ),
                                                              (0, I.tZ)(
                                                                v.Text,
                                                                {
                                                                  className:
                                                                    "iconfont ifont-clear tj-clear",
                                                                  id: "AYAy",
                                                                  onClick:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.stopPropagation(),
                                                                        g().setStorageSync(
                                                                          "SHOW_TJ_CITIES_TIPS",
                                                                          !0
                                                                        ),
                                                                        t.setState(
                                                                          {
                                                                            isShowTjCities:
                                                                              !1,
                                                                          }
                                                                        );
                                                                    },
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, I.BX)(v.View, {
                                              className: "flight-tj",
                                              children: [
                                                (0, I.tZ)(v.Image, {
                                                  src: "https://images3.c-ctrip.com/ztrip/train_bin/23-04/icon_xcx_sy_sj@3x.png",
                                                  className: "time",
                                                }),
                                                (0, I.BX)(v.View, {
                                                  className: "time-txt",
                                                  id: "AYAz",
                                                  onClick:
                                                    this.chooseFlightDate,
                                                  children: [
                                                    (0, I.tZ)(v.Text, {
                                                      children: c.dptDateStr,
                                                    }),
                                                    c.dptDateStr ===
                                                    c.rtnDateStr
                                                      ? null
                                                      : (0, I.BX)(v.Block, {
                                                          children: [
                                                            "-",
                                                            (0, I.tZ)(v.Text, {
                                                              children:
                                                                c.rtnDateStr,
                                                            }),
                                                          ],
                                                        }),
                                                    (0, I.tZ)(v.Text, {
                                                      className: "small",
                                                      children: "出发",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      x &&
                                        (0, I.BX)(v.View, {
                                          className:
                                            "extra " + (be ? "ty" : "zx"),
                                          children: [
                                            (0, I.tZ)(v.View, {
                                              className: "flex-1",
                                            }),
                                            (0, I.BX)(v.View, {
                                              className: "home-type-wrap",
                                              id: "AYBA",
                                              onClick:
                                                this.toggleChild.bind(this),
                                              children: [
                                                "携带儿童",
                                                (0, I.tZ)(v.Text, {
                                                  className: "type-sub-txt",
                                                  children: "2-12岁",
                                                }),
                                                (0, I.tZ)(v.Text, {
                                                  className:
                                                    "iconfont2 " +
                                                    (d
                                                      ? "ifont2-checkboxed"
                                                      : "ifont2-checkbox"),
                                                }),
                                              ],
                                            }),
                                            (0, I.BX)(v.View, {
                                              className: "home-type-wrap gt",
                                              id: "AYBB",
                                              onClick:
                                                this.toggleBaby.bind(this),
                                              children: [
                                                "携带婴儿",
                                                (0, I.tZ)(v.Text, {
                                                  className: "type-sub-txt",
                                                  children: "14天-2岁",
                                                }),
                                                (0, I.tZ)(v.Text, {
                                                  className:
                                                    "iconfont2 " +
                                                    (u
                                                      ? "ifont2-checkboxed"
                                                      : "ifont2-checkbox"),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      (d || u) &&
                                        x &&
                                        (0, I.BX)(v.View, {
                                          className: "child-notice",
                                          id: "AYBC",
                                          onClick:
                                            this.goToChildNotice.bind(this),
                                          children: [
                                            (0, I.tZ)(v.Text, {
                                              children: "儿童/婴儿预订说明",
                                            }),
                                            (0, I.tZ)(v.Text, {
                                              className:
                                                "iconfont ifont-detail",
                                            }),
                                          ],
                                        }),
                                      H &&
                                        (0, I.BX)(v.View, {
                                          className: "extra",
                                          children: [
                                            (0, I.tZ)(v.Picker, {
                                              className: "pasg",
                                              mode: "multiSelector",
                                              onChange:
                                                this.bindPsgerPickerChange,
                                              onColumnChange:
                                                this
                                                  .bindPsgerPickerColumnChange,
                                              range: h,
                                              children: (0, I.BX)(v.View, {
                                                children: [
                                                  (0, I.tZ)(v.Text, {
                                                    children: m[0] + " 成人",
                                                  }),
                                                  (0, I.tZ)(v.Text, {
                                                    children: m[1] + " 儿童",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, I.tZ)(v.Picker, {
                                              className: "space",
                                              onChange: this.bindGradeChange,
                                              range: p,
                                              children: (0, I.tZ)(v.View, {
                                                children: p[f],
                                              }),
                                            }),
                                          ],
                                        }),
                                      (0, I.tZ)(v.Form, {
                                        reportSubmit: "true",
                                        onSubmit: this.newFlightSearch,
                                        children: (0, I.tZ)(v.View, {
                                          id: "AYBD",
                                          onClick: w.Z.noop,
                                          "data-ubt-key":
                                            s === ee.C4.internation
                                              ? "intlxcx_home_search"
                                              : "xcx_flight_search",
                                          children: (0, I.BX)(v.Button, {
                                            formType: "submit",
                                            className: "btn-sel "
                                              .concat(be ? "ty" : "zx", " ")
                                              .concat(
                                                s === ee.C4.special
                                                  ? "special-btn-submit"
                                                  : ""
                                              ),
                                            children: [
                                              N,
                                              X()().isAfter(
                                                null == O ? void 0 : O.startTime
                                              ) &&
                                                X()().isBefore(
                                                  null == O ? void 0 : O.endTime
                                                ) &&
                                                (0, I.tZ)(v.Image, {
                                                  src: O.tagUrl,
                                                  mode: "widthFix",
                                                  className: "btn-tag",
                                                }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, I.tZ)(ge.J, {
                                  data: { bannerInfo: A, drawerInfo: L },
                                }),
                                (0, I.BX)(v.View, {
                                  className: w.Z.mergeGrayStyle(),
                                  children: [
                                    (0, I.tZ)(v.View, {
                                      children:
                                        R &&
                                        (0, I.BX)(v.View, {
                                          className: "flight-payoff-container",
                                          children: [
                                            (0, I.BX)(v.View, {
                                              className: "left",
                                              children: [
                                                (0, I.tZ)(v.Text, {
                                                  className: "notice-text",
                                                  children: D,
                                                }),
                                                (0, I.tZ)(v.View, {
                                                  className: "payoff-info",
                                                  children:
                                                    3 === R.tripType
                                                      ? (0, I.BX)(v.Block, {
                                                          children: [
                                                            (0, I.tZ)(v.Text, {
                                                              className:
                                                                "flight-type-tag",
                                                              children: "多程",
                                                            }),
                                                            null ===
                                                              (e =
                                                                R.cityPairs) ||
                                                            void 0 === e
                                                              ? void 0
                                                              : e.map(function (
                                                                  e,
                                                                  t
                                                                ) {
                                                                  return (0,
                                                                  I.tZ)(
                                                                    v.Text,
                                                                    {
                                                                      className:
                                                                        "multi-city ".concat(
                                                                          0 ===
                                                                            t
                                                                            ? "first-city"
                                                                            : ""
                                                                        ),
                                                                      children:
                                                                        e,
                                                                    },
                                                                    e
                                                                  );
                                                                }),
                                                            (0, I.tZ)(v.View, {
                                                              children:
                                                                R.description ||
                                                                "",
                                                            }),
                                                          ],
                                                        })
                                                      : (0, I.BX)(v.Block, {
                                                          children: [
                                                            1 === R.tripType &&
                                                              (0, I.tZ)(
                                                                v.Text,
                                                                {
                                                                  className:
                                                                    "flight-type-tag",
                                                                  children:
                                                                    "往返",
                                                                }
                                                              ),
                                                            (0, I.BX)(v.Text, {
                                                              children: [
                                                                R.dptCityName,
                                                                "-",
                                                                R.arrCityName,
                                                                " ",
                                                                X()(
                                                                  R.dptDateTime
                                                                ).format(
                                                                  "YYYY-M-D"
                                                                ),
                                                              ],
                                                            }),
                                                            "起飞",
                                                          ],
                                                        }),
                                                }),
                                              ],
                                            }),
                                            (0, I.BX)(v.View, {
                                              className: "pay-btn",
                                              children: [
                                                (0, I.tZ)(v.Text, {
                                                  className: "pay-text",
                                                  "data-ubt-key":
                                                    "xcx_flt_homepage_ddwh",
                                                  id: "AYBE",
                                                  onClick: function () {
                                                    return t.goToFlightDetail(
                                                      R.orderNumber,
                                                      R.orderSourceFlag
                                                    );
                                                  },
                                                  children: "立即支付",
                                                }),
                                                _ &&
                                                  (0, I.BX)(v.View, {
                                                    className: "pay-count-down",
                                                    children: [
                                                      "剩余",
                                                      (0, I.tZ)(S.ZtCountdown, {
                                                        className:
                                                          "pay-count-down-time",
                                                        isShowHour: !1,
                                                        endTime: _,
                                                        onTimeup:
                                                          this
                                                            .getUnpaidFlightOrders,
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    }),
                                    (0, I.tZ)(v.Block, {
                                      children:
                                        s === ee.C4.special &&
                                        (0, I.BX)(v.View, {
                                          className: "depreciate-notice",
                                          children: [
                                            (0, I.tZ)(v.Image, {
                                              className: "notice-icon",
                                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/chenjiren/icon_jiangjia.png",
                                            }),
                                            (0, I.BX)(v.Text, {
                                              children: [
                                                "想要",
                                                (0, I.tZ)(v.Text, {
                                                  className: "color-red",
                                                  children: "机票降价",
                                                }),
                                                "时，及时提醒你？",
                                              ],
                                            }),
                                            (0, I.tZ)(v.View, {
                                              className: "notice-btn",
                                              id: "AYBF",
                                              onClick: this.goMonitorPage,
                                              children: "降价提醒",
                                            }),
                                          ],
                                        }),
                                    }),
                                    s !== ee.C4.special &&
                                      (0, I.BX)(v.View, {
                                        className: "flight-card",
                                        children: [
                                          (0, I.BX)(v.View, {
                                            className: "item red",
                                            "data-ubt-key":
                                              "xcx_flt_tejia_click",
                                            id: "AYBG",
                                            onClick:
                                              this.toTejiaIndex.bind(this),
                                            children: [
                                              (0, I.tZ)(v.View, {
                                                className: "tit",
                                                children: "特价机票",
                                              }),
                                              (0, I.tZ)(v.View, {
                                                className: "txt color-red",
                                                children: "低至1折起",
                                              }),
                                              (0, I.BX)(v.Button, {
                                                className: "btn-go btn-red",
                                                children: [
                                                  "抢购",
                                                  (0, I.tZ)(v.Text, {
                                                    className:
                                                      "ifont-arr iconfont",
                                                  }),
                                                ],
                                              }),
                                              (0, I.tZ)(v.Image, {
                                                src: "https://pic.c-ctrip.com/train/zt/flight/index-card-tejia.png",
                                                className: "img",
                                              }),
                                            ],
                                          }),
                                          (0, I.BX)(v.View, {
                                            className:
                                              "item " + (be ? "grey" : "blue"),
                                            "data-ubt-key":
                                              "xcx_flt_monitor_click",
                                            id: "AYBH",
                                            onClick:
                                              this.goToMonitorList.bind(this),
                                            children: [
                                              (0, I.tZ)(v.View, {
                                                className: "tit",
                                                children: "低价监控",
                                              }),
                                              (0, I.tZ)(v.View, {
                                                className: "txt",
                                                children: "降价随时通知",
                                              }),
                                              (0, I.BX)(v.Button, {
                                                className: "btn-go",
                                                children: [
                                                  "添加",
                                                  (0, I.tZ)(v.Text, {
                                                    className:
                                                      "ifont-arr iconfont",
                                                  }),
                                                ],
                                              }),
                                              (0, I.tZ)(v.Image, {
                                                src:
                                                  "https://pic.c-ctrip.com/train/zt/flight/index-card-jiankong-" +
                                                  (be ? "ty" : "zx") +
                                                  ".png",
                                                className: "img",
                                              }),
                                            ],
                                          }),
                                          (0, I.BX)(v.View, {
                                            className: "item red",
                                            "data-ubt-key": "134594",
                                            id: "AYBI",
                                            onClick:
                                              this.toPriceParity.bind(this),
                                            children: [
                                              (0, I.tZ)(v.View, {
                                                className: "tit",
                                                children: "多地比价",
                                              }),
                                              (0, I.tZ)(v.View, {
                                                className: "txt color-red",
                                                children: "500预算飞哪玩？",
                                              }),
                                              (0, I.BX)(v.Button, {
                                                className: "btn-go btn-red",
                                                children: [
                                                  "比价",
                                                  (0, I.tZ)(v.Text, {
                                                    className:
                                                      "ifont-arr iconfont",
                                                  }),
                                                ],
                                              }),
                                              (0, I.tZ)(v.Image, {
                                                src:
                                                  "https://pic.c-ctrip.com/train/zt/flight/index-card-pk-" +
                                                  (be ? "ty" : "zx") +
                                                  ".png",
                                                className: "img",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    (null == b ? void 0 : b.length) > 0
                                      ? (0, I.tZ)(v.View, {
                                          className: "advs-banner",
                                          children: (0, I.tZ)(v.Swiper, {
                                            className: "advs-banner-bd",
                                            autoplay: "true",
                                            interval: "3000",
                                            circular: "true",
                                            indicatorColor: "#E5E5E5",
                                            indicatorActiveColor: be
                                              ? "#FC6E51"
                                              : "#0080FF",
                                            children: b.map(function (e, i) {
                                              return (0,
                                              I.tZ)(v.SwiperItem, { children: (0, I.tZ)(v.View, { className: "item", children: (0, I.tZ)(v.Image, { className: "img", src: e.imgUrl, id: "AYBJ", onClick: t.onFlightAdClick.bind(t, i) }) }) }, i);
                                            }),
                                          }),
                                        })
                                      : null,
                                    V.ZP.recommendFlag &&
                                      (0, I.tZ)(de.Z, {
                                        bannerTitle: "假期去哪儿",
                                        onFlightClick: this.onHolidayClick,
                                        onCityClick: this.chooseFlightCity,
                                        specialPriceCityCode: T,
                                        flightQuery: c,
                                        specialPriceCity: C,
                                        specialCityCode: B,
                                      }),
                                    (0, I.tZ)(v.View, {
                                      className: "flight-info",
                                    }),
                                  ],
                                }),
                                o &&
                                  (0, I.tZ)(v.View, {
                                    className: "go-top " + (be ? "ty" : "zx"),
                                    "data-ubt-key": "xcx_flt_backtotop",
                                    id: "AYBK",
                                    onClick: n.scrollToTop,
                                  }),
                                (0, I.tZ)(ve.m, {
                                  pageId: this.pageId,
                                  ubtTrace: this.ubtTrace,
                                  popupInfo: l,
                                  onClick: this.handlePopupClick,
                                  onClose: this.handlePopupClose,
                                }),
                              ],
                            })
                          : (0, I.tZ)(v.View, {});
                      },
                    },
                  ]),
                  i
                );
              })(p.default.PureComponent))
            ) || he,
          we = i(46931),
          ke = i(3106),
          Ze = i(20500),
          Se = i(43796),
          Ne = i(50185),
          Ie = i(31495),
          Te = i(51079),
          xe = i(79295),
          _e = i(90481),
          De = (function (e) {
            (0, d.Z)(i, e);
            var t = (0, u.Z)(i);
            function i(e) {
              return (0, s.Z)(this, i), t.call(this, e);
            }
            return (
              (0, c.Z)(i, [
                {
                  key: "onConfirm",
                  value: function () {
                    var e = (this.props.authInfo || {}).jumpUrl,
                      t = void 0 === e ? "" : e;
                    t &&
                      String(t).startsWith("http") &&
                      P.Z.twebview({
                        data: { url: "".concat(t, "&needLogin=1") },
                      }),
                      this.props.onClose();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.isShow,
                      i = e.onClose,
                      a = e.authInfo;
                    return a
                      ? (0, I.BX)(S.ZtActivityPop, {
                          show: t,
                          className: "bus-index-student-auth-modal",
                          animation: "comeup",
                          isShowClose: !1,
                          children: [
                            (0, I.BX)(v.View, {
                              className: "student-auth-body",
                              children: [
                                (0, I.tZ)(v.View, {
                                  className: "price-content",
                                  children: a.price,
                                }),
                                (0, I.tZ)(v.View, {
                                  className: "desc-content",
                                  children: a.title,
                                }),
                              ],
                            }),
                            (0, I.tZ)(v.View, {
                              className: "student-auth-bottom-content",
                              children: (0, I.tZ)(v.View, {
                                className: "auth-btn",
                                id: "AYAG",
                                onClick: this.onConfirm.bind(this),
                                children: a.button || "立即认证",
                              }),
                            }),
                            (0, I.tZ)(v.View, {
                              className: "cus-close",
                              id: "AYAH",
                              onClick: i,
                            }),
                          ],
                        })
                      : null;
                  },
                },
              ]),
              i
            );
          })(p.default.PureComponent),
          Be = (function (e) {
            (0, d.Z)(i, e);
            var t = (0, u.Z)(i);
            function i(e) {
              var a;
              return (
                (0, s.Z)(this, i),
                ((a = t.call(this, e)).state = { currentKey: 0 }),
                a
              );
            }
            return (
              (0, c.Z)(i, [
                {
                  key: "componentDidUpdate",
                  value: function (e, t) {
                    if (t.currentKey !== this.state.currentKey) {
                      var i,
                        a = (this.props.list || []).filter(function (e) {
                          return !!e;
                        });
                      null === (i = this.onBannerChange) ||
                        void 0 === i ||
                        i.call(this, a[this.state.currentKey]);
                    }
                  },
                },
                {
                  key: "onBannerChange",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    "free1stOrder" === e.title &&
                      this.doTrace(
                        {
                          exposureType: "banner",
                          bizKey: "homepage_qef_banner_show",
                          comment: "首页全额返banner曝光",
                        },
                        1
                      );
                  },
                },
                {
                  key: "onBannerClick",
                  value: function (e) {
                    var t;
                    if (e) {
                      var i = e.jumpUrl,
                        a = void 0 === i ? "" : i;
                      if ("free1stOrder" === e.title)
                        return (
                          this.props.onFree1stOrderClick(),
                          void this.doTrace(
                            {
                              bizKey: "homepage_banner_click",
                              comment: "首页banner点击",
                              clickType: ke.uh.confirmClick,
                            },
                            2
                          )
                        );
                      a &&
                        null !== (t = a.startsWith) &&
                        void 0 !== t &&
                        t.call(a, "http") &&
                        P.Z.twebview({
                          data: { url: a, utmSource: this.props.utmSource },
                        });
                    }
                  },
                },
                {
                  key: "onChange",
                  value: function (e) {
                    var t,
                      i =
                        (null == e || null === (t = e.detail) || void 0 === t
                          ? void 0
                          : t.current) || 0;
                    this.setState({ currentKey: i });
                  },
                },
                {
                  key: "doTrace",
                  value: function () {
                    for (
                      var e, t, i = arguments.length, a = new Array(i), n = 0;
                      n < i;
                      n++
                    )
                      a[n] = arguments[n];
                    null === (e = (t = this.props).doBusTraceInfo) ||
                      void 0 === e ||
                      e.call.apply(e, [t].concat(a));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = (this.props.list || []).filter(function (e) {
                        return !!e;
                      }),
                      i = this.state.currentKey;
                    return t.length > 0
                      ? (0, I.BX)(v.View, {
                          className: "bus-index-swiper",
                          children: [
                            (0, I.tZ)(v.Swiper, {
                              className: "swiper-comp",
                              onChange: this.onChange.bind(this),
                              autoplay: !0,
                              children: t.map(function (t, i) {
                                return (0,
                                I.tZ)(v.SwiperItem, { className: "swiper-item", children: (0, I.tZ)(v.View, { className: "img-box", style: { backgroundImage: "url(".concat(t.picUrl, ")") }, id: "AYAI", onClick: e.onBannerClick.bind(e, t) }) }, i);
                              }),
                            }),
                            t.length > 1 &&
                              (0, I.tZ)(v.View, {
                                className: "custom-dots",
                                children: t.map(function (e, t) {
                                  return (0,
                                  I.tZ)(v.View, { className: "dot-item ".concat(i === t ? "active" : "") }, t);
                                }),
                              }),
                          ],
                        })
                      : null;
                  },
                },
              ]),
              i
            );
          })(p.default.PureComponent),
          Ve = (function (e) {
            (0, d.Z)(i, e);
            var t = (0, u.Z)(i);
            function i(e) {
              return (0, s.Z)(this, i), t.call(this, e);
            }
            return (
              (0, c.Z)(i, [
                {
                  key: "doLogin",
                  value: (function () {
                    var e = (0, o.Z)(
                      (0, n.Z)().mark(function e() {
                        var t, i, a;
                        return (0, n.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = this.props),
                                    (i = t.onLoginSuccess),
                                    (a = t.onLoginFail),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    V.ZP.doLogin("mobileMessage")
                                  );
                                case 4:
                                  i && i(), (e.next = 10);
                                  break;
                                case 7:
                                  (e.prev = 7), (e.t0 = e.catch(1)), a && a();
                                case 10:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 7]]
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
                    return (0, I.BX)(v.View, {
                      id: "AAAW",
                      onClick: this.doLogin.bind(this),
                      className: "bus-dt-login-guide-component",
                      children: [
                        (0, I.tZ)(v.View, {
                          className: "title",
                          children: "手机号查单",
                        }),
                        (0, I.tZ)(v.View, {
                          className: "search-btn bd-1rpx",
                          children: "查询",
                        }),
                      ],
                    });
                  },
                },
              ]),
              i
            );
          })(p.default.PureComponent),
          Pe = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
          Me =
            (0, C.h)(!0)(
              (me = (function (e) {
                (0, d.Z)(i, e);
                var t = (0, u.Z)(i);
                function i(e) {
                  var a;
                  return (
                    (0, s.Z)(this, i),
                    ((a = t.call(this, e)).state = { targetOrder: null }),
                    a
                  );
                }
                return (
                  (0, c.Z)(i, [
                    {
                      key: "componentDidShow",
                      value: function () {
                        this.getLastOrderWithLoginStatus();
                      },
                    },
                    {
                      key: "getLastOrderWithLoginStatus",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (V.ZP.isLogin) {
                                        e.next = 2;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 2:
                                      return (
                                        (e.prev = 2),
                                        (e.next = 5),
                                        (0, we.iL)({ source: "station" })
                                      );
                                    case 5:
                                      1 == (t = e.sent).code &&
                                        ((i = (t.data || []).filter(function (
                                          e
                                        ) {
                                          return (
                                            !e.isToTravel &&
                                            "已成交" === e.orderState
                                          );
                                        })[0]),
                                        this.setState({ targetOrder: i })),
                                        (e.next = 12);
                                      break;
                                    case 9:
                                      (e.prev = 9),
                                        (e.t0 = e.catch(2)),
                                        (0, b.showToast)({
                                          title: "网络错误，请稍后重试哦~",
                                        });
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
                      key: "goToOrderList",
                      value: function () {
                        g().reLaunch({
                          url: "/pages/myctrip/list/list?orderType=bus&busOrderType=station",
                        });
                      },
                    },
                    {
                      key: "getDateStr",
                      value: function () {
                        var e = this.state.targetOrder;
                        if (e) {
                          var t = X()(e.ticketFromDate);
                          return ""
                            .concat(t.format("MM月DD日"), " ")
                            .concat(Pe[t.day()]);
                        }
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.state.targetOrder,
                          t = this.getDateStr();
                        return e
                          ? (0, I.BX)(v.View, {
                              className: "bus-dt-station-order-card",
                              id: "AYAE",
                              onClick: this.goToOrderList.bind(this),
                              children: [
                                (0, I.tZ)(v.View, {
                                  className: "title",
                                  children: "车站窗口订单查询",
                                }),
                                (0, I.BX)(v.View, {
                                  className: "order-content",
                                  children: [
                                    (0, I.BX)(v.View, {
                                      className: "content-head",
                                      children: [
                                        (0, I.BX)(v.View, {
                                          className: "lf",
                                          children: [
                                            (0, I.tZ)(v.Text, {
                                              className: "time-date",
                                              children: t,
                                            }),
                                            (0, I.BX)(v.Text, {
                                              className: "time-min",
                                              children: [
                                                e.ticketFromTime,
                                                "出发",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, I.tZ)(v.View, {
                                          className: "rt",
                                          children: "全部订单",
                                        }),
                                      ],
                                    }),
                                    (0, I.BX)(v.View, {
                                      className: "content-body",
                                      children: [
                                        (0, I.tZ)(v.View, {
                                          className: "from",
                                          children:
                                            e.fromDistrictName ||
                                            e.fromCityName,
                                        }),
                                        (0, I.tZ)(v.Image, {
                                          className: "jt",
                                          src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/cpjt@3x.png",
                                          mode: "aspectFit",
                                        }),
                                        (0, I.tZ)(v.View, {
                                          className: "to",
                                          children:
                                            e.toDistrictName || e.toCityName,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, I.tZ)(v.View, {});
                      },
                    },
                  ]),
                  i
                );
              })(p.default.PureComponent))
            ) || me,
          Ae =
            (0, C.h)(!0)(
              (pe = (function (e) {
                (0, d.Z)(i, e);
                var t = (0, u.Z)(i);
                function i(e) {
                  var a;
                  return (
                    (0, s.Z)(this, i),
                    ((a = t.call(this, e)).state = { isLogin: V.ZP.isLogin }),
                    a
                  );
                }
                return (
                  (0, c.Z)(i, [
                    {
                      key: "componentDidShow",
                      value: function () {
                        console.log("search did show.."),
                          this.setState({ isLogin: V.ZP.isLogin });
                      },
                    },
                    {
                      key: "onLoginSuccess",
                      value: function () {
                        this.setState({ isLogin: V.ZP.isLogin });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        return (0, I.tZ)(v.View, {
                          className: "bus-index-station-order-search-component",
                          children: this.state.isLogin
                            ? (0, I.tZ)(Me, {})
                            : (0, I.tZ)(Ve, {
                                onLoginSuccess: this.onLoginSuccess.bind(this),
                              }),
                        });
                      },
                    },
                  ]),
                  i
                );
              })(p.default.PureComponent))
            ) || pe,
          Le = i(62240),
          He = ["bus_order_detail", "train_order_detail"],
          Xe = (function (e) {
            (0, d.Z)(i, e);
            var t = (0, u.Z)(i);
            function i(e) {
              var a;
              return (
                (0, s.Z)(this, i),
                ((a = t.call(this, e)).state = {
                  isShowDialog: !1,
                  randomCouponInfo: null,
                }),
                a
              );
            }
            return (
              (0, c.Z)(i, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.needInitFetchData() && this.getRandomCouponInfo();
                  },
                },
                {
                  key: "UNSAFE_componentWillReceiveProps",
                  value: function (e) {
                    var t = this.state.isShowDialog;
                    this.props.enableAutoShow === e.enableAutoShow ||
                      t ||
                      this.setState({
                        isShowDialog:
                          e.enableAutoShow &&
                          !this.props.isShowedRandomCouponModal,
                      });
                  },
                },
                {
                  key: "needInitFetchData",
                  value: function () {
                    return !this.props.stopInitFetchData;
                  },
                },
                {
                  key: "getRandomCouponInfo",
                  value: (function () {
                    var e = (0, o.Z)(
                      (0, n.Z)().mark(function e() {
                        var t, i;
                        return (0, n.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t = He.includes(this.props.fromSource)),
                                    ("zx" != y.default.jetpack &&
                                      "ty" != y.default.jetpack) ||
                                      !t ||
                                      !V.ZP.isLogin)
                                  ) {
                                    e.next = 14;
                                    break;
                                  }
                                  return (
                                    (e.prev = 2),
                                    (e.next = 5),
                                    (0, we.j)({
                                      scene: "xcxIndexRandomDiscount",
                                      fromCity: this.props.fromCity,
                                      fromStation: this.props.fromStation,
                                    })
                                  );
                                case 5:
                                  1 ===
                                    (null == (i = e.sent) ? void 0 : i.code) &&
                                    null != i &&
                                    i.data &&
                                    Object.keys(i.data).length > 0 &&
                                    this.setState(
                                      {
                                        isShowDialog:
                                          !this.props.isShowedRandomCouponModal,
                                        randomCouponInfo: i.data,
                                      },
                                      this.onDataLoaded
                                    ),
                                    (e.next = 13);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(2)),
                                    this.setState(
                                      {
                                        isShowDialog: !1,
                                        randomCouponInfo: null,
                                      },
                                      this.onDataLoaded
                                    ),
                                    console.log(
                                      "load random coupon failed: ",
                                      e.t0
                                    );
                                case 13:
                                  return e.abrupt("return");
                                case 14:
                                  this.setState(
                                    {
                                      isShowDialog: !1,
                                      randomCouponInfo: null,
                                    },
                                    this.onDataLoaded
                                  );
                                case 15:
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
                  key: "onDataLoaded",
                  value: function () {
                    var e,
                      t,
                      i = this.state.randomCouponInfo;
                    null === (e = (t = this.props).onDataLoaded) ||
                      void 0 === e ||
                      e.call(t, i);
                  },
                },
                {
                  key: "handleHideModal",
                  value: function () {
                    this.setState({ isShowDialog: !1 });
                  },
                },
                {
                  key: "handleModalCancel",
                  value: function () {
                    var e = this;
                    (0, we.Nl)({ type: "2" })
                      .then(function (t) {
                        var i;
                        1 === (null == t ? void 0 : t.code) &&
                          (e.handleHideModal(),
                          null === (i = e.props) ||
                            void 0 === i ||
                            i.onReceiveCouponSuccess());
                      })
                      .catch(function (e) {
                        console.log("Unreceive random coupon failed: ", e);
                      });
                  },
                },
                {
                  key: "handleModalConfirm",
                  value: function () {
                    var e = this;
                    (0, we.Nl)({ type: "1" })
                      .then(function (t) {
                        var i;
                        1 === (null == t ? void 0 : t.code) &&
                          (e.handleHideModal(),
                          null === (i = e.props) ||
                            void 0 === i ||
                            i.onReceiveCouponSuccess(),
                          (0, b.showToast)("领取成功！"));
                      })
                      .catch(function (e) {
                        console.log("Receive random coupon failed: ", e);
                      });
                  },
                },
                {
                  key: "isShow",
                  value: function () {
                    var e = this.state,
                      t = e.isShowDialog,
                      i = e.randomCouponInfo;
                    return t && i;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state.randomCouponInfo;
                    return (0, I.tZ)(v.View, {
                      className: "bus-random-coupon-modal",
                      children: (0, I.BX)(S.ZtActivityPop, {
                        show: this.isShow(),
                        animation: "comeup",
                        onClose: this.handleModalCancel.bind(this),
                        children: [
                          (0, I.tZ)(v.Image, {
                            className: "icon",
                            src: (null == e ? void 0 : e.icon) || "",
                          }),
                          (0, I.tZ)(v.View, {
                            className: "content",
                            children: (0, I.tZ)(S.ZtRichText, {
                              space: "nbsp",
                              nodes: (null == e ? void 0 : e.title) || "",
                            }),
                          }),
                          (0, I.BX)(v.View, {
                            className: "btn-group",
                            children: [
                              (0, I.tZ)(v.View, {
                                className: "cancel",
                                id: "AAAl",
                                onClick: this.handleModalCancel.bind(this),
                                children: "放弃低价",
                              }),
                              (0, I.tZ)(v.View, {
                                className: "confirm",
                                id: "AAAm",
                                onClick: this.handleModalConfirm.bind(this),
                                children: "领取机会",
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
          })(p.default.PureComponent),
          Oe = { bus: 600, ship: 700, scenicArea: 1300, airport: 1300 },
          Fe = { bus: "busTitlePic", ship: "shipTitlePic" },
          Ye = (function (e) {
            (0, d.Z)(i, e);
            var t = (0, u.Z)(i);
            function i(e) {
              var a;
              return (
                (0, s.Z)(this, i),
                ((a = t.call(this, e)).state = {
                  allProductlineCouponInfo: null,
                  isModalVisible: !1,
                  filterTab: e.tab || "all",
                }),
                a
              );
            }
            return (
              (0, c.Z)(i, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.needInitFetchData() && this.getCouponInfoPromise();
                  },
                },
                {
                  key: "UNSAFE_componentWillReceiveProps",
                  value: function (e) {
                    var t = this,
                      i = this.state.isModalVisible;
                    this.props.tab !== e.tab &&
                      !i &&
                      ["bus", "ship"].includes(e.tab) &&
                      this.setState({ filterTab: e.tab }, function () {
                        return t.getModalVisible();
                      });
                  },
                },
                {
                  key: "needInitFetchData",
                  value: function () {
                    return !this.props.stopInitFetchData;
                  },
                },
                {
                  key: "getShowCouponList",
                  value: function () {
                    var e,
                      t,
                      i = this.state,
                      a = i.filterTab,
                      n = i.isCombineWin,
                      o = this.state.allProductlineCouponInfo;
                    return n
                      ? (null == o ||
                        null === (t = o.indexCouponList) ||
                        void 0 === t
                          ? void 0
                          : t.filter(function (e) {
                              return !!e.couponType;
                            })) || []
                      : (null == o ||
                        null === (e = o.indexCouponList) ||
                        void 0 === e
                          ? void 0
                          : e.filter(function (e) {
                              var t = e.couponType;
                              return "all" === a ? !!t : t == Oe[a];
                            })) || [];
                  },
                },
                {
                  key: "handleShowModal",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.cb,
                      i = e.isCustomClick,
                      a = void 0 !== i && i,
                      n = e.filterTab,
                      o = void 0 === n ? "all" : n;
                    this.setState(
                      (0, r.Z)(
                        { isModalVisible: !0, filterTab: o },
                        a ? { isShowModalAuto: !1 } : {}
                      ),
                      t
                    );
                  },
                },
                {
                  key: "handleHideModal",
                  value: function (e) {
                    this.setState({ isModalVisible: !1, filterTab: "all" }, e);
                  },
                },
                {
                  key: "getModalVisible",
                  value: function () {
                    var e = this.state.filterTab,
                      t = this.getShowCouponList(),
                      i = V.ZP.isLogin
                        ? "".concat("BUS_INDEX_COUPON_POP", "_LOGIN_").concat(e)
                        : "BUS_INDEX_COUPON_POP__".concat(e),
                      a = Ze.KM.getAttr(i),
                      n = !a || X()().diff(a, "day") >= 1,
                      o = (null == t ? void 0 : t.length) > 0 && n;
                    o && Ze.KM.setAttr(i, new Date().getTime()),
                      this.setState({ isModalVisible: o });
                  },
                },
                {
                  key: "handleCloseModalWithOneDay",
                  value: function () {
                    var e = this.props,
                      t = e.ubtTrace,
                      i = e.pageId,
                      a = e.tab;
                    null == t ||
                      t(
                        "bus" === a
                          ? "BZWHome_CouponPopup_click"
                          : "SZWHome_CouponPopup_click",
                        {
                          PageId: i,
                          PopupType: this.state.isCombineWin ? 2 : 1,
                          clickType: 0,
                        }
                      ),
                      this.setState({ isModalVisible: !1 });
                  },
                },
                {
                  key: "handleReceiveCoupon",
                  value: (function () {
                    var e = (0, o.Z)(
                      (0, n.Z)().mark(function e() {
                        return (0, n.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (((e.prev = 0), V.ZP.isLogin)) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (e.next = 4), V.ZP.doLogin();
                                case 4:
                                  return e.abrupt("return");
                                case 5:
                                  return (
                                    (0, b.showLoading)("领取中..."),
                                    (e.next = 8),
                                    this.receiveCouponPromise()
                                  );
                                case 8:
                                  return (
                                    this.props.onReceiveCouponSuccess &&
                                      this.props.onReceiveCouponSuccess(),
                                    (e.next = 11),
                                    this.getCouponInfoPromise()
                                  );
                                case 11:
                                  (0, b.hideLoading)(), (e.next = 18);
                                  break;
                                case 14:
                                  (e.prev = 14),
                                    (e.t0 = e.catch(0)),
                                    (0, b.hideLoading)(),
                                    console.log(e.t0);
                                case 18:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 14]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "getCouponInfoPromise",
                  value: (function () {
                    var e = (0, o.Z)(
                      (0, n.Z)().mark(function e() {
                        var t,
                          i,
                          a,
                          o,
                          r,
                          s,
                          c,
                          l,
                          d,
                          u,
                          h = this;
                        return (0, n.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((e.prev = 0),
                                    (o = this.props.utmSource),
                                    !!(
                                      !o ||
                                      -1 === o.indexOf("zxxcx_ditui_yilabao")
                                    ))
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  throw new Error("only support in zx");
                                case 5:
                                  return (
                                    (e.next = 7),
                                    Promise.all([
                                      (0, we.aT)({
                                        fromPage: "superCouponWin",
                                        openId: V.ZP.openid,
                                        utmSource: o,
                                      }),
                                    ])
                                  );
                                case 7:
                                  (r = e.sent),
                                    (s = (0, $.Z)(r, 1)),
                                    (c = s[0]),
                                    (l = {
                                      allProductlineCouponInfo:
                                        1 === c.code ? c.data : null,
                                      isCombineWin:
                                        null == c ||
                                        null === (t = c.data) ||
                                        void 0 === t
                                          ? void 0
                                          : t.isCombineWin,
                                      isModalVisible: !0,
                                    }),
                                    this.setState(l, function () {
                                      return h.getModalVisible();
                                    }),
                                    null ===
                                      (i = (a = this.props).onCouponInfoload) ||
                                      void 0 === i ||
                                      i.call(a, {
                                        allProductlineCouponInfo:
                                          l.allProductlineCouponInfo,
                                      }),
                                    (e.next = 18);
                                  break;
                                case 15:
                                  (e.prev = 15),
                                    (e.t0 = e.catch(0)),
                                    null ===
                                      (d = (u = this.props).onCouponInfoload) ||
                                      void 0 === d ||
                                      d.call(u, {
                                        allProductlineCouponInfo: null,
                                      });
                                case 18:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 15]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "receiveCouponPromise",
                  value: (function () {
                    var e = (0, o.Z)(
                      (0, n.Z)().mark(function e() {
                        var t, i;
                        return (0, n.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    (0, we.gj)({
                                      fromPage: "superCouponWin",
                                      indexCouponList: this.getShowCouponList(),
                                    })
                                  );
                                case 3:
                                  if (1 === (i = e.sent).code) {
                                    e.next = 6;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    (0, b.showToast)(
                                      i.message || "领取失败，请稍后重试哦~"
                                    )
                                  );
                                case 6:
                                  (0, b.showToast)(
                                    (null === (t = i.data) || void 0 === t
                                      ? void 0
                                      : t.toastTips) || "领取成功！"
                                  ),
                                    (e.next = 13);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    console.log(e.t0),
                                    (0, b.showToast)("领取失败，请稍后重试哦~");
                                case 13:
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
                  key: "onCouponBtnClick",
                  value: function () {
                    var e,
                      t,
                      i = this.props,
                      a = i.ubtTrace,
                      n = i.pageId,
                      o = i.tab;
                    null == a ||
                      a(
                        "bus" === o
                          ? "BZWHome_CouponPopup_click"
                          : "SZWHome_CouponPopup_click",
                        {
                          PageId: n,
                          PopupType: this.state.isCombineWin ? 2 : 1,
                          clickType: 1,
                        }
                      ),
                      this.handleReceiveCoupon(this),
                      null === (e = (t = this.props).onCouponBtnClick) ||
                        void 0 === e ||
                        e.call(t);
                  },
                },
                {
                  key: "isShow",
                  value: function () {
                    var e = this.state,
                      t = e.isModalVisible,
                      i = e.isCombineWin,
                      a = this.props,
                      n = a.ubtTrace,
                      o = a.pageId,
                      r = a.tab,
                      s = this.getShowCouponList(),
                      c = t && s.length > 0;
                    return (
                      c &&
                        (null == n ||
                          n(
                            "bus" === r
                              ? "BZWHome_CouponPopup_exposure"
                              : "SZWHome_CouponPopup_exposure",
                            { PageId: o, PopupType: i ? 2 : 1 }
                          )),
                      c
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.allProductlineCouponInfo,
                      i = e.filterTab,
                      a = this.getShowCouponList(),
                      n = Fe[i];
                    return (0, I.tZ)(v.View, {
                      children: (0, I.tZ)(S.ZtActivityPop, {
                        show: this.isShow(),
                        className: "bus-index-coupon-modal-v2",
                        animation: "comeup",
                        isShowClose: !1,
                        children: (0, I.BX)(v.View, {
                          className: "bus-index-modal-body ".concat(
                            null != t && t.styleSwitch ? "spring-skin" : ""
                          ),
                          children: [
                            (0, I.BX)(v.View, {
                              className: "coupon-modal-content bg-".concat(
                                a.length <= 3 ? a.length : 3
                              ),
                              children: [
                                (0, I.tZ)(v.View, {
                                  className: "modal-tag",
                                  children: "".concat(
                                    y.default.isTieyou ? "铁友" : "智行",
                                    "汽车票·比车站便宜"
                                  ),
                                }),
                                (0, I.tZ)(v.View, {
                                  className: "modal-title",
                                  style: {
                                    background: "url(".concat(
                                      null == t ? void 0 : t[n],
                                      ") no-repeat center center;background-size: 100% 100%;"
                                    ),
                                  },
                                }),
                                (0, I.tZ)(v.ScrollView, {
                                  className: "coupon-display-content",
                                  scrollY: !0,
                                  children: a.map(function (e, t) {
                                    return (0,
                                    I.BX)(v.View, { className: "coupon-card type-".concat(e.couponType, " ").concat(1 == e.tag ? "received" : ""), children: [(0, I.tZ)(v.View, { className: "card-left price", children: e.price }), (0, I.BX)(v.View, { className: "card-right", children: [(0, I.tZ)(v.View, { className: "title", children: e.promotionTitle }), (0, I.tZ)(v.View, { className: "desc", children: e.promotionDes })] })] }, t);
                                  }),
                                }),
                              ],
                            }),
                            (0, I.tZ)(v.View, {
                              className: "bottom-content",
                              children: (0, I.tZ)(v.View, {
                                className: "op-btn",
                                id: "AYAC",
                                onClick: this.onCouponBtnClick.bind(this),
                                children: (0, I.tZ)(v.View, {
                                  className: "btn-text",
                                  children: "立即领取",
                                }),
                              }),
                            }),
                            (0, I.tZ)(v.View, {
                              className: "btn-close",
                              id: "AYAD",
                              onClick:
                                this.handleCloseModalWithOneDay.bind(this),
                            }),
                          ],
                        }),
                      }),
                    });
                  },
                },
              ]),
              i
            );
          })(p.default.PureComponent),
          Re = (function (e) {
            (0, d.Z)(i, e);
            var t = (0, u.Z)(i);
            function i(e) {
              var a;
              return (
                (0, s.Z)(this, i),
                (a = t.call(this, e)),
                (0, h.Z)((0, l.Z)(a), "$cashBack1stOrder", null),
                (0, h.Z)((0, l.Z)(a), "$couponModal", null),
                (0, h.Z)((0, l.Z)(a), "$randomCouponModal", null),
                (a.state = {
                  isShowIndexCouponModal: !1,
                  isShowRandomCouponModal: !1,
                }),
                a
              );
            }
            return (
              (0, c.Z)(i, [
                {
                  key: "handleInitData",
                  value: function () {
                    var e = this;
                    this.setState(
                      {
                        isShowIndexCouponModal: !1,
                        isShowRandomCouponModal: !1,
                      },
                      function () {
                        var t;
                        null === (t = e.$cashBack1stOrder) ||
                          void 0 === t ||
                          t.handleInitFetchData();
                      }
                    );
                  },
                },
                {
                  key: "handleRefreshData",
                  value: function () {
                    var e, t, i;
                    null === (e = this.$cashBack1stOrder) ||
                      void 0 === e ||
                      e.handleFetchData(),
                      null === (t = this.$randomCouponModal) ||
                        void 0 === t ||
                        t.getRandomCouponInfo(),
                      null === (i = this.$couponModal) ||
                        void 0 === i ||
                        i.getCouponInfoPromise();
                  },
                },
                {
                  key: "isShow",
                  value: function () {
                    var e, t, i;
                    return (
                      (null === (e = this.$couponModal) || void 0 === e
                        ? void 0
                        : e.isShow()) ||
                      (null === (t = this.$randomCouponModal) || void 0 === t
                        ? void 0
                        : t.isShow()) ||
                      (null === (i = this.$cashBack1stOrder) || void 0 === i
                        ? void 0
                        : i.isShow())
                    );
                  },
                },
                {
                  key: "onCashBack1stOrderInfoLoad",
                  value: function () {
                    var e,
                      t,
                      i =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      a = i.isShow,
                      n = i.isAutoShow,
                      o = i.freeOrderCouponInfo;
                    this.setState({ isShowRandomCouponModal: !a }),
                      o &&
                        (null === (e = (t = this.props).onAutoVisibleChange) ||
                          void 0 === e ||
                          e.call(t, { isAutoShow: n }));
                  },
                },
                {
                  key: "onRandomCouponInfoLoad",
                  value: function (e) {
                    var t,
                      i,
                      a,
                      n =
                        null === (t = this.$cashBack1stOrder) || void 0 === t
                          ? void 0
                          : t.isShow();
                    this.setState({ isShowIndexCouponModal: !e && !n }),
                      e &&
                        (null === (i = (a = this.props).onAutoVisibleChange) ||
                          void 0 === i ||
                          i.call(a, {
                            isAutoShow: !0,
                            isShowedRandomCouponModal: !0,
                          }));
                  },
                },
                {
                  key: "onIndexCouponInfoLoad",
                  value: function () {
                    for (
                      var e,
                        t,
                        i,
                        a,
                        n,
                        o = arguments.length,
                        r = new Array(o),
                        s = 0;
                      s < o;
                      s++
                    )
                      r[s] = arguments[s];
                    null === (e = (t = this.props).onCouponInfoload) ||
                      void 0 === e ||
                      e.call.apply(e, [t].concat(r)),
                      null === (i = (a = this.props).onAutoVisibleChange) ||
                        void 0 === i ||
                        i.call(a, {
                          isAutoShow:
                            null === (n = r[0]) || void 0 === n
                              ? void 0
                              : n.isShowModalAuto,
                        });
                  },
                },
                {
                  key: "handleReceiveCouponSuccess",
                  value: function () {
                    for (
                      var e, t, i = arguments.length, a = new Array(i), n = 0;
                      n < i;
                      n++
                    )
                      a[n] = arguments[n];
                    null ===
                      (e = (t = this.props).handleReceiveCouponSuccess) ||
                      void 0 === e ||
                      e.call.apply(e, [t].concat(a));
                  },
                },
                {
                  key: "doBusNewTraceInfo",
                  value: function () {
                    for (
                      var e, t, i = arguments.length, a = new Array(i), n = 0;
                      n < i;
                      n++
                    )
                      a[n] = arguments[n];
                    null === (e = (t = this.props).doBusTraceInfo) ||
                      void 0 === e ||
                      e.call.apply(e, [t].concat(a));
                  },
                },
                {
                  key: "handleSubscrebeModal",
                  value: function () {
                    var e, t;
                    null === (e = (t = this.props).handleSubscrebeModal) ||
                      void 0 === e ||
                      e.call(t);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state,
                      i = t.isShowIndexCouponModal,
                      a = t.isShowRandomCouponModal,
                      n = this.props,
                      o = n.enableAutoShow,
                      r = n.utmSource,
                      s = n.fromSource,
                      c = n.fromCity,
                      l = n.fromStation,
                      d = n.isShowedRandomCouponModal,
                      u = n.fromWechatPush,
                      h = n.tab,
                      m = n.ubtTrace,
                      p = n.pageId;
                    return (0, I.BX)(v.Block, {
                      children: [
                        (0, I.tZ)(Le.Z, {
                          ref: function (t) {
                            e.$cashBack1stOrder = t;
                          },
                          onDataLoaded:
                            this.onCashBack1stOrderInfoLoad.bind(this),
                          enableAutoShow: o,
                          stopInitFetchData: !0,
                          handleSubscrebeModal:
                            this.handleSubscrebeModal.bind(this),
                          fromWechatPush: u,
                          onShow: function (t) {
                            var i = t.isStep1,
                              a = t.isStep2,
                              n = t.isNotTravel;
                            i
                              ? e.doBusNewTraceInfo(
                                  {
                                    exposureType: "popup",
                                    bizKey: "homepage_qef_pop_show",
                                    comment: "首页全额返弹窗曝光",
                                  },
                                  1
                                )
                              : a && n
                              ? e.doBusNewTraceInfo(
                                  {
                                    exposureType: "popup",
                                    bizKey: "bus_home_qef_popup_show",
                                    comment: "全额返首页弹窗曝光",
                                  },
                                  1
                                )
                              : e.doBusNewTraceInfo(
                                  {
                                    exposureType: "popup",
                                    bizKey: "homepage_completetrip_fq_pop_show",
                                    comment: "出行完成后首页返券弹窗",
                                  },
                                  1
                                );
                          },
                          onSubmit: function (t) {
                            var i = t.isStep1,
                              a = t.isStep2,
                              n = t.isReceive,
                              o = t.isNotTravel;
                            i
                              ? e.doBusNewTraceInfo(
                                  {
                                    bizKey: n
                                      ? "homepage_coupons_order_pop_click"
                                      : "homepage_coupons_accept_order_pop_click",
                                    comment: n
                                      ? "首页弹窗点击【立即领取并下单】"
                                      : "首页弹窗点击【立即下单】",
                                    clickType: ke.uh.confirmClick,
                                  },
                                  2
                                )
                              : a && o
                              ? e.doBusNewTraceInfo(
                                  {
                                    bizKey: "bus_home_qef_popup_click",
                                    comment: "全额返首页弹窗点击",
                                    clickType: ke.uh.confirmClick,
                                  },
                                  2
                                )
                              : a &&
                                !n &&
                                e.doBusNewTraceInfo(
                                  {
                                    bizKey:
                                      "homepage_completetrip_fq_pop_click",
                                    comment:
                                      "出行完成后首页返券弹窗点击【立即领取】",
                                    clickType: ke.uh.confirmClick,
                                  },
                                  2
                                );
                          },
                        }),
                        a &&
                          (0, I.tZ)(Xe, {
                            ref: function (t) {
                              e.$randomCouponModal = t;
                            },
                            fromSource: s,
                            fromCity: c,
                            fromStation: l,
                            isShowedRandomCouponModal: d,
                            enableAutoShow: o,
                            onDataLoaded:
                              this.onRandomCouponInfoLoad.bind(this),
                            onReceiveCouponSuccess:
                              this.handleReceiveCouponSuccess.bind(this),
                          }),
                        i &&
                          (0, I.tZ)(Ye, {
                            ref: function (t) {
                              e.$couponModal = t;
                            },
                            onCouponInfoload:
                              this.onIndexCouponInfoLoad.bind(this),
                            onReceiveCouponSuccess:
                              this.handleReceiveCouponSuccess.bind(this),
                            enableAutoShow: !0,
                            utmSource: r,
                            tab: h,
                            ubtTrace: m,
                            pageId: p,
                          }),
                      ],
                    });
                  },
                },
              ]),
              i
            );
          })(p.default.PureComponent),
          ze = p.default.memo(function (e) {
            var t = e.subTitle,
              i = void 0 === t ? "" : t,
              a = e.couponAmount,
              n = void 0 === a ? 0 : a,
              o = e.routeList,
              r = void 0 === o ? [] : o,
              s = e.onClickCoupon,
              c = void 0 === s ? function () {} : s,
              l = e.gotoBusList,
              d = void 0 === l ? function () {} : l,
              u = e.ubtTrace,
              h = void 0 === u ? function () {} : u;
            return (
              (0, p.useEffect)(function () {
                if (r && r.length > 0)
                  try {
                    r.forEach(function (e) {
                      h(
                        "homepage_sfestival_recommend_line_show",
                        "首页-春节返程线路推荐曝光",
                        {
                          product_line: null == e ? void 0 : e.businessType,
                          backtype: null == e ? void 0 : e.tag,
                        }
                      );
                    });
                  } catch (e) {
                    console.log(e);
                  }
              }, []),
              (0, I.BX)(v.View, {
                className: "bus-cy-route-module",
                children: [
                  (0, I.BX)(v.View, {
                    className: "header",
                    children: [
                      (0, I.BX)(v.View, {
                        className: "left-header",
                        children: [
                          (0, I.tZ)(v.Image, {
                            className: "icon",
                            src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_bxn@3x.png",
                          }),
                          (0, I.tZ)(v.Image, {
                            className: "tit-img",
                            mode: "aspectFit",
                            src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_zlcy@3x.png",
                          }),
                        ],
                      }),
                      (0, I.BX)(v.View, {
                        className: "right-header",
                        children: [
                          (0, I.BX)(v.View, {
                            className: "coupon",
                            children: [
                              n &&
                                (0, I.BX)(v.Text, {
                                  className: "total-amount",
                                  children: ["¥", n],
                                }),
                              (0, I.tZ)(v.Text, {
                                className: "unit",
                                children: "券",
                              }),
                            ],
                          }),
                          (0, I.BX)(v.View, {
                            className: "operation",
                            id: "AYAJ",
                            onClick: c,
                            children: [
                              (0, I.tZ)(v.Text, {
                                className: "sub-tit",
                                children: i,
                              }),
                              (0, I.tZ)(v.Image, {
                                className: "arr-icon",
                                src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_jtoo@3x.png",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, I.tZ)(v.View, {
                    className: "recommend-content",
                    children:
                      r &&
                      r.map(function (e, t) {
                        return (0, I.BX)(
                          v.View,
                          {
                            className: "item",
                            children: [
                              (0, I.BX)(v.View, {
                                className: "route-txt",
                                children: [
                                  (0, I.tZ)(v.Text, {
                                    className: "city-name from-station",
                                    children: null == e ? void 0 : e.from,
                                  }),
                                  (0, I.tZ)(v.Image, {
                                    className: "icon",
                                    src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_zjt@3x.png",
                                  }),
                                  (0, I.tZ)(v.Text, {
                                    className: "city-name to-station",
                                    children: null == e ? void 0 : e.to,
                                  }),
                                ],
                              }),
                              (0, I.tZ)(v.View, {
                                className: "date",
                                children: null == e ? void 0 : e.dateDesc,
                              }),
                              (0, I.BX)(v.View, {
                                className: "btn",
                                children: [
                                  (0, I.BX)(v.Text, {
                                    className: "amount",
                                    children: [
                                      (0, I.tZ)(v.Text, {
                                        className: "unit",
                                        children: "¥",
                                      }),
                                      null == e ? void 0 : e.price,
                                      "起",
                                    ],
                                  }),
                                  (0, I.tZ)(v.Text, {
                                    className: "pre-operation",
                                    id: "AYAK",
                                    onClick: function () {
                                      return d(e);
                                    },
                                    children: "立即预订",
                                  }),
                                ],
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
          }),
          Ue = p.default.memo(function (e) {
            var t = e.isShow,
              i = void 0 !== t && t,
              a = e.couponList,
              n = void 0 === a ? [] : a,
              o = e.onClose,
              r = void 0 === o ? function () {} : o;
            return (0, I.tZ)(v.View, {
              className: "bus-route-activity-pop",
              children: (0, I.tZ)(S.ZtActivityPop, {
                show: i,
                onWrapClose: r,
                onClose: r,
                children: (0, I.BX)(v.View, {
                  className: "coupon-module",
                  children: [
                    (0, I.tZ)(v.View, {
                      className: "coupon-container",
                      children:
                        (null == n ? void 0 : n.length) > 0 &&
                        n.map(function (e, t) {
                          return (0,
                          I.BX)(v.View, { className: "coupon-item", children: [(0, I.tZ)(v.View, { className: "tag", children: null == e ? void 0 : e.smallTag }), (0, I.BX)(v.View, { className: "amount-date", children: [(0, I.BX)(v.Text, { className: "amount", children: [(0, I.tZ)(v.Text, { className: "unit", children: "¥" }), null == e ? void 0 : e.amount] }), (0, I.tZ)(v.Text, { className: "date", children: null == e ? void 0 : e.timeDesc })] }), (0, I.BX)(v.View, { className: "coupon-desc", children: [(0, I.tZ)(v.Text, { className: "tit", children: null == e ? void 0 : e.rightName }), (0, I.tZ)(v.Text, { className: "txt", children: null == e ? void 0 : e.rightDesc })] })] }, t);
                        }),
                    }),
                    (0, I.tZ)(v.View, {
                      className: "btn",
                      id: "AYAF",
                      onClick: r,
                      children: "去使用",
                    }),
                  ],
                }),
              }),
            });
          }),
          Ee = [
            {
              title: "汽车票",
              tab: "bus",
              button: "汽车票查询",
              dptCity: "成都",
              dptStation: "",
              arrCity: "西昌",
              arrStation: "",
            },
            {
              title: "景区专线",
              tab: "scenicArea",
              button: "景区专线查询",
              dptCity: "丽江",
              dptStation: "",
              arrCity: "大理",
              arrStation: "大理古城",
            },
            {
              title: "机场专线",
              tab: "airport",
              button: "机场专线查询",
              dptCity: "杭州",
              dptStation: "",
              arrCity: "杭州",
              arrStation: "萧山机场",
            },
            {
              title: "船票",
              tab: "ship",
              button: "查询",
              dptCity: "大连",
              dptStation: "",
              arrCity: "烟台",
              arrStation: "",
            },
          ],
          je = {
            home: y.default.isTieyou ? "10320660963" : "10320660959",
            bus: "10650059982",
            scenicArea: "10650059990",
            airport: "10650059998",
            ship: "10650060006",
          },
          Ge = "bus-index-student-modal",
          We = "Cashback1storder",
          Ke = "Student_auth_modal",
          qe = [We, Ke],
          Qe = "bus_free_order_notice",
          Je = [
            {
              title: "领券通知",
              tempId: "uoNfOeSZNla1OgSFS2wOjEnnJlkDsZfjiliQOaj8aaw",
            },
            {
              title: "优惠券到期提醒",
              tempId: "bZWCIDYNgNlv34-d1B8c9KH_xCBBBpyICzsDuZKPVWA",
            },
          ],
          $e =
            (0, C.h)(!0)(
              (fe = (function (e) {
                (0, d.Z)(i, e);
                var t = (0, u.Z)(i);
                function i(e) {
                  var a;
                  return (
                    (0, s.Z)(this, i),
                    (a = t.call(this, e)),
                    (0, h.Z)((0, l.Z)(a), "getLocateCity", function (e) {
                      return new Promise(function (t, i) {
                        var a = e.latitude ? e.latitude + "" : "",
                          n = e.longitude ? e.longitude + "" : "";
                        (0, k.T_)({ Latitude: a, Longitude: n, Language: "CN" })
                          .then(function (e) {
                            e
                              ? t(
                                  (Array.isArray(e.CityEntities) &&
                                    e.CityEntities[0] &&
                                    e.CityEntities[0].CityName) ||
                                    ""
                                )
                              : i("定位失败");
                          })
                          .catch(function () {
                            return i("定位失败");
                          });
                      });
                    }),
                    (a.state = {
                      singleModalCtrl: new Se.jb({
                        modalList: qe,
                        vimStateKey: "singleModalCtrl",
                        vim: (0, l.Z)(a),
                      }),
                      isTieyou: y.default.isTieyou,
                      busTab: "bus",
                      tabList: Ee,
                      query: { bus: {}, scenicArea: {}, airport: {}, ship: {} },
                      departDate: "",
                      depMonthDay: "",
                      depDayInfo: "",
                      showCityGuide: !1,
                      showSearchBtnGuide: !1,
                      showDateGuide: !1,
                      showGuideForToStation: !1,
                      showTabCouponNoticeInfo: !1,
                      studentBannerInfo: null,
                      studentModalInfo: null,
                      isShowStudentAuthModal: !1,
                      indexCouponInfo: null,
                      commonNoticeModal: null,
                      isBusCommonNoticeBoardHasShow: !1,
                      recommendData: null,
                      springCouponList: [],
                      isShowCouponDialog: !1,
                      fromSource: "",
                      isShowedRandomCouponModal: !1,
                      fromWechatPush: !1,
                      qWBannerInfo: "",
                      isShowCalendar: !1,
                      dateInfo: {},
                    }),
                    (a.subPageId = je.bus),
                    (a.$couponActivityModal = null),
                    (a.isLoadCouponModalData = !0),
                    (a.isNeedLoadUserLabelInfo = !0),
                    a
                  );
                }
                return (
                  (0, c.Z)(i, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var e = this,
                          t = Ee;
                        ("dt" === y.default.jetpack ||
                          y.default.isAlipay ||
                          y.default.isBaidu ||
                          y.default.isTT ||
                          "shadow_zhixing" == y.default.jetpack) &&
                          (t = t.filter(function (e) {
                            return "ship" !== e.tab;
                          }));
                        var i = this.props.onLoadOpts || {},
                          a = i.tab,
                          n = void 0 === a ? "" : a,
                          o = i.innerTab,
                          r = void 0 === o ? "" : o,
                          s = i.mFrom,
                          c = void 0 === s ? "" : s,
                          l = i.mStation,
                          d = void 0 === l ? "" : l,
                          u = i.mTo,
                          h = void 0 === u ? "" : u,
                          m = i.aStation,
                          p = void 0 === m ? "" : m,
                          f = i.departDate,
                          v = void 0 === f ? "" : f,
                          b = i.fromSource,
                          C = void 0 === b ? "" : b,
                          k =
                            "bus" == n &&
                            t.some(function (e) {
                              return e.tab === r;
                            })
                              ? r
                              : "bus",
                          Z = i.utmSource || i.utmsource || "";
                        Z &&
                          ("ship" === k
                            ? g().setStorageSync("SHIP_UTMSOURCE", {
                                source: Z,
                                timeStamp: new Date().getTime() / 1e3,
                              })
                            : (0, Se.HQ)(Z, { station: [d], city: c }));
                        var S = X()().format("YYYY-MM-DD");
                        v &&
                          X()(v) > X()(S) &&
                          (S = X()(v).format("YYYY-MM-DD"));
                        var N,
                          I = Ze.tT.get() || {},
                          T = {},
                          x = (0, J.Z)(Ee);
                        try {
                          for (x.s(); !(N = x.n()).done; ) {
                            var _ = N.value,
                              D = I[_.tab] || [];
                            T[_.tab] = {
                              dptCity: D.length > 0 ? D[0].dptCity : _.dptCity,
                              dptStation:
                                D.length > 0 ? D[0].dptStation : _.dptStation,
                              arrCity: D.length > 0 ? D[0].arrCity : _.arrCity,
                              arrStation:
                                D.length > 0 ? D[0].arrStation : _.arrStation,
                            };
                          }
                        } catch (e) {
                          x.e(e);
                        } finally {
                          x.f();
                        }
                        var B = T[k];
                        c &&
                          (B = {
                            dptCity: c,
                            dptStation: d,
                            arrCity: h,
                            arrStation: p,
                          }),
                          (T[k] = B),
                          (this.subPageId = je[k]),
                          this.setState(
                            {
                              busTab: k,
                              tabList: t,
                              query: T,
                              departDate: S,
                              depMonthDay: X()(S).format("M月D日"),
                              depDayInfo: w.Z.getWeekInfo(S),
                              history: I,
                              fromSource: C,
                              fromWechatPush: C === Qe,
                            },
                            function () {
                              var t = e.getHomeUtmSource();
                              e.sourceId = (0, Se.a3)(t);
                            }
                          ),
                          this.setShareData(T),
                          ("bus_order_detail" !== C && C !== Qe) ||
                            V.ZP.isLogin ||
                            ((this.isLoadCouponModalData = !1),
                            setTimeout(function () {
                              e.doLoginAction();
                            }, 500));
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (e) {
                        var t = this.props.tab;
                        "bus" === t &&
                          t !== e.tab &&
                          (this.doBusTraceInfo("tab", "tab"),
                          this.doBusTraceInfo(
                            "busEntrance",
                            "汽车宫格",
                            {},
                            je.home
                          ),
                          this.doBusNewTraceInfoV2({ triggerType: "load" }),
                          (this.state.showCityGuide ||
                            this.state.showSearchBtnGuide ||
                            this.state.showDateGuide) &&
                            g().hideTabBar(),
                          this.handleInitBusHomeData()),
                          "bus" !== t &&
                            t !== e.tab &&
                            "tab" === e.tab &&
                            g().showTabBar(),
                          "bus" !== t &&
                            t !== e.tab &&
                            "bus" === e.tab &&
                            this.doBusNewTraceInfoV2({ triggerType: "exit" });
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.doBusNewTraceInfoV2({ triggerType: "exit" });
                      },
                    },
                    {
                      key: "componentDidShow",
                      value: function () {
                        var e;
                        console.log("bus home show"),
                          "bus" ==
                            (null === (e = this.props) || void 0 === e
                              ? void 0
                              : e.tab) &&
                            (this.doBusTraceInfo("tab", "tab"),
                            this.handleInitBusHomeData());
                      },
                    },
                    {
                      key: "doLoginAction",
                      value: function () {
                        var e = this;
                        V.ZP.doLogin()
                          .then(
                            function () {
                              e.getCouponModalInfo();
                            },
                            function () {
                              e.getCouponModalInfo();
                            }
                          )
                          .catch(function () {
                            e.getCouponModalInfo();
                          });
                      },
                    },
                    {
                      key: "handleInitBusHomeData",
                      value: function () {
                        this.checkBusDiTuiActivity(),
                          this.getCouponInfo(),
                          this.getBusOrderList(),
                          this.getNewGuestGuideInfo(),
                          this.getBusIndexStudentBannerPromise(),
                          this.getSpringFestivalRecommend(),
                          this.getQWBannerInfo(),
                          this.isLoadCouponModalData &&
                            this.getCouponModalInfo();
                      },
                    },
                    {
                      key: "getCouponModalInfo",
                      value: function () {
                        var e,
                          t,
                          i,
                          a = this;
                        (this.isLoadCouponModalData = !0),
                          null !== (e = this.$couponActivityModal) &&
                          void 0 !== e &&
                          e.isShow()
                            ? null === (i = this.$couponActivityModal) ||
                              void 0 === i ||
                              i.handleRefreshData()
                            : null === (t = this.state.singleModalCtrl) ||
                              void 0 === t ||
                              t.initModal(function () {
                                var e;
                                null === (e = a.$couponActivityModal) ||
                                  void 0 === e ||
                                  e.handleInitData(),
                                  a.getBusIndexStudentAuthModalPromise();
                              });
                      },
                    },
                    {
                      key: "getBusIndexStudentAuthModalPromise",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              o,
                              r,
                              s,
                              c = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        !(i = g().getStorageSync(Ge)) ||
                                        X()().format("YYYY-MM-DD") !== i
                                      ) {
                                        e.next = 4;
                                        break;
                                      }
                                      return (
                                        null ===
                                          (a = this.state.singleModalCtrl) ||
                                          void 0 === a ||
                                          a.setModalVisibleStatus(Ke, !1),
                                        e.abrupt("return")
                                      );
                                    case 4:
                                      return (
                                        (e.prev = 4),
                                        (e.next = 7),
                                        (0, we.Dw)({ fromPage: "indexPopWin" })
                                      );
                                    case 7:
                                      if (
                                        ((o = e.sent),
                                        (r = o.data),
                                        (s = void 0 === r ? [] : r),
                                        1 != o.code)
                                      ) {
                                        e.next = 14;
                                        break;
                                      }
                                      return (
                                        this.setState(
                                          {
                                            studentModalInfo: s[0],
                                            isShowStudentAuthModal: !!s[0],
                                          },
                                          function () {
                                            var e;
                                            null ===
                                              (e = c.state.singleModalCtrl) ||
                                              void 0 === e ||
                                              e.setModalVisibleStatus(
                                                Ke,
                                                c.state.isShowStudentAuthModal
                                              );
                                          }
                                        ),
                                        e.abrupt("return")
                                      );
                                    case 14:
                                      e.next = 19;
                                      break;
                                    case 16:
                                      (e.prev = 16),
                                        (e.t0 = e.catch(4)),
                                        this.setState({
                                          studentModalInfo: null,
                                        });
                                    case 19:
                                      null ===
                                        (t = this.state.singleModalCtrl) ||
                                        void 0 === t ||
                                        t.setModalVisibleStatus(Ke, !1);
                                    case 20:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[4, 16]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getBusIndexStudentBannerPromise",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i, a;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        (0, we.Dw)({ fromPage: "indexBanner" })
                                      );
                                    case 3:
                                      (t = e.sent),
                                        (i = t.data),
                                        (a = void 0 === i ? [] : i),
                                        1 == t.code &&
                                          this.setState({
                                            studentBannerInfo:
                                              "dt" === y.default.jetpack
                                                ? a.filter(function (e) {
                                                    return (
                                                      "free1stOrder" !== e.title
                                                    );
                                                  })
                                                : a,
                                          }),
                                        (e.next = 13);
                                      break;
                                    case 10:
                                      (e.prev = 10),
                                        (e.t0 = e.catch(0)),
                                        this.setState({
                                          studentBannerInfo: null,
                                        });
                                    case 13:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[0, 10]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getNewGuestGuideInfo",
                      value: function () {
                        var e = this;
                        (0, Se.MX)({ utmSource: this.getHomeUtmSource() }).then(
                          function () {
                            var t =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0],
                              i = t && !(0, Se.Bq)(Se.t0.CITY_SELECT_IN_INDEX),
                              a =
                                t &&
                                !i &&
                                !(0, Se.Bq)(Se.t0.DATE_SELECT_IN_INDEX),
                              n =
                                t &&
                                !i &&
                                !a &&
                                !(0, Se.Bq)(Se.t0.SEARCH_BTN_IN_INDEX);
                            "bus" === e.props.tab && (i || n || a)
                              ? g().hideTabBar({
                                  success: function () {
                                    e.setState({
                                      showCityGuide: i,
                                      showSearchBtnGuide: n,
                                      showDateGuide: a,
                                    });
                                  },
                                })
                              : e.setState({
                                  showCityGuide: i,
                                  showSearchBtnGuide: n,
                                  showDateGuide: a,
                                });
                          }
                        );
                      },
                    },
                    {
                      key: "handleTabClick",
                      value: function (e) {
                        var t,
                          i,
                          a,
                          n = this,
                          o = this.state,
                          r = o.busTab,
                          s = o.query;
                        if (e !== r) {
                          (this.subPageId = je[e]),
                            this.doBusTraceInfo("tab", "tab");
                          var c = function () {
                            n.setState(
                              { busTab: e, showTabCouponNoticeInfo: !0 },
                              function () {
                                n.setShareData(s);
                              }
                            );
                          };
                          null !== (t = this.$couponActivityModal) &&
                          void 0 !== t &&
                          t.$couponModal
                            ? null === (i = this.$couponActivityModal) ||
                              void 0 === i ||
                              null === (a = i.$couponModal) ||
                              void 0 === a ||
                              a.handleHideModal(c)
                            : c();
                        }
                      },
                    },
                    {
                      key: "checkBusDiTuiActivity",
                      value: function () {
                        var e = this.getHomeUtmSource();
                        this.setState({
                          showDiTuiIcon:
                            e && -1 !== e.indexOf("zxxcx_ditui_yilabao"),
                        });
                      },
                    },
                    {
                      key: "chooseCity",
                      value: function () {
                        var e = this,
                          t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "from",
                          i = this.state,
                          a = i.query,
                          n = i.busTab,
                          o = "from" === t,
                          s = (0, r.Z)({}, a[n] || {});
                        if (
                          (this.doBusTraceInfo(
                            o ? "userFromIcon" : "userToIcon",
                            o ? "出发输入框" : "到达输入框"
                          ),
                          "ship" === n)
                        )
                          return this.navigateTo({
                            url: "/pages/ship/shipline/shipline",
                            callback: function (t) {
                              var i = t.from,
                                o = t.to;
                              (s.dptCity = i),
                                (s.arrCity = o),
                                (a[n] = s),
                                e.setState({ query: a }),
                                e.setShareData(a);
                            },
                          });
                        var c = o ? "dptCity" : "arrCity",
                          l = o ? "dptStation" : "arrStation",
                          d = {
                            fromPage: "home",
                            selectType: t,
                            tabType:
                              "bus" === n
                                ? ""
                                : "airport" === n
                                ? "airPort"
                                : n,
                            title: o ? "选择出发城市" : "选择到达城市",
                            selectedCity: s[c],
                            selectedStation: s[l],
                            fromCity: s.dptCity,
                          };
                        this.navigateTo({
                          url: "/pages/bus/citySelect/index?selectType=".concat(
                            t
                          ),
                          data: d,
                          callback: function (t) {
                            console.log(t);
                            var i = t.cityName,
                              o = void 0 === i ? "" : i,
                              r = t.stationName,
                              d = void 0 === r ? "" : r;
                            (s[c] = o),
                              (s[l] = d),
                              (a[n] = s),
                              e.setState({ query: a }),
                              e.setShareData(a);
                          },
                        });
                      },
                    },
                    {
                      key: "exchangeStation",
                      value: function () {
                        var e = this.state,
                          t = e.query,
                          i = e.busTab,
                          a = e.exchange,
                          n = t[i],
                          o = n.dptCity,
                          r = n.dptStation;
                        (n.dptCity = n.arrCity),
                          (n.dptStation = n.arrStation),
                          (n.arrCity = o),
                          (n.arrStation = r),
                          this.setState({ query: t, exchange: !a }),
                          this.setShareData(t);
                      },
                    },
                    {
                      key: "chooseDate",
                      value: function () {
                        var e = this.state.departDate,
                          t = X()().format("YYYY-MM-DD"),
                          i = X()()
                            .add(ke.J8 - 1, "day")
                            .format("YYYY-MM-DD");
                        this.doBusTraceInfo("useTimeIcon", "出行日期框"),
                          this.setState({
                            isShowCalendar: !0,
                            dateInfo: {
                              chooseDate: e,
                              beginDate: t,
                              endDate: i,
                            },
                          });
                      },
                    },
                    {
                      key: "searchSubmit",
                      value: function () {
                        var e = this.state,
                          t = e.busTab,
                          i = e.query,
                          a = e.departDate;
                        g().setStorageSync("BUS_NO_UPDATE", 0);
                        var n = i[t];
                        this.doBusTraceInfo("searchIcon", "查询按钮");
                        var o = "/pages/bus/list/list?date="
                            .concat(a, "&fromCity=")
                            .concat(n.dptCity, "&toCity=")
                            .concat(n.arrCity, "&sourceId=")
                            .concat(this.sourceId),
                          r = "";
                        switch (t) {
                          case "scenicArea":
                            if (!n.arrCity)
                              return (0, b.showToast)("请输入到达城市/景点～");
                            r = "".concat(o, "&tabType=").concat(t);
                            break;
                          case "airport":
                            if (!n.arrCity)
                              return (0, b.showToast)("请输入到达城市/机场～");
                            r = "".concat(o, "&tabType=").concat(t);
                            break;
                          case "ship":
                            r = "/pages/ship/list/list?mDate="
                              .concat(a, "&mFrom=")
                              .concat(n.dptCity, "&mTo=")
                              .concat(n.arrCity);
                            break;
                          default:
                            if (!n.dptCity)
                              return (0, b.showToast)("请输入出发城市/车站");
                            if (!n.arrCity)
                              return (0, b.showToast)("请输入到达城市/车站");
                            var s = this.getHomeUtmSource();
                            r = ""
                              .concat(o, "&fromStation=")
                              .concat(n.dptStation || "", "&toStation=")
                              .concat(n.arrStation || "", "&utmSource=")
                              .concat(s, "&sourceFromPrevPage=1");
                        }
                        console.log("bus list url: ", r),
                          this.setSearchHistory(t, n),
                          this.navigateTo({ url: r });
                      },
                    },
                    {
                      key: "setSearchHistory",
                      value: function (e, t) {
                        var i = this,
                          a = this.state.history,
                          n = void 0 === a ? {} : a,
                          o = n[e] || [],
                          r = o.findIndex(function (e) {
                            return (
                              e.dptCity === t.dptCity && e.arrCity === t.arrCity
                            );
                          });
                        r > -1 && o.splice(r, 1),
                          o.unshift(t),
                          (n[e] = o),
                          setTimeout(function () {
                            i.setState({ history: n }), Ze.tT.set(n);
                          }, 100);
                      },
                    },
                    {
                      key: "clearRecentSearch",
                      value: function () {
                        this.doBusTraceInfo(
                          "searchDelHistory",
                          "查询按钮下的“清除历史”按钮"
                        );
                        var e = this.state,
                          t = e.busTab,
                          i = e.history;
                        (i[t] = []),
                          this.setState({ history: i }),
                          Ze.tT.set(i);
                      },
                    },
                    {
                      key: "onClickRecentSearch",
                      value: function (e) {
                        this.doBusTraceInfo(
                          "searchHistory",
                          "查询按钮下的历史线路"
                        );
                        var t = this.state,
                          i = t.busTab,
                          a = t.query;
                        (a[i] = e),
                          this.setState({ query: a }),
                          this.setShareData(a);
                      },
                    },
                    {
                      key: "getCouponInfo",
                      value: function () {
                        var e = this;
                        (0, we.hz)().then(function (t) {
                          if (1 === t.code) {
                            var i = (t.data || {}).couponList,
                              a =
                                (void 0 === i ? [] : i).filter(function (e) {
                                  return 0 === e.couponState;
                                }).length || 0;
                            e.setState({ availBusCouponLen: a });
                          } else e.setState({ availBusCouponLen: 0 });
                        });
                      },
                    },
                    {
                      key: "getBusOrderList",
                      value: function () {
                        var e = this;
                        (0, we.iL)().then(function (t) {
                          var i = t || {},
                            a = i.code,
                            n = i.data;
                          if (1 === a) {
                            var o =
                              (n &&
                                n.filter(function (e) {
                                  return e.isToTravel;
                                }).length) ||
                              0;
                            e.setState({ onTravelOrderCount: o });
                          } else e.setState({ onTravelOrderCount: 0 });
                        });
                      },
                    },
                    {
                      key: "onClickBusCoupon",
                      value: function () {
                        var e = this;
                        V.ZP.isLogin
                          ? (this.doBusTraceInfo("myCouponIcon", "我的券包"),
                            this.navigateTo({
                              url: "/pages/usercenter/kaquan/kaquan?showType=bus",
                            }))
                          : V.ZP.doLogin().then(function () {
                              e.getCouponInfo(),
                                e.getBusOrderList(),
                                e.navigateTo({
                                  url: "/pages/usercenter/kaquan/kaquan?showType=bus",
                                });
                            });
                      },
                    },
                    {
                      key: "onClickBusOrder",
                      value: function () {
                        this.doBusTraceInfo("myOrderIcon", "查看订单"),
                          g().reLaunch({
                            url: "/pages/myctrip/list/list?orderType=bus",
                          });
                      },
                    },
                    {
                      key: "setShareData",
                      value: function (e) {
                        var t = this.state.busTab,
                          i = e[t],
                          a = i.dptCity,
                          n = i.dptStation,
                          o = i.arrCity,
                          r = i.arrStation,
                          s = n || a,
                          c = r || o;
                        this.props.onShareDataUpdate &&
                          this.props.onShareDataUpdate("bus", {
                            title: ""
                              .concat(s, "-")
                              .concat(c)
                              .concat("ship" === t ? "船票" : "汽车票"),
                            path: "/pages/home/index?tab=bus&innerTab="
                              .concat(t, "&mFrom=")
                              .concat(a, "&mTo=")
                              .concat(o, "&mStation=")
                              .concat(n, "&aStation")
                              .concat(r),
                          });
                      },
                    },
                    {
                      key: "onMask1Click",
                      value: function () {
                        var e = this;
                        this.state.showGuideForToStation
                          ? ((0, Se.EC)(Se.t0.CITY_SELECT_IN_INDEX),
                            this.setState({ showCityGuide: !1 }, function () {
                              e.setState(
                                {
                                  showSearchBtnGuide:
                                    (0, Se.Bq)(Se.t0.DATE_SELECT_IN_INDEX) &&
                                    !(0, Se.Bq)(Se.t0.SEARCH_BTN_IN_INDEX),
                                  showDateGuide: !(0, Se.Bq)(
                                    Se.t0.DATE_SELECT_IN_INDEX
                                  ),
                                },
                                function () {
                                  e.state.showSearchBtnGuide ||
                                    e.state.showDateGuide ||
                                    g().showTabBar();
                                }
                              );
                            }))
                          : this.setState({ showGuideForToStation: !0 });
                      },
                    },
                    {
                      key: "onMask2Click",
                      value: function () {
                        var e = this;
                        (0, Se.EC)(Se.t0.SEARCH_BTN_IN_INDEX),
                          this.setState(
                            { showSearchBtnGuide: !1 },
                            function () {
                              e.state.showSearchBtnGuide || g().showTabBar();
                            }
                          );
                      },
                    },
                    {
                      key: "onMask3Click",
                      value: function () {
                        var e = this;
                        (0, Se.EC)(Se.t0.DATE_SELECT_IN_INDEX),
                          this.setState(
                            {
                              showDateGuide: !1,
                              showSearchBtnGuide: !(0, Se.Bq)(
                                Se.t0.SEARCH_BTN_IN_INDEX
                              ),
                            },
                            function () {
                              e.state.showSearchBtnGuide || g().showTabBar();
                            }
                          );
                      },
                    },
                    {
                      key: "handleCloseGuide",
                      value: function () {
                        var e = this;
                        (0, Se.G8)("skip").finally(function () {
                          e.setState(
                            {
                              showCityGuide: !1,
                              showSearchBtnGuide: !1,
                              showDateGuide: !1,
                            },
                            function () {
                              g().showTabBar();
                            }
                          );
                        });
                      },
                    },
                    {
                      key: "onClickBusNotice",
                      value: function () {
                        var e,
                          t,
                          i = this.getTabCouponNotice();
                        null != i && i.isReceive
                          ? w.Z.commonNavigator(i.goUseUrl)
                          : null === (e = this.$couponActivityModal) ||
                            void 0 === e ||
                            null === (t = e.$couponModal) ||
                            void 0 === t ||
                            t.handleShowModal({
                              filterTab: this.state.busTab,
                              isCustomClick: !0,
                            });
                      },
                    },
                    {
                      key: "onCloseBusNoticeClick",
                      value: function (e) {
                        e.stopPropagation(),
                          this.setState({ showTabCouponNoticeInfo: !1 });
                      },
                    },
                    {
                      key: "doBusTraceInfo",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "",
                          t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : "",
                          i = arguments.length > 2 ? arguments[2] : void 0,
                          a = arguments.length > 3 ? arguments[3] : void 0;
                        this.ubtTrace(
                          "BUS_Bus_C_click",
                          (0, r.Z)(
                            {
                              pageId: a || this.subPageId,
                              type: y.default.jetpack || "zx",
                              typeSnd: e,
                              utmSource: this.getHomeUtmSource(),
                              comment: t,
                            },
                            i
                          )
                        );
                      },
                    },
                    {
                      key: "doBusNewTraceInfoV2",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              o,
                              s,
                              c,
                              l = arguments;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t =
                                          l.length > 0 && void 0 !== l[0]
                                            ? l[0]
                                            : {}),
                                        (i =
                                          l.length > 1 && void 0 !== l[1]
                                            ? l[1]
                                            : 0),
                                        (e.prev = 2),
                                        (e.next = 5),
                                        (0, Se.c$)(this.isNeedLoadUserLabelInfo)
                                      );
                                    case 5:
                                      (a = e.sent),
                                        (this.isNeedLoadUserLabelInfo = !1),
                                        (o = xe.Z.getUnionData()),
                                        (s = ""),
                                        (e.t0 = i),
                                        (e.next =
                                          0 === e.t0
                                            ? 12
                                            : 1 === e.t0
                                            ? 14
                                            : 2 === e.t0
                                            ? 16
                                            : 18);
                                      break;
                                    case 12:
                                      return (
                                        (s = "p_bus_z_10650059982"),
                                        e.abrupt("break", 19)
                                      );
                                    case 14:
                                      return (
                                        (s = "s_bus_z_10650059982"),
                                        e.abrupt("break", 19)
                                      );
                                    case 16:
                                      return (
                                        (s = "c_bus_z_10650059982"),
                                        e.abrupt("break", 19)
                                      );
                                    case 18:
                                      return e.abrupt("break", 19);
                                    case 19:
                                      (c = (0, r.Z)(
                                        (0, r.Z)(
                                          {
                                            utmSource:
                                              this.getHomeUtmSource() || "null",
                                            sourceId:
                                              this.sourceId || "Bus_Null_Null",
                                            pageId: "10650059982",
                                            client: (0, Se.y3)(),
                                            allianceId: o.aid || "null",
                                            allianceSid: o.sid || "null",
                                          },
                                          a
                                        ),
                                        t
                                      )),
                                        "c_bus_z_10650059982" == s &&
                                          (c.typeSndAttr = "null"),
                                        this.ubtTrace(s, c),
                                        (e.next = 27);
                                      break;
                                    case 24:
                                      (e.prev = 24),
                                        (e.t1 = e.catch(2)),
                                        console.log(e.t1);
                                    case 27:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[2, 24]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "doBusShowTraceInfo",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "",
                          t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : "",
                          i = arguments.length > 2 ? arguments[2] : void 0,
                          a = arguments.length > 3 ? arguments[3] : void 0;
                        this.ubtTrace(
                          "BUS_Bus_O_show",
                          (0, r.Z)(
                            {
                              pageId: a || this.subPageId,
                              type: y.default.jetpack || "zx",
                              typeSnd: e,
                              utmSource: this.getHomeUtmSource(),
                              comment: t,
                            },
                            i
                          )
                        );
                      },
                    },
                    {
                      key: "getHomeUtmSource",
                      value: function () {
                        var e = this.state,
                          t = e.query,
                          i = e.busTab;
                        return (0, Se.Ug)({ station: [t[i].dptStation] });
                      },
                    },
                    {
                      key: "onStudentAuthModalClose",
                      value: function () {
                        g().setStorageSync(Ge, X()().format("YYYY-MM-DD")),
                          this.setState({ isShowStudentAuthModal: !1 });
                      },
                    },
                    {
                      key: "onIndexCouponInfoLoad",
                      value: function (e) {
                        this.setState({
                          indexCouponInfo: e,
                          showTabCouponNoticeInfo: !0,
                        });
                      },
                    },
                    {
                      key: "getTabCouponNotice",
                      value: function () {
                        var e,
                          t,
                          i = this.state.busTab;
                        return null === (e = this.state.indexCouponInfo) ||
                          void 0 === e ||
                          null === (t = e.allProductlineCouponInfo) ||
                          void 0 === t
                          ? void 0
                          : t[Ie.L[i]];
                      },
                    },
                    {
                      key: "handleReceiveCouponSuccess",
                      value: function () {
                        this.getCouponInfo();
                      },
                    },
                    {
                      key: "onNoticeModalVisibleChange",
                      value: function (e) {
                        this.setState({ commonNoticeModal: e });
                      },
                    },
                    {
                      key: "onBusCommonNoticeBoardStatusChange",
                      value: function (e) {
                        this.setState({ isBusCommonNoticeBoardHasShow: e });
                      },
                    },
                    {
                      key: "getSpringFestivalRecommend",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i,
                              a = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t =
                                          g().getStorageSync(
                                            "ztrip_location_cache_wgs84"
                                          ) || {}),
                                        (e.next = 3),
                                        this.getLocateCity(t)
                                      );
                                    case 3:
                                      (i = e.sent),
                                        (0, we.WW)({ cityName: i })
                                          .then(function (e) {
                                            e &&
                                              1 === e.code &&
                                              a.setState({
                                                recommendData: e.data,
                                              });
                                          })
                                          .catch(function (e) {
                                            console.log(e);
                                          });
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
                      key: "getReceiveSpringRights",
                      value: function () {
                        var e = this;
                        (0, we.uo)()
                          .then(function (t) {
                            var i, a;
                            t &&
                              1 === t.code &&
                              (e.setState({
                                springCouponList:
                                  (null === (i = t.data) || void 0 === i
                                    ? void 0
                                    : i.rightList) || [],
                                isShowCouponDialog: !!(
                                  null !== (a = t.data) &&
                                  void 0 !== a &&
                                  a.rightList &&
                                  t.data.rightList.length > 0
                                ),
                              }),
                              e.getSpringFestivalRecommend());
                          })
                          .catch(function (e) {
                            console.log(e);
                          });
                        try {
                          this.doBusTraceInfo(
                            "homepage_sfestival_recommend_privilege_button_click",
                            "首页-春运推荐模块”免费领春运特权“点击"
                          );
                        } catch (e) {
                          console.log(e);
                        }
                      },
                    },
                    {
                      key: "closeSpringFestivalCouponDialog",
                      value: function () {
                        this.setState({ isShowCouponDialog: !1 });
                      },
                    },
                    {
                      key: "gotoBusList",
                      value: function (e) {
                        if (e) {
                          try {
                            this.doBusTraceInfo(
                              "homepage_sfestival_recommend_book_button_click",
                              "首页-春运推荐模块”预定“点击",
                              { product_line: e.businessType, backtype: e.tag }
                            );
                          } catch (e) {
                            console.log(e);
                          }
                          var t = "/pages/bus/list/list?date="
                            .concat(null == e ? void 0 : e.date, "&fromCity=")
                            .concat(null == e ? void 0 : e.from, "&toCity=")
                            .concat(
                              null == e ? void 0 : e.to,
                              "&sourceFromPrevPage=1&sourceId="
                            )
                            .concat(this.sourceId);
                          this.navigateTo({ url: t });
                        }
                      },
                    },
                    {
                      key: "onFree1stOrderBannerClick",
                      value: function () {
                        var e, t;
                        null === (e = this.$couponActivityModal) ||
                          void 0 === e ||
                          null === (t = e.$cashBack1stOrder) ||
                          void 0 === t ||
                          t.handleShowModal();
                      },
                    },
                    {
                      key: "onCouponActivityModuleAutoVisibleChange",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = e.isAutoShow,
                          i = e.isShowedRandomCouponModal,
                          a = void 0 !== i && i;
                        this.state.singleModalCtrl.setModalVisibleStatus(We, t),
                          a && this.setState({ isShowedRandomCouponModal: a }),
                          this.state.fromWechatPush &&
                            this.setState({ fromWechatPush: !1 });
                      },
                    },
                    {
                      key: "handleSubscrebeModal",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              o,
                              r,
                              s,
                              c,
                              l,
                              d = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if ("zx" == y.default.jetpack) {
                                        e.next = 3;
                                        break;
                                      }
                                      return (
                                        console.log(
                                          "首页领券和优惠券到期消息订阅只支持智行"
                                        ),
                                        e.abrupt("return")
                                      );
                                    case 3:
                                      return (
                                        (e.prev = 3),
                                        (t = Je),
                                        (e.next = 7),
                                        w.Z.getSubscribe(
                                          t.map(function (e) {
                                            return e.tempId;
                                          })
                                        )
                                      );
                                    case 7:
                                      (i = e.sent),
                                        (a = i.mainSwitch),
                                        (o = i.unKnownList),
                                        (r = void 0 === o ? [] : o),
                                        (s = i.rejectList),
                                        (c = void 0 === s ? [] : s),
                                        console.log(
                                          "是否授权小程序消息订阅",
                                          a
                                        ),
                                        console.log("unKnownList", r),
                                        console.log("rejectList", c),
                                        (l = t
                                          .filter(function (e) {
                                            return r.includes(e.tempId);
                                          })
                                          .map(function (e) {
                                            return e.tempId;
                                          })),
                                        a &&
                                          l.length &&
                                          w.Z.doSubscribe(
                                            l,
                                            "".concat(
                                              y.default.jetpack,
                                              "_MiniProgram_BUS_HOME"
                                            )
                                          )
                                            .then(
                                              function (e) {
                                                (0, b.showToast)("订阅成功~"),
                                                  console.log("订阅成功：", e),
                                                  d.doBusNewTraceInfoV2(
                                                    {
                                                      bizKey:
                                                        "bus_home_qef_attention_actionbar_click",
                                                      comment:
                                                        "【领券通知】&【优惠券到期提醒】浮层点击",
                                                      clickType:
                                                        ke.uh.confirmClick,
                                                    },
                                                    2
                                                  );
                                              },
                                              function (e) {
                                                console.log("取消订阅：", e),
                                                  d.doBusNewTraceInfoV2(
                                                    {
                                                      bizKey:
                                                        "bus_home_qef_attention_actionbar_click",
                                                      comment:
                                                        "【领券通知】&【优惠券到期提醒】浮层点击",
                                                      clickType:
                                                        ke.uh.cancelClick,
                                                    },
                                                    2
                                                  );
                                              }
                                            )
                                            .finally(function () {
                                              console.log("订阅弹窗展示"),
                                                d.doBusNewTraceInfoV2(
                                                  {
                                                    exposureType: "actionbar",
                                                    bizKey:
                                                      "bus_home_qef_attention_actionbar_show",
                                                    comment:
                                                      "【领券通知】&【优惠券到期提醒】浮层曝光",
                                                  },
                                                  1
                                                );
                                            }),
                                        (e.next = 23);
                                      break;
                                    case 20:
                                      (e.prev = 20),
                                        (e.t0 = e.catch(3)),
                                        console.log("订阅消息失败：", e.t0);
                                    case 23:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[3, 20]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getQWBannerInfo",
                      value: function () {
                        var e = this,
                          t = {
                            orderState: 0,
                            fromPage: "index",
                            pageKey: "1111",
                            source: ke.Rb.DT_BENEFITS,
                          };
                        (0, we.W9)(t)
                          .then(function (t) {
                            1 === t.code &&
                              (e.setState({ qWBannerInfo: t.data }),
                              e.doBusNewTraceInfoV2(
                                {
                                  exposureType: "actionbar",
                                  bizKey: "home_chatIcon",
                                  comment: "首页【进群领红包】按钮",
                                },
                                1
                              ));
                          })
                          .catch(function () {
                            e.setState({ qWBannerInfo: "" });
                          });
                      },
                    },
                    {
                      key: "onQWBannerClick",
                      value: function () {
                        this.doBusTraceInfo(
                          "home_chatIcon",
                          "首页【进群领红包】按钮\t"
                        );
                        var e = this.state.qWBannerInfo;
                        null != e && e.url && w.Z.commonNavigator(e.url);
                      },
                    },
                    {
                      key: "changeDate",
                      value: function (e) {
                        e &&
                          this.setState({
                            isShowCalendar: !1,
                            departDate: e,
                            depMonthDay: X()(e).format("M月D日"),
                            depDayInfo: w.Z.getWeekInfo(e),
                          });
                      },
                    },
                    {
                      key: "closeCalendarDrawer",
                      value: function () {
                        this.setState({ isShowCalendar: !1 });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          t = this.props.tab,
                          i = this.state,
                          a = i.isTieyou,
                          n = i.busTab,
                          o = i.tabList,
                          s = i.query,
                          c = void 0 === s ? {} : s,
                          l = i.depMonthDay,
                          d = i.depDayInfo,
                          u = i.showDiTuiIcon,
                          h = i.history,
                          m = void 0 === h ? {} : h,
                          p = i.availBusCouponLen,
                          f = i.onTravelOrderCount,
                          g = i.showCityGuide,
                          b = i.showSearchBtnGuide,
                          C = i.showDateGuide,
                          k = i.showTabCouponNoticeInfo,
                          Z = i.studentBannerInfo,
                          S = i.isShowStudentAuthModal,
                          N = i.studentModalInfo,
                          T = i.commonNoticeModal,
                          x = i.isBusCommonNoticeBoardHasShow,
                          _ = i.departDate,
                          D = i.recommendData,
                          B = i.springCouponList,
                          V = i.isShowCouponDialog,
                          P = i.singleModalCtrl,
                          M = i.fromSource,
                          A = i.isShowedRandomCouponModal,
                          L = i.fromWechatPush,
                          H = i.qWBannerInfo,
                          X = i.isShowCalendar,
                          O = i.dateInfo,
                          F =
                            (c[n].dptStation || c[n].dptCity || "").length > 6,
                          Y =
                            (c[n].arrStation || c[n].arrCity || "").length > 6,
                          R = o.find(function (e) {
                            return e.tab === n;
                          }).button,
                          z =
                            o.findIndex(function (e) {
                              return n === e.tab;
                            }) || 0,
                          U = !x && this.getTabCouponNotice(),
                          E = "bus" === n || "ship" === n,
                          j = (U && k) || x,
                          G = S && P.itCanVisible(Ke);
                        return (0, I.BX)(v.View, {
                          className: w.Z.mergeInnerGrayStyle(),
                          style: "display: ".concat(
                            "bus" !== t ? "none" : "block"
                          ),
                          children: [
                            (0, I.BX)(v.View, {
                              className: w.Z.mergeGrayStyle(),
                              children: [
                                (0, I.BX)(v.View, {
                                  className: "selform bus-ship-selform ".concat(
                                    g || C ? "guiding" : ""
                                  ),
                                  style: "border-bottom-width: 0;",
                                  children: [
                                    (0, I.tZ)(v.Block, {
                                      children:
                                        !y.default.isH5Hzbm &&
                                        (0, I.BX)(v.View, {
                                          className:
                                            "home-second-tab-bar " +
                                            (a ? "ty" : "zx") +
                                            (j ? " no-shadow" : ""),
                                          children: [
                                            o.map(function (t, i) {
                                              return (0,
                                              I.BX)(v.View, { className: "second-bar-item ".concat(t.tab === n ? "current" : "", "}"), id: "AYAL", onClick: e.handleTabClick.bind(e, t.tab), children: [t.title, "ship" === t.tab && (0, I.tZ)(v.Text, { className: "goland", children: "海岛游" })] }, i);
                                            }),
                                            (0, I.tZ)(v.View, {
                                              className: "active-scrollbar",
                                              style: {
                                                width: "".concat(
                                                  100 / o.length,
                                                  "%"
                                                ),
                                                transform: "translateX(".concat(
                                                  100 * z,
                                                  "%)"
                                                ),
                                                transition: "all .5s ease",
                                              },
                                            }),
                                          ],
                                        }),
                                    }),
                                    (0, I.BX)(v.View, {
                                      className: "form-item-container ".concat(
                                        j ? "pd-box" : ""
                                      ),
                                      children: [
                                        k &&
                                          !(null == U || !U.couponTips) &&
                                          (0, I.BX)(v.View, {
                                            className: "bus-notice",
                                            id: "AYAM",
                                            onClick:
                                              this.onClickBusNotice.bind(this),
                                            children: [
                                              (0, I.tZ)(v.Image, {
                                                className: "bus-notice-icon",
                                                src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/yhqxtb@3x.png",
                                                mode: "aspectFit",
                                              }),
                                              (0, I.tZ)(v.View, {
                                                className: "txt",
                                                children: U.couponTips,
                                              }),
                                              (0, I.tZ)(v.Text, {
                                                className:
                                                  "ifont-closed iconfont",
                                                id: "AYAN",
                                                onClick:
                                                  this.onCloseBusNoticeClick.bind(
                                                    this
                                                  ),
                                              }),
                                            ],
                                          }),
                                        c[n].dptCity &&
                                          c[n].arrCity &&
                                          (0, I.tZ)(Ne.Z, {
                                            isFromIndex: !0,
                                            onNoticeModalVisibleChange:
                                              this.onNoticeModalVisibleChange,
                                            useOuterModal: !0,
                                            onChange:
                                              this
                                                .onBusCommonNoticeBoardStatusChange,
                                            refreshNoticeParams: {
                                              fromCity: c[n].dptCity,
                                              toCity: c[n].arrCity,
                                              fromStation: c[n].dptStation,
                                              toStation: c[n].arrStation,
                                              fromTime: _,
                                              productType:
                                                "scenicArea" === n ||
                                                "airport" === n
                                                  ? "point"
                                                  : n,
                                            },
                                          }),
                                        (0, I.BX)(v.View, {
                                          className: "item station",
                                          children: [
                                            (0, I.tZ)(v.View, {
                                              className:
                                                "cell from bus-espliss "
                                                  .concat(
                                                    F
                                                      ? "mini-station-text"
                                                      : "",
                                                    " "
                                                  )
                                                  .concat(
                                                    E ? "no-top-cell" : ""
                                                  ),
                                              id: "AYAO",
                                              onClick: this.chooseCity.bind(
                                                this,
                                                "from"
                                              ),
                                              children: (0, I.BX)(v.View, {
                                                className: "station-txt",
                                                children: [
                                                  ("scenicArea" === n ||
                                                    "airport" === n) &&
                                                    (0, I.tZ)(v.Text, {
                                                      className: "bus-remark",
                                                      children:
                                                        "scenicArea" === n
                                                          ? "出发城市/景点"
                                                          : "出发城市/机场",
                                                    }),
                                                  c[n].dptStation ||
                                                    c[n].dptCity,
                                                ],
                                              }),
                                            }),
                                            (0, I.tZ)(v.View, {
                                              className: "cell to bus-espliss "
                                                .concat(
                                                  Y ? "mini-station-text" : "",
                                                  " "
                                                )
                                                .concat(E ? "no-top-cell" : ""),
                                              id: "AYAP",
                                              onClick: this.chooseCity.bind(
                                                this,
                                                "to"
                                              ),
                                              children: (0, I.BX)(v.View, {
                                                className: "station-txt",
                                                children: [
                                                  ("scenicArea" === n ||
                                                    "airport" === n) &&
                                                    (0, I.tZ)(v.Text, {
                                                      className: "bus-remark",
                                                      children:
                                                        "scenicArea" === n
                                                          ? "到达城市/景点"
                                                          : "到达城市/机场",
                                                    }),
                                                  c[n].arrStation ||
                                                    c[n].arrCity ||
                                                    "请输入目的地",
                                                ],
                                              }),
                                            }),
                                            (0, I.tZ)(v.View, {
                                              className: "switch",
                                              id: "AYAQ",
                                              onClick:
                                                this.exchangeStation.bind(this),
                                              children: (0, I.tZ)(v.Image, {
                                                src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/icon_jh@3x.webp",
                                                className: "switch-icon",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, I.tZ)(v.View, {
                                          className: "item time",
                                          id: "AYAR",
                                          onClick: this.chooseDate.bind(this),
                                          children: (0, I.BX)(v.View, {
                                            className: "time-wrap",
                                            children: [
                                              (0, I.tZ)(v.Text, {
                                                className: "day-txt",
                                                children: l,
                                              }),
                                              (0, I.tZ)(v.Text, {
                                                className: "day-desc",
                                                children: d,
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, I.tZ)(v.Form, {
                                      reportSubmit: "true",
                                      onSubmit: this.searchSubmit.bind(this),
                                      children: (0, I.BX)(v.View, {
                                        className: "bus-form-btn ".concat(
                                          b ? "guiding" : ""
                                        ),
                                        id: "AYAS",
                                        onClick: this.noop,
                                        "data-ubt-key": "xcx_bus_search",
                                        children: [
                                          (0, I.tZ)(v.Button, {
                                            formType: "submit",
                                            className:
                                              "btn-sel " + (a ? "ty" : "zx"),
                                            children: R,
                                          }),
                                          "bus" === n &&
                                            u &&
                                            (0, I.tZ)(v.View, {
                                              className: "ditui-icon",
                                            }),
                                          ("scenicArea" === n ||
                                            "airport" === n) &&
                                            m[n] &&
                                            m[n].length > 0 &&
                                            (0, I.BX)(v.View, {
                                              className: "home-history-box",
                                              children: [
                                                (0, I.tZ)(v.ScrollView, {
                                                  className:
                                                    "sel-history bus-history",
                                                  scrollX: !0,
                                                  children: (0, I.tZ)(v.View, {
                                                    className: "txt",
                                                    children: m[n].map(
                                                      function (t, i) {
                                                        return (0, I.tZ)(
                                                          v.Text,
                                                          {
                                                            id: "AYAT",
                                                            onClick:
                                                              e.onClickRecentSearch.bind(
                                                                e,
                                                                t
                                                              ),
                                                            children:
                                                              (t.dptStation ||
                                                                t.dptCity) +
                                                              "-" +
                                                              (t.arrStation ||
                                                                t.arrCity),
                                                          },
                                                          i
                                                        );
                                                      }
                                                    ),
                                                  }),
                                                }),
                                                (0, I.tZ)(v.Text, {
                                                  className: "clear",
                                                  id: "AYAU",
                                                  onClick:
                                                    this.clearRecentSearch.bind(
                                                      this
                                                    ),
                                                  children: "清除",
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, I.tZ)(v.Block, {
                                  children:
                                    !y.default.isH5Hzbm &&
                                    (0, I.BX)(v.View, {
                                      className: "info-recommend",
                                      children: [
                                        (0, I.BX)(v.View, {
                                          className: "recom-coupon",
                                          id: "AYAV",
                                          onClick:
                                            this.onClickBusCoupon.bind(this),
                                          children: [
                                            (0, I.tZ)(v.Image, {
                                              className: "img",
                                              src: a
                                                ? "https://images3.c-ctrip.com/train/wechat/bus/indexcoopn-ty.png"
                                                : "https://images3.c-ctrip.com/train/wechat/bus/indexcoupon.png",
                                            }),
                                            (0, I.BX)(v.View, {
                                              className: "rig",
                                              children: [
                                                (0, I.tZ)(v.View, {
                                                  className: "tit",
                                                  children: "我的券包",
                                                }),
                                                (0, I.tZ)(v.View, {
                                                  className: "desc",
                                                  children: "全网低价",
                                                }),
                                                p > 0
                                                  ? (0, I.BX)(v.View, {
                                                      className: "tag",
                                                      children: [p, "张未使用"],
                                                    })
                                                  : null,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, I.BX)(v.View, {
                                          className: "recom-order",
                                          id: "AYAW",
                                          onClick:
                                            this.onClickBusOrder.bind(this),
                                          children: [
                                            (0, I.tZ)(v.Image, {
                                              className: "img",
                                              src: a
                                                ? "https://images3.c-ctrip.com/train/wechat/bus/indexorder-ty.png"
                                                : "https://images3.c-ctrip.com/train/wechat/bus/indexorder.png",
                                            }),
                                            (0, I.BX)(v.View, {
                                              className: "rig",
                                              children: [
                                                (0, I.tZ)(v.View, {
                                                  className: "tit",
                                                  children: "查看订单",
                                                }),
                                                (0, I.tZ)(v.View, {
                                                  className: "desc",
                                                  children: "出行信息全掌握",
                                                }),
                                                f > 0
                                                  ? (0, I.BX)(v.View, {
                                                      className: "tag",
                                                      children: [f, "班待出行"],
                                                    })
                                                  : null,
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                }),
                                D &&
                                  D.recommendLine &&
                                  D.recommendLine.length > 0 &&
                                  (0, I.tZ)(ze, {
                                    subTitle: D.tag || "",
                                    couponAmount: D.price,
                                    routeList: D.recommendLine,
                                    onClickCoupon: this.getReceiveSpringRights,
                                    gotoBusList: this.gotoBusList,
                                    ubtTrace:
                                      this.doBusShowTraceInfo.bind(this),
                                  }),
                                y.default.isWechat &&
                                  "bus" === t &&
                                  (0, I.tZ)(Te.Z, {
                                    bannerInfo: H,
                                    margin: "margin: 10px 8px 0;",
                                    onBannerClick:
                                      this.onQWBannerClick.bind(this),
                                  }),
                                y.default.isWechat &&
                                  (0, I.tZ)(Be, {
                                    list: Z || [],
                                    onFree1stOrderClick:
                                      this.onFree1stOrderBannerClick.bind(this),
                                    utmSource: this.getHomeUtmSource(),
                                    doBusTraceInfo:
                                      this.doBusNewTraceInfoV2.bind(this),
                                  }),
                              ],
                            }),
                            !y.default.isH5Hzbm &&
                              (0, I.BX)(v.Block, {
                                children: [
                                  (0, I.tZ)(v.View, {
                                    className: w.Z.mergeGrayStyle(),
                                    children:
                                      ("dt" !== y.default.jetpack ||
                                        y.default.isAlipay) &&
                                      (0, I.tZ)(Ae, {}),
                                  }),
                                  (0, I.tZ)(De, {
                                    isShow: G,
                                    onClose:
                                      this.onStudentAuthModalClose.bind(this),
                                    authInfo: N,
                                  }),
                                  (0, I.tZ)(Ne.M, (0, r.Z)({}, T)),
                                  V &&
                                    (0, I.tZ)(Ue, {
                                      isShow: V,
                                      couponList: B,
                                      onClose:
                                        this.closeSpringFestivalCouponDialog.bind(
                                          this
                                        ),
                                    }),
                                  !G &&
                                    (0, I.tZ)(Re, {
                                      ref: function (t) {
                                        e.$couponActivityModal = t;
                                      },
                                      fromSource: M,
                                      fromCity: c[n].dptCity,
                                      fromStation: c[n].dptStation,
                                      fromWechatPush: L,
                                      isShowedRandomCouponModal: A,
                                      onCouponInfoload:
                                        this.onIndexCouponInfoLoad.bind(this),
                                      handleReceiveCouponSuccess:
                                        this.handleReceiveCouponSuccess.bind(
                                          this
                                        ),
                                      doBusTraceInfo:
                                        this.doBusNewTraceInfoV2.bind(this),
                                      enableAutoShow:
                                        null == P ? void 0 : P.itCanVisible(We),
                                      onAutoVisibleChange:
                                        this.onCouponActivityModuleAutoVisibleChange.bind(
                                          this
                                        ),
                                      utmSource: this.getHomeUtmSource(),
                                      handleSubscrebeModal:
                                        this.handleSubscrebeModal.bind(this),
                                      tab: n,
                                      ubtTrace: this.ubtTrace,
                                      pageId: this.subPageId,
                                    }),
                                  (0, I.tZ)(_e.Z, {
                                    visible: X,
                                    title: "选择出发日期",
                                    maxHeight: "80%",
                                    beginDate: O.beginDate,
                                    endDate: O.endDate,
                                    selectedDate: O.chooseDate,
                                    onConfirm: this.changeDate,
                                    onClose: this.closeCalendarDrawer,
                                  }),
                                ],
                              }),
                          ],
                        });
                      },
                    },
                  ]),
                  i
                );
              })(p.default.Component))
            ) || fe,
          et = i(25391),
          tt = i(38911),
          it = i(10741),
          at = i(17377),
          nt = i(91377),
          ot = i(45307),
          rt = i(41341),
          st = i(49984),
          ct = p.default.memo(function (e) {
            var t = e.bannerList,
              i = void 0 === t ? [] : t,
              a = e.customizeStyle,
              n = void 0 === a ? {} : a,
              o = y.default.isTieyou,
              r = function () {
                return (0, I.tZ)(I.HY, {
                  children: i.map(function (e, t) {
                    return (0,
                    I.BX)(v.View, { className: "banner-box item", id: "AAEh", onClick: e.clickFunc, children: [(0, I.BX)(v.View, { className: "title-container flex-align-items-center", children: [(0, I.tZ)(S.ZtRichText, { className: "title", nodes: e.title, space: "nbsp" }), (0, I.tZ)(v.View, { className: "ifont-arr iconfont ".concat(o ? "ty" : "zx") })] }), (0, I.tZ)(S.ZtRichText, { className: "sub-title", nodes: e.subTitle, space: "nbsp" }), (0, I.tZ)(v.Image, { src: e.icon, className: "icon" })] }, t);
                  }),
                });
              };
            return (0,
            I.BX)(v.View, { className: "subscribe-box", children: [1 === i.length && (0, I.BX)(v.View, { className: "banner-box single-banner-box flex-align-items-center", style: n.singleBannerStyle || {}, children: [(0, I.tZ)(v.Image, { src: i[0].icon, className: "icon" }), (0, I.BX)(v.View, { className: "tit-cont flex flex-column flex-1", children: [(0, I.tZ)(S.ZtRichText, { className: "title", nodes: i[0].title, space: "nbsp" }), (0, I.tZ)(S.ZtRichText, { className: "sub-title", nodes: i[0].subTitle, space: "nbsp" })] }), (0, I.tZ)(v.View, { className: "btn", style: n.btnStyle || {}, id: "AAEi", onClick: i[0].clickFunc, children: i[0].buttonTxt })] }), 2 === i.length && (0, I.tZ)(v.View, { className: "two-banner-box flex-align-items-center", children: r() }), i.length >= 3 && (0, I.tZ)(v.ScrollView, { className: "subscribe-box-scroll-view", scrollX: "true", children: (0, I.tZ)(v.View, { className: "more-two-banner-box", children: r() }) })] });
          }),
          lt = i(96156),
          dt = i(41716),
          ut = "HOME_MEMBER_LOSE_USER",
          ht = "HOME_COMPANY_WECHAT_POP",
          mt = "HOME_INVITE_MEMBER_POP",
          pt = "HOME_ORDER_CARD_SUBSCRIBE",
          ft = "HOME_UPGRADE_TICKET",
          gt = "HOME_STUDENT_CER_BANNER",
          vt = function (e) {
            var t = e.showNotice,
              i = e.notice,
              a = e.hideNoticeBar;
            return (0, I.BX)(v.View, {
              className: "notice",
              children: [
                (0, I.tZ)(v.Image, {
                  className: "icon",
                  src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/icon_tz@3x.webp",
                }),
                (0, I.tZ)(v.Text, {
                  className: "txt",
                  id: "AYCa",
                  onClick: t,
                  children: i.Title,
                }),
                (0, I.tZ)(v.Image, {
                  src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/icon_gd@3x.webp",
                  className: "arr",
                  id: "AYCb",
                  onClick: a,
                }),
              ],
            });
          },
          yt = function (e) {
            var t = e.departStationName,
              i = e.exchange,
              a = e.exchangeStation,
              n = e.arriveStationName,
              o = e.chooseStation;
            return (0, I.BX)(v.View, {
              className: "item station",
              children: [
                (0, I.tZ)(v.View, {
                  id: "AYCu",
                  className:
                    "cell from " +
                    (t.length > 5 ? "small" : "") +
                    " " +
                    (i ? "exchange" : ""),
                  "data-type": "d",
                  onClick: o,
                  children: (0, I.tZ)(v.View, {
                    className: "station-txt",
                    children: t,
                  }),
                }),
                (0, I.tZ)(v.View, {
                  className: "switch",
                  id: "AYCc",
                  onClick: a,
                  style: "transform: " + (i ? "rotate(360deg)" : ""),
                  children: (0, I.tZ)(v.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/icon_jh@3x.webp",
                    className: "switch-icon",
                  }),
                }),
                (0, I.tZ)(v.View, {
                  id: "AYCv",
                  className:
                    "cell to " +
                    (n.length > 5 ? "small" : "") +
                    " " +
                    (i ? "exchange" : ""),
                  "data-type": "a",
                  onClick: o,
                  children: (0, I.tZ)(v.View, {
                    className: "station-txt",
                    children: n,
                  }),
                }),
              ],
            });
          },
          bt = function (e) {
            var t = e.chooseDate,
              i = e.monthDay,
              a = e.dayInfo,
              n = e.switchStu,
              o = e.isStu,
              r = e.switchChange,
              s = e.isGaotieOnly;
            return (0, I.BX)(v.View, {
              className: "time item",
              children: [
                (0, I.BX)(v.View, {
                  className: "time-wrap",
                  id: "AYCd",
                  onClick: t,
                  children: [
                    (0, I.tZ)(v.Text, { className: "day-txt", children: i }),
                    (0, I.tZ)(v.Text, { className: "day-desc", children: a }),
                  ],
                }),
                (0, I.BX)(v.View, {
                  className: "home-type-wrap",
                  children: [
                    (0, I.BX)(v.View, {
                      className: "home-type-wrap",
                      id: "AYCe",
                      onClick: n,
                      children: [
                        (0, I.tZ)(v.Text, {
                          className: "type-txt",
                          children: "学生票",
                        }),
                        (0, I.tZ)(v.Text, {
                          className:
                            (o ? "ifont2-checkboxed" : "ifont2-checkbox") +
                            " iconfont2 ",
                        }),
                      ],
                    }),
                    (0, I.BX)(v.View, {
                      className: "home-type-wrap gt",
                      id: "AYCf",
                      onClick: r,
                      children: [
                        (0, I.tZ)(v.Text, {
                          className: "type-txt",
                          children: "高铁动车",
                        }),
                        (0, I.tZ)(v.Text, {
                          className:
                            (s ? "ifont2-checkboxed" : "ifont2-checkbox") +
                            " iconfont2",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          Ct = function (e) {
            var t = e.search,
              i = e.newCouponData,
              a = e.homeCashRightsTag,
              n = "";
            return (
              a && (n = a),
              null != i &&
                i.isReceive &&
                null != i &&
                i.context &&
                (n = i.context),
              (0, I.BX)(v.View, {
                "data-ubt-key": "xcx_train_search",
                className: "train-sel-btnbox",
                children: [
                  (0, I.tZ)(v.Button, {
                    className: "btn-sel " + (y.default.isTieyou ? "ty" : "zx"),
                    id: "AYCg",
                    onClick: t,
                    children: "火车票查询",
                  }),
                  !!n &&
                    (0, I.BX)(v.View, {
                      className: "has-tnu-coupon",
                      children: [
                        (0, I.tZ)(v.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/jbb@3x.png",
                          className: "c-icon",
                        }),
                        (0, I.tZ)(v.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/p1@3x.png",
                          className: "img-left",
                        }),
                        (0, I.tZ)(v.View, {
                          className: "img",
                          children: (0, I.tZ)(v.View, {
                            className: "c-txt",
                            children: n,
                          }),
                        }),
                        (0, I.tZ)(v.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/p3@3x.png",
                          className: "img-right",
                        }),
                      ],
                    }),
                ],
              })
            );
          },
          wt = function (e) {
            var t = e.recentSearchList,
              i = e.isSmartSearch,
              a = e.clearRecentSearch,
              n = e.onClickRecentSearch;
            return (0, I.BX)(v.View, {
              className: "home-history-box",
              children: [
                (0, I.tZ)(v.ScrollView, {
                  className: "sel-history",
                  scrollX: "true",
                  children: (0, I.tZ)(v.View, {
                    children: t.map(function (e, t) {
                      return i
                        ? (0, I.tZ)(
                            v.View,
                            {
                              className: "txt",
                              "data-item": e,
                              id: "AYCh",
                              onClick: function () {
                                return n(e);
                              },
                              children:
                                e.departInfo.name + "-" + e.arriveInfo.name,
                            },
                            t
                          )
                        : (0, I.tZ)(
                            v.View,
                            {
                              className: "txt",
                              id: "AYCi",
                              onClick: function () {
                                return n(e);
                              },
                              children: e[0] + "-" + e[1],
                            },
                            t
                          );
                    }),
                  }),
                }),
                (0, I.tZ)(v.View, {
                  className: "clear",
                  id: "AYCj",
                  onClick: a,
                  children: "清除",
                }),
              ],
            });
          },
          kt = p.default.memo(function (e) {
            var t = e.notice,
              i = e.hideNoticeBar,
              a = e.showNotice,
              n = e.departStationName,
              o = e.arriveStationName,
              r = e.exchange,
              s = e.exchangeStation,
              c = e.monthDay,
              l = e.dayInfo,
              d = e.isStu,
              u = e.chooseDate,
              h = e.isGaotieOnly,
              m = e.switchStu,
              p = e.switchChange,
              f = e.newCouponData,
              g = e.showNewCoupon,
              y = e.search,
              b = e.chooseStation,
              C = e.recentSearchList,
              w = e.isSmartSearch,
              k = e.clearRecentSearch,
              Z = e.onClickRecentSearch,
              S = e.homeCashRightsTag;
            return (0,
            I.BX)(v.View, { className: "selform train-selform", children: [!!t && (0, I.tZ)(vt, { showNotice: a, hideNoticeBar: i, notice: t }), (0, I.tZ)(yt, { departStationName: n, exchange: r, exchangeStation: s, arriveStationName: o, chooseStation: b }), (0, I.tZ)(bt, { chooseDate: u, monthDay: c, dayInfo: l, switchStu: m, isStu: d, switchChange: p, isGaotieOnly: h }), !(null != f && f.isReceive) && !(null == f || !f.context) && (0, I.BX)(v.View, { className: "train-new-user-couppon flex-center", id: "AYCm", onClick: g, children: [(0, I.tZ)(v.Image, { className: "coupon-icon", src: "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/img_xrlb_1.png" }), (0, I.tZ)(v.View, { children: f.context }), (0, I.tZ)(v.Image, { src: "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/icon_jt3.png", className: "arrow" })] }), (0, I.tZ)(Ct, { search: y, newCouponData: f, homeCashRightsTag: S }), (null == C ? void 0 : C.length) > 0 && (0, I.tZ)(wt, { recentSearchList: C, isSmartSearch: w, clearRecentSearch: k, onClickRecentSearch: Z })] });
          }),
          Zt = i(25958),
          St = p.default.memo(function (e) {
            var t = e.show,
              i = void 0 !== t && t,
              a = e.dStation,
              n = void 0 === a ? "" : a,
              o = e.aStation,
              r = void 0 === o ? "" : o,
              s = e.onClose,
              c = void 0 === s ? function () {} : s,
              l = e.oid,
              d = void 0 === l ? "" : l;
            return (0, I.tZ)(Zt.Z, {
              show: i,
              onClose: c,
              propStyle:
                "width: 618rpx;height: 412rpx;background: url('https://images3.c-ctrip.com/train/tieyou-mini-img/202012/seckillbg@2x.png') no-repeat;background-size: 100% 100%;",
              hiddenCloseIcon: !1,
              ubtTrace: function () {},
              children: (0, I.BX)(v.View, {
                className: "common-train-seckillPop-container",
                children: [
                  (0, I.BX)(v.View, {
                    className: "tit",
                    children: [
                      (0, I.tZ)(v.Image, {
                        src: "https://images3.c-ctrip.com/train/tieyou-mini-img/202012/seckill-icon@3x.png",
                        mode: "widthFix",
                        className: "seckill-icon",
                      }),
                      (0, I.tZ)(v.Text, { children: "秒杀即将开始" }),
                    ],
                  }),
                  (0, I.BX)(v.View, {
                    className: "txt",
                    children: [
                      "您的",
                      (0, I.BX)(v.Text, {
                        className: "strong",
                        children: ["「", n, "-", r, "」"],
                      }),
                      "的预约订单即将开始秒杀，请前往助力成功率更高",
                    ],
                  }),
                  (0, I.tZ)(v.Button, {
                    className: "seckill-btn",
                    id: "AYCn",
                    onClick: function () {
                      g().redirectTo({
                        url: et.ZP.getTrainGrabOrderDetailUrl(d),
                      });
                    },
                    children: "进入抢票详情页",
                  }),
                ],
              }),
            });
          }),
          Nt = p.default.memo(function (e) {
            var t = e.show,
              i = void 0 !== t && t,
              a = e.marketModalInfo,
              n = void 0 === a ? {} : a,
              o = e.onClose,
              r = void 0 === o ? function () {} : o,
              s = e.onClickMarketModalBtn,
              c = void 0 === s ? function () {} : s;
            return (0,
            I.tZ)(Zt.Z, { show: i, propStyle: "background: transparent;", onClose: r, ubtTrace: function () {}, children: (0, I.BX)(v.View, { className: "common-train-market-user-modal", children: [n && n.imgPopModule && (0, I.BX)(v.View, { className: "market-user-pop", children: [(0, I.tZ)(v.View, { className: "lost-title", children: n.imgPopModule.title }), (0, I.tZ)(v.Image, { className: "img", src: n.imgPopModule.contentImg, mode: "widthFix" }), (0, I.tZ)(v.View, { className: "lost-btn", id: "AYCS", onClick: c, children: (0, I.tZ)(v.Image, { className: "img", src: n.imgPopModule.buttonImg }) })] }), n && n.spePopModule && (0, I.BX)(v.View, { className: "market-user-pop-new", children: [(0, I.tZ)(v.View, { className: "pop-hongbao-hd", children: (0, I.tZ)(v.View, { children: n.spePopModule.title }) }), (0, I.BX)(v.View, { className: "pop-hongbao-bd", children: [(0, I.tZ)(v.View, { className: "pop-hongbao-txt", children: n.spePopModule.subTitle }), n.spePopModule.packageItem && (0, I.BX)(v.View, { className: "pop-hongbao-coupon add-tag", children: [(0, I.tZ)(v.View, { className: "tag", children: n.spePopModule.packageItem.tag }), (0, I.tZ)(v.View, { className: "lbox", children: (0, I.tZ)(v.View, { className: "price", children: n.spePopModule.packageItem.price }) }), (0, I.BX)(v.View, { className: "cont", children: [(0, I.tZ)(v.View, { className: "coupon-title", children: n.spePopModule.packageItem.name }), (0, I.tZ)(v.View, { className: "coupon-desc", children: n.spePopModule.packageItem.desc })] }), (0, I.tZ)(v.View, { className: "icon-cash" })] })] }), (0, I.tZ)(v.View, { className: "pop-hongbao-botm", children: (0, I.tZ)(v.View, { className: "btn-box", id: "AYCT", onClick: c, children: (0, I.tZ)(v.Image, { className: "img", src: n.spePopModule.buttonImg }) }) })] })] }) });
          });
        var It = p.default.memo(
            function (e) {
              var t = e.marketCouponInfo,
                i = void 0 === t ? {} : t,
                a = e.onClickMarketBannerGot,
                n = void 0 === a ? function () {} : a,
                o = e.onClickMarketBannerItem,
                r = void 0 === o ? function () {} : o;
              return (0, I.tZ)(v.View, {
                className:
                  "m-welfare-guest " +
                  (i && "green" === i.theme ? "student" : ""),
                children: (0, I.BX)(v.Block, {
                  children: [
                    i &&
                      i.titleImg &&
                      (0, I.BX)(v.View, {
                        className: "head",
                        children: [
                          (0, I.BX)(v.View, {
                            className: "img-ctn",
                            children: [
                              (0, I.tZ)(v.Image, {
                                src: i.icon,
                                className: "icon",
                              }),
                              (0, I.tZ)(v.Image, {
                                src: i.titleImg,
                                className: "icon-welfare",
                              }),
                            ],
                          }),
                          i.showBtn &&
                            (0, I.BX)(v.View, {
                              className: "got-coupon-btn",
                              id: "AYCP",
                              onClick: n,
                              children: [
                                (0, I.tZ)(v.View, {
                                  className: "txt",
                                  children: i.btnName,
                                }),
                                (0, I.tZ)(v.View, {
                                  className: "arrow-icon",
                                  children: (0, I.tZ)(v.View, {
                                    className: "img",
                                  }),
                                }),
                              ],
                            }),
                          !i.showBtn &&
                            (0, I.tZ)(v.Text, {
                              className: "tip-got",
                              children: i.receivedName,
                            }),
                        ],
                      }),
                    i &&
                      i.content &&
                      i.content[0] &&
                      (0, I.tZ)(v.View, {
                        className: "coupon-list",
                        children: i.content.map(function (e, t) {
                          return (0,
                          I.BX)(v.View, { className: "coupon-item " + (e.btnName ? "got " : " ") + ("redPacket" === e.style ? "red-packet-item" : ""), children: ["redPacket" === e.style && (0, I.BX)(v.View, { className: "red-packet", children: [(0, I.tZ)(v.View, { className: "main-txt", children: e.title }), (0, I.tZ)(v.View, { className: "sub-txt", children: e.desc }), e.btnName && (0, I.tZ)(v.View, { className: "join-btn", id: "AYCQ", onClick: r.bind(void 0, e), children: e.btnName })] }), "redPacket" !== e.style && (0, I.BX)(v.Block, { children: [(0, I.tZ)(v.View, { className: "top-tag", children: e.tag }), (0, I.tZ)(v.View, { className: -1 === e.title.indexOf("¥") ? "main-txt" : "main-price", children: e.title.replace("¥", "") }), (0, I.tZ)(v.View, { className: "sub-txt", children: e.desc }), e.btnName && (0, I.tZ)(v.View, { className: "use-btn", id: "AYCR", onClick: r.bind(void 0, e), children: e.btnName })] })] }, t);
                        }),
                      }),
                  ],
                }),
              });
            },
            function (e, t) {
              return w._.isEqual(e.marketCouponInfo, t.marketCouponInfo);
            }
          ),
          Tt = p.default.memo(function (e) {
            var t,
              i = e.rights,
              a = e.close;
            return (0, I.BX)(v.View, {
              className: " _Wa _Vj _yc _om _p",
              children: [
                (0, I.BX)(v.View, {
                  className: " _i _l _pm _m",
                  children: [
                    (0, I.tZ)(v.Image, {
                      className: " _qm _rm",
                      src: i.titleImg,
                    }),
                    (0, I.tZ)(v.View, {
                      className: " _vb _ug _X _o _sm _vi _b _rl",
                      onClick: function () {
                        return w.Z.commonNavigator(i.targetUrl);
                      },
                      children: i.receiveFlag ? "去使用" : "去领取",
                    }),
                  ],
                }),
                (0, I.tZ)(v.View, {
                  className: " _i _Rd _tm",
                  children:
                    null === (t = i.rightsList) || void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          return (0,
                          I.BX)(v.View, { className: " _um _lh _mh _lj _vm _i _n _l", children: [(0, I.BX)(v.Text, { className: " _sh _wm" + (e.unit ? "" : " _xm"), children: [!!e.unit && (0, I.tZ)(v.Text, { className: " _E", children: e.unit }), e.content] }), (0, I.tZ)(v.Text, { className: " _Ac _Kc _C", children: e.desc })] }, t);
                        }),
                }),
                (0, I.tZ)(v.Image, {
                  className: " _u _q _t _Ij _De",
                  src: "https://images3.c-ctrip.com/ztrip/train_bin/23-06/sy/xs/icon_sy_xs_gb@3x.png",
                  onClick: a,
                }),
              ],
            });
          }),
          xt = p.default.memo(function (e) {
            var t = e.show,
              i = void 0 !== t && t,
              a = e.modalInfo,
              n = void 0 === a ? {} : a,
              o = e.onClose,
              r = void 0 === o ? function () {} : o,
              s = e.onClickMarketCouponModal,
              c = void 0 === s ? function () {} : s;
            return (0, I.tZ)(Zt.Z, {
              show: i,
              propStyle: "background: transparent;",
              onClose: r,
              ubtTrace: function () {},
              children: (0, I.tZ)(v.View, {
                className: "common-train-market-coupon-modal",
                children: (0, I.BX)(v.View, {
                  className: "pop-newguest",
                  children: [
                    (0, I.tZ)(v.View, {
                      className: "pop-newguest-hd",
                      children: (0, I.tZ)(v.Image, {
                        src: n.topImg,
                        mode: "widthFix",
                        className: "img",
                      }),
                    }),
                    (0, I.BX)(v.View, {
                      className: "pop-newguest-bd",
                      children: [
                        (0, I.tZ)(v.Image, {
                          src: n.bg,
                          mode: "widthFix",
                          className: "bg-img",
                        }),
                        (0, I.BX)(v.View, {
                          className: "pop-newguest-card",
                          children: [
                            (0, I.tZ)(v.View, {
                              className: "pop-newguest-coupon",
                              children:
                                n.content &&
                                n.content[0] &&
                                n.content.map(function (e, t) {
                                  return (0,
                                  I.tZ)(v.Block, { children: "coupon" === e.type && (0, I.BX)(v.View, { className: "coupon-white", children: [(0, I.tZ)(v.Image, { className: "bg-image", src: e.bg }), (0, I.BX)(v.View, { className: "cp-content", children: [(0, I.BX)(v.View, { className: "lbox", children: [e.price && (0, I.tZ)(v.View, { className: "price", children: e.price }), e.title && (0, I.tZ)(v.View, { className: "tit", children: e.title }), e.titleImg && (0, I.tZ)(v.Image, { src: e.titleImg, className: "icon" })] }), (0, I.BX)(v.View, { className: "cont", children: [e.tag && (0, I.tZ)(v.View, { className: "tag", style: e.tagColor ? "color:".concat(e.tagColor, ";") : "", children: e.tag }), (0, I.tZ)(v.View, { className: "tit", style: e.color ? "color:".concat(e.color, ";") : "", children: e.desc })] })] })] }) }, t);
                                }),
                            }),
                            (0, I.tZ)(v.View, {
                              className: "pop-newguest-botm",
                              children: (0, I.BX)(v.View, {
                                className: "btn-get",
                                id: "AYCO",
                                onClick: c,
                                children: [
                                  (0, I.tZ)(v.Image, {
                                    className: "image",
                                    src: n.btnBg,
                                  }),
                                  (0, I.tZ)(v.Text, {
                                    className: "btn-txt",
                                    children: n.btnName || "",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          }),
          _t = i(30301),
          Dt = function (e) {
            var t,
              i,
              a = e.order,
              n = e.showStationTime,
              o = e.pageId,
              r = e.ubtTrace,
              s = (0, p.useState)(0),
              c = (0, $.Z)(s, 2),
              l = c[0],
              d = c[1],
              u = (0, p.useState)(35),
              h = (0, $.Z)(u, 2),
              m = h[0],
              f = h[1];
            (0, p.useEffect)(
              function () {
                setTimeout(function () {
                  var e;
                  null == a ||
                    null === (e = a.stopStationList) ||
                    void 0 === e ||
                    e.forEach(function (e, t) {
                      var i, n;
                      (null == a ||
                      null === (i = a.stopStationTitle) ||
                      void 0 === i
                        ? void 0
                        : i.indexOf(e.stationName)) > -1 &&
                        ((null == a ||
                        null === (n = a.stopStationTitle) ||
                        void 0 === n
                          ? void 0
                          : n.indexOf("下一站")) > -1
                          ? (d(t - 1), f(70 * (t - 1)))
                          : (d(t), f(70 * (t - 1) + 35 + 5)));
                    });
                }, 500);
              },
              [a]
            ),
              (0, p.useEffect)(function () {
                r("TZWHomePage_OnWayCard_StopStation_exposure", { PageId: o });
              }, []);
            var g,
              y = 3 === a.trainStatusCode,
              b = (null == a ? void 0 : a.stopStationList) || [];
            return (
              (null === (t = b) || void 0 === t ? void 0 : t.length) < 5 &&
                (b = b.concat(
                  new Array(
                    5 - (null === (g = b) || void 0 === g ? void 0 : g.length)
                  ).fill(null)
                )),
              (0, I.BX)(v.View, {
                className: " _Go _Lo _a _vi",
                children: [
                  (0, I.BX)(v.View, {
                    className: " _sb _hk _i _l _lb",
                    children: [
                      (0, I.tZ)(v.Text, { children: a.stopStationTitle }),
                      !!a.trainStatusDesc &&
                        (0, I.BX)(v.View, {
                          className: " _Ee _De _bh _pa _Qk _i _l",
                          style: y
                            ? "background: #fff2f2;color: #ff5959;"
                            : "background: #ebfaf4;color: #03b86f;",
                          children: [
                            (0, I.tZ)(v.Image, {
                              src: y
                                ? "https://images3.c-ctrip.com/ztrip/train_bin/23-06/icon_xckp_wd@3x.webp"
                                : "https://images3.c-ctrip.com/ztrip/train_bin/23-06/icon_xckp_zd@3x.png",
                              className: " _Bb _dg _jb",
                            }),
                            (0, I.tZ)(v.Text, { children: a.trainStatusDesc }),
                          ],
                        }),
                      !!a.tripDesc &&
                        (0, I.tZ)(v.Text, {
                          className: " _Ma _E _j _Di",
                          children: a.tripDesc,
                        }),
                    ],
                  }),
                  (0, I.tZ)(v.View, {
                    children: (0, I.BX)(v.ScrollView, {
                      className: " _Xk _p _Ym _Z _i _Mo",
                      scrollX: !0,
                      enableFlex: !0,
                      scrollIntoView: "station_progress_".concat(l),
                      children: [
                        null === (i = b) || void 0 === i
                          ? void 0
                          : i.map(function (e, t) {
                              var i,
                                o =
                                  (null === (i = a.stopStationTitle) ||
                                  void 0 === i
                                    ? void 0
                                    : i.indexOf(
                                        null == e ? void 0 : e.stationName
                                      )) > -1;
                              return (0,
                              I.BX)(v.View, { className: " _i _k", id: "station_progress_".concat(t), children: [(0, I.tZ)(v.View, { className: " _sf _No _i _n _l _uj", style: "width: 70px", children: (0, I.tZ)(v.View, { className: " _Oo _Po _w _Qo" }) }), !!e && (0, I.BX)(v.View, { className: " _Bj _i _Ro _l", style: "width: 70px", children: [(0, I.BX)(v.View, { style: "display:flex; align-items: center;", children: [(0, I.tZ)(v.Text, { className: " _Hh _E _Ym _yc _Xm _To", style: o ? "color: #198cff;font-weight: 500;" : "", children: e.stationName }), e.stationName === a.departSite && (0, I.tZ)(v.View, { className: " _Ye _og _Uo _hb _qb _B _o _ff _Wh", children: "发" }), e.stationName === a.arriveSite && (0, I.tZ)(v.View, { className: " _Ye _og _Uo _hb _qb _B _o _ff _Wh", style: "background: #03b86f;", children: "终" })] }), (0, I.BX)(v.Text, { className: " _Hh _B", style: o ? "color: #198cff;" : "", children: [e.arrivalTime || "--", n && (0, I.BX)(v.Text, { children: ["(停", e.stopMinutes, "分)"] })] })] }, t)] }, t);
                            }),
                        (0, I.tZ)(v.View, {
                          className: " _u _q _s _i _l",
                          style: "left: ".concat(m, "px"),
                          children: (0, I.tZ)(v.Image, {
                            className: " _p",
                            style: "width: 70px;height: 8px;",
                            src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/home/10.0/xckp/img_xshc@3x.webp",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            );
          },
          Bt = function (e) {
            var t,
              i = e.order,
              a = e.pageId,
              n = e.ubtTrace,
              o = !1,
              r = !1,
              s = !1,
              c = i.transitCity || i.trafficNo,
              l =
                null != i && i.travelTime
                  ? "".concat(c, "·").concat(null == i ? void 0 : i.travelTime)
                  : c;
            switch (null == i ? void 0 : i.tripStatusCode) {
              case 1:
              case 2:
                (s = !0), (o = !0);
                break;
              case 4:
                r = !0;
                break;
              case 3:
                o = !0;
            }
            return (0, I.BX)(v.View, {
              onClick: function () {
                n("TZWHomePage_OnWayCard_click", { PageId: a }),
                  i.detailUrl && w.Z.commonNavigator(i.detailUrl);
              },
              className: " _bg _pb _yo",
              style: s
                ? "background: #ebf4ff;"
                : "background: linear-gradient(-180deg, rgb(58, 96, 171) 0%, rgb(128, 160, 231) 100%);",
              children: [
                (0, I.BX)(v.View, {
                  className: " _zo _i _l",
                  children: [
                    (0, I.BX)(v.View, {
                      className: "flex-align-items-center",
                      style: "flex: 1",
                      children: [
                        (0, I.tZ)(v.Text, {
                          className: " _qb _E _Ao",
                          style: s ? "color: #666666;" : "",
                          children: i.departDate,
                        }),
                        (0, I.tZ)(v.View, {
                          className: " _dg _wl _a _Bo _Dm",
                          style: s ? "background: #acbbd1;" : "",
                        }),
                        !!i.checkIn &&
                          o &&
                          (0, I.tZ)(v.View, {
                            className: " _qb _rl _Bg",
                            style: s ? "color: #333333;" : "",
                            children: (0, I.tZ)(_t.Z, {
                              message: i.checkIn,
                              customDuration: 2,
                              animationName: "marqueeAnimation",
                              mode: "enterFromRight",
                            }),
                          }),
                      ],
                    }),
                    !!i.detailTxt &&
                      (0, I.tZ)(v.View, {
                        className: " _qb _rl",
                        style: s ? "color: #198cff;" : "",
                        children: i.detailTxt,
                      }),
                  ],
                }),
                (0, I.BX)(v.View, {
                  className: " _Co _i _l",
                  children: [
                    (0, I.BX)(v.View, {
                      className: " _Do _i _k _kk",
                      children: [
                        (0, I.tZ)(v.Text, {
                          className: "-ja",
                          style: s ? "color: #333333;" : "",
                          children: i.departTime || "-:-",
                        }),
                        (0, I.tZ)(v.Text, {
                          className: " _qb _F _gj _Eo _R _Ym _yc _Xm",
                          style: s ? "color: #333333;" : "",
                          children: i.departSite,
                        }),
                      ],
                    }),
                    (0, I.BX)(v.View, {
                      className: " _Db _i _l",
                      children: [
                        (0, I.tZ)(v.Image, {
                          src: i.icon,
                          className: " _Fo _Ld",
                        }),
                        (0, I.tZ)(v.View, {
                          className: " _qb _E _ub",
                          style: s ? "color: #333333;" : "",
                          children: l,
                        }),
                      ],
                    }),
                    (0, I.BX)(v.View, {
                      className: " _Do _i _k _pf",
                      children: [
                        (0, I.tZ)(v.Text, {
                          className: "-ja",
                          style: s ? "color: #333333;" : "",
                          children: i.arriveTime || "-:-",
                        }),
                        (0, I.tZ)(v.Text, {
                          className: " _qb _F _gj _Eo _R _Ym _yc _Xm",
                          style: s ? "color: #333333;" : "",
                          children: i.arriveSite,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, I.tZ)(v.View, {
                  className: " _lc _Vb _vi _Go _i _Ga _l _Yj _Zn",
                  children:
                    null === (t = i.passengerList) || void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          var i = e.carriageNo || "";
                          return (
                            e.seatNo && (i += e.seatNo),
                            (0, I.BX)(
                              v.View,
                              {
                                className: " _i _l _Ho _Io",
                                children: [
                                  (0, I.tZ)(v.Text, {
                                    className: " _oc _F",
                                    children: e.name,
                                  }),
                                  !!i &&
                                    (0, I.tZ)(v.Text, {
                                      className: " _Zg _Xb _hk",
                                      children: i,
                                    }),
                                  !!e.location &&
                                    (0, I.tZ)(v.View, {
                                      className: " _Rj _O _Jo _Qk _Ko _Al _Og",
                                      children: e.location,
                                    }),
                                ],
                              },
                              t
                            )
                          );
                        }),
                }),
                !!i.stopStationStatus &&
                  (0, I.tZ)(Dt, {
                    order: i,
                    showStationTime: r,
                    pageId: a,
                    ubtTrace: n,
                  }),
              ],
            });
          },
          Vt = function (e) {
            var t = e.order,
              i = e.pageId,
              a = e.ubtTrace,
              n = (0, p.useState)(!1),
              o = (0, $.Z)(n, 2),
              r = o[0],
              s = o[1];
            return r
              ? (0, I.tZ)(Bt, { order: t, pageId: i, ubtTrace: a })
              : (0, I.BX)(v.View, {
                  className: " _Gc _ro _vi _bg _i _l",
                  children: [
                    (0, I.tZ)(v.View, {
                      className: " _De _Q _o _w _hb _Al _qb _D _so",
                      children: t.type,
                    }),
                    (0, I.BX)(v.View, {
                      className: " _Xb _vl _j _Xm _yc _Ym",
                      children: [
                        null == t ? void 0 : t.departDate,
                        " ",
                        t.departSite,
                        "-",
                        t.arriveSite,
                      ],
                    }),
                    (0, I.BX)(v.View, {
                      className: " _i _l  _i _l",
                      onClick: function () {
                        s(!0);
                      },
                      children: [
                        (0, I.tZ)(v.Text, {
                          className: " _to _rl",
                          children: "详情",
                        }),
                        (0, I.tZ)(v.Text, {
                          className: "iconfont2 ifont2-arr fold-arr",
                        }),
                      ],
                    }),
                  ],
                });
          },
          Pt = function (e) {
            var t = e.services,
              i = e.pageId,
              a = e.ubtTrace,
              n = e.order;
            return (0, I.tZ)(v.View, {
              className: " _i _Qh _tm",
              children: t.map(function (e, t) {
                return (0, I.BX)(
                  v.View,
                  {
                    className: " _db _ke _i _l _Ik _Qf _uj _p",
                    onClick: function () {
                      ["联系车站", "联系酒店"].includes(e.name)
                        ? g().makePhoneCall({ phoneNumber: e.url })
                        : w.Z.commonNavigator(e.url),
                        a("TZWHomePage_OnWayCard_FuncButton_click", {
                          PageId: i,
                          TypeSndAttr: e.name,
                          OutFlowLine: e.outFlowLine,
                          CardType: n.type,
                        });
                    },
                    children: [
                      (0, I.tZ)(v.Image, {
                        className: " _Ye _og _Ne",
                        src: e.icon,
                      }),
                      (0, I.tZ)(v.Text, {
                        className: " _oc _rl",
                        children: e.name,
                      }),
                      !!e.tag &&
                        (0, I.tZ)(v.View, {
                          className: " _og _ff _Hi _Al _u _uo _vo _wo _ci _xo",
                          children: e.tag,
                        }),
                    ],
                  },
                  t
                );
              }),
            });
          },
          Mt = p.default.memo(function (e) {
            var t = e.order,
              i = e.services,
              a = e.pageId,
              n = e.ubtTrace;
            if (
              ((0, p.useEffect)(
                function () {
                  t &&
                    n("TZWHomePage_OnWayCard_exposure", {
                      PageId: a,
                      CardType: t.type,
                    });
                },
                [t]
              ),
              !t)
            )
              return (0, I.tZ)(v.View, {});
            var o = !1,
              r = !1;
            switch (t.tripStatusCode) {
              case 1:
                (o = !0), (r = !0);
                break;
              case 2:
              case 3:
                o = !0;
            }
            var s = 3 === t.trainStatusCode;
            return (0, I.BX)(v.View, {
              className: " _a _Xa _Wa _po",
              children: [
                (0, I.BX)(v.View, {
                  className: " _i _l _qo",
                  children: [
                    (0, I.BX)(v.View, {
                      className: " _ok _bd _j _i _l",
                      children: [
                        (0, I.tZ)(v.Text, { children: t.title }),
                        o &&
                          (0, I.BX)(v.View, {
                            style: " _i _l  _i _l",
                            onClick: function () {
                              return (
                                t.destnUrl && w.Z.commonNavigator(t.destnUrl)
                              );
                            },
                            children: [
                              (0, I.tZ)(v.Text, {
                                className: " _x _bd",
                                children: t.arriveCity,
                              }),
                              !!t.destnUrl &&
                                (0, I.tZ)(v.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train_bin/23-06/icon_sy_xckp_jt@3x.png",
                                  className: " _tf _dj",
                                }),
                            ],
                          }),
                        !o &&
                          !(null == t || !t.trainStatusDesc) &&
                          !t.stopStationStatus &&
                          (0, I.BX)(v.View, {
                            className: " _Ee _De _bh _pa _Qk _i _l",
                            style: s
                              ? "background: #fff2f2;color: #ff5959;"
                              : "background: #ebfaf4;color: #03b86f;",
                            children: [
                              (0, I.tZ)(v.Image, {
                                src: s
                                  ? "https://images3.c-ctrip.com/ztrip/train_bin/23-06/icon_xckp_wd@3x.webp"
                                  : "https://images3.c-ctrip.com/ztrip/train_bin/23-06/icon_xckp_zd@3x.png",
                                className: " _Bb _dg _jb",
                              }),
                              (0, I.tZ)(v.Text, {
                                children: t.trainStatusDesc,
                              }),
                            ],
                          }),
                      ],
                    }),
                    !!t.allTxt &&
                      (0, I.BX)(v.View, {
                        className: " _Ma _hk",
                        onClick: function () {
                          return w.Z.commonNavigator(t.allUrl);
                        },
                        children: [
                          (0, I.tZ)(v.Text, { children: t.allTxt }),
                          (0, I.tZ)(v.Text, {
                            className: "iconfont2 ifont2-arr",
                            style: "color: #999999;font-size: 14px",
                          }),
                        ],
                      }),
                  ],
                }),
                r && (0, I.tZ)(Vt, { order: t, pageId: a, ubtTrace: n }),
                !r && (0, I.tZ)(Bt, { order: t, pageId: a, ubtTrace: n }),
                (null == i ? void 0 : i.length) > 0 &&
                  (0, I.tZ)(Pt, {
                    services: i,
                    pageId: a,
                    ubtTrace: n,
                    order: t,
                  }),
              ],
            });
          }),
          At = p.default.memo(function (e) {
            var t,
              i,
              a = e.orderData,
              n = void 0 === a ? {} : a,
              o = e.getOrderList,
              r = void 0 === o ? function () {} : o,
              s = e.ubtTrace,
              c = void 0 === s ? function () {} : s,
              l = (0, p.useState)(1),
              d = (0, $.Z)(l, 2),
              u = d[0],
              h = d[1],
              m = n.orderList,
              f = void 0 === m ? [] : m,
              y = (
                (null === (t = f[u - 1]) || void 0 === t ? void 0 : t.title) ||
                ""
              )
                .split("|")
                .filter(function (e) {
                  return "" !== e;
                })
                .map(function (e) {
                  return e.trim();
                }),
              b =
                (null === (i = f[u - 1]) || void 0 === i
                  ? void 0
                  : i.subTitle) || "";
            return (0, I.tZ)(v.View, {
              className: "home-train-waiting-pay-order",
              children: (0, I.BX)(v.View, {
                className: "container",
                children: [
                  (0, I.BX)(v.View, {
                    className: "header",
                    children: [
                      (0, I.BX)(v.View, {
                        className: "title-container",
                        children: [
                          (0, I.BX)(v.View, {
                            className: "action-title",
                            children: [
                              (0, I.tZ)(v.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/home/icon_dkq@3x.png",
                                className: "action-icon",
                              }),
                              (0, I.tZ)(v.View, {
                                className: "title",
                                children: n.title || "",
                              }),
                            ],
                          }),
                          (0, I.tZ)(v.View, {
                            className: "sub-title",
                            children: n.noticeList[u - 1],
                          }),
                        ],
                      }),
                      n.orderList &&
                        n.orderList.length > 1 &&
                        (0, I.BX)(v.View, {
                          className: "slider-num",
                          children: [
                            (0, I.tZ)(v.Text, {
                              className: "current-num",
                              children: u,
                            }),
                            (0, I.BX)(v.Text, {
                              className: "total-num",
                              children: ["/", n.orderList.length],
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, I.tZ)(v.View, {
                    className: "content",
                    children: (0, I.tZ)(v.Swiper, {
                      className: "order-list",
                      onChange: function (e) {
                        return (function (e) {
                          var t = e.detail.current;
                          h(t + 1);
                        })(e);
                      },
                      children:
                        n.orderList &&
                        n.orderList.map(function (e) {
                          return (0, I.tZ)(
                            v.SwiperItem,
                            {
                              children: (0, I.BX)(v.View, {
                                className: "item",
                                id: "AYCp",
                                onClick: function () {
                                  return (function (e) {
                                    if (
                                      0 !== (null == e ? void 0 : e.orderFlag)
                                    )
                                      if (
                                        1 !== (null == e ? void 0 : e.orderFlag)
                                      )
                                        if (
                                          2 !==
                                          (null == e ? void 0 : e.orderFlag)
                                        ) {
                                          if (e && e.type && e.orderNumber) {
                                            var t = "";
                                            switch (e.type) {
                                              case "train":
                                                t =
                                                  "/pages/trainDetail/shelves/shelves?oid=".concat(
                                                    e.orderNumber
                                                  );
                                                break;
                                              case "flight":
                                                t =
                                                  "/pages/flight/detail/detail?orderNumber=".concat(
                                                    e.orderNumber
                                                  );
                                                break;
                                              case "hotel":
                                                t =
                                                  "/pages/hotel/order/order?orderId=".concat(
                                                    e.orderNumber
                                                  );
                                                break;
                                              case "bus":
                                                t =
                                                  "/pages/bus/neworderdetail/orderdetail?oid=".concat(
                                                    e.orderNumber
                                                  );
                                            }
                                            t && g().navigateTo({ url: t });
                                          }
                                          c("xcx_topay_click");
                                        } else
                                          g().navigateTo({
                                            url: "/pages/trainDetail/order/order?oid=".concat(
                                              e.orderNumber
                                            ),
                                          });
                                      else
                                        g().navigateTo({
                                          url: "/pages/taroCRN/train/pages/candidateOrderPay/index?orderNumber=".concat(
                                            e.orderNumber
                                          ),
                                        });
                                    else
                                      g().navigateTo({
                                        url: "/pages/trainsmart/smartRSTicket/index?oid=".concat(
                                          e.orderNumber
                                        ),
                                      });
                                  })(e);
                                },
                                children: [
                                  (0, I.tZ)(v.Image, {
                                    src: e.icon,
                                    className: "order-icon",
                                  }),
                                  (0, I.BX)(v.View, {
                                    className: "order-desc",
                                    children: [
                                      (0, I.BX)(v.View, {
                                        className: "station-price",
                                        children: [
                                          (0, I.tZ)(v.View, {
                                            className: "station-list",
                                            children:
                                              y &&
                                              y.map(function (e, t) {
                                                return (0,
                                                I.BX)(v.Block, { children: [(0, I.tZ)(v.Text, { className: "station-name", children: e }), t !== y.length - 1 && (0, I.tZ)(v.Text, { className: "split-line" })] }, t);
                                              }),
                                          }),
                                          (0, I.tZ)(v.Text, {
                                            className: "price",
                                            children: e.price,
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(v.View, {
                                        className: "trip-time ".concat(
                                          e.tag && "include-tag"
                                        ),
                                        children: [
                                          e.tag &&
                                            (0, I.tZ)(v.View, {
                                              className: "tag",
                                              children: e.tag,
                                            }),
                                          (0, I.tZ)(_t.Z, {
                                            message: b,
                                            animationName: e.tag
                                              ? "waitingPayOrderMarqueeWithTag"
                                              : "waitingPayOrderMarquee",
                                            customDuration: 5,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, I.BX)(v.View, {
                                    className: "btn",
                                    children: [
                                      (0, I.tZ)(v.View, {
                                        className: "tit",
                                        children: e.actionName,
                                      }),
                                      !(null == e || !e.endPayTime) &&
                                        (0, I.BX)(v.View, {
                                          className: "txt",
                                          children: [
                                            (0, I.tZ)(v.Text, {
                                              children: "剩余",
                                            }),
                                            (0, I.tZ)(S.ZtCountdown, {
                                              endTime: e.endPayTime,
                                              onTimeup: r,
                                              isShowHour: !1,
                                              className: "expire-time",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            e.orderNumber
                          );
                        }),
                    }),
                  }),
                ],
              }),
            });
          }),
          Lt = i(52392),
          Ht = function (e) {
            var t = e.visible,
              i = e.jianlouPopInfo,
              a = e.navigateTo,
              n = e.onClose,
              o = void 0 === n ? function () {} : n,
              r = e.ubtTrace,
              s = void 0 === r ? function () {} : r,
              c = i || {},
              l = c.title,
              d = void 0 === l ? "" : l,
              u = c.subTitle,
              h = void 0 === u ? "" : u,
              m = c.btnName,
              f = void 0 === m ? "" : m,
              g = c.btnUrl,
              b = void 0 === g ? "" : g,
              C = c.ticketInfo,
              w = void 0 === C ? {} : C,
              k = c.passengerNames,
              Z = void 0 === k ? "" : k,
              N = c.seatName,
              T = void 0 === N ? "" : N,
              x = function () {
                a({ url: b });
              };
            (0, p.useEffect)(function () {
              s(205920, {
                exposureType: "popup",
                bizKey: "z_homepage_grab_jianlou_popup_show",
              });
            }, []);
            var _ = (0, p.useState)(5),
              D = (0, $.Z)(_, 2),
              B = D[0],
              V = D[1];
            (0, p.useEffect)(
              function () {
                var e;
                return (
                  i &&
                    (e = setInterval(function () {
                      V(function (e) {
                        return 1 === e && (o(), x()), e - 1;
                      });
                    }, 1e3)),
                  function () {
                    e && clearInterval(e);
                  }
                );
              },
              [i]
            );
            return i
              ? (0, I.tZ)(S.ZtActivityPop, {
                  show: t,
                  animation: "scale",
                  onClose: o,
                  isShowClose: !1,
                  children: (0, I.BX)(v.View, {
                    className: "jian-lou-confirm-pop ".concat(
                      y.default.isTieyou ? "ty" : "zx"
                    ),
                    children: [
                      (0, I.tZ)(v.Image, {
                        className: "img-head",
                        src: "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/img_ljcp_tc@3x.png",
                      }),
                      (0, I.BX)(v.View, {
                        className: "title-box",
                        children: [
                          (0, I.tZ)(v.View, {
                            className: "title",
                            children: d,
                          }),
                          (0, I.tZ)(v.View, {
                            className: "sub-title",
                            children: (0, I.tZ)(S.ZtRichText, {
                              nodes: (function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : "",
                                  t =
                                    /<font(\s+face=['"]?([a-zA-Z\-]*)+['"])?(\s+size=['"]?(\d*)+['"]?)?(\s+color=['"]?([a-zA-Z#0-9]*)?['"]?)?([^>]*?)>([^<]*?)<\/font>/gi;
                                return e.replace(
                                  t,
                                  '<span style="color:$6;font-size:$4px;">$8</span>'
                                );
                              })(h),
                            }),
                          }),
                        ],
                      }),
                      (0, I.BX)(v.View, {
                        className: "detail-box",
                        children: [
                          (0, I.tZ)(Lt.Z, {
                            propStyle: "margin:0 12px",
                            ticketInfo: w,
                          }),
                          (0, I.BX)(v.View, {
                            className: "passenger-box",
                            children: [
                              (0, I.tZ)(v.View, {
                                className: "passenger",
                                children: Z,
                              }),
                              (0, I.tZ)(v.View, {
                                className: "seat",
                                children: T,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, I.tZ)(v.View, {
                        className: "btn-confirm",
                        id: "AYCM",
                        onClick: function () {
                          s(205922, {
                            bizKey: "z_homepage_grab_jianlou_popup_click",
                          }),
                            x(),
                            o();
                        },
                        children: "".concat(f, "(").concat(B, "s)"),
                      }),
                      (0, I.tZ)(v.View, {
                        className: "close-icon",
                        id: "AYCN",
                        onClick: o,
                        children: (0, I.tZ)(v.Icon, {
                          type: "cancel",
                          color: "#999",
                          size: "30",
                        }),
                      }),
                    ],
                  }),
                })
              : (0, I.tZ)(v.View, {});
          },
          Xt = i(91006),
          Ot = i.n(Xt),
          Ft = i(18596),
          Yt = function (e) {
            var t = e.data,
              i = e.businessType,
              a = void 0 === i ? 1 : i,
              n = e.onReceive,
              o = e.onTimeUp,
              r = e.ubtTrace,
              s = e.onBannerClick;
            (0, p.useEffect)(
              function () {
                switch (a) {
                  case 1:
                    r("215794", {
                      bizKey: "hotel_train_home_cross_component_show",
                      showType: null == t ? void 0 : t.status,
                    });
                    break;
                  case 2:
                    r("205921", {
                      bizKey: "FLTReserveModuleShow",
                      couponType:
                        2 == (null == t ? void 0 : t.status)
                          ? "0"
                          : 1 == (null == t ? void 0 : t.status)
                          ? "1"
                          : "-1",
                    });
                }
              },
              [t, a]
            );
            var c = t.couponRightInfo,
              l = void 0 === c ? {} : c,
              d = t.title,
              u = t.imageUrl,
              h =
                void 0 === u
                  ? "https://images3.c-ctrip.com/ztrip/train_bin/22-06/img_quan_bg@3x.png"
                  : u,
              m = t.contentListV2,
              f = void 0 === m ? [] : m,
              g = t.status,
              y = t.defaultInfo,
              b = l.buttonText,
              C = void 0 === b ? "" : b,
              w = l.couponTitle,
              k = void 0 === w ? "" : w,
              Z = l.couponTitlePrefix,
              N = void 0 === Z ? "" : Z,
              T = l.couponTitleSuffix,
              x = void 0 === T ? "" : T,
              _ = l.couponContent,
              D = void 0 === _ ? "" : _,
              B = l.couponTag,
              V = void 0 === B ? "" : B,
              P = l.remainingTime,
              M = void 0 === P ? "" : P,
              A =
                "https://images3.c-ctrip.com/ztrip/train.song/gonggong/home/10.0/jjgq/img_jdrs@3x.webp";
            return (
              2 == a &&
                (A =
                  "https://images3.c-ctrip.com/ztrip/train.song/gonggong/home/10.0/jjgq/img_tjjp@3x.webp"),
              d
                ? (0, I.BX)(v.View, {
                    className: "recommend-hotel-con",
                    style: {
                      background: "url(".concat(
                        h ||
                          "https://images3.c-ctrip.com/ztrip/train_bin/22-06/img_quan_bg@3x.png",
                        ")"
                      ),
                    },
                    id: "AYCY",
                    onClick: function () {
                      return s(a);
                    },
                    children: [
                      (0, I.tZ)(v.Image, {
                        className: "bg-icon ".concat(
                          2 == a ? "flight-icon" : ""
                        ),
                        src: A,
                        webp: !0,
                      }),
                      (0, I.BX)(v.View, {
                        className: "title",
                        children: [
                          (0, I.tZ)(v.View, { className: "txt", children: d }),
                          f &&
                            f.length > 0 &&
                            (0, I.tZ)(v.View, {
                              className: "flex-align-items-center",
                              children: f.map(function (e, t) {
                                return (0,
                                I.BX)(v.View, { className: "desc-item flex-align-items-center", children: [(0, I.tZ)(v.Image, { className: "icon", src: null == e ? void 0 : e.tagImage, webp: !0 }), (0, I.tZ)(v.Text, { className: "sub-txt", children: null == e ? void 0 : e.content })] }, "tagItem_".concat(t));
                              }),
                            }),
                        ],
                      }),
                      4 != g &&
                        (0, I.BX)(v.View, {
                          className: "coupon flex-align-items-center",
                          children: [
                            0 === g
                              ? (0, I.BX)(v.View, {
                                  className: "left-c flex-center",
                                  children: [
                                    (0, I.tZ)(v.View, { children: k }),
                                    !!x &&
                                      (0, I.tZ)(v.View, {
                                        className: "zhe-txt",
                                        children: x,
                                      }),
                                  ],
                                })
                              : (0, I.BX)(v.View, {
                                  className: "left-c flex-center",
                                  children: [
                                    !!N &&
                                      (0, I.tZ)(v.View, {
                                        className: "y-price",
                                        children: N,
                                      }),
                                    (0, I.tZ)(v.View, { children: k }),
                                  ],
                                }),
                            (0, I.BX)(v.View, {
                              className: "right-c flex-align-items-center",
                              children: [
                                (0, I.BX)(v.View, {
                                  className: "flex-1",
                                  children: [
                                    (0, I.tZ)(v.View, {
                                      className: "coupon-title",
                                      children: D,
                                    }),
                                    2 === g && M
                                      ? (0, I.BX)(v.View, {
                                          className:
                                            "flex-align-items-center ctdown-con",
                                          children: [
                                            (0, I.tZ)(v.View, {
                                              className: "ctdown-txt",
                                              children: "限时",
                                            }),
                                            (0, I.tZ)(S.ZtCountdown, {
                                              endTime: X()()
                                                .add(M, "second")
                                                .format("YYYY-MM-DD HH:mm:ss"),
                                              className: "hotel-coupon-ctdown",
                                              format: {
                                                hour: "时",
                                                minute: "分",
                                                second: "秒",
                                              },
                                              onTimeup: o,
                                            }),
                                          ],
                                        })
                                      : V
                                      ? (0, I.tZ)(v.View, {
                                          className: "coupon-subtxt",
                                          children: V,
                                        })
                                      : (0, I.tZ)(v.View, {}),
                                  ],
                                }),
                                (0, I.tZ)(v.View, {
                                  className: "btn",
                                  id: "AYCZ",
                                  onClick: function (e) {
                                    e.stopPropagation(), n();
                                  },
                                  children: C || "立即使用",
                                }),
                              ],
                            }),
                            1 === g &&
                              (0, I.tZ)(v.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/home/10.0/jjgq/img_ylq@3x.webp",
                                className: "receive-icon",
                                webp: !0,
                              }),
                          ],
                        }),
                      4 == g &&
                        (null == y ? void 0 : y.length) > 0 &&
                        (0, I.tZ)(v.View, {
                          className: "flight-coupon flex-align-items-center",
                          children:
                            null == y
                              ? void 0
                              : y.map(function (e, t) {
                                  return (0,
                                  I.BX)(v.Block, { children: [(0, I.BX)(v.View, { className: "item", children: [(0, I.tZ)(v.View, { className: "tit", children: e.title }), (0, I.tZ)(v.View, { className: "sub-tit", children: e.subTitle })] }, t), t != y.length - 1 && (0, I.tZ)(v.Image, { className: "split-icon", src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/home/10.0/jjgq/icon_jh@3x.webp", webp: !0 })] }, t);
                                }),
                        }),
                    ],
                  })
                : (0, I.tZ)(I.HY, {})
            );
          };
        (Yt.propTypes = {
          data: Ot().object,
          onReceive: Ot().func,
          onTimeUp: Ot().func,
          ubtTrace: Ot().func,
          onBannerClick: Ot().func,
        }),
          (Yt.defaultProps = {
            data: {},
            onReceive: function () {},
            onTimeUp: function () {},
            ubtTrace: function () {},
            onBannerClick: function () {},
          });
        var Rt = (0, p.memo)(Yt, function (e, t) {
            return Ft.Z.isEqual(e.data, t.data);
          }),
          zt = function (e) {
            var t = e.isShow,
              i = e.onClose,
              a = e.receiveCb,
              r = e.data,
              s = e.ubtTrace;
            if (w.Z.isEmptyObject(r) || (null != r && r.isReceive))
              return (0, I.tZ)(v.View, {});
            var c = r.title,
              l = void 0 === c ? "" : c,
              d = r.backGroundImg,
              u =
                void 0 === d
                  ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/img_xrlb_2.png"
                  : d,
              h = r.couponInfoList,
              m = void 0 === h ? [] : h,
              p = r.couponScene,
              f = void 0 === p ? "" : p,
              g = (function () {
                var e = (0, o.Z)(
                  (0, n.Z)().mark(function e() {
                    var t, o, r;
                    return (0, n.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, it.Y6v)({ sceneCode: f })
                              );
                            case 3:
                              1 ===
                                (null == (r = e.sent)
                                  ? void 0
                                  : r.resultCode) &&
                              null != r &&
                              null !== (t = r.couponInfo) &&
                              void 0 !== t &&
                              t.isReceive
                                ? ((0, b.showToast)({ title: "领取成功" }),
                                  i(),
                                  a())
                                : (0, b.showToast)({
                                    title: "领取失败，请稍后再试",
                                  }),
                                s("c_trn_z_10320660959", {
                                  bizKey:
                                    "z_mini_firstPage_newUser_coupon_button_pop_click",
                                  clickResult:
                                    null != r &&
                                    null !== (o = r.couponInfo) &&
                                    void 0 !== o &&
                                    o.isReceive
                                      ? "1"
                                      : "0",
                                }),
                                (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                (0, b.showToast)({
                                  title: "领取失败，请稍后再试",
                                });
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return (0, I.tZ)(S.ZtActivityPop, {
              show: t,
              onClose: function () {
                return i();
              },
              onWrapClose: function () {
                return i();
              },
              className: "nuc-dialog",
              children: (0, I.tZ)(v.View, {
                className: "nuc-container",
                style: { backgroundImage: "url(".concat(u, ")") },
                children: (0, I.BX)(v.View, {
                  className: "content",
                  children: [
                    (0, I.tZ)(v.View, { className: "title", children: l }),
                    (0, I.tZ)(v.View, {
                      className: "coupon-c",
                      children: m.map(function (e, t) {
                        return (0,
                        I.BX)(v.View, { className: "coupon flex", children: [(0, I.BX)(v.View, { className: "c-left flex-center", children: [(0, I.tZ)(v.Text, { className: "price-tag", children: "¥" }), (0, I.tZ)(v.Text, { className: "price", children: null == e ? void 0 : e.price })] }), (0, I.BX)(v.View, { className: "c-right", children: [(0, I.tZ)(v.View, { className: "coupon-title", children: null == e ? void 0 : e.couponTitle }), (0, I.tZ)(v.View, { className: "coupon-desc", children: null == e ? void 0 : e.couponDesc })] })] }, "coupon_".concat(t));
                      }),
                    }),
                    (0, I.tZ)(v.View, {
                      className: "btn",
                      id: "AYCX",
                      onClick: g,
                      children: "立即领取",
                    }),
                  ],
                }),
              }),
            });
          };
        (zt.propTypes = {
          isShow: Ot().bool,
          onClose: Ot().func,
          receiveCb: Ot().func,
          data: Ot().object,
          ubtTrace: Ot().func,
        }),
          (zt.defaultProps = {
            isShow: !1,
            onClose: function () {},
            receiveCb: function () {},
            data: {},
            ubtTrace: function () {},
          });
        var Ut,
          Et = p.default.memo(zt),
          jt = p.default.memo(function (e) {
            var t,
              i,
              a,
              n = e.isShow,
              o = void 0 !== n && n,
              r = e.couponInfo,
              s = void 0 === r ? {} : r,
              c = e.onClose,
              l = void 0 === c ? function () {} : c,
              d = e.onBtnClick,
              u = void 0 === d ? function () {} : d,
              h = e.ubtTrace,
              m = void 0 === h ? function () {} : h;
            (0, p.useEffect)(
              function () {
                o && m("205921", { bizKey: "FLTCouponPopUpShow" });
              },
              [o]
            );
            var f =
              "https://images3.c-ctrip.com/ztrip/train.song/gonggong/home/10.0/jjgq/img_bj".concat(
                1 ===
                  (null == s || null === (t = s.couponList) || void 0 === t
                    ? void 0
                    : t.length)
                  ? "1"
                  : "",
                "@3x.webp"
              );
            return (0, I.tZ)(v.View, {
              className: "home-fc-pop ".concat(
                1 ===
                  (null == s || null === (i = s.couponList) || void 0 === i
                    ? void 0
                    : i.length)
                  ? "only-one"
                  : ""
              ),
              children: (0, I.tZ)(S.ZtActivityPop, {
                show: o,
                onClose: l,
                children: (0, I.BX)(v.View, {
                  className: "cont",
                  style: "background: url('".concat(
                    f,
                    "') no-repeat; background-size: 100% 100%;"
                  ),
                  children: [
                    (0, I.tZ)(v.View, {
                      className: "title",
                      children: s.popTitle,
                    }),
                    (0, I.tZ)(v.ScrollView, {
                      scrollY: !0,
                      className: "coupon-list",
                      children:
                        null == s || null === (a = s.couponList) || void 0 === a
                          ? void 0
                          : a.map(function (e, t) {
                              var i;
                              return (0,
                              I.BX)(v.Block, { children: [(0, I.BX)(v.View, { className: "item flex-align-items-center", children: [(0, I.BX)(v.View, { className: "amount", children: [(0, I.tZ)(v.Text, { className: "num unit", children: "￥" }), (0, I.tZ)(v.Text, { className: "num", children: e.couponAmount })] }), (0, I.tZ)(v.View, { className: "split-line" }), (0, I.BX)(v.View, { className: "txt-left", children: [(0, I.tZ)(v.View, { className: "tit", children: e.title }), (0, I.tZ)(v.View, { className: "sub-tit", children: e.subTitle })] }), (0, I.tZ)(v.Image, { className: "img", src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/home/10.0/jjgq/img_yhq@3x.webp", webp: !0 })] }), t == (null == s || null === (i = s.couponList) || void 0 === i ? void 0 : i.length) - 1 && (0, I.tZ)(v.View, { className: "default-item" })] }, t);
                            }),
                    }),
                    (0, I.tZ)(v.View, {
                      className: "bottom",
                      style:
                        "background: url('https://images3.c-ctrip.com/ztrip/train.song/gonggong/home/10.0/jjgq/img_an@3x.webp') no-repeat; background-size: 100% 100%;",
                      children: (0, I.tZ)(v.Button, {
                        className: "btn",
                        id: "AYCJ",
                        onClick: u,
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
          Gt = (function (e) {
            (0, d.Z)(i, e);
            var t = (0, u.Z)(i);
            function i(e) {
              var a;
              return (
                (0, s.Z)(this, i),
                (a = t.call(this, e)),
                (0, h.Z)((0, l.Z)(a), "chooseFlightCity", function () {
                  P.Z.flightCity({
                    data: { title: "选择城市", intlHidden: !0 },
                    callback: function (e) {
                      var t = e.cityName,
                        i = e.cityCode;
                      a.setState({
                        specialPriceCity: t,
                        specialPriceCityCode: i,
                      });
                    },
                  });
                }),
                (0, h.Z)((0, l.Z)(a), "onHolidayClick", function (e) {
                  var t, i;
                  null === (t = a.page) ||
                    void 0 === t ||
                    null === (i = t.ubtTrace) ||
                    void 0 === i ||
                    i.call(t, "205922", { bizKey: "FLTDiscountModuleClick" });
                  var n = e.depCityName,
                    o = e.depCityCode,
                    r = e.arrCityName,
                    s = e.arrCityCode,
                    c = e.depDate;
                  re.Z.toFlightList({
                    departureCityName: n,
                    departureCityCode: o,
                    arrivalCityName: r,
                    arrivalCityCode: s,
                    departDate: c,
                    fromPage: ee.Ip.specialHome,
                  });
                }),
                (a.state = {
                  specialPriceCityCode: "SHA",
                  specialPriceCity: "上海",
                  specialCityCode: ["BJS"],
                  flightQuery: null,
                }),
                (a.page = (0, b.getCurrentPage)()),
                a
              );
            }
            return (
              (0, c.Z)(i, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e, t;
                    null === (e = this.page) ||
                      void 0 === e ||
                      null === (t = e.ubtTrace) ||
                      void 0 === t ||
                      t.call(e, "205921", { bizKey: "FLTDiscountModuleShow" }),
                      this.setState({
                        flightQuery: {
                          dptDate: X()().format("YYYY-MM-DD"),
                          rtnDate: X()().add(2, "day").format("YYYY-MM-DD"),
                        },
                      });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.specialPriceCityCode,
                      i = e.specialPriceCity,
                      a = e.specialCityCode,
                      n = e.flightQuery;
                    return n
                      ? (0, I.tZ)(de.Z, {
                          isHiddenIcon: !0,
                          bannerTitle: "特价机票",
                          specialPriceCityCode: t,
                          specialPriceCity: i,
                          specialCityCode: a,
                          flightQuery: n,
                          onCityClick: this.chooseFlightCity,
                          onFlightClick: this.onHolidayClick,
                        })
                      : (0, I.tZ)(I.HY, {});
                  },
                },
              ]),
              i
            );
          })(p.default.PureComponent),
          Wt = p.default.memo(function (e) {
            var t = e.list,
              i = e.navigateTo,
              a = e.ubtTrace;
            return null != t && t.length
              ? (0, I.BX)(v.View, {
                  className: "home-hot-activity",
                  children: [
                    (0, I.tZ)(v.View, {
                      className: "title",
                      children: "热门活动",
                    }),
                    (0, I.tZ)(v.View, {
                      className: "content",
                      children: t.map(function (e, t) {
                        return (0, I.BX)(
                          v.View,
                          {
                            className: "item flex",
                            id: "AYCK",
                            onClick: function () {
                              a("Market_Position".concat(t + 1, "_Click")),
                                (null == e ? void 0 : e.jumpUrl) &&
                                  i({ url: null == e ? void 0 : e.jumpUrl });
                            },
                            children: [
                              (0, I.tZ)(v.Image, {
                                className: "icon",
                                src: null == e ? void 0 : e.icon,
                              }),
                              (0, I.BX)(v.View, {
                                children: [
                                  (0, I.tZ)(v.View, {
                                    className: "name",
                                    children: null == e ? void 0 : e.title,
                                  }),
                                  (0, I.tZ)(v.View, {
                                    className: "desc",
                                    children: null == e ? void 0 : e.desc,
                                  }),
                                ],
                              }),
                            ],
                          },
                          null == e ? void 0 : e.title
                        );
                      }),
                    }),
                  ],
                })
              : (0, I.tZ)(v.View, {});
          }),
          Kt = p.default.memo(function (e) {
            var t = e.isShow,
              i = e.onClose,
              a = e.jumpUrl,
              n = e.navigateTo;
            return (0, I.tZ)(S.ZtActivityPop, {
              show: t,
              onClose: i,
              onWrapClose: i,
              isShowClose: !0,
              className: "home-company-wechat-dialog",
              children: (0, I.BX)(v.View, {
                className: "home-company-wechat",
                children: [
                  (0, I.tZ)(v.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/tjflg@3x.png",
                    className: "title",
                  }),
                  (0, I.BX)(v.View, {
                    className: "coupon",
                    children: [
                      (0, I.BX)(v.View, {
                        className: "price",
                        children: [
                          (0, I.tZ)(v.Text, {
                            className: "price-tag",
                            children: "¥",
                          }),
                          (0, I.tZ)(v.Text, { children: "168" }),
                        ],
                      }),
                      (0, I.tZ)(v.View, {
                        className: "desc",
                        children: "· 无门槛立减 ·",
                      }),
                    ],
                  }),
                  (0, I.tZ)(v.View, {
                    className: "btn",
                    id: "AYCI",
                    onClick: function () {
                      i(), a && n({ url: a });
                    },
                    children: "领取福利",
                  }),
                ],
              }),
            });
          }),
          qt = p.default.memo(function (e) {
            var t,
              i,
              a,
              n,
              o,
              r = e.data;
            if (!r) return (0, I.tZ)(v.View, {});
            var s = function () {
              var e, t;
              null != r &&
                null !== (e = r.buttonEntity) &&
                void 0 !== e &&
                e.jumpUrl &&
                w.Z.commonNavigator(
                  null == r || null === (t = r.buttonEntity) || void 0 === t
                    ? void 0
                    : t.jumpUrl
                );
            };
            return (0, I.BX)(v.View, {
              className: "home-page-member",
              children: [
                (0, I.BX)(v.View, {
                  className: "title flex-align-items-center",
                  children: [
                    (0, I.BX)(v.View, {
                      className: "flex-1 flex-align-items-center",
                      children: [
                        (0, I.tZ)(S.ZtRichText, {
                          className: "title-txt",
                          nodes: null == r ? void 0 : r.title,
                        }),
                        !(null == r || !r.tag) &&
                          (0, I.tZ)(v.View, {
                            className: "plus-tag",
                            style: "background-color:".concat(
                              null == r ? void 0 : r.tagBgColor
                            ),
                            children: (0, I.tZ)(S.ZtRichText, {
                              nodes: null == r ? void 0 : r.tag,
                            }),
                          }),
                      ],
                    }),
                    !(
                      null == r ||
                      null === (t = r.buttonEntity) ||
                      void 0 === t ||
                      !t.buttonTitle
                    ) &&
                      (0, I.BX)(v.View, {
                        className: "flex-align-items-center",
                        id: "AYCU",
                        onClick: s,
                        children: [
                          (0, I.tZ)(S.ZtRichText, {
                            className: "desc-txt",
                            nodes:
                              null == r ||
                              null === (i = r.buttonEntity) ||
                              void 0 === i
                                ? void 0
                                : i.buttonTitle,
                          }),
                          (0, I.tZ)(v.Text, {
                            className: "iconfont ifont-more arrow",
                          }),
                        ],
                      }),
                    !(
                      null == r ||
                      null === (a = r.buttonEntity) ||
                      void 0 === a ||
                      !a.buttonDesc
                    ) &&
                      (0, I.tZ)(v.View, {
                        className: "desc-btn",
                        id: "AYCV",
                        onClick: s,
                        children:
                          null == r ||
                          null === (n = r.buttonEntity) ||
                          void 0 === n
                            ? void 0
                            : n.buttonDesc,
                      }),
                  ],
                }),
                (0, I.tZ)(v.ScrollView, {
                  scrollX: !0,
                  className: "scroll-list ",
                  children:
                    null == r || null === (o = r.entitys) || void 0 === o
                      ? void 0
                      : o.map(function (e, t) {
                          var i, a;
                          return (0, I.tZ)(
                            v.View,
                            {
                              className: "item",
                              id: "AYCW",
                              onClick: function () {
                                var t, i;
                                null != e &&
                                null !== (t = e.buttonEntity) &&
                                void 0 !== t &&
                                t.jumpUrl
                                  ? w.Z.commonNavigator(
                                      null == e ||
                                        null === (i = e.buttonEntity) ||
                                        void 0 === i
                                        ? void 0
                                        : i.jumpUrl
                                    )
                                  : s();
                              },
                              children: (0, I.BX)(v.View, {
                                className: "item-c",
                                children: [
                                  (0, I.tZ)(v.View, {
                                    className: "icon-c flex-center",
                                    children: (0, I.tZ)(v.Image, {
                                      className: "icon",
                                      src: null == e ? void 0 : e.iconUrl,
                                    }),
                                  }),
                                  (0, I.tZ)(v.Text, {
                                    className: "right-name",
                                    children: null == e ? void 0 : e.title,
                                  }),
                                  !(null == e || !e.subTitle) &&
                                    (0, I.tZ)(v.Text, {
                                      className: "use-txt",
                                      children: null == e ? void 0 : e.subTitle,
                                    }),
                                  !(
                                    null == e ||
                                    null === (i = e.buttonEntity) ||
                                    void 0 === i ||
                                    !i.buttonDesc
                                  ) &&
                                    (0, I.tZ)(v.View, {
                                      className: "use-btn",
                                      children:
                                        null == e ||
                                        null === (a = e.buttonEntity) ||
                                        void 0 === a
                                          ? void 0
                                          : a.buttonDesc,
                                    }),
                                ],
                              }),
                            },
                            "recommend-member-".concat(t)
                          );
                        }),
                }),
              ],
            });
          }),
          Qt = p.default.memo(function (e) {
            var t = e.isShow,
              i = e.jumpUrl,
              a = e.onClose,
              n = e.data;
            return (0, I.tZ)(S.ZtActivityPop, {
              show: t,
              onClose: a,
              onWrapClose: a,
              isShowClose: !0,
              className: "home-invite-member-pop",
              children: (0, I.BX)(v.View, {
                className: "bg",
                children: [
                  (0, I.BX)(v.View, {
                    className: "coupon flex-align-items-center",
                    children: [
                      (0, I.BX)(v.View, {
                        className: "price-wrap flex",
                        children: [
                          (0, I.tZ)(v.Text, {
                            className: "unit",
                            children: "¥",
                          }),
                          (0, I.tZ)(v.Text, {
                            className: "price",
                            children: null == n ? void 0 : n.price,
                          }),
                        ],
                      }),
                      (0, I.BX)(v.View, {
                        className: "flex-1 coupon-info",
                        children: [
                          (0, I.tZ)(v.Text, {
                            className: "name",
                            children: null == n ? void 0 : n.title,
                          }),
                          (0, I.tZ)(v.View, {
                            className: "desc",
                            children: null == n ? void 0 : n.desc,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, I.tZ)(v.View, {
                    className: "btn flex-center",
                    id: "AYCL",
                    onClick: function () {
                      a(), i && P.Z.twebview({ data: { url: i } });
                    },
                    children: null == n ? void 0 : n.btnText,
                  }),
                ],
              }),
            });
          }),
          Jt = p.default.memo(function (e) {
            var t = e.onTravelGuide,
              i = e.travelGuide,
              a = (0, p.useState)(0),
              n = (0, $.Z)(a, 2),
              o = n[0],
              r = n[1],
              s = w.Z.debounce(function (e) {
                try {
                  var t = e.detail,
                    i = t.scrollLeft,
                    a = t.scrollWidth - (N.ZP.screenWidth - 24);
                  r(100 * Number((i / a).toFixed(2)));
                } catch (e) {
                  console.log(e);
                }
              }, 30);
            return (0, I.BX)(v.View, {
              className: "home-travel-guide",
              children: [
                (0, I.tZ)(v.ScrollView, {
                  scrollX: !0,
                  scrollWithAnimation: !0,
                  className: "scroll",
                  onScroll: s,
                  enhanced: !0,
                  children: i.map(function (e, i) {
                    return null != e && e.title
                      ? (0, I.tZ)(
                          v.View,
                          {
                            style: "display: inline-block;height:100%",
                            children: (0, I.BX)(v.View, {
                              className: "item",
                              id: "AYCo",
                              onClick: function () {
                                return (
                                  (null == e ? void 0 : e.jumpUrl) &&
                                  t(null == e ? void 0 : e.jumpUrl, e.type)
                                );
                              },
                              children: [
                                (0, I.tZ)(v.Image, {
                                  src: e.icon,
                                  className: "icon",
                                }),
                                (0, I.tZ)(v.Text, {
                                  className: "txt",
                                  children: e.title,
                                }),
                                !(null == e || !e.tagDesc) &&
                                  (0, I.tZ)(v.View, {
                                    className: "ticket-tag flex-center",
                                    children: null == e ? void 0 : e.tagDesc,
                                  }),
                              ],
                            }),
                          },
                          i
                        )
                      : (0, I.tZ)(v.View, {});
                  }),
                }),
                i.length > 4 &&
                  (0, I.tZ)(v.View, {
                    className: "dot",
                    children: (0, I.tZ)(v.View, {
                      className: "cur bgcolor-primary",
                      style: {
                        transform: "translate3d(".concat(o, "%, 0, 0)"),
                      },
                    }),
                  }),
              ],
            });
          }),
          $t = i(95036),
          ei = (0, i(57531).Z)($t.Z),
          ti = p.default.memo(function (e) {
            var t = e.data,
              i = ""
                .concat(
                  ((null == t ? void 0 : t.totalIntergration) || 0) +
                    ((null == t ? void 0 : t.bonusIntergration) || 0)
                )
                .split(""),
              a = (function (e) {
                var t = e.hour,
                  i = e.startTime,
                  a = e.endTime,
                  n = e.openTime,
                  o = e.yesterdayAttendanceFlag,
                  r = e.todayAttendanceFlag,
                  s = e.attendFlag;
                return o
                  ? t < i
                    ? "打卡领奖"
                    : t >= i && t < a
                    ? s
                      ? "待开奖"
                      : "打卡领奖"
                    : t >= a && !s
                    ? r
                      ? "打卡领奖"
                      : "立即报名"
                    : t >= a && t < n && s
                    ? "待开奖"
                    : t >= n
                    ? r
                      ? "打卡领奖"
                      : "立即报名"
                    : void 0
                  : r
                  ? "打卡领奖"
                  : "立即报名";
              })(t);
            return (0, I.BX)(v.View, {
              className: " _Wa _a _Xa _Ya",
              children: [
                (0, I.BX)(v.View, {
                  className: " _i _l _ym",
                  children: [
                    (0, I.tZ)(v.Text, {
                      className: " _sb _bd _j",
                      children: "打卡赢大奖",
                    }),
                    (0, I.BX)(v.View, {
                      className: " _i _l",
                      onClick: function () {
                        w.Z.commonNavigator(
                          "https://".concat(
                            y.default.h5domain,
                            "/ztrip/webapp/ztrip-member/memberPoint?isHideNavBar=YES&isImmersiveMode=YES&needLogin=1"
                          )
                        );
                      },
                      children: [
                        (0, I.BX)(v.Text, {
                          className: " _oc _rl",
                          children: ["可用积分: ", t.credit],
                        }),
                        (0, I.tZ)(v.Text, {
                          className: "iconfont2 ifont2-arr arr",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, I.BX)(v.View, {
                  className: " _bg _zm _pb _Ei _i _l",
                  children: [
                    (0, I.BX)(v.View, {
                      className: " _j",
                      children: [
                        (0, I.BX)(v.View, {
                          className: " _i _l",
                          children: [
                            (0, I.tZ)(v.Text, {
                              className: " _oc _D",
                              children: "今日奖池",
                            }),
                            (0, I.tZ)(v.View, {
                              className: " _dg _wl _La _Dm",
                            }),
                            (0, I.BX)(v.Text, {
                              className: " _Ze _D",
                              children: [
                                "预计明日最高可分到",
                                t.expectedMaxAlloactionOnTomorrow,
                                "积分",
                              ],
                            }),
                          ],
                        }),
                        (0, I.BX)(v.View, {
                          className: " _i _l _Em",
                          children: [
                            null == i
                              ? void 0
                              : i.map(function (e, t) {
                                  return (0,
                                  I.tZ)(v.View, { className: " _rf _Uk _o _Fm _Ze _Gm _Hm _hb _Ne", children: e }, t);
                                }),
                            (0, I.tZ)(v.Text, {
                              className: " _oc _D _Wh",
                              children: "积分",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, I.tZ)(v.Button, {
                      className: " _Am _gg _Bm _dc _qb _Cm",
                      onClick: function () {
                        w.Z.commonNavigator(
                          "https://".concat(
                            y.default.h5domain,
                            "/webapp/train/activity/20200611-ztrip-daily-attendance/?isHideNavBar=YES&partner=zhixing&umid=1278955515&allianceid=30613&sid=3013591&source=hyzx1"
                          )
                        );
                      },
                      children: a,
                    }),
                  ],
                }),
              ],
            });
          }),
          ii = p.default.memo(function (e) {
            var t,
              i,
              a,
              n = e.trainTools;
            if (!n) return (0, I.tZ)(v.View, {});
            var o = function (e) {
              y.default.isTieyou &&
                (e = (e = e.replace(
                  "pages.suanya.com",
                  "pages.tieyou.com"
                )).replace("m.suanya.com", "m.tieyou.com")),
                w.Z.commonNavigator(e);
            };
            return (0, I.BX)(v.View, {
              children: [
                (0, I.BX)(v.View, {
                  className: " _Vb _Pm _fc _Qm _p",
                  children: [
                    (0, I.tZ)(v.View, {
                      className: " _i",
                      children:
                        null == n ||
                        null === (t = n.headToolList) ||
                        void 0 === t
                          ? void 0
                          : t.map(function (e, t) {
                              return (0, I.BX)(
                                v.View,
                                {
                                  className: " _Rm _Sm _Tm _dc _p -ga -ha",
                                  onClick: function () {
                                    o(e.linkUrl);
                                  },
                                  children: [
                                    (0, I.tZ)(v.View, {
                                      className: " _Um _sb _hk",
                                      children: e.title,
                                    }),
                                    (0, I.tZ)(v.View, {
                                      className: " _Vm _Wm _C _Xm _yc _Ym",
                                      children: e.subTitle,
                                    }),
                                    (0, I.tZ)(v.Image, {
                                      src: e.icon,
                                      className: " _Ef _db _u _t _q",
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                    }),
                    (0, I.tZ)(v.View, {
                      className: " _i _tm _Zm _an -ia",
                      children:
                        null == n ||
                        null === (i = n.tailToolList) ||
                        void 0 === i
                          ? void 0
                          : i.map(function (e, t) {
                              return (0, I.BX)(
                                v.View,
                                {
                                  className: " _i _bn _uj",
                                  onClick: function () {
                                    o(e.linkUrl);
                                  },
                                  children: [
                                    (0, I.tZ)(v.Image, {
                                      src: e.icon,
                                      className: " _cn _eg _jb",
                                    }),
                                    (0, I.tZ)(v.Text, {
                                      className: " _oc _rl",
                                      children: e.title,
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                    }),
                    (0, I.tZ)(v.View, {
                      className: " _Bb _dn _gn _hn _u _r _in",
                    }),
                    (0, I.tZ)(v.View, {
                      className: " _Qb _dn _Vb _u _r _t _oc _E _o _en _fn",
                      onClick: function () {
                        o(
                          "https://pages.suanya.com/spa/train/traintools.html?ishidenavbar=yes&isImmersiveMode=YES&source=1"
                        );
                      },
                      children: "更多",
                    }),
                  ],
                }),
                (0, I.tZ)(v.View, {
                  className: " _Vb _Pm _fc _Qm _p  _i _l _qd _jn",
                  children:
                    null === (a = n.buinessTools) || void 0 === a
                      ? void 0
                      : a.map(function (e, t) {
                          return (0, I.BX)(I.HY, {
                            children: [
                              (0, I.BX)(
                                v.View,
                                {
                                  className: " _kn _j _i _l _p _Cc",
                                  onClick: function () {
                                    !(function (e, t) {
                                      switch (e) {
                                        case "hotel":
                                          var i = {
                                            queryModel: {
                                              cityId:
                                                (null === ae.Bc ||
                                                void 0 === ae.Bc
                                                  ? void 0
                                                  : ae.Bc.cityId) || "2",
                                              cityName:
                                                (null === ae.Bc ||
                                                void 0 === ae.Bc
                                                  ? void 0
                                                  : ae.Bc.cityName) || "上海",
                                            },
                                          };
                                          w.Z.commonNavigator(
                                            "/pages/hotel/list/list?data=".concat(
                                              encodeURIComponent(
                                                JSON.stringify(i)
                                              )
                                            )
                                          );
                                          break;
                                        default:
                                          w.Z.commonNavigator(t);
                                      }
                                    })(e.type, e.linkUrl);
                                  },
                                  children: [
                                    (0, I.BX)(v.View, {
                                      style: "flex:1",
                                      children: [
                                        (0, I.BX)(v.View, {
                                          className: " _Xb _vl _p",
                                          children: [
                                            e.title,
                                            !!e.tagDesc &&
                                              (0, I.tZ)(v.View, {
                                                className:
                                                  " _u _Hi _Rj _O _Al _B _b _nn _on _pn",
                                                children: e.tagDesc,
                                              }),
                                          ],
                                        }),
                                        (0, I.tZ)(v.View, {
                                          className: " _Wm _D _Ac",
                                          children: e.subTitle,
                                        }),
                                      ],
                                    }),
                                    (0, I.tZ)(v.Image, {
                                      src: e.icon,
                                      className: " _ja _ln _mn",
                                    }),
                                  ],
                                },
                                t
                              ),
                              0 === t &&
                                (0, I.tZ)(v.View, {
                                  className: " _Bh _wl _Yf",
                                }),
                            ],
                          });
                        }),
                }),
              ],
            });
          });
        et.ZP.getPreSaleDays();
        var ai,
          ni,
          oi,
          ri = y.default.isTieyou
            ? [
                {
                  title: "火车票购票提醒",
                  tempId: "X1-vIt06A_tyhEfwKqbk0dbJPMAIO-G577rta3YN7H4",
                },
                {
                  title: "余票紧张提醒",
                  tempId: "jCO-_qw188Vies9QYILu7Mx3Ho_7ih3yniv9P7Cb6V0",
                },
                {
                  title: "行程价格变动提醒",
                  tempId: "wP2sHtK70KQEshaRse1DdNfmN5QLokkVEhMaJx6uUUM",
                },
              ]
            : [
                {
                  title: "火车票购票提醒",
                  tempId: "NdvyuBq2SJA1v9c5QcPwcsqbLUrdENKwG409niPJCK8",
                },
                {
                  title: "余票紧张提醒",
                  tempId: "Rr_-dvOh1mfMq6MldrOHIq8MXJN6JBCLEqXa0TUdqYY",
                },
              ],
          si = y.default.isTieyou
            ? [
                "BiGOEACDqJVRLGhj9DkjJavOdi4hYgWsFfnHza0Mo30",
                "3S55NALxQtALqUsoS1FFs9AVtGa_j2sf2T5HjO6-J80",
              ]
            : [
                "FIciOECXCI7SBoKgIWJARTg_pPYhbEMb2RKx-AGulUE",
                "2AbRyJUyEARzL0R3vWbKsnZ2FNVyAK2noUtV6eiB4wg",
              ],
          ci = y.default.isTieyou
            ? [
                "muocyLZx1NR1G9CoPkuqF8hV1jkEZ-oyDgSgRQFAsog",
                "3S55NALxQtALqUsoS1FFs9AVtGa_j2sf2T5HjO6-J80",
                "G7F5FqHIwreDStUmL6ipgz8Q5CUGGFcnQDlFgLzV6O0",
              ]
            : [
                "NdvyuBq2SJA1v9c5QcPwcsqbLUrdENKwG409niPJCK8",
                "bZWCIDYNgNlv34-d1B8c9KH_xCBBBpyICzsDuZKPVWA",
                "kXLnac15BL5LAygKgVCeA1F7-kxEwRlsz5BD3fQcwAw",
              ],
          li = 0,
          di = 1,
          ui = 2,
          hi =
            (0, C.h)(!0)(
              (Ut = (function (e) {
                (0, d.Z)(i, e);
                var t = (0, u.Z)(i);
                function i(e) {
                  var a;
                  return (
                    (0, s.Z)(this, i),
                    (a = t.call(this, e)),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "getHomeRecommendCouponInfo",
                      function () {
                        V.ZP.recommendFlag
                          ? a
                              .loadHotelRecommendInfo()
                              .then(function () {})
                              .catch(function () {
                                a.loadFlightCouponInfo();
                              })
                          : a.setState({
                              recommendCouponInfo: {},
                              recommendCouponBusinessType: li,
                            });
                      }
                    ),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "loadHotelRecommendInfo",
                      function () {
                        return new Promise(
                          (function () {
                            var e = (0, o.Z)(
                              (0, n.Z)().mark(function e(t, i) {
                                var o, r, s, c, l, d, u;
                                return (0, n.Z)().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.prev = 0),
                                            (r = a.state),
                                            (s = r.dStation),
                                            (c = r.isSmartSearch),
                                            (l = r.departInfo),
                                            (e.next = 4),
                                            (0, Z.s7)(
                                              {
                                                data: {
                                                  cityId: "",
                                                  cityName: c
                                                    ? (null == l
                                                        ? void 0
                                                        : l.name) || ""
                                                    : s,
                                                  testVersion: "C",
                                                },
                                              },
                                              {
                                                checkFrameworkLogin: !1,
                                                isLogin: !1,
                                              }
                                            )
                                          );
                                        case 4:
                                          1 !==
                                            (null == (d = e.sent)
                                              ? void 0
                                              : d.resultCode) ||
                                          w.Z.isEmptyObject(
                                            null == d ||
                                              null === (o = d.data) ||
                                              void 0 === o
                                              ? void 0
                                              : o.userRightsInfo
                                          )
                                            ? i()
                                            : (a.setState({
                                                recommendCouponInfo:
                                                  null == d ||
                                                  null === (u = d.data) ||
                                                  void 0 === u
                                                    ? void 0
                                                    : u.userRightsInfo,
                                                recommendCouponBusinessType: di,
                                              }),
                                              t()),
                                            (e.next = 11);
                                          break;
                                        case 8:
                                          (e.prev = 8),
                                            (e.t0 = e.catch(0)),
                                            i();
                                        case 11:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[0, 8]]
                                );
                              })
                            );
                            return function (t, i) {
                              return e.apply(this, arguments);
                            };
                          })()
                        );
                      }
                    ),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "loadHomepageCouponInfo",
                      function () {
                        (0, it.yqq)()
                          .then(function (e) {
                            var t;
                            1 !== (null == e ? void 0 : e.resultCode) ||
                            w.Z.isEmptyObject(null == e ? void 0 : e.couponData)
                              ? a.setState({ newCouponData: {} })
                              : (a.setState({ newCouponData: e.couponData }),
                                a.ubtTrace("s_trn_z_trace_10320660959", {
                                  bizKey:
                                    "z_mini_firstPage_newUser_coupon_button_show",
                                  buttonStatus:
                                    null != e &&
                                    null !== (t = e.couponData) &&
                                    void 0 !== t &&
                                    t.isReceive
                                      ? "2"
                                      : "1",
                                }));
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      }
                    ),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "requestVipRecommendInfo",
                      function () {
                        (0, k.E)({ source: 1 }, { checkFrameworkLogin: !1 })
                          .then(function (e) {
                            var t;
                            1 === (null == e ? void 0 : e.resultCode) &&
                            null != e &&
                            null !== (t = e.entitys) &&
                            void 0 !== t &&
                            t.length
                              ? a.setState({ memberRecommend: e })
                              : a.setState({ memberRecommend: null });
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      }
                    ),
                    (0, h.Z)((0, l.Z)(a), "requestInviteMember", function () {
                      return new Promise(function (e) {
                        if (a.hasPopDay(mt, 1))
                          return a.setState({ inviteMemberLink: "" }), void e();
                        (0, k.h9)(
                          {},
                          { checkLogin: !1, checkFrameworkLogin: !1 }
                        )
                          .then(function (t) {
                            var i = null == t ? void 0 : t.resData;
                            (null != i && i.isGoldCount) ||
                            (null != i && i.isPlatinumCount) ||
                            (null != i && i.isReceiveCount)
                              ? (a.setState({
                                  inviteMemberLink: null == i ? void 0 : i.link,
                                }),
                                g().setStorageSync(mt, {
                                  hasPop: !0,
                                  timeStamp: new Date().getTime() / 1e3,
                                }),
                                e())
                              : (a.setState({ inviteMemberLink: "" }), e());
                          })
                          .catch(function () {
                            return e();
                          });
                      });
                    }),
                    (0, h.Z)((0, l.Z)(a), "hasPopDay", function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1;
                      try {
                        var i = g().getStorageSync(e),
                          a = (null == i ? void 0 : i.hasPop) || !1,
                          n = new Date().getTime() / 1e3,
                          o = (null == i ? void 0 : i.timeStamp) || n;
                        return !!(a && n - o <= 24 * t * 60 * 60);
                      } catch (e) {
                        return !1;
                      }
                    }),
                    (0, h.Z)((0, l.Z)(a), "showNewCoupon", function () {
                      a.ubtTrace("c_trn_z_10320660959", {
                        bizKey: "z_mini_firstPage_newUser_coupon_button_click",
                      }),
                        a.setState({ isShowNewCoupon: !0 });
                    }),
                    (0, h.Z)((0, l.Z)(a), "closeNewCoupon", function () {
                      a.setState({ isShowNewCoupon: !1 });
                    }),
                    (0, h.Z)((0, l.Z)(a), "onClickRecentSearch", function (e) {
                      var t = a.state,
                        i = t.exchange,
                        n = void 0 !== i && i;
                      if (t.isSmartSearch) {
                        var o = n ? e.arriveInfo : e.departInfo,
                          r = n ? e.departInfo : e.arriveInfo;
                        a.setState({ departInfo: o, arriveInfo: r });
                      } else {
                        var s = n ? e[1] : e[0],
                          c = n ? e[0] : e[1];
                        a.setState({ dStation: s, aStation: c });
                      }
                    }),
                    (0, h.Z)((0, l.Z)(a), "onTravelGuide", function (e, t) {
                      "coupon" === t
                        ? a.gotoKaQuanPage()
                        : w.Z.commonNavigator(e);
                    }),
                    (0, h.Z)((0, l.Z)(a), "goHotelList", function () {
                      a.newUbtTrace("212480", {
                        bizKey: "hotel_train_home_recommend_click",
                      }),
                        a.navigateTo({
                          url: "/pages/hotel/list/list",
                          data: {
                            queryModel: { cityId: "2", cityName: "上海" },
                            fromPage: "train_home_ppxc",
                          },
                        });
                    }),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "onReceiveBussinessCoupon",
                      function () {
                        switch (a.state.recommendCouponBusinessType) {
                          case di:
                            a.onReceiveHotelCoupon();
                            break;
                          case ui:
                            a.onReceiveFlightCoupon();
                        }
                      }
                    ),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "onTimeoutForBusinessCoupon",
                      function () {
                        switch (a.state.recommendCouponBusinessType) {
                          case di:
                            a.loadHotelRecommendInfo();
                            break;
                          case ui:
                            a.loadFlightCouponInfo();
                        }
                      }
                    ),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "onReceiveHotelCoupon",
                      (0, o.Z)(
                        (0, n.Z)().mark(function e() {
                          var t;
                          return (0, n.Z)().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t = a.state.recommendCouponInfo),
                                    a.ubtTrace("215795", {
                                      bizKey:
                                        "hotel_train_home_cross_component_click",
                                      clickType: null == t ? void 0 : t.status,
                                    }),
                                    2 === (null == t ? void 0 : t.status)
                                      ? V.ZP.isLogin
                                        ? a.requestReceiveCouponByScene(t)
                                        : V.ZP.doLogin()
                                            .then(function () {})
                                            .catch(function () {})
                                      : (null == t ? void 0 : t.jumpUrl) &&
                                        a.navigateTo({ url: t.jumpUrl });
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )
                    ),
                    (0, h.Z)(
                      (0, l.Z)(a),
                      "requestReceiveCouponByScene",
                      (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e(t) {
                            var i, o;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (i = {
                                          scene: null == t ? void 0 : t.scene,
                                          promotionKeyList:
                                            null == t
                                              ? void 0
                                              : t.promotionKeyList,
                                        }),
                                        (e.next = 4),
                                        (0, Z.nG)({ data: i })
                                      );
                                    case 4:
                                      1 ===
                                      (null == (o = e.sent)
                                        ? void 0
                                        : o.resultCode)
                                        ? ((0, b.showToast)("领取成功"),
                                          a.loadHotelRecommendInfo())
                                        : (0, b.showToast)(
                                            (null == o ? void 0 : o.message) ||
                                              "领取失败，请稍后再试"
                                          ),
                                        (e.next = 11);
                                      break;
                                    case 8:
                                      (e.prev = 8),
                                        (e.t0 = e.catch(0)),
                                        (0, b.showToast)(
                                          "领取失败，请稍后再试"
                                        );
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 8]]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    ),
                    (a.state = {
                      isTieyou: y.default.isTieyou,
                      isWechat: y.default.isWechat,
                      trainGuideList: [],
                      notice: null,
                      dStation: "上海",
                      departInfo: {},
                      arriveInfo: {},
                      aStation: "北京",
                      monthDay: "2月9日",
                      dayInfo: "周二",
                      exchange: !1,
                      configDataList: [],
                      recentSearchList: [],
                      trainOrderDots: [],
                      remindingList: [],
                      trainAdInfos: null,
                      marketUserType: "",
                      marketCouponInfo: {},
                      marketModalInfo: {},
                      seckillOrder: null,
                      marketCouponModalInfo: {},
                      showType: "",
                      subscribeBannerVisible: !1,
                      subscribeModalInfo: {},
                      isStu: !1,
                      isShowStuTips: !1,
                      needCouponCardSubscribe: !1,
                      needOrderCardSubscribe: !1,
                      activityHomeInfo: null,
                      waitingPayOrderData: {
                        title: "",
                        orderList: [],
                        noticeList: [],
                      },
                      benefitMessageBannerVisible: !1,
                      jianlouPopInfo: null,
                      isShowNewCoupon: !1,
                      newCouponData: {},
                      isSmartSearch: !1,
                      isShowSpecialFlight: !1,
                      flightCouponPopInfo: null,
                      recommendCouponBusinessType: li,
                      recommendCouponInfo: {},
                      friendUrl: "",
                      memberRecommend: null,
                      subscribeBannerList: [],
                      extraInfoForTest: "",
                      travelGuide: [],
                      isShowLoseMemberUserPop: !1,
                      inviteMemberLink: "",
                      upgradeTicketUrl: "",
                      memberGrade: 0,
                      waitingTravelOrder: null,
                    }),
                    (a.exposeObj = {
                      ubtKeyName: "s_trn_z_trace_10320660959",
                      data: {
                        keyname: "s_trn_z_trace_10320660959",
                        keyid: "205921",
                        bizKey: "activityBannerShow",
                      },
                    }),
                    (a.hotelRecommend = {
                      ubtKeyName: "hotel_train_home_recommend_show",
                      data: { bizKey: "hotel_train_home_recommend_show" },
                    }),
                    (a.hasShowActivity = !1),
                    (a.isInitDidShow = !0),
                    a
                  );
                }
                return (
                  (0, c.Z)(i, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var e = this,
                          t = this.props.onLoadOpts;
                        this.setState({ isSmartSearch: !0 }, function () {
                          e.loadQueryFromStore(t), e.loadRecentSearchStore();
                        }),
                          te.B8.call(this, {
                            pageId: "421554",
                            adInfosName: "trainAdInfos",
                          }),
                          this.props.onShareDataUpdate &&
                            this.props.onShareDataUpdate("train", {
                              path: "/pages/home/index",
                            }),
                          this.loadGrabPreSaleList(),
                          this.loadNotice(),
                          et.ZP.updateTrainStationData(),
                          this.onPageShowRequest(),
                          this.checkMiniVersion();
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.isInitDidShow = !0;
                      },
                    },
                    {
                      key: "componentDidShow",
                      value: function () {
                        this.isInitDidShow || this.onPageShowRequest();
                      },
                    },
                    {
                      key: "checkMiniVersion",
                      value: function () {
                        if ("release" != y.default.envVersion) {
                          var e = at.fv.env,
                            t = at.fv.subEnv;
                          if ("prod" != e) {
                            var i = "";
                            at.fv.canary && (i = at.fv.canaryIdc),
                              this.setState({
                                extraInfoForTest: "netType:"
                                  .concat(e, ", ")
                                  .concat(i ? "idcInfo:" + i : "", ", ")
                                  .concat(
                                    "fat" ==
                                      (null == e ? void 0 : e.toLowerCase()) &&
                                      t
                                      ? "subEnv:" + t
                                      : ""
                                  ),
                              });
                          }
                        }
                      },
                    },
                    {
                      key: "onPageShowRequest",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), this.getConfig();
                                    case 2:
                                      this.getHomeCommonConfig(),
                                        this.getHomeCombinePop(),
                                        this.checkCouponSubscribeInfo(),
                                        this.checkOrderCardSubscribeInfo(),
                                        this.getTrainAndFlightOrderList(),
                                        this.getWaitingPayOrders(),
                                        this.getBenefitMessageSubscribeStatus(),
                                        this.showSpeedPackChangeTipPop(),
                                        this.newUbtTrace(
                                          "home_zxwechat_stationcoupon_icon_show"
                                        ),
                                        this.loadHomepageCouponInfo(),
                                        this.requestVipRecommendInfo(),
                                        this.requestTravelReminder(),
                                        this.requestHomePageCashBackTag(),
                                        this.requestIntergrationDailyAttendance();
                                    case 16:
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
                      key: "requestIntergrationDailyAttendance",
                      value: function () {
                        var e = this;
                        (0, k.$f)(
                          {},
                          { checkFrameworkLogin: !1, checkLogin: !1 }
                        )
                          .then(function (t) {
                            1 === (null == t ? void 0 : t.resultCode) &&
                              e.setState({ saleShop: t });
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      },
                    },
                    {
                      key: "getBenefitMessageSubscribeStatus",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              o = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((t = this.state.isTieyou),
                                        V.ZP.isLogin && !t)
                                      ) {
                                        e.next = 3;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 3:
                                      return (
                                        (e.prev = 3),
                                        (e.next = 6),
                                        (0, it.Obi)()
                                      );
                                    case 6:
                                      (i = e.sent) &&
                                        1 == i.resultCode &&
                                        ((a = !i.status),
                                        this.setState(
                                          { benefitMessageBannerVisible: a },
                                          function () {
                                            o.handleSubscribBannerData();
                                          }
                                        ),
                                        a && this.newUbtTrace(205283)),
                                        (e.next = 13);
                                      break;
                                    case 10:
                                      (e.prev = 10),
                                        (e.t0 = e.catch(3)),
                                        console.log(e.t0);
                                    case 13:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[3, 10]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "loadRecentSearchStore",
                      value: function () {
                        if (this.state.isSmartSearch) {
                          var e = oe.n1.get() || {};
                          this.setState({
                            recentSearchList: e.recentSearchList || [],
                          });
                        } else {
                          var t = oe.Wo.get() || {};
                          this.setState({
                            recentSearchList: t.recentSearchList || [],
                          });
                        }
                      },
                    },
                    {
                      key: "loadQueryFromStore",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e(t) {
                            var i,
                              a,
                              o,
                              r,
                              s,
                              c,
                              l,
                              d,
                              u,
                              h,
                              m,
                              p,
                              f,
                              v,
                              y,
                              b,
                              C,
                              k,
                              Z,
                              S;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (o = (a = t || {}).activityId),
                                        (r = void 0 === o ? "" : o),
                                        (s = a.fromStation),
                                        (c = void 0 === s ? "" : s),
                                        (l = a.toStation),
                                        (d = void 0 === l ? "" : l),
                                        (u = a.offsetDays),
                                        (h = void 0 === u ? 1 : u),
                                        (m = oe.vN.get() || {}),
                                        (p = X()().format("YYYY-MM-DD")),
                                        (f =
                                          (null === (i = m.date) || void 0 === i
                                            ? void 0
                                            : i.trim()) || p),
                                        (v = !!m.isGaotieOnly),
                                        X()(f || void 0).valueOf() <
                                          X()(p).valueOf() &&
                                          (f = X()()
                                            .add(
                                              Number.isNaN(+h) ? 1 : +h,
                                              "day"
                                            )
                                            .format("YYYY-MM-DD")),
                                        (y = X()(f).format("M月D日")),
                                        (b = w.Z.getCommonDayInfo(f)),
                                        t &&
                                          t.traceid &&
                                          this.newUbtTrace(t.traceid, {
                                            userName: V.ZP.userName || "",
                                            openid: V.ZP.openid || "",
                                            cid: V.ZP.cid || "",
                                          });
                                      try {
                                        r &&
                                          (g().setStorageSync(
                                            "activityId",
                                            decodeURIComponent(r)
                                          ),
                                          xe.Z.setAid(r));
                                      } catch (e) {
                                        console.log(e);
                                      }
                                      if (this.state.isSmartSearch) {
                                        e.next = 16;
                                        break;
                                      }
                                      (C =
                                        decodeURIComponent(c) ||
                                        m.dStation ||
                                        "上海"),
                                        (k =
                                          decodeURIComponent(d) ||
                                          m.aStation ||
                                          "北京"),
                                        this.setState({
                                          dStation: C,
                                          aStation: k,
                                          selectDate: f,
                                          monthDay: y,
                                          dayInfo: b,
                                          isGaotieOnly: v,
                                        }),
                                        (e.next = 59);
                                      break;
                                    case 16:
                                      if (((e.prev = 16), !c)) {
                                        e.next = 23;
                                        break;
                                      }
                                      return (
                                        (e.next = 20), this.remedyStationInfo(c)
                                      );
                                    case 20:
                                      (Z = e.sent), (e.next = 33);
                                      break;
                                    case 23:
                                      if (!m.departInfo) {
                                        e.next = 27;
                                        break;
                                      }
                                      (Z = m.departInfo), (e.next = 33);
                                      break;
                                    case 27:
                                      if (!m.dStation) {
                                        e.next = 33;
                                        break;
                                      }
                                      return (
                                        (e.next = 30),
                                        this.remedyStationInfo(m.dStation)
                                      );
                                    case 30:
                                      (Z = e.sent), (e.next = 33);
                                      break;
                                    case 33:
                                      e.next = 37;
                                      break;
                                    case 35:
                                      (e.prev = 35), (e.t0 = e.catch(16));
                                    case 37:
                                      if (((e.prev = 37), !d)) {
                                        e.next = 44;
                                        break;
                                      }
                                      return (
                                        (e.next = 41), this.remedyStationInfo(d)
                                      );
                                    case 41:
                                      (S = e.sent), (e.next = 54);
                                      break;
                                    case 44:
                                      if (!m.arriveInfo) {
                                        e.next = 48;
                                        break;
                                      }
                                      (S = m.arriveInfo), (e.next = 54);
                                      break;
                                    case 48:
                                      if (!m.aStation) {
                                        e.next = 54;
                                        break;
                                      }
                                      return (
                                        (e.next = 51),
                                        this.remedyStationInfo(m.aStation)
                                      );
                                    case 51:
                                      (S = e.sent), (e.next = 54);
                                      break;
                                    case 54:
                                      e.next = 58;
                                      break;
                                    case 56:
                                      (e.prev = 56), (e.t1 = e.catch(37));
                                    case 58:
                                      this.setState({
                                        departInfo: Z || {
                                          name: "上海",
                                          showName: "上海",
                                          areaId: "310000",
                                          province: "上海市",
                                          lng: 121.4802374,
                                          lat: 31.23630482,
                                        },
                                        arriveInfo: S || {
                                          name: "北京",
                                          showName: "北京",
                                          areaId: "110000",
                                          province: "北京市",
                                          lng: 116.41355402,
                                          lat: 39.91101332,
                                        },
                                        selectDate: f,
                                        monthDay: y,
                                        dayInfo: b,
                                        isGaotieOnly: v,
                                      });
                                    case 59:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [
                                [16, 35],
                                [37, 56],
                              ]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "remedyStationInfo",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e(t) {
                            var i, a, o, r, s, c, l;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (t) {
                                        e.next = 2;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 2:
                                      return (
                                        (e.next = 4),
                                        (0, tt.zP)({
                                          keyword: t,
                                          requestSource: "train",
                                        }).catch(function () {})
                                      );
                                    case 4:
                                      if (!(i = e.sent) || !i.areas) {
                                        e.next = 41;
                                        break;
                                      }
                                      (a = (0, J.Z)(i.areas)),
                                        (e.prev = 7),
                                        a.s();
                                    case 9:
                                      if ((o = a.n()).done) {
                                        e.next = 33;
                                        break;
                                      }
                                      if ((r = o.value).name != t) {
                                        e.next = 13;
                                        break;
                                      }
                                      return e.abrupt("return", {
                                        areaId: r.areaId,
                                        name: r.name,
                                        showName: r.showName,
                                        lat: r.lat,
                                        lng: r.lng,
                                      });
                                    case 13:
                                      if (
                                        !(r.stations && r.stations.length > 0)
                                      ) {
                                        e.next = 31;
                                        break;
                                      }
                                      (s = (0, J.Z)(r.stations)),
                                        (e.prev = 15),
                                        s.s();
                                    case 17:
                                      if ((c = s.n()).done) {
                                        e.next = 23;
                                        break;
                                      }
                                      if (
                                        (l = c.value).name != t ||
                                        "T" != l.stationType
                                      ) {
                                        e.next = 21;
                                        break;
                                      }
                                      return e.abrupt("return", {
                                        areaId: l.areaId,
                                        name: l.name,
                                        showName: l.showName,
                                        lat: l.lat,
                                        lng: l.lng,
                                        code: l.code,
                                      });
                                    case 21:
                                      e.next = 17;
                                      break;
                                    case 23:
                                      e.next = 28;
                                      break;
                                    case 25:
                                      (e.prev = 25),
                                        (e.t0 = e.catch(15)),
                                        s.e(e.t0);
                                    case 28:
                                      return (e.prev = 28), s.f(), e.finish(28);
                                    case 31:
                                      e.next = 9;
                                      break;
                                    case 33:
                                      e.next = 38;
                                      break;
                                    case 35:
                                      (e.prev = 35),
                                        (e.t1 = e.catch(7)),
                                        a.e(e.t1);
                                    case 38:
                                      return (e.prev = 38), a.f(), e.finish(38);
                                    case 41:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [
                                [7, 35, 38, 41],
                                [15, 25, 28, 31],
                              ]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "_goToAd",
                      value: function (e, t) {
                        var i = e.currentTarget.dataset.index,
                          a = void 0 === i ? 0 : i;
                        this.newUbtTrace("205922", {
                          bizKey: "activityBannerClick",
                          bannerid: t,
                        }),
                          te.Bj.call(this, {
                            index: a,
                            adInfosName: "trainAdInfos",
                            businessLineName: "trainAd",
                          });
                      },
                    },
                    {
                      key: "doLogin",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e(t) {
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        V.ZP.doLogin()
                                      );
                                    case 3:
                                      setTimeout(function () {
                                        t && t();
                                      }, 500),
                                        (e.next = 9);
                                      break;
                                    case 6:
                                      (e.prev = 6),
                                        (e.t0 = e.catch(0)),
                                        console.log(e.t0);
                                    case 9:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 6]]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getHomeCombinePop",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        this.checkSubscribeInfo()
                                      );
                                    case 3:
                                      return (
                                        (e.next = 5), this.getMemberLoseUser()
                                      );
                                    case 5:
                                      return (
                                        (e.next = 7),
                                        this.getJianlouTicketConfirmPop()
                                      );
                                    case 7:
                                      return (e.next = 9), this.upgradeTicket();
                                    case 9:
                                      return (
                                        (e.next = 11),
                                        this.requestInviteMember()
                                      );
                                    case 11:
                                      return (
                                        (e.next = 13),
                                        this.requestZtripWechatPartnerStatus()
                                      );
                                    case 13:
                                      this.getCommonMarketingRecommendDetail().then(
                                        function (e) {
                                          var i = t.state.showType,
                                            a = t.state,
                                            n = a.subscribeModalInfo,
                                            o = a.activityHomeInfo,
                                            r = a.isShowLoseMemberUserPop,
                                            s = a.jianlouPopInfo,
                                            c = a.inviteMemberLink,
                                            l = a.friendUrl,
                                            d = a.upgradeTicketUrl;
                                          if (
                                            !i &&
                                            e.alertModule &&
                                            1 === e.alertModule.type
                                          ) {
                                            var u = X()().format("YYYY/MM/DD");
                                            if (
                                              ((oe.pP.get() || {})
                                                .marketCouponPop || "") !== u
                                            )
                                              return (
                                                (i = "marketCouponPop"),
                                                t.setState({ showType: i }),
                                                t.newUbtTrace(190878),
                                                void oe.pP.setAttr(
                                                  "marketCouponPop",
                                                  u
                                                )
                                              );
                                          }
                                          var h = t.hasPopDay(ut, 1);
                                          if (!i && r && !h)
                                            return (
                                              t.setState({
                                                showType: "loseMemberUserPop",
                                              }),
                                              void g().setStorageSync(ut, {
                                                hasPop: !0,
                                                timeStamp:
                                                  new Date().getTime() / 1e3,
                                              })
                                            );
                                          if (
                                            !i &&
                                            (e.imgPopModule || e.spePopModule)
                                          ) {
                                            var m =
                                              (oe.pP.get() || {})
                                                .marketModalCid || [];
                                            if (-1 === m.indexOf(V.ZP.cid))
                                              return (
                                                (i = "marketUserPop"),
                                                t.setState({ showType: i }),
                                                m.push(V.ZP.cid),
                                                void oe.pP.setAttr(
                                                  "marketModalCid",
                                                  m
                                                )
                                              );
                                          }
                                          if (
                                            !i &&
                                            n &&
                                            n.subList &&
                                            n.subList.length
                                          ) {
                                            var p =
                                              (oe.pP.get() || {})
                                                .subscribeModalCid || [];
                                            if (-1 === p.indexOf(V.ZP.cid))
                                              return (
                                                (i = "subscribePop"),
                                                t.setState({ showType: i }),
                                                p.push(V.ZP.cid),
                                                void oe.pP.setAttr(
                                                  "subscribeModalCid",
                                                  p
                                                )
                                              );
                                          }
                                          !i &&
                                            o &&
                                            o.activityKey &&
                                            !t.hasShowActivity &&
                                            ((t.hasShowActivity = !0),
                                            t.setState({
                                              showType: "HomeActivity",
                                            }));
                                          var f = t.hasPopDay(ft, 1);
                                          return !d || i || f
                                            ? s && !i
                                              ? ((i = "jlConfirmPop"),
                                                void t.setState({
                                                  showType: i,
                                                }))
                                              : c && !i
                                              ? ((i = "inviteMember"),
                                                void t.setState({
                                                  showType: i,
                                                }))
                                              : l && !i
                                              ? ((i = "companyWechat"),
                                                void t.setState({
                                                  showType: i,
                                                }))
                                              : void 0
                                            : ((i = "upgradeTicket"),
                                              t.setState({ showType: i }),
                                              void g().setStorageSync(ft, {
                                                hasPop: !0,
                                                timeStamp:
                                                  new Date().getTime() / 1e3,
                                              }));
                                        }
                                      ),
                                        (e.next = 19);
                                      break;
                                    case 16:
                                      (e.prev = 16),
                                        (e.t0 = e.catch(0)),
                                        console.log(
                                          "getHomeCombinePop===>>",
                                          e.t0
                                        );
                                    case 19:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[0, 16]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getCommonMarketingRecommendDetail",
                      value: function () {
                        var e = this;
                        return new Promise(
                          (function () {
                            var t = (0, o.Z)(
                              (0, n.Z)().mark(function t(i, a) {
                                var o, r, s, c, l;
                                return (0, n.Z)().wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (t.prev = 0),
                                            (t.next = 3),
                                            (0, it.Ncn)(
                                              {
                                                channel: "wechatmini",
                                                source: "miniHome",
                                                fromPage: "Homepage",
                                              },
                                              {
                                                checkLogin: !1,
                                                checkFrameworkLogin: !1,
                                              }
                                            )
                                          );
                                        case 3:
                                          1 === (o = t.sent).resultCode
                                            ? ((s =
                                                JSON.parse(o.data || "{}") ||
                                                {}),
                                              (c = o.rightsBag),
                                              (l =
                                                e.hasPopDay(gt, 30) ||
                                                (null ===
                                                  (r =
                                                    g().getStorageSync(gt)) ||
                                                void 0 === r
                                                  ? void 0
                                                  : r.count) > 2),
                                              console.log(
                                                "getCommonMarketingRecommendDetail",
                                                s
                                              ),
                                              e.setState({
                                                marketCouponInfo: c
                                                  ? {}
                                                  : s.fixModule || {},
                                                marketModalInfo: {
                                                  imgPopModule: s.imgPopModule,
                                                  spePopModule: s.spePopModule,
                                                },
                                                marketUserType: s.type,
                                                marketCouponModalInfo:
                                                  s.alertModule || {},
                                                recommendCouponInfo: {},
                                                recommendCouponBusinessType: li,
                                                homeRightsBag: l ? null : c,
                                              }),
                                              i(s))
                                            : (e.setState({
                                                marketCouponInfo: {},
                                                marketUserType: "",
                                                homeRightsBag: null,
                                              }),
                                              e.getHomeRecommendCouponInfo(),
                                              i({})),
                                            (t.next = 11);
                                          break;
                                        case 7:
                                          (t.prev = 7),
                                            (t.t0 = t.catch(0)),
                                            e.getHomeRecommendCouponInfo(),
                                            a(t.t0);
                                        case 11:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[0, 7]]
                                );
                              })
                            );
                            return function (e, i) {
                              return t.apply(this, arguments);
                            };
                          })()
                        );
                      },
                    },
                    {
                      key: "onClickMarketCouponModal",
                      value: function () {
                        var e = this;
                        if ((this.newUbtTrace(190879), !!V.ZP.isLogin)) {
                          var t = this.state.marketCouponModalInfo;
                          "skip" === t.action
                            ? t.url &&
                              (P.Z.twebview({ data: { url: t.url } }),
                              this.doCouponCardSubscribe())
                            : this.setState({ showType: "" });
                        } else
                          V.ZP.doLogin()
                            .then(function () {
                              e.getCommonMarketingRecommendDetail()
                                .then(function (t) {
                                  t.alertModule &&
                                    1 === t.alertModule.type &&
                                    (e.setState({
                                      showType: "marketCouponPop",
                                    }),
                                    e.newUbtTrace(190878));
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                      },
                    },
                    {
                      key: "onClickMarketBannerGot",
                      value: function () {
                        var e = this;
                        if (!!V.ZP.isLogin) {
                          var t = this.state.marketCouponInfo;
                          t.url && P.Z.twebview({ data: { url: t.url } });
                        } else {
                          var i = "newUser" === this.state.marketUserType;
                          V.ZP.doLogin().then(
                            function () {
                              e.getCommonMarketingRecommendDetail()
                                .then(function (t) {
                                  var a = t.imgPopModule,
                                    n = t.spePopModule,
                                    o = t.fixModule || {};
                                  a || n
                                    ? e.setState({ showType: "marketUserPop" })
                                    : (o && o.url) ||
                                      !i ||
                                      g().showToast({
                                        title: "你已经是老朋友啦",
                                        icon: "none",
                                        duration: 2e3,
                                      });
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                            },
                            function () {
                              console.log("取消登录");
                            }
                          );
                        }
                      },
                    },
                    {
                      key: "onClickMarketBannerItem",
                      value: function (e) {
                        console.log("onClickMarketBannerItem:", e),
                          e &&
                            e.wechatMiniUrl &&
                            (w.Z.isTabUrl(e.wechatMiniUrl)
                              ? g().reLaunch({ url: e.wechatMiniUrl })
                              : this.navigateTo({ url: e.wechatMiniUrl }));
                      },
                    },
                    {
                      key: "newUbtTrace",
                      value: function (e, t) {
                        try {
                          this.ubtTrace(
                            e,
                            t || {
                              openId: V.ZP.openid || "",
                              userName: V.ZP.userName || "",
                              cid: V.ZP.cid || "",
                            }
                          );
                        } catch (e) {
                          console.log(e);
                        }
                      },
                    },
                    {
                      key: "getConfig",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              o,
                              r,
                              s,
                              c,
                              l,
                              d,
                              u,
                              h,
                              m,
                              p,
                              f,
                              g,
                              v,
                              b,
                              C,
                              w,
                              Z,
                              S,
                              N,
                              I;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = this.state.isTieyou),
                                        (e.prev = 1),
                                        (i = {
                                          keys: [
                                            "mini-fe-student-ticket",
                                            "mini-fe-index_sourcelist",
                                            "mini-fe-chuxingzhinan",
                                            "mini-fe-train-home-activities",
                                            "mini-fe-train-speedpack-change-tip",
                                            "mini-fe-index-sourceListV2",
                                            "mini-fe-train-home-inviteMember",
                                          ],
                                        }),
                                        (e.next = 5),
                                        (0, k.SZ)(i)
                                      );
                                    case 5:
                                      1 === (a = e.sent).resultCode &&
                                        ((m = (a || {}).configDataList),
                                        (f =
                                          null ===
                                            (o = (p =
                                              void 0 === m ? [] : m).find(
                                              function (e) {
                                                return (
                                                  "mini-fe-index-sourceListV2" ===
                                                  e.key
                                                );
                                              }
                                            )) ||
                                          void 0 === o ||
                                          null === (r = o.data) ||
                                          void 0 === r
                                            ? void 0
                                            : r[t ? "tieyou" : "zhixing"]),
                                        (g =
                                          null ===
                                            (s = p.find(function (e) {
                                              return (
                                                "mini-fe-chuxingzhinan" ===
                                                e.key
                                              );
                                            })) ||
                                          void 0 === s ||
                                          null === (c = s.data) ||
                                          void 0 === c
                                            ? void 0
                                            : c[t ? "tieyou" : "zhixing"]),
                                        (v =
                                          null ===
                                            (l = p.find(function (e) {
                                              return (
                                                "mini-fe-train-home-activities" ===
                                                e.key
                                              );
                                            })) || void 0 === l
                                            ? void 0
                                            : l.data),
                                        (b =
                                          null ===
                                            (d = p.find(function (e) {
                                              return (
                                                "mini-fe-train-speedpack-change-tip" ===
                                                e.key
                                              );
                                            })) ||
                                          void 0 === d ||
                                          null === (u = d.data) ||
                                          void 0 === u
                                            ? void 0
                                            : u[t ? "tieyou" : "zhixing"]),
                                        (C =
                                          null ===
                                            (h = p.find(function (e) {
                                              return (
                                                "mini-fe-train-home-inviteMember" ===
                                                e.key
                                              );
                                            })) || void 0 === h
                                            ? void 0
                                            : h.data),
                                        (w = oe.RI.get() || ""),
                                        (Z = Date.now()),
                                        (S =
                                          null == v
                                            ? void 0
                                            : v.find(function (e) {
                                                if (
                                                  !(
                                                    e &&
                                                    e.activityKey &&
                                                    e.startDate &&
                                                    e.endDate &&
                                                    e.active
                                                  )
                                                )
                                                  return !1;
                                                if (
                                                  e.miniType &&
                                                  e.miniType !=
                                                    y.default.miniType
                                                )
                                                  return !1;
                                                if (
                                                  e.miniBrand &&
                                                  e.miniBrand !=
                                                    (y.default.isTieyou
                                                      ? "tieyou"
                                                      : "zhixing")
                                                )
                                                  return !1;
                                                if (
                                                  w.indexOf(
                                                    "".concat(
                                                      e.activityKey,
                                                      ","
                                                    )
                                                  ) >= 0
                                                )
                                                  return !1;
                                                var t = X()(
                                                    e.startDate
                                                  ).valueOf(),
                                                  i = X()(e.endDate).valueOf();
                                                return !(Z < t || Z > i);
                                              })),
                                        y.default.isWechat ||
                                          (f =
                                            null === (N = f) || void 0 === N
                                              ? void 0
                                              : N.filter(function (e) {
                                                  return "加福利官" !== e.title;
                                                })),
                                        b &&
                                          b.isOpen &&
                                          b.imgUrl &&
                                          ((I = b.imgUrl),
                                          this.setState({
                                            speedPackChangeTipImage:
                                              I ||
                                              "https://images3.c-ctrip.com/ztrip/train_bin/22-04/gaimingtanchuang/img_tc_zhixingxcx@3x.png",
                                          })),
                                        this.setState({
                                          configDataList: p,
                                          trainSourceList:
                                            y.default.isWechat || y.default.isTT
                                              ? f
                                              : null,
                                          trainGuideList: g,
                                          activityHomeInfo: S,
                                          inviteMemberData: C,
                                        })),
                                        (e.next = 12);
                                      break;
                                    case 9:
                                      (e.prev = 9),
                                        (e.t0 = e.catch(1)),
                                        console.log(e.t0);
                                    case 12:
                                      return (
                                        (e.prev = 12),
                                        (this.isInitDidShow = !1),
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
                      key: "getHomeCommonConfig",
                      value: function () {
                        var e = (0, nt.gL)("home-travel-guide-v2") || {},
                          t = (0, nt.gL)("train-home-tools"),
                          i =
                            (null == e
                              ? void 0
                              : e[y.default.isTieyou ? "tieyou" : "zhixing"]) ||
                            [];
                        y.default.isKMFlight &&
                          i.filter(function (e) {
                            return "门票" !== e.title;
                          }),
                          this.setState({ travelGuide: i, trainTools: t });
                      },
                    },
                    {
                      key: "chooseDate",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i, a, o, r, s, c, l, d, u, h, m, p, f, g, v;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = this.state),
                                        (i = t.selectDate),
                                        (a = t.isStu),
                                        (o = t.configDataList),
                                        (r = o.find(function (e) {
                                          return (
                                            "mini-fe-student-ticket" === e.key
                                          );
                                        })),
                                        (s = X()().format("YYYY-MM-DD")),
                                        (c = X()()
                                          .add(ae.ET.preRobDays - 1, "day")
                                          .format("YYYY-MM-DD")),
                                        (l = ""),
                                        (d = s),
                                        (u = et.ZP.getCalendarInfo(c)),
                                        a && (l = r.data.indexPageTip),
                                        (h = X()(i).format("YYYY-MM-DD")),
                                        (e.prev = 9),
                                        (e.next = 12),
                                        null === (m = this.$CanlenderSeletor) ||
                                        void 0 === m
                                          ? void 0
                                          : m.trigger({
                                              calenderOpts: {
                                                beginDate: d,
                                                endDate: c,
                                                selectedDate: h,
                                                info: u,
                                                tip: l,
                                              },
                                            })
                                      );
                                    case 12:
                                      (p = e.sent),
                                        (f = X()(p).format("YYYY-MM-DD")),
                                        (g = X()(p).format("M月D日")),
                                        (v = w.Z.getCommonDayInfo(p)),
                                        this.setState({
                                          selectDate: f,
                                          monthDay: g,
                                          dayInfo: v,
                                        }),
                                        (e.next = 22);
                                      break;
                                    case 19:
                                      (e.prev = 19),
                                        (e.t0 = e.catch(9)),
                                        console.log("cancel select...");
                                    case 22:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[9, 19]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "loadNotice",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        (0, it.oHx)({ Channel: "tieyouwx" })
                                      );
                                    case 3:
                                      (t = e.sent),
                                        this.setState({ notice: t.NoticeInfo }),
                                        console.log("NoticeInfo", t),
                                        (e.next = 11);
                                      break;
                                    case 8:
                                      (e.prev = 8),
                                        (e.t0 = e.catch(0)),
                                        console.log("NoticeInfo error", e.t0);
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
                      key: "requestZtripWechatPartnerStatus",
                      value: function () {
                        var e = this;
                        return new Promise(function (t) {
                          if (e.hasPopDay(ht, 1))
                            return e.setState({ friendUrl: "" }), void t();
                          (0, k._S)(
                            { source: "miniHome", pageKey: "miniHome" },
                            { checkFrameworkLogin: !1 }
                          ).then(function (i) {
                            1 !== (null == i ? void 0 : i.resultCode) ||
                            (null != i && i.isWechatFriend)
                              ? (e.setState({ friendUrl: "" }), t())
                              : (e.setState({
                                  friendUrl: null == i ? void 0 : i.friendUrl,
                                }),
                                g().setStorageSync(ht, {
                                  hasPop: !0,
                                  timeStamp: new Date().getTime() / 1e3,
                                }),
                                t());
                          });
                        });
                      },
                    },
                    {
                      key: "requestTravelReminder",
                      value: function () {
                        var e = this,
                          t = oe.WG.get(),
                          i = null == t ? void 0 : t.bind12306;
                        (0, k.vi)(
                          {
                            account12306:
                              (null == i ? void 0 : i.userName12306) || "",
                          },
                          { checkFrameworkLogin: !1, checkLogin: !1 }
                        )
                          .then(function (t) {
                            e.setState({
                              waitingTravelOrder: {
                                order: null == t ? void 0 : t.order,
                                serviceList: null == t ? void 0 : t.serviceList,
                              },
                            });
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      },
                    },
                    {
                      key: "requestHomePageCashBackTag",
                      value: function () {
                        var e = this;
                        (0, k.NT)(
                          { sourceType: 1 },
                          { checkLogin: !1, checkFrameworkLogin: !1 }
                        )
                          .then(function (t) {
                            var i;
                            e.setState({
                              homeCashRightsTag:
                                null == t ||
                                null === (i = t.titleArray) ||
                                void 0 === i
                                  ? void 0
                                  : i[0],
                            });
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      },
                    },
                    {
                      key: "chooseStation",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e(t) {
                            var i,
                              a,
                              o,
                              r,
                              s,
                              c = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (i = t.currentTarget.dataset.type),
                                        (a = this.state),
                                        (o = a.exchange),
                                        (r = a.isSmartSearch),
                                        (s =
                                          ("d" == i ? 1 : 0) ^ (o ? 1 : 0)
                                            ? "出发"
                                            : "到达"),
                                        r
                                          ? P.Z.trainSmartCity(
                                              { title: s },
                                              function (e) {
                                                "d" == i
                                                  ? c.setState({
                                                      departInfo: e,
                                                    })
                                                  : c.setState({
                                                      arriveInfo: e,
                                                    });
                                              }
                                            )
                                          : P.Z.trainCity(
                                              { title: s },
                                              function (e) {
                                                "d" == i
                                                  ? c.setState({
                                                      dStation: e.stationName,
                                                      dStationCode:
                                                        e.stationCode,
                                                    })
                                                  : c.setState({
                                                      aStation: e.stationName,
                                                      aStationCode:
                                                        e.stationCode,
                                                    });
                                              }
                                            );
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
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "trainOrderCurrentChange",
                      value: function (e) {
                        var t = this.state.trainOrderDots.map(function (t, i) {
                          return !(i !== e.detail.current);
                        });
                        this.setState({ trainOrderDots: t });
                      },
                    },
                    {
                      key: "trainOrderDelete",
                      value: function (e) {
                        e.stopPropagation();
                        var t = e.currentTarget.dataset.item,
                          i = this.state.remindingList.filter(function (e) {
                            return e.OrderNumber !== t.orderNumber;
                          });
                        this.setState({ remindingList: i }),
                          this.trainOrderListComputed(i);
                      },
                    },
                    {
                      key: "trainOrderDetail",
                      value: function (e) {
                        var t = this,
                          i = e.currentTarget.dataset.item,
                          a = this,
                          n = X()().isSame(X()(i.departureDate), "day"),
                          o = function () {
                            t.setState({ needOrderCardSubscribe: !1 }),
                              a.navigateTo({
                                url: et.ZP.getTrainDetailUrl(i.orderNumber),
                              }),
                              g().setStorageSync(pt, {
                                hasPop: !0,
                                timeStamp: new Date().getTime() / 1e3,
                              });
                          };
                        !n && a.state.needOrderCardSubscribe
                          ? w.Z.doSubscribe(ci, "")
                              .then(function () {
                                o();
                              })
                              .catch(function () {
                                o();
                              })
                          : a.navigateTo({
                              url: et.ZP.getTrainDetailUrl(i.orderNumber),
                            });
                      },
                    },
                    {
                      key: "clearRecentSearch",
                      value: function (e) {
                        e.stopPropagation();
                        var t = this.state.isSmartSearch ? oe.n1 : oe.Wo,
                          i = "recentSearchList";
                        this.setState((0, h.Z)({}, i, [])), t.setAttr(i, []);
                      },
                    },
                    {
                      key: "exchangeStation",
                      value: function () {
                        this.setState({ exchange: !this.state.exchange });
                      },
                    },
                    {
                      key: "switchStu",
                      value: function () {
                        var e = this.state.isStu;
                        this.setState({ isStu: !e }),
                          ae.ET.isHideHomeStuTips
                            ? this.setState({ isShowStuTips: !1 })
                            : this.setState({ isShowStuTips: !e });
                      },
                    },
                    {
                      key: "switchChange",
                      value: function () {
                        this.setState({
                          isGaotieOnly: !this.state.isGaotieOnly,
                        });
                      },
                    },
                    {
                      key: "showNotice",
                      value: function () {
                        var e = this;
                        this.setState({ showType: "notice" }),
                          setTimeout(function () {
                            e.setState({ isFilterViewAnimation: !0 });
                          }, 10);
                      },
                    },
                    {
                      key: "hideNoticeBar",
                      value: function () {
                        this.setState({ notice: null });
                      },
                    },
                    {
                      key: "hideNotice",
                      value: function () {
                        var e = this;
                        this.setState({ isFilterViewAnimation: !1 }),
                          setTimeout(function () {
                            e.setState({ showType: "" });
                          }, 200);
                      },
                    },
                    {
                      key: "getQueryInfo",
                      value: function () {
                        if (this.state.isSmartSearch) {
                          var e = this.state,
                            t = e.departInfo,
                            i = e.arriveInfo,
                            a = e.exchange;
                          return {
                            date: e.selectDate,
                            isGaotieOnly: e.isGaotieOnly,
                            departInfo: a ? i : t,
                            arriveInfo: a ? t : i,
                          };
                        }
                        if (this.state.dStation != this.state.aStation) {
                          var n = {
                            date: this.state.selectDate,
                            isGaotieOnly: this.state.isGaotieOnly,
                          };
                          return (
                            this.state.exchange
                              ? ((n.dStation = this.state.aStation),
                                (n.dStationCode = this.state.aStationCode),
                                (n.aStation = this.state.dStation),
                                (n.aStationCode = this.state.dStationCode))
                              : ((n.dStation = this.state.dStation),
                                (n.dStationCode = this.state.dStationCode),
                                (n.aStation = this.state.aStation),
                                (n.aStationCode = this.state.aStationCode)),
                            n
                          );
                        }
                        g().showModal({
                          title: "温馨提示",
                          content: "出发和到达站不能相同，请重新选择",
                          success: function () {},
                        });
                      },
                    },
                    {
                      key: "updateRecentSearchStore",
                      value: function (e) {
                        if (this.state.isSmartSearch) {
                          var t = "recentSearchList",
                            i = (oe.n1.get()[t] || []).filter(function (t) {
                              return !(
                                t.departInfo.name === e.departInfo.name &&
                                t.arriveInfo.name === e.arriveInfo.name
                              );
                            });
                          i.splice(0, 0, e),
                            i.length > 4 && i.pop(),
                            oe.n1.setAttr(t, i),
                            this.loadRecentSearchStore();
                        } else {
                          var a = oe.Wo,
                            n = "recentSearchList",
                            o = ((a.get() || {})[n] || []).filter(function (t) {
                              return !(
                                t[0] === e.dStation && t[1] === e.aStation
                              );
                            });
                          o.splice(0, 0, [e.dStation, e.aStation]),
                            o.length > 4 && o.pop(),
                            a.setAttr(n, o),
                            this.loadRecentSearchStore();
                        }
                      },
                    },
                    {
                      key: "getTrainAndFlightOrderList",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        (0, it.ps6)(
                                          {},
                                          {
                                            checkLogin: !1,
                                            checkFrameworkLogin: !1,
                                          }
                                        )
                                      );
                                    case 3:
                                      (t = e.sent),
                                        w.Z.notEmptyArray(t.remindingList) &&
                                          (this.setState({
                                            remindingList: t.remindingList,
                                          }),
                                          this.trainOrderListComputed(
                                            t.remindingList
                                          )),
                                        (e.next = 10);
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(0)),
                                        console.log(e.t0);
                                    case 10:
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
                      key: "trainOrderListComputed",
                      value: function (e) {
                        var t = this,
                          i = e
                            .filter(function (e) {
                              return "train" === e.trafficType;
                            })
                            .map(function (e) {
                              var i = e.departStation,
                                a = e.arriveStation,
                                n = e.trafficNo,
                                o = e.OrderNumber;
                              return (0,
                              r.Z)((0, r.Z)({}, e), {}, { fromStation: i, toStation: a, trainNumber: n, orderNumber: o, timeStr: t.getTrainOrderTimeStr(e.departureDate, e.departureTime), lastDay: t.getTrainOrderLastDay(e.departureDate, e.departureTime) });
                            })
                            .filter(function (e) {
                              return !!e.lastDay;
                            })
                            .slice(0, 3);
                        this.setState({
                          trainOrderDots: i.map(function (e, t) {
                            return 0 === t;
                          }),
                        }),
                          i.some(function (e) {
                            var t =
                              new Date(
                                (
                                  e.departureDate +
                                  " " +
                                  e.departureTime +
                                  ":00"
                                ).replace(/-/g, "/")
                              ).getTime() - new Date().getTime();
                            return t > 0 && t <= 54e5;
                          }) &&
                            !this.trainOrderInterval &&
                            (this.trainOrderInterval = setInterval(function () {
                              var e = t.state.remindingList;
                              t.trainOrderListComputed(e);
                            }, 6e4));
                      },
                    },
                    {
                      key: "getTrainOrderTimeStr",
                      value: function (e, t) {
                        return e.slice(5, 7) + "月" + e.slice(8, 10) + "日" + t;
                      },
                    },
                    {
                      key: "getTrainOrderLastDay",
                      value: function (e, t) {
                        var i = new Date(
                            (e + " " + t + ":00").replace(/-/g, "/")
                          ).getTime(),
                          a = new Date(),
                          n = i - a.getTime();
                        if (n <= 0) return "";
                        if (n <= 54e5) {
                          var o = Math.floor(n / 60 / 60 / 1e3),
                            r = Math.floor((n - 60 * o * 60 * 1e3) / 60 / 1e3);
                          return 0 !== o
                            ? "".concat(o, "小时")
                            : "" + r !== 0
                            ? "".concat(r, "分后")
                            : "后";
                        }
                        if (n <= 864e5)
                          return "".concat(
                            Math.floor(n / 60 / 60 / 1e3),
                            "小时后"
                          );
                        var s = new Date(e.replace(/-/g, "/")),
                          c = new Date(
                            a.getFullYear() +
                              "/" +
                              (a.getMonth() + 1) +
                              "/" +
                              a.getDate()
                          ),
                          l = s.getTime() - c.getTime();
                        return l <= 432e6
                          ? "".concat(
                              Math.floor(l / 24 / 60 / 60 / 1e3),
                              "天后"
                            )
                          : "";
                      },
                    },
                    {
                      key: "search",
                      value: function () {
                        var e = this,
                          t = this.getQueryInfo(),
                          i = this.state,
                          a = i.isStu,
                          n = i.isSmartSearch;
                        if (t) {
                          if (
                            ((ae.ET.isHideHomeStuTips = !0),
                            oe.vN.set(t),
                            this.updateRecentSearchStore(t),
                            !n)
                          ) {
                            var o = [
                              "中国香港",
                              "中国香港西九龙",
                              "中国香港红磡",
                            ];
                            o.findIndex(function (e) {
                              return e === t.dStation;
                            }) > -1 && (t.dStation = t.dStation.slice(2)),
                              o.findIndex(function (e) {
                                return e === t.aStation;
                              }) > -1 && (t.aStation = t.aStation.slice(2));
                          }
                          this.ubtTrace("205922", {
                            bizKey: "z_mini_firstPage_trainInquiry_click",
                            departStation: n ? t.departInfo.name : t.dStation,
                            arriveStation: n ? t.arriveInfo.name : t.aStation,
                            departDate: t.date,
                            isStudent: a ? "1" : "0",
                            isHighSpeed: t.isGaotieOnly ? "1" : "0",
                          });
                          !(function () {
                            e.preRequestTab4TrainList(n, t);
                            var i = n
                              ? "/pages/train/list/list?departInfo="
                                  .concat(
                                    encodeURIComponent(
                                      JSON.stringify(t.departInfo)
                                    ),
                                    "&arriveInfo="
                                  )
                                  .concat(
                                    encodeURIComponent(
                                      JSON.stringify(t.arriveInfo)
                                    ),
                                    "&date="
                                  )
                                  .concat(t.date, "&isGaotieOnly=")
                                  .concat(!!t.isGaotieOnly, "&isStudent=")
                                  .concat(a ? 1 : 0, "&fromPage=trainHome")
                              : "/pages/train/list/list?dstation="
                                  .concat(t.dStation, "&astation=")
                                  .concat(t.aStation, "&date=")
                                  .concat(t.date, "&isGaotieOnly=")
                                  .concat(!!t.isGaotieOnly, "&isStudent=")
                                  .concat(a ? 1 : 0, "&fromPage=trainHome");
                            e.navigateTo({ url: i });
                          })();
                        }
                      },
                    },
                    {
                      key: "preRequestTab4TrainList",
                      value: function (e, t) {
                        var i = t.dStation,
                          a = t.aStation,
                          n = t.departInfo,
                          o = t.arriveInfo,
                          r = t.date,
                          s = { version: "4", departureDate: r };
                        e
                          ? (s.newSearchCondition = {
                              fromLocation: n.name,
                              fromStationType: n.stationType || "",
                              fromAreaId: n.areaId,
                              toLocation: o.name,
                              toStationType: o.stationType || "",
                              toAreaId: o.areaId,
                              departDate: r,
                            })
                          : ((s.departureName = i),
                            (s.arrivalName = a),
                            (s.departureDate = r)),
                          (0, it.$B2)(s, {
                            cacheControl: {
                              useCache: !0,
                              maxAge: 1e4,
                              dedup: !0,
                            },
                          });
                      },
                    },
                    {
                      key: "trainAdExposureCount",
                      value: function (e) {
                        var t = e.detail.current || 0,
                          i = this.state.trainAdInfos[t].bannerId;
                        this.trainBannerShownMap ||
                          (this.trainBannerShownMap = new Map()),
                          this.trainAdExposureCountFlag &&
                            !this.trainBannerShownMap.get(i) &&
                            (te.II.call(this, {
                              index: t,
                              adInfosName: "trainAdInfos",
                            }),
                            this.trainBannerShownMap.set(i, !0));
                      },
                    },
                    {
                      key: "gotoLateQueryPage",
                      value: function () {
                        this.navigateTo({
                          url: "/pages/trainminor/zhengwandian/zhengwandian",
                        });
                      },
                    },
                    {
                      key: "goMarketPage",
                      value: function () {
                        this.navigateTo({
                          url: "/pages/activity/train/shareInfoSet/index",
                        });
                      },
                    },
                    {
                      key: "gotoDaPingPage",
                      value: function () {
                        this.navigateTo({
                          url: "/pages/trainminor/daping/daping",
                        });
                      },
                    },
                    {
                      key: "goJumpUrl",
                      value: function (e) {
                        var t = e.currentTarget.dataset.item,
                          i = void 0 === t ? {} : t,
                          a = i.jumpUrl,
                          n = void 0 === a ? "" : a,
                          o = i.title;
                        (this.newUbtTrace(205922, {
                          bizKey: "marketEntranceClick",
                          detail: o,
                        }),
                        n) &&
                          (w.Z.isH5Url(n)
                            ? (n.includes("activity/20200907-ztrip-kanjia") &&
                                this.doCouponCardSubscribe(),
                              P.Z.twebview({ data: { url: n } }))
                            : this.navigateTo({ url: n }));
                      },
                    },
                    {
                      key: "gotoKaQuanPage",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((t =
                                          "/pages/usercenter/kaquan/kaquan"),
                                        !V.ZP.isLogin)
                                      ) {
                                        e.next = 5;
                                        break;
                                      }
                                      this.navigateTo({ url: t }),
                                        (e.next = 14);
                                      break;
                                    case 5:
                                      return (
                                        (e.prev = 5),
                                        (e.next = 8),
                                        V.ZP.doLogin()
                                      );
                                    case 8:
                                      this.navigateTo({ url: t }),
                                        (e.next = 14);
                                      break;
                                    case 11:
                                      (e.prev = 11),
                                        (e.t0 = e.catch(5)),
                                        console.log(e.t0);
                                    case 14:
                                      this.doCouponCardSubscribe();
                                    case 15:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[5, 11]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "loadGrabPreSaleList",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              o,
                              r,
                              s,
                              c,
                              l,
                              d = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (V.ZP.isLogin) {
                                        e.next = 2;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 2:
                                      return (
                                        (e.prev = 2),
                                        (0, b.showLoading)(),
                                        (e.next = 6),
                                        (0, it.Q1G)(
                                          { pageIndex: 1, pageSize: 20 },
                                          {
                                            checkLogin: !1,
                                            checkFrameworkLogin: !1,
                                          }
                                        )
                                      );
                                    case 6:
                                      if (
                                        !(t = e.sent).resultCode ||
                                        1 !== t.resultCode
                                      ) {
                                        e.next = 34;
                                        break;
                                      }
                                      if (
                                        ((i = t.grabOrders),
                                        (a =
                                          g().getStorageSync(
                                            "shownSecKillPopList"
                                          ) || []),
                                        !(Array.isArray(i) && i.length > 0))
                                      ) {
                                        e.next = 32;
                                        break;
                                      }
                                      (o = i.filter(function (e) {
                                        var t = X()(e.preSaleTime || "").diff(
                                          X()(),
                                          "minute"
                                        );
                                        return (
                                          201 === e.orderStatusInfo.code &&
                                          e.canSecKill &&
                                          t > 5 &&
                                          t < 10
                                        );
                                      })),
                                        (r = (0, J.Z)(o)),
                                        (e.prev = 13),
                                        (c = function () {
                                          var e = s.value;
                                          return a.some(function (t) {
                                            return t === e.orderNumber;
                                          })
                                            ? "continue"
                                            : (a.push(e.orderNumber),
                                              g().setStorageSync(
                                                "shownSecKillPopList",
                                                a
                                              ),
                                              d.setState({
                                                showType: "secKillPop",
                                                seckillOrder: e,
                                              }),
                                              "break");
                                        }),
                                        r.s();
                                    case 16:
                                      if ((s = r.n()).done) {
                                        e.next = 24;
                                        break;
                                      }
                                      if ("continue" !== (l = c())) {
                                        e.next = 20;
                                        break;
                                      }
                                      return e.abrupt("continue", 22);
                                    case 20:
                                      if ("break" !== l) {
                                        e.next = 22;
                                        break;
                                      }
                                      return e.abrupt("break", 24);
                                    case 22:
                                      e.next = 16;
                                      break;
                                    case 24:
                                      e.next = 29;
                                      break;
                                    case 26:
                                      (e.prev = 26),
                                        (e.t0 = e.catch(13)),
                                        r.e(e.t0);
                                    case 29:
                                      return (e.prev = 29), r.f(), e.finish(29);
                                    case 32:
                                      e.next = 34;
                                      break;
                                    case 34:
                                      e.next = 39;
                                      break;
                                    case 36:
                                      (e.prev = 36),
                                        (e.t1 = e.catch(2)),
                                        console.log(e.t1);
                                    case 39:
                                      return (
                                        (e.prev = 39),
                                        (0, b.hideLoading)(),
                                        e.finish(39)
                                      );
                                    case 42:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [
                                [2, 36, 39, 42],
                                [13, 26, 29, 32],
                              ]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "hideCommonModal",
                      value: function () {
                        this.setState({ showType: "" });
                      },
                    },
                    {
                      key: "onClickMarketModalBtn",
                      value: function () {
                        this.setState({ showType: "" });
                        var e = this.state.marketModalInfo;
                        e && e.imgPopModule && e.imgPopModule.url
                          ? P.Z.twebview({ data: { url: e.imgPopModule.url } })
                          : e &&
                            e.spePopModule &&
                            e.spePopModule.url &&
                            P.Z.twebview({ data: { url: e.spePopModule.url } });
                      },
                    },
                    {
                      key: "gotoTrainGuide",
                      value: function (e) {
                        var t = e.currentTarget.dataset.index,
                          i = void 0 === t ? 0 : t,
                          a = this.state.trainGuideList,
                          n = (void 0 === a ? [] : a)[i].url;
                        n && P.Z.twebview({ data: { url: n } });
                      },
                    },
                    {
                      key: "checkSubscribeInfo",
                      value: function () {
                        var e = this;
                        return new Promise(function (t) {
                          if (!V.ZP.isLogin || y.default.isH5) return t();
                          var i = ri.map(function (e) {
                            return e.tempId;
                          });
                          w.Z.getSubscribe(i)
                            .then(function (i) {
                              var a = i.mainSwitch,
                                n = i.unKnownList;
                              if (
                                (console.log("getSubscribegetSubscribe", a, n),
                                !a || !(Array.isArray(n) && n.length > 0))
                              )
                                return (
                                  e.setState(
                                    {
                                      subscribeBannerVisible: !1,
                                      subscribeModalInfo: {},
                                    },
                                    function () {
                                      e.handleSubscribBannerData();
                                    }
                                  ),
                                  t()
                                );
                              e.setState(
                                {
                                  subscribeBannerVisible: !0,
                                  subscribeModalInfo: {
                                    title: "开启提醒",
                                    desc: "高峰期购票优惠不错过，各线路实时开售提醒。",
                                    subList: ri.filter(function (e) {
                                      return null == n
                                        ? void 0
                                        : n.includes(e.tempId);
                                    }),
                                    sourceCode: "MiniProgram_Home_Popup",
                                  },
                                },
                                function () {
                                  e.handleSubscribBannerData();
                                }
                              ),
                                y.default.isWechat &&
                                  e.newUbtTrace(191176, {
                                    openid: V.ZP.openid || "",
                                    cid: V.ZP.cid || "",
                                  }),
                                t();
                            })
                            .catch(function (e) {
                              console.log(e), t();
                            });
                        });
                      },
                    },
                    {
                      key: "getMemberLoseUser",
                      value: function () {
                        var e = this;
                        return new Promise(function (t) {
                          (0, k.Gt)(
                            {},
                            { checkLogin: !1, checkFrameworkLogin: !1 }
                          )
                            .then(function (i) {
                              var a;
                              e.setState({
                                isShowLoseMemberUserPop: !(
                                  null == i ||
                                  null === (a = i.data) ||
                                  void 0 === a ||
                                  !a.status
                                ),
                              }),
                                t();
                            })
                            .catch(function () {
                              return t();
                            });
                        });
                      },
                    },
                    {
                      key: "checkCouponSubscribeInfo",
                      value: function () {
                        var e = this;
                        y.default.isWechat &&
                          V.ZP.isLogin &&
                          (this.state.needCouponCardSubscribe ||
                            w.Z.getSubscribe(si).then(function (t) {
                              var i = t.mainSwitch,
                                a = t.unKnownList;
                              i &&
                                Array.isArray(a) &&
                                a.length > 0 &&
                                e.setState({ needCouponCardSubscribe: !0 });
                            }));
                      },
                    },
                    {
                      key: "checkOrderCardSubscribeInfo",
                      value: function () {
                        var e = this;
                        y.default.isWechat &&
                          "dt" !== y.default.jetpack &&
                          V.ZP.isLogin &&
                          !this.state.needOrderCardSubscribe &&
                          (this.hasPopDay(pt, 7)
                            ? this.setState({ needOrderCardSubscribe: !1 })
                            : w.Z.getSubscribe(ci).then(function (t) {
                                var i = t.mainSwitch,
                                  a = t.unKnownList;
                                i && Array.isArray(a) && a.length > 0
                                  ? e.setState({ needOrderCardSubscribe: !0 })
                                  : e.setState({ needOrderCardSubscribe: !1 });
                              }));
                      },
                    },
                    {
                      key: "doCouponCardSubscribe",
                      value: function () {
                        var e = this;
                        this.state.needCouponCardSubscribe &&
                          w.Z.doSubscribe(si, "")
                            .then(function () {
                              e.setState({ needCouponCardSubscribe: !1 });
                            })
                            .catch(function (e) {
                              console.warn("doCouponCardSubscribe Error", e);
                            });
                      },
                    },
                    {
                      key: "onSubscribeModalInfoSuccess",
                      value: function () {
                        var e = this;
                        this.setState(
                          { subscribeBannerVisible: !1 },
                          function () {
                            e.handleSubscribBannerData();
                          }
                        );
                      },
                    },
                    {
                      key: "onClickSubscribeBanner",
                      value: function () {
                        var e = this,
                          t = this.state.subscribeModalInfo.subList.map(
                            function (e) {
                              return e.tempId;
                            }
                          );
                        console.log("inin", t),
                          w.Z.doSubscribe(t, "MiniProgram_Home_Module")
                            .then(function () {
                              e.checkSubscribeInfo();
                            })
                            .catch(function (t) {
                              console.warn("订阅结果失败:", t),
                                e.checkSubscribeInfo();
                            }),
                          this.newUbtTrace(191177, {
                            openid: V.ZP.openid || "",
                            cid: V.ZP.cid || "",
                          });
                      },
                    },
                    {
                      key: "goHomeActivityPage",
                      value: function (e) {
                        this.onHomeActivityPopClose(e),
                          w.Z.commonNavigator(e.jumpUrl);
                      },
                    },
                    {
                      key: "onHomeActivityPopClose",
                      value: function (e) {
                        if (
                          (this.setState({ showType: "" }), e && e.activityKey)
                        ) {
                          var t = oe.RI.get() || "";
                          oe.RI.set("".concat(t).concat(e.activityKey, ","));
                        }
                      },
                    },
                    {
                      key: "getWaitingPayOrders",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (V.ZP.isLogin) {
                                        e.next = 2;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 2:
                                      return (
                                        (e.prev = 2),
                                        (e.next = 5),
                                        (0, it.MbE)()
                                      );
                                    case 5:
                                      (t = e.sent) && 1 === t.resultCode
                                        ? ((i = {
                                            title: t.actionTitle,
                                            orderList: t.waitPayOrders,
                                            noticeList: t.noticeList,
                                          }),
                                          this.setState({
                                            waitingPayOrderData: i,
                                          }),
                                          i.orderList &&
                                            i.orderList.length > 0 &&
                                            this.newUbtTrace("xcx_topay_show"),
                                          console.log(
                                            "WaitingPayOrderInfo success: " + t
                                          ))
                                        : this.setState({
                                            waitingPayOrderData: null,
                                          }),
                                        (e.next = 12);
                                      break;
                                    case 9:
                                      (e.prev = 9),
                                        (e.t0 = e.catch(2)),
                                        console.log(
                                          "WaitingPayOrderInfo error: " + e.t0
                                        );
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
                      key: "getJianlouTicketConfirmPop",
                      value: function () {
                        var e = this;
                        return new Promise(function (t) {
                          V.ZP.isLogin
                            ? (0, it.rtT)(
                                {},
                                { checkLogin: !1, checkFrameworkLogin: !1 }
                              )
                                .then(function (i) {
                                  if (i && 1 === i.resultCode) {
                                    var a = i.nonSmartTicket || {},
                                      n = a.ticketDetail,
                                      o = {
                                        departDateStr: n.departureDate || "",
                                        arriveDateStr: n.arrivalDate || "",
                                        trainNumber: n.trainNo || "",
                                        departStation: n.departureStation || "",
                                        arriveStation: n.arrivalStation || "",
                                        departTime: n.departureTime || "",
                                        arriveTime: n.arrivalTime || "",
                                        costTime: n.duration || "",
                                      },
                                      r = {
                                        passengerNames: n.passenger,
                                        seatName: n.seatName,
                                        title: a.title,
                                        subTitle: a.text,
                                        btnName: a.buttonText,
                                        btnUrl: a.targetUrl,
                                        ticketInfo: o,
                                      };
                                    e.setState({ jianlouPopInfo: r }), t();
                                  } else e.setState({ jianlouPopInfo: null }), t();
                                })
                                .catch(function (e) {
                                  console.log(
                                    "getJianlouTicketConfirmPop error: " + e
                                  ),
                                    t();
                                })
                            : t();
                        });
                      },
                    },
                    {
                      key: "upgradeTicket",
                      value: function () {
                        var e = this;
                        return new Promise(function (t) {
                          (0, k.kG)(
                            {},
                            { checkLogin: !1, checkFrameworkLogin: !1 }
                          )
                            .then(function (i) {
                              e.setState({
                                memberGrade:
                                  (null == i ? void 0 : i.grade) || 0,
                              }),
                                (0, k.hC)(
                                  { fromPage: "tupIndexAw", version: 3 },
                                  { checkLogin: !1, checkFrameworkLogin: !1 }
                                )
                                  .then(function (i) {
                                    1 === (null == i ? void 0 : i.resultCode)
                                      ? (e.setState({
                                          upgradeTicketUrl:
                                            null == i ? void 0 : i.jumpUrl,
                                        }),
                                        t())
                                      : (e.setState({ upgradeTicketUrl: "" }),
                                        t());
                                  })
                                  .catch(function () {
                                    return t();
                                  });
                            })
                            .catch(function () {
                              return t();
                            });
                        });
                      },
                    },
                    {
                      key: "showSpeedPackChangeTipPop",
                      value: function () {
                        var e = this.state.speedPackChangeTipImage,
                          t = oe.RI.get() || "";
                        e &&
                          -1 === t.indexOf("SpeedPackChangeTipPop") &&
                          (this.setState({ showType: "speedPackChangeTipPop" }),
                          oe.RI.set("".concat(t, "SpeedPackChangeTipPop,")));
                      },
                    },
                    {
                      key: "gotoTickect",
                      value: function () {
                        this.newUbtTrace(
                          "home_zxwechat_stationcoupon_icon_click"
                        ),
                          this.navigateTo({
                            url: "/pages/taroCRN/ticket/pages/index/index?source=main_wechat",
                          });
                      },
                    },
                    {
                      key: "onClickBenefitBanner",
                      value: function () {
                        var e = "https://".concat(
                          y.default.h5domain,
                          "/webapp/train/activity/20211125-ztrip-official-account-to-qw?source=miniHomeGuide"
                        );
                        P.Z.twebview({ data: { url: e } }),
                          this.newUbtTrace(205284);
                      },
                    },
                    {
                      key: "loadFlightCouponInfo",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i, a, o, r, s;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        (0, se.bz)(
                                          {},
                                          {
                                            checkFrameworkLogin: !1,
                                            isLogin: !1,
                                          }
                                        )
                                      );
                                    case 3:
                                      if (
                                        1 != (t = e.sent).resultCode ||
                                        w.Z.isEmptyObject(
                                          null == t ? void 0 : t.data
                                        )
                                      ) {
                                        e.next = 26;
                                        break;
                                      }
                                      (o = -1),
                                        (e.t0 = t.data.status),
                                        (e.next =
                                          1 === e.t0 || 2 === e.t0
                                            ? 9
                                            : 3 === e.t0
                                            ? 11
                                            : 4 === e.t0
                                            ? 13
                                            : 5 === e.t0
                                            ? 15
                                            : 17);
                                      break;
                                    case 9:
                                      return (o = 2), e.abrupt("break", 18);
                                    case 11:
                                      return (o = 1), e.abrupt("break", 18);
                                    case 13:
                                      return (o = -1), e.abrupt("break", 18);
                                    case 15:
                                      return (o = 4), e.abrupt("break", 18);
                                    case 17:
                                      return e.abrupt("break", 18);
                                    case 18:
                                      if (-1 != o) {
                                        e.next = 21;
                                        break;
                                      }
                                      return (
                                        this.setState({
                                          isShowSpecialFlight:
                                            t.data.specialLineFlag,
                                          recommendCouponInfo: {},
                                          recommendCouponBusinessType: li,
                                        }),
                                        e.abrupt("return")
                                      );
                                    case 21:
                                      (r =
                                        t.data.deadLineTime &&
                                        X()(t.data.deadLineTime).diff(
                                          X()(),
                                          "second"
                                        )),
                                        (s =
                                          null === (i = t.data.subTitles) ||
                                          void 0 === i
                                            ? void 0
                                            : i.map(function (e) {
                                                return {
                                                  tagImage: e.icon,
                                                  content: e.content,
                                                };
                                              })),
                                        this.setState({
                                          recommendCouponInfo: {
                                            title:
                                              (null == t ||
                                              null === (a = t.data) ||
                                              void 0 === a
                                                ? void 0
                                                : a.title) || "",
                                            couponRightInfo: {
                                              couponTitlePrefix: "￥",
                                              couponTitle:
                                                t.data.couponAmount || "",
                                              couponContent:
                                                t.data.couponTitle || "",
                                              remainingTime: r > 0 ? r : "",
                                              couponTag: t.data.subCouponTitle,
                                              buttonText: t.data.button,
                                            },
                                            contentListV2: s || [],
                                            status: o,
                                            defaultInfo: t.data.outInfo || [],
                                          },
                                          isShowSpecialFlight:
                                            t.data.specialLineFlag,
                                          recommendCouponBusinessType: ui,
                                        }),
                                        (e.next = 27);
                                      break;
                                    case 26:
                                      this.setState({
                                        recommendCouponInfo: {},
                                        recommendCouponBusinessType: li,
                                      });
                                    case 27:
                                      e.next = 32;
                                      break;
                                    case 29:
                                      (e.prev = 29),
                                        (e.t1 = e.catch(0)),
                                        console.log(e.t1);
                                    case 32:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[0, 29]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "closeFlightCouponPop",
                      value: function () {
                        this.setState({ flightCouponPopInfo: null });
                      },
                    },
                    {
                      key: "gotoFlightHomePage",
                      value: function () {
                        var e;
                        this.closeFlightCouponPop(),
                          null === (e = this.props) ||
                            void 0 === e ||
                            e.onSwitchTab("flight");
                      },
                    },
                    {
                      key: "onReceiveFlightCoupon",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((t = this.state.recommendCouponInfo),
                                        this.ubtTrace("205922", {
                                          bizKey: "FLTReserveModule Click",
                                          couponType:
                                            2 == (null == t ? void 0 : t.status)
                                              ? "0"
                                              : 1 ==
                                                (null == t ? void 0 : t.status)
                                              ? "1"
                                              : "-1",
                                        }),
                                        1 != t.status)
                                      ) {
                                        e.next = 6;
                                        break;
                                      }
                                      return (
                                        re.Z.recordFromPage("special_coupon"),
                                        this.gotoFlightHomePage(),
                                        e.abrupt("return")
                                      );
                                    case 6:
                                      (0, se.vx)()
                                        .then(function (e) {
                                          var t, a;
                                          1 == e.resultCode
                                            ? (i.setState({
                                                flightCouponPopInfo: {
                                                  popTitle:
                                                    (null === (t = e.data) ||
                                                    void 0 === t
                                                      ? void 0
                                                      : t.couponTitle) || "",
                                                  couponList:
                                                    (null === (a = e.data) ||
                                                    void 0 === a
                                                      ? void 0
                                                      : a.coupons) || [],
                                                },
                                              }),
                                              i.loadFlightCouponInfo())
                                            : (0, b.showToast)(
                                                (null == e
                                                  ? void 0
                                                  : e.resultMessage) ||
                                                  "领取失败，请稍后再试"
                                              );
                                        })
                                        .catch(function () {
                                          (0,
                                          b.showToast)("领取失败，请稍后再试");
                                        });
                                    case 7:
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
                      key: "onRecommendBusinessBannerClick",
                      value: function (e) {
                        var t = this.state.recommendCouponInfo;
                        if (e == ui) {
                          if (4 == (null == t ? void 0 : t.status))
                            return (
                              this.ubtTrace("205922", {
                                bizKey: "FLTReserveModule Click",
                                couponType: "-1",
                              }),
                              re.Z.recordFromPage("special_normal"),
                              void this.gotoFlightHomePage()
                            );
                          this.onReceiveFlightCoupon();
                        }
                      },
                    },
                    {
                      key: "handleSubscribBannerData",
                      value: function () {
                        var e = this.state,
                          t = e.subscribeBannerVisible,
                          i = e.benefitMessageBannerVisible,
                          a = e.isTieyou,
                          n = [];
                        if (i) {
                          var o = a
                              ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_mini_fuli_ty.png"
                              : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_mini_fuli_zx.png",
                            r = this.onClickBenefitBanner.bind(this),
                            s = {
                              title: "<font color=".concat(
                                a ? "#3c4365" : "#2b4f84",
                                ">内部福利通道</font>"
                              ),
                              subTitle: "<font color="
                                .concat(
                                  a ? "rgba(60, 67, 101, 0.8)" : "#55719c",
                                  ">"
                                )
                                .concat(
                                  t
                                    ? "领特惠价 · 优惠券"
                                    : "领特惠价优惠券等内部福利",
                                  "</font>"
                                ),
                              buttonTxt: "去加入",
                              icon: o,
                              clickFunc: r,
                            };
                          n.push(s);
                        }
                        if (t) {
                          var c = a
                              ? "https://images3.c-ctrip.com/zt/wechat/train/subscribe/icon_message_ty.png"
                              : "https://images3.c-ctrip.com/zt/wechat/train/subscribe/icon_message_zx.png",
                            l = this.onClickSubscribeBanner.bind(this),
                            d = {
                              title: "<font color="
                                .concat(a ? "#3c4365" : "#2b4f84", ">")
                                .concat(
                                  i
                                    ? "开启购票提醒"
                                    : "是否需要提醒您 高峰期提前购票？",
                                  "</font>"
                                ),
                              subTitle: "<font color="
                                .concat(
                                  a ? "rgba(60, 67, 101, 0.8)" : "#55719c",
                                  ">"
                                )
                                .concat(
                                  i
                                    ? "高峰提醒 · 抢票更容易"
                                    : "开启提醒，高峰期余票情况早知道",
                                  "</font>"
                                ),
                              buttonTxt: "去开启",
                              icon: c,
                              clickFunc: l,
                            };
                          n.push(d);
                        }
                        n.length > 0 &&
                          this.setState({ subscribeBannerList: n });
                      },
                    },
                    {
                      key: "closeStudentBanner",
                      value: function () {
                        var e;
                        this.setState({ homeRightsBag: null });
                        var t =
                          (null === (e = g().getStorageSync(gt)) || void 0 === e
                            ? void 0
                            : e.count) || 0;
                        g().setStorageSync(gt, {
                          hasPop: !0,
                          count: t + 1,
                          timeStamp: new Date().getTime() / 1e3,
                        });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e,
                          t = this,
                          i = this.props.hidden,
                          a = this.state,
                          n = a.notice,
                          o = a.dStation,
                          r = a.aStation,
                          s = a.departInfo,
                          c = a.arriveInfo,
                          l = a.exchange,
                          d = a.monthDay,
                          u = a.dayInfo,
                          h = a.isGaotieOnly,
                          m = a.isStu,
                          p = a.isTieyou,
                          f = a.recentSearchList,
                          g = a.isSmartSearch,
                          b = a.trainSourceList,
                          C = a.trainAdInfos,
                          k = a.isWechat,
                          Z = a.showType,
                          N = a.isFilterViewAnimation,
                          T = a.marketCouponInfo,
                          x = a.seckillOrder,
                          _ = a.marketModalInfo,
                          D = a.subscribeModalInfo,
                          B = a.marketCouponModalInfo,
                          P = (a.isShowStuTips, a.waitingPayOrderData),
                          M = a.jianlouPopInfo,
                          A = a.activityHomeInfo,
                          L = a.speedPackChangeTipImage,
                          H = a.recommendCouponInfo,
                          X = void 0 === H ? {} : H,
                          O = a.isShowNewCoupon,
                          F = a.newCouponData,
                          Y = void 0 === F ? {} : F,
                          R = a.isShowSpecialFlight,
                          z = a.flightCouponPopInfo,
                          U = a.friendUrl,
                          E = a.memberRecommend,
                          j = a.inviteMemberLink,
                          G = a.inviteMemberData,
                          W = a.subscribeBannerList,
                          K = a.recommendCouponBusinessType,
                          q = a.extraInfoForTest,
                          Q = a.travelGuide,
                          J = a.upgradeTicketUrl,
                          $ = a.memberGrade,
                          ee = a.homeRightsBag,
                          te = a.waitingTravelOrder,
                          ie = a.homeCashRightsTag,
                          ae = a.saleShop,
                          ne = g ? s.name || "" : o,
                          oe = g ? c.name || "" : r;
                        return (0, I.BX)(v.View, {
                          className: "train-module ".concat(p ? "ty" : "zx"),
                          style: "display: ".concat(i ? "none" : "block"),
                          children: [
                            (0, I.BX)(v.View, {
                              className: w.Z.mergeGrayStyle(),
                              children: [
                                (0, I.tZ)(kt, {
                                  notice: n,
                                  showNotice: this.showNotice.bind(this),
                                  hideNoticeBar: this.hideNoticeBar.bind(this),
                                  departStationName: ne,
                                  arriveStationName: oe,
                                  exchange: l,
                                  exchangeStation: this.exchangeStation,
                                  monthDay: d,
                                  dayInfo: u,
                                  isStu: m,
                                  chooseDate: this.chooseDate.bind(this),
                                  isGaotieOnly: h,
                                  switchChange: this.switchChange.bind(this),
                                  switchStu: this.switchStu.bind(this),
                                  newCouponData: Y,
                                  showNewCoupon: this.showNewCoupon,
                                  search: this.search.bind(this),
                                  chooseStation: this.chooseStation.bind(this),
                                  recentSearchList: f,
                                  isSmartSearch: g,
                                  clearRecentSearch:
                                    this.clearRecentSearch.bind(this),
                                  homeCashRightsTag: ie,
                                  onClickRecentSearch: function (e) {
                                    return t.onClickRecentSearch(e);
                                  },
                                }),
                                !!q && (0, I.tZ)(v.Text, { children: q }),
                                (0, I.tZ)(ii, {
                                  trainTools: this.state.trainTools,
                                }),
                                (null == Q ? void 0 : Q.length) > 0 &&
                                  (0, I.tZ)(Jt, {
                                    travelGuide: Q,
                                    onTravelGuide: this.onTravelGuide,
                                  }),
                                te &&
                                  (0, I.tZ)(Mt, {
                                    order: null == te ? void 0 : te.order,
                                    services: te.serviceList,
                                    pageId: this.props.pageId,
                                    ubtTrace: this.ubtTrace,
                                  }),
                                (null == ee ||
                                null === (e = ee.rightsList) ||
                                void 0 === e
                                  ? void 0
                                  : e.length) > 0 &&
                                  (k || y.default.isTT) &&
                                  (0, I.tZ)(Tt, {
                                    rights: ee,
                                    close: this.closeStudentBanner,
                                  }),
                                P &&
                                  P.orderList &&
                                  P.orderList.length > 0 &&
                                  (0, I.tZ)(At, {
                                    orderData: P,
                                    getOrderList: this.getWaitingPayOrders,
                                    ubtTrace: this.newUbtTrace,
                                  }),
                                y.default.isWechat &&
                                  (0, I.tZ)(st.Z, {
                                    source: 0,
                                    ubtTrace: this.ubtTrace,
                                    isLogin: V.ZP.isLogin,
                                  }),
                                (null == b ? void 0 : b.length) > 0 &&
                                  !y.default.isTT &&
                                  (0, I.tZ)(Wt, {
                                    list: b,
                                    navigateTo: this.navigateTo,
                                    ubtTrace: this.ubtTrace,
                                  }),
                                !(null == ae || !ae.credit) &&
                                  (0, I.tZ)(ti, { data: ae }),
                                (k || y.default.isTT) &&
                                  T &&
                                  T.content &&
                                  (0, I.tZ)(It, {
                                    marketCouponInfo: T,
                                    onClickMarketBannerGot:
                                      this.onClickMarketBannerGot,
                                    onClickMarketBannerItem:
                                      this.onClickMarketBannerItem,
                                  }),
                                !w.Z.isEmptyObject(
                                  null == X ? void 0 : X.couponRightInfo
                                ) &&
                                  (0, I.tZ)(Rt, {
                                    data: X,
                                    businessType: K,
                                    onReceive: this.onReceiveBussinessCoupon,
                                    onTimeUp: this.onTimeoutForBusinessCoupon,
                                    ubtTrace: this.ubtTrace,
                                    onBannerClick:
                                      this.onRecommendBusinessBannerClick,
                                  }),
                                (0, I.tZ)(qt, { data: E }),
                                R && (0, I.tZ)(Gt, {}),
                                k &&
                                  W.length > 0 &&
                                  (0, I.tZ)(ct, {
                                    bannerList: W,
                                    customizeStyle: {
                                      singleBannerStyle: { paddingLeft: 6 },
                                      btnStyle: {
                                        color: p ? "#fc6e51" : "#0080ff",
                                        borderColor: p
                                          ? "rgba(252, 110, 81, 0.6)"
                                          : "rgba(0, 128, 255, 0.6)",
                                      },
                                    },
                                  }),
                                C &&
                                  C.length > 0 &&
                                  (0, I.tZ)(v.View, {
                                    className: "advs-banner autoExpose",
                                    "data-expose": this.exposeObj,
                                    children: (0, I.tZ)(v.Swiper, {
                                      className: "advs-banner-bd",
                                      autoplay: "true",
                                      interval: "3000",
                                      circular: "true",
                                      indicatorColor: "#E5E5E5",
                                      indicatorActiveColor: p
                                        ? "#FC6E51"
                                        : "#0080FF",
                                      onChange: this.trainAdExposureCount,
                                      children: C.map(function (e, i) {
                                        return (0, I.tZ)(
                                          v.SwiperItem,
                                          {
                                            children: (0, I.tZ)(v.View, {
                                              className: "item",
                                              children: (0, I.tZ)(v.Image, {
                                                className: "img",
                                                src: e.imgUrl,
                                                "data-index": i,
                                                id: "AYCq",
                                                onClick: function (i) {
                                                  return t._goToAd(
                                                    i,
                                                    e.bannerId
                                                  );
                                                },
                                              }),
                                            }),
                                          },
                                          "".concat(e.imgUrl, "_").concat(i)
                                        );
                                      }),
                                    }),
                                  }),
                                (0, I.tZ)(v.View, {
                                  className: "slogan",
                                  children: (0, I.tZ)(v.Image, {
                                    className: "img ".concat(
                                      y.default.isBaidu ? "swan" : ""
                                    ),
                                    src: p
                                      ? "https://images3.c-ctrip.com/ztrip/train.song/gonggong/img_slogan_ty@3x.png"
                                      : "https://images3.c-ctrip.com/ztrip/train.song/gonggong/img_slogan_xcx@3x.png",
                                  }),
                                }),
                              ],
                            }),
                            N &&
                              (0, I.tZ)(v.View, {
                                className: "tip-txt " + (N ? "active" : ""),
                                id: "AYCr",
                                onClick: this.hideNotice.bind(this),
                                children: (0, I.tZ)(v.View, {
                                  className: "wrapper",
                                  children: (0, I.BX)(v.View, {
                                    className: "train-notice-detail",
                                    children: [
                                      (0, I.tZ)(v.View, {
                                        className: "cblue",
                                        children: n && n.Title,
                                      }),
                                      (0, I.tZ)(v.View, {
                                        className: "p",
                                        children: n && n.Content,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            (0, I.tZ)(St, {
                              show: "secKillPop" === Z,
                              isTieyou: p,
                              onClose: this.hideCommonModal.bind(this),
                              oid: x ? x.orderNumber : "",
                              dStation: x ? x.fromStationName : "",
                              aStation: x ? x.toStationName : "",
                            }),
                            k &&
                              "marketUserPop" === Z &&
                              (0, I.tZ)(Nt, {
                                show: "marketUserPop" === Z,
                                isTieyou: p,
                                marketModalInfo: _,
                                onClickMarketModalBtn:
                                  this.onClickMarketModalBtn.bind(this),
                                onClose: this.hideCommonModal.bind(this),
                              }),
                            (0, I.tZ)(ot.Z, {
                              show: "subscribePop" === Z,
                              info: D,
                              onSuccess:
                                this.onSubscribeModalInfoSuccess.bind(this),
                              onFail: this.hideCommonModal.bind(this),
                              onCancel: this.hideCommonModal.bind(this),
                              onProcess: this.hideCommonModal.bind(this),
                            }),
                            "marketCouponPop" === Z &&
                              (0, I.tZ)(xt, {
                                show: "marketCouponPop" === Z,
                                isTieyou: p,
                                modalInfo: B,
                                onClickMarketCouponModal:
                                  this.onClickMarketCouponModal.bind(this),
                                onClose: this.hideCommonModal.bind(this),
                              }),
                            (0, I.tZ)(S.ZtActivityPop, {
                              show: "HomeActivity" === Z,
                              isShowClose: !0,
                              animation: "scale",
                              onClose: function () {
                                t.onHomeActivityPopClose(A);
                              },
                              onWrapClose: function () {
                                t.onHomeActivityPopClose(A);
                              },
                              children: (0, I.BX)(v.View, {
                                className: "home-activity-pop",
                                children: [
                                  (0, I.tZ)(v.Image, {
                                    className: "home-activity-img",
                                    src: null == A ? void 0 : A.backgroundUrl,
                                  }),
                                  (0, I.tZ)(v.Image, {
                                    className: "home-activity-btn",
                                    src: null == A ? void 0 : A.btnUrl,
                                    id: "AYCs",
                                    onClick: function () {
                                      t.goHomeActivityPage(A);
                                    },
                                  }),
                                ],
                              }),
                            }),
                            "jlConfirmPop" === Z &&
                              (0, I.tZ)(Ht, {
                                visible: "jlConfirmPop" === Z,
                                jianlouPopInfo: M,
                                navigateTo: this.navigateTo,
                                ubtTrace: this.ubtTrace,
                                onClose: function () {
                                  return t.setState({ showType: "" });
                                },
                              }),
                            "speedPackChangeTipPop" === Z &&
                              (0, I.tZ)(rt.Z, {
                                visible: "speedPackChangeTipPop" === Z,
                                imgSrc: L,
                                ubtTrace: this.ubtTrace,
                                onClose: function () {
                                  return t.setState({ showType: "" });
                                },
                              }),
                            (0, I.tZ)(Et, {
                              isShow: O,
                              onClose: this.closeNewCoupon,
                              data: Y,
                              receiveCb: this.loadHomepageCouponInfo,
                              ubtTrace: this.ubtTrace,
                            }),
                            z &&
                              (0, I.tZ)(jt, {
                                isShow: !!z,
                                couponInfo: z,
                                onClose: this.closeFlightCouponPop,
                                onBtnClick: function () {
                                  t.ubtTrace("205922", {
                                    bizKey: "FLTCouponPopUpClick",
                                  }),
                                    re.Z.recordFromPage("special_pop"),
                                    t.gotoFlightHomePage();
                                },
                                ubtTrace: this.ubtTrace,
                              }),
                            y.default.isWechat &&
                              !y.default.isTieyou &&
                              (0, I.tZ)(Kt, {
                                isShow: "companyWechat" === Z,
                                jumpUrl: U,
                                navigateTo: this.navigateTo,
                                onClose: function () {
                                  return t.setState({ showType: "" });
                                },
                              }),
                            (0, I.tZ)(Qt, {
                              isShow: "inviteMember" === Z,
                              jumpUrl: j,
                              onClose: function () {
                                return t.setState({ showType: "" });
                              },
                              data: G,
                            }),
                            "loseMemberUserPop" === Z &&
                              (0, I.tZ)(ei, {
                                close: function () {
                                  return t.setState({ showType: "" });
                                },
                              }),
                            "upgradeTicket" === Z &&
                              (0, I.tZ)(dt.Z, {
                                type: "UPGRADE_TICKET",
                                close: function () {
                                  return t.setState({ showType: "" });
                                },
                                jumpUrl: J,
                                vm: Number($),
                              }),
                            (0, I.tZ)(lt.Z, {
                              onRef: function (e) {
                                return (t.$CanlenderSeletor = e);
                              },
                            }),
                          ],
                        });
                      },
                    },
                  ]),
                  i
                );
              })(p.default.PureComponent))
            ) || Ut,
          mi = i(27113),
          pi = i(80626),
          fi = i(79404),
          gi = i(83358),
          vi = i(62607),
          yi = i(73130),
          bi = i(43163),
          Ci = i(59020),
          wi = i(35428),
          ki = i(34203),
          Zi = { priceStart: 0, priceLeft: 0, priceEnd: 0, priceRight: 0 },
          Si = g().getSystemInfoSync().windowWidth,
          Ni =
            (0, C.h)(!0)(
              (ai = (function (e) {
                (0, d.Z)(i, e);
                var t = (0, u.Z)(i);
                function i(e) {
                  var a;
                  return (
                    (0, s.Z)(this, i),
                    ((a = t.call(this, e)).state = {
                      isTieyou: y.default.isTieyou,
                      show: !1,
                      domVisible: !1,
                      filterList: [],
                      queryInfo: {},
                      priceInfo: {},
                      maxPrice: 0,
                      starInfo: {},
                      superStarInfo: {},
                      isLoading: !1,
                      slider: "left",
                    }),
                    a
                  );
                }
                return (
                  (0, c.Z)(i, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.initPage(this.props);
                      },
                    },
                    {
                      key: "UNSAFE_componentWillReceiveProps",
                      value: function (e) {
                        this.initPage(e);
                      },
                    },
                    {
                      key: "initPage",
                      value: function (e) {
                        var t = this,
                          i = this.state.domVisible;
                        e.visible !== i &&
                          (e.visible
                            ? this.setState(
                                {
                                  filterList: JSON.parse(
                                    JSON.stringify(
                                      e.modalInfo ? e.modalInfo.list : "[]"
                                    )
                                  ),
                                  queryInfo: e.modalInfo
                                    ? e.modalInfo.info
                                    : {},
                                  priceLevel: JSON.parse(JSON.stringify(Zi)),
                                },
                                (0, o.Z)(
                                  (0, n.Z)().mark(function i() {
                                    return (0, n.Z)().wrap(function (i) {
                                      for (;;)
                                        switch ((i.prev = i.next)) {
                                          case 0:
                                            return (
                                              (i.next = 2), t.getFilterData()
                                            );
                                          case 2:
                                            t.setState(
                                              { show: e.visible },
                                              function () {
                                                t.setState({
                                                  domVisible: e.visible,
                                                });
                                              }
                                            );
                                          case 3:
                                          case "end":
                                            return i.stop();
                                        }
                                    }, i);
                                  })
                                )
                              )
                            : (this.setState({ show: e.visible }),
                              setTimeout(function () {
                                t.setState({ domVisible: e.visible });
                              }, 200)));
                      },
                    },
                    {
                      key: "getFilterData",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              o,
                              s,
                              c = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (t = this.state),
                                        (i = t.queryInfo),
                                        (a = t.filterList),
                                        (o = t.priceLevel),
                                        (s = {
                                          data: {
                                            cityId: i.cityId,
                                            districtId: i.districtId,
                                            checkInDate: i.checkInDate,
                                            checkOutDate: i.checkOutDate,
                                            clientVersion: fi.Z.clientVersion,
                                            scenarios: ["4"],
                                          },
                                        }),
                                        this.setState({
                                          priceInfo: {},
                                          starInfo: {},
                                          isLoading: !0,
                                        });
                                      try {
                                        (0, Z.r3)(s)
                                          .then(function (e) {
                                            var t,
                                              i,
                                              n = e || {},
                                              s = n.resultCode,
                                              l = n.data,
                                              d = void 0 === l ? {} : l,
                                              u = {},
                                              h = {},
                                              m = {},
                                              p = 5e3,
                                              f = null;
                                            1 === s
                                              ? (d &&
                                                  d.filters &&
                                                  d.filters[0] &&
                                                  d.filters[0].subItems &&
                                                  d.filters[0].subItems.some(
                                                    function (e) {
                                                      return (
                                                        "15" === e.data.type
                                                      );
                                                    }
                                                  ) &&
                                                  ((u =
                                                    d.filters[0].subItems.find(
                                                      function (e) {
                                                        return (
                                                          "15" === e.data.type
                                                        );
                                                      }
                                                    )),
                                                  (p =
                                                    parseInt(
                                                      u.subItems[
                                                        u.subItems.length - 2
                                                      ].data.value.split("|")[0]
                                                    ) +
                                                    parseInt(
                                                      u.subItems[0].data.value.split(
                                                        "|"
                                                      )[1]
                                                    ))),
                                                d &&
                                                  d.filters &&
                                                  d.filters[0] &&
                                                  d.filters[0].subItems &&
                                                  d.filters[0].subItems.some(
                                                    function (e) {
                                                      return (
                                                        "16" === e.data.type
                                                      );
                                                    }
                                                  ) &&
                                                  (h =
                                                    d.filters[0].subItems.find(
                                                      function (e) {
                                                        return (
                                                          "16" === e.data.type
                                                        );
                                                      }
                                                    )),
                                                null != d &&
                                                  null !== (t = d.filters[0]) &&
                                                  void 0 !== t &&
                                                  null !== (i = t.subItems) &&
                                                  void 0 !== i &&
                                                  i.some(function (e) {
                                                    return "99" === e.data.type;
                                                  }) &&
                                                  (m =
                                                    d.filters[0].subItems.find(
                                                      function (e) {
                                                        return (
                                                          "99" === e.data.type
                                                        );
                                                      }
                                                    )),
                                                a.forEach(function (e) {
                                                  if (
                                                    "15|Range" !==
                                                    e.data.filterID
                                                  )
                                                    u.subItems.forEach(
                                                      function (t) {
                                                        if (
                                                          t.data.filterID ===
                                                          e.data.filterID
                                                        ) {
                                                          t.isSelected = !0;
                                                          var i =
                                                              t.data.value.split(
                                                                "|"
                                                              ),
                                                            a = i[0],
                                                            n =
                                                              "max" === i[1]
                                                                ? p
                                                                : i[1];
                                                          f = {
                                                            priceStart: a,
                                                            priceEnd: n,
                                                            priceLeft: parseInt(
                                                              (a / p) * 100
                                                            ),
                                                            priceRight:
                                                              parseInt(
                                                                ((p - n) / p) *
                                                                  100
                                                              ),
                                                          };
                                                        }
                                                      }
                                                    ),
                                                      h.subItems.forEach(
                                                        function (t) {
                                                          t.data.filterID ===
                                                            e.data.filterID &&
                                                            (t.isSelected = !0);
                                                        }
                                                      ),
                                                      m.subItems.forEach(
                                                        function (t) {
                                                          t.data.filterID ===
                                                            e.data.filterID &&
                                                            (t.isSelected = !0);
                                                        }
                                                      );
                                                  else {
                                                    var t =
                                                        e.data.value.split("|"),
                                                      i = t[0],
                                                      a =
                                                        "max" === t[1]
                                                          ? p
                                                          : t[1];
                                                    f = {
                                                      priceStart: i,
                                                      priceEnd: a,
                                                      priceLeft: parseInt(
                                                        (i / p) * 100
                                                      ),
                                                      priceRight: parseInt(
                                                        ((p - a) / p) * 100
                                                      ),
                                                    };
                                                  }
                                                }),
                                                c.setState({
                                                  priceInfo: u,
                                                  starInfo: h,
                                                  superStarInfo: m,
                                                  maxPrice: p,
                                                  priceLevel:
                                                    f ||
                                                    (0, r.Z)(
                                                      (0, r.Z)({}, o),
                                                      {},
                                                      { priceEnd: p }
                                                    ),
                                                }),
                                                (d.filters &&
                                                  0 !== d.filters.length) ||
                                                  c.getDataError())
                                              : c.getDataError();
                                          })
                                          .catch(function () {
                                            c.getDataError();
                                          })
                                          .finally(function () {
                                            c.setState({ isLoading: !1 });
                                          });
                                      } catch (e) {}
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
                      key: "getDataError",
                      value: function () {
                        g().showToast({
                          title: "网络错误，请稍后再试",
                          icon: "none",
                          duration: 1500,
                        }),
                          this.props.onClose();
                      },
                    },
                    {
                      key: "onClickPriceItem",
                      value: function (e) {
                        var t = e.isSelected,
                          i = this.state,
                          a = i.priceInfo,
                          n = i.maxPrice,
                          o = i.filterList.filter(function (e) {
                            return "15" !== e.data.type;
                          });
                        if (
                          (a.subItems.forEach(function (i) {
                            i.data.value === e.data.value
                              ? ((i.isSelected = !t), t || o.push(i))
                              : (i.isSelected = !1);
                          }),
                          this.setState({ priceInfo: a, filterList: o }),
                          t)
                        )
                          this.setState({
                            priceLevel: JSON.parse(JSON.stringify(Zi)),
                          });
                        else {
                          var r = e.data.value.split("|"),
                            s = r[0],
                            c = "max" === r[1] ? n : r[1];
                          this.setState({
                            priceLevel: {
                              priceStart: s,
                              priceEnd: c,
                              priceLeft: parseInt((s / n) * 100),
                              priceRight: parseInt(((n - c) / n) * 100),
                            },
                          });
                        }
                      },
                    },
                    {
                      key: "onClickStarItem",
                      value: function (e) {
                        var t = e.isSelected,
                          i = this.state,
                          a = i.starInfo,
                          n = i.superStarInfo,
                          o = i.filterList;
                        a.subItems.forEach(function (i) {
                          i.data.filterID === e.data.filterID &&
                            (i.isSelected = !t);
                        }),
                          n.subItems.forEach(function (i) {
                            i.data.filterID === e.data.filterID &&
                              (i.isSelected = !t);
                          }),
                          t
                            ? (o = o.filter(function (t) {
                                return !(e.data.filterID === t.data.filterID);
                              }))
                            : o.push(e),
                          this.setState({
                            starInfo: a,
                            superStarInfo: n,
                            filterList: o,
                          });
                      },
                    },
                    {
                      key: "priceStartMove",
                      value: function (e) {
                        if (!this.state.isLoading) {
                          var t = this.state,
                            i = t.priceLevel,
                            a = t.maxPrice,
                            n = parseInt(
                              ((e.touches[0].clientX - 35) / (Si - 73)) * 100
                            );
                          n <= 0
                            ? (n = 0)
                            : n > 100 - i.priceRight
                            ? (n = 100 - i.priceRight)
                            : n >= 100 && (n = 100),
                            (i.priceStart =
                              50 * parseInt(((n / 100) * a) / 50)),
                            (i.priceLeft = n),
                            this.setState({ priceLevel: i, slider: "left" });
                        }
                      },
                    },
                    {
                      key: "priceEndMove",
                      value: function (e) {
                        if (!this.state.isLoading) {
                          var t = this.state,
                            i = t.priceLevel,
                            a = t.maxPrice,
                            n = parseInt(
                              ((337 - e.touches[0].clientX) / (Si - 73)) * 100
                            );
                          n <= 0
                            ? (n = 0)
                            : n > 100 - i.priceLeft
                            ? (n = 100 - i.priceLeft)
                            : n >= 100 && (n = 100 - parseInt((50 / a) * 100)),
                            (i.priceEnd =
                              n >= 100
                                ? 50
                                : a - 50 * parseInt(((n / 100) * a) / 50)),
                            (i.priceRight =
                              n >= 100 ? 100 - parseInt((50 / a) * 100) : n),
                            this.setState({ priceLevel: i, slider: "right" });
                        }
                      },
                    },
                    {
                      key: "onPriceMoveEnd",
                      value: function () {
                        if (!this.state.isLoading) {
                          var e = this.state,
                            t = e.priceLevel,
                            i = e.maxPrice,
                            a = e.priceInfo,
                            n = e.filterList;
                          a.subItems.forEach(function (e) {
                            e.isSelected = !1;
                          }),
                            (n = n.filter(function (e) {
                              return "15" !== e.data.type;
                            }));
                          var o = a.subItems.find(function (e) {
                            return "15|Range" === e.data.filterID;
                          });
                          (o.data = (0, r.Z)(
                            (0, r.Z)({}, o.data),
                            {},
                            {
                              title: "¥"
                                .concat(t.priceStart, "-")
                                .concat(
                                  t.priceEnd !== i && t.priceEnd
                                    ? t.priceEnd
                                    : "不限"
                                ),
                              value: ""
                                .concat(t.priceStart, "|")
                                .concat(
                                  t.priceEnd !== i && t.priceEnd
                                    ? t.priceEnd
                                    : "max"
                                ),
                            }
                          )),
                            "0|max" !== o.data.value && n.push(o),
                            this.setState({ priceInfo: a, filterList: n });
                        }
                      },
                    },
                    {
                      key: "onClickReset",
                      value: function () {
                        var e = this.state,
                          t = e.priceInfo,
                          i = e.starInfo,
                          a = e.superStarInfo;
                        e.isLoading ||
                          (i.subItems.forEach(function (e) {
                            e.isSelected = !1;
                          }),
                          t.subItems.forEach(function (e) {
                            e.isSelected = !1;
                          }),
                          null == a ||
                            a.subItems.forEach(function (e) {
                              e.isSelected = !1;
                            }),
                          this.setState({
                            priceInfo: t,
                            starInfo: i,
                            superStarInfo: a,
                            priceLevel: JSON.parse(JSON.stringify(Zi)),
                            filterList: [],
                          }));
                      },
                    },
                    {
                      key: "onClickComfirm",
                      value: function () {
                        var e = this.state,
                          t = e.isLoading,
                          i = e.filterList;
                        if (!t) {
                          var a = i.sort(function (e, t) {
                            return (
                              parseInt(e.data.type) - parseInt(t.data.type)
                            );
                          });
                          this.props.onComfirm(a);
                        }
                      },
                    },
                    {
                      key: "onClickClose",
                      value: function () {
                        this.props.onClose();
                      },
                    },
                    {
                      key: "onClickStarIntruduction",
                      value: function () {
                        this.newUbtTrace(184173, "hotel_home_pricedesc");
                        var e = "https://"
                          .concat(
                            y.default.h5domain,
                            "/webapp/train/activity/ztrip-hotel-star-intruduction/?isHideNavBar=YES&titleBgColor="
                          )
                          .concat(encodeURIComponent("#ffffff"), "&titleColor=")
                          .concat(
                            encodeURIComponent("#000000"),
                            "&autoawaken=close&popup=close"
                          );
                        P.Z.twebview({ data: { url: e } });
                      },
                    },
                    {
                      key: "newUbtTrace",
                      value: function (e, t) {
                        try {
                          this.ubtTrace(e, t);
                        } catch (e) {
                          console.log(e);
                        }
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e,
                          t,
                          i = this,
                          a = this.state,
                          n = a.isTieyou,
                          o = a.show,
                          r = a.domVisible,
                          s = a.priceInfo,
                          c = a.maxPrice,
                          l = a.starInfo,
                          d = a.superStarInfo,
                          u = a.isLoading,
                          h = a.priceLevel,
                          m = a.slider;
                        return (0, I.tZ)(v.View, {
                          className: "common-hotel-hotel-filter-modal",
                          children:
                            r &&
                            (0, I.BX)(v.View, {
                              className:
                                (n ? "ty" : "zx") + " hotelfilter-modal",
                              children: [
                                (0, I.tZ)(v.View, {
                                  className:
                                    "modal-mask " + (o ? "visible" : "hidden"),
                                  id: "AYBS",
                                  onClick: this.onClickClose,
                                }),
                                (0, I.BX)(v.View, {
                                  className:
                                    "modal-view " + (o ? "visible" : "hidden"),
                                  children: [
                                    (0, I.BX)(v.View, {
                                      className: "modal-bar",
                                      children: [
                                        (0, I.tZ)(v.View, {
                                          className: "left-btn",
                                        }),
                                        (0, I.tZ)(v.View, {
                                          className: "title",
                                          children: "选择价格/星级",
                                        }),
                                        (0, I.tZ)(v.View, {
                                          className: "right-btn",
                                          children: (0, I.tZ)(v.Text, {
                                            className: "ifont-closed iconfont",
                                            id: "AYBT",
                                            onClick: this.onClickClose,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, I.BX)(v.View, {
                                      className: "modal-content",
                                      children: [
                                        (0, I.BX)(v.CustomWrapper, {
                                          children: [
                                            s &&
                                              s.subItems &&
                                              s.subItems[0] &&
                                              (0, I.BX)(v.View, {
                                                className: "price-content",
                                                children: [
                                                  (0, I.tZ)(v.View, {
                                                    className: "bar",
                                                    children: (0, I.BX)(
                                                      v.View,
                                                      {
                                                        className: "txt",
                                                        children: [
                                                          (0, I.tZ)(v.Text, {
                                                            children: "价格",
                                                          }),
                                                          (0, I.BX)(v.Text, {
                                                            className:
                                                              "value color-primary",
                                                            children: [
                                                              "￥",
                                                              h.priceStart,
                                                              "-",
                                                              h.priceEnd !==
                                                                c && h.priceEnd
                                                                ? h.priceEnd
                                                                : "不限",
                                                            ],
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, I.BX)(v.View, {
                                                    className: "line-box",
                                                    children: [
                                                      (0, I.BX)(v.View, {
                                                        className: "line-desc",
                                                        children: [
                                                          (0, I.tZ)(v.View, {
                                                            className:
                                                              "line-star",
                                                            children: "￥0",
                                                          }),
                                                          (0, I.tZ)(v.View, {
                                                            className:
                                                              "line-end",
                                                            children: "不限",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, I.tZ)(v.View, {
                                                        className: "slider-box",
                                                        children: (0, I.BX)(
                                                          v.View,
                                                          {
                                                            className:
                                                              "price-slider",
                                                            id: "hotel-filter-slider-line",
                                                            children: [
                                                              (0, I.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "line",
                                                                  children: (0,
                                                                  I.tZ)(
                                                                    v.View,
                                                                    {
                                                                      className:
                                                                        "bgcolor-primary cur",
                                                                      style:
                                                                        "left:" +
                                                                        h.priceLeft +
                                                                        "%;right:" +
                                                                        h.priceRight +
                                                                        "%",
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              (0, I.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "icon-slider start " +
                                                                    ("left" ===
                                                                    m
                                                                      ? "top-index"
                                                                      : ""),
                                                                  style:
                                                                    "left:" +
                                                                    h.priceLeft +
                                                                    "%",
                                                                  onTouchMove:
                                                                    this
                                                                      .priceStartMove,
                                                                  onTouchEnd:
                                                                    this
                                                                      .onPriceMoveEnd,
                                                                }
                                                              ),
                                                              (0, I.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "icon-slider end " +
                                                                    ("right" ===
                                                                    m
                                                                      ? "top-index"
                                                                      : ""),
                                                                  style:
                                                                    "right:" +
                                                                    h.priceRight +
                                                                    "%",
                                                                  onTouchMove:
                                                                    this
                                                                      .priceEndMove,
                                                                  onTouchEnd:
                                                                    this
                                                                      .onPriceMoveEnd,
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  u &&
                                                    (0, I.tZ)(v.View, {
                                                      className: "list-box",
                                                      children: [
                                                        1, 2, 3, 4,
                                                      ].map(function (e, t) {
                                                        return (0,
                                                        I.tZ)(v.View, { className: "box-loading" }, t);
                                                      }),
                                                    }),
                                                  !u &&
                                                    !!s.subItems &&
                                                    (0, I.tZ)(v.View, {
                                                      className: "list-box",
                                                      children: s.subItems.map(
                                                        function (e, t) {
                                                          return (0, I.tZ)(
                                                            p.default.Fragment,
                                                            {
                                                              children:
                                                                "15|Range" !==
                                                                  e.data
                                                                    .filterID &&
                                                                (0, I.tZ)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "box-item " +
                                                                      (e.isSelected
                                                                        ? "cur"
                                                                        : ""),
                                                                    id: "AYBU",
                                                                    onClick:
                                                                      i.onClickPriceItem.bind(
                                                                        i,
                                                                        e
                                                                      ),
                                                                    children:
                                                                      (0, I.tZ)(
                                                                        v.View,
                                                                        {
                                                                          className:
                                                                            "name",
                                                                          children:
                                                                            e
                                                                              .data
                                                                              .title,
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                            },
                                                            t
                                                          );
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            (null == l ||
                                            null === (e = l.subItems) ||
                                            void 0 === e
                                              ? void 0
                                              : e.length) > 0 &&
                                              (0, I.BX)(v.View, {
                                                className: "star-content",
                                                children: [
                                                  (0, I.BX)(v.View, {
                                                    className: "bar",
                                                    children: [
                                                      (0, I.tZ)(v.View, {
                                                        className: "txt",
                                                        children: (0, I.tZ)(
                                                          v.Text,
                                                          { children: "星级" }
                                                        ),
                                                      }),
                                                      (0, I.BX)(v.View, {
                                                        className:
                                                          "arr color-primary",
                                                        id: "AYBV",
                                                        onClick:
                                                          this
                                                            .onClickStarIntruduction,
                                                        children: [
                                                          "国内星级/钻级说明",
                                                          (0, I.tZ)(v.Text, {
                                                            className:
                                                              "ifont-arr iconfont",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  u &&
                                                    (0, I.tZ)(v.View, {
                                                      className: "list-box",
                                                      children: [
                                                        1, 2, 3, 4,
                                                      ].map(function (e, t) {
                                                        return (0,
                                                        I.tZ)(v.View, { className: "box-loading star" }, t);
                                                      }),
                                                    }),
                                                  !u &&
                                                    !!l.subItems &&
                                                    (0, I.tZ)(v.View, {
                                                      className: "list-box",
                                                      children: l.subItems.map(
                                                        function (e, t) {
                                                          return (
                                                            (e._name =
                                                              e.data.title),
                                                            -1 !==
                                                              e.data.title.indexOf(
                                                                "/"
                                                              ) &&
                                                              ((e._name =
                                                                e.data.title.split(
                                                                  "/"
                                                                )[0]),
                                                              (e._desc =
                                                                e.data.title.split(
                                                                  "/"
                                                                )[1])),
                                                            (0, I.BX)(
                                                              v.View,
                                                              {
                                                                className:
                                                                  "box-item " +
                                                                  (e.isSelected
                                                                    ? "cur"
                                                                    : ""),
                                                                id: "AYBW",
                                                                onClick:
                                                                  i.onClickStarItem.bind(
                                                                    i,
                                                                    e
                                                                  ),
                                                                children: [
                                                                  (0, I.tZ)(
                                                                    v.View,
                                                                    {
                                                                      className:
                                                                        "name",
                                                                      children:
                                                                        e._name,
                                                                    }
                                                                  ),
                                                                  e._desc &&
                                                                    (0, I.tZ)(
                                                                      v.View,
                                                                      {
                                                                        className:
                                                                          "desc",
                                                                        children:
                                                                          e._desc,
                                                                      }
                                                                    ),
                                                                ],
                                                              },
                                                              t
                                                            )
                                                          );
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            (null === (t = d.subItems) ||
                                            void 0 === t
                                              ? void 0
                                              : t.length) > 0 &&
                                              (0, I.tZ)(v.View, {
                                                className: "super-list-box",
                                                children: d.subItems.map(
                                                  function (e, t) {
                                                    var a,
                                                      n,
                                                      o = pi.ZP.Condition(
                                                        e.isSelected,
                                                        " cur"
                                                      ),
                                                      r = "box-item".concat(o);
                                                    return (
                                                      (e._name = e.data.title),
                                                      -1 !==
                                                        e.data.title.indexOf(
                                                          "/"
                                                        ) &&
                                                        ((e._name =
                                                          e.data.title.split(
                                                            "/"
                                                          )[0]),
                                                        (e._desc =
                                                          e.data.title.split(
                                                            "/"
                                                          )[1])),
                                                      (0, I.BX)(
                                                        v.View,
                                                        {
                                                          className: r,
                                                          id: "AYBX",
                                                          onClick:
                                                            i.onClickStarItem.bind(
                                                              i,
                                                              e
                                                            ),
                                                          children: [
                                                            (null ===
                                                              (a = e.extra) ||
                                                            void 0 === a
                                                              ? void 0
                                                              : a.picUrl) &&
                                                              (0, I.tZ)(
                                                                v.View,
                                                                {
                                                                  className:
                                                                    "left",
                                                                  children: (0,
                                                                  I.tZ)(
                                                                    v.Image,
                                                                    {
                                                                      src:
                                                                        null ===
                                                                          (n =
                                                                            e.extra) ||
                                                                        void 0 ===
                                                                          n
                                                                          ? void 0
                                                                          : n.picUrl,
                                                                      className:
                                                                        "icon",
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                            (0, I.BX)(v.View, {
                                                              className:
                                                                "right",
                                                              children: [
                                                                (0, I.tZ)(
                                                                  v.View,
                                                                  {
                                                                    className:
                                                                      "name",
                                                                    children:
                                                                      e._name,
                                                                  }
                                                                ),
                                                                e._desc &&
                                                                  (0, I.tZ)(
                                                                    v.View,
                                                                    {
                                                                      className:
                                                                        "desc",
                                                                      children:
                                                                        e._desc,
                                                                    }
                                                                  ),
                                                              ],
                                                            }),
                                                          ],
                                                        },
                                                        t
                                                      )
                                                    );
                                                  }
                                                ),
                                              }),
                                          ],
                                        }),
                                        (0, I.BX)(v.View, {
                                          className: "btn-content",
                                          children: [
                                            (0, I.tZ)(v.View, {
                                              className: "btn left",
                                              id: "AYBY",
                                              onClick: this.onClickReset,
                                              children: "重置",
                                            }),
                                            (0, I.tZ)(v.View, {
                                              className:
                                                "btn right bgcolor-primary",
                                              id: "AYBZ",
                                              onClick: this.onClickComfirm,
                                              children: "完成",
                                            }),
                                          ],
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
              })(p.default.Component))
            ) || ai,
          Ii = i(14203),
          Ti = i(48882),
          xi =
            "https://images3.c-ctrip.com/ztrip/hotel/2022/7/popup_nc@3x.webp",
          _i =
            "https://images3.c-ctrip.com/ztrip/hotel/t.ding/yaopin/popup_nc_tag@3x.webp",
          Di = p.default.memo(function (e) {
            var t,
              i,
              a,
              n,
              o = e.pageId,
              s = e.hasNewGuestPopImg,
              c = e.newGuestActivityInfo,
              l = e.hotelCouponModalInfo,
              d = e.onClickNewGuestGotCoupon,
              u = e.onHideCouponModal,
              h = e.onReceiveCouponInModal,
              m = (0, p.useState)(!1),
              f = (0, $.Z)(m, 2),
              g = f[0],
              y = f[1],
              C =
                1 ===
                (null === (t = l.couponPackage) || void 0 === t
                  ? void 0
                  : t.rowOrColumnType),
              w =
                (null === (i = l.couponPackage) || void 0 === i
                  ? void 0
                  : i.childCouponPackageItemList) || [],
              k = (
                (null === (a = l.couponPackage) || void 0 === a
                  ? void 0
                  : a.userRightsList) || []
              ).map(function (e) {
                return (0,
                r.Z)((0, r.Z)({}, e), {}, { isUserRight: !0, bottomTitle: e.subTitle, leftTitle: e.title });
              }),
              Z = (C ? k : w).slice(0, 3),
              S =
                null === (n = l.couponPackage) || void 0 === n
                  ? void 0
                  : n.buttonText,
              N = "".concat(8 * ((null == Z ? void 0 : Z.length) - 1), "px"),
              T = "width:calc((100% - "
                .concat(N, ") / ")
                .concat(null == Z ? void 0 : Z.length, ")"),
              x = "display:".concat(g ? "flex" : "none"),
              _ = "visibility:".concat(g ? "visible" : "hidden"),
              D = s ? c.img : xi,
              B = Z.length > 0,
              V = !C && Z.length > 0,
              P = (0, p.useCallback)(function () {
                var e = setTimeout(function () {
                  y(!0);
                }, 300);
                return function () {
                  clearTimeout(e);
                };
              }, []),
              M = (0, p.useCallback)(
                function () {
                  var e = l.couponPackage.buttonType;
                  1 !== e ? 2 === e && u() : d();
                },
                [l, d, u]
              );
            return s
              ? (0, I.BX)(p.default.Fragment, {
                  children: [
                    (g || V) && (0, I.tZ)(v.View, { className: "shade-box" }),
                    (0, I.BX)(v.View, {
                      className: "pop-hotel-new-guest",
                      children: [
                        (0, I.tZ)(v.Image, {
                          className: "new-guest-img",
                          mode: "widthFix",
                          src: null == c ? void 0 : c.img,
                          id: "AYBa",
                          onClick: function () {
                            var e;
                            s
                              ? (1 === (null == c ? void 0 : c.popId) &&
                                  (null === (e = (0, b.getCurrentPage)()) ||
                                    void 0 === e ||
                                    e.ubtTrace(243253, { PageId: o })),
                                u())
                              : d();
                          },
                          onLoad: P,
                          style: _,
                        }),
                        (0, I.tZ)(v.Text, {
                          className: "ifont-closed iconfont",
                          id: "AYBc",
                          onClick: u,
                          style: _,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, I.BX)(p.default.Fragment, {
                  children: [
                    (g || V) && (0, I.tZ)(v.View, { className: "shade-box" }),
                    C &&
                      (0, I.BX)(v.View, {
                        className: "pop-hotel-new-guest",
                        children: [
                          (0, I.tZ)(v.Image, {
                            className: "new-guest-img",
                            mode: "widthFix",
                            src: D,
                            id: "AYBa",
                            onLoad: P,
                            style: _,
                          }),
                          !s &&
                            B &&
                            (0, I.BX)(p.default.Fragment, {
                              children: [
                                (0, I.tZ)(v.View, {
                                  className: "items",
                                  style: x,
                                  children: Z.map(function (e, t) {
                                    var i = e.isUserRight,
                                      a = e.unit,
                                      n = e.leftTitle,
                                      o = e.bottomTitle,
                                      r = "number".concat(
                                        pi.ZP.Condition(i && !a, " txt")
                                      );
                                    return (0,
                                    I.BX)(v.View, { className: "item", style: T, children: [(0, I.tZ)(Ii.Z, { className: "rule", src: _i, mode: "widthFix", inline: !0 }), (0, I.BX)(v.View, { className: "value", children: [(0, I.tZ)(v.View, { className: r, children: n }), a && (0, I.tZ)(v.View, { className: "unit", children: a })] }), (0, I.tZ)(v.View, { className: "line" }), (0, I.tZ)(v.View, { className: "desc", children: o })] }, t);
                                  }),
                                }),
                                (0, I.tZ)(v.View, {
                                  className: "btn",
                                  id: "AYBb",
                                  onClick: M,
                                  style: x,
                                  children: S,
                                }),
                              ],
                            }),
                          (0, I.tZ)(v.Text, {
                            className: "ifont-closed iconfont",
                            id: "AYBc",
                            onClick: u,
                            style: _,
                          }),
                        ],
                      }),
                    !C &&
                      Z.length > 0 &&
                      (0, I.tZ)(Ti.Z, {
                        hotelCouponModalInfo: l,
                        onHideCouponModal: u,
                        onReceiveCouponInModal: h,
                      }),
                  ],
                });
          }),
          Bi = p.default.memo(function (e) {
            var t = e.data,
              i = e.startTime,
              a = e.endTime,
              n = e.onClickTonightSale,
              o = e.getHotelMarketInfo,
              r = (0, p.useState)(!1),
              s = (0, $.Z)(r, 2),
              c = s[0],
              l = s[1],
              d = (0, p.useState)(!1),
              u = (0, $.Z)(d, 2),
              h = u[0],
              m = u[1],
              f = (0, p.useState)({}),
              g = (0, $.Z)(f, 2),
              y = g[0],
              b = g[1],
              C = (0, p.useRef)(null),
              w = "background-image: url(".concat(t.imageUrl, ")");
            return (
              (0, p.useEffect)(
                function () {
                  if (i && a)
                    return (
                      (C.current = setInterval(function () {
                        var e = new Date(i.replace(/\-/g, "/")).getTime(),
                          t = new Date(a.replace(/\-/g, "/")).getTime(),
                          n = new Date().getTime(),
                          r = n > e && n < t;
                        r && !h && (m(!0), o()),
                          n > t &&
                            C.current &&
                            (clearInterval(C.current), (C.current = null));
                        var s = r
                            ? parseInt((t - n) / 1e3)
                            : parseInt((e - n) / 1e3),
                          c = parseInt((s / 3600) % 24),
                          d = parseInt((s / 60) % 60),
                          u = parseInt(s % 60);
                        l(r),
                          b({
                            hour: c > 9 ? c : "0" + c,
                            minute: d > 9 ? d : "0" + d,
                            second: u > 9 ? u : "0" + u,
                          });
                      }, 1e3)),
                      function () {
                        null != C &&
                          C.current &&
                          (clearInterval(C.current),
                          console.error("clearInterval", C.current),
                          (C.current = null));
                      }
                    );
                },
                [i, a, h, o]
              ),
              (0, I.tZ)(v.View, {
                className: "item hotel-miaosha",
                style: w,
                id: "AYBR",
                onClick: n,
                children:
                  i &&
                  a &&
                  (0, I.BX)(v.View, {
                    className: "count-down",
                    children: [
                      (0, I.tZ)(v.Text, {
                        className: "u-txt",
                        children: "距" + (c ? "结束" : "开始"),
                      }),
                      (0, I.tZ)(v.Text, {
                        className: "u-time",
                        children: y.hour,
                      }),
                      ":",
                      (0, I.tZ)(v.Text, {
                        className: "u-time",
                        children: y.minute,
                      }),
                      ":",
                      (0, I.tZ)(v.Text, {
                        className: "u-time",
                        children: y.second,
                      }),
                    ],
                  }),
              })
            );
          }),
          Vi = i(84116),
          Pi = y.default.isTieyou,
          Mi = "/pages/hotel/list/list",
          Ai =
            (0, C.h)(!0)(
              (ni = (function (e) {
                (0, d.Z)(i, e);
                var t = (0, u.Z)(i);
                function i(e) {
                  var a;
                  (0, s.Z)(this, i),
                    (a = t.call(this, e)),
                    (0, h.Z)((0, l.Z)(a), "initialLocation", function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                      g().getSetting({
                        success: function (t) {
                          (t.authSetting["scope.userLocation"] ||
                            t.authSetting.location) &&
                            a.handleMyLocation({ type: e });
                        },
                      });
                    });
                  var n = (0, pi.Nj)(),
                    o = (258 * (N.ZP.screenWidth - 20)) / 1035;
                  return (
                    (a.state = {
                      pageId: y.default.isTieyou
                        ? "10320660963"
                        : "10320660959",
                      hotelSearch: {
                        city: {
                          displayText: "",
                          cityId: "2",
                          cityName: "上海",
                          cityAddress: "",
                          districtId: "0",
                          timeZone: 0,
                          type: 1,
                          lat: "",
                          lng: "",
                        },
                        date: n.date,
                        keywordInfo: {
                          displayText: "",
                          queryTypeModel: {
                            itemType: 0,
                            queryType: 0,
                            itemValue: "",
                          },
                        },
                        roomNumber: 1,
                      },
                      smallHoursFlag: n.smallHoursFlag,
                      checkInFlag: !1,
                      checkOutFlag: !1,
                      showConfirmLocationModel: !1,
                      hasLocation: !1,
                      hotelTopBannerInfo: null,
                      hotelTopBannerVisible: !1,
                      hotelCouponModalInfo: null,
                      hotelCouponModalVisible: !1,
                      hasNewGuestPopImg: !1,
                      newGuestActivityInfo: {},
                      hotelActivityModelVisible: !1,
                      hotelFilterModalVisible: !1,
                      hotelFilterModalInfo: { info: {}, list: [] },
                      hotelFilterResultDesc: "",
                      longTermMarketDetail: [],
                      seasonMarketDetail: [],
                      userPreferentialDetail: {
                        title: "我的特权",
                        userPreferentialList: [
                          {
                            title: "首次下单立减50元",
                            content: "促销用券折上折",
                          },
                          {
                            title: "热门酒店全网比价",
                            content: "订得省心服务称心",
                          },
                        ],
                      },
                      homeIconConfigData: [],
                      homeIconInfo: null,
                      isFirstLoaded: !0,
                      searchBtnTag: {},
                      subsidyConfig: null,
                      homeBenefits: null,
                      iconConfigData: {},
                      hotelActivityWindowCode: "",
                      dateVisible: !1,
                      swiperHeight: "".concat(o, "px"),
                      placeholderSwipers: [],
                      recommendCityInfo: {},
                      isShowRoomCountSelect: !1,
                      firstShow: !0,
                    }),
                    a
                  );
                }
                return (
                  (0, c.Z)(i, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.ubtTrace(234054, { PageId: this.state.pageId });
                        var e = this.props.onLoadOpts;
                        this.doHotelOnLoadAction(),
                          e && e.source && (this._outerSource = e.source),
                          (this.fromPage =
                            (null == e ? void 0 : e.fromPage) ||
                            this._outerSource ||
                            "applets_hotel_home"),
                          e &&
                            "hotel" === e.tab &&
                            ((this.after4Oclock = !1),
                            this.doHotelOnShowAction()),
                          this.setState({ isFirstLoaded: !1 });
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (e) {
                        var t = this.props,
                          i = t.hidden,
                          a = (t.isPageBottom, t.isRefreshHotelData),
                          n = this.state.isFirstLoaded;
                        i || i === e.hidden
                          ? (i || !a || n) &&
                            i &&
                            i !== e.hidden &&
                            this.countInterval &&
                            (clearInterval(this.countInterval),
                            (this.countInterval = null))
                          : this.doHotelOnShowAction(),
                          i || this.preloading || this.preloadHotelListSearch();
                      },
                    },
                    {
                      key: "componentDidShow",
                      value: function () {
                        var e = this.props.hidden,
                          t = this.state,
                          i = t.hotelSearch,
                          a = t.pageId;
                        t.firstShow ||
                          e ||
                          this.afterGotCouponBtnDoLogin ||
                          this.refreshHotelCoupon();
                        var n = ae.wH,
                          o = n.checkInDate,
                          r = n.checkOutDate,
                          s = n.checkInDay_disp,
                          c = n.checkOutDay_disp,
                          l = n.totalDays,
                          d = n.roomNumber,
                          u = i.date,
                          h = u.checkInDate,
                          m = u.checkOutDate,
                          p = i.roomNumber,
                          f = !!d && d !== p;
                        !(!o || !r || (o === h && r === m)) &&
                          (i.date = {
                            checkInDate: o,
                            checkOutDate: r,
                            checkInDay_disp: s,
                            checkOutDay_disp: c,
                            totalDays: l,
                          }),
                          f && (i.roomNumber = d),
                          this.setState({ hotelSearch: i, firstShow: !1 }),
                          this.ubtTrace(234054, { PageId: a }),
                          this.getHotelConfigData();
                      },
                    },
                    {
                      key: "preloadHotelListSearch",
                      value: function () {
                        var e,
                          t = this;
                        if (!this.preloading) {
                          var i = this.state,
                            a = i.hotelSearch,
                            n = i.hotelFilterModalInfo,
                            o = i.smallHoursFlag,
                            r = a.city,
                            s = r.cityId,
                            c = r.cityName,
                            l = r.districtId,
                            d = void 0 === l ? "0" : l,
                            u = a.date,
                            h = u.checkInDate,
                            m = u.checkOutDate,
                            p = a.keywordInfo,
                            f = a.roomNumber,
                            g = s == this._hotelLocateCityId,
                            v =
                              null == n || null === (e = n.list) || void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    return e.data;
                                  });
                          null != p && p.data && v.push(p.data);
                          var y = new gi.Z({
                            checkInDate: h,
                            checkOutDate: m,
                            cityName: c,
                            cityId: s,
                            fromPage: this.fromPage,
                            districtId: d,
                            queryFilterList: v,
                            sameCityFlag: g,
                            smallHoursFlag: o,
                            roomNumber: f,
                          });
                          (this.preloading = !0),
                            (0, Z.it)(
                              { data: y.get() },
                              {
                                cacheControl: {
                                  useCache: !0,
                                  maxAge: 6e4,
                                  dedup: !0,
                                  dedupingInterval: 500,
                                },
                              }
                            )
                              .then(function () {
                                t.preloading = !1;
                              })
                              .catch(function () {
                                t.preloading = !1;
                              });
                        }
                      },
                    },
                    {
                      key: "doHotelOnLoadAction",
                      value: function () {
                        var e = this.props.onLoadOpts;
                        this.getHotelConfigData(),
                          this.getMiniConfigData(),
                          this.getHotelAllCity(),
                          this.getHotelAdsList(),
                          this.loadHotelSearchData(e),
                          this.props.onShareDataUpdate &&
                            this.props.onShareDataUpdate("hotel", {
                              path: "/pages/home/index?tab=hotel",
                            });
                      },
                    },
                    {
                      key: "loadHotelSearchData",
                      value: function (e) {
                        var t = (e || {}).d;
                        if (t)
                          try {
                            var i = JSON.parse(t);
                            this.setHotelCityInfo(i);
                          } catch (e) {
                            console.log(e);
                          }
                      },
                    },
                    {
                      key: "doHotelOnShowAction",
                      value: function () {
                        this.loadHotelSearchStore(),
                          this.getHotelMarketInfo(),
                          this.getTyHotelUserInfo(),
                          this.ubtTrace(198355, {
                            cid: V.ZP.cid,
                            openid: V.ZP.openid,
                          });
                      },
                    },
                    {
                      key: "refreshHotelCoupon",
                      value: function () {
                        this.getTyHotelUserInfo(),
                          this.checkHotelUserPreferential(),
                          this.props.onRefreshHotelData();
                      },
                    },
                    {
                      key: "getLivedHotelRecommend",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i, a, o, r, s, c, l, d, u;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (i = this.state.hotelSearch),
                                        (a = i.city.cityId),
                                        (o = i.date),
                                        (r = o.checkInDate),
                                        (s = o.checkOutDate),
                                        (c = a == this._hotelLocateCityId),
                                        (l = {
                                          data: {
                                            cityId: a,
                                            checkInDate: r,
                                            checkOutDate: s,
                                            hotelType: 1,
                                            clientVersion: fi.Z.clientVersion,
                                            fromPage: this.fromPage,
                                            sameCityFlag: c,
                                          },
                                        }),
                                        (e.next = 7),
                                        (0, Z.QT)(l)
                                      );
                                    case 7:
                                      null != (d = e.sent) &&
                                        null !== (t = d.data) &&
                                        void 0 !== t &&
                                        t.hotFilterList &&
                                        this.setState({
                                          placeholderSwipers:
                                            null == d ||
                                            null === (u = d.data) ||
                                            void 0 === u
                                              ? void 0
                                              : u.hotFilterList,
                                        }),
                                        (e.next = 14);
                                      break;
                                    case 11:
                                      (e.prev = 11),
                                        (e.t0 = e.catch(0)),
                                        console.error(
                                          "getLivedHotelRecommend error",
                                          e.t0
                                        );
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[0, 11]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getTyWaitTravelCity",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i, a, o, r, s;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (t = this.state.hotelSearch),
                                        (e.next = 4),
                                        (0, Z.Wo)({
                                          data: {
                                            clientVersion: fi.Z.clientVersion,
                                            locationCityId:
                                              this._hotelLocateCityId || 0,
                                          },
                                        })
                                      );
                                    case 4:
                                      (i = e.sent),
                                        (a = {}),
                                        (o = vi.jg.getAttr(
                                          "HOME_RECOMMEND_CITY"
                                        )),
                                        (r = !o || X()().diff(o, "day") >= 7),
                                        i.data.recommendCityInfo &&
                                          (i.data.cityId &&
                                            Object.assign(t, {
                                              city: {
                                                cityId: i.data.cityId,
                                                cityName: i.data.cityName,
                                                cityAddress: "",
                                                districtId: "0",
                                                isGeo: !1,
                                                lat: "",
                                                lng: "",
                                              },
                                            }),
                                          i.data.checkInDate &&
                                            Object.assign(t, {
                                              date: {
                                                checkInDate: i.data.checkInDate,
                                                checkInDay_disp: (0, pi._n)(
                                                  i.data.checkInDate
                                                ),
                                                checkOutDate:
                                                  i.data.checkOutDate,
                                                checkOutDay_disp: (0, pi._n)(
                                                  i.data.checkOutDate
                                                ),
                                                totalDays: (0, pi.HY)(
                                                  i.data.checkInDate,
                                                  i.data.checkOutDate
                                                ),
                                              },
                                            })),
                                        i.data.recommendCityInfo &&
                                          r &&
                                          ((a.recommendCityInfo =
                                            i.data.recommendCityInfo),
                                          (s =
                                            t.city.cityId ==
                                            i.data.recommendCityInfo.cityId),
                                          this.ubtTrace(
                                            "HtlHomeW_Search_Recommend_exposure",
                                            {
                                              PageId: this.state.pageId,
                                              Content:
                                                i.data.recommendCityInfo
                                                  .cityName,
                                              ExpoType: s ? 0 : 1,
                                            }
                                          ),
                                          vi.jg.setAttr(
                                            "HOME_RECOMMEND_CITY",
                                            new Date().getTime()
                                          )),
                                        (a.hotelSearch = t),
                                        this.setState(a),
                                        (e.next = 16);
                                      break;
                                    case 14:
                                      (e.prev = 14), (e.t0 = e.catch(0));
                                    case 16:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[0, 14]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "onCloseRecommendCity",
                      value: function () {
                        vi.jg.setAttr(
                          "HOME_RECOMMEND_CITY",
                          new Date().getTime()
                        ),
                          this.setState({ recommendCityInfo: null });
                      },
                    },
                    {
                      key: "onHanleRecommentCity",
                      value: function () {
                        var e = this.state,
                          t = e.hotelSearch,
                          i = e.recommendCityInfo,
                          a = t.city.cityId == i.cityId;
                        this.ubtTrace("HtlHomeW_Search_Recommend_click", {
                          PageId: this.state.pageId,
                          Content: i.cityName,
                          ExpoType: a ? 0 : 1,
                        }),
                          this.onCloseRecommendCity(),
                          this.handleCityCallback(this.state.recommendCityInfo);
                      },
                    },
                    {
                      key: "getMiniConfigData",
                      value: function () {
                        (0, k.SZ)({ keys: ["mini-fe-hotel-config"] }).then(
                          function (e) {
                            var t;
                            if (
                              null != e &&
                              null !== (t = e.configDataList) &&
                              void 0 !== t &&
                              t.length
                            ) {
                              var i = (0, $.Z)(e.configDataList, 1)[0];
                              i.data &&
                                (ae.wH || (ae.wH = {}),
                                (ae.wH.htQConfigs = i.data));
                            }
                          }
                        );
                      },
                    },
                    {
                      key: "getHotelConfigData",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              o,
                              r,
                              s,
                              c,
                              l = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0), (e.next = 3), (0, Z.cN)()
                                      );
                                    case 3:
                                      (o = e.sent),
                                        (r = {}),
                                        null !== (t = o.data) &&
                                          void 0 !== t &&
                                          t.configs &&
                                          ((c = JSON.parse(o.data.configs)),
                                          null !== (s = c.homeKeyWord) &&
                                            void 0 !== s &&
                                            s.length &&
                                            (r.homeIconConfigData =
                                              c.homeKeyWord.sort(function (
                                                e,
                                                t
                                              ) {
                                                return e.priority - t.priority;
                                              }))),
                                        null !== (i = o.data) &&
                                          void 0 !== i &&
                                          null !==
                                            (a = i.hotelShortcutConfigs) &&
                                          void 0 !== a &&
                                          a.guonei &&
                                          (r.iconConfigData =
                                            o.data.hotelShortcutConfigs.guonei),
                                        this.setState(r, function () {
                                          l.setHomeIconData();
                                        }),
                                        (e.next = 13);
                                      break;
                                    case 10:
                                      (e.prev = 10),
                                        (e.t0 = e.catch(0)),
                                        console.log(e.t0);
                                    case 13:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[0, 10]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "setHomeIconData",
                      value: function () {
                        var e = this.state,
                          t = e.hotelSearch,
                          i = e.homeIconConfigData,
                          a = null;
                        if (i && i.length)
                          for (var n = 0; n < i.length; n++)
                            if (
                              !a &&
                              (0 === i[n].cityIds.length ||
                                -1 !== i[n].cityIds.indexOf(t.city.cityId + ""))
                            ) {
                              var o = X()().valueOf();
                              i[n].timeRange &&
                                o > X()(i[n].timeRange[0]).valueOf() &&
                                o < X()(i[n].timeRange[1]).valueOf() &&
                                (a = { img: i[n].img, url: i[n].url });
                            }
                        this.setState({ homeIconInfo: a }),
                          !a ||
                            (t.keywordInfo && t.keywordInfo.data.title) ||
                            this.newUbtTrace(186345, "hotel_home_kjsousuo");
                      },
                    },
                    {
                      key: "handleSelectCity",
                      value: function () {
                        this.ubtTrace(234055, { PageId: this.state.pageId }),
                          this.navigateTo({
                            url: "/pages/hotel/city/city",
                            data: { query: this.getHotelQueryModel() },
                            callback: this.handleCityCallback,
                          });
                      },
                    },
                    {
                      key: "handleCityCallback",
                      value: function (e) {
                        var t = this;
                        if (e) {
                          var i = this.state.hotelSearch;
                          Object.assign(i, {
                            city: {
                              cityId: e.cityId,
                              cityName: e.cityName,
                              cityAddress: e.isGeo ? e.cityAddress : "",
                              districtId: e.districtId || "0",
                              isGeo: !!e.isGeo,
                              lat: e.lat,
                              lng: e.lng,
                            },
                            keywordInfo: e.keywordInfo || {},
                          }),
                            vi.zD.set(i),
                            this.setState({ hotelSearch: i }, function () {
                              t.setHomeIconData(),
                                t.doResetHotelFilter(),
                                t.pushToHotelHistory(e),
                                t.getLivedHotelRecommend();
                            });
                        }
                      },
                    },
                    {
                      key: "handleSelectCityOld",
                      value: function () {
                        var e = this.state.pageId,
                          t = {
                            inlandCities: vi.DB.get() || {},
                            interCities: {},
                          },
                          i = [];
                        for (var a in ((t.inlandCities.hotCities =
                          fi.Z.hotelHotCities),
                        t.inlandCities.cityMainList))
                          i = i.concat(t.inlandCities.cityMainList[a]);
                        this.ubtTrace(234055, { PageId: e }),
                          P.Z.city(
                            {
                              title: "选择城市",
                              hotelQueryModel: this.getHotelQueryModel(),
                              bu: "hotel",
                              loadData: function (e) {
                                e(t);
                              },
                              handleCurrentPosition: function (e, t) {
                                console.log("location", e),
                                  (0, mi.PA)(
                                    function (e) {
                                      (e.isGeo = !0),
                                        t &&
                                          t({
                                            cityName: e.cityName,
                                            cityId: e.cityId,
                                            cityAddress: e.address,
                                            lat: e.lat,
                                            lng: e.lng,
                                          });
                                    },
                                    function () {}
                                  );
                              },
                            },
                            this.handleCityCallback
                          );
                      },
                    },
                    {
                      key: "pushToHotelHistory",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e(t) {
                            var i, a, o;
                            return (0, n.Z)().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      vi.DB.getAttrAsync("historyCities")
                                    );
                                  case 2:
                                    if (((e.t0 = e.sent), e.t0)) {
                                      e.next = 5;
                                      break;
                                    }
                                    e.t0 = [];
                                  case 5:
                                    (i = e.t0),
                                      (a = i.find(function (e) {
                                        return e.cityName == t.cityName;
                                      })),
                                      (o = i.indexOf(a)) > -1 && i.splice(o, 1),
                                      i.unshift(t),
                                      (i = i.slice(0, 6)),
                                      vi.DB.setAttrAsync("historyCities", i);
                                  case 12:
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
                      key: "loadHotelSearchStore",
                      value: function () {
                        var e = this,
                          t = ae.wH || {},
                          i = t.checkInDate,
                          a = t.checkOutDate,
                          n = t.checkInDay_disp,
                          o = t.checkOutDay_disp,
                          r = t.totalDays,
                          s = t.roomNumber,
                          c = vi.zD.get();
                        c
                          ? ((c.keywordInfo = {}),
                            c.date || (c.date = {}),
                            i &&
                              (c.date = {
                                checkInDate: i,
                                checkOutDate: a,
                                checkInDay_disp: n,
                                checkOutDay_disp: o,
                                totalDays: r,
                              }),
                            c.date.checkInDate &&
                              X()((0, pi.tf)()).valueOf() >
                                X()(c.date.checkInDate).valueOf() &&
                              (c.date = (0, pi.Nj)().date),
                            c.roomNumber || (c.roomNumber = s || 1),
                            s && (c.roomNumber = s),
                            this.setState({ hotelSearch: c }, function () {
                              e.setHomeIconData(),
                                e.getLivedHotelRecommend(),
                                e.getTyWaitTravelCity(),
                                e.checkHotelUserPreferential();
                            }))
                          : (this.initialLocation(),
                            this.getLivedHotelRecommend(),
                            this.getTyWaitTravelCity(),
                            this.checkHotelUserPreferential());
                      },
                    },
                    {
                      key: "handleMyLocation",
                      value: function () {
                        var e = this,
                          t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          i = t.type,
                          a = void 0 === i ? "" : i,
                          n = this.state.hasLocation;
                        y.default.isH5 && (n || "getCurrentCityId" === a)
                          ? g().getSetting({
                              success: function (t) {
                                var i =
                                  t.authSetting["scope.userLocation"] ||
                                  t.authSetting.location;
                                "getCurrentCityId" === a && i
                                  ? e.beginLocate(function (t) {
                                      t &&
                                        t.cityId &&
                                        (e._hotelLocateCityId = t.cityId);
                                    })
                                  : i
                                  ? e.beginLocate(function (t) {
                                      null != t &&
                                        t.cityId &&
                                        e.setHotelCityInfo(t);
                                    })
                                  : ("getCurrentCityId" !== a || i) &&
                                    e.showConfirmModel();
                              },
                            })
                          : this.beginLocate(function (t) {
                              null != t && t.cityId && e.setHotelCityInfo(t);
                            });
                      },
                    },
                    {
                      key: "setHotelCityInfo",
                      value: function (e) {
                        var t = this;
                        if (e && e.cityId) {
                          var i = this.state.hotelSearch,
                            a = i.city;
                          (a.cityId = e.cityId),
                            (a.cityName = e.cityName),
                            (a.cityAddress = e.address),
                            (a.lat = e.lat),
                            (a.lng = e.lng),
                            (a.districtId = e.districtId || "0"),
                            (a.isGeo = !0),
                            (i.keywordInfo = {}),
                            vi.zD.set((0, r.Z)({}, i)),
                            this.setState(
                              { hotelSearch: (0, r.Z)({}, i) },
                              function () {
                                t.setHomeIconData(), t.getLivedHotelRecommend();
                              }
                            );
                        }
                      },
                    },
                    {
                      key: "showConfirmModel",
                      value: function () {
                        this.setState({ showConfirmLocationModel: !0 });
                      },
                    },
                    {
                      key: "hideConfirmModel",
                      value: function () {
                        this.setState({ showConfirmLocationModel: !1 });
                      },
                    },
                    {
                      key: "beginLocate",
                      value: function (e) {
                        var t = this;
                        (0, mi.PA)(
                          function (i) {
                            (i.isGeo = !0),
                              (t._hotelLocateCityId = i.cityId),
                              e && e(i);
                          },
                          function (t) {
                            e && e(t);
                          }
                        ),
                          this.setState({ hasLocation: !0 });
                      },
                    },
                    {
                      key: "handlerOpenSetting",
                      value: function (e) {
                        var t = this;
                        this.hideConfirmModel(),
                          e.detail.authSetting["scope.userLocation"] &&
                            this.beginLocate(function (e) {
                              e &&
                                e.cityId &&
                                (t.setHotelCityInfo(e), t.clearHotelKeyword());
                            });
                      },
                    },
                    {
                      key: "handleHideConfirmModel",
                      value: function () {
                        this.hideConfirmModel();
                      },
                    },
                    {
                      key: "handleHotelCalender",
                      value: function () {
                        this.setState({ dateVisible: !0 });
                      },
                    },
                    {
                      key: "onDateChange",
                      value: function (e) {
                        var t = e.checkInDate,
                          i = e.checkOutDate,
                          a = this.state.hotelSearch;
                        if (
                          t !== a.date.checkInDate ||
                          i !== a.date.checkOutDate
                        ) {
                          var n = this.showNotice && i === (0, pi.tf)(),
                            o =
                              this.showNotice &&
                              t ===
                                X()((0, pi.tf)())
                                  .subtract(1, "day")
                                  .format("YYYY-MM-DD"),
                            r = Object.assign({}, a, { date: e }),
                            s = {
                              checkInFlag: o,
                              checkOutFlag: n,
                              smallHoursFlag: (0, pi.mD)(t),
                              dateVisible: !1,
                              dateTransitionVisible: !1,
                              hotelSearch: r,
                            };
                          this.setState(s);
                        } else this.setState({ dateVisible: !1 });
                      },
                    },
                    {
                      key: "onDateClose",
                      value: function () {
                        this.setState({ dateVisible: !1 });
                      },
                    },
                    {
                      key: "getHotelAdsList",
                      value: function () {
                        te.B8.call(this, {
                          pageId: "321114",
                          adInfosName: "hotelAdInfos",
                        });
                      },
                    },
                    {
                      key: "onHotelAdClick",
                      value: function (e) {
                        var t = this.state.hotelAdInfos[e];
                        this.ubtTrace(222790, {
                          PageId: this.state.pageId,
                          ActivityType: null == t ? void 0 : t.title,
                        }),
                          te.Bj.call(this, {
                            index: e,
                            adInfosName: "hotelAdInfos",
                            businessLineName: "hotelAd",
                          });
                      },
                    },
                    {
                      key: "onAdBannerImageLoad",
                      value: function (e) {
                        var t = e.detail,
                          i = t.width,
                          a = t.height,
                          n = this.state.swiperHeight,
                          o = ((N.ZP.screenWidth - 20) * a) / i;
                        o !== n && this.setState({ swiperHeight: o });
                      },
                    },
                    {
                      key: "toEconomicList",
                      value: function () {
                        var e = this.state,
                          t = e.hotelSearch,
                          i = e.hotelFilterModalInfo,
                          a = t.city,
                          n = a.cityId,
                          o = a.cityName,
                          r = a.cityAddress,
                          s = a.districtId,
                          c = a.isGeo,
                          l = a.lat,
                          d = a.lng,
                          u = t.date,
                          h = u.checkInDate,
                          m = u.checkOutDate,
                          p = t.keywordInfo,
                          f = n == this._hotelLocateCityId;
                        this.ubtTrace(208546, {
                          bizKey: "hotel_home_chainhotel_click",
                        }),
                          this.navigateTo({
                            url: Mi,
                            data: {
                              isEconomic: !0,
                              queryModel: {
                                cityId: n,
                                cityName: o,
                                cityAddress: r,
                                districtId: s,
                                checkInDate: h,
                                checkOutDate: m,
                                sameCityFlag: f,
                              },
                              keywordInfo: p,
                              filterInfos: i.list,
                              currentCityId: this._hotelLocateCityId,
                              currentGeoInfo: c
                                ? {
                                    filterID: "24",
                                    filterType: 0,
                                    scenarioType: "",
                                    sceneBitMap: 0,
                                    subType: "1",
                                    title: ""
                                      .concat(o)
                                      .concat(r ? "," + r : ""),
                                    type: "24",
                                    value: "".concat(l, "|").concat(d),
                                  }
                                : {},
                            },
                          });
                      },
                    },
                    {
                      key: "goToHotelMonitorList",
                      value: function () {
                        g().reLaunch({
                          url: "/pages/trnshare/grablist/grablist?orderType=hotelOrder",
                        });
                      },
                    },
                    {
                      key: "gotoMonitorHotelDetail",
                      value: function (e) {
                        var t = e.currentTarget.dataset.item,
                          i = t.checkInDate,
                          a = t.checkOutDate;
                        console.log("--e--", t);
                        var n = {
                          hotel: t,
                          query: { checkInDate: i, checkOutDate: a },
                        };
                        this.navigateTo({
                          url: "/pages/hotel/detail/detail",
                          data: n,
                        });
                      },
                    },
                    {
                      key: "getListQuery",
                      value: function () {
                        var e = this.state,
                          t = e.hotelSearch,
                          i = e.hotelFilterModalInfo,
                          a = e.smallHoursFlag,
                          n = t.city,
                          o = n.cityId,
                          r = n.cityName,
                          s = n.cityAddress,
                          c = n.districtId,
                          l = void 0 === c ? "0" : c,
                          d = n.isGeo,
                          u = n.lat,
                          h = n.lng,
                          m = t.date,
                          p = m.checkInDate,
                          f = m.checkOutDate,
                          g = t.keywordInfo,
                          v = o == this._hotelLocateCityId;
                        return {
                          fromPage: this.fromPage,
                          queryModel: {
                            cityId: o,
                            cityName: r,
                            cityAddress: s,
                            districtId: l,
                            checkInDate: p,
                            checkOutDate: f,
                            sameCityFlag: v,
                            smallHoursFlag: a,
                            source: this._outerSource || "",
                          },
                          keywordInfo: g,
                          filterInfos: i.list,
                          currentCityId: this._hotelLocateCityId,
                          currentGeoInfo: d
                            ? {
                                filterID: "24",
                                filterType: 0,
                                scenarioType: "",
                                sceneBitMap: 0,
                                subType: "1",
                                title: "".concat(r).concat(s ? "," + s : ""),
                                type: "24",
                                value: "".concat(u, "|").concat(h),
                              }
                            : {},
                        };
                      },
                    },
                    {
                      key: "handleKeywordSearch",
                      value: function (e) {
                        var t = this,
                          i = this.state,
                          a = i.hotelSearch,
                          n = i.pageId,
                          o = a.city,
                          r = o.cityId,
                          s = o.cityName,
                          c = a.date,
                          l = c.checkInDate,
                          d = c.checkOutDate,
                          u = this.getListQuery(),
                          h = encodeURIComponent(JSON.stringify(u)),
                          m = e ? encodeURIComponent(JSON.stringify(e)) : null;
                        this.ubtTrace(234057, { PageId: n }),
                          this.navigateTo({
                            url: "/pages/hotel/keywordsearch/index?cityId="
                              .concat(r, "&cityName=")
                              .concat(s, "&checkInDate=")
                              .concat(l, "&checkOutDate=")
                              .concat(d, "&_query=")
                              .concat(h, "&recommendSearch=")
                              .concat(m),
                            callback: function (e) {
                              var i = e.city,
                                n = void 0 === i ? {} : i,
                                o = e.item,
                                s = n.cityId,
                                c = n.cityName,
                                l = n.districtId,
                                d = n.cityAddress;
                              s &&
                                s !== r &&
                                ((a.city.cityId = s),
                                (a.city.cityName = c),
                                (a.city.cityAddress = d),
                                (a.city.displayText = d),
                                (a.city.districtId = l || "0"),
                                t.setState({ hotelSearch: a }, function () {
                                  t.setHomeIconData(),
                                    t.getLivedHotelRecommend();
                                })),
                                t.setKeywordInfo(o);
                            },
                          });
                      },
                    },
                    {
                      key: "clearHotelKeyword",
                      value: function (e) {
                        e && e.stopPropagation();
                        var t = this.state.hotelSearch;
                        (t.keywordInfo = {}),
                          (t.city.cityAddress = ""),
                          this.setState({
                            hotelSearch: JSON.parse(JSON.stringify(t)),
                          });
                      },
                    },
                    {
                      key: "setKeywordInfo",
                      value: function (e) {
                        var t = this.state.hotelSearch;
                        (t.keywordInfo = e || {}),
                          this.setState({
                            hotelSearch: JSON.parse(JSON.stringify(t)),
                          });
                      },
                    },
                    {
                      key: "getHotelQueryModel",
                      value: function () {
                        var e = this.state.hotelSearch,
                          t = e.date,
                          i = e.city;
                        return {
                          cityId: i.cityId,
                          cityName: i.cityName,
                          cityAddress: i.cityAddress,
                          districtId: i.districtId,
                          checkInDate: t.checkInDate,
                          checkOutDate: t.checkOutDate,
                          hotelType: 1,
                          keyValue: "",
                          keyWordType: 0,
                          payType: 0,
                          contrl: 3,
                          contrlExt: 0,
                          queryBitMap: 0,
                          specialChannel: 0,
                          index: 1,
                          orderBy: 0,
                          desc: 1,
                          source: "wechat_HotelHome",
                          userSelect: 0,
                          travelType: 0,
                          sameCityFlag: !1,
                          searchMode: 1,
                        };
                      },
                    },
                    {
                      key: "searchSubmit",
                      value: function () {
                        this.countInterval && clearInterval(this.countInterval),
                          this.ubtDevTrace("d_home_search", { type: "4-1" }),
                          this.doHotelSearch();
                      },
                    },
                    {
                      key: "doHotelSearch",
                      value: function () {
                        var e = this.state,
                          t = e.hotelSearch,
                          i = e.hotelFilterModalInfo,
                          a = e.smallHoursFlag,
                          n = t.city,
                          o = n.cityId,
                          r = n.cityName,
                          s = n.cityAddress,
                          c = n.districtId,
                          l = void 0 === c ? "0" : c,
                          d = n.isGeo,
                          u = n.lat,
                          h = n.lng,
                          m = t.date,
                          p = m.checkInDate,
                          f = m.checkOutDate,
                          g = t.keywordInfo,
                          v = t.roomNumber,
                          y = o == this._hotelLocateCityId;
                        this.navigateTo({
                          url: Mi,
                          data: {
                            fromPage: this.fromPage,
                            queryModel: {
                              cityId: o,
                              cityName: r,
                              cityAddress: s,
                              districtId: l,
                              checkInDate: p,
                              checkOutDate: f,
                              sameCityFlag: y,
                              smallHoursFlag: a,
                              source: this._outerSource || "",
                              roomNumber: v,
                            },
                            keywordInfo: g,
                            filterInfos: i.list,
                            currentCityId: this._hotelLocateCityId,
                            currentGeoInfo: d
                              ? {
                                  filterID: "24",
                                  filterType: 0,
                                  scenarioType: "",
                                  sceneBitMap: 0,
                                  subType: "1",
                                  title: "".concat(r).concat(s ? "," + s : ""),
                                  type: "24",
                                  value: "".concat(u, "|").concat(h),
                                }
                              : {},
                          },
                        }),
                          vi.zD.set(t);
                      },
                    },
                    {
                      key: "getHotelAllCity",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i, a;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = vi.Yj.get() || ""),
                                        (i = {
                                          data: {
                                            type: 1,
                                            lastUpdateTime: t,
                                            clientVersion: fi.Z.clientVersion,
                                          },
                                        }),
                                        (e.prev = 2),
                                        (e.next = 5),
                                        (0, Z.IM)(i)
                                      );
                                    case 5:
                                      (a = e.sent) &&
                                        a.data &&
                                        (this.handleHotelStation(a.data),
                                        vi.Yj.set(
                                          X()().format("YYYY-MM-DD HH:mm:ss")
                                        )),
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
                      key: "handleHotelStation",
                      value: function (e) {
                        var t = {};
                        e.forEach(function (e) {
                          t[e.cityFirstLetter] || (t[e.cityFirstLetter] = []),
                            t[e.cityFirstLetter].push({
                              cityName: e.cityName,
                              cityId: e.cityId,
                              cityPinYin: e.cityPinYin,
                              cityBreviary: e.cityBreviary,
                            });
                        });
                        var i = Object.keys(t);
                        i = i.sort();
                        var a = {};
                        i.forEach(function (e) {
                          a[e] = t[e];
                        }),
                          vi.DB.setAttr("cityMainList", a),
                          vi.DB.setAttr("hotelAllCities", e);
                      },
                    },
                    {
                      key: "onClickShowHotelFilterModal",
                      value: function () {
                        this.newUbtTrace(184172, "hotel_home_price");
                        var e = this.state,
                          t = e.hotelFilterModalInfo,
                          i = e.hotelSearch;
                        this.setState({
                          hotelFilterModalInfo: {
                            info: {
                              cityId: i.city.cityId,
                              districtId: i.city.districtId,
                              checkInDate: i.date.checkInDate,
                              checkOutDate: i.date.checkOutDate,
                            },
                            list: t.list,
                          },
                          hotelFilterModalVisible: !0,
                        });
                      },
                    },
                    {
                      key: "onClickHotelFilterModalClose",
                      value: function () {
                        this.setState({ hotelFilterModalVisible: !1 });
                      },
                    },
                    {
                      key: "onClickHotelFilterModalComfirm",
                      value: function (e) {
                        var t = this.state.hotelFilterModalInfo;
                        this.setState({ hotelFilterModalVisible: !1 }),
                          e && e.length
                            ? this.setState({
                                hotelFilterResultDesc: e
                                  .map(function (e) {
                                    return e.data.title;
                                  })
                                  .join(","),
                                hotelFilterModalInfo: (0, r.Z)(
                                  (0, r.Z)({}, t),
                                  {},
                                  { list: e }
                                ),
                              })
                            : this.setState({
                                hotelFilterResultDesc: "",
                                hotelFilterModalInfo: (0, r.Z)(
                                  (0, r.Z)({}, t),
                                  {},
                                  { list: [] }
                                ),
                              });
                      },
                    },
                    {
                      key: "onClickClearHotelFilterResult",
                      value: function () {
                        this.doResetHotelFilter();
                      },
                    },
                    {
                      key: "doResetHotelFilter",
                      value: function () {
                        this.setState({
                          hotelFilterResultDesc: "",
                          hotelFilterModalInfo: { info: {}, list: [] },
                        });
                      },
                    },
                    {
                      key: "getTyHotelUserInfo",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i, a, o, r;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (t = {
                                          data: {
                                            clientVersion: fi.Z.clientVersion,
                                          },
                                        }),
                                        (e.next = 4),
                                        (0, Z.aU)(t)
                                      );
                                    case 4:
                                      1 ===
                                        (null == (i = e.sent)
                                          ? void 0
                                          : i.resultCode) &&
                                        i.data &&
                                        ((a = i.data),
                                        (o = a.searchBtnTag),
                                        (r = a.subsidyConfig),
                                        this.setData({
                                          searchBtnTag: o,
                                          subsidyConfig: r,
                                        })),
                                        (e.next = 11);
                                      break;
                                    case 8:
                                      (e.prev = 8),
                                        (e.t0 = e.catch(0)),
                                        console.log(
                                          "getTyHotelUserInfo error",
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
                      key: "checkHotelUserPreferential",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t,
                              i,
                              a,
                              o,
                              s,
                              c,
                              l,
                              d,
                              u,
                              h,
                              m,
                              p,
                              f,
                              g,
                              v,
                              y,
                              C,
                              k,
                              S,
                              N,
                              I = arguments;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t =
                                          I.length > 0 && void 0 !== I[0]
                                            ? I[0]
                                            : {}),
                                        (i = t.showModal),
                                        (a = void 0 !== i && i),
                                        this.setState({
                                          hotelCouponModalInfo: null,
                                          hotelCouponModalVisible: !1,
                                        }),
                                        (e.prev = 2),
                                        (e.next = 5),
                                        (0, Z.jV)({
                                          data: {
                                            couponType: 300,
                                            cityId:
                                              null ===
                                                (o = this.state.hotelSearch) ||
                                              void 0 === o ||
                                              null === (s = o.city) ||
                                              void 0 === s
                                                ? void 0
                                                : s.cityId,
                                            clientVersion: fi.Z.clientVersion,
                                            testVersion: "C",
                                            domainSource: this.fromPage,
                                          },
                                        })
                                      );
                                    case 5:
                                      if (1 === (d = e.sent).resultCode) {
                                        e.next = 8;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 8:
                                      (u = d.data),
                                        (h = u.homeWindowInfo),
                                        (m = u.userPreferentailList),
                                        (p = {}),
                                        null != h &&
                                          h.imageUrl &&
                                          ((f = vi.jg.getAttr(
                                            fi.Z.THRESHOLD_KEY.HOME_WINDOW
                                          )),
                                          (!f || X()().diff(f, "day") >= 1) &&
                                            (("flightUser" !== h.windowCode &&
                                              "trainUser" !== h.windowCode) ||
                                              this.ubtTrace(222830, {
                                                PageId: this.state.pageId,
                                              }),
                                            (p.hotelActivityWindowCode =
                                              h.windowCode),
                                            (p.hotelActivityImg = h.imageUrl),
                                            (p.hotelActivityJumpUrl =
                                              h.jumpUrl),
                                            (p.hotelActivityModelVisible = !0),
                                            (p.hotelActivityType = h.type),
                                            vi.jg.setAttr(
                                              fi.Z.THRESHOLD_KEY.HOME_WINDOW,
                                              new Date().getTime()
                                            ))),
                                        null !=
                                          (g =
                                            null != m && m.length
                                              ? m.find(function (e) {
                                                  return 300 === e.couponType;
                                                })
                                              : null) &&
                                          g.banner &&
                                          ((p.hotelTopBannerVisible = !0),
                                          (p.hotelTopBannerInfo = (0, r.Z)(
                                            (0, r.Z)({}, g.banner),
                                            {},
                                            {
                                              banner:
                                                w.Z.convertAppTextToHtmlStr(
                                                  g.banner.content || ""
                                                ),
                                              desc: w.Z.convertAppTextToHtmlStr(
                                                g.banner.desc || ""
                                              ),
                                            }
                                          ))),
                                        null != g &&
                                          null !== (c = g.couponPackage) &&
                                          void 0 !== c &&
                                          null !==
                                            (l =
                                              c.childCouponPackageItemList) &&
                                          void 0 !== l &&
                                          l.length &&
                                          ((y =
                                            g.couponPackage.childCouponPackageItemList.filter(
                                              function (e) {
                                                return (
                                                  e.leftTitle &&
                                                  e.topTitle &&
                                                  300 === e.type
                                                );
                                              }
                                            )),
                                          (C =
                                            (null ===
                                              (v =
                                                g.couponPackage
                                                  .activityConfigs) ||
                                            void 0 === v
                                              ? void 0
                                              : v.length) > 0),
                                          (k = y.map(function (e) {
                                            return (0,
                                            r.Z)((0, r.Z)({}, e), {}, { leftTitle: e.leftTitle.replace(/[^0-9]/gi, "") });
                                          })),
                                          (g.couponPackage.childCouponPackageItemList =
                                            k),
                                          (p.hotelCouponModalInfo = g),
                                          (p.hasNewGuestPopImg = C),
                                          (p.newGuestActivityInfo = C
                                            ? g.couponPackage.activityConfigs[0]
                                            : {}),
                                          (!a &&
                                            !(0, pi.Bw)({
                                              thresholdKey:
                                                fi.Z.THRESHOLD_KEY.COUPON_DATE,
                                            })) ||
                                            p.hotelActivityModelVisible ||
                                            ((p.hotelCouponModalVisible = !0),
                                            C &&
                                              1 ===
                                                (null == p ||
                                                null ===
                                                  (S =
                                                    p.newGuestActivityInfo) ||
                                                void 0 === S
                                                  ? void 0
                                                  : S.popId) &&
                                              (null ===
                                                (N = (0, b.getCurrentPage)()) ||
                                                void 0 === N ||
                                                N.ubtTrace(243252, {
                                                  PageId: this.state.pageId,
                                                })),
                                            vi.jg.setAttr(
                                              fi.Z.THRESHOLD_KEY.COUPON_DATE,
                                              new Date().getTime()
                                            ))),
                                        this.setState(p),
                                        (e.next = 20);
                                      break;
                                    case 17:
                                      (e.prev = 17),
                                        (e.t0 = e.catch(2)),
                                        console.log(e.t0);
                                    case 20:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[2, 17]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "onHideCouponModal",
                      value: function () {
                        this.setState({ hotelCouponModalVisible: !1 });
                      },
                    },
                    {
                      key: "onClickHideHotelActivityModal",
                      value: function () {
                        this.setState({ hotelActivityModelVisible: !1 });
                      },
                    },
                    {
                      key: "skipToActivityFromPop",
                      value: function () {
                        var e = this.state.hotelActivityWindowCode,
                          t = this.state.hotelActivityJumpUrl;
                        this.setState({ hotelActivityModelVisible: !1 }),
                          ("trainUser" !== e && "flightUser" !== e) ||
                            this.ubtTrace(222832, {
                              PageId: this.state.pageId,
                            }),
                          t && t.indexOf("http") > -1
                            ? this.toHotelWeb(t)
                            : t && this.navigateTo({ url: t });
                      },
                    },
                    {
                      key: "onClickNewGuestGotCoupon",
                      value: function () {
                        var e,
                          t,
                          i = this;
                        if (V.ZP.isLogin) {
                          var a = this.state.hotelCouponModalInfo,
                            n =
                              null == a ||
                              null === (e = a.couponPackage) ||
                              void 0 === e ||
                              null === (t = e.userRightsList) ||
                              void 0 === t
                                ? void 0
                                : t.find(function (e) {
                                    return 0 === e.type;
                                  });
                          this.receiveCouponByScenePromise(n);
                        } else
                          V.ZP.doLogin().then(function () {
                            (i.afterGotCouponBtnDoLogin = !0),
                              i.checkHotelUserPreferential({ showModal: !0 });
                          });
                      },
                    },
                    {
                      key: "receiveCouponByScenePromise",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e(t) {
                            var i, a, o, r;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((e.prev = 0),
                                        t &&
                                          null !== (i = t.promotionKeyList) &&
                                          void 0 !== i &&
                                          i.length &&
                                          t.scene)
                                      ) {
                                        e.next = 3;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 3:
                                      return (
                                        (e.next = 5),
                                        (0, Z.nG)({
                                          data: {
                                            scene: t.scene,
                                            promotionKeyList:
                                              t.promotionKeyList,
                                            clientVersion: fi.Z.clientVersion,
                                          },
                                        })
                                      );
                                    case 5:
                                      null != (r = e.sent) &&
                                      null !== (a = r.errors) &&
                                      void 0 !== a &&
                                      null !== (o = a.errorFields) &&
                                      void 0 !== o &&
                                      o.message
                                        ? (0, b.showToast)(
                                            r.errors.errorFields.message
                                          )
                                        : 1 === r.resultCode &&
                                          ((0, b.showToast)("领取成功"),
                                          vi.jg.setAttr(
                                            fi.Z.THRESHOLD_KEY.NEW_GUEST,
                                            new Date().getTime()
                                          ),
                                          this.checkHotelUserPreferential()),
                                        (e.next = 12);
                                      break;
                                    case 9:
                                      (e.prev = 9),
                                        (e.t0 = e.catch(0)),
                                        console.error(
                                          "receiveCouponByScenePromise error",
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
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "gotCouponImpl",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e(t) {
                            var i,
                              a,
                              o,
                              r,
                              s,
                              c,
                              l,
                              d,
                              u = arguments;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((i =
                                          u.length > 1 && void 0 !== u[1]
                                            ? u[1]
                                            : ""),
                                        console.log("gotCouponImpl:", i),
                                        "receiveCoupon" === t.action)
                                      ) {
                                        e.next = 6;
                                        break;
                                      }
                                      this.setState({
                                        hotelCouponModalVisible: !1,
                                      }),
                                        (e.next = 18);
                                      break;
                                    case 6:
                                      return (
                                        (e.prev = 6),
                                        (e.next = 9),
                                        (0, k.Ro)({
                                          scene: t.scene,
                                          promotionReceiveEntityList: [
                                            { promotionKey: t.promotionKey },
                                          ],
                                        })
                                      );
                                    case 9:
                                      (a = e.sent),
                                        (o = a.resultCode),
                                        (r = a.resultMessage),
                                        (s = a.promotionReceiveEntityList),
                                        (c = void 0 === s ? [] : s),
                                        1 === o
                                          ? 1 === (l = c[0]).receiveCode
                                            ? (g().showToast({
                                                title: "领取成功",
                                                icon: "success",
                                                duration: 1500,
                                              }),
                                              "newGuest" === i &&
                                                this.checkHotelUserPreferential(),
                                              null ==
                                                (d =
                                                  this.state
                                                    .hotelCouponModalInfo) ||
                                                d.couponPackage.childCouponPackageItemList.forEach(
                                                  function (e) {
                                                    e.promotionKey ===
                                                      t.promotionKey &&
                                                      ((e.action = "useCoupon"),
                                                      (e.actionContent =
                                                        "去使用"));
                                                  }
                                                ),
                                              this.setState({
                                                hotelCouponModalInfo:
                                                  JSON.parse(JSON.stringify(d)),
                                              }))
                                            : g().showToast({
                                                title: l.message || "领取失败",
                                                icon: "none",
                                                duration: 1500,
                                              })
                                          : g().showToast({
                                              title:
                                                r || "网络错误，请稍候再试",
                                              icon: "none",
                                              duration: 1500,
                                            }),
                                        (e.next = 18);
                                      break;
                                    case 14:
                                      (e.prev = 14),
                                        (e.t0 = e.catch(6)),
                                        console.log(e.t0),
                                        g().showToast({
                                          title: "网络错误，请稍候再试",
                                          icon: "none",
                                          duration: 1500,
                                        });
                                    case 18:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[6, 14]]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "onReceiveCouponInModal",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e(t) {
                            var i,
                              a,
                              o,
                              r,
                              s = this;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (V.ZP.isLogin) {
                                        e.next = 3;
                                        break;
                                      }
                                      return (
                                        V.ZP.doLogin().then(function () {
                                          (s.afterGotCouponBtnDoLogin = !0),
                                            s.checkHotelUserPreferential({
                                              showModal: !0,
                                            });
                                        }),
                                        e.abrupt("return")
                                      );
                                    case 3:
                                      if (
                                        ((e.prev = 3),
                                        t &&
                                          null !== (i = t.promotionKeyList) &&
                                          void 0 !== i &&
                                          i.length &&
                                          t.scene)
                                      ) {
                                        e.next = 7;
                                        break;
                                      }
                                      return (
                                        this.setState({
                                          hotelCouponModalVisible: !1,
                                        }),
                                        e.abrupt("return")
                                      );
                                    case 7:
                                      return (
                                        (e.next = 9),
                                        (0, Z.nG)({
                                          data: {
                                            scene: t.scene,
                                            promotionKeyList:
                                              t.promotionKeyList,
                                            clientVersion: fi.Z.clientVersion,
                                          },
                                        })
                                      );
                                    case 9:
                                      null != (r = e.sent) &&
                                      null !== (a = r.errors) &&
                                      void 0 !== a &&
                                      null !== (o = a.errorFields) &&
                                      void 0 !== o &&
                                      o.message
                                        ? (0, b.showToast)(
                                            r.errors.errorFields.message
                                          )
                                        : 1 === r.resultCode
                                        ? (0, b.showToast)("领取成功")
                                        : (0, b.showToast)("领取失败"),
                                        this.setState({
                                          hotelCouponModalVisible: !1,
                                        }),
                                        (e.next = 17);
                                      break;
                                    case 14:
                                      (e.prev = 14),
                                        (e.t0 = e.catch(3)),
                                        console.error(
                                          "receiveCouponByScenePromise error",
                                          e.t0
                                        );
                                    case 17:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[3, 14]]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "onClickHotelTopBanner",
                      value: function () {
                        var e = this.state.hotelTopBannerInfo,
                          t = e.action,
                          i = e.jumpUrl,
                          a = e.tagList,
                          n = e.bannerId,
                          o = e.content;
                        this.ubtTrace(208546, {
                          bizKey: "hotel_home_yellowbar_click",
                          clickType: null == a ? void 0 : a[0],
                          content: o,
                          type: n,
                        }),
                          "checkCoupon" === t
                            ? this.gotoKaQuanPage()
                            : "jumpH5" === t
                            ? i.indexOf("http") > -1
                              ? P.Z.twebview({ data: { url: i } })
                              : this.navigateTo({
                                  url: "/pages/usercenter/member/member",
                                })
                            : "receiveCoupon" === t &&
                              this.setState({ hotelCouponModalVisible: !0 });
                      },
                    },
                    {
                      key: "onClickCloseHotelTopBanner",
                      value: function (e) {
                        e.stopPropagation(),
                          this.setState({ hotelTopBannerVisible: !1 });
                      },
                    },
                    {
                      key: "gotoHotelKaQuanPage",
                      value: function () {
                        this.newUbtTrace(186340, "hotel_home_coupon"),
                          this.gotoKaQuanPage();
                      },
                    },
                    {
                      key: "gotoKaQuanPage",
                      value: function () {
                        var e = this,
                          t = "/pages/hotel/coupon/coupon";
                        V.ZP.isLogin
                          ? this.navigateTo({ url: t })
                          : V.ZP.doLogin().then(function () {
                              setTimeout(function () {
                                e.navigateTo({ url: t });
                              }, 200);
                            });
                      },
                    },
                    {
                      key: "handleHotelHotBussniessCircleClick",
                      value: function (e) {
                        var t = e.currentTarget.dataset.index,
                          i = this._hotBussinessCircle.filter.subItems[t],
                          a = this.state,
                          n = a.hotelSearch,
                          o = a.hotelFilterModalInfo,
                          r = a.smallHoursFlag,
                          s = n.city,
                          c = s.cityId,
                          l = s.cityName,
                          d = s.cityAddress,
                          u = s.districtId,
                          h = void 0 === u ? "0" : u,
                          m = s.isGeo,
                          p = s.lat,
                          f = s.lng,
                          g = n.date,
                          v = g.checkInDate,
                          y = g.checkOutDate,
                          b = c == this._hotelLocateCityId;
                        this.navigateTo({
                          url: Mi,
                          data: {
                            queryModel: {
                              cityId: c,
                              cityName: l,
                              cityAddress: d,
                              districtId: h,
                              checkInDate: v,
                              checkOutDate: y,
                              sameCityFlag: b,
                              smallHoursFlag: r,
                            },
                            keywordInfo: i,
                            filterInfos: o.list,
                            currentCityId: this._hotelLocateCityId,
                            currentGeoInfo: m
                              ? {
                                  filterID: "24",
                                  filterType: 0,
                                  scenarioType: "",
                                  sceneBitMap: 0,
                                  subType: "1",
                                  title: "".concat(l).concat(d ? "," + d : ""),
                                  type: "24",
                                  value: "".concat(p, "|").concat(f),
                                }
                              : {},
                          },
                        });
                      },
                    },
                    {
                      key: "getHotelMarketInfo",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i, a, o, s, c, l, d, u, h, m, p, f, g, v, y;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = this.state.hotelSearch),
                                        (i = {
                                          data: {
                                            hotelType: 1,
                                            clientVersion: fi.Z.clientVersion,
                                            cityId: parseInt(t.city.cityId),
                                            checkInDate: t.date.checkInDate,
                                            checkOutDate: t.date.checkOutDate,
                                            cityName: t.city.cityName,
                                          },
                                        }),
                                        (e.prev = 2),
                                        (e.next = 5),
                                        (0, Z.E_)(i)
                                      );
                                    case 5:
                                      1 === (a = e.sent).resultCode &&
                                        ((o = a.data),
                                        (s = o.longTermMarketDetail),
                                        (c = void 0 === s ? [] : s),
                                        (l = o.seasonMarketDetail),
                                        (d = void 0 === l ? [] : l),
                                        (u = o.userPreferentialDetail),
                                        (h = void 0 === u ? {} : u),
                                        (m =
                                          d.find(function (e) {
                                            return "限时秒杀" === e.title;
                                          }) || {}),
                                        (p = m.startTime),
                                        (f = void 0 === p ? "" : p),
                                        (g = m.endTime),
                                        (v = void 0 === g ? "" : g),
                                        h.userPreferentialList &&
                                          h.userPreferentialList.length > 0 &&
                                          ((y = h.userPreferentialList || []),
                                          (h.userPreferentialList = y.filter(
                                            function (e) {
                                              return (
                                                "酒店订贵了赔差价" !== e.title
                                              );
                                            }
                                          )),
                                          (h.userPreferentialList = y.map(
                                            function (e) {
                                              return (0, r.Z)(
                                                (0, r.Z)({}, e),
                                                {},
                                                {
                                                  content:
                                                    w.Z.convertAppTextToHtmlStr(
                                                      e.content
                                                    ),
                                                }
                                              );
                                            }
                                          )),
                                          h.userPreferentialList.length < 2 &&
                                            h.userPreferentialList.push({
                                              title: "热门酒店全网比价",
                                              content: "订得省心服务称心",
                                            })),
                                        this.setState({
                                          userPreferentialDetail: h,
                                          seasonMarketDetail: d,
                                          longTermMarketDetail: c,
                                          startTime: f,
                                          endTime: v,
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
                      key: "onClickBinzInfo",
                      value: function (e) {
                        var t;
                        -1 !==
                          (null === (t = e.jumpUrl) || void 0 === t
                            ? void 0
                            : t.indexOf("http")) && this.toHotelWeb(e.jumpUrl);
                      },
                    },
                    {
                      key: "toHotelWeb",
                      value: function (e) {
                        e && P.Z.twebview({ data: { url: e } });
                      },
                    },
                    {
                      key: "toHotelBangDan",
                      value: function () {
                        var e = this.state.hotelSearch,
                          t = "https://"
                            .concat(
                              y.default.h5domain,
                              "/webapp/train/activity/ztrip-hotel-ranklist/?cityId="
                            )
                            .concat(e.city.cityId, "&cityName=")
                            .concat(e.city.cityName, "&partner=")
                            .concat(y.default.partner, "&isHideNavBar=yes");
                        this.ubtTrace(208546, "hotel_home_recommendinfo_click"),
                          P.Z.twebview({ data: { url: t } });
                      },
                    },
                    {
                      key: "newUbtTrace",
                      value: function (e, t) {
                        try {
                          this.ubtTrace(e, t);
                        } catch (e) {
                          console.log(e);
                        }
                      },
                    },
                    {
                      key: "gotoFavoriteListPage",
                      value: function () {
                        var e = this;
                        this.newUbtTrace(186338, "hotel_home_shoucang");
                        var t = this.state.hotelSearch,
                          i = "/pages/hotel/packages/collect/collect?cityId="
                            .concat(t.city.cityId, "&date=")
                            .concat(encodeURIComponent(JSON.stringify(t.date)));
                        V.ZP.isLogin
                          ? this.navigateTo({ url: i })
                          : V.ZP.doLogin().then(function () {
                              setTimeout(function () {
                                e.navigateTo({ url: i });
                              }, 200);
                            });
                      },
                    },
                    {
                      key: "onClickHomeIcon",
                      value: function () {
                        var e = this.state.homeIconInfo;
                        e.url &&
                          (0 === e.url.indexOf("http")
                            ? P.Z.twebview({ data: { url: e.url } })
                            : this.navigateTo({ url: e.url }));
                      },
                    },
                    {
                      key: "skipToListImpl",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = arguments.length > 1 ? arguments[1] : void 0,
                          i = this.state,
                          a = i.hotelSearch,
                          n = i.smallHoursFlag,
                          o = a.city,
                          r = o.cityId,
                          s = o.cityName,
                          c = o.cityAddress,
                          l = o.districtId,
                          d = o.isGeo,
                          u = o.lat,
                          h = o.lng,
                          m = a.date,
                          p = m.checkInDate,
                          f = m.checkOutDate,
                          g = r == this._hotelLocateCityId,
                          v = {
                            cityId: r,
                            cityName: s,
                            cityAddress: c,
                            districtId: l,
                            checkInDate: p,
                            checkOutDate: f,
                            sameCityFlag: g,
                            smallHoursFlag: n,
                          },
                          y = "tonight" === t;
                        y &&
                          ((v.checkInDate = (0, pi.tf)()),
                          (v.checkOutDate = (0, pi.cL)()),
                          (v.smallHoursFlag = !1));
                        var b = d
                          ? {
                              filterID: "24",
                              filterType: 0,
                              scenarioType: "",
                              sceneBitMap: 0,
                              subType: "1",
                              title: ""
                                .concat(s)
                                .concat((0, pi.gP)(c, ",".concat(c))),
                              type: "24",
                              value: "".concat(u, "|").concat(h),
                            }
                          : {};
                        this.navigateTo({
                          url: Mi,
                          data: {
                            queryModel: v,
                            filterInfo: e,
                            currentCityId: this._hotelLocateCityId,
                            currentGeoInfo: b,
                          },
                        });
                      },
                    },
                    {
                      key: "onClickTonightSale",
                      value: function () {
                        var e = this.state.seasonMarketDetail,
                          t = {};
                        null != e &&
                          e.length &&
                          e[0].jumpUrl &&
                          (t = (JSON.parse(e[0].jumpUrl) || [])[0]),
                          this.ubtTrace(208546, {
                            bizKey: "hotel_home_tonightsale_click",
                          }),
                          this.skipToListImpl(t, "tonight");
                      },
                    },
                    {
                      key: "onClickDigitalGame",
                      value: function () {
                        var e = this.state.userPreferentialDetail,
                          t = {};
                        e &&
                          e.userPreferentialList &&
                          Array.isArray(e.userPreferentialList) &&
                          e.userPreferentialList[0] &&
                          e.userPreferentialList[0].jumpUrl &&
                          (t = (JSON.parse(e.userPreferentialList[0].jumpUrl) ||
                            [])[0]),
                          this.ubtTrace(208546, {
                            bizKey: "hotel_home_gameroom_click",
                          }),
                          this.skipToListImpl(t);
                      },
                    },
                    {
                      key: "onClickIconItem",
                      value: function (e) {
                        switch (e) {
                          case "hotelHomeCard":
                            this.gotoHotelKaQuanPage();
                            break;
                          case "priceTopmark_new":
                            this.toHotelBangDan();
                            break;
                          case "hotelChainQuery_new":
                            this.toEconomicList();
                            break;
                          case "hotelHomeFav":
                            this.gotoFavoriteListPage();
                            break;
                          case "hotelHomeMinSuGift":
                            this.onClickToMinSu();
                        }
                      },
                    },
                    {
                      key: "onClickLaxing",
                      value: function () {
                        var e,
                          t = this.state.longTermMarketDetail;
                        t && Array.isArray(t) && t[0] && (e = t[0].jumpUrl),
                          e &&
                            (this.ubtTrace(208546, {
                              bizKey: "hotel_home_invitate_cashback_click",
                            }),
                            0 === e.indexOf("http")
                              ? ((e = e.replace(
                                  "m.ctrip.com",
                                  y.default.h5domain
                                )),
                                P.Z.twebview({ data: { url: e } }))
                              : this.navigateTo({ url: e }));
                      },
                    },
                    {
                      key: "onClickToMinSu",
                      value: function () {
                        this.newUbtTrace(186341, "hotel_home_jpminsu");
                        this.skipToListImpl({
                          filterID: "80|3|489",
                          filterType: 0,
                          scenarioType: "CommonModule",
                          sceneBitMap: 0,
                          subType: "2",
                          title: "民宿",
                          type: "80",
                          value: "80|3|489",
                        });
                      },
                    },
                    {
                      key: "getSmallClassStr",
                      value: function (e) {
                        var t = (0, pi.gP)(
                          (null == e ? void 0 : e.length) > 11,
                          " small"
                        );
                        return "input-txt"
                          .concat((0, pi.gP)(!e, " placeholder"))
                          .concat(t);
                      },
                    },
                    {
                      key: "renderPlaceholderSwipers",
                      value: function () {
                        var e,
                          t,
                          i,
                          a = this,
                          n = this.state,
                          o = n.placeholderSwipers,
                          r = n.hotelSearch,
                          s =
                            (null == r ||
                            null === (e = r.keywordInfo) ||
                            void 0 === e ||
                            null === (t = e.data) ||
                            void 0 === t
                              ? void 0
                              : t.title) ||
                            (null == r || null === (i = r.city) || void 0 === i
                              ? void 0
                              : i.cityAddress);
                        if (s) {
                          var c = this.getSmallClassStr(s);
                          return (0, I.tZ)(v.View, {
                            className: c,
                            id: "AYBd",
                            onClick: function () {
                              return a.handleKeywordSearch();
                            },
                            children: s,
                          });
                        }
                        return null != o && o.length
                          ? (0, I.tZ)(v.View, {
                              className: "placeholder-wrap",
                              children: (0, I.tZ)(v.Swiper, {
                                className: "placeholder-swiper",
                                autoplay: "true",
                                interval: "3000",
                                circular: "true",
                                vertical: !0,
                                children: o.map(function (e, t) {
                                  return (0,
                                  I.tZ)(v.SwiperItem, { children: (0, I.tZ)(v.View, { className: "ellipsis", id: "AYBe", onClick: a.handleKeywordSearch.bind(a, e), children: e.data.title }) }, t);
                                }),
                              }),
                            })
                          : (0, I.tZ)(v.View, {
                              className: "input-txt placeholder",
                              id: "AYBf",
                              onClick: function () {
                                return a.handleKeywordSearch();
                              },
                              children: "品牌/位置/酒店名",
                            });
                      },
                    },
                    {
                      key: "showPriceCompensateDrawer",
                      value: function () {
                        this.ubtTrace(234059, { PageId: this.state.pageId }),
                          (0, wi.b)("compensate", "multi");
                      },
                    },
                    {
                      key: "onChangeShowRoomSelect",
                      value: function (e) {
                        this.ubtTrace(243340, { PageId: this.state.pageId }),
                          this.setState({ isShowRoomCountSelect: e });
                      },
                    },
                    {
                      key: "onChangeRoomCount",
                      value: function (e) {
                        var t = this.state.hotelSearch;
                        if (e == t.roomNumber)
                          this.setState({ isShowRoomCountSelect: !1 });
                        else {
                          var i = Object.assign({}, t, { roomNumber: e });
                          this.setState({
                            hotelSearch: i,
                            isShowRoomCountSelect: !1,
                          });
                        }
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e,
                          t,
                          i,
                          a,
                          n,
                          o,
                          r,
                          s,
                          c,
                          l,
                          d,
                          u = this,
                          h = this.props.hidden,
                          m = this.state,
                          p = m.pageId,
                          f = m.homeIconInfo,
                          g = m.hotelSearch,
                          b = m.checkInFlag,
                          C = m.checkOutFlag,
                          k = m.smallHoursFlag,
                          Z = m.hotelAdInfos,
                          N = m.seasonMarketDetail,
                          T = m.startTime,
                          x = m.endTime,
                          _ = m.showConfirmLocationModel,
                          D = m.hotelFilterResultDesc,
                          B = m.hotelFilterModalVisible,
                          V = m.hotelFilterModalInfo,
                          P = m.hotelCouponModalVisible,
                          M = m.hotelActivityModelVisible,
                          A = m.hotelActivityType,
                          L = m.hotelCouponModalInfo,
                          H = m.hasNewGuestPopImg,
                          X = m.newGuestActivityInfo,
                          O = m.hotelTopBannerInfo,
                          F = m.hotelTopBannerVisible,
                          Y = m.hotelActivityImg,
                          R = m.searchBtnTag,
                          z = m.subsidyConfig,
                          U = m.homeBenefits,
                          E = m.iconConfigData,
                          j = m.dateVisible,
                          G = m.swiperHeight,
                          W = m.recommendCityInfo,
                          K = m.isShowRoomCountSelect,
                          q = (0, pi.gP)(
                            null == O ? void 0 : O.desc,
                            " ".concat(null == O ? void 0 : O.desc)
                          ),
                          Q = (0, pi.gP)(
                            null == O ? void 0 : O.content,
                            '<div style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">rich_node_content</div>'.replace(
                              "rich_node_content",
                              ""
                                .concat(null == O ? void 0 : O.content)
                                .concat(q)
                            )
                          ),
                          J =
                            (null == g ||
                            null === (e = g.keywordInfo) ||
                            void 0 === e ||
                            null === (t = e.data) ||
                            void 0 === t
                              ? void 0
                              : t.title) ||
                            (null === (i = g.city) || void 0 === i
                              ? void 0
                              : i.cityAddress),
                          $ = (0, pi.gP)(
                            null === (a = g.city) || void 0 === a
                              ? void 0
                              : a.cityAddress,
                            Vi.W.my_location_on,
                            Vi.W.my_location
                          ),
                          ee =
                            null === (n = g.city) ||
                            void 0 === n ||
                            null === (o = n.cityName) ||
                            void 0 === o
                              ? void 0
                              : o.match(/\((.+)\)/g),
                          te = null == g ? void 0 : g.roomNumber,
                          ie =
                            null != ee && ee.length
                              ? g.city.cityName.split(ee[0])[0]
                              : null === (r = g.city) || void 0 === r
                              ? void 0
                              : r.cityName,
                          ae = null != ee && ee.length ? RegExp.$1 : null;
                        return (0, I.BX)(v.View, {
                          className: w.Z.mergeInnerGrayStyle(
                            (0, pi.gP)(y.default.isBaidu, "swan")
                          ),
                          style: (0, pi.LP)(!h),
                          children: [
                            (0, I.BX)(v.View, {
                              className: w.Z.mergeGrayStyle(),
                              children: [
                                (0, I.BX)(v.View, {
                                  className: "selform hotel",
                                  children: [
                                    F &&
                                      Q &&
                                      (0, I.BX)(v.View, {
                                        className: "hotel-notice",
                                        id: "AYBg",
                                        onClick:
                                          this.onClickHotelTopBanner.bind(this),
                                        children: [
                                          (0, I.tZ)(v.Image, {
                                            className: "icon",
                                            src: O.icon,
                                          }),
                                          (0, I.BX)(v.View, {
                                            className: "cont",
                                            children: [
                                              (0, I.tZ)(v.View, {
                                                className: "txt",
                                                children: (0, I.tZ)(
                                                  S.ZtRichText,
                                                  { nodes: Q }
                                                ),
                                              }),
                                              null == O ||
                                              null === (s = O.tagList) ||
                                              void 0 === s
                                                ? void 0
                                                : s.map(function (e, t) {
                                                    return (0,
                                                    I.tZ)(v.View, { className: "tag", children: e }, t);
                                                  }),
                                            ],
                                          }),
                                          (0, I.tZ)(v.View, {
                                            className: "right-title",
                                            children:
                                              null == O ? void 0 : O.rightTitle,
                                          }),
                                          (0, I.tZ)(v.View, {
                                            id: "AYBh",
                                            onClick:
                                              this.onClickCloseHotelTopBanner,
                                            children: (0, I.tZ)(v.Text, {
                                              className:
                                                "b-close ifont-closed iconfont",
                                            }),
                                          }),
                                        ],
                                      }),
                                    (0, I.BX)(v.View, {
                                      className: "index-hotel",
                                      children: [
                                        (0, I.BX)(v.View, {
                                          className: "item",
                                          children: [
                                            (0, I.BX)(v.View, {
                                              className: "city-name",
                                              id: "AYBi",
                                              onClick:
                                                this.handleSelectCity.bind(
                                                  this
                                                ),
                                              children: [
                                                (0, I.tZ)(v.Text, {
                                                  className: "city-desc",
                                                  children: ae,
                                                }),
                                                (0, I.tZ)(v.Text, {
                                                  className: "name",
                                                  children: ie,
                                                }),
                                                (0, I.tZ)(v.Image, {
                                                  className: "arrow-icon",
                                                  src: Vi.W.location_arrow,
                                                  webp: !0,
                                                }),
                                              ],
                                            }),
                                            (0, I.tZ)(v.View, {
                                              className: "vline",
                                            }),
                                            (0, I.BX)(v.View, {
                                              className: "keyword-info",
                                              children: [
                                                this.renderPlaceholderSwipers(),
                                                Boolean(J) &&
                                                  (0, I.tZ)(v.View, {
                                                    className: "close-wrap",
                                                    id: "AYBj",
                                                    onClick:
                                                      this.clearHotelKeyword,
                                                    children: (0, I.tZ)(
                                                      v.Image,
                                                      {
                                                        src: Vi.W.search_close,
                                                        className: "s-close",
                                                      }
                                                    ),
                                                  }),
                                              ],
                                            }),
                                            (0, I.tZ)(v.View, {
                                              className: "mylocation-wrap",
                                              id: "AYBk",
                                              onClick:
                                                this.handleMyLocation.bind(
                                                  this
                                                ),
                                              children: (0, I.tZ)(v.Image, {
                                                className: "mylocation",
                                                mode: "widthFix",
                                                src: $,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (null == W ? void 0 : W.cityName) &&
                                          (0, I.BX)(v.View, {
                                            className: "wait-travel",
                                            children: [
                                              (0, I.tZ)(v.Image, {
                                                className: "triangle",
                                                src: Vi.W.triangle,
                                              }),
                                              (0, I.BX)(v.View, {
                                                className: "txt",
                                                children: [
                                                  (0, I.BX)(v.Text, {
                                                    id: "AYBl",
                                                    onClick:
                                                      this.onHanleRecommentCity,
                                                    children: [
                                                      "试试：",
                                                      W.cityName,
                                                    ],
                                                  }),
                                                  (0, I.tZ)(v.Text, {
                                                    className: "vline",
                                                  }),
                                                  (0, I.tZ)(v.Text, {
                                                    className: "close",
                                                    id: "AYBm",
                                                    onClick:
                                                      this.onCloseRecommendCity,
                                                    children: "×",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        (0, I.BX)(v.View, {
                                          className: "item date",
                                          children: [
                                            (0, I.BX)(v.View, {
                                              className: "date-content",
                                              id: "AYBn",
                                              onClick:
                                                this.handleHotelCalender.bind(
                                                  this
                                                ),
                                              children: [
                                                (0, I.BX)(v.View, {
                                                  className: "check-in",
                                                  children: [
                                                    (0, I.tZ)(v.View, {
                                                      className: "date-desc",
                                                      children:
                                                        g.date
                                                          .checkInDay_disp[0],
                                                    }),
                                                    (0, I.tZ)(v.View, {
                                                      className:
                                                        "label " +
                                                        (b
                                                          ? "txt before-date"
                                                          : ""),
                                                      children: b
                                                        ? "凌晨入住"
                                                        : g.date
                                                            .checkInDay_disp[1],
                                                    }),
                                                  ],
                                                }),
                                                (0, I.BX)(v.View, {
                                                  className: "total-day-count",
                                                  children: [
                                                    g.date.totalDays,
                                                    "晚",
                                                  ],
                                                }),
                                                (0, I.BX)(v.View, {
                                                  className: "check-out",
                                                  children: [
                                                    (0, I.tZ)(v.Text, {
                                                      className: "date-desc",
                                                      children:
                                                        g.date
                                                          .checkOutDay_disp[0],
                                                    }),
                                                    (0, I.tZ)(v.Text, {
                                                      className:
                                                        "label " +
                                                        (C
                                                          ? "txt before-date"
                                                          : ""),
                                                      children: C
                                                        ? "中午离店"
                                                        : g.date
                                                            .checkOutDay_disp[1],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, I.BX)(v.View, {
                                              className: "hotel-room-count",
                                              onClick: function () {
                                                return u.onChangeShowRoomSelect(
                                                  !0
                                                );
                                              },
                                              children: [
                                                (0, I.BX)(v.Text, {
                                                  className: "name",
                                                  children: [te, "间"],
                                                }),
                                                (0, I.tZ)(v.Image, {
                                                  className: "arrow-icon",
                                                  src: Vi.W.location_arrow,
                                                  webp: !0,
                                                }),
                                              ],
                                            }),
                                            (0, pi.Kd)() &&
                                              (0, I.tZ)(v.View, {
                                                className: "night",
                                                children: (0, I.tZ)(v.View, {
                                                  className: "content",
                                                  children:
                                                    "今晨6点前入住，请选择" +
                                                    (0, pi._n)((0, pi.F)())[0] +
                                                    "入住",
                                                }),
                                              }),
                                          ],
                                        }),
                                        (0, I.BX)(v.View, {
                                          className: "item keyword",
                                          id: "AYBo",
                                          onClick:
                                            this.onClickShowHotelFilterModal,
                                          children: [
                                            (0, I.tZ)(v.View, {
                                              className: "input-txt ".concat(
                                                D ? "" : "placeholder"
                                              ),
                                              children: D || "星级/价格",
                                            }),
                                            D &&
                                              (0, I.tZ)(v.View, {
                                                className: "close-wrap",
                                                id: "AYBp",
                                                onClick: function (e) {
                                                  e.stopPropagation(),
                                                    u.onClickClearHotelFilterResult();
                                                },
                                                children: (0, I.tZ)(v.Image, {
                                                  src: Vi.W.search_close,
                                                  className: "s-close",
                                                }),
                                              }),
                                            (null == f ? void 0 : f.img) &&
                                              (0, I.tZ)(v.View, {
                                                className: "keyword-right",
                                                id: "AYBq",
                                                onClick: this.onClickHomeIcon,
                                                children: (0, I.tZ)(v.Image, {
                                                  className: "img",
                                                  src: f.img,
                                                }),
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, I.tZ)(v.Form, {
                                      reportSubmit: "true",
                                      onSubmit: this.searchSubmit,
                                      children: (0, I.BX)(v.View, {
                                        className: "hotel",
                                        id: "AYBr",
                                        onClick: this.noop.bind(this),
                                        children: [
                                          (0, I.BX)(v.Button, {
                                            formType: "submit",
                                            className: "btn-sel ".concat(
                                              y.default.zxTyStr
                                            ),
                                            children: [
                                              "酒店查询 ",
                                              (null == R ? void 0 : R.url) &&
                                                (0, I.tZ)(v.Image, {
                                                  className: "btn-tag",
                                                  src: R.url,
                                                  mode: "widthFix",
                                                }),
                                            ],
                                          }),
                                          (0, I.tZ)(v.View, {
                                            className: "comp-wrap",
                                            id: "AYBs",
                                            onClick:
                                              this.showPriceCompensateDrawer,
                                            children: (0, I.tZ)(v.Image, {
                                              className: "comp",
                                              src: Vi.W.search_btn_banner,
                                              mode: "widthFix",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, I.BX)(v.View, {
                                  className: "banners-wrap",
                                  children: [
                                    (null == Z ? void 0 : Z.length) > 0 &&
                                      (0, I.tZ)(v.View, {
                                        className: "advs-banner hotel",
                                        children: (0, I.tZ)(v.Swiper, {
                                          className: "advs-banner-bd",
                                          autoplay: "true",
                                          interval: "3000",
                                          circular: "true",
                                          indicatorColor: "#E5E5E5",
                                          indicatorActiveColor: Pi
                                            ? "#FC6E51"
                                            : "#0080FF",
                                          style: { height: G },
                                          children: Z.map(function (e, t) {
                                            return (0,
                                            I.tZ)(v.SwiperItem, { style: { height: G }, children: (0, I.tZ)(v.View, { className: "item", children: (0, I.tZ)(v.Image, { className: "img", src: e.imgUrl, id: "AYBt", onClick: u.onHotelAdClick.bind(u, t), mode: "widthFix", onLoad: u.onAdBannerImageLoad }) }) }, t);
                                          }),
                                        }),
                                      }),
                                    !(
                                      null != E &&
                                      null !== (c = E.items) &&
                                      void 0 !== c &&
                                      c.length
                                    ) &&
                                      (0, I.tZ)(ki.Z, {
                                        height: "70px",
                                        background: "#ffffff",
                                      }),
                                    (0, I.tZ)(v.View, {
                                      className: "hotel-config-entrances",
                                      style: (0, pi.LP)(
                                        null == E ||
                                          null === (l = E.items) ||
                                          void 0 === l
                                          ? void 0
                                          : l.length,
                                        "flex"
                                      ),
                                      children:
                                        null == E ||
                                        null === (d = E.items) ||
                                        void 0 === d
                                          ? void 0
                                          : d.map(function (e, t) {
                                              var i,
                                                a = e.txtStr,
                                                n = e.image,
                                                o = e.atmosphereImage,
                                                r = e.name,
                                                s = (
                                                  null !== (i = E.cityIds) &&
                                                  void 0 !== i &&
                                                  i.length
                                                    ? E.cityIds.includes(
                                                        g.city.cityId
                                                      )
                                                    : Boolean(o)
                                                )
                                                  ? o
                                                  : n;
                                              return (0, I.BX)(
                                                v.View,
                                                {
                                                  className: "item",
                                                  id: "AYBu",
                                                  onClick: function () {
                                                    return u.onClickIconItem(r);
                                                  },
                                                  children: [
                                                    (0, I.tZ)(v.View, {
                                                      className: "icon-wrap",
                                                      children: (0, I.tZ)(
                                                        v.Image,
                                                        {
                                                          className: "icon",
                                                          src: s,
                                                        }
                                                      ),
                                                    }),
                                                    (0, I.tZ)(v.View, {
                                                      className: "title",
                                                      children: a,
                                                    }),
                                                  ],
                                                },
                                                t
                                              );
                                            }),
                                    }),
                                  ],
                                }),
                                y.default.isWechat &&
                                  (0, I.tZ)(v.View, {
                                    className: "hotel-sale",
                                    children: (0, I.BX)(v.View, {
                                      className: "hotel-sale-hd",
                                      children: [
                                        !(null != N && N.length) &&
                                          (0, I.tZ)(ki.Z, {
                                            height: "183px",
                                            background: "#ffffff",
                                          }),
                                        (null == N ? void 0 : N.length) > 0 &&
                                          (0, I.tZ)(Bi, {
                                            data: N[0],
                                            startTime: T,
                                            endTime: x,
                                            onClickTonightSale:
                                              this.onClickTonightSale,
                                            getHotelMarketInfo:
                                              this.getHotelMarketInfo,
                                          }),
                                        (0, I.BX)(v.View, {
                                          className: "item sale-right",
                                          children: [
                                            (0, I.tZ)(v.View, {
                                              className: "esports",
                                              id: "AYBv",
                                              onClick: this.onClickDigitalGame,
                                              children: (0, I.tZ)(v.Image, {
                                                className: "img",
                                                src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/zhouwudacu/dianjing_sale@3x.webp",
                                                webp: !0,
                                              }),
                                            }),
                                            (0, I.tZ)(v.View, {
                                              className: "rank",
                                              id: "AYBw",
                                              onClick: this.onClickLaxing,
                                              children: (0, I.tZ)(v.Image, {
                                                className: "img",
                                                src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/zhouwudacu/laxin_sale@3x.webp",
                                                webp: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                (0, I.BX)(v.View, {
                                  className: "index-hotel-advantage",
                                  children: [
                                    (0, I.tZ)(v.View, {
                                      className: "tit",
                                      children:
                                        (Pi ? "铁友" : "智行") +
                                        "酒店·省钱订房",
                                    }),
                                    (0, I.BX)(v.View, {
                                      className: "item",
                                      children: [
                                        (0, I.tZ)(v.Text, {
                                          className:
                                            "ifont-line-hotel iconfont",
                                        }),
                                        "海量酒店",
                                      ],
                                    }),
                                    (0, I.BX)(v.View, {
                                      className: "item",
                                      children: [
                                        (0, I.tZ)(v.Text, {
                                          className:
                                            "ifont-line-hongbao iconfont",
                                        }),
                                        "订房送红包",
                                      ],
                                    }),
                                    (0, I.BX)(v.View, {
                                      className: "item",
                                      children: [
                                        (0, I.tZ)(v.Text, {
                                          className:
                                            "ifont-line-shield iconfont",
                                        }),
                                        "有房保障",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            _ &&
                              (0, I.tZ)(v.View, {
                                className: "pop-mask " + (_ ? "active" : ""),
                                id: "AYBx",
                                onClick: this.handleHideConfirmModel.bind(this),
                                catchtouchmove: "noop",
                              }),
                            _ &&
                              (0, I.BX)(v.View, {
                                className: "dialog",
                                children: [
                                  (0, I.tZ)(v.View, {
                                    className: "dialog-hd",
                                    children: (0, I.tZ)(v.Text, {
                                      className: "dialog-title",
                                      children: "开启定位",
                                    }),
                                  }),
                                  (0, I.tZ)(v.View, {
                                    className: "dialog-bd",
                                    children: "找附近酒店更方便哦",
                                  }),
                                  (0, I.BX)(v.View, {
                                    className: "dialog-ft",
                                    children: [
                                      (0, I.tZ)(v.Button, {
                                        className:
                                          "dialog-btn dialog-btn-default",
                                        id: "AYBy",
                                        onClick:
                                          this.handleHideConfirmModel.bind(
                                            this
                                          ),
                                        children: "稍等一会",
                                      }),
                                      (0, I.tZ)(v.Button, {
                                        className:
                                          "dialog-btn dialog-btn-primary",
                                        openType: "openSetting",
                                        onOpenSetting: this.handlerOpenSetting,
                                        children: "立即开启",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            P &&
                              (0, I.tZ)(Di, {
                                pageId: p,
                                homeBenefits: U,
                                hasNewGuestPopImg: H,
                                newGuestActivityInfo: X,
                                hotelCouponModalInfo: L,
                                onClickNewGuestGotCoupon:
                                  this.onClickNewGuestGotCoupon,
                                onHideCouponModal: this.onHideCouponModal,
                                onReceiveCouponInModal:
                                  this.onReceiveCouponInModal,
                              }),
                            M &&
                              1 !== A &&
                              (0, I.BX)(v.View, {
                                children: [
                                  (0, I.tZ)(v.View, { className: "shade-box" }),
                                  (0, I.BX)(v.View, {
                                    className: "pop-hotel-activity",
                                    children: [
                                      (0, I.tZ)(v.Image, {
                                        className: "avtivity-img",
                                        src: Y,
                                        id: "AYBz",
                                        onClick: this.skipToActivityFromPop,
                                        mode: "widthFix",
                                      }),
                                      (0, I.tZ)(v.Text, {
                                        className: "ifont-closed iconfont",
                                        id: "AYCA",
                                        onClick:
                                          this.onClickHideHotelActivityModal,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            (0, I.BX)(S.ZtActivityPop, {
                              className: "hotel-activity-pop full-screen",
                              show: M && 1 === A,
                              onClose: this.onClickHideHotelActivityModal,
                              onWrapClose: this.onClickHideHotelActivityModal,
                              isShowClose: !1,
                              children: [
                                (0, I.tZ)(v.Image, {
                                  className: "activity-img",
                                  src: Y,
                                  mode: "widthFix",
                                  lazyLoad: !0,
                                  webp: !0,
                                }),
                                (0, I.tZ)(v.View, {
                                  className: "btn",
                                  id: "AYCB",
                                  onClick: this.skipToActivityFromPop,
                                }),
                                (0, I.tZ)(v.Text, {
                                  className: "ifont-closed iconfont",
                                  id: "AYCC",
                                  onClick: this.onClickHideHotelActivityModal,
                                }),
                              ],
                            }),
                            (0, I.tZ)(Ni, {
                              visible: B,
                              modalInfo: V,
                              onClose:
                                this.onClickHotelFilterModalClose.bind(this),
                              onComfirm:
                                this.onClickHotelFilterModalComfirm.bind(this),
                            }),
                            !(null == z || !z.jsonUrl) &&
                              (0, I.tZ)(v.Image, {
                                src: z.jsonUrl,
                                className: "free-room-icon",
                                mode: "widthFix",
                                id: "AYCD",
                                onClick: function () {
                                  return u.toHotelWeb(z.url);
                                },
                              }),
                            (0, I.tZ)(bi.Z, {
                              calendarParams: g.date,
                              smallHoursFlag: k,
                              visible: j,
                              onConfirm: this.onDateChange,
                              onClose: this.onDateClose,
                            }),
                            (0, I.tZ)(yi.Z, {}),
                            (0, I.tZ)(Ci.Z, {
                              isVisible: K,
                              currentCount: te,
                              pageId: p,
                              onConfirm: function (e) {
                                u.onChangeRoomCount(e);
                              },
                              onClose: function () {
                                u.onChangeShowRoomSelect(!1);
                              },
                            }),
                          ],
                        });
                      },
                    },
                  ]),
                  i
                );
              })(p.default.PureComponent))
            ) || ni,
          Li = {
            background: y.default.isTieyou
              ? "linear-gradient(-180deg, rgb(63, 72, 115) 62.04%, rgb(245, 245, 245) 100%)"
              : "linear-gradient(-180deg, rgb(166, 203, 255) 0%, rgb(245, 245, 245) 100%)",
          },
          Hi = [
            { title: "火车票", tab: "train" },
            { title: "机票", tab: "flight" },
            {
              title: "".concat(
                "dt" === y.default.jetpack ||
                  y.default.isAlipay ||
                  y.default.isTT ||
                  y.default.isH5Hzbm
                  ? "汽车"
                  : "汽车/船票"
              ),
              tab: "bus",
            },
            { title: y.default.isTieyou ? "酒店" : "酒店民宿", tab: "hotel" },
          ],
          Xi = y.default.isTieyou ? "铁友火车票" : "智行火车票",
          Oi = Hi;
        if ("dt" === y.default.jetpack) {
          var Fi = Oi.findIndex(function (e) {
            return "bus" === e.tab;
          });
          Oi.unshift(Oi.splice(Fi, 1)[0]);
        }
        if (y.default.isKMFlight) {
          var Yi = Oi.findIndex(function (e) {
            return "flight" === e.tab;
          });
          Oi.unshift(Oi.splice(Yi, 1)[0]);
        }
        if (
          ("kyb" === y.default.jetpack &&
            (Oi = Oi.filter(function (e) {
              return "bus" === e.tab;
            })),
          y.default.isH5Hzbm)
        ) {
          var Ri = Oi.pop();
          Oi = [Ri].concat((0, m.Z)(Oi));
        }
        y.default.isTT &&
          (Oi = Oi.filter(function (e) {
            return "bus" !== e.tab;
          })),
          y.default.isTieyou && Oi.push({ title: "门票", tab: "ticket" });
        var zi = {
            hotel:
              "https://images3.c-ctrip.com/ztrip/train_bin/23-04/zxlx/img_zxlx_bg_jd@3x.png",
            train:
              "https://images3.c-ctrip.com/ztrip/train_bin/23-04/zxlx/img_zxlx_bg_hcp@3x.png",
            bus: "https://images3.c-ctrip.com/ztrip/train_bin/23-04/zxlx/img_zxlx_bg_qcp@3x.png",
            flight:
              "https://images3.c-ctrip.com/ztrip/train_bin/23-04/zxlx/img_zxlx_bg_jp@3x.png",
          },
          Ui =
            (0, C.h)(!1, { usePageWrapper: !0 })(
              (oi = (function (e) {
                (0, d.Z)(i, e);
                var t = (0, u.Z)(i);
                function i() {
                  var e;
                  return (
                    (0, s.Z)(this, i),
                    (e = t.call(this)),
                    (0, h.Z)((0, l.Z)(e), "pageRootClassName", "home-page"),
                    (0, h.Z)((0, l.Z)(e), "switchTab", function (t) {
                      if (y.default.isH5Hzbm && "bus" !== t)
                        return (0, b.showToast)("暂未开通");
                      "ticket" !== t
                        ? t !== e.state.tab &&
                          (e.setState({ tab: t }), e.changeScrollbar(t))
                        : e.navigateTo({
                            url: "/pages/taroCRN/ticket/pages/index/index?source=tieyou",
                          });
                    }),
                    (0, h.Z)(
                      (0, l.Z)(e),
                      "TIMELINE_PICTURE",
                      "https://images3.c-ctrip.com/zt/0yingxiao/202210/shichang/xiaochengxu.jpg"
                    ),
                    (0, h.Z)((0, l.Z)(e), "onPageScroll", function (t) {
                      var i = e.state,
                        a = i.tab,
                        n = i.showToTopBtn;
                      "flight" === a &&
                        (t.scrollTop > 500 && !n
                          ? e.setState({ showToTopBtn: !0 })
                          : t.scrollTop <= 500 &&
                            n &&
                            e.setState({ showToTopBtn: !1 }));
                    }),
                    (0, h.Z)((0, l.Z)(e), "scrollToTop", function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 300;
                      g().pageScrollTo({ scrollTop: 0, duration: t }),
                        e.setState({ showToTopBtn: !1 });
                    }),
                    (0, h.Z)(
                      (0, l.Z)(e),
                      "toFlightInviteNewGuest",
                      function () {
                        var t = e.state.isTieyou,
                          i = "https://"
                            .concat(
                              y.default.h5domain,
                              "/webapp/train/activity/20200713-ztrip-flight-invite-prize?isHideNavBar=YES&partner="
                            )
                            .concat(t ? "tieyou" : "zhixing", "&needLogin=1");
                        P.Z.twebview({ data: { url: i } });
                      }
                    ),
                    (0, h.Z)((0, l.Z)(e), "getFlightCoupons", function () {
                      (0, k.DK)(
                        {},
                        { checkLogin: !1, checkFrameworkLogin: !1 }
                      ).then(
                        function (t) {
                          var i = (t || {}).resultCode,
                            a = t.couponList || [];
                          if (1 === i && a.length > 0) {
                            var n = function (e) {
                                var t, i, a;
                                return (
                                  "Y" ==
                                  (null == e ||
                                  null === (t = e.rules) ||
                                  void 0 === t ||
                                  null ===
                                    (i = t.find(function (e) {
                                      return "isXProduct" == e.Key;
                                    })) ||
                                  void 0 === i ||
                                  null === (a = i.Value) ||
                                  void 0 === a
                                    ? void 0
                                    : a.toUpperCase())
                                );
                              },
                              o = a
                                .filter(function (e) {
                                  return (
                                    3 !== e.couponState &&
                                    200 === e.couponType &&
                                    !n(e)
                                  );
                                })
                                .sort(function (e, t) {
                                  return t.couponPrice - e.couponPrice;
                                }),
                              r = a
                                .filter(function (e) {
                                  return (
                                    3 !== e.couponState &&
                                    500 === e.couponType &&
                                    !n(e)
                                  );
                                })
                                .sort(function (e, t) {
                                  return t.couponPrice - e.couponPrice;
                                }),
                              s = o[0] ? o[0].couponPrice : 0,
                              c = r[0] ? r[0].couponPrice : 0;
                            e.setState({ couponPrice: s + c });
                          } else e.setState({ couponPrice: 0 });
                        },
                        function (e) {
                          console.log(e);
                        }
                      );
                    }),
                    (0, h.Z)((0, l.Z)(e), "gotoKaQuanPage", function () {
                      var t =
                        "hotel" === e.state.tab
                          ? "/pages/hotel/coupon/coupon"
                          : "/pages/train/usercenter/kaquan/kaquan";
                      V.ZP.isLogin
                        ? e.navigateTo({ url: t })
                        : V.ZP.doLogin().then(function () {
                            e.navigateTo({ url: t });
                          });
                    }),
                    (0, h.Z)((0, l.Z)(e), "showGuidePop", function () {
                      e.setState({
                        isShowGuideDialog: !e.state.isShowGuideDialog,
                      });
                    }),
                    (0, h.Z)((0, l.Z)(e), "goBigSearch", function () {
                      e.navigateTo({
                        url: "/pages/usercenter/globalSearch/index",
                      }),
                        e.ubtTrace("TZWHomePage_Search_click", {
                          PageId: e.pageId,
                        });
                    }),
                    (0, h.Z)(
                      (0, l.Z)(e),
                      "pageId",
                      y.default.isTieyou ? "10320660963" : "10320660959"
                    ),
                    (e.state = {
                      isBaidu: y.default.isBaidu,
                      canUseCustomNav: w.Z.canUseCustomNav,
                      statusBarHeight: w.A.statusBarHeight,
                      indexTitle: Xi,
                      showSignInEntrance:
                        y.default.isWechat && "kyb" !== y.default.jetpack,
                      isLogin: !1,
                      tab: "train",
                      innerTab: "",
                      showToTopBtn: !1,
                      onLoadOpts: {},
                      isPageBottom: !1,
                      hotelCornerMark: "",
                      flightCornerMark: "",
                      isRefreshHotelData: !1,
                      scrollBarClass: "first-transform",
                      initTabs: "",
                      isShowGuideDialog: !1,
                    }),
                    (e.autoExpose = !0),
                    e
                  );
                }
                return (
                  (0, c.Z)(i, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var e = this,
                          t = (0, f.getCurrentInstance)().router.params;
                        t.tab = w.Z.getTabFromOldParam(t);
                        var i = t || {},
                          a = i.tab,
                          n = i.innerTab,
                          o = i.ext_source,
                          r = void 0 === o ? "" : o;
                        this.setState({
                          onLoadOpts: t,
                          tab: a || "train",
                          indexTitle:
                            "kyb" === y.default.jetpack
                              ? "全国客运购票平台"
                              : Xi,
                          innerTab: n,
                          initTabs: "".concat(a, ","),
                        }),
                          this.changeScrollbar(a),
                          this.getHotelCornerMark(),
                          r &&
                            this.ubtTrace(138035, {
                              source: r,
                              userName: V.ZP.userName || "",
                              openid: V.ZP.openid || "",
                              cid: V.ZP.cid || "",
                            }),
                          setTimeout(
                            function () {
                              e.setState({
                                initTabs: "".concat(
                                  Oi.map(function (e) {
                                    return e.tab;
                                  }).join(","),
                                  ","
                                ),
                              });
                            },
                            y.default.isAlipay ? 500 : 300
                          );
                      },
                    },
                    {
                      key: "renderHeaderView",
                      value: function () {
                        var e,
                          t = this,
                          i = this.state,
                          a = i.tab,
                          n = i.scrollBarClass,
                          o = i.isShowSmallTab;
                        return ["st", "zxdj", "zxtj"].includes(
                          y.default.jetpack
                        )
                          ? (0, I.tZ)(U, {
                              tab: a,
                              onBack: function () {
                                return g().getCurrentPages().length > 1
                                  ? t.navigateBack()
                                  : w.Z.relaunchHome();
                              },
                            })
                          : (0, I.BX)(v.Block, {
                              children: [
                                (0, I.tZ)(Y, {
                                  title: this.state.indexTitle,
                                  showGuidePop: this.showGuidePop,
                                  showSignInEntrance:
                                    this.state.showSignInEntrance,
                                  toSignInActivity:
                                    this.toSignInActivity.bind(this),
                                  observeCallback: function (e) {
                                    t.setState({
                                      isShowSmallTab: !(
                                        null == e || !e.intersectionRatio
                                      ),
                                    });
                                  },
                                }),
                                (null === (e = Oi) || void 0 === e
                                  ? void 0
                                  : e.length) > 1 &&
                                  (0, I.tZ)(Q, {
                                    tabList: Oi,
                                    selectTab: a,
                                    switchTab: function (e) {
                                      return t.switchTab(e);
                                    },
                                    scrollBarClass: n,
                                    isShowSmallTab: o,
                                  }),
                              ],
                            });
                      },
                    },
                    {
                      key: "renderBackgroundView",
                      value: function () {
                        var e = this.state.tab;
                        return ["st", "zxdj", "zxtj"].includes(
                          y.default.jetpack
                        )
                          ? (0, I.tZ)(v.View, {
                              className: "page-wrapper-bg-view",
                              style: "height: 172px;background: url(".concat(
                                zi[e],
                                ");background-size: 100% 100%"
                              ),
                            })
                          : (0, I.tZ)(v.View, {
                              className: "page-wrapper-bg-view",
                              style: (0, r.Z)({}, Li),
                            });
                      },
                    },
                    {
                      key: "componentDidShow",
                      value: function () {
                        this.getFlightCoupons(), this.refreshHotelData();
                      },
                    },
                    {
                      key: "changeScrollbar",
                      value: function (e) {
                        for (
                          var t = Oi, i = 0, a = "", n = 0;
                          n < t.length;
                          n++
                        )
                          if (t[n].tab === e) {
                            i = n;
                            break;
                          }
                        switch (i) {
                          case 0:
                            a = "first-transform";
                            break;
                          case 1:
                            a = "second-transform";
                            break;
                          case 2:
                            a = "third-transform";
                            break;
                          case 3:
                            a = "fourth-transform";
                            break;
                          default:
                            a = "first-transform";
                        }
                        this.setState({ scrollBarClass: a });
                      },
                    },
                    {
                      key: "onShareTimeline",
                      value: function () {
                        return {
                          query: "aid=10000704&sid=10000001",
                          title: "智行火车票机票抢票神器",
                          imageUrl: "",
                        };
                      },
                    },
                    {
                      key: "toSignInActivity",
                      value: function () {
                        var e = X()().format("YYYY-MM-DD");
                        g().setStorageSync("signin-index", {
                          time: e,
                          isClicked: !0,
                        }),
                          w.Z.commonNavigator(
                            "https://".concat(
                              y.default.h5domain,
                              "/ztrip/webapp/ztrip-member/punch?ishidenavbar=yes&isImmersiveMode=YES&needLogin=1"
                            )
                          );
                      },
                    },
                    {
                      key: "getHotelCornerMark",
                      value: (function () {
                        var e = (0, o.Z)(
                          (0, n.Z)().mark(function e() {
                            var t, i, a;
                            return (0, n.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        (0, Z.HX)({})
                                      );
                                    case 3:
                                      1 === (t = e.sent).resultCode &&
                                        t.tipList &&
                                        ((i = t.tipList.find(function (e) {
                                          return 300 === e.couponType;
                                        })),
                                        (a =
                                          t.tipList.find(function (e) {
                                            return 200 === e.couponType;
                                          }) || {}),
                                        i &&
                                          i.tag &&
                                          this.setState({
                                            hotelCornerMark: i.tag,
                                          }),
                                        this.setState({
                                          flightCornerMark: a.tag || "",
                                        })),
                                        (e.next = 10);
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(0)),
                                        console.log(e.t0);
                                    case 10:
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
                      key: "onReachBottom",
                      value: function () {
                        this.setState({ isPageBottom: !0 });
                      },
                    },
                    {
                      key: "refreshBottomData",
                      value: function () {
                        this.setState({ isPageBottom: !1 });
                      },
                    },
                    {
                      key: "refreshHotelData",
                      value: function () {
                        this.setState({ isRefreshHotelData: !0 });
                      },
                    },
                    {
                      key: "updateRefreshHotelData",
                      value: function () {
                        this.setState({ isRefreshHotelData: !1 });
                      },
                    },
                    { key: "setHeight", value: function () {} },
                    {
                      key: "updateShareMessage",
                      value: function (e, t) {
                        var i = this._shareData || {};
                        (i[e] = t), (this._shareData = i);
                      },
                    },
                    {
                      key: "onShareAppMessage",
                      value: function () {
                        var e = this._shareData || {},
                          t = this.state,
                          i = t.tab,
                          a = t.indexTitle,
                          n = e[i] || {},
                          o = n.title,
                          r = void 0 === o ? "" : o,
                          s = n.path;
                        return {
                          title: r || a,
                          path: (void 0 === s ? "" : s) || "/pages/home/index",
                          imageUrl:
                            "https://images3.c-ctrip.com/ztrip/train_xie/2022-04/xcx_fxtjpg.jpg",
                        };
                      },
                    },
                    {
                      key: "renderTrainModule",
                      value: function () {
                        var e = this,
                          t = this.state,
                          i = t.tab,
                          a = t.onLoadOpts;
                        return (0, I.tZ)(hi, {
                          hidden: "train" !== i,
                          onSwitchTab: function (t) {
                            e.switchTab(t);
                          },
                          onLoadOpts: a,
                          onShareDataUpdate: this.updateShareMessage.bind(this),
                          pageId: this.pageId,
                        });
                      },
                    },
                    {
                      key: "renderFlightModule",
                      value: function () {
                        var e = this.state,
                          t = e.tab,
                          i = e.innerTab,
                          a = e.showToTopBtn,
                          n = e.onLoadOpts,
                          o = {
                            gotoKaQuanPage: this.gotoKaQuanPage,
                            getFlightCoupons: this.getFlightCoupons,
                            scrollToTop: this.scrollToTop,
                          };
                        return (0, I.tZ)(Ce, {
                          showToTopBtn: a,
                          hidden: "flight" !== t,
                          functions: o,
                          onShareDataUpdate: this.updateShareMessage.bind(this),
                          onLoadOpts: n,
                          innerTab: i,
                          pageId: this.pageId,
                        });
                      },
                    },
                    {
                      key: "renderHotelModule",
                      value: function () {
                        var e = this.state,
                          t = e.tab,
                          i = e.onLoadOpts,
                          a = e.isPageBottom,
                          n = e.isRefreshHotelData;
                        return (0, I.tZ)(Ai, {
                          hidden: "hotel" !== t,
                          isPageBottom: a,
                          isRefreshHotelData: n,
                          onRefreshHotelData:
                            this.updateRefreshHotelData.bind(this),
                          onRefreshBottomData:
                            this.refreshBottomData.bind(this),
                          onShareDataUpdate: this.updateShareMessage.bind(this),
                          onLoadOpts: i,
                        });
                      },
                    },
                    {
                      key: "renderBusModule",
                      value: function () {
                        var e = this.state,
                          t = e.onLoadOpts,
                          i = e.tab,
                          a = e.innerTab;
                        return (0, I.tZ)($e, {
                          tab: i,
                          innerTab: a,
                          onShareDataUpdate: this.updateShareMessage.bind(this),
                          onLoadOpts: t,
                        });
                      },
                    },
                    {
                      key: "renderStContent",
                      value: function (e) {
                        var t = (0, I.tZ)(v.View, {});
                        switch (e) {
                          case "train":
                            t = this.renderTrainModule();
                            break;
                          case "flight":
                            t = this.renderFlightModule();
                            break;
                          case "bus":
                            t = this.renderBusModule();
                            break;
                          case "hotel":
                            t = this.renderHotelModule();
                            break;
                          default:
                            t = this.renderTrainModule();
                        }
                        return t;
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          t = this.state,
                          i = t.isTieyou,
                          a = (t.isBaidu, t.canUseCustomNav),
                          n = t.statusBarHeight,
                          o = (t.isLogin, t.tab),
                          r = t.couponPrice,
                          s = t.hotelCornerMark,
                          c = t.flightCornerMark,
                          l = t.scrollBarClass,
                          d = t.initTabs,
                          u = t.isShowGuideDialog,
                          h = Oi;
                        return ["st", "zxdj", "zxtj"].includes(
                          y.default.jetpack
                        )
                          ? (0, I.BX)(v.View, {
                              className: w.Z.mergeInnerGrayStyle(
                                "home-index ".concat(i ? "ty" : "zx")
                              ),
                              children: [
                                (0, I.tZ)(v.View, {
                                  className: w.Z.mergeGrayStyle(),
                                  children: (0, I.tZ)(v.View, {
                                    className: w.Z.mergeInnerGrayStyle(
                                      "index-bd index-bd-".concat(o)
                                    ),
                                    style:
                                      "marginTop: 12px;" +
                                      "".concat(
                                        "train" === o
                                          ? ""
                                          : "padding-bottom: 50px;"
                                      ),
                                    id: "home-search-content",
                                    children: this.renderStContent(o),
                                  }),
                                }),
                                (0, I.tZ)(M.Z, {
                                  ref: function (t) {
                                    e.onDialogAttach(t);
                                  },
                                }),
                                (0, I.tZ)(A.Z, {
                                  ref: function (t) {
                                    e.onDrawerAttach(t);
                                  },
                                }),
                                (0, I.tZ)(L.Z, {}),
                              ],
                            })
                          : (0, I.BX)(v.View, {
                              className: w.Z.mergeInnerGrayStyle(
                                "home-index ".concat(i ? "ty" : "zx")
                              ),
                              children: [
                                (0, I.BX)(v.View, {
                                  className: w.Z.mergeGrayStyle(),
                                  children: [
                                    (0, I.tZ)(E, {
                                      onSearch: this.goBigSearch,
                                    }),
                                    (null == h ? void 0 : h.length) > 1 &&
                                      (0, I.tZ)(v.CustomWrapper, {
                                        children: (0, I.tZ)(W, {
                                          tabList: h,
                                          selectTab: o,
                                          switchTab: function (t) {
                                            return e.switchTab(t);
                                          },
                                          scrollBarClass: l,
                                          couponPrice: r,
                                          hotelCornerMark: s,
                                          flightCornerMark: c,
                                        }),
                                      }),
                                  ],
                                }),
                                (0, I.BX)(v.View, {
                                  className: w.Z.mergeInnerGrayStyle(
                                    "index-bd index-bd-".concat(o)
                                  ),
                                  style: "".concat(
                                    "train" === o ? "" : "padding-bottom: 50px;"
                                  ),
                                  id: "home-search-content",
                                  children: [
                                    (0, I.tZ)(v.View, {
                                      children:
                                        d.indexOf("train") >= 0 &&
                                        this.renderTrainModule(),
                                    }),
                                    (0, I.tZ)(v.View, {
                                      children:
                                        d.indexOf("flight") >= 0 &&
                                        this.renderFlightModule(),
                                    }),
                                    (0, I.tZ)(v.View, {
                                      children:
                                        d.indexOf("hotel") >= 0 &&
                                        this.renderHotelModule(),
                                    }),
                                    (0, I.tZ)(v.View, {
                                      children:
                                        d.indexOf("bus") >= 0 &&
                                        this.renderBusModule(),
                                    }),
                                  ],
                                }),
                                (0, I.tZ)(M.Z, {
                                  ref: function (t) {
                                    e.onDialogAttach(t);
                                  },
                                }),
                                (0, I.tZ)(A.Z, {
                                  ref: function (t) {
                                    e.onDrawerAttach(t);
                                  },
                                }),
                                (0, I.tZ)(L.Z, {}),
                                (0, I.tZ)(B, {
                                  isShow: u,
                                  onClose: function () {
                                    return e.setState({
                                      isShowGuideDialog: !1,
                                    });
                                  },
                                  top: 44 + (a ? n : 0),
                                }),
                              ],
                            });
                      },
                    },
                  ]),
                  i
                );
              })(p.default.Component))
            ) || oi;
        (Ui.enableShareTimeline = !0),
          (Ui.enableShareAppMessage = !0),
          Page(
            (0, a.createPageConfig)(
              Ui,
              "pages/home/index",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                navigationBarBackgroundColor: "#0066E6",
                navigationBarTitleText: "智行火车票",
                backgroundColorTop: "#0075F4",
                backgroundColorBottom: "#ffffff",
              } || {}
            )
          );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (t) {
          return e((e.s = t));
        })(98403);
      }),
        e.O();
    },
  ]);
})();
