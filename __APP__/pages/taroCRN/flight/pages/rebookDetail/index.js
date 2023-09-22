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
    require("../../../sub-common/87dd7ca508f26cc44a96a97518946752.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [16534],
      {
        12575: function (e, t, n) {
          var r,
            i = n(32180),
            a = n(298),
            o = n(57042),
            l = n(24460),
            s = n(81876),
            c = n(21867),
            u = n(86066),
            d = n(45023),
            f = n(52500),
            _ = n(92954),
            h = n.n(_),
            m = n(71515),
            b = n(87298),
            g = n(8079),
            Z = n(19972),
            k = n(43884),
            v = n(81023),
            p = n(55288),
            N = n(851),
            w = n(41478),
            I = n(23577),
            y = n(33786),
            C = n(92739),
            V = n(84581),
            B = n(29799),
            x = n(69006),
            R = n(79910),
            q = n(90098),
            S = n(48813),
            j = f.default.memo(function () {
              return (0,
              S.BX)(S.HY, { children: [(0, S.tZ)(x.Z, { title: "改签详情", className: "refund-detail-head-view" }), R.Z.canUseCustomNav && (0, S.tZ)(m.View, { className: "head-view-place-holder", style: "padding-top: ".concat(q.Z.statusBarHeight, "px") })] });
            }),
            X = n(53550),
            D = n(49528),
            F = n(1841),
            T = function (e) {
              var t = e.priceDetail,
                n = e.explanation,
                r = e.onClose,
                i = e.hasButton,
                a = (0, D.lW)({ zxRegularFont: { fontFamily: (0, D.QQ)() } });
              return (0, S.BX)(m.View, {
                className: " _hl _yd _yc _i _k",
                children: [
                  (0, S.BX)(k.Z, {
                    start: { x: 0, y: 0 },
                    end: { x: 0, y: 1 },
                    colors: ["#ffffff", "#f5f5f5"],
                    locations: [0, 0.16],
                    style: { flex: 1 },
                    children: [
                      (0, S.BX)(m.View, {
                        className: " _ok _Nc _p _o _pk",
                        children: [
                          "改签费用明细",
                          (0, S.tZ)(m.View, {
                            className: " _u _qk _il",
                            onClick: function () {
                              return r();
                            },
                            children: (0, S.tZ)(X.Z, {
                              className: " _rk _Bd",
                              children: "󰳭",
                            }),
                          }),
                        ],
                      }),
                      (0, S.BX)(m.View, {
                        className: " _a _Xa _jl _Mb _kl",
                        children: [
                          null == t
                            ? void 0
                            : t.map(function (e) {
                                var t = e.title,
                                  n = e.totalPrice,
                                  r = e.priceDetails;
                                return (0, S.BX)(S.HY, {
                                  children: [
                                    (0, S.tZ)(m.View, {
                                      className: " _ll",
                                      children: (0, S.BX)(m.View, {
                                        className: " _i _Ga _l _Rh",
                                        children: [
                                          (0, S.tZ)(m.View, {
                                            className: " _i _nl",
                                            children: (0, S.tZ)(m.Text, {
                                              className: " _dd _Pa",
                                              children: t,
                                            }),
                                          }),
                                          (0, S.BX)(m.View, {
                                            className: " _i _Ga _ok _G",
                                            style: a.zxRegularFont,
                                            children: ["¥", n],
                                          }),
                                        ],
                                      }),
                                    }),
                                    null == r
                                      ? void 0
                                      : r.map(function (e, t) {
                                          var n;
                                          return (0,
                                          S.BX)(m.View, { className: " _i _Ga _l _ml", children: [(0, S.tZ)(m.View, { className: " _i _nl", children: (0, S.tZ)(F.Z, { className: " _dd _Ti", children: null !== (n = e.title) && void 0 !== n ? n : "" }) }), (0, S.BX)(m.View, { className: " _i _Ga _ok _G", style: a.zxRegularFont, children: ["¥", e.price, "x", e.count] })] }, "".concat(t, "-").concat(e.price));
                                        }),
                                  ],
                                });
                              }),
                          (null == n ? void 0 : n.length) > 0 &&
                            (0, S.tZ)(m.View, {
                              className: " _ol _pb _Mb _uk",
                              children:
                                null == n
                                  ? void 0
                                  : n.map(function (e, t) {
                                      return (0,
                                      S.tZ)(m.View, { className: " _Kc _Na", style: "".concat(t !== n.length - 1 ? "margin-bottom: 8px" : ""), children: e }, t);
                                    }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  i && (0, S.tZ)(m.View, { className: " _Id _Z" }),
                ],
              });
            },
            G = (0, D.lW)({
              arrowIcon: {
                fontSize: 12,
                color: "#879FC2",
                fontWeight: "500",
                marginLeft: 2,
              },
              zxRegularFont: { fontFamily: (0, D.QQ)() },
            }),
            Y = function (e) {
              var t = e.rebookInfos,
                n = e.currentIndex,
                r = e.onSwitch,
                i = void 0 === r ? function () {} : r;
              if (!t || 0 === t.length) return (0, S.tZ)(S.HY, {});
              var o = (0, D.lW)({
                  swiperIndicator: { width: 6 * t.length + 2 },
                  indicator: { transform: [{ translateX: 6 * n }] },
                }),
                l = t[n],
                s = function () {
                  var e = l.rebookDetails;
                  l.rebookTotalPrice < 0 ||
                    (function (e) {
                      var t = e.hasButton,
                        n = void 0 !== t && t,
                        r = e.priceDetail,
                        i = e.explanation,
                        a = void 0 === i ? [] : i,
                        o = e.beforeClose;
                      new Promise(function (e) {
                        var t = (0, _.getCurrentInstance)().page;
                        if (!r) return e(function () {});
                        null == t ||
                          t.showCommonDrawer({
                            hideTitle: !0,
                            hideClose: !0,
                            content: function (t) {
                              var i = t.onClose;
                              return (
                                e(i.bind(void 0)),
                                (0, S.tZ)(S.HY, {
                                  children: (0, S.tZ)(T, {
                                    hasButton: n,
                                    priceDetail: r,
                                    explanation: a,
                                    onClose: i,
                                  }),
                                })
                              );
                            },
                            beforeClose: function () {
                              return null == o ? void 0 : o();
                            },
                            className: " _gl _p",
                          });
                      });
                    })({ priceDetail: e || [] });
                };
              return (0, S.tZ)(m.View, {
                children:
                  l &&
                  (0, S.BX)(S.HY, {
                    children: [
                      (0, S.tZ)(m.Swiper, {
                        className: " _aq _i _Ga",
                        onChange: i,
                        current: n,
                        children: t.map(function (e, t) {
                          var n = e.rebookStatus,
                            r = e.rebookTotalPrice;
                          return (0,
                          S.tZ)(m.SwiperItem, { className: " _j", children: (0, S.BX)(m.View, { className: " _bq _i _Ga _l", children: [(0, S.tZ)(m.View, { className: " _dq _Qj _i _nl _l _dd", children: n }), (0, S.BX)(m.View, { className: " _eq _fq _i", id: "AMAI", onClick: s, children: [(0, S.tZ)(m.View, { className: " _D _Vp", children: "改签金额：" }), r < 0 ? (0, S.tZ)(m.View, { className: " _gq _eq _wp _i _W _Ga", style: (0, a.Z)((0, a.Z)({}, G.zxRegularFont), {}, { fontSize: 18 }), children: "待确认" }) : (0, S.BX)(m.View, { className: " _gq _eq _wp _i _W _Ga", style: G.zxRegularFont, children: [(0, S.tZ)(m.Text, { className: " _hq _O _wp", style: G.zxRegularFont, children: "¥" }), r, (0, S.tZ)(X.Z, { style: G.arrowIcon, children: "󰲧" })] })] })] }) }, t);
                        }),
                      }),
                      (0, S.tZ)(m.View, { className: " _cq" }),
                      (0, S.tZ)(m.View, {
                        className: "node-isolate-refund-remark",
                        children:
                          l.rebookStatusDesc &&
                          (0, S.tZ)(k.Z, {
                            start: { x: 0, y: 0 },
                            end: { x: 1, y: 0 },
                            miniDirection: "X",
                            colors: [
                              "rgba(111, 147, 187, 0.1)",
                              "rgba(111, 147, 187, 0.05)",
                            ],
                            locations: [0, 1],
                            className: " _dc _iq _kl",
                            children: (0, S.tZ)(F.Z, {
                              className: "font-11",
                              style: { color: "#3C5A86" },
                              children: l.rebookStatusDesc,
                            }),
                          }),
                      }),
                      (0, S.tZ)(m.View, {
                        className: " _i _Ga _l _n",
                        children:
                          t.length > 1 &&
                          (0, S.tZ)(m.View, {
                            className: " _Rh _p _Tj _Ia _jq _kq",
                            style: o.swiperIndicator,
                            children: (0, S.tZ)(m.View, {
                              className: " _u _tf _Ia _kq _Fp _q _s",
                              style: o.indicator,
                            }),
                          }),
                      }),
                    ],
                  }),
              });
            },
            z = function (e) {
              var t = (e.rebookInfo || {}).rebookProgress;
              return (0, S.tZ)(m.View, {
                className: " _a _Oa _Uf _Dj",
                children:
                  null == t
                    ? void 0
                    : t.map(function (e, n) {
                        var r,
                          i =
                            null === (r = t[n + 1]) || void 0 === r
                              ? void 0
                              : r.isCheck,
                          a = n == t.length - 1;
                        return (0,
                        S.BX)(m.View, { className: " _i _Ga", style: a ? {} : { marginBottom: 20 }, children: [(0, S.BX)(m.View, { className: " _i _k _l _Ip", children: [e.isCheck ? (0, S.tZ)(X.Z, { className: " _H _wp _Gi", children: "󰲡" }) : (0, S.tZ)(m.View, { className: " _ba _dj _go _ra _Jp" }), !a && (0, S.tZ)(m.View, { className: " _aa _go _ji _j", style: i ? { backgroundColor: "#edf6ff" } : {} })] }), (0, S.BX)(m.View, { className: " _j", children: [(0, S.tZ)(F.Z, { className: " _zc _F _dd", children: e.status }), e.remark && (0, S.tZ)(m.View, { className: " _Ac _F _Kc", children: e.remark }), e.extraRemark && (0, S.tZ)(m.View, { className: " _Xh _Ag", children: e.extraRemark })] })] }, n);
                      }),
              });
            },
            A = n(36168),
            H = f.default.memo(function (e) {
              var t = e.rebookInfo,
                n = e.onCancelRebook,
                r = void 0 === n ? function () {} : n;
              return t && t.cancelRebook
                ? (0, S.tZ)(A.Z, {
                    children: (0, S.tZ)(m.View, {
                      className: ""
                        .concat(" _Gc _Oa _Yb _i _l _n", " ")
                        .concat(" _Dp _vd _x"),
                      id: "AMAA",
                      onClick: r,
                      children: "取消改签",
                    }),
                  })
                : (0, S.tZ)(S.HY, {});
            }),
            O =
              (0, b.h)()(
                (r = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, u.Z)(n);
                  function n(e) {
                    var r;
                    return (
                      (0, o.Z)(this, n),
                      (r = t.call(this, e)),
                      (0, d.Z)((0, s.Z)(r), "isMount", !1),
                      (0, d.Z)((0, s.Z)(r), "isIntl", !1),
                      (0, d.Z)((0, s.Z)(r), "orderNumber", void 0),
                      (0, d.Z)((0, s.Z)(r), "params", void 0),
                      (0, d.Z)((0, s.Z)(r), "rebookId", void 0),
                      (0, d.Z)((0, s.Z)(r), "_refreshControl", void 0),
                      (0, d.Z)((0, s.Z)(r), "pageId", ""),
                      (r.state = {
                        isRefreshing: !1,
                        rebookInfos: [],
                        curIndex: 0,
                      }),
                      r
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e;
                          (this.isMount = !0),
                            (this.params =
                              (null ===
                                (e = (0, _.getCurrentInstance)().router) ||
                              void 0 === e
                                ? void 0
                                : e.params) || {});
                          var t = this.params,
                            n = t.orderNumber,
                            r = t.isIntl,
                            i = t.rebookId;
                          (this.orderNumber = n),
                            (this.isIntl = this.getBooleanValue(r)),
                            (this.rebookId = i),
                            I.Z.isCRN
                              ? (this.pageId = this.isIntl
                                  ? "10650103456"
                                  : I.Z.isTieyou
                                  ? "10650051943"
                                  : "10650051941")
                              : (this.pageId = this.isIntl
                                  ? "10650103468"
                                  : ""),
                            (0, Z.Q)(),
                            this.getFlightRebookDetail(n).finally(Z.Z);
                        },
                      },
                      {
                        key: "getBooleanValue",
                        value: function (e) {
                          return "boolean" == typeof e
                            ? e
                            : "false" !== e && ("true" === e || !!e);
                        },
                      },
                      {
                        key: "getFlightRebookDetail",
                        value: function (e) {
                          var t = this,
                            n =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            r = { data: { orderNumber: e } };
                          return (0, g.qr)(r).then(function (e) {
                            if (1 === e.resultCode && null != e && e.data) {
                              var r = e.data || [];
                              if (!(r.length > 0))
                                return void h().navigateBack();
                              var i = r.map(function (e) {
                                  var t = e.segments,
                                    n = e.passengerInfos;
                                  return (0, a.Z)(
                                    (0, a.Z)({}, e),
                                    {},
                                    {
                                      segmentList: (0, w.F7)(t),
                                      passengers: n.map(function (e) {
                                        return {
                                          passengerName: e.passengerName,
                                          cardNo: e.identityNo,
                                          passengerType: e.identityType,
                                        };
                                      }),
                                    }
                                  );
                                }),
                                o = i.findIndex(function (e) {
                                  return e.rebookOrderNumber == t.rebookId;
                                });
                              if (n) return void t.setState({ rebookInfos: i });
                              t.setState({
                                rebookInfos: i,
                                curIndex: -1 == o ? 0 : o,
                              });
                            }
                          });
                        },
                      },
                      {
                        key: "refresh",
                        value: function () {
                          return (
                            (0, Z.Q)(),
                            this.getFlightRebookDetail(
                              this.orderNumber,
                              !0
                            ).finally(Z.Z)
                          );
                        },
                      },
                      {
                        key: "doCancelRebook",
                        value: function (e) {
                          var t = this;
                          return (0, g.Of)(e).then(function (e) {
                            1 == e.resultCode &&
                              (h().showToast({
                                title: e.resultMessage || "提交成功",
                              }),
                              t.refresh());
                          });
                        },
                      },
                      {
                        key: "handleSwitch",
                        value: function (e) {
                          var t = e.detail.current;
                          this.setState({ curIndex: t });
                        },
                      },
                      {
                        key: "handleCancelRebook",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.rebookInfos,
                            r = t.curIndex,
                            i = (null == n ? void 0 : n[r]) || {},
                            a = i.rebookOrderNumber,
                            o = i.tips,
                            l = {
                              data: {
                                orderNumber: this.orderNumber || "",
                                rebookOrderNumber: a,
                              },
                            };
                          this.showMultiButtonDialog({
                            title: "取消改签",
                            content: o || "是否确定取消?",
                            leftButtonName: "取消",
                            rightButtonName: "确定",
                            onRightButtonClick: function () {
                              e.doCancelRebook(l);
                            },
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            n,
                            r,
                            i = this,
                            a = this.state,
                            o = a.isRefreshing,
                            l = a.rebookInfos,
                            s = a.curIndex,
                            c = (null == l ? void 0 : l[s]) || {},
                            u = (null == c ? void 0 : c.segmentList) || [],
                            d = c.passengers || [],
                            f =
                              (null == c ||
                              null === (e = c.segments) ||
                              void 0 === e ||
                              null === (t = e[0]) ||
                              void 0 === t ||
                              null === (n = t.flightSegmentInfo) ||
                              void 0 === n ||
                              null === (r = n[0]) ||
                              void 0 === r
                                ? void 0
                                : r.cabinName) || "",
                            _ = [];
                          return (
                            f && _.push({ label: "改签舱位", value: f }),
                            (0, S.BX)(m.View, {
                              className: " _p _Y _vj _i _k",
                              children: [
                                (0, S.tZ)(k.Z, {
                                  start: { x: 0, y: 0 },
                                  end: { x: 0, y: 1 },
                                  colors: [
                                    "rgb(166, 203, 255)",
                                    "rgb(245, 245, 245)",
                                  ],
                                  locations: [0, 1],
                                  className: " _u _q _s _t _wj _i",
                                }),
                                (0, S.tZ)(j, {}),
                                (0, S.BX)(m.ScrollView, {
                                  scrollY: !0,
                                  className: " _j _p _sj _kc _Z",
                                  showScrollbar: !1,
                                  showsVerticalScrollIndicator: !1,
                                  refresherEnabled: !0,
                                  refresherThreshold: 100,
                                  refresherTriggered: o,
                                  refresherBackground: "transparent",
                                  onRefresherRefresh: function () {
                                    i.setState({ isRefreshing: !0 }),
                                      i.refresh().finally(function () {
                                        setTimeout(function () {
                                          i.setState({ isRefreshing: !1 });
                                        }, 500);
                                      });
                                  },
                                  refreshControl: (0, S.tZ)(v.Z, {
                                    refreshing: o,
                                    ref: function (e) {
                                      return (i._refreshControl = e);
                                    },
                                    style: { backgroundColor: "transparent" },
                                    onRefresh: function () {
                                      i.setState({ isRefreshing: !0 }),
                                        i.refresh().finally(function () {
                                          setTimeout(function () {
                                            var e, t;
                                            i.setState({ isRefreshing: !1 }),
                                              null ===
                                                (e = i._refreshControl) ||
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
                                    (0, S.tZ)(Y, {
                                      currentIndex: s,
                                      rebookInfos: l || [],
                                      onSwitch: this.handleSwitch.bind(this),
                                    }),
                                    this.isIntl &&
                                      (0, S.BX)(S.HY, {
                                        children: [
                                          (0, S.tZ)(C.J, { segments: u }),
                                          (0, S.tZ)(y.O, {
                                            passengers: d,
                                            extFields: _,
                                          }),
                                        ],
                                      }),
                                    !this.isIntl &&
                                      (0, S.tZ)(S.HY, {
                                        children: (0, S.tZ)(V.i, {
                                          segments: u,
                                          passengers: d,
                                          extField: _,
                                        }),
                                      }),
                                    (0, S.tZ)(z, { rebookInfo: c }),
                                    (0, S.tZ)(p.Z, { hasBottomBtn: !1 }),
                                  ],
                                }),
                                (0, S.tZ)(H, {
                                  rebookInfo: c,
                                  onCancelRebook:
                                    this.handleCancelRebook.bind(this),
                                }),
                                (0, S.tZ)(N.Z, {
                                  ref: function (e) {
                                    i.onDrawerAttach(e);
                                  },
                                }),
                                (0, S.tZ)(B.Z, {
                                  ref: function (e) {
                                    i.onDialogAttach(e);
                                  },
                                }),
                              ],
                            })
                          );
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                    ]),
                    n
                  );
                })(f.default.Component))
              ) || r;
          Page(
            (0, i.createPageConfig)(
              O,
              "pages/taroCRN/flight/pages/rebookDetail/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#efefef",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                disableScroll: !0,
                navigationBarTitleText: "改签详情",
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
            6189, 22843, 6878, 14906, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(12575);
          }
        ),
          e.O();
      },
    ]);
})();
