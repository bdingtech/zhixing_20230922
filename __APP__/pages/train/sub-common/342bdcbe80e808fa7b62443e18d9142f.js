!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [1709],
    {
      79204: function (e, n, t) {
        var c = t(298),
          o = t(90129),
          a = t(74921),
          i = t(71515),
          s = t(92954),
          u = t.n(s),
          l = t(52500),
          f = t(48813),
          r = ["className", "onChange", "value"],
          d = {
            86: "中国(+86)",
            852: "中国香港(+852)",
            853: "中国澳门(+853)",
            886: "中国台湾(+886)",
          },
          p = (0, l.forwardRef)(function (e, n) {
            var t = e.className,
              s = void 0 === t ? "" : t,
              p = e.onChange,
              m = e.value,
              v = void 0 === m ? "86" : m,
              x = (0, a.Z)(e, r),
              h = (0, l.useState)(v),
              w = (0, o.Z)(h, 2),
              Z = w[0],
              b = w[1],
              k = (0, l.useState)(!1),
              g = (0, o.Z)(k, 2),
              C = g[0],
              N = g[1];
            return (
              (0, l.useEffect)(
                function () {
                  null == p || p(Z);
                },
                [Z]
              ),
              (0, l.useEffect)(
                function () {
                  v !== Z && b(v);
                },
                [v]
              ),
              (0, l.useImperativeHandle)(n, function () {
                return {
                  getValue: function () {
                    return Z;
                  },
                  setValue: b,
                  setEnableSelect: N,
                  init: function () {
                    console.log("set value"), b("86");
                  },
                };
              }),
              (0, f.BX)(
                i.View,
                (0, c.Z)(
                  (0, c.Z)(
                    {
                      className: "moblieCode-seletor flex flex-center ".concat(
                        s
                      ),
                      id: "AADm",
                      onClick: function () {
                        if (C) {
                          var e = Object.keys(d).map(function (e) {
                            return d[e];
                          });
                          u().showActionSheet({
                            itemList: e,
                            success: function (e) {
                              b(Object.keys(d)[e.tapIndex]);
                            },
                          });
                        }
                      },
                    },
                    x
                  ),
                  {},
                  {
                    children: [
                      (0, f.BX)(i.Text, { children: [" (+", Z, ")"] }),
                      C &&
                        (0, f.tZ)(i.Text, {
                          className: "iconfont2 ifont2-expand expand-icon",
                        }),
                    ],
                  }
                )
              )
            );
          });
        n.Z = p;
      },
    },
  ]);
})();
