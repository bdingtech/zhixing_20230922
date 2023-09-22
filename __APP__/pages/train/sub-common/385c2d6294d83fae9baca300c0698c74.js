!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [79204],
    {
      27463: function (n, e, u) {
        var r = u(52500),
          t = u(79910),
          c = function () {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
            return t._.isEqual(n, e);
          };
        e.Z = (function (n) {
          return function (e, u) {
            var t = (0, r.useRef)(),
              i = (0, r.useRef)(0);
            (void 0 !== u && c(u, t.current)) ||
              ((t.current = u), (i.current += 1)),
              n(e, [i.current]);
          };
        })(r.useEffect);
      },
    },
  ]);
})();
