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
    require("../../../sub-common/46833458e1cabcee1efa7341adea7ce5.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [37548],
      {
        27966: function (e, n, r) {
          var t = r(32180),
            i = r(22276),
            o = r(57042),
            a = r(24460),
            c = r(81876),
            s = r(21867),
            l = r(86066),
            f = r(45023),
            u = r(52500),
            d = r(92954),
            h = r.n(d),
            m = r(71515),
            w = r(9776),
            g = r(81023),
            Z = r(8271),
            p = r.n(Z),
            b = r(48813);
          function N(e) {
            return (0, b.tZ)(b.HY, { children: e.children });
          }
          var v,
            x = r(87298),
            I = r(8079),
            C = r(851),
            k = r(19972),
            y = r(43884),
            V = r(69006),
            S = r(79910),
            _ = r(90098),
            B = u.default.memo(function (e) {
              return (0,
              b.BX)(b.HY, { children: [(0, b.tZ)(V.Z, { title: "退票详情", className: "refund-detail-head-view" }), S.Z.canUseCustomNav && (0, b.tZ)(m.View, { className: "head-view-place-holder", style: "padding-top: ".concat(_.Z.statusBarHeight, "px") })] });
            }),
            R = r(79301),
            T = r(95308),
            X = r(90129),
            D = r(49528),
            A = r(53550),
            M = r(1841),
            j = (0, D.lW)({
              closeIcon: { fontSize: 24, color: "rgba(153, 153, 153, 0.4)" },
              mt8: { marginTop: 8 },
              scale05: { transform: [{ scaleY: 0.5 }] },
              digitFont: { fontFamily: "ZX-Regular" },
            }),
            P = function (e) {
              var n = e.refundDetails,
                r = e.onClose;
              return (0, b.BX)(m.View, {
                className: "price-detail-pop",
                children: [
                  (0, b.BX)(m.View, {
                    className: "price-detail-title flex-center flex-row",
                    children: [
                      "退款明细",
                      (0, b.tZ)(m.View, {
                        id: "AMAG",
                        onClick: r,
                        className: "close-icon",
                        children: (0, b.tZ)(A.Z, {
                          style: j.closeIcon,
                          children: "󰳭",
                        }),
                      }),
                    ],
                  }),
                  (0, b.tZ)(m.View, {
                    className: "price-detail-content white-box",
                    children: n.map(function (e, r) {
                      var t;
                      return (0, b.BX)(
                        m.View,
                        {
                          className: "refund-detail",
                          children: [
                            (0, b.BX)(m.View, {
                              className:
                                "detail-hd flex-align-items-center flex-row",
                              children: [
                                (0, b.tZ)(m.View, {
                                  className:
                                    "color-2 font-16 flex-1 detail-title",
                                  children: e.title,
                                }),
                                (0, b.BX)(m.View, {
                                  className:
                                    "color-3 font-14 total-price flex-row",
                                  style: j.digitFont,
                                  children: ["¥", e.totalPrice],
                                }),
                              ],
                            }),
                            null === (t = e.priceDetails) || void 0 === t
                              ? void 0
                              : t.map(function (e, n) {
                                  var r;
                                  return (0,
                                  b.BX)(m.View, { className: "price-detail flex-align-items-center flex-row", style: 1 == n ? j.mt8 : {}, children: [(0, b.tZ)(m.View, { className: "color-2 font-14 flex-1 price-title", children: e.title }), (0, b.BX)(m.View, { className: "color-3 font-14 total-price flex-row", style: j.digitFont, children: ["¥", e.price, "x", e.count, null !== (r = e.unit) && void 0 !== r ? r : ""] })] }, n);
                                }),
                            r != n.length - 1 &&
                              (0, b.tZ)(m.View, {
                                className: "divider-line",
                                style: j.scale05,
                              }),
                          ],
                        },
                        r
                      );
                    }),
                  }),
                ],
              });
            },
            E = r(28044).Z,
            q = (0, D.lW)({
              arrowIcon: {
                fontSize: 12,
                color: "#879FC2",
                fontWeight: "500",
                marginLeft: 2,
              },
            }),
            H = u.default.memo(function (e) {
              var n = e.refundInfos,
                r = e.refundInfo,
                t = e.currentIndex,
                i = e.onSwitch,
                o = e.refresh,
                a = (0, D.lW)({
                  swiperIndicator: { width: 6 * n.length + 2 },
                  indicator: { transform: [{ translateX: 6 * t }] },
                }),
                c = (0, u.useState)(!1),
                s = (0, X.Z)(c, 2),
                l = s[0],
                f = s[1];
              (0, u.useEffect)(
                function () {
                  (function () {
                    var e = (0, T.Z)(
                      (0, R.Z)().mark(function e() {
                        var r, i, o;
                        return (0, R.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((r = n[t] || {}), !(i = r.refundId))) {
                                  e.next = 8;
                                  break;
                                }
                                return (e.next = 4), (0, w.nu)(i + "");
                              case 4:
                                if (
                                  (o = e.sent) &&
                                  o.hadClick &&
                                  "{}" != JSON.stringify(o.hadClick)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return", !1);
                              case 7:
                                return e.abrupt("return", !0);
                              case 8:
                                return e.abrupt("return", !1);
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()().then(function (e) {
                    f(e);
                  });
                },
                [n, t]
              );
              var h = (function () {
                var e = (0, T.Z)(
                  (0, R.Z)().mark(function e(r) {
                    var i, a, c, s;
                    return (0, R.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!l) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            (i = { token: r }),
                              (a = n[t] || {}),
                              (c = a.refundId),
                              (s = a.urgeModule),
                              (0, w.Lk)(c + "", { hadClick: !0 }),
                              f(!0),
                              (0, I.wQ)(i).then(function (e) {
                                var n = e || {},
                                  r = n.resultCode,
                                  t = n.data;
                                if (1 === r && t) {
                                  var i = (0, d.getCurrentInstance)().page;
                                  null == i ||
                                    i.showCommonDrawer({
                                      hideClose: !0,
                                      hideTitle: !0,
                                      content: function (e) {
                                        var n = e.onClose,
                                          r = (s || {}).content;
                                        return (0, b.tZ)(E, {
                                          title: "温馨提示",
                                          content:
                                            r ||
                                            "您刚刚提交了退票，产品提加鞭审核中，请您耐心等待",
                                          onConfirm: function () {
                                            n(), null == o || o();
                                          },
                                        });
                                      },
                                    });
                                }
                              });
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })();
              return (0, b.tZ)(m.View, {
                children:
                  r &&
                  (0, b.BX)(b.HY, {
                    children: [
                      (0, b.tZ)(m.Swiper, {
                        className: "refund-swiper",
                        onChange: i,
                        current: t,
                        children: n.map(function (e, n) {
                          var r = e.refundStatus,
                            t = e.refundTotalPrice,
                            i = e.refundDetails,
                            o = e.showUrgingButton,
                            a = e.urgingToken;
                          return (0, b.tZ)(
                            m.SwiperItem,
                            {
                              children: (0, b.BX)(m.View, {
                                className:
                                  "refund-detail-hd flex-align-items-center flex-row",
                                children: [
                                  (0, b.BX)(m.View, {
                                    className:
                                      "status flex-1 flex-align-items-center flex-row",
                                    children: [
                                      r,
                                      o &&
                                        (0, b.tZ)(m.View, {
                                          className:
                                            "reminder-process font-11 color-blue ".concat(
                                              l ? "disable" : ""
                                            ),
                                          id: "AMAH",
                                          onClick: function () {
                                            h(a);
                                          },
                                          children: "催处理",
                                        }),
                                    ],
                                  }),
                                  t &&
                                    (0, b.BX)(m.View, {
                                      className: "rbox flex flex-row",
                                      id: "AMAI",
                                      onClick: function () {
                                        return (function (e) {
                                          var n = e.refundDetails;
                                          console.log(n);
                                          var r = (0, d.getCurrentInstance)()
                                            .page;
                                          null == r ||
                                            r.showCommonDrawer({
                                              hideTitle: !0,
                                              hideClose: !0,
                                              content: function (e) {
                                                var r = e.onClose;
                                                return (0, b.tZ)(P, {
                                                  refundDetails: n,
                                                  onClose: r,
                                                });
                                              },
                                              className:
                                                "refund-price-detail-pop",
                                            });
                                        })({ refundDetails: i });
                                      },
                                      children: [
                                        (0, b.tZ)(m.View, {
                                          className: "tit font-11",
                                          children: "退款金额：",
                                        }),
                                        (0, b.BX)(m.View, {
                                          className:
                                            "price color-blue flex-row",
                                          children: [
                                            (0, b.tZ)(m.Text, {
                                              className: "rmb-sign color-blue",
                                              children: "¥",
                                            }),
                                            t,
                                            (0, b.tZ)(A.Z, {
                                              style: q.arrowIcon,
                                              children: "󰲧",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            },
                            n
                          );
                        }),
                      }),
                      (0, b.tZ)(m.View, {
                        className: "node-isolate-refund-remark",
                        children:
                          r.refundStatusDesc &&
                          (0, b.tZ)(y.Z, {
                            start: { x: 0, y: 0 },
                            end: { x: 1, y: 0 },
                            miniDirection: "X",
                            colors: [
                              "rgba(111, 147, 187, 0.1)",
                              "rgba(111, 147, 187, 0.05)",
                            ],
                            locations: [0, 1],
                            className: "refund-remark",
                            children: (0, b.tZ)(M.Z, {
                              className: "font-11",
                              style: { color: "#3C5A86" },
                              children: r.refundStatusDesc,
                            }),
                          }),
                      }),
                      (0, b.tZ)(m.View, {
                        className:
                          "node-isolate-indicator flex-center flex-row",
                        children:
                          n.length > 1 &&
                          (0, b.tZ)(m.View, {
                            className: "swiper-indicator",
                            style: a.swiperIndicator,
                            children: (0, b.tZ)(m.View, {
                              className: "indicator",
                              style: a.indicator,
                            }),
                          }),
                      }),
                    ],
                  }),
              });
            }),
            L = u.default.memo(function (e) {
              var n = e.refundInfo;
              return (0,
              b.tZ)(m.View, { className: "refund-info white-box", children: n && (0, b.BX)(b.HY, { children: [(0, b.BX)(m.View, { className: "info-item flex flex-row", style: { marginTop: 0 }, children: [(0, b.tZ)(m.View, { className: "info-title font-14", children: "退票的乘客" }), (0, b.tZ)(m.View, { className: "font-14 info-content flex-1", children: n.passengerInfo })] }), (0, b.BX)(m.View, { className: "info-item flex flex-row", children: [(0, b.tZ)(m.View, { className: "info-title font-14", children: "退票的行程" }), (0, b.tZ)(m.View, { className: "font-14 info-content flex-1", children: n.tripInfo })] })] }) });
            }),
            F = u.default.memo(function (e) {
              var n = e.refundInfo,
                r = (null == n ? void 0 : n.refundProgress) || [];
              return (0, b.tZ)(m.View, {
                className: " _a _Oa _Uf _kl",
                children: r.map(function (e, n) {
                  var t,
                    i =
                      null === (t = r[n + 1]) || void 0 === t
                        ? void 0
                        : t.isCheck,
                    o = n !== r.length - 1;
                  return (0,
                  b.BX)(m.View, { className: " _i _Ga", style: n !== r.length - 1 ? { marginBottom: 20 } : {}, children: [(0, b.BX)(m.View, { className: " _i _k _l _Ip", children: [e.isCheck ? (0, b.tZ)(A.Z, { className: " _H _wp _Gi", children: "󰲡" }) : (0, b.tZ)(m.View, { className: " _ba _dj _go _ra _Jp" }), o && (0, b.tZ)(m.View, { className: " _aa _go _ji _j", style: i ? { backgroundColor: "#edf6ff" } : {} })] }), (0, b.BX)(m.View, { className: "content flex-1", children: [(0, b.tZ)(M.Z, { className: "".concat(" _zc", " font-13 color-2"), children: e.status }), e.remark && (0, b.tZ)(m.View, { className: "".concat(" _Ac", " font-13 color-9"), children: e.remark }), e.extraRemark && (0, b.tZ)(m.View, { className: " _Xh _Ag", children: e.extraRemark })] })] }, n);
                }),
              });
            }),
            Y = r(75786),
            G = r(36168),
            O = r(90582),
            W = function (e) {
              var n = e.refundInfo,
                r = e.isConfirm,
                t = {
                  data: {
                    actionName: r ? "confirm" : "cancel",
                    noticeType: r ? 5 : 4,
                    orderNumber: e.orderNumber,
                    operationKey: n.operationKey,
                    refundId: n.refundId,
                    requestSource: n.source,
                  },
                },
                i = r ? "您已成功提交退票申请" : "已成功为您取消退票申请";
              (0, I.G2)(t)
                .then(function (e) {
                  1 == e.resultCode
                    ? (h().showToast({
                        title: e.resultMessage || i,
                        icon: "none",
                      }),
                      setTimeout(function () {
                        Y.Z.sendEvent("ORDER_DETAIL_PAGE_EVENT", {
                          type: "REFRESH_PAGE",
                        }),
                          h().navigateBack();
                      }, 200))
                    : h().showToast({
                        title: e.resultMessage || "操作失败",
                        icon: "none",
                      });
                })
                .catch(function () {
                  (0, O.v)("温馨提示", "网络异常，请稍后重试");
                });
            },
            J = u.default.memo(function (e) {
              var n = e.refundInfo,
                r = e.orderNumber,
                t = n || {},
                i = t.cancelable,
                o = t.needsConfirm;
              if (!(i || o)) return (0, b.tZ)(b.HY, {});
              return (0, b.BX)(G.Z, {
                children: [
                  i &&
                    (0, b.tZ)(m.View, {
                      className: "botm-btn flex-center cancel",
                      id: "AMAA",
                      onClick: function () {
                        n.cancelConfirmTips
                          ? (0, O.v)(
                              "温馨提示",
                              n.cancelConfirmTips,
                              { text: "取消" },
                              {
                                text: "确定",
                                callback: function () {
                                  W({
                                    refundInfo: n,
                                    orderNumber: r,
                                    isConfirm: !1,
                                  });
                                },
                              }
                            )
                          : W({ refundInfo: n, orderNumber: r, isConfirm: !1 });
                      },
                      children: "取消退票",
                    }),
                  o &&
                    (0, b.tZ)(m.View, {
                      className: "botm-btn flex-center confirm",
                      id: "AMAB",
                      onClick: function () {
                        W({ refundInfo: n, orderNumber: r, isConfirm: !0 });
                      },
                      children: "确认退票",
                    }),
                ],
              });
            }),
            z = r(55288),
            Q = r(298),
            U = r(43621),
            K = (0, r(57531).Z)(function (e) {
              return (0, b.tZ)(U.Z, (0, Q.Z)({}, e));
            }),
            $ = r(23577),
            ee = h().getSystemInfoSync(),
            ne =
              (0, x.h)()(
                (v = (function (e) {
                  (0, s.Z)(r, e);
                  var n = (0, l.Z)(r);
                  function r(e) {
                    var t;
                    return (
                      (0, o.Z)(this, r),
                      (t = n.call(this, e)),
                      (0, f.Z)((0, c.Z)(t), "isMount", !1),
                      (0, f.Z)((0, c.Z)(t), "_refundId", ""),
                      (0, f.Z)((0, c.Z)(t), "_npsShowedRecordList", []),
                      (0, f.Z)((0, c.Z)(t), "_refreshControl", void 0),
                      (0, f.Z)((0, c.Z)(t), "refresh", function () {
                        var e = t.state.orderNumber;
                        return (0, k.Q)(), t.getRefundInfos(e, !0).finally(k.Z);
                      }),
                      (0, f.Z)((0, c.Z)(t), "onSwitch", function (e) {
                        var n = e.detail.current;
                        t.setState({ currentIndex: n });
                      }),
                      (0, f.Z)((0, c.Z)(t), "handleNpsSubmit", function () {
                        var e = t.state.orderNumber;
                        h().showToast({ title: "提交成功" }),
                          t.setState({ showNPS: !1 }),
                          (0, w.Lk)(
                            "flt_nps_showed",
                            [].concat((0, i.Z)(t._npsShowedRecordList), [e])
                          );
                      }),
                      (t.state = {
                        orderNumber: "",
                        refundInfos: [],
                        currentIndex: 0,
                        showNPS: !1,
                        isRefreshing: !1,
                      }),
                      t
                    );
                  }
                  return (
                    (0, a.Z)(r, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            n = this;
                          this.isMount = !0;
                          var r = (0, d.getCurrentInstance)();
                          if (
                            null != r &&
                            null !== (e = r.router) &&
                            void 0 !== e &&
                            e.params
                          ) {
                            var t = r.router.params,
                              i = t.orderNumber,
                              o = t.refundId;
                            (this._refundId = o),
                              (0, k.Q)(),
                              (0, w.nu)("flt_nps_showed").then(function (e) {
                                var r = e || [];
                                r.includes(i) || n.setState({ showNPS: !0 }),
                                  (n._npsShowedRecordList = r);
                              }),
                              this.getRefundInfos(i).finally(k.Z);
                          }
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.isMount ? (this.isMount = !1) : this.refresh();
                        },
                      },
                      {
                        key: "getRefundInfos",
                        value: function (e) {
                          var n = this,
                            r =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            t = { data: { orderNumber: e } };
                          return (0, I.NF)(t)
                            .then(function (t) {
                              if (1 === t.resultCode && null != t && t.data) {
                                var i = t.data.refundInfos,
                                  o = n.handleRefundInfos(i);
                                (null != o && o.length) || h().navigateBack();
                                var a = o.findIndex(function (e) {
                                  return e.refundId == n._refundId;
                                });
                                if (r)
                                  return void n.setState({ refundInfos: i });
                                n.setState({
                                  orderNumber: e,
                                  refundInfos: o,
                                  currentIndex: -1 === a ? 0 : a,
                                });
                              } else
                                h().showToast({
                                  icon: "error",
                                  title: "网络异常，请稍候再试",
                                  complete: function () {
                                    h().navigateBack();
                                  },
                                });
                            })
                            .catch(function (e) {
                              console.debug("getRefundDetail Failed", e),
                                h().showToast({
                                  icon: "error",
                                  title: "网络错误，请稍后再试",
                                  complete: function () {
                                    h().navigateBack();
                                  },
                                });
                            });
                        },
                      },
                      {
                        key: "handleRefundInfos",
                        value: function (e) {
                          var n = [];
                          return (
                            null == e ||
                              e.forEach(function (e) {
                                var r = e.segmentInfos,
                                  t = e.passengerInfos,
                                  i = r[0],
                                  o = i.departCityName,
                                  a = i.arriveCityName,
                                  c = i.departDateTime;
                                (e.tripInfo = ""
                                  .concat(o, "-")
                                  .concat(a, " ")
                                  .concat(p()(c).format("MM-DD HH:mm"))),
                                  (e.passengerInfo = t
                                    .map(function (e) {
                                      return e.passengerName;
                                    })
                                    .join("、")),
                                  n.push(e);
                              }),
                            n
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            n = this.state,
                            r = n.refundInfos,
                            t = n.currentIndex,
                            i = n.orderNumber,
                            o = n.showNPS,
                            a = n.isRefreshing,
                            c = r[t];
                          return (0, b.BX)(m.View, {
                            className: "refund-detail-page flex flex-column",
                            children: [
                              (0, b.tZ)(y.Z, {
                                start: { x: 0, y: 0 },
                                end: { x: 0, y: 1 },
                                colors: [
                                  "rgb(166, 203, 255)",
                                  "rgb(245, 245, 245)",
                                ],
                                locations: [0, 1],
                                className: "bg-img",
                              }),
                              (0, b.tZ)(B, {}),
                              (0, b.tZ)(N, {
                                behavior: "position",
                                children: (0, b.BX)(m.ScrollView, {
                                  scrollY: !0,
                                  className: "page-content flex-1",
                                  showScrollbar: !1,
                                  showsVerticalScrollIndicator: !1,
                                  refresherEnabled: !0,
                                  refresherThreshold: 100,
                                  refresherTriggered: a,
                                  refresherBackground: "transparent",
                                  onRefresherRefresh: function () {
                                    e.setState({ isRefreshing: !0 }),
                                      e.refresh().finally(function () {
                                        setTimeout(function () {
                                          e.setState({ isRefreshing: !1 });
                                        }, 500);
                                      });
                                  },
                                  refreshControl: (0, b.tZ)(g.Z, {
                                    refreshing: a,
                                    ref: function (n) {
                                      return (e._refreshControl = n);
                                    },
                                    style: { backgroundColor: "transparent" },
                                    onRefresh: function () {
                                      e.setState({ isRefreshing: !0 }),
                                        e.refresh().finally(function () {
                                          setTimeout(function () {
                                            var n, r;
                                            e.setState({ isRefreshing: !1 }),
                                              null ===
                                                (n = e._refreshControl) ||
                                                void 0 === n ||
                                                null ===
                                                  (r = n.finishRefresh) ||
                                                void 0 === r ||
                                                r.call(n);
                                          }, 500);
                                        });
                                    },
                                    stateLabelColor: "#666666",
                                    loadingStyleName: "white",
                                  }),
                                  children: [
                                    (0, b.tZ)(H, {
                                      refundInfos: r,
                                      refundInfo: c,
                                      currentIndex: t,
                                      onSwitch: this.onSwitch,
                                      refresh: this.refresh,
                                    }),
                                    (0, b.tZ)(L, { refundInfo: c }),
                                    (0, b.tZ)(F, { refundInfo: c }),
                                    o &&
                                      (0, b.tZ)(K, {
                                        line: "flight",
                                        scene: "flightReturn",
                                        submitCallback:
                                          this.handleNpsSubmit.bind(this),
                                        orderNumber: i,
                                        style: {
                                          marginLeft: 8,
                                          marginRight: 8,
                                          width: ee.windowWidth - 16,
                                        },
                                      }),
                                    (0, b.tZ)(z.Z, {}),
                                  ],
                                }),
                              }),
                              (0, b.tZ)(J, { refundInfo: c, orderNumber: i }),
                              (0, b.tZ)(C.Z, {
                                ref: function (n) {
                                  e.onDrawerAttach(n);
                                },
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return $.Z.isTieyou ? "10650051911" : "10650051909";
                        },
                      },
                    ]),
                    r
                  );
                })(u.default.Component))
              ) || v;
          Page(
            (0, t.createPageConfig)(
              ne,
              "pages/taroCRN/flight/pages/refundDetail/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#efefef",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                disableScroll: !0,
                navigationBarTitleText: "退票详情",
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
            6189, 22843, 6878, 14030, 41834, 21641, 19559, 11216, 68592,
          ],
          function () {
            return (function (n) {
              return e((e.s = n));
            })(27966);
          }
        ),
          e.O();
      },
    ]);
})();
