!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [91159],
    {
      65592: function (e, i, c) {
        var a = c(52500),
          n = c(71515),
          t = (c(92954), c(34229)),
          s = c(48813);
        i.Z = a.default.memo(function (e) {
          var i = e.fromPage,
            c = e.propStyle,
            a = e.content,
            r = e.isChecked,
            o = e.onChecked,
            l = e.onShowDetail,
            d = a || {},
            m = d.headImg,
            h = d.title,
            p = d.nodes,
            w = d.price,
            g = d.desc;
          return (0, s.BX)(n.View, {
            className: "specifically-grab-banner ".concat(
              "graborder" === i ? "graborder" : ""
            ),
            style: c,
            children: [
              (0, s.BX)(n.View, {
                className: "container",
                children: [
                  (0, s.tZ)(n.Image, { className: "img-head", src: m }),
                  (0, s.BX)(n.View, {
                    className: "content",
                    children: [
                      (0, s.BX)(n.View, {
                        className: "tit",
                        children: [
                          (0, s.tZ)(t.ZtRichText, { space: "nbsp", nodes: h }),
                          "graborder" !== i &&
                            (0, s.tZ)(n.View, {
                              className: "ifont-detail iconfont",
                              id: "AAEY",
                              onClick: l,
                            }),
                        ],
                      }),
                      (0, s.BX)(n.View, {
                        className: "sub-tit",
                        children: [
                          p.map(function (e) {
                            return (0,
                            s.BX)(n.View, { className: "desc-box", children: [(0, s.tZ)(n.Image, { className: "icon-desc", src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_blue_gou.png" }), (0, s.tZ)(n.View, { children: e })] }, e);
                          }),
                          (0, s.BX)(n.View, {
                            className: "price",
                            children: ["¥", w, "/人"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.tZ)(n.View, {
                    id: "AAEZ",
                    onClick: o,
                    children:
                      "grabrate" === i
                        ? (0, s.tZ)(n.View, {
                            className:
                              "iconfont " +
                              (r ? "ifont-radioed" : "ifont-radio"),
                          })
                        : (0, s.tZ)(s.HY, {
                            children: r
                              ? (0, s.BX)(n.View, {
                                  className: "opened",
                                  children: [
                                    (0, s.tZ)(n.Image, {
                                      className: "icon-opened",
                                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_quangou.png",
                                    }),
                                    (0, s.tZ)(n.View, { children: "已开启" }),
                                  ],
                                })
                              : (0, s.tZ)(n.View, {
                                  className: "to-open",
                                  children: "开启",
                                }),
                          }),
                  }),
                ],
              }),
              g && (0, s.tZ)(n.View, { className: "tip", children: g }),
            ],
          });
        });
      },
    },
  ]);
})();
