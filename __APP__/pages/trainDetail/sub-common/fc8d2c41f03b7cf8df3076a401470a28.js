!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [7934],
    {
      58789: function (n, o, t) {
        var e = t(298),
          c = t(92954),
          r = t.n(c),
          i = (t(52500), t(54415)),
          a = t(49120),
          s = t(17368),
          m = t(48813);
        o.Z = function (n) {
          var o = n.customizeStyle,
            t = void 0 === o ? {} : o;
          return (0, m.tZ)(s.Z, {
            mode: "img",
            iconUrl:
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_09/icon_12_describe.webp",
            content: "提示",
            onClickHandle: function () {
              (0, a.getCurrentPage)().showCommonDrawer({
                hideTitle: !0,
                hideClose: !0,
                content: function (n) {
                  var o = n.onClose;
                  return (0, m.tZ)(i.Z, { onClose: o });
                },
                className: "stride-train-drawer",
              });
            },
            customizeStyle: (0, e.Z)(
              {
                container: "margin-left:".concat(r().pxTransform(8)),
                icon: "width: "
                  .concat(r().pxTransform(20), ";height: ")
                  .concat(r().pxTransform(20), ";margin-left:")
                  .concat(r().pxTransform(4)),
                content: { color: "#ff5959" },
              },
              t
            ),
          });
        };
      },
    },
  ]);
})();
