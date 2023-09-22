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
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [29251],
      {
        62574: function (e, t, i) {
          var n,
            o = i(32180),
            r = i(22276),
            l = i(298),
            a = i(79301),
            d = i(95308),
            c = i(57042),
            s = i(24460),
            f = i(81876),
            u = i(21867),
            h = i(86066),
            g = i(45023),
            p = i(52500),
            m = i(71515),
            y = i(92954),
            w = i.n(y),
            Z = i(19364),
            x = i(88184),
            b = i(87298),
            T = i(85372),
            v = i(23577),
            C = i(35537),
            S = i(90098),
            I = i(72559),
            R = i(96995),
            B = i(22537),
            V = function () {
              var e = setTimeout(function () {
                w().stopPullDownRefresh(), clearTimeout(e);
              }, 600);
            },
            k = i(43884),
            F = i(90582),
            D = i(92049),
            z = i(19972),
            N = i(93761),
            _ = function (e) {
              return new Promise(function (t, i) {
                (0, N.VQ)({ business: "ticket", orderNumber: e })
                  .then(function () {
                    t({ code: 1, message: "支付成功" });
                  })
                  .catch(function () {
                    i({ code: 0, message: "支付失败" });
                  });
              });
            },
            L = i(82977),
            X = i(49528),
            P = w().getSystemInfoSync(),
            O = "PingFangSC-Medium",
            W = "PingFangSC-Regular",
            M = (0, X.lW)({
              container: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                backgroundColor: "#f5f5f5",
              },
              headerTop: {
                width: P.windowWidth,
                display: "flex",
                flexDirection: "column",
                height: 190,
                position: "absolute",
                left: 0,
                top: 0,
              },
              crnRedBook: {
                position: "absolute",
                right: 0,
                bottom: "20%",
                height: 70,
                width: 70,
                zIndex: 10,
              },
              redBook: {
                position: "fixed",
                right: 0,
                bottom: "20%",
                height: 70,
                width: 70,
                zIndex: 10,
              },
              feedIcon: { fontSize: 22, color: "#fff", fontWeight: "900" },
              imgWrap: { position: "absolute", left: 0, top: 0, width: "100%" },
              arcImg: {
                position: "absolute",
                bottom: -1,
                left: 0,
                zIndex: 1,
                width: P.windowWidth,
                height: 40,
              },
              footWrap: {
                paddingTop: 10,
                paddingBottom: 10,
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "flex-start",
                backgroundColor: "#fff",
                borderColor: "#f5f5f5",
                borderWidth: 0,
                borderTopWidth: 0.5,
              },
              bookAgain: {
                height: 44,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                backgroundColor: "#198CFF",
              },
              bookAgainText: {
                color: "#fff",
                fontSize: 17,
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
              },
              cancelOrder: {
                height: 44,
                backgroundColor: "#edf6ff",
                borderRadius: 12,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              },
              goPayBtn: {
                height: 44,
                backgroundColor: "#198cff",
                borderRadius: 12,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              },
              cancelText: {
                color: "#198CFF",
                fontSize: 17,
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
              },
              goPayText: { fontFamily: O, color: "#fff", fontSize: 18 },
              leftIcon: {
                fontFamily: O,
                fontSize: 13,
                color: "#fff",
                lineHeight: 24,
              },
              refundWrap: {
                marginTop: 12,
                borderRadius: 5,
                backgroundColor: "rgba(25,62,166,0.1)",
                paddingLeft: 12,
                paddingRight: 12,
                height: 38,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
              refundText: { fontFamily: W, fontSize: 13, color: "#fff" },
              tipText: {
                marginTop: 2,
                fontFamily: W,
                fontSize: 12,
                color: "#666",
                opacity: 0.8,
              },
              rightIcon: { fontSize: 14, color: "#fff", marginTop: 2 },
              priceText: {
                fontFamily: O,
                fontSize: 20,
                color: "#fff",
                lineHeight: 24,
              },
              bookText: {
                fontFamily: O,
                fontSize: 22,
                color: "#222",
                fontWeight: "600",
              },
              bookResult: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
              sucIcon: {
                fontSize: 32,
                fontFamily: "ct_font_common",
                color: "#fff",
              },
              paddingHorizontal16: { paddingLeft: 16, paddingRight: 16 },
              paddingHorizontal8: { paddingLeft: 8, paddingRight: 8 },
              paddingTop13: { paddingTop: 13 },
              titleStyle: {
                color: "#333333",
                fontSize: 16,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                paddingBottom: 14,
              },
              orderInfoContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              },
              orderInfoLeft: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              simpInfo: { backgroundColor: "#fff", borderRadius: 12 },
              marginTop8: { marginTop: 8 },
              paddingBottom16: { paddingBottom: 16 },
              infoTitle: {
                color: "#999999",
                fontSize: 13,
                fontFamily: "PingFangSC-Regular",
              },
              infoContent: {
                color: "#222222",
                fontSize: 13,
                fontFamily: "PingFangSC-Regular",
              },
              infoContainer: {
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 13,
                borderRadius: 12,
                paddingBottom: 13,
                backgroundColor: "#fff",
              },
              flexRowAlignCenter: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              bookResultBox: {
                display: "flex",
                paddingTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "transparent",
                paddingRight: 8,
                paddingLeft: 15,
              },
              bookWrap: { paddingBottom: 9, width: "100%" },
              orderDetailWrap: {
                borderRadius: 8,
                backgroundColor: "#fff",
                paddingBottom: 5,
              },
              orderTicketName: {
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 16,
                paddingRight: 16,
              },
              ticketName: { fontFamily: O, fontSize: 18, color: "#222" },
              itemLeft: {
                marginRight: 15,
                minWidth: 56,
                fontFamily: W,
                fontSize: 14,
                color: "#999",
              },
              itemRight: {
                flex: 1,
                fontFamily: W,
                fontSize: 14,
                color: "#333",
                lineHeight: 20,
              },
              qrCodeImage: { width: 120, height: 120 },
              complexLineWrap: {
                height: 39,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              leftRadiusBall: {
                width: 16,
                height: 16,
                borderRadius: 8,
                marginLeft: -24,
                backgroundColor: "#f5f5f5",
              },
              rightRadiusBall: {
                width: 16,
                height: 16,
                borderRadius: 8,
                marginRight: -24,
                backgroundColor: "#f5f5f5",
              },
              invoiceWrap: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
              invoiceRIcon: {
                fontFamily: O,
                fontSize: 14,
                color: "#333",
                marginTop: 2,
              },
              invoiceText: { fontFamily: W, fontSize: 14, color: "#333" },
              orderInfoWrap: {
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 16,
                paddingRight: 16,
              },
              orderInfoText: {
                fontFamily: O,
                fontSize: 16,
                color: "#333",
                lineHeight: 22,
              },
              contactInfo: {
                marginRight: 15,
                fontFamily: W,
                fontSize: 14,
                color: "#999",
              },
              nameText: { fontFamily: W, fontSize: 14, color: "#333" },
              refundProTitle: { fontSize: 15, lineHeight: 21 },
              refundProTime: { fontFamily: W, fontSize: 13 },
              refundDesc: { fontFamily: W, fontSize: 13 },
              modalBox: { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
              modalContent: {
                paddingHorizontal: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 42,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: "#fff",
                position: "relative",
              },
              tobepaidTopView: {
                paddingLeft: 16,
                paddingRight: 16,
                height: 64,
                backgroundColor: "#fff",
                borderRadius: 12,
                marginBottom: 8,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              },
              tobepaidTopViewLeft: { flex: 1 },
              tobepaidTopViewLeftInfo: {
                display: "flex",
                flexDirection: "row",
                marginBottom: 4,
              },
              tobepaidTopTag: {
                backgroundColor: "#fff2f2",
                borderRadius: 3,
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop: 1,
                paddingBottom: 1,
              },
              tobepaidTopViewTips: {
                color: "#999999",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
              },
              tobepaidTopViewBtn: {
                backgroundColor: "#198cff",
                borderRadius: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 8,
                paddingBottom: 8,
              },
              voucherOrQrcodeContainer: {},
              voucherCommonStyle: {
                borderRadius: 10,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#e1f0ff",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              },
              refundTypeText: {
                fontFamily: O,
                fontSize: 20,
                color: "#333",
                lineHeight: 28,
              },
              refundMoney: {
                fontFamily: O,
                fontSize: 18,
                color: "#FF5959",
                lineHeight: 25,
              },
              expectAccountTime: {
                fontFamily: W,
                fontSize: 13,
                color: "#999",
                lineHeight: 18,
                marginTop: 3,
              },
              refundProContent: { display: "flex", flexDirection: "row" },
              enterTime: {
                marginRight: 15,
                fontFamily: W,
                fontSize: 14,
                color: "#999",
              },
              enterTimeStr: {
                flex: 1,
                lineHeight: 20,
                fontFamily: W,
                fontSize: 14,
                color: "#333",
              },
              enterAddress: {
                marginRight: 15,
                fontFamily: W,
                fontSize: 14,
                color: "#999",
              },
              enterAddressStr: {
                flex: 1,
                lineHeight: 20,
                fontFamily: W,
                fontSize: 14,
                color: "#333",
              },
              addressWrap: {
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
              },
              refundRule: {
                marginRight: 5,
                fontFamily: W,
                fontSize: 14,
                color: "#999",
                width: 56,
              },
              ruleItem: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                position: "relative",
              },
              grayRadius: {
                backgroundColor: "#999",
                width: 3,
                height: 3,
                borderRadius: 1.5,
                marginRight: 6,
                position: "absolute",
                top: 7,
                left: 0,
              },
              ruleText: {
                flex: 1,
                lineHeight: 17,
                fontFamily: W,
                fontSize: 12,
                color: "#999",
                marginLeft: 9,
              },
              headRightWrap: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                marginRight: 15,
                paddingVertical: 5,
              },
              cusService: { fontSize: 12, color: "#fff", fontFamily: W },
              spotName: {
                marginBottom: 12,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              navWrap: {
                width: 62,
                height: 24,
                backgroundColor: "#edf6ff",
                borderRadius: 5,
                marginLeft: 13,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: 6,
                paddingLeft: 6,
              },
              useCouponTipWrap: {
                backgroundColor: "#FEF8E9",
                paddingHorizontal: 15,
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 3,
                display: "flex",
                justifyContent: "center",
              },
              useCouponText: {
                fontFamily: W,
                fontSize: 12,
                color: "#F76E21",
                lineHeight: 17,
              },
            }),
            A = i(48813),
            j = (0, p.memo)(function (e) {
              var t = e.imgUrl,
                i = e.jumpUrl,
                n = e.containerStyle,
                o = void 0 === n ? {} : n,
                r = e.imageStyle,
                a = void 0 === r ? {} : r,
                d = e.handleJump,
                c = void 0 === d ? function () {} : d,
                s = e.handelClose,
                f = void 0 === s ? function () {} : s;
              return (0, A.BX)(m.View, {
                style: (0, l.Z)(
                  (0, l.Z)({}, v.Z.isCRN ? M.crnRedBook : M.redBook),
                  {},
                  { containerStyle: o }
                ),
                children: [
                  (0, A.tZ)(m.View, {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    },
                    onClick: function () {
                      c(i);
                    },
                    children: (0, A.tZ)(m.Image, { src: t, style: a }),
                  }),
                  (0, A.tZ)(m.View, {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    },
                    children: (0, A.tZ)(m.View, {
                      style: {
                        width: 20,
                        height: 20,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: 4,
                      },
                      onClick: function () {
                        f();
                      },
                      children: (0, A.tZ)(m.Image, {
                        style: { width: 14, height: 13 },
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/gbxan@3x.png",
                      }),
                    }),
                  }),
                ],
              });
            }),
            E = i(45090),
            H = (0, p.memo)(function (e) {
              var t = e.visible,
                i = e.title,
                n = void 0 === i ? "" : i,
                o = e.subTitle,
                r = void 0 === o ? "" : o,
                l = e.buttonText,
                a = void 0 === l ? "" : l,
                d = e.onClickButton,
                c = void 0 === d ? function () {} : d,
                s = e.onClose,
                f = void 0 === s ? function () {} : s;
              return t
                ? (0, A.tZ)(L.Z, {
                    style: {},
                    isShowIphoneXAdapter: !1,
                    onCancel: function () {
                      return f();
                    },
                    children: (0, A.BX)(m.View, {
                      style: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        width: E.Ro.windowWidth,
                        paddingBottom: 23,
                        backgroundColor: "#ffffff",
                        position: "relative",
                      },
                      children: [
                        (0, A.tZ)(m.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/baby/icon_qinzi_bg@3x.png",
                          style: {
                            height: 204,
                            width: E.Ro.windowWidth,
                            resizeMode: "stretch",
                            position: "absolute",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          },
                        }),
                        (0, A.tZ)(m.View, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          },
                          children: (0, A.tZ)(m.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddtx_tc_lw@3x.png",
                            style: { height: 148, width: 280 },
                          }),
                        }),
                        (0, A.tZ)(m.View, {
                          onClick: f,
                          style: {
                            width: 24,
                            height: 24,
                            position: "absolute",
                            right: 16,
                            top: 16,
                          },
                          children: (0, A.tZ)(m.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/23-06/icon_close@3x.png",
                            style: { width: 24, height: 24 },
                          }),
                        }),
                        (0, A.tZ)(m.View, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginBottom: 12,
                          },
                          children: (0, A.tZ)(m.Text, {
                            style: {
                              color: "#222222",
                              fontSize: 20,
                              fontFamily: "PingFangSC-Medium",
                              fontWeight: "500",
                            },
                            children: n,
                          }),
                        }),
                        (0, A.tZ)(m.View, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginBottom: 28,
                          },
                          children: (0, A.tZ)(m.Text, {
                            style: {
                              color: "#666666",
                              fontSize: 14,
                              fontFamily: "PingFangSC-Regular",
                              fontWeight: "normal",
                            },
                            children: r,
                          }),
                        }),
                        (0, A.tZ)(m.View, {
                          style: {
                            display: "flex",
                            paddingLeft: 16,
                            paddingRight: 16,
                            backgroundColor: "#ffffff",
                            flexDirection: "row",
                          },
                          children: (0, A.tZ)(m.View, {
                            onClick: function () {
                              c();
                            },
                            style: {
                              flex: 1,
                              marginLeft: 8,
                              height: 44,
                              borderRadius: 12,
                              display: "flex",
                              backgroundColor: "#198cff",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: (0, A.tZ)(m.Text, {
                              style: {
                                color: "#ffffff",
                                fontSize: 17,
                                fontFamily: "PingFangSC-Medium",
                                fontWeight: "500",
                              },
                              children: a,
                            }),
                          }),
                        }),
                        (0, A.tZ)(D.Z, {}),
                      ],
                    }),
                  })
                : null;
            }),
            q = i(8271),
            U = i.n(q),
            Y = i(14089),
            Q = i(33624),
            K = (0, p.memo)(function (e) {
              var t,
                i,
                n = e.detail,
                o = void 0 === n ? null : n,
                r = e.rechargeDetail,
                l = void 0 === r ? {} : r,
                a = e.visible,
                d = e.title,
                c = void 0 === d ? "领取返现" : d,
                s = e.buttonClick,
                f = void 0 === s ? function () {} : s,
                u = e.onClose,
                h = void 0 === u ? function () {} : u;
              if (!a || !o) return null;
              var g = function (e) {
                return (0, A.BX)(k.Z, {
                  style: {
                    flex: 1,
                    height: 83,
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: 12,
                    paddingTop: 3,
                  },
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 0 },
                  colors: ["rgb(246, 250, 255)", "rgb(237, 246, 255)"],
                  children: [
                    (0, A.BX)(m.View, {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      },
                      children: [
                        (0, A.tZ)(m.Text, {
                          style: {
                            color: "#222222",
                            fontSize: 12,
                            fontFamily: "PingFangSC-Semibold",
                            fontWeight: "600",
                          },
                          children:
                            null != e && e.startTime
                              ? U()(null == e ? void 0 : e.startTime).format(
                                  "MM月DD日"
                                )
                              : "",
                        }),
                        (0, A.tZ)(m.Text, {
                          style: {
                            color: "#222222",
                            fontSize: 12,
                            fontFamily: "PingFangSC-Semibold",
                            fontWeight: "600",
                          },
                          children: ""
                            .concat(null != e && e.endTime ? "-" : "")
                            .concat(
                              null != e && e.endTime
                                ? U()(null == e ? void 0 : e.endTime).format(
                                    "MM月DD日"
                                  )
                                : ""
                            ),
                        }),
                      ],
                    }),
                    (0, A.tZ)(m.View, {
                      style: { marginTop: 4, maxWidth: 150 },
                      children: (0, A.tZ)(Y.Z, {
                        style: {
                          color: "#222222",
                          fontSize: 12,
                          fontFamily: "PingFangSC-Semibold",
                          fontWeight: "600",
                        },
                        numberOfLines: 1,
                        children: (null == e ? void 0 : e.productName) || "",
                      }),
                    }),
                    (0, A.tZ)(m.View, {
                      style: { marginTop: 4 },
                      children: (0, A.tZ)(m.Text, {
                        style: {
                          color: "#999999",
                          fontSize: 12,
                          fontFamily: "PingFangSC-Regular",
                        },
                        children: "订单号：".concat(
                          (null == e ? void 0 : e.orderNumber) || ""
                        ),
                      }),
                    }),
                  ],
                });
              };
              return (0, A.tZ)(L.Z, {
                style: {},
                isShowIphoneXAdapter: !1,
                onCancel: function () {
                  return h();
                },
                children: (0, A.BX)(m.View, {
                  style: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    width: E.Ro.windowWidth,
                    paddingTop: 20,
                    paddingBottom: 23,
                    backgroundColor: "#ffffff",
                    position: "relative",
                  },
                  children: [
                    (0, A.tZ)(m.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/baby/icon_qinzi_bg@3x.png",
                      style: {
                        height: 204,
                        width: E.Ro.windowWidth,
                        resizeMode: "stretch",
                        position: "absolute",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                    }),
                    (0, A.tZ)(m.View, {
                      onClick: h,
                      style: {
                        width: 24,
                        height: 24,
                        position: "absolute",
                        right: 16,
                        top: 16,
                        zIndex: 10,
                      },
                      children: (0, A.tZ)(m.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/23-06/icon_close@3x.png",
                        style: { width: 24, height: 24 },
                      }),
                    }),
                    (0, A.tZ)(m.View, {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        marginBottom: 14,
                      },
                      children: (0, A.tZ)(m.Text, {
                        style: {
                          color: "#222222",
                          fontSize: 20,
                          fontFamily: "PingFangSC-Medium",
                          fontWeight: "500",
                        },
                        children: c,
                      }),
                    }),
                    (0, A.tZ)(m.View, {
                      style: { paddingLeft: 20, paddingRight: 20 },
                      children: (0, A.tZ)(m.ScrollView, {
                        scrollEnabled:
                          (null == o ||
                          null === (t = o.ruleList) ||
                          void 0 === t
                            ? void 0
                            : t.length) > 7,
                        children: (function () {
                          var e;
                          return (0, A.BX)(A.HY, {
                            children: [
                              !(null == o || !o.amount) &&
                                (0, A.BX)(m.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  },
                                  children: [
                                    (0, A.tZ)(m.Text, {
                                      style: {
                                        color: "#666666",
                                        fontSize: 16,
                                        fontFamily: "PingFangSC-Semibold",
                                        fontWeight: "600",
                                      },
                                      children: "完成以下订单返现¥",
                                    }),
                                    (0, A.tZ)(m.Text, {
                                      style: {
                                        color: "#FF5959",
                                        fontSize: 16,
                                        fontFamily: "PingFangSC-Semibold",
                                        fontWeight: "600",
                                      },
                                      children: null == o ? void 0 : o.amount,
                                    }),
                                  ],
                                }),
                              (0, A.BX)(m.View, {
                                style: {
                                  marginTop: 12,
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  position: "relative",
                                },
                                children: [
                                  g(null == o ? void 0 : o.otherOrder),
                                  (0, A.tZ)(m.View, { style: { width: 9 } }),
                                  g(null == o ? void 0 : o.scenicSpotOrder),
                                  (0, A.tZ)(m.View, {
                                    style: {
                                      width: 21,
                                      height: 83,
                                      position: "absolute",
                                      display: "flex",
                                      flexDirection: "row",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    },
                                    children: (0, A.tZ)(m.View, {
                                      style: {
                                        backgroundColor: "#fff",
                                        width: 21,
                                        height: 21,
                                        borderRadius: 21,
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      },
                                      children: (0, A.tZ)(m.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/jdcj_tc_icon_and@3x.png",
                                        style: { width: 11, height: 11 },
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, A.tZ)(m.Text, {
                                style: {
                                  color: "#666666",
                                  fontSize: 16,
                                  fontFamily: "PingFangSC-Semibold",
                                  fontWeight: "600",
                                  marginTop: 12,
                                  marginBottom: 8,
                                },
                                children: "返现规则",
                              }),
                              (null == o ||
                              null === (e = o.ruleList) ||
                              void 0 === e
                                ? void 0
                                : e.length) &&
                                (null == o
                                  ? void 0
                                  : o.ruleList.map(function (e, t) {
                                      return (0,
                                      A.tZ)(m.View, { children: (0, A.tZ)(Q.Z, { style: { color: "#999999", fontSize: 12, fontFamily: "PingFangSC-Regular", marginBottom: 4 }, children: e }) }, t);
                                    })),
                              (0, A.tZ)(m.View, { style: { height: 100 } }),
                            ],
                          });
                        })(),
                      }),
                    }),
                    (0, A.BX)(m.View, {
                      style: {
                        width: "100%",
                        position: "absolute",
                        bottom: 0,
                        display: "flex",
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 16,
                        paddingBottom: 8,
                      },
                      children: [
                        (0, A.tZ)(m.Image, {
                          style: {
                            width: E.Ro.windowWidth,
                            height: 40,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                          },
                          resizeMode: "stretch",
                          src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/dbbj_dty@3x.png",
                        }),
                        (0, A.BX)(m.View, {
                          style: {
                            backgroundColor: "#ffffff",
                            position: "relative",
                            width: "100%",
                            zIndex: 2,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          },
                          children: [
                            (0, A.tZ)(m.View, {
                              style: {
                                zIndex: 2,
                                width: E.Ro.windowWidth - 16,
                                height: 44,
                                backgroundColor: "#198cff",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 12,
                                opacity:
                                  3 ===
                                  (null == l ||
                                  null === (i = l.data) ||
                                  void 0 === i
                                    ? void 0
                                    : i.rechargeStatus)
                                    ? 1
                                    : 0.6,
                              },
                              onClick: function () {
                                var e;
                                3 ===
                                  (null == l ||
                                  null === (e = l.data) ||
                                  void 0 === e
                                    ? void 0
                                    : e.rechargeStatus) && (f(), h());
                              },
                              children: (0, A.tZ)(m.Text, {
                                style: {
                                  color: "#ffffff",
                                  fontSize: 17,
                                  fontFamily: "PingFangSC-Medium",
                                  fontWeight: "500",
                                },
                                children: "立即领取",
                              }),
                            }),
                            (0, A.tZ)(D.Z, {}),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            J = (0, p.memo)(function (e) {
              var t = e.backgroundColor,
                i = void 0 === t ? "#ff5959" : t,
                n = e.buttonColor,
                o = void 0 === n ? "#198cff" : n,
                r = e.tag,
                a = void 0 === r ? "" : r,
                d = e.style,
                c = void 0 === d ? {} : d;
              return a
                ? (0, A.BX)(m.View, {
                    style: (0, l.Z)(
                      {
                        minWidth: 55,
                        maxWidth: 76,
                        height: 23,
                        borderTopRightRadius: 10,
                        overflow: "hidden",
                        position: "absolute",
                        top: 0,
                        right: 0,
                      },
                      c
                    ),
                    children: [
                      (0, A.tZ)(m.View, {
                        style: {
                          height: 14,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: i,
                          borderTopLeftRadius: 6,
                          borderBottomLeftRadius: 6,
                        },
                        children: (0, A.tZ)(m.Text, {
                          style: {
                            color: "#ffffff",
                            fontSize: 9,
                            fontFamily: "PingFangSC-Medium",
                            fontWeight: "500",
                          },
                          children: a,
                        }),
                      }),
                      (0, A.BX)(m.View, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          position: "relative",
                        },
                        children: [
                          (0, A.tZ)(m.View, {
                            style: { width: 10, height: 9, backgroundColor: i },
                          }),
                          (0, A.tZ)(m.View, {
                            style: {
                              width: 10,
                              height: 9,
                              backgroundColor: o,
                              position: "absolute",
                              right: 0,
                              top: 0,
                              borderTopRightRadius: 8,
                            },
                          }),
                        ],
                      }),
                    ],
                  })
                : null;
            }),
            G = (0, p.memo)(function (e) {
              return (0,
              A.tZ)(m.View, { style: { width: "100%", height: "120%", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 150 }, children: (0, A.tZ)(m.Image, { src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/kzt/img_kzt1.webp", style: { width: 232, height: 160 } }) });
            }),
            $ = (function () {
              function e(t) {
                (0, c.Z)(this, e), (this.key = t);
              }
              return (
                (0, s.Z)(
                  e,
                  [
                    {
                      key: "set",
                      value: function (e) {
                        if (null == e) return w().setStorageSync(this.key, "");
                        w().setStorageSync(this.key, e);
                      },
                    },
                    {
                      key: "get",
                      value: function () {
                        return w().getStorageSync(this.key);
                      },
                    },
                    {
                      key: "setAttr",
                      value: function (e, t) {
                        var i = this.get() || {};
                        (i[e] = t), this.set(i);
                      },
                    },
                    {
                      key: "getAttr",
                      value: function (e) {
                        return this.get()[e];
                      },
                    },
                    {
                      key: "removeAttr",
                      value: function (e) {
                        w().removeStorageSync(e);
                      },
                    },
                  ],
                  [
                    {
                      key: "getInstance",
                      value: function (t) {
                        return new e(t);
                      },
                    },
                  ]
                ),
                e
              );
            })(),
            ee =
              ($.getInstance("HOME_DEFAULT_ALERT_STORE"),
              $.getInstance("CITY_CURRENT_STORE"),
              $.getInstance("CITY_LIST_STORE"),
              $.getInstance("IS_CHANGE_CITY"),
              $.getInstance("SEARCH_HISTORY_STORE"),
              $.getInstance("HOME_HISTORY_STORE"),
              $.getInstance("BOOK_HANDTIP_STORE"),
              $.getInstance("FAIL_TICKETING_STORE")),
            te = i(980);
          var ie = "PingFangSC-Medium",
            ne = "PingFangSC-Regular",
            oe = w().getSystemInfoSync(),
            re =
              (0, b.h)()(
                (n = (function (e) {
                  (0, u.Z)(i, e);
                  var t = (0, h.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, c.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, g.Z)((0, f.Z)(n), "state", {
                        isRefresh: !1,
                        rereshResult: 1,
                        source: "",
                        hasExchange: !1,
                        fromPage: "",
                        orderNumber: "",
                        needFresh: !1,
                        isShowRefundSchedule: !1,
                        contactInfo: {},
                        orderBaseInfo: {},
                        orderEmpty: !0,
                        passengers: [],
                        refundInfos: [
                          { amount: "", paymentType: "", proccessList: [] },
                        ],
                        counselTel: "",
                        resourceInfos: [
                          { quantity: "", useDate: "", useDesc: "" },
                        ],
                        scenicspotInfo: {
                          openTimeDesc: "",
                          returnRules: [],
                          returnTag: "",
                        },
                        voucherInfo: {
                          useDesc: "",
                          voucherCode: "",
                          voucherImageUrl: "",
                        },
                        paymentTips: "",
                        loadQrImgError: !1,
                        isShowView: !0,
                        redBookUrl: "",
                        showRedBook: !1,
                        publicBargin: {
                          showPublicBargin: !1,
                          jumpUrl: "",
                          entryImg: "",
                        },
                        returnMoneyData: { price: "", status: "" },
                        showReturnMoneyModal: !1,
                        rechargeDetail: {},
                        walletRuleModalShow: !1,
                      }),
                      (0, g.Z)((0, f.Z)(n), "timer", null),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "pageId",
                        v.Z.isTieyou ? "10650027091" : "10650027039"
                      ),
                      (0, g.Z)((0, f.Z)(n), "autoRefreshNum", 0),
                      (0, g.Z)((0, f.Z)(n), "autoRefresh", function () {
                        var e = n.state.orderNumber;
                        n.setState({ isShowView: !1 }, function () {
                          n.getOrderDetail(e);
                        });
                      }),
                      (0, g.Z)((0, f.Z)(n), "hasPopDay", function (e) {
                        try {
                          var t = w().getStorageSync(e),
                            i = (null == t ? void 0 : t.hasPop) || !1,
                            n = new Date().getTime() / 1e3,
                            o = (null == t ? void 0 : t.timeStamp) || n;
                          return !!(i && n - o <= 86400);
                        } catch (e) {
                          return !1;
                        }
                      }),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "getMergeEntranceForShareWithdraw",
                        (function () {
                          var e = (0, d.Z)(
                            (0, a.Z)().mark(function e(t) {
                              var i, o, r, l, d, c, s;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (i = n.state.orderBaseInfo),
                                          (o = i.orderStatus),
                                          (r = i.amount),
                                          (l = i.returnStatus),
                                          !(r > 30) ||
                                            (10 !== o &&
                                              20 !== o &&
                                              30 !== o) ||
                                            0 !== l)
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        if (
                                          n.hasPopDay(
                                            "TICKET_ORDERDETAIL_ENTRYINFO"
                                          )
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          (e.next = 7),
                                          (0, C.OL)({ orderPrice: r })
                                        );
                                      case 7:
                                        if (1 !== (d = e.sent).resultCode) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          n.setState({
                                            publicBargin: {
                                              jumpUrl:
                                                null == d ||
                                                null === (c = d.data) ||
                                                void 0 === c
                                                  ? void 0
                                                  : c.jumpUrl,
                                              entryImg:
                                                null == d ||
                                                null === (s = d.data) ||
                                                void 0 === s
                                                  ? void 0
                                                  : s.entryImg,
                                              showPublicBargin: !0,
                                            },
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 11:
                                        n.hasPopDay(
                                          "TICKET_ORDERDETAIL_RED_BOOK"
                                        ) ||
                                          (0, C.r5)({
                                            orderNumber: t,
                                            biztypeSource: "ticketBookTest",
                                            activityType: "redBook",
                                          }).then(function (e) {
                                            if (1 === e.resultCode) {
                                              console.log("-----", e);
                                              var t = e.data;
                                              t &&
                                                n.setState({
                                                  redBookUrl:
                                                    (null == t
                                                      ? void 0
                                                      : t.jumpUrl) || "",
                                                  showRedBook: !0,
                                                });
                                            }
                                          }),
                                          (e.next = 17);
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(0)),
                                          console.log(
                                            "getMergeEntranceForShareWithdraw-error",
                                            e.t0
                                          );
                                      case 17:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 14]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "getOrderDetail",
                        (function () {
                          var e = (0, d.Z)(
                            (0, a.Z)().mark(function e(t) {
                              var i,
                                o,
                                r,
                                l = arguments;
                              return (0, a.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (i =
                                          l.length > 1 &&
                                          void 0 !== l[1] &&
                                          l[1]),
                                        (o = l.length > 2 ? l[2] : void 0),
                                        i
                                          ? n.setState({
                                              isRefresh: !0,
                                              rereshResult: 1,
                                            })
                                          : (0, z.Q)(),
                                        (e.next = 5),
                                        ee.get()
                                      );
                                    case 5:
                                      (r = e.sent),
                                        (0, C.dz)({ orderNumber: t })
                                          .then(function (e) {
                                            var l = setTimeout(function () {
                                              (0, z.Z)(), clearTimeout(l);
                                            }, 300);
                                            if (
                                              (console.log("订单详情 ", e),
                                              1 === e.resultCode)
                                            ) {
                                              n.setState({
                                                rereshResult: 2,
                                                orderEmpty: !1,
                                              });
                                              var a = setTimeout(function () {
                                                n.setState({ isRefresh: !1 }),
                                                  clearTimeout(a);
                                              }, 500);
                                              if (
                                                (i && V(n.scroller),
                                                "function" == typeof o &&
                                                  e.orderBaseInfo &&
                                                  o(e.orderBaseInfo),
                                                e.orderBaseInfo &&
                                                  (25 ==
                                                    e.orderBaseInfo
                                                      .orderStatus ||
                                                    40 ==
                                                      e.orderBaseInfo
                                                        .orderStatus))
                                              ) {
                                                var d = !1;
                                                if (
                                                  ((!r ||
                                                    (r instanceof Array &&
                                                      !r.includes(t))) &&
                                                    (d = !0),
                                                  d &&
                                                    (r || (r = []),
                                                    r.push(t),
                                                    ee.set(r),
                                                    n.state.hasExchange))
                                                ) {
                                                  (0, F.v)(
                                                    "",
                                                    "抱歉！出票失败。您本次兑换的优惠券90天内购票仍可使用。",
                                                    { text: "知道了" },
                                                    {
                                                      text: "重新购票",
                                                      callback: function () {
                                                        var e =
                                                            n.state
                                                              .scenicspotInfo,
                                                          t = e.scenicspotId;
                                                        (0, te.l4)({
                                                          data: {
                                                            scenicSpotId: t,
                                                            source:
                                                              n.state.source ||
                                                              "wechat",
                                                            scenicInfo:
                                                              encodeURIComponent(
                                                                JSON.stringify({
                                                                  address:
                                                                    e.address ||
                                                                    "",
                                                                  name:
                                                                    e.scenicspotName ||
                                                                    "景点详情",
                                                                })
                                                              ),
                                                          },
                                                          callback:
                                                            function () {},
                                                        });
                                                      },
                                                    }
                                                  );
                                                }
                                              }
                                              n.setState(
                                                {
                                                  counselTel: e.counselTel,
                                                  contactInfo: e.contactInfo,
                                                  passengers: e.passengers,
                                                  orderBaseInfo:
                                                    e.orderBaseInfo,
                                                  refundInfos: e.refundInfos,
                                                  resourceInfos:
                                                    e.resourceInfos,
                                                  scenicspotInfo:
                                                    e.scenicspotInfo,
                                                  voucherInfo: e.voucherInfo,
                                                  paymentTips:
                                                    e.paymentTips || "",
                                                },
                                                function () {
                                                  t &&
                                                    n.getMergeEntranceForShareWithdraw(
                                                      t
                                                    ),
                                                    t &&
                                                      n.getOrderStatusZtrip2023FreeDrawsTickets(),
                                                    t &&
                                                      n.getWalletRechargeDetail(
                                                        t
                                                      );
                                                }
                                              );
                                            } else {
                                              if (i) {
                                                V(n.scroller),
                                                  n.setState({
                                                    rereshResult: 2,
                                                  });
                                                var c = setTimeout(function () {
                                                  n.setState({ isRefresh: !1 }),
                                                    clearTimeout(c);
                                                }, 500);
                                              }
                                              n.setState({ orderEmpty: !0 });
                                            }
                                          })
                                          .catch(function (e) {
                                            if (i) {
                                              n.setState({ rereshResult: 2 });
                                              var t = setTimeout(function () {
                                                n.setState({ isRefresh: !1 }),
                                                  clearTimeout(t);
                                              }, 500);
                                            }
                                            console.log(
                                              "getOrderDetail---\x3e",
                                              e
                                            );
                                          });
                                    case 7:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "getWalletRechargeDetail",
                        function (e) {
                          var t = { orderNumber: "".concat(e) };
                          (0, C.Fk)(t)
                            .then(function (e) {
                              console.log("res-----", e),
                                1 === e.resultCode
                                  ? n.setState({
                                      rechargeDetail: {
                                        canRecharge:
                                          null == e ? void 0 : e.canRecharge,
                                        data:
                                          (null == e ? void 0 : e.data) || null,
                                      },
                                    })
                                  : n.setState({ rechargeDetail: {} });
                            })
                            .catch(function (e) {
                              console.log("--err---", e),
                                n.setState({ rechargeDetail: {} });
                            })
                            .finally(function () {
                              n.setState({ isShowView: !0 });
                            });
                        }
                      ),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "getOrderStatusZtrip2023FreeDrawsTickets",
                        (0, d.Z)(
                          (0, a.Z)().mark(function e() {
                            var t, i, o, r, l, d, c, s, f, u, h, g;
                            return (0, a.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((e.prev = 0),
                                        (i = n.state),
                                        (o = i.resourceInfos),
                                        (r = i.orderBaseInfo),
                                        (l =
                                          null == r ? void 0 : r.orderStatus),
                                        (d =
                                          null == r ? void 0 : r.returnStatus),
                                        (c =
                                          0 === l ||
                                          10 === l ||
                                          20 === l ||
                                          30 === l),
                                        !(
                                          null !== (t = o[0]) &&
                                          void 0 !== t &&
                                          t.resourceId &&
                                          null != r &&
                                          r.orderNumber &&
                                          c
                                        ))
                                      ) {
                                        e.next = 11;
                                        break;
                                      }
                                      return (
                                        (f = {
                                          resourceId:
                                            null === (s = o[0]) || void 0 === s
                                              ? void 0
                                              : s.resourceId,
                                          orderNumber:
                                            null == r ? void 0 : r.orderNumber,
                                        }),
                                        (e.next = 9),
                                        (0, C.xl)(f)
                                      );
                                    case 9:
                                      1 ===
                                        (null == (u = e.sent)
                                          ? void 0
                                          : u.resultCode) &&
                                        null != u &&
                                        u.resData &&
                                        (n.setState({
                                          returnMoneyData: u.resData,
                                        }),
                                        4 !==
                                          (null == u ||
                                          null === (h = u.resData) ||
                                          void 0 === h
                                            ? void 0
                                            : h.status) ||
                                          (0 !== d && 40 !== d) ||
                                          ((g =
                                            "TICKET_ORDERDETAIL_RETURNMONEY_".concat(
                                              null == r ? void 0 : r.orderNumber
                                            )),
                                          n.hasPopDay(g) ||
                                            (w().setStorageSync(g, {
                                              hasPop: !0,
                                              timeStamp:
                                                new Date().getTime() / 1e3,
                                            }),
                                            n.setState({
                                              showReturnMoneyModal: !0,
                                            }))));
                                    case 11:
                                      e.next = 16;
                                      break;
                                    case 13:
                                      (e.prev = 13),
                                        (e.t0 = e.catch(0)),
                                        console.log(
                                          "getOrderStatusZtrip2023FreeDrawsTickets-err",
                                          e.t0
                                        );
                                    case 16:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 13]]
                            );
                          })
                        )
                      ),
                      (0, g.Z)((0, f.Z)(n), "navigateMap", function () {
                        var e = n.state.scenicspotInfo;
                        (0, te.WD)(e);
                      }),
                      (0, g.Z)((0, f.Z)(n), "getTopHeaderIcon", function () {
                        var e,
                          t = n.state.orderBaseInfo,
                          i = t.orderStatus,
                          o = t.returnStatus,
                          r = v.Z.isTieyou
                            ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_tycpcg@3x.png"
                            : "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_cpcg@3x.png",
                          l = v.Z.isTieyou
                            ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_tywzf@3x.png"
                            : "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_wzf@3x.png",
                          a = v.Z.isTieyou
                            ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_tycpz@3x.png"
                            : "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_cpz@3x.png",
                          d = a;
                        return (
                          null != t &&
                          null !== (e = t.statusName) &&
                          void 0 !== e &&
                          e.includes("待支付")
                            ? (d = a)
                            : 0 === i && 0 === o
                            ? (d = l)
                            : 0 === i || 20 === i || 10 === o
                            ? (d = a)
                            : 30 === i || 30 === o
                            ? (d = r)
                            : (15 !== i && 25 !== i && 40 !== i && 40 !== o) ||
                              (d = l),
                          d
                        );
                      }),
                      (0, g.Z)((0, f.Z)(n), "callCustomerService", function () {
                        console.log(
                          "this.state.counselTel",
                          n.state.counselTel
                        );
                        var e = n.state.counselTel;
                        0 != e.length
                          ? (0, te.Pt)(e)
                          : (0, F.v)(
                              "温馨提示",
                              "当前客服系统繁忙，请稍后重试",
                              { text: "知道了" }
                            );
                      }),
                      (0, g.Z)((0, f.Z)(n), "applyInvoice", function () {
                        var e = n.state.orderBaseInfo,
                          t = "目前暂无法申请在线开发票，请凭订单号".concat(
                            e.showOrderNumber,
                            "，联系客服为您开发票哦~"
                          );
                        (0, F.v)(
                          "温馨提示",
                          t,
                          { text: "取消" },
                          {
                            text: "联系客服",
                            callback: function () {
                              n.callCustomerService();
                            },
                          }
                        );
                      }),
                      (0, g.Z)((0, f.Z)(n), "goSpotDetailPage", function (e) {
                        var t = n.state.scenicspotInfo;
                        n.ubtTrace("c_sightDetail"),
                          (0, te.l4)({
                            data: {
                              scenicSpotId: e,
                              source: n.state.source || "wechat",
                              scenicInfo: encodeURIComponent(
                                JSON.stringify({
                                  address: t.address || "",
                                  name: t.scenicspotName || "景点详情",
                                })
                              ),
                            },
                            callback: function () {},
                          });
                      }),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "callPayOperation",
                        (function () {
                          var e = (0, d.Z)(
                            (0, a.Z)().mark(function e(t) {
                              return (0, a.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      try {
                                        _(t)
                                          .then(
                                            (function () {
                                              var e = (0, d.Z)(
                                                (0, a.Z)().mark(function e(i) {
                                                  var o, r;
                                                  return (0, a.Z)().wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            console.log(
                                                              "res",
                                                              i
                                                            ),
                                                              E.FN.show(
                                                                "支付成功"
                                                              ),
                                                              (o = function (
                                                                e
                                                              ) {
                                                                v.Z.isTieyou ||
                                                                  (e &&
                                                                    e.showOrderNumber &&
                                                                    (0, C.Kz)({
                                                                      orderNumber:
                                                                        t || "",
                                                                      showOrderNumber:
                                                                        e.showOrderNumber,
                                                                      orderPrice:
                                                                        n.props
                                                                          .totalPrice,
                                                                    }).then(
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        1 ===
                                                                          e.resultCode &&
                                                                          console.log(
                                                                            "报名结果---报名成功"
                                                                          );
                                                                      }
                                                                    ));
                                                              }),
                                                              (r = setTimeout(
                                                                function () {
                                                                  n.getOrderDetail(
                                                                    t,
                                                                    !1,
                                                                    o
                                                                  ),
                                                                    clearTimeout(
                                                                      r
                                                                    );
                                                                },
                                                                200
                                                              ));
                                                          case 4:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e
                                                  );
                                                })
                                              );
                                              return function (t) {
                                                return e.apply(this, arguments);
                                              };
                                            })()
                                          )
                                          .catch(function (e) {
                                            console.log("res", e),
                                              E.FN.show(
                                                e.message || "支付失败"
                                              );
                                          });
                                      } catch (e) {
                                        console.log("res", e),
                                          E.FN.show(e.message || "支付失败");
                                      }
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "cancelHotelLotteryForTicketOrder",
                        function (e) {
                          v.Z.isTieyou ||
                            (0, C.QA)({ orderNumber: e })
                              .then(function (e) {
                                1 === e.resultCode &&
                                  console.log("取消活动成功", e.resultMessage);
                              })
                              .catch(function (e) {
                                console.log("取消失败", e);
                              });
                        }
                      ),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "cancelOrderBtnClik",
                        (function () {
                          var e = (0, d.Z)(
                            (0, a.Z)().mark(function e(t) {
                              var i, o, r;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((i = n.state.orderBaseInfo),
                                          1 != i.payFlag)
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        (o =
                                          "目前该订单尚未付款，是否确认取消该订单？"),
                                          n.state.hasExchange &&
                                            (o +=
                                              "   本次兑换的优惠券将返回至原账号。"),
                                          (0, F.v)(
                                            "",
                                            o,
                                            {
                                              text: "取消订单",
                                              callback: function () {
                                                n.cancelOrder(t);
                                              },
                                            },
                                            {
                                              text: "点错了",
                                              callback: function () {},
                                            }
                                          ),
                                          (e.next = 22);
                                        break;
                                      case 8:
                                        return (
                                          (e.prev = 8),
                                          (e.next = 11),
                                          (0, C.pY)({ orderNumber: t })
                                        );
                                      case 11:
                                        if (1 !== (r = e.sent).resultCode) {
                                          e.next = 16;
                                          break;
                                        }
                                        if (
                                          !r.lotteryFlag ||
                                          !r.lotteryStatus
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          (0, F.v)(
                                            "",
                                            "您已领取0元住活动，不能退订",
                                            {
                                              text: "知道了",
                                              callback: function () {},
                                            }
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 16:
                                        n.checkCanCancel(t), (e.next = 22);
                                        break;
                                      case 19:
                                        (e.prev = 19),
                                          (e.t0 = e.catch(8)),
                                          console.log("error", e.t0);
                                      case 22:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[8, 19]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, g.Z)((0, f.Z)(n), "renderFeedBackView", function () {
                        var e = n.state.orderBaseInfo;
                        return 30 == (null == e ? void 0 : e.orderStatus)
                          ? (0, A.BX)(m.View, {
                              style: { paddingLeft: 5 },
                              id: "AMCP",
                              onClick: function () {
                                return n.callCustomerService();
                              },
                              children: [
                                (0, A.tZ)(m.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_kf@3x.png",
                                  style: { width: 20, height: 20 },
                                }),
                                (0, A.tZ)(m.Text, {
                                  style: {
                                    color: "#061126",
                                    fontSize: 10,
                                    fontFamily: "PingFangSC-Regular",
                                  },
                                  children: "客服",
                                }),
                              ],
                            })
                          : null;
                      }),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "renderOrderHeaderDesc",
                        function () {
                          var e = n.state.orderBaseInfo,
                            t = e.orderStatus;
                          return (0, A.tZ)(m.View, {
                            style: { position: "relative" },
                            children: (0, A.tZ)(m.View, {
                              style: (0, l.Z)({}, M.bookWrap),
                              children: (0, A.BX)(m.View, {
                                style: M.bookResultBox,
                                children: [
                                  (0, A.tZ)(m.View, {
                                    style: { marginRight: 5 },
                                    children: (0, A.tZ)(m.Image, {
                                      style: {
                                        width: 32,
                                        height: 32,
                                        marginTop: -4,
                                      },
                                      src: n.getTopHeaderIcon(),
                                    }),
                                  }),
                                  (0, A.BX)(m.View, {
                                    style: {
                                      flex: 1,
                                      marginRight: 7,
                                      paddingBottom: 4,
                                    },
                                    children: [
                                      (0, A.tZ)(m.View, {
                                        style: M.bookResult,
                                        children: (0, A.tZ)(m.Text, {
                                          style: M.bookText,
                                          children:
                                            0 === t
                                              ? e.statusDesc
                                              : e.statusName,
                                        }),
                                      }),
                                      0 !== t &&
                                        (0, A.tZ)(m.View, {
                                          style: { paddingBottom: 3 },
                                          children: (0, A.tZ)(m.Text, {
                                            style: M.tipText,
                                            children: e.statusDesc,
                                          }),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          });
                        }
                      ),
                      (0, g.Z)((0, f.Z)(n), "splitView", function () {
                        return (0,
                        A.tZ)(m.View, { style: { paddingTop: 13, paddingBottom: 13 }, children: (0, A.tZ)(m.View, { style: { backgroundColor: "#f0f0f0", height: 0.5 } }) });
                      }),
                      (0, g.Z)((0, f.Z)(n), "qrCodeView", function (e) {
                        return n.state.loadQrImgError
                          ? (0, A.tZ)(m.View, {})
                          : (0, A.tZ)(m.View, {
                              style: {
                                marginTop: 20.5,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                              },
                              children: (0, A.tZ)(m.Image, {
                                onError: function () {
                                  n.setState({ loadQrImgError: !0 });
                                },
                                src: e,
                                style: M.qrCodeImage,
                              }),
                            });
                      }),
                      (0, g.Z)((0, f.Z)(n), "ticketDescItem", function (e, t) {
                        var i = e.type,
                          o = n.state,
                          r = o.resourceInfos,
                          l = o.orderBaseInfo,
                          a = o.voucherInfo,
                          d = r[0],
                          c = "quantity" == i ? l.quantity : d[i];
                        return (
                          "useDesc" == i && (c = a.useDesc),
                          "useDesc" != i || (d[i] && 0 != d[i].length)
                            ? (0, A.BX)(
                                m.View,
                                {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    marginTop: 1 == t ? 8 : 0,
                                    marginBottom: 1 == t ? 8 : 0,
                                  },
                                  children: [
                                    (0, A.tZ)(m.Text, {
                                      style: M.itemLeft,
                                      children: e.name,
                                    }),
                                    (0, A.tZ)(m.Text, {
                                      style: [M.itemRight],
                                      children: c,
                                    }),
                                  ],
                                },
                                t
                              )
                            : null
                        );
                      }),
                      (0, g.Z)((0, f.Z)(n), "dashLine", function () {
                        for (var e = [], t = 0; t < 100; t++) e.push(t);
                        return (0, A.tZ)(m.View, {
                          style: {
                            width: oe.windowWidth - 30,
                            height: 20,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: 12,
                            paddingRight: 12,
                          },
                          children: (0, A.tZ)(m.View, {
                            style: {
                              flex: 1,
                              width: oe.windowWidth - 40,
                              flexDirection: "row",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              overflow: "hidden",
                            },
                            children: e.map(function (e, t) {
                              return (0,
                              A.tZ)(m.View, { style: { height: 0.5, backgroundColor: "#f0f0f0", width: 4, marginRight: 4 } }, t);
                            }),
                          }),
                        });
                      }),
                      (0, g.Z)((0, f.Z)(n), "complexSplitView", function () {
                        return (0,
                        A.BX)(m.View, { style: M.complexLineWrap, children: [(0, A.tZ)(m.View, { style: M.leftRadiusBall }), n.dashLine(), (0, A.tZ)(m.View, { style: M.rightRadiusBall })] });
                      }),
                      (0, g.Z)((0, f.Z)(n), "ruleItem", function (e, t) {
                        return (0,
                        A.BX)(m.View, { style: (0, l.Z)((0, l.Z)({}, M.ruleItem), {}, { marginTop: 0 !== t ? 8 : 0 }), children: [(0, A.tZ)(m.View, { style: M.grayRadius }), (0, A.tZ)(m.Text, { style: M.ruleText, children: e })] }, t);
                      }),
                      (0, g.Z)((0, f.Z)(n), "getEffectLineNum", function (e) {
                        var t = 0;
                        for (var i in e)
                          "status" !== i && e[i].length > 0 && t++;
                        return t;
                      }),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "computedModalHeihgt",
                        function (e) {
                          var t = e.length,
                            i = 0;
                          e.forEach(function (e) {
                            var t = n.getEffectLineNum(e);
                            i += 1 == t ? 21 : 2 == t ? 44 : 64;
                          });
                          var o = 124 + 20 * (t - 1) + i;
                          return S.Z.isiPhoneX && (o += 24), o;
                        }
                      ),
                      (0, g.Z)((0, f.Z)(n), "getRadiusBg", function (e, t) {
                        return (e[t + 1] && 0 !== e[t + 1].status) ||
                          0 === e[t].status
                          ? {
                              wrapBg: "rgba(255,255,255,0)",
                              bg: "#d8d8d8",
                              descColor: "#999",
                            }
                          : {
                              wrapBg: "rgba(25,140,255,0.13)",
                              bg: T.Z.mainColor,
                              descColor: "#222",
                            };
                      }),
                      (0, g.Z)((0, f.Z)(n), "getViewDisplay", function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "bottomOrderInfo",
                          t = n.state.orderBaseInfo,
                          i = t.orderStatus,
                          o = t.returnStatus,
                          r = !1;
                        return (
                          "bottomOrderInfo" === e
                            ? (r =
                                0 === i ||
                                20 === i ||
                                (30 === i && 30 !== o) ||
                                20 === o ||
                                40 === o)
                            : "topOrderInfo" === e
                            ? (r =
                                15 === i ||
                                25 === i ||
                                40 === i ||
                                10 === o ||
                                20 === o ||
                                30 === o)
                            : "voucherOrQrcode" === e &&
                              (r =
                                0 === i ||
                                20 === i ||
                                (30 === i && 30 !== o) ||
                                20 === o ||
                                40 === o),
                          r
                        );
                      }),
                      (0, g.Z)((0, f.Z)(n), "refundProgressModal", function () {
                        var e,
                          t = n.state,
                          i = t.isShowRefundSchedule,
                          o = t.refundInfos,
                          r = o[0].proccessList,
                          a =
                            null === (e = o[0]) || void 0 === e
                              ? void 0
                              : e.amount,
                          d = n.computedModalHeihgt(r);
                        return i
                          ? (0, A.tZ)(L.Z, {
                              style: [M.modalBox, { height: d, zIndex: 1001 }],
                              isShowIphoneXAdapter: !1,
                              onCancel: function () {
                                return n.setState({ isShowRefundSchedule: !1 });
                              },
                              children: (0, A.BX)(m.View, {
                                style: {
                                  backgroundColor: "#f5f5f5",
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                  paddingBottom: 10,
                                },
                                children: [
                                  (0, A.BX)(k.Z, {
                                    start: { x: 0, y: 0 },
                                    end: { x: 0, y: 1 },
                                    colors: [
                                      "rgb(255, 255, 255)",
                                      "rgb(245, 245, 245)",
                                    ],
                                    style: M.modalContent,
                                    children: [
                                      (0, A.tZ)(m.View, {
                                        children: (0, A.tZ)(m.View, {
                                          style: {
                                            height: 54,
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                          },
                                          children: (0, A.tZ)(m.Text, {
                                            style: M.refundTypeText,
                                            children: "退款详情",
                                          }),
                                        }),
                                      }),
                                      (0, A.tZ)(m.Image, {
                                        id: "AMCV",
                                        onClick: function () {
                                          return n.setState({
                                            isShowRefundSchedule: !1,
                                          });
                                        },
                                        src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_tcgb@3x.png",
                                        style: {
                                          width: 24,
                                          height: 24,
                                          position: "absolute",
                                          right: 16,
                                          top: 15,
                                        },
                                      }),
                                    ],
                                  }),
                                  (0, A.tZ)(m.View, {
                                    style: {
                                      paddingLeft: 8,
                                      paddingRight: 8,
                                      position: "relative",
                                      marginTop: -38,
                                    },
                                    children: (0, A.BX)(m.View, {
                                      style: {
                                        backgroundColor: "#fff",
                                        borderRadius: 12,
                                        paddingLeft: 15,
                                        paddingTop: 16,
                                        paddingBottom: 25,
                                      },
                                      children: [
                                        !!a &&
                                          (0, A.BX)(m.View, {
                                            style: (0, l.Z)(
                                              (0, l.Z)(
                                                {},
                                                M.flexRowAlignCenter
                                              ),
                                              {},
                                              { paddingBottom: 16 }
                                            ),
                                            children: [
                                              (0, A.tZ)(m.Text, {
                                                style: {
                                                  color: "#222222",
                                                  fontSize: 16,
                                                  fontFamily:
                                                    "PingFangSC-Medium",
                                                  fontWeight: "500",
                                                },
                                                children: "退款金额",
                                              }),
                                              (0, A.tZ)(m.Text, {
                                                style: {
                                                  color: "#ff5959",
                                                  fontSize: 16,
                                                  fontFamily:
                                                    "PingFangSC-Medium",
                                                  fontWeight: "500",
                                                  marginLeft: 8,
                                                },
                                                children: a,
                                              }),
                                            ],
                                          }),
                                        (0, A.BX)(m.View, {
                                          style: M.refundProContent,
                                          children: [
                                            n.progressBar(r),
                                            (0, A.tZ)(m.View, {
                                              style: {
                                                flex: 1,
                                                paddingLeft: 12,
                                              },
                                              children: r.map(function (e, t) {
                                                return n.progressItem(e, t, r);
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, A.tZ)(D.Z, {}),
                                ],
                              }),
                            })
                          : null;
                      }),
                      (0, g.Z)((0, f.Z)(n), "renderLeftView", function () {
                        return (0, A.tZ)(m.View, {
                          style: { paddingLeft: 16 },
                          id: "AMCa",
                          onClick: function () {
                            return n.navigateBack();
                          },
                          children: (0, A.tZ)(m.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/22-09/icon_back@3x.png",
                            style: { width: 24, height: 24 },
                          }),
                        });
                      }),
                      (0, g.Z)((0, f.Z)(n), "renderTopOrderInfo", function () {
                        var e,
                          t,
                          i = n.state,
                          o = i.orderBaseInfo,
                          r = i.refundInfos,
                          a =
                            r[0] &&
                            !(null === (e = r[0]) || void 0 === e || !e.amount);
                        return n.getViewDisplay("topOrderInfo")
                          ? (0, A.BX)(m.View, {
                              children: [
                                n.renderInfoTitle("订单信息"),
                                (0, A.BX)(m.View, {
                                  style: M.orderInfoContainer,
                                  children: [
                                    (0, A.BX)(m.View, {
                                      style: M.orderInfoLeft,
                                      children: [
                                        (0, A.BX)(m.View, {
                                          style: { width: 68 },
                                          children: [
                                            (0, A.tZ)(m.View, {
                                              children: (0, A.tZ)(m.Text, {
                                                style: M.infoTitle,
                                                children: "已支付",
                                              }),
                                            }),
                                            a &&
                                              (0, A.tZ)(m.View, {
                                                style: M.marginTop8,
                                                children: (0, A.tZ)(m.Text, {
                                                  style: M.infoTitle,
                                                  children: "退款",
                                                }),
                                              }),
                                            (null == o
                                              ? void 0
                                              : o.showOrderNumber) &&
                                              (0, A.tZ)(m.View, {
                                                style: M.marginTop8,
                                                children: (0, A.tZ)(m.Text, {
                                                  style: M.infoTitle,
                                                  children: "订单号",
                                                }),
                                              }),
                                          ],
                                        }),
                                        (0, A.BX)(m.View, {
                                          children: [
                                            (0, A.tZ)(m.View, {
                                              children: (0, A.tZ)(m.Text, {
                                                style: (0, l.Z)(
                                                  (0, l.Z)({}, M.infoContent),
                                                  {},
                                                  { color: "#999" }
                                                ),
                                                children:
                                                  null != o && o.amount
                                                    ? "¥".concat(
                                                        null == o
                                                          ? void 0
                                                          : o.amount
                                                      )
                                                    : "",
                                              }),
                                            }),
                                            a &&
                                              (0, A.tZ)(m.View, {
                                                style: M.marginTop8,
                                                children: (0, A.tZ)(m.Text, {
                                                  style: (0, l.Z)(
                                                    (0, l.Z)({}, M.infoContent),
                                                    {},
                                                    { color: T.Z.mainColor }
                                                  ),
                                                  children:
                                                    (r[0] &&
                                                      (null === (t = r[0]) ||
                                                      void 0 === t
                                                        ? void 0
                                                        : t.amount)) ||
                                                    "",
                                                }),
                                              }),
                                            (null == o
                                              ? void 0
                                              : o.showOrderNumber) &&
                                              (0, A.tZ)(m.View, {
                                                style: M.marginTop8,
                                                children: (0, A.tZ)(m.Text, {
                                                  style: (0, l.Z)(
                                                    {},
                                                    M.infoContent
                                                  ),
                                                  children:
                                                    (null == o
                                                      ? void 0
                                                      : o.showOrderNumber) ||
                                                    "",
                                                }),
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, A.BX)(m.View, {
                                      children: [
                                        (0, A.tZ)(m.View, {
                                          style: { height: 17 },
                                          id: "AMCb",
                                          onClick: function () {
                                            return n.setState({
                                              isShowRefundSchedule: !0,
                                            });
                                          },
                                        }),
                                        a &&
                                          (0, A.tZ)(m.View, {
                                            style: M.marginTop8,
                                            id: "AMCc",
                                            onClick: function () {
                                              return n.setState({
                                                isShowRefundSchedule: !0,
                                              });
                                            },
                                            children: (0, A.tZ)(m.Text, {
                                              style: (0, l.Z)(
                                                (0, l.Z)({}, M.infoContent),
                                                {},
                                                { color: T.Z.mainColor }
                                              ),
                                              children: "退款进度",
                                            }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                n.splitView(),
                              ],
                            })
                          : null;
                      }),
                      (0, g.Z)((0, f.Z)(n), "recivelWalletMonney", function () {
                        var e = n.state,
                          t = e.orderBaseInfo,
                          i = e.rechargeDetail;
                        3 === (null == i ? void 0 : i.data.rechargeStatus) &&
                          (0, C.u3)({
                            orderNumber: "".concat(
                              null == t ? void 0 : t.orderNumber
                            ),
                          })
                            .then(function (e) {
                              console.log("res====", e),
                                1 === e.resultCode
                                  ? (E.FN.show("领取成功，快去提现吧～"),
                                    n.setState({ isShowView: !1 }, function () {
                                      n.getOrderDetail(
                                        null == t ? void 0 : t.orderNumber
                                      );
                                    }))
                                  : E.FN.show(
                                      (null == e ? void 0 : e.resultMessage) ||
                                        "领取返现失败"
                                    );
                            })
                            .catch(function (e) {
                              console.log("err====", e),
                                E.FN.show("领取返现失败");
                            }),
                          null == i || i.data.rechargeStatus;
                      }),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "handleWalletRuleModal",
                        function (e) {
                          var t, i, o, r, l, a, d;
                          4 ===
                            (null === (t = n.state.rechargeDetail) ||
                            void 0 === t ||
                            null === (i = t.data) ||
                            void 0 === i
                              ? void 0
                              : i.rechargeStatus) &&
                          null !== (o = n.state.rechargeDetail) &&
                          void 0 !== o &&
                          null !== (r = o.data) &&
                          void 0 !== r &&
                          r.jumpUrl
                            ? (0, te.fL)(
                                null === (l = n.state.rechargeDetail) ||
                                  void 0 === l ||
                                  null === (a = l.data) ||
                                  void 0 === a ||
                                  null === (d = a.detail) ||
                                  void 0 === d
                                  ? void 0
                                  : d.jumpUrl
                              )
                            : n.setState({ walletRuleModalShow: e });
                        }
                      ),
                      (0, g.Z)((0, f.Z)(n), "renderTitleInfo", function () {
                        var e,
                          t,
                          i,
                          o = n.state.resourceInfos,
                          r =
                            (null === (e = o[0]) || void 0 === e
                              ? void 0
                              : e.resourceName) || "",
                          a =
                            (null === (t = o[0]) || void 0 === t
                              ? void 0
                              : t.useDate) || "",
                          d =
                            (null === (i = o[0]) || void 0 === i
                              ? void 0
                              : i.quantity) || "";
                        return (0,
                        A.BX)(m.View, { children: [n.renderInfoTitle(r), !!d && (0, A.BX)(m.View, { style: (0, l.Z)((0, l.Z)({}, M.flexRowAlignCenter), {}, { marginBottom: 8 }), children: [(0, A.tZ)(m.Text, { style: (0, l.Z)((0, l.Z)({}, M.infoTitle), {}, { marginRight: 16 }), children: "购买数量" }), (0, A.BX)(m.Text, { style: M.infoContent, children: [d, "张"] })] }), (0, A.BX)(m.View, { style: (0, l.Z)({}, M.flexRowAlignCenter), children: [(0, A.tZ)(m.Text, { style: (0, l.Z)((0, l.Z)({}, M.infoTitle), {}, { marginRight: 16 }), children: "使用日期" }), (0, A.tZ)(m.Text, { style: M.infoContent, children: a })] })] });
                      }),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "renderTicketSympInfo",
                        function () {
                          var e,
                            t,
                            i,
                            o,
                            r,
                            a,
                            d,
                            c,
                            s = n.state.rechargeDetail;
                          return (0, A.BX)(m.View, {
                            style: { position: "relative" },
                            children: [
                              !(null == s || !s.data) &&
                                (0, A.BX)(A.HY, {
                                  children: [
                                    (0, A.tZ)(k.Z, {
                                      style: {
                                        position: "absolute",
                                        width: "100%",
                                        height: 58,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,
                                      },
                                      tart: { x: 0, y: 0 },
                                      end: { x: 0, y: 1 },
                                      colors: [
                                        "rgb(255, 231, 231)",
                                        "rgb(255, 238, 238)",
                                      ],
                                    }),
                                    (0, A.BX)(m.View, {
                                      style: {
                                        height: 40,
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingLeft: 15,
                                        paddingRight: 16,
                                        position: "relative",
                                        zIndex: 2,
                                      },
                                      children: [
                                        (0, A.BX)(m.View, {
                                          style: {
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                          },
                                          children: [
                                            (0, A.tZ)(m.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/2023.08-/ddxq_icon_fxjb@3x.png",
                                              style: {
                                                width: 21,
                                                height: 20,
                                                marginRight: 9,
                                              },
                                            }),
                                            !(
                                              null == s ||
                                              null === (e = s.data) ||
                                              void 0 === e ||
                                              !e.entranceTitle
                                            ) &&
                                              (0, A.tZ)(Q.Z, {
                                                style: {
                                                  color: "#222222",
                                                  fontSize: 13,
                                                  fontFamily:
                                                    "PingFangSC-Medium",
                                                  fontWeight: "500",
                                                },
                                                children:
                                                  null == s ||
                                                  null === (t = s.data) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.entranceTitle,
                                              }),
                                          ],
                                        }),
                                        1 ===
                                          (null == s ||
                                          null === (i = s.data) ||
                                          void 0 === i
                                            ? void 0
                                            : i.rechargeStatus) &&
                                          (0, A.tZ)(m.View, {
                                            style: {
                                              width: 60,
                                              height: 22,
                                              borderWidth: 0.5,
                                              borderStyle: "solid",
                                              borderColor: "#ff5959",
                                              borderRadius: 6,
                                              display: "flex",
                                              flexDirection: "row",
                                              justifyContent: "center",
                                              alignItems: "center",
                                            },
                                            onClick: function () {
                                              return n.handleWalletRuleModal(
                                                !0
                                              );
                                            },
                                            children: (0, A.tZ)(m.Text, {
                                              style: {
                                                color: "#ff5959",
                                                fontSize: 12,
                                                fontFamily:
                                                  "PingFangSC-Semibold",
                                                fontWeight: "600",
                                              },
                                              children:
                                                (null == s ||
                                                null === (o = s.data) ||
                                                void 0 === o
                                                  ? void 0
                                                  : o.buttonText) || "",
                                            }),
                                          }),
                                        (2 ===
                                          (null == s ||
                                          null === (r = s.data) ||
                                          void 0 === r
                                            ? void 0
                                            : r.rechargeStatus) ||
                                          3 ===
                                            (null == s ||
                                            null === (a = s.data) ||
                                            void 0 === a
                                              ? void 0
                                              : a.rechargeStatus) ||
                                          4 ===
                                            (null == s ||
                                            null === (d = s.data) ||
                                            void 0 === d
                                              ? void 0
                                              : d.rechargeStatus)) &&
                                          (0, A.tZ)(m.View, {
                                            style: { height: 22 },
                                            onClick: function () {
                                              return n.handleWalletRuleModal(
                                                !0
                                              );
                                            },
                                            children: (0, A.tZ)(k.Z, {
                                              style: {
                                                paddingLeft: 6,
                                                paddingRight: 6,
                                                height: 22,
                                                borderRadius: 6,
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                alignItems: "center",
                                              },
                                              tart: { x: 0, y: 0 },
                                              end: { x: 0, y: 1 },
                                              colors: [
                                                "rgb(255, 89, 89)",
                                                "rgb(255, 138, 115)",
                                              ],
                                              children: (0, A.tZ)(m.Text, {
                                                style: {
                                                  color: "#ffffff",
                                                  fontSize: 12,
                                                  fontFamily:
                                                    "PingFangSC-Semibold",
                                                  fontWeight: "600",
                                                },
                                                children:
                                                  (null == s ||
                                                  null === (c = s.data) ||
                                                  void 0 === c
                                                    ? void 0
                                                    : c.buttonText) || "",
                                              }),
                                            }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, A.BX)(m.View, {
                                style: (0, l.Z)(
                                  (0, l.Z)(
                                    (0, l.Z)(
                                      (0, l.Z)({}, M.simpInfo),
                                      M.paddingHorizontal16
                                    ),
                                    M.paddingTop13
                                  ),
                                  {},
                                  {
                                    paddingBottom: 16,
                                    position: "relative",
                                    zIndex: 2,
                                  }
                                ),
                                children: [
                                  n.renderTopOrderInfo(),
                                  n.renderTitleInfo(),
                                  n.renderVoucherOrQrcode(),
                                ],
                              }),
                            ],
                          });
                        }
                      ),
                      (0, g.Z)((0, f.Z)(n), "renderInfoTitle", function (e) {
                        return (0,
                        A.tZ)(m.View, { style: { paddingBottom: 12, width: "100%" }, children: (0, A.tZ)(m.Text, { style: (0, l.Z)((0, l.Z)({}, M.titleStyle), {}, { paddingBottom: 0 }), children: e }) });
                      }),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "renderBottomOrderInfo",
                        function () {
                          var e,
                            t,
                            i = n.state.orderBaseInfo,
                            o = i.orderStatus;
                          return n.getViewDisplay("bottomOrderInfo") &&
                            n.getIsCancelOrTimeout()
                            ? (0, A.BX)(A.HY, {
                                children: [
                                  n.splitView(),
                                  n.renderInfoTitle("订单信息"),
                                  (0, A.tZ)(m.View, {
                                    style: (0, l.Z)({}, M.orderInfoContainer),
                                    children: (0, A.BX)(m.View, {
                                      style: M.orderInfoLeft,
                                      children: [
                                        (0, A.BX)(m.View, {
                                          style: { width: 68 },
                                          children: [
                                            (0, A.tZ)(m.View, {
                                              children: (0, A.tZ)(m.Text, {
                                                style: M.infoTitle,
                                                children:
                                                  0 === o ? "待支付" : "已支付",
                                              }),
                                            }),
                                            !(
                                              null == i || !i.showOrderNumber
                                            ) &&
                                              (0, A.tZ)(m.View, {
                                                style: M.marginTop8,
                                                children: (0, A.tZ)(m.Text, {
                                                  style: M.infoTitle,
                                                  children: "订单号",
                                                }),
                                              }),
                                          ],
                                        }),
                                        (0, A.BX)(m.View, {
                                          children: [
                                            (0, A.BX)(m.View, {
                                              style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              },
                                              children: [
                                                (0, A.tZ)(m.Text, {
                                                  style: (0, l.Z)(
                                                    {},
                                                    M.infoContent
                                                  ),
                                                  children:
                                                    null != i && i.amount
                                                      ? "¥".concat(
                                                          null == i
                                                            ? void 0
                                                            : i.amount
                                                        )
                                                      : "",
                                                }),
                                                !(
                                                  null ===
                                                    (e =
                                                      n.state
                                                        .returnMoneyData) ||
                                                  void 0 === e ||
                                                  !e.price
                                                ) &&
                                                  30 ===
                                                    (null == i
                                                      ? void 0
                                                      : i.orderStatus) &&
                                                  0 ===
                                                    (null == i
                                                      ? void 0
                                                      : i.returnStatus) &&
                                                  (0, A.tZ)(m.View, {
                                                    style: {
                                                      backgroundColor:
                                                        "#fff2f2",
                                                      borderStyle: "solid",
                                                      borderColor: "#ff5959",
                                                      borderWidth: 0.5,
                                                      borderRadius: 3,
                                                      paddingLeft: 3,
                                                      paddingRight: 3,
                                                      marginLeft: 5,
                                                    },
                                                    children: (0, A.tZ)(
                                                      m.Text,
                                                      {
                                                        style: {
                                                          color: "#fa5a57",
                                                          fontSize: 10,
                                                          fontFamily:
                                                            "PingFangSC-Regular",
                                                        },
                                                        children:
                                                          "出行后可返¥".concat(
                                                            null ===
                                                              (t =
                                                                n.state
                                                                  .returnMoneyData) ||
                                                              void 0 === t
                                                              ? void 0
                                                              : t.price
                                                          ),
                                                      }
                                                    ),
                                                  }),
                                              ],
                                            }),
                                            !(
                                              null == i || !i.showOrderNumber
                                            ) &&
                                              (0, A.tZ)(m.View, {
                                                style: M.marginTop8,
                                                children: (0, A.tZ)(m.Text, {
                                                  style: (0, l.Z)(
                                                    {},
                                                    M.infoContent
                                                  ),
                                                  children:
                                                    (null == i
                                                      ? void 0
                                                      : i.showOrderNumber) ||
                                                    "",
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
                        }
                      ),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "renderPassengersAndOrderInfo",
                        function () {
                          var e = n.state,
                            t = e.passengers,
                            i = e.contactInfo;
                          return null != t && t.length
                            ? (0, A.BX)(A.HY, {
                                children: [
                                  n.renderBottomOrderInfo(),
                                  n.splitView(),
                                  n.renderInfoTitle("预订信息"),
                                  (0, r.Z)(t).map(function (e, i) {
                                    return (0,
                                    A.BX)(m.View, { style: (0, l.Z)((0, l.Z)({}, M.flexRowAlignCenter), {}, { alignItems: "flex-start", marginTop: 0 !== i ? 8 : 0 }), children: [(0, A.tZ)(m.View, { style: { width: 68 }, children: (0, A.BX)(m.Text, { style: (0, l.Z)({}, M.infoTitle), children: ["游客", t.length > 1 ? i + 1 : ""] }) }), (0, A.BX)(m.View, { style: { flex: 1 }, children: [!(null == e || !e.cName) && (0, A.tZ)(m.Text, { style: (0, l.Z)({}, M.infoContent), children: null == e ? void 0 : e.cName }), !(null == e || !e.eName) && (0, A.tZ)(m.Text, { style: (0, l.Z)({}, M.infoContent), children: null == e ? void 0 : e.eName }), !(null == e || !e.idCardNo) && (0, A.BX)(m.View, { style: (0, l.Z)((0, l.Z)({}, M.flexRowAlignCenter), {}, { marginTop: 8 }), children: [(0, A.BX)(m.Text, { style: M.infoContent, children: [(null == e ? void 0 : e.idCardName) || (null == e ? void 0 : e.eName) || "", "："] }), (0, A.tZ)(m.Text, { style: M.infoContent, children: null == e ? void 0 : e.idCardNo })] }), (0, A.BX)(m.View, { style: (0, l.Z)((0, l.Z)({}, M.flexRowAlignCenter), {}, { marginTop: 8 }), children: [(0, A.tZ)(m.Text, { style: M.infoContent, children: "手机号：" }), (0, A.tZ)(m.Text, { style: M.infoContent, children: null == e ? void 0 : e.mobile })] })] })] }, i);
                                  }),
                                  (0, A.BX)(m.View, {
                                    style: (0, l.Z)(
                                      (0, l.Z)({}, M.flexRowAlignCenter),
                                      {},
                                      { alignItems: "flex-start", marginTop: 8 }
                                    ),
                                    children: [
                                      (0, A.tZ)(m.View, {
                                        style: { width: 68 },
                                        children: (0, A.tZ)(m.Text, {
                                          style: (0, l.Z)({}, M.infoTitle),
                                          children: "联系信息",
                                        }),
                                      }),
                                      (0, A.BX)(m.View, {
                                        style: { flex: 1 },
                                        children: [
                                          (0, A.tZ)(m.View, {
                                            style: (0, l.Z)(
                                              {},
                                              M.flexRowAlignCenter
                                            ),
                                            children: (0, A.tZ)(m.Text, {
                                              style: M.infoContent,
                                              children:
                                                null == i
                                                  ? void 0
                                                  : i.contactName,
                                            }),
                                          }),
                                          (0, A.tZ)(m.View, {
                                            style: { marginTop: 8 },
                                            children: (0, A.tZ)(m.Text, {
                                              style: M.infoContent,
                                              children:
                                                null == i ? void 0 : i.mobile,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : null;
                        }
                      ),
                      (0, g.Z)((0, f.Z)(n), "renderColumText", function (e) {
                        return (0, A.tZ)(m.View, {
                          style: (0, l.Z)(
                            (0, l.Z)({}, M.flexRowAlignCenter),
                            {},
                            {
                              width: 29,
                              height: "100%",
                              backgroundColor: "rgba(0,128,255, 0.08)",
                              borderTopLeftRadius: 10,
                              borderBottomLeftRadius: 10,
                              marginLeft: -0.5,
                            }
                          ),
                          children: (0, A.tZ)(m.View, {
                            style: { width: "100%" },
                            children: e.split("").map(function (e, t) {
                              return (0,
                              A.tZ)(m.View, { style: (0, l.Z)((0, l.Z)({}, M.flexRowAlignCenter), {}, { width: "100%", justifyContent: "center" }), children: (0, A.tZ)(m.Text, { style: { color: "#0080ff", fontSize: 12, fontFamily: "PingFangSC-Medium", fontWeight: "500" }, children: e }) }, t);
                            }),
                          }),
                        });
                      }),
                      (0, g.Z)((0, f.Z)(n), "renderVoucher", function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "",
                          t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : "",
                          i =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : 1,
                          o =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : 1,
                          r =
                            arguments.length > 4 && void 0 !== arguments[4]
                              ? arguments[4]
                              : "",
                          a =
                            arguments.length > 5 &&
                            void 0 !== arguments[5] &&
                            arguments[5],
                          d = o > 1 ? 231 : oe.windowWidth - 50;
                        return (0,
                        A.BX)(m.View, { style: (0, l.Z)((0, l.Z)({}, M.voucherCommonStyle), {}, { height: 64, width: d, marginLeft: 0 !== i ? 8 : 0 }), children: [n.renderColumText(r), (0, A.BX)(m.View, { style: (0, l.Z)((0, l.Z)({}, M.flexRowAlignCenter), {}, { marginLeft: 16, flexDirection: "column", alignItems: a ? "center" : "flex-start", maringTop: -2 }), children: [!!e && (0, A.tZ)(m.View, { children: (0, A.tZ)(m.Text, { style: { color: a ? "#82868f" : "#0b1323", fontSize: 14, fontFamily: "PingFangSC-Medium", fontWeight: "500" }, children: e }) }), (0, A.tZ)(m.View, { style: { marginTop: 2 }, children: (0, A.tZ)(m.Text, { style: { color: "#82868f", fontSize: 13, fontFamily: "PingFangSC-Regular" }, children: t }) })] })] }, i);
                      }),
                      (0, g.Z)((0, f.Z)(n), "saveImage", function (e) {
                        (0, E.FE)(e);
                      }),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "getIsCancelOrTimeout",
                        function () {
                          var e = n.state.orderBaseInfo;
                          return !(
                            (null != e && e.statusName.includes("已取消")) ||
                            (null != e && e.statusName.includes("超时未支付"))
                          );
                        }
                      ),
                      (0, g.Z)((0, f.Z)(n), "renderQrCode", function () {
                        var e = n.state.voucherInfo,
                          t = (null == e ? void 0 : e.voucherInfolist) || [];
                        if (null == t || !t.length) return null;
                        var i = (null == t ? void 0 : t.length) || 0,
                          o = i > 1 ? 231 : oe.windowWidth - 50,
                          r = "";
                        i > 1 && (r = "使用凭证.多人一码");
                        return (
                          v.Z.isCRN
                            ? t.some(function (e) {
                                return !e.voucherImageUrl;
                              })
                            : t.some(function (e) {
                                return 1 !== (null == e ? void 0 : e.urlType);
                              })
                        )
                          ? t.map(function (e, o) {
                              return null != e && e.voucherCode
                                ? n.renderVoucher(
                                    "数字验证码".concat(
                                      i > 1 ? "(多人一码)" : ""
                                    ),
                                    null == e ? void 0 : e.voucherCode,
                                    o,
                                    t.length,
                                    "凭证",
                                    !0
                                  )
                                : null;
                            })
                          : t.map(function (e, i) {
                              return (0, A.BX)(
                                m.View,
                                {
                                  style: (0, l.Z)(
                                    (0, l.Z)({}, M.voucherCommonStyle),
                                    {},
                                    {
                                      height: 177,
                                      width: o,
                                      marginLeft: 0 !== i ? 8 : 0,
                                    }
                                  ),
                                  children: [
                                    n.renderColumText(
                                      r ||
                                        "使用凭证".concat(
                                          t.length > 1 ? i + 1 : ""
                                        )
                                    ),
                                    (0, A.BX)(m.View, {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flex: 1,
                                      },
                                      children: [
                                        (0, A.tZ)(m.View, {
                                          style: M.flexRowAlignCenter,
                                          children: (0, A.BX)(m.Text, {
                                            style: {
                                              color: "#82868f",
                                              fontSize: 10,
                                              fontFamily: "PingFangSC-Regular",
                                            },
                                            children: [
                                              "辅助码：",
                                              (null == e
                                                ? void 0
                                                : e.voucherCode) || "",
                                            ],
                                          }),
                                        }),
                                        v.Z.isCRN &&
                                        1 !== (null == e ? void 0 : e.urlType)
                                          ? (0, A.tZ)(m.View, {
                                              onClick: function () {
                                                (0, te.cE)(
                                                  null == e
                                                    ? void 0
                                                    : e.voucherImageUrl
                                                );
                                              },
                                              style: {
                                                width: 119,
                                                height: 41,
                                                backgroundColor: "#edf6ff",
                                                borderRadius: 12,
                                                color: "#198cff",
                                                fontSize: 15,
                                                fontFamily: "PingFangSC-Medium",
                                                fontWeight: "500",
                                                letterSpacing: 0,
                                                lineHeight: 41,
                                                textAlign: "center",
                                                marginTop: 10,
                                              },
                                              children: "查看二维码",
                                            })
                                          : (0, A.BX)(A.HY, {
                                              children: [
                                                (0, A.tZ)(m.Image, {
                                                  widthFix: !0,
                                                  resizeMode: "stretch",
                                                  src:
                                                    (null == e
                                                      ? void 0
                                                      : e.voucherImageUrl) ||
                                                    "",
                                                  style: {
                                                    width: 116,
                                                    height: 116,
                                                    marginTop: 3,
                                                  },
                                                }),
                                                (0, A.tZ)(m.View, {
                                                  id: "AMCd",
                                                  onClick: function () {
                                                    return n.saveImage(
                                                      null == e
                                                        ? void 0
                                                        : e.voucherImageUrl
                                                    );
                                                  },
                                                  children: (0, A.tZ)(m.Text, {
                                                    style: {
                                                      color: "#198cff",
                                                      fontSize: 13,
                                                      fontFamily:
                                                        "PingFangSC-Regular",
                                                      marginTop: 3,
                                                    },
                                                    children: "保存到相册",
                                                  }),
                                                }),
                                              ],
                                            }),
                                      ],
                                    }),
                                  ],
                                },
                                i
                              );
                            });
                      }),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "renderVoucherOrQrcode",
                        function () {
                          var e = n.state,
                            t = e.voucherInfo,
                            i = e.passengers,
                            o = e.orderBaseInfo,
                            r = v.Z.isCRN
                              ? "auto"
                              : (oe.windowWidth - 56) * (2 * i.length) -
                                (oe.windowWidth - 56) / 2;
                          return n.getViewDisplay("voucherOrQrcode") &&
                            n.getIsCancelOrTimeout()
                            ? (0, A.BX)(m.View, {
                                style: { width: "100%" },
                                children: [
                                  n.complexSplitView(),
                                  n.renderInfoTitle(
                                    (null == t ? void 0 : t.useDesc) ||
                                      "凭「身份证或电子凭证」直接验证使用"
                                  ),
                                  (0, A.tZ)(R.Z, {
                                    horizontal: !0,
                                    scrollX: !0,
                                    showsHorizontalScrollIndicator: !1,
                                    style: { flex: 1 },
                                    children: (0, A.BX)(m.View, {
                                      children: [
                                        (0, A.BX)(m.View, {
                                          style: (0, l.Z)(
                                            (0, l.Z)({}, M.flexRowAlignCenter),
                                            {},
                                            { width: r }
                                          ),
                                          children: [
                                            null == i
                                              ? void 0
                                              : i.map(function (e, t) {
                                                  return null != e && e.idCardNo
                                                    ? n.renderVoucher(
                                                        null == e
                                                          ? void 0
                                                          : e.cName,
                                                        null == e
                                                          ? void 0
                                                          : e.idCardNo,
                                                        t,
                                                        null == i
                                                          ? void 0
                                                          : i.length,
                                                        "证件"
                                                      )
                                                    : null;
                                                }),
                                            (0, A.tZ)(m.View, {
                                              style: { height: 8 },
                                            }),
                                          ],
                                        }),
                                        (0, A.BX)(m.View, {
                                          style: (0, l.Z)(
                                            (0, l.Z)({}, M.flexRowAlignCenter),
                                            {},
                                            { marginTop: 8, width: r }
                                          ),
                                          children: [
                                            !(null == t || !t.voucherDesc) &&
                                              0 === o.orderStatus &&
                                              n.renderVoucher(
                                                "",
                                                null == t
                                                  ? void 0
                                                  : t.voucherDesc,
                                                0,
                                                "凭证"
                                              ),
                                            n.renderQrCode(),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              })
                            : null;
                        }
                      ),
                      (0, g.Z)(
                        (0, f.Z)(n),
                        "renderTobepaidTopView",
                        function () {
                          var e,
                            t = n.state.orderBaseInfo;
                          return 0 !== t.orderStatus ||
                            (null != t &&
                              null !== (e = t.statusName) &&
                              void 0 !== e &&
                              e.includes("已取消"))
                            ? null
                            : (0, A.BX)(m.View, {
                                style: M.tobepaidTopView,
                                children: [
                                  (0, A.BX)(m.View, {
                                    style: M.tobepaidTopViewLeft,
                                    children: [
                                      (0, A.BX)(m.View, {
                                        style: M.tobepaidTopViewLeftInfo,
                                        children: [
                                          (0, A.tZ)(m.Text, {
                                            style: (0, l.Z)(
                                              (0, l.Z)({}, M.titleStyle),
                                              {},
                                              { fontSize: 16, paddingBottom: 0 }
                                            ),
                                            children: "支付金额",
                                          }),
                                          (0, A.BX)(m.Text, {
                                            style: (0, l.Z)(
                                              (0, l.Z)({}, M.titleStyle),
                                              {},
                                              {
                                                fontSize: 16,
                                                paddingBottom: 0,
                                                color: "#FF5959",
                                                marginLeft: 5,
                                              }
                                            ),
                                            children: ["¥", t.amount],
                                          }),
                                          (0, A.tZ)(m.View, {
                                            style: (0, l.Z)(
                                              (0, l.Z)(
                                                {},
                                                M.flexRowAlignCenter
                                              ),
                                              {},
                                              { marginLeft: 8 }
                                            ),
                                            children:
                                              !!t.deductPrice &&
                                              (0, A.tZ)(m.View, {
                                                style: M.tobepaidTopTag,
                                                children: (0, A.BX)(m.Text, {
                                                  style: {
                                                    color: "#fa5a57",
                                                    fontSize: 10,
                                                    fontFamily:
                                                      "PingFangSC-Regular",
                                                  },
                                                  children: [
                                                    "已减",
                                                    t.deductPrice,
                                                    "元",
                                                  ],
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                      (0, A.tZ)(m.View, {
                                        children: (0, A.tZ)(m.Text, {
                                          style: M.tobepaidTopViewTips,
                                          children:
                                            "库存有限，请尽快完成付款，过时自动取消",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, A.tZ)(m.View, {
                                    style: M.tobepaidTopViewBtn,
                                    id: "AMCe",
                                    onClick: function () {
                                      return n.callPayOperation(t.orderNumber);
                                    },
                                    children: (0, A.tZ)(m.Text, {
                                      style: {
                                        color: "#ffffff",
                                        fontSize: 14,
                                        fontFamily: "PingFangSC-Semibold",
                                        fontWeight: "600",
                                      },
                                      children: "立即支付",
                                    }),
                                  }),
                                  !!n.state.returnMoneyData.price &&
                                    (0, A.tZ)(J, {
                                      tag: "可返¥".concat(
                                        n.state.returnMoneyData.price
                                      ),
                                      style: { right: 16, top: 6 },
                                    }),
                                ],
                              });
                        }
                      ),
                      (n.timer = null),
                      n
                    );
                  }
                  return (
                    (0, s.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, y.getCurrentInstance)();
                          if (e && e.router && e.router.params) {
                            var t = e.router.params,
                              i = t.orderNumber,
                              n = t.source,
                              o =
                                void 0 === n
                                  ? v.Z.isCRN
                                    ? "app"
                                    : "wechat"
                                  : n,
                              r = t.hasExchange,
                              l = void 0 !== r && r,
                              a = t.fromPage;
                            console.log(e.router.params, this.props),
                              this.setState({
                                source: o,
                                orderNumber: i,
                                hasExchange: l,
                                fromPage: a,
                              }),
                              this.getOrderDetail(i);
                          }
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "onPullDownRefresh",
                        value: function () {
                          this.getOrderDetail(this.state.orderNumber, !0);
                        },
                      },
                      {
                        key: "pageDidAppear",
                        value: function () {
                          this.autoRefresh();
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.autoRefresh();
                        },
                      },
                      { key: "componentWillUnmount", value: function () {} },
                      {
                        key: "goBookAgain",
                        value: function () {
                          var e = this.state.scenicspotInfo,
                            t = e.scenicspotId;
                          (0, te.l4)({
                            data: {
                              scenicSpotId: t,
                              source: this.state.source || "wechat",
                              scenicInfo: encodeURIComponent(
                                JSON.stringify({
                                  address: e.address || "",
                                  name: e.scenicspotName || "景点详情",
                                })
                              ),
                            },
                            callback: function () {},
                          });
                        },
                      },
                      {
                        key: "cancelOrder",
                        value: function (e) {
                          var t = this,
                            i = this.state.orderBaseInfo,
                            n = i.deductPrice && Number(i.deductPrice) > 0;
                          (0, C.sl)({ orderNumber: e })
                            .then(function (i) {
                              1 === i.resultCode
                                ? (E.FN.show("订单取消成功"),
                                  n &&
                                    "ticketBook_repeat" == t.state.fromPage &&
                                    (t.props.callback && t.props.callback(),
                                    t.invokeCallback && t.invokeCallback(!0)),
                                  t.getOrderDetail(e))
                                : E.FN.show(i.resultMessage, "none");
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        },
                      },
                      {
                        key: "checkCanCancel",
                        value: function (e) {
                          var t = this;
                          (0, z.Q)(),
                            (0, C.Oq)({ orderNumber: e })
                              .then(function (i) {
                                console.log("能否退订", i),
                                  1 == i.resultCode
                                    ? ((0, z.Z)(),
                                      1 == i.returnFlag
                                        ? (0, te.ui)(
                                            {
                                              params: {
                                                orderNumber: e,
                                                refundInfo: i,
                                                source: t.state.source,
                                              },
                                              self: t,
                                            },
                                            function (e) {
                                              if (
                                                (t.getOrderDetail(
                                                  t.state.orderNumber
                                                ),
                                                t.cancelHotelLotteryForTicketOrder(
                                                  {
                                                    orderNumber:
                                                      t.state.orderNumber,
                                                  }
                                                ),
                                                e && e)
                                              )
                                                var i = setTimeout(function () {
                                                  (0, F.v)("", e, {
                                                    text: "知道了",
                                                    callback: function () {},
                                                  }),
                                                    clearTimeout(i);
                                                }, 500);
                                            }
                                          )
                                        : (0, F.v)("", i.returnMsg, {
                                            text: "知道了",
                                            callback: function () {},
                                          }))
                                    : ((0, z.Z)(),
                                      E.FN.show(i.resultMessage || "网络异常"));
                              })
                              .catch(function (e) {
                                (0, z.Z)(), console.log(e);
                              });
                        },
                      },
                      {
                        key: "renderSpotDetail",
                        value: function () {
                          var e = this,
                            t = this.state.scenicspotInfo,
                            i = t.returnRules;
                          return (0, A.BX)(m.View, {
                            children: [
                              (0, A.BX)(m.View, {
                                style: M.spotName,
                                children: [
                                  (0, A.tZ)(m.Text, {
                                    style: {
                                      fontFamily: ie,
                                      fontSize: 16,
                                      color: "#333",
                                    },
                                    children:
                                      (null == t ? void 0 : t.scenicspotName) ||
                                      "",
                                  }),
                                  (0, A.BX)(m.View, {
                                    style: M.flexRowAlignCenter,
                                    id: "AMCR",
                                    onClick: function () {
                                      e.goSpotDetailPage(t.scenicspotId);
                                    },
                                    children: [
                                      (0, A.tZ)(m.Text, {
                                        style: (0, l.Z)(
                                          (0, l.Z)({}, M.infoContent),
                                          {},
                                          { color: "#999" }
                                        ),
                                        children: "景点详情",
                                      }),
                                      (0, A.tZ)(m.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                                        style: { width: 12, height: 12 },
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, A.BX)(m.View, {
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                },
                                children: [
                                  (0, A.tZ)(m.Text, {
                                    style: (0, l.Z)(
                                      (0, l.Z)({}, M.enterTime),
                                      M.infoTitle
                                    ),
                                    children: "入园时间",
                                  }),
                                  (0, A.tZ)(m.Text, {
                                    style: (0, l.Z)(
                                      (0, l.Z)({}, M.enterTimeStr),
                                      M.infoContent
                                    ),
                                    children: t.openTimeDesc,
                                  }),
                                ],
                              }),
                              (0, A.BX)(m.View, {
                                style: M.addressWrap,
                                children: [
                                  (0, A.tZ)(m.Text, {
                                    style: (0, l.Z)(
                                      (0, l.Z)({}, M.enterAddress),
                                      M.infoTitle
                                    ),
                                    children: "入园地址",
                                  }),
                                  (0, A.tZ)(m.Text, {
                                    style: (0, l.Z)(
                                      (0, l.Z)({}, M.enterAddressStr),
                                      M.infoContent
                                    ),
                                    children: t.address,
                                  }),
                                  (0, A.tZ)(m.View, {
                                    id: "AMCT",
                                    onClick: function () {
                                      e.navigateMap();
                                    },
                                    children: (0, A.BX)(m.View, {
                                      style: M.navWrap,
                                      children: [
                                        (0, A.tZ)(m.Image, {
                                          resizeMode: "cover",
                                          src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_dh@3x.png",
                                          style: { width: 12, height: 12 },
                                        }),
                                        (0, A.tZ)(m.Text, {
                                          style: {
                                            fontFamily: ne,
                                            marginLeft: 1,
                                            fontSize: 12,
                                            color: "#198cff",
                                          },
                                          children: "去这里",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              !(null == i || !i.length) &&
                                (0, A.BX)(A.HY, {
                                  children: [
                                    (0, A.BX)(m.View, {
                                      style: {
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: 10,
                                      },
                                      children: [
                                        (0, A.tZ)(m.View, {
                                          children: (0, A.tZ)(m.Text, {
                                            style: M.refundRule,
                                            children: "退改规则",
                                          }),
                                        }),
                                        (0, A.tZ)(m.View, {
                                          style: { flex: 1 },
                                          children: (0, A.tZ)(m.View, {
                                            style: {
                                              display: "flex",
                                              flexDirection: "row",
                                              justifyContent: "flex-start",
                                              alignItems: "center",
                                            },
                                            children: (0, A.tZ)(m.View, {
                                              style: {
                                                backgroundColor: "#fff2f2",
                                                paddingLeft: 3,
                                                paddingRight: 3,
                                                borderColor: "#ffb4b4",
                                                borderStyle: "solid",
                                                borderWidth: 0.5,
                                                borderRadius: 4,
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                              },
                                              children: (0, A.tZ)(m.Text, {
                                                style: {
                                                  fontFamily: ne,
                                                  fontSize: 11,
                                                  color: "#FA5A57",
                                                },
                                                children: t.returnTag,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, A.tZ)(m.View, {
                                      style: {
                                        position: "relative",
                                        marginTop: 7,
                                      },
                                      children: (0, A.tZ)(k.Z, {
                                        start: { x: 0, y: 0 },
                                        end: { x: 1, y: 0 },
                                        colors: [
                                          "rgba(216,216,216,0.12)",
                                          "rgba(238,238,238,0.12)",
                                        ],
                                        style: {
                                          width: "100%",
                                          borderRadius: 8,
                                          paddingLeft: 8,
                                          paddingTop: 8,
                                          paddingBottom: 8,
                                          paddingRight: 8,
                                        },
                                        children: (0, A.tZ)(m.View, {
                                          children: i.map(function (t, i) {
                                            return e.ruleItem(t, i);
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          });
                        },
                      },
                      {
                        key: "pasItem",
                        value: function (e, t, i) {
                          return (0, A.BX)(
                            m.View,
                            {
                              style: {
                                paddingTop: 10,
                                paddingBottom: 2,
                                borderWidth: 0,
                                borderColor: "#e5e5e5",
                                borderBottomWidth: i ? 0 : 0.5,
                              },
                              children: [
                                (0, A.BX)(m.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    marginBottom: 8,
                                  },
                                  children: [
                                    (0, A.BX)(m.Text, {
                                      style: {
                                        fontFamily: ne,
                                        fontSize: 14,
                                        color: T.Z.mainColor,
                                        width: 71,
                                        lineHeight: 20,
                                      },
                                      children: ["游客", t + 1],
                                    }),
                                    !!e.cName &&
                                      (0, A.tZ)(m.Text, {
                                        style: {
                                          fontFamily: ne,
                                          fontSize: 14,
                                          color: "#333",
                                          lineHeight: 20,
                                          marginRight: 15,
                                        },
                                        children: e.cName,
                                      }),
                                    !!e.eName &&
                                      (0, A.tZ)(m.Text, {
                                        style: {
                                          fontFamily: ne,
                                          fontSize: 14,
                                          color: "#333",
                                          lineHeight: 20,
                                        },
                                        children: e.eName,
                                      }),
                                  ],
                                }),
                                !!e.idCardNo &&
                                  (0, A.BX)(m.View, {
                                    style: {
                                      display: "flex",
                                      flexDirection: "row",
                                      marginBottom: 8,
                                    },
                                    children: [
                                      (0, A.tZ)(m.Text, {
                                        numberOfLines: 1,
                                        style: {
                                          fontFamily: ne,
                                          fontSize: 14,
                                          color: "#999",
                                          width: 71,
                                          lineHeight: 20,
                                        },
                                        children: e.idCardName,
                                      }),
                                      (0, A.tZ)(m.Text, {
                                        style: {
                                          fontFamily: ne,
                                          fontSize: 14,
                                          color: "#333",
                                          lineHeight: 20,
                                        },
                                        children: e.idCardNo,
                                      }),
                                    ],
                                  }),
                                !!e.mobile &&
                                  (0, A.BX)(m.View, {
                                    style: {
                                      display: "fex",
                                      flexDirection: "row",
                                      marginBottom: 8,
                                    },
                                    children: [
                                      (0, A.tZ)(m.Text, {
                                        style: {
                                          fontFamily: ne,
                                          fontSize: 14,
                                          color: "#999",
                                          width: 71,
                                          lineHeight: 20,
                                        },
                                        children: "大陆手机",
                                      }),
                                      (0, A.tZ)(m.Text, {
                                        style: {
                                          fontFamily: ne,
                                          fontSize: 14,
                                          color: "#333",
                                          lineHeight: 20,
                                        },
                                        children: e.mobile,
                                      }),
                                    ],
                                  }),
                              ],
                            },
                            t + ""
                          );
                        },
                      },
                      {
                        key: "pasInfo",
                        value: function (e) {
                          var t = this;
                          return (0, A.BX)(m.View, {
                            style: {
                              marginTop: 15,
                              paddingLeft: 16,
                              paddingRight: 16,
                            },
                            children: [
                              (0, A.tZ)(m.View, {
                                style: { height: 22 },
                                children: (0, A.tZ)(m.Text, {
                                  style: {
                                    fontFamily: ie,
                                    color: "#333",
                                    fontSize: 16,
                                  },
                                  children: "出行人信息",
                                }),
                              }),
                              e.map(function (i, n) {
                                return t.pasItem(i, n, n == e.length - 1);
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "invoiceApply",
                        value: function () {
                          var e = this;
                          return (0, A.BX)(m.View, {
                            id: "AMCU",
                            onClick: function () {
                              e.ubtTrace("c_invoiceApplication"),
                                e.applyInvoice();
                            },
                            style: M.invoiceWrap,
                            children: [
                              (0, A.tZ)(m.Text, {
                                style: (0, l.Z)(
                                  (0, l.Z)({}, M.invoiceText),
                                  M.infoTitle
                                ),
                                children: "发票申请",
                              }),
                              (0, A.tZ)(m.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                                style: { width: 12, height: 12 },
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "progressBar",
                        value: function (e) {
                          var t = this,
                            i = [];
                          return (
                            e.forEach(function (n, o) {
                              var r = t.getEffectLineNum(n),
                                l = 1 == r ? 34 : 2 == r ? 58 : 77;
                              2 == e[o].status &&
                                e[o + 1] &&
                                2 == e[o + 1].status &&
                                (l -= 1),
                                1 == r &&
                                  2 == n.status &&
                                  e[o + 1] &&
                                  0 != e[o + 1].status &&
                                  !e[o + 2] &&
                                  (l += 3),
                                e[o + 1] ? e[o + 1].status : (l = 0);
                              var a = (0, A.tZ)(m.View, {
                                style: {
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  width: 16,
                                  height: 16,
                                  borderRadius: 16,
                                  backgroundColor: t.getRadiusBg(e, o).wrapBg,
                                },
                                children: (0, A.tZ)(
                                  m.View,
                                  {
                                    style: {
                                      width: 8,
                                      height: 8,
                                      backgroundColor: t.getRadiusBg(e, o).bg,
                                      borderRadius: 8,
                                    },
                                  },
                                  o + "2"
                                ),
                              });
                              i.push(a);
                              var d = (0, A.tZ)(
                                m.View,
                                {
                                  style: {
                                    width: 1,
                                    height: l,
                                    backgroundColor: "#d8d8d8",
                                  },
                                },
                                o + "3"
                              );
                              i.push(d);
                            }),
                            console.log(i),
                            (0, A.tZ)(m.View, {
                              style: {
                                width: 14,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              },
                              children: i,
                            })
                          );
                        },
                      },
                      {
                        key: "progressItem",
                        value: function (e, t, i) {
                          return (0, A.BX)(
                            m.View,
                            {
                              style: {
                                marginBottom: i.length - 1 === t ? 0 : 18,
                              },
                              children: [
                                (0, A.tZ)(m.View, {
                                  children: (0, A.tZ)(m.Text, {
                                    style: (0, l.Z)(
                                      (0, l.Z)({}, M.refundProTitle),
                                      {},
                                      {
                                        fontWeight: "500",
                                        fontFamily: 1 == e.status ? ie : ne,
                                        color:
                                          0 == e.status
                                            ? "#999"
                                            : !i[t + 1] ||
                                              (i[t + 1] && 0 == i[t + 1].status)
                                            ? "#222"
                                            : "#999",
                                      }
                                    ),
                                    children: e.title,
                                  }),
                                }),
                                (0, A.tZ)(m.View, {
                                  children:
                                    !!e.desc &&
                                    (0, A.tZ)(m.Text, {
                                      style: (0, l.Z)(
                                        (0, l.Z)({}, M.refundDesc),
                                        {},
                                        {
                                          color: this.getRadiusBg(i, t)
                                            .descColor,
                                        }
                                      ),
                                      children: e.desc,
                                    }),
                                }),
                                (0, A.tZ)(m.View, {
                                  children:
                                    !!e.proccessTime &&
                                    (0, A.tZ)(m.Text, {
                                      style: (0, l.Z)(
                                        (0, l.Z)({}, M.refundProTime),
                                        {},
                                        { color: "#999" }
                                      ),
                                      children: e.proccessTime,
                                    }),
                                }),
                              ],
                            },
                            t
                          );
                        },
                      },
                      {
                        key: "footBtnView",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.orderBaseInfo,
                            n = t.paymentTips,
                            o = i.orderNumber,
                            r = 0.376 * oe.windowWidth,
                            a = i.payFlag,
                            d = i.rebookingFlag,
                            c = i.cancelFlag,
                            s = i.returnFlag,
                            f =
                              1 == d && 0 == a && 0 == c && 0 == s
                                ? oe.windowWidth - 30
                                : r + 69,
                            u = !1,
                            h = "";
                          i.deductPrice &&
                            Number(i.deductPrice) > 0 &&
                            ((u = !0),
                            (h = "该订单已使用".concat(
                              i.deductPrice,
                              "元优惠券，若取消订单，优惠券自动返还"
                            ))),
                            n && n.length > 0 && ((u = !0), (h = n));
                          var g = 1 !== c && 1 !== s && 1 !== a && 1 == d;
                          return (0, A.BX)(m.View, {
                            style: { width: "100%", position: "relative" },
                            children: [
                              1 == a &&
                                u &&
                                (0, A.tZ)(m.View, {
                                  style: M.useCouponTipWrap,
                                  children: (0, A.tZ)(m.Text, {
                                    style: M.useCouponText,
                                    children: h,
                                  }),
                                }),
                              (0, A.BX)(m.View, {
                                style: (0, l.Z)(
                                  (0, l.Z)({}, M.footWrap),
                                  {},
                                  { height: 52 }
                                ),
                                children: [
                                  1 == c &&
                                    (0, A.tZ)(m.View, {
                                      style: (0, l.Z)(
                                        (0, l.Z)({}, M.cancelOrder),
                                        {},
                                        { width: r }
                                      ),
                                      id: "AMCW",
                                      onClick: function () {
                                        e.ubtTrace("c_cancel"),
                                          e.cancelOrderBtnClik(o);
                                      },
                                      children: (0, A.tZ)(m.Text, {
                                        style: M.cancelText,
                                        children: "取消订单",
                                      }),
                                    }),
                                  1 == s &&
                                    (0, A.tZ)(m.View, {
                                      style: (0, l.Z)(
                                        (0, l.Z)({}, M.cancelOrder),
                                        {},
                                        { width: r }
                                      ),
                                      id: "AMCX",
                                      onClick: function () {
                                        e.ubtTrace("c_refund"),
                                          e.cancelOrderBtnClik(o);
                                      },
                                      children: (0, A.tZ)(m.Text, {
                                        style: M.cancelText,
                                        children: "申请退票",
                                      }),
                                    }),
                                  1 == a &&
                                    (0, A.tZ)(m.View, {
                                      style: (0, l.Z)(
                                        (0, l.Z)({}, M.goPayBtn),
                                        {},
                                        { width: f, marginLeft: 9 }
                                      ),
                                      id: "AMCY",
                                      onClick: function () {
                                        e.callPayOperation(o);
                                      },
                                      children: (0, A.tZ)(m.Text, {
                                        style: M.goPayText,
                                        children: "去支付",
                                      }),
                                    }),
                                  1 == d &&
                                    (0, A.tZ)(m.View, {
                                      style: (0, l.Z)(
                                        (0, l.Z)({}, M.bookAgain),
                                        {},
                                        { width: f, marginLeft: g ? 0 : 9 }
                                      ),
                                      id: "AMCZ",
                                      onClick: function () {
                                        e.ubtTrace("c_bookAgain"),
                                          e.goBookAgain();
                                      },
                                      children: (0, A.tZ)(m.Text, {
                                        style: M.bookAgainText,
                                        children: "再次预订",
                                      }),
                                    }),
                                ],
                              }),
                              !!this.state.returnMoneyData.price &&
                                0 === i.orderStatus &&
                                (0, A.tZ)(J, {
                                  tag: "可返¥".concat(
                                    this.state.returnMoneyData.price
                                  ),
                                  style: { right: 2, top: 4 },
                                }),
                              (0, A.tZ)(D.Z, {}),
                            ],
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i,
                            n = this,
                            o = this.state,
                            r = o.orderBaseInfo,
                            a = o.refundInfos,
                            d = o.publicBargin;
                          return (0, A.BX)(m.View, {
                            style: M.container,
                            children: [
                              (0, A.BX)(m.View, {
                                style: M.headerTop,
                                children: [
                                  (0, A.tZ)(m.View, {
                                    style: {
                                      height: 44,
                                      backgroundColor: v.Z.isTieyou
                                        ? "#ACB6E6"
                                        : "#B3D2FF",
                                    },
                                  }),
                                  (0, A.tZ)(k.Z, {
                                    start: { x: 0, y: 0 },
                                    end: { x: 0, y: 1 },
                                    colors: v.Z.isTieyou
                                      ? ["#ACB6E6", "#f5f5f5"]
                                      : ["#B3D2FF", "#f5f5f5"],
                                    style: { flex: 1, width: "100%" },
                                  }),
                                ],
                              }),
                              (0, A.tZ)(x.Z, {
                                title: "订单详情",
                                titleFontSize: 18,
                                page: this,
                                titleColor: "#222",
                                colors: ["transparent", "transparent"],
                                backgroundColor: "rgba(255,255,255,0)",
                                renderRightView: this.renderFeedBackView,
                                renderLeftView: this.renderLeftView,
                                pop: function () {
                                  n.navigateBack();
                                },
                                propStyle: {
                                  box: "backgroundColor: ".concat(
                                    "#c8dffc",
                                    "; color: #222"
                                  ),
                                },
                                className: "ticketzOrderDetailHeader",
                              }),
                              (0, A.BX)(R.Z, {
                                ref: function (e) {
                                  n.scroller = e;
                                },
                                showIndicator: this.state.isRefresh,
                                rereshResult: this.state.rereshResult,
                                style: { flex: 1 },
                                showsVerticalScrollIndicator: !1,
                                refreshControl: (0, A.tZ)(B.Z, {
                                  failContent: "刷新失败，请重试",
                                  onRefresh: function () {
                                    n.getOrderDetail(n.state.orderNumber, !0);
                                  },
                                }),
                                children: [
                                  this.state.orderEmpty && (0, A.tZ)(G, {}),
                                  !this.state.orderEmpty &&
                                    this.state.isShowView &&
                                    (0, A.BX)(A.HY, {
                                      children: [
                                        this.renderOrderHeaderDesc(),
                                        (0, A.BX)(m.View, {
                                          style: M.paddingHorizontal8,
                                          children: [
                                            this.renderTobepaidTopView(),
                                            this.renderTicketSympInfo(),
                                            (0, A.BX)(m.View, {
                                              style: (0, l.Z)(
                                                (0, l.Z)(
                                                  (0, l.Z)({}, M.infoContainer),
                                                  M.marginTop8
                                                ),
                                                {},
                                                { maringTop: 9 }
                                              ),
                                              children: [
                                                this.renderSpotDetail(),
                                                this.renderPassengersAndOrderInfo(),
                                                1 == r.invoiceFlag &&
                                                  this.splitView(),
                                                1 == r.invoiceFlag &&
                                                  this.invoiceApply(),
                                              ],
                                            }),
                                            !v.Z.isCRN &&
                                              30 ==
                                                (null == r
                                                  ? void 0
                                                  : r.orderStatus) &&
                                              (0, A.BX)(m.View, {
                                                id: "AMCf",
                                                onClick: function () {
                                                  n.callCustomerService();
                                                },
                                                style: {
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                  height: 46,
                                                  backgroundColor: "#fff",
                                                  borderRadius: 12,
                                                  marginTop: 8,
                                                  paddingLeft: 16,
                                                  paddingRight: 16,
                                                },
                                                children: [
                                                  (0, A.tZ)(m.Text, {
                                                    style: {
                                                      color: "#222",
                                                      fontSize: 16,
                                                      fontFamily:
                                                        "PingFangSC-Medium",
                                                      fontWeight: "500",
                                                    },
                                                    children: "联系客服",
                                                  }),
                                                  (0, A.tZ)(m.Image, {
                                                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/mpxqy_icon_dh@3x.png",
                                                    style: {
                                                      width: 16.25,
                                                      height: 16.25,
                                                    },
                                                  }),
                                                ],
                                              }),
                                            (0, A.tZ)(m.View, {
                                              style: { height: 200 },
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              !this.state.orderEmpty &&
                                (0, A.tZ)(I.Z, {
                                  style: {
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    overflow: "hidden",
                                    paddingTop: 0,
                                  },
                                  children: this.footBtnView(),
                                }),
                              (null == d ? void 0 : d.showPublicBargin) &&
                                (0, A.tZ)(j, {
                                  imgUrl:
                                    "https://images3.c-ctrip.com/zt/activity/20230515-public-bargain/ddy.gif",
                                  imageStyle: { width: 52, height: 67 },
                                  handleJump: function () {
                                    return (0, te.tJ)({
                                      url: null == d ? void 0 : d.jumpUrl,
                                    });
                                  },
                                  handelClose: function () {
                                    n.setState(
                                      (0, l.Z)(
                                        (0, l.Z)({}, d),
                                        {},
                                        { showPublicBargin: !1 }
                                      )
                                    ),
                                      w().setStorageSync(
                                        "TICKET_ORDERDETAIL_ENTRYINFO",
                                        {
                                          hasPop: !0,
                                          timeStamp: new Date().getTime() / 1e3,
                                        }
                                      );
                                  },
                                }),
                              !!this.state.redBookUrl &&
                                this.state.showRedBook &&
                                v.Z.isCRN &&
                                (0, A.tZ)(j, {
                                  imgUrl:
                                    "https://images3.c-ctrip.com/ztrip/train_bin/ll/mp_icon_xhs@3x.png",
                                  imageStyle: { width: 52, height: 55 },
                                  handleJump: function () {
                                    return (0, te.yI)({
                                      url: n.state.redBookUrl,
                                    });
                                  },
                                  handelClose: function () {
                                    n.setState({ showRedBook: !1 }),
                                      w().setStorageSync(
                                        "TICKET_ORDERDETAIL_RED_BOOK",
                                        {
                                          hasPop: !0,
                                          timeStamp: new Date().getTime() / 1e3,
                                        }
                                      );
                                  },
                                }),
                              a.length > 0 &&
                                a[0].proccessList.length > 0 &&
                                this.refundProgressModal(),
                              (0, A.tZ)(H, {
                                visible: this.state.showReturnMoneyModal,
                                title: "¥"
                                  .concat(
                                    null === (e = this.state.returnMoneyData) ||
                                      void 0 === e
                                      ? void 0
                                      : e.price,
                                    "已返至"
                                  )
                                  .concat(
                                    v.Z.isTieyou ? "铁友" : "智行",
                                    "钱包"
                                  ),
                                subTitle: "成功使用该门票后即可提现",
                                buttonText: v.Z.isCRN ? "去查看" : "知道了",
                                onClickButton: function () {
                                  (0, te.fL)(),
                                    n.setState({ showReturnMoneyModal: !1 });
                                },
                                onClose: function () {
                                  return n.setState({
                                    showReturnMoneyModal: !1,
                                  });
                                },
                              }),
                              (0, A.tZ)(K, {
                                onClose: function () {
                                  return n.handleWalletRuleModal(!1);
                                },
                                visible: this.state.walletRuleModalShow,
                                detail:
                                  null === (t = this.state.rechargeDetail) ||
                                  void 0 === t ||
                                  null === (i = t.data) ||
                                  void 0 === i
                                    ? void 0
                                    : i.detail,
                                buttonClick: this.recivelWalletMonney,
                                rechargeDetail: this.state.rechargeDetail,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(Z.Z))
              ) || n;
          Page(
            (0, o.createPageConfig)(
              re,
              "pages/taroCRN/ticket/pages/orderDetail/index",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                navigationBarTitleText: "门票订单详情",
                navigationBarTextStyle: "black",
                enablePullDownRefresh: !0,
                navigationBarBackgroundColor: "#B3D2FF",
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
            6189, 22843, 6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(62574);
          }
        ),
          e.O();
      },
    ]);
})();
