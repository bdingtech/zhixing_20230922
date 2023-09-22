!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../sub-common/dc0cfe7c36c66175a01e7585a0cfebf3.js"),
    require("../sub-common/2d18c756eb2859b6a32b31f23cfa2e33.js"),
    require("../sub-common/0c0c1557d8fdb88154756ccab3184c0b.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [16063],
      {
        76980: function (e, t, a) {
          var n,
            i = a(32180),
            c = a(90129),
            o = a(79301),
            r = a(95308),
            s = a(45023),
            l = a(57042),
            d = a(24460),
            u = a(21867),
            h = a(86066),
            m = a(52500),
            f = a(71515),
            g = a(92954),
            p = a.n(g),
            b = a(2809),
            w = a(79792),
            C = a(3205),
            v = a(79295),
            k = a(96158),
            y = a(49120),
            T = a(94190),
            _ = a(18783),
            Z = a(25391),
            N = a(58676),
            V = a(97620),
            I = a(10741),
            B = a(9416),
            S = a(81957),
            M = a(34229),
            x = a(48813),
            A = m.default.memo(function (e) {
              var t = e.cancelGrabTicketTotal,
                a = void 0 === t ? null : t,
                n = e.modalBtnDesc,
                i = void 0 === n ? "" : n,
                c = e.onMaskClose,
                o = void 0 === c ? function () {} : c,
                r = e.onManualCancel,
                s = void 0 === r ? function () {} : r,
                l = e.onAutoCancel,
                d = void 0 === l ? function () {} : l,
                u = e.onContinueGrab,
                h = void 0 === u ? function () {} : u;
              if (!a) return (0, x.tZ)(x.HY, {});
              var m = ((b.ZP.windowWidth - 30) / 375) * 144;
              return (0, x.tZ)(M.ZtDrawer, {
                drawerStyle: { background: "transparent" },
                show: !0,
                onWrapClose: o,
                onClose: o,
                className: "detention-confirm-drawer",
                children: (0, x.BX)(f.View, {
                  className: "pop-cancel-modal",
                  children: [
                    (0, x.tZ)(f.View, {
                      className: "title",
                      children: a.delayedCancel.title,
                    }),
                    (0, x.tZ)(f.View, {
                      className: "desc",
                      children: a.delayedCancel.subTitle,
                    }),
                    (0, x.BX)(f.View, {
                      className: "pop-cancel-modal-bd",
                      children: [
                        (0, x.tZ)(f.View, {
                          className: "time-img "
                            .concat("img" + a.delayedCancel.imageType, " ")
                            .concat(w.default.isTieyou ? "ty" : "zx"),
                          style: "height: ".concat(m, "px"),
                        }),
                        a.delayedCancel.nodeList &&
                          (0, x.tZ)(f.View, {
                            className: "time-info",
                            children: a.delayedCancel.nodeList.map(function (
                              e
                            ) {
                              return (0, x.tZ)(
                                f.View,
                                {
                                  className: "time-txt ".concat(
                                    e && -1 !== e.indexOf(":")
                                      ? "color-primary"
                                      : "grey"
                                  ),
                                  children: e,
                                },
                                "index"
                              );
                            }),
                          }),
                        a.delayedCancel.descList &&
                          (0, x.tZ)(f.View, {
                            className: "descList",
                            children: a.delayedCancel.descList.map(function (
                              e
                            ) {
                              return (0, x.tZ)(
                                f.View,
                                { className: "desc-item", children: e },
                                "index"
                              );
                            }),
                          }),
                      ],
                    }),
                    !a.delayedCancel.isAlreadySet &&
                      (0, x.BX)(f.View, {
                        className: "btn-content",
                        children: [
                          (0, x.tZ)(f.View, {
                            className: "btn left",
                            id: "AKCU",
                            onClick: s,
                            children: "现在取消",
                          }),
                          i &&
                            (0, x.BX)(f.View, {
                              className: "btn right bgcolor-primary",
                              id: "AKCV",
                              onClick: d,
                              children: [
                                (0, x.tZ)(f.View, {
                                  className: "btn-name",
                                  children: "到时抢不到自动取消",
                                }),
                                (0, x.tZ)(f.View, {
                                  className: "btn-desc",
                                  children: i,
                                }),
                              ],
                            }),
                          !i &&
                            (0, x.tZ)(f.View, {
                              className: "btn right bgcolor-primary",
                              id: "AKCW",
                              onClick: d,
                              children: "到时抢不到自动取消",
                            }),
                        ],
                      }),
                    a.delayedCancel.isAlreadySet &&
                      (0, x.BX)(f.View, {
                        className: "btn-content",
                        children: [
                          (0, x.tZ)(f.View, {
                            className: "btn left",
                            id: "AKCX",
                            onClick: s,
                            children: "确认取消",
                          }),
                          (0, x.tZ)(f.View, {
                            className: "btn right bgcolor-primary",
                            id: "AKCY",
                            onClick: h,
                            children: "继续抢票",
                          }),
                        ],
                      }),
                  ],
                }),
              });
            }),
            O = a(69006),
            G = a(93917),
            P = function (e) {
              var t = e.endTime,
                a = e.onTimeEnd,
                n = void 0 === a ? function () {} : a,
                i = (0, G.Z)(t, "dhm");
              return (
                null != i && i.value && i.value < 0 && n(),
                (0, x.tZ)(x.HY, {
                  children:
                    t &&
                    (0, x.BX)(f.View, {
                      className: " _p _zA _gh _U _oc _Ti _i _Ga",
                      children: [
                        (0, x.tZ)(f.Text, {
                          className: " _ZB _aC",
                          children: "预估距抢票成功仅剩",
                        }),
                        (0, x.tZ)(f.Text, {
                          className: " _bC _aC",
                          children: i
                            ? ""
                                .concat(i.days > 0 ? i.days + "天" : "")
                                .concat(i.hours > 0 ? i.hours + "时" : "")
                                .concat(i.minutes, "分")
                            : "",
                        }),
                      ],
                    }),
                })
              );
            },
            D = function (e) {
              var t = e || {},
                a = t.title,
                n = t.icon,
                i = t.topRemark,
                c = t.content,
                o = t.desc,
                r = t.tip;
              return (0, x.BX)(f.View, {
                className: " _p _Vb _Oa _Mf _uk",
                children: [
                  (0, x.BX)(f.View, {
                    className: " _i _l",
                    children: [
                      (0, x.tZ)(f.Image, {
                        className: " _Ce _De",
                        src: n,
                        webp: !0,
                      }),
                      (0, x.tZ)(f.View, {
                        className: " _Og _Ma _G",
                        children: a,
                      }),
                    ],
                  }),
                  (0, x.BX)(f.View, {
                    className: " _bg _AA _BA _i _k _l",
                    children: [
                      (0, x.BX)(f.View, {
                        className: " _p _i _l _CA _rm",
                        children: [
                          (0, x.tZ)(f.Image, {
                            className: " _u _q _CA _rm",
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/12/tag_pingtaidanbao.webp",
                            webp: !0,
                          }),
                          (0, x.tZ)(f.View, {
                            className: " _p _CA _o _DA _D",
                            children: i,
                          }),
                        ],
                      }),
                      (0, x.BX)(f.View, {
                        className: " _i _qd",
                        children: [
                          (0, x.tZ)(f.Image, {
                            className: " _ca _Yi",
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/12/zhaungshi_l.webp",
                            webp: !0,
                          }),
                          (0, x.BX)(f.View, {
                            className: " _qo _o",
                            children: [
                              (0, x.tZ)(f.View, {
                                className: " _EA _dq",
                                children: c,
                              }),
                              (0, x.tZ)(f.View, {
                                className: " _Ac _pg _E",
                                children: o,
                              }),
                            ],
                          }),
                          (0, x.tZ)(f.Image, {
                            className: " _ca _Yi",
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/12/zhaungshi_r.webp",
                            webp: !0,
                          }),
                        ],
                      }),
                      r
                        ? (0, x.BX)(x.HY, {
                            children: [
                              (0, x.tZ)(f.View, { className: " _qd _FA" }),
                              (0, x.tZ)(f.View, {
                                className: " _GA",
                                children: r,
                              }),
                            ],
                          })
                        : (0, x.tZ)(f.View, { className: " _De" }),
                    ],
                  }),
                ],
              });
            },
            X = m.default.memo(function (e) {
              var t = e.content,
                a = e.onCancel,
                n = void 0 === a ? function () {} : a,
                i = e.onConfirm,
                c = void 0 === i ? function () {} : i,
                o = t.title,
                r = t.subTitle,
                s = t.predictGrabSuccessTime,
                l = t.productToast;
              return (0,
              x.BX)(f.View, { className: " _yd _p", children: [(0, x.tZ)(O.Z, { propStyle: { box: "background: transparent;color: #333333" } }), (0, x.tZ)(f.Image, { className: " _h _nd _uA", src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/12/quannengqiangpiao/img_bg_qxqp.webp?1", webp: !0 }), (0, x.BX)(f.View, { className: " _p", children: [(0, x.tZ)(f.View, { className: " _u _q _vA _nd _wA" }), (0, x.tZ)(f.View, { className: " _p _xA _gh _jv _yA _Fe", children: (0, x.tZ)(M.ZtRichText, { nodes: o }) }), s ? (0, x.tZ)(P, { endTime: s, onTimeEnd: c }) : (0, x.tZ)(f.View, { className: " _p _zA _gh _U _oc _Ti", children: r }), D(l)] }), (0, x.BX)(f.View, { className: " _Wb _Vb _v _HA _r _s _t _i _m", children: [(0, x.tZ)(f.View, { className: " _IA _Gc _yd _Oa _o _Xc _Ma _Yb", id: "AKCZ", onClick: n, children: "确认取消" }), (0, x.tZ)(f.View, { className: " _IA _Gc _w _Oa _o _Xc _qb _Yb", id: "AKCa", onClick: c, children: "继续抢票" })] })] });
            }),
            F = w.default.isTieyou,
            H =
              (0, S.h)(!1, { usePageWrapper: !0 })(
                (n = (function (e) {
                  (0, u.Z)(a, e);
                  var t = (0, h.Z)(a);
                  function a() {
                    var e;
                    return (
                      (0, l.Z)(this, a),
                      ((e = t.call(this)).pageId = F
                        ? "10650020878"
                        : "10650020877"),
                      (e.state = {
                        grabOrder: "",
                        imgHeight: 255,
                        firstTicketCountdown: (0, s.Z)(
                          { day: "00", hour: "00", minute: "00" },
                          "day",
                          "00"
                        ),
                        cancelGrabTicketTotal: {},
                        modalBtnDesc: "",
                        modalVisible: !1,
                        memberCancelInfo: null,
                        isCancelMember: !1,
                      }),
                      (e.pageWrapperConfig = {
                        pageRootClassName: "detention",
                        headerBarHeight: 44,
                        pageTitle: "取消抢票",
                        disableHeader: !1,
                        disableBgStyle: !1,
                        renderBackgroundView: function () {
                          return (0, x.tZ)(f.View, {
                            style: {
                              background: w.default.isTieyou
                                ? "#3C4365"
                                : "#0066E6",
                              height:
                                (b.ZP.statusBarHeight || 44) +
                                e.pageWrapperConfig.headerBarHeight,
                            },
                          });
                        },
                      }),
                      (e.topHeight =
                        (b.ZP.statusBarHeight || 44) +
                        e.pageWrapperConfig.headerBarHeight),
                      e
                    );
                  }
                  return (
                    (0, d.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t =
                              (0, g.getCurrentInstance)().router.params.data ||
                              {},
                            a = t.grabOrder,
                            n = t.cancelGrabTicketTotalInfo,
                            i = t.oid,
                            c = t.shareImgs;
                          if (
                            (null != n && n.reduceCancelRate
                              ? ((this.pageWrapperConfig = {
                                  pageRootClassName: "detention-v2",
                                  headerBarHeight: 0,
                                  pageTitle: "",
                                  disableHeader: !0,
                                  disableBgStyle: !1,
                                  fullScreenStyle: !0,
                                  renderBackgroundView: function () {
                                    return (0, x.tZ)(f.View, {});
                                  },
                                  flexMode: !0,
                                }),
                                (this.topHeight =
                                  (b.ZP.statusBarHeight || 44) +
                                  this.pageWrapperConfig.headerBarHeight))
                              : ((this.shareImgs = c),
                                this.setState({
                                  imgHeight:
                                    ((b.ZP.windowWidth - 46) / 375) * 144,
                                })),
                            (this.cancelGrabTicketTotalInfo = n),
                            (this.oid = i),
                            !a)
                          )
                            return (
                              (0, y.showModal)({
                                content: "系统异常，请稍后重试",
                                success: function () {
                                  e.navigateBack({ showCancel: !0 });
                                },
                              }),
                              void this.ubtTrace(170259, {
                                message: "ztrip:detention:onLoad failed",
                              })
                            );
                          k.CZ.call(this),
                            this.getFaceSwipingData(a),
                            this.setState({ grabOrder: a }, function () {
                              e.getDetentionInfo(n);
                            }),
                            !(
                              10 === a.orderInfo.monitorStatus ||
                              (9 === a.orderInfo.monitorStatus &&
                                a.originalOrder)
                            ) && this.getBenefitInfoForCancelOrder();
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.firstTicketCountdownId &&
                            clearInterval(this.firstTicketCountdownId),
                            this.cancelTicketCountdownId &&
                              clearInterval(this.cancelTicketCountdownId),
                            !this.GrabCancelFlag &&
                              this.newStyle &&
                              this.getGrabCancelRetain();
                        },
                      },
                      {
                        key: "getDetentionInfo",
                        value: function (e) {
                          if (
                            ((this.newStyle =
                              null == e ? void 0 : e.reduceCancelRate),
                            this.setState({ cancelGrabTicketTotal: e }),
                            !this.newStyle &&
                              (e &&
                                e.cancelGrabTicket &&
                                e.cancelGrabTicket.ticketIssuing &&
                                this.setFirstTicketCountdown(
                                  e.cancelGrabTicket.ticketIssuing.nextPointTime
                                ),
                              e &&
                                e.delayedCancel &&
                                !e.delayedCancel.isAlreadySet))
                          ) {
                            var t = this.parseDateStr(e.delayedCancel.deadline);
                            t > new Date()
                              ? this.setCancelTicketCountdown(t)
                              : this.setState({ modalBtnDesc: "" });
                          }
                        },
                      },
                      {
                        key: "setCancelTicketCountdown",
                        value: function (e) {
                          var t = this;
                          this.cancelTicketCountdownId &&
                            clearInterval(this.cancelTicketCountdownId);
                          var a = function () {
                            var a = Math.floor((e - new Date()) / 1e3),
                              n = Math.floor(a / 60),
                              i = Math.floor(n / 60),
                              c = Math.floor(i / 24),
                              o = {
                                second: t.paddingZero(a % 60),
                                minute: t.paddingZero(n % 60),
                                hour: t.paddingZero(i % 24),
                                day: c,
                              };
                            t.setState({
                              modalBtnDesc:
                                n > 0
                                  ? ""
                                      .concat(c > 0 ? c + "天" : "")
                                      .concat(o.hour, "小时")
                                      .concat(o.minute, "分钟后取消")
                                  : "",
                            }),
                              a <= 0 &&
                                t.getDetentionInfo(t.cancelGrabTicketTotalInfo);
                          };
                          a(),
                            (this.cancelTicketCountdownId = setInterval(
                              function () {
                                a();
                              },
                              6e4
                            ));
                        },
                      },
                      {
                        key: "setFirstTicketCountdown",
                        value: function (e) {
                          var t = this;
                          this.firstTicketCountdownId &&
                            clearInterval(this.firstTicketCountdownId);
                          e > 0 &&
                            (function () {
                              var a = e / 60,
                                n = Math.floor(a / 24);
                              n && (a = (e / 60) % 24),
                                t.setState({
                                  firstTicketCountdown: {
                                    minute: t.paddingZero(e % 60),
                                    hour: t.paddingZero(a),
                                    day: n ? t.paddingZero(n) : "00",
                                  },
                                });
                            })();
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          var e = this.state.grabOrder;
                          this.recordShareMode(e.helpMonitorInfo.shareKey);
                          var t = v.Z.getUnionData();
                          return Z.ZP.getRobShareObj({
                            shareKey: e.helpMonitorInfo.shareKey,
                            arriveStation: e.orderInfo.toStation.name,
                            allianceid: t.aid,
                            sid: t.sid,
                            shareImgs: this.shareImgs,
                            type: "weixin",
                          });
                        },
                      },
                      {
                        key: "recordShareMode",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t = { shareType: "weixin", shareKey: e };
                          return (0, I._0V)(t);
                        },
                      },
                      {
                        key: "getFaceSwipingData",
                        value: function (e) {
                          console.log(
                            "人脸核验（15 or 16）: ",
                            e.orderInfo.monitorStatus
                          );
                          var t = e.orderInfo.monitorStatus;
                          if (15 === t || 16 === t) {
                            var a = e.faceSwipingInfo,
                              n =
                                15 === t
                                  ? a.weakGuidingModel || ""
                                  : a.hardGuidingModel || "";
                            try {
                              this.setState({
                                faceType: t,
                                faceSwipingData: JSON.parse(n),
                              });
                            } catch (e) {
                              console.log(e);
                            }
                          } else this.setState({ faceType: -1 });
                        },
                      },
                      {
                        key: "onClickModalCancelUpdate",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, a;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          this.newUbtTrace(193812),
                                          (e.prev = 1),
                                          (t =
                                            this.state.cancelGrabTicketTotal),
                                          (e.next = 5),
                                          (0, I.euy)({
                                            orderNumber: this.oid,
                                            deadline: t.delayedCancel.deadline,
                                          })
                                        );
                                      case 5:
                                        (a = e.sent) && 1 === a.resultCode
                                          ? (p().showToast({
                                              title: "设置成功",
                                              icon: "none",
                                              duration: 2e3,
                                            }),
                                            this.setState({ modalVisible: !1 }),
                                            this.getDetentionInfo(
                                              this.cancelGrabTicketTotalInfo
                                            ),
                                            this.navigateBack())
                                          : p().showToast({
                                              title:
                                                a.resultMessage ||
                                                "设置失败，请稍后再试~",
                                              icon: "none",
                                              duration: 2e3,
                                            }),
                                          (e.next = 13);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0),
                                          p().showToast({
                                            title: "设置失败，请稍后再试~",
                                            icon: "none",
                                            duration: 2e3,
                                          });
                                      case 13:
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
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onClickContinueRob",
                        value: function () {
                          this.newUbtTrace(193808), this.navigateBack();
                        },
                      },
                      {
                        key: "onClickCancelOrder",
                        value: function () {
                          if (
                            (this.newUbtTrace(193809),
                            this.state.cancelGrabTicketTotal.delayedCancel)
                          )
                            return (
                              this.newUbtTrace(193810),
                              void this.setState({ modalVisible: !0 })
                            );
                          this.cancelMultiTypeOrder();
                        },
                      },
                      {
                        key: "onClickModalCancel",
                        value: function () {
                          this.newUbtTrace(193811),
                            this.setState({ modalVisible: !1 }),
                            this.cancelMultiTypeOrder();
                        },
                      },
                      {
                        key: "cancelMultiTypeOrder",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, a, n;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          1 !==
                                          (null == (a = this.state.grabOrder) ||
                                          null === (t = a.candidateOrderInfo) ||
                                          void 0 === t
                                            ? void 0
                                            : t.candidateType)
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        return (
                                          (e.next = 4),
                                          this.showMultiButtonDialogWithPromise(
                                            {
                                              content:
                                                "是否同时取消您在12306提交的同行程候补待兑现订单",
                                              leftButtonName: "不取消",
                                              rightButtonName: "同时取消",
                                            }
                                          )
                                        );
                                      case 4:
                                        "right" === (n = e.sent)
                                          ? this.cancelOrder({
                                              cancelUserSyncCandidate: 1,
                                            })
                                          : "left" === n &&
                                            this.cancelOrder({
                                              cancelUserSyncCandidate: 0,
                                            }),
                                          (e.next = 9);
                                        break;
                                      case 8:
                                        this.candidatePreCancel();
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
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "candidatePreCancel",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, o.Z)().mark(function e() {
                              var t,
                                a,
                                n,
                                i,
                                c,
                                r,
                                s,
                                l,
                                d,
                                u,
                                h,
                                m,
                                f,
                                g,
                                b,
                                w,
                                C,
                                v = this,
                                k = arguments;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            k.length > 0 && void 0 !== k[0]
                                              ? k[0]
                                              : ""),
                                          (e.prev = 1),
                                          !(
                                            this.tempInterval >
                                            this.tempTotalPollingTime
                                          ))
                                        ) {
                                          e.next = 5;
                                          break;
                                        }
                                        return (
                                          p().showToast({
                                            title: "超时",
                                            icon: "none",
                                            duration: 2e3,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 5:
                                        if (
                                          ((a = this.state.grabOrder),
                                          (n =
                                            a &&
                                            a.candidateOrderInfo &&
                                            a.candidateOrderInfo
                                              .candidateOrderNum
                                              ? a.candidateOrderInfo
                                                  .candidateOrderNum
                                              : ""),
                                          1 ===
                                            (a &&
                                            a.candidateOrderInfo &&
                                            a.candidateOrderInfo &&
                                            a.candidateOrderInfo.candidateStatus
                                              ? a.candidateOrderInfo
                                                  .candidateStatus.code
                                              : 0))
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          this.cancelOrder(), e.abrupt("return")
                                        );
                                      case 11:
                                        return (
                                          (0, y.showLoading)(),
                                          (e.next = 14),
                                          (0, B.gI)({
                                            orderNumber: this.oid,
                                            candidateNo: n,
                                            action: t,
                                          })
                                        );
                                      case 14:
                                        1 === (i = e.sent).resultCode
                                          ? ((s = i.cancelFailCode),
                                            (l =
                                              (null == i ||
                                              null === (c = i.failToast) ||
                                              void 0 === c
                                                ? void 0
                                                : c.title) || "提示"),
                                            (d =
                                              null != i &&
                                              null !== (r = i.failToast) &&
                                              void 0 !== r &&
                                              r.contents &&
                                              Array.isArray(
                                                i.failToast.contents
                                              )
                                                ? i.failToast.contents.reduce(
                                                    function (e, t) {
                                                      return e + t + "\n";
                                                    },
                                                    ""
                                                  )
                                                : "系统异常"),
                                            (0, y.hideLoading)(),
                                            this.cancelOrder(
                                              6 === s
                                                ? { title: l, content: d }
                                                : null
                                            ))
                                          : 2 === i.resultCode
                                          ? ((0, y.hideLoading)(),
                                            (m =
                                              (null == i ||
                                              null === (u = i.failToast) ||
                                              void 0 === u
                                                ? void 0
                                                : u.title) || "提示"),
                                            (f =
                                              null != i &&
                                              null !== (h = i.failToast) &&
                                              void 0 !== h &&
                                              h.contents &&
                                              Array.isArray(
                                                i.failToast.contents
                                              )
                                                ? i.failToast.contents[0]
                                                : "取消失败"),
                                            (g = i.cancelFailCode),
                                            p().showModal({
                                              title: m,
                                              content: f,
                                              showCancel: !1,
                                              confirmText: "我知道了",
                                              confirmColor: F
                                                ? "#fc6e51"
                                                : "#0080FF",
                                              success: function (e) {
                                                e.confirm &&
                                                  (1 === g
                                                    ? v.goLogin12306H5()
                                                    : 2 === g ||
                                                      (3 === g
                                                        ? p().redirectTo({
                                                            url: Z.ZP.getTrainGrabOrderDetailUrl(
                                                              v.oid
                                                            ),
                                                          })
                                                        : 4 === g
                                                        ? v.toFaceCheck()
                                                        : 5 === g &&
                                                          v.toPhoneTextCheck()));
                                              },
                                            }))
                                          : 3 === i.resultCode
                                          ? ((b = i.pollingInterval),
                                            (w = i.totalPollingTime),
                                            (!b || b <= 0) && (b = 1),
                                            (!w || w <= 0) && (w = 20),
                                            (this.tempTotalPollingTime = w),
                                            (this.tempInterval += b),
                                            (C = setTimeout(function () {
                                              clearTimeout(C),
                                                v.candidatePreCancel("query");
                                            }, 1e3 * b)))
                                          : -1 === i.resultCode
                                          ? ((0, y.hideLoading)(),
                                            p().showToast({
                                              title:
                                                i.resultMessage ||
                                                "网络开小差，请稍后再试~",
                                              icon: "none",
                                              duration: 2e3,
                                            }))
                                          : 0 === i.resultCode
                                          ? (0, y.hideLoading)()
                                          : 4 === i.resultCode
                                          ? ((0, y.hideLoading)(),
                                            this.toFaceCheck())
                                          : (0, y.hideLoading)(),
                                          (e.next = 22);
                                        break;
                                      case 18:
                                        (e.prev = 18),
                                          (e.t0 = e.catch(1)),
                                          (0, y.hideLoading)(),
                                          console.log(e.t0);
                                      case 22:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 18]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "cancelOrder",
                        value: function (e) {
                          var t = this;
                          (0, y.showLoading)();
                          var a = e || {},
                            n = a.messageObj,
                            i = a.cancelUserSyncCandidate,
                            c = {
                              orderNumber: this.oid,
                              partnerName: w.default.partner,
                              cancelVip: this.state.isCancelMember ? 1 : 0,
                            };
                          [0, 1].includes(i) && (c.cancelUserSyncCandidate = i),
                            (0, I.FHX)(c)
                              .then(function (e) {
                                1 === e.resultCode
                                  ? ((t.GrabCancelFlag = !0),
                                    n
                                      ? t.showCommonDialog({
                                          title: n.title,
                                          content: n.content,
                                          buttonName: "我知道了",
                                          onButtonClick: function () {
                                            t.navigateBack({
                                              isRefreshPage: !0,
                                            });
                                          },
                                        })
                                      : t.navigateBack({ isRefreshPage: !0 }))
                                  : (0, y.showModal)(e.resultMessage);
                              })
                              .finally(function () {
                                (0, y.hideLoading)();
                              });
                        },
                      },
                      {
                        key: "goLogin12306H5",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.login12306Name,
                            n = void 0 === a ? "" : a,
                            i = t.login12306Pas,
                            c = void 0 === i ? "" : i,
                            o = n && c,
                            r = "https://"
                              .concat(
                                w.default.h5domain,
                                "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                              )
                              .concat(w.default.partner, "#/login?userName=")
                              .concat(n, "&loginPW=")
                              .concat(c, "&mobile=")
                              .concat(
                                _.ZP.userName || "",
                                "&isMiniAppLogin12306="
                              )
                              .concat(o, "&fromPage=detention");
                          C.Z.twebview({
                            data: {
                              url: r,
                              bridgeIns: function (t) {
                                if (
                                  (console.log("detention webviewCB e = ", t),
                                  Array.isArray(t.detail.data))
                                ) {
                                  var a = t.detail.data;
                                  k.Tq.call(e, a), k.CZ.call(e);
                                }
                              },
                            },
                          });
                        },
                      },
                      {
                        key: "toFaceCheck",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.faceType,
                            n = (t.faceSwipingData || {}).userName,
                            i = (T.WG.get() || {}).bind12306,
                            c = i ? i.name : "",
                            o = "/pages/12306/face/face?userName="
                              .concat(n || c, "&fromType=")
                              .concat(16 === a ? 4 : 1, "&businessType=1");
                          this.navigateTo({
                            url: o,
                            callback: function (t) {
                              var a = t.certificationResultCode,
                                n = t.retMessage;
                              1 === a
                                ? e.faceSwipingSuccess()
                                : 2 === a &&
                                  setTimeout(function () {
                                    p().showModal({
                                      title: "温馨提示",
                                      content: n || "核验失败",
                                      confirmText: "知道了",
                                      showCancel: !1,
                                      confirmColor: F ? "#fc6e51" : "#0080FF",
                                      success: function () {},
                                    });
                                  }, 500);
                            },
                          });
                        },
                      },
                      {
                        key: "toPhoneTextCheck",
                        value: function () {
                          var e = this,
                            t = this.state.faceSwipingData || {},
                            a = t.userName,
                            n = t.accountMobile,
                            i = void 0 === n ? "" : n,
                            c = i,
                            o = (T.WG.get() || {}).bind12306,
                            r = o ? o.name : "",
                            s = (null == o ? void 0 : o.mobilePhone12306) || "";
                          (a && i) || ((a = r), (c = s));
                          var l = "https://"
                            .concat(
                              w.default.h5domain,
                              "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                            )
                            .concat(w.default.partner, "#/verify?partner=")
                            .concat(
                              w.default.partner,
                              "&fromPage=orderdetail&userName="
                            )
                            .concat(a, "&mobile=")
                            .concat(c, "&password=")
                            .concat("");
                          (this.disableOnShowHook = !1),
                            C.Z.twebview({
                              data: {
                                url: l,
                                bridgeIns: function (t) {
                                  console.log("orderdetail webviewCB e = ", t),
                                    Array.isArray(t.detail.data) &&
                                      e.faceSwipingSuccess();
                                },
                              },
                            });
                        },
                      },
                      {
                        key: "faceSwipingSuccess",
                        value: function () {
                          var e = this.state.faceSwipingData,
                            t = (void 0 === e ? {} : e).userName,
                            a = { orderNumber: this.oid, accountNumber: t };
                          (0, I.Q6O)(a).then(
                            function (e) {
                              var t = e || {},
                                a = t.resultCode,
                                n = t.resultMessage;
                              1 === a
                                ? p().showToast({
                                    title: "核验成功",
                                    icon: "none",
                                    duration: 1e3,
                                  })
                                : p().showModal({
                                    title: "温馨提示",
                                    content: n || "网络错误，请稍后再试",
                                    confirmText: "知道了",
                                    showCancel: !1,
                                    confirmColor: F ? "#fc6e51" : "#0080FF",
                                    success: function () {},
                                  });
                            },
                            function (e) {
                              console.log(e);
                            }
                          );
                        },
                      },
                      {
                        key: "parseDateStr",
                        value: function (e) {
                          var t = e.split(" ")[0].split("-"),
                            a = (0, c.Z)(t, 3),
                            n = a[0],
                            i = a[1],
                            o = a[2],
                            r = e.split(" ")[1].split(":"),
                            s = (0, c.Z)(r, 3),
                            l = s[0],
                            d = s[1],
                            u = s[2];
                          return new Date(
                            parseInt(n),
                            parseInt(i) - 1,
                            parseInt(o),
                            parseInt(l),
                            parseInt(d),
                            parseInt(u)
                          );
                        },
                      },
                      {
                        key: "paddingZero",
                        value: function (e) {
                          var t = Math.floor(e);
                          return t < 10 ? "0" + t : t;
                        },
                      },
                      {
                        key: "closeMask",
                        value: function () {
                          this.setState({ modalVisible: !1 });
                        },
                      },
                      {
                        key: "newUbtTrace",
                        value: function (e) {
                          try {
                            this.ubtTrace(e, {
                              openId: _.ZP.openid || "",
                              userName: _.ZP.userName || "",
                              cid: _.ZP.cid || "",
                            });
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "getBenefitInfoForCancelOrder",
                        value: function () {
                          var e = this,
                            t = { orderNumber: this.oid };
                          (0, I.TSq)(t)
                            .then(function (t) {
                              var a;
                              1 === (null == t ? void 0 : t.resultCode) &&
                                null != t &&
                                null !== (a = t.cancelEntity) &&
                                void 0 !== a &&
                                a.windowEntity &&
                                e.setState({
                                  memberCancelInfo: t.cancelEntity.windowEntity,
                                  isCancelMember: !0,
                                });
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        },
                      },
                      {
                        key: "handleCancelMember",
                        value: function (e) {
                          this.setState({ isCancelMember: e });
                        },
                      },
                      {
                        key: "getGrabCancelRetain",
                        value: function () {
                          (0, I.O5E)({ orderNumber: this.oid })
                            .then(function (e) {
                              1 !== e.resultCode &&
                                console.log(
                                  "grabCancelRetainApplyPromise",
                                  null == e ? void 0 : e.resultMessage
                                );
                            })
                            .catch(function (e) {
                              console.log("grabCancelRetainApplyPromise", e);
                            });
                        },
                      },
                      {
                        key: "renderOldPage",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.firstTicketCountdown,
                            n = t.imgHeight,
                            i = t.cancelGrabTicketTotal,
                            c = t.modalVisible,
                            o = t.modalBtnDesc,
                            r = t.memberCancelInfo,
                            s = t.isCancelMember;
                          return i
                            ? (0, x.BX)(f.View, {
                                className: "page ".concat(F ? "ty" : "zx"),
                                children: [
                                  (0, x.tZ)(f.View, {
                                    style: { height: this.topHeight + "px" },
                                  }),
                                  (0, x.tZ)(f.View, {
                                    className: "wrap",
                                    children:
                                      i &&
                                      i.cancelGrabTicket &&
                                      (0, x.BX)(x.HY, {
                                        children: [
                                          (0, x.BX)(f.View, {
                                            className: "top-bg",
                                            children: [
                                              (0, x.tZ)(f.View, {
                                                className: "top-bg-img",
                                              }),
                                              (0, x.BX)(f.View, {
                                                className: "content",
                                                children: [
                                                  (0, x.tZ)(f.View, {
                                                    className: "big-title",
                                                    children:
                                                      i.cancelGrabTicket.title,
                                                  }),
                                                  (0, x.tZ)(f.View, {
                                                    className: "big-desc",
                                                    children:
                                                      i.cancelGrabTicket
                                                        .subTitle,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, x.tZ)(f.View, {
                                            className: "top-bg-top",
                                          }),
                                          (0, x.BX)(f.View, {
                                            className: "deten-box",
                                            children: [
                                              i &&
                                                i.cancelGrabTicket
                                                  .discountInfo &&
                                                (0, x.tZ)(f.View, {
                                                  className: "item tips",
                                                  children: (0, x.BX)(f.View, {
                                                    className: "item-tips",
                                                    children: [
                                                      (0, x.tZ)(f.View, {
                                                        className:
                                                          "item-tips-icon",
                                                      }),
                                                      (0, x.tZ)(f.View, {
                                                        className:
                                                          "item-tips-ct",
                                                        children:
                                                          i.cancelGrabTicket.discountInfo.map(
                                                            function (e) {
                                                              return (0, x.tZ)(
                                                                f.View,
                                                                {
                                                                  className:
                                                                    "item-tips-txt",
                                                                  children: e,
                                                                },
                                                                "index"
                                                              );
                                                            }
                                                          ),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              i.cancelGrabTicket
                                                .ticketIssuing &&
                                                (0, x.BX)(f.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, x.tZ)(f.View, {
                                                      className: "top-title",
                                                      children:
                                                        i.cancelGrabTicket
                                                          .ticketIssuing.head,
                                                    }),
                                                    "00" === a.day &&
                                                      "00" === a.hour &&
                                                      "00" === a.minute &&
                                                      (0, x.tZ)(f.View, {
                                                        className: "top-time",
                                                        children: (0, x.tZ)(
                                                          f.View,
                                                          {
                                                            className:
                                                              "biginfo",
                                                            children:
                                                              "捡漏高峰中",
                                                          }
                                                        ),
                                                      }),
                                                    !(
                                                      "00" === a.day &&
                                                      "00" === a.hour &&
                                                      "00" === a.minute
                                                    ) &&
                                                      (0, x.BX)(f.View, {
                                                        className: "top-time",
                                                        children: [
                                                          "00" !== a.day &&
                                                            (0, x.BX)(f.Block, {
                                                              children: [
                                                                (0, x.tZ)(
                                                                  f.View,
                                                                  {
                                                                    className:
                                                                      "tinfo red",
                                                                    children:
                                                                      a.day,
                                                                  }
                                                                ),
                                                                (0, x.tZ)(
                                                                  f.View,
                                                                  {
                                                                    className:
                                                                      "tinfo txt",
                                                                    children:
                                                                      "天",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          (0, x.tZ)(f.View, {
                                                            className:
                                                              "tinfo red",
                                                            children: a.hour,
                                                          }),
                                                          (0, x.tZ)(f.View, {
                                                            className:
                                                              "tinfo txt",
                                                            children: "时",
                                                          }),
                                                          (0, x.tZ)(f.View, {
                                                            className:
                                                              "tinfo red",
                                                            children: a.minute,
                                                          }),
                                                          (0, x.tZ)(f.View, {
                                                            className:
                                                              "tinfo txt",
                                                            children: "分",
                                                          }),
                                                        ],
                                                      }),
                                                    (0, x.tZ)(f.View, {
                                                      className:
                                                        "time-img ".concat(
                                                          "img" +
                                                            i.cancelGrabTicket
                                                              .ticketIssuing
                                                              .imageType
                                                        ),
                                                      style: "height: ".concat(
                                                        n,
                                                        "px"
                                                      ),
                                                    }),
                                                    i.cancelGrabTicket
                                                      .ticketIssuing.nodeList &&
                                                      (0, x.tZ)(f.View, {
                                                        className: "time-info",
                                                        children:
                                                          i.cancelGrabTicket.ticketIssuing.nodeList.map(
                                                            function (e) {
                                                              return (0, x.tZ)(
                                                                f.View,
                                                                {
                                                                  className:
                                                                    "time-txt ".concat(
                                                                      e &&
                                                                        -1 !==
                                                                          e.indexOf(
                                                                            ":"
                                                                          )
                                                                        ? "color-primary"
                                                                        : "grey"
                                                                    ),
                                                                  children: e,
                                                                },
                                                                "index"
                                                              );
                                                            }
                                                          ),
                                                      }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          (0, x.tZ)(V.Z, {
                                            data: r,
                                            fromSource: "page",
                                            isCancelMember: s,
                                            onChooseChange:
                                              this.handleCancelMember,
                                          }),
                                        ],
                                      }),
                                  }),
                                  (0, x.BX)(f.View, {
                                    className: "deten-botm",
                                    children: [
                                      (0, x.tZ)(f.Button, {
                                        className: "btn-cancel",
                                        id: "AKCb",
                                        onClick: this.onClickCancelOrder,
                                        "data-ubt-key":
                                          "wx_detention_cancelOrder",
                                        children: "确认取消",
                                      }),
                                      (0, x.tZ)(f.Button, {
                                        className: "btn-submit btn-primary",
                                        id: "AKCc",
                                        onClick: this.onClickContinueRob,
                                        "data-ubt-key":
                                          "wx_detention_continueRob",
                                        children: "继续抢票",
                                      }),
                                    ],
                                  }),
                                  c &&
                                    (0, x.tZ)(A, {
                                      cancelGrabTicketTotal: i,
                                      modalBtnDesc: o,
                                      onMaskClose: this.closeMask,
                                      onManualCancel: this.onClickModalCancel,
                                      onAutoCancel:
                                        this.onClickModalCancelUpdate,
                                      onContinueGrab: this.onClickContinueRob,
                                    }),
                                  (0, x.tZ)(N.Z, {
                                    ref: function (t) {
                                      e.onDialogAttach(t);
                                    },
                                  }),
                                ],
                              })
                            : (0, x.tZ)(f.View, {});
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.cancelGrabTicketTotal,
                            n = void 0 === a ? {} : a,
                            i = t.memberCancelInfo,
                            c = t.isCancelMember;
                          return n
                            ? this.newStyle
                              ? (0, x.BX)(f.View, {
                                  children: [
                                    (0, x.tZ)(X, {
                                      content: n.reduceCancelRate,
                                      onCancel: this.cancelMultiTypeOrder,
                                      onConfirm: this.onClickContinueRob,
                                    }),
                                    (0, x.tZ)(V.Z, {
                                      data: i,
                                      fromSource: "page",
                                      isCancelMember: c,
                                      onChooseChange: this.handleCancelMember,
                                    }),
                                    (0, x.tZ)(N.Z, {
                                      ref: function (t) {
                                        e.onDialogAttach(t);
                                      },
                                    }),
                                  ],
                                })
                              : this.renderOldPage()
                            : (0, x.tZ)(f.View, {});
                        },
                      },
                    ]),
                    a
                  );
                })(m.default.Component))
              ) || n;
          (H.enableShareAppMessage = !0),
            Page(
              (0, i.createPageConfig)(
                H,
                "pages/train/detention/detention",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "取消抢票",
                  navigationStyle: "custom",
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#0066E6",
                  backgroundColorBottom: "#EFEFEF",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [7160, 83004, 77, 22703, 42162, 25561, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(76980);
          }
        ),
          e.O();
      },
    ]);
})();
