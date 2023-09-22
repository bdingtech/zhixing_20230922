!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/dc0cfe7c36c66175a01e7585a0cfebf3.js"),
    require("../sub-common/4170bd0bcba1375f71e0231ba3309624.js"),
    require("../sub-common/830933a669f2df38f638a51273333128.js"),
    require("../sub-common/385c2d6294d83fae9baca300c0698c74.js"),
    require("../sub-common/329c774b53fa8717b042c2679ca9dc49.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [18496],
      {
        32445: function (e, t, i) {
          var n,
            o = i(32180),
            a = i(298),
            l = i(79301),
            r = i(95308),
            c = i(57042),
            s = i(24460),
            u = i(4900),
            d = i(81876),
            h = i(21867),
            v = i(86066),
            f = i(45023),
            m = i(52500),
            p = i(71515),
            g = i(79792),
            b = i(81957),
            w = i(92954),
            N = i.n(w),
            T = i(79910),
            B = i(3205),
            Z = i(96158),
            y = i(4102),
            I = i(97939),
            A = i(49120),
            S = i(34229),
            k = i(18783),
            x = i(25391),
            V = i(86977),
            C = i(58676),
            R = i(24565),
            P = i(48813),
            _ = function (e) {
              var t,
                i,
                n,
                o,
                a,
                l,
                r,
                c,
                s,
                u,
                d,
                h,
                v,
                f = e.selfAccountShareInfo,
                m = e.isFromAccountHelp,
                b = e.propStyle,
                w = e.toggleSelfProtocal,
                N = void 0 === w ? function () {} : w,
                T = e.openQADrawer,
                Z = void 0 === T ? function () {} : T,
                y = e.onSharePicture,
                I = void 0 === y ? function () {} : y,
                k = function () {
                  B.Z.twebview({
                    data: {
                      url: "https://pages.c-ctrip.com/ztrip/document/hybq_br_rule.html?appid=".concat(
                        g.default.isTieyou ? "1002" : "1003"
                      ),
                    },
                  });
                },
                x = function () {
                  f.isAgreeProtocal
                    ? I()
                    : (0, A.showToast)("请先阅读并同意下方服务协议~");
                },
                C =
                  (null == f ||
                  null === (t = f.relativeBindInfo) ||
                  void 0 === t
                    ? void 0
                    : t.maxBindCount) > 2
                    ? 2
                    : null == f ||
                      null === (i = f.relativeBindInfo) ||
                      void 0 === i
                    ? void 0
                    : i.maxBindCount;
              return (0, P.BX)(p.View, {
                className: "multiply-account-grab-box",
                style: b,
                children: [
                  0 ==
                    (null == f
                      ? void 0
                      : f.relativeBindInfo.currentBindCount) &&
                    (0, P.BX)(p.View, {
                      className: "invite-none-v2",
                      children: [
                        (0, P.tZ)(p.View, {
                          className: "tit",
                          children: (0, P.tZ)(p.View, {
                            className: "rich-box",
                            children: (0, P.tZ)(S.ZtRichText, {
                              nodes:
                                null == f ||
                                null === (n = f.orderRelativeInfo) ||
                                void 0 === n
                                  ? void 0
                                  : n.title,
                            }),
                          }),
                        }),
                        (0, P.tZ)(S.ZtRichText, {
                          className: "txt",
                          nodes:
                            null == f ||
                            null === (o = f.orderRelativeInfo) ||
                            void 0 === o
                              ? void 0
                              : o.subTitle,
                        }),
                        (0, P.tZ)(p.View, {
                          className: "invite-none-bd",
                          children: (0, P.tZ)(p.View, {
                            className: "invite-none-list",
                            children: new Array(C).fill(0).map(function (e, t) {
                              return (0,
                              P.BX)(p.View, { className: "item", children: [(0, P.tZ)(p.View, { className: "icon-people" }), (0, P.tZ)(p.View, { className: "txt", children: "待邀请" })] }, t);
                            }),
                          }),
                        }),
                        0 ==
                          (null == f ||
                          null === (a = f.relativeBindInfo) ||
                          void 0 === a
                            ? void 0
                            : a.selfInviteState) &&
                          (0, P.tZ)(p.Button, {
                            className: "btn-submit",
                            openType: "".concat(
                              f.isAgreeProtocal && (0, V.JO)() ? "share" : ""
                            ),
                            id: "AKAA",
                            onClick: function () {
                              x();
                            },
                            "data-flag": "account-relative",
                            children: (0, P.tZ)(p.View, {
                              children:
                                f.orderRelativeInfo.btnName || "免费邀请好友",
                            }),
                          }),
                        0 !=
                          (null == f ||
                          null === (l = f.relativeBindInfo) ||
                          void 0 === l
                            ? void 0
                            : l.selfInviteState) &&
                          (0, P.tZ)(p.Button, {
                            className: "btn-submit-grey",
                            children:
                              f.orderRelativeInfo.btnName || "免费邀请好友",
                          }),
                        (0, P.BX)(p.View, {
                          className: "txt tips",
                          children: [
                            (0, P.BX)(p.View, {
                              id: "AKAB",
                              onClick: function () {
                                N();
                              },
                              children: [
                                (0, P.tZ)(p.Text, {
                                  className: f.isAgreeProtocal
                                    ? "ifont-radioed iconfont"
                                    : "ifont-radio iconfont",
                                }),
                                " 阅读并同意",
                                (0, P.tZ)(p.Text, {
                                  className: "color-primary",
                                  id: "AKAC",
                                  onClick: function (e) {
                                    e.stopPropagation(), k();
                                  },
                                  children: "《好友帮抢票相关须知》",
                                }),
                              ],
                            }),
                            !m &&
                              (0, P.tZ)(p.Text, {
                                className: "color-primary qa",
                                id: "AKAD",
                                onClick: function () {
                                  Z();
                                },
                                children: "常见问题",
                              }),
                          ],
                        }),
                        (0, P.tZ)(p.View, {
                          className: "remark",
                          children: (0, P.tZ)(S.ZtRichText, {
                            nodes:
                              (null == f ||
                              null === (r = f.orderRelativeInfo) ||
                              void 0 === r
                                ? void 0
                                : r.remark) || "",
                          }),
                        }),
                      ],
                    }),
                  0 !=
                    (null == f
                      ? void 0
                      : f.relativeBindInfo.currentBindCount) &&
                    (null == f ||
                    null === (c = f.orderRelativeInfo) ||
                    void 0 === c
                      ? void 0
                      : c.orderRelativeRecord) &&
                    (0, P.BX)(p.View, {
                      className: "invite-box",
                      children: [
                        (0, P.tZ)(p.View, {
                          className: "tit",
                          children: (0, P.tZ)(p.View, {
                            className: "rich-box",
                            children: (0, P.tZ)(S.ZtRichText, {
                              nodes:
                                null == f ||
                                null === (s = f.orderRelativeInfo) ||
                                void 0 === s
                                  ? void 0
                                  : s.title,
                            }),
                          }),
                        }),
                        (0, P.tZ)(S.ZtRichText, {
                          className: "txt",
                          nodes:
                            null == f ||
                            null === (u = f.orderRelativeInfo) ||
                            void 0 === u
                              ? void 0
                              : u.subTitle,
                        }),
                        (0, P.tZ)(p.View, {
                          className: "invite-bd",
                          children: (0, P.tZ)(p.View, {
                            className: "invite-list",
                            children: new Array(C).fill(0).map(function (e, t) {
                              var i,
                                n =
                                  null == f ||
                                  null === (i = f.orderRelativeInfo) ||
                                  void 0 === i
                                    ? void 0
                                    : i.orderRelativeRecord[t];
                              if (n) {
                                var o = "";
                                try {
                                  o = decodeURIComponent(n.name);
                                } catch (e) {
                                  o = "用户";
                                }
                                return (
                                  o.length > 3 &&
                                    (o = o.substring(0, 2) + "..."),
                                  (0, P.BX)(
                                    p.View,
                                    {
                                      className: "item",
                                      children: [
                                        n.tag &&
                                          (0, P.tZ)(p.View, {
                                            className: "tag",
                                            children: n.tag,
                                          }),
                                        (0, P.tZ)(p.Image, {
                                          src:
                                            n.photo ||
                                            "https://pic.c-ctrip.com/train/zt/wechat/avatar-default-zx.png",
                                          className: "avatar",
                                        }),
                                        (0, P.tZ)(p.View, {
                                          className: "name",
                                          children:
                                            o ||
                                            "".concat(
                                              g.default.isTieyou
                                                ? "铁友"
                                                : "智行",
                                              "用户"
                                            ),
                                        }),
                                      ],
                                    },
                                    t
                                  )
                                );
                              }
                              return (0,
                              P.BX)(p.View, { className: "item", children: [(0, P.tZ)(p.Button, { className: "btn-add" }), (0, P.tZ)(p.View, { className: "txt", children: "待邀请" })] });
                            }),
                          }),
                        }),
                        0 ==
                          (null == f ||
                          null === (d = f.relativeBindInfo) ||
                          void 0 === d
                            ? void 0
                            : d.selfInviteState) &&
                          (0, P.tZ)(p.Button, {
                            className: "btn-submit",
                            openType: "".concat(
                              f.isAgreeProtocal && (0, V.JO)() ? "share" : ""
                            ),
                            id: "AKAE",
                            onClick: function () {
                              x();
                            },
                            "data-flag": "account-relative",
                            children:
                              f.orderRelativeInfo.btnName || "邀请好友帮抢票",
                          }),
                        0 !=
                          (null == f ||
                          null === (h = f.relativeBindInfo) ||
                          void 0 === h
                            ? void 0
                            : h.selfInviteState) &&
                          (0, P.tZ)(p.Button, {
                            className: "btn-submit-grey",
                            children:
                              f.orderRelativeInfo.btnName || "邀请好友帮抢票",
                          }),
                        (0, P.BX)(p.View, {
                          className: "txt tips",
                          id: "AKAF",
                          onClick: function () {
                            N();
                          },
                          children: [
                            (0, P.tZ)(p.Text, {
                              className: f.isAgreeProtocal
                                ? "ifont-radioed iconfont"
                                : "ifont-radio iconfont",
                            }),
                            " 阅读并同意",
                            (0, P.tZ)(p.Text, {
                              className: "color-primary",
                              id: "AKAG",
                              onClick: function (e) {
                                e.stopPropagation(), k();
                              },
                              children: "《好友帮抢票相关须知》",
                            }),
                            !m &&
                              (0, P.tZ)(p.Text, {
                                className: "color-primary qa",
                                id: "AKAH",
                                onClick: function (e) {
                                  e.stopPropagation(), Z();
                                },
                                children: "常见问题",
                              }),
                          ],
                        }),
                        (0, P.tZ)(p.View, {
                          className: "remark",
                          children: (0, P.tZ)(S.ZtRichText, {
                            nodes:
                              (null == f ||
                              null === (v = f.orderRelativeInfo) ||
                              void 0 === v
                                ? void 0
                                : v.remark) || "",
                          }),
                        }),
                      ],
                    }),
                ],
              });
            },
            K = i(25958),
            D = function (e) {
              var t = e.show,
                i = e.isTieyou,
                n = e.onClose,
                o = void 0 === n ? function () {} : n,
                a = e.onLeftButtonClick,
                l = void 0 === a ? function () {} : a,
                r = e.onRightButtonClick,
                c = void 0 === r ? function () {} : r;
              return (0, P.tZ)(K.Z, {
                show: t,
                onClose: function () {
                  return o();
                },
                hiddenCloseIcon: !0,
                ubtTrace: function () {},
                children: (0, P.BX)(p.View, {
                  className: "mutiply-server-tips-dialog",
                  children: [
                    (0, P.tZ)(p.View, {
                      className: "tit",
                      children: "温馨提示",
                    }),
                    (0, P.BX)(p.View, {
                      className: "mutiply-server-tips-dialog-desc",
                      children: [
                        (0, P.tZ)(p.Text, { children: "须同意" }),
                        (0, P.tZ)(p.Text, {
                          style: "color: #1A8CFF",
                          id: "AKAI",
                          onClick: function () {
                            B.Z.twebview({
                              data: {
                                url: "https://pages.c-ctrip.com/ztrip/document/hybq_br_rule.html?appid=".concat(
                                  i ? "1002" : "1003"
                                ),
                              },
                            });
                          },
                          children: "《多服务器抢票相关须知》",
                        }),
                        (0, P.tZ)(p.Text, { children: "即可邀请好友帮抢票" }),
                      ],
                    }),
                    (0, P.BX)(p.View, {
                      className: "multi-box",
                      children: [
                        (0, P.tZ)(p.Button, {
                          className: "left",
                          id: "AKAJ",
                          onClick: function () {
                            return l();
                          },
                          children: "残忍拒绝",
                        }),
                        (0, P.tZ)(p.Button, {
                          className: "right ".concat(i ? "ty" : "zx"),
                          openType: (0, V.JO)() ? "share" : "",
                          "data-flag": "account-relative",
                          id: "AKAK",
                          onClick: function () {
                            c();
                          },
                          children: "同意",
                        }),
                      ],
                    }),
                  ],
                }),
              });
            },
            X = i(9416),
            L = i(87402),
            F = "self",
            H = "relative",
            q = "unknown",
            U =
              (0, b.h)()(
                (n = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, v.Z)(i);
                  function i(e) {
                    var n;
                    (0, c.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, f.Z)((0, d.Z)(n), "pageId", "10650065262"),
                      (n.state = {
                        pageLength: 1,
                        isTieyou: g.default.isTieyou,
                        statusBarHeight: T.A.statusBarHeight,
                        userType: q,
                        selfAccountShareInfo: null,
                        relativeAccountInfo: null,
                        orderTicketInfo: null,
                        accountDesc: null,
                        headInfo: null,
                        isScheduleDetailShow: !1,
                        isWarmTipShow: !1,
                      });
                    var o = (
                      (0, w.getCurrentInstance)().router &&
                      (0, w.getCurrentInstance)().router.params
                    ).relativeKey;
                    return o
                      ? ((n.relativeKey = decodeURIComponent(o)),
                        N().hideShareMenu && N().hideShareMenu(),
                        n)
                      : (T.Z.relaunchHome(), (0, u.Z)(n));
                  }
                  return (
                    (0, s.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = N().getCurrentPages(),
                            t = e ? e.length : 1;
                          this.setState({ pageLength: t }),
                            k.ZP.isLogin ? this.initData() : this.doLogin();
                        },
                      },
                      {
                        key: "doLogin",
                        value: function () {
                          var e = this;
                          k.ZP.doLogin()
                            .then(function () {
                              e.initData();
                            })
                            .catch(function () {
                              e.doHomeBack();
                            });
                        },
                      },
                      {
                        key: "initData",
                        value: function () {
                          var e = this;
                          (0, X.aA)(
                            { relativeKey: this.relativeKey },
                            { checkFrameworkLogin: !0, checkLogin: !0 }
                          )
                            .then(function (t) {
                              if (t && 1 == t.resultCode) {
                                t.relativeKey &&
                                  (e.relativeKey = t.relativeKey);
                                try {
                                  e.doBusinessTrace(t);
                                } catch (e) {}
                                if (
                                  "self" == t.userType &&
                                  t.selfAccountShareInfo
                                ) {
                                  var i,
                                    n,
                                    o = t.selfAccountShareInfo,
                                    a = o.relativeBindInfo,
                                    l = o.headInfo,
                                    r = o.orderTicketInfo,
                                    c = o.orderRelativeInfo,
                                    s = o.relativeAccountDesc,
                                    u = {};
                                  (u.title = null == s ? void 0 : s.title),
                                    (u.descList =
                                      null == s ||
                                      null === (i = s.descList) ||
                                      void 0 === i
                                        ? void 0
                                        : i.map(function (e) {
                                            return {
                                              title: e.title,
                                              subTitle: e.subTitle,
                                              icon: e.icon,
                                            };
                                          })),
                                    e.setState(
                                      {
                                        userType: F,
                                        orderTicketInfo: e.formatOrderInfo(r),
                                        selfAccountShareInfo: {
                                          relativeBindInfo: {
                                            currentBindCount:
                                              (null == a
                                                ? void 0
                                                : a.currentBindCount) || 0,
                                            maxBindCount:
                                              (null == a
                                                ? void 0
                                                : a.maxBindCount) || 0,
                                            selfInviteState:
                                              null == a
                                                ? void 0
                                                : a.selfInviteState,
                                          },
                                          orderRelativeInfo: {
                                            title: null == c ? void 0 : c.title,
                                            subTitle:
                                              null == c ? void 0 : c.subTitle,
                                            btnName:
                                              null == c ? void 0 : c.btnName,
                                            orderRelativeRecord:
                                              null == c ||
                                              null ===
                                                (n = c.orderRelativeRecord) ||
                                              void 0 === n
                                                ? void 0
                                                : n.map(function (e) {
                                                    return {
                                                      tag: e.tag,
                                                      photo: e.photo,
                                                      name: e.name,
                                                    };
                                                  }),
                                            remark:
                                              null == c ? void 0 : c.remark,
                                          },
                                          needAgreeProtocal:
                                            0 ==
                                              (null == a
                                                ? void 0
                                                : a.currentBindCount) &&
                                            0 ==
                                              (null == a
                                                ? void 0
                                                : a.selfInviteState),
                                          isAgreeProtocal:
                                            0 !=
                                            (null == a
                                              ? void 0
                                              : a.currentBindCount),
                                        },
                                        headInfo: {
                                          title: null == l ? void 0 : l.title,
                                          subTitle:
                                            null == l ? void 0 : l.subTitle,
                                          bgImg: null == l ? void 0 : l.bgImg,
                                        },
                                        accountDesc: u,
                                      },
                                      function () {
                                        e.getMultiplyShareImage();
                                      }
                                    );
                                } else if (
                                  "relative" == t.userType &&
                                  t.relativeAccountInfo
                                ) {
                                  var d,
                                    h,
                                    v,
                                    f,
                                    m,
                                    p = t.relativeAccountInfo,
                                    g = p.relativeBindState,
                                    b = p.bindRelativeInfo,
                                    w = p.headInfo,
                                    N = p.relativeAccountDesc,
                                    T = p.orderTicketInfo,
                                    B = void 0 === T ? [] : T,
                                    Z = p.bindRelativeRights,
                                    y = void 0 === Z ? [] : Z,
                                    I = p.relativeAccountTips,
                                    A = p.unBindRelativeInfo;
                                  e.setState({
                                    userType: H,
                                    orderTicketInfo: e.formatOrderInfo(B),
                                    relativeAccountInfo: {
                                      relativeBindState: g,
                                      needAgreeProtocal: 0 == g,
                                      isAgreeProtocal: 0 != g,
                                      bindRelativeRights:
                                        null == y
                                          ? void 0
                                          : y.map(function (e) {
                                              return {
                                                icon: e.icon,
                                                title: e.title,
                                                subTitle: e.subTitle,
                                              };
                                            }),
                                      relativeAccountTips: {
                                        title: null == I ? void 0 : I.title,
                                        tipList:
                                          null == I ||
                                          null === (d = I.tipList) ||
                                          void 0 === d
                                            ? void 0
                                            : d.map(function (e) {
                                                return e;
                                              }),
                                      },
                                      bindRelativeInfo: {
                                        icon: null == b ? void 0 : b.icon,
                                        title: null == b ? void 0 : b.title,
                                        subTitle:
                                          null == b ? void 0 : b.subTitle,
                                        btnName: null == b ? void 0 : b.btnName,
                                      },
                                      unBindRelativeInfo: {
                                        unBindFlag:
                                          null == A ? void 0 : A.unBindFlag,
                                        title:
                                          null == A ||
                                          null === (h = A.unBindForbidToast) ||
                                          void 0 === h
                                            ? void 0
                                            : h.title,
                                        subTitle:
                                          null == A ||
                                          null === (v = A.unBindForbidToast) ||
                                          void 0 === v
                                            ? void 0
                                            : v.subTitle,
                                        btnName:
                                          null == A ||
                                          null === (f = A.unBindForbidToast) ||
                                          void 0 === f
                                            ? void 0
                                            : f.btnName,
                                      },
                                    },
                                    headInfo: {
                                      icon: null == w ? void 0 : w.icon,
                                      title: null == w ? void 0 : w.title,
                                      subTitle: null == w ? void 0 : w.subTitle,
                                    },
                                    accountDesc: {
                                      title: null == N ? void 0 : N.title,
                                      descList:
                                        null == N ||
                                        null === (m = N.descList) ||
                                        void 0 === m
                                          ? void 0
                                          : m.map(function (e) {
                                              return {
                                                title: e.title,
                                                subTitle: e.subTitle,
                                                icon: e.icon,
                                              };
                                            }),
                                    },
                                  }),
                                    1 == g &&
                                      e.redirectTo({
                                        url: "/pages/trainDetail/accountHelpOrder/index?relativeKey=".concat(
                                          encodeURIComponent(e.relativeKey)
                                        ),
                                      });
                                }
                              } else console.error("init data  result error ", t);
                            })
                            .catch(function (e) {
                              console.error("init data error ", e);
                            });
                        },
                      },
                      {
                        key: "doBusinessTrace",
                        value: function (e) {
                          if ("self" == e.userType) {
                            var t, i, n, o, a, l, r, c, s, u, d;
                            (d =
                              (null === (t = e.selfAccountShareInfo) ||
                              void 0 === t ||
                              null === (i = t.relativeBindInfo) ||
                              void 0 === i
                                ? void 0
                                : i.currentBindCount) ==
                              (null === (n = e.selfAccountShareInfo) ||
                              void 0 === n ||
                              null === (o = n.relativeBindInfo) ||
                              void 0 === o
                                ? void 0
                                : o.maxBindCount)
                                ? 2
                                : 0 ==
                                  (null === (a = e.selfAccountShareInfo) ||
                                  void 0 === a ||
                                  null === (l = a.relativeBindInfo) ||
                                  void 0 === l
                                    ? void 0
                                    : l.currentBindCount)
                                ? 0
                                : 1),
                              this.ubtTrace("HYBQ_br_wx_show", { state: d }),
                              0 ==
                                (null === (r = e.selfAccountShareInfo) ||
                                void 0 === r ||
                                null === (c = r.relativeBindInfo) ||
                                void 0 === c
                                  ? void 0
                                  : c.selfInviteState) &&
                                this.ubtTrace("HYBQ_br_wx_button_show", {
                                  state:
                                    0 ==
                                    (null === (s = e.selfAccountShareInfo) ||
                                    void 0 === s ||
                                    null === (u = s.relativeBindInfo) ||
                                    void 0 === u
                                      ? void 0
                                      : u.currentBindCount)
                                      ? "0"
                                      : "1",
                                });
                          } else
                            (0 != e.relativeAccountInfo.relativeBindState &&
                              2 != e.relativeAccountInfo.relativeBindState) ||
                              this.ubtTrace("HYBQ_hy_wqp_show", {}),
                              0 == e.relativeAccountInfo.relativeBindState &&
                                this.ubtTrace("HYBQ_hy_qpbutton_show", {}),
                              1 == e.relativeAccountInfo.relativeBindState &&
                                this.ubtTrace("HYBQ_hy_xdcg_show", {}),
                              1 != e.relativeAccountInfo.relativeBindState &&
                                0 != e.relativeAccountInfo.relativeBindState &&
                                this.ubtTrace("HYBQ_hy_qpcg_show", {});
                        },
                      },
                      {
                        key: "onScheduleDetailShowChange",
                        value: function () {
                          this.setState({
                            isScheduleDetailShow:
                              !this.state.isScheduleDetailShow,
                          });
                        },
                      },
                      {
                        key: "formatOrderInfo",
                        value: function (e) {
                          var t;
                          if (!e || !e[0]) return null;
                          var i = e[0],
                            n = i.fromDate.split(",");
                          return {
                            orderTicketType:
                              null == i ? void 0 : i.orderTicketType,
                            routeSequence: null == i ? void 0 : i.routeSequence,
                            trainNo: null == i ? void 0 : i.trainNo,
                            seatName: null == i ? void 0 : i.seatName,
                            fromStation: null == i ? void 0 : i.fromStation,
                            toStation: null == i ? void 0 : i.toStation,
                            fromDate: n
                              .map(function (e) {
                                return y.Z.formatDate(e, "M月D日");
                              })
                              .join("、"),
                            fromTime: null == i ? void 0 : i.fromTime,
                            toDate: null == i ? void 0 : i.toDate,
                            toTime: null == i ? void 0 : i.toTime,
                            tips: T.Z.convertAppTextToHtmlStr(
                              null == i ? void 0 : i.tips
                            ),
                            ticketInfoList:
                              (null == i ||
                              null === (t = i.ticketInfoList) ||
                              void 0 === t
                                ? void 0
                                : t.map(function (e) {
                                    return {
                                      passengerName: e.passengerName,
                                      passengerType: e.passengerType,
                                    };
                                  })) || [],
                          };
                        },
                      },
                      {
                        key: "getUserInfo",
                        value: function () {
                          return new Promise(function (e) {
                            T.Z.canUseGetUserProfile
                              ? (0, A.getUserProfileInfo)({
                                  getOnly: !1,
                                  desc: "告诉好友你是谁~",
                                })
                                  .then(function (t) {
                                    e({
                                      wxNickName: t.nickName || "",
                                      wxAvatar: t.avatarUrl || "",
                                    });
                                  })
                                  .catch(function () {
                                    e({ wxNickName: "", wxAvatar: "" });
                                  })
                              : e({ wxNickName: "", wxAvatar: "" });
                          });
                        },
                      },
                      {
                        key: "openWarmTip",
                        value: function () {
                          this.setState({ isWarmTipShow: !0 });
                        },
                      },
                      {
                        key: "closeWarmTip",
                        value: function () {
                          this.setState({ isWarmTipShow: !1 });
                        },
                      },
                      {
                        key: "onUnbindClick",
                        value: function (e) {
                          var t,
                            i,
                            n,
                            o = this,
                            a = this.state.relativeAccountInfo;
                          1 == e
                            ? (0, X.l3)({ relativeKey: this.relativeKey })
                                .then(function () {
                                  setTimeout(function () {
                                    o.initData();
                                  }, 300);
                                })
                                .catch(function () {})
                            : this.showCommonDialog({
                                title:
                                  null == a ||
                                  null === (t = a.unBindRelativeInfo) ||
                                  void 0 === t
                                    ? void 0
                                    : t.title,
                                content:
                                  null == a ||
                                  null === (i = a.unBindRelativeInfo) ||
                                  void 0 === i
                                    ? void 0
                                    : i.subTitle,
                                buttonName:
                                  null == a ||
                                  null === (n = a.unBindRelativeInfo) ||
                                  void 0 === n
                                    ? void 0
                                    : n.btnName,
                              });
                        },
                      },
                      {
                        key: "assistFriendWithAccount",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, l.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o,
                                a = arguments;
                              return (0, l.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            !(
                                              a.length > 0 && void 0 !== a[0]
                                            ) || a[0]),
                                          this.state.relativeAccountInfo
                                            .isAgreeProtocal)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          (0, A.showToast)(
                                            "请先阅读并同意下方服务协议~"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 4:
                                        return (e.next = 6), this.getUserInfo();
                                      case 6:
                                        if (
                                          (i = e.sent) &&
                                          i.wxNickName &&
                                          i.wxAvatar
                                        ) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          (0, A.showToast)(
                                            "请先授权昵称及头像~"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 10:
                                        if (
                                          ((n = L.WG.get()),
                                          (o =
                                            null == n ? void 0 : n.bind12306),
                                          n &&
                                            null != o &&
                                            o.name &&
                                            null != o &&
                                            o.pwd)
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        this.goLogin12306(), (e.next = 27);
                                        break;
                                      case 16:
                                        if (!t) {
                                          e.next = 26;
                                          break;
                                        }
                                        return (
                                          (0, A.showLoading)("请稍候"),
                                          (e.next = 20),
                                          this.check12306Useable(o.name, o.pwd)
                                        );
                                      case 20:
                                        if (e.sent) {
                                          e.next = 25;
                                          break;
                                        }
                                        return (
                                          (0, A.hideLoading)(),
                                          this.goLogin12306(),
                                          e.abrupt("return")
                                        );
                                      case 25:
                                        (0, A.hideLoading)();
                                      case 26:
                                        this._assist(o.name, o.pwd);
                                      case 27:
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
                        key: "_assist",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, l.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o,
                                a,
                                r = this,
                                c = arguments;
                              return (0, l.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            c.length > 0 && void 0 !== c[0]
                                              ? c[0]
                                              : ""),
                                          (i =
                                            c.length > 1 && void 0 !== c[1]
                                              ? c[1]
                                              : ""),
                                          this.ubtTrace(
                                            "HYBQ_hy_qpbutton_click",
                                            {}
                                          ),
                                          (n = x.ZP.encode12306Account({
                                            login12306Name: t,
                                            login12306Pas: i,
                                          })),
                                          (e.next = 6),
                                          this.getUserInfo()
                                        );
                                      case 6:
                                        (o = e.sent),
                                          (a = {
                                            relativeKey: this.relativeKey,
                                            bindType: 1,
                                            relativeT6AccountInfo: {
                                              accountName: n.login12306Name,
                                              accountPsw: n.login12306Pas,
                                            },
                                            relativeUserInfo: {
                                              photo: o.wxAvatar,
                                              nickName: encodeURIComponent(
                                                o.wxNickName
                                              ),
                                              openId: k.ZP.openid,
                                            },
                                          }),
                                          (0, X.Ex)(a)
                                            .then(function (e) {
                                              e && 1 == e.resultCode
                                                ? setTimeout(function () {
                                                    r.initData();
                                                  }, 300)
                                                : (0, A.showToast)(
                                                    e.resultMessage ||
                                                      "助力失败"
                                                  );
                                            })
                                            .catch(function (e) {
                                              console.error(e),
                                                (0, A.showToast)("助力失败");
                                            });
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
                        key: "check12306Useable",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, l.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o = arguments;
                              return (0, l.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((t =
                                          o.length > 0 && void 0 !== o[0]
                                            ? o[0]
                                            : ""),
                                        (i =
                                          o.length > 1 && void 0 !== o[1]
                                            ? o[1]
                                            : ""),
                                        t && i)
                                      ) {
                                        e.next = 4;
                                        break;
                                      }
                                      return e.abrupt("return", !1);
                                    case 4:
                                      return (
                                        (e.next = 6),
                                        (0, I.L5)({
                                          UserName: t,
                                          Password: i,
                                        }).catch(function () {})
                                      );
                                    case 6:
                                      return (
                                        (n = e.sent), e.abrupt("return", !!n)
                                      );
                                    case 8:
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
                      },
                      {
                        key: "goLogin12306",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, l.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o = this,
                                a = arguments;
                              return (0, l.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            a.length > 0 && void 0 !== a[0]
                                              ? a[0]
                                              : ""),
                                          (i =
                                            a.length > 1 && void 0 !== a[1]
                                              ? a[1]
                                              : ""),
                                          this.ubtTrace("HYBQ_hy_dl_show", {}),
                                          !(0, V.Uy)("isUseNew12306Pro"))
                                        ) {
                                          e.next = 14;
                                          break;
                                        }
                                        return (
                                          (e.prev = 4),
                                          (e.next = 7),
                                          this.navigateToAsync({
                                            url: "/pages/12306/login/login",
                                          })
                                        );
                                      case 7:
                                        this.ubtTrace("HYBQ_hy_dlcg_click", {}),
                                          this.assistFriendWithAccount(!1),
                                          (e.next = 13);
                                        break;
                                      case 11:
                                        (e.prev = 11), (e.t0 = e.catch(4));
                                      case 13:
                                        return e.abrupt("return");
                                      case 14:
                                        (n = "https://"
                                          .concat(
                                            g.default.h5domain,
                                            "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                                          )
                                          .concat(
                                            g.default.partner,
                                            "#/login?userName="
                                          )
                                          .concat(t, "&loginPW=")
                                          .concat(i, "&mobile=")
                                          .concat(
                                            k.ZP.userName || "",
                                            "&fromPage=accountHelp"
                                          )),
                                          B.Z.twebview({
                                            data: {
                                              url: n,
                                              bridgeIns: function (e) {
                                                if (
                                                  Array.isArray(e.detail.data)
                                                ) {
                                                  o.ubtTrace(
                                                    "HYBQ_hy_dlcg_click",
                                                    {}
                                                  );
                                                  var t = e.detail.data;
                                                  (0, Z.Tq)(t),
                                                    o.assistFriendWithAccount(
                                                      !1
                                                    );
                                                }
                                              },
                                            },
                                          });
                                      case 16:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[4, 11]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "doHomeBack",
                        value: function () {
                          T.Z.relaunchHome();
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          var e;
                          this.state.userType == F
                            ? this.ubtTrace("HYBQ_br_wx_back_click", {
                                state:
                                  0 ==
                                  this.state.selfAccountShareInfo
                                    .relativeBindInfo.currentBindCount
                                    ? "0"
                                    : "1",
                              })
                            : 0 ==
                                (null ===
                                  (e = this.state.relativeAccountInfo) ||
                                void 0 === e
                                  ? void 0
                                  : e.relativeBindState) &&
                              this.ubtTrace("HYBQ_hy_back_click", {}),
                            this.state.pageLength > 1
                              ? N().navigateBack()
                              : T.Z.relaunchHome();
                        },
                      },
                      {
                        key: "toProtocal",
                        value: function () {
                          B.Z.twebview({
                            data: {
                              url: g.default.isTieyou
                                ? "https://pages.ctrip.com/ztrip/document/policy.html"
                                : "https://pages.ctrip.com/ztrip/document/policyzx.html",
                            },
                          });
                        },
                      },
                      {
                        key: "toRelativeProtocal",
                        value: function (e) {
                          var t = e
                            ? "https://pages.c-ctrip.com/ztrip/document/hybq_br_rule.html"
                            : "https://pages.c-ctrip.com/ztrip/document/hybq_hy_rule.html";
                          B.Z.twebview({
                            data: {
                              url: ""
                                .concat(t, "?appid=")
                                .concat(g.default.isTieyou ? "1002" : "1003"),
                            },
                          });
                        },
                      },
                      {
                        key: "toggleRelativeProtocal",
                        value: function () {
                          this.setState({
                            relativeAccountInfo: (0, a.Z)(
                              (0, a.Z)({}, this.state.relativeAccountInfo),
                              {},
                              {
                                isAgreeProtocal:
                                  !this.state.relativeAccountInfo
                                    .isAgreeProtocal,
                              }
                            ),
                          });
                        },
                      },
                      {
                        key: "toggleSelfProtocal",
                        value: function () {
                          this.setState({
                            selfAccountShareInfo: (0, a.Z)(
                              (0, a.Z)({}, this.state.selfAccountShareInfo),
                              {},
                              {
                                isAgreeProtocal:
                                  !this.state.selfAccountShareInfo
                                    .isAgreeProtocal,
                              }
                            ),
                          });
                        },
                      },
                      {
                        key: "selfShareToFriend",
                        value: function () {
                          this.state.selfAccountShareInfo.isAgreeProtocal
                            ? ((0, V.JO)() || this.showMultiplyShareImagePop(),
                              this.ubtTrace("HYBQ_br_wx_button_click", {
                                state:
                                  0 ==
                                  this.state.selfAccountShareInfo
                                    .relativeBindInfo.currentBindCount
                                    ? "0"
                                    : "1",
                              }))
                            : (0, A.showToast)("请先阅读并同意下方服务协议~");
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          var e,
                            t,
                            i = "";
                          return (
                            (i =
                              this.state.userType == F
                                ? null === (e = this.state.orderTicketInfo) ||
                                  void 0 === e
                                  ? void 0
                                  : e.toStation
                                : null === (t = this.state.orderTicketInfo) ||
                                  void 0 === t
                                ? void 0
                                : t.toStation),
                            {
                              title: "「去".concat(
                                i,
                                "」的火车票太难抢啦，求助我一臂之力"
                              ),
                              path: (0, V.JP)(
                                "/pages/train/accounthelp/index1?relativeKey=".concat(
                                  encodeURIComponent(this.relativeKey)
                                )
                              ),
                              imageUrl:
                                "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/img_bqfxt@2x.png",
                              desc: "",
                            }
                          );
                        },
                      },
                      {
                        key: "showMultiplyShareImagePop",
                        value: function () {
                          this.setState({ showType: "MultiplyShareImagePop" });
                        },
                      },
                      {
                        key: "getMultiplyShareImage",
                        value: function () {
                          var e,
                            t =
                              (null === (e = this.state.orderTicketInfo) ||
                              void 0 === e
                                ? void 0
                                : e.toStation) || "";
                          if (this.relativeKey) {
                            var i = (0, V.JP)(
                                "/pages/train/accounthelp/index1?relativeKey=".concat(
                                  encodeURIComponent(this.relativeKey)
                                )
                              ),
                              n = "我正在抢「".concat(t || "", "」的火车票");
                            this.setState({
                              multiplyShareImage: { path: i, title: n },
                            });
                          }
                        },
                      },
                      {
                        key: "closeShowType",
                        value: function () {
                          this.setState({ showType: "" });
                        },
                      },
                      {
                        key: "renderScheduleDetail",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.orderTicketInfo,
                            n = t.isScheduleDetailShow;
                          return i
                            ? (0, P.BX)(p.View, {
                                className: "white-box order-box ".concat(
                                  n ? "open" : ""
                                ),
                                children: [
                                  (0, P.BX)(p.View, {
                                    className: "order-hd",
                                    children: [
                                      (0, P.tZ)(p.View, {
                                        className: "cont",
                                        children: (0, P.tZ)(p.View, {
                                          className: "tit",
                                          children: ""
                                            .concat(i.fromStation, "-")
                                            .concat(i.toStation),
                                        }),
                                      }),
                                      (0, P.BX)(p.View, {
                                        className: "rbox",
                                        id: "AKAL",
                                        onClick: function () {
                                          e.onScheduleDetailShowChange();
                                        },
                                        children: [
                                          n ? "收起详情" : "订单详情",
                                          (0, P.tZ)(p.Text, {
                                            className:
                                              "ifont-triangle iconfont",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  n &&
                                    (0, P.BX)(p.View, {
                                      className: "order-bd",
                                      children: [
                                        (0, P.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            (0, P.tZ)(p.View, {
                                              className: "label",
                                              children: "乘客",
                                            }),
                                            (0, P.tZ)(p.View, {
                                              className: "cont",
                                              children: "".concat(
                                                i.ticketInfoList
                                                  .map(function (e) {
                                                    return e.passengerName;
                                                  })
                                                  .join("、")
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, P.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            (0, P.tZ)(p.View, {
                                              className: "label",
                                              children: "日期",
                                            }),
                                            (0, P.tZ)(p.View, {
                                              className: "cont",
                                              children: i.fromDate || "",
                                            }),
                                          ],
                                        }),
                                        (0, P.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            (0, P.tZ)(p.View, {
                                              className: "label",
                                              children: "车次",
                                            }),
                                            (0, P.tZ)(p.View, {
                                              className: "cont",
                                              children: i.trainNo || "",
                                            }),
                                          ],
                                        }),
                                        (0, P.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            (0, P.tZ)(p.View, {
                                              className: "label",
                                              children: "座席",
                                            }),
                                            (0, P.tZ)(p.View, {
                                              className: "cont",
                                              children: i.seatName || "",
                                            }),
                                          ],
                                        }),
                                        (0, P.tZ)(p.View, {
                                          className: "tips",
                                          children: (0, P.tZ)(S.ZtRichText, {
                                            nodes: i.tips,
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, P.tZ)(p.View, {});
                        },
                      },
                      {
                        key: "renderRelativeBody",
                        value: function () {
                          var e = this,
                            t = this.state.relativeAccountInfo;
                          return (0, P.BX)(p.Block, {
                            children: [
                              0 == t.relativeBindState &&
                                this.renderScheduleDetail(),
                              0 == t.relativeBindState &&
                                (0, P.BX)(p.View, {
                                  className: "white-box login-12306",
                                  children: [
                                    (0, P.tZ)(p.Image, {
                                      mode: "widthFix",
                                      className: "icon-nohelp",
                                      src: t.bindRelativeInfo.icon,
                                    }),
                                    (0, P.tZ)(S.ZtRichText, {
                                      className: "tit",
                                      nodes: t.bindRelativeInfo.title,
                                    }),
                                    (0, P.tZ)(S.ZtRichText, {
                                      className: "txt",
                                      nodes: t.bindRelativeInfo.subTitle,
                                    }),
                                    (0, P.tZ)(p.View, {
                                      className: "btn-submit",
                                      id: "AKAM",
                                      onClick: function () {
                                        e.assistFriendWithAccount();
                                      },
                                      children:
                                        t.bindRelativeInfo.btnName ||
                                        "免费帮TA抢票",
                                    }),
                                    (0, P.BX)(p.View, {
                                      className: "txt tips",
                                      id: "AKAN",
                                      onClick: function () {
                                        e.toggleRelativeProtocal();
                                      },
                                      children: [
                                        (0, P.tZ)(p.Text, {
                                          className: t.isAgreeProtocal
                                            ? "ifont-radioed iconfont"
                                            : "ifont-radio iconfont",
                                        }),
                                        " 阅读并同意",
                                        (0, P.tZ)(p.Text, {
                                          className: "color-primary",
                                          id: "AKAO",
                                          onClick: function (t) {
                                            t.stopPropagation(),
                                              e.toRelativeProtocal(!1);
                                          },
                                          children: "《好友帮抢票相关须知》",
                                        }),
                                        (0, P.tZ)(p.Text, {
                                          className: "color-primary",
                                          id: "AKAP",
                                          onClick: function (t) {
                                            t.stopPropagation(), e.toProtocal();
                                          },
                                          children: "《服务协议》",
                                        }),
                                      ],
                                    }),
                                    (0, P.tZ)(p.View, {
                                      className: "login-advg",
                                      children:
                                        null == t
                                          ? void 0
                                          : t.bindRelativeRights.map(function (
                                              e,
                                              t
                                            ) {
                                              return (0, P.BX)(
                                                p.View,
                                                {
                                                  className: "item",
                                                  children: [
                                                    (0, P.tZ)(p.Image, {
                                                      src: e.icon,
                                                      mode: "widthFix",
                                                      className: "icon",
                                                    }),
                                                    (0, P.tZ)(p.View, {
                                                      className: "h",
                                                      children: e.title,
                                                    }),
                                                    (0, P.tZ)(p.View, {
                                                      className: "t",
                                                      children: e.subTitle,
                                                    }),
                                                  ],
                                                },
                                                t
                                              );
                                            }),
                                    }),
                                  ],
                                }),
                              0 != t.relativeBindState &&
                                (0, P.BX)(p.View, {
                                  className: "white-box suc-box",
                                  children: [
                                    (0, P.tZ)(p.Image, {
                                      mode: "widthFix",
                                      className: "icon-suc",
                                      src: t.bindRelativeInfo.icon,
                                    }),
                                    (0, P.tZ)(p.View, {
                                      className: "tit",
                                      children: (0, P.tZ)(S.ZtRichText, {
                                        nodes:
                                          t.bindRelativeInfo.title ||
                                          "您已帮好友下单成功",
                                      }),
                                    }),
                                    (0, P.tZ)(p.View, {
                                      className: "txt",
                                      children: (0, P.tZ)(S.ZtRichText, {
                                        nodes:
                                          t.bindRelativeInfo.subTitle ||
                                          "感谢你的帮助，好友将有可能用你的账号出票",
                                      }),
                                    }),
                                    (0, P.tZ)(p.Button, {
                                      className: "".concat(
                                        1 == t.relativeBindState
                                          ? "btn-submit"
                                          : "btn-submit-grey"
                                      ),
                                      id: "AKAQ",
                                      onClick: function () {
                                        e.doHomeBack();
                                      },
                                      children:
                                        t.bindRelativeInfo.btnName ||
                                        "回到首页",
                                    }),
                                  ],
                                }),
                              0 != t.relativeBindState &&
                                this.renderScheduleDetail(),
                            ],
                          });
                        },
                      },
                      {
                        key: "renderSelfBody",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.selfAccountShareInfo,
                            n = t.mutiplyServerTipsDialogVisible,
                            o = t.isTieyou;
                          return (0, P.BX)(P.HY, {
                            children: [
                              0 !==
                                (null == i
                                  ? void 0
                                  : i.relativeBindInfo.currentBindCount) &&
                                this.renderScheduleDetail(),
                              (0, P.tZ)(_, {
                                selfAccountShareInfo: i,
                                toggleSelfProtocal:
                                  this.toggleSelfProtocal.bind(this),
                                propStyle: {
                                  position: "relative",
                                  borderRadius: "20rpx",
                                  margin: "0 20rpx 20rpx 20rpx",
                                  overflow: "hidden",
                                },
                                isFromAccountHelp: !0,
                                onSharePicture:
                                  this.selfShareToFriend.bind(this),
                                onClickInNoAgree: function () {
                                  e.ubtTrace(205910, {
                                    exposureType: "popup",
                                    bizKey:
                                      "z_grabdetail_hybq_warm_prompt_popup_show",
                                  }),
                                    e.setState({
                                      mutiplyServerTipsDialogVisible: !0,
                                    });
                                },
                              }),
                              (0, P.tZ)(D, {
                                id: "AKFt",
                                show: n,
                                isTieyou: o,
                                onLeftButtonClick: function () {
                                  e.setState({
                                    mutiplyServerTipsDialogVisible: !1,
                                  });
                                },
                                onRightButtonClick: function () {
                                  e.toggleSelfProtocal(),
                                    e.setState({
                                      mutiplyServerTipsDialogVisible: !1,
                                    }),
                                    (0, V.JO)() ||
                                      e.showMultiplyShareImagePop();
                                },
                                onClose: this.closeShowType,
                              }),
                              0 ===
                                (null == i
                                  ? void 0
                                  : i.relativeBindInfo.currentBindCount) &&
                                this.renderScheduleDetail(),
                            ],
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i,
                            n,
                            o,
                            a,
                            l = this,
                            r = this.state,
                            c = r.pageLength,
                            s = r.statusBarHeight,
                            u = r.isTieyou,
                            d = r.userType,
                            h = r.relativeAccountInfo,
                            v = r.accountDesc,
                            f = r.headInfo,
                            m = r.isScheduleDetailShow,
                            g = r.isWarmTipShow,
                            b = r.multiplyShareImage,
                            w = r.showType;
                          return (0, P.BX)(p.View, {
                            className: "".concat(u ? "ty" : "zx"),
                            children: [
                              (0, P.BX)(p.View, {
                                className: "top-bar",
                                style: "padding-top: " + s + "px",
                                children: [
                                  (0, P.tZ)(p.Text, {
                                    className:
                                      1 == c
                                        ? "ifont-home iconfont"
                                        : "ifont-back iconfont",
                                    id: "AKAS",
                                    onClick: function () {
                                      l.onBack();
                                    },
                                  }),
                                  (0, P.tZ)(p.View, { className: "tit" }),
                                ],
                              }),
                              (0, P.BX)(p.View, {
                                className: "top-box",
                                style: "padding-top: " + (s + 52) + "px",
                                children: [
                                  d == F &&
                                    (0, P.BX)(p.View, {
                                      className: "top-own",
                                      children: [
                                        (0, P.tZ)(p.View, {
                                          className: "top-img",
                                        }),
                                        (0, P.tZ)(p.View, { className: "tit" }),
                                        (0, P.tZ)(p.View, { className: "txt" }),
                                      ],
                                    }),
                                  d == H &&
                                    0 ==
                                      (null == h
                                        ? void 0
                                        : h.relativeBindState) &&
                                    (0, P.BX)(p.View, {
                                      className: "top-friend",
                                      children: [
                                        (0, P.BX)(p.View, {
                                          className: "lbox",
                                          children: [
                                            (0, P.tZ)(p.Image, {
                                              src:
                                                (null == f ? void 0 : f.icon) ||
                                                "https://images3.c-ctrip.com/zt/activity/20210903-ztrip-wechat/avatar.png",
                                              className: "avatar",
                                            }),
                                            (0, P.tZ)(p.View, {
                                              className: "tag",
                                              children: "发起人",
                                            }),
                                          ],
                                        }),
                                        (0, P.tZ)(p.View, {
                                          className: "cont",
                                          children: (0, P.tZ)(p.View, {
                                            className: "txt",
                                            children:
                                              null == f ? void 0 : f.title,
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, P.BX)(p.View, {
                                className: "wrap",
                                children: [
                                  d == F && this.renderSelfBody(),
                                  d == H && this.renderRelativeBody(),
                                  v &&
                                    v.title &&
                                    (0, P.BX)(p.View, {
                                      className: "white-box qus-box",
                                      children: [
                                        (0, P.tZ)(p.View, {
                                          className: "tit",
                                          children: v.title,
                                        }),
                                        null === (e = v.descList) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e, t) {
                                              return (0,
                                              P.BX)(p.Block, { children: [(0, P.tZ)(p.View, { className: "txt-qus", children: e.title }), (0, P.tZ)(p.View, { className: "txt-anw", children: e.subTitle })] }, t);
                                            }),
                                      ],
                                    }),
                                  (null == h
                                    ? void 0
                                    : h.relativeAccountTips) &&
                                    (null == h ||
                                    null === (t = h.relativeAccountTips) ||
                                    void 0 === t
                                      ? void 0
                                      : t.title) &&
                                    (0, P.BX)(p.View, {
                                      className: "white-box qus-box",
                                      children: [
                                        (0, P.tZ)(p.View, {
                                          className: "tit",
                                          children:
                                            null == h ||
                                            null ===
                                              (i = h.relativeAccountTips) ||
                                            void 0 === i
                                              ? void 0
                                              : i.title,
                                        }),
                                        null == h ||
                                        null === (n = h.relativeAccountTips) ||
                                        void 0 === n
                                          ? void 0
                                          : n.tipList.map(function (e, t) {
                                              return (0,
                                              P.BX)(p.View, { className: "desc", children: [(0, P.tZ)(p.View, { className: "dot" }), (0, P.tZ)(p.View, { className: "content", children: e })] }, t);
                                            }),
                                      ],
                                    }),
                                  (1 ==
                                    (null == h ||
                                    null === (o = h.unBindRelativeInfo) ||
                                    void 0 === o
                                      ? void 0
                                      : o.unBindFlag) ||
                                    2 ==
                                      (null == h ||
                                      null === (a = h.unBindRelativeInfo) ||
                                      void 0 === a
                                        ? void 0
                                        : a.unBindFlag)) &&
                                    (0, P.tZ)(p.View, {
                                      className: "unbind-btn-box",
                                      id: "AKAT",
                                      onClick: function () {
                                        var e;
                                        l.onUnbindClick(
                                          null == h ||
                                            null ===
                                              (e = h.unBindRelativeInfo) ||
                                            void 0 === e
                                            ? void 0
                                            : e.unBindFlag
                                        );
                                      },
                                      children: "取消好友抢票",
                                    }),
                                  (0, P.tZ)(p.View, { className: "botm-advg" }),
                                  (0, P.tZ)(p.View, {
                                    children: (0, P.tZ)(S.ZtDrawer, {
                                      show: g,
                                      onClose: function () {
                                        return l.closeWarmTip();
                                      },
                                      title: "温馨提示",
                                      children: (0, P.BX)(p.View, {
                                        className: "warm-tip-box",
                                        children: [
                                          (0, P.tZ)(p.View, {
                                            className: "tips",
                                            children:
                                              "1、帮好友免费抢票，需要使用您的12306账号",
                                          }),
                                          (0, P.tZ)(p.View, {
                                            className: "tips",
                                            children:
                                              "2、若您帮好友抢票成功，将会把好友乘车人信息添加至您的12306账号中",
                                          }),
                                          (0, P.tZ)(p.View, {
                                            className: "tips",
                                            children:
                                              "3、请您点击同意前知晓智行使用您的12306账号帮好友抢票",
                                          }),
                                          (0, P.BX)(p.View, {
                                            className: "btn-box",
                                            children: [
                                              (0, P.tZ)(p.View, {
                                                className: "btn exit",
                                                id: "AKAU",
                                                onClick: function () {
                                                  l.closeWarmTip();
                                                },
                                                children: "退出",
                                              }),
                                              (0, P.tZ)(p.View, {
                                                className: "btn agree",
                                                id: "AKAV",
                                                onClick: function () {
                                                  l.assistFriendWithAccount();
                                                },
                                                children: "同意",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, P.tZ)(R.Z, {
                                    type: "normal",
                                    shareUrl: null == b ? void 0 : b.path,
                                    visible: "MultiplyShareImagePop" === w,
                                    onClose: this.closeShowType.bind(this),
                                    title: null == b ? void 0 : b.title,
                                  }),
                                  (0, P.tZ)(C.Z, {
                                    ref: function (e) {
                                      l.onDialogAttach(e);
                                    },
                                  }),
                                ],
                              }),
                              m &&
                                (0, P.tZ)(p.View, {
                                  className: "shade-box",
                                  id: "AKAW",
                                  onClick: function () {
                                    l.onScheduleDetailShowChange();
                                  },
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(m.Component))
              ) || n;
          (U.enableShareAppMessage = !0),
            Page(
              (0, o.createPageConfig)(
                U,
                "pages/train/accounthelp/index1",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "",
                  navigationBarBackgroundColor: "#0062FF",
                  backgroundColorTop: "#0062FF",
                  backgroundColorBottom: "#034BEE",
                  navigationStyle: "custom",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98655, 77, 58792, 86167, 79204, 41950, 78419, 96468, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(32445);
          }
        ),
          e.O();
      },
    ]);
})();
