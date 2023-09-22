!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [31767],
      {
        76162: function (e, t, n) {
          var s,
            i = n(32180),
            r = n(298),
            o = n(57042),
            a = n(24460),
            l = n(81876),
            c = n(21867),
            u = n(86066),
            d = n(45023),
            h = n(52500),
            g = n(92954),
            f = n(8271),
            m = n.n(f),
            p = n(71515),
            k = n(79792),
            v = n(2326),
            T = n(81957),
            y = n(49120),
            L = n(48813),
            N = k.default.isTieyou,
            b = "去程",
            C = "返程",
            S = "第1程",
            R = "第2程",
            I = "第1程",
            w = "第2程",
            O = " 1",
            x = " 2",
            Z =
              (0, T.h)()(
                (s = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, u.Z)(n);
                  function n(e) {
                    var s;
                    return (
                      (0, o.Z)(this, n),
                      (s = t.call(this, e)),
                      (0, d.Z)((0, l.Z)(s), "pageId", "10650060703"),
                      (0, d.Z)(
                        (0, l.Z)(s),
                        "onRefundTicketClick",
                        function (e) {
                          if (
                            (console.log("--click ticket---", e), !e.reason)
                          ) {
                            var t = s.state.selectTicketObj,
                              n = s.isCanTogeRefund(e),
                              i = n.canNotTogetherPerson,
                              o = n.selectOnePerson;
                            e.isSelected
                              ? (t[e.keySelect] = (0, r.Z)(
                                  (0, r.Z)({}, e),
                                  {},
                                  { isSelected: !1 }
                                ))
                              : i
                              ? (0, y.showModal)({
                                  title: "温馨提示",
                                  content: "无法与乘机人"
                                    .concat(i.passengerName, "从")
                                    .concat(i.departCityName, "前往")
                                    .concat(
                                      i.arriveCityName,
                                      "的行程一起退票，请分开提交"
                                    ),
                                  confirmText: "知道了",
                                })
                              : o && o.isStudentSelect != e.isStudentSelect
                              ? (0, y.showModal)({
                                  title: "温馨提示",
                                  content:
                                    "按航司规定，同行乘客需和学生乘客分开提交退票申请",
                                  confirmText: "知道了",
                                })
                              : (t[e.keySelect] = (0, r.Z)(
                                  (0, r.Z)({}, e),
                                  {},
                                  { isSelected: !0 }
                                )),
                              s.setState(
                                { selectTicketObj: (0, r.Z)({}, t) },
                                function () {
                                  var e = s.getMustRefundObjTogether(
                                    s.state.selectTicketObj
                                  );
                                  e && s.setState({ mustRefundTothger: e });
                                }
                              );
                          }
                        }
                      ),
                      (s.state = {
                        orderType: "",
                        firstList: [],
                        secondList: [],
                        goCenterList: [],
                        backCenterList: [],
                        selectTicketObj: {},
                        mustRefundTothger: {},
                        isGoAndBack: !0,
                      }),
                      s
                    );
                  }
                  return (
                    (0, a.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, g.getCurrentInstance)().router.params
                              .data,
                            t = e.refundModel,
                            n = e.orderType,
                            s = e.rescheduleRefundRemark,
                            i = e.orderNumber,
                            r = e.delta,
                            o = void 0 === r ? 0 : r,
                            a = this.handleMoreSegmentData(t, n),
                            l = a.firstList,
                            c = a.secondList,
                            u = a.goCenterList,
                            d = a.backCenterList,
                            h = a.numberAll;
                          console.log("firstList", l),
                            console.log("secondList", c),
                            console.log("goCenterList", u),
                            console.log("backCenterList", d),
                            console.log("numberAll", h),
                            this.setState({
                              orderType: n,
                              firstList: l,
                              secondList: c,
                              goCenterList: u,
                              backCenterList: d,
                            }),
                            (this.delta = o + 1),
                            (this.refundModel = t),
                            (this.orderNumber = i),
                            (this.rescheduleRefundRemark = s);
                        },
                      },
                      {
                        key: "formatOrderTypeTitle",
                        value: function () {
                          this.state.orderType;
                        },
                      },
                      {
                        key: "deepClone",
                        value: function (e) {
                          return JSON.parse(JSON.stringify(e));
                        },
                      },
                      {
                        key: "getNewSegment",
                        value: function () {
                          var e = this.state,
                            t = e.firstList,
                            n = e.secondList,
                            s = e.goCenterList,
                            i = e.backCenterList,
                            r = [],
                            o = this.isSelectPerson(t),
                            a = this.isSelectPerson(n),
                            l = this.isSelectPerson(s),
                            c = this.isSelectPerson(i);
                          return (
                            o && r.push(o),
                            l && r.push(l),
                            a && r.push(a),
                            c && r.push(c),
                            r
                          );
                        },
                      },
                      {
                        key: "isSelectPerson",
                        value: function (e) {
                          if (!e || 0 == e.length) return null;
                          var t = this.deepClone(e[0]),
                            n = [];
                          return (
                            e.forEach(function (e) {
                              e.tickets &&
                                e.tickets.forEach(function (e) {
                                  e.isSelected && n.push(e);
                                });
                            }),
                            (t.tickets = n),
                            n.length > 0
                              ? ((t.insuranceDetails = v.Z.handleInsurance(
                                  t.tickets
                                )),
                                t)
                              : null
                          );
                        },
                      },
                      {
                        key: "judgeIsSupportFlightChange",
                        value: function (e) {
                          var t = !1,
                            n = [];
                          return (
                            e.segmentList.forEach(function (e) {
                              11 == e.refundTips.type &&
                                ((t = !0), (n = e.canRefundReasonList));
                            }),
                            { isFlightChange: t, reasonList: n }
                          );
                        },
                      },
                      {
                        key: "goNext",
                        value: function () {
                          var e = this.state.mustRefundTothger;
                          if (Object.keys(e).length > 0)
                            return (0, y.showToast)(
                              "请按照提示勾选乘机人进行退票"
                            );
                          var t = this.deepClone(this.refundModel);
                          if (
                            ((t.originSegmentList = t.segmentList),
                            (t.segmentList = this.getNewSegment()),
                            t.segmentList && 0 == t.segmentList.length)
                          )
                            return (0, y.showToast)("请选择退票人~");
                          var n = this.judgeIsSupportFlightChange(t),
                            s = n.reasonList,
                            i = n.isFlightChange,
                            r = JSON.parse(
                              JSON.stringify({
                                rescheduleRefundRemark:
                                  this.rescheduleRefundRemark,
                                refundModel: t,
                                orderNumber: this.orderNumber,
                                type: "refund",
                                delta: this.delta,
                              })
                            );
                          return i &&
                            1 == (null == s ? void 0 : s.length) &&
                            s[0].defaultCheck
                            ? ((r.goReasonPage = !1),
                              (r.needShowFree = !0),
                              (r.remarks = {
                                applyTips: s[0].applyTips,
                                submitTips: s[0].submitTips,
                                userAction: s[0].userAction,
                                reasonId: s[0].reasonId,
                              }),
                              void this.goNextPage(r))
                            : i
                            ? ((r.isSupportFlightChange = !0),
                              (r.goReasonPage = !0),
                              void this.goNextPage(r))
                            : void (
                                i ||
                                ((r.isSupportFlightChange = !1),
                                (r.goReasonPage = !1),
                                this.goNextPage(r))
                              );
                        },
                      },
                      {
                        key: "goNextPage",
                        value: function (e) {
                          var t, n, s, i, r, o, a;
                          if (e.goReasonPage)
                            this.navigateTo({
                              url: "/pages/flightAfterSale/refundReason/refundReason",
                              data: e,
                            });
                          else {
                            var l =
                                null === (t = this.refundModel) ||
                                void 0 === t ||
                                null === (n = t.segmentList) ||
                                void 0 === n ||
                                null === (s = n[0]) ||
                                void 0 === s
                                  ? void 0
                                  : s.refundTips,
                              c =
                                null === (i = this.refundModel) ||
                                void 0 === i ||
                                null === (r = i.segmentList) ||
                                void 0 === r ||
                                null === (o = r[0]) ||
                                void 0 === o ||
                                null === (a = o.canRefundReasonList) ||
                                void 0 === a
                                  ? void 0
                                  : a[0];
                            11 === l.type &&
                              "VOLUNTARY" !==
                                (null == c ? void 0 : c.userAction) &&
                              (e.remarks = {
                                applyTips: null == c ? void 0 : c.applyTips,
                                submitTips: null == c ? void 0 : c.submitTips,
                                userAction: null == c ? void 0 : c.userAction,
                                reasonId: null == c ? void 0 : c.reasonId,
                              }),
                              this.navigateTo({
                                url: "/pages/flightAfterSale/refundDetail/refundDetail",
                                data: e,
                              });
                          }
                        },
                      },
                      {
                        key: "handleMoreSegmentData",
                        value: function (e, t) {
                          var n = 0,
                            s = [],
                            i = [],
                            r = [],
                            o = [];
                          if (e && e.segmentList.length > 0)
                            return (
                              e.segmentList.forEach(function (e) {
                                e.tickets &&
                                  e.tickets.forEach(function (e) {
                                    e.canRefund && n++;
                                    var t = {},
                                      s = "";
                                    e.limits &&
                                      (e.limits.forEach(function (e) {
                                        "ONETICKET" == e.code && e.info
                                          ? (t[e.info] = !0)
                                          : "ORDERKEY" == e.code &&
                                            e.info &&
                                            (s = e.info);
                                      }),
                                      (e.mustTogetherToken = t),
                                      (e.judgeIsTigetherKey = s));
                                  });
                                var a =
                                    (e.segmentInfo &&
                                      e.segmentInfo.segmentIndex &&
                                      e.segmentInfo.segmentIndex.segmentType) ||
                                    0,
                                  l =
                                    e.segmentInfo &&
                                    e.segmentInfo.segmentIndex &&
                                    e.segmentInfo.segmentIndex.sequenceNum;
                                1 == a
                                  ? 5 == t
                                    ? 1 == l
                                      ? s.push(e)
                                      : 2 == l && r.push(e)
                                    : s.push(e)
                                  : 2 == a &&
                                    (5 == t
                                      ? 1 == l
                                        ? i.push(e)
                                        : 2 == l && o.push(e)
                                      : i.push(e));
                              }),
                              e && 1 == e.segmentList.length
                                ? {
                                    firstList: e.segmentList,
                                    secondList: i,
                                    goCenterList: r,
                                    backCenterList: o,
                                    numberAll: n,
                                  }
                                : (0 == s.length &&
                                    0 == i &&
                                    e.segmentList.length > 1 &&
                                    ((s[0] = e.segmentList[0]),
                                    (i[0] = e.segmentList[1])),
                                  {
                                    firstList: s,
                                    secondList: i,
                                    goCenterList: r,
                                    backCenterList: o,
                                    numberAll: n,
                                  })
                            );
                        },
                      },
                      {
                        key: "isCanTogeRefund",
                        value: function (e) {
                          var t = this.state.selectTicketObj,
                            n = 0,
                            s = null,
                            i = {};
                          Object.keys(t).forEach(function (e) {
                            var r = t[e];
                            r.isSelected &&
                              (r.limits &&
                                r.limits.forEach(function (e) {
                                  "ORDERKEY" == e.code &&
                                    e.info &&
                                    (i[e.info] = r);
                                }),
                              n++,
                              (s = r));
                          });
                          var r = null;
                          return (
                            e.judgeIsTigetherKey &&
                              i &&
                              "{}" !== JSON.stringify(i) &&
                              (i[e.judgeIsTigetherKey] ||
                                Object.keys(i).forEach(function (e) {
                                  r = i[e];
                                })),
                            {
                              canNotTogetherPerson: r,
                              selectNum: n,
                              selectOnePerson: s,
                            }
                          );
                        },
                      },
                      {
                        key: "getMustRefundObjTogether",
                        value: function (e) {
                          var t = this,
                            n = {};
                          return (
                            Object.keys(e).forEach(function (s) {
                              var i = e[s];
                              i &&
                                i.isSelected &&
                                t.refundModel.segmentList.forEach(function (e) {
                                  e.tickets &&
                                    e.tickets.forEach(function (e) {
                                      e.token &&
                                        e.canRefund &&
                                        !e.isSelected &&
                                        i.mustTogetherToken &&
                                        i.mustTogetherToken[e.token] &&
                                        (n[e.token] = e);
                                    });
                                });
                            }),
                            n
                          );
                        },
                      },
                      {
                        key: "handleAllPassenger",
                        value: function (e) {
                          if (e && e.length) {
                            var t = [],
                              n = !1;
                            return (
                              e.forEach(function (e) {
                                e.tickets.forEach(function (e) {
                                  (e.reason = e.canRefund
                                    ? ""
                                    : e.unrefundableReason),
                                    e.canRefund && (n = !0),
                                    t.push(e);
                                });
                              }),
                              { allTickets: t, havePeopleRefund: n }
                            );
                          }
                        },
                      },
                      {
                        key: "handleFlightInfoData",
                        value: function (e, t) {
                          return {
                            type: this.handleGetType(e, t),
                            route:
                              e.centerRoute ||
                              e.departCityName + "-" + e.arriveCityName,
                            isGo: t,
                            isGoAndBack: this.state.isGoAndBack,
                            departDate: m()(e.departDateTime).format(
                              "MM月DD日 HH:mm"
                            ),
                          };
                        },
                      },
                      {
                        key: "handleGetType",
                        value: function (e) {
                          var t =
                              !(
                                arguments.length > 1 && void 0 !== arguments[1]
                              ) || arguments[1],
                            n = this.state,
                            s = n.goCenterList,
                            i = n.backCenterList,
                            r = n.orderType,
                            o = t ? s : i,
                            a = o.length > 0 && !e.centerRoute;
                          return 2 == r
                            ? t
                              ? b
                              : C
                            : 4 == r
                            ? t
                              ? S
                              : R
                            : 3 == r
                            ? t
                              ? I
                              : w
                            : 5 == r
                            ? ""
                                .concat(t ? b : C)
                                .concat(
                                  a
                                    ? 1 == e.segmentIndex.sequenceNum
                                      ? "" + O
                                      : "" + x
                                    : ""
                                )
                            : "";
                        },
                      },
                      {
                        key: "returnFlightInfo",
                        value: function (e) {
                          var t = e.type,
                            n = e.route,
                            s = e.departDate;
                          return (0, L.BX)(p.View, {
                            className: "operate-hd",
                            children: [
                              t &&
                                (0, L.tZ)(p.View, {
                                  className: "tag",
                                  children: t,
                                }),
                              (0, L.tZ)(p.View, {
                                className: "tit",
                                children: n,
                              }),
                              (0, L.BX)(p.View, {
                                className: "rbox",
                                children: [s, "起飞"],
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "renderItemView",
                        value: function (e) {
                          var t = this,
                            n =
                              !(
                                arguments.length > 1 && void 0 !== arguments[1]
                              ) || arguments[1],
                            s = arguments.length > 2 ? arguments[2] : void 0;
                          if (!e || !e.length) return null;
                          var i = this.state,
                            r = i.selectTicketObj,
                            o = i.mustRefundTothger,
                            a = this.handleAllPassenger(e),
                            l = a.allTickets,
                            c = this.handleFlightInfoData(e[0].segmentInfo, n);
                          return (
                            (e[0].type = c.type),
                            console.log("---allTickets---", l),
                            (0, L.BX)(p.View, {
                              className: "white-box operate-box",
                              children: [
                                e.length > 0 && this.returnFlightInfo(c),
                                (0, L.tZ)(p.View, {
                                  className: "operate-bd",
                                  children:
                                    l &&
                                    l.map(function (n, i) {
                                      return (
                                        (n.segmentIdx = s),
                                        (n.ticketIdx = i),
                                        (n.route = c.route),
                                        (n.departCityName =
                                          e[0].segmentInfo.departCityName),
                                        (n.arriveCityName =
                                          e[0].segmentInfo.arriveCityName),
                                        (n.keySelect =
                                          n.passengerName +
                                          c.route +
                                          c.departDate),
                                        (n.isSelected =
                                          r[n.keySelect] &&
                                          r[n.keySelect].isSelected),
                                        (n.isShowYellow =
                                          !!n.token && !!o[n.token]),
                                        (n.otherTogetherMessage =
                                          n.mustTogetherToken &&
                                          t.getMessageOtherTogether(n, o)),
                                        console.log("---item---", n),
                                        (0, L.BX)(L.HY, {
                                          children: [
                                            (0, L.BX)(p.View, {
                                              className: "item ".concat(
                                                n.reason ? "disabled" : ""
                                              ),
                                              id: "AbAT",
                                              onClick:
                                                t.onRefundTicketClick.bind(
                                                  t,
                                                  n
                                                ),
                                              children: [
                                                (0, L.tZ)(p.View, {
                                                  className: "name ".concat(
                                                    n.isShowYellow
                                                      ? "twarn"
                                                      : ""
                                                  ),
                                                  children: n.passengerName,
                                                }),
                                                n.reason
                                                  ? (0, L.tZ)(p.View, {
                                                      className: "rbox",
                                                      children: n.reason,
                                                    })
                                                  : (0, L.tZ)(p.Text, {
                                                      className:
                                                        "iconfont ".concat(
                                                          n.isSelected
                                                            ? "ifont-radioed"
                                                            : "ifont-radio"
                                                        ),
                                                    }),
                                              ],
                                            }),
                                            n.otherTogetherMessage &&
                                              (0, L.BX)(p.View, {
                                                className: "tips",
                                                children: [
                                                  (0, L.tZ)(p.Text, {
                                                    className:
                                                      "ifont-line-tips iconfont",
                                                  }),
                                                  (0, L.tZ)(p.View, {
                                                    className: "cont",
                                                    children:
                                                      n.otherTogetherMessage,
                                                  }),
                                                ],
                                              }),
                                          ],
                                        })
                                      );
                                    }),
                                }),
                              ],
                            })
                          );
                        },
                      },
                      {
                        key: "getMessageOtherTogether",
                        value: function (e, t) {
                          var n = "";
                          return (
                            e.mustTogetherToken &&
                              Object.keys(e.mustTogetherToken).forEach(
                                function (e) {
                                  var s = t[e];
                                  s &&
                                    (n = "需要和「"
                                      .concat(s.departCityName, "-")
                                      .concat(s.arriveCityName, "」")
                                      .concat(
                                        s.passengerName,
                                        "的行程一起退票"
                                      ));
                                }
                              ),
                            n
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.firstList,
                            n = e.secondList,
                            s = e.goCenterList,
                            i = e.backCenterList;
                          return (0, L.BX)(p.View, {
                            className: N ? "ty" : "zx",
                            children: [
                              (0, L.BX)(p.View, {
                                className: "wrap",
                                children: [
                                  this.renderItemView(t, !0, 1),
                                  !!s && this.renderItemView(s, !0, 2),
                                  this.renderItemView(n, !1, 3),
                                  !!i && this.renderItemView(i, !1, 4),
                                ],
                              }),
                              (0, L.tZ)(p.View, {
                                className: "fixed-bottm",
                                children: (0, L.tZ)(p.Button, {
                                  className: "btn-next btn-primary",
                                  id: "AbAU",
                                  onClick: this.goNext,
                                  children: "下一步",
                                }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(h.PureComponent))
              ) || s;
          Page(
            (0, i.createPageConfig)(
              Z,
              "pages/flightAfterSale/refundOperate/refundOperate",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "选择退票乘客",
                backgroundColor: "#5495e6",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(76162);
        }),
          e.O();
      },
    ]);
})();
