!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    require("../../../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../../../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    require("../../../sub-common/849af97262623a3a03a4c9ba6f8707d6.js"),
    require("../../../sub-common/21c38908e8fa4730fcf449c938917721.js"),
    require("../../../sub-common/e18ac9e89d62ef13595cf53c81489989.js"),
    require("../../../sub-common/af9a4e372fc86155ae3439262ddc36ee.js"),
    require("../../../sub-common/98288617f7b79bd93e6764129b2de6f6.js"),
    require("../../../sub-common/488f20d3ae601fc19d5c835f8ad41f52.js"),
    require("../../../sub-common/64b09328b6ab714bf257627ff5257a73.js"),
    require("../../../sub-common/a84a67620e54e4b0717aaaabef4d4f88.js"),
    require("../../../sub-common/1bfc4d45433b8de6b344d141f5c6c906.js"),
    require("../../../sub-common/6fe85c0e7576cabc17e868b8e899da37.js"),
    require("../../../sub-common/e255e3ffa6c0fa3b59639b749cd45155.js"),
    require("../../../sub-common/41e826946d5acf662d18dcccdf7ba9c9.js"),
    require("../../../sub-common/72d4a16e30125614fb36cb40015efca3.js"),
    require("../../../sub-common/50e438ce8b6a7c870d3c45a317c0e0e9.js"),
    require("../../../sub-common/c05d54b748281b78c61200d1ba934c17.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [68038],
      {
        56585: function (e, t, n) {
          var i = n(32180),
            a = n(79301),
            r = n(95308),
            o = n(57042),
            s = n(24460),
            l = n(81876),
            c = n(21867),
            d = n(86066),
            u = n(45023),
            h = n(52500),
            p = n(92954),
            g = n.n(p),
            f = n(71515),
            m = n(81403),
            v = n(8271),
            _ = n.n(v),
            y = n(91006),
            b = n.n(y),
            C = n(298),
            S = (n(1841), n(23577)),
            T = n(90582),
            w = n(49528),
            N = n(32970),
            Z = n(94205),
            x = g().getSystemInfoSync(),
            P = S.Z.isCRN ? x.windowWidth : "750rpx",
            k = S.Z.isCRN ? P - 24 : "702rpx",
            I = S.Z.platform && S.Z.platform.toLowerCase(),
            D = (0, w.lW)({
              bg: {
                flexDirection: "column",
                justifyContent: "flex-start",
                backgroundColor: "white",
                borderRadius: 12,
                flex: 1,
                display: "flex",
                width: k,
                marginLeft: 8,
                marginTop: 0,
                marginBottom: 8,
                position: "relative",
              },
              passengerTypeStyle: {
                marginLeft: 5,
                borderRadius: 3,
                justifyContent: "center",
                borderColor: "#999999",
                borderWidth: 1,
                height: 16,
                paddingTop: 1,
                paddingRight: 4,
              },
              memberTagStyle: {
                padding: 1.5,
                marginLeft: 5,
                borderRadius: 3,
                justifyContent: "center",
                borderColor: "#198CFF",
                borderWidth: 1,
              },
              beneficialTagStyle: {
                padding: 1.5,
                marginLeft: 5,
                borderRadius: 3,
                borderColor: "#D98C21",
                justifyContent: "center",
                borderWidth: 1,
              },
              passenger: { height: 68 },
              title: {
                color: "#222222",
                fontFamily: "PingFangSC-Semibold",
                fontSize: 16,
                fontWeight: "bold",
                height: 20,
                letterSpacing: 0,
                lineHeight: 20,
              },
              desc: {
                color: "#999999",
                fontFamily: "PingFangSC-Regular",
                fontSize: 12,
                fontWeight: "normal",
                height: 16,
                lineHeight: 16,
              },
              tag: {
                flexDirection: "row",
                marginTop: "ios" == I ? 3 : 0,
                height: 16,
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: "#ccc",
                paddingRight: 3,
                paddingLeft: 3,
                marginLeft: 6,
                paddingTop: 1.5,
              },
              wechatTag: {
                flexDirection: "row",
                height: 12,
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: "#ccc",
                paddingRight: 3,
                paddingLeft: 3,
                marginLeft: 6,
                display: "flex",
                marginTop: 3,
                borderStyle: "solid",
              },
              tagText: {
                color: "#999999",
                fontFamily: "PingFangSC-Regular",
                fontSize: 11,
                fontWeight: "normal",
                height: 14,
                letterSpacing: 0,
                lineHeight: 14,
              },
              buttonText: {
                color: "#198CFF",
                fontFamily: "PingFangSC-Medium",
                fontSize: 16,
                fontWeight: "500",
                height: 20,
                letterSpacing: 0,
                lineHeight: 20,
              },
              line: {
                marginTop: 5,
                marginBottom: 1,
                marginLeft: 16,
                width: "90%",
                height: 0.5,
                backgroundColor: "#f5f5f5",
              },
              wechatLine: {
                marginTop: 5,
                marginBottom: 1,
                marginLeft: 16,
                width: "91%",
                height: 0.5,
                backgroundColor: "#f5f5f5",
              },
            }),
            L = (0, w.lW)({
              passengerBox: {
                display: "flex",
                backgroundColor: "white",
                flex: 1,
                height: 68,
                paddingLeft: 8,
                paddingRight: 8,
                overflow: "hidden",
                position: "relative",
                borderRadius: 12,
              },
              passengerContent: {
                flex: 1,
                display: "flex",
                paddingTop: 14,
                paddingBottom: 14,
                position: "relative",
              },
              passengerAction: { borderTopRightRadius: 8 },
              deleteButton: {
                alignItems: "center",
                justifyContent: "center",
                height: 68,
                width: 48,
                backgroundColor: "#ff5959",
                position: "absolute",
                right: 48,
                borderRadius: 0,
              },
              delWechatICon: {
                display: "flex",
                position: "absolute",
                right: 16,
                top: 24,
              },
              delICon: {
                display: "flex",
                position: "absolute",
                left: P - 58,
                top: 24,
              },
              cancelButton: {
                alignItems: "center",
                justifyContent: "center",
                height: 68,
                width: 48,
                backgroundColor: "#ededed",
                position: "absolute",
                right: 0,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                borderRadius: 0,
              },
              buttonText: {
                color: "#999999",
                fontFamily: "PingFangSC-Medium",
                fontSize: 12,
                fontWeight: "500",
                height: 17,
              },
              deleteIcon: {
                position: "absolute",
                left: 0,
                right: 16,
                top: 0,
                bottom: 0,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              },
            }),
            z = (0, w.lW)({
              container: { flex: 1 },
              flexColumn: { flexDirection: "column" },
              flexRow: { flexDirection: "row" },
              flexCenter: { justifyContent: "center", alignItems: "center" },
              floatLeft: {
                justifyContent: "flex-start",
                alignItems: "flex-start",
              },
              floatRight: {
                justifyContent: "flex-end",
                alignItems: "flex-end",
              },
              font11: { fontSize: 10 },
              font12: { fontSize: 11, fontWeight: "400" },
              font13: { fontSize: 12, fontWeight: "400" },
              font14: { fontSize: 13, fontWeight: "400" },
              font15: { fontSize: 14, fontWeight: "400" },
              font16: { fontSize: 15, fontWeight: "400" },
              font17: { fontSize: 16, fontWeight: "400" },
              font18: { fontSize: 17, fontWeight: "400" },
              font19: { fontSize: 18, fontWeight: "400" },
              font20: { fontSize: 19, fontWeight: "600" },
              font22: { fontSize: 21, fontWeight: "600" },
              font24: { fontSize: 23, fontWeight: "600" },
              font28: { fontSize: 27, fontWeight: "600" },
              pt3: { paddingTop: 3 },
              pt5: { paddingTop: 5 },
              pt7: { paddingTop: 7 },
              flex: { flex: 1, display: "flex" },
              flexHalf: { flex: 0.5 },
              padding5: { padding: 5 },
              flexHorizontalCenter: {
                flexDirection: "row",
                alignItems: "center",
              },
            }),
            V = n(87892),
            R = n(42479),
            M = n(48813),
            A = S.Z.platform && S.Z.platform.toLowerCase();
          function j(e) {
            var t;
            return (0, M.tZ)(f.View, {
              style: (0, w.Jn)([
                null === (t = e.props) || void 0 === t ? void 0 : t.style,
                { justifyContent: "center" },
              ]),
              id: "AMEe",
              onClick: function () {
                var t;
                console.log("chosenPassengersAction--\x3e"),
                  null === (t = e.props) ||
                    void 0 === t ||
                    t.chosenPassengersAction(),
                  e.resetState();
              },
              children: (0, M.tZ)(f.View, {
                style: (0, w.Jn)([
                  {
                    display: "flex",
                    backgroundColor: "white",
                    borderRadius: 12,
                    justifyContent: "center",
                  },
                ]),
                children: (0, M.BX)(f.View, {
                  style: (0, w.Jn)([
                    z.flexRow,
                    z.flexCenter,
                    {
                      display: "flex",
                      alignItems: "center",
                      paddingVertical: 0,
                      zIndex: 1,
                      height: 56,
                    },
                  ]),
                  children: [
                    q({ style: { marginRight: 4, width: 20, height: 20 } }),
                    (0, M.tZ)(f.Text, {
                      style: (0, w.Jn)([
                        { color: "#198CFF" },
                        z.font18,
                        { fontWeight: "bold", fontSize: 16, lineHeight: 20 },
                      ]),
                      children: "选择乘客(成人/学生/儿童)",
                    }),
                  ],
                }),
              }),
            });
          }
          function B(e) {
            for (
              var t,
                n,
                i = [],
                a =
                  null === (t = e.props) || void 0 === t
                    ? void 0
                    : t.chosenPassengerList.length,
                r = 0;
              r < a;
              r++
            ) {
              var o,
                s =
                  (null === (o = e.props) || void 0 === o
                    ? void 0
                    : o.chosenPassengerList[r]) || {},
                l = "",
                c = s.ticket_type_name || s.passengerType;
              s.isAdultToStudent && (c = "学生票"),
                s.isKid && (c = "随行儿童"),
                s.passportType && (l = s.passportType);
              var d = s.identityType || s.id_type_name;
              ("H" === s.idType || ("1" == s.idType && "2" == s.id_sub_type)) &&
                (d = s.id_sub_type_name);
              var u =
                s.showPassportCode ||
                s.id_no ||
                s.passportCode ||
                s.identityNo ||
                "";
              (u = u.includes("**") ? u : W(u, 4, 3)),
                S.Z.isCRN
                  ? i.push(E(e, r, c, s, d, l, u))
                  : i.push(J(e, r, c, s, d, l, u)),
                r + 1 < a &&
                  i.push(
                    (0, M.tZ)(f.View, {
                      style: S.Z.isCRN ? D.line : D.wechatLine,
                    })
                  );
            }
            return (0, M.BX)(f.View, {
              style: (0, w.Jn)([
                D.bg,
                null === (n = e.props) || void 0 === n ? void 0 : n.style,
              ]),
              children: [
                (0, M.BX)(f.View, {
                  style: (0, w.Jn)([
                    {
                      backgroundColor: "white",
                      zIndex: 1,
                      flexDirection: "column",
                      borderRadius: 12,
                      display: "flex",
                    },
                  ]),
                  children: [
                    i,
                    (0, M.tZ)(f.View, {
                      style: S.Z.isCRN ? D.line : D.wechatLine,
                    }),
                    F(e),
                  ],
                }),
                a > 0 &&
                  (0, M.tZ)(f.View, {
                    style: {
                      zIndex: -1,
                      position: "absolute",
                      bottom: 0,
                      left: 8,
                      right: 8,
                      height: 10,
                      backgroundColor: "#FFF9F6",
                    },
                  }),
              ],
            });
          }
          function F(e) {
            return (0, M.tZ)(f.View, {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              },
              children: (0, M.tZ)(f.View, {
                activeOpacity: 0.8,
                style: (0, w.Jn)([
                  {
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]),
                id: "AMEf",
                onClick: function () {
                  var t;
                  null === (t = e.props) ||
                    void 0 === t ||
                    t.chosenPassengersAction(),
                    e.resetState();
                },
                children: (0, M.tZ)(f.View, {
                  style: (0, w.Jn)([
                    z.flex,
                    { display: "flex", paddingTop: 15, paddingBottom: 15 },
                    z.flexRow,
                    z.flexCenter,
                  ]),
                  children: (0, M.tZ)(f.Text, {
                    style: D.buttonText,
                    children: "添加/编辑乘客（成人/儿童）",
                  }),
                }),
              }),
            });
          }
          function O(e, t, n, i, a, r) {
            var o = n.isStudentToAdult ? "成人票" : t;
            return (0, M.BX)(f.View, {
              style: (0, w.Jn)([
                z.flexColumn,
                { marginLeft: 16, display: "flex" },
              ]),
              children: [
                (0, M.BX)(f.View, {
                  style: (0, w.Jn)([z.flexRow, { display: "flex" }]),
                  children: [
                    (0, M.tZ)(f.Text, {
                      style: (0, w.Jn)([
                        { color: "#333333", display: "flex" },
                        z.font17,
                        { fontWeight: "bold", fontSize: 16 },
                        D.title,
                      ]),
                      children: n.name || n.passengerName,
                    }),
                    !!t &&
                      (0, M.tZ)(f.View, {
                        disabled: n.isKid,
                        id: "AMEg",
                        onClick: function () {},
                        style: S.Z.isCRN ? D.tag : D.wechatTag,
                        children: (0, M.tZ)(f.Text, {
                          style: (0, w.Jn)([
                            { color: "#99999" },
                            z.font11,
                            D.tagText,
                          ]),
                          children: t.indexOf("学生") > -1 ? o : t,
                        }),
                      }),
                    !!n.isFreeChild &&
                      (0, M.tZ)(f.View, {
                        style: {
                          paddingLeft: 4,
                          paddingRight: 4,
                          height: S.Z.isCRN ? 16 : 12,
                          marginTop: S.Z.isCRN ? ("ios" == A ? 3 : 0) : 3,
                          borderWidth: 0.5,
                          borderStyle: "solid",
                          borderRadius: 3,
                          borderColor: "#03B86F",
                          marginLeft: 5,
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        },
                        children: (0, M.tZ)(f.Text, {
                          style: {
                            includeFontPadding: !1,
                            color: "#03B86F",
                            fontSize: 11,
                          },
                          children: "免费",
                        }),
                      }),
                  ],
                }),
                (0, M.BX)(f.View, {
                  style: (0, w.Jn)([
                    z.flexRow,
                    { marginTop: 5, display: "flex" },
                  ]),
                  children: [
                    (0, M.tZ)(f.Text, {
                      style: D.desc,
                      children: n.childTip ? n.childTip : (i || a) + " " + r,
                    }),
                    (0, R.z)(null == n ? void 0 : n.passengerType),
                  ],
                }),
              ],
            });
          }
          function E(e, t, n, i, a, r, o) {
            var s,
              l = O(0, n, i, a, r, o);
            return (0, M.tZ)(f.View, {
              style: L.passengerBox,
              children: (0, M.BX)(V.Z, {
                style: (0, w.Jn)([
                  {
                    display: "flex",
                    right: -96,
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    flexDirection: "row",
                  },
                  e.state.wantDeletePassengerIndex === t && {
                    transform: [
                      {
                        translateX:
                          e.state.delRotation &&
                          (null === (s = e.state.delRotation) || void 0 === s
                            ? void 0
                            : s.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -96],
                              })),
                      },
                    ],
                  },
                ]),
                children: [
                  (0, M.BX)(f.View, {
                    style: L.passengerContent,
                    children: [
                      l,
                      (0, M.tZ)(f.View, {
                        style: S.Z.isCRN ? L.delICon : L.delWechatICon,
                        id: "AMEh",
                        onClick: function () {
                          return e.onDeletePassengerIcon(t);
                        },
                        children: X({ width: 20, height: 20 }),
                      }),
                    ],
                  }),
                  (0, M.BX)(f.View, {
                    style: {
                      position: "absolute",
                      right: S.Z.isCRN ? 0 : -96,
                      width: 96,
                      height: 68,
                      display: "flex",
                    },
                    children: [
                      (0, M.tZ)(f.View, {
                        style: (0, w.Jn)([
                          L.deleteButton,
                          { display: "flex" },
                          { color: "white", fontSize: 12 },
                        ]),
                        id: "AMEi",
                        onClick: function () {
                          return e.onDeletePassengerBtn(
                            t,
                            e.state.slideAnim,
                            e.state.delRotation
                          );
                        },
                        children: "删除",
                      }),
                      (0, M.tZ)(f.View, {
                        style: (0, w.Jn)([
                          L.cancelButton,
                          { display: "flex" },
                          {
                            color: "#999999",
                            fontSize: 12,
                            borderTopRightRadius: 12,
                          },
                        ]),
                        id: "AMEj",
                        onClick: function () {
                          return e.onDeletePassengerIcon(t);
                        },
                        children: "取消",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          function J(e, t, n, i, a, r, o) {
            var s = O(0, n, i, a, r, o);
            return (0, M.tZ)(f.View, {
              style: L.passengerBox,
              children: (0, M.BX)(V.Z, {
                style: (0, w.Jn)([
                  {
                    display: "flex",
                    right: -96,
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    flexDirection: "row",
                  },
                ]),
                children: [
                  (0, M.BX)(f.View, {
                    style: (0, C.Z)((0, C.Z)({}, L.passengerContent), {
                      transition: "transform ease .3s",
                      transform: "translateX(".concat(
                        e.state.wantDeletePassengerIndex === t ? "-96px" : 0,
                        ")"
                      ),
                    }),
                    children: [
                      s,
                      (0, M.tZ)(f.View, {
                        style: S.Z.isCRN ? L.delICon : L.delWechatICon,
                        id: "AMEk",
                        onClick: function () {
                          return e.onDeletePassengerIcon(t);
                        },
                        children: X({ width: 20, height: 20 }),
                      }),
                    ],
                  }),
                  (0, M.BX)(f.View, {
                    style: {
                      position: "absolute",
                      transition: "right ease .3s",
                      right: e.state.wantDeletePassengerIndex === t ? 0 : -100,
                      width: 96,
                      height: 68,
                      display: "flex",
                    },
                    children: [
                      (0, M.tZ)(f.View, {
                        style: (0, w.Jn)([
                          L.deleteButton,
                          { display: "flex" },
                          { color: "white", fontSize: 12 },
                        ]),
                        id: "AMEl",
                        onClick: function () {
                          return e.onDeletePassengerBtn(t);
                        },
                        children: "删除",
                      }),
                      (0, M.tZ)(f.View, {
                        style: (0, w.Jn)([
                          L.cancelButton,
                          { display: "flex" },
                          {
                            color: "#999999",
                            fontSize: 12,
                            borderTopRightRadius: 12,
                          },
                        ]),
                        id: "AMEm",
                        onClick: function () {
                          return e.onDeletePassengerIcon(-1);
                        },
                        children: "取消",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          function q(e) {
            return (0, M.tZ)(
              f.Image,
              (0, C.Z)(
                (0, C.Z)(
                  {
                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/btn_tjck@3x.webp",
                  },
                  e
                ),
                {},
                { webp: !0 }
              )
            );
          }
          function X(e) {
            return (0, M.tZ)(f.Image, {
              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/btn_scck_24@3x.webp",
              style: e,
              webp: !0,
            });
          }
          function W(e, t, n) {
            if (!e) return e;
            for (var i = e.length - t - n, a = "", r = 0; r < i; r++) a += "*";
            return e.substring(0, t) + a + e.substring(e.length - n);
          }
          function G(e) {
            if (!e) return !0;
            var t;
            for (t in e) return !1;
            return !0;
          }
          function K(e) {
            return Y.apply(this, arguments);
          }
          function Y() {
            return (Y = (0, r.Z)(
              (0, a.Z)().mark(function e(t) {
                var n, i, r, o, s, l, c, d;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = t.chosenPassengerList),
                          (i = t.chosenFreeChildPassengers),
                          (r = t.allSeatNames),
                          (o = t.chosenTrainList),
                          (s = t.orderPassengerMaxCount),
                          t.account12306,
                          S.Z.isCRN)
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          H({
                            chosenPassengerList: n,
                            chosenFreeChildPassengers: i,
                            allSeatNames: r,
                            orderPassengerMaxCount: s,
                          })
                        );
                      case 3:
                        (l = se(n)),
                          (c = se(i || [])),
                          (l = (l || []).concat(c)),
                          (d = {
                            selectedPassengers: l,
                            allSeatNames: r || [],
                            pageType: "zl",
                            fromPage: "CandidateOrderInput",
                            extraTip:
                              '<font color="#FF7733">铁路局规定：</font>购票需登录12306账号，不登录无法出票成功',
                            is_cross_border: Q(o),
                          }),
                          (0, N.tu)(d);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function $(e) {
            var t = !1,
              n = ["一等座", "软卧", "商务座"];
            return (
              (e || []).forEach(function (e) {
                n.includes(e) && (t = !0);
              }),
              t
            );
          }
          function H(e) {
            return U.apply(this, arguments);
          }
          function U() {
            return (U = (0, r.Z)(
              (0, a.Z)().mark(function e(t) {
                var n, i, r, o, s, l, c, d;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.chosenPassengerList),
                          (i = t.chosenFreeChildPassengers),
                          (r = t.allSeatNames),
                          (o = t.orderPassengerMaxCount),
                          (s = ee(n)),
                          (l = ee(i || [])),
                          (s = (s || []).concat(l)),
                          (c = $(r)),
                          (d = {
                            selectedPasList: s,
                            passengerCountConfig: o,
                            isIncludeNoStuSeat: c,
                            fromPage: "CandidateOrderInput",
                          }),
                          e.abrupt(
                            "return",
                            new Promise(function (e) {
                              (0, N.tu)(d, function (t) {
                                if (t) {
                                  var n = t.selectedPasList,
                                    i = t.freeChildren;
                                  console.log(
                                    "goTrainPassengerListPage--\x3e",
                                    JSON.stringify(n)
                                  ),
                                    console.log(
                                      "goTrainPassengerListPage-freeChildren->",
                                      JSON.stringify(i)
                                    );
                                  var a = te(n),
                                    r = te(i);
                                  e({
                                    chosenPassengerList: a,
                                    chosenFreeChildPassengers: r,
                                  });
                                } else e(t);
                              });
                            })
                          )
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function Q(e) {
            return e.some(function (e) {
              return !!e.isCrossBorder;
            });
          }
          function ee(e) {
            console.log("converApp2WechatMini--\x3e", e);
            var t = [];
            return (
              (e || []).forEach(function (e) {
                t.push(e.wechatData);
              }),
              t
            );
          }
          function te(e) {
            var t = [];
            return (
              (e || []).forEach(function (e) {
                var n;
                (n =
                  2 == e.PassengerType
                    ? "儿童"
                    : 3 == e.PassengerType
                    ? "学生"
                    : "成人票"),
                  t.push({
                    wechatData: e,
                    key: ""
                      .concat(e.PassengerType, "-")
                      .concat(e.ShowPassportCode, "-")
                      .concat(e.CNName),
                    cardTimeLimit: "",
                    passengerType: n,
                    sex: e.Gender,
                    id_type: e.cardType,
                    sex_name: "",
                    is_buy_ticket: "",
                    nationality: e.Nationality,
                    status: 1,
                    passportCode: e.IdentityNo,
                    IdentityNo: e.IdentityNo,
                    passportType: e.IdentityType,
                    IdentityType: e.IdentityType,
                    passengerENFirstName: e.ENFirstName,
                    cardType: e.cardType,
                    passenger_id: e.PassengerID,
                    source: "12306",
                    child: e.isChild,
                    ticket_type_name: n,
                    real_id_no: e.IdentityNo,
                    name: e.CNName || e.pasName,
                    maskKey: ""
                      .concat(e.PassengerType, "-")
                      .concat(e.ShowPassportCode),
                    passengerTips: "",
                    userCountry: e.Nationality,
                    id_sub_type_name: e.IdentityType,
                    showPassportCode: e.ShowPassportCode,
                    maskPassportCode: e.ShowPassportCode,
                    passengerID: e.PassengerID,
                    id_no: e.ShowPassportCode,
                    country_code: e.Nationality,
                    ticket_type: "".concat(e.PassengerType),
                    birthday: e.Birthday,
                    mask_id_no: e.ShowPassportCode,
                    passengerENLastName: e.ENLastName,
                    id_type_name: e.IdentityType,
                    real_mobile: e.Mobile,
                    gender: e.Gender,
                    type_name: n,
                    studentInfo: "",
                    mobile: "",
                    gat_valid_date_end: "",
                    passengerBirth: e.Birthday,
                    birthDay: e.Birthday,
                    middleName: "",
                    passengerName: e.CNName || e.pasName,
                    isFreeChild: e.isFreeChild,
                  });
              }),
              t
            );
          }
          function ne(e) {
            var t,
              n,
              i =
                (null === (t = e.state) ||
                void 0 === t ||
                null === (n = t.chosenPassengerList) ||
                void 0 === n
                  ? void 0
                  : n.filter(function (e) {
                      return (
                        "成人票" === (null == e ? void 0 : e.passengerType)
                      );
                    })) || [];
            if (0 !== i.length) {
              var a = {},
                r = e.state.adultWithChildrenCount || 4;
              if (r > 0) {
                var o,
                  s,
                  l = {},
                  c =
                    null === (o = e.state) ||
                    void 0 === o ||
                    null === (s = o.chosenPassengerList) ||
                    void 0 === s
                      ? void 0
                      : s.filter(function (e) {
                          return !("儿童票" === e.passengerType && !e.isKid);
                        });
                console.log("passengersWithFastKids--\x3e", c);
                for (var d = 0; d < c.length; d++) {
                  var u = c[d] || {},
                    h =
                      (null == u ? void 0 : u.identityNo) ||
                      (null == u ? void 0 : u.passportCode);
                  l[h] || (l[h] = 0), u.isKid && (l[h] += 1);
                }
                console.log("adultChildMap--\x3e", l);
                var p = function (e) {
                  if (l[e] < r)
                    return (
                      (a = JSON.parse(
                        JSON.stringify(
                          i.find(function (t) {
                            return (t.identityNo || t.passportCode) === e;
                          })
                        )
                      )),
                      "break"
                    );
                };
                for (var g in l) {
                  if ("break" === p(g)) break;
                }
                if (G(a))
                  return void (0, T.v)(
                    "一位成人最多可以添加".concat(
                      r,
                      "位随行儿童，请再添加一位成人乘客～"
                    )
                  );
              } else a = JSON.parse(JSON.stringify(i[0]));
              (a.isFastAddChild = !0),
                (a.passengerType = "儿童票"),
                (a.isKid = !0);
              var f = JSON.parse(JSON.stringify(e.state.chosenPassengerList));
              f.push(a),
                (function (e, t) {
                  var n = t.state.orderPassengerMaxCount || 5;
                  return e.length > n
                    ? ((0, T.v)("一个订单最多只能购买".concat(n, "张票")), !1)
                    : !ie(e) || ((0, T.v)("儿童不能单独出行"), !1);
                })(f, e) && e.setState({ chosenPassengerList: f });
            } else (0, T.v)("请至少添加一位成人乘客");
          }
          function ie(e) {
            return (
              0 !== e.length &&
              e.filter(function (e) {
                return "儿童票" == e.passengerType;
              }).length === e.length
            );
          }
          function ae() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = [],
              n = !1;
            e.forEach(function (e) {
              if ("12306" === e.source) {
                var i = oe(e);
                (i.originCtripData = e),
                  "残军票" === i.passengerType &&
                    ((i.passengerType = "成人票"), (n = !0)),
                  t.push(i);
              } else if ("ctrip" === e.source) {
                var a = re(e);
                (a.originCtripData = e),
                  "残军票" === a.passengerType &&
                    ((a.passengerType = "成人票"), (n = !0)),
                  t.push(a);
              } else
                try {
                  var r = oe(e);
                  (r.originCtripData = e),
                    "残军票" === r.passengerType &&
                      ((r.passengerType = "成人票"), (n = !0)),
                    t.push(r);
                } catch (e) {
                  console.warn(JSON.stringify(e));
                }
            }),
              n && (0, T.v)("暂不支持抢残军票，将为您自动转为成人票");
            var i = he(t);
            return i;
          }
          function re(e) {
            var t = {
                source: fe(null == e ? void 0 : e.source)
                  ? "ctrip"
                  : null == e
                  ? void 0
                  : e.source,
                key: null == e ? void 0 : e.key,
                passengerID: null == e ? void 0 : e.passengerID,
                passengerName:
                  null == e ? void 0 : e.passengerName.replace(/ /g, ""),
                passengerType: null == e ? void 0 : e.passengerType,
                identityType: null == e ? void 0 : e.passportType,
                identityNo: null == e ? void 0 : e.passportCode,
                birthDay: null == e ? void 0 : e.birthday,
                studentInfo: null,
                isStudentToAdult: null == e ? void 0 : e.isStudentToAdult,
                nationality: null == e ? void 0 : e.nationality,
                expireDate: null == e ? void 0 : e.cardTimeLimit,
                isSelf: !1,
                showPassportCode: null == e ? void 0 : e.showPassportCode,
                isKid: null == e ? void 0 : e.isKid,
                isFreeChild: !!e.isFreeChild,
              },
              n = de(e);
            n && (t.contactMobileNo = n);
            var i = ue(
              null == t ? void 0 : t.passengerType,
              null == e ? void 0 : e.studentInfo
            );
            return i && (t.studentInfo = i), t;
          }
          function oe(e) {
            var t = {
                source: fe(null == e ? void 0 : e.source)
                  ? "12306"
                  : null == e
                  ? void 0
                  : e.source,
                key: null == e ? void 0 : e.key,
                passengerID: null == e ? void 0 : e.passengerID,
                passengerName: null == e ? void 0 : e.name.replace(/ /g, ""),
                passengerType: null == e ? void 0 : e.ticket_type_name,
                identityType: null == e ? void 0 : e.id_type_name,
                identityNo:
                  (null == e ? void 0 : e.real_id_no) ||
                  (null == e ? void 0 : e.id_no),
                birthDay: null == e ? void 0 : e.birthday,
                studentInfo: null,
                isStudentToAdult: null == e ? void 0 : e.isStudentToAdult,
                nationality: null == e ? void 0 : e.country_code,
                expireDate: null == e ? void 0 : e.gat_valid_date_end,
                isSelf: null == e ? void 0 : e.self,
                showPassportCode: null == e ? void 0 : e.showPassportCode,
                idType: null == e ? void 0 : e.id_type,
                isKid: null == e ? void 0 : e.isKid,
                isFreeChild: null == e ? void 0 : e.isFreeChild,
              },
              n = de(e);
            n && (t.contactMobileNo = n);
            var i = ue(
              null == t ? void 0 : t.passengerType,
              null == e ? void 0 : e.studentInfo
            );
            return i && (t.studentInfo = i), t;
          }
          function se() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = [];
            return (
              e.forEach(function (e) {
                if ("12306" === (null == e ? void 0 : e.source)) {
                  var n = le(e);
                  t.push(n);
                } else if ("ctrip" === (null == e ? void 0 : e.source)) {
                  var i = ce(e);
                  t.push(i);
                } else
                  try {
                    var a = le(e);
                    t.push(a);
                  } catch (e) {
                    console.warn(JSON.stringify(e));
                  }
              }),
              t
            );
          }
          function le(e) {
            var t = {
              source: fe(null == e ? void 0 : e.source)
                ? null == e
                  ? void 0
                  : e.source
                : "12306",
              key: (null == e ? void 0 : e.key) || "",
              passengerID: (null == e ? void 0 : e.passengerID) || "",
              name: null == e ? void 0 : e.passengerName.replace(/ /g, ""),
              ticket_type_name: null == e ? void 0 : e.passengerType,
              id_type_name: null == e ? void 0 : e.identityType,
              id_no: null == e ? void 0 : e.identityNo,
              birthday: null == e ? void 0 : e.birthDay,
              isStudentToAdult:
                null != (null == e ? void 0 : e.isStudentToAdult) &&
                (null == e ? void 0 : e.isStudentToAdult),
              userCountry: null == e ? void 0 : e.nationality,
              gat_valid_date_end: null == e ? void 0 : e.expireDate,
              self: null == e ? void 0 : e.isSelf,
              tempSelected: !0,
              isFreeChild: !!e.isFreeChild,
            };
            return (
              G(null == e ? void 0 : e.originCtripData) ||
                (t = (0, C.Z)(
                  (0, C.Z)({}, null == e ? void 0 : e.originCtripData),
                  t
                )),
              null != e && e.isKid && (t.isKid = !0),
              t
            );
          }
          function ce(e) {
            var t = {
              source: fe(null == e ? void 0 : e.source)
                ? "ctrip"
                : null == e
                ? void 0
                : e.source,
              key: (null == e ? void 0 : e.key) || "",
              passengerID: (null == e ? void 0 : e.passengerID) || "",
              passengerName:
                null == e ? void 0 : e.passengerName.replace(/ /g, ""),
              passengerType: (null == e ? void 0 : e.passengerType) || "成人票",
              passportType: null == e ? void 0 : e.identityType,
              passportCode: null == e ? void 0 : e.identityNo,
              birthday: null == e ? void 0 : e.birthDay,
              isStudentToAdult:
                null != (null == e ? void 0 : e.isStudentToAdult) &&
                (null == e ? void 0 : e.isStudentToAdult),
              nationality: null == e ? void 0 : e.nationality,
              cardTimeLimit: null == e ? void 0 : e.expireDate,
              tempSelected: !0,
              isFreeChild: !!e.isFreeChild,
            };
            return (
              G(null == e ? void 0 : e.originCtripData) ||
                (t = (0, C.Z)(
                  (0, C.Z)({}, null == e ? void 0 : e.originCtripData),
                  t
                )),
              null != e && e.isKid && (t.isKid = !0),
              t
            );
          }
          function de(e) {
            return null != e && e.real_mobile
              ? null == e
                ? void 0
                : e.real_mobile
              : null != e &&
                e.mobile &&
                -1 === (null == e ? void 0 : e.mobile.indexOf("****"))
              ? null == e
                ? void 0
                : e.mobile
              : null;
          }
          function ue(e, t) {
            if (null != e && e.includes("学生"))
              try {
                return (!!t && JSON.parse(t)) || {};
              } catch (e) {}
            return null;
          }
          function he() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            if (G(e)) return [];
            var t = JSON.parse(JSON.stringify(e)),
              n = t.find(function (e) {
                return "儿童票" != e.passengerType;
              });
            return (
              G(n) ||
                ((n = JSON.parse(JSON.stringify(n))),
                t.forEach(function (e) {
                  var t, i;
                  "儿童票" == (null == e ? void 0 : e.passengerType) &&
                    (fe(null == e ? void 0 : e.identityType) ||
                      fe(null == e ? void 0 : e.identityNo)) &&
                    ((e.identityType =
                      null === (t = n) || void 0 === t
                        ? void 0
                        : t.identityType),
                    (e.identityNo =
                      null === (i = n) || void 0 === i
                        ? void 0
                        : i.identityNo));
                })),
              t
            );
          }
          function pe(e) {
            return e.state.chosenPassengerList.map(function (e) {
              var t = 2;
              "12306" == e.source && (t = 1);
              var n,
                i,
                a,
                r,
                o,
                s,
                l,
                c,
                d,
                u,
                h,
                p,
                g,
                f,
                m,
                v = null;
              G(null == e ? void 0 : e.studentInfo) ||
                (v = {
                  cardNo:
                    null == e || null === (n = e.studentInfo) || void 0 === n
                      ? void 0
                      : n.CouponNo,
                  faculty:
                    null == e || null === (i = e.studentInfo) || void 0 === i
                      ? void 0
                      : i.Faculty,
                  province:
                    null == e || null === (a = e.studentInfo) || void 0 === a
                      ? void 0
                      : a.ProvinceName,
                  provinceCode:
                    null == e || null === (r = e.studentInfo) || void 0 === r
                      ? void 0
                      : r.ProvinceCode,
                  studentNumber:
                    null == e || null === (o = e.studentInfo) || void 0 === o
                      ? void 0
                      : o.StudentNumber,
                  schoolSystem:
                    "string" ==
                    typeof (null == e ||
                    null === (s = e.studentInfo) ||
                    void 0 === s
                      ? void 0
                      : s.SchoolSystem)
                      ? null == e ||
                        null === (l = e.studentInfo) ||
                        void 0 === l ||
                        null === (c = l.SchoolSystem) ||
                        void 0 === c
                        ? void 0
                        : c.substr(0, 1)
                      : (null == e ||
                        null === (d = e.studentInfo) ||
                        void 0 === d
                          ? void 0
                          : d.SchoolSystem) + "",
                  schoolYear:
                    (null == e || null === (u = e.studentInfo) || void 0 === u
                      ? void 0
                      : u.StartYear) + "",
                  departCity:
                    null == e || null === (h = e.studentInfo) || void 0 === h
                      ? void 0
                      : h.DepartCityName,
                  arriveCity:
                    null == e || null === (p = e.studentInfo) || void 0 === p
                      ? void 0
                      : p.ArriveCityName,
                  className:
                    null == e || null === (g = e.studentInfo) || void 0 === g
                      ? void 0
                      : g.Clazz,
                  departCityCode:
                    null == e || null === (f = e.studentInfo) || void 0 === f
                      ? void 0
                      : f.DepartCityCode,
                  arriveCityCode:
                    null == e || null === (m = e.studentInfo) || void 0 === m
                      ? void 0
                      : m.ArriveCityCode,
                });
              var _ = {
                passengerFlag: t,
                passengerName: e.passengerName,
                passengerType: e.passengerType,
                identityType: e.identityType || e.passportType,
                identityNo: e.identityNo || e.passportCode,
                birthDay: e.birthDay,
                nationality: e.nationality,
                expireDate: e.expireDate,
                studentInfo: v,
              };
              return (
                e.contactMobileNo && (_.contactMobileNo = e.contactMobileNo), _
              );
            });
          }
          function ge(e) {
            var t = e.state.chosenFreeChildPassengers || [];
            console.log(
              "getFreePassengerListForCreateGrabOrder",
              JSON.stringify(t)
            );
            var n = [];
            return (
              t.forEach(function (e) {
                var t = e.originCtripData || e || {};
                n.push({
                  freeType: 1,
                  passengerName:
                    (null == t ? void 0 : t.name) ||
                    (null == e ? void 0 : e.passengerName) ||
                    (null == e ? void 0 : e.pasName),
                  identityType:
                    (null == t ? void 0 : t.id_type_name) ||
                    (null == e ? void 0 : e.identityType) ||
                    (null == e ? void 0 : e.IdentityType),
                  identityNo:
                    (null == t ? void 0 : t.real_id_no) ||
                    (null == t ? void 0 : t.id_no) ||
                    (null == e ? void 0 : e.identityNo),
                  contactMobileNo:
                    (null == t ? void 0 : t.real_mobile) ||
                    (null == t ? void 0 : t.mobile) ||
                    (null == e ? void 0 : e.Mobile) ||
                    (null == e ? void 0 : e.contactMobileNo),
                });
              }),
              n
            );
          }
          function fe(e) {
            return void 0 === e || "" == e || null == e;
          }
          S.Z.isTieyou;
          var me = (function (e) {
            (0, c.Z)(n, e);
            var t = (0, d.Z)(n);
            function n(e) {
              var i, a, r, s, l, c, d, u;
              return (
                (0, o.Z)(this, n),
                ((u = t.call(this, e)).state = {
                  editPassengerIndex: -1,
                  chosenPassengerList: e.chosenPassengerList,
                  showModePassenger: 0 !== e.chosenPassengerList.length,
                  wantDeletePassengerIndex: "",
                  passengers: [],
                  exchangeable:
                    (null === (i = e.page) ||
                    void 0 === i ||
                    null === (a = i.props) ||
                    void 0 === a ||
                    null === (r = a.passProps) ||
                    void 0 === r ||
                    null === (s = r.trainModel) ||
                    void 0 === s
                      ? void 0
                      : s.exchangeable) ||
                    (null == e ||
                    null === (l = e.page) ||
                    void 0 === l ||
                    null === (c = l.state) ||
                    void 0 === c ||
                    null === (d = c.trainModel) ||
                    void 0 === d
                      ? void 0
                      : d.exchangeable) ||
                    !1,
                }),
                (u.swipeRef = null),
                u
              );
            }
            return (
              (0, s.Z)(n, [
                { key: "componentWillUnmount", value: function () {} },
                { key: "resetState", value: function () {} },
                {
                  key: "UNSAFE_componentWillReceiveProps",
                  value: function (e) {
                    0 === e.chosenPassengerList.length
                      ? this.setState({
                          showModePassenger: !1,
                          wantDeletePassengerIndex: -1,
                          editPassengerIndex: -1,
                        })
                      : this.setState(
                          {
                            showModePassenger: !0,
                            iconDelete: -1,
                            wantDeletePassengerIndex: -1,
                            editPassengerIndex: -1,
                          },
                          function () {}
                        );
                  },
                },
                {
                  key: "onDeletePassengerIcon",
                  value: function (e) {
                    this.setState({ wantDeletePassengerIndex: e });
                  },
                },
                {
                  key: "onDeletePassengerBtn",
                  value: function (e) {
                    this.props.deletePassengerAction(
                      e,
                      this.props.chosenPassengerList[e] || {}
                    );
                  },
                },
                {
                  key: "addChild",
                  value: function () {
                    this.props.addChildPassengerAction();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return (0, M.tZ)(h.Fragment, {
                      children: this.state.showModePassenger
                        ? B(this)
                        : j(this),
                    });
                  },
                },
              ]),
              n
            );
          })(h.Component);
          (0, u.Z)(me, "propTypes", {
            page: b().shape({}),
            chosenPassengerList: b().array,
            chosenPassengersAction: b().func,
            changePassengerTypeAction: b().func,
            addChildPassengerAction: b().func,
            deletePassengerAction: b().func,
          }),
            (0, u.Z)(me, "defaultProps", {
              chosenPassengerList: [],
              seatModel: {},
              chosenPassengersAction: function () {},
              changePassengerTypeAction: function () {},
              addChildPassengerAction: function () {},
              deletePassengerAction: function () {},
              TrainPassengerTypeSelect: function () {},
            });
          var ve,
            _e = me,
            ye = n(62901),
            be = {
              isValidEnName: function (e) {
                return /^[a-zA-Z\/ ]{2,20}$/.test(e);
              },
              isValidCNName: function (e) {
                return !!e && /((^[\u4E00-\u9FA5]{2,14}$))/.test(e);
              },
              getBirthFromCode: function (e) {
                var t,
                  n,
                  i = e.toUpperCase();
                if (18 == i.length) {
                  n = new RegExp(
                    /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
                  );
                  var a = i.match(n);
                  a && a.length > 5 && (t = a[2] + "-" + a[3] + "-" + a[4]);
                }
                return t;
              },
              isValidSFZ: function (e) {
                var t = e.toLowerCase().match(/\w/g);
                if (e.match(/^\d{17}[\dx]$/i)) {
                  for (
                    var n = 0,
                      i = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
                      a = 0;
                    a < 17;
                    a++
                  )
                    n += parseInt(t[a], 10) * i[a];
                  return (
                    "10x98765432".charAt(n % 11) == t[17] &&
                    !!e.replace(/^\d{6}(\d{4})(\d{2})(\d{2}).+$/, "$1-$2-$3")
                  );
                }
                return !1;
              },
              isValidHZ: function (e) {
                if (!e) return !1;
                return !(
                  !/^[a-zA-Z]{5,17}$/.test(e) && !/^[a-zA-Z0-9]{5,17}$/.test(e)
                );
              },
              isValidCszmArmyCard: function (e) {
                if (!e) return !1;
                return /^[A-Za-z0-9]{5,15}$/.test(e);
              },
              isValidGATResidence: function (e) {
                if (!e) return !1;
                return /^8[123]0000[0-9X]{12}$/.test(e);
              },
              isValidCode: function (e) {
                if (!e) return !1;
                return !!/^[a-zA-Z0-9]{1,20}$/.test(e);
              },
              isValidIdCode: function (e, t) {
                return "身份证" == e || "二代身份证" == e || "户口簿" == e
                  ? this.isValidSFZ(t)
                  : "护照" == e
                  ? this.isValidHZ(t)
                  : "台胞证" == e ||
                    "回乡证" == e ||
                    "军人证" == e ||
                    "港澳通行证" == e ||
                    "出生证明" == e
                  ? this.isValidCszmArmyCard(t)
                  : "港澳台居民居住证" == e
                  ? this.isValidGATResidence(t)
                  : this.isValidCode(t);
              },
              isMobile: function (e) {
                return /^1([3456789]\d{9})$/.test(e);
              },
              isValidChineseName: function (e) {
                return /^([\u4E00-\u9FA5]{1,20}((?:\xb7|\.)[\u4E00-\u9FA5]{1,20})|[\u4E00-\u9FA5]{2,20}|([\u4E00-\u9FA5]{1,20}[a-zA-z]{1,20}))$/.test(
                  e
                );
              },
              isEmail: function (e) {
                return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e);
              },
              isValid12306Password: function (e) {
                if (!e) return !1;
                return /^(?![0-9]+$)(?![_]+$)(?![a-zA-Z]+$)[A-Za-z_0-9]{6,}$/.test(
                  e
                );
              },
            },
            Ce = n(90384),
            Se = n(3205);
          !(function (e) {
            (e.Depart = "d"), (e.Arrive = "a");
          })(ve || (ve = {}));
          var Te = function (e) {
              var t = e.departStation,
                n = e.arriveStation,
                i = e.setDepartInfo,
                a = e.setArriveInfo,
                r = e.onExchangeStation,
                o = (0, h.useRef)(0),
                s = function (e) {
                  Se.Z.trainSmartCity(
                    { title: "d" === e ? "出发" : "到达" },
                    function (t) {
                      console.log("chooseStation", t), "d" == e ? i(t) : a(t);
                    }
                  );
                };
              return (0, M.BX)(f.View, {
                className: " _iv _Mb _Vb _i _l _mh",
                children: [
                  (0, M.tZ)(f.View, {
                    className: " _j _Fe",
                    onClick: function () {
                      s(ve.Depart);
                    },
                    children: (0, M.tZ)(f.View, {
                      className:
                        " _sb _jv _nb" +
                        " ".concat(
                          0 === o.current ? "" : o.current % 2 ? " _ev" : " _fv"
                        ),
                      children: t.name,
                    }),
                  }),
                  (0, M.tZ)(f.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/10.0/icon_jh@3x.webp",
                    className: " _kv _Ng _gg",
                    style: "transform: rotate(".concat(180 * o.current, "deg)"),
                    onClick: function () {
                      o.current++, r(n, t);
                    },
                    webp: !0,
                  }),
                  (0, M.tZ)(f.View, {
                    className: " _j _Di",
                    onClick: function () {
                      s(ve.Arrive);
                    },
                    children: (0, M.tZ)(f.View, {
                      className:
                        " _sb _jv _nb" +
                        "  ".concat(
                          0 === o.current
                            ? ""
                            : o.current % 2
                            ? " _gv"
                            : " _hv",
                          "}"
                        ),
                      children: n.name,
                    }),
                  }),
                ],
              });
            },
            we = function (e) {
              var t = e.textValue,
                n = e.onChangeText,
                i = e.onFocus;
              return (0, M.BX)(f.View, {
                className: " _ts _i _l _yb _us _Mb _Vb _be",
                children: [
                  (0, M.tZ)(f.Text, {
                    className: " _Ma _vs _Io",
                    children: "通知手机",
                  }),
                  (0, M.tZ)(f.Input, {
                    className: " _ws _sb _vs _Uc",
                    type: "number",
                    onInput: function (e) {
                      console.log("handleInput", e);
                      var t = e.detail.value;
                      S.Z.isCRN || (t.length >= 11 && g().hideKeyboard()), n(t);
                    },
                    placeholder: "输入联系人手机号码",
                    placeholderClass: "input-placeholder",
                    value: t,
                    onFocus: function () {
                      return null == i ? void 0 : i();
                    },
                  }),
                ],
              });
            },
            Ne = n(61885),
            Ze = n(19972),
            xe = n(35707),
            Pe = n(75786),
            ke = n(87298),
            Ie = n(12806),
            De = n(58374),
            Le = n(82750);
          var ze,
            Ve = n(53550),
            Re = n(78995),
            Me = function (e) {
              var t = e.showShare,
                n = e.page,
                i = e.onBack,
                a = e.onShare,
                r = void 0 === a ? function () {} : a;
              return (0, M.tZ)(Re.Z, {
                page: e.page,
                pop: function () {
                  var e;
                  (i && !i()) ||
                    null == n ||
                    null === (e = n.pop) ||
                    void 0 === e ||
                    e.call(n);
                },
                title: "",
                defaultBackButtonColor: "#222222",
                renderLeftView: S.Z.isCRN
                  ? function () {
                      return (0, M.tZ)(f.View, {
                        onClick: function () {
                          (i && !i()) || (0, p.navigateBack)({ delta: 1 });
                        },
                        children: (0, M.tZ)(Ve.Z, {
                          style: {
                            fontSize: 24,
                            color: "#222",
                            marginLeft: 15,
                          },
                          children: "󰲚",
                        }),
                      });
                    }
                  : null,
                renderRightView: function () {
                  return t
                    ? (0, M.BX)(f.View, {
                        className: " _i _k _l _Io",
                        onClick: r,
                        children: [
                          (0, M.tZ)(f.Image, {
                            className: " _De _Ce",
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/fxd@3x.png",
                          }),
                          (0, M.tZ)(f.View, {
                            className: " _sb _Vc",
                            children: "分享",
                          }),
                        ],
                      })
                    : null;
                },
                renderCenterView: function () {
                  return S.Z.isTieyou
                    ? (0, M.tZ)(f.View, {})
                    : (0, M.tZ)(f.View, {
                        className: " _i _Ga _n",
                        children: (0, M.tZ)(f.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/logo_train_cxzj.webp",
                          className: " _eC _Ua",
                        }),
                      });
                },
                backgroundColor: "transparent",
              });
            },
            Ae = n(43884),
            je = function (e) {
              var t = e.onClickSubtitle;
              return (0, M.BX)(f.View, {
                className: " _i _k _p _kC _lC _Mb",
                children: [
                  (0, M.tZ)(f.Image, {
                    className: " _u _t _q _mC _lC",
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/img_jiankong.webp",
                    webp: !0,
                  }),
                  (0, M.BX)(f.View, {
                    className: " _p",
                    children: [
                      (0, M.tZ)(f.Image, {
                        className: " _KA _gg",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/title_jiankong.webp",
                        webp: !0,
                      }),
                      (0, M.tZ)(f.View, {
                        className: " _ub _i _Ga",
                        onClick: function () {
                          return null == t ? void 0 : t();
                        },
                        children: (0, M.BX)(f.View, {
                          className: " _yc _pb _nC _oC _p _i _Ga _l",
                          children: [
                            (0, M.tZ)(Ae.Z, {
                              useAngle: !0,
                              angle: 270,
                              colors: [
                                "rgba(200, 231, 255, 0)",
                                "rgba(160, 208, 255, .4) ",
                              ],
                              locations: [0, 1],
                              className: " _u _s _t _q _r",
                            }),
                            ["系统刷票", "先抢后付", "免线下排队"].map(
                              function (e, t) {
                                return (0, M.BX)(
                                  f.View,
                                  {
                                    className: " _p _i _Ga _l",
                                    style:
                                      t > 0 ? { marginLeft: (0, w.u1)(6) } : {},
                                    children: [
                                      (0, M.tZ)(f.Image, {
                                        className: " _Iq _fb _Ol",
                                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/icon_gou.webp?1",
                                      }),
                                      (0, M.tZ)(f.View, {
                                        className: " _pC _Na",
                                        children: e,
                                      }),
                                    ],
                                  },
                                  t + ""
                                );
                              }
                            ),
                            (0, M.tZ)(f.Image, {
                              className: " _p _cf _ba _dg",
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/icon_more.webp",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
            Be = function (e) {
              var t = e.chosenDateList,
                n = void 0 === t ? [] : t,
                i = e.chosenTrainList,
                a = void 0 === i ? [] : i,
                r = e.chosenSeatList,
                o = void 0 === r ? [] : r,
                s = e.onClickPlan,
                l = void 0 === s ? function () {} : s,
                c = function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : function () {},
                    i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                  return (0, M.BX)(f.View, {
                    className: " _mh _i _Ga _l _rC _Mb",
                    onClick: n,
                    children: [
                      (0, M.tZ)(f.Text, {
                        className: " _sC _Ej _Io",
                        children: e,
                      }),
                      i &&
                        (0, M.tZ)(f.Text, {
                          className: " _tC _Pa",
                          numberOfLines: 1,
                          style: S.Z.isCRN
                            ? {}
                            : "white-space: nowrap;text-overflow: ellipsis;overflow: hidden;",
                          children: t || "",
                        }),
                      !i &&
                        (0, M.tZ)(f.Text, {
                          className: " _tC _Pa",
                          numberOfLines: 1,
                          style: S.Z.isCRN
                            ? { flex: 1 }
                            : "flex:1;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;",
                          children: t || "",
                        }),
                      i &&
                        (0, M.tZ)(f.View, {
                          className: " _De _Q _uC _pa _Rk _sh _gi",
                          children: "限当天",
                        }),
                      i && (0, M.tZ)(f.View, { className: " _j" }),
                      !i &&
                        (0, M.tZ)(f.Image, {
                          className: " _Og _Ye _og _Kc",
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/icon_12_more.webp",
                        }),
                    ],
                  });
                },
                d =
                  (n
                    .map(function (e) {
                      return _()(e).format("M月D日");
                    })
                    .join("/"),
                  n
                    .map(function (e) {
                      return _()(e).format("M月D日");
                    })
                    .join("/") + "（今天）"),
                u =
                  a
                    .map(function (e) {
                      return e.trainNumber;
                    })
                    .join(" ") || "选择车次",
                h = o.join(" ") || "选择座席";
              return (0, M.BX)(f.View, {
                className: " _qC",
                children: [
                  !1,
                  c("出发日期", d, function () {}, !0),
                  (0, M.tZ)(f.View, { className: " _Zf _vC" }),
                  c("监控车次", u, function () {
                    l("TrainSelectionPage");
                  }),
                  (0, M.tZ)(f.View, { className: " _Zf _vC" }),
                  c("监控座席", h, function () {
                    l("SeatSelectionDrawer");
                  }),
                ],
              });
            },
            Fe = n(92049),
            Oe = function (e) {
              var t = e.isCanOrder,
                n = e.onConfirm,
                i = void 0 === n ? function () {} : n;
              return (0, M.BX)(f.View, {
                className: " _Ph _Vb _Wb _i _k _l _Z",
                children: [
                  (0, M.tZ)(f.View, {
                    className: " _p _Gc _w _Oa _i _Ga _n",
                    style: { width: (0, w.u1)((0, w.Y1)() - 16) },
                    onClick: i,
                    children: (0, M.tZ)(f.View, {
                      className: " _Xc _qb _Wc " + (t ? "" : " _fC"),
                      children: "立即监控",
                    }),
                  }),
                  (0, M.tZ)(Fe.Z, {}),
                ],
              });
            },
            Ee = n(81380).Z,
            Je = n(70537).Z,
            qe = function (e) {
              var t = S.Z.isTieyou
                ? "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/ty@3x.png"
                : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/pinxuan_qiangpiao.webp";
              return (0, M.tZ)(f.View, {
                className: " _rs _Z _i _Ga _n",
                style: null == e ? void 0 : e.style,
                children: (0, M.tZ)(f.Image, {
                  src: t,
                  className: " _Hj _Gj",
                  style: S.Z.isTieyou ? {} : (0, w.Ad)(227, 37, 74),
                }),
              });
            },
            Xe = n(82954),
            We =
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/img_bg_fuceng_jiankong.webp",
            Ge =
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/title_fuceng_jiankong.webp",
            Ke =
              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/img_fuceng_jiankong.webp",
            Ye = [
              {
                title: "系统刷票",
                subTitle: "余票监控神器自动刷票，省时省力",
                icon: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/icon_32_shuapiao.webp",
              },
              {
                title: "先抢后付",
                subTitle: "抢到车票再付款，10分钟内确认付款即可出票",
                icon: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/icon_32_xqhf.webp",
              },
              {
                title: "免线下排队",
                subTitle: "免去车站排队，节省车站往返时间，线上查询",
                icon: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/icon_32_mianpaidui.webp",
              },
            ],
            $e = function (e) {
              var t = e.isShow,
                n = e.hide;
              return (0, M.tZ)(Xe.h, {
                isShow: t,
                cancel: n,
                showCloseIcon: !0,
                hasBackground: !0,
                backgroundIcon: We,
                closeIcon:
                  "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/gb@3x.png",
                outerStyle: {
                  box: {
                    backgroundColor: "#F2F7FA",
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                  },
                  backgroundImg: { height: 119 },
                },
                children: (0, M.BX)(f.View, {
                  className: " _Yr _Z _kc",
                  children: [
                    (0, M.BX)(f.View, {
                      className: " _LC _p",
                      children: [
                        (0, M.tZ)(f.Image, {
                          src: Ke,
                          className: " _u _q _MC _rp _NC",
                        }),
                        (0, M.BX)(f.View, {
                          className: " _i _Ga _Sc _l",
                          children: [
                            (0, M.tZ)(f.Image, {
                              src: Ge,
                              className: " _OC _bc",
                            }),
                            (0, M.tZ)(f.View, {
                              className: " _Ee _Ef _nc _i _l _n _PC",
                              children: (0, M.tZ)(f.Text, {
                                className: " _oc _D",
                                children: "优势",
                              }),
                            }),
                          ],
                        }),
                        (0, M.tZ)(f.View, {
                          className: " _i _Ga _Sc _l _cg",
                          children: Ye.map(function (e) {
                            return (0,
                            M.BX)(f.View, { className: " _i _Ga _l _Sc _Qf", children: [(0, M.tZ)(f.Image, { src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/icon_gou.webp", className: " _QC _bb" }), (0, M.tZ)(f.Text, { className: " _Og _E _R _pC", children: e.title || "" })] }, e.title);
                          }),
                        }),
                      ],
                    }),
                    (0, M.tZ)(f.View, {
                      className: " _Rd _qs _RC _Oa",
                      children: Ye.map(function (e, t) {
                        return (0,
                        M.BX)(f.View, { children: [0 !== t && (0, M.tZ)(f.View, { className: " _Zf _Z _go" }), (0, M.BX)(f.View, { className: " _i _Ga _Sc _l _SC", children: [(0, M.tZ)(f.Image, { src: e.icon, className: " _xC _mf _nf _Qf" }), (0, M.BX)(f.View, { className: " _i _k _Sc _kk", children: [(0, M.tZ)(f.Text, { className: " _qy _S _sb", children: e.title }), (0, M.tZ)(f.Text, { className: " _Km _E _R _Ma", children: e.subTitle })] })] })] }, t);
                      }),
                    }),
                  ],
                }),
              });
            },
            He = n(82977),
            Ue = "TZAGrabMonitor_ShareButton_click",
            Qe = "TZAGrabMonitor_SharePopup_click",
            et = "TZAGrabMonitor_SharePopup_exposure",
            tt = "TZAGrabMonitor_Monitor_click",
            nt = "TZAGrabMonitor_SelectPassenger_click",
            it = "TZAGrabMonitor_Seat_click",
            at = "TZAGrabMonitor_Trainno_click",
            rt = "TZAGrabMonitor_DepartStation_click",
            ot = "TZAGrabMonitor_ArriveStation_click",
            st = "TZAGrabMonitor_Phone_click",
            lt = "TZAGrabMonitor_exposure",
            ct = "TZAGrabMonitor_OrdEntrance_click",
            dt = function (e) {
              var t = e.onCancel,
                n = e.onShare,
                i = e.ubtTrace,
                a = e.pageId,
                r = h.default.useRef();
              return (
                (0, h.useEffect)(function () {
                  null == i || i(et, { PageId: a });
                }, []),
                (0, M.tZ)(M.HY, {
                  children: (0, M.BX)(He.Z, {
                    enableTapBackground: !0,
                    onCancel: t,
                    innerContainerStyle: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      zIndex: 1001,
                      backgroundColor: "#fff",
                    },
                    children: [
                      (0, M.tZ)(f.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/img_fenxian_pyq_zx@3x.png",
                        mode: "aspectFit",
                        className: " _u _Pi _gB _gl _hB _yi _iB",
                        ref: r,
                      }),
                      (0, M.tZ)(f.View, {
                        className: " _sb _yg _Uc _o _jz",
                        children: "分享至",
                      }),
                      (0, M.tZ)(f.View, {
                        className: " _u _qk _xr",
                        onClick: t,
                        children: (0, M.tZ)(Ve.Z, {
                          className: " _rk _fB",
                          children: "󰳭",
                        }),
                      }),
                      (0, M.tZ)(f.View, {
                        className: " _i _Ga _eB _p",
                        children: [
                          {
                            type: "wechat",
                            name: "微信好友",
                            iconUrl:
                              "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/icon_fx_1.png",
                          },
                          {
                            type: "pyq",
                            name: "朋友圈",
                            iconUrl:
                              "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/icon_fx_2.png",
                          },
                          {
                            type: "save",
                            name: "保存图片",
                            iconUrl:
                              "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/icon_fx_4.png",
                          },
                        ].map(function (e, t) {
                          return (0, M.BX)(
                            f.View,
                            {
                              className: " _j _o _i _n _l",
                              onClick: function () {
                                n(e, r);
                              },
                              children: [
                                (0, M.tZ)(f.Image, {
                                  src: e.iconUrl,
                                  mode: "aspectFit",
                                  className: " _Tu _Ae",
                                }),
                                (0, M.tZ)(
                                  f.Text,
                                  {
                                    className: " _Xb _no _bg",
                                    children: e.name,
                                  },
                                  t
                                ),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                })
              );
            },
            ut = n(94924),
            ht = function (e) {
              var t = e.monitorOrderInfo,
                n = e.ubtTrace,
                i = e.pageId;
              if (!t || null == t || !t.title) return null;
              var a = t.title,
                r = t.desTags,
                o = void 0 === r ? [] : r;
              return (0, M.tZ)(f.View, {
                className: " _wC _be _jj _iv _i _Ga _oj _l",
                onClick: function () {
                  S.Z.isCRN && (null == n || n(ct, { PageId: i })), (0, N._f)();
                },
                children: (0, M.BX)(f.View, {
                  className: " _oo _i _Sc _l",
                  children: [
                    (0, M.tZ)(f.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/icon_32_jiankong.webp",
                      className: " _xC _mf _nf _Qf",
                    }),
                    (0, M.BX)(f.View, {
                      className: " _j",
                      children: [
                        (0, M.tZ)(ut.Z, {
                          className: " _Hf _W _yC",
                          children: a,
                        }),
                        (0, M.tZ)(f.View, {
                          className: " _i _Ga _Sc _l _Km",
                          children: (o || []).map(function (e, t) {
                            return (0,
                            M.BX)(f.View, { className: " _i _Ga _Sc _l", children: [0 !== t && (0, M.tZ)(f.View, { className: " _cj _Jq _Dm _zC" }), (0, M.tZ)(f.Text, { className: " _D _Q _Hh", children: e || "" })] }, t);
                          }),
                        }),
                      ],
                    }),
                    (0, M.BX)(f.View, {
                      className: " _i _AC _Sc _l",
                      children: [
                        (0, M.tZ)(f.Text, {
                          className: " _E _R _BC",
                          children: "详情",
                        }),
                        (0, M.tZ)(f.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/icon_12_more.webp",
                          className: " _Ye _og",
                        }),
                      ],
                    }),
                  ],
                }),
              });
            },
            pt =
              (0, ke.h)()(
                (ze = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, d.Z)(n);
                  function n(e) {
                    var i;
                    (0, o.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, u.Z)(
                        (0, l.Z)(i),
                        "debounceChangeContactMobile",
                        void 0
                      ),
                      (0, u.Z)(
                        (0, l.Z)(i),
                        "pageId",
                        S.Z.isCRN ? "10650104482" : "10650104552"
                      ),
                      (0, u.Z)(
                        (0, l.Z)(i),
                        "calendarStartDate",
                        _()().format("YYYY-MM-DD")
                      ),
                      (0, u.Z)(
                        (0, l.Z)(i),
                        "calendarEndDate",
                        _()().add(14, "day").format("YYYY-MM-DD")
                      ),
                      (0, u.Z)(
                        (0, l.Z)(i),
                        "getMonitorOrder",
                        (0, r.Z)(
                          (0, a.Z)().mark(function e() {
                            var t;
                            return (0, a.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0), (e.next = 3), (0, De.Af)()
                                      );
                                    case 3:
                                      if (
                                        ((t = e.sent),
                                        console.log(
                                          "getMonitorOrder --\x3e ",
                                          t
                                        ),
                                        1 ===
                                          (null == t ? void 0 : t.resultCode))
                                      ) {
                                        e.next = 8;
                                        break;
                                      }
                                      return (
                                        console.error(
                                          null == t ? void 0 : t.resultMessage
                                        ),
                                        e.abrupt("return")
                                      );
                                    case 8:
                                      i.setState({ monitorOrder: t }),
                                        (e.next = 14);
                                      break;
                                    case 11:
                                      (e.prev = 11),
                                        (e.t0 = e.catch(0)),
                                        console.error(e.t0);
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 11]]
                            );
                          })
                        )
                      ),
                      (0, u.Z)((0, l.Z)(i), "onClickSubtitle", function () {
                        i.setState({ showIntroductionDialog: !0 });
                      }),
                      (0, u.Z)((0, l.Z)(i), "handleTriggerShare", function () {
                        var e, t;
                        i.setState({ isTriggerShare: !0 }),
                          null === (e = (t = i).ubtTrace) ||
                            void 0 === e ||
                            e.call(t, Ue, { PageId: i.getPageId() });
                      }),
                      (0, u.Z)((0, l.Z)(i), "handleCancelShare", function () {
                        i.setState({ isTriggerShare: !1 });
                      }),
                      (i.state = {
                        chosenDateList: [_()().format("YYYY-MM-DD")],
                        chosenTrainList: [],
                        chosenSeatList: [],
                        chosenPassengerList: [],
                        chosenFreeChildPassengers: [],
                        originChosenPassengerList: [],
                        orderPassengerMaxCount: 9,
                        departStation: {
                          name: "上海",
                          code: "SHH",
                          canPreciseSearch: !1,
                        },
                        arriveStation: { name: "北京", code: "BJP" },
                        contactMobile: "",
                        showType: "",
                        showIntroductionDialog: !1,
                        isTriggerShare: !1,
                        monitorOrder: null,
                      });
                    var s,
                      c = (0, p.getCurrentInstance)();
                    c &&
                      c.router &&
                      c.router.params &&
                      JSON.parse(
                        decodeURIComponent(
                          (null === (s = c.router.params) || void 0 === s
                            ? void 0
                            : s.initData) || "{}"
                        )
                      );
                    return (
                      (i.debounceChangeContactMobile = Ce.Z.debounce(
                        i.changeContactMobile,
                        200
                      )),
                      i.monitorPassengerChosen(),
                      i
                    );
                  }
                  return (
                    (0, s.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, n, i, r, o, s, l, c;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (t = g().getStorageSync(ye.cq) || {}),
                                          (n = t.departStation),
                                          (i = t.arriveStation),
                                          (r = t.mobile),
                                          (o = r),
                                          (s = n || {
                                            name: "上海",
                                            code: "SHH",
                                            canPreciseSearch: !1,
                                          }),
                                          (l = i || {
                                            name: "北京",
                                            code: "BJP",
                                          }),
                                          r)
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          (e.next = 7), this.getUserMobile()
                                        );
                                      case 7:
                                        if (((e.t0 = e.sent), e.t0)) {
                                          e.next = 10;
                                          break;
                                        }
                                        e.t0 = "";
                                      case 10:
                                        o = e.t0;
                                      case 11:
                                        return (
                                          (e.next = 13), this.getMonitorOrder()
                                        );
                                      case 13:
                                        this.setState({
                                          departStation: s,
                                          arriveStation: l,
                                          contactMobile: o,
                                        }),
                                          S.Z.isCRN &&
                                            (null === (c = this.ubtTrace) ||
                                              void 0 === c ||
                                              c.call(this, lt, {
                                                PageId: this.getPageId(),
                                              })),
                                          (e.next = 19);
                                        break;
                                      case 17:
                                        (e.prev = 17), (e.t1 = e.catch(0));
                                      case 19:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 17]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "getChosenTrainInfo",
                        value: function (e, t, n, i) {
                          var a = this,
                            r = i.trainStationInfos,
                            o = {
                              DepartStation: e,
                              ArriveStation: t,
                              DepartDate: n,
                              channelName: S.Z.isTieyou ? "tieyou" : "zhixing",
                              searchType: 0,
                            };
                          (0, De.xv)(o).then(function (e) {
                            var t,
                              n =
                                (null == e ||
                                null === (t = e.responseBody) ||
                                void 0 === t
                                  ? void 0
                                  : t.trainInfoList) || [];
                            if (n.length > 0) {
                              var i = [];
                              n.forEach(function (e) {
                                r.some(function (t) {
                                  return (0, Ie.Pu)(t, e);
                                }) && i.push((0, Ie.lv)(e));
                              }),
                                a.setState({ chosenTrainList: i });
                            }
                          });
                        },
                      },
                      { key: "getPageInfo", value: function () {} },
                      {
                        key: "onClickPlan",
                        value: function (e) {
                          var t = this,
                            n = this.state,
                            i = n.departStation,
                            a = n.arriveStation,
                            r = n.chosenTrainList,
                            o = n.chosenDateList;
                          if (
                            (n.chosenSeatList,
                            console.log(e),
                            "DateSelectionDrawer" === e)
                          ) {
                            if (S.Z.isCRN)
                              return void (0, Z.AE)(
                                {
                                  chosenDates: o,
                                  startDate: this.calendarStartDate,
                                  endDate: this.calendarEndDate,
                                  cannotChangeDays: [],
                                  overMonth:
                                    _()(this.calendarStartDate).month() !==
                                    _()(this.calendarEndDate).month(),
                                },
                                function (e, n) {
                                  !e &&
                                    n &&
                                    t.setState({
                                      chosenDateList: n,
                                      chosenSeatList: [],
                                      chosenTrainList: [],
                                    });
                                }
                              );
                            this.setState({ showType: "DateSelectionDrawer" });
                          } else if ("TrainSelectionPage" === e) {
                            if (0 === o.length)
                              return void (0, T.v)(
                                "温馨提示",
                                "请先添加日期～"
                              );
                            if (S.Z.isCRN) {
                              var s;
                              null === (s = this.ubtTrace) ||
                                void 0 === s ||
                                s.call(this, at, { PageId: this.getPageId() });
                              var l = r.map(function (e) {
                                return e.trainNumber;
                              });
                              return void (0, N.Qu)({
                                departStation: i,
                                arriveStation: a,
                                departDates: o,
                                tourFlag: "dc",
                                chosenTrainCodes: l,
                                chosenTrainInfo: r.map(function (e) {
                                  return {
                                    code: e.trainNumber,
                                    from_name: e.departStation,
                                    to_name: e.arriveStation,
                                  };
                                }),
                                originChoosenTrainStationList: [],
                                originChosenTrainFrom: i.name,
                                originChosenTrainTo: a.name,
                                confirmCallback: function (e) {
                                  if (
                                    (console.log("chosenTrains", e),
                                    e && Array.isArray(e))
                                  ) {
                                    var n = e.map(function (e) {
                                      return (0, Ie.lv)(e);
                                    });
                                    console.log("curChosenTrainList", n),
                                      t.setState({
                                        chosenTrainList: n,
                                        chosenSeatList: (0, Ie.q3)(
                                          n,
                                          t.state.chosenSeatList
                                        ),
                                      }),
                                      e.length > 0 &&
                                        t.setState({
                                          showType: "SeatSelectionDrawer",
                                        });
                                  }
                                },
                              });
                            }
                            var c = r
                                .map(function (e) {
                                  return e.trainNumber;
                                })
                                .join(","),
                              d = o.join(","),
                              u = o[0];
                            this.navigateTo({
                              url: "/pages/trainRob/otherlist/otherlist?TrainNumber="
                                .concat(c, "&DepartStation=")
                                .concat(i.name, "&ArriveStation=")
                                .concat(a.name, "&DepartureDates=")
                                .concat(d, "&DepartureDate=")
                                .concat(u),
                              data: {
                                chosenTrainList: JSON.parse(
                                  JSON.stringify(
                                    r.map(function (e) {
                                      return {
                                        ArriveStation: e.arriveStation,
                                        DepartStation: e.departStation,
                                        TrainNumber: e.trainNumber,
                                        SeatList: e.seatList,
                                      };
                                    })
                                  )
                                ),
                                isFilter: !1,
                                fromPage: "candidateOrderUpdate",
                              },
                              callback: function (e) {
                                if (
                                  e &&
                                  e.chosenTrainList &&
                                  Array.isArray(e.chosenTrainList)
                                ) {
                                  var t = e.chosenTrainList.map(function (e) {
                                    return (0, Ie.lv)(e);
                                  });
                                  this.setState({
                                    chosenTrainList: t,
                                    chosenSeatList: (0, Ie.q3)(
                                      t,
                                      this.state.chosenSeatList
                                    ),
                                  }),
                                    e.chosenTrainList.length > 0 &&
                                      this.setState({
                                        showType: "SeatSelectionDrawer",
                                      });
                                }
                              },
                            });
                          } else if ("SeatSelectionDrawer" === e) {
                            var h;
                            if (
                              (S.Z.isCRN &&
                                (null === (h = this.ubtTrace) ||
                                  void 0 === h ||
                                  h.call(this, it, {
                                    PageId: this.getPageId(),
                                  })),
                              0 === r.length)
                            )
                              return void (0, T.v)(
                                "温馨提示",
                                "请先添加车次～"
                              );
                            this.setState({ showType: "SeatSelectionDrawer" });
                          }
                        },
                      },
                      {
                        key: "monitorPassengerChosen",
                        value: function () {
                          var e = this;
                          S.Z.isCRN &&
                            Pe.Z.addEventListener(
                              "event.train.passengers.selected",
                              function (t) {
                                var n = setTimeout(function () {
                                  console.log(
                                    "event.train.passengers.selected--data--\x3e",
                                    t
                                  );
                                  var i = t.passengers || [],
                                    a = t.freeChildren || [],
                                    r = ae(i),
                                    o = ae(a || []);
                                  console.log(
                                    "event.train.passengers.selected-selectedPassengers->",
                                    JSON.stringify(i)
                                  ),
                                    console.log(
                                      "event.train.passengers.selected-freeChildrenList->",
                                      JSON.stringify(o)
                                    );
                                  for (
                                    var s = 0;
                                    s < (null == r ? void 0 : r.length);
                                    s++
                                  ) {
                                    var l,
                                      c,
                                      d = r[s];
                                    if (
                                      (null == d ||
                                      null === (l = d.name) ||
                                      void 0 === l
                                        ? void 0
                                        : l.indexOf(".")) > -1 ||
                                      (null == d ||
                                      null === (c = d.passengerName) ||
                                      void 0 === c
                                        ? void 0
                                        : c.indexOf(".")) > -1
                                    )
                                      return void (0, T.v)(
                                        "温馨提示",
                                        '乘客姓名中含有无效字符"."，请改成"·"'
                                      );
                                  }
                                  e.setState({
                                    chosenPassengerList: r,
                                    originChosenPassengerList: i,
                                    chosenFreeChildPassengers: o,
                                  }),
                                    clearTimeout(n);
                                }, 300);
                              }
                            );
                        },
                      },
                      {
                        key: "confirmCalendarDrawer",
                        value: function (e) {
                          this.setState({
                            chosenDateList: e,
                            chosenSeatList: [],
                            chosenTrainList: [],
                          }),
                            this.closeShowType();
                        },
                      },
                      {
                        key: "conformSeatSelection",
                        value: function (e) {
                          var t = this.state.chosenPassengerList;
                          console.log(e);
                          var n;
                          (function (e, t) {
                            var n = e || [];
                            return !(
                              !(function (e) {
                                var t = !1,
                                  n = ["一等座", "软卧", "商务座"];
                                return (
                                  (e || []).forEach(function (e) {
                                    n.includes(e) && (t = !0);
                                  }),
                                  t
                                );
                              })(t) ||
                              !(function () {
                                for (
                                  var e =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : [],
                                    t = !1,
                                    n = 0;
                                  n < e.length;
                                  n++
                                ) {
                                  var i = e[n];
                                  if (
                                    ["学生票", "学生"].includes(i.passengerType)
                                  ) {
                                    t = !0;
                                    break;
                                  }
                                }
                                return t;
                              })(n)
                            );
                          })(
                            t,
                            (n = S.Z.isCRN
                              ? e
                              : e
                                  .filter(function (e) {
                                    return e.selected;
                                  })
                                  .map(function (e) {
                                    return e.SeatName;
                                  }))
                          )
                            ? g().showToast({
                                title:
                                  "学生票仅享受硬座、硬卧、二等座、无座等座席优惠。当前选择了不支持优惠的座席，请修改座席。",
                                icon: "none",
                              })
                            : this.setState({ chosenSeatList: n });
                        },
                      },
                      {
                        key: "changeContactMobile",
                        value: function (e) {
                          console.log("text", e),
                            this.setState({ contactMobile: e });
                        },
                      },
                      {
                        key: "clearChosenSeatAndTrain",
                        value: function () {
                          this.setState({
                            chosenSeatList: [],
                            chosenTrainList: [],
                          });
                        },
                      },
                      {
                        key: "closeShowType",
                        value: function () {
                          this.setState({ showType: "" });
                        },
                      },
                      {
                        key: "getUserMobile",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, n;
                              return (0, a.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), (0, Z.R_)();
                                    case 2:
                                      return (
                                        (t = e.sent),
                                        (n = t && t.userName ? t.userName : ""),
                                        S.Z.isCRN &&
                                          (n =
                                            t && t.bindedMobilePhone
                                              ? t.bindedMobilePhone
                                              : ""),
                                        e.abrupt("return", n)
                                      );
                                    case 6:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "isLogin12306",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, n, i;
                              return (0, a.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), (0, Le.q0)();
                                    case 2:
                                      if (
                                        ((t = e.sent),
                                        (n = t.userName),
                                        (i = t.password),
                                        !n || !i)
                                      ) {
                                        e.next = 7;
                                        break;
                                      }
                                      return e.abrupt("return", !0);
                                    case 7:
                                      return e.abrupt("return", !1);
                                    case 8:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handleChangePassenger",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, n, i, r, o, s, l, c, d;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          S.Z.isCRN &&
                                            (null === (t = this.ubtTrace) ||
                                              void 0 === t ||
                                              t.call(this, nt, {
                                                PageId: this.getPageId(),
                                              })),
                                          xe.Z.isLogin)
                                        ) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (e.next = 5), xe.Z.doLogin();
                                      case 5:
                                        return (
                                          (e.next = 7), this.getUserMobile()
                                        );
                                      case 7:
                                        (n = e.sent),
                                          this.setState({
                                            contactMobile: n || "",
                                          });
                                      case 9:
                                        return (
                                          (e.next = 11), this.isLogin12306()
                                        );
                                      case 11:
                                        if (!e.sent) {
                                          e.next = 20;
                                          break;
                                        }
                                        return (
                                          (i = this.state),
                                          (r = i.chosenPassengerList),
                                          (o = i.chosenFreeChildPassengers),
                                          (s = i.chosenSeatList),
                                          (l = i.chosenTrainList),
                                          (c = i.orderPassengerMaxCount),
                                          (e.next = 16),
                                          K({
                                            chosenPassengerList: r,
                                            chosenFreeChildPassengers: o,
                                            allSeatNames: s,
                                            orderPassengerMaxCount: c,
                                            chosenTrainList: l,
                                          })
                                        );
                                      case 16:
                                        (d = e.sent) &&
                                          this.setState({
                                            chosenPassengerList:
                                              d.chosenPassengerList,
                                            chosenFreeChildPassengers:
                                              d.chosenFreeChildPassengers,
                                          }),
                                          (e.next = 21);
                                        break;
                                      case 20:
                                        (0, Ne.ZO)();
                                      case 21:
                                        e.next = 26;
                                        break;
                                      case 23:
                                        (e.prev = 23),
                                          (e.t0 = e.catch(0)),
                                          console.error(
                                            "handleChangePassenger",
                                            e.t0
                                          );
                                      case 26:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 23]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "isValidParams",
                        value: function () {
                          var e = this.state,
                            t = e.chosenDateList,
                            n = e.chosenTrainList,
                            i = e.chosenSeatList,
                            a = e.contactMobile,
                            r = e.chosenPassengerList;
                          return !!(
                            t.length > 0 &&
                            n.length > 0 &&
                            i.length > 0 &&
                            a &&
                            r.length > 0
                          );
                        },
                      },
                      {
                        key: "toastValidParams",
                        value: function () {
                          var e = this.state.contactMobile;
                          return this.isValidParams()
                            ? !!be.isMobile(e) ||
                                ((0, T.v)("温馨提示", "请输入正确的手机号"), !1)
                            : ((0, T.v)("温馨提示", "请先完善监控信息"), !1);
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          return {
                            title: "余票监控神器",
                            path: "/pages/taroCRN/train/pages/remainingTicketMonitor/index",
                            imageUrl:
                              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/img_fenxian_wx_zx@3x.png",
                          };
                        },
                      },
                      {
                        key: "getCreateGrabOrderParams",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, n, i, r, o, s, l, c, d, u, h;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (t = this.state),
                                          (n = t.chosenDateList),
                                          (i = t.chosenTrainList),
                                          (r = t.chosenSeatList),
                                          (o = t.contactMobile),
                                          (e.next = 4),
                                          (0, Le.q0)()
                                        );
                                      case 4:
                                        if (
                                          ((s = e.sent),
                                          (l = s.userName),
                                          (c = s.password),
                                          (d = s.memberStatus12306),
                                          l && c)
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          g().showToast({
                                            title: "请登录12306账号",
                                            icon: "none",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 11:
                                        return (
                                          (e.next = 13),
                                          (0, Ie.Kt)({
                                            login12306Name: l,
                                            login12306Pas: c,
                                          })
                                        );
                                      case 13:
                                        return (
                                          (u = e.sent),
                                          (h = {
                                            passengerList: pe(this),
                                            freePassengerList: ge(this),
                                            mobile: o,
                                            contactMobile: o,
                                            trainInfo: (0, Ie.Xn)(n, i, r),
                                            userName: u.login12306Name,
                                            password: u.login12306Pas,
                                            bookType: 1004,
                                            userAuth12306Status:
                                              "0" === d ? 1 : -1,
                                            businessTag: "ticketMonitoring",
                                            ticketOffsetTime: 10,
                                          }),
                                          e.abrupt("return", h)
                                        );
                                      case 18:
                                        return (
                                          (e.prev = 18),
                                          (e.t0 = e.catch(0)),
                                          e.abrupt("return", null)
                                        );
                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 18]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "checkRepeatGrabOrder",
                        value: function () {
                          var e = this.state,
                            t = e.departStation,
                            n = e.arriveStation,
                            i = e.chosenDateList,
                            a = e.chosenTrainList,
                            r = e.chosenSeatList,
                            o = e.chosenPassengerList;
                          return (function (e) {
                            var t = e.departStationName,
                              n = e.arrivalStationName,
                              i = e.departDates,
                              a = e.trainNumbers,
                              r = e.seats,
                              o = e.passengerList,
                              s = e.departTime;
                            return (0, De.Y3)({
                              departStationName: t,
                              arrivalStationName: n,
                              departDates: i,
                              trainNums: a,
                              seats: r,
                              passengerList: o,
                              departTime: s,
                              fromPage: 0,
                            })
                              .then(function (e) {
                                return 1 === e.resultCode;
                              })
                              .catch(function () {
                                return !1;
                              })
                              .finally(function () {
                                return !1;
                              });
                          })({
                            departStationName: t.name || "",
                            arrivalStationName: n.name || "",
                            departDates: i.join(","),
                            trainNumbers: a
                              .map(function (e) {
                                return e.trainNumber;
                              })
                              .join(","),
                            seats: r.join(","),
                            passengerList: o.map(function (e) {
                              return {
                                passengerName: e.passengerName || "",
                                passengerType: e.passengerType || "",
                                identityType: e.identityType || e.passportType,
                                identityNo: e.identityNo || e.passportCode,
                              };
                            }),
                            departTime: a[0].departTime,
                          });
                        },
                      },
                      {
                        key: "createOrder",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, a.Z)().mark(function e() {
                              var t, n, i;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          S.Z.isCRN &&
                                            (null === (t = this.ubtTrace) ||
                                              void 0 === t ||
                                              t.call(this, tt, {
                                                PageId: this.getPageId(),
                                              })),
                                          this.toastValidParams())
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 4:
                                        return (
                                          (e.next = 6),
                                          this.checkRepeatGrabOrder()
                                        );
                                      case 6:
                                        if (!e.sent) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          (0, T.v)(
                                            "温馨提示",
                                            "您已有相同行程抢票订单，无法提交监控订单"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 10:
                                        return (
                                          (e.next = 12),
                                          this.getCreateGrabOrderParams()
                                        );
                                      case 12:
                                        if ((n = e.sent)) {
                                          e.next = 15;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 15:
                                        return (
                                          (0, Ze.Q)(),
                                          (e.next = 18),
                                          (0, De.Xr)(n)
                                        );
                                      case 18:
                                        (i = e.sent),
                                          (0, Ze.Z)(),
                                          1 ===
                                            (null == i
                                              ? void 0
                                              : i.resultCode) && i.orderNumber
                                            ? (this.cacheParams(),
                                              (0, N.p1)(
                                                i.orderNumber,
                                                "remainingTicketMonitor",
                                                !1
                                              ))
                                            : ((0, T.v)(
                                                "温馨提示",
                                                (null == i
                                                  ? void 0
                                                  : i.resultMessage) ||
                                                  "网络异常，创建订单失败"
                                              ),
                                              console.error(
                                                null == i
                                                  ? void 0
                                                  : i.resultMessage
                                              )),
                                          (e.next = 28);
                                        break;
                                      case 23:
                                        (e.prev = 23),
                                          (e.t0 = e.catch(0)),
                                          (0, Ze.Z)(),
                                          (0, T.v)(
                                            "温馨提示",
                                            "网络异常，创建订单失败"
                                          ),
                                          console.error(e.t0);
                                      case 28:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 23]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "cacheParams",
                        value: function () {
                          var e = this.state,
                            t = {
                              departStation: e.departStation || null,
                              arriveStation: e.arriveStation || null,
                              mobile: e.contactMobile || "",
                            };
                          g().setStorageSync(ye.cq, t);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            n,
                            i,
                            a = this,
                            r = this.state,
                            o = r.chosenDateList,
                            s = r.chosenTrainList,
                            l = r.chosenSeatList,
                            c = r.departStation,
                            d = r.arriveStation,
                            u = r.chosenPassengerList,
                            h = r.chosenFreeChildPassengers,
                            p = r.contactMobile,
                            g = r.showType,
                            v = r.showIntroductionDialog,
                            _ = r.isTriggerShare,
                            y = r.monitorOrder;
                          return (0, M.BX)(f.View, {
                            className: "MonitorPage",
                            children: [
                              (0, M.tZ)(f.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_08/jiankong/img_bg_toutu_jiankong.webp",
                                className: "bg-img",
                                style: (0, w.Ad)(375, 280, 0),
                              }),
                              (0, M.tZ)(Me, {
                                page: this,
                                showShare: S.Z.isCRN,
                                onShare: this.handleTriggerShare,
                              }),
                              (0, M.BX)(m.Z, {
                                className: "MonitorContainer",
                                scrollY: !0,
                                children: [
                                  (0, M.tZ)(je, {
                                    onClickSubtitle: this.onClickSubtitle,
                                  }),
                                  (0, M.tZ)(ht, {
                                    monitorOrderInfo: y,
                                    ubtTrace:
                                      null === (e = this.ubtTrace) ||
                                      void 0 === e ||
                                      null === (t = e.bind) ||
                                      void 0 === t
                                        ? void 0
                                        : t.call(e, this),
                                    pageId: this.getPageId(),
                                  }),
                                  (0, M.BX)(f.View, {
                                    className: "trainInfo",
                                    children: [
                                      (0, M.tZ)(Te, {
                                        departStation: c,
                                        arriveStation: d,
                                        setDepartInfo: function (e) {
                                          var t;
                                          S.Z.isCRN &&
                                            (null === (t = a.ubtTrace) ||
                                              void 0 === t ||
                                              t.call(a, rt, {
                                                PageId: a.getPageId(),
                                              })),
                                            c !== e &&
                                              (a.setState({ departStation: e }),
                                              a.clearChosenSeatAndTrain());
                                        },
                                        setArriveInfo: function (e) {
                                          var t;
                                          S.Z.isCRN &&
                                            (null === (t = a.ubtTrace) ||
                                              void 0 === t ||
                                              t.call(a, ot, {
                                                PageId: a.getPageId(),
                                              })),
                                            d !== e &&
                                              (a.setState({ arriveStation: e }),
                                              a.clearChosenSeatAndTrain());
                                        },
                                        onExchangeStation: function (e, t) {
                                          a.setState({
                                            departStation: e,
                                            arriveStation: t,
                                          }),
                                            a.clearChosenSeatAndTrain();
                                        },
                                      }),
                                      (0, M.tZ)(Be, {
                                        scope: this,
                                        chosenDateList: o,
                                        chosenTrainList: s,
                                        chosenSeatList: l,
                                        onClickPlan:
                                          this.onClickPlan.bind(this),
                                      }),
                                    ],
                                  }),
                                  (0, M.tZ)(_e, {
                                    page: this,
                                    style: {
                                      marginLeft: (0, w.u1)(12),
                                      marginRight: (0, w.u1)(12),
                                      borderRadius: (0, w.u1)(32),
                                      marginTop: (0, w.u1)(8),
                                    },
                                    chosenPassengerList: (u || []).concat(
                                      h || []
                                    ),
                                    isResign: !1,
                                    chosenPassengersAction:
                                      this.handleChangePassenger.bind(this),
                                    TrainPassengerTypeSelect: function (
                                      e,
                                      t
                                    ) {},
                                    addChildPassengerAction: function () {
                                      ne(a);
                                    },
                                    deletePassengerAction: function (e, t) {
                                      !(function (e, t, n) {
                                        var i, a;
                                        if (n.isFreeChild) {
                                          var r =
                                              e.state
                                                .chosenFreeChildPassengers ||
                                              [],
                                            o = JSON.parse(JSON.stringify(r)),
                                            s = o.findIndex(function (e) {
                                              return (e.passengerName =
                                                n.passengerName &&
                                                e.identityNo === n.identityNo);
                                            });
                                          return (
                                            o.splice(s, 1),
                                            void e.setState({
                                              chosenFreeChildPassengers: o,
                                            })
                                          );
                                        }
                                        console.log(
                                          "deleteChosenPassenger-deletePassengerIndex--\x3e",
                                          t
                                        );
                                        var l =
                                          null === (i = e.state) || void 0 === i
                                            ? void 0
                                            : i.chosenPassengerList.find(
                                                function (e, n) {
                                                  return n === t;
                                                }
                                              );
                                        console.log(
                                          "deleteChosenPassenger--deletedPassengers->",
                                          l
                                        );
                                        var c =
                                          null === (a = e.state) || void 0 === a
                                            ? void 0
                                            : a.chosenPassengerList.filter(
                                                function (e, n) {
                                                  return e.isKid && !l.isKid
                                                    ? (e.identityNo ||
                                                        e.passportCode) !==
                                                        (l.identityNo ||
                                                          l.passportCode)
                                                    : n !== t;
                                                }
                                              );
                                        console.log(
                                          "deleteChosenPassenger--alterDeleteChosenPassenger->",
                                          c
                                        ),
                                          ie(c)
                                            ? (0, T.v)("儿童不能单独出行")
                                            : e.setState({
                                                chosenPassengerList: c,
                                              });
                                      })(a, e, t);
                                    },
                                  }),
                                  (0, M.tZ)(we, {
                                    textValue: p,
                                    onChangeText: function (e) {
                                      console.log("test", e),
                                        S.Z.isCRN
                                          ? a.setState({ contactMobile: e })
                                          : a.debounceChangeContactMobile(e);
                                    },
                                    onFocus: function () {
                                      var e;
                                      S.Z.isCRN &&
                                        (null === (e = a.ubtTrace) ||
                                          void 0 === e ||
                                          e.call(a, st, {
                                            PageId: a.getPageId(),
                                          }));
                                    },
                                  }),
                                  (0, M.tZ)(qe, { style: { marginTop: 30 } }),
                                  (0, M.tZ)(f.View, { className: "blank" }),
                                ],
                              }),
                              (0, M.tZ)(Oe, {
                                isCanOrder: this.isValidParams(),
                                onConfirm: this.createOrder.bind(this),
                              }),
                              (0, M.tZ)(Ee, {
                                visible: "DateSelectionDrawer" === g,
                                maxHeight: "80%",
                                beginDate: this.calendarStartDate,
                                endDate: this.calendarEndDate,
                                preRobDays: Ie.k7,
                                hasSelectedDateList: o,
                                mainTrainDate: [],
                                onClose: this.closeShowType.bind(this),
                                onConfirm:
                                  this.confirmCalendarDrawer.bind(this),
                              }),
                              (0, M.tZ)(Je, {
                                visible: "SeatSelectionDrawer" == g,
                                chosenTrainList: s.map(function (e) {
                                  return (0, Ie.dq)(e);
                                }),
                                chosenSeatStr: l.join(","),
                                onClose: this.closeShowType.bind(this),
                                onConfirm: function (e) {
                                  a.closeShowType(), a.conformSeatSelection(e);
                                },
                                isShow: "SeatSelectionDrawer" == g,
                                seatList: (0, Ie.ad)(s),
                                chosenSeats: l,
                                cancel: this.closeShowType.bind(this),
                                confirm: function (e) {
                                  a.closeShowType();
                                  var t = setTimeout(function () {
                                    a.conformSeatSelection(e), clearTimeout(t);
                                  }, 200);
                                },
                              }),
                              (0, M.tZ)($e, {
                                isShow: v,
                                hide: function () {
                                  a.setState({ showIntroductionDialog: !1 });
                                },
                              }),
                              _ &&
                                (0, M.tZ)(dt, {
                                  onCancel: this.handleCancelShare,
                                  onShare: function (e, t) {
                                    var n;
                                    null === (n = a.ubtTrace) ||
                                      void 0 === n ||
                                      n.call(a, Qe, {
                                        PageId: a.getPageId(),
                                        Type: null == e ? void 0 : e.name,
                                      }),
                                      (function (e, t) {
                                        console.log(e, t);
                                      })(null == e ? void 0 : e.type, t);
                                  },
                                  ubtTrace:
                                    null === (n = this.ubtTrace) ||
                                    void 0 === n ||
                                    null === (i = n.bind) ||
                                    void 0 === i
                                      ? void 0
                                      : i.call(n, this),
                                  pageId: this.getPageId(),
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(h.Component))
              ) || ze;
          (pt.enableShareAppMessage = !0),
            Page(
              (0, i.createPageConfig)(
                pt,
                "pages/taroCRN/train/pages/remainingTicketMonitor/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "",
                  navigationStyle: "custom",
                  navigationBarTextStyle: "black",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 59188, 35048, 70486, 97709, 6189, 22843,
            6878, 71229, 10313, 31162, 20858, 19772, 87032, 82524, 43278, 42552,
            67074, 62396, 54576, 85786, 20481, 14810, 3997, 55464, 37210, 88520,
            17175, 94577, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(56585);
          }
        ),
          e.O();
      },
    ]);
})();
