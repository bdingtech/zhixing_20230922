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
    require("../../../sub-common/849af97262623a3a03a4c9ba6f8707d6.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [66152],
      {
        42342: function (e, t, r) {
          var n,
            s = r(32180),
            a = r(79301),
            i = r(95308),
            c = r(57042),
            o = r(24460),
            l = r(81876),
            u = r(21867),
            d = r(86066),
            f = r(45023),
            m = r(52500),
            h = r(92954),
            p = r.n(h),
            g = r(71515),
            w = r(87298),
            x = r(23577),
            Z = r(96302),
            N = r(92049),
            b = r(32970),
            v = r(29799),
            k = r(81023),
            y = r(82750),
            C = r(61885),
            T = r(12806),
            B = r(58374),
            S = r(19972),
            V = r(298),
            P = r(49528),
            R = r(48813),
            D = function (e) {
              var t = e.style,
                r = e.children,
                n = e.onPress;
              return (0, R.tZ)(g.View, { style: t, onClick: n, children: r });
            },
            X = (0, P.lW)({
              button: {
                position: "absolute",
                top: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: 76,
                height: 34,
                backgroundColor: "#f8f8f8",
                borderRadius: 9,
              },
            }),
            L = function (e) {
              var t = e.goOrderDetail,
                r = e.ticket,
                n = r.fromStationName,
                s = r.toStationName,
                a = r.startDate,
                i = r.startTime,
                c = r.arriveDate,
                o = r.arriveTime,
                l = r.coachNo,
                u = r.seatName,
                d = r.trainCode,
                f = r.statusCode,
                m = r.statusName,
                h = r.ticketPrice,
                p = c == a ? "" : c,
                w = (0, V.Z)({}, P.FS.zxRegular);
              return (
                x.Z.isCRN || (w.lineHeight = "40rpx"),
                (0, R.BX)(g.View, {
                  className: "self-ticket-card",
                  onClick: t,
                  children: [
                    (0, R.BX)(g.View, {
                      className: "stc-head flex-row flex-align-items-center",
                      children: [
                        (0, R.BX)(g.View, {
                          className: "flex-row flex-align-items-center flex-1",
                          children: [
                            (0, R.tZ)(g.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_08/cc@3x.png",
                              className: "stc-train-icon",
                            }),
                            (0, R.tZ)(g.View, {
                              className: "stc-title",
                              style: P.FS.lightBold,
                              children: "火车票",
                            }),
                          ],
                        }),
                        (0, R.tZ)(g.View, {
                          className: "stc-status",
                          style: "a" == f ? { color: "#00c777" } : "",
                          children: m,
                        }),
                      ],
                    }),
                    (0, R.BX)(g.View, {
                      className: "stc-content",
                      children: [
                        (0, R.BX)(g.View, {
                          className:
                            "stc-cont-title flex-row flex-align-items-center",
                          children: [
                            (0, R.BX)(g.View, {
                              className:
                                "stc-train-info flex-1 flex-row flex-align-items-center",
                              style: P.FS.lightBold,
                              children: [n, "-", s, " ", d],
                            }),
                            (0, R.BX)(g.View, {
                              className: "stc-price flex flex-row",
                              children: [
                                (0, R.tZ)(g.Text, {
                                  className: "stc-rmb",
                                  style: w,
                                  children: "¥",
                                }),
                                (0, R.tZ)(g.Text, {
                                  className: "stc-price-num",
                                  style: P.FS.zxRegular,
                                  children: h,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, R.BX)(g.View, {
                          className:
                            "stc-cont-subtitle flex-row flex-align-items-center",
                          children: [a, " ", i, " 至 ", p, o, " ", l, "车", u],
                        }),
                      ],
                    }),
                    (0, R.tZ)(g.View, {
                      className: "stc-bottom flex-row flex-align-items-center",
                      children: (0, R.tZ)(D, {
                        style: X.button,
                        onPress: function (e) {
                          x.Z.isCRN || e.stopPropagation(), t();
                        },
                        activeOpacity: 0.7,
                        children: (0, R.tZ)(g.Text, {
                          className: "stc-btn-txt",
                          children: "查看详情",
                        }),
                      }),
                    }),
                  ],
                })
              );
            },
            O = function (e) {
              return new Promise(function (t) {
                setTimeout(t, e);
              });
            },
            q = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(t) {
                  var r,
                    n,
                    s,
                    i,
                    c,
                    o,
                    l,
                    u,
                    d = arguments;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = d.length > 1 && void 0 !== d[1] ? d[1] : 0),
                              (e.prev = 1),
                              (t.action = t.pollingKey ? 2 : 1),
                              (e.next = 5),
                              (0, B.Yc)(t)
                            );
                          case 5:
                            if (
                              ((n = e.sent),
                              r++,
                              (s = n.resultCode),
                              (i = n.pollingInterval),
                              (c = void 0 === i ? 1 : i),
                              (o = n.totalPollingTime),
                              (l = void 0 === o ? 10 : o),
                              (u = n.pollingKey),
                              2 != s)
                            ) {
                              e.next = 15;
                              break;
                            }
                            if (!(r >= l)) {
                              e.next = 11;
                              break;
                            }
                            return e.abrupt("return", n);
                          case 11:
                            return (e.next = 13), O(1e3 * c);
                          case 13:
                            return (
                              (t.pollingKey = u), e.abrupt("return", q(t, r))
                            );
                          case 15:
                            return e.abrupt("return", n);
                          case 18:
                            return (
                              (e.prev = 18),
                              (e.t0 = e.catch(1)),
                              e.abrupt("return", e.t0)
                            );
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 18]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            F = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(t) {
                  var r,
                    n,
                    s,
                    i = arguments;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = i.length > 1 && void 0 !== i[1] ? i[1] : 0),
                              (e.prev = 1),
                              (n = { sequenceNo: t }),
                              (e.next = 5),
                              (0, B.sj)(n)
                            );
                          case 5:
                            if (
                              ((s = e.sent),
                              r++,
                              !((1 == s.resultCode && s.orderNumber) || r >= 3))
                            ) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", s);
                          case 9:
                            return (e.next = 11), O(1e3);
                          case 11:
                            return e.abrupt("return", F(t, r));
                          case 14:
                            return (
                              (e.prev = 14),
                              (e.t0 = e.catch(1)),
                              e.abrupt("return", e.t0)
                            );
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            j = function (e) {
              var t = e.children,
                r = e.className,
                n = void 0 === r ? "" : r,
                s = e.style;
              return (0, R.tZ)(g.View, {
                className: "sto-fade-animation ".concat(n),
                style: s,
                children: t,
              });
            },
            I = (0, P.lW)({
              title: { width: 119, height: 23 },
              status: { width: 85, height: 23 },
              trainInfo: { width: 182, height: 23 },
              price: { width: 38, height: 23 },
              contsubtitle: { width: 201, height: 16 },
              tip: { width: 103, height: 16 },
              btn: { width: 76, height: 34 },
            }),
            _ = function () {
              return (0, R.BX)(g.View, {
                className: "self-ticket-order-list-content flex-1",
                children: [
                  (0, R.tZ)(g.View, { className: "skt-tip" }),
                  [1, 2, 3, 4, 5, 6].map(function (e, t) {
                    return (0,
                    R.BX)(g.View, { className: "self-ticket-card-skeleton", children: [(0, R.BX)(g.View, { className: "skt-head flex-row flex-align-items-center", children: [(0, R.tZ)(g.View, { className: "flex-1", children: (0, R.tZ)(j, { style: I.title }) }), (0, R.tZ)(j, { style: I.status })] }), (0, R.BX)(g.View, { className: "skt-content", children: [(0, R.BX)(g.View, { className: "skt-cont-title flex-row flex-align-items-center", children: [(0, R.tZ)(g.View, { className: "flex-1", children: (0, R.tZ)(j, { style: I.trainInfo }) }), (0, R.tZ)(j, { style: I.price })] }), (0, R.tZ)(j, { style: I.contsubtitle })] }), (0, R.BX)(g.View, { className: "skt-bottom flex-row flex-align-items-center", children: [(0, R.tZ)(g.View, { className: "flex-1", children: (0, R.tZ)(j, { style: I.tip }) }), (0, R.tZ)(j, { style: I.btn })] })] }, t);
                  }),
                ],
              });
            },
            z = {
              a: {
                name: "购票成功",
                code: 100,
                desc: "请持身份证原件进站乘车",
              },
              c: {
                name: "退票成功",
                code: 101,
                desc: "退款将在1-15个工作日退回原支付渠道",
              },
              d: { desc: "已为您改签" },
              f: {
                name: "改签成功",
                code: 103,
                desc: "请持身份证原件进站乘车",
              },
            },
            E =
              (0, w.h)(!1)(
                (n = (function (e) {
                  (0, u.Z)(r, e);
                  var t = (0, d.Z)(r);
                  function r(e) {
                    var n;
                    return (
                      (0, c.Z)(this, r),
                      (n = t.call(this, e)),
                      (0, f.Z)((0, l.Z)(n), "login12306AccountEncode", null),
                      (0, f.Z)(
                        (0, l.Z)(n),
                        "pageId",
                        x.Z.isCRN ? "10650104330" : "10650104332"
                      ),
                      (0, f.Z)((0, l.Z)(n), "_refreshControl", null),
                      (0, f.Z)(
                        (0, l.Z)(n),
                        "getOrderList",
                        (0, i.Z)(
                          (0, a.Z)().mark(function e() {
                            var t, r, s, i, c, o, l, u;
                            return (0, a.Z)().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (s = {
                                        userName12306:
                                          null === (t = n.state.account) ||
                                          void 0 === t
                                            ? void 0
                                            : t.userName,
                                        userPassword12306:
                                          null ===
                                            (r = n.login12306AccountEncode) ||
                                          void 0 === r
                                            ? void 0
                                            : r.login12306Pas,
                                      }),
                                      (e.next = 3),
                                      q(s)
                                    );
                                  case 3:
                                    if (3 != (i = e.sent).resultCode) {
                                      e.next = 10;
                                      break;
                                    }
                                    return (
                                      (e.next = 7),
                                      (0, C.OS)(5, n.state.account)
                                    );
                                  case 7:
                                    return (
                                      1 == e.sent.code
                                        ? n.getOrderList()
                                        : (p().showToast({
                                            title: "刷脸失败",
                                            icon: "none",
                                          }),
                                          n.navigateBack()),
                                      e.abrupt("return")
                                    );
                                  case 10:
                                    if (1 != i.resultCode) {
                                      e.next = 15;
                                      break;
                                    }
                                    return (
                                      (u =
                                        (null === (c = i.data) || void 0 === c
                                          ? void 0
                                          : c.orderTicketList) || []),
                                      n.setState({
                                        orderTicketList: u,
                                        showSkeleton: !1,
                                      }),
                                      (0, B.Sf)({
                                        userName12306:
                                          null === (o = n.state.account) ||
                                          void 0 === o
                                            ? void 0
                                            : o.userName,
                                        userPassword12306:
                                          null ===
                                            (l = n.login12306AccountEncode) ||
                                          void 0 === l
                                            ? void 0
                                            : l.login12306Pas,
                                        scenes: "selfTicket",
                                      }),
                                      e.abrupt("return")
                                    );
                                  case 15:
                                    n.showCommonDialog({
                                      title: "温馨提示",
                                      content:
                                        i.resultMessage ||
                                        "请求失败，请稍后重试",
                                      onButtonClick: function () {
                                        n.navigateBack();
                                      },
                                    });
                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      ),
                      (0, f.Z)(
                        (0, l.Z)(n),
                        "goOrderDetail",
                        (function () {
                          var e = (0, i.Z)(
                            (0, a.Z)().mark(function e(t) {
                              var r, s, i, c, o;
                              return (0, a.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (0, S.Q)(),
                                        (e.next = 3),
                                        F(t.sequenceNo)
                                      );
                                    case 3:
                                      (r = e.sent),
                                        (0, S.Z)(),
                                        1 == r.resultCode && r.orderNumber
                                          ? (0, C.LH)({
                                              orderNumber: r.orderNumber,
                                              fromPage: "selfTicketOrderList",
                                            })
                                          : x.Z.isCRN
                                          ? ((o = {
                                              orderStatus: {
                                                name:
                                                  (null ===
                                                    (s = z[t.statusCode]) ||
                                                  void 0 === s
                                                    ? void 0
                                                    : s.name) || t.statusName,
                                                code:
                                                  (null ===
                                                    (i = z[t.statusCode]) ||
                                                  void 0 === i
                                                    ? void 0
                                                    : i.code) || 100,
                                                icon: "https://images3.c-ctrip.com/ztrip/icon/TrainOD_success.png",
                                                iconV1:
                                                  "https://images3.c-ctrip.com/ztrip/train.song/xcx/10.0/xqy/icon_cg@3x.webp",
                                                desc:
                                                  (null ===
                                                    (c = z[t.statusCode]) ||
                                                  void 0 === c
                                                    ? void 0
                                                    : c.desc) || "",
                                              },
                                              orderTicketList: [
                                                {
                                                  orderTicketType:
                                                    "f" == t.statusCode ? 2 : 1,
                                                  trainNo: t.trainCode,
                                                  seatName: t.seatTypeName,
                                                  fromStation:
                                                    t.fromStationName,
                                                  toStation: t.toStationName,
                                                  fromDate: t.startDateFormat,
                                                  fromTime: t.startTime,
                                                  toDate: t.arriveDateFormat,
                                                  toTime: t.arriveTime,
                                                  electronicNum: t.sequenceNo,
                                                  entrance: "",
                                                  ticketInfoList: [
                                                    {
                                                      orderStatus: t.statusName,
                                                      passportType: t.idName,
                                                      passportCode: "",
                                                      mobile: "",
                                                      passengerName:
                                                        t.passengerName,
                                                      pasengerType: "",
                                                      ticketPrice:
                                                        t.ticketPrice,
                                                      seatNo: ""
                                                        .concat(t.coachNo, "车")
                                                        .concat(t.seatNo),
                                                      seatType: t.seatTypeName,
                                                      returnFlag: 0,
                                                      reScheduleFlag: 0,
                                                    },
                                                  ],
                                                },
                                              ],
                                            }),
                                            (0, C.LH)({
                                              orderDetail: o,
                                              fromPage: "selfTicketOrderList",
                                            }))
                                          : n.showCommonDialog({
                                              title: "温馨提示",
                                              content:
                                                "订单信息加载中，请稍后再试试",
                                            });
                                    case 6:
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
                      (0, f.Z)(
                        (0, l.Z)(n),
                        "refreshPage",
                        (0, i.Z)(
                          (0, a.Z)().mark(function e() {
                            var t, r;
                            return (0, a.Z)().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!n.state.isRefreshing) {
                                      e.next = 3;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 3:
                                    return (
                                      n.setState({ isRefreshing: !0 }),
                                      (e.next = 6),
                                      n.getOrderList()
                                    );
                                  case 6:
                                    null === (t = n._refreshControl) ||
                                      void 0 === t ||
                                      null === (r = t.finishRefresh) ||
                                      void 0 === r ||
                                      r.call(t),
                                      n.setState({ isRefreshing: !1 });
                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      ),
                      (n.state = {
                        showSkeleton: !0,
                        account: null,
                        orderTicketList: [],
                        isRefreshing: !1,
                      }),
                      n
                    );
                  }
                  return (
                    (0, o.Z)(r, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, i.Z)(
                            (0, a.Z)().mark(function e() {
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        this.initPage();
                                      case 1:
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
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "initPage",
                        value: (function () {
                          var e = (0, i.Z)(
                            (0, a.Z)().mark(function e() {
                              var t,
                                r = this;
                              return (0, a.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), (0, y.q0)();
                                      case 2:
                                        if (
                                          null == (t = e.sent) ||
                                          !t.userName ||
                                          null == t ||
                                          !t.password
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        this.setState(
                                          { account: t },
                                          (0, i.Z)(
                                            (0, a.Z)().mark(function e() {
                                              var n;
                                              return (0, a.Z)().wrap(function (
                                                e
                                              ) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      return (
                                                        (e.next = 2),
                                                        (0, T.Kt)({
                                                          login12306Name:
                                                            t.userName,
                                                          login12306Pas:
                                                            t.password,
                                                        })
                                                      );
                                                    case 2:
                                                      (n = e.sent),
                                                        (r.login12306AccountEncode =
                                                          n),
                                                        r.getOrderList();
                                                    case 5:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              },
                                              e);
                                            })
                                          )
                                        ),
                                          (e.next = 17);
                                        break;
                                      case 7:
                                        return (
                                          (e.prev = 7),
                                          (e.next = 10),
                                          (0, b.L5)()
                                        );
                                      case 10:
                                        this.initPage(), (e.next = 17);
                                        break;
                                      case 13:
                                        (e.prev = 13),
                                          (e.t0 = e.catch(7)),
                                          console.log(e.t0),
                                          p().navigateBack();
                                      case 17:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[7, 13]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            r = t.showSkeleton,
                            n = t.orderTicketList,
                            s = t.account,
                            a = t.isRefreshing;
                          return (0, R.BX)(g.View, {
                            className:
                              "self-ticket-order-list flex flex-column",
                            children: [
                              (0, R.tZ)(Z.Z, {
                                title: "本人车票",
                                backgroundColor: "#f5f5f5",
                              }),
                              r
                                ? (0, R.tZ)(_, {})
                                : (0, R.BX)(g.ScrollView, {
                                    className:
                                      "self-ticket-order-list-content flex-1",
                                    scrollY: !0,
                                    refresherEnabled: !0,
                                    refresherBackground: "transparent",
                                    refresherTriggered: a,
                                    onRefresherRefresh: this.refreshPage,
                                    refreshControl: (0, R.tZ)(k.Z, {
                                      ref: function (t) {
                                        return (e._refreshControl = t);
                                      },
                                      refreshing: a,
                                      onRefresh: this.refreshPage,
                                      loadingStyleName: "default",
                                    }),
                                    children: [
                                      s &&
                                        (0, R.BX)(g.View, {
                                          className:
                                            "sto-tip flex-row flex-align-items-center",
                                          children: [
                                            (0, R.tZ)(g.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_08/1@3x.png",
                                              className: "sto-tip-icon",
                                            }),
                                            (0, R.tZ)(g.Text, {
                                              className: "sto-tip-txt",
                                              style: x.Z.isCRN
                                                ? {}
                                                : { whiteSpace: "nowrap" },
                                              children:
                                                "只显示当前12306账号本人「",
                                            }),
                                            (0, R.tZ)(g.Text, {
                                              className: "sto-tip-txt",
                                              style: { color: "#FD9227" },
                                              children: s.realName12306,
                                            }),
                                            (0, R.tZ)(g.Text, {
                                              className: "sto-tip-txt",
                                              style: x.Z.isCRN
                                                ? {}
                                                : { whiteSpace: "nowrap" },
                                              children: "」的出行车票信息",
                                            }),
                                          ],
                                        }),
                                      n.map(function (t, r) {
                                        return (0, R.tZ)(
                                          L,
                                          {
                                            ticket: t,
                                            goOrderDetail: function () {
                                              return e.goOrderDetail(t);
                                            },
                                          },
                                          r
                                        );
                                      }),
                                    ],
                                  }),
                              (0, R.tZ)(N.Z, { backgroundColor: "#f5f5f5" }),
                              (0, R.tZ)(v.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    r
                  );
                })(m.default.Component))
              ) || n;
          Page(
            (0, s.createPageConfig)(
              E,
              "pages/taroCRN/train/pages/selfTicketOrderList/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "本人车票",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#F5F5F5",
                backgroundColorBottom: "#F5F5F5",
                enablePullDownRefresh: !1,
                disableScroll: !0,
                navigationStyle: "custom",
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
            6189, 22843, 6878, 31162, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(42342);
          }
        ),
          e.O();
      },
    ]);
})();
