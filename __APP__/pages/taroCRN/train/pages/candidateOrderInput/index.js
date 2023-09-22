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
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [48816],
      {
        82843: function (e, t, i) {
          var n = i(32180),
            o = i(298),
            r = i(79301),
            a = i(95308),
            s = i(57042),
            l = i(24460),
            d = i(81876),
            c = i(21867),
            g = i(86066),
            f = i(45023),
            u = i(52500),
            h = i(92954),
            m = i.n(h),
            p = i(43884),
            v = i(71515),
            y = i(23577),
            T = i(49528),
            b = i(87298),
            x = i(88184),
            w = i(90129),
            C = i(8271),
            Z = i.n(C),
            S = i(48813);
          function D(e, t) {
            if (e && e.length > 0 && t && t.length > 0) {
              var i = null == e ? void 0 : e.replace(/-/g, "/"),
                n = new Date(i),
                o = null == t ? void 0 : t.replace(/-/g, "/"),
                r = (new Date(o).getTime() - n.getTime()) / 1e3,
                a = Math.floor(r / 86400),
                s = Math.floor((r % 86400) / 3600),
                l = Math.floor(((r % 86400) % 3600) / 60),
                d = "",
                c = "",
                g = "";
              return (
                a > 0 && (d = a + "天"),
                s > 0 && (c = s + "小时"),
                l > 0 && (g = l + "分"),
                d + c + g
              );
            }
            return "";
          }
          function P(e) {
            return Z()(e).format("MM月DD日");
          }
          var L = u.default.memo(function (e) {
              var t,
                i = e.ticketList,
                n = void 0 === i ? [] : i,
                r = (e.isFail, (0, u.useState)(!1)),
                a = (0, w.Z)(r, 2),
                s = a[0],
                l = a[1],
                d = function (t, i) {
                  var r,
                    a =
                      (null == n ? void 0 : n.length) > 1 && !s
                        ? N.ticketWrapperV1
                        : N.ticketWrapper,
                    l =
                      (null == t ? void 0 : t.ticketPrice) > 0
                        ? ""
                            .concat(null == t ? void 0 : t.seatName, " ¥")
                            .concat(null == t ? void 0 : t.ticketPrice)
                        : null == t
                        ? void 0
                        : t.seatName;
                  return (0, S.BX)(
                    v.View,
                    {
                      style: (0, o.Z)((0, o.Z)({}, a), { marginBottom: 8 }),
                      children: [
                        (0, S.BX)(v.View, {
                          style: N.trainInfoWrapper,
                          children: [
                            (0, S.BX)(v.View, {
                              style: N.displayFlex,
                              children: [
                                (0, S.tZ)(v.Text, {
                                  style: N.time,
                                  children: null == t ? void 0 : t.departTime,
                                }),
                                (0, S.tZ)(v.Text, {
                                  style: N.station,
                                  children:
                                    null == t ? void 0 : t.departStation,
                                }),
                              ],
                            }),
                            (0, S.BX)(v.View, {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              },
                              children: [
                                (0, S.BX)(v.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: 2,
                                  },
                                  children: [
                                    (0, S.tZ)(v.Text, {
                                      style: N.trainNo,
                                      children: null == t ? void 0 : t.trainNo,
                                    }),
                                    (0, S.tZ)(v.Image, {
                                      style: N.tagImage,
                                      src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_sf@3x.webp",
                                      webp: !0,
                                    }),
                                  ],
                                }),
                                (0, S.tZ)(v.Image, {
                                  style: N.arrowImage,
                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_htlb@3x.png",
                                }),
                                (0, S.tZ)(v.Text, {
                                  style: N.trainCost,
                                  children: D(
                                    ""
                                      .concat(
                                        null == t ? void 0 : t.departDate,
                                        " "
                                      )
                                      .concat(
                                        null == t ? void 0 : t.departTime,
                                        ":00"
                                      ),
                                    ""
                                      .concat(
                                        null == t ? void 0 : t.arriveDate,
                                        " "
                                      )
                                      .concat(
                                        null == t ? void 0 : t.arriveTime,
                                        ":00"
                                      )
                                  ),
                                }),
                              ],
                            }),
                            (0, S.BX)(v.View, {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                              },
                              children: [
                                (0, S.tZ)(v.Text, {
                                  style: N.time,
                                  children: null == t ? void 0 : t.arriveTime,
                                }),
                                (0, S.tZ)(v.Text, {
                                  style: N.station,
                                  children:
                                    null == t ? void 0 : t.arriveStation,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, S.tZ)(v.View, { style: N.line }),
                        (0, S.BX)(v.View, {
                          style: { display: "flex", flexDirection: "row" },
                          children: [
                            (0, S.tZ)(v.Text, {
                              style: N.departTime,
                              children: "出发时间",
                            }),
                            (0, S.tZ)(v.Text, {
                              style: N.departTimeDetail,
                              children: P(null == t ? void 0 : t.departDate),
                            }),
                            (0, S.tZ)(v.Text, {
                              style: N.ticketSeatName,
                              children: l,
                            }),
                            (null == t ? void 0 : t.remark) &&
                              (null == t ||
                              null === (r = t.remark) ||
                              void 0 === r
                                ? void 0
                                : r.length) > 0 &&
                              (0, S.BX)(v.View, {
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                  marginLeft: "auto",
                                  alignItems: "center",
                                },
                                onClick: function () {
                                  (null == e
                                    ? void 0
                                    : e.showWaitingNumberToast) &&
                                    (null == e || e.showWaitingNumberToast());
                                },
                                children: [
                                  (0, S.tZ)(v.Text, {
                                    style: N.ticketDesc,
                                    children: null == t ? void 0 : t.remark,
                                  }),
                                  (0, S.tZ)(v.Image, {
                                    style: {
                                      width: 15,
                                      height: 15,
                                      marginLeft: 4,
                                    },
                                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/i@3x.png",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    },
                    i
                  );
                },
                c = (0, S.tZ)(v.View, {
                  id: "AMDH",
                  onClick: function () {
                    l(!0);
                  },
                  style: N.showMore,
                  children: (0, S.BX)(v.View, {
                    style: N.showMoreInner,
                    children: [
                      (0, S.tZ)(v.Text, {
                        style: N.showMoreText,
                        children: "查看全部候补车次",
                      }),
                      (0, S.tZ)(v.Image, {
                        style: (0, o.Z)(
                          {},
                          {
                            width: 12,
                            height: 12,
                            marginLeft: 4,
                            marginTop: y.Z.isCRN ? 0 : -2,
                          }
                        ),
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/jtjt@3x.png",
                      }),
                    ],
                  }),
                }),
                g =
                  (null == n ? void 0 : n.length) > 1 && !s
                    ? N.containerV1
                    : N.container;
              return (0,
              S.BX)(v.View, { style: g, children: [s ? (null == n ? void 0 : n.map(d)) : null == n || null === (t = n.slice(0, 1)) || void 0 === t ? void 0 : t.map(d), (null == n ? void 0 : n.length) > 1 && !s && c] });
            }),
            N = (0, T.lW)({
              container: {
                marginLeft: 8,
                marginRight: 8,
                position: "relative",
                backgroundColor: "#f5f5f5",
                zIndex: 1e3,
                borderRadius: 12,
              },
              containerV1: {
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 8,
                position: "relative",
                backgroundColor: "#f5f5f5",
                zIndex: 1e3,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              displayFlex: { display: "flex", flexDirection: "column" },
              tipBox: {
                height: 15,
                background: "#f5f5f5",
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 6,
                lineHeight: 15,
                paddingLeft: 6,
                paddingRight: 6,
              },
              tip: { color: "#666666", fontSize: 10 },
              ticketWrapper: {
                paddingTop: 15,
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 14,
                marginBottom: 8,
                borderRadius: 12,
                backgroundColor: "white",
                zIndex: 100,
              },
              ticketWrapperV1: {
                paddingTop: 15,
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 14,
                marginBottom: 8,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                backgroundColor: "white",
                zIndex: 100,
              },
              trainInfoWrapper: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              time: {
                marginBottom: 6,
                fontSize: 26,
                color: "#333",
                height: 26,
                lineHeight: 26,
                fontFamily: "ZX-Regular",
              },
              station: {
                fontSize: 14,
                color: "#222222",
                lineHeight: 16,
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
              },
              trainNo: { fontSize: 12, color: "#222", lineHeight: 17 },
              trainCost: { fontSize: 12, color: "#222", lineHeight: 17 },
              timeTag: {
                paddingLeft: 7,
                paddingRight: 7,
                paddingTop: 3,
                paddingBottom: 3,
                borderWidth: 1,
                borderColor: "#879fc2",
                borderRadius: 8,
                borderStyle: "solid",
              },
              timeTagText: {
                color: "#3c5a86",
                fontSize: 12,
                fontWeight: "600",
              },
              line: {
                marginTop: 12,
                marginBottom: 12,
                width: "100%",
                height: 0.3,
                backgroundColor: "#ededed",
              },
              showMore: {
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 12,
                marginTop: -8,
                backgroundColor: "#fff",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              },
              showMoreInner: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 10,
                height: 36,
              },
              showMoreText: { fontSize: 12, color: "#666", lineHeight: 17 },
              departTime: { fontSize: 13, color: "#666", lineHeight: 18 },
              departTimeDetail: {
                fontSize: 13,
                color: "#666",
                lineHeight: 18,
                marginLeft: 6,
              },
              ticketSeatName: {
                fontSize: 13,
                color: "#666",
                lineHeight: 18,
                marginLeft: 12,
              },
              ticketDesc: {
                fontSize: 13,
                color: "#198cff",
                lineHeight: 18,
                marginLeft: "auto",
              },
              arrowImage: {
                width: 55,
                height: 3,
                marginLeft: 2,
                marginRight: 5,
                marginTop: 3,
                marginBottom: 2,
              },
              tagImage: {
                width: 12,
                height: 12,
                marginLeft: 5,
                marginRight: 5,
              },
            }),
            k = i(90098),
            I = i(90582),
            R = i(58374),
            B = i(53550),
            V = i(92049),
            F = m().getSystemInfoSync(),
            W = y.Z.isCRN ? F.windowWidth : "750rpx",
            M = y.Z.isCRN ? W - 32 : "",
            z = y.Z.isCRN ? W - 32 : "100%",
            j = y.Z.isCRN ? 30 : 8,
            E = u.default.memo(function (e) {
              var t = e.predictTime,
                i = void 0 === t ? "" : t,
                n = e.addOrder,
                o = void 0 === n ? function () {} : n;
              return (0, S.BX)(v.View, {
                style: A.container,
                children: [
                  (function (e) {
                    return (0, S.BX)(v.View, {
                      style: (0, T.Jn)([
                        A.payLayer,
                        e ? { marginRight: 8 } : {},
                      ]),
                      children: [
                        !!e &&
                          e.length > 0 &&
                          (0, S.BX)(v.View, {
                            style: A.predictTimeBg,
                            children: [
                              (0, S.tZ)(v.View, {
                                style: { height: 25 },
                                children: (0, S.tZ)(v.Text, {
                                  style: A.predictTime,
                                  children: e,
                                }),
                              }),
                              (0, S.tZ)(v.Text, {
                                style: A.predictTimeDes,
                                children: "预估兑现成功时间",
                              }),
                            ],
                          }),
                        (0, S.tZ)(v.View, {
                          style: (0, T.Jn)([A.payBtn, e ? {} : { width: z }]),
                          id: "AMEd",
                          onClick: o,
                          children: (0, S.tZ)(v.Text, {
                            style: (0, T.Jn)([A.payText]),
                            children: "提交候补订单",
                          }),
                        }),
                      ],
                    });
                  })(i),
                  (0, S.tZ)(V.Z, {}),
                ],
              });
            }),
            A = (0, T.lW)({
              container: {
                flexDirection: "row",
                zIndex: 2,
                marginTop: -20,
                paddingTop: 8,
                paddingBottom: j,
                backgroundColor: "#fff",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              payLayer: {
                marginRight: 16,
                marginLeft: 16,
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
                height: 44,
                width: M,
              },
              predictTimeBg: {
                display: "flex",
                flexDirection: "column",
                marginTop: 2,
                flex: 1,
              },
              predictTime: {
                color: "#198cff",
                fontSize: 18,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                letterSpacing: 0,
                marginTop: 1,
              },
              predictTimeDes: {
                marginLeft: 1,
                color: "#999999",
                fontSize: 11,
                fontFamily: "ZX-Regular",
              },
              payBtn: {
                width: 165,
                height: 44,
                backgroundColor: "#198cff",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              },
              payText: {
                height: 22,
                width: 102,
                color: "#ffffff",
                fontSize: 17,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                letterSpacing: 0,
                lineHeight: 22,
              },
            }),
            X = i(91006),
            O = i.n(X),
            q = i(93825),
            H = (function (e) {
              (0, c.Z)(i, e);
              var t = (0, g.Z)(i);
              function i(e) {
                var n, o, r, a, l, d, c, g;
                return (
                  (0, s.Z)(this, i),
                  ((g = t.call(this, e)).state = {
                    editPassengerIndex: -1,
                    chosenPassengerList: e.chosenPassengerList,
                    showModePassenger: 0 !== e.chosenPassengerList.length,
                    wantDeletePassengerIndex: "",
                    passengers: [],
                    exchangeable:
                      (null === (n = e.page) ||
                      void 0 === n ||
                      null === (o = n.props) ||
                      void 0 === o ||
                      null === (r = o.passProps) ||
                      void 0 === r ||
                      null === (a = r.trainModel) ||
                      void 0 === a
                        ? void 0
                        : a.exchangeable) ||
                      (null == e ||
                      null === (l = e.page) ||
                      void 0 === l ||
                      null === (d = l.state) ||
                      void 0 === d ||
                      null === (c = d.trainModel) ||
                      void 0 === c
                        ? void 0
                        : c.exchangeable) ||
                      !1,
                  }),
                  (g.swipeRef = null),
                  g
                );
              }
              return (
                (0, l.Z)(i, [
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
                      return (0, S.tZ)(u.Fragment, {
                        children: this.state.showModePassenger
                          ? (0, q.WD)(this)
                          : (0, q.$4)(this),
                      });
                    },
                  },
                ]),
                i
              );
            })(u.Component);
          (0, f.Z)(H, "propTypes", {
            page: O().shape({}),
            chosenPassengerList: O().array,
            chosenPassengersAction: O().func,
            changePassengerTypeAction: O().func,
            addChildPassengerAction: O().func,
            deletePassengerAction: O().func,
          }),
            (0, f.Z)(H, "defaultProps", {
              chosenPassengerList: [],
              seatModel: {},
              chosenPassengersAction: function () {},
              changePassengerTypeAction: function () {},
              addChildPassengerAction: function () {},
              deletePassengerAction: function () {},
              TrainPassengerTypeSelect: function () {},
            });
          var J = H,
            _ = i(75786),
            Y = i(82750),
            G = i(10655);
          function U(e) {
            var t = [];
            return (
              (e || []).forEach(function (e) {
                t.push({
                  departStationName: e.departStation || "",
                  arriveStationName: e.arriveStation || "",
                  departDateTime:
                    "".concat(e.departDate, " ").concat(e.departTime, ":00") ||
                    0,
                  arriveDateTime:
                    "".concat(e.arriveDate, " ").concat(e.arriveTime, ":00") ||
                    0,
                  trainNumber: e.trainNo || "",
                  ticketSeat: e.seatName || "",
                  ticketPrice: "".concat(e.ticketPrice) || "",
                  remark: "",
                });
              }),
              t
            );
          }
          function Q(e) {
            var t = [];
            return (
              (e || []).forEach(function (e) {
                t.push({
                  departStationName: e.departStation || "",
                  arriveStationName: e.arriveStation || "",
                  departDateTime:
                    "".concat(e.departDate, " ").concat(e.departTime, ":00") ||
                    0,
                  arriveDateTime:
                    "".concat(e.arriveDate, " ").concat(e.arriveTime, ":00") ||
                    0,
                  trainNumber: e.trainNo || "",
                  seatName: e.seatName || "",
                  extInfo: "",
                });
              }),
              t
            );
          }
          function K(e) {
            var t = e.state.candidateList || [],
              i = [],
              n = [],
              o = {},
              r = [];
            return (
              (t || []).forEach(function (e, t) {
                0 == t && (o = e),
                  -1 == i.indexOf(e.trainNo) && i.push(e.trainNo),
                  -1 == n.indexOf(e.seatName) && n.push(e.seatName),
                  r.push({
                    departStation: e.departStation || "",
                    arriveStation: e.arriveStation || "",
                    departTime: e.departTime || "",
                    arriveTime: e.arriveTime || "",
                    trainNumber: e.trainNo || "",
                  });
              }),
              {
                trainNo: i.join(",") || "",
                seatName: n.join(",") || "",
                fromName: o.departStation || "",
                toName: o.arriveStation || "",
                fromCode: e.state.fromCode || "",
                toCode: e.state.toCode || "",
                fromDate: e.state.date || "",
                mainFromTime: o.departTime || "",
                mainToTime: o.arriveTime || "",
                trainStationInfos: r,
              }
            );
          }
          function $(e, t) {
            if (!e || !t) return 0;
            var i = new Date(e).getTime();
            return (new Date(t).getTime() - i) / 864e5;
          }
          function ee() {
            return te.apply(this, arguments);
          }
          function te() {
            return (te = (0, a.Z)(
              (0, r.Z)().mark(function e() {
                var t, i, n;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), (0, Y.q0)();
                      case 2:
                        return (
                          (t = e.sent),
                          (i = t.userName),
                          (n = t.password),
                          t.memberStatus12306,
                          t.mobile,
                          console.log(
                            "userName--\x3e".concat(i, " ").concat(n)
                          ),
                          (e.next = 10),
                          (0, G.K)(i)
                        );
                      case 10:
                        return (e.t0 = e.sent), (e.next = 13), (0, G.K)(n);
                      case 13:
                        return (
                          (e.t1 = e.sent),
                          e.abrupt("return", {
                            login12306Name: e.t0,
                            login12306Pas: e.t1,
                          })
                        );
                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          var ie = i(82977),
            ne = (function (e) {
              (0, c.Z)(i, e);
              var t = (0, g.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, s.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, f.Z)((0, d.Z)(n), "onChange", function (e) {
                    n.setState({
                      selectorChecked: n.state.selector[e.detail.value],
                    });
                  }),
                  (n.state = {
                    selected: e.selected,
                    endTimeList: e.endTimeList,
                  }),
                  n
                );
              }
              return (
                (0, l.Z)(i, [
                  {
                    key: "contentView",
                    value: function () {
                      var e = this,
                        t = [];
                      return (
                        this.state.endTimeList.forEach(function (e) {
                          t.push(e.title);
                        }),
                        (0, S.BX)(v.View, {
                          style: re.container,
                          children: [
                            (0, S.BX)(v.View, {
                              style: re.titleBg,
                              children: [
                                (0, S.tZ)(v.Text, {
                                  style: re.title,
                                  children: "选择截止时间",
                                }),
                                (0, S.tZ)(v.View, {
                                  style: re.closeIconBg,
                                  id: "AMDM",
                                  onClick: function () {
                                    e.props.onCancel();
                                  },
                                  children: (0, S.tZ)(v.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_tcgbss@3x.png",
                                    style: re.closeIcon,
                                  }),
                                }),
                              ],
                            }),
                            (0, S.tZ)(v.View, {
                              style: (0, T.Jn)([
                                re.btnWrapper,
                                { flexDirection: "row", alignItems: "center" },
                              ]),
                              children: (0, S.tZ)(v.View, {
                                style: (0, T.Jn)([re.button]),
                                id: "AMDN",
                                onClick: function () {
                                  e.props.done(e.state.selected);
                                },
                                children: (0, S.tZ)(v.Text, {
                                  style: (0, T.Jn)([re.buttonText]),
                                  children: "确认",
                                }),
                              }),
                            }),
                          ],
                        })
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this;
                      return !this.props.show ||
                        !this.state.endTimeList ||
                        (this.state.endTimeList &&
                          0 == this.state.endTimeList.length)
                        ? (0, S.tZ)(v.View, {})
                        : (0, S.tZ)(ie.Z, {
                            hideHeader: !1,
                            enableTapBackground: !0,
                            isShowIphoneXAdapter: !1,
                            onCancel: function () {
                              var t;
                              null === (t = e.props) ||
                                void 0 === t ||
                                t.onCancel();
                            },
                            innerContainerStyle: (0, T.Jn)([
                              re.container,
                              { paddingBottom: 56 },
                            ]),
                            children: this.contentView(),
                          });
                    },
                  },
                ]),
                i
              );
            })(u.Component);
          (0, f.Z)(ne, "propTypes", {
            onCancel: O().func,
            done: O().func,
            selected: O().object,
            endTimeList: O().array,
          }),
            (0, f.Z)(ne, "defaultProps", {
              done: function () {},
              selected: {},
              endTimeList: [],
            });
          var oe,
            re = (0, T.lW)({
              container: {
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                height: 320,
              },
              titleBg: {
                display: "flex",
                marginTop: 16,
                marginBottom: 4,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              },
              title: {
                fontSize: 20,
                fontWeight: "600",
                color: "#222",
                height: 24,
                lineHeight: 24,
              },
              closeIconBg: {
                position: "absolute",
                top: 16,
                right: 16,
                width: 16,
                height: 16,
              },
              closeIcon: { width: 16, height: 16 },
              pickerItem: {
                fontSize: 24,
                color: "#000",
                backgroundColor: "white",
                height: 175,
                marginTop: 0,
              },
              btnWrapper: {
                display: "flex",
                width: "100%",
                backgroundColor: "#fff",
                paddingTop: 8,
                paddingBottom: 28,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              button: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 44,
                borderRadius: 12,
                backgroundColor: "#198CFF",
                marginLeft: 8,
                marginRight: 8,
              },
              buttonText: { color: "#fff", fontSize: 18, fontWeight: "500" },
            }),
            ae = i(19972),
            se = i(32970),
            le = i(94205),
            de = i(42479),
            ce = i(82954),
            ge = m().getSystemInfoSync(),
            fe =
              (0, b.h)()(
                (oe = (function (e) {
                  (0, c.Z)(i, e);
                  var t = (0, g.Z)(i);
                  function i(e) {
                    var n;
                    (0, s.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, f.Z)(
                        (0, d.Z)(n),
                        "pageId",
                        y.Z.isCRN
                          ? y.Z.isTieyou
                            ? "10650086785"
                            : "10650090374"
                          : "10650086791"
                      );
                    var o = (0, h.getCurrentInstance)();
                    if (
                      (console.log("CandidateOrderInput--\x3e", o),
                      o && o.router && o.router.params)
                    )
                      if (y.Z.isCRN) {
                        var r,
                          a = JSON.parse(
                            decodeURIComponent(
                              (null === (r = o.router.params) || void 0 === r
                                ? void 0
                                : r.initData) || "{}"
                            )
                          ),
                          l = a.supportNoSeat,
                          c = void 0 !== l && l,
                          g = a.candidateList,
                          u = void 0 === g ? [] : g,
                          m = a.from,
                          p = void 0 === m ? "" : m,
                          v = a.to,
                          T = void 0 === v ? "" : v,
                          b = a.fromCode,
                          x = void 0 === b ? "" : b,
                          w = a.toCode,
                          C = void 0 === w ? "" : w,
                          Z = a.limitNum,
                          S = void 0 === Z ? 10 : Z,
                          D = a.date,
                          P = a.fromPage,
                          L = void 0 === P ? "" : P;
                        n.state = {
                          candidateList: u,
                          supportNoSeat: c,
                          preCandidateInfo: null,
                          from: p,
                          to: T,
                          limitNum: S,
                          chosenPassengerList: [],
                          originChosenPassengerList: [],
                          selectedEndTime: {},
                          showEndTimeDailog: !1,
                          endTimeList: [],
                          orderPassengerMaxCount: 9,
                          adultWithChildrenCount: 4,
                          fromCode: x,
                          toCode: C,
                          date: D,
                          chosenFreeChildPassengers: [],
                          showWaitingNumberToast: !1,
                          fromPage: L,
                        };
                      } else {
                        var N = o.router.params || {},
                          k = N.supportNoSeat,
                          I = void 0 !== k && k,
                          R = N.candidateList,
                          B = void 0 === R ? [] : R,
                          V = N.from,
                          F = void 0 === V ? "" : V,
                          W = N.to,
                          M = void 0 === W ? "" : W,
                          z = N.limitNum,
                          j = void 0 === z ? 10 : z,
                          E = N.fromCode,
                          A = void 0 === E ? "" : E,
                          X = N.toCode,
                          O = void 0 === X ? "" : X,
                          q = N.date,
                          H = N.fromPage,
                          J = void 0 === H ? "" : H;
                        n.state = {
                          candidateList: B,
                          supportNoSeat: I,
                          preCandidateInfo: null,
                          from: F,
                          to: M,
                          limitNum: j,
                          chosenPassengerList: [],
                          originChosenPassengerList: [],
                          selectedEndTime: {},
                          showEndTimeDailog: !1,
                          endTimeList: [],
                          orderPassengerMaxCount: 9,
                          adultWithChildrenCount: 4,
                          fromCode: A,
                          toCode: O,
                          date: q,
                          chosenFreeChildPassengers: [],
                          showWaitingNumberToast: !1,
                          fromPage: J,
                        };
                      }
                    return n;
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "configWechatMinData",
                        value: function (e) {
                          var t = this;
                          if (y.Z.isCRN) e && e(this.state.candidateList);
                          else {
                            var i = (0, h.getCurrentInstance)(),
                              n = i.router.params || {},
                              o = n.supportNoSeat,
                              r = void 0 !== o && o,
                              a = n.candidateList,
                              s = void 0 === a ? [] : a,
                              l = n.from,
                              d = void 0 === l ? "" : l,
                              c = n.to,
                              g = void 0 === c ? "" : c,
                              f = n.limitNum,
                              u = void 0 === f ? 10 : f,
                              m = n.fromCode,
                              p = void 0 === m ? "" : m,
                              v = n.toCode,
                              T = void 0 === v ? "" : v,
                              b = n.date;
                            console.log(
                              "configWechatMinData--\x3e",
                              JSON.stringify(i.router.params)
                            ),
                              this.setState(
                                {
                                  candidateList: s,
                                  supportNoSeat: r,
                                  preCandidateInfo: null,
                                  from: d,
                                  to: g,
                                  limitNum: u,
                                  chosenPassengerList: [],
                                  originChosenPassengerList: [],
                                  selectedEndTime: {},
                                  showEndTimeDailog: !1,
                                  endTimeList: [],
                                  orderPassengerMaxCount: 9,
                                  adultWithChildrenCount: 4,
                                  fromCode: p,
                                  toCode: T,
                                  date: b,
                                  chosenFreeChildPassengers: [],
                                },
                                function () {
                                  console.log(
                                    "configWechatMinData-this.state->",
                                    JSON.stringify(t.state)
                                  ),
                                    e && e(s);
                                }
                              );
                          }
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          y.Z.isCRN &&
                            _.Z.removeEventListener(
                              "event.train.passengers.selected"
                            );
                        },
                      },
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this;
                          this.ubtTrace("TZAGrabAlternateBook_exposure", {
                            pageid: this.pageId,
                          }),
                            this.configWechatMinData(function (t) {
                              e.init(t);
                            });
                        },
                      },
                      {
                        key: "init",
                        value: function (e) {
                          var t = this,
                            i = (function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : [],
                                t = [],
                                i = {
                                  title: "发车前2小时",
                                  date: 120,
                                  dateStr: "",
                                };
                              try {
                                var n = "",
                                  o = "";
                                if (e && 1 == e.length) {
                                  var r = e[0];
                                  (n = r.departDate), (o = r.departTime);
                                } else if (
                                  (e.sort(function (e, t) {
                                    var i = ""
                                        .concat(
                                          null == e ? void 0 : e.departDate,
                                          " "
                                        )
                                        .concat(
                                          null == e ? void 0 : e.departTime,
                                          ":00"
                                        ),
                                      n = ""
                                        .concat(
                                          null == t ? void 0 : t.departDate,
                                          " "
                                        )
                                        .concat(
                                          null == t ? void 0 : t.departTime,
                                          ":00"
                                        ),
                                      o =
                                        null == i
                                          ? void 0
                                          : i.replace(/-/g, "/"),
                                      r = new Date(o),
                                      a =
                                        null == n
                                          ? void 0
                                          : n.replace(/-/g, "/"),
                                      s = new Date(a);
                                    return r.getTime() - s.getTime();
                                  }),
                                  e && e.length > 0)
                                ) {
                                  var a = e[0];
                                  (n = a.departDate), (o = a.departTime);
                                }
                                var s = Z()().format("YYYY-MM-DD"),
                                  l = $(s, n),
                                  d = "YYYY-MM-DD HH:mm:ss",
                                  c = Z()("".concat(n, " ").concat(o, ":00"));
                                if (
                                  ((i = {
                                    title: "发车前2小时",
                                    date: 120,
                                    dateStr: c.add(-2, "hour").format(d),
                                  }),
                                  24 * l >= 6 &&
                                    (i = {
                                      title: "发车前3小时",
                                      date: 180,
                                      dateStr: c.add(-3, "hour").format(d),
                                    }),
                                  l > 0)
                                )
                                  for (var g = 0; g <= l - 1; g++)
                                    if (g == l - 1)
                                      t.unshift({
                                        title: "发车前12小时",
                                        date: 720,
                                        dateStr: c.add(-12, "hour").format(d),
                                      }),
                                        t.unshift({
                                          title: "发车前6小时",
                                          date: 360,
                                          dateStr: c.add(-6, "hour").format(d),
                                        }),
                                        t.unshift({
                                          title: "发车前3小时",
                                          date: 180,
                                          dateStr: c.add(-3, "hour").format(d),
                                        }),
                                        t.unshift({
                                          title: "发车前2小时",
                                          date: 120,
                                          dateStr: c.add(-2, "hour").format(d),
                                        });
                                    else {
                                      var f = g + 1;
                                      t.push({
                                        title: "发车前".concat(f, "天"),
                                        date: 24 * f * 60,
                                        dateStr: c.add(0 - f, "hour").format(d),
                                      });
                                    }
                                else
                                  t.unshift({
                                    title: "发车前3小时",
                                    date: 180,
                                    dateStr: c.add(-3, "day").format(d),
                                  }),
                                    t.unshift({
                                      title: "发车前2小时",
                                      date: 120,
                                      dateStr: c.add(-2, "day").format(d),
                                    });
                                return { endList: t, defaultDate: i };
                              } catch (e) {
                                return (
                                  console.log(e), { endList: t, defaultDate: i }
                                );
                              }
                            })(e || this.state.candidateList),
                            n = i.endList,
                            o = i.defaultDate;
                          this.setState({
                            selectedEndTime: o,
                            endTimeList: n || [],
                          }),
                            this.getPreCandidateInfo(
                              null == o ? void 0 : o.dateStr
                            ),
                            y.Z.isCRN &&
                              _.Z.addEventListener(
                                "event.train.passengers.selected",
                                function (e) {
                                  var i = setTimeout(function () {
                                    console.log(
                                      "event.train.passengers.selected--data--\x3e",
                                      e
                                    );
                                    var n = e.passengers || [],
                                      o = e.freeChildren || [],
                                      r = (0, q.Qp)(n),
                                      a = (0, q.Qp)(o || []);
                                    console.log(
                                      "event.train.passengers.selected-selectedPassengers->",
                                      JSON.stringify(n)
                                    ),
                                      console.log(
                                        "event.train.passengers.selected-freeChildrenList->",
                                        JSON.stringify(a)
                                      );
                                    for (
                                      var s = 0;
                                      s < (null == r ? void 0 : r.length);
                                      s++
                                    ) {
                                      var l,
                                        d,
                                        c = r[s];
                                      if (
                                        (null == c ||
                                        null === (l = c.name) ||
                                        void 0 === l
                                          ? void 0
                                          : l.indexOf(".")) > -1 ||
                                        (null == c ||
                                        null === (d = c.passengerName) ||
                                        void 0 === d
                                          ? void 0
                                          : d.indexOf(".")) > -1
                                      )
                                        return void (0, I.v)(
                                          "温馨提示",
                                          '乘客姓名中含有无效字符"."，请改成"·"'
                                        );
                                    }
                                    t.setState({
                                      chosenPassengerList: r,
                                      originChosenPassengerList: n,
                                      chosenFreeChildPassengers: a,
                                    }),
                                      clearTimeout(i);
                                  }, 300);
                                }
                              );
                        },
                      },
                      {
                        key: "getPreCandidateInfo",
                        value: function (e) {
                          var t = this;
                          (0, R.kc)({
                            candidateEndDateTime: e,
                            fromPage: 2,
                            candidatePlanInfo: Q(this.state.candidateList),
                          }).then(function (e) {
                            console.log(
                              "getPreCandidateInfoPromise--\x3e",
                              JSON.stringify(e)
                            ),
                              e &&
                                1 === e.resultCode &&
                                t.setState({
                                  preCandidateInfo: {
                                    settingPageDetail:
                                      e.settingPageDetail || null,
                                    predictTime: e.predictTime || "",
                                    orderPassengerMaxCount:
                                      e.orderPassengerMaxCount || 9,
                                    adultWithChildrenCount:
                                      e.orderPassengerMaxCount || 4,
                                  },
                                });
                          });
                        },
                      },
                      { key: "pop", value: function () {} },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "addOrder",
                        value: (function () {
                          var e = (0, a.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, i, n, o, a;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (0, ae.Q)(), (e.next = 3), ee();
                                      case 3:
                                        return (
                                          (i = e.sent),
                                          (e.next = 6),
                                          (0, le.R_)()
                                        );
                                      case 6:
                                        (n = e.sent),
                                          console.log(
                                            "123account---\x3e",
                                            JSON.stringify(i)
                                          ),
                                          console.log(
                                            "getUserInfo---\x3e",
                                            JSON.stringify(n)
                                          ),
                                          (o =
                                            n && n.userName ? n.userName : ""),
                                          y.Z.isCRN &&
                                            (o =
                                              n && n.bindedMobilePhone
                                                ? n.bindedMobilePhone
                                                : ""),
                                          (a = {
                                            userName:
                                              null == i
                                                ? void 0
                                                : i.login12306Name,
                                            password:
                                              null == i
                                                ? void 0
                                                : i.login12306Pas,
                                            mobile: o,
                                            contactMobile: o,
                                            trainInfo: K(this),
                                            alternateInfoList: U(
                                              this.state.candidateList
                                            ),
                                            passengerList: (0, q.N$)(this),
                                            bookAlternate: 1,
                                            alternateLimitTime:
                                              (null ===
                                                (t =
                                                  this.state.selectedEndTime) ||
                                              void 0 === t
                                                ? void 0
                                                : t.date) || "",
                                            freePassengerList: (0, q.wU)(this),
                                            businessTag:
                                              this.state.fromPage || "",
                                          }),
                                          console.log(
                                            "createGrabOrderPromise-params->",
                                            JSON.stringify(a)
                                          ),
                                          (0, R.Xr)(a)
                                            .then(function (e) {
                                              (0, ae.Z)(),
                                                console.log(
                                                  "createGrabOrderPromise-res->",
                                                  JSON.stringify(e)
                                                ),
                                                1 === e.resultCode
                                                  ? (0, se.d6)(e.orderNumber)
                                                  : (0, I.v)(
                                                      "",
                                                      (null == e
                                                        ? void 0
                                                        : e.resultMessage) ||
                                                        "网络异常，请稍候再试"
                                                    );
                                            })
                                            .catch(function (e) {
                                              console.log(
                                                "createGrabOrderPromise-err->",
                                                JSON.stringify(e)
                                              ),
                                                (0, ae.Z)(),
                                                (0, I.v)(
                                                  "",
                                                  (null == e
                                                    ? void 0
                                                    : e.message) ||
                                                    "网络异常，请稍候再试"
                                                );
                                            });
                                      case 14:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "_renderEndTime",
                        value: function () {
                          var e,
                            t,
                            i = this;
                          if (y.Z.isCRN)
                            return (0, S.BX)(v.View, {
                              style: ue.endTimeBg,
                              id: "AMEn",
                              onClick: function () {
                                i.setState({ showEndTimeDialog: !0 });
                              },
                              children: [
                                (0, S.tZ)(v.View, {
                                  style: {
                                    marginRight: 16,
                                    marginLeft: 16,
                                    flexDirection: "row",
                                    display: "flex",
                                  },
                                  children: (0, S.tZ)(v.Text, {
                                    style: ue.titleDes,
                                    children: "截止时间",
                                  }),
                                }),
                                (0, S.tZ)(v.View, {
                                  style: ue.titleDesBg,
                                  children: (0, S.tZ)(v.Text, {
                                    style: ue.titleNumDes,
                                    children:
                                      (null ===
                                        (t = this.state.selectedEndTime) ||
                                      void 0 === t
                                        ? void 0
                                        : t.title) || "",
                                  }),
                                }),
                                (0, S.tZ)(v.View, {
                                  style: [ue.rightArrow, { right: 6 }],
                                  children: (0, q.R8)({
                                    style: {
                                      width: 12,
                                      height: 12,
                                      marginLeft: -16,
                                      marginTop: 0.5,
                                    },
                                  }),
                                }),
                              ],
                            });
                          var n = [];
                          return (
                            this.state.endTimeList.forEach(function (e) {
                              n.push(e.title);
                            }),
                            (0, S.BX)(v.View, {
                              style: ue.endTimeBg,
                              id: "AMEo",
                              onClick: function () {},
                              children: [
                                (0, S.tZ)(v.View, {
                                  style: {
                                    marginRight: 16,
                                    marginLeft: 16,
                                    flexDirection: "row",
                                    display: "flex",
                                  },
                                  children: (0, S.tZ)(v.Text, {
                                    style: ue.titleDes,
                                    children: "截止时间",
                                  }),
                                }),
                                (0, S.BX)(v.Picker, {
                                  mode: "selector",
                                  range: n,
                                  onChange: function (e) {
                                    var t = (i.state.endTimeList || []).filter(
                                        function (t) {
                                          return t.title === n[e.detail.value];
                                        }
                                      ),
                                      o = t && t.length > 0 ? t[0] : {};
                                    i.setState({ selectedEndTime: o }),
                                      i.getPreCandidateInfo(
                                        null == o ? void 0 : o.dateStr
                                      );
                                  },
                                  children: [
                                    (0, S.tZ)(v.View, {
                                      style: ue.titleDesBg,
                                      children: (0, S.tZ)(v.Text, {
                                        style: ue.titleNumDes,
                                        children:
                                          (null ===
                                            (e = this.state.selectedEndTime) ||
                                          void 0 === e
                                            ? void 0
                                            : e.title) || "",
                                      }),
                                    }),
                                    (0, S.tZ)(v.View, {
                                      style: ue.rightArrow,
                                      children: (0, q.R8)({
                                        style: {
                                          width: 12,
                                          height: 12,
                                          marginLeft: 0,
                                          marginTop: 0.5,
                                        },
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            })
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.candidateList,
                            n = void 0 === i ? [] : i,
                            r = (t.supportNoSeat, t.preCandidateInfo),
                            a = t.from,
                            s = t.to,
                            l = t.limitNum,
                            d = r || {},
                            c = (d.endTimeList, d.settingPageDetail),
                            g =
                              void 0 === c
                                ? { title: "", descriptionList: [] }
                                : c,
                            f = d.predictTime,
                            u = void 0 === f ? "" : f,
                            m = {
                              title: "排队位次说明",
                              content:
                                "排队位次是根据用户当天候补订单，对应的同候补方案的智行用户排队位次，及智行在铁路市场占比分析得出。会随着位次较前用户的出票和退单情况发生数据变动",
                              tips: "*温馨提示：受高峰出行、网络状况等不可控因素影响，当前展示的排队数值非百分百准确，仅供参考",
                            };
                          return (0, S.BX)(v.View, {
                            className: "page",
                            style: ue.container,
                            children: [
                              (0, S.tZ)(x.Z, {
                                page: this,
                                title: "订单填写",
                                titleColor: "#222",
                                needHolder: !0,
                                v2: !0,
                                titleFontSize: 17,
                                propStyle: {
                                  icon: "color: black;height: 44px",
                                  box: "background: ".concat(
                                    y.Z.isTieyou ? "#ACB6E6" : "#B3D2FF",
                                    ";color: #222222;height: 44px"
                                  ),
                                  title: "font-weight:500",
                                },
                                backgroundColor: "transparent",
                                renderLeftView: function () {
                                  return (0, S.tZ)(v.View, {
                                    id: "AMEp",
                                    onClick: function () {
                                      (0, h.navigateBack)({ delta: 1 });
                                    },
                                    children: (0, S.tZ)(v.View, {
                                      style: {
                                        height: 44,
                                        width: 44,
                                        marginLeft: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                      },
                                      children: (0, S.tZ)(B.Z, {
                                        style: {
                                          fontSize: 24,
                                          alignSelf: "center",
                                          color: "#222",
                                          marginLeft: 5,
                                        },
                                        children: "󰲚",
                                      }),
                                    }),
                                  });
                                },
                              }),
                              (0, S.tZ)(p.Z, {
                                start: { x: 0, y: 0 },
                                end: { x: 0, y: 1 },
                                colors: y.Z.isTieyou
                                  ? ["#ACB6E6", "#F5F5F5"]
                                  : ["#B3D2FF", "#F5F5F5"],
                                locations: [0, 1],
                                style: ue.bg,
                              }),
                              (0, S.BX)(v.ScrollView, {
                                style: ue.scrollView,
                                scrollY: !0,
                                children: [
                                  (0, S.BX)(v.View, {
                                    style: ue.titleContainer,
                                    children: [
                                      (0, S.tZ)(v.Image, {
                                        style: ue.trainIcon,
                                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/pic_123@3x.png",
                                      }),
                                      (0, S.BX)(v.View, {
                                        style: ue.titleBg,
                                        children: [
                                          (0, S.tZ)(v.Text, {
                                            style: ue.title,
                                            children: a,
                                          }),
                                          (0, S.tZ)(v.Image, {
                                            style: ue.arrowImage,
                                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_djt@3x.png",
                                          }),
                                          (0, S.tZ)(v.Text, {
                                            style: ue.title,
                                            children: s,
                                          }),
                                        ],
                                      }),
                                      (0, S.tZ)(v.View, {
                                        style: ue.titleDesBg,
                                        children: (0, S.tZ)(v.Text, {
                                          style: ue.titleDes,
                                          children: "最多可添加"
                                            .concat(l, "个候补需求(已选")
                                            .concat(
                                              null == n ? void 0 : n.length,
                                              "/"
                                            )
                                            .concat(l, ")"),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, S.tZ)(L, {
                                    ticketList: n,
                                    showWaitingNumberToast: function () {
                                      e.setState({
                                        showWaitingNumberToast: !0,
                                      });
                                    },
                                  }),
                                  (0, S.tZ)(J, {
                                    page: this,
                                    style: {
                                      marginLeft: 8,
                                      marginRight: 8,
                                      borderRadius: 12,
                                      marginBottom: 8,
                                      marginTop: y.Z.isCRN ? 0 : 8,
                                    },
                                    chosenPassengerList: (
                                      this.state.chosenPassengerList || []
                                    ).concat(
                                      this.state.chosenFreeChildPassengers || []
                                    ),
                                    isResign: !1,
                                    chosenPassengersAction: function () {
                                      (0, q.GI)(e);
                                    },
                                    TrainPassengerTypeSelect: function (
                                      e,
                                      t
                                    ) {},
                                    addChildPassengerAction: function () {
                                      (0, q.sh)(e);
                                    },
                                    deletePassengerAction: function (t, i) {
                                      (0, q.B8)(e, t, i);
                                    },
                                  }),
                                  this._renderEndTime(),
                                  !!g &&
                                    (0, S.BX)(v.View, {
                                      style: ue.settingPageDetail,
                                      children: [
                                        (0, S.tZ)(v.View, {
                                          style: ue.settingPageDetailTitleBg,
                                          children: (0, S.tZ)(v.Text, {
                                            style: ue.settingPageDetailTitle,
                                            children:
                                              null == g ? void 0 : g.title,
                                          }),
                                        }),
                                        (null == g
                                          ? void 0
                                          : g.descriptionList) &&
                                          (null == g
                                            ? void 0
                                            : g.descriptionList.length) > 0 &&
                                          (null == g
                                            ? void 0
                                            : g.descriptionList.map(function (
                                                e,
                                                t
                                              ) {
                                                return 0 == t
                                                  ? (0, S.BX)(v.View, {
                                                      style: {
                                                        flexDirection: "row",
                                                        display: "flex",
                                                        marginTop: 6,
                                                      },
                                                      children: [
                                                        (0, S.tZ)(v.View, {
                                                          style: (0, o.Z)(
                                                            (0, o.Z)(
                                                              {},
                                                              ue.point
                                                            ),
                                                            {
                                                              flex: y.Z.isCRN
                                                                ? ""
                                                                : "none",
                                                            }
                                                          ),
                                                        }),
                                                        (0, S.tZ)(v.Text, {
                                                          style:
                                                            ue.descriptionListItemv1,
                                                          children:
                                                            e ||
                                                            "兑现成功车票视为已购车票，退改签按照",
                                                        }),
                                                        (0, de.Y)({
                                                          color: "#198CFF",
                                                          fontSize: 12,
                                                          height: 16,
                                                        }),
                                                        (0, S.tZ)(v.Text, {
                                                          style:
                                                            ue.descriptionListItem,
                                                          children: "办理",
                                                        }),
                                                      ],
                                                    })
                                                  : (0, S.BX)(v.View, {
                                                      style: {
                                                        flexDirection: "row",
                                                        display: "flex",
                                                        marginTop: 5,
                                                      },
                                                      children: [
                                                        (0, S.tZ)(v.View, {
                                                          style: (0, o.Z)(
                                                            (0, o.Z)(
                                                              {},
                                                              ue.point
                                                            ),
                                                            {
                                                              flex: y.Z.isCRN
                                                                ? ""
                                                                : "none",
                                                            }
                                                          ),
                                                        }),
                                                        (0, S.tZ)(v.Text, {
                                                          style:
                                                            ue.descriptionListItem,
                                                          children: e,
                                                        }),
                                                      ],
                                                    });
                                              })),
                                      ],
                                    }),
                                  (0, S.tZ)(v.View, { style: ue.blank }),
                                ],
                              }),
                              (0, S.tZ)(E, {
                                predictTime: u,
                                addOrder: function () {
                                  e.ubtTrace(
                                    "TZAGrabAlternateBook_SubmitOrd_click",
                                    { pageid: e.pageId }
                                  ),
                                    e.addOrder();
                                },
                              }),
                              !!this.state.showEndTimeDialog &&
                                (0, S.tZ)(ne, {
                                  endTimeList: this.state.endTimeList,
                                  done: function (t) {
                                    e.setState({
                                      selectedEndTime: t,
                                      showEndTimeDialog: !1,
                                    }),
                                      e.getPreCandidateInfo(
                                        null == t ? void 0 : t.dateStr
                                      );
                                  },
                                  show: this.state.showEndTimeDialog,
                                  selected: this.state.selectedEndTime,
                                  onCancel: function () {
                                    e.setState({ showEndTimeDialog: !1 });
                                  },
                                }),
                              (0, S.tZ)(ce.h, {
                                isShow:
                                  this.state.showWaitingNumberToast &&
                                  !(null == m || !m.title),
                                cancel: function () {
                                  e.setState({ showWaitingNumberToast: !1 });
                                },
                                title: null == m ? void 0 : m.title,
                                subTitle:
                                  '\n          <div style="margin-left:20px;margin-right:20px;text-align:left;">\n          <span style="color: #666666;font-size:14px;line-height:20px;text-align:left;font-family:PingFangSC-Regular;font-weight:400">'
                                    .concat(
                                      null == m ? void 0 : m.content,
                                      '</span>\n          <div style = "margin-top:16px;">\n          <span style="color: #999999;font-size:13px;line-height: 20px;text-align:left;font-family:PingFangSC-Regular;font-weight:500">'
                                    )
                                    .concat(
                                      null == m ? void 0 : m.tips,
                                      "</span>\n          </div>\n          </div>\n          "
                                    ),
                                buttons: [
                                  {
                                    text: "我知道了",
                                    onClick: function () {
                                      e.setState({
                                        showWaitingNumberToast: !1,
                                      });
                                    },
                                    color: "#fff",
                                    bgColor: "#198cff",
                                  },
                                ],
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(u.Component))
              ) || oe,
            ue = (0, T.lW)({
              container: {
                display: "flex",
                flex: 1,
                backgroundColor: "#f5f5f5",
                flexDirection: "column",
              },
              scrollView: { flex: 1, height: 0 },
              blank: { height: 28 },
              bg: {
                position: "absolute",
                top: 0,
                left: 0,
                width: y.Z.isCRN ? ge.windowWidth : "100%",
                height: 240,
                marginTop: y.Z.isCRN
                  ? 0
                  : "".concat(44 + (k.Z.statusBarHeight || 0), "px"),
              },
              rightArrow: {
                position: "absolute",
                top: 0,
                right: 16,
                width: 12,
                height: 12,
                marginTop: 16,
              },
              trainIcon: {
                display: "flex",
                width: 100,
                height: 80,
                position: "absolute",
                right: 0,
                bottom: 0,
              },
              titleContainer: {
                position: "relative",
                flexDirection: "column",
                justifyContent: "flex-start",
                marginLeft: 24,
                height: 80,
              },
              titleBg: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 5,
                paddingTop: 13,
              },
              title: {
                color: "#222222",
                fontSize: 22,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
              },
              arrowImage: {
                width: 11,
                height: 5,
                marginLeft: 5,
                marginRight: 5,
              },
              titleDesBg: { display: "flex", flexDirection: "row" },
              titleDes: {
                color: "#6a7078",
                fontSize: 16,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 20,
              },
              titleNumDes: {
                display: "flex",
                color: "#222222",
                fontSize: 16,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 20,
              },
              settingPageDetail: {
                display: "flex",
                backgroundColor: "#f5f5f5",
                flexDirection: "column",
                marginLeft: 16,
                marginRight: 16,
                marginTop: 16,
              },
              settingPageDetailTitleBg: {
                display: "flex",
                flexDirection: "row",
                marginTop: 6,
              },
              settingPageDetailTitle: {
                height: 16,
                color: "#999999",
                fontSize: 12,
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
                letterSpacing: 0,
                lineHeight: 16,
              },
              point: {
                width: 4,
                height: 4,
                backgroundColor: "#cccccc",
                borderRadius: 2,
                marginRight: 5,
                marginTop: 5,
              },
              descriptionListItem: {
                marginRight: 16,
                color: "#999999",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 16,
              },
              descriptionListItemv1: {
                color: "#999999",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 16,
              },
              endTimeBg: {
                position: "relative",
                display: "flex",
                backgroundColor: "white",
                flexDirection: "row",
                marginBottom: 12,
                marginLeft: 8,
                marginRight: 8,
                borderRadius: 10,
                height: 50,
                overflow: "hidden",
                alignItems: "center",
              },
            }),
            he = fe;
          Page(
            (0, n.createPageConfig)(
              he,
              "pages/taroCRN/train/pages/candidateOrderInput/index",
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
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 71229, 10313, 20858, 19772, 87032, 82524, 43278,
            42552, 67074, 62396, 54576, 85786, 20481, 14810, 3997, 55464, 19559,
            11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(82843);
          }
        ),
          e.O();
      },
    ]);
})();
