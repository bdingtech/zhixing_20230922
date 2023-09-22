!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [81604],
    {
      75492: function (e, n, t) {
        var r = t(52500);
        t(92954);
        var u = {
          useDebounce: function (e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              u = (0, r.useRef)({ fn: e, timer: null }),
              c = u.current;
            return (
              (0, r.useEffect)(
                function () {
                  c.fn = e;
                },
                [e]
              ),
              (0, r.useCallback)(function () {
                for (
                  var e = this, t = arguments.length, r = new Array(t), u = 0;
                  u < t;
                  u++
                )
                  r[u] = arguments[u];
                c.timer && clearTimeout(c.timer),
                  (c.timer = setTimeout(function () {
                    var n;
                    (n = c.fn).call.apply(n, [e].concat(r));
                  }, n));
              }, t)
            );
          },
          useThrottle: function (e, n) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              u = (0, r.useRef)({ fn: e, timer: null }),
              c = u.current;
            return (
              (0, r.useEffect)(
                function () {
                  c.fn = e;
                },
                [e]
              ),
              (0, r.useCallback)(function () {
                if (!c.timer) {
                  var e;
                  c.timer = setTimeout(function () {
                    delete c.timer;
                  }, n);
                  for (
                    var t = arguments.length, r = new Array(t), u = 0;
                    u < t;
                    u++
                  )
                    r[u] = arguments[u];
                  (e = c.fn).call.apply(e, [this].concat(r));
                }
              }, t)
            );
          },
        };
        n.Z = u;
      },
    },
  ]);
})();
