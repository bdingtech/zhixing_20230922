!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [36332],
    {
      838: function (e, n, t) {
        t.d(n, {
          Kz: function () {
            return i;
          },
          U7: function () {
            return l;
          },
          cA: function () {
            return h;
          },
          dz: function () {
            return o;
          },
          kR: function () {
            return u;
          },
          ti: function () {
            return r;
          },
        });
        var a = t(17377),
          c = t(79792),
          r =
            ((0, a.ZP)({
              serviceCode: "17476",
              channel: c.default.train_channel,
              path: "getOrderList",
            }),
            (0, a.ZP)({
              serviceCode: "17476",
              channel: c.default.train_channel,
              path: "getPaymentInfo",
            })),
          i = (0, a.ZP)({
            serviceCode: "17679",
            channel: c.default.train_channel,
            path: "sighUpHotelLotteryActivityForTicket",
          }),
          o = (0, a.ZP)({
            serviceCode: "17476",
            channel: c.default.train_channel,
            path: "getOrderDetail",
          }),
          h = (0, a.ZP)({
            serviceCode: "16586",
            channel: c.default.train_channel,
            path: "SaveCommonPassengerV2",
          }),
          l =
            ((0, a.ZP)({
              serviceCode: "17477",
              channel: c.default.train_channel,
              path: "checkResourceCanSale",
            }),
            (0, a.ZP)({
              serviceCode: "17477",
              channel: c.default.train_channel,
              path: "getSpProductSaleProperty",
            })),
          u = (0, a.ZP)({
            serviceCode: "17679",
            path: "getTicketIndexBannerInfo",
          });
      },
    },
  ]);
})();
