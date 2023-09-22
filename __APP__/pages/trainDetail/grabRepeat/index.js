!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [56771],
      {
        59355: function (e, t, r) {
          var a,
            i = r(32180),
            s = r(93212),
            n = r(298),
            l = r(22276),
            c = r(57042),
            o = r(24460),
            d = r(21867),
            m = r(86066),
            u = r(52500),
            h = r(71515),
            p = r(79792),
            N = r(81957),
            b = r(92954),
            S = r(49120),
            Z = r(4102),
            T = r(25391),
            w = r(34229),
            f = r(18783),
            g = r(93761),
            v = r(59076),
            V = r(48813),
            B = p.default.isTieyou,
            O =
              (0, N.h)()(
                (a = (function (e) {
                  (0, d.Z)(r, e);
                  var t = (0, m.Z)(r);
                  function r(e) {
                    var a;
                    return (
                      (0, c.Z)(this, r),
                      ((a = t.call(this, e)).pageId = p.default.isTieyou
                        ? "10650071220"
                        : "10650071210"),
                      (a.state = {
                        headerInfo: null,
                        tipTitle: "",
                        continueSubmitBtn: "",
                        buttonContent: "",
                        skipContinueSubmit: -1,
                        optimize: null,
                        currentGrabOrder: null,
                        repeatGrabOrder: null,
                        repeatOrderState: "",
                        mergeSuccessModalVisible: !1,
                        mergeSuccessModalInfo: null,
                      }),
                      a.newUbtTrace(203744, {
                        exposureType: "normal",
                        bizKey: "z_trip_conflict_intercept_show",
                      }),
                      a
                    );
                  }
                  return (
                    (0, o.Z)(r, [
                      {
                        key: "onLoad",
                        value: function () {
                          var e =
                            (0, b.getCurrentInstance)().router &&
                            (0, b.getCurrentInstance)().router.params;
                          this.handleParams(e.data);
                        },
                      },
                      {
                        key: "handleParams",
                        value: function (e) {
                          var t = e.continueSubmitBtn,
                            r = e.buttonContent,
                            a = e.optimize,
                            i = e.currentGrabOrder,
                            s = e.repeatGrabOrder,
                            n = e.skipContinueSubmit,
                            l = e.goGrabRate,
                            c = {},
                            o = "同线路";
                          1 === s.seatFlag &&
                            1 === s.trainNumFlag &&
                            (o = "相同"),
                            "一键合并订单" == r
                              ? this.newUbtTrace(203744, {
                                  exposureType: "normal",
                                  bizKey:
                                    "z_trip_conflict_intercept_merge_show",
                                })
                              : "优化抢票中订单" == r &&
                                this.newUbtTrace(203744, {
                                  exposureType: "normal",
                                  bizKey: "z_trip_conflict_intercept_opt_show",
                                }),
                            (c.title = "已存在" + o + "订单"),
                            (c.subTitle =
                              "再次提交可能导致行程冲突、抢票失败哦！"),
                            i &&
                              ((i.departDateList = i.departDates
                                .split(",")
                                .map(function (e) {
                                  return Z.Z.formatDate(e, "MM月DD日");
                                })),
                              (i.departDatesStr = i.departDateList.join("、")),
                              (i.trainNumList = i.trainNums.split(",")),
                              (i.trainNumsStr = i.trainNumList.join("、")),
                              (i.seatList = i.seats.split(",")),
                              (i.seatsStr = i.seatList.join("、")));
                          var d,
                            m,
                            u = "抢票中";
                          s &&
                            ((s.departDateList = s.departDates
                              .split(",")
                              .map(function (e) {
                                return Z.Z.formatDate(e, "MM月DD日");
                              })),
                            (s.departDatesStr = s.departDateList.join("、")),
                            (s.trainNumList = s.trainNums.split(",")),
                            (s.trainNumsStr = s.trainNumList.join("、")),
                            (s.seatList =
                              (null == s ||
                              null === (d = s.seats) ||
                              void 0 === d ||
                              null === (m = d.split) ||
                              void 0 === m
                                ? void 0
                                : m.call(d, ",")) || []),
                            (s.seatsStr = s.seatList.join("、")),
                            (s.orderType =
                              (null == s ? void 0 : s.orderType) || 0),
                            (u =
                              100 === s.orderState
                                ? "待支付"
                                : 999 === s.orderState
                                ? "待出行"
                                : "抢票中")),
                            this.setState({
                              headerInfo: c,
                              tipTitle: o,
                              continueSubmitBtn: t,
                              buttonContent: r,
                              skipContinueSubmit: n,
                              optimize: a,
                              currentGrabOrder: i,
                              repeatGrabOrder: s,
                              repeatOrderState: u,
                              goGrabRate: l,
                            });
                        },
                      },
                      {
                        key: "mergeOrOptimizeOrder",
                        value: function () {
                          var e = this.state,
                            t = e.repeatGrabOrder,
                            r = e.buttonContent;
                          100 === t.orderState && 0 === t.orderType
                            ? this.goGrabOrder()
                            : 100 === t.orderState && 1 === t.orderType
                            ? this.goToTrainShelves()
                            : 100 === t.orderState && 2 === t.orderType
                            ? this.goToSmartDetail()
                            : 999 === t.orderState && 1 === t.orderType
                            ? this.goToTrainOrderDetail()
                            : 999 === t.orderState && 2 === t.orderType
                            ? this.goToSmartDetail()
                            : 300 === t.orderState &&
                              ("优化抢票中订单" === r
                                ? (this.newUbtTrace(203746, {
                                    bizKey:
                                      "z_trip_conflict_intercept_merge_click",
                                  }),
                                  this.goGrabOrder())
                                : (this.newUbtTrace(203746, {
                                    bizKey:
                                      "z_trip_conflict_intercept_merge_click",
                                  }),
                                  this.updateOrder()));
                        },
                      },
                      {
                        key: "goGrabOrder",
                        value: function () {
                          var e = this.state.repeatGrabOrder;
                          this.redirectTo({
                            url: T.ZP.getTrainGrabOrderDetailUrl(e.orderNumber),
                          });
                        },
                      },
                      {
                        key: "goToSmartDetail",
                        value: function () {
                          var e = this.state.repeatGrabOrder;
                          this.redirectTo({
                            url: T.ZP.getSmartOrderDetail(e.orderNumber),
                          });
                        },
                      },
                      {
                        key: "goToTrainOrderDetail",
                        value: function () {
                          var e = this.state.repeatGrabOrder;
                          this.redirectTo({
                            url: T.ZP.getTrainOrderDetail(e.orderNumber),
                          });
                        },
                      },
                      {
                        key: "goToTrainShelves",
                        value: function () {
                          var e = this.state.repeatGrabOrder;
                          this.redirectTo({
                            url: T.ZP.getTrainShelves(e.orderNumber),
                          });
                        },
                      },
                      {
                        key: "updateOrder",
                        value: function () {
                          var e = this,
                            t = this.state,
                            r = t.currentGrabOrder,
                            a = void 0 === r ? {} : r,
                            i = t.repeatGrabOrder,
                            s = void 0 === i ? {} : i,
                            c = Array.from(
                              new Set(
                                [].concat(
                                  (0, l.Z)(a.departDateList),
                                  (0, l.Z)(s.departDateList)
                                )
                              )
                            ),
                            o = Array.from(
                              new Set(
                                [].concat(
                                  (0, l.Z)(a.trainNumList),
                                  (0, l.Z)(s.trainNumList)
                                )
                              )
                            ),
                            d = Array.from(
                              new Set(
                                [].concat(
                                  (0, l.Z)(a.seatList),
                                  (0, l.Z)(s.seatList)
                                )
                              )
                            ),
                            m = (0, n.Z)({}, s);
                          (m.router =
                            m.departStationName + " - " + m.arrivalStationName),
                            (m.departDatesStr = c.join("、")),
                            (m.trainNumsStr = o.join("、")),
                            (m.seatsStr = d.join("、")),
                            this.setState({ mergeSuccessModalInfo: m });
                          var u = {
                            orderNumber: s.orderNumber || "",
                            mobile: f.ZP.userName,
                            contactMobile: "",
                            crossStationFlag: -1,
                            speedSum: -1,
                            trainInfo: {
                              trainNo: o.join(","),
                              seatName: d.join(","),
                              fromName: s.departStationName,
                              toNam: s.arrivalStationName,
                              fromDate: s.departDates,
                              trainStationInfos: (
                                s.trainStationInfos || []
                              ).concat(a.trainStationInfos),
                            },
                            nearTrainFlag: -1,
                            crossStationInfos: [],
                          };
                          (0, v.hc)(u)
                            .then(function (t) {
                              1 == t.resultCode
                                ? t.needPay
                                  ? g.ZP.doPayment({
                                      business: "train",
                                      orderNumber: t.payOrderNumber,
                                    })
                                      .then(function () {
                                        e.openMergeSuccessModal();
                                      })
                                      .catch(function () {})
                                  : e.openMergeSuccessModal()
                                : (0, S.showToast)(t.resultMessage);
                            })
                            .catch(function (e) {
                              (0,
                              S.showToast)(e || "系统异常，提交订单失败。我们正在努力修复，请稍候再试");
                            });
                        },
                      },
                      {
                        key: "openMergeSuccessModal",
                        value: function () {
                          this.setState({ mergeSuccessModalVisible: !0 });
                        },
                      },
                      {
                        key: "newUbtTrace",
                        value: function (e, t) {
                          t = t && "object" == (0, s.Z)(t) ? t : {};
                          try {
                            this.ubtTrace(
                              e,
                              (0, n.Z)(
                                {
                                  openId: f.ZP.openid || "",
                                  userName: f.ZP.userName || "",
                                  cid: f.ZP.cid || "",
                                },
                                t
                              )
                            );
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.headerInfo,
                            r = e.tipTitle,
                            a = e.continueSubmitBtn,
                            i = e.buttonContent,
                            s = e.skipContinueSubmit,
                            n = e.optimize,
                            l = e.currentGrabOrder,
                            c = e.repeatGrabOrder,
                            o = e.repeatOrderState,
                            d = e.mergeSuccessModalVisible,
                            m = e.mergeSuccessModalInfo,
                            u = e.goGrabRate;
                          return (0, V.BX)(h.View, {
                            className: "grab-repeat ".concat(B ? "ty" : "zx"),
                            children: [
                              (0, V.tZ)(h.View, {
                                className: "header",
                                children: (0, V.BX)(h.View, {
                                  className: "order-top",
                                  children: [
                                    (0, V.tZ)(h.View, { className: "icon" }),
                                    (0, V.BX)(h.View, {
                                      className: "right-box",
                                      children: [
                                        (0, V.tZ)(h.View, {
                                          className: "title",
                                          children:
                                            (null == t ? void 0 : t.title) ||
                                            "",
                                        }),
                                        (0, V.tZ)(h.View, {
                                          className: "sub-title",
                                          children:
                                            (null == t ? void 0 : t.subTitle) ||
                                            "",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, V.BX)(h.View, {
                                className: "container",
                                children: [
                                  l &&
                                    (0, V.BX)(h.View, {
                                      className: "current-order order-box",
                                      children: [
                                        (0, V.tZ)(h.View, {
                                          className: "title",
                                          children: "本次提交订单",
                                        }),
                                        (0, V.BX)(h.View, {
                                          className: "order-info",
                                          children: [
                                            (0, V.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, V.tZ)(h.Text, {
                                                  className: "label",
                                                  children: "行程",
                                                }),
                                                (0, V.tZ)(h.Text, {
                                                  className: "value",
                                                  children:
                                                    l.departStationName +
                                                    " - " +
                                                    l.arrivalStationName,
                                                }),
                                              ],
                                            }),
                                            (0, V.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, V.tZ)(h.Text, {
                                                  className: "label",
                                                  children: "日期",
                                                }),
                                                (0, V.tZ)(h.Text, {
                                                  className: "value",
                                                  children: l.departDatesStr,
                                                }),
                                              ],
                                            }),
                                            (0, V.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, V.tZ)(h.Text, {
                                                  className: "label",
                                                  children: "车次",
                                                }),
                                                (0, V.tZ)(h.Text, {
                                                  className: "value",
                                                  children: l.trainNumsStr,
                                                }),
                                              ],
                                            }),
                                            (0, V.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, V.tZ)(h.Text, {
                                                  className: "label",
                                                  children: "座席",
                                                }),
                                                (0, V.tZ)(h.Text, {
                                                  className: "value",
                                                  children: l.seatsStr,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  c &&
                                    (0, V.BX)(h.View, {
                                      className: "repeat-order order-box",
                                      children: [
                                        (0, V.BX)(h.View, {
                                          className: "title",
                                          children: [
                                            (0, V.tZ)(h.Icon, {
                                              className: "icon-loading",
                                            }),
                                            o,
                                            r,
                                            "订单",
                                          ],
                                        }),
                                        (0, V.BX)(h.View, {
                                          className: "order-info",
                                          children: [
                                            (0, V.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, V.tZ)(h.Text, {
                                                  className: "label",
                                                  children: "行程",
                                                }),
                                                (0, V.tZ)(h.Text, {
                                                  className: "value",
                                                  children:
                                                    c.departStationName +
                                                    " - " +
                                                    c.arrivalStationName,
                                                }),
                                              ],
                                            }),
                                            (0, V.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, V.tZ)(h.Text, {
                                                  className: "label",
                                                  children: "日期",
                                                }),
                                                (0, V.tZ)(h.Text, {
                                                  className: "value",
                                                  children: c.departDatesStr,
                                                }),
                                              ],
                                            }),
                                            (0, V.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, V.tZ)(h.Text, {
                                                  className: "label",
                                                  children: "车次",
                                                }),
                                                (0, V.tZ)(h.Text, {
                                                  className: "value",
                                                  children: c.trainNumsStr,
                                                }),
                                              ],
                                            }),
                                            (0, V.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, V.tZ)(h.Text, {
                                                  className: "label",
                                                  children: "座席",
                                                }),
                                                (0, V.tZ)(h.Text, {
                                                  className: "value",
                                                  children: c.seatsStr,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  n &&
                                    (0, V.BX)(h.View, {
                                      className: "optimize-tips",
                                      children: [
                                        (0, V.tZ)(h.View, {
                                          className: "icon-tips",
                                        }),
                                        (0, V.tZ)(w.ZtRichText, {
                                          nodes: n.content,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, V.tZ)(h.View, {
                                className: "footer",
                                children: (0, V.BX)(h.Block, {
                                  children: [
                                    1 === s &&
                                      a &&
                                      (0, V.tZ)(h.Button, {
                                        className: "btn create-order",
                                        id: "AJBK",
                                        onClick: u,
                                        children: a,
                                      }),
                                    (0, V.tZ)(h.Button, {
                                      className: "btn optimize-order",
                                      id: "AJBL",
                                      onClick: this.mergeOrOptimizeOrder,
                                      children: i,
                                    }),
                                  ],
                                }),
                              }),
                              m &&
                                (0, V.BX)(w.ZtActivityPop, {
                                  className: "merge-success-modal",
                                  show: d,
                                  isShowClose: !1,
                                  children: [
                                    (0, V.tZ)(h.View, {
                                      className: "top-img",
                                      children: (0, V.tZ)(h.View, {
                                        className: "img",
                                      }),
                                    }),
                                    (0, V.tZ)(h.View, {
                                      className: "title",
                                      children: "成功合并抢票订单",
                                    }),
                                    (0, V.BX)(h.View, {
                                      className: "content",
                                      children: [
                                        (0, V.BX)(h.View, {
                                          className: "item",
                                          children: [
                                            (0, V.tZ)(h.View, {
                                              className: "label",
                                              children: "行程",
                                            }),
                                            (0, V.tZ)(h.View, {
                                              className: "value",
                                              children: m.router,
                                            }),
                                          ],
                                        }),
                                        (0, V.BX)(h.View, {
                                          className: "item",
                                          children: [
                                            (0, V.tZ)(h.View, {
                                              className: "label",
                                              children: "日期",
                                            }),
                                            (0, V.tZ)(h.View, {
                                              className: "value",
                                              children: m.departDatesStr,
                                            }),
                                          ],
                                        }),
                                        (0, V.BX)(h.View, {
                                          className: "item",
                                          children: [
                                            (0, V.tZ)(h.View, {
                                              className: "label",
                                              children: "车次",
                                            }),
                                            (0, V.tZ)(h.View, {
                                              className: "value",
                                              children: m.trainNumsStr,
                                            }),
                                          ],
                                        }),
                                        (0, V.BX)(h.View, {
                                          className: "item",
                                          children: [
                                            (0, V.tZ)(h.View, {
                                              className: "label",
                                              children: "座席",
                                            }),
                                            (0, V.tZ)(h.View, {
                                              className: "value",
                                              children: m.seatsStr,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, V.tZ)(h.View, {
                                      className: "merge-success-modal-footer",
                                      children: (0, V.tZ)(h.View, {
                                        className: "btn",
                                        id: "AJBM",
                                        onClick: this.goGrabOrder,
                                        children: "查看抢票详情",
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    r
                  );
                })(u.Component))
              ) || a;
          Page(
            (0, i.createPageConfig)(
              O,
              "pages/trainDetail/grabRepeat/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [93611, 3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(59355);
        }),
          e.O();
      },
    ]);
})();
