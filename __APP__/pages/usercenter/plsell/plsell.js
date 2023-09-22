!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [23559],
      {
        83392: function (e, t, i) {
          var n = i(32180),
            c = i(57042),
            s = i(24460),
            a = i(21867),
            l = i(86066),
            r = i(298),
            o = i(52500),
            d = i(71515),
            h = i(92954),
            u = i.n(h),
            m = i(48792),
            w = i.n(m),
            p = i(79792),
            V = i(49120),
            N = i(18783),
            b = i(93761),
            Z = i(79910),
            f = i(59163),
            g = i(81957),
            x = i(5050),
            T = i(91006),
            y = i.n(T),
            v = i(48813),
            C = p.default.AppConfig,
            B = function (e) {
              var t = e.onClose,
                i = e.title;
              return (0, v.BX)(d.View, {
                children: [
                  (0, v.tZ)(d.View, { className: "shade-box" }),
                  (0, v.BX)(d.View, {
                    className: "buy-intro-pop",
                    children: [
                      (0, v.tZ)(d.View, {
                        className: "title",
                        children: "购买说明",
                      }),
                      null != i && i.indexOf("季卡")
                        ? (0, v.BX)(d.View, {
                            className: "content",
                            children: [
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "铂金会员定价为49元，" +
                                  (C ? "铁友" : "智行") +
                                  "有权对定价做出适调整；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "购买的铂金会员的有效期为1年(365天),购买后即可生效,过期将不退未使用的特权费用；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "有效期内支持多次购买/续费铂金会员服务；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "购买铂金会员的用户可以选择购票礼包或抢票礼包中的任意一个；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "购买铂金会员支付成功后,即享有全部铂金会员权益,包含抢票加速、机票买贵赔、酒店会员价等，部分权益小程序暂不支持；",
                              }),
                              (0, v.BX)(d.View, {
                                className: "text",
                                children: [
                                  "选择抢票礼包开通铂金会员,即享有有效期内5张VIP抢票券和无限次",
                                  x.Z.PRIORITY_TICKET,
                                  "特权。",
                                ],
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "选择购票礼包开通铂金会员，即赠4次订卧铺指定下铺出票权益与4次夜间购票立即出票权益：订卧铺指定下铺出票权益可在当前选择车次有卧铺余票时使用，价值60元/每单； 使用后将为当前订单所有乘客优先出下铺票，若出票成功则消耗权益次数，若下铺不足则自动出其他铺位，权益次数返还；夜间购票立即出票权益可在12306系统夜间维护时间段（晚11:30-早6:00）使用，价值40元/每单； 使用后即可无需等待至第二天上午6点，可在2小时内获知当前订单出票结果，若出票成功则消耗权益次数，若未在规定时间内出票成功，则权益次数返还； 使用指定下铺权益或夜间出票权益购买成功的车票需至车站取票方可乘车，且暂不支持线上退票/改签；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "购买铂金会员,即赠1张15元机票立减券+1张15元酒店立减券，机票券用于"
                                    .concat(
                                      C ? "铁友" : "智行",
                                      "移动端购买国内机票时使用,需订单金额大于立减券面额方可使用,使用后即可抵扣部分机票订单金额；\n                酒店券用于"
                                    )
                                    .concat(
                                      C ? "铁友" : "智行",
                                      "移动端消费酒店订单时使用,需订单金额大于100元方可使用,使用后即可抵扣部分酒店订单金额；"
                                    ),
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children: "选择抢票礼包开通"
                                  .concat(
                                    C ? "铁友" : "智行",
                                    "铂金会员后,如用户使用VIP特权抢票失败且仍未使用过会员权益（包括抢票券、会员优惠券、抢票提速、抢票金手指、各业务会员价等），则支持用户在"
                                  )
                                  .concat(
                                    C ? "铁友" : "智行",
                                    "移动端手动退订会员；\n                否则，不支持用户在会员有效期内取消服务或终止资格,用户已支付的会员服务费不予退还；"
                                  ),
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "选择购票礼包开通铂金会员，如用户未使用任何预订权益（包括指定下铺和夜间出票）或其他会员权益（包括会员优惠券、抢票提速、抢票金手指、各业务会员价等），则支持用户在".concat(
                                    C ? "铁友" : "智行",
                                    "移动端手动退订会员；\n                否则，不支持用户在会员有效期内取消服务或终止资格,用户已支付的会员服务费不予退还；"
                                  ),
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  (C ? "铁友" : "智行") +
                                  "会员用户不得利用会员服务触犯法律法规、非法获利,或以任何方式侵害他人权利,如岀现该等违法及不当使用会员服务行为,包括但不限于酒店刷单、机票刷票、抢票刷单等," +
                                  (C ? "铁友" : "智行") +
                                  "有权冻结或取消会员用户的会员资格；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "在法律许可的范围內," +
                                  (C ? "铁友" : "智行") +
                                  "将根据需要对会员规则做调整,包括升级条件及权益内容,请关注相关页面规则更新及其它提示。",
                              }),
                            ],
                          })
                        : (0, v.BX)(d.View, {
                            className: "content",
                            children: [
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "铂金会员季卡定价为29.9元，" +
                                  (C ? "铁友" : "智行") +
                                  "有权对定价做出适调整；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "购买的铂金会员的有效期为90天,购买后即可生效,过期将不退未使用的特权费用；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "有效期内支持多次购买/续费铂金会员服务；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "购买铂金会员支付成功后,即享有全部铂金会员权益,包含抢票加速、机票买贵赔、酒店会员价等；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "铂金季卡用户，有效期内有且仅有一次热门会员选择机会，可从腾讯视频、QQ音乐、芒果TV、keep会员和饿了吗超级会员中任选其一进行兑换，兑换时间需在购买铂金季卡后30天内，如超时未兑换则视为放弃权益；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "腾讯视频充值账号为QQ号，到账时间：1-10分钟 到账查询：方式1.登录腾讯充值中心（https://pay.qq.com）-我的账户 -我的服务 - 即可查询对应产品的到期时间；方式2.QQ邮箱可收到产品激活提醒；方式3.微信公众号“腾讯充值”可收到产品激活提醒 权益说明:：1个月腾讯视频会员，具体权限可登陆腾讯视频个人中心https://film.qq.com/vip/my/index.html，查看产品特权；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "QQ音乐豪华绿钻充值账号为QQ号，到账时间：1-10分钟 到账查询：打开qq音乐app 点击我-点击头像内即可查看会员到账情况 权益说明：此商品为QQ音乐绿钻会员 请登录https://y.qq.com/portal/vipportal/index.html查看具体绿钻介绍 特殊说明：充值成功后 无法退换；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "芒果TV为自动充值，下单成功后视频会员权益将直接充值到您在本平台注册的手机号中，请确认该手机号为您已开通的会员权益账号；兑换成功后，用充值的手机号登陆芒果TV即可享受会员权益（之前未注册过芒果TV的手机号，注册后可登录享受会员权益）；会员充值成功后可在手机APP，电脑，PAD端使用，适用于芒果TV中国大陆地区用户，不支持TV端，跳转到别家视频网站的VIP视频不可观看；会员激活后可享院线电影、独家自制剧等精彩影视内容，播放无广告、蓝光高清画质、湖南卫视王牌综艺直播等优质影音服务；本商品属于虚拟商品，自动充值，一经充值成功无法退款；充值中如有任何问题，请拨打400-8211-400咨询。；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "KEEP会员为自动充值，下单成功后会员权益将直接充值到您在本平台注册的手机号中，请确认该手机号为您已开通的会员权益账号；兑换成功后，用充值的手机号登陆KEEP即可享受会员权益（之前未注册过KEEP的手机号，注册后可登录享受会员权益）；本商品属于虚拟商品，自动充值，一经充值成功无法退款；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "饿了吗超级会员为自动充值，下单成功后会员权益将直接充值到您在本平台注册的手机号中，请确认该手机号为您已开通的会员权益账号；兑换成功后，用充值的手机号登陆饿了吗APP即可享受会员权益（之前未注册过饿了吗的手机号，注册后可登录享受会员权益）；本商品属于虚拟商品，自动充值，一经充值成功无法退款；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "铂金季卡会员享有效期内3次免费VIP抢票特权（针对会员本人）+首单抢不到补偿25元；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "智慧出行流程中暂不支持无限抢票VIP功能,请在普通模式中下抢票单。",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "铂金季卡会员，赠1次订卧铺指定下铺出票权益+1次夜间购票立即出票权益+3次免费安心退改权益：订卧铺指定下铺出票权益可在当前选择车次有卧铺余票时使用，价值15元/每人每单；使用后将为当前订单所有乘客优先出下铺票，若出票成功则消耗权益次数，若下铺不足则自动出其他铺位，权益次数返还；夜间购票立即出票权益可在12306系统夜间维护时间段（晚11:30-早6:00）使用，价值10元/每人每单；使用后即可无需等待至第二天上午6点，可在2小时内获知当前订单出票结果，若出票成功则消耗权益次数，若未在规定时间内出票成功，则权益次数返还；使用指定下铺权益或夜间出票权益购买成功的车票需至车站取票方可乘车，且暂不支持线上退票/改签；无限安心退改权益可在用户火车票退改产生手续费时给予一定比例的补偿，退改时间距发车前7天至48小时补偿80%手续费，退改时间距发车前48小时至24小时补偿70%手续费，退改时间距发车前24小时内补偿50%手续费；以下车票不支持使用安心退改权益：1) 人工客票，包含选下铺车票、选座席车票、夜间出票等；2) 多程中转车票；3) 火车出发35min内购买的车票；4) 单张票面价格低于30元的车票；5) 抢票成功的订单所出车票；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "购买铂金季卡会员,即赠1张15元机票立减券+1张50元酒店满减券，机票券用于"
                                    .concat(
                                      C ? "铁友" : "智行",
                                      "APP内购买国内机票时使用,需订单金额大于立减券面额方可使用,使用后即可抵扣部分机票订单金额；酒店券用于"
                                    )
                                    .concat(
                                      C ? "铁友" : "智行",
                                      "APP内消费酒店时使用,订单金额大于300元方可使用,使用后即可抵扣部分酒店订单金额；"
                                    ),
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "购买铂金季卡会员后，如用户未使用任何预订权益（包括指定下铺和夜间出票）或其他会员权益（包括会员优惠券、抢票提速、抢票金手指、各业务会员价等），则支持用户手动退订会员；否则，不支持用户在会员有效期内取消服务或终止资格,用户已支付的会员服务费不予退还",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children: "小程序仅支持以上部分权益使用；",
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children: ""
                                  .concat(
                                    C ? "铁友" : "智行",
                                    "会员用户不得利用会员服务触犯法律法规、非法获利,或以任何方式侵害他人权利,如岀现该等违法及不当使用会员服务行为,包括但不限于酒店刷单、机票刷票、抢票刷单等,"
                                  )
                                  .concat(
                                    C ? "铁友" : "智行",
                                    "有权冻结或取消会员用户的会员资格；"
                                  ),
                              }),
                              (0, v.tZ)(d.View, {
                                className: "text",
                                children:
                                  "在法律许可的范围內," +
                                  (C ? "铁友" : "智行") +
                                  "将根据需要对会员规则做调整,包括升级条件及权益内容,请关注相关页面规则更新及其它提示。",
                              }),
                            ],
                          }),
                      (0, v.tZ)(d.View, {
                        id: "ACAC",
                        onClick: t,
                        children: (0, v.tZ)(d.Icon, {
                          className: "icon-closed",
                        }),
                      }),
                    ],
                  }),
                ],
              });
            };
          (B.propTypes = { onClose: y().func, title: y().string }),
            (B.defaultProps = { onClose: function () {}, title: "" });
          var I,
            P = o.default.memo(B),
            L = {
              pageId: "10650060355",
              data: {
                isLogin: N.ZP.isLogin,
                isTieyou: p.default.isTieyou,
                notifyShow: "",
                isBuyGrab: !1,
                currentIndex: 0,
                purchaseVipTypeList: [],
                vipTypeEntityList: [],
                giftRightsList: [],
                gradeRightList: [],
                showType: "",
                currentTabIndex: 0,
              },
              onLoad: function () {
                var e = (0, h.getCurrentInstance)().router.params.tabIndex,
                  t = void 0 === e ? 0 : e;
                this.getSellVipCenterInfo(+t);
              },
              getSellVipCenterInfo: function (e) {
                var t = this;
                return (0, f.OJ)({ pageOrigin: 0 })
                  .then(function (i) {
                    if (1 === i.resultCode) {
                      var n = i.title,
                        c = void 0 === n ? "开通铂金会员" : n,
                        s = i.notifyShow,
                        a = void 0 === s ? "" : s,
                        l = i.isBuyGrab,
                        o = void 0 !== l && l,
                        d = i.purchaseVipTypeList,
                        h = void 0 === d ? [] : d,
                        m = i.gradeRightList,
                        w = void 0 === m ? [] : m;
                      u().setNavigationBarTitle({ title: c });
                      var p,
                        V = [];
                      h.forEach(function (e) {
                        V.push(
                          e.vipTypeEntityList.map(function (e) {
                            var t = "",
                              i = "";
                            return (
                              e.title.includes("年")
                                ? ((t = "Y"), (i = "年"))
                                : e.title.includes("季")
                                ? ((t = "S"), (i = "季"))
                                : e.title.includes("月") &&
                                  ((t = "M"), (i = "月")),
                              (0, r.Z)(
                                (0, r.Z)({}, e),
                                {},
                                {
                                  type: t,
                                  typeDesc: i,
                                  price: e.price.replace(".00", ""),
                                }
                              )
                            );
                          })
                        );
                      }),
                        (p = V[e]),
                        t.setData({
                          notifyShow: a,
                          purchaseVipTypeList: V,
                          isBuyGrab: o,
                          vipTypeEntityList: p,
                          currentCode: p[0].code,
                          giftRightsList: p[0].giftRightsList || [],
                          gradeRightList: w,
                          currentTabIndex: e,
                        });
                    }
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              subscibeMemberPaySuccessMsg: function () {},
              handleChangeMemberTypeTab: function (e) {
                var t = this.data,
                  i = t.purchaseVipTypeList,
                  n = t.currentTabIndex;
                if (!(e > i.length - 1) && n !== e) {
                  0 === e
                    ? this.newUbtTrace("197317")
                    : 1 === e && this.newUbtTrace("197284");
                  var c = i[e];
                  this.setData({
                    currentTabIndex: e,
                    vipTypeEntityList: c,
                    currentCode: c[0].code,
                    giftRightsList: c[0].giftRightsList || [],
                    currentIndex: 0,
                  });
                }
              },
              openVipCenterCard: function () {
                var e = this,
                  t = this.data,
                  i = t.currentIndex,
                  n = t.currentCode,
                  c = t.vipTypeEntityList,
                  s = t.currentTabIndex;
                0 === s
                  ? this.newUbtTrace("197319")
                  : 1 === s && this.newUbtTrace("197286");
                var a = [];
                a.push({
                  name: "ubtAppId",
                  value: p.default.memberSellUbtValue || "10000",
                });
                var l = {
                  price: c[i].price,
                  vipCode: n,
                  orderScene: 12,
                  packageType: s,
                };
                return (0, f.dD)(l, { extension: a })
                  .then(function (t) {
                    var i = t.resultCode,
                      n = t.goodsId,
                      c = t.orderNumber,
                      a = t.resultMessage;
                    0 === i
                      ? N.ZP.doLogin().then(
                          function () {
                            e.openVipCenterCard();
                          },
                          function () {
                            console.log("取消登录");
                          }
                        )
                      : 1 === i
                      ? b.ZP.doPayment({
                          business: "common",
                          orderNumber: c,
                          goodsId: n,
                          title: "购买会员",
                        })
                          .then(function () {
                            (0, V.showToast)("支付成功"),
                              e.getSellVipCenterInfo(s),
                              e.subscibeMemberPaySuccessMsg();
                          })
                          .catch(function () {})
                      : (0, V.showModal)(a || "网络出小差，请稍后重试");
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              chooseVipEntity: function (e) {
                var t = e.currentTarget.dataset.index,
                  i = this.data.vipTypeEntityList;
                this.setData({
                  currentIndex: t,
                  giftRightsList: i[t].giftRightsList,
                  currentCode: i[t].code,
                });
              },
              showRule: function () {
                var e = this.data.currentTabIndex;
                0 === e
                  ? this.newUbtTrace("197318")
                  : 1 === e && this.newUbtTrace("197285"),
                  this.setData({ showType: "showRule" });
              },
              closeRule: function () {
                this.setData({ showType: "" });
              },
              newUbtTrace: function (e) {
                try {
                  this.ubtTrace(e, {
                    openId: N.ZP.openid || "",
                    userName: N.ZP.userName || "",
                    cid: N.ZP.cid || "",
                  });
                } catch (e) {
                  console.log(e);
                }
              },
              onShow: function () {},
            },
            X =
              (0, g.h)()(
                (I =
                  w()(L)(
                    (I = (function (e) {
                      (0, a.Z)(i, e);
                      var t = (0, l.Z)(i);
                      function i() {
                        return (0, c.Z)(this, i), t.call(this);
                      }
                      return (
                        (0, s.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e,
                                t,
                                i = this,
                                n = this.data,
                                c = n.notifyShow,
                                s = n.currentIndex,
                                a = n.vipTypeEntityList,
                                l = n.giftRightsList,
                                r = n.gradeRightList,
                                o = n.showType,
                                h = n.currentTabIndex;
                              if (!a) return (0, v.tZ)(d.View, {});
                              var u =
                                (null === (e = a[s]) || void 0 === e
                                  ? void 0
                                  : e.thirdTypeVip) || {};
                              return (0, v.BX)(d.Block, {
                                children: [
                                  (0, v.BX)(d.View, {
                                    className: "header",
                                    children: [
                                      (0, v.BX)(d.View, {
                                        className: "tabs",
                                        children: [
                                          (0, v.BX)(d.View, {
                                            className: "tab ".concat(
                                              0 === h ? "selected" : ""
                                            ),
                                            id: "ACBN",
                                            onClick:
                                              this.handleChangeMemberTypeTab.bind(
                                                this,
                                                0
                                              ),
                                            children: [
                                              (0, v.tZ)(d.View, {
                                                className: "title",
                                                children: "抢票会员",
                                              }),
                                              (0, v.tZ)(d.View, {
                                                className: "sub-title",
                                                children: "抢票礼包",
                                              }),
                                            ],
                                          }),
                                          (0, v.BX)(d.View, {
                                            className: "tab ".concat(
                                              1 === h ? "selected" : ""
                                            ),
                                            id: "ACBO",
                                            onClick:
                                              this.handleChangeMemberTypeTab.bind(
                                                this,
                                                1
                                              ),
                                            children: [
                                              (0, v.tZ)(d.View, {
                                                className: "title",
                                                children: "购票会员",
                                              }),
                                              (0, v.tZ)(d.View, {
                                                className: "sub-title",
                                                children: "购票礼包",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, v.tZ)(d.View, {
                                        className: "arrow ".concat(
                                          1 === h ? "transform" : ""
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, v.BX)(d.View, {
                                    className: "wrap",
                                    children: [
                                      (0, v.BX)(d.View, {
                                        className: "main-box",
                                        children: [
                                          c &&
                                            (0, v.BX)(d.View, {
                                              className:
                                                "white-box notice-box color-red",
                                              children: [
                                                (0, v.tZ)(d.Text, {
                                                  className:
                                                    "ifont-notices iconfont",
                                                }),
                                                (0, v.tZ)(d.View, {
                                                  className: "cont",
                                                  children: c,
                                                }),
                                              ],
                                            }),
                                          (0, v.BX)(d.View, {
                                            className:
                                              "white-box select-member",
                                            children: [
                                              (0, v.tZ)(d.View, {
                                                className: "htit",
                                                children: "选择您需要的会员",
                                              }),
                                              (0, v.tZ)(d.View, {
                                                className: "select-info",
                                                id: "ACBP",
                                                onClick: this.showRule,
                                                children: "购买说明",
                                              }),
                                              a &&
                                                a.length > 0 &&
                                                (0, v.tZ)(d.View, {
                                                  className: "select-member-bd",
                                                  children: a.map(function (
                                                    e,
                                                    t
                                                  ) {
                                                    return (0, v.BX)(
                                                      d.View,
                                                      {
                                                        className:
                                                          "item " +
                                                          (s === t
                                                            ? "cur"
                                                            : ""),
                                                        id: "ACBQ",
                                                        onClick:
                                                          i.chooseVipEntity,
                                                        "data-index": t,
                                                        children: [
                                                          !!e.priceTag &&
                                                            (0, v.tZ)(d.View, {
                                                              className: "tag",
                                                              children:
                                                                e.priceTag,
                                                            }),
                                                          (0, v.tZ)(d.View, {
                                                            className: "tit",
                                                            children: e.title,
                                                          }),
                                                          (0, v.tZ)(d.View, {
                                                            className:
                                                              "price color-red",
                                                            children: e.price,
                                                          }),
                                                          (0, v.tZ)(d.View, {
                                                            className: "txt",
                                                            children: e.desc,
                                                          }),
                                                        ],
                                                      },
                                                      "index"
                                                    );
                                                  }),
                                                }),
                                            ],
                                          }),
                                          !Z.Z.isEmptyObject(u) &&
                                            (0, v.BX)(d.View, {
                                              className: "white-box hot-equity",
                                              children: [
                                                (0, v.BX)(d.View, {
                                                  className: "htit",
                                                  children: [
                                                    (0, v.tZ)(d.Text, {
                                                      children: u.title,
                                                    }),
                                                    !!u.subTitle &&
                                                      (0, v.tZ)(d.Text, {
                                                        className: "sub-txt",
                                                        children: u.subTitle,
                                                      }),
                                                  ],
                                                }),
                                                Z.Z.notEmptyArray(
                                                  u.thirdVipItems
                                                ) &&
                                                  (0, v.tZ)(d.View, {
                                                    className: "content-l",
                                                    children:
                                                      u.thirdVipItems.map(
                                                        function (e, t) {
                                                          return (0, v.BX)(
                                                            d.View,
                                                            {
                                                              className: "item",
                                                              children: [
                                                                (0, v.tZ)(
                                                                  d.Image,
                                                                  {
                                                                    className:
                                                                      "icon",
                                                                    src:
                                                                      null == e
                                                                        ? void 0
                                                                        : e.icon,
                                                                  }
                                                                ),
                                                                (0, v.tZ)(
                                                                  d.View,
                                                                  {
                                                                    className:
                                                                      "name",
                                                                    children:
                                                                      null == e
                                                                        ? void 0
                                                                        : e.title,
                                                                  }
                                                                ),
                                                                !(
                                                                  null == e ||
                                                                  !e.subTitle
                                                                ) &&
                                                                  (0, v.tZ)(
                                                                    d.View,
                                                                    {
                                                                      className:
                                                                        "desc",
                                                                      children:
                                                                        null ==
                                                                        e
                                                                          ? void 0
                                                                          : e.subTitle,
                                                                    }
                                                                  ),
                                                              ],
                                                            },
                                                            "thirdvip_".concat(
                                                              t
                                                            )
                                                          );
                                                        }
                                                      ),
                                                  }),
                                              ],
                                            }),
                                          l &&
                                            l.length > 0 &&
                                            (0, v.BX)(d.View, {
                                              className:
                                                "white-box gift-equity",
                                              children: [
                                                (0, v.tZ)(d.View, {
                                                  className: "htit",
                                                  children: "礼包权益",
                                                }),
                                                (0, v.tZ)(d.View, {
                                                  className: "gift-equity-bd",
                                                  children: l.map(function (
                                                    e,
                                                    t
                                                  ) {
                                                    return (0, v.BX)(
                                                      d.View,
                                                      {
                                                        className: "item",
                                                        children: [
                                                          (0, v.tZ)(d.Image, {
                                                            src: e.icon,
                                                            className: "img",
                                                          }),
                                                          (0, v.tZ)(d.View, {
                                                            className: "tit",
                                                            children: e.title,
                                                          }),
                                                          (0, v.tZ)(d.View, {
                                                            className: "txt",
                                                            children:
                                                              e.subTitle,
                                                          }),
                                                        ],
                                                      },
                                                      t
                                                    );
                                                  }),
                                                }),
                                              ],
                                            }),
                                          r &&
                                            r.length > 0 &&
                                            (0, v.BX)(d.View, {
                                              className:
                                                "white-box level-equity",
                                              children: [
                                                (0, v.tZ)(d.View, {
                                                  className: "htit",
                                                  children: "等级权益",
                                                }),
                                                (0, v.tZ)(d.View, {
                                                  className: "level-equity-bd",
                                                  children: r.map(function (
                                                    e,
                                                    t
                                                  ) {
                                                    return (0, v.BX)(
                                                      d.View,
                                                      {
                                                        className: "item",
                                                        children: [
                                                          (0, v.tZ)(d.Image, {
                                                            src: e.icon,
                                                            className: "img",
                                                          }),
                                                          (0, v.tZ)(d.View, {
                                                            className: "tit",
                                                            children: e.title,
                                                          }),
                                                        ],
                                                      },
                                                      t
                                                    );
                                                  }),
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      a[s] &&
                                        (0, v.tZ)(d.View, {
                                          className: "botm-fixed",
                                          children: (0, v.tZ)(d.Button, {
                                            className: "btn-submit btn-red",
                                            id: "ACBR",
                                            onClick: this.openVipCenterCard,
                                            children: a[s].buttonTitle,
                                          }),
                                        }),
                                    ],
                                  }),
                                  "showRule" === o &&
                                    (0, v.tZ)(P, {
                                      onClose: function () {
                                        i.closeRule();
                                      },
                                      title:
                                        null === (t = a[s]) || void 0 === t
                                          ? void 0
                                          : t.title,
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(o.default.Component))
                  ) || I)
              ) || I;
          Page(
            (0, n.createPageConfig)(
              X,
              "pages/usercenter/plsell/plsell",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "开通铂金会员",
                navigationBarBackgroundColor: "#553AA9",
                navigationBarTextStyle: "white",
                backgroundColorTop: "#553AA9",
                backgroundColorBottom: "#F5F5F5",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [59871, 3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(83392);
        }),
          e.O();
      },
    ]);
})();
