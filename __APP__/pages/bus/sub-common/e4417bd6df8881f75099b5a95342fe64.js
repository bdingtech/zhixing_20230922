!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [36941],
    {
      4601: function (e, i, n) {
        n.d(i, {
          Z: function () {
            return u;
          },
          h: function () {
            return m;
          },
        });
        var o = n(57042),
          c = n(24460),
          a = n(21867),
          t = n(86066),
          s = n(71515),
          d = n(52500),
          l = (n(92954), n(48813)),
          r = function () {},
          u = (function (e) {
            (0, a.Z)(n, e);
            var i = (0, t.Z)(n);
            function n(e) {
              return (0, o.Z)(this, n), i.call(this, e);
            }
            return (
              (0, c.Z)(n, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      i = e.children,
                      n = e.showGuide,
                      o = e.rootContentClassName,
                      c = void 0 === o ? "" : o,
                      a = e.rootClassName,
                      t = void 0 === a ? "" : a,
                      d = e.TipComp,
                      u = void 0 === d ? (0, l.tZ)(s.Block, {}) : d,
                      m = e.noMask,
                      k = void 0 !== m && m,
                      h = e.onMaskClick,
                      p = void 0 === h ? function () {} : h,
                      v = e.onRead,
                      w = void 0 === v ? function () {} : v,
                      C = e.doReadOnTriggerChildrenAction,
                      f = void 0 === C || C,
                      N = e.doReadOnMaskClick,
                      Z = void 0 === N || N,
                      V = e.useCache;
                    return void 0 !== V && V
                      ? (0, l.BX)(s.View, {
                          className: n ? "guide-component ".concat(t) : "",
                          children: [
                            !k &&
                              n &&
                              (0, l.tZ)(s.View, {
                                className: "mask",
                                id: "AABB",
                                onClick: Z
                                  ? function () {
                                      w(), p();
                                    }
                                  : p,
                                catchMove: !0,
                              }),
                            (0, l.BX)(s.View, {
                              className: n ? "guide-root" : "",
                              id: "AABC",
                              onClick: f && n ? w : r,
                              children: [
                                n &&
                                  (0, l.tZ)(s.View, {
                                    className: "root-display-box ".concat(c),
                                  }),
                                i,
                              ],
                            }),
                            n &&
                              (0, l.tZ)(s.View, {
                                className: "guide-tip",
                                children: u,
                              }),
                          ],
                        })
                      : n
                      ? (0, l.BX)(s.View, {
                          className: "guide-component ".concat(t),
                          children: [
                            !k &&
                              (0, l.tZ)(s.View, {
                                className: "mask",
                                id: "AABD",
                                onClick: Z
                                  ? function () {
                                      w(), p();
                                    }
                                  : p,
                                catchMove: !0,
                              }),
                            (0, l.BX)(s.View, {
                              className: "guide-root",
                              id: "AABE",
                              onClick: f ? w : r,
                              children: [
                                (0, l.tZ)(s.View, {
                                  className: "root-display-box ".concat(c),
                                }),
                                i,
                              ],
                            }),
                            (0, l.tZ)(s.View, {
                              className: "guide-tip",
                              children: u,
                            }),
                          ],
                        })
                      : i;
                  },
                },
              ]),
              n
            );
          })(d.default.PureComponent),
          m = function (e) {
            var i = e.className,
              n = e.zIndex,
              o = e.onMaskClick,
              c = void 0 === o ? function () {} : o;
            return (0, l.tZ)(s.View, {
              className: "guide-component guide-component-outside-mask ".concat(
                i
              ),
              id: "AABF",
              onClick: c,
              style: { zIndex: n },
              children: (0, l.tZ)(s.View, { className: "mask", catchMove: !0 }),
            });
          };
      },
    },
  ]);
})();
