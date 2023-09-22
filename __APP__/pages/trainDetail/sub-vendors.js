!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [93611],
    {
      69510: function (e, t, n) {
        var r = n(90129),
          a = n(52500),
          i = n(92954),
          c = n.n(i),
          o = n(71515),
          s = n(79910),
          u = n(48813);
        t.Z = a.default.memo(function (e) {
          var t = (0, a.useState)(!0),
            n = (0, r.Z)(t, 2),
            i = n[0],
            l = n[1],
            d = (0, a.useState)([]),
            p = (0, r.Z)(d, 2),
            h = p[0],
            f = p[1],
            m = e.isTieyou,
            v = e.title,
            Z = e.subTitle,
            g = e.buttonName,
            b = e.tmplIds,
            w = e.sourceCode,
            y = e.ubtTrace,
            _ = void 0 === y ? function () {} : y,
            C = e.confirm,
            N = void 0 === C ? function () {} : C,
            P = e.isuiv2,
            T = function () {
              b && 0 !== b.length
                ? s.Z.getSubscribe(b)
                    .then(function (e) {
                      l(e.mainSwitch), f(e.unKnownList || []);
                    })
                    .catch(function () {
                      l(!1);
                    })
                : f([]);
            };
          (0, a.useEffect)(function () {
            T(),
              _("s_trn_z_trace_10650060639", {
                bizKey: "z_mini_ordDetail_subscribe_show",
              });
          }, []);
          var x = function () {
            _("c_trn_z_10650060639", {
              bizKey: "z_mini_ordDetail_subscribe_click",
            }),
              s.Z.getSubscribe(b)
                .then(function (e) {
                  l(e.mainSwitch),
                    f(e.unKnownList || []),
                    e.mainSwitch &&
                    Array.isArray(e.unKnownList) &&
                    e.unKnownList.length > 0
                      ? s.Z.doSubscribe(e.unKnownList, w)
                          .then(function () {
                            T(), N();
                          })
                          .catch(function (e) {
                            T(), N(), console.log(e);
                          })
                      : c().showToast({
                          title: "无可订阅",
                          icon: "none",
                          duration: 2e3,
                        });
                })
                .catch(function () {});
          };
          return (0,
          u.tZ)(o.Block, { children: i && 0 !== h.length ? (P ? (0, u.BX)(o.View, { className: "common-subscription-content-v2 flex flex-center", children: [(0, u.BX)(o.View, { className: "bd flex-1 flex flex-column", children: [(0, u.tZ)(o.Text, { className: "tit", children: v }), (0, u.tZ)(o.Text, { className: "txt", children: Z })] }), (0, u.tZ)(o.Button, { className: "btn ".concat(m ? "ty" : "zx"), id: "AACK", onClick: x, children: g })] }) : (0, u.BX)(o.View, { className: "common-subscription-content", children: [(0, u.tZ)(o.Image, { src: m ? "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_ts_ty.png" : "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_ts.png", mode: "widthFix" }), (0, u.BX)(o.View, { className: "bd", children: [(0, u.tZ)(o.Text, { className: "tit", children: v }), (0, u.tZ)(o.Text, { className: "txt", children: Z })] }), (0, u.tZ)(o.Button, { className: "sub-btn ".concat(m ? "ty" : "zx"), id: "AACL", onClick: x, children: g })] })) : (0, u.tZ)(o.View, {}) });
        });
      },
      30541: function (e, t, n) {
        var r,
          a,
          i = n(298),
          c = n(57042),
          o = n(24460),
          s = n(21867),
          u = n(86066),
          l = n(45023),
          d = n(52500),
          p = (n(92954), n(71515)),
          h = n(79792),
          f = n(81957),
          m = n(25958),
          v = n(48813),
          Z =
            (0, f.h)(!0)(
              ((a = (function (e) {
                (0, s.Z)(n, e);
                var t = (0, u.Z)(n);
                function n(e) {
                  var r;
                  return (
                    (0, c.Z)(this, n),
                    ((r = t.call(this, e)).state = {
                      isTieyou: h.default.isTieyou,
                      isWechat: h.default.isWechat,
                      visible: !1,
                      modalInfo: {},
                    }),
                    r
                  );
                }
                return (
                  (0, o.Z)(n, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.initPage(this.props);
                      },
                    },
                    {
                      key: "UNSAFE_componentWillReceiveProps",
                      value: function (e) {
                        this.initPage(e);
                      },
                    },
                    {
                      key: "initPage",
                      value: function (e) {
                        var t = this.state.visible;
                        e.show !== t &&
                          this.setState({
                            visible: e.show,
                            modalInfo: (0, i.Z)({}, e.info),
                          });
                      },
                    },
                    {
                      key: "onClickSubmit",
                      value: function () {
                        this.props.onSuccess && this.props.onSuccess();
                      },
                    },
                    {
                      key: "onClickCancel",
                      value: function () {
                        this.props.onCancel && this.props.onCancel();
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.state,
                          t = e.isTieyou,
                          n = e.isWechat,
                          r = e.visible,
                          a = e.modalInfo;
                        return (0, v.tZ)(p.Block, {
                          children:
                            n &&
                            r &&
                            (0, v.tZ)(m.Z, {
                              show: r,
                              propStyle: "background: transparent;",
                              hiddenCloseIcon: "true",
                              onClose: function () {},
                              ubtTrace: function () {},
                              children: (0, v.BX)(p.View, {
                                className: "gzh-modal ".concat(t ? "ty" : "zx"),
                                children: [
                                  (0, v.tZ)(p.View, { className: "top-icon" }),
                                  (0, v.tZ)(p.View, { className: "top-image" }),
                                  (0, v.tZ)(p.View, {
                                    className: "title",
                                    children: a.title,
                                  }),
                                  (0, v.tZ)(p.View, {
                                    className: "desc",
                                    children: a.desc || a.subTitle,
                                  }),
                                  (0, v.BX)(p.View, {
                                    className: "gzh-btn",
                                    children: [
                                      (0, v.tZ)(p.View, {
                                        className: "gzh-left-btn",
                                        id: "AADh",
                                        onClick: this.onClickCancel.bind(this),
                                        children: "取消",
                                      }),
                                      (0, v.tZ)(p.View, {
                                        className:
                                          "gzh-right-btn bgcolor-primary",
                                        id: "AADi",
                                        onClick: this.onClickSubmit.bind(this),
                                        children: "去开启",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                        });
                      },
                    },
                  ]),
                  n
                );
              })(d.default.Component)),
              (0, l.Z)(a, "options", { addGlobalClass: !0 }),
              (r = a))
            ) || r;
        t.Z = Z;
      },
      70142: function (e, t, n) {
        var r = n(22276),
          a = n(79301),
          i = n(95308),
          c = n(90129),
          o = n(94262),
          s = n(34229),
          u = n(71515),
          l = n(92954),
          d = n.n(l),
          p = n(52500),
          h = n(48813);
        t.Z = (0, p.forwardRef)(function (e, t) {
          (0, o.Z)(e);
          var n = (0, p.useState)(""),
            l = (0, c.Z)(n, 2),
            f = l[0],
            m = l[1],
            v = (0, p.useState)(!1),
            Z = (0, c.Z)(v, 2),
            g = Z[0],
            b = Z[1],
            w = (0, p.useState)(!1),
            y = (0, c.Z)(w, 2),
            _ = y[0],
            C = y[1],
            N = (0, p.useState)(!0),
            P = (0, c.Z)(N, 2),
            T = P[0],
            x = P[1],
            V = (0, p.useState)(),
            S = (0, c.Z)(V, 2),
            k = S[0],
            I = S[1],
            z = (0, p.useRef)(),
            A = (0, p.useRef)(),
            B = (0, p.useRef)(),
            E = k || {},
            R = E.availablePoints,
            F = void 0 === R ? 0 : R,
            D = E.consumptionPoints,
            L = void 0 === D ? 0 : D,
            O = E.serviceChargeAmount,
            U = void 0 === O ? 0 : O;
          (0, p.useLayoutEffect)(
            function () {
              d().nextTick(function () {
                g && C(!0);
              });
            },
            [g]
          );
          var X = function () {
              (z.current = null),
                (A.current = null),
                (B.current = null),
                C(!1),
                b(!1);
            },
            H = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(t) {
                  var n;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (6 === t.length) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            x(!1),
                            (e.next = 5),
                            null === (n = z.current) || void 0 === n
                              ? void 0
                              : n.call(z, t)
                          );
                        case 5:
                          x(!0), m("");
                        case 7:
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
            G = (function () {
              var e = (0, i.Z)(
                (0, a.Z)().mark(function e(t) {
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          m(t.detail.value), H(t.detail.value);
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
            })();
          return (
            (0, p.useImperativeHandle)(t, function () {
              return {
                show: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  m(""),
                    b(!0),
                    I(e.ticketPointInfo),
                    (z.current = e.success),
                    (A.current = e.fail),
                    (B.current = e.cancel);
                },
                close: X,
              };
            }),
            g || _
              ? (0, h.BX)(s.ZtDrawer, {
                  className: "trn-point-pay-layer",
                  title: "请输入6位积分密码",
                  show: _,
                  isShowClose: !1,
                  children: [
                    (0, h.tZ)(u.View, {
                      className: "iconfont2 ifont2-close close-btn",
                      id: "AADn",
                      onClick: function () {
                        var e;
                        null === (e = B.current) || void 0 === e || e.call(B),
                          X();
                      },
                    }),
                    (0, h.BX)(u.View, {
                      className: "layer-content",
                      children: [
                        (0, h.tZ)(u.View, {
                          className: "title",
                          children: "积分明细",
                        }),
                        !!F &&
                          (0, h.BX)(u.View, {
                            className: "flex list-item",
                            children: [
                              (0, h.tZ)(u.View, {
                                className: "flex-1 name",
                                children: "账户可用积分",
                              }),
                              (0, h.tZ)(u.View, {
                                className: "value",
                                children: F,
                              }),
                            ],
                          }),
                        !!L &&
                          (0, h.BX)(u.View, {
                            className: "flex list-item",
                            children: [
                              (0, h.tZ)(u.View, {
                                className: "flex-1 name",
                                children: "本次消费积分",
                              }),
                              (0, h.BX)(u.View, {
                                className: "value",
                                children: ["-", L],
                              }),
                            ],
                          }),
                        !!U &&
                          (0, h.BX)(u.View, {
                            className: "flex list-item",
                            children: [
                              (0, h.tZ)(u.View, {
                                className: "flex-1 name",
                                children: "铁路局收取手续费",
                              }),
                              (0, h.BX)(u.View, {
                                className: "value",
                                children: ["-", U],
                              }),
                            ],
                          }),
                        (0, h.tZ)(u.View, {
                          className: "tip",
                          children: "积分兑换车票暂不支持退票、变更到站和报销~",
                        }),
                        (0, h.tZ)(u.View, { className: "dash" }),
                        (0, h.tZ)(u.View, {
                          className: "point-pas-content",
                          children: (0, h.BX)(u.View, {
                            className: "flex pass-input",
                            children: [
                              (0, r.Z)(new Array(6)).map(function (e, t) {
                                return (0,
                                h.tZ)(u.View, { className: "inner-input-show ".concat(f[t] ? "with-value" : "") }, t);
                              }),
                              (0, h.tZ)(u.Input, {
                                className: "inner-input",
                                type: "password",
                                onInput: G,
                                maxlength: 6,
                                cursorSpacing: 50,
                                value: f,
                                disabled: !T,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : (0, h.tZ)(h.HY, {})
          );
        });
      },
      59076: function (e, t, n) {
        n.d(t, {
          Ar: function () {
            return A;
          },
          C9: function () {
            return f;
          },
          DY: function () {
            return d;
          },
          GE: function () {
            return y;
          },
          GQ: function () {
            return u;
          },
          HF: function () {
            return s;
          },
          HU: function () {
            return D;
          },
          IT: function () {
            return z;
          },
          J3: function () {
            return T;
          },
          JI: function () {
            return C;
          },
          Kb: function () {
            return B;
          },
          LN: function () {
            return N;
          },
          N3: function () {
            return c;
          },
          SU: function () {
            return R;
          },
          Sh: function () {
            return _;
          },
          WG: function () {
            return F;
          },
          XF: function () {
            return Z;
          },
          Z8: function () {
            return S;
          },
          a5: function () {
            return i;
          },
          aA: function () {
            return P;
          },
          cw: function () {
            return w;
          },
          dl: function () {
            return h;
          },
          ff: function () {
            return E;
          },
          gH: function () {
            return V;
          },
          hA: function () {
            return m;
          },
          hc: function () {
            return g;
          },
          l8: function () {
            return l;
          },
          lz: function () {
            return v;
          },
          oy: function () {
            return o;
          },
          uA: function () {
            return p;
          },
          v3: function () {
            return x;
          },
          v6: function () {
            return k;
          },
          wm: function () {
            return I;
          },
          ze: function () {
            return b;
          },
        });
        var r = n(79792),
          a = n(17377),
          i = (0, a.ZP)({
            serviceCode: "17165",
            channel: r.default.train_channel,
            path: "deBookLimitBenefit",
          }),
          c =
            ((0, a.ZP)({
              serviceCode: "17276",
              channel: r.default.train_channel,
              path: "checkAheadPayStatus",
            }),
            (0, a.ZP)({
              serviceCode: "17165",
              channel: r.default.train_channel,
              path: "frontNotifyCandidateInfo",
            })),
          o =
            ((0, a.ZP)({
              serviceCode: "17276",
              channel: r.default.train_channel,
              path: "PayResultNotifyV1",
            }),
            (0, a.ZP)({
              serviceCode: "17276",
              channel: r.default.train_channel,
              path: "PaySubmitNotifyV1",
            }),
            (0, a.ZP)({
              serviceCode: "17276",
              channel: r.default.train_channel,
              path: "pushZfProductInfo",
              correctVersion: "709981",
            }),
            (0, a.ZP)({
              serviceCode: "17276",
              channel: r.default.train_channel,
              path: "GetGoPayInfoAy",
            }),
            (0, a.ZP)({
              serviceCode: "17276",
              channel: r.default.train_channel,
              path: "getTrainPayTypeList",
              correctVersion: "998",
            }),
            (0, a.ZP)({
              serviceCode: "19480",
              channel: r.default.train_channel,
              path: "GrabOrderOpenCandidate",
            })),
          s = (0, a.ZP)({
            serviceCode: "19480",
            channel: r.default.train_channel,
            path: "GetCandidateOrderDetailInfo",
          }),
          u =
            ((0, a.ZP)({
              serviceCode: "13892",
              channel: r.default.train_channel,
              path: "getOnTrainThenByTicketSolu",
            }),
            (0, a.ZP)({
              serviceCode: "17165",
              channel: r.default.train_channel,
              path: "speedUpGrabTicket",
            })),
          l =
            ((0, a.ZP)({
              serviceCode: "17165",
              channel: r.default.train_channel,
              path: "discountSpeedPackLottery",
            }),
            (0, a.ZP)({
              serviceCode: "17165",
              channel: r.default.train_channel,
              path: "selectDiscountSpeedProduct",
            }),
            (0, a.ZP)({
              serviceCode: "17165",
              channel: r.default.train_channel,
              path: "getDiscountSpeedProductInfo",
            }),
            (0, a.ZP)({
              serviceCode: "18758",
              channel: r.default.train_channel,
              path: "getVipInfoOfOrderDetailPage",
              correctVersion: "709992",
            })),
          d = (0, a.ZP)({
            serviceCode: "14228",
            channel: r.default.train_channel,
            path: "ApplyClaim",
          }),
          p =
            ((0, a.ZP)({
              serviceCode: "14289",
              path: "GetHotelAndFlightNewGuestCouponStatus",
              channel: r.default.train_channel,
            }),
            (0, a.ZP)({
              serviceCode: "16312",
              path: "getTrainRecommendForDetail",
              channel: r.default.train_channel,
              correctVersion: "986",
            }),
            (0, a.ZP)({
              serviceCode: "19480",
              path: "UpdateGrabOrderProduct",
              channel: r.default.train_channel,
              correctVersion: "34",
            })),
          h = (0, a.ZP)({
            serviceCode: "19480",
            path: "GetGrabOrderDetail",
            channel: r.default.train_channel,
            correctVersion: "710014",
          }),
          f = (0, a.ZP)({
            serviceCode: "14228",
            path: "GetCancelGrabTicketInterceptInfo",
            channel: r.default.train_channel,
            correctVersion: "34",
          }),
          m =
            ((0, a.ZP)({
              serviceCode: "19480",
              path: "GrabTicketSplitCreateOrder",
              channel: r.default.train_channel,
              correctVersion: "36",
            }),
            (0, a.ZP)({
              serviceCode: "16312",
              path: "getTrainRecommendForGrabOrderDetail",
              channel: r.default.train_channel,
              correctVersion: "971",
            })),
          v = (0, a.ZP)({
            serviceCode: "17165",
            path: "UserT6AccountOperateResultNotify",
            channel: r.default.train_channel,
            correctVersion: "39",
          }),
          Z = (0, a.ZP)({
            serviceCode: "17165",
            path: "getOrderMobileVerifyInfo",
            channel: r.default.train_channel,
            correctVersion: "39",
          }),
          g =
            ((0, a.ZP)({
              serviceCode: "17276",
              channel: r.default.train_channel,
              path: "getTrainPaymentID",
            }),
            (0, a.ZP)({
              serviceCode: "19480",
              channel: r.default.train_channel,
              path: "UpdateGrabOrder",
              correctVersion: "34",
            })),
          b = (0, a.ZP)({
            serviceCode: "16903",
            channel: r.default.train_channel,
            path: "getGrabOrderShareInfo",
          }),
          w = (0, a.ZP)({
            serviceCode: "17165",
            channel: r.default.train_channel,
            path: "grabSuccessReward",
          }),
          y = (0, a.ZP)({
            serviceCode: "16312",
            channel: r.default.train_channel,
            path: "getGrabSpeedTask",
          }),
          _ = (0, a.ZP)({
            serviceCode: "16312",
            channel: r.default.train_channel,
            path: "clickGrabSpeedTask",
          }),
          C = (0, a.ZP)({
            serviceCode: "16903",
            channel: r.default.train_channel,
            path: "receiveGiftBag",
          }),
          N =
            ((0, a.ZP)({
              serviceCode: "18497",
              channel: r.default.train_channel,
              path: "getInformalVipClaimInfo",
              correctVersion: "986",
            }),
            (0, a.ZP)({
              serviceCode: "18497",
              channel: r.default.train_channel,
              path: "InformalVipRefund",
              correctVersion: "986",
            }),
            (0, a.ZP)({
              serviceCode: "18497",
              channel: r.default.train_channel,
              path: "InformalVipClaim",
              correctVersion: "986",
            }),
            (0, a.ZP)({
              serviceCode: "16312",
              channel: r.default.train_channel,
              path: "getActivityInfo",
            })),
          P = (0, a.ZP)({
            serviceCode: "16903",
            path: "getRelativeAccountShareInfo",
            channel: r.default.train_channel,
            correctVersion: "992",
          }),
          T = (0, a.ZP)({
            serviceCode: "19480",
            channel: r.default.train_channel,
            path: "grabHoldSeatDetail",
            correctVersion: "710014",
          }),
          x = (0, a.ZP)({
            serviceCode: "19480",
            channel: r.default.train_channel,
            path: "grabApplyClaim",
          }),
          V = (0, a.ZP)({
            serviceCode: "16312",
            channel: r.default.train_channel,
            path: "getGrabDetailPageCrossStationInfo",
          }),
          S = (0, a.ZP)({
            serviceCode: "18497",
            channel: r.default.train_channel,
            path: "getWechatMinVipProducts",
            correctVersion: "986",
          }),
          k =
            ((0, a.ZP)({
              serviceCode: "17276",
              channel: r.default.train_channel,
              path: "getTrainPaymentID",
              correctVersion: "995",
            }),
            (0, a.ZP)({
              serviceCode: "16367",
              channel: r.default.train_channel,
              path: "attractWeChatGroupLike",
            })),
          I = (0, a.ZP)({
            serviceCode: "19480",
            channel: r.default.train_channel,
            path: "applyHrsSf",
          }),
          z = (0, a.ZP)({
            serviceCode: "17276",
            channel: r.default.train_channel,
            path: "getInsuranceList",
          }),
          A = (0, a.ZP)({
            serviceCode: "17276",
            path: "reBookingOrder",
            channel: r.default.train_channel,
          }),
          B = (0, a.ZP)({
            serviceCode: "16312",
            channel: r.default.train_channel,
            path: "getStudentLongTermActivity",
          }),
          E = (0, a.ZP)({
            serviceCode: "17165",
            channel: r.default.train_channel,
            path: "queryHoldSeatForTicketStep",
          }),
          R = (0, a.ZP)({
            serviceCode: "17165",
            channel: r.default.train_channel,
            path: "bookHoldSeatConfirm",
          }),
          F = (0, a.ZP)({
            serviceCode: "17165",
            channel: r.default.train_channel,
            path: "notifyStudentChangeAuditResume",
          }),
          D = (0, a.ZP)({
            serviceCode: "22867",
            channel: r.default.train_channel,
            path: "multiEditAssignee",
          });
      },
      94912: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return p;
          },
        });
        var r = n(57042),
          a = n(24460),
          i = n(21867),
          c = n(86066),
          o = n(52500),
          s = n(71515),
          u = n(34229),
          l = n(3205),
          d = n(48813),
          p = (function (e) {
            (0, i.Z)(n, e);
            var t = (0, c.Z)(n);
            function n(e) {
              return (0, r.Z)(this, n), t.call(this, e);
            }
            return (
              (0, a.Z)(n, [
                {
                  key: "onClickFriendBox",
                  value: function () {
                    var e = this.props.friendActivityInfo;
                    e &&
                      e.jumpUrl &&
                      l.Z.twebview({ data: { url: e.jumpUrl } });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props.friendActivityInfo;
                    return e
                      ? (0, d.BX)(s.View, {
                          className: "lead-group",
                          id: "AJAc",
                          onClick: this.onClickFriendBox.bind(this),
                          children: [
                            (0, d.BX)(s.View, {
                              class: "fa-top",
                              children: [
                                (0, d.BX)(s.View, {
                                  className: "left-box",
                                  children: [
                                    (0, d.tZ)(s.Image, {
                                      className: "img",
                                      src: "https://images3.c-ctrip.com/ztrip/train_xie/2021-08/welfare.png",
                                    }),
                                    (0, d.tZ)(u.ZtRichText, {
                                      className: "title",
                                      nodes: e.title,
                                    }),
                                  ],
                                }),
                                (0, d.tZ)(s.Button, {
                                  className: "btn",
                                  children: e.buttonName,
                                }),
                              ],
                            }),
                            (0, d.tZ)(s.View, {
                              class: "fa-bottom",
                              children: e.content.map(function (e) {
                                return (0,
                                d.BX)(s.View, { className: "item", children: [(0, d.tZ)(s.View, { className: "title", children: e.title }), (0, d.BX)(s.View, { className: "desc", children: [(0, d.tZ)(s.Image, { className: "icon", src: e.icon }), (0, d.tZ)(s.View, { className: "txt", children: e.desc })] })] }, e.title);
                              }),
                            }),
                          ],
                        })
                      : (0, d.tZ)(d.HY, {});
                  },
                },
              ]),
              n
            );
          })(o.Component);
      },
      54675: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        var r = n(52500),
          a = n(34229),
          i = n(71515),
          c = n(79910),
          o = n(48813);
        function s(e) {
          var t = e.info,
            n = e.isShow,
            s = e.onClose,
            u = void 0 === s ? function () {} : s,
            l = e.showCb,
            d = void 0 === l ? function () {} : l;
          if (!t) return null;
          (0, r.useEffect)(
            function () {
              n && d();
            },
            [n]
          );
          var p = t.link,
            h = void 0 === p ? "" : p,
            f = t.couponTag,
            m = t.couponName,
            v = t.titleImageUrl,
            Z = t.couponPrice,
            g = t.buttonName,
            b = void 0 === g ? "立即领取" : g,
            w = t.describeToast,
            y = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "scaleToFill";
              return (0, o.tZ)(i.Image, {
                src: e,
                webp: !0,
                mode: t,
                className: "bg-image-comp",
              });
            };
          return (0, o.tZ)(a.ZtActivityPop, {
            className: "trainDetail-market-big-amount-gifts-dialog",
            show: n,
            animation: "comeup",
            onClose: u,
            children: (0, o.BX)(i.View, {
              className: "trainDetail-market-big-amount-gifts-content",
              children: [
                (0, o.BX)(i.View, {
                  className: "tag with-bg",
                  children: [
                    y(
                      "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/img_bg_biaoti.webp"
                    ),
                    "大额券发放中",
                  ],
                }),
                (0, o.tZ)(i.View, {
                  className: "title",
                  children: (0, o.tZ)(i.Image, {
                    src:
                      v ||
                      "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/wenzi_biaoti.webp",
                    webp: !0,
                    mode: "aspectFit",
                    className: "title-img",
                  }),
                }),
                w &&
                  (0, o.tZ)(i.View, {
                    className: "title-desc",
                    children: (0, o.tZ)(i.View, {
                      className: "text",
                      children: w,
                    }),
                  }),
                (0, o.BX)(i.View, {
                  className: "coupon-content with-bg",
                  children: [
                    y(
                      "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/img_bg_quan.webp"
                    ),
                    (0, o.tZ)(i.View, {
                      className: "price-content",
                      children: Z,
                    }),
                    (0, o.BX)(i.View, {
                      className: "info-content",
                      children: [
                        (0, o.tZ)(i.View, {
                          className: "coupon-title",
                          children: m,
                        }),
                        f &&
                          (0, o.tZ)(i.View, {
                            className: "coupon-tag",
                            children: f,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, o.BX)(i.View, {
                  className: "bottom-content",
                  children: [
                    (0, o.tZ)(i.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/img_bg_zhezhao.webp",
                      webp: !0,
                      mode: "aspectFit",
                      className: "btm-img",
                    }),
                    (0, o.BX)(i.View, {
                      className: "receive-btn with-bg",
                      id: "AJAe",
                      onClick: function () {
                        c.Z.commonNavigator(h), u();
                      },
                      children: [
                        y(
                          "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/btn_tc.webp"
                        ),
                        b,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
      },
      92735: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return v;
          },
        });
        var r = n(79301),
          a = n(95308),
          i = n(90129),
          c = n(52500),
          o = n(92954),
          s = n.n(o),
          u = n(10741),
          l = n(34229),
          d = n(71515),
          p = n(49120),
          h = n(46408),
          f = n(79910),
          m = n(48813);
        function v(e) {
          var t,
            n = e.info,
            o = e.isShow,
            v = void 0 !== o && o,
            Z = e.isBuyTicket,
            g = void 0 === Z || Z,
            b = e.onClose,
            w = void 0 === b ? function () {} : b,
            y = e.handleToH5Cb,
            _ = void 0 === y ? function () {} : y,
            C = e.ubtTrace,
            N = void 0 === C ? function () {} : C,
            P = (0, c.useState)(!1),
            T = (0, i.Z)(P, 2),
            x = T[0],
            V = T[1],
            S = (0, c.useState)(3),
            k = (0, i.Z)(S, 2),
            I = k[0],
            z = k[1],
            A = (0, c.useState)(!1),
            B = (0, i.Z)(A, 2),
            E = B[0],
            R = B[1];
          if (null == n || null === (t = n.data) || void 0 === t || !t.length)
            return null;
          var F = n.data,
            D = void 0 === F ? [] : F,
            L = n.isNewUI,
            O = void 0 === L || L,
            U = (function () {
              var e = (0, a.Z)(
                (0, r.Z)().mark(function e() {
                  var t, a, i, c;
                  return (0, r.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              R(!0),
                              z(0),
                              (0, p.showLoading)(),
                              (e.prev = 3),
                              (t = n.params),
                              (e.next = 7),
                              (0, u.h7T)({ channels: t })
                            );
                          case 7:
                            if (
                              ((a = e.sent),
                              (i = a.resultCode),
                              (c = a.resultMessage),
                              (0, p.hideLoading)(),
                              1 === i)
                            ) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (0, p.showToast)(c || "领取失败，请稍候重试~"),
                              e.abrupt("return")
                            );
                          case 14:
                            (0, p.showToast)(c || "领取成功~"),
                              V(!0),
                              (e.next = 22);
                            break;
                          case 18:
                            (e.prev = 18),
                              (e.t0 = e.catch(3)),
                              (0, p.hideLoading)(),
                              (0, p.showToast)("领取失败，请稍候重试~");
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 18]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (0, c.useEffect)(
            function () {
              if (!x && D.length && v && !O) {
                if (E) return;
                !(function () {
                  if (I <= 0)
                    return (
                      N("c_trn_z_10650008849", {
                        bizKey: "MarketCouponAutomaticClaim",
                      }),
                      void U()
                    );
                  setTimeout(function () {
                    E || z(I - 1);
                  }, 1e3);
                })();
              }
            },
            [x, O, I, v, D, E]
          ),
            (0, c.useEffect)(
              function () {
                D.length > 0 &&
                  h.Z.refreshObserve(s().getCurrentInstance().page);
              },
              [D]
            );
          var X = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "scaleToFill";
              return (0, m.tZ)(d.Image, {
                src: e,
                webp: !0,
                mode: t,
                className: "bg-image-comp",
              });
            },
            H = g
              ? "https://images3.c-ctrip.com/ztrip/zhixingios/sz-zengzhang/img1_tanchuang_gp.webp"
              : "https://images3.c-ctrip.com/ztrip/zhixingios/sz-zengzhang/img1_tanchuang_qp.webp";
          return (0, m.tZ)(l.ZtActivityPop, {
            show: v,
            animation: "comeup",
            className: "train-market0-coupon-dialog",
            onClose: w,
            children: (0, m.BX)(d.View, {
              className: "dialog-content autoExpose",
              "data-expose": {
                data: { bizKey: "MarketCouponPopupShow" },
                ubtKeyName: "s_trn_z_trace_10650008849",
              },
              children: [
                (0, m.tZ)(d.View, {
                  className: "top-content ".concat(
                    x ? "received-top-content" : ""
                  ),
                  children: X(
                    x
                      ? "https://images3.c-ctrip.com/ztrip/zhixingios/sz-zengzhang/img4_qpxq_ylq.webp"
                      : H,
                    "widthFix"
                  ),
                }),
                (0, m.BX)(d.View, {
                  className: "coupon-scroll-view",
                  children: [
                    X(
                      x
                        ? "https://images3.c-ctrip.com/ztrip/zhixingios/sz-zengzhang/img5_qpxq_ylq.webp"
                        : "https://images3.c-ctrip.com/ztrip/zhixingios/sz-zengzhang/img2_tanchuang_qp.webp"
                    ),
                    (0, m.tZ)(d.View, {
                      className: "scroll-view",
                      children: D.map(function (e, t) {
                        return (0,
                        m.BX)(d.View, { className: "coupon-item", children: [X("https://images3.c-ctrip.com/ztrip/zhixingios/sz-zengzhang/img_quan.webp"), (0, m.BX)(d.View, { className: "price-content", children: [(0, m.tZ)(d.Text, { className: "num", children: e.num }), (0, m.tZ)(d.Text, { className: "unit", children: e.unit })] }), (0, m.BX)(d.View, { className: "coupon-content", children: [(0, m.tZ)(d.View, { className: "coupon-name", children: e.title }), (0, m.tZ)(d.View, { className: "coupon-desc", children: x ? e.recievedDesc : e.desc })] })] }, t);
                      }),
                    }),
                  ],
                }),
                (0, m.BX)(d.View, {
                  className: "footer-content",
                  children: [
                    X(
                      x
                        ? "https://images3.c-ctrip.com/ztrip/zhixingios/sz-zengzhang/img6_qpxq_ylq.webp"
                        : "https://images3.c-ctrip.com/ztrip/zhixingios/sz-zengzhang/img3_tanchuang_qp.webp"
                    ),
                    !x &&
                      (0, m.BX)(d.View, {
                        className: "receive-btn",
                        id: "AJAf",
                        onClick: function () {
                          N("c_trn_z_10650008849", {
                            bizKey: "MarketCouponPopupClick",
                          }),
                            U();
                        },
                        children: [
                          X(
                            "https://images3.c-ctrip.com/ztrip/zhixingios/sz-zengzhang/bg_btn.webp"
                          ),
                          (0, m.tZ)(d.View, {
                            className: "text-1",
                            children: "立即领取",
                          }),
                          !O &&
                            !!I &&
                            (0, m.BX)(d.View, {
                              className: "text-2",
                              children: [I, "s后自动领取"],
                            }),
                        ],
                      }),
                    O
                      ? (0, m.BX)(d.View, {
                          className: "tip",
                          children: [
                            (0, m.tZ)(d.Text, {
                              className: "ghost",
                              children: "领券后即表示您已同意并接受",
                            }),
                            (0, m.tZ)(d.Text, {
                              className: "navigator-class",
                              id: "AJAg",
                              onClick: function () {
                                f.Z.commonNavigator(
                                  "https://market.suanya.com/document/static/train/marketCooVoucherCollectionAlert.html"
                                ),
                                  _();
                              },
                              children: "《个人信息授权声明》",
                            }),
                          ],
                        })
                      : (0, m.tZ)(d.View, {
                          className: "tip ghost",
                          children: "领券后用户信息会同步到第三方",
                        }),
                  ],
                }),
              ],
            }),
          });
        }
      },
      96196: function (e, t, n) {
        n(92954);
        var r = n(52500),
          a = n(71515),
          i = n(34229),
          c = n(79910),
          o = n(79792),
          s = n(48813);
        t.Z = r.default.memo(function (e) {
          var t = e.visible,
            n = e.data,
            u = e.orderNumber,
            l = e.isWaitPay,
            d = void 0 !== l && l,
            p = e.onCancel,
            h = void 0 === p ? function () {} : p,
            f = e.onConfirm,
            m = void 0 === f ? function () {} : f,
            v = e.ubtTrace,
            Z = void 0 === v ? function () {} : v;
          if (
            ((0, r.useEffect)(
              function () {
                t &&
                  n &&
                  Z("s_trn_z_trace_10650060639", {
                    exposureType: "normal",
                    bizKey: "z_mini_43003_urgentreport_show",
                    typeValue: n.scene,
                    orderid: u,
                    sceneType: null == n ? void 0 : n.picUrl,
                    isWaitPay: d ? "1" : "0",
                  });
              },
              [t, n]
            ),
            !n)
          )
            return (0, s.tZ)(a.View, {});
          var g = n.title,
            b = n.subTitle,
            w = n.iconUrl,
            y = n.productList,
            _ = void 0 === y ? [] : y,
            C = n.picUrl,
            N = _[0],
            P = _[1];
          return (0, s.tZ)(a.View, {
            className: "".concat(o.default.isTieyou ? "ty" : "zx"),
            children: (0, s.tZ)(i.ZtDrawer, {
              show: t,
              className: "intercept-43003-pop",
              onClose: h,
              drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
              children: (0, s.BX)(a.View, {
                className: "intercept-43003-pop-container",
                children: [
                  (0, s.tZ)(a.Image, { src: w, className: "header-icon" }),
                  (0, s.BX)(a.View, {
                    className: "intercept-43003-header",
                    children: [
                      (0, s.tZ)(a.View, {
                        className: "title",
                        children: (0, s.tZ)(i.ZtRichText, {
                          nodes: c.Z.convertAppTextToHtmlStr(g),
                          space: "nbsp",
                        }),
                      }),
                      (0, s.tZ)(a.View, {
                        className: "sub-title",
                        children: (0, s.tZ)(i.ZtRichText, {
                          nodes: c.Z.convertAppTextToHtmlStr(b),
                          space: "nbsp",
                        }),
                      }),
                    ],
                  }),
                  (0, s.tZ)(a.View, {
                    className: "intercept-43003-content",
                    children: (0, s.tZ)(a.Image, {
                      src: C,
                      mode: "widthFix",
                      className: "content-img",
                    }),
                  }),
                  (0, s.BX)(a.View, {
                    className: "intercept-43003-bottom",
                    children: [
                      (0, s.BX)(a.View, {
                        className: "cancel-button btm-button",
                        id: "AJGc",
                        onClick: function () {
                          Z("c_trn_z_10650060639", {
                            bizKey: "z_mini_43003_urgentreport_click",
                            typeValue: n.scene,
                            chooseValue: "1",
                            orderid: u,
                            sceneType: null == n ? void 0 : n.picUrl,
                            isWaitPay: d ? "1" : "0",
                          }),
                            h();
                        },
                        children: [
                          (0, s.tZ)(a.View, {
                            className: "button-title",
                            children: null == N ? void 0 : N.productName,
                          }),
                          N.content &&
                            (0, s.tZ)(a.View, {
                              className: "button-subtitle",
                              children: N.content,
                            }),
                        ],
                      }),
                      (0, s.BX)(a.View, {
                        className: "confirm-button btm-button",
                        id: "AJGd",
                        onClick: function () {
                          Z("c_trn_z_10650060639", {
                            bizKey: "z_mini_43003_urgentreport_click",
                            typeValue: n.scene,
                            chooseValue: "0",
                            orderid: u,
                            sceneType: null == n ? void 0 : n.picUrl,
                            isWaitPay: d ? "1" : "0",
                          }),
                            m({
                              productId: null == P ? void 0 : P.productId,
                              xOrderType: null == P ? void 0 : P.xOrderType,
                            });
                        },
                        children: [
                          (0, s.tZ)(a.View, {
                            className: "button-title",
                            children: null == P ? void 0 : P.productName,
                          }),
                          P.content &&
                            (0, s.tZ)(a.View, {
                              className: "button-subtitle",
                              children: P.content,
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        });
      },
      75878: function (e, t, n) {
        n.d(t, {
          Iv: function () {
            return r;
          },
          M4: function () {
            return o;
          },
          RA: function () {
            return a;
          },
          Ti: function () {
            return i;
          },
          hB: function () {
            return s;
          },
        });
        var r,
          a,
          i = "优享服务";
        (function (e) {
          (e.noticeToast = "@octopusNoticeToast"),
            (e.orderCancel = "saleMallOrderCancelToast"),
            (e.routeConflict = "routeConflictToast"),
            (e.returnToast = "saleMallReturnToast"),
            (e.eleDeliveryRemind = "eleDeliveryRemindToast"),
            (e.riskControl = "riskControl43003Toast"),
            (e.identityUnverifiedCancelToast = "identityUnverifiedCancelToast"),
            (e.identityUnverifiedPayToast = "identityUnverifiedPayToast"),
            (e.studentHoldSeatFailTransferAuditToast =
              "studentHoldSeatFailTransferAuditToast");
        })(r || (r = {})),
          (function (e) {
            (e.riskControl = "riskControl43003Notice"),
              (e.pointsOrder = "pointsOrderNoticeV2"),
              (e.eleDeliveryRemind = "@eleDeliveryRemindToast"),
              (e.waitPayNotice = "WaitPayNotice"),
              (e.ConvertChildrenTicketNotice = "ConvertChildrenTicketNotice"),
              (e.SelectedSeatNotice = "SelectedSeatNotice"),
              (e.StudentHoldSeatFailTransferAuditNotice =
                "StudentHoldSeatFailTransferAuditNotice");
          })(a || (a = {}));
        var c,
          o,
          s = {
            ty: [
              "wIBbFH__8nnot_4Icg9TnQRZQ7U04TzBYQUZPMrn4l4",
              "muocyLZx1NR1G9CoPkuqF8hV1jkEZ-oyDgSgRQFAsog",
              "82vMbNYEbw10qlFsOq0jOH1dc-xEZM-fgLu0GVuWfwg",
            ],
            zx: [
              "ERy2PU4SwkITeWnNvHgqpijPC-c_4vRVRLU0NvhzNdU",
              "H3N8J1b3pO9FDkTAivEMJA03pgQksXmr04Ut8DA25Ao",
              "kXLnac15BL5LAygKgVCeA1F7-kxEwRlsz5BD3fQcwAw",
            ],
          };
        (function (e) {
          e.RefreshOrderPaymentStatus = "RefreshOrderPaymentStatus";
        })(c || (c = {})),
          (function (e) {
            e.SHARE_TO_STUDNET_VERIFICATION = "shareToStudentVerification";
          })(o || (o = {}));
      },
      69781: function (e, t, n) {
        n.d(t, {
          ZB: function () {
            return c;
          },
        });
        var r,
          a,
          i,
          c,
          o = n(298),
          s = n(79301),
          u = n(95308),
          l = n(45023),
          d = n(49120),
          p = n(96158),
          h = n(79910),
          f = n(10741),
          m = n(79792),
          v = n(93761);
        (function (e) {
          (e.DF = "ZXDF"), (e.POINT = "12306_POINT_PAY"), (e.ZF = "12306ZF");
        })(a || (a = {})),
          (function (e) {
            (e[(e.SUCCESS = 1)] = "SUCCESS"),
              (e[(e.FAIL = 0)] = "FAIL"),
              (e[(e.UNKNOWN = -1)] = "UNKNOWN");
          })(i || (i = {})),
          (function (e) {
            (e.SUCCESS = "SUCCESS"),
              (e.USER_CANCEL = "USER_CANCEL"),
              (e.POINT_PAS_ERROR = "POINT_PAS_ERROR"),
              (e.PAY_BE_SURE = "PAY_BE_SURE"),
              (e.CANCEL_BE_SURE = "CANCEL_BE_SURE"),
              (e.OTHER = "OTHER");
          })(c || (c = {}));
        var Z =
            ((r = {}),
            (0, l.Z)(r, c.SUCCESS, "支付成功~"),
            (0, l.Z)(r, c.USER_CANCEL, "您取消了支付~"),
            (0, l.Z)(r, c.POINT_PAS_ERROR, "您的消费密码输入有误~请重试"),
            (0, l.Z)(r, c.PAY_BE_SURE, "支付确认中..."),
            (0, l.Z)(r, c.CANCEL_BE_SURE, "确认中..."),
            (0, l.Z)(r, c.OTHER, "支付失败"),
            r),
          g = function (e, t, n, r) {
            var a = n || (t === i.SUCCESS ? c.SUCCESS : c.OTHER);
            return {
              type: e,
              code: t,
              reason: { reasonCode: a, msg: r || Z[a] },
            };
          },
          b = function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              r = arguments.length > 2 ? arguments[2] : void 0;
            return (0, f.bOp)({
              orderNumber: t,
              result: r,
              action: 1 === n ? 1 : 2,
            })
              .then(
                (function () {
                  var a = (0, u.Z)(
                    (0, s.Z)().mark(function a(i) {
                      var c, o, u, l, d;
                      return (0, s.Z)().wrap(function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (1 !== i.resultCode) {
                                a.next = 15;
                                break;
                              }
                              if (
                                ((c = i.aheadPayStatus),
                                (o = i.pollInterval),
                                (u = void 0 === o ? 2 : o),
                                (l = i.maxPollTimes),
                                (d = void 0 === l ? 10 : l),
                                "200" != c)
                              ) {
                                a.next = 6;
                                break;
                              }
                              return a.abrupt("return", 1);
                            case 6:
                              if (!(n >= d)) {
                                a.next = 10;
                                break;
                              }
                              return a.abrupt("return", 0);
                            case 10:
                              return (a.next = 12), h.Z.awaitTime(1e3 * u);
                            case 12:
                              return a.abrupt("return", e(t, n + 1, r));
                            case 13:
                              a.next = 16;
                              break;
                            case 15:
                              return a.abrupt("return", 0);
                            case 16:
                            case "end":
                              return a.stop();
                          }
                      }, a);
                    })
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })()
              )
              .catch(function () {
                return 0;
              });
          },
          w = (function () {
            var e = (0, u.Z)(
              (0, s.Z)().mark(function e(t) {
                var n, r, i, c, o, u, l, d, p;
                return (0, s.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = t.orderNumber),
                            (r = t.productIds),
                            (i = t.useCouponDetailInfo),
                            (c = t.refundInsVipFreeProduct),
                            (o = t.packageInfos),
                            (u = t.goodsList),
                            (e.prev = 1),
                            !m.default.isBaidu && !m.default.isTT)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt("return", { payWay: a.DF });
                        case 4:
                          return (
                            (e.next = 6),
                            (0, f.DOd)({
                              orderNumber: n,
                              productIds: r,
                              useCouponDetailInfo: i,
                              refundInsVipFreeProduct: c,
                              packageInfos: o,
                              goodsList: u,
                            })
                          );
                        case 6:
                          if (
                            ((l = e.sent),
                            (d = l.resultCode),
                            (p = l.canPayToCashDesk),
                            1 === d)
                          ) {
                            e.next = 11;
                            break;
                          }
                          return e.abrupt("return", { payWay: a.DF });
                        case 11:
                          if (![0, 5, 6].includes(p)) {
                            e.next = 13;
                            break;
                          }
                          return e.abrupt("return", {
                            payWay: a.ZF,
                            payType: p,
                          });
                        case 13:
                          if (3 !== p) {
                            e.next = 15;
                            break;
                          }
                          return e.abrupt("return", { payWay: a.POINT });
                        case 15:
                          return e.abrupt("return", { payWay: a.DF });
                        case 18:
                          return (
                            (e.prev = 18),
                            (e.t0 = e.catch(1)),
                            e.abrupt("return", { payWay: a.DF })
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
          y = (function () {
            var e = (0, u.Z)(
              (0, s.Z)().mark(function e(t) {
                var n, r, o, u, l, d, p, h, m, Z, b, w, y, _, C;
                return (0, s.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.orderNumber),
                            (o = t.productIds),
                            (u = t.useCouponDetailInfo),
                            (l = t.refundInsVipFreeProduct),
                            (d = t.packageInfos),
                            (p = t.page),
                            (h = t.productFromList),
                            (m = t.goodsList),
                            null === (n = p.ubtDevTrace) ||
                              void 0 === n ||
                              n.call(p, "o_train_pay", { step: "DfPay" }),
                            (e.prev = 2),
                            (e.next = 5),
                            (0, f.Ahv)({
                              orderNumber: r,
                              productIds: o,
                              useCouponDetailInfo: u,
                              refundInsVipFreeProduct: l,
                              packageInfos: d,
                              productFromList: h,
                              goodsList: m,
                            })
                          );
                        case 5:
                          if (
                            ((Z = e.sent),
                            (b = Z.resultCode),
                            (w = Z.resultMessage),
                            (y = Z.paymentID),
                            1 === b)
                          ) {
                            e.next = 11;
                            break;
                          }
                          throw new Error("支付失败:" + w);
                        case 11:
                          return (
                            (e.next = 13),
                            v.ZP.doPayment({
                              orderNumber: r,
                              goodsId: y,
                              business: "train",
                              title: "火车票订单",
                            })
                          );
                        case 13:
                          return e.abrupt("return", g(a.DF, i.SUCCESS));
                        case 16:
                          return (
                            (e.prev = 16),
                            (e.t0 = e.catch(2)),
                            (C =
                              (null === (_ = e.t0.errMsg) || void 0 === _
                                ? void 0
                                : _.includes("cancel")) ||
                              6001 === e.t0.resultCode),
                            e.abrupt(
                              "return",
                              g(
                                a.DF,
                                i.FAIL,
                                C ? c.USER_CANCEL : c.OTHER,
                                e.t0.message
                              )
                            )
                          );
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 16]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          _ = (function () {
            var e = (0, u.Z)(
              (0, s.Z)().mark(function e(t, n, r) {
                var c;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          null === (c = n.ubtDevTrace) ||
                            void 0 === c ||
                            c.call(n, "o_train_pay", { step: "ZfPay_alipay" }),
                          t.indexOf("[PayPlat=web]") >= 0 &&
                            (t = t.replace("[PayPlat=web]", "")),
                          t.indexOf("[PayPlat=wap]") >= 0 &&
                            (t = t.replace("[PayPlat=wap]", "")),
                          e.abrupt(
                            "return",
                            new Promise(function (e) {
                              my.tradePay({
                                orderStr: t,
                                success: (function () {
                                  var t = (0, u.Z)(
                                    (0, s.Z)().mark(function t(n) {
                                      var c, o;
                                      return (0, s.Z)().wrap(function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (
                                                "9000" !=
                                                (null == n
                                                  ? void 0
                                                  : n.resultCode)
                                              ) {
                                                t.next = 7;
                                                break;
                                              }
                                              return (
                                                (t.next = 3), b(r, 1, "success")
                                              );
                                            case 3:
                                              (c = t.sent),
                                                e(
                                                  g(
                                                    a.ZF,
                                                    1 === c ? i.SUCCESS : i.FAIL
                                                  )
                                                ),
                                                (t.next = 11);
                                              break;
                                            case 7:
                                              return (
                                                (t.next = 9), b(r, 1, "fail")
                                              );
                                            case 9:
                                              (o = t.sent),
                                                e(
                                                  g(
                                                    a.ZF,
                                                    1 === o ? i.SUCCESS : i.FAIL
                                                  )
                                                );
                                            case 11:
                                            case "end":
                                              return t.stop();
                                          }
                                      }, t);
                                    })
                                  );
                                  return function (e) {
                                    return t.apply(this, arguments);
                                  };
                                })(),
                                fail: function () {
                                  e(g(a.ZF, i.FAIL));
                                },
                              });
                            })
                          )
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n, r) {
              return e.apply(this, arguments);
            };
          })(),
          C = (function () {
            var e = (0, u.Z)(
              (0, s.Z)().mark(function e(t) {
                var n, r, c, o, l, p, h, f, m;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (o = t.goPayInfo),
                          (l = t.page),
                          (p = t.orderNumber),
                          null === (n = l.ubtDevTrace) ||
                            void 0 === n ||
                            n.call(l, "o_train_pay", { step: "ZfPay_webview" }),
                          (h = (0, d.getCurrentPage)()),
                          (e.next = 5),
                          new Promise(function (e) {
                            var t = h.onShow;
                            (h.onShow = (0, u.Z)(
                              (0, s.Z)().mark(function n() {
                                var r, a;
                                return (0, s.Z)().wrap(function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        null === (r = l.ubtDevTrace) ||
                                          void 0 === r ||
                                          r.call(l, "o_train_pay", {
                                            step: "ZfPay_webview back",
                                          }),
                                          null == t || t.call(h),
                                          (0, d.hideLoading)(),
                                          null === (a = l.$CommonDialog) ||
                                            void 0 === a ||
                                            a.showMultiButtonDialog({
                                              content:
                                                "如您已完成支付，请点击支付完成，稍后刷新订单查看结果",
                                              title: "支付遇到问题?",
                                              leftButtonName: "未支付",
                                              rightButtonName: "已支付",
                                              onLeftButtonClick: function () {
                                                e("left");
                                              },
                                              onRightButtonClick: function () {
                                                e("right");
                                              },
                                            }),
                                          (h.onShow = t);
                                      case 5:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n);
                              })
                            )),
                              h.navigateTo({
                                url: "/pages/trainDetail/webviewpay/index",
                                data: { wxScheme: o },
                              });
                          })
                        );
                      case 5:
                        return (
                          (f = e.sent),
                          null === (r = l.ubtDevTrace) ||
                            void 0 === r ||
                            r.call(l, "o_train_pay", {
                              step: "ZfPay_webview check",
                            }),
                          (0, d.showLoading)(),
                          (e.next = 10),
                          b(p, 1, "left" === f ? "fail" : "success")
                        );
                      case 10:
                        return (
                          (m = e.sent),
                          null === (c = l.ubtDevTrace) ||
                            void 0 === c ||
                            c.call(l, "o_train_pay", {
                              step: "ZfPay_webview end",
                              desc: m,
                            }),
                          e.abrupt(
                            "return",
                            g(a.ZF, 1 === m ? i.SUCCESS : i.FAIL)
                          )
                        );
                      case 13:
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
          N = function (e) {
            var t = e.orderNumber,
              n = e.productIds,
              r = e.refundInsVipFreeProduct,
              a = e.goodsList;
            return (0, f.qzg)({
              orderNumber: t,
              productIds: n,
              refundInsVipFreeProduct: r,
              goodsList: a,
            });
          },
          P = function (e) {
            return (0, f.VXt)({
              orderNumber: e,
              partnerName: m.default.partner,
            });
          },
          T = (function () {
            var e = (0, u.Z)(
              (0, s.Z)().mark(function e(t) {
                var n, r, a, i, c, o, u, l, d, p, v, Z;
                return (0, s.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (n = t.payType),
                            (r = t.orderNumber),
                            (a = t.productIds),
                            (i = t.refundInsVipFreeProduct),
                            (c = t.page),
                            (o = t.goodsList),
                            (e.next = 4),
                            (0, f.ZJX)({
                              orderNumber: r,
                              payType: m.default.isAlipay ? "alipay" : "weixin",
                            })
                          );
                        case 4:
                          if (
                            ((u = e.sent),
                            (l = u.resultCode),
                            1 !== (d = void 0 === l ? -1 : l))
                          ) {
                            e.next = 17;
                            break;
                          }
                          if ((p = u.goPayInfo) && !(p.length < 1)) {
                            e.next = 10;
                            break;
                          }
                          throw new Error("链接为空");
                        case 10:
                          if (
                            (P(r),
                            0 != n &&
                              (null === (v = (Z = t.page).ubtDevTrace) ||
                                void 0 === v ||
                                v.call(Z, "o_train_pay", {
                                  step: "pushZLProductBeforePay",
                                  desc: {
                                    orderNumber: r,
                                    productIds: a,
                                    refundInsVipFreeProduct: i,
                                  },
                                }),
                              N({
                                orderNumber: r,
                                productIds: a,
                                refundInsVipFreeProduct: i,
                                goodsList: o,
                              })),
                            !m.default.isAlipay)
                          ) {
                            e.next = 14;
                            break;
                          }
                          return e.abrupt("return", _(p, c, r));
                        case 14:
                          return e.abrupt(
                            "return",
                            C({ goPayInfo: p, page: c, orderNumber: r })
                          );
                        case 17:
                          if (2 !== d) {
                            e.next = 23;
                            break;
                          }
                          return (
                            (e.next = 20), h.Z.awaitTime(1e3 * u.frequency)
                          );
                        case 20:
                          return e.abrupt("return", T(t));
                        case 23:
                          throw new Error("使用原有支付方式");
                        case 24:
                          e.next = 29;
                          break;
                        case 26:
                          return (
                            (e.prev = 26),
                            (e.t0 = e.catch(0)),
                            e.abrupt("return", y(t))
                          );
                        case 29:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 26]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          x = function (e) {
            var t,
              n = e.orderNumber,
              r = e.pointPaymentInfo,
              o = e.page,
              l = e.isPointReschedule,
              f = e.originalOid;
            return (
              null === (t = o.ubtDevTrace) ||
                void 0 === t ||
                t.call(o, "o_train_pay", { step: "PointPay start" }),
              new Promise(function (e) {
                if (
                  ((0, d.hideLoading)(),
                  r &&
                    r.availablePoints >= 0 &&
                    r.consumptionPoints >= 0 &&
                    100 * r.availablePoints <
                      100 * r.consumptionPoints +
                        100 * (r.serviceChargeAmount || 0))
                )
                  return e(g(a.POINT, i.FAIL, c.OTHER, "当前可用积分不足"));
                o.$PointPayLayer.show({
                  ticketPointInfo: r,
                  success: (function () {
                    var t = (0, u.Z)(
                      (0, s.Z)().mark(function t(r) {
                        var u, m, v, Z, b, w, y, _, C, N, P;
                        return (0, s.Z)().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  null === (u = o.ubtDevTrace) ||
                                    void 0 === u ||
                                    u.call(o, "o_train_pay", {
                                      step: "PointPay",
                                      desc: "verify",
                                    }),
                                  null === (m = (v = o.$PointPayLayer).close) ||
                                    void 0 === m ||
                                    m.call(v),
                                  (t.next = 4),
                                  h.Z.awaitTime(500)
                                );
                              case 4:
                                return (
                                  (0, d.showLoading)(),
                                  (w = l
                                    ? {
                                        pointsPayPassword: r,
                                        orderNumber: f,
                                        pointPayOrderType: 1,
                                        extOrderId: n,
                                      }
                                    : { pointsPayPassword: r, orderNumber: n }),
                                  (t.next = 8),
                                  (0, p.J8)(w)
                                );
                              case 8:
                                (y = t.sent),
                                  null === (Z = o.ubtDevTrace) ||
                                    void 0 === Z ||
                                    Z.call(o, "o_train_pay", {
                                      step: "PointPay end",
                                      desc: y,
                                    }),
                                  1 !==
                                    (null === (b = y.pointsPayInfo) ||
                                    void 0 === b
                                      ? void 0
                                      : b.payResultCode) &&
                                    ((P =
                                      null === (_ = y.pointsPayInfo) ||
                                      void 0 === _ ||
                                      null === (C = _.failReason) ||
                                      void 0 === C
                                        ? void 0
                                        : C.includes("消费密码不正确")),
                                    e(
                                      g(
                                        a.POINT,
                                        i.FAIL,
                                        P ? c.POINT_PAS_ERROR : c.OTHER,
                                        null === (N = y.pointsPayInfo) ||
                                          void 0 === N
                                          ? void 0
                                          : N.failReason
                                      )
                                    )),
                                  e(g(a.POINT, i.SUCCESS));
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  cancel: function () {
                    var t;
                    null === (t = o.ubtDevTrace) ||
                      void 0 === t ||
                      t.call(o, "o_train_pay", {
                        step: "PointPay",
                        desc: "取消积分支付",
                      }),
                      e(g(a.POINT, i.FAIL, c.USER_CANCEL));
                  },
                });
              })
            );
          };
        t.ZP = (function () {
          var e = (0, u.Z)(
            (0, s.Z)().mark(function e(t) {
              var n;
              return (0, s.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (0, d.showLoading)(), (e.next = 3), V(t);
                    case 3:
                      return (
                        (n = e.sent),
                        (0, d.hideLoading)(),
                        e.abrupt("return", n)
                      );
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
        })();
        var V = (function () {
          var e = (0, u.Z)(
            (0, s.Z)().mark(function e(t) {
              var n, r, u, l, d, p, h;
              return (0, s.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          null === (n = (r = t.page).ubtDevTrace) ||
                            void 0 === n ||
                            n.call(r, "o_train_pay", { step: "start pay" }),
                          (e.next = 3),
                          w(t)
                        );
                      case 3:
                        if (
                          ((d = e.sent),
                          (p = d.payWay),
                          (h = d.payType),
                          null === (u = (l = t.page).ubtDevTrace) ||
                            void 0 === u ||
                            u.call(l, "o_train_pay", {
                              step: "getPaymentType",
                              desc: { payWay: p, payType: h },
                            }),
                          (e.prev = 7),
                          p !== a.ZF)
                        ) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          T((0, o.Z)({ payType: h }, t))
                        );
                      case 10:
                        if (p !== a.POINT) {
                          e.next = 12;
                          break;
                        }
                        return e.abrupt("return", x(t));
                      case 12:
                        return e.abrupt("return", y(t));
                      case 15:
                        return (
                          (e.prev = 15),
                          (e.t0 = e.catch(7)),
                          e.abrupt(
                            "return",
                            g(p, i.FAIL, c.OTHER, e.t0.message)
                          )
                        );
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[7, 15]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      },
    },
  ]);
})();
