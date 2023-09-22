!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [89576],
    {
      3855: function (e, t, i) {
        var n = i(90129),
          c = i(52500),
          a = i(71515),
          r = i(34229),
          o = i(79792),
          l = i(79910),
          s = i(48813),
          p = [
            {
              type: 18,
              icon: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Kaochuang.png",
            },
            {
              type: 19,
              icon: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_Guodao.png",
            },
            {
              type: 22,
              icon: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_zhongpu.png",
            },
            {
              type: 23,
              icon: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_xiapu.png",
            },
            {
              type: 26,
              icon: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNHZ_hlz.png",
            },
            {
              type: 71,
              icon: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_3g2Lianzuo_s63.png",
            },
          ],
          u = "trainOrderDetail",
          m = "smartOrderDetail";
        t.Z = c.default.memo(function (e) {
          var t,
            i,
            d,
            f = e.visible,
            h = void 0 !== f && f,
            v = e.serviceInfo,
            g = void 0 === v ? null : v,
            N = e.fromSource,
            x = void 0 === N ? "trainOrderDetail" : N,
            b = e.onClose,
            Z = void 0 === b ? function () {} : b,
            w = e.onReceiveService,
            _ = void 0 === w ? function () {} : w,
            z = e.onAppointSeatChange,
            V = void 0 === z ? function () {} : z,
            y = (0, c.useState)(-1),
            T = (0, n.Z)(y, 2),
            k = T[0],
            B = T[1];
          if (
            ((0, c.useEffect)(function () {
              if (g) {
                var e,
                  t,
                  i,
                  n =
                    null === (e = g.tripInfoList) ||
                    void 0 === e ||
                    null === (t = e[0]) ||
                    void 0 === t ||
                    null === (i = t.appointDetails) ||
                    void 0 === i
                      ? void 0
                      : i[0],
                  c = (null == n ? void 0 : n.appointType) || -1;
                B(c);
              }
            }, []),
            !g)
          )
            return null;
          var S =
              null === (t = g.tripInfoList) || void 0 === t
                ? void 0
                : t.some(function (e) {
                    return l.Z.isNotEmptyObj(null == e ? void 0 : e.tupSmart);
                  }),
            X = function () {
              var e = "https://".concat(
                o.default.isTieyou ? "m.tieyou.com" : "m.suanya.com",
                "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=rebook"
              );
              l.Z.commonNavigator(e);
            },
            A = -1 != [7, 9, 71, 91, 10].indexOf(g.rescheduleType),
            I = A && x === u,
            C = function () {
              var e;
              return (0, s.BX)(a.View, {
                className: "note-box flex ".concat(I ? "inner-box" : ""),
                children: [
                  (0, s.tZ)(a.View, {
                    children:
                      null === (e = g.rescheduleNotes) || void 0 === e
                        ? void 0
                        : e.map(function (e, t) {
                            return (0,
                            s.BX)(a.View, { className: "flex note-item", children: [(0, s.tZ)(r.ZtRichText, { className: "ml20", nodes: e, space: "nbsp" }), !I && t === g.rescheduleNotes.length - 1 && (0, s.tZ)(a.View, { className: "note-btn flex-align-items-center", id: "AAER", onClick: X, children: "查看规则" })] }, t);
                          }),
                  }),
                  I &&
                    (0, s.tZ)(a.View, {
                      className: "note-btn flex-align-items-center",
                      id: "AAES",
                      onClick: X,
                      children: "规则",
                    }),
                ],
              });
            },
            E = function () {
              var e;
              return (
                (null ===
                  (e = p.find(function (e) {
                    return e.type === k;
                  })) || void 0 === e
                  ? void 0
                  : e.icon) || ""
              );
            },
            D = function (e) {
              var t =
                "https://images3.c-ctrip.com/ztrip/train_zhu/icon_tag-jb_unselected.png";
              return (
                e === k &&
                  (t =
                    "https://images3.c-ctrip.com/ztrip/train_zhu/icon_tag-jb_selected".concat(
                      o.default.isTieyou ? "_ty" : "",
                      ".png"
                    )),
                t
              );
            },
            G = x === m,
            L = function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = -1;
              switch (g.rescheduleType) {
                case 5:
                case 7:
                  t = e ? 9 : 6;
                  break;
                case 8:
                  t = 6;
                  break;
                case 9:
                  t = 7;
                  break;
                case 51:
                case 71:
                  t = e ? 9 : 61;
                  break;
                case 81:
                  t = 61;
                  break;
                case 91:
                case 10:
                  t = 71;
              }
              var i = k,
                n = "",
                c = "";
              if (e) {
                var a,
                  r,
                  o,
                  s,
                  p,
                  u,
                  m =
                    null === (a = g.tripInfoList) ||
                    void 0 === a ||
                    null === (r = a[0]) ||
                    void 0 === r ||
                    null === (o = r.appointDetails) ||
                    void 0 === o ||
                    null ===
                      (s = o.find(function (e) {
                        return (null == e ? void 0 : e.appointType) === k;
                      })) ||
                    void 0 === s
                      ? void 0
                      : s.tupProduct;
                (i = null == m ? void 0 : m.productType),
                  (n = (null == m ? void 0 : m.appointSeat) || "");
                var d =
                  null === (p = g.tripInfoList) || void 0 === p
                    ? void 0
                    : p.find(function (e) {
                        return l.Z.isNotEmptyObj(
                          null == e ? void 0 : e.tupSmart
                        );
                      });
                c =
                  (null == d || null === (u = d.tupSmart) || void 0 === u
                    ? void 0
                    : u.fromPage) || "";
              }
              _(t, i, { appointSeat: n, fromPage: c });
            },
            O = S
              ? "https://images3.c-ctrip.com/ztrip/train_xie/2023/07/img_bq_zxhz.png"
              : "https://images3.c-ctrip.com/ztrip/train_zhu/Tag_logo_znx.png";
          return (0, s.tZ)(r.ZtDrawer, {
            show: h,
            isShowClose: !1,
            onWrapClose: function () {
              return Z(-1);
            },
            className: "train-rs-rsp ".concat(o.default.isTieyou ? "ty" : "zx"),
            children: (0, s.BX)(a.View, {
              className: "content flex-align-items-center flex-1 flex-column",
              children: [
                (0, s.tZ)(a.View, { className: "bg" }),
                (0, s.tZ)(a.Image, {
                  className: "close-icon",
                  src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                  id: "AAET",
                  onClick: function () {
                    return Z(-1);
                  },
                }),
                (0, s.BX)(a.View, {
                  className: "scroll-cont",
                  children: [
                    E() &&
                      (0, s.tZ)(a.Image, { className: "top-img", src: E() }),
                    (0, s.tZ)(r.ZtRichText, {
                      className: "title",
                      nodes: g.appointTitle,
                    }),
                    (0, s.BX)(a.View, {
                      className: "sub-box flex ".concat(S ? "free-sbox" : ""),
                      children: [
                        (0, s.tZ)(a.Image, { className: "icon", src: O }),
                        null === (i = g.appointTags) || void 0 === i
                          ? void 0
                          : i.map(function (e, t) {
                              return (0,
                              s.tZ)(a.View, { className: "tag bd-1rpx ".concat(0 === t ? "first" : ""), children: e }, t);
                            }),
                      ],
                    }),
                    (0, s.BX)(a.View, {
                      className: "product-box "
                        .concat(I ? "pb24 mb40" : "", " ")
                        .concat(A && G ? "p40" : ""),
                      children: [
                        null === (d = g.tripInfoList) || void 0 === d
                          ? void 0
                          : d.map(function (e, t) {
                              var i;
                              return (0, s.BX)(
                                a.View,
                                {
                                  className: "seat-box",
                                  children: [
                                    (0, s.BX)(a.View, {
                                      className:
                                        "tit-box flex-align-items-center",
                                      children: [
                                        (0, s.tZ)(a.Text, {
                                          className: "tit ".concat(
                                            A || G ? "strong-tit" : ""
                                          ),
                                          children: e.title,
                                        }),
                                        e.desc &&
                                          (0, s.tZ)(a.Text, {
                                            className: "sub-tit",
                                            children: e.desc,
                                          }),
                                        e.priceDesc &&
                                          !S &&
                                          (0, s.tZ)(a.Text, {
                                            className: "sub-tit price flex-1",
                                            children: e.priceDesc,
                                          }),
                                      ],
                                    }),
                                    G &&
                                      (0, s.BX)(a.View, {
                                        className:
                                          "train-info flex-align-items-center ".concat(
                                            A ? "" : "mb24"
                                          ),
                                        children: [
                                          (0, s.tZ)(a.View, {
                                            className: "no",
                                            children: e.trainNumber,
                                          }),
                                          (0, s.tZ)(a.View, {
                                            className: "v-line",
                                          }),
                                          (0, s.tZ)(a.View, {
                                            className: "depart-info",
                                            children: e.departInfo,
                                          }),
                                          (0, s.tZ)(a.View, {
                                            className:
                                              "iconfont ifont-trainfromto",
                                          }),
                                          (0, s.tZ)(a.View, {
                                            className: "arrive-info",
                                            children: e.arrivalInfo,
                                          }),
                                        ],
                                      }),
                                    !A &&
                                      (0, s.tZ)(a.View, {
                                        className:
                                          "list-box flex-align-items-center",
                                        children:
                                          null === (i = e.appointDetails) ||
                                          void 0 === i
                                            ? void 0
                                            : i.map(function (t, i) {
                                                return (0, s.BX)(
                                                  a.View,
                                                  {
                                                    className:
                                                      "item flex-center flex-1 ".concat(
                                                        t.appointType === k
                                                          ? "active"
                                                          : ""
                                                      ),
                                                    id: "AAEU",
                                                    onClick: function () {
                                                      return (function (e) {
                                                        B(e.appointType),
                                                          null == V || V(e);
                                                      })(t);
                                                    },
                                                    children: [
                                                      (0, s.tZ)(a.View, {
                                                        className: "name",
                                                        children: t.text,
                                                      }),
                                                      !S &&
                                                        (0, s.BX)(a.View, {
                                                          className: "s-price",
                                                          children: [
                                                            e.realServicePrice,
                                                            "元/人",
                                                          ],
                                                        }),
                                                      (0, s.tZ)(a.Image, {
                                                        className: "sel-icon",
                                                        src: D(t.appointType),
                                                      }),
                                                    ],
                                                  },
                                                  i
                                                );
                                              }),
                                      }),
                                  ],
                                },
                                t
                              );
                            }),
                        I && C(),
                      ],
                    }),
                    !I && C(),
                  ],
                }),
                (0, s.BX)(a.View, {
                  className: "bottom-box flex ".concat(
                    S ? "free-box" : "ty-bottom-box"
                  ),
                  children: [
                    (0, s.BX)(a.View, {
                      className: "btn flex-center flex-1 reject",
                      id: "AAEV",
                      onClick: function () {
                        S ? L(!0) : Z(k);
                      },
                      children: [
                        (0, s.tZ)(a.Text, {
                          className: "tit",
                          children: S ? "普通换座" : "暂不需要",
                        }),
                        S &&
                          (0, s.tZ)(a.Text, {
                            className: "sub-tit",
                            children: "出票速度慢",
                          }),
                        S &&
                          (0, s.tZ)(a.View, {
                            className: "tag free-tag",
                            children: (0, s.tZ)(a.Text, {
                              className: "txt",
                              children: "免费",
                            }),
                          }),
                      ],
                    }),
                    (0, s.BX)(a.View, {
                      className: "btn flex-center flex-1 receive",
                      id: "AAEW",
                      onClick: function () {
                        return L();
                      },
                      children: [
                        (0, s.tZ)(a.Text, {
                          className: "tit",
                          children: S
                            ? "专人换座"
                            : G
                            ? "接受（¥".concat(g.realServicePrice, "）")
                            : "接受",
                        }),
                        S &&
                          (0, s.tZ)(a.Text, {
                            className: "sub-tit",
                            children: "高速出票 +¥".concat(
                              g.realServicePrice,
                              "/人，失败退"
                            ),
                          }),
                        G &&
                          (0, s.tZ)(a.View, {
                            className: "tag btn-tag",
                            children: (0, s.tZ)(a.Text, {
                              className: "txt",
                              children: "改签失败全额退",
                            }),
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
