!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [82524],
    {
      57300: function (t, n, r) {
        r.r(n),
          r.d(n, {
            CreateStyleSheet: function () {
              return u;
            },
            getImageSize: function () {
              return s;
            },
            getWindowHeight: function () {
              return p;
            },
            getWindowWidth: function () {
              return a;
            },
            getWindowWidthNumber: function () {
              return g;
            },
            getZXRegularFontFamily: function () {
              return c;
            },
            handlePx: function () {
              return h;
            },
            handleStyle: function () {
              return o;
            },
            isAPP_IOS: function () {
              return d;
            },
            isCRN: function () {
              return f;
            },
          });
        var e = [
          "fontSize",
          "lineHeight",
          "letterSpacing",
          "width",
          "minWidth",
          "maxWidth",
          "height",
          "minHeight",
          "maxHeight",
          "top",
          "bottom",
          "left",
          "right",
          "margin",
          "marginBottom",
          "marginTop",
          "marginLeft",
          "marginRight",
          "padding",
          "paddingBottom",
          "paddingTop",
          "paddingLeft",
          "paddingRight",
          "borderWidth",
          "borderTopWidth",
          "borderRightWidth",
          "borderBottomWidth",
          "borderLeftWidth",
          "borderRadius",
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
          "transform",
          "flexBasis",
        ];
        function i(t) {
          return (
            Object.keys(t).forEach(function (n) {
              e.includes(n) &&
                ("[object Number]" === Object.prototype.toString.call(t[n])
                  ? (t[n] = 2 * t[n] + "rpx")
                  : "transform" === n &&
                    (t[n] = (function (t) {
                      if (!Array.isArray(t)) return t;
                      var n = "";
                      return (
                        t.forEach(function (t) {
                          var r = Object.keys(t) || [];
                          "[object Number]" ===
                          Object.prototype.toString.call(t[r[0]])
                            ? (n += ""
                                .concat(r[0], "(")
                                .concat(2 * t[r[0]], "rpx) "))
                            : (n += "".concat(r[0], "(").concat(t[r[0]], ") "));
                        }),
                        n
                      );
                    })(t[n])));
            }),
            t
          );
        }
        function o(t) {
          var n = {};
          return (
            Array.isArray(t)
              ? t.forEach(function (t) {
                  Object.assign(n, t);
                })
              : Object.assign(n, t),
            i(n)
          );
        }
        var u = function (t) {
            return (
              Object.keys(t).forEach(function (n) {
                t[n] = i(t[n]);
              }),
              console.log(t),
              t
            );
          },
          c = function () {
            return "ZX-Regular";
          },
          a = function () {
            return "750rpx";
          },
          d = function () {
            return !1;
          },
          f = function () {
            return !1;
          },
          g = function () {
            return 375;
          },
          h = function (t) {
            return "".concat(2 * t, "rpx");
          },
          p = function () {
            return "100vh";
          },
          s = function (t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              e = 375 - 2 * r,
              i = (n * e) / t;
            return { width: 2 * e + "rpx", height: 2 * i + "rpx" };
          };
      },
    },
  ]);
})();
