"use strict";
"use strict";
var e = require("../../../@babel/runtime/helpers/interopRequireDefault");
require("../../../@babel/runtime/helpers/Objectvalues");
var t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = e(require("../../../@babel/runtime/regenerator")),
  a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../@babel/runtime/helpers/createClass"),
  o = (function () {
    function e(t, r) {
      var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      i(this, e),
        (this.ctx = t),
        (this.canvas = r || null),
        (this.use2dCanvas = a);
    }
    var o, l;
    return (
      n(e, [
        {
          key: "roundRect",
          value: function (e, t, r, a, i) {
            var n =
                !(arguments.length > 5 && void 0 !== arguments[5]) ||
                arguments[5],
              o =
                arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            if (!(i < 0)) {
              var l = this.ctx;
              l.beginPath(),
                l.arc(e + i, t + i, i, Math.PI, (3 * Math.PI) / 2),
                l.arc(e + r - i, t + i, i, (3 * Math.PI) / 2, 0),
                l.arc(e + r - i, t + a - i, i, 0, Math.PI / 2),
                l.arc(e + i, t + a - i, i, Math.PI / 2, Math.PI),
                l.lineTo(e, t + i),
                o && l.stroke(),
                n && l.fill();
            }
          },
        },
        {
          key: "drawView",
          value: function (e, t) {
            var r = this.ctx,
              a = e.left,
              i = e.top,
              n = e.width,
              o = e.height,
              l = t.borderRadius,
              s = void 0 === l ? 0 : l,
              c = t.borderWidth,
              u = void 0 === c ? 0 : c,
              d = t.borderColor,
              h = t.color,
              f = void 0 === h ? "#000" : h,
              v = t.backgroundColor,
              b = void 0 === v ? "transparent" : v;
            r.save(),
              u > 0 && ((r.fillStyle = d || f), this.roundRect(a, i, n, o, s)),
              (r.fillStyle = b);
            var p = n - 2 * u,
              w = o - 2 * u,
              x = s - u >= 0 ? s - u : 0;
            this.roundRect(a + u, i + u, p, w, x), r.restore();
          },
        },
        {
          key: "drawImage",
          value:
            ((l = a(
              r.default.mark(function e(t, a, i) {
                var n = this;
                return r.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          new Promise(function (e, r) {
                            var o = n.ctx,
                              l = n.canvas,
                              s = i.borderRadius,
                              c = void 0 === s ? 0 : s,
                              u = a.left,
                              d = a.top,
                              h = a.width,
                              f = a.height;
                            o.save(),
                              n.roundRect(u, d, h, f, c, !1, !1),
                              o.clip();
                            var v = function (t) {
                                if (n.use2dCanvas) {
                                  var a = l.createImage();
                                  (a.onload = function () {
                                    o.drawImage(a, u, d, h, f),
                                      o.restore(),
                                      e();
                                  }),
                                    (a.onerror = function () {
                                      r(
                                        new Error(
                                          "createImage fail: ".concat(t)
                                        )
                                      );
                                    }),
                                    (a.src = t);
                                } else
                                  o.drawImage(t, u, d, h, f), o.restore(), e();
                              },
                              b = /^wxfile:\/\//.test(t),
                              p = /^https?:\/\//.test(t);
                            b
                              ? v(t)
                              : p
                              ? wx.downloadFile({
                                  url: t,
                                  success: function (e) {
                                    200 === e.statusCode
                                      ? v(e.tempFilePath)
                                      : r(
                                          new Error(
                                            "downloadFile:fail ".concat(t)
                                          )
                                        );
                                  },
                                  fail: function () {
                                    r(
                                      new Error("downloadFile:fail ".concat(t))
                                    );
                                  },
                                })
                              : r(new Error("image format error: ".concat(t)));
                          })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e, t, r) {
              return l.apply(this, arguments);
            }),
        },
        {
          key: "drawText",
          value: function (e, r, a) {
            var i = this.ctx,
              n = r.left,
              o = r.top,
              l = r.width,
              s = r.height,
              c = a.color,
              u = void 0 === c ? "#000" : c,
              d = a.fontSize,
              h = void 0 === d ? 14 : d,
              f = a.fontWeight,
              v = void 0 === f ? "normal" : f,
              b = a.textAlign,
              p = void 0 === b ? "left" : b,
              w = a.verticalAlign,
              x = void 0 === w ? "top" : w,
              m = a.backgroundColor,
              g = void 0 === m ? "transparent" : m,
              k = a.lineHeight,
              y = void 0 === k ? "1.4em" : k;
            if (
              ("string" == typeof y &&
                (y = Math.ceil(parseFloat(y.replace("em")) * h)),
              e && !(y > s))
            ) {
              switch (
                (i.save(),
                (i.textBaseline = "top"),
                (i.font = "".concat(v, " ").concat(h, "px sans-serif")),
                (i.textAlign = p),
                (i.fillStyle = g),
                this.roundRect(n, o, l, s, 0),
                (i.fillStyle = u),
                p)
              ) {
                case "left":
                  break;
                case "center":
                  n += 0.5 * l;
                  break;
                case "right":
                  n += l;
              }
              var I = i.measureText(e).width,
                M = Math.ceil(I / l) * y,
                C = Math.ceil((s - M) / 2);
              switch ((C < 0 && (C = 0), x)) {
                case "top":
                  break;
                case "middle":
                  o += C;
                  break;
                case "bottom":
                  o += 2 * C;
              }
              var P = Math.ceil((y - h) / 2);
              if (I <= l) i.fillText(e, n, o + P);
              else {
                var T,
                  q = e.split(""),
                  R = o,
                  F = "",
                  S = t(q);
                try {
                  for (S.s(); !(T = S.n()).done; ) {
                    var E = T.value,
                      A = F + E;
                    if (i.measureText(A).width > l) {
                      if (
                        (i.fillText(F, n, o + P), (F = E), (o += y) + y > R + s)
                      )
                        break;
                    } else F = A;
                  }
                } catch (e) {
                  S.e(e);
                } finally {
                  S.f();
                }
                o + y <= R + s && i.fillText(F, n, o + P), i.restore();
              }
            }
          },
        },
        {
          key: "drawNode",
          value:
            ((o = a(
              r.default.mark(function e(t) {
                var a, i, n, o, l, s, c, u, d, h;
                return r.default.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = t.layoutBox),
                            (i = t.computedStyle),
                            (n = t.name),
                            (o = t.attributes),
                            (l = o.src),
                            (s = o.text),
                            "view" !== n)
                          ) {
                            e.next = 6;
                            break;
                          }
                          this.drawView(a, i), (e.next = 12);
                          break;
                        case 6:
                          if ("image" !== n) {
                            e.next = 11;
                            break;
                          }
                          return (e.next = 9), this.drawImage(l, a, i);
                        case 9:
                          e.next = 12;
                          break;
                        case 11:
                          "text" === n && this.drawText(s, a, i);
                        case 12:
                          (c = Object.values(t.children)), (u = 0), (d = c);
                        case 14:
                          if (!(u < d.length)) {
                            e.next = 21;
                            break;
                          }
                          return (h = d[u]), (e.next = 18), this.drawNode(h);
                        case 18:
                          u++, (e.next = 14);
                          break;
                        case 21:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return o.apply(this, arguments);
            }),
        },
      ]),
      e
    );
  })();
module.exports = { Draw: o };
