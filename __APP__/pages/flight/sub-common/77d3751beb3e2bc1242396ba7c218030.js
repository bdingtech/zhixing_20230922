!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [72032],
    {
      4845: function (n, i, o) {
        o(52500);
        var t = o(71515),
          c = o(21828),
          e = o(48813);
        i.Z = function (n) {
          var i = n.className,
            o = void 0 === i ? "" : i,
            a = n.onConfirm,
            s = void 0 === a ? function () {} : a,
            d = n.buttonText,
            u = void 0 === d ? "我知道了" : d,
            l = n.disabled,
            f = void 0 !== l && l;
          return (0, e.tZ)(c.Z, {
            className: o,
            children: (0, e.tZ)(t.Button, {
              className: "fixed-botm-btn flex-1 ".concat(f ? "disabled" : ""),
              id: "AACx",
              onClick: function () {
                !f && s();
              },
              children: u,
            }),
          });
        };
      },
    },
  ]);
})();
