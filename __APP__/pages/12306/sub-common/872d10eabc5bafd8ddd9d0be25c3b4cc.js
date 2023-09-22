!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [3993],
    {
      71625: function (e, r, a) {
        var t = a(79301),
          n = a(95308),
          c = a(52500),
          o = a(71515),
          s = a(34229),
          i = a(28832),
          l = a(10741),
          u = a(52740),
          d = a(21294),
          _ = a(49120),
          p = a(96158),
          h = a(49793),
          w = a(64959),
          m = a(48813);
        r.Z = function (e) {
          var r,
            a = e.accountInfo,
            v = e.callback,
            f = e.style;
          if (!a) return null;
          var N = c.default.useRef(null),
            b = c.default.useRef(null),
            Z =
              (null == a ||
              null === (r = a.accountPassportNumber) ||
              void 0 === r
                ? void 0
                : r.slice(-4).replace(/\*/g, "")) || "",
            g = "请核验".concat(
              a.accountPassportName
                ? '<font color="#198CFF">'.concat(
                    a.accountPassportName,
                    "</font>"
                  )
                : "您",
              "的12306账号信息"
            ),
            C = (function () {
              var e = (0, n.Z)(
                (0, t.Z)().mark(function e() {
                  var r, n, c;
                  return (0, t.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              !(
                                (n =
                                  (null === (r = N.current) || void 0 === r
                                    ? void 0
                                    : r.getValue()) || "").length < 4
                              )
                            ) {
                              e.next = 4;
                              break;
                            }
                            return (
                              (0, _.showToast)("请先补全证件号后四位"),
                              e.abrupt("return", { getCode: !1 })
                            );
                          case 4:
                            return (
                              (c = {
                                type: u.j3.PC_LOGIN_ACCOUNT,
                                userName: a.userName || "",
                                password: a.password
                                  ? d.Z.tripleDESEncrypt(a.password)
                                  : "",
                                idCardType:
                                  null == a ? void 0 : a.accountPassportType,
                                idCardNo: n,
                                mobileNo: a.accountMobile || "",
                                mobileCode: a.mobileCode || "86",
                              }),
                              (0, _.showLoading)("正在发送验证码"),
                              (e.prev = 6),
                              (e.next = 9),
                              (0, i.x2)(c)
                            );
                          case 9:
                            e.next = 16;
                            break;
                          case 11:
                            return (
                              (e.prev = 11),
                              (e.t0 = e.catch(6)),
                              (0, _.hideLoading)(),
                              (0, _.showToast)(
                                e.t0.resultMessage ||
                                  "验证码发送失败，请稍后重试"
                              ),
                              e.abrupt("return", { getCode: !1 })
                            );
                          case 16:
                            return (
                              (0, _.hideLoading)(),
                              e.abrupt("return", { getCode: !0 })
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 11]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            V = (function () {
              var e = (0, n.Z)(
                (0, t.Z)().mark(function e() {
                  var r, n, c, o;
                  return (0, t.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((c =
                                (null === (r = b.current) || void 0 === r
                                  ? void 0
                                  : r.getValue()) || ""),
                              !(
                                (
                                  (null === (n = N.current) || void 0 === n
                                    ? void 0
                                    : n.getValue()) || ""
                                ).length < 4
                              ))
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (0, _.showToast)("请先补全证件号后四位"),
                              e.abrupt("return", { getCode: !1 })
                            );
                          case 5:
                            if (c) {
                              e.next = 8;
                              break;
                            }
                            return (
                              (0, _.showToast)("请先输入验证码"),
                              e.abrupt("return")
                            );
                          case 8:
                            return (
                              (0, _.showLoading)(),
                              (e.prev = 9),
                              (e.next = 12),
                              (0, p.er)(
                                {
                                  userName:
                                    (null == a ? void 0 : a.userName) || "",
                                  verificationCode: c || "",
                                  idNo:
                                    (null === (o = N.current) || void 0 === o
                                      ? void 0
                                      : o.getValue()) || "",
                                  mobileNo:
                                    (null == a ? void 0 : a.accountMobile) ||
                                    "",
                                  password: a.password
                                    ? d.Z.tripleDESEncrypt(a.password)
                                    : "",
                                  type: u.Lm.PC_MSG_LOGIN,
                                  mobileCode:
                                    (null == a ? void 0 : a.mobileCode) || "86",
                                },
                                l.Zck
                              )
                            );
                          case 12:
                            (0, _.hideLoading)(), v(!0, {}), (e.next = 20);
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(9)),
                              (0, _.hideLoading)(),
                              v(!1, { message: e.t0 });
                          case 20:
                            return (e.prev = 20), e.finish(20);
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[9, 16, 20, 22]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, m.BX)(o.View, {
            className: " _Vb _Oa _Mc",
            style: f,
            children: [
              (0, m.tZ)(s.ZtRichText, {
                nodes: g,
                className: " _Xb _Nc _Oc _o",
              }),
              (0, m.BX)(o.View, {
                className: " _Pc",
                children: [
                  (0, m.BX)(o.View, {
                    className: " _i _n _l _Qc",
                    children: [
                      (0, m.BX)(o.View, {
                        className: " _Rc _i _Sc _l _jb",
                        children: [
                          (0, m.tZ)(o.View, {
                            className: " _oc _Tc _Uc _U",
                            children: "证件号",
                          }),
                          (0, m.tZ)(o.View, {
                            className: " _Ma _Vc _Uc",
                            children: "后四位",
                          }),
                        ],
                      }),
                      (0, m.tZ)(o.View, {
                        className: " _j",
                        children: (0, m.tZ)(h.Z, { useIdCode: Z, ref: N }),
                      }),
                    ],
                  }),
                  (0, m.BX)(o.View, {
                    className: " _i _n _l _Qc",
                    children: [
                      (0, m.tZ)(o.View, {
                        className: " _Rc _i _Sc _l _jb",
                        children: (0, m.tZ)(o.View, {
                          className: " _oc _Tc _Uc _U",
                          children: "验证码",
                        }),
                      }),
                      (0, m.tZ)(o.View, {
                        className: " _j",
                        children: (0, m.tZ)(w.Z, { onGetCodeAsync: C, ref: b }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.tZ)(o.View, {
                className: " _qb _Wc _Uc _Xc _w _Xa _Gc _o _Yc",
                onClick: V,
                children: "开始核验",
              }),
            ],
          });
        };
      },
    },
  ]);
})();
