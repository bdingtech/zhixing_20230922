!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    require("../../../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../../../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [85423],
      {
        33766: function (e, t, i) {
          var n,
            r = i(32180),
            o = i(57042),
            l = i(24460),
            a = i(81876),
            c = i(21867),
            s = i(86066),
            d = i(45023),
            g = i(52500),
            u = i(92954),
            h = i.n(u),
            m = i(71515),
            f = i(8271),
            p = i.n(f),
            y = i(49528),
            x = i(90729),
            Z = i(23577),
            b = i(19972),
            w = i(87298),
            T = i(94205),
            C = i(8079),
            v = i(88184),
            I = i(32970),
            S = i(53550),
            B = i(90582),
            D = i(48813),
            V = function (e) {
              var t = e.isCountdown,
                i = function () {
                  t
                    ? (0, B.v)(
                        "预计15s内有还价结果，确定不等等吗？",
                        "",
                        {
                          text: "不等了",
                          callback: function () {
                            (0, I.lK)();
                          },
                        },
                        { text: "再等等" }
                      )
                    : (0, I.lK)();
                };
              return (0, D.tZ)(v.Z, {
                zIndex: 0,
                needHolder: !0,
                title: "智行机票",
                leftViewWidth: 80,
                renderLeftView: function () {
                  return (0, D.tZ)(m.View, {
                    id: "AMAV",
                    onClick: function () {
                      i();
                    },
                    children: (0, D.tZ)(S.Z, {
                      style: { fontSize: 24, color: "#222", marginLeft: 15 },
                      children: "󰲚",
                    }),
                  });
                },
                rightViewWidth: 85,
                renderCenterView: function () {
                  return (0, D.tZ)(m.View, {
                    style: {
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    },
                    children: (0, D.tZ)(m.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/huanjiading_ziti@3x.png",
                      style: {
                        width: 108,
                        height: 17,
                        justifyContent: "center",
                      },
                    }),
                  });
                },
                backgroundColor: "transparent",
              });
            },
            z = i(298),
            A = i(90129),
            X = i(1841),
            N = i(17152),
            k = h().getSystemInfoSync(),
            F = [
              {
                isMiddleStatus: !0,
                rightText: "还价成功/失败",
                rightImage: "",
              },
              {
                isMiddleStatus: !1,
                rightText: "还价成功（出票中）",
                rightImage:
                  "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/success_icon.png",
              },
              {
                isMiddleStatus: !1,
                rightText: "还价成功（已出票）",
                rightImage:
                  "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/success_icon.png",
              },
              {
                isMiddleStatus: !1,
                rightText: "还价失败",
                rightImage:
                  "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/fail_icon.png",
              },
              {
                isMiddleStatus: !1,
                rightText: "还价失败",
                rightImage:
                  "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/fail_icon.png",
              },
              {
                isMiddleStatus: !1,
                rightText: "还价成功（待支付）",
                rightImage:
                  "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/success_icon.png",
              },
            ],
            R = g.default.memo(function (e) {
              var t = e.status;
              return (0,
              D.BX)(m.View, { children: [(0, D.BX)(m.View, { style: P.barContainer, children: [(0, D.tZ)(m.View, { style: P.leftBar }), (0, D.tZ)(m.View, { style: (0, z.Z)((0, z.Z)({}, P.rightBar), { backgroundColor: F[t].isMiddleStatus ? "#FBCCC6" : "#FF1A5A" }) })] }), (0, D.BX)(m.View, { style: P.itemContainer, children: [(0, D.BX)(m.View, { style: P.statusItem, children: [(0, D.tZ)(m.View, { style: P.outer, children: (0, D.tZ)(m.View, { style: P.circle }) }), (0, D.tZ)(m.Text, { style: P.desc, children: "提交还价申请" })] }), (0, D.BX)(m.View, { style: P.statusItem, children: [F[t].isMiddleStatus ? (0, D.tZ)(m.Image, { style: P.outer, src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/xieshang_icon.png" }) : (0, D.tZ)(m.View, { style: P.outer, children: (0, D.tZ)(m.View, { style: P.circle }) }), (0, D.tZ)(m.Text, { style: F[t].isMiddleStatus ? P.highlightDesc : P.desc, children: "还价协商" })] }), (0, D.BX)(m.View, { style: P.statusItem, children: [F[t].isMiddleStatus ? (0, D.tZ)(m.View, { style: P.outer, children: (0, D.tZ)(m.View, { style: (0, z.Z)((0, z.Z)({}, P.circle), { backgroundColor: "#FFC5BE" }) }) }) : (0, D.tZ)(m.Image, { style: P.outer, src: F[t].rightImage }), (0, D.tZ)(m.Text, { style: F[t].isMiddleStatus ? P.desc : P.highlightDesc, children: F[t].rightText })] })] })] });
            }),
            P = (0, y.lW)({
              barContainer: {
                marginTop: 11,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              leftBar: {
                height: 2,
                width: (k.windowWidth - 48) / 2,
                borderRadius: 2,
                backgroundColor: "#FF1A5A",
              },
              rightBar: {
                height: 2,
                width: (k.windowWidth - 48) / 2,
                borderRadius: 2,
                backgroundColor: "#FBCCC6",
              },
              itemContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: -14,
              },
              statusItem: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 68,
              },
              outer: {
                width: 26,
                height: 26,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 2,
              },
              circle: {
                width: 8,
                height: 8,
                borderRadius: 8,
                backgroundColor: "#FF1A5A",
              },
              desc: { fontSize: 11, color: "#730303", opacity: 0.5 },
              highlightDesc: {
                fontSize: 11,
                color: "#730303",
                fontWeight: "500",
              },
            }),
            M = g.default.memo(function (e) {
              var t = e.status,
                i = e.title,
                n = e.subTitle,
                r = e.surprisedGrabFinishTime,
                o = e.surprisedGrabOrderDetail,
                l = (0, g.useState)(p()(r).diff(p()(), "s")),
                a = (0, A.Z)(l, 2),
                c = a[0],
                s = a[1];
              return (0, D.BX)(m.View, {
                style: j.container,
                children: [
                  (function () {
                    var e;
                    return 0 == t
                      ? (console.log(
                          r,
                          p()().format("YYYY-MM-DD HH:mm:ss"),
                          p()(r).format("YYYY-MM-DD HH:mm:ss")
                        ),
                        p()().isBefore(p()(r))
                          ? (setTimeout(function () {
                              s(c - 1), c <= 0 && o();
                            }, 1e3),
                            (e = "预计等待<font color='#ff5959'>".concat(
                              c,
                              "s</font>，正在协商价格中…"
                            )))
                          : (e = i),
                        (0, D.BX)(m.View, {
                          children: [
                            (0, D.tZ)(X.Z, {
                              style: (0, z.Z)(
                                (0, z.Z)({}, j.titleText),
                                {},
                                { textAlign: "center" }
                              ),
                              children: e,
                            }),
                            (0, D.tZ)(m.View, {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              },
                              children: (0, D.tZ)(m.View, {
                                style: j.lottieStyle,
                                children: (0, D.tZ)(N.Z, {
                                  source:
                                    "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/xieshang.json",
                                  defaultImg:
                                    "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/xieshang.png",
                                }),
                              }),
                            }),
                          ],
                        }))
                      : (0, D.BX)(m.View, {
                          style: j.titleContainer,
                          children: [
                            (0, D.tZ)(m.Image, {
                              style: j.avatarImg,
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/kefu@3x.png",
                            }),
                            (0, D.BX)(m.View, {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                              },
                              children: [
                                (0, D.tZ)(X.Z, {
                                  style: j.titleText,
                                  children: i,
                                }),
                                (0, D.tZ)(m.Text, {
                                  style: j.subTitle,
                                  children: n,
                                }),
                              ],
                            }),
                          ],
                        });
                  })(),
                  (0, D.tZ)(R, { status: t }),
                ],
              });
            }),
            j = (0, y.lW)({
              container: {
                marginLeft: 24,
                marginRight: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 10,
              },
              titleText: {
                fontSize: 21,
                lineHeight: 25,
                color: "#730303",
                fontWeight: "600",
              },
              subTitle: { fontSize: 12, color: "#730303", marginTop: 4 },
              lottieStyle: {
                width: 281,
                height: 76,
                marginTop: 10,
                marginBottom: 2,
                marginRight: 8,
              },
              titleContainer: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "flex-start",
                marginBottom: 11,
              },
              avatarImg: { width: 42, height: 46, marginRight: 10 },
            }),
            W = i(96677),
            _ = g.default.memo(function (e) {
              var t = e.tips,
                i = e.urgeState,
                n = e.acceptablePrice,
                r = e.urgeGrab,
                o = e.isShow,
                l = e.hasCoupon,
                a = e.acceptablePriceRemark,
                c = e.isCountdown;
              if (!o) return null;
              var s = function () {
                1 == i && r();
              };
              return (0, D.tZ)(m.View, {
                style: (0, z.Z)(
                  (0, z.Z)({}, G.container),
                  {},
                  { marginTop: l ? 8 : 14 }
                ),
                children: (0, D.BX)(m.View, {
                  style: G.urgeContainer,
                  children: [
                    (0, D.BX)(m.View, {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        (0, D.BX)(m.View, {
                          style: { flex: 1 },
                          children: [
                            (0, D.BX)(m.Text, {
                              style: G.title,
                              children: [
                                "我的还价价格 ",
                                (0, D.tZ)(m.Text, {
                                  style: G.rmb,
                                  children: "¥",
                                }),
                                (0, D.tZ)(m.Text, {
                                  style: G.priceText,
                                  children: n,
                                }),
                              ],
                            }),
                            (0, D.tZ)(X.Z, { style: G.subTitle, children: a }),
                          ],
                        }),
                        (console.log(c, "iscountdown"),
                        0 == i || c
                          ? null
                          : (0, D.tZ)(m.View, {
                              style: (0, z.Z)((0, z.Z)({}, G.urgeBtn), {
                                opacity: 1 == i ? 1 : 0.5,
                              }),
                              id: "AMAX",
                              onClick: s,
                              children: (0, D.tZ)(m.Text, {
                                style: G.urgeBtnText,
                                children: 1 == i ? "催还价" : "已催促",
                              }),
                            })),
                      ],
                    }),
                    !x.Z.isEmptyArray(t) &&
                      (0, D.tZ)(m.View, { style: G.hLine }),
                    !x.Z.isEmptyArray(t) &&
                      t.map(function (e, t) {
                        return (0,
                        D.BX)(m.View, { style: { display: "flex", flexDirection: "row", alignItems: "center" }, children: [(0, D.tZ)(m.Image, { style: G.noticeImage, src: null == e ? void 0 : e.icon }), (0, D.tZ)(m.Text, { style: G.noticeText, children: null == e ? void 0 : e.text })] }, "tip" + t);
                      }),
                  ],
                }),
              });
            }),
            G = (0, y.lW)({
              container: {
                marginLeft: 8,
                marginRight: 8,
                display: "flex",
                marginTop: 14,
              },
              couponImage: { width: 18, height: 18, marginRight: 6 },
              couponText: { fontSize: 12, color: "#730303" },
              urgeContainer: {
                backgroundColor: "#fff",
                borderRadius: 12,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 13,
                paddingBottom: 13,
              },
              hLine: {
                height: 0.5,
                backgroundColor: "rgba(0,0,0,0.05)",
                marginTop: 15,
                marginBottom: 14,
              },
              noticeImage: { width: 18, height: 18, marginRight: 6 },
              noticeText: { fontSize: 12, color: W.Z.grey_22 },
              urgeBtn: {
                borderRadius: 9,
                height: 34,
                width: 76,
                borderWidth: 1,
                marginTop: 3,
                borderColor: W.Z.mainColor,
                borderStyle: "solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              urgeBtnText: {
                fontSize: 14,
                color: W.Z.mainColor,
                fontWeight: "600",
              },
              title: { fontSize: 16, color: W.Z.grey_22, fontWeight: "500" },
              rmb: {
                fontSize: 14,
                color: W.Z.priceColor,
                fontWeight: "500",
                fontFamily: (0, y.QQ)(),
              },
              priceText: {
                fontSize: 18,
                color: W.Z.priceColor,
                fontWeight: "500",
                fontFamily: (0, y.QQ)(),
              },
              subTitle: {
                fontSize: 12,
                color: W.Z.grey_99,
                marginTop: 6,
                marginRight: 15,
              },
              rightArrow: { fontSize: 12, color: "#ccc" },
            }),
            L = g.default.memo(function (e) {
              var t = e.grabOrderDetail,
                i = e.togglePriceInfo,
                n = e.goFlightSelect,
                r = e.orderNumber;
              return (0, D.BX)(m.View, {
                style: O.container,
                children: [
                  (0, D.tZ)(m.Text, { style: O.title, children: "帮还价详情" }),
                  (0, D.BX)(m.View, {
                    children: [
                      (0, D.BX)(m.View, {
                        style: O.itemContainer,
                        children: [
                          (0, D.tZ)(m.Text, {
                            style: O.name,
                            children: "航程",
                          }),
                          (0, D.tZ)(m.Text, {
                            style: O.info,
                            children: ""
                              .concat(t.departureCityName, " - ")
                              .concat(t.arrivalCityName),
                          }),
                        ],
                      }),
                      (0, D.BX)(m.View, {
                        style: O.itemContainer,
                        children: [
                          (0, D.tZ)(m.Text, {
                            style: O.name,
                            children: "出发日期",
                          }),
                          (0, D.tZ)(m.Text, {
                            style: O.info,
                            children: (function (e) {
                              return e
                                .map(function (e) {
                                  return p()(e).format("MM-DD");
                                })
                                .join("，");
                            })(t.departureDateList),
                          }),
                        ],
                      }),
                      1 == (null == t ? void 0 : t.surprisedGrabOrderType)
                        ? (0, D.BX)(m.View, {
                            style: O.itemContainer,
                            children: [
                              (0, D.tZ)(m.Text, {
                                style: O.name,
                                children: "航班号",
                              }),
                              (0, D.tZ)(m.Text, {
                                style: O.info,
                                children:
                                  null == t
                                    ? void 0
                                    : t.otaSurprisedGrabFlightNo,
                              }),
                            ],
                          })
                        : (0, D.BX)(m.View, {
                            style: O.itemContainer,
                            children: [
                              (0, D.tZ)(m.Text, {
                                style: O.name,
                                children: "航班偏好",
                              }),
                              (0, D.BX)(m.Text, {
                                style: O.info,
                                children: [
                                  "已选择",
                                  0 == t.specifiedFlightCount
                                    ? "全部"
                                    : t.specifiedFlightCount + "个",
                                  "航班",
                                ],
                              }),
                              (null == t ? void 0 : t.specifiedFlightCount) >
                                0 &&
                                (0, D.BX)(m.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  },
                                  id: "AMAS",
                                  onClick: n,
                                  children: [
                                    (0, D.tZ)(m.Text, {
                                      style: O.rightTips,
                                      children: "详情",
                                    }),
                                    (0, D.tZ)(S.Z, {
                                      style: O.rightArrow,
                                      children: "󰲧",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                      (0, D.BX)(m.View, {
                        style: O.itemContainer,
                        children: [
                          (0, D.tZ)(m.Text, {
                            style: O.name,
                            children: "乘机人",
                          }),
                          (0, D.tZ)(m.View, {
                            style: { display: "flex", flexDirection: "column" },
                            children: t.passengers.map(function (e, t) {
                              return (0,
                              D.tZ)(m.Text, { style: (0, z.Z)((0, z.Z)({}, O.info), { marginTop: 0 != t ? 6 : 0 }), children: e.passengerName + " " + e.identityNo }, e.passengerName + t);
                            }),
                          }),
                        ],
                      }),
                      (0, D.BX)(m.View, {
                        style: O.itemContainer,
                        children: [
                          (0, D.tZ)(m.Text, {
                            style: O.name,
                            children: "手机号",
                          }),
                          (0, D.tZ)(m.Text, {
                            style: O.info,
                            children: t.contactPhone,
                          }),
                        ],
                      }),
                      (0, D.BX)(m.View, {
                        style: O.itemContainer,
                        children: [
                          (0, D.tZ)(m.Text, {
                            style: O.name,
                            children: "订单金额",
                          }),
                          (0, D.tZ)(m.Text, {
                            style: O.info,
                            children: (function () {
                              var e,
                                i,
                                n,
                                r,
                                o,
                                l = "¥".concat(
                                  null == t ||
                                    null === (e = t.orderPriceDetail) ||
                                    void 0 === e
                                    ? void 0
                                    : e.totalPrice
                                );
                              return (
                                (null == t ||
                                null === (i = t.orderPriceDetail) ||
                                void 0 === i
                                  ? void 0
                                  : i.refundableAmount) > 0 &&
                                  (l += "（可退".concat(
                                    null == t ||
                                      null === (r = t.orderPriceDetail) ||
                                      void 0 === r
                                      ? void 0
                                      : r.refundableAmount,
                                    "元）"
                                  )),
                                (null == t ||
                                null === (n = t.orderPriceDetail) ||
                                void 0 === n
                                  ? void 0
                                  : n.refundedAmount) > 0 &&
                                  (l += "（已退".concat(
                                    null == t ||
                                      null === (o = t.orderPriceDetail) ||
                                      void 0 === o
                                      ? void 0
                                      : o.refundedAmount,
                                    "元）"
                                  )),
                                l
                              );
                            })(),
                          }),
                          (0, D.BX)(m.View, {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            },
                            id: "AMAT",
                            onClick: i,
                            children: [
                              (0, D.tZ)(m.Text, {
                                style: O.rightTips,
                                children: "明细",
                              }),
                              (0, D.tZ)(S.Z, {
                                style: O.rightArrow,
                                children: "󰲧",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, D.BX)(m.View, {
                        style: O.itemContainer,
                        children: [
                          (0, D.tZ)(m.Text, {
                            style: O.name,
                            children: "订单号",
                          }),
                          (0, D.tZ)(m.Text, { style: O.info, children: r }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            O = (0, y.lW)({
              container: {
                marginLeft: 8,
                marginRight: 8,
                display: "flex",
                flexDirection: "column",
                marginTop: 8,
                backgroundColor: "white",
                borderRadius: 12,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 13,
                paddingBottom: 16,
              },
              title: { fontSize: 16, color: W.Z.grey_22, fontWeight: "500" },
              rmb: { fontSize: 14, color: W.Z.priceColor, fontWeight: "500" },
              priceText: {
                fontSize: 18,
                color: W.Z.priceColor,
                fontWeight: "500",
              },
              subTitle: {
                fontSize: 12,
                color: W.Z.grey_99,
                marginTop: 6,
                marginRight: 15,
              },
              itemContainer: {
                display: "flex",
                flexDirection: "row",
                marginTop: 14,
              },
              name: { fontSize: 13, color: W.Z.grey_99, minWidth: 72 },
              info: { fontSize: 13, color: W.Z.grey_22, flex: 1 },
              rightTips: { fontSize: 12, color: W.Z.grey_99 },
              rightArrow: { fontSize: 10, color: "#ccc" },
            }),
            Y = i(94262),
            H = Z.Z.isTieyou
              ? "http://images3.c-ctrip.com/ztrip/img/chuxingbaozheng_shy_ty@3x.png"
              : "http://images3.c-ctrip.com/ztrip/img/chuxingbaozheng_shy_zx@3x.png",
            q =
              (Z.Z.isTieyou,
              function (e) {
                (0, Y.Z)(e);
                return (0, D.tZ)(m.View, {
                  style: E.container,
                  id: "AMAU",
                  onClick: function () {
                    (0, I.h8)();
                  },
                  children: (0, D.tZ)(m.Image, { src: H, style: E.sloganImg }),
                });
              }),
            Q = g.default.memo(q),
            E = (0, y.lW)({
              container: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 30,
              },
              sloganImg: { width: (56 / 180) * 816, height: 56 },
            }),
            U = g.default.memo(function (e) {
              return (0, Y.Z)(e), (0, D.tZ)(m.View, {});
            }),
            K = g.default.memo(function (e) {
              var t = e.flightInfo,
                i = e.orderNumber,
                n = e.isGoXPage,
                r = e.isPay,
                o = e.lastPayTime,
                l = e.surprisedGrabOrderDetail,
                a = (0, g.useState)(p()(o).diff(p()(), "s")),
                c = (0, A.Z)(a, 2),
                s = c[0],
                d = c[1];
              if (!t) return null;
              var u = t.airCompanyName,
                f = t.airCompanyIcon,
                y = t.flightNumber,
                Z = t.departCityName,
                b = t.arriveCityName,
                w = t.departAirportNameShort,
                T = t.arriveAirportNameShort,
                v = t.departTerminal,
                S = t.arriveTerminal,
                B = t.departDateTime,
                V = t.arriveDateTime,
                z = t.price,
                X = function () {
                  if (n) {
                    var e = {
                      frompage: "surpriseGrabDetail",
                      departureCityCode: null == t ? void 0 : t.departCityCode,
                      arrivalCityCode: null == t ? void 0 : t.arriveCityCode,
                      fromFlightNumber: y,
                      departureCityName: Z,
                      arrivalCityName: b,
                      departDate: B,
                      source: 2048,
                    };
                    (0, I.Tl)(e);
                  } else (0, I.Cz)(i);
                },
                N = function () {
                  (0, C.aP)({ data: { orderNumber: i } }).then(function (e) {
                    1 == (null == e ? void 0 : e.resultCode)
                      ? (0, I.ce)(
                          { orderNumber: i, goodsId: e.data.goodsId },
                          function () {
                            console.log("成功"),
                              setTimeout(function () {
                                (0, I.Xb)(i, !0);
                              }, 1e3);
                          }
                        )
                      : h().showToast({
                          title:
                            (null == e ? void 0 : e.resultMessage) ||
                            "网络异常，请稍候再试",
                        });
                  });
                },
                k = function () {
                  console.log(s);
                  var e = "";
                  return (
                    s <= 0 ||
                      (parseInt(s / 60) > 0 &&
                        (e += "".concat(parseInt(s / 60), "分")),
                      (e += "".concat(s % 60, "秒"))),
                    e
                  );
                };
              return (0, D.BX)(m.View, {
                style: J.container,
                children: [
                  (0, D.BX)(m.View, {
                    style: J.firstContainer,
                    children: [
                      (0, D.BX)(m.View, {
                        style: J.timeContainer,
                        children: [
                          (0, D.BX)(m.View, {
                            style: { display: "flex", flexDirection: "column" },
                            children: [
                              (0, D.tZ)(m.Text, {
                                style: J.timeText,
                                children: p()(B).format("HH:mm"),
                              }),
                              (0, D.tZ)(m.Text, {
                                style: J.airportText,
                                children: w + (v || ""),
                              }),
                            ],
                          }),
                          (0, D.tZ)(m.View, {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            },
                            children: (0, D.tZ)(m.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/rn_flight_support/icon_flight_line.png",
                              style: J.line,
                            }),
                          }),
                          (0, D.BX)(m.View, {
                            style: { display: "flex", flexDirection: "column" },
                            children: [
                              (0, D.tZ)(m.Text, {
                                style: J.timeText,
                                children: p()(V).format("HH:mm"),
                              }),
                              (0, D.tZ)(m.Text, {
                                style: J.airportText,
                                children: T + (S || ""),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, D.BX)(m.View, {
                        style: {
                          display: "flex",
                          flex: 1,
                          flexDirection: "column",
                          position: "relative",
                        },
                        children: [
                          (function () {
                            var e = x.Z.getDayDiff(
                              p()(B).format("YYYY-MM-DD"),
                              p()(V).format("YYYY-MM-DD")
                            );
                            return (0, D.tZ)(m.View, {
                              style: { position: "absolute", left: 2 },
                              children: (0, D.tZ)(m.Text, {
                                style: J.datText,
                                children: e && e > 0 ? "+" + e + "天" : "",
                              }),
                            });
                          })(),
                          (0, D.tZ)(m.View, {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-end",
                              alignItems: "center",
                            },
                            children: (0, D.BX)(m.Text, {
                              style: J.rmb,
                              children: [
                                "￥",
                                (0, D.tZ)(m.Text, {
                                  style: J.price,
                                  children: z,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, D.tZ)(m.View, {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    },
                    children: (0, D.BX)(m.View, {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      },
                      children: [
                        (0, D.BX)(m.View, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          },
                          children: [
                            (0, D.tZ)(m.Image, { src: f, style: J.airIcon }),
                            (0, D.tZ)(m.Text, {
                              style: J.airLineText,
                              children: u + y,
                            }),
                          ],
                        }),
                        (0, D.tZ)(m.View, { style: J.vDivideLine }),
                        (0, D.tZ)(m.Text, {
                          style: J.airLineText,
                          children:
                            p()(B).format("MM月DD日") +
                            " " +
                            x.Z.getWeekDayDesc(p()(B).format("YYYY-MM-DD")),
                        }),
                      ],
                    }),
                  }),
                  r
                    ? (setTimeout(function () {
                        d(s - 1), s <= 0 && l();
                      }, 1e3),
                      (0, D.BX)(m.View, {
                        style: J.bottomBtn,
                        id: "goPay",
                        onClick: N,
                        children: [
                          (0, D.tZ)(m.Text, {
                            style: J.bottomBtnText,
                            children: "立即支付",
                          }),
                          (0, D.BX)(m.Text, {
                            style: J.bottomBtnSubText,
                            children: ["剩余", k()],
                          }),
                        ],
                      }))
                    : (0, D.tZ)(m.View, {
                        style: J.bottomBtn,
                        id: "AMAW",
                        onClick: X,
                        children: (0, D.tZ)(m.Text, {
                          style: J.bottomBtnText,
                          children: n ? "去预订" : "查看订单详情",
                        }),
                      }),
                ],
              });
            }),
            J = (0, y.lW)({
              container: {
                display: "flex",
                flexDirection: "column",
                marginLeft: 16,
                marginRight: 16,
                marginTop: 12,
                backgroundColor: W.Z.white,
              },
              timeContainer: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              timeText: {
                fontSize: 23,
                lineHeight: 24,
                color: W.Z.grey_33,
                fontFamily: (0, y.QQ)(),
              },
              airportText: {
                fontSize: 12,
                color: W.Z.grey_33,
                lineHeight: 16,
                marginTop: 2,
              },
              airIcon: { width: 13, height: 12, marginRight: 1 },
              line: {
                width: 40,
                height: 3,
                marginLeft: 16,
                marginRight: 18,
                marginBottom: 17,
              },
              firstContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 11,
              },
              datText: { color: W.Z.grey_33, fontSize: 11 },
              rmb: {
                fontSize: 14,
                color: W.Z.priceColor,
                fontFamily: (0, y.QQ)(),
              },
              price: {
                fontSize: 24,
                lineHeight: 24,
                color: W.Z.priceColor,
                fontFamily: (0, y.QQ)(),
              },
              vDivideLine: {
                backgroundColor: "#d8d8d8",
                height: 7,
                width: 0.5,
                marginLeft: 5,
                marginRight: 5,
              },
              airLineText: { fontSize: 12, color: W.Z.grey_99, lineHeight: 16 },
              bottomBtn: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: 44,
                borderRadius: 12,
                backgroundColor: W.Z.priceColor,
                marginTop: 15,
              },
              bottomBtnText: {
                fontSize: 17,
                color: W.Z.white,
                fontWeight: "600",
              },
              bottomBtnSubText: {
                color: "#ffffff",
                fontSize: 10,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
              },
            }),
            $ = g.default.memo(function (e) {
              var t = e.flightInfo,
                i = e.orderNumber,
                n = e.isGoXPage,
                r = e.hasCoupon,
                o = e.isPay,
                l = e.lastPayTime,
                a = e.surprisedGrabOrderDetail;
              return t
                ? (0, D.BX)(m.View, {
                    style: (0, z.Z)(
                      (0, z.Z)({}, ee.container),
                      {},
                      { marginTop: r ? 8 : 14 }
                    ),
                    children: [
                      n && (0, D.tZ)(U, {}),
                      (0, D.tZ)(K, {
                        flightInfo: t,
                        orderNumber: i,
                        isGoXPage: n,
                        isPay: o,
                        lastPayTime: l,
                        surprisedGrabOrderDetail: a,
                      }),
                    ],
                  })
                : null;
            }),
            ee = (0, y.lW)({
              container: {
                display: "flex",
                flexDirection: "column",
                marginTop: 8,
                marginLeft: 8,
                marginRight: 8,
                backgroundColor: W.Z.white,
                borderRadius: 12,
                paddingBottom: 15,
              },
              sloganImg: { width: (56 / 180) * 816, height: 56 },
            }),
            te = i(46628),
            ie = g.default.memo(function (e) {
              var t = e.isShowPriceInfo,
                i = e.togglePriceInfo,
                n = e.priceDetail;
              return t && n
                ? (0, D.BX)(te.Z, {
                    style: ne.modalContainer,
                    children: [
                      (0, D.tZ)(m.View, {
                        style: { flex: 1 },
                        id: "AMAP",
                        onClick: i,
                      }),
                      (0, D.tZ)(m.View, {
                        style: ne.container,
                        children: (0, D.BX)(m.View, {
                          style: ne.content,
                          children: [
                            (0, D.tZ)(m.Text, {
                              style: ne.title,
                              children: "价格明细",
                            }),
                            (0, D.tZ)(m.View, {
                              style: ne.closeIconView,
                              id: "AMAQ",
                              onClick: i,
                              children: (0, D.tZ)(S.Z, {
                                style: ne.closeIcon,
                                children: "󰳭",
                              }),
                            }),
                            (0, D.BX)(m.View, {
                              children: [
                                (0, D.BX)(m.View, {
                                  style: ne.itemTitleContainer,
                                  children: [
                                    (0, D.tZ)(m.Text, {
                                      style: ne.titleName,
                                      children: "总价",
                                    }),
                                    (0, D.BX)(m.Text, {
                                      style: ne.titleName,
                                      children: ["￥", n.totalPrice],
                                    }),
                                  ],
                                }),
                                (n.priceDetailItems || []).map(function (e, t) {
                                  return (
                                    e.count > 0 &&
                                    0 != e.amount &&
                                    (0, D.BX)(
                                      m.View,
                                      {
                                        children: [
                                          (0, D.BX)(m.View, {
                                            style: ne.itemTitleContainer,
                                            children: [
                                              (0, D.tZ)(m.Text, {
                                                style: ne.priceDesc,
                                                children: e.title,
                                              }),
                                              e.amount < 0
                                                ? (0, D.BX)(m.Text, {
                                                    style: ne.priceDesc,
                                                    children: [
                                                      "- ￥",
                                                      Math.abs(e.amount),
                                                      "x",
                                                      e.count,
                                                      e.unit,
                                                    ],
                                                  })
                                                : (0, D.BX)(m.Text, {
                                                    style: ne.priceDesc,
                                                    children: [
                                                      "￥",
                                                      e.amount,
                                                      "x",
                                                      e.count,
                                                      e.unit,
                                                    ],
                                                  }),
                                            ],
                                          }),
                                          !x.Z.isEmptyArray(
                                            null == e ? void 0 : e.detail
                                          ) &&
                                            e.detail.map(function (e, t) {
                                              return (0,
                                              D.BX)(m.View, { style: ne.itemContainer, children: [(0, D.tZ)(m.Text, { style: ne.priceDesc, children: e.name }), (0, D.BX)(m.Text, { style: ne.priceDesc, children: ["￥", e.price] })] }, "detail" + t);
                                            }),
                                        ],
                                      },
                                      "ticket" + t
                                    )
                                  );
                                }),
                                (null == n ? void 0 : n.refundableAmount) > 0 &&
                                  (0, D.tZ)(m.View, {
                                    style: { marginTop: 10 },
                                    children: (0, D.BX)(m.View, {
                                      style: ne.itemContainer,
                                      children: [
                                        (0, D.tZ)(m.Text, {
                                          style: ne.titleName,
                                          children: "可退金额",
                                        }),
                                        (0, D.tZ)(m.Text, {
                                          style: (0, z.Z)(
                                            (0, z.Z)({}, ne.titleName),
                                            { color: W.Z.priceColor }
                                          ),
                                          children: "- ¥".concat(
                                            null == n
                                              ? void 0
                                              : n.refundableAmount
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                (null == n ? void 0 : n.refundedAmount) > 0 &&
                                  (0, D.tZ)(m.View, {
                                    style: { marginTop: 10 },
                                    children: (0, D.BX)(m.View, {
                                      style: ne.itemContainer,
                                      children: [
                                        (0, D.tZ)(m.Text, {
                                          style: ne.titleName,
                                          children: "已退金额",
                                        }),
                                        (0, D.tZ)(m.Text, {
                                          style: (0, z.Z)(
                                            (0, z.Z)({}, ne.titleName),
                                            { color: W.Z.priceColor }
                                          ),
                                          children: "- ¥".concat(
                                            null == n
                                              ? void 0
                                              : n.refundedAmount
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : null;
            }),
            ne = (0, y.lW)({
              modalContainer: {
                position: "absolute",
                zIndex: 100,
                backgroundColor: "rgba(0,0,0,0.65)",
                width: "100%",
                height: "100%",
              },
              container: {
                position: "absolute",
                width: "100%",
                zIndex: 1001,
                bottom: 0,
                backgroundColor: "white",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              content: {
                backgroundColor: "white",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                padding: 20,
                paddingTop: 10,
                marginBottom: 30,
                display: "flex",
                flexDirection: "column",
              },
              title: {
                fontSize: 18,
                lineHeight: 25,
                color: W.Z.grey_33,
                textAlign: "center",
                fontWeight: "600",
                marginBottom: 20,
              },
              closeImage: {
                position: "absolute",
                top: 13,
                right: 15,
                width: 22,
                height: 22,
                zIndex: 1002,
              },
              closeIconView: {
                position: "absolute",
                top: 16,
                right: 16,
                zIndex: 1002,
              },
              closeIcon: { fontSize: 23, color: "#ccc" },
              itemTitleContainer: {
                marginBottom: 4,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              },
              itemContainer: {
                marginTop: 2,
                marginBottom: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              titleName: { fontSize: 15, color: W.Z.grey_33 },
              priceDesc: { fontSize: 12, color: W.Z.grey_99 },
            }),
            re = function (e) {
              var t, i, n, r, o, l;
              return {
                airCompanyName:
                  null == e ||
                  null === (t = e.sequences) ||
                  void 0 === t ||
                  null === (i = t[0]) ||
                  void 0 === i
                    ? void 0
                    : i.airName,
                airCompanyIcon:
                  null == e ||
                  null === (n = e.sequences) ||
                  void 0 === n ||
                  null === (r = n[0]) ||
                  void 0 === r
                    ? void 0
                    : r.airIcon,
                flightNumber:
                  null == e ||
                  null === (o = e.sequences) ||
                  void 0 === o ||
                  null === (l = o[0]) ||
                  void 0 === l
                    ? void 0
                    : l.flightNo,
                departCityName: null == e ? void 0 : e.dptName,
                departCityCode: null == e ? void 0 : e.dptCode,
                arriveCityName: null == e ? void 0 : e.arrName,
                arriveCityCode: null == e ? void 0 : e.arrCode,
                departAirportNameShort: null == e ? void 0 : e.dptAName,
                arriveAirportNameShort: null == e ? void 0 : e.arrAName,
                departTerminal: null == e ? void 0 : e.dptTrm,
                arriveTerminal: null == e ? void 0 : e.arrTrm,
                departDateTime: null == e ? void 0 : e.dptTime,
                arriveDateTime: null == e ? void 0 : e.arrTime,
                price: null == e ? void 0 : e.apr,
              };
            },
            oe = i(90098),
            le = h().getSystemInfoSync(),
            ae = g.default.memo(function (e) {
              var t = e.isShow,
                i = e.toggleShow,
                n = e.cancelOrder,
                r = e.surprisedGrabOrderType;
              return t
                ? (0, D.BX)(te.Z, {
                    style: ce.modalContainer,
                    children: [
                      (0, D.tZ)(m.View, {
                        style: { flex: 1 },
                        id: "AMAJ",
                        onClick: i,
                      }),
                      (0, D.BX)(m.View, {
                        style: ce.container,
                        children: [
                          (0, D.tZ)(m.View, {
                            style: ce.closeIconView,
                            id: "AMAK",
                            onClick: i,
                            children: (0, D.tZ)(S.Z, {
                              style: ce.closeIcon,
                              children: "󰳭",
                            }),
                          }),
                          (0, D.BX)(m.View, {
                            style: { display: "flex", flexDirection: "column" },
                            children: [
                              (0, D.tZ)(m.Image, {
                                style: ce.bg,
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/baby/icon_qinzi_bg@3x.png",
                              }),
                              (0, D.tZ)(m.Image, {
                                style: ce.titleImage,
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/peitu_quxiao.png",
                              }),
                            ],
                          }),
                          (0, D.tZ)(m.Text, {
                            style: ce.title,
                            children: "正在协商价格中，确认取消吗？",
                          }),
                          (0, D.tZ)(m.View, {
                            style: ce.descView,
                            children: (0, D.BX)(m.Text, {
                              style: ce.content,
                              children: [
                                "再等等，就快要成功了，平台承诺支付后",
                                (0, D.tZ)(m.Text, {
                                  style: { color: W.Z.mainColor },
                                  children: "".concat(
                                    1 == r ? "半" : "24",
                                    "小时内"
                                  ),
                                }),
                                "返回结果",
                              ],
                            }),
                          }),
                          (0, D.BX)(m.View, {
                            style: ce.bottomBtnContainer,
                            id: "AMAM",
                            onClick: n,
                            children: [
                              (0, D.tZ)(m.View, {
                                style: ce.otherBtn,
                                children: (0, D.tZ)(m.Text, {
                                  style: ce.otherBtnText,
                                  children: "狠心取消",
                                }),
                              }),
                              (0, D.tZ)(m.View, {
                                style: ce.bookBtn,
                                id: "AMAN",
                                onClick: i,
                                children: (0, D.tZ)(m.Text, {
                                  style: ce.bookBtnText,
                                  children: "继续还价",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : null;
            }),
            ce = (0, y.lW)({
              modalContainer: {
                position: "absolute",
                zIndex: 100,
                backgroundColor: "rgba(0,0,0,0.65)",
                width: "100%",
                height: "100%",
              },
              container: {
                position: "absolute",
                width: "100%",
                zIndex: 1001,
                bottom: 0,
                backgroundColor: "white",
                paddingBottom: oe.Z.isIPhoneX ? 34 : 10,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                display: "flex",
                flexDirection: "column",
              },
              closeImage: {
                position: "absolute",
                top: 10,
                right: 10,
                width: 30,
                height: 30,
                zIndex: 1002,
              },
              closeIconView: {
                position: "absolute",
                top: 16,
                right: 16,
                zIndex: 1002,
              },
              closeIcon: { fontSize: 23, color: "#ccc" },
              bg: {
                width: le.windowWidth,
                height: 148,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              titleImage: {
                width: 280,
                height: 148,
                position: "absolute",
                top: 0,
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
              },
              title: {
                marginTop: 2,
                fontSize: 20,
                color: W.Z.grey_22,
                fontWeight: "500",
                textAlign: "center",
              },
              descView: {
                marginTop: 12,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 20,
                paddingRight: 20,
              },
              content: {
                fontSize: 14,
                lineHeight: 20,
                color: W.Z.grey_66,
                textAlign: "center",
              },
              bottomBtnContainer: {
                marginTop: 22,
                marginBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              },
              bookBtn: {
                width: (le.windowWidth - 32 - 8) / 2,
                height: 44,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                backgroundColor: W.Z.mainColor,
              },
              otherBtn: {
                width: (le.windowWidth - 32 - 8) / 2,
                height: 44,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                backgroundColor: "#F7F7F7",
              },
              otherBtnText: {
                fontSize: 17,
                lineHeight: 21,
                color: W.Z.grey_66,
                fontWeight: "500",
              },
              bookBtnText: {
                fontSize: 17,
                lineHeight: 21,
                color: W.Z.white,
                fontWeight: "500",
              },
            }),
            se =
              (h().getSystemInfoSync(),
              function (e) {
                var t = e.couponInfos;
                return x.Z.isEmptyArray(t)
                  ? null
                  : (0, D.tZ)(m.View, {
                      style: ge.container,
                      children:
                        !x.Z.isEmptyArray(t) &&
                        t.map(function (e, t) {
                          return (0,
                          D.BX)(m.View, { style: ge.couponContainer, id: "AMAO", onClick: I.UT, children: [(0, D.BX)(m.View, { style: { display: "flex", flexDirection: "row", alignItems: "center" }, children: [(0, D.tZ)(m.Image, { style: ge.couponImage, src: e.icon }), (0, D.tZ)(m.Text, { style: ge.couponText, children: e.text })] }), (0, D.tZ)(S.Z, { style: ge.rightArrow, children: "󰲧" })] }, "coupon" + t);
                        }),
                    });
              }),
            de = g.default.memo(se),
            ge = (0, y.lW)({
              container: {
                marginLeft: 8,
                marginRight: 8,
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginTop: 14,
              },
              couponContainer: {
                height: 40,
                backgroundColor: "rgba(250,207,180, 0.3)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 16,
                paddingRight: 16,
                borderRadius: 12,
              },
              couponImage: { width: 18, height: 18, marginRight: 6 },
              couponText: { fontSize: 12, color: "#730303" },
              urgeContainer: {
                backgroundColor: "#fff",
                borderRadius: 12,
                marginTop: 8,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 13,
                paddingBottom: 13,
              },
              hLine: {
                height: 0.5,
                backgroundColor: "rgba(0,0,0,0.05)",
                marginTop: 15,
                marginBottom: 14,
              },
              noticeImage: { width: 18, height: 18, marginRight: 6 },
              noticeText: { fontSize: 12, color: W.Z.grey_22 },
              urgeBtn: {
                borderRadius: 9,
                height: 34,
                width: 76,
                borderWidth: 1,
                marginTop: 3,
                borderColor: W.Z.mainColor,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              urgeBtnText: {
                fontSize: 14,
                color: W.Z.mainColor,
                fontWeight: "600",
              },
              title: { fontSize: 16, color: W.Z.grey_22, fontWeight: "500" },
              rmb: {
                fontSize: 14,
                color: W.Z.priceColor,
                fontWeight: "500",
                fontFamily: (0, y.QQ)(),
              },
              priceText: {
                fontSize: 18,
                color: W.Z.priceColor,
                fontWeight: "500",
                fontFamily: (0, y.QQ)(),
              },
              subTitle: {
                fontSize: 12,
                color: W.Z.grey_99,
                marginTop: 6,
                marginRight: 15,
              },
              rightArrow: { fontSize: 12, color: "#ccc" },
            }),
            ue = h().getSystemInfoSync(),
            he =
              (0, w.h)()(
                (n = (function (e) {
                  (0, c.Z)(i, e);
                  var t = (0, s.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, o.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, d.Z)((0, a.Z)(n), "orderNumber", void 0),
                      (0, d.Z)((0, a.Z)(n), "allFlights", void 0),
                      (0, d.Z)((0, a.Z)(n), "selectFlights", void 0),
                      (0, d.Z)((0, a.Z)(n), "timer", void 0),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "pageId",
                        Z.Z.isTieyou ? "10650079197" : "10650079195"
                      ),
                      (0, d.Z)((0, a.Z)(n), "init", function (e) {
                        n.surprisedGrabOrderDetail(e),
                          (n.timer = setInterval(function () {
                            n.surprisedGrabOrderDetail(e);
                          }, 5e3));
                      }),
                      (0, d.Z)((0, a.Z)(n), "clearTimer", function () {
                        clearInterval(n.timer), (n.timer = null);
                      }),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "surprisedGrabOrderDetail",
                        function (e) {
                          (0, b.Q)(),
                            (0, C.yX)({
                              data: {
                                orderNumber: null != e ? e : n.orderNumber,
                              },
                            })
                              .then(function (e) {
                                var t, i, r, o, l, a;
                                1 === e.resultCode && null != e && e.data
                                  ? (n.setState(
                                      {
                                        grabOrderDetail:
                                          null == e ? void 0 : e.data,
                                        isCountdown:
                                          0 ==
                                            (null == e ||
                                            null === (t = e.data) ||
                                            void 0 === t
                                              ? void 0
                                              : t.grabState) &&
                                          (null == e ||
                                          null === (i = e.data) ||
                                          void 0 === i
                                            ? void 0
                                            : i.surprisedGrabFinishTime) &&
                                          p()(
                                            null == e ||
                                              null === (r = e.data) ||
                                              void 0 === r
                                              ? void 0
                                              : r.surprisedGrabFinishTime
                                          ).diff(p()(), "s") > 0,
                                      },
                                      function () {
                                        n.state.isCountdown || n.clearTimer();
                                      }
                                    ),
                                    (3 !=
                                      (null == e ||
                                      null === (o = e.data) ||
                                      void 0 === o
                                        ? void 0
                                        : o.grabState) &&
                                      4 !=
                                        (null == e ||
                                        null === (l = e.data) ||
                                        void 0 === l
                                          ? void 0
                                          : l.grabState)) ||
                                    null == e ||
                                    null === (a = e.data) ||
                                    void 0 === a ||
                                    !a.lowestPriceDate
                                      ? (0, b.Z)()
                                      : n.getLowestFlight(e.data))
                                  : (h().showToast({
                                      title: "网络异常，请稍候再试",
                                    }),
                                    (0, b.Z)());
                              })
                              .finally(function () {});
                        }
                      ),
                      (0, d.Z)((0, a.Z)(n), "getLowestFlight", function (e) {
                        (3 != (null == e ? void 0 : e.grabState) &&
                          4 != (null == e ? void 0 : e.grabState)) ||
                          (null != e &&
                            e.lowestPriceDate &&
                            (0, C.I0)({
                              data: {
                                version: 12,
                                source: 0,
                                cacheUsage: 0,
                                hasChild: !1,
                                hasBaby: !1,
                                business: !1,
                                segments: [
                                  {
                                    dptDate:
                                      null == e ? void 0 : e.lowestPriceDate,
                                    dptCode: e.departureCityCode,
                                    arrCode: e.arrivalCityCode,
                                  },
                                ],
                              },
                            })
                              .then(function (e) {
                                var t;
                                if (
                                  (console.log(e),
                                  1 == (null == e ? void 0 : e.resultCode) &&
                                    null != e &&
                                    null !== (t = e.data) &&
                                    void 0 !== t &&
                                    t.singles)
                                ) {
                                  var i = e.data.singles;
                                  i.sort(function (e, t) {
                                    return e.apr - t.apr;
                                  }),
                                    console.log("lowestflight", i[0]),
                                    n.setState({ lowestFlight: re(i[0]) });
                                }
                              })
                              .catch(function (e) {
                                console.log(e);
                              })
                              .finally(function () {
                                (0, b.Z)();
                              }));
                      }),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "urgeGrab",
                        x.Z.throttle(function () {
                          (0, C.kH)({
                            data: { orderNumber: n.orderNumber },
                          }).then(function (e) {
                            console.log(e),
                              1 === e.resultCode
                                ? n.surprisedGrabOrderDetail()
                                : h().showToast({
                                    title: "网络异常，请稍候再试",
                                  });
                          }),
                            n.ubtTrace("FltDickerDetail_Urge_Click", {
                              pageid: n.pageId,
                            });
                        })
                      ),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "cancelOrder",
                        x.Z.throttle(function () {
                          n.setState({ isShowCancelModal: !1 }),
                            (0, C.Kt)({
                              data: { orderNumber: n.orderNumber },
                            }).then(function (e) {
                              console.log(e),
                                1 === e.resultCode
                                  ? n.surprisedGrabOrderDetail()
                                  : h().showToast({
                                      title: "网络异常，请稍候再试",
                                    });
                            });
                        })
                      ),
                      (0, d.Z)((0, a.Z)(n), "togglePriceInfo", function () {
                        n.setState({
                          isShowPriceInfo: !n.state.isShowPriceInfo,
                        });
                      }),
                      (0, d.Z)((0, a.Z)(n), "goFlightSelect", function () {
                        x.Z.isEmptyArray(n.allFlights)
                          ? ((0, b.Q)(),
                            (0, C.rL)({ data: { orderNumber: n.orderNumber } })
                              .then(function (e) {
                                if (
                                  1 != (null == e ? void 0 : e.resultCode) ||
                                  x.Z.isEmptyArray(
                                    null == e ? void 0 : e.flightDateDetailInfos
                                  )
                                )
                                  h().showToast({
                                    title: "暂无数据，请稍后再试",
                                  });
                                else {
                                  var t = (function (e) {
                                    var t = [];
                                    return (
                                      e.map(function (e) {
                                        var i = [];
                                        e.flightDetailInfos.map(function (e) {
                                          i.push({
                                            dptTime: e.departDateTime,
                                            dptAName: e.departAirportNameShort,
                                            dptTrm: e.departTerminal,
                                            arrTime: e.arriveDateTime,
                                            arrAName: e.arriveAirportNameShort,
                                            arrTrm: e.arriveTerminal,
                                            costTime: "",
                                            sequences: [
                                              {
                                                airIcon: e.airCompanyIcon,
                                                airName: e.airCompanyName,
                                                flightNo: e.flightNumber,
                                                cftn: e.craftName,
                                                cfts: e.craftSize,
                                              },
                                            ],
                                          });
                                        }),
                                          t.push({
                                            departureDate: e.departureDate,
                                            flights: i,
                                          });
                                      }),
                                      { allFlights: t }
                                    );
                                  })(
                                    null == e ? void 0 : e.flightDateDetailInfos
                                  );
                                  (n.allFlights = t.allFlights),
                                    n.navigateTo({
                                      url: "/pages/taroCRN/flight/pages/surpriseGrabFlightSelect/index",
                                      data: {
                                        selectFlights: null,
                                        allFlights: n.allFlights,
                                        isShowType: !0,
                                      },
                                    });
                                }
                                console.log(e);
                              })
                              .finally(function () {
                                (0, b.Z)();
                              }))
                          : n.navigateTo({
                              url: "/pages/taroCRN/flight/pages/surpriseGrabFlightSelect/index?",
                              data: {
                                selectFlights: null,
                                allFlights: n.allFlights,
                                isShowType: !0,
                              },
                            });
                      }),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "toggleShowCancelModal",
                        function () {
                          n.setState({
                            isShowCancelModal: !n.state.isShowCancelModal,
                          });
                        }
                      ),
                      (n.state = {
                        grabOrderDetail: null,
                        isShowPriceInfo: !1,
                        isShowCancelModal: !1,
                        lowestFlight: null,
                        isCountdown: !1,
                      }),
                      (n.allFlights = null),
                      (n.selectFlights = null),
                      (n.timer = null),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, u.getCurrentInstance)();
                          if (e && e.router && e.router.params) {
                            var t = e.router.params,
                              i = t.orderNumber,
                              n = t.disableDragBack,
                              r = void 0 !== n && n;
                            console.log(e.router.params, this.props),
                              (this.orderNumber = i),
                              this.init(i),
                              r && (0, T.GN)();
                          }
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.clearTimer();
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return (
                            console.log("getPageId  " + this.pageId),
                            this.pageId
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.grabOrderDetail,
                            i = e.isShowPriceInfo,
                            n = e.isShowCancelModal,
                            r = e.lowestFlight;
                          return t
                            ? (0, D.BX)(m.View, {
                                style: {
                                  display: "flex",
                                  flex: 1,
                                  backgroundColor: "#f5f5f5",
                                  flexDirection: "column",
                                },
                                children: [
                                  (0, D.tZ)(m.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/shezhiye_bg@3x.png",
                                    style: me.titleBg,
                                  }),
                                  (0, D.tZ)(V, {
                                    isCountdown: this.state.isCountdown,
                                  }),
                                  (0, D.BX)(m.ScrollView, {
                                    contentContainerStyle: {
                                      paddingBottom: 100,
                                    },
                                    style: me.scrollContainer,
                                    scrollY: !0,
                                    children: [
                                      (0, D.tZ)(M, {
                                        title: null == t ? void 0 : t.title,
                                        subTitle:
                                          null == t ? void 0 : t.subTitle,
                                        status:
                                          null == t ? void 0 : t.grabState,
                                        surprisedGrabFinishTime:
                                          null == t
                                            ? void 0
                                            : t.surprisedGrabFinishTime,
                                        surprisedGrabOrderDetail:
                                          this.surprisedGrabOrderDetail,
                                      }),
                                      (0, D.tZ)(de, {
                                        couponInfos:
                                          null == t ? void 0 : t.couponInfos,
                                      }),
                                      (0, D.tZ)(_, {
                                        isShow:
                                          0 ==
                                            (null == t
                                              ? void 0
                                              : t.grabState) ||
                                          1 ==
                                            (null == t ? void 0 : t.grabState),
                                        tips: null == t ? void 0 : t.tips,
                                        hasCoupon: !x.Z.isEmptyArray(
                                          null == t ? void 0 : t.couponInfos
                                        ),
                                        urgeState:
                                          null == t ? void 0 : t.urgeState,
                                        acceptablePrice:
                                          null == t
                                            ? void 0
                                            : t.acceptablePrice,
                                        acceptablePriceRemark:
                                          null == t
                                            ? void 0
                                            : t.acceptablePriceRemark,
                                        urgeGrab: this.urgeGrab,
                                        isCountdown: this.state.isCountdown,
                                      }),
                                      (0, D.tZ)($, {
                                        hasCoupon: !x.Z.isEmptyArray(
                                          null == t ? void 0 : t.couponInfos
                                        ),
                                        orderNumber: this.orderNumber,
                                        flightInfo:
                                          (null == t
                                            ? void 0
                                            : t.flightSegmentInfo) || r,
                                        isGoXPage:
                                          3 ==
                                            (null == t
                                              ? void 0
                                              : t.grabState) ||
                                          4 ==
                                            (null == t ? void 0 : t.grabState),
                                        isPay:
                                          5 ==
                                          (null == t ? void 0 : t.grabState),
                                        lastPayTime:
                                          null == t ? void 0 : t.lastPayTime,
                                        surprisedGrabOrderDetail:
                                          this.surprisedGrabOrderDetail,
                                      }),
                                      (0, D.tZ)(L, {
                                        goFlightSelect: this.goFlightSelect,
                                        grabOrderDetail: t,
                                        togglePriceInfo: this.togglePriceInfo,
                                        orderNumber: this.orderNumber,
                                      }),
                                      0 == (null == t ? void 0 : t.grabState) &&
                                        (0, D.tZ)(m.View, {
                                          style: me.cancelBtn,
                                          id: "AMAY",
                                          onClick: this.toggleShowCancelModal,
                                          children: (0, D.tZ)(m.Text, {
                                            style: me.cancelBtnText,
                                            children: "取消订单",
                                          }),
                                        }),
                                      (0, D.tZ)(Q, {}),
                                    ],
                                  }),
                                  (0, D.tZ)(ie, {
                                    priceDetail:
                                      null == t ? void 0 : t.orderPriceDetail,
                                    isShowPriceInfo: i,
                                    togglePriceInfo: this.togglePriceInfo,
                                  }),
                                  (0, D.tZ)(ae, {
                                    surprisedGrabOrderType:
                                      null == t
                                        ? void 0
                                        : t.surprisedGrabOrderType,
                                    isShow: n,
                                    toggleShow: this.toggleShowCancelModal,
                                    cancelOrder: this.cancelOrder,
                                  }),
                                ],
                              })
                            : (0, D.BX)(m.View, {
                                style: {
                                  display: "flex",
                                  flex: 1,
                                  backgroundColor: "#f5f5f5",
                                },
                                children: [
                                  (0, D.tZ)(m.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/shezhiye_bg@3x.png",
                                    style: me.titleBg,
                                  }),
                                  (0, D.tZ)(V, {}),
                                ],
                              });
                        },
                      },
                    ]),
                    i
                  );
                })(g.Component))
              ) || n,
            me = (0, y.lW)({
              scrollContainer: { zIndex: 2, paddingBottom: 100 },
              titleBg: {
                width: ue.windowWidth,
                height: 340,
                position: "absolute",
              },
              cancelBtn: {
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                borderRadius: 12,
                marginTop: 8,
                marginLeft: 8,
                marginRight: 8,
              },
              cancelBtnText: { fontSize: 16, color: "#999999" },
            }),
            fe = he;
          Page(
            (0, r.createPageConfig)(
              fe,
              "pages/taroCRN/flight/pages/surpriseGrabDetail/index",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                navigationBarBackgroundColor: "#198CFF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 71229, 10313, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(33766);
          }
        ),
          e.O();
      },
    ]);
})();
