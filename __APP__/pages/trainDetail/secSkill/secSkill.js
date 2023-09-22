!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/9cf383cff2ba8ce0456965e69ba11b63.js"),
    require("../sub-common/dac718cff8bcf1ac12775119a6edc31f.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [91838],
      {
        31573: function (e, t, i) {
          var n,
            a = i(32180),
            r = i(22276),
            s = i(298),
            o = i(79301),
            c = i(95308),
            l = i(57042),
            u = i(24460),
            m = i(21867),
            d = i(86066),
            h = i(52500),
            f = i(8271),
            p = i.n(f),
            T = i(71515),
            k = i(81957),
            g = i(92954),
            S = i.n(g),
            v = i(10741),
            w = i(79910),
            Z = i(34229),
            b = i(38911),
            D = i(4102),
            N = i(74867),
            x = i(59076),
            y = i(49981),
            P = i(48813),
            B = function (e) {
              var t = e.orderTicket;
              if (!t) return null;
              var i = [
                { name: "票价", desc: t._feeLi },
                { name: "总价", desc: t._feeliSum },
              ];
              return (0, P.BX)(T.View, {
                className: "trn-secSkill-fee-detail",
                children: [
                  (0, P.tZ)(T.View, { className: "tit", children: "费用明细" }),
                  (0, P.tZ)(T.View, {
                    children: i.map(function (e, t) {
                      return (0,
                      P.BX)(T.View, { className: "flex flex-center fee-li", children: [(0, P.tZ)(T.View, { className: "flex-1 name", children: e.name }), (0, P.tZ)(T.View, { className: "desc", children: e.desc })] }, t);
                    }),
                  }),
                ],
              });
            },
            C = function (e) {
              return (0, P.BX)(T.View, {
                className: "train-info",
                children: [
                  (0, P.tZ)(T.Text, {
                    children: ""
                      .concat(e.fromTime)
                      .concat(e.fromStation, "-")
                      .concat(e.toTime)
                      .concat(
                        e.toDate !== e.fromDate ? "(".concat(e.toDate, ")") : ""
                      )
                      .concat(e.toStation),
                  }),
                  (0, P.tZ)(T.View, { className: "line" }),
                  (0, P.tZ)(T.Text, { children: e.seatName }),
                ],
              });
            },
            V =
              (0, k.h)(!1, { usePageWrapper: !0 })(
                (n = (function (e) {
                  (0, m.Z)(i, e);
                  var t = (0, d.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, l.Z)(this, i),
                      ((n = t.call(this, e)).pageTitle = "车票预订"),
                      (n.pageRootClassName = "train-sec-skill"),
                      (n.pageId = "10650092729"),
                      (n.state = {
                        orderTicket: null,
                        isStartSecSkill: !1,
                        chosenList: [],
                      }),
                      n
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setPageData(), this.handleInitPage();
                        },
                      },
                      { key: "componentWillUnmount", value: function () {} },
                      {
                        key: "onInterceptBackAsync",
                        value: function () {
                          var e = this;
                          return new Promise(function (t) {
                            e.$CommonSceneDrawer.confirm({
                              title: "确认放弃秒杀吗？",
                              cancelText: "再等等",
                              confirmText: "确定放弃",
                              content: "车次马上开始秒杀，退出页面即放弃秒杀哦",
                              onCancel: function () {
                                t(!1),
                                  (e.hasDetain = !0),
                                  e.ubtTrace(
                                    "TZWBuySeckill_SeckillRetainPop_Wait_click",
                                    { PageId: e.pageId }
                                  );
                              },
                              onConfirm: function () {
                                t(!0),
                                  (0, b.Vt)({ orderNumber: e.oid }),
                                  e.ubtTrace(
                                    "TZWBuySeckill_SeckillRetainPop_Cancel_click",
                                    { PageId: e.pageId }
                                  );
                              },
                            }),
                              e.ubtTrace(
                                "TZWBuySeckill_SeckillRetainPop_exposure",
                                { PageId: e.pageId }
                              );
                          });
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          var e = this.$instance.router.params || {},
                            t = e.oid,
                            i = e.data;
                          (this.oid = t),
                            (this.saleDate = null == i ? void 0 : i.saleDate),
                            (this.originalTrain =
                              null == i ? void 0 : i.originalTrain),
                            (this.passengerList =
                              null == i ? void 0 : i.passengerList),
                            (this.chosenList =
                              (null == i ? void 0 : i.chosenList) || []),
                            (this.endDateTime =
                              null == i ? void 0 : i.endDateTime),
                            (this.freeChildren =
                              null == i ? void 0 : i.freeChildren);
                        },
                      },
                      {
                        key: "handleInitPage",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, i, n, a, r, s, c, l, u;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        (t = this.originalTrain),
                                          (i = t.TrainNumber),
                                          (n = t.DepartureDate),
                                          (a = t.DepartStation),
                                          (r = t.ArriveStation),
                                          (s = t.SeatName),
                                          (c = t.DepartTime),
                                          (l = t.ArriveTime),
                                          (u = t.chosenSeat),
                                          this.setState({
                                            orderTicket: {
                                              _datestr: ""
                                                .concat(
                                                  p()(n).format("MM月DD日"),
                                                  " "
                                                )
                                                .concat(
                                                  D.Z.getWeekDay(n),
                                                  "出发 "
                                                )
                                                .concat(i),
                                              fromStation: a,
                                              toStation: r,
                                              ticketInfoForWaitPays:
                                                this.passengerList,
                                              seatName: s,
                                              fromTime: c,
                                              toTime: l,
                                              chosenSeat: u,
                                              freeTicket: this.freeChildren,
                                              _feeLi: "￥"
                                                .concat(
                                                  null == u
                                                    ? void 0
                                                    : u.SeatPrice,
                                                  "x"
                                                )
                                                .concat(
                                                  this.passengerList.length
                                                ),
                                              _feeliSum: "￥".concat(
                                                (null == u
                                                  ? void 0
                                                  : u.SeatPrice) *
                                                  this.passengerList.length
                                              ),
                                            },
                                            chosenList: this.chosenList,
                                          });
                                      case 2:
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
                        key: "getTaskBookResult",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, o.Z)().mark(function e() {
                              var t,
                                i = this;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          this.setState({
                                            isStartSecSkill: !0,
                                          }),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          (0, v.brK)({ orderNumber: this.oid })
                                        );
                                      case 4:
                                        if (((t = e.sent), 1 !== t.flag)) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          S().reLaunch({
                                            url:
                                              "/pages/trainDetail/order/order?oid=" +
                                              this.oid,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 9:
                                        if (
                                          this.endDateTime &&
                                          !p()().isAfter(p()(this.endDateTime))
                                        ) {
                                          e.next = 14;
                                          break;
                                        }
                                        return (
                                          this.showCommonDialog({
                                            content: "抱歉，秒杀已结束",
                                            onButtonClick: function () {
                                              S().reLaunch({
                                                url:
                                                  "/pages/trainDetail/order/order?oid=" +
                                                  i.oid,
                                              });
                                            },
                                          }),
                                          (0, b.Vt)({ orderNumber: this.oid }),
                                          N.Z.commonDebugTrace(
                                            "cancelOrder auto on time up!!!"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 14:
                                        return (
                                          (e.next = 16), w.Z.awaitTime(2e3)
                                        );
                                      case 16:
                                        return e.abrupt(
                                          "return",
                                          this.getTaskBookResult()
                                        );
                                      case 19:
                                        return (
                                          (e.prev = 19),
                                          (e.t0 = e.catch(1)),
                                          (e.next = 23),
                                          w.Z.awaitTime(2e3)
                                        );
                                      case 23:
                                        return e.abrupt(
                                          "return",
                                          this.getTaskBookResult()
                                        );
                                      case 24:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 19]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "updateGrabOrder",
                        value: function (e) {
                          return (0, x.hc)(
                            (0, s.Z)(
                              (0, s.Z)({}, e),
                              {},
                              { orderNumber: this.oid }
                            )
                          );
                        },
                      },
                      {
                        key: "onSelectTrain",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var i, n, a, s, c, l, u, m, d, h;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = this.originalTrain),
                                          (n = i.DepartureDate),
                                          (a = i.DepartStation),
                                          (s = i.ArriveStation),
                                          (c = i.SeatName),
                                          (l = i.ArriveTime),
                                          (u = [].concat(
                                            (0, r.Z)(
                                              [this.originalTrain].map(
                                                function (e) {
                                                  var t = {
                                                    trainNumber: e.TrainNumber,
                                                    departStation:
                                                      e.DepartStation,
                                                    arriveStation:
                                                      e.ArriveStation,
                                                  };
                                                  return (
                                                    (t.departTime =
                                                      e.DepartTime),
                                                    (t.arriveTime =
                                                      e.ArriveTime),
                                                    (t.time = e.TimesCost),
                                                    (t.durationMinute =
                                                      e.RunTime),
                                                    (!1 !== e.IsFastPass &&
                                                      !0 !== e.IsFastPass) ||
                                                      ((t.exchangeable =
                                                        e.IsCanPointsPay
                                                          ? 1
                                                          : 2),
                                                      (t.fastPass = e.IsFastPass
                                                        ? 1
                                                        : 2),
                                                      (t.isJy = e.IsCanSilent
                                                        ? 1
                                                        : 2)),
                                                    t
                                                  );
                                                }
                                              )
                                            ),
                                            (0, r.Z)(t)
                                          )),
                                          (e.next = 4),
                                          this.updateGrabOrder({
                                            trainInfo: {
                                              trainNo: u
                                                .map(function (e) {
                                                  return e.trainNumber;
                                                })
                                                .join(","),
                                              seatName: c,
                                              fromName: a,
                                              toName: s,
                                              fromDate: n,
                                              mainFromTime: n,
                                              mainToTime: l,
                                              trainStationInfos: u,
                                            },
                                          })
                                        );
                                      case 4:
                                        if (
                                          ((m = e.sent),
                                          (d = m.resultCode),
                                          (h = m.resultMessage),
                                          1 === d)
                                        ) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          this.showCommonDialog(
                                            h || "网络错误，请稍候重试"
                                          ),
                                          e.abrupt("return", !1)
                                        );
                                      case 10:
                                        return e.abrupt("return", !0);
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
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state.orderTicket
                            ? [this.state.orderTicket]
                            : [];
                          return (0, P.BX)(P.HY, {
                            children: [
                              (0, P.BX)(T.View, {
                                className: "status-bar flex-align-items-center",
                                children: [
                                  (0, P.tZ)(T.Image, {
                                    className: "icon",
                                    src:
                                      (this.state.isStartSecSkill,
                                      "https://images3.c-ctrip.com/ztrip/train_snow/2023_03/waite@3x.png"),
                                    mode: "aspectFit",
                                    webp: !0,
                                  }),
                                  (0, P.BX)(T.View, {
                                    className: "flex-1 flex flex-column left",
                                    children: [
                                      this.state.isStartSecSkill
                                        ? (0, P.BX)(T.View, {
                                            className: "flex flex-center",
                                            style: { justifyContent: "start" },
                                            children: [
                                              "正在秒杀中",
                                              !!this.endDateTime &&
                                                (0, P.tZ)(Z.ZtCountdown, {
                                                  className:
                                                    "sec-kill-count-down",
                                                  isShowHour: !1,
                                                  format: {
                                                    minute: "分",
                                                    second: "秒",
                                                  },
                                                  endTime: p()(
                                                    this.endDateTime
                                                  ).format(
                                                    "YYYY-MM-DD HH:mm:ss"
                                                  ),
                                                }),
                                            ],
                                          })
                                        : (0, P.BX)(T.View, {
                                            className: "flex flex-center",
                                            style: { justifyContent: "start" },
                                            children: [
                                              "距开售秒杀",
                                              this.saleDate &&
                                                (0, P.tZ)(Z.ZtCountdown, {
                                                  className:
                                                    "sec-kill-count-down",
                                                  isShowHour: !1,
                                                  format: {
                                                    minute: "分",
                                                    second: "秒",
                                                  },
                                                  endTime: p()(
                                                    this.saleDate
                                                  ).format(
                                                    "YYYY-MM-DD HH:mm:ss"
                                                  ),
                                                  onTimeup:
                                                    this.getTaskBookResult.bind(
                                                      this
                                                    ),
                                                }),
                                            ],
                                          }),
                                      this.state.isStartSecSkill &&
                                        (0, P.tZ)(T.View, {
                                          className: "desc",
                                          children:
                                            "正在努力为您占座，请耐心等待…",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              e.map(function (e, t) {
                                return (0, P.BX)(
                                  T.View,
                                  {
                                    className: "ticket-view with-margin-view",
                                    children: [
                                      (0, P.BX)(T.View, {
                                        className: "v-t",
                                        children: [
                                          (0, P.tZ)(T.View, {
                                            className: "order-date",
                                            children: e._datestr,
                                          }),
                                          (0, P.tZ)(T.View, {
                                            className: "train-info",
                                            children: C(e),
                                          }),
                                        ],
                                      }),
                                      (0, P.tZ)(T.View, {
                                        className: "v-b",
                                        children: []
                                          .concat(
                                            (0, r.Z)(
                                              e.ticketInfoForWaitPays || []
                                            ),
                                            (0, r.Z)(e.freeTicket || [])
                                          )
                                          .map(function (e) {
                                            return e.passengerName;
                                          })
                                          .join("、"),
                                      }),
                                      (0, P.BX)(T.View, {
                                        className:
                                          "flex flex-center v-b-yellow",
                                        children: [
                                          (0, P.tZ)(T.Text, {
                                            className:
                                              "iconfont2 ifont2-zhushi_linea_12 icon-zs",
                                          }),
                                          (0, P.tZ)(T.Text, {
                                            className: "flex-1",
                                            children:
                                              "开售前请勿退出此页面，否则秒杀失败",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                              (0, P.tZ)(y.Z, {
                                mainTrain: this.originalTrain,
                                onSelectTrain: this.onSelectTrain.bind(this),
                                chosenList: this.state.chosenList,
                              }),
                              (0, P.tZ)(B, {
                                orderTicket: this.state.orderTicket,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(h.default.Component))
              ) || n;
          Page(
            (0, a.createPageConfig)(
              V,
              "pages/trainDetail/secSkill/secSkill",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "车票秒杀",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#F5F5F5",
                backgroundColorBottom: "#F5F5F5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [93611, 61094, 26450, 36188, 4334, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(31573);
          }
        ),
          e.O();
      },
    ]);
})();
