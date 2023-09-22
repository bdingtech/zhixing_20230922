!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    require("../../../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../../../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    require("../../../sub-common/849af97262623a3a03a4c9ba6f8707d6.js"),
    require("../../../sub-common/21c38908e8fa4730fcf449c938917721.js"),
    require("../../../sub-common/e18ac9e89d62ef13595cf53c81489989.js"),
    require("../../../sub-common/af9a4e372fc86155ae3439262ddc36ee.js"),
    require("../../../sub-common/98288617f7b79bd93e6764129b2de6f6.js"),
    require("../../../sub-common/488f20d3ae601fc19d5c835f8ad41f52.js"),
    require("../../../sub-common/64b09328b6ab714bf257627ff5257a73.js"),
    require("../../../sub-common/a84a67620e54e4b0717aaaabef4d4f88.js"),
    require("../../../sub-common/1bfc4d45433b8de6b344d141f5c6c906.js"),
    require("../../../sub-common/6fe85c0e7576cabc17e868b8e899da37.js"),
    require("../../../sub-common/e255e3ffa6c0fa3b59639b749cd45155.js"),
    require("../../../sub-common/41e826946d5acf662d18dcccdf7ba9c9.js"),
    require("../../../sub-common/72d4a16e30125614fb36cb40015efca3.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [73048],
      {
        51283: function (e, t, a) {
          var n,
            i = a(32180),
            r = a(79301),
            o = a(95308),
            s = a(22276),
            c = a(57042),
            l = a(24460),
            d = a(81876),
            u = a(21867),
            _ = a(86066),
            m = a(45023),
            p = a(52500),
            h = a(92954),
            f = a.n(h),
            g = a(75786),
            b = a(71458),
            w = a(71515),
            N = a(81403),
            Z = a(8271),
            v = a.n(Z),
            C = a(64746),
            k = a(49528),
            T = a(67026),
            y = a(32970),
            S = function () {
              (0, y.jn)(
                "https://pages.suanya.com/webapp/20230626-train-candidate-forecast-upload/home?isHideNavBar=YES&isImmersiveMode=YES&source=publicTool&marketrequireinjectmarketadjsurl=1"
              );
            },
            I = a(23577),
            A = a(87298),
            x = a(82955),
            O = a(58374),
            V = a(61885),
            L = a(82750),
            D = a(94205),
            z = a(19972),
            B = a(53550),
            R = a(78995),
            G = a(48813),
            M = function (e) {
              var t = e.shareInfo,
                a = e.page,
                n = e.onBack,
                i = e.onShare,
                r = void 0 === i ? function () {} : i;
              return (0, G.tZ)(R.Z, {
                page: e.page,
                pop: function () {
                  var e;
                  (n && !n()) ||
                    null == a ||
                    null === (e = a.pop) ||
                    void 0 === e ||
                    e.call(a);
                },
                title: "",
                defaultBackButtonColor: "#222222",
                renderLeftView: I.Z.isCRN
                  ? function () {
                      return (0, G.tZ)(w.View, {
                        id: "AMEW",
                        onClick: function () {
                          (n && !n()) || (0, h.navigateBack)({ delta: 1 });
                        },
                        children: (0, G.tZ)(B.Z, {
                          style: {
                            fontSize: 24,
                            color: "#222",
                            marginLeft: 15,
                          },
                          children: "󰲚",
                        }),
                      });
                    }
                  : null,
                renderRightView: function () {
                  return null != t && t.link
                    ? (0, G.BX)(w.View, {
                        className: " _i _k _l _Io",
                        id: "AMEX",
                        onClick: r,
                        children: [
                          (0, G.tZ)(w.Image, {
                            className: " _De _Ce",
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/fxd@3x.png",
                          }),
                          (0, G.tZ)(w.View, {
                            className: " _sb _Vc",
                            children: "分享",
                          }),
                        ],
                      })
                    : (0, G.tZ)(w.View, {});
                },
                renderCenterView: function () {
                  return I.Z.isTieyou
                    ? (0, G.tZ)(w.View, {})
                    : (0, G.tZ)(w.View, {
                        className: " _i _Ga _n",
                        children: (0, G.tZ)(w.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/img_cxzj@3x.png",
                          className: " _Oz _Ua",
                        }),
                      });
                },
                backgroundColor: "transparent",
              });
            },
            j = a(46116),
            q = function (e) {
              var t = e.flag,
                a = e.goSetGrab,
                n = void 0 === a ? function () {} : a,
                i = e.onRefresh,
                r = void 0 === i ? function () {} : i;
              return (0, G.BX)(w.View, {
                className: " _OA _Vb _Oa _i _k _l _PA",
                children: [
                  (0, G.tZ)(w.Image, {
                    className: " _cA _dA",
                    style: t
                      ? { width: (0, k.u1)(179), height: (0, k.u1)(98) }
                      : {},
                    src: t
                      ? "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/wwl@3x.png"
                      : "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/k@3x.png",
                  }),
                  (0, G.tZ)(w.View, {
                    className: " _kg _W _oc _Ej",
                    children: t
                      ? "当前无网络, 请稍后再试"
                      : "当前暂无待兑现候补订单",
                  }),
                  (0, G.tZ)(w.View, {
                    className: " _Fa _ue _gg _Vb _QA _i _l _n _RA _xe _o",
                    style: I.Z.isCRN ? "" : "box-sizing: border-box",
                    id: "AMEJ",
                    onClick: function () {
                      t ? r() : n();
                    },
                    children: t ? "去刷新" : "去购票",
                  }),
                ],
              });
            },
            X = a(90129),
            P = p.default.memo(function (e) {
              var t = e.enable,
                a = e.onDelete,
                n = e.onChange,
                i = e.height,
                r = void 0 === i ? "230rpx" : i,
                o = e.deleteWidth,
                s = void 0 === o ? "200rpx" : o,
                c = e.children,
                l = e.itemClass,
                d = e.deleteBgColor,
                u = void 0 === d ? "#FF5959" : d,
                _ = e.disable,
                m = void 0 !== _ && _;
              if (m) return (0, G.tZ)(w.View, { children: c });
              var p = 750 - parseInt(s) - 48;
              return (0, G.BX)(w.Swiper, {
                className: "slide-delete-view",
                onChange: function (e) {
                  var t = e.detail.current;
                  null == n || n({ enable: 0 != t });
                },
                current: t ? 1 : 0,
                previousMargin: "".concat(p, "rpx"),
                duration: 100,
                adjustHeight: "first",
                style: { height: r },
                disableTouch: m,
                disableTouchmove: m,
                children: [
                  (0, G.tZ)(w.SwiperItem, {
                    className: "item-wrapper ".concat(l),
                    children: c,
                  }),
                  (0, G.tZ)(w.SwiperItem, {
                    className: "delete-wrapper",
                    children: (0, G.tZ)(w.View, {
                      className: "delete-container flex-center",
                      style: { height: r, backgroundColor: u },
                      onClick: function (e) {
                        e.stopPropagation(), a && a();
                      },
                      children: "删除",
                    }),
                  }),
                ],
              });
            }),
            E = function (e) {
              var t = e.children,
                a = e.onDelete,
                n = e.disable,
                i = (0, p.useState)(!1),
                r = (0, X.Z)(i, 2),
                o = r[0],
                s = r[1];
              return (0, G.tZ)(P, {
                enable: o,
                onDelete: function () {
                  null == a || a(), s(!1);
                },
                onChange: function (e) {
                  var t = e.enable;
                  s(t);
                },
                deleteWidth: "112rpx",
                height: "226rpx",
                itemClass: "order-item-wrapper",
                disable: n,
                children: t,
              });
            },
            F = function (e) {
              var t = e.isRecognizeOrder,
                a = e.content,
                n = e.item,
                i = e.index,
                r = e.onClick;
              return (0, G.BX)(w.View, {
                className: " _i _k _l _Vb _dc _XA",
                children: [
                  (0, G.BX)(w.View, {
                    className: " _Z _i _Ga _m",
                    children: [
                      (0, G.BX)(w.View, {
                        className: " _i _Ga _l",
                        children: [
                          (0, G.tZ)(w.View, {
                            className: " _Oc _sb _Wc",
                            children: n.trip,
                          }),
                          n.tag &&
                            (0, G.tZ)(w.View, {
                              className: t
                                ? " _Zg _cB _Al _oc _af"
                                : " _Zg _YA _Al _sh _af",
                              children: n.tag,
                            }),
                        ],
                      }),
                      (0, G.tZ)(w.View, { className: " _j" }),
                      (0, G.BX)(w.View, {
                        className: " _gj _i _l _Ga",
                        children: [
                          (0, G.tZ)(w.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/qp/icon_yyy@3x.png",
                            className: " _Ce _De",
                          }),
                          (0, G.tZ)(w.View, {
                            className: " _Og _V _x _xe",
                            children: n.desc,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, G.BX)(w.View, {
                    className: " _Z _gj _i _Ga",
                    children: [
                      (0, G.tZ)(w.Text, {
                        className: " _ZA _eg _Ma _Na _yc",
                        numberOfLines: 1,
                        style: I.Z.isCRN
                          ? {}
                          : "white-space: nowrap;text-overflow: ellipsis;",
                        children: n.trains,
                      }),
                      (0, G.tZ)(w.Text, {
                        className: " _Sf _aB _eg _Ma _Na _yc",
                        numberOfLines: 1,
                        style: I.Z.isCRN
                          ? {}
                          : "white-space: nowrap;text-overflow: ellipsis;",
                        children: n.passengerNames,
                      }),
                      (0, G.tZ)(w.View, { className: " _j" }),
                    ],
                  }),
                  (0, G.tZ)(w.View, {
                    className: " _qd _i _Ga",
                    children: (0, G.tZ)(w.Image, {
                      className: " _Z _j _Yq",
                      src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/xt@3x.png",
                      style: I.Z.isCRN ? {} : "display:block;",
                    }),
                  }),
                  (0, G.BX)(w.View, {
                    className: " _Z _bg _i _Ga _m _l",
                    children: [
                      (0, G.tZ)(w.View, {
                        className: " _j _R _sb _mk",
                        children: n.tip,
                      }),
                      (0, G.tZ)(w.View, {
                        className:
                          0 === n.status
                            ? " _w _qb _nb _mb _vi _pc _o _Am"
                            : " _bB _oc _nb _mb _vi _pc _o _Am",
                        onClick: function () {
                          r(a[i]);
                        },
                        children: 0 === n.status ? "立即预测" : "查看详情",
                      }),
                    ],
                  }),
                ],
              });
            },
            W = function (e) {
              var t = e.content,
                a = void 0 === t ? [] : t,
                n = e.navigateTo,
                i = void 0 === n ? function () {} : n,
                r = (e.ubtTrace, e.onDelete);
              if (
                ((0, p.useEffect)(function () {
                  null == a || a.length;
                }, a),
                0 === a.length)
              )
                return (0, G.tZ)(w.View, {});
              var o = function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  i({
                    url: "/pages/taroCRN/train/pages/CandidateOrderDetail/index",
                    data: {
                      initData: encodeURIComponent(
                        JSON.stringify({ recognizeId: e.recognizeId })
                      ),
                    },
                  });
                },
                s = a.map(function (e) {
                  var t,
                    a,
                    n =
                      (null === (t = e.trainInfos) || void 0 === t
                        ? void 0
                        : t[0]) || {};
                  return {
                    trip:
                      (n.fromStationName || "") + "-" + (n.toStationName || ""),
                    tag: e.ticketTag || "截图预测订单",
                    desc: e.statusName || "",
                    trains:
                      (null === (a = e.trainInfos) || void 0 === a
                        ? void 0
                        : a
                            .map(function (e) {
                              return (
                                v()(e.trainDate).format("MM月DD日") +
                                " " +
                                e.trainNo
                              );
                            })
                            .join("、")) || "",
                    passengerNames: e.passengerCount
                      ? e.passengerCount + "名乘客"
                      : "",
                    tip: e.ticketDesc || "",
                    status: 1,
                    isTouchMove: !1,
                    orderNumber: e.recognizeId || "",
                  };
                });
              return (0, G.tZ)(w.View, {
                className: " _OA _i _k",
                children: s.map(function (e, t) {
                  return (0, G.tZ)(
                    w.View,
                    {
                      className: " _Oa _Z _yc _Ly",
                      children: (0, G.tZ)(E, {
                        onDelete: function () {
                          return r(e, 1);
                        },
                        deleteWidth: "112rpx",
                        disable: !e.orderNumber,
                        children: (0, G.tZ)(F, {
                          isRecognizeOrder: !0,
                          content: a,
                          item: e,
                          index: t,
                          onClick: o,
                        }),
                      }),
                    },
                    t
                  );
                }),
              });
            },
            J = a(10655),
            U = (function () {
              var e = (0, o.Z)(
                (0, r.Z)().mark(function e(t) {
                  var a, n, i, o, s;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = t.login12306Name),
                            (n = void 0 === a ? "" : a),
                            (i = t.login12306Pas),
                            (o = void 0 === i ? "" : i),
                            (s = { login12306Name: "", login12306Pas: "" }),
                            n || o)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt("return", s);
                        case 4:
                          return (e.next = 6), (0, J.K)(n);
                        case 6:
                          if (((s.login12306Name = e.sent), !o)) {
                            e.next = 13;
                            break;
                          }
                          return (e.next = 10), (0, J.K)(o);
                        case 10:
                          (e.t0 = e.sent), (e.next = 14);
                          break;
                        case 13:
                          e.t0 = "";
                        case 14:
                          return (
                            (s.login12306Pas = e.t0), e.abrupt("return", s)
                          );
                        case 16:
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
            Y = function (e) {
              return v()(e).format("HH:mm");
            },
            H = function (e) {
              var t = Math.floor(parseInt(e) / 60),
                a = parseInt(e) % 60;
              return t > 0
                ? "".concat(t, "时").concat(a, "分")
                : "".concat(a, "分");
            },
            Q = (function () {
              var e = (0, o.Z)(
                (0, r.Z)().mark(function e() {
                  var t,
                    a,
                    n,
                    i,
                    o,
                    s,
                    c,
                    l,
                    d,
                    u,
                    _,
                    m,
                    p,
                    h,
                    f,
                    g = arguments;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = g.length > 0 && void 0 !== g[0] ? g[0] : {}),
                            (e.next = 3),
                            (0, L.q0)()
                          );
                        case 3:
                          return (
                            (i = e.sent),
                            (o = i.userName),
                            (s = i.password),
                            (c = i.memberStatus12306),
                            (e.next = 9),
                            (0, D.R_)()
                          );
                        case 9:
                          if (
                            ((l = e.sent),
                            (d = l && l.userName ? l.userName : ""),
                            I.Z.isCRN &&
                              (d =
                                l && l.bindedMobilePhone
                                  ? l.bindedMobilePhone
                                  : ""),
                            o && s)
                          ) {
                            e.next = 14;
                            break;
                          }
                          return e.abrupt("return");
                        case 14:
                          return (
                            (e.next = 16),
                            U({ login12306Name: o, login12306Pas: s })
                          );
                        case 16:
                          return (
                            (u = e.sent),
                            (_ =
                              null === (t = n.passengers) ||
                              void 0 === t ||
                              null === (a = t.map) ||
                              void 0 === a
                                ? void 0
                                : a.call(t, function (e) {
                                    return {
                                      passengerName: e.name,
                                      passengerType: e.ticketType,
                                      identityType: e.idTypeName,
                                      identityNo: e.idNo,
                                      passengerFlag: e.ticketTypeCode,
                                      contactMobileNo: d,
                                    };
                                  })),
                            (m = {}),
                            (p = n.trainsInfos || []),
                            (m.trainNo = Array.from(
                              new Set(
                                p.map(function (e) {
                                  return e.trainNo;
                                })
                              )
                            ).join(",")),
                            (m.seatName = Array.from(
                              new Set(
                                p.map(function (e) {
                                  return e.seatName;
                                })
                              )
                            ).join(",")),
                            (m.fromName = p[0].fromStationName),
                            (m.toName = p[0].toStationName),
                            (m.fromDate = Array.from(
                              new Set(
                                p.map(function (e) {
                                  return v()(e.departCalendar).format(
                                    "YYYY-MM-DD"
                                  );
                                })
                              )
                            ).join(",")),
                            (m.mainFromTime = Y(p[0].departCalendar)),
                            (m.mainToTime = Y(p[0].arriveCalendar)),
                            (m.trainStationInfos = p.map(function (e) {
                              var t =
                                v()(e.arriveCalendar).diff(e.departCalendar) /
                                6e4;
                              return {
                                trainNumber: e.trainNo,
                                departStation: e.fromStationName,
                                arriveStation: e.toStationName,
                                departTime: Y(e.departCalendar),
                                arriveTime: Y(e.arriveCalendar),
                                time: H(t),
                                durationMinute: t,
                              };
                            })),
                            (h = p.map(function (e) {
                              return {
                                departStationName: e.fromStationName,
                                arriveStationName: e.toStationName,
                                departDateTime: e.departCalendar,
                                arriveDateTime: e.arriveCalendar,
                                trainNumber: e.trainNo,
                                ticketSeat: e.seatName,
                                ticketPrice: e.ticketPrice,
                                submitSuccessTime: n.payTime,
                                expirationTime: n.realizeLimitTime,
                                remark: e.queueInfo,
                                alternateNumber: n.candidateNumber,
                              };
                            })),
                            ((f = {
                              passengerList: _,
                              trainInfo: m,
                              businessTag: "houBuSync",
                              syncAlternate: 1,
                              alternateInfoList: h,
                              mobile: d,
                              contactMobile: d,
                              userName: u.login12306Name,
                              password: u.login12306Pas,
                              userAuth12306Status: "0" === c ? 1 : -1,
                            }).productCodes = ""),
                            (f.productList = []),
                            (f.bookType = 1004),
                            (f.bindCardFlag = 0),
                            (f.acceptBindCardFlag = 0),
                            (f.defaultSpeedSum = 0),
                            (f.ticketOffsetTime = 60),
                            (f.successRate = 0),
                            (f.nearTrainFlag = 0),
                            (f.crossStationFlag = 0),
                            (f.trainNoCanCandidate = 1),
                            (f.selectSpeed = 1),
                            (f.speedSum = 0),
                            (f.autoRenew = !1),
                            (f.bookProcess = 0),
                            e.abrupt("return", (0, O.Ep)(f))
                          );
                        case 46:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            K = function (e) {
              var t = e.content,
                a = void 0 === t ? [] : t,
                n = e.navigateTo,
                i = void 0 === n ? function () {} : n,
                r = e.ubtTrace,
                o = void 0 === r ? function () {} : r,
                s = e.onDelete;
              if (
                ((0, p.useEffect)(function () {
                  null == a || a.length;
                }, a),
                0 === a.length)
              )
                return (0, G.tZ)(w.View, {});
              var c = function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  o("GrabAlternateLoad_DiagButton_click", { pageId: e.pageId }),
                    0 === t.status
                      ? ((0, z.Q)(),
                        Q(t)
                          .then(function (e) {
                            e && 1 === e.resultCode
                              ? I.Z.isCRN
                                ? i({
                                    url: "/pages/taroCRN/train/pages/CandidateOrderDetail/index",
                                    data: {
                                      initData: encodeURIComponent(
                                        JSON.stringify({
                                          orderNumber: e.orderNumber,
                                          status: t.status,
                                        })
                                      ),
                                    },
                                  })
                                : (0, y.t9)(e.orderNumber, t.status)
                              : console.error("诊断订单失败", e.resultMessage);
                          })
                          .catch(function (e) {
                            console.error("诊断订单失败", e);
                          })
                          .finally(function () {
                            (0, z.Z)();
                          }))
                      : 1 === t.status &&
                        (I.Z.isCRN
                          ? i({
                              url: "/pages/taroCRN/train/pages/CandidateOrderDetail/index",
                              data: {
                                initData: encodeURIComponent(
                                  JSON.stringify({
                                    orderNumber: t.relatedOrderNumber,
                                  })
                                ),
                              },
                            })
                          : (0, y.t9)(t.relatedOrderNumber));
                },
                l = a.map(function (e) {
                  var t = e.trainsInfos[0] || {};
                  return {
                    trip: t.fromStationName + "-" + t.toStationName,
                    tag: "",
                    desc: e.realizeStatusName,
                    trains: e.trainsInfos
                      .map(function (e) {
                        return (
                          v()(e.departCalendar).format("MM月DD日") +
                          " " +
                          e.trainNo
                        );
                      })
                      .join("、"),
                    passengerNames: e.passengers
                      .map(function (e) {
                        return e.name;
                      })
                      .join("、"),
                    tip: e.ticketDesc,
                    status: e.status,
                    isTouchMove: !1,
                    orderNumber: e.relatedOrderNumber,
                  };
                });
              return (0, G.tZ)(w.View, {
                className: " _OA _i _k",
                children: l.map(function (e, t) {
                  return (0, G.tZ)(
                    w.View,
                    {
                      className: " _Oa _Z _yc _Ly",
                      children: (0, G.tZ)(E, {
                        onDelete: function () {
                          return s(e, 0);
                        },
                        deleteWidth: "112rpx",
                        disable: !e.orderNumber,
                        children: (0, G.tZ)(F, {
                          content: a,
                          item: e,
                          index: t,
                          onClick: c,
                        }),
                      }),
                    },
                    t
                  );
                }),
              });
            },
            $ = function (e) {
              var t = e.pageId,
                a = e.buttonName,
                n = (e.isShowButton, e.ubtTrace),
                i = void 0 === n ? function () {} : n,
                r = e.onOpenOCR,
                o = void 0 === r ? function () {} : r,
                s = e.onConfirm,
                c = void 0 === s ? function () {} : s;
              return (
                (0, p.useEffect)(function () {
                  i("GrabAlternateLoad_LoginButton_exposure", { pageId: t }),
                    i("GrabAlternateLoad_PicPredict_exposure", { PageId: t });
                }, []),
                (0, G.BX)(w.View, {
                  className: " _OA _Vb _Oa _VA _i _k _l",
                  children: [
                    (0, G.BX)(w.View, {
                      className: " _p _i _Ga _l",
                      children: [
                        (0, G.tZ)(w.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/zh@3x.png",
                          className: " _cc _bc",
                        }),
                        (0, G.tZ)(w.View, {
                          className: " _Ee _sb _dq",
                          children: "登录12306预测候补结果",
                        }),
                      ],
                    }),
                    (0, G.BX)(w.View, {
                      style: (0, k.Ad)(319, 50, 29),
                      className: " _Fa _yb _WA _Oa _i _Ga _n _l _p",
                      id: "AMEH",
                      onClick: function () {
                        i("GrabAlternateLoad_LoginButton_click", { pageId: t }),
                          c();
                      },
                      children: [
                        (0, G.tZ)(w.View, {
                          className: " _yc _Oa _q _s _Z _Y",
                          style: (0, k.Ad)(319, 50, 29),
                          children: (0, G.tZ)(w.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/light.gif",
                            className: " _Oa _u _q _s _Z _Y",
                          }),
                        }),
                        (0, G.tZ)(w.Text, {
                          className: " _u _qb _Wc",
                          children: a || "立即登录预测",
                        }),
                        (0, G.tZ)(w.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/tag@3x.png",
                          className: " _Zc _ug _u _t _io",
                        }),
                      ],
                    }),
                    (0, G.tZ)(j.Z, {
                      borderColor: "#198cff",
                      borderRadius: 14,
                      className: " _bg _yb _WA _i _Ga _n _l",
                      id: "OCRBtn",
                      onClick: function () {
                        i("GrabAlternateLoad_PicPredict_click", { PageId: t }),
                          o();
                      },
                      style: (0, k.Ad)(319, 50, 29),
                      children: (0, G.tZ)(w.Text, {
                        className: " _x _Pa",
                        children: "上传截图预测",
                      }),
                    }),
                  ],
                })
              );
            },
            ee = function (e) {
              var t = e.pageId,
                a = void 0 === t ? "" : t,
                n = e.userName,
                i = void 0 === n ? "" : n,
                r = e.hasGotCandidateOrder,
                o = void 0 !== r && r,
                s = e.orderList,
                c = void 0 === s ? [] : s,
                l = e.recognizeOrderList,
                d = void 0 === l ? [] : l,
                u = e.hasGotPageInfo,
                _ = e.flag,
                m = void 0 !== _ && _,
                h = e.onRepeatImport,
                f = void 0 === h ? function () {} : h,
                g = e.changeAccount,
                b = void 0 === g ? function () {} : g,
                N = e.onConfirm,
                Z = void 0 === N ? function () {} : N,
                v = e.onOpenOCR,
                C = void 0 === v ? function () {} : v,
                k = e.goSetGrab,
                T = void 0 === k ? function () {} : k,
                y = e.ubtTrace,
                S = void 0 === y ? function () {} : y,
                A = e.onRefresh,
                x = void 0 === A ? function () {} : A,
                O = e.navigateTo,
                V = void 0 === O ? function () {} : O,
                L = e.onDelete,
                D = void 0 === L ? function () {} : L,
                z = (0, p.useRef)(null);
              if (
                ((0, p.useEffect)(
                  function () {
                    c.length > 0 &&
                      !z.current &&
                      (e.ubtTrace("GrabAlternateLoad_DiagButton_exposure", {
                        pageId: e.pageId,
                      }),
                      (z.current = !0));
                  },
                  [c]
                ),
                (0, p.useEffect)(
                  function () {
                    i &&
                      S("GrabAlternateLoad_Reload_exposure", {
                        channel: I.Z.isCRN ? "App" : "Applets",
                      });
                  },
                  [i]
                ),
                !i)
              )
                return u && o
                  ? (0, G.BX)(w.View, {
                      children: [
                        (0, G.tZ)($, {
                          pageId: a,
                          ubtTrace: S,
                          onOpenOCR: C,
                          onConfirm: Z,
                        }),
                        d.length > 0 &&
                          (0, G.tZ)(W, {
                            content: d,
                            navigateTo: V,
                            ubtTrace: e.ubtTrace,
                            pageId: e.pageId,
                            onDelete: D,
                          }),
                      ],
                    })
                  : (0, G.tZ)(w.View, {});
              var B = c;
              return (0, G.BX)(w.View, {
                children: [
                  (0, G.BX)(w.View, {
                    className: " _i _Ga _m _l _wz _xz _Vb _be _kc",
                    children: [
                      (0, G.tZ)(w.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/123@3x.png",
                        className: " _cc _bc _lj",
                      }),
                      (0, G.BX)(w.View, {
                        className: "content",
                        children: [
                          (0, G.BX)(w.View, {
                            className: " _i _Ga _l",
                            children: [
                              (0, G.tZ)(w.View, {
                                className: " _Fe _sb _ig",
                                id: "AMEO",
                                onClick: b,
                                children: i,
                              }),
                              (0, G.BX)(j.Z, {
                                borderColor: "rgba(102, 102, 102, 0.2)",
                                borderRadius: 4,
                                className: " _Zg _Al _P _i _Ga _l",
                                children: [
                                  (0, G.tZ)(w.Text, {
                                    className: " _oc _zy _O",
                                    id: "AMEP",
                                    onClick: b,
                                    children: "切换账号",
                                  }),
                                  (0, G.tZ)(w.Image, {
                                    className: " _Jq _Oo",
                                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/go@3x.png",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, G.tZ)(w.View, {
                            className: " _Ac _De _oc _Ag",
                            children: "仅支持非智行平台的待兑现订单",
                          }),
                        ],
                      }),
                      (0, G.tZ)(w.View, {
                        className: " _p _j",
                        id: "AMEQ",
                        onClick: function () {
                          f(),
                            S("GrabAlternateLoad_Reload_click", {
                              channel: I.Z.isCRN ? "App" : "Applets",
                            });
                        },
                        children: (0, G.tZ)(w.View, {
                          className: " _Di _oc _Na",
                          children: "重新导入",
                        }),
                      }),
                      (0, G.tZ)(w.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/2@3x.png",
                        className: " _Og _Ye _og",
                        id: "AMES",
                        onClick: function () {
                          f(),
                            S("GrabAlternateLoad_Reload_click", {
                              channel: I.Z.isCRN ? "App" : "Applets",
                            });
                        },
                      }),
                    ],
                  }),
                  B.length > 0 &&
                    (0, G.tZ)(K, {
                      content: B,
                      navigateTo: V,
                      ubtTrace: e.ubtTrace,
                      pageId: e.pageId,
                      onDelete: D,
                    }),
                  d.length > 0 &&
                    (0, G.tZ)(W, {
                      content: d,
                      navigateTo: V,
                      ubtTrace: e.ubtTrace,
                      pageId: e.pageId,
                      onDelete: D,
                    }),
                  0 === B.length &&
                    0 == d.length &&
                    (0, G.tZ)(q, { flag: m, onRefresh: x, goSetGrab: T }),
                ],
              });
            },
            te = a(82977),
            ae = a(33003),
            ne = function (e) {
              var t = e.isShow,
                a = e.onHide,
                n = void 0 === a ? function () {} : a,
                i = e.onFix,
                r = void 0 === i ? function () {} : i,
                o = (0, ae.c)(n),
                s = o.modalRef,
                c = o.modalClose;
              return t
                ? (0, G.tZ)(te.Z, {
                    ref: s,
                    onCancel: function () {
                      return c();
                    },
                    innerContainerStyle: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      backgroundColor: "#fff",
                    },
                    children: (0, G.BX)(w.View, {
                      className: " _p _Wb _Vb _i _k _l _by",
                      children: [
                        (0, G.tZ)(w.Image, {
                          className: " _Wb _od _u _q _s _t",
                          style: { width: (0, k.fM)() },
                          src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
                        }),
                        (0, G.tZ)(w.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                          className: " _u _xr _qk _cc _bc",
                          id: "AMEF",
                          onClick: c,
                          webp: !0,
                        }),
                        (0, G.tZ)(w.View, {
                          className: " _p _bc _sb _pd _Oc",
                          children: "温馨提示",
                        }),
                        (0, G.tZ)(w.View, {
                          className: " _p _qd _bh _oc _sd _U _o",
                          children:
                            "当前登录的12306账号存在异常，无法获取最新候补状态，需解决异常后导入",
                        }),
                        (0, G.tZ)(w.View, {
                          className: " _p _td _Gc _Z _w _Oa _Xc _o _qb _Wc",
                          id: "AMEG",
                          onClick: r,
                          children: "解决异常",
                        }),
                      ],
                    }),
                  })
                : (0, G.tZ)(w.View, {});
            },
            ie = a(16940),
            re = function (e) {
              var t = e.style,
                a = e.fontSize,
                n = void 0 === a ? 11 : a,
                i = e.protocolColor,
                r = void 0 === i ? "#198CFF" : i;
              return (0, G.BX)(w.View, {
                className: " _Z _Mb _i _BB",
                style: t,
                children: [
                  I.Z.isCRN &&
                    (0, G.BX)(w.Text, {
                      className: " _Ma _D _Q",
                      style: { fontSize: (0, k.u1)(n) },
                      children: [
                        "同意授权将您12306账号待兑现候补订单导入, 请在查看订单前仔细阅读",
                        (0, G.tZ)(w.Text, {
                          className: " _wp _D _Q",
                          id: "AMEL",
                          style: { fontSize: (0, k.u1)(n), color: r },
                          onClick: function () {
                            (0, ie.jn)(
                              "https://market.suanya.com/document/static/train/houbuxieyi.html"
                            );
                          },
                          children: "《候补预测协议》",
                        }),
                      ],
                    }),
                  !I.Z.isCRN &&
                    (0, G.BX)(w.View, {
                      className: " _Ma _D _Q",
                      style: { fontSize: (0, k.u1)(n) },
                      children: [
                        "同意授权将您12306账号待兑现候补订单导入, 请在查看订单前仔细阅读",
                        (0, G.tZ)(w.Text, {
                          className: " _wp _D _Q",
                          id: "AMEM",
                          style: { fontSize: (0, k.u1)(n), color: r },
                          onClick: function () {
                            (0, ie.jn)(
                              "https://market.suanya.com/document/static/train/houbuxieyi.html"
                            );
                          },
                          children: "《候补预测协议》",
                        }),
                      ],
                    }),
                ],
              });
            },
            oe = a(92049),
            se = function (e) {
              var t = e.isShow,
                a = e.isFail,
                n = e.info,
                i = void 0 === n ? "" : n,
                r = e.candidateLuckyCodeToast,
                o = e.onClose,
                s = void 0 === o ? function () {} : o,
                c = e.onConfirm,
                l = void 0 === c ? function () {} : c,
                d = (0, ae.c)(s),
                u = d.modalRef,
                _ = d.modalClose;
              if (!t) return (0, G.tZ)(w.View, {});
              return (0, G.tZ)(te.Z, {
                ref: u,
                onCancel: function () {
                  return _();
                },
                isShowIphoneXAdapter: !1,
                innerContainerStyle: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                },
                children: (0, G.BX)(w.View, {
                  className: " _p _Wb _yd",
                  children: [
                    (0, G.tZ)(w.Image, {
                      className: " _Wb _nv _u _q _s _t",
                      style: { width: (0, k.fM)() },
                      src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_05/bg@3x.png",
                    }),
                    (0, G.BX)(w.View, {
                      className: " _p _aA",
                      children: [
                        (0, G.tZ)(w.View, {
                          className: " _sb _jh",
                          children: i,
                        }),
                        (0, G.tZ)(w.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                          className: " _u _xr _qk _cc _bc",
                          id: "AMEY",
                          onClick: _,
                          webp: !0,
                        }),
                      ],
                    }),
                    a
                      ? (0, G.BX)(w.View, {
                          className: " _i _k _l _Vb _p _Mc _Oa _Rd",
                          children: [
                            (0, G.tZ)(w.Image, {
                              src:
                                (null == r ? void 0 : r.icon) ||
                                "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/k@3x.png",
                              className: " _cA _dA _e",
                            }),
                            (0, G.tZ)(w.View, {
                              className: " _kg _oc _I",
                              children: (null == r ? void 0 : r.title) || "",
                            }),
                            (0, G.tZ)(w.View, {
                              className: " _cg _sb _eA",
                              children: (null == r ? void 0 : r.subTitle) || "",
                            }),
                            (0, G.BX)(w.View, {
                              className: " _p _fA _Gc",
                              children: [
                                (null == r ? void 0 : r.tag) &&
                                  (0, G.BX)(w.View, {
                                    className:
                                      " _gA _i _k _l _Vu _ug _u _t _io",
                                    children: [
                                      (0, G.tZ)(w.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_05/bj@3x.png",
                                        className: " _Vu _ug _u _t _q",
                                      }),
                                      (0, G.tZ)(w.View, {
                                        className: " _p _qb _zy",
                                        children: r.tag || "",
                                      }),
                                    ],
                                  }),
                                (0, G.tZ)(w.View, {
                                  className: " _o _w _Oa _qb _Wc _Xc",
                                  style: { width: (0, k.u1)((0, k.Y1)() - 48) },
                                  id: "AMEZ",
                                  onClick: function () {
                                    r.jumpUrl && (0, V.T8)({ url: r.jumpUrl });
                                  },
                                  children:
                                    (null == r ? void 0 : r.buttonName) ||
                                    "去购票",
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, G.BX)(w.View, {
                          className: " _Vb _Oa _bA _Rd _i _k _l _p",
                          children: [
                            (0, G.tZ)(w.View, {
                              className: " _o _Nc _Mj _sb",
                              children: "诊断12306候补订单，提前看结果",
                            }),
                            (0, G.tZ)(w.View, {
                              className: " _o _Nc _Mj _hA",
                              children: "还可领10个加速包～",
                            }),
                            (0, G.tZ)(w.Image, {
                              className: " _Fa _iA _jA",
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/jsb@3x.png",
                            }),
                          ],
                        }),
                    a
                      ? (0, G.tZ)(w.View, {
                          className: " _Ls",
                          children: (0, G.tZ)(oe.Z, {}),
                        })
                      : (0, G.BX)(w.View, {
                          className: " _i _k _l _Vb _kg _p _Ay _Wb",
                          children: [
                            (0, G.tZ)(re, {
                              style: { paddingLeft: (0, k.u1)(8) },
                            }),
                            (0, G.tZ)(w.View, {
                              className: " _qd _Gc _Xc _w _Oa _o _qb _Wc",
                              style: { width: (0, k.u1)((0, k.Y1)() - 16) },
                              id: "AMEa",
                              oonClick: function () {
                                a ? _() : l();
                              },
                              children: "去诊断",
                            }),
                            (0, G.tZ)(oe.Z, {}),
                          ],
                        }),
                  ],
                }),
              });
            },
            ce = a(22102),
            le = a(16617),
            de = function (e) {
              var t = e.barrages;
              return (0, G.BX)(w.View, {
                className: " _p",
                children: [
                  (0, G.BX)(w.View, {
                    className: " _p _in _JA _Is _i _k",
                    children: [
                      (0, G.tZ)(w.Image, {
                        className: " _vb _gb _Mi",
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/tag_12306@3x.webp",
                      }),
                      (0, G.tZ)(w.Image, {
                        className: " _KA _nf",
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/img_hbycsq@3x.webp",
                      }),
                      (0, G.tZ)(w.View, {
                        className: " _ub",
                        children:
                          t &&
                          (0, G.tZ)(ce.Z, {
                            interval: 2e3,
                            height: 22,
                            data: t.map(function (e, t) {
                              return (0,
                              G.tZ)(le.Z, { version: "v2", content: e }, t);
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, G.tZ)(w.Image, {
                    className: " _Bg _LA _u _MA _rq",
                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/img_hbjgyc@3x.webp",
                  }),
                ],
              });
            },
            ue = function (e) {
              var t = e.content;
              return (
                e.buttonName,
                e.isShowButton,
                t
                  ? (0, G.tZ)(w.View, {
                      className: " _dz _p _i _Ga _n",
                      children: (0, G.tZ)(w.Image, {
                        style: (0, k.Ad)(351, 106, 12),
                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_09/2@3x%202.png",
                      }),
                    })
                  : (0, G.tZ)(w.View, {})
              );
            },
            _e = a(79634),
            me = function (e) {
              var t = e.isShow,
                a = e.pageId,
                n = e.content,
                i = e.onBack,
                r = void 0 === i ? function () {} : i,
                o = e.ubtTrace,
                s = void 0 === o ? function () {} : o,
                c = e.onClose,
                l = void 0 === c ? function () {} : c,
                d = e.onConfirm,
                u = void 0 === d ? function () {} : d,
                _ = (0, ae.c)(l),
                m = _.modalRef,
                h = _.modalClose;
              if (
                ((0, p.useEffect)(
                  function () {
                    t &&
                      n &&
                      s("GrabAlternateLoad_WanliuPopup_exposure", {
                        channel: I.Z.isCRN ? "App" : "Applets",
                        PageId: a,
                      });
                  },
                  [t, n]
                ),
                !t || !n)
              )
                return (0, G.tZ)(w.View, {});
              var f = n.title,
                g = n.buttonName;
              return (0, G.BX)(te.Z, {
                ref: m,
                onCancel: function () {
                  return h();
                },
                innerContainerStyle: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: "#ffffff",
                },
                isShowIphoneXAdapter: !1,
                children: [
                  (0, G.BX)(w.View, {
                    className: " _p _Wb _Jz _Vb _i _k _l",
                    children: [
                      (0, G.tZ)(w.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/qinzi_bg@3x.png",
                        style: (0, k.Ad)(375, 148, 0),
                        className: " _Wb _u _q _s _t",
                      }),
                      (0, G.tZ)(w.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                        className: " _u _xr _qk _cc _bc",
                        id: "AMEU",
                        onClick: h,
                        webp: !0,
                      }),
                      (0, G.tZ)(w.View, {
                        className: " _p _sb _Nc _bc _Oc",
                        children: f,
                      }),
                      (0, G.tZ)(w.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/1t@3x.png",
                        className: " _Fa _p",
                        style: (0, k.Ad)(343, 110, 16),
                      }),
                      (0, G.BX)(w.View, {
                        className: " _Kz _i _Ga _Cc _Z _Gc _Mb",
                        children: [
                          (0, G.tZ)(w.View, {
                            className: " _p _j _Qf _Xc _ol _Oa _o _oc _Wc",
                            id: "ConfirmBack",
                            onClick: r,
                            children: "继续返回",
                          }),
                          (0, G.tZ)(w.View, {
                            className: " _p _j _Xc _w _Oa _o _qb _Wc",
                            id: "AMEV",
                            onClick: function () {
                              u();
                            },
                            children: g,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, G.tZ)(oe.Z, { backgroundColor: "#ffffff" }),
                ],
              });
            },
            pe = a(62901),
            he = a(90582);
          !(function (e) {
            (e.LuckCodeDrawer = "luckCodeDrawer"),
              (e.GetLuckDrawer = "getLuckDrawer"),
              (e.ProtocolDrawer = "protocolDrawer"),
              (e.OCRDrawer = "OCRDrawer");
          })(n || (n = {}));
          var fe,
            ge = a(43884),
            be = function (e) {
              var t = e.content,
                a = e.ubtTrace,
                n = void 0 === a ? function () {} : a;
              return (
                (0, p.useEffect)(function () {
                  n("GrabAlternateLoad_NewUser_exposure", {
                    channel: I.Z.isCRN ? "App" : "Applets",
                  });
                }, []),
                t
                  ? (0, G.BX)(w.View, {
                      className: " _wz _Pz _Qz _dc _p",
                      children: [
                        (0, G.BX)(w.View, {
                          className: " _i _Ga _l _Rz _lc _Mb",
                          children: [
                            (0, G.tZ)(w.Image, {
                              className: " _Sz _nc",
                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/xr@3x.png",
                            }),
                            (0, G.tZ)(w.View, {
                              className: " _Xf _Tz _Na",
                              children: "享以下权益",
                            }),
                          ],
                        }),
                        (0, G.BX)(w.View, {
                          className: " _u _t _q _i _Ga _l _Uz",
                          id: "AMEb",
                          onClick: function () {
                            n("GrabAlternateLoad_NewUser_click", {
                              channel: I.Z.isCRN ? "App" : "Applets",
                            }),
                              (0, y.jn)(t.jumpUrl);
                          },
                          children: [
                            (0, G.tZ)(w.Image, {
                              className: " _u _t _q _lc _Wz",
                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/hd@3x.png",
                            }),
                            (0, G.tZ)(w.View, {
                              className: " _p _qb _Vz",
                              children: "立即领取",
                            }),
                            (0, G.tZ)(w.Image, {
                              className: " _p _Og _og _Ye",
                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/jt@3x.png",
                            }),
                          ],
                        }),
                        (0, G.tZ)(w.View, {
                          className: " _Zn",
                          children: (0, G.tZ)(w.ScrollView, {
                            scrollX: !0,
                            enableFlex: !0,
                            className: " _i _ht",
                            showsHorizontalScrollIndicator: !1,
                            showScrollbar: !1,
                            children: t.benefits.map(function (e, t) {
                              return (0,
                              G.BX)(w.View, { className: " _Xz _p _vi _Ug _ht _i _l _Vb", style: 0 !== t ? { marginLeft: 5 } : {}, children: [(0, G.tZ)(w.Image, { className: " _u _r _t _lc _bi", src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/d@3x.png" }), (0, G.BX)(w.View, { className: " _p _i", children: [(0, G.tZ)(w.Image, { className: " _Ja _Ia", src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/z@3x.png" }), (0, G.tZ)(ge.Z, { useAngle: !0, className: " _Yz _nk", angle: -180, colors: ["#FFF2E5", "#FFF3F3"], locations: [0,
                                            1], children: (0, G.tZ)(w.View, { className: " _Zz _Tt", children: e.tag }) }), (0, G.tZ)(w.Image, { className: " _Ja _Ia", src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_04/y@3x.png" })] }), (0, G.tZ)(w.View, { className: " _p _Ac _Tz _ig", children: e.title }), (0, G.tZ)(w.View, { className: " _p _Xb _Ag", children: e.subTitle })] }, t);
                            }),
                          }),
                        }),
                      ],
                    })
                  : (0, G.tZ)(w.View, {})
              );
            },
            we = function (e) {
              var t = e.style;
              return (0, G.BX)(w.View, {
                className: " _kA _Q _i _Ga",
                style: t,
                children: [
                  (0, G.tZ)(w.View, { className: " _Ha _Ia _Ja _Ka _La" }),
                  (0, G.tZ)(re, {
                    style: { flex: 1 },
                    fontSize: 12,
                    protocolColor: "#222222",
                  }),
                ],
              });
            },
            Ne = a(82225),
            Ze = function (e) {
              var t = e.isShow,
                a = e.pageId,
                n = e.onClose,
                i = e.ubtTrace,
                r = void 0 === i ? function () {} : i;
              return (
                (0, p.useEffect)(
                  function () {
                    t &&
                      r("GrabAlternateLoad_PicPredictPopup_exposure", {
                        PageId: a,
                      });
                  },
                  [t]
                ),
                (0, G.tZ)(Ne.Z, {
                  isShow: t,
                  onClose: n,
                  title: "登录不成功? 试试上传截图预测",
                  showType: Ne.C.SINGLE,
                  buttonName: "立即预测",
                  content: "上传12306候补订单截图，3秒预测候补结果",
                  onButtonClick: function () {
                    r("GrabAlternateLoad_PicPredictPopup_Predict_click", {
                      PageId: a,
                    }),
                      S();
                  },
                })
              );
            },
            ve = "t6LoginFail",
            Ce =
              (0, A.h)()(
                (fe = (function (e) {
                  (0, u.Z)(a, e);
                  var t = (0, _.Z)(a);
                  function a(e) {
                    var n;
                    return (
                      (0, c.Z)(this, a),
                      (n = t.call(this, e)),
                      (0, m.Z)((0, d.Z)(n), "shareInfo", void 0),
                      (0, m.Z)((0, d.Z)(n), "hasAction", !1),
                      (0, m.Z)((0, d.Z)(n), "goToLoginT6", !1),
                      (0, m.Z)((0, d.Z)(n), "hasLoggedT6", !1),
                      (0, m.Z)((0, d.Z)(n), "didMount", !1),
                      (0, m.Z)((0, d.Z)(n), "candidateDetailBack", !1),
                      (0, m.Z)((0, d.Z)(n), "isDeletingOrder", !1),
                      (0, m.Z)((0, d.Z)(n), "deleteOrderNumber", null),
                      (0, m.Z)((0, d.Z)(n), "deleteOrderType", 0),
                      (0, m.Z)(
                        (0, d.Z)(n),
                        "pageId",
                        I.Z.isCRN ? "10650090012" : "10650085077"
                      ),
                      (0, m.Z)((0, d.Z)(n), "showDeleteToast", function (e, t) {
                        var a, i;
                        n.setState({ showDeleteOrderToast: !0 }),
                          (n.deleteOrderNumber = e.orderNumber),
                          (n.deleteOrderType = t),
                          null === (a = (i = n).ubtTrace) ||
                            void 0 === a ||
                            a.call(
                              i,
                              "GrabAlternateDetail_DeletePopup_exposure",
                              {
                                channel: I.Z.isCRN ? "App" : "Applets",
                                PageId: n.pageId,
                              }
                            );
                      }),
                      (0, m.Z)(
                        (0, d.Z)(n),
                        "deleteRecognizeOrder",
                        function (e) {
                          var t = n.state.recognizeOrderList;
                          if (null != t && t.length) {
                            var a,
                              i,
                              r = t.findIndex(function (t) {
                                return t.recognizeId === e;
                              });
                            r < 0
                              ? null === (a = (i = n).ubtDevTrace) ||
                                void 0 === a ||
                                a.call(i, "robTicket_common_log_key", {
                                  scene:
                                    "deleteRecognizeItem-failed-invalid-index",
                                  data: JSON.stringify({
                                    recognizeId: e,
                                    recognizeOrderList: t,
                                  }),
                                })
                              : (t.splice(r, 1),
                                n.setState({
                                  recognizeOrderList: (0, s.Z)(t),
                                }));
                          }
                        }
                      ),
                      (0, m.Z)((0, d.Z)(n), "deleteItem", function (e, t) {
                        if (1 !== t) {
                          var a = n.state.candidateOrderList;
                          if (null != a && a.length) {
                            var i,
                              r,
                              o = a.findIndex(function (t) {
                                return t.relatedOrderNumber === e;
                              });
                            o < 0
                              ? null === (i = (r = n).ubtDevTrace) ||
                                void 0 === i ||
                                i.call(r, "robTicket_common_log_key", {
                                  scene: "deleteItem-failed-invalid-index",
                                  data: JSON.stringify({
                                    orderNumber: e,
                                    candidateOrderList: a,
                                  }),
                                })
                              : (a.splice(o, 1),
                                n.setState({
                                  candidateOrderList: (0, s.Z)(a),
                                }));
                          }
                        } else n.deleteRecognizeOrder(e);
                      }),
                      (0, m.Z)(
                        (0, d.Z)(n),
                        "deleteOrder",
                        (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e(t, a) {
                              var i, o, s, c;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          (i = t || n.deleteOrderNumber),
                                          (o = a || n.deleteOrderType),
                                          !n.isDeletingOrder && i)
                                        ) {
                                          e.next = 5;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 5:
                                        return (
                                          (n.isDeletingOrder = !0),
                                          n.setState({
                                            showDeleteOrderToast: !1,
                                          }),
                                          (e.next = 9),
                                          (0, ie.FB)(
                                            i,
                                            function () {
                                              return n.deleteItem(i, o);
                                            },
                                            function (e) {
                                              var t, a;
                                              return null ===
                                                (t = (a = n).ubtDevTrace) ||
                                                void 0 === t
                                                ? void 0
                                                : t.call(
                                                    a,
                                                    "robTicket_common_log_key",
                                                    e
                                                  );
                                            },
                                            o
                                          )
                                        );
                                      case 9:
                                        (n.deleteOrderType = 0),
                                          (n.deleteOrderNumber = ""),
                                          (n.isDeletingOrder = !1),
                                          (e.next = 20);
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(0)),
                                          (n.deleteOrderType = 0),
                                          (n.deleteOrderNumber = ""),
                                          (n.isDeletingOrder = !1),
                                          null === (s = (c = n).ubtDevTrace) ||
                                            void 0 === s ||
                                            s.call(
                                              c,
                                              "robTicket_common_log_key",
                                              {
                                                scene: "deleteOrder-error",
                                                message: e.t0.message,
                                                data: JSON.stringify({
                                                  orderNumber: t,
                                                }),
                                              }
                                            );
                                      case 20:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 14]]
                              );
                            })
                          );
                          return function (t, a) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (n.state = {
                        candidateIntroduceInfo: null,
                        candidateGuideContents: null,
                        bottomDescs: [],
                        candidateOrderList: [],
                        recognizeOrderList: [],
                        isShowAbnormalModal: !1,
                        t6CandidateInfoSuccess: -1,
                        successUserName: "",
                        hasGotPageInfo: !1,
                        hasGotCandidateOrder: !1,
                        showType: "",
                        luckCode: "",
                        luckCodeFail: !1,
                        alternateGuideToast: null,
                        showAlternateGuideToast: !1,
                        isShowShareRewardActivity: !1,
                        isException: !1,
                        candidateLuckyCodeToast: null,
                        showDeleteOrderToast: !1,
                      }),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            t,
                            a = this;
                          this.didMount = !0;
                          var i = (0, h.getCurrentInstance)();
                          this.getPageInfo().then(function () {
                            var e;
                            if (
                              null != i &&
                              null !== (e = i.router) &&
                              void 0 !== e &&
                              e.params &&
                              !I.Z.isCRN
                            ) {
                              var t = i.router.params.luckCode || "";
                              t &&
                                (a.setState({ luckCode: t }),
                                a.showModalType(n.LuckCodeDrawer));
                            }
                          }),
                            this.checkShareRewardActivity();
                          var r = "";
                          if (
                            ((this.enableDragBack = !1),
                            i &&
                              i.router &&
                              i.router.params &&
                              ((r = i.router.params.fromPage || ""),
                              (this.enableDragBack =
                                1 == i.router.params.enableDragBack)),
                            null == this ||
                              null === (e = this.ubtTrace) ||
                              void 0 === e ||
                              e.call(this, "GrabAlternateLoad_exposure", {
                                channel: I.Z.isCRN ? "App" : "Applets",
                                pageId: this.pageId,
                                fromPage: r,
                              }),
                            null == this ||
                              null === (t = this.ubtTrace) ||
                              void 0 === t ||
                              t.call(
                                this,
                                "GrabAlternateLoad_ChangeAccountButton_exposure",
                                { pageId: this.pageId }
                              ),
                            h.eventCenter.on(
                              "CandidateDetailShow",
                              function () {
                                a.candidateDetailBack = !0;
                              }
                            ),
                            g.Z.addEventListener("DeleteOrder", function (e) {
                              var t = e.data,
                                n = e.type;
                              a.deleteItem(t, n);
                            }),
                            h.eventCenter.on(ve, function () {
                              h.eventCenter.off(ve),
                                a.showModalType(n.OCRDrawer);
                            }),
                            !I.Z.isCRN)
                          ) {
                            var o = f().getCurrentPages();
                            if (1 === (o ? o.length : 1))
                              return void this.setState({
                                hasGotCandidateOrder: !0,
                              });
                          }
                          this.getT6CandidateOrderList().then(function (e) {
                            e ||
                              (a.generateTimer(),
                              a.setState({ hasGotCandidateOrder: !0 }));
                          });
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e = this;
                          if (!this.enableDragBack)
                            var t = setTimeout(function () {
                              clearTimeout(t), (0, D.GN)();
                            });
                          !this.didMount && this.candidateDetailBack
                            ? ((this.candidateDetailBack = !1),
                              this.getT6CandidateOrderList().then(function (t) {
                                t || e.generateTimer();
                              }))
                            : (this.didMount = !1),
                            this.goToLoginT6 &&
                              !this.hasLoggedT6 &&
                              (0, L.q0)().then(function (e) {
                                var t = e.userName,
                                  a = e.password;
                                (t && a) || h.eventCenter.trigger(ve);
                              });
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          h.eventCenter.off("CandidateDetailShow"),
                            g.Z.removeEventListener("DeleteOrder");
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          var e = this.shareInfo,
                            t = e.title,
                            a = e.iconUrl;
                          return (
                            e.link,
                            {
                              title: t || "",
                              path: "/pages/taroCRN/train/pages/candidateDiagnosis/index",
                              imageUrl: a || "",
                            }
                          );
                        },
                      },
                      {
                        key: "showModalType",
                        value: function (e) {
                          this.setState({ showType: e });
                        },
                      },
                      {
                        key: "getTrainCross",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var a,
                                n,
                                i,
                                o,
                                s,
                                c = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (a = {
                                            clientExtInfoList: [
                                              {
                                                key: "isSyncHoubu",
                                                value: t || "0",
                                              },
                                              { key: "preSale", value: "1" },
                                            ],
                                            fromPage: "grabDetail",
                                            fromSource: 6,
                                          }),
                                          (e.next = 3),
                                          (0, L.of)()
                                        );
                                      case 3:
                                        (n = e.sent),
                                          (i = n.name),
                                          (o = n.userName),
                                          (s = n.userID),
                                          (this.curUserName =
                                            o || i || s || ""),
                                          (0, O.$q)(a).then(function (e) {
                                            var t;
                                            if (
                                              1 === e.resultCode &&
                                              (null == e ||
                                              null === (t = e.toasts) ||
                                              void 0 === t
                                                ? void 0
                                                : t.length) > 0
                                            ) {
                                              var a,
                                                n =
                                                  null ===
                                                    (a = e.toasts.filter(
                                                      function (e) {
                                                        return (
                                                          "alternateGuideToast" ===
                                                          (null == e
                                                            ? void 0
                                                            : e.toastCode)
                                                        );
                                                      }
                                                    )) || void 0 === a
                                                    ? void 0
                                                    : a[0];
                                              if (n) {
                                                var i =
                                                  (null == n
                                                    ? void 0
                                                    : n.toastJson) || "";
                                                try {
                                                  if (
                                                    i &&
                                                    "string" == typeof i
                                                  ) {
                                                    var r = JSON.parse(i)
                                                      ? JSON.parse(i)
                                                      : null;
                                                    c.setState({
                                                      alternateGuideToast: r,
                                                    });
                                                  } else
                                                    c.setState({
                                                      alternateGuideToast: null,
                                                    });
                                                } catch (e) {
                                                  c.setState({
                                                    alternateGuideToast: null,
                                                  });
                                                }
                                              }
                                            }
                                          });
                                      case 9:
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
                        key: "getPageInfo",
                        value: function () {
                          var e = this;
                          return (0, O.Hi)()
                            .then(function (t) {
                              if (1 === t.resultCode) {
                                var a = t.candidateIntroduceInfo,
                                  n = t.candidateGuideInfo,
                                  i = t.bottomDesc,
                                  r = t.shareInfo,
                                  o = t.jumpButtonName,
                                  s = t.rewardInfoJson,
                                  c = t.newCustomerBenefits,
                                  l = t.candidateLuckyCodeToast,
                                  d = i ? [i] : [];
                                (e.shareInfo = r),
                                  e.setState({
                                    hasGotPageInfo: !0,
                                    candidateIntroduceInfo: a,
                                    jumpButtonName: o,
                                    candidateGuideContents: n,
                                    bottomDescs: d,
                                    rewardInfoJson: s,
                                    newCustomerBenefits: c,
                                    candidateLuckyCodeToast: l,
                                  });
                              }
                            })
                            .catch(function () {
                              e.setState({ isException: !0 });
                            });
                        },
                      },
                      {
                        key: "generateTimer",
                        value: function () {
                          var e = this;
                          -1 === this.state.t6CandidateInfoSuccess &&
                            setTimeout(function () {
                              e.hasAction ||
                                ((e.hasAction = !0), e.showGetLuckDrawer());
                            }, 1e4);
                        },
                      },
                      {
                        key: "showGetLuckDrawer",
                        value: function () {
                          this.setState({ showType: n.GetLuckDrawer });
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          if (
                            -1 === this.state.t6CandidateInfoSuccess &&
                            !this.hasAction
                          )
                            return (
                              (this.hasAction = !0),
                              this.showGetLuckDrawer(),
                              !1
                            );
                          var e = this.curUserName || "",
                            t = "AlterNateGuideToast-".concat(e),
                            a = f().getStorageSync(t);
                          return (
                            !this.state.alternateGuideToast ||
                            "show" == a ||
                            (this.setState(
                              { showAlternateGuideToast: !0 },
                              function () {
                                f().setStorageSync(t, "show");
                              }
                            ),
                            !1)
                          );
                        },
                      },
                      {
                        key: "checkShareRewardActivity",
                        value: function () {
                          var e = f().getStorageSync(pe.Xi);
                          console.log(
                            "showTime",
                            v()(e).format("YYYY-MM-DD HH:mm:ss")
                          ),
                            (e && !x.Z.isExceed24Hours(e)) ||
                              this.setState({ isShowShareRewardActivity: !0 });
                        },
                      },
                      {
                        key: "jump12306Login",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e(t) {
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (this.goToLoginT6 = !0),
                                          (e.next = 4),
                                          (0, V.ZO)(
                                            {
                                              subTitle:
                                                "登录后可立即查看候补预测结果",
                                              showFastRegister: !1,
                                              extraTip:
                                                '<font color="#FF7733">请放心登录：</font>智行仅查看订单信息预测结果',
                                              title:
                                                "登录12306账号仅导入候补订单",
                                              tags: [
                                                {
                                                  icon: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/qy@3x.png",
                                                  desc: "专业预测",
                                                },
                                                {
                                                  icon: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/qy@3x.png",
                                                  desc: "快速准确",
                                                },
                                                {
                                                  icon: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/qy@3x.png",
                                                  desc: "隐私保障",
                                                },
                                              ],
                                            },
                                            "CandidateScene"
                                          )
                                        );
                                      case 4:
                                        (this.hasLoggedT6 = !0),
                                          this.getT6CandidateOrderList().then(
                                            function (e) {
                                              e && (null == t || t());
                                            }
                                          ),
                                          (e.next = 11);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          console.error("jump12306Login", e.t0);
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
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getT6CandidateOrderList",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, a, n, i, o;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          console.log(
                                            "getT6CandidateOrderList"
                                          ),
                                          (e.next = 3),
                                          (0, L.q0)()
                                        );
                                      case 3:
                                        return (
                                          (t = e.sent),
                                          (a = t.userName),
                                          (n = t.password),
                                          (i = t.t6Mobile),
                                          (0, z.Q)(),
                                          (e.next = 10),
                                          U({
                                            login12306Name: a,
                                            login12306Pas: n,
                                          })
                                        );
                                      case 10:
                                        return (
                                          (o = e.sent),
                                          e.abrupt(
                                            "return",
                                            this.getSyncT6CandidateInfo(
                                              a,
                                              o.login12306Pas,
                                              i,
                                              "",
                                              0
                                            )
                                          )
                                        );
                                      case 12:
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
                        key: "handleT6State",
                        value: function (e) {
                          this.setState({ successUserName: e });
                        },
                      },
                      {
                        key: "handleSyncT6Exception",
                        value: function (e) {
                          this.setState({
                            candidateOrderList: [],
                            t6CandidateInfoSuccess: 0,
                          }),
                            this.hasLoggedT6 && e
                              ? this.handleT6State(e)
                              : this.setState({ isShowAbnormalModal: !0 });
                        },
                      },
                      {
                        key: "getSyncT6CandidateInfo",
                        value: function (e, t, a, n) {
                          var i = this,
                            r =
                              arguments.length > 4 && void 0 !== arguments[4]
                                ? arguments[4]
                                : 0;
                          console.log("aaaaaaa", e, t);
                          var o = r;
                          return new Promise(function (r) {
                            o <= 3e3
                              ? (0, O.fs)({
                                  userName: e,
                                  password: t,
                                  pollingKey: n,
                                })
                                  .then(function (n) {
                                    if (1 === n.resultCode) {
                                      var s = n.candidateDataList,
                                        c = void 0 === s ? [] : s,
                                        l = n.recognizeDataList,
                                        d = void 0 === l ? [] : l;
                                      i.setState(
                                        {
                                          candidateOrderList: c,
                                          recognizeOrderList: d,
                                          t6CandidateInfoSuccess: 1,
                                        },
                                        function () {
                                          r(!0);
                                        }
                                      ),
                                        i.handleT6State(a),
                                        (0, z.Z)();
                                      var u = c.filter(function (e) {
                                          return 1 === e.status;
                                        }),
                                        _ = u && u.length > 0 ? "1" : "0";
                                      i.getTrainCross(_);
                                    } else if (2 === n.resultCode) {
                                      var m = n.pollingKey;
                                      setTimeout(function () {
                                        (o += 500),
                                          r(
                                            i.getSyncT6CandidateInfo(
                                              e,
                                              t,
                                              a,
                                              m,
                                              o
                                            )
                                          );
                                      }, 500);
                                    } else {
                                      r(!1);
                                      var p = n.resultMessage,
                                        h = n.recognizeDataList;
                                      console.log(
                                        "syncT6CandidateInfoPromise",
                                        p
                                      ),
                                        e && t
                                          ? i.handleSyncT6Exception(a)
                                          : i.setState(
                                              { recognizeOrderList: h },
                                              function () {
                                                r(!1);
                                              }
                                            ),
                                        (0, z.Z)();
                                    }
                                  })
                                  .catch(function (e) {
                                    r(!1),
                                      (0, z.Z)(),
                                      i.handleSyncT6Exception(a),
                                      console.log(
                                        "syncT6CandidateInfoPromise",
                                        e
                                      );
                                  })
                              : (r(!1), (0, z.Z)(), i.handleSyncT6Exception(a));
                          });
                        },
                      },
                      {
                        key: "hideAbnormalModal",
                        value: function () {
                          this.setState({ isShowAbnormalModal: !1 });
                        },
                      },
                      {
                        key: "onShare",
                        value: function () {
                          this.ubtTrace("GrabAlternateLoad_ShareButton_click", {
                            pageId: this.pageId,
                          }),
                            this.shareInfo;
                        },
                      },
                      {
                        key: "changeAccount",
                        value: function () {
                          this.ubtTrace(
                            "GrabAlternateLoad_ChangeAccountButton_click",
                            { pageId: this.pageId }
                          ),
                            this.jump12306Login();
                        },
                      },
                      {
                        key: "luckCodeDrawerConfirm",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                a,
                                n,
                                i,
                                o = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            this.state.t6CandidateInfoSuccess),
                                          (this.hasAction = !0),
                                          (e.next = 4),
                                          (0, L.q0)()
                                        );
                                      case 4:
                                        if (
                                          ((a = e.sent),
                                          (n = a.userName),
                                          (i = a.password),
                                          n && i && -1 !== t)
                                        ) {
                                          e.next = 12;
                                          break;
                                        }
                                        return (
                                          this.jump12306Login(function () {
                                            o.checkAndBindOrderLuckCode();
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 12:
                                        this.checkAndBindOrderLuckCode();
                                      case 13:
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
                        key: "bindOrderLuckCode",
                        value: function (e, t, a) {
                          var n = this;
                          return (0, O.QI)({
                            orderNumber: e,
                            luckCode: t,
                          }).then(function (t) {
                            1 === t.resultCode
                              ? (n.closeShowType(),
                                (0, y.t9)(e, "CandidateDiagnosis"))
                              : (a && n.getT6CandidateOrderList(),
                                (0, he.v)(
                                  "",
                                  (null == t ? void 0 : t.resultMessage) ||
                                    "网络异常，请稍候再试"
                                ));
                          });
                        },
                      },
                      {
                        key: "checkAndBindOrderLuckCode",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.candidateOrderList,
                            n = void 0 === a ? [] : a,
                            i = t.luckCode,
                            r = n.find(function (e) {
                              return (
                                0 === e.luckCodeStatus || !e.luckCodeStatus
                              );
                            });
                          r
                            ? ((0, z.Q)(),
                              r.relatedOrderNumber
                                ? this.bindOrderLuckCode(
                                    r.relatedOrderNumber,
                                    i
                                  ).finally(function () {
                                    (0, z.Z)();
                                  })
                                : Q(r).then(function (t) {
                                    t && 1 === t.resultCode
                                      ? e
                                          .bindOrderLuckCode(
                                            t.orderNumber,
                                            i,
                                            !0
                                          )
                                          .finally(function () {
                                            (0, z.Z)();
                                          })
                                      : (0, he.v)("", "诊断订单失败");
                                  }))
                            : this.setState({ luckCodeFail: !0 });
                        },
                      },
                      {
                        key: "closeShowType",
                        value: function () {
                          this.setState({ showType: "" });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            a = this,
                            i = this.state,
                            r = i.candidateIntroduceInfo,
                            o = i.hasGotPageInfo,
                            s = i.hasGotCandidateOrder,
                            c = i.isException,
                            l = i.jumpButtonName,
                            d = i.candidateGuideContents,
                            u = (i.bottomDescs, i.candidateOrderList),
                            _ = i.recognizeOrderList,
                            m = i.successUserName,
                            p = i.t6CandidateInfoSuccess,
                            h = i.isShowAbnormalModal,
                            g = i.rewardInfoJson,
                            Z = i.showType,
                            A = i.luckCode,
                            x = i.luckCodeFail,
                            O = i.alternateGuideToast,
                            V = i.showAlternateGuideToast,
                            L = i.isShowShareRewardActivity,
                            D = i.newCustomerBenefits,
                            z = i.candidateLuckyCodeToast;
                          return c
                            ? (0, G.BX)(w.View, {
                                className: "page",
                                children: [
                                  (0, G.tZ)(M, {
                                    page:
                                      (null === (t = this.props) || void 0 === t
                                        ? void 0
                                        : t.page) || this,
                                  }),
                                  (0, G.BX)(w.View, {
                                    className: "exception",
                                    style: { width: (0, k.fM)(), height: 350 },
                                    children: [
                                      (0, G.tZ)(w.Image, {
                                        className: "exception-img",
                                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/cpp@3x.png",
                                      }),
                                      (0, G.tZ)(w.View, {
                                        className: "exception-txt",
                                        children: "网络异常，请稍后重试",
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, G.BX)(w.View, {
                                className: "page",
                                children: [
                                  (0, G.tZ)(w.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/bg3@3x.png",
                                    className: "bg-img",
                                    style: (0, k.Ad)(375, 280, 0),
                                  }),
                                  (0, G.tZ)(M, {
                                    shareInfo: this.shareInfo,
                                    onBack: this.onBack.bind(this),
                                    onShare: this.onShare.bind(this),
                                    page:
                                      (null === (e = this.props) || void 0 === e
                                        ? void 0
                                        : e.page) || this,
                                  }),
                                  (0, G.BX)(N.Z, {
                                    flexHeight: !0,
                                    showsVerticalScrollIndicator: !1,
                                    scrollY: !0,
                                    children: [
                                      (0, G.tZ)(de, {
                                        barrages:
                                          null == d ? void 0 : d.barrages,
                                      }),
                                      (0, G.tZ)(ue, {
                                        content: r,
                                        buttonName: l,
                                        pageId: this.pageId,
                                        ubtTrace: this.ubtTrace.bind(this),
                                      }),
                                      (0, G.tZ)(ee, {
                                        orderList: u,
                                        recognizeOrderList: _,
                                        userName: m,
                                        hasGotPageInfo: o,
                                        hasGotCandidateOrder: s,
                                        changeAccount:
                                          this.changeAccount.bind(this),
                                        flag: 0 === p && this.hasLoggedT6,
                                        onConfirm: function () {
                                          (a.hasAction = !0),
                                            a.jump12306Login();
                                        },
                                        onOpenOCR: function () {
                                          (a.hasAction = !0), S();
                                        },
                                        onRepeatImport: function () {
                                          (a.hasAction = !0),
                                            a.getT6CandidateOrderList();
                                        },
                                        goSetGrab: y.Ku,
                                        onRefresh:
                                          this.getT6CandidateOrderList.bind(
                                            this
                                          ),
                                        navigateTo: this.navigateTo.bind(this),
                                        ubtTrace: this.ubtTrace.bind(this),
                                        pageId: this.pageId,
                                        onDelete: function (e, t) {
                                          return a.showDeleteToast(e, t);
                                        },
                                      }),
                                      o && (0, G.tZ)(we, {}),
                                      !I.Z.isCRN &&
                                        D &&
                                        (0, G.tZ)(be, {
                                          content: D,
                                          ubtTrace: this.ubtTrace.bind(this),
                                        }),
                                      (0, G.tZ)(T.Z, {}),
                                      (0, G.tZ)(w.View, { className: "blank" }),
                                    ],
                                  }),
                                  (0, G.tZ)(ne, {
                                    isShow: h,
                                    onHide: this.hideAbnormalModal.bind(this),
                                    onFix: function () {
                                      a.hideAbnormalModal(), a.jump12306Login();
                                    },
                                  }),
                                  g &&
                                    L &&
                                    (0, G.tZ)(_e.Z, {
                                      onClose: function () {
                                        f().setStorageSync(
                                          pe.Xi,
                                          v()().valueOf()
                                        ),
                                          a.setState({
                                            isShowShareRewardActivity: !1,
                                          });
                                      },
                                      data: g,
                                      fromPage: "candidateDiagnosis",
                                      ubtTrace: this.ubtTrace,
                                      pageId: this.pageId,
                                    }),
                                  (0, G.tZ)(se, {
                                    isShow: Z === n.LuckCodeDrawer,
                                    candidateLuckyCodeToast: z,
                                    isFail: x,
                                    info: "您的好友分享给你好运码：".concat(A),
                                    onConfirm:
                                      this.luckCodeDrawerConfirm.bind(this),
                                    onClose: this.closeShowType.bind(this),
                                  }),
                                  (0, G.tZ)(me, {
                                    isShow: Z === n.GetLuckDrawer,
                                    content:
                                      null == d ? void 0 : d.luckGuideToast,
                                    pageId: this.pageId,
                                    ubtTrace: this.ubtTrace.bind(this),
                                    onClose: this.closeShowType.bind(this),
                                    onBack: this.pop.bind(this),
                                    onConfirm: function () {
                                      a.ubtTrace(
                                        "GrabAlternateLoad_WanliuPopup_click",
                                        {
                                          channel: I.Z.isCRN
                                            ? "App"
                                            : "Applets",
                                          PageId: a.pageId,
                                        }
                                      ),
                                        a.jump12306Login(function () {
                                          a.closeShowType();
                                        });
                                    },
                                  }),
                                  (0, G.tZ)(C.Z, {
                                    isShow: !!V,
                                    extStyle: {
                                      marginTop:
                                        I.Z.isCRN && "ios" == I.Z.os ? 30 : 0,
                                    },
                                    img: (O && O.img) || "",
                                    title: (O && O.title) || "",
                                    subTitle: (O && O.subTitle) || "",
                                    onClose: function () {
                                      a.setState({
                                        showAlternateGuideToast: !1,
                                      });
                                    },
                                  }),
                                  (0, G.tZ)(b.Z, {
                                    isShow: this.state.showDeleteOrderToast,
                                    confirm: function () {
                                      return a.deleteOrder(
                                        a.deleteOrderNumber,
                                        a.deleteOrderType
                                      );
                                    },
                                    cancel: function () {
                                      return a.setState({
                                        showDeleteOrderToast: !1,
                                      });
                                    },
                                    ubtTrace: this.ubtTrace.bind(this),
                                    pageId: this.pageId,
                                  }),
                                  (0, G.tZ)(Ze, {
                                    ubtTrace: this.ubtTrace.bind(this),
                                    pageId: this.pageId,
                                    isShow: Z === n.OCRDrawer,
                                    onClose: this.closeShowType.bind(this),
                                  }),
                                ],
                              });
                        },
                      },
                    ]),
                    a
                  );
                })(p.Component))
              ) || fe;
          (Ce.enableShareAppMessage = !0),
            Page(
              (0, i.createPageConfig)(
                Ce,
                "pages/taroCRN/train/pages/candidateDiagnosis/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "",
                  navigationStyle: "custom",
                  navigationBarTextStyle: "black",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 59188, 35048, 70486, 97709, 6189, 22843,
            6878, 71229, 10313, 31162, 20858, 19772, 87032, 82524, 43278, 42552,
            67074, 62396, 54576, 85786, 20481, 14810, 3997, 55464, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(51283);
          }
        ),
          e.O();
      },
    ]);
})();
