!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [56562],
    {
      11354: function (t, n, e) {
        e.d(n, {
          Z: function () {
            return c;
          },
        });
        var u = e(90129),
          i = e(52500);
        function c(t) {
          var n = (0, i.useState)(t),
            e = (0, u.Z)(n, 2),
            c = e[0],
            s = e[1],
            r = (0, i.useState)(!1),
            o = (0, u.Z)(r, 2),
            f = o[0],
            a = o[1],
            p = (0, i.useState)(!1),
            v = (0, u.Z)(p, 2),
            w = v[0],
            Z = v[1];
          return (
            (0, i.useEffect)(
              function () {
                var t;
                return (
                  f && c > 0
                    ? (t = setTimeout(function () {
                        s(c - 1);
                      }, 1e3))
                    : 0 === c && (a(!1), Z(!0)),
                  function () {
                    return clearTimeout(t);
                  }
                );
              },
              [f, c]
            ),
            {
              time: c,
              isActive: f,
              isFinished: w,
              start: function () {
                a(!0);
              },
              pause: function () {
                a(!1);
              },
              reset: function () {
                a(!1), Z(!1), s(t);
              },
            }
          );
        }
      },
    },
  ]);
})();
