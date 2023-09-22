!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/9cf383cff2ba8ce0456965e69ba11b63.js"),
    require("../sub-common/3edb2b96731d94d93a96699eab306b50.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [98937],
      {
        48702: function (e, t, r) {
          var n = r(32180),
            a = r(57042),
            i = r(24460),
            s = r(81876),
            o = r(21867),
            c = r(86066),
            u = r(52500),
            l = r(92954),
            m = r(81957),
            f = r(79792),
            d = r(65573),
            g = r(79301),
            b = r(95308),
            h = r(45023),
            p = r(79038),
            v = r(59772),
            _ = r(298),
            Z = r(96158),
            w = r(21294),
            S = r(49120),
            k = r(61537),
            T = {
              state: { isShowFaceRegisterView: !1, memberStatusInfo: null },
              reducers: {
                setIsShowFaceRegisterView: function (e, t) {
                  return (0, _.Z)(
                    (0, _.Z)({}, e),
                    {},
                    { isShowFaceRegisterView: !!t }
                  );
                },
                updateMemberStatusInfo: function (e, t) {
                  return (0, _.Z)((0, _.Z)({}, e), {}, { memberStatusInfo: t });
                },
              },
            },
            y = (function (e) {
              (0, o.Z)(r, e);
              var t = (0, c.Z)(r);
              function r() {
                return (0, a.Z)(this, r), t.apply(this, arguments);
              }
              return (
                (0, i.Z)(r, null, [
                  {
                    key: "isMemberBeActived",
                    value: function () {
                      var e, t;
                      return (
                        (null === (e = this.getState().memberModel) ||
                        void 0 === e ||
                        null === (t = e.memberStatusInfo) ||
                        void 0 === t
                          ? void 0
                          : t.member_status) == k.Fn.NO_ACTIVITY
                      );
                    },
                  },
                  {
                    key: "isMember",
                    value: function () {
                      var e, t;
                      return (
                        (null === (e = this.getState().memberModel) ||
                        void 0 === e ||
                        null === (t = e.memberStatusInfo) ||
                        void 0 === t
                          ? void 0
                          : t.member_status) == k.Fn.NORMAL_STATUS
                      );
                    },
                  },
                  {
                    key: "refreshMemberStatus",
                    value: (function () {
                      var e = (0, b.Z)(
                        (0, g.Z)().mark(function e() {
                          var t, r;
                          return (0, g.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2), this.checkLoginStatus()
                                    );
                                  case 2:
                                    if (((t = e.sent), 1 === t.code)) {
                                      e.next = 6;
                                      break;
                                    }
                                    throw "未登录12306";
                                  case 6:
                                    return (
                                      (e.next = 8),
                                      (0, Z.Kd)({
                                        userName:
                                          this.getState().my12306Model
                                            .userName12306 ||
                                          this.getState().my12306Model
                                            .login12306Name,
                                        password: w.Z.tripleDESEncrypt(
                                          this.getState().my12306Model
                                            .login12306Pas
                                        ),
                                      })
                                    );
                                  case 8:
                                    (r = e.sent),
                                      this.getDispatch().memberModel.updateMemberStatusInfo(
                                        { member_status: r.member_status }
                                      );
                                  case 10:
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
                    key: "getMemberStatusForTrace",
                    value: function () {
                      var e, t, r;
                      return (
                        (null === (e = this.getState().memberModel) ||
                        void 0 === e ||
                        null === (t = e.memberStatusInfo) ||
                        void 0 === t
                          ? void 0
                          : t.member_status) ||
                        (null === (r = this.getState().my12306Model) ||
                        void 0 === r
                          ? void 0
                          : r.memberStatus12306)
                      );
                    },
                  },
                  {
                    key: "refreshMemberStatusWithLoading",
                    value: (function () {
                      var e = (0, b.Z)(
                        (0, g.Z)().mark(function e() {
                          return (0, g.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (0, S.showLoading)(),
                                      (e.next = 3),
                                      this.refreshMemberStatus()
                                    );
                                  case 3:
                                    (0, S.hideLoading)();
                                  case 4:
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
                ]),
                r
              );
            })(r(46112).Z);
          (0, h.Z)(
            y,
            "store",
            (0, _.Z)((0, _.Z)({}, (0, p.Z)((0, v.Z)(y), "store", y)), {
              models: (0, _.Z)(
                (0, _.Z)({}, (0, p.Z)((0, v.Z)(y), "store", y).models || {}),
                {},
                { memberModel: T }
              ),
            })
          );
          var M,
            x = r(74921),
            B = r(71515),
            N = r(45742),
            R = r(79910),
            C = r(74867),
            z = r(18783),
            P = r(22276),
            L = r(90129),
            I = r(48813),
            V = function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = t.onRef,
                n = t.onSuccess,
                a = t.onFail,
                i = t.onFace,
                s = "12306积分会员激活",
                o = "密码验证失败",
                c = "请输入您历史设置的6位数字交易密码，重新激活无需刷脸",
                l = "请输入正确的6位数字交易密码",
                m = (0, u.useState)(""),
                f = (0, L.Z)(m, 2),
                d = f[0],
                h = f[1],
                p = (0, u.useState)(!0),
                v = (0, L.Z)(p, 2),
                _ = v[0],
                Z = v[1],
                w = (0, u.useState)(c),
                k = (0, L.Z)(w, 2),
                T = k[0],
                y = k[1],
                M = (0, u.useState)(s),
                x = (0, L.Z)(M, 2),
                N = x[0],
                R = x[1],
                C = function () {
                  var t, r;
                  null === (t = e) ||
                    void 0 === t ||
                    null === (r = t.focus) ||
                    void 0 === r ||
                    r.call(t);
                },
                z = (function () {
                  var e = (0, b.Z)(
                    (0, g.Z)().mark(function e() {
                      var t, r;
                      return (0, g.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (6 === d.length) {
                                e.next = 3;
                                break;
                              }
                              return (
                                (0, S.showToast)("请输入正确的交易密码~"),
                                e.abrupt("return")
                              );
                            case 3:
                              return (0, S.showLoading)(), (e.next = 6), F(d);
                            case 6:
                              if (
                                ((t = e.sent),
                                (0, S.hideLoading)(),
                                1 === t.code)
                              ) {
                                e.next = 12;
                                break;
                              }
                              return (
                                null !== (r = t.message) &&
                                void 0 !== r &&
                                r.includes("消费密码不正确")
                                  ? (y(l),
                                    R(o),
                                    (0, S.showToast)("密码错误，请重试~"),
                                    h(""),
                                    C())
                                  : (0, S.showToast)(
                                      t.message || "注册失败, 请稍候重试~"
                                    ),
                                null == a || a(t),
                                e.abrupt("return")
                              );
                            case 12:
                              null == n || n(t);
                            case 13:
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
                V = function (e) {
                  h(e.detail.value);
                };
              return (
                (0, u.useImperativeHandle)(r, function () {
                  return { setEnableInput: Z, focus: C };
                }),
                (0, I.BX)(B.View, {
                  className: "consume-pwd-inputer-view",
                  children: [
                    (0, I.tZ)(B.View, { className: "title", children: N }),
                    T && (0, I.tZ)(B.View, { className: "tips", children: T }),
                    (0, I.BX)(B.View, {
                      className: "pass-input",
                      children: [
                        (0, P.Z)(new Array(6)).map(function (e, t) {
                          return (0,
                          I.tZ)(B.View, { className: "inner-input-show", children: d[t] }, t);
                        }),
                        (0, I.tZ)(B.Input, {
                          ref: function (t) {
                            return (e = t);
                          },
                          className: "inner-input",
                          type: "password",
                          maxlength: 6,
                          cursorSpacing: 50,
                          onInput: V,
                          value: d,
                          disabled: !_,
                        }),
                      ],
                    }),
                    (0, I.tZ)(B.View, {
                      onClick: i,
                      className: "forget-txt",
                      children: "忘记密码？刷脸激活",
                    }),
                    (0, I.tZ)(B.View, {
                      className: "btn-sure",
                      id: "AgBL",
                      onClick: z,
                      children: "确定",
                    }),
                  ],
                })
              );
            },
            D = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.type,
                r = void 0 === t ? 0 : t;
              return (0, I.BX)(B.View, {
                className: "register-12306-member-success-pop",
                children: [
                  1 === r &&
                    (0, I.BX)(B.View, {
                      className: "content",
                      style: { padding: "15px 20px 20px" },
                      children: [
                        "温馨提示：已为您自动设置了畅行会员消费",
                        (0, I.tZ)(B.Text, {
                          className: "active",
                          style: { fontWeight: "bold" },
                          children: "密码：123456",
                        }),
                        (0, I.tZ)(B.View, {
                          className: "pop-save",
                          children: "截图保存，消费密码不丢失",
                        }),
                      ],
                    }),
                  1 !== r &&
                    (0, I.BX)(B.View, {
                      className: "content",
                      children: [
                        "您已注册会员, ",
                        (0, I.tZ)(B.Text, {
                          style: { fontWeight: "bold", color: "#222222" },
                          children: "初始密码: 123456",
                        }),
                        "。仅需最后一步即可激活成功～",
                      ],
                    }),
                ],
              });
            },
            A = (function () {
              var e = (0, b.Z)(
                (0, g.Z)().mark(function e() {
                  var t, r, n, a, i, s;
                  return (0, g.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            "123456",
                            (e.next = 3),
                            (0, Z.$n)({
                              userName:
                                (null === (t = y.getState().my12306Model) ||
                                void 0 === t
                                  ? void 0
                                  : t.userName12306) ||
                                (null === (r = y.getState().my12306Model) ||
                                void 0 === r
                                  ? void 0
                                  : r.login12306Name),
                              password: w.Z.tripleDESEncrypt(
                                (null === (n = y.getState().my12306Model) ||
                                void 0 === n
                                  ? void 0
                                  : n.login12306Pas) || ""
                              ),
                              consumePwd: "123456",
                            })
                          );
                        case 3:
                          if (
                            ((a = e.sent),
                            (i = a.code),
                            (s = a.message),
                            1 === i)
                          ) {
                            e.next = 10;
                            break;
                          }
                          if (null != s && s.includes("消费密码不正确")) {
                            e.next = 9;
                            break;
                          }
                          throw {
                            code: -1,
                            message: s || "注册失败, 请稍候重试~",
                          };
                        case 9:
                          return e.abrupt("return", 0);
                        case 10:
                          return (
                            (e.next = 12), y.refreshMemberStatusWithLoading()
                          );
                        case 12:
                          return e.abrupt("return", 1);
                        case 13:
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
            F = function (e) {
              var t, r, n;
              return (0, Z.$n)({
                userName:
                  (null === (t = y.getState().my12306Model) || void 0 === t
                    ? void 0
                    : t.userName12306) ||
                  (null === (r = y.getState().my12306Model) || void 0 === r
                    ? void 0
                    : r.login12306Name),
                password: w.Z.tripleDESEncrypt(
                  (null === (n = y.getState().my12306Model) || void 0 === n
                    ? void 0
                    : n.login12306Pas) || ""
                ),
                consumePwd: e,
              });
            },
            K = (function () {
              var e = (0, b.Z)(
                (0, g.Z)().mark(function e() {
                  var t, r, n, a, i;
                  return (0, g.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = y.getState().my12306Model.login12306Name),
                            (r = y.getState().my12306Model.login12306Pas),
                            (n = { name: encodeURIComponent(t) }),
                            (e.next = 5),
                            y.navigateToAsync({
                              url: "/pages/12306/face/face",
                              data: {
                                certificationInfo: JSON.stringify(n),
                                userName: t,
                                pwd: r,
                                failAction: "return",
                                fromType: 2,
                                memberStatus: y.getMemberStatusForTrace(),
                              },
                            })
                          );
                        case 5:
                          if (
                            ((a = e.sent),
                            1 !== (i = a.res).certificationResultCode)
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.next = 10), y.refreshMemberStatusWithLoading()
                          );
                        case 10:
                          if (
                            (y.ubtTrace("s_trn_z_trace_10650083744", {
                              bizKey: "z_mini_getRegist_result_show",
                              fromPage: "bookBanner",
                              memberStatus: y.getMemberStatusForTrace(),
                              failType: i.rectMessage || "",
                              registMethod: 2,
                              registerResult:
                                1 === i.certificationResultCode ? 1 : 0,
                            }),
                            1 === i.certificationResultCode)
                          ) {
                            e.next = 14;
                            break;
                          }
                          throw (
                            (y.showMultiButtonDialog({
                              title: "刷脸认证失败",
                              content: "信息核验失败，请稍候重试~",
                              leftButtonName: "离开",
                              rightButtonName: "继续认证",
                              onLeftButtonClick: function () {
                                y.ubtTrace("c_trn_z_10650083744", {
                                  bizKey:
                                    "z_mini_getRegist_faceconfirm_result_click",
                                  memberStatus: y.getMemberStatusForTrace(),
                                  clickResult: "fail",
                                  failType: i.rectMessage || "扫脸失败~",
                                  clickType: 0,
                                }),
                                  (0, l.getCurrentPages)().length > 1
                                    ? y.navigateBack()
                                    : R.Z.relaunchHome();
                              },
                              onRightButtonClick: function () {
                                y.ubtTrace("c_trn_z_10650083744", {
                                  bizKey:
                                    "z_mini_getRegist_faceconfirm_result_click",
                                  memberStatus: y.getMemberStatusForTrace(),
                                  clickResult: "fail",
                                  failType: i.rectMessage,
                                  clickType: 1,
                                });
                              },
                            }),
                            "扫脸失败~")
                          );
                        case 14:
                          return e.abrupt("return", i);
                        case 15:
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
            W = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.isShowScanActiveSuccessModel,
                r = void 0 !== t && t;
              y.refreshLoginStatus(),
                l.eventCenter.trigger(N.n.ACTIVE_12306_MEMBER_STATUS),
                r
                  ? (y.showCommonDialog({
                      title: "刷脸认证成功！",
                      content: function () {
                        return (0, I.tZ)(D, { type: 1 });
                      },
                      buttonName: "知道了",
                      onButtonClick: function () {
                        y.ubtTrace("c_trn_z_10650083744", {
                          bizKey: "z_mini_getRegist_faceconfirm_result_click",
                          memberStatus: y.getMemberStatusForTrace(),
                          clickResult: "succ",
                          failType: "",
                          clickType: 0,
                        }),
                          y.confirmBack();
                      },
                    }),
                    y.ubtDevTrace("o_12306_memeber_face_active_success"))
                  : y.ubtDevTrace("o_12306_memeber_active_success");
            },
            E = (function () {
              var e = (0, b.Z)(
                (0, g.Z)().mark(function e() {
                  var t, r, n, a;
                  return (0, g.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), z.ZP.isLogin)) {
                              e.next = 5;
                              break;
                            }
                            return (
                              C.Z.commonDebugTrace("未登录zx，去登录"),
                              (e.next = 5),
                              z.ZP.doLogin()
                            );
                          case 5:
                            if (y.is12306LoginIn()) {
                              e.next = 13;
                              break;
                            }
                            return (
                              C.Z.commonDebugTrace("未登录12306，去登录"),
                              (0, S.showLoading)(),
                              (e.next = 10),
                              y.refreshLoginStatus()
                            );
                          case 10:
                            return (e.next = 12), y.refreshMemberStatus();
                          case 12:
                            (0, S.hideLoading)();
                          case 13:
                            if (
                              (y.ubtTrace("c_trn_z_10650083744", {
                                bizKey: "z_mini_getRegist_agree_click",
                                fromPage: "bookBanner",
                                memberStatus: y.getMemberStatusForTrace(),
                              }),
                              !y.isMember())
                            ) {
                              e.next = 18;
                              break;
                            }
                            return (
                              C.Z.commonDebugTrace("已经激活成功"),
                              W(),
                              e.abrupt("return")
                            );
                          case 18:
                            if (((t = !1), !y.isMemberBeActived())) {
                              e.next = 26;
                              break;
                            }
                            return (
                              C.Z.commonDebugTrace("首次待激活，去扫脸激活"),
                              (e.next = 23),
                              K()
                            );
                          case 23:
                            (t = !0), (e.next = 47);
                            break;
                          case 26:
                            return (
                              C.Z.commonDebugTrace("非首次待激活，尝试注册"),
                              (0, S.showLoading)(),
                              (e.next = 30),
                              A().catch(function (e) {
                                throw (
                                  (y.showCommonDialog(
                                    e.message || "暂时无法激活会员，请稍候重试~"
                                  ),
                                  e)
                                );
                              })
                            );
                          case 30:
                            if (((r = e.sent), (0, S.hideLoading)(), 0 !== r)) {
                              e.next = 41;
                              break;
                            }
                            return (
                              C.Z.commonDebugTrace(
                                "消费密码不正确 需要用户手动输入密码注册"
                              ),
                              (e.next = 36),
                              y.ubtTrace("s_trn_z_trace_10650083744", {
                                bizKey:
                                  "z_mini_getRegist_secResgist_password_show",
                                fromPage: "bookBanner",
                                memberStatus: y.getMemberStatusForTrace(),
                              }),
                              new Promise(function (e, t) {
                                y.showCommonDialogWithoutButton({
                                  hideTitle: !0,
                                  hiddenCloseIcon: !1,
                                  content: function (t) {
                                    var r = t.onClose;
                                    return (0, I.tZ)(V, {
                                      onSuccess: (function () {
                                        var t = (0, b.Z)(
                                          (0, g.Z)().mark(function t(n) {
                                            return (0, g.Z)().wrap(function (
                                              t
                                            ) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      r(),
                                                      (t.next = 3),
                                                      y.refreshMemberStatusWithLoading()
                                                    );
                                                  case 3:
                                                    y.ubtTrace(
                                                      "s_trn_z_trace_10650083744",
                                                      {
                                                        bizKey:
                                                          "z_mini_getRegist_result_show",
                                                        fromPage: "bookBanner",
                                                        memberStatus:
                                                          y.getMemberStatusForTrace(),
                                                        failType:
                                                          null == n
                                                            ? void 0
                                                            : n.rectMessage,
                                                        registMethod: 1,
                                                        registerResult: 1,
                                                      }
                                                    ),
                                                      e();
                                                  case 5:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            },
                                            t);
                                          })
                                        );
                                        return function (e) {
                                          return t.apply(this, arguments);
                                        };
                                      })(),
                                      onFail: function (e) {
                                        y.ubtTrace(
                                          "s_trn_z_trace_10650083744",
                                          {
                                            bizKey:
                                              "z_mini_getRegist_result_show",
                                            fromPage: "bookBanner",
                                            memberStatus:
                                              y.getMemberStatusForTrace(),
                                            failType:
                                              null == e
                                                ? void 0
                                                : e.rectMessage,
                                            registMethod: 1,
                                            registerResult: 0,
                                          }
                                        );
                                      },
                                      onFace: function () {
                                        C.Z.commonDebugTrace(
                                          "忘记密码？尝试刷脸"
                                        ),
                                          e({ toFace: !0 });
                                      },
                                    });
                                  },
                                  onClose: function () {
                                    t();
                                  },
                                });
                              })
                            );
                          case 36:
                            if (((e.t0 = e.sent), e.t0)) {
                              e.next = 39;
                              break;
                            }
                            e.t0 = {};
                          case 39:
                            (a = e.t0), (n = a.toFace);
                          case 41:
                            if (((t = !1), !y.isMemberBeActived() && !n)) {
                              e.next = 47;
                              break;
                            }
                            return (
                              C.Z.commonDebugTrace(
                                "尝试注册以后为首次待激活或者选择了放弃输入密码重新激活，去扫脸激活"
                              ),
                              (e.next = 46),
                              K()
                            );
                          case 46:
                            t = !n;
                          case 47:
                            if (((0, S.hideLoading)(), y.isMember())) {
                              e.next = 53;
                              break;
                            }
                            return (
                              C.Z.commonDebugTrace(
                                "流程结束以后，仍然未激活会员 激活失败"
                              ),
                              (0, S.showToast)("激活失败，请稍候重试~"),
                              y.ubtDevTrace("o_12306_memeber_active_fail"),
                              e.abrupt("return")
                            );
                          case 53:
                            C.Z.commonDebugTrace("流程结束以后，激活成功"),
                              W({ isShowScanActiveSuccessModel: t }),
                              (e.next = 61);
                            break;
                          case 57:
                            (e.prev = 57),
                              (e.t1 = e.catch(0)),
                              (0, S.hideLoading)(),
                              C.Z.commonDebugTrace(
                                "handleRegisterMember fail: ".concat(
                                  JSON.stringify(e.t1)
                                )
                              );
                          case 61:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 57]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            O = (function () {
              var e = (0, b.Z)(
                (0, g.Z)().mark(function e() {
                  return (0, g.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (0, S.showLoading)(),
                              (e.next = 4),
                              y.refreshLoginStatus()
                            );
                          case 4:
                            return (e.next = 6), y.refreshMemberStatus();
                          case 6:
                            (0, S.hideLoading)(),
                              y.ubtTrace("s_trn_z_trace_10650083744", {
                                bizKey: "z_mini_getRegist_show",
                                fromPage: "bookBanner",
                                memberStatus: y.getMemberStatusForTrace(),
                              }),
                              (e.next = 14);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              (0, S.hideLoading)(),
                              C.Z.commonDebugTrace({
                                step: "initPageData err",
                                err: e.t0,
                              });
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            X = (function () {
              var e = (0, b.Z)(
                (0, g.Z)().mark(function e() {
                  var t;
                  return (0, g.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (y.isMemberBeActived()) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", !0);
                        case 2:
                          return (
                            (e.next = 4),
                            y.showMultiButtonDialogWithPromise({
                              content: function () {
                                return (0, I.tZ)(D, {});
                              },
                              leftButtonName: "离开",
                              rightButtonName: "继续认证",
                            })
                          );
                        case 4:
                          return (
                            (t = e.sent),
                            y.ubtTrace("c_trn_z_10650083744", {
                              bizKey:
                                "z_mini_getRegist_faceconfirm_result_click",
                              memberStatus: y.getMemberStatusForTrace(),
                              clickResult: "cancel",
                              failType: "",
                              clickType: "left" === t ? 0 : 1,
                            }),
                            e.abrupt("return", "left" === t)
                          );
                        case 7:
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
            j = r(5055),
            H = r(13979),
            J = ["realName12306", "isShow", "skinType"],
            U = (0, d.$j)(function (e) {
              var t,
                r = e.my12306Model,
                n = e.memberModel;
              return {
                realName12306: r.realName12306,
                isShow:
                  (null === (t = n.memberStatusInfo) || void 0 === t
                    ? void 0
                    : t.member_status) != k.Fn.NORMAL_STATUS,
              };
            })(function (e) {
              var t,
                r = e.realName12306,
                n = e.isShow,
                a = e.skinType,
                i = (0, x.Z)(e, J);
              if (!n) return null;
              var s = (function () {
                var e = (0, b.Z)(
                  (0, g.Z)().mark(function e() {
                    var r, n;
                    return (0, g.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              y.ubtTrace(
                                "TZW12306Credit_Activate12306_Auth_click",
                                {
                                  PageId:
                                    null === (r = y.getPage()) || void 0 === r
                                      ? void 0
                                      : r.pageId,
                                  fromPage:
                                    null === (n = y.getPage()) || void 0 === n
                                      ? void 0
                                      : n.fromPage,
                                }
                              ),
                              (e.next = 3),
                              t.checkProtocol()
                            );
                          case 3:
                            if (e.sent) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            E();
                          case 7:
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
              return (0, I.tZ)(
                j.Z,
                (0, _.Z)(
                  (0, _.Z)({}, i || {}),
                  {},
                  {
                    icon: k.ow.img_face_check,
                    title1:
                      "member" === a
                        ? "刷脸认证后即可激活12306畅行会员"
                        : "铁路局规定",
                    title2:
                      "member" === a ? "" : "刷脸认证后即可激活12306畅行会员",
                    renderBtnView: function () {
                      return (0, I.tZ)(B.View, {
                        className: "face-btn",
                        id: "AgBK",
                        onClick: s,
                        children:
                          "member" === a ? "认证查积分" : "同意协议并开始认证",
                      });
                    },
                    renderTipView: function () {
                      return r
                        ? (0, I.BX)(B.View, {
                            className: "face-tip",
                            children: [
                              "请确认是账号本人：",
                              (0, I.tZ)(B.Text, {
                                className: "name",
                                children: r,
                              }),
                            ],
                          })
                        : null;
                    },
                    renderBottomView: function () {
                      return (0, I.tZ)(H.Z, {
                        onRef: function (e) {
                          return (t = e);
                        },
                      });
                    },
                  }
                )
              );
            }),
            $ = ["isShow"],
            q = (0, d.$j)(function (e) {
              var t;
              return {
                isShow:
                  (null === (t = e.memberModel.memberStatusInfo) || void 0 === t
                    ? void 0
                    : t.member_status) == k.Fn.NORMAL_STATUS,
              };
            })(function (e) {
              var t = e.isShow,
                r = (0, x.Z)(e, $);
              if (!t) return null;
              var n = function () {
                y.confirmBack();
              };
              return (0, I.tZ)(
                j.Z,
                (0, _.Z)(
                  (0, _.Z)({}, r),
                  {},
                  {
                    title1: "您已成功激活12306畅行会员",
                    title2: "可享积分兑换车票权益",
                    renderBtnView: function () {
                      return (0, I.tZ)(B.View, {
                        className: "face-btn",
                        id: "AgBJ",
                        onClick: n,
                        children: "点击返回",
                      });
                    },
                    icon: k.ow.img_face_check_suc,
                  }
                )
              );
            }),
            Y = r(74417),
            G = r(50181),
            Q = r(73922),
            ee = "normal",
            te = "member",
            re =
              (0, m.h)(!1, { usePageWrapper: !0 })(
                (M = (function (e) {
                  (0, o.Z)(r, e);
                  var t = (0, c.Z)(r);
                  function r(e) {
                    var n;
                    return (
                      (0, a.Z)(this, r),
                      ((n = t.call(this, e)).pageId = f.default.isTieyou
                        ? "10650083746"
                        : "10650083744"),
                      (n.store = y.create((0, s.Z)(n)).store),
                      (n.pageTitle = "激活12306会员"),
                      (n.pageRootClassName = "train-12306-member-page"),
                      (n.onInterceptBackAsync = X),
                      (n.state = { skinType: ee }),
                      n
                    );
                  }
                  return (
                    (0, i.Z)(r, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            t,
                            r =
                              null === (e = (0, l.getCurrentInstance)()) ||
                              void 0 === e ||
                              null === (t = e.router) ||
                              void 0 === t
                                ? void 0
                                : t.params;
                          (this.skinType = r.skinType || ee),
                            (this.fromPage = r.fromPage || "x"),
                            this.setState({ skinType: this.skinType }),
                            O(),
                            this.ubtTrace(
                              "TZW12306Credit_Activate12306_exposure",
                              { PageId: this.pageId, fromPage: this.fromPage }
                            );
                        },
                      },
                      {
                        key: "renderBackgroundView",
                        value: function () {
                          return this.state.skinType == te
                            ? (0, I.tZ)(Q.Z, {})
                            : null;
                        },
                      },
                      {
                        key: "renderMemberHeaderView",
                        value: function () {
                          return this.state.skinType == te
                            ? (0, I.tZ)(Y.Z, {})
                            : null;
                        },
                      },
                      {
                        key: "renderMemberBodyView",
                        value: function () {
                          return this.state.skinType == te
                            ? (0, I.tZ)(G.Z, { children: this.renderContent() })
                            : this.renderContent();
                        },
                      },
                      {
                        key: "renderContent",
                        value: function () {
                          var e = this.state.skinType;
                          return (0, I.BX)(I.HY, {
                            children: [
                              (0, I.tZ)(U, {
                                className: "member_scan_".concat(
                                  this.state.skinType
                                ),
                                skinType: e,
                              }),
                              (0, I.tZ)(q, {
                                className: "member_scan_".concat(
                                  this.state.skinType
                                ),
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, I.BX)(d.zt, {
                            store: this.store,
                            children: [
                              this.renderMemberHeaderView(),
                              this.renderMemberBodyView(),
                            ],
                          });
                        },
                      },
                    ]),
                    r
                  );
                })(u.default.Component))
              ) || M;
          Page(
            (0, n.createPageConfig)(
              re,
              "pages/12306/member/member",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "12306畅行会员",
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
        e.O(0, [37013, 61094, 26450, 52593, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(48702);
        }),
          e.O();
      },
    ]);
})();
