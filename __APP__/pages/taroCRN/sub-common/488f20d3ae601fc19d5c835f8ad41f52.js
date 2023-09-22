!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [43278],
    {
      82408: function (n, e, o) {
        o.d(e, {
          $: function () {
            return d;
          },
        });
        var r = o(298),
          t = o(90129),
          i = o(52500),
          a = o(34229),
          u = o(15718),
          c = o(48813),
          d = function (n, e) {
            var o = n.isShowIphoneXAdapter,
              d = void 0 === o || o,
              s = n.iphoneXFooterColor,
              f = void 0 === s ? "#FFFFFF" : s,
              l = n.enableTapBackground,
              p = void 0 === l || l,
              w = n.onCancel,
              h = void 0 === w ? function () {} : w,
              v = n.innerContainerStyle,
              F = n.children,
              Z = (0, i.useState)(!1),
              k = (0, t.Z)(Z, 2),
              C = k[0],
              b = k[1];
            (0, i.useEffect)(function () {
              b(!0);
            }, []),
              (0, i.useImperativeHandle)(
                e,
                function () {
                  return { hideAnim: m };
                },
                []
              );
            var m = function (n) {
              b(!1),
                setTimeout(function () {
                  null == n || n();
                }, 200);
            };
            return (0, c.BX)(
              a.ZtDrawer,
              (0, r.Z)(
                (0, r.Z)(
                  {
                    isDefineHead: !0,
                    className: "taro-crn-drawer",
                    onWrapClose: function () {
                      p && m(h);
                    },
                    show: C,
                    drawerStyle: (0, r.Z)((0, r.Z)({}, { zIndex: 1e3 }), v),
                  },
                  n
                ),
                {},
                { children: [F, !!d && (0, c.tZ)(u.k, { backgroundColor: f })] }
              )
            );
          };
      },
    },
  ]);
})();
