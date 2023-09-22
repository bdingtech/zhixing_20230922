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
      [61096],
      {
        10061: function (e, t, i) {
          var n = i(32180),
            r = i(298),
            o = i(79301),
            a = i(95308),
            l = i(57042),
            c = i(24460),
            s = i(81876),
            d = i(21867),
            u = i(86066),
            f = i(45023),
            g = i(52500),
            p = i(92954),
            h = i.n(p),
            m = i(71515),
            y = i(43884),
            b = i(23577),
            w = i(49528),
            x = i(87298),
            v = i(88184),
            Z = i(90129),
            T = i(94924),
            C = i(8271),
            S = i.n(C),
            B = function (e, t) {
              var i = S()(e).valueOf() - S()().valueOf();
              return "ms" === t
                ? {
                    value: i,
                    minutes: Math.floor(i / 6e4),
                    seconds: Math.floor((i % 6e4) / 1e3),
                  }
                : {
                    value: i,
                    hours: Math.floor(i / 36e5),
                    minutes: Math.floor((i % 36e5) / 6e4),
                    seconds: Math.floor((i % 6e4) / 1e3),
                  };
            },
            D = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "hms",
                i = (0, g.useState)(function () {
                  return e ? B(e, t) : void 0;
                }),
                n = (0, Z.Z)(i, 2),
                r = n[0],
                o = n[1];
              return (
                (0, g.useEffect)(
                  function () {
                    var i = setInterval(function () {
                      var n = B(e, t);
                      n.value < 0
                        ? (i && clearInterval(i),
                          o({
                            value: n.value,
                            hours: 0,
                            minutes: 0,
                            seconds: 0,
                          }))
                        : o(n);
                    }, 1e3);
                    return function () {
                      i && clearInterval(i);
                    };
                  },
                  [e]
                ),
                r
              );
            },
            k = i(48813),
            I = function (e) {
              var t = e.endTime,
                i = e.onTimeEnd,
                n = void 0 === i ? function () {} : i,
                r = D(t, "ms");
              return (
                null != r &&
                  r.value &&
                  r.value < 0 &&
                  setTimeout(function () {
                    n();
                  }, 0),
                (0, k.tZ)(m.View, {
                  children:
                    t &&
                    (0, k.BX)(m.View, {
                      style: _.box,
                      children: [
                        (0, k.tZ)(m.Text, { style: _.rest, children: "剩余" }),
                        (0, k.tZ)(m.Text, {
                          style: _.time,
                          children: r
                            ? "".concat(r.minutes, "分").concat(r.seconds, "秒")
                            : "",
                        }),
                      ],
                    }),
                })
              );
            },
            _ = (0, w.lW)({
              box: { display: "flex", flexDirection: "row" },
              rest: { color: "#0b1323", fontSize: 16 },
              time: { color: "#1A8CFF", fontSize: 16 },
            }),
            N = function (e) {
              return [0, 1, 2, 3, 5].includes(e)
                ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/waite@3x.png"
                : [-1, 4, 6].includes(e)
                ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_cw@3x.png"
                : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/waite@3x.png";
            },
            R = g.default.memo(function (e) {
              var t,
                i = ((null == e ? void 0 : e.data) || {}).successFlag,
                n = void 0 === i ? 2 : i,
                o = e.code,
                a = e.timeLeft,
                l = e.onTimeEnd,
                c = void 0 === l ? function () {} : l,
                s = (0, g.useState)(!1),
                d = (0, Z.Z)(s, 2),
                u = d[0],
                f = (d[1], (0, g.useState)(!1)),
                p = (0, Z.Z)(f, 2),
                h = p[0],
                b = p[1],
                w =
                  1 === n
                    ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/zsb@3x.png"
                    : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/zax@3x.png",
                x = u
                  ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/zdz@3x.png"
                  : 1 === n
                  ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/zdsb@3x.png"
                  : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/dxcg@3x.png",
                v = u
                  ? ["#F0F6FC", "#F7F9FC"]
                  : 1 === n
                  ? ["#FCF0F0", "#FCF7F7"]
                  : ["#F0FCF7", "#F7FCFA"],
                C = u ? "#198cff" : 1 === n ? "#ff5959" : "#03b86f";
              return (
                (0, g.useEffect)(function () {
                  b(!0);
                }, []),
                null != e && e.candidateStatusDesc
                  ? (0, k.BX)(m.View, {
                      style: z.container,
                      children: [
                        (0, k.BX)(m.View, {
                          style: z.status,
                          children: [
                            (0, k.tZ)(m.Image, { src: N(o), style: z.icon }),
                            (0, k.tZ)(m.Text, {
                              style: z.title,
                              id: "AMEx",
                              onClick: c,
                              children:
                                null == e ? void 0 : e.candidateStatusDesc,
                            }),
                            1 === o &&
                              (0, k.tZ)(I, { endTime: a, onTimeEnd: c }),
                          ],
                        }),
                        ![-1, 1].includes(o) &&
                          !(null == e || !e.subTitle) &&
                          (0, k.tZ)(m.View, {
                            style: z.subTitle,
                            children: null == e ? void 0 : e.subTitle,
                          }),
                        ([-1, 1].includes(o) || !(null != e && e.subTitle)) &&
                          (0, k.tZ)(m.View, { style: z.subTitleBlank }),
                        (null == e ? void 0 : e.data) &&
                          1 !== n &&
                          (0, k.BX)(y.Z, {
                            start: { x: 0, y: 0 },
                            end: { x: 1, y: 0 },
                            miniDirection: "X",
                            colors: v,
                            locations: [0, 1],
                            style: (0, r.Z)(
                              (0, r.Z)({}, z.wrapper),
                              h ? { marginBottom: -12 } : {}
                            ),
                            children: [
                              u &&
                                (0, k.tZ)(m.Image, {
                                  className: "round",
                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/round@3x.png",
                                }),
                              u &&
                                (0, k.BX)(m.View, {
                                  style: { marginRight: 5 },
                                  children: [
                                    (0, k.tZ)(m.Image, {
                                      style: {
                                        width: 16,
                                        height: 16,
                                        position: "absolute",
                                      },
                                      src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/loading_1.png",
                                    }),
                                    (0, k.tZ)(m.View, {
                                      style: z.flexCenter,
                                      children: (0, k.tZ)(m.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/loading_2.png",
                                        className: "loading",
                                        style: { width: 16, height: 16 },
                                      }),
                                    }),
                                  ],
                                }),
                              !u &&
                                (0, k.tZ)(m.Image, { src: w, style: z.icon2 }),
                              (0, k.tZ)(m.Image, {
                                src: x,
                                style: {
                                  width: 53,
                                  height: 52,
                                  position: "absolute",
                                  right: 0,
                                  top: 0,
                                },
                              }),
                              (0, k.tZ)(T.Z, {
                                style: (0, r.Z)((0, r.Z)({}, z.richText), {
                                  color: C,
                                }),
                                children: u
                                  ? "智行为你持续预测中，请稍等…"
                                  : null == e ||
                                    null === (t = e.data) ||
                                    void 0 === t
                                  ? void 0
                                  : t.successDesc,
                              }),
                            ],
                          }),
                      ],
                    })
                  : (0, k.tZ)(k.HY, {})
              );
            }),
            z = (0, w.lW)({
              container: { marginTop: 13 },
              icon: { width: 26, height: 26, marginRight: 4 },
              icon2: { width: 16, height: 16, marginRight: 5 },
              status: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 19,
                marginRight: 16,
              },
              title: {
                flex: 1,
                fontSize: 22,
                color: "#222",
                fontWeight: "500",
                lineHeight: 28,
              },
              subTitle: {
                marginLeft: 18,
                marginBottom: 12,
                marginTop: 6,
                color: "#6a7078",
                fontSize: 14,
              },
              subTitleBlank: { height: 17 },
              wrapper: {
                flex: 1,
                display: "flex",
                position: "relative",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 8,
                marginRight: 8,
                marginBottom: -52,
                paddingTop: 10,
                paddingLeft: 17,
                paddingBottom: 22,
                transition: "all ease .5s",
                overflow: "hidden",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
              flexCenter: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              richText: { fontSize: 14, lineHeight: 20 },
            });
          function F(e, t) {
            var i = e.split(":"),
              n = parseInt(String(60 * i[0])) + parseInt(i[1]),
              r = t.split(":"),
              o = parseInt(String(60 * r[0])) + parseInt(r[1]) - n;
            return (
              (Math.floor(o / 60) > 0 ? Math.floor(o / 60) + "时" : "") +
              (o % 60 > 0 ? (o % 60) + "分" : "")
            );
          }
          var L,
            V = g.default.memo(function (e) {
              var t,
                i = e.ticketList,
                n = void 0 === i ? [] : i,
                o = e.isFail,
                a = void 0 !== o && o,
                l = (0, g.useState)(!1),
                c = (0, Z.Z)(l, 2),
                s = c[0],
                d = c[1],
                u = function (e, t) {
                  return (0, k.BX)(
                    m.View,
                    {
                      style: (0, r.Z)((0, r.Z)({}, X.ticketWrapper), {
                        marginBottom:
                          t === (null == n ? void 0 : n.length) - 1 ? 0 : 8,
                      }),
                      children: [
                        (0, k.BX)(m.View, {
                          style: X.trainInfoWrapper,
                          children: [
                            (0, k.BX)(m.View, {
                              style: X.displayFlex,
                              children: [
                                (0, k.tZ)(m.Text, {
                                  style: X.time,
                                  children: null == e ? void 0 : e.departTime,
                                }),
                                (0, k.tZ)(m.Text, {
                                  style: X.station,
                                  children:
                                    null == e ? void 0 : e.departStation,
                                }),
                              ],
                            }),
                            (0, k.BX)(m.View, {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              },
                              children: [
                                (0, k.BX)(m.View, {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  },
                                  children: [
                                    (0, k.tZ)(m.Text, {
                                      style: X.trainNo,
                                      children: null == e ? void 0 : e.trainNo,
                                    }),
                                    (0, k.tZ)(m.Image, {
                                      src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_sf@3x.webp",
                                      style: X.ticketIcon,
                                      webp: !0,
                                    }),
                                  ],
                                }),
                                (0, k.tZ)(m.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_htlb@3x.png",
                                  style: X.arrIcon,
                                }),
                                (0, k.tZ)(m.Text, {
                                  style: X.costTime,
                                  children: F(
                                    null == e ? void 0 : e.departTime,
                                    null == e ? void 0 : e.arriveTime
                                  ),
                                }),
                              ],
                            }),
                            (0, k.BX)(m.View, {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                              },
                              children: [
                                (0, k.tZ)(m.Text, {
                                  style: X.time,
                                  children: null == e ? void 0 : e.arriveTime,
                                }),
                                (0, k.tZ)(m.Text, {
                                  style: X.station,
                                  children:
                                    null == e ? void 0 : e.arriveStation,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, k.tZ)(m.View, { style: X.line }),
                        (0, k.BX)(m.View, {
                          style: { display: "flex", flexDirection: "row" },
                          children: [
                            (0, k.tZ)(m.Text, {
                              style: X.departTime,
                              children: "出发时间",
                            }),
                            (0, k.tZ)(m.Text, {
                              style: X.departTimeDetail,
                              children: null == e ? void 0 : e.ticketDate,
                            }),
                            (0, k.tZ)(m.Text, {
                              style: X.ticketSeatName,
                              children:
                                (null == e ? void 0 : e.seatName) +
                                " " +
                                (+(null == e ? void 0 : e.ticketPrice)
                                  ? "¥" + (null == e ? void 0 : e.ticketPrice)
                                  : ""),
                            }),
                            (0, k.tZ)(m.Text, {
                              style: X.ticketDesc,
                              children: null == e ? void 0 : e.remark,
                            }),
                          ],
                        }),
                      ],
                    },
                    t
                  );
                },
                f = (0, k.tZ)(m.View, {
                  id: "AMEw",
                  onClick: function () {
                    d(!0);
                  },
                  style: X.showMore,
                  children: (0, k.BX)(m.View, {
                    style: X.showMoreInner,
                    children: [
                      (0, k.tZ)(m.Text, {
                        style: X.showMoreText,
                        children: a
                          ? "查看全部失效车次信息·" + (n.length - 1)
                          : "查看其他候补车次信息·" + (n.length - 1),
                      }),
                      (0, k.tZ)(m.Image, {
                        style: (0, r.Z)(
                          {},
                          {
                            width: 12,
                            height: 12,
                            marginLeft: 4,
                            marginTop: b.Z.isCRN ? 0 : -2,
                          }
                        ),
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/jtjt@3x.png",
                      }),
                    ],
                  }),
                });
              return (0,
              k.BX)(m.View, { style: (0, w.Jn)((0, r.Z)((0, r.Z)((0, r.Z)({}, X.container), { marginTop: a ? 8 : 0 }), { backgroundColor: (null == n ? void 0 : n.length) > 1 && !s ? "#ffffff" : "transparent" })), children: [a && (0, k.tZ)(m.View, { style: X.tipBox, children: (0, k.tZ)(m.View, { style: X.tip, children: "候补资格已满, 暂不能提交" }) }), s ? (null == n ? void 0 : n.map(u)) : null == n || null === (t = n.slice(0, 1)) || void 0 === t ? void 0 : t.map(u), (null == n ? void 0 : n.length) > 1 && !s && f] });
            }),
            X = (0, w.lW)({
              container: {
                marginLeft: 8,
                marginRight: 8,
                position: "relative",
                borderRadius: 12,
                zIndex: 1e3,
              },
              displayFlex: { display: "flex", flexDirection: "column" },
              tipBox: {
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                paddingLeft: 2,
                paddingTop: 2,
              },
              tip: {
                backgroundColor: "#f5f5f5",
                color: "#666666",
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 6,
                fontSize: 10,
                paddingTop: 1,
                paddingBottom: 2,
                paddingLeft: 6,
                paddingRight: 6,
              },
              ticketWrapper: {
                paddingTop: 10,
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 12,
                marginBottom: 8,
                borderRadius: 12,
                backgroundColor: "#fff",
                borderColor: "#f5f5f5",
                zIndex: 100,
              },
              trainInfoWrapper: {
                paddingLeft: 6,
                paddingRight: 6,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              time: {
                marginBottom: 3,
                fontSize: 28,
                color: "#222222",
                lineHeight: 30,
                fontFamily: "ZX-Regular",
              },
              station: {
                fontSize: 14,
                color: "#222222",
                fontFamily: "PingFangSC-Medium",
                fontWeight: "500",
                lineHeight: 20,
              },
              trainNo: { fontSize: 12, color: "#222" },
              ticketIcon: { marginLeft: 2, width: 12, height: 12 },
              arrIcon: { marginTop: 3, width: 56, height: 4 },
              costTime: { marginTop: 2, color: "#222222", fontSize: 12 },
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
                marginBottom: 10,
                width: "100%",
                height: 0.3,
                backgroundColor: "#ededed",
              },
              showMore: {
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 12,
                marginTop: -4,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              },
              showMoreInner: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F8F8F8",
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
            }),
            P = i(32970),
            M = function () {
              (0, P.jn)(
                "https://".concat(
                  b.Z.isTieyou ? "m.tieyou.com" : "m.suanya.com",
                  "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=child"
                )
              );
            },
            E = g.default.memo(function (e) {
              var t = e.passengerInfo,
                i = void 0 === t ? [] : t;
              return (0, k.tZ)(y.Z, {
                start: { x: 0, y: 0 },
                end: { x: 0, y: 1 },
                colors: ["rgba(255,255,255,0.4)", "#fff"],
                locations: [0, 1],
                style: j.container,
                children: i.map(function (e, t) {
                  var i;
                  return (0,
                  k.BX)(m.View, { style: (0, r.Z)((0, r.Z)({}, j.passengerWrapper), { borderTopWidth: t > 0 ? 0.3 : 0 }), children: [(0, k.BX)(m.View, { style: { display: "flex", flexDirection: "row", alignItems: "center" }, children: [(0, k.tZ)(m.Text, { style: j.passengerName, children: null == e ? void 0 : e.passengerName }), (0, k.tZ)(m.View, { style: j.tag, children: (0, k.tZ)(m.Text, { style: j.tagText, children: null == e ? void 0 : e.passengerType }) }), !!e.isFreeChildren && !!e.freeDesc && (0, k.tZ)(m.View, { style: (0, r.Z)((0, r.Z)({}, j.tag), { borderColor: "#03B86F" }), children: (0, k.tZ)(m.Text, { style: (0, r.Z)((0, r.Z)({}, j.tagText), { color: "#03B86F" }), children: null == e ? void 0 : e.freeDesc }) })] }), (0, k.BX)(m.View, { style: { display: "flex", flexDirection: "row", alignItems: "center" }, children: [(0, k.BX)(m.Text, { style: j.passengerNumber, children: [null == e ? void 0 : e.passportType, " ", null == e ? void 0 : e.passportNumber] }), (null == e || null === (i = e.passengerType) || void 0 === i ? void 0 : i.includes("儿童")) && (0, k.tZ)(m.Text, { style: j.childTips, id: "AMEu", onClick: M, children: "儿童票说明" })] })] }, null == e ? void 0 : e.passportNumber);
                }),
              });
            }),
            j = (0, w.lW)({
              container: {
                marginLeft: 8,
                marginRight: 8,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                paddingLeft: 16,
                paddingRight: 16,
                marginTop: -14,
                paddingTop: 14,
                overflow: "hidden",
              },
              passengerWrapper: {
                paddingTop: 14,
                paddingBottom: 14,
                borderColor: "#f5f5f5",
                zIndex: 100,
              },
              passengerName: {
                fontSize: 16,
                color: "#222",
                lineHeight: 20,
                fontWeight: "500",
              },
              tag: {
                borderStyle: "solid",
                borderWidth: 0.5,
                borderColor: "#ccc",
                marginLeft: 6,
                borderRadius: 4,
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop: 2,
                paddingBottom: 2,
                display: "flex",
                lineHeight: 13,
              },
              tagText: { fontSize: 9, color: "#999" },
              passengerNumber: {
                fontSize: 12,
                color: "#999",
                marginTop: 4,
                lineHeight: 16,
              },
              childTips: { marginLeft: 12, color: "#198CFF", fontSize: 12 },
            }),
            W = i(82750),
            A = i(90098),
            O = i(90582),
            G = i(58374),
            H = i(53550),
            q = function (e) {
              return (0, k.tZ)(k.HY, { children: e.children });
            },
            U = i(82225),
            Y = g.default.memo(function (e) {
              var t = e.onCancel,
                i = void 0 === t ? function () {} : t;
              return (0,
              k.tZ)(m.View, { style: J.container, id: "AMEt", onClick: i, children: (0, k.tZ)(m.View, { style: J.cancel, children: "取消订单" }) });
            }),
            J = (0, w.lW)({
              container: { marginTop: 8, marginLeft: 8, marginRight: 8 },
              cancel: {
                height: 44,
                backgroundColor: "#ffffff",
                borderRadius: 12,
                textAlign: "center",
                fontSize: 14,
                color: "#999999",
                lineHeight: 44,
              },
            }),
            Q = i(82977),
            K = i(33003),
            $ = i(92049),
            ee = function (e) {
              var t = e.isShow,
                i = e.ticketInfo,
                n = void 0 === i ? {} : i,
                r = e.priceDesc,
                o = e.onClose,
                a = void 0 === o ? function () {} : o,
                l = (0, K.c)(a),
                c = l.modalRef,
                s = l.modalClose;
              return (0, k.tZ)(m.View, {
                children:
                  t &&
                  (0, k.tZ)(Q.Z, {
                    ref: c,
                    onCancel: function () {
                      return s();
                    },
                    iphoneXFooterColor: "#f5f5f5",
                    isShowIphoneXAdapter: !1,
                    innerContainerStyle: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      backgroundColor: "#fff",
                    },
                    children: (0, k.BX)(m.View, {
                      className: " _p _Wb _yd _i _k _qt",
                      children: [
                        (0, k.BX)(m.View, {
                          className: " _mh _i _Ga _n _l",
                          children: [
                            (0, k.tZ)(m.Text, {
                              className: " _Xb _Yb",
                              children: "价格明细",
                            }),
                            (0, k.tZ)(m.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                              className: " _u _xr _qk _cc _bc",
                              id: "AMEv",
                              onClick: s,
                              webp: !0,
                            }),
                          ],
                        }),
                        (0, k.BX)(m.View, {
                          className: " _Vb _Oa _Rd _Uf",
                          children: [
                            (0, k.tZ)(m.Text, {
                              className: " _Xb _yg",
                              children: "预估票价",
                            }),
                            (0, k.BX)(m.View, {
                              className: " _ub _i _Ga _m",
                              children: [
                                (0, k.tZ)(m.Text, {
                                  className: " _Xb _G",
                                  children: ""
                                    .concat(n.departStation || "", "-")
                                    .concat(n.arriveStation || ""),
                                }),
                                (0, k.tZ)(m.Text, {
                                  className: " _Xb _Lr",
                                  children: r,
                                }),
                              ],
                            }),
                            (0, k.tZ)(m.View, {
                              className: " _qd _xj _dc _NB",
                              children: [
                                "先付钱再抢票，会预付最高线路、坐席的费用，抢票成功后，会以实际车票价格，将差价退回您原支付账户",
                              ].map(function (e, t) {
                                return (0,
                                k.BX)(m.View, { className: " _i _Ga", children: [(0, k.tZ)(m.View, { className: " _OB _pi _aa _PB _Uo" }), (0, k.tZ)(m.View, { className: " _j _R _Xh _E", children: e })] }, t);
                              }),
                            }),
                          ],
                        }),
                        (0, k.tZ)(m.View, {
                          className: b.Z.isCRN ? " _lc" : " _Lm",
                        }),
                        !b.Z.isCRN && (0, k.tZ)($.Z, {}),
                      ],
                    }),
                  }),
              });
            },
            te = g.default.memo(function (e) {
              var t = e.priceDetail,
                i = e.isAccountException,
                n = void 0 !== i && i,
                r = e.isShowPriceDetail,
                o = e.handle12306Exception,
                a = void 0 === o ? function () {} : o,
                l = e.payToOrder,
                c = void 0 === l ? function () {} : l,
                s = e.changeShowPriceDetail,
                d = void 0 === s ? function () {} : s,
                u = t || {},
                f = u.priceDesc,
                g = void 0 === f ? "" : f,
                p = u.priceTag,
                h = void 0 === p ? "" : p;
              return (0,
              k.BX)(m.View, { style: ie.container, children: [!n && (0, k.BX)(m.View, { style: ie.payLayer, children: [(0, k.BX)(m.View, { style: ie.price, children: [(0, k.tZ)(m.View, { style: ie.priceTxt, children: g && (0, k.BX)(k.HY, { children: [(0, k.tZ)(m.Text, { style: ie.priceIcon, children: "¥" }), (0, k.tZ)(m.Text, { style: ie.priceTag, children: g })] }) }), (0, k.tZ)(m.Text, { style: ie.priceDesc, children: h })] }), (0, k.BX)(m.View, { style: ie.detail, id: "AMEq", onClick: d, children: [(0, k.tZ)(m.Text, { style: ie.detailTxt, children: "明细" }), (0, k.tZ)(m.Image, { src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/jtjt@3x.png", style: r ? ie.arrDown : ie.arrUp })] }), (0, k.tZ)(m.View, { style: ie.payBtn, id: "AMEr", onClick: c, children: (0, k.tZ)(m.Text, { style: ie.payBtnText, children: "立即支付" }) })] }), n && (0, k.tZ)(m.View, { style: ie.exceptionBtn, id: "AMEs", onClick: a, children: (0, k.tZ)(m.Text, { style: ie.exceptionTxt, children: "解决账号问题" }) }), (0, k.tZ)($.Z, {})] });
            }),
            ie = (0, w.lW)({
              container: {
                zIndex: b.Z.isCRN ? 0 : 1001,
                marginTop: -20,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: "#fff",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              exceptionBtn: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 8,
                marginRight: 8,
                height: 44,
                backgroundColor: "#198cff",
                borderRadius: 12,
              },
              exceptionTxt: {
                color: "#ffffff",
                fontSize: 17,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
              },
              payLayer: {
                marginRight: 8,
                marginLeft: 16,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              price: { display: "flex", flexDirection: "column", flex: 1 },
              priceTxt: { display: "flex", flexDirection: "row" },
              priceIcon: {
                color: "#ff5959",
                fontSize: 18,
                fontFamily: "ZX-Regular",
                marginTop: 5,
              },
              priceTag: {
                marginLeft: 1,
                color: "#ff5959",
                fontSize: 24,
                fontFamily: "ZX-Regular",
              },
              priceDesc: { color: "#222222", fontSize: 11 },
              detail: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              detailTxt: { color: "#999999", fontSize: 12 },
              arrUp: {
                marginLeft: 2,
                height: 12,
                width: 12,
                transform: [{ rotate: "180deg" }],
              },
              arrDown: {
                marginLeft: 2,
                height: 12,
                width: 12,
                transform: [{ rotate: "0deg" }],
              },
              payBtn: {
                marginLeft: 12,
                width: 165,
                height: 44,
                backgroundColor: "#ff5959",
                borderRadius: 12,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              },
              payBtnText: {
                color: "#ffffff",
                fontSize: 17,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
              },
            }),
            ne = i(19972),
            re = i(12806),
            oe = h().getSystemInfoSync(),
            ae =
              (0, x.h)()(
                (L = (function (e) {
                  (0, d.Z)(i, e);
                  var t = (0, u.Z)(i);
                  function i(e) {
                    var n;
                    (0, l.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, f.Z)(
                        (0, s.Z)(n),
                        "pageId",
                        b.Z.isCRN
                          ? b.Z.isTieyou
                            ? "10650086787"
                            : "10650090376"
                          : "10650086793"
                      ),
                      (0, f.Z)((0, s.Z)(n), "operateType", "");
                    var r = (0, p.getCurrentInstance)();
                    if (r && r.router && r.router.params)
                      if (b.Z.isCRN) {
                        var o,
                          a = JSON.parse(
                            decodeURIComponent(
                              (null === (o = r.router.params) || void 0 === o
                                ? void 0
                                : o.initData) || "{}"
                            )
                          ).orderNumber,
                          c = void 0 === a ? "" : a;
                        n.state = {
                          orderNumber: c,
                          orderInfo: null,
                          showGrabCommonDrawer: !1,
                        };
                      } else {
                        var d = r.router.params.orderNumber,
                          u = void 0 === d ? "" : d;
                        n.state = {
                          orderNumber: u,
                          orderInfo: null,
                          showGrabCommonDrawer: !1,
                        };
                      }
                    return n;
                  }
                  return (
                    (0, c.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          (0, ne.Q)("加载中...", function () {}, !1),
                            b.Z.isCRN &&
                              this.ubtTrace("TZAGrabAlternatePay_exposure", {
                                PageId: this.pageId,
                              }),
                            this.getCandidateDetail();
                        },
                      },
                      {
                        key: "getCandidateDetail",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            i = 6e4;
                          if (t > i)
                            return (
                              (0, O.v)("", "网络异常，请稍候再试", {
                                text: "我知道了",
                                callback: function () {
                                  (0, p.navigateBack)({ delta: 1 });
                                },
                              }),
                              void (0, ne.Z)()
                            );
                          (0, G.KT)({ orderNumber: this.state.orderNumber })
                            .then(function (i) {
                              if (1 === i.resultCode) {
                                var n = i.statusCode;
                                if (1 === n) {
                                  var r = {
                                    priceDesc: i.price,
                                    priceTag: i.priceTag,
                                  };
                                  e.setState({
                                    orderInfo: i,
                                    priceDetail: r,
                                    intercepted: !1,
                                  }),
                                    (0, ne.Z)();
                                } else if ([-1, 2, 3, 4, 5].includes(n))
                                  (0, ne.Z)(),
                                    e.setState({
                                      orderInfo: i,
                                      intercepted: !1,
                                    }),
                                    i.failReason
                                      ? setTimeout(function () {
                                          e.showGrabCommonDrawer(
                                            "FailReason",
                                            i.failReason
                                          );
                                        }, 0)
                                      : (0, P.t9)(
                                          e.state.orderNumber,
                                          "CandidateOrderPay",
                                          1,
                                          e
                                        );
                                else if (6 === n) {
                                  var o = {
                                    priceDesc: i.priceDesc,
                                    priceTag: i.priceTag,
                                  };
                                  e.setState({
                                    orderInfo: i,
                                    priceDetail: o,
                                    intercepted: !0,
                                  }),
                                    (e.operateType = i.interceptType),
                                    (0, ne.Z)();
                                } else
                                  0 === n
                                    ? (e.setState({
                                        orderInfo: i,
                                        intercepted: !1,
                                      }),
                                      setTimeout(function () {
                                        e.getCandidateDetail(t + 1e3);
                                      }, 1e3))
                                    : setTimeout(function () {
                                        e.getCandidateDetail(t + 1e3);
                                      }, 1e3);
                              } else
                                (0, O.v)(
                                  "",
                                  (null == i ? void 0 : i.resultMessage) ||
                                    "网络异常，请稍候再试"
                                ),
                                  (0, ne.Z)();
                            })
                            .catch(function (e) {
                              console.log(e),
                                (0, ne.Z)(),
                                (0, O.v)("", "网络异常，请稍候再试");
                            });
                        },
                      },
                      {
                        key: "CancelOrder",
                        value: function () {
                          var e = this;
                          (0, ne.Q)("加载中...", function () {}, !1),
                            (0, G.Li)({
                              orderNumber: this.state.orderNumber,
                              cancalUserSyncCandidate: 0,
                            })
                              .then(function (t) {
                                1 === t.resultCode
                                  ? (0, P.t9)(
                                      e.state.orderNumber,
                                      "CandidateOrderPay",
                                      1,
                                      e
                                    )
                                  : (0, O.v)(
                                      "",
                                      (null == t ? void 0 : t.resultMessage) ||
                                        "网络异常，请稍候再试"
                                    );
                              })
                              .catch(function (e) {
                                (0,
                                O.v)("", (null == e ? void 0 : e.message) || "网络异常，请稍候再试");
                              })
                              .finally(function () {
                                (0, ne.Z)();
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
                        key: "handle12306Exception",
                        value: (function () {
                          var e = (0, a.Z)(
                            (0, o.Z)().mark(function e() {
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          (0, P.o$)()
                                        );
                                      case 3:
                                        return (
                                          (e.next = 5),
                                          this.getT6CandidateOrderList()
                                        );
                                      case 5:
                                        e.next = 10;
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(0)),
                                          console.error("jump12306Login", e.t0);
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 7]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getT6CandidateOrderList",
                        value: (function () {
                          var e = (0, a.Z)(
                            (0, o.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                r = this;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          console.log(
                                            "getT6CandidateOrderList"
                                          ),
                                          (e.next = 3),
                                          (0, W.q0)()
                                        );
                                      case 3:
                                        if (
                                          ((t = e.sent),
                                          (i = t.userName),
                                          (n = t.password),
                                          i && n)
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 8:
                                        return (
                                          (e.next = 10),
                                          (0, re.T2)({
                                            oid: this.state.orderNumber,
                                            operateResult: 1,
                                            operateResultMsg: "登陆成功",
                                            login12306Name: i,
                                            login12306Pas: n,
                                            operateType: "login",
                                          })
                                        );
                                      case 10:
                                        setTimeout(function () {
                                          (0, ne.Q)(
                                            "加载中...",
                                            function () {},
                                            !1
                                          ),
                                            r.getCandidateDetail();
                                        }, 1e3);
                                      case 11:
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
                        key: "onCancel",
                        value: function () {
                          this.showGrabCommonDrawer("GoCancel");
                        },
                      },
                      {
                        key: "showGrabCommonDrawer",
                        value: function (e) {
                          var t = this,
                            i =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "";
                          "AutoCanceled" === e
                            ? this.setState({
                                showGrabCommonDrawer: !0,
                                drawerContent: {
                                  enableTapBackground: !1,
                                  title: "候补订单已取消",
                                  content:
                                    "由于您未在10分钟内支付订单，已自动取消",
                                  buttonName: "我知道了",
                                  showType: "single",
                                  onButtonClick: function () {
                                    (0, P.t9)(
                                      t.state.orderNumber,
                                      "CandidateOrderPay",
                                      1,
                                      t
                                    );
                                  },
                                },
                              })
                            : "GoCancel" === e
                            ? this.setState({
                                showGrabCommonDrawer: !0,
                                drawerContent: {
                                  title: "确认要取消订单吗?",
                                  content: "取消后可能会失去候补资格哦～",
                                  leftButtonName: "不取消了",
                                  rightButtonName: "确认取消",
                                  onRightButtonClick: function () {
                                    t.CancelOrder();
                                  },
                                  showType: "multi",
                                },
                              })
                            : "FailReason" === e &&
                              this.setState({
                                showGrabCommonDrawer: !0,
                                drawerContent: {
                                  enableTapBackground: !1,
                                  title: "温馨提示",
                                  content: i,
                                  buttonName: "我知道了",
                                  onButtonClick: function () {
                                    (0, P.t9)(
                                      t.state.orderNumber,
                                      "CandidateOrderPay",
                                      1,
                                      t
                                    );
                                  },
                                  showType: "single",
                                },
                              });
                        },
                      },
                      {
                        key: "closeCommonDrawer",
                        value: function () {
                          this.setState({ showGrabCommonDrawer: !1 });
                        },
                      },
                      {
                        key: "onTimeEnd",
                        value: function () {
                          this.showGrabCommonDrawer("AutoCanceled");
                        },
                      },
                      {
                        key: "changeShowPriceDetail",
                        value: function () {
                          var e = this.state.isShowPriceDetail;
                          this.setState({ isShowPriceDetail: !e });
                        },
                      },
                      {
                        key: "payToOrder",
                        value: function () {
                          var e = this;
                          b.Z.isCRN &&
                            this.ubtTrace(
                              "TZAGrabAlternatePay_PayButton_click",
                              { PageId: this.pageId }
                            ),
                            (0, G.uI)({ orderNumber: this.state.orderNumber })
                              .then(function (t) {
                                1 === t.resultCode
                                  ? (0, P.ce)(
                                      {
                                        orderNumber: e.state.orderNumber,
                                        goodsId: t.paymentId,
                                        business: "train",
                                      },
                                      function () {
                                        console.log("成功"),
                                          (0, P.t9)(
                                            e.state.orderNumber,
                                            "CandidateOrderPay",
                                            1,
                                            e
                                          );
                                      }
                                    )
                                  : (0, O.v)(
                                      "",
                                      (null == t ? void 0 : t.resultMessage) ||
                                        "网络异常，请稍候再试"
                                    );
                              })
                              .catch(function (e) {
                                (0,
                                O.v)("", (null == e ? void 0 : e.message) || "网络异常，请稍候再试");
                              });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t = this.state,
                            i = t.orderInfo,
                            n = t.priceDetail,
                            o = t.isShowPriceDetail,
                            a = t.showGrabCommonDrawer,
                            l = t.drawerContent,
                            c = t.intercepted,
                            s = (null == i ? void 0 : i.ticketInfoTypes) || [],
                            d = (null == i ? void 0 : i.ticketPlansInfos) || [],
                            u = s.filter(function (e) {
                              return 0 === e.holdSeatStatus;
                            }),
                            f = s.filter(function (e) {
                              return 1 === e.holdSeatStatus;
                            });
                          return (0, k.BX)(m.View, {
                            className: "page",
                            style: le.container,
                            children: [
                              (0, k.tZ)(v.Z, {
                                page: this,
                                title: "支付确认页",
                                titleColor: "#222",
                                needHolder: !0,
                                v2: !0,
                                titleFontSize: 17,
                                propStyle: {
                                  icon: "color: black;height: 44px",
                                  box: "background: ".concat(
                                    b.Z.isTieyou ? "ACB6E6" : "#B3D2FF",
                                    ";color: #222222;height: 44px"
                                  ),
                                  title: "font-weight:500",
                                },
                                backgroundColor: "transparent",
                                renderLeftView: function () {
                                  return (0, k.tZ)(m.View, {
                                    id: "AMEy",
                                    onClick: function () {
                                      (0, p.navigateBack)({ delta: 1 });
                                    },
                                    children: (0, k.tZ)(m.View, {
                                      style: {
                                        height: 44,
                                        width: 44,
                                        marginLeft: 5,
                                        justifyContent: "center",
                                        alignItems: "center",
                                      },
                                      children: (0, k.tZ)(H.Z, {
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
                              (0, k.tZ)(y.Z, {
                                start: { x: 0, y: 0 },
                                end: { x: 0, y: 1 },
                                colors: b.Z.isTieyou
                                  ? ["#ACB6E6", "#F5F5F5"]
                                  : ["#B3D2FF", "#F5F5F5"],
                                locations: [0, 1],
                                style: le.bg,
                              }),
                              (0, k.BX)(m.ScrollView, {
                                style: le.scrollView,
                                scrollY: !0,
                                children: [
                                  (0, k.tZ)(R, {
                                    orderNumber: this.state.orderNumber,
                                    candidateStatusDesc:
                                      null == i
                                        ? void 0
                                        : i.candidateStatusDesc,
                                    subTitle: null == i ? void 0 : i.subTitle,
                                    data:
                                      null == i ? void 0 : i.successRateInfo,
                                    timeLeft: null == i ? void 0 : i.timeLeft,
                                    code: null == i ? void 0 : i.statusCode,
                                    onTimeEnd: this.onTimeEnd.bind(this),
                                  }),
                                  (0, k.BX)(q, {
                                    orderNumber: this.state.orderNumber,
                                    children: [
                                      !(null != f && f.length) &&
                                        !(null != f && f.length) &&
                                        !(null == d || !d.length) &&
                                        (0, k.tZ)(V, { ticketList: d }),
                                      f &&
                                        f.length > 0 &&
                                        (0, k.tZ)(V, { ticketList: f }),
                                      u &&
                                        u.length > 0 &&
                                        (0, k.tZ)(V, {
                                          isFail: !0,
                                          ticketList: u,
                                        }),
                                      (0, k.tZ)(E, {
                                        passengerInfo:
                                          (null == i ||
                                          null ===
                                            (e = i.alternateOrderDetail) ||
                                          void 0 === e
                                            ? void 0
                                            : e.passengerInfoList) ||
                                          (null == i
                                            ? void 0
                                            : i.passengerInfoTypes),
                                      }),
                                      i &&
                                        (0, k.tZ)(Y, {
                                          onCancel: this.onCancel.bind(this),
                                        }),
                                      (0, k.tZ)(m.View, { style: le.blank }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, k.tZ)(ee, {
                                isShow: o,
                                ticketInfo: f[0],
                                priceDesc: null == i ? void 0 : i.priceDesc,
                                onClose: this.changeShowPriceDetail.bind(this),
                              }),
                              0 !== (null == i ? void 0 : i.statusCode) &&
                                (0, k.tZ)(te, {
                                  isShowPriceDetail: o,
                                  priceDetail: n,
                                  isAccountException: c,
                                  payToOrder: this.payToOrder.bind(this),
                                  changeShowPriceDetail:
                                    this.changeShowPriceDetail.bind(this),
                                  handle12306Exception:
                                    this.handle12306Exception.bind(this),
                                }),
                              (0, k.tZ)(
                                U.Z,
                                (0, r.Z)(
                                  {
                                    isShow: a,
                                    isShowClose: !1,
                                    onClose: this.closeCommonDrawer.bind(this),
                                  },
                                  l
                                )
                              ),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(g.Component))
              ) || L,
            le = (0, w.lW)({
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
                width: b.Z.isCRN ? oe.windowWidth : "750rpx",
                height: 240,
                marginTop: b.Z.isCRN
                  ? 0
                  : "".concat(44 + (A.Z.statusBarHeight || 0), "px"),
              },
            }),
            ce = ae;
          Page(
            (0, n.createPageConfig)(
              ce,
              "pages/taroCRN/train/pages/candidateOrderPay/index",
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
            6189, 22843, 6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(10061);
          }
        ),
          e.O();
      },
    ]);
})();
