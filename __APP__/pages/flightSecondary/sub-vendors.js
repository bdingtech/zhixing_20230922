!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [21969],
    {
      29386: function (n, e, t) {
        t.d(e, {
          A: function () {
            return i;
          },
          C: function () {
            return h;
          },
        });
        var c = t(17377),
          a = t(79792),
          i = (0, c.ZP)({
            serviceCode: "15987",
            channel: a.default.flight_channel,
            path: "HazyDestinationSearch",
          }),
          h = (0, c.ZP)({
            serviceCode: "17421",
            channel: a.default.flight_channel,
            path: "intlSendInvoice",
          });
      },
    },
  ]);
})();
