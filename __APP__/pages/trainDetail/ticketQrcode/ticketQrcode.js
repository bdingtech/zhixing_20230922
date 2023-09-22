!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/b3c2309a95e8a51ddd777bd490fa43e7.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [4278],
      {
        67639: function (e, t, n) {
          var a = n(32180),
            r = n(79301),
            i = n(95308),
            o = n(57042),
            c = n(24460),
            l = n(81876),
            s = n(21867),
            u = n(86066),
            d = n(52500),
            f = n(65573),
            m = n(92954),
            p = n.n(m),
            h = n(81957),
            g = n(71515),
            k = n(45023),
            v = n(41991),
            w = n(40852),
            Z = n(298),
            N = {
              state: {
                eTicketNo: "",
                pasName: "",
                accountName: "",
                ticketInfo: null,
                qrCode: "",
                pollingCount: 0,
                authFlag: 0,
              },
              reducers: {
                setETicketNo: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { eTicketNo: t });
                },
                setPasName: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { pasName: t });
                },
                setAccountName: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { accountName: t });
                },
                setTicketInfo: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { ticketInfo: t });
                },
                setQrCode: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { qrCode: t });
                },
                setPollingCount: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { pollingCount: t });
                },
                setAuthFlag: function (e, t) {
                  return (0, Z.Z)((0, Z.Z)({}, e), {}, { authFlag: t });
                },
              },
            },
            x = (function (e) {
              (0, s.Z)(n, e);
              var t = (0, u.Z)(n);
              function n() {
                return (0, o.Z)(this, n), t.apply(this, arguments);
              }
              return (0, c.Z)(n);
            })(v.Z);
          (0, k.Z)(x, "store", {
            models: { my12306Model: w.Z, ticketModel: N },
          });
          var C,
            b = n(74921),
            y = n(79910),
            T = n(10741),
            V = n(49120),
            M = n(79792),
            P = n(97939),
            B = (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e(t) {
                  var n,
                    a,
                    i,
                    o,
                    c,
                    l,
                    s,
                    u,
                    d,
                    f,
                    m,
                    p,
                    h,
                    g,
                    k,
                    v = arguments;
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = v.length > 1 && void 0 !== v[1] ? v[1] : ""),
                              (a = x.getState().my12306Model.userName12306),
                              (i = x.getState().my12306Model.login12306Name),
                              (o = x.getState().ticketModel.accountName),
                              (c = {
                                eTicketNo: t,
                                partnerName: M.default.isTieyou
                                  ? "tieyou"
                                  : "zhixing",
                                width: 220,
                                height: 220,
                                type: a === o || i === o ? 0 : 1,
                                needGenerateQRCode: !0,
                                userName: a,
                                pollingKey: n,
                              }),
                              (e.prev = 5),
                              (0, V.showLoading)("获取乘车码中"),
                              (e.next = 9),
                              (0, T.dhO)(c)
                            );
                          case 9:
                            if (
                              ((l = e.sent),
                              (s = x.getState().ticketModel.pollingCount),
                              (s += 1),
                              x.getDispatch().ticketModel.setPollingCount(s),
                              201 !== (null == l ? void 0 : l.resultCode))
                            ) {
                              e.next = 27;
                              break;
                            }
                            if (
                              ((u =
                                (null == l ? void 0 : l.asycnPollingConfig) ||
                                {}),
                              (d = u.pollingKey),
                              (f = u.intervalSecond),
                              (m = void 0 === f ? 1 : f),
                              (p = u.intervalTotalTimes),
                              (h = void 0 === p ? 10 : p),
                              (g = x.getState().ticketModel.pollingCount),
                              console.log("pollingCount", g),
                              console.log("intervalTotalTimes", h),
                              !(g >= h))
                            ) {
                              e.next = 22;
                              break;
                            }
                            return (
                              x.getDispatch().ticketModel.setPollingCount(0),
                              (0, V.showToast)(
                                l.resultMessage || "请稍候重试~"
                              ),
                              e.abrupt("return")
                            );
                          case 22:
                            return (e.next = 24), y.Z.awaitTime(1e3 * m);
                          case 24:
                            return (e.next = 26), B(t, d);
                          case 26:
                            return e.abrupt("return");
                          case 27:
                            if (
                              ((0, V.hideLoading)(),
                              x.getDispatch().ticketModel.setPollingCount(0),
                              -1 !== (null == l ? void 0 : l.resultCode))
                            ) {
                              e.next = 32;
                              break;
                            }
                            return (
                              (0, V.showToast)(
                                l.resultMessage || "网络错误，请稍候重试~"
                              ),
                              e.abrupt("return")
                            );
                          case 32:
                            if (200 !== (null == l ? void 0 : l.resultCode)) {
                              e.next = 38;
                              break;
                            }
                            if (
                              (console.log("res", l),
                              !(k = l.zxGetTicketQrCodeModel))
                            ) {
                              e.next = 38;
                              break;
                            }
                            return (e.next = 38), D(k);
                          case 38:
                            e.next = 44;
                            break;
                          case 40:
                            return (
                              (e.prev = 40),
                              (e.t0 = e.catch(5)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 44:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 40]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            S = (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e() {
                  var t, n, a, i, o, c;
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = x.getState().ticketModel.authFlag),
                              (n = x.getState().my12306Model.login12306Name),
                              (a = x.getState().my12306Model.login12306Pas),
                              (i = x.getState().ticketModel.pasName),
                              (e.prev = 4),
                              (e.next = 7),
                              (0, P.kx)(
                                {
                                  faceInfo: {
                                    fromType: 1 === t ? 9 : 6,
                                    userName: n,
                                    password: a,
                                    failAction: "return",
                                  },
                                },
                                x.getPage(),
                                { pasName: i }
                              )
                            );
                          case 7:
                            if (
                              ((o = e.sent),
                              1 === (c = o.res).certificationResultCode)
                            ) {
                              e.next = 11;
                              break;
                            }
                            throw c;
                          case 11:
                            I(), (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              console.log("e", e.t0);
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            D = (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e(t) {
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (x
                              .getDispatch()
                              .ticketModel.setTicketInfo(t.ticketInfo),
                            x
                              .getDispatch()
                              .ticketModel.setQrCode(t.qrCode || ""),
                            x.getDispatch().ticketModel.setAuthFlag(t.authFlag),
                            t.qrCode && !x.getPage().timer && $(),
                            !t.authFlag)
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 7), S();
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
            I = (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e() {
                  var t;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(x.getState().ticketModel.pollingCount > 0)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            (t = x.getState().ticketModel.eTicketNo),
                            (e.next = 6),
                            B(t)
                          );
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
          !(function (e) {
            e.CheckTicketCaptionToast = "mini@CheckTicketCaptionToast";
          })(C || (C = {}));
          var X,
            q = [
              "· 将二维码对准检票识读区，进行识别即可进站",
              "· 可能部分车站或闸机不知，请您携带身份证以防万一",
            ],
            _ = ["onConfirm", "onCancel"],
            z = (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e() {
                  var t, n, a, i, o, c, l, s, u, d;
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              null === (t = x.getDispatch().my12306Model) ||
                                void 0 === t ||
                                t.refresh(),
                              (c =
                                null === (n = x.getPage().$instance) ||
                                void 0 === n ||
                                null === (a = n.router) ||
                                void 0 === a
                                  ? void 0
                                  : a.params),
                              console.log("params", c),
                              x
                                .getDispatch()
                                .ticketModel.setETicketNo(
                                  null == c ? void 0 : c.eTicketNo
                                ),
                              x
                                .getDispatch()
                                .ticketModel.setPasName(
                                  null == c ? void 0 : c.pasName
                                ),
                              x
                                .getDispatch()
                                .ticketModel.setAccountName(
                                  null == c ? void 0 : c.accountName
                                ),
                              (l = x.getState().my12306Model.login12306Name),
                              (s = x.getState().my12306Model.userName12306),
                              (u =
                                (null ===
                                  (i =
                                    x.getState().my12306Model.selfPassenger) ||
                                void 0 === i
                                  ? void 0
                                  : i.passengerName) || ""),
                              null !== (o = x.getState().my12306Model) &&
                                void 0 !== o &&
                                o.logedin &&
                                (l === (null == c ? void 0 : c.accountName) ||
                                  s === (null == c ? void 0 : c.accountName) ||
                                  u === (null == c ? void 0 : c.pasName)))
                            ) {
                              e.next = 20;
                              break;
                            }
                            return (e.next = 13), F();
                          case 13:
                            if (((d = e.sent), console.log(), !d)) {
                              e.next = 19;
                              break;
                            }
                            x.getDispatch().my12306Model.refresh(),
                              (e.next = 20);
                            break;
                          case 19:
                            return e.abrupt("return");
                          case 20:
                            return (
                              (e.next = 22), B(null == c ? void 0 : c.eTicketNo)
                            );
                          case 22:
                            e.next = 27;
                            break;
                          case 24:
                            (e.prev = 24),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 27:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 24]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            F = (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e() {
                  var t, n, a, i, o, c;
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = x.getState().ticketModel.pasName),
                              (e.prev = 1),
                              (e.next = 4),
                              x
                                .getPage()
                                .navigateToAsync({
                                  url: "/pages/12306/login/login",
                                  data: {
                                    notice:
                                      "检票二维码限车票本人查看，请登录【".concat(
                                        t,
                                        "】的账号"
                                      ),
                                  },
                                })
                            );
                          case 4:
                            if (
                              ((a = e.sent),
                              (i = a.res),
                              (o = x.getState().ticketModel.accountName),
                              (c =
                                (null ===
                                  (n =
                                    x.getState().my12306Model.selfPassenger) ||
                                void 0 === n
                                  ? void 0
                                  : n.passengerName) || ""),
                              (null == i ? void 0 : i.userName12306) === o ||
                                (null == i ? void 0 : i.name) === o ||
                                c === t)
                            ) {
                              e.next = 22;
                              break;
                            }
                            return (
                              (e.next = 11),
                              x.showMultiButtonDialogWithPromise({
                                content: "请登录".concat(
                                  t,
                                  "本人的账号才能查看乘车码"
                                ),
                                leftButtonName: "取消",
                                rightButtonName: "去登录",
                                maskClose: !1,
                              })
                            );
                          case 11:
                            if ("left" !== e.sent) {
                              e.next = 19;
                              break;
                            }
                            return (e.next = 15), y.Z.awaitTime(500);
                          case 15:
                            return (
                              x.getPage().navigateBack(), e.abrupt("return", !1)
                            );
                          case 19:
                            return (e.next = 21), F();
                          case 21:
                            return e.abrupt("return", e.sent);
                          case 22:
                            return e.abrupt("return", !0);
                          case 25:
                            return (
                              (e.prev = 25),
                              (e.t0 = e.catch(1)),
                              (e.next = 29),
                              y.Z.awaitTime(1e3)
                            );
                          case 29:
                            return (
                              x.getPage().navigateBack(), e.abrupt("return", !1)
                            );
                          case 31:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 25]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            A = (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e(t) {
                  var n, a, i, o;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = (n =
                              "string" == typeof t
                                ? { toast: { toastCode: t } }
                                : t).onConfirm),
                            (i = n.onCancel),
                            (o = (0, b.Z)(n, _)),
                            e.abrupt(
                              "return",
                              new Promise(function (e) {
                                var t;
                                null === (t = x.getPage().$CommonToast) ||
                                  void 0 === t ||
                                  t.showToast(
                                    (0, Z.Z)(
                                      (0, Z.Z)({}, o),
                                      {},
                                      {
                                        onConfirm: function () {
                                          for (
                                            var t = arguments.length,
                                              n = new Array(t),
                                              r = 0;
                                            r < t;
                                            r++
                                          )
                                            n[r] = arguments[r];
                                          null == a || a.apply(void 0, n),
                                            e({ code: 1, data: n });
                                        },
                                        onCancel: function () {
                                          for (
                                            var t = arguments.length,
                                              n = new Array(t),
                                              a = 0;
                                            a < t;
                                            a++
                                          )
                                            n[a] = arguments[a];
                                          null == i || i.apply(void 0, n),
                                            e({ code: 0, data: n });
                                        },
                                      }
                                    )
                                  );
                              })
                            )
                          );
                        case 2:
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
            R = function () {
              A({ toast: { toastCode: C.CheckTicketCaptionToast } });
            },
            $ = function () {
              x.getPage().timer = setInterval(
                (0, i.Z)(
                  (0, r.Z)().mark(function e() {
                    return (0, r.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), I();
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                6e4
              );
            },
            j = function () {
              x.getPage().timer &&
                (clearInterval(x.getPage().timer), (x.getPage().timer = null));
            },
            Q = n(48813),
            E = (0, f.$j)(function (e) {
              return { qrCode: e.ticketModel.qrCode };
            })(function (e) {
              var t = e.qrCode,
                n = t
                  ? "data:image/png;base64,".concat(t)
                  : "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_ewm_kt.webp";
              return (0,
              Q.tZ)(g.View, { className: "train-detail-ticket-qrcode-content", children: (0, Q.tZ)(g.View, { className: "qrcode-content", children: (0, Q.tZ)(g.Image, { className: "no-data-img", webp: !0, src: n }) }) });
            }),
            O = (0, f.$j)(function (e) {
              var t = e.ticketModel;
              return { ticketInfo: t.ticketInfo, pasName: t.pasName };
            })(function (e) {
              var t = e.ticketInfo,
                n = e.pasName,
                a = (t || {}).ticketTypeName,
                r = void 0 === a ? "" : a,
                i = y.Z.formatPasName(n || "");
              return (0,
              Q.BX)(g.View, { className: "train-detail-ticket-qrcode-content", children: [(0, Q.tZ)(g.Image, { className: "top-bg", webp: !0, src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_ewm_cp.webp" }), (0, Q.BX)(g.View, { className: "content flex-center flex-column", children: [(0, Q.BX)(g.View, { className: "pas flex-center", children: [!!i && (0, Q.tZ)(g.View, { children: i }), !!r && (0, Q.tZ)(g.View, { className: "pas-type flex-center", children: r }), (0, Q.BX)(g.View, { className: "how-check flex-center", onClick: R, children: [(0, Q.tZ)(g.View, { className: "ifont2-zhushi_linea_12 iconfont2" }), (0, Q.tZ)(g.View, { children: "怎样扫码" })] })] }), (0, Q.tZ)(g.View, { className: "txt", children: "限本人扫码检票进站，可免刷身份证" }), (0, Q.tZ)(g.View, { className: "desc", children: "温馨提示：部分车站暂不支持此功能，请携带身份证备用" }), (0, Q.tZ)(E, {}), (0, Q.BX)(g.View, { className: "code-tips flex-center", children: [(0, Q.tZ)(g.View, { className: "tit flex-center", children: "一人一码" }), (0, Q.tZ)(g.View, { children: "乘车码每分钟自动更新，请勿泄露给他人" })] }), (0, Q.BX)(g.View, { className: "refresh-content flex-center", onClick: I, children: [(0, Q.tZ)(g.View, { children: "点击刷新失效二维码" }), (0, Q.tZ)(g.Image, { className: "refresh-icon", src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/icon_sx_l.png" })] })] })] });
            }),
            L = (0, f.$j)(function (e) {
              return { ticketInfo: e.ticketModel.ticketInfo };
            })(function (e) {
              var t = e.ticketInfo,
                n = t || {},
                a = n.startTime,
                r = void 0 === a ? "" : a,
                i = n.idTypeName,
                o = void 0 === i ? "" : i,
                c = n.seatNo,
                l = void 0 === c ? "" : c,
                s = n.seatTypeName,
                u = void 0 === s ? "" : s,
                d = n.coachNo,
                f = void 0 === d ? "" : d,
                m = n.price,
                p = void 0 === m ? "" : m,
                h = n.trainNo,
                k = void 0 === h ? "" : h;
              return (
                console.log("ticketInfo", t),
                (0, Q.BX)(g.View, {
                  className: "detail-qrcode-ticket-info",
                  children: [
                    (0, Q.tZ)(g.View, { className: "split-dash-line" }),
                    t &&
                      (0, Q.BX)(g.Block, {
                        children: [
                          (0, Q.BX)(g.View, {
                            className: "ticket-content flex",
                            children: [
                              (0, Q.BX)(g.View, {
                                className: "item flex-center flex-column",
                                children: [
                                  (0, Q.tZ)(g.View, {
                                    className: "name",
                                    children: "车次号",
                                  }),
                                  (0, Q.tZ)(g.View, { children: k }),
                                ],
                              }),
                              (0, Q.BX)(g.View, {
                                className: "item flex-center flex-column",
                                children: [
                                  (0, Q.tZ)(g.View, {
                                    className: "name",
                                    children: "发车时间",
                                  }),
                                  (0, Q.tZ)(g.View, { children: r }),
                                ],
                              }),
                              (0, Q.BX)(g.View, {
                                className: "item flex-center flex-column",
                                children: [
                                  (0, Q.tZ)(g.View, {
                                    className: "name",
                                    children: "车票价格",
                                  }),
                                  (0, Q.tZ)(g.View, {
                                    children: "".concat(Number(p), "元"),
                                  }),
                                ],
                              }),
                              (0, Q.BX)(g.View, {
                                className: "item flex-center flex-column",
                                children: [
                                  (0, Q.tZ)(g.View, {
                                    className: "name",
                                    children: "证件类型",
                                  }),
                                  (0, Q.tZ)(g.View, { children: o }),
                                ],
                              }),
                            ],
                          }),
                          (0, Q.BX)(g.View, {
                            className: "seat-content flex",
                            children: [
                              (0, Q.BX)(g.View, {
                                className: "item flex-center flex-column",
                                children: [
                                  (0, Q.tZ)(g.View, { children: u }),
                                  (0, Q.tZ)(g.View, {
                                    className: "name",
                                    children: "坐席",
                                  }),
                                ],
                              }),
                              (0, Q.BX)(g.View, {
                                className: "item flex-center flex-column",
                                children: [
                                  (0, Q.tZ)(g.View, { children: f }),
                                  (0, Q.tZ)(g.View, {
                                    className: "name",
                                    children: "车厢",
                                  }),
                                ],
                              }),
                              (0, Q.BX)(g.View, {
                                className: "item flex-center flex-column",
                                children: [
                                  (0, Q.tZ)(g.View, { children: l }),
                                  (0, Q.tZ)(g.View, {
                                    className: "name",
                                    children: "座号",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                })
              );
            }),
            W = n(90129),
            G = n(22373),
            H = (0, f.$j)(function (e) {
              return { pasName: e.ticketModel.pasName };
            })(function (e) {
              var t = e.visible,
                n = void 0 !== t && t,
                a = e.onCanCel,
                r = void 0 === a ? function () {} : a,
                i = e.pasName,
                o = q;
              return (
                (0, d.useEffect)(
                  function () {
                    if (i) {
                      var e = "· 仅当前登录的12306账号本人「".concat(
                        i,
                        "」可使用二维码检票上车（可不刷身份证）"
                      );
                      o.push(e);
                    }
                  },
                  [i]
                ),
                console.log("pasName", i),
                (0, Q.tZ)(G.Z, {
                  title: function () {
                    return (0, Q.tZ)(g.View, {
                      className: "check-title",
                      children: "检票说明",
                    });
                  },
                  visible: n,
                  className: "train-check-ticket-caption-toast",
                  content: function () {
                    return (0, Q.BX)(g.View, {
                      className: "check-content",
                      children: [
                        (0, Q.tZ)(g.Image, {
                          className: "img",
                          src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_ewm_sm.webp",
                          webp: !0,
                        }),
                        o.map(function (e, t) {
                          return (0,
                          Q.tZ)(g.View, { className: "item", children: e }, "check-ticket-tips-".concat(t));
                        }),
                      ],
                    });
                  },
                  buttons: [{ name: "我知道了" }],
                  clickOption: r,
                  onCancel: r,
                })
              );
            }),
            J = void 0,
            K = function () {},
            U = function (e) {
              var t = e.onRef,
                n = (0, d.useState)(null),
                a = (0, W.Z)(n, 2),
                r = a[0],
                i = a[1],
                o = (0, d.useState)(!1),
                c = (0, W.Z)(o, 2),
                l = c[0],
                s = c[1],
                u = (0, d.useState)(!1),
                f = (0, W.Z)(u, 2),
                m = f[0],
                h = f[1];
              (0, d.useImperativeHandle)(t, function () {
                return {
                  showToast: function (e) {
                    i(null == e ? void 0 : e.toast),
                      h(!0),
                      (K = (null == e ? void 0 : e.onCancel) || function () {});
                  },
                  closeToast: function () {
                    s(!1), h(!1);
                  },
                  isShow: function () {
                    return l;
                  },
                };
              }),
                (0, d.useLayoutEffect)(
                  function () {
                    r &&
                      m &&
                      p().nextTick(function () {
                        console.log("set show"), s(!0), h(!1);
                      });
                  },
                  [m, r]
                );
              switch (null == r ? void 0 : r.toastCode) {
                case C.CheckTicketCaptionToast:
                  return (0, Q.tZ)(H, {
                    visible: l,
                    onCanCel: function () {
                      for (
                        var e, t = arguments.length, n = new Array(t), a = 0;
                        a < t;
                        a++
                      )
                        n[a] = arguments[a];
                      null === (e = K) ||
                        void 0 === e ||
                        e.call.apply(e, [J].concat(n)),
                        s(!1);
                    },
                  });
                default:
                  return null;
              }
            },
            Y =
              (0, h.h)(!1, { usePageWrapper: !0 })(
                (X = (function (e) {
                  (0, s.Z)(n, e);
                  var t = (0, u.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, o.Z)(this, n),
                      ((a = t.call(this, e)).store = x.create(
                        (0, l.Z)(a)
                      ).store),
                      (a.pageRootClassName = "train-detail-ticket-qrcode"),
                      (a.autoExpose = !0),
                      (a.timer = null),
                      (a.pageId = "10650104698"),
                      (a.pageTitle = "检票二维码"),
                      a
                    );
                  }
                  return (
                    (0, c.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          z();
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          j();
                        },
                      },
                      {
                        key: "onPullDownRefresh",
                        value: (function () {
                          var e = (0, i.Z)(
                            (0, r.Z)().mark(function e() {
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.t0 = !this.isFreezePullDown),
                                          !e.t0)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (e.next = 4), z();
                                      case 4:
                                        p().stopPullDownRefresh();
                                      case 5:
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
                        key: "freezePullDown",
                        value: function () {
                          this.isFreezePullDown = !0;
                        },
                      },
                      {
                        key: "unfreezePullDown",
                        value: function () {
                          this.isFreezePullDown = !1;
                        },
                      },
                      {
                        key: "componentDidHide",
                        value: function () {
                          j();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, Q.BX)(f.zt, {
                            store: this.store,
                            children: [
                              (0, Q.tZ)(O, {}),
                              (0, Q.tZ)(L, {}),
                              (0, Q.tZ)(g.Block, {
                                children: (0, Q.tZ)(U, {
                                  onRef: function (t) {
                                    e.$CommonToast = t;
                                  },
                                }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(d.default.Component))
              ) || X;
          Page(
            (0, a.createPageConfig)(
              Y,
              "pages/trainDetail/ticketQrcode/ticketQrcode",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "检票二维码",
                navigationBarTextStyle: "white",
                navigationBarBackgroundColor: "#222",
                backgroundColorTop: "#222222",
                backgroundColorBottom: "#fff",
                navigationStyle: "custom",
                enablePullDownRefresh: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [34335, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(67639);
        }),
          e.O();
      },
    ]);
})();
