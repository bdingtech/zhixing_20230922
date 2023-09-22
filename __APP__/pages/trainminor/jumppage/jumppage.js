!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [43775],
    {
      25562: function (n, o, t) {
        var e,
          a = t(32180),
          i = t(57042),
          r = t(24460),
          u = t(81876),
          c = t(21867),
          l = t(86066),
          p = t(45023),
          s = t(52500),
          d = t(71515),
          f = t(92954),
          k = t.n(f),
          C = t(79792),
          g = t(49120),
          m = t(81957),
          h = t(48813),
          v =
            (0, m.h)()(
              (e = (function (n) {
                (0, c.Z)(t, n);
                var o = (0, l.Z)(t);
                function t(n) {
                  var e;
                  return (
                    (0, i.Z)(this, t),
                    (e = o.call(this, n)),
                    (0, p.Z)((0, u.Z)(e), "pageId", "10650060611"),
                    (0, p.Z)((0, u.Z)(e), "handleClickJump", function () {
                      var n = (0, f.getCurrentInstance)().router.params,
                        o = n.appId,
                        t = void 0 === o ? "" : o,
                        e = n.path,
                        a = void 0 === e ? "" : e;
                      k().navigateToMiniProgram({
                        appId: t,
                        path: decodeURIComponent(a),
                        envVersion: "release",
                      });
                    }),
                    (0, p.Z)((0, u.Z)(e), "handleClickBack", function () {
                      return e.navigateBack();
                    }),
                    e
                  );
                }
                return (
                  (0, r.Z)(t, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        k().setNavigationBarTitle({ title: "页面跳转" }),
                          (0, g.setNavigationBarColor)({
                            frontColor: "#ffffff",
                            backgroundColor: C.default.isTieyou
                              ? "#3C4365"
                              : "#0066E6",
                          }),
                          (0, g.setBackgroundColor)({
                            backgroundColor: C.default.isTieyou
                              ? "#3C4365"
                              : "#0066E6",
                            backgroundColorTop: C.default.isTieyou
                              ? "#3C4365"
                              : "#0066E6",
                            backgroundColorBottom: "#EFEFEF",
                          });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        return (0, h.tZ)(d.Block, {
                          children: (0, h.BX)(d.View, {
                            className: "jumppage-container",
                            children: [
                              (0, h.tZ)(d.Button, {
                                className: "btn btn-jump",
                                id: "AGAK",
                                onClick: this.handleClickJump,
                              }),
                              (0, h.tZ)(d.Button, {
                                className: "btn btn-back",
                                id: "AGAL",
                                onClick: this.handleClickBack,
                              }),
                            ],
                          }),
                        });
                      },
                    },
                  ]),
                  t
                );
              })(s.default.Component))
            ) || e;
        Page(
          (0, a.createPageConfig)(
            v,
            "pages/trainminor/jumppage/jumppage",
            { root: { cn: [] } },
            {} || {}
          )
        );
      },
    },
    function (n) {
      n.O(0, [19559, 11216, 68592], function () {
        return (function (o) {
          return n((n.s = o));
        })(25562);
      }),
        n.O();
    },
  ]);
})();
