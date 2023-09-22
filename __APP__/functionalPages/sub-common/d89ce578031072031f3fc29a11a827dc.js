!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [95854],
    {
      3197: function (e, n, t) {
        t.d(n, {
          MY: function () {
            return i;
          },
          Qu: function () {
            return d;
          },
          Qy: function () {
            return p;
          },
          b4: function () {
            return f;
          },
          c5: function () {
            return l;
          },
          jh: function () {
            return o;
          },
          qU: function () {
            return h;
          },
        });
        var a = t(79792),
          r = t(17377),
          c = "16992",
          u = "17302",
          h = (0, r.ZP)({
            serviceCode: c,
            channel: a.default.partner,
            path: "getChannelPaymentType",
          }),
          l = (0, r.ZP)({
            serviceCode: c,
            channel: a.default.flight_channel,
            path: "getPayInfo",
          }),
          f = (0, r.ZP)({
            serviceCode: c,
            channel: a.default.partner,
            path: "getPaymentResult",
          }),
          o = (0, r.ZP)({
            serviceCode: "22538",
            channel: a.default.flight_channel,
            path: "getPrePayToken",
            bu: "bus",
          }),
          i = (0, r.ZP)({
            serviceCode: u,
            channel: a.default.partner,
            path: "GetChannelPaymentType",
          }),
          p = (0, r.ZP)({
            serviceCode: u,
            channel: a.default.flight_channel,
            path: "GetPayInfo",
          }),
          d = (0, r.ZP)({
            serviceCode: c,
            channel: a.default.partner,
            path: "GetPaymentRes",
          });
      },
    },
  ]);
})();
