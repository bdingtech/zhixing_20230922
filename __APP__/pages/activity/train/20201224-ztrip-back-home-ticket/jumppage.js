!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [47817],
      {
        53947: function (n, e, o) {
          var t,
            a = o(32180),
            r = o(57042),
            i = o(24460),
            u = o(81876),
            c = o(21867),
            l = o(86066),
            s = o(45023),
            p = o(52500),
            d = o(71515),
            f = o(92954),
            C = o.n(f),
            g = o(79792),
            k = o(49120),
            m = o(81957),
            v = o(48813),
            h =
              (0, m.h)()(
                (t = (function (n) {
                  (0, c.Z)(o, n);
                  var e = (0, l.Z)(o);
                  function o(n) {
                    var t;
                    return (
                      (0, r.Z)(this, o),
                      (t = e.call(this, n)),
                      (0, s.Z)((0, u.Z)(t), "pageId", "10650089486"),
                      (0, s.Z)((0, u.Z)(t), "handleClickJump", function () {
                        var n = (0, f.getCurrentInstance)().router.params,
                          e = n.appId,
                          o = void 0 === e ? "" : e,
                          t = n.path,
                          a = void 0 === t ? "" : t;
                        C().navigateToMiniProgram({
                          appId: o,
                          path: decodeURIComponent(a),
                          envVersion: "release",
                        });
                      }),
                      t
                    );
                  }
                  return (
                    (0, i.Z)(o, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          C().setNavigationBarTitle({ title: "页面跳转" }),
                            (0, k.setNavigationBarColor)({
                              frontColor: "#ffffff",
                              backgroundColor: g.default.isTieyou
                                ? "#3C4365"
                                : "#0066E6",
                            }),
                            (0, k.setBackgroundColor)({
                              backgroundColor: g.default.isTieyou
                                ? "#3C4365"
                                : "#0066E6",
                              backgroundColorTop: g.default.isTieyou
                                ? "#3C4365"
                                : "#0066E6",
                              backgroundColorBottom: "#EFEFEF",
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, v.tZ)(d.Block, {
                            children: (0, v.tZ)(d.View, {
                              className: "jumppage-container",
                              children: (0, v.tZ)(d.Button, {
                                className: "btn btn-jump",
                                id: "AeCO",
                                onClick: this.handleClickJump,
                              }),
                            }),
                          });
                        },
                      },
                    ]),
                    o
                  );
                })(p.default.Component))
              ) || t;
          Page(
            (0, a.createPageConfig)(
              h,
              "pages/activity/train/20201224-ztrip-back-home-ticket/jumppage",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (n) {
        n.O(0, [19559, 11216, 68592], function () {
          return (function (e) {
            return n((n.s = e));
          })(53947);
        }),
          n.O();
      },
    ]);
})();
