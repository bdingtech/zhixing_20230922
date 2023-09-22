!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/dc0cfe7c36c66175a01e7585a0cfebf3.js"),
    require("../sub-common/3edb2b96731d94d93a96699eab306b50.js"),
    require("../sub-common/df4e17a6370f960d660d521bbd32cf3a.js"),
    require("../sub-common/2134ee5804fe59fe466b0b63fc7acddc.js"),
    require("../sub-common/88207e971f98eff8a3e10f6ee2b5063b.js"),
    require("../sub-common/d3422b412cb888582adccda3ed6c55c4.js"),
    require("../sub-common/30e2515ebd297ee708f98fe67f15a40b.js"),
    require("../sub-common/789d0e61f3340fac4da62181ad8a5446.js"),
    require("../sub-common/40f2b7bd8efebebc05ab739cbbb4a01d.js"),
    require("../sub-common/872d10eabc5bafd8ddd9d0be25c3b4cc.js"),
    require("../sub-common/9b151316d525b3cb0f9389c968a999e5.js"),
    require("../sub-common/fc6ca7e0e852bffe8bc29567b631b39c.js"),
    require("../sub-common/44bb459adf3b3cc2c7eba45f44f1a98d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [64018],
      {
        52424: function (e, t, n) {
          var i,
            a = n(32180),
            s = n(90129),
            o = n(90983),
            r = n(298),
            c = n(79301),
            l = n(95308),
            u = n(57042),
            d = n(24460),
            f = n(21867),
            h = n(86066),
            p = n(52500),
            m = n(92954),
            g = n.n(m),
            y = n(71515),
            b = n(81957),
            w = n(8271),
            v = n.n(w),
            k = n(79792),
            T = n(18783),
            x = n(79910),
            N = n(25391),
            Z = n(93761),
            I = n(3205),
            C = n(96158),
            S = n(97939),
            P = n(13025),
            V = n(10741),
            M = n(49120),
            B = n(34229),
            _ = n(58676),
            A = n(48813),
            L = p.default.memo(function (e) {
              var t = e.show,
                n = e.productInfo,
                i = void 0 === n ? [] : n,
                a = e.confirm,
                o = void 0 === a ? function () {} : a,
                r = e.ubtTrace,
                c = void 0 === r ? function () {} : r,
                l = (0, p.useState)(-1),
                u = (0, s.Z)(l, 2),
                d = u[0],
                f = u[1];
              if (
                ((0, p.useEffect)(
                  function () {
                    t &&
                      i.length > 0 &&
                      i.map(function (e) {
                        var t = e.productId;
                        c(197741, {
                          exposureType: "normal",
                          bizKey: "z_mini_blockpage_manual_ticket_show",
                          productId: t,
                        });
                      });
                  },
                  [t, i]
                ),
                !t || x.Z.isEmptyObject(i))
              )
                return null;
              var h = function (e) {
                  var t = e.productId;
                  c(197742, {
                    bizKey: "z_mini_blockpage_manual_ticket_click",
                    productId: t,
                  }),
                    o(e);
                },
                m = function (e) {
                  f(d == e ? -1 : e);
                };
              return (0, A.tZ)(y.View, {
                className: "train-dark-components-force-bind-box",
                children:
                  t &&
                  i.map(function (e, t) {
                    var n,
                      i,
                      a = e.title,
                      s = e.subTitle,
                      o = e.buttonName,
                      r = e.priceTag,
                      c = e.newUserOrMemberIcon,
                      l = e.favorType,
                      u = e.currentPrice,
                      f = e.originalPrice;
                    return (0, A.BX)(
                      y.View,
                      {
                        className: "white-box skip-box",
                        children: [
                          (0, A.BX)(y.View, {
                            className: "solution-index ".concat(
                              k.default.isTieyou ? "ty" : "zx"
                            ),
                            children: ["方式", "".concat(t + 2)],
                          }),
                          (0, A.BX)(y.View, {
                            className: "content-box",
                            children: [
                              (0, A.tZ)(y.Icon, {
                                className:
                                  "icon-logo " +
                                  (k.default.isTieyou ? "ty" : "zx"),
                              }),
                              (0, A.BX)(y.View, {
                                className: "cont",
                                children: [
                                  (0, A.tZ)(y.View, {
                                    className: "tit",
                                    children: a,
                                  }),
                                  c
                                    ? (0, A.BX)(y.View, {
                                        className: "sub-tit",
                                        children: [
                                          (0, A.tZ)(y.Image, {
                                            className:
                                              1 === l
                                                ? "member-icon long"
                                                : "member-icon",
                                            src: c,
                                          }),
                                          (0, A.tZ)(y.View, {
                                            className: "current-price",
                                            children: u,
                                          }),
                                          (0, A.tZ)(y.View, {
                                            className: "origin-price",
                                            children: f,
                                          }),
                                        ],
                                      })
                                    : (0, A.BX)(y.View, {
                                        className: "txt",
                                        children: [
                                          (0, A.tZ)(B.ZtRichText, {
                                            space: "nbsp",
                                            nodes:
                                              x.Z.convertAppTextToHtmlStr(s),
                                          }),
                                          !(
                                            null === (n = e.productTips) ||
                                            void 0 === n ||
                                            !n.length
                                          ) &&
                                            (0, A.tZ)(y.View, {
                                              className: "".concat(
                                                d == t
                                                  ? "arrow-active"
                                                  : "arrow",
                                                " ifont-open iconfont"
                                              ),
                                              id: "AADa",
                                              onClick: function () {
                                                return m(t);
                                              },
                                            }),
                                        ],
                                      }),
                                ],
                              }),
                              !c &&
                                r &&
                                (0, A.tZ)(y.View, {
                                  className: "rbox",
                                  children: r,
                                }),
                              (0, A.tZ)(y.Button, {
                                className: "btn btn-drawer ".concat(
                                  k.default.isTieyou ? "ty" : "zx"
                                ),
                                id: "AADb",
                                onClick: function () {
                                  return h(e);
                                },
                                children: o,
                              }),
                            ],
                          }),
                          !(
                            null === (i = e.productTips) ||
                            void 0 === i ||
                            !i.length
                          ) &&
                            d == t &&
                            (0, A.BX)(y.View, {
                              className: "detail",
                              children: [
                                (0, A.tZ)(y.View, { className: "line" }),
                                (0, A.tZ)(y.View, {
                                  children: e.productTips.map(function (e, t) {
                                    return (0,
                                    A.tZ)(y.View, { className: "detail-desc", children: (0, A.tZ)(B.ZtRichText, { nodes: e }) }, t);
                                  }),
                                }),
                              ],
                            }),
                        ],
                      },
                      "".concat(t, "_skip_box")
                    );
                  }),
              });
            }),
            D = n(71625),
            F = p.default.memo(function (e) {
              var t = e.isTieyou,
                n = e.show,
                i = e.title,
                a = void 0 === i ? "出票中断，请切换账号" : i,
                s = e.do12306LoginAction,
                o = void 0 === s ? function () {} : s;
              return (0,
              A.tZ)(y.View, { className: "train-dark-component-check-account-ready", children: n && (0, A.BX)(y.View, { className: "white-box check-account-card check-account-box-position", children: [(0, A.tZ)(y.View, { className: "top-tag " + (k.default.isTieyou ? "ty" : "zx"), children: "方式1" }), (0, A.tZ)(y.View, { className: "account-card", children: (0, A.tZ)(y.View, { className: "icon " + (t ? "ty" : "zx") }) }), (0, A.tZ)(y.View, { className: "tit", children: a }), (0, A.tZ)(y.View, { className: "txt", children: "当前登录12306账号存在异常，请切换账号继续出票" }), (0, A.tZ)(y.Button, { className: "btn-linear " + (t ? "ty" : "zx"), id: "AgAZ", onClick: o, children: "切换账号登录" })] }) });
            }),
            R = p.default.memo(function (e) {
              var t = (0, p.useState)(!1),
                n = (0, s.Z)(t, 2),
                i = n[0],
                a = n[1],
                o = (0, p.useState)(!1),
                r = (0, s.Z)(o, 2),
                c = r[0],
                l = r[1],
                u = e.orderInfo,
                d = void 0 === u ? null : u;
              return (
                (0, p.useEffect)(function () {
                  var e = (d || {}).orderTicketList,
                    t = !!d,
                    n =
                      !!(e && e.length > 1) && e[0].fromDate !== e[1].fromDate;
                  a(t), l(n);
                }, []),
                d
                  ? (0, A.tZ)(y.View, {
                      className: "train-dark-components-order-info-box",
                      children:
                        i &&
                        (0, A.BX)(y.View, {
                          className: "white-box order-box",
                          children: [
                            (0, A.BX)(y.View, {
                              className: "order-hd",
                              children: [
                                (0, A.tZ)(y.View, {
                                  className: "tit",
                                  children: "订单详情",
                                }),
                                d.orderStatedescription &&
                                  (0, A.tZ)(y.View, {
                                    className: "desc",
                                    children: d.orderStatedescription,
                                  }),
                              ],
                            }),
                            c
                              ? (0, A.tZ)(y.Block, {
                                  children:
                                    d.orderTicketList &&
                                    d.orderTicketList.map(function (e, t) {
                                      return (0,
                                      A.BX)(y.View, { className: "order-bd", children: [(0, A.BX)(y.View, { className: "tit", children: [e.fromDate, " 出发", (0, A.tZ)(y.Text, { className: "rbox passenger", children: d.passengerStr })] }), (0, A.BX)(y.View, { className: "txt", children: [e.fromTime, e.fromStation, " - ", e.toTime, !!e.takeDays && (0, A.BX)(y.Text, { className: "day", children: ["+", e.takeDays] }), e.toStation, (0, A.tZ)(y.Text, { className: "rbox", children: e.seatName })] })] }, t);
                                    }),
                                })
                              : (0, A.BX)(y.View, {
                                  className: "order-bd",
                                  children: [
                                    (0, A.BX)(y.View, {
                                      className: "tit",
                                      children: [
                                        d.orderTicketList &&
                                          d.orderTicketList[0].fromDate,
                                        " 出发",
                                        (0, A.tZ)(y.Text, {
                                          className: "rbox passenger",
                                          children: d.passengerStr,
                                        }),
                                      ],
                                    }),
                                    d.orderTicketList &&
                                      d.orderTicketList.map(function (e, t) {
                                        return (0,
                                        A.BX)(y.View, { className: "txt", children: [e.fromTime, e.fromStation, " - ", e.toTime, !!e.takeDays && (0, A.BX)(y.Text, { className: "day", children: ["+", e.takeDays] }), e.toStation, (0, A.tZ)(y.Text, { className: "rbox", children: e.seatName })] }, t);
                                      }),
                                  ],
                                }),
                          ],
                        }),
                    })
                  : (0, A.tZ)(y.View, {})
              );
            }),
            O = p.default.memo(function (e) {
              var t = e.show,
                n = void 0 !== t && t,
                i = e.title,
                a = void 0 === i ? "正在出票中，请稍候..." : i,
                s = e.btnName,
                o = void 0 === s ? "刷新状态" : s,
                r = e.refresh,
                c = void 0 === r ? function () {} : r;
              return (0,
              A.tZ)(y.View, { className: "train-dark-components-loading-status-box", children: n && (0, A.BX)(y.View, { className: "white-box wait-status", children: [(0, A.BX)(y.View, { className: "wait-status-hd " + (k.default.isTieyou ? "ty" : "zx"), children: [(0, A.tZ)(y.Icon, { className: "icon-wait" }), (0, A.tZ)(y.Icon, { className: "icon-loading" })] }), (0, A.tZ)(y.View, { className: "tit", children: a }), (0, A.tZ)(y.Button, { className: "btn-linear " + (k.default.isTieyou ? "ty" : "zx"), id: "AgAj", onClick: c, children: o })] }) });
            }),
            X = p.default.memo(function (e) {
              var t = e.show,
                n = void 0 === t || t,
                i = e.isTieyou;
              return (0,
              A.tZ)(y.View, { className: "train-dark-components-login-12306-box", children: n && (0, A.BX)(y.View, { className: "white-box login-12306", children: [(0, A.tZ)(y.View, { className: "tit", children: "请登录12306账号" }), (0, A.BX)(y.View, { className: "input-list", children: [(0, A.tZ)(y.View, { className: "item", children: (0, A.tZ)(y.View, { className: "cont", children: (0, A.tZ)(y.Input, { type: "text", className: "input-txt", placeholder: "用户名/手机号/邮箱", "placeholder-class": "input-plc" }) }) }), (0, A.BX)(y.View, { className: "item", children: [(0, A.tZ)(y.View, { className: "cont", children: (0, A.tZ)(y.Input, { type: "password", className: "input-txt", placeholder: "请输入12306密码", "placeholder-class": "input-plc" }) }), (0, A.tZ)(y.Text, { className: "ifont-eyeclosed iconfont" })] })] }), (0, A.tZ)(y.Button, { className: "btn-linear " + (i ? "ty" : "zx"), children: "确定" }), (0, A.BX)(y.View, { className: "login-botm", children: [(0, A.tZ)(y.View, { className: "color-primary", children: "注册账号" }), (0, A.tZ)(y.View, { className: "color-primary", children: "忘记密码？" })] })] }) });
            }),
            z = p.default.memo(function (e) {
              var t = e.show,
                n = e.isTieyou,
                i = void 0 !== n && n,
                a = e.registerInfo,
                s = void 0 === a ? null : a,
                o = e.sendMessage,
                r = void 0 === o ? function () {} : o,
                c = e.title,
                l = void 0 === c ? "" : c;
              if (s)
                return (0, A.tZ)(y.View, {
                  className: "train-dark-components-register-step1-box",
                  children:
                    t &&
                    (0, A.BX)(y.View, {
                      className: "white-box import-before",
                      children: [
                        (0, A.tZ)(y.Icon, {
                          className: "icon-phone-heyan " + (i ? "ty" : "zx"),
                        }),
                        (0, A.tZ)(y.View, { className: "tit", children: l }),
                        (0, A.BX)(y.View, {
                          className: "txt",
                          children: [
                            "使用手机",
                            (0, A.tZ)(y.Text, {
                              className: "color-red",
                              children: s.mobileWithGap,
                            }),
                            "发送短信",
                            (0, A.tZ)(y.Text, {
                              className: "color-red",
                              children: "999",
                            }),
                            "到",
                            (0, A.tZ)(y.Text, {
                              className: "color-red",
                              children: "12306",
                            }),
                          ],
                        }),
                        (0, A.tZ)(y.Button, {
                          className: "btn-linear " + (i ? "ty" : "zx"),
                          id: "AgAn",
                          onClick: r,
                          children: "已复制 立即发送",
                        }),
                        (0, A.BX)(y.View, {
                          className: "txt-info tgrey",
                          children: [
                            (0, A.tZ)(y.Text, {
                              className: "ifont-light iconfont",
                            }),
                            "认证仅需",
                            (0, A.tZ)(y.Text, {
                              className: "color-green",
                              children: "10s",
                            }),
                            "，下次购票无需再认证",
                          ],
                        }),
                      ],
                    }),
                });
            }),
            j = p.default.memo(function (e) {
              var t = (0, p.useState)(""),
                n = (0, s.Z)(t, 2),
                i = n[0],
                a = n[1],
                o = e.show,
                r = void 0 !== o && o,
                c = e.isTieyou,
                l = void 0 !== c && c,
                u = e.confirm,
                d = void 0 === u ? function () {} : u,
                f = e.cancel,
                h = void 0 === f ? function () {} : f;
              return (0, A.tZ)(y.View, {
                className: "train-dark-components-register-step2-box",
                children:
                  r &&
                  (0, A.BX)(y.View, {
                    className: "white-box import-code",
                    children: [
                      (0, A.tZ)(y.Icon, {
                        className: "icon-phone-code " + (l ? "ty" : "zx"),
                      }),
                      (0, A.tZ)(y.View, {
                        className: "tit",
                        children: "输入从12306回复的验证码",
                      }),
                      (0, A.tZ)(y.View, {
                        className: "input-list",
                        children: (0, A.tZ)(y.View, {
                          className: "item",
                          children: (0, A.tZ)(y.View, {
                            className: "cont",
                            children: (0, A.tZ)(y.Input, {
                              type: "text",
                              className: "input-txt",
                              value: i,
                              placeholder: "请输入验证码",
                              "placeholder-class": "input-plc",
                              onInput: function (e) {
                                var t = e.detail.value;
                                a(t);
                              },
                            }),
                          }),
                        }),
                      }),
                      (0, A.tZ)(y.Button, {
                        className: "btn-linear " + (l ? "ty" : "zx"),
                        id: "AgAo",
                        onClick: function () {
                          i
                            ? d(i)
                            : g().showToast({
                                title: "请先输入验证码~",
                                icon: "none",
                                duration: 1500,
                              });
                        },
                        children: "确定",
                      }),
                      (0, A.tZ)(y.View, {
                        className: "txt-info color-primary",
                        id: "AgAp",
                        onClick: h,
                        children: "没收到验证码? 返回上一步",
                      }),
                    ],
                  }),
              });
            }),
            W = p.default.memo(function (e) {
              var t = (0, p.useState)(""),
                n = (0, s.Z)(t, 2),
                i = n[0],
                a = n[1],
                o = (0, p.useState)(""),
                r = (0, s.Z)(o, 2),
                c = r[0],
                l = r[1],
                u = e.show,
                d = e.isTieyou,
                f = e.mobile,
                h = void 0 === f ? "" : f,
                m = e.confirm,
                b = void 0 === m ? function () {} : m,
                w = e.cancel,
                v = void 0 === w ? function () {} : w;
              (0, p.useEffect)(
                function () {
                  var e = h;
                  (e = ""
                    .concat(e.substring(0, 3), "-")
                    .concat(e.substring(3, 7), "-")
                    .concat(e.substring(7, 11))),
                    a(e);
                },
                [h]
              );
              return (0, A.tZ)(y.View, {
                className: "train-dark-components-register-step2-remind-box",
                children:
                  u &&
                  (0, A.BX)(y.View, {
                    className: "white-box import-code",
                    children: [
                      (0, A.tZ)(y.Icon, {
                        className: "icon-phone-code " + (d ? "ty" : "zx"),
                      }),
                      (0, A.BX)(y.View, {
                        className: "tit",
                        children: [
                          "使用手机 ",
                          (0, A.tZ)(y.Text, {
                            className: "color-red",
                            children: i,
                          }),
                          " 发送短信 ",
                          (0, A.tZ)(y.Text, {
                            className: "color-red",
                            children: "999",
                          }),
                          " 到12306",
                        ],
                      }),
                      (0, A.tZ)(y.View, {
                        className: "txt",
                        children: "如使用双卡双待手机，请切换至对应手机号",
                      }),
                      (0, A.tZ)(y.View, {
                        className: "input-list",
                        children: (0, A.tZ)(y.View, {
                          className: "item",
                          children: (0, A.tZ)(y.View, {
                            className: "cont",
                            children: (0, A.tZ)(y.Input, {
                              type: "text",
                              className: "input-txt",
                              placeholder: "请输入验证码",
                              "placeholder-class": "input-plc",
                              onInput: function (e) {
                                var t = e.detail.value;
                                l(t);
                              },
                            }),
                          }),
                        }),
                      }),
                      (0, A.tZ)(y.Button, {
                        className: "btn-linear " + (d ? "ty" : "zx"),
                        disabled: c,
                        id: "AgAq",
                        onClick: function () {
                          c
                            ? b(c)
                            : g().showToast({
                                title: "请先输入验证码~",
                                icon: "none",
                                duration: 1500,
                              });
                        },
                        children: "确定",
                      }),
                      (0, A.tZ)(y.View, {
                        className: "txt-info color-primary",
                        id: "AgAr",
                        onClick: v,
                        children: "没收到验证码? 返回上一步",
                      }),
                    ],
                  }),
              });
            }),
            q = n(37817),
            U = p.default.memo(function (e) {
              var t = e.show,
                n = e.isTieyou,
                i = e.mobile,
                a = e.confirm,
                s = void 0 === a ? function () {} : a;
              return (0,
              A.tZ)(y.View, { className: "train-dark-components-untie-12306-account-box", children: t && (0, A.BX)(y.View, { className: "white-box phone-done", children: [(0, A.tZ)(y.View, { className: "tit", children: "手机号已被注册" }), (0, A.BX)(y.View, { className: "txt", children: ["您的手机「", i, "」已被其他用户绑定"] }), (0, A.BX)(y.View, { className: "phone-done-bd " + (n ? "ty" : "zx"), children: [(0, A.BX)(y.View, { className: "info", children: ["如", (0, A.tZ)(y.Text, { className: "color-primary", children: i }), "为您本人使用，请尝试", (0, A.tZ)(y.Text, { className: "color-primary", children: "拨打12306" }), "解绑该手机号"] }), (0, A.BX)(y.View, { className: "item", children: [(0, A.tZ)(y.View, { className: "strong color-primary", children: "按“1”" }), (0, A.tZ)(y.View, { className: "tgrey", children: "选择普通话服务" })] }), (0, A.BX)(y.View, { className: "item", children: [(0, A.tZ)(y.View, { className: "strong color-primary", children: "按“4”" }), (0, A.tZ)(y.View, { className: "tgrey", children: "选择选择铁路畅行常旅客服务" })] }), (0, A.BX)(y.View, { className: "item", children: [(0, A.tZ)(y.View, { className: "strong color-primary", children: "按“0” " }), (0, A.tZ)(y.View, { className: "tgrey", children: "选择人工服务" })] })] }), (0, A.tZ)(y.Button, { className: "btn-linear " + (n ? "ty" : "zx"), id: "AgAv", onClick: s, children: "已成功解绑手机号" }), (0, A.BX)(y.View, { className: "txt-info tgrey", children: [(0, A.tZ)(y.Text, { className: "ifont-light iconfont" }), "认证仅需", (0, A.tZ)(y.Text, { className: "color-green", children: "10s" }), "，下次购票无需再认证"] })] }) });
            }),
            E = p.default.memo(function (e) {
              var t = e.show,
                n = e.mobile,
                i = void 0 === n ? "" : n,
                a = e.title,
                s = void 0 === a ? "" : a,
                o = e.verify,
                r = void 0 === o ? function () {} : o;
              return (0,
              A.tZ)(y.View, { className: "train-dark-components-register-text-verify-box", children: t && (0, A.BX)(y.View, { className: "white-box import-before", children: [(0, A.tZ)(y.Icon, { className: "icon-phone-heyan " + (k.default.isTieyou ? "ty" : "zx") }), (0, A.tZ)(y.View, { className: "tit", children: s }), (0, A.BX)(y.View, { className: "txt", children: ["使用手机", (0, A.tZ)(y.Text, { className: "color-red", children: i }), "发送短信", (0, A.tZ)(y.Text, { className: "color-red", children: "666" }), "到", (0, A.tZ)(y.Text, { className: "color-red", children: "12306" })] }), (0, A.tZ)(y.Button, { className: "btn-linear " + (k.default.isTieyou ? "ty" : "zx"), id: "AgAs", onClick: r, children: "立即验证" }), (0, A.BX)(y.View, { className: "txt-info tgrey", children: [(0, A.tZ)(y.Text, { className: "ifont-light iconfont" }), "认证仅需", (0, A.tZ)(y.Text, { className: "color-green", children: "10s" }), "，下次购票无需再认证"] })] }) });
            }),
            K = p.default.memo(function (e) {
              var t = e.isTieyou,
                n = e.show,
                i = e.title,
                a = void 0 === i ? "请完成本人实名认证" : i,
                s = e.doCheckCardIDAction,
                o = void 0 === s ? function () {} : s;
              return (0,
              A.tZ)(y.View, { className: "train-dark-component-check-card-id", children: n && (0, A.BX)(y.View, { className: "white-box check-user-card", children: [(0, A.tZ)(y.View, { className: "user-card", children: (0, A.tZ)(y.View, { className: "icon " + (t ? "ty" : "zx") }) }), (0, A.tZ)(y.View, { className: "tit", children: a }), (0, A.tZ)(y.Button, { className: "btn-linear " + (t ? "ty" : "zx"), id: "AgAa", onClick: o, children: "去认证" })] }) });
            }),
            J = n(95953),
            H = p.default.memo(function (e) {
              var t = e.visible,
                n = e.onClose,
                i = e.login12306Name,
                a = e.passwordModalInfo,
                s = e.onClickSave,
                o = e.ubtTrace,
                r = void 0 === o ? function () {} : o;
              return (
                (0, p.useEffect)(
                  function () {
                    t &&
                      r(197741, {
                        exposureType: "popup",
                        bizKey: "mini_t_infocodepopup_show",
                      });
                  },
                  [t]
                ),
                a
                  ? (0, A.tZ)(B.ZtActivityPop, {
                      className: "password-pop ".concat(
                        k.default.isTieyou ? "ty" : "zx"
                      ),
                      show: t,
                      isShowClose: !0,
                      onClose: n,
                      children: (0, A.BX)(y.View, {
                        className: "password-pop-ct",
                        children: [
                          (0, A.tZ)(y.View, { className: "top-icon" }),
                          (0, A.tZ)(y.View, { className: "top-image" }),
                          (0, A.tZ)(y.View, {
                            className: "title",
                            children: "实名认证成功",
                          }),
                          (0, A.tZ)(y.View, {
                            className: "desc",
                            children: "已为您重置12306密码",
                          }),
                          (0, A.BX)(y.View, {
                            className: "content",
                            children: [
                              (0, A.BX)(y.View, {
                                className: "item",
                                children: [
                                  (0, A.tZ)(y.View, {
                                    className: "txt",
                                    children: "账户名",
                                  }),
                                  (0, A.tZ)(y.View, {
                                    className: "info",
                                    children: i || a.mobileNo,
                                  }),
                                ],
                              }),
                              (0, A.BX)(y.View, {
                                className: "item",
                                children: [
                                  (0, A.tZ)(y.View, {
                                    className: "txt",
                                    children: "密码",
                                  }),
                                  (0, A.tZ)(y.View, {
                                    className: "info",
                                    children: a.password,
                                  }),
                                ],
                              }),
                              (0, A.BX)(y.View, {
                                className: "item",
                                children: [
                                  (0, A.tZ)(y.View, {
                                    className: "txt",
                                    children: "手机",
                                  }),
                                  (0, A.tZ)(y.View, {
                                    className: "info",
                                    children: a.mobileNo,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, A.tZ)(y.View, {
                            className: "btn bgcolor-primary",
                            id: "AgAl",
                            onClick: s,
                            children: "保存图片",
                          }),
                        ],
                      }),
                    })
                  : (0, A.tZ)(y.View, {})
              );
            }),
            G = n(77900),
            $ = n(22276),
            Q = function (e) {
              var t = e.length,
                n = void 0 === t ? 6 : t,
                i = e.leftText,
                a = void 0 === i ? "" : i,
                o = e.rightText,
                r = void 0 === o ? "" : o,
                c = e.onInput,
                l = void 0 === c ? "" : c,
                u = (0, p.useState)(""),
                d = (0, s.Z)(u, 2),
                f = d[0],
                h = d[1];
              (0, p.useEffect)(
                function () {
                  l("".concat(a).concat(f).concat(r));
                },
                [f]
              );
              return (0, A.BX)(y.View, {
                className: "text-completed-input flex",
                children: [
                  (0, A.tZ)(y.Text, { children: a }),
                  (0, $.Z)(new Array(n)).map(function (e, t) {
                    return (0,
                    A.tZ)(y.View, { className: "inner-input-show ".concat(f[t] ? "with-value" : ""), children: f[t] }, t);
                  }),
                  (0, A.tZ)(y.Input, {
                    className: "inner-input",
                    type: "text",
                    onInput: function (e) {
                      h(e.detail.value);
                    },
                    maxlength: n,
                    cursorSpacing: 50,
                    value: f,
                  }),
                  (0, A.tZ)(y.Text, { children: r }),
                ],
              });
            },
            Y = n(34405),
            ee = function (e) {
              var t,
                n,
                i,
                a,
                o = e.currentOrderAccountInfo,
                r = e.isTieyou,
                c = e.onVerify,
                l = void 0 === c ? function () {} : c,
                u = (0, p.useState)(""),
                d = (0, s.Z)(u, 2),
                f = d[0],
                h = d[1],
                m = (0, p.useState)(o.accountMobile),
                g = (0, s.Z)(m, 2),
                b = g[0],
                w = g[1],
                v = (0, p.useState)(o.accountPassportName),
                k = (0, s.Z)(v, 2),
                T = k[0],
                x = k[1],
                N = (0, p.useState)(!1),
                Z = (0, s.Z)(N, 2),
                I = Z[0],
                C = Z[1];
              (0, p.useEffect)(
                function () {
                  T && f && G.Z.isValidSFZ(f) && b && G.Z.isMobile(b)
                    ? C(!0)
                    : C(!1);
                },
                [f, T, b]
              );
              var S = o || {},
                P = S.userName,
                V = S.accountPassportName;
              return (0, A.tZ)(y.View, {
                className: "train-dark-component-mask-completed",
                children: (0, A.BX)(y.View, {
                  className: "white-box",
                  children: [
                    (0, A.BX)(y.View, {
                      className: "input-list",
                      children: [
                        (0, A.BX)(y.View, {
                          className: "new-item",
                          children: [
                            (0, A.tZ)(y.View, {
                              className: "label",
                              children: "用户名",
                            }),
                            (0, A.tZ)(y.View, {
                              className: "cont",
                              children: (0, A.tZ)(y.Input, {
                                type: "text",
                                className: "input-dom",
                                placeholder: "请输入用户名",
                                "placeholder-class": "input-plc",
                                disabled: !0,
                                value: P,
                              }),
                            }),
                          ],
                        }),
                        (0, A.BX)(y.View, {
                          className: "new-item",
                          children: [
                            (0, A.tZ)(y.View, {
                              className: "label",
                              children: "姓名",
                            }),
                            (0, A.tZ)(y.View, {
                              className: "cont",
                              children: (0, A.tZ)(y.Input, {
                                type: "text",
                                className: "input-dom",
                                placeholder: "请输入姓名",
                                "placeholder-class": "input-plc",
                                disabled: !!V,
                                value: T,
                                onInput: function (e) {
                                  x(e.detail.value.trim());
                                },
                              }),
                            }),
                          ],
                        }),
                        (0, A.BX)(y.View, {
                          className: "new-item",
                          children: [
                            (0, A.tZ)(y.View, {
                              className: "label",
                              children: "身份证号",
                            }),
                            (0, A.tZ)(y.View, {
                              className: "cont",
                              children: (0, A.tZ)(Q, {
                                length:
                                  null != o && o.accountPassportNumber
                                    ? 11
                                    : 18,
                                leftText:
                                  (null == o ||
                                  null === (t = o.accountPassportNumber) ||
                                  void 0 === t
                                    ? void 0
                                    : t.substring(0, 4)) || "",
                                rightText:
                                  (null == o ||
                                  null === (n = o.accountPassportNumber) ||
                                  void 0 === n
                                    ? void 0
                                    : n.substring(15, 18)) || "",
                                onInput: function (e) {
                                  h(e);
                                },
                              }),
                            }),
                          ],
                        }),
                        (!(null != o && o.accountMobile) ||
                          !Y.Z.mobileCheck(
                            null == o ? void 0 : o.accountMobile
                          )) &&
                          (0, A.BX)(y.View, {
                            className: "new-item",
                            children: [
                              (0, A.tZ)(y.View, {
                                className: "label",
                                children: "手机号",
                              }),
                              (0, A.tZ)(y.View, {
                                className: "cont",
                                children: (0, A.tZ)(Q, {
                                  length: null != o && o.accountMobile ? 4 : 11,
                                  leftText:
                                    (null == o ||
                                    null === (i = o.accountMobile) ||
                                    void 0 === i
                                      ? void 0
                                      : i.substring(0, 3)) || "",
                                  rightText:
                                    (null == o ||
                                    null === (a = o.accountMobile) ||
                                    void 0 === a
                                      ? void 0
                                      : a.substring(7, 11)) || "",
                                  onInput: function (e) {
                                    w(e);
                                  },
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, A.tZ)(y.Button, {
                      className:
                        "btn-linear confirm-btn " +
                        (r ? "ty" : "zx") +
                        (I ? "" : " disable"),
                      id: "AgAk",
                      onClick: function () {
                        return T
                          ? f && G.Z.isValidSFZ(f)
                            ? b && G.Z.isMobile(b)
                              ? void l({
                                  accountRealName: T,
                                  mobileNo: b,
                                  idNo: f,
                                  userName: null == o ? void 0 : o.userName,
                                })
                              : (0, M.showToast)("请输入正确的的手机号")
                            : (0, M.showToast)("请输入正确的证件号信息")
                          : (0, M.showToast)("请输入正确的姓名");
                      },
                      children: "开始核验",
                    }),
                  ],
                }),
              });
            },
            te = p.default.memo(function (e) {
              var t = (0, p.useState)(null),
                n = (0, s.Z)(t, 2),
                i = n[0],
                a = n[1],
                o = e.passengerList,
                r = void 0 === o ? [] : o,
                c = e.onClose,
                l = e.onClick;
              if (((0, p.useEffect)(function () {}, []), !r.length))
                return (0, A.tZ)(y.View, {});
              var u = function (e) {
                return e.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
              };
              return (0, A.BX)(B.ZtDrawer, {
                show: !0,
                onClose: c,
                onWrapClose: c,
                closeIconParams: {
                  type: "cancel",
                  size: "22px",
                  color: "#c3c3c3",
                },
                drawerStyle: {
                  backgroundColor: "#f5f5f5",
                  fontWeight: 600,
                  borderRadius: "40rpx 40rpx 0 0",
                },
                title: "选择账号本人",
                className: "train-dark-components-register-pas-select",
                children: [
                  (0, A.tZ)(y.View, {
                    className: "content",
                    children: (0, A.tZ)(y.ScrollView, {
                      scrollY: !0,
                      className: "pas-content",
                      children:
                        r.length &&
                        r.map(function (e, t) {
                          return (0, A.BX)(
                            y.View,
                            {
                              className: "pas-item",
                              id: "AgAm",
                              onClick: function () {
                                return (function (e, t) {
                                  a(t), l(e);
                                })(e, t);
                              },
                              children: [
                                (0, A.BX)(y.View, {
                                  className: "left-content",
                                  children: [
                                    (0, A.BX)(y.View, {
                                      className: "head",
                                      children: [
                                        (0, A.tZ)(y.Text, {
                                          className: "name",
                                          children: e.pasName,
                                        }),
                                        (0, A.tZ)(y.Text, {
                                          className: "phone-number",
                                          children: u(e.Mobile),
                                        }),
                                      ],
                                    }),
                                    (0, A.tZ)(y.View, {
                                      className: "id-card",
                                      children: "身份证 " + e.ShowPassportCode,
                                    }),
                                  ],
                                }),
                                (0, A.tZ)(y.View, {
                                  className: "right-icon "
                                    .concat(
                                      i === t ? "selected" : "select",
                                      " "
                                    )
                                    .concat(k.default.isTieyou ? "ty" : "zx"),
                                }),
                              ],
                            },
                            "pas_".concat(t)
                          );
                        }),
                    }),
                  }),
                  (0, A.tZ)(y.View, { style: "height: 40px; width: 100%;" }),
                ],
              });
            }),
            ne = function (e) {
              var t = e.show,
                n = e.orderInterceptTipInfo,
                i = e.onSubmit;
              return t
                ? (0, A.BX)(y.View, {
                    className: "dark-stu-convert-box",
                    children: [
                      (0, A.tZ)(y.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_cpsb.webp",
                        className: "icon",
                        mode: "aspectFit",
                        webp: !0,
                      }),
                      (0, A.tZ)(y.View, {
                        className: "tips",
                        children: n.tips,
                      }),
                      (0, A.tZ)(y.View, {
                        className: "btn",
                        onClick: i,
                        children: "购买成人票",
                      }),
                      (0, A.tZ)(y.View, {
                        className: "btm-tip",
                        children: "一键下单 立即出票",
                      }),
                    ],
                  })
                : null;
            },
            ie = n(9416),
            ae = n(88424),
            se = n(34752),
            oe =
              (0, b.h)()(
                (i = (function (e) {
                  (0, f.Z)(n, e);
                  var t = (0, h.Z)(n);
                  function n() {
                    var e;
                    return (
                      (0, u.Z)(this, n),
                      ((e = t.call(this)).pageId = k.default.isTieyou
                        ? "10650061368"
                        : "10650061366"),
                      (e.state = {
                        interceptScene: "",
                        isTieyou: k.default.isTieyou,
                        oid: "",
                        rescheduleOrderNumber: "",
                        ticketId: 0,
                        loginMobile: T.ZP.userName,
                        faceCheckFlag: 0,
                        boxType: "",
                        pageTitle: "支付完成，待实名认证",
                        refreshBottomVisible: !1,
                        productInfoBoxVisible: !1,
                        unLockOrderProductInfo: null,
                        orderInterceptTipInfo: null,
                        orderStatus: 0,
                        registerPassenger: {},
                        orderTicketList: {},
                        normalTicketT6Info: null,
                        firstRegisterInfo: {},
                        t6Type: "",
                        notifyMobile: "",
                        notifyName: "",
                        notifyPassword: "",
                        disableUserOperate: !1,
                        boxTitle: "需实名认证",
                        faceBoxTitle: "请完成人证信息认证",
                        passwordModalVisible: !1,
                        passwordModalInfo: {},
                        memberPas: [],
                        isShowPasSelect: !1,
                      }),
                      (e.failMessageInfo = []),
                      (e.pushMaskInfoCount = 0),
                      e
                    );
                  }
                  return (
                    (0, d.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = (0, m.getCurrentInstance)()
                                            .router.params),
                                          this.getParams(t),
                                          (this.rT6BtnTimer = ""),
                                          (this.timerId = ""),
                                          (this.isBuyTicket =
                                            "booking" === t.interceptScene),
                                          (this.isRefund =
                                            "ticketReturn" ===
                                            t.interceptScene),
                                          (this.isReschedule =
                                            "reschedule" === t.interceptScene),
                                          (this.fromSource = t.fromSource),
                                          (e.next = 10),
                                          this.getCanFaceFlag()
                                        );
                                      case 10:
                                        return (
                                          (n = e.sent),
                                          (e.next = 13),
                                          this.setStateSync({
                                            faceCheckFlag: n,
                                          })
                                        );
                                      case 13:
                                        return (
                                          (this.operateType = ""),
                                          (this.changePasFaceCheckFailTimes = 0),
                                          (this.face96FailTimes = 0),
                                          (e.next = 18),
                                          this.getOrderT6AccountInterceptDetail()
                                        );
                                      case 18:
                                        return (
                                          console.log(
                                            "componentDidMount",
                                            this.state.faceCheckFlag
                                          ),
                                          (e.next = 21),
                                          this.getPassInfo()
                                        );
                                      case 21:
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
                        key: "componentWillUnmount",
                        value: function () {
                          "holdSeat" !== this.state.interceptScene ||
                            this.isGoTargetDetailPage ||
                            g().reLaunch({ url: "/pages/myctrip/list/list" });
                        },
                      },
                      {
                        key: "refresh",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          this.getOrderT6AccountInterceptDetail()
                                        );
                                      case 2:
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
                        key: "goOrderDetail",
                        value: function () {
                          g().redirectTo({
                            url: N.ZP.getTrainDetailUrl(this.state.oid),
                          });
                        },
                      },
                      {
                        key: "goShelves",
                        value: function () {
                          g().redirectTo({
                            url:
                              "/pages/trainDetail/shelves/shelves?oid=" +
                              this.state.oid,
                          });
                        },
                      },
                      {
                        key: "goTargetDetailPage",
                        value: function () {
                          var e =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0];
                          (this.isGoTargetDetailPage = !0),
                            "holdSeat" !== this.state.interceptScene
                              ? this.goOrderDetail()
                              : "Smart" === this.fromSource
                              ? g().redirectTo({
                                  url: "/pages/smart/packageA/orderDetail/index?orderNumber=".concat(
                                    this.state.oid,
                                    "&isBizOrder=1"
                                  ),
                                })
                              : e
                              ? this.goOrderDetail()
                              : this.goShelves();
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              return (0, c.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
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
                        key: "setStateSync",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (n) {
                            t.setState(e, n);
                          });
                        },
                      },
                      {
                        key: "getCanFaceFlag",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          (0, S.rG)()
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
                        key: "getParams",
                        value: function (e) {
                          Object.keys(e).forEach(function (t) {
                            e[t] = decodeURIComponent(e[t] || "");
                          }),
                            this.setState((0, r.Z)({}, e));
                        },
                      },
                      {
                        key: "getOrderT6AccountInterceptDetail",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n, i, a, s, o, r, l, u, d;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = this.state),
                                          (n = t.oid),
                                          (i = t.loginMobile),
                                          (a = t.interceptScene),
                                          (s = t.rescheduleOrderNumber),
                                          (o = {
                                            orderNumber: n,
                                            loginMobile: i,
                                            interceptScene: a,
                                            rescheduleOrderNumber: s,
                                          }),
                                          (e.prev = 2),
                                          (0, M.showLoading)(),
                                          (e.next = 6),
                                          (0, ie.qp)(o)
                                        );
                                      case 6:
                                        if (
                                          ((r = e.sent),
                                          (0, M.hideLoading)(),
                                          1 !== r.resultCode)
                                        ) {
                                          e.next = 28;
                                          break;
                                        }
                                        if (
                                          ((l = r.normalTicketInterceptInfo),
                                          (u = r.returnTicketInterceptInfo),
                                          (d = r.orderStatus),
                                          "booking" !== a)
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "购票流程中断问题解决"
                                          ),
                                          (e.next = 14),
                                          this.handleNormalTicketInterceptResponse(
                                            {
                                              normalTicketInterceptInfo: l,
                                              orderStatus: d,
                                              interceptScene: a,
                                            }
                                          )
                                        );
                                      case 14:
                                        e.next = 28;
                                        break;
                                      case 16:
                                        if ("ticketReturn" !== a) {
                                          e.next = 20;
                                          break;
                                        }
                                        this.handleReturnTicketInterceptInfo({
                                          returnTicketInterceptInfo: u,
                                          orderStatus: d,
                                        }),
                                          (e.next = 28);
                                        break;
                                      case 20:
                                        if ("reschedule" !== a) {
                                          e.next = 24;
                                          break;
                                        }
                                        this.handleNormalTicketInterceptResponse(
                                          {
                                            normalTicketInterceptInfo: l,
                                            orderStatus: d,
                                            interceptScene: a,
                                          }
                                        ),
                                          (e.next = 28);
                                        break;
                                      case 24:
                                        if ("holdSeat" !== a) {
                                          e.next = 28;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "扣位流程中断问题解决"
                                          ),
                                          (e.next = 28),
                                          this.handleNormalTicketInterceptResponse(
                                            {
                                              normalTicketInterceptInfo: l,
                                              orderStatus: d,
                                              interceptScene: a,
                                            }
                                          )
                                        );
                                      case 28:
                                        e.next = 34;
                                        break;
                                      case 30:
                                        (e.prev = 30),
                                          (e.t0 = e.catch(2)),
                                          (0, M.hideLoading)(),
                                          console.log(e.t0);
                                      case 34:
                                        return (e.prev = 34), e.finish(34);
                                      case 36:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 30, 34, 36]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleNormalTicketInterceptResponse",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n,
                                i,
                                a,
                                s,
                                r,
                                l,
                                u,
                                d,
                                f,
                                h,
                                p,
                                m,
                                g,
                                y,
                                b,
                                w,
                                k,
                                T,
                                N,
                                Z,
                                I,
                                C,
                                S,
                                P,
                                V,
                                M,
                                B,
                                _,
                                A,
                                L,
                                D,
                                F,
                                R,
                                O = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((n = this.state.disableUserOperate),
                                          t)
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 3:
                                        if (
                                          ((i = t.normalTicketInterceptInfo),
                                          (a = t.orderStatus),
                                          (r = (s = i || {}).interceptType),
                                          (l = s.orderInterceptTimeOutTime),
                                          (u = s.orderInterceptTipInfo),
                                          (d = s.userOperateInfo),
                                          (f = s.unLockOrderProductInfo),
                                          (h = s.orderTicketList),
                                          (p = s.cancelButton),
                                          (m = s.orderStatedescription),
                                          (g = s.needDelayCode),
                                          (y = s.operateFailMaxTimes),
                                          (b = s.studentNeedChangePassengers),
                                          (w = void 0 === b ? [] : b),
                                          100 === a)
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        return (
                                          this.goTargetDetailPage(),
                                          e.abrupt("return")
                                        );
                                      case 8:
                                        if (i) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          this.setState({
                                            boxType: "loadingStatusBox",
                                            pageTitle: "实名认证成功 待出票",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 11:
                                        if (
                                          (this.ubtTrace(
                                            "s_trn_z_trace_10650061366",
                                            {
                                              bizKey:
                                                "z_mini_ow_ndark_middle_fc_show",
                                              exposureType: "normal",
                                              interceptType: r,
                                              orderid: this.state.oid,
                                            }
                                          ),
                                          this.ubtTrace(
                                            "TZWBuyDarkCert_exposure",
                                            {
                                              PageId: this.pageId,
                                              orderId: this.state.oid,
                                              Type: r,
                                              TrnFromScene:
                                                this.state.interceptScene,
                                            }
                                          ),
                                          this.handleRefreshBtnVisibleTimer(l),
                                          (T = (k = !!f) ? f : []),
                                          (N = {}),
                                          (Z = {}),
                                          h)
                                        ) {
                                          (I =
                                            h.find(function (e) {
                                              return (
                                                e.orderTicketType ===
                                                (O.isReschedule ? 2 : 1)
                                              );
                                            }) || {}),
                                            (C =
                                              null == I
                                                ? void 0
                                                : I.ticketInfoList.map(
                                                    function (e) {
                                                      return e.passengerName;
                                                    }
                                                  )),
                                            (S = (0, o.Z)(h));
                                          try {
                                            for (S.s(); !(P = S.n()).done; )
                                              (V = P.value),
                                                (M = v()(
                                                  ""
                                                    .concat(V.fromDate, " ")
                                                    .concat(V.fromTime)
                                                ).format("HH:mm")),
                                                (B = v()(
                                                  ""
                                                    .concat(V.toDate, " ")
                                                    .concat(V.toTime)
                                                ).format("HH:mm")),
                                                (_ = v()(
                                                  "".concat(V.toDate)
                                                ).diff(
                                                  v()("".concat(V.fromDate)),
                                                  "day"
                                                )),
                                                Object.assign(V, {
                                                  fromTime: M,
                                                  toTime: B,
                                                  takeDays: _,
                                                });
                                          } catch (e) {
                                            S.e(e);
                                          } finally {
                                            S.f();
                                          }
                                          (A = C.length),
                                            (L = ""),
                                            1 === A
                                              ? (L = "".concat(C[0]))
                                              : 2 === A
                                              ? (L = ""
                                                  .concat(C[0], "、")
                                                  .concat(C[1]))
                                              : A > 2 &&
                                                (L = ""
                                                  .concat(C[0], "、")
                                                  .concat(C[1], "等")),
                                            Object.assign(N, {
                                              orderTicketList: h,
                                              passengerStr: L,
                                              orderStatedescription: m,
                                            });
                                        }
                                        return (
                                          d &&
                                            x.Z.notEmptyArray(
                                              d.registerPassengers
                                            ) &&
                                            ("",
                                            (F =
                                              d.registerPassengers[0]
                                                .mobileNumber),
                                            (D = F
                                              ? ""
                                                  .concat(F.slice(0, 3), "-")
                                                  .concat(F.slice(3, 7), "-")
                                                  .concat(F.slice(7, 11))
                                              : ""),
                                            Object.assign(
                                              Z,
                                              d.registerPassengers[0],
                                              { mobileWithGap: D }
                                            )),
                                          (R =
                                            "a" === r || "d" === r
                                              ? Z && Z.passengerName
                                              : d &&
                                                d.currentOrderAccountInfo
                                                  .accountPassportName),
                                          (e.next = 23),
                                          this.setStateSync({
                                            normalTicketT6Info: {
                                              interceptType: r,
                                              orderInterceptTimeOutTime: l,
                                              userOperateInfo: d,
                                              needDelayCode: g,
                                              operateFailMaxTimes: y,
                                            },
                                            t6Type: r,
                                            unLockOrderProductInfo: T,
                                            orderInterceptTipInfo: u,
                                            orderTicketList: N,
                                            productInfoBoxVisible: k,
                                            orderStatus: a,
                                            registerPassenger: Z,
                                            faceCheckName: R,
                                            boxTitle: "请完成实名认证",
                                            faceBoxTitle: "请完成人证信息认证",
                                            cancelButton: p,
                                          })
                                        );
                                      case 23:
                                        if (
                                          ((null == w ? void 0 : w.length) >
                                            0 &&
                                            this.setState({
                                              studentNeedChangePassengers: w,
                                            }),
                                          d ||
                                            100 !== a ||
                                            this.setState({
                                              boxType: "loadingStatusBox",
                                              pageTitle: "实名认证成功 待出票",
                                            }),
                                          !n)
                                        ) {
                                          e.next = 27;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 27:
                                        this.doDarkModeAction();
                                      case 28:
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
                        key: "handleRefreshBtnVisibleTimer",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            n = this.rT6BtnTimer === t;
                          if (!n) {
                            this.rT6BtnTimer = t;
                            var i = +new Date(t) - +new Date();
                            i > 0
                              ? (this.timerId = setTimeout(function () {
                                  e.timerId && clearTimeout(e.timerId),
                                    e.setState({ refreshBottomVisible: !0 });
                                }, i))
                              : this.setState({ refreshBottomVisible: !0 });
                          }
                        },
                      },
                      {
                        key: "doDarkModeAction",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t,
                                n,
                                i,
                                a,
                                s,
                                o,
                                r,
                                l,
                                u,
                                d,
                                f,
                                h,
                                p = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((i = this.state),
                                          (a = i.interceptScene),
                                          (s = void 0 === a ? "" : a),
                                          (o = i.normalTicketT6Info),
                                          (r = i.t6Type),
                                          (l = void 0 === r ? "" : r),
                                          (u = (o || {}).userOperateInfo),
                                          this.ubtDevTrace(
                                            "o_train_wechat_dark_type",
                                            {
                                              func: "doDarkModeAction",
                                              interceptScene: s,
                                              normalTicketT6Info: o,
                                              t6Type: l,
                                            }
                                          ),
                                          (d =
                                            null == u ||
                                            null ===
                                              (t = u.currentOrderAccountInfo) ||
                                            void 0 === t
                                              ? void 0
                                              : t.accountMobile),
                                          (f =
                                            null == u ||
                                            null ===
                                              (n = u.currentOrderAccountInfo) ||
                                            void 0 === n
                                              ? void 0
                                              : n.userName),
                                          !o)
                                        ) {
                                          e.next = 74;
                                          break;
                                        }
                                        if ("a" !== l) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "问题类型:a(账号存在问题)"
                                          ),
                                          (e.next = 10),
                                          this.checkRegisterStatus()
                                        );
                                      case 10:
                                        this.handleT6BookingA(), (e.next = 74);
                                        break;
                                      case 13:
                                        if ("f" !== l) {
                                          e.next = 19;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "问题类型:f(需要刷脸解封)"
                                          ),
                                          (e.next = 17),
                                          this.setStateSync({
                                            notifyMobile: d,
                                            notifyName: f,
                                            notifyPassword: "",
                                            faceType: 4,
                                            boxType: "checkFaceBox",
                                          })
                                        );
                                      case 17:
                                        e.next = 74;
                                        break;
                                      case 19:
                                        if (
                                          "s" !== l &&
                                          "resetPsw" != l &&
                                          "f|s" !== l
                                        ) {
                                          e.next = 27;
                                          break;
                                        }
                                        return (
                                          x.Z.insertActionLog(
                                            "RETRIEVE_PASSWORD",
                                            l,
                                            ""
                                          ),
                                          this.failMessageInfo.push(
                                            "问题类型:s(需要修改密码)"
                                          ),
                                          (e.next = 24),
                                          this.setStateSync({
                                            notifyMobile: d,
                                            notifyName: f,
                                            notifyPassword: "",
                                          })
                                        );
                                      case 24:
                                        this.goto12306H5({
                                          pageName: "retrievePassword",
                                          isPCRetrievePassword: "resetPsw" == l,
                                          success: function () {
                                            p.notify({
                                              resultCode: 1,
                                              failMsg: "修改密码成功",
                                            });
                                          },
                                          fail: function () {
                                            x.Z.insertActionLog(
                                              "darkMode_fail",
                                              "modifyPassword",
                                              "s修改密码失败"
                                            ),
                                              p.failMessageInfo.push(
                                                "s修改密码失败"
                                              ),
                                              p.notify({
                                                resultCode: 2,
                                                failMsg: "修改密码失败",
                                              });
                                          },
                                        }),
                                          (e.next = 74);
                                        break;
                                      case 27:
                                        if ("m" !== l) {
                                          e.next = 33;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "问题类型:m(需要短信解封)"
                                          ),
                                          (e.next = 31),
                                          this.setStateSync({
                                            notifyMobile: d,
                                            notifyName: f,
                                            notifyPassword: "",
                                            boxType: "textVerifyBox",
                                          })
                                        );
                                      case 31:
                                        e.next = 74;
                                        break;
                                      case 33:
                                        if ("f|m" !== l) {
                                          e.next = 39;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "问题类型:f|m(需要短信/刷脸解封)"
                                          ),
                                          (e.next = 37),
                                          this.setStateSync({
                                            notifyMobile: d,
                                            notifyName: f,
                                            notifyPassword: "",
                                            faceType: 4,
                                            boxType: "checkFaceBox",
                                          })
                                        );
                                      case 37:
                                        e.next = 74;
                                        break;
                                      case 39:
                                        if ("g" !== l) {
                                          e.next = 45;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "问题类型:g(需要实名认证"
                                          ),
                                          (e.next = 43),
                                          this.setStateSync({
                                            notifyMobile: d,
                                            notifyName: f,
                                            notifyPassword: "",
                                            boxType: "checkCardID",
                                          })
                                        );
                                      case 43:
                                        e.next = 74;
                                        break;
                                      case 45:
                                        if ("l" !== l) {
                                          e.next = 51;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "问题类型:l(需要切换账号"
                                          ),
                                          (e.next = 49),
                                          this.setStateSync({
                                            notifyMobile: d,
                                            notifyName: f,
                                            notifyPassword: "",
                                            boxType: "checkAccountReady",
                                          })
                                        );
                                      case 49:
                                        e.next = 74;
                                        break;
                                      case 51:
                                        if ("mask" !== l) {
                                          e.next = 57;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "问题类型:mask(需要掩码补全"
                                          ),
                                          (e.next = 55),
                                          this.setStateSync({
                                            notifyMobile: d,
                                            notifyName: f,
                                            notifyPassword: "",
                                            boxType: "maskCompleted",
                                            pageTitle: "12306本人账号信息核验",
                                          })
                                        );
                                      case 55:
                                        e.next = 74;
                                        break;
                                      case 57:
                                        if ("d" !== l) {
                                          e.next = 64;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "问题类型:mask(账号锁定中)"
                                          ),
                                          (h = (0, S.aO)(6)),
                                          (e.next = 62),
                                          this.setStateSync({
                                            notifyMobile: d,
                                            notifyName: f,
                                            notifyPassword: h,
                                            faceType: 5,
                                            boxType: "checkFaceBox",
                                            faceBoxTitle: "请您修改密码",
                                          })
                                        );
                                      case 62:
                                        e.next = 74;
                                        break;
                                      case 64:
                                        if ("stu" !== l) {
                                          e.next = 70;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "问题类型:stu(需要转成人票"
                                          ),
                                          (e.next = 68),
                                          this.setStateSync({
                                            notifyMobile: d,
                                            notifyName: f,
                                            notifyPassword: "",
                                            boxType: "stuconvert",
                                            pageTitle: "",
                                          })
                                        );
                                      case 68:
                                        e.next = 74;
                                        break;
                                      case 70:
                                        if ("sendSms" !== l) {
                                          e.next = 74;
                                          break;
                                        }
                                        return (
                                          this.failMessageInfo.push(
                                            "问题类型:sendSms(需要短信核验)"
                                          ),
                                          (e.next = 74),
                                          this.setStateSync({
                                            notifyMobile: d,
                                            notifyName: f,
                                            notifyPassword: "",
                                            boxType: "sendSms",
                                            pageTitle: "",
                                          })
                                        );
                                      case 74:
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
                        key: "handleT6BookingA",
                        value: function () {
                          var e = this.state,
                            t = e.firstRegisterInfo,
                            n = e.faceCheckFlag,
                            i = t || {},
                            a = i.registerStatus,
                            s = i.failCode;
                          if (
                            (this.ubtDevTrace("o_train_wechat_dark_type", {
                              func: "handleT6BookingA",
                              firstRegisterInfo: t,
                              faceCheckFlag: n,
                              registerStatus: a,
                              failCode: s,
                            }),
                            !n)
                          )
                            return (
                              x.Z.insertActionLog(
                                "darkMode_fail",
                                "face_risk",
                                "刷脸命中风控"
                              ),
                              void this.failMessageInfo.push("刷脸命中风控")
                            );
                          2 === a
                            ? this.setState({ boxType: "registerStep1" })
                            : 3 === a && 1 === s
                            ? (this.failMessageInfo.push(
                                "尝试注册失败,引导修改密码"
                              ),
                              this.checkChangePasswordConfig())
                            : 3 === a && 2 === s
                            ? (this.failMessageInfo.push(
                                "尝试注册失败,引导12306电话解绑"
                              ),
                              this.setState({ boxType: "untie12306Box" }))
                            : 3 === a
                            ? (this.failMessageInfo.push(
                                "尝试注册失败,引导修改密码"
                              ),
                              this.checkChangePasswordConfig())
                            : (this.failMessageInfo.push(
                                "尝试注册状态获取失败"
                              ),
                              this.notify({ resultCode: 2 }));
                        },
                      },
                      {
                        key: "findBackPasswordStep2",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n,
                                i,
                                a,
                                s,
                                o,
                                r = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (this.findBackPwdInfo) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 2:
                                        (0, M.showLoading)("请稍候..."),
                                          (i = this.state.normalTicketT6Info),
                                          (a =
                                            null == i ||
                                            null === (n = i.userOperateInfo) ||
                                            void 0 === n
                                              ? void 0
                                              : n.registerPassengers[0]),
                                          (s = (0, S.aO)(6)),
                                          (o = {
                                            smsVerificationCode: t,
                                            confirmType: 1,
                                            userName: "",
                                            newPassword: s,
                                            confirmPassword: s,
                                            mobileNo: a.mobileNumber,
                                            idCardType: (0, S.Wx)(
                                              a.passportType
                                            ),
                                            pollingKey:
                                              this.findBackPwdInfo.pollingKey,
                                            idCardNo: a.passportCode,
                                          }),
                                          (0, S.Lf)(o)
                                            .then(
                                              (0, l.Z)(
                                                (0, c.Z)().mark(function e() {
                                                  var t,
                                                    n,
                                                    i,
                                                    o,
                                                    l,
                                                    u,
                                                    d,
                                                    f,
                                                    h,
                                                    p,
                                                    m,
                                                    g,
                                                    y;
                                                  return (0, c.Z)().wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              r.ubtDevTrace(
                                                                "o_train_wechat_dark_type",
                                                                {
                                                                  func: "confirmFindBackPassword",
                                                                  result:
                                                                    "success",
                                                                  findBackPwdInfo:
                                                                    r.findBackPwdInfo,
                                                                }
                                                              ),
                                                              r.failMessageInfo.push(
                                                                "尝试找回密码成功，准备登录check"
                                                              ),
                                                              (e.next = 4),
                                                              r.setStateSync({
                                                                notifyName:
                                                                  a.mobileNumber,
                                                                notifyPassword:
                                                                  s,
                                                              })
                                                            );
                                                          case 4:
                                                            return (
                                                              (e.next = 6),
                                                              (0, S.L5)({
                                                                UserName:
                                                                  a.mobileNumber,
                                                                Password: s,
                                                                Channel:
                                                                  "zhixing",
                                                              }).catch(
                                                                function (e) {
                                                                  r.ubtDevTrace(
                                                                    "o_dark_fail",
                                                                    {
                                                                      func: "confirmFindBackPassword_login",
                                                                      result:
                                                                        "fail",
                                                                      findBackPwdInfo:
                                                                        r.findBackPwdInfo,
                                                                      e: e,
                                                                    }
                                                                  ),
                                                                    r.failMessageInfo.push(
                                                                      "尝试登录失败，解决账号问题" +
                                                                        (e &&
                                                                          e.code)
                                                                    ),
                                                                    (0,
                                                                    M.hideLoading)(),
                                                                    e &&
                                                                    7 === e.Code
                                                                      ? r.setState(
                                                                          {
                                                                            boxType:
                                                                              "textVerifyBox",
                                                                          }
                                                                        )
                                                                      : !e ||
                                                                        (8 !==
                                                                          e.Code &&
                                                                          9 !==
                                                                            e.Code)
                                                                      ? (x.Z.insertActionLog(
                                                                          "darkMode_fail",
                                                                          "login",
                                                                          "找回密码成功，尝试登陆失败，问题无法解决"
                                                                        ),
                                                                        r.failMessageInfo.push(
                                                                          "尝试登录失败，无法解决此账号问题"
                                                                        ),
                                                                        r.notify(
                                                                          {
                                                                            resultCode: 2,
                                                                            failMsg:
                                                                              "重置密码成功，登录失败",
                                                                          }
                                                                        ),
                                                                        (r.findBackPwdInfo =
                                                                          null),
                                                                        setTimeout(
                                                                          function () {
                                                                            r.refresh();
                                                                          },
                                                                          1e3
                                                                        ))
                                                                      : r.setState(
                                                                          {
                                                                            boxType:
                                                                              "checkFaceBox",
                                                                            faceType: 4,
                                                                          }
                                                                        );
                                                                }
                                                              )
                                                            );
                                                          case 6:
                                                            if ((t = e.sent)) {
                                                              e.next = 9;
                                                              break;
                                                            }
                                                            return e.abrupt(
                                                              "return"
                                                            );
                                                          case 9:
                                                            return (
                                                              (n =
                                                                t.PassengerList),
                                                              (i =
                                                                void 0 === n
                                                                  ? []
                                                                  : n),
                                                              (o =
                                                                t.MemberStatus),
                                                              (l =
                                                                void 0 === o
                                                                  ? ""
                                                                  : o),
                                                              (u =
                                                                t.IDCardNumber),
                                                              (d =
                                                                void 0 === u
                                                                  ? ""
                                                                  : u),
                                                              (f = t.RealName),
                                                              (h =
                                                                void 0 === f
                                                                  ? ""
                                                                  : f),
                                                              (p =
                                                                t.MobilePhone),
                                                              (m =
                                                                void 0 === p
                                                                  ? ""
                                                                  : p),
                                                              (g =
                                                                t.UserID12306),
                                                              (y = [
                                                                {
                                                                  userName:
                                                                    (void 0 ===
                                                                    g
                                                                      ? ""
                                                                      : g) ||
                                                                    a.mobileNumber,
                                                                  loginPW: s,
                                                                  passengerListJSON:
                                                                    JSON.stringify(
                                                                      i
                                                                    ),
                                                                  memberStatus:
                                                                    l,
                                                                  iDCardNumber:
                                                                    d,
                                                                  realName: h,
                                                                  mobile: m,
                                                                  inputUserName:
                                                                    m,
                                                                },
                                                              ]),
                                                              C.Tq.call(r, y),
                                                              C.CZ.call(r),
                                                              (e.next = 15),
                                                              r.notify({
                                                                resultCode: 1,
                                                                failMsg:
                                                                  "重置密码成功",
                                                              })
                                                            );
                                                          case 15:
                                                            (0,
                                                            M.hideLoading)(),
                                                              r.ubtDevTrace(
                                                                "o_train_wechat_dark_type",
                                                                {
                                                                  func: "confirmFindBackPassword",
                                                                  result:
                                                                    "success",
                                                                }
                                                              ),
                                                              r.setState({
                                                                passwordModalVisible:
                                                                  !0,
                                                                passwordModalInfo:
                                                                  {
                                                                    userName:
                                                                      "",
                                                                    password: s,
                                                                    mobileNo:
                                                                      a.mobileNumber,
                                                                  },
                                                              }),
                                                              setTimeout(
                                                                function () {
                                                                  r.refresh();
                                                                },
                                                                1e3
                                                              );
                                                          case 19:
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
                                              M.showToast)(e.resultMessage || "找回密码失败");
                                            });
                                      case 8:
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
                        key: "checkChangePasswordConfig",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n, i, a, s;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (n = this.state.normalTicketT6Info),
                                          !(i =
                                            null == n ||
                                            null === (t = n.userOperateInfo) ||
                                            void 0 === t
                                              ? void 0
                                              : t.registerPassengers[0]))
                                        ) {
                                          e.next = 18;
                                          break;
                                        }
                                        return (
                                          (this.findBackPwdInfo = null),
                                          (a = {
                                            idCardType: (0, S.Wx)(
                                              i.passportType
                                            ),
                                            idCardNo: i.passportCode,
                                            mobile: i.mobileNumber,
                                          }),
                                          (e.next = 8),
                                          (0, S.VX)(a).catch(function (e) {
                                            console.error(
                                              "sendSmsForFindBackPassword fail",
                                              e
                                            );
                                          })
                                        );
                                      case 8:
                                        if (!(s = e.sent)) {
                                          e.next = 15;
                                          break;
                                        }
                                        return (
                                          (this.findBackPwdInfo = s),
                                          this.setState({
                                            boxType: "findBack12306pwd",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 15:
                                        this.findBackPwdInfo = null;
                                      case 16:
                                        e.next = 18;
                                        break;
                                      case 18:
                                        return (
                                          this.ubtDevTrace("o_dark_fail", {
                                            sendSmsForFindBackPassword: !1,
                                          }),
                                          this.failMessageInfo.push(
                                            "尝试找回密码失败,引导注销流程"
                                          ),
                                          (e.next = 22),
                                          this.checkLogoutAction()
                                        );
                                      case 22:
                                        e.next = 28;
                                        break;
                                      case 24:
                                        (e.prev = 24),
                                          (e.t0 = e.catch(0)),
                                          console.error(e.t0),
                                          this.setState({
                                            boxType: "checkFaceBox",
                                            faceType: 5,
                                          });
                                      case 28:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 24]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "refundByRetrivePassword12306H5Error",
                        value: function () {
                          this.setState({ boxType: "loadingStatusBox" });
                        },
                      },
                      {
                        key: "checkRegisterStatus",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n, i, a, s, o, r, l, u;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (0, M.showLoading)("校验中"),
                                          (t = this.state.registerPassenger),
                                          (i = (n = t || {}).passengerName),
                                          (a = n.passportCode),
                                          (s = n.passportType),
                                          (o = n.mobileNumber),
                                          (r = N.ZP.getRealType(s)),
                                          (e.next = 7),
                                          (0, S.Cg)({
                                            type: r,
                                            userName: i,
                                            idNumber: a,
                                            mobile: o,
                                          })
                                        );
                                      case 7:
                                        return (
                                          (l = e.sent),
                                          (u = g().getStorageSync("userInfo")),
                                          (e.next = 11),
                                          this.setStateSync({
                                            firstRegisterInfo: l,
                                            notifyPassword: u.Password,
                                            notifyName: u.UserName,
                                            notifyMobile: o,
                                          })
                                        );
                                      case 11:
                                        e.next = 17;
                                        break;
                                      case 13:
                                        return (
                                          (e.prev = 13),
                                          (e.t0 = e.catch(0)),
                                          (e.next = 17),
                                          this.setStateSync({
                                            firstRegisterInfo: {},
                                            notifyPassword: "",
                                            notifyName: "",
                                            notifyMobile: "",
                                          })
                                        );
                                      case 17:
                                        return (
                                          (e.prev = 17),
                                          (0, M.hideLoading)(),
                                          e.finish(17)
                                        );
                                      case 20:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 13, 17, 20]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "sendMessageCode",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            n =
                              "/pages/train/smsWebview/index?smsNumber=12306&smsCode=".concat(
                                t
                              );
                          this.navigateTo({
                            url: n,
                            callback: function () {
                              e.setState({ boxType: "registerStep2" });
                            },
                          });
                        },
                      },
                      {
                        key: "confirmRegister",
                        value: function (e) {
                          this.loginVerifyCode(e);
                        },
                      },
                      {
                        key: "loginVerifyCode",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n,
                                i,
                                a,
                                s,
                                o,
                                r,
                                l,
                                u,
                                d,
                                f,
                                h,
                                p,
                                m,
                                y,
                                b,
                                w,
                                v,
                                k,
                                T;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((n = this.state),
                                          (i = n.firstRegisterInfo),
                                          (a = n.notifyName),
                                          (s = n.notifyPassword),
                                          (o = i.registerKey),
                                          t)
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        g().showToast({
                                          title: "请先输入验证码哦～",
                                          icon: "none",
                                          duration: 2e3,
                                        }),
                                          (e.next = 51);
                                        break;
                                      case 6:
                                        return (
                                          (e.prev = 6),
                                          (0, M.showLoading)("验证中..."),
                                          (e.next = 10),
                                          (0, S.Dd)({
                                            registerKey: o,
                                            verificationCode: t,
                                          })
                                        );
                                      case 10:
                                        if (
                                          !(r = e.sent) ||
                                          2 !== r.registerStatus
                                        ) {
                                          e.next = 35;
                                          break;
                                        }
                                        return (
                                          (e.prev = 12),
                                          this.failMessageInfo.push(
                                            "注册账号成功，尝试登录"
                                          ),
                                          (e.next = 16),
                                          (0, S.L5)({
                                            UserName: a,
                                            Password: s,
                                            Channel: "zhixing",
                                          })
                                        );
                                      case 16:
                                        return (
                                          (l = e.sent),
                                          (u = l.PassengerList),
                                          (d = void 0 === u ? [] : u),
                                          (f = l.MemberStatus),
                                          (h = void 0 === f ? "" : f),
                                          (p = l.IDCardNumber),
                                          (m = void 0 === p ? "" : p),
                                          (y = l.RealName),
                                          (b = void 0 === y ? "" : y),
                                          (w = l.MobilePhone),
                                          (v = void 0 === w ? "" : w),
                                          (k = l.UserID12306),
                                          (T = [
                                            {
                                              userName:
                                                (void 0 === k ? "" : k) || a,
                                              loginPW: s,
                                              passengerListJSON:
                                                JSON.stringify(d),
                                              memberStatus: h,
                                              iDCardNumber: m,
                                              realName: b,
                                              mobile: v,
                                              inputUserName: v,
                                            },
                                          ]),
                                          C.Tq.call(this, T),
                                          C.CZ.call(this),
                                          (e.next = 23),
                                          this.notify({
                                            resultCode: 1,
                                            failMsg: r.retMessage,
                                          })
                                        );
                                      case 23:
                                        (0, M.hideLoading)(), (e.next = 31);
                                        break;
                                      case 26:
                                        (e.prev = 26),
                                          (e.t0 = e.catch(12)),
                                          (0, M.hideLoading)(),
                                          this.failMessageInfo.push(
                                            "尝试登录失败，code: " +
                                              (e.t0 && e.t0.code)
                                          ),
                                          e.t0 && 7 === e.t0.Code
                                            ? (g().showToast({
                                                title: "校验失败",
                                                icon: "none",
                                                duration: 1e3,
                                              }),
                                              this.setState({
                                                boxType: "textVerifyBox",
                                              }))
                                            : !e.t0 ||
                                              (8 !== e.t0.Code &&
                                                9 !== e.t0.Code)
                                            ? (x.Z.insertActionLog(
                                                "darkMode_fail",
                                                "login",
                                                "尝试登陆失败，问题无法解决"
                                              ),
                                              this.failMessageInfo.push(
                                                "尝试登录失败, 问题无法解决"
                                              ),
                                              g().showToast({
                                                title:
                                                  (e.t0 && e.t0.Message) ||
                                                  "校验失败",
                                                icon: "none",
                                                duration: 1e3,
                                              }))
                                            : (g().showToast({
                                                title: "校验失败",
                                                icon: "none",
                                                duration: 1e3,
                                              }),
                                              this.setState({
                                                boxType: "checkFaceBox",
                                                faceType: 4,
                                              }));
                                      case 31:
                                        return (e.prev = 31), e.finish(31);
                                      case 33:
                                        e.next = 40;
                                        break;
                                      case 35:
                                        (0, M.hideLoading)(),
                                          x.Z.insertActionLog(
                                            "darkMode_fail",
                                            "register2",
                                            "尝试注册第二步失败 - failMsg - ".concat(
                                              r.resultMessage
                                            )
                                          ),
                                          g().showToast({
                                            title:
                                              r.resultMessage ||
                                              "网络开小差，请稍后再试",
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          this.failMessageInfo.push(
                                            "尝试注册失败"
                                          ),
                                          this.notify({
                                            resultCode: 2,
                                            failMsg: r.retMessage,
                                          });
                                      case 40:
                                        e.next = 49;
                                        break;
                                      case 42:
                                        (e.prev = 42),
                                          (e.t1 = e.catch(6)),
                                          (0, M.hideLoading)(),
                                          x.Z.insertActionLog(
                                            "darkMode_fail",
                                            "register2",
                                            "尝试注册第二步失败 - failMsg - ".concat(
                                              JSON.stringify(e.t1)
                                            )
                                          ),
                                          this.failMessageInfo.push(
                                            "尝试注册失败"
                                          ),
                                          this.notify({
                                            resultCode: 2,
                                            failMsg: JSON.stringify(e.t1),
                                          }),
                                          console.log(e.t1);
                                      case 49:
                                        return (e.prev = 49), e.finish(49);
                                      case 51:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [
                                  [6, 42, 49, 51],
                                  [12, 26, 31, 33],
                                ]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "notify",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n,
                                i,
                                a,
                                s,
                                o,
                                r,
                                l,
                                u,
                                d,
                                f,
                                h,
                                p,
                                m,
                                y,
                                b = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = t.resultCode),
                                          (i = void 0 === n ? 0 : n),
                                          (a = t.failMsg),
                                          (s = t.needDelay),
                                          (o = void 0 === s ? 0 : s),
                                          (r = a || ""),
                                          (0, M.showLoading)(),
                                          (e.prev = 3),
                                          1 != i &&
                                            (r =
                                              this.failMessageInfo.join(";") ||
                                              "无失败信息"),
                                          this.ubtTrace("c_trn_z_10650061366", {
                                            bizKey:
                                              "z_mini_ow_ndark_middle_fc_click_result",
                                            interceptType: this.state.t6Type,
                                            orderid: this.state.oid,
                                            clickType: "1",
                                            accountResult: 1 == i ? "1" : "0",
                                            getFailReason: r || "",
                                          }),
                                          (l = this.state),
                                          (u = l.oid),
                                          (d = l.notifyName),
                                          (f = l.notifyPassword),
                                          (h = l.interceptScene),
                                          (p = l.t6Type),
                                          {},
                                          "OT",
                                          (y = N.ZP.encode12306Account({
                                            login12306Name: d,
                                            login12306Pas: f,
                                          })),
                                          (m = {
                                            orderNumber: u,
                                            loginName: d,
                                            password: y.login12306Pas,
                                            operateType: this.operateType || p,
                                            operateSceneType: "OT",
                                            operateResult: i,
                                            failMsg: r,
                                            needDelay: o,
                                          }),
                                          (e.next = 13),
                                          (0, V.BWQ)(m)
                                        );
                                      case 13:
                                        if (
                                          ((0, M.hideLoading)(),
                                          (this.operateType = ""),
                                          "booking" === h &&
                                            this.setState({
                                              faceBoxTitle:
                                                "请完成人证信息认证",
                                            }),
                                          1 !== i)
                                        ) {
                                          e.next = 21;
                                          break;
                                        }
                                        return (
                                          g().showToast({
                                            title: "验证成功，正为您继续购票",
                                            icon: "none",
                                            duration: 3e3,
                                          }),
                                          (e.next = 20),
                                          this.refresh()
                                        );
                                      case 20:
                                        setTimeout(function () {
                                          b.setState({
                                            boxType: "loadingStatusBox",
                                            disableUserOperate: !0,
                                            pageTitle: "实名认证成功 待出票",
                                            productInfoBoxVisible: !1,
                                          });
                                        }, 2e3);
                                      case 21:
                                        e.next = 28;
                                        break;
                                      case 23:
                                        (e.prev = 23),
                                          (e.t0 = e.catch(3)),
                                          (0, M.hideLoading)(),
                                          (this.operateType = ""),
                                          console.log(e.t0);
                                      case 28:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[3, 23]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "cancelRegisterStep2",
                        value: function () {
                          this.setState({ boxType: "registerStep1" });
                        },
                      },
                      {
                        key: "toFaceCheck",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                          return new Promise(function (n, i) {
                            var a = e.state,
                              s = a.faceType,
                              o = a.registerPassenger,
                              r = t.returnLogoutResult,
                              c = void 0 === r ? 1 : r,
                              l = t.failAction,
                              u = void 0 === l ? "" : l,
                              d = t.userName,
                              f = void 0 === d ? "" : d,
                              h = t.passWord,
                              p = void 0 === h ? "" : h,
                              m = {},
                              g = N.ZP.getRealType(o.passportType);
                            Object.assign(m, {
                              name: encodeURIComponent(o.passengerName),
                              passportType: g,
                              passportNumber: o.passportCode,
                              mobile: o.mobileNumber,
                            });
                            var y;
                            (y = p
                              ? "/pages/12306/face/face?userName="
                                  .concat(f, "&password=")
                                  .concat(encodeURIComponent(p), "&fromType=")
                                  .concat(s, "&returnLogoutResult=")
                                  .concat(c, "&certificationInfo=")
                                  .concat(JSON.stringify(m), "&failAction=")
                                  .concat(u)
                              : "/pages/12306/face/face?userName="
                                  .concat(f, "&fromType=")
                                  .concat(s, "&returnLogoutResult=")
                                  .concat(c, "&certificationInfo=")
                                  .concat(JSON.stringify(m), "&failAction=")
                                  .concat(u)),
                              e.navigateTo({
                                url: y,
                                callback: function (e) {
                                  var t = (e || {}).certificationResultCode;
                                  1 === t ? n(e) : 2 === t && i(e);
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
                            n = t.faceType,
                            i = t.t6Type,
                            a = t.normalTicketT6Info,
                            s = {};
                          if (
                            (this.ubtDevTrace("o_train_wechat_dark_type", {
                              func: "doFaceCheckAction",
                              faceType: n,
                              t6Type: i,
                            }),
                            this.doResloveTrace(1),
                            5 === n)
                          )
                            Object.assign(s, {
                              userName:
                                this.state.registerPassenger.passengerName,
                              returnLogoutResult: 1,
                              failAction: "return",
                            }),
                              this.toFaceCheck(s)
                                .then(
                                  (function () {
                                    var t = (0, l.Z)(
                                      (0, c.Z)().mark(function t(n) {
                                        var s, o, r, l, u, d, f;
                                        return (0, c.Z)().wrap(
                                          function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  return (
                                                    (s = n.callbackData),
                                                    (o =
                                                      n.cheackFacePollingKey),
                                                    (r = e.state),
                                                    (l = r.notifyPassword),
                                                    (u = r.registerPassenger),
                                                    console.log(
                                                      "faceResponse=====>",
                                                      n
                                                    ),
                                                    (d = s
                                                      ? JSON.parse(s)[0]
                                                      : {}),
                                                    (0, M.showLoading)(),
                                                    (t.prev = 5),
                                                    (t.next = 8),
                                                    (0, S.Fn)({
                                                      Channel: "ctripwx",
                                                      Username: d.user_name,
                                                      MobileNo: u.mobileNumber,
                                                      NewPassword: l,
                                                      ConfirmPassword: l,
                                                      CheackFacePollingKey: o,
                                                      SecretStr: d.secret_str,
                                                    })
                                                  );
                                                case 8:
                                                  if (
                                                    ((f = t.sent),
                                                    (0, M.hideLoading)(),
                                                    1 !== f.pollingResult)
                                                  ) {
                                                    t.next = 28;
                                                    break;
                                                  }
                                                  return (
                                                    (t.next = 13),
                                                    e.setStateSync({
                                                      notifyName: d.user_name,
                                                      notifyPassword: l,
                                                    })
                                                  );
                                                case 13:
                                                  if (
                                                    ((e.operateType = "s"),
                                                    (t.prev = 14),
                                                    "d" === i)
                                                  ) {
                                                    t.next = 18;
                                                    break;
                                                  }
                                                  return (
                                                    (t.next = 18),
                                                    e.login12306()
                                                  );
                                                case 18:
                                                  e.setState({
                                                    passwordModalInfo: {
                                                      userName: d.user_name,
                                                      mobileNo: u.mobileNumber,
                                                      password: l,
                                                    },
                                                    passwordModalVisible: !0,
                                                  }),
                                                    "d" === i
                                                      ? (e.failMessageInfo.push(
                                                          "账号锁定中重置密码成功"
                                                        ),
                                                        e.notify({
                                                          resultCode: 1,
                                                          needDelay:
                                                            null == a
                                                              ? void 0
                                                              : a.needDelayCode,
                                                        }),
                                                        setTimeout(function () {
                                                          e.refresh();
                                                        }, 1e3))
                                                      : e.ubtDevTrace(
                                                          "o_train_wechat_dark_type",
                                                          {
                                                            func: "login12306",
                                                            result:
                                                              "login success",
                                                          }
                                                        ),
                                                    (t.next = 26);
                                                  break;
                                                case 22:
                                                  (t.prev = 22),
                                                    (t.t0 = t.catch(14)),
                                                    e.setState({
                                                      boxType: "checkFaceBox",
                                                      faceType: 3,
                                                      faceBoxTitle:
                                                        "请再次完成人脸验证",
                                                    }),
                                                    e.ubtDevTrace(
                                                      "o_train_wechat_dark_type",
                                                      {
                                                        func: "login12306",
                                                        result: "login fail",
                                                      }
                                                    );
                                                case 26:
                                                  t.next = 29;
                                                  break;
                                                case 28:
                                                  e.setState({
                                                    boxType: "checkFaceBox",
                                                    faceType: 3,
                                                    faceBoxTitle:
                                                      "请再次完成人脸验证",
                                                  });
                                                case 29:
                                                  t.next = 35;
                                                  break;
                                                case 31:
                                                  (t.prev = 31),
                                                    (t.t1 = t.catch(5)),
                                                    (0, M.hideLoading)(),
                                                    e.setState({
                                                      boxType: "checkFaceBox",
                                                      faceType: 3,
                                                      faceBoxTitle:
                                                        "请再次完成人脸验证",
                                                    });
                                                case 35:
                                                  return (
                                                    (t.prev = 35), t.finish(35)
                                                  );
                                                case 37:
                                                case "end":
                                                  return t.stop();
                                              }
                                          },
                                          t,
                                          null,
                                          [
                                            [5, 31, 35, 37],
                                            [14, 22],
                                          ]
                                        );
                                      })
                                    );
                                    return function (e) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                )
                                .catch(function (t) {
                                  ++e.changePasFaceCheckFailTimes,
                                    e.changePasFaceCheckFailTimes >= 3
                                      ? e.checkLogoutAction()
                                      : (g().showToast({
                                          title:
                                            t.retMessage ||
                                            "很抱歉，当前使用人脸认证的人数较多，请重试",
                                          icon: "none",
                                          duration: 800,
                                        }),
                                        setTimeout(function () {
                                          e.doFaceCheckAction();
                                        }, 800));
                                });
                          else if (3 === n) this.doLogoutAction();
                          else if (4 === n || 1 === n) {
                            var o = this.state.notifyPassword,
                              r = this.state.notifyName;
                            Object.assign(s, {
                              returnLogoutResult: 1,
                              userName: r,
                              passWord: o,
                              failAction: "return",
                            }),
                              this.toFaceCheck(s)
                                .then(function () {
                                  "a" === i
                                    ? e.login12306(r, o)
                                    : e.notify({
                                        resultCode: 1,
                                        failMsg: "人脸解封成功",
                                      });
                                })
                                .catch(
                                  (function () {
                                    var t = (0, l.Z)(
                                      (0, c.Z)().mark(function t(n) {
                                        var a, s;
                                        return (0, c.Z)().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                if (
                                                  (e.ubtDevTrace(
                                                    "o_train_wechat_dark_type",
                                                    {
                                                      func: "doFaceCheckAction",
                                                      result: "fail",
                                                      findBackPwdInfo:
                                                        e.findBackPwdInfo,
                                                    }
                                                  ),
                                                  ++e.face96FailTimes,
                                                  "holdSeat" !==
                                                    e.state.interceptScene)
                                                ) {
                                                  t.next = 12;
                                                  break;
                                                }
                                                return (
                                                  e.failMessageInfo.push(
                                                    ""
                                                      .concat(
                                                        n.retMessage ||
                                                          "人脸解封失败"
                                                      )
                                                      .concat(
                                                        e.face96FailTimes >=
                                                          (null ===
                                                            (a =
                                                              e.state
                                                                .normalTicketT6Info) ||
                                                          void 0 === a
                                                            ? void 0
                                                            : a.operateFailMaxTimes)
                                                          ? "(扣位)"
                                                          : ""
                                                      )
                                                  ),
                                                  (t.next = 6),
                                                  e.notify({
                                                    resultCode: 2,
                                                    failMsg: n.retMessage,
                                                  })
                                                );
                                              case 6:
                                                return (
                                                  (t.next = 8),
                                                  (0, M.showToastAsync)(
                                                    n.retMessage ||
                                                      "抱歉，人脸认证失败"
                                                  )
                                                );
                                              case 8:
                                                return (
                                                  e.face96FailTimes >=
                                                    (null ===
                                                      (s =
                                                        e.state
                                                          .normalTicketT6Info) ||
                                                    void 0 === s
                                                      ? void 0
                                                      : s.operateFailMaxTimes) &&
                                                    e.goTargetDetailPage(),
                                                  t.abrupt("return")
                                                );
                                              case 12:
                                                if (
                                                  "f|m" !== i &&
                                                  !e.findBackPwdInfo
                                                ) {
                                                  t.next = 15;
                                                  break;
                                                }
                                                return (
                                                  e.face96FailTimes >= 3
                                                    ? (g().showToast({
                                                        title:
                                                          "人脸核验失败次数过多，将转短信核验",
                                                        icon: "none",
                                                        duration: 1e3,
                                                      }),
                                                      e.failMessageInfo.push(
                                                        "人脸解封失败,引导短信解封"
                                                      ),
                                                      e.setState({
                                                        boxType:
                                                          "textVerifyBox",
                                                      }))
                                                    : (e.failMessageInfo.push(
                                                        "人脸解封失败,继续引导人脸解封"
                                                      ),
                                                      e.doFaceCheckAction()),
                                                  t.abrupt("return")
                                                );
                                              case 15:
                                                x.Z.insertActionLog(
                                                  "darkMode_fail",
                                                  "face_4",
                                                  "人脸解封失败 - failMsg - ".concat(
                                                    n.resMessage
                                                  )
                                                ),
                                                  e.failMessageInfo.push(
                                                    "人脸解封失败"
                                                  ),
                                                  e.notify({
                                                    resultCode: 2,
                                                    failMsg: n.retMessage,
                                                  });
                                              case 18:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                      })
                                    );
                                    return function (e) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                );
                          }
                        },
                      },
                      {
                        key: "onClickServicePage",
                        value: function () {
                          var e = this.state.isTieyou
                            ? "https://pages.ctrip.com/ztrip/document/privacypolicy.html?noticetype=0"
                            : "https://pages.ctrip.com/ztrip/document/privacypolicyzx.html?noticetype=0";
                          I.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "onClickCheckPage",
                        value: function () {
                          var e = this.state.isTieyou
                            ? "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1002"
                            : "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1003";
                          I.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "doLogoutAction",
                        value: function () {
                          var e = this,
                            t = this.state.registerPassenger;
                          this.toFaceCheck({
                            returnLogoutResult: 1,
                            userName: t.passengerName,
                            failAction: "return",
                          })
                            .then(function () {
                              e.failMessageInfo.push(
                                "引导注销成功，尝试重新注册"
                              ),
                                setTimeout(function () {
                                  e.doRegisterPure();
                                }, 1e3);
                            })
                            .catch(function (t) {
                              x.Z.insertActionLog(
                                "darkMode_fail",
                                "logout_face",
                                "刷脸注销失败 - failMsg - ".concat(t.retMessage)
                              ),
                                e.failMessageInfo.push("引导注销失败"),
                                setTimeout(function () {
                                  (0, M.showToast)("注销失败，请重试");
                                }, 300),
                                e.notify({
                                  resultCode: 2,
                                  failMsg: t.retMessage,
                                });
                            });
                        },
                      },
                      {
                        key: "doRegisterPure",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          this.checkRegisterStatus()
                                        );
                                      case 2:
                                        (t = this.state.firstRegisterInfo),
                                          (n = (t || {}).registerStatus),
                                          this.ubtDevTrace(
                                            "o_train_wechat_dark_type",
                                            {
                                              func: "doRegisterPure",
                                              firstRegisterInfo: t,
                                            }
                                          ),
                                          2 === n
                                            ? this.setState({
                                                boxType: "registerStep1",
                                              })
                                            : (x.Z.insertActionLog(
                                                "darkMode_fail",
                                                "register1",
                                                "尝试注册第一步失败"
                                              ),
                                              this.failMessageInfo.push(
                                                "重新注册失败"
                                              ),
                                              this.notify({
                                                resultCode: 2,
                                                failMsg: "注销再注册失败",
                                              }));
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
                      {
                        key: "checkLogoutAction",
                        value: function () {
                          var e = this;
                          return new Promise(
                            (function () {
                              var t = (0, l.Z)(
                                (0, c.Z)().mark(function t(n) {
                                  var i;
                                  return (0, c.Z)().wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (i = e.state.registerPassenger),
                                              (0, M.showLoading)(),
                                              (t.prev = 2),
                                              (t.next = 5),
                                              (0, S.$q)({
                                                passportType: i.passportType,
                                                passportNumber: i.passportCode,
                                                passportName: i.passengerName,
                                              })
                                            );
                                          case 5:
                                            t.sent
                                              ? (e.failMessageInfo.push(
                                                  "引导注销失败."
                                                ),
                                                e.notify({
                                                  resultCode: 2,
                                                  failMsg: "无法引导注销",
                                                }),
                                                e.ubtDevTrace(
                                                  "o_train_wechat_dark_type",
                                                  {
                                                    func: "checkLogoutAction",
                                                    result: "fail",
                                                  }
                                                ),
                                                n(!1))
                                              : (e.setState({
                                                  boxType: "checkFaceBox",
                                                  faceType: 3,
                                                }),
                                                e.ubtDevTrace(
                                                  "o_train_wechat_dark_type",
                                                  {
                                                    func: "checkLogoutAction",
                                                    result: "success",
                                                  }
                                                ),
                                                n(!0)),
                                              (t.next = 16);
                                            break;
                                          case 9:
                                            (t.prev = 9),
                                              (t.t0 = t.catch(2)),
                                              x.Z.insertActionLog(
                                                "darkMode_fail",
                                                "logout_check",
                                                "引导注销失败"
                                              ),
                                              e.failMessageInfo.push(
                                                "引导注销失败,"
                                              ),
                                              e.notify({
                                                resultCode: 2,
                                                failMsg: "无法引导注销",
                                              }),
                                              e.ubtDevTrace(
                                                "o_train_wechat_dark_type",
                                                {
                                                  func: "checkLogoutAction",
                                                  result: "fail",
                                                }
                                              ),
                                              n(!1);
                                          case 16:
                                            return (
                                              (t.prev = 16),
                                              (0, M.hideLoading)(),
                                              t.finish(16)
                                            );
                                          case 19:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[2, 9, 16, 19]]
                                  );
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                        },
                      },
                      {
                        key: "login12306",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e(t, n) {
                              var i,
                                a,
                                s,
                                o,
                                r,
                                l,
                                u,
                                d,
                                f,
                                h,
                                p,
                                m,
                                y,
                                b,
                                w,
                                v,
                                k,
                                T = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (0, M.showLoading)(),
                                          (e.prev = 1),
                                          (i = this.state),
                                          (a = i.notifyName),
                                          (s = i.notifyPassword),
                                          (e.next = 5),
                                          (0, S.L5)({
                                            UserName: t || a,
                                            Password: n || s,
                                            Channel: "WX",
                                          })
                                        );
                                      case 5:
                                        return (
                                          (o = e.sent),
                                          (r = o.PassengerList),
                                          (l = void 0 === r ? [] : r),
                                          (u = o.MemberStatus),
                                          (d = void 0 === u ? "" : u),
                                          (f = o.IDCardNumber),
                                          (h = void 0 === f ? "" : f),
                                          (p = o.RealName),
                                          (m = void 0 === p ? "" : p),
                                          (y = o.MobilePhone),
                                          (b = void 0 === y ? "" : y),
                                          (w = o.UserID12306),
                                          (v = void 0 === w ? "" : w),
                                          this.ubtDevTrace(
                                            "o_train_wechat_dark_type",
                                            {
                                              func: "login12306",
                                              result: "success",
                                              info: o,
                                              findBackPwdInfo:
                                                this.findBackPwdInfo,
                                            }
                                          ),
                                          (k = [
                                            {
                                              userName: v || t || a,
                                              loginPW: n || s,
                                              passengerListJSON:
                                                JSON.stringify(l),
                                              memberStatus: d,
                                              iDCardNumber: h,
                                              realName: m,
                                              mobile: b,
                                              inputUserName: b,
                                            },
                                          ]),
                                          (e.next = 11),
                                          this.setStateSync({
                                            notifyName: v || t || a,
                                            notifyPassword: n || s,
                                          })
                                        );
                                      case 11:
                                        C.Tq.call(this, k),
                                          C.CZ.call(this),
                                          this.notify({
                                            resultCode: 1,
                                            failMsg: "重置密码成功",
                                          }),
                                          this.findBackPwdInfo
                                            ? this.setState({
                                                passwordModalVisible: !0,
                                                passwordModalInfo: {
                                                  userName: v,
                                                  password: s,
                                                  mobileNo: b,
                                                },
                                              })
                                            : g().showToast({
                                                title:
                                                  "人脸验证成功，正为您继续购票",
                                                icon: "none",
                                                duration: 2e3,
                                              }),
                                          setTimeout(function () {
                                            T.refresh(), (0, M.hideLoading)();
                                          }, 3e3),
                                          (e.next = 22);
                                        break;
                                      case 18:
                                        (e.prev = 18),
                                          (e.t0 = e.catch(1)),
                                          this.ubtDevTrace(
                                            "o_train_wechat_dark_type",
                                            {
                                              func: "login12306",
                                              result: "fail",
                                              error: e.t0,
                                            }
                                          ),
                                          e.t0 && 7 === e.t0.Code
                                            ? ((0, M.hideLoading)(),
                                              this.setState({
                                                boxType: "textVerifyBox",
                                              }))
                                            : !e.t0 ||
                                              (8 !== e.t0.Code &&
                                                9 !== e.t0.Code)
                                            ? (x.Z.insertActionLog(
                                                "darkMode_fail",
                                                "login",
                                                "重置密码成功，静默登录异常".concat(
                                                  e.t0 && e.t0.Message
                                                    ? "_" + e.t0.Message
                                                    : ""
                                                )
                                              ),
                                              this.failMessageInfo.push(
                                                "登录12306失败，无法解决问题"
                                              ),
                                              this.notify({
                                                resultCode: 2,
                                                failMsg:
                                                  "重置密码成功，静默登录异常".concat(
                                                    e.t0 && e.t0.Message
                                                      ? "_" + e.t0.Message
                                                      : ""
                                                  ),
                                              }),
                                              g().showToast({
                                                title:
                                                  (e.t0 && e.t0.Message) ||
                                                  "校验失败",
                                                icon: "none",
                                                duration: 1e3,
                                              }),
                                              (0, M.hideLoading)())
                                            : ((0, M.hideLoading)(),
                                              this.setState({
                                                boxType: "checkFaceBox",
                                                faceType: 4,
                                              }));
                                      case 22:
                                        return (e.prev = 22), e.finish(22);
                                      case 24:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 18, 22, 24]]
                              );
                            })
                          );
                          return function (t, n) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onSmsVerifyConfim",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n,
                                i,
                                a = arguments;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((n =
                                            a.length > 1 && void 0 !== a[1]
                                              ? a[1]
                                              : {}),
                                          (i = n.message),
                                          this.doResloveTrace(7),
                                          t)
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          (e.next = 5), (0, M.showToastAsync)(i)
                                        );
                                      case 5:
                                        return (
                                          this.notify({
                                            resultCode: 2,
                                            failMsg:
                                              "解决PC短信风控失败:".concat(i),
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 7:
                                        this.notify({
                                          resultCode: 1,
                                          failMsg: "解决PC短信风控成功",
                                        });
                                      case 8:
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
                        key: "doTextCheckAction",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.notifyName,
                            i = t.notifyPassword,
                            a = t.notifyMobile;
                          return (
                            this.doResloveTrace(2),
                            (0, ae.pS)({
                              userName: n,
                              password: i,
                              mobile: a,
                              ignoreCancel: !0,
                            })
                              .then(function (t) {
                                e.notify({
                                  resultCode: 1,
                                  failMsg: JSON.stringify(t),
                                }),
                                  g().showToast({
                                    title: "短信解封成功,正为您继续购票",
                                    icon: "none",
                                    duration: 2e3,
                                  });
                              })
                              .catch(function () {
                                x.Z.insertActionLog(
                                  "darkMode_fail",
                                  "textCheck",
                                  "短信解封失败"
                                ),
                                  e.failMessageInfo.push("短信验证失败"),
                                  e.notify({ resultCode: 2, failMsg: "" });
                              })
                          );
                        },
                      },
                      {
                        key: "doCheckCardIDAction",
                        value: function () {
                          var e = this,
                            t = this.state.notifyMobile;
                          if (t) {
                            var n =
                              "/pages/train/userVerify/index?mobile=".concat(t);
                            this.navigateTo({
                              url: n,
                              callback: function () {
                                e.refresh();
                              },
                            });
                          } else {
                            var i;
                            null === (i = this.showCommonDialog) ||
                              void 0 === i ||
                              i.call(this, "您的账号已被锁定，请稍候再试~");
                          }
                        },
                      },
                      {
                        key: "do12306LoginAction",
                        value: function () {
                          var e = this,
                            t = (function () {
                              var t = (0, l.Z)(
                                (0, c.Z)().mark(function t(n) {
                                  var i, a, o, r, l, u, d;
                                  return (0, c.Z)().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (
                                            (console.log(
                                              "!!@@ booking webviewCB e = ",
                                              n
                                            ),
                                            Array.isArray(n.detail.data) ||
                                              console.log("12306 login error"),
                                            (i = n.detail.data),
                                            C.Tq.call(e, i),
                                            C.CZ.call(e),
                                            (a = (0, s.Z)(i, 1)),
                                            (o = a[0]),
                                            (r = o.userName),
                                            (l = void 0 === r ? "" : r),
                                            (u = o.loginPW),
                                            (d = void 0 === u ? "" : u),
                                            !l || !d)
                                          ) {
                                            t.next = 12;
                                            break;
                                          }
                                          return (
                                            (t.next = 9),
                                            e.setStateSync({
                                              notifyPassword: d,
                                              notifyName: l,
                                            })
                                          );
                                        case 9:
                                          return (
                                            (t.next = 11),
                                            e.notify({
                                              resultCode: 1,
                                              failMsg: "",
                                            })
                                          );
                                        case 11:
                                          e.refresh();
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
                            n = "https://"
                              .concat(
                                k.default.h5domain,
                                "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                              )
                              .concat(k.default.partner, "#/login?userName=")
                              .concat("", "&loginPW=")
                              .concat("", "&fromPage=dark");
                          I.Z.twebview({ data: { url: n, bridgeIns: t } });
                        },
                      },
                      {
                        key: "goto12306H5",
                        value: function (e) {
                          var t = this,
                            n = e.pageName,
                            i = void 0 === n ? "" : n,
                            a = e.userAccount,
                            o = void 0 === a ? "" : a,
                            r = e.passWord,
                            u = void 0 === r ? "" : r,
                            d = e.mobile,
                            f = void 0 === d ? "" : d,
                            h = e.accountName,
                            p = void 0 === h ? "" : h,
                            m = e.initUserNameFlag,
                            g = void 0 === m ? "1" : m,
                            y = e.isPCRetrievePassword,
                            b = void 0 !== y && y,
                            w = e.success,
                            v = void 0 === w ? function () {} : w,
                            T = e.fail,
                            x = void 0 === T ? function () {} : T,
                            N = (function () {
                              var e = (0, l.Z)(
                                (0, c.Z)().mark(function e(n) {
                                  var a, o, r, l, u, d, f;
                                  return (0, c.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            (console.log(
                                              "dark webviewCB e = ",
                                              n
                                            ),
                                            Array.isArray(n.detail.data))
                                          ) {
                                            e.next = 4;
                                            break;
                                          }
                                          return x(), e.abrupt("return");
                                        case 4:
                                          return (
                                            (a = n.detail.data),
                                            (o = (0, s.Z)(a, 1)),
                                            (r = o[0]),
                                            (l = r.userName),
                                            (u = void 0 === l ? "" : l),
                                            (d = r.loginPW),
                                            (f = void 0 === d ? "" : d),
                                            C.Tq.call(t, a),
                                            C.CZ.call(t),
                                            (e.next = 10),
                                            t.setStateSync({
                                              notifyName: u,
                                              notifyPassword: f,
                                            })
                                          );
                                        case 10:
                                          try {
                                            t.ubtDevTrace(
                                              "o_dark_handle_12306_calback_data",
                                              {
                                                data: a,
                                                pageName: i,
                                                oid: t.state.oid,
                                              }
                                            );
                                          } catch (e) {
                                            console.log(e);
                                          }
                                          v();
                                        case 12:
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
                            Z = "https://"
                              .concat(
                                k.default.h5domain,
                                "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                              )
                              .concat(k.default.partner, "#/")
                              .concat(i, "?partner=")
                              .concat(k.default.partner, "&userName=")
                              .concat(o, "&loginPW=")
                              .concat(u, "&mobile=")
                              .concat(f, "&accountName=")
                              .concat(p, "&initUserNameFlag=")
                              .concat(g, "&password=")
                              .concat(u);
                          "retrievePassword" == i &&
                            (Z = ""
                              .concat(Z, "&resetType=")
                              .concat(b ? "pc" : "")),
                            I.Z.twebview({ data: { url: Z, bridgeIns: N } });
                        },
                      },
                      {
                        key: "createXOrder",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n, i, a, s, o, r, l;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = t.xOrderType),
                                          (i = t.productId),
                                          (a = t.goodsIdInfo),
                                          (e.prev = 1),
                                          (s = this.state.oid),
                                          (e.next = 5),
                                          (0, V.unK)({
                                            orderNumber: s,
                                            xOrderType: n,
                                            productId: i,
                                            goodsIdInfo: a,
                                          })
                                        );
                                      case 5:
                                        if (
                                          !(o = e.sent) ||
                                          1 !== o.resultCode
                                        ) {
                                          e.next = 19;
                                          break;
                                        }
                                        if (
                                          ((r = o.needPay),
                                          (l = o.payOrderNumber),
                                          !r)
                                        ) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          (e.next = 11), this.payForXProduct(l)
                                        );
                                      case 11:
                                        e.next = 17;
                                        break;
                                      case 13:
                                        return (
                                          this.failMessageInfo.push(
                                            "用户手动取消，进入强绑逻辑"
                                          ),
                                          (e.next = 16),
                                          this.notify({
                                            resultCode: 2,
                                            failMsg:
                                              "用户手动取消，进入强绑逻辑",
                                          })
                                        );
                                      case 16:
                                        this.goTargetDetailPage();
                                      case 17:
                                        e.next = 20;
                                        break;
                                      case 19:
                                        g().showToast({
                                          title:
                                            o.resultMessage ||
                                            "网络开小差，请稍后再试～",
                                          icon: "none",
                                          duration: 2e3,
                                        });
                                      case 20:
                                        e.next = 26;
                                        break;
                                      case 22:
                                        (e.prev = 22),
                                          (e.t0 = e.catch(1)),
                                          g().showToast({
                                            title: "网络开小差，请稍后再试～",
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          console.log(e.t0);
                                      case 26:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 22]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "convertOrder",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n, i, a, s;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = t.xOrderType),
                                          (i = t.productId),
                                          (e.prev = 1),
                                          (a = this.state.oid),
                                          (e.next = 5),
                                          (0, V.Auc)({
                                            orderNumber: a,
                                            convertType: n,
                                            productId: String(i),
                                          })
                                        );
                                      case 5:
                                        if (
                                          1 ===
                                          (null == (s = e.sent)
                                            ? void 0
                                            : s.resultCode)
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        throw s.resultMessage;
                                      case 8:
                                        (0, M.showToast)("请求成功"),
                                          this.goTargetDetailPage(),
                                          (e.next = 16);
                                        break;
                                      case 12:
                                        (e.prev = 12),
                                          (e.t0 = e.catch(1)),
                                          g().showToast({
                                            title: "网络开小差，请稍后再试～",
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          console.log(e.t0);
                                      case 16:
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
                        key: "payForXProduct",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n,
                                i,
                                a = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          (0, V.Nec)({ xOrderNumber: t })
                                        );
                                      case 3:
                                        (n = e.sent) &&
                                          1 === n.resultCode &&
                                          ((i = n.paymentID),
                                          Z.ZP.doPayment({
                                            orderNumber: t,
                                            business: "train",
                                            goodsId: i,
                                            title: "火车订单",
                                          })
                                            .then(function () {
                                              a.ubtTrace(
                                                "c_trn_z_10650061366",
                                                {
                                                  bizKey:
                                                    "z_mini_ow_ndark_middle_fc_click_result",
                                                  interceptType: a.state.t6Type,
                                                  orderid: a.state.oid,
                                                  clickType: "2",
                                                  accountResult: "1",
                                                  getFailReason: "",
                                                }
                                              ),
                                                a.goTargetDetailPage();
                                            })
                                            .catch(function () {
                                              a.ubtTrace(
                                                "c_trn_z_10650061366",
                                                {
                                                  bizKey:
                                                    "z_mini_ow_ndark_middle_fc_click_result",
                                                  interceptType: a.state.t6Type,
                                                  orderid: a.state.oid,
                                                  clickType: "2",
                                                  accountResult: "0",
                                                  getFailReason: "",
                                                }
                                              );
                                            })),
                                          (e.next = 11);
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(0)),
                                          g().showToast({
                                            title: "网络开小差，请稍后再试～",
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          console.log(e.t0);
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
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "doResloveTrace",
                        value: function (e) {
                          this.ubtTrace("TZWBuyDarkCert_click", {
                            PageId: this.pageId,
                            orderId: this.state.oid,
                            Type: this.state.t6Type,
                            TrnFromScene: this.state.interceptScene,
                            clickType: e,
                          });
                        },
                      },
                      {
                        key: "doForceBindAction",
                        value: function (e) {
                          var t = this.state,
                            n = t.t6Type,
                            i = t.normalTicketT6Info,
                            a = e.operationCode,
                            s = e.xOrderType,
                            o = e.productId,
                            r = e.unLockProductType,
                            c = e.treasureGoodsInfo;
                          1 !== a
                            ? 2 !== a
                              ? ("holdSeat" === this.state.interceptScene &&
                                  this.doResloveTrace(1 === r ? 4 : 3),
                                3 !== a
                                  ? 4 !== a
                                    ? s &&
                                      o &&
                                      this.ubtTrace("c_trn_z_10650061366", {
                                        bizKey:
                                          "z_mini_ow_ndark_middle_fc_click",
                                        interceptType: n,
                                        orderid: this.state.oid,
                                        clickType: "2",
                                      })
                                    : s &&
                                      o &&
                                      this.convertOrder({
                                        xOrderType: s,
                                        productId: o,
                                      })
                                  : s &&
                                    o &&
                                    this.createXOrder({
                                      xOrderType: s,
                                      productId: c ? "" : o,
                                      goodsIdInfo: c,
                                    }))
                              : this.do12306LoginAction()
                            : this.notify({
                                resultCode: 1,
                                needDelay: null == i ? void 0 : i.needDelayCode,
                              });
                        },
                      },
                      {
                        key: "onClickShowInfo",
                        value: function () {
                          g().showModal({
                            title: "温馨提示",
                            content:
                              "由于您的账号发生异常无法正常购票，重置账号可快速解决这个问题。重置账号后会自动为您生成新的账号密码，您可查看并主动进行修改。本次操作中所有个人信息仅用于本次重置。",
                            confirmText: "知道了",
                            showCancel: !1,
                            confirmColor: k.default.isTieyou
                              ? "#fc6e51"
                              : "#0080FF",
                          });
                        },
                      },
                      {
                        key: "onClickClosePasswordModal",
                        value: function () {
                          this.setState({ passwordModalVisible: !1 });
                        },
                      },
                      {
                        key: "onClickPasswordModalSave",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n, i, a, s, o;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          this.ubtTrace(197742, {
                                            bizKey:
                                              "mini_t_infocodepopup_save_click",
                                          }),
                                          (e.prev = 1),
                                          (0, M.showLoading)("图片生成中"),
                                          (t = this.state),
                                          (n = t.passwordModalInfo),
                                          (i = t.login12306Name),
                                          (a =
                                            ' <div>\n          <style>\n            .share {\n              width: 520px;\n              height: 200px;\n              border-radius: 12px;\n              background: #f5f5f5;\n              position: relative;\n              left: 0;\n              top: 0;\n              z-index: 10;\n            }\n            .share .code-box {\n              padding: 24px 40px;\n            }\n            .share .item {\n              height: 36px;\n              line-height:  36px;\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n              margin-bottom: 24px;\n            }\n            .share .item:last-child{\n              margin-bottom: 0px;\n            }\n            .share .txt {\n              height: 36px;\n              line-height: 36px;\n              font-size: 28px;\n              font-weight: 400;\n              color: #999999;\n            }\n            .share .info {\n              flex: 1;\n              text-align: right;\n              height: 36px;\n              line-height: 36px;\n              font-size: 28px;\n              color: #333333;\n              color: #999999;\n            }\n          </style>\n          <div class="screenshot-section share">\n            <div class="code-box">\n              <div class="item">\n                <div class="txt">账户名</div>\n                <div class="info">'
                                              .concat(
                                                i || n.mobileNo,
                                                '</div>\n              </div>\n              <div class="item">\n                <div class="txt">密码</div>\n                <div class="info">'
                                              )
                                              .concat(
                                                n.password,
                                                '</div>\n              </div>\n              <div class="item">\n                <div class="txt">手机</div>\n                <div class="info">'
                                              )
                                              .concat(
                                                n.mobileNo,
                                                "</div>\n              </div>\n            </div>\n          </div>\n      </div>"
                                              )),
                                          (e.next = 7),
                                          (0, P.TF)({
                                            renderType: 2,
                                            html: a,
                                            imgType: 1,
                                          })
                                        );
                                      case 7:
                                        (s = e.sent),
                                          (o = s.img),
                                          (0, M.hideLoading)(),
                                          this.setState({
                                            passwordModalVisible: !1,
                                          }),
                                          this.doSaveImage(o),
                                          (e.next = 19);
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0),
                                          (0, M.hideLoading)(),
                                          g().showToast({
                                            title: "图片生成失败, 请重试",
                                            icon: "none",
                                          });
                                      case 19:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 14]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "doSaveImage",
                        value: function (e) {
                          g().downloadFile({
                            url: e,
                            success: function (e) {
                              if (200 === e.statusCode) {
                                var t = e.tempFilePath;
                                console.log("path", t),
                                  g().saveImageToPhotosAlbum({
                                    filePath: t,
                                    success: function () {
                                      g().showToast({ title: "已保存到相册" });
                                    },
                                    fail: function (e) {
                                      console.log("downloadNetFile err:", e),
                                        g().showToast({
                                          title: "图片保存失败, 请重试",
                                          icon: "none",
                                        });
                                    },
                                  });
                              }
                            },
                          });
                        },
                      },
                      {
                        key: "onClickCancel",
                        value: function () {
                          var e = this,
                            t = this.state.cancelButton;
                          this.showMultiButtonDialog({
                            title: t,
                            content:
                              "您还剩最后一步即可购票成功， 确认现在取消订单吗？",
                            leftButtonName: "再等等",
                            rightButtonName: "确定取消",
                            onRightButtonClick: function () {
                              return e.confirmCancelOrder();
                            },
                          });
                        },
                      },
                      {
                        key: "confirmCancelOrder",
                        value: function () {
                          var e = this;
                          (0, M.showLoading)();
                          var t = {
                            orderNumber: this.state.oid,
                            partnerName: k.default.partner,
                          };
                          (0, V.FHX)(t).then(function (t) {
                            1 === t.resultCode
                              ? setTimeout(function () {
                                  if (
                                    ((0, M.hideLoading)(),
                                    (0, m.getCurrentPages)().length <= 1)
                                  )
                                    return e.goTargetDetailPage(!0);
                                  e.navigateBack();
                                }, 1e3)
                              : ((0, M.hideLoading)(),
                                g().showModal({
                                  title: "温馨提示",
                                  content: t.resultMessage,
                                  confirmText: "确定",
                                  showCancel: !1,
                                }));
                          });
                        },
                      },
                      {
                        key: "onMaskCompletedVerify",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n,
                                i,
                                a,
                                s,
                                o,
                                l,
                                u,
                                d,
                                f = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          this.doResloveTrace("1"),
                                          (0, M.showLoading)("核验中"),
                                          (e.prev = 2),
                                          (n = this.state.oid),
                                          (this.pushMaskInfoCount += 1),
                                          console.log(
                                            "fetch params",
                                            (0, r.Z)(
                                              (0, r.Z)({}, t),
                                              {},
                                              { orderNumber: n }
                                            )
                                          ),
                                          (e.next = 8),
                                          (0, ie.qf)(
                                            (0, r.Z)(
                                              (0, r.Z)({}, t),
                                              {},
                                              { orderNumber: n }
                                            )
                                          )
                                        );
                                      case 8:
                                        if (2 !== (i = e.sent).resultCode) {
                                          e.next = 20;
                                          break;
                                        }
                                        if (
                                          ((a = i.asycnPollingConfig || {}),
                                          (s = a.pollingKey),
                                          (o = a.intervalSecond),
                                          (l = void 0 === o ? 1 : o),
                                          (u = a.intervalTotalTimes),
                                          (d = void 0 === u ? 10 : u),
                                          !(this.pushMaskInfoCount >= d))
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          (this.pushMaskInfoCount = 0),
                                          (0, M.showToast)(
                                            i.resultMessage || "请稍候重试~"
                                          ),
                                          setTimeout(M.hideLoading, 500),
                                          e.abrupt("return")
                                        );
                                      case 16:
                                        return (
                                          (e.next = 18), x.Z.awaitTime(1e3 * l)
                                        );
                                      case 18:
                                        return (
                                          this.onMaskCompletedVerify(
                                            (0, r.Z)(
                                              (0, r.Z)({}, t),
                                              {},
                                              { pollingKey: s }
                                            )
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 20:
                                        if (
                                          ((0, M.hideLoading)(),
                                          (this.pushMaskInfoCount = 0),
                                          8 != i.resultCode)
                                        ) {
                                          e.next = 24;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          (0, ae.pS)({
                                            userName: t.userName,
                                            mobile: t.mobileNo,
                                            ignoreCancel: !0,
                                            onVerify: function (e, n) {
                                              null == n || n(),
                                                f.onMaskCompletedVerify(
                                                  (0, r.Z)(
                                                    (0, r.Z)({}, t),
                                                    {},
                                                    {
                                                      verificationCode: e,
                                                      pollingKey: void 0,
                                                    }
                                                  )
                                                );
                                            },
                                          })
                                        );
                                      case 24:
                                        if (-1 !== i.resultCode) {
                                          e.next = 28;
                                          break;
                                        }
                                        return (
                                          this.ubtTrace("c_trn_z_10650061366", {
                                            bizKey:
                                              "z_mini_ow_ndark_middle_fc_click_result",
                                            interceptType: this.state.t6Type,
                                            orderid: this.state.oid,
                                            clickType: "1",
                                            accountResult: "0",
                                            getFailReason:
                                              i.resultMessage ||
                                              "网络错误，请稍候重试~",
                                          }),
                                          (0, M.showToast)(
                                            i.resultMessage ||
                                              "网络错误，请稍候重试~"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 28:
                                        if (1 !== i.resultCode) {
                                          e.next = 31;
                                          break;
                                        }
                                        return (
                                          (e.next = 31),
                                          this.notify({
                                            resultCode: 1,
                                            failMsg: "掩码补全成功",
                                          })
                                        );
                                      case 31:
                                        e.next = 38;
                                        break;
                                      case 33:
                                        throw (
                                          ((e.prev = 33),
                                          (e.t0 = e.catch(2)),
                                          (0, M.showToast)(
                                            "网络错误，请稍候重试~"
                                          ),
                                          setTimeout(M.hideLoading, 500),
                                          e.t0)
                                        );
                                      case 38:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 33]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onSubmitStuToAdult",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n, i, a, s, o, r;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (0, M.showLoading)(),
                                          (e.prev = 1),
                                          this.doResloveTrace("1"),
                                          (t = this.state),
                                          (n = t.oid),
                                          (i = t.notifyName),
                                          (a = t.studentNeedChangePassengers),
                                          (s = void 0 === a ? [] : a),
                                          (e.next = 6),
                                          (0, se.WG)({
                                            orderNumber: n,
                                            accountNumber: i,
                                            studentNeedChangePassengers: s,
                                          })
                                        );
                                      case 6:
                                        if (
                                          ((o = e.sent),
                                          (r = o.resultCode),
                                          (0, M.hideLoading)(),
                                          1 != r)
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.notify({
                                            resultCode: 1,
                                            failMsg: "学生票转成人票成功",
                                          })
                                        );
                                      case 11:
                                        (0, M.showToast)(
                                          "网络错误，请稍候重试"
                                        ),
                                          (e.next = 18);
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(1)),
                                          (0, M.hideLoading)(),
                                          (0, M.showToast)(
                                            "网络错误，请稍候重试"
                                          );
                                      case 18:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 14]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getPassInfo",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, c.Z)().mark(function e() {
                              var t = this;
                              return (0, c.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        N.ZP.getCommonPassenger()
                                          .then(function (e) {
                                            var n = [];
                                            e.length > 0 &&
                                              (n = e.filter(function (e) {
                                                return "1" === e.cardType;
                                              })),
                                              t.setState({ memberPas: n });
                                          })
                                          .catch(function (e) {
                                            return console.log(e);
                                          })
                                      );
                                    case 1:
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
                        key: "changePassenger",
                        value: function () {
                          this.ubtTrace(
                            "TZWBuyDarkCert_ChoosePassenger_click",
                            { PageId: this.pageId }
                          ),
                            this.state.memberPas.length > 0 &&
                              this.setState({ isShowPasSelect: !0 });
                        },
                      },
                      {
                        key: "handleSelectPassenger",
                        value: function (e) {
                          var t,
                            n = this,
                            i = this.state,
                            a = i.registerPassenger,
                            s = i.normalTicketT6Info;
                          if (
                            (Object.assign(a, {
                              passengerName: e.pasName,
                              passportCode: e.IdentityNo,
                              passportType: e.IdentityType,
                              mobileNumber: e.Mobile,
                            }),
                            Object.assign(
                              null == s ||
                                null === (t = s.userOperateInfo) ||
                                void 0 === t
                                ? void 0
                                : t.registerPassengers[0],
                              {
                                passengerName: e.pasName,
                                passportCode: e.IdentityNo,
                                passportType: e.IdentityType,
                                mobileNumber: e.Mobile,
                              }
                            ),
                            null != a && a.mobileWithGap)
                          ) {
                            var o = a.mobileNumber;
                            Object.assign(a, {
                              mobileWithGap: ""
                                .concat(o.slice(0, 3), "-")
                                .concat(o.slice(3, 7), "-")
                                .concat(o.slice(7, 11)),
                            });
                          }
                          this.setState(
                            {
                              isShowPasSelect: !1,
                              registerPassenger: a,
                              normalTicketT6Info: s,
                            },
                            (0, l.Z)(
                              (0, c.Z)().mark(function e() {
                                return (0, c.Z)().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), n.checkRegisterStatus()
                                        );
                                      case 2:
                                        n.handleT6BookingA();
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            n = this,
                            i = this.state,
                            a = i.isTieyou,
                            s = i.boxType,
                            o = i.refreshBottomVisible,
                            r = i.orderTicketList,
                            c = i.faceType,
                            l = i.pageTitle,
                            u = i.cancelButton,
                            d = i.orderInterceptTipInfo,
                            f = i.productInfoBoxVisible,
                            h = i.unLockOrderProductInfo,
                            p = i.registerPassenger,
                            g = i.login12306Name,
                            b = i.faceCheckName,
                            w = i.t6Type,
                            v = i.notifyMobile,
                            k = i.boxTitle,
                            T = i.faceBoxTitle,
                            N = i.passwordModalVisible,
                            Z = i.passwordModalInfo,
                            I = i.normalTicketT6Info,
                            C = i.memberPas,
                            S = i.isShowPasSelect;
                          return (0, A.BX)(y.View, {
                            children: [
                              (0, A.BX)(y.View, {
                                className: "wrap ".concat(a ? "ty" : "zx"),
                                children: [
                                  (0, A.BX)(y.View, {
                                    className: "wrap-ct",
                                    children: [
                                      (0, A.BX)(y.View, {
                                        className: "top-title",
                                        children: [
                                          (0, A.tZ)(y.View, {
                                            className: "top-title-img",
                                          }),
                                          (0, A.BX)(y.View, {
                                            className: "top-title-tit",
                                            children: [
                                              (0, A.tZ)(y.Image, {
                                                className: "title-img",
                                                src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_yyp@3x.png",
                                              }),
                                              (0, A.tZ)(B.ZtRichText, {
                                                space: "nbsp",
                                                nodes:
                                                  x.Z.convertAppTextToHtmlStr(
                                                    (null == d
                                                      ? void 0
                                                      : d.titleDesc) || l
                                                  ),
                                              }),
                                            ],
                                          }),
                                          d &&
                                            (d.desc || d.tips) &&
                                            (0, A.tZ)(y.View, {
                                              className: "top-title-txt",
                                              children: d.desc || d.tips,
                                            }),
                                        ],
                                      }),
                                      (0, A.BX)(y.View, {
                                        className: "top-box",
                                        children: [
                                          (0, A.tZ)(z, {
                                            show: "registerStep1" === s,
                                            registerInfo: p,
                                            title: k,
                                            isTieyou: a,
                                            sendMessage: function () {
                                              n.sendMessageCode("999");
                                            },
                                          }),
                                          (0, A.tZ)(j, {
                                            show: "registerStep2" === s,
                                            isTieyou: a,
                                            confirm: function (e) {
                                              n.confirmRegister(e);
                                            },
                                            cancel: function () {
                                              n.cancelRegisterStep2();
                                            },
                                          }),
                                          (0, A.tZ)(W, {
                                            show: "registerStep2Remind" === s,
                                            mobile: v,
                                            isTieyou: a,
                                            confirm: function (e) {
                                              n.confirmRegister(e);
                                            },
                                            cancel: function () {
                                              n.cancelRegisterStep2();
                                            },
                                          }),
                                          (0, A.tZ)(E, {
                                            show: "textVerifyBox" === s,
                                            isTieyou: a,
                                            title: k,
                                            mobile: v,
                                            verify: function () {
                                              n.doTextCheckAction();
                                            },
                                          }),
                                          "sendSms" === s &&
                                            (0, A.tZ)(D.Z, {
                                              accountInfo:
                                                null == I ||
                                                null ===
                                                  (e = I.userOperateInfo) ||
                                                void 0 === e
                                                  ? void 0
                                                  : e.currentOrderAccountInfo,
                                              callback: this.onSmsVerifyConfim,
                                              style: {
                                                margin: ""
                                                  .concat(
                                                    (0, m.pxTransform)(16),
                                                    " "
                                                  )
                                                  .concat(
                                                    (0, m.pxTransform)(16)
                                                  ),
                                                position: "relative",
                                                zIndex: 3,
                                              },
                                            }),
                                          (0, A.tZ)(O, {
                                            show: "loadingStatusBox" === s,
                                            isTieyou: a,
                                            refresh: function () {
                                              n.refresh();
                                            },
                                          }),
                                          (0, A.tZ)(X, {
                                            show: "login12306" === s,
                                            isTieyou: a,
                                          }),
                                          (0, A.tZ)(q.Z, {
                                            show: "checkFaceBox" === s,
                                            isTieyou: a,
                                            title: T,
                                            faceCheckName: b,
                                            t6Type: w,
                                            faceType: c,
                                            memberPas: C,
                                            doFaceCheckAction: function () {
                                              n.doFaceCheckAction();
                                            },
                                            doTextCheckAction: function () {
                                              n.doTextCheckAction();
                                            },
                                            onClickServicePage: function () {
                                              n.onClickServicePage();
                                            },
                                            onClickCheckPage: function () {
                                              n.onClickCheckPage();
                                            },
                                            onClickShowInfo: function () {
                                              n.onClickShowInfo();
                                            },
                                            onChangePassenger: function () {
                                              n.changePassenger();
                                            },
                                            ubtTrace: this.ubtTrace,
                                            pageId: this.pageId,
                                          }),
                                          (0, A.tZ)(ne, {
                                            show: "stuconvert" === s,
                                            orderInterceptTipInfo: d,
                                            onSubmit: this.onSubmitStuToAdult,
                                          }),
                                          (0, A.tZ)(K, {
                                            show: "checkCardID" === s,
                                            isTieyou: a,
                                            doCheckCardIDAction: function () {
                                              n.doCheckCardIDAction();
                                            },
                                          }),
                                          (0, A.tZ)(F, {
                                            show: "checkAccountReady" === s,
                                            isTieyou: a,
                                            do12306LoginAction: function () {
                                              n.do12306LoginAction();
                                            },
                                          }),
                                          (0, A.tZ)(U, {
                                            show: "untie12306Box" === s,
                                            isTieyou: a,
                                            mobile: v,
                                            confirm: function () {
                                              n.refresh();
                                            },
                                          }),
                                          (0, A.tZ)(J.Z, {
                                            show: "findBack12306pwd" === s,
                                            mobile: v,
                                            confirm: function (e) {
                                              n.findBackPasswordStep2(e);
                                            },
                                          }),
                                          "maskCompleted" === s &&
                                            (0, A.tZ)(ee, {
                                              isTieyou: a,
                                              currentOrderAccountInfo:
                                                null == I ||
                                                null ===
                                                  (t = I.userOperateInfo) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.currentOrderAccountInfo,
                                              onVerify:
                                                this.onMaskCompletedVerify.bind(
                                                  this
                                                ),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, A.tZ)(y.View, {
                                    className: "second-box",
                                    children: (0, A.BX)(y.View, {
                                      className: "second-box-ct",
                                      children: [
                                        (0, A.tZ)(L, {
                                          show: f,
                                          productInfo: h,
                                          isTieyou: a,
                                          confirm: function (e) {
                                            n.doForceBindAction(e);
                                          },
                                          ubtTrace: this.ubtTrace,
                                        }),
                                        (0, A.tZ)(R, {
                                          orderInfo: r,
                                          isTieyou: a,
                                        }),
                                        u &&
                                          (0, A.tZ)(y.Button, {
                                            className: "btn-cancel",
                                            hoverClass: "btn-cancel_hover",
                                            id: "AgAw",
                                            onClick: this.onClickCancel,
                                            children: "取消订单",
                                          }),
                                      ],
                                    }),
                                  }),
                                  o && !1,
                                ],
                              }),
                              N &&
                                (0, A.tZ)(H, {
                                  visible: N,
                                  onClose: function () {
                                    return n.onClickClosePasswordModal();
                                  },
                                  login12306Name: g,
                                  passwordModalInfo: Z,
                                  onClickSave: function () {
                                    return n.onClickPasswordModalSave();
                                  },
                                  ubtTrace: this.ubtTrace,
                                }),
                              S &&
                                (0, A.tZ)(te, {
                                  id: "AgBQ",
                                  passengerList: C,
                                  onClose: function () {
                                    n.setState({ isShowPasSelect: !1 });
                                  },
                                  onClick: function (e) {
                                    return n.handleSelectPassenger(e);
                                  },
                                }),
                              (0, A.tZ)(_.Z, {
                                ref: function (e) {
                                  n.onDialogAttach(e);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(p.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              oe,
              "pages/12306/dark/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "实名认证",
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
            37013, 3322, 36332, 95854, 77, 52593, 74731, 10560, 11748, 83067,
            60579, 50127, 77585, 31472, 85379, 43412, 5207, 36250, 3993, 56474,
            18210, 56562, 77294, 301, 45279, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(52424);
          }
        ),
          e.O();
      },
    ]);
})();
