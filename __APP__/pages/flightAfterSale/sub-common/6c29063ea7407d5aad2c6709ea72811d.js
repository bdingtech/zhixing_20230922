!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [22175],
    {
      12525: function (n, e, t) {
        var c = t(90129),
          i = t(52500),
          a = (t(92954), t(71515)),
          o = t(48813),
          u = (0, i.forwardRef)(function (n, e) {
            var t = n.tabList,
              u = n.onChange,
              r = n.className,
              f = void 0 === r ? "" : r,
              s = n.id,
              d = void 0 === s ? "" : s,
              l = (0, i.useState)(0),
              m = (0, c.Z)(l, 2),
              p = m[0],
              w = m[1];
            return (
              (0, i.useImperativeHandle)(e, function () {
                return {
                  setCurIndex: function (n) {
                    w(n);
                  },
                };
              }),
              (0, o.tZ)(a.View, {
                className: "zt-tab flex ".concat(f),
                id: d,
                children: t.map(function (n, e) {
                  return (0, o.tZ)(
                    a.View,
                    {
                      className: "zt-tab-item flex-center flex-1 ".concat(
                        e == p ? "cur" : ""
                      ),
                      id: "AADR",
                      onClick: function () {
                        return (function (n) {
                          n != p && (w(n), u(n));
                        })(e);
                      },
                      children: "function" == typeof n ? n() : n,
                    },
                    e
                  );
                }),
              })
            );
          });
        e.Z = i.default.memo(u);
      },
    },
  ]);
})();
