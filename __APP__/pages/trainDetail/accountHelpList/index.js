!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [17214],
      {
        77186: function (e, t, a) {
          var s,
            r = a(32180),
            i = a(298),
            n = a(93212),
            c = a(57042),
            o = a(24460),
            l = a(21867),
            d = a(86066),
            u = a(52500),
            m = a(71515),
            h = a(79792),
            f = a(81957),
            g = (a(92954), a(49120)),
            N = a(34229),
            Z = a(18783),
            p = a(10741),
            w = a(48813),
            x =
              (0, f.h)()(
                (s = (function (e) {
                  (0, l.Z)(a, e);
                  var t = (0, d.Z)(a);
                  function a(e) {
                    var s;
                    return (
                      (0, c.Z)(this, a),
                      ((s = t.call(this, e)).pageId = h.default.isTieyou
                        ? "10650069422"
                        : "10650068758"),
                      (s.state = {
                        isTieyou: h.default.isTieyou,
                        assistanceOrderTips:
                          "以下订单是用您12306账号帮好友抢票，若您帮忙抢票成功后将会用您的账号进行出票",
                        assistanceOrders: [],
                        noneAssistanceOrder: null,
                        accountDesc: null,
                      }),
                      s
                    );
                  }
                  return (
                    (0, o.Z)(a, [
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e = this;
                          this.getAssistanceOrders().then(function (t) {
                            t.length > 0
                              ? e.newUbtTrace(201244, { state: 1 })
                              : e.newUbtTrace(201244, { state: 0 });
                          });
                        },
                      },
                      {
                        key: "getAssistanceOrders",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            a = t.needLoading,
                            s = void 0 === a || a;
                          return (
                            s && (0, g.showLoading)(),
                            (0, p.WLZ)({ type: 1 })
                              .then(function (t) {
                                if (t && 1 === t.resultCode) {
                                  var a = t.assistanceOrderTips || "",
                                    s = t.assistanceOrders || [],
                                    r = t.noneAssistanceOrder,
                                    i = t.relativeAccountDesc;
                                  return (
                                    e.setState({
                                      assistanceOrderTips: a,
                                      assistanceOrders: s,
                                      noneAssistanceOrder: r,
                                      accountDesc: i,
                                    }),
                                    s
                                  );
                                }
                                throw t;
                              })
                              .finally(function () {
                                return s && (0, g.hideLoading)();
                              })
                          );
                        },
                      },
                      {
                        key: "onClickOrderBox",
                        value: function (e) {
                          this.newUbtTrace(201245),
                            this.navigateTo({
                              url: "/pages/trainDetail/accountHelpOrder/index?oid=".concat(
                                e
                              ),
                            });
                        },
                      },
                      {
                        key: "newUbtTrace",
                        value: function (e, t) {
                          (t = t && "object" == (0, n.Z)(t) ? t : {}),
                            console.log(
                              "newUbtTrace",
                              (0, i.Z)(
                                {
                                  openId: Z.ZP.openid || "",
                                  userName: Z.ZP.userName || "",
                                  cid: Z.ZP.cid || "",
                                },
                                t
                              )
                            );
                          try {
                            this.ubtTrace(
                              e,
                              (0, i.Z)(
                                {
                                  openId: Z.ZP.openid || "",
                                  userName: Z.ZP.userName || "",
                                  cid: Z.ZP.cid || "",
                                },
                                t
                              )
                            );
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t = this,
                            a = this.state,
                            s = a.isTieyou,
                            r = a.assistanceOrderTips,
                            i = a.assistanceOrders,
                            n = a.noneAssistanceOrder,
                            c = a.accountDesc;
                          return (0, w.tZ)(m.View, {
                            className: "account-help-list ".concat(
                              s ? "ty" : "zx"
                            ),
                            children:
                              i && i.length > 0
                                ? (0, w.BX)(m.View, {
                                    className: "order-list",
                                    children: [
                                      (0, w.BX)(m.View, {
                                        className: "note",
                                        children: [
                                          (0, w.tZ)(m.Image, {
                                            src: s
                                              ? "https://images3.c-ctrip.com/ztrip/train.song/grab/bqxqy/icon_tz_ty@3x.png"
                                              : "https://images3.c-ctrip.com/ztrip/train.song/grab/bqxqy/icon_tz@3x.png",
                                            className: "img",
                                          }),
                                          (0, w.tZ)(m.View, {
                                            className: "txt",
                                            children: r,
                                          }),
                                        ],
                                      }),
                                      i.map(function (e) {
                                        return (0,
                                        w.BX)(m.View, { className: "order-box", id: "AJAA", onClick: t.onClickOrderBox.bind(t, e.orderNumber), children: [(0, w.tZ)(m.View, { className: "order-top", children: (0, w.BX)(m.View, { className: "tit", children: [(0, w.tZ)(m.Text, { className: "strong", children: e.departStation + "-" + e.arriveStation }), 200 === e.orderStateInfo.stateCode && (0, w.BX)(m.View, { className: "fr flex-center " + (s ? "loading-ty" : "loading-zx"), children: [(0, w.tZ)(m.Icon, { className: s ? "icon-loading-ty" : "icon-loading-zx" }), e.orderStateInfo && e.orderStateInfo.stateName && (0, w.tZ)(m.View, { children: (0, w.tZ)(m.Text, { className: "tblue", children: e.orderStateInfo.stateName }) })] }), 100 === e.orderStateInfo.stateCode && (0, w.tZ)(m.View, { className: "fr", children: (0, w.tZ)(m.Text, { className: "tred", children: "待支付" }) }), 300 === e.orderStateInfo.stateCode && (0, w.tZ)(m.View, { className: "fr", children: (0, w.tZ)(m.Text, { className: "tgreen", children: "抢票成功" }) }), 201 === e.orderStateInfo.stateCode && (0, w.tZ)(m.View, { className: "fr", children: (0, w.tZ)(m.Text, { className: "tblue", children: "已预约" }) }), 500 === e.orderStateInfo.stateCode && (0, w.tZ)(m.View, { className: "fr", children: (0, w.tZ)(m.Text, { className: "tgrey", children: "已取消" }) }), 400 === e.orderStateInfo.stateCode && (0, w.tZ)(m.View, { className: "fr", children: (0, w.tZ)(m.Text, { className: "tgrey", children: "抢票失败" }) }), (600 === e.orderStateInfo.stateCode || 203 === e.orderStateInfo.stateCode || 204 === e.orderStateInfo.stateCode) && (0, w.tZ)(m.View, { className: "fr", children: (0, w.tZ)(m.Text, { className: "tred", children: "车票待确认" }) }), (205 === e.orderStateInfo.stateCode || 206 === e.orderStateInfo.stateCode || 207 === e.orderStateInfo.stateCode) && (0, w.tZ)(m.View, { className: "fr", children: (0, w.tZ)(N.ZtRichText, { className: "tred", nodes: e.orderStateInfo.stateName }) })] }) }), e.orderRouteDesc && (0, w.tZ)(m.View, { className: "txt order-route-desc", children: e.orderRouteDesc }), e.assistanceOrderDesc && (0, w.tZ)(m.View, { className: "txt assistance-order-desc", children: e.assistanceOrderDesc })] }, e.orderNumber);
                                      }),
                                      (0, w.tZ)(m.View, {
                                        className: "list-tip",
                                        children: "目前仅展示3个月抢票记录",
                                      }),
                                    ],
                                  })
                                : (0, w.BX)(m.View, {
                                    className: "no-order-show",
                                    children: [
                                      n &&
                                        (0, w.BX)(m.View, {
                                          className: "none-order-box",
                                          children: [
                                            (0, w.tZ)(m.Image, {
                                              src: s
                                                ? "https://images3.c-ctrip.com/ztrip/train.song/xcx/img_kzt_ty@3x.png"
                                                : "https://images3.c-ctrip.com/ztrip/train.song/xcx/img_kzt@3x.png",
                                              className: "img",
                                            }),
                                            (0, w.tZ)(m.View, {
                                              className: "title",
                                              children: n.title,
                                            }),
                                            (0, w.tZ)(m.View, {
                                              className: "subTitle",
                                              children: n.subTitle,
                                            }),
                                            (0, w.BX)(m.View, {
                                              className: "tip-box ".concat(
                                                s ? "ty" : "zx"
                                              ),
                                              children: [
                                                (0, w.tZ)(m.View, {
                                                  className: "tip",
                                                  children: n.leftTitle,
                                                }),
                                                (0, w.tZ)(m.View, {
                                                  className: "tip",
                                                  children: n.rightTitle,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      c &&
                                        c.title &&
                                        (0, w.BX)(m.View, {
                                          className: "qus-box",
                                          children: [
                                            (0, w.tZ)(m.View, {
                                              className: "tit",
                                              children: c.title,
                                            }),
                                            null === (e = c.descList) ||
                                            void 0 === e
                                              ? void 0
                                              : e.map(function (e, t) {
                                                  return (0,
                                                  w.BX)(m.Block, { children: [(0, w.tZ)(m.View, { className: "txt-qus", children: e.title }), (0, w.tZ)(m.View, { className: "txt-anw", children: e.subTitle })] }, t);
                                                }),
                                          ],
                                        }),
                                      (0, w.tZ)(m.View, {
                                        className: "botm-advg",
                                      }),
                                    ],
                                  }),
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(u.Component))
              ) || s;
          Page(
            (0, r.createPageConfig)(
              x,
              "pages/trainDetail/accountHelpList/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "帮好友抢票订单",
                navigationBarBackgroundColor: "#f6f6f6",
                backgroundColorTop: "#f6f6f6",
                backgroundColorBottom: "#f6f6f6",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(77186);
        }),
          e.O();
      },
    ]);
})();
