(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [98946],
  {
    64746: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Z;
        },
      });
      var r = n(52500),
        i = n(71515),
        o = !1,
        a = [
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
      function c(e) {
        return (
          Object.keys(e).forEach(function (t) {
            a.includes(t) &&
              ("[object Number]" === Object.prototype.toString.call(e[t])
                ? (e[t] = 2 * e[t] + "rpx")
                : "transform" === t &&
                  (e[t] = (function (e) {
                    if (!Array.isArray(e)) return e;
                    var t = "";
                    return (
                      e.forEach(function (e) {
                        var n = Object.keys(e) || [];
                        "[object Number]" ===
                        Object.prototype.toString.call(e[n[0]])
                          ? (t += ""
                              .concat(n[0], "(")
                              .concat(2 * e[n[0]], "rpx) "))
                          : (t += "".concat(n[0], "(").concat(e[n[0]], ") "));
                      }),
                      t
                    );
                  })(e[t])));
          }),
          e
        );
      }
      function u(e) {
        if (o) return e;
        var t = {};
        return (
          Array.isArray(e)
            ? e.forEach(function (e) {
                Object.assign(t, e);
              })
            : Object.assign(t, e),
          c(t)
        );
      }
      var l = n(48813),
        s = r.default.memo(function (e) {
          var t = e.defaultImg,
            n = e.style;
          return t
            ? (0, l.tZ)(i.Image, { src: t, style: n })
            : (0, l.tZ)(l.HY, {});
        }),
        d = n(298),
        f = n(90129),
        p = function () {
          return (0, l.tZ)(i.View, {
            style: "height: env(safe-area-inset-bottom)",
          });
        },
        h = n(34229),
        g = (0, r.forwardRef)(function (e, t) {
          var n = e.isShowIphoneXAdapter,
            i = void 0 === n || n,
            o = e.enableTapBackground,
            a = void 0 === o || o,
            c = e.onCancel,
            u = void 0 === c ? function () {} : c,
            s = e.innerContainerStyle,
            g = e.children,
            v = (0, r.useState)(!1),
            m = (0, f.Z)(v, 2),
            _ = m[0],
            y = m[1];
          (0, r.useEffect)(function () {
            y(!0);
          }, []),
            (0, r.useImperativeHandle)(
              t,
              function () {
                return { hideAnim: b };
              },
              []
            );
          var b = function (e) {
            y(!1),
              setTimeout(function () {
                null == e || e();
              }, 200);
          };
          return (0, l.BX)(
            h.ZtDrawer,
            (0, d.Z)(
              (0, d.Z)(
                {
                  isDefineHead: !0,
                  className: "taro-crn-drawer",
                  onWrapClose: function () {
                    a && b(u);
                  },
                  show: _,
                  drawerStyle: (0, d.Z)((0, d.Z)({}, { zIndex: 1e3 }), s),
                },
                e
              ),
              {},
              { children: [g, !!i && (0, l.tZ)(p, {})] }
            )
          );
        });
      function v(e) {
        var t = (0, r.useRef)(null);
        return {
          modalRef: t,
          modalClose: function () {
            var n;
            "function" ==
            typeof (null === (n = t.current) || void 0 === n
              ? void 0
              : n.hideAnim)
              ? t.current.hideAnim(function () {
                  null == e || e();
                })
              : null == e || e();
          },
        };
      }
      var m = "750rpx",
        _ = "670rpx",
        y = function (e) {
          var t = e.isShow,
            n = (e.img, e.title),
            r = void 0 === n ? "" : n,
            o = e.subTitle,
            a = e.extStyle,
            c = void 0 === a ? {} : a,
            d = e.onClose,
            f = void 0 === d ? function () {} : d,
            h = v(f),
            m = h.modalRef,
            y = h.modalClose;
          return t
            ? (0, l.BX)(g, {
                ref: m,
                onCancel: function () {
                  return y();
                },
                isShowIphoneXAdapter: !1,
                innerContainerStyle: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: "#fff",
                },
                children: [
                  (0, l.tZ)(i.Image, {
                    webp: !0,
                    style: b.bgImage,
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23-02/img_popup_bg.webp",
                  }),
                  (0, l.BX)(i.View, {
                    style: b.bgView,
                    children: [
                      !1,
                      (0, l.BX)(i.View, {
                        style: b.titleBg,
                        children: [
                          (0, l.tZ)(i.Text, {
                            style: b.title,
                            children: r || "",
                          }),
                          (0, l.tZ)(i.View, {
                            style: b.closeImageBg,
                            onClick: f,
                            children: (0, l.tZ)(i.Image, {
                              style: b.closeImage,
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_01/mianfeigaosuqiang/icon_24_close.webp",
                            }),
                          }),
                        ],
                      }),
                      (0, l.tZ)(i.View, {
                        style: b.titleBg,
                        children: (0, l.tZ)(i.Text, {
                          style: b.subTitle,
                          children: o || "",
                        }),
                      }),
                      (0, l.tZ)(i.View, {
                        style: b.lottie,
                        children: (0, l.tZ)(s, {
                          loop: !0,
                          defaultImg:
                            "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_03/yindaotu.gif",
                          style: u([{ width: _, height: 303 }]),
                          source:
                            "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_03/houbu/data.json",
                        }),
                      }),
                      (0, l.BX)(i.View, {
                        style: u([b.btn, { width: "686rpx" }]),
                        onClick: f,
                        children: [
                          (0, l.tZ)(i.Text, {
                            style: u([b.btnText, c]),
                            children: "我知道了",
                          }),
                          (0, l.tZ)(p, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, l.tZ)(i.View, {});
        },
        b = (function (e) {
          return (
            o ||
              (Object.keys(e).forEach(function (t) {
                e[t] = c(e[t]);
              }),
              console.log(e)),
            e
          );
        })({
          bgView: {
            width: m,
            backgroundColor: "#fff",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
          bgImage: {
            position: "absolute",
            width: m,
            height: 100,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
          bgCRnImage: {
            position: "absolute",
            width: m,
            height: 100,
            top: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
          titleBg: {
            flexDirection: "row",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: m,
            display: "flex",
          },
          title: {
            height: 28,
            color: "#198cff",
            fontSize: 20,
            fontFamily: "PingFangSC-Semibold",
            fontWeight: "600",
            marginTop: 10,
            marginBottom: 4,
          },
          closeImageBg: {
            width: 24,
            height: 24,
            position: "absolute",
            right: 16,
            top: 16,
          },
          closeImage: { width: 24, height: 24 },
          subTitle: {
            height: 18,
            color: "#879fc2",
            fontSize: 13,
            fontFamily: "PingFangSC-Regular",
            fontWeight: "normal",
            display: "flex",
          },
          lottie: {
            height: 303,
            marginRight: 24,
            marginLeft: 24,
            marginTop: 10,
            marginBottom: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: _,
          },
          btn: {
            height: 44,
            backgroundColor: "#198cff",
            marginRight: 16,
            marginLeft: 16,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 28,
            display: "flex",
          },
          btnText: {
            height: 21,
            color: "#ffffff",
            fontSize: 17,
            fontFamily: "PingFangSC-Semibold",
            fontWeight: "600",
            marginTop: 0,
          },
        }),
        Z = y;
    },
    82954: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return p;
        },
      });
      var r = n(298),
        i = n(52500),
        o = n(71515),
        a = n(92001),
        c = !1,
        u = [
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
      function l(e) {
        return (
          Object.keys(e).forEach(function (t) {
            u.includes(t) &&
              ("[object Number]" === Object.prototype.toString.call(e[t])
                ? (e[t] = 2 * e[t] + "rpx")
                : "transform" === t &&
                  (e[t] = (function (e) {
                    if (!Array.isArray(e)) return e;
                    var t = "";
                    return (
                      e.forEach(function (e) {
                        var n = Object.keys(e) || [];
                        "[object Number]" ===
                        Object.prototype.toString.call(e[n[0]])
                          ? (t += ""
                              .concat(n[0], "(")
                              .concat(2 * e[n[0]], "rpx) "))
                          : (t += "".concat(n[0], "(").concat(e[n[0]], ") "));
                      }),
                      t
                    );
                  })(e[t])));
          }),
          e
        );
      }
      function s(e) {
        if (c) return e;
        var t = {};
        return (
          Array.isArray(e)
            ? e.forEach(function (e) {
                Object.assign(t, e);
              })
            : Object.assign(t, e),
          l(t)
        );
      }
      var d = n(48813),
        f = function (e) {
          var t = e.buttons,
            n = e.outerStyle;
          return null != t && t.length
            ? (0, d.tZ)(o.View, {
                style: s([h.btnWrapper, n || {}]),
                children: t.map(function (e, t) {
                  return (0, d.tZ)(
                    o.View,
                    {
                      onClick: function () {
                        var t;
                        return null === (t = e.onClick) || void 0 === t
                          ? void 0
                          : t.call(e);
                      },
                      style: (0, r.Z)(
                        (0, r.Z)((0, r.Z)({}, h.btn), h["btn".concat(t)]),
                        {},
                        {
                          color: (null == e ? void 0 : e.color) || "#fff",
                          backgroundColor:
                            (null == e ? void 0 : e.bgColor) || "#198cff",
                        },
                        e.style || {}
                      ),
                      children: e.text || "",
                    },
                    t
                  );
                }),
              })
            : null;
        },
        p = i.default.memo(function (e) {
          var t,
            n = e.isShow,
            i = e.cancel,
            c = e.buttons,
            u = e.title,
            l = e.subTitle,
            p = e.icon,
            g = e.backgroundIcon,
            v = e.closeIcon,
            m = e.children,
            _ = void 0 === m ? null : m,
            y = e.showCloseIcon,
            b = void 0 === y || y,
            Z = e.enableTapBackground,
            C = void 0 === Z || Z,
            w = e.hasBackground,
            N = void 0 === w || w,
            T = e.outerStyle,
            x = void 0 === T ? {} : T,
            S = e.isShowIphoneXAdapter,
            I = void 0 === S || S,
            k = e.iphoneXFooterColor,
            R = void 0 === k ? "#fff" : k,
            D = (0, a.cP)(i),
            F = D.modalRef,
            P = D.modalClose,
            A = "string" == typeof p ? p : null == p ? void 0 : p.uri,
            B =
              g ||
              "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
            E =
              v ||
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp";
          return n
            ? (0, d.tZ)(a.$K, {
                ref: F,
                onCancel: P,
                enableTapBackground: C,
                isRequestAnimationFrame: !0,
                innerContainerStyle: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor:
                    (null == x || null === (t = x.box) || void 0 === t
                      ? void 0
                      : t.backgroundColor) || "#fff",
                },
                isShowIphoneXAdapter: I,
                iphoneXFooterColor: R,
                children: (0, d.BX)(o.View, {
                  style: s([
                    h.box,
                    { paddingTop: A ? 0 : 28 },
                    (null == x ? void 0 : x.box) || {},
                  ]),
                  children: [
                    !!N &&
                      (0, d.tZ)(o.Image, {
                        style: s([
                          h.bg,
                          { width: "750rpx" },
                          (null == x ? void 0 : x.backgroundImg) || {},
                        ]),
                        src: B,
                      }),
                    !!b &&
                      (0, d.tZ)(o.Image, {
                        src: E,
                        style: s([
                          h.iconClose,
                          (null == x ? void 0 : x.closeIcon) || {},
                        ]),
                        onClick: P,
                        webp: !0,
                      }),
                    !!A &&
                      (0, d.tZ)(o.Image, {
                        src: A,
                        style: (0, r.Z)((0, r.Z)({}, h.icon), p.style || {}),
                      }),
                    !!u && (0, d.tZ)(a.Ho, { style: h.hd, children: u }),
                    !!l && (0, d.tZ)(a.Ho, { style: h.content, children: l }),
                    _,
                    !(null == c || !c.length) &&
                      (0, d.tZ)(f, {
                        buttons: c,
                        outerStyle: null == x ? void 0 : x.btnList,
                      }),
                  ],
                }),
              })
            : null;
        }),
        h = (function (e) {
          return (
            c ||
              (Object.keys(e).forEach(function (t) {
                e[t] = l(e[t]);
              }),
              console.log(e)),
            e
          );
        })({
          box: {
            position: "relative",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: 10,
          },
          bg: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 120,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          },
          iconClose: {
            position: "absolute",
            top: 16,
            right: 16,
            width: 24,
            height: 24,
            zIndex: 100,
          },
          icon: { width: 280, height: 148, marginBottom: 2, zIndex: 100 },
          hd: {
            position: "relative",
            height: 24,
            color: "#222222",
            fontSize: 20,
            fontFamily: "PingFangSC-Medium",
            fontWeight: "500",
            lineHeight: 24,
          },
          content: {
            position: "relative",
            marginTop: 12,
            fontSize: 14,
            color: "#666666",
            fontFamily: "PingFangSC-Regular",
            lineHeight: 20,
            textAlign: "center",
          },
          btnWrapper: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 28,
            paddingLeft: 16,
            paddingRight: 16,
            width: "100%",
            boxSizing: "border-box",
          },
          btn: {
            flex: 1,
            position: "relative",
            height: 44,
            lineHeight: 44,
            borderRadius: 12,
            textAlign: "center",
            fontSize: 17,
            fontFamily: "PingFangSC-Semibold",
            fontWeight: "500",
          },
          btn0: { backgroundColor: "#F7F7F7", color: "#666666" },
          btn1: { marginLeft: 8, backgroundColor: "#198cff", color: "#ffffff" },
        });
    },
    68754: function (e, t, n) {
      var r;
      e = n.nmd(e);
      var i = n(66371).default;
      (function () {
        var o,
          a = "Expected a function",
          c = "__lodash_hash_undefined__",
          u = "__lodash_placeholder__",
          l = 16,
          s = 32,
          d = 64,
          f = 128,
          p = 256,
          h = 1 / 0,
          g = 9007199254740991,
          v = NaN,
          m = 4294967295,
          _ = [
            ["ary", f],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", l],
            ["flip", 512],
            ["partial", s],
            ["partialRight", d],
            ["rearg", p],
          ],
          y = "[object Arguments]",
          b = "[object Array]",
          Z = "[object Boolean]",
          C = "[object Date]",
          w = "[object Error]",
          N = "[object Function]",
          T = "[object GeneratorFunction]",
          x = "[object Map]",
          S = "[object Number]",
          I = "[object Object]",
          k = "[object Promise]",
          R = "[object RegExp]",
          D = "[object Set]",
          F = "[object String]",
          P = "[object Symbol]",
          A = "[object WeakMap]",
          B = "[object ArrayBuffer]",
          E = "[object DataView]",
          V = "[object Float32Array]",
          L = "[object Float64Array]",
          O = "[object Int8Array]",
          z = "[object Int16Array]",
          j = "[object Int32Array]",
          M = "[object Uint8Array]",
          W = "[object Uint8ClampedArray]",
          X = "[object Uint16Array]",
          H = "[object Uint32Array]",
          G = /\b__p \+= '';/g,
          U = /\b(__p \+=) '' \+/g,
          Y = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          q = /&(?:amp|lt|gt|quot|#39);/g,
          K = /[&<>"']/g,
          J = RegExp(q.source),
          Q = RegExp(K.source),
          $ = /<%-([\s\S]+?)%>/g,
          ee = /<%([\s\S]+?)%>/g,
          te = /<%=([\s\S]+?)%>/g,
          ne = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          re = /^\w*$/,
          ie =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          oe = /[\\^$.*+?()[\]{}|]/g,
          ae = RegExp(oe.source),
          ce = /^\s+/,
          ue = /\s/,
          le = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          se = /\{\n\/\* \[wrapped with (.+)\] \*/,
          de = /,? & /,
          fe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          pe = /[()=,{}\[\]\/\s]/,
          he = /\\(\\)?/g,
          ge = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          ve = /\w*$/,
          me = /^[-+]0x[0-9a-f]+$/i,
          _e = /^0b[01]+$/i,
          ye = /^\[object .+?Constructor\]$/,
          be = /^0o[0-7]+$/i,
          Ze = /^(?:0|[1-9]\d*)$/,
          Ce = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          we = /($^)/,
          Ne = /['\n\r\u2028\u2029\\]/g,
          Te = "\\ud800-\\udfff",
          xe = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
          Se = "\\u2700-\\u27bf",
          Ie = "a-z\\xdf-\\xf6\\xf8-\\xff",
          ke = "A-Z\\xc0-\\xd6\\xd8-\\xde",
          Re = "\\ufe0e\\ufe0f",
          De =
            "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          Fe = "['’]",
          Pe = "[" + Te + "]",
          Ae = "[" + De + "]",
          Be = "[" + xe + "]",
          Ee = "\\d+",
          Ve = "[" + Se + "]",
          Le = "[" + Ie + "]",
          Oe = "[^" + Te + De + Ee + Se + Ie + ke + "]",
          ze = "\\ud83c[\\udffb-\\udfff]",
          je = "[^" + Te + "]",
          Me = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          We = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          Xe = "[" + ke + "]",
          He = "(?:" + Le + "|" + Oe + ")",
          Ge = "(?:" + Xe + "|" + Oe + ")",
          Ue = "(?:['’](?:d|ll|m|re|s|t|ve))?",
          Ye = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
          qe = "(?:" + Be + "|" + ze + ")?",
          Ke = "[" + Re + "]?",
          Je =
            Ke +
            qe +
            "(?:\\u200d(?:" +
            [je, Me, We].join("|") +
            ")" +
            Ke +
            qe +
            ")*",
          Qe = "(?:" + [Ve, Me, We].join("|") + ")" + Je,
          $e = "(?:" + [je + Be + "?", Be, Me, We, Pe].join("|") + ")",
          et = RegExp(Fe, "g"),
          tt = RegExp(Be, "g"),
          nt = RegExp(ze + "(?=" + ze + ")|" + $e + Je, "g"),
          rt = RegExp(
            [
              Xe + "?" + Le + "+" + Ue + "(?=" + [Ae, Xe, "$"].join("|") + ")",
              Ge + "+" + Ye + "(?=" + [Ae, Xe + He, "$"].join("|") + ")",
              Xe + "?" + He + "+" + Ue,
              Xe + "+" + Ye,
              "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
              "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
              Ee,
              Qe,
            ].join("|"),
            "g"
          ),
          it = RegExp("[\\u200d" + Te + xe + Re + "]"),
          ot =
            /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          at = [
            "Array",
            "Buffer",
            "DataView",
            "Date",
            "Error",
            "Float32Array",
            "Float64Array",
            "Function",
            "Int8Array",
            "Int16Array",
            "Int32Array",
            "Map",
            "Math",
            "Object",
            "Promise",
            "RegExp",
            "Set",
            "String",
            "Symbol",
            "TypeError",
            "Uint8Array",
            "Uint8ClampedArray",
            "Uint16Array",
            "Uint32Array",
            "WeakMap",
            "_",
            "clearTimeout",
            "isFinite",
            "parseInt",
            "setTimeout",
          ],
          ct = -1,
          ut = {};
        (ut[V] =
          ut[L] =
          ut[O] =
          ut[z] =
          ut[j] =
          ut[M] =
          ut[W] =
          ut[X] =
          ut[H] =
            !0),
          (ut[y] =
            ut[b] =
            ut[B] =
            ut[Z] =
            ut[E] =
            ut[C] =
            ut[w] =
            ut[N] =
            ut[x] =
            ut[S] =
            ut[I] =
            ut[R] =
            ut[D] =
            ut[F] =
            ut[A] =
              !1);
        var lt = {};
        (lt[y] =
          lt[b] =
          lt[B] =
          lt[E] =
          lt[Z] =
          lt[C] =
          lt[V] =
          lt[L] =
          lt[O] =
          lt[z] =
          lt[j] =
          lt[x] =
          lt[S] =
          lt[I] =
          lt[R] =
          lt[D] =
          lt[F] =
          lt[P] =
          lt[M] =
          lt[W] =
          lt[X] =
          lt[H] =
            !0),
          (lt[w] = lt[N] = lt[A] = !1);
        var st = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029",
          },
          dt = parseFloat,
          ft = parseInt,
          pt =
            "object" == (void 0 === n.g ? "undefined" : i(n.g)) &&
            n.g &&
            n.g.Object === Object &&
            n.g,
          ht =
            "object" == ("undefined" == typeof self ? "undefined" : i(self)) &&
            self &&
            self.Object === Object &&
            self,
          gt = pt || ht || Function("return this")(),
          vt = "object" == i(t) && t && !t.nodeType && t,
          mt = vt && "object" == i(e) && e && !e.nodeType && e,
          _t = mt && mt.exports === vt,
          yt = _t && pt.process,
          bt = (function () {
            try {
              return (
                (mt && mt.require && mt.require("util").types) ||
                (yt && yt.binding && yt.binding("util"))
              );
            } catch (e) {}
          })(),
          Zt = bt && bt.isArrayBuffer,
          Ct = bt && bt.isDate,
          wt = bt && bt.isMap,
          Nt = bt && bt.isRegExp,
          Tt = bt && bt.isSet,
          xt = bt && bt.isTypedArray;
        function St(e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }
          return e.apply(t, n);
        }
        function It(e, t, n, r) {
          for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
            var a = e[i];
            t(r, a, n(a), e);
          }
          return r;
        }
        function kt(e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length;
            ++n < r && !1 !== t(e[n], n, e);

          );
          return e;
        }
        function Rt(e, t) {
          for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); );
          return e;
        }
        function Dt(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (!t(e[n], n, e)) return !1;
          return !0;
        }
        function Ft(e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, i = 0, o = [];
            ++n < r;

          ) {
            var a = e[n];
            t(a, n, e) && (o[i++] = a);
          }
          return o;
        }
        function Pt(e, t) {
          return !(null == e || !e.length) && Xt(e, t, 0) > -1;
        }
        function At(e, t, n) {
          for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
            if (n(t, e[r])) return !0;
          return !1;
        }
        function Bt(e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, i = Array(r);
            ++n < r;

          )
            i[n] = t(e[n], n, e);
          return i;
        }
        function Et(e, t) {
          for (var n = -1, r = t.length, i = e.length; ++n < r; )
            e[i + n] = t[n];
          return e;
        }
        function Vt(e, t, n, r) {
          var i = -1,
            o = null == e ? 0 : e.length;
          for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
          return n;
        }
        function Lt(e, t, n, r) {
          var i = null == e ? 0 : e.length;
          for (r && i && (n = e[--i]); i--; ) n = t(n, e[i], i, e);
          return n;
        }
        function Ot(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e)) return !0;
          return !1;
        }
        var zt = Yt("length");
        function jt(e) {
          return e.match(fe) || [];
        }
        function Mt(e, t, n) {
          var r;
          return (
            n(e, function (e, n, i) {
              if (t(e, n, i)) return (r = n), !1;
            }),
            r
          );
        }
        function Wt(e, t, n, r) {
          for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
            if (t(e[o], o, e)) return o;
          return -1;
        }
        function Xt(e, t, n) {
          return t == t
            ? (function (e, t, n) {
                for (var r = n - 1, i = e.length; ++r < i; )
                  if (e[r] === t) return r;
                return -1;
              })(e, t, n)
            : Wt(e, Gt, n);
        }
        function Ht(e, t, n, r) {
          for (var i = n - 1, o = e.length; ++i < o; ) if (r(e[i], t)) return i;
          return -1;
        }
        function Gt(e) {
          return e != e;
        }
        function Ut(e, t) {
          var n = null == e ? 0 : e.length;
          return n ? Jt(e, t) / n : v;
        }
        function Yt(e) {
          return function (t) {
            return null == t ? o : t[e];
          };
        }
        function qt(e) {
          return function (t) {
            return null == e ? o : e[t];
          };
        }
        function Kt(e, t, n, r, i) {
          return (
            i(e, function (e, i, o) {
              n = r ? ((r = !1), e) : t(n, e, i, o);
            }),
            n
          );
        }
        function Jt(e, t) {
          for (var n, r = -1, i = e.length; ++r < i; ) {
            var a = t(e[r]);
            a !== o && (n = n === o ? a : n + a);
          }
          return n;
        }
        function Qt(e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        }
        function $t(e) {
          return e ? e.slice(0, _n(e) + 1).replace(ce, "") : e;
        }
        function en(e) {
          return function (t) {
            return e(t);
          };
        }
        function tn(e, t) {
          return Bt(t, function (t) {
            return e[t];
          });
        }
        function nn(e, t) {
          return e.has(t);
        }
        function rn(e, t) {
          for (var n = -1, r = e.length; ++n < r && Xt(t, e[n], 0) > -1; );
          return n;
        }
        function on(e, t) {
          for (var n = e.length; n-- && Xt(t, e[n], 0) > -1; );
          return n;
        }
        function an(e, t) {
          for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
          return r;
        }
        var cn = qt({
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s",
          }),
          un = qt({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          });
        function ln(e) {
          return "\\" + st[e];
        }
        function sn(e) {
          return it.test(e);
        }
        function dn(e) {
          return ot.test(e);
        }
        function fn(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        }
        function pn(e, t) {
          return function (n) {
            return e(t(n));
          };
        }
        function hn(e, t) {
          for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
            var a = e[n];
            (a !== t && a !== u) || ((e[n] = u), (o[i++] = n));
          }
          return o;
        }
        function gn(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        }
        function vn(e) {
          return sn(e)
            ? (function (e) {
                for (var t = (nt.lastIndex = 0); nt.test(e); ) ++t;
                return t;
              })(e)
            : zt(e);
        }
        function mn(e) {
          return sn(e)
            ? (function (e) {
                return e.match(nt) || [];
              })(e)
            : (function (e) {
                return e.split("");
              })(e);
        }
        function _n(e) {
          for (var t = e.length; t-- && ue.test(e.charAt(t)); );
          return t;
        }
        var yn = qt({
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'",
        });
        function bn(e) {
          return e.match(rt) || [];
        }
        var Zn = (function e(t) {
          var n = (t =
              null == t ? gt : Zn.defaults(gt.Object(), t, Zn.pick(gt, at)))
              .Array,
            r = t.Date,
            ue = t.Error,
            fe = t.Function,
            Te = t.Math,
            xe = t.Object,
            Se = t.RegExp,
            Ie = t.String,
            ke = t.TypeError,
            Re = n.prototype,
            De = fe.prototype,
            Fe = xe.prototype,
            Pe = t["__core-js_shared__"],
            Ae = De.toString,
            Be = Fe.hasOwnProperty,
            Ee = 0,
            Ve = (function () {
              var e = /[^.]+$/.exec((Pe && Pe.keys && Pe.keys.IE_PROTO) || "");
              return e ? "Symbol(src)_1." + e : "";
            })(),
            Le = Fe.toString,
            Oe = Ae.call(xe),
            ze = gt._,
            je = Se(
              "^" +
                Ae.call(Be)
                  .replace(oe, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            Me = _t ? t.Buffer : o,
            We = t.Symbol,
            Xe = t.Uint8Array,
            He = Me ? Me.allocUnsafe : o,
            Ge = pn(xe.getPrototypeOf, xe),
            Ue = xe.create,
            Ye = Fe.propertyIsEnumerable,
            qe = Re.splice,
            Ke = We ? We.isConcatSpreadable : o,
            Je = We ? We.iterator : o,
            Qe = We ? We.toStringTag : o,
            $e = (function () {
              try {
                var e = mo(xe, "defineProperty");
                return e({}, "", {}), e;
              } catch (e) {}
            })(),
            nt = t.clearTimeout !== gt.clearTimeout && t.clearTimeout,
            rt = r && r.now !== gt.Date.now && r.now,
            it = t.setTimeout !== gt.setTimeout && t.setTimeout,
            ot = Te.ceil,
            st = Te.floor,
            pt = xe.getOwnPropertySymbols,
            ht = Me ? Me.isBuffer : o,
            vt = t.isFinite,
            mt = Re.join,
            yt = pn(xe.keys, xe),
            bt = Te.max,
            zt = Te.min,
            qt = r.now,
            Cn = t.parseInt,
            wn = Te.random,
            Nn = Re.reverse,
            Tn = mo(t, "DataView"),
            xn = mo(t, "Map"),
            Sn = mo(t, "Promise"),
            In = mo(t, "Set"),
            kn = mo(t, "WeakMap"),
            Rn = mo(xe, "create"),
            Dn = kn && new kn(),
            Fn = {},
            Pn = Ho(Tn),
            An = Ho(xn),
            Bn = Ho(Sn),
            En = Ho(In),
            Vn = Ho(kn),
            Ln = We ? We.prototype : o,
            On = Ln ? Ln.valueOf : o,
            zn = Ln ? Ln.toString : o;
          function jn(e) {
            if (uc(e) && !Ja(e) && !(e instanceof Hn)) {
              if (e instanceof Xn) return e;
              if (Be.call(e, "__wrapped__")) return Go(e);
            }
            return new Xn(e);
          }
          var Mn = (function () {
            function e() {}
            return function (t) {
              if (!cc(t)) return {};
              if (Ue) return Ue(t);
              e.prototype = t;
              var n = new e();
              return (e.prototype = o), n;
            };
          })();
          function Wn() {}
          function Xn(e, t) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__chain__ = !!t),
              (this.__index__ = 0),
              (this.__values__ = o);
          }
          function Hn(e) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = m),
              (this.__views__ = []);
          }
          function Gn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Un(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Yn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function qn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.__data__ = new Yn(); ++t < n; ) this.add(e[t]);
          }
          function Kn(e) {
            var t = (this.__data__ = new Un(e));
            this.size = t.size;
          }
          function Jn(e, t) {
            var n = Ja(e),
              r = !n && Ka(e),
              i = !n && !r && tc(e),
              o = !n && !r && !i && vc(e),
              a = n || r || i || o,
              c = a ? Qt(e.length, Ie) : [],
              u = c.length;
            for (var l in e)
              (!t && !Be.call(e, l)) ||
                (a &&
                  ("length" == l ||
                    (i && ("offset" == l || "parent" == l)) ||
                    (o &&
                      ("buffer" == l ||
                        "byteLength" == l ||
                        "byteOffset" == l)) ||
                    No(l, u))) ||
                c.push(l);
            return c;
          }
          function Qn(e) {
            var t = e.length;
            return t ? e[qr(0, t - 1)] : o;
          }
          function $n(e, t) {
            return Mo(Di(e), ur(t, 0, e.length));
          }
          function er(e) {
            return Mo(Di(e));
          }
          function tr(e, t, n) {
            ((n !== o && !Ua(e[t], n)) || (n === o && !(t in e))) &&
              ar(e, t, n);
          }
          function nr(e, t, n) {
            var r = e[t];
            (Be.call(e, t) && Ua(r, n) && (n !== o || t in e)) || ar(e, t, n);
          }
          function rr(e, t) {
            for (var n = e.length; n--; ) if (Ua(e[n][0], t)) return n;
            return -1;
          }
          function ir(e, t, n, r) {
            return (
              pr(e, function (e, i, o) {
                t(r, e, n(e), o);
              }),
              r
            );
          }
          function or(e, t) {
            return e && Fi(t, Lc(t), e);
          }
          function ar(e, t, n) {
            "__proto__" == t && $e
              ? $e(e, t, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                  writable: !0,
                })
              : (e[t] = n);
          }
          function cr(e, t) {
            for (var r = -1, i = t.length, a = n(i), c = null == e; ++r < i; )
              a[r] = c ? o : Pc(e, t[r]);
            return a;
          }
          function ur(e, t, n) {
            return (
              e == e &&
                (n !== o && (e = e <= n ? e : n),
                t !== o && (e = e >= t ? e : t)),
              e
            );
          }
          function lr(e, t, n, r, i, a) {
            var c,
              u = 1 & t,
              l = 2 & t,
              s = 4 & t;
            if ((n && (c = i ? n(e, r, i, a) : n(e)), c !== o)) return c;
            if (!cc(e)) return e;
            var d = Ja(e);
            if (d) {
              if (
                ((c = (function (e) {
                  var t = e.length,
                    n = new e.constructor(t);
                  return (
                    t &&
                      "string" == typeof e[0] &&
                      Be.call(e, "index") &&
                      ((n.index = e.index), (n.input = e.input)),
                    n
                  );
                })(e)),
                !u)
              )
                return Di(e, c);
            } else {
              var f = bo(e),
                p = f == N || f == T;
              if (tc(e)) return Ti(e, u);
              if (f == I || f == y || (p && !i)) {
                if (((c = l || p ? {} : Co(e)), !u))
                  return l
                    ? (function (e, t) {
                        return Fi(e, yo(e), t);
                      })(
                        e,
                        (function (e, t) {
                          return e && Fi(t, Oc(t), e);
                        })(c, e)
                      )
                    : (function (e, t) {
                        return Fi(e, _o(e), t);
                      })(e, or(c, e));
              } else {
                if (!lt[f]) return i ? e : {};
                c = (function (e, t, n) {
                  var r = e.constructor;
                  switch (t) {
                    case B:
                      return xi(e);
                    case Z:
                    case C:
                      return new r(+e);
                    case E:
                      return (function (e, t) {
                        var n = t ? xi(e.buffer) : e.buffer;
                        return new e.constructor(n, e.byteOffset, e.byteLength);
                      })(e, n);
                    case V:
                    case L:
                    case O:
                    case z:
                    case j:
                    case M:
                    case W:
                    case X:
                    case H:
                      return Si(e, n);
                    case x:
                      return new r();
                    case S:
                    case F:
                      return new r(e);
                    case R:
                      return (function (e) {
                        var t = new e.constructor(e.source, ve.exec(e));
                        return (t.lastIndex = e.lastIndex), t;
                      })(e);
                    case D:
                      return new r();
                    case P:
                      return (function (e) {
                        return On ? xe(On.call(e)) : {};
                      })(e);
                  }
                })(e, f, u);
              }
            }
            a || (a = new Kn());
            var h = a.get(e);
            if (h) return h;
            a.set(e, c),
              pc(e)
                ? e.forEach(function (r) {
                    c.add(lr(r, t, n, r, e, a));
                  })
                : lc(e) &&
                  e.forEach(function (r, i) {
                    c.set(i, lr(r, t, n, i, e, a));
                  });
            var g = d ? o : (s ? (l ? lo : uo) : l ? Oc : Lc)(e);
            return (
              kt(g || e, function (r, i) {
                g && (r = e[(i = r)]), nr(c, i, lr(r, t, n, i, e, a));
              }),
              c
            );
          }
          function sr(e, t, n) {
            var r = n.length;
            if (null == e) return !r;
            for (e = xe(e); r--; ) {
              var i = n[r],
                a = t[i],
                c = e[i];
              if ((c === o && !(i in e)) || !a(c)) return !1;
            }
            return !0;
          }
          function dr(e, t, n) {
            if ("function" != typeof e) throw new ke(a);
            return Lo(function () {
              e.apply(o, n);
            }, t);
          }
          function fr(e, t, n, r) {
            var i = -1,
              o = Pt,
              a = !0,
              c = e.length,
              u = [],
              l = t.length;
            if (!c) return u;
            n && (t = Bt(t, en(n))),
              r
                ? ((o = At), (a = !1))
                : t.length >= 200 && ((o = nn), (a = !1), (t = new qn(t)));
            e: for (; ++i < c; ) {
              var s = e[i],
                d = null == n ? s : n(s);
              if (((s = r || 0 !== s ? s : 0), a && d == d)) {
                for (var f = l; f--; ) if (t[f] === d) continue e;
                u.push(s);
              } else o(t, d, r) || u.push(s);
            }
            return u;
          }
          (jn.templateSettings = {
            escape: $,
            evaluate: ee,
            interpolate: te,
            variable: "",
            imports: { _: jn },
          }),
            (jn.prototype = Wn.prototype),
            (jn.prototype.constructor = jn),
            (Xn.prototype = Mn(Wn.prototype)),
            (Xn.prototype.constructor = Xn),
            (Hn.prototype = Mn(Wn.prototype)),
            (Hn.prototype.constructor = Hn),
            (Gn.prototype.clear = function () {
              (this.__data__ = Rn ? Rn(null) : {}), (this.size = 0);
            }),
            (Gn.prototype.delete = function (e) {
              var t = this.has(e) && delete this.__data__[e];
              return (this.size -= t ? 1 : 0), t;
            }),
            (Gn.prototype.get = function (e) {
              var t = this.__data__;
              if (Rn) {
                var n = t[e];
                return n === c ? o : n;
              }
              return Be.call(t, e) ? t[e] : o;
            }),
            (Gn.prototype.has = function (e) {
              var t = this.__data__;
              return Rn ? t[e] !== o : Be.call(t, e);
            }),
            (Gn.prototype.set = function (e, t) {
              var n = this.__data__;
              return (
                (this.size += this.has(e) ? 0 : 1),
                (n[e] = Rn && t === o ? c : t),
                this
              );
            }),
            (Un.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (Un.prototype.delete = function (e) {
              var t = this.__data__,
                n = rr(t, e);
              return !(
                n < 0 ||
                (n == t.length - 1 ? t.pop() : qe.call(t, n, 1), --this.size, 0)
              );
            }),
            (Un.prototype.get = function (e) {
              var t = this.__data__,
                n = rr(t, e);
              return n < 0 ? o : t[n][1];
            }),
            (Un.prototype.has = function (e) {
              return rr(this.__data__, e) > -1;
            }),
            (Un.prototype.set = function (e, t) {
              var n = this.__data__,
                r = rr(n, e);
              return (
                r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
              );
            }),
            (Yn.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new Gn(),
                  map: new (xn || Un)(),
                  string: new Gn(),
                });
            }),
            (Yn.prototype.delete = function (e) {
              var t = go(this, e).delete(e);
              return (this.size -= t ? 1 : 0), t;
            }),
            (Yn.prototype.get = function (e) {
              return go(this, e).get(e);
            }),
            (Yn.prototype.has = function (e) {
              return go(this, e).has(e);
            }),
            (Yn.prototype.set = function (e, t) {
              var n = go(this, e),
                r = n.size;
              return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
            }),
            (qn.prototype.add = qn.prototype.push =
              function (e) {
                return this.__data__.set(e, c), this;
              }),
            (qn.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (Kn.prototype.clear = function () {
              (this.__data__ = new Un()), (this.size = 0);
            }),
            (Kn.prototype.delete = function (e) {
              var t = this.__data__,
                n = t.delete(e);
              return (this.size = t.size), n;
            }),
            (Kn.prototype.get = function (e) {
              return this.__data__.get(e);
            }),
            (Kn.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (Kn.prototype.set = function (e, t) {
              var n = this.__data__;
              if (n instanceof Un) {
                var r = n.__data__;
                if (!xn || r.length < 199)
                  return r.push([e, t]), (this.size = ++n.size), this;
                n = this.__data__ = new Yn(r);
              }
              return n.set(e, t), (this.size = n.size), this;
            });
          var pr = Bi(Zr),
            hr = Bi(Cr, !0);
          function gr(e, t) {
            var n = !0;
            return (
              pr(e, function (e, r, i) {
                return (n = !!t(e, r, i));
              }),
              n
            );
          }
          function vr(e, t, n) {
            for (var r = -1, i = e.length; ++r < i; ) {
              var a = e[r],
                c = t(a);
              if (null != c && (u === o ? c == c && !gc(c) : n(c, u)))
                var u = c,
                  l = a;
            }
            return l;
          }
          function mr(e, t) {
            var n = [];
            return (
              pr(e, function (e, r, i) {
                t(e, r, i) && n.push(e);
              }),
              n
            );
          }
          function _r(e, t, n, r, i) {
            var o = -1,
              a = e.length;
            for (n || (n = wo), i || (i = []); ++o < a; ) {
              var c = e[o];
              t > 0 && n(c)
                ? t > 1
                  ? _r(c, t - 1, n, r, i)
                  : Et(i, c)
                : r || (i[i.length] = c);
            }
            return i;
          }
          var yr = Ei(),
            br = Ei(!0);
          function Zr(e, t) {
            return e && yr(e, t, Lc);
          }
          function Cr(e, t) {
            return e && br(e, t, Lc);
          }
          function wr(e, t) {
            return Ft(t, function (t) {
              return ic(e[t]);
            });
          }
          function Nr(e, t) {
            for (var n = 0, r = (t = Zi(t, e)).length; null != e && n < r; )
              e = e[Xo(t[n++])];
            return n && n == r ? e : o;
          }
          function Tr(e, t, n) {
            var r = t(e);
            return Ja(e) ? r : Et(r, n(e));
          }
          function xr(e) {
            return null == e
              ? e === o
                ? "[object Undefined]"
                : "[object Null]"
              : Qe && Qe in xe(e)
              ? (function (e) {
                  var t = Be.call(e, Qe),
                    n = e[Qe];
                  try {
                    e[Qe] = o;
                    var r = !0;
                  } catch (e) {}
                  var i = Le.call(e);
                  return r && (t ? (e[Qe] = n) : delete e[Qe]), i;
                })(e)
              : (function (e) {
                  return Le.call(e);
                })(e);
          }
          function Sr(e, t) {
            return e > t;
          }
          function Ir(e, t) {
            return null != e && Be.call(e, t);
          }
          function kr(e, t) {
            return null != e && t in xe(e);
          }
          function Rr(e, t, r) {
            for (
              var i = r ? At : Pt,
                a = e[0].length,
                c = e.length,
                u = c,
                l = n(c),
                s = 1 / 0,
                d = [];
              u--;

            ) {
              var f = e[u];
              u && t && (f = Bt(f, en(t))),
                (s = zt(f.length, s)),
                (l[u] =
                  !r && (t || (a >= 120 && f.length >= 120))
                    ? new qn(u && f)
                    : o);
            }
            f = e[0];
            var p = -1,
              h = l[0];
            e: for (; ++p < a && d.length < s; ) {
              var g = f[p],
                v = t ? t(g) : g;
              if (((g = r || 0 !== g ? g : 0), !(h ? nn(h, v) : i(d, v, r)))) {
                for (u = c; --u; ) {
                  var m = l[u];
                  if (!(m ? nn(m, v) : i(e[u], v, r))) continue e;
                }
                h && h.push(v), d.push(g);
              }
            }
            return d;
          }
          function Dr(e, t, n) {
            var r = null == (e = Ao(e, (t = Zi(t, e)))) ? e : e[Xo(ra(t))];
            return null == r ? o : St(r, e, n);
          }
          function Fr(e) {
            return uc(e) && xr(e) == y;
          }
          function Pr(e, t, n, r, i) {
            return (
              e === t ||
              (null == e || null == t || (!uc(e) && !uc(t))
                ? e != e && t != t
                : (function (e, t, n, r, i, o) {
                    var a = Ja(e),
                      c = Ja(t),
                      u = a ? b : bo(e),
                      l = c ? b : bo(t),
                      s = (u = u == y ? I : u) == I,
                      d = (l = l == y ? I : l) == I,
                      f = u == l;
                    if (f && tc(e)) {
                      if (!tc(t)) return !1;
                      (a = !0), (s = !1);
                    }
                    if (f && !s)
                      return (
                        o || (o = new Kn()),
                        a || vc(e)
                          ? oo(e, t, n, r, i, o)
                          : (function (e, t, n, r, i, o, a) {
                              switch (n) {
                                case E:
                                  if (
                                    e.byteLength != t.byteLength ||
                                    e.byteOffset != t.byteOffset
                                  )
                                    return !1;
                                  (e = e.buffer), (t = t.buffer);
                                case B:
                                  return !(
                                    e.byteLength != t.byteLength ||
                                    !o(new Xe(e), new Xe(t))
                                  );
                                case Z:
                                case C:
                                case S:
                                  return Ua(+e, +t);
                                case w:
                                  return (
                                    e.name == t.name && e.message == t.message
                                  );
                                case R:
                                case F:
                                  return e == t + "";
                                case x:
                                  var c = fn;
                                case D:
                                  var u = 1 & r;
                                  if ((c || (c = gn), e.size != t.size && !u))
                                    return !1;
                                  var l = a.get(e);
                                  if (l) return l == t;
                                  (r |= 2), a.set(e, t);
                                  var s = oo(c(e), c(t), r, i, o, a);
                                  return a.delete(e), s;
                                case P:
                                  if (On) return On.call(e) == On.call(t);
                              }
                              return !1;
                            })(e, t, u, n, r, i, o)
                      );
                    if (!(1 & n)) {
                      var p = s && Be.call(e, "__wrapped__"),
                        h = d && Be.call(t, "__wrapped__");
                      if (p || h) {
                        var g = p ? e.value() : e,
                          v = h ? t.value() : t;
                        return o || (o = new Kn()), i(g, v, n, r, o);
                      }
                    }
                    return !!f && (o || (o = new Kn()), ao(e, t, n, r, i, o));
                  })(e, t, n, r, Pr, i))
            );
          }
          function Ar(e, t, n, r) {
            var i = n.length,
              a = i,
              c = !r;
            if (null == e) return !a;
            for (e = xe(e); i--; ) {
              var u = n[i];
              if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
            }
            for (; ++i < a; ) {
              var l = (u = n[i])[0],
                s = e[l],
                d = u[1];
              if (c && u[2]) {
                if (s === o && !(l in e)) return !1;
              } else {
                var f = new Kn();
                if (r) var p = r(s, d, l, e, t, f);
                if (!(p === o ? Pr(d, s, 3, r, f) : p)) return !1;
              }
            }
            return !0;
          }
          function Br(e) {
            return (
              !(
                !cc(e) ||
                (function (e) {
                  return !!Ve && Ve in e;
                })(e)
              ) && (ic(e) ? je : ye).test(Ho(e))
            );
          }
          function Er(e) {
            return "function" == typeof e
              ? e
              : null == e
              ? su
              : "object" == i(e)
              ? Ja(e)
                ? Mr(e[0], e[1])
                : jr(e)
              : yu(e);
          }
          function Vr(e) {
            if (!ko(e)) return yt(e);
            var t = [];
            for (var n in xe(e))
              Be.call(e, n) && "constructor" != n && t.push(n);
            return t;
          }
          function Lr(e) {
            if (!cc(e))
              return (function (e) {
                var t = [];
                if (null != e) for (var n in xe(e)) t.push(n);
                return t;
              })(e);
            var t = ko(e),
              n = [];
            for (var r in e)
              ("constructor" != r || (!t && Be.call(e, r))) && n.push(r);
            return n;
          }
          function Or(e, t) {
            return e < t;
          }
          function zr(e, t) {
            var r = -1,
              i = $a(e) ? n(e.length) : [];
            return (
              pr(e, function (e, n, o) {
                i[++r] = t(e, n, o);
              }),
              i
            );
          }
          function jr(e) {
            var t = vo(e);
            return 1 == t.length && t[0][2]
              ? Do(t[0][0], t[0][1])
              : function (n) {
                  return n === e || Ar(n, e, t);
                };
          }
          function Mr(e, t) {
            return xo(e) && Ro(t)
              ? Do(Xo(e), t)
              : function (n) {
                  var r = Pc(n, e);
                  return r === o && r === t ? Ac(n, e) : Pr(t, r, 3);
                };
          }
          function Wr(e, t, n, r, i) {
            e !== t &&
              yr(
                t,
                function (a, c) {
                  if ((i || (i = new Kn()), cc(a)))
                    !(function (e, t, n, r, i, a, c) {
                      var u = Eo(e, n),
                        l = Eo(t, n),
                        s = c.get(l);
                      if (s) tr(e, n, s);
                      else {
                        var d = a ? a(u, l, n + "", e, t, c) : o,
                          f = d === o;
                        if (f) {
                          var p = Ja(l),
                            h = !p && tc(l),
                            g = !p && !h && vc(l);
                          (d = l),
                            p || h || g
                              ? Ja(u)
                                ? (d = u)
                                : ec(u)
                                ? (d = Di(u))
                                : h
                                ? ((f = !1), (d = Ti(l, !0)))
                                : g
                                ? ((f = !1), (d = Si(l, !0)))
                                : (d = [])
                              : dc(l) || Ka(l)
                              ? ((d = u),
                                Ka(u)
                                  ? (d = Nc(u))
                                  : (cc(u) && !ic(u)) || (d = Co(l)))
                              : (f = !1);
                        }
                        f && (c.set(l, d), i(d, l, r, a, c), c.delete(l)),
                          tr(e, n, d);
                      }
                    })(e, t, c, n, Wr, r, i);
                  else {
                    var u = r ? r(Eo(e, c), a, c + "", e, t, i) : o;
                    u === o && (u = a), tr(e, c, u);
                  }
                },
                Oc
              );
          }
          function Xr(e, t) {
            var n = e.length;
            if (n) return No((t += t < 0 ? n : 0), n) ? e[t] : o;
          }
          function Hr(e, t, n) {
            t = t.length
              ? Bt(t, function (e) {
                  return Ja(e)
                    ? function (t) {
                        return Nr(t, 1 === e.length ? e[0] : e);
                      }
                    : e;
                })
              : [su];
            var r = -1;
            return (
              (t = Bt(t, en(ho()))),
              (function (e, t) {
                var n = e.length;
                for (e.sort(t); n--; ) e[n] = e[n].value;
                return e;
              })(
                zr(e, function (e, n, i) {
                  return {
                    criteria: Bt(t, function (t) {
                      return t(e);
                    }),
                    index: ++r,
                    value: e,
                  };
                }),
                function (e, t) {
                  return (function (e, t, n) {
                    for (
                      var r = -1,
                        i = e.criteria,
                        o = t.criteria,
                        a = i.length,
                        c = n.length;
                      ++r < a;

                    ) {
                      var u = Ii(i[r], o[r]);
                      if (u) {
                        if (r >= c) return u;
                        var l = n[r];
                        return u * ("desc" == l ? -1 : 1);
                      }
                    }
                    return e.index - t.index;
                  })(e, t, n);
                }
              )
            );
          }
          function Gr(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i; ) {
              var a = t[r],
                c = Nr(e, a);
              n(c, a) && ti(o, Zi(a, e), c);
            }
            return o;
          }
          function Ur(e, t, n, r) {
            var i = r ? Ht : Xt,
              o = -1,
              a = t.length,
              c = e;
            for (e === t && (t = Di(t)), n && (c = Bt(e, en(n))); ++o < a; )
              for (
                var u = 0, l = t[o], s = n ? n(l) : l;
                (u = i(c, s, u, r)) > -1;

              )
                c !== e && qe.call(c, u, 1), qe.call(e, u, 1);
            return e;
          }
          function Yr(e, t) {
            for (var n = e ? t.length : 0, r = n - 1; n--; ) {
              var i = t[n];
              if (n == r || i !== o) {
                var o = i;
                No(i) ? qe.call(e, i, 1) : pi(e, i);
              }
            }
            return e;
          }
          function qr(e, t) {
            return e + st(wn() * (t - e + 1));
          }
          function Kr(e, t, r, i) {
            for (var o = -1, a = bt(ot((t - e) / (r || 1)), 0), c = n(a); a--; )
              (c[i ? a : ++o] = e), (e += r);
            return c;
          }
          function Jr(e, t) {
            var n = "";
            if (!e || t < 1 || t > g) return n;
            do {
              t % 2 && (n += e), (t = st(t / 2)) && (e += e);
            } while (t);
            return n;
          }
          function Qr(e, t) {
            return Oo(Po(e, t, su), e + "");
          }
          function $r(e) {
            return Qn(Uc(e));
          }
          function ei(e, t) {
            var n = Uc(e);
            return Mo(n, ur(t, 0, n.length));
          }
          function ti(e, t, n, r) {
            if (!cc(e)) return e;
            for (
              var i = -1, a = (t = Zi(t, e)).length, c = a - 1, u = e;
              null != u && ++i < a;

            ) {
              var l = Xo(t[i]),
                s = n;
              if ("__proto__" === l || "constructor" === l || "prototype" === l)
                return e;
              if (i != c) {
                var d = u[l];
                (s = r ? r(d, l, u) : o) === o &&
                  (s = cc(d) ? d : No(t[i + 1]) ? [] : {});
              }
              nr(u, l, s), (u = u[l]);
            }
            return e;
          }
          var ni = Dn
              ? function (e, t) {
                  return Dn.set(e, t), e;
                }
              : su,
            ri = $e
              ? function (e, t) {
                  return $e(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: cu(t),
                    writable: !0,
                  });
                }
              : su;
          function ii(e) {
            return Mo(Uc(e));
          }
          function oi(e, t, r) {
            var i = -1,
              o = e.length;
            t < 0 && (t = -t > o ? 0 : o + t),
              (r = r > o ? o : r) < 0 && (r += o),
              (o = t > r ? 0 : (r - t) >>> 0),
              (t >>>= 0);
            for (var a = n(o); ++i < o; ) a[i] = e[i + t];
            return a;
          }
          function ai(e, t) {
            var n;
            return (
              pr(e, function (e, r, i) {
                return !(n = t(e, r, i));
              }),
              !!n
            );
          }
          function ci(e, t, n) {
            var r = 0,
              i = null == e ? r : e.length;
            if ("number" == typeof t && t == t && i <= 2147483647) {
              for (; r < i; ) {
                var o = (r + i) >>> 1,
                  a = e[o];
                null !== a && !gc(a) && (n ? a <= t : a < t)
                  ? (r = o + 1)
                  : (i = o);
              }
              return i;
            }
            return ui(e, t, su, n);
          }
          function ui(e, t, n, r) {
            var i = 0,
              a = null == e ? 0 : e.length;
            if (0 === a) return 0;
            for (
              var c = (t = n(t)) != t, u = null === t, l = gc(t), s = t === o;
              i < a;

            ) {
              var d = st((i + a) / 2),
                f = n(e[d]),
                p = f !== o,
                h = null === f,
                g = f == f,
                v = gc(f);
              if (c) var m = r || g;
              else
                m = s
                  ? g && (r || p)
                  : u
                  ? g && p && (r || !h)
                  : l
                  ? g && p && !h && (r || !v)
                  : !h && !v && (r ? f <= t : f < t);
              m ? (i = d + 1) : (a = d);
            }
            return zt(a, 4294967294);
          }
          function li(e, t) {
            for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
              var a = e[n],
                c = t ? t(a) : a;
              if (!n || !Ua(c, u)) {
                var u = c;
                o[i++] = 0 === a ? 0 : a;
              }
            }
            return o;
          }
          function si(e) {
            return "number" == typeof e ? e : gc(e) ? v : +e;
          }
          function di(e) {
            if ("string" == typeof e) return e;
            if (Ja(e)) return Bt(e, di) + "";
            if (gc(e)) return zn ? zn.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -h ? "-0" : t;
          }
          function fi(e, t, n) {
            var r = -1,
              i = Pt,
              o = e.length,
              a = !0,
              c = [],
              u = c;
            if (n) (a = !1), (i = At);
            else if (o >= 200) {
              var l = t ? null : $i(e);
              if (l) return gn(l);
              (a = !1), (i = nn), (u = new qn());
            } else u = t ? [] : c;
            e: for (; ++r < o; ) {
              var s = e[r],
                d = t ? t(s) : s;
              if (((s = n || 0 !== s ? s : 0), a && d == d)) {
                for (var f = u.length; f--; ) if (u[f] === d) continue e;
                t && u.push(d), c.push(s);
              } else i(u, d, n) || (u !== c && u.push(d), c.push(s));
            }
            return c;
          }
          function pi(e, t) {
            return null == (e = Ao(e, (t = Zi(t, e)))) || delete e[Xo(ra(t))];
          }
          function hi(e, t, n, r) {
            return ti(e, t, n(Nr(e, t)), r);
          }
          function gi(e, t, n, r) {
            for (
              var i = e.length, o = r ? i : -1;
              (r ? o-- : ++o < i) && t(e[o], o, e);

            );
            return n
              ? oi(e, r ? 0 : o, r ? o + 1 : i)
              : oi(e, r ? o + 1 : 0, r ? i : o);
          }
          function vi(e, t) {
            var n = e;
            return (
              n instanceof Hn && (n = n.value()),
              Vt(
                t,
                function (e, t) {
                  return t.func.apply(t.thisArg, Et([e], t.args));
                },
                n
              )
            );
          }
          function mi(e, t, r) {
            var i = e.length;
            if (i < 2) return i ? fi(e[0]) : [];
            for (var o = -1, a = n(i); ++o < i; )
              for (var c = e[o], u = -1; ++u < i; )
                u != o && (a[o] = fr(a[o] || c, e[u], t, r));
            return fi(_r(a, 1), t, r);
          }
          function _i(e, t, n) {
            for (var r = -1, i = e.length, a = t.length, c = {}; ++r < i; ) {
              var u = r < a ? t[r] : o;
              n(c, e[r], u);
            }
            return c;
          }
          function yi(e) {
            return ec(e) ? e : [];
          }
          function bi(e) {
            return "function" == typeof e ? e : su;
          }
          function Zi(e, t) {
            return Ja(e) ? e : xo(e, t) ? [e] : Wo(Tc(e));
          }
          var Ci = Qr;
          function wi(e, t, n) {
            var r = e.length;
            return (n = n === o ? r : n), !t && n >= r ? e : oi(e, t, n);
          }
          var Ni =
            nt ||
            function (e) {
              return gt.clearTimeout(e);
            };
          function Ti(e, t) {
            if (t) return e.slice();
            var n = e.length,
              r = He ? He(n) : new e.constructor(n);
            return e.copy(r), r;
          }
          function xi(e) {
            var t = new e.constructor(e.byteLength);
            return new Xe(t).set(new Xe(e)), t;
          }
          function Si(e, t) {
            var n = t ? xi(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length);
          }
          function Ii(e, t) {
            if (e !== t) {
              var n = e !== o,
                r = null === e,
                i = e == e,
                a = gc(e),
                c = t !== o,
                u = null === t,
                l = t == t,
                s = gc(t);
              if (
                (!u && !s && !a && e > t) ||
                (a && c && l && !u && !s) ||
                (r && c && l) ||
                (!n && l) ||
                !i
              )
                return 1;
              if (
                (!r && !a && !s && e < t) ||
                (s && n && i && !r && !a) ||
                (u && n && i) ||
                (!c && i) ||
                !l
              )
                return -1;
            }
            return 0;
          }
          function ki(e, t, r, i) {
            for (
              var o = -1,
                a = e.length,
                c = r.length,
                u = -1,
                l = t.length,
                s = bt(a - c, 0),
                d = n(l + s),
                f = !i;
              ++u < l;

            )
              d[u] = t[u];
            for (; ++o < c; ) (f || o < a) && (d[r[o]] = e[o]);
            for (; s--; ) d[u++] = e[o++];
            return d;
          }
          function Ri(e, t, r, i) {
            for (
              var o = -1,
                a = e.length,
                c = -1,
                u = r.length,
                l = -1,
                s = t.length,
                d = bt(a - u, 0),
                f = n(d + s),
                p = !i;
              ++o < d;

            )
              f[o] = e[o];
            for (var h = o; ++l < s; ) f[h + l] = t[l];
            for (; ++c < u; ) (p || o < a) && (f[h + r[c]] = e[o++]);
            return f;
          }
          function Di(e, t) {
            var r = -1,
              i = e.length;
            for (t || (t = n(i)); ++r < i; ) t[r] = e[r];
            return t;
          }
          function Fi(e, t, n, r) {
            var i = !n;
            n || (n = {});
            for (var a = -1, c = t.length; ++a < c; ) {
              var u = t[a],
                l = r ? r(n[u], e[u], u, n, e) : o;
              l === o && (l = e[u]), i ? ar(n, u, l) : nr(n, u, l);
            }
            return n;
          }
          function Pi(e, t) {
            return function (n, r) {
              var i = Ja(n) ? It : ir,
                o = t ? t() : {};
              return i(n, e, ho(r, 2), o);
            };
          }
          function Ai(e) {
            return Qr(function (t, n) {
              var r = -1,
                i = n.length,
                a = i > 1 ? n[i - 1] : o,
                c = i > 2 ? n[2] : o;
              for (
                a = e.length > 3 && "function" == typeof a ? (i--, a) : o,
                  c && To(n[0], n[1], c) && ((a = i < 3 ? o : a), (i = 1)),
                  t = xe(t);
                ++r < i;

              ) {
                var u = n[r];
                u && e(t, u, r, a);
              }
              return t;
            });
          }
          function Bi(e, t) {
            return function (n, r) {
              if (null == n) return n;
              if (!$a(n)) return e(n, r);
              for (
                var i = n.length, o = t ? i : -1, a = xe(n);
                (t ? o-- : ++o < i) && !1 !== r(a[o], o, a);

              );
              return n;
            };
          }
          function Ei(e) {
            return function (t, n, r) {
              for (var i = -1, o = xe(t), a = r(t), c = a.length; c--; ) {
                var u = a[e ? c : ++i];
                if (!1 === n(o[u], u, o)) break;
              }
              return t;
            };
          }
          function Vi(e) {
            return function (t) {
              var n = sn((t = Tc(t))) ? mn(t) : o,
                r = n ? n[0] : t.charAt(0),
                i = n ? wi(n, 1).join("") : t.slice(1);
              return r[e]() + i;
            };
          }
          function Li(e) {
            return function (t) {
              return Vt(iu(Kc(t).replace(et, "")), e, "");
            };
          }
          function Oi(e) {
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(t[0]);
                case 2:
                  return new e(t[0], t[1]);
                case 3:
                  return new e(t[0], t[1], t[2]);
                case 4:
                  return new e(t[0], t[1], t[2], t[3]);
                case 5:
                  return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
              }
              var n = Mn(e.prototype),
                r = e.apply(n, t);
              return cc(r) ? r : n;
            };
          }
          function zi(e, t, r) {
            var i = Oi(e);
            return function a() {
              for (var c = arguments.length, u = n(c), l = c, s = po(a); l--; )
                u[l] = arguments[l];
              var d = c < 3 && u[0] !== s && u[c - 1] !== s ? [] : hn(u, s);
              if ((c -= d.length) < r)
                return Ji(e, t, Wi, a.placeholder, o, u, d, o, o, r - c);
              var f = this && this !== gt && this instanceof a ? i : e;
              return St(f, this, u);
            };
          }
          function ji(e) {
            return function (t, n, r) {
              var i = xe(t);
              if (!$a(t)) {
                var a = ho(n, 3);
                (t = Lc(t)),
                  (n = function (e) {
                    return a(i[e], e, i);
                  });
              }
              var c = e(t, n, r);
              return c > -1 ? i[a ? t[c] : c] : o;
            };
          }
          function Mi(e) {
            return co(function (t) {
              var n = t.length,
                r = n,
                i = Xn.prototype.thru;
              for (e && t.reverse(); r--; ) {
                var c = t[r];
                if ("function" != typeof c) throw new ke(a);
                if (i && !u && "wrapper" == fo(c)) var u = new Xn([], !0);
              }
              for (r = u ? r : n; ++r < n; ) {
                var l = fo((c = t[r])),
                  s = "wrapper" == l ? so(c) : o;
                u =
                  s && So(s[0]) && 424 == s[1] && !s[4].length && 1 == s[9]
                    ? u[fo(s[0])].apply(u, s[3])
                    : 1 == c.length && So(c)
                    ? u[l]()
                    : u.thru(c);
              }
              return function () {
                var e = arguments,
                  r = e[0];
                if (u && 1 == e.length && Ja(r)) return u.plant(r).value();
                for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n; )
                  o = t[i].call(this, o);
                return o;
              };
            });
          }
          function Wi(e, t, r, i, a, c, u, l, s, d) {
            var p = t & f,
              h = 1 & t,
              g = 2 & t,
              v = 24 & t,
              m = 512 & t,
              _ = g ? o : Oi(e);
            return function o() {
              for (var f = arguments.length, y = n(f), b = f; b--; )
                y[b] = arguments[b];
              if (v)
                var Z = po(o),
                  C = an(y, Z);
              if (
                (i && (y = ki(y, i, a, v)),
                c && (y = Ri(y, c, u, v)),
                (f -= C),
                v && f < d)
              ) {
                var w = hn(y, Z);
                return Ji(e, t, Wi, o.placeholder, r, y, w, l, s, d - f);
              }
              var N = h ? r : this,
                T = g ? N[e] : e;
              return (
                (f = y.length),
                l ? (y = Bo(y, l)) : m && f > 1 && y.reverse(),
                p && s < f && (y.length = s),
                this && this !== gt && this instanceof o && (T = _ || Oi(T)),
                T.apply(N, y)
              );
            };
          }
          function Xi(e, t) {
            return function (n, r) {
              return (function (e, t, n, r) {
                return (
                  Zr(e, function (e, i, o) {
                    t(r, n(e), i, o);
                  }),
                  r
                );
              })(n, e, t(r), {});
            };
          }
          function Hi(e, t) {
            return function (n, r) {
              var i;
              if (n === o && r === o) return t;
              if ((n !== o && (i = n), r !== o)) {
                if (i === o) return r;
                "string" == typeof n || "string" == typeof r
                  ? ((n = di(n)), (r = di(r)))
                  : ((n = si(n)), (r = si(r))),
                  (i = e(n, r));
              }
              return i;
            };
          }
          function Gi(e) {
            return co(function (t) {
              return (
                (t = Bt(t, en(ho()))),
                Qr(function (n) {
                  var r = this;
                  return e(t, function (e) {
                    return St(e, r, n);
                  });
                })
              );
            });
          }
          function Ui(e, t) {
            var n = (t = t === o ? " " : di(t)).length;
            if (n < 2) return n ? Jr(t, e) : t;
            var r = Jr(t, ot(e / vn(t)));
            return sn(t) ? wi(mn(r), 0, e).join("") : r.slice(0, e);
          }
          function Yi(e, t, r, i) {
            var o = 1 & t,
              a = Oi(e);
            return function t() {
              for (
                var c = -1,
                  u = arguments.length,
                  l = -1,
                  s = i.length,
                  d = n(s + u),
                  f = this && this !== gt && this instanceof t ? a : e;
                ++l < s;

              )
                d[l] = i[l];
              for (; u--; ) d[l++] = arguments[++c];
              return St(f, o ? r : this, d);
            };
          }
          function qi(e) {
            return function (t, n, r) {
              return (
                r && "number" != typeof r && To(t, n, r) && (n = r = o),
                (t = bc(t)),
                n === o ? ((n = t), (t = 0)) : (n = bc(n)),
                Kr(t, n, (r = r === o ? (t < n ? 1 : -1) : bc(r)), e)
              );
            };
          }
          function Ki(e) {
            return function (t, n) {
              return (
                ("string" == typeof t && "string" == typeof n) ||
                  ((t = wc(t)), (n = wc(n))),
                e(t, n)
              );
            };
          }
          function Ji(e, t, n, r, i, a, c, u, l, f) {
            var p = 8 & t;
            (t |= p ? s : d), 4 & (t &= ~(p ? d : s)) || (t &= -4);
            var h = [
                e,
                t,
                i,
                p ? a : o,
                p ? c : o,
                p ? o : a,
                p ? o : c,
                u,
                l,
                f,
              ],
              g = n.apply(o, h);
            return So(e) && Vo(g, h), (g.placeholder = r), zo(g, e, t);
          }
          function Qi(e) {
            var t = Te[e];
            return function (e, n) {
              if (
                ((e = wc(e)), (n = null == n ? 0 : zt(Zc(n), 292)) && vt(e))
              ) {
                var r = (Tc(e) + "e").split("e");
                return +(
                  (r = (Tc(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] +
                  "e" +
                  (+r[1] - n)
                );
              }
              return t(e);
            };
          }
          var $i =
            In && 1 / gn(new In([, -0]))[1] == h
              ? function (e) {
                  return new In(e);
                }
              : gu;
          function eo(e) {
            return function (t) {
              var n = bo(t);
              return n == x
                ? fn(t)
                : n == D
                ? (function (e) {
                    var t = -1,
                      n = Array(e.size);
                    return (
                      e.forEach(function (e) {
                        n[++t] = [e, e];
                      }),
                      n
                    );
                  })(t)
                : (function (e, t) {
                    return Bt(t, function (t) {
                      return [t, e[t]];
                    });
                  })(t, e(t));
            };
          }
          function to(e, t, n, r, i, c, u, f) {
            var p = 2 & t;
            if (!p && "function" != typeof e) throw new ke(a);
            var h = r ? r.length : 0;
            if (
              (h || ((t &= -97), (r = i = o)),
              (u = u === o ? u : bt(Zc(u), 0)),
              (f = f === o ? f : Zc(f)),
              (h -= i ? i.length : 0),
              t & d)
            ) {
              var g = r,
                v = i;
              r = i = o;
            }
            var m = p ? o : so(e),
              _ = [e, t, n, r, i, g, v, c, u, f];
            if (
              (m && Fo(_, m),
              (e = _[0]),
              (t = _[1]),
              (n = _[2]),
              (r = _[3]),
              (i = _[4]),
              !(f = _[9] = _[9] === o ? (p ? 0 : e.length) : bt(_[9] - h, 0)) &&
                24 & t &&
                (t &= -25),
              t && 1 != t)
            )
              y =
                8 == t || t == l
                  ? zi(e, t, f)
                  : (t != s && 33 != t) || i.length
                  ? Wi.apply(o, _)
                  : Yi(e, t, n, r);
            else
              var y = (function (e, t, n) {
                var r = 1 & t,
                  i = Oi(e);
                return function t() {
                  var o = this && this !== gt && this instanceof t ? i : e;
                  return o.apply(r ? n : this, arguments);
                };
              })(e, t, n);
            return zo((m ? ni : Vo)(y, _), e, t);
          }
          function no(e, t, n, r) {
            return e === o || (Ua(e, Fe[n]) && !Be.call(r, n)) ? t : e;
          }
          function ro(e, t, n, r, i, a) {
            return (
              cc(e) && cc(t) && (a.set(t, e), Wr(e, t, o, ro, a), a.delete(t)),
              e
            );
          }
          function io(e) {
            return dc(e) ? o : e;
          }
          function oo(e, t, n, r, i, a) {
            var c = 1 & n,
              u = e.length,
              l = t.length;
            if (u != l && !(c && l > u)) return !1;
            var s = a.get(e),
              d = a.get(t);
            if (s && d) return s == t && d == e;
            var f = -1,
              p = !0,
              h = 2 & n ? new qn() : o;
            for (a.set(e, t), a.set(t, e); ++f < u; ) {
              var g = e[f],
                v = t[f];
              if (r) var m = c ? r(v, g, f, t, e, a) : r(g, v, f, e, t, a);
              if (m !== o) {
                if (m) continue;
                p = !1;
                break;
              }
              if (h) {
                if (
                  !Ot(t, function (e, t) {
                    if (!nn(h, t) && (g === e || i(g, e, n, r, a)))
                      return h.push(t);
                  })
                ) {
                  p = !1;
                  break;
                }
              } else if (g !== v && !i(g, v, n, r, a)) {
                p = !1;
                break;
              }
            }
            return a.delete(e), a.delete(t), p;
          }
          function ao(e, t, n, r, i, a) {
            var c = 1 & n,
              u = uo(e),
              l = u.length;
            if (l != uo(t).length && !c) return !1;
            for (var s = l; s--; ) {
              var d = u[s];
              if (!(c ? d in t : Be.call(t, d))) return !1;
            }
            var f = a.get(e),
              p = a.get(t);
            if (f && p) return f == t && p == e;
            var h = !0;
            a.set(e, t), a.set(t, e);
            for (var g = c; ++s < l; ) {
              var v = e[(d = u[s])],
                m = t[d];
              if (r) var _ = c ? r(m, v, d, t, e, a) : r(v, m, d, e, t, a);
              if (!(_ === o ? v === m || i(v, m, n, r, a) : _)) {
                h = !1;
                break;
              }
              g || (g = "constructor" == d);
            }
            if (h && !g) {
              var y = e.constructor,
                b = t.constructor;
              y == b ||
                !("constructor" in e) ||
                !("constructor" in t) ||
                ("function" == typeof y &&
                  y instanceof y &&
                  "function" == typeof b &&
                  b instanceof b) ||
                (h = !1);
            }
            return a.delete(e), a.delete(t), h;
          }
          function co(e) {
            return Oo(Po(e, o, Qo), e + "");
          }
          function uo(e) {
            return Tr(e, Lc, _o);
          }
          function lo(e) {
            return Tr(e, Oc, yo);
          }
          var so = Dn
            ? function (e) {
                return Dn.get(e);
              }
            : gu;
          function fo(e) {
            for (
              var t = e.name + "", n = Fn[t], r = Be.call(Fn, t) ? n.length : 0;
              r--;

            ) {
              var i = n[r],
                o = i.func;
              if (null == o || o == e) return i.name;
            }
            return t;
          }
          function po(e) {
            return (Be.call(jn, "placeholder") ? jn : e).placeholder;
          }
          function ho() {
            var e = jn.iteratee || du;
            return (
              (e = e === du ? Er : e),
              arguments.length ? e(arguments[0], arguments[1]) : e
            );
          }
          function go(e, t) {
            var n = e.__data__;
            return (function (e) {
              var t = i(e);
              return "string" == t ||
                "number" == t ||
                "symbol" == t ||
                "boolean" == t
                ? "__proto__" !== e
                : null === e;
            })(t)
              ? n["string" == typeof t ? "string" : "hash"]
              : n.map;
          }
          function vo(e) {
            for (var t = Lc(e), n = t.length; n--; ) {
              var r = t[n],
                i = e[r];
              t[n] = [r, i, Ro(i)];
            }
            return t;
          }
          function mo(e, t) {
            var n = (function (e, t) {
              return null == e ? o : e[t];
            })(e, t);
            return Br(n) ? n : o;
          }
          var _o = pt
              ? function (e) {
                  return null == e
                    ? []
                    : ((e = xe(e)),
                      Ft(pt(e), function (t) {
                        return Ye.call(e, t);
                      }));
                }
              : Cu,
            yo = pt
              ? function (e) {
                  for (var t = []; e; ) Et(t, _o(e)), (e = Ge(e));
                  return t;
                }
              : Cu,
            bo = xr;
          function Zo(e, t, n) {
            for (var r = -1, i = (t = Zi(t, e)).length, o = !1; ++r < i; ) {
              var a = Xo(t[r]);
              if (!(o = null != e && n(e, a))) break;
              e = e[a];
            }
            return o || ++r != i
              ? o
              : !!(i = null == e ? 0 : e.length) &&
                  ac(i) &&
                  No(a, i) &&
                  (Ja(e) || Ka(e));
          }
          function Co(e) {
            return "function" != typeof e.constructor || ko(e) ? {} : Mn(Ge(e));
          }
          function wo(e) {
            return Ja(e) || Ka(e) || !!(Ke && e && e[Ke]);
          }
          function No(e, t) {
            var n = i(e);
            return (
              !!(t = null == t ? g : t) &&
              ("number" == n || ("symbol" != n && Ze.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < t
            );
          }
          function To(e, t, n) {
            if (!cc(n)) return !1;
            var r = i(t);
            return (
              !!("number" == r
                ? $a(n) && No(t, n.length)
                : "string" == r && t in n) && Ua(n[t], e)
            );
          }
          function xo(e, t) {
            if (Ja(e)) return !1;
            var n = i(e);
            return (
              !(
                "number" != n &&
                "symbol" != n &&
                "boolean" != n &&
                null != e &&
                !gc(e)
              ) ||
              re.test(e) ||
              !ne.test(e) ||
              (null != t && e in xe(t))
            );
          }
          function So(e) {
            var t = fo(e),
              n = jn[t];
            if ("function" != typeof n || !(t in Hn.prototype)) return !1;
            if (e === n) return !0;
            var r = so(n);
            return !!r && e === r[0];
          }
          ((Tn && bo(new Tn(new ArrayBuffer(1))) != E) ||
            (xn && bo(new xn()) != x) ||
            (Sn && bo(Sn.resolve()) != k) ||
            (In && bo(new In()) != D) ||
            (kn && bo(new kn()) != A)) &&
            (bo = function (e) {
              var t = xr(e),
                n = t == I ? e.constructor : o,
                r = n ? Ho(n) : "";
              if (r)
                switch (r) {
                  case Pn:
                    return E;
                  case An:
                    return x;
                  case Bn:
                    return k;
                  case En:
                    return D;
                  case Vn:
                    return A;
                }
              return t;
            });
          var Io = Pe ? ic : wu;
          function ko(e) {
            var t = e && e.constructor;
            return e === (("function" == typeof t && t.prototype) || Fe);
          }
          function Ro(e) {
            return e == e && !cc(e);
          }
          function Do(e, t) {
            return function (n) {
              return null != n && n[e] === t && (t !== o || e in xe(n));
            };
          }
          function Fo(e, t) {
            var n = e[1],
              r = t[1],
              i = n | r,
              o = i < 131,
              a =
                (r == f && 8 == n) ||
                (r == f && n == p && e[7].length <= t[8]) ||
                (384 == r && t[7].length <= t[8] && 8 == n);
            if (!o && !a) return e;
            1 & r && ((e[2] = t[2]), (i |= 1 & n ? 0 : 4));
            var c = t[3];
            if (c) {
              var l = e[3];
              (e[3] = l ? ki(l, c, t[4]) : c), (e[4] = l ? hn(e[3], u) : t[4]);
            }
            return (
              (c = t[5]) &&
                ((l = e[5]),
                (e[5] = l ? Ri(l, c, t[6]) : c),
                (e[6] = l ? hn(e[5], u) : t[6])),
              (c = t[7]) && (e[7] = c),
              r & f && (e[8] = null == e[8] ? t[8] : zt(e[8], t[8])),
              null == e[9] && (e[9] = t[9]),
              (e[0] = t[0]),
              (e[1] = i),
              e
            );
          }
          function Po(e, t, r) {
            return (
              (t = bt(t === o ? e.length - 1 : t, 0)),
              function () {
                for (
                  var i = arguments, o = -1, a = bt(i.length - t, 0), c = n(a);
                  ++o < a;

                )
                  c[o] = i[t + o];
                o = -1;
                for (var u = n(t + 1); ++o < t; ) u[o] = i[o];
                return (u[t] = r(c)), St(e, this, u);
              }
            );
          }
          function Ao(e, t) {
            return t.length < 2 ? e : Nr(e, oi(t, 0, -1));
          }
          function Bo(e, t) {
            for (var n = e.length, r = zt(t.length, n), i = Di(e); r--; ) {
              var a = t[r];
              e[r] = No(a, n) ? i[a] : o;
            }
            return e;
          }
          function Eo(e, t) {
            if (
              ("constructor" !== t || "function" != typeof e[t]) &&
              "__proto__" != t
            )
              return e[t];
          }
          var Vo = jo(ni),
            Lo =
              it ||
              function (e, t) {
                return gt.setTimeout(e, t);
              },
            Oo = jo(ri);
          function zo(e, t, n) {
            var r = t + "";
            return Oo(
              e,
              (function (e, t) {
                var n = t.length;
                if (!n) return e;
                var r = n - 1;
                return (
                  (t[r] = (n > 1 ? "& " : "") + t[r]),
                  (t = t.join(n > 2 ? ", " : " ")),
                  e.replace(le, "{\n/* [wrapped with " + t + "] */\n")
                );
              })(
                r,
                (function (e, t) {
                  return (
                    kt(_, function (n) {
                      var r = "_." + n[0];
                      t & n[1] && !Pt(e, r) && e.push(r);
                    }),
                    e.sort()
                  );
                })(
                  (function (e) {
                    var t = e.match(se);
                    return t ? t[1].split(de) : [];
                  })(r),
                  n
                )
              )
            );
          }
          function jo(e) {
            var t = 0,
              n = 0;
            return function () {
              var r = qt(),
                i = 16 - (r - n);
              if (((n = r), i > 0)) {
                if (++t >= 800) return arguments[0];
              } else t = 0;
              return e.apply(o, arguments);
            };
          }
          function Mo(e, t) {
            var n = -1,
              r = e.length,
              i = r - 1;
            for (t = t === o ? r : t; ++n < t; ) {
              var a = qr(n, i),
                c = e[a];
              (e[a] = e[n]), (e[n] = c);
            }
            return (e.length = t), e;
          }
          var Wo = (function (e) {
            var t = ja(e, function (e) {
                return 500 === n.size && n.clear(), e;
              }),
              n = t.cache;
            return t;
          })(function (e) {
            var t = [];
            return (
              46 === e.charCodeAt(0) && t.push(""),
              e.replace(ie, function (e, n, r, i) {
                t.push(r ? i.replace(he, "$1") : n || e);
              }),
              t
            );
          });
          function Xo(e) {
            if ("string" == typeof e || gc(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -h ? "-0" : t;
          }
          function Ho(e) {
            if (null != e) {
              try {
                return Ae.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          }
          function Go(e) {
            if (e instanceof Hn) return e.clone();
            var t = new Xn(e.__wrapped__, e.__chain__);
            return (
              (t.__actions__ = Di(e.__actions__)),
              (t.__index__ = e.__index__),
              (t.__values__ = e.__values__),
              t
            );
          }
          var Uo = Qr(function (e, t) {
              return ec(e) ? fr(e, _r(t, 1, ec, !0)) : [];
            }),
            Yo = Qr(function (e, t) {
              var n = ra(t);
              return (
                ec(n) && (n = o), ec(e) ? fr(e, _r(t, 1, ec, !0), ho(n, 2)) : []
              );
            }),
            qo = Qr(function (e, t) {
              var n = ra(t);
              return (
                ec(n) && (n = o), ec(e) ? fr(e, _r(t, 1, ec, !0), o, n) : []
              );
            });
          function Ko(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var i = null == n ? 0 : Zc(n);
            return i < 0 && (i = bt(r + i, 0)), Wt(e, ho(t, 3), i);
          }
          function Jo(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var i = r - 1;
            return (
              n !== o &&
                ((i = Zc(n)), (i = n < 0 ? bt(r + i, 0) : zt(i, r - 1))),
              Wt(e, ho(t, 3), i, !0)
            );
          }
          function Qo(e) {
            return null != e && e.length ? _r(e, 1) : [];
          }
          function $o(e) {
            return e && e.length ? e[0] : o;
          }
          var ea = Qr(function (e) {
              var t = Bt(e, yi);
              return t.length && t[0] === e[0] ? Rr(t) : [];
            }),
            ta = Qr(function (e) {
              var t = ra(e),
                n = Bt(e, yi);
              return (
                t === ra(n) ? (t = o) : n.pop(),
                n.length && n[0] === e[0] ? Rr(n, ho(t, 2)) : []
              );
            }),
            na = Qr(function (e) {
              var t = ra(e),
                n = Bt(e, yi);
              return (
                (t = "function" == typeof t ? t : o) && n.pop(),
                n.length && n[0] === e[0] ? Rr(n, o, t) : []
              );
            });
          function ra(e) {
            var t = null == e ? 0 : e.length;
            return t ? e[t - 1] : o;
          }
          var ia = Qr(oa);
          function oa(e, t) {
            return e && e.length && t && t.length ? Ur(e, t) : e;
          }
          var aa = co(function (e, t) {
            var n = null == e ? 0 : e.length,
              r = cr(e, t);
            return (
              Yr(
                e,
                Bt(t, function (e) {
                  return No(e, n) ? +e : e;
                }).sort(Ii)
              ),
              r
            );
          });
          function ca(e) {
            return null == e ? e : Nn.call(e);
          }
          var ua = Qr(function (e) {
              return fi(_r(e, 1, ec, !0));
            }),
            la = Qr(function (e) {
              var t = ra(e);
              return ec(t) && (t = o), fi(_r(e, 1, ec, !0), ho(t, 2));
            }),
            sa = Qr(function (e) {
              var t = ra(e);
              return (
                (t = "function" == typeof t ? t : o), fi(_r(e, 1, ec, !0), o, t)
              );
            });
          function da(e) {
            if (!e || !e.length) return [];
            var t = 0;
            return (
              (e = Ft(e, function (e) {
                if (ec(e)) return (t = bt(e.length, t)), !0;
              })),
              Qt(t, function (t) {
                return Bt(e, Yt(t));
              })
            );
          }
          function fa(e, t) {
            if (!e || !e.length) return [];
            var n = da(e);
            return null == t
              ? n
              : Bt(n, function (e) {
                  return St(t, o, e);
                });
          }
          var pa = Qr(function (e, t) {
              return ec(e) ? fr(e, t) : [];
            }),
            ha = Qr(function (e) {
              return mi(Ft(e, ec));
            }),
            ga = Qr(function (e) {
              var t = ra(e);
              return ec(t) && (t = o), mi(Ft(e, ec), ho(t, 2));
            }),
            va = Qr(function (e) {
              var t = ra(e);
              return (t = "function" == typeof t ? t : o), mi(Ft(e, ec), o, t);
            }),
            ma = Qr(da),
            _a = Qr(function (e) {
              var t = e.length,
                n = t > 1 ? e[t - 1] : o;
              return (n = "function" == typeof n ? (e.pop(), n) : o), fa(e, n);
            });
          function ya(e) {
            var t = jn(e);
            return (t.__chain__ = !0), t;
          }
          function ba(e, t) {
            return t(e);
          }
          var Za = co(function (e) {
              var t = e.length,
                n = t ? e[0] : 0,
                r = this.__wrapped__,
                i = function (t) {
                  return cr(t, e);
                };
              return !(t > 1 || this.__actions__.length) &&
                r instanceof Hn &&
                No(n)
                ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                    func: ba,
                    args: [i],
                    thisArg: o,
                  }),
                  new Xn(r, this.__chain__).thru(function (e) {
                    return t && !e.length && e.push(o), e;
                  }))
                : this.thru(i);
            }),
            Ca = Pi(function (e, t, n) {
              Be.call(e, n) ? ++e[n] : ar(e, n, 1);
            }),
            wa = ji(Ko),
            Na = ji(Jo);
          function Ta(e, t) {
            return (Ja(e) ? kt : pr)(e, ho(t, 3));
          }
          function xa(e, t) {
            return (Ja(e) ? Rt : hr)(e, ho(t, 3));
          }
          var Sa = Pi(function (e, t, n) {
              Be.call(e, n) ? e[n].push(t) : ar(e, n, [t]);
            }),
            Ia = Qr(function (e, t, r) {
              var i = -1,
                o = "function" == typeof t,
                a = $a(e) ? n(e.length) : [];
              return (
                pr(e, function (e) {
                  a[++i] = o ? St(t, e, r) : Dr(e, t, r);
                }),
                a
              );
            }),
            ka = Pi(function (e, t, n) {
              ar(e, n, t);
            });
          function Ra(e, t) {
            return (Ja(e) ? Bt : zr)(e, ho(t, 3));
          }
          var Da = Pi(
              function (e, t, n) {
                e[n ? 0 : 1].push(t);
              },
              function () {
                return [[], []];
              }
            ),
            Fa = Qr(function (e, t) {
              if (null == e) return [];
              var n = t.length;
              return (
                n > 1 && To(e, t[0], t[1])
                  ? (t = [])
                  : n > 2 && To(t[0], t[1], t[2]) && (t = [t[0]]),
                Hr(e, _r(t, 1), [])
              );
            }),
            Pa =
              rt ||
              function () {
                return gt.Date.now();
              };
          function Aa(e, t, n) {
            return (
              (t = n ? o : t),
              (t = e && null == t ? e.length : t),
              to(e, f, o, o, o, o, t)
            );
          }
          function Ba(e, t) {
            var n;
            if ("function" != typeof t) throw new ke(a);
            return (
              (e = Zc(e)),
              function () {
                return (
                  --e > 0 && (n = t.apply(this, arguments)),
                  e <= 1 && (t = o),
                  n
                );
              }
            );
          }
          var Ea = Qr(function (e, t, n) {
              var r = 1;
              if (n.length) {
                var i = hn(n, po(Ea));
                r |= s;
              }
              return to(e, r, t, n, i);
            }),
            Va = Qr(function (e, t, n) {
              var r = 3;
              if (n.length) {
                var i = hn(n, po(Va));
                r |= s;
              }
              return to(t, r, e, n, i);
            });
          function La(e, t, n) {
            var r,
              i,
              c,
              u,
              l,
              s,
              d = 0,
              f = !1,
              p = !1,
              h = !0;
            if ("function" != typeof e) throw new ke(a);
            function g(t) {
              var n = r,
                a = i;
              return (r = i = o), (d = t), (u = e.apply(a, n));
            }
            function v(e) {
              return (d = e), (l = Lo(_, t)), f ? g(e) : u;
            }
            function m(e) {
              var n = e - s;
              return s === o || n >= t || n < 0 || (p && e - d >= c);
            }
            function _() {
              var e = Pa();
              if (m(e)) return y(e);
              l = Lo(
                _,
                (function (e) {
                  var n = t - (e - s);
                  return p ? zt(n, c - (e - d)) : n;
                })(e)
              );
            }
            function y(e) {
              return (l = o), h && r ? g(e) : ((r = i = o), u);
            }
            function b() {
              var e = Pa(),
                n = m(e);
              if (((r = arguments), (i = this), (s = e), n)) {
                if (l === o) return v(s);
                if (p) return Ni(l), (l = Lo(_, t)), g(s);
              }
              return l === o && (l = Lo(_, t)), u;
            }
            return (
              (t = wc(t) || 0),
              cc(n) &&
                ((f = !!n.leading),
                (c = (p = "maxWait" in n) ? bt(wc(n.maxWait) || 0, t) : c),
                (h = "trailing" in n ? !!n.trailing : h)),
              (b.cancel = function () {
                l !== o && Ni(l), (d = 0), (r = s = i = l = o);
              }),
              (b.flush = function () {
                return l === o ? u : y(Pa());
              }),
              b
            );
          }
          var Oa = Qr(function (e, t) {
              return dr(e, 1, t);
            }),
            za = Qr(function (e, t, n) {
              return dr(e, wc(t) || 0, n);
            });
          function ja(e, t) {
            if ("function" != typeof e || (null != t && "function" != typeof t))
              throw new ke(a);
            var n = function n() {
              var r = arguments,
                i = t ? t.apply(this, r) : r[0],
                o = n.cache;
              if (o.has(i)) return o.get(i);
              var a = e.apply(this, r);
              return (n.cache = o.set(i, a) || o), a;
            };
            return (n.cache = new (ja.Cache || Yn)()), n;
          }
          function Ma(e) {
            if ("function" != typeof e) throw new ke(a);
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return !e.call(this);
                case 1:
                  return !e.call(this, t[0]);
                case 2:
                  return !e.call(this, t[0], t[1]);
                case 3:
                  return !e.call(this, t[0], t[1], t[2]);
              }
              return !e.apply(this, t);
            };
          }
          ja.Cache = Yn;
          var Wa = Ci(function (e, t) {
              var n = (t =
                1 == t.length && Ja(t[0])
                  ? Bt(t[0], en(ho()))
                  : Bt(_r(t, 1), en(ho()))).length;
              return Qr(function (r) {
                for (var i = -1, o = zt(r.length, n); ++i < o; )
                  r[i] = t[i].call(this, r[i]);
                return St(e, this, r);
              });
            }),
            Xa = Qr(function (e, t) {
              var n = hn(t, po(Xa));
              return to(e, s, o, t, n);
            }),
            Ha = Qr(function (e, t) {
              var n = hn(t, po(Ha));
              return to(e, d, o, t, n);
            }),
            Ga = co(function (e, t) {
              return to(e, p, o, o, o, t);
            });
          function Ua(e, t) {
            return e === t || (e != e && t != t);
          }
          var Ya = Ki(Sr),
            qa = Ki(function (e, t) {
              return e >= t;
            }),
            Ka = Fr(
              (function () {
                return arguments;
              })()
            )
              ? Fr
              : function (e) {
                  return uc(e) && Be.call(e, "callee") && !Ye.call(e, "callee");
                },
            Ja = n.isArray,
            Qa = Zt
              ? en(Zt)
              : function (e) {
                  return uc(e) && xr(e) == B;
                };
          function $a(e) {
            return null != e && ac(e.length) && !ic(e);
          }
          function ec(e) {
            return uc(e) && $a(e);
          }
          var tc = ht || wu,
            nc = Ct
              ? en(Ct)
              : function (e) {
                  return uc(e) && xr(e) == C;
                };
          function rc(e) {
            if (!uc(e)) return !1;
            var t = xr(e);
            return (
              t == w ||
              "[object DOMException]" == t ||
              ("string" == typeof e.message &&
                "string" == typeof e.name &&
                !dc(e))
            );
          }
          function ic(e) {
            if (!cc(e)) return !1;
            var t = xr(e);
            return (
              t == N ||
              t == T ||
              "[object AsyncFunction]" == t ||
              "[object Proxy]" == t
            );
          }
          function oc(e) {
            return "number" == typeof e && e == Zc(e);
          }
          function ac(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= g;
          }
          function cc(e) {
            var t = i(e);
            return null != e && ("object" == t || "function" == t);
          }
          function uc(e) {
            return null != e && "object" == i(e);
          }
          var lc = wt
            ? en(wt)
            : function (e) {
                return uc(e) && bo(e) == x;
              };
          function sc(e) {
            return "number" == typeof e || (uc(e) && xr(e) == S);
          }
          function dc(e) {
            if (!uc(e) || xr(e) != I) return !1;
            var t = Ge(e);
            if (null === t) return !0;
            var n = Be.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && Ae.call(n) == Oe;
          }
          var fc = Nt
              ? en(Nt)
              : function (e) {
                  return uc(e) && xr(e) == R;
                },
            pc = Tt
              ? en(Tt)
              : function (e) {
                  return uc(e) && bo(e) == D;
                };
          function hc(e) {
            return "string" == typeof e || (!Ja(e) && uc(e) && xr(e) == F);
          }
          function gc(e) {
            return "symbol" == i(e) || (uc(e) && xr(e) == P);
          }
          var vc = xt
              ? en(xt)
              : function (e) {
                  return uc(e) && ac(e.length) && !!ut[xr(e)];
                },
            mc = Ki(Or),
            _c = Ki(function (e, t) {
              return e <= t;
            });
          function yc(e) {
            if (!e) return [];
            if ($a(e)) return hc(e) ? mn(e) : Di(e);
            if (Je && e[Je])
              return (function (e) {
                for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                return n;
              })(e[Je]());
            var t = bo(e);
            return (t == x ? fn : t == D ? gn : Uc)(e);
          }
          function bc(e) {
            return e
              ? (e = wc(e)) === h || e === -h
                ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                : e == e
                ? e
                : 0
              : 0 === e
              ? e
              : 0;
          }
          function Zc(e) {
            var t = bc(e),
              n = t % 1;
            return t == t ? (n ? t - n : t) : 0;
          }
          function Cc(e) {
            return e ? ur(Zc(e), 0, m) : 0;
          }
          function wc(e) {
            if ("number" == typeof e) return e;
            if (gc(e)) return v;
            if (cc(e)) {
              var t = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = cc(t) ? t + "" : t;
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = $t(e);
            var n = _e.test(e);
            return n || be.test(e)
              ? ft(e.slice(2), n ? 2 : 8)
              : me.test(e)
              ? v
              : +e;
          }
          function Nc(e) {
            return Fi(e, Oc(e));
          }
          function Tc(e) {
            return null == e ? "" : di(e);
          }
          var xc = Ai(function (e, t) {
              if (ko(t) || $a(t)) Fi(t, Lc(t), e);
              else for (var n in t) Be.call(t, n) && nr(e, n, t[n]);
            }),
            Sc = Ai(function (e, t) {
              Fi(t, Oc(t), e);
            }),
            Ic = Ai(function (e, t, n, r) {
              Fi(t, Oc(t), e, r);
            }),
            kc = Ai(function (e, t, n, r) {
              Fi(t, Lc(t), e, r);
            }),
            Rc = co(cr),
            Dc = Qr(function (e, t) {
              e = xe(e);
              var n = -1,
                r = t.length,
                i = r > 2 ? t[2] : o;
              for (i && To(t[0], t[1], i) && (r = 1); ++n < r; )
                for (var a = t[n], c = Oc(a), u = -1, l = c.length; ++u < l; ) {
                  var s = c[u],
                    d = e[s];
                  (d === o || (Ua(d, Fe[s]) && !Be.call(e, s))) &&
                    (e[s] = a[s]);
                }
              return e;
            }),
            Fc = Qr(function (e) {
              return e.push(o, ro), St(jc, o, e);
            });
          function Pc(e, t, n) {
            var r = null == e ? o : Nr(e, t);
            return r === o ? n : r;
          }
          function Ac(e, t) {
            return null != e && Zo(e, t, kr);
          }
          var Bc = Xi(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = Le.call(t)),
                (e[t] = n);
            }, cu(su)),
            Ec = Xi(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = Le.call(t)),
                Be.call(e, t) ? e[t].push(n) : (e[t] = [n]);
            }, ho),
            Vc = Qr(Dr);
          function Lc(e) {
            return $a(e) ? Jn(e) : Vr(e);
          }
          function Oc(e) {
            return $a(e) ? Jn(e, !0) : Lr(e);
          }
          var zc = Ai(function (e, t, n) {
              Wr(e, t, n);
            }),
            jc = Ai(function (e, t, n, r) {
              Wr(e, t, n, r);
            }),
            Mc = co(function (e, t) {
              var n = {};
              if (null == e) return n;
              var r = !1;
              (t = Bt(t, function (t) {
                return (t = Zi(t, e)), r || (r = t.length > 1), t;
              })),
                Fi(e, lo(e), n),
                r && (n = lr(n, 7, io));
              for (var i = t.length; i--; ) pi(n, t[i]);
              return n;
            }),
            Wc = co(function (e, t) {
              return null == e
                ? {}
                : (function (e, t) {
                    return Gr(e, t, function (t, n) {
                      return Ac(e, n);
                    });
                  })(e, t);
            });
          function Xc(e, t) {
            if (null == e) return {};
            var n = Bt(lo(e), function (e) {
              return [e];
            });
            return (
              (t = ho(t)),
              Gr(e, n, function (e, n) {
                return t(e, n[0]);
              })
            );
          }
          var Hc = eo(Lc),
            Gc = eo(Oc);
          function Uc(e) {
            return null == e ? [] : tn(e, Lc(e));
          }
          var Yc = Li(function (e, t, n) {
            return (t = t.toLowerCase()), e + (n ? qc(t) : t);
          });
          function qc(e) {
            return ru(Tc(e).toLowerCase());
          }
          function Kc(e) {
            return (e = Tc(e)) && e.replace(Ce, cn).replace(tt, "");
          }
          var Jc = Li(function (e, t, n) {
              return e + (n ? "-" : "") + t.toLowerCase();
            }),
            Qc = Li(function (e, t, n) {
              return e + (n ? " " : "") + t.toLowerCase();
            }),
            $c = Vi("toLowerCase"),
            eu = Li(function (e, t, n) {
              return e + (n ? "_" : "") + t.toLowerCase();
            }),
            tu = Li(function (e, t, n) {
              return e + (n ? " " : "") + ru(t);
            }),
            nu = Li(function (e, t, n) {
              return e + (n ? " " : "") + t.toUpperCase();
            }),
            ru = Vi("toUpperCase");
          function iu(e, t, n) {
            return (
              (e = Tc(e)),
              (t = n ? o : t) === o ? (dn(e) ? bn(e) : jt(e)) : e.match(t) || []
            );
          }
          var ou = Qr(function (e, t) {
              try {
                return St(e, o, t);
              } catch (e) {
                return rc(e) ? e : new ue(e);
              }
            }),
            au = co(function (e, t) {
              return (
                kt(t, function (t) {
                  (t = Xo(t)), ar(e, t, Ea(e[t], e));
                }),
                e
              );
            });
          function cu(e) {
            return function () {
              return e;
            };
          }
          var uu = Mi(),
            lu = Mi(!0);
          function su(e) {
            return e;
          }
          function du(e) {
            return Er("function" == typeof e ? e : lr(e, 1));
          }
          var fu = Qr(function (e, t) {
              return function (n) {
                return Dr(n, e, t);
              };
            }),
            pu = Qr(function (e, t) {
              return function (n) {
                return Dr(e, n, t);
              };
            });
          function hu(e, t, n) {
            var r = Lc(t),
              i = wr(t, r);
            null != n ||
              (cc(t) && (i.length || !r.length)) ||
              ((n = t), (t = e), (e = this), (i = wr(t, Lc(t))));
            var o = !(cc(n) && "chain" in n && !n.chain),
              a = ic(e);
            return (
              kt(i, function (n) {
                var r = t[n];
                (e[n] = r),
                  a &&
                    (e.prototype[n] = function () {
                      var t = this.__chain__;
                      if (o || t) {
                        var n = e(this.__wrapped__),
                          i = (n.__actions__ = Di(this.__actions__));
                        return (
                          i.push({ func: r, args: arguments, thisArg: e }),
                          (n.__chain__ = t),
                          n
                        );
                      }
                      return r.apply(e, Et([this.value()], arguments));
                    });
              }),
              e
            );
          }
          function gu() {}
          var vu = Gi(Bt),
            mu = Gi(Dt),
            _u = Gi(Ot);
          function yu(e) {
            return xo(e)
              ? Yt(Xo(e))
              : (function (e) {
                  return function (t) {
                    return Nr(t, e);
                  };
                })(e);
          }
          var bu = qi(),
            Zu = qi(!0);
          function Cu() {
            return [];
          }
          function wu() {
            return !1;
          }
          var Nu = Hi(function (e, t) {
              return e + t;
            }, 0),
            Tu = Qi("ceil"),
            xu = Hi(function (e, t) {
              return e / t;
            }, 1),
            Su = Qi("floor"),
            Iu = Hi(function (e, t) {
              return e * t;
            }, 1),
            ku = Qi("round"),
            Ru = Hi(function (e, t) {
              return e - t;
            }, 0);
          return (
            (jn.after = function (e, t) {
              if ("function" != typeof t) throw new ke(a);
              return (
                (e = Zc(e)),
                function () {
                  if (--e < 1) return t.apply(this, arguments);
                }
              );
            }),
            (jn.ary = Aa),
            (jn.assign = xc),
            (jn.assignIn = Sc),
            (jn.assignInWith = Ic),
            (jn.assignWith = kc),
            (jn.at = Rc),
            (jn.before = Ba),
            (jn.bind = Ea),
            (jn.bindAll = au),
            (jn.bindKey = Va),
            (jn.castArray = function () {
              if (!arguments.length) return [];
              var e = arguments[0];
              return Ja(e) ? e : [e];
            }),
            (jn.chain = ya),
            (jn.chunk = function (e, t, r) {
              t = (r ? To(e, t, r) : t === o) ? 1 : bt(Zc(t), 0);
              var i = null == e ? 0 : e.length;
              if (!i || t < 1) return [];
              for (var a = 0, c = 0, u = n(ot(i / t)); a < i; )
                u[c++] = oi(e, a, (a += t));
              return u;
            }),
            (jn.compact = function (e) {
              for (
                var t = -1, n = null == e ? 0 : e.length, r = 0, i = [];
                ++t < n;

              ) {
                var o = e[t];
                o && (i[r++] = o);
              }
              return i;
            }),
            (jn.concat = function () {
              var e = arguments.length;
              if (!e) return [];
              for (var t = n(e - 1), r = arguments[0], i = e; i--; )
                t[i - 1] = arguments[i];
              return Et(Ja(r) ? Di(r) : [r], _r(t, 1));
            }),
            (jn.cond = function (e) {
              var t = null == e ? 0 : e.length,
                n = ho();
              return (
                (e = t
                  ? Bt(e, function (e) {
                      if ("function" != typeof e[1]) throw new ke(a);
                      return [n(e[0]), e[1]];
                    })
                  : []),
                Qr(function (n) {
                  for (var r = -1; ++r < t; ) {
                    var i = e[r];
                    if (St(i[0], this, n)) return St(i[1], this, n);
                  }
                })
              );
            }),
            (jn.conforms = function (e) {
              return (function (e) {
                var t = Lc(e);
                return function (n) {
                  return sr(n, e, t);
                };
              })(lr(e, 1));
            }),
            (jn.constant = cu),
            (jn.countBy = Ca),
            (jn.create = function (e, t) {
              var n = Mn(e);
              return null == t ? n : or(n, t);
            }),
            (jn.curry = function e(t, n, r) {
              var i = to(t, 8, o, o, o, o, o, (n = r ? o : n));
              return (i.placeholder = e.placeholder), i;
            }),
            (jn.curryRight = function e(t, n, r) {
              var i = to(t, l, o, o, o, o, o, (n = r ? o : n));
              return (i.placeholder = e.placeholder), i;
            }),
            (jn.debounce = La),
            (jn.defaults = Dc),
            (jn.defaultsDeep = Fc),
            (jn.defer = Oa),
            (jn.delay = za),
            (jn.difference = Uo),
            (jn.differenceBy = Yo),
            (jn.differenceWith = qo),
            (jn.drop = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r
                ? oi(e, (t = n || t === o ? 1 : Zc(t)) < 0 ? 0 : t, r)
                : [];
            }),
            (jn.dropRight = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r
                ? oi(e, 0, (t = r - (t = n || t === o ? 1 : Zc(t))) < 0 ? 0 : t)
                : [];
            }),
            (jn.dropRightWhile = function (e, t) {
              return e && e.length ? gi(e, ho(t, 3), !0, !0) : [];
            }),
            (jn.dropWhile = function (e, t) {
              return e && e.length ? gi(e, ho(t, 3), !0) : [];
            }),
            (jn.fill = function (e, t, n, r) {
              var i = null == e ? 0 : e.length;
              return i
                ? (n &&
                    "number" != typeof n &&
                    To(e, t, n) &&
                    ((n = 0), (r = i)),
                  (function (e, t, n, r) {
                    var i = e.length;
                    for (
                      (n = Zc(n)) < 0 && (n = -n > i ? 0 : i + n),
                        (r = r === o || r > i ? i : Zc(r)) < 0 && (r += i),
                        r = n > r ? 0 : Cc(r);
                      n < r;

                    )
                      e[n++] = t;
                    return e;
                  })(e, t, n, r))
                : [];
            }),
            (jn.filter = function (e, t) {
              return (Ja(e) ? Ft : mr)(e, ho(t, 3));
            }),
            (jn.flatMap = function (e, t) {
              return _r(Ra(e, t), 1);
            }),
            (jn.flatMapDeep = function (e, t) {
              return _r(Ra(e, t), h);
            }),
            (jn.flatMapDepth = function (e, t, n) {
              return (n = n === o ? 1 : Zc(n)), _r(Ra(e, t), n);
            }),
            (jn.flatten = Qo),
            (jn.flattenDeep = function (e) {
              return null != e && e.length ? _r(e, h) : [];
            }),
            (jn.flattenDepth = function (e, t) {
              return null != e && e.length
                ? _r(e, (t = t === o ? 1 : Zc(t)))
                : [];
            }),
            (jn.flip = function (e) {
              return to(e, 512);
            }),
            (jn.flow = uu),
            (jn.flowRight = lu),
            (jn.fromPairs = function (e) {
              for (
                var t = -1, n = null == e ? 0 : e.length, r = {};
                ++t < n;

              ) {
                var i = e[t];
                r[i[0]] = i[1];
              }
              return r;
            }),
            (jn.functions = function (e) {
              return null == e ? [] : wr(e, Lc(e));
            }),
            (jn.functionsIn = function (e) {
              return null == e ? [] : wr(e, Oc(e));
            }),
            (jn.groupBy = Sa),
            (jn.initial = function (e) {
              return null != e && e.length ? oi(e, 0, -1) : [];
            }),
            (jn.intersection = ea),
            (jn.intersectionBy = ta),
            (jn.intersectionWith = na),
            (jn.invert = Bc),
            (jn.invertBy = Ec),
            (jn.invokeMap = Ia),
            (jn.iteratee = du),
            (jn.keyBy = ka),
            (jn.keys = Lc),
            (jn.keysIn = Oc),
            (jn.map = Ra),
            (jn.mapKeys = function (e, t) {
              var n = {};
              return (
                (t = ho(t, 3)),
                Zr(e, function (e, r, i) {
                  ar(n, t(e, r, i), e);
                }),
                n
              );
            }),
            (jn.mapValues = function (e, t) {
              var n = {};
              return (
                (t = ho(t, 3)),
                Zr(e, function (e, r, i) {
                  ar(n, r, t(e, r, i));
                }),
                n
              );
            }),
            (jn.matches = function (e) {
              return jr(lr(e, 1));
            }),
            (jn.matchesProperty = function (e, t) {
              return Mr(e, lr(t, 1));
            }),
            (jn.memoize = ja),
            (jn.merge = zc),
            (jn.mergeWith = jc),
            (jn.method = fu),
            (jn.methodOf = pu),
            (jn.mixin = hu),
            (jn.negate = Ma),
            (jn.nthArg = function (e) {
              return (
                (e = Zc(e)),
                Qr(function (t) {
                  return Xr(t, e);
                })
              );
            }),
            (jn.omit = Mc),
            (jn.omitBy = function (e, t) {
              return Xc(e, Ma(ho(t)));
            }),
            (jn.once = function (e) {
              return Ba(2, e);
            }),
            (jn.orderBy = function (e, t, n, r) {
              return null == e
                ? []
                : (Ja(t) || (t = null == t ? [] : [t]),
                  Ja((n = r ? o : n)) || (n = null == n ? [] : [n]),
                  Hr(e, t, n));
            }),
            (jn.over = vu),
            (jn.overArgs = Wa),
            (jn.overEvery = mu),
            (jn.overSome = _u),
            (jn.partial = Xa),
            (jn.partialRight = Ha),
            (jn.partition = Da),
            (jn.pick = Wc),
            (jn.pickBy = Xc),
            (jn.property = yu),
            (jn.propertyOf = function (e) {
              return function (t) {
                return null == e ? o : Nr(e, t);
              };
            }),
            (jn.pull = ia),
            (jn.pullAll = oa),
            (jn.pullAllBy = function (e, t, n) {
              return e && e.length && t && t.length ? Ur(e, t, ho(n, 2)) : e;
            }),
            (jn.pullAllWith = function (e, t, n) {
              return e && e.length && t && t.length ? Ur(e, t, o, n) : e;
            }),
            (jn.pullAt = aa),
            (jn.range = bu),
            (jn.rangeRight = Zu),
            (jn.rearg = Ga),
            (jn.reject = function (e, t) {
              return (Ja(e) ? Ft : mr)(e, Ma(ho(t, 3)));
            }),
            (jn.remove = function (e, t) {
              var n = [];
              if (!e || !e.length) return n;
              var r = -1,
                i = [],
                o = e.length;
              for (t = ho(t, 3); ++r < o; ) {
                var a = e[r];
                t(a, r, e) && (n.push(a), i.push(r));
              }
              return Yr(e, i), n;
            }),
            (jn.rest = function (e, t) {
              if ("function" != typeof e) throw new ke(a);
              return Qr(e, (t = t === o ? t : Zc(t)));
            }),
            (jn.reverse = ca),
            (jn.sampleSize = function (e, t, n) {
              return (
                (t = (n ? To(e, t, n) : t === o) ? 1 : Zc(t)),
                (Ja(e) ? $n : ei)(e, t)
              );
            }),
            (jn.set = function (e, t, n) {
              return null == e ? e : ti(e, t, n);
            }),
            (jn.setWith = function (e, t, n, r) {
              return (
                (r = "function" == typeof r ? r : o),
                null == e ? e : ti(e, t, n, r)
              );
            }),
            (jn.shuffle = function (e) {
              return (Ja(e) ? er : ii)(e);
            }),
            (jn.slice = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r
                ? (n && "number" != typeof n && To(e, t, n)
                    ? ((t = 0), (n = r))
                    : ((t = null == t ? 0 : Zc(t)), (n = n === o ? r : Zc(n))),
                  oi(e, t, n))
                : [];
            }),
            (jn.sortBy = Fa),
            (jn.sortedUniq = function (e) {
              return e && e.length ? li(e) : [];
            }),
            (jn.sortedUniqBy = function (e, t) {
              return e && e.length ? li(e, ho(t, 2)) : [];
            }),
            (jn.split = function (e, t, n) {
              return (
                n && "number" != typeof n && To(e, t, n) && (t = n = o),
                (n = n === o ? m : n >>> 0)
                  ? (e = Tc(e)) &&
                    ("string" == typeof t || (null != t && !fc(t))) &&
                    !(t = di(t)) &&
                    sn(e)
                    ? wi(mn(e), 0, n)
                    : e.split(t, n)
                  : []
              );
            }),
            (jn.spread = function (e, t) {
              if ("function" != typeof e) throw new ke(a);
              return (
                (t = null == t ? 0 : bt(Zc(t), 0)),
                Qr(function (n) {
                  var r = n[t],
                    i = wi(n, 0, t);
                  return r && Et(i, r), St(e, this, i);
                })
              );
            }),
            (jn.tail = function (e) {
              var t = null == e ? 0 : e.length;
              return t ? oi(e, 1, t) : [];
            }),
            (jn.take = function (e, t, n) {
              return e && e.length
                ? oi(e, 0, (t = n || t === o ? 1 : Zc(t)) < 0 ? 0 : t)
                : [];
            }),
            (jn.takeRight = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r
                ? oi(e, (t = r - (t = n || t === o ? 1 : Zc(t))) < 0 ? 0 : t, r)
                : [];
            }),
            (jn.takeRightWhile = function (e, t) {
              return e && e.length ? gi(e, ho(t, 3), !1, !0) : [];
            }),
            (jn.takeWhile = function (e, t) {
              return e && e.length ? gi(e, ho(t, 3)) : [];
            }),
            (jn.tap = function (e, t) {
              return t(e), e;
            }),
            (jn.throttle = function (e, t, n) {
              var r = !0,
                i = !0;
              if ("function" != typeof e) throw new ke(a);
              return (
                cc(n) &&
                  ((r = "leading" in n ? !!n.leading : r),
                  (i = "trailing" in n ? !!n.trailing : i)),
                La(e, t, { leading: r, maxWait: t, trailing: i })
              );
            }),
            (jn.thru = ba),
            (jn.toArray = yc),
            (jn.toPairs = Hc),
            (jn.toPairsIn = Gc),
            (jn.toPath = function (e) {
              return Ja(e) ? Bt(e, Xo) : gc(e) ? [e] : Di(Wo(Tc(e)));
            }),
            (jn.toPlainObject = Nc),
            (jn.transform = function (e, t, n) {
              var r = Ja(e),
                i = r || tc(e) || vc(e);
              if (((t = ho(t, 4)), null == n)) {
                var o = e && e.constructor;
                n = i ? (r ? new o() : []) : cc(e) && ic(o) ? Mn(Ge(e)) : {};
              }
              return (
                (i ? kt : Zr)(e, function (e, r, i) {
                  return t(n, e, r, i);
                }),
                n
              );
            }),
            (jn.unary = function (e) {
              return Aa(e, 1);
            }),
            (jn.union = ua),
            (jn.unionBy = la),
            (jn.unionWith = sa),
            (jn.uniq = function (e) {
              return e && e.length ? fi(e) : [];
            }),
            (jn.uniqBy = function (e, t) {
              return e && e.length ? fi(e, ho(t, 2)) : [];
            }),
            (jn.uniqWith = function (e, t) {
              return (
                (t = "function" == typeof t ? t : o),
                e && e.length ? fi(e, o, t) : []
              );
            }),
            (jn.unset = function (e, t) {
              return null == e || pi(e, t);
            }),
            (jn.unzip = da),
            (jn.unzipWith = fa),
            (jn.update = function (e, t, n) {
              return null == e ? e : hi(e, t, bi(n));
            }),
            (jn.updateWith = function (e, t, n, r) {
              return (
                (r = "function" == typeof r ? r : o),
                null == e ? e : hi(e, t, bi(n), r)
              );
            }),
            (jn.values = Uc),
            (jn.valuesIn = function (e) {
              return null == e ? [] : tn(e, Oc(e));
            }),
            (jn.without = pa),
            (jn.words = iu),
            (jn.wrap = function (e, t) {
              return Xa(bi(t), e);
            }),
            (jn.xor = ha),
            (jn.xorBy = ga),
            (jn.xorWith = va),
            (jn.zip = ma),
            (jn.zipObject = function (e, t) {
              return _i(e || [], t || [], nr);
            }),
            (jn.zipObjectDeep = function (e, t) {
              return _i(e || [], t || [], ti);
            }),
            (jn.zipWith = _a),
            (jn.entries = Hc),
            (jn.entriesIn = Gc),
            (jn.extend = Sc),
            (jn.extendWith = Ic),
            hu(jn, jn),
            (jn.add = Nu),
            (jn.attempt = ou),
            (jn.camelCase = Yc),
            (jn.capitalize = qc),
            (jn.ceil = Tu),
            (jn.clamp = function (e, t, n) {
              return (
                n === o && ((n = t), (t = o)),
                n !== o && (n = (n = wc(n)) == n ? n : 0),
                t !== o && (t = (t = wc(t)) == t ? t : 0),
                ur(wc(e), t, n)
              );
            }),
            (jn.clone = function (e) {
              return lr(e, 4);
            }),
            (jn.cloneDeep = function (e) {
              return lr(e, 5);
            }),
            (jn.cloneDeepWith = function (e, t) {
              return lr(e, 5, (t = "function" == typeof t ? t : o));
            }),
            (jn.cloneWith = function (e, t) {
              return lr(e, 4, (t = "function" == typeof t ? t : o));
            }),
            (jn.conformsTo = function (e, t) {
              return null == t || sr(e, t, Lc(t));
            }),
            (jn.deburr = Kc),
            (jn.defaultTo = function (e, t) {
              return null == e || e != e ? t : e;
            }),
            (jn.divide = xu),
            (jn.endsWith = function (e, t, n) {
              (e = Tc(e)), (t = di(t));
              var r = e.length,
                i = (n = n === o ? r : ur(Zc(n), 0, r));
              return (n -= t.length) >= 0 && e.slice(n, i) == t;
            }),
            (jn.eq = Ua),
            (jn.escape = function (e) {
              return (e = Tc(e)) && Q.test(e) ? e.replace(K, un) : e;
            }),
            (jn.escapeRegExp = function (e) {
              return (e = Tc(e)) && ae.test(e) ? e.replace(oe, "\\$&") : e;
            }),
            (jn.every = function (e, t, n) {
              var r = Ja(e) ? Dt : gr;
              return n && To(e, t, n) && (t = o), r(e, ho(t, 3));
            }),
            (jn.find = wa),
            (jn.findIndex = Ko),
            (jn.findKey = function (e, t) {
              return Mt(e, ho(t, 3), Zr);
            }),
            (jn.findLast = Na),
            (jn.findLastIndex = Jo),
            (jn.findLastKey = function (e, t) {
              return Mt(e, ho(t, 3), Cr);
            }),
            (jn.floor = Su),
            (jn.forEach = Ta),
            (jn.forEachRight = xa),
            (jn.forIn = function (e, t) {
              return null == e ? e : yr(e, ho(t, 3), Oc);
            }),
            (jn.forInRight = function (e, t) {
              return null == e ? e : br(e, ho(t, 3), Oc);
            }),
            (jn.forOwn = function (e, t) {
              return e && Zr(e, ho(t, 3));
            }),
            (jn.forOwnRight = function (e, t) {
              return e && Cr(e, ho(t, 3));
            }),
            (jn.get = Pc),
            (jn.gt = Ya),
            (jn.gte = qa),
            (jn.has = function (e, t) {
              return null != e && Zo(e, t, Ir);
            }),
            (jn.hasIn = Ac),
            (jn.head = $o),
            (jn.identity = su),
            (jn.includes = function (e, t, n, r) {
              (e = $a(e) ? e : Uc(e)), (n = n && !r ? Zc(n) : 0);
              var i = e.length;
              return (
                n < 0 && (n = bt(i + n, 0)),
                hc(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Xt(e, t, n) > -1
              );
            }),
            (jn.indexOf = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              var i = null == n ? 0 : Zc(n);
              return i < 0 && (i = bt(r + i, 0)), Xt(e, t, i);
            }),
            (jn.inRange = function (e, t, n) {
              return (
                (t = bc(t)),
                n === o ? ((n = t), (t = 0)) : (n = bc(n)),
                (function (e, t, n) {
                  return e >= zt(t, n) && e < bt(t, n);
                })((e = wc(e)), t, n)
              );
            }),
            (jn.invoke = Vc),
            (jn.isArguments = Ka),
            (jn.isArray = Ja),
            (jn.isArrayBuffer = Qa),
            (jn.isArrayLike = $a),
            (jn.isArrayLikeObject = ec),
            (jn.isBoolean = function (e) {
              return !0 === e || !1 === e || (uc(e) && xr(e) == Z);
            }),
            (jn.isBuffer = tc),
            (jn.isDate = nc),
            (jn.isElement = function (e) {
              return uc(e) && 1 === e.nodeType && !dc(e);
            }),
            (jn.isEmpty = function (e) {
              if (null == e) return !0;
              if (
                $a(e) &&
                (Ja(e) ||
                  "string" == typeof e ||
                  "function" == typeof e.splice ||
                  tc(e) ||
                  vc(e) ||
                  Ka(e))
              )
                return !e.length;
              var t = bo(e);
              if (t == x || t == D) return !e.size;
              if (ko(e)) return !Vr(e).length;
              for (var n in e) if (Be.call(e, n)) return !1;
              return !0;
            }),
            (jn.isEqual = function (e, t) {
              return Pr(e, t);
            }),
            (jn.isEqualWith = function (e, t, n) {
              var r = (n = "function" == typeof n ? n : o) ? n(e, t) : o;
              return r === o ? Pr(e, t, o, n) : !!r;
            }),
            (jn.isError = rc),
            (jn.isFinite = function (e) {
              return "number" == typeof e && vt(e);
            }),
            (jn.isFunction = ic),
            (jn.isInteger = oc),
            (jn.isLength = ac),
            (jn.isMap = lc),
            (jn.isMatch = function (e, t) {
              return e === t || Ar(e, t, vo(t));
            }),
            (jn.isMatchWith = function (e, t, n) {
              return (n = "function" == typeof n ? n : o), Ar(e, t, vo(t), n);
            }),
            (jn.isNaN = function (e) {
              return sc(e) && e != +e;
            }),
            (jn.isNative = function (e) {
              if (Io(e))
                throw new ue(
                  "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                );
              return Br(e);
            }),
            (jn.isNil = function (e) {
              return null == e;
            }),
            (jn.isNull = function (e) {
              return null === e;
            }),
            (jn.isNumber = sc),
            (jn.isObject = cc),
            (jn.isObjectLike = uc),
            (jn.isPlainObject = dc),
            (jn.isRegExp = fc),
            (jn.isSafeInteger = function (e) {
              return oc(e) && e >= -g && e <= g;
            }),
            (jn.isSet = pc),
            (jn.isString = hc),
            (jn.isSymbol = gc),
            (jn.isTypedArray = vc),
            (jn.isUndefined = function (e) {
              return e === o;
            }),
            (jn.isWeakMap = function (e) {
              return uc(e) && bo(e) == A;
            }),
            (jn.isWeakSet = function (e) {
              return uc(e) && "[object WeakSet]" == xr(e);
            }),
            (jn.join = function (e, t) {
              return null == e ? "" : mt.call(e, t);
            }),
            (jn.kebabCase = Jc),
            (jn.last = ra),
            (jn.lastIndexOf = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              var i = r;
              return (
                n !== o && (i = (i = Zc(n)) < 0 ? bt(r + i, 0) : zt(i, r - 1)),
                t == t
                  ? (function (e, t, n) {
                      for (var r = n + 1; r--; ) if (e[r] === t) return r;
                      return r;
                    })(e, t, i)
                  : Wt(e, Gt, i, !0)
              );
            }),
            (jn.lowerCase = Qc),
            (jn.lowerFirst = $c),
            (jn.lt = mc),
            (jn.lte = _c),
            (jn.max = function (e) {
              return e && e.length ? vr(e, su, Sr) : o;
            }),
            (jn.maxBy = function (e, t) {
              return e && e.length ? vr(e, ho(t, 2), Sr) : o;
            }),
            (jn.mean = function (e) {
              return Ut(e, su);
            }),
            (jn.meanBy = function (e, t) {
              return Ut(e, ho(t, 2));
            }),
            (jn.min = function (e) {
              return e && e.length ? vr(e, su, Or) : o;
            }),
            (jn.minBy = function (e, t) {
              return e && e.length ? vr(e, ho(t, 2), Or) : o;
            }),
            (jn.stubArray = Cu),
            (jn.stubFalse = wu),
            (jn.stubObject = function () {
              return {};
            }),
            (jn.stubString = function () {
              return "";
            }),
            (jn.stubTrue = function () {
              return !0;
            }),
            (jn.multiply = Iu),
            (jn.nth = function (e, t) {
              return e && e.length ? Xr(e, Zc(t)) : o;
            }),
            (jn.noConflict = function () {
              return gt._ === this && (gt._ = ze), this;
            }),
            (jn.noop = gu),
            (jn.now = Pa),
            (jn.pad = function (e, t, n) {
              e = Tc(e);
              var r = (t = Zc(t)) ? vn(e) : 0;
              if (!t || r >= t) return e;
              var i = (t - r) / 2;
              return Ui(st(i), n) + e + Ui(ot(i), n);
            }),
            (jn.padEnd = function (e, t, n) {
              e = Tc(e);
              var r = (t = Zc(t)) ? vn(e) : 0;
              return t && r < t ? e + Ui(t - r, n) : e;
            }),
            (jn.padStart = function (e, t, n) {
              e = Tc(e);
              var r = (t = Zc(t)) ? vn(e) : 0;
              return t && r < t ? Ui(t - r, n) + e : e;
            }),
            (jn.parseInt = function (e, t, n) {
              return (
                n || null == t ? (t = 0) : t && (t = +t),
                Cn(Tc(e).replace(ce, ""), t || 0)
              );
            }),
            (jn.random = function (e, t, n) {
              if (
                (n && "boolean" != typeof n && To(e, t, n) && (t = n = o),
                n === o &&
                  ("boolean" == typeof t
                    ? ((n = t), (t = o))
                    : "boolean" == typeof e && ((n = e), (e = o))),
                e === o && t === o
                  ? ((e = 0), (t = 1))
                  : ((e = bc(e)), t === o ? ((t = e), (e = 0)) : (t = bc(t))),
                e > t)
              ) {
                var r = e;
                (e = t), (t = r);
              }
              if (n || e % 1 || t % 1) {
                var i = wn();
                return zt(
                  e + i * (t - e + dt("1e-" + ((i + "").length - 1))),
                  t
                );
              }
              return qr(e, t);
            }),
            (jn.reduce = function (e, t, n) {
              var r = Ja(e) ? Vt : Kt,
                i = arguments.length < 3;
              return r(e, ho(t, 4), n, i, pr);
            }),
            (jn.reduceRight = function (e, t, n) {
              var r = Ja(e) ? Lt : Kt,
                i = arguments.length < 3;
              return r(e, ho(t, 4), n, i, hr);
            }),
            (jn.repeat = function (e, t, n) {
              return (
                (t = (n ? To(e, t, n) : t === o) ? 1 : Zc(t)), Jr(Tc(e), t)
              );
            }),
            (jn.replace = function () {
              var e = arguments,
                t = Tc(e[0]);
              return e.length < 3 ? t : t.replace(e[1], e[2]);
            }),
            (jn.result = function (e, t, n) {
              var r = -1,
                i = (t = Zi(t, e)).length;
              for (i || ((i = 1), (e = o)); ++r < i; ) {
                var a = null == e ? o : e[Xo(t[r])];
                a === o && ((r = i), (a = n)), (e = ic(a) ? a.call(e) : a);
              }
              return e;
            }),
            (jn.round = ku),
            (jn.runInContext = e),
            (jn.sample = function (e) {
              return (Ja(e) ? Qn : $r)(e);
            }),
            (jn.size = function (e) {
              if (null == e) return 0;
              if ($a(e)) return hc(e) ? vn(e) : e.length;
              var t = bo(e);
              return t == x || t == D ? e.size : Vr(e).length;
            }),
            (jn.snakeCase = eu),
            (jn.some = function (e, t, n) {
              var r = Ja(e) ? Ot : ai;
              return n && To(e, t, n) && (t = o), r(e, ho(t, 3));
            }),
            (jn.sortedIndex = function (e, t) {
              return ci(e, t);
            }),
            (jn.sortedIndexBy = function (e, t, n) {
              return ui(e, t, ho(n, 2));
            }),
            (jn.sortedIndexOf = function (e, t) {
              var n = null == e ? 0 : e.length;
              if (n) {
                var r = ci(e, t);
                if (r < n && Ua(e[r], t)) return r;
              }
              return -1;
            }),
            (jn.sortedLastIndex = function (e, t) {
              return ci(e, t, !0);
            }),
            (jn.sortedLastIndexBy = function (e, t, n) {
              return ui(e, t, ho(n, 2), !0);
            }),
            (jn.sortedLastIndexOf = function (e, t) {
              if (null != e && e.length) {
                var n = ci(e, t, !0) - 1;
                if (Ua(e[n], t)) return n;
              }
              return -1;
            }),
            (jn.startCase = tu),
            (jn.startsWith = function (e, t, n) {
              return (
                (e = Tc(e)),
                (n = null == n ? 0 : ur(Zc(n), 0, e.length)),
                (t = di(t)),
                e.slice(n, n + t.length) == t
              );
            }),
            (jn.subtract = Ru),
            (jn.sum = function (e) {
              return e && e.length ? Jt(e, su) : 0;
            }),
            (jn.sumBy = function (e, t) {
              return e && e.length ? Jt(e, ho(t, 2)) : 0;
            }),
            (jn.template = function (e, t, n) {
              var r = jn.templateSettings;
              n && To(e, t, n) && (t = o), (e = Tc(e)), (t = Ic({}, t, r, no));
              var i,
                a,
                c = Ic({}, t.imports, r.imports, no),
                u = Lc(c),
                l = tn(c, u),
                s = 0,
                d = t.interpolate || we,
                f = "__p += '",
                p = Se(
                  (t.escape || we).source +
                    "|" +
                    d.source +
                    "|" +
                    (d === te ? ge : we).source +
                    "|" +
                    (t.evaluate || we).source +
                    "|$",
                  "g"
                ),
                h =
                  "//# sourceURL=" +
                  (Be.call(t, "sourceURL")
                    ? (t.sourceURL + "").replace(/\s/g, " ")
                    : "lodash.templateSources[" + ++ct + "]") +
                  "\n";
              e.replace(p, function (t, n, r, o, c, u) {
                return (
                  r || (r = o),
                  (f += e.slice(s, u).replace(Ne, ln)),
                  n && ((i = !0), (f += "' +\n__e(" + n + ") +\n'")),
                  c && ((a = !0), (f += "';\n" + c + ";\n__p += '")),
                  r &&
                    (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                  (s = u + t.length),
                  t
                );
              }),
                (f += "';\n");
              var g = Be.call(t, "variable") && t.variable;
              if (g) {
                if (pe.test(g))
                  throw new ue(
                    "Invalid `variable` option passed into `_.template`"
                  );
              } else f = "with (obj) {\n" + f + "\n}\n";
              (f = (a ? f.replace(G, "") : f)
                .replace(U, "$1")
                .replace(Y, "$1;")),
                (f =
                  "function(" +
                  (g || "obj") +
                  ") {\n" +
                  (g ? "" : "obj || (obj = {});\n") +
                  "var __t, __p = ''" +
                  (i ? ", __e = _.escape" : "") +
                  (a
                    ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                    : ";\n") +
                  f +
                  "return __p\n}");
              var v = ou(function () {
                return fe(u, h + "return " + f).apply(o, l);
              });
              if (((v.source = f), rc(v))) throw v;
              return v;
            }),
            (jn.times = function (e, t) {
              if ((e = Zc(e)) < 1 || e > g) return [];
              var n = m,
                r = zt(e, m);
              (t = ho(t)), (e -= m);
              for (var i = Qt(r, t); ++n < e; ) t(n);
              return i;
            }),
            (jn.toFinite = bc),
            (jn.toInteger = Zc),
            (jn.toLength = Cc),
            (jn.toLower = function (e) {
              return Tc(e).toLowerCase();
            }),
            (jn.toNumber = wc),
            (jn.toSafeInteger = function (e) {
              return e ? ur(Zc(e), -g, g) : 0 === e ? e : 0;
            }),
            (jn.toString = Tc),
            (jn.toUpper = function (e) {
              return Tc(e).toUpperCase();
            }),
            (jn.trim = function (e, t, n) {
              if ((e = Tc(e)) && (n || t === o)) return $t(e);
              if (!e || !(t = di(t))) return e;
              var r = mn(e),
                i = mn(t);
              return wi(r, rn(r, i), on(r, i) + 1).join("");
            }),
            (jn.trimEnd = function (e, t, n) {
              if ((e = Tc(e)) && (n || t === o)) return e.slice(0, _n(e) + 1);
              if (!e || !(t = di(t))) return e;
              var r = mn(e);
              return wi(r, 0, on(r, mn(t)) + 1).join("");
            }),
            (jn.trimStart = function (e, t, n) {
              if ((e = Tc(e)) && (n || t === o)) return e.replace(ce, "");
              if (!e || !(t = di(t))) return e;
              var r = mn(e);
              return wi(r, rn(r, mn(t))).join("");
            }),
            (jn.truncate = function (e, t) {
              var n = 30,
                r = "...";
              if (cc(t)) {
                var i = "separator" in t ? t.separator : i;
                (n = "length" in t ? Zc(t.length) : n),
                  (r = "omission" in t ? di(t.omission) : r);
              }
              var a = (e = Tc(e)).length;
              if (sn(e)) {
                var c = mn(e);
                a = c.length;
              }
              if (n >= a) return e;
              var u = n - vn(r);
              if (u < 1) return r;
              var l = c ? wi(c, 0, u).join("") : e.slice(0, u);
              if (i === o) return l + r;
              if ((c && (u += l.length - u), fc(i))) {
                if (e.slice(u).search(i)) {
                  var s,
                    d = l;
                  for (
                    i.global || (i = Se(i.source, Tc(ve.exec(i)) + "g")),
                      i.lastIndex = 0;
                    (s = i.exec(d));

                  )
                    var f = s.index;
                  l = l.slice(0, f === o ? u : f);
                }
              } else if (e.indexOf(di(i), u) != u) {
                var p = l.lastIndexOf(i);
                p > -1 && (l = l.slice(0, p));
              }
              return l + r;
            }),
            (jn.unescape = function (e) {
              return (e = Tc(e)) && J.test(e) ? e.replace(q, yn) : e;
            }),
            (jn.uniqueId = function (e) {
              var t = ++Ee;
              return Tc(e) + t;
            }),
            (jn.upperCase = nu),
            (jn.upperFirst = ru),
            (jn.each = Ta),
            (jn.eachRight = xa),
            (jn.first = $o),
            hu(
              jn,
              (function () {
                var e = {};
                return (
                  Zr(jn, function (t, n) {
                    Be.call(jn.prototype, n) || (e[n] = t);
                  }),
                  e
                );
              })(),
              { chain: !1 }
            ),
            (jn.VERSION = "4.17.21"),
            kt(
              [
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight",
              ],
              function (e) {
                jn[e].placeholder = jn;
              }
            ),
            kt(["drop", "take"], function (e, t) {
              (Hn.prototype[e] = function (n) {
                n = n === o ? 1 : bt(Zc(n), 0);
                var r = this.__filtered__ && !t ? new Hn(this) : this.clone();
                return (
                  r.__filtered__
                    ? (r.__takeCount__ = zt(n, r.__takeCount__))
                    : r.__views__.push({
                        size: zt(n, m),
                        type: e + (r.__dir__ < 0 ? "Right" : ""),
                      }),
                  r
                );
              }),
                (Hn.prototype[e + "Right"] = function (t) {
                  return this.reverse()[e](t).reverse();
                });
            }),
            kt(["filter", "map", "takeWhile"], function (e, t) {
              var n = t + 1,
                r = 1 == n || 3 == n;
              Hn.prototype[e] = function (e) {
                var t = this.clone();
                return (
                  t.__iteratees__.push({ iteratee: ho(e, 3), type: n }),
                  (t.__filtered__ = t.__filtered__ || r),
                  t
                );
              };
            }),
            kt(["head", "last"], function (e, t) {
              var n = "take" + (t ? "Right" : "");
              Hn.prototype[e] = function () {
                return this[n](1).value()[0];
              };
            }),
            kt(["initial", "tail"], function (e, t) {
              var n = "drop" + (t ? "" : "Right");
              Hn.prototype[e] = function () {
                return this.__filtered__ ? new Hn(this) : this[n](1);
              };
            }),
            (Hn.prototype.compact = function () {
              return this.filter(su);
            }),
            (Hn.prototype.find = function (e) {
              return this.filter(e).head();
            }),
            (Hn.prototype.findLast = function (e) {
              return this.reverse().find(e);
            }),
            (Hn.prototype.invokeMap = Qr(function (e, t) {
              return "function" == typeof e
                ? new Hn(this)
                : this.map(function (n) {
                    return Dr(n, e, t);
                  });
            })),
            (Hn.prototype.reject = function (e) {
              return this.filter(Ma(ho(e)));
            }),
            (Hn.prototype.slice = function (e, t) {
              e = Zc(e);
              var n = this;
              return n.__filtered__ && (e > 0 || t < 0)
                ? new Hn(n)
                : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                  t !== o &&
                    (n = (t = Zc(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                  n);
            }),
            (Hn.prototype.takeRightWhile = function (e) {
              return this.reverse().takeWhile(e).reverse();
            }),
            (Hn.prototype.toArray = function () {
              return this.take(m);
            }),
            Zr(Hn.prototype, function (e, t) {
              var n = /^(?:filter|find|map|reject)|While$/.test(t),
                r = /^(?:head|last)$/.test(t),
                i = jn[r ? "take" + ("last" == t ? "Right" : "") : t],
                a = r || /^find/.test(t);
              i &&
                (jn.prototype[t] = function () {
                  var t = this.__wrapped__,
                    c = r ? [1] : arguments,
                    u = t instanceof Hn,
                    l = c[0],
                    s = u || Ja(t),
                    d = function (e) {
                      var t = i.apply(jn, Et([e], c));
                      return r && f ? t[0] : t;
                    };
                  s &&
                    n &&
                    "function" == typeof l &&
                    1 != l.length &&
                    (u = s = !1);
                  var f = this.__chain__,
                    p = !!this.__actions__.length,
                    h = a && !f,
                    g = u && !p;
                  if (!a && s) {
                    t = g ? t : new Hn(this);
                    var v = e.apply(t, c);
                    return (
                      v.__actions__.push({ func: ba, args: [d], thisArg: o }),
                      new Xn(v, f)
                    );
                  }
                  return h && g
                    ? e.apply(this, c)
                    : ((v = this.thru(d)),
                      h ? (r ? v.value()[0] : v.value()) : v);
                });
            }),
            kt(
              ["pop", "push", "shift", "sort", "splice", "unshift"],
              function (e) {
                var t = Re[e],
                  n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                  r = /^(?:pop|shift)$/.test(e);
                jn.prototype[e] = function () {
                  var e = arguments;
                  if (r && !this.__chain__) {
                    var i = this.value();
                    return t.apply(Ja(i) ? i : [], e);
                  }
                  return this[n](function (n) {
                    return t.apply(Ja(n) ? n : [], e);
                  });
                };
              }
            ),
            Zr(Hn.prototype, function (e, t) {
              var n = jn[t];
              if (n) {
                var r = n.name + "";
                Be.call(Fn, r) || (Fn[r] = []),
                  Fn[r].push({ name: t, func: n });
              }
            }),
            (Fn[Wi(o, 2).name] = [{ name: "wrapper", func: o }]),
            (Hn.prototype.clone = function () {
              var e = new Hn(this.__wrapped__);
              return (
                (e.__actions__ = Di(this.__actions__)),
                (e.__dir__ = this.__dir__),
                (e.__filtered__ = this.__filtered__),
                (e.__iteratees__ = Di(this.__iteratees__)),
                (e.__takeCount__ = this.__takeCount__),
                (e.__views__ = Di(this.__views__)),
                e
              );
            }),
            (Hn.prototype.reverse = function () {
              if (this.__filtered__) {
                var e = new Hn(this);
                (e.__dir__ = -1), (e.__filtered__ = !0);
              } else (e = this.clone()).__dir__ *= -1;
              return e;
            }),
            (Hn.prototype.value = function () {
              var e = this.__wrapped__.value(),
                t = this.__dir__,
                n = Ja(e),
                r = t < 0,
                i = n ? e.length : 0,
                o = (function (e, t, n) {
                  for (var r = -1, i = n.length; ++r < i; ) {
                    var o = n[r],
                      a = o.size;
                    switch (o.type) {
                      case "drop":
                        e += a;
                        break;
                      case "dropRight":
                        t -= a;
                        break;
                      case "take":
                        t = zt(t, e + a);
                        break;
                      case "takeRight":
                        e = bt(e, t - a);
                    }
                  }
                  return { start: e, end: t };
                })(0, i, this.__views__),
                a = o.start,
                c = o.end,
                u = c - a,
                l = r ? c : a - 1,
                s = this.__iteratees__,
                d = s.length,
                f = 0,
                p = zt(u, this.__takeCount__);
              if (!n || (!r && i == u && p == u))
                return vi(e, this.__actions__);
              var h = [];
              e: for (; u-- && f < p; ) {
                for (var g = -1, v = e[(l += t)]; ++g < d; ) {
                  var m = s[g],
                    _ = m.iteratee,
                    y = m.type,
                    b = _(v);
                  if (2 == y) v = b;
                  else if (!b) {
                    if (1 == y) continue e;
                    break e;
                  }
                }
                h[f++] = v;
              }
              return h;
            }),
            (jn.prototype.at = Za),
            (jn.prototype.chain = function () {
              return ya(this);
            }),
            (jn.prototype.commit = function () {
              return new Xn(this.value(), this.__chain__);
            }),
            (jn.prototype.next = function () {
              this.__values__ === o && (this.__values__ = yc(this.value()));
              var e = this.__index__ >= this.__values__.length;
              return {
                done: e,
                value: e ? o : this.__values__[this.__index__++],
              };
            }),
            (jn.prototype.plant = function (e) {
              for (var t, n = this; n instanceof Wn; ) {
                var r = Go(n);
                (r.__index__ = 0),
                  (r.__values__ = o),
                  t ? (i.__wrapped__ = r) : (t = r);
                var i = r;
                n = n.__wrapped__;
              }
              return (i.__wrapped__ = e), t;
            }),
            (jn.prototype.reverse = function () {
              var e = this.__wrapped__;
              if (e instanceof Hn) {
                var t = e;
                return (
                  this.__actions__.length && (t = new Hn(this)),
                  (t = t.reverse()).__actions__.push({
                    func: ba,
                    args: [ca],
                    thisArg: o,
                  }),
                  new Xn(t, this.__chain__)
                );
              }
              return this.thru(ca);
            }),
            (jn.prototype.toJSON =
              jn.prototype.valueOf =
              jn.prototype.value =
                function () {
                  return vi(this.__wrapped__, this.__actions__);
                }),
            (jn.prototype.first = jn.prototype.head),
            Je &&
              (jn.prototype[Je] = function () {
                return this;
              }),
            jn
          );
        })();
        "object" == i(n.amdO) && n.amdO
          ? ((gt._ = Zn),
            (r = function () {
              return Zn;
            }.call(t, n, t, e)) === o || (e.exports = r))
          : mt
          ? (((mt.exports = Zn)._ = Zn), (vt._ = Zn))
          : (gt._ = Zn);
      }).call(this);
    },
    39407: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return w;
        },
      });
      var r = n(298),
        i = n(57042),
        o = n(24460),
        a = n(21867),
        c = n(86066),
        u = n(45023),
        l = n(91006),
        s = n.n(l),
        d = n(52500),
        f = n(92954),
        p = n.n(f),
        h = n(71515),
        g = n(49528),
        v = n(53550),
        m = n(96677),
        _ = n(46628),
        y = n(90098),
        b = n(48813),
        Z = p().getSystemInfoSync(),
        C = (Z.windowWidth, Z.windowHeight),
        w = (function (e) {
          (0, a.Z)(n, e);
          var t = (0, c.Z)(n);
          function n(e) {
            return (0, i.Z)(this, n), t.call(this, e);
          }
          return (
            (0, o.Z)(n, [
              {
                key: "togglePriceInfo",
                value: function (e) {
                  this.props.togglePriceInfo && this.props.togglePriceInfo(e);
                },
              },
              {
                key: "getRotateStyle",
                value: function () {
                  return [
                    {
                      transform: [
                        this.props.isShowPriceInfo
                          ? { rotate: "180deg" }
                          : { rotate: "0deg" },
                      ],
                    },
                  ];
                },
              },
              {
                key: "getTotalPriceDom",
                value: function (e) {
                  var t = this,
                    n =
                      t.props.totalPriceRemark ||
                      (t.props.needShowPriceDetail
                        ? "¥" + e
                        : e < 0
                        ? "待确认"
                        : "---"),
                    i = t.props,
                    o = i.customLeftView,
                    a = i.isPay,
                    c = i.needBorder,
                    u = a ? "#FF5959" : m.Z.zxMainColor;
                  return (0, b.BX)(h.View, {
                    style: { backgroundColor: m.Z.white },
                    children: [
                      !t.props.isShowPriceInfo &&
                        t.props.bottomTopView &&
                        t.props.bottomTopView(),
                      (0, b.BX)(h.View, {
                        style: (0, r.Z)((0, r.Z)({}, N.flexRow), {
                          flexWrap: "nowrap",
                          alignItems: "center",
                        }),
                        children: [
                          c ? this.returnBorder() : {},
                          (0, b.BX)(h.View, {
                            style: (0, r.Z)((0, r.Z)({}, N.flexRow), {
                              paddingLeft: 15,
                              paddingRight: 15,
                              alignItems: "center",
                              flex: 1,
                            }),
                            onClick: function () {
                              return (
                                t.props.needShowPriceDetail &&
                                t.togglePriceInfo(!t.props.isShowPriceInfo)
                              );
                            },
                            children: [
                              (0, b.BX)(h.View, {
                                style: { flex: 1 },
                                children: [
                                  (0, b.BX)(h.View, {
                                    style: {
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",
                                    },
                                    children: [
                                      o ||
                                        (0, b.tZ)(h.Text, {
                                          style: {
                                            fontSize: 17,
                                            color: m.Z.grey_33,
                                          },
                                          children: t.props.totalPriceTitle,
                                        }),
                                      !o &&
                                        (0, b.tZ)(h.View, {
                                          style: {
                                            flexDirection: "row",
                                            flex: 1,
                                            alignItems: "center",
                                            marginLeft: 2,
                                          },
                                          children: (0, b.BX)(h.Text, {
                                            style: {
                                              fontSize: 20,
                                              color: m.Z.tyMainColor,
                                            },
                                            children: [n, " "],
                                          }),
                                        }),
                                    ],
                                  }),
                                  t.props.desc &&
                                    (0, b.tZ)(h.Text, {
                                      style: {
                                        fontSize: 13,
                                        color: m.Z.grey_99,
                                        marginTop: 2,
                                      },
                                      children: t.props.desc,
                                    }),
                                ],
                              }),
                              t.props.needShowPriceDetail &&
                                (0, b.BX)(h.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  },
                                  children: [
                                    (0, b.tZ)(h.Text, {
                                      style: {
                                        fontSize: 14,
                                        color: m.Z.grey_99,
                                      },
                                      children: "明细",
                                    }),
                                    !t.props.isHideIcon &&
                                      (0, b.tZ)(h.View, {
                                        style: (0, r.Z)(
                                          (0, r.Z)({}, t.getRotateStyle()),
                                          { marginLeft: 3 }
                                        ),
                                        children: (0, b.tZ)(v.Z, {
                                          style: {
                                            fontSize: 14,
                                            color: m.Z.grey_99,
                                          },
                                          children: "󰳩",
                                        }),
                                      }),
                                  ],
                                }),
                            ],
                          }),
                          (0, b.tZ)(h.View, {
                            testID: this.props.confirmBtnTestID,
                            style: {
                              display: "flex",
                              height: 44,
                              backgroundColor: u,
                              minWidth: 100,
                              paddingHorizontal: 40,
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 22,
                              marginRight: 10,
                              marginTop: 10,
                              marginBottom: 10,
                            },
                            onClick: function () {
                              t.clickNext();
                            },
                            children: (0, b.tZ)(h.Text, {
                              style: {
                                color: m.Z.white,
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "bold",
                              },
                              children: t.props.confirmButtonName,
                            }),
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
              {
                key: "clickNext",
                value: function () {
                  this.togglePriceInfo(!1), this.props.clickNext();
                },
              },
              {
                key: "returnBorder",
                value: function () {
                  return (0, b.tZ)(h.View, {
                    style: {
                      height: 15,
                      position: "absolute",
                      bottom: 100,
                      left: 0,
                      top: -15,
                    },
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, b.BX)(_.Z, {
                    style: (0, r.Z)((0, r.Z)({}, N.container), {
                      borderTopLeftRadius: this.props.isShowPriceInfo ? 0 : 20,
                      borderTopRightRadius: this.props.isShowPriceInfo ? 0 : 20,
                    }),
                    children: [
                      this.props.isShowPriceInfo &&
                        (0, b.tZ)(h.View, {
                          style: (0, r.Z)({}, N.extraContainer),
                          children: this.props.extraView,
                        }),
                      (0, b.tZ)(h.View, {
                        style: (0, r.Z)({}, N.bottomContainer),
                        children: this.getTotalPriceDom(this.props.totalPrice),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(d.Component);
      (0, u.Z)(w, "propTypes", {
        confirmButtonName: s().string,
        totalPriceRemark: s().string,
        totalPrice: s().number,
        clickNext: s().func,
        isDisabledNext: s().bool,
        isHideIcon: s().bool,
        bottomTopView: s().func,
        extraView: s().shape({}),
        customLeftView: s().func,
        isShowPriceInfo: s().bool,
        togglePriceInfo: s().func,
        needShowPriceDetail: s().bool,
      }),
        (0, u.Z)(w, "defaultProps", {
          confirmButtonName: "下一步",
          totalPriceTitle: "总计：",
          totalPriceRemark: null,
          totalPrice: 0,
          clickNext: function () {},
          isDisabledNext: !1,
          bottomTopView: function () {
            return (0, b.tZ)(h.View, {});
          },
          extraView: (0, b.tZ)(h.View, {}),
          isShowPriceInfo: !1,
          needShowPriceDetail: !1,
          togglePriceInfo: function () {},
          isHideIcon: !1,
          needBorder: !0,
        });
      var N = (0, g.lW)({
        flex1: { flex: 1 },
        row: { display: "flex", flexDirection: "row" },
        flexRow: { display: "flex", flexDirection: "row" },
        container: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 100,
        },
        extraContainer: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
          height: C,
        },
        bottomContainer: {
          backgroundColor: "#fff",
          paddingBottom: y.Z.isIPhoneX ? 24 : 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      });
    },
    25214: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Z;
        },
      });
      var r = n(298),
        i = n(57042),
        o = n(24460),
        a = n(21867),
        c = n(86066),
        u = n(45023),
        l = n(52500),
        s = n(91006),
        d = n.n(s),
        f = n(92954),
        p = n.n(f),
        h = n(71515),
        g = n(96677),
        v = n(90729),
        m = {
          INVOICE_DESC:
            "https://pages.ctrip.com/ztrip/document/bxpz.html?invoiceType=(invoiceDesc)",
          TICKET_GUARANTEE_SLOGAN_URL: n(23577).Z.isTieyou
            ? "https://market.suanya.com/activity/flight/flight-service-guarantee-ty.html?isHideNavBar=YES"
            : "https://market.suanya.com/activity/flight/flight-service-guarantee-zx.html?isHideNavBar=YES",
        },
        _ = n(32970),
        y = n(48813),
        b = p().getSystemInfoSync().windowWidth,
        Z = (function (e) {
          (0, a.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            return (0, i.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, o.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.url,
                    n = e.allowClick,
                    i = e.paddingHorizontal,
                    o = e.imageHeight,
                    a = e.noticeContent,
                    c = e.wHRatio,
                    u = e.h5URL,
                    l = e.backgroundColor;
                  if (v.Z.emptyOrUndefined(t)) return (0, y.tZ)(h.View, {});
                  var s = !!a,
                    d = b - 2 * i,
                    f = c ? d / c : o;
                  return (0, y.BX)(h.View, {
                    style: (0, r.Z)(
                      (0, r.Z)(
                        {},
                        {
                          width: b,
                          backgroundColor: l,
                          paddingTop: s ? 17 : 25,
                          paddingBottom: 44,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }
                      ),
                      this.props.style
                    ),
                    children: [
                      s &&
                        (0, y.tZ)(h.View, {
                          style: {
                            alignItems: "center",
                            flexDirection: "row",
                            paddingLeft: 10,
                            paddingRight: 10,
                            marginBottom: 20,
                          },
                          children: (0, y.tZ)(RichText, {
                            style: { fontSize: 12, fontWeight: "400" },
                            children: a,
                          }),
                        }),
                      (0, y.tZ)(h.View, {
                        onClick: function () {
                          n && (0, _.jn)(u || m.TICKET_GUARANTEE_SLOGAN_URL);
                        },
                        children: (0, y.tZ)(h.Image, {
                          style: { width: d, height: f },
                          src: t,
                          resizeMode: "contain",
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(l.Component);
      (0, u.Z)(Z, "propTypes", {
        url: d().string,
        allowClick: d().bool,
        paddingHorizontal: d().number,
        imageHeight: d().number,
        noticeContent: d().string,
        h5URL: d().string,
        backgroundColor: d().string,
      }),
        (0, u.Z)(Z, "defaultProps", {
          url: "",
          allowClick: !0,
          paddingHorizontal: 60,
          imageHeight: 20,
          noticeContent: "",
          backgroundColor: g.Z.main_bg,
          h5URL: m.TICKET_GUARANTEE_SLOGAN_URL,
        });
    },
    21145: function (e, t, n) {
      "use strict";
      var r = n(52500),
        i = n(69006),
        o = n(79910),
        a = n(71515),
        c = n(90098),
        u = n(48813);
      t.Z = r.default.memo(function (e) {
        var t = e.title;
        return (0,
        u.BX)(u.HY, { children: [(0, u.tZ)(i.Z, { title: t, className: "flt-common-head-view" }), o.Z.canUseCustomNav && (0, u.tZ)(a.View, { className: "head-view-place-holder", style: "padding-top: ".concat(c.Z.statusBarHeight, "px") })] });
      });
    },
    6141: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = (n(52500), n(71515)),
        o = n(48813);
      t.Z = function (e) {
        var t = e.color,
          n = e.strokeWidth,
          a = e.style,
          c = e.vertical,
          u = void 0 !== c && c,
          l = {
            flex: u ? "unset" : 1,
            alignSelf: "stretch",
            borderWidth: 0,
            borderLeftWidth: u ? Number(n) / 2 : 0,
            borderTopWidth: u ? 0 : Number(n) / 2,
            borderColor: t,
            borderStyle: "dashed",
          };
        return (0, o.tZ)(i.View, { style: (0, r.Z)((0, r.Z)({}, l), a) });
      };
    },
    55288: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(52500),
        o = n(71515),
        a = (n(92954), n(23577)),
        c = n(49528),
        u = n(32970),
        l = n(48813),
        s = a.Z.isTieyou
          ? "http://images3.c-ctrip.com/ztrip/img/chuxingbaozheng_shy_ty@3x.png"
          : "http://images3.c-ctrip.com/ztrip/img/chuxingbaozheng_shy_zx@3x.png",
        d = (0, c.lW)({
          container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 30,
            paddingBottom: 120,
          },
          sloganImg: { width: (56 / 180) * 816, height: 56 },
        });
      t.Z = i.default.memo(function (e) {
        var t = e.hasBottomBtn;
        return (0, l.tZ)(o.View, {
          style: d.container,
          id: "AMAE",
          onClick: function () {
            (0, u.h8)();
          },
          children: (0, l.tZ)(o.Image, {
            src: s,
            style: (0, r.Z)(
              (0, r.Z)({}, d.sloganImg),
              {},
              { paddingBottom: t ? 120 : 40 }
            ),
          }),
        });
      });
    },
    33786: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return c;
        },
      });
      var r = n(298),
        i = (n(52500), n(71515)),
        o = n(46116),
        a = n(48813),
        c = function (e) {
          var t = e.passengers,
            n = e.extFields;
          if (0 === (null == t ? void 0 : t.length)) return (0, a.tZ)(a.HY, {});
          var c = { 0: "", 1: "成人票", 2: "儿童票", 3: "婴儿票", 4: "老人票" };
          return (0, a.BX)(i.View, {
            className: " _a _Oa _Mb _jk _Dj",
            children: [
              (null == t ? void 0 : t.length) > 0 &&
                (0, a.BX)(i.View, {
                  className: " _i _Ga _p _yc _kk",
                  style: (0, r.Z)(
                    {},
                    n && n.length > 0 ? { marginBottom: 15 } : {}
                  ),
                  children: [
                    (0, a.tZ)(i.View, {
                      className: " _Kc _lk _mk _R _jb",
                      children: "改签乘机人",
                    }),
                    (0, a.tZ)(i.View, {
                      className: " _j _dd _mk _R",
                      children:
                        null == t
                          ? void 0
                          : t.map(function (e, n) {
                              return (0,
                              a.BX)(i.View, { className: " _i _k", style: n !== t.length - 1 ? "margin-bottom: 8px" : "", children: [(0, a.BX)(i.View, { className: " _i _Ga _l _dd _mk _R", children: [e.passengerName, c[e.passengerType] && (0, a.tZ)(o.Z, { className: " _Kc _aj _N _i _l _n _nk _Zg", borderColor: "#ccc", borderRadius: 4, children: c[e.passengerType] })] }), (0, a.tZ)(i.View, { className: " _Kc _mk _R _Ac", children: e.cardNo })] }, "".concat(e.passengerName).concat(e.cardNo));
                            }),
                    }),
                  ],
                }),
              null == n
                ? void 0
                : n.map(function (e) {
                    return (0,
                    a.BX)(i.View, { className: " _i _Ga _p _yc _kk", children: [(0, a.tZ)(i.View, { className: " _Kc _lk _mk _R _jb", children: e.label }), (0, a.tZ)(i.View, { className: " _j _dd _mk _R", children: e.value })] }, "".concat(e.label).concat(e.value));
                  }),
            ],
          });
        };
    },
    76349: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return h;
        },
      });
      var r = n(298),
        i = (n(52500), n(92954)),
        o = n(71515),
        a = n(43884),
        c = n(53550),
        u = n(49528),
        l = n(1841),
        s = n(23577),
        d = n(48813),
        f = (0, u.lW)({
          flex1: { flex: 1 },
          flexRow: { display: "flex", flexDirection: "row" },
          rightBorder: {
            borderRightStyle: "solid",
            borderRightWidth: 1,
            borderRightColor: "#ededed",
          },
          border: {
            borderStyle: "solid",
            borderColor: "#ededed",
            borderWidth: 1,
            margin: -1,
          },
          bottomBorder: {
            borderBottomStyle: "solid",
            borderBottomWidth: 1,
            borderBottomColor: "#ededed",
          },
        }),
        p = function (e) {
          var t,
            n,
            i,
            u,
            p = e.luggageInfos,
            h = e.close;
          if (!p) return (0, d.tZ)(d.HY, {});
          var g = [];
          return (
            (null === (t = p.adult) ||
            void 0 === t ||
            null === (n = t.items) ||
            void 0 === n
              ? void 0
              : n.length) > 0 && g.push(p.adult),
            (null === (i = p.child) ||
            void 0 === i ||
            null === (u = i.items) ||
            void 0 === u
              ? void 0
              : u.length) > 0 && g.push(p.child),
            (0, d.tZ)(o.View, {
              className: " _i _p _k _kd _yc",
              children: (0, d.BX)(a.Z, {
                start: { x: 0, y: 0 },
                end: { x: 0, y: 1 },
                colors: ["#ffffff", "#f5f5f5"],
                locations: [0, 0.3],
                children: [
                  (0, d.BX)(o.View, {
                    className: " _ok _Nc _pk _o _p",
                    children: [
                      "行李额说明",
                      (0, d.tZ)(o.View, {
                        className: " _u _qk _q",
                        onClick: function () {
                          null == h || h();
                        },
                        children: (0, d.tZ)(c.Z, {
                          className: " _rk _Bd",
                          children: "󰳭",
                        }),
                      }),
                    ],
                  }),
                  (0, d.tZ)(o.View, {
                    className: " _a _Oa _sk _Uf _Mb",
                    children: (0, d.tZ)(o.View, {
                      className: " _tk _i _k",
                      children:
                        null == g
                          ? void 0
                          : g.map(function (e, t) {
                              var n;
                              return (0, d.BX)(
                                o.View,
                                {
                                  style: (0, r.Z)(
                                    (0, r.Z)({}, f.flexRow),
                                    t !== g.length - 1 ? f.bottomBorder : {}
                                  ),
                                  children: [
                                    (0, d.tZ)(o.View, {
                                      className: "".concat(" _i _Ga"),
                                      style: f.flexRow,
                                      children: (0, d.tZ)(o.View, {
                                        className:
                                          " _Mb _uk _i _l _n _ok _mk _R",
                                        style: (0, r.Z)({}, f.rightBorder),
                                        children: (0, d.tZ)(l.Z, {
                                          style: {},
                                          className: " _ok _pc _R",
                                          children: e.detailTitle,
                                        }),
                                      }),
                                    }),
                                    (0, d.tZ)(o.View, {
                                      style: f.flex1,
                                      children:
                                        null === (n = e.items) || void 0 === n
                                          ? void 0
                                          : n.map(function (t, n) {
                                              var i, a;
                                              return (0,
                                              d.BX)(o.View, { style: (0, r.Z)((0, r.Z)({}, f.flexRow), n !== (null === (i = e.items) || void 0 === i ? void 0 : i.length) - 1 ? f.bottomBorder : {}), children: [t.description && (0, d.tZ)(l.Z, { className: " _Mb _uk _i _l _n _ok _mk _R", style: (0, r.Z)((0, r.Z)({}, "ios" == s.Z.os ? f.border : f.rightBorder), { width: 123 }), children: null !== (a = t.title) && void 0 !== a ? a : "" }), (0, d.tZ)(l.Z, { className: " _Mb _uk _i _l _n _ok _mk _R", style: (0, r.Z)({}, f.flex1), children: t.description ? t.description : t.title })] }, "".concat(t.title).concat(t.description));
                                            }),
                                    }),
                                  ],
                                },
                                e.detailTitle
                              );
                            }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        h = function (e) {
          var t,
            n = e.data;
          if (n) {
            var r = (0, i.getCurrentInstance)().page;
            null == r ||
              null === (t = r.showCommonDrawer) ||
              void 0 === t ||
              t.call(r, {
                hideTitle: !0,
                hideClose: !0,
                content: function (e) {
                  var t = e.onClose;
                  return (0, d.tZ)(p, { luggageInfos: n, close: t });
                },
              });
          }
        };
    },
    85376: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(32270),
        i = function (e) {
          var t = e.rescheduleRefundRemark,
            n = e.dptName,
            i = e.arrName;
          t &&
            (0, r.yV)({
              rescheduleRefundRemark: t,
              dptName: n,
              arrName: i,
              height: "80vh",
            });
        };
    },
    84581: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return b;
        },
      });
      var r = n(52500),
        i = n(71515),
        o = n(53550),
        a = n(43884),
        c = n(41478),
        u = n(48813),
        l = function (e) {
          var t = e.transferInfo;
          if (!t) return (0, u.tZ)(u.HY, {});
          var n = t.transferCity,
            r = t.transferTime;
          return (0, u.tZ)(i.View, {
            className: " _i _Ga _l _n _Mb _lo _mo",
            children: (0, u.tZ)(a.Z, {
              start: { x: 1, y: 0 },
              end: { x: 0, y: 0 },
              colors: ["#F6F8FA", "rgba(246, 248, 250, 0.8)"],
              locations: [0, 1],
              style: { flex: 1, padding: 8, borderRadius: 8 },
              children: (0, u.BX)(i.View, {
                className: " _i _Ga _l",
                children: [
                  (0, u.BX)(i.View, {
                    className: " _oo _i _l",
                    children: [
                      (0, u.BX)(i.Text, {
                        className: " _xh _no _Uc _Q",
                        children: ["中转", n],
                      }),
                      (0, u.tZ)(i.View, { className: " _wl _dj _eo _Dm" }),
                      (0, u.BX)(i.Text, {
                        className: " _dd _Na _Q",
                        children: ["停留", (0, c.xh)(r, "zh")],
                      }),
                    ],
                  }),
                  (0, u.BX)(i.View, {
                    className: " _i _Ga _l _n _Kc _Na _Q",
                    children: [
                      "中转须知",
                      (0, u.tZ)(o.Z, { className: " _C _Kc", children: "󰲧" }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        s = n(46116),
        d = function (e) {
          var t = e.passengers,
            n = e.extField,
            o = { 0: "", 1: "成人票", 2: "儿童票", 3: "婴儿票", 4: "老人票" };
          return (0, u.BX)(i.View, {
            className: " _Mb _ko",
            children: [
              (0, u.BX)(i.View, {
                className: " _i _Ga _p _yc _kk",
                style: "margin-bottom: 15px",
                children: [
                  (0, u.tZ)(i.View, {
                    className: " _lk _Kc _mk _R _jb",
                    children: "改签乘机人",
                  }),
                  (0, u.tZ)(i.View, {
                    className: " _j _dd _mk _R",
                    children:
                      null == t
                        ? void 0
                        : t.map(function (e) {
                            return (0,
                            u.BX)(i.View, { className: " _i _k", style: "margin-bottom: 8px", children: [(0, u.BX)(i.View, { className: " _i _Ga _l _dd _mk _R", children: [e.passengerName || "", !!o[e.passengerType] && (0, u.tZ)(s.Z, { className: " _Kc _aj _N _i _l _n _nk _Zg", borderColor: "#ccc", borderRadius: 4, children: o[e.passengerType] })] }), !!e.cardNo && (0, u.tZ)(i.View, { className: " _Kc _mk _R _Ac", children: e.cardNo || "" })] }, "".concat(e.passengerName, "-").concat(e.cardNo));
                          }),
                  }),
                ],
              }),
              (0, u.tZ)(i.View, {
                className: " _i _Ga _p _yc _kk",
                children:
                  null == n
                    ? void 0
                    : n.map(function (e) {
                        return (0,
                        u.BX)(r.default.Fragment, { children: [(0, u.tZ)(i.View, { className: " _lk _Kc _mk _R _jb", children: e.label || "" }), (0, u.tZ)(i.View, { className: " _j _dd _mk _R", children: e.value || "" })] }, "".concat(e.label, "-").concat(e.value));
                      }),
              }),
            ],
          });
        },
        f = n(76349),
        p = n(8271),
        h = n.n(p),
        g = n(45245),
        v = function (e) {
          var t = e.dptACode,
            n = e.dptCode,
            r = e.arrACode,
            i = e.arrCode,
            o = e.dptTime,
            a = e.flightNo;
          e.shared,
            e.actAirIcon,
            e.actAirName,
            g.Z.toAircraftInfo({
              dptACode: t,
              dptCode: n,
              arrACode: r,
              arrCode: i,
              dptTime: o,
              flightNo: a,
            });
        },
        m = r.default.memo(function (e) {
          var t,
            n,
            r = e.flight;
          if (!r) return (0, u.tZ)(u.HY, {});
          var a = r.departTime,
            l = r.arriveTime,
            s = r.departAirportCode,
            d = r.arriveAirportCode,
            f = r.departAirportShortName,
            p = r.arriveAirportShortName,
            g = r.departCityCode,
            m = r.arriveCityCode,
            _ = r.departTerminal,
            y = r.arriveTerminal,
            b = r.carrierAirlineName,
            Z = r.carierAirlineLogo,
            C = r.flightNumber,
            w = r.aircraftType,
            N = r.airecraftSize,
            T = r.flightTime,
            x = r.stopInfos,
            S = r.shared,
            I = r.actAirIcon,
            k = r.actAirName,
            R = [];
          (b || C) &&
            R.push({ icon: Z, text: "".concat(null != b ? b : "").concat(C) }),
            (w || N) &&
              R.push({
                text: ""
                  .concat(null != w ? w : "")
                  .concat(N ? "(" + N + ")" : ""),
              }),
            T && R.push({ text: "共".concat((0, c.xh)(T, "zh")) });
          var D =
            (null == x ? void 0 : x.length) > 0
              ? "停"
                  .concat(
                    null !== (t = null == x ? void 0 : x[0].stopCityName) &&
                      void 0 !== t
                      ? t
                      : ""
                  )
                  .concat(
                    null !== (n = null == x ? void 0 : x[0].stopTime) &&
                      void 0 !== n
                      ? n
                      : ""
                  )
              : "";
          return (0, u.BX)(i.View, {
            className: " _Mb _ao",
            children: [
              (0, u.BX)(i.View, {
                className: " _i _Ga _l _bo",
                children: [
                  (0, u.BX)(i.View, {
                    className: " _Db _i",
                    children: [
                      (0, u.tZ)(i.View, {
                        className: " _dd _co _Mj",
                        style: c.vB.zxRegularFont,
                        children: h()(a).format("HH:mm"),
                      }),
                      (0, u.BX)(i.View, {
                        className: " _dd _Na _Q",
                        children: [null != f ? f : "", null != _ ? _ : ""],
                      }),
                    ],
                  }),
                  (0, u.BX)(i.View, {
                    className: " _i _k _l",
                    children: [
                      (0, u.tZ)(i.Image, {
                        className: " _yf _Za",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/dindanxiangqinye/10/img_xqing_plane@3x.png",
                      }),
                      D &&
                        (0, u.tZ)(i.View, {
                          className: " _Kc _Na _Q _o",
                          children: D,
                        }),
                    ],
                  }),
                  (0, u.BX)(i.View, {
                    className: " _Db _i",
                    style: "align-items: flex-end;",
                    children: [
                      (0, u.tZ)(i.Text, {
                        className: " _dd _co _Mj",
                        style: c.vB.zxRegularFont,
                        children: h()(l).format("HH:mm"),
                      }),
                      (0, u.BX)(i.View, {
                        className: " _dd _Na _Q",
                        children: [null != p ? p : "", null != y ? y : ""],
                      }),
                    ],
                  }),
                ],
              }),
              (0, u.BX)(i.View, {
                className: " _i _Mn _l _do _n",
                onClick: function () {
                  v({
                    dptACode: s,
                    dptCode: g,
                    arrACode: d,
                    arrCode: m,
                    dptTime: a,
                    flightNo: C,
                    shared: S,
                    actAirIcon: I,
                    actAirName: k,
                  });
                },
                children: [
                  null == R
                    ? void 0
                    : R.map(function (e, t) {
                        return (0,
                        u.BX)(u.HY, { children: [(0, u.BX)(i.View, { className: " _i _Ga _l", children: [e.icon && (0, u.tZ)(i.Image, { className: " _Tj _Rj _jb", src: e.icon }), (0, u.tZ)(i.Text, { className: " _Kc _Na _Q", children: e.text })] }), t !== R.length - 1 && (0, u.tZ)(i.View, { className: " _wl _dj _eo _fl" })] });
                      }),
                  (0, u.tZ)(o.Z, { className: " _C _Kc", children: "󰲧" }),
                ],
              }),
            ],
          });
        }),
        _ = n(6141),
        y = function (e) {
          var t = e.segmentTag,
            n = e.segmentDesc,
            r = e.luggageInfo,
            a = e.fromPage;
          return (0, u.BX)(i.View, {
            className: " _i _l _Xn _Yn _Zn",
            children: [
              !!t &&
                (0, u.tZ)(i.View, {
                  className: " _De _w _vi _b _aj _Dn _bh _Mb _i _l _n _Va",
                  children: null != t ? t : "",
                }),
              (0, u.tZ)(i.View, {
                className: " _dd _Na _Q _j _yc",
                children: n,
              }),
              !!r &&
                (0, u.BX)(i.View, {
                  className: " _xh _Na _Q _i _l _Ga",
                  onClick: function () {
                    (0, f.U)({ data: r });
                  },
                  children: [
                    "rebookConfirm" === a ? "查看行李额" : "退改签、行李政策",
                    (0, u.tZ)(o.Z, { className: " _C _xh", children: "󰲧" }),
                  ],
                }),
            ],
          });
        },
        b = function (e) {
          var t = e.segments,
            n = e.passengers,
            o = e.extField,
            s = e.fromPage;
          return t
            ? (0, u.BX)(i.View, {
                className: " _Dj _a _Oa _Vn _p _qn _yc _Wn",
                children: [
                  (0, u.tZ)(a.Z, {
                    start: { x: 0, y: 0 },
                    end: { x: 0, y: 1 },
                    colors: ["#DDEBFF", "#FFFFFF"],
                    locations: [0, 1],
                    className: " _rn _sn _u _tn _un _vn _Lm",
                  }),
                  (0, u.BX)(i.View, {
                    style: "position: relative",
                    children: [
                      null == t
                        ? void 0
                        : t.map(function (e, t) {
                            var n = e.flights,
                              i = e.luggageInfos;
                            return (0, u.BX)(
                              r.default.Fragment,
                              {
                                children: [
                                  (0, u.tZ)(y, {
                                    segmentTag: e.segmentTag || "",
                                    segmentDesc: (0, c.rx)({
                                      departCityName: e.departCityName || "",
                                      arriveCityName: e.arriveCityName || "",
                                      departDateTime: e.departDateTime || "",
                                      costTime: e.costTime,
                                    }),
                                    luggageInfo: i,
                                    fromPage: s,
                                  }),
                                  null == n
                                    ? void 0
                                    : n.map(function (e, t) {
                                        return (0,
                                        u.BX)(u.HY, { children: [(0, u.tZ)(m, { flight: e }, t), (0, u.tZ)(l, { transferInfo: e.transferInfo })] });
                                      }),
                                ],
                              },
                              t
                            );
                          }),
                      (0, u.BX)(i.View, {
                        className: " _p _fo",
                        children: [
                          (0, u.tZ)(i.View, {
                            className: " _Tj _Rj _Xa _go _u _ho _io",
                            style: "",
                          }),
                          (0, u.tZ)(_.Z, {
                            strokeWidth: 2,
                            color: "rgba(0,0,0,0.06)",
                          }),
                          (0, u.tZ)(i.View, {
                            className: " _Tj _Rj _Xa _go _u _jo _io",
                          }),
                        ],
                      }),
                      (0, u.tZ)(d, { passengers: n, extField: o }),
                    ],
                  }),
                ],
              })
            : (0, u.tZ)(u.HY, {});
        };
    },
    92739: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return Z;
        },
      });
      var r = n(90129),
        i = n(52500),
        o = n(43884),
        a = n(71515),
        c = n(53550),
        u = n(6141),
        l = n(76349),
        s = n(48813),
        d = i.default.memo(function (e) {
          var t = e.showExtendBtn,
            n = e.extended,
            r = e.segmentTag,
            i = e.segmentBriefDesc,
            o = e.onExtendBtnClick,
            u = void 0 === o ? function () {} : o;
          return (0,
          s.BX)(a.View, { className: " _i _Ga _xn", children: [(0, s.BX)(a.View, { className: " _i _nl _l _yc _Qf", children: [r && (0, s.tZ)(a.View, { className: " _De _w _vi _b _yn _i _l _n _lj _bh", children: r }), (0, s.tZ)(a.Text, { className: " _dd _mk _yc _j _Xm _Ym", numberOfLines: 1, children: null != i ? i : "" })] }), t && (0, s.BX)(a.View, { className: " _i _Ga _l _xh _Na _Q", onClick: u, children: ["航班详情", n ? (0, s.tZ)(c.Z, { className: " _xh _E _Q _cf", children: "󰳩" }) : (0, s.tZ)(c.Z, { className: " _xh _E _Q _cf", children: "󰳪" })] })] });
        }),
        f = n(8271),
        p = n.n(f),
        h = n(41478),
        g = function (e) {
          var t = e.showDiffDay,
            n = e.flightTime,
            r = e.terminalInfo,
            i = e.style,
            o = e.dividerStyle,
            c = e.flightInfo,
            u = (null == c ? void 0 : c.length) || 0;
          return (0, s.BX)(s.HY, {
            children: [
              (0, s.BX)(a.View, {
                className: " _i _Ga _l",
                style: i,
                children: [
                  (0, s.BX)(a.View, {
                    className: " _p _Bn",
                    children: [
                      t &&
                        (0, s.tZ)(a.View, {
                          className: " _Cn _aj _Dn _u _di _t",
                          style: h.vB.zxRegularFont,
                          children: p()(n).format("MM-DD"),
                        }),
                      (0, s.tZ)(a.View, {
                        className: " _Di _dd _zn _T",
                        style: h.vB.zxRegularFont,
                        children: p()(n).format("HH:mm"),
                      }),
                    ],
                  }),
                  (0, s.tZ)(a.View, {
                    className: " _Se _nc _An _fc _p",
                    style: o,
                  }),
                  (0, s.tZ)(a.View, { className: " _dd _Pa _U", children: r }),
                ],
              }),
              c &&
                u > 0 &&
                (0, s.tZ)(a.View, {
                  className: ""
                    .concat(" _i _Ga _l", " ")
                    .concat(" _Un _cg _Mb"),
                  children:
                    null == c
                      ? void 0
                      : c.map(function (e, t) {
                          return (0,
                          s.BX)(s.HY, { children: [(0, s.BX)(a.View, { style: "display: flex; flex-direction: row;", children: [e.icon && (0, s.tZ)(a.Image, { src: e.icon, className: " _og _Ye" }), (0, s.tZ)(a.Text, { className: " _Kc _Ag _O", children: e.text })] }, e.text), t !== u - 1 && (0, s.tZ)(a.Text, { className: " _cj _sf _Pn _ym" })] });
                        }),
                }),
            ],
          });
        },
        v = function (e) {
          var t = e.stopOverInfo,
            n = e.style,
            r = e.dividerStyle;
          return (0, s.BX)(a.View, {
            className: " _i _Ga _l _Mb _Qn",
            style: n,
            children: [
              (0, s.tZ)(a.View, {
                className: " _Sn _An _Tn _p",
                style: r,
                children: (0, s.tZ)(a.View, {
                  className: " _tf _sf _jj _Gn _Mb _u _Jn _Ln",
                }),
              }),
              (0, s.tZ)(a.View, {
                className: " _dd _Na _Q _Rn _Mb _yc _p",
                children: t,
              }),
            ],
          });
        },
        m = n(298),
        _ = function (e) {
          var t = e.isUnFold,
            n = void 0 !== t && t,
            r = e.transferDesc,
            i = e.transferFeatures,
            c = e.preFlightInfo,
            l = e.isTransEndDiffDay,
            d = void 0 !== l && l,
            f = e.transferStartDate,
            g = e.transferEndDate,
            v = e.style,
            _ = e.rightNodeStyle,
            y = (null == i ? void 0 : i.length) || 0,
            b = (null == c ? void 0 : c.length) || 0;
          return (0, s.BX)(a.View, {
            style: v,
            className: " _i _Ga _l",
            children: [
              (0, s.tZ)(a.View, {
                className: " _Bn _Di",
                children:
                  !n &&
                  (0, s.BX)(s.HY, {
                    children: [
                      (0, s.tZ)(a.View, {
                        className: " _dd _ih _ff _Di _p",
                        style: (0, m.Z)(
                          (0, m.Z)({}, h.vB.zxRegularFont),
                          {},
                          { marginBottom: 8 }
                        ),
                        children: p()(f).format("HH:mm"),
                      }),
                      (0, s.BX)(a.View, {
                        className: " _dd _ih _ff _Di _p",
                        style: h.vB.zxRegularFont,
                        children: [
                          p()(g).format("HH:mm"),
                          d &&
                            (0, s.tZ)(a.Text, {
                              className: " _Cn _aj _Dn _u _di _t",
                              style: h.vB.zxRegularFont,
                              children: p()(g).format("MM-DD"),
                            }),
                        ],
                      }),
                    ],
                  }),
              }),
              n
                ? (0, s.tZ)(u.Z, {
                    vertical: !0,
                    strokeWidth: 4,
                    color: "#f0f1f5",
                    style: { marginLeft: 12, marginRight: 12 },
                  })
                : (0, s.tZ)(a.View, { className: " _En _An _Fn _p _i _n" }),
              (0, s.BX)(a.View, {
                className: " _i _Db _p",
                style: _,
                children: [
                  n &&
                    (0, s.tZ)(a.View, {
                      className: " _i _Ga _l",
                      style: "marginBottom: 16px;",
                      children:
                        null == c
                          ? void 0
                          : c.map(function (e, t) {
                              return (0,
                              s.BX)(s.HY, { children: [(0, s.BX)(a.View, { style: "display: flex; flex-direction: row;", children: [e.icon && (0, s.tZ)(a.Image, { src: e.icon, className: " _og _Ye" }), (0, s.tZ)(a.Text, { className: " _Kc _Ag _O", children: e.text })] }, e.text), t !== b - 1 && (0, s.tZ)(a.Text, { className: " _cj _sf _Pn _ym" })] });
                            }),
                    }),
                  (0, s.BX)(a.View, {
                    style: "position: relative",
                    children: [
                      (0, s.tZ)(a.View, {
                        className:
                          " _tf _sf _jj _Gn _Mb _u _Hn _in _In _Jn _Kn",
                      }),
                      (0, s.BX)(o.Z, {
                        start: { x: 1, y: 0 },
                        end: { x: 0, y: 0 },
                        colors: [
                          "rgba(111, 147, 187, 0.1)",
                          "rgba(111, 147, 187, 0.05)",
                        ],
                        locations: [0, 1],
                        className: " _p _i _Mn _dc _Mb _Nn _yc _l",
                        children: [
                          (0, s.tZ)(a.View, {
                            className: " _dd _Na _Q _On _Ym",
                            children: r,
                          }),
                          null == i
                            ? void 0
                            : i.map(function (e, t) {
                                return (0,
                                s.BX)(s.HY, { children: [(0, s.tZ)(a.Text, { className: " _xh _Na _Q _Ym", children: e }), t !== y - 1 && (0, s.tZ)(a.Text, { className: " _cj _sf _Pn _ym" })] });
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        y = function (e) {
          var t = e.segments,
            n = e.onToggleFold;
          return !t || t.length <= 0
            ? (0, s.tZ)(s.HY, {})
            : (0, s.tZ)(a.View, {
                className: " _wn _Mb _yc",
                children: t.map(function (e, t) {
                  var r = e.segmentTag,
                    o = e.departCityName,
                    c = e.arriveCityName,
                    u = e.departDateTime,
                    l = e.costTime,
                    f = e.flights,
                    p = f && f.length > 1;
                  return (0, s.BX)(
                    a.View,
                    {
                      style: 0 != t ? "marginTop: 16px;" : "",
                      children: [
                        (0, s.tZ)(d, {
                          extended: !0,
                          showExtendBtn: p,
                          segmentTag: r || "",
                          segmentBriefDesc: (0, h.rx)({
                            departCityName: o,
                            arriveCityName: c,
                            departDateTime: u,
                            costTime: l,
                          }),
                          onExtendBtnClick: n,
                        }),
                        null == f
                          ? void 0
                          : f.map(function (e, t) {
                              var n = e.departTime,
                                r = e.arriveTime,
                                o = e.arriveAirportCode,
                                a = e.departAirportCode,
                                c = e.arriveAirportName,
                                u = e.departAirportName,
                                l = e.arriveTerminal,
                                d = e.departTerminal,
                                f = e.aircraftType,
                                p = e.airecraftSize,
                                m = e.carrierAirlineName,
                                y = e.carierAirlineLogo,
                                b = e.stopInfos,
                                Z = e.transferInfo,
                                C = e.flightNumber,
                                w = e.isArriveDiffDay,
                                N = e.isDepartDiffDay,
                                T = e.flightTime,
                                x = [];
                              return (
                                x.push({
                                  icon: y || "",
                                  text: "".concat(m).concat(C),
                                }),
                                f &&
                                  x.push({
                                    text: ""
                                      .concat(f, " ")
                                      .concat(p ? "(" + p + ")" : ""),
                                  }),
                                x.push({
                                  text: "飞".concat((0, h.xh)(T, "en")),
                                }),
                                (0, s.BX)(
                                  i.default.Fragment,
                                  {
                                    children: [
                                      (0, s.tZ)(g, {
                                        showDiffDay: N,
                                        flightTime: n,
                                        terminalInfo: (0, h.vo)({
                                          airportCode: a,
                                          airportShortName: u,
                                          terminal: d,
                                        }),
                                        style: { marginBottom: 12 },
                                        dividerStyle: { top: 10 },
                                      }),
                                      (null == b ? void 0 : b.length) > 0 &&
                                        b.map(function (e, t) {
                                          var n = e.stopCityName,
                                            r = e.stopTime;
                                          return (0,
                                          s.tZ)(v, { style: { marginBottom: 12 }, dividerStyle: { marginTop: -8 }, stopOverInfo: (0, h.mH)(n, r) }, t);
                                        }),
                                      (0, s.tZ)(g, {
                                        showDiffDay: w,
                                        flightTime: r,
                                        terminalInfo: (0, h.vo)({
                                          airportCode: o,
                                          airportShortName: c,
                                          terminal: l,
                                        }),
                                        flightInfo: Z ? void 0 : x,
                                        dividerStyle: { bottom: 10 },
                                      }),
                                      Z &&
                                        (0, s.tZ)(_, {
                                          isUnFold: !0,
                                          transferDesc: "中转 "
                                            .concat(Z.transferCity, " ")
                                            .concat(
                                              (0, h.xh)(
                                                Z.transferTime || 0,
                                                "en"
                                              )
                                            ),
                                          transferFeatures: Z.features || [],
                                          preFlightInfo: x,
                                          style: {
                                            marginTop: -12,
                                            marginBottom: -12,
                                          },
                                          rightNodeStyle: {
                                            paddingTop: 18,
                                            paddingBottom: 28,
                                          },
                                        }),
                                    ],
                                  },
                                  t
                                )
                              );
                            }),
                      ],
                    },
                    t
                  );
                }),
              });
        },
        b = function (e) {
          var t = e.segments,
            n = e.onToggleFold;
          return !t || t.length <= 0
            ? (0, s.tZ)(s.HY, {})
            : (0, s.tZ)(a.View, {
                className: " _wn _Mb _yc",
                children:
                  null == t
                    ? void 0
                    : t.map(function (e, t) {
                        var r = e.segmentTag,
                          i = e.departCityName,
                          o = e.arriveCityName,
                          c = e.departDateTime,
                          u = e.costTime,
                          l = e.flights,
                          f = (null == l ? void 0 : l.length) || 0,
                          p = l && f > 1,
                          m = null == l ? void 0 : l[0],
                          y = null == l ? void 0 : l[f - 1];
                        return (0, s.BX)(
                          a.View,
                          {
                            style: 0 != t ? "marginTop: 16px;" : "",
                            children: [
                              (0, s.tZ)(d, {
                                extended: !1,
                                showExtendBtn: p,
                                segmentTag: r || "",
                                segmentBriefDesc: (0, h.rx)({
                                  departCityName: i,
                                  arriveCityName: o,
                                  departDateTime: c,
                                  costTime: u,
                                }),
                                onExtendBtnClick: n,
                              }),
                              (0, s.tZ)(g, {
                                showDiffDay:
                                  null == m ? void 0 : m.isDepartDiffDay,
                                flightTime: null == m ? void 0 : m.departTime,
                                terminalInfo: (0, h.vo)({
                                  airportCode:
                                    null == m ? void 0 : m.departAirportCode,
                                  airportShortName:
                                    null == m ? void 0 : m.departAirportName,
                                  terminal:
                                    null == m ? void 0 : m.departTerminal,
                                }),
                                style: { marginBottom: 7 },
                                dividerStyle: { top: 10 },
                              }),
                              null == l
                                ? void 0
                                : l.map(function (e) {
                                    var t = e.transferInfo,
                                      n = e.stopInfos;
                                    return (0, s.BX)(s.HY, {
                                      children: [
                                        n &&
                                          (null == n
                                            ? void 0
                                            : n.map(function (e, t) {
                                                return (0,
                                                s.tZ)(v, { stopOverInfo: (0, h.mH)(e.stopCityName, e.stopTime) }, t);
                                              })),
                                        t &&
                                          (0, s.tZ)(_, {
                                            transferDesc: "中转"
                                              .concat(
                                                null == t
                                                  ? void 0
                                                  : t.transferCity,
                                                " "
                                              )
                                              .concat(
                                                (0, h.xh)(
                                                  (null == t
                                                    ? void 0
                                                    : t.transferTime) || 0,
                                                  "en"
                                                )
                                              ),
                                            transferFeatures:
                                              (null == t
                                                ? void 0
                                                : t.features) || [],
                                            transferStartDate: t.transStartTime,
                                            transferEndDate: t.transEndTime,
                                            isTransEndDiffDay:
                                              t.isTransEndDiffDay,
                                            rightNodeStyle: {
                                              paddingTop: 7,
                                              paddingBottom: 7,
                                            },
                                          }),
                                      ],
                                    });
                                  }),
                              (0, s.tZ)(g, {
                                showDiffDay:
                                  null == y ? void 0 : y.isArriveDiffDay,
                                flightTime: null == y ? void 0 : y.arriveTime,
                                terminalInfo: (0, h.vo)({
                                  airportCode:
                                    null == y ? void 0 : y.arriveAirportCode,
                                  airportShortName:
                                    null == y ? void 0 : y.arriveAirportName,
                                  terminal:
                                    null == y ? void 0 : y.arriveTerminal,
                                }),
                                style: { marginTop: 7 },
                                dividerStyle: { bottom: 10 },
                              }),
                            ],
                          },
                          t
                        );
                      }),
              });
        },
        Z = function (e) {
          var t = e.segments,
            n = e.luggageInfo,
            d = (0, i.useState)(!0),
            f = (0, r.Z)(d, 2),
            p = f[0],
            h = f[1];
          if (!t) return (0, s.tZ)(s.HY, {});
          var g = function () {
            h(!p);
          };
          return (0, s.BX)(a.View, {
            className: " _Dj _a _Oa _Mb _p _qn _yc",
            children: [
              (0, s.tZ)(o.Z, {
                start: { x: 0, y: 0 },
                end: { x: 0, y: 1 },
                colors: ["#DDEBFF", "#FFFFFF"],
                locations: [0, 1],
                className: " _rn _sn _u _tn _un _vn _Lm",
              }),
              (0, s.BX)(a.View, {
                style: "position: relative;",
                children: [
                  p
                    ? (0, s.tZ)(b, { onToggleFold: g, segments: t })
                    : (0, s.tZ)(y, { onToggleFold: g, segments: t }),
                  n &&
                    (0, s.BX)(s.HY, {
                      children: [
                        (0, s.tZ)(u.Z, {
                          strokeWidth: 1,
                          color: "rgba(0,0,0,.06)",
                          style: { marginLeft: 16, marginRight: 16 },
                        }),
                        (0, s.BX)(a.View, {
                          className: " _jk _Mb _yc _p _i _Ga _l",
                          onClick: function () {
                            n && (0, l.U)({ data: n });
                          },
                          children: [
                            (0, s.tZ)(a.View, {
                              className: " _j _Kc _mk _R",
                              children: "退改签、行李政策",
                            }),
                            (0, s.tZ)(c.Z, {
                              className: " _C _Kc",
                              children: "󰲧",
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        };
    },
    41478: function (e, t, n) {
      "use strict";
      n.d(t, {
        F7: function () {
          return h;
        },
        mH: function () {
          return l;
        },
        rx: function () {
          return u;
        },
        tb: function () {
          return p;
        },
        vB: function () {
          return a;
        },
        vo: function () {
          return c;
        },
        xh: function () {
          return s;
        },
      });
      var r = n(49528),
        i = n(8271),
        o = n.n(i),
        a = (0, r.lW)({ zxRegularFont: { fontFamily: (0, r.QQ)() } }),
        c = function (e) {
          var t = e.airportCode,
            n = e.airportShortName,
            r = e.terminal;
          return ""
            .concat(null != t ? t : "", " ")
            .concat(null != n ? n : "", " ")
            .concat(null != r ? r : "");
        },
        u = function (e) {
          var t = e.departCityName,
            n = e.arriveCityName,
            r = e.departDateTime,
            i = e.costTime;
          return ""
            .concat(null != t ? t : "", "-")
            .concat(null != n ? n : "", " ")
            .concat(o()(r).format("MM月DD日"), " 总")
            .concat(i);
        },
        l = function (e, t) {
          return "经停"
            .concat(null != e ? e : "", " 停留")
            .concat(null != t ? t : "");
        },
        s = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "en",
            n = {
              en: function (e, t) {
                return "".concat(e ? e + "h" : "").concat(t ? t + "m" : "");
              },
              zh: function (e, t) {
                return "".concat(e ? e + "时" : "").concat(t ? t + "分" : "");
              },
            };
          if (e) {
            var r = Math.floor(Number(e) / 60),
              i = Number(e) % 60;
            return n[t](r, i);
          }
        },
        d = function (e) {
          var t = e.flightBasicInfo,
            n = e.flightTripInfo;
          if (!t || !n) return [];
          var r = [],
            i = n.departDateTime,
            a = n.arriveDateTime,
            c = n.subSegment,
            u = t || {},
            l = u.flightNumber,
            s = u.airlineName,
            d = u.airlineCode,
            f = u.airlineIcon,
            p = u.aircraftTypeName,
            h = u.aircraftTypeSize,
            g = u.isCodeShared,
            v = u.carrierAirlineIcon,
            m = u.carrierAirlineName;
          return (
            r.push({
              shared: !!g,
              actAirIcon: v || "",
              actAirName: m || "",
              flightNumber: l || "",
              departTime: i || "",
              arriveTime: a || "",
              departAirportName:
                (null == n ? void 0 : n.departAirportName) || "",
              departAirportShortName: n.departAirportShortName || "",
              arriveAirportName:
                (null == n ? void 0 : n.arriveAirportName) || "",
              arriveAirportShortName: n.arriveAirportShortName || "",
              departAirportCode:
                (null == n ? void 0 : n.departAirportCode) || "",
              arriveAirportCode:
                (null == n ? void 0 : n.arriveAirportCode) || "",
              departCityCode: (null == n ? void 0 : n.departCityCode) || "",
              arriveCityCode: (null == n ? void 0 : n.arriveCityCode) || "",
              departTerminal: (null == n ? void 0 : n.departTerminal) || "",
              arriveTerminal: (null == n ? void 0 : n.arriveTerminal) || "",
              carrierAirlineName: s || "",
              carierAirlineCode: d || "",
              carierAirlineLogo: f || "",
              cabinName: (null == n ? void 0 : n.cabinName) || "",
              aircraftType: p || "",
              airecraftSize: h || "",
              stopInfos:
                (null == c
                  ? void 0
                  : c
                      .map(function (e) {
                        return {
                          stopTime: e.stopTime,
                          stopCityName: e.arriveCityName,
                        };
                      })
                      .filter(function (e) {
                        return e.stopCityName || e.stopTime;
                      })) || [],
              transferInfo: null,
              flightTime: o()(a).diff(i, "m"),
            }),
            r
          );
        },
        f = function (e) {
          var t = e.rebookSubSegment;
          if (!(t && t.length > 0)) return [];
          var n = [],
            r = t[0],
            i = r.departDateTime;
          return (
            t.forEach(function (e, a) {
              var c,
                u = e.flightNumber,
                l = e.departDateTime,
                s = e.arriveDateTime,
                d = e.departAirportName,
                f = e.arriveAirportName,
                p = e.departAirportCode,
                h = e.arriveAirportCode,
                g = e.departTerminal,
                v = e.arriveTerminal,
                m = e.airlineName,
                _ = e.airlineCode,
                y = e.airlineIcon,
                b = e.cabinName,
                Z = e.aircraftTypeName,
                C = e.aircraftTypeSize,
                w = e.subSegment,
                N = e.departCityCode,
                T = e.arriveCityCode,
                x = e.departAirportShortName,
                S = e.arriveAirportShortName,
                I = e.arriveCityName,
                k = null,
                R =
                  null == w ||
                  null ===
                    (c = w.map(function (e) {
                      return {
                        stopTime: e.stopTime,
                        stopCityName: e.arriveCityName,
                      };
                    })) ||
                  void 0 === c
                    ? void 0
                    : c.filter(function (e) {
                        return e.stopCityName || e.stopTime;
                      });
              if (t[a + 1]) {
                var D = t[a + 1].departDateTime;
                k = {
                  transferCity: I || "",
                  transferTime: o()(D).diff(s, "m"),
                  transStartTime: s || "",
                  transEndTime: D || "",
                  isTransStartDiffDay: !1,
                  isTransEndDiffDay: !o()(D).isSame(i, "day") || !1,
                };
              }
              n.push({
                shared: !1,
                actAirIcon: "",
                actAirName: "",
                flightNumber: u || "",
                departTime: l || "",
                departCityCode: N || "",
                arriveCityCode: T || "",
                arriveTime: s || "",
                departAirportName: d || "",
                arriveAirportName: f || "",
                departAirportShortName: x || "",
                arriveAirportShortName: S || "",
                departAirportCode: p || "",
                arriveAirportCode: h || "",
                departTerminal: g || "",
                arriveTerminal: v || "",
                carrierAirlineName: m || "",
                carierAirlineCode: _ || "",
                carierAirlineLogo: y || "",
                cabinName: b || "",
                aircraftType: Z || "",
                airecraftSize: C || "",
                stopInfos: R || [],
                transferInfo: k,
                flightTime: o()(s).diff(l, "m"),
                isArriveDiffDay: !o()(s).isSame(r.departDateTime, "day"),
                isDepartDiffDay: !o()(l).isSame(r.departDateTime, "day"),
              });
            }),
            n
          );
        },
        p = function (e) {
          var t, n;
          if (!e) return [];
          var r,
            i = e.changeFlightTripInfo,
            o = e.changeFlightBasicInfo,
            a = i || {},
            c = a.departCityName,
            u = a.rebookSubSegment,
            l = a.arriveCityName,
            s = a.departDateTime,
            p = a.costTime,
            h = a.stopType,
            g = a.luggageInfos,
            v = [],
            m = "单程";
          (r =
            u && u.length > 0
              ? f({ rebookSubSegment: u })
              : d({ flightBasicInfo: o, flightTripInfo: i })).length > 1
            ? (m = "中转")
            : (null === (t = r) ||
              void 0 === t ||
              null === (n = t[0].stopInfos) ||
              void 0 === n
                ? void 0
                : n.length) > 0 && (m = "经停");
          var _ = {
            departCityName: c || "",
            arriveCityName: l || "",
            departDateTime: s || "",
            costTime: p || "",
            stopType: h || 0,
            flights: r,
            segmentTag: m,
            luggageInfos: g,
          };
          return v.push(_), v;
        },
        h = function (e) {
          return !e || e.length <= 0
            ? []
            : (null == e
                ? void 0
                : e.map(function (e) {
                    var t = e.departCityName,
                      n = e.arriveCityName,
                      r = e.departTime,
                      i = e.costTime,
                      a = e.flightSegmentInfo,
                      c = (null == a ? void 0 : a.length) > 1,
                      u = (null == a ? void 0 : a.length) || 0,
                      l = null == a ? void 0 : a[0].departDateTime;
                    return {
                      segmentTag: "新航班",
                      departCityName: t || "",
                      arriveCityName: n || "",
                      departDateTime: r || "",
                      costTime: i || "",
                      flights:
                        (null == a
                          ? void 0
                          : a.map(function (e, t) {
                              var n = e.flightNumber,
                                r = e.departDateTime,
                                i = e.arriveDateTime,
                                s = e.departAirportName,
                                d = e.arriveAirportName,
                                f = e.departAirportCode,
                                p = e.arriveAirportCode,
                                h = e.departCityCode,
                                g = e.arriveCityCode,
                                v = e.departTerminal,
                                m = e.arriveTerminal,
                                _ = e.airCompanyName,
                                y = e.airCompanyCode,
                                b = e.departAirportNameShort,
                                Z = e.arriveAirportNameShort,
                                C = e.airCompanyIcon,
                                w = e.cabinName,
                                N = e.aircraftType,
                                T = e.subSegments,
                                x = e.arriveCityName,
                                S = null;
                              if (c && t !== u - 1) {
                                var I = a[t + 1].departDateTime;
                                S = {
                                  transferCity: x,
                                  transferTime: o()(I).diff(i, "m"),
                                  transStartTime: i,
                                  transEndTime: I,
                                  isTransStartDiffDay: !1,
                                  isTransEndDiffDay: !o()(I).isSame(l, "day"),
                                };
                              }
                              var k =
                                (null == T
                                  ? void 0
                                  : T.map(function (e) {
                                      return {
                                        stopTime: e.stopTime || "",
                                        stopCityName: e.stopCity || "",
                                      };
                                    }).filter(function (e) {
                                      return e.stopCityName || e.stopTime;
                                    })) || [];
                              return {
                                flightNumber: n || "",
                                departTime: r || "",
                                arriveTime: i || "",
                                departAirportName: s || "",
                                arriveAirportName: d || "",
                                departAirportShortName: b || "",
                                arriveAirportShortName: Z || "",
                                departAirportCode: f || "",
                                departCityCode: h || "",
                                arriveCityCode: g || "",
                                arriveAirportCode: p || "",
                                departTerminal: v,
                                arriveTerminal: m,
                                carrierAirlineName: _ || "",
                                carierAirlineCode: y || "",
                                carierAirlineLogo: C || "",
                                cabinName: w || "",
                                aircraftType: N || "",
                                isDepartDiffDay: !o()(r).isSame(l, "day"),
                                isArriveDiffDay: !o()(i).isSame(l, "day"),
                                stopInfos: k,
                                transferInfo: S,
                                flightTime: o()(i).diff(r, "m"),
                              };
                            })) || [],
                    };
                  })) || [];
        };
    },
    72077: function (e, t, n) {
      "use strict";
      n.d(t, {
        _M: function () {
          return r;
        },
        ap: function () {
          return i;
        },
        oS: function () {
          return o;
        },
      });
      var r = {
          choose_passenger_container_view_id:
            "choose_passenger_container_view_id",
          passenger_item_id: "passenger_item_id",
          choose_reason_view_id: "choose_reason_view_id",
          refund_reason_item_id_personal: "refund_reason_item_id_personal",
          refund_reason_item_id_order: "refund_reason_item_id_order",
          refund_reason_custom_id: "refund_reason_custom_id",
          refund_apply_container_view_id: "refund_apply_container_view_id",
          order_xproduct_id: "order_xproduct_id",
          insurance_item_id: "insurance_item_id",
          refund_passenger_rule: "refund_passenger_rule",
          confirm_page_invoice_switch: "confirm_page_invoice_switch",
          upload_image_btn: "upload_image_btn",
        },
        i = {
          invoice_page_id: "invoice_page_id",
          pay_invoice_btn: "pay_invoice_btn",
          cancel_invoice_btn: "cancel_invoice_btn",
          resend_invoice_btn: "resend_invoice_btn",
          invoice_example_btn: "invoice_example_btn",
          select_invoice_head: "select_invoice_head",
          select_address: "select_address",
          address_detail: "address_detail",
          invoice_head_detail: "invoice_head_detail",
          invoice_input_message: "invoice_input_message",
          invoice_remark: "invoice_remark#",
          invoice_remark_desc: "invoice_remark_desc",
          mearge_invoice_item: "mearge_invoice_item#",
          close_remark_modal: "close_remark_modal",
        },
        o = {
          close_invoice_question_modal: "close_invoice_question_modal",
          invoice_valid_item: "invoice_valid_item#",
        };
    },
    59582: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return d;
        },
      });
      var r = n(9776),
        i = n(57042),
        o = n(24460),
        a = n(33357),
        c = n(68754),
        u = n.n(c),
        l = (function () {
          function e(t, n) {
            var r, o, a, c, u, l;
            (0, i.Z)(this, e),
              (this.refundData = t),
              (this.orderData = n),
              (this.orderType =
                null == t || null === (r = t.miscData) || void 0 === r
                  ? void 0
                  : r.orderType),
              (this.isIntl =
                null !== (o = null == n ? void 0 : n.isIntl) &&
                void 0 !== o &&
                o),
              (this.xProducts = null),
              (this.recordData = null),
              (this.selectReason = null),
              (this.isFreePrice = !1),
              (this.selectTickets = []),
              (this.selectTicketObj = {}),
              (this.selectSegmentList = []),
              (this.isValidPrice = !1),
              (this.paidPrice = 0),
              (this.refundPrice = 0),
              (this.paidPriceMap = {}),
              (this.refundPriceMap = {}),
              (this.sumOfPrice = -1),
              (this.needShowInvoice = !1),
              (this.isOpenInvoiceSwitch = !(
                null == t ||
                null === (a = t.refundFeeInvoiceInfo) ||
                void 0 === a ||
                !a.deliveryHasPaid
              )),
              (this.initSelectInvoice = !(
                null == t ||
                null === (c = t.refundFeeInvoiceInfo) ||
                void 0 === c ||
                !c.deliveryHasPaid
              )),
              (this.isFirstRefund =
                null == t ||
                null === (u = t.refundFeeInvoiceInfo) ||
                void 0 === u
                  ? void 0
                  : u.isShowRefundInvoice),
              (this.isPassengerHadRequestInvoice = !(
                null == t ||
                null === (l = t.refundFeeInvoiceInfo) ||
                void 0 === l ||
                !l.deliveryHasPaid
              )),
              (this.isSelectElectronic = 1),
              (this.isAllTicketRefund = !1);
          }
          return (
            (0, o.Z)(e, [
              {
                key: "initData",
                value: function () {
                  (this.recordData = (0, a.Ak)(
                    this.refundData,
                    this.orderType
                  )),
                    this.handleDefaultData();
                },
              },
              {
                key: "handleDefaultData",
                value: function () {
                  var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    c,
                    u,
                    l,
                    s,
                    d,
                    f,
                    p,
                    h,
                    g,
                    v,
                    m,
                    _,
                    y,
                    b,
                    Z;
                  (0, a.Hk)(this.refundData) &&
                    ((this.selectTickets = (null === (e = this.refundData) ||
                    void 0 === e ||
                    null === (t = e.segmentList) ||
                    void 0 === t ||
                    null === (n = t[0]) ||
                    void 0 === n
                      ? void 0
                      : n.tickets[0]) && [
                      null === (r = this.refundData) ||
                      void 0 === r ||
                      null === (i = r.segmentList) ||
                      void 0 === i ||
                      null === (o = i[0]) ||
                      void 0 === o
                        ? void 0
                        : o.tickets[0],
                    ]),
                    (this.refundData.segmentList[0].selectTickets =
                      (null === (c = this.refundData) ||
                      void 0 === c ||
                      null === (u = c.segmentList) ||
                      void 0 === u ||
                      null === (l = u[0]) ||
                      void 0 === l
                        ? void 0
                        : l.tickets[0]) &&
                      (null === (s = this.refundData) ||
                      void 0 === s ||
                      null === (d = s.segmentList) ||
                      void 0 === d ||
                      null === (f = d[0]) ||
                      void 0 === f
                        ? void 0
                        : f.tickets)),
                    this.setSelectSegmentList(
                      null === (p = this.refundData) || void 0 === p
                        ? void 0
                        : p.segmentList
                    ),
                    (0, a.b3)(
                      null === (h = this.refundData) ||
                        void 0 === h ||
                        null === (g = h.segmentList) ||
                        void 0 === g ||
                        null === (v = g[0]) ||
                        void 0 === v
                        ? void 0
                        : v.tickets
                    ) &&
                      (this.selectReason =
                        null === (m = this.refundData) ||
                        void 0 === m ||
                        null === (_ = m.segmentList) ||
                        void 0 === _ ||
                        null === (y = _[0]) ||
                        void 0 === y ||
                        null === (b = y.tickets) ||
                        void 0 === b ||
                        null === (Z = b[0]) ||
                        void 0 === Z
                          ? void 0
                          : Z.refundReasonList[0]));
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  t && (this.xProducts = t),
                    e && (this.selectTickets = e),
                    this.updatePriceState(),
                    this.updateIsFree(),
                    this.isNeedShowInvoice(),
                    this.calculateIsAllPersonSelected(),
                    this.updatePriceDetail();
                },
              },
              {
                key: "getSumOfPriceForDisplay",
                value: function () {
                  var e = this.isValidPrice;
                  return this.isFreePrice
                    ? "¥" + this.sumOfPrice
                    : e
                    ? this.sumOfPrice <= 0
                      ? "¥0"
                      : "¥" + this.sumOfPrice
                    : "待确认";
                },
              },
              {
                key: "updatePriceState",
                value: function () {
                  var e = this;
                  if (
                    !0 ===
                    this.selectTickets.some(function (t) {
                      var n, r;
                      return !(
                        null !== (n = t.refundReasonList) &&
                        void 0 !== n &&
                        null !==
                          (r = n.find(function (t) {
                            return t.userAction === e.selectReason.userAction;
                          })) &&
                        void 0 !== r &&
                        r.computable
                      );
                    })
                  )
                    this.isValidPrice = !1;
                  else {
                    var t,
                      n,
                      r,
                      i,
                      o =
                        0 ==
                        (null === (t = this.selectTickets) ||
                        void 0 === t ||
                        null ===
                          (n = t.filter(function (t) {
                            var n, r;
                            return (
                              !t.priceDetails ||
                              0 ==
                                (null === (n = t.priceDetails) || void 0 === n
                                  ? void 0
                                  : n.length) ||
                              !e.getRefundPriceDetail(t) ||
                              0 ==
                                (null === (r = e.getRefundPriceDetail(t)) ||
                                void 0 === r
                                  ? void 0
                                  : r.length)
                            );
                          })) ||
                        void 0 === n
                          ? void 0
                          : n.length),
                      a = !0;
                    this.xProducts &&
                      (a =
                        0 ==
                        (null == this ||
                        null === (r = this.xProducts) ||
                        void 0 === r ||
                        null ===
                          (i = r.filter(function (e) {
                            return (
                              0 !== e.handlingFee &&
                              !e.handlingFee &&
                              e.isSelected
                            );
                          })) ||
                        void 0 === i
                          ? void 0
                          : i.length)),
                      (this.isValidPrice = o && a);
                  }
                },
              },
              {
                key: "updateIsFree",
                value: function () {
                  var e = this,
                    t = u().sum(
                      this.selectTickets.map(function (t) {
                        var n;
                        return u().sum(
                          null === (n = e.getRefundPriceDetail(t)) ||
                            void 0 === n
                            ? void 0
                            : n.map(function (e) {
                                return e.price || 0;
                              })
                        );
                      })
                    );
                  this.isFreePrice = 0 == t && this.isValidPrice;
                },
              },
              {
                key: "updatePriceDetail",
                value: function () {
                  var e,
                    t,
                    n,
                    r,
                    i = this;
                  if (this.isFreePrice)
                    return (
                      (this.paidPrice = 0),
                      (this.refundPrice = 0),
                      (this.paidPriceMap = {}),
                      (this.refundPriceMap = {}),
                      this.selectTickets.forEach(function (e) {
                        i.calculatePriceThatPaidToUs(e),
                          i.calculatePriceThatWeNeedTake(e, !0);
                      }),
                      null == this ||
                        null === (n = this.xProducts) ||
                        void 0 === n ||
                        n.forEach(function (e) {
                          i.calculateXProductHadPaid(e);
                        }),
                      void (this.sumOfPrice = (0, a.S2)(
                        this.paidPrice + this.refundPrice
                      ))
                    );
                  if (!this.isValidPrice)
                    return (
                      (this.sumOfPrice = -1),
                      (this.paidPrice = 0),
                      (this.refundPrice = "待确认"),
                      (this.paidPriceMap = {}),
                      (this.refundPriceMap = {}),
                      this.selectTickets.forEach(function (e) {
                        i.calculatePriceThatPaidToUs(e);
                      }),
                      void (
                        null == this ||
                        null === (r = this.xProducts) ||
                        void 0 === r ||
                        r.forEach(function (e) {
                          i.calculateXProductHadPaid(e);
                        })
                      )
                    );
                  var o = this;
                  (o.paidPrice = 0),
                    (o.refundPrice = 0),
                    (o.paidPriceMap = {}),
                    (o.refundPriceMap = {}),
                    o.selectTickets.forEach(function (e) {
                      o.calculatePriceThatPaidToUs(e),
                        o.calculatePriceThatWeNeedTake(e);
                    }),
                    o.calculateRefundInvoiceDeliveryFee(),
                    null == o ||
                      null === (e = o.xProducts) ||
                      void 0 === e ||
                      e.forEach(function (e) {
                        i.calculateXProductHadPaid(e),
                          i.calculateXProductRefundPrice(e);
                      }),
                    null === (t = o.selectSegmentList) ||
                      void 0 === t ||
                      t.forEach(function (e) {
                        i.calculateReducePrice(e);
                      }),
                    (o.sumOfPrice = (0, a.S2)(
                      this.paidPrice + this.refundPrice
                    )),
                    console.log("sumOfPrice:" + o.sumOfPrice),
                    console.log("paidPrice:" + o.paidPrice),
                    console.log("refundPrice:" + o.refundPrice),
                    console.log("paidPriceMap:" + o.paidPriceMap),
                    console.log("refundPriceMap:" + o.refundPriceMap);
                },
              },
              {
                key: "calculateReducePrice",
                value: function (e) {
                  var t,
                    n = this;
                  null == e ||
                    null === (t = e.refundReduceLists) ||
                    void 0 === t ||
                    t.forEach(function (e) {
                      var t = n,
                        r = e.detailTitle + "|" + e.price;
                      null != e &&
                        e.isSelected &&
                        (t.refundPriceMap[r]
                          ? (t.refundPriceMap[r].count += 1)
                          : (t.refundPriceMap[r] = {
                              type: "P",
                              title: e.detailTitle,
                              price: e.price,
                              count: 1,
                            }),
                        (t.refundPrice += e.price));
                    });
                },
              },
              {
                key: "getRefundPriceDetail",
                value: function (e) {
                  var t;
                  return null === (t = this.getTicketReason(e)) || void 0 === t
                    ? void 0
                    : t.refundPriceDetails;
                },
              },
              {
                key: "getRefundReduceDetails",
                value: function (e) {
                  var t;
                  return null === (t = this.getTicketReason(e)) || void 0 === t
                    ? void 0
                    : t.refundReduceDetails;
                },
              },
              {
                key: "getTicketReason",
                value: function (e) {
                  var t,
                    n = this;
                  return null == e ||
                    null === (t = e.refundReasonList) ||
                    void 0 === t
                    ? void 0
                    : t.find(function (e) {
                        return e.userAction === n.selectReason.userAction;
                      });
                },
              },
              {
                key: "getPaidPrice",
                value: function () {
                  return this.paidPrice;
                },
              },
              {
                key: "getRefundPrice",
                value: function () {
                  return (0, a.S2)(this.refundPrice);
                },
              },
              {
                key: "getPaidPriceArr",
                value: function () {
                  var e = this,
                    t = [];
                  return (
                    Object.keys(e.paidPriceMap).forEach(function (n) {
                      var r = e.paidPriceMap[n];
                      t.push(r);
                    }),
                    t
                  );
                },
              },
              {
                key: "getRefundPriceArr",
                value: function () {
                  var e = this,
                    t = [];
                  return (
                    Object.keys(e.refundPriceMap).forEach(function (n) {
                      var r = e.refundPriceMap[n];
                      t.push(r);
                    }),
                    t
                  );
                },
              },
              {
                key: "calculatePriceThatPaidToUs",
                value: function (e) {
                  var t = this,
                    n = this;
                  e.priceDetails.forEach(function (r) {
                    if ("P" == r.type) {
                      var i,
                        o,
                        a,
                        c,
                        u,
                        l = !1;
                      if (
                        (null === (i = n.selectSegmentList) ||
                          void 0 === i ||
                          null === (o = i[e.selectSegmentIndex]) ||
                          void 0 === o ||
                          null === (a = o.canRefundProductLists) ||
                          void 0 === a ||
                          a.forEach(function (e) {
                            r.title != e.title || e.isSelected || (l = !0);
                          }),
                        null == e ||
                          null === (c = e.insuranceDetails) ||
                          void 0 === c ||
                          c.forEach(function (e) {
                            r.title != e.title || e.canRefund || (l = !0);
                          }),
                        null == e ||
                          null === (u = e.xProductDetails) ||
                          void 0 === u ||
                          u.forEach(function (e) {
                            var n, i;
                            null !== (n = t.selectReason) &&
                            void 0 !== n &&
                            n.isVoluntary
                              ? (e.newCanRefund = e.canRefund)
                              : (e.newCanRefund =
                                  null !==
                                    (i = e.isJustSupportFlightChangeRefund) &&
                                  void 0 !== i
                                    ? i
                                    : e.canRefund),
                              r.title != e.title || e.newCanRefund || (l = !0);
                          }),
                        l)
                      )
                        return;
                      n.paidPrice += r.price;
                      var s = r.title + "|" + r.price;
                      n.paidPriceMap[s]
                        ? (n.paidPriceMap[s].count += 1)
                        : (n.paidPriceMap[s] = {
                            type: "P",
                            title: r.title,
                            price: r.price,
                            count: 1,
                          });
                    }
                    if (
                      n.isAllTicketRefund &&
                      "O" == r.type &&
                      -1 == r.title.indexOf("配送费")
                    ) {
                      "优惠券" == (null == r ? void 0 : r.title) &&
                        (r.title = "优惠券(自愿退时不可退)");
                      var d = r.title + "|" + r.price;
                      n.paidPriceMap[d] ||
                        ((n.paidPriceMap[d] = {
                          type: "O",
                          title: r.title,
                          price: r.price,
                          count: 1,
                        }),
                        (n.paidPrice += r.price));
                    }
                    if (
                      n.isShowUpPeisong() &&
                      "O" == r.type &&
                      -1 != r.title.indexOf("配送费")
                    ) {
                      var f = r.title + "|" + r.price;
                      n.paidPriceMap[f] ||
                        ((n.paidPriceMap[f] = {
                          type: "O",
                          title: r.title,
                          price: r.price,
                          count: 1,
                        }),
                        (n.paidPrice += r.price));
                    }
                  }),
                    (n.paidPrice = (0, a.S2)(n.paidPrice));
                },
              },
              {
                key: "calculatePriceThatWeNeedTake",
                value: function (e, t) {
                  var n,
                    r = this;
                  null === (n = this.getRefundPriceDetail(e)) ||
                    void 0 === n ||
                    n.forEach(function (e) {
                      if (!t || (null != e && e.force)) {
                        r.refundPrice += e.price;
                        var n = e.title + "|" + e.price;
                        r.refundPriceMap[n]
                          ? (r.refundPriceMap[n].count += 1)
                          : (r.refundPriceMap[n] = {
                              type: "P",
                              title: e.title,
                              price: e.price,
                              count: 1,
                            });
                      }
                    });
                },
              },
              {
                key: "calculateXProductHadPaid",
                value: function (e) {
                  var t = this;
                  null != e &&
                    e.canRefund &&
                    null != e &&
                    e.isSelected &&
                    ((t.paidPriceMap[e.token] = {
                      type: "O",
                      title: e.title,
                      price: e.price,
                      count: 1,
                    }),
                    (t.paidPrice += e.price)),
                    (t.paidPrice = (0, a.S2)(t.paidPrice));
                },
              },
              {
                key: "calculateXProductRefundPrice",
                value: function (e) {
                  null != e &&
                    e.canRefund &&
                    null != e &&
                    e.isSelected &&
                    e.handlingFee &&
                    ((this.refundPriceMap[e.token] = {
                      type: "O",
                      title: e.handlingFeeRemark,
                      price: -e.handlingFee,
                      count: 1,
                    }),
                    (this.refundPrice += -e.handlingFee));
                },
              },
              {
                key: "setSegmentList",
                value: function (e) {
                  this.recordData.segmentList = e;
                },
              },
              {
                key: "setSelectReason",
                value: function (e) {
                  this.selectReason = e;
                },
              },
              {
                key: "setSelectElectronic",
                value: function (e) {
                  this.isSelectElectronic = e;
                },
              },
              {
                key: "setInvoiceSelected",
                value: function (e) {
                  this.isOpenInvoiceSwitch = e;
                },
              },
              {
                key: "getInvoiceSelected",
                value: function () {
                  return this.isOpenInvoiceSwitch;
                },
              },
              {
                key: "getSubmitRemark",
                value: function () {
                  var e, t, n;
                  return this.selectReason
                    ? (null === (n = this.selectReason) || void 0 === n
                        ? void 0
                        : n.submitTips) || ""
                    : (null === (e = this.refundData) ||
                      void 0 === e ||
                      null === (t = e.hintText) ||
                      void 0 === t
                        ? void 0
                        : t.submitPopText) ||
                        "申请提交后不可撤销，请确保您的机票未值机，否则退票失败重新申请可能导致退票费用上涨。";
                },
              },
              {
                key: "getNeedShowInvoice",
                value: function () {
                  return this.needShowInvoice;
                },
              },
              {
                key: "getIsFreePrice",
                value: function () {
                  return this.isFreePrice;
                },
              },
              {
                key: "getOrderData",
                value: function () {
                  return this.orderData;
                },
              },
              {
                key: "getRefundData",
                value: function () {
                  return this.refundData;
                },
              },
              {
                key: "getSelectReason",
                value: function () {
                  return this.selectReason;
                },
              },
              {
                key: "getRecordData",
                value: function () {
                  return this.recordData;
                },
              },
              {
                key: "getSegmentList",
                value: function () {
                  var e;
                  return null === (e = this.recordData) || void 0 === e
                    ? void 0
                    : e.segmentList;
                },
              },
              {
                key: "getSelectSegmentList",
                value: function () {
                  return this.selectSegmentList;
                },
              },
              {
                key: "setSelectSegmentList",
                value: function (e) {
                  return (this.selectSegmentList = e);
                },
              },
              {
                key: "getIsFirstRefund",
                value: function () {
                  return this.isFirstRefund;
                },
              },
              {
                key: "getXProducts",
                value: function () {
                  return this.xProducts;
                },
              },
              {
                key: "getIsValidPrice",
                value: function () {
                  return this.isValidPrice;
                },
              },
              {
                key: "getIsIntl",
                value: function () {
                  return this.isIntl;
                },
              },
              {
                key: "getInitSelectInvoice",
                value: function () {
                  return this.initSelectInvoice;
                },
              },
              {
                key: "getIsFirstNeedInvoice",
                value: function () {
                  return !this.isPassengerHadRequestInvoice;
                },
              },
              {
                key: "isNeedShowInvoice",
                value: function () {
                  var e = this;
                  if (this.isFirstRefund) {
                    var t = u().sum(
                      this.selectTickets.map(function (t) {
                        var n;
                        return u().sum(
                          null === (n = e.getRefundPriceDetail(t)) ||
                            void 0 === n
                            ? void 0
                            : n.map(function (e) {
                                return e.price || 0;
                              })
                        );
                      })
                    );
                    this.needShowInvoice = !(0 == t || !this.isValidPrice);
                  } else this.needShowInvoice = !1;
                },
              },
              {
                key: "calculateRefundInvoiceDeliveryFee",
                value: function () {
                  var e, t, n;
                  if (
                    this.needShowInvoice &&
                    this.isOpenInvoiceSwitch &&
                    this.getIsPaperInvoice()
                  ) {
                    var r =
                      null === (e = this.refundData) ||
                      void 0 === e ||
                      null === (t = e.refundFeeInvoiceInfo) ||
                      void 0 === t ||
                      null === (n = t.invoiceRelateInfo) ||
                      void 0 === n
                        ? void 0
                        : n.deliveryPrice;
                    (this.refundPrice -= r),
                      (this.refundPriceMap["配送费|" + r] = {
                        type: "O",
                        title: "配送费",
                        price: -r,
                        count: 1,
                      });
                  }
                },
              },
              {
                key: "calculateIsAllPersonSelected",
                value: function () {
                  var e,
                    t,
                    n = 0;
                  null === (e = this.refundData) ||
                    void 0 === e ||
                    e.segmentList.forEach(function (e) {
                      e.tickets.forEach(function (e) {
                        e.refundable && n++;
                      });
                    }),
                    (this.isAllTicketRefund =
                      n ==
                      (null === (t = this.selectTickets) || void 0 === t
                        ? void 0
                        : t.length));
                },
              },
              {
                key: "isShowUpPeisong",
                value: function () {
                  var e,
                    t,
                    n,
                    r,
                    i = this;
                  return (
                    !(
                      null === (e = this.refundData) ||
                      void 0 === e ||
                      null === (t = e.refundFeeInvoiceInfo) ||
                      void 0 === t ||
                      !t.deliveryHasPaid
                    ) &&
                    (this.isAllTicketRefund
                      ? !(
                          null !== (n = this.refundData) &&
                          void 0 !== n &&
                          null !== (r = n.refundFeeInvoiceInfo) &&
                          void 0 !== r &&
                          r.hasRefundFeeInvoice
                        )
                      : !!this.isFirstRefund &&
                        !(
                          0 ==
                            u().sum(
                              this.selectTickets.map(function (e) {
                                var t;
                                return u().sum(
                                  null === (t = i.getRefundPriceDetail(e)) ||
                                    void 0 === t
                                    ? void 0
                                    : t.map(function (e) {
                                        return e.price || 0;
                                      })
                                );
                              })
                            ) || !this.isValidPrice
                        ) &&
                        this.isOpenInvoiceSwitch)
                  );
                },
              },
              {
                key: "getIsPaperInvoice",
                value: function () {
                  var e, t, n, r, i, o;
                  return this.isPassengerHadRequestInvoice
                    ? 2 !=
                        (null === (n = this.refundData) ||
                        void 0 === n ||
                        null === (r = n.refundFeeInvoiceInfo) ||
                        void 0 === r
                          ? void 0
                          : r.deliveryType) &&
                        (!(
                          null === (i = this.refundData) ||
                          void 0 === i ||
                          null === (o = i.refundFeeInvoiceInfo) ||
                          void 0 === o ||
                          !o.deliveryHasPaid
                        ) ||
                          void 0)
                    : null === (e = this.refundData) ||
                        void 0 === e ||
                        null === (t = e.refundFeeInvoiceInfo) ||
                        void 0 === t ||
                        !t.canChooseElectronic ||
                        1 == this.isSelectElectronic;
                },
              },
            ]),
            e
          );
        })(),
        s = n(90384);
      function d(e) {
        var t = e.refundModel,
          n = e.applyData,
          i = e.orderData;
        if ((console.log("refundModel not empty ".concat(!!t)), t)) return t;
        if (s.Z.isEmptyObject(n)) {
          var o = (0, r.DH)("flightRefundData");
          (n = null == o ? void 0 : o.applyData),
            (i = null == o ? void 0 : o.orderData);
        }
        var a = new l(n, i);
        return a.initData(), a;
      }
    },
    33357: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return b;
        },
        Nm: function () {
          return N;
        },
        JN: function () {
          return g;
        },
        iN: function () {
          return h;
        },
        qy: function () {
          return y;
        },
        PC: function () {
          return m;
        },
        eu: function () {
          return _;
        },
        Yy: function () {
          return C;
        },
        Ak: function () {
          return s;
        },
        Hv: function () {
          return v;
        },
        b3: function () {
          return p;
        },
        Hk: function () {
          return f;
        },
        S2: function () {
          return T;
        },
        cW: function () {
          return Z;
        },
      });
      var r = n(22276),
        i = n(298),
        o = { GO: "去程", BACK: "返程" },
        a = n(19972),
        c = (n(92954), n(8271)),
        u = n.n(c),
        l = n(50238);
      function s(e, t) {
        var n = (function (e, t) {
          if (5 !== t) return null;
          var n = { go: !1, back: !1 },
            r = [],
            i = [],
            o = [],
            a = [];
          return (
            e.forEach(function (e) {
              var t,
                n,
                c =
                  null == e || null === (t = e.segmentInfo) || void 0 === t
                    ? void 0
                    : t.segmentNum,
                u =
                  null == e || null === (n = e.segmentInfo) || void 0 === n
                    ? void 0
                    : n.sequenceNum;
              1 == c
                ? 1 == u
                  ? r.push(e)
                  : 2 == u && o.push(e)
                : 2 == c && (1 == u ? i.push(e) : 2 == u && a.push(e));
            }),
            (null == r ? void 0 : r.length) > 0 &&
              (null == o ? void 0 : o.length) > 0 &&
              (n.go = !0),
            (null == i ? void 0 : i.length) > 0 &&
              (null == a ? void 0 : a.length) > 0 &&
              (n.back = !0),
            n
          );
        })(null == e ? void 0 : e.segmentList, t);
        return (
          null == e ||
            e.segmentList.forEach(function (e, r) {
              var i, o, a, c, l, s;
              (e.isSelected = !1),
                (e.tagLabel = d(
                  t,
                  null == e || null === (i = e.segmentInfo) || void 0 === i
                    ? void 0
                    : i.segmentNum,
                  null == e || null === (o = e.segmentInfo) || void 0 === o
                    ? void 0
                    : o.sequenceNum,
                  n
                )),
                (e.route =
                  (null == e || null === (a = e.segmentInfo) || void 0 === a
                    ? void 0
                    : a.departCityName) +
                  "-" +
                  (null == e || null === (c = e.segmentInfo) || void 0 === c
                    ? void 0
                    : c.arriveCityName)),
                (e.formateDepartDate = u()(
                  null == e || null === (l = e.segmentInfo) || void 0 === l
                    ? void 0
                    : l.departDateTime
                ).format("MM月DD日 HH:mm")),
                (e.formateDepartDate2 = u()(
                  null == e || null === (s = e.segmentInfo) || void 0 === s
                    ? void 0
                    : s.departDateTime
                ).format("MM-DD HH:mm")),
                null == e ||
                  e.tickets.forEach(function (t) {
                    var n, i, o;
                    (t.uniKey =
                      e.route + t.passengerName + e.formateDepartDate),
                      (t.departCityName =
                        null == e ||
                        null === (n = e.segmentInfo) ||
                        void 0 === n
                          ? void 0
                          : n.departCityName),
                      (t.arriveCityName =
                        null == e ||
                        null === (i = e.segmentInfo) ||
                        void 0 === i
                          ? void 0
                          : i.arriveCityName),
                      (t.segmentIdx = r);
                    var a = {},
                      c = "";
                    null == t ||
                      null === (o = t.limits) ||
                      void 0 === o ||
                      o.forEach(function (e) {
                        ("ONETICKET" != e.code && "SEQ_USE" != e.code) ||
                        !e.info
                          ? "ORDERKEY" == e.code && e.info && (c = e.info)
                          : (a[null == e ? void 0 : e.info] = !0);
                      }),
                      (t.mustTogetherRefundToken = a),
                      (t.uniOrderKey = c);
                  });
            }),
          e
        );
      }
      function d(e, t, n, r) {
        var i =
          1 == t ? (null == r ? void 0 : r.go) : null == r ? void 0 : r.back;
        return 2 == e
          ? 1 == t
            ? o.GO
            : o.BACK
          : 3 == e
          ? "第".concat(t, "程")
          : 4 == e
          ? "第".concat(n, "程")
          : 5 == e
          ? "".concat(1 == t ? o.GO : o.BACK).concat(i ? n : "")
          : "";
      }
      function f(e) {
        var t = e.segmentList,
          n = t.length > 0 ? t[0].tickets : [];
        return (
          t && 1 == t.length && n && 1 == n.length && !0 === n[0].refundable
        );
      }
      function p(e) {
        var t, n, r, i, o;
        return (
          1 ==
            (null == e ||
            null === (t = e[0]) ||
            void 0 === t ||
            null === (n = t.refundReasonList) ||
            void 0 === n
              ? void 0
              : n.length) &&
          (null == e ||
          null === (r = e[0]) ||
          void 0 === r ||
          null === (i = r.refundReasonList) ||
          void 0 === i ||
          null === (o = i[0]) ||
          void 0 === o
            ? void 0
            : o.defaultCheck)
        );
      }
      function h(e, t) {
        var n = {};
        return (
          Object.keys(e).forEach(function (r) {
            var i = e[r];
            null != i &&
              i.isSelected &&
              t.forEach(function (t) {
                var r;
                null == t ||
                  null === (r = t.tickets) ||
                  void 0 === r ||
                  r.forEach(function (t) {
                    var r;
                    t.token &&
                      null != t &&
                      t.refundable &&
                      (null === (r = e[null == t ? void 0 : t.uniKey]) ||
                        void 0 === r ||
                        !r.isSelected) &&
                      i.mustTogetherRefundToken[t.token] &&
                      (n[t.token] = t);
                  });
              });
          }),
          n
        );
      }
      function g(e, t) {
        if (null == e || !e.mustTogetherRefundToken) return "";
        var n = "";
        return (
          Object.keys(null == e ? void 0 : e.mustTogetherRefundToken).forEach(
            function (e) {
              var r = t[e];
              r &&
                (n = "需要和「"
                  .concat(r.departCityName, "-")
                  .concat(r.arriveCityName, "」")
                  .concat(r.passengerName, "的行程一起退票"));
            }
          ),
          n
        );
      }
      function v(e, t) {
        var n = "";
        return (
          Object.keys(e).forEach(function (r) {
            var i = e[r];
            null != i &&
              i.isSelected &&
              null != i &&
              i.uniOrderKey &&
              null != t &&
              t.token &&
              (null == i ? void 0 : i.uniOrderKey) !=
                (null == t ? void 0 : t.uniOrderKey) &&
              (n = "无法与乘机人"
                .concat(i.passengerName, "从")
                .concat(i.departCityName, "前往")
                .concat(i.arriveCityName, "的行程一起退票，请分开提交")),
              i.isStudentSelect != t.isStudentSelect &&
                (n = "按航司规定，同行乘客需和学生乘客分开提交退票申请");
          }),
          n
        );
      }
      function m(e) {
        if (!e || 0 == (null == e ? void 0 : e.length)) return "";
        var t = "";
        return (
          null == e ||
            e.forEach(function (e) {
              t = t
                ? "".concat(t, "、").concat(e.passengerName)
                : "".concat(e.passengerName);
            }),
          t
        );
      }
      function _(e, t, n) {
        if (!e) return {};
        var r = {},
          o = (function (e, t) {
            var n = [];
            e.forEach(function (e) {
              var r,
                o,
                a =
                  (null == t ||
                  null === (r = t.getTicketReason(e)) ||
                  void 0 === r ||
                  null === (o = r.refundReduceDetails) ||
                  void 0 === o
                    ? void 0
                    : o.map(function (t) {
                        return (0,
                        i.Z)((0, i.Z)({}, t), {}, { showName: "".concat(t.title, "(").concat(e.passengerName, ")"), useSelected: !1, refundSelected: !1, canReduceProductRefund: !0, canReduceProductUse: !0, isSelected: !1, type: "refundReduce" });
                      })) || [];
              n = n.concat(a);
            });
            var r = [],
              o = {};
            return (
              n.forEach(function (e) {
                r.push(e.token),
                  (o[e.token] = {}),
                  (o[e.token].useSelected = !1),
                  (o[e.token].refundSelected = !1);
              }),
              { refundReduceLists: n, reduceTokens: r, reduceTokenObj: o }
            );
          })(e, n),
          a = o.refundReduceLists,
          c = o.reduceTokens,
          u = o.reduceTokenObj;
        e.forEach(function (n) {
          (n.refundAllProducts = (function (e, t, n) {
            var r = [];
            return (
              null == e ||
                e.forEach(function (e) {
                  var t = (0, i.Z)(
                    (0, i.Z)((0, i.Z)({}, e), e.priceDetail),
                    {},
                    { type: "insurance" }
                  );
                  r.push(t);
                }),
              null == t ||
                t.forEach(function (e) {
                  var t,
                    o = (0, i.Z)(
                      (0, i.Z)({}, e),
                      {},
                      { type: "xProduct", oriCanRefund: e.canRefund }
                    );
                  (o.canRefund = n
                    ? null !== (t = o.isJustSupportFlightChangeRefund) &&
                      void 0 !== t
                      ? t
                      : o.canRefund
                    : o.oriCanRefund),
                    r.push(o);
                }),
              r
            );
          })(n.insuranceDetails, n.xProductDetails, t)),
            n.refundAllProducts &&
              n.refundAllProducts.forEach(function (t) {
                if (!c.includes(t.token))
                  return r[t.title]
                    ? t.canRefund
                      ? (r[t.title].canRefundNumber++,
                        r[t.title].canRefundList.push(n),
                        void (r[t.title].canRefundProduct = t))
                      : (r[t.title].canNotRefundNumber++,
                        r[t.title].canNotRefundList.push(n),
                        void (r[t.title].canNotRefundProduct = t))
                    : void (r[t.title] = {
                        allTicketLength: null == e ? void 0 : e.length,
                        canRefundNumber: t.canRefund ? 1 : 0,
                        canNotRefundNumber: t.canRefund ? 0 : 1,
                        canRefundList: t.canRefund ? [n] : [],
                        canNotRefundList: t.canRefund ? [] : [n],
                        canNotRefundProduct: t.canRefund ? {} : t,
                        canRefundProduct: t.canRefund ? t : {},
                      });
                r[t.token] = {
                  allTicketLength: null == e ? void 0 : e.length,
                  canRefundNumber: t.canRefund ? 1 : 0,
                  canNotRefundNumber: t.canRefund ? 0 : 1,
                  canRefundList: t.canRefund ? [n] : [],
                  canNotRefundList: t.canRefund ? [] : [n],
                  canNotRefundProduct: t.canRefund ? {} : t,
                  canRefundProduct: t.canRefund ? t : {},
                };
              });
        });
        var l = [],
          s = [];
        for (var d in r) {
          var f = r[d];
          (null == f ? void 0 : f.canRefundNumber) > 0 &&
            (function () {
              var e,
                n,
                r,
                o = "";
              o =
                null === (e = f.canRefundProduct) || void 0 === e
                  ? void 0
                  : e.title;
              var a = "";
              null == f ||
                null === (n = f.canRefundList) ||
                void 0 === n ||
                n.forEach(function (e) {
                  a = ""
                    .concat(a)
                    .concat(a ? "、" : "")
                    .concat(e.passengerName);
                }),
                (o = "".concat(o, "(").concat(a, ")"));
              var c =
                !!t &&
                null !==
                  (r = f.canRefundProduct.isSupportFlightChangeDefaultCheck) &&
                void 0 !== r &&
                r;
              l.push(
                (0, i.Z)(
                  (0, i.Z)({}, f.canRefundProduct),
                  {},
                  { showName: o, isSelected: c }
                )
              );
            })(),
            (null == f ? void 0 : f.canNotRefundNumber) > 0 &&
              (function () {
                var e,
                  t,
                  n = "";
                n =
                  null === (e = f.canNotRefundProduct) || void 0 === e
                    ? void 0
                    : e.title;
                var r = "";
                null == f ||
                  null === (t = f.canNotRefundList) ||
                  void 0 === t ||
                  t.forEach(function (e) {
                    r = ""
                      .concat(r)
                      .concat(r ? "、" : "")
                      .concat(e.passengerName);
                  }),
                  (n = "".concat(n, "(").concat(r, ")")),
                  s.push(
                    (0, i.Z)(
                      (0, i.Z)({}, f.canNotRefundProduct),
                      {},
                      { showName: n, isSelected: !1 }
                    )
                  );
              })();
        }
        return (
          console.log("退立减", a),
          {
            canRefundProductLists: l,
            canNotRefundProductLists: s,
            refundReduceLists: a,
            reduceTokenObj: u,
          }
        );
      }
      function y(e) {
        var t = "";
        return e
          ? (e.forEach(function (e) {
              t = ""
                .concat(t)
                .concat(t ? "、" : "")
                .concat(e.passengerName);
            }),
            t)
          : t;
      }
      function b(e) {
        if (!e || 0 == e.length) return "";
        var t = "";
        return (
          null == e ||
            e.forEach(function (e) {
              var n;
              null == e ||
                null === (n = e.canRefundProductLists) ||
                void 0 === n ||
                n.forEach(function (n) {
                  var r =
                    e.reduceTokenObj[n.token] &&
                    e.reduceTokenObj[n.token].useSelected;
                  n.isSelected ||
                    -1 !== t.indexOf(n.title) ||
                    r ||
                    (t = ""
                      .concat(t)
                      .concat(t ? "、" : "")
                      .concat(n.title));
                });
            }),
          t ? "您还有".concat(t, "未退订，是否一并退订") : ""
        );
      }
      function Z(e) {
        return new Promise(function (t) {
          var n = [],
            i = [];
          null == e ||
            e.forEach(function (e) {
              var t;
              null == e ||
                null === (t = e.selectTickets) ||
                void 0 === t ||
                t.forEach(function (e) {
                  (function (e) {
                    var t, n, r, i;
                    e.proofList &&
                      ((e.photos =
                        null === (t = e.proofList) ||
                        void 0 === t ||
                        null ===
                          (n = t.map(function (e) {
                            return e.photos;
                          })) ||
                        void 0 === n
                          ? void 0
                          : n.reduce(function (e, t) {
                              return e.concat(t);
                            }, [])),
                      (e.typeCodes =
                        null === (r = e.proofList) ||
                        void 0 === r ||
                        null ===
                          (i = r.map(function (e) {
                            return e.photos.map(function (t) {
                              return e.typeCode;
                            });
                          })) ||
                        void 0 === i
                          ? void 0
                          : i.reduce(function (e, t) {
                              return e.concat(t);
                            }, [])));
                  })(e),
                    e.photos &&
                      e.photos.forEach(function (e) {
                        n.push({
                          isAuthorization: !0,
                          scene: "vMWWqBvKQSlcfDaltngv",
                          channelName: "ztFlightAfterSale",
                          isPublic: !0,
                          imagePath: e.replace("file://", ""),
                        });
                      }),
                    e.photos && i.push.apply(i, (0, r.Z)(e.photos));
                });
            }),
            n && 0 == n.length
              ? t(2)
              : ((0, a.Q)("正在上传退票材料...", function () {}, !1),
                (function (e, t, n) {
                  console.log("uploadImages", t),
                    (0, l.XZ)({ filePaths: t }).then(function (e) {
                      n({
                        images:
                          (null == e
                            ? void 0
                            : e.map(function (e) {
                                return {
                                  success: !0,
                                  remoteUrl: null == e ? void 0 : e.imgUrl,
                                };
                              })) || [],
                      });
                    });
                })(0, i, function (n) {
                  console.log("uploadImages.result", JSON.stringify(n));
                  var r = 0,
                    i = 0;
                  null == e ||
                    e.forEach(function (e) {
                      var t;
                      null == e ||
                        null === (t = e.selectTickets) ||
                        void 0 === t ||
                        t.forEach(function (e) {
                          (e.urlPhotos = []),
                            e.photos &&
                              e.photos.forEach(function (t, o) {
                                n.images[r]
                                  ? n.images[r].success || n.images[r].remoteUrl
                                    ? ((e.urlPhotos[o] = n.images[r].remoteUrl),
                                      r++,
                                      console.log("numberPhoto++", r))
                                    : (i++, console.log("wrongNumber1++", i))
                                  : (i++, console.log("wrongNumber2++", i));
                              });
                        });
                    }),
                    (0, a.Z)(),
                    t(0 == i ? e : 0);
                }));
        });
      }
      function C(e, t, n, r, i) {
        var o,
          a = (function (e, t) {
            var n = [];
            return (
              null == e ||
                e.forEach(function (e) {
                  var r;
                  null == e ||
                    null === (r = e.selectTickets) ||
                    void 0 === r ||
                    r.forEach(function (r) {
                      var i,
                        o,
                        a,
                        c,
                        u,
                        l,
                        s,
                        d,
                        f,
                        p = [],
                        h = [];
                      null == r ||
                        null === (i = r.insuranceDetails) ||
                        void 0 === i ||
                        i.forEach(function (t) {
                          var n;
                          null == e ||
                            null === (n = e.canRefundProductLists) ||
                            void 0 === n ||
                            n.forEach(function (e) {
                              null != e &&
                                e.isSelected &&
                                (null == e ? void 0 : e.title) ==
                                  (null == t ? void 0 : t.title) &&
                                p.push(t.title);
                            });
                        }),
                        null == r ||
                          null === (o = r.xProductDetails) ||
                          void 0 === o ||
                          o.forEach(function (t) {
                            var n;
                            null == e ||
                              null === (n = e.canRefundProductLists) ||
                              void 0 === n ||
                              n.forEach(function (e) {
                                null != e &&
                                  e.isSelected &&
                                  (null == e ? void 0 : e.title) ==
                                    (null == t ? void 0 : t.title) &&
                                  h.push(t.title);
                              });
                          });
                      var g =
                        (null == t ||
                        null === (a = t.getTicketReason(r)) ||
                        void 0 === a ||
                        null === (c = a.refundReduceDetails) ||
                        void 0 === c
                          ? void 0
                          : c.filter(function (t) {
                              var n, r;
                              return null == e ||
                                null === (n = e.reduceTokenObj) ||
                                void 0 === n ||
                                null === (r = n[t.token]) ||
                                void 0 === r
                                ? void 0
                                : r.useSelected;
                            })) || [];
                      console.log("redunceList", g);
                      var v =
                        null == t ||
                        null === (u = t.getTicketReason(r)) ||
                        void 0 === u
                          ? void 0
                          : u.computable;
                      n.push({
                        refundReduceList: g.map(function (e) {
                          return e.token;
                        }),
                        flightNumber:
                          null == e ||
                          null === (l = e.segmentInfo) ||
                          void 0 === l
                            ? void 0
                            : l.flightNumber,
                        passengerName: r.passengerName,
                        token: null == r ? void 0 : r.token,
                        submitInsuranceList: p,
                        submitXProductList: h,
                        proofList:
                          (null == r ||
                          null === (s = r.urlPhotos) ||
                          void 0 === s
                            ? void 0
                            : s.map(function (e, t) {
                                var n;
                                return {
                                  typeCode:
                                    null == r ||
                                    null === (n = r.typeCodes) ||
                                    void 0 === n
                                      ? void 0
                                      : n[t],
                                  url: e,
                                };
                              })) || [],
                        refundFee: v
                          ? (null == t ||
                            null === (d = t.getRefundPriceDetail(r)) ||
                            void 0 === d ||
                            null ===
                              (f = d.find(function (e) {
                                return (
                                  "REFUND_FEE" === (null == e ? void 0 : e.code)
                                );
                              })) ||
                            void 0 === f
                              ? void 0
                              : f.price) || 0
                          : -1,
                        feeComputable: v || !1,
                      });
                    });
                }),
              n
            );
          })(e, i),
          c = {};
        return (
          null != n &&
            n.isShowInvoice &&
            null != n &&
            n.invoiceSelected &&
            ((c.enableElectronicDelivery =
              null == n ? void 0 : n.enableElectronicDelivery),
            (c.deliveryInfo = (function (e, t, n) {
              var r = t.deliveryDetailAddress,
                i = t.receiver,
                o = t.receiverMobile,
                a = t.provinceName,
                c = t.cityName,
                u = t.areaName,
                l = t.deliveryAddress;
              return {
                deliveryType: n ? 1 : 2,
                province: a,
                city: c,
                district: u,
                address: l + r,
                contactName: i,
                contactPhone: o,
                countryCode: "",
                email: e,
              };
            })(n.email, n.address, n.isPaper)),
            (c.invoiceInfo = (function (e) {
              var t = e.invoiceType,
                n = e.taxNumber,
                r = e.invoiceTitle;
              return {
                invoiceType: t,
                invoiceTitle: r,
                taxNumber: n,
                companyAddress: null == e ? void 0 : e.companyAddress,
                bankAccount: null == e ? void 0 : e.bankAccount,
                companyPhone: null == e ? void 0 : e.companyMobile,
                openAccountBank: null == e ? void 0 : e.openAccountBank,
              };
            })(n.invoiceHead)),
            (c.remarkDetailList = (function (e) {
              var t = [];
              if (!e) return t;
              for (var n in e)
                e[n] &&
                  ("行程信息" == n
                    ? t.push({ type: "TRIP" })
                    : "航班号" == n
                    ? t.push({ type: "FLIGHT_NUMBER" })
                    : "乘机人" == n && t.push({ type: "PASSENGER" }));
              return t;
            })(n.selectedRemarkObj))),
          {
            orderNumber: t,
            returnTicketList: a,
            userAction:
              (null == i || null === (o = i.getSelectReason()) || void 0 === o
                ? void 0
                : o.userAction) || "",
            xTokens: w(r),
            refundFeeInvoiceInfo: c,
          }
        );
      }
      function w(e) {
        return e && 0 != (null == e ? void 0 : e.length)
          ? null == e
            ? void 0
            : e
                .filter(function (e) {
                  return !!e.isSelected;
                })
                .map(function (e) {
                  return e.token;
                })
          : [];
      }
      function N(e, t, n, r) {
        return e && 0 == r ? t : n;
      }
      function T(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
        return "number" != typeof e ? e : parseFloat(e.toPrecision(t));
      }
    },
    90729: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return d;
        },
      });
      var r = n(79301),
        i = n(95308),
        o = n(8271),
        a = n.n(o),
        c = function (e) {
          return !Array.isArray(e) || e.length <= 0;
        },
        u = function (e, t) {
          if (!e || !t) return 0;
          var n = new Date(e).getTime();
          return (new Date(t).getTime() - n) / 864e5;
        },
        l = function (e) {
          return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
            a()(e).format("d")
          ];
        };
      function s(e) {
        return new Promise(function (t) {
          setTimeout(function () {
            t(null);
          }, e);
        });
      }
      var d = function e(t, n) {
        return t(n)
          .then(
            (function () {
              var o = (0, i.Z)(
                (0, r.Z)().mark(function i(o) {
                  var a, c, u;
                  return (0, r.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (1 != o.resultCode) {
                            r.next = 11;
                            break;
                          }
                          if (o.asyncData) {
                            r.next = 3;
                            break;
                          }
                          return r.abrupt("return", o.data);
                        case 3:
                          if (
                            ((a = o.asyncData),
                            (c = a.resultState),
                            (u = a.interval),
                            0 != c)
                          ) {
                            r.next = 6;
                            break;
                          }
                          return r.abrupt("return", o.data);
                        case 6:
                          return (r.next = 8), s(u);
                        case 8:
                          return r.abrupt("return", e(t, n));
                        case 11:
                          throw new Error(
                            o.resultMessage || "网络异常，请稍后重试~"
                          );
                        case 12:
                        case "end":
                          return r.stop();
                      }
                  }, i);
                })
              );
              return function (e) {
                return o.apply(this, arguments);
              };
            })()
          )
          .catch(function () {
            throw new Error("请求失败，请重试");
          });
      };
      t.Z = {
        isEmptyObject: function (e) {
          if (!e) return !0;
          var t;
          for (t in e) return !1;
          return !0;
        },
        isEmptyArray: c,
        emptyOrUndefined: function (e) {
          return void 0 === e || "null" === e || "" === e || null == e;
        },
        formatPhoneList: function (e) {
          return c(e)
            ? null
            : e.map(function (e, t) {
                return (
                  (e = (e = Object.values(e)[0]).replace(/-| /g, "")).length >
                    11 && (e = e.substr(-11, 11)),
                  { key: t + "", val: e, id: e }
                );
              });
        },
        isValidPhoneNumber: function (e) {
          if (!e) return !1;
          var t = e.replace(/[-\s]/g, "");
          return !!/^1\d{10}$/.test(t);
        },
        isEmail: function (e) {
          return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            e
          );
        },
        getDayDiff: u,
        getWeekDayDesc: function (e) {
          var t = u(a()().format("YYYY-MM-DD"), e);
          return 0 === t ? "今天" : 1 === t ? "明天" : 2 === t ? "后天" : l(e);
        },
        getWeekDay: l,
        throttle: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 800,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : function () {},
            r = 0;
          return function () {
            for (
              var i = this,
                o = Date.now(),
                a = arguments.length,
                c = new Array(a),
                u = 0;
              u < a;
              u++
            )
              c[u] = arguments[u];
            o - r > t ? (e.apply(i, c), (r = o)) : n.apply(i, c);
          };
        },
      };
    },
    8079: function (e, t, n) {
      "use strict";
      n.d(t, {
        Fw: function () {
          return C;
        },
        G2: function () {
          return g;
        },
        I0: function () {
          return s;
        },
        JZ: function () {
          return u;
        },
        Kt: function () {
          return p;
        },
        MQ: function () {
          return _;
        },
        NF: function () {
          return m;
        },
        Of: function () {
          return N;
        },
        Oq: function () {
          return y;
        },
        _j: function () {
          return c;
        },
        aP: function () {
          return l;
        },
        kH: function () {
          return f;
        },
        n1: function () {
          return a;
        },
        nH: function () {
          return b;
        },
        ns: function () {
          return w;
        },
        qr: function () {
          return Z;
        },
        rL: function () {
          return h;
        },
        wQ: function () {
          return v;
        },
        yX: function () {
          return d;
        },
      });
      var r = n(23577),
        i = n(1112),
        o = "709988",
        a = (0, i.Z)({
          serviceCode: "16586",
          channel: r.Z.flight_channel,
          path: "getCommonPassengerV1",
        }),
        c = (0, i.Z)({
          serviceCode: "19363",
          channel: r.Z.flight_channel,
          path: "SurprisedGrabPriceRecommend",
        }),
        u = (0, i.Z)({
          serviceCode: "19363",
          channel: r.Z.flight_channel,
          path: "SurprisedGrabCreateOrder",
        }),
        l = (0, i.Z)({
          serviceCode: "17094",
          channel: r.Z.flight_channel,
          path: "GetGoodsIdV2",
        }),
        s = (0, i.Z)({
          serviceCode: "17766",
          channel: r.Z.flight_channel,
          path: "GetSingleFlights",
        }),
        d = (0, i.Z)({
          serviceCode: "19363",
          channel: r.Z.flight_channel,
          path: "SurprisedGrabOrderDetail",
        }),
        f = (0, i.Z)({
          serviceCode: "19363",
          channel: r.Z.flight_channel,
          path: "SurprisedGrabOrderUrge",
        }),
        p = (0, i.Z)({
          serviceCode: "19363",
          channel: r.Z.flight_channel,
          path: "cancelGrabOrder",
        }),
        h = (0, i.Z)({
          serviceCode: "19363",
          channel: r.Z.flight_channel,
          path: "surprisedGrabOrderGetSpecifiedFlight",
        }),
        g =
          ((0, i.Z)({
            serviceCode: "17094",
            channel: r.Z.flight_channel,
            path: "OrderDetail",
            correctVersion: o,
          }),
          (0, i.Z)({
            serviceCode: "18366",
            channel: r.Z.flight_channel,
            path: "RefundOperation",
            correctVersion: o,
          })),
        v = (0, i.Z)({
          serviceCode: "17420",
          channel: r.Z.flight_channel,
          path: "doUrging",
        }),
        m = (0, i.Z)({
          serviceCode: "17094",
          channel: r.Z.flight_channel,
          path: "RefundDetail",
        }),
        _ = (0, i.Z)({
          serviceCode: "18366",
          channel: r.Z.flight_channel,
          path: "ticketReturnSubmit",
          timeout: 40,
        }),
        y = (0, i.Z)({
          serviceCode: "18366",
          channel: r.Z.flight_channel,
          path: "searchChangeList",
          correctVersion: "710024",
        }),
        b = (0, i.Z)({
          serviceCode: "18366",
          channel: r.Z.flight_channel,
          path: "getRebookProduct",
          correctVersion: "710024",
        }),
        Z = (0, i.Z)({
          serviceCode: "17094",
          channel: r.Z.flight_channel,
          path: "FlightRebookDetail",
          correctVersion: "710024",
        }),
        C = (0, i.Z)({
          serviceCode: "18366",
          channel: "",
          path: "rebookCheck",
          correctVersion: "710024",
        }),
        w = (0, i.Z)({
          serviceCode: "18366",
          channel: "",
          path: "rebook",
          correctVersion: "710024",
        }),
        N = (0, i.Z)({
          serviceCode: "18366",
          channel: r.Z.flight_channel,
          path: "rebookCancel",
          correctVersion: "710024",
        });
      (0, i.Z)({
        serviceCode: "16586",
        channel: r.Z.flight_channel,
        path: "getRecipientAddress",
        correctVersion: o,
      }),
        (0, i.Z)({
          serviceCode: "16586",
          channel: r.Z.flight_channel,
          path: "getReimburseInfo",
          correctVersion: o,
        }),
        (0, i.Z)({
          serviceCode: "18366",
          channel: r.Z.flight_channel,
          path: "getHint",
          correctVersion: o,
        }),
        (0, i.Z)({ serviceCode: "16484", path: "FlightInfoDetail" });
    },
    96677: function (e, t, n) {
      "use strict";
      var r = {
        black: "#000000",
        white: "#FFFFFF",
        border_e3: "#E3E3E3",
        border_e5: "#E5E5E5",
        grey_cc: "#cccccc",
        grey_f4: "#f4f4f4",
        grey_f5: "#f5f5f5",
        grey_f8: "#f8f8f8",
        grey_22: "#222222",
        grey_33: "#333333",
        grey_88: "#888888",
        grey_66: "#666666",
        grey_99: "#999999",
        grey_f7: "#f7f7f7",
        grey_e6: "#e6e6e6",
        grey_e5: "#e5e5e5",
        grey_b0: "#b0b0b0",
        grey_c7: "#c7c7c7",
        grey_dd: "#dddddd",
        main_bg: "#f5f5f5",
        zxMainColor: "#198CFF",
        tyMainColor: "#fc6e51",
        night_blue: "#3c4365",
        orange: "#ff9f1f",
        priceColor: "#FF5959",
        green: "#03B86F",
        darkGreen: "#29AD46",
        disabledColor: "#BCBCBC",
        gold: "#D98C21",
        warning: "#FFF8ED",
        warningText: "#F76E21",
        shallow_blue: "#F5F8FD",
        zxBlueTyGreyCC: "#198CFF",
        zxNewBlueTyOldBlue: "#198CFF",
        zxNewOrangeTyOldOrange: "#FF5959",
        orange_tans_50: "#FF595980",
        zxNewOrangeTyOldOrangeBorderColor: "#FFBDBD",
        main_color_trans_50: "#198CFF80",
        main_color_trans_80: "#198CFF33",
        dialog_bg: "rgba(0, 0, 0, 0.75)",
        borderColor: "#FFBCBC80",
        priceColorSemi: "#FF595980",
        mainColorShallow: "#F2F9FF",
        yellow_banner_bg: "#FFF8ED",
        borderShallowColor: "#85C2FF",
        btn_bg_light_color: "#E8F3FF",
      };
      n(23577).Z.isTieyou
        ? Object.assign(r, {
            mainColor: "#FC6E51",
            tyNightBlueZxBlue: "#3c4365",
            headStartColor: "#3c4365",
            headEndColor: "#3c4365",
            mainLight: "#FFE7DF",
            filterBg: "#FFF4F1",
            flightBg: "#FEF0ED",
            priceColor: "#FC6E51",
            zxBlueTyGreen: "#03B86F",
            zxLightBlueTyOrange: "#FEF0ED",
            mainColorLight: "#FFAA99",
            zxBlueTyGreyCC: "#CCCCCC",
            zxNewBlueTyOldBlue: "#5495E6",
            zxNewOrangeTyOldOrange: "#FC6E51",
            zxNewOrangeTyOldOrangeBorderColor: "#FC6E51",
            linearStartOrange: "#FF925A",
            linearEndOrange: "#FC6E51",
            headerLinearStartColor: "#3C4365",
            headerLinearEndColor: "#3C4365",
            tagBg: "#EEEFF6",
            tagBgV2: "#FFEDE9",
            main_color_trans_50: "#FC6E5180",
            orange_trans_50: "#FC6E5180",
            mainColorShallow: "#FFEDE9",
            main_color_trans_80: "#FC6E5133",
            orangeColor: "#FC6E51",
            priceColorSemi: "#FF595980",
            borderShallowColor: "#FDB2A2",
            btn_bg_light_color: "#FFF0EC",
          })
        : Object.assign(r, {
            mainColor: "#198CFF",
            tyNightBlueZxBlue: "#198CFF",
            mainLight: "#CCE0F9",
            filterBg: "#EDF5FB",
            flightBg: "#E9F3FF",
            priceColor: "#FF5959",
            zxBlueTyGreen: "#198CFF",
            zxLightBlueTyOrange: "#F2F8FF",
            mainColorLight: "#94BDEF",
            zxBlueTyGreyCC: "#198CFF",
            zxNewBlueTyOldBlue: "#198CFF",
            zxNewOrangeTyOldOrange: "#FF5959",
            linearStartOrange: "#FE6F40",
            linearEndOrange: "#FF4D4D",
            headerLinearStartColor: "#2693FF",
            headerLinearEndColor: "#0066FF",
            tagBg: "#EAF5FF",
            tagBgV2: "#EAF5FF",
            orange_trans_50: "#FF595980",
            mainColorShallow: "#F2F9FF",
            main_color_trans_80: "#198CFF33",
            orangeColor: "#F76E21",
            priceColorSemi: "#FF595980",
            borderShallowColor: "#85C2FF",
            btn_bg_light_color: "#E8F3FF",
            headStartColor: "#B3D2FF",
            headEndColor: "#F5F5F5",
          }),
        (t.Z = r);
    },
    78200: function (e, t, n) {
      "use strict";
      n.d(t, {
        $A: function () {
          return o;
        },
        Cc: function () {
          return i;
        },
        D0: function () {
          return c;
        },
        dZ: function () {
          return a;
        },
        gD: function () {
          return r;
        },
      });
      var r = function (e, t) {
          null == t ||
            t.navigateTo({
              url: "/pages/taroCRN/flight/pages/rebookOperate/index",
              data: e,
            });
        },
        i = function (e, t) {
          null == t ||
            t.navigateTo({
              url: "/pages/taroCRN/flight/pages/rebookApply/index",
              data: e,
            });
        },
        o = function (e, t) {
          null == t ||
            t.navigateTo({
              url: "/pages/taroCRN/flight/pages/rebookList/index",
              data: e,
            });
        },
        a = function (e, t) {
          null == t ||
            t.navigateTo({
              url: "/pages/taroCRN/flight/pages/rebookConfirm/index",
              data: e,
            });
        },
        c = function (e, t) {
          null == t ||
            t.navigateTo({
              url: "/pages/taroCRN/flight/pages/rebookReason/index",
              data: e,
            });
        };
    },
    9776: function (e, t, n) {
      "use strict";
      n.d(t, {
        DH: function () {
          return u;
        },
        Lk: function () {
          return l;
        },
        nu: function () {
          return a;
        },
      });
      var r = n(79301),
        i = n(95308),
        o = n(59086);
      function a(e) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = (0, i.Z)(
          (0, r.Z)().mark(function e(t) {
            var n, i;
            return (0, r.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (n = null), (i = o.Eq.getAttr(t));
                    try {
                      "string" == typeof i && i && (n = JSON.parse(i)), (n = i);
                    } catch (e) {
                      console.log(e), (n = null);
                    }
                    return e.abrupt("return", n);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function u(e) {
        var t = null,
          n = o.Eq.getAttr(e);
        try {
          "string" == typeof n && n && (t = JSON.parse(n)), (t = n);
        } catch (e) {
          console.log(e), (t = null);
        }
        return t;
      }
      function l(e, t) {
        o.Eq.setAttr(e, t);
      }
    },
    90113: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return p;
        },
      });
      var r = n(90129),
        i = n(52500),
        o = n(71515),
        a = n(92954),
        c = n(23577),
        u = n(48813),
        l = function (e) {
          var t = e.isActive,
            n = e.tabName,
            r = e.onTabClick,
            i = void 0 === r ? function () {} : r;
          return (0, u.BX)(o.View, {
            className: "sbrd-tab-item flex-1 flex-center flex-column",
            onClick: i,
            children: [
              (0, u.tZ)(o.View, {
                className: "sbrd-tab-name ".concat(
                  t ? "sbrd-tab-name-active" : ""
                ),
                children: n,
              }),
              t &&
                (0, u.tZ)(o.Image, {
                  src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/tab@3x.png",
                  className: "sbrd-tab-indicator",
                  style: c.Z.isCRN
                    ? {}
                    : { left: "50%", transform: "translateX(-50%)" },
                }),
            ],
          });
        },
        s = function (e) {
          var t,
            n = e.data;
          return !n ||
            (null == n || null === (t = n.list) || void 0 === t
              ? void 0
              : t.length) <= 0
            ? (0, u.tZ)(u.HY, {})
            : (0, u.BX)(o.View, {
                className: "sbrd-table-item",
                children: [
                  (0, u.tZ)(o.View, {
                    className: "sbrd-title",
                    children: n.title,
                  }),
                  (0, u.tZ)(o.View, {
                    className: "sbrd-tb",
                    children: n.list.map(function (e, t) {
                      var n;
                      return (0, u.BX)(
                        o.View,
                        {
                          className: "flex flex-row ".concat(
                            t > 0 ? "sbrd-tb-bd-top" : ""
                          ),
                          children: [
                            (0, u.tZ)(o.View, {
                              className: "flex-center flex-row sbrd-tb-col1",
                              children: (0, u.tZ)(o.Text, {
                                className: "sbrd-tb-txt sbrd-tb-label",
                                children: e.title,
                              }),
                            }),
                            (0, u.tZ)(o.View, {
                              className:
                                "flex-1 flex-align-items-center flex-row sbrd-tb-col2",
                              children: (0, u.tZ)(o.View, {
                                className: "sbrd-tb-content",
                                children:
                                  null === (n = e.desc) || void 0 === n
                                    ? void 0
                                    : n.map(function (e, t) {
                                        return (0,
                                        u.tZ)(o.View, { className: "sbrd-tb-txt", children: e }, t);
                                      }),
                              }),
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                ],
              });
        },
        d = function (e) {
          var t = e.children;
          return (0, u.tZ)(o.View, {
            className: "sbrd-content flex-1 flex flex-column",
            children: t,
          });
        },
        f = function (e) {
          var t,
            n,
            a = e.instructionList,
            c = (0, i.useState)(0),
            f = (0, r.Z)(c, 2),
            p = f[0],
            h = f[1];
          if ((null == a ? void 0 : a.length) <= 0)
            return (0, u.tZ)(o.View, {});
          var g = a.map(function (e) {
              return e.ruleTitle;
            }),
            v = a[p],
            m = [];
          return (
            (null == v || null === (t = v.newContent) || void 0 === t
              ? void 0
              : t.length) > 0
              ? (m = v.newContent)
              : m.push({
                  title: null == v ? void 0 : v.title,
                  content: null == v ? void 0 : v.desc,
                }),
            (0, u.BX)(d, {
              children: [
                (0, u.tZ)(o.View, {
                  className: "sbrd-tab-list flex-row flex-align-items-center",
                  children: g.map(function (e, t) {
                    return (0, u.tZ)(
                      l,
                      {
                        tabName: e,
                        isActive: t === p,
                        onTabClick: function () {
                          return (function (e) {
                            e !== p && h(e);
                          })(t);
                        },
                      },
                      t
                    );
                  }),
                }),
                v &&
                  (0, u.tZ)(o.View, {
                    className: "cont-scroll flex-1",
                    children: (0, u.BX)(o.ScrollView, {
                      scrollY: !0,
                      scrollWithAnimation: !0,
                      className: "sbrd-scroll-view",
                      children: [
                        (null === (n = v.content) || void 0 === n
                          ? void 0
                          : n.length) > 0 &&
                          (0, u.tZ)(s, {
                            data: { title: v.title, list: v.content },
                          }),
                        m.map(function (e, t) {
                          var n;
                          return (null === (n = e.content) || void 0 === n
                            ? void 0
                            : n.length) > 0
                            ? (0, u.BX)(
                                o.View,
                                {
                                  className: "sbrd-normal-item",
                                  children: [
                                    (0, u.tZ)(o.View, {
                                      className: "sbrd-title",
                                      children: e.title,
                                    }),
                                    (0, u.tZ)(o.View, {
                                      className:
                                        "sbrd-desc-list flex flex-column",
                                      children: e.content.map(function (t, n) {
                                        return (0,
                                        u.tZ)(o.Text, { className: "sbrd-desc", style: n == e.content.length - 1 ? { marginBottom: 0 } : {}, children: t }, n);
                                      }),
                                    }),
                                  ],
                                },
                                t
                              )
                            : (0, u.tZ)(u.HY, {});
                        }),
                      ],
                    }),
                  }),
              ],
            })
          );
        },
        p = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = (0, a.getCurrentInstance)(),
            n = t.page;
          null == n ||
            n.showCommonDrawer({
              hideTitle: !0,
              hideClose: !0,
              content: function (t) {
                var n = t.onClose;
                return (0, u.tZ)(f, { instructionList: e, onClose: n });
              },
              className: "ship-booking-rule-drawer",
              height: "80vh",
              iphoneXFooterColor: "#f5f5f5",
            });
        };
    },
    52922: function (e, t, n) {
      "use strict";
      var r = n(52500),
        i = n(71515),
        o = n(36168),
        a = n(48813);
      t.Z = r.default.memo(function (e) {
        var t = e.onConfirm;
        return (0,
        a.tZ)(o.Z, { children: (0, a.tZ)(i.Button, { className: "flex-1 ship-confirm-btn", onClick: t, children: (0, a.tZ)(i.Text, { className: "ship-confirm-btn-txt", children: "确定" }) }) });
      });
    },
    78633: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(48813);
      t.Z = function (e) {
        var t = e.children,
          n = e.style;
        return (0, i.tZ)(r.View, {
          className: "ship-p-type",
          style: n,
          children: t,
        });
      };
    },
    21961: function (e, t, n) {
      "use strict";
      n.d(t, {
        E4: function () {
          return p;
        },
        LV: function () {
          return s;
        },
        WF: function () {
          return f;
        },
        Wj: function () {
          return l;
        },
        k9: function () {
          return o;
        },
        ob: function () {
          return d;
        },
        or: function () {
          return a;
        },
        pj: function () {
          return u;
        },
        zr: function () {
          return c;
        },
      });
      var r = n(62631),
        i = n(23577),
        o =
          ((0, r.Z)({
            serviceCode: "19833",
            channel: i.Z.train_channel,
            path: "getShipProductList",
            bu: "ship",
          }),
          (0, r.Z)({
            serviceCode: "23698",
            channel: i.Z.train_channel,
            path: "getShipLine",
            bu: "ship",
          })),
        a =
          ((0, r.Z)({
            serviceCode: "23698",
            channel: i.Z.train_channel,
            path: "searchLine",
            bu: "ship",
          }),
          (0, r.Z)({
            serviceCode: "23698",
            channel: i.Z.train_channel,
            path: "getTicketLeft",
            bu: "ship",
          })),
        c = (0, r.Z)({
          serviceCode: "23698",
          channel: i.Z.train_channel,
          path: "getZTPassengerList",
          bu: "ship",
        }),
        u = (0, r.Z)({
          serviceCode: "16586",
          channel: i.Z.train_channel,
          path: "SaveCommonPassenger",
          bu: "ship",
        }),
        l = (0, r.Z)({
          serviceCode: "23698",
          channel: i.Z.train_channel,
          path: "checkPassengerType",
          bu: "ship",
        }),
        s = (0, r.Z)({
          serviceCode: "19833",
          channel: i.Z.train_channel,
          path: "CreateBookingOrder",
          bu: "ship",
        }),
        d = (0, r.Z)({
          serviceCode: "23698",
          channel: i.Z.train_channel,
          path: "getShipInfo",
          bu: "ship",
        }),
        f =
          ((0, r.Z)({
            serviceCode: "19833",
            channel: "",
            path: "getPayParam",
            bu: "bus",
          }),
          (0, r.Z)({
            serviceCode: "20856",
            channel: i.Z.train_channel,
            path: "getBusNotice",
            bu: "ship",
          })),
        p = (0, r.Z)({
          serviceCode: "23698",
          channel: i.Z.train_channel,
          path: "getFlightsByFlightNo",
          bu: "ship",
        });
    },
    92711: function (e, t, n) {
      "use strict";
      n.d(t, {
        cN: function () {
          return r;
        },
        cx: function () {
          return o;
        },
        nh: function () {
          return i;
        },
      });
      var r = [
          { name: "身份证", code: "1" },
          { name: "二代身份证", code: "1" },
          { name: "护照", code: "2" },
          { name: "学生证", code: "3" },
          { name: "军人证", code: "4" },
          { name: "驾驶证", code: "6" },
          { name: "回乡证", code: "7" },
          { name: "台胞证", code: "8" },
          { name: "港澳通行证", code: "10" },
          { name: "国际海员证", code: "11" },
          { name: "外国人永久居留证", code: "20" },
          { name: "旅行证", code: "21" },
          { name: "台湾通行证", code: "22" },
          { name: "士兵证", code: "23" },
          { name: "临时身份证", code: "24" },
          { name: "户口簿", code: "25" },
          { name: "警官证", code: "26" },
          { name: "出生证明", code: "27" },
          { name: "美国驾照", code: "29" },
          { name: "俄籍国内护照", code: "30" },
          { name: "海外当地旅行证件", code: "31" },
          { name: "港澳台居民居住证", code: "32" },
          { name: "香港身份证", code: "33" },
          { name: "香港居民身份证", code: "33" },
          { name: "澳门身份证", code: "34" },
        ],
        i = {
          CN: "中国大陆",
          HK: "中国香港",
          MO: "中国澳门",
          TW: "中国台湾",
          US: "美国",
          GB: "英国",
          JP: "日本",
          CA: "加拿大",
          FR: "法国",
          KR: "韩国",
          DE: "德国",
          DJ: "吉布提",
          DK: "丹麦",
          DM: "多米尼克",
          DO: "多米尼加",
          DZ: "阿尔及利亚",
          EC: "厄瓜多尔",
          EE: "爱沙尼亚",
          EG: "埃及",
          EH: "西撒哈拉",
          ER: "厄立特里亚",
          ES: "西班牙",
          ET: "埃塞俄比亚",
          FI: "芬兰",
          FJ: "斐济",
          FK: "福克兰群岛（马尔维纳斯）",
          FM: "密克罗尼西亚",
          FO: "法罗群岛",
          CC: "科科斯（基林）群岛",
          CD: "刚果（金）",
          CF: "中非",
          CG: "刚果（布）",
          CH: "瑞士",
          CI: "科特迪瓦",
          CK: "库克群岛",
          CL: "智利",
          CM: "喀麦隆",
          CO: "哥伦比亚",
          CR: "哥斯达黎加",
          CS: "塞尔维亚",
          CU: "古巴",
          CV: "佛得角",
          CX: "圣诞岛",
          CY: "塞浦路斯",
          CZ: "捷克",
          AD: "安道尔",
          AE: "阿联酋",
          AF: "阿富汗",
          AG: "安提瓜和巴布达",
          AI: "安圭拉",
          AL: "阿尔巴尼亚",
          AM: "亚美尼亚",
          AN: "荷属安的列斯",
          AO: "安哥拉",
          AQ: "南极洲",
          AR: "阿根廷",
          AS: "美属萨摩亚",
          AT: "奥地利",
          AU: "澳大利亚",
          AW: "阿鲁巴",
          AZ: "阿塞拜疆",
          BA: "波黑",
          BB: "巴巴多斯",
          BD: "孟加拉国",
          BE: "比利时",
          BF: "布基纳法索",
          BG: "保加利亚",
          BH: "巴林",
          BI: "布隆迪",
          BJ: "贝宁",
          BM: "百慕大",
          BN: "文莱",
          BO: "玻利维亚",
          BR: "巴西",
          BS: "巴哈马",
          BT: "不丹",
          BV: "布维岛",
          BW: "博茨瓦纳",
          BY: "白俄罗斯",
          BZ: "伯利兹",
          MP: "北马里亚纳",
          MQ: "马提尼克",
          MR: "毛里塔尼亚",
          MS: "蒙特塞拉特",
          MT: "马耳他",
          MU: "毛里求斯",
          MV: "马尔代夫",
          MW: "马拉维",
          MX: "墨西哥",
          MY: "马来西亚",
          MZ: "莫桑比克",
          NA: "纳米尼亚",
          NC: "新喀里多尼亚",
          NE: "尼日尔",
          NF: "诺福克岛",
          NG: "尼日利亚",
          NI: "尼加拉瓜",
          NL: "荷兰",
          NO: "挪威",
          NP: "尼泊尔",
          NR: "瑙鲁",
          NU: "纽埃",
          NZ: "新西兰",
          OM: "阿曼",
          PA: "巴拿马",
          PE: "秘鲁",
          PF: "法属波利尼西亚",
          PG: "巴布亚新几内亚",
          PH: "菲律宾",
          PK: "巴基斯坦",
          PL: "波兰",
          PM: "圣皮埃尔和密克隆",
          PN: "皮特凯恩",
          PR: "波多黎各",
          PS: "巴勒斯坦",
          PT: "葡萄牙",
          PW: "帕劳",
          PY: "巴拉圭",
          QA: "卡塔尔",
          RE: "留尼汪",
          RO: "罗马尼亚",
          RU: "俄罗斯",
          RW: "卢旺达",
          SA: "沙特阿拉伯",
          SB: "所罗门群岛",
          SC: "塞舌尔",
          SD: "苏丹",
          SE: "瑞典",
          SG: "新加坡",
          SH: "圣赫勒拿",
          SI: "斯洛文尼亚",
          SJ: "斯瓦尔巴岛和扬马延岛",
          SK: "斯洛伐克",
          SL: "塞拉利昂",
          SM: "圣马力诺",
          SN: "塞内加尔",
          SO: "索马里",
          SR: "苏里南",
          ST: "圣多美和普林西比",
          SV: "萨尔瓦多",
          SY: "叙利亚",
          SZ: "斯威士兰",
          TC: "特克斯和凯科斯群岛",
          TD: "乍得",
          TF: "法属南部领土",
          TG: "多哥",
          TH: "泰国",
          TJ: "塔吉克斯坦",
          TK: "托克劳",
          TM: "土库曼斯坦",
          TN: "突尼斯",
          TO: "汤加",
          TP: "东帝汶",
          TR: "土耳其",
          TT: "特立尼达和多巴哥",
          TV: "图瓦卢",
          KW: "科威特",
          KY: "开曼群岛",
          KZ: "哈萨克斯坦",
          LA: "老挝",
          LB: "黎巴嫩",
          LC: "圣卢西亚",
          LI: "列支敦士登",
          LK: "斯里兰卡",
          LR: "利比里亚",
          LS: "莱索托",
          LT: "立陶宛",
          LU: "卢森堡",
          LV: "拉脱维亚",
          LY: "利比亚",
          MA: "摩洛哥",
          MC: "摩纳哥",
          MD: "摩尔多瓦",
          MG: "马达加斯加",
          MH: "马绍尔群岛",
          MK: "前南马其顿",
          ML: "马里",
          MM: "缅甸",
          MN: "蒙古",
          UY: "乌拉圭",
          UZ: "乌兹别克斯坦",
          VA: "梵蒂冈",
          VC: "圣文森特和格林纳丁斯",
          VE: "委内瑞拉",
          VG: "英属维尔京群岛",
          VI: "美属维尔京群岛",
          VN: "越南",
          VU: "瓦努阿图",
          WF: "瓦利斯和富图纳",
          WS: "萨摩亚",
          YE: "也门",
          YT: "马约特",
          YU: "南斯拉夫",
          ZA: "南非",
          ZM: "赞比亚",
          ZW: "津巴布韦",
          GD: "格林纳达",
          GE: "格鲁吉亚",
          GF: "法属圭亚那",
          GH: "加纳",
          GI: "直布罗陀",
          GL: "格陵兰",
          GM: "冈比亚",
          GN: "几内亚",
          GP: "瓜德罗普",
          GQ: "赤道几内亚",
          GR: "希腊",
          GS: "南乔治亚岛和南桑德韦奇岛",
          GT: "危地马拉",
          GU: "关岛",
          GW: "几内亚比绍",
          GY: "圭亚那",
          HM: "赫德岛和麦克唐纳岛",
          HN: "洪都拉斯",
          HR: "克罗地亚",
          HT: "海地",
          HU: "匈牙利",
          ID: "印度尼西亚",
          IE: "爱尔兰",
          IL: "以色列",
          IN: "印度",
          IO: "英属印度洋领地",
          IQ: "伊拉克",
          IR: "伊朗",
          IS: "冰岛",
          IT: "意大利",
          JM: "牙买加",
          JO: "约旦",
          GA: "加蓬",
          TZ: "坦桑尼亚",
          UA: "乌克兰",
          UG: "乌干达",
          UM: "美国本土外小岛屿",
          KE: "肯尼亚",
          KG: "吉尔吉斯斯坦",
          KH: "柬埔寨",
          KI: "基里巴斯",
          KM: "科摩罗",
          KN: "圣基茨和尼维斯",
          KP: "朝鲜",
        },
        o = {
          CNAME: "中文姓名",
          FENAME: "英文姓",
          LENAME: "英文名",
          CARDTYPE: "证件类型",
          CARDNUM: "证件号",
          BIRTH: "出生日期",
          GENDER: "性别",
          COUNTRY: "国家/地区",
          FREQUENCY: "签发次数",
          STAYDAYS: "可停留天数",
          NATIONALITY: "国籍",
          STUDENT: "学生证",
          TICKET: "票种",
          CARDTIMELIMIT: "证件有效期",
        };
    },
    62631: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(17377);
      function i(e) {
        return (0, r.ZP)(e);
      }
    },
    26282: function (e, t, n) {
      "use strict";
      var r = n(8271),
        i = n.n(r),
        o = "YYYY-MM-DD",
        a = "YYYYMMDD",
        c = "day",
        u = {
          formatDate: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : o;
            return e ? i()(e).format(t) : "";
          },
          getWeekInfo: function (e) {
            var t = i()(e).format("YYYY-MM-DD"),
              n = new Date(t).getDay();
            return i()().format("YYYY-MM-DD") === t
              ? "今天"
              : i()().add(1, "day").format("YYYY-MM-DD") === t
              ? "明天"
              : i()().add(2, "day").format("YYYY-MM-DD") === t
              ? "后天"
              : ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][n];
          },
          getDiff: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : i()().format(a),
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i()().format(a),
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : c,
              r = i()(e),
              o = i()(t);
            return o.diff(r, n);
          },
          getDiffDays: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : i()().format(a);
            return this.getDiff(
              this.formatDate(e, a),
              this.formatDate(t, a),
              c
            );
          },
          getWeekDayDesc: function (e) {
            var t = -this.getDiffDays(e);
            return 0 === t
              ? "今天"
              : 1 === t
              ? "明天"
              : 2 === t
              ? "后天"
              : this.getWeekDay(e);
          },
          getWeekDay: function (e) {
            return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
              i()(e).format("d")
            ];
          },
        };
      t.Z = u;
    },
    981: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return y;
        },
      });
      var r = n(93212),
        i = n(92954),
        o = n.n(i),
        a = n(8271),
        c = n.n(a),
        u = n(23577),
        l = n(92711);
      function s(e) {
        return "[object String]" === Object.prototype.toString.call(e);
      }
      var d = function (e) {
        return !e || ("object" === (0, r.Z)(e) && 0 === Object.keys(e).length);
      };
      function f() {
        if (arguments.length <= 1) return arguments[0] || "";
        var e = arguments[0],
          t = Array.prototype.slice.call(arguments, 1);
        return e.replace(/\{(\d+)\}/g, function (e, n) {
          return t[n];
        });
      }
      function p(e) {
        return "M" == e ? "男" : "F" == e ? "女" : "";
      }
      function h(e) {
        var t = l.cN.find(function (t) {
          return t.code == e;
        });
        return t ? t.name : "身份证";
      }
      function g(e) {
        var t = l.cN.find(function (t) {
          return t.name == e;
        });
        return t ? t.code : "999";
      }
      function v() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = arguments.length > 2 ? arguments[2] : void 0,
          i = "",
          o = "";
        if (d(t)) return { cardType: e, cardNo: i, cardVisaDate: o };
        if (r) {
          if (t.foreignInfo) {
            var a,
              u =
                (null === (a = t.foreignInfo.cardList) || void 0 === a
                  ? void 0
                  : a[0]) || {};
            (e = u.key), (i = u.value);
          }
          var l, s, f;
          e ||
            (e =
              null === (l = n[0]) ||
              void 0 === l ||
              null === (s = l.requiredCard) ||
              void 0 === s ||
              null === (f = s[0]) ||
              void 0 === f
                ? void 0
                : f.idType);
        } else {
          for (
            var p,
              v = function (r) {
                var a,
                  u = n[r],
                  l = "";
                t.lastEditCardType
                  ? ((l = t.lastEditCardType), (e = h(l)))
                  : ((e = u.idType), (l = g(e)));
                var s =
                  null === (a = t.CommonPassengerCard) || void 0 === a
                    ? void 0
                    : a.find(function (e) {
                        return e.CardType == l;
                      });
                if (s)
                  return (
                    (i = s.CardNo),
                    (o = s.CardTimelimit
                      ? c()(s.CardTimelimit.replace(/\-/gi, "/")).format(
                          "YYYY-MM-DD"
                        )
                      : ""),
                    "break"
                  );
              },
              m = 0;
            m < (null == n ? void 0 : n.length);
            m++
          ) {
            var _ = v(m);
            if ("break" === _) break;
          }
          i ||
            (e =
              null == n || null === (p = n[0]) || void 0 === p
                ? void 0
                : p.idType);
        }
        return { cardType: e, cardNo: i, cardVisaDate: o };
      }
      function m(e, t) {
        var n = {
            nationality: function () {
              if (d(t)) return "请选择具体国籍";
            },
            cname: function () {
              return d(t)
                ? "请输入姓名"
                : /^[\u4e00-\u9fa5]{2,14}$/.test(t)
                ? void 0
                : "请输入正确的中文姓名，不能包含字母和标点符号";
            },
            ename: function () {
              return t
                ? /[a-zA-Z]/.test(t)
                  ? void 0
                  : "请输入正确的英文姓名"
                : "请输入英文姓名";
            },
            idCard: function () {
              return d(t)
                ? "请输入证件号码"
                : /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
                    t
                  )
                ? void 0
                : "请输入正确的身份证号码";
            },
            passCard: function () {
              return d(t)
                ? "请输入证件号码"
                : /^([a-zA-z]|[0-9]){5,17}$/.test(t)
                ? void 0
                : "请输入正确的护照号码";
            },
            card: function () {
              if (d(t)) return "请输入证件号码";
            },
            country: function () {
              return d(t)
                ? "请选择国籍"
                : "外籍" == t && d(t)
                ? "请选择具体国籍"
                : void 0;
            },
            studentCardNo: function () {
              if (d(t)) return "请填写学生证号码";
            },
            gender: function () {
              if (d(t)) return "请选择乘客性别";
            },
            frequency: function () {
              if (d(t)) return "请填写签发次数";
            },
            stayDays: function () {
              if (d(t)) return "请填写入境可停留天数";
            },
          },
          r = null;
        return n[e] && (r = n[e].call()), r;
      }
      var _ = function (e) {
        var t = "A";
        switch (e) {
          case "adult":
            t = "A";
            break;
          case "child":
            t = "C";
            break;
          case "childBoy":
            t = "B";
            break;
          case "childCarry":
            t = "TC";
            break;
          case "elder":
            t = "E";
        }
        return t;
      };
      t.Z = {
        getShipUtmSource: function () {
          if (u.Z.isCRN) return "";
          var e = "xcx_ship_".concat(u.Z.miniType, "_").concat(u.Z.jetpack),
            t = o().getStorageSync("SHIP_UTMSOURCE"),
            n = new Date().getTime() / 1e3;
          return t && t.timeStamp && n - t.timeStamp < 3600 ? t.source : e;
        },
        AppendParams: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (!t) return e || "";
          if (s(t)) return (e + "&" + t).replace(/[&?]{1,2}/, "?");
          for (var n = Object.keys(t), r = [], i = 0, o = n.length; i < o; i++)
            r.push(f("{0}={1}", n[i], t[n[i]]));
          var a = r.join("&").replace(/%20/g, "+");
          return decodeURI((e + "&" + a).replace(/[&?]{1,2}/, "?"));
        },
        saveShipUtmSource: function (e) {
          var t = new Date().getTime() / 1e3;
          o().setStorageSync("SHIP_UTMSOURCE", { source: e, timeStamp: t });
        },
        getDisplayPassengerType: function (e) {
          var t = "成人票";
          switch (e) {
            case "TC":
              t = "携童票";
              break;
            case "C":
              t = "儿童票";
              break;
            case "B":
              t = "小童票";
              break;
            case "A":
              t = "成人票";
              break;
            case "E":
              t = "老人票";
          }
          return t;
        },
        getPassengerFormatData: function (e, t, n, r) {
          var i,
            o = e.CNName,
            a = e.ENFirstName,
            c = e.ENLastName,
            u = e.Nationality,
            s = e.Gender,
            d = e.Birthday,
            f = e.ticketTypeId,
            h = e.foreignInfo,
            g = void 0 === h ? {} : h,
            y = e.frequency,
            b = e.stayDays,
            Z = e.isMinor,
            C = { gender: p(s), passengerType: _(f), birth: d };
          if (
            (e.isStudent &&
              ((C.isStudent = 1),
              (C.studentCardNo = (function (e) {
                var t;
                return (
                  (
                    (null == e ||
                    null === (t = e.CommonPassengerCard) ||
                    void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return "3" == e.CardType;
                        })) || {}
                  ).CardNo || ""
                );
              })(e))),
            y && (C.taibaoNumber = y),
            b && (C.stayDays = b),
            n)
          ) {
            var w,
              N = function (e) {
                var t = [];
                return (
                  e.forEach(function (e) {
                    t.push({ name: e.key, value: e.value });
                  }),
                  t
                );
              };
            console.log("foreignInfo", g, u),
              (C.country = g.country),
              "外籍" == g.country
                ? (C.nationality = l.nh[u])
                : (C.nationality = g.country),
              (C.idCard = []),
              null === (w = g.cardList) ||
                void 0 === w ||
                w.forEach(function (e) {
                  C.idCard.push({
                    idType: e.key,
                    idNum: e.value,
                    date: N(e.infoList),
                  });
                }),
              m ||
                ((C.idType = C.idCard[0].idType),
                (C.idNum = C.idCard[0].idNum)),
              (i =
                null == t
                  ? void 0
                  : t.find(function (e) {
                      return e.country == g.country;
                    }));
          } else {
            var T = v(e, t, n) || {};
            r &&
              (C.idCard = [
                {
                  idType: T.cardType,
                  idNum: T.cardNo,
                  visaDate: T.cardVisaDate,
                },
              ]),
              (C.idType = T.cardType),
              (C.idNum = T.cardNo),
              (C.visaDate = T.cardVisaDate),
              (i =
                null == t
                  ? void 0
                  : t.find(function (e) {
                      return e.idType == C.idType;
                    }));
          }
          return (
            (C.isMinor = Z),
            i
              ? (i.cname && (C.cName = o),
                i.ename && (C.eName = "".concat(c, "/").concat(a)))
              : ((C.cName = o), (C.eName = "".concat(c, "/").concat(a))),
            "护照" == (C.idType || (C.idCard[0] ? C.idCard[0].idType : "")) &&
            C.eName
              ? (C.displayName = C.eName)
              : (C.displayName = C.cName),
            console.log("passengerData", C),
            C
          );
        },
        getCardInfo: v,
        maskCardNum: function (e) {
          var t = 0,
            n = 0;
          if (e) {
            var r = e.length;
            if (18 == r) (t = 4), (n = 3);
            else {
              var i = Math.floor(r / 3) + 1;
              (t = 1 * parseInt(((r - i) / 2).toFixed())), (n = r - i - t);
            }
            return (function (e, r, i) {
              for (var o = e.length - t - n, a = "", c = 0; c < o; c++)
                a += "*";
              return e.substring(0, r) + a + e.substring(e.length - i);
            })(e, t, n);
          }
          return e;
        },
        getCardTypeName: h,
        getCardNumByCardType: function (e, t) {
          var n = g(t),
            r =
              null == e
                ? void 0
                : e.find(function (e) {
                    return e.CardType == n;
                  });
          return r ? r.CardNo : "";
        },
        getCardTimeLimitByCardType: function (e, t) {
          var n = g(t),
            r =
              null == e
                ? void 0
                : e.find(function (e) {
                    return e.CardType == n;
                  });
          return r ? r.CardTimelimit : "";
        },
        getCardCode: g,
        checkPassengerInput: m,
        checkAgeOlderThan18: function (e) {
          var t = 0,
            n = (e || "").split("-"),
            r = n && n.length >= 1 && n[0],
            i = n && n.length >= 2 && n[1],
            o = n && n.length >= 3 && n[2],
            a = new Date(),
            c = a.getFullYear(),
            u = a.getMonth() + 1,
            l = a.getDate();
          if (c == r) t = 0;
          else {
            var s = c - r;
            t =
              s > 0
                ? u == i
                  ? l - o < 0
                    ? s - 1
                    : s
                  : u - i < 0
                  ? s - 1
                  : s
                : -1;
          }
          var d = !1;
          return t - 18 > 0 && (d = !0), d;
        },
        getAge: function (e) {
          var t = 0,
            n = (e || "").split("-"),
            r = n && n.length >= 1 && n[0],
            i = n && n.length >= 2 && n[1],
            o = n && n.length >= 3 && n[2],
            a = new Date(),
            c = a.getFullYear(),
            u = a.getMonth() + 1,
            l = a.getDate();
          if (c == r) t = 0;
          else {
            var s = c - r;
            t =
              s > 0
                ? u == i
                  ? l - o < 0
                    ? s - 1
                    : s
                  : u - i < 0
                  ? s - 1
                  : s
                : -1;
          }
          return t;
        },
        getUuid: function () {
          for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++)
            e[n] = t.substr(Math.floor(16 * Math.random()), 1);
          return (
            (e[14] = "4"),
            (e[19] = t.substr((3 & e[19]) | 8, 1)),
            (e[8] = e[13] = e[18] = e[23] = "-"),
            e.join("")
          );
        },
        getPassengerDisplayName: function (e, t, n) {
          var r = e.CNName;
          return (
            (("护照" == v(e, t, n).cardType && !n) || !r) &&
              e.ENLastName &&
              e.ENFirstName &&
              (r = e.ENLastName + "/" + e.ENFirstName),
            r
          );
        },
        isVehicleNumber: function (e) {
          return /^(([\u4eac\u6d25\u6caa\u6e1d\u5180\u8c6b\u4e91\u8fbd\u9ed1\u6e58\u7696\u9c81\u65b0\u82cf\u6d59\u8d63\u9102\u6842\u7518\u664b\u8499\u9655\u5409\u95fd\u8d35\u7ca4\u9752\u85cf\u5ddd\u5b81\u743c\u4f7f\u9886][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([\u4eac\u6d25\u6caa\u6e1d\u5180\u8c6b\u4e91\u8fbd\u9ed1\u6e58\u7696\u9c81\u65b0\u82cf\u6d59\u8d63\u9102\u6842\u7518\u664b\u8499\u9655\u5409\u95fd\u8d35\u7ca4\u9752\u85cf\u5ddd\u5b81\u743c\u4f7f\u9886][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9\u6302\u5b66\u8b66\u6e2f\u6fb3\u4f7f\u9886]))$/.test(
            e
          );
        },
        getChannelValue: function () {
          return u.Z.isTieyou ? "wxTyShip" : "wxZxShip";
        },
        covertPassengerType: _,
        getTicketTypeId: function (e) {
          var t = "adult";
          switch (e) {
            case "A":
              t = "adult";
              break;
            case "C":
              t = "child";
              break;
            case "B":
              t = "childBoy";
              break;
            case "TC":
              t = "childCarry";
              break;
            case "E":
              t = "elder";
          }
          return t;
        },
        isNotEmptyObj: function (e) {
          var t = !1;
          return (
            (function (e) {
              return "[object Object]" === Object.prototype.toString.call(e);
            })(e) && (t = Object.keys(e).length > 0),
            t
          );
        },
        isEmptyObject: d,
      };
      var y = function (e) {
        o().showToast({ title: e, icon: "none" });
      };
    },
    94205: function (e, t, n) {
      "use strict";
      n.d(t, {
        AE: function () {
          return p;
        },
        GN: function () {
          return d;
        },
        MZ: function () {
          return h;
        },
        R_: function () {
          return s;
        },
        VS: function () {
          return f;
        },
        bG: function () {
          return l;
        },
        oK: function () {
          return g;
        },
      });
      var r = n(298),
        i = n(79301),
        o = n(95308),
        a = n(18783),
        c = n(25391),
        u = n(50238),
        l = function (e) {
          console.log(e), e(a.ZP);
        },
        s = (function () {
          var e = (0, o.Z)(
            (0, i.Z)().mark(function e() {
              return (0, i.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        new Promise(function (e) {
                          e(a.ZP);
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        d = function () {},
        f = function () {
          return {};
        },
        p = function () {},
        h = (function () {
          var e = (0, o.Z)(
            (0, i.Z)().mark(function e(t, n) {
              var r;
              return (0, i.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), (0, u.gJ)({ count: t });
                    case 2:
                      return (
                        (r = e.sent),
                        console.log("filePaths", r),
                        e.abrupt("return", r)
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        g = function (e) {
          return new Promise(function (t) {
            c.ZP.getTrainStationData()
              .then(function (n) {
                var i =
                  null == n
                    ? void 0
                    : n.find(function (t) {
                        return t.stationCode == e;
                      });
                t(
                  (0, r.Z)(
                    (0, r.Z)({}, i),
                    {},
                    { name: null == i ? void 0 : i.stationName }
                  )
                );
              })
              .catch(function () {
                t({});
              });
          });
        };
    },
    90582: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return o;
        },
      });
      var r = n(92954),
        i = n.n(r);
      function o(e, t, n, r) {
        var o = function () {},
          a = function () {},
          c = "",
          u = "我知道了";
        n && r
          ? ((u = null == r ? void 0 : r.text),
            (c = null == n ? void 0 : n.text),
            (o = null == r ? void 0 : r.callback),
            (a = null == n ? void 0 : n.callback))
          : n &&
            ((u = null == n ? void 0 : n.text),
            (o = null == n ? void 0 : n.callback)),
          i().showModal({
            title: e,
            content: t,
            confirmText: u,
            cancelText: c,
            showCancel: !!n && !!r,
            success: function (e) {
              e.confirm
                ? (o && o(), console.log("用户点击确定"))
                : e.cancel && (a && a(), console.log("用户点击取消"));
            },
          });
      }
    },
    19972: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return i;
        },
        Z: function () {
          return o;
        },
      });
      var r = n(49120),
        i = r.showLoading,
        o = r.hideLoading;
    },
    23577: function (e, t, n) {
      "use strict";
      var r = n(79792);
      t.Z = r.default;
    },
    90098: function (e, t, n) {
      "use strict";
      var r = n(2809);
      t.Z = r.ZP;
    },
    75786: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(57042),
        i = n(24460),
        o = n(92954),
        a = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, i.Z)(e, null, [
              {
                key: "addEventListener",
                value: function (e, t) {
                  o.eventCenter.on(e, t);
                },
              },
              {
                key: "addEventListenerPromise",
                value: function (e) {
                  return new Promise(function (t) {
                    o.eventCenter.on(e, function (e) {
                      t(e);
                    });
                  });
                },
              },
              {
                key: "removeEventListener",
                value: function (e) {
                  o.eventCenter.off(e);
                },
              },
              {
                key: "sendEvent",
                value: function (e, t) {
                  o.eventCenter.trigger(e);
                },
              },
            ]),
            e
          );
        })();
    },
    1112: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(17377);
      function i(e) {
        return (0, r.ZP)(e);
      }
    },
    32970: function (e, t, n) {
      "use strict";
      n.d(t, {
        Cz: function () {
          return I;
        },
        Ku: function () {
          return E;
        },
        L5: function () {
          return A;
        },
        M$: function () {
          return H;
        },
        NU: function () {
          return G;
        },
        Qu: function () {
          return O;
        },
        R1: function () {
          return q;
        },
        Tl: function () {
          return D;
        },
        UT: function () {
          return S;
        },
        Vo: function () {
          return J;
        },
        Vu: function () {
          return M;
        },
        Xb: function () {
          return x;
        },
        Yp: function () {
          return U;
        },
        Zf: function () {
          return Y;
        },
        _f: function () {
          return j;
        },
        a: function () {
          return y;
        },
        a1: function () {
          return K;
        },
        ce: function () {
          return Z;
        },
        d6: function () {
          return L;
        },
        fy: function () {
          return k;
        },
        h8: function () {
          return w;
        },
        im: function () {
          return N;
        },
        jn: function () {
          return W;
        },
        jw: function () {
          return C;
        },
        lK: function () {
          return T;
        },
        o$: function () {
          return P;
        },
        p1: function () {
          return z;
        },
        pX: function () {
          return _;
        },
        qf: function () {
          return R;
        },
        t9: function () {
          return B;
        },
        tK: function () {
          return X;
        },
        tu: function () {
          return V;
        },
        ym: function () {
          return b;
        },
        ys: function () {
          return F;
        },
      });
      var r = n(79301),
        i = n(95308),
        o = n(298),
        a = n(92954),
        c = n.n(a),
        u = n(3205),
        l = n(8271),
        s = n.n(l),
        d = n(49120),
        f = n(2326),
        p = n(25391),
        h = n(9062),
        g = n(38064),
        v = n(93761),
        m = n(23577),
        _ = function (e, t) {
          console.log(e, t);
          var n = e.chosenPassengers,
            r = e.cards,
            i = e.forbidChildType,
            o = e.forbidBabyType;
          (0, g.oS)({
            selectedPassengers: n,
            cards: r,
            forbidChildType: i,
            forbidBabyType: o,
            onConfirm: function (e) {
              var n = e.selectedPassengers;
              t({ chosenPassengers: n });
            },
          });
        },
        y = function (e, t) {
          console.log(e, t);
          var n = e.isChooseFromStation;
          u.Z.flightCity({
            data: {
              title: n ? "出发城市" : "到达城市",
              intlHidden: !0,
              isIntl: !1,
              multiple: !1,
            },
            callback: function (r) {
              var i = { name: r.cityName, code: r.cityCode },
                o = n ? i : e.departCity,
                a = n ? e.arriveCity : i;
              t(null, { departCity: o, arriveCity: a });
            },
          });
        },
        b = function (e, t) {
          var n = e.defaultDate,
            r = e.maxDays,
            i = e.type,
            o = s()().format("YYYY-MM-DD"),
            a = s()()
              .add(h.g2 - 1, "day")
              .format("YYYY-MM-DD");
          u.Z.calendar(
            {
              chooseDate: n,
              beginDate: o,
              endDate: a,
              type: i || "multiple",
              multipleLimit: r,
              confirmBtn: !0,
              title: "选择出发日期",
              bu: "flight",
            },
            function (e) {
              console.log(e), t({ selectDates: e });
            }
          );
        },
        Z = function (e, t) {
          var n = e.orderNumber,
            r = e.goodsId,
            i = e.business,
            o = void 0 === i ? "flight" : i;
          console.log(n, r, t),
            v.ZP.doPayment({ orderNumber: n, goodsId: r, business: o })
              .then(function () {
                console.log("支付成功"), t && t();
              })
              .catch(function (e) {
                console.log("取消支付", e);
              });
        },
        C = function () {
          return new Promise(function (e) {
            c().chooseContact({
              success: function (t) {
                e(t.phoneNumber);
              },
              fail: function () {
                e(null);
              },
            });
          });
        },
        w = function () {
          var e = m.Z.isTieyou
            ? "https://market.suanya.com/activity/flight/flight-service-guarantee-ty.html?isHideNavBar=YES"
            : "https://market.suanya.com/activity/flight/flight-service-guarantee-zx.html?isHideNavBar=YES";
          u.Z.twebview({ data: { url: e } });
        },
        N = function (e) {
          var t = e.url;
          e.title, u.Z.twebview({ data: { url: t } });
        },
        T = function () {
          c().reLaunch({ url: "pages/myctrip/list/list?orderType=flight" });
        },
        x = function (e, t) {
          c().navigateTo({
            url: "/pages/taroCRN/flight/pages/surpriseGrabDetail/index?orderNumber=".concat(
              e
            ),
          });
        },
        S = function () {
          c().navigateTo({ url: "/pages/usercenter/kaquan/kaquan" });
        },
        I = function (e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = "/pages/flight/detail/detail?orderNumber=".concat(e);
          t ? c().reLaunch({ url: n }) : c().navigateTo({ url: n });
        },
        k = function (e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = "/pages/flightIntl/detail/detail?orderNumber=".concat(e);
          t ? c().reLaunch({ url: n }) : c().navigateTo({ url: n });
        },
        R = function (e) {
          var t = e.departCityName,
            n = e.departCityCode,
            r = e.arriveCityName,
            i = e.arriveCityCode,
            o = e.departDate,
            a = e.fromPage;
          c().navigateTo({
            url: "/pages/flight/list/list?departCity="
              .concat(t, "&departCityCode=")
              .concat(n, "&arriveCity=")
              .concat(r, "&arriveCityCode=")
              .concat(i, "&departDate=")
              .concat(o, "&fromPage=")
              .concat(a, "&nearby=1"),
          });
        },
        D = function (e) {
          var t = e.frompage,
            n = e.departureCityCode,
            r = e.arrivalCityCode,
            i = e.fromFlightNumber,
            o = e.departDate;
          f.Z.recordFromPage(t);
          var a = {
            segments: [{ dptDate: o, dptCode: n, arrCode: r, flightNo: i }],
          };
          (0, d.getCurrentPage)().navigateTo({
            url: "/pages/flight/bookx/bookx",
            data: { query: a },
          });
        },
        F = function (e) {
          var t = e.refundAndChangeDetails,
            n = e.noteArray,
            r =
              null == n
                ? void 0
                : n.map(function (e) {
                    return (0,
                    o.Z)((0, o.Z)({}, e), {}, { refundAndChangeDetails: t });
                  });
          (0, d.getCurrentPage)().navigateTo({
            url: "/pages/flightSecondary/bap/bap",
            data: { baggageAllowanceAndPolicies: r },
          });
        },
        P = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return new Promise(
            (function () {
              var n = (0, i.Z)(
                (0, r.Z)().mark(function n(i) {
                  return (0, r.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            (0, d.getCurrentPage)().navigateToAsync({
                              url: "/pages/12306/login/login",
                              ignoreError: t,
                              data: (0, o.Z)({ isHideRegister: !0 }, e),
                            })
                          );
                        case 2:
                          i();
                        case 3:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })()
          ).catch(function (e) {
            e();
          });
        },
        A = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return new Promise(
            (function () {
              var n = (0, i.Z)(
                (0, r.Z)().mark(function n(i) {
                  return (0, r.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            (0, d.getCurrentPage)().navigateToAsync({
                              url: "/pages/12306/login/login",
                              ignoreError: t,
                              data: e,
                            })
                          );
                        case 2:
                          i();
                        case 3:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })()
          ).catch(function (e) {
            e();
          });
        },
        B = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return "CandidateOrderPay" === t
            ? c().reLaunch({
                url: "/pages/taroCRN/train/pages/CandidateOrderDetail/index?orderNumber="
                  .concat(e, "&fromPage=")
                  .concat(t, "&status=")
                  .concat(n),
              })
            : c().navigateTo({
                url: "/pages/taroCRN/train/pages/CandidateOrderDetail/index?orderNumber="
                  .concat(e, "&fromPage=")
                  .concat(t, "&status=")
                  .concat(n),
              });
        },
        E = function () {
          return c().navigateTo({ url: "/pages/trainRob/setgrab/setgrab" });
        },
        V = function (e, t) {
          (0, d.getCurrentPage)().navigateTo({
            url: "".concat(p.ZP.getTrainPsgListUrl(), "?isJianLou=1"),
            data: e,
            callback: t,
          });
        },
        L = function (e) {
          return c().navigateTo({
            url: "/pages/taroCRN/train/pages/candidateOrderPay/index?orderNumber=".concat(
              e
            ),
          });
        },
        O = function (e) {},
        z = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = arguments.length > 2 ? arguments[2] : void 0;
          return c().reLaunch({
            url: p.ZP.getTrainGrabOrderDetailUrl(
              e,
              "&fromPage=".concat(t, "&isGrab24=").concat(n)
            ),
          });
        },
        j = function () {
          c().switchTab({ url: "/pages/trnshare/grablist/grablist" });
        },
        M = function (e) {
          c().navigateTo({
            url: "/pages/taroCRN/train/pages/candidateOrderUpdate/index?orderNumber=".concat(
              e
            ),
          });
        };
      function W(e) {
        u.Z.twebview({ data: { url: e } });
      }
      var X = function (e) {
          c().navigateTo({
            url: "/pages/trainDetail/order/order?oid=".concat(e),
          });
        },
        H = function (e) {
          var t = e.fromStation,
            n = e.toStation,
            r = e.trainNumber,
            i = e.date;
          c().navigateTo({
            url: "/pages/taroCRN/train/pages/trainTimeTable/index?fromStation="
              .concat(t, "&toStation=")
              .concat(n, "&trainNumber=")
              .concat(r, "&date=")
              .concat(i),
          });
        },
        G = function (e, t) {
          c().navigateTo({
            url: "/pages/taroCRN/train/pages/ticketUpgradeDetail/index?oid="
              .concat(e, "&fromPage=")
              .concat(t),
          });
        },
        U = function () {
          c().reLaunch({
            url: ["st", "zxdj", "zxtj"].includes(m.Z.jetpack || "")
              ? "/pages/home/smartTrip"
              : "/pages/home/index",
          });
        },
        Y = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
          return (0, d.getCurrentPage)().navigateToAsync({
            url: "/pages/12306/member/member",
            ignoreError: t,
            data: e,
          });
        },
        q = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
          return (0, d.getCurrentPage)().navigateToAsync({
            url: "/pages/train/passengerlist/passengerlist",
            ignoreError: t,
            data: (0, o.Z)({ fromPage: "addAssignee" }, e),
          });
        },
        K = function () {
          (0, d.showToast)("功能开发中");
        },
        J = function () {
          (0, d.showToast)("功能开发中");
        };
    },
    35707: function (e, t, n) {
      "use strict";
      var r = n(18783);
      t.Z = r.ZP;
    },
    10655: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return a;
        },
      });
      var r = n(79301),
        i = n(95308),
        o = n(21294);
      function a(e) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = (0, i.Z)(
          (0, r.Z)().mark(function e(t) {
            return (0, r.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        e(o.Z.tripleDESEncrypt(t));
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    49528: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ad: function () {
          return f;
        },
        FS: function () {
          return g;
        },
        Jn: function () {
          return a;
        },
        Po: function () {
          return p;
        },
        QQ: function () {
          return u;
        },
        Y1: function () {
          return s;
        },
        fM: function () {
          return l;
        },
        lW: function () {
          return c;
        },
        u1: function () {
          return d;
        },
      });
      var r = n(23577),
        i = [
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
      function o(e) {
        return (
          Object.keys(e).forEach(function (t) {
            i.includes(t) &&
              ("[object Number]" === Object.prototype.toString.call(e[t])
                ? (e[t] = 2 * e[t] + "rpx")
                : "transform" === t &&
                  (e[t] = (function (e) {
                    if (!Array.isArray(e)) return e;
                    var t = "";
                    return (
                      e.forEach(function (e) {
                        var n = Object.keys(e) || [];
                        "[object Number]" !==
                          Object.prototype.toString.call(e[n[0]]) ||
                        ["scaleX", "scaleY"].includes(n[0])
                          ? (t += "".concat(n[0], "(").concat(e[n[0]], ") "))
                          : (t += ""
                              .concat(n[0], "(")
                              .concat(2 * e[n[0]], "rpx) "));
                      }),
                      t
                    );
                  })(e[t])));
          }),
          e
        );
      }
      function a(e) {
        if (r.Z.isCRN) return e;
        var t = {};
        return (
          Array.isArray(e)
            ? e.forEach(function (e) {
                Object.assign(t, e);
              })
            : Object.assign(t, e),
          o(t)
        );
      }
      var c = function (e) {
          return (
            r.Z.isCRN ||
              (Object.keys(e).forEach(function (t) {
                e[t] = o(e[t]);
              }),
              console.log(e)),
            e
          );
        },
        u = function () {
          return "ZX-Regular";
        },
        l = function () {
          return "750rpx";
        },
        s = function () {
          return 375;
        },
        d = function (e) {
          return "".concat(2 * e, "rpx");
        },
        f = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            r = 375 - 2 * n,
            i = (t * r) / e;
          return { width: 2 * r + "rpx", height: 2 * i + "rpx" };
        },
        p = function (e, t) {
          return { width: 2 * e + "rpx", height: 2 * t + "rpx" };
        },
        h = function (e) {
          return e[r.Z.os || "ios"];
        },
        g = c({
          zxRegular: { fontFamily: "ZX-Regular" },
          lightBold: h({
            ios: { fontWeight: "500" },
            android: { fontFamily: "sans-serif-medium" },
          }),
          bold: h({
            ios: { fontWeight: "600" },
            android: { fontFamily: "sans-serif-medium" },
          }),
        });
    },
    90384: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return i;
        },
      });
      var r = {
        debounce: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 500,
            n = null;
          return function () {
            var r = this,
              i = arguments;
            n && (clearTimeout(n), (n = null)),
              (n = setTimeout(function () {
                e.apply(r, i);
              }, t));
          };
        },
        isEmptyObject: function (e) {
          return !e || 0 === Object.keys(e).length;
        },
        judgeType: function (e, t) {
          return (
            Object.prototype.toString.call(e) === "[object ".concat(t, "]")
          );
        },
        stringifyQuery: function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if (r.isEmptyObject(e)) return "";
          var n = "";
          for (var i in e)
            if (r.hasOwnPropertyImpl(e, i)) {
              var o = e[i];
              r.judgeType(o, "Object")
                ? (n += "&" + i + "=" + encodeURIComponent(JSON.stringify(o)))
                : (n += "&" + i + "=" + encodeURIComponent(o));
            }
          return t + n.substring(1);
        },
        hasOwnPropertyImpl: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = !1;
          return (
            e.hasOwnProperty
              ? e.hasOwnProperty(t) && (n = !0)
              : Object.prototype.hasOwnProperty.call(e, t) && (n = !0),
            n
          );
        },
      };
      function i(e) {
        var t = Object.prototype.toString.call(e),
          n = {};
        if ("[object Array]" === t) n = [];
        else {
          if ("[object Object]" !== t) return e;
          n = {};
        }
        return (
          "[object Array]" === t &&
            e.forEach(function (e) {
              n.push(i(e));
            }),
          "[object Object]" === t &&
            Object.keys(e).forEach(function (t) {
              n[t] = i(e[t]);
            }),
          n
        );
      }
      t.Z = r;
    },
    87298: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return r.h;
        },
      });
      var r = n(81957);
    },
    10844: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = (n(52500), n(71515)),
        o = n(48813),
        a = function (e) {
          var t = e.bottomView,
            n = e.bottomViewStyle,
            a = e.extraView,
            c = e.hideModal,
            u = e.showExtraView,
            l = e.bottomViewHeight,
            s = e.innerContainerStyle;
          return (0, o.BX)(i.View, {
            className: "taro-crn-adapt-screen-footer-layer",
            children: [
              (0, o.tZ)(i.View, {
                className: "taro-crn-extra-view-bg",
                onClick: c,
                style: {
                  display: "".concat(u ? "Block" : "none"),
                  opacity: "".concat(u ? 0.7 : 0),
                },
              }),
              (0, o.BX)(i.View, {
                className: "taro-crn-extra-view-content",
                style: (0, r.Z)(
                  (0, r.Z)({}, s),
                  {},
                  {
                    transform: "".concat(
                      u ? "translateY(0)" : "translateY(100%)"
                    ),
                  }
                ),
                children: [
                  a,
                  (0, o.tZ)(i.View, {
                    style: {
                      height: "".concat(2 * l, "rpx"),
                      width: "100vw",
                      display: "block",
                    },
                  }),
                ],
              }),
              (0, o.tZ)(i.View, {
                className: "taro-crn-adapt-bottom-view",
                style: n,
                children: t,
              }),
            ],
          });
        };
      (a.defaultProps = {
        bottomView: (0, o.tZ)(i.View, {}),
        extraView: (0, o.tZ)(i.View, {}),
        hideModal: function () {},
        showExtraView: !1,
        bottomViewHeight: 0,
        bottomViewStyle: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
        innerContainerStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#f5f5f5",
        },
      }),
        (t.Z = a);
    },
    36168: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(21828);
      t.Z = r.Z;
    },
    67026: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(23577),
        o = n(49528),
        a = n(48813);
      t.Z = function () {
        return (0, a.tZ)(r.View, {
          className: "brandPromotionImageBox",
          children:
            !i.Z.isTieyou &&
            (0, a.tZ)(r.Image, {
              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/img_hcpx@3x.webp",
              style: (0, o.Po)(273, 80),
            }),
        });
      };
    },
    29799: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(52500),
        o = n(58676),
        a = n(48813);
      t.Z = i.default.memo(
        i.default.forwardRef(function (e, t) {
          return (0, a.tZ)(o.Z, (0, r.Z)((0, r.Z)({}, e), {}, { ref: t }));
        })
      );
    },
    851: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(52500),
        o = n(21999),
        a = n(48813);
      t.Z = i.default.memo(
        i.default.forwardRef(function (e, t) {
          return (0, a.tZ)(o.Z, (0, r.Z)((0, r.Z)({}, e), {}, { ref: t }));
        })
      );
    },
    19032: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(48813);
      t.Z = function (e) {
        var t = e.start,
          n = e.end,
          o = e.value,
          a = e.onChange,
          c = e.children,
          u = e.style;
        return (0, i.tZ)(r.Picker, {
          style: u,
          mode: "date",
          start: t,
          end: n,
          value: o,
          onChange: function (e) {
            return a(e.detail.value);
          },
          children: c,
        });
      };
    },
    47482: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = (n(52500), n(71515)),
        o = n(49528),
        a = n(48813);
      t.Z = function (e) {
        var t = e.style,
          n = e.children,
          c = e.expand,
          u = e.numberOfLines,
          l = void 0 === u ? 1 : u,
          s = {
            height: t.lineHeight * l,
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": l,
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
          d = t;
        c || (d = (0, r.Z)((0, r.Z)({}, d), s));
        var f = (0, o.lW)({ textStyle: d });
        return (0, a.tZ)(i.View, { style: f.textStyle, children: n });
      };
    },
    46628: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = (n(52500), n(71515)),
        o = n(48813);
      t.Z = function (e) {
        var t = e.style,
          n = e.children;
        return (0, o.tZ)(i.View, {
          style: (0, r.Z)((0, r.Z)({}, t), {}, { position: "fixed" }),
          children: n,
        });
      };
    },
    88184: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var r = n(57042),
        i = n(24460),
        o = n(21867),
        a = n(86066),
        c = n(52500),
        u = n(92954),
        l = n.n(u),
        s = n(69006),
        d = n(71515),
        f = n(32970),
        p = n(90098),
        h = n(48813),
        g = (function (e) {
          (0, o.Z)(n, e);
          var t = (0, a.Z)(n);
          function n(e) {
            var i;
            return (
              (0, r.Z)(this, n),
              ((i = t.call(this, e)).state = { pageLength: 0 }),
              i
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = l().getCurrentPages(),
                    t = e ? e.length : 1;
                  this.setState({ pageLength: t });
                },
              },
              {
                key: "onBack",
                value: function () {
                  if (this.state.pageLength > 1) {
                    if (this.props.onBack && !this.props.onBack()) return;
                    l().navigateBack();
                  } else (0, f.Yp)();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = 44 + p.Z.statusBarHeight;
                  return (0, h.BX)(d.View, {
                    children: [
                      (0, h.tZ)(s.Z, {
                        title: this.props.title,
                        propStyle: this.props.propStyle,
                        onBack: this.onBack.bind(this),
                        v2: this.props.v2,
                      }),
                      (0, h.tZ)(d.View, {
                        style:
                          "height: " +
                          e +
                          "px;z-index: -11;width:" +
                          p.Z.screenWidth +
                          "px;",
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(c.default.Component);
    },
    96302: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(69006),
        i = n(79910),
        o = n(71515),
        a = n(90098),
        c = n(48813);
      t.Z = function (e) {
        var t = e.title,
          n = e.backgroundColor,
          u = void 0 === n ? "" : n;
        return (0, c.BX)(c.HY, {
          children: [
            (0, c.tZ)(r.Z, {
              v2: !0,
              title: t,
              className: "taro-crn-head-view",
              propStyle: {
                box: u ? "background: ".concat(u) : "",
                icon: "",
                title: "",
              },
            }),
            i.Z.canUseCustomNav &&
              (0, c.tZ)(o.View, {
                className: "taro-crn-head-view-place-holder",
                style: "padding-top: ".concat(a.Z.statusBarHeight, "px"),
              }),
          ],
        });
      };
    },
    30595: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = (n(52500), n(96302)),
        o = n(43884),
        a = n(48813);
      t.Z = function (e) {
        var t = e.title;
        return (0, a.BX)(a.HY, {
          children: [
            (0, a.tZ)(o.Z, {
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colors: ["rgb(166, 203, 255)", "rgb(245, 245, 245)"],
              locations: [0, 1],
              className: "taro-crn-bg-img",
            }),
            (0, a.tZ)(i.Z, (0, r.Z)((0, r.Z)({}, e), {}, { title: t })),
          ],
        });
      };
    },
    78995: function (e, t, n) {
      "use strict";
      var r = n(90129),
        i = n(52500),
        o = n(92954),
        a = n.n(o),
        c = n(71515),
        u = n(2809),
        l = n(79792),
        s = n(43884),
        d = n(48813),
        f = "#FFFFFF",
        p = "#333333",
        h = "#198CFF",
        g = l.default.isAlipay || l.default.isBaidu;
      t.Z = function (e) {
        var t,
          n = e.page,
          o = e.pop,
          l =
            void 0 === o
              ? function (e) {
                  var t;
                  return null === (t = e.pop) || void 0 === t
                    ? void 0
                    : t.call(e);
                }
              : o,
          v = e.showProps,
          m = void 0 === v ? function () {} : v,
          _ = e.title,
          y = void 0 === _ ? "" : _,
          b = e.colors,
          Z = void 0 === b ? [] : b,
          C = e.titleColor,
          w = void 0 === C ? f : C,
          N = e.titleFontSize,
          T = e.backgroundColor,
          x = void 0 === T ? h : T,
          S = e.defaultBackButtonColor,
          I = void 0 === S ? f : S,
          k = e.zIndex,
          R = void 0 === k ? 99 : k,
          D = e.leftViewWidth,
          F = void 0 === D ? 44 : D,
          P = e.rightViewWidth,
          A = void 0 === P ? 18 : P,
          B = e.renderHeaderView,
          E = e.renderContentView,
          V = e.renderLeftView,
          L = e.renderCenterView,
          O = e.onPressHeaderView,
          z = (0, i.useState)(1),
          j = (0, r.Z)(z, 2),
          M = j[0],
          W = j[1];
        (0, i.useLayoutEffect)(function () {
          var e = a().getCurrentPages();
          W(e ? e.length : 1);
        }, []),
          (t = (null == Z ? void 0 : Z.length) > 0 ? Z : x ? [x, x] : [h, h]);
        var X = function () {
          if (V) return V();
          var e = I || p;
          return (0, d.tZ)(c.View, {
            id: "AMBL",
            onClick: function () {
              l(n);
            },
            className: "zt-header-view-left-default",
            children: (0, d.tZ)(c.Text, {
              className: "".concat(
                M > 1 ? "ifont-back" : "ifont-home",
                " iconfont"
              ),
              style: { color: e },
            }),
          });
        };
        return B
          ? B()
          : (0, d.tZ)(s.Z, {
              end: { x: 1, y: 0 },
              start: { x: 0, y: 0 },
              locations: [0, 1],
              style: {
                paddingTop: "".concat(u.ZP.statusBarHeight, "px"),
                zIndex: R,
              },
              colors: t,
              className: "zt-header-view",
              children: E
                ? E()
                : (0, d.BX)(c.View, {
                    className: "zt-header-view-content",
                    children: [
                      (0, d.tZ)(c.View, {
                        className: "zt-header-view-left",
                        style: { width: Math.max(A, F) },
                        children: !g && X(),
                      }),
                      (0, d.tZ)(c.View, {
                        id: "AMBM",
                        onClick: function () {
                          return null == O ? void 0 : O();
                        },
                        onLongPress: function () {
                          return m();
                        },
                        children: (0, d.tZ)(c.View, {
                          children: L
                            ? L()
                            : y
                            ? (0, d.tZ)(c.Text, {
                                style: {
                                  alignSelf: "center",
                                  fontWeight: "700",
                                  color: w,
                                  fontSize: N,
                                },
                                children: y,
                              })
                            : (0, d.tZ)(i.default.Fragment, {}),
                        }),
                      }),
                    ],
                  }),
            });
      };
    },
    99090: function (e, t, n) {
      "use strict";
      n.d(t, {
        BD: function () {
          return v;
        },
        Cz: function () {
          return g;
        },
        NK: function () {
          return f;
        },
        NO: function () {
          return p;
        },
        U8: function () {
          return h;
        },
        bM: function () {
          return m;
        },
        r2: function () {
          return u;
        },
        r5: function () {
          return s;
        },
        xG: function () {
          return l;
        },
        yl: function () {
          return d;
        },
      });
      var r = n(298),
        i = n(49528),
        o = (n(52500), n(53550)),
        a = n(48813),
        c = function (e) {
          var t = e.size,
            n = e.color,
            c = e.style,
            u = e.children,
            l = (0, i.lW)({
              iconStyle: (0, r.Z)({ fontSize: t, color: n }, c),
            });
          return (0, a.tZ)(o.Z, { style: l.iconStyle, children: u });
        },
        u = function (e) {
          return (0, a.tZ)(c, (0, r.Z)((0, r.Z)({}, e), {}, { children: "󰲞" }));
        },
        l = function (e) {
          return (0, a.tZ)(c, (0, r.Z)((0, r.Z)({}, e), {}, { children: "󰲠" }));
        },
        s = function (e) {
          return (0, a.tZ)(c, (0, r.Z)((0, r.Z)({}, e), {}, { children: "󰲡" }));
        },
        d = function (e) {
          return (0, a.tZ)(c, (0, r.Z)((0, r.Z)({}, e), {}, { children: "󰲢" }));
        },
        f = function (e) {
          return (0, a.tZ)(c, (0, r.Z)((0, r.Z)({}, e), {}, { children: "󰲧" }));
        },
        p = function (e) {
          return (0, a.tZ)(c, (0, r.Z)((0, r.Z)({}, e), {}, { children: "󰲨" }));
        },
        h = function (e) {
          return (0, a.tZ)(c, (0, r.Z)((0, r.Z)({}, e), {}, { children: "󰲫" }));
        },
        g = function (e) {
          return (0, a.tZ)(c, (0, r.Z)((0, r.Z)({}, e), {}, { children: "󰳩" }));
        },
        v = function (e) {
          return (0, a.tZ)(c, (0, r.Z)((0, r.Z)({}, e), {}, { children: "󰳪" }));
        },
        m = function (e) {
          return (0, a.tZ)(c, (0, r.Z)((0, r.Z)({}, e), {}, { children: "󰳭" }));
        };
    },
    53550: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(74921),
        o = n(52500),
        a = n(71515),
        c = n(48813),
        u = ["children", "style"];
      t.Z = o.default.memo(function (e) {
        var t = e.children,
          n = e.style,
          o = void 0 === n ? {} : n,
          l = (0, i.Z)(e, u);
        return (0,
        c.tZ)(a.Text, (0, r.Z)((0, r.Z)({ style: (0, r.Z)({ fontFamily: "crn_font_rn_mini" }, o) }, l), {}, { children: t }));
      });
    },
    83033: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = (n(52500), n(71515)),
        o = n(48813);
      t.Z = function (e) {
        var t = e.children,
          n = e.style,
          a = e.className,
          c = e.source;
        return (0, o.tZ)(i.View, {
          className: a,
          style: (0, r.Z)(
            {
              background: "url(".concat(null == c ? void 0 : c.uri, ")"),
              backgroundSize: "100% 100%",
            },
            n
          ),
          children: t,
        });
      };
    },
    92049: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(48813);
      t.Z = function (e) {
        var t = e.backgroundColor;
        return (0, i.tZ)(r.View, {
          style: {
            height: "env(safe-area-inset-bottom)",
            backgroundColor: t || "transparent",
          },
        });
      };
    },
    43884: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = n(298),
        i = n(74921),
        o = n(57042),
        a = n(24460),
        c = n(81876),
        u = n(21867),
        l = n(86066),
        s = n(45023),
        d = n(52500),
        f = n(71515),
        p = [
          "start",
          "end",
          "colors",
          "locations",
          "useAngle",
          "angleCenter",
          "angle",
          "style",
          "children",
        ],
        h = [
          ["top left", "top", "top right"],
          ["left", null, "right"],
          ["bottom left", "bottom", "bottom right"],
        ];
      function g(e, t) {
        var n,
          r =
            null === (n = h[t.y - e.y + 1]) || void 0 === n
              ? void 0
              : n[t.x - e.x + 1];
        return r ? "to ".concat(r) : null;
      }
      var v = (function (e) {
        (0, u.Z)(n, e);
        var t = (0, l.Z)(n);
        function n() {
          var e;
          (0, o.Z)(this, n);
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
            i[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(i))),
            (0, s.Z)((0, c.Z)(e), "state", { width: 1, height: 1 }),
            (0, s.Z)((0, c.Z)(e), "getAngle", function () {
              var t = e.props,
                n = t.start,
                r = t.end;
              if (e.props.useAngle) return e.props.angle + "deg";
              var i = g(n, r);
              return (
                i ||
                Math.atan2(
                  e.state.width * (e.props.end.y - e.props.start.y),
                  e.state.height * (e.props.end.x - e.props.start.x)
                ) +
                  Math.PI / 2 +
                  "rad"
              );
            }),
            (0, s.Z)((0, c.Z)(e), "getColors", function () {
              return e.props.colors
                .map(function (t, n) {
                  var r = e.props.locations[n],
                    i = "";
                  return r && (i = " " + 100 * r + "%"), t + i;
                })
                .join(",");
            }),
            e
          );
        }
        return (
          (0, a.Z)(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t =
                    (e.start,
                    e.end,
                    e.colors,
                    e.locations,
                    e.useAngle,
                    e.angleCenter,
                    e.angle,
                    e.style),
                  n = void 0 === t ? {} : t,
                  o = e.children,
                  a = (0, i.Z)(e, p);
                return d.default.createElement(
                  f.View,
                  (0, r.Z)(
                    (0, r.Z)({}, a),
                    {},
                    {
                      style: (0, r.Z)(
                        (0, r.Z)({}, n),
                        {},
                        {
                          backgroundImage: "linear-gradient("
                            .concat(this.getAngle(), ",")
                            .concat(this.getColors(), ")"),
                        }
                      ),
                    }
                  ),
                  o
                );
              },
            },
          ]),
          n
        );
      })(d.PureComponent);
      (0, s.Z)(v, "defaultProps", {
        start: { x: 0.5, y: 0 },
        end: { x: 0.5, y: 1 },
        locations: [],
        colors: [],
        useAngle: !1,
        angle: 0,
      });
      var m = v;
    },
    17152: function (e, t, n) {
      "use strict";
      var r = n(52500),
        i = n(71515),
        o = n(48813);
      t.Z = r.default.memo(function (e) {
        var t = e.defaultImg,
          n = e.className,
          r = e.style;
        return t
          ? (0, o.tZ)(i.Image, { className: n, src: t, style: r })
          : (0, o.tZ)(o.HY, {});
      });
    },
    46116: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(74921),
        o = n(52500),
        a = n(71515),
        c = n(48813),
        u = ["children", "className", "borderColor", "borderRadius"];
      t.Z = o.default.memo(function (e) {
        var t = e.children,
          n = e.className,
          o = e.borderColor,
          l = e.borderRadius,
          s = (0, i.Z)(e, u);
        return (0,
        c.BX)(a.View, (0, r.Z)((0, r.Z)({}, s), {}, { className: "one-border-view ".concat(n), children: [t, (0, c.tZ)(a.View, { className: "one-border", style: { borderColor: o, borderRadius: 4 * l + "rpx" } })] }));
      });
    },
    1841: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(74921),
        o = n(52500),
        a = n(34229),
        c = n(48813),
        u = ["children", "style"];
      t.Z = o.default.memo(function (e) {
        var t = e.children,
          n = e.style,
          o = (0, i.Z)(e, u);
        return (0, c.tZ)(a.ZtRichLinkText, (0, r.Z)({ nodes: t, style: n }, o));
      });
    },
    94924: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(74921),
        o = n(52500),
        a = n(71515),
        c = n(48813),
        u = ["children", "style"];
      t.Z = o.default.memo(function (e) {
        var t = e.children,
          n = e.style,
          o = (0, i.Z)(e, u);
        return (0, c.tZ)(a.RichText, (0, r.Z)({ nodes: t, style: n }, o));
      });
    },
    81403: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = (n(52500), n(71515)),
        o = n(79792),
        a = n(48813);
      t.Z = function (e) {
        return o.default.isBaidu && e.flexHeight
          ? (0, a.tZ)(i.View, {
              className: " _j _ee",
              children: (0, a.tZ)(
                i.ScrollView,
                (0, r.Z)(
                  (0, r.Z)({}, e),
                  {},
                  { style: (0, r.Z)({ height: "100%" }, e.style) }
                )
              ),
            })
          : (0, a.tZ)(
              i.ScrollView,
              (0, r.Z)(
                (0, r.Z)({}, e),
                {},
                { style: (0, r.Z)({ flex: "1", height: 0 }, e.style) }
              )
            );
      };
    },
    22102: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(48813);
      t.Z = function (e) {
        var t = e.className,
          n = e.height,
          o = e.data,
          a = e.interval,
          c = void 0 === a ? 3e3 : a,
          u = e.duration,
          l = void 0 === u ? 500 : u,
          s = e.circular;
        return (0, i.tZ)(r.Swiper, {
          className: t,
          interval: c,
          duration: l,
          style: { height: "".concat(2 * n, "rpx") },
          vertical: !0,
          circular: s,
          autoplay: !0,
          children: o.map(function (e, t) {
            return (0, i.tZ)(r.SwiperItem, { children: e }, t);
          }),
        });
      };
    },
    82977: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(90129),
        o = n(52500),
        a = n(92954),
        c = n.n(a),
        u = n(34229),
        l = n(92049),
        s = n(48813);
      t.Z = (0, o.forwardRef)(function (e, t) {
        var n = e.isShowIphoneXAdapter,
          a = void 0 === n || n,
          d = e.iphoneXFooterColor,
          f = void 0 === d ? "#FFFFFF" : d,
          p = e.enableTapBackground,
          h = void 0 === p || p,
          g = e.onCancel,
          v = void 0 === g ? function () {} : g,
          m = e.innerContainerStyle,
          _ = e.children,
          y = (0, o.useState)(!1),
          b = (0, i.Z)(y, 2),
          Z = b[0],
          C = b[1];
        (0, o.useEffect)(function () {
          C(!0);
        }, []),
          (0, o.useImperativeHandle)(
            t,
            function () {
              return { hideAnim: w };
            },
            []
          );
        var w = function (e) {
          C(!1),
            c().nextTick(function () {
              setTimeout(function () {
                null == e || e();
              }, 200);
            });
        };
        return (0, s.BX)(
          u.ZtDrawer,
          (0, r.Z)(
            (0, r.Z)(
              {
                isDefineHead: !0,
                className: "taro-crn-drawer",
                onWrapClose: function () {
                  h && w(v);
                },
                show: Z,
                drawerStyle: (0, r.Z)((0, r.Z)({}, { zIndex: 1e3 }), m),
              },
              e
            ),
            {},
            { children: [_, !!a && (0, s.tZ)(l.Z, { backgroundColor: f })] }
          )
        );
      });
    },
    33003: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return i;
        },
      });
      var r = n(52500);
      function i(e) {
        var t = (0, r.useRef)(null);
        return {
          modalRef: t,
          modalClose: function () {
            var n;
            "function" ==
            typeof (null === (n = t.current) || void 0 === n
              ? void 0
              : n.hideAnim)
              ? t.current.hideAnim(function () {
                  null == e || e();
                })
              : null == e || e();
          },
        };
      }
    },
    82225: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return r;
        },
      }),
        n(52500);
      var r,
        i = n(71515),
        o = n(82977),
        a = n(33003),
        c = n(49528),
        u = n(48813);
      !(function (e) {
        (e.SINGLE = "single"), (e.MULTI = "multi");
      })(r || (r = {})),
        (t.Z = function (e) {
          var t = e.isShow,
            n = e.enableTapBackground,
            l = void 0 === n || n,
            s = e.isShowClose,
            d = void 0 === s || s,
            f = e.imgTitle,
            p = void 0 === f ? "" : f,
            h = e.title,
            g = void 0 === h ? "温馨提示" : h,
            v = e.content,
            m = void 0 === v ? "" : v,
            _ = e.buttonName,
            y = void 0 === _ ? "我知道了" : _,
            b = e.rightButtonName,
            Z = void 0 === b ? "不取消了" : b,
            C = e.leftButtonName,
            w = void 0 === C ? "确认取消" : C,
            N = e.showType,
            T = void 0 === N ? r.SINGLE : N,
            x = e.renderContentView,
            S = e.onClose,
            I = void 0 === S ? function () {} : S,
            k = e.onButtonClick,
            R = void 0 === k ? function () {} : k,
            D = e.onLeftButtonClick,
            F = void 0 === D ? function () {} : D,
            P = e.onRightButtonClick,
            A = void 0 === P ? function () {} : P,
            B = (0, a.c)(I),
            E = B.modalRef,
            V = B.modalClose;
          return (0, u.tZ)(i.View, {
            style: { zIndex: 1001 },
            children:
              t &&
              (0, u.tZ)(o.Z, {
                ref: E,
                enableTapBackground: l,
                onCancel: function () {
                  return V();
                },
                innerContainerStyle: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  zIndex: 1001,
                  backgroundColor: "#fff",
                },
                children: (0, u.BX)(i.View, {
                  className: " _p _Wb _wr _Vb _i _k _l",
                  children: [
                    (0, u.tZ)(i.Image, {
                      className: " _Wb _od _u _q _s _t",
                      style: { width: (0, c.fM)() },
                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
                    }),
                    d &&
                      (0, u.tZ)(i.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                        className: " _u _xr _qk _cc _bc",
                        id: "AMBN",
                        onClick: V,
                        webp: !0,
                      }),
                    !!p &&
                      (0, u.tZ)(i.Image, {
                        className: " _Pp _Lp",
                        src: p,
                        webp: !0,
                      }),
                    (0, u.tZ)(i.View, {
                      className: " _p _bc _sb _pd _Oc",
                      children: g,
                    }),
                    x
                      ? x()
                      : (0, u.tZ)(i.View, {
                          className: " _p _qd _rd _oc _sd _U _o",
                          children: m,
                        }),
                    T === r.SINGLE &&
                      (0, u.tZ)(i.View, {
                        className: " _p _qf _ud _Gc _Xc _w _Oa _o _qb _Wc",
                        id: "AMBO",
                        onClick: function () {
                          R(), V();
                        },
                        children: y,
                      }),
                    T === r.MULTI &&
                      (0, u.BX)(i.View, {
                        className: " _p _i _Ga _m _yr",
                        children: [
                          (0, u.tZ)(i.View, {
                            className: " _zr _Gc _Xc _vd _Oa _o _x _Yb",
                            id: "AMBP",
                            onClick: function () {
                              F(), V();
                            },
                            style: e.leftButtonStyle || {},
                            children: w,
                          }),
                          (0, u.tZ)(i.View, {
                            className: " _zr _Gc _Xc _Fp _Oa _o _qb _Yb _Sf",
                            id: "AMBQ",
                            onClick: function () {
                              A(), V();
                            },
                            style: e.rightButtonStyle || {},
                            children: Z,
                          }),
                        ],
                      }),
                  ],
                }),
              }),
          });
        });
    },
    81023: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(48813);
      t.Z = function () {
        return (0, i.tZ)(r.View, {});
      };
    },
    980: function (e, t, n) {
      "use strict";
      n.d(t, {
        EH: function () {
          return g;
        },
        J: function () {
          return v;
        },
        Pt: function () {
          return p;
        },
        QL: function () {
          return s;
        },
        Ud: function () {
          return y;
        },
        WD: function () {
          return d;
        },
        cE: function () {
          return Z;
        },
        fL: function () {
          return b;
        },
        ky: function () {
          return h;
        },
        l4: function () {
          return l;
        },
        tJ: function () {
          return _;
        },
        ui: function () {
          return f;
        },
        yI: function () {
          return m;
        },
      });
      var r = n(92954),
        i = n.n(r),
        o = n(79910),
        a = "/pages/ticket/packageA/refund/refund",
        c = "/pages/ticket/packageA/evaluate/evaluate",
        u = "/pages/ticket/packageA/book/book",
        l = function (e) {
          var t = e.data,
            n = t.scenicSpotId,
            r = t.source,
            o = t.scenicInfo,
            a = t.TypeSndAttr,
            c = t.CityName,
            u = t.ProductId;
          i().navigateTo({
            url: ""
              .concat(
                "/pages/taroCRN/ticket/pages/detail/index",
                "?scenicSpotId="
              )
              .concat(n, "&source=")
              .concat(r, "&scenicInfo=")
              .concat(o, "&TypeSndAttr=")
              .concat(a, "&CityName=")
              .concat(c, "&ProductId=")
              .concat(u),
          });
        },
        s = function () {},
        d = function (e) {
          var t = e.latitude,
            n = e.longitude,
            r = e.scenicspotName,
            o = e.address;
          i().openLocation({
            latitude: parseFloat(t),
            longitude: parseFloat(n),
            name: r,
            address: o,
          });
        },
        f = function (e) {
          var t = e.self,
            n = e.params,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function () {},
            i = n.orderNumber,
            o = n.refundInfo,
            c = n.source;
          t.navigateTo({
            url: "".concat(a, "?source=").concat(c),
            data: { orderNumber: i, refundInfo: o },
            callback: r,
          });
        },
        p = function (e) {
          i().makePhoneCall({ phoneNumber: e });
        },
        h = function (e) {
          var t = e.self,
            n = e.params,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function () {},
            i = n.scenicSpotId,
            o = n.scenicSpotName,
            a = n.commentTagId,
            u = { commentTagId: a, scenicSpotId: i, scenicSpotName: o };
          a && (u.commentTagId = a),
            t.navigateTo({ url: "".concat(c), data: u, callback: r });
        },
        g = function (e) {
          var t = e.self,
            n = e.params,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function () {},
            i = n.spotId,
            o = n.source,
            a = n.resourceId,
            c = n.couponPrice,
            l = n.productId,
            s = n.resourceIdList,
            d = n.resourceType,
            f = n.startValidDate,
            p = n.endValidDate,
            h = n.validDateDesc,
            g = n.productName,
            v = {
              spotId: i,
              source: o,
              resourceId: a,
              couponPrice: c,
              productId: l,
              resourceIdList: s,
              resourceType: d,
              startValidDate: f,
              endValidDate: p,
              validDateDesc: h,
              productName: g,
            };
          t.navigateTo({ url: "".concat(u), data: v, callback: r });
        },
        v = function (e) {
          var t = e.self,
            n = e.params,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function () {},
            i = n.scenicSpotId,
            o = n.poiDetailList,
            a = n.source;
          t.navigateTo({
            url: "".concat(c),
            data: { scenicSpotId: i, poiDetailList: o, source: a },
            callback: r,
          });
        },
        m = function (e) {
          var t = e.url;
          o.Z.commonNavigator(t);
        },
        _ = function (e) {
          var t = e.url;
          o.Z.commonNavigator(t);
        },
        y = function (e) {
          var t = e.url;
          o.Z.commonNavigator(t);
        },
        b = function () {},
        Z = function () {};
    },
    96271: function (e, t) {
      "use strict";
      t.Z = null;
    },
    50339: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = { View: r.View, Text: r.Text };
      t.Z = i;
    },
    72559: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(71515),
        o = n(52500),
        a = n(23577),
        c = n(48813);
      t.Z = (0, o.memo)(function (e) {
        var t = e.children,
          n = void 0 === t ? null : t,
          o = e.style,
          u = void 0 === o ? {} : o;
        return (0,
        c.tZ)(i.View, { className: " _u _r _Z _gl _su _a _Wb _jl", style: (0, r.Z)({ position: a.Z.isWechat ? "fixed" : "absolute" }, u), children: n });
      });
    },
    19364: function (e, t, n) {
      "use strict";
      var r = n(52500);
      t.Z = r.Component;
    },
    10279: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(74921),
        o = n(57042),
        a = n(24460),
        c = n(21867),
        u = n(86066),
        l = n(52500),
        s = n(48813),
        d = ["forwardedRef"];
      t.Z = function (e) {
        var t = (function (t) {
          (0, c.Z)(l, t);
          var n = (0, u.Z)(l);
          function l() {
            return (0, o.Z)(this, l), n.apply(this, arguments);
          }
          return (
            (0, a.Z)(l, [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    n = t.forwardedRef,
                    o = (0, i.Z)(t, d);
                  return (0, s.tZ)(e, (0, r.Z)({ forwardedRef: n }, o));
                },
              },
            ]),
            l
          );
        })(l.default.Component);
        return l.default.forwardRef(function (e, n) {
          return (0,
          s.tZ)(t, (0, r.Z)((0, r.Z)({}, e), {}, { forwardedRef: n }));
        });
      };
    },
    22537: function (e, t, n) {
      "use strict";
      var r = n(90129),
        i = n(52500),
        o = n(71515),
        a = n(90098),
        c = n(48813),
        u = 44 + a.Z.statusBarHeight;
      t.Z = function (e) {
        var t = (0, i.useRef)(e.rereshResult),
          n = (0, i.useState)(1),
          a = (0, r.Z)(n, 2),
          l = a[0],
          s = a[1];
        return (
          (0, i.useEffect)(
            function () {
              if (((t.current = e.rereshResult), 1 === t.current)) s(1);
              else if (2 === t.current)
                var n = setTimeout(function () {
                  s(2), clearTimeout(n);
                }, 100);
              else
                var r = setTimeout(function () {
                  s(3), clearTimeout(r);
                }, 100);
            },
            [e.rereshResult]
          ),
          (0, c.BX)(o.View, {
            style: {
              position: "fixed",
              top: u,
              left: 0,
              height: 60,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            children: [
              (0, c.tZ)(o.Text, {}),
              (0, c.tZ)(o.Text, {
                style: { color: "#666666", fontSize: 14 },
                children:
                  1 === l ? "刷新中..." : 2 === l ? "刷新成功" : "刷新失败",
              }),
            ],
          })
        );
      };
    },
    33624: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(52500),
        o = n(71515),
        a = n(1841),
        c = n(48813);
      t.Z = i.default.memo(function (e) {
        var t = e.style,
          n = void 0 === t ? {} : t;
        return 1 === e.numberOfLines
          ? (0, c.tZ)(o.View, {
              style: (0, r.Z)(
                {
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
                n
              ),
              children: (0, c.tZ)(a.Z, (0, r.Z)({ style: (0, r.Z)({}, n) }, e)),
            })
          : (0, c.tZ)(a.Z, (0, r.Z)({ style: (0, r.Z)({}, n) }, e));
      });
    },
    96995: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(57042),
        o = n(24460),
        a = (n(52500), n(71515)),
        c = n(22537),
        u = n(10279),
        l = n(48813),
        s = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, o.Z)(e, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.showIndicator,
                    n = void 0 !== t && t,
                    i = e.rereshResult,
                    o = void 0 === i ? 1 : i;
                  return (0, l.BX)(l.HY, {
                    children: [
                      n && (0, l.tZ)(c.Z, { rereshResult: o }),
                      (0, l.tZ)(
                        a.ScrollView,
                        (0, r.Z)(
                          (0, r.Z)({}, this.props),
                          {},
                          { forwardedRef: this.props.forwardedRef }
                        )
                      ),
                    ],
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = (0, u.Z)(s);
    },
    14089: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(74921),
        o = n(52500),
        a = n(71515),
        c = n(50339),
        u = n(23577),
        l = n(48813),
        s = ["style", "animated"];
      t.Z = (0, o.memo)(function (e) {
        var t = e.style,
          n = void 0 === t ? {} : t,
          o = e.animated,
          d = void 0 !== o && o,
          f = (0, i.Z)(e, s);
        return d
          ? (0, l.tZ)(
              c.Z.Text,
              (0, r.Z)(
                {
                  style: (0, r.Z)(
                    (0, r.Z)({}, n),
                    {},
                    {
                      display: u.Z.isWechat ? "block" : "flex",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }
                  ),
                },
                f
              )
            )
          : (0, l.tZ)(
              a.Text,
              (0, r.Z)(
                {
                  style: (0, r.Z)(
                    (0, r.Z)({}, n),
                    {},
                    {
                      display: u.Z.isWechat ? "block" : "flex",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }
                  ),
                },
                f
              )
            );
      });
    },
    63854: function (e, t, n) {
      "use strict";
      var r = n(79301),
        i = n(95308),
        o = n(90129),
        a = n(52500),
        c = n(71515),
        u = n(92954),
        l = n.n(u),
        s = n(83033),
        d = n(23577),
        f = n(35537),
        p = n(48813),
        h = {
          1: {
            title: "学生用户专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_xs@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_xs_bj@3x.png",
            textColor: "#00c777",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_xsbq_c@3x.png",
          },
          21: {
            title: "黑钻用户专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_hy@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_hy_bj@3x.png",
            textColor: "#803906",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_hybq_d@3x.png",
          },
          22: {
            title: "铂金用户专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_hy@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_hy_bj@3x.png",
            textColor: "#803906",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_hybq_d@3x.png",
          },
          23: {
            title: "黄金用户专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_hy@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_hy_bj@3x.png",
            textColor: "#803906",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_hybq_d@3x.png",
          },
          24: {
            title: "白银用户专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_hy@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_hy_bj@3x.png",
            textColor: "#803906",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_hybq_d@3x.png",
          },
          25: {
            title: "普通用户专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_hy@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_hy_bj@3x.png",
            textColor: "#803906",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_hybq_d@3x.png",
          },
          3: {
            title: "火车用户专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_hc@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxyh_bj@3x.png",
            textColor: "#ff5959",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxbq_c@3x.png",
          },
          4: {
            title: "机票用户专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_jp@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxyh_bj@3x.png",
            textColor: "#ff5959",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxbq_c@3x.png",
          },
          5: {
            title: "酒店用户专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_jd@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxyh_bj@3x.png",
            textColor: "#ff5959",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxbq_c@3x.png",
          },
          6: {
            title: "出行用户专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_hc@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxyh_bj@3x.png",
            textColor: "#ff5959",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxbq_c@3x.png",
          },
          7: {
            title: "门票新客专享价",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_jdmp@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxyh_bj@3x.png",
            textColor: "#ff5959",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxbq_c@3x.png",
          },
        };
      t.Z = a.default.memo(function (e) {
        var t,
          n,
          u,
          g = e.cityInfo,
          v = e.backgroundColor,
          m = void 0 === v ? "" : v,
          _ = e.setShowUserModal,
          y = e.handleOnLayout,
          b = e.index,
          Z = void 0 === b ? 0 : b,
          C = e.storeKey,
          w = void 0 === C ? "".concat("TICKET_HOME_USER_SOURCE_DETIAL") : C,
          N = e.setParentSpMktInfo,
          T = void 0 === N ? function () {} : N,
          x = (0, a.useState)(null),
          S = (0, o.Z)(x, 2),
          I = S[0],
          k = S[1],
          R = (function () {
            var e = (0, i.Z)(
              (0, r.Z)().mark(function e() {
                var t;
                return (0, r.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            (0, f.gJ)({
                              gsCityId: g.cityId || 2,
                              cityName:
                                (null == g ? void 0 : g.cityName) || "上海",
                              getUserInfo: !0,
                            })
                          );
                        case 3:
                          1 ===
                            (null == (t = e.sent) ? void 0 : t.resultCode) &&
                            null != t &&
                            t.spMktInfo &&
                            (k(null == t ? void 0 : t.spMktInfo),
                            T(null == t ? void 0 : t.spMktInfo)),
                            (e.next = 9);
                          break;
                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(0));
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        if (
          ((0, a.useEffect)(
            function () {
              (function (e) {
                try {
                  var t = l().getStorageSync(e),
                    n = (null == t ? void 0 : t.hasPop) || !1,
                    r = new Date().getTime() / 1e3,
                    i = (null == t ? void 0 : t.timeStamp) || r;
                  return !!(n && r - i <= 86400);
                } catch (e) {
                  return !1;
                }
              })(w) || R();
            },
            [g]
          ),
          !I)
        )
          return (0, p.tZ)(c.View, {
            onLayout: function (e) {
              if (d.Z.isCRN && y) {
                var t,
                  n = e.nativeEvent;
                y({
                  y:
                    null == n || null === (t = n.layout) || void 0 === t
                      ? void 0
                      : t.height,
                  type: "layout_".concat(Z),
                });
              }
            },
          });
        var D =
            (null == I || null === (t = I.userInfo) || void 0 === t
              ? void 0
              : t.userType) || 6,
          F =
            (null == I || null === (n = I.recommendInfo) || void 0 === n
              ? void 0
              : n.spItemList) || [];
        return (0, p.tZ)(c.View, {
          className: " _xu _i _Ga _n _l _yu",
          style: m ? { backgroundColor: m } : {},
          onClick: function () {
            d.Z.isCRN && _();
          },
          onLayout: function (e) {
            if (d.Z.isCRN && y) {
              var t,
                n = e.nativeEvent;
              y({
                y:
                  null == n || null === (t = n.layout) || void 0 === t
                    ? void 0
                    : t.height,
                type: "layout_".concat(Z),
              });
            }
          },
          children: (0, p.BX)(s.Z, {
            className: " _Z _Sd _i _Ga _l _Oa _p _yc",
            source: {
              uri: null === (u = h[D]) || void 0 === u ? void 0 : u.bgImg,
            },
            resizeMode: "stretch",
            children: [
              (0, p.tZ)(c.Image, { className: " _Ta _Ua _vp", src: h[D].icon }),
              (0, p.tZ)(c.Text, {
                className: " _ck _Dm",
                style: { color: h[D].textColor },
                children: h[D].title,
              }),
              (0, p.tZ)(p.HY, {
                children: F.map(function (e, t) {
                  var n =
                    "¥" === e.unit
                      ? "".concat(e.desc).concat(e.value, "元")
                      : "".concat(e.desc).concat(e.value).concat(e.unit);
                  return (0,
                  p.tZ)(s.Z, { source: { uri: h[D].tagBg }, className: " _lj _nc _i _l _n _Rk", resizeMode: "stretch", children: (0, p.tZ)(c.Text, { className: " _D", style: { color: h[D].textColor }, children: n }) }, t);
                }),
              }),
              (0, p.tZ)(c.Image, {
                className: " _ms _nc _u _q _t",
                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_gb@3x.png",
                id: "AMCH",
                onClick: function () {
                  l().setStorageSync(w, {
                    hasPop: !0,
                    timeStamp: new Date().getTime() / 1e3,
                  }),
                    k(null);
                },
              }),
            ],
          }),
        });
      });
    },
    77510: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(45090),
        o = n(82977),
        a = n(23577),
        c = n(48813),
        u = {
          1: {
            title: "学生用户专享权益",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/xsyh_tcbj@3x.png",
          },
          21: {
            title: "黑钻用户专享权益",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/hyhz_tcbj@3x.png",
          },
          22: {
            title: "铂金用户专享权益",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/hyhz_tcbj@3x.png",
          },
          23: {
            title: "黄金用户专享权益",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/hyhz_tcbj@3x.png",
          },
          24: {
            title: "白银用户专享权益",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/hyhz_tcbj@3x.png",
          },
          25: {
            title: "普通用户专享权益",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/hyhz_tcbj@3x.png",
          },
          3: {
            title: "火车用户专享权益",
            icon: "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_icon_hc@3x.png",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxyh_bj@3x.png",
            textColor: "#ff5959",
            tagBg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/syyh_cxbq_c@3x.png",
          },
          4: {
            title: "机票用户专享权益",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/jdxq_hcyh@3x.png",
          },
          5: {
            title: "酒店用户专享权益",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/jdxq_hcyh@3x.png",
          },
          6: {
            title: "出行用户专享权益",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/jdxq_hcyh@3x.png",
          },
          7: {
            title: "门票用户专享权益",
            bgImg:
              "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/jdxq_hcyh@3x.png",
          },
        };
      t.Z = function (e) {
        var t,
          n,
          l = e.showUserModal,
          s = e.spMktInfo,
          d = e.closeModal;
        if (!l || !s) return null;
        var f =
            (null == s || null === (t = s.userInfo) || void 0 === t
              ? void 0
              : t.userType) || 6,
          p = (null == s ? void 0 : s.userBenefits) || [];
        return a.Z.isCRN && p.length
          ? (0, c.tZ)(o.Z, {
              style: {
                minHeight: 247,
                maxHeight: 0.8 * i.Ro.windowHeight,
                zIndex: 1001,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
              isShowIphoneXAdapter: !1,
              onCancel: function () {
                return d();
              },
              children: (0, c.BX)(r.View, {
                style: {
                  backgroundColor: "#f5f5f5",
                  height: "100%",
                  position: "relative",
                  minHeight: 247,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  width: i.Ro.windowWidth,
                },
                children: [
                  (0, c.tZ)(r.Image, {
                    src: null === (n = u[f]) || void 0 === n ? void 0 : n.bgImg,
                    style: {
                      height: 128,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: i.Ro.windowWidth,
                      zIndex: 1,
                    },
                  }),
                  (0, c.tZ)(r.View, {
                    style: {
                      height: 56,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      zIndex: 2,
                    },
                    children: (0, c.tZ)(r.Text, {
                      style: {
                        color: "#222222",
                        fontSize: 20,
                        fontFamily: "PingFangSC-Medium",
                        fontWeight: "500",
                      },
                      children: u[f].title,
                    }),
                  }),
                  (0, c.tZ)(r.View, {
                    style: {
                      paddingLeft: 16,
                      paddingRight: 16,
                      position: "relative",
                      zIndex: 2,
                    },
                    children: (0, c.tZ)(r.View, {
                      style: {
                        backgroundColor: "#ffffff",
                        paddingTop: 16,
                        paddingLeft: 16,
                        paddingRight: 16,
                        borderRadius: 16,
                        paddingBottom: 20,
                      },
                      children: p.map(function (e, t) {
                        return (0,
                        c.BX)(c.HY, { children: [(0, c.BX)(r.View, { style: { height: 57, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, children: [(0, c.tZ)(r.Image, { src: (null == e ? void 0 : e.icon) || "", style: { width: 28, height: 28, marginRight: 8 } }), (0, c.BX)(r.View, { children: [(0, c.tZ)(r.View, { children: (0, c.tZ)(r.Text, { style: { color: "#222222", fontSize: 16, fontFamily: "PingFangSC-Semibold", fontWeight: "600" }, children: (null == e ? void 0 : e.title) || "" }) }), (0, c.tZ)(r.View, { style: { marginTop: 2 }, children: (0, c.tZ)(r.Text, { style: { color: "#666666", fontSize: 12, fontFamily: "PingFangSC-Regular" }, children: (null == e ? void 0 : e.subTitle) || "" }) })] })] }, e + t), t < p.length && (0, c.tZ)(r.View, { style: { height: 0.5, backgroundColor: "rgba(0,0,0,0.05)" } })] });
                      }),
                    }),
                  }),
                  (0, c.tZ)(r.Image, {
                    onClick: d,
                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/jdxq_icon_gb@3x.png",
                    style: {
                      width: 24,
                      height: 24,
                      position: "absolute",
                      right: 16,
                      top: 16,
                    },
                  }),
                ],
              }),
            })
          : null;
      };
    },
    83606: function (e, t, n) {
      "use strict";
      var r = n(52500),
        i = n(71515),
        o = n(45090),
        a = n(10374),
        c = n(48813);
      t.Z = (0, r.memo)(function (e) {
        var t = e.zengxinConfigs,
          n = void 0 === t ? {} : t,
          r = e.onZxClick,
          u = void 0 === r ? function () {} : r;
        return (0,
        c.BX)(i.View, { style: { height: 61, borderTopLeftRadius: 16, borderTopRightRadius: 16, width: o.Ro.windowWidth, position: "relative", paddingTop: 10, paddingLeft: 16 }, onClick: u, children: [(0, c.tZ)(i.Image, { style: { height: 61, width: o.Ro.windowWidth, position: "absolute", left: 0, top: 0, zIndex: 1 }, src: (null == n ? void 0 : n.headTopBgImg) || "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/mp_slogan_px@3x.png" }), (0, c.BX)(i.View, { style: { position: "relative", zIndex: 2, display: "flex", flexDirection: "row", alignItems: "center" }, children: [(0, c.tZ)(i.Image, { style: { width: 80, height: 15, position: "relative", marginRight: 10 }, src: (null == n ? void 0 : n.headTitleImg) || "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/sy_title_fwbz@3x.png" }), (0, c.tZ)(a.Z, { zengxinConfigs: n })] })] });
      });
    },
    6296: function (e, t, n) {
      "use strict";
      var r = n(52500),
        i = n(71515),
        o = n(92049),
        a = n(45090),
        c = n(82977),
        u = n(43884),
        l = n(10374),
        s = n(48813);
      t.Z = (0, r.memo)(function (e) {
        var t,
          n = e.zengxinConfigs,
          r = void 0 === n ? {} : n,
          d = e.onZxClick,
          f = void 0 === d ? function () {} : d,
          p = e.zxModalVisible;
        if (void 0 !== p && p)
          return (0, s.tZ)(c.Z, {
            isShowIphoneXAdapter: !1,
            onCancel: function () {
              return f(!1);
            },
            children: (0, s.BX)(i.View, {
              style: {
                maxHeight: 0.8 * a.Ro.windowHeight,
                minHeight: 0.5 * a.Ro.windowHeight,
                paddingTop: 83,
                position: "relative",
                backgroundColor: "#f5f5f5",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              children: [
                (0, s.tZ)(i.Image, {
                  className: " _u _q _s _tu _Z",
                  onClick: function () {
                    return f(!1);
                  },
                  src:
                    (null == r ? void 0 : r.modalHeaderImg) ||
                    "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/mp_slogan_tc@3x.png",
                }),
                (0, s.tZ)(i.View, {
                  style: { position: "absolute", top: 51, left: 24 },
                  children: (0, s.tZ)(l.Z, { zengxinConfigs: r }),
                }),
                (0, s.tZ)(i.View, {
                  className: " _u _ac _Zb _cc _bc",
                  onClick: function () {
                    return f(!1);
                  },
                  children: (0, s.tZ)(i.Image, {
                    className: " _cc _bc",
                    src: "https://images3.c-ctrip.com/ztrip/train_bin/23-06/icon_close@3x.png",
                  }),
                }),
                (0, s.BX)(i.ScrollView, {
                  scrollY: !0,
                  style: { height: 0.8 * a.Ro.windowHeight },
                  showsVerticalScrollIndicator: !1,
                  children: [
                    (0, s.tZ)(i.View, {
                      className: " _uu",
                      children:
                        (null == r ? void 0 : r.contentInfo) &&
                        (null == r ||
                        null === (t = r.contentInfo) ||
                        void 0 === t
                          ? void 0
                          : t.map(function (e, t) {
                              var n, r;
                              return (0, s.BX)(
                                i.View,
                                {
                                  className: " _jj _Oa _vu",
                                  style: { marginTop: 0 === t ? 0 : 10 },
                                  children: [
                                    (0, s.BX)(i.View, {
                                      className: " _wu _Qg _i _Ga _l",
                                      children: [
                                        (0, s.tZ)(u.Z, {
                                          start: { x: 0, y: 0 },
                                          end: { x: 1, y: 1 },
                                          colors: [
                                            "rgb(79, 216, 255)",
                                            "rgb(25, 178, 255)",
                                          ],
                                          style: {
                                            borderRadius: 4,
                                            borderBottomRightRadius: 10,
                                            width: 24,
                                            height: 20,
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                          },
                                          children: (0, s.tZ)(i.Text, {
                                            style: {
                                              color: "#ffffff",
                                              fontSize: 13,
                                              fontWeight: "900",
                                              textAlign: "center",
                                            },
                                            children: "0".concat(t + 1),
                                          }),
                                        }),
                                        (0, s.tZ)(i.Text, {
                                          className: " _dd _Nc _Sf",
                                          children:
                                            null == e ? void 0 : e.title,
                                        }),
                                      ],
                                    }),
                                    (null == e ? void 0 : e.content) &&
                                      (null == e ||
                                      null === (n = e.content) ||
                                      void 0 === n ||
                                      null === (r = n.split("br")) ||
                                      void 0 === r
                                        ? void 0
                                        : r.map(function (t, n) {
                                            var r, o;
                                            return (0,
                                            s.BX)(i.View, { children: [(0, s.tZ)(i.Text, { className: " _Nd _mk", children: t || "" }), n < (null == e || null === (r = e.content) || void 0 === r || null === (o = r.split("br")) || void 0 === o ? void 0 : o.length) - 1 && (0, s.tZ)(i.View, { style: { height: 16 } })] }, n);
                                          })),
                                    (0, s.tZ)(i.View, {
                                      style: { height: 16 },
                                    }),
                                  ],
                                },
                                "index"
                              );
                            })),
                    }),
                    (0, s.tZ)(o.Z, {}),
                  ],
                }),
              ],
            }),
          });
      });
    },
    10374: function (e, t, n) {
      "use strict";
      var r = n(52500),
        i = n(71515),
        o = n(23577),
        a = n(48813);
      t.Z = (0, r.memo)(function (e) {
        var t,
          n = e.zengxinConfigs,
          r = void 0 === n ? {} : n;
        return (0, a.tZ)(i.View, {
          style: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          },
          children:
            (null == r ? void 0 : r.contentInfo) &&
            (null == r || null === (t = r.contentInfo) || void 0 === t
              ? void 0
              : t.map(function (e, t) {
                  return (0,
                  a.BX)(i.View, { style: { display: "flex", alignItems: "center", flexDirection: "row", marginLeft: 0 !== t ? ("ios" === o.Z.os ? 12 : 6) : 0 }, children: [(0, a.tZ)(i.Image, { style: { height: 11.5, width: 12 }, src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/mp_icon_dg@3x.png" }), (0, a.tZ)(i.Text, { style: { color: "#3c5a86", fontSize: 12, fontFamily: "PingFangSC-Regular", marginLeft: 2 }, children: (null == e ? void 0 : e.title) || "" })] }, t);
                })),
        });
      });
    },
    6407: function (e, t, n) {
      "use strict";
      n.d(t, {
        T4: function () {
          return l;
        },
        Xl: function () {
          return f;
        },
        Y8: function () {
          return d;
        },
        fm: function () {
          return s;
        },
        xC: function () {
          return h;
        },
        xg: function () {
          return p;
        },
      });
      var r = n(3205),
        i = n(13025),
        o = n(27113),
        a = n(79910),
        c = n(35537),
        u = (n(90582), n(69716));
      function l(e) {
        a.Z.commonNavigator(null == e ? void 0 : e.url);
      }
      function s(e, t) {
        var n = {
          inlandCities: u.O5.get() || {},
          OverseasCities: u.g_.get() || {},
          interCities: {},
        };
        console.log("citydata===", n),
          r.Z.city(
            {
              title: "目的地列表",
              bu: "ticket",
              handleSearch: function (e, t, n) {
                var r = [];
                (0, c.Z$)({ keyword: e, overseasCityFlag: 1 }).then(function (
                  e
                ) {
                  1 === e.resultCode &&
                    ((r = e.cities).forEach(function (e) {
                      (e.cityName = e.name),
                        (e.cityID = e.id),
                        delete e.name,
                        delete e.id;
                    }),
                    n(r));
                });
              },
              loadData: function (e) {
                e(n);
              },
              handleCurrentPosition: function (e, t) {
                var n = {
                  Latitude: e.latitude,
                  Longitude: e.longitude,
                  Language: "CN",
                };
                (0, i.T_)(n)
                  .then(function (e) {
                    console.log(e),
                      t({
                        cityName: e.CityEntities[0].CityName,
                        cityID: e.DistrictId,
                        countryName: e.CountryName,
                      });
                  })
                  .catch(function () {});
              },
            },
            function (e) {
              console.log("选中的城市", e);
              var n = {
                cityID: e.cityID,
                cityName: e.cityName,
                overseaFlag: e.overseaFlag,
              };
              u.$s.set(n), t(n);
              var r = u.O5.getAttr("historyCities") || [];
              if (0 == r.length) r.push(e);
              else {
                for (var i = Object.assign({}, e), o = 0; o < r.length; o++)
                  if (
                    Number(e.cityID) === Number(r[o].cityID) &&
                    e.cityName === r[o].cityName
                  ) {
                    r.splice(o, 1);
                    break;
                  }
                r.unshift(i), (r = r.slice(0, 4));
              }
              u.O5.setAttr("historyCities", r);
            }
          );
      }
      function d(e) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : function () {};
        (0, o.PA)(
          function (r) {
            console.log("location res===", r),
              t
                ? null != r && r.lat && null != r && r.lng
                  ? e.setState(
                      {
                        currentCityInfo: {
                          cityID: null == r ? void 0 : r.cityId,
                          cityName: null == r ? void 0 : r.cityName,
                        },
                        locateCityInfo: {
                          cityID: null == r ? void 0 : r.cityId,
                          cityName: null == r ? void 0 : r.cityName,
                          latitude: null == r ? void 0 : r.lat,
                          longitude: null == r ? void 0 : r.lng,
                        },
                      },
                      function () {
                        e.initLoad(1);
                      }
                    )
                  : e.initLoad(1)
                : e.setState(
                    {
                      locateCityInfo: {
                        cityID: (null == r ? void 0 : r.cityId) || 2,
                        cityName: (null == r ? void 0 : r.cityName) || "上海",
                        latitude: null == r ? void 0 : r.lat,
                        longitude: null == r ? void 0 : r.lng,
                      },
                    },
                    function () {
                      null == n || n();
                    }
                  );
          },
          function () {
            return null == n ? void 0 : n();
          }
        );
      }
      function f(e) {}
      function p() {}
      var h = function () {};
    },
    50208: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return r;
        },
        d: function () {
          return i;
        },
      });
      var r = [
          { sortType: "D", sortDirection: "", text: "智能排序" },
          { sortType: "V", sortDirection: "D", text: "销量最高" },
        ],
        i = [{ text: "可订今日", filterType: "canNowUse" }];
    },
    69716: function (e, t, n) {
      "use strict";
      n.d(t, {
        $s: function () {
          return u;
        },
        O5: function () {
          return l;
        },
        g_: function () {
          return s;
        },
      });
      var r = n(57042),
        i = n(24460),
        o = n(92954),
        a = n.n(o),
        c = (function () {
          function e(t) {
            (0, r.Z)(this, e), (this.key = t);
          }
          return (
            (0, i.Z)(
              e,
              [
                {
                  key: "set",
                  value: function (e) {
                    if (null == e) return a().setStorageSync(this.key, "");
                    a().setStorageSync(this.key, e);
                  },
                },
                {
                  key: "get",
                  value: function () {
                    return a().getStorageSync(this.key);
                  },
                },
                {
                  key: "setAttr",
                  value: function (e, t) {
                    var n = this.get() || {};
                    (n[e] = t), this.set(n);
                  },
                },
                {
                  key: "getAttr",
                  value: function (e) {
                    return this.get()[e];
                  },
                },
                {
                  key: "removeAttr",
                  value: function (e) {
                    a().removeStorageSync(e);
                  },
                },
              ],
              [
                {
                  key: "getInstance",
                  value: function (t) {
                    return new e(t);
                  },
                },
              ]
            ),
            e
          );
        })(),
        u =
          (c.getInstance("HOME_DEFAULT_ALERT_STORE"),
          c.getInstance("CITY_CURRENT_STORE")),
        l = c.getInstance("CITY_LIST_STORE"),
        s = c.getInstance("OVERSEAS_CITY_LIST_STORE");
      c.getInstance("IS_CHANGE_CITY"),
        c.getInstance("SEARCH_HISTORY_STORE"),
        c.getInstance("HOME_HISTORY_STORE"),
        c.getInstance("BOOK_HANDTIP_STORE"),
        c.getInstance("FAIL_TICKETING_STORE");
    },
    2081: function (e, t, n) {
      "use strict";
      var r = n(52500),
        i = n(71515),
        o = n(48813);
      t.Z = (0, r.memo)(function (e) {
        var t = e.title,
          n = void 0 === t ? "未找到符合条件的结果哦～" : t,
          r = e.style,
          a = void 0 === r ? {} : r;
        return (0,
        o.BX)(i.View, { className: " _a _er _Oa _i _k _l _n _lv", style: a, children: [(0, o.tZ)(i.Image, { className: " _mv _nv", src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/cpp@3x.png" }), (0, o.tZ)(i.Text, { className: " _oc _G", children: n })] });
      });
    },
    90017: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(48813),
        o = [
          { title: "全部景点", type: "all" },
          { title: "智能排序", type: "sort" },
          { title: "筛选", type: "filter" },
        ];
      t.Z = function (e) {
        var t = e.onFilterBar,
          n = e.sortLabel,
          a = e.sceneLabel,
          c = e.isShowFilterPop,
          u = e.optionListType,
          l = e.filterLabel,
          s = function (e) {
            var t = {};
            return (
              "all" === e.type
                ? ((t.txt = a || "全部景点"),
                  (t.select = !!a || (c && "all" === u)))
                : "sort" === e.type
                ? ((t.txt = n || "智能排序"),
                  (t.select = !!n || (c && "sort" === u)))
                : "filter" === e.type &&
                  ((t.txt = l || "筛选"),
                  (t.select = !!l || (c && "filter" === u))),
              t
            );
          };
        return (0, i.tZ)(r.View, {
          className: " _nc _i _Ga _m _l _fc",
          children: o.map(function (e, n) {
            var o = s(e);
            return (0, i.BX)(
              r.View,
              {
                className: " _i _Ga _l",
                id: "AMBx",
                onClick: function () {
                  return t(e.type);
                },
                children: [
                  (0, i.tZ)(r.Text, {
                    className: o.select ? " _x _Oj" : " _Xb _Oj",
                    children: o.txt,
                  }),
                  (0, i.tZ)(r.Image, {
                    src: o.select
                      ? c
                        ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_xssq@3x.png"
                        : "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_xxsx@3x.png"
                      : "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_xxzk@3x.png",
                    className: " _Bb _dg _Zg",
                  }),
                ],
              },
              n
            );
          }),
        });
      };
    },
    91629: function (e, t, n) {
      "use strict";
      var r = n(90129),
        i = n(52500),
        o = n(71515),
        a = n(48813);
      t.Z = function (e) {
        var t = e.optionList,
          n = e.onFilterItem,
          c = e.sortParameter,
          u = e.filterList,
          l = e.optionListType,
          s = e.canNowUse,
          d = e.pageId,
          f = e.ubtTrace,
          p = (0, i.useState)([]),
          h = (0, r.Z)(p, 2),
          g = h[0],
          v = h[1];
        return (
          (0, i.useEffect)(
            function () {
              (null == t ? void 0 : t.length) > 0 &&
                ("all" === l
                  ? t.forEach(function (e) {
                      var t;
                      (null == e ? void 0 : e.value) ===
                      (null === (t = u[0]) || void 0 === t ? void 0 : t.value)
                        ? (e.select = !0)
                        : (e.select = !1);
                    })
                  : "sort" === l
                  ? t.forEach(function (e) {
                      (null == e ? void 0 : e.sortDirection) ===
                      (null == c ? void 0 : c.sortDirection)
                        ? (e.select = !0)
                        : (e.select = !1);
                    })
                  : "filter" === l &&
                    t.forEach(function (e) {
                      e.select = !!s;
                    }),
                v(t));
            },
            [t, c, l, u]
          ),
          (0, a.tZ)(a.HY, {
            children: (0, a.BX)(o.ScrollView, {
              className: " _Z _Fv _i _Zr _k _gw",
              scrollY: !0,
              children: [
                (0, a.tZ)(o.View, { className: " _ag _Uv _cw _wc" }),
                null == g
                  ? void 0
                  : g.map(function (e, t) {
                      return (0, a.BX)(
                        o.View,
                        {
                          className: " _i _Ga _m _l _jk",
                          id: "AMBy",
                          onClick: function () {
                            null == f ||
                              f("SZAHome_RecSpot_Sizer_click", {
                                PageId: d,
                                TypeSndAttr: e.text,
                              }),
                              n(e);
                          },
                          children: [
                            (0, a.tZ)(o.Text, {
                              className:
                                null != e && e.select ? " _x _hw" : " _Ma _G",
                              children: e.text,
                            }),
                            (null == e ? void 0 : e.select) &&
                              (0, a.tZ)(o.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_dgxz@3x.png",
                                className: " _Bb _dg _Xf",
                              }),
                          ],
                        },
                        t
                      );
                    }),
              ],
            }),
          })
        );
      };
    },
    41105: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(90129),
        i = n(52500),
        o = n(71515),
        a = n(48813),
        c = function (e) {
          var t = e.style,
            n = e.renderItem,
            r = e.autoPlay,
            i = void 0 !== r && r,
            c = e.interval,
            u = void 0 === c ? 3e3 : c,
            l = e.vertical,
            s = void 0 !== l && l,
            d = e.loop,
            f = void 0 !== d && d,
            p = e.data,
            h = void 0 === p ? [] : p,
            g = e.sliderWidth,
            v = e.itemWidth,
            m = e.onIndexChange;
          return (0, a.tZ)(o.Swiper, {
            style: t,
            vertical: s,
            snapToEdge: !0,
            autoPlay: i,
            interval: u,
            circular: f,
            nextMargin: "".concat(2 * (g - v), "rpx"),
            onChange: function (e) {
              var t = e.detail.current;
              null == m || m(t);
            },
            children: h.map(function (e, t) {
              return (0,
              a.tZ)(o.SwiperItem, { children: n({ item: e, index: t }) }, t);
            }),
          });
        },
        u = n(23577),
        l = n(45090),
        s = n(980),
        d = u.Z.isCRN
          ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/app_banner_ddt@3x.png"
          : "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/xcx_banner_ddt@3x.png",
        f = (0, i.memo)(function (e) {
          var t = e.bannerListConfig,
            n = void 0 === t ? [] : t,
            f = e.pageId,
            p = void 0 === f ? "" : f,
            h = e.ubtTrace,
            g = void 0 === h ? function () {} : h,
            v = (0, i.useState)(0),
            m = (0, r.Z)(v, 2),
            _ = m[0],
            y = m[1],
            b = function (e) {
              var t = e.item,
                r = e.index;
              return (0, a.tZ)(
                o.View,
                {
                  style: { width: l.Ro.screenWidth - 16 },
                  id: "AMCI",
                  onClick: function () {
                    null != t &&
                      t.jumpUrl &&
                      ((0, s.Ud)({
                        url: u.Z.isCRN
                          ? null == t
                            ? void 0
                            : t.jumpUrl
                          : null == t
                          ? void 0
                          : t.miniJumpUrl,
                      }),
                      g(null == t ? void 0 : t.ubtClick, {
                        PageId: p,
                        Type: null == t ? void 0 : t.ubtType,
                      }));
                  },
                  children: (0, a.tZ)(o.Image, {
                    src: u.Z.isCRN
                      ? null == t
                        ? void 0
                        : t.imageUrl
                      : null == t
                      ? void 0
                      : t.miniImgUrl,
                    style: {
                      width: l.Ro.screenWidth,
                      height: u.Z.isCRN ? 178 : n.length <= 1 ? 160 : 128,
                    },
                  }),
                },
                r
              );
            },
            Z = function (e) {
              y(e);
            };
          return (0, a.tZ)(o.View, {
            children: (0, a.BX)(o.View, {
              style: { position: "relative", zIndex: 1 },
              children: [
                n.length > 1 &&
                  (0, a.tZ)(c, {
                    data: n.length ? n || [] : [{ imageUrl: d, miniImgUrl: d }],
                    renderItem: b,
                    sliderWidth: l.Ro.screenWidth,
                    itemWidth: l.Ro.screenWidth,
                    firstItem: 0,
                    inactiveSlideScale: 1,
                    inactiveSlideOpacity: 1,
                    enableSnap: !0,
                    autoplay: (null == n ? void 0 : n.length) > 1,
                    autoplayDelay: 500,
                    autoplayInterval: 3e3,
                    onIndexChange: Z,
                    onSnapToItem: Z,
                    bounces: !1,
                  }),
                1 === n.length && b({ item: n[0], index: 0 }),
                0 === n.length &&
                  b({ item: { imageUrl: d, miniImgUrl: d }, index: 0 }),
                (null == n ? void 0 : n.length) >= 2 &&
                  (0, a.tZ)(o.View, {
                    style: {
                      width: l.Ro.screenWidth,
                      height: 4,
                      position: "absolute",
                      bottom: u.Z.isCRN ? 24 : 48,
                      left: 0,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    children: n.map(function (e, t) {
                      return (0,
                      a.tZ)(o.View, { style: { height: 4, width: _ === t ? 8 : 4, borderRadius: 2, backgroundColor: "#fff", marginLeft: 4, opacity: _ === t ? 1 : 0.6 } }, t);
                    }),
                  }),
              ],
            }),
          });
        });
    },
    50668: function (e, t, n) {
      "use strict";
      var r = n(34229),
        i = (n(52500), n(48813));
      t.Z = function (e) {
        var t = e.list,
          n = e.pageNum,
          o = e.pageSize,
          a = e.onRenderHeader,
          c = void 0 === a ? function () {} : a,
          u = e.onRequestNextPage,
          l = void 0 === u ? function () {} : u,
          s = e.onRenderItem,
          d = void 0 === s ? function () {} : s,
          f = e.onScroll,
          p = e.scrollIntoView;
        return (0, i.tZ)(r.ZtVirtualList, {
          list: t,
          listId: "zt-virtial-list-ticket",
          listType: "multi",
          pageNum: n,
          segmentNum: o,
          autoScrollTop: !1,
          onRenderTop: c,
          className: " _Z _Y _Xv",
          scrollViewProps: {
            onScrollToLower: function () {
              return l();
            },
            lowerThreshold: 100,
            onScroll: function (e) {
              return f(e);
            },
            scrollIntoView: p,
          },
          onRender: function (e, t) {
            return d(e, t);
          },
        });
      };
    },
    96616: function (e, t, n) {
      "use strict";
      var r = n(45023),
        i = n(52500),
        o = n(71515),
        a = n(90098),
        c = n(23577),
        u = n(50339),
        l = n(48813),
        s =
          ("ios" === a.Z.OS ? a.Z.safeAreaTop : a.Z.safeAreaTop || 0) +
          ("ios" === a.Z.OS ? 44 : 50),
        d = "ios" === a.Z.OS ? 12 : 0,
        f = a.Z.safeAreaTop + 126 - s - d;
      t.Z = (0, i.memo)(function (e) {
        var t,
          n = e.cityName,
          i = e.selectCity,
          a = e.onSearch,
          s = e.keyword,
          d = e.scrollValue,
          p = e.backgroundColor,
          h = void 0 === p ? "" : p,
          g = c.Z.isCRN
            ? d.interpolate({
                inputRange: [0, f - 10, f],
                outputRange: ["#fff", "#fff", "#f5f5f5"],
                extrapolate: "clamp",
              })
            : "#fff";
        return (0,
        l.BX)(u.Z.View, { style: ((t = { flex: 1, height: 32, backgroundColor: "#fff", display: "flex", borderRadius: 12, flexDirection: "row", alignItems: "center" }), (0, r.Z)(t, "backgroundColor", h || g), (0, r.Z)(t, "justifyContent", "center"), t), children: [(0, l.BX)(o.View, { className: " _yw _zw _i _Ga _l _n", id: "AMCB", onClick: i, children: [(0, l.tZ)(o.Text, { className: " _sb _rl", numberOfLines: 1, children: n || "上海" }), (0, l.tZ)(o.Image, { src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_xxzk@3x.png", className: " _Bb _dg" })] }), (0, l.tZ)(o.View, { className: " _Rj _vw" }), (0, l.BX)(o.View, { className: " _oo _i _l _Aw", children: [(0, l.tZ)(o.Image, { src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_ss@3x.png", className: " _Ce _De _Ne" }), (0, l.tZ)(o.View, { className: " _G _Kc", id: "AMCC", onClick: a, children: (0, l.tZ)(o.Text, { className: " _G _Kc", numberOfLines: 1, ellipsizeMode: "tail", children: s || "搜索你感兴趣的景点" }) })] })] });
      });
    },
    57189: function (e, t, n) {
      "use strict";
      var r = n(52500),
        i = n(71515),
        o = n(50339),
        a = n(23577),
        c = n(90098),
        u = n(48813),
        l = a.Z.isTieyou
          ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/img_tymp_slogan@3x.png"
          : "https://images3.c-ctrip.com/ztrip/train_bin/23-07/mp/img_zxmp_slogan@3x.png",
        s = a.Z.isTieyou
          ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/img_tymp_slogan_hei@3x.png"
          : "https://images3.c-ctrip.com/ztrip/train_bin/23-07/mp/img_zxmp_slogan_hei@3x.png",
        d =
          ("ios" === c.Z.OS ? c.Z.safeAreaTop : c.Z.safeAreaTop || 0) +
          ("ios" === c.Z.OS ? 44 : 50),
        f = "ios" === c.Z.OS ? 12 : 0,
        p = c.Z.safeAreaTop + 126 - d - f;
      t.Z = (0, r.memo)(function (e) {
        var t = e.scrollValue,
          n = a.Z.isCRN
            ? t.interpolate({
                inputRange: [0, p],
                outputRange: [0, 1],
                extrapolate: "clamp",
              })
            : 0,
          r = a.Z.isCRN
            ? t.interpolate({
                inputRange: [0, p],
                outputRange: [1, 0],
                extrapolate: "clamp",
              })
            : 1;
        return (0,
        u.BX)(i.View, { style: { width: 77, height: 18, position: "relative" }, children: [(0, u.tZ)(o.Z.View, { style: { width: 77, height: 18, position: "absolute", zIndex: 1, opacity: n }, children: (0, u.tZ)(i.Image, { style: { width: 77, height: 18 }, src: s }) }), (0, u.tZ)(o.Z.View, { style: { width: 77, height: 18, position: "absolute", zIndex: 2, opacity: r }, children: (0, u.tZ)(i.Image, { style: { width: 77, height: 18 }, src: l }) })] });
      });
    },
    8992: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(23577),
        o = n(43884),
        a = n(48813);
      function c(e) {
        var t = "暂无评论";
        return (
          e > 0 && e < 1e4
            ? (t = e + "条评论")
            : e >= 1e4 && (t = (e / 1e4).toFixed(1) + "w+条评论"),
          t
        );
      }
      var u = function (e) {
        return Number(e).toFixed(0) === Number(e)
          ? Number(e).toFixed(0)
          : Number(e);
      };
      t.Z = function (e) {
        var t,
          n,
          l,
          s,
          d,
          f,
          p,
          h,
          g,
          v = e.isFirst,
          m = e.isLast,
          _ = e.data,
          y = e.onItem,
          b = e.index;
        if (!_) return (0, a.tZ)(r.View, {});
        var Z = i.Z.isCRN
          ? " _kl _Vb _Mb _yc _Bw _pb"
          : " _kl _Vb _Mb _yc _Oa _Cw";
        return (
          v
            ? (Z = i.Z.isCRN
                ? " _Dw _Vb _Mb _yc _pb _Bw"
                : " _Ew _Vb _Mb _yc _Fw _Fr")
            : m &&
              (Z = i.Z.isCRN
                ? " _Gw _Vb _Mb _yc _Rd _pb"
                : " _Fv _Hw _Vb _Mb _yc _Rd"),
          (0, a.tZ)(r.View, {
            className: Z,
            id: "spot_item_".concat(b),
            children: (0, a.BX)(r.View, {
              className: v
                ? " _Hv _i _k"
                : i.Z.isCRN
                ? " _Gv _i _k"
                : " _Iw _i _k",
              id: "AMCA",
              onClick: function () {
                return y(_);
              },
              style: i.Z.isCRN ? { marginTop: 0, paddingBottom: 10 } : {},
              children: [
                (0, a.BX)(r.View, {
                  style: { display: "flex", flexDirection: "row" },
                  children: [
                    (0, a.BX)(r.View, {
                      className: " _rp _i _k _pf _Qf _p",
                      children: [
                        (0, a.tZ)(r.Image, {
                          src: _.imageURL,
                          className:
                            "ios" === i.Z.os ? " _rp _Iv _dc" : " _xb _Jw _vi",
                        }),
                        !(null == _ || !_.saleCountText) &&
                          (0, a.tZ)(r.View, {
                            className: " _u _Sw _il _De _Z _Tw _Mb _i _Ga _Sc",
                            children: (0, a.tZ)(r.View, {
                              className: " _Uw _Vw _eg _Lv _vi _i _Ga _Sc _l",
                              style: i.Z.isCRN ? {} : { maxWidth: "85%" },
                              children: (0, a.tZ)(r.Text, {
                                numberOfLines: 1,
                                className: " _b _Ww _Xm _Ym _yc _Q",
                                children: null == _ ? void 0 : _.saleCountText,
                              }),
                            }),
                          }),
                      ],
                    }),
                    (0, a.BX)(r.View, {
                      className: " _Db _i _kk",
                      children: [
                        (0, a.BX)(r.Text, {
                          className: " _Xb _Jv",
                          children: [
                            _.name,
                            _.star && _.star >= 4
                              ? "(".concat(_.star, "A)")
                              : "",
                          ],
                        }),
                        !!_.rankingName &&
                          (0, a.BX)(r.View, {
                            className: " _i _Ga _l _Bj",
                            children: [
                              (0, a.tZ)(o.Z, {
                                className: " _Vf _Kv _i _Ga _l _n _Mw",
                                start: { x: 0, y: 0.5 },
                                end: { x: 1, y: 0.5 },
                                colors: [
                                  "rgb(255, 249, 241)",
                                  "rgb(255, 236, 210)",
                                ],
                                children: (0, a.tZ)(r.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_bq_jxb@3x.png",
                                  className: " _Zl _og",
                                }),
                              }),
                              (0, a.tZ)(o.Z, {
                                className: " _Kv _Nw _Lv _i _Ga _l",
                                start: { x: 0, y: 0.5 },
                                end: { x: 1, y: 0.5 },
                                colors: [
                                  "rgb(255, 249, 241)",
                                  "rgb(255, 236, 210)",
                                ],
                                children: (0, a.tZ)(r.Text, {
                                  className: " _Ow _rl",
                                  children: _.rankingName,
                                }),
                              }),
                            ],
                          }),
                        !!_.pmRecommand &&
                          (0, a.BX)(r.View, {
                            className: " _Bj _vd _Kv _ji _Lv _i _Ga _l _xh _E",
                            children: ["“", _.pmRecommand, "”"],
                          }),
                        (0, a.BX)(r.View, {
                          className: " _Mv _i _Ga _l",
                          children: [
                            (0, a.tZ)(r.Text, {
                              className: " _x _Nv",
                              children: _.commentGrade
                                ? "".concat(_.commentGrade.toFixed(1), "分")
                                : "暂无评分",
                            }),
                            (0, a.tZ)(r.View, {
                              className: " _uh _sf _Ov _Yk",
                            }),
                            (0, a.tZ)(r.Text, {
                              className: " _uh _Ma _E",
                              children: c(_.commentCount),
                            }),
                          ],
                        }),
                        (0, a.BX)(r.View, {
                          className: " _Z _i _Ga _m _l",
                          style:
                            null != _ &&
                            _.salePrice &&
                            null != _ &&
                            null !== (t = _.couponInfo) &&
                            void 0 !== t &&
                            t.couponDesc
                              ? { marginTop: -6 }
                              : {},
                          children: [
                            !!_.address &&
                              (0, a.tZ)(r.View, {
                                className: " _Bj _Kc _E _Q _yc _Xm _Ym _j _Pw",
                                numberOfLines: 1,
                                style: i.Z.isCRN
                                  ? {
                                      maxWidth:
                                        null != _ &&
                                        _.salePrice &&
                                        null != _ &&
                                        null !== (n = _.couponInfo) &&
                                        void 0 !== n &&
                                        n.couponDesc
                                          ? 300
                                          : "100%",
                                    }
                                  : {},
                                children: _.address,
                              }),
                            !(null == _ || !_.salePrice) &&
                              !(
                                null == _ ||
                                null === (l = _.couponInfo) ||
                                void 0 === l ||
                                !l.couponDesc
                              ) &&
                              (0, a.BX)(r.View, {
                                className: " _i _Ga _pf _Xf",
                                children: [
                                  (0, a.tZ)(r.View, {
                                    children: (0, a.tZ)(r.Text, {
                                      className: " _bf _Sv",
                                      style: i.Z.isCRN
                                        ? {
                                            marginBottom:
                                              "ios" === i.Z.os ? 2 : 4,
                                          }
                                        : { marginBottom: 2 },
                                      children: "¥",
                                    }),
                                  }),
                                  (0, a.tZ)(r.View, {
                                    children: (0, a.tZ)(r.Text, {
                                      className: " _bf _Tv",
                                      style:
                                        i.Z.isCRN && "ios" === i.Z.os
                                          ? {}
                                          : {
                                              fontSize: "zx_regular",
                                              marginBottom: 2,
                                            },
                                      children: _.salePrice,
                                    }),
                                  }),
                                  (0, a.tZ)(r.View, {
                                    children: (0, a.tZ)(r.Text, {
                                      className: " _Ma _D",
                                      style: i.Z.isCRN
                                        ? {
                                            marginBottom:
                                              "ios" === i.Z.os ? 2 : 4,
                                          }
                                        : { marginBottom: 2 },
                                      children: "起",
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, a.BX)(r.View, {
                          className: " _i _Z _Ga _pf",
                          style: i.Z.isCRN ? { height: 26 } : {},
                          children: [
                            (0, a.BX)(r.View, {
                              className:
                                null != _ && _.salePrice
                                  ? " _oo _i _l _Gi"
                                  : " _oo _i _l _Bj",
                              children: [
                                !(null == _ || !_.advanceBookingDesc) &&
                                  (0, a.tZ)(r.View, {
                                    className:
                                      " _i _Ga _l _Rv _gb _Al _Va _C _Mb _x",
                                    style: i.Z.isCRN
                                      ? {}
                                      : { borderStyle: "solid" },
                                    children:
                                      null == _ ? void 0 : _.advanceBookingDesc,
                                  }),
                                (function () {
                                  var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : [];
                                  if (null == e || !e.length)
                                    return (0, a.tZ)(r.View, {});
                                  var t = e.filter(function (e) {
                                      return (
                                        e.key &&
                                        -1 === e.key.indexOf("可用") &&
                                        -1 === e.key.indexOf("可订")
                                      );
                                    }),
                                    n = [].concat(t[0] || {});
                                  return n.map(function (e, t) {
                                    return (0,
                                    a.tZ)(r.View, { className: " _i _Ga _l _Rv _gb _Al _Va _C _Mb _x", children: null == e ? void 0 : e.value }, t);
                                  });
                                })(null == _ ? void 0 : _.displayTagGroupList),
                              ],
                            }),
                            !(
                              null == _ ||
                              null === (s = _.couponInfo) ||
                              void 0 === s ||
                              !s.couponDesc
                            ) &&
                              (0, a.tZ)(r.View, {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  flexDirection: "row",
                                  marginBottom: 4,
                                },
                                children: (0, a.tZ)(r.View, {
                                  className:
                                    " _i _Ga _l _Qv _gb _Al _C _Mb _Ze",
                                  style: i.Z.isCRN
                                    ? { backgroundColor: "#fff2f2" }
                                    : {
                                        borderStyle: "solid",
                                        backgroundColor: "#fff2f2",
                                      },
                                  children:
                                    null == _ ||
                                    null === (d = _.couponInfo) ||
                                    void 0 === d
                                      ? void 0
                                      : d.couponDesc,
                                }),
                              }),
                            !(null == _ || !_.salePrice) &&
                              !(
                                null != _ &&
                                null !== (f = _.couponInfo) &&
                                void 0 !== f &&
                                f.couponDesc
                              ) &&
                              (0, a.BX)(r.View, {
                                className: " _i _Ga _pf _Xf",
                                children: [
                                  (0, a.tZ)(r.View, {
                                    style: { paddingTop: 6 },
                                    children: (0, a.tZ)(r.Text, {
                                      className: " _bf _Sv",
                                      style: i.Z.isCRN
                                        ? {
                                            marginBottom:
                                              "ios" === i.Z.os ? 2 : 4,
                                          }
                                        : { marginBottom: 2 },
                                      children: "¥",
                                    }),
                                  }),
                                  (0, a.tZ)(r.View, {
                                    children: (0, a.tZ)(r.Text, {
                                      className: " _bf _Tv",
                                      style:
                                        i.Z.isCRN && "ios" === i.Z.os
                                          ? {}
                                          : {
                                              fontSize: "zx_regular",
                                              marginBottom: 2,
                                            },
                                      children: _.salePrice,
                                    }),
                                  }),
                                  (0, a.tZ)(r.View, {
                                    style: { paddingTop: 6 },
                                    children: (0, a.tZ)(r.Text, {
                                      className: " _Ma _D",
                                      style: i.Z.isCRN
                                        ? {
                                            marginBottom:
                                              "ios" === i.Z.os ? 2 : 4,
                                          }
                                        : { marginBottom: 2 },
                                      children: "起",
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        !(
                          null == _ ||
                          null === (p = _.discountInfo) ||
                          void 0 === p ||
                          !p.length
                        ) &&
                          (0, a.tZ)(r.View, { className: " _Xk _Z _Zf _Yf" }),
                      ],
                    }),
                  ],
                }),
                (!(null == _ || !_.priceDiff) ||
                  (null == _ || null === (h = _.discountInfo) || void 0 === h
                    ? void 0
                    : h.length)) &&
                  (0, a.tZ)(r.View, {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 9,
                    },
                    children: (0, a.tZ)(r.View, {
                      style: { width: "100%" },
                      children:
                        null == _ ||
                        null === (g = _.discountInfo) ||
                        void 0 === g
                          ? void 0
                          : g.map(function (e, t) {
                              return (0,
                              a.BX)(r.View, { className: " _i _Ga _l _Ua", children: [(0, a.tZ)(r.View, { className: " _rp _i _Ga _l _Sj _Qf", children: !(null == _ || !_.priceDiff) && 0 === t && (0, a.BX)(r.View, { className: " _i _Xn _l", children: [(0, a.tZ)(r.View, { className: " _nc _yl _Cl _S _Eb _Rw", children: (0, a.tZ)(r.Text, { className: " _Ze _Cl _S", children: "比其他平台低¥".concat(_.priceDiff) }) }), (0, a.tZ)(r.Image, { src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_bjbq@3x.png", className: " _tf _nc" })] }) }), (0, a.BX)(r.View, { className: " _i _nl _l", children: [(0, a.tZ)(r.View, { className: " _xl _gb _Hi _ji _b _af _i _Ga _n _l _Va", children: "惠" }), !!e.ticketType && (0, a.tZ)(r.View, { className: " _sb _Na", children: e.ticketType }), (0, a.BX)(r.View, { className: " _oo _i _l _Sj", children: [!!e.discountDesc && (0, a.tZ)(r.View, { className: " _gb _yl _ji _Al _P _Bl _Qw _Va", children: e.discountDesc }), !!e.listPrice && (0, a.tZ)(r.View, { className: " _Kc _mk _zl", style: i.Z.isCRN ? { textDecorationLine: "line-through", textDecorationColor: "#999999" } : {}, children: "¥".concat(u(e.listPrice)) }), (0, a.tZ)(r.View, { className: " _Ze _pc _Wh", children: "¥".concat(u(e.price)) })] })] })] }, t);
                            }),
                    }),
                  }),
              ],
            }),
          })
        );
      };
    },
    51634: function (e, t, n) {
      "use strict";
      var r = n(52500),
        i = n(71515),
        o = n(6407),
        a = n(23577),
        c = n(48813);
      t.Z = (0, r.memo)(function (e) {
        var t = e.entryList,
          n = e.ubtTrace,
          r = e.pageId;
        return null != t && t.length
          ? (0, c.BX)(i.View, {
              className: " _Vb _Oa _kl _pw",
              children: [
                (0, c.BX)(i.View, {
                  className: " _i _Ga _l",
                  children: [
                    (0, c.tZ)(i.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_tjtj@3x.png",
                      className: " _Am _eg _qw",
                    }),
                    (0, c.BX)(i.View, {
                      className: " _ue _Ua _rw _vi _i _Ga _l _n",
                      children: [
                        (0, c.tZ)(i.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpsy_icon_fwbz@3x.png",
                          className: " _Ye _Ol _Va",
                        }),
                        (0, c.tZ)(i.Text, {
                          className: " _sh _rl",
                          children: "服务保障",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, c.tZ)(i.View, {
                  className: " _i _Ga _sw",
                  children: t.map(function (e, u) {
                    return null != e && e.bgImg
                      ? (0, c.tZ)(
                          i.Image,
                          {
                            src: e.bgImg,
                            className:
                              " _j _Qf _Vj _Oa _Jt _p " +
                              (u === t.length - 1 ? " _tw" : ""),
                            id: "AMCE",
                            onClick: function () {
                              a.Z.isCRN &&
                                n("SZAHome_PopularityList_List_click", {
                                  PageId: r,
                                  TypeSndAttr: null == e ? void 0 : e.name,
                                }),
                                (0, o.T4)(e);
                            },
                          },
                          u
                        )
                      : (0, c.tZ)(i.View, {});
                  }),
                }),
              ],
            })
          : (0, c.tZ)(i.View, {});
      });
    },
    12190: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = (n(52500), n(71515)),
        o = n(96616),
        a = n(90017),
        c = n(91629),
        u = n(90098),
        l = n(50208),
        s = n(23577),
        d = n(48813),
        f = u.Z.statusBarHeight || 44;
      t.Z = function (e) {
        var t = e.labelStatisticShowList,
          n = e.onFilterItem,
          u = e.canNowUse,
          p = e.onCloseFilterPop,
          h = e.filterBarProps,
          g = e.searchBarProps,
          v = e.onBack,
          m = e.showStaticSearchFilter,
          _ = h.optionListType,
          y = h.isShowFilterPop,
          b = h.sortParameter,
          Z = h.filterList,
          C = [];
        return (
          "all" === _
            ? (C = t)
            : "sort" === _
            ? (C = l.a)
            : "filter" === _ && (C = l.d),
          (0, d.BX)(i.Block, {
            children: [
              (0, d.BX)(i.View, {
                className: " _a _v _q _s _t _gl _Mb _yc",
                style: y
                  ? {
                      borderRadius: "0 0 12px 12px",
                      paddingTop: "".concat(f, "px"),
                    }
                  : { paddingTop: "".concat(f, "px") },
                children: [
                  (0, d.BX)(i.View, {
                    className: " _i _Ga _l _n _p",
                    style: { height: "44px" },
                    children: [
                      (0, d.tZ)(i.View, {
                        className: " _u _Wr _q _r _in _da _i _l",
                        id: "AMCF",
                        onClick: v,
                        children: (0, d.tZ)(i.Text, {
                          className: "iconfont2 ifont2-fanhui_linea_24",
                          style: { fontSize: "24px" },
                        }),
                      }),
                      (0, d.tZ)(i.Text, {
                        className: " _sb _Jv",
                        children: s.Z.isTieyou ? "铁友门票" : "智行门票",
                      }),
                    ],
                  }),
                  (0, d.tZ)(i.View, {
                    className: " _dw _Z _i _Ga _l _Mb",
                    å: !0,
                    children: (0, d.tZ)(
                      o.Z,
                      (0, r.Z)(
                        (0, r.Z)({}, g),
                        {},
                        { backgroundColor: "#f5f5f5" }
                      )
                    ),
                  }),
                  m &&
                    (0, d.tZ)(i.View, {
                      className: " _bw",
                      children: (0, d.tZ)(a.Z, (0, r.Z)({}, h)),
                    }),
                  y &&
                    (0, d.tZ)(c.Z, {
                      optionList: C,
                      onFilterItem: function (e) {
                        n(e, _);
                      },
                      sortParameter: b,
                      filterList: Z,
                      optionListType: _,
                      canNowUse: u,
                    }),
                ],
              }),
              y &&
                (0, d.tZ)(i.View, {
                  className: " _v _q _s _t _r _fm _cw _id",
                  id: "AMCG",
                  onClick: function () {
                    return p(!1);
                  },
                }),
            ],
          })
        );
      };
    },
    35537: function (e, t, n) {
      "use strict";
      n.d(t, {
        Fk: function () {
          return A;
        },
        HE: function () {
          return d;
        },
        HQ: function () {
          return h;
        },
        Iq: function () {
          return C;
        },
        Jr: function () {
          return a;
        },
        K1: function () {
          return T;
        },
        Ki: function () {
          return _;
        },
        Kz: function () {
          return R;
        },
        MF: function () {
          return g;
        },
        MM: function () {
          return y;
        },
        OL: function () {
          return F;
        },
        Oq: function () {
          return l;
        },
        QA: function () {
          return S;
        },
        Ur: function () {
          return p;
        },
        VE: function () {
          return D;
        },
        Z$: function () {
          return w;
        },
        _d: function () {
          return N;
        },
        bC: function () {
          return f;
        },
        cr: function () {
          return c;
        },
        dc: function () {
          return m;
        },
        dz: function () {
          return u;
        },
        gJ: function () {
          return Z;
        },
        kR: function () {
          return I;
        },
        mn: function () {
          return v;
        },
        mq: function () {
          return o;
        },
        p6: function () {
          return b;
        },
        pY: function () {
          return k;
        },
        r5: function () {
          return x;
        },
        sl: function () {
          return s;
        },
        u3: function () {
          return B;
        },
        xl: function () {
          return P;
        },
      });
      var r = n(1112),
        i = n(23577),
        o = (0, r.Z)({ serviceCode: "17477", path: "KeywordSearchRecommend" }),
        a = (0, r.Z)({ serviceCode: "14784", path: "GetTyCityByLBS" }),
        c = (0, r.Z)({ serviceCode: "17477", path: "scenicSpotSearchLog" }),
        u = (0, r.Z)({
          serviceCode: "17476",
          path: "getOrderDetail",
          correctVersion: "710007",
        }),
        l = (0, r.Z)({ serviceCode: "17476", path: "returnOrderCheck" }),
        s = (0, r.Z)({ serviceCode: "17476", path: "cancelOrder" }),
        d = (0, r.Z)({
          serviceCode: "17477",
          path: "searchScenicSpotSaleUnitDetail",
          correctVersion: "710022",
        }),
        f = (0, r.Z)({ serviceCode: "17477", path: "searchScenicSpotImage" }),
        p = (0, r.Z)({
          serviceCode: "17477",
          path: "searchScenicSpotCouponList",
        }),
        h = (0, r.Z)({ serviceCode: "17477", path: "getScenicSpotAskList" }),
        g = (0, r.Z)({ serviceCode: "17477", path: "getScenicSpotPoiList" }),
        v = (0, r.Z)({ serviceCode: "17477", path: "searchScenicSpotComment" }),
        m =
          ((0, r.Z)({
            serviceCode: "17476",
            clientInfo: i.Z.clientInfo,
            partner: i.Z.partner,
            channel: i.Z.train_channel,
            path: "getPaymentInfo",
            correctVersion: "19",
          }),
          (0, r.Z)({ serviceCode: "17477", path: "searchAutoComplete" })),
        _ = (0, r.Z)({ serviceCode: "17477", path: "searchScenicSpotList" }),
        y = (0, r.Z)({
          serviceCode: "17477",
          path: "getGlobalRankingSortList",
        }),
        b = (0, r.Z)({
          serviceCode: "19477",
          path: "getScenicSpotCtripRecommend",
        }),
        Z = (0, r.Z)({ serviceCode: "19477", path: "getScenicSpotMktInfo" }),
        C = (0, r.Z)({ serviceCode: "17477", path: "getScenicSpotCitys" }),
        w = (0, r.Z)({ serviceCode: "17477", path: "scenicSpotCitySearch" }),
        N = (0, r.Z)({ serviceCode: "17477", path: "receiveScenicSpotCoupon" }),
        T = (0, r.Z)({
          serviceCode: "17477",
          path: "reletedScenicSpotRecommend",
        }),
        x = (0, r.Z)({
          serviceCode: "17679",
          path: "getMergeEntranceForShareWithdraw",
        }),
        S = (0, r.Z)({
          serviceCode: "17679",
          path: "cancelHotelLotteryForTicketOrder",
        }),
        I = (0, r.Z)({
          serviceCode: "17679",
          path: "getTicketIndexBannerInfo",
        }),
        k = (0, r.Z)({
          serviceCode: "17679",
          path: "getHotelLottryInfoForTicket",
        }),
        R = (0, r.Z)({
          serviceCode: "17679",
          path: "sighUpHotelLotteryActivityForTicket",
        }),
        D = (0, r.Z)({ serviceCode: "19477", path: "getSpHomepagePopupInfo" }),
        F = (0, r.Z)({
          serviceCode: "17679",
          path: "getTicketOrderDetailEntryInfo",
        }),
        P = (0, r.Z)({
          serviceCode: "17679",
          path: "getOrderStatusZtrip2023FreeDrawsTickets",
        }),
        A = (0, r.Z)({ serviceCode: "17476", path: "getWalletRechargeDetail" }),
        B = (0, r.Z)({ serviceCode: "17476", path: "receiveRecharge" });
    },
    85372: function (e, t, n) {
      "use strict";
      var r = {
        black: "#000000",
        white: "#FFFFFF",
        border_e3: "#E3E3E3",
        border_e5: "#E5E5E5",
        grey_cc: "#cccccc",
        grey_f4: "#f4f4f4",
        grey_f5: "#f5f5f5",
        grey_f8: "#f8f8f8",
        grey_22: "#222222",
        grey_33: "#333333",
        grey_88: "#888888",
        grey_66: "#666666",
        grey_99: "#999999",
        grey_f7: "#f7f7f7",
        grey_e6: "#e6e6e6",
        grey_e5: "#e5e5e5",
        grey_b0: "#b0b0b0",
        grey_c7: "#c7c7c7",
        grey_dd: "#dddddd",
        main_bg: "#f5f5f5",
        zxMainColor: "#198CFF",
        tyMainColor: "#fc6e51",
        night_blue: "#3c4365",
        orange: "#ff9f1f",
        priceColor: "#FF5959",
        green: "#03B86F",
        darkGreen: "#29AD46",
        disabledColor: "#BCBCBC",
        gold: "#D98C21",
        warning: "#FFF8ED",
        warningText: "#F76E21",
        shallow_blue: "#F5F8FD",
        zxBlueTyGreyCC: "#198CFF",
        zxNewBlueTyOldBlue: "#198CFF",
        zxNewOrangeTyOldOrange: "#FF5959",
        orange_tans_50: "#FF595980",
        zxNewOrangeTyOldOrangeBorderColor: "#FFBDBD",
        main_color_trans_50: "#198CFF80",
        main_color_trans_80: "#198CFF33",
        dialog_bg: "rgba(0, 0, 0, 0.75)",
        borderColor: "#FFBCBC80",
        priceColorSemi: "#FF595980",
        mainColorShallow: "#F2F9FF",
        yellow_banner_bg: "#FFF8ED",
        borderShallowColor: "#85C2FF",
        btn_bg_light_color: "#E8F3FF",
      };
      n(23577).Z.isTieyou
        ? Object.assign(r, {
            mainColor: "#FC6E51",
            tyNightBlueZxBlue: "#3c4365",
            headStartColor: "#3c4365",
            headEndColor: "#3c4365",
            mainLight: "#FFE7DF",
            filterBg: "#FFF4F1",
            flightBg: "#FEF0ED",
            priceColor: "#FC6E51",
            zxBlueTyGreen: "#03B86F",
            zxLightBlueTyOrange: "#FEF0ED",
            mainColorLight: "#FFAA99",
            zxBlueTyGreyCC: "#CCCCCC",
            zxNewBlueTyOldBlue: "#5495E6",
            zxNewOrangeTyOldOrange: "#FC6E51",
            zxNewOrangeTyOldOrangeBorderColor: "#FC6E51",
            linearStartOrange: "#FF925A",
            linearEndOrange: "#FC6E51",
            headerLinearStartColor: "#3C4365",
            headerLinearEndColor: "#3C4365",
            tagBg: "#EEEFF6",
            tagBgV2: "#FFEDE9",
            main_color_trans_50: "#FC6E5180",
            orange_trans_50: "#FC6E5180",
            mainColorShallow: "#FFEDE9",
            main_color_trans_80: "#FC6E5133",
            orangeColor: "#FC6E51",
            priceColorSemi: "#FF595980",
            borderShallowColor: "#FDB2A2",
            btn_bg_light_color: "#FFF0EC",
          })
        : Object.assign(r, {
            mainColor: "#198CFF",
            tyNightBlueZxBlue: "#198CFF",
            mainLight: "#CCE0F9",
            filterBg: "#EDF5FB",
            flightBg: "#E9F3FF",
            priceColor: "#FF5959",
            zxBlueTyGreen: "#198CFF",
            zxLightBlueTyOrange: "#F2F8FF",
            mainColorLight: "#94BDEF",
            zxBlueTyGreyCC: "#198CFF",
            zxNewBlueTyOldBlue: "#198CFF",
            zxNewOrangeTyOldOrange: "#FF5959",
            linearStartOrange: "#FE6F40",
            linearEndOrange: "#FF4D4D",
            headerLinearStartColor: "#2693FF",
            headerLinearEndColor: "#0066FF",
            tagBg: "#EAF5FF",
            tagBgV2: "#EAF5FF",
            orange_trans_50: "#FF595980",
            mainColorShallow: "#F2F9FF",
            main_color_trans_80: "#198CFF33",
            orangeColor: "#F76E21",
            priceColorSemi: "#FF595980",
            borderShallowColor: "#85C2FF",
            btn_bg_light_color: "#E8F3FF",
            headStartColor: "#B3D2FF",
            headEndColor: "#F5F5F5",
          }),
        (t.Z = r);
    },
    45090: function (e, t, n) {
      "use strict";
      n.d(t, {
        F7: function () {
          return v;
        },
        FE: function () {
          return d;
        },
        FN: function () {
          return f;
        },
        Jf: function () {
          return p;
        },
        Ro: function () {
          return m;
        },
        iJ: function () {
          return g;
        },
        yh: function () {
          return h;
        },
      });
      var r = n(92954),
        i = n.n(r),
        o = i().getSystemInfoSync(),
        a = o.screenWidth,
        c = o.screenHeight,
        u = o.windowWidth,
        l = o.windowHeight,
        s = o.pixelRatio,
        d = function (e) {
          i().getSetting({
            success: function () {
              i().authorize({
                scope: "scope.writePhotosAlbum",
                success: function () {
                  console.log("授权成功");
                  var t = e;
                  console.log(t),
                    i().downloadFile({
                      url: t,
                      success: function (e) {
                        i().saveImageToPhotosAlbum({
                          filePath: e.tempFilePath,
                          success: function () {
                            i().showToast({
                              title: "成功保存到相册",
                              icon: "success",
                            });
                          },
                        });
                      },
                    });
                },
              });
            },
          });
        },
        f = {
          show: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "none";
            i().showToast({ title: e, icon: t });
          },
        },
        p = function (e) {
          return e
            ? e
                .replace(/\&amp\;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, ",")
                .replace(/&#x20;/g, "")
                .replace(/&#x0A;/g, "\n")
                .replace(/&#x2F;/g, "/")
                .replace(/&#165;/g, "¥")
                .replace(/&#160;/g, " ")
                .replace(/(amp;)+/g, "")
                .replace(/&nbsp;/g, " ")
                .replace(/<\/?.+?>/g, "")
                .replace(/ /g, "")
                .replace(/&ldquo;/g, "“")
                .replace(/&rdquo;|&bdquo/g, "”")
                .replace(/&rsquo;|&lsquo;/g, "'")
                .replace(/&sbquo;/g, "，")
                .replace(/&mdash;/g, "-")
                .replace(/&ndash;/g, "–")
                .replace(/&dagger;/g, "†")
                .replace(/&Dagge;/g, "‡")
                .replace(/&bull;/g, "•")
                .replace(/&hellip;/g, "…")
                .replace(/&permil;/g, "‰")
                .replace(/&prime;/g, "′")
                .replace(/&Prime;/g, "″")
                .replace(/&lsaquo;/g, "‹")
                .replace(/&lsaquo;/g, "‹")
                .replace(/&rsaquo;/g, "›")
                .replace(/&oline;/g, "‾")
                .replace(/&frasl;/g, "⁄")
                .replace(/&oline;/g, "‾")
            : "";
        },
        h = function (e) {
          var t = e;
          if (!t || "string" != typeof t) return t;
          for (var n = /<([a-z]+?)(?:\s+?[^>]*?)?>\s*?<\/\1>/gi; n.test(t); )
            t = t.replace(n, "");
          return (t = (t = (t = (t = t.replace(/<br>/g, "")).replace(
            /<\/br>/g,
            ""
          )).replace(/<br\/>/g, "")).replace(/<p><\/p>/g, ""));
        },
        g = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = e
              .replace(/\&amp\;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&quot;/g, '"')
              .replace(/&#39;/g, ",");
          return (t = (t = (t = (t = (t = (t = t.replace(
            /&#x20;/g,
            ""
          )).replace(/&#x0A;/g, "\n")).replace(/&#x2F;/g, "/")).replace(
            /&#165;/g,
            "¥"
          )).replace(/&#160;/g, " ")).replace(/(amp;)+/g, ""));
        },
        v = function (e, t, n) {
          var r = g(t);
          if (!r) return !1;
          var i = 0,
            o = 0,
            a = !1,
            c = r.split("\n\n");
          return (
            2 * (o = c.length) - 1 > n
              ? (a = !0)
              : c.forEach(function (t) {
                  if ((i > 0 && (o++, (i = 0)), o > n)) a = !0;
                  else
                    for (var r = 0; r < t.length; r++)
                      if (
                        (t.charCodeAt(r) > 127 || 94 === t.charCodeAt(r)
                          ? (i += 2)
                          : i++,
                        i >= e && (o++, (i -= e)),
                        o > n)
                      ) {
                        a = !0;
                        break;
                      }
                }),
            a
          );
        },
        m = {
          screenWidth: a,
          screenHeight: c,
          windowWidth: u,
          windowHeight: l,
          pixelRatio: s,
        };
    },
    87892: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(48813);
      t.Z = function (e) {
        return (0, r.tZ)(r.HY, { children: e.children });
      };
    },
    94198: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(49528),
        o = n(23577),
        a = n(48813);
      t.Z = function (e) {
        var t = o.Z.isTieyou
          ? "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/ty@3x.png"
          : "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/slogan@3x.png";
        return (0, a.tZ)(r.View, {
          className: " _rs _Z _i _Ga _n",
          style: null == e ? void 0 : e.style,
          children: (0, a.tZ)(r.Image, {
            src: t,
            className: " _Hj _Gj",
            style: o.Z.isTieyou ? {} : (0, i.Ad)(224, 55, 76),
          }),
        });
      };
    },
    71458: function (e, t, n) {
      "use strict";
      var r = n(52500),
        i = n(82954),
        o = n(23577),
        a = n(48813);
      t.Z = r.default.memo(function (e) {
        var t = e.isShow,
          n = e.cancel,
          r = e.confirm,
          c = e.ubtTrace,
          u = e.pageId;
        if (!t) return null;
        var l = [
          {
            text: "暂不删除",
            onClick: function () {
              null == n || n(),
                c("GrabAlternateDetail_DeletePopup_NoDelete_click", {
                  channel: o.Z.isCRN ? "App" : "Applets",
                  PageId: u,
                });
            },
            color: "#666",
            bgColor: "#F7F7F7",
          },
          {
            text: "确认删除",
            onClick: function () {
              null == r || r(),
                c("GrabAlternateDetail_DeletePopup_ConfirmDel_click", {
                  channel: o.Z.isCRN ? "App" : "Applets",
                  PageId: u,
                });
            },
          },
        ];
        return (0,
        a.tZ)(i.h, { isShow: t, cancel: n, title: "确认要删除订单吗？", subTitle: '<div>仅删除您在智行的预测记录, <span style="color: #198CFF">不会取消12306候补订单</span></div>', buttons: l });
      });
    },
    16617: function (e, t, n) {
      "use strict";
      n(52500);
      var r = n(71515),
        i = n(43884),
        o = n(48813),
        a = [
          "https://images3.c-ctrip.com/ztrip/train_snow/2023_03/tou1@3x.png",
          "https://images3.c-ctrip.com/ztrip/train_snow/2023_03/tou3@3x.png",
          "https://images3.c-ctrip.com/ztrip/train_snow/2023_03/tou2@3x.png",
        ];
      t.Z = function (e) {
        var t = a[e.content.length % a.length];
        return (0, o.BX)(r.View, {
          className: " _p _xs _i _Ga _Mb _qa _ys",
          style: e.style,
          children: [
            "v2" === e.version &&
              (0, o.tZ)(i.Z, {
                useAngle: !0,
                angle: 270,
                colors: ["#C8E7FF", "#A0D0FF"],
                locations: [0, 1],
                className: " _Lj _qa _u _q _s _t _r",
              }),
            (0, o.tZ)(r.Image, { className: " _p _Tj _Rj", src: t }),
            (0, o.tZ)(r.View, {
              className: " _p _Zg _sb _af",
              style: "v2" === e.version ? { color: "#08226A" } : {},
              children: e.content || "",
            }),
          ],
        });
      };
    },
    79634: function (e, t, n) {
      "use strict";
      var r = n(298),
        i = n(90129),
        o = n(52500),
        a = n(71515),
        c = n(32970),
        u = n(48813);
      t.Z = o.default.memo(function (e) {
        var t = e.data,
          n = e.fromPage,
          l = e.pageId,
          s = e.ubtTrace,
          d = void 0 === s ? function () {} : s,
          f = e.outerStyle,
          p = void 0 === f ? {} : f,
          h = e.onClose,
          g = void 0 === h ? function () {} : h,
          v = (0, o.useMemo)(function () {
            return ["12元现金", "预测奖励"];
          }, []),
          m = (0, o.useState)(0),
          _ = (0, i.Z)(m, 2),
          y = _[0],
          b = _[1],
          Z = (0, o.useRef)(0);
        return (
          (0, o.useEffect)(function () {
            "candidateDiagnosis" === n
              ? d("GrabAlternateLoad_HoubuZdRukou_exposure", {
                  channel: "Applets",
                  PageId: l,
                })
              : "candidateOrderDetail" === n &&
                d("GrabAlternateDetail_HoubuZdRukou_exposure", {
                  channel: "Applets",
                  PageId: l,
                });
          }, []),
          (0, o.useEffect)(function () {
            var e = setInterval(function () {
              (Z.current = Z.current + 1), b(Z.current % v.length);
            }, 5e3);
            return function () {
              clearInterval(e);
            };
          }, []),
          t
            ? (0, u.BX)(a.View, {
                className: " _fm _u _Dd _As _Fq _Id",
                id: "AMDB",
                onClick: function () {
                  "candidateDiagnosis" === n
                    ? d("GrabAlternateLoad_HoubuZdRukou_click", {
                        channel: "Applets",
                        PageId: l,
                      })
                    : "candidateOrderDetail" === n &&
                      d("GrabAlternateDetail_HoubuZdRukou_click", {
                        channel: "Applets",
                        PageId: l,
                      });
                  var e = JSON.parse(t || "{}"),
                    r = (null == e ? void 0 : e.activityUrl) || "";
                  (0, c.jn)(r);
                },
                style: (0, r.Z)({}, p),
                children: [
                  (0, u.tZ)(a.Image, {
                    className: " _Fq _Id",
                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/xft@2x.png",
                  }),
                  v.map(function (e, t) {
                    return (0,
                    u.tZ)(a.View, { className: " _u _Bs _Cs _gi _qb", style: { opacity: t === y ? 1 : 0, transition: "opacity .4s ease" }, children: e }, t);
                  }),
                  (0, u.tZ)(a.Image, {
                    className: " _u _Ds _Es _og _Ye",
                    id: "AMDC",
                    onClick: function (e) {
                      e.stopPropagation(), g();
                    },
                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/xgb@3x.png",
                  }),
                ],
              })
            : (0, u.tZ)(a.View, {})
        );
      });
    },
    42479: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return c;
        },
        z: function () {
          return a;
        },
      }),
        n(52500);
      var r = n(71515),
        i = n(3205),
        o = n(48813);
      function a(e) {
        var t =
            "https://m.suanya.com/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES",
          n = "",
          a = "";
        return (
          "学生票" == e || "学生" == e
            ? ((n = "学生票预订须知"), (a = t + "&type=student"))
            : ("儿童票" != e && "儿童" != e) ||
              ((n = "儿童票说明"), (a = t + "&type=child")),
          "" === n
            ? (0, o.tZ)(o.HY, {})
            : (0, o.tZ)(r.View, {
                style: {
                  marginLeft: 12,
                  color: "#198CFF",
                  fontSize: 12,
                  width: 88,
                  height: 20,
                  display: "flex",
                },
                id: "AMDI",
                onClick: function () {
                  i.Z.twebview({ data: { url: a, bridgeIns: function () {} } });
                },
                children: n,
              })
        );
      }
      function c() {
        var e = "既有规则";
        return (0, o.tZ)(r.View, {
          style: {
            color: "#198CFF",
            fontSize: 12,
            height: 16,
            display: "flex",
          },
          id: "AMDJ",
          onClick: function () {
            i.Z.twebview({
              data: {
                url: "https://m.suanya.com/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES",
                bridgeIns: function () {},
              },
            });
          },
          children: e,
        });
      }
    },
    70574: function (e, t, n) {
      "use strict";
      var r, i, o;
      n.d(t, {
        EQ: function () {
          return o;
        },
        Iv: function () {
          return i;
        },
        sx: function () {
          return r;
        },
      }),
        (function (e) {
          (e[(e.CANDIDATE_FAIL = -1)] = "CANDIDATE_FAIL"),
            (e[(e.CANDIDATE_UNKNOWN = 0)] = "CANDIDATE_UNKNOWN"),
            (e[(e.CANDIDATE_WAITING_PAY = 1)] = "CANDIDATE_WAITING_PAY"),
            (e[(e.CANDIDATE_WAITING_ORDER = 2)] = "CANDIDATE_WAITING_ORDER"),
            (e[(e.CANDIDATE_SUBMIT_SUCCESS = 3)] = "CANDIDATE_SUBMIT_SUCCESS"),
            (e[(e.CANDIDATE_CANCEL = 4)] = "CANDIDATE_CANCEL"),
            (e[(e.CANDIDATE_TICKETING = 5)] = "CANDIDATE_TICKETING"),
            (e[(e.CANDIDATE_INTERCEPTED = 6)] = "CANDIDATE_INTERCEPTED"),
            (e[(e.CANDIDATE_CANCEL_PAID = 7)] = "CANDIDATE_CANCEL_PAID");
        })(r || (r = {})),
        (function (e) {
          (e.PriceDetailDrawer = "PriceDetailDrawer"),
            (e.UpgradeRetainDrawer = "UpgradeRetainDrawer"),
            (e.OCRLoginT6Drawer = "OCRLoginT6Drawer");
        })(i || (i = {})),
        (function (e) {
          (e[(e.BuyAndGrab = 1)] = "BuyAndGrab"),
            (e[(e.CombineSeat = 2)] = "CombineSeat"),
            (e[(e.CrossStation = 3)] = "CrossStation"),
            (e[(e.GrabAndBuy = 4)] = "GrabAndBuy"),
            (e[(e.CombineCrossStation = 5)] = "CombineCrossStation");
        })(o || (o = {}));
    },
    60450: function (e, t, n) {
      "use strict";
      n.d(t, {
        $M: function () {
          return y;
        },
        Fq: function () {
          return v;
        },
        PF: function () {
          return g;
        },
        s6: function () {
          return m;
        },
        uX: function () {
          return _;
        },
        wJ: function () {
          return b;
        },
      });
      var r = n(79301),
        i = n(95308),
        o = (n(8271), n(92954)),
        a = n.n(o),
        c = n(61885),
        u = n(82750),
        l = n(82955),
        s = n(62901),
        d = n(70574),
        f = n(58374),
        p = n(32970),
        h = 1;
      function g(e) {
        return (0, f.KT)({ orderNumber: e.orderNumber }).then(function (t) {
          return (
            console.log(JSON.stringify(t)),
            e.setState({ hasGetData: !0 }),
            1 === t.resultCode
              ? (e.setState({ orderInfo: t }),
                2 === (null == t ? void 0 : t.statusCode) && h <= 15
                  ? (h++,
                    new Promise(function (t) {
                      e.timer = setTimeout(function () {
                        clearTimeout(e.timer), t(g(e));
                      }, 4e3);
                    }))
                  : Promise.resolve(t))
              : Promise.resolve(null)
          );
        });
      }
      var v = (function () {
        var e = (0, i.Z)(
          (0, r.Z)().mark(function e(t) {
            var n;
            return (0, r.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        (0, f.mB)({ recognizeId: t.recognizeId })
                      );
                    case 3:
                      if (
                        ((n = e.sent),
                        t.setState({ hasGetData: !0 }),
                        1 !== n.resultCode || !n.successRateInfo)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        t.setState({ orderInfo: n }), e.abrupt("return", n)
                      );
                    case 10:
                      return e.abrupt("return", null);
                    case 11:
                      e.next = 16;
                      break;
                    case 13:
                      (e.prev = 13), (e.t0 = e.catch(0)), console.error(e.t0);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 13]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      function m(e) {
        var t = a().getStorageSync(s.Hj);
        (t && !l.Z.isExceed24Hours(t)) ||
          e.setState({ isShowShareRewardActivity: !0 });
      }
      function _(e) {
        if (e) {
          var t = "",
            n = e.length;
          return (
            e.forEach(function (e, r) {
              t += r !== n - 1 ? e + "\n" : e;
            }),
            t
          );
        }
        return "";
      }
      var y = (function () {
          var e = (0, i.Z)(
            (0, r.Z)().mark(function e(t) {
              var n, i, o, a, c;
              return (0, r.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((n = !!t.recognizeId), (i = t.orderNumber), !n)) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 5), (0, u.q0)();
                    case 5:
                      (o = e.sent),
                        (a = o.userName),
                        (c = o.password),
                        a && c
                          ? t.navigateTo({
                              url: "/pages/taroCRN/train/pages/candidateDiagnosis/index",
                            })
                          : t.showPopupType(d.Iv.OCRLoginT6Drawer),
                        (e.next = 12);
                      break;
                    case 11:
                      (0, p.Vu)(i);
                    case 12:
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
        b = (function () {
          var e = (0, i.Z)(
            (0, r.Z)().mark(function e(t) {
              return (0, r.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          (0, c.ZO)(
                            {
                              subTitle: "登录后可立即查看候补预测结果",
                              showFastRegister: !1,
                              extraTip:
                                '<font color="#FF7733">请放心登录：</font>智行仅查看订单信息预测结果',
                              title: "登录12306账号仅导入候补订单",
                              tags: [
                                {
                                  icon: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/qy@3x.png",
                                  desc: "专业预测",
                                },
                                {
                                  icon: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/qy@3x.png",
                                  desc: "快速准确",
                                },
                                {
                                  icon: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/qy@3x.png",
                                  desc: "隐私保障",
                                },
                              ],
                            },
                            "CandidateScene"
                          )
                        );
                      case 3:
                        t.navigateTo({
                          url: "/pages/taroCRN/train/pages/candidateDiagnosis/index",
                        }),
                          (e.next = 9);
                        break;
                      case 6:
                        (e.prev = 6), (e.t0 = e.catch(0)), console.error(e.t0);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 6]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    16940: function (e, t, n) {
      "use strict";
      n.d(t, {
        FB: function () {
          return C;
        },
        jn: function () {
          return k;
        },
        js: function () {
          return I;
        },
        ok: function () {
          return y;
        },
        yX: function () {
          return R;
        },
      });
      var r = n(22276),
        i = n(79301),
        o = n(95308),
        a = n(92954),
        c = n.n(a),
        u = n(94190),
        l = n(79792),
        s = n(3205),
        d = n(96158),
        f = n(18783),
        p = n(79910),
        h = n(32970),
        g = n(60450),
        v = n(58374),
        m = n(70574),
        _ = n(62901);
      function y(e) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        t && c().showLoading({ title: "正在取消订单", mask: !0 });
        var r = e.orderNumber,
          i = e.state.orderInfo,
          o = null == i ? void 0 : i.candidateNumber;
        (0, v.gN)({ orderNumber: r, candidateNo: o, action: n }).then(function (
          n
        ) {
          if ([1, 2, 3, 4].includes(n.resultCode))
            if (
              (clearInterval(e.candidateCancelInterval), 1 === n.resultCode)
            ) {
              var r,
                i,
                o =
                  (0, g.uX)(
                    null == n || null === (r = n.failToast) || void 0 === r
                      ? void 0
                      : r.contents
                  ) || "当前铁路系统异常，请重试",
                a =
                  (null == n || null === (i = n.failToast) || void 0 === i
                    ? void 0
                    : i.title) || "系统异常，取消失败";
              b(
                e,
                6 === (null == n ? void 0 : n.cancelFailCode)
                  ? { title: a, msg: o }
                  : null
              );
            } else if (2 === n.resultCode) {
              var u, l;
              c().hideLoading();
              var s =
                  (0, g.uX)(
                    null == n || null === (u = n.failToast) || void 0 === u
                      ? void 0
                      : u.contents
                  ) || "当前铁路系统异常，请重试",
                d =
                  (null == n || null === (l = n.failToast) || void 0 === l
                    ? void 0
                    : l.title) || "系统异常，取消失败",
                f = null == n ? void 0 : n.cancelFailCode;
              c().showModal({
                title: d,
                content: s,
                showCancel: !1,
                confirmText: "我知道了",
                confirmColor: "#0080FF",
                success: function (t) {
                  null != t &&
                    t.confirm &&
                    (1 === f
                      ? w()
                      : 2 === f ||
                        (3 === f
                          ? (0, g.PF)(e)
                          : 4 === f
                          ? N()
                          : 5 === f && x()));
                },
              });
            } else
              3 === n.resultCode &&
                (t && (e.candidateCancelStartTime = new Date().getTime()),
                (new Date().getTime() - e.candidateCancelStartTime) / 1e3 +
                  n.pollingInterval <
                  n.totalPollingTime &&
                  (e.candidateCancelInterval = setInterval(function () {
                    y(e, !1, "query");
                  }, 1e3 * n.pollingInterval)));
          else
            c().showToast({
              title: n.resultMessage || "网络开小差，请稍后再试~",
              icon: "none",
              duration: 2e3,
            });
        });
      }
      function b(e, t) {
        var n = { orderNumber: e.orderNumber };
        (0, v.Li)(n)
          .then(function (n) {
            if ((c().hideLoading(), 1 === (null == n ? void 0 : n.resultCode)))
              c().showModal({
                title: (null == t ? void 0 : t.title) || "提示",
                content: (null == t ? void 0 : t.msg) || "候补已取消",
                showCancel: !1,
                confirmText: "我知道了",
                confirmColor: "#0080FF",
                success: function () {
                  (0, g.PF)(e);
                },
              });
            else {
              var r = "网络请求失败，请重试";
              null != n &&
                n.resultMessage &&
                (r = null == n ? void 0 : n.resultMessage),
                c().showToast({ title: r, icon: "none", duration: 2e3 });
            }
          })
          .catch(function () {
            c().hideLoading(),
              c().showToast({
                title: "网络开小差了，请10分钟后再试吧",
                icon: "none",
                duration: 2e3,
              });
          });
      }
      var Z = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          c().hideLoading(),
            c().showToast({
              title: e || "抱歉，删除失败，请稍后再试",
              icon: "none",
              duration: 2e3,
            });
        },
        C = (function () {
          var e = (0, o.Z)(
            (0, i.Z)().mark(function e(t, n, r) {
              var o,
                a,
                u,
                l,
                s = arguments;
              return (0, i.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((o = s.length > 3 && void 0 !== s[3] ? s[3] : 0),
                          (e.prev = 1),
                          t)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return Z(), e.abrupt("return");
                      case 5:
                        return (
                          (a = 1 === o ? v.U6 : v.GD),
                          (u =
                            1 === o
                              ? { recognizeId: t }
                              : { orderNumber: t, scene: "alternateSync" }),
                          c().showLoading({ title: "正在删除订单", mask: !0 }),
                          (e.next = 10),
                          a(u)
                        );
                      case 10:
                        if (
                          1 === (null == (l = e.sent) ? void 0 : l.resultCode)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          Z(null == l ? void 0 : l.resultMessage),
                          null == r ||
                            r({
                              sence: "orderDelete-delete-failed",
                              data: JSON.stringify({
                                orderNumber: t,
                                result: l,
                              }),
                            }),
                          e.abrupt("return")
                        );
                      case 15:
                        Z("删除成功"), null == n || n(), (e.next = 23);
                        break;
                      case 19:
                        (e.prev = 19),
                          (e.t0 = e.catch(1)),
                          Z(),
                          null == r ||
                            r({
                              sence: "orderDelete-delete-failed-error",
                              data: JSON.stringify({
                                orderNumber: t,
                                error: e.t0,
                              }),
                            });
                      case 23:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 19]]
              );
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })();
      function w() {
        var e = this,
          t = (u.WG.get() || {}).bind12306,
          n = t.name || "",
          r = t.pwd || "",
          i = n && r,
          o = "https://"
            .concat(
              l.default.h5domain,
              "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
            )
            .concat(l.default.partner, "#/login?userName=")
            .concat(n, "&loginPW=")
            .concat(r, "&mobile=")
            .concat(f.ZP.userName || "", "&isMiniAppLogin12306=")
            .concat(i, "&fromPage=detention");
        s.Z.twebview({
          data: {
            url: o,
            bridgeIns: function (t) {
              if (
                (console.log("detention webviewCB e = ", t),
                Array.isArray(t.detail.data))
              ) {
                var n = t.detail.data;
                d.Tq.call(e, n), d.CZ.call(e);
              }
            },
          },
        });
      }
      function N() {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = (0, o.Z)(
          (0, i.Z)().mark(function e() {
            var t,
              n,
              r,
              o,
              a = this;
            return (0, i.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (t = u.WG.get() || {}),
                      (n = t.bind12306),
                      (r = n ? n.name : ""),
                      (o = "/pages/12306/face/face?userName="
                        .concat(r, "&fromType=")
                        .concat(4, "&businessType=1")),
                      c().navigateTo({
                        url: o,
                        success: function (e) {
                          var t = e.certificationResultCode,
                            n = e.retMessage;
                          1 === t
                            ? a.faceSwipingSuccess()
                            : 2 === t &&
                              setTimeout(function () {
                                c().showModal({
                                  title: "温馨提示",
                                  content: n || "核验失败",
                                  confirmText: "知道了",
                                  showCancel: !1,
                                  confirmColor: "#0080FF",
                                  success: function () {},
                                });
                              }, 500);
                        },
                      });
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function x() {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = (0, o.Z)(
          (0, i.Z)().mark(function e() {
            var t,
              n,
              r,
              o,
              a,
              c,
              d,
              f,
              p = this;
            return (0, i.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (t = u.WG.get() || {}),
                        (n = null == t ? void 0 : t.bind12306),
                        (r = n ? n.name : ""),
                        (o = (null == n ? void 0 : n.mobilePhone12306) || ""),
                        (a = r),
                        (c = o),
                        (d = function (e) {
                          console.log("orderdetail webviewCB e = ", e),
                            Array.isArray(e.detail.data) &&
                              p.faceSwipingSuccess();
                        }),
                        (f = "https://"
                          .concat(
                            l.default.h5domain,
                            "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                          )
                          .concat(l.default.partner, "#/verify?partner=")
                          .concat(
                            l.default.partner,
                            "&fromPage=orderdetail&userName="
                          )
                          .concat(a, "&mobile=")
                          .concat(c, "&password=")
                          .concat("")),
                        (this.disableOnShowHook = !1),
                        s.Z.twebview({ data: { url: f, bridgeIns: d } });
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )).apply(this, arguments);
      }
      function I(e) {
        var t, n, i, o;
        if (!e.state.isFirst) {
          var a = c().getStorageSync(_.uD) || [];
          console.log("updateOrderNumberList", a);
          var l = u.vO.get() || {},
            s = l["RETAIN_TOAST" + e.orderNumber],
            d =
              null === (t = e.state) ||
              void 0 === t ||
              null === (n = t.orderInfo) ||
              void 0 === n
                ? void 0
                : n.statusCode,
            f = e.curUserName || "",
            p = "AlterNateGuideToast-".concat(f),
            g = c().getStorageSync(p);
          console.log("needShowAlternateGuideToast:", g);
          var v =
            null === (i = e.state) ||
            void 0 === i ||
            null === (o = i.orderInfo) ||
            void 0 === o
              ? void 0
              : o.upgradeRetainToastInfo;
          if (e.hasShowRetainToast || s || ![3].includes(d))
            if (e.hasShowRetainToast || a.includes(e.orderNumber) || !v)
              !e.hasShowRetainToast &&
              e.state.alternateGuideToast &&
              "show" != g
                ? (e.setState({ showAlternateGuideToast: !0 }, function () {
                    c().setStorageSync(p, "show");
                  }),
                  (e.hasShowRetainToast = !0))
                : "CandidateOrderPay" === e.fromPage
                ? (0, h._f)()
                : e.pop();
            else {
              e.setState({ showType: m.Iv.UpgradeRetainDrawer });
              var y = [].concat((0, r.Z)(a), [e.orderNumber]);
              c().setStorageSync(_.uD, y), (e.hasShowRetainToast = !0);
            }
          else
            (l["RETAIN_TOAST" + e.orderNumber] = !0),
              u.vO.set(l),
              e.setState({ showRetainToast: !0 }),
              (e.hasShowRetainToast = !0);
        }
      }
      function k(e) {
        s.Z.twebview({ data: { url: e } });
      }
      function R(e) {
        p.Z.commonNavigator(e);
      }
    },
    93825: function (e, t, n) {
      "use strict";
      n.d(t, {
        R8: function () {
          return P;
        },
        sh: function () {
          return G;
        },
        $4: function () {
          return T;
        },
        WD: function () {
          return x;
        },
        Qp: function () {
          return q;
        },
        B8: function () {
          return U;
        },
        wU: function () {
          return oe;
        },
        N$: function () {
          return ie;
        },
        GI: function () {
          return L;
        },
        Qr: function () {
          return B;
        },
      });
      var r = n(79301),
        i = n(95308),
        o = n(298),
        a = (n(52500), n(71515)),
        c = (n(1841), n(49528)),
        u = n(92954),
        l = n.n(u),
        s = n(23577),
        d = l().getSystemInfoSync(),
        f = s.Z.isCRN ? d.windowWidth : "750rpx",
        p = s.Z.isCRN ? f - 16 : "718rpx",
        h = s.Z.platform && s.Z.platform.toLowerCase(),
        g = (0, c.lW)({
          bg: {
            flexDirection: "column",
            justifyContent: "flex-start",
            backgroundColor: "white",
            borderRadius: 12,
            flex: 1,
            display: "flex",
            width: p,
            marginLeft: 8,
            marginTop: 0,
            marginBottom: 8,
            position: "relative",
          },
          passengerTypeStyle: {
            marginLeft: 5,
            borderRadius: 3,
            justifyContent: "center",
            borderColor: "#999999",
            borderWidth: 1,
            height: 16,
            paddingTop: 1,
            paddingRight: 4,
          },
          memberTagStyle: {
            padding: 1.5,
            marginLeft: 5,
            borderRadius: 3,
            justifyContent: "center",
            borderColor: "#198CFF",
            borderWidth: 1,
          },
          beneficialTagStyle: {
            padding: 1.5,
            marginLeft: 5,
            borderRadius: 3,
            borderColor: "#D98C21",
            justifyContent: "center",
            borderWidth: 1,
          },
          passenger: { height: 68 },
          title: {
            color: "#222222",
            fontFamily: "PingFangSC-Semibold",
            fontSize: 16,
            fontWeight: "bold",
            height: 20,
            letterSpacing: 0,
            lineHeight: 20,
          },
          desc: {
            color: "#999999",
            fontFamily: "PingFangSC-Regular",
            fontSize: 12,
            fontWeight: "normal",
            height: 16,
            lineHeight: 16,
          },
          tag: {
            flexDirection: "row",
            marginTop: "ios" == h ? 3 : 0,
            height: 16,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: "#ccc",
            paddingRight: 3,
            paddingLeft: 3,
            marginLeft: 6,
            paddingTop: 1.5,
          },
          wechatTag: {
            flexDirection: "row",
            height: 12,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: "#ccc",
            paddingRight: 3,
            paddingLeft: 3,
            marginLeft: 6,
            display: "flex",
            marginTop: 3,
            borderStyle: "solid",
          },
          tagText: {
            color: "#999999",
            fontFamily: "PingFangSC-Regular",
            fontSize: 11,
            fontWeight: "normal",
            height: 14,
            letterSpacing: 0,
            lineHeight: 14,
          },
          buttonText: {
            color: "#198CFF",
            fontFamily: "PingFangSC-Medium",
            fontSize: 16,
            fontWeight: "500",
            height: 20,
            letterSpacing: 0,
            lineHeight: 20,
          },
          line: {
            marginTop: 5,
            marginBottom: 1,
            marginLeft: 16,
            width: "90%",
            height: 0.5,
            backgroundColor: "#f5f5f5",
          },
          wechatLine: {
            marginTop: 5,
            marginBottom: 1,
            marginLeft: 16,
            width: "91%",
            height: 0.5,
            backgroundColor: "#f5f5f5",
          },
        }),
        v = (0, c.lW)({
          passengerBox: {
            display: "flex",
            backgroundColor: "white",
            flex: 1,
            height: 68,
            paddingLeft: 8,
            paddingRight: 8,
            overflow: "hidden",
            position: "relative",
            borderRadius: 12,
          },
          passengerContent: {
            flex: 1,
            display: "flex",
            paddingTop: 14,
            paddingBottom: 14,
            position: "relative",
          },
          passengerAction: { borderTopRightRadius: 8 },
          deleteButton: {
            alignItems: "center",
            justifyContent: "center",
            height: 68,
            width: 48,
            backgroundColor: "#ff5959",
            position: "absolute",
            right: 48,
            borderRadius: 0,
          },
          delWechatICon: {
            display: "flex",
            position: "absolute",
            right: 16,
            top: 24,
          },
          delICon: {
            display: "flex",
            position: "absolute",
            left: f - 58,
            top: 24,
          },
          cancelButton: {
            alignItems: "center",
            justifyContent: "center",
            height: 68,
            width: 48,
            backgroundColor: "#ededed",
            position: "absolute",
            right: 0,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderRadius: 0,
          },
          buttonText: {
            color: "#999999",
            fontFamily: "PingFangSC-Medium",
            fontSize: 12,
            fontWeight: "500",
            height: 17,
          },
          deleteIcon: {
            position: "absolute",
            left: 0,
            right: 16,
            top: 0,
            bottom: 0,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          },
        }),
        m = (0, c.lW)({
          container: { flex: 1 },
          flexColumn: { flexDirection: "column" },
          flexRow: { flexDirection: "row" },
          flexCenter: { justifyContent: "center", alignItems: "center" },
          floatLeft: { justifyContent: "flex-start", alignItems: "flex-start" },
          floatRight: { justifyContent: "flex-end", alignItems: "flex-end" },
          font11: { fontSize: 10 },
          font12: { fontSize: 11, fontWeight: "400" },
          font13: { fontSize: 12, fontWeight: "400" },
          font14: { fontSize: 13, fontWeight: "400" },
          font15: { fontSize: 14, fontWeight: "400" },
          font16: { fontSize: 15, fontWeight: "400" },
          font17: { fontSize: 16, fontWeight: "400" },
          font18: { fontSize: 17, fontWeight: "400" },
          font19: { fontSize: 18, fontWeight: "400" },
          font20: { fontSize: 19, fontWeight: "600" },
          font22: { fontSize: 21, fontWeight: "600" },
          font24: { fontSize: 23, fontWeight: "600" },
          font28: { fontSize: 27, fontWeight: "600" },
          pt3: { paddingTop: 3 },
          pt5: { paddingTop: 5 },
          pt7: { paddingTop: 7 },
          flex: { flex: 1, display: "flex" },
          flexHalf: { flex: 0.5 },
          padding5: { padding: 5 },
          flexHorizontalCenter: { flexDirection: "row", alignItems: "center" },
        }),
        _ = n(87892),
        y = n(90582),
        b = n(32970),
        Z = n(94205),
        C = n(42479),
        w = n(48813),
        N = s.Z.platform && s.Z.platform.toLowerCase();
      function T(e) {
        var t;
        return (0, w.tZ)(a.View, {
          style: (0, c.Jn)([
            null === (t = e.props) || void 0 === t ? void 0 : t.style,
            { justifyContent: "center" },
          ]),
          id: "AMEe",
          onClick: function () {
            var t;
            console.log("chosenPassengersAction--\x3e"),
              null === (t = e.props) ||
                void 0 === t ||
                t.chosenPassengersAction(),
              e.resetState();
          },
          children: (0, w.tZ)(a.View, {
            style: (0, c.Jn)([
              {
                display: "flex",
                backgroundColor: "white",
                borderRadius: 12,
                justifyContent: "center",
              },
            ]),
            children: (0, w.BX)(a.View, {
              style: (0, c.Jn)([
                m.flexRow,
                m.flexCenter,
                {
                  display: "flex",
                  alignItems: "center",
                  paddingVertical: 0,
                  zIndex: 1,
                  height: 56,
                },
              ]),
              children: [
                D({ style: { marginRight: 4, width: 20, height: 20 } }),
                (0, w.tZ)(a.Text, {
                  style: (0, c.Jn)([
                    { color: "#198CFF" },
                    m.font18,
                    { fontWeight: "bold", fontSize: 16, lineHeight: 20 },
                  ]),
                  children: "选择乘客(成人/学生/儿童)",
                }),
              ],
            }),
          }),
        });
      }
      function x(e) {
        for (
          var t,
            n = [],
            r =
              null === (t = e.props) || void 0 === t
                ? void 0
                : t.chosenPassengerList.length,
            i = 0;
          i < r;
          i++
        ) {
          var o,
            u =
              (null === (o = e.props) || void 0 === o
                ? void 0
                : o.chosenPassengerList[i]) || {},
            l = "",
            d = u.ticket_type_name || u.passengerType;
          u.isAdultToStudent && (d = "学生票"),
            u.isKid && (d = "随行儿童"),
            u.passportType && (l = u.passportType);
          var f = u.identityType || u.id_type_name;
          ("H" === u.idType || ("1" == u.idType && "2" == u.id_sub_type)) &&
            (f = u.id_sub_type_name);
          var p =
            u.showPassportCode ||
            u.id_no ||
            u.passportCode ||
            u.identityNo ||
            "";
          (p = p.includes("**") ? p : A(p, 4, 3)),
            s.Z.isCRN
              ? n.push(k(e, i, d, u, f, l, p))
              : n.push(R(e, i, d, u, f, l, p)),
            i + 1 < r &&
              n.push(
                (0, w.tZ)(a.View, { style: s.Z.isCRN ? g.line : g.wechatLine })
              );
        }
        return (0, w.BX)(a.View, {
          style: g.bg,
          children: [
            (0, w.BX)(a.View, {
              style: (0, c.Jn)([
                {
                  backgroundColor: "white",
                  zIndex: 1,
                  flexDirection: "column",
                  borderRadius: 12,
                  display: "flex",
                },
              ]),
              children: [
                n,
                (0, w.tZ)(a.View, { style: s.Z.isCRN ? g.line : g.wechatLine }),
                S(e),
              ],
            }),
            r > 0 &&
              (0, w.tZ)(a.View, {
                style: {
                  zIndex: -1,
                  position: "absolute",
                  bottom: 0,
                  left: 8,
                  right: 8,
                  height: 10,
                  backgroundColor: "#FFF9F6",
                },
              }),
          ],
        });
      }
      function S(e) {
        return (0, w.tZ)(a.View, {
          style: {
            flex: 1,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
          },
          children: (0, w.tZ)(a.View, {
            activeOpacity: 0.8,
            style: (0, c.Jn)([
              {
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            ]),
            id: "AMEf",
            onClick: function () {
              var t;
              null === (t = e.props) ||
                void 0 === t ||
                t.chosenPassengersAction(),
                e.resetState();
            },
            children: (0, w.tZ)(a.View, {
              style: (0, c.Jn)([
                m.flex,
                { display: "flex", paddingTop: 15, paddingBottom: 15 },
                m.flexRow,
                m.flexCenter,
              ]),
              children: (0, w.tZ)(a.Text, {
                style: g.buttonText,
                children: "添加/编辑乘客（成人/儿童）",
              }),
            }),
          }),
        });
      }
      function I(e, t, n, r, i, o) {
        var u = n.isStudentToAdult ? "成人票" : t;
        return (0, w.BX)(a.View, {
          style: (0, c.Jn)([m.flexColumn, { marginLeft: 16, display: "flex" }]),
          children: [
            (0, w.BX)(a.View, {
              style: (0, c.Jn)([m.flexRow, { display: "flex" }]),
              children: [
                (0, w.tZ)(a.Text, {
                  style: (0, c.Jn)([
                    { color: "#333333", display: "flex" },
                    m.font17,
                    { fontWeight: "bold", fontSize: 16 },
                    g.title,
                  ]),
                  children: n.name || n.passengerName,
                }),
                !!t &&
                  (0, w.tZ)(a.View, {
                    disabled: n.isKid,
                    id: "AMEg",
                    onClick: function () {},
                    style: s.Z.isCRN ? g.tag : g.wechatTag,
                    children: (0, w.tZ)(a.Text, {
                      style: (0, c.Jn)([
                        { color: "#99999" },
                        m.font11,
                        g.tagText,
                      ]),
                      children: t.indexOf("学生") > -1 ? u : t,
                    }),
                  }),
                !!n.isFreeChild &&
                  (0, w.tZ)(a.View, {
                    style: {
                      paddingLeft: 4,
                      paddingRight: 4,
                      height: s.Z.isCRN ? 16 : 12,
                      marginTop: s.Z.isCRN ? ("ios" == N ? 3 : 0) : 3,
                      borderWidth: 0.5,
                      borderStyle: "solid",
                      borderRadius: 3,
                      borderColor: "#03B86F",
                      marginLeft: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    },
                    children: (0, w.tZ)(a.Text, {
                      style: {
                        includeFontPadding: !1,
                        color: "#03B86F",
                        fontSize: 11,
                      },
                      children: "免费",
                    }),
                  }),
              ],
            }),
            (0, w.BX)(a.View, {
              style: (0, c.Jn)([m.flexRow, { marginTop: 5, display: "flex" }]),
              children: [
                (0, w.tZ)(a.Text, {
                  style: g.desc,
                  children: n.childTip ? n.childTip : (r || i) + " " + o,
                }),
                (0, C.z)(null == n ? void 0 : n.passengerType),
              ],
            }),
          ],
        });
      }
      function k(e, t, n, r, i, o, u) {
        var l,
          d = I(0, n, r, i, o, u);
        return (0, w.tZ)(a.View, {
          style: v.passengerBox,
          children: (0, w.BX)(_.Z, {
            style: (0, c.Jn)([
              {
                display: "flex",
                right: -96,
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                flexDirection: "row",
              },
              e.state.wantDeletePassengerIndex === t && {
                transform: [
                  {
                    translateX:
                      e.state.delRotation &&
                      (null === (l = e.state.delRotation) || void 0 === l
                        ? void 0
                        : l.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -96],
                          })),
                  },
                ],
              },
            ]),
            children: [
              (0, w.BX)(a.View, {
                style: v.passengerContent,
                children: [
                  d,
                  (0, w.tZ)(a.View, {
                    style: s.Z.isCRN ? v.delICon : v.delWechatICon,
                    id: "AMEh",
                    onClick: function () {
                      return e.onDeletePassengerIcon(t);
                    },
                    children: F({ width: 20, height: 20 }),
                  }),
                ],
              }),
              (0, w.BX)(a.View, {
                style: {
                  position: "absolute",
                  right: s.Z.isCRN ? 0 : -96,
                  width: 96,
                  height: 68,
                  display: "flex",
                },
                children: [
                  (0, w.tZ)(a.View, {
                    style: (0, c.Jn)([
                      v.deleteButton,
                      { display: "flex" },
                      { color: "white", fontSize: 12 },
                    ]),
                    id: "AMEi",
                    onClick: function () {
                      return e.onDeletePassengerBtn(
                        t,
                        e.state.slideAnim,
                        e.state.delRotation
                      );
                    },
                    children: "删除",
                  }),
                  (0, w.tZ)(a.View, {
                    style: (0, c.Jn)([
                      v.cancelButton,
                      { display: "flex" },
                      {
                        color: "#999999",
                        fontSize: 12,
                        borderTopRightRadius: 12,
                      },
                    ]),
                    id: "AMEj",
                    onClick: function () {
                      return e.onDeletePassengerIcon(t);
                    },
                    children: "取消",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function R(e, t, n, r, i, u, l) {
        var d = I(0, n, r, i, u, l);
        return (0, w.tZ)(a.View, {
          style: v.passengerBox,
          children: (0, w.BX)(_.Z, {
            style: (0, c.Jn)([
              {
                display: "flex",
                right: -96,
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                flexDirection: "row",
              },
            ]),
            children: [
              (0, w.BX)(a.View, {
                style: (0, o.Z)((0, o.Z)({}, v.passengerContent), {
                  transition: "transform ease .3s",
                  transform: "translateX(".concat(
                    e.state.wantDeletePassengerIndex === t ? "-96px" : 0,
                    ")"
                  ),
                }),
                children: [
                  d,
                  (0, w.tZ)(a.View, {
                    style: s.Z.isCRN ? v.delICon : v.delWechatICon,
                    id: "AMEk",
                    onClick: function () {
                      return e.onDeletePassengerIcon(t);
                    },
                    children: F({ width: 20, height: 20 }),
                  }),
                ],
              }),
              (0, w.BX)(a.View, {
                style: {
                  position: "absolute",
                  transition: "right ease .3s",
                  right: e.state.wantDeletePassengerIndex === t ? 0 : -100,
                  width: 96,
                  height: 68,
                  display: "flex",
                },
                children: [
                  (0, w.tZ)(a.View, {
                    style: (0, c.Jn)([
                      v.deleteButton,
                      { display: "flex" },
                      { color: "white", fontSize: 12 },
                    ]),
                    id: "AMEl",
                    onClick: function () {
                      return e.onDeletePassengerBtn(t);
                    },
                    children: "删除",
                  }),
                  (0, w.tZ)(a.View, {
                    style: (0, c.Jn)([
                      v.cancelButton,
                      { display: "flex" },
                      {
                        color: "#999999",
                        fontSize: 12,
                        borderTopRightRadius: 12,
                      },
                    ]),
                    id: "AMEm",
                    onClick: function () {
                      return e.onDeletePassengerIcon(-1);
                    },
                    children: "取消",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function D(e) {
        return (0, w.tZ)(
          a.Image,
          (0, o.Z)(
            (0, o.Z)(
              {
                src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/btn_tjck@3x.webp",
              },
              e
            ),
            {},
            { webp: !0 }
          )
        );
      }
      function F(e) {
        return (0, w.tZ)(a.Image, {
          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/btn_scck_24@3x.webp",
          style: e,
          webp: !0,
        });
      }
      function P(e) {
        return (0, w.tZ)(
          a.Image,
          (0, o.Z)(
            (0, o.Z)(
              {
                src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_gd@3x.webp",
              },
              e
            ),
            {},
            { webp: !0 }
          )
        );
      }
      function A(e, t, n) {
        if (!e) return e;
        for (var r = e.length - t - n, i = "", o = 0; o < r; o++) i += "*";
        return e.substring(0, t) + i + e.substring(e.length - n);
      }
      function B(e) {
        if (!e) return !0;
        var t;
        for (t in e) return !1;
        return !0;
      }
      function E(e) {
        var t = [],
          n = [];
        return (
          (e || []).forEach(function (e) {
            t.push(e.seatName), n.push(e.departDate);
          }),
          { seats: t, monthes: n }
        );
      }
      function V(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            var n = new Date(e).getMonth() + 1;
            -1 == t.indexOf(n) && t.push(n);
          }),
          t
        );
      }
      function L(e) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = (0, i.Z)(
          (0, r.Z)().mark(function e(t) {
            var n, i, a, c, u, l, d, f, p;
            return (0, r.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (s.Z.isCRN) {
                      e.next = 3;
                      break;
                    }
                    return j(t), e.abrupt("return");
                  case 3:
                    if (
                      ((n = Q(t.state.chosenPassengerList)),
                      (i = Q(t.state.chosenFreeChildPassengers || [])),
                      (n = (n || []).concat(i)),
                      (a = E(t.state.candidateList)),
                      (c = JSON.parse(JSON.stringify(a.seats || []))),
                      (u = V(a.monthes || [])),
                      B((l = t.state.account12306)))
                    ) {
                      e.next = 16;
                      break;
                    }
                    return (e.next = 13), (0, Z.VS)();
                  case 13:
                    (f = e.sent),
                      (l = (0, o.Z)(
                        (0, o.Z)({}, l),
                        {},
                        { logged: !(null != f && f.err) }
                      )),
                      null !== (d = l) &&
                        void 0 !== d &&
                        d.passengers &&
                        delete l.passengers;
                  case 16:
                    (p = {
                      account12306: l,
                      selectedPassengers: n,
                      allSeatNames: c || [],
                      allMonthes: u || [],
                      pageType: "zl",
                      fromPage: "CandidateOrderInput",
                      extraTip:
                        '<font color="#FF7733">铁路局规定：</font>购票需登录12306账号，不登录无法出票成功',
                      is_cross_border: W(t.state.candidateList),
                    }),
                      (0, b.tu)(p);
                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function z(e) {
        var t = !1,
          n = ["一等座", "软卧", "商务座"];
        return (
          (e || []).forEach(function (e) {
            n.includes(e) && (t = !0);
          }),
          t
        );
      }
      function j(e) {
        return M.apply(this, arguments);
      }
      function M() {
        return (M = (0, i.Z)(
          (0, r.Z)().mark(function e(t) {
            var n, i, a, c, u, l, s, d, f;
            return (0, r.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = X(t.state.chosenPassengerList)),
                      (i = X(t.state.chosenFreeChildPassengers || [])),
                      (n = (n || []).concat(i)),
                      (a = E(t.state.candidateList)),
                      (c = JSON.parse(JSON.stringify(a.seats || []))),
                      V(a.monthes || []),
                      (u = z(c)),
                      B((l = t.state.account12306)))
                    ) {
                      e.next = 14;
                      break;
                    }
                    return (e.next = 11), (0, Z.VS)();
                  case 11:
                    (d = e.sent),
                      (l = (0, o.Z)(
                        (0, o.Z)({}, l),
                        {},
                        { logged: !(null != d && d.err) }
                      )),
                      null !== (s = l) &&
                        void 0 !== s &&
                        s.passengers &&
                        delete l.passengers;
                  case 14:
                    (f = {
                      account12306: l,
                      selectedPasList: n,
                      passengerCountConfig: t.state.orderPassengerMaxCount,
                      isIncludeNoStuSeat: u,
                      fromPage: "CandidateOrderInput",
                      isCrossEnvTrain: W(t.state.candidateList),
                    }),
                      (0, b.tu)(f, function (e) {
                        if (e) {
                          var n = e.selectedPasList,
                            r = e.freeChildren;
                          console.log(
                            "goTrainPassengerListPage--\x3e",
                            JSON.stringify(n)
                          ),
                            console.log(
                              "goTrainPassengerListPage-freeChildren->",
                              JSON.stringify(r)
                            );
                          var i = H(n),
                            o = H(r);
                          t.setState({
                            chosenPassengerList: i,
                            chosenFreeChildPassengers: o,
                          });
                        }
                      });
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function W(e) {
        if (e && e.length > 0) {
          var t = e[0] || {};
          if (null != t && t.is_cross_border) return !0;
        }
        return !1;
      }
      function X(e) {
        console.log("converApp2WechatMini--\x3e", e);
        var t = [];
        return (
          (e || []).forEach(function (e) {
            t.push(e.wechatData);
          }),
          t
        );
      }
      function H(e) {
        var t = [];
        return (
          (e || []).forEach(function (e) {
            var n;
            (n =
              2 == e.PassengerType
                ? "儿童"
                : 3 == e.PassengerType
                ? "学生"
                : "成人票"),
              t.push({
                wechatData: e,
                key: ""
                  .concat(e.PassengerType, "-")
                  .concat(e.ShowPassportCode, "-")
                  .concat(e.CNName),
                cardTimeLimit: "",
                passengerType: n,
                sex: e.Gender,
                id_type: e.cardType,
                sex_name: "",
                is_buy_ticket: "",
                nationality: e.Nationality,
                status: 1,
                passportCode: e.IdentityNo,
                IdentityNo: e.IdentityNo,
                passportType: e.IdentityType,
                IdentityType: e.IdentityType,
                passengerENFirstName: e.ENFirstName,
                cardType: e.cardType,
                passenger_id: e.PassengerID,
                source: "12306",
                child: e.isChild,
                ticket_type_name: n,
                real_id_no: e.IdentityNo,
                name: e.CNName || e.pasName,
                maskKey: ""
                  .concat(e.PassengerType, "-")
                  .concat(e.ShowPassportCode),
                passengerTips: "",
                userCountry: e.Nationality,
                id_sub_type_name: e.IdentityType,
                showPassportCode: e.ShowPassportCode,
                maskPassportCode: e.ShowPassportCode,
                passengerID: e.PassengerID,
                id_no: e.ShowPassportCode,
                country_code: e.Nationality,
                ticket_type: "".concat(e.PassengerType),
                birthday: e.Birthday,
                mask_id_no: e.ShowPassportCode,
                passengerENLastName: e.ENLastName,
                id_type_name: e.IdentityType,
                real_mobile: e.Mobile,
                gender: e.Gender,
                type_name: n,
                studentInfo: "",
                mobile: "",
                gat_valid_date_end: "",
                passengerBirth: e.Birthday,
                birthDay: e.Birthday,
                middleName: "",
                passengerName: e.CNName || e.pasName,
                isFreeChild: e.isFreeChild,
              });
          }),
          t
        );
      }
      function G(e) {
        var t,
          n,
          r =
            (null === (t = e.state) ||
            void 0 === t ||
            null === (n = t.chosenPassengerList) ||
            void 0 === n
              ? void 0
              : n.filter(function (e) {
                  return "成人票" === (null == e ? void 0 : e.passengerType);
                })) || [];
        if (0 !== r.length) {
          var i = {},
            o = e.state.adultWithChildrenCount || 4;
          if (o > 0) {
            var a,
              c,
              u = {},
              l =
                null === (a = e.state) ||
                void 0 === a ||
                null === (c = a.chosenPassengerList) ||
                void 0 === c
                  ? void 0
                  : c.filter(function (e) {
                      return !("儿童票" === e.passengerType && !e.isKid);
                    });
            console.log("passengersWithFastKids--\x3e", l);
            for (var s = 0; s < l.length; s++) {
              var d = l[s] || {},
                f =
                  (null == d ? void 0 : d.identityNo) ||
                  (null == d ? void 0 : d.passportCode);
              u[f] || (u[f] = 0), d.isKid && (u[f] += 1);
            }
            console.log("adultChildMap--\x3e", u);
            var p = function (e) {
              if (u[e] < o)
                return (
                  (i = JSON.parse(
                    JSON.stringify(
                      r.find(function (t) {
                        return (t.identityNo || t.passportCode) === e;
                      })
                    )
                  )),
                  "break"
                );
            };
            for (var h in u) if ("break" === p(h)) break;
            if (B(i))
              return void (0, y.v)(
                "一位成人最多可以添加".concat(
                  o,
                  "位随行儿童，请再添加一位成人乘客～"
                )
              );
          } else i = JSON.parse(JSON.stringify(r[0]));
          (i.isFastAddChild = !0), (i.passengerType = "儿童票"), (i.isKid = !0);
          var g = JSON.parse(JSON.stringify(e.state.chosenPassengerList));
          g.push(i),
            (function (e, t) {
              var n = t.state.orderPassengerMaxCount || 5;
              return e.length > n
                ? ((0, y.v)("一个订单最多只能购买".concat(n, "张票")), !1)
                : !Y(e) || ((0, y.v)("儿童不能单独出行"), !1);
            })(g, e) && e.setState({ chosenPassengerList: g });
        } else (0, y.v)("请至少添加一位成人乘客");
      }
      function U(e, t, n) {
        var r, i;
        if (n.isFreeChild) {
          var o = e.state.chosenFreeChildPassengers || [],
            a = JSON.parse(JSON.stringify(o)),
            c = a.findIndex(function (e) {
              return (e.passengerName =
                n.passengerName && e.identityNo === n.identityNo);
            });
          return (
            a.splice(c, 1), void e.setState({ chosenFreeChildPassengers: a })
          );
        }
        console.log("deleteChosenPassenger-deletePassengerIndex--\x3e", t);
        var u =
          null === (r = e.state) || void 0 === r
            ? void 0
            : r.chosenPassengerList.find(function (e, n) {
                return n === t;
              });
        console.log("deleteChosenPassenger--deletedPassengers->", u);
        var l =
          null === (i = e.state) || void 0 === i
            ? void 0
            : i.chosenPassengerList.filter(function (e, n) {
                return e.isKid && !u.isKid
                  ? (e.identityNo || e.passportCode) !==
                      (u.identityNo || u.passportCode)
                  : n !== t;
              });
        console.log("deleteChosenPassenger--alterDeleteChosenPassenger->", l),
          Y(l)
            ? (0, y.v)("儿童不能单独出行")
            : e.setState({ chosenPassengerList: l });
      }
      function Y(e) {
        return (
          0 !== e.length &&
          e.filter(function (e) {
            return "儿童票" == e.passengerType;
          }).length === e.length
        );
      }
      function q() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [],
          n = !1;
        e.forEach(function (e) {
          if ("12306" === e.source) {
            var r = J(e);
            (r.originCtripData = e),
              "残军票" === r.passengerType &&
                ((r.passengerType = "成人票"), (n = !0)),
              t.push(r);
          } else if ("ctrip" === e.source) {
            var i = K(e);
            (i.originCtripData = e),
              "残军票" === i.passengerType &&
                ((i.passengerType = "成人票"), (n = !0)),
              t.push(i);
          } else
            try {
              var o = J(e);
              (o.originCtripData = e),
                "残军票" === o.passengerType &&
                  ((o.passengerType = "成人票"), (n = !0)),
                t.push(o);
            } catch (e) {
              console.warn(JSON.stringify(e));
            }
        }),
          n && (0, y.v)("暂不支持抢残军票，将为您自动转为成人票");
        var r = re(t);
        return r;
      }
      function K(e) {
        var t = {
            source: ae(null == e ? void 0 : e.source)
              ? "ctrip"
              : null == e
              ? void 0
              : e.source,
            key: null == e ? void 0 : e.key,
            passengerID: null == e ? void 0 : e.passengerID,
            passengerName:
              null == e ? void 0 : e.passengerName.replace(/ /g, ""),
            passengerType: null == e ? void 0 : e.passengerType,
            identityType: null == e ? void 0 : e.passportType,
            identityNo: null == e ? void 0 : e.passportCode,
            birthDay: null == e ? void 0 : e.birthday,
            studentInfo: null,
            isStudentToAdult: null == e ? void 0 : e.isStudentToAdult,
            nationality: null == e ? void 0 : e.nationality,
            expireDate: null == e ? void 0 : e.cardTimeLimit,
            isSelf: !1,
            showPassportCode: null == e ? void 0 : e.showPassportCode,
            isKid: null == e ? void 0 : e.isKid,
            isFreeChild: !!e.isFreeChild,
            status: e.status,
          },
          n = te(e);
        n && (t.contactMobileNo = n);
        var r = ne(
          null == t ? void 0 : t.passengerType,
          null == e ? void 0 : e.studentInfo
        );
        return r && (t.studentInfo = r), t;
      }
      function J(e) {
        var t = {
            source: ae(null == e ? void 0 : e.source)
              ? "12306"
              : null == e
              ? void 0
              : e.source,
            key: null == e ? void 0 : e.key,
            passengerID: null == e ? void 0 : e.passengerID,
            passengerName: null == e ? void 0 : e.name.replace(/ /g, ""),
            passengerType: null == e ? void 0 : e.ticket_type_name,
            identityType: null == e ? void 0 : e.id_type_name,
            identityNo:
              (null == e ? void 0 : e.real_id_no) ||
              (null == e ? void 0 : e.id_no),
            birthDay: null == e ? void 0 : e.birthday,
            studentInfo: null,
            isStudentToAdult: null == e ? void 0 : e.isStudentToAdult,
            nationality: null == e ? void 0 : e.country_code,
            expireDate: null == e ? void 0 : e.gat_valid_date_end,
            isSelf: null == e ? void 0 : e.self,
            showPassportCode: null == e ? void 0 : e.showPassportCode,
            idType: null == e ? void 0 : e.id_type,
            isKid: null == e ? void 0 : e.isKid,
            isFreeChild: null == e ? void 0 : e.isFreeChild,
            status: e.status,
          },
          n = te(e);
        n && (t.contactMobileNo = n);
        var r = ne(
          null == t ? void 0 : t.passengerType,
          null == e ? void 0 : e.studentInfo
        );
        return r && (t.studentInfo = r), t;
      }
      function Q() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [];
        return (
          e.forEach(function (e) {
            if ("12306" === (null == e ? void 0 : e.source)) {
              var n = $(e);
              t.push(n);
            } else if ("ctrip" === (null == e ? void 0 : e.source)) {
              var r = ee(e);
              t.push(r);
            } else
              try {
                var i = $(e);
                t.push(i);
              } catch (e) {
                console.warn(JSON.stringify(e));
              }
          }),
          t
        );
      }
      function $(e) {
        var t = {
          source: ae(null == e ? void 0 : e.source)
            ? null == e
              ? void 0
              : e.source
            : "12306",
          key: (null == e ? void 0 : e.key) || "",
          passengerID: (null == e ? void 0 : e.passengerID) || "",
          name: null == e ? void 0 : e.passengerName.replace(/ /g, ""),
          ticket_type_name: null == e ? void 0 : e.passengerType,
          id_type_name: null == e ? void 0 : e.identityType,
          id_no: null == e ? void 0 : e.identityNo,
          birthday: null == e ? void 0 : e.birthDay,
          isStudentToAdult:
            null != (null == e ? void 0 : e.isStudentToAdult) &&
            (null == e ? void 0 : e.isStudentToAdult),
          userCountry: null == e ? void 0 : e.nationality,
          gat_valid_date_end: null == e ? void 0 : e.expireDate,
          self: null == e ? void 0 : e.isSelf,
          tempSelected: !0,
          isFreeChild: !!e.isFreeChild,
          status: e.status,
        };
        return (
          B(null == e ? void 0 : e.originCtripData) ||
            (t = (0, o.Z)(
              (0, o.Z)({}, null == e ? void 0 : e.originCtripData),
              t
            )),
          null != e && e.isKid && (t.isKid = !0),
          t
        );
      }
      function ee(e) {
        var t = {
          source: ae(null == e ? void 0 : e.source)
            ? "ctrip"
            : null == e
            ? void 0
            : e.source,
          key: (null == e ? void 0 : e.key) || "",
          passengerID: (null == e ? void 0 : e.passengerID) || "",
          passengerName: null == e ? void 0 : e.passengerName.replace(/ /g, ""),
          passengerType: (null == e ? void 0 : e.passengerType) || "成人票",
          passportType: null == e ? void 0 : e.identityType,
          passportCode: null == e ? void 0 : e.identityNo,
          birthday: null == e ? void 0 : e.birthDay,
          isStudentToAdult:
            null != (null == e ? void 0 : e.isStudentToAdult) &&
            (null == e ? void 0 : e.isStudentToAdult),
          nationality: null == e ? void 0 : e.nationality,
          cardTimeLimit: null == e ? void 0 : e.expireDate,
          tempSelected: !0,
          isFreeChild: !!e.isFreeChild,
          status: e.status,
        };
        return (
          B(null == e ? void 0 : e.originCtripData) ||
            (t = (0, o.Z)(
              (0, o.Z)({}, null == e ? void 0 : e.originCtripData),
              t
            )),
          null != e && e.isKid && (t.isKid = !0),
          t
        );
      }
      function te(e) {
        return null != e && e.real_mobile
          ? null == e
            ? void 0
            : e.real_mobile
          : null != e &&
            e.mobile &&
            -1 === (null == e ? void 0 : e.mobile.indexOf("****"))
          ? null == e
            ? void 0
            : e.mobile
          : null;
      }
      function ne(e, t) {
        if (null != e && e.includes("学生"))
          try {
            return (!!t && JSON.parse(t)) || {};
          } catch (e) {}
        return null;
      }
      function re() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (B(e)) return [];
        var t = JSON.parse(JSON.stringify(e)),
          n = t.find(function (e) {
            return "儿童票" != e.passengerType;
          });
        return (
          B(n) ||
            ((n = JSON.parse(JSON.stringify(n))),
            t.forEach(function (e) {
              var t, r;
              "儿童票" == (null == e ? void 0 : e.passengerType) &&
                (ae(null == e ? void 0 : e.identityType) ||
                  ae(null == e ? void 0 : e.identityNo)) &&
                ((e.identityType =
                  null === (t = n) || void 0 === t ? void 0 : t.identityType),
                (e.identityNo =
                  null === (r = n) || void 0 === r ? void 0 : r.identityNo));
            })),
          t
        );
      }
      function ie(e) {
        return e.state.chosenPassengerList.map(function (e) {
          var t = 2;
          "12306" == e.source && (t = 1);
          var n,
            r,
            i,
            o,
            a,
            c,
            u,
            l,
            s,
            d,
            f,
            p,
            h,
            g,
            v,
            m = null;
          B(null == e ? void 0 : e.studentInfo) ||
            (m = {
              cardNo:
                null == e || null === (n = e.studentInfo) || void 0 === n
                  ? void 0
                  : n.CouponNo,
              faculty:
                null == e || null === (r = e.studentInfo) || void 0 === r
                  ? void 0
                  : r.Faculty,
              province:
                null == e || null === (i = e.studentInfo) || void 0 === i
                  ? void 0
                  : i.ProvinceName,
              provinceCode:
                null == e || null === (o = e.studentInfo) || void 0 === o
                  ? void 0
                  : o.ProvinceCode,
              studentNumber:
                null == e || null === (a = e.studentInfo) || void 0 === a
                  ? void 0
                  : a.StudentNumber,
              schoolSystem:
                "string" ==
                typeof (null == e ||
                null === (c = e.studentInfo) ||
                void 0 === c
                  ? void 0
                  : c.SchoolSystem)
                  ? null == e ||
                    null === (u = e.studentInfo) ||
                    void 0 === u ||
                    null === (l = u.SchoolSystem) ||
                    void 0 === l
                    ? void 0
                    : l.substr(0, 1)
                  : (null == e || null === (s = e.studentInfo) || void 0 === s
                      ? void 0
                      : s.SchoolSystem) + "",
              schoolYear:
                (null == e || null === (d = e.studentInfo) || void 0 === d
                  ? void 0
                  : d.StartYear) + "",
              departCity:
                null == e || null === (f = e.studentInfo) || void 0 === f
                  ? void 0
                  : f.DepartCityName,
              arriveCity:
                null == e || null === (p = e.studentInfo) || void 0 === p
                  ? void 0
                  : p.ArriveCityName,
              className:
                null == e || null === (h = e.studentInfo) || void 0 === h
                  ? void 0
                  : h.Clazz,
              departCityCode:
                null == e || null === (g = e.studentInfo) || void 0 === g
                  ? void 0
                  : g.DepartCityCode,
              arriveCityCode:
                null == e || null === (v = e.studentInfo) || void 0 === v
                  ? void 0
                  : v.ArriveCityCode,
            });
          var _ = {
            passengerFlag: t,
            passengerName: e.passengerName,
            passengerType: e.passengerType,
            identityType: e.identityType || e.passportType,
            identityNo: e.identityNo || e.passportCode,
            birthDay: e.birthDay,
            nationality: e.nationality,
            expireDate: e.expireDate,
            studentInfo: m,
          };
          return (
            e.contactMobileNo && (_.contactMobileNo = e.contactMobileNo), _
          );
        });
      }
      function oe(e) {
        var t = e.state.chosenFreeChildPassengers || [];
        console.log(
          "getFreePassengerListForCreateGrabOrder",
          JSON.stringify(t)
        );
        var n = [];
        return (
          t.forEach(function (e) {
            var t = e.originCtripData || e || {};
            n.push({
              freeType: 1,
              passengerName:
                (null == t ? void 0 : t.name) ||
                (null == e ? void 0 : e.passengerName) ||
                (null == e ? void 0 : e.pasName),
              identityType:
                (null == t ? void 0 : t.id_type_name) ||
                (null == e ? void 0 : e.identityType) ||
                (null == e ? void 0 : e.IdentityType),
              identityNo:
                (null == t ? void 0 : t.real_id_no) ||
                (null == t ? void 0 : t.id_no) ||
                (null == e ? void 0 : e.identityNo),
              contactMobileNo:
                (null == t ? void 0 : t.real_mobile) ||
                (null == t ? void 0 : t.mobile) ||
                (null == e ? void 0 : e.Mobile) ||
                (null == e ? void 0 : e.contactMobileNo),
            });
          }),
          n
        );
      }
      function ae(e) {
        return void 0 === e || "" == e || null == e;
      }
      s.Z.isTieyou;
    },
    82750: function (e, t, n) {
      "use strict";
      n.d(t, {
        of: function () {
          return u;
        },
        q0: function () {
          return c;
        },
      });
      var r = n(79301),
        i = n(95308),
        o = n(94190),
        a = n(32297),
        c = (function () {
          var e = (0, i.Z)(
            (0, r.Z)().mark(function e() {
              var t, n, i, c, u, l, s, d, f, p;
              return (0, r.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (t = ""),
                        (n = ""),
                        (i = ""),
                        (c = ""),
                        (u = ""),
                        (s = null);
                      try {
                        o.WG.get() &&
                          ((f = o.WG.get() || {}),
                          (p = f.bind12306),
                          (t = p ? p.name : ""),
                          (n = p ? p.pwd : ""),
                          (c = p ? p.mobilePhone12306 : ""),
                          (u = p ? p.name : ""),
                          (l = (null == p ? void 0 : p.realName12306) || ""),
                          (i = p ? p.memberStatus12306 : "-1"),
                          (s =
                            null == p ||
                            null === (d = p.passengerList12306) ||
                            void 0 === d
                              ? void 0
                              : d.find(function (e) {
                                  return 1 == e.isSelf;
                                })));
                      } catch (e) {
                        console.error("getT6AccountData", e);
                      }
                      return e.abrupt("return", {
                        userName: t,
                        password: n,
                        memberStatus12306: i,
                        mobile:
                          null === a.Z || void 0 === a.Z
                            ? void 0
                            : a.Z.userName,
                        t6Mobile: c,
                        name: u,
                        selfPassenger: s,
                        realName12306: l,
                      });
                    case 3:
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
      function u() {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = (0, i.Z)(
          (0, r.Z)().mark(function e() {
            var t, n, i, a, c, u, l;
            return (0, r.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (t = ""), (n = ""), (i = ""), (a = ""), (c = "");
                    try {
                      o.WG.get() &&
                        ((u = o.WG.get() || {}),
                        (l = u.bind12306),
                        (t = l ? l.name : ""),
                        (c = a = t),
                        (n = l ? l.pwd : ""),
                        (i = l ? l.memberStatus12306 : "-1"));
                    } catch (e) {
                      console.error("getT6AccountData", e);
                    }
                    return e.abrupt("return", {
                      userName: t,
                      name: a,
                      userID: c,
                      memberStatus12306: i,
                      password: n,
                    });
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    42039: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return r;
        },
        Z: function () {
          return l;
        },
      });
      var r,
        i = n(298),
        o = n(57042),
        a = n(24460),
        c = n(45023),
        u = n(82955);
      !(function (e) {
        (e.tupOrderList = "tupOrderList"),
          (e.tupOrderDetail = "tupOrderDetail");
      })(r || (r = {}));
      var l = (function () {
        function e(t) {
          var n = t.fromPage,
            i = void 0 === n ? r.tupOrderList : n,
            a = t.uniqueCountToasts;
          (0, o.Z)(this, e),
            (0, c.Z)(this, "fromPage", void 0),
            (0, c.Z)(this, "uniqueCountToasts", void 0),
            (0, c.Z)(this, "notices", []),
            (0, c.Z)(this, "areas", []),
            (0, c.Z)(this, "toasts", []),
            this.create(a, i);
        }
        return (
          (0, a.Z)(e, [
            {
              key: "create",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = arguments.length > 1 ? arguments[1] : void 0;
                (this.uniqueCountToasts = e), (this.fromPage = t);
              },
            },
            {
              key: "initData",
              value: function (e) {
                var t = e.notices,
                  n = void 0 === t ? [] : t,
                  r = e.areas,
                  i = void 0 === r ? [] : r,
                  o = e.toasts,
                  a = void 0 === o ? [] : o;
                (this.notices = n), (this.areas = i), (this.toasts = a);
              },
            },
            {
              key: "getNoticeByCode",
              value: function (e) {
                var t,
                  n =
                    null === (t = this.notices) || void 0 === t
                      ? void 0
                      : t.find(function (t) {
                          return t.noticeCode === e;
                        }),
                  r = u.Z.parseJson(null == n ? void 0 : n.noticeJson),
                  o =
                    n &&
                    (0, i.Z)(
                      (0, i.Z)({}, n),
                      {},
                      {
                        _jsonInfo: r
                          ? (0, i.Z)((0, i.Z)({}, r), {}, { _codeName: e })
                          : null,
                      }
                    );
                return (
                  o &&
                    console.log("Octopus---\x3egetNoticeByCode--\x3eres:", o),
                  o
                );
              },
            },
            {
              key: "getAreaByCode",
              value: function (e) {
                var t,
                  n =
                    null === (t = this.areas) || void 0 === t
                      ? void 0
                      : t.find(function (t) {
                          return t.areaCode === e;
                        }),
                  r = u.Z.parseJson(null == n ? void 0 : n.areaJson),
                  o =
                    n &&
                    (0, i.Z)(
                      (0, i.Z)({}, n),
                      {},
                      {
                        _jsonInfo: r
                          ? (0, i.Z)((0, i.Z)({}, r), {}, { _codeName: e })
                          : null,
                      }
                    );
                return (
                  o && console.log("Octopus---\x3egetAreaByCode--\x3eres:", o),
                  o
                );
              },
            },
            {
              key: "getToastByCode",
              value: function (e) {
                var t,
                  n =
                    null === (t = this.toasts) || void 0 === t
                      ? void 0
                      : t.find(function (t) {
                          return t.toastCode === e;
                        }),
                  r = u.Z.parseJson(null == n ? void 0 : n.toastJson),
                  o =
                    n &&
                    (0, i.Z)(
                      (0, i.Z)({}, n),
                      {},
                      {
                        _jsonInfo: r
                          ? (0, i.Z)((0, i.Z)({}, r), {}, { _codeName: e })
                          : null,
                      }
                    );
                return (
                  o && console.log("Octopus---\x3egetToastByCode--\x3eres:", o),
                  o
                );
              },
            },
          ]),
          e
        );
      })();
    },
    12806: function (e, t, n) {
      "use strict";
      n.d(t, {
        Kt: function () {
          return s;
        },
        Pu: function () {
          return d;
        },
        T2: function () {
          return m;
        },
        Xn: function () {
          return _;
        },
        ad: function () {
          return v;
        },
        dq: function () {
          return p;
        },
        jm: function () {
          return g;
        },
        k7: function () {
          return h;
        },
        lv: function () {
          return f;
        },
        q3: function () {
          return y;
        },
      });
      var r = n(90129),
        i = n(79301),
        o = n(95308),
        a = n(8271),
        c = n.n(a),
        u = n(58374),
        l = (n(82750), n(10655)),
        s = (function () {
          var e = (0, o.Z)(
            (0, i.Z)().mark(function e(t) {
              var n, r, o, a, c;
              return (0, i.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.login12306Name),
                        (r = void 0 === n ? "" : n),
                        (o = t.login12306Pas),
                        (a = void 0 === o ? "" : o),
                        (c = { login12306Name: "", login12306Pas: "" }),
                        r || a)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", c);
                    case 4:
                      return (e.next = 6), (0, l.K)(r);
                    case 6:
                      if (((c.login12306Name = e.sent), !a)) {
                        e.next = 13;
                        break;
                      }
                      return (e.next = 10), (0, l.K)(a);
                    case 10:
                      (e.t0 = e.sent), (e.next = 14);
                      break;
                    case 13:
                      e.t0 = "";
                    case 14:
                      return (c.login12306Pas = e.t0), e.abrupt("return", c);
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
        })(),
        d = function (e, t) {
          return (
            !(!e || !t) &&
            e.arriveStation === t.arriveStation &&
            e.departStation === t.departStation &&
            e.trainNumber === t.trainNumber
          );
        },
        f = function (e) {
          var t,
            n =
              (null === (t = e.countryFlag) || void 0 === t
                ? void 0
                : t.split(",")) || [],
            i = (0, r.Z)(n, 2),
            o = i[0],
            a = void 0 === o ? "CHN" : o,
            c = i[1],
            u = void 0 === c ? "CHN" : c,
            l = e.TrainNumber || e.trainNum || e.trainNumber || e.code,
            s = e.ArriveStation || e.arriveStation || e.to_name,
            d = e.DepartStation || e.departStation || e.from_name,
            f = e.DepartTime || e.departTime || e.departure_time,
            p = e.ArriveTime || e.arriveTime || e.arrival_time,
            h = e.SeatList || e.seatList || e.seats || e.seatInfoList,
            g =
              null == h
                ? void 0
                : h.map(function (e) {
                    return {
                      name: e.seatName || e.SeatName || e.name || e.seatType,
                      price:
                        e.berthPrice || e.seatPrice || e.SeatPrice || e.price,
                      showPrice:
                        e.showSeatPrice || e.ShowSeatPrice || e.showPrice,
                    };
                  });
          return (
            console.log(
              "isCrossBorder: fromCountry !== toCountry,",
              e,
              a !== u
            ),
            {
              trainNumber: l,
              departStation: d,
              arriveStation: s,
              departTime: f,
              arriveTime: p,
              seatList: g,
              isCrossBorder: e.is_cross_border || a !== u,
            }
          );
        },
        p = function (e) {
          var t;
          return {
            TrainNumber: e.trainNumber,
            SeatList:
              null === (t = e.seatList) || void 0 === t
                ? void 0
                : t.map(function (e) {
                    return {
                      SeatName: e.name,
                      SeatPrice: e.price,
                      ShowSeatPrice: e.showPrice,
                    };
                  }),
          };
        },
        h = 60,
        g = function (e) {
          var t = c()(),
            n = c()(e).subtract(5, "day"),
            r = c()(e).add(5, "day");
          if (t.isAfter(n, "YYYY-MM-DD")) {
            var i = t.diff(n, "day");
            (n = t), (r = r.add(i, "day"));
          }
          return {
            calendarStartDate: n.format("YYYY-MM-DD"),
            calendarEndDate: r.format("YYYY-MM-DD"),
          };
        },
        v = function (e) {
          var t = [];
          return (
            e.map(function (e) {
              e.seatList &&
                e.seatList.length > 0 &&
                e.seatList.map(function (n) {
                  t.push({
                    seatName: n.name,
                    price: n.price || n.showPrice,
                    code: e.trainNumber,
                  });
                });
            }),
            (t = t
              .sort(function (e, t) {
                return e.price - t.price;
              })
              .reduce(function (e, t) {
                if (0 === e.length) e.push(t);
                else {
                  for (var n = 0; n < e.length; n++)
                    if (e[n].seatName === t.seatName) {
                      e[n].price < t.price && (e[n].price = t.price);
                      break;
                    }
                  n >= e.length && e.push(t);
                }
                return e;
              }, []))
          );
        },
        m = (function () {
          var e = (0, o.Z)(
            (0, i.Z)().mark(function e(t) {
              var n, r, o, a, c, l, d, f, p;
              return (0, i.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.oid),
                          (r = t.operateResult),
                          (o = t.operateResultMsg),
                          (a = void 0 === o ? "" : o),
                          (c = t.login12306Name),
                          (l = t.login12306Pas),
                          (d = t.operateType),
                          (e.prev = 1),
                          (e.next = 4),
                          s({ login12306Name: c, login12306Pas: l })
                        );
                      case 4:
                        return (
                          (f = e.sent),
                          (p = {
                            orderNumber: n,
                            operateType: d,
                            operateResult: r,
                            operateResultMsg: a,
                            userT6LoginName: c,
                            userT6LoginPsw: f.login12306Pas,
                          }),
                          (e.next = 8),
                          (0, u.pZ)(p)
                        );
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(1)), console.log(e.t0);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 10]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        _ = function (e, t, n) {
          var r = t[0],
            i = t.map(function (e) {
              return {
                departStation: e.departStation || "",
                arriveStation: e.arriveStation || "",
                departTime: e.departTime || "",
                arriveTime: e.arriveTime || "",
                trainNumber: e.trainNumber || "",
              };
            });
          return {
            trainNo:
              t
                .map(function (e) {
                  return e.trainNumber;
                })
                .join(",") || "",
            seatName: n.join(",") || "",
            fromName: r.departStation || "",
            toName: r.arriveStation || "",
            fromDate: e.join(",") || "",
            mainFromTime: r.departTime || "",
            mainToTime: r.arriveTime || "",
            trainStationInfos: i,
          };
        },
        y = function (e, t) {
          return t.filter(function (t) {
            return e.some(function (e) {
              return e.seatList.some(function (e) {
                return e.name === t;
              });
            });
          });
        };
    },
    82955: function (e, t, n) {
      "use strict";
      var r = n(8271),
        i = n.n(r),
        o = "YYYY-MM-DD",
        a = function (e) {
          return !Array.isArray(e) || e.length <= 0;
        },
        c = function (e, t) {
          if (!e || !t) return 0;
          var n = new Date(e).getTime();
          return (new Date(t).getTime() - n) / 864e5;
        },
        u = function (e) {
          return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
            i()(e).format("d")
          ];
        };
      t.Z = {
        isEmptyObject: function (e) {
          if (!e) return !0;
          var t;
          for (t in e) return !1;
          return !0;
        },
        isEmptyArray: a,
        formatPhoneList: function (e) {
          return a(e)
            ? null
            : e.map(function (e, t) {
                return (
                  (e = (e = Object.values(e)[0]).replace(/-| /g, "")).length >
                    11 && (e = e.substr(-11, 11)),
                  { key: t + "", val: e, id: e }
                );
              });
        },
        isValidPhoneNumber: function (e) {
          if (!e) return !1;
          var t = e.replace(/[-\s]/g, "");
          return !!/^1\d{10}$/.test(t);
        },
        getDayDiff: c,
        getWeekDayDesc: function (e) {
          var t = c(i()().format("YYYY-MM-DD"), e);
          return 0 === t ? "今天" : 1 === t ? "明天" : 2 === t ? "后天" : u(e);
        },
        getWeekDay: u,
        throttle: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 800,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : function () {},
            r = 0;
          return function () {
            for (
              var i = this,
                o = Date.now(),
                a = arguments.length,
                c = new Array(a),
                u = 0;
              u < a;
              u++
            )
              c[u] = arguments[u];
            o - r > t ? (e.apply(i, c), (r = o)) : n.apply(i, c);
          };
        },
        isExceed24Hours: function (e) {
          return !!i()().subtract(24, "hour").isAfter(i()(e));
        },
        formatDate: function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
          return e ? i()(e).format(t) : "";
        },
        parseJson: function (e) {
          try {
            return "string" != typeof e ? e : JSON.parse(e);
          } catch (t) {
            return e;
          }
        },
      };
    },
    58374: function (e, t, n) {
      "use strict";
      n.d(t, {
        $q: function () {
          return C;
        },
        AS: function () {
          return F;
        },
        Af: function () {
          return d;
        },
        Ep: function () {
          return u;
        },
        F1: function () {
          return o;
        },
        GD: function () {
          return R;
        },
        Hi: function () {
          return a;
        },
        KT: function () {
          return l;
        },
        L5: function () {
          return B;
        },
        Li: function () {
          return y;
        },
        QI: function () {
          return b;
        },
        SK: function () {
          return N;
        },
        Sf: function () {
          return I;
        },
        U2: function () {
          return D;
        },
        U6: function () {
          return P;
        },
        Wu: function () {
          return x;
        },
        XO: function () {
          return Z;
        },
        Xr: function () {
          return s;
        },
        Y3: function () {
          return O;
        },
        YN: function () {
          return k;
        },
        Yc: function () {
          return E;
        },
        fs: function () {
          return c;
        },
        gN: function () {
          return _;
        },
        jU: function () {
          return w;
        },
        kc: function () {
          return f;
        },
        lR: function () {
          return g;
        },
        mB: function () {
          return A;
        },
        pZ: function () {
          return m;
        },
        qH: function () {
          return S;
        },
        rr: function () {
          return L;
        },
        sj: function () {
          return V;
        },
        uE: function () {
          return T;
        },
        uI: function () {
          return p;
        },
        xU: function () {
          return h;
        },
        xv: function () {
          return v;
        },
      });
      var r = n(1112),
        i = n(23577),
        o = (0, r.Z)({ serviceCode: "22867", path: "trainStopList" }),
        a = (0, r.Z)({
          serviceCode: "16312",
          channel: i.Z.train_channel,
          path: "grabCandidatePageInfo",
        }),
        c = (0, r.Z)({
          serviceCode: "22867",
          channel: i.Z.train_channel,
          path: "syncT6CandidateInfo",
        }),
        u = (0, r.Z)({
          serviceCode: "19480",
          path: "CreateGrabOrder",
          channel: i.Z.train_channel,
        }),
        l = (0, r.Z)({
          serviceCode: "19480",
          path: "grabCandidateDetailPageInfo",
          channel: i.Z.train_channel,
          correctVersion: "710014",
        }),
        s = (0, r.Z)({
          serviceCode: "19480",
          path: "createGrabOrder",
          channel: i.Z.train_channel,
        }),
        d = (0, r.Z)({
          serviceCode: "17165",
          path: "queryMonitorOrder",
          channel: i.Z.train_channel,
        }),
        f = (0, r.Z)({
          serviceCode: "17165",
          path: "getPreCandidateInfo",
          channel: i.Z.train_channel,
        }),
        p = (0, r.Z)({
          serviceCode: "19480",
          path: "candidatePay",
          channel: i.Z.train_channel,
        }),
        h =
          ((0, r.Z)({
            serviceCode: "25122",
            path: "queryCandidateHoldSeat",
            channel: i.Z.train_channel,
          }),
          (0, r.Z)({
            serviceCode: "17165",
            path: "candidateUpgradePreInfo",
            channel: i.Z.train_channel,
          })),
        g = (0, r.Z)({
          serviceCode: "19480",
          path: "candidateUpgrade",
          channel: i.Z.train_channel,
        }),
        v =
          ((0, r.Z)({
            serviceCode: "19480",
            path: "getGrabOrderPayment",
            channel: i.Z.train_channel,
          }),
          (0, r.Z)({
            serviceCode: "19480",
            path: "GetGrabOrderDetail",
            channel: i.Z.train_channel,
          }),
          (0, r.Z)({
            serviceCode: "22867",
            path: "getTrainStationInfoList",
            channel: i.Z.train_channel,
          })),
        m = (0, r.Z)({
          serviceCode: "17165",
          path: "UserT6AccountOperateResultNotify",
          channel: i.Z.train_channel,
        }),
        _ = (0, r.Z)({
          serviceCode: "17276",
          path: "candidatePreCancel",
          channel: i.Z.train_channel,
        }),
        y = (0, r.Z)({
          serviceCode: "17276",
          path: "OrderCancelV1",
          channel: i.Z.train_channel,
        }),
        b = (0, r.Z)({
          serviceCode: "16312",
          path: "getUseLuckCodeInfo",
          channel: i.Z.train_channel,
        }),
        Z =
          ((0, r.Z)({ serviceCode: "19965", path: "getTrainWaitingSmartSeat" }),
          (0, r.Z)({
            serviceCode: "19965",
            path: "getSmartSchemeRecommendOptimize",
          })),
        C = (0, r.Z)({
          serviceCode: "24032",
          path: "trainCross",
          channel: i.Z.train_channel,
        }),
        w = (0, r.Z)({
          serviceCode: "16312",
          path: "getCrossStationsAndNearByStations",
          correctVersion: "996",
        }),
        N =
          ((0, r.Z)({
            serviceCode: "17914",
            path: "getTrainBookingProductInfo",
          }),
          (0, r.Z)({ serviceCode: "16367", path: "GetXProductBookingInfo" }),
          (0, r.Z)({
            serviceCode: "19480",
            path: "tupOrderDetail",
            channel: i.Z.train_channel,
          })),
        T =
          ((0, r.Z)({
            serviceCode: "17165",
            path: "tupAuthorize",
            channel: i.Z.train_channel,
          }),
          (0, r.Z)({
            serviceCode: "19480",
            path: "tupOrderList",
            channel: i.Z.train_channel,
          })),
        x = (0, r.Z)({
          serviceCode: "17165",
          path: "tupProducts",
          channel: i.Z.train_channel,
        }),
        S = (0, r.Z)({
          serviceCode: "19480",
          path: "GrabRescheduleForFree",
          channel: i.Z.train_channel,
        }),
        I = (0, r.Z)({
          serviceCode: "17276",
          path: "sync12306OrderInfo",
          channel: i.Z.train_channel,
        }),
        k = (0, r.Z)({
          serviceCode: "17276",
          path: "getTrainPaymentID",
          channel: i.Z.train_channel,
        }),
        R =
          ((0, r.Z)({ serviceCode: "16992", path: "SignCreditPay" }),
          (0, r.Z)({ serviceCode: "16992", path: "queryCreditPay" }),
          (0, r.Z)({
            serviceCode: "17276",
            path: "orderDeleteV1",
            channel: i.Z.train_channel,
          })),
        D = (0, r.Z)({
          serviceCode: "22867",
          path: "queryMemberPoint",
          channel: i.Z.train_channel,
        }),
        F = (0, r.Z)({
          serviceCode: "22867",
          path: "pointDetailQuery",
          channel: i.Z.train_channel,
        }),
        P = (0, r.Z)({
          serviceCode: "17165",
          path: "deleteRecognizeOrder",
          channel: i.Z.train_channel,
          correctVersion: "710022",
        }),
        A = (0, r.Z)({
          serviceCode: "17165",
          path: "getCandidateRecognizeDetail",
          channel: i.Z.train_channel,
          correctVersion: "710022",
        }),
        B = (0, r.Z)({
          serviceCode: "22867",
          channel: i.Z.train_channel,
          path: "queryMemberInfo",
        }),
        E = (0, r.Z)({
          serviceCode: "17165",
          channel: i.Z.train_channel,
          path: "querySelfTicketOrderList",
        }),
        V = (0, r.Z)({
          serviceCode: "17165",
          channel: i.Z.train_channel,
          path: "querySelfTicketOrder",
        }),
        L = (0, r.Z)({
          serviceCode: "16903",
          channel: i.Z.train_channel,
          path: "orderAccelerate",
        }),
        O = (0, r.Z)({
          serviceCode: "17165",
          channel: i.Z.train_channel,
          path: "checkRepeatGrabOrder",
          correctVersion: "986",
        });
    },
    62901: function (e, t, n) {
      "use strict";
      n.d(t, {
        Hj: function () {
          return i;
        },
        Xi: function () {
          return r;
        },
        cq: function () {
          return a;
        },
        uD: function () {
          return o;
        },
      });
      var r = "STORAGE_SHARE_REWARD_SHOW",
        i = "STORAGE_DETAIL_SHARE_REWARD_SHOW",
        o = "CANDIDATE_UPDATE_ORDER_NUMBER_SHOW",
        a = "REMAIN_TICKET_MONITOR_CACHE";
    },
    61885: function (e, t, n) {
      "use strict";
      n.d(t, {
        LH: function () {
          return v;
        },
        OS: function () {
          return m;
        },
        T8: function () {
          return f;
        },
        ZO: function () {
          return g;
        },
        kO: function () {
          return p;
        },
        uq: function () {
          return h;
        },
      });
      var r = n(79301),
        i = n(95308),
        o = n(298),
        a = n(92954),
        c = n.n(a),
        u = n(49120),
        l = n(25391),
        s = n(70273),
        d = n(97939);
      function f(e) {
        (0, u.getCurrentPage)().navigateTo(e);
      }
      var p = function (e) {
          var t = e.departStation,
            n = e.arriveStation,
            r = e.trainNo,
            i = e.departDate,
            o = e.seatName,
            a = e.fromPage,
            u = void 0 === a ? "" : a;
          c().navigateTo({
            url: ""
              .concat(l.ZP.getTrainBookingUrl(), "?dstation=")
              .concat(t, "&astation=")
              .concat(n, "&trainName=")
              .concat(r, "&ddate=")
              .concat(i, "&seat=")
              .concat(o, "&fromPage=")
              .concat(u || ""),
          });
        },
        h = function (e) {
          f({ url: (0, s.j)(), data: { schemeInfoV1: encodeURIComponent(e) } });
        },
        g = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
          return new Promise(function (n, r) {
            try {
              n(
                (0, u.getCurrentPage)().navigateToAsync({
                  url: "/pages/12306/login/login",
                  ignoreError: !(null == e || !e.ignoreError),
                  data: (0, o.Z)(
                    (0, o.Z)({ isHideRegister: !0 }, e),
                    {},
                    { fromPage: t }
                  ),
                })
              );
            } catch (e) {
              r(e);
            }
          });
        },
        v = function (e) {
          c().navigateTo({
            url:
              l.ZP.getTrainDetailUrl(e.orderNumber) +
              "&fromPage=".concat(e.fromPage),
          });
        },
        m = function (e, t) {
          return new Promise(
            (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e(n) {
                  var i, o, a, c, u, l;
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (0, d.kx)({
                                faceInfo: {
                                  fromType: 6,
                                  userName: null == t ? void 0 : t.userName,
                                  certificationInfo: JSON.stringify({
                                    name:
                                      null == t ||
                                      null === (i = t.selfPassenger) ||
                                      void 0 === i
                                        ? void 0
                                        : i.PassengerName,
                                    passportType:
                                      null == t ||
                                      null === (o = t.selfPassenger) ||
                                      void 0 === o
                                        ? void 0
                                        : o.IDType,
                                    passportNumber:
                                      null == t ||
                                      null === (a = t.selfPassenger) ||
                                      void 0 === a
                                        ? void 0
                                        : a.IDNo,
                                    mobile: null == t ? void 0 : t.mobile,
                                  }),
                                  failAction: "return",
                                },
                                title: "铁路局规定",
                                subTitle: "刷脸认证后即可开通查看本人车票功能",
                                useName:
                                  null == t ||
                                  null === (c = t.selfPassenger) ||
                                  void 0 === c
                                    ? void 0
                                    : c.PassengerName,
                              })
                            );
                          case 3:
                            (u = e.sent),
                              (l = u.res),
                              n({
                                code: 1 === l.certificationResultCode ? 1 : 0,
                              }),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8), (e.t0 = e.catch(0)), n({ code: 0 });
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          );
        };
    },
  },
]);
