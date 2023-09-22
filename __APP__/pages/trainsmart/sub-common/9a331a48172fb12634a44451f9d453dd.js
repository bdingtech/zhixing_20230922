!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [40459],
    {
      69192: function (e, t, c) {
        var i = c(52500),
          r = c(71515),
          n = c(34229),
          l = c(85423),
          s = c(48813);
        t.Z = i.default.memo(function (e) {
          var t = e.refundRules,
            c = void 0 === t ? null : t,
            i = e.onClose,
            a = void 0 === i ? function () {} : i;
          if (!c || 0 === c.length) return (0, s.tZ)(s.HY, {});
          var o = function (e) {
            return (0, s.BX)(r.View, {
              className: "tit-box flex-align-items-center",
              children: [
                (0, s.tZ)(r.View, { className: "v-line" }),
                (0, s.tZ)(r.View, { className: "tit", children: e }),
              ],
            });
          };
          return (0, s.tZ)(n.ZtDrawer, {
            show: !0,
            isDefineHead: !0,
            className: "smart-pr-drawer",
            children: (0, s.BX)(r.View, {
              className: "content flex-align-items-center flex-column",
              children: [
                (0, s.tZ)(r.Image, {
                  className: "close-img",
                  src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                  id: "AAEP",
                  onClick: a,
                }),
                (0, s.tZ)(r.Image, {
                  className: "tit-img",
                  src: "https://images3.c-ctrip.com/ztrip/train_zhu/Tag_Title_text_Anxintui.png",
                }),
                (0, s.BX)(r.ScrollView, {
                  scrollY: !0,
                  className: "scroll-box",
                  children: [
                    (0, s.BX)(r.View, {
                      className: "refund-rule-box comm-box",
                      children: [
                        o("退票必返现金 (规则)"),
                        (0, s.BX)(l.iA, {
                          className: "refund-fee-table",
                          children: [
                            (0, s.BX)(l.Tr, {
                              className: "rft-tr",
                              children: [
                                (0, s.tZ)(l.Th, {
                                  className: "rft-th",
                                  children: "单程最高票价区间 (元)",
                                }),
                                (0, s.tZ)(l.Th, {
                                  className: "rft-th",
                                  children: "可返现金额比例",
                                }),
                              ],
                            }),
                            c.map(function (e, t) {
                              return (0,
                              s.BX)(l.Tr, { className: "rft-tr", children: [(0, s.tZ)(l.Td, { className: "rft-td", children: e.priceLimit }), (0, s.tZ)(l.Td, { className: "rft-td", children: (0, s.tZ)(n.ZtRichText, { nodes: "返 退票手续费<font color='#198cff'>".concat(e.refundLimit, "</font>") }) })] }, t);
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.BX)(r.View, {
                      className: "return-tips comm-box",
                      children: [
                        o("返现领取方式"),
                        (0, s.tZ)(r.View, {
                          className: "cont",
                          children:
                            "关注 “智行火车票”微信公众号，选择“服务-福利中心-更多服务-安心退改”，在链接页面中输入基本信息并按提示操作。",
                        }),
                      ],
                    }),
                    (0, s.BX)(r.View, {
                      className: "detail-box comm-box",
                      children: [
                        o("详细说明"),
                        (0, s.tZ)(n.ZtRichText, {
                          className: "cont",
                          nodes:
                            "“安心退”是智行为用户在改签服务中提供的有偿关怀产品（本单免费赠送）。若用户在相应时间内因行程有变退票产生手续费（铁路局收取），我们将以返现形式按相应比例向用户发放关怀金；具体发放金额按照退票产生的手续费计算（计算方式以本须知内返现说明为准）。<br /><br />请注意以下安心退票的退订限制以及产品条款对发放返现的限制，对于特定下方已说明的情况，恐怕会造成无法领取返现，请您仔细阅读：<br />1.“安心退票”自订单开始时已经生效，生效后不可退订；<br />2.“安心退票”下单截止时间为发车前，发车后不支持购买；<br />3.因用户乘客身份未通过核验或行程冲突造成的购票失败，不发放返现，但产品费用会在1-3个工作日内原路退回您的账户；<br />4.本产品返现仅限于在智行线上退票后领取：车站退票等非线上退改或其他渠道退改不能领取返现；<br />5.如发现恶意套取返现，我们有权拒绝返现，并追究责任。对以上服务如有任何疑问，请拨打客服热线021-60668666咨询。",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.tZ)(r.View, {
                  className: "rft-btn-box",
                  children: (0, s.tZ)(r.Button, {
                    className: "btn",
                    id: "AAEQ",
                    onClick: a,
                    children: "知道了",
                  }),
                }),
              ],
            }),
          });
        });
      },
    },
  ]);
})();
