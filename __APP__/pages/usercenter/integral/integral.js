!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [12233],
      {
        22404: function (e, t, n) {
          var i,
            a = n(32180),
            r = n(57042),
            l = n(24460),
            o = n(81876),
            c = n(21867),
            s = n(86066),
            d = n(45023),
            u = n(52500),
            g = n(49120),
            m = n(71515),
            h = n(34229),
            p = (n(92954), n(79792)),
            f = n(81957),
            v = n(48813),
            Z = u.default.memo(function (e) {
              var t = e.type,
                n = e.onChange;
              return (0, v.BX)(m.View, {
                className: "integral-tab-bar",
                children: [
                  (0, v.tZ)(m.Text, {
                    className: "".concat("detail" === t ? "select" : ""),
                    id: "ACAM",
                    onClick: function () {
                      return n("detail");
                    },
                    children: "积分明细",
                  }),
                  (0, v.tZ)(m.View, { class: "line" }),
                  (0, v.tZ)(m.Text, {
                    className: "".concat("record" === t ? "select" : ""),
                    id: "ACAN",
                    onClick: function () {
                      return n("record");
                    },
                    children: "兑换记录",
                  }),
                ],
              });
            }),
            N = u.default.memo(function (e) {
              var t = e.record,
                n = e.isLast,
                i = e.type;
              return (0,
              v.BX)(v.HY, { children: [(0, v.BX)(m.View, { className: "integral-detail-item", children: [(0, v.BX)(m.View, { children: [(0, v.tZ)(m.Text, { className: "title", children: null == t ? void 0 : t.title }), (0, v.tZ)(m.View, { className: "desc", children: null == t ? void 0 : t.time })] }), (0, v.BX)(m.View, { style: "display: flex;flex-direction: column;align-items: flex-end;", children: [(0, v.BX)(m.View, { className: "num-wrap", children: [(0, v.tZ)(m.Text, { className: "num", children: "detail" === i ? t.reward : "-".concat(null == t ? void 0 : t.credit) }), (0, v.tZ)(m.Text, { className: "unit", children: "积分" })] }), !!t.payPrice && "record" === i && (0, v.BX)(m.View, { className: "discount", children: ["-¥", t.payPrice] })] })] }), n && (0, v.tZ)(m.View, { className: "integral-bottom-empty" })] });
            }),
            y = n(59163),
            w = p.default.isTieyou,
            T =
              (0, f.h)(!1, { usePageWrapper: !0 })(
                (i = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, s.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, r.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, d.Z)((0, o.Z)(i), "pageId", "10650060351"),
                      (0, d.Z)((0, o.Z)(i), "disableBgStyle", !0),
                      (0, d.Z)((0, o.Z)(i), "pageContentIsFullScreen", !0),
                      (0, d.Z)(
                        (0, o.Z)(i),
                        "pageRootClassName",
                        "flex-column flex"
                      ),
                      (0, d.Z)((0, o.Z)(i), "pageTitle", "我的积分"),
                      (0, d.Z)((0, o.Z)(i), "getTradeRecord", function (e, t) {
                        var n = i.state.detailList;
                        (0, y.m3)({ page: 20, currentPage: e, type: 3 })
                          .then(function (a) {
                            var r;
                            if (
                              ((0, g.hideLoading)(),
                              1 === (null == a ? void 0 : a.resultCode) &&
                                (null == a ||
                                null === (r = a.records) ||
                                void 0 === r
                                  ? void 0
                                  : r.length) > 0)
                            ) {
                              var l = n.concat(null == a ? void 0 : a.records);
                              i.setState({
                                detailList: l,
                                hasNextPage: !0,
                                pageNum: e,
                                virtualPageNum: t,
                                isLoading: !1,
                              });
                            } else i.setState({ detailList: n, hasNextPage: !1, isLoading: !1 });
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      }),
                      (0, d.Z)(
                        (0, o.Z)(i),
                        "getCreditDeductionExchangeRecords",
                        function () {
                          (0, y.rK)()
                            .then(function (e) {
                              var t;
                              1 === (null == e ? void 0 : e.resultCode) &&
                              (null == e ||
                              null === (t = e.records) ||
                              void 0 === t
                                ? void 0
                                : t.length) > 0
                                ? i.setState({
                                    recordList: null == e ? void 0 : e.records,
                                  })
                                : i.setState({ recordList: [] });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        }
                      ),
                      (0, d.Z)((0, o.Z)(i), "onChangeTab", function (e) {
                        i.setPageTitle(
                          "detail" === e ? "我的积分" : "兑换记录"
                        ),
                          i.setState({ tabType: e });
                      }),
                      (0, d.Z)((0, o.Z)(i), "onRequestNextPage", function () {
                        var e = i.state,
                          t = e.hasNextPage,
                          n = e.pageNum,
                          a = e.virtualPageNum,
                          r = e.detailList;
                        t &&
                          (a < Math.ceil((null == r ? void 0 : r.length) / 20)
                            ? i.setState({ virtualPageNum: a + 1 })
                            : i.getTradeRecord(n + 1, a + 1));
                      }),
                      (0, d.Z)((0, o.Z)(i), "renderEmpty", function (e) {
                        return (0,
                        v.BX)(m.View, { className: "empty-view", children: [(0, v.tZ)(m.Image, { src: w ? "https://images3.c-ctrip.com/ztrip/img/icon_record_ty.png" : "https://images3.c-ctrip.com/ztrip/img/icon_record_zx.png", className: "empty-icon" }), (0, v.tZ)(m.View, { className: "tips", children: e })] });
                      }),
                      (i.state = {
                        tabType: "detail",
                        recordList: [],
                        detailList: [],
                        pageNum: 1,
                        virtualPageNum: 1,
                        hasNextPage: !0,
                        isLoading: !0,
                      }),
                      i
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          (0, g.showLoading)(),
                            this.getTradeRecord(1, 1),
                            this.getCreditDeductionExchangeRecords();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.tabType,
                            i = t.detailList,
                            a = t.recordList,
                            r = t.virtualPageNum;
                          if (t.isLoading) return (0, v.tZ)(m.View, {});
                          var l = null == i ? void 0 : i.slice(0, 20 * r);
                          return (0, v.BX)(m.Block, {
                            children: [
                              "record" === n
                                ? (0, v.tZ)(m.View, {
                                    className: "content",
                                    children:
                                      (null == a ? void 0 : a.length) > 0
                                        ? null == a
                                          ? void 0
                                          : a.map(function (e, t) {
                                              return (0,
                                              v.tZ)(N, { record: e, isLast: t === (null == a ? void 0 : a.length) - 1, type: "record" }, "integral_item_".concat(t));
                                            })
                                        : this.renderEmpty(
                                            "您还没有使用过积分，快去兑换好礼吧~"
                                          ),
                                  })
                                : (0, v.tZ)(m.View, {
                                    className: "content",
                                    children:
                                      (null == i ? void 0 : i.length) > 0
                                        ? (0, v.tZ)(h.ZtVirtualList, {
                                            className: "virtual-list",
                                            listType: "multi",
                                            pageNum: r,
                                            list: l,
                                            segmentNum: 20,
                                            autoScrollTop: !1,
                                            scrollViewProps: {
                                              onScrollToLower: function () {
                                                return e.onRequestNextPage();
                                              },
                                              lowerThreshold: 70,
                                            },
                                            onRender: function (e, t) {
                                              return (0, v.tZ)(
                                                N,
                                                {
                                                  record: e,
                                                  isLast:
                                                    t ===
                                                    (null == l
                                                      ? void 0
                                                      : l.length) -
                                                      1,
                                                  type: "detail",
                                                },
                                                "integral_detail_item_".concat(
                                                  t
                                                )
                                              );
                                            },
                                          })
                                        : this.renderEmpty(
                                            "您还没有积分获取记录，快去获取积分吧~"
                                          ),
                                  }),
                              (0, v.tZ)(Z, {
                                type: n,
                                onChange: function (t) {
                                  return e.onChangeTab(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(u.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              T,
              "pages/usercenter/integral/integral",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "我的积分",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#f6f6f6",
                backgroundColorTop: "#fff",
                backgroundColorBottom: "#fff",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [59871, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(22404);
        }),
          e.O();
      },
    ]);
})();
