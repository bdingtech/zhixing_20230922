!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [95005],
      {
        94519: function (e, t, n) {
          var s,
            a = n(32180),
            r = n(79301),
            i = n(298),
            o = n(95308),
            c = n(57042),
            l = n(24460),
            u = n(21867),
            p = n(86066),
            d = n(52500),
            g = n(92954),
            f = n.n(g),
            m = n(81957),
            h = n(71515),
            v = n(79910),
            N = n(79792),
            k = n(49120),
            y = n(39886),
            P = n(93621),
            Z = n(48813),
            T =
              (0, m.h)(!1, { usePageWrapper: !0 })(
                (s = (function (e) {
                  (0, u.Z)(n, e);
                  var t = (0, p.Z)(n);
                  function n(e) {
                    var s;
                    return (
                      (0, c.Z)(this, n),
                      ((s = t.call(this, e)).pageId = ""),
                      (s.state = { passengerList: [] }),
                      s
                    );
                  }
                  return (
                    (0, l.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = f().getCurrentInstance().router.params,
                            t = e.allPassengerList,
                            n = e.maxPassengerCount;
                          (this.maxPassengerCount = n),
                            t &&
                              t.length > 0 &&
                              ((this.selPassengersList =
                                t.filter(function (e) {
                                  return e.isSelected;
                                }) || []),
                              this.setState({ passengerList: t }));
                        },
                      },
                      {
                        key: "onSelectPassenger",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n, s, a;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((n = this.state.passengerList),
                                          t.isSelected)
                                        ) {
                                          e.next = 12;
                                          break;
                                        }
                                        if (
                                          ((s =
                                            (null == n
                                              ? void 0
                                              : n.filter(function (e) {
                                                  return e.isSelected;
                                                })) || []),
                                          !(
                                            s.length + 1 >
                                            this.maxPassengerCount
                                          ))
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          (0, k.showToast)(
                                            "本订单最多可添加".concat(
                                              this.maxPassengerCount,
                                              "位乘客"
                                            )
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 7:
                                        return (
                                          (e.next = 9),
                                          this.handlePassengerType(t)
                                        );
                                      case 9:
                                        if (e.sent) {
                                          e.next = 12;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 12:
                                        (a = n.map(function (e) {
                                          return e.PassengerID === t.PassengerID
                                            ? (0, i.Z)(
                                                (0, i.Z)({}, t),
                                                {},
                                                { isSelected: !t.isSelected }
                                              )
                                            : e;
                                        })),
                                          this.setState({ passengerList: a });
                                      case 14:
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
                        key: "onConfirmHandle",
                        value: function () {
                          var e = this.state.passengerList;
                          this.invokeCallback({ allPassengerList: e }),
                            this.navigateBack();
                        },
                      },
                      {
                        key: "getPassengerType",
                        value: function (e) {
                          var t = this.state.passengerList,
                            n =
                              null == t
                                ? void 0
                                : t.find(function (t) {
                                    return t.PassengerID == e.PassengerID;
                                  });
                          if (n.passengerTypeDesc) return n.passengerTypeDesc;
                          var s = n.PassengerType;
                          return P.Z.getDisplayPassengerType(s);
                        },
                      },
                      {
                        key: "handlePassengerType",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n,
                                s,
                                a,
                                i,
                                o,
                                c,
                                l,
                                u,
                                p,
                                d,
                                g,
                                m,
                                h,
                                k,
                                Z,
                                T,
                                C,
                                x,
                                b,
                                w,
                                L,
                                I,
                                S,
                                B,
                                D,
                                V,
                                E = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = !1),
                                          (e.prev = 1),
                                          (a =
                                            null ===
                                              (s =
                                                f().getCurrentInstance()
                                                  .router) || void 0 === s
                                              ? void 0
                                              : s.params),
                                          (i = a.shipInfo),
                                          (o = a.seatName),
                                          (c = i.vendor),
                                          (l = i.website),
                                          (u = i.fromStationName),
                                          (p = i.toStationName),
                                          (d = i.fromCityName),
                                          (g = i.toCityName),
                                          (m = i.shipName),
                                          (h = i.fromDate),
                                          (k = i.fromTime),
                                          (Z = i.foreignPassenger),
                                          (T = i.passenger),
                                          (C = v.Z.isNotEmptyObj(Z)),
                                          (x = C ? Z : T),
                                          (b = {
                                            ship: {
                                              vendor: c,
                                              website: l,
                                              fromStationName: u,
                                              toStationName: p,
                                              fromCityName: d,
                                              toCityName: g,
                                              shipName: m,
                                              fromDate: h,
                                              fromTime: k,
                                            },
                                            psg: P.Z.getPassengerFormatData(
                                              t,
                                              x,
                                              C,
                                              !0
                                            ),
                                            seatName: o,
                                            utmSource: P.Z.getShipUtmSource(),
                                            isForeign: C,
                                            baseCommonTypes: {
                                              channel: P.Z.getChannelValue(),
                                              partner: N.default.partner,
                                            },
                                          }),
                                          (e.next = 10),
                                          (0, y.Wj)(b)
                                        );
                                      case 10:
                                        1 === (w = e.sent).code && w.data
                                          ? ((L = w.data),
                                            (I = L.ticketType),
                                            (S = L.ticketList),
                                            (B = L.ticketTypeId),
                                            (D = L.isMinor),
                                            (t.isMinor = D),
                                            (!S || S.length <= 1) &&
                                              ((t.ticketTypeId = B || "adult"),
                                              (t.passengerTypeDesc =
                                                I || "成人票")),
                                            (n = !0))
                                          : 0 === w.code &&
                                            this.showMultiButtonDialog({
                                              content:
                                                (null === (V = w.data) ||
                                                void 0 === V
                                                  ? void 0
                                                  : V.errorMessage) ||
                                                "该乘客证件信息缺失，请补全信息",
                                              leftButtonName: "取消",
                                              rightButtonName: "编辑乘客",
                                              onRightButtonClick: function () {
                                                E.onEditPassenger(t);
                                              },
                                            }),
                                          (e.next = 17);
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 17:
                                        return e.abrupt("return", n);
                                      case 18:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 14]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onAddPassenger",
                        value: function () {
                          var e,
                            t,
                            n = this,
                            s = (
                              null === (e = f().getCurrentInstance().router) ||
                              void 0 === e
                                ? void 0
                                : e.params
                            ).shipInfo,
                            a = s.foreignPassenger,
                            i = s.passenger,
                            c = v.Z.isNotEmptyObj(a),
                            l = c ? a : i;
                          this.navigateTo({
                            url: "/pages/ship/editPassenger/index",
                            data: {
                              supportCardList: l,
                              ticketTypeList:
                                (null === (t = s.ticketTypeRuleDescList) ||
                                void 0 === t
                                  ? void 0
                                  : t.ticketTypeRuleDesc) || [],
                              isForeign: c,
                            },
                            callback: (function () {
                              var e = (0, o.Z)(
                                (0, r.Z)().mark(function e(t) {
                                  var s;
                                  return (0, r.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          v.Z.isNotEmptyObj(t) &&
                                            ((s =
                                              n.state.passengerList).unshift(t),
                                            console.log("add", s),
                                            n.setState({ passengerList: s }));
                                        case 1:
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
                          });
                        },
                      },
                      {
                        key: "onEditPassenger",
                        value: function (e) {
                          var t,
                            n,
                            s = this,
                            a = (
                              null === (t = f().getCurrentInstance().router) ||
                              void 0 === t
                                ? void 0
                                : t.params
                            ).shipInfo,
                            r = a.foreignPassenger,
                            o = a.passenger,
                            c = v.Z.isNotEmptyObj(r),
                            l = c ? r : o;
                          this.navigateTo({
                            url: "/pages/ship/editPassenger/index",
                            data: {
                              passengerInfo: e,
                              supportCardList: l,
                              ticketTypeList:
                                (null === (n = a.ticketTypeRuleDescList) ||
                                void 0 === n
                                  ? void 0
                                  : n.ticketTypeRuleDesc) || [],
                              isForeign: c,
                            },
                            callback: function (e) {
                              if (v.Z.isNotEmptyObj(e)) {
                                var t = s.state.passengerList,
                                  n =
                                    null == t
                                      ? void 0
                                      : t.map(function (t) {
                                          return t.PassengerID === e.PassengerID
                                            ? (0, i.Z)({}, e)
                                            : t;
                                        });
                                console.log("edit", n),
                                  s.setState({ passengerList: n });
                              }
                            },
                          });
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          var e = this,
                            t = this.state.passengerList;
                          t.forEach(function (t) {
                            var n;
                            !(null === (n = e.selPassengersList) || void 0 === n
                              ? void 0
                              : n.some(function (e) {
                                  return e.PassengerID === t.PassengerID;
                                })) &&
                              t.isSelected &&
                              (t.isSelected = !1);
                          }),
                            this.invokeCallback({ allPassengerList: t }),
                            this.navigateBack();
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          return (0, Z.tZ)(h.View, { children: "选择乘客" });
                        },
                      },
                      {
                        key: "renderPasItem",
                        value: function (e) {
                          var t,
                            n = this,
                            s = (
                              null === (t = f().getCurrentInstance().router) ||
                              void 0 === t
                                ? void 0
                                : t.params
                            ).shipInfo,
                            a = v.Z.isNotEmptyObj(
                              null == s ? void 0 : s.foreignPassenger
                            ),
                            r = a
                              ? null == s
                                ? void 0
                                : s.foreignPassenger
                              : null == s
                              ? void 0
                              : s.passenger,
                            i = P.Z.getCardInfo(e, r, a),
                            o = null == e ? void 0 : e.CNName;
                          return (
                            (("护照" == i.cardType && !a) || !o) &&
                              null != e &&
                              e.ENLastName &&
                              null != e &&
                              e.ENFirstName &&
                              (o = e.ENLastName + "/" + e.ENFirstName),
                            (0, Z.BX)(h.View, {
                              className:
                                "passenger-item flex-align-items-center",
                              children: [
                                (0, Z.tZ)(h.View, {
                                  className: "iconfont2 ifont2-edit",
                                  id: "AOAs",
                                  onClick: function () {
                                    return n.onEditPassenger(e);
                                  },
                                }),
                                (0, Z.BX)(h.View, {
                                  className: "pas-cont flex-1",
                                  children: [
                                    (0, Z.BX)(h.View, {
                                      className:
                                        "name-type flex-align-items-center",
                                      children: [
                                        (0, Z.tZ)(h.View, {
                                          className: "p-name",
                                          children: o,
                                        }),
                                        (null == e ? void 0 : e.isSelected) &&
                                          (0, Z.tZ)(h.View, {
                                            className: "p-type",
                                            children: this.getPassengerType(e),
                                          }),
                                      ],
                                    }),
                                    (0, Z.BX)(h.View, {
                                      className: "idcard",
                                      children: [
                                        !!i.cardNo &&
                                          (0, Z.tZ)(h.Text, {
                                            children: i.cardType,
                                          }),
                                        (0, Z.tZ)(h.Text, {
                                          className: "card-no",
                                          children: i.cardNo
                                            ? P.Z.maskCardNum(i.cardNo)
                                            : "证件信息不全,请补充",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Z.tZ)(h.View, {
                                  className: "flex-center pl30",
                                  id: "AOAt",
                                  onClick: function () {
                                    return n.onSelectPassenger(e);
                                  },
                                  children: (0, Z.tZ)(h.Text, {
                                    className: "iconfont2 ".concat(
                                      null != e && e.isSelected
                                        ? "ifont2-checkboxed"
                                        : "ifont2-checkbox"
                                    ),
                                  }),
                                }),
                              ],
                            })
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state.passengerList;
                          return (0, Z.BX)(h.View, {
                            className: "ship-passenger-list",
                            children: [
                              (0, Z.BX)(h.View, {
                                className: "passenger-panel",
                                children: [
                                  (0, Z.BX)(h.View, {
                                    className: "pas-add flex-center",
                                    id: "AOAu",
                                    onClick: this.onAddPassenger,
                                    children: [
                                      (0, Z.tZ)(h.Image, {
                                        className: "icon-add",
                                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_tjck@3x.webp",
                                      }),
                                      (0, Z.tZ)(h.Text, {
                                        children: "新增乘客",
                                      }),
                                    ],
                                  }),
                                  (0, Z.tZ)(h.View, {
                                    className: "pas-list",
                                    children: (0, Z.tZ)(h.ScrollView, {
                                      scrollY: !0,
                                      scrollWithAnimation: !0,
                                      className: "pas-scroll",
                                      children:
                                        null == t
                                          ? void 0
                                          : t.map(function (n, s) {
                                              return (0,
                                              Z.BX)(d.Fragment, { children: [e.renderPasItem(n), s !== t.length - 1 && (0, Z.tZ)(h.View, { className: "h-line" })] }, "pas_".concat(s));
                                            }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, Z.tZ)(h.View, {
                                className: "bottom-fixed-panel",
                                children: (0, Z.tZ)(h.Button, {
                                  className: "confirm-btn",
                                  id: "AOAv",
                                  onClick: this.onConfirmHandle,
                                  children: "确定",
                                }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(d.default.Component))
              ) || s;
          Page(
            (0, a.createPageConfig)(
              T,
              "pages/ship/passengerList/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "选择乘客",
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [606, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(94519);
        }),
          e.O();
      },
    ]);
})();
