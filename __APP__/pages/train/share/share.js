!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/19f27d7cebe94aa1035a5e0048e105a3.js"),
    require("../sub-common/8e7fedfd866fcd380b23fd0a31b6f284.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [89455],
      {
        96574: function (o, t, n) {
          var e,
            a = n(32180),
            r = n(94262),
            i = n(57042),
            c = n(24460),
            s = n(21867),
            d = n(86066),
            l = n(52500),
            f = n(71515),
            h = (n(92954), n(48792)),
            u = n.n(h),
            g = n(81957),
            v = (n(81437), n(48813)),
            B =
              (0, g.h)()(
                (e =
                  u()({
                    data: {},
                    onLoad: function (o) {
                      console.log(JSON.stringify(o));
                      var t = o.img,
                        n = void 0 === t ? "" : t,
                        e = o.shareImg,
                        a = void 0 === e ? "" : e,
                        r = o.navTitle,
                        i = void 0 === r ? "" : r,
                        c = o.navBgColor,
                        s = void 0 === c ? "" : c,
                        d = o.bgColor,
                        l = void 0 === d ? "" : d,
                        f = o.leftBtnTxt,
                        h = void 0 === f ? "分享好友" : f,
                        u = o.leftBtnColor,
                        g = void 0 === u ? "fff" : u,
                        v = (o.leftBtnBgColor, o.rightBtnTxt),
                        B = void 0 === v ? "保存图片" : v,
                        C = o.rightBtnColor,
                        b = void 0 === C ? "1d2a43" : C,
                        p = o.rightBtnBgColor,
                        T = void 0 === p ? "f5c750" : p,
                        m = o.showRightBtn,
                        w = void 0 === m || m,
                        y = o.sharePath,
                        x = void 0 === y ? "" : y,
                        Z = o.shareTitle,
                        P = void 0 === Z ? "" : Z,
                        j = o.subscribeCode,
                        k = void 0 === j ? "" : j,
                        q = o.styleType,
                        J = void 0 === q ? "0" : q,
                        O = o.floatTip,
                        I = void 0 === O ? "" : O;
                      this.redirectTo({
                        url: "/functionalPages/share/share?img="
                          .concat(n, "&shareImg=")
                          .concat(a, "&navTitle=")
                          .concat(i, "&floatTip=")
                          .concat(I, "\n      &navBgColor=")
                          .concat(s, "&bgColor=")
                          .concat(l, "&leftBtnTxt=")
                          .concat(h, "&leftBtnColor=")
                          .concat(g, "&rightBtnTxt=")
                          .concat(B, "&rightBtnColor=")
                          .concat(b, "\n      &rightBtnBgColor=")
                          .concat(T, "&showRightBtn=")
                          .concat(w, "&sharePath=")
                          .concat(x, "&shareTitle=")
                          .concat(P, "&subscribeCode=")
                          .concat(k, "&styleType=")
                          .concat(J),
                      });
                    },
                  })(
                    (e = (function (o) {
                      (0, s.Z)(n, o);
                      var t = (0, d.Z)(n);
                      function n() {
                        return (0, i.Z)(this, n), t.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(n, [
                          {
                            key: "render",
                            value: function () {
                              return (0, r.Z)(this.data), (0, v.tZ)(f.View, {});
                            },
                          },
                        ]),
                        n
                      );
                    })(l.default.Component))
                  ) || e)
              ) || e;
          Page(
            (0, a.createPageConfig)(
              B,
              "pages/train/share/share",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (o) {
        o.O(0, [37513, 71341, 19559, 11216, 68592], function () {
          return (function (t) {
            return o((o.s = t));
          })(96574);
        }),
          o.O();
      },
    ]);
})();
