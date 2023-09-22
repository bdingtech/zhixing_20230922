!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [85786],
    {
      15278: function (n, u, o) {
        o.d(u, {
          c: function () {
            return i;
          },
        });
        var e = o(52500),
          i = function (n) {
            var u = (0, e.useRef)(null);
            return {
              modalRef: u,
              modalClose: function () {
                var o;
                "function" ==
                typeof (null === (o = u.current) || void 0 === o
                  ? void 0
                  : o.hideAnim)
                  ? u.current.hideAnim(function () {
                      null == n || n();
                    })
                  : null == n || n();
              },
            };
          };
      },
    },
  ]);
})();
