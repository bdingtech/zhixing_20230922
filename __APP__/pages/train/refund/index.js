!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [55027],
      {
        73418: function (e, t, s) {
          var i,
            a = s(32180),
            n = s(90129),
            r = s(79301),
            o = s(298),
            c = s(95308),
            l = s(57042),
            u = s(24460),
            d = s(81876),
            h = s(21867),
            p = s(86066),
            f = s(45023),
            m = s(52500),
            g = s(92954),
            y = s.n(g),
            v = s(71515),
            w = s(81957),
            T = s(79792),
            N = s(79910),
            k = s(25391),
            b = s(49120),
            x = s(21294),
            C = s(18783),
            R = s(96158),
            Z = s(3205),
            _ = s(10741),
            S = s(97939),
            I = s(52740),
            P = s(48813),
            z = ["af", "f43"],
            V =
              (0, w.h)()(
                (i = (function (e) {
                  (0, h.Z)(s, e);
                  var t = (0, p.Z)(s);
                  function s() {
                    var e, i, a, n, r, o, c, u, h, p, m;
                    return (
                      (0, l.Z)(this, s),
                      (m = t.call(this)),
                      (0, f.Z)((0, d.Z)(m), "pageId", "10650060597"),
                      (0, f.Z)((0, d.Z)(m), "workflow", ""),
                      (m.state = {
                        departDate: "",
                        faceType: 6,
                        fromStation: "",
                        isShowPassword: !1,
                        isTieyou: T.default.isTieyou,
                        loid: "",
                        messageCode: "",
                        mobile: "",
                        oid: "",
                        pageType: "",
                        pasName: "",
                        passportCode: "",
                        passportType: "",
                        password: "",
                        registerPassword: "",
                        registerUserName: "",
                        toStation: "",
                        trainNo: "",
                        userAccount: "",
                        accountUserRealName: "",
                        accountMobile: "",
                        accountPassportType: "",
                        accountPassportNumber: "",
                      }),
                      (m.needCheck = !z.includes(
                        null === (e = (0, g.getCurrentInstance)().router) ||
                          void 0 === e ||
                          null === (i = e.params) ||
                          void 0 === i
                          ? void 0
                          : i.failCode
                      )),
                      (m.isReschedule =
                        "1" ===
                        (null === (a = (0, g.getCurrentInstance)().router) ||
                        void 0 === a ||
                        null === (n = a.params) ||
                        void 0 === n
                          ? void 0
                          : n.isReschedule)),
                      (m.sceneType = m.isReschedule ? "resign" : "refund"),
                      (m.isSelfResign =
                        null === (r = (0, g.getCurrentInstance)().router) ||
                        void 0 === r ||
                        null === (o = r.params) ||
                        void 0 === o
                          ? void 0
                          : o.isSelfResign),
                      (m.isSelfReslove =
                        "1" ===
                          (null === (c = (0, g.getCurrentInstance)().router) ||
                          void 0 === c ||
                          null === (u = c.params) ||
                          void 0 === u
                            ? void 0
                            : u.isSelfResign) ||
                        !(
                          null !== (h = (0, g.getCurrentInstance)().router) &&
                          void 0 !== h &&
                          null !== (p = h.params) &&
                          void 0 !== p &&
                          p.isSelfResign
                        )),
                      (m.isAccountReslove = !m.isSelfReslove),
                      m.setShareType(),
                      y().hideShareMenu(),
                      m
                    );
                  }
                  return (
                    (0, u.Z)(s, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          console.log("onLoad"),
                                          (t =
                                            (0, g.getCurrentInstance)()
                                              .router &&
                                            (0, g.getCurrentInstance)().router
                                              .params),
                                          Object.keys(t).forEach(function (e) {
                                            t[e] =
                                              "passportCode" === e
                                                ? x.Z.tripleDESDecrypt(
                                                    decodeURIComponent(
                                                      t[e] || ""
                                                    )
                                                  )
                                                : decodeURIComponent(
                                                    t[e] || ""
                                                  );
                                          }),
                                          console.log("params", t),
                                          (e.next = 6),
                                          this.setStateSync(
                                            (0, o.Z)(
                                              (0, o.Z)({}, t),
                                              {},
                                              {
                                                userAccount: this
                                                  .isAccountReslove
                                                  ? t.account12306Name ||
                                                    t.accountMobile
                                                  : t.mobile,
                                              }
                                            )
                                          )
                                        );
                                      case 6:
                                        (this.refundRequestKey = ""),
                                          (this.refundInterval = 0),
                                          (this.refundTotalPollingTime = 0),
                                          (this.opType = t.failCode || ""),
                                          (this.onInputPasswordDebounce =
                                            N.Z.debounce(
                                              this.onInputPassword,
                                              300
                                            )),
                                          this.judgeIsFaceScene();
                                      case 12:
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
                        key: "componentDidShow",
                        value: function () {
                          this.needCheck && this.checkRegisterInfo();
                        },
                      },
                      {
                        key: "setShareType",
                        value: function () {
                          this.isReschedule
                            ? (this.shareTypeName = "改签")
                            : (this.shareTypeName = "退票");
                        },
                      },
                      {
                        key: "setStateSync",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (s) {
                            t.setState(e, s);
                          });
                        },
                      },
                      {
                        key: "judgeIsFaceScene",
                        value: function () {
                          if (z.includes(this.opType)) {
                            this.setStateSync({
                              pageType: "face",
                              faceType: { af: 7, f43: 8 }[this.opType],
                            }),
                              (this.workflow = this.opType),
                              this.ubtTrace("s_trn_z_trace_10650008849", {
                                bizKey: "d_face_pop_show",
                                orderid: this.state.oid,
                                failCode: this.opType,
                                realFailCode: this.workflow,
                                sceneType: this.sceneType,
                                isSelfResign: this.isSelfResign,
                              });
                          }
                        },
                      },
                      {
                        key: "checkRegisterInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, s, i, a, n, o, c;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!this.isAccountReslove) {
                                          e.next = 3;
                                          break;
                                        }
                                        return (
                                          this.setState({ pageType: "login" }),
                                          e.abrupt("return")
                                        );
                                      case 3:
                                        return (
                                          (this.workflow = I.hA.REGISTER),
                                          (e.next = 6),
                                          this.getRegisterResult()
                                        );
                                      case 6:
                                        (t =
                                          y().getStorageSync("userInfo") || {}),
                                          (s = t.UserName),
                                          (i = void 0 === s ? "" : s),
                                          (a = t.Password),
                                          (n = void 0 === a ? "" : a),
                                          (o =
                                            this.state.firstRegisterInfo
                                              .registerStatus),
                                          (c = "login"),
                                          2 === (void 0 === o ? 0 : o) &&
                                            ((c = "register"),
                                            (this.workflow = I.hA.MSG_VERIFY),
                                            this.ubtTrace(
                                              "s_trn_z_trace_10650008849",
                                              {
                                                bizkey: "d_text_pop_show",
                                                orderid: this.state.oid,
                                                failCode: this.state.opType,
                                                realFailCode: this.workflow,
                                                sceneType: this.sceneType,
                                                isSelfResign: this.isSelfResign,
                                              }
                                            )),
                                          this.setState({
                                            pageType: c,
                                            registerUserName: i,
                                            registerPassword: n,
                                          });
                                      case 11:
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
                        key: "getRefundTicketInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                s,
                                i,
                                a,
                                n,
                                o,
                                c,
                                l,
                                u,
                                d,
                                h,
                                p,
                                f,
                                m,
                                g,
                                v,
                                w,
                                T = this,
                                N = arguments;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            N.length > 0 && void 0 !== N[0]
                                              ? N[0]
                                              : {}),
                                          (s = t.requestKey),
                                          (i = void 0 === s ? "" : s),
                                          (a = this.shareTypeName),
                                          (e.prev = 2),
                                          !(
                                            this.refundInterval >
                                            this.refundTotalPollingTime
                                          ))
                                        ) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          (0, b.hideLoading)(),
                                          (this.refundInterval = 0),
                                          (this.refundTotalPollingTime = 0),
                                          y().showToast({
                                            title: "尝试".concat(
                                              a,
                                              "超时，请重试"
                                            ),
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 9:
                                        return (
                                          (n = this.state),
                                          (o = n.oid),
                                          (c = void 0 === o ? "" : o),
                                          (l = n.loid),
                                          (u = {
                                            orderNumber: c,
                                            longEleNumber: l,
                                          }),
                                          i &&
                                            Object.assign(u, { requestKey: i }),
                                          (0, b.showLoading)(
                                            "获取".concat(a, "信息")
                                          ),
                                          (e.next = 15),
                                          (0, _.pZr)(u)
                                        );
                                      case 15:
                                        1 === (d = e.sent).resultCode &&
                                          ((h = d.requestKey),
                                          (p = d.resultStatusCode),
                                          (f = d.retryMaxTimes),
                                          (m = void 0 === f ? 3 : f),
                                          (g = d.retryIntervalSeconds),
                                          (v = void 0 === g ? 1 : g),
                                          h && (this.refundRequestKey = h),
                                          1 === p
                                            ? ((!v || v <= 0) && (v = 1),
                                              (!m || m <= 0) && (m = 10),
                                              (this.refundTotalPollingTime = m),
                                              (this.refundInterval += 1),
                                              (w = setTimeout(function () {
                                                clearTimeout(w),
                                                  T.getRefundTicketInfo({
                                                    requestKey:
                                                      T.refundRequestKey,
                                                  });
                                              }, 1e3 * v)))
                                            : 2 === p
                                            ? ((0, b.hideLoading)(),
                                              (this.refundInterval = 0),
                                              (this.refundTotalPollingTime = 0),
                                              this.setState({
                                                pageType: "success",
                                              }))
                                            : 3 === p
                                            ? ((0, b.hideLoading)(),
                                              (this.refundInterval = 0),
                                              (this.refundTotalPollingTime = 0),
                                              y().showModal({
                                                title: "温馨提示",
                                                content: "获取".concat(
                                                  a,
                                                  "信息失败,建议重新尝试"
                                                ),
                                                confirmText: "确认",
                                                confirmColor: this.state
                                                  .isTieyou
                                                  ? "#fc6e51"
                                                  : "#0080FF",
                                                showCancel: !0,
                                                cancelText: "取消",
                                                cancelColor: "#999999",
                                                success: function (e) {
                                                  e.confirm &&
                                                    T.getRefundTicketInfo();
                                                },
                                              }))
                                            : ((0, b.hideLoading)(),
                                              (this.refundInterval = 0),
                                              (this.refundTotalPollingTime = 0))),
                                          (e.next = 25);
                                        break;
                                      case 19:
                                        (e.prev = 19),
                                          (e.t0 = e.catch(2)),
                                          (0, b.hideLoading)(),
                                          (this.refundInterval = 0),
                                          (this.refundTotalPollingTime = 0),
                                          console.log(e.t0);
                                      case 25:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 19]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getRescheduleTicketInfo",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                s,
                                i,
                                a,
                                n,
                                o,
                                c,
                                l,
                                u,
                                d,
                                h,
                                p,
                                f,
                                m,
                                g,
                                v,
                                w,
                                T = this,
                                N = arguments;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            N.length > 0 && void 0 !== N[0]
                                              ? N[0]
                                              : {}),
                                          (s = t.requestKey),
                                          (i = void 0 === s ? "" : s),
                                          (a = this.shareTypeName),
                                          (e.prev = 2),
                                          !(
                                            this.refundInterval >
                                            this.refundTotalPollingTime
                                          ))
                                        ) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          (0, b.hideLoading)(),
                                          (this.refundInterval = 0),
                                          (this.refundTotalPollingTime = 0),
                                          y().showToast({
                                            title: "尝试".concat(
                                              a,
                                              "超时，请重试"
                                            ),
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 9:
                                        return (
                                          (n = this.state),
                                          (o = n.oid),
                                          (c = void 0 === o ? "" : o),
                                          (l = n.loid),
                                          (u = {
                                            orderNumber: c,
                                            longEleNumber: l,
                                          }),
                                          i &&
                                            Object.assign(u, { requestKey: i }),
                                          (0, b.showLoading)(
                                            "获取".concat(a, "信息")
                                          ),
                                          (e.next = 15),
                                          (0, _.Jrt)(u)
                                        );
                                      case 15:
                                        1 === (d = e.sent).resultCode &&
                                          ((h = d.requestKey),
                                          (p = d.resultStatusCode),
                                          (f = d.retryMaxTimes),
                                          (m = void 0 === f ? 3 : f),
                                          (g = d.retryIntervalSeconds),
                                          (v = void 0 === g ? 1 : g),
                                          h && (this.refundRequestKey = h),
                                          1 === p
                                            ? ((!v || v <= 0) && (v = 1),
                                              (!m || m <= 0) && (m = 10),
                                              (this.refundTotalPollingTime = m),
                                              (this.refundInterval += 1),
                                              (w = setTimeout(function () {
                                                clearTimeout(w),
                                                  T.getRescheduleTicketInfo({
                                                    requestKey:
                                                      T.refundRequestKey,
                                                  });
                                              }, 1e3 * v)))
                                            : 2 === p
                                            ? ((0, b.hideLoading)(),
                                              (this.refundInterval = 0),
                                              (this.refundTotalPollingTime = 0),
                                              this.setState({
                                                pageType: "success",
                                              }))
                                            : 3 === p
                                            ? ((0, b.hideLoading)(),
                                              (this.refundInterval = 0),
                                              (this.refundTotalPollingTime = 0),
                                              y().showModal({
                                                title: "温馨提示",
                                                content: "获取".concat(
                                                  a,
                                                  "信息失败,建议重新尝试"
                                                ),
                                                confirmText: "确认",
                                                confirmColor: this.state
                                                  .isTieyou
                                                  ? "#fc6e51"
                                                  : "#0080FF",
                                                showCancel: !0,
                                                cancelText: "取消",
                                                cancelColor: "#999999",
                                                success: function (e) {
                                                  e.confirm &&
                                                    T.getRescheduleTicketInfo();
                                                },
                                              }))
                                            : ((0, b.hideLoading)(),
                                              (this.refundInterval = 0),
                                              (this.refundTotalPollingTime = 0))),
                                          (e.next = 25);
                                        break;
                                      case 19:
                                        (e.prev = 19),
                                          (e.t0 = e.catch(2)),
                                          (0, b.hideLoading)(),
                                          (this.refundInterval = 0),
                                          (this.refundTotalPollingTime = 0),
                                          console.log(e.t0);
                                      case 25:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 19]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getRegisterResult",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, s, i, a, n, o, c;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (0, b.showLoading)("校验中..."),
                                          (t = this.state),
                                          (s = t.mobile),
                                          (i = t.pasName),
                                          (a = t.passportCode),
                                          (n = t.passportType),
                                          (o = k.ZP.getRealType(n)),
                                          (e.next = 6),
                                          (0, S.Cg)({
                                            type: o,
                                            userName: i,
                                            idNumber: a,
                                            mobile: s,
                                          })
                                        );
                                      case 6:
                                        return (
                                          (c = e.sent),
                                          (e.next = 9),
                                          this.setStateSync({
                                            firstRegisterInfo: c,
                                          })
                                        );
                                      case 9:
                                        this.ubtTrace("c_trn_z_10650008849", {
                                          bizkey: "d_register_result",
                                          orderid: this.state.oid,
                                          failCode: this.state.opType,
                                          realFailCode: this.workflow,
                                          sceneType: this.sceneType,
                                          isSelfResign: this.isSelfResign,
                                          result:
                                            2 == c.registerStatus ? "1" : "0",
                                          failReason: c.retMessage,
                                          errorInfo: c,
                                        }),
                                          (e.next = 17);
                                        break;
                                      case 12:
                                        return (
                                          (e.prev = 12),
                                          (e.t0 = e.catch(0)),
                                          (e.next = 16),
                                          this.setStateSync({
                                            firstRegisterInfo: {},
                                          })
                                        );
                                      case 16:
                                        console.log(e.t0);
                                      case 17:
                                        return (
                                          (e.prev = 17),
                                          (0, b.hideLoading)(),
                                          e.finish(17)
                                        );
                                      case 20:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 12, 17, 20]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "_login12306",
                        value: function () {
                          var e = this.state,
                            t = e.userAccount,
                            s = e.password;
                          this.login(t, s);
                        },
                      },
                      {
                        key: "login",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t, s) {
                              var i,
                                a,
                                n,
                                o,
                                c,
                                l,
                                u,
                                d,
                                h,
                                p,
                                f,
                                m,
                                g,
                                v,
                                w,
                                T,
                                N,
                                x,
                                C,
                                Z,
                                _ = this,
                                P = arguments;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i =
                                            !(
                                              P.length > 2 && void 0 !== P[2]
                                            ) || P[2]),
                                          (0, b.showLoading)("登录中..."),
                                          (this.workflow = I.hA.LOGIN_ACCOUNT),
                                          (e.prev = 3),
                                          (a = this.state),
                                          (n = a.passportType),
                                          (o = a.passportCode),
                                          (c = a.accountPassportType),
                                          (l = a.accountPassportNumber),
                                          (e.next = 7),
                                          (0, S.L5)({
                                            UserName: t,
                                            Password: s,
                                            accountPassportType: this
                                              .isSelfReslove
                                              ? k.ZP.getRealType(n)
                                              : k.ZP.getRealType(c),
                                            passportCode: this.isSelfReslove
                                              ? o
                                              : l,
                                            Channel: "WX",
                                          })
                                        );
                                      case 7:
                                        (u = e.sent),
                                          (0, b.hideLoading)(),
                                          (d = u.PassengerList),
                                          (h = void 0 === d ? [] : d),
                                          (p = u.MemberStatus),
                                          (f = void 0 === p ? "" : p),
                                          (m = u.IDCardNumber),
                                          (g = void 0 === m ? "" : m),
                                          (v = u.RealName),
                                          (w = void 0 === v ? "" : v),
                                          (T = u.MobilePhone),
                                          (N = void 0 === T ? "" : T),
                                          (x = u.UserID12306),
                                          (Z = [
                                            {
                                              userName:
                                                (C = void 0 === x ? "" : x) ||
                                                t,
                                              loginPW: s,
                                              passengerListJSON:
                                                JSON.stringify(h),
                                              memberStatus: f,
                                              iDCardNumber: g,
                                              realName: w,
                                              mobile: N,
                                              inputUserName: t,
                                            },
                                          ]),
                                          R.Tq.call(this, Z),
                                          R.CZ.call(this),
                                          this.ubtTrace("c_trn_z_10650008849", {
                                            bizKey: "d_silent_sign_result",
                                            orderid: this.state.oid,
                                            failCode: this.opType,
                                            realFailCode: this.workflow,
                                            sceneType: this.sceneType,
                                            isSelfResign: this.isSelfResign,
                                            result: "1",
                                            failReason: "",
                                            errorInfo: "",
                                          }),
                                          (this.needCheck = !1),
                                          i &&
                                            ((this.workflow = this.opType),
                                            this.setState({
                                              faceType: 6,
                                              pageType: "face",
                                              notifyName: C || t,
                                              notifyPassword: s,
                                            }),
                                            this.ubtTrace(
                                              "s_trn_z_trace_10650008849",
                                              {
                                                bizKey: "d_face_pop_show",
                                                orderid: this.state.oid,
                                                failCode: this.opType,
                                                realFailCode: this.workflow,
                                                sceneType: this.sceneType,
                                                isSelfResign: this.isSelfResign,
                                              }
                                            )),
                                          (e.next = 23);
                                        break;
                                      case 18:
                                        (e.prev = 18),
                                          (e.t0 = e.catch(3)),
                                          (0, b.hideLoading)(),
                                          this.ubtTrace("c_trn_z_10650008849", {
                                            bizKey: "d_silent_sign_result",
                                            orderid: this.state.oid,
                                            failCode: this.opType,
                                            realFailCode: this.workflow,
                                            sceneType: this.sceneType,
                                            isSelfResign: this.isSelfResign,
                                            result: "0",
                                            failReason:
                                              (null === e.t0 || void 0 === e.t0
                                                ? void 0
                                                : e.t0.mesage) || "",
                                            errorInfo: e.t0,
                                          }),
                                          e.t0 && 7 === e.t0.Code
                                            ? ((this.needCheck = !1),
                                              (this.workflow = I.hA.MESSAGE),
                                              this.goto12306H5({
                                                pageName: "verify",
                                                mobile: this.state.mobile,
                                                userAccount: t,
                                                passWord: s,
                                                notifyName: t,
                                                notifyPassword: s,
                                                cb: function () {
                                                  _.ubtTrace(
                                                    "c_trn_z_10650008849",
                                                    {
                                                      bizKey:
                                                        "d_text_pop_click_result",
                                                      orderid: _.state.oid,
                                                      failCode: _.opType,
                                                      realFailCode: _.workflow,
                                                      sceneType: _.sceneType,
                                                      isSelfResign:
                                                        _.isSelfResign,
                                                      result: 0,
                                                      failReason: "",
                                                      errorInfo: "",
                                                    }
                                                  );
                                                },
                                              }),
                                              this.ubtTrace(
                                                "s_trn_z_trace_10650008849",
                                                {
                                                  bizKey: "d_text_pop_show",
                                                  orderid: this.state.oid,
                                                  failCode: this.opType,
                                                  realFailCode: this.workflow,
                                                  sceneType: this.sceneType,
                                                  isSelfResign:
                                                    this.isSelfResign,
                                                }
                                              ))
                                            : !e.t0 ||
                                              (8 !== e.t0.Code &&
                                                9 !== e.t0.Code)
                                            ? (this.setData({ showType: "" }),
                                              y().showToast({
                                                title:
                                                  (e.t0 && e.t0.Message) ||
                                                  "校验失败",
                                                icon: "none",
                                                duration: 1e3,
                                              }))
                                            : ((this.needCheck = !1),
                                              (this.needRetryLogin = !0),
                                              (this.workflow =
                                                I.hA.FACE_VERIFY),
                                              this.setState({
                                                pageType: "face",
                                                faceType: 6,
                                                notifyName: t,
                                                notifyPassword: s,
                                              }),
                                              this.ubtTrace(
                                                "s_trn_z_trace_10650008849",
                                                {
                                                  bizKey: "d_face_pop_show",
                                                  orderid: this.state.oid,
                                                  failCode: this.opType,
                                                  realFailCode: this.workflow,
                                                  sceneType: this.sceneType,
                                                  isSelfResign:
                                                    this.isSelfResign,
                                                }
                                              ));
                                      case 23:
                                        return (e.prev = 23), e.finish(23);
                                      case 25:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[3, 18, 23, 25]]
                              );
                            })
                          );
                          return function (t, s) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onInputPassword",
                        value: function (e) {
                          var t = e.detail.value;
                          this.setState({ password: t });
                        },
                      },
                      {
                        key: "onInputUserAccount",
                        value: function (e) {
                          var t = e.detail.value;
                          this.setState({ userAccount: t });
                        },
                      },
                      {
                        key: "switchPassword",
                        value: function () {
                          this.setState({
                            isShowPassword: !this.state.isShowPassword,
                          });
                        },
                      },
                      {
                        key: "goto12306H5",
                        value: function (e) {
                          var t = this,
                            s = e.pageName,
                            i = void 0 === s ? "" : s,
                            a = e.userAccount,
                            o = void 0 === a ? "" : a,
                            l = e.passWord,
                            u = void 0 === l ? "" : l,
                            d = e.mobile,
                            h = void 0 === d ? "" : d,
                            p = e.accountName,
                            f = void 0 === p ? "" : p,
                            m = e.initUserNameFlag,
                            g = void 0 === m ? "1" : m,
                            y = e.cb,
                            v = (function () {
                              var e = (0, c.Z)(
                                (0, r.Z)().mark(function e(s) {
                                  var i, a, o, c, l, u;
                                  return (0, r.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            (console.log(
                                              "refund webviewCB e = ",
                                              s
                                            ),
                                            null == y || y(s),
                                            Array.isArray(s.detail.data))
                                          ) {
                                            e.next = 5;
                                            break;
                                          }
                                          return (
                                            (t.needCheck = !0),
                                            e.abrupt("return")
                                          );
                                        case 5:
                                          (i = (0, n.Z)(s.detail.data, 1)),
                                            (a = i[0]),
                                            (o = a.userName),
                                            (c = void 0 === o ? "" : o),
                                            (l = a.loginPW),
                                            (u = void 0 === l ? "" : l),
                                            t.login(c, u);
                                        case 7:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })(),
                            w = "https://"
                              .concat(
                                T.default.h5domain,
                                "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                              )
                              .concat(T.default.partner, "#/")
                              .concat(i, "?partner=")
                              .concat(
                                T.default.partner,
                                "&fromPage=orderdetail&userName="
                              )
                              .concat(o, "&loginPW=")
                              .concat(u, "&mobile=")
                              .concat(h, "&accountName=")
                              .concat(f, "&initUserNameFlag=")
                              .concat(g, "&password=")
                              .concat(u);
                          Z.Z.twebview({ data: { url: w, bridgeIns: v } });
                        },
                      },
                      {
                        key: "faceCheck",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, s, i, a, n, o, c, l, u, d, h, p, f;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state),
                                          (s = t.faceType),
                                          (i = t.notifyName),
                                          (a = t.notifyPassword),
                                          (n = t.pasName),
                                          (o = t.passportType),
                                          (c = t.passportCode),
                                          (l = t.mobile),
                                          (u = t.accountUserRealName),
                                          (d = t.accountPassportType),
                                          (h = t.accountPassportNumber),
                                          (p = t.accountMobile),
                                          (f = { faceType: s }),
                                          ![7, 8].includes(s))
                                        ) {
                                          e.next = 9;
                                          break;
                                        }
                                        if (C.ZP.isLogin) {
                                          e.next = 6;
                                          break;
                                        }
                                        return (e.next = 6), C.ZP.doLogin();
                                      case 6:
                                        (f.certificationInfo = this
                                          .isSelfReslove
                                          ? {
                                              name: n,
                                              passportType: k.ZP.getRealType(o),
                                              passportNumber: c,
                                              mobile: l || C.ZP.userName,
                                            }
                                          : {
                                              name: u,
                                              passportType: k.ZP.getRealType(d),
                                              passportNumber: h,
                                              mobile: p || C.ZP.userName,
                                            }),
                                          (e.next = 10);
                                        break;
                                      case 9:
                                        (f.notifyName = i),
                                          (f.notifyPassword = a);
                                      case 10:
                                        this.toFaceCheck(f),
                                          this.ubtTrace("c_trn_z_10650008849", {
                                            bizKey: "d_face_pop_click",
                                            orderid: this.state.oid,
                                            failCode: this.opType,
                                            realFailCode: this.workflow,
                                            sceneType: this.sceneType,
                                            isSelfResign: this.isSelfResign,
                                            result: "刷脸",
                                          });
                                      case 12:
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
                        key: "toFaceCheck",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            s = t.faceType,
                            i = void 0 === s ? 6 : s,
                            a = t.notifyName,
                            n = void 0 === a ? "" : a,
                            o = t.notifyPassword,
                            l = void 0 === o ? "" : o,
                            u = t.certificationInfo,
                            d = t.failAction,
                            h = void 0 === d ? "return" : d,
                            p = t.returnLogoutResult,
                            f = void 0 === p ? 1 : p,
                            m = this.state.isTieyou,
                            g = [7, 8].includes(i)
                              ? "/pages/12306/face/face?userName="
                                  .concat(n, "&fromType=")
                                  .concat(i, "&returnLogoutResult=")
                                  .concat(f, "&certificationInfo=")
                                  .concat(JSON.stringify(u), "&failAction=")
                                  .concat(h)
                              : "/pages/12306/face/face?userName="
                                  .concat(n, "&fromType=")
                                  .concat(i, "&password=")
                                  .concat(encodeURIComponent(l)),
                            v = {
                              faceType: i,
                              notifyName: n,
                              notifyPassword: l,
                              certificationInfo: u,
                              failAction: h,
                              returnLogoutResult: f,
                            };
                          this.navigateTo({
                            url: g,
                            callback: (function () {
                              var t = (0, c.Z)(
                                (0, r.Z)().mark(function t(s) {
                                  var a, o, c;
                                  return (0, r.Z)().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (
                                            ((o = (a = s || {})
                                              .certificationResultCode),
                                            (c = a.retMessage),
                                            e.ubtTrace("c_trn_z_10650008849", {
                                              bizKey: "d_face_pop_click_result",
                                              orderid: e.state.oid,
                                              failCode: e.opType,
                                              realFailCode: e.workflow,
                                              sceneType: e.sceneType,
                                              isSelfResign: e.isSelfResign,
                                              result: 1 === o ? 1 : 0,
                                              failReason: c,
                                              faceType: i,
                                            }),
                                            1 !== o)
                                          ) {
                                            t.next = 11;
                                            break;
                                          }
                                          if (
                                            ((e.workflow = e.opType),
                                            !e.needRetryLogin)
                                          ) {
                                            t.next = 8;
                                            break;
                                          }
                                          return (
                                            (e.needRetryLogin = !1),
                                            (t.next = 8),
                                            e.login(n, l, !1)
                                          );
                                        case 8:
                                          e.notify({
                                            resultCode: 1,
                                            failMsg: "".concat(
                                              1 === i
                                                ? "人脸核验成功"
                                                : "人脸解封成功"
                                            ),
                                          }),
                                            (t.next = 12);
                                          break;
                                        case 11:
                                          2 === o &&
                                            setTimeout(function () {
                                              y().showModal({
                                                title: "温馨提示",
                                                content: c || "核验失败",
                                                confirmText: "继续尝试",
                                                cancelText: "取消",
                                                showCancel: !0,
                                                confirmColor: m
                                                  ? "#fc6e51"
                                                  : "#0080FF",
                                                success: function (t) {
                                                  t.confirm && e.toFaceCheck(v);
                                                },
                                              });
                                            }, 500);
                                        case 12:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          });
                        },
                      },
                      {
                        key: "notify",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var s,
                                i,
                                a,
                                n,
                                o,
                                c,
                                l,
                                u,
                                d,
                                h,
                                p = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (s = t.resultCode),
                                          (i = void 0 === s ? 0 : s),
                                          (a = t.failMsg),
                                          (n = void 0 === a ? "" : a),
                                          (e.prev = 1),
                                          (o = this.state),
                                          (c = o.notifyName),
                                          (l = o.notifyPassword),
                                          (u = o.oid),
                                          (d = {}),
                                          "a" === this.opType
                                            ? ((h = k.ZP.encode12306Account({
                                                login12306Name: c,
                                                login12306Pas: l,
                                              })),
                                              (d = {
                                                orderNumber: u,
                                                loginName: c,
                                                password: h.login12306Pas,
                                                operateType: this.opType,
                                                operateResult: i,
                                                failMsg: n,
                                              }))
                                            : (d = {
                                                orderNumber: u,
                                                loginName: c,
                                                operateType: this.opType,
                                                operateResult: i,
                                                failMsg: n,
                                              }),
                                          (e.next = 7),
                                          (0, _.BWQ)(d)
                                        );
                                      case 7:
                                        setTimeout(function () {
                                          p.isReschedule
                                            ? p.getRescheduleTicketInfo()
                                            : p.getRefundTicketInfo();
                                        }, 800),
                                          (this.opType = ""),
                                          (this.needCheck = !0),
                                          (e.next = 17);
                                        break;
                                      case 12:
                                        (e.prev = 12),
                                          (e.t0 = e.catch(1)),
                                          (this.needCheck = !0),
                                          (this.opType = ""),
                                          console.log(e.t0);
                                      case 17:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 12]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "sendMessage",
                        value: function () {
                          this.navigateTo({
                            url: "/pages/train/smsWebview/index?smsNumber=12306&smsCode=999",
                            callback: function () {},
                          });
                        },
                      },
                      {
                        key: "onClickServicePage",
                        value: function () {
                          var e = this.state.isTieyou
                            ? "https://pages.ctrip.com/ztrip/document/privacypolicy.html?noticetype=0"
                            : "https://pages.ctrip.com/ztrip/document/privacypolicyzx.html?noticetype=0";
                          Z.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "onClickCheckPage",
                        value: function () {
                          var e = this.state.isTieyou
                            ? "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1002"
                            : "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1003";
                          Z.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "register",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, s, i, a, n, o, c, l;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state),
                                          (s = t.firstRegisterInfo),
                                          (i = t.messageCode),
                                          (a = s.registerKey),
                                          i)
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        y().showToast({
                                          title: "请先输入验证码哦～",
                                          icon: "none",
                                          duration: 2e3,
                                        }),
                                          (e.next = 21);
                                        break;
                                      case 6:
                                        return (
                                          (e.prev = 6),
                                          (0, b.showLoading)("注册中..."),
                                          (e.next = 10),
                                          (0, S.Dd)({
                                            registerKey: a,
                                            verificationCode: i,
                                          })
                                        );
                                      case 10:
                                        (n = e.sent),
                                          this.ubtTrace("c_trn_z_10650008849", {
                                            bizkey: "d_text_pop_click_result",
                                            orderid: this.state.oid,
                                            failCode: this.state.opType,
                                            realFailCode: this.workflow,
                                            sceneType: this.sceneType,
                                            isSelfResign: this.isSelfResign,
                                            result:
                                              2 === n.registerStatus
                                                ? "1"
                                                : "0",
                                            failReason: n.resultMessage,
                                            errorInfo: n,
                                          }),
                                          n && 2 === n.registerStatus
                                            ? ((o = this.state),
                                              (c = o.registerUserName),
                                              (l = o.registerPassword),
                                              this.login(c, l))
                                            : y().showToast({
                                                title:
                                                  n.resultMessage ||
                                                  "网络开小差，请稍后再试",
                                                icon: "none",
                                                duration: 2e3,
                                              }),
                                          (e.next = 18);
                                        break;
                                      case 15:
                                        (e.prev = 15),
                                          (e.t0 = e.catch(6)),
                                          console.log(e.t0);
                                      case 18:
                                        return (
                                          (e.prev = 18),
                                          (0, b.hideLoading)(),
                                          e.finish(18)
                                        );
                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[6, 15, 18, 21]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "retrivePassword",
                        value: function () {
                          (this.needCheck = !1),
                            this.goto12306H5({
                              accountName: this.state.pasName,
                              pageName: "retrievePassword",
                            });
                        },
                      },
                      {
                        key: "onInputMessageCode",
                        value: function (e) {
                          var t = e.detail.value;
                          this.setState({ messageCode: t });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          this.needCheck = !1;
                          var e = this.isReschedule
                            ? {
                                zx: "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/img_gq_zx.png",
                                ty: "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/img_gq_ty.png",
                              }
                            : {
                                zx: "https://images3.c-ctrip.com/ztrip/train_xie/2021-09/WeChat/share_retreat.png",
                                ty: "https://images3.c-ctrip.com/ztrip/train_xie/2021-09/WeChat/share_retreat_t.png",
                              };
                          return {
                            path: k.ZP.getTrainDetailUrl(this.state.oid),
                            imageUrl: T.default.isTieyou ? e.ty : e.zx,
                            title: "我已确认好个人信息，可以继续".concat(
                              this.shareTypeName,
                              "啦~"
                            ),
                          };
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.isTieyou,
                            s = e.departDate,
                            i = e.fromStation,
                            a = e.pasName,
                            n = e.toStation,
                            r = e.trainNo,
                            o = e.pageType,
                            c = e.password,
                            l = e.userAccount,
                            u = e.isShowPassword,
                            d = e.messageCode,
                            h = e.mobile,
                            p = e.accountUserRealName,
                            f = this.shareTypeName,
                            m = this.isAccountReslove ? p : a;
                          return (0, P.BX)(v.View, {
                            children: [
                              (0, P.BX)(v.View, {
                                className: "top-box " + (t ? "ty" : "zx"),
                                children: [
                                  (0, P.BX)(v.View, {
                                    className: "lbox",
                                    children: [
                                      (0, P.tZ)(v.Image, {
                                        src: "https://pic.c-ctrip.com/train/zt/wechat/avatar-default-ty.png",
                                        className: "avatar",
                                      }),
                                      (0, P.tZ)(v.View, {
                                        className: "tag color-primary",
                                        children: "发起人",
                                      }),
                                    ],
                                  }),
                                  (0, P.tZ)(v.View, {
                                    className: "cont",
                                    children: (0, P.BX)(v.View, {
                                      className: "txt",
                                      children: [
                                        "我正在帮「",
                                        a,
                                        "」",
                                        f,
                                        "，",
                                        f,
                                        "前为保障信息安全，需确认",
                                        this.isAccountReslove ? "账号" : "本人",
                                        "信息",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, P.BX)(v.View, {
                                className: "wrap",
                                children: [
                                  (0, P.BX)(v.View, {
                                    className: "white-box order-box",
                                    children: [
                                      (0, P.BX)(v.View, {
                                        className: "from",
                                        children: [
                                          (0, P.tZ)(v.View, {
                                            className: "label",
                                            children: "出发地",
                                          }),
                                          (0, P.tZ)(v.View, {
                                            className: "station",
                                            children: i,
                                          }),
                                        ],
                                      }),
                                      (0, P.BX)(v.View, {
                                        className: "mid",
                                        children: [
                                          (0, P.tZ)(v.View, {
                                            className: "txt",
                                            children: r,
                                          }),
                                          (0, P.BX)(v.View, {
                                            className: "txt",
                                            children: [s, " 出发"],
                                          }),
                                        ],
                                      }),
                                      (0, P.BX)(v.View, {
                                        className: "to",
                                        children: [
                                          (0, P.tZ)(v.View, {
                                            className: "label",
                                            children: "目的地",
                                          }),
                                          (0, P.tZ)(v.View, {
                                            className: "station",
                                            children: n,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  "login" === o &&
                                    (0, P.BX)(v.View, {
                                      className: "white-box login-box",
                                      children: [
                                        (0, P.BX)(v.View, {
                                          className: "login-hd",
                                          children: [
                                            (0, P.tZ)(v.View, {
                                              className: "tit",
                                              children: "请登录12306账号",
                                            }),
                                            (0, P.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                "请登录后验证",
                                                (0, P.tZ)(v.Text, {
                                                  className: "color-red",
                                                  children: m,
                                                }),
                                                "本人信息，并同意",
                                                f,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, P.BX)(v.View, {
                                          className: "input-bd",
                                          children: [
                                            (0, P.tZ)(v.View, {
                                              className: "item",
                                              children: (0, P.tZ)(v.View, {
                                                className: "cont",
                                                children: (0, P.tZ)(v.Input, {
                                                  type: "text",
                                                  className: "input-txt",
                                                  value: l,
                                                  placeholder: "请输入登录账号",
                                                  "placeholder-class":
                                                    "input-plc",
                                                  onInput:
                                                    this.onInputUserAccount,
                                                }),
                                              }),
                                            }),
                                            (0, P.BX)(v.View, {
                                              className: "item",
                                              children: [
                                                (0, P.BX)(v.View, {
                                                  className: "cont",
                                                  children: [
                                                    u &&
                                                      (0, P.tZ)(v.Input, {
                                                        type: "text",
                                                        className: "input-txt",
                                                        value: c,
                                                        placeholder:
                                                          "请输入账号密码",
                                                        "placeholder-class":
                                                          "input-plc",
                                                        onInput:
                                                          this.onInputPassword,
                                                      }),
                                                    !u &&
                                                      (0, P.tZ)(v.Input, {
                                                        type: "password",
                                                        className: "input-txt",
                                                        value: c,
                                                        placeholder:
                                                          "请输入账号密码",
                                                        "placeholder-class":
                                                          "input-plc",
                                                        onInput:
                                                          this.onInputPassword,
                                                      }),
                                                  ],
                                                }),
                                                (0, P.tZ)(v.Text, {
                                                  className: "".concat(
                                                    u
                                                      ? "ifont-eyeopen"
                                                      : "ifont-eyeclosed",
                                                    " iconfont"
                                                  ),
                                                  id: "AKFi",
                                                  onClick: this.switchPassword,
                                                }),
                                              ],
                                            }),
                                            (0, P.tZ)(v.Button, {
                                              className:
                                                "btn-linear " +
                                                (t ? "ty" : "zx"),
                                              id: "AKFj",
                                              onClick: this._login12306,
                                              children: "登录12306",
                                            }),
                                            (0, P.tZ)(v.Button, {
                                              className: "btn-line",
                                              id: "AKFk",
                                              onClick: this.retrivePassword,
                                              children: "忘记账号密码？",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  "face" === o &&
                                    (0, P.BX)(v.View, {
                                      className: "white-box screen-box",
                                      children: [
                                        (0, P.tZ)(v.Icon, {
                                          className:
                                            "icon-screen " + (t ? "ty" : "zx"),
                                        }),
                                        (0, P.tZ)(v.View, {
                                          className: "tit",
                                          children: "需完成刷脸认证",
                                        }),
                                        (0, P.BX)(v.View, {
                                          className: "txt",
                                          children: [
                                            "请确认「",
                                            m,
                                            "」本人，通过后完成",
                                            f,
                                          ],
                                        }),
                                        (0, P.tZ)(v.Button, {
                                          className:
                                            "btn-linear " + (t ? "ty" : "zx"),
                                          id: "AKFl",
                                          onClick: this.faceCheck,
                                          children: "同意协议并开始认证",
                                        }),
                                        (0, P.BX)(v.View, {
                                          className: "txt",
                                          children: [
                                            "开始认证代表已阅读并同意",
                                            (0, P.tZ)(v.Text, {
                                              className: "color-primary",
                                              id: "AKFm",
                                              onClick: this.onClickCheckPage,
                                              children: "认证协议",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  "register" === o &&
                                    (0, P.BX)(v.View, {
                                      className: "white-box register-box",
                                      children: [
                                        (0, P.BX)(v.View, {
                                          className: "register-hd",
                                          children: [
                                            (0, P.tZ)(v.View, {
                                              className: "tit",
                                              children: "请注册12306账号",
                                            }),
                                            (0, P.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                "注册登录后验证",
                                                (0, P.tZ)(v.Text, {
                                                  className: "color-red",
                                                  children: m,
                                                }),
                                                "本人信息，并同意",
                                                f,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, P.BX)(v.View, {
                                          className: "register-bd",
                                          children: [
                                            (0, P.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                (0, P.tZ)(v.Text, {
                                                  className:
                                                    "no " + (t ? "ty" : "zx"),
                                                  children: "1",
                                                }),
                                                "用",
                                                (0, P.tZ)(v.Text, {
                                                  className: "color-red",
                                                  children: h,
                                                }),
                                                "发送短信",
                                                (0, P.tZ)(v.Text, {
                                                  className: "color-red",
                                                  children: "999",
                                                }),
                                                "到12306",
                                              ],
                                            }),
                                            (0, P.tZ)(v.Button, {
                                              className:
                                                "btn-linear " +
                                                (t ? "ty" : "zx"),
                                              id: "AKFn",
                                              onClick: this.sendMessage,
                                              children: "已复制，去发送",
                                            }),
                                            (0, P.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                (0, P.tZ)(v.Text, {
                                                  className:
                                                    "no " + (t ? "ty" : "zx"),
                                                  children: "2",
                                                }),
                                                "填写验证码",
                                              ],
                                            }),
                                            (0, P.BX)(v.View, {
                                              className: "input-bd",
                                              children: [
                                                (0, P.tZ)(v.View, {
                                                  className: "item",
                                                  children: (0, P.tZ)(v.View, {
                                                    className: "cont",
                                                    children: (0, P.tZ)(
                                                      v.Input,
                                                      {
                                                        type: "text",
                                                        className: "input-txt",
                                                        value: d,
                                                        placeholder:
                                                          "请输入验证码",
                                                        "placeholder-class":
                                                          "input-plc",
                                                        onInput:
                                                          this
                                                            .onInputMessageCode,
                                                      }
                                                    ),
                                                  }),
                                                }),
                                                (0, P.tZ)(v.Button, {
                                                  className:
                                                    "btn-linear " +
                                                    (t ? "ty" : "zx"),
                                                  id: "AKFo",
                                                  onClick: this.register,
                                                  disabled: !d,
                                                  children: "注册12306验证",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  "success" === o &&
                                    (0, P.tZ)(v.View, {
                                      className: "white-box result-box",
                                      children: (0, P.BX)(v.View, {
                                        className: "result-bd",
                                        children: [
                                          (0, P.tZ)(v.Text, {
                                            className:
                                              "ifont-suc2 iconfont color-primary",
                                          }),
                                          (0, P.BX)(v.View, {
                                            className: "tit",
                                            children: [
                                              "请通知发起人继续完成",
                                              f,
                                            ],
                                          }),
                                          (0, P.tZ)(v.Button, {
                                            className: "btn ".concat(
                                              T.default.isTieyou ? "ty" : ""
                                            ),
                                            openType: "share",
                                            children: "点击通知好友",
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    s
                  );
                })(m.default.Component))
              ) || i;
          (V.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                V,
                "pages/train/refund/index",
                { root: { cn: [] } },
                {
                  navigationBarTextStyle: "white",
                  navigationBarTitleText: "确认本人信息",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(73418);
        }),
          e.O();
      },
    ]);
})();
