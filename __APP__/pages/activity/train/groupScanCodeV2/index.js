!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [10812],
      {
        64609: function (e, t, i) {
          var a,
            n,
            o,
            c = i(32180),
            s = i(57042),
            r = i(24460),
            l = i(21867),
            u = i(86066),
            h = i(79301),
            d = i(95308),
            p = i(52500),
            m = i(71515),
            g = i(92954),
            w = i.n(g),
            N = i(48792),
            Z = i.n(N),
            f = i(79792),
            V = i(49120),
            v = i(18783),
            b = i(81957),
            x = i(17782),
            I = i(48813),
            P = "ios" === f.default.os ? "8.0.6" : "8.0.3",
            k = new Date(),
            A = ""
              .concat(k.getFullYear())
              .concat(k.getMonth() + 1)
              .concat(k.getDate())
              .concat(k.getHours()),
            B = f.default.appVersion,
            C = function (e, t) {
              if (!e || !t) return !1;
              for (
                var i = e.split("."), a = t.split("."), n = 0;
                n < i.length;
                n++
              ) {
                if (parseInt(i[n]) > parseInt(a[n])) return !0;
                if (parseInt(i[n]) < parseInt(a[n])) return !1;
              }
              return !0;
            },
            y =
              ((a = (0, b.h)()),
              (n = Z()({
                data: {
                  area: "",
                  source: "",
                  noticeList: [],
                  groupQrcode: "",
                  areaList: [],
                  areaName: "",
                  showSection: !1,
                  animationData: {},
                  isPhoneVersion: !1,
                  groupId: "",
                  topNotes: "",
                },
                onLoad: function (e) {
                  var t = this;
                  return (0, d.Z)(
                    (0, h.Z)().mark(function i() {
                      var a;
                      return (0, h.Z)().wrap(function (i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (a = C(B, P)),
                                console.log(a, "isPhoneVersion"),
                                t.setData({
                                  source: e.source,
                                  area: e.area,
                                  isPhoneVersion: a,
                                }),
                                (t.animation = w().createAnimation({
                                  duration: 200,
                                  timingFunction: "linear",
                                })),
                                (i.next = 6),
                                t.getActivityInfo()
                              );
                            case 6:
                              t.bindActiviySource(e.source),
                                t.ubtTrace(212595, {
                                  openId: v.ZP.openid || "",
                                  userName: v.ZP.userName || "",
                                  cid: v.ZP.cid || "",
                                  bizKey: "joinGroup_joinOther_show",
                                });
                            case 8:
                            case "end":
                              return i.stop();
                          }
                      }, i);
                    })
                  )();
                },
                getActivityInfo: function () {
                  var e = this;
                  return (0, d.Z)(
                    (0, h.Z)().mark(function t() {
                      var i;
                      return (0, h.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (0, V.showLoading)(),
                                  (t.next = 4),
                                  (0, x.J9)({
                                    area: e.data.area,
                                    source: e.data.source,
                                  })
                                );
                              case 4:
                                1 === (i = t.sent).resultCode
                                  ? (e.handleInitData(i), (0, V.hideLoading)())
                                  : w().showToast({
                                      title: "网络错误，请稍后重试",
                                      icon: "none",
                                      duration: 1500,
                                    }),
                                  (t.next = 11);
                                break;
                              case 8:
                                (t.prev = 8),
                                  (t.t0 = t.catch(0)),
                                  console.log(t.t0, "err");
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 8]]
                      );
                    })
                  )();
                },
                bindActiviySource: function (e) {
                  e && (0, x.S$)({ source: e });
                },
                handleInitData: function (e) {
                  var t = this,
                    i = e.noticeList,
                    a = e.groupQrcode,
                    n = e.areaList,
                    o = e.areaName,
                    c = e.groupId,
                    s = e.topNotes;
                  this.setData(
                    {
                      noticeList: i,
                      groupQrcode:
                        a.indexOf("?") > 0
                          ? "".concat(a, "&v=").concat(A)
                          : "".concat(a, "?v=").concat(A),
                      areaList: n,
                      areaName: o,
                      groupId: c,
                      topNotes: s,
                    },
                    function () {
                      console.log(t.data, "data"),
                        t.data.isPhoneVersion &&
                          c &&
                          t.ubtTrace(212593, {
                            openId: v.ZP.openid || "",
                            userName: v.ZP.userName || "",
                            cid: v.ZP.cid || "",
                            bizKey: "joinGroup_clickToJoin_show",
                          });
                    }
                  );
                },
                showAreaChooseFloat: function () {
                  this.ubtTrace(212596, {
                    openId: v.ZP.openid || "",
                    userName: v.ZP.userName || "",
                    cid: v.ZP.cid || "",
                    bizKey: "joinGroup_joinOther_click",
                  }),
                    this.showSection();
                },
                chooseAreaAction: function (e) {
                  var t = this;
                  this.setData(
                    { areaName: e.name, area: e.area },
                    (0, d.Z)(
                      (0, h.Z)().mark(function e() {
                        return (0, h.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), t.getActivityInfo();
                              case 2:
                                t.hideSection();
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )
                  );
                },
                stopPropagation: function (e) {
                  e.stopPropagation();
                },
                showSection: function () {
                  var e = this;
                  this.animation.translateY("-100%").step(),
                    this.setData({ showSection: !0 }, function () {
                      setTimeout(function () {
                        e.setData({ animationData: e.animation.export() });
                      }, 100);
                    });
                },
                hideSection: function () {
                  this.setData({ showSection: !1 });
                },
                startmessage: function () {
                  console.log("开始回调");
                },
                completemessage: function () {
                  console.log("结束回调");
                },
                getNoticeListArr: function (e) {
                  for (
                    var t = Math.ceil(e.length / 3), i = [], a = 0;
                    a < t;
                    a++
                  ) {
                    var n = [e[3 * a]];
                    e[3 * a + 1] && n.push(e[3 * a + 1]),
                      e[3 * a + 2] && n.push(e[3 * a + 2]),
                      i.push(n);
                  }
                  return i;
                },
                renderLi: function (e, t) {
                  return e.map(function (e, i) {
                    return (0,
                    I.BX)(m.View, { className: "li", children: [(0, I.tZ)(m.Image, { src: e.icon, className: "icon" }), (0, I.tZ)(m.Image, { className: "tit", src: "https://images3.c-ctrip.com/zt/activity/20220422-ztrip-private-group/tit-chuxingdaequan.png" }), (0, I.tZ)(m.View, { className: "text", children: e.text })] }, "li-".concat(t, "-").concat(i));
                  });
                },
                onClickJoinGroupBtn: function () {
                  console.log("点击了加群按钮"),
                    this.ubtTrace(212594, {
                      openId: v.ZP.openid || "",
                      userName: v.ZP.userName || "",
                      cid: v.ZP.cid || "",
                      bizKey: "joinGroup_clickToJoin_click",
                    });
                },
              })),
              a(
                (o =
                  n(
                    (o = (function (e) {
                      (0, l.Z)(i, e);
                      var t = (0, u.Z)(i);
                      function i() {
                        return (0, s.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.noticeList,
                                a = void 0 === i ? [] : i,
                                n = t.groupQrcode,
                                o = t.areaList,
                                c = t.areaName,
                                s = t.showSection,
                                r = t.isPhoneVersion,
                                l = t.groupId,
                                u = t.topNotes,
                                h = this.getNoticeListArr(a);
                              return (
                                console.log("noticeListArr", h),
                                (0, I.tZ)(m.Block, {
                                  children: (0, I.BX)(m.View, {
                                    className: "groupScanCodeV2",
                                    children: [
                                      (0, I.BX)(m.View, {
                                        className: "top-box",
                                        children: [
                                          (0, I.tZ)(m.View, {
                                            className: "slogan",
                                          }),
                                          (0, I.tZ)(m.View, {
                                            className: "subtit",
                                            children: u,
                                          }),
                                          (0, I.tZ)(m.View, {
                                            className: "icon-heart",
                                          }),
                                          (0, I.tZ)(m.View, {
                                            className: "icon-coin",
                                          }),
                                        ],
                                      }),
                                      (0, I.BX)(m.View, {
                                        className: "wrap",
                                        children: [
                                          (0, I.BX)(m.View, {
                                            className: "white-box",
                                            children: [
                                              (0, I.tZ)(m.Image, {
                                                src: "https://images3.c-ctrip.com/zt/activity/20220422-ztrip-private-group/tit-jinqunzhuanxiang.png",
                                                className: "htit",
                                              }),
                                              (0, I.BX)(m.View, {
                                                className: "htxt",
                                                children: [
                                                  "整个",
                                                  (0, I.tZ)(m.Text, {
                                                    className: "torage",
                                                    children: "上海",
                                                  }),
                                                  "的学生都在群里啦，快来找找有没有你的朋友吧～",
                                                ],
                                              }),
                                              h.map(function (t, i) {
                                                return (0,
                                                I.tZ)(m.View, { className: "exclusive-list", children: e.renderLi(t, i) }, "ul-".concat(i));
                                              }),
                                              (0, I.tZ)(m.View, {
                                                children:
                                                  r && l
                                                    ? (0, I.BX)(m.View, {
                                                        className:
                                                          "exclusive-btn",
                                                        children: [
                                                          (0, I.tZ)(m.View, {
                                                            className:
                                                              "chat-group-plugin",
                                                            id: "AeCk",
                                                            onClick:
                                                              this
                                                                .onClickJoinGroupBtn,
                                                            children: (0, I.tZ)(
                                                              "chatGroupPlugin",
                                                              {
                                                                url: l,
                                                                paddingStyle: 10,
                                                                contactText: "",
                                                                startmessage:
                                                                  this
                                                                    .startmessage,
                                                                completemessage:
                                                                  this
                                                                    .completemessage,
                                                              }
                                                            ),
                                                          }),
                                                          (0, I.tZ)(m.View, {
                                                            className:
                                                              "btn-submit",
                                                            children: (0, I.BX)(
                                                              m.Text,
                                                              {
                                                                className:
                                                                  "tit",
                                                                children: [
                                                                  "点我加入",
                                                                  c,
                                                                  "福利群",
                                                                ],
                                                              }
                                                            ),
                                                          }),
                                                          (0, I.tZ)(m.View, {
                                                            className:
                                                              "icon-hand",
                                                          }),
                                                        ],
                                                      })
                                                    : (0, I.BX)(m.View, {
                                                        className: "qrcode-bd",
                                                        children: [
                                                          (0, I.BX)(m.View, {
                                                            className: "tit",
                                                            children: [
                                                              r && l
                                                                ? "点击加"
                                                                : "",
                                                              "小智",
                                                              (0, I.tZ)(
                                                                m.Text,
                                                                {
                                                                  className:
                                                                    "torage",
                                                                  children: c,
                                                                }
                                                              ),
                                                              "福利群",
                                                            ],
                                                          }),
                                                          (0, I.tZ)(m.View, {
                                                            className:
                                                              "qrcode-show",
                                                            children: (0, I.tZ)(
                                                              m.Image,
                                                              {
                                                                src: n,
                                                                className:
                                                                  "img",
                                                                "show-menu-by-longpress":
                                                                  !0,
                                                              }
                                                            ),
                                                          }),
                                                          (0, I.tZ)(m.View, {
                                                            className: "tips",
                                                            children:
                                                              "可截图扫码加群",
                                                          }),
                                                          (0, I.tZ)(m.View, {
                                                            className:
                                                              "icon-hand",
                                                          }),
                                                        ],
                                                      }),
                                              }),
                                              (0, I.BX)(m.View, {
                                                className: "chose-other",
                                                id: "AeCl",
                                                onClick:
                                                  this.showAreaChooseFloat,
                                                children: [
                                                  "不是",
                                                  c,
                                                  "？选择其他群 ",
                                                ],
                                              }),
                                            ],
                                          }),
                                          s &&
                                            (0, I.BX)(m.Block, {
                                              children: [
                                                (0, I.tZ)(m.View, {
                                                  className: "shadow",
                                                  id: "AeCm",
                                                  onClick: this.hideSection,
                                                }),
                                                (0, I.BX)(m.View, {
                                                  className:
                                                    "pop-botm pop-select-area",
                                                  children: [
                                                    (0, I.BX)(m.View, {
                                                      className: "pop-botm-hd",
                                                      children: [
                                                        (0, I.tZ)(m.Image, {
                                                          src: "https://images3.c-ctrip.com/zt/activity/20220324-ztrip-private-group/tit-xuanzhequyu.png",
                                                          className: "tit",
                                                        }),
                                                        (0, I.tZ)(m.View, {
                                                          className:
                                                            "icon-closed",
                                                          id: "AeCn",
                                                          onClick:
                                                            this.hideSection,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, I.BX)(m.View, {
                                                      className: "pop-botm-bd",
                                                      children: [
                                                        (0, I.tZ)(m.View, {
                                                          className:
                                                            "select-area-list",
                                                          children: o.map(
                                                            function (t) {
                                                              return (0, I.tZ)(
                                                                m.View,
                                                                {
                                                                  id: "AeCo",
                                                                  onClick:
                                                                    function () {
                                                                      return e.chooseAreaAction(
                                                                        t
                                                                      );
                                                                    },
                                                                  className:
                                                                    "li ".concat(
                                                                      t.name ===
                                                                        c
                                                                        ? "cur"
                                                                        : ""
                                                                    ),
                                                                  children:
                                                                    t.name,
                                                                },
                                                                t.area
                                                              );
                                                            }
                                                          ),
                                                        }),
                                                        (0, I.BX)(m.View, {
                                                          className: "title",
                                                          children: [
                                                            (0, I.tZ)(m.View, {
                                                              children:
                                                                "区域在不断覆盖中…",
                                                            }),
                                                            (0, I.tZ)(m.View, {
                                                              children:
                                                                "若您的区域未包括在上方，可先加一个临近的区域",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                })
                              );
                            },
                          },
                        ]),
                        i
                      );
                    })(p.default.Component))
                  ) || o)
              ) || o);
          Page(
            (0, c.createPageConfig)(
              y,
              "pages/activity/train/groupScanCodeV2/index",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [24945, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(64609);
        }),
          e.O();
      },
    ]);
})();
