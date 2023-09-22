!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [10560],
    {
      88424: function (e, n, r) {
        r.d(n, {
          a2: function () {
            return N;
          },
          kx: function () {
            return D;
          },
          nQ: function () {
            return C;
          },
          pS: function () {
            return w;
          },
          vs: function () {
            return v;
          },
          z0: function () {
            return t;
          },
        });
        var t,
          o = r(298),
          a = r(79301),
          c = r(95308),
          s = (r(52500), r(71515)),
          u = r(79910),
          i = r(97939),
          l = r(74867),
          m = r(49120),
          f = r(10741),
          p = r(39778),
          d = r(81811),
          g = r(13871),
          h = r(81191),
          b = r(61537),
          Z = r(48813),
          v = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "default",
              n = b.vt[e];
            u.Z.commonNavigator(n);
          };
        !(function (e) {
          (e[(e.success = 1)] = "success"),
            (e[(e.actionFail = 7777)] = "actionFail"),
            (e[(e.cancel = 3333)] = "cancel");
        })(t || (t = {}));
        var w = (function () {
            var e = (0, c.Z)(
              (0, a.Z)().mark(function e(n, r) {
                var t, o, s, u, f, p;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = n.userName),
                          (o = n.mobile),
                          (s = n.password),
                          (u = n.ignoreCancel),
                          (f = void 0 !== u && u),
                          (p = n.onVerify),
                          l.Z.commonDebugTrace("进入短信核验"),
                          e.abrupt(
                            "return",
                            new Promise(function (e, n) {
                              (
                                r || (0, m.getCurrentPage)()
                              ).showCommonDialogWithoutButton({
                                title: "手机号核验",
                                content: function (r) {
                                  var u = r.onClose;
                                  return (0, Z.tZ)(d.Z, {
                                    mobile: o,
                                    smsCode: "666",
                                    onVerify: (function () {
                                      var r = (0, c.Z)(
                                        (0, a.Z)().mark(function r(o) {
                                          var c, f;
                                          return (0, a.Z)().wrap(
                                            function (r) {
                                              for (;;)
                                                switch ((r.prev = r.next)) {
                                                  case 0:
                                                    if (!p) {
                                                      r.next = 2;
                                                      break;
                                                    }
                                                    return r.abrupt(
                                                      "return",
                                                      null === (c = p(o, u)) ||
                                                        void 0 === c
                                                        ? void 0
                                                        : c.then(e).catch(n)
                                                    );
                                                  case 2:
                                                    return (
                                                      (0, m.showLoading)(),
                                                      (r.prev = 3),
                                                      (r.next = 6),
                                                      (0, i.Dq)({
                                                        UserName: t,
                                                        Password: s,
                                                        VerifyCode: o,
                                                      })
                                                    );
                                                  case 6:
                                                    (f = r.sent),
                                                      (0, m.hideLoading)(),
                                                      null == u || u(),
                                                      e(f),
                                                      l.Z.commonDebugTrace(
                                                        "短信核验成功"
                                                      ),
                                                      (r.next = 20);
                                                    break;
                                                  case 13:
                                                    (r.prev = 13),
                                                      (r.t0 = r.catch(3)),
                                                      console.log(
                                                        "handleSmsVerifyAsync err",
                                                        r.t0
                                                      ),
                                                      (0, m.hideLoading)(),
                                                      (0, m.showToast)(
                                                        r.t0.Message ||
                                                          "网络错误，请稍候重试~"
                                                      ),
                                                      n(r.t0),
                                                      l.Z.commonDebugTrace(
                                                        "短信核验失败"
                                                      );
                                                  case 20:
                                                  case "end":
                                                    return r.stop();
                                                }
                                            },
                                            r,
                                            null,
                                            [[3, 13]]
                                          );
                                        })
                                      );
                                      return function (e) {
                                        return r.apply(this, arguments);
                                      };
                                    })(),
                                  });
                                },
                                onClose: function () {
                                  !f && n(),
                                    l.Z.commonDebugTrace("短信核验取消");
                                },
                              });
                            })
                          )
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })(),
          C = (function () {
            var e = (0, c.Z)(
              (0, a.Z)().mark(function e(n, r) {
                var o, u, f, p, g, h;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((o = n.registerKey),
                          (u = n.mobile),
                          (f = n.mobileCode),
                          (p = n.userName),
                          (g = n.password),
                          l.Z.commonDebugTrace("注册12306第二步-短信核验"),
                          (h = r || (0, m.getCurrentPage)()),
                          "86" == f)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          h.navigateToAsync({
                            url: "/pages/12306/register/sendSms/sendSms",
                            data: {
                              mobile: u,
                              mobileCode: f,
                              userName: p,
                              password: g,
                              registerKey: o,
                            },
                          })
                        );
                      case 5:
                        return e.abrupt(
                          "return",
                          new Promise(function (e, n) {
                            h.showCommonDialogWithoutButton({
                              title: "手机验证",
                              content: function (r) {
                                var t = r.onClose;
                                return (0, Z.tZ)(d.Z, {
                                  titleDesc:
                                    "为了保护您的信息安全，便于今后为您服务，请按以下步骤完成手机双向核验：",
                                  smsDesc: function () {
                                    return (0, Z.BX)(s.Block, {
                                      children: [
                                        "使用手机",
                                        (0, Z.tZ)(s.Text, {
                                          className: "tblue",
                                          children: u,
                                        }),
                                        "发送短信",
                                        (0, Z.tZ)(s.Text, {
                                          className: "tblue",
                                          children: "999",
                                        }),
                                        "至",
                                        (0, Z.tZ)(s.Text, {
                                          className: "tblue",
                                          children: "12306",
                                        }),
                                        "，每天最多发送三次",
                                      ],
                                    });
                                  },
                                  mobile: u,
                                  smsCode: "999",
                                  onVerify: (function () {
                                    var r = (0, c.Z)(
                                      (0, a.Z)().mark(function r(c) {
                                        var s;
                                        return (0, a.Z)().wrap(
                                          function (r) {
                                            for (;;)
                                              switch ((r.prev = r.next)) {
                                                case 0:
                                                  return (
                                                    (0, m.showLoading)(),
                                                    (r.prev = 1),
                                                    (r.next = 4),
                                                    (0, i.Dd)({
                                                      registerKey: o,
                                                      verificationCode: c,
                                                    })
                                                  );
                                                case 4:
                                                  if (
                                                    !(s = r.sent) ||
                                                    2 === s.registerStatus
                                                  ) {
                                                    r.next = 7;
                                                    break;
                                                  }
                                                  throw new Error(
                                                    s.resultMessage
                                                  );
                                                case 7:
                                                  (0, m.hideLoading)(),
                                                    e(s),
                                                    l.Z.commonDebugTrace(
                                                      "注册12306第二步-短信核验成功"
                                                    ),
                                                    null == t || t(),
                                                    (r.next = 19);
                                                  break;
                                                case 13:
                                                  (r.prev = 13),
                                                    (r.t0 = r.catch(1)),
                                                    (0, m.hideLoading)(),
                                                    (0, m.showToast)(
                                                      r.t0.Message ||
                                                        r.t0.message ||
                                                        "网络错误，请稍候重试~"
                                                    ),
                                                    n(r.t0),
                                                    l.Z.commonDebugTrace({
                                                      step: "注册12306第二步-短信核验失败",
                                                      err: r.t0,
                                                    });
                                                case 19:
                                                case "end":
                                                  return r.stop();
                                              }
                                          },
                                          r,
                                          null,
                                          [[1, 13]]
                                        );
                                      })
                                    );
                                    return function (e) {
                                      return r.apply(this, arguments);
                                    };
                                  })(),
                                });
                              },
                              onClose: n.bind(void 0, { code: t.cancel }),
                            });
                          })
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })(),
          x = (function () {
            var e = (0, c.Z)(
              (0, a.Z)().mark(function e() {
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          new Promise(
                            (function () {
                              var e = (0, c.Z)(
                                (0, a.Z)().mark(function e(n, r) {
                                  var t, o, c, s;
                                  return (0, a.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (e.next = 2), (0, f.Qje)();
                                        case 2:
                                          (t = e.sent),
                                            (o = t.RetCode),
                                            (c = t.IsCanFaceAuthentication),
                                            (s = t.RetMessage),
                                            1 == o && c
                                              ? n(t)
                                              : r({ message: s });
                                        case 5:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (n, r) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
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
          y = (function () {
            var e = (0, c.Z)(
              (0, a.Z)().mark(function e(n, r) {
                var c, s, u, i, f, p, d, b, v, w, C, y, T, k;
                return (0, a.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (c = n.userName),
                            (s = n.idCardType),
                            (u = n.idCardNo),
                            (i = n.mobile),
                            l.Z.commonDebugTrace("扫脸找回密码"),
                            (f = r || (0, m.getCurrentPage)()),
                            (0, m.showLoading)(),
                            (e.prev = 4),
                            (e.next = 7),
                            x()
                          );
                        case 7:
                          e.next = 12;
                          break;
                        case 9:
                          throw (
                            ((e.prev = 9),
                            (e.t0 = e.catch(4)),
                            {
                              code: t.actionFail,
                              message: "抱歉，暂时无法扫脸找回~",
                            })
                          );
                        case 12:
                          return (
                            (0, m.hideLoading)(),
                            (e.next = 15),
                            D(
                              {
                                faceInfo: {
                                  fromType: 5,
                                  certificationInfo: JSON.stringify({
                                    name: c,
                                    passportType: s,
                                    passportNumber: u,
                                    mobile: i,
                                  }),
                                  failAction: "return",
                                },
                              },
                              f
                            )
                          );
                        case 15:
                          if (
                            ((p = e.sent),
                            (d = p.res),
                            (b = d.callbackData),
                            (v = d.cheackFacePollingKey),
                            (w = d.certificationResultCode),
                            (C = d.RetMessage),
                            (y = d.failCode),
                            1 === w)
                          ) {
                            e.next = 22;
                            break;
                          }
                          if (2 !== w || 2 !== y) {
                            e.next = 21;
                            break;
                          }
                          throw (
                            (f.$CommonDrawer.showCommonDrawer({
                              hideTitle: !0,
                              content: function (e) {
                                var n = e.onClose;
                                return (0, Z.tZ)(h.Z, {
                                  page: f,
                                  idNumber: u,
                                  userName: c,
                                  onCancel: n,
                                });
                              },
                            }),
                            { code: t.cancel, message: "操作取消~" })
                          );
                        case 21:
                          throw {
                            code: t.actionFail,
                            message: C || "扫脸失败，请稍候重试~",
                          };
                        case 22:
                          (e.prev = 22),
                            b &&
                              ((k = JSON.parse(b)),
                              (T = {}),
                              k.forEach(function (e) {
                                Object.assign(T, (0, o.Z)({}, e));
                              }),
                              console.log("---------", T)),
                            (e.next = 30);
                          break;
                        case 26:
                          throw (
                            ((e.prev = 26),
                            (e.t1 = e.catch(22)),
                            console.log("error", e.t1),
                            {
                              code: t.actionFail,
                              message: C || "扫脸失败，请稍候重试~",
                            })
                          );
                        case 30:
                          return e.abrupt(
                            "return",
                            new Promise(function (e, n) {
                              f.$CommonDrawer.showCommonDrawer({
                                title: "重置密码",
                                hideClose: !0,
                                content: function (r) {
                                  var o = r.onClose;
                                  return (0, Z.tZ)(g.Z, {
                                    faceCallbackData: T,
                                    cheackFacePollingKey: v,
                                    currentPage: f,
                                    onSuccess: function (n) {
                                      null == o || o(),
                                        e({
                                          code: t.success,
                                          message: "密码找回成功~",
                                          res: n,
                                        });
                                    },
                                    onCancel: function () {
                                      n({
                                        code: t.cancel,
                                        message: "操作取消~",
                                      });
                                    },
                                    logOutOpts: {
                                      userName: c,
                                      realType: s,
                                      idNumber: u,
                                      mobile: i,
                                    },
                                  });
                                },
                                onWrapClose: function () {
                                  n({ code: t.cancel, message: "操作取消~" });
                                },
                              });
                            })
                          );
                        case 31:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [4, 9],
                    [22, 26],
                  ]
                );
              })
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })(),
          T = (function () {
            var e = (0, c.Z)(
              (0, a.Z)().mark(function e(n, r) {
                var o, c, s, u, f;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (o = n.idCardType),
                          (c = n.idCardNo),
                          (s = n.mobile),
                          l.Z.commonDebugTrace("短信找回密码"),
                          (u = r || (0, m.getCurrentPage)()),
                          (0, m.showLoading)(),
                          (e.next = 6),
                          (0, i.VX)({
                            userName: "",
                            idCardType: "".concat(o),
                            idCardNo: c,
                            mobile: s,
                          })
                        );
                      case 6:
                        return (
                          (f = e.sent),
                          (0, m.hideLoading)(),
                          l.Z.commonDebugTrace({
                            step: "短信找回第一步成功",
                            smsResult: f,
                          }),
                          e.abrupt(
                            "return",
                            new Promise(function (e, n) {
                              u.showCommonDialogWithoutButton({
                                title: "重置密码",
                                content: function (n) {
                                  var r = n.onClose;
                                  return (0, Z.tZ)(p.Z, {
                                    idCardType: o,
                                    idCardNo: c,
                                    mobile: s,
                                    pollingKey: f.pollingKey,
                                    onSuccess: function (n) {
                                      e({
                                        code: t.success,
                                        message: "找回成功~",
                                        res: n,
                                      }),
                                        r(),
                                        l.Z.commonDebugTrace(
                                          "短信找回第二步成功"
                                        );
                                    },
                                  });
                                },
                                onClose: function () {
                                  n({ code: t.cancel, message: "操作取消~" });
                                },
                              });
                            })
                          )
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })(),
          k = (function () {
            var e = (0, c.Z)(
              (0, a.Z)().mark(function e(n) {
                var r;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), (0, f.Uo7)(n);
                      case 2:
                        return (
                          (r = e.sent),
                          e.abrupt(
                            "return",
                            new Promise(function (e, n) {
                              1 == r.RetCode ? e(r) : n(r);
                            })
                          )
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          N = (function () {
            var e = (0, c.Z)(
              (0, a.Z)().mark(function e(n, r) {
                var c, s, u, i, f, p, d, g;
                return (0, a.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((c = n.userName),
                            (s = n.idCardType),
                            (u = n.idCardNo),
                            (i = n.mobile),
                            (f = n.method),
                            l.Z.commonDebugTrace("找回密码"),
                            (e.prev = 2),
                            (p = !0),
                            (d = "face" === f),
                            "sms" === f || !p)
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.next = 8),
                            k({
                              PassportType: s,
                              PassportNo: u,
                              PassportName: c,
                              Channel: "ctripwx",
                            })
                          );
                        case 8:
                          e.sent.IsCanRetrievePsw || (p = !1);
                        case 10:
                          if (!d || p) {
                            e.next = 12;
                            break;
                          }
                          throw "抱歉，暂时无法通过扫脸找回~";
                        case 12:
                          if (!(!f && p)) {
                            e.next = 18;
                            break;
                          }
                          return (
                            (e.next = 16),
                            r.showMultiButtonDialogWithPromise({
                              title: "选择认证方式",
                              content:
                                "您可以选择通过短信验证码认证或者刷脸认证重置您的密码",
                              leftButtonName: "短信认证",
                              rightButtonName: "刷脸认证",
                            })
                          );
                        case 16:
                          (g = e.sent), (d = "right" === g);
                        case 18:
                          if (!d) {
                            e.next = 20;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            y(
                              {
                                userName: c,
                                idCardType: s,
                                idCardNo: u,
                                mobile: i,
                              },
                              r
                            )
                          );
                        case 20:
                          return (
                            (e.next = 22),
                            T(
                              {
                                userName: c,
                                idCardType: s,
                                idCardNo: u,
                                mobile: i,
                              },
                              r
                            )
                          );
                        case 22:
                          return e.abrupt("return", e.sent);
                        case 25:
                          throw (
                            ((e.prev = 25),
                            (e.t0 = e.catch(2)),
                            (0, m.hideLoading)(),
                            l.Z.commonDebugTrace({
                              step: "找回密码失败",
                              err: e.t0,
                            }),
                            (0, o.Z)(
                              (0, o.Z)(
                                {},
                                {
                                  code: t.actionFail,
                                  message:
                                    e.t0.message ||
                                    e.t0.resultMessage ||
                                    "操作失败，请稍候重试~",
                                }
                              ),
                              "string" == typeof e.t0 ? { message: e.t0 } : e.t0
                            ))
                          );
                        case 30:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 25]]
                );
              })
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })(),
          D = function (e, n) {
            var r, t;
            return (
              l.Z.commonDebugTrace("授权人脸核验"),
              null ===
                (r = (t = n || (0, m.getCurrentPage)()).navigateToAsync) ||
              void 0 === r
                ? void 0
                : r
                    .call(t, {
                      url: "/pages/12306/faceAuth/faceAuth",
                      data: { faceInfo: e.faceInfo },
                    })
                    .then(function (e) {
                      return l.Z.commonDebugTrace("人脸核验结束"), e;
                    })
                    .catch(function (e) {
                      throw (l.Z.commonDebugTrace("人脸核验取消"), e);
                    })
            );
          };
      },
    },
  ]);
})();
