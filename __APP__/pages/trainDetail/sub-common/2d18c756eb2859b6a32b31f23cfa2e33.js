!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [22703],
    {
      93917: function (e, o, r) {
        var t = r(90129),
          a = r(52500),
          n = r(8271),
          u = r.n(n),
          s = function (e, o) {
            var r = u()(e).valueOf() - u()().valueOf();
            if ("dhm" === o) {
              var t = Math.floor(r / 864e5),
                a = Math.floor((r % 864e5) / 36e5);
              return {
                value: r,
                minutes: Math.floor((r % 36e5) / 6e4),
                hours: a,
                days: t,
              };
            }
            if ("dhms" === o) {
              var n = Math.floor(r / 864e5),
                s = Math.floor((r % 864e5) / 36e5),
                l = Math.floor((r % 36e5) / 6e4);
              return {
                value: r,
                seconds: Math.floor((r % 6e4) / 1e3),
                minutes: l,
                hours: s,
                days: n,
              };
            }
            return "ms" === o
              ? {
                  value: r,
                  minutes: Math.floor(r / 6e4),
                  seconds: Math.floor((r % 6e4) / 1e3),
                }
              : {
                  value: r,
                  hours: Math.floor(r / 36e5),
                  minutes: Math.floor((r % 36e5) / 6e4),
                  seconds: Math.floor((r % 6e4) / 1e3),
                };
          };
        o.Z = function (e) {
          var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "hms",
            r = (0, a.useState)(function () {
              return e ? s(e, o) : void 0;
            }),
            n = (0, t.Z)(r, 2),
            u = n[0],
            l = n[1];
          return (
            (0, a.useEffect)(
              function () {
                var r = 1e3;
                "dhm" === o && (r = 6e4);
                var t = setInterval(function () {
                  var r = s(e, o);
                  r.value < 0
                    ? (t && clearInterval(t),
                      l({ value: r.value, hours: 0, minutes: 0, seconds: 0 }))
                    : l(r);
                }, r);
                return function () {
                  t && clearInterval(t);
                };
              },
              [e]
            ),
            u
          );
        };
      },
    },
  ]);
})();
