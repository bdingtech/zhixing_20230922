!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [2632],
    {
      25297: function (e, n, t) {
        t.d(n, {
          ob: function () {
            return a;
          },
          vQ: function () {
            return c;
          },
        });
        var r = t(79792),
          i = t(17377),
          c =
            ((0, i.ZP)({
              serviceCode: "19833",
              channel: "",
              path: "getOrderListNew",
              bu: "ship",
            }),
            (0, i.ZP)({
              serviceCode: "23698",
              channel: "",
              path: "getOrderDetail",
              bu: "ship",
            }),
            (0, i.ZP)({
              serviceCode: "23698",
              channel: "",
              path: "getOrderQrCode",
              bu: "ship",
            })),
          a = (0, i.ZP)({
            serviceCode: "23698",
            channel: r.default.train_channel,
            path: "getShipInfo",
            bu: "ship",
          });
      },
    },
  ]);
})();
