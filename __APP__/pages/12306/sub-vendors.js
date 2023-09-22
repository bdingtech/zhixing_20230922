!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [37013],
    {
      34752: function (e, t, n) {
        n.d(t, {
          Dg: function () {
            return o;
          },
          Fn: function () {
            return s;
          },
          R9: function () {
            return r;
          },
          WG: function () {
            return u;
          },
          Zc: function () {
            return c;
          },
          kO: function () {
            return l;
          },
        });
        var i = n(79792),
          a = n(17377),
          r = (0, a.ZP)({
            serviceCode: "14674",
            channel: i.default.train_channel,
            path: "GetTrainImageAuthenticationResult",
          }),
          o = (0, a.ZP)({
            serviceCode: "22867",
            channel: "",
            path: "getSmsVerificationCode",
            encryptFlag: 1,
          }),
          s = (0, a.ZP)({
            serviceCode: "22867",
            channel: "",
            path: "change12306Password",
            encryptFlag: 1,
          }),
          c = (0, a.ZP)({
            serviceCode: "22867",
            channel: "",
            path: "changeVerificationMobileNo",
          }),
          l = (0, a.ZP)({
            serviceCode: "22867",
            channel: i.default.train_channel,
            path: "faceAuthentication",
          }),
          u = (0, a.ZP)({
            serviceCode: "17165",
            channel: i.default.train_channel,
            path: "notifyStudentChangeAuditResume",
          });
      },
      5055: function (e, t, n) {
        n(52500);
        var i = n(71515),
          a = n(25391),
          r = n(48813);
        t.Z = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.icon,
            n = void 0 === t ? "" : t,
            o = e.title1,
            s = void 0 === o ? "" : o,
            c = e.title2,
            l = void 0 === c ? "" : c,
            u = e.renderBtnView,
            d = e.renderTipView,
            m = e.renderBottomView,
            f = e.className,
            h = void 0 === f ? "" : f;
          return a.ZP.getScanFaceWorkable()
            ? (0, r.BX)(i.View, {
                className:
                  "activite-12306-member-view flex flex-center flex-column ".concat(
                    h
                  ),
                children: [
                  (0, r.tZ)(i.Image, {
                    mode: "aspectFit",
                    src: n,
                    className: "face-icon",
                  }),
                  s &&
                    (0, r.tZ)(i.View, {
                      className: "title title1",
                      children: s,
                    }),
                  l &&
                    (0, r.tZ)(i.View, {
                      className: "title title2",
                      children: l,
                    }),
                  null == d ? void 0 : d(),
                  null == u ? void 0 : u(),
                  null == m ? void 0 : m(),
                ],
              })
            : (0, r.tZ)(i.View, {
                className: "face-tip",
                id: "AgAz",
                style: { textAlign: "center" },
                children: "暂不支持 敬请期待",
              });
        };
      },
      13979: function (e, t, n) {
        var i = n(79301),
          a = n(95308),
          r = n(90129),
          o = n(26498),
          s = n(79910),
          c = n(49120),
          l = n(71515),
          u = n(52500),
          d = n(61537),
          m = n(48813);
        t.Z = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.onRef,
            n = (0, u.useState)(!1),
            f = (0, r.Z)(n, 2),
            h = f[0],
            p = f[1],
            g = function () {
              return (0, m.BX)(l.View, {
                className: "face-verify-protocol-content",
                children: [
                  "我已阅读并同意",
                  (0, m.tZ)(l.Text, {
                    className: "book",
                    id: "AgAE",
                    onClick: function () {
                      s.Z.commonNavigator(d.Jy.privacyUrl);
                    },
                    children: "《隐私政策》",
                  }),
                  "及",
                  (0, m.tZ)(l.Text, {
                    className: "book",
                    id: "AgAF",
                    onClick: function () {
                      s.Z.commonNavigator(d.Jy.faceVerifyUrl);
                    },
                    children: "《认证协议》",
                  }),
                ],
              });
            };
          return (
            (0, u.useImperativeHandle)(t, function () {
              return {
                checkProtocol: function () {
                  return (0, a.Z)(
                    (0, i.Z)().mark(function e() {
                      return (0, i.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!h) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", !0);
                            case 2:
                              return e.abrupt(
                                "return",
                                (0, c.getCurrentPage)()
                                  .showMultiButtonDialogWithPromise({
                                    title: "认证协议",
                                    content: g,
                                    leftButtonName: "再想想",
                                    rightButtonName: "同意",
                                  })
                                  .then(function (e) {
                                    var t = "right" === e;
                                    return p(t), t;
                                  })
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
              };
            }),
            (0, m.BX)(l.View, {
              className: "face-verify-protocol flex flex-center",
              children: [
                (0, m.tZ)(o.Z, {
                  className: "protocol-radio",
                  size: 12,
                  checked: h,
                  id: "AgAG",
                  onClick: function () {
                    p(!h);
                  },
                }),
                g(),
              ],
            })
          );
        };
      },
      43261: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return g;
          },
        });
        var i = n(57042),
          a = n(24460),
          r = n(21867),
          o = n(86066),
          s = (n(81957), n(71515)),
          c = n(49120),
          l = n(52500),
          u = n(79301),
          d = n(95308),
          m = n(90129),
          f = n(48813);
        function h(e) {
          var t = (0, l.useState)(e),
            n = (0, m.Z)(t, 2),
            i = n[0],
            a = n[1],
            r = (0, l.useState)(!1),
            o = (0, m.Z)(r, 2),
            s = o[0],
            c = o[1],
            u = (0, l.useState)(!1),
            d = (0, m.Z)(u, 2),
            f = d[0],
            h = d[1];
          return (
            (0, l.useEffect)(
              function () {
                var e;
                return (
                  s && i > 0
                    ? (e = setTimeout(function () {
                        a(i - 1);
                      }, 1e3))
                    : 0 === i && (c(!1), h(!0)),
                  function () {
                    return clearTimeout(e);
                  }
                );
              },
              [s, i]
            ),
            {
              time: i,
              isActive: s,
              isFinished: f,
              start: function () {
                c(!0);
              },
              pause: function () {
                c(!1);
              },
              reset: function () {
                c(!1), h(!1), a(e);
              },
            }
          );
        }
        var p = (0, l.forwardRef)(function (e, t) {
            var n = e.intervals,
              i = void 0 === n ? 60 : n,
              a = e.onGetMsgCode,
              r = h(i),
              o = r.time,
              m = r.isActive,
              p = r.start,
              g = r.reset,
              v = (0, l.createRef)();
            (0, l.useImperativeHandle)(t, function () {
              return {
                getValue: function () {
                  return v.current.value;
                },
                validate: (function () {
                  var e = (0, d.Z)(
                    (0, u.Z)().mark(function e() {
                      return (0, u.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (v.current.value) {
                                e.next = 3;
                                break;
                              }
                              throw { code: 0, msg: "请输入验证码" };
                            case 3:
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
              };
            });
            var Z = (function () {
              var e = (0, d.Z)(
                (0, u.Z)().mark(function e() {
                  return (0, u.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (0, c.showLoading)(),
                            (e.next = 3),
                            null == a ? void 0 : a()
                          );
                        case 3:
                          (0, c.hideLoading)(), g(), p();
                        case 6:
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
            return (0,
            f.BX)(s.View, { className: "flex flex-center sms-code-input-box", children: [(0, f.tZ)(s.View, { className: "name", children: "验证码：" }), (0, f.tZ)(s.Input, { className: "flex-1 input", ref: v }), (0, f.tZ)(s.View, { className: "btn-get ".concat(m ? "ghost" : ""), id: "AgAI", onClick: m ? function () {} : Z, children: m ? "".concat(o, "秒后重试") : "获取验证码" })] });
          }),
          g = (function (e) {
            (0, r.Z)(n, e);
            var t = (0, o.Z)(n);
            function n(e) {
              var a;
              return (
                (0, i.Z)(this, n),
                ((a = t.call(this, e)).disableBgStyle = !0),
                (a.pageTitle = "信息验证"),
                (a.btnName = "提交"),
                (a.state = { mobile: "", mobileCode: "" }),
                a
              );
            }
            return (
              (0, a.Z)(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this.$instance.router.params || {},
                      t = e.mobile,
                      n = e.mobileCode;
                    this.setState({ mobile: t, mobileCode: n });
                  },
                },
                {
                  key: "onBtnClick",
                  value: function () {
                    var e = this;
                    this.$SmsCodeInput
                      .validate()
                      .then(function () {
                        var t;
                        null == e ||
                          null === (t = e.onSubmit) ||
                          void 0 === t ||
                          t.call(e, e.$SmsCodeInput.getValue());
                      })
                      .catch(function (e) {
                        e.msg && (0, c.showToast)(e.msg);
                      });
                  },
                },
                {
                  key: "onGetMsgCode",
                  value: function () {
                    var e;
                    return (
                      console.warn("fetch sms code..."),
                      null === (e = this.getMsgCode) || void 0 === e
                        ? void 0
                        : e.call(this)
                    );
                  },
                },
                {
                  key: "pageRender",
                  value: function () {
                    var e = this,
                      t = this.state,
                      n = t.mobile,
                      i = t.mobileCode;
                    return (0, f.BX)(s.View, {
                      className: "trn-t6-sms-view",
                      children: [
                        (0, f.tZ)(s.View, {
                          className: "title",
                          children: "填写短信验证码",
                        }),
                        (0, f.BX)(s.View, {
                          className: "desc",
                          children: ["验证码将发送至(+", i, ")", n],
                        }),
                        (0, f.tZ)(p, {
                          ref: function (t) {
                            e.$SmsCodeInput = t;
                          },
                          onGetMsgCode: this.onGetMsgCode,
                        }),
                        (0, f.tZ)(s.View, {
                          className: "btn-register",
                          id: "AgAH",
                          onClick: this.onBtnClick,
                          children: this.btnName,
                        }),
                      ],
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.pageRender();
                  },
                },
              ]),
              n
            );
          })(l.default.Component);
      },
      88016: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return k;
          },
        });
        var i = n(90129),
          a = n(49120),
          r = n(71515),
          o = n(52500),
          s = n(96158),
          c = n(79204),
          l = n(8271),
          u = n.n(l),
          d = n(94262),
          m = n(26498),
          f = n(52740),
          h = n(48813),
          p = (0, o.forwardRef)(function (e, t) {
            (0, d.Z)(e);
            var n = (0, o.useState)(f.vj[0].value),
              a = (0, i.Z)(n, 2),
              s = a[0],
              c = a[1];
            return (
              (0, o.useImperativeHandle)(t, function () {
                return {
                  getValue: function () {
                    return s;
                  },
                };
              }),
              f.vj.map(function (e, t) {
                var n = e.name,
                  i = e.value;
                return (0, h.BX)(
                  r.View,
                  {
                    className: "check-item",
                    id: "AgAT",
                    onClick: function () {
                      c(i);
                    },
                    children: [
                      (0, h.tZ)(m.Z, { checked: s == i }),
                      (0, h.tZ)(r.View, {
                        className: "flex flex-center",
                        children: n,
                      }),
                    ],
                  },
                  t
                );
              })
            );
          }),
          g = n(88424),
          v = n(34405),
          Z = n(79301),
          N = n(95308),
          w = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.onChange,
              n = e.onRef,
              a = e.disabled,
              s = void 0 !== a && a,
              c = (0, o.useState)(0),
              l = (0, i.Z)(c, 2),
              u = l[0],
              d = l[1];
            (0, o.useEffect)(
              function () {
                null == t || t(f.BT[u]);
              },
              [u]
            );
            var m = (function () {
              var e = (0, N.Z)(
                (0, Z.Z)().mark(function e(t) {
                  return (0, Z.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          d(t.detail.value);
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
            return (
              (0, o.useImperativeHandle)(n, function () {
                return {
                  getValue: function () {
                    return f.BT[u];
                  },
                  setValue: function (e) {
                    var t = f.BT.findIndex(function (t) {
                      return t == e;
                    });
                    d(t < 0 ? 0 : t);
                  },
                };
              }),
              (0, h.tZ)(r.Picker, {
                mode: "selector",
                onChange: m,
                range: f.BT,
                value: u,
                rangeKey: "label",
                disabled: s,
                children: (0, h.tZ)(r.View, {
                  className: "txt",
                  style: { height: "40px", opacity: s ? "0.5" : 1 },
                  children: f.BT[u].label,
                }),
              })
            );
          },
          b = n(298),
          y = n(74921),
          C = ["defaultValue", "value", "placeHolder", "contentClassName"],
          x = (0, o.forwardRef)(function (e, t) {
            var n = e.defaultValue,
              a = e.value,
              s = e.placeHolder,
              c = void 0 === s ? "请选择日期" : s,
              l = e.contentClassName,
              u = void 0 === l ? "" : l,
              d = (0, y.Z)(e, C),
              m = (0, o.useState)(a || n),
              f = (0, i.Z)(m, 2),
              p = f[0],
              g = f[1];
            return (
              (0, o.useImperativeHandle)(t, function () {
                return {
                  getValue: function () {
                    return p;
                  },
                };
              }),
              (0, h.tZ)(
                r.Picker,
                (0, b.Z)(
                  (0, b.Z)({}, d),
                  {},
                  {
                    mode: "date",
                    value: p,
                    onChange: function (e) {
                      g(e.detail.value);
                    },
                    children: (0, h.tZ)(r.Text, {
                      className: "date-picker-content ".concat(u),
                      children: p || c,
                    }),
                  }
                )
              )
            );
          }),
          V = function () {
            (0, a.getCurrentPage)().showCommonDialog({
              title: "温馨提示",
              content: function () {
                return (0, h.BX)(r.View, {
                  className: "pop-modal-bd train-12306-useName-pop",
                  children: [
                    (0, h.tZ)(r.View, {
                      children:
                        "1、姓名中含有生僻字无法输入时，可用拼音或同音字替代",
                    }),
                    (0, h.tZ)(r.View, {
                      children: "2、姓名中含有繁体字无法输入时，可用简体字替代",
                    }),
                    (0, h.tZ)(r.View, {
                      children:
                        "3、姓名较长，汉字与英文字符合计超过30个（1个汉字算2个字符）的，需按姓名中第一个汉字或英文字符开始按顺序连续输入30个字符（空格字符不输入），其中英文字符输入时不区分大小写",
                    }),
                    (0, h.tZ)(r.View, {
                      children:
                        "4、姓名中有“.”或“·”时，请仔细辨认身份证件原件上的“.”或“·”，准确输入",
                    }),
                    (0, h.tZ)(r.View, {
                      children: "5、姓名中有“，”时，请使用空格替换",
                    }),
                  ],
                });
              },
              buttonName: "我知道了",
            });
          },
          k = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.onRef,
              n = e.handleConfirm,
              l = e.confirmText,
              d = void 0 === l ? "提交" : l,
              m = e.passPortTypeSelectorDisabled,
              f = void 0 !== m && m,
              Z = e.showCodeSelectorDisabled,
              N = void 0 !== Z && Z,
              b = (0, o.useState)(!1),
              y = (0, i.Z)(b, 2),
              C = y[0],
              k = y[1],
              T = (0, o.useState)(!1),
              _ = (0, i.Z)(T, 2),
              B = _[0],
              P = _[1],
              S = (0, o.useState)(!1),
              M = (0, i.Z)(S, 2),
              A = M[0],
              I = M[1],
              R = {
                $PassportCodeTypeRef: null,
                $IdNumberInputRef: null,
                $UserNameInputRef: null,
                $MobileInputRef: null,
                $MobileCodeSelector: null,
                enableSelect: !1,
              },
              X = function (e) {
                var t = e.userName,
                  n = e.idNumber,
                  i = e.mobile,
                  a = e.seletedPassportType,
                  r = void 0 === a ? { type: 1 } : a,
                  o = e.mobileCode;
                if (!(0, s.nR)(r.label, n))
                  throw {
                    message: "请输入正确的".concat(r.label, "号码"),
                    code: -22,
                  };
                if (!v.Z.nameCheck(t))
                  throw { message: "请输入正确的姓名", code: -22 };
                if (!v.Z.mobileCheck(i, o))
                  throw { message: "请输入正确的手机号", code: -22 };
              },
              D = function () {
                var e,
                  t,
                  n,
                  i,
                  a,
                  r = [
                    null === (e = R.$PassportCodeTypeRef) || void 0 === e
                      ? void 0
                      : e.getValue(),
                    R.$IdNumberInputRef.value,
                    R.$UserNameInputRef.value,
                    R.$MobileInputRef.value,
                    null === (t = R.$MobileCodeSelector) || void 0 === t
                      ? void 0
                      : t.getValue(),
                    null === (n = R.$BornDateSelectorRef) || void 0 === n
                      ? void 0
                      : n.getValue(),
                    null === (i = R.$GatValidDateEndSelectorRef) || void 0 === i
                      ? void 0
                      : i.getValue(),
                    null === (a = R.$SexSelectorRef) || void 0 === a
                      ? void 0
                      : a.getValue(),
                  ],
                  o = r[0],
                  s = r[1],
                  c = r[2],
                  l = r[3],
                  d = r[4],
                  m = r[5],
                  f = r[6],
                  h = r[7];
                return (
                  X({
                    seletedPassportType: o,
                    idNumber: s,
                    userName: c,
                    mobile: l,
                    mobileCode: d,
                  }),
                  {
                    seletedPassportType: o,
                    idNumber: s,
                    userName: c,
                    mobile: l,
                    mobileCode: d,
                    birthday: m ? u()(m).format("YYYYMMDD") : "",
                    gatValidDateEnd: f ? u()(f).format("YYYYMMDD") : "",
                    sexCode: h,
                  }
                );
              },
              $ = function () {
                try {
                  var e = D();
                  null == n || n({ formValue: e });
                } catch (e) {
                  if ((console.log(e.message), -22 === e.code))
                    return void (0, a.showToast)(e.message);
                  (0, a.showToast)(e.message);
                }
              },
              F = function (e, t) {
                var n;
                "$PassportCodeTypeRef" !== e &&
                "$MobileCodeSelector" !== e &&
                "$SexSelectorRef" !== e
                  ? (R[e].value = t)
                  : null === (n = R[e]) || void 0 === n || n.setValue(t);
              },
              E = function (e) {
                var t,
                  n,
                  i,
                  a = "1" != (null == e ? void 0 : e.realType);
                null === (t = R.$MobileCodeSelector) ||
                  void 0 === t ||
                  null === (n = t.setEnableSelect) ||
                  void 0 === n ||
                  n.call(t, a),
                  "1" == (null == e ? void 0 : e.realType) &&
                    (null === (i = R.$MobileCodeSelector) ||
                      void 0 === i ||
                      i.init()),
                  (R.isEnableSelect = a),
                  k(
                    ["B", "H", "G", "C"].includes(
                      null == e ? void 0 : e.realType
                    )
                  ),
                  P(
                    ["B", "H", "G", "C"].includes(
                      null == e ? void 0 : e.realType
                    )
                  ),
                  I(
                    ["B", "H", "G", "C"].includes(
                      null == e ? void 0 : e.realType
                    )
                  );
              };
            return (
              (0, o.useImperativeHandle)(t, function () {
                return { getFormVal: D, setFormVal: F };
              }),
              (0, h.BX)(r.View, {
                className: "train-12306-common-form-view",
                children: [
                  (0, h.BX)(r.View, {
                    className: "white-box",
                    children: [
                      (0, h.BX)(r.View, {
                        className: "form-li",
                        children: [
                          (0, h.tZ)(r.View, {
                            className: "form-label",
                            children: "证件类型",
                          }),
                          (0, h.tZ)(r.View, {
                            className: "cont",
                            children: (0, h.tZ)(w, {
                              onRef: function (e) {
                                return (R.$PassportCodeTypeRef = e);
                              },
                              disabled: f,
                              onChange: E,
                            }),
                          }),
                          (0, h.tZ)(r.Text, { className: "i12306-arr" }),
                        ],
                      }),
                      (0, h.BX)(r.View, {
                        className: "form-li",
                        children: [
                          (0, h.tZ)(r.View, {
                            className: "form-label",
                            children: "证件号码",
                          }),
                          (0, h.tZ)(r.View, {
                            className: "cont",
                            children: (0, h.tZ)(r.Input, {
                              type: "text",
                              ref: function (e) {
                                return (R.$IdNumberInputRef = e);
                              },
                              placeholder: "请输入证件号码",
                              className: "input-txt",
                            }),
                          }),
                        ],
                      }),
                      (0, h.BX)(r.View, {
                        className: "form-li",
                        children: [
                          (0, h.BX)(r.View, {
                            className: "form-label",
                            children: [
                              "姓名",
                              (0, h.tZ)(r.Text, {
                                className: "i12306-detail",
                                id: "AgAJ",
                                onClick: V,
                              }),
                            ],
                          }),
                          (0, h.tZ)(r.View, {
                            className: "cont",
                            children: (0, h.tZ)(r.Input, {
                              type: "text",
                              ref: function (e) {
                                return (R.$UserNameInputRef = e);
                              },
                              placeholder: "请输入您的真实姓名",
                              className: "input-txt",
                            }),
                          }),
                        ],
                      }),
                      A &&
                        (0, h.BX)(r.View, {
                          className: "form-li",
                          children: [
                            (0, h.tZ)(r.View, {
                              className: "form-label",
                              children: "性别",
                            }),
                            (0, h.tZ)(r.View, {
                              className: "cont flex",
                              children: (0, h.tZ)(p, {
                                ref: function (e) {
                                  return (R.$SexSelectorRef = e);
                                },
                              }),
                            }),
                          ],
                        }),
                      (0, h.BX)(r.View, {
                        className: "form-li",
                        children: [
                          (0, h.tZ)(r.View, {
                            className: "form-label",
                            children: "手机号码",
                          }),
                          (0, h.BX)(r.View, {
                            className: "cont flex flex-center",
                            children: [
                              N &&
                                (0, h.tZ)(c.Z, {
                                  className: "input-txt",
                                  style: { paddingRight: "6px" },
                                  ref: function (e) {
                                    return (R.$MobileCodeSelector = e);
                                  },
                                }),
                              (0, h.tZ)(r.Input, {
                                type: "text",
                                ref: function (e) {
                                  return (R.$MobileInputRef = e);
                                },
                                placeholder: "请输入您的手机号码",
                                className: "input-txt flex-1",
                              }),
                            ],
                          }),
                        ],
                      }),
                      C &&
                        (0, h.BX)(r.View, {
                          className: "form-li",
                          children: [
                            (0, h.tZ)(r.View, {
                              className: "form-label",
                              children: "出生日期",
                            }),
                            (0, h.tZ)(r.View, {
                              className: "cont flex flex-center",
                              children: (0, h.tZ)(x, {
                                defaultValue: "1985-01-01",
                                type: "text",
                                ref: function (e) {
                                  return (R.$BornDateSelectorRef = e);
                                },
                                placeholder: "请输入出生日期",
                                className: "input-txt flex-1",
                              }),
                            }),
                          ],
                        }),
                      B &&
                        (0, h.BX)(r.View, {
                          className: "form-li",
                          children: [
                            (0, h.tZ)(r.View, {
                              className: "form-label",
                              children: "证件有效期",
                            }),
                            (0, h.tZ)(r.View, {
                              className: "cont flex flex-center",
                              children: (0, h.tZ)(x, {
                                defaultValue: "2025-01-01",
                                type: "text",
                                ref: function (e) {
                                  return (R.$GatValidDateEndSelectorRef = e);
                                },
                                placeholder: "请输入证件有效期",
                                className: "input-txt flex-1",
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, h.tZ)(r.View, {
                    className: "btn-box",
                    children: (0, h.tZ)(r.View, {
                      className: "btn-blue btn-big",
                      id: "AgAK",
                      onClick: $,
                      children: d,
                    }),
                  }),
                  (0, h.BX)(r.View, {
                    className: "info-txt",
                    children: [
                      "点击",
                      d,
                      "即代表同意",
                      (0, h.tZ)(r.Text, {
                        className: "tblue",
                        id: "AgAL",
                        onClick: function () {
                          (0, g.vs)("default");
                        },
                        children: "《账户授权协议》",
                      }),
                    ],
                  }),
                ],
              })
            );
          };
      },
      73922: function (e, t, n) {
        n(52500);
        var i = n(71515),
          a = n(48813);
        t.Z = function () {
          return (0, a.tZ)(i.Image, {
            className: " _Z _Wi",
            src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/bg3@3x.png",
          });
        };
      },
      74417: function (e, t, n) {
        n(52500);
        var i = n(71515),
          a = n(48813);
        t.Z = function () {
          return (0, a.BX)(i.View, {
            className: " _i _n _l _Xi _k",
            children: [
              (0, a.tZ)(i.Image, {
                className: " _Yi _Z",
                src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/btt2@3x.png",
                mode: "aspectFit",
              }),
              (0, a.tZ)(i.Image, {
                className: " _Z _Sd _cg",
                src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/bt3@3x.png",
                mode: "aspectFit",
              }),
            ],
          });
        };
      },
      50181: function (e, t, n) {
        var i = n(71515),
          a = (n(52500), n(48813));
        t.Z = function (e) {
          var t = e.children,
            n = e.style,
            r = void 0 === n ? {} : n;
          return (0, a.BX)(i.View, {
            className: " _Vb _Qi _xk _yk _p",
            children: [
              (0, a.BX)(i.View, {
                className: " _i _l _u _zk _s _t _Ak _Wb _Bk _Nb",
                style: r,
                children: [
                  (0, a.BX)(i.View, {
                    className: " _i _l",
                    children: [
                      (0, a.tZ)(i.View, {
                        className: " _Tj _Rj _o _Ck _pa _qb _Dk _Uc _Ne _O",
                        children: "1",
                      }),
                      (0, a.tZ)(i.View, {
                        className: " _sb _R _Ek _Uc",
                        children: "登录并激活12306会员查积分",
                      }),
                    ],
                  }),
                  (0, a.tZ)(i.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/jj@3x.png",
                    mode: "aspectFit",
                    className: " _Ye _og _Rd",
                  }),
                  (0, a.BX)(i.View, {
                    className: " _i _l",
                    children: [
                      (0, a.tZ)(i.View, {
                        className: " _Tj _Rj _o _Ck _pa _qb _Dk _Uc _Ne _O",
                        children: "2",
                      }),
                      (0, a.tZ)(i.View, {
                        className: " _sb _R _Ek _Uc",
                        children: "会员积分余额查询",
                      }),
                    ],
                  }),
                ],
              }),
              t,
            ],
          });
        };
      },
      21563: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return h;
          },
        });
        var i = n(79301),
          a = n(95308),
          r = n(90129),
          o = n(52500),
          s = n(79792),
          c = n(65573),
          l = n(49120),
          u = n(71515),
          d = n(26498),
          m = n(48813),
          f = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.defaultKey,
              n = e.commonPassengers,
              i = void 0 === n ? [] : n,
              a = e.onConfirm,
              s = void 0 === a ? {} : a,
              c = e.tagMobile,
              l = void 0 === c ? "" : c,
              f = (0, o.useState)(t),
              h = (0, r.Z)(f, 2),
              p = h[0],
              g = h[1],
              v = function (e) {
                g(e), null == s || s(i[e]);
              };
            return (0, m.tZ)(u.View, {
              className: "pop-12306-pasg-selector",
              children: i.map(function (e) {
                return (0, m.BX)(
                  u.View,
                  {
                    className: "psg-li",
                    children: [
                      (0, m.BX)(u.View, {
                        class: "cont",
                        children: [
                          (0, m.tZ)(u.View, {
                            className: "h5",
                            children: e.CNName,
                          }),
                          (0, m.BX)(u.View, {
                            className: "p",
                            children: ["身份证 ", e.IdentityNo],
                          }),
                          (0, m.BX)(u.View, {
                            className: "p",
                            children: [
                              "手机号 ",
                              e.Mobile,
                              e.Mobile === l &&
                                (0, m.tZ)(u.Text, {
                                  className: "tag",
                                  children: "当前手机号",
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, m.tZ)(d.Z, {
                        id: "AgAR",
                        onClick: function () {
                          v(e._selectedKey);
                        },
                        checked: e._selectedKey === p,
                      }),
                    ],
                  },
                  e._selectedKey
                );
              }),
            });
          },
          h = (0, c.$j)(
            function (e) {
              var t = e.pasReaderModel;
              return {
                commonPassengers: t.commonPassengers,
                filterCommonPassenger: t.filterCommonPassenger,
                targetUseMobile: t.targetUseMobile,
              };
            },
            function (e) {
              return {
                setFilterCommonPassenger:
                  e.pasReaderModel.setFilterCommonPassenger,
              };
            }
          )(function (e) {
            var t = e.filterCommonPassenger,
              n = void 0 === t ? [] : t,
              c = e.commonPassengers,
              d = void 0 === c ? [] : c,
              h = e.setFilterCommonPassenger,
              p = e.onPsgChange,
              g = e.targetUseMobile,
              v = e.renderHeaderView,
              Z = (0, o.useState)(0),
              N = (0, r.Z)(Z, 2),
              w = N[0],
              b = N[1];
            if (
              ((0, o.useEffect)(
                function () {
                  b(0);
                },
                [n]
              ),
              !n.length)
            )
              return null;
            var y = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e() {
                  var t;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              new Promise(function (e, t) {
                                (0, l.getCurrentPage)().showCommonDrawer({
                                  title: "从常旅乘客中选择",
                                  content: function (t) {
                                    var i = t.onClose;
                                    return (0, m.tZ)(f, {
                                      defaultKey: n[w]._selectedKey,
                                      commonPassengers: d,
                                      tagMobile: g,
                                      onConfirm: function (t) {
                                        e(t), null == i || i();
                                      },
                                    });
                                  },
                                  onWrapClose: t.bind(void 0, { isCancel: !0 }),
                                });
                              })
                            );
                          case 3:
                            (t = e.sent),
                              null == h || h([t]),
                              null == p || p(t),
                              (e.next = 13);
                            break;
                          case 8:
                            if (
                              ((e.prev = 8),
                              (e.t0 = e.catch(0)),
                              !e.t0.isCancel)
                            ) {
                              e.next = 12;
                              break;
                            }
                            return e.abrupt("return");
                          case 12:
                            throw e.t0;
                          case 13:
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
            return (0, m.tZ)(u.View, {
              className: "train-12306-common-pas-reader ".concat(
                s.default.zxTyStr
              ),
              children: (0, m.BX)(u.View, {
                className: "white-box",
                children: [
                  null == v ? void 0 : v(),
                  (0, m.BX)(u.View, {
                    className: "title p flex",
                    children: [
                      "使用以下乘客信息一键填写",
                      (0, m.tZ)(u.Text, {
                        className: "more-btn",
                        id: "AgAP",
                        onClick: y,
                        children: "选择其他乘客",
                      }),
                    ],
                  }),
                  (0, m.tZ)(u.View, {
                    className: "register-pasg-bd",
                    children: n.map(function (e, t) {
                      return (0, m.BX)(
                        u.View,
                        {
                          className: "pas-li flex-center flex-column ".concat(
                            t === w ? "cur" : ""
                          ),
                          id: "AgAQ",
                          onClick: function () {
                            !(function (e, t) {
                              b(t), null == p || p(e);
                            })(e, t);
                          },
                          children: [
                            (0, m.tZ)(u.View, {
                              className: "h4",
                              children: e.CNName,
                            }),
                            e.Mobile &&
                              (0, m.BX)(u.View, {
                                className: "p",
                                children: ["手机号 ", e.Mobile],
                              }),
                            (0, m.tZ)(u.Text, {
                              className: "i12306-select",
                              "v-if": "index === currentIndex",
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
            });
          });
      },
      94782: function (e, t, n) {
        n.d(t, {
          w: function () {
            return u;
          },
        });
        var i = n(79301),
          a = n(298),
          r = n(90129),
          o = n(95308),
          s = n(10741),
          c = n(18783),
          l = function (e) {
            var t = [],
              n = new Map();
            return (
              n.set("成人票", 1).set("儿童票", 2).set("学生票", 3),
              e
                .filter(function (e) {
                  return (
                    e.passengerName ||
                    e.passengerENFirstName ||
                    e.passengerENLastName
                  );
                })
                .forEach(function (e) {
                  var i = {};
                  (i.Birthday = e.passengerBirth),
                    (i.CNName = e.passengerName),
                    (i.ENFirstName = e.passengerENFirstName),
                    (i.ENLastName = e.passengerENLastName),
                    (i.MiddleName = e.middleName),
                    (i.IdentityNo = e.passportCode),
                    (i.IdentityType = e.passportType),
                    (i.cardType = e.cardType),
                    (i.PassengerID = e.passengerID),
                    (i.PassengerType = n.get(e.passengerType)),
                    (i.Mobile = e.mobile),
                    (i.Gender = e.gender),
                    (i.Nationality = e.nationality),
                    (i.CardTimeLimit = e.cardTimeLimit),
                    (i.StudentInfo = e.studentInfo),
                    (i.ShowPassportCode = e.showPassportCode),
                    (i.ename =
                      e.passengerENLastName + "/" + e.passengerENFirstName),
                    (i.birth =
                      (e.passengerBirth && e.passengerBirth.split(" ")[0]) ||
                      ""),
                    (i.mobileCode = e.countryCode),
                    (i.gender = e.gender);
                  [
                    "身份证",
                    "护照",
                    "回乡证",
                    "台胞证",
                    "港澳台居民居住证",
                  ].find(function (t) {
                    return t === e.passportType;
                  })
                    ? (i.idcard = {
                        type: i.PassengerType,
                        no: e.passportCode,
                        text: e.passportType,
                        showCode: e.showPassportCode,
                      })
                    : (i.idcard = {}),
                    (i.isChild = "儿童票" === e.passengerType),
                    (i.pasName = i.CNName ? i.CNName : i.ename),
                    (i.openId = e.openId || ""),
                    (i.isTempPassenger = e.isTempPassenger || 0),
                    (i.isChild || (i.idcard.text && i.idcard.no)) && t.push(i);
                }),
              t
            );
          },
          u = (function () {
            var e = (0, o.Z)(
              (0, i.Z)().mark(function e(t) {
                var n, o, u, d, m, f, h, p, g, v, Z, N, w;
                return (0, i.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.getPage().mobile || c.ZP.userName),
                            t
                              .getDispatch()
                              .pasReaderModel.setTargetUseMobile(n),
                            (e.prev = 2),
                            (e.next = 5),
                            Promise.all([
                              (0, s.zQG)({ source: "train" }),
                              (0, s.UrH)({ currentLoginMobile: n }),
                            ])
                          );
                        case 5:
                          (o = e.sent),
                            (u = (0, r.Z)(o, 2)),
                            (d = u[0]),
                            (m = u[1]),
                            d &&
                              1 === d.resultCode &&
                              ((f = d.commonPassengers),
                              (h = void 0 === f ? [] : f),
                              Array.isArray(h) &&
                                h.length > 0 &&
                                ((g = (g = l(h)).filter(function (e) {
                                  return (
                                    !e.isChild && "身份证" === e.IdentityType
                                  );
                                })).length > 0 &&
                                  (g = g
                                    .map(function (e) {
                                      var t = 0;
                                      return (
                                        (t = e.IdentityNo ? t + 1 : t),
                                        (t = e.Mobile ? t + 1 : t),
                                        (t = e.CNName ? t + 1 : t),
                                        (0, a.Z)(
                                          (0, a.Z)({}, e),
                                          {},
                                          { weight: t }
                                        )
                                      );
                                    })
                                    .sort(function (e, t) {
                                      return t.weight - e.weight;
                                    })),
                                (v = g.slice(0).map(function (e, t) {
                                  return (0,
                                  a.Z)((0, a.Z)({}, e), {}, { _selectedKey: t });
                                })),
                                (Z =
                                  null === (p = m.registerPassengers) ||
                                  void 0 === p
                                    ? void 0
                                    : p[0]),
                                (N = v.filter(function (e) {
                                  return e.Mobile === n;
                                })),
                                (w =
                                  N.find(function (e) {
                                    return (
                                      e.pasName === Z.passengerName &&
                                      e.IdentityNo === Z.passportCode
                                    );
                                  }) || N[0]),
                                t
                                  .getDispatch()
                                  .pasReaderModel.setCommonPassengers(v),
                                t
                                  .getDispatch()
                                  .pasReaderModel.setFilterCommonPassenger(
                                    w
                                      ? [w]
                                      : N.slice(0, 2).length > 0
                                      ? N.slice(0, 2)
                                      : v.slice(0, 2)
                                  ))),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12), (e.t0 = e.catch(2)), console.log(e.t0);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 12]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
      },
      14665: function (e, t, n) {
        var i = n(298),
          a = {
            state: {
              commonPassengers: [],
              filterCommonPassenger: [],
              targetUseMobile: "",
            },
            reducers: {
              setCommonPassengers: function (e, t) {
                return (0, i.Z)((0, i.Z)({}, e), {}, { commonPassengers: t });
              },
              setFilterCommonPassenger: function (e, t) {
                return (0, i.Z)(
                  (0, i.Z)({}, e),
                  {},
                  { filterCommonPassenger: t }
                );
              },
              setTargetUseMobile: function (e, t) {
                return (0, i.Z)((0, i.Z)({}, e), {}, { targetUseMobile: t });
              },
            },
          };
        t.Z = a;
      },
      37817: function (e, t, n) {
        var i = n(79792),
          a = n(71515),
          r = (n(92954), n(52500)),
          o = n(48813);
        t.Z = r.default.memo(function (e) {
          var t = e.show,
            n = e.faceCheckName,
            s = void 0 === n ? "" : n,
            c = e.t6Type,
            l = void 0 === c ? "" : c,
            u = e.faceType,
            d = void 0 === u ? "" : u,
            m = e.title,
            f = void 0 === m ? "" : m,
            h = e.memberPas,
            p = void 0 === h ? [] : h,
            g = e.doFaceCheckAction,
            v = void 0 === g ? function () {} : g,
            Z = e.doTextCheckAction,
            N = void 0 === Z ? function () {} : Z,
            w = e.onClickCheckPage,
            b = void 0 === w ? function () {} : w,
            y = e.onClickShowInfo,
            C = void 0 === y ? function () {} : y,
            x = e.onChangePassenger,
            V = void 0 === x ? function () {} : x,
            k = e.ubtTrace,
            T = e.pageId;
          return (
            (0, r.useEffect)(
              function () {
                (null == p ? void 0 : p.length) > 0 &&
                  k("TZWBuyDarkCert_ChoosePassenger_exposure", { PageId: T });
              },
              [p]
            ),
            (0, o.tZ)(a.View, {
              className: "train-dark-components-check-face-box",
              children:
                t &&
                (0, o.BX)(a.View, {
                  className: "white-box import-result face-box-position",
                  children: [
                    "d" === l &&
                      (0, o.tZ)(a.View, {
                        className:
                          "top-tag " + (i.default.isTieyou ? "ty" : "zx"),
                        children: "方式1",
                      }),
                    !1,
                    (0, o.tZ)(a.View, {
                      className: "center-title",
                      children: f,
                    }),
                    "d" !== l &&
                      (0, o.tZ)(a.View, {
                        className: "center-title-desc",
                        children: "认证仅需10s，下次无需再认证",
                      }),
                    (0, o.BX)(a.View, {
                      className:
                        "result-anim " + (i.default.isTieyou ? "ty" : "zx"),
                      children: [
                        (0, o.tZ)(a.View, { className: "screen-light" }),
                        (0, o.tZ)(a.View, {
                          className: "screen-avatar",
                          children: (0, o.tZ)(a.View, {
                            className: "screen-line",
                          }),
                        }),
                      ],
                    }),
                    (0, o.BX)(a.View, {
                      className: "txt",
                      children: [
                        "请确认是12306账号本人：",
                        (0, o.tZ)(a.Text, {
                          className: "gray-txt",
                          children: s,
                        }),
                        (null == p ? void 0 : p.length) > 0 &&
                          (0, o.tZ)(a.Text, {
                            className: "color-primary change-pas",
                            id: "AgAb",
                            onClick: V,
                            children: "不是该账号？",
                          }),
                      ],
                    }),
                    5 == d &&
                      (0, o.BX)(a.View, {
                        className:
                          "btn-linear " + (i.default.isTieyou ? "ty" : "zx"),
                        id: "AgAc",
                        onClick: v,
                        children: [
                          (0, o.tZ)(a.View, {
                            className: "btnName",
                            children: "同意协议并开始认证",
                          }),
                          (0, o.tZ)(a.View, {
                            className: "btnDesc",
                            children: "同意将重置您的12306密码",
                          }),
                        ],
                      }),
                    3 == d &&
                      (0, o.BX)(a.View, {
                        className:
                          "btn-linear " + (i.default.isTieyou ? "ty" : "zx"),
                        id: "AgAd",
                        onClick: v,
                        children: [
                          (0, o.tZ)(a.View, {
                            className: "btnName",
                            children: "同意协议并开始认证",
                          }),
                          (0, o.tZ)(a.View, {
                            className: "btnDesc",
                            children: "验证成功将为您注销原账号",
                          }),
                        ],
                      }),
                    5 != d &&
                      3 != d &&
                      (0, o.tZ)(a.Button, {
                        className:
                          "btn-linear " + (i.default.isTieyou ? "ty" : "zx"),
                        id: "AgAe",
                        onClick: v,
                        children: "同意协议并开始认证",
                      }),
                    ("f|m" === l || "d" === l) &&
                      (0, o.tZ)(a.Button, {
                        className:
                          "btn-light " + (i.default.isTieyou ? "ty" : "zx"),
                        id: "AgAf",
                        onClick: N,
                        children: "无法刷脸，切换短信验证",
                      }),
                    (0, o.BX)(a.View, {
                      className: "txt-info tgrey",
                      children: [
                        "开始认证代表已阅读并同意",
                        (0, o.tZ)(a.Text, {
                          className: "color-green",
                          id: "AgAg",
                          onClick: b,
                          children: "认证协议",
                        }),
                        5 == d &&
                          (0, o.BX)(a.View, {
                            className: "txt-need-know tgrey",
                            id: "AgAh",
                            onClick: C,
                            children: [
                              "重置须知",
                              (0, o.tZ)(a.Text, {
                                className: "ifont-detail iconfont",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            })
          );
        });
      },
      95953: function (e, t, n) {
        var i = n(90129),
          a = n(79792),
          r = n(71515),
          o = (n(92954), n(52500)),
          s = n(48813);
        t.Z = o.default.memo(function (e) {
          var t = e.show,
            n = e.mobile,
            c = e.confirm,
            l = void 0 === c ? function () {} : c,
            u = (0, o.useState)(""),
            d = (0, i.Z)(u, 2),
            m = d[0],
            f = d[1];
          return (0, s.tZ)(r.View, {
            className: "train-dark-components-findback-12306-password-box",
            children:
              t &&
              (0, s.BX)(r.View, {
                className: "white-box note-box",
                children: [
                  (0, s.BX)(r.View, {
                    class: "tag",
                    children: [
                      (0, s.tZ)(r.Text, { children: "方式一" }),
                      "仅需完成一次",
                    ],
                  }),
                  (0, s.tZ)(r.Icon, { className: "icon-phone" }),
                  (0, s.tZ)(r.View, {
                    className: "tit",
                    children: "12306已将验证码发送".concat(n),
                  }),
                  (0, s.tZ)(r.Input, {
                    type: "text",
                    className: "input-txt",
                    onInput: function (e) {
                      f(e.detail.value);
                    },
                    placeholder: "请输入12306回复的验证码",
                    value: m,
                    placeholderClass: "input-pld",
                  }),
                  (0, s.BX)(r.Button, {
                    className: "btn-submit btn-primary ".concat(
                      a.default.isBaidu ? "swan" : ""
                    ),
                    id: "AgAi",
                    onClick: function () {
                      l(m);
                    },
                    children: [
                      "确定",
                      (0, s.tZ)(r.Text, {
                        className: "t",
                        children: "将重置您的12306密码",
                      }),
                    ],
                  }),
                ],
              }),
          });
        });
      },
      46112: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return w;
          },
        });
        var i = n(79301),
          a = n(95308),
          r = n(57042),
          o = n(24460),
          s = n(79038),
          c = n(59772),
          l = n(21867),
          u = n(86066),
          d = n(45023),
          m = n(298),
          f = n(41991),
          h = n(94190),
          p = n(96158),
          g = n(79910),
          v = n(49120),
          Z = n(92954),
          N = {
            state: {},
            reducers: {
              update: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, m.Z)((0, m.Z)({}, e), t);
              },
            },
          },
          w = (function (e) {
            (0, l.Z)(n, e);
            var t = (0, u.Z)(n);
            function n() {
              return (0, r.Z)(this, n), t.apply(this, arguments);
            }
            return (
              (0, o.Z)(n, null, [
                {
                  key: "create",
                  value: function (e) {
                    var t = this;
                    (0, s.Z)((0, c.Z)(n), "create", this).call(this, e);
                    var r = !0,
                      o = e.componentDidMount;
                    e.componentDidMount = (0, a.Z)(
                      (0, i.Z)().mark(function n() {
                        return (0, i.Z)().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                t.initMy12306FromStore(),
                                  null == o || o.call(e),
                                  (r = !1);
                              case 3:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })
                    );
                    var l = e.componentDidShow;
                    return (
                      (e.componentDidShow = (0, a.Z)(
                        (0, i.Z)().mark(function n() {
                          return (0, i.Z)().wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  if (!r) {
                                    n.next = 2;
                                    break;
                                  }
                                  return n.abrupt("return");
                                case 2:
                                  t.initMy12306FromStore(),
                                    null == l || l.call(e);
                                case 4:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        })
                      )),
                      this.getInstance()
                    );
                  },
                },
                {
                  key: "initMy12306FromStore",
                  value: function () {
                    var e = (0, Z.getStorageSync)("TRAIN_BOOK_STORE").bind12306;
                    this.getDispatch().my12306Model.update(
                      (0, m.Z)(
                        (0, m.Z)({ logedin: e ? 1 : 0 }, e || {}),
                        {},
                        {
                          login12306Name: (null == e ? void 0 : e.name) || "",
                          login12306Pas: (null == e ? void 0 : e.pwd) || "",
                          shownLogin12306Name:
                            (null == e ? void 0 : e.inputUserName) ||
                            (null == e ? void 0 : e.name) ||
                            "",
                          passengerList12306:
                            (null == e ? void 0 : e.passengerList12306) || [],
                          memberStatus12306:
                            (null == e ? void 0 : e.memberStatus12306) || "-1",
                          auth12306Status:
                            "0" === (null == e ? void 0 : e.memberStatus12306)
                              ? 1
                              : -1,
                          userName12306: null == e ? void 0 : e.userName12306,
                        }
                      )
                    );
                  },
                },
                {
                  key: "is12306LoginIn",
                  value: function () {
                    var e;
                    return !(
                      null === (e = this.getState().my12306Model) ||
                      void 0 === e ||
                      !e.logedin
                    );
                  },
                },
                {
                  key: "checkLoginStatus",
                  value: (function () {
                    var e = (0, a.Z)(
                      (0, i.Z)().mark(function e() {
                        var t,
                          n,
                          a,
                          r,
                          o,
                          s,
                          c,
                          l = arguments;
                        return (0, i.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      l.length > 0 && void 0 !== l[0]
                                        ? l[0]
                                        : {}),
                                    (n = t.needRefresh),
                                    (a = void 0 !== n && n),
                                    (e.prev = 1),
                                    this.is12306LoginIn())
                                  ) {
                                    e.next = 7;
                                    break;
                                  }
                                  return (
                                    (e.next = 5),
                                    null === (r = this.getPage()) ||
                                    void 0 === r
                                      ? void 0
                                      : r.navigateToAsync({
                                          url: "/pages/12306/login/login",
                                          data: {
                                            skinType: this.getPage().skinType,
                                          },
                                        })
                                  );
                                case 5:
                                  return (
                                    (o = e.sent),
                                    e.abrupt("return", { code: o.code })
                                  );
                                case 7:
                                  if (!a) {
                                    e.next = 10;
                                    break;
                                  }
                                  return (
                                    (e.next = 10),
                                    (0, p.Mm)(
                                      this.getState().my12306Model
                                        .userName12306 ||
                                        this.getState().my12306Model
                                          .login12306Name,
                                      this.getState().my12306Model.login12306Pas
                                    )
                                  );
                                case 10:
                                  return e.abrupt("return", { code: 1 });
                                case 13:
                                  if (
                                    ((e.prev = 13),
                                    (e.t0 = e.catch(1)),
                                    null === e.t0 ||
                                      void 0 === e.t0 ||
                                      !e.t0.Code)
                                  ) {
                                    e.next = 24;
                                    break;
                                  }
                                  return (
                                    (0, v.showToast)(
                                      "信息已过期，请重新登录12306~"
                                    ),
                                    (e.next = 19),
                                    g.Z.awaitTime(1e3)
                                  );
                                case 19:
                                  return (
                                    6 === e.t0.Code &&
                                      h.WG.removeAsync("bind12306"),
                                    (e.next = 22),
                                    null === (s = this.getPage()) ||
                                    void 0 === s
                                      ? void 0
                                      : s.navigateToAsync({
                                          url: "/pages/12306/login/login",
                                          data: {
                                            skinType: this.getPage().skinType,
                                          },
                                        })
                                  );
                                case 22:
                                  return (
                                    (c = e.sent),
                                    e.abrupt("return", { code: c.code })
                                  );
                                case 24:
                                  return e.abrupt("return", { code: -1 });
                                case 25:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 13]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "refreshLoginStatus",
                  value: (function () {
                    var e = (0, a.Z)(
                      (0, i.Z)().mark(function e() {
                        var t;
                        return (0, i.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.checkLoginStatus({ needRefresh: !0 })
                                  );
                                case 2:
                                  if (
                                    ((t = e.sent),
                                    this.initMy12306FromStore(),
                                    1 === (null == t ? void 0 : t.code))
                                  ) {
                                    e.next = 6;
                                    break;
                                  }
                                  throw { code: "33333", loginResult: t };
                                case 6:
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
              n
            );
          })(f.Z);
        (0, d.Z)(w, "store", { models: { my12306Model: N } });
      },
    },
  ]);
})();
