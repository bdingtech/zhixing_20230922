!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../../../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [5676],
      {
        44405: function (e, t, o) {
          var n = o(32180),
            i = o(298),
            l = o(57042),
            r = o(24460),
            a = o(81876),
            s = o(21867),
            c = o(86066),
            d = o(45023),
            u = o(52500),
            f = o(96677),
            h = o(49528),
            p = o(71515),
            g = o(92954),
            m = o.n(g),
            Z = o(53550),
            y = o(90729),
            v = o(72077),
            w = o(48813),
            x = u.default.memo(function (e) {
              var t = e.uri,
                o =
                  void 0 === t
                    ? "https://images3.c-ctrip.com/ztrip/zhixingios/baoxiao/shangchuan.png"
                    : t,
                n = e.deletePhoto,
                i = e.isShowDeleteButton,
                l = void 0 === i || i,
                r = e.onPress;
              console.log("PhotoView", o);
              var a = (0, w.BX)(p.View, {
                  style: _.upload_camera_view,
                  children: [
                    (0, w.tZ)(p.Image, {
                      style: _.upload_camera_image,
                      resizeMode: "cover",
                      src: o,
                    }),
                    (0, w.tZ)(p.Text, {
                      style: _.upload_camera_text,
                      children: "上传证明",
                    }),
                  ],
                }),
                s = (0, w.tZ)(p.View, {
                  style: {
                    height: 82,
                    width: 82,
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: 3,
                    position: "relative",
                  },
                  children: (0, w.BX)(p.View, {
                    style: _.container,
                    children: [
                      (0, w.tZ)(p.Image, {
                        style: _.pic,
                        resizeMode: "cover",
                        src: o,
                      }),
                      !!l &&
                        (0, w.tZ)(p.View, {
                          style: _.delete_label,
                          onClick: n,
                          children: (0, w.tZ)(p.View, {
                            style: _.center,
                            children: (0, w.tZ)(p.Image, {
                              style: { height: 14, width: 14 },
                              resizeMode: "cover",
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/dahua/zong/img_close@3x.webp",
                            }),
                          }),
                        }),
                    ],
                  }),
                });
              return r
                ? (0, w.tZ)(p.View, {
                    testID: v._M.upload_image_btn,
                    onClick: r,
                    children: a,
                  })
                : s;
            }),
            _ = (0, h.lW)({
              upload_camera_view: {
                height: 70,
                width: 70,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#eeeeee",
                backgroundColor: "#f8f8f8",
                margin: 7,
              },
              upload_camera_image: { height: 30, width: 30 },
              upload_camera_text: {
                fontSize: 11,
                color: f.Z.grey_99,
                marginTop: 5,
              },
              center: { justifyContent: "center", alignItems: "center" },
              delete_label_text: { color: "#FF5959", fontSize: 13 },
              container: { width: 75, height: 75 },
              pic: { width: 70, height: 70, margin: 3 },
              delete_label: {
                height: 14,
                width: 14,
                borderRadius: 7,
                position: "absolute",
                top: -6,
                right: -6,
                backgroundColor: "#ffffff",
                justifyContent: "center",
                alignItems: "center",
              },
            }),
            b = o(90582),
            k = o(1841),
            S = m().getSystemInfoSync().windowWidth,
            T = u.default.memo(function (e) {
              var t = e.title,
                o = void 0 === t ? "自愿退票" : t,
                n = e.desc,
                l = void 0 === n ? "按产品提供方退改规则收费" : n,
                r = e.onPress,
                a = e.nextClick,
                s = e.uploadImage,
                c = e.deletePhoto,
                d = e.photos,
                u = void 0 === d ? [] : d,
                h = e.bottomAnnounce,
                g = e.mustUploadProof,
                m = e.remarkUpload,
                v = void 0 === m ? "请上传航变证明 (最多五张)" : m,
                _ = e.num,
                T = void 0 === _ ? 5 : _,
                R = e.lookExample,
                L = e.uploadHintDetail,
                V = e.isNeedUploadPhoto,
                z = void 0 === V || V,
                B = e.isOpen,
                D = e.handleReasonItem,
                U = e.reasonIndex,
                M = e.hasProofUploadRefundRecordHint,
                N = e.testID,
                X = function (e) {
                  D(U, e);
                },
                j = z && g && 0 == (null == u ? void 0 : u.length),
                H = j
                  ? { backgroundColor: "#dddddd" }
                  : { backgroundColor: f.Z.zxMainColor };
              return (0, w.BX)(p.View, {
                testID: N,
                style: P.container,
                children: [
                  (0, w.BX)(p.View, {
                    style: P.content,
                    onClick: function () {
                      r
                        ? r()
                        : M && !B
                        ? (0, b.v)(
                            "温馨提示",
                            M,
                            { text: "取消" },
                            {
                              text: "继续退票",
                              callback: function () {
                                X(!B);
                              },
                            }
                          )
                        : X(!B);
                    },
                    children: [
                      (0, w.BX)(p.View, {
                        style: { display: "flex", flexDirection: "column" },
                        children: [
                          (0, w.tZ)(p.Text, { style: P.title, children: o }),
                          (0, w.tZ)(k.Z, {
                            style: (0, i.Z)({}, P.desc),
                            children: l,
                          }),
                        ],
                      }),
                      (0, w.tZ)(C, { isOpen: B }),
                    ],
                  }),
                  B &&
                    (0, w.BX)(p.View, {
                      style: { marginBottom: 18 },
                      children: [
                        (0, w.tZ)(p.View, { style: P.line }),
                        !!z &&
                          (0, w.BX)(w.HY, {
                            children: [
                              (0, w.BX)(p.View, {
                                style: I.bottom_container,
                                children: [
                                  (0, w.tZ)(p.Text, {
                                    style: I.select_title,
                                    children: v,
                                  }),
                                  !!L &&
                                    !y.Z.isEmptyObject(L) &&
                                    (0, w.BX)(p.View, {
                                      style: I.title_container,
                                      onClick: function () {
                                        R(L);
                                      },
                                      children: [
                                        (0, w.tZ)(p.Text, {
                                          style: I.remark,
                                          children: "证明样例",
                                        }),
                                        (0, w.tZ)(Z.Z, {
                                          style: I.label,
                                          children: "󰲫",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, w.BX)(p.View, {
                                style: I.photos_view,
                                children: [
                                  !!u &&
                                    u.map(function (e, t) {
                                      return (0, w.tZ)(x, {
                                        deletePhoto: function () {
                                          c(t);
                                        },
                                        uri: e,
                                      });
                                    }),
                                  (!u || u.length < T) &&
                                    (0, w.tZ)(x, {
                                      onPress: function () {
                                        s(U);
                                      },
                                      isShowDeleteButton: !1,
                                    }),
                                ],
                              }),
                            ],
                          }),
                        (0, w.tZ)(p.Text, {
                          style: (0, i.Z)((0, i.Z)({}, P.desc), I.bottom_desc),
                          children: h,
                        }),
                        (0, w.tZ)(p.Button, {
                          onClick: function () {
                            a(U);
                          },
                          disabled: j,
                          textStyle: I.sure_button_text,
                          style: (0, i.Z)(
                            (0, i.Z)((0, i.Z)({}, I.sure_button_view), H),
                            { width: S - 46 }
                          ),
                          children: "下一步",
                        }),
                      ],
                    }),
                ],
              });
            });
          function C(e) {
            return e.isOpen
              ? (0, w.tZ)(Z.Z, { style: P.icon_view, children: "󰳪" })
              : (0, w.tZ)(Z.Z, { style: P.icon_view, children: "󰲧" });
          }
          var I = (0, h.lW)({
              row_direction: { flexDirection: "row" },
              bottom_desc: { marginTop: 35, lineHeight: 15 },
              label_go_back: {
                fontSize: 16,
                color: f.Z.grey_33,
                fontWeight: "bold",
                marginTop: 10,
              },
              sure_button_text: {
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              },
              sure_button_view: {
                height: 44,
                borderRadius: 22,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 95,
              },
              name_title_view: {
                display: "flex",
                flexDirection: "row",
                paddingTop: 12,
              },
              photos_view: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 18,
              },
              remark: { fontSize: 12, color: f.Z.zxMainColor, marginRight: 3 },
              label: { color: f.Z.zxMainColor, fontSize: 12 },
              title_container: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              select_title: {
                fontSize: 14,
                color: f.Z.grey_99,
                marginRight: 10,
              },
              bottom_container: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
              },
            }),
            P = (0, h.lW)({
              flex1: { flex: 1 },
              container: {
                marginLeft: 8,
                marginRight: 8,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 8,
                paddingLeft: 15,
                paddingRight: 15,
              },
              content: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 14,
                paddingBottom: 14,
              },
              title: { fontSize: 18, color: f.Z.grey_33, fontWeight: "bold" },
              desc: {
                fontSize: 12,
                color: f.Z.grey_99,
                marginTop: 5,
                lineHeight: 14,
              },
              line: { height: 0.5, backgroundColor: f.Z.grey_e5 },
              select_passenger_text: {
                fontSize: 14,
                color: f.Z.grey_99,
                marginTop: 14,
              },
              passenger_name: {
                fontSize: 16,
                color: f.Z.grey_33,
                marginLeft: 8,
              },
              passenger_container: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              },
              icon_view: { fontSize: 10, color: "#ccc" },
            }),
            R = m().getSystemInfoSync(),
            L = R.windowWidth,
            V = R.windowHeight,
            z = (function (e) {
              (0, s.Z)(o, e);
              var t = (0, c.Z)(o);
              function o(e) {
                var n;
                return (
                  (0, l.Z)(this, o),
                  (n = t.call(this, e)),
                  (0, d.Z)((0, a.Z)(n), "turnToXuexin", function () {
                    routerH5("http://www.chsi.com.cn/");
                  }),
                  (n.state = { isShow: !1 }),
                  n
                );
              }
              return (
                (0, r.Z)(o, [
                  {
                    key: "open",
                    value: function () {
                      this.setState({ isShow: !0 });
                    },
                  },
                  {
                    key: "close",
                    value: function () {
                      this.setState({ isShow: !1 });
                    },
                  },
                  {
                    key: "getDetailItem",
                    value: function (e) {
                      return (0, w.BX)(w.HY, {
                        children: [
                          (0, w.BX)(p.View, {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 15,
                              alignItems: "center",
                            },
                            children: [
                              (0, w.tZ)(p.View, {
                                style: {
                                  height: 15,
                                  width: 3,
                                  backgroundColor: f.Z.zxMainColor,
                                  borderRadius: 3,
                                  marginRight: 6,
                                },
                              }),
                              (0, w.tZ)(p.Text, {
                                style: {
                                  fontSize: 16,
                                  color: f.Z.grey_33,
                                  fontWeight: "bold",
                                },
                                children: e.title,
                              }),
                            ],
                          }),
                          (0, w.tZ)(w.HY, {
                            children:
                              !!e.picUrls &&
                              e.picUrls.map(function (e) {
                                return (0,
                                w.tZ)(p.Image, { resizeMode: "contain", style: { height: 218, marginTop: 7, width: L - 30 }, src: e });
                              }),
                          }),
                        ],
                      });
                    },
                  },
                  {
                    key: "eletronicView",
                    value: function () {
                      var e = this,
                        t = this.props.uploadHintDetail;
                      return t
                        ? (0, w.BX)(p.View, {
                            style: { paddingLeft: 15, paddingRight: 15 },
                            children: [
                              (0, w.tZ)(p.View, {
                                style: B.top_remark_view,
                                children: (0, w.tZ)(p.Text, {
                                  style: B.top_remark_text,
                                  children: !!t && t.title,
                                }),
                              }),
                              !!t.details &&
                                t.details.map(function (t) {
                                  return e.getDetailItem(t);
                                }),
                            ],
                          })
                        : (0, w.tZ)(p.View, {});
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this;
                      if (!this.state.isShow) return (0, w.tZ)(p.View, {});
                      var t = (V / 10) * 8;
                      return (0, w.BX)(p.View, {
                        style: B.container,
                        children: [
                          (0, w.tZ)(p.View, {
                            onClick: function () {
                              e.close();
                            },
                            style: { flex: 1 },
                          }),
                          (0, w.BX)(p.View, {
                            style: {
                              backgroundColor: "white",
                              width: L,
                              paddingBottom: 40,
                              borderTopLeftRadius: 16,
                              borderTopRightRadius: 16,
                            },
                            children: [
                              (0, w.BX)(p.View, {
                                style: B.header_view,
                                children: [
                                  (0, w.tZ)(Z.Z, {
                                    style: { color: "transparent" },
                                    children: "󰳭",
                                  }),
                                  (0, w.tZ)(p.Text, {
                                    style: B.header_text,
                                    children: "证明样例",
                                  }),
                                  (0, w.tZ)(p.View, {
                                    onClick: function () {
                                      e.close();
                                    },
                                    children: (0, w.tZ)(Z.Z, {
                                      style: {
                                        color: f.Z.grey_99,
                                        fontSize: 21,
                                      },
                                      children: "󰳭",
                                    }),
                                  }),
                                ],
                              }),
                              (0, w.tZ)(p.View, {
                                style: { height: t, marginTop: -10 },
                                children: (0, w.tZ)(p.ScrollView, {
                                  style: { flex: 1 },
                                  children: this.eletronicView(),
                                }),
                              }),
                            ],
                          }),
                        ],
                      });
                    },
                  },
                ]),
                o
              );
            })(u.Component),
            B = (0, h.lW)({
              container: {
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.6)",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                zIndex: 200,
                flexDirection: "column",
                justifyContent: "flex-end",
              },
              header_view: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 54,
                marginLeft: 15,
                marginRight: 15,
              },
              header_text: {
                fontSize: 18,
                color: "#222222",
                fontWeight: "bold",
              },
              top_remark_view: {
                backgroundColor: "#FFF8ED",
                borderRadius: 8,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 6,
                paddingBottom: 6,
                marginTop: 8,
              },
              top_remark_text: {
                color: f.Z.grey_66,
                fontSize: 12,
                lineHeight: 16,
              },
            }),
            D = z,
            U = u.default.memo(function (e) {
              var t = e.name,
                o = void 0 === t ? "" : t,
                n = e.isSelect,
                i = e.onPress;
              return (0,
              w.BX)(p.View, { style: { display: "flex", flexDirection: "column", marginRight: 18, justifyContent: "center", alignItems: "center" }, onClick: i, children: [(0, w.tZ)(p.Text, { style: { color: f.Z.grey_33, fontSize: 15, marginBottom: 4 }, children: o }), (0, w.tZ)(p.View, { style: { width: 20, height: 3, backgroundColor: n ? f.Z.mainColor : "transparent" } })] });
            }),
            M = o(79301),
            N = o(95308),
            X = o(90129),
            j = o(94205),
            H = o(23577),
            O = m().getSystemInfoSync(),
            W = O.windowWidth,
            E = O.windowHeight,
            F = W - 16,
            A = function (e) {
              var t = e.activeIndex,
                o = e.epList,
                n = e.onCancel,
                i = (0, u.useState)(t),
                l = (0, X.Z)(i, 2),
                r = l[0],
                a = l[1],
                s = (0, u.useRef)({}),
                c = (0, u.useRef)(),
                d = (0, u.useRef)(!!t),
                h = (0, u.useState)(""),
                g = (0, X.Z)(h, 2),
                m = g[0],
                Z = g[1];
              (0, u.useEffect)(function () {
                console.log("就是那个跳过去" + t),
                  t &&
                    (setTimeout(function () {
                      y(t);
                    }, 1e3),
                    console.log("就是那个跳过去" + t));
              }, []);
              var y = function (e) {
                  var t, o, n;
                  (d.current = !0),
                    H.Z.isCRN
                      ? null == c ||
                        null === (t = c.current) ||
                        void 0 === t ||
                        t.scrollTo({
                          x: 0,
                          y:
                            null === (o = s.current) ||
                            void 0 === o ||
                            null === (n = o[e]) ||
                            void 0 === n
                              ? void 0
                              : n.y,
                          animated: !0,
                        })
                      : Z("activeIndex_".concat(e));
                },
                v = function () {
                  d.current = !1;
                };
              return (0, w.BX)(p.View, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8,
                  backgroundColor: "#f5f5f5",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  zInde: 100,
                },
                children: [
                  (0, w.BX)(p.View, {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: 54,
                      paddingLeft: 15,
                      paddingRight: 15,
                    },
                    children: [
                      (0, w.tZ)(p.View, {}),
                      (0, w.tZ)(p.Text, {
                        style: {
                          fontSize: 16,
                          color: f.Z.grey_22,
                          fontWeight: "bold",
                        },
                        children: "示例",
                      }),
                      (0, w.tZ)(p.View, {
                        onClick: n,
                        children: (0, w.tZ)(p.Image, {
                          resizeMode: "contain",
                          style: { height: 24, width: 24 },
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/tangchuanx.png",
                        }),
                      }),
                    ],
                  }),
                  (0, w.tZ)(p.View, {
                    style: {
                      height: 34,
                      flex: 1,
                      borderRadius: 8,
                      marginBottom: 10,
                      backgroundColor: "rgba(0,0,0,0.03)",
                      display: "flex",
                      flexDirection: "row",
                      padding: 2,
                    },
                    children: o.map(function (e, t) {
                      return (0, w.tZ)(p.View, {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          width: F / 3,
                          flex: 1,
                          borderRadius: 7,
                          backgroundColor: r === t ? "white" : "transparent",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        onClick: function () {
                          a(t), y(t);
                        },
                        children: (0, w.tZ)(p.Text, {
                          ellipsizeMode: "tail",
                          style: J.title,
                          numberOfLines: 1,
                          children: e.title,
                        }),
                      });
                    }),
                  }),
                  (0, w.tZ)(p.ScrollView, {
                    scrollY: !0,
                    style: { height: (E / 4) * 3 },
                    onScroll: function (e) {
                      var t, o, n, i, l, c, u, f;
                      if (!d.current) {
                        var h =
                            null == e || null === (t = e.detail) || void 0 === t
                              ? void 0
                              : t.scrollTop,
                          p =
                            null == e || null === (o = e.detail) || void 0 === o
                              ? void 0
                              : o.scrollHeight,
                          g =
                            (null === (n = s.current) ||
                            void 0 === n ||
                            null === (i = n[0]) ||
                            void 0 === i
                              ? void 0
                              : i.y) || 0,
                          m =
                            (null === (l = s.current) ||
                            void 0 === l ||
                            null === (c = l[1]) ||
                            void 0 === c
                              ? void 0
                              : c.y) || p / 3,
                          Z =
                            (null === (u = s.current) ||
                            void 0 === u ||
                            null === (f = u[2]) ||
                            void 0 === f
                              ? void 0
                              : f.y) || (p / 3) * 2;
                        h >= g && h < m && 0 !== r
                          ? a(0)
                          : h >= m && h < Z && 1 !== r
                          ? a(1)
                          : (h >= Z || h >= p) && 2 !== r && a(2);
                      }
                    },
                    scrollEventThrottle: 0,
                    onScrollBeginDrag: v,
                    onTouchStart: v,
                    scrollIntoView: m,
                    ref: c,
                    children: o.map(function (e, t) {
                      return (0, w.BX)(p.View, {
                        id: "activeIndex_".concat(t),
                        onLayout: function (e) {
                          !(function (e, t) {
                            s.current[t] = {
                              y: e.layout.y,
                              height: e.layout.height,
                              id: t,
                            };
                          })(e.nativeEvent, t);
                        },
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: 12,
                          backgroundColor: "white",
                          padding: 10,
                          marginTop: 0 == t ? 0 : 10,
                        },
                        children: [
                          (0, w.tZ)(p.View, {
                            style: {
                              borderRadius: 10,
                              backgroundColor: "#fff8ed",
                              padding: 10,
                            },
                            children: (0, w.tZ)(p.Text, {
                              style: { color: "#fd9227", fontSize: 12 },
                              children:
                                "· 航空公司要求，需要上传材料，请保证材料清晰完整",
                            }),
                          }),
                          (0, w.BX)(p.View, {
                            style: { position: "relative", marginTop: 15 },
                            children: [
                              (0, w.tZ)(p.Text, {
                                style: {
                                  fontSize: 16,
                                  color: f.Z.grey_22,
                                  fontWeight: "bold",
                                  marginLeft: 3,
                                },
                                children: e.title,
                              }),
                              (0, w.tZ)(p.Image, {
                                style: {
                                  position: "absolute",
                                  top: 11,
                                  left: 0,
                                  height: 8,
                                },
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/chaojifuhao@3x.png",
                              }),
                            ],
                          }),
                          (0, w.tZ)(p.Text, {
                            style: {
                              fontSize: 12,
                              color: f.Z.grey_66,
                              marginTop: 10,
                              marginLeft: 3,
                            },
                            children: e.exampleDesc,
                          }),
                          !!e.exampleUrlList &&
                            (0, w.tZ)(w.HY, {
                              children: e.exampleUrlList.map(function (e) {
                                return (0,
                                w.tZ)(p.Image, { style: { marginTop: 10, width: W - 48 }, src: e });
                              }),
                            }),
                        ],
                      });
                    }),
                  }),
                ],
              });
            },
            J = (0, h.lW)({ title: { fontSize: 13 } }),
            Y = u.default.memo(function (e) {
              var t = e.proofList,
                o = e.updateImage,
                n = (0, u.useState)(t),
                i = (0, X.Z)(n, 2),
                l = i[0],
                r = i[1],
                a = (function () {
                  var e = (0, N.Z)(
                    (0, M.Z)().mark(function e(t) {
                      var n, i, a, s, c;
                      return (0, M.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = l),
                                (a = l[t]),
                                (s = a.photoNumLimit),
                                (e.next = 5),
                                (0, j.MZ)(s, "最多只能选".concat(s, "张~~"))
                              );
                            case 5:
                              if (
                                (c = e.sent) &&
                                0 !=
                                  (null === (n = c) || void 0 === n
                                    ? void 0
                                    : n.length)
                              ) {
                                e.next = 8;
                                break;
                              }
                              return e.abrupt("return");
                            case 8:
                              a.photos && a.photos.length > 0
                                ? ((c = a.photos.concat(c)),
                                  (a.photos = c.length > s ? c.slice(0, s) : c))
                                : (a.photos = c.length > s ? c.slice(0, s) : c),
                                console.log("SelectMoreTypePhoto"),
                                r(JSON.parse(JSON.stringify(i))),
                                o(l);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                s = function (e, t) {
                  l[e].photos.splice(t, 1),
                    console.log("delete"),
                    r(JSON.parse(JSON.stringify(l))),
                    o(l);
                },
                c = function (e) {
                  console.log("showPopModal" + e),
                    (function (e) {
                      var t = m().getCurrentInstance().page;
                      null == t ||
                        t.showCommonDrawer({
                          hideTitle: !0,
                          hideClose: !0,
                          exclusive: !0,
                          content: function (t) {
                            var o = t.onClose;
                            return (0, w.tZ)(A, {
                              activeIndex: e.activeIndex,
                              epList: e.epList,
                              onCancel: o,
                            });
                          },
                          className: "photo-ep-pop-".concat(e.activeIndex),
                        });
                    })({ epList: t, activeIndex: e });
                };
              return (0, w.tZ)(p.View, {
                children: l.map(function (e, t) {
                  return (0, w.BX)(p.View, {
                    children: [
                      (0, w.BX)(p.View, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 20,
                          marginBottom: 15,
                        },
                        children: [
                          (0, w.tZ)(p.Text, {
                            style: { fontSize: 15, color: f.Z.grey_33 },
                            children: e.title,
                          }),
                          (0, w.tZ)(p.View, {
                            onClick: function () {
                              c(t);
                            },
                            children: (0, w.tZ)(p.Text, {
                              style: { fontSize: 12, color: f.Z.zxMainColor },
                              children: "查看图例",
                            }),
                          }),
                        ],
                      }),
                      (0, w.BX)(p.View, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        },
                        children: [
                          !!e.photos &&
                            e.photos.map(function (o, n) {
                              return n + 1 > e.photoNumLimit
                                ? (0, w.tZ)(p.View, {})
                                : (0, w.tZ)(x, {
                                    deletePhoto: function () {
                                      return s(t, n);
                                    },
                                    uri: o,
                                  });
                            }),
                          (!e.photos || e.photos.length < e.photoNumLimit) &&
                            (0, w.tZ)(x, {
                              onPress: function () {
                                a(t);
                              },
                              isShowDeleteButton: !1,
                            }),
                        ],
                      }),
                    ],
                  });
                }),
              });
            }),
            q = ((0, h.lW)({
              upload_camera_view: {
                height: 75,
                width: 75,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#eeeeee",
                backgroundColor: "#f8f8f8",
                marginTop: 7,
              },
              upload_camera_image: { height: 30, width: 30 },
              upload_camera_text: {
                fontSize: 11,
                color: f.Z.grey_99,
                marginTop: 5,
              },
              center: { justifyContent: "center", alignItems: "center" },
              delete_label_text: { color: "white", fontSize: 6 },
              container: { width: 75, height: 75 },
              delete_label: {
                height: 14,
                width: 14,
                borderRadius: 7,
                position: "absolute",
                top: -6,
                right: -6,
                backgroundColor: "#FF5959",
                justifyContent: "center",
                alignItems: "center",
              },
            }),
            m().getSystemInfoSync()).windowWidth,
            G = u.default.memo(function (e) {
              var t,
                o = e.title,
                n = void 0 === o ? "自愿退票" : o,
                l = e.desc,
                r = void 0 === l ? "立即确认，按产品提供方退改规则收费" : l,
                a = e.onPress,
                s = e.nextClick,
                c = e.segmentList,
                d = e.selectPeople,
                u = e.selectCurrentUploadTicket,
                h = e.currentUploadTicket,
                g = e.uploadImage,
                m = e.updateImage,
                Z = e.deletePhoto,
                y = (e.lookExample, e.samePeopleObj),
                v = e.num,
                _ = e.isAllSelPeopleHadImage,
                S = e.bottomAnnounce,
                T = e.isNeedUploadPhoto,
                C = void 0 === T || T,
                I = e.mustUploadProof,
                P = e.isOpen,
                R = e.hasProofUploadRefundRecordHint,
                L = e.handleReasonItem,
                V = e.reasonIndex,
                z = e.testID,
                B = function (e) {
                  L(V, e);
                },
                D = !(!h || (null == h[0] && null == h[0])),
                M = D && (null == c ? void 0 : c[h[0]].selectTickets[h[1]]),
                N = C && I && !_,
                X = N
                  ? { backgroundColor: "#dddddd" }
                  : { backgroundColor: f.Z.zxMainColor },
                j =
                  (null == M || null === (t = M.proofList) || void 0 === t
                    ? void 0
                    : t.length) > 0;
              console.log("SelectBarPersonal", j, JSON.stringify(M));
              return (0, w.BX)(p.View, {
                testID: z,
                style: te.container,
                children: [
                  (0, w.BX)(p.View, {
                    style: te.content,
                    onClick: function () {
                      a
                        ? a()
                        : R && !P
                        ? (0, b.v)(
                            "温馨提示",
                            R,
                            { text: "取消" },
                            {
                              text: "继续退票",
                              callback: function () {
                                B(!P);
                              },
                            }
                          )
                        : B(!P);
                    },
                    children: [
                      (0, w.BX)(p.View, {
                        children: [
                          (0, w.tZ)(p.Text, { style: te.title, children: n }),
                          (0, w.tZ)(k.Z, {
                            style: (0, i.Z)({}, te.desc),
                            children: r,
                          }),
                        ],
                      }),
                      (0, w.tZ)(Q, { isOpen: P }),
                    ],
                  }),
                  P &&
                    (0, w.BX)(p.View, {
                      style: {
                        marginBottom: 18,
                        display: "flex",
                        flexDirection: "column",
                      },
                      children: [
                        (0, w.tZ)(p.View, { style: te.line }),
                        (0, w.tZ)(p.Text, {
                          style: te.select_passenger_text,
                          children: "选择乘客",
                        }),
                        (0, w.tZ)(p.View, {
                          children:
                            !!c &&
                            c.map(function (e, t) {
                              return (0, w.BX)(p.View, {
                                children: [
                                  !!e.tagLabel &&
                                    (0, w.BX)(p.View, {
                                      style: {
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginTop: 12,
                                      },
                                      children: [
                                        (0, w.tZ)(p.View, {
                                          style: te.flight_info_tag,
                                          children: (0, w.tZ)(p.Text, {
                                            style: [
                                              {
                                                fontSize: 13,
                                                color: f.Z.zxMainColor,
                                                fontWeight: "500",
                                              },
                                            ],
                                            children: e.tagLabel,
                                          }),
                                        }),
                                        (0, w.tZ)(p.Text, {
                                          children: e.route,
                                        }),
                                      ],
                                    }),
                                  (0, w.tZ)(p.View, {
                                    style: te.passenger_container,
                                    children:
                                      !!e.selectTickets &&
                                      e.selectTickets.map(function (e, o) {
                                        return (0, w.tZ)(K, {
                                          passengerObj: e,
                                          onPress: function () {
                                            d(t, o);
                                          },
                                          name: e.passengerName,
                                          isSelect: e.selected,
                                        });
                                      }),
                                  }),
                                ],
                              });
                            }),
                        }),
                        D &&
                          (0, w.BX)(p.View, {
                            children: [
                              (0, w.tZ)(w.HY, {
                                children: (0, w.tZ)(p.ScrollView, {
                                  scrollX: !0,
                                  style: ee.name_title_view,
                                  children:
                                    !!c &&
                                    c.map(function (e, t) {
                                      return (0, w.tZ)(p.View, {
                                        style: ee.row_direction,
                                        children:
                                          !!e.selectTickets &&
                                          e.selectTickets.map(function (e, o) {
                                            var n = y[e.passengerName],
                                              i = !!n && n[0] == t && n[1] == o;
                                            return (
                                              !!e.selected &&
                                              i &&
                                              (0, w.tZ)(U, {
                                                isSelect:
                                                  h[0] == t && h[1] == o,
                                                onPress: function () {
                                                  u(t, o);
                                                },
                                                name: e.passengerName,
                                              })
                                            );
                                          }),
                                      });
                                    }),
                                }),
                              }),
                              !j &&
                                (0, w.BX)(p.View, {
                                  style: ee.photos_view,
                                  children: [
                                    !!M.photos &&
                                      M.photos.map(function (e, t) {
                                        return t + 1 > v
                                          ? (0, w.tZ)(p.View, {})
                                          : (0, w.tZ)(x, {
                                              deletePhoto: function () {
                                                Z(t);
                                              },
                                              uri: e,
                                            });
                                      }),
                                    (!M.photos || M.photos.length < v) &&
                                      (0, w.tZ)(x, {
                                        onPress: g,
                                        isShowDeleteButton: !1,
                                      }),
                                  ],
                                }),
                              !!j &&
                                (0, w.tZ)(
                                  Y,
                                  {
                                    updateImage: function (e) {
                                      m(e, V);
                                    },
                                    proofList: M.proofList,
                                  },
                                  M.passengerName
                                ),
                            ],
                          }),
                        !!D &&
                          (0, w.tZ)(p.Button, {
                            onClick: s,
                            disabled: N,
                            style: (0, i.Z)(
                              (0, i.Z)((0, i.Z)({}, ee.sure_button_view), X),
                              { width: q - 46 }
                            ),
                            children: (0, w.tZ)(p.Text, {
                              style: ee.sure_button_text,
                              children: "下一步",
                            }),
                          }),
                        (0, w.tZ)(p.Text, {
                          style: (0, i.Z)(
                            (0, i.Z)({}, te.desc),
                            ee.bottom_desc
                          ),
                          children: S,
                        }),
                      ],
                    }),
                ],
              });
            });
          function K(e) {
            var t = e.name,
              o = void 0 === t ? "" : t,
              n = e.isSelect,
              l = e.onPress;
            return e.passengerObj.refundable
              ? (0, w.BX)(p.View, {
                  style: (0, i.Z)((0, i.Z)({}, te.passenger_view), {
                    width: (q - 46 - 26) / 2,
                  }),
                  onClick: l,
                  children: [
                    n
                      ? (0, w.tZ)(Z.Z, {
                          style: { color: f.Z.zxMainColor, fontSize: 20 },
                          children: "󰲡",
                        })
                      : (0, w.tZ)(Z.Z, {
                          style: { color: f.Z.grey_cc, fontSize: 20 },
                          children: "󰲠",
                        }),
                    (0, w.tZ)(p.Text, {
                      style: te.passenger_name,
                      children: o,
                    }),
                  ],
                })
              : (0, w.tZ)(p.View, {});
          }
          function Q(e) {
            return e.isOpen
              ? (0, w.tZ)(Z.Z, {
                  style: { color: f.Z.grey_cc, fontSize: 10 },
                  children: "󰳪",
                })
              : (0, w.tZ)(Z.Z, {
                  style: { color: f.Z.grey_cc, fontSize: 10 },
                  children: "󰲧",
                });
          }
          var $,
            ee = (0, h.lW)({
              row_direction: { display: "flex", flexDirection: "row" },
              bottom_desc: { marginTop: 12, lineHeight: 15, marginBottom: 12 },
              label_go_back: {
                fontSize: 13,
                color: f.Z.grey_33,
                fontWeight: "bold",
              },
              sure_button_text: {
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              },
              sure_button_view: {
                height: 44,
                borderRadius: 22,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 22,
              },
              name_title_view: {
                display: "flex",
                flexDirection: "row",
                paddingTop: 12,
              },
              photos_view: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 12,
              },
              remark: { fontSize: 12, color: f.Z.zxMainColor, marginRight: 3 },
              label: { color: f.Z.zxMainColor, fontSize: 12 },
              title_container: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              select_title: {
                fontSize: 14,
                color: f.Z.grey_99,
                marginRight: 10,
              },
              bottom_container: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              },
            }),
            te = (0, h.lW)({
              container: {
                marginLeft: 8,
                marginRight: 8,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 8,
                paddingLeft: 15,
                paddingRight: 15,
              },
              content: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 14,
                paddingBottom: 14,
                paddingRight: 1,
              },
              title: { fontSize: 18, color: f.Z.grey_33, fontWeight: "bold" },
              desc: { fontSize: 12, color: f.Z.grey_99, marginTop: 5 },
              line: { height: 0.5, backgroundColor: f.Z.grey_e5 },
              select_passenger_text: {
                fontSize: 14,
                color: f.Z.grey_99,
                marginTop: 14,
              },
              passenger_view: {
                display: "flex",
                flexDirection: "row",
                marginTop: 14,
              },
              passenger_name: {
                fontSize: 16,
                color: f.Z.grey_33,
                marginLeft: 8,
              },
              passenger_container: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                backgroundColor: "#f8f8f8",
                paddingLeft: 13,
                paddingBottom: 13,
                borderRadius: 4,
                marginTop: 10,
              },
              flight_info_tag: {
                height: 22,
                borderRadius: 11,
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 8,
                paddingRight: 8,
                marginRight: 6,
                backgroundColor: "#EAF5FF",
              },
            }),
            oe = o(21145),
            ne = o(87298),
            ie = o(59582),
            le = o(851),
            re =
              (0, ne.h)()(
                ($ = (function (e) {
                  (0, s.Z)(o, e);
                  var t = (0, c.Z)(o);
                  function o(e) {
                    var n;
                    return (
                      (0, l.Z)(this, o),
                      (n = t.call(this, e)),
                      (0, d.Z)((0, a.Z)(n), "refundModel", void 0),
                      (0, d.Z)((0, a.Z)(n), "examplePhotoRef", null),
                      (0, d.Z)((0, a.Z)(n), "customRefund", function (e) {
                        n.refundModel.setSelectReason(e),
                          console.log("customRefund"),
                          n.navigateTo({
                            url: "/pages/taroCRN/flight/pagesRefund/refundApply/index",
                            data: { refundModel: n.refundModel },
                          });
                      }),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "updateImagesForSelectTicket",
                        function (e, t) {
                          var o = n.state,
                            i = o.segmentList,
                            l = o.currentUploadTicket,
                            r = (o.reasonList, i[l[0]].selectTickets[l[1]]);
                          r.proofList = e;
                          var a = n.judgePeopleSame(i, r, l[0], l[1]);
                          n.setState({ segmentList: a });
                        }
                      ),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "uploadImagesForSelectTicket",
                        function (e) {
                          var t,
                            o = n.state,
                            i = o.segmentList,
                            l = o.currentUploadTicket,
                            r =
                              (null === (t = o.reasonList[e]) || void 0 === t
                                ? void 0
                                : t.maxPhotos) || 5,
                            a = i[l[0]].selectTickets[l[1]];
                          (0, j.MZ)(r, "最多只能选".concat(r, "张~~")).then(
                            function (e) {
                              var t;
                              if (
                                e &&
                                0 !=
                                  (null === (t = e) || void 0 === t
                                    ? void 0
                                    : t.length)
                              ) {
                                a.photos && a.photos.length > 0
                                  ? ((e = a.photos.concat(e)),
                                    (a.photos =
                                      e.length > r ? e.slice(0, r) : e))
                                  : (a.photos =
                                      e.length > r ? e.slice(0, r) : e);
                                var o = n.judgePeopleSame(i, a, l[0], l[1]);
                                n.setState({ segmentList: o });
                              }
                            }
                          );
                        }
                      ),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "deletePhotosForTicket",
                        function (e) {
                          var t = n.state,
                            o = t.segmentList,
                            i = t.currentUploadTicket,
                            l = o[i[0]].selectTickets[i[1]];
                          l.photos.splice(e, 1);
                          var r = n.judgePeopleSame(o, l, i[0], i[1]);
                          n.setState({ segmentList: r });
                        }
                      ),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "uploadImagesForSelectSegment",
                        function (e) {
                          var t,
                            o,
                            i = n.state.reasonList,
                            l =
                              (null === (t = i[e]) || void 0 === t
                                ? void 0
                                : t.uploadPhotos) || [],
                            r =
                              (null === (o = i[e]) || void 0 === o
                                ? void 0
                                : o.maxPhotos) || 5;
                          (0, j.MZ)(r, "最多只能选".concat(r, "张~~")).then(
                            function (t) {
                              var o;
                              t &&
                                0 !=
                                  (null === (o = t) || void 0 === o
                                    ? void 0
                                    : o.length) &&
                                (l && l.length > 0
                                  ? (t =
                                      (t = l.concat(t)).length > r
                                        ? t.slice(0, r)
                                        : t)
                                  : (t = t.length > r ? t.slice(0, r) : t),
                                (i[e].uploadPhotos = t),
                                n.setState({ reasonList: i }));
                            }
                          );
                        }
                      ),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "segmentConfirmClick",
                        function (e) {
                          var t,
                            o,
                            i,
                            l = n.state.reasonList[e];
                          null == l ||
                          null === (t = l.proofNode) ||
                          void 0 === t ||
                          !t.showUploadButton ||
                          null == l ||
                          null === (o = l.proofNode) ||
                          void 0 === o ||
                          !o.proofMustUpload ||
                          (null != l &&
                            l.uploadPhotos &&
                            0 !=
                              (null == l ||
                              null === (i = l.uploadPhotos) ||
                              void 0 === i
                                ? void 0
                                : i.length))
                            ? (n.refreshAllTicketsPhoto(l.uploadPhotos),
                              n.refundModel.setSelectReason(l),
                              n.navigateTo({
                                url: "/pages/taroCRN/flight/pagesRefund/refundApply/index",
                                data: { refundModel: n.refundModel },
                              }))
                            : m().showToast({ title: "请上传证明" });
                        }
                      ),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "deletePhotosForSegment",
                        function (e, t) {
                          var o = n.state.reasonList,
                            i = o[t].uploadPhotos;
                          i.splice(e, 1),
                            (o[t].uploadPhotos = i),
                            n.setState({ reasonList: o });
                        }
                      ),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "refreshAllTicketsPhoto",
                        function (e) {
                          if (e && 0 != (null == e ? void 0 : e.length)) {
                            var t = n.state.segmentList;
                            t.forEach(function (t) {
                              var o;
                              null == t ||
                                null === (o = t.selectTickets) ||
                                void 0 === o ||
                                o.forEach(function (t) {
                                  t.photos = e;
                                });
                            }),
                              console.log(
                                JSON.stringify(t) + "refreshAllTicketsPhoto"
                              ),
                              n.refundModel.setSelectSegmentList(t);
                          }
                        }
                      ),
                      (0, d.Z)((0, a.Z)(n), "back", function () {
                        n.pop();
                      }),
                      (0, d.Z)((0, a.Z)(n), "selectPeople", function (e, t) {
                        var o = n.state.segmentList;
                        (o[e].selectTickets[t].selected = !0),
                          n.getSelectStudent(o),
                          n.setState({ segmentList: o });
                      }),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "setSelectUploadTicket",
                        function (e, t) {
                          n.setState({ currentUploadTicket: [e, t] });
                        }
                      ),
                      (0, d.Z)((0, a.Z)(n), "lookImageExample", function (e) {
                        n.setState({ uploadHintDetail: e }, function () {
                          n.examplePhotoRef && n.examplePhotoRef.open();
                        });
                      }),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "setOpenReasonItem",
                        function (e, t) {
                          var o = n.state.reasonList;
                          null == o ||
                            o.forEach(function (o, i) {
                              var l, r, a, s;
                              (o.isOpen = t ? e == i : t),
                                i == e &&
                                  o.isOpen &&
                                  null !== (l = o.proofNode) &&
                                  void 0 !== l &&
                                  l.proofByPerson &&
                                  (null === (r = o.proofNode) ||
                                  void 0 === r ||
                                  null === (a = r.proofList) ||
                                  void 0 === a
                                    ? void 0
                                    : a.length) > 0 &&
                                  n.setInitRasonCustomPhoto(
                                    null === (s = o.proofNode) || void 0 === s
                                      ? void 0
                                      : s.proofList
                                  );
                            }),
                            n.setState({ reasonList: o });
                        }
                      ),
                      (n.refundModel = null == e ? void 0 : e.passProps),
                      (n.state = {
                        reasonList: [],
                        segmentList: [],
                        currentUploadTicket: [null, null],
                        uploadHintDetail: null,
                      }),
                      n
                    );
                  }
                  return (
                    (0, r.Z)(o, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, g.getCurrentInstance)();
                          e &&
                            e.router &&
                            e.router.params &&
                            (this.refundModel = (0, ie.O)(e.router.params)),
                            this.initData();
                        },
                      },
                      {
                        key: "initData",
                        value: function () {
                          var e,
                            t,
                            o,
                            n,
                            i = this,
                            l = this.refundModel.getSelectSegmentList(),
                            r =
                              null == l || null === (e = l[0]) || void 0 === e
                                ? void 0
                                : e.selectTickets;
                          (null == r ||
                          null === (t = r[0]) ||
                          void 0 === t ||
                          null === (o = t.refundReasonList) ||
                          void 0 === o
                            ? void 0
                            : o.length) > 0 &&
                            this.setState(
                              {
                                segmentList: l,
                                reasonList:
                                  null == r ||
                                  null === (n = r[0]) ||
                                  void 0 === n
                                    ? void 0
                                    : n.refundReasonList,
                              },
                              function () {
                                i.selectPeople(0, 0);
                              }
                            );
                        },
                      },
                      {
                        key: "customPersonClick",
                        value: function (e) {
                          var t,
                            o,
                            n = this.state,
                            i = n.reasonList,
                            l = n.segmentList,
                            r = i[e];
                          null != r &&
                          null !== (t = r.proofNode) &&
                          void 0 !== t &&
                          t.showUploadButton &&
                          null != r &&
                          null !== (o = r.proofNode) &&
                          void 0 !== o &&
                          o.proofMustUpload &&
                          !this.judgeIsSelectTicketHadPhoto()
                            ? m().showToast({
                                title: "请上传所有选择乘客的证明",
                              })
                            : (this.refundModel.setSelectReason(r),
                              this.refundModel.setSelectSegmentList(l),
                              console.log("customPersonClick"),
                              this.navigateTo({
                                url: "/pages/taroCRN/flight/pagesRefund/refundApply/index",
                                data: { refundModel: this.refundModel },
                              }));
                        },
                      },
                      {
                        key: "getSelectStudent",
                        value: function (e) {
                          var t = 0,
                            o = [null, null];
                          return (
                            e.forEach(function (e, n) {
                              e.selectTickets.forEach(function (e, i) {
                                e.selected &&
                                  (0 == t && ((o[0] = n), (o[1] = i)), t++);
                              });
                            }),
                            1 == t
                              ? (this.setSelectUploadTicket(o[0], o[1]), 1)
                              : 0 == t
                              ? (this.setState({
                                  currentUploadTicket: [null, null],
                                }),
                                2)
                              : (this.setSelectUploadTicket(o[0], o[1]), 3)
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state.reasonList;
                          return (0, w.BX)(p.View, {
                            style: {
                              display: "flex",
                              height: "100%",
                              backgroundColor: "#f5f5f5",
                              flexDirection: "column",
                            },
                            children: [
                              (0, w.tZ)(oe.Z, { title: "选择退票原因" }),
                              (0, w.tZ)(p.View, {
                                testID: v._M.choose_reason_view_id,
                                children: (0, w.tZ)(p.ScrollView, {
                                  style: {
                                    zIndex: 2,
                                    paddingBottom: 10,
                                    height: "100%",
                                  },
                                  contentContainerStyle: { paddingBottom: 150 },
                                  children:
                                    !!t &&
                                    t.map(function (t, o) {
                                      var n,
                                        l,
                                        r,
                                        a,
                                        s,
                                        c,
                                        d =
                                          null !== (n = t.proofNode) &&
                                          void 0 !== n &&
                                          n.showUploadButton
                                            ? {}
                                            : {
                                                onPress:
                                                  e.segmentConfirmClick.bind(
                                                    e,
                                                    o
                                                  ),
                                              };
                                      return t.isVoluntary
                                        ? (0, w.tZ)(T, {
                                            desc: t.subTitle,
                                            title: t.title,
                                            testID: "".concat(
                                              v._M.refund_reason_custom_id
                                            ),
                                            onPress: function () {
                                              return e.customRefund(t);
                                            },
                                          })
                                        : null != t &&
                                          null !== (l = t.proofNode) &&
                                          void 0 !== l &&
                                          l.proofByPerson
                                        ? (0, w.tZ)(
                                            G,
                                            (0, i.Z)(
                                              (0, i.Z)({}, d),
                                              {},
                                              {
                                                testID: "".concat(
                                                  v._M
                                                    .refund_reason_item_id_personal
                                                ),
                                                hasProofUploadRefundRecordHint:
                                                  null == t
                                                    ? void 0
                                                    : t.hasProofUploadRefundRecordHint,
                                                isOpen: t.isOpen,
                                                reasonIndex: o,
                                                handleReasonItem:
                                                  e.setOpenReasonItem,
                                                isAllSelPeopleHadImage:
                                                  e.judgeIsSelectTicketHadPhoto(),
                                                bottomAnnounce: t.entranceTips,
                                                segmentList:
                                                  e.state.segmentList,
                                                mustUploadProof:
                                                  null === (s = t.proofNode) ||
                                                  void 0 === s
                                                    ? void 0
                                                    : s.proofMustUpload,
                                                isNeedUploadPhoto:
                                                  null === (c = t.proofNode) ||
                                                  void 0 === c
                                                    ? void 0
                                                    : c.showUploadButton,
                                                nextClick:
                                                  e.customPersonClick.bind(
                                                    e,
                                                    o
                                                  ),
                                                uploadImage:
                                                  e.uploadImagesForSelectTicket.bind(
                                                    e,
                                                    o
                                                  ),
                                                updateImage:
                                                  e.updateImagesForSelectTicket,
                                                lookExample: e.lookImageExample,
                                                deletePhoto: function (t) {
                                                  e.deletePhotosForTicket(t);
                                                },
                                                currentUploadTicket:
                                                  e.state.currentUploadTicket,
                                                selectPeople: e.selectPeople,
                                                selectCurrentUploadTicket:
                                                  e.setSelectUploadTicket,
                                                num: t.maxPhotos,
                                                samePeopleObj:
                                                  e.isHadSamePeople(),
                                                desc: t.subTitle,
                                                title: t.title,
                                              }
                                            )
                                          )
                                        : (0, w.tZ)(
                                            T,
                                            (0, i.Z)(
                                              (0, i.Z)({}, d),
                                              {},
                                              {
                                                testID: "".concat(
                                                  v._M
                                                    .refund_reason_item_id_order
                                                ),
                                                nextClick:
                                                  e.segmentConfirmClick.bind(
                                                    e,
                                                    o
                                                  ),
                                                uploadImage:
                                                  e.uploadImagesForSelectSegment,
                                                deletePhoto: function (t) {
                                                  e.deletePhotosForSegment(
                                                    t,
                                                    o
                                                  );
                                                },
                                                photos: t.uploadPhotos,
                                                isOpen: t.isOpen,
                                                reasonIndex: o,
                                                hasProofUploadRefundRecordHint:
                                                  null == t
                                                    ? void 0
                                                    : t.hasProofUploadRefundRecordHint,
                                                handleReasonItem:
                                                  e.setOpenReasonItem,
                                                isNeedUploadPhoto:
                                                  null === (r = t.proofNode) ||
                                                  void 0 === r
                                                    ? void 0
                                                    : r.showUploadButton,
                                                uploadHintDetail:
                                                  e.getUploadHintDetail(t),
                                                num: t.maxPhotos,
                                                lookExample: e.lookImageExample,
                                                bottomAnnounce: t.entranceTips,
                                                mustUploadProof:
                                                  null === (a = t.proofNode) ||
                                                  void 0 === a
                                                    ? void 0
                                                    : a.proofMustUpload,
                                                desc: t.subTitle,
                                                title: t.title,
                                              }
                                            )
                                          );
                                    }),
                                }),
                              }),
                              (0, w.tZ)(D, {
                                uploadHintDetail: this.state.uploadHintDetail,
                                ref: function (t) {
                                  return (e.examplePhotoRef = t);
                                },
                              }),
                              (0, w.tZ)(le.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t, !0);
                                },
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "getUploadHintDetail",
                        value: function (e) {
                          var t,
                            o =
                              null == e ||
                              null === (t = e.proofNode) ||
                              void 0 === t
                                ? void 0
                                : t.proofList;
                          if (o && 0 != (null == o ? void 0 : o.length))
                            return {
                              title:
                                "航空公司要求，需要上传材料，请保证材料清晰完整",
                              details: o.map(function (e, t) {
                                return {
                                  title: e.title,
                                  picUrls: e.exampleUrlList,
                                };
                              }),
                            };
                        },
                      },
                      {
                        key: "isHadSamePeople",
                        value: function () {
                          var e = this.state.segmentList,
                            t = {};
                          return (
                            null == e ||
                              e.forEach(function (e, o) {
                                e.selectTickets.forEach(function (e, n) {
                                  e.selected &&
                                    !t[e.passengerName] &&
                                    (t[e.passengerName] = [o, n]);
                                });
                              }),
                            t
                          );
                        },
                      },
                      {
                        key: "judgePeopleSame",
                        value: function (e, t, o, n) {
                          return (
                            e.forEach(function (e, i) {
                              e.selectTickets.forEach(function (e, l) {
                                e.passengerName != t.passengerName ||
                                  (o == i && n == l) ||
                                  ((e.photos = t.photos),
                                  t.proofList && (e.proofList = t.proofList));
                              });
                            }),
                            e
                          );
                        },
                      },
                      {
                        key: "judgeIsSelectTicketHadPhoto",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : this.state.segmentList,
                            t = !0;
                          return (
                            e.forEach(function (e) {
                              e.selectTickets.forEach(function (e) {
                                if (e.selected) {
                                  var o, n, i, l;
                                  if (
                                    (null === (o = e.proofList) || void 0 === o
                                      ? void 0
                                      : o.length) > 0
                                  )
                                    (null === (i = e.proofList) ||
                                    void 0 === i ||
                                    null ===
                                      (l = i.filter(function (e) {
                                        return (
                                          !e.photos || 0 == e.photos.length
                                        );
                                      })) ||
                                    void 0 === l
                                      ? void 0
                                      : l.length) > 0 && (n = !1);
                                  else
                                    (e.photos && 0 != e.photos.length) ||
                                      (n = !1);
                                  !1 === n && (t = !1);
                                }
                              });
                            }),
                            t
                          );
                        },
                      },
                      {
                        key: "setInitRasonCustomPhoto",
                        value: function (e) {
                          var t = this.state.segmentList;
                          null == t ||
                            t.forEach(function (t) {
                              var o;
                              null == t ||
                                null === (o = t.selectTickets) ||
                                void 0 === o ||
                                o.forEach(function (t) {
                                  t.proofList = JSON.parse(JSON.stringify(e));
                                });
                            }),
                            this.setState({ segmentList: t });
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return H.Z.isTieyou ? "10650051947" : "10650051945";
                        },
                      },
                    ]),
                    o
                  );
                })(u.Component))
              ) || $,
            ae =
              ((0, h.lW)({ container: { backgroundColor: f.Z.grey_f5 } }),
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#f5f5f5",
                backgroundColorTop: "#f5f5f5",
                backgroundColorBottom: "#f5f5f5",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                enablePullDownRefresh: !1,
              });
          Page(
            (0, n.createPageConfig)(
              re,
              "pages/taroCRN/flight/pagesRefund/chooseReason/index",
              { root: { cn: [] } },
              ae || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [98946, 7160, 83004, 71229, 10313, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(44405);
          }
        ),
          e.O();
      },
    ]);
})();
