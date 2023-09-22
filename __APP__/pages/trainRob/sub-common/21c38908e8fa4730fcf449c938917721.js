!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [20858],
    {
      99278: function (e, t, n) {
        var i = n(90129),
          o = n(52500),
          r = n(92954),
          a = n.n(r),
          l = n(71515),
          d = n(85727),
          c = n(77177),
          s = n(48813),
          u = "#FFFFFF",
          f = "#333333",
          v = "#198CFF";
        t.Z = function (e) {
          var t = e.page,
            n = e.pop,
            r =
              void 0 === n
                ? function (e) {
                    var t;
                    return null === (t = e.pop) || void 0 === t
                      ? void 0
                      : t.call(e);
                  }
                : n,
            h = e.showProps,
            w = void 0 === h ? function () {} : h,
            p = e.title,
            g = void 0 === p ? "" : p,
            V = e.colors,
            Z = void 0 === V ? [] : V,
            x = e.titleColor,
            F = void 0 === x ? u : x,
            C = e.titleFontSize,
            m = e.backgroundColor,
            z = void 0 === m ? v : m,
            k = e.defaultBackButtonColor,
            y = void 0 === k ? u : k,
            B = e.zIndex,
            N = void 0 === B ? 99 : B,
            P = e.leftViewWidth,
            b = void 0 === P ? 44 : P,
            L = e.rightViewWidth,
            M = void 0 === L ? 18 : L,
            S = e.renderHeaderView,
            H = e.renderContentView,
            T = e.renderLeftView,
            W = e.renderCenterView,
            A = e.onPressHeaderView,
            I = (0, o.useState)(1),
            J = (0, i.Z)(I, 2),
            E = J[0],
            X = J[1];
          (0, o.useLayoutEffect)(function () {
            var e = a().getCurrentPages();
            X(e ? e.length : 1);
          }, []);
          var j;
          j = (null == Z ? void 0 : Z.length) > 0 ? Z : z ? [z, z] : [v, v];
          var q = function () {
            if (T) return T();
            var e = y || f;
            return (0, s.tZ)(l.View, {
              id: "AMBL",
              onClick: function () {
                r(t);
              },
              className: "zt-header-view-left-default",
              children: (0, s.tZ)(l.Text, {
                className: "".concat(
                  E > 1 ? "ifont-back" : "ifont-home",
                  " iconfont"
                ),
                style: { color: e },
              }),
            });
          };
          return S
            ? S()
            : (0, s.tZ)(c.Z, {
                end: { x: 1, y: 0 },
                start: { x: 0, y: 0 },
                locations: [0, 1],
                style: {
                  paddingTop: "".concat(d.ZP.statusBarHeight, "px"),
                  zIndex: N,
                },
                colors: j,
                className: "zt-header-view",
                children: H
                  ? H()
                  : (0, s.BX)(l.View, {
                      className: "zt-header-view-content",
                      children: [
                        (0, s.tZ)(l.View, {
                          className: "zt-header-view-left",
                          style: { width: Math.max(M, b) },
                          children: q(),
                        }),
                        (0, s.tZ)(l.View, {
                          id: "AMBM",
                          onClick: function () {
                            return null == A ? void 0 : A();
                          },
                          onLongPress: function () {
                            return w();
                          },
                          children: (0, s.tZ)(l.View, {
                            children: W
                              ? W()
                              : g
                              ? (0, s.tZ)(l.Text, {
                                  style: {
                                    alignSelf: "center",
                                    fontWeight: "700",
                                    color: F,
                                    fontSize: C,
                                  },
                                  children: g,
                                })
                              : (0, s.tZ)(o.default.Fragment, {}),
                          }),
                        }),
                      ],
                    }),
              });
        };
      },
    },
  ]);
})();
