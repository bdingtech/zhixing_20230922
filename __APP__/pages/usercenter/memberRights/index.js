!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [519],
      {
        6317: function (e, t, n) {
          var a,
            i = n(32180),
            l = n(57042),
            r = n(24460),
            c = n(81876),
            o = n(21867),
            s = n(86066),
            u = n(45023),
            d = n(52500),
            g = n(71515),
            h = n(92954),
            m = n(49120),
            f = n(2809),
            v = n(59163),
            Z = n(81957),
            b = n(48813),
            p = function (e) {
              var t = e.rightLen,
                n = e.grade;
              console.log("rightsLength==", t);
              return (0, b.tZ)(g.View, {
                className: "memberRights-page-header",
                children: (0, b.BX)(g.View, {
                  style:
                    "display:flex;align-items: center;flex-direction: column;",
                  children: [
                    (0, b.tZ)(g.Text, {
                      className: "grade",
                      children: (function () {
                        var e = "白银";
                        switch (n) {
                          case 40:
                            e = "黑钻";
                            break;
                          case 30:
                            e = "铂金";
                            break;
                          case 20:
                            e = "黄金";
                            break;
                          case 10:
                            e = "白银";
                            break;
                          default:
                            e = "普通";
                        }
                        return "亲爱的".concat(e, "会员");
                      })(),
                    }),
                    (0, b.BX)(g.Text, {
                      className: "total-rights",
                      children: ["您可享受", t, "项特权"],
                    }),
                  ],
                }),
              });
            },
            w = n(41760),
            N = function (e) {
              var t = e.displayGrade;
              return (0, b.BX)(g.View, {
                children: [
                  (0, b.tZ)(g.View, {
                    className: "memberRights-page-linear-bg ".concat(
                      t > 20 ? w.Zo[t] : ""
                    ),
                  }),
                  t > 20 &&
                    (0, b.tZ)(g.Image, {
                      className: "memberRights-page-linear-bg-tag",
                      src:
                        40 === t
                          ? "https://images3.c-ctrip.com/ztrip/train_bin/22-08/hyzx/img_hyzx_bg_hz@3x.png"
                          : "https://images3.c-ctrip.com/ztrip/train_bin/22-08/hyzx/img_hyzx_bg_bj@3x.png",
                    }),
                ],
              });
            },
            V = n(9196),
            x = ["交通出行", "酒店住宿", "休闲娱乐"],
            T = function (e) {
              var t = e.selectTab,
                n = e.changeTab;
              return (0, b.tZ)(g.View, {
                className: "memberRights-page-tabs flex",
                children: x.map(function (e, a) {
                  return (0, b.BX)(
                    g.View,
                    {
                      className: "tab flex-1 ".concat(a === t ? "active" : ""),
                      id: "ACBK",
                      onClick: function () {
                        return n(a);
                      },
                      children: [
                        e,
                        a === t &&
                          (0, b.tZ)(g.View, { className: "active-line" }),
                      ],
                    },
                    "tab_".concat(a)
                  );
                }),
              });
            },
            y = n(34229),
            B = n(79910),
            R = function (e) {
              var t,
                n = e.data,
                a = e.onShowRightDetail;
              return (0, b.BX)(g.View, {
                className: "member-rights-detail",
                children: [
                  (0, b.BX)(g.View, {
                    className: "title-wrap",
                    children: [
                      (0, b.tZ)(g.Text, {
                        children: null == n ? void 0 : n.name,
                      }),
                      (0, b.tZ)(y.ZtRichText, {
                        className: "desc",
                        nodes: null == n ? void 0 : n.desc,
                      }),
                    ],
                  }),
                  (0, b.tZ)(g.View, {
                    className: "list",
                    children:
                      null == n || null === (t = n.itemInfos) || void 0 === t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0, b.BX)(
                              g.View,
                              {
                                className: "item",
                                id: "ACBJ",
                                onClick: function () {
                                  null != e && e.jumpUrl
                                    ? B.Z.commonNavigator(
                                        null == e ? void 0 : e.jumpUrl
                                      )
                                    : (null == e ? void 0 : e.detailDesc) &&
                                      a(e);
                                },
                                children: [
                                  (0, b.tZ)(g.Image, {
                                    src: null == e ? void 0 : e.icon,
                                    className: "icon",
                                  }),
                                  (0, b.BX)(g.View, {
                                    className: "flex-1",
                                    children: [
                                      (0, b.tZ)(g.View, {
                                        className: "name",
                                        style: "color: ".concat(
                                          1 === e.status ? "#222222" : "#666"
                                        ),
                                        children: null == e ? void 0 : e.name,
                                      }),
                                      (0, b.tZ)(g.View, {
                                        className: "sub-desc",
                                        style: "color: ".concat(
                                          1 === e.status ? "#c28557" : "#999"
                                        ),
                                        children: null == e ? void 0 : e.desc,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              "right_item_".concat(t)
                            );
                          }),
                  }),
                ],
              });
            },
            _ = f.ZP.statusBarHeight || 44,
            I = f.ZP.screenHeight - _ - 44,
            S = I - 36 - 82,
            k =
              (0, Z.h)(!1, { usePageWrapper: !0 })(
                (a = (function (e) {
                  (0, o.Z)(n, e);
                  var t = (0, s.Z)(n);
                  function n(e) {
                    var a, i, r;
                    (0, l.Z)(this, n),
                      (r = t.call(this, e)),
                      (0, u.Z)((0, c.Z)(r), "disablePageBgStyle", !0),
                      (0, u.Z)(
                        (0, c.Z)(r),
                        "pageRootClassName",
                        "memberRights-page-root"
                      ),
                      (0, u.Z)((0, c.Z)(r), "pageTitle", "权益详情"),
                      (0, u.Z)((0, c.Z)(r), "initData", function () {
                        (0, v.yB)()
                          .then(function (e) {
                            if (1 === (null == e ? void 0 : e.resultCode)) {
                              var t =
                                  (null == e ? void 0 : e.detailInfos) || [],
                                n =
                                  null == t
                                    ? void 0
                                    : t.find(function (e) {
                                        return (
                                          (null == e ? void 0 : e.grade) ===
                                          r.state.grade
                                        );
                                      }),
                                a = r.getRightsLength(n);
                              r.setState({
                                detailInfos: t,
                                rightsLength: a,
                                currentRight:
                                  (null == n ? void 0 : n.itemInfos) || [],
                              });
                            } else (0, m.showToast)((null == e ? void 0 : e.resultMessage) || "当前无任何权益");
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      }),
                      (0, u.Z)((0, c.Z)(r), "getRightsLength", function (e) {
                        var t,
                          n = 0;
                        return (
                          null == e ||
                            null === (t = e.itemInfos) ||
                            void 0 === t ||
                            t.forEach(function (e) {
                              var t;
                              null === (t = e.itemInfos) ||
                                void 0 === t ||
                                t.forEach(function (e) {
                                  1 === e.status && (n += 1);
                                });
                            }),
                          n
                        );
                      }),
                      (0, u.Z)((0, c.Z)(r), "changeGrade", function (e) {
                        var t = r.state.detailInfos,
                          n =
                            null == t
                              ? void 0
                              : t.find(function (t) {
                                  return (null == t ? void 0 : t.grade) === e;
                                }),
                          a = r.getRightsLength(n);
                        r.setState({
                          rightsLength: a,
                          currentRight:
                            (null == n ? void 0 : n.itemInfos) || [],
                          grade: e,
                        });
                      }),
                      (0, u.Z)((0, c.Z)(r), "changeTab", function (e) {
                        r.setState({
                          scrollIntoView: "detail_tab_".concat(e),
                          selectTab: e,
                        });
                      }),
                      (0, u.Z)((0, c.Z)(r), "onShowRightDetail", function (e) {
                        r.showCommonDialog({
                          content: null == e ? void 0 : e.detailDesc,
                          title: "温馨提示",
                          buttonName: "我知道了",
                        });
                      }),
                      (0, u.Z)((0, c.Z)(r), "handleScroll", function (e) {
                        var t = ((null == e ? void 0 : e.detail) || {})
                            .scrollTop,
                          n = 0;
                        t >= 150 ||
                          ((n = t >= 40 && t < 150 ? 1 : 0),
                          r.state.selectTab !== n &&
                            r.setState({ selectTab: n }));
                      }),
                      (r.pageId = "10650087097");
                    var o = (
                        (null === (a = (0, h.getCurrentInstance)()) ||
                        void 0 === a ||
                        null === (i = a.router) ||
                        void 0 === i
                          ? void 0
                          : i.params) || {}
                      ).grade,
                      s = void 0 === o ? 0 : o;
                    return (
                      (r.state = {
                        grade: Number(s),
                        selectTab: 0,
                        scrollIntoView: "detail_tab_0",
                        rightsLength: 0,
                      }),
                      r
                    );
                  }
                  return (
                    (0, r.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.initData();
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          var e = this.state,
                            t = e.rightsLength,
                            n = e.grade;
                          return (0, b.tZ)(p, { rightLen: t || 0, grade: n });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.currentRight,
                            a = t.grade,
                            i = t.selectTab,
                            l = t.scrollIntoView;
                          return (0, b.BX)(g.View, {
                            className: "memberRights-page",
                            style: "height:".concat(I, "px"),
                            children: [
                              (0, b.tZ)(N, { displayGrade: a }),
                              (0, b.tZ)(g.View, {
                                className: "grade-progress",
                                children: (0, b.tZ)(V.Z, {
                                  displayGrade: a,
                                  changeGrade: this.changeGrade,
                                }),
                              }),
                              (0, b.BX)(g.View, {
                                className: "main flex-1",
                                children: [
                                  (0, b.tZ)(T, {
                                    selectTab: i,
                                    changeTab: this.changeTab,
                                  }),
                                  (0, b.tZ)(g.ScrollView, {
                                    scrollY: !0,
                                    style: "height:".concat(S, "px"),
                                    scrollIntoView: l,
                                    scrollWithAnimation: "true",
                                    onScroll: this.handleScroll,
                                    children:
                                      null == n
                                        ? void 0
                                        : n.map(function (t, a) {
                                            return (0,
                                            b.BX)(g.View, { id: "detail_tab_".concat(a), children: [(0, b.tZ)(R, { data: t, onShowRightDetail: e.onShowRightDetail }), a === (null == n ? void 0 : n.length) - 1 && (0, b.tZ)(g.View, { className: "empty" })] }, "rights_".concat(a));
                                          }),
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
                })(d.Component))
              ) || a;
          Page(
            (0, i.createPageConfig)(
              k,
              "pages/usercenter/memberRights/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "会员权益",
                navigationBarTextStyle: "white",
                navigationBarBackgroundColor: "#222",
                backgroundColorTop: "#222222",
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
          })(6317);
        }),
          e.O();
      },
    ]);
})();
