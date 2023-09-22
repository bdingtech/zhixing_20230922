!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [22715],
      {
        23912: function (e, t, n) {
          var a,
            o = n(32180),
            r = n(79301),
            s = n(95308),
            c = n(57042),
            i = n(24460),
            u = n(81876),
            l = n(21867),
            h = n(86066),
            p = n(45023),
            d = n(52500),
            f = n(8271),
            m = n.n(f),
            v = n(71515),
            g = n(92954),
            k = n.n(g),
            w = n(49120),
            Z = n(79910),
            C = n(81957),
            y = n(3205),
            N = n(58676),
            x = n(17782),
            T = n(48813),
            b =
              (0, C.h)()(
                (a = (function (e) {
                  (0, l.Z)(n, e);
                  var t = (0, h.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, c.Z)(this, n),
                      (a = t.call(this, e)),
                      (0, p.Z)((0, u.Z)(a), "pageId", "10650089490"),
                      (a.state = {
                        employeeName: "",
                        shopId: "",
                        accountLevel: void 0,
                        qrData: "",
                        dayCount: 0,
                      }),
                      a
                    );
                  }
                  return (
                    (0, i.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, a;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            (0, g.getCurrentInstance)().router
                                              .params || {}),
                                          (n = t.employeeName),
                                          (a = void 0 === n ? "" : n),
                                          this.setState({ employeeName: a }),
                                          (e.next = 4),
                                          this.shopLogin()
                                        );
                                      case 4:
                                        return (
                                          console.log(
                                            "after onLoad shopLogin",
                                            this.state.shopId
                                          ),
                                          (e.next = 7),
                                          this.getCouponUseRecord()
                                        );
                                      case 7:
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
                        key: "useCoupon",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              var t;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          (0, x.Y2)(
                                            {
                                              shopId: this.state.shopId,
                                              couponCode: this.state.qrData,
                                            },
                                            {
                                              checkLogin: !0,
                                              checkFrameworkLogin: !0,
                                            }
                                          )
                                        );
                                      case 3:
                                        return (
                                          1 !== (t = e.sent).resultCode &&
                                            (0, w.showToast)(
                                              t.resultMsg ||
                                                t.resultMessage ||
                                                "网络开小差了，请稍后再试"
                                            ),
                                          (0, w.showToast)(
                                            t.resultMsg || t.resultMessage
                                          ),
                                          e.abrupt("return", !0)
                                        );
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(0)),
                                          (0, w.showToast)(
                                            e.t0.message ||
                                              "网络开小差了，请稍后再试"
                                          );
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 9]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getCouponUseRecord",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              var t;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          console.log("getCouponUseRecord 0"),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          (0, x.CD)(
                                            {
                                              startTime:
                                                m()().format("YYYY-MM-DD"),
                                              endTime: m()()
                                                .add(1, "day")
                                                .format("YYYY-MM-DD"),
                                              shopId: this.state.shopId,
                                              operationType: 2,
                                              page: -1,
                                            },
                                            {
                                              checkLogin: !0,
                                              checkFrameworkLogin: !0,
                                            }
                                          )
                                        );
                                      case 4:
                                        1 !== (t = e.sent).resultCode &&
                                          (0, w.showToast)(
                                            t.resultMessage ||
                                              "网络开小差了，请稍后再试"
                                          ),
                                          this.setState({
                                            dayCount:
                                              Object(t.couponlist).length || 0,
                                          }),
                                          (e.next = 13);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(1)),
                                          console.log(
                                            "getCouponUseRecord 5",
                                            e.t0
                                          ),
                                          (0, w.showToast)(
                                            e.t0.message ||
                                              "网络开小差了，请稍后再试"
                                          );
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 9]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "scanCode",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              var t = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (this.state.shopId) {
                                          e.next = 3;
                                          break;
                                        }
                                        return (
                                          (0, w.showToast)("请先完成商家认证"),
                                          e.abrupt("return")
                                        );
                                      case 3:
                                        k().scanCode({
                                          success: function (e) {
                                            setTimeout(function () {
                                              t.setState({ qrData: e.result }),
                                                t.showMultiButtonDialog({
                                                  content: "是否确认核销该券",
                                                  leftButtonName: "取消",
                                                  rightButtonName: "确认",
                                                  onRightButtonClick:
                                                    function () {
                                                      t.useCoupon();
                                                    },
                                                });
                                            }, 500);
                                          },
                                          fail: function () {
                                            (0, w.showToast)(
                                              "请扫描正确二维码"
                                            );
                                          },
                                        });
                                      case 4:
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
                        key: "redirectToCouponRecordPage",
                        value: function () {
                          y.Z.twebview({
                            data: {
                              url: "https://m.suanya.com/webapp/train/activity/20210714-ztrip-station-coupon-verification-for-retailer/verification",
                            },
                          });
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          var e = k().getCurrentPages();
                          (e ? e.length : 1) > 1
                            ? k().navigateBack()
                            : Z.Z.relaunchHome();
                        },
                      },
                      {
                        key: "redirectToPersonalCenter",
                        value: function () {
                          y.Z.twebview({
                            data: {
                              url: "https://m.suanya.com/webapp/train/activity/20210714-ztrip-station-coupon-verification-for-retailer/",
                            },
                          });
                        },
                      },
                      {
                        key: "shopLogin",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              var t;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          (0, x.PM)(
                                            {},
                                            {
                                              checkLogin: !0,
                                              checkFrameworkLogin: !0,
                                            }
                                          )
                                        );
                                      case 3:
                                        1 !== (t = e.sent).resultCode &&
                                          (0, w.showToast)(
                                            t.resultMessage ||
                                              "网络开小差了，请稍后再试"
                                          ),
                                          this.setState({
                                            shopId: t.shopId,
                                            accountLevel: t.accountLevel,
                                            shopName: t.shopName,
                                          }),
                                          (e.next = 11);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          (0, w.showToast)(
                                            "网络开小差了，请稍后再试"
                                          );
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 8]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "doLogin",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          this.shopLogin()
                                        );
                                      case 3:
                                        return (
                                          console.log(
                                            "after shopLogin",
                                            this.state.shopId
                                          ),
                                          (e.next = 6),
                                          this.getCouponUseRecord()
                                        );
                                      case 6:
                                        e.next = 11;
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          (0, w.showToast)("取消登录");
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 8]]
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
                          var e,
                            t = this,
                            n = this.state,
                            a = n.shopId,
                            o = n.accountLevel,
                            r = n.shopName,
                            s = n.employeeName,
                            c = n.dayCount;
                          return (
                            (e =
                              2 === o
                                ? (0, T.BX)(v.View, {
                                    else: !0,
                                    id: "AeCP",
                                    onClick: this.redirectToPersonalCenter,
                                    className: "scan-container-header",
                                    children: [
                                      (0, T.tZ)(v.Text, {
                                        className: "title",
                                        children: s || r,
                                      }),
                                      (0, T.tZ)(v.Icon, {
                                        className: "ifont-back",
                                        children: ">",
                                      }),
                                    ],
                                  })
                                : a
                                ? (0, T.BX)(v.View, {
                                    else: !0,
                                    id: "AeCQ",
                                    onClick: this.redirectToPersonalCenter,
                                    className: "scan-container-header",
                                    children: [
                                      (0, T.tZ)(v.Text, {
                                        className: "title",
                                        children: r,
                                      }),
                                      (0, T.tZ)(v.Icon, {
                                        className: "ifont-back",
                                        children: ">",
                                      }),
                                    ],
                                  })
                                : (0, T.BX)(v.View, {
                                    else: !0,
                                    id: "AeCR",
                                    onClick: this.redirectToPersonalCenter,
                                    className: "scan-container-header",
                                    children: [
                                      (0, T.tZ)(v.Text, {
                                        className: "title",
                                        children: "待完成商家认证",
                                      }),
                                      (0, T.tZ)(v.Icon, {
                                        className: "ifont-back",
                                        children: ">",
                                      }),
                                    ],
                                  })),
                            (0, T.tZ)(v.Block, {
                              children: (0, T.BX)(v.View, {
                                className: "body",
                                children: [
                                  (0, T.tZ)(v.Icon, {
                                    id: "AeCS",
                                    onClick: this.onBack,
                                    className: "ifont-back ifont-large",
                                    children: "1",
                                  }),
                                  (0, T.BX)(v.View, {
                                    className: "scan-container",
                                    children: [
                                      e,
                                      (0, T.BX)(v.View, {
                                        className: "scan-container-body",
                                        children: [
                                          (0, T.BX)(v.View, {
                                            className: "scan-amount",
                                            children: [
                                              (0, T.tZ)(v.View, {
                                                className: "scan-amount-top",
                                                children: "今日已核销优惠券",
                                              }),
                                              (0, T.BX)(v.View, {
                                                className: "scan-amount-bottom",
                                                children: [
                                                  (0, T.tZ)(v.Text, {
                                                    className:
                                                      "scan-amount-bottom-number",
                                                    children: c,
                                                  }),
                                                  (0, T.tZ)(v.Text, {
                                                    className:
                                                      "scan-amount-bottom-unit",
                                                    children: "张",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, T.tZ)(v.Button, {
                                            className: "scan-button",
                                            id: "AeCU",
                                            onClick: this.scanCode,
                                            children: "扫描用户优惠券码",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, T.BX)(v.View, {
                                    id: "AeCX",
                                    onClick: this.redirectToCouponRecordPage,
                                    className: "record-container",
                                    children: [
                                      (0, T.tZ)(v.Text, {
                                        children: "核销记录",
                                      }),
                                      (0, T.tZ)(v.Icon, {
                                        className: "ifont-back ifont-small",
                                        children: ">",
                                      }),
                                    ],
                                  }),
                                  (0, T.tZ)(N.Z, {
                                    ref: function (e) {
                                      t.onDialogAttach(e);
                                    },
                                  }),
                                ],
                              }),
                            })
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(d.default.Component))
              ) || a;
          Page(
            (0, o.createPageConfig)(
              b,
              "pages/activity/train/20210714-ztrip-station-coupon-verification-for-retailer-scan/index",
              { root: { cn: [] } },
              { navigationBarTextStyle: "white", navigationStyle: "custom" } ||
                {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [24945, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(23912);
        }),
          e.O();
      },
    ]);
})();
