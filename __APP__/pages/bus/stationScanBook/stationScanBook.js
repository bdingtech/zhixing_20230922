!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/a5b2627074afffb5e1fe584b3af24843.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [4265],
      {
        7496: function (e, t, n) {
          var i,
            a,
            c = n(32180),
            r = n(79301),
            o = n(95308),
            s = n(298),
            u = n(57042),
            l = n(24460),
            d = n(81876),
            h = n(21867),
            p = n(86066),
            f = n(45023),
            m = n(52500),
            v = n(92954),
            g = n.n(v),
            b = n(71515),
            k = n(93761),
            I = n(3106),
            P = n(2809),
            y = n(18783),
            T = n(79295),
            w = n(8271),
            S = n.n(w),
            Z = n(49120),
            N = n(38797),
            C = n(28509),
            D = n(43796),
            B = n(46931),
            x = n(90699),
            V = n(81957),
            _ = n(48813),
            X = (function (e) {
              (0, h.Z)(n, e);
              var t = (0, p.Z)(n);
              function n(e) {
                var i;
                return (0, u.Z)(this, n), ((i = t.call(this, e)).state = {}), i;
              }
              return (
                (0, l.Z)(n, [
                  {
                    key: "formatProps",
                    value: function (e) {
                      var t = e || {},
                        n = t.ticketPriceItems,
                        i = t.attachProductPriceInfo,
                        a = t.attachProductDiscountInfo,
                        c = t.insuranceProductPriceInfo,
                        r = [],
                        o = [],
                        s = [];
                      return (
                        n.forEach(function (e) {
                          var t = e.salePrice,
                            n = e.ticketType,
                            i = r.findIndex(function (e) {
                              return e.price == t && e.ticketType == n;
                            });
                          i > -1
                            ? (r[i].count = r[i].count + 1)
                            : r.push({
                                price: t,
                                ticketType: n,
                                name: 1 == n ? "成人票" : "儿童票",
                                count: 1,
                              });
                        }),
                        i.len > 0 &&
                          s.push({
                            price: i.price,
                            ticketType: "coupon",
                            name: i.name,
                            count: i.len,
                          }),
                        c.len > 0 &&
                          s.push({
                            price: c.price,
                            ticketType: "insure",
                            name: c.name,
                            count: c.len,
                          }),
                        a.len > 0 &&
                          o.push({
                            price: a.price,
                            ticketType: "couponDiscount",
                            name: a.name,
                            count: a.len,
                          }),
                        [
                          { typeName: "票价", list: r },
                          { typeName: "增值服务", list: s },
                          { typeName: "优惠", list: o, isDisCount: !0 },
                        ]
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.visible,
                        n = e.onCancle,
                        i = e.detail,
                        a = i.sumPrice,
                        c = this.formatProps(i) || [];
                      return (0, _.tZ)(b.View, {
                        className: "bus-station-scan-price-modal ".concat(
                          t ? "v" : ""
                        ),
                        children:
                          t &&
                          (0, _.BX)(b.Block, {
                            children: [
                              (0, _.tZ)(b.View, {
                                className: "shadow",
                                id: "AdFo",
                                onClick: n,
                              }),
                              (0, _.tZ)(b.View, {
                                className: "price-modal-body",
                                children: (0, _.BX)(b.View, {
                                  className: "main-content",
                                  children: [
                                    (0, _.BX)(b.View, {
                                      className: "sum-con price-li",
                                      children: [
                                        (0, _.tZ)(b.View, {
                                          className: "tit",
                                          children: "支付金额",
                                        }),
                                        (0, _.tZ)(b.View, {
                                          className: "price",
                                          children: a,
                                        }),
                                      ],
                                    }),
                                    (0, _.tZ)(b.View, {
                                      children: c.map(function (e, t) {
                                        return (0, _.BX)(
                                          b.View,
                                          {
                                            className: "price-type-li",
                                            children: [
                                              e.list[0] &&
                                                (0, _.tZ)(b.View, {
                                                  className: "price-type-title",
                                                  children: e.typeName,
                                                }),
                                              e.list.map(function (t, n) {
                                                return (0,
                                                _.BX)(b.View, { className: "normal-li price-li", children: [(0, _.tZ)(b.View, { className: "tit", children: t.name }), (0, _.BX)(b.View, { className: "price", children: [e.isDisCount ? "-" : "", t.price, "x", t.count] })] }, n);
                                              }),
                                            ],
                                          },
                                          t
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      });
                    },
                  },
                ]),
                n
              );
            })(m.default.Component),
            L = n(3205),
            A = (function (e) {
              (0, h.Z)(n, e);
              var t = (0, p.Z)(n);
              function n(e) {
                return (0, u.Z)(this, n), t.call(this, e);
              }
              return (
                (0, l.Z)(n, [
                  {
                    key: "getSaledCoupon",
                    value: function () {
                      return this.props.attachProduct.includeProducts.find(
                        function (e) {
                          return "coupon" == e.productType;
                        }
                      );
                    },
                  },
                  {
                    key: "getCouponDetail",
                    value: function () {
                      var e = this.props.attachProduct.descUrl;
                      L.Z.twebview({ data: { url: e } });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.isSelected,
                        n = e.onChange,
                        i = e.attachProduct,
                        a = this.getSaledCoupon(),
                        c = (0, _.tZ)(b.View, {
                          className: "switch-comp ".concat(t ? "switched" : ""),
                          id: "AdFm",
                          onClick: n,
                        });
                      return (0, _.BX)(b.View, {
                        className: "bus-station-book-coupon-layer",
                        children: [
                          (0, _.BX)(b.View, {
                            className: "lf",
                            children: [
                              (0, _.tZ)(b.Image, {
                                src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/yhqtb@3x.png",
                                mode: "aspectFit",
                                className: "coupon-icon",
                              }),
                              (0, _.BX)(b.View, {
                                className: "coupon-info",
                                children: [
                                  (0, _.BX)(b.View, {
                                    className: "coupon-title",
                                    children: [
                                      (0, _.BX)(b.Text, {
                                        className: "red",
                                        children: [a.productDisplayPrice, "元"],
                                      }),
                                      i.title,
                                      i.tag &&
                                        (0, _.tZ)(b.Text, {
                                          className: "tag",
                                          children: i.tag,
                                        }),
                                    ],
                                  }),
                                  (0, _.BX)(b.View, {
                                    className: "coupon-desc",
                                    id: "AdFn",
                                    onClick: this.getCouponDetail.bind(this),
                                    children: [
                                      (0, _.tZ)(b.Text, {
                                        className: "desc-text",
                                        children: i.subTitle,
                                      }),
                                      (0, _.tZ)(b.Image, {
                                        src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/jstb@3x.png",
                                        mode: "aspectFit",
                                        className: "coupon-tip-icon",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, _.BX)(b.View, {
                            className: "rt",
                            children: [
                              (0, _.tZ)(b.Text, {
                                className: "price",
                                children: a.productPayShowPrice,
                              }),
                              c,
                            ],
                          }),
                        ],
                      });
                    },
                  },
                ]),
                n
              );
            })(m.default.PureComponent),
            M = n(43005),
            O = n(85029),
            j = n(86467),
            z =
              (0, V.h)(!0)(
                (i = (function (e) {
                  (0, h.Z)(n, e);
                  var t = (0, p.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, u.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, f.Z)((0, d.Z)(i), "confirmDialogReslove", null),
                      (0, f.Z)((0, d.Z)(i), "confirmDialogReject", null),
                      (i.state = { isShowDialog: !1, insuranceInfo: null }),
                      i
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setState({
                            insuranceInfo: this.props.insureInfo,
                          });
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function (e, t) {
                          var n,
                            i = this.state.insuranceInfo;
                          (null === (n = t.insuranceInfo) || void 0 === n
                            ? void 0
                            : n.isActive) !==
                            (null == i ? void 0 : i.isActive) &&
                            this.props.onChange &&
                            this.props.onChange(
                              null == i ? void 0 : i.isActive
                            );
                        },
                      },
                      {
                        key: "isSelectInsurance",
                        value: function () {
                          var e = this.state.insuranceInfo;
                          return !!e && e.isActive;
                        },
                      },
                      {
                        key: "onSelectInsurance",
                        value: function (e) {
                          var t;
                          this.setState(
                            {
                              insuranceInfo: (0, s.Z)(
                                (0, s.Z)({}, e),
                                {},
                                {
                                  isActive: !(
                                    null !== (t = this.state.insuranceInfo) &&
                                    void 0 !== t &&
                                    t.isActive
                                  ),
                                }
                              ),
                            },
                            this.addSelectStatusTrack.bind(this)
                          );
                        },
                      },
                      {
                        key: "checkConfirmInsuranceBeforeOrder",
                        value: function () {
                          var e = this;
                          return new Promise(function (t, n) {
                            var i;
                            e.confirmDialogReject && e.confirmDialogReject(),
                              e.props.insuranceDialog
                                ? null !== (i = e.state.insuranceInfo) &&
                                  void 0 !== i &&
                                  i.isActive
                                  ? t(e.isSelectInsurance())
                                  : ((e.confirmDialogReslove = t),
                                    (e.confirmDialogReject = n),
                                    e.setState(
                                      { isShowDialog: !0 },
                                      function () {
                                        e.doTrace(
                                          {
                                            exposureType: "popup",
                                            bizType: "qzf_pay_insu_show",
                                            comment:
                                              "切支付支付页-保险弹窗曝光",
                                          },
                                          1
                                        );
                                      }
                                    ))
                                : t(e.isSelectInsurance());
                          });
                        },
                      },
                      {
                        key: "onSuiteModalConfirm",
                        value: function (e) {
                          var t = this;
                          this.setState(
                            {
                              insuranceInfo: (0, s.Z)(
                                (0, s.Z)({}, this.state.insuranceInfo),
                                {},
                                { isActive: e }
                              ),
                              isShowDialog: !1,
                            },
                            function () {
                              var e = t.isSelectInsurance();
                              t.confirmDialogReslove &&
                                t.confirmDialogReslove(e),
                                (t.confirmDialogReslove = null),
                                (t.confirmDialogReject = null),
                                t.addSelectStatusTrack(),
                                t.doTrace(
                                  {
                                    bizKey: e
                                      ? "qzf_pay_insu_confirm_button_click"
                                      : "qzf_pay_insu_cancel_button_click",
                                    comment: e
                                      ? "切支付支付页-保险弹窗确认添加按钮点击"
                                      : "切支付支付页-保险弹窗取消按钮点击",
                                    clickType: e
                                      ? I.uh.confirmClick
                                      : I.uh.cancelClick,
                                  },
                                  2
                                );
                            }
                          );
                        },
                      },
                      {
                        key: "toInsurancePage",
                        value: function (e) {
                          var t = {
                            desc: "点击投保须知按钮",
                            type: "汽车意外险",
                            title: ""
                              .concat(e.title)
                              .concat(e.insurePackagePrice, "元/份"),
                          };
                          this.onInsureTraceTrack(t),
                            L.Z.twebview({ data: { url: e.descUrl } });
                        },
                      },
                      {
                        key: "addSelectStatusTrack",
                        value: function () {
                          var e = this.state.insuranceInfo,
                            t = {
                              desc:
                                null != e && e.isActive
                                  ? "勾选保险产品"
                                  : "取消勾选保险产品",
                              type: "汽车意外险",
                              title: ""
                                .concat(null == e ? void 0 : e.title)
                                .concat(
                                  null == e ? void 0 : e.insurePackagePrice,
                                  "元/份"
                                ),
                            };
                          this.onInsureTraceTrack(t);
                        },
                      },
                      {
                        key: "onInsureTraceTrack",
                        value: function () {
                          var e;
                          this.props.onInsureTraceTrack &&
                            (e = this.props).onInsureTraceTrack.apply(
                              e,
                              arguments
                            );
                        },
                      },
                      {
                        key: "doTrace",
                        value: function () {
                          var e;
                          this.props.doBusTraceInfo &&
                            (e = this.props).doBusTraceInfo.apply(e, arguments);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.isShowDialog,
                            n = e.insuranceInfo,
                            i = [n];
                          return n
                            ? (0, _.BX)(b.Block, {
                                children: [
                                  (0, _.tZ)(O.Z, {
                                    insurePackageList: i,
                                    insuranceTips: null == n ? void 0 : n.note,
                                    onSelectInsurance:
                                      this.onSelectInsurance.bind(this),
                                    gotoInsurancePage:
                                      this.toInsurancePage.bind(this),
                                  }),
                                  (0, _.tZ)(j.Z, {
                                    isShow: t,
                                    insuranceInfo: n,
                                    onCancel: this.onSuiteModalConfirm.bind(
                                      this,
                                      !1
                                    ),
                                    onConfirm: this.onSuiteModalConfirm.bind(
                                      this,
                                      !0
                                    ),
                                    gotoInsurancePage:
                                      this.toInsurancePage.bind(this),
                                  }),
                                ],
                              })
                            : null;
                        },
                      },
                    ]),
                    n
                  );
                })(m.default.PureComponent))
              ) || i,
            F = P.ZP.statusBarHeight,
            R = 0,
            U = 1,
            q = R,
            H =
              (0, V.h)()(
                (a = (function (e) {
                  (0, h.Z)(n, e);
                  var t = (0, p.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, u.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, f.Z)((0, d.Z)(i), "pageId", 10650061546),
                      (0, f.Z)((0, d.Z)(i), "$InsuranceComp", null),
                      (i.InsuranceRecord = new N.Z()),
                      (i.state = {
                        showHeaderBg: !1,
                        isPriceModalVisible: !1,
                        busDetail: null,
                        titleTip: "请在出票机倒计时结束前完成支付",
                        orderType: q,
                        telValue: "",
                        isTelInputFocus: !1,
                        isSelectCoupon: !1,
                        supportAttachProduct: !1,
                        attachProduct: null,
                        insureProduct: null,
                        isSelectInsure: !1,
                      }),
                      (i.isNeedLoadUserLabelInfo = !0),
                      i
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e;
                          null === (e = this.InsuranceRecord) ||
                            void 0 === e ||
                            e.start({ productLine: "bus" }),
                            this.getScanBookBusDetailPromise();
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.doNewBusTraceInfo({ triggerType: "exit" });
                        },
                      },
                      {
                        key: "nextTickPromise",
                        value: function () {
                          return new Promise(function (e) {
                            g().nextTick(e);
                          });
                        },
                      },
                      {
                        key: "judgeIsNeedZXLogin",
                        value: function () {
                          return this.isZxAccountOrder() && !y.ZP.isLogin;
                        },
                      },
                      {
                        key: "verifyUserTel",
                        value: function () {
                          if (!this.isTelOrder()) return { code: 1 };
                          var e = this.state.telValue.trim();
                          if (!e) return { code: 0, message: "手机号为必填项" };
                          return /^[0-9]{11}$/.test(e)
                            ? { code: 1 }
                            : { code: 0, message: "请填写正确的手机号" };
                        },
                      },
                      {
                        key: "isZxAccountOrder",
                        value: function () {
                          return this.state.orderType === R;
                        },
                      },
                      {
                        key: "isTelOrder",
                        value: function () {
                          return this.state.orderType === U;
                        },
                      },
                      {
                        key: "getXListPromise",
                        value: function () {
                          var e = this,
                            t = this.state.busDetail,
                            n = {
                              fromCity: t.fromCity || "",
                              toCity: t.toCity || "",
                              fromStation: t.fromStation || "",
                              toStation: t.toStation || "",
                              fromDate: t.fromDate || "",
                              fromTime: t.fromTime || "",
                              busNumber: t.busNumber || "",
                              symbol: t.symbol || "",
                              utmSource: t.utmSource || "",
                              rewardChannel: !1,
                              productLine: 1,
                              token: t.token || "",
                              basicParams: { bigChannel: "bus" },
                              basicBusParams: JSON.stringify(
                                (0, s.Z)(
                                  (0, s.Z)({}, I.kT),
                                  {},
                                  {
                                    bigChannel: "bus",
                                    bigClientType: "wechat_xcx",
                                  }
                                )
                              ),
                            };
                          return (0, M.OB)(n).then(function (t) {
                            var n,
                              i,
                              a,
                              c,
                              r,
                              o,
                              s,
                              u,
                              l,
                              d =
                                null === (n = t.data) ||
                                void 0 === n ||
                                null === (i = n[0]) ||
                                void 0 === i ||
                                null === (a = i.attachChannels) ||
                                void 0 === a
                                  ? void 0
                                  : a.find(function (e) {
                                      return (
                                        "fill_ship_pop_window_high_speed_take" ==
                                        e.channelName
                                      );
                                    }),
                              h =
                                null === (c = t.data) ||
                                void 0 === c ||
                                null === (r = c[0]) ||
                                void 0 === r ||
                                null === (o = r.attachChannels) ||
                                void 0 === o
                                  ? void 0
                                  : o.find(function (e) {
                                      return (
                                        "fill_accident_insurance" ==
                                        e.channelName
                                      );
                                    });
                            1 == t.code
                              ? e.setState({
                                  supportAttachProduct: !(
                                    null == d ||
                                    null === (s = d.attachPackages) ||
                                    void 0 === s ||
                                    !s[0]
                                  ),
                                  attachProduct: d,
                                  isSelectCoupon:
                                    1 ==
                                    (null == d ||
                                    null === (u = d.attachPackages) ||
                                    void 0 === u ||
                                    null === (l = u[0]) ||
                                    void 0 === l
                                      ? void 0
                                      : l.followingFlag),
                                  insureProduct: h,
                                })
                              : e.setState({ supportAttachProduct: !1 });
                          });
                        },
                      },
                      {
                        key: "getInsureProductPackageInfo",
                        value: function () {
                          var e,
                            t = this.state,
                            n = t.insureProduct,
                            i = t.busDetail,
                            a = null;
                          if (
                            null != n &&
                            null !== (e = n.attachPackages) &&
                            void 0 !== e &&
                            e[0]
                          ) {
                            var c,
                              r,
                              o = n.attachPackages[0];
                            a = {
                              activityId: o.packageCode,
                              insurePackagePrice: o.payPrice,
                              title: o.title,
                              isActive: !(null == i || !i.insuranceDefaultSale),
                              descUrl: o.descUrl,
                              note:
                                (null == o ||
                                null === (c = o.extraMap) ||
                                void 0 === c
                                  ? void 0
                                  : c.note) || "",
                              insuranceIcon:
                                null == o ||
                                null === (r = o.extraMap) ||
                                void 0 === r
                                  ? void 0
                                  : r.icon,
                              insuranceDescList: x.Z.transferInsuranceTags(
                                o.tags
                              ),
                            };
                          }
                          return a;
                        },
                      },
                      {
                        key: "canSaledInsureProduct",
                        value: function () {
                          var e;
                          return (
                            (null === (e = this.state.busDetail) || void 0 === e
                              ? void 0
                              : e.supportInsuranceProduct) &&
                            !!this.getInsureProductPackageInfo()
                          );
                        },
                      },
                      {
                        key: "getScanBookBusDetailPromise",
                        value: function () {
                          var e = this,
                            t = (0, v.getCurrentInstance)().router.params,
                            n = t.orderNumber,
                            i = t.utmSource;
                          return (
                            g().showLoading({ title: "加载中，请稍候..." }),
                            (0, M.Wb)({ orderNumber: n, utmSource: i })
                              .then(function (t) {
                                if (1 != t.code)
                                  return (
                                    g().showToast({
                                      title: t.message || "加载失败",
                                      icon: "none",
                                      duration: 2500,
                                    }),
                                    void e.setState({
                                      titleTip: t.message || e.state.titleTip,
                                    })
                                  );
                                e.setState(
                                  {
                                    busDetail: t.data,
                                    orderType: t.data.needLogin ? R : U,
                                    telValue: t.data.contactMobile || "",
                                  },
                                  (0, o.Z)(
                                    (0, r.Z)().mark(function n() {
                                      var i, a, c, o, s, u;
                                      return (0, r.Z)().wrap(function (n) {
                                        for (;;)
                                          switch ((n.prev = n.next)) {
                                            case 0:
                                              if (
                                                ((e.sourceId = (0, D.a3)(
                                                  t.data.utmSource
                                                )),
                                                t.data.supportAttachProduct &&
                                                  e.getXListPromise(),
                                                !e.judgeIsNeedZXLogin())
                                              ) {
                                                n.next = 6;
                                                break;
                                              }
                                              return (
                                                (n.next = 5), y.ZP.doLogin()
                                              );
                                            case 5:
                                              e.getScanBookBusDetailPromise();
                                            case 6:
                                              e.judgeIsNeedZXLogin() ||
                                                e.doNewBusTraceInfo({
                                                  triggerType: "load",
                                                }),
                                                (0, D.HQ)(
                                                  null === (i = e.state) ||
                                                    void 0 === i ||
                                                    null ===
                                                      (a = i.busDetail) ||
                                                    void 0 === a
                                                    ? void 0
                                                    : a.utmSource,
                                                  {
                                                    station: [
                                                      null === (c = e.state) ||
                                                      void 0 === c ||
                                                      null ===
                                                        (o = c.busDetail) ||
                                                      void 0 === o
                                                        ? void 0
                                                        : o.fromStation,
                                                    ],
                                                    city:
                                                      null === (s = e.state) ||
                                                      void 0 === s ||
                                                      null ===
                                                        (u = s.busDetail) ||
                                                      void 0 === u
                                                        ? void 0
                                                        : u.fromCity,
                                                  }
                                                );
                                            case 8:
                                            case "end":
                                              return n.stop();
                                          }
                                      }, n);
                                    })
                                  )
                                );
                              })
                              .finally(g().hideLoading)
                          );
                        },
                      },
                      {
                        key: "onScroll",
                        value: function (e) {
                          var t = this;
                          this.setState(
                            { showHeaderBg: e.detail.scrollTop > 0 },
                            function () {
                              g().setNavigationBarColor({
                                frontColor: t.state.showHeaderBg
                                  ? "#000000"
                                  : "#ffffff",
                                backgroundColor: t.state.showHeaderBg
                                  ? "#ffffff"
                                  : "#2693ff",
                                animation: {
                                  duration: 400,
                                  timingFunc: "easeIn",
                                },
                              });
                            }
                          );
                        },
                      },
                      {
                        key: "handlePriceModalVisibleCtrl",
                        value: function (e) {
                          this.setState({ isPriceModalVisible: !!e });
                        },
                      },
                      {
                        key: "getHeadTitle",
                        value: function () {
                          var e = this.state.busDetail;
                          return (
                            e && "".concat(e.fromCity, " - ").concat(e.toCity)
                          );
                        },
                      },
                      {
                        key: "getTimeInfo",
                        value: function () {
                          var e = this.state.busDetail;
                          if (e) {
                            var t = e.fromDate,
                              n = e.fromTime;
                            try {
                              if (t) {
                                var i = S()(
                                  ""
                                    .concat(S()().year(), "-")
                                    .concat(
                                      t.replace("月", "-").replace("日", "")
                                    )
                                );
                                return ""
                                  .concat(i.format("MM-DD"), " ")
                                  .concat(
                                    [
                                      "周日",
                                      "周一",
                                      "周二",
                                      "周三",
                                      "周四",
                                      "周五",
                                      "周六",
                                    ][i.day()],
                                    " "
                                  )
                                  .concat(n, " 发车");
                              }
                            } catch (e) {
                              return "".concat(t, " ").concat(n, " 发车 ");
                            }
                          }
                        },
                      },
                      {
                        key: "getPriceDetail",
                        value: function () {
                          var e,
                            t,
                            n = this.state,
                            i = n.isSelectCoupon,
                            a = n.supportAttachProduct,
                            c = n.attachProduct,
                            r = n.isSelectInsure,
                            o = (this.state.busDetail || {}).ticketPriceItems,
                            s = void 0 === o ? [] : o,
                            u = { price: 0, name: "", len: i ? 1 : 0 },
                            l = { price: 0, name: "", len: i ? 1 : 0 };
                          if (a && c && i) {
                            var d = c.attachPackages[0].includeProducts.find(
                              function (e) {
                                return "coupon" == e.productType;
                              }
                            );
                            (u.price =
                              (null == d ? void 0 : d.productPayShowPrice) ||
                              0),
                              (u.name = c.attachPackages[0].title),
                              (l.price =
                                (null == d ? void 0 : d.productCostPrice) || 0),
                              (l.name =
                                (null == d ? void 0 : d.productName) || 0);
                          }
                          var h = {
                            price:
                              (null ===
                                (e = this.getInsureProductPackageInfo()) ||
                              void 0 === e
                                ? void 0
                                : e.insurePackagePrice) || 0,
                            name:
                              null ===
                                (t = this.getInsureProductPackageInfo()) ||
                              void 0 === t
                                ? void 0
                                : t.title,
                            len:
                              this.canSaledInsureProduct() && r ? s.length : 0,
                          };
                          return {
                            sumPrice: (0, C.lu)(
                              (0, C.IH)(
                                (0, C.IH)(
                                  s.reduce(function (e, t) {
                                    return (0, C.IH)(e, t.salePrice || 0);
                                  }, 0),
                                  (0, C.ui)(h.price, h.len)
                                ),
                                (0, C.ui)(u.price, u.len)
                              ),
                              (0, C.ui)(l.price, l.len)
                            ),
                            pasLen: s.length,
                            ticketPriceItems: s,
                            attachProductPriceInfo: u,
                            attachProductDiscountInfo: l,
                            insuranceProductPriceInfo: h,
                          };
                        },
                      },
                      {
                        key: "doNewBusTraceInfo",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                n,
                                i,
                                a,
                                c,
                                o,
                                u,
                                l,
                                d = arguments;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            d.length > 0 && void 0 !== d[0]
                                              ? d[0]
                                              : {}),
                                          (n =
                                            d.length > 1 && void 0 !== d[1]
                                              ? d[1]
                                              : 0),
                                          (i = (0, v.getCurrentInstance)()
                                            .router.params.utmSource),
                                          (e.prev = 3),
                                          (e.next = 6),
                                          (0, D.c$)(
                                            this.isNeedLoadUserLabelInfo
                                          )
                                        );
                                      case 6:
                                        (c = e.sent),
                                          (this.isNeedLoadUserLabelInfo = !1),
                                          (o = T.Z.getUnionData()),
                                          (u = ""),
                                          (e.t0 = n),
                                          (e.next =
                                            0 === e.t0
                                              ? 13
                                              : 1 === e.t0
                                              ? 15
                                              : 2 === e.t0
                                              ? 17
                                              : 19);
                                        break;
                                      case 13:
                                        return (
                                          (u = "p_bus_z_10650061546"),
                                          e.abrupt("break", 20)
                                        );
                                      case 15:
                                        return (
                                          (u = "s_bus_z_10650061546"),
                                          e.abrupt("break", 20)
                                        );
                                      case 17:
                                        return (
                                          (u = "c_bus_z_10650061546"),
                                          e.abrupt("break", 20)
                                        );
                                      case 19:
                                        return e.abrupt("break", 20);
                                      case 20:
                                        (l = (0, s.Z)(
                                          (0, s.Z)(
                                            {
                                              utmSource:
                                                i ||
                                                (null ===
                                                  (a = this.state.busDetail) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.utmSource) ||
                                                "null",
                                              sourceId:
                                                this.sourceId ||
                                                "Bus_Null_Null",
                                              pageId: this.pageId,
                                              client: (0, D.y3)(),
                                              allianceId: o.aid || "null",
                                              allianceSid: o.sid || "null",
                                            },
                                            c
                                          ),
                                          t
                                        )),
                                          "c_bus_z_10650061546" == u &&
                                            (l.typeSndAttr = "null"),
                                          this.ubtTrace(u, l),
                                          (e.next = 28);
                                        break;
                                      case 25:
                                        (e.prev = 25),
                                          (e.t1 = e.catch(3)),
                                          console.log(e.t1);
                                      case 28:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[3, 25]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "addOrder",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                n,
                                i,
                                a,
                                c,
                                o,
                                s,
                                u,
                                l,
                                d,
                                h,
                                p,
                                f,
                                m,
                                v,
                                b,
                                k,
                                P,
                                w,
                                S,
                                N,
                                C,
                                D = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          (this.doNewBusTraceInfo(
                                            {
                                              bizType:
                                                "zx_bus_qzf_pay_button_click",
                                              comment:
                                                "切支付支付页面支付按钮点击",
                                              clickType: I.uh.confirmClick,
                                            },
                                            2
                                          ),
                                          this.state.busDetail)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          g().showToast({
                                            title: "车次信息已过期",
                                            icon: "none",
                                            duration: 2500,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 4:
                                        if (!this.judgeIsNeedZXLogin()) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (e.next = 7), y.ZP.doLogin();
                                      case 7:
                                        if (
                                          1 === (t = this.verifyUserTel()).code
                                        ) {
                                          e.next = 12;
                                          break;
                                        }
                                        return (
                                          g().showToast({
                                            title: t.message,
                                            icon: "none",
                                            duration: 2500,
                                          }),
                                          this.setState({
                                            isTelInputFocus: !0,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 12:
                                        return (
                                          (n = this.state),
                                          (i = n.isSelectCoupon),
                                          (a = n.attachProduct),
                                          (c = n.telValue),
                                          (o = n.insureProduct),
                                          (s = i
                                            ? [
                                                {
                                                  packageCode:
                                                    a.attachPackages[0]
                                                      .packageCode,
                                                  buyNumber: 1,
                                                  page: 2,
                                                  channelId: a.channelId,
                                                },
                                              ]
                                            : []),
                                          (u = this.isTelOrder()
                                            ? { contactPhone: c.trim() }
                                            : void 0),
                                          (l = T.Z.getUnionData()),
                                          (e.prev = 16),
                                          (e.next = 19),
                                          null === (d = this.$InsuranceComp) ||
                                          void 0 === d
                                            ? void 0
                                            : d.checkConfirmInsuranceBeforeOrder()
                                        );
                                      case 19:
                                        return (
                                          (f = e.sent),
                                          (m =
                                            this.canSaledInsureProduct() &&
                                            f) &&
                                            s.push({
                                              packageCode:
                                                null ===
                                                  (v =
                                                    this.getInsureProductPackageInfo()) ||
                                                void 0 === v
                                                  ? void 0
                                                  : v.activityId,
                                              buyNumber:
                                                null ===
                                                  (b = this.getPriceDetail()) ||
                                                void 0 === b
                                                  ? void 0
                                                  : b.pasLen,
                                              page: 2,
                                              channelId:
                                                null == o
                                                  ? void 0
                                                  : o.channelId,
                                            }),
                                          (k = {
                                            orderNumber:
                                              this.state.busDetail.orderNumber,
                                            union: {
                                              vid: "",
                                              scanId: "",
                                              allianceid: l.aid,
                                              sid: l.sid,
                                              ouid: l.ouid,
                                              sourceid: l.sid,
                                              awakeUnion: "",
                                            },
                                            appendProductTypes: s,
                                            fetcher: u,
                                            trackToken: m
                                              ? null ===
                                                  (h = this.InsuranceRecord) ||
                                                void 0 === h
                                                ? void 0
                                                : h.getTrackId()
                                              : "",
                                            sourceId:
                                              this.sourceId || "BUS_Null_Null",
                                          }),
                                          (0, Z.showLoading)("下单中..."),
                                          (e.next = 26),
                                          (0, M.Qc)(k)
                                        );
                                      case 26:
                                        if (
                                          ((P = e.sent),
                                          (0, Z.hideLoading)(),
                                          1 == P.code)
                                        ) {
                                          e.next = 31;
                                          break;
                                        }
                                        return (
                                          g().showToast({
                                            title: P.message,
                                            icon: "none",
                                            duration: 2500,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 31:
                                        return (
                                          k.trackToken &&
                                            (null ===
                                              (p = this.InsuranceRecord) ||
                                              void 0 === p ||
                                              p.send()),
                                          (0, Z.showLoading)("支付中..."),
                                          (w = P.data.orderNumber),
                                          (e.next = 36),
                                          this.doPay({
                                            orderNumber: w,
                                            utmSource:
                                              this.state.busDetail.utmSource,
                                          })
                                        );
                                      case 36:
                                        if (
                                          ((S = e.sent),
                                          (0, Z.hideLoading)(),
                                          1 === S.resultCode)
                                        ) {
                                          e.next = 43;
                                          break;
                                        }
                                        return (
                                          (C =
                                            "requestPayment:fail cancel" ==
                                            (null === (N = S.resultMessage) ||
                                            void 0 === N
                                              ? void 0
                                              : N.errMsg)
                                              ? "支付取消"
                                              : "支付失败"),
                                          g().showModal({
                                            title: "提示",
                                            content: C || "支付失败",
                                            showCancel: !1,
                                          }),
                                          setTimeout(function () {
                                            D.navigateToOrderDetail(w);
                                          }, 1e3),
                                          e.abrupt("return")
                                        );
                                      case 43:
                                        g().showToast({
                                          title: "支付成功",
                                          icon: "none",
                                          duration: 2500,
                                          success: function () {
                                            D.navigateToOrderDetail(w);
                                          },
                                        }),
                                          (e.next = 50);
                                        break;
                                      case 46:
                                        (e.prev = 46),
                                          (e.t0 = e.catch(16)),
                                          (0, Z.hideLoading)(),
                                          g().showToast({
                                            title: "支付失败",
                                            icon: "warn",
                                            duration: 2500,
                                          });
                                      case 50:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[16, 46]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "doPay",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n,
                                i,
                                a = this;
                              return (0, r.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (n = t.orderNumber),
                                        (i = t.utmSource),
                                        e.abrupt(
                                          "return",
                                          new Promise(
                                            (function () {
                                              var e = (0, o.Z)(
                                                (0, r.Z)().mark(function e(
                                                  t,
                                                  c
                                                ) {
                                                  var o, s, u;
                                                  return (0, r.Z)().wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (e.prev = 0),
                                                              (e.next = 3),
                                                              (0, B.WS)({
                                                                orderNumber: n,
                                                                paymentChannel:
                                                                  I.T2,
                                                                utmSource: i,
                                                              })
                                                            );
                                                          case 3:
                                                            null !=
                                                              (u = e.sent) &&
                                                              null !==
                                                                (o = u.data) &&
                                                              void 0 !== o &&
                                                              null !==
                                                                (s =
                                                                  o.evokeCashier) &&
                                                              void 0 !== s &&
                                                              s.goodsId &&
                                                              (0, k.VQ)({
                                                                orderNumber: n,
                                                                goodsId:
                                                                  u.data
                                                                    .evokeCashier
                                                                    .goodsId,
                                                                isBusDTStationWithOutLoginSource:
                                                                  a.isTelOrder(),
                                                                business: "bus",
                                                              })
                                                                .then(
                                                                  function () {
                                                                    t({
                                                                      resultCode: 1,
                                                                    });
                                                                  }
                                                                )
                                                                .catch(
                                                                  function () {
                                                                    t({
                                                                      resultCode: 0,
                                                                      resultMessage:
                                                                        "支付失败",
                                                                    });
                                                                  }
                                                                ),
                                                              (e.next = 11);
                                                            break;
                                                          case 7:
                                                            (e.prev = 7),
                                                              (e.t0 =
                                                                e.catch(0)),
                                                              console.log(e.t0),
                                                              c();
                                                          case 11:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e,
                                                    null,
                                                    [[0, 7]]
                                                  );
                                                })
                                              );
                                              return function (t, n) {
                                                return e.apply(this, arguments);
                                              };
                                            })()
                                          )
                                        )
                                      );
                                    case 2:
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
                      },
                      { key: "noop", value: function () {} },
                      {
                        key: "navigateToOrderDetail",
                        value: function (e) {
                          g().redirectTo({
                            url: "/pages/bus/neworderdetail/orderdetail?oid="
                              .concat(e, "&jumpFromSource=")
                              .concat(
                                this.state.busDetail.utmSource,
                                "&utmSource="
                              )
                              .concat(
                                this.state.busDetail.utmSource,
                                "&sourceId="
                              )
                              .concat(this.sourceId),
                          });
                        },
                      },
                      {
                        key: "handleBlurInput",
                        value: function () {
                          this.setState({ isTelInputFocus: !1 });
                        },
                      },
                      {
                        key: "handleSelectCouponChange",
                        value: function () {
                          this.setState({
                            isSelectCoupon: !this.state.isSelectCoupon,
                          });
                        },
                      },
                      {
                        key: "onTelInput",
                        value: function (e) {
                          var t = e.detail.value;
                          this.setState({ telValue: t });
                        },
                      },
                      {
                        key: "onInsureChange",
                        value: function (e) {
                          this.setState({ isSelectInsure: e });
                        },
                      },
                      {
                        key: "onInsureTraceTrack",
                        value: function () {
                          for (
                            var e,
                              t = arguments.length,
                              n = new Array(t),
                              i = 0;
                            i < t;
                            i++
                          )
                            n[i] = arguments[i];
                          null === (e = this.InsuranceRecord) ||
                            void 0 === e ||
                            e.track.apply(e, n);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.showHeaderBg,
                            i = t.isPriceModalVisible,
                            a = t.busDetail,
                            c = t.titleTip,
                            r = t.telValue,
                            o = t.isTelInputFocus,
                            s = t.isSelectCoupon,
                            u = t.supportAttachProduct,
                            l = t.attachProduct,
                            d = this.getHeadTitle(),
                            h = this.getTimeInfo(),
                            p = a || {},
                            f = p.costTime,
                            m = p.fromStation,
                            v = p.toStation,
                            g = p.ticketPriceItems,
                            k = void 0 === g ? [] : g,
                            I = this.getPriceDetail(),
                            P = I.sumPrice,
                            T = I.pasLen,
                            w = I.attachProductPriceInfo,
                            S = I.attachProductDiscountInfo,
                            Z = I.insuranceProductPriceInfo,
                            N = this.isTelOrder();
                          return (0, _.BX)(b.ScrollView, {
                            className: "bus-StationScanBook-page",
                            onScroll: this.onScroll.bind(this),
                            children: [
                              (0, _.tZ)(b.View, {
                                className: "bus-station-header ".concat(
                                  n ? "showbg" : ""
                                ),
                                style: { paddingTop: "".concat(F, "px") },
                                children: d,
                              }),
                              (0, _.BX)(b.View, {
                                className: "book-content",
                                style: { marginTop: "".concat(F + 44, "px") },
                                children: [
                                  (0, _.tZ)(b.View, {
                                    className: "top-bg",
                                    style: { top: "-".concat(F + 44, "px") },
                                  }),
                                  (0, _.BX)(b.View, {
                                    className: "title-content",
                                    children: [
                                      (0, _.tZ)(b.Image, {
                                        className: "title-icon",
                                        src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/dzf@3x.png",
                                      }),
                                      (0, _.BX)(b.View, {
                                        className: "title-info",
                                        children: [
                                          (0, _.tZ)(b.View, {
                                            className: "title",
                                            children: "确认行程并支付",
                                          }),
                                          (0, _.tZ)(b.View, {
                                            className: "info",
                                            children: c,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, _.BX)(b.View, {
                                    className: "trip-card",
                                    children: [
                                      (0, _.BX)(b.View, {
                                        className: "trip-time-info",
                                        children: [
                                          (0, _.BX)(b.View, {
                                            className: "left from-time",
                                            children: [
                                              (0, _.tZ)(b.Text, {
                                                className: "tag",
                                                children: "出发",
                                              }),
                                              (0, _.tZ)(b.Text, {
                                                className: "from-time-info",
                                                children: h,
                                              }),
                                            ],
                                          }),
                                          f &&
                                            (0, _.tZ)(b.View, {
                                              className: "right times-use",
                                              children: f,
                                            }),
                                        ],
                                      }),
                                      (0, _.BX)(b.View, {
                                        className: "trip-station-info",
                                        children: [
                                          (0, _.tZ)(b.View, {
                                            className: "from",
                                            children: m,
                                          }),
                                          (0, _.tZ)(b.View, {
                                            className: "to",
                                            children: v,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  N &&
                                    (0, _.BX)(b.View, {
                                      className: "tel-comp",
                                      children: [
                                        (0, _.BX)(b.View, {
                                          className: "title",
                                          children: [
                                            (0, _.tZ)(b.Image, {
                                              src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/sj@3x.png",
                                              mode: "aspectFit",
                                              className: "tel-icon-img",
                                            }),
                                            "联系手机",
                                          ],
                                        }),
                                        (0, _.tZ)(b.Input, {
                                          className: "input-dom ".concat(
                                            o ? "warning-input" : ""
                                          ),
                                          type: "number",
                                          placeholder: "手机号为必填项",
                                          placeholderClass:
                                            "input-dom-placeholder",
                                          value: r,
                                          isTelInputFocus: o,
                                          onFocus:
                                            this.handleBlurInput.bind(this),
                                          onInput: this.onTelInput.bind(this),
                                          disabled:
                                            y.ZP.isLogin && a.contactMobile,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              this.canSaledInsureProduct() &&
                                (0, _.tZ)(z, {
                                  ref: function (t) {
                                    return (e.$InsuranceComp = t);
                                  },
                                  insureInfo:
                                    this.getInsureProductPackageInfo(),
                                  insuranceDialog: !(
                                    null == a || !a.insuranceDialog
                                  ),
                                  onChange: this.onInsureChange.bind(this),
                                  onInsureTraceTrack:
                                    this.onInsureTraceTrack.bind(this),
                                  doBusTraceInfo:
                                    this.doNewBusTraceInfo.bind(this),
                                }),
                              u &&
                                (0, _.tZ)(A, {
                                  attachProduct: l.attachPackages[0],
                                  isSelected: s,
                                  onChange:
                                    this.handleSelectCouponChange.bind(this),
                                }),
                              a &&
                                (0, _.BX)(b.View, {
                                  className: "payment-desk",
                                  children: [
                                    (0, _.BX)(b.View, {
                                      className: "left",
                                      children: [
                                        (0, _.tZ)(b.Text, {
                                          className: "price",
                                          children: P,
                                        }),
                                        (0, _.BX)(b.Text, {
                                          className: "pass-count",
                                          children: ["共", T, "人"],
                                        }),
                                      ],
                                    }),
                                    (0, _.BX)(b.View, {
                                      className: "right",
                                      children: [
                                        (0, _.tZ)(b.View, {
                                          className: "detail ".concat(
                                            i ? "v" : ""
                                          ),
                                          id: "AdFp",
                                          onClick:
                                            this.handlePriceModalVisibleCtrl.bind(
                                              this,
                                              !i
                                            ),
                                          children: "明细",
                                        }),
                                        (0, _.tZ)(b.View, {
                                          className: "pay-btn ".concat(
                                            T <= 0 ? "disabled" : ""
                                          ),
                                          id: "AdFq",
                                          onClick:
                                            T > 0
                                              ? this.addOrder.bind(this)
                                              : this.noop,
                                          children: "去支付",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, _.tZ)(X, {
                                visible: i,
                                onCancle: this.handlePriceModalVisibleCtrl.bind(
                                  this,
                                  !1
                                ),
                                detail: {
                                  sumPrice: P,
                                  pasLen: T,
                                  ticketPriceItems: k,
                                  attachProductPriceInfo: w,
                                  attachProductDiscountInfo: S,
                                  insuranceProductPriceInfo: Z,
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(m.default.Component))
              ) || a;
          Page(
            (0, c.createPageConfig)(
              H,
              "pages/bus/stationScanBook/stationScanBook",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                enablePullDownRefresh: !1,
                backgroundColor: "#efefef",
                backgroundColorTop: "#2693ff",
                backgroundColorBottom: "#efefef",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [86230, 3322, 36332, 95854, 30747, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(7496);
          }
        ),
          e.O();
      },
    ]);
})();
