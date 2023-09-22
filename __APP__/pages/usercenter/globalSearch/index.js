!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [66559],
      {
        94050: function (e, t, i) {
          var n = i(32180),
            o = i(94262),
            r = i(57042),
            a = i(24460),
            l = i(81876),
            s = i(21867),
            c = i(86066),
            u = i(45023),
            d = i(52500),
            h = i(92954),
            p = i.n(h),
            m = i(71515),
            y = i(79910),
            f = i(81957),
            g = i(79792),
            v = i(13025),
            w = i(27113),
            Z = i(90129),
            S = i(48813),
            I = (0, d.forwardRef)(function (e, t) {
              var i = e.onInput,
                n = e.onClear,
                o = e.inputKeyword,
                r = (0, d.useRef)(),
                a = (0, d.useState)(!0),
                l = (0, Z.Z)(a, 2),
                s = l[0],
                c = l[1];
              return (
                (0, d.useImperativeHandle)(t, function () {
                  return {
                    setValue: function (e) {
                      r.current.value = e;
                    },
                    setFocusValue: function (e) {
                      c(e);
                    },
                  };
                }),
                (0, S.tZ)(m.View, {
                  className: "big-search-bar",
                  children: (0, S.BX)(m.View, {
                    className: "bar",
                    children: [
                      (0, S.tZ)(m.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/ywrk/icon_ss@3x.webp",
                        className: "search-icon",
                      }),
                      (0, S.tZ)(m.Input, {
                        placeholder: "可搜索火车·机票·酒店·门票",
                        className: "input",
                        placeholderClass: "place-input",
                        focus: s,
                        onInput: i,
                        ref: r,
                      }),
                      !!o &&
                        (0, S.tZ)(m.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_bin/23-04/ss/icon_ss_gb@3x.png",
                          className: "clear",
                          id: "ACAK",
                          onClick: n,
                        }),
                    ],
                  }),
                })
              );
            }),
            N = i(79301),
            C = i(95308),
            _ = "GLOBAL_SEARCH_HISTORY_KEY";
          function T(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return new Promise(function (i) {
              var n = 0,
                o = 0;
              try {
                p().nextTick(function () {
                  var r = p().createSelectorQuery();
                  r.selectAll(e).boundingClientRect(),
                    r.exec(function (e) {
                      var r;
                      console.log("res===", t, null == e ? void 0 : e[0]),
                        null === (r = e[0]) ||
                          void 0 === r ||
                          r.forEach(function (e, t) {
                            (null == e ? void 0 : e.left) <= 20 &&
                              3 === ++o &&
                              ((n = t - 1), console.log("超过了2行了"));
                          }),
                        i(
                          n > 0
                            ? { didList: t.slice(0, n), isOpen: !0, isFold: !0 }
                            : { didList: t, isOpen: !1, isFold: !1 }
                        );
                    });
                });
              } catch (e) {
                console.log("e===", e),
                  i({ didList: [], isOpen: !1, isFold: !1 });
              }
            });
          }
          function b(e) {
            var t = (p().getStorageSync(_) || []).filter(function (t) {
              return (
                (null == e ? void 0 : e.historyDisplayWord) !==
                (null == t ? void 0 : t.historyDisplayWord)
              );
            });
            p().setStorageSync(_, [e].concat(t));
          }
          var k = d.default.memo(
              function (e) {
                var t = e.list,
                  i = e.onClearHistory,
                  n = e.foldFlag,
                  o = e.foldCb,
                  r = e.pageId,
                  a = e.ubtTrace,
                  l = (0, d.useState)(!1),
                  s = (0, Z.Z)(l, 2),
                  c = s[0],
                  u = s[1],
                  h = (0, d.useState)(!1),
                  p = (0, Z.Z)(h, 2),
                  f = p[0],
                  g = p[1],
                  v = (0, d.useState)([]),
                  w = (0, Z.Z)(v, 2),
                  I = w[0],
                  _ = w[1],
                  k = (0, d.useState)(t),
                  x = (0, Z.Z)(k, 2),
                  F = x[0],
                  L = x[1],
                  W = (function () {
                    var e = (0, C.Z)(
                      (0, N.Z)().mark(function e() {
                        var i, o, r, a;
                        return (0, N.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  T(".history-search-hidden .history-item", t)
                                );
                              case 2:
                                (i = e.sent),
                                  (o = i.didList),
                                  (r = i.isOpen),
                                  (a = i.isFold),
                                  g(r),
                                  L(o),
                                  n > -1 && !!n !== a
                                    ? (u(!!n), _(n ? o : t))
                                    : (u(a), _(o));
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
                  })();
                (0, d.useEffect)(
                  function () {
                    W(),
                      a("TZWSearch_HistorySearch_exposure", {
                        PageId: r,
                        ItemList: t.map(function (e) {
                          return e.historyDisplayWord;
                        }),
                      });
                  },
                  [t]
                );
                return (0, S.BX)(m.Block, {
                  children: [
                    (0, S.BX)(m.View, {
                      className: "bSearch-history-title-wrap",
                      children: [
                        (0, S.tZ)(m.Text, {
                          className: "title",
                          children: "历史搜索",
                        }),
                        (0, S.tZ)(m.Text, {
                          className: "iconfont2 ifont2-shanchu_linea_20 del",
                          id: "ACAF",
                          onClick: i,
                        }),
                      ],
                    }),
                    (0, S.BX)(m.View, {
                      className: "bSearch-history-content",
                      children: [
                        I.map(function (e, t) {
                          return (0, S.tZ)(
                            m.View,
                            {
                              className: "history-item",
                              id: "ACAG",
                              onClick: function () {
                                e.jumpUrl && y.Z.commonNavigator(e.jumpUrl),
                                  b({
                                    historyDisplayWord: e.historyDisplayWord,
                                    jumpUrl: e.jumpUrl,
                                    outFlowLine: e.outFlowLine,
                                  }),
                                  a("TZWSearch_HistorySearch_click", {
                                    PageId: r,
                                    Item: e.historyDisplayWord,
                                    OutFlowLine: e.outFlowLine,
                                  });
                              },
                              children: e.historyDisplayWord,
                            },
                            t
                          );
                        }),
                        f &&
                          (0, S.tZ)(m.View, {
                            className: "history-item more",
                            id: "ACAH",
                            onClick: function () {
                              _(c ? t : F), o(!c), u(!c);
                            },
                            children: (0, S.tZ)(m.Text, {
                              className: "iconfont2 ".concat(
                                c
                                  ? "ifont2-zhankai_linea_12"
                                  : "ifont2-shouqi_linea_12"
                              ),
                            }),
                          }),
                        (0, S.BX)(m.View, {
                          className:
                            "bSearch-history-content history-search-hidden",
                          children: [
                            t.map(function (e, t) {
                              return (0,
                              S.tZ)(m.View, { className: "history-item", children: e.historyDisplayWord }, t);
                            }),
                            f &&
                              (0, S.tZ)(m.View, {
                                className: "history-item more",
                                children: (0, S.tZ)(m.Text, {
                                  className: "iconfont2 ".concat(
                                    c
                                      ? "ifont2-zhankai_linea_12"
                                      : "ifont2-shouqi_linea_12"
                                  ),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              },
              function (e, t) {
                return (
                  JSON.stringify(e.list || []) === JSON.stringify(t.list || [])
                );
              }
            ),
            x = d.default.memo(function (e) {
              var t = e.onShowGuide,
                i = e.list,
                n = e.ubtTrace,
                o = e.pageId;
              (0, d.useEffect)(
                function () {
                  n("TZWSearch_SearchRec_exposure", {
                    PageId: o,
                    ItemList: i.map(function (e) {
                      return e.displayWord;
                    }),
                  });
                },
                [i]
              );
              return (0, S.BX)(m.Block, {
                children: [
                  (0, S.BX)(m.View, {
                    className: "bSearch-history-title-wrap",
                    children: [
                      (0, S.tZ)(m.Text, {
                        className: "title",
                        children: "搜索推荐",
                      }),
                      (0, S.BX)(m.View, {
                        className: "flex-align-items-center",
                        id: "ACAI",
                        onClick: function () {
                          t(),
                            n("TZWSearch_SearchRec_click", {
                              PageId: o,
                              Item: "搜索攻略",
                              OutFlowLine: "PUB",
                            });
                        },
                        children: [
                          (0, S.tZ)(m.Text, {
                            className: "desc",
                            children: "搜索攻略",
                          }),
                          (0, S.tZ)(m.Text, {
                            className: "iconfont2 ifont2-zhushi_linea_12 del",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, S.tZ)(m.View, {
                    className: "bSearch-hot-content",
                    children: i.map(function (e, t) {
                      return (0, S.BX)(
                        m.View,
                        {
                          className: "history-item hot-item",
                          id: "ACAJ",
                          onClick: function () {
                            return (function (e) {
                              e.jumpUrl &&
                                (y.Z.commonNavigator(e.jumpUrl),
                                n("TZWSearch_SearchRec_click", {
                                  PageId: o,
                                  Item: e.displayWord,
                                  OutFlowLine: e.outFlowLine,
                                }));
                            })(e);
                          },
                          children: [
                            !!e.icon &&
                              (0, S.tZ)(m.Image, {
                                className: "icon",
                                src: e.icon,
                              }),
                            (0, S.tZ)(m.Text, {
                              className: "hot-txt",
                              children: e.displayWord,
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
            F = i(34229);
          function L(e) {
            var t,
              i,
              n = e.data,
              o = e.onRequery,
              r = e.ubtTrace,
              a = e.pageId,
              l = e.inputKeyword,
              s = e.queryCode,
              c =
                (null == n || null === (t = n.feature) || void 0 === t
                  ? void 0
                  : t.split("|")) || [];
            return (0, S.BX)(m.View, {
              className: "item",
              id: "ACAL",
              onClick: function () {
                "recquery" === n.type && n.keyword
                  ? null == o || o(n.keyword)
                  : (n.jumpUrl && y.Z.commonNavigator(n.jumpUrl),
                    b({
                      historyDisplayWord: n.historyDisplayWord,
                      jumpUrl: n.jumpUrl,
                      outFlowLine: n.outFlowLine,
                    })),
                  r("TZWSearch_Result_click", {
                    PageId: a,
                    Name: l,
                    Item: "".concat(n.historyDisplayWord, "_").concat(n.code),
                    QueryCode: s,
                    OutFlowLine: n.outFlowLine,
                  });
              },
              children: [
                (0, S.BX)(m.View, {
                  className: "title-info-wrap",
                  children: [
                    (0, S.tZ)(m.Image, {
                      src:
                        "recquery" === n.type
                          ? "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/ywrk/icon_ss@3x.webp"
                          : null == n
                          ? void 0
                          : n.icon,
                      className: "recquery" === n.type ? "empty-icon" : "icon",
                    }),
                    (0, S.tZ)(m.View, {
                      className: "title-wrap",
                      children: (0, S.tZ)(F.ZtRichText, {
                        nodes:
                          "<div style='max-width: 300px;overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;'>".concat(
                            null == n ? void 0 : n.displayWord,
                            "</div>"
                          ),
                        className: "title",
                      }),
                    }),
                    !(null == n || !n.rightText) &&
                      (0, S.tZ)(F.ZtRichText, {
                        nodes: "<div style='font-family: ZX-Regular '>".concat(
                          null == n ? void 0 : n.rightText,
                          "</div>"
                        ),
                        className: "price",
                      }),
                    n.jumpUrl &&
                      (0, S.tZ)(m.Text, {
                        className: "iconfont2 ifont2-arr arr",
                      }),
                  ],
                }),
                (null == c ? void 0 : c.length) > 0 &&
                  (0, S.tZ)(m.View, {
                    className: "desc-wrap",
                    children: c.map(function (e, t) {
                      return (0,
                      S.BX)(S.HY, { children: [(0, S.tZ)(m.View, { className: "desc-item", children: e }), t !== c.length - 1 && (0, S.tZ)(m.View, { className: "line" })] });
                    }),
                  }),
                (null == n || null === (i = n.childTagList) || void 0 === i
                  ? void 0
                  : i.length) > 0 &&
                  (0, S.tZ)(m.View, {
                    className: "tags-wrap",
                    children:
                      null == n
                        ? void 0
                        : n.childTagList.map(function (e, t) {
                            return (0, S.tZ)(
                              m.View,
                              {
                                id: "ACBw",
                                className: "tag-item",
                                onClick: function (t) {
                                  t.stopPropagation(),
                                    (function (e) {
                                      e.jumpUrl &&
                                        y.Z.commonNavigator(e.jumpUrl),
                                        b({
                                          historyDisplayWord:
                                            e.historyDisplayWord,
                                          jumpUrl: e.jumpUrl,
                                          outFlowLine: n.outFlowLine,
                                        }),
                                        r("TZWSearch_Result_click", {
                                          PageId: a,
                                          Name: l,
                                          Item: ""
                                            .concat(e.historyDisplayWord, "_")
                                            .concat(e.code),
                                          QueryCode: s,
                                          OutFlowLine: e.outFlowLine,
                                        });
                                    })(e);
                                },
                                children: (0, S.tZ)(F.ZtRichText, {
                                  nodes:
                                    "<div style='max-width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;'>".concat(
                                      e.displayWord,
                                      "</div>"
                                    ),
                                }),
                              },
                              t
                            );
                          }),
                  }),
              ],
            });
          }
          var W,
            B = d.default.memo(function (e) {
              var t = e.list,
                i = e.onRequery,
                n = e.ubtTrace,
                o = e.pageId,
                r = e.inputKeyword,
                a = e.queryCode;
              return (
                (0, d.useEffect)(
                  function () {
                    (null == t ? void 0 : t.length) > 0 &&
                      n("TZWSearch_Result_exposure", {
                        PageId: o,
                        Name: r,
                        ItemList: t.map(function (e) {
                          return ""
                            .concat(e.historyDisplayWord, "_")
                            .concat(e.code);
                        }),
                        QueryCode: a,
                      });
                  },
                  [t]
                ),
                (0, S.tZ)(m.CustomWrapper, {
                  children: (0, S.tZ)(m.View, {
                    className: "big-search-result",
                    children:
                      null == t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0,
                            S.tZ)(L, { data: e, onRequery: i, pageId: o, inputKeyword: r, queryCode: a, ubtTrace: n }, t);
                          }),
                  }),
                })
              );
            }),
            R =
              (0, f.h)(!1, { usePageWrapper: !0 })(
                (W = (function (e) {
                  (0, s.Z)(i, e);
                  var t = (0, c.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, r.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, u.Z)((0, l.Z)(n), "disableBgStyle", !0),
                      (0, u.Z)((0, l.Z)(n), "pageTitle", "搜索"),
                      (0, u.Z)((0, l.Z)(n), "pageRootClassName", "bSearch"),
                      (0, u.Z)((0, l.Z)(n), "pageContentIsFullScreen", !0),
                      (0, u.Z)((0, l.Z)(n), "onInputKeyword", function (e) {
                        var t = e.target.value;
                        n.searchInput(t);
                      }),
                      (n.state = {
                        inputKeyword: "",
                        resultList: [],
                        cityId: 2,
                        longitude: "",
                        latitude: "",
                        historyList: [],
                        recommends: [],
                        historyFoldFlag: -1,
                        queryCode: "",
                      }),
                      (n.pageId = g.default.isTieyou
                        ? "10650095120"
                        : "10650095118"),
                      n
                    );
                  }
                  return (
                    (0, a.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this;
                          p().getStorageSync("B_SEARCH_GUIDE_POP") ||
                            (this.$InputNode.setFocusValue(!1),
                            this.showGuideSearchPop()),
                            (0, w.CC)()
                              .then(function (t) {
                                e.setState(
                                  {
                                    cityId: null == t ? void 0 : t.cityId,
                                    longitude:
                                      (null == t ? void 0 : t.longitude) + "",
                                    latitude:
                                      (null == t ? void 0 : t.latitude) + "",
                                  },
                                  function () {
                                    e.requestRecommend();
                                  }
                                );
                              })
                              .catch(function () {
                                return e.requestRecommend();
                              });
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e = p().getStorageSync(_) || [];
                          this.setState({ historyList: e });
                        },
                      },
                      {
                        key: "requestRecommend",
                        value: function () {
                          var e = this,
                            t = this.state.cityId;
                          (0, v.r3)({ cityId: t ? Number(t) : 2 })
                            .then(function (t) {
                              e.setState({
                                recommends:
                                  (null == t ? void 0 : t.defaults) || [],
                              });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        },
                      },
                      {
                        key: "showGuideSearchPop",
                        value: function () {
                          p().setStorageSync("B_SEARCH_GUIDE_POP", !0),
                            this.showCommonDrawer({
                              hideTitle: !1,
                              hideClose: !1,
                              className: "big-search-guide-pop",
                              title: "你可以这么搜索：",
                              content: function (e) {
                                return (
                                  (0, o.Z)(e),
                                  (0, S.tZ)(m.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train_bin/23-04/img_ds_gl@3x.png",
                                    className: "bSearch-guide-icon",
                                    mode: "aspectFit",
                                  })
                                );
                              },
                            });
                        },
                      },
                      {
                        key: "searchInput",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            i = this.state,
                            n = i.inputKeyword,
                            o = i.longitude,
                            r = i.latitude,
                            a = i.cityId;
                          if (
                            t.trim() !== n &&
                            (this.setState({ inputKeyword: t.trim() }),
                            "" !== t && "" !== t.trim())
                          ) {
                            var l = { keyword: t.trim() };
                            l.cityId = a ? Number(a) : 2;
                            var s = [
                              { name: "longitude", value: o },
                              { name: "latitude", value: r },
                            ];
                            (0, v.ik)(l, { extension: s })
                              .then(function (t) {
                                var i;
                                1 === (null == t ? void 0 : t.resultCode) &&
                                  (null == t ||
                                  null === (i = t.results) ||
                                  void 0 === i
                                    ? void 0
                                    : i.length) > 0 &&
                                  e.setState({
                                    resultList:
                                      (null == t ? void 0 : t.results) || [],
                                    queryCode:
                                      (null == t ? void 0 : t.queryCode) || "",
                                  });
                              })
                              .catch(function (e) {
                                console.log(e);
                              });
                          }
                        },
                      },
                      {
                        key: "onClearHistory",
                        value: function () {
                          p().setStorageSync(_, []),
                            this.setState({ historyList: [] });
                        },
                      },
                      {
                        key: "onClear",
                        value: function () {
                          var e;
                          this.setState({ inputKeyword: "", resultList: [] }),
                            null === (e = this.$InputNode) ||
                              void 0 === e ||
                              e.setValue("");
                        },
                      },
                      {
                        key: "onRequery",
                        value: function (e) {
                          var t;
                          null === (t = this.$InputNode) ||
                            void 0 === t ||
                            t.setValue(e),
                            this.searchInput(e);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.inputKeyword,
                            n = t.resultList,
                            o = t.historyList,
                            r = t.recommends,
                            a = t.historyFoldFlag,
                            l = t.queryCode;
                          return (0, S.BX)(m.Block, {
                            children: [
                              (0, S.tZ)(I, {
                                onInput: y.Z.debounce(
                                  this.onInputKeyword.bind(this)
                                ),
                                onClear: this.onClear,
                                inputKeyword: i,
                                ref: function (t) {
                                  return (e.$InputNode = t);
                                },
                              }),
                              i &&
                                (0, S.tZ)(B, {
                                  list: n,
                                  onRequery: this.onRequery,
                                  ubtTrace: this.ubtTrace,
                                  pageId: this.pageId,
                                  inputKeyword: i,
                                  queryCode: l,
                                }),
                              (0, S.BX)(S.HY, {
                                children: [
                                  o.length > 0 &&
                                    (0, S.tZ)(k, {
                                      list: o,
                                      onClearHistory: this.onClearHistory,
                                      foldFlag: a,
                                      foldCb: function (t) {
                                        return e.setState({
                                          historyFoldFlag: t ? 1 : 0,
                                        });
                                      },
                                      ubtTrace: this.ubtTrace,
                                      pageId: this.pageId,
                                    }),
                                  (null == r ? void 0 : r.length) > 0 &&
                                    (0, S.tZ)(x, {
                                      onShowGuide: this.showGuideSearchPop,
                                      list: r,
                                      ubtTrace: this.ubtTrace,
                                      pageId: this.pageId,
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
                })(d.Component))
              ) || W;
          Page(
            (0, n.createPageConfig)(
              R,
              "pages/usercenter/globalSearch/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#EFEFEF",
                navigationBarTitleText: "搜索",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(94050);
        }),
          e.O();
      },
    ]);
})();
