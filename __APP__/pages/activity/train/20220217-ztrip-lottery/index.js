!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [65291],
      {
        62381: function (e, t, n) {
          var i,
            a = n(32180),
            o = n(298),
            c = n(93212),
            r = n(57042),
            s = n(24460),
            u = n(81876),
            l = n(21867),
            d = n(86066),
            p = n(45023),
            h = n(52500),
            y = (n(92954), n(71515)),
            Z = n(18783),
            f = n(81957),
            g = n(48813),
            m =
              (0, f.h)()(
                (i = (function (e) {
                  (0, l.Z)(n, e);
                  var t = (0, d.Z)(n);
                  function n() {
                    var e;
                    (0, r.Z)(this, n);
                    for (
                      var i = arguments.length, a = new Array(i), o = 0;
                      o < i;
                      o++
                    )
                      a[o] = arguments[o];
                    return (
                      (e = t.call.apply(t, [this].concat(a))),
                      (0, p.Z)((0, u.Z)(e), "state", { shadowVisible: !0 }),
                      (0, p.Z)((0, u.Z)(e), "pageId", "10650089492"),
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
                          t = t && "object" == (0, c.Z)(t) ? t : {};
                          try {
                            this.ubtTrace(
                              e,
                              (0, o.Z)(
                                {
                                  openId: Z.ZP.openid || "",
                                  userName: Z.ZP.userName || "",
                                  cid: Z.ZP.cid || "",
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
                          return (0, g.BX)(y.View, {
                            className: "page",
                            children: [
                              (0, g.tZ)(y.View, { className: "index-top" }),
                              (0, g.tZ)(y.View, {
                                className: "index-center",
                                children: (0, g.tZ)(y.View, {
                                  className: "lottery",
                                  id: "AeCY",
                                  onClick: this.onClickLottery,
                                  children: (0, g.tZ)("lottery", {
                                    brandid: "b1640768772",
                                    lotterykey: "Jar.zhixing",
                                    gid: "331",
                                    isExpand: "{{false}}",
                                    sideSpacing: 33,
                                    isPopup: "{{true}}",
                                    picurl:
                                      "https://igame-10037599.cos.ap-shanghai.myqcloud.com/48d6dae6-4c03-8825-04fd-441687fac71a",
                                  }),
                                }),
                              }),
                              (0, g.tZ)(y.View, { className: "index-bottom" }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(h.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              m,
              "pages/activity/train/20220217-ztrip-lottery/index",
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
          })(62381);
        }),
          e.O();
      },
    ]);
})();
