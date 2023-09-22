!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [74937],
      {
        23790: function (e, t, n) {
          var s,
            a = n(32180),
            r = n(22276),
            i = n(79301),
            o = n(298),
            c = n(95308),
            l = n(57042),
            u = n(24460),
            p = n(81876),
            g = n(21867),
            d = n(86066),
            f = n(45023),
            m = n(52500),
            h = n(92954),
            v = n.n(h),
            k = n(71515),
            Z = n(23577),
            y = n(87298),
            N = n(29799),
            P = (n(36168), n(30595)),
            x = n(92049),
            C = n(981),
            T = n(21961),
            b = n(99090),
            L = n(78633),
            w = n(49528),
            S = n(48813),
            I = (0, w.lW)({
              mr10: { marginRight: 10 },
              ml5: { marginLeft: 5 },
              mr4: { marginRight: 4 },
            }),
            B = function (e) {
              var t = e.passenger,
                n = e.isForeign,
                s = e.supportCardList,
                a = e.onEditPassenger,
                r = e.onSelectPassenger,
                i = C.Z.getCardInfo(t, s, n),
                o = null == t ? void 0 : t.CNName;
              (("护照" == i.cardType && !n) || !o) &&
                null != t &&
                t.ENLastName &&
                null != t &&
                t.ENFirstName &&
                (o = t.ENLastName + "/" + t.ENFirstName);
              var c = (function (e) {
                if (e.passengerTypeDesc) return e.passengerTypeDesc;
                var t = e.PassengerType;
                return C.Z.getDisplayPassengerType(t);
              })(t);
              return (0, S.BX)(k.View, {
                className: "passenger-item flex-row flex-align-items-center",
                children: [
                  (0, S.tZ)(k.View, {
                    onClick: function () {
                      return a(t);
                    },
                    children: (0, S.tZ)(b.yl, {
                      size: 19,
                      color: "#ccc",
                      style: I.mr10,
                    }),
                  }),
                  (0, S.BX)(k.View, {
                    className: "pas-cont flex-1",
                    children: [
                      (0, S.BX)(k.View, {
                        className: "name-type flex-row flex-align-items-center",
                        children: [
                          (0, S.tZ)(k.View, {
                            className: "p-name",
                            children: o,
                          }),
                          (null == t ? void 0 : t.isSelected) &&
                            (0, S.tZ)(L.Z, { style: I.ml5, children: c }),
                        ],
                      }),
                      (0, S.BX)(k.View, {
                        className: "idcard flex flex-row",
                        children: [
                          !!i.cardNo &&
                            (0, S.tZ)(k.Text, {
                              style: I.mr4,
                              className: "idcard-txt",
                              children: i.cardType,
                            }),
                          (0, S.tZ)(k.Text, {
                            className: "idcard-txt",
                            children: i.cardNo
                              ? C.Z.maskCardNum(i.cardNo)
                              : "证件信息不全,请补充",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, S.tZ)(k.View, {
                    className: "flex-row flex-center pl30",
                    onClick: function () {
                      return r(t);
                    },
                    children:
                      null != t && t.isSelected
                        ? (0, S.tZ)(b.r5, { size: 20, color: "#198cff" })
                        : (0, S.tZ)(b.xG, { size: 20, color: "#ccc" }),
                  }),
                ],
              });
            },
            D = n(52922),
            V =
              (0, y.h)(!1)(
                (s = (function (e) {
                  (0, g.Z)(n, e);
                  var t = (0, d.Z)(n);
                  function n(e) {
                    var s;
                    return (
                      (0, l.Z)(this, n),
                      (s = t.call(this, e)),
                      (0, f.Z)(
                        (0, p.Z)(s),
                        "onSelectPassenger",
                        (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var n, a, r;
                              return (0, i.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((n = s.state.passengerList),
                                        t.isSelected)
                                      ) {
                                        e.next = 12;
                                        break;
                                      }
                                      if (
                                        ((a =
                                          (null == n
                                            ? void 0
                                            : n.filter(function (e) {
                                                return e.isSelected;
                                              })) || []),
                                        !(a.length + 1 > s.maxPassengerCount))
                                      ) {
                                        e.next = 7;
                                        break;
                                      }
                                      return (
                                        (0, C.C)(
                                          "本订单最多可添加".concat(
                                            s.maxPassengerCount,
                                            "位乘客"
                                          )
                                        ),
                                        e.abrupt("return")
                                      );
                                    case 7:
                                      return (
                                        (e.next = 9), s.handlePassengerType(t)
                                      );
                                    case 9:
                                      if (e.sent) {
                                        e.next = 12;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 12:
                                      (r = n.map(function (e) {
                                        return e.PassengerID === t.PassengerID
                                          ? (0, o.Z)(
                                              (0, o.Z)({}, t),
                                              {},
                                              { isSelected: !t.isSelected }
                                            )
                                          : e;
                                      })),
                                        s.setState({ passengerList: r });
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, f.Z)((0, p.Z)(s), "onConfirmHandle", function () {
                        var e = s.state.passengerList;
                        s.invokeCallback({ allPassengerList: e }),
                          s.navigateBack();
                      }),
                      (0, f.Z)((0, p.Z)(s), "onAddPassenger", function () {
                        var e,
                          t,
                          n = (
                            null === (e = v().getCurrentInstance().router) ||
                            void 0 === e
                              ? void 0
                              : e.params
                          ).shipInfo,
                          a = s.state,
                          i = a.isForeign,
                          o = a.supportCardList;
                        s.navigateTo({
                          url: "/pages/taroCRN/ship/pages/editPassenger/index",
                          data: {
                            supportCardList: o,
                            ticketTypeList:
                              (null === (t = n.ticketTypeRuleDescList) ||
                              void 0 === t
                                ? void 0
                                : t.ticketTypeRuleDesc) || [],
                            isForeign: i,
                            checkPassengerTypeParams:
                              s.getCheckPassengerTypeParams(),
                          },
                          callback: function (e) {
                            if (C.Z.isNotEmptyObj(e)) {
                              var t = (0, r.Z)(s.state.passengerList);
                              t.unshift(e),
                                console.log("add", t),
                                s.setState({ passengerList: t });
                            }
                          },
                        });
                      }),
                      (0, f.Z)((0, p.Z)(s), "onEditPassenger", function (e, t) {
                        var n,
                          a,
                          r = (
                            null === (n = v().getCurrentInstance().router) ||
                            void 0 === n
                              ? void 0
                              : n.params
                          ).shipInfo,
                          i = s.state,
                          c = i.isForeign,
                          l = i.supportCardList;
                        s.navigateTo({
                          url: "/pages/taroCRN/ship/pages/editPassenger/index",
                          data: {
                            passengerInfo: e,
                            supportCardList: l,
                            ticketTypeList:
                              (null === (a = r.ticketTypeRuleDescList) ||
                              void 0 === a
                                ? void 0
                                : a.ticketTypeRuleDesc) || [],
                            isForeign: c,
                            ticketTypeIdList:
                              (null == t ? void 0 : t.length) > 0
                                ? t
                                : e.ticketTypeIdList,
                            checkPassengerTypeParams:
                              s.getCheckPassengerTypeParams(e),
                          },
                          callback: function (e) {
                            if (C.Z.isNotEmptyObj(e)) {
                              var t = s.state.passengerList,
                                n =
                                  null == t
                                    ? void 0
                                    : t.map(function (t) {
                                        return t.PassengerID === e.PassengerID
                                          ? (0, o.Z)({}, e)
                                          : t;
                                      });
                              console.log("edit", n),
                                s.setState({ passengerList: n });
                            }
                          },
                        });
                      }),
                      (s.pageId = Z.Z.isCRN ? "10650104528" : ""),
                      (s.state = {
                        passengerList: [],
                        isForeign: !1,
                        supportCardList: [],
                      }),
                      s
                    );
                  }
                  return (
                    (0, u.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = v().getCurrentInstance().router.params,
                            t = e.allPassengerList,
                            n = e.maxPassengerCount,
                            s = e.shipInfo,
                            a = e.utmSource,
                            r = s.foreignPassenger,
                            i = s.passenger;
                          this.utmSource = a;
                          var o = C.Z.isNotEmptyObj(r),
                            c = o ? r : i;
                          (this.maxPassengerCount = n),
                            t &&
                              t.length > 0 &&
                              ((this.selPassengersList =
                                t.filter(function (e) {
                                  return e.isSelected;
                                }) || []),
                              this.setState({
                                passengerList: t,
                                isForeign: o,
                                supportCardList: c,
                              }));
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          this.pageId;
                        },
                      },
                      {
                        key: "getCheckPassengerTypeParams",
                        value: function (e) {
                          var t,
                            n =
                              null === (t = v().getCurrentInstance().router) ||
                              void 0 === t
                                ? void 0
                                : t.params,
                            s = n.shipInfo,
                            a = n.seatName,
                            r = s.vendor,
                            i = s.website,
                            o = s.fromStationName,
                            c = s.toStationName,
                            l = s.fromCityName,
                            u = s.toCityName,
                            p = s.shipName,
                            g = s.fromDate,
                            d = s.fromTime,
                            f = s.foreignPassenger,
                            m = s.passenger,
                            h = C.Z.isNotEmptyObj(f),
                            k = h ? f : m;
                          return {
                            ship: {
                              vendor: r,
                              website: i,
                              fromStationName: o,
                              toStationName: c,
                              fromCityName: l,
                              toCityName: u,
                              shipName: p,
                              fromDate: g,
                              fromTime: d,
                            },
                            psg: e && C.Z.getPassengerFormatData(e, k, h, !0),
                            seatName: a,
                            utmSource: this.utmSource,
                            isForeign: h,
                            baseCommonTypes: {
                              channel: C.Z.getChannelValue(),
                              partner: Z.Z.partner,
                            },
                          };
                        },
                      },
                      {
                        key: "handlePassengerType",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var n,
                                s,
                                a,
                                r,
                                o,
                                c,
                                l,
                                u,
                                p,
                                g,
                                d = this;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = !1),
                                          (e.prev = 1),
                                          (s =
                                            this.getCheckPassengerTypeParams(
                                              t
                                            )),
                                          (e.next = 5),
                                          (0, T.Wj)(s)
                                        );
                                      case 5:
                                        if (
                                          1 !== (a = e.sent).code ||
                                          !a.data
                                        ) {
                                          e.next = 19;
                                          break;
                                        }
                                        if (
                                          ((r = a.data),
                                          (o = r.ticketType),
                                          (c = r.ticketList),
                                          (l = r.ticketTypeId),
                                          (u = r.isMinor),
                                          (p = r.ticketTitle),
                                          (t.isMinor = u),
                                          c && !(c.length <= 1))
                                        ) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          (t.ticketTypeId = l || "adult"),
                                          (t.passengerTypeDesc = o || "成人票"),
                                          e.abrupt("return", !0)
                                        );
                                      case 13:
                                        if (
                                          c.some(function (e) {
                                            return (
                                              e.ticketTypeId == t.ticketTypeId
                                            );
                                          })
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          this.showMultiButtonDialog({
                                            title: "温馨提示",
                                            content: "".concat(p, "(").concat(
                                              c
                                                .map(function (e) {
                                                  return e.ticketType;
                                                })
                                                .join("/"),
                                              ")"
                                            ),
                                            leftButtonName: "取消",
                                            rightButtonName: "编辑乘客",
                                            onRightButtonClick: function () {
                                              d.onEditPassenger(
                                                t,
                                                c.map(function (e) {
                                                  return e.ticketTypeId;
                                                })
                                              );
                                            },
                                          }),
                                          e.abrupt("return", !1)
                                        );
                                      case 16:
                                        return e.abrupt("return", !0);
                                      case 19:
                                        0 === a.code &&
                                          this.showMultiButtonDialog({
                                            content:
                                              (null === (g = a.data) ||
                                              void 0 === g
                                                ? void 0
                                                : g.errorMessage) ||
                                              "该乘客证件信息缺失，请补全信息",
                                            leftButtonName: "取消",
                                            rightButtonName: "编辑乘客",
                                            onRightButtonClick: function () {
                                              d.onEditPassenger(t);
                                            },
                                          });
                                      case 20:
                                        e.next = 25;
                                        break;
                                      case 22:
                                        (e.prev = 22),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 25:
                                        return e.abrupt("return", n);
                                      case 26:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 22]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
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
                            this.navigateBack({ allPassengerList: t });
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          return (0, S.tZ)(k.View, { children: "选择乘客" });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.passengerList,
                            s = t.isForeign,
                            a = t.supportCardList;
                          return (0, S.BX)(k.View, {
                            className: "ship-passenger-list flex flex-column",
                            children: [
                              (0, S.tZ)(P.Z, { title: "选择乘客" }),
                              (0, S.BX)(k.View, {
                                className:
                                  "passenger-list-content flex-1 flex flex-column",
                                children: [
                                  (0, S.BX)(k.View, {
                                    className:
                                      "passenger-panel flex flex-column",
                                    children: [
                                      (0, S.BX)(k.View, {
                                        className:
                                          "pas-add flex-center flex-row",
                                        onClick: this.onAddPassenger,
                                        children: [
                                          (0, S.tZ)(k.Image, {
                                            className: "icon-add",
                                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_tjck@3x.webp",
                                          }),
                                          (0, S.tZ)(k.Text, {
                                            className: "pas-add-txt",
                                            children: "新增乘客",
                                          }),
                                        ],
                                      }),
                                      (0, S.tZ)(k.View, {
                                        className: "pas-list flex flex-column",
                                        children: (0, S.tZ)(k.ScrollView, {
                                          scrollY: !0,
                                          scrollWithAnimation: !0,
                                          className: "pas-scroll",
                                          children:
                                            null == n
                                              ? void 0
                                              : n.map(function (t, r) {
                                                  return (0,
                                                  S.BX)(m.Fragment, { children: [(0, S.tZ)(B, { passenger: t, isForeign: s, supportCardList: a, onEditPassenger: e.onEditPassenger, onSelectPassenger: e.onSelectPassenger }), r !== n.length - 1 && (0, S.tZ)(k.View, { className: "h-line" })] }, "pas_".concat(r));
                                                }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, S.tZ)(k.View, {
                                    className: "bottom-padding",
                                    children: (0, S.tZ)(x.Z, {}),
                                  }),
                                ],
                              }),
                              (0, S.tZ)(D.Z, {
                                onConfirm: this.onConfirmHandle,
                              }),
                              (0, S.tZ)(N.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
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
              ) || s;
          Page(
            (0, a.createPageConfig)(
              V,
              "pages/taroCRN/ship/pages/passengerList/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "选择乘客",
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                backgroundColorTop: "#efefef",
                backgroundColorBottom: "#efefef",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [98946, 7160, 83004, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(23790);
        }),
          e.O();
      },
    ]);
})();
