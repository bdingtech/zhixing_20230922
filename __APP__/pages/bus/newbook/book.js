!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/e4417bd6df8881f75099b5a95342fe64.js"),
    require("../sub-common/8d557802042b658d7e8b89aab78635db.js"),
    require("../sub-common/a5b2627074afffb5e1fe584b3af24843.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [74594],
      {
        47857: function (e, t, i) {
          var n,
            o,
            a,
            s,
            c = i(32180),
            r = i(90129),
            l = i(22276),
            u = i(79301),
            d = i(95308),
            h = i(298),
            m = i(57042),
            p = i(24460),
            f = i(81876),
            g = i(21867),
            v = i(86066),
            k = i(45023),
            b = i(52500),
            C = i(92954),
            S = i.n(C),
            w = i(71515),
            y = i(79792),
            T = i(93761),
            P = i(79295),
            N = i(3205),
            I = i(18783),
            Z = i(20500),
            x = i(3106),
            B = i(2809),
            V = i(79910),
            D = i(13025),
            A = i(46931),
            _ = i(43796),
            M = i(49120),
            X = i(38797),
            L = i(4601),
            O = i(50185),
            R = i(58676),
            z = i(76977),
            E = i(8271),
            F = i.n(E),
            U = i(81957),
            j = i(5830),
            G = i(28676),
            H = i(90983),
            W = i(48813),
            K = "dt" === y.default.jetpack,
            J =
              (0, U.h)(!0)(
                (n = (function (e) {
                  (0, g.Z)(i, e);
                  var t = (0, v.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, m.Z)(this, i),
                      ((n = t.call(this, e)).state = {
                        isTieyou: y.default.isTieyou,
                        reversePassengerInfo: [],
                        passengerInfo: [],
                        passengerSelectIdList: [],
                      }),
                      n
                    );
                  }
                  return (
                    (0, p.Z)(i, [
                      {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function (e) {
                          var t = this;
                          if (
                            JSON.stringify(e) !== JSON.stringify(this.props)
                          ) {
                            var i = e.discountMes,
                              n = e.doBusNewTraceInfo;
                            if (
                              (e.visible ||
                                !i ||
                                JSON.stringify(this.props.discountMes || {}) ===
                                  JSON.stringify(i) ||
                                K ||
                                null == n ||
                                n(
                                  {
                                    comment: "填写页新客福利“未领取”banner曝光",
                                    typeSnd:
                                      "book_newcustome_welfare_notrecevice_banner_show",
                                  },
                                  2
                                ),
                              e.needUpdate)
                            ) {
                              var o,
                                a = this.state.passengerSelectIdList,
                                s = e.info,
                                c = s.passengerPannelLimitInfo,
                                r = void 0 === c ? [] : c,
                                l = s.buyTicketRule,
                                u = void 0 === l ? [] : l,
                                d = s.passengerPannelAllInfo,
                                m = e.visible,
                                p = (u && u.maxSaleTicketNumber) || 5,
                                f = a;
                              e.isDiTuiSource &&
                                (f =
                                  (a.length > 0
                                    ? a
                                    : e.selectedPassengerIdList) || []);
                              var g = r.map(function (e) {
                                return (0,
                                h.Z)((0, h.Z)({}, e), {}, { isActive: !(-1 === f.indexOf(e.id)) });
                              });
                              if (
                                (e.isDiTuiSource &&
                                  this.setState({ passengerSelectIdList: f }),
                                null === (o = f) || void 0 === o || !o.length)
                              ) {
                                var v = g.findIndex(function (e) {
                                  return (
                                    "C" !== e.PassengerType &&
                                    "X" !== e.PassengerType
                                  );
                                });
                                v > -1 &&
                                  ((g[v].isActive = !0),
                                  this.setState(
                                    { passengerSelectIdList: [g[v].id] },
                                    function () {
                                      t.props.onRefreshPasShow(
                                        {
                                          reversePassengerInfo: g,
                                          passengerSelectIdList:
                                            t.state.passengerSelectIdList,
                                        },
                                        !0
                                      );
                                    }
                                  ));
                              }
                              (g = this.formatPassengerList(g)),
                                this.setState({
                                  passengerInfo: g,
                                  reversePassengerInfo: JSON.parse(
                                    JSON.stringify(g)
                                  ),
                                  isComponentShow: m,
                                  buyTicketRule: u,
                                  maxSaleTicketNumber: p,
                                  passengerPannelAllInfo: d,
                                });
                            }
                          }
                        },
                      },
                      {
                        key: "formatPassengerList",
                        value: function (e) {
                          var t = [];
                          return (
                            e.forEach(function (i, n) {
                              i.isActive && (t.push(i), e.splice(n, 1));
                            }),
                            [].concat(t, (0, l.Z)(e))
                          );
                        },
                      },
                      {
                        key: "onClickPassengerBtn",
                        value: (function () {
                          var e = (0, d.Z)(
                            (0, u.Z)().mark(function e(t) {
                              var i,
                                n,
                                o,
                                a,
                                s,
                                c,
                                r,
                                l,
                                d,
                                m,
                                p,
                                f,
                                g = this;
                              return (0, u.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((i = this.state),
                                          (n = i.passengerInfo),
                                          (o = void 0 === n ? [] : n),
                                          (a = i.buyTicketRule),
                                          (s = i.passengerPannelAllInfo),
                                          (c = i.reversePassengerInfo),
                                          (r = void 0 === c ? [] : c),
                                          (l = i.maxSaleTicketNumber),
                                          j.c.isValidName(t))
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          S().showModal({
                                            title: "提示",
                                            content: "姓名不正确，请重新编辑",
                                            showCancel: !1,
                                          })
                                        );
                                      case 3:
                                        if (
                                          ((d = []),
                                          (m = []),
                                          (p = []),
                                          (
                                            r.filter(function (e) {
                                              return e.isActive;
                                            }) || []
                                          ).forEach(function (e) {
                                            "A" == e.passengerType && m.push(e),
                                              "X" == e.passengerType &&
                                                d.push(e),
                                              "C" == e.passengerType &&
                                                p.push(e);
                                          }),
                                          t.isActive)
                                        ) {
                                          e.next = 35;
                                          break;
                                        }
                                        if ("C" != t.passengerType) {
                                          e.next = 16;
                                          break;
                                        }
                                        if (
                                          a.supportTicketType &&
                                          -1 !== a.supportTicketType.indexOf(2)
                                        ) {
                                          e.next = 14;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          S().showToast({
                                            title: "该车次不支持儿童票",
                                            icon: "none",
                                            duration: 1500,
                                          })
                                        );
                                      case 14:
                                        if (!(m.length <= 0)) {
                                          e.next = 16;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          S().showToast({
                                            title: "请至少添加一名成人",
                                            icon: "none",
                                            duration: 1500,
                                          })
                                        );
                                      case 16:
                                        if ("X" != t.passengerType) {
                                          e.next = 31;
                                          break;
                                        }
                                        if (
                                          a.supportTicketType &&
                                          -1 !== a.supportTicketType.indexOf(3)
                                        ) {
                                          e.next = 21;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          S().showToast({
                                            title: "该车次不支持免费携童票",
                                            icon: "none",
                                            duration: 1500,
                                          })
                                        );
                                      case 21:
                                        if (
                                          !(
                                            d.length >= a.supportTakeChildNumber
                                          )
                                        ) {
                                          e.next = 25;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          S().showToast({
                                            title: "携童超过限定数量",
                                            icon: "none",
                                            duration: 1500,
                                          })
                                        );
                                      case 25:
                                        if (!(d.length + 1 > m.length)) {
                                          e.next = 29;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          S().showToast({
                                            title: "携童数量不能超过成人",
                                            icon: "none",
                                            duration: 1500,
                                          })
                                        );
                                      case 29:
                                        if (!(m.length <= 0)) {
                                          e.next = 31;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          S().showToast({
                                            title: "请至少添加一名成人",
                                            icon: "none",
                                            duration: 1500,
                                          })
                                        );
                                      case 31:
                                        if (
                                          o.filter(function (e) {
                                            return (
                                              e.isActive &&
                                              "X" !== e.passengerType
                                            );
                                          }).length !== l ||
                                          t.isActive ||
                                          "X" === t.passengerType
                                        ) {
                                          e.next = 35;
                                          break;
                                        }
                                        if (
                                          !this.props
                                            .onActiveLengthBeyondMaxNumber
                                        ) {
                                          e.next = 34;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.props.onActiveLengthBeyondMaxNumber(
                                            l
                                          )
                                        );
                                      case 34:
                                        return e.abrupt(
                                          "return",
                                          S().showToast({
                                            title: "最多可添加".concat(
                                              l,
                                              "名乘客"
                                            ),
                                            icon: "none",
                                            duration: 1500,
                                          })
                                        );
                                      case 35:
                                        o.forEach(function (e, i) {
                                          var n;
                                          (n =
                                            t.id === e.id
                                              ? (0, h.Z)(
                                                  (0, h.Z)({}, e),
                                                  {},
                                                  { isActive: !e.isActive }
                                                )
                                              : (0, h.Z)(
                                                  (0, h.Z)({}, e),
                                                  {},
                                                  { isActive: !!e.isActive }
                                                )),
                                            (o[i] = n);
                                        }),
                                          0 === r.length
                                            ? ((f = o
                                                .filter(function (e) {
                                                  return e.id === t.id;
                                                })
                                                .map(function (e) {
                                                  return (0,
                                                  h.Z)((0, h.Z)({}, e), {}, { isActive: !0 });
                                                })),
                                              r.unshift(f[0]))
                                            : r.forEach(function (e, i) {
                                                var n = {};
                                                if (
                                                  (t.id === e.id &&
                                                    (r.splice(i, 1),
                                                    (n = (0, h.Z)(
                                                      (0, h.Z)({}, e),
                                                      {},
                                                      { isActive: !e.isActive }
                                                    )),
                                                    r.unshift(n)),
                                                  -1 ===
                                                    r.findIndex(function (e) {
                                                      return e.id === t.id;
                                                    }))
                                                ) {
                                                  var o = s.find(function (e) {
                                                    return e.id === t.id;
                                                  });
                                                  (n = (0, h.Z)(
                                                    (0, h.Z)({}, o),
                                                    {},
                                                    { isActive: !0 }
                                                  )),
                                                    r.unshift(n);
                                                }
                                              }),
                                          this.setState(
                                            {
                                              passengerInfo: o,
                                              reversePassengerInfo: r,
                                            },
                                            function () {
                                              var e = [];
                                              r.forEach(function (t) {
                                                t.isActive && e.push(t.id);
                                              });
                                              var t = {
                                                reversePassengerInfo: r,
                                                passengerSelectIdList: e,
                                              };
                                              g.props.onRefreshPasShow(t),
                                                g.setState({
                                                  passengerSelectIdList: e,
                                                });
                                            }
                                          );
                                      case 38:
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
                        key: "onDeletePassenger",
                        value: function (e) {
                          var t = e.currentTarget.dataset.index,
                            i = this.state,
                            n = i.passengerInfo,
                            o = i.reversePassengerInfo,
                            a = o[t],
                            s = [],
                            c = [],
                            r = [];
                          if (
                            (o.forEach(function (e) {
                              "A" == e.passengerType && c.push(e),
                                "X" == e.passengerType && s.push(e),
                                "C" == e.passengerType && r.push(e);
                            }),
                            "A" == a.passengerType && !(c.length > s.length))
                          )
                            return S().showToast({
                              title: "携童数量不能超过成人",
                              icon: "none",
                              duration: 1500,
                            });
                          o.splice(t, 1),
                            n.forEach(function (e, t) {
                              var i = o.every(function (t) {
                                return t.id !== e.id;
                              });
                              e.isActive && i && (n[t].isActive = !1);
                            });
                          var l = [];
                          n.forEach(function (e) {
                            e.isActive && l.push(e.id);
                          });
                          var u = {
                            reversePassengerInfo: o,
                            passengerSelectIdList: l,
                          };
                          this.props.onRefreshPasShow(u),
                            this.setState({
                              reversePassengerInfo: o,
                              passengerInfo: n,
                              passengerSelectIdList: l,
                            });
                        },
                      },
                      {
                        key: "onClickDeleIcon",
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "",
                            i = this.state.reversePassengerInfo;
                          i.forEach(function (n, o) {
                            e.id === n.id &&
                              (i[o] = (0, h.Z)(
                                (0, h.Z)({}, n),
                                {},
                                { isShowDele: "delete" === t && !n.isShowDele }
                              ));
                          }),
                            this.setState({ reversePassengerInfo: i });
                        },
                      },
                      {
                        key: "doBusTraceInfo",
                        value: function (e, t) {
                          var i, n;
                          null === (i = (n = this.props).doBusTraceInfo) ||
                            void 0 === i ||
                            i.call(n, e, t);
                        },
                      },
                      {
                        key: "onClickPassengerItemEdit",
                        value: function (e) {
                          var t = this;
                          this.doBusTraceInfo(
                            {
                              bizKey: "PassengerDetail",
                              comment: "乘客信息栏（身份证栏）",
                              clickType: x.uh.confirmClick,
                            },
                            2
                          );
                          var i = this.state,
                            n = i.buyTicketRule,
                            o = i.passengerInfo,
                            a = i.reversePassengerInfo;
                          this.navigateTo({
                            url: "/pages/bus/editPassenger/index",
                            data: JSON.stringify({
                              buyTicketRule: n,
                              pasInfo: e,
                              fromPage: "book",
                            }),
                            callback: function () {
                              t.props
                                .onRefreshPassenger("child")
                                .then(function (e) {
                                  var i = e.passengerPannelAllInfo,
                                    n = a.map(function (e) {
                                      var t,
                                        n = e,
                                        o = (0, H.Z)(i);
                                      try {
                                        for (o.s(); !(t = o.n()).done; ) {
                                          var a = t.value;
                                          if (a.id === e.id) {
                                            n = (0, h.Z)(
                                              (0, h.Z)({}, a),
                                              {},
                                              { isActive: e.isActive }
                                            );
                                            break;
                                          }
                                        }
                                      } catch (e) {
                                        o.e(e);
                                      } finally {
                                        o.f();
                                      }
                                      return n;
                                    }),
                                    s = o.map(function (e) {
                                      var t,
                                        n = e,
                                        o = (0, H.Z)(i);
                                      try {
                                        for (o.s(); !(t = o.n()).done; ) {
                                          var a = t.value;
                                          a.id === e.id &&
                                            (n = (0, h.Z)(
                                              (0, h.Z)({}, a),
                                              {},
                                              { isActive: e.isActive }
                                            ));
                                          break;
                                        }
                                      } catch (e) {
                                        o.e(e);
                                      } finally {
                                        o.f();
                                      }
                                      return n;
                                    }),
                                    c = { reversePassengerInfo: s };
                                  t.props.onRefreshPasShow(c),
                                    t.setState({
                                      passengerInfo: s,
                                      reversePassengerInfo: n,
                                    });
                                });
                            },
                          });
                        },
                      },
                      {
                        key: "handleEditAndAddPas",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.buyTicketRule,
                            n = t.passengerSelectIdList,
                            o = t.passengerInfo;
                          this.doBusTraceInfo(
                            {
                              bizKey: "addChanerIcon",
                              comment: "新增/修改乘客按钮",
                              clickType: x.uh.confirmClick,
                            },
                            2
                          ),
                            this.navigateTo(
                              {
                                url: "/pages/bus/passengerList/index",
                                data: JSON.stringify({
                                  buyTicketRule: i,
                                  selectedPasIds: n,
                                  utmSource: this.props.utmSource,
                                }),
                                callback: function (t) {
                                  var i = t.selectedPasIds;
                                  e.handleRefreshPassenger(i, o);
                                },
                              },
                              this
                            );
                        },
                      },
                      {
                        key: "addNewPassenger",
                        value: function () {
                          var e = this;
                          this.doBusTraceInfo(
                            {
                              bizKey: "addPassenger",
                              comment: "手动添加乘客",
                              clickType: x.uh.confirmClick,
                            },
                            2
                          );
                          var t = this.state,
                            i = t.buyTicketRule,
                            n = t.passengerInfo;
                          this.navigateTo(
                            {
                              url: "/pages/bus/editPassenger/index",
                              data: JSON.stringify({
                                buyTicketRule: i,
                                pasInfo: null,
                              }),
                              callback: function (t) {
                                try {
                                  var i = t.passengerID;
                                  e.handleRefreshPassenger([i], n);
                                } catch (e) {
                                  console.log(e);
                                }
                              },
                            },
                            this
                          );
                        },
                      },
                      {
                        key: "addNewPassengerOcr",
                        value: function () {
                          var e = this;
                          this.doBusTraceInfo(
                            {
                              bizKey: "ScanPassenger",
                              comment: "拍照识别乘客",
                              clickType: x.uh.confirmClick,
                            },
                            2
                          );
                          var t = this.state,
                            i = t.buyTicketRule,
                            n = t.passengerInfo;
                          this.navigateTo(
                            {
                              url: "/pages/bus/editPassenger/index",
                              data: JSON.stringify({
                                buyTicketRule: i,
                                pasInfo: null,
                                isOcr: !0,
                              }),
                              callback: function (t) {
                                try {
                                  var i = t.passengerID;
                                  e.handleRefreshPassenger([i], n);
                                } catch (e) {
                                  console.log(e);
                                }
                              },
                            },
                            this
                          );
                        },
                      },
                      {
                        key: "handleRefreshPassenger",
                        value: function (e, t) {
                          var i = this;
                          if (Array.isArray(e) && 0 !== e.length)
                            this.props
                              .onRefreshPassenger("child")
                              .then(function (n) {
                                var o = n.passengerPannelAllInfo,
                                  a = [],
                                  s = t;
                                e.forEach(function (e) {
                                  o.forEach(function (t) {
                                    e === t.id &&
                                      a.push(
                                        (0, h.Z)(
                                          (0, h.Z)({}, t),
                                          {},
                                          { isActive: !0 }
                                        )
                                      );
                                  });
                                }),
                                  e.forEach(function (e) {
                                    s = (s = s.filter(function (t) {
                                      return e !== t.id;
                                    })).map(function (e) {
                                      return e.isActive
                                        ? (0, h.Z)(
                                            (0, h.Z)({}, e),
                                            {},
                                            { isActive: !1 }
                                          )
                                        : e;
                                    });
                                  }),
                                  (a = a.concat(s));
                                var c = [];
                                a.forEach(function (e) {
                                  e.isActive && c.push(e.id);
                                });
                                var r = {
                                  reversePassengerInfo: a,
                                  passengerSelectIdList: c,
                                };
                                i.props.onRefreshPasShow(r),
                                  i.setState(
                                    {
                                      passengerInfo: a.slice(0, 5),
                                      reversePassengerInfo: a,
                                      passengerSelectIdList: c,
                                      isComponentShow: !0,
                                      passengerPannelAllInfo: o,
                                    },
                                    function () {
                                      var e, t;
                                      K ||
                                        1 !== a.length ||
                                        null ===
                                          (e = (t = i.props)
                                            .remindWhetherReceiveDiscount) ||
                                        void 0 === e ||
                                        e.call(t, "1", "passenger", !1);
                                    }
                                  );
                              });
                          else {
                            var n = t,
                              o = {
                                reversePassengerInfo: (n = n.map(function (e) {
                                  return (0,
                                  h.Z)((0, h.Z)({}, e), {}, { isActive: !1 });
                                })),
                                passengerSelectIdList: [],
                              };
                            this.props.onRefreshPasShow(o),
                              this.setState({
                                passengerInfo: JSON.parse(JSON.stringify(n)),
                                reversePassengerInfo: JSON.parse(
                                  JSON.stringify(n)
                                ),
                                passengerSelectIdList: [],
                              });
                          }
                        },
                      },
                      {
                        key: "isInGuess",
                        value: function (e) {
                          var t = e.name,
                            i = void 0 === t ? "" : t,
                            n = e.cardNum,
                            o = void 0 === n ? "" : n,
                            a = this.props.studentGuessList;
                          return (void 0 === a ? [] : a).some(function (e) {
                            return (
                              e.name === i &&
                              e.idCardNo &&
                              e.idCardNo.slice(0, 4) === o.slice(0, 4) &&
                              e.idCardNo.slice(-3) === o.slice(-3)
                            );
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            n = t.passengerInfo,
                            o = t.reversePassengerInfo,
                            a = t.isComponentShow,
                            s = this.props.discountMes,
                            c = (s || {}).info,
                            r =
                              o[0] &&
                              o.some(function (e) {
                                return e.isActive;
                              });
                          return (0, W.tZ)(w.View, {
                            className: "bus-passenger-pannel",
                            children: (0, W.tZ)(w.View, {
                              className:
                                (i ? "ty" : "zx") + " mod-passenger-pannel",
                              children: a
                                ? (0, W.BX)(w.Block, {
                                    children: [
                                      (0, W.BX)(w.View, {
                                        className: "tab",
                                        children: [
                                          n &&
                                            n.map(function (t) {
                                              return (0,
                                              W.BX)(w.View, { className: "item ".concat(t.isActive ? "active" : ""), id: "AdDD", onClick: e.onClickPassengerBtn.bind(e, t), children: [(0, W.tZ)(w.Text, { className: "name", children: t.name }), t.isActive && (0, W.tZ)(w.Text, { className: "ifont-gou iconfont" })] }, t.id);
                                            }),
                                          (0, W.BX)(w.View, {
                                            className: "item inc",
                                            id: "AdDE",
                                            onClick:
                                              this.handleEditAndAddPas.bind(
                                                this
                                              ),
                                            children: [
                                              (0, W.tZ)(w.Text, {
                                                className:
                                                  "ifont-fail iconfont",
                                              }),
                                              (0, W.tZ)(w.Text, {
                                                children: "新增/修改",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      r &&
                                        (0, W.tZ)(w.View, {
                                          className: "pannel",
                                          children: o
                                            .filter(function (e) {
                                              return e.isActive;
                                            })
                                            .map(function (t, i) {
                                              return (0, W.tZ)(
                                                w.View,
                                                {
                                                  className: "item-wrapper",
                                                  id: "AdDF",
                                                  onClick: t.isShowDele
                                                    ? e.onClickDeleIcon.bind(
                                                        e,
                                                        t
                                                      )
                                                    : e.onClickPassengerItemEdit.bind(
                                                        e,
                                                        t
                                                      ),
                                                  children: (0, W.BX)(w.View, {
                                                    "data-index": i,
                                                    className: "item ".concat(
                                                      t.isShowDele ? "dele" : ""
                                                    ),
                                                    children: [
                                                      (0, W.tZ)(w.View, {
                                                        className: "left row",
                                                        children: (0, W.tZ)(
                                                          w.Text,
                                                          {
                                                            className:
                                                              "ifont-pasgdel iconfont color-red",
                                                            id: "AdDG",
                                                            onClick: function (
                                                              i
                                                            ) {
                                                              i.stopPropagation(),
                                                                e.onClickDeleIcon(
                                                                  t,
                                                                  "delete"
                                                                );
                                                            },
                                                          }
                                                        ),
                                                      }),
                                                      (0, W.BX)(w.View, {
                                                        className: "midrig",
                                                        children: [
                                                          (0, W.BX)(w.View, {
                                                            className:
                                                              "middle row",
                                                            children: [
                                                              (0, W.BX)(
                                                                w.View,
                                                                {
                                                                  className:
                                                                    "name",
                                                                  children: [
                                                                    t.name,
                                                                    e.isInGuess(
                                                                      t
                                                                    ) &&
                                                                      (0, W.tZ)(
                                                                        w.Text,
                                                                        {
                                                                          className:
                                                                            "stu-tag",
                                                                          children:
                                                                            "学",
                                                                        }
                                                                      ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, W.tZ)(
                                                                w.View,
                                                                {
                                                                  className:
                                                                    "credit",
                                                                  children: ""
                                                                    .concat(
                                                                      t.cardName,
                                                                      " "
                                                                    )
                                                                    .concat(
                                                                      t.cardNum
                                                                    ),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, W.BX)(w.View, {
                                                            className:
                                                              "right ".concat(
                                                                t.isShowDele
                                                                  ? "active"
                                                                  : ""
                                                              ),
                                                            children: [
                                                              (0, W.tZ)(
                                                                w.Text,
                                                                {
                                                                  className:
                                                                    "desc",
                                                                  children:
                                                                    t.type,
                                                                }
                                                              ),
                                                              (0, W.tZ)(
                                                                w.Text,
                                                                {
                                                                  className:
                                                                    "ifont-arr iconfont",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, W.tZ)(w.View, {
                                                        "data-index": i,
                                                        className:
                                                          "delete ".concat(
                                                            t.isShowDele
                                                              ? "active"
                                                              : ""
                                                          ),
                                                        id: "AdDH",
                                                        onClick:
                                                          e.onDeletePassenger.bind(
                                                            e
                                                          ),
                                                        children: (0, W.tZ)(
                                                          w.Text,
                                                          {
                                                            className: "con",
                                                            children: "删除",
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                },
                                                t.id
                                              );
                                            }),
                                        }),
                                    ],
                                  })
                                : (0, W.BX)(w.View, {
                                    className: "passenger-box",
                                    children: [
                                      (0, W.BX)(w.View, {
                                        className: "new-tab",
                                        children: [
                                          (0, W.BX)(w.View, {
                                            className: "btn",
                                            id: "AdDB",
                                            onClick:
                                              this.addNewPassenger.bind(this),
                                            children: [
                                              (0, W.tZ)(w.Text, {
                                                className:
                                                  "ifont-fail iconfont",
                                              }),
                                              (0, W.tZ)(w.Text, {
                                                className: "txt",
                                                children: "新增乘客",
                                              }),
                                            ],
                                          }),
                                          y.default.isWechat &&
                                            (0, W.BX)(w.View, {
                                              className: "btn",
                                              id: "AdDC",
                                              onClick:
                                                this.addNewPassengerOcr.bind(
                                                  this
                                                ),
                                              children: [
                                                (0, W.tZ)(w.Text, {
                                                  className:
                                                    "iconfont ifont-scan",
                                                }),
                                                (0, W.tZ)(w.Text, {
                                                  className: "txt",
                                                  children: "扫描身份证添加",
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, W.tZ)(w.Block, {
                                        children:
                                          !K &&
                                          s &&
                                          c &&
                                          (0, W.BX)(w.View, {
                                            className:
                                              "discount-tips-no-passenger",
                                            children: [
                                              (0, W.tZ)(w.Image, {
                                                className: "tips-icon",
                                                src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/hbicon@3x.png",
                                              }),
                                              (0, W.BX)(w.View, {
                                                className: "tips-left",
                                                children: [
                                                  "添加新客，本单立减",
                                                  (0, W.BX)(w.Text, {
                                                    className: "color-red",
                                                    children: ["¥", c.num],
                                                  }),
                                                ],
                                              }),
                                              (0, W.tZ)(w.Text, {
                                                className: "tips-right",
                                                children:
                                                  "智行汽车票·比车站便宜",
                                              }),
                                            ],
                                          }),
                                      }),
                                    ],
                                  }),
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(b.default.Component))
              ) || n,
            Y = i(21433),
            q = i(33359),
            $ = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return Object.keys(e)
                .filter(function (t) {
                  return e[t];
                })
                .join(" ");
            },
            Q = function (e) {
              return "number" == typeof e;
            },
            ee = b.default.memo(function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.defaultValue,
                i = void 0 === t ? 0 : t,
                n = e.min,
                o = e.max,
                a = e.onWithinMinValue,
                s = void 0 === a ? function () {} : a,
                c = e.onBeyondMaxValue,
                l = void 0 === c ? function () {} : c,
                u = e.onChange,
                d = void 0 === u ? function () {} : u,
                h = (0, b.useState)(i),
                m = (0, r.Z)(h, 2),
                p = m[0],
                f = m[1];
              (0, b.useEffect)(
                function () {
                  d && d(p);
                },
                [p]
              );
              var g = function () {
                  Q(n) && p <= n ? s() : f(p - 1);
                },
                v = function () {
                  Q(o) && p >= o ? l() : f(p + 1);
                };
              return (
                (0, b.useImperativeHandle)(e.onRef, function () {
                  return {
                    getValue: function () {
                      return p;
                    },
                  };
                }),
                (0, W.BX)(w.View, {
                  className: "bus-passenger-counter",
                  children: [
                    (0, W.tZ)(w.View, {
                      className: $({
                        "btn-reduce": !0,
                        disabled: Q(n) && p <= n,
                      }),
                      id: "AdCv",
                      onClick: g,
                    }),
                    p,
                    (0, W.tZ)(w.View, {
                      id: "AdFw",
                      className: $({ "btn-add": !0, disabled: Q(o) && p >= o }),
                      onClick: v,
                    }),
                  ],
                })
              );
            }),
            te = b.default.memo(function (e) {
              var t = e.min,
                i = void 0 === t ? 0 : t,
                n = e.defaultLen,
                o = void 0 === n ? 0 : n,
                a = e.defaultTel,
                s = void 0 === a ? "" : a,
                c = e.onPassengerLengthChange,
                l = void 0 === c ? console.log : c,
                u = e.onInputChange,
                d = void 0 === u ? console.log : u,
                h = e.max,
                m = null,
                p = null,
                f = (0, b.useState)(s),
                g = (0, r.Z)(f, 2),
                v = g[0],
                k = g[1];
              (0, b.useEffect)(
                function () {
                  d && d({ detail: { value: v } });
                },
                [v]
              );
              return (
                (0, b.useImperativeHandle)(e.onRef, function () {
                  return {
                    getPassengerLength: function () {
                      var e;
                      return null === (e = m) || void 0 === e
                        ? void 0
                        : e.getValue();
                    },
                    getTelValue: function () {
                      var e, t;
                      return null === (e = p) ||
                        void 0 === e ||
                        null === (t = e.value) ||
                        void 0 === t
                        ? void 0
                        : t.trim();
                    },
                    telFocus: function () {
                      var e;
                      console.log("focus"),
                        null === (e = p) || void 0 === e || e.focus();
                    },
                  };
                }),
                (0, W.BX)(w.View, {
                  className: "bus-no-id-passenger-component",
                  children: [
                    (0, W.BX)(w.View, {
                      className: "top-content",
                      children: [
                        (0, W.tZ)(w.View, {
                          className: "passenger-type",
                          children: "成人",
                        }),
                        (0, W.tZ)(w.View, {
                          className: "passenger-count",
                          children: (0, W.tZ)(ee, {
                            min: i,
                            defaultValue: o,
                            max: h,
                            onRef: function (e) {
                              m = e;
                            },
                            onChange: l,
                          }),
                        }),
                      ],
                    }),
                    (0, W.tZ)(w.View, {
                      className: "bottom-content",
                      children: (0, W.BX)(w.View, {
                        className: "input-content",
                        children: [
                          (0, W.tZ)(w.View, {
                            className: "title",
                            children: "联系手机",
                          }),
                          (0, W.tZ)(w.Input, {
                            className: "input-dom",
                            type: "number",
                            placeholder: "必填，用于接收出票信息",
                            placeholderClass: "input-placeholder",
                            ref: function (e) {
                              p = e;
                            },
                            onInput: function (e) {
                              var t;
                              k(
                                (null == e ||
                                null === (t = e.detail) ||
                                void 0 === t
                                  ? void 0
                                  : t.value) || ""
                              );
                            },
                            value: v,
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              );
            }),
            ie = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, v.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, m.Z)(this, i),
                  ((n = t.call(this, e)).state = { isShowDetail: !1 }),
                  n
                );
              }
              return (
                (0, p.Z)(i, [
                  {
                    key: "onRadioChange",
                    value: function () {
                      this.onSwitchDetail(!0),
                        this.props.onTicketChange(
                          !this.props.info.isSpecialTicket
                        );
                    },
                  },
                  {
                    key: "onTickectItemChange",
                    value: function (e) {
                      this.props.onTicketChange("subTicket" === e.type),
                        "subTicket" === e.type && this.onSwitchDetail(!1);
                    },
                  },
                  {
                    key: "onSwitchDetail",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : !this.state.isShowDetail;
                      this.setState({ isShowDetail: e });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state.isShowDetail,
                        i = this.props.info,
                        n = i.isSpecialTicket,
                        o = i.subTicketDetail,
                        a = i.specialTicketAmount,
                        s = void 0 === a ? 0 : a,
                        c = (0, W.tZ)(w.View, {
                          className: "switch-comp ".concat(n ? "switched" : ""),
                        });
                      return (0, W.BX)(w.View, {
                        className: "bus-book-sparpreis-selector",
                        children: [
                          (0, W.BX)(w.View, {
                            className: "title-con",
                            style: {
                              backgroundImage:
                                "url(https://pages.c-ctrip.com/bus-images/zhixing/icon/zj@3x.png)",
                            },
                            children: [
                              (0, W.BX)(w.View, {
                                className: "tl",
                                id: "AdDf",
                                onClick: this.onSwitchDetail.bind(this, !t),
                                children: [
                                  (0, W.tZ)(w.Image, {
                                    className: "icon",
                                    src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/hb@3x.png",
                                    mode: "aspectFit",
                                  }),
                                  n
                                    ? "已享特价票·比车站低"
                                    : "特价票·当前线路可优惠",
                                  (0, W.tZ)(w.Text, {
                                    className: "price",
                                    children: s,
                                  }),
                                  "元/张",
                                  (0, W.tZ)(w.Image, {
                                    className: "switch-icon",
                                    src: t
                                      ? "https://pages.c-ctrip.com/bus-images/zhixing/icon/sq@3x.png"
                                      : "https://pages.c-ctrip.com/bus-images/zhixing/icon/zk@3x.png",
                                    mode: "aspectFit",
                                  }),
                                ],
                              }),
                              (0, W.BX)(w.View, {
                                className: "tr",
                                id: "AdDg",
                                onClick: this.onRadioChange.bind(this),
                                children: ["特价票", c],
                              }),
                            ],
                          }),
                          t &&
                            (0, W.tZ)(w.View, {
                              className: "detail-con",
                              children: o.map(function (t) {
                                return (0,
                                W.BX)(w.View, { className: "detail-item ".concat(t.type === (n ? "subTicket" : "ticket") ? "checked" : ""), id: "AdDh", onClick: e.onTickectItemChange.bind(e, t), children: [(0, W.BX)(w.View, { className: "title", children: [t.title, (0, W.tZ)(w.Text, { className: "price", children: t.price }), "subTicket" === t.type && s > 0 && (0, W.BX)(w.Text, { className: "tag", children: ["立减", (0, W.tZ)(w.Text, { className: "tag-price", children: s })] })] }), (0, W.tZ)(w.View, { className: "desc", children: t.desc })] }, t.type);
                              }),
                            }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(b.default.PureComponent),
            ne = i(77900),
            oe =
              (0, U.h)(!0)(
                (o = (function (e) {
                  (0, g.Z)(i, e);
                  var t = (0, v.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, m.Z)(this, i),
                      ((n = t.call(this, e)).state = {
                        isTieyou: y.default.isTieyou,
                        isShow: !1,
                        name: "",
                        cardNum: "",
                      }),
                      n
                    );
                  }
                  return (
                    (0, p.Z)(i, [
                      {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function (e) {
                          this.setState({ isShow: e.visible });
                        },
                      },
                      {
                        key: "onCloseModal",
                        value: function () {
                          var e = this.state.isShow;
                          this.props.onClose && this.props.onClose(!e);
                        },
                      },
                      {
                        key: "handleInputChange",
                        value: function (e, t) {
                          this.setState((0, k.Z)({}, e, t.detail.value));
                        },
                      },
                      {
                        key: "handleConfirm",
                        value: function () {
                          var e = this.state,
                            t = e.name,
                            i = e.cardNum;
                          console.log("cardnum", i);
                          var n = ne.Z.isValidSFZ(i),
                            o = ne.Z.isValidCNName(t);
                          if (o && n)
                            return (
                              this.props.onClose && this.props.onClose(),
                              void (
                                this.props.onConfirm &&
                                this.props.onConfirm({ name: t, cardNum: i })
                              )
                            );
                          n ||
                            S().showToast({
                              title: "身份证填写有误",
                              duration: 2e3,
                            }),
                            o ||
                              S().showToast({
                                title: "姓名填写有误",
                                duration: 2e3,
                              });
                        },
                      },
                      {
                        key: "handleCancel",
                        value: function () {
                          var e = this.state.isShow;
                          this.props.onCancel && this.props.onCancel(),
                            this.props.onClose && this.props.onClose(!e);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.isTieyou,
                            i = e.isShow,
                            n = e.name,
                            o = e.cardNum;
                          return (0, W.tZ)(w.View, {
                            className: "bus-guarantee-modal",
                            children:
                              i &&
                              (0, W.tZ)(w.View, {
                                className: "mod-guarantee-modal ".concat(
                                  t ? "ty" : "zx"
                                ),
                                children: (0, W.tZ)(w.View, {
                                  className: "modal-mask ".concat(
                                    i ? "visible" : "hidden"
                                  ),
                                  children: (0, W.BX)(w.View, {
                                    className: "modal-wrapper ".concat(
                                      i ? "visible" : "hidden"
                                    ),
                                    children: [
                                      (0, W.tZ)(w.View, {
                                        className: "title",
                                        children: "保障信息补充",
                                      }),
                                      (0, W.tZ)(w.View, {
                                        className: "desc",
                                        children:
                                          "根据规定,未成年人投保须由其监护人作为投保人，请填写监护人信息",
                                      }),
                                      (0, W.BX)(w.View, {
                                        className: "detail",
                                        children: [
                                          (0, W.BX)(w.View, {
                                            className: "name",
                                            children: [
                                              (0, W.tZ)(w.Text, {
                                                className: "tit",
                                                children: "监护人姓名",
                                              }),
                                              (0, W.tZ)(w.Input, {
                                                className: "cont",
                                                placeholder: "请输入姓名",
                                                value: n,
                                                onInput:
                                                  this.handleInputChange.bind(
                                                    this,
                                                    "name"
                                                  ),
                                              }),
                                            ],
                                          }),
                                          (0, W.BX)(w.View, {
                                            className: "card",
                                            children: [
                                              (0, W.tZ)(w.Text, {
                                                className: "tit",
                                                children: "监护人身份证",
                                              }),
                                              (0, W.tZ)(w.Input, {
                                                className: "cont",
                                                placeholder: "请输入证件号",
                                                value: o,
                                                onInput:
                                                  this.handleInputChange.bind(
                                                    this,
                                                    "cardNum"
                                                  ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, W.BX)(w.View, {
                                        className: "btn",
                                        children: [
                                          (0, W.tZ)(w.View, {
                                            className: "cancel",
                                            id: "AdCq",
                                            onClick:
                                              this.handleCancel.bind(this),
                                            children: "取消投保",
                                          }),
                                          (0, W.tZ)(w.View, {
                                            className: "confirm",
                                            id: "AdCr",
                                            onClick:
                                              this.handleConfirm.bind(this),
                                            children: "确认添加信息",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(b.default.Component))
              ) || o,
            ae = i(34229),
            se = i(43005),
            ce = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, v.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, m.Z)(this, i),
                  ((n = t.call(this, e)).state = {
                    oldCustomerInterceptPosterUrl: "",
                    oldCustomerInterceptPosterTipUrl: "",
                    isShowPosterModal: !1,
                    isShowCouponCardModal: !0,
                  }),
                  n
                );
              }
              return (
                (0, p.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.judgeOldCustomerInfo();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      !this.isShowOldCustomerIntercept() ||
                        (t.oldCustomerInterceptPosterUrl &&
                          e.xCouponInfo.length > 0 &&
                          t.isShowCouponCardModal) ||
                        this.doTrace(
                          {
                            exposureType: "popup",
                            bizKey: "booking_pop_grab_button_show",
                            comment: "填写页弹窗抢购按钮曝光",
                          },
                          1
                        ),
                        !this.isShowOldCustomerInterceptPoster() ||
                          (t.oldCustomerInterceptPosterUrl &&
                            t.isShowPosterModal) ||
                          this.doTrace(
                            {
                              exposureType: "popup",
                              bizKey: "booking_pop_saveQRcode_button_show",
                              comment: "填写页弹窗保存图片按钮曝光",
                            },
                            1
                          );
                    },
                  },
                  {
                    key: "doTrace",
                    value: function (e, t) {
                      this.props.doBusTraceInfo &&
                        this.props.doBusTraceInfo(e, t);
                    },
                  },
                  {
                    key: "isShowOldCustomerIntercept",
                    value: function () {
                      return (
                        !!this.state.oldCustomerInterceptPosterUrl &&
                        this.props.xCouponInfo.length > 0 &&
                        this.state.isShowCouponCardModal
                      );
                    },
                  },
                  {
                    key: "isShowOldCustomerInterceptPoster",
                    value: function () {
                      return (
                        !!this.state.oldCustomerInterceptPosterUrl &&
                        this.state.isShowPosterModal
                      );
                    },
                  },
                  {
                    key: "onChooseBuyCardClick",
                    value: function () {
                      var e = this;
                      this.doTrace(
                        {
                          bizKey: "booking_pop_grab_button_click",
                          comment: "填写页弹窗抢购按钮点击",
                          clickType: x.uh.confirmClick,
                        },
                        2
                      ),
                        this.setState(
                          { isShowCouponCardModal: !1 },
                          function () {
                            e.setState({ isShowPosterModal: !0 });
                          }
                        ),
                        this.props.onChooseCard &&
                          this.props.onChooseCard(this.getCouponElement());
                    },
                  },
                  {
                    key: "onRejectBuyCardClick",
                    value: function () {
                      this.setState({ isShowCouponCardModal: !1 });
                    },
                  },
                  {
                    key: "onDownLoadImg",
                    value: function () {
                      var e = this;
                      this.doTrace(
                        {
                          bizKey: "booking_pop_saveQRcode_button_click",
                          comment: "填写页弹窗保存图片按钮点击",
                          clickType: x.uh.confirmClick,
                        },
                        2
                      ),
                        this.checkAlbumAuthPromise().then(
                          function () {
                            S().downloadFile({
                              url: e.state.oldCustomerInterceptPosterUrl,
                              success: function (t) {
                                if ((console.log(t), 200 === t.statusCode)) {
                                  var i = t.tempFilePath;
                                  S().saveImageToPhotosAlbum({
                                    filePath: i,
                                    success: function () {
                                      (0, M.showToast)("已保存到相册"),
                                        e.setState({ isShowPosterModal: !1 });
                                    },
                                    fail: function (t) {
                                      console.log("downloadNetFile err:", t),
                                        (0, M.showToast)(
                                          "图片保存失败, 请重试"
                                        ),
                                        e.setState({ isShowPosterModal: !1 });
                                    },
                                  });
                                }
                              },
                              fail: function (t) {
                                console.log("saveImageToPhotosAlbum err:", t),
                                  (0, M.showToast)("图片保存失败, 请重试"),
                                  e.setState({ isShowPosterModal: !1 });
                              },
                            });
                          },
                          function () {
                            return (
                              e.setState({ isShowPosterModal: !1 }),
                              S().showModal({
                                title: "授权失败",
                                content:
                                  "请在小程序设置界面（「右上角」-「设置」）中打开「保存到相册」",
                                confirmText: "去设置",
                                cancelText: "取消",
                                success: function (t) {
                                  t.confirm &&
                                    S().openSetting({
                                      success: function (t) {
                                        t.authSetting[
                                          "scope.writePhotosAlbum"
                                        ] && e.onDownLoadImg();
                                      },
                                    });
                                },
                              })
                            );
                          }
                        );
                    },
                  },
                  {
                    key: "getCouponElement",
                    value: function () {
                      var e;
                      return null === (e = this.props.xCouponInfo) ||
                        void 0 === e
                        ? void 0
                        : e[0];
                    },
                  },
                  {
                    key: "judgeOldCustomerInfo",
                    value: (function () {
                      var e = (0, d.Z)(
                        (0, u.Z)().mark(function e() {
                          var t, i, n;
                          return (0, u.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      (0, se.f8)({
                                        fromStation: this.props.fromStation,
                                      })
                                    );
                                  case 3:
                                    (n = e.sent),
                                      this.setState({
                                        oldCustomerInterceptPosterUrl:
                                          1 == n.code &&
                                          (null === (t = n.data) || void 0 === t
                                            ? void 0
                                            : t.saveImageUrl),
                                        oldCustomerInterceptPosterTipUrl:
                                          1 == n.code &&
                                          (null === (i = n.data) || void 0 === i
                                            ? void 0
                                            : i.tipImageUrl),
                                      }),
                                      (e.next = 10);
                                    break;
                                  case 7:
                                    (e.prev = 7),
                                      (e.t0 = e.catch(0)),
                                      this.setState({
                                        oldCustomerInterceptPosterUrl: "",
                                        oldCustomerInterceptPosterTipUrl: "",
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
                    key: "checkAlbumAuthPromise",
                    value: function () {
                      return new Promise(function (e, t) {
                        S().getSetting({
                          success: function (i) {
                            i.authSetting["scope.writePhotosAlbum"]
                              ? e()
                              : S().authorize({
                                  scope: "scope.writePhotosAlbum",
                                  success: function () {
                                    e();
                                  },
                                  fail: function () {
                                    t();
                                  },
                                });
                          },
                        });
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.oldCustomerInterceptPosterUrl,
                        i = e.oldCustomerInterceptPosterTipUrl,
                        n = this.getCouponElement();
                      return (0, W.BX)(w.Block, {
                        children: [
                          this.getCouponElement() &&
                            (0, W.tZ)(ae.ZtActivityPop, {
                              show: this.isShowOldCustomerIntercept(),
                              className: "bus-oldCustomerIntercept-modal",
                              isShowClose: !1,
                              animation: "comeup",
                              children: (0, W.BX)(w.View, {
                                className: "bus-oldCustomerIntercept-view",
                                children: [
                                  (0, W.BX)(w.View, {
                                    className: "title",
                                    children: [
                                      (0, W.tZ)(w.Image, {
                                        src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/ckbt@3x.png",
                                        mode: "aspectFit",
                                        className: "title-img",
                                      }),
                                      (0, W.tZ)(w.View, {
                                        className: "title-desc",
                                        children: "老用户限时专享福利",
                                      }),
                                    ],
                                  }),
                                  (0, W.BX)(w.View, {
                                    className: "coupon-card",
                                    children: [
                                      (0, W.tZ)(w.View, {
                                        className: "left",
                                        children: n.payShowPrice,
                                      }),
                                      (0, W.BX)(w.View, {
                                        className: "right",
                                        children: [
                                          (0, W.BX)(w.View, {
                                            className: "coupon-title",
                                            children: [
                                              n.showPrice,
                                              "元",
                                              n.title,
                                            ],
                                          }),
                                          (0, W.tZ)(w.View, {
                                            className: "sub-title",
                                            children: n.subTitle,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, W.BX)(w.View, {
                                    className: "btn-view",
                                    children: [
                                      (0, W.tZ)(w.View, {
                                        className: "btn-buy",
                                        id: "AdCw",
                                        onClick:
                                          this.onChooseBuyCardClick.bind(this),
                                        children: "立即选购",
                                      }),
                                      (0, W.tZ)(w.View, {
                                        className: "btn-reject",
                                        id: "AdCx",
                                        onClick:
                                          this.onRejectBuyCardClick.bind(this),
                                        children: "残忍拒绝",
                                      }),
                                    ],
                                  }),
                                  (0, W.tZ)(w.View, {
                                    className: "icon-close",
                                    id: "AdCy",
                                    onClick:
                                      this.onRejectBuyCardClick.bind(this),
                                  }),
                                ],
                              }),
                            }),
                          (0, W.tZ)(ae.ZtActivityPop, {
                            show: this.isShowOldCustomerInterceptPoster(),
                            className: "bus-oldCustomerIntercept-poster-modal",
                            isShowClose: !1,
                            onWrapClose: function () {},
                            animation: "comeup",
                            children: (0, W.BX)(w.View, {
                              className: "bus-oldCustomerIntercept-poster-view",
                              children: [
                                (0, W.tZ)(w.Image, {
                                  src: i || t,
                                  mode: "aspectFit",
                                  className: "poster",
                                }),
                                (0, W.BX)(w.View, {
                                  className: "save-btn",
                                  children: [
                                    (0, W.tZ)(w.Image, {
                                      src: "https://images3.c-ctrip.com/train/yzh/bus-mini/yilabao/download.png",
                                      className: "download-icon",
                                      mode: "aspectFit",
                                      id: "AdCz",
                                      onClick: this.onDownLoadImg.bind(this),
                                    }),
                                    (0, W.tZ)(w.Text, {
                                      className: "text",
                                      id: "AdDA",
                                      onClick: this.onDownLoadImg.bind(this),
                                      children: "保存到相册并关闭",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(b.default.PureComponent),
            re = i(1153),
            le = i(65004),
            ue = i(69878),
            de = i(75150),
            he = i(29172),
            me = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, v.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, m.Z)(this, i),
                  (n = t.call(this, e)),
                  (0, k.Z)((0, f.Z)(n), "$winReslove", null),
                  (n.state = { isChecked: !1, isShowWin: !1 }),
                  n
                );
              }
              return (
                (0, p.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.getProduct() &&
                        this.doTrace(
                          "book_activity_benfit_show",
                          "填写页-活动收益项曝光",
                          0
                        );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      this.state.isChecked !== t.isChecked && this.onChange(),
                        this.state.isShowWin !== t.isShowWin &&
                          this.state.isShowWin &&
                          this.doTrace(
                            "book_lottery_guide_show",
                            "填写页-引导弹窗曝光",
                            0
                          );
                    },
                  },
                  {
                    key: "getProduct",
                    value: function () {
                      var e, t;
                      return null === (e = this.props.product) ||
                        void 0 === e ||
                        null === (t = e.attachPackages) ||
                        void 0 === t
                        ? void 0
                        : t[0];
                    },
                  },
                  {
                    key: "getProductChannel",
                    value: function () {
                      return this.props.product;
                    },
                  },
                  {
                    key: "getProductCouponInfo",
                    value: function () {
                      var e, t;
                      return null === (e = this.getProduct()) ||
                        void 0 === e ||
                        null === (t = e.includeProducts) ||
                        void 0 === t
                        ? void 0
                        : t.find(function (e) {
                            return "coupon" === e.productType;
                          });
                    },
                  },
                  {
                    key: "isChecked",
                    value: function () {
                      return this.state.isChecked;
                    },
                  },
                  {
                    key: "onChecked",
                    value: function () {
                      this.doTrace(
                        "book_activity_benfit_click",
                        "填写页-活动收益项勾选按钮点击"
                      ),
                        this.setState({ isChecked: !this.state.isChecked });
                    },
                  },
                  {
                    key: "onConfirmCheck",
                    value: function (e) {
                      var t = this;
                      e
                        ? this.doTrace(
                            "book_lottery_guide_confirm_click",
                            "填写页-引导弹窗确认按钮点击"
                          )
                        : this.doTrace(
                            "book_lottery_guide_refuse_click",
                            "填写页-引导弹窗拒绝按钮点击"
                          ),
                        this.setState(
                          { isChecked: e, isShowWin: !1 },
                          function () {
                            var i;
                            null === (i = t.$winReslove) ||
                              void 0 === i ||
                              i.call(t, e);
                          }
                        );
                    },
                  },
                  {
                    key: "getCheckStatus4Order",
                    value: (function () {
                      var e = (0, d.Z)(
                        (0, u.Z)().mark(function e() {
                          var t,
                            i,
                            n,
                            o,
                            a,
                            s,
                            c = arguments;
                          return (0, u.Z)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((i =
                                        c.length > 0 && void 0 !== c[0]
                                          ? c[0]
                                          : {}),
                                      (n = i.needTip),
                                      (o = void 0 === n || n),
                                      this.getProduct())
                                    ) {
                                      e.next = 3;
                                      break;
                                    }
                                    return e.abrupt("return", null);
                                  case 3:
                                    if (
                                      ((a = {
                                        packageCode:
                                          null === (t = this.getProduct()) ||
                                          void 0 === t
                                            ? void 0
                                            : t.packageCode,
                                        buyNumber: 1,
                                        page: 2,
                                        channelId: this.props.product.channelId,
                                      }),
                                      o && !this.state.isChecked)
                                    ) {
                                      e.next = 6;
                                      break;
                                    }
                                    return e.abrupt(
                                      "return",
                                      this.state.isChecked ? a : null
                                    );
                                  case 6:
                                    return (e.next = 8), this.doWinTip();
                                  case 8:
                                    return (
                                      (s = e.sent),
                                      e.abrupt("return", s ? a : null)
                                    );
                                  case 10:
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
                    key: "doWinTip",
                    value: function () {
                      var e = this;
                      return new Promise(function (t) {
                        (e.$winReslove = t), e.setState({ isShowWin: !0 });
                      });
                    },
                  },
                  {
                    key: "getPriceInfo",
                    value: function () {
                      var e, t;
                      return {
                        name: "".concat(
                          null === (e = this.getProduct()) || void 0 === e
                            ? void 0
                            : e.payShowPrice,
                          "元抽本单免单"
                        ),
                        price:
                          (null === (t = this.getProduct()) || void 0 === t
                            ? void 0
                            : t.payShowPrice) || 0,
                        count: this.isChecked() ? 1 : 0,
                      };
                    },
                  },
                  {
                    key: "onChange",
                    value: function () {
                      var e, t;
                      null === (e = (t = this.props).onChange) ||
                        void 0 === e ||
                        e.call(t);
                    },
                  },
                  {
                    key: "doTrace",
                    value: function () {
                      for (
                        var e, t, i = arguments.length, n = new Array(i), o = 0;
                        o < i;
                        o++
                      )
                        n[o] = arguments[o];
                      null === (e = (t = this.props).doBusTraceInfo) ||
                        void 0 === e ||
                        e.call.apply(e, [t].concat(n));
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.state,
                        i = t.isChecked,
                        n = t.isShowWin,
                        o = this.getProduct(),
                        a = this.getProductChannel(),
                        s = this.getProductCouponInfo();
                      return o
                        ? (0, W.BX)(w.Block, {
                            children: [
                              (0, W.BX)(w.View, {
                                className: "bus-FreeOrderProduct-view",
                                children: [
                                  (0, W.BX)(w.View, {
                                    className: "v-l",
                                    children: [
                                      (0, W.tZ)(w.Image, {
                                        src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_gift@3x.png",
                                        mode: "aspectFit",
                                        className: "icon",
                                      }),
                                      (0, W.BX)(w.View, {
                                        className: "v-content",
                                        children: [
                                          (0, W.BX)(w.View, {
                                            className: "title",
                                            children: [
                                              (0, W.BX)(w.Text, {
                                                className: "title-left",
                                                children: [
                                                  o.payShowPrice,
                                                  "元抽",
                                                ],
                                              }),
                                              (0, W.tZ)(w.Text, {
                                                className: "title-right",
                                                children: "本单免单",
                                              }),
                                              !!o.descUrl &&
                                                (0, W.tZ)(w.Text, {
                                                  className:
                                                    "ifont-detail iconfont",
                                                  stopPropagation: !0,
                                                  id: "AdCl",
                                                  onClick: function () {
                                                    N.Z.twebview({
                                                      data: {
                                                        url: o.descUrl,
                                                        utmSource:
                                                          e.props.utmSource,
                                                      },
                                                    });
                                                  },
                                                }),
                                            ],
                                          }),
                                          (0, W.tZ)(w.View, {
                                            className: "desc",
                                            children: a.channelSubTitle,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, W.BX)(w.View, {
                                    className: "v-r",
                                    children: [
                                      (0, W.tZ)(w.View, {
                                        className: "price",
                                        children: o.payShowPrice,
                                      }),
                                      (0, W.tZ)(he.Z, {
                                        size: 22,
                                        checked: i,
                                        id: "AdCm",
                                        onClick: this.onChecked.bind(this),
                                      }),
                                    ],
                                  }),
                                  !i &&
                                    (0, W.tZ)(w.View, {
                                      className: "tips-icon",
                                      children: "开启幸运",
                                    }),
                                ],
                              }),
                              (0, W.tZ)(ae.ZtActivityPop, {
                                show: n,
                                className: "bus-FreeOrderProduct-pop",
                                isShowClose: !1,
                                animation: "comeup",
                                children: (0, W.BX)(w.View, {
                                  className: "bus-FreeOrderProduct-pop-content",
                                  children: [
                                    (0, W.BX)(w.View, {
                                      className: "content-head",
                                      children: [
                                        (0, W.BX)(w.Text, {
                                          className: "title-left",
                                          children: [o.payShowPrice, "元抽"],
                                        }),
                                        (0, W.tZ)(w.Text, {
                                          className: "title-right",
                                          children: "本单免单!",
                                        }),
                                      ],
                                    }),
                                    (0, W.BX)(w.View, {
                                      className: "title-desc",
                                      children: [
                                        (0, W.BX)(w.View, {
                                          children: [
                                            "抽中",
                                            (0, W.tZ)(w.Text, {
                                              className: "wg-500",
                                              children: "本单全额退",
                                            }),
                                            ", 无任何附加条件",
                                          ],
                                        }),
                                        (0, W.BX)(w.View, {
                                          children: [
                                            "购买立得",
                                            (0, W.BX)(w.Text, {
                                              className: "wg-600",
                                              children: [
                                                s.productCostPrice,
                                                "元",
                                              ],
                                            }),
                                            "无门槛券, 下次购车票抵用",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, W.BX)(w.View, {
                                      className: "coupon-content",
                                      children: [
                                        (0, W.tZ)(w.View, {
                                          className: "coupon-s",
                                          children: (0, W.BX)(w.View, {
                                            className: "coupon-content",
                                            children: [
                                              (0, W.tZ)(w.View, {
                                                className: "price",
                                                children: o.payShowPrice,
                                              }),
                                              (0, W.tZ)(w.View, {
                                                className: "text",
                                                children: "抽",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, W.tZ)(w.Image, {
                                          src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/icon_jtll@3x.png",
                                          mode: "aspectFit",
                                          className: "arr",
                                        }),
                                        (0, W.tZ)(w.View, {
                                          className: "coupon-l",
                                          children: (0, W.BX)(w.View, {
                                            className: "coupon-content",
                                            children: [
                                              (0, W.tZ)(w.View, {
                                                className: "text",
                                                children: "本单",
                                              }),
                                              (0, W.tZ)(w.View, {
                                                className: "text",
                                                children: "全额退",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, W.BX)(w.View, {
                                      className: "btm",
                                      children: [
                                        (0, W.tZ)(w.View, {
                                          className: "btn-check",
                                          id: "AdCn",
                                          onClick: this.onConfirmCheck.bind(
                                            this,
                                            !0
                                          ),
                                          children: "抽免单去支付",
                                        }),
                                        (0, W.tZ)(w.View, {
                                          className: "btn-reject",
                                          id: "AdCo",
                                          onClick: this.onConfirmCheck.bind(
                                            this,
                                            !1
                                          ),
                                          children: "残忍拒绝",
                                        }),
                                      ],
                                    }),
                                    (0, W.tZ)(w.View, {
                                      className: "icon-close",
                                      id: "AdCp",
                                      onClick: this.onConfirmCheck.bind(
                                        this,
                                        !1
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          })
                        : null;
                    },
                  },
                ]),
                i
              );
            })(b.default.PureComponent),
            pe = b.default.memo(function (e) {
              var t,
                i,
                n = e.couponPkgData,
                o = void 0 === n ? {} : n,
                a = e.submitPay,
                s = void 0 === a ? function () {} : a,
                c = e.cancelPay,
                r = void 0 === c ? function () {} : c,
                l = e.closeModal,
                u = void 0 === l ? function () {} : l,
                d =
                  (null == o || null === (t = o.subTitle) || void 0 === t
                    ? void 0
                    : t.split("|")) || [],
                h = {};
              return (
                d &&
                  d.length > 0 &&
                  ((h.firstTxt = d[0]),
                  (h.secondTxt = d[1]),
                  (h.thirdTxt = d[2]),
                  (h.fouthTxt = d[3])),
                (0, W.tZ)(w.View, {
                  className: "bus-book-member-coupon-pkg-modal",
                  children: (0, W.tZ)(ae.ZtActivityPop, {
                    show: "true",
                    isShowClose: !0,
                    onWrapClose: u,
                    onClose: u,
                    children: (0, W.BX)(w.View, {
                      className: "container",
                      children: [
                        (0, W.tZ)(w.Image, {
                          className: "icon",
                          src: "https://pages.c-ctrip.com/bus-images/zhixing/Popup/bjhytb@3x.png",
                        }),
                        (0, W.BX)(w.View, {
                          className: "cont",
                          children: [
                            (0, W.tZ)(w.Image, {
                              className: "tit-img",
                              src: o.title,
                            }),
                            (0, W.tZ)(w.View, {
                              className: "coupon-pkg-desc",
                              children: (0, W.BX)(w.Text, {
                                className: "normal-txt",
                                children: [
                                  "·",
                                  h.firstTxt,
                                  (0, W.tZ)(w.Text, {
                                    className: "blod-txt",
                                    children: h.secondTxt,
                                  }),
                                  h.thirdTxt,
                                  (0, W.tZ)(w.Text, {
                                    className: "blod-txt",
                                    children: h.fouthTxt,
                                  }),
                                  "·",
                                ],
                              }),
                            }),
                            (null === (i = o.couponList) || void 0 === i
                              ? void 0
                              : i.length) > 0 &&
                              (0, W.tZ)(w.View, {
                                className: "coupon-list",
                                children: o.couponList.map(function (e, t) {
                                  return (0,
                                  W.BX)(w.View, { className: "coupon-item ".concat("busCoupon" == e.type ? "bus-bg-img" : "hotelCoupon" == e.type ? "hotel-bg-img" : ""), children: [e.tag && (0, W.tZ)(w.View, { className: "tag", children: e.tag }), (0, W.BX)(w.View, { className: "price", children: [(0, W.tZ)(w.Text, { className: "unit", children: "￥" }), (0, W.tZ)(w.Text, { className: "num", children: e.price })] }), (0, W.tZ)(w.View, { className: "desc", children: e.desc }), (0, W.tZ)(w.View, { className: "name", children: e.name })] }, t);
                                }),
                              }),
                            (0, W.BX)(w.View, {
                              className: "pay-btn",
                              id: "AdDk",
                              onClick: s,
                              children: ["¥", o.payPrice, "立即支付"],
                            }),
                            (0, W.tZ)(w.View, {
                              className: "cancel-btn",
                              id: "AdDl",
                              onClick: r,
                              children: "放弃体验",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                })
              );
            }),
            fe = i(72674),
            ge = i(13622),
            ve = i(85029),
            ke = b.default.memo(function (e) {
              var t = e.xCouponList,
                i = void 0 === t ? [] : t,
                n = e.selectedCoupons,
                o = void 0 === n ? [] : n,
                a = e.onXCouponChecked,
                s = void 0 === a ? function () {} : a;
              return (0, W.BX)(w.View, {
                className: "bus-book-xcoupon",
                children: [
                  (0, W.BX)(w.View, {
                    className: "title",
                    children: [
                      (0, W.tZ)(w.Image, {
                        src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/bthb@3x.png",
                        className: "icon",
                        mode: "aspectFit",
                      }),
                      (0, W.BX)(w.Block, {
                        children: [
                          (0, W.tZ)(w.Text, {
                            className: "title-before",
                            children: "出行特惠包·",
                          }),
                          (0, W.tZ)(w.Text, {
                            className: "title-after",
                            children: "汽车本单可用",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, W.tZ)(w.ScrollView, {
                    className: "scroll-content",
                    scrollX: !0,
                    scrollY: !1,
                    scrollWithAnimation: !0,
                    enableFlex: !0,
                    scrollWidth: 0,
                    scrollHeight: 0,
                    children: i.map(function (e, t) {
                      var i = o.some(function (t) {
                        return t === e.packageCode;
                      });
                      return (0, W.BX)(
                        w.View,
                        {
                          className: "item ".concat(i ? "checked" : ""),
                          id: "AdDj",
                          onClick: function () {
                            return s(e);
                          },
                          children: [
                            (0, W.BX)(w.View, {
                              className: "c-l",
                              children: [
                                (0, W.tZ)(w.View, {
                                  className: "c-l-t",
                                  children: e.showPrice,
                                }),
                                (0, W.tZ)(w.View, {
                                  className: "c-l-b",
                                  children: e.title,
                                }),
                              ],
                            }),
                            (0, W.BX)(w.View, {
                              className: "c-r",
                              children: [
                                (0, W.tZ)(w.View, {
                                  className: "c-r-t",
                                  children: e.subTitle,
                                }),
                                (0, W.BX)(w.View, {
                                  className: "c-r-b",
                                  children: [
                                    (0, W.tZ)(w.View, {
                                      className: "check-l",
                                      children: e.payShowPrice,
                                    }),
                                    (0, W.tZ)(w.View, {
                                      className: "check-r",
                                      children: i ? "已选" : "选择",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                ],
              });
            }),
            be = i(27570),
            Ce = b.default.memo(function (e) {
              var t = e.canUseCustomNav,
                i = void 0 !== t && t,
                n = e.statusBarHeight,
                o = void 0 === n ? 0 : n,
                a = e.officialInfo,
                s = void 0 === a ? {} : a,
                c = e.title,
                r = void 0 === c ? "" : c,
                l = e.bgTop,
                u = void 0 === l ? 0 : l,
                d = e.onBack,
                h = void 0 === d ? function () {} : d;
              return (0,
              W.BX)(w.View, { className: "bus-book-headbox", children: [(0, W.tZ)(w.View, { className: "headbar", style: "padding-top: ".concat(i ? o : 0, "px;"), children: i && (0, W.BX)(w.View, { className: "box", children: [(0, W.tZ)(w.Text, { className: "ifont-arr iconfont back", id: "AdCs", onClick: h }), (0, W.tZ)(w.View, { className: "title-con title", children: s ? (0, W.BX)(w.View, { className: "brand-con", children: [s.partyAaLogo && (0, W.tZ)(w.View, { className: "brand-icon", children: (0, W.tZ)(w.Image, { className: "logo", src: s.partyAaLogo, mode: "aspectFit" }) }), (0, W.BX)(w.View, { className: "brand-info", children: [(0, W.tZ)(be.Z, { className: "tit", useAnimation: !0, useEllipsisX: !0, ellipsisBeyondWidth: 130, children: r }), s.note && (0, W.tZ)(w.View, { className: "note", children: s.note })] })] }) : (0, W.tZ)(be.Z, { className: "tit", useAnimation: !0, useEllipsisX: !0, transformOrigin: { x: "center", y: "center" }, ellipsisBeyondWidth: 165, children: r }) })] }) }), (0, W.tZ)(w.View, { className: "book-bg", style: "height: 124px;margin-top:".concat(i ? u - 2 : 0, "px") })] });
            }),
            Se = b.default.memo(function (e) {
              var t,
                i,
                n = e.couponLen,
                o = void 0 === n ? 0 : n,
                a = e.availCouponLen,
                s = void 0 === a ? 0 : a,
                c = e.hasPassenger,
                r = void 0 !== c && c,
                l = e.isRedPackageChecked,
                u = void 0 !== l && l,
                d = e.isNotUseCoupon,
                h = void 0 !== d && d,
                m = e.isOpenXcxRedPacket,
                p = void 0 !== m && m,
                f = e.priceDetailInfo,
                g = void 0 === f ? {} : f,
                v = e.couponSelectedInfo,
                k = void 0 === v ? {} : v,
                C = e.redPacketBriefInfo,
                S = void 0 === C ? {} : C,
                y = e.onClickCoupon,
                T = void 0 === y ? function () {} : y,
                P = e.onRedPackageCheck,
                N = void 0 === P ? function () {} : P;
              return (0, W.BX)(w.View, {
                className: "bus-book-coupon",
                children: [
                  !!o &&
                    (0, W.BX)(w.View, {
                      className: "coupon flex-align-items-center",
                      id: "AdCV",
                      onClick: T,
                      children: [
                        (0, W.tZ)(w.Image, {
                          className: "img",
                          src: "https://images3.c-ctrip.com/train/wechat/bus/couponlogo.png",
                        }),
                        (0, W.tZ)(w.Text, {
                          className: "tit",
                          children: "优惠券",
                        }),
                        (0, W.tZ)(w.View, {
                          className: "desc",
                          children: (0, W.tZ)(b.default.Fragment, {
                            children:
                              null != g && g.xCouponDiscount
                                ? "无优惠券可用"
                                : r && !h
                                ? k && Object.keys(k).length > 0
                                  ? (0, W.tZ)(w.Text, {
                                      children: k.couponName,
                                    })
                                  : s <= 0
                                  ? (0, W.tZ)(w.Text, {
                                      children: "暂无可用优惠券",
                                    })
                                  : (0, W.tZ)(w.Text, {})
                                : (0, W.tZ)(w.Text, {
                                    children: "不使用优惠券",
                                  }),
                          }),
                        }),
                        (0, W.tZ)(w.Text, { className: "ifont-arr iconfont" }),
                      ],
                    }),
                  S &&
                    p &&
                    (null == g ||
                    null === (t = g.redPackageDiscount) ||
                    void 0 === t
                      ? void 0
                      : t.price) > 0 &&
                    (0, W.BX)(w.View, {
                      className: "red-packet flex-align-items-center",
                      id: "AdCW",
                      onClick: N,
                      children: [
                        (0, W.BX)(w.View, {
                          className: "d-l flex-align-items-center",
                          children: [
                            (0, W.tZ)(w.Image, {
                              className: "img",
                              src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/jicon@3x.png",
                            }),
                            (0, W.tZ)(w.Text, {
                              className: "tit",
                              children: "汽车票红包",
                            }),
                          ],
                        }),
                        (0, W.BX)(w.View, {
                          className: "d-r flex-center",
                          children: [
                            (0, W.BX)(w.Text, {
                              className: "desc",
                              children: [
                                "-￥",
                                null == g ||
                                null === (i = g.redPackageDiscount) ||
                                void 0 === i
                                  ? void 0
                                  : i.price,
                              ],
                            }),
                            (0, W.tZ)(he.Z, {
                              className: "redpack-radio",
                              id: "AdCX",
                              onClick: function (e) {
                                e.stopPropagation(), N();
                              },
                              checked: u,
                              size: 12,
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
            }),
            we = b.default.memo(function (e) {
              var t = e.isTieyou,
                i = void 0 !== t && t;
              return (0,
              W.BX)(w.View, { className: "bb-introduction", children: [(0, W.tZ)(w.View, { className: "tit", children: "- 金牌服务·轻松出行 -" }), (0, W.BX)(w.View, { className: "desc flex", children: [(0, W.BX)(w.View, { className: "item flex-align-items-center flex-column flex-1", children: [(0, W.BX)(w.View, { className: "fir flex-align-items-center", children: [(0, W.tZ)(w.Image, { className: "img", src: "".concat(i ? "https://images3.c-ctrip.com/train/wechat/bus/arrowbot-ty.png" : "https://images3.c-ctrip.com/train/wechat/bus/arrowbot.png") }), "低价保障"] }), (0, W.tZ)(w.View, { className: "sec", children: "网罗全网低价" })] }), (0, W.BX)(w.View, { className: "item flex-align-items-center flex-column flex-1", children: [(0, W.BX)(w.View, { className: "fir flex-align-items-center", children: [(0, W.tZ)(w.Image, { className: "img", src: "".concat(i ? "https://images3.c-ctrip.com/train/wechat/bus/lack-ty.png" : "https://images3.c-ctrip.com/train/wechat/bus/lack.png") }), "出行保障"] }), (0, W.tZ)(w.View, { className: "sec", children: "官方合作极速出票" })] }), (0, W.BX)(w.View, { className: "item flex-align-items-center flex-column flex-1", children: [(0, W.BX)(w.View, { className: "fir flex-align-items-center", children: [(0, W.tZ)(w.Image, { className: "img", src: "".concat(i ? "https://images3.c-ctrip.com/train/wechat/bus/service-ty.png" : "https://images3.c-ctrip.com/train/wechat/bus/service.png") }), "优质服务"] }), (0, W.tZ)(w.View, { className: "sec", children: "出现问题及时解决" })] })] })] });
            }),
            ye = i(74921),
            Te = ["numClassName", "className", "prefix"],
            Pe = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            Ne = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return Object.keys(e)
                .filter(function (t) {
                  return e[t];
                })
                .join(" ");
            },
            Ie = function (e, t) {
              var i = e.indexOf(".");
              return "int_".concat(i < 0 ? e.length - t : i - t);
            },
            Ze = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return String(1 * e).split("");
            },
            xe = (function (e) {
              (0, g.Z)(i, e);
              var t = (0, v.Z)(i);
              function i(e) {
                var n;
                return (
                  (0, m.Z)(this, i),
                  ((n = t.call(this, e)).state = {
                    isTransitionEnd: !0,
                    isTransitionByIncrease: !0,
                    oldVal: 0,
                    displayVals: n.getMidVals(0, e.value),
                  }),
                  n
                );
              }
              return (
                (0, p.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.setState({
                        isTransitionEnd: !1,
                        displayVals: Ze(this.props.value),
                      });
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      var t = this;
                      e.value !== this.props.value &&
                        this.setState(
                          {
                            isTransitionByIncrease: e.value > this.props.value,
                            oldVal: this.props.value,
                            displayVals: this.getMidVals(
                              this.props.value,
                              e.value
                            ),
                            isTransitionEnd: !0,
                          },
                          function () {
                            setTimeout(function () {
                              t.setState({
                                isTransitionEnd: !1,
                                displayVals: Ze(e.value),
                              });
                            });
                          }
                        );
                    },
                  },
                  {
                    key: "getMidVals",
                    value: function (e, t) {
                      var i = Ze(e),
                        n = Ze(t),
                        o = i.indexOf("."),
                        a = n.indexOf("."),
                        s = o > -1 || a > -1,
                        c = -1 === o ? i : i.slice(0, o),
                        r = -1 === o ? [] : i.slice(o + 1),
                        l = Math.max(
                          -1 === o ? i.length : o,
                          -1 === a ? n.length : a
                        ),
                        u = Math.max(
                          -1 === o ? 0 : i.length - o - 1,
                          -1 === a ? 0 : n.length - a - 1
                        ),
                        d =
                          c.length < l
                            ? new Array(l - c.length).fill("0").join("")
                            : "",
                        h =
                          r.length < u
                            ? new Array(u - r.length).fill("0").join("")
                            : "";
                      return ""
                        .concat(d)
                        .concat(c.join(""))
                        .concat(s ? "." : "")
                        .concat(r.join(""))
                        .concat(h)
                        .split("");
                    },
                  },
                  {
                    key: "onTransitionEnd",
                    value: function () {
                      this.setState({ isTransitionEnd: !0 });
                    },
                  },
                  {
                    key: "sortScrollNums",
                    value: function (e) {
                      var t = this.state.oldVal[e] || Pe[0],
                        i = this.state.displayVals[e] || Pe[0],
                        n = Pe.indexOf(t),
                        o = Pe.indexOf(i);
                      return t < i
                        ? [].concat((0, l.Z)(Pe.slice(n, o)), [i])
                        : t == i
                        ? []
                        : [t].concat(
                            (0, l.Z)(Pe.slice(n + 1)),
                            (0, l.Z)(Pe.slice(0, i)),
                            [i]
                          );
                    },
                  },
                  {
                    key: "getScrollNums",
                    value: function (e) {
                      return this.sortScrollNums(e);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.numClassName,
                        n = t.className,
                        o = t.prefix,
                        a = (0, ye.Z)(t, Te),
                        s = this.state,
                        c = s.isTransitionEnd,
                        r = s.isTransitionByIncrease,
                        l = s.displayVals;
                      return (0, W.BX)(
                        w.View,
                        (0, h.Z)(
                          (0, h.Z)(
                            { className: "bus-count-to-component ".concat(n) },
                            a
                          ),
                          {},
                          {
                            children: [
                              o,
                              l.map(function (t, n) {
                                return (function () {
                                  var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : "";
                                  return "." === String(e);
                                })(t)
                                  ? (0, W.tZ)(
                                      w.View,
                                      {
                                        className: "num_item",
                                        children: (0, W.tZ)(w.View, {
                                          children: t,
                                        }),
                                      },
                                      "point"
                                    )
                                  : (0, W.BX)(
                                      w.View,
                                      {
                                        className: "scroll_item",
                                        id: Ie(l, n),
                                        children: [
                                          (0, W.tZ)(w.View, {
                                            style: {
                                              visibility:
                                                c || !e.getScrollNums(n).length
                                                  ? "visible"
                                                  : "hidden",
                                            },
                                            children: t,
                                          }),
                                          (0, W.tZ)(w.View, {
                                            style: (0, h.Z)(
                                              {},
                                              c
                                                ? {}
                                                : {
                                                    transform: "translateY("
                                                      .concat(r ? "-" : "")
                                                      .concat(
                                                        100 *
                                                          (e
                                                            .getScrollNums(n)
                                                            .indexOf(t) +
                                                            1 * (r ? 1 : -1)),
                                                        "%)"
                                                      ),
                                                    transition:
                                                      "transform 1s ease",
                                                    position: "absolute",
                                                    width: "100%",
                                                    height: "100%",
                                                  }
                                            ),
                                            onTransitionEnd:
                                              e.onTransitionEnd.bind(e),
                                            children:
                                              !c &&
                                              e
                                                .getScrollNums(n)
                                                .map(function (e, t) {
                                                  var n;
                                                  return (0,
                                                  W.tZ)(w.Text, { className: Ne(((n = {}), (0, k.Z)(n, i, !0), (0, k.Z)(n, "".concat(e, "_").concat(t), !0), (0, k.Z)(n, "num_item", !0), n)), style: { position: "absolute", transform: "translateY(".concat(r ? "" : "-").concat(100 * t, "%)") }, children: e }, t);
                                                }),
                                          }),
                                        ],
                                      },
                                      "".concat(Ie(l, n))
                                    );
                              }),
                            ],
                          }
                        )
                      );
                    },
                  },
                ]),
                i
              );
            })(b.default.PureComponent),
            Be = i(32180).window,
            Ve = 0,
            De = "webkit moz ms o".split(" ");
          if (void 0 === Be) (a = function () {}), (s = function () {});
          else {
            var Ae;
            (a = Be.requestAnimationFrame), (s = Be.cancelAnimationFrame);
            for (var _e = 0; _e < De.length && (!a || !s); _e++)
              (Ae = De[_e]),
                (a = a || Be[Ae + "RequestAnimationFrame"]),
                (s =
                  s ||
                  Be[Ae + "CancelAnimationFrame"] ||
                  Be[Ae + "CancelRequestAnimationFrame"]);
            (a && s) ||
              ((a = function (e) {
                var t = new Date().getTime(),
                  i = Math.max(0, 16 - (t - Ve)),
                  n = Be.setTimeout(function () {
                    e(t + i);
                  }, i);
                return (Ve = t + i), n;
              }),
              (s = function (e) {
                Be.clearTimeout(e);
              }));
          }
          i(32180).window;
          var Me,
            Xe =
              (b.default.PureComponent,
              function (e) {
                var t = e.insuranceChannel,
                  i = void 0 === t ? "" : t,
                  n = e.hasPassenger,
                  o = void 0 !== n && n,
                  a = e.showPaymentGuide,
                  s = void 0 !== a && a,
                  c = e.feeTotal,
                  r = void 0 === c ? 0 : c,
                  l = e.savedPrice,
                  u = void 0 === l ? 0 : l,
                  d = e.isPriceDetailModalShow,
                  h = void 0 !== d && d,
                  m = e.btnInsurePackageInfo,
                  p = void 0 === m ? {} : m,
                  f = e.guideStepType,
                  g = void 0 === f ? "" : f,
                  v = e.handleCloseGuide,
                  k = void 0 === v ? function () {} : v,
                  b = e.onTogglePriceDetailModal,
                  C = void 0 === b ? function () {} : b,
                  S = e.onOrderNormalSubmit,
                  y = void 0 === S ? function () {} : S,
                  T = e.onOrderSubmit,
                  P = void 0 === T ? function () {} : T,
                  N = e.onReadPaymentGuide,
                  I = void 0 === N ? function () {} : N,
                  Z = (0, W.BX)(w.View, {
                    className: "guide-bus-book-pay",
                    children: [
                      (0, W.tZ)(w.View, {
                        className: "guide-jump-btn",
                        "data-guideType": g,
                        id: "AdDI",
                        onClick: k,
                        children: "跳过",
                      }),
                      (0, W.tZ)(w.Image, {
                        src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/hands@3x.png",
                        mode: "aspectFit",
                        className: "guide-point",
                      }),
                      (0, W.tZ)(w.Image, {
                        src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/yd@3x.png",
                        mode: "heightFix",
                        className: "guide-line",
                      }),
                      (0, W.BX)(w.View, {
                        className: "guide-text",
                        children: [
                          "点击",
                          "fill_recommend_insurance" !== i
                            ? (0, W.tZ)(w.Text, {
                                className: "hl",
                                children: "去支付",
                              })
                            : (0, W.BX)(w.Block, {
                                children: [
                                  (0, W.tZ)(w.Text, {
                                    className: "hl",
                                    children: "立即支付",
                                  }),
                                  "/",
                                  (0, W.tZ)(w.Text, {
                                    className: "hl",
                                    children: "普通预定",
                                  }),
                                ],
                              }),
                          "完成车票购票",
                        ],
                      }),
                    ],
                  });
                return (0, W.BX)(w.View, {
                  className: "bb-payment",
                  children: [
                    "fill_recommend_insurance" !== i &&
                      (0, W.BX)(w.View, {
                        className: "normal-pay flex-center",
                        children: [
                          (0, W.tZ)(w.View, {
                            className: "price",
                            children: o
                              ? (0, W.BX)(w.Block, {
                                  children: [
                                    (0, W.BX)(w.View, {
                                      className: "total",
                                      children: [
                                        "¥",
                                        r <= 0
                                          ? "--"
                                          : (0, W.tZ)(xe, { value: r }),
                                      ],
                                    }),
                                    !!u &&
                                      (0, W.BX)(w.View, {
                                        className: "save",
                                        children: ["已为您节省", u, "元"],
                                      }),
                                  ],
                                })
                              : (0, W.tZ)(w.Block, {
                                  children: (0, W.tZ)(w.Text, {
                                    className: "no-passenger-tips",
                                    children: "请先添加乘车人",
                                  }),
                                }),
                          }),
                          o &&
                            (0, W.BX)(w.Text, {
                              className: "specific",
                              id: "AdDJ",
                              onClick: C,
                              children: [
                                (0, W.tZ)(w.Text, { children: "明细" }),
                                (0, W.tZ)(w.Text, {
                                  className: "ifont-arr iconfont ".concat(
                                    h ? "active" : ""
                                  ),
                                }),
                              ],
                            }),
                          (0, W.tZ)(L.Z, {
                            showGuide: s,
                            TipComp: Z,
                            rootContentClassName:
                              "bus-book-paybutton-guide-display-conent",
                            rootClassName: "bus-book-payBtn-guide",
                            onRead: I,
                            children: (0, W.tZ)(w.View, {
                              className: "btn ".concat(o ? "" : "no-pay-btn"),
                              id: "AdDK",
                              onClick: y,
                              children: "去支付",
                            }),
                          }),
                        ],
                      }),
                    "fill_recommend_insurance" === i &&
                      (0, W.tZ)(L.Z, {
                        showGuide: s,
                        TipComp: Z,
                        rootContentClassName:
                          "bus-book-paybutton2-guide-display-conent",
                        rootClassName: "bus-book-payBtn2-guide",
                        onRead: I,
                        children: (0, W.BX)(w.View, {
                          className: "dt-pay",
                          children: [
                            (0, W.BX)(w.View, {
                              className: "tbox",
                              id: "AdDL",
                              onClick: function () {
                                return P("modeB");
                              },
                              children: [
                                (0, W.tZ)(w.View, {
                                  className: "ttip",
                                  children: "立即支付",
                                }),
                                (0, W.tZ)(w.View, {
                                  className: "btip",
                                  children: "¥"
                                    .concat(p.insurePackagePrice, " ")
                                    .concat(p.tag),
                                }),
                              ],
                            }),
                            (0, W.BX)(w.View, {
                              className: "bbox",
                              id: "AdDM",
                              onClick: function () {
                                return P("modeC");
                              },
                              children: [
                                "普通预订",
                                (0, W.tZ)(w.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                  ],
                });
              }),
            Le = b.default.memo(Xe),
            Oe = i(86467),
            Re = b.default.memo(function (e) {
              var t = e.isTieyou,
                i = void 0 !== t && t,
                n = e.isShow,
                o = void 0 !== n && n,
                a = e.currentBrowsers,
                s = void 0 === a ? 0 : a,
                c = e.onBack,
                r = void 0 === c ? function () {} : c,
                l = e.onKeepBrowse,
                u = void 0 === l ? function () {} : l;
              return (0,
              W.tZ)(re.Z, { visible: o, option: { wrapperOption: { boxSizing: "border-box", padding: "50px 20px 20px 20px", borderRadius: "16px" }, funcOption: { isCloseByMask: !1 } }, children: (0, W.BX)(w.View, { className: "bb-retention-modal", children: [(0, W.BX)(w.View, { className: "rm-header flex-align-items-center flex-column", children: [(0, W.tZ)(w.Image, { className: "img", src: i ? "https://images3.c-ctrip.com/train/wechat/bus/bellty.png" : "https://images3.c-ctrip.com/train/wechat/bus/bellzx.png" }), (0, W.BX)(w.View, { className: "title", children: [(0, W.BX)(w.Text, { className: "num", children: [s, "人"] }), (0, W.tZ)(w.Text, { className: "mark", children: "正在浏览该班次" })] }), (0, W.tZ)(w.View, { className: "sub-title", children: "您确定要离开吗？" })] }), (0, W.BX)(w.View, { className: "rm-footer flex-align-items-center", children: [(0, W.tZ)(w.View, { className: "cancel rm-btn", id: "AdDQ", onClick: r, children: "离开" }), (0, W.tZ)(w.View, { className: "confirm rm-btn", id: "AdDR", onClick: u, children: "继续预订" })] })] }) });
            }),
            ze = b.default.memo(function (e) {
              var t = e.isShow,
                i = void 0 !== t && t,
                n = e.discountModalInfo,
                o = void 0 === n ? "" : n,
                a = e.onCancel,
                s = void 0 === a ? function () {} : a,
                c = e.onConfirm,
                r = void 0 === c ? function () {} : c;
              return (0,
              W.tZ)(ae.ZtActivityPop, { show: i, onClose: s, onWrapClose: s, option: { wrapperOption: { width: "82%", boxSizing: "border-box", borderRadius: "16px" }, funcOption: { isCloseByMask: !1 } }, children: (0, W.BX)(w.View, { className: "bb-discount-modal", children: [(0, W.tZ)(w.Image, { className: "discount-tbox", src: "https://images3.c-ctrip.com/train/wechat/bus/discount.png" }), (0, W.tZ)(w.View, { className: "discount-mbox", children: (0, W.tZ)(ae.ZtRichText, { nodes: o }) }), (0, W.BX)(w.View, { className: "discount-bbox flex-align-items-center", children: [(0, W.tZ)(w.View, { className: "cancel discount-btn", id: "AdCg", onClick: s, children: "放弃低价" }), (0, W.tZ)(w.View, { className: "confirm discount-btn", id: "AdCh", onClick: r, children: "领取机会" })] })] }) });
            }),
            Ee = b.default.memo(function (e) {
              var t = e.isShow,
                i = void 0 !== t && t,
                n = e.description,
                o = void 0 === n ? "" : n,
                a = e.onClose,
                s = void 0 === a ? function () {} : a,
                c = e.handleTransferNoteVisibleCtrl,
                r = void 0 === c ? function () {} : c;
              return (0, W.tZ)(re.Z, {
                visible: i,
                onClose: function () {
                  return s(!1);
                },
                option: {
                  wrapperOption: {
                    borderRadius: "16px",
                    width: "70%",
                    padding: "20px",
                  },
                  funcOption: { isCloseByMask: !0 },
                },
                children: (0, W.BX)(w.View, {
                  className: "bb-transfer-modal",
                  children: [
                    (0, W.tZ)(w.View, {
                      className: "transfer-title",
                      children: "班次说明",
                    }),
                    (0, W.tZ)(w.View, {
                      className: "transfer-con",
                      children: o,
                    }),
                    (0, W.tZ)(le.Z, {
                      btnText: "知道了",
                      type: "fill",
                      style: {
                        height: "44px",
                        fontSize: "16px",
                        lineHeight: "44px",
                      },
                      id: "AdDi",
                      onClick: function () {
                        return r(!1);
                      },
                    }),
                  ],
                }),
              });
            }),
            Fe = b.default.memo(function (e) {
              var t,
                i,
                n,
                o,
                a,
                s,
                c,
                r,
                l,
                u = e.isShow,
                d = void 0 !== u && u,
                h = e.saledCouponPackageInfo,
                m = void 0 === h ? {} : h,
                p = e.handleModal,
                f = void 0 === p ? function () {} : p,
                g = e.gotoDescPage,
                v = void 0 === g ? function () {} : g;
              return (0, W.tZ)(re.Z, {
                visible: d,
                children: (0, W.BX)(w.View, {
                  className: "bb-coupon-pkg-modal",
                  children: [
                    (0, W.BX)(w.View, {
                      className: "modal-title",
                      children: [
                        (
                          (null == m || null === (t = m.detail) || void 0 === t
                            ? void 0
                            : t.title) || ""
                        ).split("|")[0],
                        (0, W.tZ)(w.Text, {
                          className: "discount-text",
                          children: (
                            (null == m ||
                            null === (i = m.detail) ||
                            void 0 === i
                              ? void 0
                              : i.title) || ""
                          ).split("|")[1],
                        }),
                      ],
                    }),
                    (0, W.BX)(w.View, {
                      className: "hongbao",
                      children: [
                        (0, W.tZ)(w.Text, {
                          className: "price",
                          children:
                            null == m || null === (n = m.detail) || void 0 === n
                              ? void 0
                              : n.originPrice,
                        }),
                        (0, W.tZ)(w.View, {
                          className: "title",
                          children: "无门槛券",
                        }),
                        (0, W.BX)(w.View, {
                          className: "desc",
                          children: [
                            "（"
                              .concat(
                                null == m ||
                                  null === (o = m.detail) ||
                                  void 0 === o
                                  ? void 0
                                  : o.unitPirce,
                                "元券x"
                              )
                              .concat(
                                null == m ||
                                  null === (a = m.detail) ||
                                  void 0 === a
                                  ? void 0
                                  : a.count,
                                "张）"
                              ),
                            (null == m ||
                            null === (s = m.detail) ||
                            void 0 === s
                              ? void 0
                              : s.descUrl) &&
                              (0, W.tZ)(w.Text, {
                                className: "ifont-line-tips iconfont tip-icon",
                                id: "AdCd",
                                onClick: function () {
                                  var e;
                                  return v(
                                    null == m ||
                                      null === (e = m.detail) ||
                                      void 0 === e
                                      ? void 0
                                      : e.descUrl
                                  );
                                },
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, W.BX)(w.View, {
                      className: "btom",
                      children: [
                        (0, W.BX)(w.Text, {
                          className: "origin-price",
                          children: [
                            "原价￥",
                            null == m || null === (c = m.detail) || void 0 === c
                              ? void 0
                              : c.originPrice,
                          ],
                        }),
                        (0, W.BX)(w.Text, {
                          className: "sale-price",
                          children: [
                            "仅售¥",
                            null == m || null === (r = m.detail) || void 0 === r
                              ? void 0
                              : r.sellPrice,
                          ],
                        }),
                        (0, W.tZ)(w.Text, {
                          className: "tag",
                          children:
                            null == m || null === (l = m.detail) || void 0 === l
                              ? void 0
                              : l.tag,
                        }),
                      ],
                    }),
                    (0, W.BX)(w.View, {
                      className: "btn-group",
                      children: [
                        (0, W.tZ)(w.View, {
                          className: "btn-item cancel",
                          id: "AdCe",
                          onClick: function () {
                            return f(!1);
                          },
                          children: "任性拒绝",
                        }),
                        (0, W.tZ)(w.View, {
                          className: "btn-item submit",
                          id: "AdCf",
                          onClick: function () {
                            return f(!0);
                          },
                          children: "确认购买",
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            Ue = b.default.memo(function (e) {
              var t = e.productLine,
                i = void 0 === t ? 1 : t,
                n = e.shiftInfo,
                o = void 0 === n ? {} : n,
                a = e.insuranceChannel,
                s = void 0 === a ? "" : a,
                c = e.hasPassenger,
                r = void 0 !== c && c,
                l = e.feeTotal,
                u = void 0 === l ? 0 : l,
                d = e.isSelectedInsurance,
                h = void 0 !== d && d,
                m = e.gotoInsuranceDescPage,
                p = void 0 === m ? function () {} : m,
                f = e.onTogglePriceDetailModal,
                g = void 0 === f ? function () {} : f;
              return (0,
              W.BX)(w.View, { className: "bb-coupon-tips", children: [3 == i && o && o.deductionAmount && o.memberGrade ? (0, W.BX)(w.View, { className: "member-reduction comm-sty flex-align-items-center", children: [(0, W.tZ)(w.Image, { className: "img", src: "https://images3.c-ctrip.com/train/wechat/bus/crown.png" }), (0, W.BX)(w.View, { className: "tit", children: ["本单可享会员", (0, W.BX)(w.Text, { className: "detail", children: ["立减¥", o.deductionAmount, "/张"] })] }), (0, W.BX)(w.View, { className: "rbox flex-align-items-center", children: [(0, W.tZ)(w.Text, { className: "ifont-radioed iconfont" }), o.memberGrade, "专享"] })] }) : "fill_recommend_insurance" === s && (0, W.BX)(w.View, { className: "book-price comm-sty", id: "AdCY", onClick: g, children: [(0, W.tZ)(w.Text, { className: "title", children: "票价明细" }), (0, W.tZ)(xe, { className: "price", value: r && u >= 0 ? u : "0", prefix: "¥" }), (0, W.tZ)(w.Text, { className: "ifont-arr iconfont" })] }), 3 !== i && (0, W.BX)(w.View, { className: "tip-txt", children: [(0, W.tZ)(w.View, { children: "订单包含汽车票、附加选购产品、部分车站含服务费" }), (0, W.BX)(w.View, { children: ["请您在提交订单前仔细阅读", (0, W.tZ)(w.Text, { className: "underline", "data-type": "noAffix", id: "AdCZ", onClick: p, children: "汽车票预订协议" }), h && (0, W.BX)(w.View, { className: "dt-txt", children: ["以及其他", (0, W.tZ)(w.Text, { className: "underline", "data-type": "affix", id: "AdCa", onClick: p, children: "保险投保须知及免责条款" })] })] })] })] });
            }),
            je = b.default.memo(function (e) {
              var t,
                i = e.fromTime,
                n = void 0 === i ? "" : i,
                o = e.bookLineTop,
                a = void 0 === o ? 0 : o,
                s = e.productLine,
                c = void 0 === s ? 1 : s,
                r = e.vehicleMode,
                l = void 0 === r ? "" : r,
                u = e.shiftInfo,
                d = void 0 === u ? {} : u,
                h = e.isHaveBackLine,
                m = void 0 !== h && h,
                p = e.backLine,
                f = void 0 === p ? null : p,
                g = e.fromStationInfoList,
                v = void 0 === g ? [] : g,
                k = e.toStationInfoList,
                b = void 0 === k ? [] : k,
                C = e.fromStationInfo,
                S = void 0 === C ? {} : C,
                T = e.toStationInfo,
                P = void 0 === T ? {} : T,
                N = e.customStationInfo,
                I = void 0 === N ? {} : N,
                Z = e.custormFromTime,
                x = void 0 === Z ? null : Z,
                B = e.isBookTagShow,
                V = void 0 === B || B,
                D = e.busConfig,
                A = void 0 === D ? {} : D,
                _ = e.isDiTuiSource,
                M = void 0 !== _ && _,
                X = e.isSupprtQuickPay,
                L = void 0 !== X && X,
                R = e.fromDay,
                z = void 0 === R ? "" : R,
                E = e.gotoMapPage,
                U = void 0 === E ? function () {} : E,
                j = e.handleFixPlace,
                G = void 0 === j ? function () {} : j,
                H = e.handleTransferNoteVisibleCtrl,
                K = void 0 === H ? function () {} : H,
                J = e.onFixFromTimeClick,
                Y = void 0 === J ? function () {} : J,
                q = e.onClickTicketDetail,
                $ = void 0 === q ? function () {} : q,
                Q = e.onNoticeModalVisibleChange,
                ee = void 0 === Q ? function () {} : Q,
                te = e.onShareLineClick,
                ie = void 0 === te ? function () {} : te,
                ne = e.onOrderSubmit,
                oe = void 0 === ne ? function () {} : ne,
                ae = !(!v || !v.length),
                se = !(!b || !b.length),
                ce = S.shuttleService,
                re = P.shuttleService,
                ue = 3 === d.fromTimeType,
                de = 2 === d.fromTimeType,
                he = de
                  ? "流水班"
                  : m
                  ? "去程"
                  : "charter" === l
                  ? "包车"
                  : "出发",
                me =
                  "charter" === l ? "包车价" : m && f ? "往返优惠价" : "票价",
                pe = (d.tagDescList || []).concat([{ isCommonNoticeComp: !0 }]),
                fe =
                  d.startTime && d.endTime
                    ? "".concat(d.startTime, "-").concat(d.endTime, "发车")
                    : "".concat(d.dayStr, " ").concat(d.fromTime, "前发车");
              return (0, W.BX)(w.View, {
                className: "bb-shift-detail",
                style: "margin-top:".concat(a, "px;"),
                children: [
                  (0, W.BX)(w.View, {
                    className: "time-box",
                    children: [
                      l && "carpool" == l
                        ? d.tags &&
                          d.tags[0] &&
                          d.tags.map(function (e, t) {
                            return (0,
                            W.tZ)(w.Text, { className: "depa", children: e.desc }, t);
                          })
                        : (0, W.tZ)(w.Text, {
                            className: "depa",
                            children: he,
                          }),
                      (0, W.BX)(w.Text, {
                        className: "date",
                        children: [" ", d.dateStr],
                      }),
                      (0, W.tZ)(w.Text, {
                        className: "time",
                        style: { marginLeft: "6px" },
                        children: de
                          ? fe
                          : ""
                              .concat(d.dayStr, " ")
                              .concat(ue ? "发车" : d.fromTime),
                      }),
                      d.costTime &&
                        (0, W.tZ)(w.Text, {
                          className: "duration",
                          children: d.costTime,
                        }),
                    ],
                  }),
                  (0, W.BX)(w.View, {
                    className: "station-box "
                      .concat(1 === c ? "bus" : "", " ")
                      .concat(d.costDay && !ue ? "incre" : ""),
                    children: [
                      1 === c &&
                        (0, W.BX)(w.Block, {
                          children: [
                            (0, W.BX)(w.View, {
                              className: "station",
                              children: [
                                (0, W.tZ)(w.View, {
                                  className: "from",
                                  children: d.fromStation,
                                }),
                                (0, W.tZ)(w.View, {
                                  className: "to",
                                  children: d.toStationShow
                                    ? d.toStationShow
                                    : d.toStation,
                                }),
                              ],
                            }),
                            !y.default.isH5Hzbm &&
                              (0, W.tZ)(w.View, {
                                className: "map",
                                "data-type": "bus",
                                id: "AdDS",
                                onClick: U,
                                children: (0, W.tZ)(w.Image, {
                                  mode: "aspectFit",
                                  className: "map-icon",
                                  src: y.default.isTieyou
                                    ? "https://pages.c-ctrip.com/bus-images/zhixing/icon/tydt@3x.png"
                                    : "https://pages.c-ctrip.com/bus-images/zhixing/icon/dt@3x.png",
                                }),
                              }),
                          ],
                        }),
                      3 === c &&
                        (0, W.BX)(w.Block, {
                          children: [
                            !ue &&
                              (0, W.BX)(w.View, {
                                className: "time",
                                children: [
                                  (0, W.tZ)(w.View, {
                                    className: "from-time",
                                    children: ue ? n : d.fromTime,
                                  }),
                                  !ue &&
                                    (0, W.BX)(w.View, {
                                      className: "to-time",
                                      children: [
                                        d.toTime,
                                        !!d.costDay &&
                                          (0, W.BX)(w.Text, {
                                            className: "tag",
                                            children: ["+", d.costDay, "天"],
                                          }),
                                      ],
                                    }),
                                ],
                              }),
                            (0, W.BX)(w.View, {
                              className: "place",
                              children: [
                                !ce || (ce && I.departure)
                                  ? (0, W.BX)(w.View, {
                                      className: "from-place",
                                      children: [
                                        ce
                                          ? I.departure.customDepartureStation
                                          : d.fromStation,
                                        (0, W.tZ)(w.Text, {
                                          className: "ifont-location iconfont",
                                          "data-type": "car-from",
                                          id: "AdDT",
                                          onClick: U,
                                        }),
                                        ae || ce
                                          ? (0, W.tZ)(le.Z, {
                                              className: "bus-button",
                                              shape: "cycle",
                                              btnText: "修改",
                                              style: { width: "40px" },
                                              id: "AdDU",
                                              onClick: function () {
                                                return G(0);
                                              },
                                            })
                                          : "",
                                      ],
                                    })
                                  : (0, W.tZ)(le.Z, {
                                      className: "bus-button",
                                      btnText: "点击选择上车点",
                                      shape: "cycle",
                                      style: {
                                        height: "36px",
                                        fontSize: "15px",
                                        marginBottom: "6px",
                                      },
                                      id: "AdDV",
                                      onClick: function () {
                                        return G(0);
                                      },
                                    }),
                                d.pathStationNames &&
                                  !!d.pathStationNames.length &&
                                  (0, W.BX)(w.View, {
                                    className: "transfer-stations",
                                    id: "AdDW",
                                    onClick: d.transferStationDesc
                                      ? function () {
                                          return K(!0);
                                        }
                                      : function () {},
                                    children: [
                                      (0, W.BX)(w.Text, {
                                        children: [
                                          "中转站：",
                                          d.pathStationNames.map(function (
                                            e,
                                            t
                                          ) {
                                            return ""
                                              .concat(e)
                                              .concat(
                                                t !==
                                                  d.pathStationNames.length - 1
                                                  ? "、"
                                                  : ""
                                              );
                                          }),
                                        ],
                                      }),
                                      !!d.transferStationDesc &&
                                        (0, W.tZ)(w.Text, {
                                          className:
                                            "ifont-line-tips iconfont icon-note",
                                        }),
                                    ],
                                  }),
                                !re || (re && I.destination)
                                  ? (0, W.BX)(w.View, {
                                      className: "to-place",
                                      children: [
                                        re
                                          ? I.destination
                                              .customDestinationStation
                                          : d.toStationShow
                                          ? d.toStationShow
                                          : d.toStation,
                                        (0, W.tZ)(w.Text, {
                                          className: "ifont-location iconfont",
                                          "data-type": "car-to",
                                          id: "AdDX",
                                          onClick: U,
                                        }),
                                        se || re
                                          ? (0, W.tZ)(le.Z, {
                                              className: "bus-button",
                                              shape: "cycle",
                                              btnText: "修改",
                                              style: { width: "40px" },
                                              id: "AdDY",
                                              onClick: function () {
                                                return G(1);
                                              },
                                            })
                                          : "",
                                      ],
                                    })
                                  : (0, W.tZ)(le.Z, {
                                      className: "bus-button",
                                      btnText: "点击选择下车点",
                                      shape: "cycle",
                                      style: {
                                        height: "36px",
                                        fontSize: "15px",
                                      },
                                      id: "AdDZ",
                                      onClick: function () {
                                        return G(1);
                                      },
                                    }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  ue &&
                    (0, W.BX)(w.View, {
                      className: "custom-time-box",
                      children: [
                        (0, W.tZ)(w.Image, {
                          src: "https://pages.c-ctrip.com/bus-images/zhixing/zx-timer-icon.png",
                          style: {
                            width: "13px",
                            height: "13px",
                            margin: "0 16px 0 4px",
                          },
                        }),
                        (0, W.BX)(w.View, {
                          className: "departure-time-info",
                          children: [
                            (0, W.BX)(w.View, {
                              className: "title",
                              children: [
                                x || n || d.selectableFromTime,
                                "上车",
                              ],
                            }),
                            (0, W.BX)(w.View, {
                              className: "desc",
                              children: [
                                "早班",
                                d.selectableFromTime,
                                " 晚班",
                                d.endTime,
                              ],
                            }),
                          ],
                        }),
                        (0, W.tZ)(le.Z, {
                          shape: "cycle",
                          btnText: "修改",
                          style: { width: "40px" },
                          id: "AdDa",
                          onClick: Y,
                        }),
                      ],
                    }),
                  m &&
                    f &&
                    (0, W.BX)(w.Block, {
                      children: [
                        (0, W.BX)(w.View, {
                          className: "time-box",
                          children: [
                            (0, W.tZ)(w.Text, {
                              className: "depa",
                              children: "返程",
                            }),
                            (0, W.BX)(w.Text, {
                              className: "date",
                              children: [" ", F()(f.fromDate).format("M月D日")],
                            }),
                            (0, W.BX)(w.Text, {
                              className: "time",
                              style: { marginLeft: "6px" },
                              children: [" ", z, "发车"],
                            }),
                          ],
                        }),
                        (0, W.tZ)(w.View, {
                          className: "station-box ".concat(
                            f.fromTime || f.toTime ? "" : "bus"
                          ),
                          children:
                            f.fromTime || f.toTime
                              ? (0, W.BX)(w.Block, {
                                  children: [
                                    (0, W.BX)(w.View, {
                                      className: "time",
                                      children: [
                                        (0, W.tZ)(w.View, {
                                          className: "from-time",
                                          children: f.fromTime,
                                        }),
                                        (0, W.tZ)(w.View, {
                                          className: "to-time",
                                          children: f.toTime,
                                        }),
                                      ],
                                    }),
                                    (0, W.BX)(w.View, {
                                      className: "place",
                                      children: [
                                        (0, W.tZ)(w.View, {
                                          className: "from-place",
                                          children: f.fromStation,
                                        }),
                                        f.pathStationNames &&
                                          !!f.pathStationNames.length &&
                                          (0, W.tZ)(w.View, {
                                            className: "transfer-stations",
                                            children: (0, W.BX)(w.Text, {
                                              children: [
                                                "中转站：",
                                                f.pathStationNames.map(
                                                  function (e, t) {
                                                    return ""
                                                      .concat(e)
                                                      .concat(
                                                        t !==
                                                          d.pathStationNames
                                                            .length -
                                                            1
                                                          ? "、"
                                                          : ""
                                                      );
                                                  }
                                                ),
                                              ],
                                            }),
                                          }),
                                        (0, W.tZ)(w.View, {
                                          className: "to-place",
                                          children: f.toStation,
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, W.tZ)(w.Block, {
                                  children: (0, W.BX)(w.View, {
                                    className: "station",
                                    children: [
                                      (0, W.tZ)(w.View, {
                                        className: "from",
                                        children: d.fromStation,
                                      }),
                                      (0, W.tZ)(w.View, {
                                        className: "to",
                                        children: d.toStationShow
                                          ? d.toStationShow
                                          : d.toStation,
                                      }),
                                    ],
                                  }),
                                }),
                        }),
                      ],
                    }),
                  (0, W.BX)(w.View, {
                    className: "tag-box",
                    children: [
                      (0, W.BX)(w.Text, {
                        className: "price",
                        children: [
                          me,
                          " ¥",
                          (null === (t = d.originPrice) || void 0 === t
                            ? void 0
                            : t.zt_sub(d.deductionAmount || 0)) || 0,
                        ],
                      }),
                      V &&
                        (0, W.tZ)(w.Text, {
                          id: "AdDb",
                          onClick: $,
                          children: "退改政策/取票方式",
                        }),
                      V &&
                        (0, W.tZ)(w.Text, {
                          className: "detail",
                          id: "AdDc",
                          onClick: $,
                          children: "详情",
                        }),
                    ],
                  }),
                  (0, W.tZ)(w.View, {
                    className: "desc-box",
                    children:
                      null == pe
                        ? void 0
                        : pe.map(function (e, t) {
                            var i, n;
                            return (0,
                            W.BX)(w.View, { className: "item", children: [(0, W.tZ)(w.View, { className: "item-notice-content", children: e.isCommonNoticeComp ? (0, W.tZ)(O.Z, { isFromBook: !0, onNoticeModalVisibleChange: ee, useOuterModal: !0, refreshNoticeParams: { fromTime: d.fromDate + " " + d.fromTime, fromCity: d.fromCity, toCity: d.toCity, fromStation: d.fromStation, toStation: d.toStation, productType: 1 == c ? "bus" : "point", plateNumber: d.busNumber, website: null === (i = d.businessLicense) || void 0 === i ? void 0 : i.website } }) : (0, W.BX)(w.View, { className: "tag", style: "color: ".concat(e.colour), children: [(0, W.tZ)(w.Image, { className: "ico", src: e.icon }), e.title] }, "index") }), y.default.isWechat && 0 === t && (null == A || null === (n = A.book) || void 0 === n ? void 0 : n.isShowSimpleBookEntry) && 1 == c && !y.default.isTieyou && !M && (0, W.tZ)(w.View, { className: "share-line", id: "AdDd", onClick: ie, children: "分享班次" }), y.default.isWechat && 0 === t && L && (0, W.tZ)(w.View, { className: "share-line", id: "AdDe", onClick: oe, children: "快捷支付" })] }, t);
                          }),
                  }),
                ],
              });
            }),
            Ge = b.default.memo(function (e) {
              var t,
                i = e.visible,
                n = void 0 !== i && i,
                o = e.dialogInfo,
                a = void 0 === o ? null : o,
                s = e.onCancel,
                c = void 0 === s ? function () {} : s,
                r = e.onConfirm,
                l = void 0 === r ? function () {} : r;
              return a
                ? (0, W.tZ)(ae.ZtActivityPop, {
                    show: n,
                    className: "bus-book-ltcp-dialog",
                    onClose: c,
                    children: (0, W.BX)(w.View, {
                      className: "cont flex-align-items-center flex-column",
                      children: [
                        (0, W.tZ)(w.View, {
                          className: "tit",
                          children: a.title,
                        }),
                        (0, W.tZ)(w.View, {
                          className: "sub-tit",
                          children: a.subTitle,
                        }),
                        null === (t = a.couponList) || void 0 === t
                          ? void 0
                          : t.map(function (e, t) {
                              return (0,
                              W.BX)(w.View, { className: "item flex-align-items-center", children: [(0, W.BX)(w.View, { className: "lf flex-align-items-center", children: [(0, W.tZ)(w.Text, { className: "unit", children: e.unit }), (0, W.tZ)(w.Text, { className: "price", children: e.price })] }), (0, W.BX)(w.View, { className: "rt flex flex-column", children: [(0, W.tZ)(w.Text, { className: "c-name", children: e.name }), (0, W.tZ)(w.Text, { className: "c-desc", children: e.desc })] })] }, t);
                            }),
                        (0, W.BX)(w.View, {
                          className: "btn-group flex",
                          children: [
                            (0, W.tZ)(w.Button, {
                              className: "btn cancel",
                              id: "AdCt",
                              onClick: c,
                              children: a.leftBtnName,
                            }),
                            (0, W.tZ)(w.Button, {
                              className: "btn confirm",
                              id: "AdCu",
                              onClick: l,
                              children: a.rightBtnName,
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : null;
            }),
            He = b.default.memo(function (e) {
              var t,
                i,
                n = e.couponData,
                o = void 0 === n ? null : n,
                a = e.onSelect,
                s = void 0 === a ? function () {} : a;
              if (
                !o ||
                0 ===
                  (null === (t = o.couponList) || void 0 === t
                    ? void 0
                    : t.length)
              )
                return null;
              var c = o.couponList;
              return (0, W.BX)(w.View, {
                className: "bus-book-cp",
                children: [
                  (0, W.BX)(w.View, {
                    className: "tit-box flex-align-items-center",
                    children: [
                      (0, W.tZ)(w.Image, {
                        src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/bthb@3x.png",
                        className: "icon",
                        mode: "aspectFit",
                      }),
                      o.channelTitle &&
                        (0, W.tZ)(ae.ZtRichText, {
                          className: "tit",
                          nodes: o.channelTitle,
                        }),
                    ],
                  }),
                  1 === c.length &&
                    (0, W.BX)(w.View, {
                      className: "white-box single-box flex-align-items-center",
                      id: "AdCb",
                      onClick: function () {
                        return s(c[0].packageCode);
                      },
                      children: [
                        (0, W.BX)(w.View, {
                          className: "price",
                          children: [
                            (0, W.tZ)(w.Text, {
                              className: "num",
                              children: c[0].showPrice,
                            }),
                            (0, W.tZ)(w.Text, {
                              className: "unit",
                              children: "元",
                            }),
                          ],
                        }),
                        (0, W.BX)(w.View, {
                          className: "main-cont",
                          children: [
                            (0, W.tZ)(w.View, {
                              className: "name",
                              children: c[0].name,
                            }),
                            (0, W.tZ)(w.View, {
                              className: "desc",
                              children: c[0].desc,
                            }),
                          ],
                        }),
                        (0, W.BX)(w.View, {
                          className: "rt-box flex-align-items-center",
                          children: [
                            (0, W.BX)(w.Text, {
                              className: "real-price",
                              children: ["¥", c[0].payShowPrice],
                            }),
                            (0, W.tZ)(w.Image, {
                              className: "check-icon",
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/icon_".concat(
                                null !== (i = c[0]) &&
                                  void 0 !== i &&
                                  i.isSelected
                                  ? "xzl"
                                  : "wxz",
                                "@3x.png"
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  2 === c.length &&
                    (0, W.tZ)(w.View, {
                      className: "white-box multi-box flex",
                      children: c.map(function (e, t) {
                        return (0, W.BX)(
                          w.View,
                          {
                            className: "item flex ".concat(
                              e.isSelected ? "selected" : ""
                            ),
                            id: "AdCc",
                            onClick: function () {
                              return s(e.packageCode);
                            },
                            children: [
                              (0, W.BX)(w.View, {
                                className: "lf flex-center flex-column",
                                children: [
                                  (0, W.BX)(w.View, {
                                    className: "price",
                                    children: [
                                      (0, W.tZ)(w.Text, {
                                        className: "unit",
                                        children: "¥",
                                      }),
                                      (0, W.tZ)(w.Text, {
                                        children: e.showPrice,
                                      }),
                                    ],
                                  }),
                                  (0, W.tZ)(w.View, {
                                    className: "desc",
                                    children: e.desc,
                                  }),
                                ],
                              }),
                              (0, W.BX)(w.View, {
                                className: "rt flex-center flex-column",
                                children: [
                                  (0, W.tZ)(w.View, {
                                    className: "c-name",
                                    children: e.name,
                                  }),
                                  (0, W.BX)(w.View, {
                                    className: "btn",
                                    children: [
                                      e.isSelected &&
                                        (0, W.tZ)(w.Text, {
                                          className: "iconfont ifont-selected",
                                        }),
                                      (0, W.tZ)(w.Text, {
                                        children: e.isSelected
                                          ? "已选"
                                          : "选择",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                ],
              });
            }),
            We = { 1: "身份证", 2: "护照", 7: "回乡证", 8: "台胞证" },
            Ke = {
              wrapperOption: {
                borderRadius: "16px",
                width: "calc(100% - 40px)",
                position: "absolute",
                bottom: 0,
                padding: "20px 20px 0",
              },
              funcOption: { isCloseByMask: !0 },
            },
            Je = [
              {
                title: "出行提醒",
                tempId: "H3N8J1b3pO9FDkTAivEMJA03pgQksXmr04Ut8DA25Ao",
              },
              {
                title: "优惠即将到期通知",
                tempId: "bZWCIDYNgNlv34-d1B8c9KH_xCBBBpyICzsDuZKPVWA",
              },
              {
                title: "乘车提醒",
                tempId: "TQo1O-vbixPrLf6XS3O9KBvURESu6NsG7wgdb67TTco",
              },
            ],
            Ye = [
              {
                title: "出行提醒",
                tempId: "_I2ln5Gq8BocIbLenNLQyHpThHa4WHyEbBSmiOcz44Q",
              },
              {
                title: "优惠即将到期通知",
                tempId: "inUTpYOxjBSGY2yfBRt1Uu1cTS5212s0nj_oM7ohkQA",
              },
              {
                title: "乘车提醒",
                tempId: "4OlGq-5xZhmVAWF99mW_OgsTGOdUvIIqiEQhWoFGoA8",
              },
            ],
            qe = "dt" === y.default.jetpack,
            $e =
              (0, U.h)()(
                (Me = (function (e) {
                  (0, g.Z)(i, e);
                  var t = (0, v.Z)(i);
                  function i(e) {
                    var n;
                    (0, m.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, k.Z)(
                        (0, f.Z)(n),
                        "selectSaledCouponPackagePromiseReslove",
                        null
                      ),
                      (0, k.Z)(
                        (0, f.Z)(n),
                        "selectSaledCouponPackagePromiseReject",
                        null
                      ),
                      (0, k.Z)(
                        (0, f.Z)(n),
                        "$noRealNameBookingComponent",
                        null
                      ),
                      (0, k.Z)((0, f.Z)(n), "$PersonSaveTip", null),
                      (n.pageId = "10650059986"),
                      (n.couponAutoSelect = !0),
                      (n.options = {});
                    var o =
                        (0, C.getCurrentInstance)().router &&
                        (0, C.getCurrentInstance)().router.params,
                      a = null == o ? void 0 : o.tabType;
                    return (
                      "scenicArea" == a
                        ? (n.pageId = "10650059994")
                        : "airport" == a && (n.pageId = "10650060002"),
                      (n.InsuranceRecord = new X.Z()),
                      (n.loadPageCount = 0),
                      (n.state = {
                        isTieyou: y.default.isTieyou,
                        isLoading: !0,
                        canUseCustomNav:
                          y.default.isWechat ||
                          y.default.isTT ||
                          y.default.isBaidu,
                        statusBarHeight: B.ZP.statusBarHeight,
                        bgTop: 44 + B.ZP.statusBarHeight,
                        bookLineTop: -113,
                        shiftInfo: {},
                        bookNoticeModalInfo: [],
                        isBookModalShow: !1,
                        isPassengerPannelShow: !1,
                        isPriceDetailModalShow: !1,
                        isOnePassengerAdded: !1,
                        feeTotal: 0,
                        ticketPickTel: "",
                        adults: {},
                        utmSource: "",
                        couponLen: 0,
                        couponInfo: [],
                        availCouponLen: 0,
                        couponCodeSelect: null,
                        passengerPannelInfo: {},
                        isFeeModalShow: !1,
                        isDiTuiSource: !1,
                        isGuaModalShow: !1,
                        isBookTagShow: !0,
                        needUpdate: !0,
                        insureName: "",
                        insureId: "",
                        reversePassengerInfo: [],
                        ticketPicker: {},
                        isSuiteModalShow: !1,
                        productLine: 1,
                        insurePackageInfo: {},
                        btnInsurePackageInfo: {},
                        insurePackageList: [],
                        insuranceChannel: "",
                        needClearInsure: !1,
                        modalInsurePackageInfo: {},
                        vehicleMode: "",
                        couponSelectedInfo: {},
                        discountInfo: "",
                        discountModalInfo: "",
                        isDiscountModalShow: !1,
                        isBrowseModalShow: !1,
                        fromStationInfoList: [],
                        toStationInfoList: [],
                        customStationInfo: {
                          departure: null,
                          destination: null,
                        },
                        fixFromTimeLayerVisible: !1,
                        custormFromTime: void 0,
                        buyTicketRule: {},
                        busConfig: {},
                        isTransferNoteModalShow: !1,
                        customSelectXCoupons: [],
                        XCouponElement: void 0,
                        isShowXcouponTip: !1,
                        xCouponTipInfo: null,
                        isSpecialTicket: !1,
                        supportSwitchSubTicket: !1,
                        saledCouponPackageInfo: null,
                        isShowSaledCouponPackageModal: !1,
                        isHaveBackLine: !1,
                        backLine: null,
                        showPassengerGuide: !1,
                        showPaymentGuide: !1,
                        showContactNumGuide: !1,
                        isTelInputFocus: !1,
                        studentGuessList: [],
                        tabType: (null == o ? void 0 : o.tabType) || "",
                        officialInfo: null,
                        isNoRealNameBookingMode: !1,
                        busCommonNoticeModalData: null,
                        redPacketBriefInfo: null,
                        isRedPackageChecked: !1,
                        lotteryFreeOrderProduct: null,
                        isHaveFollowingEle: !1,
                        couponPkgData: null,
                        isMemberCouponPkgModalShow: !1,
                        memberCouponPkgInfo: null,
                        xMemberCoupons: [],
                        selectedPassengerIdList: [],
                        isSelectedModalInsurePackage: !1,
                        discountMes: null,
                        isHasDiscount: !1,
                        isNotUseCoupon: !1,
                        hasShowModalInsurePackageInfo: !1,
                        isShowInsureModule: !0,
                        travelCouponActivityInfo: null,
                        showTravelDiscountActivityDrawer: !1,
                        selectedInsuranceCodeFronListPage: "",
                        limitTimeCouponInfo: null,
                        isShowLimitTimeCouponDialog: !1,
                        isSelectedLimitTimeCoupon: !1,
                        specialCouponPkg: null,
                        memberProductInfo: null,
                      }),
                      (n.isNeedLoadUserLabelInfo = !0),
                      (n.memberCouponPkgModalCount = 0),
                      n
                    );
                  }
                  return (
                    (0, p.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function (e) {
                          var t,
                            i = this;
                          null === (t = this.InsuranceRecord) ||
                            void 0 === t ||
                            t.start({ productLine: "bus" });
                          var n =
                            (0, C.getCurrentInstance)().router &&
                            (0, C.getCurrentInstance)().router.params;
                          (n.fromCity = decodeURIComponent(n.fromCity || "")),
                            (n.toCity = decodeURIComponent(n.toCity || "")),
                            (n.fromStation = decodeURIComponent(
                              n.fromStation || ""
                            )),
                            (n.toStation = decodeURIComponent(
                              n.toStation || ""
                            )),
                            (n.titleFromCity = decodeURIComponent(
                              n.titleFromCity || ""
                            )),
                            (n.titleToCity = decodeURIComponent(
                              n.titleToCity || ""
                            )),
                            (n.fromTime = decodeURIComponent(n.fromTime || "")),
                            (n.dataToken = decodeURIComponent(
                              n.dataToken || ""
                            )),
                            console.log("parmas-----", n);
                          var o =
                            n.utmSource ||
                            e.utmsource ||
                            j.c.getUtmSource({
                              station: [n.fromStation, n.fromCity],
                            });
                          o &&
                            -1 !== o.indexOf("zxxcx_ditui_yilabao") &&
                            this.setState({ isDiTuiSource: !0 }),
                            (this.defaultSelectedXProductList =
                              ((null == n
                                ? void 0
                                : n.defaultSelectedXProductList) &&
                                JSON.parse(n.defaultSelectedXProductList)) ||
                              []),
                            (this.options = JSON.parse(JSON.stringify(n))),
                            (this._startTime = new Date().getTime()),
                            this.setState(
                              {
                                utmSource: o,
                                headTitle: ""
                                  .concat(n.titleFromCity, " - ")
                                  .concat(n.titleToCity),
                                dataToken: decodeURIComponent(
                                  n.dataToken || ""
                                ),
                                fromStation: n.fromStation,
                              },
                              function () {
                                i.doAllLineAction(n),
                                  1 == n.productLine && i.doBusLineAction();
                              }
                            ),
                            this.getPhoneNum().then(function (e) {
                              i.setState({ ticketPickTel: e });
                            }),
                            (0, _.MX)({ utmSource: o }).then(function (e) {
                              e &&
                                i.setState({
                                  showPassengerGuide: !(0, _.Bq)(
                                    _.t0.ADD_PASSENGER_IN_BOOK
                                  ),
                                  showContactNumGuide:
                                    (0, _.Bq)(_.t0.ADD_PASSENGER_IN_BOOK) &&
                                    !(0, _.Bq)(_.t0.CONTACT_TEL_IN_BOOK),
                                  showPaymentGuide:
                                    (0, _.Bq)(_.t0.CONTACT_TEL_IN_BOOK) &&
                                    (0, _.Bq)(_.t0.ADD_PASSENGER_IN_BOOK) &&
                                    !(0, _.Bq)(_.t0.PAY_IN_BOOK),
                                });
                            }),
                            (this.sourceId = (0, _.a3)(o)),
                            this.doBusNewTraceInfoV2({ triggerType: "load" });
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function (e, t) {
                          var i = this.state,
                            n = i.isPassengerPannelShow,
                            o = i.discountMes;
                          !qe &&
                            n !== t.isPassengerPannelShow &&
                            n &&
                            o &&
                            o.hasDiscount &&
                            this.doBusNewTraceInfo(
                              {
                                comment: "填写页新客福利“已领取”banner曝光",
                                typeSnd:
                                  "book_newcustome_welfare_recevice_banner_show",
                              },
                              0
                            );
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.doBusNewTraceInfoV2({ triggerType: "exit" });
                          var e = Z.v4.get(),
                            t = new Date().getTime();
                          if (e || Object.keys(e).length > 0)
                            for (var i in e) {
                              t - e[i].timeStamp > 6e4 && delete e[i];
                            }
                          Z.v4.set(e);
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.loadPageCount++;
                        },
                      },
                      {
                        key: "getCouponPackageWin",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [];
                          (0, se.V0)().then(function (i) {
                            if (i && 1 === i.code) {
                              var n = (i.data || {}).packageCode;
                              if (!n) return;
                              var o = "",
                                a = t.find(function (e) {
                                  var t = e.attachPackages;
                                  return (void 0 === t ? [] : t).some(function (
                                    e
                                  ) {
                                    var t = e.packageCode,
                                      i = e.descUrl;
                                    return n === t && (o = i), n === t;
                                  });
                                });
                              e.setState({
                                saledCouponPackageInfo: {
                                  detail: (0, h.Z)(
                                    { descUrl: o },
                                    i.data || {}
                                  ),
                                  channelInfo: a,
                                  isSupportSaled: !!a,
                                },
                              });
                            }
                          });
                        },
                      },
                      {
                        key: "handleSaledCouponPackageModal",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0];
                          this.setState(
                            { isShowSaledCouponPackageModal: !1 },
                            function () {
                              e.selectSaledCouponPackagePromiseReslove(t);
                            }
                          );
                        },
                      },
                      {
                        key: "selectSaledCouponPackagePromise",
                        value: function () {
                          var e = this;
                          return (
                            (this.selectSaledCouponPackagePromiseReslove =
                              null),
                            (this.selectSaledCouponPackagePromiseReject = null),
                            new Promise(function (t, i) {
                              (e.selectSaledCouponPackagePromiseReslove = t),
                                (e.selectSaledCouponPackagePromiseReject = i),
                                e.setState({
                                  isShowSaledCouponPackageModal: !0,
                                });
                            })
                          );
                        },
                      },
                      {
                        key: "convertObj",
                        value: function (e) {
                          var t = [],
                            i = function (i) {
                              var n = e[i];
                              n.constructor == Array
                                ? n.forEach(function (e) {
                                    t.push(i + "=" + e);
                                  })
                                : t.push(i + "=" + n);
                            };
                          for (var n in e) i(n);
                          return t.join("&");
                        },
                      },
                      {
                        key: "doAllLineAction",
                        value: function (e) {
                          this.getBusShiftInfo(e),
                            this.getMiniConfig(),
                            this.getRedPacketBrief();
                        },
                      },
                      {
                        key: "doBusLineAction",
                        value: function () {
                          this.getDiscountInfo();
                        },
                      },
                      {
                        key: "handleTelChange",
                        value: function (e) {
                          this.setState({ ticketPickTel: e.detail.value });
                        },
                      },
                      {
                        key: "doBusTraceInfo",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "",
                            i =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 1;
                          this.ubtTrace(
                            1 === i ? "BUS_Bus_C_click" : "BUS_Bus_O_show",
                            {
                              pageId: this.pageId,
                              type: y.default.jetpack || "zx",
                              typeSnd: e,
                              utmSource: this.state.utmSource,
                              comment: t,
                            }
                          );
                        },
                      },
                      {
                        key: "doBusNewTraceInfo",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1;
                          this.ubtTrace(
                            1 === t ? "BUS_Bus_C_click" : "BUS_Bus_O_show",
                            (0, h.Z)(
                              {
                                pageId: this.pageId,
                                type: y.default.jetpack || "zx",
                                utmSource: this.state.utmSource,
                              },
                              e
                            )
                          );
                        },
                      },
                      {
                        key: "doBusNewTraceInfoV2",
                        value: (function () {
                          var e = (0, d.Z)(
                            (0, u.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o,
                                a,
                                s,
                                c = arguments;
                              return (0, u.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            c.length > 0 && void 0 !== c[0]
                                              ? c[0]
                                              : {}),
                                          (i =
                                            c.length > 1 && void 0 !== c[1]
                                              ? c[1]
                                              : 0),
                                          (e.prev = 2),
                                          (e.next = 5),
                                          (0, _.c$)(
                                            this.isNeedLoadUserLabelInfo
                                          )
                                        );
                                      case 5:
                                        (n = e.sent),
                                          (this.isNeedLoadUserLabelInfo = !1),
                                          (o = P.Z.getUnionData()),
                                          (a = ""),
                                          (e.t0 = i),
                                          (e.next =
                                            0 === e.t0
                                              ? 12
                                              : 1 === e.t0
                                              ? 14
                                              : 2 === e.t0
                                              ? 16
                                              : 18);
                                        break;
                                      case 12:
                                        return (
                                          (a = "p_bus_z_10650059986"),
                                          e.abrupt("break", 19)
                                        );
                                      case 14:
                                        return (
                                          (a = "s_bus_z_10650059986"),
                                          e.abrupt("break", 19)
                                        );
                                      case 16:
                                        return (
                                          (a = "c_bus_z_10650059986"),
                                          e.abrupt("break", 19)
                                        );
                                      case 18:
                                        return e.abrupt("break", 19);
                                      case 19:
                                        (s = (0, h.Z)(
                                          (0, h.Z)(
                                            {
                                              utmSource:
                                                this.state.utmSource || "null",
                                              sourceId:
                                                this.sourceId ||
                                                "Bus_Null_Null",
                                              pageId: "10650059986",
                                              client: (0, _.y3)(),
                                              allianceId: o.aid || "null",
                                              allianceSid: o.sid || "null",
                                            },
                                            n
                                          ),
                                          t
                                        )),
                                          "c_bus_z_10650059986" == a &&
                                            (s.typeSndAttr = "null"),
                                          this.ubtTrace(a, s),
                                          (e.next = 27);
                                        break;
                                      case 24:
                                        (e.prev = 24),
                                          (e.t1 = e.catch(2)),
                                          console.log(e.t1);
                                      case 27:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 24]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onMobileFocus",
                        value: function () {
                          this.doBusTraceInfo("mobilePhone", "联系手机修改栏");
                        },
                      },
                      {
                        key: "getPhoneNum",
                        value: function () {
                          return new Promise(function (e) {
                            e(
                              S().getStorageSync("BUS_PHONE_NUMBER") ||
                                I.ZP.userName ||
                                "" ||
                                ""
                            );
                          });
                        },
                      },
                      {
                        key: "getMiniConfig",
                        value: (function () {
                          var e = (0, d.Z)(
                            (0, u.Z)().mark(function e() {
                              var t, i, n, o;
                              return (0, u.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (t = {
                                            keys: ["mini-fe-bus-common"],
                                          }),
                                          (e.next = 4),
                                          (0, D.SZ)(t)
                                        );
                                      case 4:
                                        1 === (i = e.sent).resultCode &&
                                          ((n = (i || {}).configDataList),
                                          (o = void 0 === n ? [] : n),
                                          this.setState({
                                            busConfig: (
                                              o.find(function (e) {
                                                return (
                                                  "mini-fe-bus-common" === e.key
                                                );
                                              }) || {}
                                            ).data,
                                          })),
                                          (e.next = 11);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          console.log(e.t0);
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
                        key: "getBusShiftInfo",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            n = i.utmSource,
                            o = i.passengerPannelInfo,
                            a = void 0 === o ? {} : o,
                            s = i.isDiTuiSource,
                            c = {
                              fromCity: e.fromCity,
                              toCity: e.toCity,
                              busNumber: e.busNumber,
                              fromStation: e.fromStation,
                              toStation: e.toStation,
                              fromDate: e.date,
                              fromTime: e.fromTime,
                              utmSource: n,
                              symbol: e.symbol,
                              abTest: [
                                { name: "160818_crm_nwpkg", version: "B" },
                              ],
                              productLine: JSON.parse(e.productLine),
                              dataToken: e.dataToken,
                            };
                          (0, se.kb)(c).then(function (i) {
                            if (
                              (t.responseTrace("getBusDetailPromise", i),
                              1 === i.code)
                            ) {
                              var o = t.handleShiftOriginData(i.data);
                              t.setState(
                                {
                                  isLoading: !1,
                                  productLine: JSON.parse(e.productLine),
                                  shiftInfo: (0, h.Z)((0, h.Z)({}, i.data), o),
                                  vehicleMode: i.data.vehicleMode || "",
                                  fromStationInfo: i.data.fromStationInfo,
                                  toStationInfo: i.data.toStationInfo,
                                  buyTicketRule: i.data.buyTicketRule,
                                  serviceChargeInfo: i.data.serviceChargeInfo,
                                  ticketPriceInfo: i.data.ticketPriceItems,
                                  passengerPannelInfo: (0, h.Z)(
                                    (0, h.Z)({}, a),
                                    {},
                                    { buyTicketRule: i.data.buyTicketRule }
                                  ),
                                  fromStationInfoList:
                                    i.data.fromStationInfoList,
                                  toStationInfoList: i.data.toStationInfoList,
                                  customStationInfo:
                                    e.customStationInfo ||
                                    t.state.customStationInfo,
                                  isSpecialTicket:
                                    !y.default.isH5Hzbm &&
                                    1 === i.data.productLine &&
                                    "subTicket" ===
                                      (
                                        (i.data.subTicketDetail || []).find(
                                          function (e) {
                                            return e.checked;
                                          }
                                        ) || {}
                                      ).type,
                                  supportSwitchSubTicket:
                                    !y.default.isH5Hzbm &&
                                    1 === i.data.productLine &&
                                    i.data.isShowSubTicket,
                                  isHaveBackLine: i.data.isHaveBackLine,
                                  backLine: i.data.backLine,
                                  officialInfo: t.formatOfficialInfo(
                                    i.data.officialInfo
                                  ),
                                  isNoRealNameBookingMode:
                                    !1 === i.data.realNameAuthLine,
                                },
                                function () {
                                  t.state.isNoRealNameBookingMode ||
                                    (t.getCommonPassengerInfo(),
                                    t.getBusStudentInfo(),
                                    t.getCouponInfo()),
                                    t.getXListInfo(),
                                    t.getBookNoticeInfo(),
                                    t.handleCountPrice(),
                                    s ||
                                      "dt" === y.default.jetpack ||
                                      t.getTravelCouponActivityInfo();
                                }
                              );
                            } else
                              S().showToast({
                                title: "车次信息已失效",
                                icon: "none",
                                duration: 2500,
                                mask: !0,
                                complete: function () {
                                  setTimeout(function () {
                                    var i =
                                      1 * e.productLine == 1
                                        ? "bus"
                                        : "scenicArea";
                                    S().redirectTo({
                                      url: "/pages/bus/list/list?date="
                                        .concat(
                                          F()().format("YYYY-MM-DD"),
                                          "&fromCity="
                                        )
                                        .concat(e.fromCity, "&toCity=")
                                        .concat(e.toCity, "&tabType=")
                                        .concat(i, "&utmSource=")
                                        .concat(n, "&sourceId=")
                                        .concat(t.sourceId),
                                    });
                                  }, 2e3);
                                },
                              });
                          });
                        },
                      },
                      {
                        key: "formatOfficialInfo",
                        value: function (e) {
                          if (e) {
                            var t = e.partyAaLogo,
                              i = void 0 === t ? "" : t;
                            return (0, h.Z)(
                              (0, h.Z)({}, e),
                              {},
                              {
                                partyAaLogo:
                                  "https://pages.c-ctrip.com/bus-images/zhixing/official/gfhz.png" ===
                                  i
                                    ? "https://pages.c-ctrip.com/bus-images/zhixing/icon/tyb@3x.png"
                                    : "https://pages.c-ctrip.com/bus-images/zhixing/official/officallLogo_hf.png" ===
                                      i
                                    ? "https://pages.c-ctrip.com/bus-images/zhixing/icon/hfb@3x.png"
                                    : i,
                              }
                            );
                          }
                          return null;
                        },
                      },
                      {
                        key: "handleDayStr",
                        value: function (e) {
                          var t = new Date(e).getTime() - Date.now(),
                            i = parseInt(t / 864e5);
                          return 0 === i
                            ? "今天"
                            : 1 === i
                            ? "明天"
                            : 2 === i
                            ? "后天"
                            : [
                                "星期日",
                                "星期一",
                                "星期二",
                                "星期三",
                                "星期四",
                                "星期五",
                                "星期六",
                              ][new Date(e).getDay()];
                        },
                      },
                      {
                        key: "handleShiftOriginData",
                        value: function (e) {
                          var t,
                            i = e.fromDate,
                            n = e.ticketPriceItems,
                            o = new Date(i),
                            a = new Date(F()().format("YYYY-MM-DD")),
                            s = o.getTime() - a.getTime();
                          (t = parseInt(s / 864e5)),
                            (o = o.getMonth() + 1 + "月" + o.getDate() + "日");
                          var c = "";
                          if (0 === t) c = "今天";
                          else if (1 === t) c = "明天";
                          else if (2 === t) c = "后天";
                          else {
                            c = [
                              "星期日",
                              "星期一",
                              "星期二",
                              "星期三",
                              "星期四",
                              "星期五",
                              "星期六",
                            ][new Date(i).getDay()];
                          }
                          return (
                            n.filter(function (e) {
                              return 2 !== e.ticketType && 3 !== e.ticketType;
                            }),
                            {
                              dateStr: o,
                              dayStr: c,
                              salePrice: n[0].salePrice,
                              fullPrice: n[0].fullPrice,
                              originPrice: n[0].originPrice,
                            }
                          );
                        },
                      },
                      {
                        key: "onClickTicketDetail",
                        value: function () {
                          this.doBusTraceInfo("returnDetail", "退改，取票详情"),
                            this.setState({ isBookModalShow: !0 });
                        },
                      },
                      {
                        key: "onCloseBookModal",
                        value: function () {
                          this.setState({ isBookModalShow: !1 });
                        },
                      },
                      {
                        key: "getBookNoticeInfo",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.utmSource,
                            n = t.shiftInfo,
                            o = t.productLine,
                            a = {
                              busNumber: n.busNumber,
                              fromCity: n.fromCity,
                              toCity: n.toCity,
                              fromStation: n.fromStation,
                              toStation: n.toStation,
                              fromDate: n.fromDate,
                              fromTime: n.fromTime,
                              fullPrice: n.fullPrice,
                              symbol: n.symbol,
                              utmSource: i,
                              productLine: o,
                              customFromTime:
                                this.state.customFromTime || n.fromTime,
                            };
                          (0, se.BA)(a)
                            .then(function (t) {
                              if (1 === t.code) {
                                var i = t.data;
                                e.setState({
                                  bookNoticeModalInfo: i,
                                  isBookTagShow: !0,
                                });
                              } else e.setState({ isBookTagShow: !1 });
                            })
                            .catch(function (t) {
                              console.log("err", t),
                                e.setState({ isBookTagShow: !1 });
                            });
                        },
                      },
                      {
                        key: "gotoMapPage",
                        value: function (e) {
                          this.doBusTraceInfo("map", "车站地图");
                          var t = e.currentTarget.dataset.type;
                          this.navigateTo({
                            url: "/pages/bus/map/map?productLine=".concat(
                              this.state.productLine
                            ),
                            data: {
                              fromStationInfo: this.state.fromStationInfo,
                              toStationInfo: this.state.toStationInfo,
                              isTo: "car-to" === t,
                            },
                          });
                        },
                      },
                      {
                        key: "getBusStudentInfo",
                        value: function () {
                          var e = this;
                          return (0, se.IX)({ productLine: "bus" }).then(
                            function (t) {
                              e.responseTrace("getBusStudentInfo", t),
                                1 == t.resultCode &&
                                  e.setState({
                                    studentGuessList: t.studentList || [],
                                  });
                            }
                          );
                        },
                      },
                      {
                        key: "getCommonPassengerInfo",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "parent",
                            i = this.state,
                            n = i.passengerPannelInfo,
                            o = i.buyTicketRule,
                            a = i.isDiTuiSource,
                            s = {
                              headerPartner: y.default.isTieyou
                                ? "tieyou"
                                : "zhixing",
                              source: "flight",
                            };
                          return (0, se.JV)(s)
                            .then(function (i) {
                              if (
                                (e.responseTrace(
                                  "getCommonPassengerPromise",
                                  i
                                ),
                                1 !== i.resultCode)
                              )
                                return (
                                  e.setState({ isPassengerPannelShow: !1 }),
                                  a &&
                                    1 == e.loadPageCount &&
                                    "parent" == t &&
                                    e.gotoEditPassengerPage(),
                                  []
                                );
                              var s = i.commonPassengers,
                                c = void 0 === s ? [] : s,
                                r = j.c.transferPassengerInfo(c),
                                l = e.handlePassengerRes(r, o),
                                u = e.handlePassengerInfo(l),
                                d = (0, h.Z)(
                                  (0, h.Z)({}, n),
                                  {},
                                  {
                                    passengerPannelLimitInfo: u.slice(0, 5),
                                    passengerPannelAllInfo: u,
                                  }
                                );
                              if ("child" === t)
                                return (
                                  e.setState({
                                    isPassengerPannelShow: !!l.length,
                                  }),
                                  d
                                );
                              e.setState({
                                passengerPannelInfo: d,
                                isPassengerPannelShow: !!l.length,
                              }),
                                a &&
                                  1 == e.loadPageCount &&
                                  l.length <= 0 &&
                                  setTimeout(function () {
                                    e.gotoEditPassengerPage();
                                  }, 300);
                            })
                            .catch(function (t) {
                              t && t.reLogin && e.getCommonPassengerInfo();
                            });
                        },
                      },
                      {
                        key: "gotoEditPassengerPage",
                        value: function () {
                          var e = this,
                            t = this.state.buyTicketRule;
                          this.navigateTo(
                            {
                              url: "/pages/bus/editPassenger/index",
                              data: JSON.stringify({
                                buyTicketRule: t,
                                pasInfo: null,
                              }),
                              callback: function (t) {
                                if (
                                  (console.log(
                                    "Booking add passenger result: ",
                                    t
                                  ),
                                  t.needRefresh)
                                ) {
                                  var i = t.passengerID;
                                  e.onRefreshPassenger().then(function () {
                                    e.setState({
                                      selectedPassengerIdList: [i],
                                    });
                                  });
                                }
                              },
                            },
                            this
                          );
                        },
                      },
                      {
                        key: "onRefreshPassenger",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "parent";
                          return (
                            this.getBusStudentInfo(),
                            this.getCommonPassengerInfo(e)
                          );
                        },
                      },
                      {
                        key: "handlePassengerRes",
                        value: function (e, t) {
                          var i = [];
                          return (
                            V._.each(e, function (e) {
                              var n = e,
                                o = e.CommonPassengerCard,
                                a = JSON.parse(
                                  JSON.stringify(
                                    t.supportPassengerIdentityTypes
                                  )
                                ),
                                s = [];
                              a.forEach(function (e, t) {
                                "二代身份证" === e && (a[t] = "身份证");
                              }),
                                o.forEach(function (e) {
                                  (e.text = We[e.CardType]),
                                    (e.no = e.CardNo),
                                    (e.type = e.CardType),
                                    a.some(function (t) {
                                      return t == e.text;
                                    }) &&
                                      e.CardNo &&
                                      We[e.CardType] &&
                                      s.push(e);
                                }),
                                (o = s),
                                (o = V._.sortBy(o, "CardType")),
                                (n.CommonPassengerCard = o),
                                (n.idcards = o);
                              var c = o[0] || {};
                              (n.idcard = Object.assign({}, c)),
                                (!n.PassengerType ||
                                  ("A" != n.PassengerType &&
                                    "C" != n.PassengerType &&
                                    "X" != n.PassengerType)) &&
                                  (n.PassengerType = "A"),
                                (n.isChild = "C" == n.PassengerType ? 1 : 0),
                                (n.isTakeChild =
                                  "X" == n.PassengerType ? 1 : 0),
                                (n.birth = n.BirthDay),
                                (n.id = n.PassengerID),
                                (n.ptypeText = n.isTakeChild
                                  ? "携童票"
                                  : n.isChild
                                  ? "儿童票"
                                  : "成人票"),
                                (n.cname = n.CNName),
                                (n.EName = n.ENFirstName + " " + n.ENLastName),
                                (n.name =
                                  2 == n.idcard.type
                                    ? n.EName || n.cname
                                    : n.cname || n.EName),
                                n.CommonPassengerCard &&
                                  n.CommonPassengerCard.length &&
                                  i.push(n);
                            }),
                            i
                          );
                        },
                      },
                      {
                        key: "handlePassengerInfo",
                        value: function (e) {
                          var t = [];
                          return (
                            e.forEach(function (e) {
                              var i = e.idcard;
                              t.push(
                                (0, h.Z)(
                                  {
                                    birthDay: e.birth,
                                    type: e.ptypeText,
                                    passengerType: e.PassengerType,
                                    name: e.name,
                                    id: e.PassengerID,
                                    cardName: i.text || "身份证",
                                    cardNum: i.no || "",
                                  },
                                  e
                                )
                              );
                            }),
                            t
                          );
                        },
                      },
                      {
                        key: "handlePannelShow",
                        value: function (e) {
                          var t = this,
                            i =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            n = this.state.ticketPicker,
                            o = void 0 === n ? {} : n,
                            a = e || {},
                            s = a.reversePassengerInfo,
                            c = o;
                          this.isDefaultSelectPas = i;
                          var r = s.some(function (e) {
                            return e.isActive;
                          });
                          s.forEach(function (e) {
                            e.isActive && "A" == e.passengerType && (c = e);
                          }),
                            this.setState(
                              {
                                isOnePassengerAdded: r,
                                reversePassengerInfo: s,
                                ticketPicker: c,
                              },
                              function () {
                                S().nextTick(t.handleCountPrice);
                              }
                            );
                        },
                      },
                      {
                        key: "getCouponInfo",
                        value: function () {
                          var e = this,
                            t = {
                              __productLine:
                                3 == this.state.productLine ? "point" : "bus",
                              utmSource: this.state.utmSource,
                            };
                          (0, se.rg)(t).then(function (t) {
                            if (
                              (e.responseTrace("getCouponListPromise", t),
                              1 === t.code &&
                                t.data &&
                                t.data.couponList &&
                                t.data.couponList.length > 0)
                            ) {
                              var i = t.data,
                                n = i.totalCount,
                                o = void 0 === n ? 0 : n,
                                a = i.couponList,
                                s = void 0 === a ? [] : a;
                              e.setState(
                                { couponLen: o, couponInfo: s },
                                e.handleCountPrice
                              );
                            }
                          });
                        },
                      },
                      {
                        key: "onClickCoupon",
                        value: function () {
                          var e = this;
                          if (
                            !this.state.priceDetailInfo ||
                            !this.state.priceDetailInfo.xCouponDiscount
                          ) {
                            this.doBusTraceInfo("couponIcon", "优惠券");
                            var t = this.state,
                              i = t.couponInfo,
                              n = t.isOnePassengerAdded,
                              o = t.feeTotal,
                              a = t.couponSelectedInfo,
                              s = t.priceDetailInfo,
                              c = a.couponCode || "";
                            (n && "不使用优惠券" != a.couponName) || (c = ""),
                              this.navigateTo({
                                url: "/pages/bus/bookcoupon/bookcoupon",
                                data: {
                                  utmSource: this.state.utmSource,
                                  couponInfo: i,
                                  isOnePassengerAdded: n,
                                  couponCodeSelect: c,
                                  ticketTotal:
                                    (null == s ? void 0 : s.ticketTotal) || 0,
                                  feeTotal:
                                    (null == o
                                      ? void 0
                                      : o.zt_add(a.couponRealPrice)) || 0,
                                },
                                callback: function () {
                                  var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {};
                                  (e.couponAutoSelect = !1),
                                    e.setState(
                                      {
                                        couponSelectedInfo: t,
                                        isNotUseCoupon: !!t.isNotUseCoupon,
                                      },
                                      function () {
                                        e.handleCountPrice();
                                      }
                                    );
                                },
                              });
                          }
                        },
                      },
                      {
                        key: "filterMaxPriceCoupon",
                        value: function (e, t, i) {
                          var n = this,
                            o = this.state.couponSelectedInfo;
                          if (this.couponAutoSelect) {
                            var a = t
                              .map(function (t) {
                                return n.selectMaxCoupon(e, t, i);
                              })
                              .filter(function (e) {
                                return !!e.couponRealPrice;
                              });
                            return a.length <= 0
                              ? {}
                              : (a.sort(function (e, t) {
                                  return e.couponRealPrice < t.couponRealPrice
                                    ? 1
                                    : e.couponRealPrice > t.couponRealPrice
                                    ? -1
                                    : e.couponRealPrice == t.couponRealPrice
                                    ? 0
                                    : void 0;
                                }),
                                a[0]);
                          }
                          if (!o || !Object.keys(o).length) return o;
                          var s = this.selectMaxCoupon(e, o, i);
                          return 0 === s.couponRealPrice
                            ? ((this.couponAutoSelect = !0),
                              (0, M.showToast)("优惠券无法使用，换张券试试吧~"),
                              {})
                            : s.couponRealPrice !== o.couponRealPrice
                            ? s
                            : o;
                        },
                      },
                      {
                        key: "selectMaxCoupon",
                        value: function (e, t, i) {
                          var n = {};
                          if (
                            (t.deductionStrategy.sort(function (e, t) {
                              return e.deductionAmount < t.deductionAmount
                                ? 1
                                : e.deductionAmount > t.deductionAmount
                                ? -1
                                : e.deductionAmount == t.deductionAmount
                                ? 0
                                : void 0;
                            }),
                            3 == t.deductionStrategyTypeID)
                          )
                            for (
                              var o = 0;
                              o < t.deductionStrategy.length;
                              o++
                            ) {
                              var a = t.deductionStrategy[o],
                                s =
                                  1 == a.deductionType
                                    ? (a.deductionAmount * e) / 100
                                    : a.deductionAmount;
                              if (e >= a.startAmount) {
                                n = (0, h.Z)(
                                  (0, h.Z)({}, t),
                                  {},
                                  { couponRealPrice: s }
                                );
                                break;
                              }
                              o === t.deductionStrategy.length - 1 &&
                                (n = (0, h.Z)(
                                  (0, h.Z)({}, t),
                                  {},
                                  { couponRealPrice: 0 }
                                ));
                            }
                          else
                            1 == t.deductionStrategyTypeID
                              ? (n = (0, h.Z)(
                                  (0, h.Z)({}, t),
                                  {},
                                  {
                                    couponRealPrice:
                                      t.couponPrice > i ? 0 : t.couponPrice,
                                  }
                                ))
                              : 2 == t.deductionStrategyTypeID &&
                                (n = (0, h.Z)(
                                  (0, h.Z)({}, t),
                                  {},
                                  { couponRealPrice: t.couponPrice * e }
                                ));
                          return n;
                        },
                      },
                      {
                        key: "handleCountPrice",
                        value: function () {
                          var e,
                            t,
                            i,
                            n,
                            o,
                            a,
                            s,
                            c,
                            r,
                            l,
                            u,
                            d,
                            m,
                            p,
                            f,
                            g,
                            v,
                            k,
                            b,
                            C,
                            S,
                            w,
                            T,
                            P,
                            N,
                            I,
                            Z,
                            x,
                            B = this,
                            D = this.state,
                            A = D.productLine,
                            _ = D.serviceChargeInfo,
                            X = D.reversePassengerInfo,
                            L = D.ticketPriceInfo,
                            O = D.isDiTuiSource,
                            R = D.insurePackageInfo,
                            z = void 0 === R ? {} : R,
                            E = D.couponInfo,
                            F = D.vehicleMode,
                            U = D.discountInfo,
                            j = D.shiftInfo,
                            G = D.isNoRealNameBookingMode,
                            H = D.redPacketBriefInfo,
                            W = D.isRedPackageChecked,
                            K = D.isNotUseCoupon,
                            J = D.memberProductInfo,
                            Y = D.specialCouponPkg,
                            q =
                              (null ===
                                (e = this.$noRealNameBookingComponent) ||
                              void 0 === e
                                ? void 0
                                : e.getPassengerLength()) || 0,
                            $ = {},
                            Q = {},
                            ee = {},
                            te = {},
                            ie = {},
                            ne = [],
                            oe = null,
                            ae = null,
                            se = null,
                            ce = { price: 0, count: 0, title: "汽车票红包" },
                            re = (0, h.Z)(
                              (0, h.Z)({}, _),
                              {},
                              {
                                count: G
                                  ? q
                                  : X.filter(function (e) {
                                      return (
                                        e.isActive && "X" != e.passengerType
                                      );
                                    }).length,
                              }
                            ),
                            le = 0,
                            ue =
                              L.some(function (e) {
                                return 2 === e.ticketType;
                              }) && !G,
                            de =
                              L.some(function (e) {
                                return 3 === e.ticketType;
                              }) && !G,
                            he = L.some(function (e) {
                              return 10 === e.ticketType;
                            }),
                            me = this.state.supportSwitchSubTicket,
                            pe = this.state.isSpecialTicket,
                            fe = (
                              (null == j ? void 0 : j.privilegeItems) || []
                            ).find(function (e) {
                              return "限时出行补贴" === e.tag;
                            }),
                            ge = !!fe;
                          if ("carpool" == F)
                            ($ = {
                              name: "拼车",
                              price: me
                                ? L.filter(function (e) {
                                    return (
                                      2 !== e.ticketType && 3 !== e.ticketType
                                    );
                                  })[0].originPrice
                                : L.filter(function (e) {
                                    return (
                                      2 !== e.ticketType && 3 !== e.ticketType
                                    );
                                  })[0].salePrice,
                              salePrice: L.filter(function (e) {
                                return 2 !== e.ticketType && 3 !== e.ticketType;
                              })[0].salePrice,
                              originPrice: L.filter(function (e) {
                                return 2 !== e.ticketType && 3 !== e.ticketType;
                              })[0].originPrice,
                              count: G
                                ? q
                                : X.filter(function (e) {
                                    return e.isActive;
                                  }).length,
                              unit: "张",
                            }),
                              (le =
                                null === (Z = le) || void 0 === Z
                                  ? void 0
                                  : Z.zt_add(
                                      null === (x = $.price) || void 0 === x
                                        ? void 0
                                        : x.zt_multiply($.count)
                                    ));
                          else if ("charter" == F) {
                            var ve,
                              ke,
                              be = me
                                ? L.filter(function (e) {
                                    return (
                                      2 !== e.ticketType && 3 !== e.ticketType
                                    );
                                  })[0].originPrice
                                : L.filter(function (e) {
                                    return (
                                      2 !== e.ticketType && 3 !== e.ticketType
                                    );
                                  })[0].salePrice;
                            ($ = {
                              name: "包车（".concat(
                                X.filter(function (e) {
                                  return e.isActive;
                                }).length,
                                "辆）"
                              ),
                              price: be,
                              salePrice: L.filter(function (e) {
                                return 2 !== e.ticketType && 3 !== e.ticketType;
                              })[0].salePrice,
                              originPrice: L.filter(function (e) {
                                return 2 !== e.ticketType && 3 !== e.ticketType;
                              })[0].originPrice,
                              count: G
                                ? q
                                : X.filter(function (e) {
                                    return e.isActive;
                                  }).length,
                              unit: "",
                            }),
                              (le =
                                null === (ve = le) || void 0 === ve
                                  ? void 0
                                  : ve.zt_add(
                                      null === (ke = $.price) || void 0 === ke
                                        ? void 0
                                        : ke.zt_multiply($.count)
                                    ));
                          } else {
                            var Ce, Se, we, ye, Te, Pe, Ne, Ie;
                            if (he)
                              ($ = {
                                name: "票价",
                                price: me
                                  ? L.filter(function (e) {
                                      return 10 === e.ticketType;
                                    })[0].originPrice
                                  : L.filter(function (e) {
                                      return 10 === e.ticketType;
                                    })[0].salePrice,
                                salePrice: L.filter(function (e) {
                                  return 10 === e.ticketType;
                                })[0].salePrice,
                                originPrice: L.filter(function (e) {
                                  return 10 === e.ticketType;
                                })[0].originPrice,
                                count: G
                                  ? q
                                  : X.filter(function (e) {
                                      return (
                                        e.isActive &&
                                        "C" !== e.passengerType &&
                                        "X" !== e.passengerType
                                      );
                                    }).length,
                                unit: "张",
                              }),
                                (le =
                                  null === (Ce = le) || void 0 === Ce
                                    ? void 0
                                    : Ce.zt_add(
                                        null === (Se = $.price) || void 0 === Se
                                          ? void 0
                                          : Se.zt_multiply($.count)
                                      ));
                            else
                              ($ = {
                                name: "成人票",
                                price: me
                                  ? L.filter(function (e) {
                                      return (
                                        2 !== e.ticketType && 3 !== e.ticketType
                                      );
                                    })[0].originPrice
                                  : L.filter(function (e) {
                                      return (
                                        2 !== e.ticketType && 3 !== e.ticketType
                                      );
                                    })[0].salePrice,
                                salePrice: L.filter(function (e) {
                                  return (
                                    2 !== e.ticketType && 3 !== e.ticketType
                                  );
                                })[0].salePrice,
                                originPrice: L.filter(function (e) {
                                  return (
                                    2 !== e.ticketType && 3 !== e.ticketType
                                  );
                                })[0].originPrice,
                                count: G
                                  ? q
                                  : X.filter(function (e) {
                                      return (
                                        e.isActive &&
                                        "C" !== e.passengerType &&
                                        "X" !== e.passengerType
                                      );
                                    }).length,
                                unit: "张",
                              }),
                                (le =
                                  null === (we = le) || void 0 === we
                                    ? void 0
                                    : we.zt_add(
                                        null === (ye = $.price) || void 0 === ye
                                          ? void 0
                                          : ye.zt_multiply($.count)
                                      ));
                            ue &&
                              ((Q = {
                                name: "儿童票",
                                price: L.filter(function (e) {
                                  return 2 === e.ticketType;
                                })[0].salePrice,
                                originPrice: L.filter(function (e) {
                                  return 2 === e.ticketType;
                                })[0].originPrice,
                                count: G
                                  ? 0
                                  : X.filter(function (e) {
                                      return (
                                        e.isActive && "C" === e.passengerType
                                      );
                                    }).length,
                                unit: "张",
                                isActive:
                                  X.filter(function (e) {
                                    return (
                                      e.isActive && "C" === e.passengerType
                                    );
                                  }).length > 0,
                              }),
                              (le =
                                null === (Te = le) || void 0 === Te
                                  ? void 0
                                  : Te.zt_add(
                                      null === (Pe = Q.price) || void 0 === Pe
                                        ? void 0
                                        : Pe.zt_multiply(Q.count)
                                    ))),
                              de &&
                                ((ee = {
                                  name: "免费携童",
                                  price: L.filter(function (e) {
                                    return 3 === e.ticketType;
                                  })[0].salePrice,
                                  originPrice: L.filter(function (e) {
                                    return 3 === e.ticketType;
                                  })[0].originPrice,
                                  count: G
                                    ? 0
                                    : X.filter(function (e) {
                                        return (
                                          e.isActive && "X" === e.passengerType
                                        );
                                      }).length,
                                  unit: "张",
                                  isActive:
                                    X.filter(function (e) {
                                      return (
                                        e.isActive && "X" === e.passengerType
                                      );
                                    }).length > 0,
                                }),
                                (le =
                                  null === (Ne = le) || void 0 === Ne
                                    ? void 0
                                    : Ne.zt_add(
                                        null === (Ie = ee.price) ||
                                          void 0 === Ie
                                          ? void 0
                                          : Ie.zt_multiply(ee.count)
                                      )));
                          }
                          if (
                            ((I = le),
                            Object.keys(z).length > 0
                              ? ((te = {
                                  name: z.title || "保险",
                                  price: z.insurePackagePrice,
                                  count: ($.count || 0) + (Q.count || 0),
                                }),
                                (le =
                                  null === (f = le) || void 0 === f
                                    ? void 0
                                    : f.zt_add(
                                        null === (g = re.price) || void 0 === g
                                          ? void 0
                                          : g.zt_multiply(re.count),
                                        null === (v = z.insurePackagePrice) ||
                                          void 0 === v
                                          ? void 0
                                          : v.zt_multiply(
                                              null === (k = $.count || 0) ||
                                                void 0 === k
                                                ? void 0
                                                : k.zt_add(Q.count)
                                            )
                                      )))
                              : (le =
                                  null === (b = le) || void 0 === b
                                    ? void 0
                                    : b.zt_add(
                                        null === (C = re.price) || void 0 === C
                                          ? void 0
                                          : C.zt_multiply(re.count)
                                      )),
                            !y.default.isH5Hzbm &&
                              this.state.XCouponElement &&
                              this.state.customSelectXCoupons.length &&
                              ((ne = this.state.customSelectXCoupons.map(
                                function (e) {
                                  var t = (
                                    B.state.XCouponElement.attachPackages || []
                                  ).find(function (t) {
                                    return t.packageCode === e;
                                  });
                                  if (!se) {
                                    var i = (t.includeProducts || []).find(
                                      function (e) {
                                        return (
                                          e &&
                                          e.productCostPrice &&
                                          "coupon" === e.productType
                                        );
                                      }
                                    );
                                    se = i;
                                  }
                                  return {
                                    name: t.title || "优惠券",
                                    price: t.payShowPrice,
                                    count: 1,
                                  };
                                }
                              )),
                              (le =
                                null === (S = le) || void 0 === S
                                  ? void 0
                                  : S.zt_add(
                                      ne.reduce(function (e, t) {
                                        return null == e
                                          ? void 0
                                          : e.zt_add(t.price);
                                      }, 0)
                                    ))),
                            se &&
                              (le =
                                null === (w = le) || void 0 === w
                                  ? void 0
                                  : w.zt_sub(se.productCostPrice)),
                            3 == A && j.deductionAmount && j.memberGrade)
                          ) {
                            var Ze,
                              xe = G
                                ? q
                                : X.filter(function (e) {
                                    return e.isActive;
                                  }).length;
                            ie = {
                              name: "会员立减",
                              amount: j.deductionAmount,
                              count: xe,
                              total:
                                null === (Ze = j.deductionAmount) ||
                                void 0 === Ze
                                  ? void 0
                                  : Ze.zt_multiply(xe),
                            };
                          }
                          if (ge) {
                            var Be,
                              Ve,
                              De = G
                                ? q
                                : X.filter(function (e) {
                                    return e.isActive && "X" != e.passengerType;
                                  }).length;
                            (oe = (0, h.Z)(
                              (0, h.Z)({}, fe),
                              {},
                              { count: De, title: fe.tag }
                            )),
                              (le =
                                null === (Be = le) || void 0 === Be
                                  ? void 0
                                  : Be.zt_sub(
                                      null === (Ve = oe.price) || void 0 === Ve
                                        ? void 0
                                        : Ve.zt_multiply(oe.count)
                                    ));
                          }
                          pe &&
                            me &&
                            ((ae = {
                              price:
                                null === (T = $.originPrice) || void 0 === T
                                  ? void 0
                                  : T.zt_sub($.salePrice),
                              count: $.count,
                              title: "特价票优惠",
                            }),
                            (le =
                              null === (P = le) || void 0 === P
                                ? void 0
                                : P.zt_sub(
                                    null === (N = ae.price) || void 0 === N
                                      ? void 0
                                      : N.zt_multiply(ae.count)
                                  )));
                          var Ae = {};
                          if (
                            (!y.default.isH5Hzbm &&
                              Array.isArray(E) &&
                              E.length > 0 &&
                              !se &&
                              !K &&
                              (Ae = this.filterMaxPriceCoupon(le, E, I)),
                            !y.default.isH5Hzbm && H && j.isOpenXcxRedPacket)
                          ) {
                            var _e,
                              Me = Math.min(
                                1,
                                Math.min(H.orderQuota, H.remainAmount)
                              );
                            (null ===
                              (_e = (ce = (0, h.Z)(
                                (0, h.Z)({}, ce),
                                {},
                                { price: Me, count: W ? 1 : 0 }
                              )).price) || void 0 === _e
                              ? void 0
                              : _e.zt_multiply(ce.count)) >= le &&
                              W &&
                              ((0, M.showToast)("使⽤红包后⽀付⾦额需⼤于0元"),
                              (ce.count = 0));
                          }
                          var Xe,
                            Le =
                              null === (t = this.$LotteryFreeOrderProduct) ||
                              void 0 === t
                                ? void 0
                                : t.getPriceInfo();
                          (le =
                            null === (i = le) || void 0 === i
                              ? void 0
                              : i.zt_add(
                                  null == Le ||
                                    null === (n = Le.price) ||
                                    void 0 === n
                                    ? void 0
                                    : n.zt_multiply(
                                        null == Le ? void 0 : Le.count
                                      )
                                )),
                            V.Z.isNotEmptyObj(J) &&
                              (le =
                                null === (Xe = le) || void 0 === Xe
                                  ? void 0
                                  : Xe.zt_add(J.payPrice));
                          var Oe,
                            Re = [];
                          V.Z.isNotEmptyObj(Y) &&
                            (null === (Oe = Y.couponList) ||
                              void 0 === Oe ||
                              Oe.forEach(function (e) {
                                var t;
                                e.isSelected &&
                                  ((le =
                                    null === (t = le) || void 0 === t
                                      ? void 0
                                      : t.zt_add(e.payShowPrice)),
                                  Re.push(e));
                              }));
                          var ze = this.getAvailableCouponList(le, I);
                          this.setState({
                            priceDetailInfo: {
                              ticketTotal: I,
                              adults: $,
                              childs: Q,
                              takeChilds: ee,
                              insurances: te,
                              xCoupons: ne,
                              serviceChargeList: re,
                              serviceAllowance: oe,
                              specialTicketDiscount: ae,
                              couponPrice: Ae.couponRealPrice || 0,
                              savedPrice: Ae.couponRealPrice || 0,
                              xCouponDiscount: se,
                              discountInfo: U,
                              memberReducts: ie,
                              isDiTuiSource: O,
                              redPackageDiscount: ce,
                              lotteryFreeOrder: Le,
                              memberProductInfo: J,
                              selectedSpecialCouponList: Re,
                            },
                            feeTotal:
                              (null === (o = le) || void 0 === o
                                ? void 0
                                : o.zt_sub(
                                    Ae.couponRealPrice,
                                    ie.total,
                                    null === (a = ce) ||
                                      void 0 === a ||
                                      null === (s = a.count) ||
                                      void 0 === s
                                      ? void 0
                                      : s.zt_multiply(ce.price)
                                  )) || 0,
                            savedPrice:
                              (null === (c = Ae.couponRealPrice) || void 0 === c
                                ? void 0
                                : c.zt_add(
                                    null === (r = se) || void 0 === r
                                      ? void 0
                                      : r.productCostPrice,
                                    null === (l = oe) ||
                                      void 0 === l ||
                                      null === (u = l.price) ||
                                      void 0 === u
                                      ? void 0
                                      : u.zt_multiply(oe.count),
                                    ie.total,
                                    null === (d = ae) ||
                                      void 0 === d ||
                                      null === (m = d.price) ||
                                      void 0 === m
                                      ? void 0
                                      : m.zt_multiply(ae.count)
                                  )) || 0,
                            couponCodeSelect: Ae.couponCode,
                            couponSelectedInfo: Ae,
                            adults: $,
                            takeChilds: ee,
                            isRedPackageChecked:
                              (null === (p = ce) || void 0 === p
                                ? void 0
                                : p.count) > 0,
                            availCouponLen: ze.length,
                          });
                        },
                      },
                      {
                        key: "createOrderParams",
                        value: (function () {
                          var e = (0, d.Z)(
                            (0, u.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o,
                                a,
                                s,
                                c,
                                r,
                                l,
                                d,
                                m,
                                p,
                                f,
                                g,
                                v,
                                k,
                                b,
                                C,
                                S,
                                w,
                                y,
                                T,
                                N,
                                I,
                                Z,
                                x,
                                B,
                                D,
                                A,
                                _,
                                M,
                                X,
                                L,
                                O,
                                R,
                                z,
                                E,
                                F,
                                U,
                                j,
                                G,
                                H,
                                W,
                                K,
                                J,
                                Y,
                                q = this;
                              return (0, u.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((d = this.state),
                                          (m = d.utmSource),
                                          (p = d.shiftInfo),
                                          (f = d.productLine),
                                          (g = d.ticketPicker),
                                          (v = d.ticketPickTel),
                                          (k = d.reversePassengerInfo),
                                          (b = d.insurePackageInfo),
                                          (C = d.insureName),
                                          (S = d.insureId),
                                          (w = d.couponInfo),
                                          (y = d.couponCodeSelect),
                                          (T = d.isNoRealNameBookingMode),
                                          (N = d.priceDetailInfo),
                                          (I = d.memberCouponPkgInfo),
                                          (Z = d.xMemberCoupons),
                                          (x = d.hasShowModalInsurePackageInfo),
                                          (B = d.memberProductInfo),
                                          (D = d.specialCouponPkg),
                                          (A = d.limitTimeCouponInfo),
                                          (_ = d.isSelectedLimitTimeCoupon),
                                          (M = d.dataToken),
                                          (X = k.filter(function (e) {
                                            return e.isActive;
                                          }).length),
                                          (L = w
                                            .filter(function (e) {
                                              return e.couponCode === y;
                                            })
                                            .map(function (e) {
                                              return {
                                                couponCode: e.couponCode,
                                                promotionId: e.promotionId,
                                              };
                                            })[0]),
                                          (O = b && Object.keys(b).length > 0),
                                          (R = k
                                            .filter(function (e) {
                                              return e.isActive;
                                            })
                                            .map(function (e) {
                                              var t = e.idcards.map(function (
                                                e
                                              ) {
                                                return {
                                                  visaDate: "",
                                                  taiwanEntry: "",
                                                  idType: e.text,
                                                  chinaEntry: "",
                                                  cardCount: "",
                                                  effectiveDate: "",
                                                  idNum: e.CardNo,
                                                };
                                              });
                                              return {
                                                mobile: e.MobilePhone,
                                                idCard: t,
                                                address: e.DetailAddress,
                                                fetcher: g && g.id == e.id,
                                                gender: e.Gender,
                                                passengerType:
                                                  "X" == e.PassengerType
                                                    ? "TC"
                                                    : e.passengerType,
                                                birth: e.birthday || "",
                                                nationality:
                                                  e.nationality || "",
                                                firstName: e.ENFirstName || "",
                                                name: e.name,
                                                lastName: e.ENLastName || "",
                                                policyHolder:
                                                  O && C && S
                                                    ? {
                                                        name: C,
                                                        lastName:
                                                          e.ENLastName || "",
                                                        firstName:
                                                          e.ENFirstName || "",
                                                        idType:
                                                          e.idcard.text || "",
                                                        idNum: S,
                                                      }
                                                    : null,
                                              };
                                            })),
                                          (z = P.Z.getUnionData()),
                                          (E =
                                            this.state.customStationInfo || {}),
                                          (F = E.departure),
                                          (U = E.destination),
                                          (j = O
                                            ? [
                                                {
                                                  packageCode:
                                                    b.activityId || "0",
                                                  buyNumber: X,
                                                  page: 2,
                                                  channelId: b.channelId || 1,
                                                },
                                              ]
                                            : []),
                                          this.state.XCouponElement &&
                                            this.state.customSelectXCoupons
                                              .length &&
                                            this.state.customSelectXCoupons.forEach(
                                              function (e) {
                                                j.push({
                                                  packageCode: e,
                                                  buyNumber: 1,
                                                  page: 2,
                                                  channelId:
                                                    q.state.XCouponElement
                                                      .channelId,
                                                });
                                              }
                                            ),
                                          I &&
                                            Z.length &&
                                            Z.forEach(function (e) {
                                              j.push({
                                                packageCode: e,
                                                buyNumber: 1,
                                                page: 2,
                                                channelId: I.channelId,
                                              });
                                            }),
                                          !this.state.saledCouponPackageInfo ||
                                            !this.state.saledCouponPackageInfo
                                              .isSupportSaled)
                                        ) {
                                          e.next = 15;
                                          break;
                                        }
                                        return (
                                          (e.next = 13),
                                          this.selectSaledCouponPackagePromise()
                                        );
                                      case 13:
                                        e.sent &&
                                          j.push({
                                            packageCode:
                                              this.state.saledCouponPackageInfo
                                                .detail.packageCode,
                                            buyNumber: 1,
                                            page: 2,
                                            channelId:
                                              this.state.saledCouponPackageInfo
                                                .channelInfo.channelId,
                                          });
                                      case 15:
                                        return (
                                          (G =
                                            null ===
                                              (t =
                                                this
                                                  .$LotteryFreeOrderProduct) ||
                                            void 0 === t
                                              ? void 0
                                              : t.getProduct()),
                                          (H =
                                            "true" ===
                                            (null == G ||
                                            null === (i = G.extraMap) ||
                                            void 0 === i
                                              ? void 0
                                              : i.alertFreeOrderWin)),
                                          (W = !(
                                            x ||
                                            _ ||
                                            this.checkMemberCouponModalShow() ||
                                            !H
                                          )),
                                          (e.next = 20),
                                          null ===
                                            (n =
                                              this.$LotteryFreeOrderProduct) ||
                                          void 0 === n
                                            ? void 0
                                            : n.getCheckStatus4Order({
                                                needTip: W,
                                              })
                                        );
                                      case 20:
                                        return (
                                          (K = e.sent) && j.push(K),
                                          V.Z.isNotEmptyObj(B) &&
                                            j.push({
                                              packageCode: B.packageCode,
                                              buyNumber: 1,
                                              page: 2,
                                              channelId: B.channelId,
                                            }),
                                          (J =
                                            (null == D ||
                                            null === (o = D.couponList) ||
                                            void 0 === o
                                              ? void 0
                                              : o.filter(function (e) {
                                                  return e.isSelected;
                                                })) || []).length > 0 &&
                                            J.forEach(function (e) {
                                              j.push({
                                                packageCode: e.packageCode,
                                                buyNumber: 1,
                                                page: 2,
                                                channelId: D.channelId,
                                              });
                                            }),
                                          V.Z.isNotEmptyObj(A) &&
                                            _ &&
                                            j.push({
                                              packageCode: A.packageCode,
                                              buyNumber: 1,
                                              page: 2,
                                              channelId: A.channelId,
                                            }),
                                          (Y = {
                                            productLine: f,
                                            __productLine:
                                              3 == f ? "point" : "bus",
                                            fromCity: p.fromCity,
                                            toCity: p.toCity,
                                            fromStation: p.fromStation,
                                            toStation: p.toStation,
                                            fromDate: p.fromDate,
                                            fromTime:
                                              this.state.custormFromTime ||
                                              this.options.fromTime,
                                            toDate: p.toDate,
                                            toTime: p.toTime,
                                            lineCode:
                                              1 === f ? p.symbol : p.busNumber,
                                            website: p.businessLicense.website,
                                            number: 1 === f ? p.busNumber : "",
                                            fetcher: T
                                              ? { contactMobile: v }
                                              : {
                                                  name: g.name,
                                                  lastName: g.ENLastName || "",
                                                  firstName:
                                                    g.ENFirstName || "",
                                                  idNum: g.cardNum,
                                                  idType: g.cardName || "",
                                                  contactMobile: v || "",
                                                  contactAreaCode:
                                                    g.CountryCode || "",
                                                  contactEmail:
                                                    g.contactEmail || "",
                                                  otherPhone:
                                                    g.MobilePhone || "",
                                                  otherAddress:
                                                    g.DetailAddress || "",
                                                },
                                            customFromTime:
                                              3 === p.fromTimeType
                                                ? this.state.custormFromTime ||
                                                  this.options.fromTime
                                                : "",
                                            passengers: T ? void 0 : R,
                                            union: {
                                              utmSource: m,
                                              allianceid: "" + z.aid,
                                              sid: "" + z.sid,
                                            },
                                            couponInfo: y ? L : null,
                                            appendProductList: j,
                                            customStationInfo: (0, h.Z)(
                                              (0, h.Z)(
                                                {},
                                                F || {
                                                  customDepartureStation: "",
                                                  customDepartureAddress: "",
                                                  customDepartureCoordinateX:
                                                    "",
                                                  customDepartureCoordinateY:
                                                    "",
                                                }
                                              ),
                                              U || {
                                                customDestinationStation: "",
                                                customDestinationAddress: "",
                                                customDestinationCoordinateX:
                                                  "",
                                                customDestinationCoordinateY:
                                                  "",
                                              }
                                            ),
                                            isSpecialTicket:
                                              1 === this.state.productLine
                                                ? this.state.isSpecialTicket
                                                : void 0,
                                            passengerNum:
                                              null ===
                                                (a =
                                                  this
                                                    .$noRealNameBookingComponent) ||
                                              void 0 === a
                                                ? void 0
                                                : a.getPassengerLength(),
                                            trackToken: O
                                              ? null ===
                                                  (s = this.InsuranceRecord) ||
                                                void 0 === s
                                                ? void 0
                                                : s.getTrackId()
                                              : "",
                                            redPackage: p.isOpenXcxRedPacket
                                              ? null == N ||
                                                null ===
                                                  (c = N.redPackageDiscount) ||
                                                void 0 === c ||
                                                null === (r = c.price) ||
                                                void 0 === r
                                                ? void 0
                                                : r.zt_multiply(
                                                    null == N ||
                                                      null ===
                                                        (l =
                                                          N.redPackageDiscount) ||
                                                      void 0 === l
                                                      ? void 0
                                                      : l.count
                                                  )
                                              : 0,
                                            sourceId:
                                              this.sourceId || "BUS_Null_Null",
                                            dataToken: M,
                                          }),
                                          console.log(Y),
                                          e.abrupt("return", Y)
                                        );
                                      case 29:
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
                        key: "addOrder",
                        value: (function () {
                          var e = (0, d.Z)(
                            (0, u.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o,
                                a,
                                s,
                                c,
                                r,
                                l,
                                d,
                                h = arguments;
                              return (0, u.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            h.length > 0 && void 0 !== h[0]
                                              ? h[0]
                                              : "normal"),
                                          (e.prev = 1),
                                          (n = this.state),
                                          (o = n.insurePackageInfo),
                                          (a = void 0 === o ? {} : o),
                                          (s = n.insurePackageList),
                                          (c = n.modalInsurePackageInfo),
                                          (r = void 0 === c ? {} : c),
                                          (l = n.isSelectedModalInsurePackage),
                                          (e.next = 5),
                                          null === (i = this.$PersonSaveTip) ||
                                          void 0 === i
                                            ? void 0
                                            : i.checkProtocolIsAgreed()
                                        );
                                      case 5:
                                        if (this.checkInput()) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          s &&
                                            !s.some(function (e) {
                                              return e.isActive;
                                            }) &&
                                            this.setState({
                                              insurePackageInfo: {},
                                            }),
                                          e.abrupt("return")
                                        );
                                      case 9:
                                        if (
                                          !(
                                            "actionA" === t &&
                                            Object.keys(a).length > 0
                                          )
                                        ) {
                                          e.next = 18;
                                          break;
                                        }
                                        if (!this.checkHasAdult()) {
                                          e.next = 13;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.onToggleGuaModal(!0)
                                        );
                                      case 13:
                                        if (l) {
                                          e.next = 18;
                                          break;
                                        }
                                        if (!this.checkLimitTimeCouponShow()) {
                                          e.next = 16;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 16:
                                        if (
                                          !this.checkMemberCouponModalShow()
                                        ) {
                                          e.next = 18;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 18:
                                        if ("actionB" !== t) {
                                          e.next = 25;
                                          break;
                                        }
                                        if (!this.checkLimitTimeCouponShow()) {
                                          e.next = 21;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 21:
                                        if (!(Object.keys(r).length > 0)) {
                                          e.next = 23;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.setState({
                                            isSuiteModalShow: !0,
                                            hasShowModalInsurePackageInfo: !0,
                                          })
                                        );
                                      case 23:
                                        if (
                                          !this.checkMemberCouponModalShow()
                                        ) {
                                          e.next = 25;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 25:
                                        if ("actionC" !== t) {
                                          e.next = 30;
                                          break;
                                        }
                                        if (!this.checkLimitTimeCouponShow()) {
                                          e.next = 28;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 28:
                                        if (
                                          !this.checkMemberCouponModalShow()
                                        ) {
                                          e.next = 30;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 30:
                                        return (
                                          (e.next = 32),
                                          this.createOrderParams()
                                        );
                                      case 32:
                                        (d = e.sent),
                                          this.orderAndPay(d),
                                          (e.next = 40);
                                        break;
                                      case 36:
                                        (e.prev = 36),
                                          (e.t0 = e.catch(1)),
                                          console.log(
                                            "add order failure",
                                            e.t0
                                          ),
                                          this.ubtDevTrace(
                                            "o_bus_mini_booking",
                                            {
                                              step: "add order failure",
                                              utmSource: this.state.utmSource,
                                              e: String(e.t0),
                                            }
                                          );
                                      case 40:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 36]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "checkMemberCouponModalShow",
                        value: function () {
                          var e = this.state,
                            t = e.customSelectXCoupons,
                            i = e.isDiTuiSource,
                            n = e.couponPkgData;
                          return !(
                            !(t.length <= 0 && i && n) ||
                            this.memberCouponPkgModalCount ||
                            (this.memberCouponPkgModalCount++,
                            this.doBusNewTraceInfoV2(
                              {
                                exposureType: "popup",
                                bizKey: "booking_dt_couponPop_show",
                                comment: "填写页-券包拦截弹窗曝光",
                              },
                              1
                            ),
                            this.setState({ isMemberCouponPkgModalShow: !0 }),
                            0)
                          );
                        },
                      },
                      {
                        key: "checkLimitTimeCouponShow",
                        value: function () {
                          var e,
                            t = this.state,
                            i = t.memberProductInfo,
                            n = t.limitTimeCouponInfo,
                            o = t.specialCouponPkg,
                            a = t.productLine,
                            s = t.fromStationInfo,
                            c = t.toStationInfo,
                            r = t.customStationInfo,
                            l = !0;
                          if (3 === a) {
                            var u =
                                (null == s ? void 0 : s.shuttleService) &&
                                !(null != r && r.departure),
                              d =
                                (null == c ? void 0 : c.shuttleService) &&
                                !(null != r && r.destination);
                            l = !u && !d;
                          }
                          var h =
                            null == o ||
                            null === (e = o.couponList) ||
                            void 0 === e
                              ? void 0
                              : e.some(function (e) {
                                  return e.isSelected;
                                });
                          return !(
                            !V.Z.isEmptyObject(i) ||
                            !V.Z.isNotEmptyObj(n) ||
                            h ||
                            !l ||
                            (this.setState({ isShowLimitTimeCouponDialog: !0 }),
                            0)
                          );
                        },
                      },
                      {
                        key: "orderAndPay",
                        value: function (e) {
                          var t = this;
                          (0, M.showLoading)("正在下单..."),
                            (0, se.FQ)(e)
                              .then(function (i) {
                                var n, o;
                                if (
                                  ((0, M.hideLoading)(),
                                  1 == (null == i ? void 0 : i.code) &&
                                    null != i &&
                                    null !== (n = i.data) &&
                                    void 0 !== n &&
                                    n.orderNumber)
                                )
                                  return (
                                    t.doOrderPay(i.data),
                                    void (
                                      e.trackToken &&
                                      (null === (o = t.InsuranceRecord) ||
                                        void 0 === o ||
                                        o.send())
                                    )
                                  );
                                3009 != (null == i ? void 0 : i.code)
                                  ? t.showMsg(
                                      (null == i ? void 0 : i.message) ||
                                        "提交订单失败，请重试"
                                    )
                                  : t.showMultiButtonDialog({
                                      title: "温馨提示",
                                      content:
                                        (null == i ? void 0 : i.message) ||
                                        "<p>当前用户已存在相同的出行订单，请确</p>认后支付！",
                                      leftButtonName: "取消",
                                      rightButtonName: "确认",
                                      maskClose: !1,
                                      onLeftButtonClick: function () {},
                                      onRightButtonClick: t.orderAndPay.bind(
                                        t,
                                        (0, h.Z)(
                                          (0, h.Z)({}, e),
                                          {},
                                          { continuePay: !0 }
                                        )
                                      ),
                                    });
                              })
                              .catch(function (e) {
                                console.log("error--------+", e);
                                var i = t.state,
                                  n = i.insuranceChannel,
                                  o = i.needClearInsure,
                                  a = i.isSelectedModalInsurePackage;
                                ("fill_accident_insurance" !== n ||
                                  ("fill_accident_insurance" === n && o)) &&
                                  t.setState({
                                    insurePackageInfo: {},
                                    needClearInsure: !1,
                                  }),
                                  a &&
                                    t.setState({
                                      isSelectedModalInsurePackage: !1,
                                    }),
                                  t.showMsg(
                                    e.message || "提交订单失败，请重试"
                                  ),
                                  t.ubtTrace(
                                    100985,
                                    e || { errorMsg: "未知错误" }
                                  ),
                                  (0, M.hideLoading)();
                              });
                        },
                      },
                      {
                        key: "doOrderPay",
                        value: (function () {
                          var e = (0, d.Z)(
                            (0, u.Z)().mark(function e(t) {
                              var i,
                                n,
                                o,
                                a,
                                s,
                                c,
                                r,
                                l,
                                d,
                                h,
                                m = this;
                              return (0, u.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = this.state),
                                          (n = i.insuranceChannel),
                                          (o = i.needClearInsure),
                                          (a = i.isSelectedModalInsurePackage),
                                          (s = i.hasShowModalInsurePackageInfo),
                                          (c = i.isSelectedLimitTimeCoupon),
                                          (r = t.orderNumber),
                                          (e.prev = 2),
                                          (e.next = 5),
                                          (0, A.WS)({
                                            orderNumber: r,
                                            paymentChannel: x.T2,
                                          })
                                        );
                                      case 5:
                                        null != (h = e.sent) &&
                                          null !== (l = h.data) &&
                                          void 0 !== l &&
                                          null !== (d = l.evokeCashier) &&
                                          void 0 !== d &&
                                          d.goodsId &&
                                          (0, T.VQ)({
                                            orderNumber: r,
                                            goodsId:
                                              h.data.evokeCashier.goodsId,
                                            business: "bus",
                                          })
                                            .then(function () {
                                              y.default.isWechat &&
                                                m.orderPayCallback(r),
                                                m.showToast(
                                                  "支付成功",
                                                  function () {
                                                    m.navigateToOrderDetail(
                                                      !0,
                                                      r
                                                    ),
                                                      m.setState({
                                                        insurePackageInfo: {},
                                                        isSelectedModalInsurePackage:
                                                          !1,
                                                        hasShowModalInsurePackageInfo:
                                                          !1,
                                                        isSelectedLimitTimeCoupon:
                                                          !1,
                                                      });
                                                    var e = Z.wF.get(),
                                                      t =
                                                        e &&
                                                        ("1" == e.isPlatNew ||
                                                          "1" ==
                                                            e.isBusLineNew ||
                                                          "1" ==
                                                            e.isPointLineNew);
                                                    (0, _.c$)(t);
                                                  }
                                                );
                                            })
                                            .catch(function (e) {
                                              var t;
                                              (t =
                                                "requestPayment:fail cancel" ==
                                                e.errMsg
                                                  ? "支付取消"
                                                  : "支付失败"),
                                                S().showModal({
                                                  title: "提示",
                                                  content: t || "支付失败",
                                                  showCancel: !1,
                                                }),
                                                ("fill_accident_insurance" !==
                                                  n ||
                                                  ("fill_accident_insurance" ===
                                                    n &&
                                                    o)) &&
                                                  m.setState({
                                                    insurePackageInfo: {},
                                                    needClearInsure: !1,
                                                  }),
                                                a &&
                                                  m.setState({
                                                    isSelectedModalInsurePackage:
                                                      !1,
                                                  }),
                                                s &&
                                                  m.setState({
                                                    hasShowModalInsurePackageInfo:
                                                      !1,
                                                  }),
                                                c &&
                                                  m.setState({
                                                    isSelectedLimitTimeCoupon:
                                                      !1,
                                                  });
                                            }),
                                          (e.next = 12);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(2)),
                                          console.log(e.t0);
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[2, 9]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "orderPayCallback",
                        value: function (e) {
                          (0, I.M9)({ isSaveSessionKey: 3, force: !0 }).then(
                            function (t) {
                              if (t.unionid) {
                                var i = { orderNumber: e, unionId: t.unionid };
                                (0, se.Ml)(i).then(
                                  function (e) {
                                    var t = e || {},
                                      i = t.code,
                                      n = t.message;
                                    if (1 !== i)
                                      return console.log("unionid 上传失败", n);
                                    console.log("unionid 上传成功");
                                  },
                                  function (e) {
                                    console.log(e);
                                  }
                                );
                              } else console.log("unionid 获取失败");
                            },
                            function (e) {
                              console.log("unionid 获取失败", e);
                            }
                          );
                        },
                      },
                      {
                        key: "checkInput",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isOnePassengerAdded,
                            n = t.adults,
                            o = t.takeChilds,
                            a = t.ticketPickTel,
                            s = t.feeTotal,
                            c = t.couponCodeSelect,
                            r = void 0 === c ? "" : c,
                            l = t.couponInfo,
                            u = void 0 === l ? [] : l,
                            d = t.reversePassengerInfo,
                            h = t.isNoRealNameBookingMode,
                            m =
                              (
                                u.find(function (e) {
                                  return e.couponCode === r;
                                }) || {}
                              ).couponPrice || 0;
                          if (h) {
                            if (!n.count)
                              return (
                                this.showToast({
                                  message: "请至少添加一名成人",
                                  icon: "none",
                                }),
                                !1
                              );
                            if (!a || !a.length)
                              return (
                                this.showToast(
                                  {
                                    message:
                                      "手机号不能为空，请填写正确的手机号",
                                    icon: "none",
                                  },
                                  function () {
                                    setTimeout(function () {
                                      var t;
                                      console.log("do foc"),
                                        null ===
                                          (t = e.$noRealNameBookingComponent) ||
                                          void 0 === t ||
                                          t.telFocus();
                                    }, 1e3);
                                  }
                                ),
                                !1
                              );
                            return /^[0-9]{11}$/.test(a)
                              ? (S().setStorage({
                                  key: "BUS_PHONE_NUMBER",
                                  data: a,
                                }),
                                !0)
                              : (this.showToast(
                                  {
                                    message: "请填写正确的手机号",
                                    icon: "none",
                                  },
                                  function () {
                                    setTimeout(function () {
                                      var t;
                                      console.log("do foc"),
                                        null ===
                                          (t = e.$noRealNameBookingComponent) ||
                                          void 0 === t ||
                                          t.telFocus();
                                    }, 1e3);
                                  }
                                ),
                                !1);
                          }
                          if (!i) return this.showMsg("请至少选择一名乘客"), !1;
                          if (!n.count)
                            return this.showMsg("请至少添加一名成人"), !1;
                          if (n.count < o.count)
                            return (
                              this.showMsg(
                                "携童数量不能超过成人，请增加成人票或修改票种"
                              ),
                              !1
                            );
                          if (!a || !a.length)
                            return (
                              this.showMsg(
                                "手机号不能为空，请填写正确的手机号"
                              ),
                              !1
                            );
                          if (/^[0-9]{11}$/.test(a)) {
                            if (
                              (S().setStorage({
                                key: "BUS_PHONE_NUMBER",
                                data: a,
                              }),
                              i && s <= 0 && m)
                            )
                              return this.showMsg(
                                "订单金额大于优惠金额才可以支付成功呦，换张券试试吧~"
                              );
                            var p = d.filter(function (e) {
                              return e.isActive;
                            });
                            return (
                              !p.some(function (e, t) {
                                return p.some(function (i, n) {
                                  return i.cardNum === e.cardNum && n !== t;
                                });
                              }) ||
                              (this.showMsg(
                                "乘客证件重复(同一证件只能购一张票)"
                              ),
                              !1)
                            );
                          }
                          this.showMsg("请填写正确的手机号");
                        },
                      },
                      {
                        key: "doSubscribeBeforeOrder",
                        value: (function () {
                          var e = (0, d.Z)(
                            (0, u.Z)().mark(function e() {
                              var t, i, n, o, a, s, c, r, l;
                              return (0, u.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          (t = this.state.isDiTuiSource) &&
                                          1 == this.state.productLine
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          console.log(
                                            "非地推渠道/非汽车产线不授权消息:",
                                            t,
                                            this.state.productLine
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 4:
                                        return (
                                          this.ubtDevTrace(
                                            "o_bus_mini_booking",
                                            {
                                              step: "doSubscribeBeforeOrder111111",
                                            }
                                          ),
                                          (0, M.showLoading)(),
                                          (e.prev = 6),
                                          (i =
                                            "zx" === y.default.jetpack
                                              ? Je
                                              : "dt" === y.default.jetpack
                                              ? Ye
                                              : []),
                                          this.ubtDevTrace(
                                            "o_bus_mini_booking",
                                            {
                                              step: "doSubscribeBeforeOrder222222",
                                              temps: i,
                                            }
                                          ),
                                          (e.next = 11),
                                          V.Z.getSubscribe(
                                            i.map(function (e) {
                                              return e.tempId;
                                            })
                                          )
                                        );
                                      case 11:
                                        if (
                                          ((n = e.sent),
                                          (o = n.mainSwitch),
                                          (a = n.unKnownList),
                                          (s = void 0 === a ? [] : a),
                                          (c = n.rejectList),
                                          (r = void 0 === c ? [] : c),
                                          this.ubtDevTrace(
                                            "o_bus_mini_booking",
                                            {
                                              step: "doSubscribeBeforeOrder333333",
                                            }
                                          ),
                                          console.log(
                                            "是否授权小程序消息订阅",
                                            o
                                          ),
                                          console.log("unKnownList", s),
                                          console.log("rejectList", r),
                                          (l = i
                                            .filter(function (e) {
                                              return s.includes(e.tempId);
                                            })
                                            .map(function (e) {
                                              return e.tempId;
                                            })),
                                          !o || !l.length)
                                        ) {
                                          e.next = 25;
                                          break;
                                        }
                                        return (
                                          (e.next = 25),
                                          V.Z.doSubscribe(
                                            l,
                                            "".concat(
                                              y.default.jetpack,
                                              "_MiniProgram_BUS_Book"
                                            )
                                          )
                                        );
                                      case 25:
                                        this.ubtDevTrace("o_bus_mini_booking", {
                                          step: "doSubscribeBeforeOrder44444",
                                        }),
                                          (0, M.hideLoading)(),
                                          (e.next = 34);
                                        break;
                                      case 29:
                                        (e.prev = 29),
                                          (e.t0 = e.catch(6)),
                                          (0, M.hideLoading)(),
                                          console.log(e.t0),
                                          this.ubtDevTrace(
                                            "o_bus_mini_booking",
                                            {
                                              step: "doSubscribeBeforeOrder",
                                              utmSource: this.state.utmSource,
                                              e: String(e.t0),
                                            }
                                          );
                                      case 34:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[6, 29]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onOrderSubmit",
                        value: (function () {
                          var e = (0, d.Z)(
                            (0, u.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                o,
                                a,
                                s,
                                c = this,
                                r = arguments;
                              return (0, u.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            r.length > 0 && void 0 !== r[0]
                                              ? r[0]
                                              : "modeA"),
                                          (e.prev = 1),
                                          this.ubtDevTrace(
                                            "o_bus_mini_booking",
                                            {
                                              step: "onOrderSubmit111111",
                                              type: t,
                                            }
                                          ),
                                          (e.next = 5),
                                          this.doSubscribeBeforeOrder()
                                        );
                                      case 5:
                                        this.ubtDevTrace("o_bus_mini_booking", {
                                          step: "onOrderSubmit22222",
                                        }),
                                          (i = this.state),
                                          (n = i.btnInsurePackageInfo),
                                          (o = i.insurePackageInfo),
                                          "modeB" === t
                                            ? (this.ubtDevTrace(
                                                "o_bus_mini_booking",
                                                { step: "onOrderSubmit3333" }
                                              ),
                                              this.doBusTraceInfo(
                                                "xYesPayIcon",
                                                "立即支付”按钮  默搭"
                                              ),
                                              this.setState(
                                                { insurePackageInfo: n },
                                                function () {
                                                  var e,
                                                    t = {
                                                      desc: "勾选保险产品",
                                                      type: "汽车意外险",
                                                      title: ""
                                                        .concat(n.title)
                                                        .concat(
                                                          n.insurePackagePrice,
                                                          "元/份"
                                                        ),
                                                    };
                                                  null ===
                                                    (e = c.InsuranceRecord) ||
                                                    void 0 === e ||
                                                    e.track(t),
                                                    c.addOrder("actionA");
                                                }
                                              ))
                                            : "modeC" === t
                                            ? (this.doBusTraceInfo(
                                                "xNoPayIcon",
                                                "普通预定”按钮，默搭"
                                              ),
                                              (s = {
                                                desc: "取消勾选保险产品",
                                                type: "汽车意外险",
                                                title: ""
                                                  .concat(n.title)
                                                  .concat(
                                                    n.insurePackagePrice,
                                                    "元/份"
                                                  ),
                                              }),
                                              null ===
                                                (a = this.InsuranceRecord) ||
                                                void 0 === a ||
                                                a.track(s),
                                              this.setState(
                                                { insurePackageInfo: {} },
                                                function () {
                                                  c.addOrder("actionB");
                                                }
                                              ))
                                            : (this.doBusNewTraceInfoV2(
                                                {
                                                  bizKey: "noXPayIcon",
                                                  comment:
                                                    "去支付”按钮，非默搭",
                                                  clickType: x.uh.confirmClick,
                                                },
                                                2
                                              ),
                                              o && Object.keys(o).length > 0
                                                ? this.addOrder("actionA")
                                                : this.addOrder("actionB")),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(1)),
                                          this.ubtDevTrace(
                                            "o_bus_mini_booking",
                                            {
                                              step: "onOrderSubmit failure",
                                              utmSource: this.state.utmSource,
                                              e: String(e.t0),
                                            }
                                          );
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 10]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "navigateToOrderDetail",
                        value: function (e, t) {
                          var i = this,
                            n = this.state,
                            o = n.productLine,
                            a = n.tabType,
                            s = n.utmSource,
                            c = n.fromStation,
                            r = 1 * (this.state.isDiTuiSource && 1 === o);
                          (0, M.showLoading)(),
                            setTimeout(function () {
                              (0, M.hideLoading)(),
                                t &&
                                  i.navigateTo({
                                    url: "/pages/bus/neworderdetail/orderdetail?oid="
                                      .concat(t, "&isNeedShowMP=")
                                      .concat(r, "&tabType=")
                                      .concat(a, "&fromBookFlag=1&utmSource=")
                                      .concat(i.state.utmSource, "&sourceId=")
                                      .concat(i.sourceId, "&fromStation=")
                                      .concat(c, "&utmSource=")
                                      .concat(s),
                                  });
                            }, 1e3);
                        },
                      },
                      {
                        key: "onTogglePriceDetailModal",
                        value: function () {
                          this.doBusTraceInfo(
                            "payPriceDetail",
                            '"票价明细按钮"和支付按钮旁边的"明细上拉"按钮'
                          );
                          var e = this.state,
                            t = e.isPriceDetailModalShow;
                          if (!e.isOnePassengerAdded)
                            return S().showModal({
                              content: "请选择乘客",
                              confirmText: "确定",
                              showCancel: !1,
                            });
                          this.setState({ isPriceDetailModalShow: !t });
                        },
                      },
                      {
                        key: "showToast",
                        value: function (e, t) {
                          var i = this,
                            n = "成功",
                            o = "success",
                            a = 2e3;
                          "string" == typeof e
                            ? (n = e)
                            : ((n = e.message || "成功"),
                              (o = e.icon || "success"),
                              (a = e.duration || 2e3)),
                            S().showToast({
                              title: n,
                              icon: o,
                              duration: a,
                              mask: !1,
                              complete: function () {
                                t && t.call(i);
                              },
                            });
                        },
                      },
                      {
                        key: "showMsg",
                        value: function (e, t) {
                          var i = this,
                            n = e,
                            o = "提示";
                          "string" == typeof e
                            ? (n = e)
                            : ((n = e.message), (o = e.title || "提示")),
                            S().showModal({
                              title: o,
                              content: n,
                              showCancel: !1,
                              success: function () {
                                t && t.call(i);
                              },
                            });
                        },
                      },
                      {
                        key: "toBusOrderNotice",
                        value: function () {
                          this.toWeb({
                            url: "https://pages.c-ctrip.com/bus/seo/bookingNoticeZhixing.html",
                          }).call(this);
                        },
                      },
                      {
                        key: "toH5Page",
                        value: function (e) {
                          e.stopPropagation();
                          var t,
                            i = e.currentTarget.dataset.type;
                          (t =
                            "noAffix" === (void 0 === i ? "" : i)
                              ? "https://pages.c-ctrip.com/bus/seo/bookingNoticeZhixing.html"
                              : "https://pages.c-ctrip.com/bus-resource/ztinsurance/ZABXywx3-2.html"),
                            N.Z.twebview({ data: { url: t } });
                        },
                      },
                      {
                        key: "toDescPage",
                        value: function (e) {
                          N.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "onToggleFeeModal",
                        value: function (e) {
                          this.setState({ isFeeModalShow: e });
                        },
                      },
                      {
                        key: "getXListInfo",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.shiftInfo,
                            n = t.utmSource,
                            o = t.productLine,
                            a = t.isNoRealNameBookingMode,
                            s = t.isDiTuiSource,
                            c = j.c.getXProductParams(i, {
                              fromTime: i.fromTime,
                              utmSource: n,
                              productLine: o,
                              rewardChannel: !1,
                            }),
                            r = !a;
                          (0, se.OB)(c).then(function (t) {
                            if (
                              (e.responseTrace("getXListPromise", t),
                              1 === t.code)
                            ) {
                              var i = !1,
                                n = !1,
                                o = !1,
                                a = t.data[0].attachChannels,
                                c =
                                  null == a
                                    ? void 0
                                    : a.find(function (e) {
                                        var t;
                                        return (
                                          "group" === e.channelName &&
                                          (null === (t = e.attachPackages) ||
                                          void 0 === t
                                            ? void 0
                                            : t.length) > 0
                                        );
                                      });
                              a.forEach(function (t) {
                                var a, l, u;
                                switch (t.channelName) {
                                  case "fill_recommend_insurance":
                                    if (r) {
                                      var d = {
                                        channelId: t.channelId,
                                        activityId:
                                          t.attachPackages[0].packageCode,
                                        insurePackagePrice:
                                          t.attachPackages[0].payPrice,
                                        tag: t.attachPackages[0].tag,
                                        title: t.attachPackages[0].title,
                                      };
                                      e.setState({
                                        btnInsurePackageInfo: d,
                                        insuranceChannel: t.channelName,
                                      });
                                    }
                                    break;
                                  case "fill_accident_insurance":
                                    if (r) {
                                      var h,
                                        m,
                                        p,
                                        f,
                                        g,
                                        v =
                                          null ===
                                            (h =
                                              e.defaultSelectedXProductList) ||
                                          void 0 === h ||
                                          null ===
                                            (m = h.find(function (e) {
                                              return (
                                                e.channelId === t.channelId
                                              );
                                            })) ||
                                          void 0 === m
                                            ? void 0
                                            : m.packageCode,
                                        k =
                                          null === (p = t.attachPackages) ||
                                          void 0 === p
                                            ? void 0
                                            : p.find(function (e) {
                                                return e.packageCode === v;
                                              }),
                                        b =
                                          null === (f = t.attachPackages) ||
                                          void 0 === f
                                            ? void 0
                                            : f.map(function (i) {
                                                var n;
                                                null != i &&
                                                  null !== (n = i.extraMap) &&
                                                  void 0 !== n &&
                                                  n.note &&
                                                  (e.insuranceTips =
                                                    i.extraMap.note);
                                                var o =
                                                  null == i
                                                    ? void 0
                                                    : i.extraMap;
                                                return {
                                                  channelId: t.channelId,
                                                  activityId: i.packageCode,
                                                  desc: i.desc,
                                                  insurePackagePrice:
                                                    i.payPrice,
                                                  addInsurePrice:
                                                    null != k && k.payPrice
                                                      ? i.payPrice -
                                                        (null == k
                                                          ? void 0
                                                          : k.payPrice)
                                                      : 0,
                                                  title: i.title,
                                                  subTitle: i.subTitle,
                                                  tags: i.tags,
                                                  tag: i.tag,
                                                  followingFlag:
                                                    v === i.packageCode
                                                      ? 1
                                                      : i.followingFlag,
                                                  isActive:
                                                    v === i.packageCode ||
                                                    i.followingFlag,
                                                  descUrl: i.descUrl,
                                                  note:
                                                    null == o ? void 0 : o.note,
                                                  unClick:
                                                    (null == o
                                                      ? void 0
                                                      : o.unClick) || "",
                                                  beforeClick:
                                                    (null == o
                                                      ? void 0
                                                      : o.beforeClick) || "",
                                                  afterClick:
                                                    (null == o
                                                      ? void 0
                                                      : o.afterClick) ||
                                                    "明智之选",
                                                  defaultClick: Number(
                                                    null == o
                                                      ? void 0
                                                      : o.defaultClick
                                                  ),
                                                  insuranceIcon:
                                                    null == o ? void 0 : o.icon,
                                                  insuranceDescList:
                                                    j.c.transferInsuranceTags(
                                                      i.tags
                                                    ),
                                                };
                                              }),
                                        C = b.filter(function (e) {
                                          return e.followingFlag;
                                        })[0];
                                      (i = s && v),
                                        e.setState({
                                          insurePackageList: b,
                                          insurePackageInfo: C,
                                          insuranceChannel: t.channelName,
                                          isShowInsureModule:
                                            !i ||
                                            (null === (g = t.attachPackages) ||
                                            void 0 === g
                                              ? void 0
                                              : g.length) > 1,
                                          selectedInsuranceCodeFronListPage: v,
                                        });
                                    }
                                    break;
                                  case "fill_pop_window_insurance":
                                    if (r) {
                                      var S,
                                        w = t.attachPackages[0],
                                        y = {
                                          channelId: t.channelId,
                                          activityId: w.packageCode,
                                          desc: w.desc,
                                          insurePackagePrice: w.payPrice,
                                          title: w.title,
                                          subTitle: w.subTitle,
                                          tags: w.tags,
                                          tag: w.tag,
                                          followingFlag: w.followingFlag,
                                          isActive: w.followingFlag,
                                          descUrl: w.descUrl,
                                          note:
                                            (null == w ||
                                            null === (S = w.extraMap) ||
                                            void 0 === S
                                              ? void 0
                                              : S.note) || "",
                                          insuranceDescList:
                                            j.c.transferInsuranceTags(w.tags),
                                        };
                                      e.setState({ modalInsurePackageInfo: y });
                                    }
                                    break;
                                  case "grade_member_priv":
                                    c || e.handleGradeMemberProduct(t);
                                    break;
                                  case "free_free_order":
                                    c ||
                                      e.setState({
                                        lotteryFreeOrderProduct: t,
                                      });
                                    break;
                                  case "fill_h5_free_order":
                                    if (!c) {
                                      var T, P, N;
                                      if (
                                        (null ===
                                          (T = e.defaultSelectedXProductList) ||
                                        void 0 === T
                                          ? void 0
                                          : T.length) > 0
                                      ) {
                                        var I,
                                          Z,
                                          x =
                                            null ===
                                              (I =
                                                e.defaultSelectedXProductList.find(
                                                  function (e) {
                                                    return (
                                                      e.channelId ===
                                                      t.channelId
                                                    );
                                                  }
                                                )) || void 0 === I
                                              ? void 0
                                              : I.packageCode;
                                        x &&
                                          (null === (Z = t.attachPackages) ||
                                            void 0 === Z ||
                                            Z.forEach(function (e) {
                                              e.packageCode == x &&
                                                (e.followingFlag = 1);
                                            }));
                                      }
                                      (o =
                                        (null === (P = t.attachPackages) ||
                                        void 0 === P
                                          ? void 0
                                          : P.findIndex(function (e) {
                                              return 1 === e.followingFlag;
                                            })) > -1),
                                        e.setState({
                                          XCouponElement: t,
                                          isHaveFollowingEle: o,
                                          customSelectXCoupons:
                                            (null === (N = t.attachPackages) ||
                                            void 0 === N
                                              ? void 0
                                              : N.filter(function (e) {
                                                  return 1 == e.followingFlag;
                                                }).map(function (e) {
                                                  return e.packageCode;
                                                })) || [],
                                        });
                                    }
                                    break;
                                  case "group":
                                    e.handleCouponPkg(t);
                                    break;
                                  case "normal_member_priv":
                                    var B =
                                        null ===
                                          (a = e.defaultSelectedXProductList) ||
                                        void 0 === a ||
                                        null ===
                                          (l = a.find(function (e) {
                                            return e.channelId === t.channelId;
                                          })) ||
                                        void 0 === l
                                          ? void 0
                                          : l.packageCode,
                                      D =
                                        (null == t ||
                                        null === (u = t.attachPackages) ||
                                        void 0 === u
                                          ? void 0
                                          : u.find(function (e) {
                                              return e.packageCode === B;
                                            })) || {};
                                    V.Z.isNotEmptyObj(D) &&
                                      ((n = !0),
                                      e.setState({
                                        memberProductInfo: {
                                          channelId: t.channelId,
                                          packageCode: D.packageCode,
                                          title: D.title,
                                          payPrice: D.payShowPrice,
                                        },
                                      }));
                                    break;
                                  case "fill_ship_recommend_hotel":
                                    e.handleLimitTimeCoupon(t);
                                }
                              }),
                                (o || i || n) &&
                                  e.isDefaultSelectPas &&
                                  setTimeout(function () {
                                    e.handleCountPrice();
                                  }, 1e3),
                                y.default.isH5Hzbm ||
                                  c ||
                                  e.getCouponPackageWin(a);
                            }
                          });
                        },
                      },
                      {
                        key: "handleGradeMemberProduct",
                        value: function (e) {
                          var t,
                            i,
                            n,
                            o =
                              null == e ||
                              null === (t = e.attachPackages) ||
                              void 0 === t
                                ? void 0
                                : t.find(function (e) {
                                    return "1ZQCQYLB266C" === e.packageCode;
                                  }),
                            a = [];
                          if (
                            null != o &&
                            null !== (i = o.extraMap) &&
                            void 0 !== i &&
                            i.busCoupon
                          ) {
                            var s = JSON.parse(o.extraMap.busCoupon);
                            a.push(
                              (0, h.Z)(
                                (0, h.Z)({}, s),
                                {},
                                { type: "busCoupon" }
                              )
                            );
                          }
                          if (
                            null != o &&
                            null !== (n = o.extraMap) &&
                            void 0 !== n &&
                            n.hotelCoupon
                          ) {
                            var c = JSON.parse(o.extraMap.hotelCoupon);
                            a.push(
                              (0, h.Z)(
                                (0, h.Z)({}, c),
                                {},
                                { type: "hotelCoupon" }
                              )
                            );
                          }
                          var r =
                            (null == o ? void 0 : o.tags) &&
                            o.tags.find(function (e) {
                              return "title" === e.key;
                            });
                          o &&
                            this.setState({
                              memberCouponPkgInfo: e,
                              couponPkgData: {
                                title: (null == r ? void 0 : r.value) || "",
                                subTitle:
                                  (null == o ? void 0 : o.subTitle) || "",
                                payPrice: null == o ? void 0 : o.payPrice,
                                couponList: a,
                              },
                            });
                        },
                      },
                      {
                        key: "handleCouponPkg",
                        value: function (e) {
                          if (V.Z.isNotEmptyObj(e)) {
                            var t,
                              i,
                              n =
                                (null === (t = e.attachPackages) || void 0 === t
                                  ? void 0
                                  : t.length) || 0,
                              o =
                                null === (i = e.attachPackages) || void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      var t, i;
                                      return {
                                        packageCode: e.packageCode,
                                        title: e.title || "",
                                        name: e.subTitle || "",
                                        desc:
                                          (n > 1
                                            ? null === (t = e.tags) ||
                                              void 0 === t ||
                                              null ===
                                                (i = t.find(function (e) {
                                                  return "tag2" === e.key;
                                                })) ||
                                              void 0 === i
                                              ? void 0
                                              : i.value
                                            : e.tag) || "",
                                        payShowPrice: e.payShowPrice,
                                        showPrice: e.showPrice,
                                      };
                                    });
                            this.setState({
                              specialCouponPkg: {
                                channelId: e.channelId,
                                channelTitle: e.channelMainTitle || "",
                                channelIcon: e.channelIconUrl || "",
                                couponList: o,
                              },
                            });
                          }
                        },
                      },
                      {
                        key: "handleLimitTimeCoupon",
                        value: function (e) {
                          var t;
                          if (
                            V.Z.isNotEmptyObj(e) &&
                            (null === (t = e.attachPackages) || void 0 === t
                              ? void 0
                              : t.length) > 0
                          ) {
                            var i,
                              n,
                              o,
                              a,
                              s,
                              c = e.attachPackages[0],
                              r =
                                null == c ||
                                null === (i = c.desc) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      var t, i, n;
                                      return {
                                        name: e.title || "",
                                        desc:
                                          (null === (t = e.desc) || void 0 === t
                                            ? void 0
                                            : t[0]) || "",
                                        unit:
                                          (null === (i = e.desc) || void 0 === i
                                            ? void 0
                                            : i[1]) || "",
                                        price:
                                          (null === (n = e.desc) || void 0 === n
                                            ? void 0
                                            : n[2]) || "",
                                      };
                                    }),
                              l =
                                null == c ||
                                null === (n = c.tags) ||
                                void 0 === n ||
                                null ===
                                  (o = n.find(function (e) {
                                    return "cancel" === e.key;
                                  })) ||
                                void 0 === o
                                  ? void 0
                                  : o.value,
                              u =
                                null == c ||
                                null === (a = c.tags) ||
                                void 0 === a ||
                                null ===
                                  (s = a.find(function (e) {
                                    return "buy" === e.key;
                                  })) ||
                                void 0 === s
                                  ? void 0
                                  : s.value;
                            this.setState({
                              limitTimeCouponInfo: {
                                channelId: e.channelId,
                                packageCode: null == c ? void 0 : c.packageCode,
                                price: null == c ? void 0 : c.payShowPrice,
                                title: e.channelMainTitle || "",
                                subTitle: e.channelSubTitle || "",
                                couponList: r,
                                leftBtnName: l,
                                rightBtnName: u,
                              },
                            });
                          }
                        },
                      },
                      {
                        key: "onToggleGuaModal",
                        value: function (e) {
                          this.setState({ isGuaModalShow: e });
                        },
                      },
                      {
                        key: "checkHasAdult",
                        value: function () {
                          return this.state.reversePassengerInfo
                            .filter(function (e) {
                              return e.isActive;
                            })
                            .every(function (e) {
                              return j.c.getAge(e.cardNum) < 18;
                            });
                        },
                      },
                      {
                        key: "handleConfirmInsure",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            n = i.insuranceChannel,
                            o = i.btnInsurePackageInfo,
                            a = i.insurePackageInfo,
                            s = i.modalInsurePackageInfo,
                            c = i.isSelectedModalInsurePackage,
                            r = {},
                            l = !1;
                          a.channelId && a.channelId !== s.channelId
                            ? "fill_recommend_insurance" === n
                              ? ((r = o), (l = !0))
                              : (r = a)
                            : ((r = s), (l = !0)),
                            this.setState(
                              {
                                insureName: e.name,
                                insureId: e.cardNum,
                                isGuaModalShow: !1,
                                insurePackageInfo: r,
                                needClearInsure: l,
                              },
                              function () {
                                c ? t.addOrder() : t.addOrder("actionC");
                              }
                            );
                        },
                      },
                      {
                        key: "handleCancelInsure",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.insurePackageList,
                            n = t.isSelectedModalInsurePackage,
                            o = i.map(function (e) {
                              return (0,
                              h.Z)((0, h.Z)({}, e), {}, { isActive: !1 });
                            });
                          this.setState(
                            {
                              isGuaModalShow: !1,
                              insurePackageInfo: {},
                              insurePackageList: o,
                            },
                            function () {
                              e.handleCountPrice(),
                                n ? e.addOrder() : e.addOrder("actionC");
                            }
                          );
                        },
                      },
                      {
                        key: "onSuiteModalCancel",
                        value: function () {
                          var e = this;
                          this.setState(
                            { isSuiteModalShow: !1, insurePackageInfo: {} },
                            function () {
                              var t,
                                i,
                                n,
                                o = {
                                  desc: "取消勾选保险产品",
                                  type: "汽车意外险",
                                  title: ""
                                    .concat(
                                      null ===
                                        (t = e.state.modalInsurePackageInfo) ||
                                        void 0 === t
                                        ? void 0
                                        : t.title
                                    )
                                    .concat(
                                      null ===
                                        (i = e.state.modalInsurePackageInfo) ||
                                        void 0 === i
                                        ? void 0
                                        : i.insurePackagePrice,
                                      "元/份"
                                    ),
                                };
                              null === (n = e.InsuranceRecord) ||
                                void 0 === n ||
                                n.track(o),
                                e.addOrder();
                            }
                          );
                        },
                      },
                      {
                        key: "onSuiteModalConfirm",
                        value: function () {
                          var e = this,
                            t = this.state.modalInsurePackageInfo,
                            i = void 0 === t ? {} : t;
                          this.setState(
                            {
                              isSuiteModalShow: !1,
                              insurePackageInfo: i,
                              needClearInsure: !0,
                              isSelectedModalInsurePackage: !0,
                            },
                            function () {
                              var t,
                                n = {
                                  desc: "勾选保险产品",
                                  type: "汽车意外险",
                                  title: ""
                                    .concat(null == i ? void 0 : i.title)
                                    .concat(
                                      null == i ? void 0 : i.insurePackagePrice,
                                      "元/份"
                                    ),
                                };
                              null === (t = e.InsuranceRecord) ||
                                void 0 === t ||
                                t.track(n),
                                e.addOrder("actionA");
                            }
                          );
                        },
                      },
                      {
                        key: "onSelectInsuranceType",
                        value: function (e) {
                          var t,
                            i = this,
                            n = this.state,
                            o = n.insurePackageList,
                            a = n.selectedInsuranceCodeFronListPage,
                            s = o.map(function (t) {
                              return (0,
                              h.Z)((0, h.Z)({}, t), {}, { isActive: (null == e ? void 0 : e.activityId) === t.activityId ? !t.isActive : !(!e.isActive || a !== t.activityId) });
                            }),
                            c = {
                              desc: e.isActive
                                ? "取消勾选保险产品"
                                : "勾选保险产品",
                              type: "汽车意外险",
                              title: ""
                                .concat(e.title)
                                .concat(e.insurePackagePrice, "元/份"),
                            };
                          null === (t = this.InsuranceRecord) ||
                            void 0 === t ||
                            t.track(c),
                            e.isActive
                              ? (a ||
                                  this.doBusNewTraceInfoV2(
                                    {
                                      bizKey: "cancelEnsurrance",
                                      comment: "取消保险",
                                      clickType: x.uh.cancelClick,
                                    },
                                    2
                                  ),
                                this.setState(
                                  {
                                    insurePackageInfo: a
                                      ? s.find(function (e) {
                                          return e.isActive;
                                        })
                                      : {},
                                    insurePackageList: s,
                                  },
                                  function () {
                                    i.handleCountPrice();
                                  }
                                ))
                              : (this.doBusNewTraceInfoV2(
                                  {
                                    bizKey: "addEnsurrance",
                                    comment: "保险勾选",
                                    clickType: x.uh.confirmClick,
                                  },
                                  2
                                ),
                                this.setState(
                                  {
                                    insurePackageInfo: (0, h.Z)({}, e),
                                    insurePackageList: s,
                                  },
                                  function () {
                                    i.handleCountPrice();
                                  }
                                ));
                        },
                      },
                      {
                        key: "toInsurancePage",
                        value: function (e) {
                          var t,
                            i = {
                              desc: "点击投保须知按钮",
                              type: "汽车意外险",
                              title: ""
                                .concat(e.title)
                                .concat(e.insurePackagePrice, "元/份"),
                            };
                          null === (t = this.InsuranceRecord) ||
                            void 0 === t ||
                            t.track(i),
                            N.Z.twebview({ data: { url: e.descUrl } });
                        },
                      },
                      {
                        key: "getDiscountInfo",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "initial",
                            i = (0, h.Z)(
                              (0, h.Z)({}, this.options),
                              {},
                              { productLine: +this.options.productLine || "" }
                            );
                          (0, se.Is)(i).then(function (i) {
                            if (
                              (e.responseTrace("bookingReturnConfigPromise", i),
                              1 == i.code)
                            ) {
                              var n = "",
                                o = "";
                              if (
                                i.bookingSaveConfig &&
                                Array.isArray(i.bookingSaveConfig) &&
                                i.bookingSaveConfig[0]
                              )
                                (n = (
                                  i.bookingSaveConfig.find(function (e) {
                                    return "2" == e.tag;
                                  }).desc || ""
                                ).replace(
                                  "|",
                                  '<span style="color:#EE3737;margin:0 3px;">'.concat(
                                    i.bookingSaveConfig.find(function (e) {
                                      return "2" == e.tag;
                                    }).num,
                                    "</span>"
                                  )
                                )),
                                  (o =
                                    i.bookingSaveConfig.find(function (e) {
                                      return "3" == e.tag;
                                    }).desc || "");
                              i.isRandomDiscount
                                ? e.setState({ discountModalInfo: n })
                                : e.setState({ discountModalInfo: "" }),
                                i.hasDiscount
                                  ? e.setState(
                                      { discountInfo: o },
                                      function () {
                                        "update" == t && e.handleCountPrice();
                                      }
                                    )
                                  : e.setState({ discountInfo: "" });
                              var a = i.isRandomDiscount,
                                s = i.hasDiscount,
                                c = i.bookingSaveConfig,
                                r = i.fromPage,
                                l = void 0 === r ? "" : r;
                              e.setState({
                                discountMes: {
                                  info:
                                    null == c
                                      ? void 0
                                      : c.find(function (e) {
                                          return 3 == e.tag;
                                        }),
                                  hasDiscount: s,
                                  discountFromPage: l,
                                  isRandomDiscount: a,
                                },
                              });
                            }
                          });
                        },
                      },
                      {
                        key: "remindWhetherReceiveDiscount",
                        value: function (e) {
                          var t = this,
                            i =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "",
                            n =
                              !(
                                arguments.length > 2 && void 0 !== arguments[2]
                              ) || arguments[2];
                          return (0, A.Nl)({ type: e, fromPage: i }).then(
                            function (e) {
                              return (
                                i && t.getDiscountInfo("update"),
                                n || t.setState({ needUpdate: !1 }),
                                e
                              );
                            }
                          );
                        },
                      },
                      {
                        key: "handleDicountModalCancel",
                        value: function () {
                          var e = this;
                          this.remindWhetherReceiveDiscount("2").then(
                            function () {
                              e.getDiscountInfo("update"),
                                e.setState({ isDiscountModalShow: !1 }),
                                e.doBack();
                            }
                          );
                        },
                      },
                      {
                        key: "doBack",
                        value: function () {
                          S().getCurrentPages().length > 1
                            ? S().navigateBack()
                            : S().reLaunch({
                                url: "/pages/home/index?tab=bus&sourceId=".concat(
                                  this.sourceId
                                ),
                              });
                        },
                      },
                      {
                        key: "handleDiscountModalConfirm",
                        value: function () {
                          var e = this;
                          this.remindWhetherReceiveDiscount("1").then(function (
                            t
                          ) {
                            e.getDiscountInfo("update"),
                              e.setState(
                                { isDiscountModalShow: !1 },
                                function () {
                                  1 == t.code
                                    ? (e.setState({ isHasDiscount: !0 }),
                                      S().showToast({
                                        title: "恭喜您获得随机立减机会",
                                        icon: "none",
                                        duration: 1500,
                                      }))
                                    : S().showToast({
                                        title: "领取失败，请重试～",
                                        icon: "none",
                                        duration: 1500,
                                      });
                                }
                              );
                          });
                        },
                      },
                      {
                        key: "onClickTabBackIcon",
                        value: function () {
                          var e = this;
                          if (1 != this.state.productLine)
                            return this.isNeedCashBackDetain()
                              ? this.handleCashBackDetain()
                              : this.doBack();
                          var t = this.state.discountModalInfo,
                            i = new Date().getTime(),
                            n = 14,
                            o = Math.floor(10 * Math.random()) + 15,
                            a = Z.v4.get();
                          if (a && 0 !== Object.keys(a).length)
                            for (var s in a) {
                              var c = a[s];
                              if (s == this.options.symbol) {
                                if (i - c.timeStamp < 6e4) {
                                  n = c.currentBrowsers;
                                  break;
                                }
                                (n = o),
                                  (a[s] = { currentBrowsers: o, timeStamp: i }),
                                  Z.v4.set(a);
                                break;
                              }
                            }
                          else {
                            n = o;
                            var r = (0, k.Z)({}, this.options.symbol, {
                              currentBrowsers: o,
                              timeStamp: new Date().getTime(),
                            });
                            Z.v4.set(r);
                          }
                          if (
                            (14 === n &&
                              ((n = o),
                              (a[this.options.symbol] = {
                                currentBrowsers: o,
                                timeStamp: new Date().getTime(),
                              }),
                              Z.v4.set(a)),
                            this.isNeedCashBackDetain())
                          )
                            return this.handleCashBackDetain();
                          if (i - this._startTime > 3e3) {
                            if (!y.default.isH5Hzbm && t)
                              return void this.setState({
                                isDiscountModalShow: !0,
                              });
                            this.setState({ currentBrowsers: n }, function () {
                              e.toggleBrowseModalShow();
                            }),
                              this.setState(
                                { currentBrowsers: n },
                                function () {
                                  e.toggleBrowseModalShow();
                                }
                              );
                          } else this.doBack();
                        },
                      },
                      {
                        key: "handleBrowseModalClose",
                        value: function () {
                          var e = this;
                          this.setState({ isBrowseModalShow: !1 }, function () {
                            e.doBack();
                          });
                        },
                      },
                      {
                        key: "toggleBrowseModalShow",
                        value: function () {
                          this.setState({
                            isBrowseModalShow: !this.state.isBrowseModalShow,
                          });
                        },
                      },
                      {
                        key: "isStationArbitrarily",
                        value: function (e) {
                          return e.pathStationShuttle;
                        },
                      },
                      {
                        key: "handleFixPlace",
                        value: function (e) {
                          var t = this.state,
                            i = t.shiftInfo,
                            n = t.customStationInfo;
                          this.navigateTo({
                            url: "/pages/bus/place/index",
                            data: {
                              shiftInfo: i,
                              placeType: e,
                              customStationInfo: n,
                            },
                            callback: function (e) {
                              console.log("new place=", e);
                              var t = e || {},
                                i = t.fromStationAnyPointStore,
                                n = t.toStationAnyPointStore,
                                o = t.toStationInfo,
                                a = t.fromStationInfo,
                                s = (0, C.getCurrentInstance)().router.params;
                              this.doAllLineAction(
                                (0, h.Z)(
                                  (0, h.Z)({}, s),
                                  {},
                                  {
                                    fromStation: a ? a.name : s.fromStation,
                                    toStation: o ? o.name : s.toStation,
                                    fromStationAnyPointStore: i,
                                    toStationAnyPointStore: n,
                                    customStationInfo: {
                                      departure: i
                                        ? {
                                            customDepartureStation:
                                              i.name || "",
                                            customDepartureAddress:
                                              i.address || "",
                                            customDepartureCoordinateX:
                                              (i.location &&
                                                i.location.lng &&
                                                String(i.location.lng)) ||
                                              "",
                                            customDepartureCoordinateY:
                                              (i.location &&
                                                i.location.lat &&
                                                String(i.location.lat)) ||
                                              "",
                                          }
                                        : this.state.customStationInfo
                                            .departure,
                                      destination: n
                                        ? {
                                            customDestinationStation:
                                              n.name || "",
                                            customDestinationAddress:
                                              n.address || "",
                                            customDestinationCoordinateX:
                                              (n.location &&
                                                n.location.lng &&
                                                String(n.location.lng)) ||
                                              "",
                                            customDestinationCoordinateY:
                                              (n.location &&
                                                n.location.lat &&
                                                String(n.location.lat)) ||
                                              "",
                                          }
                                        : this.state.customStationInfo
                                            .destination,
                                    },
                                  }
                                )
                              );
                            },
                          });
                        },
                      },
                      {
                        key: "onFixFromTimeClick",
                        value: function () {
                          this.setState({ fixFromTimeLayerVisible: !0 });
                        },
                      },
                      {
                        key: "hideTimePickerLayer",
                        value: function () {
                          this.setState({ fixFromTimeLayerVisible: !1 });
                        },
                      },
                      {
                        key: "onConfirmFromTime",
                        value: function (e) {
                          this.setState(
                            { custormFromTime: e },
                            this.hideTimePickerLayer
                          );
                        },
                      },
                      {
                        key: "onPassengerLengthBeyondMaxNumber",
                        value: function (e) {
                          "charter" !== this.state.vehicleMode
                            ? S().showToast({
                                title: "最多可添加".concat(e, "名乘客"),
                                icon: "none",
                                duration: 1500,
                              })
                            : S().showToast({
                                title: "包车服务仅需填写".concat(
                                  e,
                                  "名联系人信息"
                                ),
                                icon: "none",
                                duration: 1500,
                              });
                        },
                      },
                      {
                        key: "handleTransferNoteVisibleCtrl",
                        value: function (e) {
                          this.setState({
                            isTransferNoteModalShow:
                              e || !this.state.isTransferNoteModalShow,
                          });
                        },
                      },
                      {
                        key: "onXCouponChecked",
                        value: function (e) {
                          var t = this;
                          if (e.packageCode) {
                            this.doBusNewTraceInfoV2(
                              {
                                bizKey: "couponSelect",
                                comment: "优惠券大放送里券包选择（地推专属",
                                clickType: x.uh.confirmClick,
                              },
                              2
                            );
                            var i = this.state.customSelectXCoupons.findIndex(
                                function (t) {
                                  return t === e.packageCode;
                                }
                              ),
                              n =
                                i >= 0
                                  ? [].concat(
                                      (0, l.Z)(
                                        this.state.customSelectXCoupons.slice(
                                          0,
                                          i
                                        )
                                      ),
                                      (0, l.Z)(
                                        this.state.customSelectXCoupons.slice(
                                          i + 1
                                        )
                                      )
                                    )
                                  : [].concat(
                                      (0, l.Z)(this.state.customSelectXCoupons),
                                      [e.packageCode]
                                    );
                            this.setState(
                              {
                                customSelectXCoupons: V._.sortBy(
                                  n,
                                  function (e) {
                                    return (
                                      t.state.XCouponElement.attachPackages,
                                      (
                                        t.state.XCouponElement.attachPackages ||
                                        []
                                      ).findIndex(function (t) {
                                        return t.packageCode === e;
                                      })
                                    );
                                  }
                                ),
                              },
                              this.handleCountPrice
                            );
                          }
                        },
                      },
                      {
                        key: "handleSwitchXCouponTipVisible",
                        value: function (e) {
                          this.setState({
                            isShowXcouponTip: !!e,
                            xCouponTipInfo: e.desc,
                          });
                        },
                      },
                      {
                        key: "handleSwitchSpecialTicketNew",
                        value: function (e) {
                          this.setState(
                            { isSpecialTicket: e },
                            this.handleCountPrice
                          );
                        },
                      },
                      {
                        key: "onShareLineClick",
                        value: function () {
                          var e = this.state.shiftInfo,
                            t = [
                              e.fromCity,
                              e.toCity,
                              e.fromStation,
                              e.toStation,
                              e.fromTime,
                              e.busNumber,
                              e.fromDate,
                              e.salePrice,
                              e.symbol,
                              e.productLine,
                              e.toTime,
                              e.costTime,
                            ].map(encodeURIComponent),
                            i = (0, r.Z)(t, 12),
                            n = i[0],
                            o = i[1],
                            a = i[2],
                            s = i[3],
                            c = i[4],
                            l = i[5],
                            u = i[6],
                            d = i[7],
                            h = i[8],
                            m = i[9],
                            p = i[10],
                            f = i[11];
                          this.doBusTraceInfo("shareOrder", "分享订单按钮");
                          var g = "/pages/bus/simpleBook/simpleBook?fromCity="
                            .concat(n, "&toCity=")
                            .concat(o, "&fromStation=")
                            .concat(a, "&toStation=")
                            .concat(s, "&fromTime=")
                            .concat(c, "&toTime=")
                            .concat(p, "&busNumber=")
                            .concat(l, "&fromDate=")
                            .concat(u, "&isNeedBusInfo=true&salePrice=")
                            .concat(d, "&symbol=")
                            .concat(h, "&productLine=")
                            .concat(m, "&costTime=")
                            .concat(f, "&onlyShare=1");
                          S().navigateTo({ url: g });
                        },
                      },
                      {
                        key: "onReadPassengerGuide",
                        value: function () {
                          var e = this;
                          (0, _.EC)(_.t0.ADD_PASSENGER_IN_BOOK),
                            this.setState(
                              { showPassengerGuide: !1 },
                              function () {
                                e.setState({
                                  showPaymentGuide:
                                    (0, _.Bq)(_.t0.CONTACT_TEL_IN_BOOK) &&
                                    !(0, _.Bq)(_.t0.PAY_IN_BOOK),
                                  showContactNumGuide: !(0, _.Bq)(
                                    _.t0.CONTACT_TEL_IN_BOOK
                                  ),
                                });
                              }
                            );
                        },
                      },
                      {
                        key: "onReadContactNumGuide",
                        value: function () {
                          var e = this;
                          (0, _.EC)(_.t0.CONTACT_TEL_IN_BOOK),
                            this.setState(
                              { showContactNumGuide: !1 },
                              function () {
                                setTimeout(function () {
                                  e.setState({ isTelInputFocus: !0 });
                                }, 800);
                              }
                            );
                        },
                      },
                      {
                        key: "onReadPaymentGuide",
                        value: function () {
                          (0, _.EC)(_.t0.PAY_IN_BOOK),
                            this.setState({ showPaymentGuide: !1 });
                        },
                      },
                      {
                        key: "handleCloseGuide",
                        value: function () {
                          var e = this;
                          (0, _.G8)("skip").finally(function () {
                            e.setState({
                              showPassengerGuide: !1,
                              showPaymentGuide: !1,
                            });
                          });
                        },
                      },
                      {
                        key: "onInputBlur",
                        value: function () {
                          this.state.isTelInputFocus &&
                            this.setState({
                              showPaymentGuide: !(0, _.Bq)(_.t0.PAY_IN_BOOK),
                            });
                        },
                      },
                      {
                        key: "onPassengerLengthChange",
                        value: function (e) {
                          this.handleCountPrice(),
                            this.setState({ isOnePassengerAdded: e > 0 });
                        },
                      },
                      {
                        key: "onNoticeModalVisibleChange",
                        value: function (e) {
                          this.setState({ busCommonNoticeModalData: e });
                        },
                      },
                      {
                        key: "onOldCustomerInterceptModalChooseCard",
                        value: function (e) {
                          this.state.customSelectXCoupons.findIndex(function (
                            t
                          ) {
                            return t === e.packageCode;
                          }) > -1 || this.onXCouponChecked(e);
                        },
                      },
                      {
                        key: "getRedPacketBrief",
                        value: (function () {
                          var e = (0, d.Z)(
                            (0, u.Z)().mark(function e() {
                              var t;
                              return (0, u.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          (0, se.ov)({
                                            fromPage: "fill",
                                            utmSource: this.state.utmSource,
                                          })
                                        );
                                      case 3:
                                        if (
                                          ((t = e.sent),
                                          this.responseTrace(
                                            "getRedPacketBrief",
                                            t
                                          ),
                                          1 === t.code)
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 7:
                                        this.setState({
                                          redPacketBriefInfo: t.data,
                                        }),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(0)),
                                          console.log(e.t0);
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 10]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onRedPackageCheck",
                        value: function () {
                          this.setState(
                            {
                              isRedPackageChecked:
                                !this.state.isRedPackageChecked,
                            },
                            this.handleCountPrice
                          );
                        },
                      },
                      {
                        key: "onPageScroll",
                        value: function () {
                          var e,
                            t = this;
                          this.observeScrollEnd &&
                            clearTimeout(this.observeScrollEnd) &&
                            (this.observeScrollEnd = null),
                            null === (e = this.$CouponTip) ||
                              void 0 === e ||
                              e.handleKeepModalToSide(),
                            (this.observeScrollEnd = setTimeout(function () {
                              var e;
                              console.log("on scroll end"),
                                null === (e = t.$CouponTip) ||
                                  void 0 === e ||
                                  e.handleResumeModalFromSide(),
                                (t.observeScrollEnd = null);
                            }, 500));
                        },
                      },
                      {
                        key: "isNeedCashBackDetain",
                        value: function () {
                          var e, t;
                          return !(
                            null === (e = this.$CouponTip) ||
                            void 0 === e ||
                            null === (t = e.$CashBack1stOrder) ||
                            void 0 === t ||
                            !t.isStep1()
                          );
                        },
                      },
                      {
                        key: "handleCashBackDetain",
                        value: function () {
                          var e,
                            t,
                            i = this;
                          null === (e = this.$CouponTip) ||
                            void 0 === e ||
                            null === (t = e.$CashBack1stOrder) ||
                            void 0 === t ||
                            t
                              .handleShowCompAsync(function () {
                                i.doBusNewTraceInfo(
                                  {
                                    typeSnd: "writepage_qef_retain_pop_show",
                                    comment: "填写页挽留弹窗曝光",
                                  },
                                  0
                                );
                              })
                              .then(function (e) {
                                var t = e.isAllowed,
                                  n = e.isStep1,
                                  o = e.isReceive;
                                t && n
                                  ? i.doBusNewTraceInfo({
                                      typeSnd:
                                        "writepage_coupons_accept_order_pop_click",
                                      comment: o
                                        ? "填写页挽留弹窗点击【立即领取】"
                                        : "填写页挽留弹窗点击【立即领取并下单",
                                    })
                                  : i.doBack();
                              });
                        },
                      },
                      {
                        key: "submitMemberCouponPkgPay",
                        value: function () {
                          var e = this;
                          this.doBusNewTraceInfoV2(
                            {
                              bizKey:
                                "booking_dt_couponPop_confirmButton_click",
                              comment: "填写页-券包拦截弹窗确认领取按钮点击",
                              clickType: x.uh.confirmClick,
                            },
                            2
                          ),
                            this.setState(
                              {
                                isMemberCouponPkgModalShow: !1,
                                xMemberCoupons: ["1ZQCQYLB266C"],
                              },
                              function () {
                                e.addOrder();
                              }
                            );
                        },
                      },
                      {
                        key: "cancelMemberCouponPkgPay",
                        value: function () {
                          var e = this;
                          this.doBusNewTraceInfoV2(
                            {
                              bizKey: "booking_dt_couponPop_refuseButton_click",
                              comment: "填写页-券包拦截弹窗放弃按钮点击",
                              clickType: x.uh.cancelClick,
                            },
                            2
                          ),
                            this.setState(
                              {
                                isMemberCouponPkgModalShow: !1,
                                xMemberCoupons: [],
                              },
                              function () {
                                e.addOrder();
                              }
                            );
                        },
                      },
                      {
                        key: "closeMemberCouponPkgModal",
                        value: function () {
                          this.setState({ isMemberCouponPkgModalShow: !1 });
                        },
                      },
                      {
                        key: "onOrderNormalSubmit",
                        value: function () {
                          this.state.isOnePassengerAdded
                            ? this.onOrderSubmit()
                            : (0, M.showToast)("请先添加乘客");
                        },
                      },
                      {
                        key: "responseTrace",
                        value: function (e, t) {
                          try {
                            var i =
                              (0, C.getCurrentInstance)().router &&
                              (0, C.getCurrentInstance)().router.params;
                            if (
                              !this.state.isDiTuiSource ||
                              "纺织城客运站" !==
                                decodeURIComponent(i.fromStation)
                            )
                              return;
                            console.log("上报response"),
                              this.ubtDevTrace("o_bus_mini_booking", {
                                step: "接口抓包",
                                name: e,
                                response: t,
                              });
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "isSupprtQuickPay",
                        value: function () {
                          var e =
                            (0, C.getCurrentInstance)().router &&
                            (0, C.getCurrentInstance)().router.params;
                          return (
                            this.state.isDiTuiSource &&
                            "纺织城客运站" === decodeURIComponent(e.fromStation)
                          );
                        },
                      },
                      {
                        key: "getTravelCouponActivityInfo",
                        value: function () {
                          var e = this;
                          (0, se.O9)({
                            brand:
                              "zx" == y.default.jetpack
                                ? "zhixing"
                                : "ty" == y.default.jetpack
                                ? "tieyou"
                                : "",
                          }).then(function (t) {
                            1 === (null == t ? void 0 : t.code) &&
                              null != t &&
                              t.data &&
                              e.setState({ travelCouponActivityInfo: t.data });
                          });
                        },
                      },
                      {
                        key: "doShowTravelDiscountActivityRuleDrawer",
                        value: function () {
                          this.doBusNewTraceInfo(
                            {
                              typeSnd: "book_mef_regulation_show",
                              comment: "满额返规则浮层 曝光",
                            },
                            0
                          ),
                            this.setState({
                              showTravelDiscountActivityDrawer: !0,
                            });
                        },
                      },
                      {
                        key: "closeTravelDiscountActivityRuleDrawer",
                        value: function () {
                          this.setState({
                            showTravelDiscountActivityDrawer: !1,
                          });
                        },
                      },
                      {
                        key: "getAvailableCouponList",
                        value: function (e, t) {
                          var i = this,
                            n = this.state.couponInfo,
                            o = [];
                          return (
                            null != n &&
                              n.length &&
                              n.forEach(function (n) {
                                var a = i.selectAvailableCoupon(e, n, t);
                                Object.keys(a).length > 0 && o.push(a);
                              }),
                            o
                          );
                        },
                      },
                      {
                        key: "selectAvailableCoupon",
                        value: function (e, t, i) {
                          var n = {};
                          if (
                            (t.deductionStrategy.sort(function (e, t) {
                              return e.deductionAmount < t.deductionAmount
                                ? 1
                                : e.deductionAmount > t.deductionAmount
                                ? -1
                                : e.deductionAmount == t.deductionAmount
                                ? 0
                                : void 0;
                            }),
                            3 == t.deductionStrategyTypeID)
                          )
                            for (
                              var o = 0;
                              o < t.deductionStrategy.length;
                              o++
                            ) {
                              var a = t.deductionStrategy[o],
                                s =
                                  1 == a.deductionType
                                    ? (a.deductionAmount * e) / 100
                                    : a.deductionAmount;
                              if (e >= a.startAmount) {
                                n = (0, h.Z)(
                                  (0, h.Z)({}, t),
                                  {},
                                  { couponRealPrice: s }
                                );
                                break;
                              }
                            }
                          else
                            1 == t.deductionStrategyTypeID
                              ? (n = (0, h.Z)(
                                  (0, h.Z)({}, t),
                                  {},
                                  {
                                    couponRealPrice:
                                      t.couponPrice > i ? 0 : t.couponPrice,
                                  }
                                ))
                              : 2 == t.deductionStrategyTypeID &&
                                (n = (0, h.Z)(
                                  (0, h.Z)({}, t),
                                  {},
                                  { couponRealPrice: t.couponPrice * e }
                                ));
                          return n;
                        },
                      },
                      {
                        key: "onHandleLimitTimeCoupon",
                        value: function (e) {
                          var t = this;
                          this.setState(
                            {
                              isShowLimitTimeCouponDialog: !1,
                              isSelectedLimitTimeCoupon: e,
                            },
                            function () {
                              t.addOrder();
                            }
                          );
                        },
                      },
                      {
                        key: "onSelectCouponHandle",
                        value: function (e) {
                          var t,
                            i = this,
                            n = this.state.specialCouponPkg,
                            o =
                              null == n ||
                              null === (t = n.couponList) ||
                              void 0 === t
                                ? void 0
                                : t.map(function (t) {
                                    return (0,
                                    h.Z)((0, h.Z)({}, t), {}, { isSelected: t.packageCode === e ? !t.isSelected : t.isSelected });
                                  });
                          this.setState(
                            {
                              specialCouponPkg: (0, h.Z)(
                                (0, h.Z)({}, n),
                                {},
                                { couponList: o }
                              ),
                            },
                            function () {
                              i.handleCountPrice();
                            }
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            i,
                            n,
                            o,
                            a,
                            s = this,
                            c = this.state,
                            r = c.isTieyou,
                            l = c.isLoading,
                            u = c.statusBarHeight,
                            d = c.bgTop,
                            m = c.bookLineTop,
                            p = c.shiftInfo,
                            f = c.headTitle,
                            g = c.isBookModalShow,
                            v = c.passengerPannelInfo,
                            k = c.isPassengerPannelShow,
                            b = c.buyTicketRule,
                            S = c.isOnePassengerAdded,
                            T = c.couponLen,
                            P = c.utmSource,
                            N = c.availCouponLen,
                            I = c.couponSelectedInfo,
                            Z = c.isPriceDetailModalShow,
                            x = c.priceDetailInfo,
                            B = c.feeTotal,
                            V = c.savedPrice,
                            D = c.ticketPickTel,
                            A = c.isFeeModalShow,
                            M = c.isGuaModalShow,
                            X = c.needUpdate,
                            E = c.isBookTagShow,
                            F = c.isSuiteModalShow,
                            U = c.productLine,
                            j = c.insurePackageList,
                            H = c.btnInsurePackageInfo,
                            K = c.modalInsurePackageInfo,
                            $ = c.insuranceChannel,
                            Q = c.bookNoticeModalInfo,
                            ee = c.vehicleMode,
                            ne = c.discountModalInfo,
                            ae = c.isDiscountModalShow,
                            se = c.isBrowseModalShow,
                            le = c.currentBrowsers,
                            he = c.fromStationInfoList,
                            be = c.toStationInfoList,
                            ye = c.fromStationInfo,
                            Te = void 0 === ye ? {} : ye,
                            Pe = c.toStationInfo,
                            Ne = void 0 === Pe ? {} : Pe,
                            Ie = c.customStationInfo,
                            Ze = c.fixFromTimeLayerVisible,
                            xe = c.custormFromTime,
                            Be = c.isTransferNoteModalShow,
                            Ve = c.customSelectXCoupons,
                            De = c.XCouponElement,
                            Ae = c.isShowXcouponTip,
                            _e = c.xCouponTipInfo,
                            Me = c.isSpecialTicket,
                            Xe = c.supportSwitchSubTicket,
                            We = c.isShowSaledCouponPackageModal,
                            Je = c.saledCouponPackageInfo,
                            Ye = c.isHaveBackLine,
                            $e = c.backLine,
                            Qe = c.showPassengerGuide,
                            et = c.showPaymentGuide,
                            tt = c.showContactNumGuide,
                            it = c.isTelInputFocus,
                            nt = c.studentGuessList,
                            ot = c.isDiTuiSource,
                            at = c.busConfig,
                            st = c.officialInfo,
                            ct = c.canUseCustomNav,
                            rt = c.isNoRealNameBookingMode,
                            lt = c.busCommonNoticeModalData,
                            ut = c.reversePassengerInfo,
                            dt = c.redPacketBriefInfo,
                            ht = c.isRedPackageChecked,
                            mt = c.lotteryFreeOrderProduct,
                            pt = c.isHaveFollowingEle,
                            ft = c.couponPkgData,
                            gt = c.isMemberCouponPkgModalShow,
                            vt = c.selectedPassengerIdList,
                            kt = c.discountMes,
                            bt = c.isHasDiscount,
                            Ct = c.isNotUseCoupon,
                            St = c.isShowInsureModule,
                            wt = c.travelCouponActivityInfo,
                            yt = c.showTravelDiscountActivityDrawer,
                            Tt = c.selectedInsuranceCodeFronListPage,
                            Pt = c.isShowLimitTimeCouponDialog,
                            Nt = c.specialCouponPkg,
                            It = c.limitTimeCouponInfo,
                            Zt = kt || {},
                            xt = Zt.hasDiscount,
                            Bt = Zt.info,
                            Vt = Zt.discountFromPage,
                            Dt =
                              !qe &&
                              (null == v ||
                              null === (e = v.passengerPannelAllInfo) ||
                              void 0 === e
                                ? void 0
                                : e.length) &&
                              (bt || xt),
                            At = (0, W.BX)(w.View, {
                              className: "guide-bus-book",
                              children: [
                                (0, W.BX)(w.View, {
                                  className: "guide-row",
                                  children: [
                                    (0, W.tZ)(w.Image, {
                                      src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/hands@3x.png",
                                      mode: "aspectFit",
                                      className: "guide-point",
                                    }),
                                    (0, W.tZ)(w.Image, {
                                      src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/yd@3x.png",
                                      mode: "heightFix",
                                      className: "guide-line",
                                    }),
                                    (0, W.BX)(w.View, {
                                      className: "guide-text",
                                      children: [
                                        "点击",
                                        (0, W.tZ)(w.Text, {
                                          className: "hl",
                                          children: "新增乘客",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, W.tZ)(w.View, {
                                  className: "guide-jump-btn",
                                  "data-guideType": _.t0.ADD_PASSENGER_IN_BOOK,
                                  id: "AdCP",
                                  onClick: this.handleCloseGuide,
                                  children: "跳过",
                                }),
                              ],
                            }),
                            _t = (0, W.BX)(w.View, {
                              className: "guide-bus-book",
                              children: [
                                (0, W.BX)(w.View, {
                                  className: "guide-row",
                                  children: [
                                    (0, W.tZ)(w.Image, {
                                      src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/hands@3x.png",
                                      mode: "aspectFit",
                                      className: "guide-point",
                                    }),
                                    (0, W.tZ)(w.Image, {
                                      src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/yd@3x.png",
                                      mode: "heightFix",
                                      className: "guide-line",
                                    }),
                                    (0, W.BX)(w.View, {
                                      className: "guide-text",
                                      children: [
                                        "请",
                                        D ? "确认" : "输入",
                                        (0, W.tZ)(w.Text, {
                                          className: "hl",
                                          children: "手机号码",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, W.tZ)(w.View, {
                                  className: "guide-jump-btn",
                                  "data-guideType": _.t0.ADD_PASSENGER_IN_BOOK,
                                  id: "AdCQ",
                                  onClick: this.handleCloseGuide,
                                  children: "跳过",
                                }),
                              ],
                            }),
                            Mt =
                              "charter" === ee && b.maxSaleTicketNumber
                                ? "包车仅需填写".concat(
                                    b.maxSaleTicketNumber,
                                    "名联系人信息"
                                  )
                                : "单笔订单最多可添加".concat(
                                    b.maxSaleTicketNumber,
                                    "名乘客"
                                  ),
                            Xt =
                              De &&
                              (null ===
                                (t = this.defaultSelectedXProductList) ||
                              void 0 === t ||
                              null ===
                                (i = t.find(function (e) {
                                  return e.channelId === De.channelId;
                                })) ||
                              void 0 === i
                                ? void 0
                                : i.packageCode),
                            Lt =
                              (De &&
                                De.attachPackages.filter(function (e) {
                                  return e.packageCode != Xt;
                                })) ||
                              [],
                            Ot =
                              null == ut
                                ? void 0
                                : ut.find(function (e) {
                                    return (
                                      e.isActive &&
                                      ["C", "X"].includes(e.passengerType)
                                    );
                                  });
                          return (0, W.BX)(w.View, {
                            className: "bus-book-page ".concat(r ? "ty" : "zx"),
                            children: [
                              (0, W.tZ)(Ce, {
                                canUseCustomNav: ct,
                                statusBarHeight: u,
                                title: f,
                                officialInfo: st,
                                bgTop: d,
                                onBack: this.onClickTabBackIcon.bind(this),
                              }),
                              !l &&
                                (0, W.tZ)(je, {
                                  fromTime: this.options.fromTime,
                                  bookLineTop: m,
                                  productLine: U,
                                  vehicleMode: ee,
                                  shiftInfo: p,
                                  isHaveBackLine: Ye,
                                  backLine: $e,
                                  fromStationInfoList: he,
                                  toStationInfoList: be,
                                  fromStationInfo: Te,
                                  toStationInfo: Ne,
                                  customStationInfo: Ie,
                                  custormFromTime: xe,
                                  isBookTagShow: E,
                                  busConfig: at,
                                  isDiTuiSource: ot,
                                  isSupprtQuickPay: this.isSupprtQuickPay(),
                                  fromDay: this.handleDayStr(
                                    null == $e ? void 0 : $e.fromDate
                                  ),
                                  gotoMapPage: this.gotoMapPage.bind(this),
                                  handleFixPlace:
                                    this.handleFixPlace.bind(this),
                                  handleTransferNoteVisibleCtrl:
                                    this.handleTransferNoteVisibleCtrl.bind(
                                      this
                                    ),
                                  onFixFromTimeClick:
                                    this.onFixFromTimeClick.bind(this),
                                  onClickTicketDetail:
                                    this.onClickTicketDetail.bind(this),
                                  onNoticeModalVisibleChange:
                                    this.onNoticeModalVisibleChange.bind(this),
                                  onShareLineClick:
                                    this.onShareLineClick.bind(this),
                                  onOrderSubmit: this.onOrderSubmit.bind(this),
                                }),
                              l &&
                                (0, W.BX)(w.View, {
                                  className: "loading-content",
                                  children: [
                                    (0, W.BX)(w.View, {
                                      className: "tbox",
                                      children: [
                                        (0, W.BX)(w.View, {
                                          className: "lbox",
                                          children: [
                                            (0, W.tZ)(w.View, {
                                              className: "depa",
                                            }),
                                            (0, W.tZ)(w.View, {
                                              className: "date",
                                            }),
                                            (0, W.tZ)(w.View, {
                                              className: "time",
                                            }),
                                          ],
                                        }),
                                        (0, W.tZ)(w.View, {
                                          className: "rbox",
                                        }),
                                      ],
                                    }),
                                    (0, W.BX)(w.View, {
                                      className: "mbox",
                                      children: [
                                        (0, W.BX)(w.View, {
                                          className: "lbox",
                                          children: [
                                            (0, W.tZ)(w.View, {
                                              className: "from",
                                            }),
                                            (0, W.tZ)(w.View, {
                                              className: "to",
                                            }),
                                          ],
                                        }),
                                        (0, W.tZ)(w.View, {
                                          className: "rbox",
                                        }),
                                      ],
                                    }),
                                    (0, W.BX)(w.View, {
                                      className: "bbox",
                                      children: [
                                        (0, W.BX)(w.View, {
                                          className: "lbox",
                                          children: [
                                            (0, W.tZ)(w.View, {
                                              className: "price",
                                            }),
                                            (0, W.tZ)(w.View, {
                                              className: "desc",
                                            }),
                                          ],
                                        }),
                                        (0, W.tZ)(w.View, {
                                          className: "rbox",
                                        }),
                                      ],
                                    }),
                                    (0, W.BX)(w.View, {
                                      className: "bbbox",
                                      children: [
                                        (0, W.tZ)(w.View, {
                                          className: "desc",
                                        }),
                                        (0, W.tZ)(w.View, {
                                          className: "desc",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, W.tZ)(L.Z, {
                                showGuide: Qe,
                                TipComp: At,
                                rootContentClassName:
                                  "bus-book-guide-display-conent",
                                rootClassName: "bus-book-passener-guide",
                                onRead: this.onReadPassengerGuide.bind(this),
                                useCache: !0,
                                children: (0, W.BX)(w.View, {
                                  className: "book-passenger",
                                  children: [
                                    (0, W.BX)(w.View, {
                                      className: "tit ".concat(
                                        rt ? "no-realName-tit" : ""
                                      ),
                                      children: [
                                        "乘客",
                                        b.maxSaleTicketNumber &&
                                          (0, W.tZ)(w.Text, {
                                            className: "rig",
                                            children: Mt,
                                          }),
                                      ],
                                    }),
                                    rt
                                      ? (0, W.tZ)(te, {
                                          onRef: function (e) {
                                            return (s.$noRealNameBookingComponent =
                                              e);
                                          },
                                          onPassengerLengthChange:
                                            this.onPassengerLengthChange,
                                          onInputChange:
                                            this.handleTelChange.bind(this),
                                          max: b.maxSaleTicketNumber,
                                          defaultTel: D,
                                          defaultLen: 1,
                                        })
                                      : (0, W.BX)(w.Block, {
                                          children: [
                                            (0, W.tZ)(J, {
                                              pageId: this.pageId,
                                              doBusTraceInfo:
                                                this.doBusNewTraceInfoV2.bind(
                                                  this
                                                ),
                                              doBusNewTraceInfo:
                                                this.doBusNewTraceInfo,
                                              visible: k,
                                              info: v,
                                              needUpdate: X,
                                              onRefreshPasShow:
                                                this.handlePannelShow.bind(
                                                  this
                                                ),
                                              onRefreshPassenger:
                                                this.onRefreshPassenger.bind(
                                                  this
                                                ),
                                              onActiveLengthBeyondMaxNumber:
                                                this.onPassengerLengthBeyondMaxNumber.bind(
                                                  this
                                                ),
                                              studentGuessList: nt,
                                              utmSource: P,
                                              selectedPassengerIdList: vt,
                                              discountMes: kt,
                                              remindWhetherReceiveDiscount:
                                                this
                                                  .remindWhetherReceiveDiscount,
                                              isDiTuiSource: ot,
                                            }),
                                            (0, W.tZ)(de.Z, {
                                              isShow: Ot,
                                              ref: function (e) {
                                                return (s.$PersonSaveTip = e);
                                              },
                                              doBusTraceInfo:
                                                this.doBusNewTraceInfo.bind(
                                                  this
                                                ),
                                            }),
                                            S &&
                                              (0, W.tZ)(L.Z, {
                                                showGuide: tt,
                                                TipComp: _t,
                                                rootContentClassName:
                                                  "bus-book-guide-display-conent bus-book-contract-guide-display-conent",
                                                rootClassName:
                                                  "bus-book-passener-guide",
                                                onRead:
                                                  this.onReadContactNumGuide.bind(
                                                    this
                                                  ),
                                                children: (0, W.BX)(w.View, {
                                                  className: "tel",
                                                  children: [
                                                    (0, W.tZ)(w.Text, {
                                                      className: "tit",
                                                      children: "联系手机",
                                                    }),
                                                    (0, W.tZ)(w.Input, {
                                                      className: "cont",
                                                      cursorSpacing: 100,
                                                      focus: it,
                                                      onFocus:
                                                        this.onMobileFocus,
                                                      placeholder:
                                                        "请填写手机号码",
                                                      value: D,
                                                      onInput:
                                                        this.handleTelChange,
                                                      onBlur:
                                                        this.onInputBlur.bind(
                                                          this
                                                        ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            (0, W.tZ)(w.Block, {
                                              children:
                                                !y.default.isH5Hzbm &&
                                                Dt &&
                                                Bt &&
                                                (0, W.BX)(w.View, {
                                                  className:
                                                    "discount-tips-passenger",
                                                  children: [
                                                    (0, W.tZ)(w.Image, {
                                                      className: "tips-icon",
                                                      src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/xkfljb@3x.png",
                                                    }),
                                                    (0, W.BX)(w.View, {
                                                      className: "tips-left",
                                                      children: [
                                                        (0, W.BX)(w.View, {
                                                          className: "tips-top",
                                                          children: [
                                                            "passenger" === Vt
                                                              ? "新客福利！最高优惠"
                                                              : "本单福利！最高优惠",
                                                            (0, W.tZ)(w.Text, {
                                                              className:
                                                                "color-red",
                                                              children: Bt.num,
                                                            }),
                                                            "元",
                                                          ],
                                                        }),
                                                        (0, W.tZ)(w.View, {
                                                          className:
                                                            "tips-bottom",
                                                          children:
                                                            "恭喜你享本单立减",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, W.tZ)(w.View, {
                                                      className: "tips-right",
                                                      children: "已领取",
                                                    }),
                                                  ],
                                                }),
                                            }),
                                          ],
                                        }),
                                  ],
                                }),
                              }),
                              mt &&
                                !y.default.isH5Hzbm &&
                                !y.default.isAlipay &&
                                (0, W.tZ)(me, {
                                  product: mt,
                                  ref: function (e) {
                                    return (s.$LotteryFreeOrderProduct = e);
                                  },
                                  onChange: this.handleCountPrice.bind(this),
                                  doBusTraceInfo:
                                    this.doBusTraceInfo.bind(this),
                                  utmSource: P,
                                }),
                              De &&
                                Lt.length > 0 &&
                                !y.default.isH5Hzbm &&
                                (0, W.tZ)(ke, {
                                  xCouponList: Lt,
                                  selectedCoupons: Ve,
                                  onXCouponChecked:
                                    this.onXCouponChecked.bind(this),
                                }),
                              (0, W.tZ)(He, {
                                couponData: Nt,
                                onSelect: this.onSelectCouponHandle.bind(this),
                              }),
                              "fill_accident_insurance" === $ &&
                                j.length > 0 &&
                                k &&
                                St &&
                                (0, W.tZ)(ve.Z, {
                                  insurePackageList: j,
                                  insuranceTips: this.insuranceTips,
                                  defaultInsuranceCode: Tt,
                                  onSelectInsurance:
                                    this.onSelectInsuranceType.bind(this),
                                  gotoInsurancePage:
                                    this.toInsurancePage.bind(this),
                                }),
                              !y.default.isH5Hzbm &&
                                (!!T ||
                                  (dt &&
                                    p.isOpenXcxRedPacket &&
                                    (null == x ||
                                    null === (n = x.redPackageDiscount) ||
                                    void 0 === n
                                      ? void 0
                                      : n.price) > 0)) &&
                                (0, W.tZ)(Se, {
                                  couponLen: T,
                                  availCouponLen: N,
                                  hasPassenger: S,
                                  isRedPackageChecked: ht,
                                  isNotUseCoupon: Ct,
                                  isOpenXcxRedPacket: p.isOpenXcxRedPacket,
                                  priceDetailInfo: x,
                                  couponSelectedInfo: I,
                                  redPacketBriefInfo: dt,
                                  onClickCoupon: this.onClickCoupon.bind(this),
                                  onRedPackageCheck:
                                    this.onRedPackageCheck.bind(this),
                                }),
                              !y.default.isH5Hzbm &&
                                wt &&
                                (null == wt ||
                                null === (o = wt.orders) ||
                                void 0 === o
                                  ? void 0
                                  : o.length) > 0 &&
                                (0, W.tZ)(fe.Z, {
                                  fromPage: "booking",
                                  activityData: wt,
                                  doShowRuleDrawer:
                                    this.doShowTravelDiscountActivityRuleDrawer.bind(
                                      this
                                    ),
                                  doUbtTrace: this.doBusNewTraceInfo.bind(this),
                                }),
                              (0, W.tZ)(Ue, {
                                productLine: U,
                                shiftInfo: p,
                                insuranceChannel: $,
                                hasPassenger: S,
                                feeTotal: B,
                                isSelectedInsurance:
                                  Object.keys(H).length > 0 || j.length > 0,
                                gotoInsuranceDescPage: this.toH5Page.bind(this),
                                onTogglePriceDetailModal:
                                  this.onTogglePriceDetailModal.bind(this),
                              }),
                              (0, W.tZ)(we, {}),
                              (0, W.tZ)(Le, {
                                insuranceChannel: $,
                                hasPassenger: S,
                                showPaymentGuide: et,
                                feeTotal: B,
                                savedPrice: V,
                                isPriceDetailModalShow: Z,
                                btnInsurePackageInfo: H,
                                guideStepType: _.t0.PAY_IN_BOOK,
                                handleCloseGuide:
                                  this.handleCloseGuide.bind(this),
                                onTogglePriceDetailModal:
                                  this.onTogglePriceDetailModal.bind(this),
                                onOrderNormalSubmit:
                                  this.onOrderNormalSubmit.bind(this),
                                onOrderSubmit: this.onOrderSubmit.bind(this),
                                onReadPaymentGuide:
                                  this.onReadPaymentGuide.bind(this),
                              }),
                              !y.default.isH5Hzbm &&
                                Xe &&
                                k &&
                                (0, W.tZ)(ie, {
                                  info: {
                                    isSpecialTicket: Me,
                                    subTicketDetail: p.subTicketDetail,
                                    specialTicketAmount: p.specialTicketAmount,
                                  },
                                  onTicketChange:
                                    this.handleSwitchSpecialTicketNew.bind(
                                      this
                                    ),
                                }),
                              (0, W.tZ)(G.Z, {
                                visible: g,
                                info: Q,
                                isSpecialTicket: Me,
                                onClose: this.onCloseBookModal.bind(this),
                              }),
                              (0, W.tZ)(Y.Z, {
                                visible: Z,
                                info: x,
                                onClose:
                                  this.onTogglePriceDetailModal.bind(this),
                                onCloseFeeModal:
                                  this.onToggleFeeModal.bind(this),
                              }),
                              (0, W.tZ)(q.Z, {
                                visible: A,
                                onClose: this.onToggleFeeModal.bind(this),
                              }),
                              (0, W.tZ)(oe, {
                                visible: M,
                                onConfirm: this.handleConfirmInsure.bind(this),
                                onCancel: this.handleCancelInsure.bind(this),
                                onClose: this.onToggleGuaModal.bind(this),
                              }),
                              (0, W.tZ)(Oe.Z, {
                                isShow: F,
                                insuranceInfo: K,
                                onCancel: this.onSuiteModalCancel.bind(this),
                                onConfirm: this.onSuiteModalConfirm.bind(this),
                                gotoInsurancePage:
                                  this.toInsurancePage.bind(this),
                              }),
                              (0, W.tZ)(Re, {
                                isShow: se,
                                isTieyou: r,
                                currentBrowsers: le,
                                onBack: this.handleBrowseModalClose.bind(this),
                                onKeepBrowse:
                                  this.toggleBrowseModalShow.bind(this),
                              }),
                              (0, W.tZ)(ze, {
                                isShow: ae,
                                discountModalInfo: ne,
                                onCancel:
                                  this.handleDicountModalCancel.bind(this),
                                onConfirm:
                                  this.handleDiscountModalConfirm.bind(this),
                              }),
                              (0, W.tZ)(O.M, (0, h.Z)({}, lt || {})),
                              (0, W.tZ)(Ee, {
                                isShow: Be,
                                description: p.transferStationDesc,
                                onClose:
                                  this.handleTransferNoteVisibleCtrl.bind(this),
                                handleTransferNoteVisibleCtrl:
                                  this.handleTransferNoteVisibleCtrl.bind(this),
                              }),
                              (0, W.tZ)(re.Z, {
                                visible: Ae,
                                onClose:
                                  this.handleSwitchXCouponTipVisible.bind(
                                    this,
                                    !1
                                  ),
                                option: Ke,
                                children: (0, W.BX)(w.View, {
                                  className: "book-common-modal",
                                  children: [
                                    (0, W.BX)(w.View, {
                                      className: "head",
                                      children: [
                                        (0, W.tZ)(w.Text, {
                                          className: "tit",
                                          children: _e && _e[0] && _e[0].title,
                                        }),
                                        (0, W.tZ)(w.Text, {
                                          className:
                                            "ifont-closed iconfont cancel",
                                          id: "AdCR",
                                          onClick:
                                            this.handleSwitchXCouponTipVisible.bind(
                                              this,
                                              !1
                                            ),
                                        }),
                                      ],
                                    }),
                                    (0, W.tZ)(w.View, {
                                      className: "con",
                                      children:
                                        _e &&
                                        _e[0] &&
                                        _e[0].desc &&
                                        _e[0].desc.map(function (e, t) {
                                          return (0,
                                          W.tZ)(w.View, { children: e }, t);
                                        }),
                                    }),
                                  ],
                                }),
                              }),
                              Ze &&
                                (0, W.tZ)(ue.Z, {
                                  style: { width: "70%", margin: "0 auto" },
                                  visible: Ze,
                                  onCancel: this.hideTimePickerLayer.bind(this),
                                  minStep: p.customerIntervalTime,
                                  defaultValue:
                                    xe ||
                                    this.options.fromTime ||
                                    p.selectableFromTime,
                                  min: p.selectableFromTime,
                                  max: p.endTime,
                                  onConfirm: this.onConfirmFromTime.bind(this),
                                  title: "请选择出发时间",
                                }),
                              (0, W.tZ)(Fe, {
                                isShow: We,
                                saledCouponPackageInfo: Je,
                                handleModal:
                                  this.handleSaledCouponPackageModal.bind(this),
                                gotoDescPage: this.toDescPage.bind(this),
                              }),
                              (0, W.tZ)(R.Z, {
                                ref: function (e) {
                                  s.onDialogAttach(e);
                                },
                              }),
                              ot &&
                                !pt &&
                                (0, W.tZ)(ce, {
                                  fromStation:
                                    null ===
                                      (a = (0, C.getCurrentInstance)()
                                        .router) || void 0 === a
                                      ? void 0
                                      : a.params.fromStation,
                                  xCouponInfo: Lt,
                                  onChooseCard:
                                    this.onOldCustomerInterceptModalChooseCard.bind(
                                      this
                                    ),
                                  doBusTraceInfo:
                                    this.doBusNewTraceInfoV2.bind(this),
                                }),
                              "dt" !== y.default.jetpack &&
                                !ot &&
                                !y.default.isH5Hzbm &&
                                (0, W.tZ)(z.Z, {
                                  onlyCashback1stOrder: !0,
                                  fixCouponTab: 1 !== U ? "point" : "bus",
                                  ref: function (e) {
                                    return (s.$CouponTip = e);
                                  },
                                  doNewBusTraceInfo:
                                    this.doBusNewTraceInfoV2.bind(this),
                                }),
                              gt &&
                                (0, W.tZ)(pe, {
                                  couponPkgData: ft,
                                  submitPay: function () {
                                    return s.submitMemberCouponPkgPay();
                                  },
                                  cancelPay: function () {
                                    return s.cancelMemberCouponPkgPay();
                                  },
                                  closeModal: function () {
                                    return s.cancelMemberCouponPkgPay();
                                  },
                                }),
                              yt &&
                                (0, W.tZ)(ge.Z, {
                                  visible: yt,
                                  fromPage: "booking",
                                  activityData: wt,
                                  onClose:
                                    this.closeTravelDiscountActivityRuleDrawer.bind(
                                      this
                                    ),
                                  onWrapClose:
                                    this.closeTravelDiscountActivityRuleDrawer.bind(
                                      this
                                    ),
                                }),
                              (0, W.tZ)(Ge, {
                                visible: Pt,
                                dialogInfo: It,
                                onCancel: function () {
                                  return s.onHandleLimitTimeCoupon(!1);
                                },
                                onConfirm: function () {
                                  return s.onHandleLimitTimeCoupon(!0);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(b.default.Component))
              ) || Me;
          Page(
            (0, c.createPageConfig)(
              $e,
              "pages/bus/newbook/book",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                enablePullDownRefresh: !1,
                backgroundColorBottom: "#efefef",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            86230, 3322, 36332, 95854, 36941, 97144, 83851, 29907, 30747, 19559,
            11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(47857);
          }
        ),
          e.O();
      },
    ]);
})();
