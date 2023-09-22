!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/3edb2b96731d94d93a96699eab306b50.js"),
    require("../sub-common/df4e17a6370f960d660d521bbd32cf3a.js"),
    require("../sub-common/2134ee5804fe59fe466b0b63fc7acddc.js"),
    require("../sub-common/88207e971f98eff8a3e10f6ee2b5063b.js"),
    require("../sub-common/d3422b412cb888582adccda3ed6c55c4.js"),
    require("../sub-common/30e2515ebd297ee708f98fe67f15a40b.js"),
    require("../sub-common/789d0e61f3340fac4da62181ad8a5446.js"),
    require("../sub-common/40f2b7bd8efebebc05ab739cbbb4a01d.js"),
    require("../sub-common/3cd35e0ae0d34a9b944389e4550448dd.js"),
    require("../sub-common/872d10eabc5bafd8ddd9d0be25c3b4cc.js"),
    require("../sub-common/9b151316d525b3cb0f9389c968a999e5.js"),
    require("../sub-common/fc6ca7e0e852bffe8bc29567b631b39c.js"),
    require("../sub-common/44bb459adf3b3cc2c7eba45f44f1a98d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [93799],
      {
        11733: function (e, t, n) {
          var r = n(32180),
            o = n(79301),
            a = n(95308),
            i = n(57042),
            c = n(24460),
            s = n(81876),
            u = n(21867),
            l = n(86066),
            d = n(45023),
            g = n(52500),
            f = n(65573),
            m = n(81957),
            p = n(71515),
            b = n(92954),
            h = n.n(b),
            v = n(45742),
            Z = n(94190),
            w = n(22672),
            k = n(91377),
            P = n(88424),
            T = n(298),
            y = n(79038),
            x = n(59772),
            C = (function (e) {
              (0, u.Z)(n, e);
              var t = (0, l.Z)(n);
              function n() {
                return (0, i.Z)(this, n), t.apply(this, arguments);
              }
              return (0, c.Z)(n);
            })(n(46112).Z);
          (0, d.Z)(C, "store", (0, T.Z)({}, (0, y.Z)((0, x.Z)(C), "store", C)));
          var N,
            S = n(90129),
            I = n(79910),
            B = n(18783),
            V = n(71625),
            D = n(96158),
            L = n(49120),
            W = n(74867),
            R = n(10741),
            A = n(48813),
            _ = function () {
              var e, t, n;
              null === (e = C.getPage()) ||
                void 0 === e ||
                e
                  .navigateToAsync({ url: "/pages/12306/register/register" })
                  .catch(W.Z.commonDebugTrace),
                C.ubtTrace("TZW12306Credit_Login12306_click", {
                  PageId:
                    null === (t = C.getPage()) || void 0 === t
                      ? void 0
                      : t.pageId,
                  fromPage:
                    null === (n = C.getPage()) || void 0 === n
                      ? void 0
                      : n.fromPage,
                  clickType: "goRegisterBut",
                  Status: "1",
                  Reason: "-",
                });
            },
            M = (function () {
              var e = (0, a.Z)(
                (0, o.Z)().mark(function e() {
                  var t,
                    n,
                    r,
                    i,
                    c,
                    s,
                    u = arguments;
                  return (0, o.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = u.length > 0 && void 0 !== u[0] && u[0]),
                            (n =
                              u.length > 1 && void 0 !== u[1]
                                ? u[1]
                                : function () {}),
                            B.ZP.isLogin)
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (e.next = 5), B.ZP.doLogin();
                        case 5:
                          return (e.next = 7), q();
                        case 7:
                          if (
                            ((r = e.sent), (i = r.result), (c = r.msg), 1 === i)
                          ) {
                            e.next = 13;
                            break;
                          }
                          return C.showCommonDialog(c), e.abrupt("return");
                        case 13:
                          if (
                            ((s = (function () {
                              var e = (0, a.Z)(
                                (0, o.Z)().mark(function e() {
                                  var t, n, r, a, i, c, s, u;
                                  return (0, o.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (0, L.showLoading)(),
                                            (n = $()),
                                            (r = (0, S.Z)(n, 2)),
                                            (a = r[0]),
                                            (i = r[1]),
                                            (e.next = 4),
                                            X(a, i)
                                          );
                                        case 4:
                                          if (((e.t0 = e.sent), e.t0)) {
                                            e.next = 7;
                                            break;
                                          }
                                          e.t0 = {};
                                        case 7:
                                          if (
                                            ((c = e.t0),
                                            (s = c.success),
                                            (u = c.loginRes),
                                            s)
                                          ) {
                                            e.next = 12;
                                            break;
                                          }
                                          return e.abrupt("return");
                                        case 12:
                                          return (
                                            (0, L.hideLoading)(),
                                            (0, L.showToast)("登录成功~"),
                                            (e.next = 16),
                                            I.Z.awaitTime(1e3)
                                          );
                                        case 16:
                                          if (
                                            (console.log("loginRes===", u),
                                            C.confirmBack(u),
                                            b.eventCenter.trigger(
                                              v.n.LOGIN_12306_SUCCESS,
                                              u
                                            ),
                                            null ===
                                              (t =
                                                C.getPage()
                                                  .$Sync12306OrderSwitch) ||
                                            void 0 === t
                                              ? void 0
                                              : t.isChecked())
                                          ) {
                                            e.next = 22;
                                            break;
                                          }
                                          return e.abrupt("return");
                                        case 22:
                                          (0, D.Sf)("loginAccount");
                                        case 23:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function () {
                                return e.apply(this, arguments);
                              };
                            })()),
                            t)
                          ) {
                            e.next = 17;
                            break;
                          }
                          return (
                            C.showMultiButtonDialog({
                              content: function () {
                                return (0, A.BX)(p.View, {
                                  className: "login-rule-pop",
                                  children: [
                                    "请您仔细阅读",
                                    (0, A.tZ)(p.Text, {
                                      id: "AgBF",
                                      onClick: function () {
                                        return (0, P.vs)("default");
                                      },
                                      className: "color-primary",
                                      children: "《账户授权协议》",
                                    }),
                                    (0, A.tZ)(p.Text, {
                                      id: "orderProtocol",
                                      onClick: function () {
                                        return (0, P.vs)("t6order");
                                      },
                                      className: "color-primary",
                                      children: "《订单授权协议》",
                                    }),
                                    "，一旦点击确认，即表示您已同意受本协议约束",
                                  ],
                                });
                              },
                              title: "授权协议确认",
                              leftButtonName: "取消",
                              rightButtonName: "确认",
                              onLeftButtonClick: function () {},
                              onRightButtonClick: function () {
                                null == n || n(), s();
                              },
                            }),
                            e.abrupt("return")
                          );
                        case 17:
                          s();
                        case 18:
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
            X = (function () {
              var e = (0, a.Z)(
                (0, o.Z)().mark(function e(t, n) {
                  var r, a, i, c, s;
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              W.Z.commonDebugTrace("登录12306"),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, D.Mm)(t, n)
                            );
                          case 4:
                            return (
                              (i = e.sent),
                              W.Z.commonDebugTrace("登录12306成功"),
                              C.ubtTrace("TZW12306Credit_Login12306_click", {
                                PageId:
                                  null === (r = C.getPage()) || void 0 === r
                                    ? void 0
                                    : r.pageId,
                                fromPage:
                                  null === (a = C.getPage()) || void 0 === a
                                    ? void 0
                                    : a.fromPage,
                                clickType: "goLogin",
                                Status: "1",
                                Reason: "-",
                              }),
                              e.abrupt("return", { loginRes: i, success: !0 })
                            );
                          case 10:
                            return (
                              (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              (0, L.hideLoading)(),
                              C.ubtTrace("TZW12306Credit_Login12306_click", {
                                PageId:
                                  null === (c = C.getPage()) || void 0 === c
                                    ? void 0
                                    : c.pageId,
                                fromPage:
                                  null === (s = C.getPage()) || void 0 === s
                                    ? void 0
                                    : s.fromPage,
                                clickType: "goLogin",
                                Status: "0",
                                Reason: e.t0 || "-",
                              }),
                              e.abrupt(
                                "return",
                                j(e.t0, { UserName: t, Password: n }).catch(
                                  function (e) {
                                    W.Z.commonDebugTrace(
                                      "handle12306LoginError fail:".concat(e)
                                    );
                                  }
                                )
                              )
                            );
                          case 15:
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
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            j = (function () {
              var e = (0, a.Z)(
                (0, o.Z)().mark(function e(t, n) {
                  var r, a, i, c, s, u, l;
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (i = n.UserName),
                              (c = n.Password),
                              W.Z.commonDebugTrace(
                                JSON.stringify({
                                  step: "12306登录失败 尝试解决登录问题",
                                  info: t,
                                })
                              ),
                              (s =
                                null === (r = t.PassengerList) || void 0 === r
                                  ? void 0
                                  : r.find(function (e) {
                                      return e.isSelf;
                                    })),
                              (e.t0 = null == t ? void 0 : t.Code),
                              (e.next =
                                7 === e.t0 || 9 === e.t0
                                  ? 6
                                  : 8 === e.t0
                                  ? 11
                                  : 12 === e.t0
                                  ? 32
                                  : 100001 === e.t0
                                  ? 36
                                  : 100002 === e.t0
                                  ? 45
                                  : 48);
                            break;
                          case 6:
                            return (
                              (e.next = 8),
                              (0, P.pS)(
                                {
                                  userName: t.UserID12306 || i,
                                  mobile: t.MobilePhone || i,
                                  password: c,
                                },
                                C.getPage()
                              )
                            );
                          case 8:
                            return (
                              C.showCommonDialog("核验完成，请重新登录~"),
                              W.Z.commonDebugTrace("短信核验成功"),
                              e.abrupt("return")
                            );
                          case 11:
                            return (
                              (e.prev = 11),
                              (e.next = 14),
                              (0, P.kx)(
                                {
                                  faceInfo: {
                                    fromType: 4,
                                    userName: i,
                                    password: c,
                                    failAction: "return",
                                  },
                                },
                                C.getPage()
                              )
                            );
                          case 14:
                            (l = e.sent), (u = l.res), (e.next = 21);
                            break;
                          case 18:
                            (e.prev = 18),
                              (e.t1 = e.catch(11)),
                              W.Z.commonDebugTrace(e.t1);
                          case 21:
                            if (
                              1 ===
                              (null === (a = u) || void 0 === a
                                ? void 0
                                : a.certificationResultCode)
                            ) {
                              e.next = 29;
                              break;
                            }
                            return (
                              (e.next = 24),
                              C.showMultiButtonDialogWithPromise({
                                title: "扫脸失败",
                                content: "无法扫脸？可以尝试短信核验",
                                leftButtonName: "取消",
                                rightButtonName: "短信核验",
                              })
                            );
                          case 24:
                            if ("right" === e.sent) {
                              e.next = 27;
                              break;
                            }
                            return e.abrupt("return");
                          case 27:
                            return (
                              (e.next = 29),
                              (0, P.pS)(
                                {
                                  userName: t.UserID12306 || i,
                                  mobile: t.MobilePhone || i,
                                  password: c,
                                },
                                C.getPage()
                              )
                            );
                          case 29:
                            return (
                              C.showCommonDialog("核验完成，请重新登录~"),
                              W.Z.commonDebugTrace("核验成功"),
                              e.abrupt("return")
                            );
                          case 32:
                            return (
                              (e.next = 34),
                              C.navigateToAsync({
                                url: "/pages/12306/retrievePassWord/retrievePassWord",
                                data: { resetType: "pc" },
                              })
                            );
                          case 34:
                            return (
                              W.Z.commonDebugTrace("修改密码成功"),
                              e.abrupt("return")
                            );
                          case 36:
                            if (
                              (W.Z.commonDebugTrace("港澳台手机号登录短信核验"),
                              s)
                            ) {
                              e.next = 41;
                              break;
                            }
                            return (
                              C.showCommonDialog("登录失败，请稍后重试~"),
                              W.Z.commonDebugTrace(
                                "港澳台手机号登录短信核验失败 无用户手机号+区号信息"
                              ),
                              e.abrupt("return")
                            );
                          case 41:
                            return (
                              (e.next = 43),
                              C.navigateToAsync({
                                url: "/pages/12306/login/sendSms/sendSms",
                                ignoreError: !0,
                                data: {
                                  mobile: s.mobileNo,
                                  mobileCode: s.mobileCode,
                                  userName: t.UserID12306 || i,
                                  password: c,
                                },
                              })
                            );
                          case 43:
                            return (
                              C.showCommonDialog("核验完成，请重新登录~"),
                              e.abrupt("return")
                            );
                          case 45:
                            return (
                              W.Z.commonDebugTrace(
                                "PC短信风控:".concat(JSON.stringify(t))
                              ),
                              C.showCommonDialogWithoutButton({
                                hideTitle: !0,
                                hiddenCloseIcon: !1,
                                style: {
                                  padding: ""
                                    .concat(h().pxTransform(30), " ")
                                    .concat(h().pxTransform(30)),
                                },
                                content: function () {
                                  return (0, A.tZ)(V.Z, {
                                    accountInfo: {
                                      userName: t.UserID12306 || i,
                                      password: c,
                                      accountMobile: t.MobilePhone,
                                      accountPassportNumber: t.idNo,
                                      accountPassportType: t.idType,
                                      mobileCode:
                                        null == s ? void 0 : s.mobileCode,
                                      accountPassportName: t.passengerName,
                                    },
                                    style: { padding: 0 },
                                    callback: function (e) {
                                      var t =
                                          arguments.length > 1 &&
                                          void 0 !== arguments[1]
                                            ? arguments[1]
                                            : {},
                                        n = t.message;
                                      if (!e)
                                        return C.showCommonDialog(
                                          n || "核验失败，请稍后重试~"
                                        );
                                      C.showCommonDialog({
                                        content: "核验完成，请重新登录~",
                                        onButtonClick: function () {
                                          M(!0);
                                        },
                                      });
                                    },
                                  });
                                },
                              }),
                              e.abrupt("return")
                            );
                          case 48:
                            return (
                              C.showCommonDialog(
                                (null == t ? void 0 : t.Message) ||
                                  "登录失败，请稍后重试~"
                              ),
                              W.Z.commonDebugTrace("登录失败 无法解决"),
                              e.abrupt("return")
                            );
                          case 51:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[11, 18]]
                  );
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            q = (function () {
              var e = (0, a.Z)(
                (0, o.Z)().mark(function e() {
                  var t, n, r, a;
                  return (0, o.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = $()),
                            (n = (0, S.Z)(t, 2)),
                            (r = n[0]),
                            (a = n[1]),
                            r && a)
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return", {
                            result: 0,
                            msg: "请输入正确的账户名和密码~",
                          });
                        case 3:
                          return e.abrupt("return", {
                            result: 1,
                            msg: "请输入正确的账户名和密码~",
                          });
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
            $ = function () {
              return [
                C.getPage().$PhoneInput.value,
                C.getPage().$PassWordInput.getPassWord(),
              ];
            },
            O = (function () {
              var e = (0, a.Z)(
                (0, o.Z)().mark(function e() {
                  var t, n, r, a, i, c, s, u;
                  return (0, o.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (C.ubtTrace("TZW12306Credit_Login12306_click", {
                              PageId:
                                null === (t = C.getPage()) || void 0 === t
                                  ? void 0
                                  : t.pageId,
                              fromPage:
                                null === (n = C.getPage()) || void 0 === n
                                  ? void 0
                                  : n.fromPage,
                              clickType: "goBack",
                              Status: "1",
                              Reason: "-",
                            }),
                            "member" !==
                              (null === (r = C.getPage()) || void 0 === r
                                ? void 0
                                : r.state.skinType))
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return", !0);
                        case 3:
                          if (
                            ((a = $()),
                            (i = (0, S.Z)(a, 2)),
                            (c = i[0]),
                            (s = i[1]),
                            c && s)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (e.next = 7),
                            C.showMultiButtonDialogWithPromise({
                              title: "建议您登录12306账号",
                              content: function () {
                                return (0, A.BX)(p.View, {
                                  className: "pop-modal-bd-login",
                                  style: { padding: "12px 0" },
                                  children: [
                                    (0, A.BX)(p.View, {
                                      className: "tc",
                                      children: [
                                        "登录12306账号您可享受双通道购票服务，",
                                        (0, A.tZ)(p.Text, {
                                          className: "tblue",
                                          children: "成功率大幅提高！",
                                        }),
                                      ],
                                    }),
                                    (0, A.BX)(p.View, {
                                      className: "tc",
                                      children: [
                                        "可直接选择账号内乘车人，",
                                        (0, A.tZ)(p.Text, {
                                          className: "tblue",
                                          children: "无需再次手动添加",
                                        }),
                                        "，抢票更便捷",
                                      ],
                                    }),
                                  ],
                                });
                              },
                              leftButtonName: "确认返回",
                              rightButtonName: "现在登录",
                            })
                          );
                        case 7:
                          return (u = e.sent), e.abrupt("return", "left" === u);
                        case 9:
                          return e.abrupt("return", !0);
                        case 10:
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
            U = function () {
              var e, t;
              C.navigateToAsync({
                url: "/pages/12306/retrievePassWord/retrievePassWord",
              }).catch(W.Z.commonDebugTrace),
                C.ubtTrace("TZW12306Credit_Login12306_click", {
                  PageId:
                    null === (e = C.getPage()) || void 0 === e
                      ? void 0
                      : e.pageId,
                  fromPage:
                    null === (t = C.getPage()) || void 0 === t
                      ? void 0
                      : t.fromPage,
                  clickType: "FindPasswordForm",
                  Status: "1",
                  Reason: "-",
                });
            },
            E = (function () {
              var e = (0, a.Z)(
                (0, o.Z)().mark(function e() {
                  var t,
                    n,
                    r,
                    a,
                    i,
                    c,
                    s,
                    u,
                    l,
                    d,
                    g,
                    f,
                    m,
                    p,
                    b,
                    h,
                    v,
                    Z,
                    w,
                    k = arguments;
                  return (0, o.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = k.length > 0 && void 0 !== k[0] ? k[0] : {}),
                            (i = a.password),
                            (c = void 0 === i ? "" : i),
                            (s = a.account),
                            !(u = void 0 === s ? "" : s) || !c)
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (
                            (C.getPage().$PhoneInput.value = u),
                            C.getPage().$PassWordInput.setPassWord(c),
                            e.abrupt("return")
                          );
                        case 5:
                          if (
                            (null === (t = C.getState().my12306Model) ||
                            void 0 === t ||
                            !t.inputUserName ||
                            (null !== (n = C.getState().my12306Model) &&
                              void 0 !== n &&
                              n.inputUserName.includes("****"))
                              ? (C.getPage().$PhoneInput.value =
                                  null === (d = C.getState().my12306Model) ||
                                  void 0 === d
                                    ? void 0
                                    : d.login12306Name)
                              : (C.getPage().$PhoneInput.value =
                                  null === (l = C.getState().my12306Model) ||
                                  void 0 === l
                                    ? void 0
                                    : l.inputUserName),
                            C.getPage().$PassWordInput.setPassWord(
                              null === (r = C.getState().my12306Model) ||
                                void 0 === r
                                ? void 0
                                : r.login12306Pas
                            ),
                            !C.getPage().$PhoneInput.value)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return");
                        case 9:
                          return (e.next = 11), (0, R.USE)({});
                        case 11:
                          (g = e.sent),
                            (f = g.accounts),
                            (m = void 0 === f ? [] : f),
                            (p = g.resultCode),
                            (b = void 0 === p ? -1 : p),
                            (h = g.accountItems),
                            (v = void 0 === h ? [] : h),
                            1 === b &&
                              Array.isArray(m) &&
                              m[0] &&
                              ((w = m[0]),
                              (C.getPage().$PhoneInput.value =
                                (null ===
                                  (Z = v.find(function (e) {
                                    return e.userName === w;
                                  })) || void 0 === Z
                                  ? void 0
                                  : Z.mobile) || w));
                        case 14:
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
            H = (function () {
              var e = (0, a.Z)(
                (0, o.Z)().mark(function e(t) {
                  return (0, o.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), B.ZP.isLogin)) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 4), B.ZP.doLogin();
                          case 4:
                            if (t.data) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            E({
                              password: t.data.password,
                              account: t.data.account,
                            }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log("err", e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            F = n(90620),
            G = n(74417),
            J = n(50181),
            z = n(73922),
            Y = n(74921),
            K = ["onToggle", "checked"],
            Q = ["defaultChecked"],
            ee = function (e) {
              var t = e.onToggle,
                n = e.checked,
                r = (0, Y.Z)(e, K);
              return (0, A.tZ)(
                p.View,
                (0, T.Z)(
                  (0, T.Z)(
                    { className: "switch-ui ".concat(n ? "checked" : "") },
                    r
                  ),
                  {},
                  { onClick: t }
                )
              );
            },
            te = (0, g.forwardRef)(function (e, t) {
              var n = e.defaultChecked,
                r = (0, Y.Z)(e, Q),
                o = (0, g.useState)(!!n),
                a = (0, S.Z)(o, 2),
                i = a[0],
                c = a[1];
              return (
                (0, g.useImperativeHandle)(t, function () {
                  return {
                    isChecked: function () {
                      return i;
                    },
                  };
                }),
                (0, A.BX)(
                  p.View,
                  (0, T.Z)(
                    (0, T.Z)({ className: "flex t6-sync-switch" }, r),
                    {},
                    {
                      children: [
                        (0, A.tZ)(p.View, {
                          className: "flex-1 title",
                          style: { textAlign: "left" },
                          children: "同步铁路系统行程",
                        }),
                        (0, A.tZ)(ee, {
                          onToggle: function () {
                            c(!i),
                              Z.WG.setAttr(
                                "is12306OrderSyncDefaultCheckedInLoginPage",
                                !i
                              );
                          },
                          checked: i,
                        }),
                      ],
                    }
                  )
                )
              );
            }),
            ne = "normal",
            re = "member",
            oe =
              (0, m.h)(!1, { usePageWrapper: !0 })(
                (N = (function (e) {
                  (0, u.Z)(n, e);
                  var t = (0, l.Z)(n);
                  function n(e) {
                    var r, o;
                    (0, i.Z)(this, n),
                      (o = t.call(this, e)),
                      (0, d.Z)((0, s.Z)(o), "flexMode", !0),
                      (0, d.Z)((0, s.Z)(o), "renderLoginBodyView", function () {
                        return o.state.skinType === re
                          ? (0, A.tZ)(J.Z, { children: o.renderInputView() })
                          : (0, A.tZ)(p.View, {
                              className: "white-box login-box",
                              children: o.renderInputView(),
                            });
                      }),
                      (0, d.Z)((0, s.Z)(o), "renderInputView", function () {
                        var e = o.state,
                          t = e.isTipsSelected,
                          n = e.isHideRegister,
                          r = e.skinType,
                          a = e.notice,
                          i = e.is12306OrderSyncDefaultCheckedInLoginPage,
                          c =
                            r === re ? "登录12306账号查积分" : "登录12306账号";
                        return (0, A.BX)(A.HY, {
                          children: [
                            a &&
                              (0, A.BX)(p.View, {
                                className: "login-notice flex",
                                children: [
                                  (0, A.tZ)(p.View, {
                                    className: "ifont-notices iconfont",
                                  }),
                                  (0, A.tZ)(p.View, { children: a }),
                                ],
                              }),
                            (0, A.BX)(p.View, {
                              className: "login-hd",
                              children: [
                                (0, A.tZ)(p.Image, {
                                  className: "i12306-12306-icon",
                                  src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/12306@3x.png",
                                }),
                                (0, A.BX)(p.View, {
                                  className: "cont",
                                  children: [
                                    (0, A.tZ)(p.View, {
                                      className: "tit",
                                      children: c,
                                    }),
                                    o.renderTitleDescView(),
                                  ],
                                }),
                              ],
                            }),
                            (0, A.BX)(p.View, {
                              className: "login-bd",
                              children: [
                                (0, A.tZ)(p.View, {
                                  className: "item",
                                  children: (0, A.tZ)(p.View, {
                                    className: "cont",
                                    children: (0, A.tZ)(p.Input, {
                                      className: "input-txt",
                                      ref: function (e) {
                                        o.$PhoneInput = e || o.$PhoneInput;
                                      },
                                      type: "text",
                                      placeholder: "请输入登录手机号",
                                      placeholderStyle: "color:#cccccc",
                                    }),
                                  }),
                                }),
                                (0, A.tZ)(p.View, {
                                  className: "item",
                                  children: (0, A.tZ)(F.Z, {
                                    className: "cont",
                                    placeholder: "请输入账号密码",
                                    placeholderStyle: "color:#cccccc",
                                    onRef: function (e) {
                                      o.$PassWordInput = e;
                                    },
                                  }),
                                }),
                                (0, A.BX)(p.View, {
                                  className: "info",
                                  children: [
                                    (0, A.tZ)(p.View, {
                                      className: "radio ".concat(
                                        t ? "selected" : "unselected"
                                      ),
                                      id: "AgBA",
                                      onClick: function () {
                                        return o.setState({
                                          isTipsSelected: !t,
                                        });
                                      },
                                    }),
                                    (0, A.BX)(p.View, {
                                      className: "cont",
                                      children: [
                                        "阅读同意",
                                        (0, A.tZ)(p.Text, {
                                          className: "tblue",
                                          id: "AgBB",
                                          onClick: function () {
                                            (0, P.vs)("default");
                                          },
                                          children: "账户授权协议",
                                        }),
                                        "、",
                                        (0, A.tZ)(p.Text, {
                                          className: "tblue",
                                          onClick: function () {
                                            (0, P.vs)("t6order");
                                          },
                                          children: "订单授权协议",
                                        }),
                                      ],
                                    }),
                                    (0, A.tZ)(p.View, {
                                      className: "rbox",
                                      id: "AgBC",
                                      onClick: U,
                                      children: "找回密码",
                                    }),
                                  ],
                                }),
                                (0, A.BX)(p.View, {
                                  className: "btn",
                                  children: [
                                    (0, A.tZ)(p.View, {
                                      className: "btn-blue btn-big",
                                      id: "AgBD",
                                      onClick: function () {
                                        return M(t, function () {
                                          return o.setState({
                                            isTipsSelected: !0,
                                          });
                                        });
                                      },
                                      children: "登录12306",
                                    }),
                                    !n &&
                                      (0, A.BX)(p.View, {
                                        className: "btn-line btn-big",
                                        id: "AgBE",
                                        onClick: _,
                                        children: [
                                          "极速注册12306账号",
                                          (0, A.tZ)(p.View, {
                                            className: "desc",
                                            children: "1分钟完成注册",
                                          }),
                                        ],
                                      }),
                                    (0, A.tZ)(te, {
                                      style: {
                                        marginTop: (0, b.pxTransform)(24),
                                      },
                                      ref: function (e) {
                                        o.$Sync12306OrderSwitch = e;
                                      },
                                      defaultChecked: i,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, A.BX)(p.View, {
                              className: "promote-word",
                              children: [
                                (0, A.tZ)(p.View, { children: "出票快捷" }),
                                (0, A.tZ)(p.View, { children: "退改无忧" }),
                                (0, A.tZ)(p.View, { children: "积分兑换" }),
                              ],
                            }),
                          ],
                        });
                      }),
                      (o.store = C.create((0, s.Z)(o)).store),
                      (o.pageId = "10650085958"),
                      (o.pageRootClassName = "train-12306-login-page"),
                      (o.onInterceptBackAsync = O);
                    var a =
                      null === (r = Z.WG.get()) || void 0 === r
                        ? void 0
                        : r.is12306OrderSyncDefaultCheckedInLoginPage;
                    return (
                      (o.state = {
                        isTipsSelected: !1,
                        isHideRegister: !1,
                        skinType: ne,
                        notice: "",
                        is12306OrderSyncDefaultCheckedInLoginPage:
                          void 0 !== a
                            ? a
                            : (0, k.qj)(
                                "is12306OrderSyncDefaultCheckedInLoginPage"
                              ),
                      }),
                      o
                    );
                  }
                  return (
                    (0, c.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, a.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, n, r;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        (r =
                                          null ===
                                            (t = (0, b.getCurrentInstance)()) ||
                                          void 0 === t ||
                                          null === (n = t.router) ||
                                          void 0 === n
                                            ? void 0
                                            : n.params),
                                          (this.fromPage = r.fromPage || "x"),
                                          this.ubtTrace(
                                            "TZW12306Credit_Login12306_exposure",
                                            {
                                              PageId: this.pageId,
                                              fromPage: this.fromPage,
                                            }
                                          ),
                                          this.setState({
                                            skinType: r.skinType,
                                          }),
                                          r.isHideRegister &&
                                            this.setState({
                                              isHideRegister: !0,
                                            }),
                                          r.notice &&
                                            this.setState({ notice: r.notice }),
                                          b.eventCenter.on(
                                            v.n.RETRIEVE_PASSWORD_SUCCESS,
                                            function (e) {
                                              console.log(
                                                "receive pass change",
                                                e
                                              ),
                                                E(e);
                                            }
                                          ),
                                          b.eventCenter.on(
                                            v.n.REGISTER_12306_SUCCESS,
                                            function (e) {
                                              console.log(
                                                "receive register success",
                                                e
                                              ),
                                                E(e);
                                            }
                                          ),
                                          H(r);
                                      case 9:
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
                        key: "renderTitleView",
                        value: function () {
                          return this.state.skinType == re
                            ? "免费兑车票"
                            : null;
                        },
                      },
                      {
                        key: "renderBackgroundView",
                        value: function () {
                          return this.state.skinType == re
                            ? (0, A.tZ)(p.View, {
                                style: {
                                  position: "absolute",
                                  left: 0,
                                  right: 0,
                                  top: 0,
                                  bottom: 0,
                                  backgroundColor: "#F2F7FA",
                                },
                                children: (0, A.tZ)(z.Z, {}),
                              })
                            : null;
                        },
                      },
                      {
                        key: "renderTitleDescView",
                        value: function () {
                          return this.state.skinType == re
                            ? null
                            : (0, A.tZ)(p.View, {
                                className: "txt",
                                children: "铁路局规定购票需实名制",
                              });
                        },
                      },
                      {
                        key: "renderLoginHeaderView",
                        value: function () {
                          return this.state.skinType == re
                            ? (0, A.tZ)(G.Z, {})
                            : null;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, A.BX)(f.zt, {
                            store: this.store,
                            children: [
                              this.renderLoginHeaderView(),
                              this.renderLoginBodyView(),
                              (0, A.tZ)(w.Z, {}),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(g.default.Component))
              ) || N;
          Page(
            (0, r.createPageConfig)(
              oe,
              "pages/12306/login/login",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "登录12306",
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
            37013, 52593, 74731, 10560, 11748, 83067, 60579, 50127, 77585,
            31472, 85379, 43412, 5207, 36250, 80391, 72407, 3993, 56474, 18210,
            56562, 77294, 301, 45279, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(11733);
          }
        ),
          e.O();
      },
    ]);
})();
