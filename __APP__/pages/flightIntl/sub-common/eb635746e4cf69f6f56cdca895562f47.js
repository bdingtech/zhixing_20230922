!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [35048],
    {
      38064: function (e, n, t) {
        t.d(n, {
          oS: function () {
            return _;
          },
        });
        var s = t(298),
          r = t(90129),
          a = t(22276),
          i = t(52500),
          o = t(92954),
          c = t(79792),
          l = t(71515),
          u = t(49120),
          d = t(86977),
          f = t(25949),
          p = t.n(f),
          g = t(79910),
          h = t(55916),
          m = t(62792),
          v = t(91006),
          b = t.n(v),
          y = t(41408),
          P = t(83016),
          T = t(48813),
          N = c.default.isTieyou ? "铁友用户" : "智行用户",
          w = "http://pic.c-ctrip.com/train/zt/wechat/avatar-default-".concat(
            c.default.isTieyou ? "ty" : "zx",
            ".png"
          ),
          x = "update_passengers_event",
          C = (0, d.D8)("enableCheckMobile"),
          Z = function (e) {
            var n = e.pid,
              t = e.passengersList,
              s = e.setPassengersList,
              r = e.selected,
              i = t.find(function (e) {
                return e.passengerID === n;
              });
            i && (i.selected = r), s((0, a.Z)(t));
          },
          k = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : N,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : w,
              t = arguments.length > 2 ? arguments[2] : void 0;
            if (t.current._shareUrl) return (0, y.u)(t.current._shareUrl);
            var s = {
              nickName: encodeURIComponent(e),
              avatar: n,
              bookingToken: t.current.token,
            };
            (0, h.il)(s)
              .then(function (e) {
                console.log(e);
                var n = e.resultCode,
                  s = e.resultMessage,
                  r = e.shareUrl;
                1 === n && r
                  ? ((t.current._shareUrl = r), (0, y.u)(r))
                  : (0, u.getCurrentPage)().showCommonDialog(
                      s || "网络异常，请稍后重试"
                    );
              })
              .catch(function (e) {
                return console.log(e);
              });
          },
          D = function (e) {
            var n = e.current,
              t = n.wxNickName,
              s = n.wxAvatar;
            g.Z.sendUbtTrace("FltWWrite_AddPassenger_InviteWrite_click"),
              t && s
                ? k(t, s, e)
                : (0, u.getUserProfileInfo)()
                    .then(function (n) {
                      var t = n.nickName,
                        s = void 0 === t ? "" : t,
                        r = n.avatarUrl,
                        a = void 0 === r ? "" : r;
                      (e.current.wxNickName = s),
                        (e.current.wxAvatar = a),
                        k(s, a, e);
                    })
                    .catch(function () {
                      k(N, w, e);
                    });
          },
          I = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = arguments.length > 1 ? arguments[1] : void 0,
              t = n.current,
              s = t.wxNickName,
              r = t.wxAvatar;
            s && r
              ? k(s, r, n)
              : e.detail && "getUserInfo:ok" === e.detail.errMsg
              ? k(e.detail.userInfo.nickName, e.detail.userInfo.avatarUrl, n)
              : k(N, w, n);
          },
          B = function (e) {
            var n = e.departDate,
              t = e.passenger,
              s = e.updatePassengers;
            (0, P.G6)(
              function (e) {
                s(e);
              },
              t,
              n
            );
          },
          U = function (e) {
            var n = e.passenger,
              t = e.updatePassengers,
              s = void 0 === t ? function () {} : t;
            (0, u.getCurrentPage)().showMultiButtonDialog({
              content: "确定删除乘客 “".concat(n.name, "”?"),
              leftButtonName: "确定",
              rightButtonName: "再想想",
              onRightButtonClick: function () {},
              onLeftButtonClick: function () {
                (0, u.showLoading)(),
                  (0, P.MH)(n)
                    .then(function () {
                      s();
                    })
                    .finally(function () {
                      return (0, u.hideLoading)();
                    });
              },
            });
          },
          A = function (e) {
            var n,
              t = e.passenger,
              s = e.index,
              r = e.onSwipe,
              a = e.togglePassengerSelect,
              i = e.validateParams,
              o = e.updatePassengers,
              c = "",
              u = t.passengerENFirstName + t.passengerENLastName;
            C && !t.mobile
              ? (c = "请完善手机号码，以接收航司重要通知")
              : (0, P.Kq)(t)
              ? ["回乡证", "台胞证"].includes(t.passportType) &&
                !u &&
                (c = "请修改乘机人姓名为英文")
              : (c = "请完善乘机人信息");
            return (0, T.tZ)(l.View, {
              className: p()("item", {
                current: t.selected,
                "with-note": C && !t.mobile,
              }),
              id: "AADI",
              onClick: function () {
                return a(t, s);
              },
              style: "height: ".concat(c ? "194rpx" : "150rpx", ";"),
              children: (0, T.tZ)(m.Z, {
                enable: t.isTouchMove,
                onDelete: function () {
                  return U({ passenger: t, updatePassengers: o });
                },
                onChange: function (e) {
                  var n = e.enable;
                  null == r || r({ isTouchMove: n, index: s });
                },
                height: c ? "194rpx" : "150rpx",
                deleteWidth: "200rpx",
                itemClass: "pas-item-wrapper",
                children: (0, T.BX)(l.View, {
                  className: "item-container",
                  style: "height: ".concat(c ? "194rpx" : "150rpx", ";"),
                  children: [
                    (0, T.tZ)(l.Text, {
                      className: "ifont-edit iconfont",
                      id: "AADJ",
                      onClick: function (e) {
                        e.stopPropagation(),
                          B({
                            departDate: i.flightGoDate,
                            passenger: t,
                            updatePassengers: o,
                          });
                      },
                    }),
                    (0, T.BX)(l.View, {
                      className: "info flex flex-column",
                      children: [
                        (0, T.BX)(l.View, {
                          className: "name",
                          children: [
                            t.name,
                            t.isStudent
                              ? (0, T.tZ)(l.Text, {
                                  className: "type",
                                  children: "学生",
                                })
                              : (0, T.tZ)(l.Text, {
                                  className: "type",
                                  children: t.passengerType,
                                }),
                            null === (n = t.tags) || void 0 === n
                              ? void 0
                              : n.map(function (e) {
                                  return (0,
                                  T.tZ)(l.View, { className: "tag", children: e }, e);
                                }),
                          ],
                        }),
                        (0, T.tZ)(l.View, {
                          className: "identity",
                          children:
                            t.passportType && t.passportCode
                              ? t.passportType + " " + t.maskPassportCode
                              : "请补全证件信息",
                        }),
                        "" !== c &&
                          (0, T.BX)(l.View, {
                            className: "note flex-align-items-center",
                            children: [
                              (0, T.tZ)(l.Text, {
                                className: "ifont-line-tips iconfont",
                              }),
                              c,
                            ],
                          }),
                      ],
                    }),
                    (0, T.tZ)(l.Text, {
                      className:
                        "iconfont " +
                        (t.selected
                          ? "ifont-checkboxed color-primary"
                          : "ifont-checkbox"),
                    }),
                  ],
                }),
              }),
            });
          },
          V = function (e) {
            var n = e.onClose,
              t = e.visible,
              a = e.onConfirm,
              u = e.passengers,
              d = e.selectedPassengers,
              f = e.cards,
              p = e.forbidChildType,
              h = e.forbidBabyType,
              m = e.forceUpdate,
              v = e.showInvite,
              b = e.sort,
              y = e.validateParams,
              N = e.token,
              w = void 0 === N ? "" : N,
              C = e.onPassengersUpdate,
              k = (0, i.useState)(u),
              U = (0, r.Z)(k, 2),
              V = U[0],
              _ = U[1],
              M = (0, i.useRef)({}),
              L = function (e) {
                return (0, P.QE)(y).then(function (n) {
                  b && (n = (0, P.RR)(n, y));
                  var t = V.filter(function (e) {
                    return e.selected;
                  });
                  if (e) {
                    var r = e.newPassengerID,
                      a = e.passenger.passengerID;
                    a &&
                      r &&
                      a !== r &&
                      t.some(function (e) {
                        return e.passengerID == a;
                      }) &&
                      (t = t.filter(function (e) {
                        return e.passengerID != a;
                      })).push(
                        n.find(function (e) {
                          return e.passengerID == r;
                        })
                      );
                  }
                  var i = n.map(function (e) {
                    return (0, s.Z)(
                      (0, s.Z)({}, e),
                      {},
                      {
                        selected: t.some(function (n) {
                          return n.passengerID == e.passengerID;
                        }),
                      }
                    );
                  });
                  return _(i), C(i, e), i;
                });
              };
            (0, i.useEffect)(function () {
              return (
                (M.current.token = w),
                0 != u.length ||
                  m ||
                  L().then(function (e) {
                    _(
                      e.map(function (e) {
                        return (0, s.Z)(
                          (0, s.Z)({}, e),
                          {},
                          {
                            selected: d.some(function (n) {
                              return n.passengerID == e.passengerID;
                            }),
                          }
                        );
                      })
                    );
                  }),
                o.eventCenter.on(x, function (e) {
                  L(e);
                }),
                function () {
                  o.eventCenter.off(x);
                }
              );
            }, []),
              (0, i.useEffect)(
                function () {
                  t && m && L(),
                    !t &&
                      V.some(function (e) {
                        return e.isTouchMove;
                      }) &&
                      _(
                        V.map(function (e) {
                          return (0,
                          s.Z)((0, s.Z)({}, e), {}, { isTouchMove: !1 });
                        })
                      );
                },
                [t]
              ),
              (0, i.useLayoutEffect)(
                function () {
                  if (t && (u.length > 0 || V.length > 0)) {
                    var e = u.length > 0 ? u : V;
                    (e = e.map(function (e) {
                      return (0, s.Z)(
                        (0, s.Z)({}, e),
                        {},
                        {
                          selected: d.some(function (n) {
                            return n.passengerID == e.passengerID;
                          }),
                        }
                      );
                    })),
                      _(e);
                  }
                },
                [u, d]
              );
            var X = function (e) {
                var n = e.isTouchMove,
                  t = e.index;
                n &&
                  _(
                    V.map(function (e, n) {
                      return (0,
                      s.Z)((0, s.Z)({}, e), {}, { isTouchMove: n == t });
                    })
                  );
              },
              S = function (t, r) {
                var a = !t.selected;
                if (a) {
                  if (
                    !(0, P.$4)(
                      (0, s.Z)(
                        (0, s.Z)({}, e),
                        {},
                        {
                          closeDrawer: n,
                          passenger: t,
                          passengers: V,
                          selectedPassengers: V.filter(function (e) {
                            return e.selected;
                          }),
                          toEditPassenger: function (e) {
                            return B({
                              passenger: e.passenger,
                              departDate: y.flightGoDate,
                              updatePassengers: L,
                            });
                          },
                        }
                      )
                    )
                  )
                    return;
                  g.Z.sendUbtTrace("FltWWrite_AddPassenger_Tick_click", {
                    Rank: r + 1,
                  });
                }
                Z({
                  selected: a,
                  passengersList: V,
                  setPassengersList: _,
                  pid: t.passengerID,
                });
              },
              W = V;
            return (
              ((null == f ? void 0 : f.length) > 0 || h || p) &&
                (W = (function (e) {
                  var n = e.passengersList,
                    t = e.cards,
                    s = e.forbidBabyType,
                    r = e.forbidChildType,
                    a = n;
                  if ((null == t ? void 0 : t.length) > 0) {
                    var i = t
                      .map(function (e) {
                        var n;
                        return null ===
                          (n = P.p9.find(function (n) {
                            return n.code == e;
                          })) || void 0 === n
                          ? void 0
                          : n.name;
                      })
                      .filter(function (e) {
                        return !!e;
                      });
                    a = a.filter(function (e) {
                      return i.some(function (n) {
                        return n == e.passportType;
                      });
                    });
                  }
                  return (
                    s &&
                      (a = a.filter(function (e) {
                        return "婴儿票" != e.passengerType;
                      })),
                    r &&
                      (a = a.filter(function (e) {
                        return "儿童票" != e.passengerType;
                      })),
                    a
                  );
                })({
                  passengersList: V,
                  cards: f,
                  forbidBabyType: h,
                  forbidChildType: p,
                })),
              (0, T.BX)(l.View, {
                className: "flt-passenger-list flex-1 flex flex-column",
                children: [
                  (0, T.BX)(l.View, {
                    className: "pas-list-hd",
                    children: [
                      (0, T.tZ)(l.View, {
                        className: "btn-cancel",
                        id: "AADK",
                        onClick: n,
                        children: "取消",
                      }),
                      (0, T.tZ)(l.View, {
                        className: "tit",
                        children: "添加乘客",
                      }),
                      (0, T.tZ)(l.View, {
                        className: "btn-submit color-primary",
                        id: "AADL",
                        onClick: function () {
                          n(),
                            a({
                              selectedPassengers: V.filter(function (e) {
                                return e.selected;
                              }),
                            });
                        },
                        children: "确定",
                      }),
                    ],
                  }),
                  (0, T.BX)(l.View, {
                    className: "pas-list-bd flex-1 flex flex-column",
                    children: [
                      (0, T.BX)(l.View, {
                        className:
                          "pop-add-pasg flex-align-items-center ".concat(
                            c.default.isTieyou ? "ty" : "zx"
                          ),
                        id: "AADM",
                        onClick: function (e) {
                          e.stopPropagation();
                        },
                        catchMove: !0,
                        children: [
                          (0, T.BX)(l.Button, {
                            className: "btn-add",
                            id: "AADN",
                            onClick: function () {
                              return (function (e) {
                                var n = e.departDate,
                                  t = e.updatePassengers;
                                g.Z.sendUbtTrace(
                                  "FltWWrite_AddPassenger_ManuallyAdd_click"
                                ),
                                  B({
                                    departDate: n,
                                    passenger: {},
                                    updatePassengers: t,
                                  });
                              })({
                                departDate: y.flightGoDate,
                                updatePassengers: L,
                              });
                            },
                            children: [
                              (0, T.tZ)(l.Text, {
                                className: "ifont-fail iconfont",
                              }),
                              "添加新乘客",
                            ],
                          }),
                          v &&
                            !g.Z.canUseGetUserProfile &&
                            (0, T.BX)(l.Button, {
                              className: "btn-add color-primary",
                              openType: "getUserInfo",
                              lang: "zh_CN",
                              onGetuserinfo: function (e) {
                                return I(e, M);
                              },
                              children: [
                                (0, T.tZ)(l.Text, {
                                  className: "iconfont ifont-pasgadd",
                                }),
                                "邀好友填写",
                              ],
                            }),
                          v &&
                            g.Z.canUseGetUserProfile &&
                            (0, T.BX)(l.Button, {
                              className: "btn-add color-primary",
                              id: "AADO",
                              onClick: function () {
                                return D(M);
                              },
                              children: [
                                (0, T.tZ)(l.Text, {
                                  className: "iconfont ifont-pasgadd",
                                }),
                                "邀好友填写",
                              ],
                            }),
                        ],
                      }),
                      (0, T.tZ)(l.ScrollView, {
                        className: "white-bg tip-pass-list flex-1",
                        scrollY: !0,
                        children: W.map(function (e, n) {
                          return (0,
                          T.tZ)(A, { passenger: e, index: n, togglePassengerSelect: S, onSwipe: X, validateParams: y, updatePassengers: L }, e.passengerID);
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          };
        (V.propTypes = {
          onClose: b().func,
          visible: b().bool,
          onConfirm: b().func,
          passengers: b().array,
          selectedPassengers: b().array,
          cards: b().array,
          forbidChildType: b().bool,
          forbidBabyType: b().bool,
          forceUpdate: b().bool,
          sort: b().bool,
          showInvite: b().bool,
          validateParams: b().object,
          token: b().string,
          onPassengersUpdate: b().func,
        }),
          (V.defaultProps = {
            visible: !1,
            passengers: [],
            selectedPassengers: [],
            cards: [],
            forbidChildType: !1,
            forbidBabyType: !1,
            forceUpdate: !1,
            showInvite: !1,
            sort: !1,
            validateParams: {},
            token: "",
            onClose: function () {},
            onConfirm: function () {},
            onPassengersUpdate: function () {},
          });
        var _ = function (e) {
          var n,
            t = e.passengers,
            s = e.cards,
            r = e.forbidChildType,
            a = e.forbidBabyType,
            i = e.validateParams,
            o = e.token,
            c = e.showInvite,
            l = e.sort,
            d = e.onPassengersUpdate,
            f = e.onConfirm,
            p =
              (null === (n = e.selectedPassengers) || void 0 === n
                ? void 0
                : n.slice()) || [];
          (0, u.getCurrentPage)().showCommonDrawer({
            hideClose: !0,
            hideTitle: !0,
            height: "80vh",
            content: function (e) {
              var n = e.onClose,
                u = e.visible;
              return (0, T.tZ)(V, {
                onClose: n,
                visible: u,
                passengers: t,
                selectedPassengers: p,
                cards: s,
                forbidChildType: r,
                forbidBabyType: a,
                validateParams: i,
                sort: l,
                token: o,
                showInvite: c,
                onPassengersUpdate: d,
                onConfirm: f,
              });
            },
            className: "flt-passenger-list-pop",
          });
        };
      },
    },
  ]);
})();
