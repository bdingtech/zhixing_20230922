!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [12213],
    {
      94488: function (e, t, i) {
        var n = i(90129),
          a = i(52500),
          o = (i(92954), i(71515)),
          c = i(34229),
          s = i(33477),
          r = i(79792),
          l = i(48813),
          u = r.default.isTieyou,
          d = ["一", "二", "三", "四", "五", "六", "七", "八", "九"],
          p = "train_booking",
          h = "smart_booking";
        t.Z = function (e) {
          var t = e.show,
            i = void 0 !== t && t,
            r = e.authFailToastInfo,
            m = void 0 === r ? {} : r,
            w = e.abTestMap,
            f = void 0 === w ? {} : w,
            N = e.userRoleInfo,
            Z = void 0 === N ? {} : N,
            T = e.handleClose,
            B = void 0 === T ? function () {} : T,
            V = e.onActionClick,
            b = void 0 === V ? function () {} : V,
            y = e.canUseNewstyle,
            v = e.fromSource,
            x = void 0 === v ? "train_booking" : v,
            I = (0, a.useState)(-1),
            _ = (0, n.Z)(I, 2),
            k = _[0],
            X = _[1];
          if (
            ((0, a.useEffect)(
              function () {
                if (m)
                  if (x === p) {
                    var t,
                      i =
                        (m.authToastInfoList &&
                          m.authToastInfoList.map(function (e) {
                            return e.toastType;
                          })) ||
                        [];
                    null !== (t = m.authBottomInfo) &&
                      void 0 !== t &&
                      t.toastType &&
                      i.push(m.authBottomInfo.toastType),
                      e.ubtTrace("s_trn_z_trace_10320660961", {
                        bizKey: "z_mini_ow_ndark_fc_show",
                        exposureType: "normal",
                        status: i.some(function (e) {
                          return 10 == e;
                        })
                          ? "c"
                          : null == m
                          ? void 0
                          : m.authFailType,
                        showType: i,
                        newScene: "Y" === Z.trainPayNewConsumer ? "1" : "0",
                      });
                  } else e.ubtTrace();
              },
              [m]
            ),
            !i || !m)
          )
            return (0, l.tZ)(o.View, {});
          var g = function (e) {
              X(k == e ? -1 : e);
            },
            C = m.toastTitle,
            z = m.toastDesc,
            R = m.authTopInfo,
            A = m.authToastInfoList,
            D = m.authBottomInfo,
            K = ("B" === (f["220606_TRN_new"] || "") && y) || h === x;
          return (0, l.tZ)(s.Z, {
            show: !0,
            title: C,
            subTitle: z,
            handleClose: function () {
              B();
            },
            className: "train-main-pre-interrupt-dialog",
            children: (0, l.tZ)(o.View, {
              className: "train-main-pre-interrupt-layer",
              children: (0, l.tZ)(o.View, {
                className: "pop-approve",
                children: (0, l.BX)(o.View, {
                  className: "pop-approve-bd",
                  children: [
                    A.map(function (t, i) {
                      var n, a, s, r;
                      return 0 == i
                        ? (0, l.BX)(
                            o.Block,
                            {
                              children: [
                                !1,
                                (0, l.BX)(o.View, {
                                  className:
                                    "solution-box pop-approve-recomd " +
                                    (K
                                      ? "pop-approve-recomd-new"
                                      : u
                                      ? "ty"
                                      : "zx"),
                                  children: [
                                    (0, l.tZ)(o.View, {
                                      className: "solution-index ".concat(
                                        u ? "ty" : "zx"
                                      ),
                                      children: K ? R.mainTitle : "方式一",
                                    }),
                                    !K &&
                                      (0, l.tZ)(o.View, {
                                        className: "info",
                                        children: R.mainTitle,
                                      }),
                                    (0, l.BX)(o.View, {
                                      className: "recomd-white ".concat(
                                        u ? "ty" : "zx"
                                      ),
                                      children: [
                                        !K &&
                                          (0, l.tZ)(o.Image, {
                                            src: t.authIcon,
                                            className: "icon",
                                          }),
                                        (0, l.BX)(o.View, {
                                          className: "cont",
                                          children: [
                                            (0, l.tZ)(o.View, {
                                              className: "tit2",
                                              children: t.authTitle,
                                            }),
                                            (0, l.BX)(o.View, {
                                              className: "txt",
                                              children: [
                                                (0, l.tZ)(c.ZtRichText, {
                                                  nodes: t.authDesc,
                                                }),
                                                !(
                                                  null ===
                                                    (s = t.productTips) ||
                                                  void 0 === s ||
                                                  !s.length
                                                ) &&
                                                  (0, l.tZ)(o.View, {
                                                    className: "".concat(
                                                      k == i
                                                        ? "arrow-active"
                                                        : "arrow",
                                                      " ifont-open iconfont"
                                                    ),
                                                    id: "AKBw",
                                                    onClick: function () {
                                                      g(i);
                                                    },
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        t.priceDesc &&
                                          (0, l.tZ)(o.View, {
                                            className: "price",
                                            children: t.priceDesc,
                                          }),
                                        9 === t.toastType
                                          ? (0, l.tZ)(o.Button, {
                                              className:
                                                "btn-primary  btn-submit",
                                              openType: "share",
                                              "data-type": "friendBuy",
                                              children: t.authButtonName,
                                            })
                                          : (0, l.tZ)(o.Button, {
                                              className:
                                                "btn-primary  btn-submit",
                                              id: "AKBx",
                                              onClick: function () {
                                                b(t, e.preInterruptOrderId);
                                              },
                                              children: t.authButtonName,
                                            }),
                                        !(
                                          null === (r = t.productTips) ||
                                          void 0 === r ||
                                          !r.length
                                        ) &&
                                          k == i &&
                                          (0, l.BX)(o.View, {
                                            className: "detail",
                                            children: [
                                              (0, l.tZ)(o.View, {
                                                className: "line",
                                              }),
                                              (0, l.tZ)(o.View, {
                                                children: t.productTips.map(
                                                  function (e, t) {
                                                    return (0, l.tZ)(
                                                      o.View,
                                                      {
                                                        className:
                                                          "detail-desc",
                                                        children: (0, l.tZ)(
                                                          c.ZtRichText,
                                                          { nodes: e }
                                                        ),
                                                      },
                                                      t
                                                    );
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            i
                          )
                        : (0, l.BX)(
                            o.View,
                            {
                              className: "solution-box pop-approve-grey "
                                .concat(K ? "pop-approve-grey-new" : "", " ")
                                .concat(u ? "ty" : "zx"),
                              children: [
                                !K &&
                                  (0, l.BX)(o.View, {
                                    className: "solution-index",
                                    children: ["方式", d[i]],
                                  }),
                                (0, l.BX)(o.View, {
                                  className: "box",
                                  children: [
                                    !K &&
                                      (0, l.tZ)(o.Image, {
                                        src: t.authIcon,
                                        className: "icon",
                                      }),
                                    (0, l.BX)(o.View, {
                                      className: "cont",
                                      children: [
                                        (0, l.tZ)(o.View, {
                                          className: "tit",
                                          children: (0, l.tZ)(c.ZtRichText, {
                                            nodes: t.authTitle,
                                          }),
                                        }),
                                        (0, l.BX)(o.View, {
                                          className: "txt",
                                          children: [
                                            (0, l.tZ)(c.ZtRichText, {
                                              nodes: t.authDesc,
                                            }),
                                            !(
                                              null === (n = t.productTips) ||
                                              void 0 === n ||
                                              !n.length
                                            ) &&
                                              (0, l.tZ)(o.View, {
                                                className: "".concat(
                                                  k == i
                                                    ? "arrow-active"
                                                    : "arrow",
                                                  " ifont-open iconfont"
                                                ),
                                                id: "AKBy",
                                                onClick: function () {
                                                  g(i);
                                                },
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    t.priceDesc &&
                                      (0, l.tZ)(o.View, {
                                        className: "price",
                                        children: t.priceDesc,
                                      }),
                                    9 === t.toastType
                                      ? (0, l.tZ)(o.Button, {
                                          className: "btn-line btn-submit",
                                          openType: "share",
                                          id: "friendBuy",
                                          "data-type": "friendBuy",
                                          children: t.authButtonName,
                                        })
                                      : (0, l.tZ)(o.Button, {
                                          className: "btn-line btn-submit",
                                          id: "AKBz",
                                          onClick: function () {
                                            b(t, e.preInterruptOrderId);
                                          },
                                          children: t.authButtonName,
                                        }),
                                  ],
                                }),
                                !(
                                  null === (a = t.productTips) ||
                                  void 0 === a ||
                                  !a.length
                                ) &&
                                  k == i &&
                                  (0, l.BX)(o.View, {
                                    className: "detail",
                                    children: [
                                      (0, l.tZ)(o.View, { className: "line" }),
                                      (0, l.tZ)(o.View, {
                                        children: t.productTips.map(function (
                                          e,
                                          t
                                        ) {
                                          return (0, l.tZ)(
                                            o.View,
                                            {
                                              className: "detail-desc",
                                              children: (0, l.tZ)(
                                                c.ZtRichText,
                                                { nodes: e }
                                              ),
                                            },
                                            t
                                          );
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            },
                            i
                          );
                    }),
                    D &&
                      (0, l.tZ)(o.View, {
                        className: "bottom-box",
                        id: "AKCA",
                        onClick: function () {
                          b(D, e.preInterruptOrderId);
                        },
                        children: (0, l.tZ)(c.ZtRichText, {
                          nodes: D.content,
                          space: "nbsp",
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        };
      },
    },
  ]);
})();
