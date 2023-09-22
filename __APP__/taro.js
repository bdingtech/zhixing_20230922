(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [19559],
  {
    99671: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return k;
        },
      });
      var r = n(93212),
        i = n(32180),
        o = n(298),
        a = n(57042),
        u = n(24460),
        s = n(45023);
      function c(e) {
        return "function" == typeof e;
      }
      function l(e) {
        return void 0 === e;
      }
      function d(e) {
        return e && "object" === (0, r.Z)(e);
      }
      var f = function (e) {
        return !d(e);
      };
      function h(e) {
        throw new TypeError(e);
      }
      c(Object.assign) ||
        (Object.assign = function (e) {
          null == e && h("Cannot convert undefined or null to object");
          for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (null != r)
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
        c(Object.defineProperties) ||
          (Object.defineProperties = function (e, t) {
            function n(e) {
              function t(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }
              f(e) && h("bad desc");
              var n = {};
              if (
                (t(e, "enumerable") && (n.enumerable = !!e.enumerable),
                t(e, "configurable") && (n.configurable = !!e.configurable),
                t(e, "value") && (n.value = e.value),
                t(e, "writable") && (n.writable = !!e.writable),
                t(e, "get"))
              ) {
                var r = e.get;
                c(r) || l(r) || h("bad get"), (n.get = r);
              }
              if (t(e, "set")) {
                var i = e.set;
                c(i) || l(i) || h("bad set"), (n.set = i);
              }
              return (
                ("get" in n || "set" in n) &&
                  ("value" in n || "writable" in n) &&
                  h("identity-confused descriptor"),
                n
              );
            }
            f(e) && h("bad obj"), (t = Object(t));
            for (var r = Object.keys(t), i = [], o = 0; o < r.length; o++)
              i.push([r[o], n(t[r[o]])]);
            for (var a = 0; a < i.length; a++)
              Object.defineProperty(e, i[a][0], i[a][1]);
            return e;
          });
      var p = {
          WEAPP: "WEAPP",
          WEB: "WEB",
          RN: "RN",
          SWAN: "SWAN",
          ALIPAY: "ALIPAY",
          TT: "TT",
          QQ: "QQ",
          JD: "JD",
        },
        v = (function () {
          function e(t, n, r) {
            (0, a.Z)(this, e),
              (this.index = r || 0),
              (this.requestParams = t),
              (this.interceptors = n || []);
          }
          return (
            (0, u.Z)(e, [
              {
                key: "proceed",
                value: function (e) {
                  if (
                    ((this.requestParams = e),
                    this.index >= this.interceptors.length)
                  )
                    throw new Error(
                      "chain 参数错误, 请勿直接修改 request.chain"
                    );
                  var t = this._getNextInterceptor()(this._getNextChain()),
                    n = t.catch(function (e) {
                      return Promise.reject(e);
                    });
                  return (
                    Object.keys(t).forEach(function (e) {
                      return c(t[e]) && (n[e] = t[e]);
                    }),
                    n
                  );
                },
              },
              {
                key: "_getNextInterceptor",
                value: function () {
                  return this.interceptors[this.index];
                },
              },
              {
                key: "_getNextChain",
                value: function () {
                  return new e(
                    this.requestParams,
                    this.interceptors,
                    this.index + 1
                  );
                },
              },
            ]),
            e
          );
        })(),
        g = (function () {
          function e(t) {
            (0, a.Z)(this, e),
              (this.taroInterceptor = t),
              (this.chain = new v());
          }
          return (
            (0, u.Z)(e, [
              {
                key: "request",
                value: function (e) {
                  var t = this.chain,
                    n = this.taroInterceptor;
                  return (
                    (t.interceptors = t.interceptors
                      .filter(function (e) {
                        return e !== n;
                      })
                      .concat(n)),
                    t.proceed((0, o.Z)({}, e))
                  );
                },
              },
              {
                key: "addInterceptor",
                value: function (e) {
                  this.chain.interceptors.push(e);
                },
              },
              {
                key: "cleanInterceptors",
                value: function () {
                  this.chain = new v();
                },
              },
            ]),
            e
          );
        })(),
        m = Object.freeze({
          __proto__: null,
          timeoutInterceptor: function (e) {
            var t,
              n = e.requestParams,
              r = new Promise(function (r, i) {
                var o = setTimeout(function () {
                  (o = null), i(new Error("网络链接超时,请稍后再试！"));
                }, (n && n.timeout) || 6e4);
                (t = e.proceed(n))
                  .then(function (e) {
                    o && (clearTimeout(o), r(e));
                  })
                  .catch(function (e) {
                    o && clearTimeout(o), i(e);
                  });
              });
            return !l(t) && c(t.abort) && (r.abort = t.abort), r;
          },
          logInterceptor: function (e) {
            var t = e.requestParams;
            t.method, t.data, t.url;
            var n = e.proceed(t),
              r = n.then(function (e) {
                return e;
              });
            return c(n.abort) && (r.abort = n.abort), r;
          },
        }),
        b = { 640: 1.17, 750: 1, 828: 0.905 };
      function y(e) {
        return function (t) {
          var n = t.designWidth,
            r = void 0 === n ? 750 : n,
            i = t.deviceRatio,
            o = void 0 === i ? b : i,
            a = t.baseFontSize,
            u = void 0 === a ? 20 : a;
          (e.config = e.config || {}),
            (e.config.designWidth = r),
            (e.config.deviceRatio = o),
            (e.config.baseFontSize = u);
        };
      }
      var k = {
        Behavior: function (e) {
          return e;
        },
        getEnv: function () {
          return p.WEAPP;
        },
        ENV_TYPE: p,
        Link: g,
        interceptors: m,
        Current: i.Current,
        getCurrentInstance: i.getCurrentInstance,
        options: i.options,
        nextTick: i.nextTick,
        eventCenter: i.eventCenter,
        Events: i.Events,
        getInitPxTransform: y,
      };
      (k.initPxTransform = y(k)),
        (k.preload = (function (e) {
          return function (t, n) {
            e.preloadData = d(t) ? t : (0, s.Z)({}, t, n);
          };
        })(i.Current)),
        (k.pxTransform = (function (e) {
          return function (t) {
            var n = e.config || {},
              r = n.designWidth,
              i = void 0 === r ? 750 : r,
              o = n.deviceRatio,
              a = void 0 === o ? b : o;
            if (!(i in a))
              throw new Error(
                "deviceRatio 配置中不存在 ".concat(i, " 的设置！")
              );
            return parseInt(t, 10) * a[i] + "rpx";
          };
        })(k));
    },
    88744: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ox: function () {
          return H;
        },
      });
      var r = n(45023),
        i = n(90129),
        o = n(81876),
        a = n(57042),
        u = n(24460),
        s = n(21867),
        c = n(86066),
        l = n(22276),
        d = n(59820),
        f = n(32180),
        h = { PageContext: d.kT, R: d.kT },
        p = "taro-app";
      function v(e, t) {
        var n,
          r = t.prototype;
        return (
          !(null === (n = t.displayName) || void 0 === n
            ? void 0
            : n.includes("Connect")) &&
          ((0, d.mf)(t.render) ||
            !!(null == r ? void 0 : r.isReactComponent) ||
            r instanceof e.Component)
        );
      }
      function g(e) {
        return (e.writable = !0), (e.enumerable = !0), e;
      }
      function m(e) {
        f.Current.router = Object.assign(
          { params: null == e ? void 0 : e.query },
          e
        );
      }
      var b,
        y,
        k = function (e) {
          return function (t) {
            var n = h.R,
              r = h.PageContext,
              i = n.useContext(r) || p,
              o = n.useRef(),
              a = n.useRef(t);
            a.current !== t && (a.current = t),
              n.useLayoutEffect(function () {
                var t = (o.current = (0, f.getPageInstance)(i)),
                  n = !1;
                t ||
                  ((n = !0),
                  (o.current = Object.create(null)),
                  (t = o.current));
                var r = function () {
                  return a.current.apply(a, arguments);
                };
                return (
                  (0, d.mf)(t[e])
                    ? (t[e] = [t[e], r])
                    : (t[e] = [].concat((0, l.Z)(t[e] || []), [r])),
                  n && (0, f.injectPageInstance)(t, i),
                  function () {
                    var t = o.current;
                    if (t) {
                      var n = t[e];
                      n === r
                        ? (t[e] = void 0)
                        : (0, d.kJ)(n) &&
                          (t[e] = n.filter(function (e) {
                            return e !== r;
                          })),
                        (o.current = void 0);
                    }
                  }
                );
              }, []);
          };
        },
        w = k("componentDidHide"),
        S = k("componentDidShow"),
        P = k("onError"),
        C = k("onLaunch"),
        T = k("onPageNotFound"),
        x = k("onLoad"),
        E = k("onPageScroll"),
        A = k("onPullDownRefresh"),
        O = k("onPullIntercept"),
        N = k("onReachBottom"),
        L = k("onResize"),
        I = k("onUnload"),
        j = k("onAddToFavorites"),
        Z = k("onOptionMenuClick"),
        B = k("onSaveExitState"),
        _ = k("onShareAppMessage"),
        M = k("onShareTimeline"),
        D = k("onTitleClick"),
        R = k("onReady"),
        F = k("onTabItemTap"),
        U = Object.freeze({
          __proto__: null,
          useDidHide: w,
          useDidShow: S,
          useError: P,
          useLaunch: C,
          usePageNotFound: T,
          useLoad: x,
          usePageScroll: E,
          usePullDownRefresh: A,
          usePullIntercept: O,
          useReachBottom: N,
          useResize: L,
          useUnload: I,
          useAddToFavorites: j,
          useOptionMenuClick: Z,
          useSaveExitState: B,
          useShareAppMessage: _,
          useShareTimeline: M,
          useTitleClick: D,
          useReady: R,
          useRouter: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = h.R;
            return e
              ? f.Current.router
              : t.useMemo(function () {
                  return f.Current.router;
                }, []);
          },
          useTabItemTap: F,
          useScope: function () {},
        }),
        W = (0, f.incrementId)();
      function z(e) {
        d.PT.tap("getLifecycle", function (e, t) {
          return e[(t = t.replace(/^on(Show|Hide)$/, "componentDid$1"))];
        }),
          d.PT.tap("modifyMpEvent", function (e) {
            e.type = e.type.replace(/-/g, "");
          }),
          d.PT.tap("batchedEventUpdates", function (t) {
            e.unstable_batchedUpdates(t);
          }),
          d.PT.tap("mergePageInstance", function (e, t) {
            e &&
              t &&
              ("constructor" in e ||
                Object.keys(e).forEach(function (n) {
                  var r = e[n],
                    i = (function (e) {
                      return (0, d.kJ)(e) ? e : e ? [e] : [];
                    })(t[n]);
                  t[n] = i.concat(r);
                }));
          });
      }
      function V(e, t) {
        return function (n) {
          var r = function (e) {
              return e && (0, f.injectPageInstance)(e, t);
            },
            i = v(e, n)
              ? { ref: r }
              : { forwardedRef: r, reactReduxForwardedRef: r };
          return (
            h.PageContext === d.kT && (h.PageContext = e.createContext("")),
            (function (e) {
              (0, s.Z)(o, e);
              var r = (0, c.Z)(o);
              function o() {
                var e;
                return (
                  (0, a.Z)(this, o),
                  ((e = r.apply(this, arguments)).state = { hasError: !1 }),
                  e
                );
              }
              return (
                (0, u.Z)(
                  o,
                  [
                    { key: "componentDidCatch", value: function (e, t) {} },
                    {
                      key: "render",
                      value: function () {
                        var e = this.state.hasError
                          ? []
                          : b(
                              h.PageContext.Provider,
                              { value: t },
                              b(
                                n,
                                Object.assign(Object.assign({}, this.props), i)
                              )
                            );
                        return b("root", { id: t }, e);
                      },
                    },
                  ],
                  [
                    {
                      key: "getDerivedStateFromError",
                      value: function (e) {
                        var t, n;
                        return (
                          null ===
                            (n =
                              null === (t = f.Current.app) || void 0 === t
                                ? void 0
                                : t.onError) ||
                            void 0 === n ||
                            n.call(t, e.message + e.stack),
                          { hasError: !0 }
                        );
                      },
                    },
                  ]
                ),
                o
              );
            })(e.Component)
          );
        };
      }
      function H(e, t, n, l) {
        var k;
        (h.R = t), (b = t.createElement), (y = n), t.Fragment;
        var w,
          S,
          P = t.createRef(),
          C = v(t, e),
          T = new Promise(function (e) {
            return (S = e);
          });
        function x() {
          return P.current;
        }
        z(y);
        var E = (function (n) {
          (0, s.Z)(i, n);
          var r = (0, c.Z)(i);
          function i(e) {
            var t;
            return (
              (0, a.Z)(this, i),
              ((t = r.call(this, e)).pages = []),
              (t.elements = []),
              (w = (0, o.Z)(t)),
              S((0, o.Z)(t)),
              t
            );
          }
          return (
            (0, u.Z)(i, [
              {
                key: "mount",
                value: function (e, n, r) {
                  var i = V(t, n)(e),
                    o = n + W();
                  this.pages.push(function () {
                    return b(i, { key: o, tid: n });
                  }),
                    this.forceUpdate(r);
                },
              },
              {
                key: "unmount",
                value: function (e, t) {
                  var n = this.elements,
                    r = n.findIndex(function (t) {
                      return t.props.tid === e;
                    });
                  n.splice(r, 1), this.forceUpdate(t);
                },
              },
              {
                key: "render",
                value: function () {
                  for (var t = this.pages, n = this.elements; t.length > 0; ) {
                    var r = t.pop();
                    n.push(r());
                  }
                  var i = null;
                  return C && (i = { ref: P }), b(e, i, n.slice());
                },
              },
            ]),
            i
          );
        })(t.Component);
        !(function () {
          var e,
            n,
            r = f.document.getElementById("app");
          if ((t.version || "").startsWith("18")) {
            var i = y.createRoot(r);
            null === (e = i.render) || void 0 === e || e.call(i, b(E));
          } else null === (n = y.render) || void 0 === n || n.call(y, b(E), r);
        })();
        var A = (0, i.Z)(d.PT.call("getMiniLifecycleImpl").app, 3),
          O = A[0],
          N = A[1],
          L = A[2],
          I = Object.create(
            {
              render: function (e) {
                w.forceUpdate(e);
              },
              mount: function (e, t, n) {
                w
                  ? w.mount(e, t, n)
                  : T.then(function (r) {
                      return r.mount(e, t, n);
                    });
              },
              unmount: function (e, t) {
                w.unmount(e, t);
              },
            },
            ((k = { config: g({ configurable: !0, value: l }) }),
            (0, r.Z)(
              k,
              O,
              g({
                value: function (e) {
                  var t = this;
                  m(e);
                  var n = function () {
                    var n,
                      r = x();
                    if (((t.$app = r), r)) {
                      if (r.taroGlobalData) {
                        var i = r.taroGlobalData,
                          o = Object.keys(i),
                          a = Object.getOwnPropertyDescriptors(i);
                        o.forEach(function (e) {
                          Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            get: function () {
                              return i[e];
                            },
                            set: function (t) {
                              i[e] = t;
                            },
                          });
                        }),
                          Object.defineProperties(t, a);
                      }
                      null === (n = r.onLaunch) || void 0 === n || n.call(r, e);
                    }
                    j("onLaunch", e);
                  };
                  w
                    ? n()
                    : T.then(function () {
                        return n();
                      });
                },
              })
            ),
            (0, r.Z)(
              k,
              N,
              g({
                value: function (e) {
                  var t;
                  m(e);
                  var n = x();
                  null === (t = null == n ? void 0 : n.componentDidShow) ||
                    void 0 === t ||
                    t.call(n, e),
                    j("onShow", e);
                },
              })
            ),
            (0, r.Z)(
              k,
              L,
              g({
                value: function () {
                  var e,
                    t = x();
                  null === (e = null == t ? void 0 : t.componentDidHide) ||
                    void 0 === e ||
                    e.call(t),
                    j("onHide");
                },
              })
            ),
            (0, r.Z)(
              k,
              "onError",
              g({
                value: function (e) {
                  var t,
                    n = x();
                  null === (t = null == n ? void 0 : n.onError) ||
                    void 0 === t ||
                    t.call(n, e),
                    j("onError", e);
                },
              })
            ),
            (0, r.Z)(
              k,
              "onPageNotFound",
              g({
                value: function (e) {
                  var t,
                    n = x();
                  null === (t = null == n ? void 0 : n.onPageNotFound) ||
                    void 0 === t ||
                    t.call(n, e),
                    j("onPageNotFound", e);
                },
              })
            ),
            k)
          );
        function j(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var i = (0, f.getPageInstance)(p);
          if (i) {
            var o = x(),
              a = d.PT.call("getLifecycle", i, e);
            Array.isArray(a) &&
              a.forEach(function (e) {
                return e.apply(o, n);
              });
          }
        }
        return (f.Current.app = I), I;
      }
      (0, f.incrementId)(),
        d.PT.tap("initNativeApi", function (e) {
          for (var t in U) e[t] = U[t];
        });
      var G = n(3974).YM,
        q = G.vnode,
        $ = G.diffed;
      (G.vnode = function (e) {
        var t = e.type,
          n = e.props,
          r = n;
        if ("string" == typeof t) {
          for (var i in ((r = {}), n)) {
            var o = n[i];
            /^on/.test(i) && (i = i.toLowerCase()),
              "map" !== t || "onregionchange" !== i
                ? (r[i] = o)
                : ((r.onbegin = o), (r.onend = o));
          }
          e.props = r;
        }
        q && q(e);
      }),
        (G.diffed = function (e) {
          var t = e._dom,
            n = e.props;
          if (t)
            for (var r in n) {
              var i = n[r];
              !1 === i && void 0 === t.props[r] && t.setAttribute(r, i);
            }
          $ && $(e);
        }),
        d.PT.tap("modifyMpEvent", function (e) {
          var t = e.type;
          "tap" === t
            ? (e.type = "click")
            : "focus" === t
            ? (e.type = "focusin")
            : "blur" === t && (e.type = "focusout");
        });
    },
    96440: function (e, t, n) {
      "use strict";
      var r = n(45023),
        i = n(90129),
        o = n(59820);
      function a(e) {
        return function (t, n) {
          var r = t.toLowerCase();
          if (r in e) {
            var i = e[r];
            (0, o.HD)(i) ? (t = i) : ((t = i[0]), (n = i[1][n] || n));
          }
          return [t, n];
        };
      }
      var u = new Set([
          "i",
          "abbr",
          "select",
          "acronym",
          "small",
          "bdi",
          "kbd",
          "strong",
          "big",
          "sub",
          "sup",
          "br",
          "mark",
          "meter",
          "template",
          "cite",
          "object",
          "time",
          "code",
          "output",
          "u",
          "data",
          "picture",
          "tt",
          "datalist",
          "var",
          "dfn",
          "del",
          "q",
          "em",
          "s",
          "embed",
          "samp",
          "b",
        ]),
        s = new Set([
          "body",
          "svg",
          "address",
          "fieldset",
          "li",
          "span",
          "article",
          "figcaption",
          "main",
          "aside",
          "figure",
          "nav",
          "blockquote",
          "footer",
          "ol",
          "details",
          "p",
          "dialog",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "pre",
          "dd",
          "header",
          "section",
          "div",
          "hgroup",
          "table",
          "dl",
          "hr",
          "ul",
          "dt",
          "view",
          "view-block",
        ]),
        c = new Map([
          ["slot", "slot"],
          ["form", "form"],
          ["iframe", "web-view"],
          ["img", "image"],
          ["audio", "audio"],
          ["video", "video"],
          ["canvas", "canvas"],
          [
            "a",
            {
              mapName: function (e) {
                return !e.href || /^javascript/.test(e.href)
                  ? "view"
                  : "navigator";
              },
              mapNameCondition: ["href"],
              mapAttr: a({
                href: "url",
                target: ["openType", { _blank: "navigate", _self: "redirect" }],
              }),
            },
          ],
          [
            "input",
            {
              mapName: function (e) {
                return "checkbox" === e.type
                  ? "checkbox"
                  : "radio" === e.type
                  ? "radio"
                  : "input";
              },
              mapNameCondition: ["type"],
              mapAttr: function (e, t, n) {
                var r = e.toLowerCase();
                return (
                  "autofocus" === r
                    ? (e = "focus")
                    : "readonly" === r
                    ? (!0 === n.disabled && (t = !0), (e = "disabled"))
                    : "type" === r &&
                      ("password" === t
                        ? ((e = "password"), (t = !0))
                        : "tel" === t && (t = "number")),
                  [e, t]
                );
              },
            },
          ],
          ["label", { mapName: "label", mapAttr: a({ htmlfor: "for" }) }],
          [
            "textarea",
            {
              mapName: "textarea",
              mapAttr: a({ autofocus: "focus", readonly: "disabled" }),
            },
          ],
          [
            "progress",
            {
              mapName: "progress",
              mapAttr: function (e, t, n) {
                if ("value" === e) {
                  var r = n.max || 1;
                  (e = "percent"), (t = Math.round((t / r) * 100));
                }
                return [e, t];
              },
            },
          ],
          [
            "button",
            {
              mapName: "button",
              mapAttr: function (e, t) {
                return (
                  "type" !== e ||
                    ("submit" !== t && "reset" !== t) ||
                    (e = "formType"),
                  [e, t]
                );
              },
            },
          ],
        ]);
      function l(e) {
        return !!(u.has(e) || s.has(e) || c.has(e));
      }
      function d(e, t) {
        if (u.has(e)) return "text";
        if (c.has(e)) {
          var n = c.get(e);
          if ((0, o.HD)(n)) return n;
          var r = n.mapName;
          return (0, o.mf)(r) ? r(t) : r;
        }
        return "view";
      }
      function f(e) {
        var t = c.get(e);
        if (!(0, o.HD)(t)) return null == t ? void 0 : t.mapAttr;
      }
      function h(e, t, n) {
        var r = c.get(e);
        if (r && !(0, o.HD)(r)) {
          var i = r.mapName,
            a = r.mapNameCondition;
          if (a) return a.indexOf(t) > -1 && !(0, o.HD)(i) ? i(n) : void 0;
        }
      }
      function p(e, t, n, r) {
        var i = h(e, t, n.props);
        if (i) {
          var o = r[i]._num;
          n.enqueueUpdate({ path: "".concat(n._path, ".", "nn"), value: o });
        }
      }
      function v(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = t.split(" "),
          r = "h5-".concat(e);
        return -1 === n.indexOf(r) && n.unshift(r), n.join(" ");
      }
      function g(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = t,
          r = e.width,
          i = e.height;
        return (
          r && (n = "width: ".concat(r, ";").concat(n)),
          i && (n = "height: ".concat(i, ";").concat(n)),
          n
        );
      }
      function m(e, t, n) {
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return e[n];
          },
          set: function (t) {
            e[n] = t;
          },
        });
      }
      o.PT.tap("modifyHydrateData", function (e) {
        var t = e.nn;
        if (l(t)) {
          e.nn = d(t, e);
          var n,
            o = f(t);
          if (o)
            for (var a in e) {
              var u = e[a],
                s = o(a, u, e),
                c = (0, i.Z)(s, 2),
                h = c[0],
                p = c[1];
              a !== h ? (delete e[a], (e[h] = p)) : u !== p && (e[a] = p);
            }
          "br" === t &&
            (e.cn = [
              ((n = {}), (0, r.Z)(n, "nn", "#text"), (0, r.Z)(n, "v", "\n"), n),
            ]),
            (e.cl = v(t, e.cl)),
            (e.st = g(e, e.st));
        }
      }),
        o.PT.tap("modifySetAttrPayload", function (e, t, n, r) {
          var o = e.nodeName,
            a = e._path,
            u = e.props;
          if (l(o)) {
            p(o, t, e, r);
            var s = r[d(o, u)],
              c = f(o);
            if (c) {
              var h = c(t, n.value, u),
                m = (0, i.Z)(h, 2),
                b = m[0],
                y = m[1];
              (n.path = "".concat(a, ".").concat(s[b] || b)), (n.value = y);
            }
            "cl" === t
              ? (n.value = v(o, n.value))
              : ("st" !== t && "width" !== t && "height" !== t) ||
                ((n.path = "".concat(a, ".", "st")),
                (n.value = g(u, e.style.cssText)));
          }
        }),
        o.PT.tap("modifyRmAttrPayload", function (e, t, n, r) {
          var o = e.nodeName,
            a = e._path,
            u = e.props;
          if (l(o)) {
            p(o, t, e, r);
            var s = r[d(o, u)],
              c = f(o);
            if (c) {
              var h = c(t, n[t], u),
                m = (0, i.Z)(h, 1)[0];
              n.path = "".concat(a, ".").concat(s[m] || m);
            }
            "cl" === t
              ? (n.value = v(o, n.value))
              : ("st" !== t && "width" !== t && "height" !== t) ||
                ((n.path = "".concat(a, ".", "st")),
                (n.value = g(u, e.style.cssText)));
          }
        }),
        o.PT.tap("onAddEvent", function (e, t, n, r) {
          l(r.nodeName) &&
            ("click" === e
              ? m(r.__handlers, e, "tap")
              : "input" === r.nodeName &&
                ("change" === e
                  ? "checkbox" === r.props.type || "radio" === r.props.type
                    ? m(r.__handlers, e, "tap")
                    : m(r.__handlers, e, "input")
                  : "keypress" === e && m(r.__handlers, e, "confirm")));
        }),
        o.PT.tap("modifyTaroEvent", function (e, t) {
          var n = t.nodeName,
            r = t.props;
          if (
            "input" === n &&
            "tap" === e.type &&
            ("checkbox" === r.type
              ? (r.checked = !r.checked)
              : "radio" !== r.type || r.checked || (r.checked = !0),
            e.mpEvent)
          ) {
            var i = e.mpEvent,
              o = i.currentTarget,
              a = i.target;
            (o.checked = r.checked), a.id === o.id && (a.checked = r.checked);
          }
        });
    },
    71515: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Ad: function () {
            return _;
          },
          AdCustom: function () {
            return Q;
          },
          Audio: function () {
            return N;
          },
          Block: function () {
            return D;
          },
          Button: function () {
            return s;
          },
          Camera: function () {
            return L;
          },
          Canvas: function () {
            return B;
          },
          Checkbox: function () {
            return c;
          },
          CheckboxGroup: function () {
            return l;
          },
          CoverImage: function () {
            return w;
          },
          CoverView: function () {
            return P;
          },
          CustomWrapper: function () {
            return U;
          },
          Editor: function () {
            return W;
          },
          Form: function () {
            return d;
          },
          FunctionalPageNavigator: function () {
            return V;
          },
          Icon: function () {
            return i;
          },
          Image: function () {
            return I;
          },
          Input: function () {
            return f;
          },
          KeyboardAccessory: function () {
            return ee;
          },
          Label: function () {
            return h;
          },
          LivePlayer: function () {
            return j;
          },
          LivePusher: function () {
            return H;
          },
          Map: function () {
            return R;
          },
          MatchMedia: function () {
            return z;
          },
          MovableArea: function () {
            return C;
          },
          MovableView: function () {
            return T;
          },
          NavigationBar: function () {
            return $;
          },
          Navigator: function () {
            return O;
          },
          OfficialAccount: function () {
            return G;
          },
          OpenData: function () {
            return q;
          },
          PageContainer: function () {
            return Y;
          },
          PageMeta: function () {
            return J;
          },
          Picker: function () {
            return p;
          },
          PickerView: function () {
            return v;
          },
          PickerViewColumn: function () {
            return g;
          },
          Progress: function () {
            return o;
          },
          Radio: function () {
            return m;
          },
          RadioGroup: function () {
            return b;
          },
          RichText: function () {
            return a;
          },
          RootPortal: function () {
            return te;
          },
          ScrollView: function () {
            return x;
          },
          ShareElement: function () {
            return X;
          },
          Slider: function () {
            return y;
          },
          Slot: function () {
            return F;
          },
          Swiper: function () {
            return E;
          },
          SwiperItem: function () {
            return A;
          },
          Switch: function () {
            return k;
          },
          Text: function () {
            return u;
          },
          Textarea: function () {
            return S;
          },
          Video: function () {
            return Z;
          },
          View: function () {
            return r;
          },
          VoipRoom: function () {
            return K;
          },
          WebView: function () {
            return M;
          },
        });
      var r = "view",
        i = "icon",
        o = "progress",
        a = "rich-text",
        u = "text",
        s = "button",
        c = "checkbox",
        l = "checkbox-group",
        d = "form",
        f = "input",
        h = "label",
        p = "picker",
        v = "picker-view",
        g = "picker-view-column",
        m = "radio",
        b = "radio-group",
        y = "slider",
        k = "switch",
        w = "cover-image",
        S = "textarea",
        P = "cover-view",
        C = "movable-area",
        T = "movable-view",
        x = "scroll-view",
        E = "swiper",
        A = "swiper-item",
        O = "navigator",
        N = "audio",
        L = "camera",
        I = "image",
        j = "live-player",
        Z = "video",
        B = "canvas",
        _ = "ad",
        M = "web-view",
        D = "block",
        R = "map",
        F = "slot",
        U = "custom-wrapper",
        W = "editor",
        z = "match-media",
        V = "functional-page-navigator",
        H = "live-pusher",
        G = "official-account",
        q = "open-data",
        $ = "navigation-bar",
        J = "page-meta",
        K = "voip-room",
        Q = "ad-custom",
        Y = "page-container",
        X = "share-element",
        ee = "keyboard-accessory",
        te = "root-portal";
    },
    17488: function (e, t, n) {
      "use strict";
      var r = n(59820),
        i = new Set([
          "authPrivateMessage",
          "disableAlertBeforeUnload",
          "enableAlertBeforeUnload",
          "getBackgroundFetchData",
          "getGroupEnterInfo",
          "getShareInfo",
          "getWeRunData",
          "join1v1Chat",
          "openVideoEditor",
          "saveFileToDisk",
          "scanItem",
          "setEnable1v1Chat",
          "setWindowSize",
          "sendBizRedPacket",
          "startFacialRecognitionVerify",
          "openCustomerServiceChat",
          "getLocalIPAddress",
          "getUserProfile",
          "editImage",
          "getFuzzyLocation",
          "cropImage",
        ]),
        o = "true",
        a = "false",
        u = "",
        s = "0",
        c = {
          Progress: {
            "border-radius": s,
            "font-size": "16",
            duration: "30",
            bindActiveEnd: u,
          },
          RichText: { space: u, "user-select": a },
          Text: { "user-select": a },
          Map: {
            polygons: "[]",
            subkey: u,
            rotate: s,
            skew: s,
            "max-scale": "20",
            "min-scale": "3",
            "enable-3D": a,
            "show-compass": a,
            "show-scale": a,
            "enable-overlooking": a,
            "enable-zoom": o,
            "enable-scroll": o,
            "enable-rotate": a,
            "enable-satellite": a,
            "enable-traffic": a,
            "enable-poi": o,
            "enable-building": o,
            setting: "[]",
            bindLabelTap: u,
            bindRegionChange: u,
            bindPoiTap: u,
            bindAnchorPointTap: u,
          },
          Button: {
            lang: "en",
            "session-from": u,
            "send-message-title": u,
            "send-message-path": u,
            "send-message-img": u,
            "app-parameter": u,
            "show-message-card": a,
            "business-id": u,
            bindGetUserInfo: u,
            bindContact: u,
            bindGetPhoneNumber: u,
            bindChooseAvatar: u,
            bindError: u,
            bindOpenSetting: u,
            bindLaunchApp: u,
          },
          Form: { "report-submit-timeout": s },
          Input: {
            "always-embed": a,
            "adjust-position": o,
            "hold-keyboard": a,
            "safe-password-cert-path": "",
            "safe-password-length": "",
            "safe-password-time-stamp": "",
            "safe-password-nonce": "",
            "safe-password-salt": "",
            "safe-password-custom-hash": "",
            "auto-fill": u,
            bindKeyboardHeightChange: u,
          },
          Picker: { "header-text": u },
          PickerView: {
            "immediate-change": a,
            bindPickStart: u,
            bindPickEnd: u,
          },
          Slider: { color: "'#e9e9e9'", "selected-color": "'#1aad19'" },
          Textarea: {
            "show-confirm-bar": o,
            "adjust-position": o,
            "hold-keyboard": a,
            "disable-default-padding": a,
            "confirm-type": "'return'",
            "confirm-hold": a,
            bindKeyboardHeightChange: u,
          },
          ScrollView: {
            "enable-flex": a,
            "scroll-anchoring": a,
            "refresher-enabled": a,
            "refresher-threshold": "45",
            "refresher-default-style": "'black'",
            "refresher-background": "'#FFF'",
            "refresher-triggered": a,
            enhanced: a,
            bounces: o,
            "show-scrollbar": o,
            "paging-enabled": a,
            "fast-deceleration": a,
            bindDragStart: u,
            bindDragging: u,
            bindDragEnd: u,
            bindRefresherPulling: u,
            bindRefresherRefresh: u,
            bindRefresherRestore: u,
            bindRefresherAbort: u,
          },
          Swiper: { "snap-to-edge": a, "easing-function": "'default'" },
          SwiperItem: { "skip-hidden-item-layout": a },
          Navigator: {
            target: "'self'",
            "app-id": u,
            path: u,
            "extra-data": u,
            version: "'version'",
          },
          Camera: {
            mode: "'normal'",
            resolution: "'medium'",
            "frame-size": "'medium'",
            bindInitDone: u,
            bindScanCode: u,
          },
          Image: { webp: a, "show-menu-by-longpress": a },
          LivePlayer: {
            mode: "'live'",
            "sound-mode": "'speaker'",
            "auto-pause-if-navigate": o,
            "auto-pause-if-open-native": o,
            "picture-in-picture-mode": "[]",
            bindstatechange: u,
            bindfullscreenchange: u,
            bindnetstatus: u,
            bindAudioVolumeNotify: u,
            bindEnterPictureInPicture: u,
            bindLeavePictureInPicture: u,
          },
          Video: {
            title: u,
            "play-btn-position": "'bottom'",
            "enable-play-gesture": a,
            "auto-pause-if-navigate": o,
            "auto-pause-if-open-native": o,
            "vslide-gesture": a,
            "vslide-gesture-in-fullscreen": o,
            "ad-unit-id": u,
            "poster-for-crawler": u,
            "show-casting-button": a,
            "picture-in-picture-mode": "[]",
            "enable-auto-rotation": a,
            "show-screen-lock-button": a,
            "show-snapshot-button": a,
            "show-background-playback-button": a,
            "background-poster": u,
            bindProgress: u,
            bindLoadedMetadata: u,
            bindControlsToggle: u,
            bindEnterPictureInPicture: u,
            bindLeavePictureInPicture: u,
            bindSeekComplete: u,
            bindAdLoad: u,
            bindAdError: u,
            bindAdClose: u,
            bindAdPlay: u,
          },
          Canvas: { type: u },
          Ad: { "ad-type": "'banner'", "ad-theme": "'white'" },
          CoverView: { "marker-id": u, slot: u },
          Editor: {
            "read-only": a,
            placeholder: u,
            "show-img-size": a,
            "show-img-toolbar": a,
            "show-img-resize": a,
            focus: a,
            bindReady: u,
            bindFocus: u,
            bindBlur: u,
            bindInput: u,
            bindStatusChange: u,
            name: u,
          },
          MatchMedia: {
            "min-width": u,
            "max-width": u,
            width: u,
            "min-height": u,
            "max-height": u,
            height: u,
            orientation: u,
          },
          FunctionalPageNavigator: {
            version: "'release'",
            name: u,
            args: u,
            bindSuccess: u,
            bindFail: u,
            bindCancel: u,
          },
          LivePusher: {
            url: u,
            mode: "'RTC'",
            autopush: a,
            muted: a,
            "enable-camera": o,
            "auto-focus": o,
            orientation: "'vertical'",
            beauty: s,
            whiteness: s,
            aspect: "'9:16'",
            "min-bitrate": "200",
            "max-bitrate": "1000",
            "audio-quality": "'high'",
            "waiting-image": u,
            "waiting-image-hash": u,
            zoom: a,
            "device-position": "'front'",
            "background-mute": a,
            mirror: a,
            "remote-mirror": a,
            "local-mirror": a,
            "audio-reverb-type": s,
            "enable-mic": o,
            "enable-agc": a,
            "enable-ans": a,
            "audio-volume-type": "'voicecall'",
            "video-width": "360",
            "video-height": "640",
            "beauty-style": "'smooth'",
            filter: "'standard'",
            animation: u,
            bindStateChange: u,
            bindNetStatus: u,
            bindBgmStart: u,
            bindBgmProgress: u,
            bindBgmComplete: u,
            bindAudioVolumeNotify: u,
          },
          OfficialAccount: { bindLoad: u, bindError: u },
          OpenData: {
            type: u,
            "open-gid": u,
            lang: "'en'",
            "default-text": u,
            "default-avatar": u,
            bindError: u,
          },
          NavigationBar: {
            title: u,
            loading: a,
            "front-color": u,
            "background-color": u,
            "color-animation-duration": s,
            "color-animation-timing-func": "'linear'",
          },
          PageMeta: {
            "background-text-style": u,
            "background-color": u,
            "background-color-top": u,
            "background-color-bottom": u,
            "scroll-top": "''",
            "scroll-duration": "300",
            "page-style": "''",
            "root-font-size": "''",
            bindResize: u,
            bindScroll: u,
            bindScrollDone: u,
          },
          VoipRoom: {
            openid: u,
            mode: "'camera'",
            "device-position": "'front'",
            bindError: u,
          },
          AdCustom: {
            "unit-id": u,
            "ad-intervals": u,
            bindLoad: u,
            bindError: u,
          },
          PageContainer: {
            show: a,
            duration: "300",
            "z-index": "100",
            overlay: o,
            position: "'bottom'",
            round: a,
            "close-on-slideDown": a,
            "overlay-style": u,
            "custom-style": u,
            bindBeforeEnter: u,
            bindEnter: u,
            bindAfterEnter: u,
            bindBeforeLeave: u,
            bindLeave: u,
            bindAfterLeave: u,
            bindClickOverlay: u,
          },
          ShareElement: {
            mapkey: u,
            transform: a,
            duration: "300",
            "easing-function": "'ease-out'",
          },
          KeyboardAccessory: {},
          RootPortal: {},
        },
        l = {
          initNativeApi: function (e) {
            (0, r.Ig)(e, wx, {
              needPromiseApis: i,
              modifyApis: function (e) {
                e.delete("lanDebug");
              },
              transformMeta: function (e, t) {
                var n;
                return (
                  "showShareMenu" === e &&
                    (t.menus =
                      null === (n = t.showShareItems) || void 0 === n
                        ? void 0
                        : n.map(function (e) {
                            return "wechatFriends" === e
                              ? "shareAppMessage"
                              : "wechatMoment" === e
                              ? "shareTimeline"
                              : e;
                          })),
                  { key: e, options: t }
                );
              },
            }),
              (e.cloud = wx.cloud),
              (e.getTabBar = function (e) {
                var t;
                if ("function" == typeof (null == e ? void 0 : e.getTabBar))
                  return null === (t = e.getTabBar()) || void 0 === t
                    ? void 0
                    : t.$taroInstances;
              });
          },
          getMiniLifecycle: function (e) {
            var t = e.page[5];
            return (
              -1 === t.indexOf("onSaveExitState") && t.push("onSaveExitState"),
              e
            );
          },
        };
      (0, r.xi)(l), (0, r.ku)(c);
    },
    32180: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Current: function () {
            return jt;
          },
          Events: function () {
            return g.zW;
          },
          FormElement: function () {
            return vt;
          },
          MutationObserver: function () {
            return G;
          },
          SVGElement: function () {
            return It;
          },
          Style: function () {
            return Le;
          },
          TaroElement: function () {
            return Be;
          },
          TaroEvent: function () {
            return dt;
          },
          TaroNode: function () {
            return le;
          },
          TaroRootElement: function () {
            return yt;
          },
          TaroText: function () {
            return kt;
          },
          addLeadingSlash: function () {
            return Ft;
          },
          cancelAnimationFrame: function () {
            return Ot;
          },
          createComponentConfig: function () {
            return $t;
          },
          createEvent: function () {
            return ft;
          },
          createPageConfig: function () {
            return qt;
          },
          createRecursiveComponentConfig: function () {
            return Jt;
          },
          document: function () {
            return bt;
          },
          eventCenter: function () {
            return Nt;
          },
          eventHandler: function () {
            return pt;
          },
          eventSource: function () {
            return oe;
          },
          getComputedStyle: function () {
            return St;
          },
          getCurrentInstance: function () {
            return Zt;
          },
          getPageInstance: function () {
            return Dt;
          },
          hooks: function () {
            return g.PT;
          },
          hydrate: function () {
            return ue;
          },
          incrementId: function () {
            return q;
          },
          injectPageInstance: function () {
            return Mt;
          },
          navigator: function () {
            return Tt;
          },
          nextTick: function () {
            return Kt;
          },
          now: function () {
            return Pt;
          },
          options: function () {
            return _e;
          },
          removePageInstance: function () {
            return Rt;
          },
          requestAnimationFrame: function () {
            return At;
          },
          safeExecute: function () {
            return Ut;
          },
          stringify: function () {
            return Wt;
          },
          window: function () {
            return xt;
          },
        });
      var r = n(90129),
        i = n(64834),
        o = n(27415),
        a = n(45023),
        u = n(81876),
        s = n(21867),
        c = n(86066),
        l = n(79038),
        d = n(59772),
        f = n(28009),
        h = n(22276),
        p = n(57042),
        v = n(24460),
        g = n(59820),
        m = n(32180).requestAnimationFrame,
        b = n(32180).cancelAnimationFrame,
        y = "小程序 setData",
        k = "页面初始化",
        w = "root",
        S = "id",
        P = "class",
        C = "style",
        T = "focus",
        x = "view",
        E = "static-view",
        A = "pure-view",
        O = "value",
        N = "input",
        L = "custom-wrapper",
        I = "catchMove",
        j = "catch-view",
        Z = "comment",
        B = "onLoad",
        _ = "onReady",
        M = "onShow",
        D = "options",
        R = "externalClasses",
        F = "behaviors",
        U = [],
        W = function (e, t) {
          return !!e && e.sid === (null == t ? void 0 : t.sid);
        },
        z = function (e, t) {
          var n = t.characterData,
            r = t.characterDataOldValue,
            i = t.attributes,
            o = t.attributeOldValue,
            a = t.childList;
          switch (e.type) {
            case "characterData":
              return !!n && (r || (e.oldValue = null), !0);
            case "attributes":
              return !!i && (o || (e.oldValue = null), !0);
            case "childList":
              return !!a;
          }
        },
        V = !1;
      function H(e, t) {
        e.records.push(t),
          V ||
            ((V = !0),
            Promise.resolve().then(function () {
              (V = !1),
                U.forEach(function (e) {
                  return e.callback(e.takeRecords());
                });
            }));
      }
      var G = (function () {
          function e(t) {
            (0, p.Z)(this, e),
              (this.core = {
                observe: g.ZT,
                disconnect: g.ZT,
                takeRecords: g.ZT,
              });
          }
          return (
            (0, v.Z)(
              e,
              [
                {
                  key: "observe",
                  value: function () {
                    var e;
                    (e = this.core).observe.apply(e, arguments);
                  },
                },
                {
                  key: "disconnect",
                  value: function () {
                    this.core.disconnect();
                  },
                },
                {
                  key: "takeRecords",
                  value: function () {
                    return this.core.takeRecords();
                  },
                },
              ],
              [
                {
                  key: "record",
                  value: function (e) {
                    !(function (e) {
                      U.forEach(function (t) {
                        for (
                          var n = t.options, r = e.target;
                          r;
                          r = r.parentNode
                        ) {
                          if (W(t.target, r) && z(e, n)) {
                            H(t, e);
                            break;
                          }
                          if (!n.subtree) break;
                        }
                      });
                    })(e);
                  },
                },
              ]
            ),
            e
          );
        })(),
        q = function () {
          for (var e = [], t = 65; t <= 90; t++) e.push(t);
          for (var n = 97; n <= 122; n++) e.push(n);
          var r = e.length - 1,
            i = [0, 0];
          return function () {
            var t = i.map(function (t) {
                return e[t];
              }),
              n = String.fromCharCode.apply(String, (0, h.Z)(t)),
              o = i.length - 1;
            for (i[o]++; i[o] > r; ) {
              if (((i[o] = 0), (o -= 1) < 0)) {
                i.push(0);
                break;
              }
              i[o]++;
            }
            return n;
          };
        };
      function $(e) {
        return 1 === e.nodeType;
      }
      function J(e) {
        return e.nodeName === Z;
      }
      function K(e) {
        var t = Object.keys(e.props).find(function (e) {
          return !(/^(class|style|id)$/.test(e) || e.startsWith("data-"));
        });
        return Boolean(t);
      }
      function Q(e) {
        switch (e) {
          case C:
            return "st";
          case S:
            return "uid";
          case P:
            return "cl";
          default:
            return e;
        }
      }
      var Y,
        X = new Map();
      function ee(e, t, n) {
        (0, g.mf)(n) && (n = { value: n }),
          Object.defineProperty(
            e.prototype,
            t,
            Object.assign({ configurable: !0, enumerable: !0 }, n)
          );
      }
      function te() {
        return Y || (Y = (0, g.W)(g.rD)), Y;
      }
      var ne,
        re,
        ie = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, c.Z)(n);
          function n(e, r) {
            var i, o;
            return (
              (0, p.Z)(this, n),
              (o = t.call(this)),
              e
                .trim()
                .split(/\s+/)
                .forEach(
                  (0, l.Z)(
                    ((i = (0, u.Z)(o)), (0, d.Z)(n.prototype)),
                    "add",
                    i
                  ).bind((0, u.Z)(o))
                ),
              (o.el = r),
              o
            );
          }
          return (
            (0, v.Z)(n, [
              {
                key: "value",
                get: function () {
                  return (0, h.Z)(this)
                    .filter(function (e) {
                      return "" !== e;
                    })
                    .join(" ");
                },
              },
              {
                key: "add",
                value: function (e) {
                  return (
                    (0, l.Z)((0, d.Z)(n.prototype), "add", this).call(this, e),
                    this._update(),
                    this
                  );
                },
              },
              {
                key: "length",
                get: function () {
                  return this.size;
                },
              },
              {
                key: "remove",
                value: function (e) {
                  (0, l.Z)((0, d.Z)(n.prototype), "delete", this).call(this, e),
                    this._update();
                },
              },
              {
                key: "toggle",
                value: function (e) {
                  (0, l.Z)((0, d.Z)(n.prototype), "has", this).call(this, e)
                    ? (0, l.Z)((0, d.Z)(n.prototype), "delete", this).call(
                        this,
                        e
                      )
                    : (0, l.Z)((0, d.Z)(n.prototype), "add", this).call(
                        this,
                        e
                      ),
                    this._update();
                },
              },
              {
                key: "replace",
                value: function (e, t) {
                  (0, l.Z)((0, d.Z)(n.prototype), "delete", this).call(this, e),
                    (0, l.Z)((0, d.Z)(n.prototype), "add", this).call(this, t),
                    this._update();
                },
              },
              {
                key: "contains",
                value: function (e) {
                  return (0, l.Z)((0, d.Z)(n.prototype), "has", this).call(
                    this,
                    e
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return this.value;
                },
              },
              {
                key: "_update",
                value: function () {
                  this.el.className = this.value;
                },
              },
            ]),
            n
          );
        })((0, f.Z)(Set)),
        oe = new ((function (e) {
          (0, s.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            return (0, p.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, v.Z)(n, [
              {
                key: "removeNode",
                value: function (e) {
                  var t = e.sid,
                    n = e.uid;
                  this.delete(t), n !== t && n && this.delete(n);
                },
              },
              {
                key: "removeNodeTree",
                value: function (e) {
                  var t = this;
                  this.removeNode(e),
                    e.childNodes.forEach(function (e) {
                      return t.removeNodeTree(e);
                    });
                },
              },
            ]),
            n
          );
        })((0, f.Z)(Map)))(),
        ae = { window: g.kT, document: g.kT };
      function ue(e) {
        var t;
        re || (re = te()), ne || (ne = g.PT.call("getSpecialNodes"));
        var n,
          r = e.nodeName;
        if (
          (function (e) {
            return 3 === e.nodeType;
          })(e)
        )
          return (
            (n = {}),
            (0, a.Z)(n, "v", e.nodeValue),
            (0, a.Z)(n, "nn", re[r]._num),
            n
          );
        var i = ((t = {}), (0, a.Z)(t, "nn", r), (0, a.Z)(t, "sid", e.sid), t);
        e.uid !== e.sid && (i.uid = e.uid),
          !e.isAnyEventBinded() &&
            ne.indexOf(r) > -1 &&
            ((i.nn = "static-".concat(r)), r !== x || K(e) || (i.nn = A));
        var o = e.props;
        for (var u in o) {
          var s = (0, g.CA)(u);
          u.startsWith("data-") ||
            u === P ||
            u === C ||
            u === S ||
            s === I ||
            (i[s] = o[u]),
            r === x && s === I && !1 !== o[u] && (i.nn = j);
        }
        var c = e.childNodes;
        (c = c.filter(function (e) {
          return !J(e);
        })).length > 0
          ? (i.cn = c.map(ue))
          : (i.cn = []),
          "" !== e.className && (i.cl = e.className);
        var l = e.cssText;
        "" !== l && "swiper-item" !== r && (i.st = l),
          g.PT.call("modifyHydrateData", i);
        var d = i.nn,
          f = re[d];
        if (f)
          for (var u in ((i.nn = f._num), i))
            u in f && ((i[f[u]] = i[u]), delete i[u]);
        return i;
      }
      var se = (function () {
          function e() {
            (0, p.Z)(this, e), (this.__handlers = {});
          }
          return (
            (0, v.Z)(e, [
              {
                key: "addEventListener",
                value: function (e, t, n) {
                  if (
                    ((e = e.toLowerCase()),
                    g.PT.call("onAddEvent", e, t, n, this),
                    "regionchange" === e)
                  )
                    return (
                      this.addEventListener("begin", t, n),
                      void this.addEventListener("end", t, n)
                    );
                  Boolean(n);
                  var r = !1;
                  if (
                    ((0, g.Kn)(n) &&
                      (Boolean(n.capture), (r = Boolean(n.once))),
                    r)
                  )
                    this.addEventListener(
                      e,
                      function n() {
                        t.apply(this, arguments),
                          this.removeEventListener(e, n);
                      },
                      Object.assign(Object.assign({}, n), { once: !1 })
                    );
                  else {
                    var i = t;
                    (t = function () {
                      i.apply(this, arguments);
                    }).oldHandler = i;
                    var o = this.__handlers[e];
                    (0, g.kJ)(o) ? o.push(t) : (this.__handlers[e] = [t]);
                  }
                },
              },
              {
                key: "removeEventListener",
                value: function (e, t) {
                  if ("regionchange" === (e = e.toLowerCase()))
                    return (
                      this.removeEventListener("begin", t),
                      void this.removeEventListener("end", t)
                    );
                  if (t) {
                    var n = this.__handlers[e];
                    if ((0, g.kJ)(n)) {
                      var r = n.findIndex(function (e) {
                        if (e === t || e.oldHandler === t) return !0;
                      });
                      n.splice(r, 1);
                    }
                  }
                },
              },
              {
                key: "isAnyEventBinded",
                value: function () {
                  var e = this.__handlers,
                    t = Object.keys(e).find(function (t) {
                      return e[t].length;
                    });
                  return Boolean(t);
                },
              },
            ]),
            e
          );
        })(),
        ce = q(),
        le = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            var e;
            return (
              (0, p.Z)(this, n),
              ((e = t.call(this)).parentNode = null),
              (e.childNodes = []),
              (e.hydrate = function (e) {
                return function () {
                  return ue(e);
                };
              }),
              (e.uid = "_" + ce()),
              (e.sid = e.uid),
              oe.set(e.sid, (0, u.Z)(e)),
              e
            );
          }
          return (
            (0, v.Z)(
              n,
              [
                {
                  key: "updateChildNodes",
                  value: function (e) {
                    var t = this;
                    this.enqueueUpdate({
                      path: "".concat(this._path, ".").concat("cn"),
                      value: e
                        ? function () {
                            return [];
                          }
                        : function () {
                            return t.childNodes
                              .filter(function (e) {
                                return !J(e);
                              })
                              .map(ue);
                          },
                    });
                  },
                },
                {
                  key: "_root",
                  get: function () {
                    var e;
                    return (
                      (null === (e = this.parentNode) || void 0 === e
                        ? void 0
                        : e._root) || null
                    );
                  },
                },
                {
                  key: "findIndex",
                  value: function (e) {
                    var t = this.childNodes.indexOf(e);
                    return (
                      (0, g.zx)(
                        -1 !== t,
                        "The node to be replaced is not a child of this node."
                      ),
                      t
                    );
                  },
                },
                {
                  key: "_path",
                  get: function () {
                    var e = this.parentNode;
                    if (e) {
                      var t = e.childNodes
                          .filter(function (e) {
                            return !J(e);
                          })
                          .indexOf(this),
                        n = g.PT.call("getPathIndex", t);
                      return ""
                        .concat(e._path, ".")
                        .concat("cn", ".")
                        .concat(n);
                    }
                    return "";
                  },
                },
                {
                  key: "nextSibling",
                  get: function () {
                    var e = this.parentNode;
                    return (
                      (null == e
                        ? void 0
                        : e.childNodes[e.findIndex(this) + 1]) || null
                    );
                  },
                },
                {
                  key: "previousSibling",
                  get: function () {
                    var e = this.parentNode;
                    return (
                      (null == e
                        ? void 0
                        : e.childNodes[e.findIndex(this) - 1]) || null
                    );
                  },
                },
                {
                  key: "parentElement",
                  get: function () {
                    var e = this.parentNode;
                    return 1 === (null == e ? void 0 : e.nodeType) ? e : null;
                  },
                },
                {
                  key: "firstChild",
                  get: function () {
                    return this.childNodes[0] || null;
                  },
                },
                {
                  key: "lastChild",
                  get: function () {
                    var e = this.childNodes;
                    return e[e.length - 1] || null;
                  },
                },
                {
                  key: "textContent",
                  set: function (e) {
                    for (
                      var t = this.childNodes.slice(), n = [];
                      this.firstChild;

                    )
                      this.removeChild(this.firstChild, { doUpdate: !1 });
                    if ("" === e) this.updateChildNodes(!0);
                    else {
                      var r = ae.document.createTextNode(e);
                      n.push(r), this.appendChild(r), this.updateChildNodes();
                    }
                    G.record({
                      type: "childList",
                      target: this,
                      removedNodes: t,
                      addedNodes: n,
                    });
                  },
                },
                {
                  key: "insertBefore",
                  value: function (e, t, n) {
                    var r = this;
                    if ("document-fragment" === e.nodeName)
                      return (
                        e.childNodes.reduceRight(function (e, t) {
                          return r.insertBefore(t, e), t;
                        }, t),
                        e
                      );
                    if (
                      (e.remove({ cleanRef: !1 }), (e.parentNode = this), t)
                    ) {
                      var i = this.findIndex(t);
                      this.childNodes.splice(i, 0, e);
                    } else this.childNodes.push(e);
                    return (
                      this._root &&
                        (t
                          ? n
                            ? this.enqueueUpdate({
                                path: e._path,
                                value: this.hydrate(e),
                              })
                            : this.updateChildNodes()
                          : 1 === this.childNodes.length
                          ? this.updateChildNodes()
                          : this.enqueueUpdate({
                              path: e._path,
                              value: this.hydrate(e),
                            })),
                      G.record({
                        type: "childList",
                        target: this,
                        addedNodes: [e],
                        removedNodes: n ? [t] : [],
                        nextSibling: n ? t.nextSibling : t || null,
                        previousSibling: e.previousSibling,
                      }),
                      e
                    );
                  },
                },
                {
                  key: "appendChild",
                  value: function (e) {
                    return this.insertBefore(e);
                  },
                },
                {
                  key: "replaceChild",
                  value: function (e, t) {
                    if (t.parentNode === this)
                      return (
                        this.insertBefore(e, t, !0),
                        t.remove({ doUpdate: !1 }),
                        t
                      );
                  },
                },
                {
                  key: "removeChild",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = t.cleanRef,
                      r = t.doUpdate;
                    !1 !== n &&
                      !1 !== r &&
                      G.record({
                        type: "childList",
                        target: this,
                        removedNodes: [e],
                        nextSibling: e.nextSibling,
                        previousSibling: e.previousSibling,
                      });
                    var i = this.findIndex(e);
                    return (
                      this.childNodes.splice(i, 1),
                      (e.parentNode = null),
                      !1 !== n && oe.removeNodeTree(e),
                      this._root && !1 !== r && this.updateChildNodes(),
                      e
                    );
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    var t;
                    null === (t = this.parentNode) ||
                      void 0 === t ||
                      t.removeChild(this, e);
                  },
                },
                {
                  key: "hasChildNodes",
                  value: function () {
                    return this.childNodes.length > 0;
                  },
                },
                {
                  key: "enqueueUpdate",
                  value: function (e) {
                    var t;
                    null === (t = this._root) ||
                      void 0 === t ||
                      t.enqueueUpdate(e);
                  },
                },
                {
                  key: "ownerDocument",
                  get: function () {
                    return ae.document;
                  },
                },
              ],
              [
                {
                  key: "extend",
                  value: function (e, t) {
                    ee(n, e, t);
                  },
                },
              ]
            ),
            n
          );
        })(se),
        de = [
          "all",
          "appearance",
          "blockOverflow",
          "blockSize",
          "bottom",
          "clear",
          "contain",
          "content",
          "continue",
          "cursor",
          "direction",
          "display",
          "filter",
          "float",
          "gap",
          "height",
          "inset",
          "isolation",
          "left",
          "letterSpacing",
          "lightingColor",
          "markerSide",
          "mixBlendMode",
          "opacity",
          "order",
          "position",
          "quotes",
          "resize",
          "right",
          "rowGap",
          "tabSize",
          "tableLayout",
          "top",
          "userSelect",
          "verticalAlign",
          "visibility",
          "voiceFamily",
          "volume",
          "whiteSpace",
          "widows",
          "width",
          "zIndex",
          "pointerEvents",
        ];
      function fe(e, t, n) {
        !n && de.push(e),
          t.forEach(function (t) {
            de.push(e + t), "webkit" === e && de.push("Webkit" + t);
          });
      }
      var he = "Color",
        pe = "Style",
        ve = "Width",
        ge = "Image",
        me = "Size",
        be = [he, pe, ve],
        ye = ["FitLength", "FitWidth", ge],
        ke = [].concat(ye, ["Radius"]),
        we = [].concat(be, ye),
        Se = ["EndRadius", "StartRadius"],
        Pe = ["Bottom", "Left", "Right", "Top"],
        Ce = ["End", "Start"],
        Te = ["Content", "Items", "Self"],
        xe = ["BlockSize", "Height", "InlineSize", ve],
        Ee = ["After", "Before"];
      function Ae(e) {
        G.record({
          type: "attributes",
          target: e._element,
          attributeName: "style",
          oldValue: e.cssText,
        });
      }
      function Oe(e) {
        var t = e._element;
        t._root &&
          t.enqueueUpdate({
            path: "".concat(t._path, ".", "st"),
            value: e.cssText,
          });
      }
      function Ne(e, t) {
        this[t] !== e &&
          (!this._pending && Ae(this),
          (0, g.Ft)(e) || (0, g.o8)(e)
            ? (this._usedStyleProp.delete(t), delete this._value[t])
            : (this._usedStyleProp.add(t), (this._value[t] = e)),
          !this._pending && Oe(this));
      }
      fe("borderBlock", be),
        fe("borderBlockEnd", be),
        fe("borderBlockStart", be),
        fe("outline", [].concat(be, ["Offset"])),
        fe(
          "border",
          [].concat(be, ["Boundary", "Break", "Collapse", "Radius", "Spacing"])
        ),
        fe("borderFit", ["Length", ve]),
        fe("borderInline", be),
        fe("borderInlineEnd", be),
        fe("borderInlineStart", be),
        fe("borderLeft", we),
        fe("borderRight", we),
        fe("borderTop", we),
        fe("borderBottom", we),
        fe("textDecoration", [he, pe, "Line"]),
        fe("textEmphasis", [he, pe, "Position"]),
        fe("scrollMargin", Pe),
        fe("scrollPadding", Pe),
        fe("padding", Pe),
        fe("margin", [].concat(Pe, ["Trim"])),
        fe("scrollMarginBlock", Ce),
        fe("scrollMarginInline", Ce),
        fe("scrollPaddingBlock", Ce),
        fe("scrollPaddingInline", Ce),
        fe("gridColumn", Ce),
        fe("gridRow", Ce),
        fe("insetBlock", Ce),
        fe("insetInline", Ce),
        fe("marginBlock", Ce),
        fe("marginInline", Ce),
        fe("paddingBlock", Ce),
        fe("paddingInline", Ce),
        fe("pause", Ee),
        fe("cue", Ee),
        fe("mask", [
          "Clip",
          "Composite",
          ge,
          "Mode",
          "Origin",
          "Position",
          "Repeat",
          me,
          "Type",
        ]),
        fe("borderImage", [
          "Outset",
          "Repeat",
          "Slice",
          "Source",
          "Transform",
          ve,
        ]),
        fe("maskBorder", ["Mode", "Outset", "Repeat", "Slice", "Source", ve]),
        fe("font", [
          "Family",
          "FeatureSettings",
          "Kerning",
          "LanguageOverride",
          "MaxSize",
          "MinSize",
          "OpticalSizing",
          "Palette",
          me,
          "SizeAdjust",
          "Stretch",
          pe,
          "Weight",
          "VariationSettings",
        ]),
        fe("transform", ["Box", "Origin", pe]),
        fe("background", [
          he,
          ge,
          "Attachment",
          "BlendMode",
          "Clip",
          "Origin",
          "Position",
          "Repeat",
          me,
        ]),
        fe("listStyle", [ge, "Position", "Type"]),
        fe("scrollSnap", ["Align", "Stop", "Type"]),
        fe("grid", ["Area", "AutoColumns", "AutoFlow", "AutoRows"]),
        fe("gridTemplate", ["Areas", "Columns", "Rows"]),
        fe("overflow", ["Block", "Inline", "Wrap", "X", "Y"]),
        fe("transition", ["Delay", "Duration", "Property", "TimingFunction"]),
        fe("color", ["Adjust", "InterpolationFilters", "Scheme"]),
        fe("textAlign", ["All", "Last"]),
        fe("page", ["BreakAfter", "BreakBefore", "BreakInside"]),
        fe("animation", [
          "Delay",
          "Direction",
          "Duration",
          "FillMode",
          "IterationCount",
          "Name",
          "PlayState",
          "TimingFunction",
        ]),
        fe("flex", ["Basis", "Direction", "Flow", "Grow", "Shrink", "Wrap"]),
        fe(
          "offset",
          [].concat(Ee, Ce, [
            "Anchor",
            "Distance",
            "Path",
            "Position",
            "Rotate",
          ])
        ),
        fe("perspective", ["Origin"]),
        fe("clip", ["Path", "Rule"]),
        fe("flow", ["From", "Into"]),
        fe("align", ["Content", "Items", "Self"], !0),
        fe("alignment", ["Adjust", "Baseline"], !0),
        fe("borderStart", Se, !0),
        fe("borderEnd", Se, !0),
        fe("borderCorner", ["Fit", ge, "ImageTransform"], !0),
        fe("borderTopLeft", ke, !0),
        fe("borderTopRight", ke, !0),
        fe("borderBottomLeft", ke, !0),
        fe("borderBottomRight", ke, !0),
        fe(
          "column",
          [
            "s",
            "Count",
            "Fill",
            "Gap",
            "Rule",
            "RuleColor",
            "RuleStyle",
            "RuleWidth",
            "Span",
            ve,
          ],
          !0
        ),
        fe("break", [].concat(Ee, ["Inside"]), !0),
        fe("wrap", [].concat(Ee, ["Flow", "Inside", "Through"]), !0),
        fe("justify", Te, !0),
        fe("place", Te, !0),
        fe("max", [].concat(xe, ["Lines"]), !0),
        fe("min", xe, !0),
        fe("line", ["Break", "Clamp", "Grid", "Height", "Padding", "Snap"], !0),
        fe("inline", ["BoxAlign", me, "Sizing"], !0),
        fe(
          "text",
          [
            "CombineUpright",
            "GroupAlign",
            "Height",
            "Indent",
            "Justify",
            "Orientation",
            "Overflow",
            "Shadow",
            "SpaceCollapse",
            "SpaceTrim",
            "Spacing",
            "Transform",
            "UnderlinePosition",
            "Wrap",
          ],
          !0
        ),
        fe("shape", ["ImageThreshold", "Inside", "Margin", "Outside"], !0),
        fe("word", ["Break", "Spacing", "Wrap"], !0),
        fe("object", ["Fit", "Position"], !0),
        fe("box", ["DecorationBreak", "Shadow", "Sizing", "Snap"], !0),
        fe(
          "webkit",
          [
            "LineClamp",
            "BoxOrient",
            "TextFillColor",
            "TextStroke",
            "TextStrokeColor",
            "TextStrokeWidth",
          ],
          !0
        );
      var Le = (function () {
        function e(t) {
          (0, p.Z)(this, e),
            (this._element = t),
            (this._usedStyleProp = new Set()),
            (this._value = {});
        }
        return (
          (0, v.Z)(e, [
            {
              key: "setCssVariables",
              value: function (e) {
                var t = this;
                this.hasOwnProperty(e) ||
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                      return t._value[e] || "";
                    },
                    set: function (n) {
                      Ne.call(t, n, e);
                    },
                  });
              },
            },
            {
              key: "cssText",
              get: function () {
                var e = this;
                if (!this._usedStyleProp.size) return "";
                var t = [];
                return (
                  this._usedStyleProp.forEach(function (n) {
                    var r = e[n];
                    if (!(0, g.Ft)(r) && !(0, g.o8)(r)) {
                      var i = (function (e) {
                        return /^--/.test(e);
                      })(n)
                        ? n
                        : (0, g.eu)(n);
                      (0 !== i.indexOf("webkit") &&
                        0 !== i.indexOf("Webkit")) ||
                        (i = "-".concat(i)),
                        t.push("".concat(i, ": ").concat(r, ";"));
                    }
                  }),
                  t.join(" ")
                );
              },
              set: function (e) {
                var t = this;
                if (
                  ((this._pending = !0),
                  Ae(this),
                  this._usedStyleProp.forEach(function (e) {
                    t.removeProperty(e);
                  }),
                  "" === e || (0, g.o8)(e) || (0, g.Ft)(e))
                )
                  return (this._pending = !1), void Oe(this);
                for (var n = e.split(";"), r = 0; r < n.length; r++) {
                  var i = n[r].trim();
                  if ("" !== i) {
                    var a = i.split(":"),
                      u = (0, o.Z)(a),
                      s = u[0],
                      c = u.slice(1).join(":");
                    (0, g.o8)(c) || this.setProperty(s.trim(), c.trim());
                  }
                }
                (this._pending = !1), Oe(this);
              },
            },
            {
              key: "setProperty",
              value: function (e, t) {
                "-" === e[0] ? this.setCssVariables(e) : (e = (0, g.CA)(e)),
                  (0, g.Ft)(t) || (0, g.o8)(t)
                    ? this.removeProperty(e)
                    : (this[e] = t);
              },
            },
            {
              key: "removeProperty",
              value: function (e) {
                if (((e = (0, g.CA)(e)), !this._usedStyleProp.has(e)))
                  return "";
                var t = this[e];
                return (this[e] = void 0), t;
              },
            },
            {
              key: "getPropertyValue",
              value: function (e) {
                return this[(e = (0, g.CA)(e))] || "";
              },
            },
          ]),
          e
        );
      })();
      function Ie() {
        return !0;
      }
      function je(e, t) {
        for (var n = [], r = null != t ? t : Ie, i = e; i; )
          1 === i.nodeType && r(i) && n.push(i), (i = Ze(i, e));
        return n;
      }
      function Ze(e, t) {
        var n = e.firstChild;
        if (n) return n;
        var r = e;
        do {
          if (r === t) return null;
          var i = r.nextSibling;
          if (i) return i;
          r = r.parentElement;
        } while (r);
        return null;
      }
      !(function (e) {
        for (
          var t = {},
            n = function (e) {
              var n = de[e];
              t[n] = {
                get: function () {
                  var e = this._value[n];
                  return (0, g.Ft)(e) || (0, g.o8)(e) ? "" : e;
                },
                set: function (e) {
                  Ne.call(this, e, n);
                },
              };
            },
            r = 0;
          r < de.length;
          r++
        )
          n(r);
        Object.defineProperties(e.prototype, t);
      })(Le);
      var Be = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            var e;
            return (
              (0, p.Z)(this, n),
              ((e = t.call(this)).props = {}),
              (e.dataset = g.kT),
              (e.nodeType = 1),
              (e.style = new Le((0, u.Z)(e))),
              g.PT.call("patchElement", (0, u.Z)(e)),
              e
            );
          }
          return (
            (0, v.Z)(
              n,
              [
                {
                  key: "_stopPropagation",
                  value: function (e) {
                    for (var t = this; (t = t.parentNode); ) {
                      var n = t.__handlers[e.type];
                      if ((0, g.kJ)(n))
                        for (var r = n.length; r--; ) n[r]._stop = !0;
                    }
                  },
                },
                {
                  key: "id",
                  get: function () {
                    return this.getAttribute(S);
                  },
                  set: function (e) {
                    this.setAttribute(S, e);
                  },
                },
                {
                  key: "className",
                  get: function () {
                    return this.getAttribute(P) || "";
                  },
                  set: function (e) {
                    this.setAttribute(P, e);
                  },
                },
                {
                  key: "cssText",
                  get: function () {
                    return this.getAttribute(C) || "";
                  },
                },
                {
                  key: "classList",
                  get: function () {
                    return new ie(this.className, this);
                  },
                },
                {
                  key: "children",
                  get: function () {
                    return this.childNodes.filter($);
                  },
                },
                {
                  key: "attributes",
                  get: function () {
                    var e = this.props,
                      t = Object.keys(e),
                      n = this.style.cssText;
                    return t
                      .map(function (t) {
                        return { name: t, value: e[t] };
                      })
                      .concat(n ? { name: C, value: n } : []);
                  },
                },
                {
                  key: "textContent",
                  get: function () {
                    for (
                      var e = "", t = this.childNodes, n = 0;
                      n < t.length;
                      n++
                    )
                      e += t[n].textContent;
                    return e;
                  },
                  set: function (e) {
                    (0, i.Z)((0, d.Z)(n.prototype), "textContent", e, this, !0);
                  },
                },
                {
                  key: "hasAttribute",
                  value: function (e) {
                    return !(0, g.o8)(this.props[e]);
                  },
                },
                {
                  key: "hasAttributes",
                  value: function () {
                    return this.attributes.length > 0;
                  },
                },
                {
                  key: "focus",
                  get: function () {
                    return function () {
                      this.setAttribute(T, !0);
                    };
                  },
                  set: function (e) {
                    this.setAttribute(T, e);
                  },
                },
                {
                  key: "blur",
                  value: function () {
                    this.setAttribute(T, !1);
                  },
                },
                {
                  key: "setAttribute",
                  value: function (e, t) {
                    var n =
                      this.nodeName === x &&
                      !K(this) &&
                      !this.isAnyEventBinded();
                    switch (
                      (e !== C &&
                        G.record({
                          target: this,
                          type: "attributes",
                          attributeName: e,
                          oldValue: this.getAttribute(e),
                        }),
                      e)
                    ) {
                      case C:
                        this.style.cssText = t;
                        break;
                      case S:
                        this.uid !== this.sid && oe.delete(this.uid),
                          (t = String(t)),
                          (this.props[e] = this.uid = t),
                          oe.set(t, this);
                        break;
                      default:
                        (this.props[e] = t),
                          e.startsWith("data-") &&
                            (this.dataset === g.kT &&
                              (this.dataset = Object.create(null)),
                            (this.dataset[(0, g.CA)(e.replace(/^data-/, ""))] =
                              t));
                    }
                    if (this._root) {
                      var r = te(),
                        i = r[this.nodeName],
                        o = r[x]._num,
                        a = r[E]._num,
                        u = r[j]._num,
                        s = this._path;
                      e = Q(e);
                      var c = (0, g.CA)(e),
                        l = {
                          path: "".concat(s, ".").concat(c),
                          value: (0, g.mf)(t)
                            ? function () {
                                return t;
                              }
                            : t,
                        };
                      if (
                        (g.PT.call("modifySetAttrPayload", this, e, l, r), i)
                      ) {
                        var d = i[c] || e;
                        l.path = "".concat(s, ".").concat((0, g.CA)(d));
                      }
                      this.enqueueUpdate(l),
                        this.nodeName === x &&
                          (c === I
                            ? this.enqueueUpdate({
                                path: "".concat(s, ".", "nn"),
                                value: t ? u : this.isAnyEventBinded() ? o : a,
                              })
                            : n &&
                              K(this) &&
                              this.enqueueUpdate({
                                path: "".concat(s, ".", "nn"),
                                value: a,
                              }));
                    }
                  },
                },
                {
                  key: "removeAttribute",
                  value: function (e) {
                    var t =
                      this.nodeName === x &&
                      K(this) &&
                      !this.isAnyEventBinded();
                    if (
                      (G.record({
                        target: this,
                        type: "attributes",
                        attributeName: e,
                        oldValue: this.getAttribute(e),
                      }),
                      e === C)
                    )
                      this.style.cssText = "";
                    else {
                      if (g.PT.call("onRemoveAttribute", this, e)) return;
                      if (!this.props.hasOwnProperty(e)) return;
                      delete this.props[e];
                    }
                    if (this._root) {
                      var n = te(),
                        r = n[this.nodeName],
                        i = n[x]._num,
                        o = n[E]._num,
                        a = n[A]._num,
                        u = this._path;
                      e = Q(e);
                      var s = (0, g.CA)(e),
                        c = { path: "".concat(u, ".").concat(s), value: "" };
                      if (
                        (g.PT.call("modifyRmAttrPayload", this, e, c, n), r)
                      ) {
                        var l = r[s] || e;
                        c.path = "".concat(u, ".").concat((0, g.CA)(l));
                      }
                      this.enqueueUpdate(c),
                        this.nodeName === x &&
                          (s === I
                            ? this.enqueueUpdate({
                                path: "".concat(u, ".", "nn"),
                                value: this.isAnyEventBinded()
                                  ? i
                                  : K(this)
                                  ? o
                                  : a,
                              })
                            : t &&
                              !K(this) &&
                              this.enqueueUpdate({
                                path: "".concat(u, ".", "nn"),
                                value: a,
                              }));
                    }
                  },
                },
                {
                  key: "getAttribute",
                  value: function (e) {
                    var t = e === C ? this.style.cssText : this.props[e];
                    return null != t ? t : "";
                  },
                },
                {
                  key: "getElementsByTagName",
                  value: function (e) {
                    var t = this;
                    return je(this, function (n) {
                      return n.nodeName === e || ("*" === e && t !== n);
                    });
                  },
                },
                {
                  key: "getElementsByClassName",
                  value: function (e) {
                    return je(this, function (t) {
                      var n = t.classList;
                      return e
                        .trim()
                        .split(/\s+/)
                        .every(function (e) {
                          return n.has(e);
                        });
                    });
                  },
                },
                {
                  key: "dispatchEvent",
                  value: function (e) {
                    var t = e.cancelable,
                      n = this.__handlers[e.type];
                    if (!(0, g.kJ)(n)) return !1;
                    for (var r = n.length; r--; ) {
                      var i = n[r],
                        o = void 0;
                      if (
                        (i._stop
                          ? (i._stop = !1)
                          : (g.PT.call("modifyDispatchEvent", e, this),
                            (o = i.call(this, e))),
                        (!1 === o || e._end) && t && (e.defaultPrevented = !0),
                        e._end && e._stop)
                      )
                        break;
                    }
                    return (
                      e._stop ? this._stopPropagation(e) : (e._stop = !0),
                      null != n
                    );
                  },
                },
                {
                  key: "addEventListener",
                  value: function (e, t, r) {
                    var i = this.nodeName,
                      o = g.PT.call("getSpecialNodes"),
                      a = !0;
                    if (
                      ((0, g.Kn)(r) &&
                        !1 === r.sideEffect &&
                        ((a = !1), delete r.sideEffect),
                      !1 !== a && !this.isAnyEventBinded() && o.indexOf(i) > -1)
                    ) {
                      var u = te()[i]._num;
                      this.enqueueUpdate({
                        path: "".concat(this._path, ".", "nn"),
                        value: u,
                      });
                    }
                    (0, l.Z)(
                      (0, d.Z)(n.prototype),
                      "addEventListener",
                      this
                    ).call(this, e, t, r);
                  },
                },
                {
                  key: "removeEventListener",
                  value: function (e, t) {
                    var r =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2];
                    (0, l.Z)(
                      (0, d.Z)(n.prototype),
                      "removeEventListener",
                      this
                    ).call(this, e, t);
                    var i = this.nodeName,
                      o = g.PT.call("getSpecialNodes");
                    if (
                      !1 !== r &&
                      !this.isAnyEventBinded() &&
                      o.indexOf(i) > -1
                    ) {
                      var a = te(),
                        u = K(this) ? "static-".concat(i) : "pure-".concat(i),
                        s = a[u]._num;
                      this.enqueueUpdate({
                        path: "".concat(this._path, ".", "nn"),
                        value: s,
                      });
                    }
                  },
                },
              ],
              [
                {
                  key: "extend",
                  value: function (e, t) {
                    ee(n, e, t);
                  },
                },
              ]
            ),
            n
          );
        })(le),
        _e = { prerender: !0, debug: !1 };
      function Me(e, t, n) {
        for (var r = e.index, i = (e.index = r + n), o = r; o < i; o++)
          "\n" === t.charAt(o) ? (e.line++, (e.column = 0)) : e.column++;
      }
      function De(e, t, n) {
        return Me(e, t, n - e.index);
      }
      function Re(e) {
        return { index: e.index, line: e.line, column: e.column };
      }
      var Fe = /\s/;
      function Ue(e) {
        return Fe.test(e);
      }
      var We = /=/;
      function ze(e) {
        return We.test(e);
      }
      function Ve(e) {
        var t = e.toLowerCase();
        return !!_e.html.skipElements.has(t);
      }
      var He = /[A-Za-z0-9]/;
      function Ge(e, t, n) {
        if (!Ue(n.charAt(e))) return !1;
        for (var r = n.length, i = e - 1; i > t; i--) {
          var o = n.charAt(i);
          if (!Ue(o)) {
            if (ze(o)) return !1;
            break;
          }
        }
        for (var a = e + 1; a < r; a++) {
          var u = n.charAt(a);
          if (!Ue(u)) return !ze(u);
        }
      }
      var qe = (function () {
        function e(t) {
          (0, p.Z)(this, e),
            (this.tokens = []),
            (this.position = { index: 0, column: 0, line: 0 }),
            (this.html = t);
        }
        return (
          (0, v.Z)(e, [
            {
              key: "scan",
              value: function () {
                for (
                  var e = this.html, t = this.position, n = e.length;
                  t.index < n;

                ) {
                  var r = t.index;
                  if ((this.scanText(), t.index === r))
                    if (e.startsWith("!--", r + 1)) this.scanComment();
                    else {
                      var i = this.scanTag();
                      Ve(i) && this.scanSkipTag(i);
                    }
                }
                return this.tokens;
              },
            },
            {
              key: "scanText",
              value: function () {
                var e = this.html,
                  t = this.position,
                  n = (function (e, t) {
                    for (;;) {
                      var n = e.indexOf("<", t);
                      if (-1 === n) return n;
                      var r = e.charAt(n + 1);
                      if ("/" === r || "!" === r || He.test(r)) return n;
                      t = n + 1;
                    }
                  })(e, t.index);
                if (n !== t.index) {
                  -1 === n && (n = e.length);
                  var r = Re(t),
                    i = e.slice(t.index, n);
                  De(t, e, n);
                  var o = Re(t);
                  this.tokens.push({
                    type: "text",
                    content: i,
                    position: { start: r, end: o },
                  });
                }
              },
            },
            {
              key: "scanComment",
              value: function () {
                var e = this.html,
                  t = this.position,
                  n = Re(t);
                Me(t, e, 4);
                var r = e.indexOf("--\x3e", t.index),
                  i = r + 3;
                -1 === r && (r = i = e.length);
                var o = e.slice(t.index, r);
                De(t, e, i),
                  this.tokens.push({
                    type: "comment",
                    content: o,
                    position: { start: n, end: Re(t) },
                  });
              },
            },
            {
              key: "scanTag",
              value: function () {
                this.scanTagStart();
                var e = this.scanTagName();
                return this.scanAttrs(), this.scanTagEnd(), e;
              },
            },
            {
              key: "scanTagStart",
              value: function () {
                var e = this.html,
                  t = this.position,
                  n = "/" === e.charAt(t.index + 1),
                  r = Re(t);
                Me(t, e, n ? 2 : 1),
                  this.tokens.push({
                    type: "tag-start",
                    close: n,
                    position: { start: r },
                  });
              },
            },
            {
              key: "scanTagEnd",
              value: function () {
                var e = this.html,
                  t = this.position,
                  n = "/" === e.charAt(t.index);
                Me(t, e, n ? 2 : 1);
                var r = Re(t);
                this.tokens.push({
                  type: "tag-end",
                  close: n,
                  position: { end: r },
                });
              },
            },
            {
              key: "scanTagName",
              value: function () {
                for (
                  var e = this.html,
                    t = this.position,
                    n = e.length,
                    r = t.index;
                  r < n;

                ) {
                  var i = e.charAt(r);
                  if (!Ue(i) && "/" !== i && ">" !== i) break;
                  r++;
                }
                for (var o = r + 1; o < n; ) {
                  var a = e.charAt(o);
                  if (Ue(a) || "/" === a || ">" === a) break;
                  o++;
                }
                De(t, e, o);
                var u = e.slice(r, o);
                return this.tokens.push({ type: "tag", content: u }), u;
              },
            },
            {
              key: "scanAttrs",
              value: function () {
                for (
                  var e = this.html,
                    t = this.position,
                    n = this.tokens,
                    r = t.index,
                    i = null,
                    o = r,
                    a = [],
                    u = e.length;
                  r < u;

                ) {
                  var s = e.charAt(r);
                  if (i) s === i && (i = null), r++;
                  else {
                    if ("/" === s || ">" === s) {
                      r !== o && a.push(e.slice(o, r));
                      break;
                    }
                    Ge(r, o, e)
                      ? (r !== o && a.push(e.slice(o, r)), (o = r + 1), r++)
                      : "'" === s || '"' === s
                      ? ((i = s), r++)
                      : r++;
                  }
                }
                De(t, e, r);
                for (var c = a.length, l = "attribute", d = 0; d < c; d++) {
                  var f = a[d];
                  if (f.includes("=")) {
                    var h = a[d + 1];
                    if (h && h.startsWith("=")) {
                      if (h.length > 1) {
                        var p = f + h;
                        n.push({ type: l, content: p }), (d += 1);
                        continue;
                      }
                      var v = a[d + 2];
                      if (((d += 1), v)) {
                        var g = f + "=" + v;
                        n.push({ type: l, content: g }), (d += 1);
                        continue;
                      }
                    }
                  }
                  if (f.endsWith("=")) {
                    var m = a[d + 1];
                    if (m && !m.includes("=")) {
                      var b = f + m;
                      n.push({ type: l, content: b }), (d += 1);
                      continue;
                    }
                    var y = f.slice(0, -1);
                    n.push({ type: l, content: y });
                  } else n.push({ type: l, content: f });
                }
              },
            },
            {
              key: "scanSkipTag",
              value: function (e) {
                for (
                  var t = this.html,
                    n = this.position,
                    r = e.toLowerCase(),
                    i = t.length;
                  n.index < i;

                ) {
                  var o = t.indexOf("</", n.index);
                  if (-1 === o) {
                    this.scanText();
                    break;
                  }
                  if ((De(n, t, o), r === this.scanTag().toLowerCase())) break;
                }
              },
            },
          ]),
          e
        );
      })();
      function $e(e) {
        var t = e.charAt(0),
          n = e.length - 1;
        return ('"' !== t && "'" !== t) || t !== e.charAt(n)
          ? e
          : e.slice(1, n);
      }
      var Je = (function () {
        function e() {
          (0, p.Z)(this, e), (this.styles = []);
        }
        return (
          (0, v.Z)(e, [
            {
              key: "extractStyle",
              value: function (e) {
                var t = this,
                  n = e;
                return (n = n.replace(
                  /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g,
                  function (e, n) {
                    var r = n.trim();
                    return t.stringToSelector(r), "";
                  }
                )).trim();
              },
            },
            {
              key: "stringToSelector",
              value: function (e) {
                for (
                  var t = this,
                    n = e.indexOf("{"),
                    r = function () {
                      var r = e.indexOf("}"),
                        i = e.slice(0, n).trim(),
                        o = e.slice(n + 1, r);
                      (o = (o = (o = o.replace(/:(.*);/g, function (e, t) {
                        var n = t.trim().replace(/ +/g, "+++");
                        return ":".concat(n, ";");
                      })).replace(/ /g, "")).replace(/\+\+\+/g, " ")),
                        /;$/.test(o) || (o += ";"),
                        i.split(",").forEach(function (e) {
                          var n = t.parseSelector(e);
                          t.styles.push({ content: o, selectorList: n });
                        }),
                        (e = e.slice(r + 1)),
                        (n = e.indexOf("{"));
                    };
                  n > -1;

                )
                  r();
              },
            },
            {
              key: "parseSelector",
              value: function (e) {
                return e
                  .trim()
                  .replace(/ *([>~+]) */g, " $1")
                  .replace(/ +/g, " ")
                  .replace(
                    /\[\s*([^[\]=\s]+)\s*=\s*([^[\]=\s]+)\s*\]/g,
                    "[$1=$2]"
                  )
                  .split(" ")
                  .map(function (e) {
                    var t = e.charAt(0),
                      n = {
                        isChild: ">" === t,
                        isGeneralSibling: "~" === t,
                        isAdjacentSibling: "+" === t,
                        tag: null,
                        id: null,
                        class: [],
                        attrs: [],
                      };
                    return (
                      "" !==
                        (e = (e = (e = e.replace(/^[>~+]/, "")).replace(
                          /\[(.+?)\]/g,
                          function (e, t) {
                            var i = t.split("="),
                              o = (0, r.Z)(i, 2),
                              a = o[0],
                              u = o[1],
                              s = -1 === t.indexOf("="),
                              c = { all: s, key: a, value: s ? null : u };
                            return n.attrs.push(c), "";
                          }
                        )).replace(/([.#][A-Za-z0-9-_]+)/g, function (e, t) {
                          return (
                            "#" === t[0]
                              ? (n.id = t.substr(1))
                              : "." === t[0] && n.class.push(t.substr(1)),
                            ""
                          );
                        })) && (n.tag = e),
                      n
                    );
                  });
              },
            },
            {
              key: "matchStyle",
              value: function (e, t, n) {
                var r = this;
                return (function (e) {
                  return e.sort(function (e, t) {
                    var n = Qe(e.selectorList),
                      r = Qe(t.selectorList);
                    if (n !== r) return n - r;
                    var i = Ye(e.selectorList),
                      o = Ye(t.selectorList);
                    return i !== o
                      ? i - o
                      : Xe(e.selectorList) - Xe(t.selectorList);
                  });
                })(this.styles).reduce(function (i, o, a) {
                  var u = o.content,
                    s = o.selectorList,
                    c = n[a],
                    l = s[c],
                    d = s[c + 1];
                  ((null == d ? void 0 : d.isGeneralSibling) ||
                    (null == d ? void 0 : d.isAdjacentSibling)) &&
                    ((l = d), (c += 1), (n[a] += 1));
                  var f = r.matchCurrent(e, t, l);
                  if (f && l.isGeneralSibling)
                    for (var h = Ke(t); h; ) {
                      if (
                        h.h5tagName &&
                        r.matchCurrent(h.h5tagName, h, s[c - 1])
                      ) {
                        f = !0;
                        break;
                      }
                      (h = Ke(h)), (f = !1);
                    }
                  if (f && l.isAdjacentSibling) {
                    var p = Ke(t);
                    (p &&
                      p.h5tagName &&
                      r.matchCurrent(p.h5tagName, p, s[c - 1])) ||
                      (f = !1);
                  }
                  if (f) {
                    if (c === s.length - 1) return i + u;
                    c < s.length - 1 && (n[a] += 1);
                  } else l.isChild && c > 0 && ((n[a] -= 1), r.matchCurrent(e, t, s[n[a]]) && (n[a] += 1));
                  return i;
                }, "");
              },
            },
            {
              key: "matchCurrent",
              value: function (e, t, n) {
                if (n.tag && n.tag !== e) return !1;
                if (n.id && n.id !== t.id) return !1;
                if (n.class.length)
                  for (
                    var r = t.className.split(" "), i = 0;
                    i < n.class.length;
                    i++
                  ) {
                    var o = n.class[i];
                    if (-1 === r.indexOf(o)) return !1;
                  }
                if (n.attrs.length)
                  for (var a = 0; a < n.attrs.length; a++) {
                    var u = n.attrs[a],
                      s = u.all,
                      c = u.key,
                      l = u.value;
                    if (s && !t.hasAttribute(c)) return !1;
                    if (t.getAttribute(c) !== $e(l || "")) return !1;
                  }
                return !0;
              },
            },
          ]),
          e
        );
      })();
      function Ke(e) {
        if (!e.parentElement) return null;
        var t = e.previousSibling;
        return t ? (1 === t.nodeType ? t : Ke(t)) : null;
      }
      function Qe(e) {
        return e.reduce(function (e, t) {
          return e + (t.id ? 1 : 0);
        }, 0);
      }
      function Ye(e) {
        return e.reduce(function (e, t) {
          return e + t.class.length + t.attrs.length;
        }, 0);
      }
      function Xe(e) {
        return e.reduce(function (e, t) {
          return e + (t.tag ? 1 : 0);
        }, 0);
      }
      function et(e, t) {
        for (
          var n = Object.create(null), r = e.split(","), i = 0;
          i < r.length;
          i++
        )
          n[r[i]] = !0;
        return t
          ? function (e) {
              return !!n[e.toLowerCase()];
            }
          : function (e) {
              return !!n[e];
            };
      }
      var tt = { img: "image", iframe: "web-view" },
        nt = et(
          Object.keys(g.rD)
            .map(function (e) {
              return e.toLowerCase();
            })
            .join(","),
          !0
        ),
        rt = et(
          "a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b",
          !0
        ),
        it = et(
          "address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt",
          !0
        ),
        ot = {
          li: ["ul", "ol", "menu"],
          dt: ["dl"],
          dd: ["dl"],
          tbody: ["table"],
          thead: ["table"],
          tfoot: ["table"],
          tr: ["table"],
          td: ["table"],
        };
      function at(e, t) {
        var n = ot[e];
        if (n)
          for (var r = t.length - 1; r >= 0; ) {
            var i = t[r].tagName;
            if (i === e) break;
            if (n && n.includes(i)) return !0;
            r--;
          }
        return !1;
      }
      function ut(e) {
        var t = e.indexOf("=");
        return -1 === t
          ? [e]
          : [e.slice(0, t).trim(), e.slice(t + "=".length).trim()];
      }
      function st(e, t, n, i) {
        return e
          .filter(function (e) {
            return (
              "comment" !== e.type && ("text" !== e.type || "" !== e.content)
            );
          })
          .map(function (e) {
            if ("text" === e.type) {
              var o = t.createTextNode(e.content);
              return (
                (0, g.mf)(_e.html.transformText) &&
                  (o = _e.html.transformText(o, e)),
                null == i || i.appendChild(o),
                o
              );
            }
            var a = t.createElement(
              (function (e) {
                return _e.html.renderHTMLTag
                  ? e
                  : tt[e]
                  ? tt[e]
                  : nt(e)
                  ? e
                  : it(e)
                  ? "view"
                  : rt(e)
                  ? "text"
                  : "view";
              })(e.tagName)
            );
            (a.h5tagName = e.tagName),
              null == i || i.appendChild(a),
              _e.html.renderHTMLTag || (a.className = "h5-".concat(e.tagName));
            for (var u = 0; u < e.attributes.length; u++) {
              var s = ut(e.attributes[u]),
                c = (0, r.Z)(s, 2),
                l = c[0],
                d = c[1];
              if ("class" === l) a.className += " " + $e(d);
              else {
                if ("o" === l[0] && "n" === l[1]) continue;
                a.setAttribute(l, null == d || $e(d));
              }
            }
            var f = n.styleTagParser,
              h = n.descendantList.slice(),
              p = f.matchStyle(e.tagName, a, h);
            return (
              a.setAttribute("style", p + a.style.cssText),
              st(e.children, t, { styleTagParser: f, descendantList: h }, a),
              (0, g.mf)(_e.html.transformElement)
                ? _e.html.transformElement(a, e)
                : a
            );
          });
      }
      function ct(e, t) {
        var n = new Je();
        e = n.extractStyle(e);
        var r = { tagName: "", children: [], type: "element", attributes: [] };
        return (
          (function e(t) {
            for (
              var n = t.tokens,
                r = t.stack,
                i = t.cursor,
                o = n.length,
                a = r[r.length - 1].children;
              i < o;

            ) {
              var u = n[i];
              if ("tag-start" === u.type) {
                var s = n[++i];
                i++;
                var c = s.content.toLowerCase();
                if (u.close) {
                  for (var l = r.length, d = !1; --l > -1; )
                    if (r[l].tagName === c) {
                      d = !0;
                      break;
                    }
                  for (; i < o && "tag-end" === n[i].type; ) i++;
                  if (d) {
                    r.splice(l);
                    break;
                  }
                } else {
                  var f = _e.html.closingElements.has(c);
                  if ((f && (f = !at(c, r)), f))
                    for (var h = r.length - 1; h > 0; ) {
                      if (c === r[h].tagName) {
                        r.splice(h), (a = r[h - 1].children);
                        break;
                      }
                      h -= 1;
                    }
                  for (
                    var p = [], v = void 0;
                    i < o && "tag-end" !== (v = n[i]).type;

                  )
                    p.push(v.content), i++;
                  i++;
                  var g = [],
                    m = {
                      type: "element",
                      tagName: s.content,
                      attributes: p,
                      children: g,
                    };
                  if ((a.push(m), !v.close && !_e.html.voidElements.has(c))) {
                    r.push({ tagName: c, children: g });
                    var b = { tokens: n, cursor: i, stack: r };
                    e(b), (i = b.cursor);
                  }
                }
              } else a.push(u), i++;
            }
            t.cursor = i;
          })({ tokens: new qe(e).scan(), options: _e, cursor: 0, stack: [r] }),
          st(r.children, t, {
            styleTagParser: n,
            descendantList: Array(n.styles.length).fill(0),
          })
        );
      }
      function lt(e, t) {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        for (var n = ct(t, e.ownerDocument), r = 0; r < n.length; r++)
          e.appendChild(n[r]);
      }
      (_e.html = {
        skipElements: new Set(["style", "script"]),
        voidElements: new Set([
          "!doctype",
          "area",
          "base",
          "br",
          "col",
          "command",
          "embed",
          "hr",
          "img",
          "input",
          "keygen",
          "link",
          "meta",
          "param",
          "source",
          "track",
          "wbr",
        ]),
        closingElements: new Set([
          "html",
          "head",
          "body",
          "p",
          "dt",
          "dd",
          "li",
          "option",
          "thead",
          "th",
          "tbody",
          "tr",
          "td",
          "tfoot",
          "colgroup",
        ]),
        renderHTMLTag: !1,
      }),
        le.extend("innerHTML", {
          set: function (e) {
            lt.call(this, this, e);
          },
          get: function () {
            return "";
          },
        }),
        Be.extend("getBoundingClientRect", function () {
          var e = this;
          return _e.miniGlobal
            ? new Promise(function (t) {
                _e.miniGlobal
                  .createSelectorQuery()
                  .select("#".concat(e.uid))
                  .boundingClientRect(function (e) {
                    t(e);
                  })
                  .exec();
              })
            : Promise.resolve(null);
        });
      var dt = (function () {
        function e(t, n, r) {
          (0, p.Z)(this, e),
            (this._stop = !1),
            (this._end = !1),
            (this.defaultPrevented = !1),
            (this.timeStamp = Date.now()),
            (this.type = t.toLowerCase()),
            (this.mpEvent = r),
            (this.bubbles = Boolean(n && n.bubbles)),
            (this.cancelable = Boolean(n && n.cancelable));
        }
        return (
          (0, v.Z)(e, [
            {
              key: "stopPropagation",
              value: function () {
                this._stop = !0;
              },
            },
            {
              key: "stopImmediatePropagation",
              value: function () {
                this._end = this._stop = !0;
              },
            },
            {
              key: "preventDefault",
              value: function () {
                this.defaultPrevented = !0;
              },
            },
            {
              key: "target",
              get: function () {
                var e,
                  t,
                  n = this.cacheTarget;
                if (n) return n;
                var r = Object.create(
                    (null === (e = this.mpEvent) || void 0 === e
                      ? void 0
                      : e.target) || null
                  ),
                  i = ae.document.getElementById(r.id);
                for (var o in ((r.dataset = null !== i ? i.dataset : g.kT),
                null === (t = this.mpEvent) || void 0 === t
                  ? void 0
                  : t.detail))
                  r[o] = this.mpEvent.detail[o];
                return (this.cacheTarget = r), r;
              },
            },
            {
              key: "currentTarget",
              get: function () {
                var e,
                  t,
                  n,
                  r,
                  i = this.cacheCurrentTarget;
                if (i) return i;
                var o = ae.document,
                  a = Object.create(
                    (null === (e = this.mpEvent) || void 0 === e
                      ? void 0
                      : e.currentTarget) || null
                  ),
                  u = o.getElementById(a.id),
                  s = o.getElementById(
                    (null ===
                      (n =
                        null === (t = this.mpEvent) || void 0 === t
                          ? void 0
                          : t.target) || void 0 === n
                      ? void 0
                      : n.id) || null
                  );
                if (null === u || (u && u === s))
                  return (this.cacheCurrentTarget = this.target), this.target;
                for (var c in ((a.dataset = u.dataset),
                null === (r = this.mpEvent) || void 0 === r
                  ? void 0
                  : r.detail))
                  a[c] = this.mpEvent.detail[c];
                return (this.cacheCurrentTarget = a), a;
              },
            },
          ]),
          e
        );
      })();
      function ft(e, t) {
        if ("string" == typeof e)
          return new dt(e, { bubbles: !0, cancelable: !0 });
        var n = new dt(e.type, { bubbles: !0, cancelable: !0 }, e);
        for (var r in e)
          "currentTarget" !== r &&
            "target" !== r &&
            "type" !== r &&
            "timeStamp" !== r &&
            (n[r] = e[r]);
        return (
          "confirm" === n.type &&
            (null == t ? void 0 : t.nodeName) === N &&
            (n.keyCode = 13),
          n
        );
      }
      var ht = {};
      function pt(e) {
        var t;
        g.PT.call("modifyMpEventImpl", e),
          e.currentTarget || (e.currentTarget = e.target);
        var n = e.currentTarget,
          r =
            (null === (t = n.dataset) || void 0 === t ? void 0 : t.sid) ||
            n.id ||
            "",
          i = ae.document.getElementById(r);
        if (i) {
          var o = function () {
            var t = ft(e, i);
            g.PT.call("modifyTaroEvent", t, i), i.dispatchEvent(t);
          };
          if (g.PT.isExist("batchedEventUpdates")) {
            var a = e.type;
            !g.PT.call("isBubbleEvents", a) ||
            !(function (e, t) {
              for (
                var n, r = !1;
                (null == e ? void 0 : e.parentElement) &&
                e.parentElement._path !== w;

              ) {
                if (
                  null === (n = e.parentElement.__handlers[t]) || void 0 === n
                    ? void 0
                    : n.length
                ) {
                  r = !0;
                  break;
                }
                e = e.parentElement;
              }
              return r;
            })(i, a) ||
            ("touchmove" === a && i.props.catchMove)
              ? g.PT.call("batchedEventUpdates", function () {
                  ht[a] &&
                    (ht[a].forEach(function (e) {
                      return e();
                    }),
                    delete ht[a]),
                    o();
                })
              : (ht[a] || (ht[a] = [])).push(o);
          } else o();
        }
      }
      var vt = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            return (0, p.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, v.Z)(n, [
              {
                key: "value",
                get: function () {
                  var e = this.props[O];
                  return null == e ? "" : e;
                },
                set: function (e) {
                  this.setAttribute(O, e);
                },
              },
              {
                key: "dispatchEvent",
                value: function (e) {
                  if (e.mpEvent) {
                    var t = e.mpEvent.detail.value;
                    "change" === e.type
                      ? (this.props.value = t)
                      : e.type === N && (this.value = t);
                  }
                  return (0, l.Z)(
                    (0, d.Z)(n.prototype),
                    "dispatchEvent",
                    this
                  ).call(this, e);
                },
              },
            ]),
            n
          );
        })(Be),
        gt = new ((function () {
          function e() {
            (0, p.Z)(this, e), (this.recorder = new Map());
          }
          return (
            (0, v.Z)(e, [
              {
                key: "start",
                value: function (e) {
                  _e.debug && this.recorder.set(e, Date.now());
                },
              },
              {
                key: "stop",
                value: function (e) {
                  if (_e.debug) {
                    var t = Date.now() - this.recorder.get(e);
                    console.log("".concat(e, " 时长： ").concat(t, "ms"));
                  }
                },
              },
            ]),
            e
          );
        })())();
      function mt(e, t) {
        var n,
          r = t.slice(1),
          i = e,
          o = "";
        if (
          (r.some(function (e, r) {
            var a = e
              .replace(/^\[(.+)\]$/, "$1")
              .replace(/\bcn\b/g, "childNodes");
            if (((i = i[a]), (0, g.o8)(i))) return !0;
            if (i.nodeName === L) {
              var u = X.get(i.sid);
              u && ((n = u), (o = t.slice(r + 2).join(".")));
            }
          }),
          n)
        )
          return { customWrapper: n, splitedPath: o };
      }
      var bt,
        yt = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            var e;
            return (
              (0, p.Z)(this, n),
              ((e = t.call(this)).updatePayloads = []),
              (e.updateCallbacks = []),
              (e.pendingUpdate = !1),
              (e.ctx = null),
              (e.nodeName = w),
              (e.tagName = w.toUpperCase()),
              e
            );
          }
          return (
            (0, v.Z)(n, [
              {
                key: "_path",
                get: function () {
                  return w;
                },
              },
              {
                key: "_root",
                get: function () {
                  return this;
                },
              },
              {
                key: "enqueueUpdate",
                value: function (e) {
                  this.updatePayloads.push(e),
                    !this.pendingUpdate && this.ctx && this.performUpdate();
                },
              },
              {
                key: "performUpdate",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    n = arguments.length > 1 ? arguments[1] : void 0;
                  this.pendingUpdate = !0;
                  var r = this.ctx;
                  setTimeout(function () {
                    gt.start(y);
                    for (
                      var i = Object.create(null),
                        o = new Set(t ? ["root.cn.[0]", "root.cn[0]"] : []);
                      e.updatePayloads.length > 0;

                    ) {
                      var u = e.updatePayloads.shift(),
                        s = u.path,
                        c = u.value;
                      s.endsWith("cn") && o.add(s), (i[s] = c);
                    }
                    var l = function (e) {
                      o.forEach(function (t) {
                        e.includes(t) && e !== t && delete i[e];
                      });
                      var t = i[e];
                      (0, g.mf)(t) && (i[e] = t());
                    };
                    for (var d in i) l(d);
                    if ((0, g.mf)(n)) return n(i);
                    e.pendingUpdate = !1;
                    var f = {},
                      h = new Map();
                    if (t) f = i;
                    else
                      for (var p in i) {
                        var v = p.split("."),
                          m = mt(e, v);
                        if (m) {
                          var b = m.customWrapper,
                            w = m.splitedPath;
                          h.set(
                            b,
                            Object.assign(
                              Object.assign({}, h.get(b) || {}),
                              (0, a.Z)({}, "i.".concat(w), i[p])
                            )
                          );
                        } else f[p] = i[p];
                      }
                    var S = h.size,
                      P = Object.keys(f).length > 0,
                      C = S + (P ? 1 : 0),
                      T = 0,
                      x = function () {
                        ++T === C &&
                          (gt.stop(y),
                          e.flushUpdateCallback(),
                          t && gt.stop(k));
                      };
                    S &&
                      h.forEach(function (e, t) {
                        t.setData(e, x);
                      }),
                      P && r.setData(f, x);
                  }, 0);
                },
              },
              {
                key: "enqueueUpdateCallback",
                value: function (e, t) {
                  this.updateCallbacks.push(function () {
                    t ? e.call(t) : e();
                  });
                },
              },
              {
                key: "flushUpdateCallback",
                value: function () {
                  var e = this.updateCallbacks;
                  if (e.length) {
                    var t = e.slice(0);
                    this.updateCallbacks.length = 0;
                    for (var n = 0; n < t.length; n++) t[n]();
                  }
                },
              },
            ]),
            n
          );
        })(Be),
        kt = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, c.Z)(n);
          function n(e) {
            var r;
            return (
              (0, p.Z)(this, n),
              ((r = t.call(this)).nodeType = 3),
              (r.nodeName = "#text"),
              (r._value = e),
              r
            );
          }
          return (
            (0, v.Z)(n, [
              {
                key: "textContent",
                get: function () {
                  return this._value;
                },
                set: function (e) {
                  G.record({
                    target: this,
                    type: "characterData",
                    oldValue: this._value,
                  }),
                    (this._value = e),
                    this.enqueueUpdate({
                      path: "".concat(this._path, ".", "v"),
                      value: e,
                    });
                },
              },
              {
                key: "nodeValue",
                get: function () {
                  return this._value;
                },
                set: function (e) {
                  this.textContent = e;
                },
              },
              {
                key: "data",
                get: function () {
                  return this._value;
                },
                set: function (e) {
                  this.textContent = e;
                },
              },
            ]),
            n
          );
        })(le),
        wt = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            var e;
            return (
              (0, p.Z)(this, n),
              ((e = t.call(this)).createEvent = ft),
              (e.nodeType = 9),
              (e.nodeName = "#document"),
              e
            );
          }
          return (
            (0, v.Z)(n, [
              {
                key: "createElement",
                value: function (e) {
                  if (e === w) return new yt();
                  var t = g._c.has(e) ? new vt() : new Be();
                  return (t.nodeName = e), (t.tagName = e.toUpperCase()), t;
                },
              },
              {
                key: "createElementNS",
                value: function (e, t) {
                  return this.createElement(t);
                },
              },
              {
                key: "createTextNode",
                value: function (e) {
                  return new kt(e);
                },
              },
              {
                key: "getElementById",
                value: function (e) {
                  var t = oe.get(e);
                  return (0, g.o8)(t) ? null : t;
                },
              },
              {
                key: "querySelector",
                value: function (e) {
                  return /^#/.test(e) ? this.getElementById(e.slice(1)) : null;
                },
              },
              {
                key: "querySelectorAll",
                value: function () {
                  return [];
                },
              },
              {
                key: "createComment",
                value: function () {
                  var e = new kt("");
                  return (e.nodeName = Z), e;
                },
              },
              {
                key: "defaultView",
                get: function () {
                  return ae.window;
                },
              },
            ]),
            n
          );
        })(Be);
      function St(e) {
        return e.style;
      }
      bt = ae.document = (function () {
        var e = new wt(),
          t = e.createElement.bind(e),
          n = t("html"),
          r = t("head"),
          i = t("body"),
          o = t("app");
        o.id = "app";
        var a = t("container");
        return (
          e.appendChild(n),
          n.appendChild(r),
          n.appendChild(i),
          i.appendChild(a),
          a.appendChild(o),
          (e.documentElement = n),
          (e.head = r),
          (e.body = i),
          e
        );
      })();
      var Pt,
        Ct =
          "(Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36",
        Tt = {
          appCodeName: "Mozilla",
          appName: "Netscape",
          appVersion: "5.0 " + Ct,
          cookieEnabled: !0,
          mimeTypes: [],
          onLine: !0,
          platform: "MacIntel",
          plugins: [],
          product: "Taro",
          productSub: "20030107",
          userAgent: "Mozilla/5.0 " + Ct,
          vendor: "Joyent",
          vendorSub: "",
        };
      !(function () {
        var e;
        "undefined" != typeof performance &&
        null !== performance &&
        performance.now
          ? (Pt = function () {
              return performance.now();
            })
          : Date.now
          ? ((e = Date.now()),
            (Pt = function () {
              return Date.now() - e;
            }))
          : ((e = new Date().getTime()),
            (Pt = function () {
              return new Date().getTime() - e;
            }));
      })();
      var xt,
        Et = 0,
        At =
          null != m
            ? m
            : function (e) {
                var t = Pt(),
                  n = Math.max(Et + 16, t);
                return setTimeout(function () {
                  e((Et = n));
                }, n - t);
              },
        Ot =
          null != b
            ? b
            : function (e) {
                clearTimeout(e);
              },
        Nt = g.PT.call("getEventCenter", g.zW),
        Lt = (function (e) {
          (0, s.Z)(r, e);
          var t = (0, c.Z)(r);
          function r() {
            var e;
            return (
              (0, p.Z)(this, r),
              ((e = t.call(this)).navigator = Tt),
              (e.requestAnimationFrame = At),
              (e.cancelAnimationFrame = Ot),
              (e.getComputedStyle = St),
              []
                .concat(
                  (0, h.Z)(Object.getOwnPropertyNames(n.g || {})),
                  (0, h.Z)(Object.getOwnPropertySymbols(n.g || {}))
                )
                .forEach(function (t) {
                  "atob" !== t &&
                    "document" !== t &&
                    (Object.prototype.hasOwnProperty.call((0, u.Z)(e), t) ||
                      (e[t] = n.g[t]));
                }),
              e.Date || (e.Date = Date),
              e
            );
          }
          return (
            (0, v.Z)(r, [
              {
                key: "document",
                get: function () {
                  return ae.document;
                },
              },
              {
                key: "addEventListener",
                value: function (e, t) {
                  (0, g.HD)(e) && this.on(e, t, null);
                },
              },
              {
                key: "removeEventListener",
                value: function (e, t) {
                  (0, g.HD)(e) && this.off(e, t, null);
                },
              },
              {
                key: "setTimeout",
                value: (function (e) {
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return (
                    (t.toString = function () {
                      return e.toString();
                    }),
                    t
                  );
                })(function () {
                  return setTimeout.apply(void 0, arguments);
                }),
              },
              {
                key: "clearTimeout",
                value: (function (e) {
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return (
                    (t.toString = function () {
                      return e.toString();
                    }),
                    t
                  );
                })(function () {
                  return clearTimeout.apply(void 0, arguments);
                }),
              },
            ]),
            r
          );
        })(g.zW);
      xt = ae.window = new Lt();
      var It = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            return (0, p.Z)(this, n), t.apply(this, arguments);
          }
          return (0, v.Z)(n);
        })(Be),
        jt = { app: null, router: null, page: null },
        Zt = function () {
          return jt;
        },
        Bt = new Map(),
        _t = q();
      function Mt(e, t) {
        g.PT.call("mergePageInstance", Bt.get(t), e), Bt.set(t, e);
      }
      function Dt(e) {
        return Bt.get(e);
      }
      function Rt(e) {
        Bt.delete(e);
      }
      function Ft(e) {
        return null == e ? "" : "/" === e.charAt(0) ? e : "/" + e;
      }
      function Ut(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
          i < n;
          i++
        )
          r[i - 2] = arguments[i];
        var o = Bt.get(e);
        if (null != o) {
          var a = g.PT.call("getLifecycle", o, t);
          if ((0, g.kJ)(a)) {
            var u = a.map(function (e) {
              return e.apply(o, r);
            });
            return u[0];
          }
          if ((0, g.mf)(a)) return a.apply(o, r);
        }
      }
      function Wt(e) {
        if (null == e) return "";
        var t = Object.keys(e)
          .map(function (t) {
            return t + "=" + e[t];
          })
          .join("&");
        return "" === t ? t : "?" + t;
      }
      function zt(e, t) {
        var n = e.indexOf("?");
        return "".concat(n > -1 ? e.substring(0, n) : e).concat(Wt(t));
      }
      function Vt(e) {
        return e + "." + _;
      }
      function Ht(e) {
        return e + "." + M;
      }
      function Gt(e) {
        return e + ".onHide";
      }
      function qt(e, t, n, i) {
        var o,
          u,
          s,
          c = null != t ? t : "taro_page_".concat(_t()),
          l = (0, r.Z)(g.PT.call("getMiniLifecycleImpl").page, 7),
          d = l[0],
          f = l[1],
          h = l[2],
          p = l[3],
          v = l[4],
          m = l[5],
          b = l[6],
          y = null,
          w = !1,
          S = [];
        function P(e) {
          var t = e.route || e.__route__ || e.$taroPath;
          (jt.router = {
            params: e.$taroParams,
            path: Ft(t),
            $taroPath: e.$taroPath,
            onReady: Vt(c),
            onShow: Ht(c),
            onHide: Gt(c),
          }),
            (0, g.o8)(e.exitState) || (jt.router.exitState = e.exitState);
        }
        var C =
          ((o = {}),
          (0, a.Z)(o, d, function () {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = arguments.length > 1 ? arguments[1] : void 0;
            (s = new Promise(function (e) {
              u = e;
            })),
              gt.start(k),
              (jt.page = this),
              (this.config = i || {});
            var o = Object.assign({}, n, { $taroTimestamp: Date.now() }),
              a = (this.$taroPath = zt(c, o));
            null == this.$taroParams && (this.$taroParams = o), P(this);
            var l = function () {
              jt.app.mount(e, a, function () {
                (y = ae.document.getElementById(a)),
                  (0, g.zx)(null !== y, "没有找到页面实例。"),
                  Ut(a, B, t.$taroParams),
                  u(),
                  (y.ctx = t),
                  y.performUpdate(!0, r);
              });
            };
            w ? S.push(l) : l();
          }),
          (0, a.Z)(o, f, function () {
            var e = this.$taroPath;
            Ut(e, f),
              (w = !0),
              jt.app.unmount(e, function () {
                (w = !1),
                  Bt.delete(e),
                  y && ((y.ctx = null), (y = null)),
                  S.length &&
                    (S.forEach(function (e) {
                      return e();
                    }),
                    (S = []));
              });
          }),
          (0, a.Z)(o, h, function () {
            Ut(this.$taroPath, _),
              At(function () {
                return Nt.trigger(Vt(c));
              }),
              (this.onReady.called = !0);
          }),
          (0, a.Z)(o, p, function () {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            s.then(function () {
              (jt.page = e),
                P(e),
                Ut(e.$taroPath, M, t),
                At(function () {
                  return Nt.trigger(Ht(c));
                });
            });
          }),
          (0, a.Z)(o, v, function () {
            jt.page === this && ((jt.page = null), (jt.router = null)),
              Ut(this.$taroPath, "onHide"),
              Nt.trigger(Gt(c));
          }),
          o);
        return (
          m.forEach(function (e) {
            C[e] = function () {
              return Ut.apply(
                void 0,
                [this.$taroPath, e].concat(
                  Array.prototype.slice.call(arguments)
                )
              );
            };
          }),
          b.forEach(function (t) {
            var n;
            (e[t] ||
              (null === (n = e.prototype) || void 0 === n ? void 0 : n[t]) ||
              e[t.replace(/^on/, "enable")]) &&
              (C[t] = function () {
                for (
                  var e, n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                var o = null === (e = r[0]) || void 0 === e ? void 0 : e.target;
                if (null == o ? void 0 : o.id) {
                  var a = o.id,
                    u = ae.document.getElementById(a);
                  u && (o.dataset = u.dataset);
                }
                return Ut.apply(void 0, [this.$taroPath, t].concat(r));
              });
          }),
          (C.eh = pt),
          (0, g.o8)(n) || (C.data = n),
          g.PT.call("modifyPageObject", C),
          C
        );
      }
      function $t(e, t, n) {
        var i,
          o = null != t ? t : "taro_component_".concat(_t()),
          u = null,
          s = (0, r.Z)(g.PT.call("getMiniLifecycleImpl").component, 2),
          c = s[0],
          l = s[1],
          d =
            ((i = {}),
            (0, a.Z)(i, c, function () {
              var t,
                n = this;
              gt.start(k);
              var r = zt(o, {
                id:
                  (null === (t = this.getPageId) || void 0 === t
                    ? void 0
                    : t.call(this)) || _t(),
              });
              jt.app.mount(e, r, function () {
                (u = ae.document.getElementById(r)),
                  (0, g.zx)(null !== u, "没有找到组件实例。"),
                  (n.$taroInstances = Bt.get(r)),
                  Ut(r, B),
                  (u.ctx = n),
                  u.performUpdate(!0);
              });
            }),
            (0, a.Z)(i, l, function () {
              var e = zt(o, { id: this.getPageId() });
              jt.app.unmount(e, function () {
                Bt.delete(e), u && (u.ctx = null);
              });
            }),
            (0, a.Z)(i, "methods", { eh: pt }),
            i);
        return (
          (0, g.o8)(n) || (d.data = n),
          [D, R, F].forEach(function (t) {
            var n;
            d[t] = null !== (n = e[t]) && void 0 !== n ? n : g.kT;
          }),
          d
        );
      }
      function Jt(e) {
        var t,
          n = e === L,
          i = (0, r.Z)(g.PT.call("getMiniLifecycleImpl").component, 2),
          o = i[0],
          u = i[1],
          s = n
            ? ((t = {}),
              (0, a.Z)(t, o, function () {
                var e,
                  t,
                  n =
                    (null === (e = this.data.i) || void 0 === e
                      ? void 0
                      : e.sid) ||
                    (null === (t = this.props.i) || void 0 === t
                      ? void 0
                      : t.sid);
                (0, g.HD)(n) && X.set(n, this);
              }),
              (0, a.Z)(t, u, function () {
                var e,
                  t,
                  n =
                    (null === (e = this.data.i) || void 0 === e
                      ? void 0
                      : e.sid) ||
                    (null === (t = this.props.i) || void 0 === t
                      ? void 0
                      : t.sid);
                (0, g.HD)(n) && X.delete(n);
              }),
              t)
            : g.kT;
        return Object.assign(
          {
            properties: {
              i: { type: Object, value: (0, a.Z)({}, "nn", x) },
              l: { type: String, value: "" },
            },
            options: { addGlobalClass: !0, virtualHost: !n },
            methods: { eh: pt },
          },
          s
        );
      }
      var Kt = function (e, t) {
        var n = jt.router,
          r = function () {
            setTimeout(function () {
              t ? e.call(t) : e();
            }, 1);
          };
        if (null !== n) {
          var i = null,
            o = n.$taroPath;
          (
            null == (i = ae.document.getElementById(o))
              ? void 0
              : i.pendingUpdate
          )
            ? i.enqueueUpdateCallback(e, t)
            : r();
        } else r();
      };
    },
    92954: function (e, t, n) {
      var r = n(32180).hooks,
        i = n(99671).Z;
      r.isExist("initNativeApi") && r.call("initNativeApi", i),
        (e.exports = i),
        (e.exports.default = e.exports);
    },
    44560: function (e, t, n) {
      "use strict";
      var r = n(32180);
      Component((0, r.createRecursiveComponentConfig)());
    },
    99313: function (e, t, n) {
      "use strict";
      var r = n(32180);
      Component((0, r.createRecursiveComponentConfig)("custom-wrapper"));
    },
    59820: function (e, t, n) {
      "use strict";
      n.d(t, {
        CA: function () {
          return B;
        },
        Ft: function () {
          return C;
        },
        HD: function () {
          return S;
        },
        Ig: function () {
          return q;
        },
        Kn: function () {
          return T;
        },
        PT: function () {
          return L;
        },
        W: function () {
          return F;
        },
        ZT: function () {
          return j;
        },
        _c: function () {
          return k;
        },
        eu: function () {
          return Z;
        },
        kJ: function () {
          return A;
        },
        kT: function () {
          return I;
        },
        ku: function () {
          return R;
        },
        mf: function () {
          return x;
        },
        o8: function () {
          return P;
        },
        rD: function () {
          return y;
        },
        xi: function () {
          return U;
        },
        zW: function () {
          return w;
        },
        zx: function () {
          return _;
        },
      });
      var r = n(22276),
        i = n(21867),
        o = n(86066),
        a = n(93212),
        u = n(57042),
        s = n(24460),
        c = "[]",
        l = "",
        d = "!0",
        f = "!1",
        h = {
          bindTouchStart: l,
          bindTouchMove: l,
          bindTouchEnd: l,
          bindTouchCancel: l,
          bindLongTap: l,
        },
        p = {
          animation: l,
          bindAnimationStart: l,
          bindAnimationIteration: l,
          bindAnimationEnd: l,
          bindTransitionEnd: l,
        };
      function v(e) {
        return "'".concat(e, "'");
      }
      var g = Object.assign(
          Object.assign(
            {
              "hover-class": v("none"),
              "hover-stop-propagation": f,
              "hover-start-time": "50",
              "hover-stay-time": "400",
            },
            h
          ),
          p
        ),
        m = { type: l, size: "23", color: l },
        b = Object.assign(
          {
            longitude: l,
            latitude: l,
            scale: "16",
            markers: c,
            covers: l,
            polyline: c,
            circles: c,
            controls: c,
            "include-points": c,
            "show-location": l,
            "layer-style": "1",
            bindMarkerTap: l,
            bindControlTap: l,
            bindCalloutTap: l,
            bindUpdated: l,
          },
          h
        ),
        y = {
          View: g,
          Icon: m,
          Progress: {
            percent: l,
            "stroke-width": "6",
            color: v("#09BB07"),
            activeColor: v("#09BB07"),
            backgroundColor: v("#EBEBEB"),
            active: f,
            "active-mode": v("backwards"),
            "show-info": f,
          },
          RichText: { nodes: c },
          Text: { selectable: f, space: l, decode: f },
          Button: Object.assign(
            {
              size: v("default"),
              type: l,
              plain: f,
              disabled: l,
              loading: f,
              "form-type": l,
              "open-type": l,
              "hover-class": v("button-hover"),
              "hover-stop-propagation": f,
              "hover-start-time": "20",
              "hover-stay-time": "70",
              name: l,
            },
            h
          ),
          Checkbox: {
            value: l,
            disabled: l,
            checked: f,
            color: v("#09BB07"),
            name: l,
          },
          CheckboxGroup: { bindChange: l, name: l },
          Form: { "report-submit": f, bindSubmit: l, bindReset: l, name: l },
          Input: {
            value: l,
            type: v(l),
            password: f,
            placeholder: l,
            "placeholder-style": l,
            "placeholder-class": v("input-placeholder"),
            disabled: l,
            maxlength: "140",
            "cursor-spacing": "0",
            focus: f,
            "confirm-type": v("done"),
            "confirm-hold": f,
            cursor: "i.value.length",
            "selection-start": "-1",
            "selection-end": "-1",
            bindInput: l,
            bindFocus: l,
            bindBlur: l,
            bindConfirm: l,
            name: l,
          },
          Label: { for: l, name: l },
          Picker: {
            mode: v("selector"),
            disabled: l,
            range: l,
            "range-key": l,
            value: l,
            start: l,
            end: l,
            fields: v("day"),
            "custom-item": l,
            name: l,
            bindCancel: l,
            bindChange: l,
            bindColumnChange: l,
          },
          PickerView: {
            value: l,
            "indicator-style": l,
            "indicator-class": l,
            "mask-style": l,
            "mask-class": l,
            bindChange: l,
            name: l,
          },
          PickerViewColumn: { name: l },
          Radio: {
            value: l,
            checked: f,
            disabled: l,
            color: v("#09BB07"),
            name: l,
          },
          RadioGroup: { bindChange: l, name: l },
          Slider: {
            min: "0",
            max: "100",
            step: "1",
            disabled: l,
            value: "0",
            activeColor: v("#1aad19"),
            backgroundColor: v("#e9e9e9"),
            "block-size": "28",
            "block-color": v("#ffffff"),
            "show-value": f,
            bindChange: l,
            bindChanging: l,
            name: l,
          },
          Switch: {
            checked: f,
            disabled: l,
            type: v("switch"),
            color: v("#04BE02"),
            bindChange: l,
            name: l,
          },
          CoverImage: { src: l, bindLoad: "eh", bindError: "eh" },
          Textarea: {
            value: l,
            placeholder: l,
            "placeholder-style": l,
            "placeholder-class": v("textarea-placeholder"),
            disabled: l,
            maxlength: "140",
            "auto-focus": f,
            focus: f,
            "auto-height": f,
            fixed: f,
            "cursor-spacing": "0",
            cursor: "-1",
            "selection-start": "-1",
            "selection-end": "-1",
            bindFocus: l,
            bindBlur: l,
            bindLineChange: l,
            bindInput: l,
            bindConfirm: l,
            name: l,
          },
          CoverView: Object.assign({ "scroll-top": f }, h),
          MovableArea: { "scale-area": f },
          MovableView: Object.assign(
            Object.assign(
              {
                direction: "none",
                inertia: f,
                "out-of-bounds": f,
                x: l,
                y: l,
                damping: "20",
                friction: "2",
                disabled: l,
                scale: f,
                "scale-min": "0.5",
                "scale-max": "10",
                "scale-value": "1",
                bindChange: l,
                bindScale: l,
                bindHTouchMove: l,
                bindVTouchMove: l,
                width: v("10px"),
                height: v("10px"),
              },
              h
            ),
            p
          ),
          ScrollView: Object.assign(
            Object.assign(
              {
                "scroll-x": f,
                "scroll-y": f,
                "upper-threshold": "50",
                "lower-threshold": "50",
                "scroll-top": l,
                "scroll-left": l,
                "scroll-into-view": l,
                "scroll-with-animation": f,
                "enable-back-to-top": f,
                bindScrollToUpper: l,
                bindScrollToLower: l,
                bindScroll: l,
              },
              h
            ),
            p
          ),
          Swiper: Object.assign(
            {
              "indicator-dots": f,
              "indicator-color": v("rgba(0, 0, 0, .3)"),
              "indicator-active-color": v("#000000"),
              autoplay: f,
              current: "0",
              interval: "5000",
              duration: "500",
              circular: f,
              vertical: f,
              "previous-margin": v("0px"),
              "next-margin": v("0px"),
              "display-multiple-items": "1",
              bindChange: l,
              bindTransition: l,
              bindAnimationFinish: l,
            },
            h
          ),
          SwiperItem: { "item-id": l },
          Navigator: {
            url: l,
            "open-type": v("navigate"),
            delta: "1",
            "hover-class": v("navigator-hover"),
            "hover-stop-propagation": f,
            "hover-start-time": "50",
            "hover-stay-time": "600",
            bindSuccess: l,
            bindFail: l,
            bindComplete: l,
          },
          Audio: {
            id: l,
            src: l,
            loop: f,
            controls: f,
            poster: l,
            name: l,
            author: l,
            bindError: l,
            bindPlay: l,
            bindPause: l,
            bindTimeUpdate: l,
            bindEnded: l,
          },
          Camera: {
            "device-position": v("back"),
            flash: v("auto"),
            bindStop: l,
            bindError: l,
          },
          Image: Object.assign(
            {
              src: l,
              mode: v("scaleToFill"),
              "lazy-load": f,
              bindError: l,
              bindLoad: l,
            },
            h
          ),
          LivePlayer: Object.assign(
            {
              src: l,
              autoplay: f,
              muted: f,
              orientation: v("vertical"),
              "object-fit": v("contain"),
              "background-mute": f,
              "min-cache": "1",
              "max-cache": "3",
              bindStateChange: l,
              bindFullScreenChange: l,
              bindNetStatus: l,
            },
            p
          ),
          Video: Object.assign(
            {
              src: l,
              duration: l,
              controls: d,
              "danmu-list": l,
              "danmu-btn": l,
              "enable-danmu": l,
              autoplay: f,
              loop: f,
              muted: f,
              "initial-time": "0",
              "page-gesture": f,
              direction: l,
              "show-progress": d,
              "show-fullscreen-btn": d,
              "show-play-btn": d,
              "show-center-play-btn": d,
              "enable-progress-gesture": d,
              "object-fit": v("contain"),
              poster: l,
              "show-mute-btn": f,
              bindPlay: l,
              bindPause: l,
              bindEnded: l,
              bindTimeUpdate: l,
              bindFullScreenChange: l,
              bindWaiting: l,
              bindError: l,
            },
            p
          ),
          Canvas: Object.assign(
            { "canvas-id": l, "disable-scroll": f, bindError: l },
            h
          ),
          Ad: {
            "unit-id": l,
            "ad-intervals": l,
            bindLoad: l,
            bindError: l,
            bindClose: l,
          },
          WebView: { src: l, bindMessage: l, bindLoad: l, bindError: l },
          Block: {},
          Map: b,
          Slot: { name: l },
          SlotView: { name: l },
        },
        k = new Set([
          "input",
          "checkbox",
          "picker",
          "picker-view",
          "radio",
          "slider",
          "switch",
          "textarea",
        ]),
        w =
          (new Set(["input", "textarea"]),
          new Set([
            "progress",
            "icon",
            "rich-text",
            "input",
            "textarea",
            "slider",
            "switch",
            "audio",
            "ad",
            "official-account",
            "open-data",
            "navigation-bar",
          ]),
          new Map([
            ["view", -1],
            ["catch-view", -1],
            ["cover-view", -1],
            ["static-view", -1],
            ["pure-view", -1],
            ["block", -1],
            ["text", -1],
            ["static-text", 6],
            ["slot", 8],
            ["slot-view", 8],
            ["label", 6],
            ["form", 4],
            ["scroll-view", 4],
            ["swiper", 4],
            ["swiper-item", 4],
          ]),
          (function () {
            function e(t) {
              var n;
              (0, u.Z)(this, e),
                (this.callbacks =
                  null !== (n = null == t ? void 0 : t.callbacks) &&
                  void 0 !== n
                    ? n
                    : {});
            }
            return (
              (0, s.Z)(e, [
                {
                  key: "on",
                  value: function (t, n, r) {
                    var i, o, a, u;
                    if (!n) return this;
                    (t = t.split(e.eventSplitter)),
                      this.callbacks || (this.callbacks = {});
                    for (var s = this.callbacks; (i = t.shift()); )
                      ((o = (u = s[i]) ? u.tail : {}).next = a = {}),
                        (o.context = r),
                        (o.callback = n),
                        (s[i] = { tail: a, next: u ? u.next : o });
                    return this;
                  },
                },
                {
                  key: "once",
                  value: function (e, t, n) {
                    var r = this;
                    return (
                      this.on(
                        e,
                        function i() {
                          for (
                            var o = arguments.length, a = new Array(o), u = 0;
                            u < o;
                            u++
                          )
                            a[u] = arguments[u];
                          t.apply(r, a), r.off(e, i, n);
                        },
                        n
                      ),
                      this
                    );
                  },
                },
                {
                  key: "off",
                  value: function (t, n, r) {
                    var i, o, a, u, s, c;
                    if (!(o = this.callbacks)) return this;
                    if (!(t || n || r)) return delete this.callbacks, this;
                    for (
                      t = t ? t.split(e.eventSplitter) : Object.keys(o);
                      (i = t.shift());

                    )
                      if (((a = o[i]), delete o[i], a && (n || r)))
                        for (u = a.tail; (a = a.next) !== u; )
                          (s = a.callback),
                            (c = a.context),
                            ((n && s !== n) || (r && c !== r)) &&
                              this.on(i, s, c);
                    return this;
                  },
                },
                {
                  key: "trigger",
                  value: function (t) {
                    var n, r, i, o;
                    if (!(i = this.callbacks)) return this;
                    t = t.split(e.eventSplitter);
                    for (var a = [].slice.call(arguments, 1); (n = t.shift()); )
                      if ((r = i[n]))
                        for (o = r.tail; (r = r.next) !== o; )
                          r.callback.apply(r.context || this, a);
                    return this;
                  },
                },
              ]),
              e
            );
          })());
      function S(e) {
        return "string" == typeof e;
      }
      function P(e) {
        return void 0 === e;
      }
      function C(e) {
        return null === e;
      }
      function T(e) {
        return null !== e && "object" === (0, a.Z)(e);
      }
      function x(e) {
        return "function" == typeof e;
      }
      w.eventSplitter = /\s+/;
      var E,
        A = Array.isArray;
      !(function (e) {
        (e[(e.SINGLE = 0)] = "SINGLE"),
          (e[(e.MULTI = 1)] = "MULTI"),
          (e[(e.WATERFALL = 2)] = "WATERFALL");
      })(E || (E = {}));
      var O = {
        app: ["onLaunch", "onShow", "onHide"],
        page: [
          "onLoad",
          "onUnload",
          "onReady",
          "onShow",
          "onHide",
          [
            "onPullDownRefresh",
            "onReachBottom",
            "onPageScroll",
            "onResize",
            "onTabItemTap",
            "onTitleClick",
            "onOptionMenuClick",
            "onPopMenuClick",
            "onPullIntercept",
            "onAddToFavorites",
          ],
          ["onShareAppMessage", "onShareTimeline"],
        ],
        component: ["attached", "detached"],
      };
      function N(e, t) {
        return { type: e, initial: t || null };
      }
      var L = new ((function (e) {
          (0, i.Z)(n, e);
          var t = (0, o.Z)(n);
          function n(e, r) {
            var i;
            for (var o in ((0, u.Z)(this, n),
            ((i = t.call(this, r)).hooks = e),
            e)) {
              var a = e[o].initial;
              x(a) && i.on(o, a);
            }
            return i;
          }
          return (
            (0, s.Z)(n, [
              {
                key: "tapOneOrMany",
                value: function (e, t) {
                  var n = this;
                  (x(t) ? [t] : t).forEach(function (t) {
                    return n.on(e, t);
                  });
                },
              },
              {
                key: "tap",
                value: function (e, t) {
                  var n = this.hooks[e],
                    r = n.type,
                    i = n.initial;
                  r === E.SINGLE
                    ? (this.off(e), this.on(e, x(t) ? t : t[t.length - 1]))
                    : (i && this.off(e, i), this.tapOneOrMany(e, t));
                },
              },
              {
                key: "call",
                value: function (e) {
                  var t,
                    n = this.hooks[e];
                  if (n) {
                    var r = n.type,
                      i = this.callbacks;
                    if (i) {
                      var o = i[e];
                      if (o) {
                        for (
                          var a = o.tail,
                            u = o.next,
                            s = arguments.length,
                            c = new Array(s > 1 ? s - 1 : 0),
                            l = 1;
                          l < s;
                          l++
                        )
                          c[l - 1] = arguments[l];
                        for (var d, f = c; u !== a; ) {
                          if (
                            ((d =
                              null === (t = u.callback) || void 0 === t
                                ? void 0
                                : t.apply(u.context || this, f)),
                            r === E.WATERFALL)
                          ) {
                            var h = [d];
                            f = h;
                          }
                          u = u.next;
                        }
                        return d;
                      }
                    }
                  }
                },
              },
              {
                key: "isExist",
                value: function (e) {
                  var t;
                  return Boolean(
                    null === (t = this.callbacks) || void 0 === t
                      ? void 0
                      : t[e]
                  );
                },
              },
            ]),
            n
          );
        })(w))({
          getMiniLifecycle: N(E.SINGLE, function (e) {
            return e;
          }),
          getMiniLifecycleImpl: N(E.SINGLE, function () {
            return this.call("getMiniLifecycle", O);
          }),
          getLifecycle: N(E.SINGLE, function (e, t) {
            return e[t];
          }),
          getPathIndex: N(E.SINGLE, function (e) {
            return "[".concat(e, "]");
          }),
          getEventCenter: N(E.SINGLE, function (e) {
            return new e();
          }),
          isBubbleEvents: N(E.SINGLE, function (e) {
            return new Set([
              "touchstart",
              "touchmove",
              "touchcancel",
              "touchend",
              "touchforcechange",
              "tap",
              "longpress",
              "longtap",
              "transitionend",
              "animationstart",
              "animationiteration",
              "animationend",
            ]).has(e);
          }),
          getSpecialNodes: N(E.SINGLE, function () {
            return ["view", "text", "image"];
          }),
          onRemoveAttribute: N(E.SINGLE),
          batchedEventUpdates: N(E.SINGLE),
          mergePageInstance: N(E.SINGLE),
          modifyPageObject: N(E.SINGLE),
          createPullDownComponent: N(E.SINGLE),
          getDOMNode: N(E.SINGLE),
          modifyHydrateData: N(E.SINGLE),
          modifySetAttrPayload: N(E.SINGLE),
          modifyRmAttrPayload: N(E.SINGLE),
          onAddEvent: N(E.SINGLE),
          modifyMpEvent: N(E.MULTI),
          modifyMpEventImpl: N(E.SINGLE, function (e) {
            try {
              this.call("modifyMpEvent", e);
            } catch (e) {
              console.warn("[Taro modifyMpEvent hook Error]: ", e);
            }
          }),
          modifyTaroEvent: N(E.MULTI),
          modifyDispatchEvent: N(E.MULTI),
          initNativeApi: N(E.MULTI),
          patchElement: N(E.MULTI),
        }),
        I = {},
        j = function () {};
      function Z(e) {
        return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function B(e) {
        for (var t = "", n = !1, r = 0; r < e.length; r++)
          "-" !== e[r]
            ? ((t += n ? e[r].toUpperCase() : e[r]), (n = !1))
            : (n = !0);
        return t;
      }
      function _(e, t) {
        if (!e) throw new Error(t);
      }
      Object.prototype.hasOwnProperty;
      var M = 1,
        D = new Date().getTime().toString();
      function R(e) {
        return (
          Object.keys(e).forEach(function (t) {
            t in y ? Object.assign(y[t], e[t]) : (y[t] = e[t]);
          }),
          y
        );
      }
      function F(e) {
        var t = {},
          n = e.View,
          r = {
            "#text": {},
            StaticView: n,
            StaticImage: e.Image,
            StaticText: e.Text,
            PureView: n,
            CatchView: n,
          };
        return (
          (e = Object.assign(Object.assign({}, e), r)),
          Object.keys(e)
            .sort(function (e, t) {
              var n = /^(Static|Pure|Catch)*(View|Image|Text)$/,
                r = n.test(e),
                i = n.test(t);
              return r && i ? (e > t ? 1 : -1) : r ? -1 : i || e >= t ? 1 : -1;
            })
            .forEach(function (n, r) {
              var i = { _num: String(r) };
              Object.keys(e[n])
                .filter(function (e) {
                  return !/^bind/.test(e) && !["focus", "blur"].includes(e);
                })
                .sort()
                .forEach(function (e, t) {
                  i[B(e)] = "p" + t;
                }),
                (t[Z(n)] = i);
            }),
          t
        );
      }
      function U(e, t) {
        var n = t || L;
        Object.keys(e).forEach(function (t) {
          n.tap(t, e[t]);
        });
      }
      function W(e) {
        return function () {
          console.warn("小程序暂不支持 ".concat(e));
        };
      }
      function z(e, t) {
        if (
          ["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(e) > -1
        ) {
          var n = (t.url = t.url || "").indexOf("?") > -1,
            r = D + M++;
          t.url += (n ? "&" : "?") + "".concat("__key_", "=").concat(r);
        }
      }
      var V = new Set([
        "addPhoneContact",
        "authorize",
        "canvasGetImageData",
        "canvasPutImageData",
        "canvasToTempFilePath",
        "checkSession",
        "chooseAddress",
        "chooseImage",
        "chooseInvoiceTitle",
        "chooseLocation",
        "chooseVideo",
        "clearStorage",
        "closeBLEConnection",
        "closeBluetoothAdapter",
        "closeSocket",
        "compressImage",
        "connectSocket",
        "createBLEConnection",
        "downloadFile",
        "exitMiniProgram",
        "getAvailableAudioSources",
        "getBLEDeviceCharacteristics",
        "getBLEDeviceServices",
        "getBatteryInfo",
        "getBeacons",
        "getBluetoothAdapterState",
        "getBluetoothDevices",
        "getClipboardData",
        "getConnectedBluetoothDevices",
        "getConnectedWifi",
        "getExtConfig",
        "getFileInfo",
        "getImageInfo",
        "getLocation",
        "getNetworkType",
        "getSavedFileInfo",
        "getSavedFileList",
        "getScreenBrightness",
        "getSetting",
        "getStorage",
        "getStorageInfo",
        "getSystemInfo",
        "getUserInfo",
        "getWifiList",
        "hideHomeButton",
        "hideShareMenu",
        "hideTabBar",
        "hideTabBarRedDot",
        "loadFontFace",
        "login",
        "makePhoneCall",
        "navigateBack",
        "navigateBackMiniProgram",
        "navigateTo",
        "navigateToBookshelf",
        "navigateToMiniProgram",
        "notifyBLECharacteristicValueChange",
        "hideKeyboard",
        "hideLoading",
        "hideNavigationBarLoading",
        "hideToast",
        "openBluetoothAdapter",
        "openDocument",
        "openLocation",
        "openSetting",
        "pageScrollTo",
        "previewImage",
        "queryBookshelf",
        "reLaunch",
        "readBLECharacteristicValue",
        "redirectTo",
        "removeSavedFile",
        "removeStorage",
        "removeTabBarBadge",
        "requestSubscribeMessage",
        "saveFile",
        "saveImageToPhotosAlbum",
        "saveVideoToPhotosAlbum",
        "scanCode",
        "sendSocketMessage",
        "setBackgroundColor",
        "setBackgroundTextStyle",
        "setClipboardData",
        "setEnableDebug",
        "setInnerAudioOption",
        "setKeepScreenOn",
        "setNavigationBarColor",
        "setNavigationBarTitle",
        "setScreenBrightness",
        "setStorage",
        "setTabBarBadge",
        "setTabBarItem",
        "setTabBarStyle",
        "showActionSheet",
        "showFavoriteGuide",
        "showLoading",
        "showModal",
        "showShareMenu",
        "showTabBar",
        "showTabBarRedDot",
        "showToast",
        "startBeaconDiscovery",
        "startBluetoothDevicesDiscovery",
        "startDeviceMotionListening",
        "startPullDownRefresh",
        "stopBeaconDiscovery",
        "stopBluetoothDevicesDiscovery",
        "stopCompass",
        "startCompass",
        "startAccelerometer",
        "stopAccelerometer",
        "showNavigationBarLoading",
        "stopDeviceMotionListening",
        "stopPullDownRefresh",
        "switchTab",
        "uploadFile",
        "vibrateLong",
        "vibrateShort",
        "writeBLECharacteristicValue",
      ]);
      function H(e) {
        return function () {
          var t,
            n =
              null === (t = e.getSystemInfoSync) || void 0 === t
                ? void 0
                : t.call(e);
          if (!n) return !1;
          var r = n.platform.toLowerCase();
          return "android" === r || "devtools" === r;
        };
      }
      function G(e) {
        return function (t) {
          var n,
            r = (t = t ? (S(t) ? { url: t } : t) : {}).success,
            i = t.fail,
            o = t.complete,
            a = new Promise(function (a, u) {
              (t.success = function (e) {
                r && r(e), a(e);
              }),
                (t.fail = function (e) {
                  i && i(e), u(e);
                }),
                (t.complete = function (e) {
                  o && o(e);
                }),
                (n = e.request(t));
            });
          return (
            J(n, a),
            (a.abort = function (e) {
              return e && e(), n && n.abort(), a;
            }),
            a
          );
        };
      }
      function q(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = n.needPromiseApis || [],
          o = new Set([].concat((0, r.Z)(i), (0, r.Z)(V))),
          a = [
            "getEnv",
            "interceptors",
            "Current",
            "getCurrentInstance",
            "options",
            "nextTick",
            "eventCenter",
            "Events",
            "preload",
            "webpackJsonp",
          ],
          u = new Set(
            n.isOnlyPromisify
              ? i
              : Object.keys(t).filter(function (e) {
                  return -1 === a.indexOf(e);
                })
          );
        n.modifyApis && n.modifyApis(u),
          u.forEach(function (r) {
            if (o.has(r)) {
              var i = r;
              e[i] = function () {
                for (
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = arguments.length,
                    o = new Array(r > 1 ? r - 1 : 0),
                    a = 1;
                  a < r;
                  a++
                )
                  o[a - 1] = arguments[a];
                var u = i;
                if ("string" == typeof e)
                  return o.length ? t[u].apply(t, [e].concat(o)) : t[u](e);
                if (n.transformMeta) {
                  var s = n.transformMeta(u, e);
                  if (((u = s.key), (e = s.options), !t.hasOwnProperty(u)))
                    return W(u)();
                }
                var c = null,
                  l = Object.assign({}, e);
                z(u, e);
                var d = new Promise(function (r, i) {
                  (l.success = function (t) {
                    var i, o;
                    null === (i = n.modifyAsyncResult) ||
                      void 0 === i ||
                      i.call(n, u, t),
                      null === (o = e.success) || void 0 === o || o.call(e, t),
                      r(
                        "connectSocket" === u
                          ? Promise.resolve().then(function () {
                              return c ? Object.assign(c, t) : t;
                            })
                          : t
                      );
                  }),
                    (l.fail = function (t) {
                      var n;
                      null === (n = e.fail) || void 0 === n || n.call(e, t),
                        i(t);
                    }),
                    (l.complete = function (t) {
                      var n;
                      null === (n = e.complete) || void 0 === n || n.call(e, t);
                    }),
                    (c = o.length ? t[u].apply(t, [l].concat(o)) : t[u](l));
                });
                return (
                  ["uploadFile", "downloadFile"].includes(u) &&
                    (J(c, d),
                    (d.progress = function (e) {
                      return null == c || c.onProgressUpdate(e), d;
                    }),
                    (d.abort = function (e) {
                      return null == e || e(), null == c || c.abort(), d;
                    })),
                  d
                );
              };
            } else {
              var a = r;
              if (
                (n.transformMeta && (a = n.transformMeta(r, {}).key),
                !t.hasOwnProperty(a))
              )
                return void (e[r] = W(r));
              x(t[r])
                ? (e[r] = function () {
                    for (
                      var e = arguments.length, i = new Array(e), o = 0;
                      o < e;
                      o++
                    )
                      i[o] = arguments[o];
                    return n.handleSyncApis
                      ? n.handleSyncApis(r, t, i)
                      : t[a].apply(t, i);
                  })
                : (e[r] = t[a]);
            }
          }),
          !n.isOnlyPromisify && $(e, t, n);
      }
      function $(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (e.canIUseWebp = H(e)),
          (e.getCurrentPages = getCurrentPages || W("getCurrentPages")),
          (e.getApp = getApp || W("getApp")),
          (e.env = t.env || {});
        try {
          e.requirePlugin = requirePlugin || W("requirePlugin");
        } catch (t) {
          e.requirePlugin = W("requirePlugin");
        }
        var r = n.request || G(t);
        function i(e) {
          return r(e.requestParams);
        }
        var o = new e.Link(i);
        (e.request = o.request.bind(o)),
          (e.addInterceptor = o.addInterceptor.bind(o)),
          (e.cleanInterceptors = o.cleanInterceptors.bind(o)),
          (e.miniGlobal = e.options.miniGlobal = t);
      }
      function J(e, t) {
        e &&
          t &&
          e &&
          [
            "abort",
            "onHeadersReceived",
            "offHeadersReceived",
            "onProgressUpdate",
            "offProgressUpdate",
            "onChunkReceived",
            "offChunkReceived",
          ].forEach(function (n) {
            n in e && (t[n] = e[n].bind(e));
          });
      }
    },
    54221: function (e, t, n) {
      "use strict";
      var r = n(66371).default,
        i = n(3619),
        o = n(93552),
        a = n(45823),
        u = n(77108),
        s = n(93430),
        c = n(98922),
        l = n(55636),
        d = n(44934),
        f = n(62050),
        h = n(97897),
        p = n(66371),
        v = n(32180),
        g = n(92954);
      function m(e) {
        return e && "object" === r(e) && "default" in e ? e : { default: e };
      }
      var b,
        y,
        k = m(i),
        w = m(o),
        S = m(a),
        P = m(u),
        C = m(s),
        T = m(c),
        x = m(l),
        E = m(d),
        A = m(f),
        O = m(h),
        N = m(p),
        L = JSON,
        I = function (e) {
          return L.parse(
            (function (e, t) {
              t || (t = {}), "function" == typeof t && (t = { cmp: t });
              var n = t.space || "";
              "number" == typeof n && (n = Array(n + 1).join(" "));
              var r = "boolean" == typeof t.cycles && t.cycles,
                i =
                  t.replacer ||
                  function (e, t) {
                    return t;
                  },
                o =
                  t.cmp &&
                  (function (e) {
                    return function (t) {
                      return function (n, r) {
                        var i = { key: n, value: t[n] },
                          o = { key: r, value: t[r] };
                        return e(i, o);
                      };
                    };
                  })(t.cmp),
                a = [];
              return (function e(t, u, s, c) {
                var l = n ? "\n" + new Array(c + 1).join(n) : "",
                  d = n ? ": " : ":";
                if (
                  (s &&
                    s.toJSON &&
                    "function" == typeof s.toJSON &&
                    (s = s.toJSON()),
                  void 0 !== (s = i.call(t, u, s)))
                ) {
                  if ("object" !== N.default(s) || null === s)
                    return L.stringify(s);
                  if (j(s)) {
                    for (var f = [], h = 0; h < s.length; h++) {
                      var p = e(s, h, s[h], c + 1) || L.stringify(null);
                      f.push(l + n + p);
                    }
                    return "[" + f.join(",") + l + "]";
                  }
                  if (-1 !== a.indexOf(s)) {
                    if (r) return L.stringify("__cycle__");
                    throw new TypeError(
                      "Converting circular structure to JSON"
                    );
                  }
                  a.push(s);
                  for (
                    var v = Z(s).sort(o && o(s)), g = [], m = 0;
                    m < v.length;
                    m++
                  ) {
                    var b = v[m],
                      y = e(s, b, s[b], c + 1);
                    if (y) {
                      var k = L.stringify(b) + d + y;
                      g.push(l + n + k);
                    }
                  }
                  return a.splice(a.indexOf(s), 1), "{" + g.join(",") + l + "}";
                }
              })({ "": e }, "", e, 0);
            })(e)
          );
        },
        j =
          Array.isArray ||
          function (e) {
            return "[object Array]" === {}.toString.call(e);
          },
        Z =
          Object.keys ||
          function (e) {
            var t =
                Object.prototype.hasOwnProperty ||
                function () {
                  return !0;
                },
              n = [];
            for (var r in e) t.call(e, r) && n.push(r);
            return n;
          },
        B = "[object Array]",
        _ = "[object Object]";
      function M(e, t) {
        var n = {};
        return (
          (function e(t, n) {
            if (t !== n) {
              var r = R(t),
                i = R(n);
              if (r == _ && i == _)
                for (var o in n) {
                  var a = t[o];
                  void 0 === a ? (t[o] = null) : e(a, n[o]);
                }
              else
                r == B &&
                  i == B &&
                  t.length >= n.length &&
                  n.forEach(function (n, r) {
                    e(t[r], n);
                  });
            }
          })(e, t),
          (function e(t, n, r, i) {
            if (t !== n) {
              var o = R(t),
                a = R(n);
              if (o == _)
                if (a != _ || Object.keys(t).length < Object.keys(n).length)
                  D(i, r, t);
                else {
                  var u = function (o) {
                    var a = t[o],
                      u = n[o],
                      s = R(a),
                      c = R(u);
                    if (s != B && s != _)
                      a != n[o] && D(i, ("" == r ? "" : r + ".") + o, a);
                    else if (s == B)
                      c != B || a.length < u.length
                        ? D(i, ("" == r ? "" : r + ".") + o, a)
                        : a.forEach(function (t, n) {
                            e(
                              t,
                              u[n],
                              ("" == r ? "" : r + ".") + o + "[" + n + "]",
                              i
                            );
                          });
                    else if (s == _)
                      if (
                        c != _ ||
                        Object.keys(a).length < Object.keys(u).length
                      )
                        D(i, ("" == r ? "" : r + ".") + o, a);
                      else
                        for (var l in a)
                          e(
                            a[l],
                            u[l],
                            ("" == r ? "" : r + ".") + o + "." + l,
                            i
                          );
                  };
                  for (var s in t) u(s);
                }
              else
                o == B
                  ? a != B || t.length < n.length
                    ? D(i, r, t)
                    : t.forEach(function (t, o) {
                        e(t, n[o], r + "[" + o + "]", i);
                      })
                  : D(i, r, t);
            }
          })(e, t, "", n),
          n
        );
      }
      function D(e, t, n) {
        "[object Function]" != R(n) && (e[t] = n);
      }
      function R(e) {
        return Object.prototype.toString.call(e);
      }
      !(function (e) {
        (e.WillMount = "componentWillMount"),
          (e.DidMount = "componentDidMount"),
          (e.DidShow = "componentDidShow"),
          (e.DidHide = "componentDidHide"),
          (e.WillUnmount = "componentWillUnmount");
      })(y || (y = {}));
      var F =
          ((b = {}),
          k.default(b, y.WillMount, ["created"]),
          k.default(b, y.DidMount, ["attached"]),
          k.default(b, y.DidShow, ["onShow"]),
          k.default(b, y.DidHide, ["onHide"]),
          k.default(b, y.WillUnmount, ["detached", "onUnload"]),
          b),
        U = new Set(["ready"]);
      for (var W in F)
        F[W].forEach(function (e) {
          return U.add(e);
        });
      var z = [
          "onPullDownRefresh",
          "onReachBottom",
          "onShareAppMessage",
          "onShareTimeline",
          "onAddToFavorites",
          "onPageScroll",
          "onResize",
          "onTabItemTap",
        ],
        V = [
          "onLaunch",
          "onShow",
          "onHide",
          "onError",
          "onPageNotFound",
          "onUnhandledRejection",
          "onThemeChange",
        ];
      function H(e, t) {
        if (!e) return !1;
        function n(n) {
          var r = arguments.length;
          return r ? (r > 1 ? e.apply(t, arguments) : e.call(t, n)) : e.call(t);
        }
        return (n._length = e.length), n;
      }
      function G(e, t) {
        return JSON.stringify(e) === JSON.stringify(t);
      }
      function q(e, t, n) {
        if (!e) return n;
        var r, i;
        if (
          (Array.isArray(t) && (r = t.slice(0)),
          "string" == typeof t &&
            (r = (r = t.replace(/\[(.+?)\]/g, ".$1")).split(".")),
          "symbol" === N.default(t) && (r = [t]),
          !Array.isArray(r))
        )
          throw new Error("props arg must be an array, a string or a symbol");
        for (; r.length; ) {
          if (((i = r.shift()), !e)) return n;
          if (void 0 === (e = e[i])) return n;
        }
        return e;
      }
      function $(e, t, n) {
        "string" == typeof t &&
          (t = (t = t.replace(/\[(.+?)\]/g, ".$1")).split(".")),
          "symbol" === N.default(t) && (t = [t]);
        var r,
          i = t.pop();
        if (!i) return !1;
        for (; (r = t.shift()); )
          if (
            (void 0 === e[r] && (e[r] = {}),
            Array.isArray(e[r])
              ? (e[r] = w.default(e[r]))
              : "object" === N.default(e[r]) &&
                (e[r] = Object.assign({}, e[r])),
            !(e = e[r]) || "object" !== N.default(e))
          )
            return !1;
        return (e[i] = n), !0;
      }
      function J(e) {
        console.warn("[Taro Convert Warning] " + e);
      }
      var K = new Map([
        ["onError", "不支持 App 的 onError 生命周期方法。"],
        ["onPageNotFound", "不支持 App 的 onPageNotFound 生命周期方法。"],
        [
          "onUnhandledRejection",
          "不支持 App 的 onUnhandledRejection 生命周期方法。",
        ],
        ["onThemeChange", "不支持 App 的 onThemeChange 生命周期方法。"],
        ["moved", "不支持自定义组件的 moved 生命周期。"],
        ["externalClasses", "不支持自定义组件的 externalClasses 功能。"],
        ["relations", "不支持自定义组件的 relations 功能。"],
        ["options", "不支持自定义组件的 options 功能。"],
        ["definitionFilter", "不支持自定义组件的 definitionFilter 功能。"],
        [
          "selectComponent",
          "selectComponent 方法产生不到目标效果，请使用 React 的 ref 进行重构。",
        ],
        [
          "selectAllComponents",
          "selectAllComponents 方法产生不到目标效果，请使用 React 的 ref 进行重构。",
        ],
        [
          "selectOwnerComponent",
          "selectOwnerComponent 方法产生不到目标效果，请使用 React 语法重构。",
        ],
        [
          "groupSetData",
          "groupSetData 方法产生不到目标效果，请使用 React 语法重构。",
        ],
      ]);
      function Q(e, t) {
        if ("string" == typeof e)
          return J("不支持使用内置 Behavior: [".concat(e, "]"));
        var n = e.behaviors;
        (null == n ? void 0 : n.length) &&
          n.forEach(function (e) {
            return Q(e, t);
          }),
          Object.keys(e).forEach(function (n) {
            if (K.has(n)) return J(K.get(n));
            if (t.has(n)) {
              var r = t.get(n),
                i = e[n];
              r.push(i);
            }
          });
      }
      function Y(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return X(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? X(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function X(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ee(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = O.default(e);
          if (t) {
            var i = O.default(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return A.default(this, n);
        };
      }
      function te(e, t, n) {
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            return "props" === n
              ? e.props
              : Object.assign(Object.assign({}, e.state), e.props);
          },
        });
      }
      function ne(e) {
        return "function" == typeof e;
      }
      t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          "object" === N.default(e) &&
            0 === Object.keys(e).length &&
            J(
              "withWeapp 请传入“App/页面/组件“的配置对象。如果原生写法使用了基类，请将基类组合后的配置对象传入，详情请参考文档。"
            ),
          function (n) {
            var r,
              i = new Map([
                ["properties", []],
                ["data", []],
                ["methods", []],
                ["created", []],
                ["attached", []],
                ["ready", []],
                ["detached", []],
              ]),
              o = {};
            if (
              null === (r = e.behaviors) || void 0 === r ? void 0 : r.length
            ) {
              e.behaviors.forEach(function (e) {
                return Q(e, i);
              });
              var a = i.get("properties");
              a.length &&
                (a.forEach(function (e) {
                  Object.assign(o, e);
                }),
                Object.keys(o).forEach(function (t) {
                  var n = o[t];
                  e.properties || (e.properties = {}),
                    e.properties.hasOwnProperty(t) ||
                      (n &&
                        "object" === N.default(n) &&
                        n.value &&
                        (n.value = I(n.value)),
                      (e.properties[t] = n));
                }));
            }
            var u = (function (r) {
                E.default(u, r);
                var a = ee(u);
                function u(t) {
                  var n;
                  return (
                    P.default(this, u),
                    ((n = a.call(this, t))._observeProps = []),
                    (n.willMounts = []),
                    (n.didMounts = []),
                    (n.didHides = []),
                    (n.didShows = []),
                    (n.willUnmounts = []),
                    (n.eventDestroyList = []),
                    (n.current = v.getCurrentInstance()),
                    (n.taroGlobalData = Object.create(null)),
                    (n.safeExecute = function (e) {
                      for (
                        var t = arguments.length,
                          r = new Array(t > 1 ? t - 1 : 0),
                          i = 1;
                        i < t;
                        i++
                      )
                        r[i - 1] = arguments[i];
                      ne(e) && e.apply(T.default(n), r);
                    }),
                    (n.setData = function (e, t) {
                      var r;
                      n.observers &&
                        Object.keys(Object.keys(n.observers)) &&
                        (r = I(n.state)),
                        Object.keys(e).forEach(function (t) {
                          $(n.state, t, e[t]);
                        }),
                        n.setState(n.state, function () {
                          n.triggerObservers(n.state, r),
                            t && t.call(T.default(n));
                        });
                    }),
                    (n.triggerEvent = function (e, t, r) {
                      r && J("triggerEvent 不支持事件选项。");
                      var i = n.props,
                        o = {};
                      for (var a in i)
                        a.startsWith("data-") &&
                          (o[a.replace(/^data-/, "")] = i[a]);
                      var u =
                        i["on".concat(e[0].toUpperCase()).concat(e.slice(1))];
                      ne(u) &&
                        u.call(T.default(n), {
                          type: e,
                          detail: t,
                          target: { id: i.id || "", dataset: o },
                          currentTarget: { id: i.id || "", dataset: o },
                        });
                    }),
                    (n.hasBehavior = n.componentMethodsProxy("hasBehavior")),
                    (n.createSelectorQuery = n.componentMethodsProxy(
                      "createSelectorQuery"
                    )),
                    (n.createIntersectionObserver = n.componentMethodsProxy(
                      "createIntersectionObserver"
                    )),
                    (n.createMediaQueryObserver = n.componentMethodsProxy(
                      "createMediaQueryObserver"
                    )),
                    (n.getRelationNodes =
                      n.componentMethodsProxy("getRelationNodes")),
                    (n.getTabBar = n.componentMethodsProxy("getTabBar")),
                    (n.getPageId = n.componentMethodsProxy("getPageId")),
                    (n.animate = n.componentMethodsProxy("animate")),
                    (n.clearAnimation =
                      n.componentMethodsProxy("clearAnimation")),
                    (n.setUpdatePerformanceListener = n.componentMethodsProxy(
                      "setUpdatePerformanceListener"
                    )),
                    (n.state = n.state || {}),
                    n.init(e),
                    te(T.default(n), "data", "state"),
                    te(T.default(n), "properties", "props"),
                    n
                  );
                }
                return (
                  C.default(u, [
                    {
                      key: "initProps",
                      value: function (e) {
                        for (var t in e)
                          if (e.hasOwnProperty(t)) {
                            var n = e[t];
                            n &&
                              !ne(n) &&
                              n.observer &&
                              this._observeProps.push({
                                name: t,
                                observer: n.observer,
                              });
                          }
                      },
                    },
                    {
                      key: "init",
                      value: function (e) {
                        var r,
                          a,
                          u,
                          s = this;
                        if (
                          null === (r = e.behaviors) || void 0 === r
                            ? void 0
                            : r.length
                        ) {
                          var c,
                            l = Y(i.entries());
                          try {
                            var d = function () {
                              var e = S.default(c.value, 2),
                                t = e[0],
                                n = e[1];
                              switch (t) {
                                case "created":
                                case "attached":
                                case "detached":
                                case "ready":
                                  n.forEach(function (e) {
                                    return s.initLifeCycles(t, e);
                                  });
                              }
                            };
                            for (l.s(); !(c = l.n()).done; ) d();
                          } catch (e) {
                            l.e(e);
                          } finally {
                            l.f();
                          }
                        }
                        for (var f in e) {
                          K.has(f) && J(K.get(f));
                          var h = e[f];
                          switch (f) {
                            case "behaviors":
                              break;
                            case "data":
                              t
                                ? ((this[f] = h),
                                  V.includes(f) ||
                                    this.defineProperty(
                                      this.taroGlobalData,
                                      f,
                                      this
                                    ))
                                : (this.state = Object.assign(
                                    Object.assign({}, h),
                                    this.state
                                  ));
                              break;
                            case "properties":
                              this.initProps(Object.assign(o, h));
                              break;
                            case "methods":
                              for (var p in h) {
                                var v = h[p];
                                this[p] = H(v, this);
                              }
                              break;
                            case "lifetimes":
                              for (var g in h) this.initLifeCycles(g, h[g]);
                              break;
                            case "pageLifetimes":
                              for (var m in h) {
                                var b = h[m];
                                switch (m) {
                                  case "show":
                                    this.initLifeCycleListener("show", b);
                                    break;
                                  case "hide":
                                    this.initLifeCycleListener("hide", b);
                                    break;
                                  case "resize":
                                    J(
                                      "不支持组件所在页面的生命周期 pageLifetimes.resize。"
                                    );
                                }
                              }
                              break;
                            default:
                              if (U.has(f)) {
                                if (
                                  null === (a = e.lifetimes) || void 0 === a
                                    ? void 0
                                    : a[f]
                                )
                                  break;
                                var y = e[f];
                                this.initLifeCycles(f, y);
                              } else
                                ne(h)
                                  ? ((this[f] = H(h, this)),
                                    t &&
                                      !V.includes(f) &&
                                      this.defineProperty(
                                        this.taroGlobalData,
                                        f,
                                        this
                                      ),
                                    z.includes(f) &&
                                      n.prototype[f] &&
                                      J(
                                        "生命周期 ".concat(
                                          f,
                                          " 已在原生部分进行定义，React 部分的定义将不会被执行。"
                                        )
                                      ))
                                  : ((this[f] = h),
                                    t &&
                                      !V.includes(f) &&
                                      this.defineProperty(
                                        this.taroGlobalData,
                                        f,
                                        this
                                      ));
                          }
                        }
                        (null === (u = e.behaviors) || void 0 === u
                          ? void 0
                          : u.length) &&
                          (function () {
                            var e,
                              t = {},
                              n = {},
                              r = Y(i.entries());
                            try {
                              var o = function () {
                                var r = S.default(e.value, 2),
                                  i = r[0],
                                  o = r[1];
                                switch (i) {
                                  case "data":
                                    []
                                      .concat(w.default(o), [s.state])
                                      .forEach(function (e, n) {
                                        Object.keys(e).forEach(function (r) {
                                          var i = e[r],
                                            a = t[r],
                                            u = N.default(i),
                                            s = N.default(a);
                                          if ("object" === u)
                                            if (i)
                                              if (
                                                "object" !== s ||
                                                !s ||
                                                Array.isArray(i)
                                              )
                                                t[r] =
                                                  n === o.length ? i : I(i);
                                              else {
                                                var c = Object.assign({}, a, i);
                                                t[r] =
                                                  n === o.length ? c : I(c);
                                              }
                                            else t[r] = i;
                                          else t[r] = i;
                                        });
                                      }),
                                      (s.state = t);
                                    break;
                                  case "methods":
                                    o.forEach(function (e) {
                                      Object.assign(n, e);
                                    }),
                                      Object.keys(n).forEach(function (e) {
                                        if (!s[e]) {
                                          var t = n[e];
                                          s[e] = H(t, s);
                                        }
                                      });
                                }
                              };
                              for (r.s(); !(e = r.n()).done; ) o();
                            } catch (e) {
                              r.e(e);
                            } finally {
                              r.f();
                            }
                          })();
                      },
                    },
                    {
                      key: "initLifeCycles",
                      value: function (e, t) {
                        if (K.has(e)) return J(K.get(e));
                        if ("ready" === e)
                          this.current.page.onReady.called
                            ? this.didMounts.push(function () {
                                for (
                                  var e = this,
                                    n = arguments.length,
                                    r = new Array(n),
                                    i = 0;
                                  i < n;
                                  i++
                                )
                                  r[i] = arguments[i];
                                g.nextTick(function () {
                                  ne(t) && t.apply(e, r);
                                });
                              })
                            : this.initLifeCycleListener("ready", t);
                        else
                          for (var n in F)
                            if (-1 !== F[n].indexOf(e))
                              switch (n) {
                                case y.DidHide:
                                  this.didHides.push(t);
                                  break;
                                case y.DidMount:
                                  this.didMounts.push(t);
                                  break;
                                case y.DidShow:
                                  this.didShows.push(t);
                                  break;
                                case y.WillMount:
                                  this.willMounts.push(t);
                                  break;
                                case y.WillUnmount:
                                  this.willUnmounts.push(t);
                              }
                        ne(this[e]) || (this[e] = t);
                      },
                    },
                    {
                      key: "initLifeCycleListener",
                      value: function (e, t) {
                        var n = this.current.router,
                          r = "on"
                            .concat(e[0].toUpperCase())
                            .concat(e.slice(1));
                        (t = t.bind(this)),
                          (null == n ? void 0 : n[r]) &&
                            g.eventCenter.on(n[r], t),
                          this.eventDestroyList.push(function () {
                            return g.eventCenter.off(n[r], t);
                          });
                      },
                    },
                    {
                      key: "executeLifeCycles",
                      value: function (e) {
                        for (
                          var t = arguments.length,
                            n = new Array(t > 1 ? t - 1 : 0),
                            r = 1;
                          r < t;
                          r++
                        )
                          n[r - 1] = arguments[r];
                        for (var i = 0; i < e.length; i++) {
                          var o = e[i];
                          this.safeExecute.apply(this, [o].concat(n));
                        }
                      },
                    },
                    {
                      key: "triggerPropertiesObservers",
                      value: function (e, t) {
                        var n = this;
                        this._observeProps.forEach(function (r) {
                          var i = r.name,
                            o = r.observer,
                            a = null == e ? void 0 : e[i],
                            u = t[i];
                          if (!G(a, u))
                            if ("string" == typeof o) {
                              var s = n[o];
                              ne(s) && s.call(n, u, a, i);
                            } else ne(o) && o.call(n, u, a, i);
                        });
                      },
                    },
                    {
                      key: "triggerObservers",
                      value: function (e, t) {
                        var n = this.observers;
                        if (null != n && 0 !== Object.keys(n).length) {
                          var r = M(e, t),
                            i = Object.keys(r);
                          if (0 !== i.length)
                            for (var o in n)
                              if (/\*\*/.test(o))
                                J("数据监听器 observers 不支持使用通配符 **。");
                              else {
                                for (
                                  var a = o.split(",").map(function (e) {
                                      return e.trim();
                                    }),
                                    u = !1,
                                    s = 0;
                                  s < a.length;
                                  s++
                                )
                                  for (var c = a[s], l = 0; l < i.length; l++) {
                                    var d = i[l];
                                    (d.startsWith(c) ||
                                      (c.startsWith(d) && c.endsWith("]"))) &&
                                      (u = !0);
                                  }
                                u &&
                                  n[o].apply(
                                    this,
                                    a.map(function (t) {
                                      return q(e, t);
                                    })
                                  );
                              }
                        }
                      },
                    },
                    {
                      key: "defineProperty",
                      value: function (e, t, n) {
                        Object.defineProperty(e, t, {
                          configurable: !0,
                          enumerable: !0,
                          set: function (e) {
                            n[t] = e;
                          },
                          get: function () {
                            return n[t];
                          },
                        });
                      },
                    },
                    {
                      key: "privateStopNoop",
                      value: function () {
                        var e, t;
                        2 === arguments.length
                          ? ((t =
                              arguments.length <= 0 ? void 0 : arguments[0]),
                            (e = arguments.length <= 1 ? void 0 : arguments[1]))
                          : 1 === arguments.length &&
                            (e = arguments.length <= 0 ? void 0 : arguments[0]),
                          "touchmove" === e.type &&
                            J(
                              "catchtouchmove 转换后只能停止回调函数的冒泡，不能阻止滚动穿透。如要阻止滚动穿透，可以手动给编译后的 View 组件加上 catchMove 属性"
                            ),
                          e.stopPropagation(),
                          ne(t) && t(e);
                      },
                    },
                    {
                      key: "componentWillMount",
                      value: function () {
                        this.safeExecute(
                          x.default(
                            O.default(u.prototype),
                            "componentWillMount",
                            this
                          )
                        ),
                          this.executeLifeCycles(
                            this.willMounts,
                            this.current.router || {}
                          ),
                          this.triggerObservers(this.data, u.defaultProps),
                          this.triggerPropertiesObservers(
                            u.defaultProps,
                            this.props
                          );
                      },
                    },
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.safeExecute(
                          x.default(
                            O.default(u.prototype),
                            "componentDidMount",
                            this
                          )
                        ),
                          this.executeLifeCycles(this.didMounts);
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.eventDestroyList.forEach(function (e) {
                          return e();
                        }),
                          this.safeExecute(
                            x.default(
                              O.default(u.prototype),
                              "componentWillUnmount",
                              this
                            )
                          ),
                          this.executeLifeCycles(this.willUnmounts);
                      },
                    },
                    {
                      key: "componentDidHide",
                      value: function () {
                        this.safeExecute(
                          x.default(
                            O.default(u.prototype),
                            "componentDidHide",
                            this
                          )
                        ),
                          this.executeLifeCycles(this.didHides);
                      },
                    },
                    {
                      key: "componentDidShow",
                      value: function () {
                        this.safeExecute(
                          x.default(
                            O.default(u.prototype),
                            "componentDidShow",
                            this
                          ),
                          this.current.router || {}
                        ),
                          this.executeLifeCycles(
                            this.didShows,
                            this.current.router || {}
                          );
                      },
                    },
                    {
                      key: "componentWillReceiveProps",
                      value: function (e) {
                        this.triggerObservers(e, this.props),
                          this.triggerPropertiesObservers(this.props, e),
                          this.safeExecute(
                            x.default(
                              O.default(u.prototype),
                              "componentWillReceiveProps",
                              this
                            )
                          );
                      },
                    },
                    {
                      key: "is",
                      get: function () {
                        return this.current.page.is;
                      },
                    },
                    {
                      key: "id",
                      get: function () {
                        return this.current.page.id;
                      },
                    },
                    {
                      key: "dataset",
                      get: function () {
                        return this.current.page.dataset;
                      },
                    },
                    {
                      key: "componentMethodsProxy",
                      value: function (e) {
                        var t = this;
                        return function () {
                          var n = t.current.page;
                          if (null == n ? void 0 : n[e])
                            return n[e].apply(n, arguments);
                          console.error("page 下没有 ".concat(e, " 方法"));
                        };
                      },
                    },
                    {
                      key: "selectComponent",
                      value: function () {
                        J(K.get("selectComponent"));
                      },
                    },
                    {
                      key: "selectAllComponents",
                      value: function () {
                        J(K.get("selectAllComponents"));
                      },
                    },
                    {
                      key: "selectOwnerComponent",
                      value: function () {
                        J(K.get("selectOwnerComponent"));
                      },
                    },
                    {
                      key: "groupSetData",
                      value: function () {
                        J(K.get("groupSetData"));
                      },
                    },
                  ]),
                  u
                );
              })(n),
              s = e.properties;
            if (s)
              for (var c in s) {
                var l = s[c];
                null == l ||
                  ne(l) ||
                  (void 0 !== l.value &&
                    (u.defaultProps = Object.assign(
                      k.default({}, c, l.value),
                      u.defaultProps
                    )));
              }
            return (
              ["externalClasses", "relations", "options"].forEach(function (t) {
                var n = e[t];
                null != n && (u[t] = n);
              }),
              u
            );
          }
        );
      };
    },
    48792: function (e, t, n) {
      (e.exports = n(54221).default), (e.exports.default = e.exports);
    },
  },
]);
