!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [35203],
    {
      17368: function (n, o, i) {
        i(52500);
        var c = i(71515),
          t = i(79910),
          e = i(48813);
        o.Z = function (n) {
          var o = n.mode,
            i = void 0 === o ? "font" : o,
            s = n.content,
            a = void 0 === s ? "" : s,
            l = n.jumpUrl,
            m = void 0 === l ? "" : l,
            r = n.iconUrl,
            u = void 0 === r ? "" : r,
            d = n.customizeStyle,
            f = void 0 === d ? {} : d,
            p = n.onClickHandle,
            v = void 0 === p ? function () {} : p;
          return (0, e.BX)(c.View, {
            className: "common-tips-icon flex-center",
            id: "AAAx",
            onClick: function (n) {
              n.stopPropagation(),
                (function (n) {
                  m ? t.Z.commonNavigator(m) : null == v || v(n);
                })(n);
            },
            style: f.container,
            children: [
              a &&
                (0, e.tZ)(c.View, {
                  className: "common-tips-icon-content",
                  style: f.content,
                  children: a,
                }),
              "font" === i &&
                (0, e.tZ)(c.View, {
                  className: "ifont2-zhushi_linea_12 iconfont2",
                  style: f.icon,
                }),
              "img" === i &&
                (0, e.tZ)(c.Image, {
                  className: "c-icon",
                  style: f.icon,
                  src: u,
                }),
            ],
          });
        };
      },
    },
  ]);
})();
