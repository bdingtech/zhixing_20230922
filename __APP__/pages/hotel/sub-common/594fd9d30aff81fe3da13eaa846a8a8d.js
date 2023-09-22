!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [10313],
    {
      50238: function (n, t, e) {
        e.d(t, {
          Ix: function () {
            return M;
          },
          XZ: function () {
            return z;
          },
          dh: function () {
            return U;
          },
          gJ: function () {
            return w;
          },
        });
        var r = e(79301),
          a = e(95308),
          u = e(92954),
          c = e.n(u),
          o = e(49120),
          i = e(18783),
          s = e(79910),
          f = e(35283),
          h = e(8271),
          l = e.n(h),
          p = "https://nephele.ctrip.com",
          d = "".concat(p, "/image/v2/api/base64upload"),
          m = "".concat(p, "/image/v2/api/formupload"),
          v = function (n) {
            var t = n.filePath,
              e = n.encoding;
            return new Promise(function (n, r) {
              c()
                .getFileSystemManager()
                .readFile({
                  filePath: t,
                  encoding: e,
                  success: function (t) {
                    return n(t.data);
                  },
                  fail: function (n) {
                    r(n);
                  },
                });
            });
          },
          g = function (n) {
            return v({ filePath: n, encoding: "base64" }).then(function (n) {
              return "data:image/png;base64,".concat(n);
            });
          },
          w = function (n) {
            var t = n.count;
            return new Promise(function (n, e) {
              c().chooseImage({
                count: t,
                sourceType: ["album", "camera"],
                success: function (t) {
                  var r = t.tempFilePaths;
                  r.length > 0 ? n(r) : ((0, o.showToast)("获取图片失败"), e());
                },
                fail: function (n) {
                  return e(n);
                },
              });
            });
          },
          Z = function () {
            return w({ count: 1 }).then(
              (function () {
                var n = (0, a.Z)(
                  (0, r.Z)().mark(function n(t) {
                    var e;
                    return (0, r.Z)().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), g(t[0]);
                          case 2:
                            return (e = n.sent), n.abrupt("return", e);
                          case 4:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                );
                return function (t) {
                  return n.apply(this, arguments);
                };
              })()
            );
          },
          b = function () {
            var n = "auth-ctrip:".concat(i.ZP.auth);
            return "Nephele "
              .concat(s.Z.randomStr(30), "/")
              .concat(l()().format("YYYYMMDDHHmm"), "/train_common/")
              .concat(f.Z.encode(n));
          },
          x = function (n) {
            var t = n.imgbase64;
            return new Promise(function (n, e) {
              var r = b();
              c().request({
                url: ""
                  .concat(
                    d,
                    "?channel=train_common&scene=IddfT3j8AaCceyi0Wmzz&public=1&auth="
                  )
                  .concat(r, "&rand=")
                  .concat(s.Z.randomStr(10)),
                data: { base64Str: "".concat(t) },
                header: { Authorization: r },
                method: "POST",
                success: function (t) {
                  var r, a;
                  null != t &&
                  null !== (r = t.data) &&
                  void 0 !== r &&
                  null !== (a = r.Content) &&
                  void 0 !== a &&
                  a.url
                    ? n(t.data.Content.url)
                    : e("upload fail, ".concat(JSON.stringify(t)));
                },
                fail: function (n) {
                  return e(n);
                },
              });
            });
          },
          y = "\r\n",
          P = "----ztripminiboundary" + Math.floor(1e5 * Math.random()),
          k = "multipart/form-data; boundary=".concat(P),
          A = function (n) {
            for (var t = [], e = 0; e < n.length; e++) {
              var r = n.charCodeAt(e);
              r >= 0 && r <= 127
                ? t.push(r)
                : r >= 128 && r <= 2047
                ? (t.push(192 | (31 & (r >> 6))), t.push(128 | (63 & r)))
                : (r >= 2048 && r <= 55295) || (r >= 57344 && r <= 65535)
                ? (t.push(224 | (15 & (r >> 12))),
                  t.push(128 | (63 & (r >> 6))),
                  t.push(128 | (63 & r)))
                : r >= 65536 &&
                  r <= 1114111 &&
                  (t.push(240 | (7 & (r >> 18))),
                  t.push(128 | (63 & (r >> 12))),
                  t.push(128 | (63 & (r >> 6))),
                  t.push(128 | (63 & r)));
            }
            for (
              var a = new ArrayBuffer(t.length), u = new Uint8Array(a), c = 0;
              c < t.length;
              c++
            )
              u[c] = t[c];
            return u;
          },
          C = function (n) {
            var t = n.match(/(?:(?!\/).)*$/);
            return (null == t ? void 0 : t[0]) || "";
          },
          S = (function () {
            var n = (0, a.Z)(
              (0, r.Z)().mark(function n(t) {
                var e, a, u, c, o, i, s, f, h, l, p, d, m;
                return (0, r.Z)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        (e = t.filePaths), (a = []), (u = 0);
                      case 3:
                        if (!(u < e.length)) {
                          n.next = 17;
                          break;
                        }
                        return (
                          (c = e[u]),
                          (o = C(c)),
                          (i = ""
                            .concat(
                              "--" + P + y,
                              'Content-Disposition:form-data;name="image'
                            )
                            .concat(u, '";filename="')
                            .concat(o, '"')
                            .concat(y)),
                          (i += "Content-Type: image/jpeg".concat(y).concat(y)),
                          a.push(A(i)),
                          (n.next = 11),
                          v({ filePath: c })
                        );
                      case 11:
                        (s = n.sent), a.push(new Uint8Array(s)), a.push(A(y));
                      case 14:
                        u++, (n.next = 3);
                        break;
                      case 17:
                        for (
                          a.push(A("--" + P + "--" + y)),
                            f = a.reduce(function (n, t) {
                              return n + t.length;
                            }, 0),
                            h = new ArrayBuffer(f),
                            l = new Uint8Array(h),
                            p = 0,
                            d = 0;
                          d < a.length;
                          d++
                        ) {
                          for (m = 0; m < a[d].length; m++) l[p + m] = a[d][m];
                          p += a[d].length;
                        }
                        return n.abrupt("return", h);
                      case 24:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
          z = (function () {
            var n = (0, a.Z)(
              (0, r.Z)().mark(function n(t) {
                var e, a, u;
                return (0, r.Z)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = t.filePaths), (n.next = 3), S({ filePaths: e })
                        );
                      case 3:
                        return (
                          (a = n.sent),
                          (u = b()),
                          n.abrupt(
                            "return",
                            new Promise(function (n, t) {
                              c().request({
                                url: ""
                                  .concat(
                                    m,
                                    "?channel=train_common&public=1&scene=IddfT3j8AaCceyi0Wmzz&auth="
                                  )
                                  .concat(u, "&rand=")
                                  .concat(s.Z.randomStr(10)),
                                data: a,
                                header: { "content-type": k, Authorization: u },
                                method: "POST",
                                success: function (e) {
                                  var r, a;
                                  if (
                                    (null == e ||
                                    null === (r = e.data) ||
                                    void 0 === r ||
                                    null === (a = r.Content) ||
                                    void 0 === a
                                      ? void 0
                                      : a.length) > 0
                                  ) {
                                    var u = e.data.Content.filter(function (n) {
                                      return 200 == n.status_code && n.url;
                                    }).map(function (n) {
                                      return { imgUrl: n.url };
                                    });
                                    n(u);
                                  } else t();
                                },
                                fail: function (n) {
                                  return t(n);
                                },
                              });
                            })
                          )
                        );
                      case 6:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
          T = (function () {
            var n = (0, a.Z)(
              (0, r.Z)().mark(function n(t) {
                var e, a;
                return (0, r.Z)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (e = t.count), (n.next = 3), w({ count: e });
                      case 3:
                        return (
                          (a = n.sent),
                          (0, o.showLoading)(),
                          n.abrupt(
                            "return",
                            z({ filePaths: a }).finally(function () {
                              return (0, o.hideLoading)();
                            })
                          )
                        );
                      case 6:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
          I = function () {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return new Promise(
              (function () {
                var t = (0, a.Z)(
                  (0, r.Z)().mark(function t(e, a) {
                    var u, c;
                    return (0, r.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((t.prev = 0), (u = ""), !n)) {
                                t.next = 8;
                                break;
                              }
                              return (t.next = 5), g(n);
                            case 5:
                              (u = t.sent), (t.next = 11);
                              break;
                            case 8:
                              return (t.next = 10), Z();
                            case 10:
                              u = t.sent;
                            case 11:
                              return (
                                (0, o.showLoading)(),
                                (t.next = 14),
                                x({ imgbase64: u })
                              );
                            case 14:
                              (c = t.sent), e([{ imgUrl: c }]), (t.next = 21);
                              break;
                            case 18:
                              (t.prev = 18), (t.t0 = t.catch(0)), a(t.t0);
                            case 21:
                              return (
                                (t.prev = 21),
                                (0, o.hideLoading)(),
                                t.finish(21)
                              );
                            case 24:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 18, 21, 24]]
                    );
                  })
                );
                return function (n, e) {
                  return t.apply(this, arguments);
                };
              })()
            );
          },
          M = function () {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = n.count,
              e = void 0 === t ? 1 : t;
            if (!i.ZP.auth)
              throw new Error("uploadImage need auth,please check.");
            return 1 == e ? I() : T({ count: e });
          },
          U = function () {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            if (!i.ZP.auth)
              throw new Error("uploadImage need auth,please check.");
            return n && n.length
              ? 1 === n.length
                ? I(n[0])
                : z({ filePaths: n })
              : [];
          };
      },
    },
  ]);
})();
