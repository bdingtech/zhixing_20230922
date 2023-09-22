!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [30341],
    {
      53346: function (e, t, c) {
        c(92954);
        var a = c(52500),
          i = c(71515),
          s = c(34229),
          n = c(79792),
          l = c(3205),
          r = c(48813);
        t.Z = a.default.memo(function (e) {
          var t = e.visible,
            c = void 0 !== t && t,
            d = e.content,
            o = void 0 === d ? {} : d,
            m = e.drawerStatus,
            h = void 0 === m ? 1 : m,
            u = e.pageId,
            w = e.onChecked,
            b = void 0 === w ? function () {} : w,
            p = e.onClose,
            N = void 0 === p ? function () {} : p,
            Z = e.onProductOperation,
            g = void 0 === Z ? function () {} : Z,
            f = e.ubtTrace,
            V = void 0 === f ? function () {} : f;
          (0, a.useEffect)(
            function () {
              c &&
                V("TZWGrabSuccessRate_UpSeatCancel_UnCancel_click", {
                  PageId: u,
                });
            },
            [c]
          );
          var x = o || {},
            B = x.headTitle,
            v = x.headTag,
            T = x.serveName,
            X = x.tag,
            C = x.topServe,
            k = x.bottomServes,
            y = void 0 === k ? [] : k,
            S = x.descs,
            _ = void 0 === S ? [] : S,
            A = x.price;
          if (!o) return (0, r.tZ)(r.HY, {});
          var I = "",
            R = "";
          3 === h
            ? (I = "确认放弃")
            : 4 === h
            ? (I = "否")
            : 5 === h && (I = "放弃选择"),
            3 === h
              ? (R = "暂不取消")
              : 4 === h
              ? (R = "是")
              : 5 === h && (R = "我知道了");
          return (0, r.tZ)(s.ZtDrawer, {
            drawerStyle: { background: "#f5f5f5", borderRadius: "40rpx" },
            className: "grabrate-product-drawer",
            show: c,
            isShowClose: !1,
            onWrapClose: function () {
              N();
            },
            children: (0, r.BX)(i.View, {
              className: "container",
              children: [
                (0, r.tZ)(i.Image, {
                  className: "bg",
                  src: "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/cgly/img_axqbj@3x.webp",
                }),
                (0, r.BX)(i.View, {
                  className: "hd",
                  children: [
                    (0, r.tZ)(i.View, { className: "tit", children: B }),
                    (0, r.tZ)(i.View, { className: "head-tag", children: v }),
                    (0, r.tZ)(i.Image, {
                      className: "card-icon-closed",
                      src: "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/cgly/btn_gbtc@3x.webp",
                      webp: !0,
                      id: "AADq",
                      onClick: function () {
                        N(), 4 === h && g(!1);
                      },
                    }),
                  ],
                }),
                (0, r.BX)(i.View, {
                  className: "bd",
                  children: [
                    (0, r.BX)(i.View, {
                      className: "content",
                      children: [
                        (0, r.BX)(i.View, {
                          className: "tit-box",
                          children: [
                            (0, r.tZ)(i.View, { className: "line" }),
                            (0, r.tZ)(i.View, {
                              className: "tit",
                              children: T,
                            }),
                            X &&
                              (0, r.tZ)(i.View, {
                                className: "tag",
                                children: X,
                              }),
                            (0, r.tZ)(i.View, {
                              className: "price",
                              children: "¥".concat(A || "", "/人"),
                            }),
                          ],
                        }),
                        (0, r.BX)(i.View, {
                          className: "detail",
                          children: [
                            C &&
                              (0, r.BX)(i.View, {
                                className: "card-top",
                                children: [
                                  (0, r.BX)(i.View, {
                                    className: "card-tit-box",
                                    children: [
                                      (0, r.tZ)(s.ZtRichText, {
                                        className: "card-tit",
                                        nodes: C.title,
                                      }),
                                      (0, r.tZ)(s.ZtRichText, {
                                        className: "card-sub-tit",
                                        nodes: C.subTitle,
                                      }),
                                    ],
                                  }),
                                  (0, r.tZ)(i.Image, {
                                    className: "img-cash",
                                    src: C.icon,
                                    webp: !0,
                                  }),
                                ],
                              }),
                            (0, r.BX)(i.View, {
                              style: {
                                display: "flex",
                                marginTop: "16rpx",
                                justifyContent: "space-between",
                              },
                              children: [
                                y[0] &&
                                  (0, r.BX)(i.View, {
                                    className: "card-middle",
                                    children: [
                                      (0, r.BX)(i.View, {
                                        className: "card-tit-box",
                                        children: [
                                          (0, r.tZ)(s.ZtRichText, {
                                            nodes: y[0].title,
                                            className: "card-tit",
                                          }),
                                          (0, r.tZ)(i.View, {
                                            className: "card-sub-tit",
                                            children: y[0].subTitle,
                                          }),
                                        ],
                                      }),
                                      (0, r.tZ)(i.Image, {
                                        className: "img-cash",
                                        src: y[0].icon,
                                        webp: !0,
                                      }),
                                    ],
                                  }),
                                y[1] &&
                                  (0, r.BX)(i.View, {
                                    className: "card-middle",
                                    children: [
                                      (0, r.BX)(i.View, {
                                        className: "card-tit-box",
                                        children: [
                                          (0, r.tZ)(s.ZtRichText, {
                                            nodes: y[1].title,
                                            className: "card-tit",
                                          }),
                                          (0, r.tZ)(i.View, {
                                            className: "card-sub-tit",
                                            children: y[1].subTitle,
                                          }),
                                        ],
                                      }),
                                      (0, r.tZ)(i.Image, {
                                        className: "img-cash",
                                        src: y[1].icon,
                                        webp: !0,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.BX)(i.View, {
                          className: "product-drawer-tips",
                          children: [
                            _.map(function (e, t) {
                              return (0,
                              r.tZ)(i.View, { className: "txt", children: e }, t);
                            }),
                            (0, r.BX)(i.View, {
                              className: "txt",
                              id: "AADr",
                              onClick: function () {
                                var e =
                                  "https://market.suanya.com/document/static/train/zx-sjqpfw.html";
                                n.default.isTieyou &&
                                  (e =
                                    "https://market.suanya.com/document/static/train/ty-sjqpfw.html"),
                                  l.Z.twebview({ data: { url: e } });
                              },
                              children: [
                                (0, r.tZ)(i.Text, { children: "· 点击阅读" }),
                                (0, r.tZ)(i.Text, {
                                  style: {
                                    color: "#222222",
                                    fontWeight: "400",
                                  },
                                  children: "《升级坐席服务说明》",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.BX)(i.View, {
                      className: "btn-box",
                      children: [
                        [1, 2].includes(h) &&
                          (0, r.tZ)(r.HY, {
                            children: (0, r.tZ)(i.Button, {
                              className: "btn-single",
                              id: "AADs",
                              onClick: function () {
                                1 === h ? N() : 2 === h && (N(), b(!0));
                              },
                              children: 1 === h ? "我知道了" : "确认选择",
                            }),
                          }),
                        [3, 4, 5].includes(h) &&
                          (0, r.BX)(r.HY, {
                            children: [
                              (0, r.tZ)(i.Button, {
                                className: "btn-double left",
                                id: "AADt",
                                onClick: function () {
                                  3 === h
                                    ? (N(), b(!1))
                                    : 4 === h
                                    ? (N(), g(!1))
                                    : 5 === h && (N(), b(!1)),
                                    3 === h &&
                                      V(
                                        "TZWGrabSuccessRate_UpSeatCancel_Cancel_click",
                                        { PageId: u }
                                      );
                                },
                                children: I,
                              }),
                              (0, r.tZ)(i.Button, {
                                className: "btn-double right",
                                id: "AADu",
                                onClick: function () {
                                  3 === h
                                    ? N()
                                    : 4 === h
                                    ? (N(), g(!0))
                                    : 5 === h && N(),
                                    3 === h &&
                                      V(
                                        "TZWGrabSuccessRate_UpSeatCancel_UnCancel_click",
                                        { PageId: u }
                                      );
                                },
                                children: R,
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        });
      },
    },
  ]);
})();
