!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/dc0cfe7c36c66175a01e7585a0cfebf3.js"),
    require("../sub-common/4170bd0bcba1375f71e0231ba3309624.js"),
    require("../sub-common/830933a669f2df38f638a51273333128.js"),
    require("../sub-common/385c2d6294d83fae9baca300c0698c74.js"),
    require("../sub-common/329c774b53fa8717b042c2679ca9dc49.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [63435],
      {
        62974: function (e, t, i) {
          var a,
            n = i(32180),
            o = i(298),
            s = i(93212),
            l = i(22276),
            c = i(79301),
            r = i(95308),
            d = i(57042),
            u = i(24460),
            h = i(21867),
            m = i(86066),
            p = i(52500),
            f = i(71515),
            g = i(8271),
            v = i.n(g),
            w = i(79792),
            b = i(81957),
            N = i(92954),
            T = i.n(N),
            y = i(79910),
            Z = i(3205),
            k = i(79295),
            B = i(96158),
            V = i(4102),
            S = i(49120),
            D = i(34229),
            x = i(18783),
            I = i(25391),
            C = i(86977),
            A = i(10741),
            X = i(58676),
            R = i(94190),
            U = i(24565),
            L = i(48813),
            F = function (e) {
              var t = e.innerClassName,
                i = e.speedPackageTaskInfo,
                a = e.speedPackageTaskList,
                n = e.handleClick,
                o = void 0 === n ? function () {} : n;
              if (!a || (null == a ? void 0 : a.length) <= 0)
                return (0, L.tZ)(f.View, {});
              var s = function (e) {
                o(e);
              };
              return (0, L.BX)(f.View, {
                className: "speed-package-task-box " + t,
                children: [
                  (0, L.BX)(f.View, {
                    className: "speed-package-task-hd",
                    children: [
                      (0, L.tZ)(f.View, {
                        className: "tit",
                        children:
                          (null == i ? void 0 : i.title) || "做任务为好友加速",
                      }),
                      (0, L.tZ)(f.View, {
                        className: "sub-title",
                        children: (null == i ? void 0 : i.subTitle) || "",
                      }),
                    ],
                  }),
                  (0, L.tZ)(f.View, {
                    className: "speed-package-task-bd",
                    children: a.map(function (e) {
                      return (0,
                      L.BX)(f.View, { className: "item", children: [(0, L.tZ)(f.Image, { src: e.icon, className: "icon" }), (0, L.BX)(f.View, { className: "tit-box", children: [(0, L.BX)(f.View, { className: "tit", children: [(0, L.tZ)(f.View, { className: "txt", children: e.title }), (0, L.tZ)(f.View, { className: "tag", children: e.tag })] }), (0, L.tZ)(f.View, { className: "sub-tit", children: e.subTitle })] }), (0, L.BX)(f.View, { className: 1 === e.state ? "btn" : "btn disabled", id: "AJAD", onClick: s.bind(void 0, e), children: [" ", e.btnName || (1 === e.state ? "去完成" : "已完成")] })] }, e.icon);
                    }),
                  }),
                ],
              });
            },
            P = function (e) {
              var t = e.show,
                i = e.dialogInfo,
                a = e.onConfirm,
                n = void 0 === a ? function () {} : a,
                o = e.onClose,
                s = void 0 === o ? function () {} : o;
              return (0, L.tZ)(D.ZtActivityPop, {
                show: t,
                isShowClose: !1,
                children: (0, L.BX)(f.View, {
                  className: "task-dialog-content",
                  children: [
                    (0, L.BX)(f.View, {
                      className: "title-box",
                      children: [
                        (0, L.tZ)(f.View, {
                          className: "title",
                          children: i.title,
                        }),
                        (0, L.tZ)(f.View, {
                          className: "sub-title",
                          children: i.subTitle,
                        }),
                      ],
                    }),
                    (0, L.BX)(f.View, {
                      className: "bags-box",
                      children: [
                        (0, L.BX)(f.View, {
                          className: "item",
                          children: [
                            (0, L.tZ)(f.View, {
                              className: "price",
                              children: i.bags[0].price,
                            }),
                            (0, L.BX)(f.View, {
                              className: "right-box",
                              children: [
                                (0, L.tZ)(f.View, {
                                  className: "title",
                                  children: i.bags[0].name,
                                }),
                                (0, L.tZ)(f.View, {
                                  className: "sub-title",
                                  children: i.bags[0].subTitle,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, L.BX)(f.View, {
                          className: "item",
                          children: [
                            (0, L.tZ)(f.View, {
                              className: "price",
                              children: i.bags[1].price,
                            }),
                            (0, L.BX)(f.View, {
                              className: "right-box",
                              children: [
                                (0, L.tZ)(f.View, {
                                  className: "title",
                                  children: i.bags[1].name,
                                }),
                                (0, L.tZ)(f.View, {
                                  className: "sub-title",
                                  children: i.bags[1].subTitle,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, L.tZ)(f.View, {
                      className: "btn",
                      id: "AJAB",
                      onClick: n,
                      children: (null == i ? void 0 : i.btnName) || "立即收下",
                    }),
                    (0, L.tZ)(f.View, {
                      className: "close-icon",
                      id: "AJAC",
                      onClick: s,
                      children: (0, L.tZ)(f.Icon, {
                        type: "cancel",
                        color: "#999",
                        size: "30",
                      }),
                    }),
                  ],
                }),
              });
            },
            K = i(59076),
            O = i(9416),
            _ = w.default.isTieyou,
            j = 0,
            q = -1,
            G =
              (0, b.h)()(
                (a = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, m.Z)(i);
                  function i(e) {
                    var a;
                    (0, d.Z)(this, i),
                      ((a = t.call(this, e)).pageId = w.default.isTieyou
                        ? "10650069424"
                        : "10650068760"),
                      (a.state = {
                        pageLength: 1,
                        statusBarHeight: y.A.statusBarHeight,
                        accountDesc: null,
                        isScheduleDetailShow: !1,
                        faceSwipingData: null,
                        showType: "",
                      });
                    var n =
                        (0, N.getCurrentInstance)().router &&
                        (0, N.getCurrentInstance)().router.params,
                      o = n.oid,
                      s = void 0 === o ? "" : o,
                      l = n.relativeKey,
                      c = void 0 === l ? "" : l;
                    return (
                      (a.oid = s),
                      (a.relativeKey = decodeURIComponent(c)),
                      a.relativeKey && (j = "1"),
                      a
                    );
                  }
                  return (
                    (0, u.Z)(i, [
                      {
                        key: "onLoad",
                        value: function () {
                          var e = T().getCurrentPages(),
                            t = e ? e.length : 1;
                          this.setState({ pageLength: t });
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.loadData(), B.CZ.call(this, !0);
                        },
                      },
                      {
                        key: "loadData",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, c.Z)().mark(function e() {
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          this.getAssistanceOrderDetail()
                                        );
                                      case 3:
                                        return (
                                          (e.next = 5), this.getGrabSpeedTask()
                                        );
                                      case 5:
                                        this.checkShowGiftBagDialog(),
                                          (e.next = 11);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          (0, S.showToast)(
                                            "网络异常，请稍后重试～"
                                          );
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
                        key: "getAssistanceOrderDetail",
                        value: function () {
                          var e = this;
                          return (0, O._0)({
                            orderNumber: this.oid || "",
                            relativeKey: this.relativeKey || "",
                          })
                            .then(function (t) {
                              if (t && 1 == t.resultCode) {
                                var i,
                                  a,
                                  n,
                                  o,
                                  s,
                                  l,
                                  c,
                                  r,
                                  d,
                                  u,
                                  h = t.orderInfo,
                                  m = void 0 === h ? {} : h,
                                  p = t.accelerateBtnName,
                                  f = t.speedInfo,
                                  g = void 0 === f ? {} : f,
                                  v = t.orderInterceptT6AccountInfo,
                                  w = void 0 === v ? {} : v,
                                  b = t.relativeAccountDesc,
                                  N = t.deleteRelativeBindFlag,
                                  T = t.unBindRelativeInfo,
                                  y = t.giftBagInfo;
                                (e.oid = m.orderNumber || e.oid),
                                  (e.shareKey = m.shareKey),
                                  (e.relativeKey =
                                    m.relativeKey || e.relativeKey);
                                var Z = null == m ? void 0 : m.orderStateInfo;
                                q = (null == Z ? void 0 : Z.stateCode) || -1;
                                var k =
                                    (null == g ||
                                    null === (i = g.speedRange) ||
                                    void 0 === i
                                      ? void 0
                                      : i.split(",").map(function (e) {
                                          return +e;
                                        })) || [],
                                  B =
                                    (null == g ||
                                    null === (a = g.speedRangeName) ||
                                    void 0 === a
                                      ? void 0
                                      : a.split(",")) || [];
                                (g.speedRange = k), (g.speedRangeName = B);
                                var S = k[k.length - 1],
                                  D = Math.floor(
                                    (g.currentSpeedLevel / S) * 100
                                  );
                                D < 2 ? (D = 2) : D > 100 && (D = 100),
                                  (g.speedLineWidth = D + "%");
                                var x = "animate",
                                  I = !0,
                                  C = k.map(function (e, t) {
                                    var i,
                                      a = !1,
                                      n = !1;
                                    return (
                                      g.currentSpeedLevel >= e &&
                                        ((g.currentSpeedName = B[t]),
                                        (x = "animate" + t)),
                                      ((t === k.length - 1 && I) ||
                                        (g.currentSpeedLevel < k[t + 1] &&
                                          I)) &&
                                        ((a = !0), (I = !1)),
                                      "VIP" ===
                                        (null === (i = B[t]) || void 0 === i
                                          ? void 0
                                          : i.toUpperCase()) && (n = !0),
                                      {
                                        name: B[t],
                                        isCurrent: a,
                                        speed: t,
                                        isVIP: n,
                                      }
                                    );
                                  }),
                                  A =
                                    (null == m ? void 0 : m.useGrabCoupon) || 0,
                                  X = null == m ? void 0 : m.orderTicket,
                                  R =
                                    (null == X ||
                                    null === (n = X.fromDates) ||
                                    void 0 === n
                                      ? void 0
                                      : n.split(",")) || [],
                                  U =
                                    (null == X ||
                                    null === (o = X.trainNos) ||
                                    void 0 === o
                                      ? void 0
                                      : o.split(",")) || [],
                                  L =
                                    (null == X ||
                                    null === (s = X.seatNames) ||
                                    void 0 === s
                                      ? void 0
                                      : s.split(",")) || [],
                                  F =
                                    (null == X ||
                                    null === (l = X.fromTime) ||
                                    void 0 === l
                                      ? void 0
                                      : l.slice(0, 5)) || "",
                                  P = (null == m ? void 0 : m.passengers) || [];
                                (m.orderDesc =
                                  V.Z.formatDate(R[0], "M月D日") +
                                  "出发 " +
                                  F +
                                  " " +
                                  U[0] +
                                  " " +
                                  L[0] +
                                  " " +
                                  P[0].passengerName),
                                  (m.formatFromDates = R.map(function (e) {
                                    return V.Z.formatDate(e, "M月D日");
                                  }).join("、")),
                                  (m.formatTrainNos = U.join("、")),
                                  (m.formatSeatNames = L.join("、")),
                                  (m.fromTime = F);
                                var K = null,
                                  O =
                                    (null == w ? void 0 : w.userOperateInfo) ||
                                    {};
                                ("f" !==
                                  (null == w ? void 0 : w.interceptType) &&
                                  "m" !==
                                    (null == w ? void 0 : w.interceptType)) ||
                                  ((K = {
                                    interceptType:
                                      null == w ? void 0 : w.interceptType,
                                    interceptReason:
                                      null == w ? void 0 : w.interceptReason,
                                    icon: (null == O ? void 0 : O.icon) || "",
                                    title: (null == O ? void 0 : O.title) || "",
                                    subTitle:
                                      (null == O ? void 0 : O.subTitle) || "",
                                    operateBtnName:
                                      (null == O ? void 0 : O.operateBtnName) ||
                                      "",
                                    currentrOrderAccountInfo:
                                      (null == O
                                        ? void 0
                                        : O.currentrOrderAccountInfo) || {},
                                  }),
                                  Object.assign(
                                    K,
                                    O.registerPassengers,
                                    O.currentrOrderAccountInfo
                                  ));
                                var _ = null;
                                y &&
                                  ((e.couponScene = y.bagToast.couponScene),
                                  ((_ = y.bagToast).bagType = y.bagType),
                                  (_.jumpUrl = y.jumpUrl)),
                                  p && e.newUbtTrace(201247),
                                  K && e.newUbtTrace(201249),
                                  T && e.newUbtTrace(201251),
                                  e.newUbtTrace(201246, { state: q, from: j }),
                                  e.setState(
                                    {
                                      animateStyle: x,
                                      orderInfo: m,
                                      accelerateBtnName: p,
                                      speedInfo: g,
                                      speedLevels: C,
                                      orderStateInfo: Z,
                                      useGrabCoupon: A,
                                      faceSwipingData: K,
                                      orderInterceptT6AccountInfo: w,
                                      accountDesc: {
                                        title: null == b ? void 0 : b.title,
                                        descList:
                                          null == b ||
                                          null === (c = b.descList) ||
                                          void 0 === c
                                            ? void 0
                                            : c.map(function (e) {
                                                return {
                                                  title:
                                                    null == e
                                                      ? void 0
                                                      : e.title,
                                                  subTitle:
                                                    null == e
                                                      ? void 0
                                                      : e.subTitle,
                                                  icon:
                                                    null == e ? void 0 : e.icon,
                                                };
                                              }),
                                      },
                                      deleteRelativeBindFlag: N,
                                      unBindRelativeInfo: {
                                        unBindFlag:
                                          null == T ? void 0 : T.unBindFlag,
                                        title:
                                          null == T ||
                                          null === (r = T.unBindToast) ||
                                          void 0 === r
                                            ? void 0
                                            : r.title,
                                        subTitle:
                                          null == T ||
                                          null === (d = T.unBindToast) ||
                                          void 0 === d
                                            ? void 0
                                            : d.subTitle,
                                        btnName:
                                          null == T ||
                                          null === (u = T.unBindToast) ||
                                          void 0 === u
                                            ? void 0
                                            : u.btnName,
                                      },
                                      giftBagDialogInfo: _,
                                    },
                                    function () {
                                      e.getShareImage();
                                    }
                                  );
                              } else console.error("init data  result error ", t);
                            })
                            .catch(function (e) {
                              console.error("init data error ", e);
                            });
                        },
                      },
                      {
                        key: "getGrabSpeedTask",
                        value: function () {
                          var e = this;
                          return (0, K.GE)({
                            orderNumber: this.oid || "",
                            scene: 1,
                          }).then(function (t) {
                            if (1 == t.resultCode) {
                              var i = {
                                  title:
                                    (null == t ? void 0 : t.taskTitle) || "",
                                  subTitle:
                                    (null == t ? void 0 : t.taskSubTitle) || "",
                                },
                                a = (null == t ? void 0 : t.tasks) || [];
                              a.length > 0 &&
                                e.newUbtTrace(203703, {
                                  exposureType: "normal",
                                  bizKey: "z_bq_speedup_module_show",
                                }),
                                e.setState({
                                  speedPackageTaskInfo: i,
                                  speedPackageTaskList: a,
                                });
                            }
                          });
                        },
                      },
                      {
                        key: "checkShowGiftBagDialog",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.giftBagDialogInfo,
                            a = void 0 === i ? [] : i,
                            n = t.speedPackageTaskList,
                            o = void 0 === n ? [] : n,
                            s = R.TU.get();
                          if (
                            ((s && Array.isArray(s)) || R.TU.set([]),
                            1 === (null == a ? void 0 : a.bagType))
                          ) {
                            var c = !0;
                            Array.isArray(s) &&
                              s.forEach(function (t) {
                                t.oid === e.oid && t.newGuestFlag && (c = !1);
                              }),
                              c &&
                                (R.TU.set(
                                  [].concat((0, l.Z)(s), [
                                    { oid: this.oid, newGuestFlag: !0 },
                                  ])
                                ),
                                this.newUbtTrace(203703, {
                                  exposureType: "popup",
                                  bizKey: "z_bq_new_gift_pop_show",
                                })),
                              this.setState({ giftBagDialogVisible: c });
                          } else if (2 === (null == a ? void 0 : a.bagType)) {
                            var r = !0;
                            Array.isArray(s) &&
                              s.forEach(function (t) {
                                t.oid === e.oid &&
                                  t.taskFinishedFlag &&
                                  (r = !1);
                              }),
                              Array.isArray(o) &&
                                o.forEach(function (e) {
                                  1 === e.state && (r = !1);
                                }),
                              r &&
                                (R.TU.set(
                                  [].concat((0, l.Z)(s), [
                                    { oid: this.oid, taskFinishedFlag: !0 },
                                  ])
                                ),
                                this.newUbtTrace(203703, {
                                  exposureType: "popup",
                                  bizKey: "z_bq_magic_gift_pop_show",
                                })),
                              this.setState({ giftBagDialogVisible: r });
                          }
                        },
                      },
                      {
                        key: "recordShareMode",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "";
                          (0, S.showLoading)();
                          var t = { shareType: "weixin", shareKey: e };
                          return (0, A._0V)(t).finally(function () {
                            return (0, S.hideLoading)();
                          });
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          var e = k.Z.getUnionData(),
                            t = this.state,
                            i = t.orderInfo,
                            a = void 0 === i ? {} : i,
                            n = t.isShareGZH,
                            o = void 0 !== n && n;
                          return (
                            this.recordShareMode(this.shareKey),
                            I.ZP.getRobShareObj({
                              shareKey: this.shareKey,
                              arriveStation: a.toStation,
                              allianceid: e.aid,
                              sid: e.sid,
                              shareImgs: [
                                "https://images3.c-ctrip.com/ztrip/train.song/gonggong/img_std1.png",
                              ],
                              type: "weixin",
                              abChannelType: "wxFriend",
                              from: "accountHelpOrder",
                              isShareGZH: o,
                            })
                          );
                        },
                      },
                      {
                        key: "onScheduleDetailShowChange",
                        value: function () {
                          this.setState({
                            isScheduleDetailShow:
                              !this.state.isScheduleDetailShow,
                          });
                        },
                      },
                      {
                        key: "handleDeleteOrder",
                        value: function () {
                          (0, S.showLoading)(),
                            (0, O.MX)({ relativeKey: this.relativeKey }).then(
                              function (e) {
                                (0, S.hideLoading)(),
                                  1 === e.resultCode
                                    ? T().navigateBack()
                                    : (0, S.showToast)("删除失败");
                              }
                            );
                        },
                      },
                      {
                        key: "onCopyOrderNumber",
                        value: function () {
                          T().setClipboardData({
                            data: this.oid,
                            success: function () {
                              T().showToast({
                                title: "复制成功",
                                icon: "none",
                              });
                            },
                          });
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          this.state.pageLength > 1
                            ? T().navigateBack()
                            : y.Z.relaunchHome();
                        },
                      },
                      {
                        key: "renderScheduleDetail",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.orderInfo,
                            a = t.isScheduleDetailShow;
                          return i
                            ? (0, L.BX)(f.View, {
                                className: "white-box order-box ".concat(
                                  a ? "open" : ""
                                ),
                                children: [
                                  (0, L.BX)(f.View, {
                                    className: "order-hd",
                                    children: [
                                      (0, L.BX)(f.View, {
                                        className: "cont",
                                        children: [
                                          (0, L.tZ)(f.View, {
                                            className: "tit",
                                            children: ""
                                              .concat(i.fromStation, "-")
                                              .concat(i.toStation),
                                          }),
                                          (0, L.tZ)(f.View, {
                                            className: "detail",
                                            children: i.orderDesc,
                                          }),
                                        ],
                                      }),
                                      (0, L.BX)(f.View, {
                                        className: "rbox",
                                        id: "AJAE",
                                        onClick: function () {
                                          e.onScheduleDetailShowChange();
                                        },
                                        children: [
                                          a ? "收起" : "任务详情",
                                          (0, L.tZ)(f.Text, {
                                            className:
                                              "ifont-triangle iconfont",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a &&
                                    (0, L.BX)(f.View, {
                                      className: "order-bd",
                                      children: [
                                        (0, L.BX)(f.View, {
                                          className: "item",
                                          children: [
                                            (0, L.tZ)(f.View, {
                                              className: "label",
                                              children: "乘客",
                                            }),
                                            (0, L.tZ)(f.View, {
                                              className: "cont",
                                              children: "".concat(
                                                i.passengers
                                                  .map(function (e) {
                                                    return e.passengerName;
                                                  })
                                                  .join("、")
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, L.BX)(f.View, {
                                          className: "item",
                                          children: [
                                            (0, L.tZ)(f.View, {
                                              className: "label",
                                              children: "日期",
                                            }),
                                            (0, L.tZ)(f.View, {
                                              className: "cont",
                                              children: i.formatFromDates || "",
                                            }),
                                          ],
                                        }),
                                        (0, L.BX)(f.View, {
                                          className: "item",
                                          children: [
                                            (0, L.tZ)(f.View, {
                                              className: "label",
                                              children: "车次",
                                            }),
                                            (0, L.tZ)(f.View, {
                                              className: "cont",
                                              children:
                                                i.fromTime +
                                                  " " +
                                                  i.formatTrainNos || "",
                                            }),
                                          ],
                                        }),
                                        (0, L.BX)(f.View, {
                                          className: "item",
                                          children: [
                                            (0, L.tZ)(f.View, {
                                              className: "label",
                                              children: "座席",
                                            }),
                                            (0, L.tZ)(f.View, {
                                              className: "cont",
                                              children: i.formatSeatNames || "",
                                            }),
                                          ],
                                        }),
                                        (0, L.BX)(f.View, {
                                          className: "item",
                                          children: [
                                            (0, L.tZ)(f.View, {
                                              className: "label",
                                              children: "订单号",
                                            }),
                                            (0, L.tZ)(f.View, {
                                              className: "cont",
                                              children: this.oid || "",
                                            }),
                                            (0, L.tZ)(f.View, {
                                              className: "copy",
                                              id: "AJAF",
                                              onClick: this.onCopyOrderNumber,
                                              children: "复制",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, L.tZ)(f.View, {});
                        },
                      },
                      {
                        key: "renderRealOrderDetail",
                        value: function () {
                          var e,
                            t,
                            i = this.state.orderInfo,
                            a = i.orderTicket,
                            n = void 0 === a ? {} : a,
                            o = i.realOrderTicket,
                            s = void 0 === o ? {} : o,
                            l = v()(s.toDate + " " + s.toTime).diff(
                              v()(s.fromDate + " " + s.fromTime),
                              "minute"
                            ),
                            c = Math.floor(l / 60),
                            r = l - 60 * c,
                            d =
                              c > 0
                                ? "".concat(c, "小时").concat(r, "分钟")
                                : "".concat(r, "分钟"),
                            u =
                              (null === (e = s.fromTime) || void 0 === e
                                ? void 0
                                : e.slice(0, 5)) || "",
                            h =
                              (null === (t = s.toTime) || void 0 === t
                                ? void 0
                                : t.slice(0, 5)) || "",
                            m =
                              V.Z.getWeekDayDesc(
                                s.fromDate + " " + s.fromTime
                              ) || "",
                            p =
                              V.Z.getWeekDayDesc(s.toDate + " " + s.toTime) ||
                              "";
                          return (0, L.BX)(f.View, {
                            className: "white-box journey-tick",
                            children: [
                              (0, L.BX)(f.View, {
                                className: "journey-tick-hd",
                                children: [
                                  (0, L.BX)(f.View, {
                                    className: "from",
                                    children: [
                                      (0, L.tZ)(f.View, {
                                        className: "date",
                                        children:
                                          V.Z.formatDate(s.fromDate, "M月D日") +
                                          " " +
                                          m,
                                      }),
                                      (0, L.tZ)(f.View, {
                                        className: "time",
                                        children: u,
                                      }),
                                      (0, L.tZ)(f.View, {
                                        className: "station",
                                        children: i.fromStation,
                                      }),
                                    ],
                                  }),
                                  (0, L.BX)(f.View, {
                                    className: "mid",
                                    children: [
                                      (0, L.tZ)(f.Image, {
                                        className: "img",
                                        src: "https://images3.c-ctrip.com/ztrip/train.song/grab/bqxqy/icon_hc_kp@3x.png",
                                      }),
                                      (0, L.tZ)(f.Text, {
                                        className: "txt",
                                        children: d,
                                      }),
                                    ],
                                  }),
                                  (0, L.BX)(f.View, {
                                    className: "to",
                                    children: [
                                      (0, L.tZ)(f.View, {
                                        className: "date",
                                        children:
                                          V.Z.formatDate(s.toDate, "M月D日") +
                                          " " +
                                          p,
                                      }),
                                      (0, L.tZ)(f.View, {
                                        className: "time",
                                        children: h,
                                      }),
                                      (0, L.tZ)(f.View, {
                                        className: "station",
                                        children: i.toStation,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              i.passengers &&
                                i.passengers.length > 0 &&
                                (0, L.BX)(f.View, {
                                  className: "journey-tick-bd",
                                  children: [
                                    (0, L.BX)(f.View, {
                                      className: "tit-box",
                                      children: [
                                        (0, L.tZ)(f.Text, {
                                          className: "left",
                                          children: "乘客",
                                        }),
                                        (0, L.tZ)(f.Text, {
                                          className: "mid",
                                          children: "车次",
                                        }),
                                        (0, L.tZ)(f.Text, {
                                          className: "right",
                                          children: "座席",
                                        }),
                                      ],
                                    }),
                                    i.passengers.map(function (e) {
                                      return (0,
                                      L.BX)(f.View, { className: "item", children: [(0, L.tZ)(f.Text, { className: "txt left", children: e.passengerName }), (0, L.tZ)(f.Text, { className: "txt mid", children: s.trainNo }), (0, L.tZ)(f.Text, { className: "txt right", children: n.seatNames || "" })] }, e.passengerName);
                                    }),
                                  ],
                                }),
                            ],
                          });
                        },
                      },
                      {
                        key: "notifyT6AccountAccount",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var i, a, n, o, s, l, r, d;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = t.operateResult),
                                          (a = t.operateResultMsg),
                                          (n = void 0 === a ? "" : a),
                                          (o = t.userName),
                                          (s = void 0 === o ? "" : o),
                                          (e.prev = 1),
                                          (l =
                                            this.state
                                              .orderInterceptT6AccountInfo),
                                          (r = (void 0 === l ? {} : l)
                                            .interceptType),
                                          (d = {
                                            orderNumber: this.oid,
                                            operateType: r,
                                            operateResult: i,
                                            operateResultMsg: n,
                                            userT6LoginName: s,
                                            verifyType: 1,
                                          }),
                                          (e.next = 7),
                                          (0, K.lz)(d)
                                        );
                                      case 7:
                                        e.next = 12;
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 9]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "toFaceCheck",
                        value: function () {
                          var e = this,
                            t = this.state.faceSwipingData,
                            i = t.userName,
                            a = void 0 === i ? "" : i,
                            n = t.accountMobile,
                            o = void 0 === n ? "" : n,
                            s = t.interceptType,
                            l = void 0 === s ? "" : s;
                          this.newUbtTrace(201250);
                          var c = "/pages/12306/face/face?userName=".concat(
                            a,
                            "&fromType=4&businessType=1"
                          );
                          if ("m" === l)
                            return this.purePhoneTextCheck({
                              userName: a,
                              mobile: o,
                              success: function () {
                                e.notifyT6AccountAccount({
                                  operateResult: 1,
                                  operateResultMsg: "操作成功",
                                  userName: a,
                                }),
                                  setTimeout(function () {
                                    e.loadData();
                                  }, 300);
                              },
                            });
                          this.navigateTo({
                            url: c,
                            callback: function (t) {
                              var i = t || {},
                                n = i.certificationResultCode,
                                o = i.retMessage;
                              1 === n
                                ? (e.notifyT6AccountAccount({
                                    operateResult: 1,
                                    operateResultMsg: "操作成功",
                                    userName: a,
                                  }),
                                  setTimeout(function () {
                                    e.loadData();
                                  }, 300))
                                : 2 === n &&
                                  setTimeout(function () {
                                    T().showModal({
                                      title: "温馨提示",
                                      content: o || "核验失败",
                                      confirmText: "知道了",
                                      showCancel: !1,
                                      confirmColor: _ ? "#fc6e51" : "#0080FF",
                                      success: function () {},
                                    });
                                  }, 500);
                            },
                          });
                        },
                      },
                      {
                        key: "purePhoneTextCheck",
                        value: function (e) {
                          var t = e.userName,
                            i = void 0 === t ? "" : t,
                            a = e.mobile,
                            n = void 0 === a ? "" : a,
                            o = e.password,
                            s = void 0 === o ? "" : o,
                            l = e.success,
                            c = void 0 === l ? function () {} : l,
                            r = e.fail,
                            d = void 0 === r ? function () {} : r,
                            u = "https://"
                              .concat(
                                w.default.h5domain,
                                "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                              )
                              .concat(w.default.partner, "#/verify?partner=")
                              .concat(
                                w.default.partner,
                                "&fromPage=accountHelpOrder&userName="
                              )
                              .concat(i, "&mobile=")
                              .concat(n, "&password=")
                              .concat(s);
                          Z.Z.twebview({
                            data: {
                              url: u,
                              bridgeIns: function (e) {
                                console.log("orderdetail webviewCB e = ", e),
                                  Array.isArray(e.detail.data)
                                    ? c(e.detail.data)
                                    : d();
                              },
                            },
                          });
                        },
                      },
                      {
                        key: "returnIcon",
                        value: function () {
                          var e = this.state.orderStateInfo,
                            t = null == e ? void 0 : e.stateCode;
                          return 9 === t
                            ? "icon-wait"
                            : 18 === t || 6 === t || 3 === t || 5 === t
                            ? "icon-info"
                            : "icon-success";
                        },
                      },
                      {
                        key: "onShowUnbindDialog",
                        value: function () {
                          var e = this;
                          this.newUbtTrace(201252);
                          var t = this.state.unBindRelativeInfo;
                          this.showMultiButtonDialog({
                            title: null == t ? void 0 : t.title,
                            content: null == t ? void 0 : t.subTitle,
                            leftButtonName: "取消",
                            onLeftButtonClick: function () {},
                            rightButtonName: "确认",
                            onRightButtonClick: function () {
                              e.handleUnbindClick();
                            },
                          });
                        },
                      },
                      {
                        key: "onShowDeleteDialog",
                        value: function () {
                          var e = this;
                          this.showMultiButtonDialog({
                            content: "订单删除后将无法恢复，确认要删除吗",
                            leftButtonName: "手滑了",
                            onLeftButtonClick: function () {},
                            rightButtonName: "删除",
                            onRightButtonClick: function () {
                              e.handleDeleteOrder();
                            },
                          });
                        },
                      },
                      {
                        key: "handleUnbindClick",
                        value: function () {
                          var e = this,
                            t = this.state.unBindRelativeInfo;
                          1 == (null == t ? void 0 : t.unBindFlag) &&
                            (0, O.l3)({ relativeKey: this.relativeKey })
                              .then(function () {
                                setTimeout(function () {
                                  e.loadData();
                                }, 300);
                              })
                              .catch(function () {});
                        },
                      },
                      {
                        key: "newUbtTrace",
                        value: function (e, t) {
                          t = t && "object" == (0, s.Z)(t) ? t : {};
                          try {
                            this.ubtTrace(
                              e,
                              (0, o.Z)(
                                {
                                  openId: x.ZP.openid || "",
                                  userName: x.ZP.userName || "",
                                  cid: x.ZP.cid || "",
                                },
                                t
                              )
                            );
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "handleTaskClick",
                        value: function (e) {
                          var t = this;
                          1 !== e.state
                            ? (0, S.showToast)("任务已完成，可完成其他任务")
                            : (this.newUbtTrace(203706, {
                                bizKey: "z_bq_speedup_complete_click",
                                taskType: null == e ? void 0 : e.type,
                              }),
                              (0, K.Sh)({
                                orderNumber: this.oid,
                                scene: 1,
                                clickType: null == e ? void 0 : e.type,
                              })
                                .then(function (i) {
                                  1 === i.resultCode && t.handleDoTask(e);
                                })
                                .catch(function () {
                                  (0, S.showToast)("网络错误，请稍后重试~");
                                }));
                        },
                      },
                      {
                        key: "handleDoTask",
                        value: function (e) {
                          switch (null == e ? void 0 : e.type) {
                            case 3:
                              var t = e.jumpUrl;
                              t &&
                                Z.Z.twebview({
                                  data: {
                                    url: t,
                                    bridgeIns: function () {
                                      console.log("返回页面");
                                    },
                                  },
                                });
                              break;
                            case 8:
                              this.navigateTo({
                                url: "/pages/hotel/list/list",
                                data: {
                                  queryModel: { cityId: "2", cityName: "上海" },
                                },
                              });
                              break;
                            default:
                              var i = e.jumpUrl;
                              i &&
                                Z.Z.twebview({
                                  data: {
                                    url: i,
                                    bridgeIns: function () {
                                      console.log("返回页面");
                                    },
                                  },
                                });
                          }
                        },
                      },
                      {
                        key: "getShareImage",
                        value: function () {
                          var e = k.Z.getUnionData(),
                            t = this.state,
                            i = t.orderInfo,
                            a = void 0 === i ? {} : i,
                            n = t.isShareGZH,
                            o = void 0 !== n && n,
                            s = I.ZP.getRobShareObj({
                              shareKey: this.shareKey,
                              arriveStation: a.toStation,
                              allianceid: e.aid,
                              sid: e.sid,
                              shareImgs: [
                                "https://images3.c-ctrip.com/ztrip/train.song/gonggong/img_std1.png",
                              ],
                              type: "weixin",
                              abChannelType: "wxFriend",
                              from: "accountHelpOrder",
                              isShareGZH: o,
                            });
                          s &&
                            this.setState({
                              shareImageInfo: {
                                title: "我正在抢「".concat(
                                  a.toStation || "",
                                  "」的火车票"
                                ),
                                path: s.path.slice(1),
                              },
                            });
                        },
                      },
                      {
                        key: "closeShowType",
                        value: function () {
                          this.setState({ showType: "" });
                        },
                      },
                      {
                        key: "closeGiftBagDialog",
                        value: function () {
                          this.setState({ giftBagDialogVisible: !1 });
                        },
                      },
                      {
                        key: "confirmReceiveGiftBag",
                        value: function () {
                          var e = this,
                            t = this.state.giftBagDialogInfo;
                          1 === (null == t ? void 0 : t.bagType)
                            ? (this.closeGiftBagDialog(),
                              Z.Z.twebview({
                                data: {
                                  url: t.jumpUrl || "",
                                  bridgeIns: function () {
                                    console.log("返回页面");
                                  },
                                },
                              }))
                            : 2 === (null == t ? void 0 : t.bagType) &&
                              (0, K.JI)({
                                orderNumber: this.oid,
                                couponScene: this.couponScene || "",
                              })
                                .then(function (e) {
                                  1 === e.resultCode ||
                                    (0, S.showToast)("网络错误，请稍后重试～");
                                })
                                .catch(function () {
                                  (0, S.showToast)("网络错误，请稍后重试～");
                                })
                                .finally(function () {
                                  e.closeGiftBagDialog();
                                });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t = this,
                            i = this.state,
                            a = i.pageLength,
                            n = i.statusBarHeight,
                            o = i.accountDesc,
                            s = i.isScheduleDetailShow,
                            l = i.animateStyle,
                            c = i.accelerateBtnName,
                            r = i.speedInfo,
                            d = i.speedLevels,
                            u = i.orderStateInfo,
                            h = i.useGrabCoupon,
                            m = i.deleteRelativeBindFlag,
                            p = i.unBindRelativeInfo,
                            g = i.faceSwipingData,
                            v = i.speedPackageTaskInfo,
                            w = i.speedPackageTaskList,
                            b = i.giftBagDialogVisible,
                            N = i.giftBagDialogInfo,
                            T = i.showType,
                            y = i.shareImageInfo;
                          return (0, L.BX)(f.View, {
                            className: "".concat(_ ? "ty" : "zx"),
                            children: [
                              (0, L.BX)(f.View, {
                                className: "top-bar",
                                style: "padding-top: " + n + "px",
                                children: [
                                  (0, L.tZ)(f.Text, {
                                    className:
                                      1 == a
                                        ? "ifont-home iconfont"
                                        : "ifont-back iconfont",
                                    id: "AJAG",
                                    onClick: function () {
                                      t.onBack();
                                    },
                                  }),
                                  (0, L.tZ)(f.View, { className: "tit" }),
                                ],
                              }),
                              (0, L.tZ)(f.View, {
                                className: h ? "top-box vip" : "top-box",
                                style: "padding-top: " + (n + 57) + "px",
                                children:
                                  u &&
                                  (2 === u.stateCode
                                    ? (0, L.BX)(f.View, {
                                        className: "tit",
                                        children: [
                                          (0, L.tZ)(f.Icon, {
                                            className: "icon-people",
                                          }),
                                          (0, L.tZ)(f.Icon, {
                                            className: "icon-loading " + l,
                                          }),
                                          (0, L.BX)(f.View, {
                                            className: "state-desc",
                                            children: [
                                              (0, L.tZ)(f.View, {
                                                className: "name",
                                                children: u.stateName,
                                              }),
                                              (0, L.tZ)(f.View, {
                                                className: "desc",
                                                children: u.stateDesc,
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : (0, L.BX)(f.View, {
                                        className: "tit",
                                        children: [
                                          (0, L.tZ)(f.Icon, {
                                            className:
                                              "icon-state " + this.returnIcon(),
                                          }),
                                          (0, L.BX)(f.View, {
                                            className: "state-desc",
                                            children: [
                                              (0, L.tZ)(f.View, {
                                                className: "name",
                                                children: u.stateName,
                                              }),
                                              u.stateDesc &&
                                                (0, L.tZ)(f.View, {
                                                  className: "desc",
                                                  children: u.stateDesc,
                                                }),
                                            ],
                                          }),
                                        ],
                                      })),
                              }),
                              (0, L.BX)(f.View, {
                                className: "wrap",
                                children: [
                                  u &&
                                    102 !== u.stateCode &&
                                    this.renderScheduleDetail(),
                                  u &&
                                    102 === u.stateCode &&
                                    this.renderRealOrderDetail(),
                                  u &&
                                    2 === u.stateCode &&
                                    r &&
                                    d &&
                                    (0, L.BX)(f.View, {
                                      className: "qp-white white-box ".concat(
                                        h ? "vip" : ""
                                      ),
                                      children: [
                                        (0, L.tZ)(f.View, {
                                          className: "tit",
                                          children: (0, L.BX)(f.View, {
                                            className: "txt",
                                            children: [
                                              "当前速度：",
                                              r.currentSpeedName,
                                              "抢票",
                                            ],
                                          }),
                                        }),
                                        (0, L.BX)(f.View, {
                                          className: h
                                            ? "qp-speed vip"
                                            : "qp-speed",
                                          children: [
                                            (0, L.tZ)(f.View, {
                                              className: "qp-speed-stage",
                                              children: d.map(function (e) {
                                                return (0,
                                                L.BX)(f.View, { className: "item " + (e.isCurrent ? "current " : "") + (e.isVIP ? "item-vip" : ""), children: [e.isVIP && (0, L.tZ)(f.Icon, { className: "icon-vip" }), e.name] }, e.idx);
                                              }),
                                            }),
                                            (0, L.tZ)(f.View, {
                                              className: "qp-speed-line",
                                              children: (0, L.tZ)(f.View, {
                                                className: "item",
                                                style: "width: ".concat(
                                                  r.speedLineWidth
                                                ),
                                              }),
                                            }),
                                            (0, L.tZ)(f.View, {
                                              className: "desc",
                                              children: (0, L.tZ)(
                                                D.ZtRichText,
                                                { nodes: r.currentSpeedDesc }
                                              ),
                                            }),
                                          ],
                                        }),
                                        c &&
                                          (0, L.tZ)(f.Button, {
                                            className:
                                              "qp-btn " + (_ ? "ty" : "zx"),
                                            openType: (0, C.JO)()
                                              ? "share"
                                              : "",
                                            id: "AJAH",
                                            onClick: function () {
                                              t.newUbtTrace(201248),
                                                (0, C.JO)() ||
                                                  t.setState({
                                                    showType:
                                                      "grabShareImagePop",
                                                  });
                                            },
                                            children: c,
                                          }),
                                      ],
                                    }),
                                  g &&
                                    (0, L.BX)(f.View, {
                                      className: "white-box face-check-box",
                                      children: [
                                        (0, L.tZ)(f.View, {
                                          className:
                                            "icon-face " + (_ ? "ty" : "zx"),
                                        }),
                                        (0, L.BX)(f.View, {
                                          className: "face-check-bd",
                                          children: [
                                            (0, L.tZ)(f.View, {
                                              className: "tit",
                                              children: (0, L.tZ)(
                                                D.ZtRichText,
                                                { nodes: g.title }
                                              ),
                                            }),
                                            (0, L.tZ)(f.View, {
                                              className: "txt",
                                              children: (0, L.tZ)(
                                                D.ZtRichText,
                                                { nodes: g.subTitle }
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, L.tZ)(f.Button, {
                                          className:
                                            "btn-submit " + (_ ? "ty" : "zx"),
                                          id: "AJAI",
                                          onClick: this.toFaceCheck,
                                          children: g.operateBtnName,
                                        }),
                                      ],
                                    }),
                                  (0, L.tZ)(F, {
                                    innerClassName: "white-box",
                                    speedPackageTaskInfo: v,
                                    speedPackageTaskList: w,
                                    handleClick: this.handleTaskClick,
                                  }),
                                  o &&
                                    o.title &&
                                    (0, L.BX)(f.View, {
                                      className: "white-box qus-box",
                                      children: [
                                        (0, L.tZ)(f.View, {
                                          className: "tit",
                                          children: o.title,
                                        }),
                                        null === (e = o.descList) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e, t) {
                                              return (0,
                                              L.BX)(f.Block, { children: [(0, L.tZ)(f.View, { className: "txt-qus", children: e.title }), (0, L.tZ)(f.View, { className: "txt-anw", children: e.subTitle })] }, t);
                                            }),
                                      ],
                                    }),
                                  (1 == (null == p ? void 0 : p.unBindFlag) ||
                                    2 == (null == p ? void 0 : p.unBindFlag)) &&
                                    (0, L.tZ)(f.View, {
                                      className: "btn-box",
                                      id: "AJAJ",
                                      onClick: function () {
                                        t.onShowUnbindDialog(
                                          null == p ? void 0 : p.unBindFlag
                                        );
                                      },
                                      children: "取消好友抢票",
                                    }),
                                  !!m &&
                                    (0, L.tZ)(f.View, {
                                      className: "btn-box",
                                      id: "AJAK",
                                      onClick: function () {
                                        t.onShowDeleteDialog();
                                      },
                                      children: "删除订单",
                                    }),
                                  (0, L.tZ)(f.View, { className: "botm-advg" }),
                                  (0, L.tZ)(X.Z, {
                                    ref: function (e) {
                                      t.onDialogAttach(e);
                                    },
                                  }),
                                ],
                              }),
                              s &&
                                (0, L.tZ)(f.View, {
                                  className: "shade-box",
                                  id: "AJAL",
                                  onClick: function () {
                                    t.onScheduleDetailShowChange();
                                  },
                                }),
                              N &&
                                (0, L.tZ)(P, {
                                  show: b,
                                  dialogInfo: N,
                                  onConfirm:
                                    this.confirmReceiveGiftBag.bind(this),
                                  onClose: this.closeGiftBagDialog.bind(this),
                                }),
                              (0, L.tZ)(U.Z, {
                                type: "normal",
                                shareUrl: null == y ? void 0 : y.path,
                                visible: "grabShareImagePop" === T,
                                onClose: this.closeShowType.bind(this),
                                title: null == y ? void 0 : y.title,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(p.Component))
              ) || a;
          (G.enableShareAppMessage = !0),
            Page(
              (0, n.createPageConfig)(
                G,
                "pages/trainDetail/accountHelpOrder/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "",
                  navigationBarBackgroundColor: "#0062FF",
                  backgroundColorTop: "#0062FF",
                  backgroundColorBottom: "#034BEE",
                  navigationStyle: "custom",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            93611, 77, 58792, 86167, 79204, 41950, 78419, 96468, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(62974);
          }
        ),
          e.O();
      },
    ]);
})();
