!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [67116],
      {
        6924: function (e, t, n) {
          var r,
            a = n(32180),
            i = n(79301),
            c = n(298),
            o = n(74921),
            s = n(95308),
            u = n(57042),
            h = n(24460),
            p = n(81876),
            d = n(21867),
            f = n(86066),
            l = n(45023),
            g = n(52500),
            v = n(92954),
            y = n.n(v),
            Z = n(49120),
            x = n(79910),
            k = n(17377),
            b = n(71515),
            w = n(18783),
            m = n(79792),
            C = n(81957),
            K = n(27113),
            L = n(3205),
            O = n(48813),
            U = ["scene", "pageKey", "type"],
            S = ["scene"],
            P = (0, k.ZP)({
              serviceCode: "17679",
              channel: m.default.train_channel,
              path: "bindZtripWechatInfoAndUidForOfficalAccount",
            }),
            I = (0, k.ZP)({
              serviceCode: "17679",
              channel: m.default.train_channel,
              path: "getZtripOfficialAccountUrl",
            }),
            R = {
              flightBargain:
                "/pages/activity/flight/kanjia/index?disableRedirectOfficial=1&shareKey=",
            },
            j =
              (0, C.h)()(
                (r = (function (e) {
                  (0, d.Z)(n, e);
                  var t = (0, f.Z)(n);
                  function n(e) {
                    var r;
                    return (
                      (0, u.Z)(this, n),
                      (r = t.call(this, e)),
                      (0, l.Z)((0, p.Z)(r), "pageId", "10650061196"),
                      (r.state = { url: "", type: 4 }),
                      r
                    );
                  }
                  return (
                    (0, h.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, i.Z)().mark(function e() {
                              var t, n, r, a, s, u, h, p, d, f;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            (0, v.getCurrentInstance)().router
                                              .params || {}),
                                          (n = t.scene),
                                          (r = void 0 === n ? "" : n),
                                          (a = t.pageKey),
                                          (s =
                                            void 0 === a ? "flightBargain" : a),
                                          (u = t.type),
                                          (h = void 0 === u ? 4 : u),
                                          (p = (0, o.Z)(t, U)),
                                          (d = decodeURIComponent(r)),
                                          console.log("shareKey", d),
                                          (e.next = 5),
                                          (0, w.M9)({ isSaveSessionKey: 2 })
                                        );
                                      case 5:
                                        if (
                                          (x.Z.setLaunchSource({
                                            loginSoureType: "wechat",
                                            loginSourceName: "assist_".concat(
                                              s
                                            ),
                                          }),
                                          this.checkLogin())
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          (e.next = 9),
                                          I(
                                            (0, c.Z)(
                                              { source: s, shareKey: d },
                                              p
                                            )
                                          )
                                        );
                                      case 9:
                                        if (1 === (f = e.sent).resultCode) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          this.goOriginPage(d, s, f.jumpUrl),
                                          e.abrupt("return")
                                        );
                                      case 13:
                                        if (!f.isOriginUrl) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          this.goOriginPage(d, s, f.jumpUrl),
                                          e.abrupt("return")
                                        );
                                      case 16:
                                        if (
                                          (this.setState({
                                            type: h,
                                            pageKey: s,
                                          }),
                                          this.checkLogin())
                                        ) {
                                          e.next = 21;
                                          break;
                                        }
                                        this.doLogin(d, s), (e.next = 23);
                                        break;
                                      case 21:
                                        return (
                                          (e.next = 23), this.bindToNext(d, s)
                                        );
                                      case 23:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "goOriginPage",
                        value: function (e, t, n) {
                          n
                            ? 0 === n.indexOf("http")
                              ? L.Z.twebview({
                                  data: { url: decodeURIComponent(n) },
                                })
                              : y().reLaunch({ url: n })
                            : y().reLaunch({
                                url: ""
                                  .concat(R[t])
                                  .concat(encodeURIComponent(e)),
                              });
                        },
                      },
                      {
                        key: "checkLogin",
                        value: function () {
                          return !!w.ZP.isLogin;
                        },
                      },
                      {
                        key: "doLogin",
                        value: function (e, t) {
                          var n = this;
                          w.ZP.doLogin()
                            .then(
                              (0, s.Z)(
                                (0, i.Z)().mark(function r() {
                                  return (0, i.Z)().wrap(function (r) {
                                    for (;;)
                                      switch ((r.prev = r.next)) {
                                        case 0:
                                          return (
                                            (r.next = 2), n.bindToNext(e, t)
                                          );
                                        case 2:
                                        case "end":
                                          return r.stop();
                                      }
                                  }, r);
                                })
                              )
                            )
                            .catch(function () {
                              n.doLogin(e, t);
                            });
                        },
                      },
                      {
                        key: "bindToNext",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, i.Z)().mark(function e(t, n) {
                              var r, a, s, u, h, p, d;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (r =
                                            (0, v.getCurrentInstance)().router
                                              .params || {}),
                                          (a = r.scene),
                                          (s = void 0 === a ? "" : a),
                                          (u = (0, o.Z)(r, S)),
                                          (h = decodeURIComponent(s)),
                                          (0, Z.showLoading)(),
                                          (e.prev = 3),
                                          (e.next = 6),
                                          (0, K.CC)()
                                        );
                                      case 6:
                                        e.next = 10;
                                        break;
                                      case 8:
                                        (e.prev = 8), (e.t0 = e.catch(3));
                                      case 10:
                                        return (
                                          (e.next = 12),
                                          I(
                                            (0, c.Z)(
                                              { source: n, shareKey: h },
                                              u
                                            )
                                          )
                                        );
                                      case 12:
                                        if (1 === (p = e.sent).resultCode) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          this.goOriginPage(t, n, p.jumpUrl),
                                          e.abrupt("return")
                                        );
                                      case 16:
                                        return (
                                          this.setState({ url: p.jumpUrl }),
                                          (e.next = 19),
                                          this.bindShareKey(t)
                                        );
                                      case 19:
                                        (0, Z.hideLoading)(),
                                          0 ===
                                          (d = this.state.url).indexOf("http")
                                            ? L.Z.twebview({
                                                data: {
                                                  url: decodeURIComponent(d),
                                                },
                                              })
                                            : y().reLaunch({
                                                url: this.state.url || R[n],
                                              });
                                      case 22:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[3, 8]]
                              );
                            })
                          );
                          return function (t, n) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "bindShareKey",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var n;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          P({
                                            shareKey: t,
                                            type: this.state.type || 4,
                                            pageKey: this.state.pageKey,
                                          })
                                        );
                                      case 3:
                                        (n = e.sent),
                                          console.log("bindShareKeyRes", n),
                                          1 !== n.resultCode &&
                                            (0, Z.showToast)(
                                              n.resultMessage ||
                                                "网络开小差了，请稍后再试"
                                            ),
                                          (e.next = 11);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          (0, Z.showToast)(
                                            "网络开小差了，请稍后再试"
                                          );
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 8]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, O.tZ)(b.View, {});
                        },
                      },
                    ]),
                    n
                  );
                })(g.default.Component))
              ) || r;
          Page(
            (0, a.createPageConfig)(
              j,
              "pages/activity/train/ztrip-assist-official-account/index",
              { root: { cn: [] } },
              { navigationStyle: "custom" } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(6924);
        }),
          e.O();
      },
    ]);
})();
