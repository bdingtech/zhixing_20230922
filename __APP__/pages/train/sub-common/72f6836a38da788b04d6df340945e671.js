!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [25323],
    {
      43809: function (i, e, t) {
        var c = t(90129),
          n = (t(92954), t(52500)),
          s = t(71515),
          a = t(34229),
          l = t(48813);
        e.Z = function (i) {
          var e = i.visible,
            t = i.content,
            r = i.unionVipCode,
            o = void 0 === r ? "" : r,
            h = i.drawerStatus,
            d = void 0 === h ? 1 : h,
            m = i.isXbookProductType,
            u = i.checked,
            g = i.onChange,
            b = void 0 === g ? function () {} : g,
            N = i.onClose,
            p = void 0 === N ? function () {} : N,
            w = i.onConfirm,
            V = void 0 === w ? function () {} : w,
            Z = i.onRefuse,
            x = void 0 === Z ? function () {} : Z,
            v = i.ubtTrace,
            f = void 0 === v ? function () {} : v,
            _ = (0, n.useState)(0),
            B = (0, c.Z)(_, 2),
            R = B[0],
            y = B[1],
            X = (0, n.useState)(0),
            k = (0, c.Z)(X, 2),
            C = k[0],
            E = k[1];
          if (
            ((0, n.useEffect)(
              function () {
                var i,
                  c,
                  n = 0;
                e ||
                  ((null == t ||
                  null === (i = t.choseUnionVipRight) ||
                  void 0 === i ||
                  null === (c = i.coreRightEntityList) ||
                  void 0 === c
                    ? void 0
                    : c.length) > 0 &&
                    o &&
                    (n = t.choseUnionVipRight.coreRightEntityList.findIndex(
                      function (i) {
                        return i.rightCode === o;
                      }
                    )),
                  n < 0 && (n = 0),
                  E(n));
              },
              [e, o, t]
            ),
            (0, n.useEffect)(
              function () {
                e &&
                  f("s_trn_z_10650005126", {
                    exposureType: "actionbar",
                    bizKey: "z_grab_success_vip_actionbar_show",
                    from: "memberGrab" === m ? 1 : 0,
                    xprodStatus: u ? 1 : 0,
                  });
              },
              [e]
            ),
            !t)
          )
            return (0, l.tZ)(s.View, {});
          var T = t.title,
            U = t.openVipDescEntity,
            z = t.vipCoreRights,
            L = t.vipGradeRights,
            A = t.vipPackageEntity,
            I = t.unionVipRight,
            S = t.choseUnionVipRight;
          return (0, l.BX)(a.ZtDrawer, {
            show: e,
            isShowClose: !1,
            onWrapClose: p,
            className: "season-member-ship-drawer",
            drawerStyle: { borderRadius: "20px 20px 0 0" },
            children: [
              (0, l.BX)(s.View, {
                className: "header",
                children: [
                  (0, l.tZ)(s.Image, {
                    className: "bg",
                    src: "https://images3.c-ctrip.com/ztrip/train_bin/22-06/xcx/img_hytc_bg_v@3x.png",
                  }),
                  (0, l.tZ)(a.ZtRichText, { className: "tit", nodes: T }),
                  (0, l.tZ)(s.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_bin/22-09/icon_hytc_close@3x.png",
                    className: "header-icon-closed",
                    id: "AABq",
                    onClick: p,
                  }),
                ],
              }),
              (0, l.BX)(s.View, {
                className: "container",
                children: [
                  z &&
                    (0, l.BX)(s.View, {
                      className: "core-rights-box",
                      children: [
                        (0, l.BX)(s.View, {
                          className: "tit-box",
                          children: [
                            (0, l.tZ)(s.View, { className: "line" }),
                            (0, l.tZ)(a.ZtRichText, {
                              className: "tit",
                              nodes: z.title,
                            }),
                          ],
                        }),
                        (0, l.tZ)(s.View, {
                          className: "detail-box",
                          children:
                            e &&
                            (0, l.tZ)(s.Swiper, {
                              className: "vip-core-rights-box",
                              interval: "2000",
                              autoplay: !0,
                              previousMargin: "204rpx",
                              nextMargin: "194rpx",
                              current: R,
                              onChange: function (i) {
                                y(i.detail.current);
                              },
                              circular: !0,
                              children: z.coreRightEntityList.map(function (
                                i,
                                e
                              ) {
                                return (0, l.tZ)(
                                  s.SwiperItem,
                                  {
                                    className: "vip-core-right",
                                    children: (0, l.BX)(s.View, {
                                      className: "content ".concat(
                                        e === R ? "cur" : ""
                                      ),
                                      children: [
                                        (0, l.tZ)(s.Image, {
                                          className: "img-tit",
                                          src: i.imageUrl,
                                        }),
                                        (0, l.tZ)(s.View, {
                                          className: "tit",
                                          children: i.title,
                                        }),
                                        (0, l.tZ)(s.View, {
                                          className: "sub-tit",
                                          children: i.subTitle,
                                        }),
                                      ],
                                    }),
                                  },
                                  e
                                );
                              }),
                            }),
                        }),
                      ],
                    }),
                  A && A.unionVipRight
                    ? (0, l.BX)(s.View, {
                        className: "union-vip-rights-box",
                        children: [
                          (0, l.BX)(s.View, {
                            className: "tit-box",
                            children: [
                              (0, l.tZ)(s.View, { className: "line" }),
                              (0, l.tZ)(a.ZtRichText, {
                                className: "tit",
                                nodes: A.unionVipRight.title,
                              }),
                            ],
                          }),
                          (0, l.tZ)(s.View, {
                            className: "detail-box",
                            children: A.unionVipRight.rightList.map(function (
                              i
                            ) {
                              return (0, l.BX)(
                                s.View,
                                {
                                  className: "platform-vip-box",
                                  children: [
                                    (0, l.tZ)(s.Image, {
                                      className: "icon",
                                      src: i.bgUrl,
                                    }),
                                    (0, l.tZ)(s.View, {
                                      className: "tit",
                                      children: i.name,
                                    }),
                                    (0, l.tZ)(s.View, {
                                      className: "desc",
                                      children: i.desc,
                                    }),
                                  ],
                                },
                                i.bgUrl
                              );
                            }),
                          }),
                        ],
                      })
                    : I &&
                      (0, l.BX)(s.View, {
                        className: "union-vip-rights-box",
                        children: [
                          (0, l.BX)(s.View, {
                            className: "tit-box",
                            children: [
                              (0, l.tZ)(s.View, { className: "line" }),
                              (0, l.tZ)(a.ZtRichText, {
                                className: "tit",
                                nodes: I.title,
                              }),
                            ],
                          }),
                          (0, l.tZ)(s.View, {
                            className: "detail-box",
                            children: I.coreRightEntityList.map(function (i) {
                              return (0,
                              l.BX)(s.View, { className: "platform-vip-box", children: [(0, l.tZ)(s.Image, { className: "icon", src: i.imageUrl }), (0, l.tZ)(s.View, { className: "tit", children: i.title }), (0, l.tZ)(s.View, { className: "desc", children: i.subTitle })] }, i.imageUrl);
                            }),
                          }),
                        ],
                      }),
                  S &&
                    (0, l.BX)(s.View, {
                      className: "chosen-union-vip-rights-box",
                      children: [
                        (0, l.BX)(s.View, {
                          className: "tit-box",
                          children: [
                            (0, l.tZ)(s.View, { className: "line" }),
                            (0, l.tZ)(a.ZtRichText, {
                              className: "tit",
                              nodes: S.title,
                            }),
                          ],
                        }),
                        (0, l.tZ)(s.View, {
                          className: "detail-box",
                          children: S.coreRightEntityList.map(function (i, e) {
                            return (0, l.BX)(
                              s.View,
                              {
                                className: "platform-vip-checked-box ".concat(
                                  C === e ? "selected" : ""
                                ),
                                id: "AABr",
                                onClick: function () {
                                  var i;
                                  if (
                                    (E(e),
                                    null != S &&
                                      null !== (i = S.coreRightEntityList) &&
                                      void 0 !== i &&
                                      i[e] &&
                                      1 !== d)
                                  ) {
                                    var t;
                                    (t = S.coreRightEntityList[e].rightCode),
                                      b(t);
                                  }
                                },
                                children: [
                                  (0, l.tZ)(s.Image, {
                                    className: "icon",
                                    src: i.imageUrl,
                                  }),
                                  (0, l.tZ)(s.View, {
                                    className: "tit",
                                    children: i.title,
                                  }),
                                  (0, l.tZ)(s.View, {
                                    className: "desc",
                                    children: i.subTitle,
                                  }),
                                  (0, l.tZ)(s.View, {
                                    className: "iconfont2 ".concat(
                                      C === e
                                        ? "ifont2-checkboxed"
                                        : "ifont2-checkbox",
                                      " vip-checkbox"
                                    ),
                                  }),
                                ],
                              },
                              i.imageUrl
                            );
                          }),
                        }),
                      ],
                    }),
                  L &&
                    (0, l.BX)(s.View, {
                      className: "vip-grade-rights-box",
                      children: [
                        (0, l.BX)(s.View, {
                          className: "tit-box",
                          children: [
                            (0, l.tZ)(s.View, { className: "line" }),
                            (0, l.tZ)(a.ZtRichText, {
                              className: "tit",
                              nodes: L.title,
                            }),
                          ],
                        }),
                        (0, l.tZ)(s.View, {
                          className: "detail-box",
                          children: L.coreRightEntityList.map(function (i) {
                            return (0,
                            l.BX)(s.View, { className: "platform-vip-box", children: [(0, l.tZ)(s.Image, { className: "icon", src: i.imageUrl }), (0, l.tZ)(s.View, { className: "tit", children: i.title }), (0, l.tZ)(s.View, { className: "desc", children: i.subTitle })] }, i.bgUrl);
                          }),
                        }),
                      ],
                    }),
                  (0, l.tZ)(s.View, { className: "blank" }),
                ],
              }),
              (0, l.tZ)(s.View, {
                className: "footer ".concat(2 === d ? "v2" : ""),
                children:
                  1 === d
                    ? (0, l.BX)(s.View, {
                        className: "button-box",
                        children: [
                          (0, l.tZ)(s.View, {
                            className: "price",
                            children: U.salePrice,
                          }),
                          (0, l.tZ)(s.View, {
                            className: "unit",
                            children: U.unit,
                          }),
                          (0, l.tZ)(s.View, {
                            className: "tag",
                            children: U.tag,
                          }),
                          (0, l.tZ)(s.View, {
                            className: "btn-confirm",
                            id: "AABs",
                            onClick: function () {
                              var i,
                                e = "";
                              null != S &&
                                null !== (i = S.coreRightEntityList) &&
                                void 0 !== i &&
                                i[C] &&
                                (e = S.coreRightEntityList[C].rightCode),
                                V(e);
                            },
                            children: U.buttonName,
                          }),
                        ],
                      })
                    : (0, l.BX)(s.View, {
                        className: "button-box-v2",
                        children: [
                          (0, l.tZ)(s.Button, {
                            className: "btn-double left",
                            id: "AABt",
                            onClick: function () {
                              f("c_trn_z_10650005126", {
                                bizKey:
                                  "z_grab_success_vip_actionbar_quit_click",
                              }),
                                x();
                            },
                            children: "放弃选择",
                          }),
                          (0, l.tZ)(s.Button, {
                            className: "btn-double right",
                            id: "AABu",
                            onClick: function () {
                              f("c_trn_z_10650005126", {
                                bizKey:
                                  "z_grab_success_vip_actionbar_continue_click",
                              }),
                                p();
                            },
                            children: "我知道了",
                          }),
                        ],
                      }),
              }),
            ],
          });
        };
      },
    },
  ]);
})();
