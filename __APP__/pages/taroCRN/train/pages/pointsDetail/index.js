!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../../../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [60959],
      {
        55385: function (e, t, n) {
          var r = n(32180),
            a = n(22276),
            i = n(298),
            o = n(79301),
            c = n(95308),
            s = n(57042),
            l = n(24460),
            u = n(81876),
            m = n(21867),
            f = n(86066),
            p = n(45023),
            d = n(52500),
            h = n(8271),
            b = n.n(h),
            x = n(71515),
            g = n(23577),
            Z = n(87298),
            v = n(19972),
            w = n(96302),
            N = n(851),
            P = n(29799),
            k = n(94205),
            y = n(82750),
            C = n(12806),
            D = n(58374),
            V = function (e) {
              return new Promise(function (t) {
                setTimeout(t, e);
              });
            },
            T = (function () {
              var e = (0, c.Z)(
                (0, o.Z)().mark(function e(t, n, r, a) {
                  var i, c, s, l, u, m, f, p, d;
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), t(n);
                          case 3:
                            if (
                              ((i = e.sent),
                              a++,
                              (c = i.resultCode),
                              (s = i.asycnPollingConfig),
                              c != r)
                            ) {
                              e.next = 14;
                              break;
                            }
                            if (
                              ((u = (l = s || {}).intervalSecond),
                              (m = void 0 === u ? 1 : u),
                              (f = l.intervalTotalTimes),
                              (p = void 0 === f ? 10 : f),
                              (d = l.pollingKey),
                              !(a >= p))
                            ) {
                              e.next = 10;
                              break;
                            }
                            return e.abrupt("return", {
                              resultCode: -2,
                              resultMessage: "请求超时，请稍后重试",
                            });
                          case 10:
                            return (e.next = 12), V(1e3 * m);
                          case 12:
                            return (
                              (n.pollingKey = d),
                              e.abrupt("return", T(t, n, r, a))
                            );
                          case 14:
                            return e.abrupt("return", i);
                          case 17:
                            return (
                              (e.prev = 17),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", e.t0)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 17]]
                  );
                })
              );
              return function (t, n, r, a) {
                return e.apply(this, arguments);
              };
            })(),
            I = (function () {
              var e = (0, c.Z)(
                (0, o.Z)().mark(function e(t) {
                  var n;
                  return (0, o.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), T(D.U2, t, 201, 0);
                        case 2:
                          if (
                            200 != (n = e.sent).resultCode ||
                            !n.zxQueryMemberPointPackage
                          ) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            n.zxQueryMemberPointPackage
                          );
                        case 5:
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
            Y = (function () {
              var e = (0, c.Z)(
                (0, o.Z)().mark(function e(t) {
                  var n, r;
                  return (0, o.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), T(D.AS, t, 201, 0);
                        case 2:
                          if (
                            !(
                              200 == (r = e.sent).resultCode &&
                              (null === (n = r.zxPointDetails) || void 0 === n
                                ? void 0
                                : n.length) > 0
                            )
                          ) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return", r.zxPointDetails);
                        case 5:
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
            B = n(90129),
            S = n(48813),
            M = ["积分明细", "收入积分", "积分使用"],
            z = function (e) {
              var t = e.onChange,
                n = (0, d.useState)(0),
                r = (0, B.Z)(n, 2),
                a = r[0],
                i = r[1],
                o = function (e) {
                  e != a && (i(e), null == t || t(e));
                };
              return (0, S.tZ)(x.View, {
                className: "member-tab flex-row flex-align-items-center",
                children: M.map(function (e, t) {
                  return (0, S.BX)(
                    x.View,
                    {
                      className: "member-tab-item flex-1 flex-center flex-row",
                      onClick: function () {
                        return o(t);
                      },
                      children: [
                        (0, S.tZ)(x.View, {
                          className:
                            a == t ? "member-tab-txt-cur" : "member-tab-txt",
                          children: e,
                        }),
                        a == t &&
                          (0, S.tZ)(x.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/tab@3x.png",
                            className: "member-tab-indicator",
                            style: g.Z.isCRN
                              ? {}
                              : { left: "50%", transform: "translateX(-50%)" },
                          }),
                      ],
                    },
                    t
                  );
                }),
              });
            },
            X = n(49528),
            q = n(99090),
            L = (0, X.lW)({
              line: {
                height: 1,
                backgroundColor: "#ededed",
                transform: [{ scaleY: 0.5 }],
                marginHorizontal: 16,
              },
            }),
            A = function (e) {
              var t = e.point,
                n = e.onClickItem,
                r = t.tradeName,
                a = t.tradeTime,
                i = t.trainCode,
                o = t.cumulatePoint,
                c = t.consumePoint,
                s = t.tradeType,
                l = t.validDate,
                u = "t" == s ? "+".concat(o) : "-".concat(c),
                m =
                  "tc" == s
                    ? "已兑换"
                    : l && b()(l).isAfter(b()())
                    ? "".concat(b()(l).format("YYYY.MM.DD"), "到期")
                    : "已到期",
                f = ""
                  .concat(b()(a).format("YYYY.MM.DD"), " ")
                  .concat(i, " 车次");
              return (0, S.BX)(x.View, {
                className:
                  "member-point-list-item flex-row flex-align-items-center",
                onClick: function () {
                  return n(t);
                },
                children: [
                  (0, S.BX)(x.View, {
                    className: "flex-1",
                    children: [
                      (0, S.tZ)(x.View, { className: "mp-title", children: r }),
                      (0, S.tZ)(x.View, {
                        className:
                          "mp-subtitle flex-row flex-align-items-center",
                        children: f,
                      }),
                    ],
                  }),
                  (0, S.BX)(x.View, {
                    className: "mp-rbox",
                    children: [
                      (0, S.tZ)(x.View, {
                        className: "mp-point",
                        style: "t" != s ? { color: "#FF5959" } : {},
                        children: u,
                      }),
                      (0, S.tZ)(x.View, {
                        className: "mp-expire",
                        children: m,
                      }),
                    ],
                  }),
                ],
              });
            },
            K = function () {
              return (0, S.BX)(x.View, {
                className:
                  "mp-empty-view flex-0-1 flex-column flex-align-items-center",
                children: [
                  (0, S.tZ)(x.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/qtd@3x.png",
                    className: "mp-empty-img",
                  }),
                  (0, S.tZ)(x.View, {
                    className: "mp-empty-txt",
                    children: "当前暂无数据",
                  }),
                ],
              });
            },
            j = function (e) {
              var t = e.noData,
                n = e.memberPoints,
                r = e.onClickItem,
                a = e.more,
                i = e.onClickMore;
              return t
                ? (0, S.tZ)(K, {})
                : (0, S.tZ)(x.ScrollView, {
                    scrollY: !0,
                    className: "flex-1",
                    scrollWithAnimation: !0,
                    children: (0, S.BX)(S.HY, {
                      children: [
                        null == n
                          ? void 0
                          : n.map(function (e, t) {
                              return (0,
                              S.BX)(x.View, { children: [(0, S.tZ)(A, { point: e, onClickItem: r }, t), (0, S.tZ)(x.View, { style: L.line })] }, t);
                            }),
                        a &&
                          (0, S.BX)(x.View, {
                            className: "mpl-more-wrap flex-row flex-center",
                            onClick: i,
                            children: [
                              (0, S.tZ)(x.View, {
                                className: "mpl-more",
                                children: "更多",
                              }),
                              (0, S.tZ)(q.BD, {
                                size: 10,
                                color: "#ccc",
                                style: { marginLeft: 4 },
                              }),
                            ],
                          }),
                        (0, S.tZ)(x.View, { className: "mpl-padding-bottom" }),
                      ],
                    }),
                  });
            };
          j.defaultProps = { memberPoints: [] };
          var Q,
            _ = j,
            R = n(92954),
            F = function (e) {
              var t = e.pointDetail,
                n = e.onClose,
                r = t.vAssgineeIdName,
                a = t.trainDate,
                i = t.stationTrainCode,
                o = t.fromName,
                c = t.toName,
                s = t.coachNo,
                l = t.sequenceNo,
                u = [
                  { label: "乘车人", value: r },
                  { label: "乘车日期", value: b()(a).format("YYYY年MM月DD日") },
                  {
                    label: "车次",
                    value: ""
                      .concat(i, " ")
                      .concat(o && c ? "".concat(o, "-").concat(c) : ""),
                  },
                  { label: "车厢号", value: s },
                  { label: "订单号", value: l },
                ];
              return (0, S.BX)(x.View, {
                className: "mpd-toast",
                children: [
                  (0, S.tZ)(x.View, {
                    className: "mpd-icon-close",
                    onClick: n,
                    children: (0, S.tZ)(q.bM, { size: 24, color: "#ccc" }),
                  }),
                  u.map(function (e, t) {
                    return (0,
                    S.BX)(x.View, { className: "mpd-detail-item flex-row flex-align-items-center", children: [(0, S.tZ)(x.View, { className: "mpd-label", children: e.label }), (0, S.tZ)(x.View, { className: "mpd-value", children: e.value })] }, t);
                  }),
                ],
              });
            },
            H = function (e) {
              (0, R.getCurrentInstance)().page.showCommonDrawer({
                hideClose: !0,
                hideTitle: !0,
                content: function (t) {
                  var n = t.onClose;
                  return (0, S.tZ)(F, { onClose: n, pointDetail: e });
                },
              });
            },
            J =
              (0, Z.h)()(
                (Q = (function (e) {
                  (0, m.Z)(n, e);
                  var t = (0, f.Z)(n);
                  function n(e) {
                    var r;
                    return (
                      (0, s.Z)(this, n),
                      (r = t.call(this, e)),
                      (0, p.Z)(
                        (0, u.Z)(r),
                        "getPointDetail",
                        (function () {
                          var e = (0, c.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var n, a, i, c;
                              return (0, o.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        !(n = r.pointDetailList.find(function (
                                          e
                                        ) {
                                          return e.tradeId == t.tradeId;
                                        }))
                                      ) {
                                        e.next = 4;
                                        break;
                                      }
                                      return H(n), e.abrupt("return");
                                    case 4:
                                      return (
                                        (a = {
                                          tradeId: t.tradeId,
                                          userName: r.account.userName,
                                          password: r.account.password,
                                          channel: g.Z.isTieyou
                                            ? "tieyou"
                                            : "zhixing",
                                          type: t.tradeType,
                                        }),
                                        (0, v.Q)(),
                                        (e.next = 8),
                                        Y(a)
                                      );
                                    case 8:
                                      if (
                                        !(
                                          (null == (i = e.sent)
                                            ? void 0
                                            : i.length) > 0
                                        )
                                      ) {
                                        e.next = 15;
                                        break;
                                      }
                                      return (
                                        (e.next = 12), r.handlePointDetail(i[0])
                                      );
                                    case 12:
                                      (c = e.sent),
                                        r.pointDetailList.push(c),
                                        H(c);
                                    case 15:
                                      (0, v.Z)();
                                    case 16:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, p.Z)(
                        (0, u.Z)(r),
                        "onSwitchTab",
                        (function () {
                          var e = (0, c.Z)(
                            (0, o.Z)().mark(function e(t) {
                              return (0, o.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (r.getPointData(t).memberPoints) {
                                        e.next = 4;
                                        break;
                                      }
                                      return (
                                        (e.next = 4), r.getPoints(String(t))
                                      );
                                    case 4:
                                      r.setState({ tabIndex: t });
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, p.Z)((0, u.Z)(r), "onClickMore", function () {
                        var e = r.state.tabIndex;
                        r.getPoints(String(e));
                      }),
                      (r.state = {
                        memberPoint: { pageNo: 0, more: !1 },
                        cumulatePoint: { pageNo: 0, more: !1 },
                        consumePoint: { pageNo: 0, more: !1 },
                        tabIndex: 0,
                        isLoading: !0,
                      }),
                      (r.pointDetailList = []),
                      (r.account = {}),
                      (r.pageId = g.Z.isCRN ? "10650031998" : ""),
                      r
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, n, r, a;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), (0, y.q0)();
                                      case 2:
                                        return (
                                          (t = e.sent),
                                          (n = t.userName),
                                          (r = t.password),
                                          (e.next = 6),
                                          (0, C.Kt)({
                                            login12306Name: n,
                                            login12306Pas: r,
                                          })
                                        );
                                      case 6:
                                        (a = e.sent),
                                          (this.account = {
                                            userName: n,
                                            password: a.login12306Pas,
                                          }),
                                          this.getPoints("0");
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
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getPoints",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var n, r, c, s, l, u, m, f, d;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = this.account),
                                          (r = this.getPointData(t)),
                                          (c = r.pageNo + 1),
                                          (s = 15),
                                          (l = {
                                            pageNo: c,
                                            partnerName: g.Z.isTieyou
                                              ? "tieyou"
                                              : "zhixing",
                                            channel: g.Z.isTieyou
                                              ? "tieyou"
                                              : "zhixing",
                                            startDate: "20171205",
                                            pagSize: s,
                                            userName: n.userName,
                                            password: n.password,
                                            queryType: t,
                                            endDate: b()().format("YYYYMMDD"),
                                          }),
                                          (0, v.Q)(),
                                          this.setState({ isLoading: !0 }),
                                          (e.next = 9),
                                          I(l)
                                        );
                                      case 9:
                                        (u = e.sent),
                                          (0, v.Z)(),
                                          this.setState({ isLoading: !1 }),
                                          u &&
                                            ((m = u.total > c * s),
                                            (f = (0, i.Z)(
                                              (0, i.Z)({}, u),
                                              {},
                                              {
                                                memberPoints: r.memberPoints
                                                  ? [].concat(
                                                      (0, a.Z)(r.memberPoints),
                                                      (0, a.Z)(u.memberPoints)
                                                    )
                                                  : u.memberPoints || [],
                                                more: m,
                                                pageNo: c,
                                              }
                                            )),
                                            (d = [
                                              "memberPoint",
                                              "cumulatePoint",
                                              "consumePoint",
                                            ][t]),
                                            this.setState((0, p.Z)({}, d, f)));
                                      case 13:
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
                        key: "handlePointDetail",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var n, r, a, c, s;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = t.boardStationTelecode),
                                          (r = t.arriveStationTelecode),
                                          (a = (0, i.Z)({}, t)),
                                          (e.prev = 2),
                                          (e.next = 5),
                                          (0, k.oK)(n)
                                        );
                                      case 5:
                                        return (
                                          (c = e.sent) && (a.fromName = c.name),
                                          (e.next = 9),
                                          (0, k.oK)(r)
                                        );
                                      case 9:
                                        (s = e.sent) && (a.toName = s.name),
                                          (e.next = 15);
                                        break;
                                      case 13:
                                        (e.prev = 13), (e.t0 = e.catch(2));
                                      case 15:
                                        return e.abrupt("return", a);
                                      case 16:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[2, 13]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "getPointData",
                        value: function (e) {
                          var t = this.state,
                            n = t.memberPoint,
                            r = t.cumulatePoint,
                            a = t.consumePoint;
                          return 0 == e ? n : 1 == e ? r : a;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.tabIndex,
                            r = t.isLoading,
                            a = this.getPointData(n),
                            i = a.memberPoints,
                            o = void 0 === i ? [] : i,
                            c = a.more,
                            s = 0 == o.length && !r;
                          return (0, S.BX)(x.View, {
                            className:
                              "train-member-points-detail flex flex-column",
                            children: [
                              (0, S.tZ)(w.Z, {
                                title: "积分明细",
                                backgroundColor: "#f5f5f5",
                              }),
                              (0, S.tZ)(x.View, {
                                className:
                                  "member-points-detail-content flex flex-column ".concat(
                                    s ? "flex-0-1" : "flex-1"
                                  ),
                                children: (0, S.BX)(x.View, {
                                  className:
                                    "member-points-box flex flex-column ".concat(
                                      s
                                        ? "mp-border flex-0-1"
                                        : "mp-border-btm flex-1"
                                    ),
                                  children: [
                                    (0, S.tZ)(z, {
                                      onChange: this.onSwitchTab,
                                    }),
                                    (0, S.tZ)(_, {
                                      noData: s,
                                      memberPoints: o,
                                      onClickItem: this.getPointDetail,
                                      more: c,
                                      onClickMore: this.onClickMore,
                                    }),
                                  ],
                                }),
                              }),
                              (0, S.tZ)(N.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t);
                                },
                              }),
                              (0, S.tZ)(P.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(d.default.Component))
              ) || Q;
          Page(
            (0, r.createPageConfig)(
              J,
              "pages/taroCRN/train/pages/pointsDetail/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "积分明细",
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [98946, 7160, 83004, 71229, 10313, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(55385);
          }
        ),
          e.O();
      },
    ]);
})();
