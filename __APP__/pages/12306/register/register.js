!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/9cf383cff2ba8ce0456965e69ba11b63.js"),
    require("../sub-common/3edb2b96731d94d93a96699eab306b50.js"),
    require("../sub-common/df4e17a6370f960d660d521bbd32cf3a.js"),
    require("../sub-common/2134ee5804fe59fe466b0b63fc7acddc.js"),
    require("../sub-common/88207e971f98eff8a3e10f6ee2b5063b.js"),
    require("../sub-common/d3422b412cb888582adccda3ed6c55c4.js"),
    require("../sub-common/30e2515ebd297ee708f98fe67f15a40b.js"),
    require("../sub-common/789d0e61f3340fac4da62181ad8a5446.js"),
    require("../sub-common/40f2b7bd8efebebc05ab739cbbb4a01d.js"),
    require("../sub-common/342bdcbe80e808fa7b62443e18d9142f.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [64125],
      {
        306: function (e, t, n) {
          var r = n(32180),
            o = n(57042),
            a = n(24460),
            i = n(81876),
            c = n(21867),
            s = n(86066),
            u = n(52500),
            l = n(79792),
            m = n(65573),
            d = n(18783),
            f = n(81957),
            p = n(298),
            g = n(45023),
            b = n(79038),
            h = n(59772),
            Z = n(46112),
            w = n(14665),
            v = (function (e) {
              (0, c.Z)(n, e);
              var t = (0, s.Z)(n);
              function n() {
                return (0, o.Z)(this, n), t.apply(this, arguments);
              }
              return (0, a.Z)(n);
            })(Z.Z);
          (0, g.Z)(
            v,
            "store",
            (0, p.Z)((0, p.Z)({}, (0, b.Z)((0, h.Z)(v), "store", v)), {
              models: (0, p.Z)(
                (0, p.Z)({}, (0, b.Z)((0, h.Z)(v), "store", v).models || {}),
                {},
                { pasReaderModel: w.Z }
              ),
            })
          );
          var N,
            C = n(79301),
            x = n(95308),
            y = n(49120),
            T = n(97939),
            B = n(92954),
            P = n.n(B),
            V = n(45742),
            k = n(74867),
            D = n(88424),
            S = n(71515),
            I = n(61537),
            R = n(48813),
            $ = "pages/12306/login/login",
            X = function (e) {
              var t = e.randomAccount,
                n = e.randomPassword;
              if (
                (function (e) {
                  var t,
                    n,
                    r = (0, B.getCurrentPages)();
                  return null === (t = r[r.length - 2]) ||
                    void 0 === t ||
                    null === (n = t.route) ||
                    void 0 === n
                    ? void 0
                    : n.startsWith(e);
                })($)
              )
                return v.confirmBack();
              v.redirectTo({
                url: "/".concat($),
                data: { account: t, password: n },
              });
            },
            q = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.randomAccount,
                n = e.randomPassword;
              return (0, R.BX)(S.View, {
                className: "register-12306-success-pop",
                children: [
                  (0, R.BX)(S.View, {
                    className: "pop-modal-hd",
                    children: [
                      (0, R.tZ)(S.Text, { className: "i12306-suc" }),
                      "注册成功",
                    ],
                  }),
                  (0, R.BX)(S.View, {
                    className: "pop-login-info",
                    children: [
                      (0, R.BX)(S.View, {
                        className: "p",
                        children: [
                          "账号：",
                          (0, R.tZ)(S.Text, { children: t }),
                        ],
                      }),
                      (0, R.BX)(S.View, {
                        className: "p",
                        children: [
                          "密码：",
                          (0, R.tZ)(S.Text, { children: n }),
                        ],
                      }),
                    ],
                  }),
                  (0, R.tZ)(S.View, {
                    className: "pop-modal-btn",
                    children: (0, R.tZ)(S.View, {
                      className: "btn-blue",
                      id: "AgBP",
                      onClick: function () {
                        X({ randomAccount: t, randomPassword: n });
                      },
                      children: "立即登录",
                    }),
                  }),
                  (0, R.BX)(S.View, {
                    className: "pop-qrcode",
                    children: [
                      (0, R.tZ)(S.Image, {
                        src: l.default.isTieyou ? I.ZX : I.ir,
                        className: "qrcode",
                      }),
                      (0, R.BX)(S.View, {
                        className: "cont",
                        children: [
                          (0, R.BX)(S.View, {
                            className: "h5",
                            children: [
                              "关注",
                              "zhixing" !== l.default.partner
                                ? "“铁友”"
                                : "“智行火车票”",
                              "小程序",
                            ],
                          }),
                          (0, R.tZ)(S.View, {
                            className: "p",
                            children: "获取一站式出行服务",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, R.tZ)(S.View, {
                    className: "pop-save",
                    children: "截图保存，手机号不丢失",
                  }),
                ],
              });
            },
            j = "pages/12306/login/login",
            M = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.canLogout,
                n = void 0 === t || t,
                r = function (e) {
                  var t,
                    n,
                    r = (0, B.getCurrentPages)();
                  return null === (t = r[r.length - 2]) ||
                    void 0 === t ||
                    null === (n = t.route) ||
                    void 0 === n
                    ? void 0
                    : n.startsWith(e);
                },
                o = function () {
                  k.Z.commonDebugTrace("注册12306第一步失败-去注销"),
                    v.closeCommonDialog(),
                    E();
                },
                a = function () {
                  if (
                    (k.Z.commonDebugTrace("注册12306第一步失败-去登录"), r(j))
                  )
                    return v.navigateBack();
                  v.redirectTo({ url: "/".concat(j) });
                };
              return (0, R.BX)(S.View, {
                className: "register-12306-agian-failed-pop",
                children: [
                  (0, R.tZ)(S.View, {
                    className: "text-desc",
                    children: "请确认是否您本人注册",
                  }),
                  (0, R.BX)(S.View, {
                    className: "bd",
                    children: [
                      n &&
                        (0, R.BX)(S.View, {
                          className: "bd-item flex flex-center flex-column",
                          children: [
                            (0, R.tZ)(S.View, {
                              className: "item-tit",
                              children: "非本人注册",
                            }),
                            (0, R.tZ)(S.View, {
                              className: "item-btn",
                              id: "AgBM",
                              onClick: o,
                              children: "去注销",
                            }),
                          ],
                        }),
                      !n &&
                        (0, R.BX)(S.View, {
                          className: "bd-item flex flex-center flex-column",
                          children: [
                            (0, R.tZ)(S.View, {
                              className: "item-tit",
                              children: "非本人注册",
                            }),
                            (0, R.tZ)(S.View, {
                              className: "item-btn",
                              id: "AgBN",
                              onClick: v.closeCommonDialog,
                              children: "暂不注册",
                            }),
                          ],
                        }),
                      (0, R.BX)(S.View, {
                        className: "bd-item flex flex-center flex-column",
                        children: [
                          (0, R.tZ)(S.View, {
                            className: "item-tit",
                            children: "本人注册",
                          }),
                          (0, R.tZ)(S.View, {
                            className: "item-btn",
                            id: "AgBO",
                            onClick: a,
                            children: "去登录",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            },
            A = n(94782),
            F = (function () {
              var e = (0, x.Z)(
                (0, C.Z)().mark(function e() {
                  var t;
                  return (0, C.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            v.showMultiButtonDialogWithPromise({
                              title: "铁路局规定购票必须实名制",
                              content:
                                "注册12306账户，更加安全快速，是否继续注册？",
                              leftButtonName: "暂不注册",
                              rightButtonName: "继续注册",
                            })
                          );
                        case 2:
                          return (t = e.sent), e.abrupt("return", "left" === t);
                        case 4:
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
            _ = function (e) {
              var t = {
                $PassportCodeTypeRef: e.cardType,
                $IdNumberInputRef: e.IdentityNo,
                $UserNameInputRef: e.CNName,
                $MobileInputRef: e.Mobile,
                $MobileCodeSelector: e.mobileCode,
                $SexSelectorRef: e.gender,
              };
              Object.keys(t).forEach(function (e) {
                "$SexSelectorRef" === e
                  ? P().nextTick(function () {
                      v.getPage().$RegisterForm.setFormVal(e, t[e]);
                    })
                  : v.getPage().$RegisterForm.setFormVal(e, t[e]);
              }),
                1 == e.cardType &&
                  v
                    .getPage()
                    .$RegisterForm.setFormVal("$MobileCodeSelector", "86");
            },
            U = (function () {
              var e = (0, x.Z)(
                (0, C.Z)().mark(function e() {
                  var t;
                  return (0, C.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), (0, A.w)(v);
                        case 2:
                          (t =
                            v.getState().pasReaderModel
                              .filterCommonPassenger)[0] && _(t[0]);
                        case 4:
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
            W = function (e, t) {
              if (1 !== e.failCode)
                return v.showCommonDialog({
                  title: "注册失败",
                  content: e.retMessage,
                });
              (0, T.$q)({
                passportType: t.type,
                passportNumber: t.idNumber,
                passportName: t.userName,
              }).then(function (e) {
                k.Z.commonDebugTrace("注册12306第一步失败-引导注销"),
                  v.showCommonDialogWithoutButton({
                    title: "该身份证件已被注册",
                    content: function () {
                      return (0, R.tZ)(M, { canLogout: !e });
                    },
                  });
              });
            },
            O = (function () {
              var e = (0, x.Z)(
                (0, C.Z)().mark(function e(t) {
                  var n, r;
                  return (0, C.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.formValue),
                              k.Z.commonDebugTrace("注册12306"),
                              (e.prev = 2),
                              k.Z.commonDebugTrace("注册12306第一步"),
                              (0, y.showLoading)(),
                              (e.next = 7),
                              (0, T.Cg)(
                                (0, p.Z)(
                                  (0, p.Z)({}, n),
                                  {},
                                  { type: n.seletedPassportType.type }
                                )
                              )
                            );
                          case 7:
                            if (
                              ((r = e.sent),
                              (0, y.hideLoading)(),
                              2 === r.registerStatus)
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (
                              k.Z.commonDebugTrace({
                                step: "注册12306第一步失败",
                                err: r,
                              }),
                              W(
                                r,
                                (0, p.Z)(
                                  (0, p.Z)({}, n),
                                  {},
                                  { type: n.seletedPassportType.type }
                                )
                              ),
                              e.abrupt("return")
                            );
                          case 13:
                            return (
                              k.Z.commonDebugTrace("注册12306第二步"),
                              (e.next = 16),
                              (0, D.nQ)({
                                registerKey: r.registerKey,
                                mobile: n.mobile,
                                mobileCode: n.mobileCode,
                                userName: r._accountInfo.UserName,
                                password: r._accountInfo.Password,
                              })
                            );
                          case 16:
                            B.eventCenter.trigger(V.n.REGISTER_12306_SUCCESS, {
                              account:
                                ("86" == n.mobileCode && n.mobile) ||
                                r._accountInfo.UserName,
                              password: r._accountInfo.Password,
                            }),
                              v.showCommonDialogWithoutButton({
                                hideTitle: !0,
                                content: function () {
                                  return (0, R.tZ)(q, {
                                    randomAccount: r._accountInfo.UserName,
                                    randomPassword: r._accountInfo.Password,
                                  });
                                },
                              }),
                              (e.next = 23);
                            break;
                          case 20:
                            (e.prev = 20),
                              (e.t0 = e.catch(2)),
                              k.Z.commonDebugTrace({
                                step: "注册12306失败",
                                err: e.t0,
                              });
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 20]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            E = (function () {
              var e = (0, x.Z)(
                (0, C.Z)().mark(function e() {
                  var t, n, r, o, a, i, c, s;
                  return (0, C.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = v.getPage().$RegisterForm.getFormVal()),
                              (n = t.userName),
                              (r = t.seletedPassportType),
                              (o = t.idNumber),
                              (a = t.mobile),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, D.kx)(
                                {
                                  faceInfo: {
                                    fromType: 3,
                                    certificationInfo: JSON.stringify({
                                      name: encodeURIComponent(n),
                                      passportType: r.realType,
                                      passportNumber: o,
                                      mobile: a,
                                    }),
                                    userName:
                                      null ===
                                        (i = v.getState().my12306Model) ||
                                      void 0 === i
                                        ? void 0
                                        : i.login12306Name,
                                    password:
                                      null ===
                                        (c = v.getState().my12306Model) ||
                                      void 0 === c
                                        ? void 0
                                        : c.login12306Pas,
                                  },
                                },
                                v.getPage()
                              )
                            );
                          case 4:
                            null === (s = v.getPage().$CommonDialog) ||
                              void 0 === s ||
                              s.showCommonDialog({
                                content: "注销成功，请继续~",
                              }),
                              (e.next = 9);
                            break;
                          case 7:
                            (e.prev = 7), (e.t0 = e.catch(1));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 7]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            L = n(21563),
            z = n(88016),
            J =
              (0, f.h)(!1, { usePageWrapper: !0 })(
                (N = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, s.Z)(n);
                  function n(e) {
                    var r;
                    return (
                      (0, o.Z)(this, n),
                      ((r = t.call(this, e)).store = v.create(
                        (0, i.Z)(r)
                      ).store),
                      (r.pageId = "10650085960"),
                      (r.pageTitle = "注册12306"),
                      (r.disablePageBgStyle = !0),
                      (r.pageRootClassName =
                        "train-12306-register-page ".concat(l.default.zxTyStr)),
                      (r.onInterceptBackAsync = F),
                      r
                    );
                  }
                  return (
                    (0, a.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setPageData(), U();
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          var e = (this.$instance.router.params || {}).mobile;
                          this.mobile = e || d.ZP.userName;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, R.BX)(m.zt, {
                            store: this.store,
                            children: [
                              (0, R.tZ)(L.Z, { onPsgChange: _ }),
                              (0, R.tZ)(z.Z, {
                                confirmText: "立即注册",
                                onRef: function (t) {
                                  return (e.$RegisterForm = t);
                                },
                                handleConfirm: O,
                                showCodeSelectorDisabled: !0,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(u.default.Component))
              ) || N;
          Page(
            (0, r.createPageConfig)(
              J,
              "pages/12306/register/register",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "注册12306",
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            37013, 61094, 26450, 52593, 74731, 10560, 11748, 83067, 60579,
            50127, 77585, 31472, 85379, 43412, 5207, 36250, 1709, 98398, 19559,
            11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(306);
          }
        ),
          e.O();
      },
    ]);
})();
