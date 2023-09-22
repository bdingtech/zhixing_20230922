!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [83851],
    {
      76977: function (e, i, t) {
        t.d(i, {
          Z: function () {
            return x;
          },
        });
        var n,
          o = t(298),
          s = t(79301),
          a = t(95308),
          r = t(57042),
          c = t(24460),
          l = t(81876),
          u = t(21867),
          p = t(86066),
          h = t(45023),
          d = t(52500),
          f = t(8271),
          v = t.n(f),
          _ = t(92954),
          y = t.n(_),
          m = t(46931),
          w = t(34229),
          k = t(71515),
          b = t(81957),
          C = t(3106),
          I = t(62240),
          T = t(31495),
          S = t(48813),
          g = "BUS_FIX_COUPON_TIP_STRORAGE",
          x =
            (0, b.h)(!0)(
              (n = (function (e) {
                (0, u.Z)(t, e);
                var i = (0, p.Z)(t);
                function t(e) {
                  var n;
                  return (
                    (0, r.Z)(this, t),
                    (n = i.call(this, e)),
                    (0, h.Z)((0, l.Z)(n), "$CashBack1stOrder", null),
                    (0, h.Z)((0, l.Z)(n), "$BusIndexCouponModal", null),
                    (n.state = { tipInfo: null, isShow: null, isBeInSide: !1 }),
                    n
                  );
                }
                return (
                  (0, c.Z)(t, [
                    {
                      key: "componentDidUpdate",
                      value: function (e, i) {
                        var t, n, o, s, a, r, c;
                        (e.fixCouponTab !== this.props.fixCouponTab &&
                          this.isFixCouponEntry() &&
                          this.initGetTripInfo(),
                        i.isShow !== this.state.isShow && this.state.isShow) &&
                          (this.isFixCouponEntry() &&
                            (this.doTrace(
                              {
                                typeSnd: "list_coupons_show",
                                comment: "列表页_浮标曝光",
                                coupons_type:
                                  null !== (t = this.state.tipInfo) &&
                                  void 0 !== t &&
                                  t.isReceive
                                    ? 1
                                    : 2,
                              },
                              0
                            ),
                            this.doNewTrace(
                              {
                                exposureType: "actionbar",
                                bizKey: "list_coupons_show",
                                comment: "列表页_浮标曝光",
                              },
                              1
                            )),
                          this.isCashBackEntry() &&
                            (this.isFromBookPage()
                              ? this.doNewTrace(
                                  {
                                    exposureType: "actionbar",
                                    bizKey:
                                      null !== (n = this.state.tipInfo) &&
                                      void 0 !== n &&
                                      n.isFreeOrderUser
                                        ? "writepage_notfirstorder_banner_show"
                                        : "writepage_qef_banner_show",
                                    comment:
                                      null !== (o = this.state.tipInfo) &&
                                      void 0 !== o &&
                                      o.isFreeOrderUser
                                        ? "非首单填写页浮标曝光"
                                        : "填写页全额返banner曝光",
                                  },
                                  1
                                )
                              : (this.doTrace(
                                  {
                                    typeSnd:
                                      null !== (s = this.state.tipInfo) &&
                                      void 0 !== s &&
                                      s.isFreeOrderUser
                                        ? "listpage_notfirstorder_banner_show"
                                        : "listpage_qef_banner_show",
                                    comment:
                                      null !== (a = this.state.tipInfo) &&
                                      void 0 !== a &&
                                      a.isFreeOrderUser
                                        ? "非首单列表页浮标曝光"
                                        : "列表页全额返banner曝光",
                                  },
                                  0
                                ),
                                this.doNewTrace(
                                  {
                                    exposureType: "actionbar",
                                    bizKey:
                                      null !== (r = this.state.tipInfo) &&
                                      void 0 !== r &&
                                      r.isFreeOrderUser
                                        ? "listpage_notfirstorder_banner_show"
                                        : "listpage_qef_banner_show",
                                    comment:
                                      null !== (c = this.state.tipInfo) &&
                                      void 0 !== c &&
                                      c.isFreeOrderUser
                                        ? "非首单列表页浮标曝光"
                                        : "列表页全额返banner曝光",
                                  },
                                  1
                                ))));
                      },
                    },
                    {
                      key: "componentDidShow",
                      value: function () {
                        this.initGetTripInfo();
                      },
                    },
                    {
                      key: "initGetTripInfo",
                      value: function () {
                        this.setState(
                          { tipInfo: null, isShow: !1 },
                          this.getTipInfo.bind(this)
                        );
                      },
                    },
                    {
                      key: "isFromBookPage",
                      value: function () {
                        return this.props.onlyCashback1stOrder;
                      },
                    },
                    {
                      key: "getTipInfo",
                      value: (function () {
                        var e = (0, a.Z)(
                          (0, s.Z)().mark(function e() {
                            var i, t, n, o;
                            return (0, s.Z)().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        (0, m.zC)({
                                          basicParams: {
                                            bigChannel:
                                              (null === (i = this.props) ||
                                              void 0 === i
                                                ? void 0
                                                : i.fixCouponTab) || "bus",
                                          },
                                          fromPage: "xcxNewUser",
                                        })
                                      );
                                    case 3:
                                      (o = e.sent),
                                        this.setState(
                                          {
                                            tipInfo:
                                              1 === o.code &&
                                              Object.keys(o.data).length > 0
                                                ? o.data
                                                : null,
                                            endTime:
                                              (null === (t = o.data) ||
                                              void 0 === t
                                                ? void 0
                                                : t.remainSeconds) &&
                                              v()()
                                                .add(
                                                  null === (n = o.data) ||
                                                    void 0 === n
                                                    ? void 0
                                                    : n.remainSeconds,
                                                  "second"
                                                )
                                                .format("YYYY-MM-DD HH:mm:ss"),
                                          },
                                          this.judgeNeedShow.bind(this)
                                        ),
                                        (e.next = 10);
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(0)),
                                        this.setState({
                                          tipInfo: null,
                                          endTime: null,
                                        });
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
                      key: "judgeNeedShow",
                      value: function () {
                        var e = this;
                        return new Promise(function (i) {
                          if (e.state.tipInfo)
                            if (e.isFixCouponEntry()) {
                              var t = e.props.fixCouponTab,
                                n = void 0 === t ? "bus" : t,
                                o = y().getStorageSync(g) || {};
                              i(
                                !o[n] ||
                                  v()(o[n]).isBefore(v()().format("YYYY-MM-DD"))
                              );
                            } else i(!0);
                          else i(!1);
                        }).then(function (i) {
                          e.setState({ isShow: i });
                        });
                      },
                    },
                    {
                      key: "onTimeEnd",
                      value: function () {
                        var e = this;
                        this.setState({ tipInfo: null }, function () {
                          setTimeout(e.getTipInfo.bind(e), 2e3);
                        });
                      },
                    },
                    {
                      key: "isCashBackEntry",
                      value: function () {
                        var e, i;
                        return (
                          this.state.tipInfo &&
                          ((null === (e = this.state.tipInfo) || void 0 === e
                            ? void 0
                            : e.isNewUser) ||
                            (null === (i = this.state.tipInfo) || void 0 === i
                              ? void 0
                              : i.isFreeOrderUser))
                        );
                      },
                    },
                    {
                      key: "isFixCouponEntry",
                      value: function () {
                        return (
                          this.state.tipInfo &&
                          !this.state.tipInfo.isNewUser &&
                          !this.state.tipInfo.isFreeOrderUser &&
                          !this.isFromBookPage()
                        );
                      },
                    },
                    {
                      key: "onEntryClick",
                      value: function () {
                        var e, i, t, n, o, s, a, r, c, l, u, p;
                        if (this.isCashBackEntry())
                          null === (e = this.$CashBack1stOrder) ||
                            void 0 === e ||
                            e.handleShowModal(),
                            this.isFromBookPage()
                              ? this.doNewTrace(
                                  {
                                    bizKey:
                                      null !== (i = this.state.tipInfo) &&
                                      void 0 !== i &&
                                      i.isNewUser
                                        ? "writepage_qef_banner_click"
                                        : "writepage_notfirstorder_banner_click",
                                    comment:
                                      null !== (t = this.state.tipInfo) &&
                                      void 0 !== t &&
                                      t.isNewUser
                                        ? "填写页全额返banner点击"
                                        : "非首单填写页浮标点击",
                                    clickType: C.uh.confirmClick,
                                  },
                                  2
                                )
                              : (this.doTrace({
                                  typeSnd:
                                    null !== (n = this.state.tipInfo) &&
                                    void 0 !== n &&
                                    n.isNewUser
                                      ? "listpage_qef_banner_click"
                                      : "listpage_notfirstorder_banner_click",
                                  comment:
                                    null !== (o = this.state.tipInfo) &&
                                    void 0 !== o &&
                                    o.isNewUser
                                      ? "列表页全额返banner点击"
                                      : "非首单列表页浮标点击",
                                }),
                                this.doNewTrace(
                                  {
                                    bizKey:
                                      null !== (s = this.state.tipInfo) &&
                                      void 0 !== s &&
                                      s.isNewUser
                                        ? "listpage_qef_banner_click"
                                        : "listpage_notfirstorder_banner_click",
                                    comment:
                                      null !== (a = this.state.tipInfo) &&
                                      void 0 !== a &&
                                      a.isNewUser
                                        ? "列表页全额返banner点击"
                                        : "非首单列表页浮标点击",
                                    clickType: C.uh.confirmClick,
                                  },
                                  2
                                ));
                        else if (this.isFixCouponEntry())
                          return (
                            null === (r = this.$BusIndexCouponModal) ||
                              void 0 === r ||
                              r.handleShowModal({
                                isCustomClick: !0,
                                filterTab:
                                  "point" === this.props.fixCouponTab
                                    ? "scenicArea"
                                    : "bus",
                              }),
                            this.doTrace({
                              typeSnd: "list_coupons_click",
                              comment: "列表页_浮标点击",
                              coupons_type:
                                null !== (c = this.state.tipInfo) &&
                                void 0 !== c &&
                                c.isReceive
                                  ? 1
                                  : 2,
                            }),
                            this.doTrace(
                              {
                                typeSnd: "list_coupons_pop_show",
                                comment: "列表页_浮标弹窗曝光",
                                coupons_type:
                                  null !== (l = this.state.tipInfo) &&
                                  void 0 !== l &&
                                  l.isReceive
                                    ? 1
                                    : 2,
                              },
                              0
                            ),
                            this.doNewTrace(
                              {
                                bizKey: "list_coupons_click",
                                comment: "列表页_浮标点击",
                                clickType: C.uh.confirmClick,
                                coupons_type:
                                  null !== (u = this.state.tipInfo) &&
                                  void 0 !== u &&
                                  u.isReceive
                                    ? 1
                                    : 2,
                              },
                              2
                            ),
                            void this.doNewTrace(
                              {
                                exposureType: "popup",
                                bizKey: "list_coupons_pop_show",
                                comment: "列表页_浮标弹窗曝光",
                                coupons_type:
                                  null !== (p = this.state.tipInfo) &&
                                  void 0 !== p &&
                                  p.isReceive
                                    ? 1
                                    : 2,
                              },
                              1
                            )
                          );
                      },
                    },
                    {
                      key: "onCloseClick",
                      value: function () {
                        this.setState({ isShow: !1 }),
                          this.isFixCouponEntry() &&
                            this.onFixCouponEntryClose();
                      },
                    },
                    {
                      key: "onFixCouponEntryClose",
                      value: function () {
                        var e = this.props.fixCouponTab,
                          i = void 0 === e ? "bus" : e,
                          t = y().getStorageSync(g) || {};
                        y().setStorageSync(
                          g,
                          (0, o.Z)(
                            (0, o.Z)({}, t),
                            {},
                            (0, h.Z)({}, i, v()().format("YYYY-MM-DD"))
                          )
                        );
                      },
                    },
                    {
                      key: "handleKeepModalToSide",
                      value: function () {
                        this.state.isShow && this.setState({ isBeInSide: !0 });
                      },
                    },
                    {
                      key: "handleResumeModalFromSide",
                      value: function () {
                        this.state.isShow && this.setState({ isBeInSide: !1 });
                      },
                    },
                    {
                      key: "onIndexCouponModalBtnClick",
                      value: function () {
                        var e, i;
                        this.doTrace({
                          typeSnd: "list_coupons_pop_click",
                          comment: "列表页_浮标弹窗点击",
                          coupons_type:
                            null !== (e = this.state.tipInfo) &&
                            void 0 !== e &&
                            e.isReceive
                              ? 1
                              : 2,
                        }),
                          this.doNewTrace(
                            {
                              bizKey: "list_coupons_pop_click",
                              comment: "列表页_浮标弹窗点击",
                              clickType: C.uh.confirmClick,
                              coupons_type:
                                null !== (i = this.state.tipInfo) &&
                                void 0 !== i &&
                                i.isReceive
                                  ? 1
                                  : 2,
                            },
                            2
                          );
                      },
                    },
                    {
                      key: "doTrace",
                      value: function () {
                        for (
                          var e,
                            i,
                            t = arguments.length,
                            n = new Array(t),
                            o = 0;
                          o < t;
                          o++
                        )
                          n[o] = arguments[o];
                        null === (e = (i = this.props).doBusTraceInfo) ||
                          void 0 === e ||
                          e.call.apply(e, [i].concat(n));
                      },
                    },
                    {
                      key: "doNewTrace",
                      value: function (e, i) {
                        var t, n;
                        null === (t = (n = this.props).doNewBusTraceInfo) ||
                          void 0 === t ||
                          t.call(n, e, i);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          i = this.state,
                          t = i.endTime,
                          n = i.tipInfo,
                          o = i.isShow,
                          s = i.isBeInSide;
                        return o
                          ? (0, S.BX)(k.Block, {
                              children: [
                                this.isFixCouponEntry() &&
                                  (0, S.BX)(k.View, {
                                    className: "bus-coupon-tip couponFix "
                                      .concat(t ? "an-run" : "an-breath", " ")
                                      .concat(s ? "side" : ""),
                                    id: "AAAU",
                                    onClick: this.onEntryClick.bind(this),
                                    children: [
                                      (0, S.tZ)(k.View, { className: "bg" }),
                                      (0, S.BX)(k.View, {
                                        className: "coupon-info",
                                        children: [
                                          (0, S.tZ)(k.View, {
                                            className: "price",
                                            children: n.price,
                                          }),
                                          (0, S.BX)(k.View, {
                                            className: "coupon-desc",
                                            children: ["·", n.couponTitle, "·"],
                                          }),
                                        ],
                                      }),
                                      (0, S.tZ)(k.View, {
                                        className: "btn",
                                        children: t
                                          ? (0, S.tZ)(w.ZtCountdown, {
                                              endTime: t,
                                              onTimeup:
                                                this.onTimeEnd.bind(this),
                                              isShowDay: !1,
                                              format: {
                                                hour: ":",
                                                minute: ":",
                                                second: "",
                                              },
                                              className: "coupon-tip_down",
                                            })
                                          : n.isReceive
                                          ? "立即使用"
                                          : "立即领取",
                                      }),
                                      (0, S.tZ)(k.View, {
                                        className: "btn-close",
                                        id: "AAAV",
                                        onClick: this.onCloseClick.bind(this),
                                      }),
                                    ],
                                  }),
                                this.isCashBackEntry() &&
                                  (0, S.tZ)(I.Z, {
                                    ref: function (i) {
                                      e.$CashBack1stOrder = i;
                                    },
                                    enableAutoShow: !1,
                                    onReceiveSuccess:
                                      this.getTipInfo.bind(this),
                                  }),
                                this.isFixCouponEntry() &&
                                  (0, S.tZ)(T.Z, {
                                    ref: function (i) {
                                      e.$BusIndexCouponModal = i;
                                    },
                                    onReceiveCouponSuccess:
                                      this.getTipInfo.bind(this),
                                    enableAutoShow: !1,
                                    onCouponBtnClick:
                                      this.onIndexCouponModalBtnClick.bind(
                                        this
                                      ),
                                  }),
                              ],
                            })
                          : null;
                      },
                    },
                  ]),
                  t
                );
              })(d.default.PureComponent))
            ) || n;
      },
    },
  ]);
})();
