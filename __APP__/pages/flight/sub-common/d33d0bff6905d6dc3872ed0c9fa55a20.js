!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [61857],
    {
      70352: function (e, o, t) {
        t.d(o, {
          Z: function () {
            return f;
          },
        });
        var n = t(57042),
          i = t(24460),
          c = t(81876),
          a = t(21867),
          s = t(86066),
          u = t(45023),
          p = t(52500),
          r = (t(92954), t(51881)),
          l = t(71515),
          d = t(34229),
          h = t(55916),
          m = t(79910),
          C = t(49120),
          T = t(48813),
          f = (function (e) {
            (0, a.Z)(t, e);
            var o = (0, s.Z)(t);
            function t() {
              var e;
              (0, n.Z)(this, t);
              for (
                var i = arguments.length, a = new Array(i), s = 0;
                s < i;
                s++
              )
                a[s] = arguments[s];
              return (
                (e = o.call.apply(o, [this].concat(a))),
                (0, u.Z)((0, c.Z)(e), "state", {
                  dialogText: {},
                  couponType: "",
                  couponAmount: "",
                  couponToken: "",
                }),
                (0, u.Z)((0, c.Z)(e), "setCouponState", function () {
                  var o = e.props.flightSurpriseCoupon,
                    t = o.couponToken,
                    n = o.couponAmount,
                    i = o.dialogText,
                    c = o.couponType;
                  e.setState({
                    couponToken: t,
                    couponAmount: n,
                    dialogText: i,
                    couponType: c,
                  });
                }),
                (0, u.Z)((0, c.Z)(e), "getCouponInfo", function () {
                  var o = e.props.params,
                    t = o.version,
                    n = void 0 === t ? 1 : t,
                    i = o.source,
                    c = void 0 === i ? "" : i,
                    a = o.minPrice,
                    s = void 0 === a ? "" : a,
                    u = o.depDate,
                    p = void 0 === u ? "" : u,
                    r = o.depCityCode,
                    l = void 0 === r ? "" : r,
                    d = o.arrCityCode,
                    C = void 0 === d ? "" : d;
                  (0, h.VE)({
                    data: {
                      version: n,
                      source: c,
                      minPrice: s,
                      depDate: p,
                      depCityCode: l,
                      arrCityCode: C,
                    },
                  }).then(function (o) {
                    var t = o.resultCode,
                      n = o.data;
                    if (m.Z.judgeType(n, "Object") && Object.keys(n).length) {
                      var i = n.couponType,
                        c = n.couponAmount,
                        a = n.dialogText,
                        s = n.expiredTime,
                        u = n.couponToken,
                        p = n.showDialog;
                      1 == t &&
                        (e.setState({
                          couponType: i,
                          couponAmount: c,
                          dialogText: a,
                          couponToken: u,
                        }),
                        m.Z.executeCB(e.props.getCouponInfomation, {
                          expiredTime: s,
                          couponAmount: c,
                          isShowNewCoupon: 1 == p,
                          showDialog: p,
                        }));
                    } else m.Z.executeCB(e.props.getCouponInfomation, { couponAmount: null });
                  });
                }),
                (0, u.Z)((0, c.Z)(e), "close", function () {
                  m.Z.executeCB(e.props.handleCouponClose);
                }),
                (0, u.Z)((0, c.Z)(e), "handleGet", function () {
                  m.Z.executeCB(e.props.handleCouponClose), e.receiveReq();
                }),
                e
              );
            }
            return (
              (0, i.Z)(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this.props.flightSurpriseCoupon;
                    e && Object.keys(e).length
                      ? this.setCouponState()
                      : this.getCouponInfo();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    var o = this.props,
                      t = o.outerShow,
                      n = o.flightSurpriseCoupon,
                      i = o.params;
                    e.outerShow !== t &&
                      t &&
                      n &&
                      Object.keys(n).length &&
                      this.setCouponState(),
                      JSON.stringify(i) != JSON.stringify(e.params) &&
                        this.getCouponInfo();
                  },
                },
                {
                  key: "receiveReq",
                  value: function () {
                    var e = this,
                      o = this.state.couponToken,
                      t = this.props,
                      n = t.flightHome,
                      i = t.handleReceive;
                    (0, h.jU)({ data: { couponToken: o } })
                      .then(function (o) {
                        if (1 == o.resultCode)
                          return (
                            "flightHome" !== n && e.getCouponInfo(),
                            m.Z.executeCB(i),
                            (0, C.showToast)(
                              "".concat(
                                e.state.couponAmount,
                                "元优惠券领取成功，请尽快使用~"
                              )
                            )
                          );
                        (0, C.showToast)("网络出了小差，请稍后再试~");
                      })
                      .catch(function (e) {
                        console.log(e),
                          (0, C.showToast)("网络出了小差，请稍后再试~");
                      });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      o = e.dialogText,
                      t = e.couponAmount,
                      n = e.couponType,
                      i = this.props,
                      c = i.outerShow,
                      a = i.className,
                      s = void 0 === a ? "" : a,
                      u = {
                        bodyBg: "content-children ".concat(
                          4 == n
                            ? "newyear-content-children"
                            : "normal-content-children"
                        ),
                        textBg: "allowance-content ".concat(
                          4 == n
                            ? "newyearp-allowance-content"
                            : "normal-allowance-content"
                        ),
                      };
                    return (0, T.tZ)(r.Z, {
                      className: s,
                      isShow: c,
                      handleClose: this.close,
                      children: (0, T.BX)(l.View, {
                        className: u.bodyBg,
                        children: [
                          (0, T.tZ)(d.ZtRichText, {
                            className: "header-des",
                            nodes: null == o ? void 0 : o.titleText,
                          }),
                          (0, T.BX)(l.View, {
                            className: u.textBg,
                            children: [
                              (0, T.BX)(l.View, {
                                className: "price-box",
                                children: [
                                  (0, T.tZ)(l.Text, {
                                    className: "unit",
                                    children: "¥",
                                  }),
                                  (0, T.tZ)(l.Text, {
                                    className: "price",
                                    children: t,
                                  }),
                                ],
                              }),
                              (0, T.BX)(l.View, {
                                className: "allowance-des",
                                children: [
                                  (0, T.tZ)(d.ZtRichText, {
                                    className: "top",
                                    nodes: null == o ? void 0 : o.contentText,
                                  }),
                                  (0, T.tZ)(d.ZtRichText, {
                                    className: "bottom",
                                    nodes:
                                      null == o ? void 0 : o.expireTimeText,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          4 == n
                            ? (0, T.tZ)(l.View, {
                                className: "newyear-btn",
                                id: "AYAX",
                                onClick: this.handleGet,
                              })
                            : (0, T.tZ)(l.Button, {
                                className: "btn",
                                id: "AYAY",
                                onClick: this.handleGet,
                                children: "立即领取",
                              }),
                        ],
                      }),
                    });
                  },
                },
              ]),
              t
            );
          })(p.default.PureComponent);
      },
    },
  ]);
})();
