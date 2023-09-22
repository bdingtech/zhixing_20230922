!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/3cd35e0ae0d34a9b944389e4550448dd.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [31424],
      {
        19991: function (e, t, n) {
          var i,
            c = n(32180),
            a = n(57042),
            r = n(24460),
            s = n(21867),
            o = n(86066),
            u = n(81957),
            _ = n(96158),
            d = n(22672),
            l = n(71515),
            h = n(92954),
            m = n.n(h),
            f = n(52500),
            p = n(48813),
            g = function (e) {
              var t = e.buttonName,
                n = e.onConfirm,
                i = void 0 === n ? function () {} : n;
              return (0, p.BX)(l.View, {
                className: " _er _Vb _Oa _Lz _i _k _l",
                children: [
                  (0, p.tZ)(l.Image, {
                    mode: "widthFix",
                    className: " _Ug _Lm _h _Mz _Nz",
                    src: "https://images3.c-ctrip.com/ztrip/train_xie/2021-10/WeChat/icon_ticket.png",
                  }),
                  (0, p.BX)(l.View, {
                    className: " _i _Ga _l",
                    children: [
                      (0, p.tZ)(l.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/zh@3x.png",
                        className: " _cc _bc",
                      }),
                      (0, p.tZ)(l.View, {
                        className: " _Ee _sb _Nc",
                        children: "学生资质核验",
                      }),
                    ],
                  }),
                  (0, p.tZ)(l.View, {
                    className: " _lf _Gc _gh _w _Oa _i _Ga _n _l",
                    id: "AMEH",
                    onClick: function () {
                      i();
                    },
                    children: (0, p.tZ)(l.Text, {
                      className: " _qb _Wc",
                      children: t || "点击继续",
                    }),
                  }),
                ],
              });
            },
            Z =
              (0, u.h)(!1, { usePageWrapper: !0 })(
                (i = (function (e) {
                  (0, s.Z)(n, e);
                  var t = (0, o.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, a.Z)(this, n),
                      ((i = t.call(this, e)).state = { oid: "" }),
                      i
                    );
                  }
                  return (
                    (0, r.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = m().getCurrentInstance().router.params.oid;
                          this.setState({ oid: e }), this.checkAction();
                        },
                      },
                      {
                        key: "checkAction",
                        value: function () {
                          var e = this.state.oid;
                          (0, _.Zs)({ oid: e });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, p.BX)(p.HY, {
                            children: [
                              (0, p.tZ)(l.View, {
                                className: "",
                                children: (0, p.tZ)(g, {
                                  onConfirm: this.checkAction.bind(this),
                                }),
                              }),
                              (0, p.tZ)(d.Z, {}),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(f.default.Component))
              ) || i;
          Page(
            (0, c.createPageConfig)(
              Z,
              "pages/train/studentVerification/studentVerification",
              { root: { cn: [] } },
              { navigationStyle: "custom" } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [80391, 72407, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(19991);
        }),
          e.O();
      },
    ]);
})();
