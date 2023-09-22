!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [16946],
      {
        97864: function (e, t, n) {
          var i,
            o = n(32180),
            a = n(298),
            r = n(93212),
            c = n(57042),
            s = n(24460),
            u = n(81876),
            l = n(21867),
            p = n(86066),
            d = n(45023),
            Z = n(52500),
            g = (n(92954), n(71515)),
            h = n(18783),
            y = n(81957),
            f = n(48813),
            m =
              (0, y.h)()(
                (i = (function (e) {
                  (0, l.Z)(n, e);
                  var t = (0, p.Z)(n);
                  function n() {
                    var e;
                    (0, c.Z)(this, n);
                    for (
                      var i = arguments.length, o = new Array(i), a = 0;
                      a < i;
                      a++
                    )
                      o[a] = arguments[a];
                    return (
                      (e = t.call.apply(t, [this].concat(o))),
                      (0, d.Z)((0, u.Z)(e), "state", { shadowVisible: !0 }),
                      (0, d.Z)((0, u.Z)(e), "pageId", "10650089494"),
                      e
                    );
                  }
                  return (
                    (0, s.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.newUbtTrace(208319);
                        },
                      },
                      {
                        key: "newUbtTrace",
                        value: function (e, t) {
                          t = t && "object" == (0, r.Z)(t) ? t : {};
                          try {
                            this.ubtTrace(
                              e,
                              (0, a.Z)(
                                {
                                  openId: h.ZP.openid || "",
                                  userName: h.ZP.userName || "",
                                  cid: h.ZP.cid || "",
                                  oid: this.oid || "",
                                },
                                t
                              )
                            );
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "onClickLottery",
                        value: function () {
                          this.newUbtTrace(208320);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, f.BX)(g.View, {
                            className: "page",
                            children: [
                              (0, f.tZ)(g.View, { className: "index-top" }),
                              (0, f.tZ)(g.View, {
                                className: "index-center",
                                children: (0, f.tZ)(g.View, {
                                  className: "lottery",
                                  id: "AeCZ",
                                  onClick: this.onClickLottery,
                                  children: (0, f.tZ)("lottery", {
                                    brandid: "b1640768772",
                                    lotterykey: "",
                                    gid: "411",
                                    isExpand: "{{false}}",
                                    sideSpacing: 33,
                                    isPopup: "{{true}}",
                                    picurl:
                                      "https://images3.c-ctrip.com/zt/0yingxiao/202112/0zm2l120009exsh4a9453.png",
                                  }),
                                }),
                              }),
                              (0, f.tZ)(g.View, { className: "index-bottom" }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(Z.default.Component))
              ) || i;
          Page(
            (0, o.createPageConfig)(
              m,
              "pages/activity/train/20220418-ztrip-game-for-peace/index",
              { root: { cn: [] } },
              { usingComponents: { lottery: "plugin://mercPlugin/lottery" } } ||
                {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(97864);
        }),
          e.O();
      },
    ]);
})();
