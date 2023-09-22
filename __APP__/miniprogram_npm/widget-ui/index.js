"use strict";
"use strict";
var t,
  e,
  o = require("../../@babel/runtime/helpers/typeof");
module.exports =
  ((t = {}),
  (e = function (e, r) {
    if (!t[e]) return require(r);
    if (!t[e].status) {
      var i = t[e].m;
      i._exports = i._tempexports;
      var l = Object.getOwnPropertyDescriptor(i, "exports");
      l &&
        l.configurable &&
        Object.defineProperty(i, "exports", {
          set: function (t) {
            "object" === o(t) &&
              t !== i._exports &&
              ((i._exports.__proto__ = t.__proto__),
              Object.keys(t).forEach(function (e) {
                i._exports[e] = t[e];
              })),
              (i._tempexports = t);
          },
          get: function () {
            return i._tempexports;
          },
        }),
        (t[e].status = 1),
        t[e].func(t[e].req, i, i.exports);
    }
    return t[e].m.exports;
  }),
  (function (e, o, r) {
    t[e] = { status: 0, func: o, req: r, m: { exports: {}, _tempexports: {} } };
  })(
    1628084472454,
    function (t, e, r) {
      !(function (t, i) {
        if ("object" == o(r) && "object" == o(e)) e.exports = i();
        else if ("function" == typeof define && define.amd) define([], i);
        else {
          var l = i();
          for (var n in l) ("object" == o(r) ? r : t)[n] = l[n];
        }
      })(this, function () {
        return (function (t) {
          var e = {};
          function r(o) {
            if (e[o]) return e[o].exports;
            var i = (e[o] = { i: o, l: !1, exports: {} });
            return t[o].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = t),
            (r.c = e),
            (r.d = function (t, e, o) {
              r.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: o });
            }),
            (r.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (r.t = function (t, e) {
              if ((1 & e && (t = r(t)), 8 & e)) return t;
              if (4 & e && "object" == o(t) && t && t.__esModule) return t;
              var i = Object.create(null);
              if (
                (r.r(i),
                Object.defineProperty(i, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && "string" != typeof t)
              )
                for (var l in t)
                  r.d(
                    i,
                    l,
                    function (e) {
                      return t[e];
                    }.bind(null, l)
                  );
              return i;
            }),
            (r.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return r.d(e, "a", e), e;
            }),
            (r.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = ""),
            r((r.s = 0))
          );
        })([
          function (t, e, o) {
            var r =
              (this && this.__importDefault) ||
              function (t) {
                return t && t.__esModule ? t : { default: t };
              };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = r(o(1)),
              l = o(2),
              n = 0,
              a = (function () {
                function t(e) {
                  var o = this;
                  void 0 === e && (e = {}),
                    (this.parent = null),
                    (this.id = t.uuid()),
                    (this.style = {}),
                    (this.computedStyle = {}),
                    (this.lastComputedStyle = {}),
                    (this.children = {}),
                    (this.layoutBox = { left: 0, top: 0, width: 0, height: 0 }),
                    (e = Object.assign(l.getDefaultStyle(), e)),
                    (this.computedStyle = Object.assign(
                      l.getDefaultStyle(),
                      e
                    )),
                    (this.lastComputedStyle = Object.assign(
                      l.getDefaultStyle(),
                      e
                    )),
                    Object.keys(e).forEach(function (t) {
                      Object.defineProperty(o.style, t, {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                          return e[t];
                        },
                        set: function (r) {
                          r !== e[t] &&
                            void 0 !== r &&
                            ((o.lastComputedStyle = o.computedStyle[t]),
                            (e[t] = r),
                            (o.computedStyle[t] = r),
                            l.scalableStyles.includes(t) &&
                              o.style.scale &&
                              (o.computedStyle[t] = r * o.style.scale),
                            "scale" === t &&
                              l.scalableStyles.forEach(function (t) {
                                e[t] && (o.computedStyle[t] = e[t] * r);
                              }),
                            "hidden" === t &&
                              (r
                                ? l.layoutAffectedStyles.forEach(function (t) {
                                    o.computedStyle[t] = 0;
                                  })
                                : l.layoutAffectedStyles.forEach(function (t) {
                                    o.computedStyle[t] = o.lastComputedStyle[t];
                                  })));
                        },
                      });
                    }),
                    this.style.scale &&
                      l.scalableStyles.forEach(function (t) {
                        if (o.style[t]) {
                          var e = o.style[t] * o.style.scale;
                          o.computedStyle[t] = e;
                        }
                      }),
                    e.hidden &&
                      l.layoutAffectedStyles.forEach(function (t) {
                        o.computedStyle[t] = 0;
                      });
                }
                return (
                  (t.uuid = function () {
                    return n++;
                  }),
                  (t.prototype.getAbsolutePosition = function (t) {
                    if (!t) return this.getAbsolutePosition(this);
                    if (!t.parent) return { left: 0, top: 0 };
                    var e = this.getAbsolutePosition(t.parent),
                      o = e.left,
                      r = e.top;
                    return {
                      left: o + t.layoutBox.left,
                      top: r + t.layoutBox.top,
                    };
                  }),
                  (t.prototype.add = function (t) {
                    (t.parent = this), (this.children[t.id] = t);
                  }),
                  (t.prototype.remove = function (t) {
                    var e = this;
                    t
                      ? this.children[t.id] &&
                        (t.remove(), delete this.children[t.id])
                      : Object.keys(this.children).forEach(function (t) {
                          e.children[t].remove(), delete e.children[t];
                        });
                  }),
                  (t.prototype.getNodeTree = function () {
                    var t = this;
                    return {
                      id: this.id,
                      style: this.computedStyle,
                      children: Object.keys(this.children).map(function (e) {
                        return t.children[e].getNodeTree();
                      }),
                    };
                  }),
                  (t.prototype.applyLayout = function (t) {
                    var e = this;
                    ["left", "top", "width", "height"].forEach(function (o) {
                      t.layout &&
                        "number" == typeof t.layout[o] &&
                        ((e.layoutBox[o] = t.layout[o]),
                        !e.parent ||
                          ("left" !== o && "top" !== o) ||
                          (e.layoutBox[o] += e.parent.layoutBox[o]));
                    }),
                      t.children.forEach(function (t) {
                        e.children[t.id].applyLayout(t);
                      });
                  }),
                  (t.prototype.layout = function () {
                    var t = this.getNodeTree();
                    i.default(t), this.applyLayout(t);
                  }),
                  t
                );
              })();
            e.default = a;
          },
          function (t, e, o) {
            o.r(e);
            var r = (function () {
              var t,
                e = "inherit",
                o = "row",
                r = "row-reverse",
                i = "column",
                l = "column-reverse",
                n = "flex-start",
                a = "center",
                u = "flex-start",
                d = "center",
                s = "flex-end",
                y = "stretch",
                c = "relative",
                f = "absolute",
                h = {
                  row: "left",
                  "row-reverse": "right",
                  column: "top",
                  "column-reverse": "bottom",
                },
                p = {
                  row: "right",
                  "row-reverse": "left",
                  column: "bottom",
                  "column-reverse": "top",
                },
                g = {
                  row: "left",
                  "row-reverse": "right",
                  column: "top",
                  "column-reverse": "bottom",
                },
                v = {
                  row: "width",
                  "row-reverse": "width",
                  column: "height",
                  "column-reverse": "height",
                };
              function m(t) {
                return void 0 === t;
              }
              function b(t) {
                return t === o || t === r;
              }
              function x(t, e) {
                if (void 0 !== t.style.marginStart && b(e))
                  return t.style.marginStart;
                var o = null;
                switch (e) {
                  case "row":
                    o = t.style.marginLeft;
                    break;
                  case "row-reverse":
                    o = t.style.marginRight;
                    break;
                  case "column":
                    o = t.style.marginTop;
                    break;
                  case "column-reverse":
                    o = t.style.marginBottom;
                }
                return void 0 !== o
                  ? o
                  : void 0 !== t.style.margin
                  ? t.style.margin
                  : 0;
              }
              function w(t, e) {
                if (void 0 !== t.style.marginEnd && b(e))
                  return t.style.marginEnd;
                var o = null;
                switch (e) {
                  case "row":
                    o = t.style.marginRight;
                    break;
                  case "row-reverse":
                    o = t.style.marginLeft;
                    break;
                  case "column":
                    o = t.style.marginBottom;
                    break;
                  case "column-reverse":
                    o = t.style.marginTop;
                }
                return null != o
                  ? o
                  : void 0 !== t.style.margin
                  ? t.style.margin
                  : 0;
              }
              function S(t, e) {
                if (
                  void 0 !== t.style.borderStartWidth &&
                  t.style.borderStartWidth >= 0 &&
                  b(e)
                )
                  return t.style.borderStartWidth;
                var o = null;
                switch (e) {
                  case "row":
                    o = t.style.borderLeftWidth;
                    break;
                  case "row-reverse":
                    o = t.style.borderRightWidth;
                    break;
                  case "column":
                    o = t.style.borderTopWidth;
                    break;
                  case "column-reverse":
                    o = t.style.borderBottomWidth;
                }
                return null != o && o >= 0
                  ? o
                  : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0
                  ? t.style.borderWidth
                  : 0;
              }
              function W(t, e) {
                if (
                  void 0 !== t.style.borderEndWidth &&
                  t.style.borderEndWidth >= 0 &&
                  b(e)
                )
                  return t.style.borderEndWidth;
                var o = null;
                switch (e) {
                  case "row":
                    o = t.style.borderRightWidth;
                    break;
                  case "row-reverse":
                    o = t.style.borderLeftWidth;
                    break;
                  case "column":
                    o = t.style.borderBottomWidth;
                    break;
                  case "column-reverse":
                    o = t.style.borderTopWidth;
                }
                return null != o && o >= 0
                  ? o
                  : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0
                  ? t.style.borderWidth
                  : 0;
              }
              function L(t, e) {
                return (
                  (function (t, e) {
                    if (
                      void 0 !== t.style.paddingStart &&
                      t.style.paddingStart >= 0 &&
                      b(e)
                    )
                      return t.style.paddingStart;
                    var o = null;
                    switch (e) {
                      case "row":
                        o = t.style.paddingLeft;
                        break;
                      case "row-reverse":
                        o = t.style.paddingRight;
                        break;
                      case "column":
                        o = t.style.paddingTop;
                        break;
                      case "column-reverse":
                        o = t.style.paddingBottom;
                    }
                    return null != o && o >= 0
                      ? o
                      : void 0 !== t.style.padding && t.style.padding >= 0
                      ? t.style.padding
                      : 0;
                  })(t, e) + S(t, e)
                );
              }
              function _(t, e) {
                return (
                  (function (t, e) {
                    if (
                      void 0 !== t.style.paddingEnd &&
                      t.style.paddingEnd >= 0 &&
                      b(e)
                    )
                      return t.style.paddingEnd;
                    var o = null;
                    switch (e) {
                      case "row":
                        o = t.style.paddingRight;
                        break;
                      case "row-reverse":
                        o = t.style.paddingLeft;
                        break;
                      case "column":
                        o = t.style.paddingBottom;
                        break;
                      case "column-reverse":
                        o = t.style.paddingTop;
                    }
                    return null != o && o >= 0
                      ? o
                      : void 0 !== t.style.padding && t.style.padding >= 0
                      ? t.style.padding
                      : 0;
                  })(t, e) + W(t, e)
                );
              }
              function j(t, e) {
                return S(t, e) + W(t, e);
              }
              function k(t, e) {
                return x(t, e) + w(t, e);
              }
              function B(t, e) {
                return L(t, e) + _(t, e);
              }
              function E(t, e) {
                return e.style.alignSelf
                  ? e.style.alignSelf
                  : t.style.alignItems
                  ? t.style.alignItems
                  : "stretch";
              }
              function O(t, e) {
                if ("rtl" === e) {
                  if (t === o) return r;
                  if (t === r) return o;
                }
                return t;
              }
              function C(t) {
                return t.style.position ? t.style.position : "relative";
              }
              function T(t) {
                return C(t) === c && t.style.flex > 0;
              }
              function P(t, e) {
                return t.layout[v[e]] + k(t, e);
              }
              function R(t, e) {
                return void 0 !== t.style[v[e]] && t.style[v[e]] >= 0;
              }
              function A(t, e) {
                return void 0 !== t.style[e];
              }
              function D(t, e) {
                return void 0 !== t.style[e] ? t.style[e] : 0;
              }
              function H(t, e, o) {
                var r = {
                    row: t.style.minWidth,
                    "row-reverse": t.style.minWidth,
                    column: t.style.minHeight,
                    "column-reverse": t.style.minHeight,
                  }[e],
                  i = {
                    row: t.style.maxWidth,
                    "row-reverse": t.style.maxWidth,
                    column: t.style.maxHeight,
                    "column-reverse": t.style.maxHeight,
                  }[e],
                  l = o;
                return (
                  void 0 !== i && i >= 0 && l > i && (l = i),
                  void 0 !== r && r >= 0 && l < r && (l = r),
                  l
                );
              }
              function M(t, e) {
                return t > e ? t : e;
              }
              function q(t, e) {
                void 0 === t.layout[v[e]] &&
                  R(t, e) &&
                  (t.layout[v[e]] = M(H(t, e, t.style[v[e]]), B(t, e)));
              }
              function I(t, e, o) {
                e.layout[p[o]] =
                  t.layout[v[o]] - e.layout[v[o]] - e.layout[g[o]];
              }
              function N(t, e) {
                return void 0 !== t.style[h[e]] ? D(t, h[e]) : -D(t, p[e]);
              }
              function F(W, F, U) {
                var G = (function (t, o) {
                    var r;
                    return (
                      (r = t.style.direction ? t.style.direction : e) === e &&
                        (r = void 0 === o ? "ltr" : o),
                      r
                    );
                  })(W, U),
                  J = O(
                    (function (t) {
                      return t.style.flexDirection ? t.style.flexDirection : i;
                    })(W),
                    G
                  ),
                  K = (function (t, e) {
                    return (function (t) {
                      return t === i || t === l;
                    })(t)
                      ? O(o, e)
                      : i;
                  })(J, G),
                  Q = O(o, G);
                q(W, J),
                  q(W, K),
                  (W.layout.direction = G),
                  (W.layout[h[J]] += x(W, J) + N(W, J)),
                  (W.layout[p[J]] += w(W, J) + N(W, J)),
                  (W.layout[h[K]] += x(W, K) + N(W, K)),
                  (W.layout[p[K]] += w(W, K) + N(W, K));
                var V = W.children.length,
                  X = B(W, Q);
                if (
                  (function (t) {
                    return void 0 !== t.style.measure;
                  })(W)
                ) {
                  var Y = !m(W.layout[v[Q]]),
                    Z = t;
                  (Z = R(W, Q)
                    ? W.style.width
                    : Y
                    ? W.layout[v[Q]]
                    : F - k(W, Q)),
                    (Z -= X);
                  var $ = !R(W, Q) && !Y,
                    tt = !R(W, i) && m(W.layout[v[i]]);
                  if ($ || tt) {
                    var et = W.style.measure(Z);
                    $ && (W.layout.width = et.width + X),
                      tt && (W.layout.height = et.height + B(W, i));
                  }
                  if (0 === V) return;
                }
                var ot,
                  rt,
                  it,
                  lt,
                  nt = (function (t) {
                    return "wrap" === t.style.flexWrap;
                  })(W),
                  at = (function (t) {
                    return t.style.justifyContent
                      ? t.style.justifyContent
                      : "flex-start";
                  })(W),
                  ut = L(W, J),
                  dt = L(W, K),
                  st = B(W, J),
                  yt = B(W, K),
                  ct = !m(W.layout[v[J]]),
                  ft = !m(W.layout[v[K]]),
                  ht = b(J),
                  pt = null,
                  gt = null,
                  vt = t;
                ct && (vt = W.layout[v[J]] - st);
                for (
                  var mt = 0, bt = 0, xt = 0, wt = 0, St = 0, Wt = 0;
                  bt < V;

                ) {
                  var Lt,
                    _t = 0,
                    jt = 0,
                    kt = 0,
                    Bt = 0,
                    Et = (ct && at === n) || (!ct && at !== a),
                    Ot = Et ? V : mt,
                    Ct = !0,
                    Tt = V,
                    Pt = null,
                    Rt = null,
                    At = ut,
                    Dt = 0;
                  for (ot = mt; ot < V; ++ot) {
                    if (
                      (((it = W.children[ot]).lineIndex = Wt),
                      (it.nextAbsoluteChild = null),
                      (it.nextFlexChild = null),
                      (Gt = E(W, it)) === y && C(it) === c && ft && !R(it, K))
                    )
                      it.layout[v[K]] = M(
                        H(it, K, W.layout[v[K]] - yt - k(it, K)),
                        B(it, K)
                      );
                    else if (C(it) === f)
                      for (
                        null === pt && (pt = it),
                          null !== gt && (gt.nextAbsoluteChild = it),
                          gt = it,
                          rt = 0;
                        rt < 2;
                        rt++
                      )
                        (lt = 0 !== rt ? o : i),
                          !m(W.layout[v[lt]]) &&
                            !R(it, lt) &&
                            A(it, h[lt]) &&
                            A(it, p[lt]) &&
                            (it.layout[v[lt]] = M(
                              H(
                                it,
                                lt,
                                W.layout[v[lt]] -
                                  B(W, lt) -
                                  k(it, lt) -
                                  D(it, h[lt]) -
                                  D(it, p[lt])
                              ),
                              B(it, lt)
                            ));
                    var Ht = 0;
                    if (
                      (ct && T(it)
                        ? (jt++,
                          (kt += it.style.flex),
                          null === Pt && (Pt = it),
                          null !== Rt && (Rt.nextFlexChild = it),
                          (Rt = it),
                          (Ht = B(it, J) + k(it, J)))
                        : ((Lt = t),
                          ht ||
                            (Lt = R(W, Q)
                              ? W.layout[v[Q]] - X
                              : F - k(W, Q) - X),
                          0 === xt && z(it, Lt, G),
                          C(it) === c && (Bt++, (Ht = P(it, J)))),
                      nt && ct && _t + Ht > vt && ot !== mt)
                    ) {
                      Bt--, (xt = 1);
                      break;
                    }
                    Et && (C(it) !== c || T(it)) && ((Et = !1), (Ot = ot)),
                      Ct &&
                        (C(it) !== c ||
                          (Gt !== y && Gt !== u) ||
                          m(it.layout[v[K]])) &&
                        ((Ct = !1), (Tt = ot)),
                      Et &&
                        ((it.layout[g[J]] += At),
                        ct && I(W, it, J),
                        (At += P(it, J)),
                        (Dt = M(Dt, H(it, K, P(it, K))))),
                      Ct && ((it.layout[g[K]] += wt + dt), ft && I(W, it, K)),
                      (xt = 0),
                      (_t += Ht),
                      (bt = ot + 1);
                  }
                  var Mt = 0,
                    qt = 0,
                    It = 0;
                  if (((It = ct ? vt - _t : M(_t, 0) - _t), 0 !== jt)) {
                    var Nt,
                      Ft,
                      zt = It / kt;
                    for (Rt = Pt; null !== Rt; )
                      (Nt = zt * Rt.style.flex + B(Rt, J)) !==
                        (Ft = H(Rt, J, Nt)) &&
                        ((It -= Ft), (kt -= Rt.style.flex)),
                        (Rt = Rt.nextFlexChild);
                    for ((zt = It / kt) < 0 && (zt = 0), Rt = Pt; null !== Rt; )
                      (Rt.layout[v[J]] = H(
                        Rt,
                        J,
                        zt * Rt.style.flex + B(Rt, J)
                      )),
                        (Lt = t),
                        R(W, Q)
                          ? (Lt = W.layout[v[Q]] - X)
                          : ht || (Lt = F - k(W, Q) - X),
                        z(Rt, Lt, G),
                        (it = Rt),
                        (Rt = Rt.nextFlexChild),
                        (it.nextFlexChild = null);
                  } else
                    at !== n &&
                      (at === a
                        ? (Mt = It / 2)
                        : "flex-end" === at
                        ? (Mt = It)
                        : "space-between" === at
                        ? ((It = M(It, 0)),
                          (qt = jt + Bt - 1 != 0 ? It / (jt + Bt - 1) : 0))
                        : "space-around" === at &&
                          (Mt = (qt = It / (jt + Bt)) / 2));
                  for (At += Mt, ot = Ot; ot < bt; ++ot)
                    C((it = W.children[ot])) === f && A(it, h[J])
                      ? (it.layout[g[J]] = D(it, h[J]) + S(W, J) + x(it, J))
                      : ((it.layout[g[J]] += At),
                        ct && I(W, it, J),
                        C(it) === c &&
                          ((At += qt + P(it, J)),
                          (Dt = M(Dt, H(it, K, P(it, K))))));
                  var Ut = W.layout[v[K]];
                  for (
                    ft || (Ut = M(H(W, K, Dt + yt), yt)), ot = Tt;
                    ot < bt;
                    ++ot
                  )
                    if (C((it = W.children[ot])) === f && A(it, h[K]))
                      it.layout[g[K]] = D(it, h[K]) + S(W, K) + x(it, K);
                    else {
                      var Gt,
                        Jt = dt;
                      if (C(it) === c)
                        if ((Gt = E(W, it)) === y)
                          m(it.layout[v[K]]) &&
                            (it.layout[v[K]] = M(
                              H(it, K, Ut - yt - k(it, K)),
                              B(it, K)
                            ));
                        else if (Gt !== u) {
                          var Kt = Ut - yt - P(it, K);
                          Jt += Gt === d ? Kt / 2 : Kt;
                        }
                      (it.layout[g[K]] += wt + Jt), ft && I(W, it, K);
                    }
                  (wt += Dt), (St = M(St, At)), (Wt += 1), (mt = bt);
                }
                if (Wt > 1 && ft) {
                  var Qt = W.layout[v[K]] - yt,
                    Vt = Qt - wt,
                    Xt = 0,
                    Yt = dt,
                    Zt = (function (t) {
                      return t.style.alignContent
                        ? t.style.alignContent
                        : "flex-start";
                    })(W);
                  Zt === s
                    ? (Yt += Vt)
                    : Zt === d
                    ? (Yt += Vt / 2)
                    : Zt === y && Qt > wt && (Xt = Vt / Wt);
                  var $t = 0;
                  for (ot = 0; ot < Wt; ++ot) {
                    var te = $t,
                      ee = 0;
                    for (rt = te; rt < V; ++rt)
                      if (C((it = W.children[rt])) === c) {
                        if (it.lineIndex !== ot) break;
                        m(it.layout[v[K]]) ||
                          (ee = M(ee, it.layout[v[K]] + k(it, K)));
                      }
                    for ($t = rt, ee += Xt, rt = te; rt < $t; ++rt)
                      if (C((it = W.children[rt])) === c) {
                        var oe = E(W, it);
                        if (oe === u) it.layout[g[K]] = Yt + x(it, K);
                        else if (oe === s)
                          it.layout[g[K]] =
                            Yt + ee - w(it, K) - it.layout[v[K]];
                        else if (oe === d) {
                          var re = it.layout[v[K]];
                          it.layout[g[K]] = Yt + (ee - re) / 2;
                        } else oe === y && (it.layout[g[K]] = Yt + x(it, K));
                      }
                    Yt += ee;
                  }
                }
                var ie = !1,
                  le = !1;
                if (
                  (ct ||
                    ((W.layout[v[J]] = M(H(W, J, St + _(W, J)), st)),
                    (J !== r && J !== l) || (ie = !0)),
                  ft ||
                    ((W.layout[v[K]] = M(H(W, K, wt + yt), yt)),
                    (K !== r && K !== l) || (le = !0)),
                  ie || le)
                )
                  for (ot = 0; ot < V; ++ot)
                    (it = W.children[ot]), ie && I(W, it, J), le && I(W, it, K);
                for (gt = pt; null !== gt; ) {
                  for (rt = 0; rt < 2; rt++)
                    (lt = 0 !== rt ? o : i),
                      !m(W.layout[v[lt]]) &&
                        !R(gt, lt) &&
                        A(gt, h[lt]) &&
                        A(gt, p[lt]) &&
                        (gt.layout[v[lt]] = M(
                          H(
                            gt,
                            lt,
                            W.layout[v[lt]] -
                              j(W, lt) -
                              k(gt, lt) -
                              D(gt, h[lt]) -
                              D(gt, p[lt])
                          ),
                          B(gt, lt)
                        )),
                      A(gt, p[lt]) &&
                        !A(gt, h[lt]) &&
                        (gt.layout[h[lt]] =
                          W.layout[v[lt]] - gt.layout[v[lt]] - D(gt, p[lt]));
                  (it = gt),
                    (gt = gt.nextAbsoluteChild),
                    (it.nextAbsoluteChild = null);
                }
              }
              function z(t, e, o) {
                t.shouldUpdate = !0;
                var r = t.style.direction || "ltr";
                !t.isDirty &&
                t.lastLayout &&
                t.lastLayout.requestedHeight === t.layout.height &&
                t.lastLayout.requestedWidth === t.layout.width &&
                t.lastLayout.parentMaxWidth === e &&
                t.lastLayout.direction === r
                  ? ((t.layout.width = t.lastLayout.width),
                    (t.layout.height = t.lastLayout.height),
                    (t.layout.top = t.lastLayout.top),
                    (t.layout.left = t.lastLayout.left))
                  : (t.lastLayout || (t.lastLayout = {}),
                    (t.lastLayout.requestedWidth = t.layout.width),
                    (t.lastLayout.requestedHeight = t.layout.height),
                    (t.lastLayout.parentMaxWidth = e),
                    (t.lastLayout.direction = r),
                    t.children.forEach(function (t) {
                      (t.layout.width = void 0),
                        (t.layout.height = void 0),
                        (t.layout.top = 0),
                        (t.layout.left = 0);
                    }),
                    F(t, e, o),
                    (t.lastLayout.width = t.layout.width),
                    (t.lastLayout.height = t.layout.height),
                    (t.lastLayout.top = t.layout.top),
                    (t.lastLayout.left = t.layout.left));
              }
              return {
                layoutNodeImpl: F,
                computeLayout: z,
                fillNodes: function t(e) {
                  return (
                    (e.layout && !e.isDirty) ||
                      (e.layout = {
                        width: void 0,
                        height: void 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }),
                    e.style || (e.style = {}),
                    e.children || (e.children = []),
                    e.children.forEach(t),
                    e
                  );
                },
              };
            })();
            e.default = function (t) {
              r.fillNodes(t), r.computeLayout(t);
            };
          },
          function (t, e, o) {
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.textStyles = [
                "color",
                "fontSize",
                "textAlign",
                "fontWeight",
                "lineHeight",
                "lineBreak",
              ]),
              (e.scalableStyles = [
                "left",
                "top",
                "right",
                "bottom",
                "width",
                "height",
                "margin",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "padding",
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "borderWidth",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth",
              ]),
              (e.layoutAffectedStyles = [
                "margin",
                "marginTop",
                "marginBottom",
                "marginLeft",
                "marginRight",
                "padding",
                "paddingTop",
                "paddingBottom",
                "paddingLeft",
                "paddingRight",
                "width",
                "height",
              ]),
              (e.getDefaultStyle = function () {
                return {
                  left: void 0,
                  top: void 0,
                  right: void 0,
                  bottom: void 0,
                  width: void 0,
                  height: void 0,
                  maxWidth: void 0,
                  maxHeight: void 0,
                  minWidth: void 0,
                  minHeight: void 0,
                  margin: void 0,
                  marginLeft: void 0,
                  marginRight: void 0,
                  marginTop: void 0,
                  marginBottom: void 0,
                  padding: void 0,
                  paddingLeft: void 0,
                  paddingRight: void 0,
                  paddingTop: void 0,
                  paddingBottom: void 0,
                  borderWidth: void 0,
                  flexDirection: void 0,
                  justifyContent: void 0,
                  alignItems: void 0,
                  alignSelf: void 0,
                  flex: void 0,
                  flexWrap: void 0,
                  position: void 0,
                  hidden: !1,
                  scale: 1,
                };
              });
          },
        ]).default;
      });
    },
    function (t) {
      return e({}[t], t);
    }
  ),
  e(1628084472454));
