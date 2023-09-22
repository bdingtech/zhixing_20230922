!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [42500],
    {
      67813: function (e, c, t) {
        var s = t(52500),
          i = t(71515),
          a = (t(92954), t(34229)),
          n = t(83011),
          l = t(48813);
        c.Z = s.default.memo(function (e) {
          var c = e.propStyle,
            t = e.drawerStatus,
            o = void 0 === t ? 1 : t,
            r = e.visible,
            d = e.content,
            b = e.price,
            m = e.hasChecked,
            u = e.isXbookProductType,
            h = e.fromPage,
            w = e.onRefuse,
            N = e.onClose,
            _ = e.onConfirm,
            p = e.ubtTrace,
            Z = void 0 === p ? function () {} : p,
            g = d || {},
            V = g.headTitle,
            f = g.headImg,
            x = g.title,
            k = g.subTitle,
            B = g.tips,
            y = g.nodes,
            z = g.buttonName,
            A = g.priceTag;
          return (
            (0, s.useEffect)(
              function () {
                r &&
                  "grabrate" === h &&
                  Z("s_trn_z_10650005126", {
                    exposureType: "actionbar",
                    bizKey: "z_grab_success_24h_zrq_actionbar_show",
                    from: "singleSpecialPersonGrab" === u ? 1 : 0,
                    xprodStatus: m ? 1 : 0,
                  });
              },
              [r]
            ),
            d
              ? (0, l.BX)(a.ZtDrawer, {
                  show: r,
                  onClose: N,
                  onWrapClose: N,
                  isDefineHead: !0,
                  className: "specifically-grab-drawer",
                  style: c,
                  children: [
                    (0, l.tZ)(i.View, { className: "bg-head" }),
                    (0, l.BX)(i.View, {
                      className: "header",
                      children: [
                        (0, l.tZ)(a.ZtRichText, {
                          space: "nbsp",
                          className: "tit",
                          nodes: V,
                        }),
                        (0, l.tZ)(i.Icon, {
                          class: "icon-closed-sgd",
                          type: "cancel",
                          color: "#666666",
                          id: "AAEa",
                          onClick: N,
                        }),
                      ],
                    }),
                    (0, l.BX)(i.View, {
                      className: "container",
                      children: [
                        (0, l.BX)(i.View, {
                          className: "content",
                          children: [
                            (0, l.BX)(i.View, {
                              className: "kefu-box",
                              children: [
                                (0, l.tZ)(i.Image, {
                                  className: "img-kefu",
                                  src: f,
                                }),
                                (0, l.BX)(i.View, {
                                  children: [
                                    (0, l.tZ)(i.View, {
                                      className: "tit",
                                      children: x,
                                    }),
                                    (0, l.tZ)(a.ZtRichText, {
                                      space: "nbsp",
                                      className: "sub-tit",
                                      nodes:
                                        k +
                                        (3 === o || (2 === o && b)
                                          ? "  ￥" + b + "/人"
                                          : ""),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.tZ)(i.View, { className: "line" }),
                            (0, l.tZ)(i.View, {
                              className: "desc-box",
                              children: y.map(function (e) {
                                return (0,
                                l.BX)(i.View, { className: "desc", children: [(0, l.tZ)(i.Image, { className: "icon-desc", src: e.img }), (0, l.tZ)(i.View, { className: "tit", children: e.title }), (0, l.tZ)(i.View, { className: "sub-tit", children: e.subtitle })] }, e.title);
                              }),
                            }),
                          ],
                        }),
                        (0, l.tZ)(n.Z, {
                          content: B,
                          className: "tips",
                          dotStyle: { color: "#cccccc", marginRight: "12rpx" },
                          txtStyle: { color: "#999" },
                          itemStyle: { marginTop: "8rpx" },
                        }),
                      ],
                    }),
                    1 === o &&
                      (m
                        ? (0, l.tZ)(i.View, { className: "btn-box-blank" })
                        : (0, l.tZ)(i.View, {
                            className: "btn-box-sgd",
                            children: (0, l.BX)(i.Button, {
                              className: "btn",
                              id: "AAEb",
                              onClick: _,
                              children: [
                                (0, l.tZ)(i.View, {
                                  className: "btn-name",
                                  children: z,
                                }),
                                (0, l.tZ)(i.View, {
                                  className: "price-tag",
                                  children: A,
                                }),
                              ],
                            }),
                          })),
                    2 === o &&
                      (0, l.tZ)(i.View, {
                        className: "btn-box-sgd-v2",
                        children: (0, l.BX)(i.View, {
                          className: "btn-double-box",
                          children: [
                            (0, l.tZ)(i.Button, {
                              className: "btn-double left",
                              id: "AAEc",
                              onClick: function () {
                                Z("c_trn_z_10650005126", {
                                  bizKey:
                                    "z_grab_success_24h_zrq_actionbar_quit_click",
                                }),
                                  w();
                              },
                              children: "放弃选择",
                            }),
                            (0, l.tZ)(i.Button, {
                              className: "btn-double right",
                              id: "AAEd",
                              onClick: function () {
                                Z("c_trn_z_10650005126", {
                                  bizKey:
                                    "z_grab_success_24h_zrq_actionbar_continue_click",
                                }),
                                  N();
                              },
                              children: "我知道了",
                            }),
                          ],
                        }),
                      }),
                    3 === o &&
                      (0, l.tZ)(i.View, {
                        className: "btn-box-sgd",
                        children: (0, l.tZ)(i.Button, {
                          className: "btn",
                          id: "AAEe",
                          onClick: _,
                          children: (0, l.tZ)(i.View, {
                            className: "btn-name",
                            children: "确认选择",
                          }),
                        }),
                      }),
                  ],
                })
              : (0, l.tZ)(i.View, {})
          );
        });
      },
    },
  ]);
})();
