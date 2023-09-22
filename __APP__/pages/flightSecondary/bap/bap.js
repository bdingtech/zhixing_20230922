!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [26799],
      {
        68726: function (e, t, a) {
          var i,
            r = a(32180),
            n = a(57042),
            l = a(24460),
            c = a(21867),
            o = a(86066),
            s = a(90983),
            d = a(52500),
            m = a(71515),
            h = a(92954),
            u = a.n(h),
            g = a(48792),
            v = a.n(g),
            p = a(81957),
            k = a(34229),
            w = a(79792),
            f = a(85423),
            T = a(79910),
            Z = a(48813),
            y = {
              pageId: "10650060699",
              data: {
                isTieyou: w.default.isTieyou,
                roundTrip: !1,
                tabIndex: 0,
                scrollView: "remarkTitle",
                tabView: "remarkTitle",
              },
              onLoad: function (e) {
                var t = this,
                  a = e.data,
                  i = (void 0 === a ? {} : a).baggageAllowanceAndPolicies || [],
                  r = 2 === i.length;
                this.setData({
                  roundTrip: r,
                  tabIndex: 0,
                  baggageAllowanceAndPolicies: i,
                  bap: this.handleContentFormat(i[0]),
                }),
                  setTimeout(function () {
                    t.getElementHeight();
                  }, 1e3);
              },
              handleContentFormat: function (e) {
                var t,
                  a = e.topRemark,
                  i = e.remarkTitle,
                  r = e.remarkTail,
                  n = e.remarkUrl,
                  l = (0, s.Z)(a);
                try {
                  for (l.s(); !(t = l.n()).done; ) {
                    var c = t.value;
                    c.content = T.Z.convertAppTextToHtmlStr(c.content);
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
                var o,
                  d = (0, s.Z)(i.remarkTypeList);
                try {
                  for (d.s(); !(o = d.n()).done; ) {
                    var m = o.value;
                    m.contentList = [];
                    var h,
                      u = m.content.split("<br/>"),
                      g = (0, s.Z)(u);
                    try {
                      for (g.s(); !(h = g.n()).done; ) {
                        var v = h.value,
                          p = {};
                        (p.type = /\<\/a\>/g.test(v) ? "navigator" : "text"),
                          "text" === p.type
                            ? (p.content = T.Z.convertAppTextToHtmlStr(v))
                            : (p.content = T.Z.convertLinkRickTextToArray(v)),
                          m.contentList.push(p);
                      }
                    } catch (e) {
                      g.e(e);
                    } finally {
                      g.f();
                    }
                  }
                } catch (e) {
                  d.e(e);
                } finally {
                  d.f();
                }
                var k,
                  w = (0, s.Z)(r.remarkTypeList);
                try {
                  for (w.s(); !(k = w.n()).done; ) {
                    var f = k.value;
                    f.contentList = [];
                    for (var Z = [f.title], y = 0, V = Z; y < V.length; y++) {
                      var N = V[y],
                        b = {};
                      (b.type = /\<\/a\>/g.test(N) ? "navigator" : "text"),
                        "text" === b.type
                          ? (b.content = N)
                          : (b.content = T.Z.convertLinkRickTextToArray(N)),
                        f.contentList.push(b);
                    }
                  }
                } catch (e) {
                  w.e(e);
                } finally {
                  w.f();
                }
                return (
                  n &&
                    n.url &&
                    (n.url = "/functionalPages/twebview/index?url=".concat(
                      encodeURIComponent(n.url)
                    )),
                  e
                );
              },
              handleTabClick: function (e) {
                var t = e.currentTarget.dataset.index,
                  a = this.data,
                  i = a.tabIndex,
                  r = a.baggageAllowanceAndPolicies,
                  n = parseInt(t);
                i !== n &&
                  this.setData({
                    tabIndex: n,
                    bap: this.handleContentFormat(r[n]),
                  });
              },
              scrollToView: function (e) {
                var t = e.currentTarget.dataset.tab;
                this.setData({ scrollView: t, tabView: t });
              },
              getElementHeight: function () {
                var e = this;
                (this._remarkTitleHeight = 0),
                  (this._remarkBaggageHeight = 0),
                  (this._remarkBodyHeight = 0);
                var t = u().createSelectorQuery(),
                  a = u().createSelectorQuery(),
                  i = u().createSelectorQuery();
                t.select("#remarkTitle").boundingClientRect(),
                  t.exec(function (t) {
                    var a;
                    null != t &&
                      null !== (a = t[0]) &&
                      void 0 !== a &&
                      a.height &&
                      (e._remarkTitleHeight = t[0].height + 20);
                  }),
                  a.select("#remarkBaggage").boundingClientRect(),
                  a.exec(function (t) {
                    var a;
                    null != t &&
                      null !== (a = t[0]) &&
                      void 0 !== a &&
                      a.height &&
                      (e._remarkBaggageHeight = t[0].height + 20);
                  }),
                  i.select("#remarkBody").boundingClientRect(),
                  i.exec(function (t) {
                    var a;
                    null != t &&
                      null !== (a = t[0]) &&
                      void 0 !== a &&
                      a.height &&
                      (e._remarkBodyHeight = t[0].height + 20);
                  });
              },
              onViewScroll: function (e) {
                var t = (e.detail || {}).scrollTop,
                  a = void 0 === t ? 0 : t;
                a >= 0 && a < this._remarkTitleHeight
                  ? this.setData({ tabView: "remarkTitle" })
                  : a >= this._remarkTitleHeight &&
                    a < this._remarkTitleHeight + this._remarkBaggageHeight
                  ? this.setData({ tabView: "remarkBaggage" })
                  : a >= this._remarkTitleHeight + this._remarkBaggageHeight &&
                    this.setData({ tabView: "remarkBody" });
              },
            },
            V =
              (0, p.h)()(
                (i =
                  v()(y)(
                    (i = (function (e) {
                      (0, c.Z)(a, e);
                      var t = (0, o.Z)(a);
                      function a() {
                        return (0, n.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, l.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var e,
                                t,
                                a,
                                i,
                                r,
                                n,
                                l,
                                c,
                                o,
                                s,
                                d = this.data,
                                h = d.isTieyou,
                                u = d.bap,
                                g = d.tabView,
                                v = d.scrollView;
                              return (0, Z.BX)(m.View, {
                                className: "pop-full",
                                children: [
                                  (0, Z.tZ)(m.View, {
                                    className: "tgq-top-tips",
                                    children:
                                      null == u ||
                                      null === (e = u.topRemark) ||
                                      void 0 === e
                                        ? void 0
                                        : e.map(function (e, t) {
                                            return (0,
                                            Z.BX)(m.View, { className: "item", children: [(0, Z.tZ)(m.Image, { src: e.icon, className: "img" }), (0, Z.tZ)(k.ZtRichText, { className: "txt", nodes: e.content })] }, t);
                                          }),
                                  }),
                                  (0, Z.BX)(m.View, {
                                    className: "tgq-info-bar scroll",
                                    children: [
                                      (0, Z.tZ)(m.View, {
                                        className:
                                          "item " +
                                          ("remarkTitle" === g
                                            ? h
                                              ? "ty"
                                              : "zx"
                                            : ""),
                                        "data-tab": "remarkTitle",
                                        id: "AZAD",
                                        onClick: this.scrollToView,
                                        children: "产品说明",
                                      }),
                                      (0, Z.tZ)(m.View, {
                                        className:
                                          "item " +
                                          ("remarkBaggage" === g
                                            ? h
                                              ? "ty"
                                              : "zx"
                                            : ""),
                                        "data-tab": "remarkBaggage",
                                        id: "AZAE",
                                        onClick: this.scrollToView,
                                        children: "行李规定",
                                      }),
                                      (0, Z.tZ)(m.View, {
                                        className:
                                          "item " +
                                          ("remarkBody" === g
                                            ? h
                                              ? "ty"
                                              : "zx"
                                            : ""),
                                        "data-tab": "remarkBody",
                                        id: "AZAF",
                                        onClick: this.scrollToView,
                                        children: "退改签说明",
                                      }),
                                    ],
                                  }),
                                  (0, Z.tZ)(m.View, {
                                    className: "pop-full-bd tgq-bd",
                                    children: (0, Z.tZ)(m.ScrollView, {
                                      className: "scroll-view-wrap",
                                      scrollY: !0,
                                      enableBackToTop: !0,
                                      scrollWithAnimation: !0,
                                      scrollIntoView: v,
                                      onScroll: this.onViewScroll,
                                      children: (0, Z.BX)(m.View, {
                                        className: "padding-wrap",
                                        children: [
                                          (0, Z.tZ)(m.View, {
                                            className: "tgq-bd-info",
                                            id: "remarkTitle",
                                            children:
                                              null == u ||
                                              null === (t = u.remarkTitle) ||
                                              void 0 === t ||
                                              null === (a = t.remarkTypeList) ||
                                              void 0 === a
                                                ? void 0
                                                : a.map(function (e, t) {
                                                    return (0, Z.BX)(
                                                      m.View,
                                                      {
                                                        className: "item",
                                                        children: [
                                                          (0, Z.tZ)(m.Image, {
                                                            className:
                                                              "title-icon",
                                                            src: e.icon,
                                                          }),
                                                          (0, Z.BX)(m.View, {
                                                            className: "cont",
                                                            children: [
                                                              (0, Z.tZ)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "tit",
                                                                  children:
                                                                    e.title,
                                                                }
                                                              ),
                                                              e.contentList.map(
                                                                function (e) {
                                                                  return (0,
                                                                  Z.BX)(Z.HY, {
                                                                    children: [
                                                                      "text" ===
                                                                        e.type &&
                                                                        (0,
                                                                        Z.tZ)(
                                                                          m.View,
                                                                          {
                                                                            className:
                                                                              "txt",
                                                                            children:
                                                                              (0,
                                                                              Z.tZ)(
                                                                                k.ZtRichText,
                                                                                {
                                                                                  nodes:
                                                                                    e.content,
                                                                                }
                                                                              ),
                                                                          }
                                                                        ),
                                                                      "navigator" ===
                                                                        e.type &&
                                                                        (0,
                                                                        Z.tZ)(
                                                                          m.View,
                                                                          {
                                                                            className:
                                                                              "txt",
                                                                            children:
                                                                              e.content.map(
                                                                                function (
                                                                                  e
                                                                                ) {
                                                                                  return (0,
                                                                                  Z.BX)(
                                                                                    Z.HY,
                                                                                    {
                                                                                      children:
                                                                                        [
                                                                                          "txt" ===
                                                                                            e.type &&
                                                                                            (0,
                                                                                            Z.tZ)(
                                                                                              m.Text,
                                                                                              {
                                                                                                children:
                                                                                                  e.val,
                                                                                              }
                                                                                            ),
                                                                                          "url" ===
                                                                                            e.type &&
                                                                                            (0,
                                                                                            Z.tZ)(
                                                                                              m.Navigator,
                                                                                              {
                                                                                                className:
                                                                                                  "color-primary",
                                                                                                url: e.url,
                                                                                                children:
                                                                                                  e.val,
                                                                                              }
                                                                                            ),
                                                                                        ],
                                                                                    }
                                                                                  );
                                                                                }
                                                                              ),
                                                                          }
                                                                        ),
                                                                    ],
                                                                  });
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      },
                                                      t
                                                    );
                                                  }),
                                          }),
                                          (0, Z.BX)(m.View, {
                                            id: "remarkBaggage",
                                            children: [
                                              (0, Z.tZ)(m.View, {
                                                className:
                                                  "htit " + (h ? "ty" : "zx"),
                                                children:
                                                  null == u ||
                                                  null ===
                                                    (i = u.remarkBaggage) ||
                                                  void 0 === i
                                                    ? void 0
                                                    : i.title,
                                              }),
                                              (0, Z.tZ)(m.View, {
                                                className: "tgq-bd-table",
                                                children:
                                                  null == u ||
                                                  null ===
                                                    (r = u.remarkBaggage) ||
                                                  void 0 === r ||
                                                  null ===
                                                    (n = r.remarkTypeL1List) ||
                                                  void 0 === n
                                                    ? void 0
                                                    : n.map(function (e, t) {
                                                        return (0, Z.BX)(
                                                          m.View,
                                                          {
                                                            className: "tr",
                                                            children: [
                                                              (0, Z.tZ)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "th w100",
                                                                  children:
                                                                    e.title,
                                                                }
                                                              ),
                                                              (0, Z.tZ)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "td",
                                                                  children:
                                                                    e.remarkTypeList.map(
                                                                      function (
                                                                        e,
                                                                        t
                                                                      ) {
                                                                        return (0,
                                                                        Z.BX)(
                                                                          m.View,
                                                                          {
                                                                            className:
                                                                              "txt",
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                Z.BX)(
                                                                                  m.View,
                                                                                  {
                                                                                    className:
                                                                                      "top",
                                                                                    children:
                                                                                      [
                                                                                        e.icon &&
                                                                                          (0,
                                                                                          Z.tZ)(
                                                                                            m.Image,
                                                                                            {
                                                                                              className:
                                                                                                "title-icon",
                                                                                              src: e.icon,
                                                                                            }
                                                                                          ),
                                                                                        e.title,
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                                e.content &&
                                                                                  (0,
                                                                                  Z.tZ)(
                                                                                    m.View,
                                                                                    {
                                                                                      className:
                                                                                        "content",
                                                                                      children:
                                                                                        e.content,
                                                                                    }
                                                                                  ),
                                                                              ],
                                                                          },
                                                                          t
                                                                        );
                                                                      }
                                                                    ),
                                                                }
                                                              ),
                                                            ],
                                                          },
                                                          t
                                                        );
                                                      }),
                                              }),
                                            ],
                                          }),
                                          (0, Z.tZ)(m.View, {
                                            id: "remarkBody",
                                            children:
                                              null == u ||
                                              null === (l = u.remarkBody) ||
                                              void 0 === l
                                                ? void 0
                                                : l.map(function (e) {
                                                    var t;
                                                    return (0, Z.BX)(Z.HY, {
                                                      children: [
                                                        (0, Z.tZ)(m.View, {
                                                          className:
                                                            "htit " +
                                                            (h ? "ty" : "zx"),
                                                          children: e.title,
                                                        }),
                                                        (0, Z.tZ)(m.View, {
                                                          className: "htxt",
                                                          children:
                                                            "*" +
                                                            (h
                                                              ? "铁友"
                                                              : "智行") +
                                                            "不加收任何退改服务费，具体费用均以航空公司要求收取",
                                                        }),
                                                        null ===
                                                          (t =
                                                            u.refundAndChangeDetails) ||
                                                        void 0 === t
                                                          ? void 0
                                                          : t.map(function (
                                                              e,
                                                              t
                                                            ) {
                                                              var a;
                                                              return (0, Z.BX)(
                                                                f.iA,
                                                                {
                                                                  className:
                                                                    "flt-rule-table",
                                                                  children: [
                                                                    e.segments &&
                                                                      (0, Z.tZ)(
                                                                        f.Tr,
                                                                        {
                                                                          className:
                                                                            "seg-th",
                                                                          children:
                                                                            e.segments,
                                                                        }
                                                                      ),
                                                                    (0, Z.tZ)(
                                                                      f.p3,
                                                                      {
                                                                        children:
                                                                          null ===
                                                                            (a =
                                                                              e.details) ||
                                                                          void 0 ===
                                                                            a
                                                                            ? void 0
                                                                            : a.map(
                                                                                function (
                                                                                  e,
                                                                                  t
                                                                                ) {
                                                                                  var a;
                                                                                  return (0,
                                                                                  Z.BX)(
                                                                                    f.Tr,
                                                                                    {
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          Z.tZ)(
                                                                                            f.Td,
                                                                                            {
                                                                                              className:
                                                                                                "seg-detail-th",
                                                                                              children:
                                                                                                e.title,
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          Z.tZ)(
                                                                                            f.Td,
                                                                                            {
                                                                                              children:
                                                                                                null ===
                                                                                                  (a =
                                                                                                    e.scenes) ||
                                                                                                void 0 ===
                                                                                                  a
                                                                                                  ? void 0
                                                                                                  : a.map(
                                                                                                      function (
                                                                                                        e
                                                                                                      ) {
                                                                                                        var t;
                                                                                                        return (0,
                                                                                                        Z.BX)(
                                                                                                          Z.HY,
                                                                                                          {
                                                                                                            children:
                                                                                                              [
                                                                                                                e.name &&
                                                                                                                  (0,
                                                                                                                  Z.tZ)(
                                                                                                                    f.Tr,
                                                                                                                    {
                                                                                                                      className:
                                                                                                                        "scene-th",
                                                                                                                      children:
                                                                                                                        e.name,
                                                                                                                    }
                                                                                                                  ),
                                                                                                                (0,
                                                                                                                Z.tZ)(
                                                                                                                  f.Tr,
                                                                                                                  {
                                                                                                                    className:
                                                                                                                      "cont-tbox",
                                                                                                                    children:
                                                                                                                      null ===
                                                                                                                        (t =
                                                                                                                          e.details) ||
                                                                                                                      void 0 ===
                                                                                                                        t
                                                                                                                        ? void 0
                                                                                                                        : t.map(
                                                                                                                            function (
                                                                                                                              e,
                                                                                                                              t
                                                                                                                            ) {
                                                                                                                              return (0,
                                                                                                                              Z.tZ)(
                                                                                                                                m.View,
                                                                                                                                {
                                                                                                                                  className:
                                                                                                                                    "txt",
                                                                                                                                  children:
                                                                                                                                    (0,
                                                                                                                                    Z.BX)(
                                                                                                                                      m.View,
                                                                                                                                      {
                                                                                                                                        className:
                                                                                                                                          "top",
                                                                                                                                        children:
                                                                                                                                          [
                                                                                                                                            e.icon &&
                                                                                                                                              (0,
                                                                                                                                              Z.tZ)(
                                                                                                                                                m.Image,
                                                                                                                                                {
                                                                                                                                                  className:
                                                                                                                                                    "title-icon",
                                                                                                                                                  src: e.icon,
                                                                                                                                                }
                                                                                                                                              ),
                                                                                                                                            e.text,
                                                                                                                                          ],
                                                                                                                                      }
                                                                                                                                    ),
                                                                                                                                },
                                                                                                                                t
                                                                                                                              );
                                                                                                                            }
                                                                                                                          ),
                                                                                                                  }
                                                                                                                ),
                                                                                                              ],
                                                                                                          }
                                                                                                        );
                                                                                                      }
                                                                                                    ),
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    },
                                                                                    t
                                                                                  );
                                                                                }
                                                                              ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                },
                                                                t
                                                              );
                                                            }),
                                                      ],
                                                    });
                                                  }),
                                          }),
                                          (0, Z.tZ)(m.View, {
                                            className: "remark",
                                            children:
                                              null == u ||
                                              null === (c = u.remarkTail) ||
                                              void 0 === c ||
                                              null === (o = c.remarkTypeList) ||
                                              void 0 === o
                                                ? void 0
                                                : o.map(function (e, t) {
                                                    return (0, Z.tZ)(
                                                      m.View,
                                                      {
                                                        className: "remark-row",
                                                        children:
                                                          e.contentList.map(
                                                            function (e) {
                                                              return (0, Z.BX)(
                                                                Z.HY,
                                                                {
                                                                  children: [
                                                                    "text" ===
                                                                      e.type &&
                                                                      (0, Z.tZ)(
                                                                        m.View,
                                                                        {
                                                                          className:
                                                                            "txt",
                                                                          children:
                                                                            (0,
                                                                            Z.tZ)(
                                                                              k.ZtRichText,
                                                                              {
                                                                                nodes:
                                                                                  e.content,
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                    "navigator" ===
                                                                      e.type &&
                                                                      (0, Z.tZ)(
                                                                        m.View,
                                                                        {
                                                                          className:
                                                                            "txt",
                                                                          children:
                                                                            e.content.map(
                                                                              function (
                                                                                e
                                                                              ) {
                                                                                return (0,
                                                                                Z.BX)(
                                                                                  Z.HY,
                                                                                  {
                                                                                    children:
                                                                                      [
                                                                                        "txt" ===
                                                                                          e.type &&
                                                                                          (0,
                                                                                          Z.tZ)(
                                                                                            m.Text,
                                                                                            {
                                                                                              children:
                                                                                                e.val,
                                                                                            }
                                                                                          ),
                                                                                        "url" ===
                                                                                          e.type &&
                                                                                          (0,
                                                                                          Z.tZ)(
                                                                                            m.Navigator,
                                                                                            {
                                                                                              className:
                                                                                                "color-primary",
                                                                                              url: e.url,
                                                                                              children:
                                                                                                e.val,
                                                                                            }
                                                                                          ),
                                                                                      ],
                                                                                  }
                                                                                );
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                  ],
                                                                }
                                                              );
                                                            }
                                                          ),
                                                      },
                                                      t
                                                    );
                                                  }),
                                          }),
                                          (0, Z.tZ)(m.View, {
                                            className: "link",
                                            children:
                                              (null == u ||
                                              null === (s = u.remarkUrl) ||
                                              void 0 === s
                                                ? void 0
                                                : s.title) &&
                                              (0, Z.tZ)(m.Navigator, {
                                                className: "color-primary",
                                                url: u.remarkUrl.url,
                                                children: u.remarkUrl.title,
                                              }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(d.default.Component))
                  ) || i)
              ) || i;
          Page(
            (0, r.createPageConfig)(
              V,
              "pages/flightSecondary/bap/bap",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                navigationBarTitleText: "退改详情",
                navigationBarTextStyle: "black",
                backgroundColor: "#fff",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [8014, 81198, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(68726);
        }),
          e.O();
      },
    ]);
})();
