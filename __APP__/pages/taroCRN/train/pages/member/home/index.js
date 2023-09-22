!(function () {
  "use strict";
  require("../../../../sub-vendors.js"),
    require("../../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [67778],
      {
        41544: function (e, t, n) {
          var r,
            i = n(32180),
            a = n(79301),
            c = n(95308),
            s = n(57042),
            o = n(24460),
            l = n(81876),
            _ = n(21867),
            m = n(86066),
            u = n(45023),
            d = n(52500),
            p = n(8271),
            g = n.n(p),
            h = n(92954),
            f = n(87298),
            Z = n(71515),
            x = n(49528),
            b = n(53550),
            w = n(43884),
            N = n(23577),
            v = n(32970),
            T = n(92049),
            y = n(19972),
            k = n(48813),
            P = function (e) {
              var t = e.children,
                n = e.className,
                r = void 0 === n ? "" : n,
                i = e.style,
                a = void 0 === i ? {} : i;
              return (0, k.tZ)(Z.View, {
                className: "".concat(" _dB _Vb _Qi", " ").concat(r),
                style: a,
                children: t,
              });
            },
            I = [
              {
                title: "搜索后列表页找到含【兑】字车次",
                desc: "登录/激活会员后，购买可积分累积的车次，即可获得",
                imgUrl:
                  "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/111111@3x.png",
              },
              {
                title: "登录12306账号查看积分余额",
                desc: "登录12306会员账号并选择乘客为会员本人或被成功添加的受让人",
                imgUrl:
                  "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/2222@3x.png",
              },
              {
                title: "选择受让人（受让人添加需60天生效）",
                desc: "选择受让人（受让人添加需60天生效） ",
                imgUrl:
                  "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/333@3x.png",
              },
              {
                title: "下单并输入余额卡消费密码，完成兑换",
                desc: "下单并输入6位积分消费密码，若忘记积分消费密码可点击“忘记密码”进行密码重置",
                imgUrl:
                  "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/3333@3x.png",
              },
            ];
          !(function (e) {
            (e.addAssignee = "addAssignee"),
              (e.pointRecords = "pointRecords"),
              (e.reissue = "pointReissue"),
              (e.consumptionPassword = "consumptionPassword");
          })(r || (r = {}));
          var V,
            C = [
              {
                name: "添加受让人",
                iconUrl:
                  "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/people@3x.png",
                type: r.addAssignee,
              },
              {
                name: "积分明细",
                iconUrl:
                  "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/33@3x.png",
                type: r.pointRecords,
              },
              {
                name: "积分补领",
                iconUrl:
                  "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/44@3x.png",
                type: r.reissue,
              },
              {
                name: "消费密码",
                iconUrl:
                  "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/ss@3x.png",
                type: r.consumptionPassword,
              },
            ],
            B = N.Z.isTieyou
              ? "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/ttfx@2x.png"
              : "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/123@2x.png",
            S =
              (N.Z.isTieyou,
              {
                title: "积分免费兑车票，测测你有多少积分？",
                path: "/pages/taroCRN/train/pages/member/home/index?fromPage=share",
                imageUrl: B,
              }),
            R = n(94190),
            z = (function () {
              var e = (0, c.Z)(
                (0, a.Z)().mark(function e() {
                  var t, n, r, i;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = R.WG.getAttr("bind12306") || {}),
                            (n = t.userName12306),
                            (r = t.pwd),
                            (i = r && n),
                            e.abrupt("return", i)
                          );
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
            X = "TZW12306Credit_exposure",
            M = "TZW12306Credit_Function_click",
            U = "TZW12306Credit_Share_click",
            F = "TZW12306Credit_TestCredit_Test_click",
            G = "";
          !(function (e) {
            (e[(e.NotMember = 1)] = "NotMember"),
              (e[(e.NotActive = 2)] = "NotActive"),
              (e[(e.Member = 3)] = "Member"),
              (e[(e.NotSupport = 5)] = "NotSupport"),
              (e[(e.Frozen = 6)] = "Frozen");
          })(V || (V = {}));
          var q = n(298),
            j = n(10655),
            A = n(58374),
            D = n(82750);
          function L() {
            return Y.apply(this, arguments);
          }
          function Y() {
            return (Y = (0, c.Z)(
              (0, a.Z)().mark(function e() {
                var t,
                  n,
                  r,
                  i,
                  s,
                  o,
                  l,
                  _,
                  m,
                  u,
                  d,
                  p,
                  g,
                  h = arguments;
                return (0, a.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = h.length > 0 && void 0 !== h[0] ? h[0] : {}),
                            (n = t.time),
                            (r = void 0 === n ? 0 : n),
                            (i = t.pollingKey),
                            (s = t.intervalTotalTimes),
                            (e.prev = 1),
                            !(r > s && s))
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt("return", null);
                        case 4:
                          return (e.next = 6), (0, D.q0)();
                        case 6:
                          if (
                            ((o = e.sent),
                            (l = o.userName),
                            (_ = o.password),
                            l && _)
                          ) {
                            e.next = 11;
                            break;
                          }
                          throw new Error("请登录12306~");
                        case 11:
                          return (e.t0 = l), (e.next = 14), (0, j.K)(_);
                        case 14:
                          return (
                            (e.t1 = e.sent),
                            (e.t2 = N.Z.isTieyou ? "tieyouwx" : "zhixingwx"),
                            (e.t3 = i),
                            (m = {
                              userName: e.t0,
                              password: e.t1,
                              type: 1,
                              source: e.t2,
                              partnerName: "zhixing",
                              pollingKey: e.t3,
                            }),
                            (e.next = 20),
                            (0, A.L5)(m)
                          );
                        case 20:
                          if (
                            ((u = e.sent),
                            (d = u.asycnPollingConfig),
                            (p = u.resultCode),
                            (g = u.queryMemberInfo),
                            !(p > 200))
                          ) {
                            e.next = 30;
                            break;
                          }
                          if (!d) {
                            e.next = 29;
                            break;
                          }
                          return (
                            (e.next = 28),
                            new Promise(function (e) {
                              setTimeout(
                                (0, c.Z)(
                                  (0, a.Z)().mark(function t() {
                                    var n;
                                    return (0, a.Z)().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.next = 2),
                                              L(
                                                (0, q.Z)(
                                                  (0, q.Z)({}, d),
                                                  {},
                                                  { time: r + 1 }
                                                )
                                              )
                                            );
                                          case 2:
                                            (n = t.sent), e(n);
                                          case 4:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                ),
                                1e3 * d.intervalSecond
                              );
                            })
                          );
                        case 28:
                          return e.abrupt("return", e.sent);
                        case 29:
                          return e.abrupt("return", null);
                        case 30:
                          return e.abrupt(
                            "return",
                            null == g ? void 0 : g.memberInfo
                          );
                        case 33:
                          return (
                            (e.prev = 33),
                            (e.t4 = e.catch(1)),
                            console.log("query12306Info err===", e.t4),
                            e.abrupt("return", null)
                          );
                        case 37:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 33]]
                );
              })
            )).apply(this, arguments);
          }
          var H,
            W = n(82977),
            O = function (e) {
              var t = e.onCancel,
                n = e.onShare,
                r = d.default.useRef();
              return (0, k.tZ)(k.HY, {
                children: (0, k.BX)(W.Z, {
                  enableTapBackground: !0,
                  onCancel: t,
                  innerContainerStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    zIndex: 1001,
                    backgroundColor: "#fff",
                  },
                  children: [
                    (0, k.tZ)(Z.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/t@2x.png",
                      mode: "aspectFit",
                      className: " _u _Pi _gB _gl _hB _yi _iB",
                      ref: r,
                    }),
                    (0, k.tZ)(Z.View, {
                      className: " _sb _yg _Uc _o _jz",
                      children: "分享至",
                    }),
                    (0, k.tZ)(Z.View, {
                      className: " _u _qk _xr",
                      onClick: t,
                      children: (0, k.tZ)(b.Z, {
                        className: " _rk _fB",
                        children: "󰳭",
                      }),
                    }),
                    (0, k.tZ)(Z.View, {
                      className: " _i _Ga _eB _p",
                      children: [
                        {
                          type: "wechat",
                          name: "微信好友",
                          iconUrl:
                            "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/icon_fx_1.png",
                        },
                        {
                          type: "pyq",
                          name: "朋友圈",
                          iconUrl:
                            "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/icon_fx_2.png",
                        },
                        {
                          type: "save",
                          name: "保存图片",
                          iconUrl:
                            "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/icon_fx_4.png",
                        },
                      ].map(function (e, t) {
                        return (0, k.BX)(
                          Z.View,
                          {
                            className: " _j _o _i _n _l",
                            onClick: function () {
                              n(e.type, r);
                            },
                            children: [
                              (0, k.tZ)(Z.Image, {
                                src: e.iconUrl,
                                mode: "aspectFit",
                                className: " _Tu _Ae",
                              }),
                              (0, k.tZ)(
                                Z.Text,
                                { className: " _Xb _no _bg", children: e.name },
                                t
                              ),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              });
            },
            Q =
              (0, f.h)(!1, { usePageWrapper: !0 })(
                (H = (function (e) {
                  (0, _.Z)(n, e);
                  var t = (0, m.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, s.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, u.Z)((0, l.Z)(i), "fromPage", void 0),
                      (0, u.Z)((0, l.Z)(i), "loginType4Trace", "0"),
                      (0, u.Z)((0, l.Z)(i), "getFromPage", function () {
                        var e,
                          t =
                            (null ===
                              (e = (0, h.getCurrentInstance)().router) ||
                            void 0 === e
                              ? void 0
                              : e.params) || {},
                          n = t.fromPage,
                          r = t.initData;
                        try {
                          var a,
                            c = JSON.parse(decodeURIComponent(r || "{}")) || {};
                          i.fromPage =
                            n ||
                            (null === (a = i.props.passProps) || void 0 === a
                              ? void 0
                              : a.fromPage) ||
                            (null == c ? void 0 : c.fromPage) ||
                            "noSource";
                        } catch (e) {
                          i.fromPage = "noSource";
                        }
                      }),
                      (0, u.Z)(
                        (0, l.Z)(i),
                        "handleInitPage",
                        (0, c.Z)(
                          (0, a.Z)().mark(function e() {
                            var t, n;
                            return (0, a.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (0, y.Q)(
                                          "加载中，请稍候",
                                          function () {},
                                          !1
                                        ),
                                        (e.next = 4),
                                        z()
                                      );
                                    case 4:
                                      if (!(t = e.sent)) {
                                        e.next = 11;
                                        break;
                                      }
                                      return (e.next = 8), L();
                                    case 8:
                                      (e.t0 = e.sent), (e.next = 12);
                                      break;
                                    case 11:
                                      e.t0 = {};
                                    case 12:
                                      return (
                                        (n = e.t0),
                                        (0, y.Z)(),
                                        (e.next = 16),
                                        new Promise(function (e) {
                                          i.setState(
                                            {
                                              renderGuide: !(
                                                t &&
                                                (null == n
                                                  ? void 0
                                                  : n.userMemberStatus) ==
                                                  V.Member
                                              ),
                                              memberInfo: n,
                                            },
                                            e
                                          );
                                        })
                                      );
                                    case 16:
                                      (i.loginType4Trace = t
                                        ? i.loginType4Trace
                                        : "1"),
                                        i.ubtTrace(X, {
                                          PageId: i.getPageId(),
                                          fromSource: i.fromPage,
                                          Status: t
                                            ? (null == n
                                                ? void 0
                                                : n.userMemberStatus) ==
                                              V.Member
                                              ? "normal"
                                              : "unactive"
                                            : "unlogin",
                                          Type: i.loginType4Trace,
                                        }),
                                        (e.next = 22);
                                      break;
                                    case 20:
                                      (e.prev = 20), (e.t1 = e.catch(0));
                                    case 22:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 20]]
                            );
                          })
                        )
                      ),
                      (0, u.Z)(
                        (0, l.Z)(i),
                        "switchAccount",
                        (0, c.Z)(
                          (0, a.Z)().mark(function e() {
                            return (0, a.Z)().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      (0, v.L5)(
                                        {
                                          skinType: "member",
                                          fromPage: "MemberHome",
                                        },
                                        !0
                                      )
                                    );
                                  case 2:
                                    i.handleInitPage();
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      ),
                      (0, u.Z)(
                        (0, l.Z)(i),
                        "pageId",
                        N.Z.isCRN ? "10650102912" : "10650102916"
                      ),
                      (0, u.Z)((0, l.Z)(i), "nextTick", function () {
                        return new Promise(function (e) {
                          setTimeout(e, 500);
                        });
                      }),
                      (0, u.Z)(
                        (0, l.Z)(i),
                        "handleCheckMyAccount",
                        (0, c.Z)(
                          (0, a.Z)().mark(function e() {
                            var t;
                            return (0, a.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        i.ubtTrace(F, {
                                          PageId: i.getPageId(),
                                        }),
                                        (e.prev = 1),
                                        (e.next = 4),
                                        z()
                                      );
                                    case 4:
                                      if (e.sent) {
                                        e.next = 11;
                                        break;
                                      }
                                      return (
                                        (e.next = 7),
                                        (0, v.L5)(
                                          {
                                            skinType: "member",
                                            fromPage: "MemberHome",
                                          },
                                          !0
                                        )
                                      );
                                    case 7:
                                      if (((e.t0 = !N.Z.isCRN), !e.t0)) {
                                        e.next = 11;
                                        break;
                                      }
                                      return (e.next = 11), i.nextTick();
                                    case 11:
                                      if (((e.t1 = N.Z.isCRN), !e.t1)) {
                                        e.next = 16;
                                        break;
                                      }
                                      return (e.next = 15), z();
                                    case 15:
                                      e.t1 = !e.sent;
                                    case 16:
                                      if (!e.t1) {
                                        e.next = 18;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 18:
                                      return (e.next = 20), i.handleInitPage();
                                    case 20:
                                      if (
                                        (null == (t = i.state.memberInfo)
                                          ? void 0
                                          : t.userMemberStatus) == V.Member
                                      ) {
                                        e.next = 29;
                                        break;
                                      }
                                      return (
                                        (e.next = 24),
                                        (0, v.Zf)({
                                          skinType: "member",
                                          fromPage: "MemberHome",
                                        })
                                      );
                                    case 24:
                                      if (((e.t2 = !N.Z.isCRN), !e.t2)) {
                                        e.next = 28;
                                        break;
                                      }
                                      return (e.next = 28), i.nextTick();
                                    case 28:
                                      i.handleInitPage();
                                    case 29:
                                      e.next = 34;
                                      break;
                                    case 31:
                                      (e.prev = 31),
                                        (e.t3 = e.catch(1)),
                                        (0, y.Z)();
                                    case 34:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[1, 31]]
                            );
                          })
                        )
                      ),
                      (0, u.Z)((0, l.Z)(i), "pageWrapperConfig", {
                        pageTitle: "免费兑车票",
                        renderRightView: function () {
                          return (0, k.BX)(Z.View, {
                            className: " _i _k _l",
                            id: "AMEX",
                            onClick: i.handleTriggerShare,
                            children: [
                              (0, k.tZ)(Z.Image, {
                                className: " _gb _xl",
                                src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/fxd@3x.png",
                              }),
                              (0, k.tZ)(Z.Text, {
                                className: " _C _Km",
                                children: "分享",
                              }),
                            ],
                          });
                        },
                        flexMode: !0,
                        renderHigherZIndexView: function () {
                          var e = i.state.isTriggerShare;
                          return (0, k.tZ)(k.HY, {
                            children:
                              e &&
                              (0, k.tZ)(O, {
                                onCancel: i.handleCancelShare,
                                onShare: function (e, t) {
                                  N.Z.isCRN &&
                                    i.ubtTrace(U, {
                                      PageId: i.getPageId(),
                                      clickType: e,
                                    });
                                },
                              }),
                          });
                        },
                        renderBackgroundView: function () {
                          return (0, k.tZ)(Z.View, {
                            style: {
                              position: "absolute",
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                              backgroundColor: "rgb(231, 245, 255)",
                            },
                            children: (0, k.tZ)(Z.Image, {
                              className: " _Z _Wi _yc",
                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/bg3@3x.png",
                              mode: "widthFix",
                            }),
                          });
                        },
                      }),
                      (0, u.Z)((0, l.Z)(i), "handleTriggerShare", function () {
                        i.setState({ isTriggerShare: !0 }),
                          N.Z.isCRN && i.ubtTrace(G, { PageId: i.getPageId() });
                      }),
                      (0, u.Z)((0, l.Z)(i), "handleCancelShare", function () {
                        i.setState({ isTriggerShare: !1 });
                      }),
                      (0, u.Z)((0, l.Z)(i), "handleOption", function (e) {
                        switch (e) {
                          case r.addAssignee:
                            (0, v.R1)();
                            break;
                          case r.pointRecords:
                            i.navigateTo({
                              url: "/pages/taroCRN/train/pages/pointsDetail/index",
                            });
                            break;
                          case r.reissue:
                            (0, v.a1)();
                            break;
                          case r.consumptionPassword:
                            (0, v.Vo)();
                        }
                        i.ubtTrace(M, { PageId: i.getPageId(), Type: e });
                      }),
                      (i.state = {
                        isInit: !0,
                        renderGuide: !0,
                        memberInfo: {},
                        isTriggerShare: !1,
                      }),
                      i
                    );
                  }
                  return (
                    (0, o.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, a.Z)().mark(function e() {
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          this.getFromPage(),
                                          (e.next = 3),
                                          this.handleInitPage()
                                        );
                                      case 3:
                                        this.setState({ isInit: !1 });
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
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function (e) {
                          if ("shareToFriend" === e.target.id)
                            return (
                              this.ubtTrace(U, { PageId: this.getPageId() }), S
                            );
                        },
                      },
                      {
                        key: "handleMoreIntro",
                        value: function () {
                          (0, v.jn)(
                            "https://pages.".concat(
                              N.Z.isTieyou ? "tieyou" : "suanya",
                              ".com/webapp/member-points-introduction/home?isImmersiveMode=YES&isHideNavBar=YES"
                            )
                          );
                        },
                      },
                      {
                        key: "getSlogan",
                        value: function () {
                          return (0, k.tZ)(Z.View, {
                            className: "btm_slogan_box",
                            children: N.Z.isTieyou
                              ? (0, k.tZ)(Z.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/slogan@3x.png",
                                  className: " _Z _ht _wx",
                                  mode: "aspectFit",
                                })
                              : (0, k.tZ)(Z.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/img_hcpx@3x.webp",
                                  className: " _Z _Ll _wx",
                                  mode: "aspectFit",
                                }),
                          });
                        },
                      },
                      {
                        key: "getGuideView",
                        value: function () {
                          return (0, k.BX)(k.HY, {
                            children: [
                              (0, k.BX)(Z.View, {
                                className: " _zx",
                                children: [
                                  (0, k.tZ)(Z.Image, {
                                    className: " _Yi _Z",
                                    mode: "aspectFit",
                                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/btt2@3x.png",
                                  }),
                                  (0, k.tZ)(Z.Image, {
                                    className: " _Sd _Z _Km",
                                    mode: "aspectFit",
                                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/bt3@3x.png",
                                  }),
                                ],
                              }),
                              (0, k.tZ)(Z.Image, {
                                className: " _Z _Bx _i _Cx",
                                mode: "widthFix",
                                src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/ttt2@3x.png",
                              }),
                              (0, k.BX)(P, {
                                style: {
                                  borderTopLeftRadius: 0,
                                  borderTopRightRadius: 0,
                                  paddingTop: 0,
                                },
                                children: [
                                  (0, k.BX)(Z.View, {
                                    className: " _yb _Xa _o _yc _p",
                                    onClick: this.handleCheckMyAccount,
                                    children: [
                                      (0, k.tZ)(Z.Text, {
                                        className: " _qb _p _in _xx _fd _Z _o",
                                        children: "算一算",
                                      }),
                                      (0, k.tZ)(Z.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/light.gif",
                                        mode: "aspectFill",
                                        className: " _u _s _t _q _r _kc _Z _Y",
                                      }),
                                    ],
                                  }),
                                  N.Z.isCRN
                                    ? (0, k.tZ)(Z.View, {
                                        className:
                                          " _yb _yx _x _Nc _fd _o _Pc _jc",
                                        onClick: this.handleTriggerShare,
                                        children: "邀好友查积分",
                                      })
                                    : (0, k.tZ)(Z.Button, {
                                        className:
                                          " _yb _yx _x _Nc _fd _o _Pc _jc",
                                        openType: "share",
                                        id: "shareToFriend",
                                        children: "邀好友查积分",
                                      }),
                                ],
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "getFloatView",
                        value: function () {
                          var e,
                            t,
                            n,
                            r,
                            i,
                            a = this.state.memberInfo;
                          if (
                            null == a ||
                            null === (e = a.memberPoint) ||
                            void 0 === e ||
                            !e.totalPoint
                          )
                            return (0, k.BX)(Z.View, {
                              className:
                                " _nf _Ak _i _p _Ga _D _Jx _oc _Kx _Lc _dc _Mb",
                              children: [
                                (0, k.tZ)(Z.View, {
                                  className: " _u _Lx _Mx _ee _Nx _Ox",
                                }),
                                "当前账户无积分，可",
                                (0, k.tZ)(Z.Text, {
                                  className: " _wp _D",
                                  children: "补领积分",
                                }),
                                "或",
                                (0, k.tZ)(Z.Text, {
                                  className: " _wp _D",
                                  onClick: v.Yp,
                                  children: "购买火车票得积分",
                                }),
                              ],
                            });
                          if (
                            null == a ||
                            null === (t = a.memberPoint) ||
                            void 0 === t ||
                            !t.monthCancelPoint
                          )
                            return null;
                          var c = g()(
                            null == a ||
                              null === (n = a.memberPoint) ||
                              void 0 === n
                              ? void 0
                              : n.pointStopDate
                          ).diff(g()(), "day");
                          return c < 0
                            ? null
                            : (0, k.BX)(Z.View, {
                                className:
                                  " _nf _Ak _i _p _Ga _D _Jx _oc _Kx _Lc _dc _Mb",
                                children: [
                                  (0, k.tZ)(Z.View, {
                                    className: " _u _Lx _Mx _ee _Nx _Ox",
                                  }),
                                  null == a ||
                                  null === (r = a.memberPoint) ||
                                  void 0 === r
                                    ? void 0
                                    : r.monthCancelPoint,
                                  "积分于",
                                  (0, k.tZ)(Z.Text, {
                                    className: " _wp _D",
                                    children:
                                      c < 1 ? "1天内" : "".concat(c, "天后"),
                                  }),
                                  "到期，可抵",
                                  (null == a ||
                                  null === (i = a.memberPoint) ||
                                  void 0 === i
                                    ? void 0
                                    : i.monthCancelPoint) / 100,
                                  "元车票",
                                ],
                              });
                        },
                      },
                      {
                        key: "getMemberInfoView",
                        value: function () {
                          var e,
                            t,
                            n = this,
                            i = this.state.memberInfo,
                            a = N.Z.isCRN
                              ? C
                              : C.filter(function (e) {
                                  return [
                                    r.addAssignee,
                                    r.pointRecords,
                                  ].includes(e.type);
                                });
                          return (0, k.BX)(k.HY, {
                            children: [
                              (0, k.BX)(Z.View, {
                                className: " _i _Ga _Z _l _Dx",
                                children: [
                                  (0, k.tZ)(Z.Image, {
                                    className: " _gp _dn _wa",
                                    src: "https://images3.c-ctrip.com/ztrip/train_bin/22-12/me/icon_me_tx1@3x.png",
                                  }),
                                  (0, k.tZ)(Z.Text, {
                                    className: " _sb _dq _Fx",
                                    children:
                                      null == i ? void 0 : i.userRealName,
                                  }),
                                  (0, k.BX)(Z.View, {
                                    className: " _i _Ga _Zc _n _l _De _Ex",
                                    onClick: this.switchAccount,
                                    children: [
                                      (0, k.tZ)(Z.Text, {
                                        className: " _xh _Vc _Uc",
                                        children: "切换账号",
                                      }),
                                      (0, k.tZ)(Z.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/qh@3x.png",
                                        className: " _tf _sf",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, k.BX)(Z.View, {
                                className: " _Ix _Vb _Qi",
                                style: {
                                  borderBottomLeftRadius: 0,
                                  borderBottomRightRadius: 0,
                                  paddingBottom: (0, x.u1)(14),
                                },
                                children: [
                                  (0, k.BX)(Z.View, {
                                    className: " _i _l _Ga",
                                    children: [
                                      (0, k.BX)(Z.View, {
                                        className: " _i _k",
                                        children: [
                                          (0, k.tZ)(Z.View, {
                                            className: " _oc _qg _Q",
                                            children: "账户积分",
                                          }),
                                          (0, k.tZ)(Z.View, {
                                            className:
                                              " _sb _Gx _Bf _Bj _i _Ga",
                                            children:
                                              (null == i ||
                                              null === (e = i.memberPoint) ||
                                              void 0 === e
                                                ? void 0
                                                : e.totalPoint) || 0,
                                          }),
                                        ],
                                      }),
                                      (0, k.tZ)(Z.View, {
                                        style: {
                                          width: (0, x.u1)(1),
                                          height: (0, x.u1)(24),
                                          backgroundColor: "#EDEDED",
                                          marginLeft: (0, x.u1)(30),
                                          marginRight: (0, x.u1)(30),
                                        },
                                      }),
                                      (0, k.BX)(Z.View, {
                                        className: " _i _k",
                                        children: [
                                          (0, k.tZ)(Z.View, {
                                            className: " _oc _qg _Q",
                                            children: "积分价值",
                                          }),
                                          (0, k.BX)(Z.View, {
                                            className:
                                              " _sb _Gx _Bf _Bj _i _Ga",
                                            children: [
                                              (0, k.tZ)(Z.Text, {
                                                className: " _Hx _Bf",
                                                children: "￥",
                                              }),
                                              (null == i ||
                                              null === (t = i.memberPoint) ||
                                              void 0 === t
                                                ? void 0
                                                : t.totalPoint) / 100 || 0,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  this.getFloatView(),
                                ],
                              }),
                              (0, k.tZ)(Z.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/bd@3x.png",
                                className: " _Z _Rj _i",
                                mode: "widthFix",
                              }),
                              (0, k.tZ)(Z.View, {
                                className: " _Ix _Vb _Qi",
                                style: {
                                  borderTopLeftRadius: 0,
                                  borderTopRightRadius: 0,
                                  paddingTop: (0, x.u1)(14),
                                },
                                children: (0, k.tZ)(Z.View, {
                                  className: " _i _n _Px _Ga",
                                  children: a.map(function (e, t) {
                                    return (0,
                                    k.BX)(Z.View, { className: " _i _nj _o", onClick: n.handleOption.bind(n, e.type), children: [(0, k.tZ)(Z.Image, { className: " _Z _gb _Qx", src: e.iconUrl, mode: "aspectFit" }), (0, k.tZ)(Z.View, { className: " _sb _no _R _o", children: e.name })] }, t);
                                  }),
                                }),
                              }),
                              (0, k.BX)(Z.View, {
                                className: " _Vb _Rx _Qi _Xk",
                                children: [
                                  (0, k.BX)(Z.View, {
                                    className: " _i _Ga _l _Sx",
                                    children: [
                                      (0, k.tZ)(Z.Text, {
                                        className: " _sb _Nc _Uc _j _i _l",
                                        children: "怎么免费兑换车票?",
                                      }),
                                      (0, k.BX)(Z.View, {
                                        className:
                                          " _eg _R _oc _no _Uc _i _l _n _Ga",
                                        onClick: this.handleMoreIntro,
                                        children: [
                                          (0, k.tZ)(Z.Text, {
                                            style: {
                                              fontSize: (0, x.u1)(12),
                                              color: "#666666",
                                            },
                                            children: "更多攻略",
                                          }),
                                          (0, k.tZ)(b.Z, {
                                            style: {
                                              fontSize: (0, x.u1)(10),
                                              color: "#999999",
                                            },
                                            children: "󰲧",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  I.map(function (e, t) {
                                    return (0,
                                    k.BX)(Z.View, { className: " _Ux", children: [(0, k.BX)(Z.View, { className: " _i _Ga _l", children: [(0, k.tZ)(w.Z, { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["rgb(25, 140, 255)", "rgb(13, 194, 255)"], locations: [0.1,
                                                  1], style: { borderRadius: (0, x.u1)(7), marginRight: (0, x.u1)(6) }, children: (0, k.tZ)(Z.View, { className: " _Tk _Kv _qa _o _qb _Tx _Uc", children: "".concat(t >= 9 ? "" : "0").concat(t + 1) }) }), (0, k.tZ)(Z.Text, { className: " _sb _xe _Uc", children: e.title })] }), (0, k.tZ)(Z.Image, { className: " _qd _Z", src: e.imgUrl, mode: "widthFix" })] }, t);
                                  }),
                                ],
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.renderGuide;
                          return e.isInit
                            ? null
                            : (0, k.BX)(k.HY, {
                                children: [
                                  (0, k.tZ)(Z.ScrollView, {
                                    className: " _Y _Z _p",
                                    scrollY: !0,
                                    children: (0, k.BX)(Z.View, {
                                      className: " _Mb _Ik _Fe _Z",
                                      style: {
                                        paddingBottom: t ? 0 : (0, x.u1)(94),
                                      },
                                      children: [
                                        t
                                          ? this.getGuideView()
                                          : this.getMemberInfoView(),
                                        this.getSlogan(),
                                        (0, k.tZ)(T.Z, {}),
                                      ],
                                    }),
                                  }),
                                  !t &&
                                    (0, k.BX)(Z.View, {
                                      className: " _u _s _t _r _Vb _Wb _jl",
                                      children: [
                                        (0, k.BX)(Z.View, {
                                          className: " _i _Ga _Z",
                                          children: [
                                            (0, k.tZ)(Z.Button, {
                                              className:
                                                " _j _o _vd _Oa _g _Gc _Qf",
                                              openType: "share",
                                              id: "shareToFriend",
                                              onClick: N.Z.isCRN
                                                ? this.handleTriggerShare
                                                : function () {},
                                              children: (0, k.tZ)(Z.Text, {
                                                className: " _x _Ic _Xc _Uc",
                                                children: "邀好友查积分",
                                              }),
                                            }),
                                            (0, k.tZ)(Z.View, {
                                              className:
                                                " _j _o _Vx _Oa _w _Wc _Uc _Xc _Gc",
                                              onClick: v.Yp,
                                              children: "立即免费兑车票",
                                            }),
                                          ],
                                        }),
                                        (0, k.tZ)(T.Z, {
                                          backgroundColor: "#fff",
                                        }),
                                      ],
                                    }),
                                ],
                              });
                        },
                      },
                    ]),
                    n
                  );
                })(d.default.Component))
              ) || H;
          (Q.enableShareAppMessage = !0),
            Page(
              (0, i.createPageConfig)(
                Q,
                "pages/taroCRN/train/pages/member/home/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "",
                  navigationStyle: "custom",
                  navigationBarTextStyle: "black",
                  disbleScroll: !0,
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 59188, 35048, 70486, 97709, 6189, 22843,
            6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(41544);
          }
        ),
          e.O();
      },
    ]);
})();
