!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [11748],
    {
      13871: function (e, n, l) {
        var s = l(79301),
          i = l(298),
          o = l(95308),
          c = l(52500),
          a = l(79792),
          t = l(71515),
          r = l(18783),
          u = l(49120),
          m = l(97939),
          d = l(94190),
          h = l(88424),
          w = l(90620),
          p = l(34405),
          b = l(48813);
        n.Z = function () {
          var e,
            n,
            l =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            N = l.currentPage,
            f = l.faceCallbackData,
            v = l.cheackFacePollingKey,
            Z = l.onSuccess,
            g = l.logOutOpts,
            V = l.onCancel,
            x = { $MobileComplete: null, $PassWord1: null, $PassWord2: null };
          (0, c.useEffect)(
            function () {
              !(function () {
                var e = r.ZP.userName,
                  n = null == f ? void 0 : f.mobile_no;
                e &&
                  n &&
                  (e.slice(0, 3) != n.slice(0, 3) ||
                    e.slice(7, 11) != n.slice(7, 11) ||
                    (x.$MobileComplete.value = e.slice(3, 7)));
              })();
            },
            [null == f ? void 0 : f.mobile_no]
          );
          var P = function () {
              var e = [
                  x.$MobileComplete.value,
                  x.$PassWord1.getPassWord(),
                  x.$PassWord2.getPassWord(),
                ],
                n = e[0],
                l = e[1],
                s = e[2];
              if (!n) throw { message: "请补全手机号", code: -22 };
              if (l !== s)
                throw { message: "两次输入密码不一致，请修改", code: -22 };
              if (l.length < 6) throw { message: "密码不能少于6位", code: -22 };
              if (!p.Z.combilePswCheck(l) || !p.Z.combilePswCheck(s))
                throw {
                  message: "密码只能为字母、数字或下划线中两个及以上的组合",
                  code: -22,
                };
              return { mobileComplete: n, newPsw1: l, newPsw2: s };
            },
            B = (function () {
              var e = (0, o.Z)(
                (0, s.Z)().mark(function e() {
                  var n, l, o, c, a, t, r, d, h, w;
                  return (0, s.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (a = P()),
                              (t = a.mobileComplete),
                              (r = a.newPsw1),
                              (d = a.newPsw2),
                              (h = {
                                userName: f.user_name,
                                newPassword: r,
                                confirmPassword: d,
                                mobileNo: ""
                                  .concat(
                                    null == f ||
                                      null === (n = f.mobile_no) ||
                                      void 0 === n
                                      ? void 0
                                      : n.slice(0, 3)
                                  )
                                  .concat(t)
                                  .concat(
                                    null == f ||
                                      null === (l = f.mobile_no) ||
                                      void 0 === l
                                      ? void 0
                                      : l.slice(-4)
                                  ),
                                pollingKey: v,
                                confirmType: 0,
                                secretStr: decodeURIComponent(f.secret_str),
                              }),
                              (0, u.showLoading)(),
                              (e.next = 6),
                              (0, m.Lf)(h)
                            );
                          case 6:
                            (w = e.sent),
                              (0, u.hideLoading)(),
                              null == Z ||
                                Z(
                                  (0, i.Z)(
                                    (0, i.Z)({}, w),
                                    {},
                                    {
                                      _userName: ""
                                        .concat(
                                          null == f ||
                                            null === (o = f.mobile_no) ||
                                            void 0 === o
                                            ? void 0
                                            : o.slice(0, 3)
                                        )
                                        .concat(t)
                                        .concat(
                                          null == f ||
                                            null === (c = f.mobile_no) ||
                                            void 0 === c
                                            ? void 0
                                            : c.slice(-4)
                                        ),
                                      _password: r,
                                    }
                                  )
                                ),
                              (e.next = 16);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(0)),
                              console.log("err", e.t0),
                              (0, u.hideLoading)(),
                              (0, u.showToast)(
                                e.t0.resultMessage ||
                                  e.t0.message ||
                                  "无法重置密码~"
                              );
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            k = (function () {
              var e = (0, o.Z)(
                (0, s.Z)().mark(function e() {
                  return (0, s.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (0, h.kx)(
                                {
                                  faceInfo: {
                                    fromType: 3,
                                    certificationInfo: JSON.stringify({
                                      name: encodeURIComponent(g.userName),
                                      passportType: g.realType,
                                      passportNumber: g.idNumber,
                                      mobile: g.mobile,
                                    }),
                                  },
                                },
                                N
                              )
                            );
                          case 3:
                            d.WG.removeAsync("bind12306"),
                              (0, u.showToast)("注销成功~"),
                              null == V || V({ isLogout: !0 }),
                              (e.next = 10);
                            break;
                          case 8:
                            (e.prev = 8), (e.t0 = e.catch(0));
                          case 10:
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
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, b.BX)(t.View, {
            className: "train-12306-retreveStep2 ".concat(a.default.zxTyStr),
            children: [
              (0, b.BX)(t.View, {
                className: "retrieve-box",
                children: [
                  (0, b.tZ)(t.View, {
                    className: "book-tips",
                    children:
                      "为保障账户安全，请补全账户中的手机号码；补全成功后即可找回密码",
                  }),
                  (0, b.BX)(t.View, {
                    className: "retrieve-bd",
                    children: [
                      (0, b.BX)(t.View, {
                        className: "item",
                        children: [
                          (0, b.tZ)(t.Text, { className: "em", children: "1" }),
                          (0, b.tZ)(t.View, {
                            className: "h5",
                            children: "补全账户手机号",
                          }),
                          (0, b.BX)(t.View, {
                            className: "p",
                            children: [
                              "用户名： ",
                              null == f ? void 0 : f.user_name,
                            ],
                          }),
                          (0, b.BX)(t.View, {
                            className: "phone-num",
                            children: [
                              null == f ||
                              null === (e = f.mobile_no) ||
                              void 0 === e
                                ? void 0
                                : e.slice(0, 3),
                              " - ",
                              (0, b.tZ)(t.Input, {
                                type: "num",
                                ref: function (e) {
                                  return (x.$MobileComplete = e);
                                },
                                className: "input-phonenum",
                                maxlength: 4,
                              }),
                              " - ",
                              null == f ||
                              null === (n = f.mobile_no) ||
                              void 0 === n
                                ? void 0
                                : n.slice(-4),
                            ],
                          }),
                        ],
                      }),
                      (0, b.BX)(t.View, {
                        className: "item",
                        children: [
                          (0, b.tZ)(t.Text, { className: "em", children: "2" }),
                          (0, b.tZ)(t.View, {
                            className: "h5",
                            children: "重置密码",
                          }),
                          (0, b.BX)(t.View, {
                            className: "password-list",
                            children: [
                              (0, b.BX)(t.View, {
                                className: "li",
                                children: [
                                  (0, b.tZ)(t.View, {
                                    className: "label",
                                    children: "新密码",
                                  }),
                                  (0, b.tZ)(t.View, {
                                    className: "cont",
                                    children: (0, b.tZ)(w.Z, {
                                      placeholder: "不少于6位，字母+数字组合",
                                      className: "input-txt",
                                      onRef: function (e) {
                                        return (x.$PassWord1 = e);
                                      },
                                    }),
                                  }),
                                ],
                              }),
                              (0, b.BX)(t.View, {
                                className: "li",
                                children: [
                                  (0, b.tZ)(t.View, {
                                    className: "label",
                                    children: "密码确认",
                                  }),
                                  (0, b.tZ)(t.View, {
                                    className: "cont",
                                    children: (0, b.tZ)(w.Z, {
                                      placeholder: "再次输入密码",
                                      className: "input-txt",
                                      onRef: function (e) {
                                        return (x.$PassWord2 = e);
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, b.tZ)(t.View, {
                    className: "btn-box",
                    children: (0, b.tZ)(t.Button, {
                      className: "btn-blue btn-big",
                      id: "AgAM",
                      onClick: B,
                      children: "提交",
                    }),
                  }),
                ],
              }),
              !!g &&
                (0, b.BX)(t.View, {
                  children: [
                    (0, b.tZ)(t.View, {
                      className: "no-phone-hd",
                      children: "无法补全手机号？您还可以选择",
                    }),
                    (0, b.BX)(t.View, {
                      className: "white-box no-phone-bd",
                      children: [
                        (0, b.tZ)(t.Text, { className: "icon-power" }),
                        (0, b.BX)(t.View, {
                          className: "cont",
                          children: [
                            (0, b.tZ)(t.View, {
                              className: "h4",
                              children: "放弃补全手机，去注销",
                            }),
                            (0, b.tZ)(t.View, {
                              className: "p",
                              children: "注销成功后可重新注册",
                            }),
                          ],
                        }),
                        (0, b.tZ)(t.Button, {
                          className: "btn-blue btn-logout",
                          id: "AgAN",
                          onClick: k,
                          children: "注销账号",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        };
      },
    },
  ]);
})();
