!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [34735],
      {
        38729: function (e, n, t) {
          var i,
            o = t(32180),
            a = t(57042),
            r = t(24460),
            c = t(21867),
            s = t(86066),
            l = t(90983),
            u = t(90129),
            d = t(52500),
            f = t(71515),
            p = t(92954),
            g = t.n(p),
            m = t(48792),
            h = t.n(m),
            v = t(79910),
            Z = t(79792),
            x = t(20893),
            w = t(79295),
            I = t(9153),
            C = t(13025),
            T = t(81957),
            U = t(48813),
            _ = {
              pageId: Z.default.isTieyou ? "10650003720" : "10650003718",
              data: {},
              onLoad: function (e) {
                if (
                  (console.log("unlimitQRCode options"),
                  console.log(e),
                  e && e.scene)
                ) {
                  var n = e.scene ? decodeURIComponent(e.scene) : "",
                    t = e.tid ? decodeURIComponent(e.tid) : "";
                  this.getSceneConfig(n, t);
                } else this.toHomeIndex();
              },
              getSceneConfig: function (e, n) {
                var t = this,
                  i = {
                    appid: Z.default.appId,
                    key: e,
                    scene: I.ZP.generateParamsScene,
                  };
                (0, C.cq)(i).then(
                  function (i) {
                    var o = i || {},
                      a = o.resultCode,
                      r = o.param;
                    t.ubtDevTrace("o_mini_page_middle_page", {
                      url: r,
                      scene: e,
                      tid: n,
                    }),
                      1 === a && r ? t.goTargetUrl(r) : t.toHomeIndex();
                  },
                  function (e) {
                    console.log(e), t.toHomeIndex();
                  }
                );
              },
              goTargetUrl: function (e) {
                var n = this,
                  t = e.trim(),
                  i = "/" !== t.slice(0, 1) ? "/".concat(t) : t,
                  o = this.getUrlParams(t);
                if (
                  (o && w.Z.setUnionData(o),
                  (i = (0, x.N)(i)),
                  console.error("newurl", i),
                  i.length > 800 && !v.Z.isTabUrl(i))
                ) {
                  var a,
                    r = {};
                  return (
                    null === (a = i.split("?")[1]) ||
                      void 0 === a ||
                      a.split("&").forEach(function (e) {
                        var n = e.split("="),
                          t = (0, u.Z)(n, 2),
                          i = t[0],
                          o = t[1];
                        r[i] = o;
                      }),
                    void this.redirectTo({ url: i.split("?")[0], data: r })
                  );
                }
                g().reLaunch({
                  url: i,
                  fail: function () {
                    n.toHomeIndex();
                  },
                });
              },
              getUrlParams: function (e) {
                if (e) {
                  var n = e.indexOf("?");
                  if (-1 !== n) {
                    var t,
                      i = e.slice(n + 1).split("&"),
                      o = {},
                      a = (0, l.Z)(i);
                    try {
                      for (a.s(); !(t = a.n()).done; ) {
                        var r = t.value.split("=");
                        o[r[0]] = r[1];
                      }
                    } catch (e) {
                      a.e(e);
                    } finally {
                      a.f();
                    }
                    return o;
                  }
                }
              },
              toHomeIndex: function () {
                v.Z.relaunchHome();
              },
            },
            y =
              (0, T.h)()(
                (i =
                  h()(_)(
                    (i = (function (e) {
                      (0, c.Z)(t, e);
                      var n = (0, s.Z)(t);
                      function t() {
                        return (0, a.Z)(this, t), n.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(t, [
                          {
                            key: "render",
                            value: function () {
                              return (0, U.tZ)(f.View, {
                                className: "wx_unlimit_qrcode_wrap",
                                children: (0, U.tZ)(f.View, {
                                  className: "loading_tips",
                                  children: (0, U.BX)(f.View, {
                                    className: "train-toast",
                                    children: [
                                      (0, U.tZ)(f.Icon, {
                                        className: "loading",
                                      }),
                                      (0, U.tZ)(f.Text, {
                                        children: "精彩内容加载中",
                                      }),
                                    ],
                                  }),
                                }),
                              });
                            },
                          },
                        ]),
                        t
                      );
                    })(d.default.Component))
                  ) || i)
              ) || i;
          Page(
            (0, o.createPageConfig)(
              y,
              "pages/market/unlimitQRCode/index",
              { root: { cn: [] } },
              { navigationBarTitleText: "页面加载中" } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (n) {
            return e((e.s = n));
          })(38729);
        }),
          e.O();
      },
    ]);
})();
