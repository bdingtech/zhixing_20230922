!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [42162],
    {
      97620: function (e, c, i) {
        var s = i(90129),
          l = i(52500),
          t = i(71515),
          a = i(48813),
          n = "page";
        c.Z = l.default.memo(function (e) {
          var c = e.data,
            i = void 0 === c ? null : c,
            o = e.fromSource,
            r = void 0 === o ? "" : o,
            m = e.customizeStyle,
            d = void 0 === m ? {} : m,
            f = e.isCancelMember,
            h = void 0 !== f && f,
            w = e.onChooseChange,
            u = void 0 === w ? function () {} : w,
            p = (0, l.useState)(!1),
            x = (0, s.Z)(p, 2),
            g = x[0],
            N = x[1];
          if (
            ((0, l.useEffect)(
              function () {
                N(h);
              },
              [h]
            ),
            !i)
          )
            return (0, a.tZ)(a.HY, {});
          var b = i.title || "";
          return (0, a.BX)(t.View, {
            className: "grab-member-cancel-box ".concat(
              r == n ? "page-sty" : ""
            ),
            style: d,
            children: [
              (0, a.BX)(t.View, {
                className: "tit-box flex-align-items-center",
                children: [
                  (0, a.tZ)(t.View, { className: "v-line" }),
                  (0, a.tZ)(t.View, {
                    className: "m-cont flex-1",
                    children: b,
                  }),
                  (0, a.tZ)(t.Image, {
                    className: "select-icon",
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/11/icon_checkbox_".concat(
                      g ? "on" : "off",
                      ".webp"
                    ),
                    webp: !0,
                    id: "AADj",
                    onClick: function () {
                      N(!g), u(!g);
                    },
                  }),
                ],
              }),
              (i.cancelDesc || i.rightDesc) &&
                (0, a.BX)(t.View, {
                  className: "desc-box",
                  children: [
                    i.cancelDesc &&
                      (0, a.BX)(t.View, {
                        className: "d-item flex-align-items-center",
                        children: [
                          (0, a.tZ)(t.View, { className: "opt-circle" }),
                          (0, a.tZ)(t.View, {
                            className: "desc flex-1",
                            children: i.cancelDesc,
                          }),
                        ],
                      }),
                    i.rightDesc &&
                      (0, a.BX)(t.View, {
                        className: "d-item flex-align-items-center",
                        children: [
                          (0, a.tZ)(t.View, { className: "opt-circle" }),
                          (0, a.tZ)(t.ScrollView, {
                            className: "scroll-box",
                            scrollY: !0,
                            scrollWithAnimation: !0,
                            children: (0, a.tZ)(t.View, {
                              className: "desc flex-1",
                              children: i.rightDesc,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
            ],
          });
        });
      },
    },
  ]);
})();
