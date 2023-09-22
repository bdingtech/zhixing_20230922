"use strict";
"use strict";
var e = require("../../../api/api.js");
module.exports = {
  init: function (a) {
    a.setData({
      timer: 0,
      interval: 5e3,
      agreeDeal: !1,
      appName: "",
      appid: "",
      jumpurl: "",
      isSameAppid: !1,
    }),
      (a.cancel = function () {
        a.setData({ showPhone: !1, isCanvas: !1 });
      }),
      (a.inputPhoneNumber = function (e) {
        a.setData({ phoneNumber: e.detail.value }), clearInterval(a.data.timer);
      }),
      (a.confirm = function () {
        var o = a,
          t = {};
        this.data.agreeDeal || !o.data.protocolName
          ? ((t.winningtime = o.data._winningtime),
            "" != o.data.phoneNumber
              ? ((t.phoneNumber = o.data.phoneNumber),
                console.log(t),
                clearInterval(o.data.timer),
                e.httpRequest({
                  url: e.getRequestUrl("exchange", "welfare"),
                  data: t,
                  method: "POST",
                  success: function (e) {
                    console.log("exchange", e);
                    var a = e.msg || "兑换失败";
                    e && "0" == e.r
                      ? (o.setData({
                          showPhone: !1,
                          isPhoneNum: !1,
                          isCanvas: !0,
                          showPrize: !0,
                        }),
                        o.getGoodDetail(o.data._winningtime),
                        o.monitorGoodStatus())
                      : wx.showToast({ title: a, icon: "none" });
                  },
                }))
              : wx.showToast({
                  title: "手机号码不能为空",
                  icon: "none",
                  duration: 2e3,
                }))
          : wx.showToast({ title: "请勾选协议再进入下一步", icon: "none" });
      }),
      (a.agreeDealbox = function () {
        var e = this.data.agreeDeal;
        (e = !e), this.setData({ agreeDeal: e }), console.log(e);
      }),
      (a.getGoodDetail = function (o) {
        var t = a;
        e.httpRequest(
          {
            url: e.getRequestUrl("getGoodDetail", "welfare"),
            data: { winningtime: o },
            success: function (e) {
              if ((console.log(e), e && "0" == e.r)) {
                var a = {};
                (a.goodDetail = e.water),
                  (a.type = e.water.goodscfg.displaytype),
                  e.water.cdkey &&
                    t.setData({
                      isCanvas: !0,
                      isPhoneNum: !1,
                      cdkey: e.water.cdkey,
                    }),
                  e.water.goodscfg.extra &&
                    e.water.goodscfg.extra.goods_brand_info &&
                    ((a.brandName =
                      e.water.goodscfg.extra.goods_brand_info.brand_name),
                    (a.brandId =
                      e.water.goodscfg.extra.goods_brand_info.brand_id),
                    (a.brandLogo =
                      e.water.goodscfg.extra.goods_brand_info.brand_logo)),
                  e.water.goodscfg.extra &&
                    e.water.goodscfg.extra.mproc_jmp_cfg &&
                    ((a.appid =
                      e.water.goodscfg.extra.mproc_jmp_cfg.mproc_appid),
                    (a.mpjumpurl =
                      e.water.goodscfg.extra.mproc_jmp_cfg.mproc_jumpurl),
                    (a.appName =
                      e.water.goodscfg.extra.mproc_jmp_cfg.mproc_name),
                    console.log(
                      "当前的appid信息为",
                      wx.getAccountInfoSync().miniProgram.appId
                    ),
                    a.appid == wx.getAccountInfoSync().miniProgram.appId
                      ? (a.isSameAppid = !0)
                      : (a.isSameAppid = !1)),
                  e.water &&
                    e.water.useraddr &&
                    e.water.useraddr.mobile &&
                    (a.phoneNumber = e.water.useraddr.mobile),
                  e.water.goodscfg.extra.cbcoupon_cfg &&
                    e.water.goodscfg.extra.cbcoupon_cfg.show_qr_code &&
                    (a.isCode = !0),
                  e.water.goodscfg.extra &&
                    e.water.goodscfg.extra.protocol_name &&
                    (a.protocolName =
                      e.water.goodscfg.extra &&
                      e.water.goodscfg.extra.protocol_name),
                  e.water.goodscfg.extra &&
                    e.water.goodscfg.extra.protocol_content &&
                    (a.protocolCont = encodeURIComponent(
                      e.water.goodscfg.extra &&
                        e.water.goodscfg.extra.protocol_content
                    )),
                  t.goodtype(a.type, e.water, t),
                  t.setData(a);
              }
            },
          },
          !1
        );
      }),
      (a.goodtype = function (e, a, o) {
        (28 != e && 30 != e && 26 != e) ||
          (a.cdkey && o.setData({ isPhoneNum: !1, isCanvas: !0 })),
          (28 != e && 30 != e && 21 != e && 26 != e && 25 != e) ||
            (4 == a.status
              ? 0 == o.data.timer && o.monitorGoodStatus()
              : o.data.timer > 0 && clearInterval(o.data.timer));
      }),
      (a.monitorGoodStatus = function () {
        var e = a;
        e.data.timer = setInterval(function () {
          e.getGoodDetail(e.data._winningtime);
        }, e.data.interval);
      });
  },
};
