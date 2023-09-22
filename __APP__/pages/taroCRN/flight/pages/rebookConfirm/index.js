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
    require("../../../sub-common/87dd7ca508f26cc44a96a97518946752.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [61380],
      {
        29572: function (e, n, t) {
          var i,
            a = t(32180),
            o = t(57042),
            l = t(24460),
            r = t(81876),
            c = t(21867),
            s = t(86066),
            d = t(45023),
            u = t(52500),
            _ = t(21145),
            h = t(87298),
            m = t(55288),
            f = t(71515),
            g = t(851),
            b = t(92954),
            p = t.n(b),
            Z = t(19972),
            N = t(8079),
            w = t(41478),
            v = t(90729),
            x = t(23577),
            k = t(32970),
            C = t(90582),
            I = t(84581),
            V = t(92739),
            y = t(33786),
            B = t(53550),
            T = t(43884),
            D = t(48813),
            X = function (e) {
              var n = e.onClose;
              return (0, D.BX)(f.View, {
                className: " _a _Oa _Cc",
                children: [
                  (0, D.BX)(f.View, {
                    className: " _Xp _p _in",
                    children: [
                      (0, D.tZ)(f.View, {
                        className: " _ok _Yb _V _o",
                        children: "产品为何不可退",
                      }),
                      (0, D.tZ)(f.View, {
                        onClick: n,
                        className: " _u _qq _rq",
                        children: (0, D.tZ)(B.Z, {
                          className: " _rk _Bd",
                          children: "󰳭",
                        }),
                      }),
                    ],
                  }),
                  [
                    {
                      title: "产品已使用、已生效、已失效或已过期",
                      desc: "产品已使用、已生效则不可改期；部分产品存在有效期限制，超出日期范围，则失效作废，无法继续使用。",
                    },
                    {
                      title: "产品不可改期，需用户自行退订",
                      desc: "部分产品预订时已关联到乘客、行程，当机票行程时间发生变动后，这类不可改期的产品，需要用户自行操作退订，再根据改签后新行程情况考虑是否再次补订。",
                    },
                  ].map(function (e, n) {
                    return (0,
                    D.BX)(f.View, { className: " _Nd _oq _U _Xl", children: [(0, D.BX)(f.View, { className: " _Rh _i _Ga _l", children: [(0, D.tZ)(T.Z, { end: { x: 1, y: 0 }, start: { x: 0, y: 0 }, locations: [0,
                                  1], angle: 45, colors: ["rgb(13, 174, 255)", "rgb(0, 119, 255)"], className: " _Ka _Ol _Oo _lj" }), (0, D.tZ)(f.Text, { className: " _dd _pq", children: e.title })] }), (0, D.tZ)(f.View, { className: "contTxt", children: e.desc })] }, n);
                  }),
                ],
              });
            },
            F = function (e) {
              var n = e.xProductDetails;
              if (!n || n.length <= 0) return (0, D.tZ)(D.HY, {});
              return (0, D.BX)(f.View, {
                className: " _a _Oa _Dj _Mb _lq",
                children: [
                  (0, D.BX)(f.View, {
                    className: " _i _Ga _l _Yn",
                    children: [
                      (0, D.tZ)(f.View, {
                        className: " _dd _Pa _mq _j",
                        children: "以下产品不可改签",
                      }),
                      (0, D.BX)(f.View, {
                        className: " _Kc _Na _Q _i _Ga _l",
                        onClick: function () {
                          var e = (0, b.getCurrentInstance)().page;
                          null == e ||
                            e.showCommonDrawer({
                              hideTitle: !0,
                              hideClose: !0,
                              content: function (e) {
                                var n = e.onClose;
                                return (0, D.tZ)(X, { onClose: n });
                              },
                            });
                        },
                        children: [
                          "了解原因",
                          (0, D.tZ)(B.Z, {
                            className: " _C _Kc",
                            children: "󰲧",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, D.tZ)(f.View, {
                    className: " _ol _pb _Mb _uk",
                    children:
                      null == n
                        ? void 0
                        : n.map(function (e, t) {
                            return (0,
                            D.tZ)(f.View, { className: " _dd _Ti _S", style: "".concat(t !== n.length - 1 ? "margin-bottom: 8px" : ""), children: e.title }, e.title);
                          }),
                  }),
                ],
              });
            },
            P = t(298),
            R = t(90129),
            j = t(49528),
            O = t(1841),
            q = t(10844),
            G = function (e) {
              var n = e.content,
                t = e.onConfirm,
                i = e.onCancel;
              return (0, D.BX)(f.View, {
                className: " _a _kd _yc _p",
                children: [
                  (0, D.tZ)(f.Image, {
                    className: " _Z _Lp _u",
                    src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
                  }),
                  (0, D.BX)(f.View, {
                    style: "position: relative; z-index: 1;",
                    children: [
                      (0, D.tZ)(f.View, {
                        className: " _dd _pd _Oc _Mp _o",
                        children: "确认提交改签吗",
                      }),
                      (0, D.tZ)(f.View, {
                        className: " _Nd _Ti _U _Np _Mb _Op _o",
                        children: n,
                      }),
                    ],
                  }),
                  (0, D.BX)(f.View, {
                    className: " _i _Ga _l _Mb _Cc _Rh",
                    children: [
                      (0, D.tZ)(f.Button, {
                        className: " _j _Qf _Gc _Oa _i _l _n _vd",
                        onClick: function () {
                          return null == i ? void 0 : i();
                        },
                        children: (0, D.tZ)(f.Text, {
                          className: " _x _Yb _V",
                          children: "取消",
                        }),
                      }),
                      (0, D.tZ)(f.Button, {
                        className: " _j _Gc _Oa _i _l _w _n",
                        onClick: function () {
                          return null == t ? void 0 : t();
                        },
                        children: (0, D.tZ)(f.Text, {
                          className: " _b _Yb _V",
                          children: "确定",
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
            S = p().getSystemInfoSync().windowHeight,
            z = function (e) {
              var n = e.priceDetail,
                t = e.explanation,
                i = void 0 === t ? [] : t,
                a = e.onClose,
                o = void 0 === a ? function () {} : a;
              return (0, D.tZ)(D.HY, {
                children: (0, D.BX)(T.Z, {
                  start: { x: 0, y: 0 },
                  end: { x: 0, y: 1 },
                  colors: ["#ffffff", "#f5f5f5"],
                  locations: [0, 0.16],
                  style: { overflow: "hidden" },
                  children: [
                    (0, D.BX)(f.View, {
                      className: " _ok _Nc _p _o _pk",
                      children: [
                        "改签费用明细",
                        (0, D.tZ)(f.View, {
                          className: " _u _qk _il",
                          onClick: o,
                          children: (0, D.tZ)(B.Z, {
                            className: " _rk _Bd",
                            children: "󰳭",
                          }),
                        }),
                      ],
                    }),
                    (0, D.BX)(f.View, {
                      className: " _a _Xa _jl _Mb _kl",
                      children: [
                        null == n
                          ? void 0
                          : n.map(function (e) {
                              var n = e.title,
                                t = e.totalPrice,
                                i = e.priceDetails;
                              return (0, D.BX)(D.HY, {
                                children: [
                                  (0, D.tZ)(f.View, {
                                    className: " _ll",
                                    children: (0, D.BX)(f.View, {
                                      className: " _i _Ga _l _Rh",
                                      children: [
                                        (0, D.tZ)(f.View, {
                                          className: " _i _nl",
                                          children: (0, D.tZ)(f.Text, {
                                            className: " _dd _Pa",
                                            children: n,
                                          }),
                                        }),
                                        t <= -1 || null == t
                                          ? (0, D.tZ)(f.View, {
                                              className: " _i _Ga _ok _G",
                                              style: Y.zxRegularFont,
                                              children: "待确认",
                                            })
                                          : (0, D.BX)(f.View, {
                                              className: " _i _Ga _ok _G",
                                              style: Y.zxRegularFont,
                                              children: ["¥", t],
                                            }),
                                      ],
                                    }),
                                  }),
                                  !(t <= -1 || null == t) &&
                                    (null == i
                                      ? void 0
                                      : i.map(function (e, n) {
                                          var t;
                                          return (0,
                                          D.BX)(f.View, { className: " _i _Ga _l _ml", children: [(0, D.tZ)(f.View, { className: " _i _nl", children: (0, D.tZ)(O.Z, { className: " _dd _Ti", children: null !== (t = e.title) && void 0 !== t ? t : "" }) }), (0, D.BX)(f.View, { className: " _i _Ga _ok _G", style: Y.zxRegularFont, children: ["¥", e.price, "x", e.count] })] }, "".concat(n, "-").concat(e.price));
                                        })),
                                ],
                              });
                            }),
                        (null == i ? void 0 : i.length) > 0 &&
                          (0, D.tZ)(f.View, {
                            className: " _ol _pb _Mb _uk",
                            children:
                              null == i
                                ? void 0
                                : i.map(function (e, n) {
                                    return (0,
                                    D.tZ)(f.View, { className: " _Kc _Na", style: "".concat(n !== i.length - 1 ? "margin-bottom: 8px" : ""), children: e }, n);
                                  }),
                          }),
                      ],
                    }),
                    (0, D.tZ)(f.View, { className: " _Id _Z" }),
                  ],
                }),
              });
            },
            M = function (e) {
              var n,
                t,
                i,
                a = e.flight,
                o = e.explanation,
                l = e.onSubmit,
                r = void 0 === l ? function () {} : l,
                c = (0, u.useState)(!1),
                s = (0, R.Z)(c, 2),
                d = s[0],
                _ = s[1],
                h =
                  null == a ||
                  null === (n = a.changeFlightPriceInfoDetail) ||
                  void 0 === n
                    ? void 0
                    : n.rebookTotalFee,
                m = [
                  {
                    title: "改签总费用",
                    totalPrice:
                      null == a ||
                      null === (t = a.changeFlightPriceInfoDetail) ||
                      void 0 === t
                        ? void 0
                        : t.rebookTotalFee,
                    priceDetails:
                      (null == a ||
                      null === (i = a.changeFlightPriceInfoDetail) ||
                      void 0 === i
                        ? void 0
                        : i.changeFeeDetails) || [],
                  },
                ],
                g = function () {
                  d && _(!1),
                    (function (e) {
                      var n = e.content,
                        t = e.onConfirm,
                        i = e.onCancel;
                      new Promise(function () {
                        var e = (0, b.getCurrentInstance)().page;
                        null == e ||
                          e.showCommonDrawer({
                            hideClose: !0,
                            hideTitle: !0,
                            content: function (e) {
                              var a = e.onClose;
                              return (0, D.tZ)(G, {
                                content: n,
                                onConfirm: function () {
                                  null == a || a(), null == t || t();
                                },
                                onCancel: function () {
                                  null == i || i(), null == a || a();
                                },
                              });
                            },
                            className: " _Kp _u",
                          });
                      });
                    })({
                      content: "申请提交后不可撤销，将尽快为您改签。",
                      onConfirm: function () {
                        null == r || r();
                      },
                    });
                };
              return (0, D.tZ)(q.Z, {
                bottomView: (0, D.BX)(f.View, {
                  style: Y.bottomContainer,
                  children: [
                    (0, D.BX)(f.View, {
                      className: " _Db _i _xp",
                      children: [
                        (0, D.BX)(f.View, {
                          style: (0, P.Z)(
                            (0, P.Z)({}, null === h ? { fontSize: 18 } : {}),
                            Y.zxRegularFont
                          ),
                          className: " _i _Ga _pf _Ze _rk _Oc",
                          children: [
                            null !== h &&
                              (0, D.tZ)(f.Text, {
                                style: Y.zxRegularFont,
                                className: " _Ze _K",
                                children: "¥",
                              }),
                            null !== h ? h : "待确认",
                          ],
                        }),
                        (0, D.tZ)(f.View, {
                          className: " _Kc _Na _gj",
                          children: "改签费",
                        }),
                      ],
                    }),
                    (0, D.BX)(f.View, {
                      className: " _i _Ga _l _Kc _Na",
                      onClick: function () {
                        return _(!d);
                      },
                      children: [
                        "明细",
                        d
                          ? (0, D.tZ)(B.Z, {
                              className: " _E _Og _Kc",
                              children: "󰳪",
                            })
                          : (0, D.tZ)(B.Z, {
                              className: " _E _Og _Kc",
                              children: "󰳩",
                            }),
                      ],
                    }),
                    (0, D.tZ)(f.View, {
                      className: " _vp",
                      children: (0, D.tZ)(f.Button, {
                        className: " _w _Oa _i _Mb _l _n _yp _Gc",
                        onClick: function () {
                          _(!1), null == g || g();
                        },
                        children: (0, D.tZ)(f.Text, {
                          className: " _b _Yb _W",
                          children: "提交申请",
                        }),
                      }),
                    }),
                  ],
                }),
                extraView: (0, D.tZ)(f.View, {
                  className: " _a _Z _zp _Ap _yc",
                  children: (0, D.tZ)(z, {
                    explanation: o || [],
                    priceDetail: m,
                    onClose: function () {
                      return _(!1);
                    },
                  }),
                }),
                showExtraView: d,
                hideModal: function () {
                  return _(!1);
                },
                bottomViewHeight: 64,
              });
            },
            Y = (0, j.lW)({
              container: {
                position: "absolute",
                bottom: 0,
                width: "100%",
                zIndex: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              },
              mask: {
                backgroundColor: "rgba(0,0,0,0.7)",
                height: S,
                zIndex: 1e3,
              },
              zxRegularFont: { fontFamily: (0, j.QQ)() },
              bottomContainer: {
                backgroundColor: "#fff",
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                paddingLeft: 8,
                paddingTop: 8,
                paddingRight: 8,
                boxSizing: "border-box",
              },
            }),
            K =
              (0, h.h)(!1)(
                (i = (function (e) {
                  (0, c.Z)(t, e);
                  var n = (0, s.Z)(t);
                  function t(e) {
                    var i;
                    return (
                      (0, o.Z)(this, t),
                      (i = n.call(this, e)),
                      (0, d.Z)((0, r.Z)(i), "isIntl", !1),
                      (0, d.Z)((0, r.Z)(i), "params", void 0),
                      (0, d.Z)((0, r.Z)(i), "orderNumber", void 0),
                      (0, d.Z)((0, r.Z)(i), "changeFlightInfo", void 0),
                      (0, d.Z)((0, r.Z)(i), "pageId", ""),
                      (0, d.Z)((0, r.Z)(i), "goOrderDetailPage", function () {
                        i.isIntl
                          ? (0, k.fy)(i.orderNumber)
                          : (0, k.Cz)(i.orderNumber);
                      }),
                      (0, d.Z)((0, r.Z)(i), "handleRebookSubmit", function () {
                        (0, Z.Q)("查询可订舱位中"),
                          i
                            .doRebookCheck()
                            .then(function (e) {
                              (0, Z.Z)(),
                                setTimeout(function () {
                                  (0, Z.Q)("提交改签申请中"),
                                    i.doRebookSubmit(e).finally(Z.Z);
                                });
                            })
                            .catch(function () {
                              (0, Z.Z)(),
                                setTimeout(function () {
                                  p().showToast({
                                    icon: "error",
                                    title: "提交失败，请重试",
                                  });
                                });
                            });
                      }),
                      (i.state = {
                        flight: null,
                        segments: [],
                        passengers: [],
                        productId: "",
                      }),
                      i
                    );
                  }
                  return (
                    (0, l.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e;
                          this.params =
                            null === (e = (0, b.getCurrentInstance)().router) ||
                            void 0 === e
                              ? void 0
                              : e.params;
                          var n = this.params || {},
                            t = n.flight,
                            i = n.changePassengerList,
                            a = n.explanation,
                            o = n.isIntl,
                            l = n.orderNumber,
                            r = n.productId,
                            c = n.rebookType,
                            s = n.segmentIndex,
                            d = (0, w.tb)(t);
                          (this.isIntl = !!o),
                            (this.orderNumber = l),
                            (this.changeFlightInfo = t),
                            x.Z.isCRN
                              ? (this.pageId = this.isIntl ? "10650103454" : "")
                              : (this.pageId = this.isIntl
                                  ? "10650103466"
                                  : ""),
                            this.setState({
                              rebookType: c,
                              productId: r,
                              segmentIndex: s,
                              segments: d,
                              flight: t,
                              passengers: i,
                              explanation: a,
                            });
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return (
                            console.log("getPageId " + this.pageId), this.pageId
                          );
                        },
                      },
                      {
                        key: "doRebookSubmit",
                        value: function (e) {
                          var n = this,
                            t = this.state,
                            i = t.productId,
                            a = t.rebookType,
                            o = t.segmentIndex,
                            l = t.passengers,
                            r = this.changeFlightInfo || {},
                            c = r.changeFlightExtensionData,
                            s = r.changeFlightBasicInfo,
                            d = r.changeFlightTripInfo,
                            u = {
                              data: {
                                pnr: e,
                                productId: i,
                                orderNumber: this.orderNumber || "",
                                rebookType: a,
                                segmentIndex: o,
                                submitData: {
                                  departDate: d.departDateTime,
                                  flightNumber: s.flightNumber,
                                },
                                changeFlightExtensionData: c,
                                rebookPassengers: l,
                              },
                            };
                          return (0, v.m)(N.ns, u)
                            .then(function (e) {
                              var t = e.rebookOrderNumber,
                                i = e.orderPaymentInfo;
                              !i || i.totalPrice <= 0
                                ? n.goOrderDetailPage()
                                : (0, N.aP)({ data: { orderNumber: t } })
                                    .then(function (e) {
                                      var i = e || {},
                                        a = i.resultCode,
                                        o = i.data;
                                      1 == a
                                        ? (0, k.ce)(
                                            {
                                              orderNumber: t,
                                              goodsId: o.goodsId,
                                            },
                                            n.goOrderDetailPage.bind(n)
                                          )
                                        : (0, C.v)(
                                            "",
                                            e.resultMessage ||
                                              "网络异常，请稍后再试"
                                          );
                                    })
                                    .catch(function (e) {
                                      (0, C.v)("", e.message);
                                    });
                            })
                            .catch(function (e) {
                              p().showModal({ title: e.message });
                            });
                        },
                      },
                      {
                        key: "doRebookCheck",
                        value: function () {
                          var e = this.state,
                            n = e.productId,
                            t = e.rebookType,
                            i = e.segmentIndex,
                            a = e.passengers,
                            o = (this.changeFlightInfo || {})
                              .changeFlightExtensionData,
                            l = {
                              data: {
                                productId: n,
                                orderNumber: this.orderNumber,
                                rebookType: t,
                                segmentIndex: i,
                                changeFlightExtensionData: o,
                                rebookPassengers: a,
                              },
                            };
                          return (0, N.Fw)(l).then(function (e) {
                            var n = e.resultCode,
                              t = e.data;
                            if (1 != n || !t)
                              throw new Error("请求失败，请稍后重试");
                            return t.pnr;
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            n = this,
                            t = this.state,
                            i = t.segments,
                            a = t.passengers,
                            o = t.explanation,
                            l = t.flight,
                            r = [
                              {
                                label: "改签舱位",
                                value:
                                  ((l || {}).changeFlightTripInfo || {})
                                    .cabinName || "",
                              },
                            ];
                          return (0, D.BX)(f.View, {
                            className: " _Y _p _i _k _yd",
                            children: [
                              (0, D.tZ)(_.Z, { title: "改签确认" }),
                              (0, D.BX)(f.ScrollView, {
                                className: " _j _yc",
                                scrollY: !0,
                                showScrollbar: !1,
                                children: [
                                  this.isIntl &&
                                    (0, D.BX)(D.HY, {
                                      children: [
                                        (0, D.tZ)(V.J, { segments: i }),
                                        (0, D.tZ)(y.O, {
                                          passengers: a,
                                          extFields: r,
                                        }),
                                      ],
                                    }),
                                  !this.isIntl &&
                                    (0, D.tZ)(D.HY, {
                                      children: (0, D.tZ)(I.i, {
                                        segments: i,
                                        passengers: a,
                                        extField: r,
                                        fromPage: "rebookConfirm",
                                      }),
                                    }),
                                  (0, D.tZ)(F, {
                                    xProductDetails:
                                      null == a ||
                                      null === (e = a[0]) ||
                                      void 0 === e
                                        ? void 0
                                        : e.xProductDetails,
                                  }),
                                  (0, D.tZ)(m.Z, { hasBottomBtn: !1 }),
                                ],
                              }),
                              (0, D.tZ)(M, {
                                flight: l,
                                explanation: o || [],
                                onSubmit: this.handleRebookSubmit.bind(this),
                              }),
                              (0, D.tZ)(g.Z, {
                                ref: function (e) {
                                  return n.onDrawerAttach(e);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(u.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              K,
              "pages/taroCRN/flight/pages/rebookConfirm/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#f5f5f5",
                backgroundColorTop: "#f5f5f5",
                backgroundColorBottom: "#f5f5f5",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                disableScroll: !0,
                navigationBarTitleText: "改签确认",
                enablePullDownRefresh: !1,
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
            6189, 22843, 6878, 14906, 19559, 11216, 68592,
          ],
          function () {
            return (function (n) {
              return e((e.s = n));
            })(29572);
          }
        ),
          e.O();
      },
    ]);
})();
