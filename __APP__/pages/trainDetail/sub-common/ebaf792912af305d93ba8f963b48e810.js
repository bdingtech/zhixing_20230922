!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [3429],
    {
      80254: function (n, c, t) {
        t.d(c, {
          Z: function () {
            return e;
          },
        });
        var u = t(52500);
        function e(n, c) {
          var t = (0, u.useRef)({ callback: n }).current;
          (0, u.useEffect)(function () {
            t.callback = n;
          }),
            (0, u.useEffect)(
              function () {
                if (null !== c) {
                  var n = setInterval(function () {
                    t.callback();
                  }, c);
                  return function () {
                    return clearInterval(n);
                  };
                }
              },
              [c]
            );
        }
      },
    },
  ]);
})();
