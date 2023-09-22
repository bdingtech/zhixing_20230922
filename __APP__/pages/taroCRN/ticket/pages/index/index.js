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
      [45784],
      {
        60485: function (t, e, i) {
          var n,
            o = i(32180),
            r = i(79301),
            a = i(22276),
            l = i(95308),
            s = i(298),
            c = i(57042),
            u = i(24460),
            d = i(81876),
            h = i(21867),
            p = i(86066),
            f = i(45023),
            g = i(52500),
            Z = i(92954),
            S = i.n(Z),
            m = i(8271),
            y = i.n(m),
            v = i(71515),
            C = i(87298),
            b = i(90582),
            w = i(19972),
            I = i(23577),
            _ = i(90098),
            T = i(88184),
            x = i(90017),
            N = i(48813),
            L = [
              { title: "全部景点", type: "all" },
              { title: "智能排序", type: "sort" },
              { title: "筛选", type: "filter" },
            ],
            k = function (t) {
              var e = t.onFilterBar,
                i = t.sortLabel,
                n = t.sceneLabel,
                o = t.isShowFilterPop,
                r = t.optionListType,
                a = t.filterLabel,
                l = function (t) {
                  var e = {};
                  return (
                    "all" === t.type
                      ? ((e.txt = n || "全部景点"),
                        (e.select = !!n || (o && "all" === r)))
                      : "sort" === t.type
                      ? ((e.txt = i || "智能排序"),
                        (e.select = !!i || (o && "sort" === r)))
                      : "filter" === t.type &&
                        ((e.txt = a || "筛选"),
                        (e.select = !!a || (o && "filter" === r))),
                    e
                  );
                };
              return (0, N.tZ)(v.View, {
                className: " _i _Ga _m _l",
                style: { paddingLeft: 20, paddingRight: 20, height: 46 },
                children: L.map(function (t, i) {
                  var n = l(t);
                  return (0, N.BX)(
                    v.View,
                    {
                      className: " _i _Ga _l",
                      id: "AMBx",
                      onClick: function () {
                        return e(t.type);
                      },
                      children: [
                        (0, N.tZ)(v.Text, {
                          className: n.select ? " _x _Oj" : " _Xb _Oj",
                          children: n.txt,
                        }),
                        (0, N.tZ)(v.Image, {
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
            R = i(57189),
            P = i(96271),
            F = i(41105),
            B = i(83606),
            V = i(6296),
            M = i(91629),
            A = i(96616),
            D = i(43884),
            H = i(35707),
            U = i(87466),
            E = (0, i(57531).Z)(U.Z),
            z = i(35537),
            O = i(50668),
            X = i(51634),
            j = i(8992),
            q = i(12190),
            K = i(34229).ZtActivityPop,
            Y = i(83033),
            G = function (t) {
              var e,
                i,
                n = t.onClose,
                o = t.data,
                r = t.receiveCb,
                a = t.ubtTrace,
                l = t.pageId,
                s = function () {
                  var t, e;
                  (0, z._d)({
                    sceneID: null == o ? void 0 : o.sceneID,
                    promotionReceiveScenicSpotCouponList:
                      null == o ||
                      null === (t = o.couponList) ||
                      void 0 === t ||
                      null ===
                        (e = t.filter(function (t) {
                          return 1 === t.receiveCode;
                        })) ||
                      void 0 === e
                        ? void 0
                        : e.map(function (t) {
                            return t.promotionKey;
                          }),
                  })
                    .then(function (t) {
                      1 === t.resultCode
                        ? (S().showToast({
                            title: "领取成功",
                            icon: "none",
                            duration: 2e3,
                          }),
                          n(),
                          r())
                        : (S().showToast({
                            title: "领取失败",
                            icon: "none",
                            duration: 2e3,
                          }),
                          n());
                    })
                    .catch(function () {});
                };
              (0, g.useEffect)(
                function () {
                  null != o &&
                    o.isShowPop &&
                    I.Z.isCRN &&
                    (null == a ||
                      a("SZAHome_Coupon_Pop_exposure", { PageId: l }));
                },
                [o]
              );
              var c = function () {
                  I.Z.isCRN &&
                    (null == a ||
                      a("SZAHome_Coupon_Pop_click", {
                        PageId: l,
                        TypeSndAttr: "关闭",
                      })),
                    null == n || n();
                },
                u = !(
                  null == o ||
                  null === (e = o.couponList) ||
                  void 0 === e ||
                  !e.find(function (t) {
                    return 1 === t.receiveCode;
                  })
                );
              return (0, N.BX)(K, {
                show: null == o ? void 0 : o.isShowPop,
                onClose: c,
                onWrapClose: c,
                isShowClose: !1,
                children: [
                  (0, N.BX)(Y.Z, {
                    className: " _ov _rd _pv _yc _Mb _qv",
                    source: {
                      uri: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_tc_dbj@3x.png",
                    },
                    resizeMode: "stretch",
                    children: [
                      (0, N.tZ)(v.Image, {
                        src: I.Z.isTieyou
                          ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_tc_tybt@3x.png"
                          : "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_tc_zxbt@3x.png",
                        className: " _rg _Ld _rv",
                      }),
                      (0, N.tZ)(v.View, {
                        className: " _sv _tv _E",
                        children: "可直接抵扣门票票价",
                      }),
                      (0, N.BX)(v.View, {
                        className: " _uv _jj _Qi _yc",
                        children: [
                          null == o ||
                          null === (i = o.couponList) ||
                          void 0 === i
                            ? void 0
                            : i.map(function (t, e) {
                                return (0,
                                N.BX)(Y.Z, { className: " _vv _wv _Wa _i _Ga _l", source: { uri: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_tc_yhq@3x.png" }, children: [(0, N.BX)(v.View, { className: " _xv _i _Ga _n _l _yv _zv", children: [(0, N.tZ)(v.Text, { className: " _Av _ub _yv", children: "¥" }), (0, N.tZ)(v.Text, { className: " _Bv _yv", style: { fontFamily: "ios" === I.Z.os ? "ZX-Regular" : "zx-Regular" }, children: null == t ? void 0 : t.price })] }), (0, N.BX)(v.View, { className: " _js _Db _i _kk _n", children: [(0, N.tZ)(v.Text, { className: " _yv _bd", children: null == t ? void 0 : t.promotionTitle }), (0, N.tZ)(v.Text, { className: " _yv _F _ub", children: null == t ? void 0 : t.promotionDes })] })] }, e);
                              }),
                          (0, N.tZ)(v.View, {
                            id: "AMBs",
                            onClick: function () {
                              return (
                                u &&
                                (I.Z.isCRN &&
                                  (null == a ||
                                    a("SZAHome_Coupon_Pop_click", {
                                      PageId: l,
                                      TypeSndAttr: "领取",
                                    })),
                                void (H.Z.isLogin
                                  ? s()
                                  : H.Z.doLogin()
                                      .then(function () {
                                        s();
                                      })
                                      .catch(function (t) {
                                        return console.log(t);
                                      })))
                              );
                            },
                            children: (0, N.tZ)(D.Z, {
                              className: " _Cv _yb _Xa _o _fd _i _Ga _l _n",
                              miniDirection: "X",
                              start: { x: 0, y: 0 },
                              end: { x: 1, y: 1 },
                              colors: ["rgb(255, 60, 60)", "rgb(255, 148, 59)"],
                              children: (0, N.tZ)(v.Text, {
                                className: " _qb _Dv",
                                children: "立即领取",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.tZ)(v.View, {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    },
                    children: (0, N.tZ)(v.Image, {
                      id: "AMBt",
                      onClick: c,
                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpyhtc_icon_gb@3x.png",
                      className: " _Ef _db _ov",
                    }),
                  }),
                ],
              });
            },
            W = i(2081),
            Q = i(90129),
            J = (0, g.memo)(function (t) {
              t.animateValue;
              var e,
                i,
                n = t.couponInfo,
                o = void 0 === n ? null : n,
                r = t.showPop,
                a = void 0 === r ? function () {} : r,
                l = (0, g.useState)(!0),
                s = (0, Q.Z)(l, 2),
                c = s[0],
                u = s[1];
              return null != o &&
                null !== (e = o.couponList) &&
                void 0 !== e &&
                e.length &&
                c
                ? (function (t) {
                    try {
                      var e = S().getStorageSync(t),
                        i = (null == e ? void 0 : e.hasPop) || !1,
                        n = new Date().getTime() / 1e3,
                        o = (null == e ? void 0 : e.timeStamp) || n;
                      return !!(i && n - o <= 86400);
                    } catch (t) {
                      return !1;
                    }
                  })("TICKET_HOME_COUPON_RIGHT")
                  ? null
                  : (0, N.tZ)(v.View, {
                      id: "AMBu",
                      onClick: a,
                      style: { position: "fixed", right: 8, bottom: "26%" },
                      children: (0, N.BX)(v.View, {
                        id: "AMBv",
                        onClick: a,
                        style: { position: "relative" },
                        children: [
                          (0, N.tZ)(v.Image, {
                            style: {
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: 58,
                              height: 56,
                            },
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_hbyhq@3x.png",
                          }),
                          (0, N.tZ)(v.View, {
                            style: {
                              position: "relative",
                              width: 58,
                              height: 56,
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              paddingTop: 10,
                              boxSizing: "border-box",
                            },
                            children: (0, N.tZ)(v.Text, {
                              style: {
                                color: "#c23b00",
                                fontSize: 16,
                                fontFamily: "PingFangSC-Semibold",
                                fontWeight: "600",
                              },
                              children: "".concat(
                                (null == o ||
                                null === (i = o.couponList[0]) ||
                                void 0 === i
                                  ? void 0
                                  : i.price) + "元" || 0
                              ),
                            }),
                          }),
                          (0, N.tZ)(v.View, {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              marginTop: 4,
                            },
                            children: (0, N.tZ)(v.View, {
                              id: "AMBw",
                              onClick: function () {
                                u(!1),
                                  S().setStorageSync(
                                    "TICKET_HOME_COUPON_RIGHT",
                                    {
                                      hasPop: !0,
                                      timeStamp: new Date().getTime() / 1e3,
                                    }
                                  );
                              },
                              style: { width: 16, height: 15 },
                              children: (0, N.tZ)(v.Image, {
                                style: { width: 16, height: 15 },
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_gb@3x.png",
                              }),
                            }),
                          }),
                        ],
                      }),
                    })
                : null;
            }),
            $ = i(63854),
            tt = i(77510),
            et = i(6407),
            it = i(980),
            nt = i(50208),
            ot = i(45090),
            rt = i(69716),
            at = "TICKET_HOME_USER_SOURCE",
            lt = I.Z.isTieyou ? "kaPERwyFHgd" : "uBVystwQ1V6",
            st =
              "ios" === I.Z.os ? _.Z.statusBarHeight : _.Z.statusBarHeight || 0,
            ct = st + ("ios" === I.Z.os ? 64 : 50),
            ut = st + 126 - ct,
            dt = {
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
              showUserModal: !1,
              isStaticSearchBar: !1,
            },
            ht =
              (0, C.h)(!1, { usePageWrapper: !I.Z.isCRN })(
                (n = (function (t) {
                  (0, h.Z)(i, t);
                  var e = (0, p.Z)(i);
                  function i(t) {
                    var n;
                    (0, c.Z)(this, i),
                      (n = e.call(this, t)),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "componentWillUnmount",
                        function () {
                          (0, et.xg)("select_ticket_city");
                        }
                      ),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "renderBackgroundView",
                        function () {
                          return (0, N.tZ)(v.View, {
                            style: {
                              position: "absolute",
                              left: 0,
                              right: 0,
                              top: 0,
                              width: "100%",
                              zIndex: 2,
                              height: 100,
                              backgroundColor: "#fff",
                            },
                          });
                        }
                      ),
                      (0, f.Z)((0, d.Z)(n), "pageContentIsFullScreen", !0),
                      (0, f.Z)((0, d.Z)(n), "pageRootClassName", "ticket-home"),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "pageId",
                        I.Z.isCRN
                          ? I.Z.isTieyou
                            ? "10650027081"
                            : "10650027029"
                          : I.Z.isTieyou
                          ? "10650059436"
                          : "10650059418"
                      ),
                      (0, f.Z)((0, d.Z)(n), "getCityList", function () {
                        var t = rt.O5.get() || {},
                          e = rt.g_.get() || {},
                          i = t.cityMainList,
                          o = e.cityMainList;
                        (i && o) ||
                          (0, z.Iq)({ overseasCityFlag: 1, responseType: 1 })
                            .then(function (t) {
                              if (1 === (null == t ? void 0 : t.resultCode)) {
                                var e = null == t ? void 0 : t.domesticCity,
                                  i = null == t ? void 0 : t.overseasCity,
                                  o = e.cities,
                                  r = null == i ? void 0 : i.cities;
                                o.forEach(function (t) {
                                  n.dealCityItem(t.cities);
                                }),
                                  r.forEach(function (t) {
                                    n.dealCityItem(t.cities);
                                  });
                                var a = e.recommendcities,
                                  l = null == i ? void 0 : i.recommendcities;
                                n.dealCityItem(a),
                                  n.dealCityItem(l),
                                  rt.O5.setAttr("hotCities", a),
                                  rt.g_.setAttr("hotCities", l);
                                var s = o.map(function () {
                                    return "firstchar";
                                  }),
                                  c = r.map(function () {
                                    return "firstchar";
                                  });
                                rt.O5.setAttr("cityTags", s),
                                  rt.g_.setAttr("cityTags", c);
                                var u = {},
                                  d = {};
                                o.forEach(function (t) {
                                  u[t.firstchar] = t.cities;
                                }),
                                  r.forEach(function (t) {
                                    d[t.firstchar] = t.cities;
                                  }),
                                  rt.O5.setAttr("cityMainList", u),
                                  rt.g_.setAttr("cityMainList", d);
                              }
                            })
                            .catch(function (t) {
                              return console.log(t);
                            });
                      }),
                      (0, f.Z)((0, d.Z)(n), "dealCityItem", function (t) {
                        t.forEach(function (t) {
                          (t.cityName = t.name),
                            (t.cityID = t.id),
                            delete t.name,
                            delete t.id;
                        });
                      }),
                      (0, f.Z)((0, d.Z)(n), "selectCity", function () {
                        var t = n.state.currentCityInfo;
                        I.Z.isCRN &&
                          n.ubtTrace("SZAHome_City_click", {
                            PageId: n.pageId,
                          }),
                          (0, et.fm)(
                            {
                              DestinationID: t.cityID,
                              DestinationName: t.cityName,
                            },
                            function (t) {
                              n.upDateCity(t);
                            }
                          );
                      }),
                      (0, f.Z)((0, d.Z)(n), "upDateCity", function (t) {
                        S().setStorageSync("TICKET_SELECT_CITY", t);
                        var e = n.state,
                          i = e.locateCityInfo,
                          o = e.initLoading,
                          r = function () {
                            (n.sceneLabel = ""),
                              (n.sortLabel = ""),
                              (n.filterLabel = ""),
                              n.setState(
                                (0, s.Z)(
                                  (0, s.Z)({}, dt),
                                  {},
                                  {
                                    currentCityInfo: t,
                                    initLoading: !I.Z.isCRN || o,
                                  }
                                ),
                                function () {
                                  n.initLoad(1);
                                }
                              );
                          },
                          a =
                            S().getStorageSync("TICKET_ASK_CHANGE_CITY") || !1;
                        (null == i ? void 0 : i.cityName) === t.cityName || a
                          ? r()
                          : (S().setStorageSync("TICKET_ASK_CHANGE_CITY", !0),
                            (0, b.v)(
                              "温馨提示",
                              "是否切换城市",
                              { text: "取消", callback: function () {} },
                              {
                                text: "确定",
                                callback: function () {
                                  r();
                                },
                              }
                            ));
                      }),
                      (0, f.Z)((0, d.Z)(n), "onSearch", function () {
                        var t = n.state,
                          e = t.currentCityInfo,
                          i = t.source,
                          o = t.initLoading;
                        I.Z.isCRN &&
                          n.ubtTrace("SZAHome_SearchBox_click", {
                            PageId: n.pageId,
                          }),
                          n.navigateTo({
                            url: "/pages/taroCRN/ticket/pages/search/index",
                            data: {
                              cityID: (null == e ? void 0 : e.cityID) || 2,
                              cityName:
                                (null == e ? void 0 : e.cityName) || "上海",
                              source: i,
                            },
                            callback: function (t) {
                              var e = t.cityID,
                                i = t.cityName,
                                r = t.keyword;
                              (n.sceneLabel = ""),
                                (n.sortLabel = ""),
                                (n.filterLabel = ""),
                                n.setState(
                                  (0, s.Z)(
                                    (0, s.Z)({}, dt),
                                    {},
                                    {
                                      keyword: r,
                                      initLoading: !I.Z.isCRN || o,
                                      currentCityInfo: {
                                        cityID: e,
                                        cityName: i,
                                      },
                                    }
                                  ),
                                  function () {
                                    n.initLoad(1),
                                      I.Z.isCRN
                                        ? n.setState({ needScroll: !0 })
                                        : (n.setState({ scrollIntoView: "" }),
                                          setTimeout(function () {
                                            return n.setState({
                                              scrollIntoView: "spot_item_0",
                                            });
                                          }, 1e3));
                                  }
                                );
                            },
                          });
                      }),
                      (0, f.Z)((0, d.Z)(n), "hasPopDay", function (t) {
                        try {
                          var e = S().getStorageSync(t),
                            i = (null == e ? void 0 : e.hasPop) || !1,
                            n = new Date().getTime() / 1e3,
                            o = (null == e ? void 0 : e.timeStamp) || n;
                          return !!(i && n - o <= 86400);
                        } catch (t) {
                          return !1;
                        }
                      }),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "hasExpireTimeModal",
                        function (t, e) {
                          console.log("maxShowNum", e);
                          try {
                            var i = S().getStorageSync(t),
                              n = (null == i ? void 0 : i.cachedKey) || "",
                              o = (null == i ? void 0 : i.expireTime) || "",
                              r = (null == i ? void 0 : i.showNum) || 0,
                              a = (y()(), null == i ? void 0 : i.timeStamp);
                            return !!n && !!o && (y()(a).add(o, "day"), r >= e);
                          } catch (t) {
                            return !1;
                          }
                        }
                      ),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "handleModalStore",
                        (0, l.Z)(
                          (0, r.Z)().mark(function t() {
                            var e,
                              i,
                              o,
                              l,
                              s,
                              c,
                              u,
                              d,
                              h,
                              p,
                              f,
                              g,
                              Z,
                              m,
                              y,
                              v,
                              C,
                              b,
                              w,
                              I,
                              _,
                              T,
                              x,
                              N,
                              L,
                              k,
                              R,
                              P,
                              F,
                              B,
                              V,
                              M,
                              A,
                              D,
                              U,
                              E,
                              O,
                              X,
                              j;
                            return (0, r.Z)().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        (t.next = 3),
                                        (0, z.gJ)({
                                          cityName:
                                            (null ===
                                              (e = n.state.currentCityInfo) ||
                                            void 0 === e
                                              ? void 0
                                              : e.cityName) || "",
                                          getUserInfo: !0,
                                        })
                                      );
                                    case 3:
                                      if (
                                        ((o = t.sent),
                                        (l = ""),
                                        1 === o.resultCode &&
                                          null != o &&
                                          o.spMktInfo &&
                                          null != o &&
                                          null !== (i = o.spMktInfo) &&
                                          void 0 !== i &&
                                          i.userInfo &&
                                          ((l =
                                            null == o ||
                                            null === (s = o.spMktInfo) ||
                                            void 0 === s ||
                                            null === (c = s.userInfo) ||
                                            void 0 === c
                                              ? void 0
                                              : c.userType),
                                          n.setState({
                                            modalSpMktInfo: o.spMktInfo,
                                          })),
                                        l)
                                      ) {
                                        t.next = 8;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 8:
                                      if (
                                        null !== H.Z &&
                                        void 0 !== H.Z &&
                                        H.Z.uid
                                      ) {
                                        t.next = 10;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 10:
                                      return (t.next = 12), (0, z.VE)();
                                    case 12:
                                      if (
                                        1 ===
                                        (null == (u = t.sent)
                                          ? void 0
                                          : u.resultCode)
                                      ) {
                                        t.next = 15;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 15:
                                      if (
                                        u.popupInfoList &&
                                        u.popupInfoList.length
                                      ) {
                                        t.next = 17;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 17:
                                      (d = u.popupInfoList || []),
                                        (h = !0),
                                        (p = ""),
                                        (f = 1),
                                        (g = ""),
                                        (Z = ""),
                                        (m = ""),
                                        (y = 0);
                                    case 25:
                                      if (!(y < d.length)) {
                                        t.next = 40;
                                        break;
                                      }
                                      if (
                                        ((p = "TICKET_HOME_"
                                          .concat(
                                            null === (v = d[y]) || void 0 === v
                                              ? void 0
                                              : v.code,
                                            "_"
                                          )
                                          .concat(l, "_")
                                          .concat(
                                            null === H.Z || void 0 === H.Z
                                              ? void 0
                                              : H.Z.uid
                                          )),
                                        (Z =
                                          null === (C = d[y]) || void 0 === C
                                            ? void 0
                                            : C.ubtClick),
                                        (h = n.hasExpireTimeModal(
                                          p,
                                          null === (b = d[y]) || void 0 === b
                                            ? void 0
                                            : b.maxShowNum
                                        )))
                                      ) {
                                        t.next = 37;
                                        break;
                                      }
                                      return (
                                        (_ = S().getStorageSync(p)),
                                        (f =
                                          ((null == _ ? void 0 : _.showNum) ||
                                            0) + 1),
                                        (g =
                                          null === (w = d[y]) || void 0 === w
                                            ? void 0
                                            : w.expireTime),
                                        (m =
                                          null === (I = d[y]) || void 0 === I
                                            ? void 0
                                            : I.targetUrl),
                                        (T = (0, a.Z)(d.slice(y))).length &&
                                          S().setStorageSync(
                                            "TICKET_HOME_NOT_POPUP_DATAS",
                                            {
                                              catchedList: JSON.stringify(T),
                                              timeStamp:
                                                new Date().getTime() / 1e3,
                                            }
                                          ),
                                        t.abrupt("break", 40)
                                      );
                                    case 37:
                                      y++, (t.next = 25);
                                      break;
                                    case 40:
                                      if (
                                        (h ||
                                          n.setState(
                                            {
                                              showIndexModal: !0,
                                              targetUrl: m,
                                              indexModalUbtClick: Z,
                                            },
                                            function () {
                                              S().setStorageSync(p, {
                                                cachedKey: p,
                                                showNum: f,
                                                expireTime: g,
                                                timeStamp:
                                                  new Date().getTime() / 1e3,
                                              });
                                            }
                                          ),
                                        (x = S().getStorageSync(
                                          "TICKET_HOME_NOT_POPUP_DATAS"
                                        )),
                                        (N =
                                          null == x ? void 0 : x.catchedList))
                                      ) {
                                        t.next = 45;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 45:
                                      if ((L = JSON.parse(N)) && L.length) {
                                        t.next = 48;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 48:
                                      (k = !0),
                                        (R = ""),
                                        (P = ""),
                                        (F = 1),
                                        (B = ""),
                                        (V = ""),
                                        (M = 0);
                                    case 55:
                                      if (!(M < L.length)) {
                                        t.next = 70;
                                        break;
                                      }
                                      if (
                                        ((R = "TICKET_HOME_"
                                          .concat(
                                            null === (A = L[M]) || void 0 === A
                                              ? void 0
                                              : A.code,
                                            "_"
                                          )
                                          .concat(l, "_")
                                          .concat(
                                            null === H.Z || void 0 === H.Z
                                              ? void 0
                                              : H.Z.uid
                                          )),
                                        (B =
                                          null === (D = L[M]) || void 0 === D
                                            ? void 0
                                            : D.ubtClick),
                                        (k = n.hasExpireTimeModal(
                                          R,
                                          null === (U = L[M]) || void 0 === U
                                            ? void 0
                                            : U.maxShowNum
                                        )))
                                      ) {
                                        t.next = 67;
                                        break;
                                      }
                                      return (
                                        (X = S().getStorageSync(R)),
                                        (V =
                                          null === (E = L[M]) || void 0 === E
                                            ? void 0
                                            : E.targetUrl),
                                        (F =
                                          ((null == X ? void 0 : X.showNum) ||
                                            0) + 1),
                                        (P =
                                          null === (O = L[M]) || void 0 === O
                                            ? void 0
                                            : O.expireTime),
                                        (j = (0, a.Z)(L.slice(M))).length &&
                                          S().setStorageSync(
                                            "TICKET_HOME_NOT_POPUP_DATAS",
                                            {
                                              catchedList: JSON.stringify(j),
                                              timeStamp:
                                                new Date().getTime() / 1e3,
                                            }
                                          ),
                                        t.abrupt("break", 70)
                                      );
                                    case 67:
                                      M++, (t.next = 55);
                                      break;
                                    case 70:
                                      k ||
                                        n.setState(
                                          {
                                            showIndexModal: !0,
                                            targetUrl: V,
                                            indexModalUbtClick: B,
                                          },
                                          function () {
                                            S().setStorageSync(R, {
                                              cachedKey: R,
                                              showNum: F,
                                              expireTime: P,
                                              timeStamp:
                                                new Date().getTime() / 1e3,
                                            });
                                          }
                                        ),
                                        (t.next = 76);
                                      break;
                                    case 73:
                                      (t.prev = 73),
                                        (t.t0 = t.catch(0)),
                                        console.log("弹出失败-----", t.t0);
                                    case 76:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 73]]
                            );
                          })
                        )
                      ),
                      (0, f.Z)((0, d.Z)(n), "onQuickFilterBar", function (t) {
                        n.setState({ scrollIntoView: "" }),
                          n.onFilterBar(t),
                          !I.Z.isCRN &&
                            S().nextTick(function () {
                              n.setState({ scrollIntoView: "spot_item_0" });
                            });
                      }),
                      (0, f.Z)((0, d.Z)(n), "onFilterItem", function (t, e) {
                        switch ((n.onCloseFilterPop(), e)) {
                          case "all":
                            n.filterAll(t);
                            break;
                          case "sort":
                            n.filterSort(t);
                            break;
                          case "filter":
                            n.otherFilter(t);
                        }
                      }),
                      (0, f.Z)((0, d.Z)(n), "filterAll", function (t) {
                        (n.sceneLabel = t.text),
                          n.setState(
                            {
                              filterList: [
                                { key: t.value ? "1007" : "", value: t.value },
                              ],
                              scrollIntoView: "spot_item_0",
                            },
                            function () {
                              n.filterGetSearchScenicSpotList();
                            }
                          );
                      }),
                      (0, f.Z)((0, d.Z)(n), "filterSort", function (t) {
                        var e = t.sortType,
                          i = t.sortDirection,
                          o = t.text;
                        (n.sortLabel = o),
                          n.setState(
                            {
                              sortParameter: {
                                sortType: e || "D",
                                sortDirection: i || "",
                              },
                              scrollIntoView: "spot_item_0",
                            },
                            function () {
                              n.filterGetSearchScenicSpotList();
                            }
                          );
                      }),
                      (0, f.Z)((0, d.Z)(n), "otherFilter", function (t) {
                        var e = n.state.canNowUse;
                        (n.filterLabel = e ? "" : t.text),
                          "canNowUse" === t.filterType &&
                            n.setState(
                              { canNowUse: !e, scrollIntoView: "spot_item_0" },
                              function () {
                                n.filterGetSearchScenicSpotList();
                              }
                            );
                      }),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "filterGetSearchScenicSpotList",
                        function () {
                          (0, w.Q)("加载中..."),
                            n
                              .getSearchScenicSpotList(1)
                              .then(function (t) {
                                (0, w.Z)(), n.handleScenicSpotRes(t, 1);
                              })
                              .catch(function (t) {
                                return console.log(t);
                              });
                        }
                      ),
                      (0, f.Z)((0, d.Z)(n), "handleScrollMoment", function (t) {
                        (0, et.xC)(n.translateAnimate, 1 == t ? 40 : 0);
                      }),
                      (0, f.Z)((0, d.Z)(n), "onScroll", function (t) {
                        var e,
                          i = n.state,
                          o = i.showStaticSearchFilter,
                          r = i.isStaticSearchBar,
                          a = i.filterBarTop,
                          l = i.searchBarTop,
                          s = I.Z.isCRN
                            ? t.nativeEvent.contentOffset.y
                            : null == t ||
                              null === (e = t.detail) ||
                              void 0 === e
                            ? void 0
                            : e.scrollTop;
                        I.Z.isCRN ||
                          (s > l
                            ? !r && n.setState({ isStaticSearchBar: !0 })
                            : r && n.setState({ isStaticSearchBar: !1 }),
                          s > a + 100
                            ? !o && n.setState({ showStaticSearchFilter: !0 })
                            : o && n.setState({ showStaticSearchFilter: !1 }));
                      }),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "onLayout",
                        I.Z.isCRN
                          ? function (t) {
                              var e = t.nativeEvent.layout.y;
                              n.filterAchorHeight = e + 22;
                            }
                          : function () {}
                      ),
                      (0, f.Z)((0, d.Z)(n), "renderBannerItem", function (t) {
                        var e = t.item,
                          i = t.index;
                        return (0, N.tZ)(
                          v.View,
                          {
                            style: { width: ot.Ro.screenWidth - 16 },
                            id: "AMCI",
                            onClick: function () {
                              (0, it.Ud)({
                                url: null == e ? void 0 : e.jumpUrl,
                              }),
                                n.ubtTrace(null == e ? void 0 : e.ubtClick, {
                                  PageId: n.pageId,
                                  Type: null == e ? void 0 : e.ubtType,
                                });
                            },
                            children: (0, N.tZ)(v.Image, {
                              src: e.imageUrl,
                              style: {
                                width: ot.Ro.screenWidth - 16,
                                height: 87,
                                borderRadius: 12,
                              },
                            }),
                          },
                          i
                        );
                      }),
                      (0, f.Z)((0, d.Z)(n), "onRenderHeader", function () {
                        return (0,
                        N.tZ)(N.HY, { children: I.Z.isCRN && (0, N.tZ)(F.Z, { bannerListConfig: n.state.bannerListConfig, ubtTrace: n.ubtTrace, pageId: n.pageId }) });
                      }),
                      (0, f.Z)((0, d.Z)(n), "onFilterBar", function (t) {
                        var e = n.state,
                          i = e.isShowFilterPop;
                        t === e.optionListType
                          ? n.setState({ isShowFilterPop: !i, needScroll: !0 })
                          : n.setState({
                              isShowFilterPop: !0,
                              optionListType: t,
                              needScroll: !0,
                            });
                      }),
                      (0, f.Z)((0, d.Z)(n), "onCloseFilterPop", function () {
                        n.setState({
                          isShowFilterPop: !1,
                          optionListType: "",
                          needScroll: !1,
                        });
                      }),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "handleFilterBarProps",
                        function () {
                          var t = n.state,
                            e = t.filterList,
                            i = t.optionListType,
                            o = t.isShowFilterPop;
                          return {
                            onFilterBar: function (t) {
                              return n.onFilterBar(t);
                            },
                            sortParameter: t.sortParameter,
                            filterList: e,
                            optionListType: i,
                            sortLabel: n.sortLabel,
                            sceneLabel: n.sceneLabel,
                            filterLabel: n.filterLabel,
                            isShowFilterPop: o,
                          };
                        }
                      ),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "renderCrnHeaderRight",
                        function () {
                          var t,
                            e = n.state.couponInfo;
                          return null != e &&
                            null !== (t = e.couponList) &&
                            void 0 !== t &&
                            t.length
                            ? (0, N.tZ)(v.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_hbdx@3x.gif",
                                className: " _he _yf",
                                id: "AMCL",
                                onClick: function () {
                                  n.ubtTrace("SZAHome_Coupon_Get_click", {
                                    PageId: n.pageId,
                                  }),
                                    n.setState({
                                      couponInfo: (0, s.Z)(
                                        (0, s.Z)({}, e),
                                        {},
                                        { isShowPop: !0 }
                                      ),
                                    });
                                },
                              })
                            : (0, N.tZ)(v.View, {});
                        }
                      ),
                      (0, f.Z)((0, d.Z)(n), "jumpToDetail", function (t) {
                        var e, i, o;
                        I.Z.isCRN
                          ? ((0, it.l4)({
                              data: {
                                scenicSpotId: null == t ? void 0 : t.iD,
                                source: n.state.source,
                                CityName:
                                  (null == t ||
                                  null === (e = t.cityInfo) ||
                                  void 0 === e
                                    ? void 0
                                    : e.cityName) || "",
                                ProductId: (null == t ? void 0 : t.iD) || "",
                                TypeSndAttr:
                                  (null == t ? void 0 : t.name) || "",
                              },
                            }),
                            n.state.isSearchResultSource
                              ? n.ubtTrace("TZASearchResult_click", {
                                  PageId: n.pageId,
                                  OutFlowLine: "SPOT",
                                  QueryCode: n.state.queryCode,
                                  TabName: "景点",
                                  Name:
                                    n.state.keyword ||
                                    (null === (i = n.state.currentCityInfo) ||
                                    void 0 === i
                                      ? void 0
                                      : i.cityName),
                                })
                              : n.ubtTrace("SZAHome_RecSpot_SpotCard_click", {
                                  PageId: n.pageId,
                                  TypeSndAttr: null == t ? void 0 : t.name,
                                }))
                          : (0, it.l4)({
                              data: {
                                scenicSpotId: null == t ? void 0 : t.iD,
                                source: n.state.source,
                                CityName:
                                  (null === (o = n.state.currentCityInfo) ||
                                  void 0 === o
                                    ? void 0
                                    : o.cityName) || "",
                                ProductId: (null == t ? void 0 : t.iD) || "",
                                TypeSndAttr:
                                  (null == t ? void 0 : t.name) || "",
                              },
                            });
                      }),
                      (0, f.Z)((0, d.Z)(n), "receiveCouponCb", function () {
                        n.initLoad(1);
                      }),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "renderStaticSearchFilter",
                        function (t) {
                          var e = n.state,
                            i = e.labelStatisticShowList,
                            o = e.canNowUse,
                            r = e.showStaticSearchFilter,
                            a = e.currentCityInfo,
                            l = e.keyword,
                            s = n.handleFilterBarProps();
                          return (0, N.tZ)(q.Z, {
                            labelStatisticShowList: i,
                            onFilterItem: n.onFilterItem,
                            canNowUse: o,
                            filterBarProps: s,
                            onCloseFilterPop: n.onCloseFilterPop,
                            onBack: function () {
                              n.navigateBack();
                            },
                            searchBarProps: {
                              cityName: null == a ? void 0 : a.cityName,
                              keyword: l,
                              selectCity: function () {
                                return n.selectCity();
                              },
                              onSearch: function () {
                                return n.onSearch();
                              },
                            },
                            relList: t,
                            pageId: n.pageId,
                            scroollY: n.state.scrollValue,
                            filterAchorHeight: n.filterAchorHeight,
                            ubtTrace: n.ubtTrace,
                            showStaticSearchFilter: r,
                          });
                        }
                      ),
                      (0, f.Z)((0, d.Z)(n), "getOptionList", function (t) {
                        var e = t.optionListType,
                          i = [];
                        return (
                          "all" === e
                            ? (i = n.state.labelStatisticShowList)
                            : "sort" === e
                            ? (i = nt.a)
                            : "filter" === e && (i = nt.d),
                          i
                        );
                      }),
                      (0, f.Z)((0, d.Z)(n), "showZxModal", function (t) {
                        n.setState({ zxModalVisible: t });
                      }),
                      (0, f.Z)((0, d.Z)(n), "renderItem", function (t) {
                        var e,
                          i = t.item,
                          o = t.index,
                          r = t.filterBarProps,
                          a = t.scenicSpotList,
                          l = n.state.isSearchResultSource;
                        return null != i && i.isSpecialPriceRecommend && 0 !== o
                          ? (0, N.tZ)(X.Z, {
                              entryList: n.state.entryList,
                              ubtTrace: n.ubtTrace,
                              pageId: n.pageId,
                            })
                          : (0, N.BX)(N.HY, {
                              children: [
                                I.Z.isCRN &&
                                  (null == i ? void 0 : i.titleAndFilterArr) &&
                                  (0, N.BX)(N.HY, {
                                    children: [
                                      (null == i ? void 0 : i.isTitle) &&
                                        !l &&
                                        (0, N.tZ)(v.View, {
                                          style: {
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            marginTop: 8,
                                          },
                                          children: (0, N.tZ)(v.View, {
                                            style: {
                                              paddingLeft: 12,
                                              paddingRight: 12,
                                              paddingTop: 15,
                                              backgroundColor: "#ffffff",
                                              borderTopLeftRadius: 12,
                                              borderTopRightRadius: 12,
                                            },
                                          }),
                                        }),
                                      (null == i ? void 0 : i.isFilter) &&
                                        l &&
                                        (0, N.tZ)(v.View, {
                                          style: {
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            marginTop: 14,
                                          },
                                          children: (0, N.tZ)(v.View, {
                                            style: {
                                              paddingLeft: 12,
                                              paddingRight: 12,
                                              paddingBottom: 15,
                                              backgroundColor: "#ffffff",
                                              borderTopLeftRadius: 12,
                                              borderTopRightRadius: 12,
                                            },
                                          }),
                                        }),
                                      (null == i ? void 0 : i.isFilter) &&
                                        !l &&
                                        (0, N.BX)(v.View, {
                                          style: { marginTop: -13 },
                                          children: [
                                            (0, N.tZ)(B.Z, {
                                              zengxinConfigs:
                                                n.state.zengxinConfigs,
                                              onZxClick: function () {
                                                return n.showZxModal(!0);
                                              },
                                            }),
                                            (0, N.BX)(D.Z, {
                                              start: { x: 0, y: 0 },
                                              end: { x: 0, y: 1 },
                                              locations: [0.5, 1],
                                              colors: [
                                                "rgb(255, 255, 255)",
                                                "rgb(245, 245, 245)",
                                              ],
                                              style: {
                                                borderTopLeftRadius: 20,
                                                borderTopRightRadius: 20,
                                                position: "relative",
                                                zIndex: 2,
                                                marginTop: -23,
                                                paddingBottom: 35,
                                              },
                                              children: [
                                                (0, N.tZ)(
                                                  k,
                                                  (0, s.Z)(
                                                    (0, s.Z)(
                                                      {
                                                        scroollY:
                                                          n.state.scrollValue,
                                                      },
                                                      r
                                                    ),
                                                    {},
                                                    {
                                                      onFilterBar:
                                                        n.onFilterBar,
                                                      onFilterItem:
                                                        n.onFilterItem,
                                                      canNowUse:
                                                        n.state.canNowUse,
                                                      onCloseFilterPop:
                                                        n.onCloseFilterPop,
                                                      pageId: n.pageId,
                                                      ubtTrace: n.ubtTrace,
                                                      filterAchorHeight:
                                                        n.filterAchorHeight,
                                                      showStaticSearchFilter:
                                                        n.state
                                                          .showStaticSearchFilter,
                                                      labelStatisticShowList:
                                                        n.state
                                                          .labelStatisticShowList,
                                                    }
                                                  )
                                                ),
                                                (0, N.tZ)(
                                                  $.Z,
                                                  {
                                                    cityInfo:
                                                      n.state.currentCityInfo,
                                                    setParentSpMktInfo:
                                                      function (t) {
                                                        return n.setState({
                                                          spMktInfo: t,
                                                        });
                                                      },
                                                    backgroundColor: "#f5f5f5",
                                                    storeKey: at,
                                                    setShowUserModal:
                                                      function () {
                                                        return n.setState({
                                                          showUserModal: !0,
                                                        });
                                                      },
                                                  },
                                                  "UserSourceBanner"
                                                ),
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                !I.Z.isCRN &&
                                  (null == i ? void 0 : i.isFilter) &&
                                  !l &&
                                  (0, N.tZ)(v.View, {
                                    className: " _Xr _Z _i _Ga _l _Yr _Mb",
                                    children: (0, N.tZ)(A.Z, {
                                      cityName:
                                        null ===
                                          (e = n.state.currentCityInfo) ||
                                        void 0 === e
                                          ? void 0
                                          : e.cityName,
                                      keyword: n.state.keyword,
                                      selectCity: function () {
                                        return n.selectCity();
                                      },
                                      onSearch: function () {
                                        return n.onSearch();
                                      },
                                      backgroundColor: "#f5f5f5",
                                    }),
                                  }),
                                !I.Z.isCRN &&
                                  (null == i ? void 0 : i.isFilter) &&
                                  !l &&
                                  (0, N.tZ)(F.Z, {
                                    bannerListConfig: n.state.bannerListConfig,
                                    ubtTrace: n.ubtTrace,
                                    pageId: n.pageId,
                                  }),
                                !I.Z.isCRN &&
                                  (null == i ? void 0 : i.isFilter) &&
                                  !l &&
                                  (0, N.BX)(v.View, {
                                    style: { marginTop: -40 },
                                    children: [
                                      (0, N.tZ)(B.Z, {
                                        zengxinConfigs: n.state.zengxinConfigs,
                                        onZxClick: function () {
                                          return n.showZxModal(!0);
                                        },
                                      }),
                                      (0, N.BX)(D.Z, {
                                        start: { x: 0, y: 0 },
                                        end: { x: 0, y: 1 },
                                        locations: [0.5, 1],
                                        colors: [
                                          "rgb(255, 255, 255)",
                                          "rgb(245, 245, 245)",
                                        ],
                                        style: {
                                          borderTopLeftRadius: 20,
                                          borderTopRightRadius: 20,
                                          position: "relative",
                                          zIndex: 2,
                                          marginTop: -26,
                                          paddingBottom: I.Z.isCRN ? 35 : 8,
                                        },
                                        children: [
                                          (0, N.tZ)(
                                            k,
                                            (0, s.Z)(
                                              (0, s.Z)(
                                                {
                                                  scroollY: n.state.scrollValue,
                                                },
                                                r
                                              ),
                                              {},
                                              {
                                                onFilterBar: function () {
                                                  I.Z.isCRN && n.onFilterBar();
                                                },
                                                onFilterItem: n.onFilterItem,
                                                canNowUse: n.state.canNowUse,
                                                onCloseFilterPop:
                                                  n.onCloseFilterPop,
                                                pageId: n.pageId,
                                                ubtTrace: n.ubtTrace,
                                                filterAchorHeight:
                                                  n.filterAchorHeight,
                                                showStaticSearchFilter:
                                                  n.state
                                                    .showStaticSearchFilter,
                                                labelStatisticShowList:
                                                  n.state
                                                    .labelStatisticShowList,
                                              }
                                            )
                                          ),
                                          (0, N.tZ)(
                                            $.Z,
                                            {
                                              cityInfo: n.state.currentCityInfo,
                                              setParentSpMktInfo: function (t) {
                                                return n.setState({
                                                  spMktInfo: t,
                                                });
                                              },
                                              backgroundColor: "#f5f5f5",
                                              storeKey: at,
                                              setShowUserModal: function () {
                                                return n.setState({
                                                  showUserModal: !0,
                                                });
                                              },
                                            },
                                            "UserSourceBanner"
                                          ),
                                        ],
                                      }),
                                    ],
                                  }),
                                !(null != i && i.titleAndFilterArr) &&
                                  (0, N.tZ)(j.Z, {
                                    isFirst: I.Z.isCRN ? 1 === o : 0 === o,
                                    isLast: o === a.length - 1,
                                    data: i,
                                    onFilterBar: n.onQuickFilterBar,
                                    filterBarProps: r,
                                    onItem: n.jumpToDetail,
                                    index: o,
                                  }),
                                o === a.length - 1 &&
                                  (0, N.tZ)(v.View, { className: " _yb _Z" }),
                              ],
                            });
                      }),
                      (0, f.Z)((0, d.Z)(n), "renderContentView", function () {
                        var t,
                          e = I.Z.isCRN
                            ? n.state.scrollValue.interpolate({
                                inputRange: [0, ut],
                                outputRange: ["#fff", "#000"],
                                extrapolate: "clamp",
                              })
                            : "#fff";
                        return I.Z.isCRN
                          ? (0, N.BX)(v.View, {
                              style: {
                                flex: 1,
                                margin: 0,
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop:
                                  "ios" === I.Z.os
                                    ? _.Z.isPhoneX
                                      ? 44
                                      : 40
                                    : 0,
                                width: ot.Ro.windowWidth,
                              },
                              children: [
                                (0, N.tZ)(v.View, {
                                  style: {
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    width: 40,
                                    height: 40,
                                  },
                                  children: (0, N.tZ)(v.View, {
                                    onClick: function () {
                                      return n.navigateBack();
                                    },
                                    children: (0, N.tZ)(P.Z.View, {
                                      style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                      },
                                      children: (0, N.tZ)(P.Z.Text, {
                                        style: {
                                          fontFamily: "crn_font_rn_mini",
                                          color: e,
                                          fontSize: 24,
                                        },
                                        children: "󰲚",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, N.BX)(v.View, {
                                  style: {
                                    flex: 1,
                                    height: 44,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingRight: 14,
                                  },
                                  children: [
                                    (0, N.tZ)(v.View, {
                                      style: { width: 90 },
                                      children: (0, N.tZ)(R.Z, {
                                        scrollValue: n.state.scrollValue,
                                      }),
                                    }),
                                    (0, N.tZ)(A.Z, {
                                      selectCity: n.selectCity,
                                      onSearch: n.onSearch,
                                      keyword: n.state.keyword,
                                      cityName:
                                        null ===
                                          (t = n.state.currentCityInfo) ||
                                        void 0 === t
                                          ? void 0
                                          : t.cityName,
                                      scrollValue: n.state.scrollValue,
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : null;
                      });
                    var o =
                      (I.Z.isCRN,
                      [{ isFilter: !0, isTitle: !1, titleAndFilterArr: !0 }]);
                    return (
                      (n.state = (0, s.Z)(
                        (0, s.Z)({}, dt),
                        {},
                        {
                          currentCityInfo: { cityName: "上海", cityID: 2 },
                          locateCityInfo: { cityName: "上海", cityID: 2 },
                          keyword: "",
                          scrollValue: I.Z.isCRN ? new P.Z.Value(0) : 0,
                          needScroll: !1,
                          initLoading: !0,
                          scenicSpotList: [].concat(o),
                          searchBarTop: 77,
                          isSearchResultSource: !1,
                          queryCode: "",
                          bannerListConfig: [],
                          indexModalUbtClick: "",
                          showIndexModal: !1,
                          modalSpMktInfo: null,
                          targetUrl: "",
                          zxModalVisible: !1,
                          zengxinConfigs: {
                            headTopText: [],
                            contentInfo: [],
                            headTopBgImg: "",
                            modalHeaderImg: "",
                          },
                        }
                      )),
                      (n.sceneLabel = ""),
                      (n.sortLabel = ""),
                      (n.filterLabel = ""),
                      (n.filterAchorHeight = 361),
                      (n.translateAnimate = I.Z.isCRN ? new P.Z.Value(0) : 0),
                      n
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t,
                            e = this;
                          I.Z.isCRN ||
                            this.setPageTitle(
                              I.Z.isTieyou ? "铁友门票" : "智行门票"
                            );
                          var i = (0, Z.getCurrentInstance)(),
                            n =
                              (null == i ||
                              null === (t = i.router) ||
                              void 0 === t
                                ? void 0
                                : t.params) || {},
                            o = n.cityId,
                            r = n.cityID,
                            a = n.cityName,
                            l = n.source,
                            c =
                              void 0 === l ? (I.Z.isCRN ? "app" : "wechat") : l,
                            u = n.keyword,
                            d = void 0 === u ? "" : u,
                            h = n.queryCode,
                            p = void 0 === h ? "" : h;
                          this.setState(
                            {
                              isSearchResultSource:
                                "search_source_result" === c,
                              queryCode: p,
                            },
                            function () {
                              var t;
                              e.ubtTrace(
                                I.Z.isCRN
                                  ? I.Z.isTieyou
                                    ? "STAHome1_exposure"
                                    : "SZAHome_exposure"
                                  : I.Z.isTieyou
                                  ? "STWHome1_exposure"
                                  : "SZWHome1_exposure",
                                {
                                  PageId: e.pageId,
                                  Source: c,
                                  CityName:
                                    (null === (t = e.state.currentCityInfo) ||
                                    void 0 === t
                                      ? void 0
                                      : t.cityName) || "",
                                }
                              );
                              var i = S().getStorageSync("TICKET_SELECT_CITY"),
                                n = { source: c, keyword: d };
                              (o || r) && a
                                ? (0, et.Y8)(e, !1, function () {
                                    e.setState(
                                      (0, s.Z)(
                                        (0, s.Z)({}, n),
                                        {},
                                        {
                                          currentCityInfo: {
                                            cityID: r || o,
                                            cityName: a,
                                          },
                                        }
                                      ),
                                      function () {
                                        return e.initLoad(1);
                                      }
                                    );
                                  })
                                : i
                                ? (0, et.Y8)(e, !1, function () {
                                    e.setState(
                                      (0, s.Z)(
                                        (0, s.Z)({}, n),
                                        {},
                                        { currentCityInfo: i }
                                      ),
                                      function () {
                                        return e.initLoad(1);
                                      }
                                    );
                                  })
                                : (e.setState((0, s.Z)({}, n)),
                                  (0, et.Y8)(e, !0, function () {
                                    e.initLoad(1);
                                  })),
                                e.getCityList(),
                                (0, et.Xl)(e),
                                e.handleModalStore();
                            }
                          );
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "initLoad",
                        value: function (t) {
                          var e = this;
                          (0, w.Q)("加载中..."),
                            this.getSearchScenicSpotList(t)
                              .then(function (t) {
                                e.handleScenicSpotRes(t, 1);
                              })
                              .catch(function () {
                                (0, w.Z)();
                              });
                          var i = this.state.currentCityInfo,
                            n =
                              null != i && i.cityID
                                ? Number(null == i ? void 0 : i.cityID)
                                : 2,
                            o = (null == i ? void 0 : i.cityName) || "上海",
                            r = (null == i ? void 0 : i.overseaFlag) || 0;
                          Promise.all([
                            (0, z.MM)({ cityId: n, cityName: o }),
                            (0, z.p6)({
                              cityId: n,
                              cityName: o,
                              overseaCity: r,
                            }),
                            (0, z.Ur)({
                              sceneID: lt,
                              backType: 0,
                              needCoupon: 0,
                            }),
                            (0, z.kR)({ bannerType: 2 }),
                            (0, z.mq)({ cityId: n }),
                            (0, z.gJ)({
                              gsCityId: n,
                              cityName: o,
                              getUserInfo: !0,
                            }),
                          ])
                            .then(function (t) {
                              var i,
                                n,
                                o,
                                r,
                                a = null == t ? void 0 : t[1],
                                l = null == t ? void 0 : t[2],
                                s =
                                  (null == t ||
                                  null === (i = t[3]) ||
                                  void 0 === i
                                    ? void 0
                                    : i.bannerListConfig) || [];
                              I.Z.isCRN ||
                                (s = s.filter(function (t) {
                                  return null == t ? void 0 : t.miniShow;
                                }));
                              var c =
                                  (null == t ||
                                  null === (n = t[3]) ||
                                  void 0 === n
                                    ? void 0
                                    : n.zengxinConfigs) || {},
                                u =
                                  null == t ||
                                  null === (o = t[5]) ||
                                  void 0 === o
                                    ? void 0
                                    : o.spMktInfo,
                                d =
                                  (I.Z.isCRN &&
                                    (null == a
                                      ? void 0
                                      : a.ctripRecommendItemList)) ||
                                  [],
                                h = e.hasPopDay(at),
                                p =
                                  null == l ||
                                  null ===
                                    (r =
                                      l.promotionReceiveScenicSpotCouponList) ||
                                  void 0 === r
                                    ? void 0
                                    : r.filter(function (t) {
                                        return 1 === t.receiveCode;
                                      }),
                                f = {
                                  sceneID:
                                    (null == l ? void 0 : l.sceneID) || "",
                                  couponList: p || [],
                                  isShowPop: !1,
                                };
                              e.setState({
                                entryList: d,
                                couponInfo: f,
                                bannerListConfig: s,
                                zengxinConfigs: c,
                                spMktInfo: h ? null : u,
                              }),
                                !I.Z.isCRN && e.getFilterBarTop(),
                                s.length &&
                                  s.forEach(function (t) {
                                    e.ubtTrace(null == t ? void 0 : t.ubtShow, {
                                      PageId: e.pageId,
                                      Type: null == t ? void 0 : t.ubtType,
                                    });
                                  });
                            })
                            .catch(function (t) {
                              console.log("e", t),
                                (0, w.Z)(),
                                e.setState({
                                  entryList: [],
                                  couponInfo: null,
                                  spMktInfo: null,
                                });
                            });
                        },
                      },
                      {
                        key: "getFilterBarTop",
                        value: function () {
                          var t = this;
                          setTimeout(function () {
                            var e = t,
                              i = S().createSelectorQuery(),
                              n = S().createSelectorQuery(),
                              o = (_.Z.statusBarHeight || 44) + 44;
                            i
                              .select("#filter-bar-location")
                              .boundingClientRect(),
                              n
                                .select("#ticket-index-search-bar")
                                .boundingClientRect(),
                              i.exec(function (t) {
                                var i;
                                e.setState({
                                  filterBarTop:
                                    ((null == t ||
                                    null === (i = t[0]) ||
                                    void 0 === i
                                      ? void 0
                                      : i.top) || 170) - o,
                                });
                              }),
                              n.exec(function (t) {
                                var i;
                                e.setState({
                                  searchBarTop:
                                    ((null == t ||
                                    null === (i = t[0]) ||
                                    void 0 === i
                                      ? void 0
                                      : i.top) || 170) - o,
                                });
                              });
                          }, 500);
                        },
                      },
                      {
                        key: "requestNextPage",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.pageIndex,
                            n = e.canRequestNextPage,
                            o = e.isLoadingNext;
                          n &&
                            !o &&
                            (this.setState({ isLoadingNext: !0 }),
                            (0, w.Q)("加载中..."),
                            this.getSearchScenicSpotList(i + 1)
                              .then(function (e) {
                                (0, w.Z)(), t.handleScenicSpotRes(e, i + 1);
                              })
                              .catch(function (t) {
                                return console.log(t);
                              }));
                        },
                      },
                      {
                        key: "handleScenicSpotRes",
                        value: function (t, e) {
                          var i = this.state,
                            n = i.scenicSpotList,
                            o = i.isSearchResultSource;
                          if (1 === (null == t ? void 0 : t.resultCode)) {
                            var r =
                              (null == t ? void 0 : t.scenicSpotList) || [];
                            if (o) {
                              var l,
                                s = JSON.parse(
                                  JSON.stringify(
                                    (null == t ? void 0 : t.scenicSpotList) ||
                                      []
                                  )
                                );
                              this.ubtTrace(
                                "TZASearchResult_productline_exposure",
                                {
                                  TabName: "景点",
                                  Name:
                                    this.state.keyword ||
                                    (null ===
                                      (l = this.state.currentCityInfo) ||
                                    void 0 === l
                                      ? void 0
                                      : l.cityName),
                                  SearchType: null != s && s.length ? "T" : "F",
                                }
                              );
                            }
                            r.length < 20 &&
                              !I.Z.isCRN &&
                              (r = r.concat(
                                new Array(20 - r.length).fill(null)
                              ));
                            var c,
                              u = [];
                            if (
                              (I.Z.isCRN,
                              (u =
                                1 === e
                                  ? [].concat(
                                      (0, a.Z)(n.slice(0, 1)),
                                      (0, a.Z)(r)
                                    )
                                  : n.concat(r)),
                              1 === e)
                            )
                              if (
                                (null === (c = u) || void 0 === c
                                  ? void 0
                                  : c.length) < 3
                              )
                                o || u.push({ isSpecialPriceRecommend: !0 });
                              else {
                                var d = u.slice(0, 4);
                                d.push({ isSpecialPriceRecommend: !0 });
                                var h = u.slice(4);
                                u = [].concat((0, a.Z)(d), (0, a.Z)(h));
                              }
                            this.setState({
                              scenicSpotList: u,
                              pageIndex: e,
                              canRequestNextPage: e < (t.pagingCount || 1),
                              isLoadingNext: !1,
                              labelStatisticShowList:
                                (null == t
                                  ? void 0
                                  : t.labelStatisticShowList) || [],
                              initLoading: !1,
                            });
                          } else
                            this.setState({
                              scenicSpotList: (0, a.Z)(n),
                              pageIndex: e,
                              canRequestNextPage: !1,
                              isLoadingNext: !1,
                              initLoading: !1,
                            });
                          (0, w.Z)();
                        },
                      },
                      {
                        key: "getSearchScenicSpotList",
                        value: function (t) {
                          var e = this.state,
                            i = e.locateCityInfo,
                            n = e.currentCityInfo,
                            o = e.filterList,
                            r = e.sortParameter,
                            a = e.canNowUse,
                            l = e.keyword,
                            s = e.source,
                            c = l
                              ? []
                              : [
                                  {
                                    key: "8",
                                    value: (null == n ? void 0 : n.cityID) + "",
                                  },
                                ],
                            u = {
                              searchParameter: {
                                canNowUse: a ? 1 : 0,
                                keyword: l,
                                longitude: null == i ? void 0 : i.longitude,
                                latitude: null == i ? void 0 : i.latitude,
                              },
                              filterList: [].concat(o, c),
                              sortParameter: r,
                              pagingParameter: { pageIndex: t, pageSize: 20 },
                              responseDataType: 2,
                              imageSizeKey: "C_192_192",
                              sceneID: lt,
                              source: s,
                            };
                          return (0, z.Ki)(u);
                        },
                      },
                      {
                        key: "renderFilterView",
                        value: function () {
                          var t = this.handleFilterBarProps();
                          return I.Z.isCRN
                            ? (0, N.tZ)(v.View, {})
                            : (0, N.BX)(v.View, {
                                id: "filter-bar-location",
                                className: " _Rd _Sr",
                                children: [
                                  (0, N.tZ)(v.Image, {
                                    className: " _Am _eg _Rr",
                                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_tjjd@3x.png",
                                  }),
                                  (0, N.tZ)(
                                    x.Z,
                                    (0, s.Z)(
                                      (0, s.Z)({}, t),
                                      {},
                                      { onFilterBar: this.onQuickFilterBar }
                                    )
                                  ),
                                ],
                              });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t,
                            e = this,
                            i = this.state,
                            n = i.scenicSpotList,
                            o = i.pageIndex,
                            r = i.couponInfo,
                            a = i.scrollIntoView,
                            l = i.isStaticSearchBar,
                            c = i.initLoading,
                            u = i.isSearchResultSource,
                            d = i.isShowFilterPop,
                            h = i.showIndexModal,
                            p = i.indexModalUbtClick,
                            f = i.showUserModal,
                            g = i.spMktInfo,
                            Z = this.handleFilterBarProps(),
                            S =
                              null == n
                                ? void 0
                                : n.filter(function (t) {
                                    return !(
                                      !t ||
                                      (null != t && t.titleAndFilterArr)
                                    );
                                  }),
                            m = this.getOptionList(Z),
                            y = I.Z.isCRN
                              ? this.state.scrollValue.interpolate({
                                  inputRange: [0, ut - 10, ut],
                                  outputRange: [
                                    "rgba(255,255,255,0)",
                                    "rgba(255,255,255,.6)",
                                    "rgba(255,255,255,1)",
                                  ],
                                  extrapolate: "clamp",
                                })
                              : "rgba(255,255,255,0)",
                            C = I.Z.isCRN
                              ? this.state.scrollValue.interpolate({
                                  inputRange: [0, ut, ut + 200],
                                  outputRange:
                                    "ios" === I.Z.os
                                      ? [0, ut, ut + 20]
                                      : [0, ut - 8, ut - 2],
                                  extrapolate: "clamp",
                                })
                              : ut + 50,
                            b = I.Z.isCRN
                              ? this.state.scrollValue.interpolate({
                                  inputRange: [0, ut + 40, ut + 100],
                                  outputRange: [0, 0, 1],
                                  extrapolate: "clamp",
                                })
                              : "rgba(255,255,255,0)";
                          return u && I.Z.isCRN
                            ? (0, N.BX)(v.View, {
                                className: I.Z.isCRN ? " _j _Mr" : " _Y _Z _jj",
                                children: [
                                  (0, N.tZ)(D.Z, {
                                    start: { x: 0, y: 0 },
                                    end: { x: 0, y: 1 },
                                    colors: [
                                      "rgb(255, 255, 255)",
                                      "rgb(245, 245, 245)",
                                    ],
                                    style: {
                                      width: "100%",
                                      height: 44,
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                    },
                                  }),
                                  (0, N.BX)(v.View, {
                                    style: {
                                      width: "100%",
                                      position: "relative",
                                      zIndex: 999,
                                      backgroundColor: "transparent",
                                    },
                                    children: [
                                      (0, N.tZ)(v.View, {
                                        style: {
                                          paddingTop: 12,
                                          height: 44,
                                          backgroundColor: "transparent",
                                        },
                                        children: (0, N.tZ)(
                                          x.Z,
                                          (0, s.Z)(
                                            (0, s.Z)(
                                              {
                                                needAnimation: !1,
                                                scroollY:
                                                  this.state.scrollValue,
                                              },
                                              Z
                                            ),
                                            {},
                                            {
                                              onFilterBar: this.onFilterBar,
                                              onFilterItem: this.onFilterItem,
                                              canNowUse: this.state.canNowUse,
                                              onCloseFilterPop:
                                                this.onCloseFilterPop,
                                              pageId: this.pageId,
                                              ubtTrace: this.ubtTrace,
                                              backgroundColor: "transparent",
                                              filterAchorHeight:
                                                this.filterAchorHeight,
                                              showStaticSearchFilter:
                                                this.state
                                                  .showStaticSearchFilter,
                                              labelStatisticShowList:
                                                this.state
                                                  .labelStatisticShowList,
                                            }
                                          )
                                        ),
                                      }),
                                      d &&
                                        (0, N.BX)(v.View, {
                                          style: {
                                            backgroundColor: "rgba(0,0,0,0.6)",
                                          },
                                          id: "AMCM",
                                          onClick: function () {
                                            e.setState({ isShowFilterPop: !1 });
                                          },
                                          children: [
                                            (0, N.tZ)(
                                              M.Z,
                                              (0, s.Z)(
                                                (0, s.Z)({ optionList: m }, Z),
                                                {},
                                                {
                                                  onFilterItem: function (t) {
                                                    e.onFilterItem(
                                                      t,
                                                      Z.optionListType
                                                    );
                                                  },
                                                  canNowUse: this.canNowUse,
                                                  ubtTrace: this.ubtTrace,
                                                  pageId: this.pageId,
                                                }
                                              )
                                            ),
                                            (0, N.tZ)(v.View, {
                                              id: "AMCN",
                                              onClick: function () {
                                                return e.onCloseFilterPop(!1);
                                              },
                                              style: {
                                                width: "100%",
                                                height:
                                                  ot.Ro.windowHeight - ct - 325,
                                              },
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (null == S ? void 0 : S.length) > 0 &&
                                    (0, N.tZ)(O.Z, {
                                      handleScrollMoment:
                                        this.handleScrollMoment,
                                      isSearchResultSource: u,
                                      filterAchorHeight: this.filterAchorHeight,
                                      onRenderHeader: function () {
                                        return (0, N.tZ)(N.HY, {});
                                      },
                                      pageNum: o,
                                      pageSize: 20,
                                      list: n,
                                      scrollIntoView: a,
                                      needScroll: this.state.needScroll,
                                      filterBarTop: this.state.filterBarTop,
                                      onRenderItem: function (t, i) {
                                        return e.renderItem({
                                          item: t,
                                          index: i,
                                          filterBarProps: Z,
                                          scenicSpotList: n,
                                          relList: S,
                                        });
                                      },
                                      onRequestNextPage: function () {
                                        e.requestNextPage();
                                      },
                                      onScroll: I.Z.isCRN
                                        ? P.Z.event(
                                            [
                                              {
                                                nativeEvent: {
                                                  contentOffset: {
                                                    y: this.state.scrollValue,
                                                  },
                                                },
                                              },
                                            ],
                                            {
                                              listener: function (t) {
                                                e.onScroll(t);
                                              },
                                            }
                                          )
                                        : this.onScroll,
                                    }),
                                  !c &&
                                    !(null != S && S.length) &&
                                    (0, N.tZ)(W.Z, { style: { height: 240 } }),
                                ],
                              })
                            : (0, N.BX)(v.View, {
                                className: I.Z.isCRN
                                  ? " _Y _Z _Mr _p"
                                  : " _Y _Z _jj",
                                children: [
                                  I.Z.isCRN &&
                                    (0, N.BX)(P.Z.View, {
                                      style: {
                                        position: "absolute",
                                        zIndex: 99,
                                        backgroundColor: y,
                                      },
                                      children: [
                                        (0, N.BX)(P.Z.View, {
                                          style: {
                                            position: "absolute",
                                            top: C,
                                            left: 0,
                                            opacity: b,
                                          },
                                          children: [
                                            (0, N.tZ)(P.Z.View, {
                                              style: {
                                                overflow: "hidden",
                                                opacity: b,
                                                width: ot.Ro.windowWidth,
                                                backgroundColor: "#fff",
                                              },
                                              children: (0, N.tZ)(
                                                k,
                                                (0, s.Z)(
                                                  (0, s.Z)(
                                                    {
                                                      backgroundColor:
                                                        "rgba(255,255,255,0)",
                                                      needAnimation: !1,
                                                      scroollY:
                                                        this.state.scrollValue,
                                                    },
                                                    this.handleFilterBarProps()
                                                  ),
                                                  {},
                                                  {
                                                    onFilterBar:
                                                      this.onFilterBar,
                                                    onFilterItem:
                                                      this.onFilterItem,
                                                    canNowUse:
                                                      this.state.canNowUse,
                                                    onCloseFilterPop:
                                                      this.onCloseFilterPop,
                                                    pageId: this.pageId,
                                                    ubtTrace: this.ubtTrace,
                                                    filterAchorHeight:
                                                      this.filterAchorHeight,
                                                    showStaticSearchFilter:
                                                      this.state
                                                        .showStaticSearchFilter,
                                                    labelStatisticShowList:
                                                      this.state
                                                        .labelStatisticShowList,
                                                  }
                                                )
                                              ),
                                            }),
                                            this.state.isShowFilterPop &&
                                              I.Z.isCRN &&
                                              (0, N.BX)(v.View, {
                                                style: {
                                                  position: "absolute",
                                                  top: 46,
                                                  height: ot.Ro.windowHeight,
                                                  left: 0,
                                                  width: "100%",
                                                  zIndex: 999,
                                                  backgroundColor:
                                                    "rgba(0,0,0,0.6)",
                                                },
                                                children: [
                                                  (0, N.tZ)(
                                                    M.Z,
                                                    (0, s.Z)(
                                                      (0, s.Z)(
                                                        { optionList: m },
                                                        Z
                                                      ),
                                                      {},
                                                      {
                                                        onFilterItem: function (
                                                          t
                                                        ) {
                                                          e.onFilterItem(
                                                            t,
                                                            Z.optionListType
                                                          );
                                                        },
                                                        canNowUse:
                                                          this.canNowUse,
                                                        ubtTrace: this.ubtTrace,
                                                        pageId: this.pageId,
                                                      }
                                                    )
                                                  ),
                                                  (0, N.tZ)(v.View, {
                                                    underlayColor: "tansparent",
                                                    id: "AMCO",
                                                    onClick: function () {
                                                      return e.onCloseFilterPop(
                                                        !1
                                                      );
                                                    },
                                                    style: {
                                                      width: "100%",
                                                      height:
                                                        ot.Ro.windowHeight -
                                                        ct -
                                                        325,
                                                    },
                                                    children: (0, N.tZ)(
                                                      v.View,
                                                      {}
                                                    ),
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        (0, N.tZ)(P.Z.View, {
                                          children: (0, N.tZ)(T.Z, {
                                            title: "",
                                            colors: [
                                              "transparent",
                                              "transparent",
                                            ],
                                            pop: function () {
                                              e.navigateBack();
                                            },
                                            defaultBackButtonColor: "black",
                                            backgroundColor: I.Z.isCRN
                                              ? "transparent"
                                              : "#fff",
                                            renderContentView:
                                              this.renderContentView,
                                            rightViewWidth: 0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  (0, N.tZ)(v.Block, {
                                    children:
                                      l && !I.Z.isCRN
                                        ? this.renderStaticSearchFilter(S)
                                        : (0, N.tZ)(v.View, {}),
                                  }),
                                  c
                                    ? this.onRenderHeader()
                                    : (null == S ? void 0 : S.length) > 0
                                    ? (0, N.tZ)(O.Z, {
                                        handleScrollMoment:
                                          this.handleScrollMoment,
                                        filterAchorHeight:
                                          this.filterAchorHeight,
                                        onRenderHeader: function () {
                                          return e.onRenderHeader(S);
                                        },
                                        pageNum: o,
                                        pageSize: 20,
                                        list: n,
                                        scrollIntoView: a,
                                        needScroll: this.state.needScroll,
                                        filterBarTop: this.state.filterBarTop,
                                        onRenderItem: function (t, i) {
                                          return e.renderItem({
                                            item: t,
                                            index: i,
                                            filterBarProps: Z,
                                            scenicSpotList: n,
                                          });
                                        },
                                        onRequestNextPage: function () {
                                          e.requestNextPage();
                                        },
                                        onScroll: I.Z.isCRN
                                          ? P.Z.event(
                                              [
                                                {
                                                  nativeEvent: {
                                                    contentOffset: {
                                                      y: this.state.scrollValue,
                                                    },
                                                  },
                                                },
                                              ],
                                              {
                                                listener: function (t) {
                                                  e.onScroll(t);
                                                },
                                              }
                                            )
                                          : this.onScroll,
                                      })
                                    : (0, N.BX)(N.HY, {
                                        children: [
                                          this.onRenderHeader(),
                                          (0, N.tZ)(W.Z, {
                                            style: { height: 240 },
                                          }),
                                        ],
                                      }),
                                  (0, N.tZ)(G, {
                                    data: r,
                                    ubtTrace: this.ubtTrace,
                                    pageId: this.pageId,
                                    onClose: function () {
                                      e.setState({
                                        couponInfo: (0, s.Z)(
                                          (0, s.Z)({}, r),
                                          {},
                                          { isShowPop: !1 }
                                        ),
                                      });
                                    },
                                    receiveCb: this.receiveCouponCb,
                                  }),
                                  !this.hasPopDay("TICKET_HOME_COUPON_RIGHT") &&
                                    (0, N.tZ)(J, {
                                      animateValue: this.translateAnimate,
                                      showPop: function () {
                                        e.setState({
                                          couponInfo: (0, s.Z)(
                                            (0, s.Z)({}, r),
                                            {},
                                            { isShowPop: !0 }
                                          ),
                                        });
                                      },
                                      couponInfo: r,
                                    }),
                                  !!h &&
                                    (0, N.tZ)(E, {
                                      indexModalUbtClick: p,
                                      url: this.state.targetUrl,
                                      modalSpMktInfo: this.state.modalSpMktInfo,
                                      cityName:
                                        (null ===
                                          (t = this.state.currentCityInfo) ||
                                        void 0 === t
                                          ? void 0
                                          : t.cityName) || "上海",
                                      _ubtTrace: this.ubtTrace,
                                      close: function () {
                                        e.setState({ showIndexModal: !1 });
                                      },
                                    }),
                                  (0, N.tZ)(tt.Z, {
                                    showUserModal: f,
                                    spMktInfo: g,
                                    closeModal: function () {
                                      return e.setState({ showUserModal: !1 });
                                    },
                                  }),
                                  (0, N.tZ)(V.Z, {
                                    zengxinConfigs: this.state.zengxinConfigs,
                                    zxModalVisible: this.state.zxModalVisible,
                                    onZxClick: this.showZxModal,
                                  }),
                                ],
                              });
                        },
                      },
                    ]),
                    i
                  );
                })(g.Component))
              ) || n;
          Page(
            (0, o.createPageConfig)(
              ht,
              "pages/taroCRN/ticket/pages/index/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "门票首页",
                navigationStyle: "custom",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(
          0,
          [
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (e) {
              return t((t.s = e));
            })(60485);
          }
        ),
          t.O();
      },
    ]);
})();
