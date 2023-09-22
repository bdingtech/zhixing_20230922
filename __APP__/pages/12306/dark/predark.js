!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/dc0cfe7c36c66175a01e7585a0cfebf3.js"),
    require("../sub-common/023c833735f89bfd8e4bfa6050ae7715.js"),
    require("../sub-common/e7b20424ff0b9e8dc0703854964a056e.js"),
    require("../sub-common/2f4258ed5a4ca32b95d250730b3c6637.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [5556],
      {
        32211: function (e, t, a) {
          var n,
            r = a(32180),
            i = a(79301),
            o = a(298),
            c = a(95308),
            s = a(57042),
            u = a(24460),
            l = a(21867),
            d = a(86066),
            f = a(52500),
            p = a(92954),
            h = a(71515),
            m = a(81957),
            g = a(94190),
            w = a(3205),
            b = a(96158),
            v = a(97939),
            N = a(49120),
            y = a(79910),
            Z = a(58676),
            k = a(79792),
            x = a(34229),
            T = a(33410),
            C = a(9416),
            _ = a(37817),
            I = a(90129),
            B = a(48813),
            S = f.default.memo(function (e) {
              var t = (0, f.useState)(""),
                a = (0, I.Z)(t, 2),
                n = a[0],
                r = a[1],
                i = e.show,
                o = void 0 !== i && i,
                c = e.mobile,
                s = e.verify,
                u = void 0 === s ? function () {} : s,
                l = e.sendMessageCode,
                d = void 0 === l ? function () {} : l;
              return o
                ? (0, B.BX)(h.View, {
                    className: "train-dark-component-text-verify-box-new",
                    children: [
                      (0, B.tZ)(h.View, {
                        className: "text-verify-title",
                        children: "手机号核验",
                      }),
                      (0, B.BX)(h.View, {
                        className: "text-verify-desc",
                        children: [
                          (0, B.BX)(h.View, {
                            className: "desc-item",
                            children: [
                              (0, B.tZ)(h.Text, {
                                className: "circle-index",
                                children: "1",
                              }),
                              "使用手机号",
                              c,
                              "发送短信",
                            ],
                          }),
                          (0, B.BX)(h.View, {
                            className: "desc-item",
                            children: [
                              (0, B.tZ)(h.Text, {
                                className: "circle-index",
                                children: "2",
                              }),
                              "在10分钟内输入验证码，并「提交核验」",
                            ],
                          }),
                        ],
                      }),
                      (0, B.BX)(h.View, {
                        className: "sms-banner",
                        children: [
                          "发送短信666到12306",
                          (0, B.tZ)(h.View, {
                            className: "sms-action ".concat(
                              k.default.isTieyou ? "ty" : "zx"
                            ),
                            id: "AgAt",
                            onClick: d,
                            children: "发送短信",
                          }),
                        ],
                      }),
                      (0, B.tZ)(h.View, {
                        className: "msg-input",
                        children: (0, B.tZ)(h.Input, {
                          type: "text",
                          className: "input-txt",
                          value: n,
                          placeholder: "请输入验证码",
                          "placeholder-class": "input-plc",
                          onInput: function (e) {
                            var t = e.detail.value;
                            r(t);
                          },
                        }),
                      }),
                      (0, B.tZ)(h.View, {
                        className: "bottom-tip",
                        children: "* 每个用户1天仅能获取3次手机核验短信验证码",
                      }),
                      (0, B.tZ)(h.Button, {
                        className:
                          "btn-linear confirm-btn " +
                          (k.default.isTieyou ? "ty" : "zx"),
                        id: "AgAu",
                        onClick: function () {
                          if (!n) return (0, N.showToast)("请先输入验证码~");
                          u(n);
                        },
                        children: "提交核验",
                      }),
                    ],
                  })
                : null;
            }),
            V = a(95953),
            P = f.default.memo(function (e) {
              var t = e.orderInfo,
                a = void 0 === t ? null : t;
              return a
                ? (0, B.tZ)(h.View, {
                    className: "train-dark-components-order-info-simple-box",
                    children: (0, B.BX)(h.View, {
                      className: "white-box order-box",
                      children: [
                        (0, B.BX)(h.View, {
                          className: "order-hd",
                          children: [
                            (0, B.tZ)(h.View, {
                              className: "tit",
                              children: "行程信息",
                            }),
                            (0, B.tZ)(h.View, {
                              className: "txt",
                              children: "账号认证后立即出票",
                            }),
                          ],
                        }),
                        (0, B.BX)(h.View, {
                          className: "order-bd",
                          children: [
                            (0, B.BX)(h.View, {
                              className: "top-box",
                              children: [
                                (0, B.tZ)(h.View, {
                                  className: "tit",
                                  children: ""
                                    .concat(a.fromStation, "-")
                                    .concat(a.toStation),
                                }),
                                (0, B.tZ)(h.View, {
                                  className: "info",
                                  children: a.passengerStr,
                                }),
                              ],
                            }),
                            (0, B.BX)(h.View, {
                              className: "txt",
                              children: [a.fromDate, "出发"],
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, B.tZ)(h.View, {});
            }),
            A = a(33432),
            E = f.default.memo(function (e) {
              var t = e.show,
                a = e.data,
                n = e.className,
                r = void 0 === n ? "" : n,
                i = e.tagName,
                o = void 0 === i ? "" : i;
              if (!t || y.Z.isEmptyObject(a)) return null;
              var c = a.icon,
                s = a.title,
                u = a.subTitle,
                l = a.buttonName,
                d = a.tag,
                f = a.buttonType,
                p = a.shareType,
                m = a.onButtonClick,
                g = void 0 === m ? function () {} : m;
              return (0,
              B.BX)(h.View, { className: "train-common-banner ".concat(k.default.isTieyou ? "ty" : "zx", " ").concat(r), children: [o && (0, B.tZ)(A.Z, { tagName1: o }), (0, B.BX)(h.View, { className: "train-common-banner-container", children: [(0, B.tZ)(h.Image, { src: c, className: "icon-logo" }), (0, B.BX)(h.View, { className: "cont", children: [(0, B.tZ)(h.View, { className: "tit", children: (0, B.tZ)(x.ZtRichText, { space: "nbsp", nodes: y.Z.convertAppTextToHtmlStr(s) }) }), u && (0, B.tZ)(h.View, { className: "sub-tit", children: (0, B.tZ)(x.ZtRichText, { space: "nbsp", nodes: y.Z.convertAppTextToHtmlStr(u) }) })] }), (0, B.BX)(h.View, { className: "right-area", children: [d && (0, B.tZ)(h.View, { className: "button-tag", children: (0, B.tZ)(x.ZtRichText, { space: "nbsp", nodes: y.Z.convertAppTextToHtmlStr(d) }) }), "share" == f ? (0, B.tZ)(h.Button, { className: "banner-button bd-1rpx", openType: "share", "data-type": p, children: l }) : (0, B.tZ)(h.View, { className: "banner-button bd-1rpx", id: "AAEl", onClick: g, children: l })] })] })] });
            }),
            F = f.default.memo(function (e) {
              var t = e.show,
                a = e.data,
                n = e.tagName,
                r = e.pageType,
                i = e.ubtTrace,
                c = void 0 === i ? function () {} : i;
              if (
                ((0, f.useEffect)(
                  function () {
                    t &&
                      a &&
                      c("s_trn_z_trace_10650075390", {
                        exposureType: "normal",
                        bizKey: "z_mini_block_help_friend_show",
                        type: r,
                      });
                  },
                  [t, a]
                ),
                !t || !a)
              )
                return (0, B.tZ)(h.View, {});
              var s = (0, o.Z)(
                (0, o.Z)({}, a),
                {},
                {
                  tag: a.priceTag,
                  buttonType: "share",
                  shareType: "friendBuy",
                  buttonStyle: "line",
                }
              );
              return (0,
              B.tZ)(E, { show: t, data: s, className: "predark-invite-friendBuy-box", tagName: n });
            }),
            O = {
              UNKNOWN: 0,
              MESSAGE_LOGIN: 1,
              FACE_LOGIN: 2,
              RESET_PASSWORD: 3,
            },
            X =
              (0, m.h)()(
                (n = (function (e) {
                  (0, l.Z)(a, e);
                  var t = (0, d.Z)(a);
                  function a() {
                    var e;
                    return (
                      (0, s.Z)(this, a),
                      ((e = t.call(this)).pageId = "10650075390"),
                      (e.state = {
                        pageType: O.UNKNOWN,
                        extraInfo: null,
                        productInfo: null,
                        inviteFriendBuyInfo: null,
                        authPageInfo: null,
                        userName12306: "",
                        password12306: "",
                        realName12306: "",
                        mobile12306: "",
                        faceCheckFlag: 0,
                        orderInfo: null,
                        createOrderParams: null,
                      }),
                      e
                    );
                  }
                  return (
                    (0, u.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e() {
                              var t, a, n, r, c, s;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (a = (0, p.getCurrentInstance)()
                                            .router.params),
                                          console.log("predark init params", a),
                                          (n = a.data),
                                          (r =
                                            null === (t = g.WG.get()) ||
                                            void 0 === t
                                              ? void 0
                                              : t.bind12306),
                                          (c =
                                            null == n
                                              ? void 0
                                              : n.productInfos[0]),
                                          this.setState({
                                            pageType: O[n.type] || O.UNKNOWN,
                                            extraInfo: n.extraInfo,
                                            productInfo: y.Z.isEmptyObject(c)
                                              ? null
                                              : c,
                                            inviteFriendBuyInfo:
                                              null == n
                                                ? void 0
                                                : n.unSaleProductInfos[0],
                                            userName12306:
                                              null == r ? void 0 : r.name,
                                            password12306:
                                              null == r ? void 0 : r.pwd,
                                            realName12306:
                                              null == r
                                                ? void 0
                                                : r.realName12306,
                                            mobile12306:
                                              null == r
                                                ? void 0
                                                : r.mobilePhone12306,
                                            authPageInfo: n.authPageInfo,
                                            orderInfo: (0, o.Z)(
                                              {},
                                              n.orderInfo
                                            ),
                                            createOrderParams:
                                              n.createOrderParams,
                                          }),
                                          (e.next = 8),
                                          this.getCanFaceFlag()
                                        );
                                      case 8:
                                        (s = e.sent),
                                          this.setState({ faceCheckFlag: s }),
                                          console.log(this.state.faceCheckFlag);
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
                        key: "onActionSuccess",
                        value: function (e) {
                          var t;
                          this.navigateBack({
                            success: !0,
                            userName12306: this.state.userName12306,
                            password12306: this.state.password12306,
                            productId: e || "",
                            treasureGoodsInfo: e
                              ? null === (t = this.state.productInfo) ||
                                void 0 === t
                                ? void 0
                                : t.treasureGoodsInfo
                              : null,
                          });
                        },
                      },
                      {
                        key: "getCanFaceFlag",
                        value: (function () {
                          var e = (0, c.Z)(
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
                                          (0, v.rG)()
                                        );
                                      case 3:
                                        return (
                                          (t = e.sent), e.abrupt("return", t)
                                        );
                                      case 7:
                                        return (
                                          (e.prev = 7),
                                          (e.t0 = e.catch(0)),
                                          e.t0 instanceof Error
                                            ? console.log(e.t0.message)
                                            : console.log(JSON.stringify(e.t0)),
                                          e.abrupt("return", 0)
                                        );
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 7]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onClickCheckPage",
                        value: function () {
                          var e = k.default.isTieyou
                            ? "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1002"
                            : "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1003";
                          w.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "findBackPasswordStep2",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var a,
                                n,
                                r,
                                s = this;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (this.state.extraInfo) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 2:
                                        (0, N.showLoading)("请稍候..."),
                                          (a = this.state.extraInfo),
                                          (n = (0, v.aO)(6)),
                                          (r = {
                                            smsVerificationCode: t,
                                            confirmType: 1,
                                            userName: "",
                                            newPassword: n,
                                            confirmPassword: n,
                                            mobileNo: a.mobile,
                                            idCardType: a.idCardType,
                                            pollingKey: a.pollingKey,
                                            idCardNo: a.idCardNo,
                                          }),
                                          (0, v.Lf)(r)
                                            .then(
                                              (0, c.Z)(
                                                (0, i.Z)().mark(function e() {
                                                  var t,
                                                    r,
                                                    c,
                                                    u,
                                                    l,
                                                    d,
                                                    f,
                                                    p,
                                                    h,
                                                    m,
                                                    g,
                                                    w,
                                                    y;
                                                  return (0, i.Z)().wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              s.ubtDevTrace(
                                                                "o_train_wechat_dark_type",
                                                                {
                                                                  func: "confirmFindBackPassword",
                                                                  result:
                                                                    "success",
                                                                  findBackPwdInfo:
                                                                    (0, o.Z)(
                                                                      (0, o.Z)(
                                                                        {},
                                                                        a
                                                                      ),
                                                                      {},
                                                                      {
                                                                        newPassword:
                                                                          n,
                                                                      }
                                                                    ),
                                                                }
                                                              ),
                                                              s.setState({
                                                                password12306:
                                                                  n,
                                                              }),
                                                              (e.next = 4),
                                                              (0, v.L5)({
                                                                UserName:
                                                                  a.mobile,
                                                                Password: n,
                                                                Channel:
                                                                  "zhixing",
                                                              }).catch(
                                                                function (e) {
                                                                  s.ubtDevTrace(
                                                                    "o_dark_fail",
                                                                    {
                                                                      func: "confirmFindBackPassword_login",
                                                                      result:
                                                                        "fail",
                                                                      findBackPwdInfo:
                                                                        a,
                                                                      e: e,
                                                                    }
                                                                  ),
                                                                    (0,
                                                                    N.hideLoading)(),
                                                                    !e ||
                                                                    (7 !==
                                                                      e.Code &&
                                                                      9 !=
                                                                        e.Code)
                                                                      ? e &&
                                                                        8 ===
                                                                          e.Code &&
                                                                        s.setState(
                                                                          {
                                                                            pageType:
                                                                              O.FACE_LOGIN,
                                                                          }
                                                                        )
                                                                      : s.setState(
                                                                          {
                                                                            pageType:
                                                                              O.MESSAGE_LOGIN,
                                                                          }
                                                                        );
                                                                }
                                                              )
                                                            );
                                                          case 4:
                                                            if ((t = e.sent)) {
                                                              e.next = 8;
                                                              break;
                                                            }
                                                            return (
                                                              (0, N.showToast)(
                                                                "找回密码失败"
                                                              ),
                                                              e.abrupt("return")
                                                            );
                                                          case 8:
                                                            (r =
                                                              t.PassengerList),
                                                              (c =
                                                                void 0 === r
                                                                  ? []
                                                                  : r),
                                                              (u =
                                                                t.MemberStatus),
                                                              (l =
                                                                void 0 === u
                                                                  ? ""
                                                                  : u),
                                                              (d =
                                                                t.IDCardNumber),
                                                              (f =
                                                                void 0 === d
                                                                  ? ""
                                                                  : d),
                                                              (p = t.RealName),
                                                              (h =
                                                                void 0 === p
                                                                  ? ""
                                                                  : p),
                                                              (m =
                                                                t.MobilePhone),
                                                              (g =
                                                                void 0 === m
                                                                  ? ""
                                                                  : m),
                                                              (w =
                                                                t.UserID12306),
                                                              (y = [
                                                                {
                                                                  userName:
                                                                    (void 0 ===
                                                                    w
                                                                      ? ""
                                                                      : w) ||
                                                                    a.mobile,
                                                                  loginPW: n,
                                                                  passengerListJSON:
                                                                    JSON.stringify(
                                                                      c
                                                                    ),
                                                                  memberStatus:
                                                                    l,
                                                                  iDCardNumber:
                                                                    f,
                                                                  realName: h,
                                                                  mobile: g,
                                                                  inputUserName:
                                                                    g,
                                                                },
                                                              ]),
                                                              b.Tq.call(s, y),
                                                              b.CZ.call(s),
                                                              (0,
                                                              N.hideLoading)(),
                                                              s.ubtDevTrace(
                                                                "o_train_wechat_dark_type",
                                                                {
                                                                  func: "confirmFindBackPassword",
                                                                  result:
                                                                    "success",
                                                                }
                                                              ),
                                                              s.onActionSuccess();
                                                          case 15:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e
                                                  );
                                                })
                                              )
                                            )
                                            .catch(function (e) {
                                              (0,
                                              N.showToast)(e.resultMessage || "找回密码失败");
                                            });
                                      case 7:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t) {
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
                                : {};
                          return new Promise(function (a, n) {
                            var r;
                            (r = "/pages/12306/face/face?userName="
                              .concat(t.userName, "&password=")
                              .concat(
                                encodeURIComponent(t.passWord),
                                "&fromType=",
                                4,
                                "&failAction="
                              )
                              .concat(t.failAction)),
                              e.navigateTo({
                                url: r,
                                callback: function (e) {
                                  var t = (e || {}).certificationResultCode;
                                  1 === t ? a(e) : 2 === t && n(e);
                                },
                              });
                          });
                        },
                      },
                      {
                        key: "doFaceCheckAction",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.userName12306,
                            n = t.password12306;
                          this.toFaceCheck({
                            userName: a,
                            passWord: n,
                            failAction: "return",
                          })
                            .then(function () {
                              e.onActionSuccess();
                            })
                            .catch(function (t) {
                              e.ubtDevTrace("o_train_wechat_dark_type", {
                                func: "face_login",
                                result: "fail",
                                response: t,
                              }),
                                (0, N.showToast)({
                                  title: "认证失败，请稍后重试",
                                  icon: "none",
                                  duration: 1e3,
                                });
                            });
                        },
                      },
                      {
                        key: "doTextCheckAction",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            a = this.state,
                            n = a.userName12306,
                            r = a.password12306;
                          (0, N.showLoading)(),
                            (0, v.Dq)({
                              UserName: n,
                              Password: r,
                              Channel: k.default.isTieyou
                                ? "tieyou"
                                : "zhixing",
                              VerifyCode: t,
                            })
                              .then(
                                (0, c.Z)(
                                  (0, i.Z)().mark(function t() {
                                    return (0, i.Z)().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            if (r) {
                                              t.next = 2;
                                              break;
                                            }
                                            return t.abrupt("return");
                                          case 2:
                                            return (
                                              (t.next = 4),
                                              (0, v.L5)({
                                                UserName: n,
                                                Password: r,
                                                Channel: k.default.isTieyou
                                                  ? "tieyou"
                                                  : "zhixing",
                                              }).catch(function (t) {
                                                e.ubtDevTrace("o_dark_fail", {
                                                  func: "doTextCheckAction_login",
                                                  result: "fail",
                                                  e: t,
                                                });
                                              })
                                            );
                                          case 4:
                                            if (t.sent) {
                                              t.next = 8;
                                              break;
                                            }
                                            return (
                                              (0, N.showToast)("找回密码失败"),
                                              t.abrupt("return")
                                            );
                                          case 8:
                                            e.onActionSuccess();
                                          case 9:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                )
                              )
                              .catch(function (t) {
                                e.ubtDevTrace("o_train_wechat_dark_type", {
                                  func: "text_login",
                                  result: "fail",
                                  response: t,
                                }),
                                  (0, N.showToast)({
                                    title: "认证失败，请稍后重试",
                                    icon: "none",
                                    duration: 1e3,
                                  });
                              })
                              .finally(function () {
                                return (0, N.hideLoading)();
                              });
                        },
                      },
                      {
                        key: "sendMessageCode",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t =
                              "/pages/train/smsWebview/index?smsNumber=12306&smsCode=".concat(
                                e
                              );
                          this.navigateTo({ url: t });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function (e) {
                          var t = this;
                          if ("friendBuy" === e.target.dataset.type) {
                            var a = {
                              title: "Hi,可以帮我用".concat(
                                k.default.isTieyou ? "铁友" : "智行",
                                "买张火车票吗？十万火急~"
                              ),
                              path: "/pages/train/friendbuy/index",
                              imageUrl: k.default.isTieyou
                                ? "https://images3.c-ctrip.com/ztrip/train_xie/2021-10/WeChat/img_help_t.png"
                                : "https://images3.c-ctrip.com/ztrip/train_xie/2021-10/WeChat/img_help.png",
                            };
                            if (this.friendBuyShareKey)
                              return (0, o.Z)(
                                (0, o.Z)({}, a),
                                {},
                                {
                                  path: "/pages/train/friendbuy/index?shareKey=".concat(
                                    encodeURIComponent(this.friendBuyShareKey)
                                  ),
                                }
                              );
                            var n = new Promise(function (e) {
                              var n = t.state.createOrderParams;
                              (0, N.showLoading)(),
                                (0, C.Qo)(n)
                                  .then(function (n) {
                                    n && 1 == n.resultCode && n.shareKey
                                      ? (t.ubtTrace("c_trn_z_10650075390", {
                                          bizKey:
                                            "z_mini_block_help_friend_click",
                                          type: t.state.pageType,
                                        }),
                                        (t.friendBuyShareKey = n.shareKey),
                                        e(
                                          (0, o.Z)(
                                            (0, o.Z)({}, a),
                                            {},
                                            {
                                              path: "/pages/train/friendbuy/index?shareKey=".concat(
                                                encodeURIComponent(n.shareKey)
                                              ),
                                            }
                                          )
                                        ))
                                      : e(a);
                                  })
                                  .catch(function () {
                                    e(a);
                                  })
                                  .finally(function () {
                                    return (0, N.hideLoading)();
                                  });
                            });
                            return (0, o.Z)(
                              (0, o.Z)({}, a),
                              {},
                              { promise: n }
                            );
                          }
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.pageType,
                            n = t.productInfo,
                            r = t.inviteFriendBuyInfo,
                            i = t.authPageInfo,
                            o = t.extraInfo,
                            c = t.orderInfo,
                            s = t.realName12306,
                            u = t.mobile12306;
                          return (0, B.BX)(h.View, {
                            children: [
                              (0, B.BX)(h.View, {
                                className: "wrap ".concat(
                                  k.default.isTieyou ? "ty" : "zx"
                                ),
                                children: [
                                  (0, B.BX)(h.View, {
                                    className: "wrap-ct",
                                    children: [
                                      (0, B.BX)(h.View, {
                                        className: "top-title",
                                        children: [
                                          (0, B.tZ)(h.View, {
                                            className: "top-title-img",
                                          }),
                                          (0, B.tZ)(h.View, {
                                            className: "top-title-tit",
                                            children: (0, B.tZ)(x.ZtRichText, {
                                              className: "top-title-tit",
                                              nodes:
                                                null == i
                                                  ? void 0
                                                  : i.titleDesc,
                                            }),
                                          }),
                                          (0, B.tZ)(h.View, {
                                            className: "top-title-txt",
                                            children: (0, B.tZ)(x.ZtRichText, {
                                              className: "top-title-txt",
                                              nodes:
                                                null == i ? void 0 : i.desc,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, B.BX)(h.View, {
                                        className: "top-box",
                                        children: [
                                          (0, B.tZ)(A.Z, {
                                            tagName1: "方式一",
                                            tagName2: "仅需完成一次",
                                            className: "predark-double-tag-1",
                                          }),
                                          (0, B.tZ)(S, {
                                            show: a == O.MESSAGE_LOGIN,
                                            mobile: u,
                                            verify: function (t) {
                                              e.doTextCheckAction(t);
                                            },
                                            sendMessageCode: function () {
                                              e.sendMessageCode("666");
                                            },
                                          }),
                                          (0, B.tZ)(_.Z, {
                                            show: a == O.FACE_LOGIN,
                                            title: "请完成人证信息认证",
                                            faceCheckName: s,
                                            t6Type: "f",
                                            faceType: 4,
                                            doFaceCheckAction: function () {
                                              e.doFaceCheckAction();
                                            },
                                            onClickCheckPage: function () {
                                              e.onClickCheckPage();
                                            },
                                          }),
                                          (0, B.tZ)(V.Z, {
                                            show: a == O.RESET_PASSWORD,
                                            mobile:
                                              null == o ? void 0 : o.mobile,
                                            confirm: function (t) {
                                              e.findBackPasswordStep2(t);
                                            },
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, B.tZ)(h.View, {
                                    className: "second-box",
                                    children: (0, B.BX)(h.View, {
                                      className: "second-box-ct",
                                      children: [
                                        (0, B.tZ)(T.Z, {
                                          show: n,
                                          productInfo: n,
                                          confirm: function () {
                                            e.onActionSuccess(n.productId);
                                          },
                                          ubtTrace: this.ubtTrace,
                                          className:
                                            "train-pre-dark-new-force-bind-box",
                                          tagName: "方式二",
                                        }),
                                        (0, B.tZ)(F, {
                                          show: !!r,
                                          data: r,
                                          tagName: y.Z.isEmptyObject(n)
                                            ? "方式二"
                                            : "方式三",
                                          pageType: a,
                                          ubtTrace: this.ubtTrace,
                                        }),
                                        (0, B.tZ)(P, { orderInfo: c }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, B.tZ)(Z.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(f.default.Component))
              ) || n;
          (X.enableShareAppMessage = !0),
            Page(
              (0, r.createPageConfig)(
                X,
                "pages/12306/dark/predark",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "",
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#0066E6",
                  backgroundColorBottom: "#EFEFEF",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            37013, 77, 30120, 8905, 55490, 17463, 46495, 22341, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(32211);
          }
        ),
          e.O();
      },
    ]);
})();
