!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [55996],
    {
      89241: function (a, n, e) {
        e(52500);
        var c = e(71515),
          i = e(48813);
        n.Z = function () {
          return (0, i.BX)(c.View, {
            className: "mdpage-loading",
            children: [
              (0, i.tZ)(c.View, { className: "text", children: "请耐心等待" }),
              (0, i.tZ)(c.View, {
                className: "loading-bar",
                children: (0, i.tZ)(c.Icon, {
                  className: "icon-loading animate6",
                }),
              }),
            ],
          });
        };
      },
    },
  ]);
})();
