!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [90719],
    {
      32270: function (e, t, n) {
        n.d(t, {
          QU: function () {
            return W;
          },
          pC: function () {
            return S;
          },
          yV: function () {
            return F;
          },
        });
        var i = n(298),
          r = n(90129),
          l = n(52500),
          a = (n(92954), n(71515)),
          c = n(34229),
          s = n(31952),
          o = n(79792),
          u = n(18433),
          d = n(3205),
          h = n(79910),
          m = n(49120),
          p = n(85423),
          f = n(12525),
          g = n(48813),
          x = o.default.isTieyou,
          v = "refund-pop-tab-id",
          Z = [
            "refund-pop-product-intro",
            "refund-pop-luggage-rule",
            "refund-pop-refund-intro",
          ],
          y =
            "https://images3.c-ctrip.com/train/tieyou-mini-img/popup_close.png",
          N = function (e) {
            var t = e.title,
              n = e.content,
              i = e.onClose;
            return (0, g.BX)(a.View, {
              className: "flight-tickets-change-explain",
              children: [
                (0, g.BX)(a.View, {
                  className: "refund-pop-hd flex-center",
                  children: [
                    t,
                    (0, g.tZ)(a.Image, {
                      className: "close-icon",
                      src: y,
                      id: "AADS",
                      onClick: i,
                    }),
                  ],
                }),
                n.map(function (e, t) {
                  return (0,
                  g.BX)(a.View, { className: "refund-box", children: [(0, g.tZ)(a.View, { className: "flt-title", children: (0, g.tZ)(c.ZtRichText, { nodes: e.title, space: "ensp" }) }), (0, g.tZ)(a.View, { className: "txt13", children: (0, g.tZ)(c.ZtRichText, { nodes: e.content, space: "ensp" }) })] }, t);
                }),
              ],
            });
          },
          w = function (e) {
            var t = e.remarkTitle,
              n = e.observeCallback,
              i = e.scrollIntoView,
              r = (0, u.Z)({
                selector: "#".concat(v),
                targetSelector: "#".concat(Z[0]),
                observeCallback: function (e) {
                  n(e, 0);
                },
                callbackDeps: [i],
              });
            return (0, g.tZ)(a.View, {
              className: "refund-box",
              id: Z[0],
              ref: r,
              children: (0, g.tZ)(a.View, {
                className: "introduction",
                children: t.remarkTypeList.map(function (e, t) {
                  return (0, g.BX)(
                    a.View,
                    {
                      className: "intro-item",
                      children: [
                        (0, g.BX)(a.View, {
                          className: "tit flex-align-items-center",
                          children: [
                            (0, g.tZ)(a.Image, {
                              className: "icon",
                              src: e.icon,
                            }),
                            (0, g.tZ)(c.ZtRichText, { nodes: e.title }),
                          ],
                        }),
                        e.contentList.map(function (e) {
                          return (0, g.BX)(g.HY, {
                            children: [
                              "text" === e.type &&
                                (0, g.tZ)(a.View, {
                                  className: "txt",
                                  children: (0, g.tZ)(c.ZtRichText, {
                                    nodes: e.content,
                                  }),
                                }),
                              "navigator" === e.type &&
                                (0, g.tZ)(a.View, {
                                  className: "txt",
                                  children: e.content.map(function (e) {
                                    return (0,
                                    g.BX)(g.HY, { children: ["txt" === e.type && (0, g.tZ)(a.Text, { children: e.val }), "url" === e.type && (0, g.tZ)(a.Navigator, { className: "color-primary", url: e.url, children: e.val })] });
                                  }),
                                }),
                            ],
                          });
                        }),
                      ],
                    },
                    t
                  );
                }),
              }),
            });
          },
          b = {
            tuoyun:
              "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/fuceng/img_tuoyun@3x.png",
            shouti:
              "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/fuceng/img_shouti@3x.png",
            tuoyun_disabled:
              "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/fuceng/img_tuoyun_unable@3x.png",
            shouti_disabled:
              "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/fuceng/img_shouti_unable@3x.png",
          },
          T = function (e) {
            var t = e.length,
              n = e.width,
              i = e.height,
              r = e.type,
              l = void 0 === r ? "shouti" : r,
              c = e.disabled,
              s = void 0 === c || c,
              o = b[l + (s ? "_disabled" : "")];
            return (0, g.BX)(a.View, {
              className: "luggage-image",
              children: [
                (0, g.tZ)(a.Image, { className: "img", src: o }),
                !s &&
                  (0, g.BX)(g.HY, {
                    children: [
                      (0, g.tZ)(a.Text, {
                        className: "dim length",
                        children: t ? "".concat(t, "cm") : "长",
                      }),
                      (0, g.tZ)(a.Text, {
                        className: "dim width",
                        children: n ? "".concat(n, "cm") : "宽",
                      }),
                      (0, g.tZ)(a.Text, {
                        className: "dim height",
                        children: i ? "".concat(i, "cm") : "高",
                      }),
                    ],
                  }),
              ],
            });
          },
          R = function (e) {
            var t,
              n,
              i,
              l = e.L1,
              c = l.id,
              o = l.title,
              u = l.remarkTypeList,
              d = 201 == c ? "tuoyun" : "shouti",
              h = !o,
              m = null == u ? void 0 : u[0].title;
            if (!h && m) {
              var p = m.match(/\d+/g);
              if (3 == p.length) {
                var f = p.sort(function (e, t) {
                    return e - t;
                  }),
                  x = (0, r.Z)(f, 3);
                (n = x[0]), (t = x[1]), (i = x[2]);
              }
            }
            var v = "tuoyun" == d ? "托运行李" : "手提行李",
              Z = [];
            o && Z.push(o), Z.push(m);
            var y = { paddingRight: "40rpx" };
            return (
              h || (y.paddingBottom = "36rpx"),
              "tuoyun" == d && (y.paddingTop = "32rpx"),
              (0, g.BX)(a.View, {
                className: "flex",
                style: y,
                children: [
                  (0, g.tZ)(T, {
                    length: t,
                    width: n,
                    height: i,
                    type: d,
                    disabled: h,
                  }),
                  (0, g.tZ)(a.View, {
                    className: "luggage-desc flex-align-items-center",
                    children: (0, g.BX)(a.View, {
                      children: [
                        (0, g.tZ)(a.View, {
                          className: "luggage-title",
                          children: v,
                        }),
                        h
                          ? (0, g.BX)(a.View, {
                              className: "desc flex-align-items-center",
                              style: { color: "#ff5959" },
                              children: [
                                (0, g.tZ)(a.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/card/xuangou/icon_xuangou_no@3x.png",
                                  className: "no-icon",
                                }),
                                m,
                              ],
                            })
                          : (0, g.tZ)(s.Z, {
                              tipList: Z,
                              className: "flt-refund-pop-tip-list desc",
                            }),
                      ],
                    }),
                  }),
                ],
              })
            );
          },
          V = function (e) {
            return (
              e.title &&
              ((e.remarkTypeList && 0 === e.remarkTypeList.length) ||
                !e.remarkTypeList)
            );
          },
          k = function (e) {
            var t,
              n = e.body,
              i = e.observeCallback,
              r = e.scrollIntoView,
              l = e.dptName,
              s = e.arrName,
              o =
                (null ===
                  (t = n.remarkTypeL1List.filter(function (e) {
                    return V(e);
                  })) || void 0 === t
                  ? void 0
                  : t.length) > 1,
              d = (0, u.Z)({
                selector: "#".concat(v),
                targetSelector: "#".concat(Z[1]),
                observeCallback: function (e) {
                  i(e, 1);
                },
                callbackDeps: [r],
              });
            return (0, g.tZ)(a.View, {
              className: "refund-box",
              id: Z[1],
              ref: d,
              children: (0, g.BX)(a.View, {
                className: "luggage-rule",
                children: [
                  !n.remarkTypeL1List.some(function (e) {
                    return V(e);
                  }) &&
                    (0, g.BX)(a.View, {
                      className: "flt-title",
                      children: ["行李规定: ", l, "-", s],
                    }),
                  n.remarkTypeL1List.map(function (e, t) {
                    var n,
                      i,
                      r,
                      l,
                      s,
                      u,
                      d = V(e),
                      h = 201 == e.id || 202 == e.id,
                      m = 203 == e.id,
                      p =
                        "以航司规则为准" ==
                        (null === (n = e.remarkTypeList) ||
                        void 0 === n ||
                        null === (i = n[0]) ||
                        void 0 === i
                          ? void 0
                          : i.title),
                      f = o && t > 0 ? { marginTop: "52rpx" } : "";
                    return (0,
                    g.BX)(g.HY, { children: [d && (0, g.BX)(a.View, { className: "flt-title", style: f, children: ["行李规定: ", e.title] }), h && (0, g.tZ)(R, { L1: e }), m && (0, g.tZ)(a.View, { className: "intro-banner", children: (0, g.tZ)(c.ZtRichText, { nodes: null === (r = e.remarkTypeList) || void 0 === r || null === (l = r[0]) || void 0 === l ? void 0 : l.title, space: "nbsp" }) }), p && (0, g.tZ)(a.View, { className: "no-luggage-remark-info", children: (0, g.tZ)(c.ZtRichText, { nodes: null === (s = e.remarkTypeList) || void 0 === s || null === (u = s[0]) || void 0 === u ? void 0 : u.title, space: "nbsp" }) })] });
                  }),
                ],
              }),
            });
          },
          I = function (e) {
            var t = e.rule,
              n = e.typeId;
            if (!t) return [];
            var i = t.remarkTypeL1ListBySegment,
              r = t.id,
              l = [];
            return (
              i.forEach(function (e, t) {
                var i = e.find(function (e) {
                  return e.id == n + r;
                });
                if (i) {
                  (300 != r && 400 != r) ||
                    i.remarkTypeList.forEach(function (e) {
                      var t;
                      null != e &&
                        null !== (t = e.title) &&
                        void 0 !== t &&
                        t.startsWith("<s>") &&
                        (e.disabled = !0);
                    });
                  var a = e.find(function (e) {
                    return V(e);
                  });
                  l.push({
                    title: null == a ? void 0 : a.title,
                    rule: i.remarkTypeList,
                    segmentId: t,
                  });
                }
              }),
              l
            );
          },
          B = function (e) {
            var t = e.refundRule,
              n = e.rescheduleRule,
              i = e.transferRule,
              r = e.dptName,
              l = e.arrName,
              a = e.typeId;
            [t, n, i].forEach(function (e) {
              if (e) {
                var t = (function (e) {
                  if (
                    !e.some(function (e) {
                      return V(e);
                    })
                  )
                    return [e];
                  var t = [],
                    n = [];
                  return (
                    e.forEach(function (i, r) {
                      n.push(i),
                        r != e.length - 1
                          ? V(e[r + 1]) && (t.push(n), (n = []))
                          : t.push(n);
                    }),
                    t
                  );
                })(e.remarkTypeL1List);
                e.remarkTypeL1ListBySegment = t;
              }
            });
            var c = I({ rule: t, typeId: a }),
              s = I({ rule: n, typeId: a }),
              o = I({ rule: i, typeId: a }),
              u = "".concat(r, "-").concat(l),
              d = [];
            return (
              c.forEach(function (e) {
                var n = {
                  title: e.title || u,
                  refundRule: {
                    type: "refund",
                    typeTitle: t.title,
                    rule: e.rule,
                  },
                  segmentId: e.segmentId,
                };
                d.push(n);
              }),
              s.forEach(function (e) {
                var t = d.find(function (t) {
                    return t.segmentId == e.segmentId;
                  }),
                  i = { type: "reschedule", typeTitle: n.title, rule: e.rule };
                t
                  ? (t.rescheduleRule = i)
                  : d.push({
                      title: e.title || u,
                      rescheduleRule: i,
                      segmentId: e.segmentId,
                    });
              }),
              o.forEach(function (e) {
                var t = d.find(function (t) {
                    return t.segmentId == e.segmentId;
                  }),
                  n = { type: "transfer", typeTitle: i.title, rule: e.rule };
                t
                  ? (t.transferRule = n)
                  : d.push({
                      title: e.title || u,
                      transferRule: n,
                      segmentId: e.segmentId,
                    });
              }),
              d
            );
          },
          C = {
            paddingLeft: "20rpx",
            paddingRight: "20rpx",
            width: "88rpx",
            fontFamily: "PingFangSC-Medium",
            fontWeight: 500,
          },
          X = {
            title: "签转他航说明",
            content: [
              {
                title: "签转他航是什么意思?",
                content:
                  "签转他航是指改签至不同航空公司航班。\n\n例如您原订的是东方航空公司的航班，如果东方航空和南方航空之前有签转协议，同意两个航空公司的客人进行签转，那您除了可以改期到东方航空的航班以外，还可以选择签转至南方航空的航班。",
              },
              {
                title: "签转和改期有什么区别呢?",
                content:
                  "改期是更改出行日期，但承运的航空公司不变。\n\n签转是指签转到不同航空公司的航班。",
              },
            ],
          },
          L = {
            title: "同舱改期收费说明",
            content: [
              {
                title: "什么是同舱改期?",
                content:
                  "改期分为两种:同舱位更改和升舱。\n\n同舱改期就是相同舱位改期，如您原先预订的是经济舱5折票，同舱改期指的是更改到其他航班的同等折扣经济舱，此时按照同舱改期收费规则计算改期费",
              },
              {
                title: "如果改期时,只剩下更高折扣舱位,怎么收费呢?",
                content:
                  "如果您所改航班的舱位折扣高于原来预订的舱位折扣属于升舱，一般情况下航空公司都会要求补交机票差价。\n\n此时改签需收取:同舱改期费+机票差价。",
              },
              {
                title: "如果改期时,有更低价格航班,能退我钱么?",
                content:
                  "航空公司只允许同舱或升舱改期,改期是无法改到更低价格航班的。\n\n如果改期时,您发现有更低价格航班,可计算一下,退票重订一张是否比改期更划算。",
              },
            ],
          },
          _ = function (e) {
            var t = e.title,
              n = e.content,
              i = e.height;
            (0, m.getCurrentPage)().showCommonDrawer({
              hideTitle: !0,
              hideClose: !0,
              height: i,
              content: function (e) {
                var i = e.onClose;
                return (0, g.tZ)(N, { title: t, content: n, onClose: i });
              },
              className: "flt-refund-intro-pop",
            });
          },
          z = function (e) {
            var t,
              n,
              r,
              l,
              s,
              o,
              u,
              d = e.rules,
              h = e.tabIndex,
              m = e.height,
              f = [];
            d.refundRule && f.push(d.refundRule),
              d.rescheduleRule && f.push(d.rescheduleRule),
              d.transferRule && 2 == h && f.push(d.transferRule);
            return (0, g.BX)(p.iA, {
              className: "refund-table",
              children: [
                (0, g.tZ)(p.Fv, { className: "header", children: d.title }),
                (0, g.tZ)(p.p3, {
                  children: f.map(function (e, t) {
                    var n = 2 != h ? (0, i.Z)({}, C) : "";
                    "reschedule" == e.type && n && (n.textAlign = "left");
                    var r = 1 == e.rule.length;
                    return (0, g.BX)(
                      p.Tr,
                      {
                        children: [
                          (0, g.BX)(p.Td, {
                            className: "hd",
                            style: n,
                            id: "AADT",
                            onClick: function () {
                              return (function (e) {
                                if ("refund" != e) {
                                  var t = "reschedule" == e ? L : X;
                                  _(
                                    (0, i.Z)((0, i.Z)({}, t), {}, { height: m })
                                  );
                                }
                              })(e.type);
                            },
                            children: [
                              e.typeTitle,
                              ["reschedule", "transfer"].includes(e.type) &&
                                (0, g.tZ)(a.Text, {
                                  className: "ifont-detail iconfont",
                                }),
                            ],
                          }),
                          r
                            ? (0, g.tZ)(p.Td, {
                                className: "first",
                                children: (0, g.tZ)(c.ZtRichText, {
                                  nodes: e.rule[0].title,
                                  space: "nbsp",
                                }),
                              })
                            : (0, g.tZ)(p.p3, {
                                children: e.rule.map(function (e, t) {
                                  return (0,
                                  g.BX)(p.Tr, { style: e.disabled ? { color: "#ccc" } : "", children: [(0, g.BX)(p.Td, { className: "first ".concat(e.currentInfo ? "current" : ""), style: { width: "320rpx" }, children: [e.currentInfo && (0, g.tZ)(c.ZtRichText, { nodes: e.currentInfo, space: "nbsp", className: "current-info" }), (0, g.tZ)(c.ZtRichText, { nodes: e.title, space: "nbsp" })] }), e.content && (0, g.tZ)(p.Td, { children: (0, g.tZ)(c.ZtRichText, { nodes: e.content, space: "nbsp" }) })] }, t);
                                }),
                              }),
                        ],
                      },
                      t
                    );
                  }),
                }),
                [0, 1].includes(h) &&
                  (null === (t = d.transferRule) ||
                  void 0 === t ||
                  null === (n = t.rule) ||
                  void 0 === n ||
                  null === (r = n[0]) ||
                  void 0 === r
                    ? void 0
                    : r.title) &&
                  (0, g.BX)(p.Fv, {
                    className: "first botm",
                    id: "AADU",
                    onClick: function () {
                      return _((0, i.Z)((0, i.Z)({}, X), {}, { height: m }));
                    },
                    children: [
                      null === (l = d.transferRule) || void 0 === l
                        ? void 0
                        : l.typeTitle,
                      (0, g.tZ)(a.Text, { className: "ifont-detail iconfont" }),
                      " : ",
                      null === (s = d.transferRule) ||
                      void 0 === s ||
                      null === (o = s.rule) ||
                      void 0 === o ||
                      null === (u = o[0]) ||
                      void 0 === u
                        ? void 0
                        : u.title,
                    ],
                  }),
              ],
            });
          },
          S = function (e, t) {
            var n = e.title,
              i = e.body.map(function (e) {
                return { title: e.name, content: e.content };
              });
            _({ title: n, content: i, height: t });
          },
          P = function (e) {
            var t = e.refundRule,
              n = e.observeCallback,
              c = e.scrollIntoView,
              s = e.renderRefundXProducts,
              o = e.height,
              d = (0, l.useRef)(),
              h = (0, l.useState)(0),
              m = (0, r.Z)(h, 2),
              p = m[0],
              x = m[1];
            (0, l.useEffect)(
              function () {
                var e;
                x(0),
                  null == d ||
                    null === (e = d.current) ||
                    void 0 === e ||
                    e.setCurIndex(0);
              },
              [t]
            );
            var y = B((0, i.Z)((0, i.Z)({}, e), {}, { typeId: 1 })),
              N = B((0, i.Z)((0, i.Z)({}, e), {}, { typeId: 2 })),
              w = B((0, i.Z)((0, i.Z)({}, e), {}, { typeId: 3 })),
              b = ["成人"];
            N.length > 0 && b.push("儿童"), w.length > 0 && b.push("婴儿");
            var T = (0, u.Z)({
                selector: "#".concat(v),
                targetSelector: "#".concat(Z[2]),
                observeCallback: function (e) {
                  n(e, 2);
                },
                callbackDeps: [c],
              }),
              R = 0 == p ? y : 1 == p ? N : w,
              V = b.length > 1;
            return (0, g.BX)(a.View, {
              className: "refund-box",
              id: Z[2],
              ref: T,
              children: [
                (0, g.BX)(a.View, {
                  className: "flex-align-items-center",
                  children: [
                    (0, g.tZ)(a.View, {
                      className: "flt-title flex-1",
                      style: V ? { marginBottom: 0 } : "",
                      children: "退改签说明",
                    }),
                    V &&
                      (0, g.tZ)(f.Z, {
                        className: "refund-rule-tab",
                        tabList: b,
                        onChange: function (e) {
                          x(e);
                        },
                        ref: d,
                      }),
                  ],
                }),
                R.map(function (e, t) {
                  return (0, g.tZ)(z, { rules: e, tabIndex: p, height: o }, t);
                }),
                null == s ? void 0 : s(),
              ],
            });
          },
          A = function (e) {
            var t = e.tail,
              n = e.tailIndex;
            return (0, g.BX)(
              a.View,
              {
                className: "refund-box",
                children: [
                  t.title &&
                    (0, g.tZ)(a.View, {
                      className: "flt-title",
                      children: t.title,
                    }),
                  t.contentList.map(function (e) {
                    return (0, g.BX)(g.HY, {
                      children: [
                        "text" === e.type &&
                          (0, g.tZ)(a.View, {
                            className: "txt",
                            children: e.content,
                          }),
                        "navigator" === e.type &&
                          (0, g.tZ)(a.View, {
                            className: "txt",
                            children: e.content.map(function (e) {
                              return (0,
                              g.BX)(g.HY, { children: ["txt" === e.type && (0, g.tZ)(a.Text, { children: e.val }), "url" === e.type && (0, g.tZ)(a.Navigator, { className: "color-primary", url: e.url, children: e.val })] });
                            }),
                          }),
                      ],
                    });
                  }),
                ],
              },
              n
            );
          },
          D = function (e) {
            var t = e.body;
            return null == t
              ? void 0
              : t.map(function (e) {
                  var t,
                    n = e.contentUrl;
                  return (0, g.BX)(
                    a.View,
                    {
                      className: "refund-box remark-extra",
                      children: [
                        (0, g.tZ)(a.View, {
                          className: "flt-title",
                          children: e.title,
                        }),
                        (0, g.tZ)(a.View, {
                          className: "cont-hd",
                          children:
                            e.contentHead &&
                            (0, g.tZ)(c.ZtRichText, { nodes: e.contentHead }),
                        }),
                        (0, g.tZ)(a.View, {
                          className: "flex",
                          style: "flex-wrap: wrap",
                          children:
                            null === (t = e.remarkTypeList) || void 0 === t
                              ? void 0
                              : t.map(function (e) {
                                  var t;
                                  return (0, g.BX)(
                                    a.View,
                                    {
                                      className:
                                        "type-item flex-align-items-center",
                                      onClick: function () {
                                        return (function (e) {
                                          e &&
                                            e.startsWith("http") &&
                                            d.Z.twebview({ data: { url: e } });
                                        })(n);
                                      },
                                      children: [
                                        (0, g.BX)(a.View, {
                                          className: "flex-1",
                                          children: [
                                            (0, g.tZ)(a.View, {
                                              className: "type-cont",
                                              children: e.content,
                                            }),
                                            (0, g.tZ)(a.View, {
                                              className: "type-title",
                                              children:
                                                null == e ||
                                                null === (t = e.title) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.replace(
                                                      /([\u4e00-\u9fa5]*)\uff1a$/,
                                                      "赠$1"
                                                    ),
                                            }),
                                          ],
                                        }),
                                        (0, g.tZ)(a.Text, {
                                          className: "iconfont2 ifont2-arr",
                                        }),
                                      ],
                                    },
                                    e.title
                                  );
                                }),
                        }),
                        e.contentTail &&
                          (0, g.tZ)(a.View, {
                            className: "cont-tail",
                            children: (0, g.tZ)(c.ZtRichText, {
                              nodes: e.contentTail,
                            }),
                          }),
                      ],
                    },
                    e.title
                  );
                });
          },
          E = { borderRadius: "32rpx 32rpx 0 0", overflow: "hidden" },
          H = function (e) {
            var t = e.initialView,
              n = e.rescheduleRefundRemark,
              i = e.rescheduleRefundRemarkType,
              s = e.isShow,
              o = e.handleClose,
              u = e.dptName,
              d = e.arrName,
              m = e.hasRefundXProducts,
              p = e.renderRefundXProducts,
              N = e.hasBottom,
              b = e.renderBottom,
              T = e.initTabIndex,
              R = e.height,
              V = (0, l.useState)(""),
              I = (0, r.Z)(V, 2),
              B = I[0],
              C = I[1],
              X = (0, l.useRef)();
            (0, l.useEffect)(
              function () {
                s && h.Z.sendUbtTrace("P0309_SP0001_M0006_exposure");
              },
              [s]
            );
            var L = function (e) {
              console.log("switching tab", e), C(Z[e]);
            };
            if (
              ((0, l.useEffect)(
                function () {
                  T > 0 && (L(T), X.current.setCurIndex(T));
                },
                [T]
              ),
              !n)
            )
              return (0, g.tZ)(a.View, {});
            if ("text" === i)
              return (0, g.tZ)(a.ScrollView, {
                className: "pop-product-info flex-1 " + (x ? "ty" : "zx"),
                scrollY: !0,
                scrollTop: t,
                children: (0, g.tZ)(c.ZtRichText, { nodes: n }),
              });
            var _ = n.remarkTitle,
              z = n.remarkBody,
              S = n.remarkTail,
              E = n.remarkExtra,
              H = z.find(function (e) {
                return 200 == e.id;
              }),
              Y = z.find(function (e) {
                return 300 == e.id;
              }),
              W = z.find(function (e) {
                return 400 == e.id;
              }),
              F = z.find(function (e) {
                return 500 == e.id;
              }),
              U = function (e, t) {
                B ? C("") : e.intersectionRatio > 0 && X.current.setCurIndex(t);
              },
              J = { paddingBottom: "60rpx" };
            return (
              N &&
                (J.paddingBottom =
                  "calc(120rpx + env(safe-area-inset-bottom))"),
              (0, g.BX)(a.View, {
                style: {
                  background:
                    "url(https://images3.c-ctrip.com/ztrip/zhixingios/list/baby/icon_qinzi_bg@3x.png) no-repeat top left / contain",
                  minHeight: "2rpx",
                },
                className: "flex flex-column flex-1",
                children: [
                  (0, g.BX)(a.View, {
                    className: "refund-pop-hd flex-center",
                    children: [
                      (0, g.tZ)(a.Image, {
                        className: "refund-pop-hd-img",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/fuceng/10/plane_pk@3x.png",
                      }),
                      (0, g.tZ)(a.Image, {
                        className: "close-icon",
                        src: y,
                        id: "AADV",
                        onClick: o,
                      }),
                    ],
                  }),
                  (0, g.BX)(a.View, {
                    style: { position: "relative" },
                    children: [
                      (0, g.tZ)(f.Z, {
                        tabList: ["产品说明", "行李规定", "退改签说明"],
                        onChange: L,
                        id: v,
                        ref: X,
                        className: "refund-pop-tab",
                      }),
                      m &&
                        (0, g.tZ)(a.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/x_ye/fuceng/10/tag_shengji@3x.png",
                          style: {
                            height: "46rpx",
                            width: "110rpx",
                            position: "absolute",
                            top: "-16rpx",
                            right: "16rpx",
                          },
                        }),
                    ],
                  }),
                  (0, g.tZ)(a.ScrollView, {
                    className: "pop-product-info flex-1 " + (x ? "ty" : "zx"),
                    scrollY: !0,
                    scrollTop: t,
                    scrollIntoView: B,
                    scrollWithAnimation: !0,
                    children: (0, g.BX)(a.View, {
                      style: J,
                      children: [
                        (0, g.tZ)(w, {
                          remarkTitle: _,
                          observeCallback: U,
                          scrollIntoView: B,
                        }),
                        (0, g.tZ)(D, { body: E }),
                        (0, g.tZ)(k, {
                          body: H,
                          observeCallback: U,
                          scrollIntoView: B,
                          dptName: u,
                          arrName: d,
                        }),
                        (0, g.tZ)(P, {
                          refundRule: Y,
                          rescheduleRule: W,
                          transferRule: F,
                          observeCallback: U,
                          scrollIntoView: B,
                          dptName: u,
                          arrName: d,
                          renderRefundXProducts: p,
                          height: R,
                        }),
                        S.remarkTypeList.map(function (e, t) {
                          return (0, g.tZ)(A, { tail: e, tailIndex: t }, t);
                        }),
                      ],
                    }),
                  }),
                  N && (null == b ? void 0 : b()),
                ],
              })
            );
          };
        H.defaultProps = { initTabIndex: 0, height: "90vh" };
        var Y = l.default.memo(H),
          W = function (e) {
            var t,
              n,
              i = e.initialView,
              r = e.rescheduleRefundRemark,
              l = e.dptName,
              a = e.arrName,
              c = e.initTabIndex,
              s = e.height;
            null === (t = (0, m.getCurrentPage)()) ||
              void 0 === t ||
              null === (n = t.prerenderCommonDrawer) ||
              void 0 === n ||
              n.call(t, {
                hideTitle: !0,
                hideClose: !0,
                height: s,
                exclusive: !0,
                disableCustomWrapper: !0,
                content: function (e) {
                  var t = e.onClose,
                    n = e.visible;
                  return (0, g.tZ)(Y, {
                    initialView: i,
                    rescheduleRefundRemark: r,
                    isShow: n,
                    handleClose: t,
                    dptName: l,
                    arrName: a,
                    initTabIndex: c,
                    height: s,
                  });
                },
                className: "flight-tickets-change-explain",
              });
          },
          F = function (e) {
            var t = e.initialView,
              n = e.rescheduleRefundRemark,
              i = e.dptName,
              r = e.arrName,
              l = e.height,
              a = e.hasBottom,
              c = e.hasRefundXProducts,
              s = e.renderBottom,
              o = e.renderRefundXProducts;
            (0, m.getCurrentPage)().showCommonDrawer({
              hideTitle: !0,
              hideClose: !0,
              height: l,
              exclusive: !0,
              disableCustomWrapper: !0,
              content: function (e) {
                var u = e.onClose,
                  d = e.visible;
                return (0, g.tZ)(Y, {
                  isShow: d,
                  handleClose: u,
                  initialView: t,
                  rescheduleRefundRemark: n,
                  dptName: i,
                  arrName: r,
                  height: l,
                  hasBottom: a,
                  hasRefundXProducts: c,
                  renderBottom: s,
                  renderRefundXProducts: o,
                });
              },
              className: "flight-tickets-change-explain",
            });
          };
        t.ZP = l.default.memo(function (e) {
          var t = e.initialView,
            n = e.rescheduleRefundRemark,
            i = e.rescheduleRefundRemarkType,
            r = e.isShow,
            l = e.handleClose,
            a = e.dptName,
            s = e.arrName,
            o = e.initTabIndex,
            u = e.height;
          return (0,
          g.tZ)(c.ZtDrawer, { show: r, isShowClose: !1, onWrapClose: l, drawerStyle: E, maxHeight: "90vh", height: u, className: "flight-tickets-change-explain", children: (0, g.tZ)(Y, { initialView: t, rescheduleRefundRemark: n, rescheduleRefundRemarkType: i, isShow: r, handleClose: l, dptName: a, arrName: s, initTabIndex: o, height: u }) });
        });
      },
    },
  ]);
})();
