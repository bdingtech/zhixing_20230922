(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [42865],
  {
    89976: function (e, t, i) {
      var n,
        a,
        c,
        s,
        r = i(66371).default;
      (s = function (e) {
        "use strict";
        var t = (function (e) {
            return e && "object" == r(e) && "default" in e ? e : { default: e };
          })(e),
          i = {
            name: "es",
            monthsShort:
              "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            weekStart: 1,
            formats: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            ordinal: function (e) {
              return e + "º";
            },
          };
        return t.default.locale(i, null, !0), i;
      }),
        "object" == r(t)
          ? (e.exports = s(i(8271)))
          : ((a = [i(8271)]),
            void 0 === (c = "function" == typeof (n = s) ? n.apply(t, a) : n) ||
              (e.exports = c));
    },
    75940: function (e, t, i) {
      "use strict";
      var n = i(52500),
        a = i(71515),
        c = i(48813);
      t.Z = n.default.memo(function (e) {
        var t = e.tripList,
          i = void 0 === t ? [] : t,
          n = e.isNeedClick,
          s = void 0 === n || n,
          r = e.isReschedule,
          o = void 0 !== r && r,
          l = e.isFromCS,
          m = void 0 !== l && l,
          d = e.isCombine,
          u = void 0 !== d && d,
          h = e.onTripClick,
          p = void 0 === h ? function () {} : h;
        if ((null == i ? void 0 : i.length) <= 1) return (0, c.tZ)(a.View, {});
        var f = i[0],
          N = i[1],
          Z =
            (null == f ? void 0 : f.toStation) ===
            (null == N ? void 0 : N.fromStation);
        return (0, c.BX)(a.View, {
          className: "transit-trip-info",
          children: [
            (0, c.tZ)(a.View, { className: "line" }),
            (0, c.BX)(a.View, {
              className: "cont-box flex",
              children: [
                (0, c.BX)(a.View, {
                  className: "depart ".concat(
                    (null != f && f.isReschedule) || m ? "mark-view" : ""
                  ),
                  children: [
                    (0, c.tZ)(a.View, {
                      className: "time",
                      children: null == f ? void 0 : f.fromTime,
                    }),
                    (0, c.tZ)(a.View, {
                      className: "circle ".concat(o ? "mark-color" : ""),
                    }),
                    (0, c.tZ)(a.View, {
                      className: "station",
                      children: null == f ? void 0 : f.fromStation,
                    }),
                  ],
                }),
                (0, c.BX)(a.View, {
                  className: "middle",
                  children: [
                    (0, c.BX)(a.View, {
                      className: "time",
                      children: [
                        (0, c.tZ)(a.Text, {
                          className: "".concat(
                            null != f && f.isReschedule ? "mark" : ""
                          ),
                          children: null == f ? void 0 : f.toTime,
                        }),
                        (0, c.tZ)(a.Text, {
                          className: "ml38 ".concat(
                            null != N && N.isReschedule ? "mark" : ""
                          ),
                          children: null == N ? void 0 : N.fromTime,
                        }),
                      ],
                    }),
                    (0, c.tZ)(a.View, {
                      className: "transit-desc",
                      children: u ? "车内换座" : Z ? "站内换乘" : "异站换乘",
                    }),
                    (0, c.BX)(a.View, {
                      className: "station",
                      children: [
                        !Z &&
                          (0, c.tZ)(a.Text, {
                            className: "mr38 ".concat(
                              null != f && f.isReschedule ? "mark" : ""
                            ),
                            children: null == f ? void 0 : f.toStation,
                          }),
                        (0, c.tZ)(a.Text, {
                          className: "".concat(
                            ((null != N && N.isReschedule) || Z) && !m
                              ? "mark"
                              : ""
                          ),
                          children: null == N ? void 0 : N.fromStation,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, c.BX)(a.View, {
                  className: "arrive flex flex-column ".concat(
                    (null != N && N.isReschedule) || m ? "mark-view" : ""
                  ),
                  children: [
                    (0, c.tZ)(a.View, {
                      className: "time",
                      children: null == N ? void 0 : N.toTime,
                    }),
                    (0, c.tZ)(a.View, {
                      className: "circle ".concat(o ? "mark-color" : ""),
                    }),
                    (0, c.tZ)(a.View, {
                      className: "station",
                      children: null == N ? void 0 : N.toStation,
                    }),
                  ],
                }),
              ],
            }),
            (0, c.BX)(a.View, {
              className: "tips-box flex-align-items-center",
              children: [
                (0, c.BX)(a.View, {
                  className: "flex-1 f-trip",
                  id: "AAEo",
                  onClick: function () {
                    return s ? p(f) : void 0;
                  },
                  children: [
                    !u &&
                      (0, c.BX)(a.View, {
                        className: "trip-tips",
                        children: [
                          (0, c.BX)(a.Text, {
                            children: [
                              "第",
                              (null == f ? void 0 : f.routeSequence) || 1,
                              "程 ",
                              null == f ? void 0 : f.trainNo,
                            ],
                          }),
                          (0, c.tZ)(a.Text, {
                            className: "iconfont2 ifont2-arr",
                          }),
                        ],
                      }),
                    u &&
                      (0, c.tZ)(a.View, {
                        className: "trip-tips",
                        children: f.seatName,
                      }),
                  ],
                }),
                (0, c.BX)(a.View, {
                  className: "flex-1 s-trip",
                  children: [
                    !u &&
                      (0, c.BX)(a.View, {
                        className: "trip-tips",
                        id: "AAEp",
                        onClick: function () {
                          return s ? p(N) : void 0;
                        },
                        children: [
                          (0, c.BX)(a.Text, {
                            children: [
                              "第",
                              (null == N ? void 0 : N.routeSequence) || 2,
                              "程 ",
                              null == N ? void 0 : N.trainNo,
                            ],
                          }),
                          (0, c.tZ)(a.Text, {
                            className: "iconfont2 ifont2-arr",
                          }),
                        ],
                      }),
                    u &&
                      (0, c.tZ)(a.View, {
                        className: "trip-tips",
                        children: N.seatName,
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
    },
    92161: function (e, t, i) {
      "use strict";
      i.d(t, {
        Ap: function () {
          return o;
        },
        Mj: function () {
          return s;
        },
        VH: function () {
          return l;
        },
        l$: function () {
          return r;
        },
        sN: function () {
          return c;
        },
      });
      var n = i(17377),
        a = i(79792),
        c = (0, n.ZP)({
          serviceCode: "19480",
          channel: a.default.train_channel,
          path: "getSmartRescheduleConfirmDetail",
          correctVersion: "959",
        }),
        s = (0, n.ZP)({
          serviceCode: "19480",
          channel: a.default.train_channel,
          path: "confirmSmartOrder",
          correctVersion: "959",
        }),
        r = (0, n.ZP)({
          serviceCode: "19480",
          channel: a.default.train_channel,
          path: "updateGrabOrderProduct",
        }),
        o = (0, n.ZP)({
          serviceCode: "19480",
          channel: a.default.train_channel,
          path: "CancelSmartConfirmOrder",
          correctVersion: "959",
        }),
        l = (0, n.ZP)({
          serviceCode: "19480",
          channel: a.default.train_channel,
          path: "GetSmartOrderConfirmDetail",
        });
    },
    59510: function (e, t, i) {
      "use strict";
      i.d(t, {
        C: function () {
          return r;
        },
        u: function () {
          return s;
        },
      });
      var n = i(8271),
        a = i.n(n),
        c = i(79910),
        s = function (e) {
          var t = "";
          switch (e) {
            case 1:
              t = "第一程";
              break;
            case 2:
              t = "第二程";
          }
          return t;
        },
        r = function (e) {
          if (!e) return "";
          var t = c.Z.weekDay(e);
          return "".concat(a()(e).format("M月D日"), " ").concat(t);
        };
    },
    16274: function (e, t, i) {
      "use strict";
      var n = i(52500),
        a = i(71515),
        c = i(34229),
        s = i(79792),
        r = i(79910),
        o = i(48813);
      t.Z = n.default.memo(function (e) {
        var t = e.descList,
          i = void 0 === t ? [] : t,
          n = e.isShowRule,
          l = void 0 === n || n;
        return null == i || !i.length || i.length <= 0
          ? (0, o.tZ)(o.HY, {})
          : (0, o.BX)(a.View, {
              className: "tsmart-important-tips",
              children: [
                (0, o.tZ)(a.View, { className: "tit", children: "重要提示" }),
                (0, o.BX)(a.View, {
                  className: "tip-box flex",
                  children: [
                    (0, o.tZ)(a.View, {
                      className: "flex-1",
                      children: i.map(function (e, t) {
                        return (0,
                        o.tZ)(c.ZtRichText, { className: "item flex", nodes: e }, t);
                      }),
                    }),
                    l &&
                      (0, o.tZ)(a.View, {
                        className: "rule-btn flex-align-items-center",
                        id: "AFAG",
                        onClick: function () {
                          var e = "https://".concat(
                            s.default.isTieyou
                              ? "m.tieyou.com"
                              : "m.suanya.com",
                            "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=rebook"
                          );
                          r.Z.commonNavigator(e);
                        },
                        children: "规则",
                      }),
                  ],
                }),
              ],
            });
      });
    },
    49656: function (e, t, i) {
      "use strict";
      var n = i(71515),
        a = (i(92954), i(52500)),
        c = i(33477),
        s = i(48813);
      t.Z = a.default.memo(function (e) {
        var t = e.show,
          i = void 0 === t || t,
          a = e.title,
          r = void 0 === a ? "" : a,
          o = e.ticketInfoList,
          l = void 0 === o ? [] : o,
          m = e.handleClose,
          d = void 0 === m ? function () {} : m;
        return (0, s.tZ)(c.Z, {
          show: i,
          title: r,
          handleClose: d,
          children: (0, s.tZ)(n.View, {
            className: "train-pas-list-layer",
            children: (0, s.tZ)(n.View, {
              className: "pop-pasg-list",
              children: l.map(function (e, t) {
                return (0,
                s.BX)(n.View, { className: "item", children: [(0, s.tZ)(n.View, { className: "name", children: e.passengerName }), (0, s.tZ)(n.View, { className: "tag-grey", children: e.passengerType }), e.seatTag && (0, s.tZ)(n.View, { className: "tag-window", children: e.seatTag }), (0, s.BX)(n.View, { className: "seat", children: [e.seatType, " ￥", e.ticketPrice, " ", e.seatNo] })] }, t);
              }),
            }),
          }),
        });
      });
    },
    54681: function (e, t, i) {
      "use strict";
      var n = i(52500),
        a = i(71515),
        c = i(48813);
      t.Z = n.default.memo(function (e) {
        var t = e.pasInfo;
        return t
          ? (0, c.BX)(a.View, {
              className: "tsmart-passenger-info flex-align-items-center",
              children: [
                (0, c.tZ)(a.View, {
                  className: "name",
                  children: t.passengerName,
                }),
                (0, c.tZ)(a.View, {
                  className: "type",
                  children: t.passengerType,
                }),
                (0, c.BX)(a.View, {
                  className: "flex-align-items-center flex-1 pasg-right",
                  children: [
                    t.seatTag &&
                      (0, c.tZ)(a.View, {
                        className: "seat-tag",
                        children: t.seatTag,
                      }),
                    (0, c.BX)(a.View, {
                      className: "seat",
                      children: [t.seatType, " ¥", t.ticketPrice],
                    }),
                    (0, c.tZ)(a.View, {
                      className: "seat-no",
                      children: t.seatNo,
                    }),
                  ],
                }),
              ],
            })
          : (0, c.tZ)(c.HY, {});
      });
    },
    88869: function (e, t, i) {
      "use strict";
      var n = i(52500),
        a = i(92954),
        c = i.n(a),
        s = i(71515),
        r = i(17368),
        o = i(48813);
      t.Z = n.default.memo(function (e) {
        var t = e.content,
          i = void 0 === t ? "" : t,
          n = e.isNewStyle,
          a = void 0 !== n && n,
          l = e.onShowIntroduceDrawer,
          m = void 0 === l ? function () {} : l;
        return i
          ? (0, o.BX)(s.View, {
              className: "smart-prp-product flex-align-items-center ".concat(
                a ? "new-sty" : ""
              ),
              children: [
                (0, o.tZ)(s.Image, {
                  className: "l-icon",
                  src: "https://images3.c-ctrip.com/ztrip/train_zhu/tag_AnXinTui_ZNGQ.png",
                }),
                (0, o.tZ)(s.View, { className: "m-cont", children: i }),
                (0, o.tZ)(r.Z, {
                  mode: "img",
                  iconUrl:
                    "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_12.png",
                  onClickHandle: m,
                  customizeStyle: {
                    icon: "width: "
                      .concat(c().pxTransform(24), ";height: ")
                      .concat(c().pxTransform(24), ";"),
                  },
                }),
              ],
            })
          : (0, o.tZ)(o.HY, {});
      });
    },
    70404: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return v;
        },
      });
      var n = i(52500),
        a = i(71515),
        c = i(4102),
        s = i(25391),
        r = i(8271),
        o = i.n(r),
        l = i(75940),
        m = i(79910),
        d = i(59510),
        u = i(54681),
        h = i(48813),
        p = n.default.memo(function (e) {
          var t = e.passengerList,
            i = void 0 === t ? [] : t,
            c = e.smartSeries,
            s = void 0 === c ? 0 : c;
          return (null == i ? void 0 : i.length) <= 0
            ? (0, h.tZ)(h.HY, {})
            : (0, h.tZ)(a.View, {
                className: "tsmart-rs-passenger",
                children: i.map(function (e, t) {
                  return (0,
                  h.BX)(n.Fragment, { children: [(0, h.tZ)(u.Z, { pasInfo: e }), t !== i.length - 1 && (0, h.BX)(n.Fragment, { children: [-1 !== [57,
                                  63].indexOf(s) && (0, h.BX)(a.View, { className: "split-box flex-align-items-center", children: [(0, h.tZ)(a.View, { className: "h-line flex-1" }), (0, h.tZ)(a.Image, { className: "combine-icon", src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNGQ_ck_lianzuo.png" }), (0, h.tZ)(a.View, { className: "combine-desc", children: "连座" })] }), -1 === [57,
                                  63].indexOf(s) && (0, h.tZ)(a.View, { className: "split-line h-line" })] })] }, t);
                }),
              });
        }),
        f = n.default.memo(function (e) {
          var t = e.oldPassengerList,
            i = void 0 === t ? [] : t,
            n = e.newPassengerList,
            c = void 0 === n ? [] : n,
            s = function (e, t, i) {
              return (0, h.BX)(a.View, {
                className: "p-item flex-align-items-center "
                  .concat(t ? "new-sty" : "", " ")
                  .concat(i ? "" : "mb16"),
                children: [
                  (0, h.tZ)(a.View, {
                    className: "tag",
                    children: t ? "新" : "原",
                  }),
                  (0, h.tZ)(a.View, {
                    className: "name",
                    children: e.passengerName,
                  }),
                  (0, h.tZ)(a.View, {
                    className: "type",
                    children: e.passengerType,
                  }),
                  (0, h.BX)(a.View, {
                    className: "flex-align-items-center flex-1 pasg-right",
                    children: [
                      e.seatTag &&
                        (0, h.tZ)(a.View, {
                          className: "seat-tag",
                          children: e.seatTag,
                        }),
                      (0, h.BX)(a.View, {
                        className: "seat",
                        children: [e.seatType, " ¥", e.ticketPrice],
                      }),
                      (0, h.tZ)(a.View, {
                        className: "seat-no",
                        children: e.seatNo,
                      }),
                    ],
                  }),
                ],
              });
            };
          return (0, h.BX)(a.View, {
            className: "tsmart-rs-passenger-new",
            children: [
              null == i
                ? void 0
                : i.map(function (e, t) {
                    return s(e, !1, t === (null == i ? void 0 : i.length) - 1);
                  }),
              (0, h.BX)(a.View, {
                className: "split-box flex-align-items-center",
                children: [
                  (0, h.tZ)(a.Image, {
                    className: "icon",
                    src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNGQ_ck_jt.png",
                  }),
                  (0, h.tZ)(a.View, { className: "line flex-1" }),
                ],
              }),
              null == c
                ? void 0
                : c.map(function (e, t) {
                    return s(e, !0, t === (null == c ? void 0 : c.length) - 1);
                  }),
            ],
          });
        }),
        N = i(88869),
        Z = i(98704),
        w = i(32e3),
        g = i(61737),
        v = n.default.memo(function (e) {
          var t = e.RSTicketInfo,
            i = void 0 === t ? {} : t,
            n = e.propStyle,
            r = e.smartSeries,
            u = e.oldTicketPassengerList,
            v = void 0 === u ? [] : u,
            V = e.isFromDrawer,
            T = void 0 === V || V,
            x = e.transitTicketInfo,
            _ = void 0 === x ? null : x,
            B = e.peaceRefundTips,
            b = void 0 === B ? "" : B,
            y = e.refundFeeFreeTips,
            S = void 0 === y ? "" : y,
            X = e.tripType,
            k = e.onShowSameTripPasDrawer,
            I = void 0 === k ? function () {} : k,
            A = e.onShowFreeNoticeDrawer,
            z = void 0 === A ? function () {} : A,
            C = e.onShowPeaceRefundDrawer,
            P = void 0 === C ? function () {} : C,
            L = (i.orderTicketInfo || [])[0] || {},
            R = L.trainNo,
            D = L.fromDate,
            F = L.fromStation,
            Y = L.toStation,
            H = L.fromTime,
            U = L.toTime,
            E = L.ticketInfoList,
            M = L.toDate,
            G = L.routeSequence,
            j = L.seatName,
            Q = function (e) {
              -1 !== [65, 81, 83].indexOf(r) && e
                ? s.ZP.goTimeTable(
                    e.fromStation,
                    e.toStation,
                    e.trainNo,
                    e.fromDate
                  )
                : s.ZP.goTimeTable(F, Y, R, D);
            },
            O = D && M && o()(M).diff(o()(D), "day"),
            q = [];
          if (-1 !== [65, 81, 83].indexOf(r) && m.Z.isNotEmptyObj(_)) {
            var J,
              K = [
                {
                  routeSequence: G,
                  trainNo: R,
                  fromDate: D,
                  fromTime: H,
                  fromStation: F,
                  toTime: U,
                  toStation: Y,
                  isReschedule: !0,
                  seatName: j,
                },
              ],
              W =
                null === (J = _.orderTicketInfos) || void 0 === J
                  ? void 0
                  : J[0];
            K.push({
              routeSequence: _.routeSequence,
              trainNo: null == W ? void 0 : W.trainNo,
              fromDate: null == W ? void 0 : W.fromDate,
              fromTime: null == W ? void 0 : W.fromTime,
              fromStation: null == W ? void 0 : W.fromStation,
              toTime: null == W ? void 0 : W.toTime,
              toStation: null == W ? void 0 : W.toStation,
              isReschedule: !1,
              seatName: null == W ? void 0 : W.seatName,
            }),
              (q = K.sort(function (e, t) {
                return e.routeSequence - t.routeSequence;
              }));
          }
          var $ = i.title || "",
            ee = [],
            te = [],
            ie = "";
          if (-1 !== [71].indexOf(r)) {
            ($ = (0, d.u)(G)),
              v.forEach(function (e) {
                E.findIndex(function (t) {
                  return t.passengerInfoId === e.passengerInfoId;
                }) > -1
                  ? ee.push(e)
                  : te.push(e);
              });
            var ne,
              ae,
              ce = te.length;
            if (
              (1 === ce &&
                (ie = ""
                  .concat(
                    null === (ne = te[0]) || void 0 === ne
                      ? void 0
                      : ne.passengerName,
                    " "
                  )
                  .concat(
                    null === (ae = te[0]) || void 0 === ae ? void 0 : ae.seatNo
                  )),
              ce >= 2)
            ) {
              var se,
                re,
                oe,
                le,
                me,
                de =
                  null === (se = te[0]) ||
                  void 0 === se ||
                  null === (re = se.seatNo) ||
                  void 0 === re ||
                  null === (oe = re.split("车厢")) ||
                  void 0 === oe
                    ? void 0
                    : oe[0];
              ie = ""
                .concat(
                  null === (le = te[0]) || void 0 === le
                    ? void 0
                    : le.passengerName,
                  " "
                )
                .concat(de, "车厢、")
                .concat(
                  null === (me = te[1]) || void 0 === me
                    ? void 0
                    : me.passengerName,
                  "等"
                )
                .concat(ce, "人");
            }
          } else ee = v;
          var ue = -1 !== [31, 32, 38, 66, 71, 79, 80].indexOf(r) && !T;
          return (0, h.BX)(a.View, {
            className: "rs-info-module ".concat(
              71 === r && 2 === G ? "mt16" : ""
            ),
            children: [
              b &&
                (0, h.tZ)(N.Z, {
                  isNewStyle: !0,
                  content: b,
                  onShowIntroduceDrawer: P,
                }),
              S && (0, h.tZ)(Z.Z, { noticeInfo: S, id: "AFAI", onClick: z }),
              (0, h.BX)(a.View, {
                className: "RS-ticket-info-box ".concat(
                  b ? "peace-refund" : ""
                ),
                style: n,
                children: [
                  (0, h.BX)(a.View, {
                    className: "time-info",
                    children: [
                      (0, h.tZ)(w.Z, {
                        tag: $,
                        trainDesc: ""
                          .concat(c.Z.formatDate(D, "M月D日"), " ")
                          .concat(R),
                        statusDesc: "确认即可出票",
                      }),
                      (-1 === [65, 81, 83].indexOf(r) || T) &&
                        (0, h.tZ)(g.Z, {
                          fromTime: H,
                          toTime: U,
                          fromStation: F,
                          toStation: Y,
                          ticketTotalUseTime:
                            null == i ? void 0 : i.ticketTotalUseTime,
                          durationDays: O,
                          goTT: Q,
                        }),
                      -1 !== [65, 81, 83].indexOf(r) &&
                        !T &&
                        (0, h.tZ)(l.Z, {
                          tripList: q,
                          isReschedule: !0,
                          isCombine: 1 === X,
                          onTripClick: Q,
                        }),
                    ],
                  }),
                  !ue && (0, h.tZ)(p, { smartSeries: r, passengerList: E }),
                  ue &&
                    (0, h.tZ)(f, { oldPassengerList: ee, newPassengerList: E }),
                  -1 !== [71].indexOf(r) &&
                    !T &&
                    te.length > 0 &&
                    (0, h.BX)(a.View, {
                      className:
                        "same-trip-pas flex-align-items-center ".concat(
                          te.length > 1 ? "mr40" : ""
                        ),
                      children: [
                        (0, h.tZ)(a.Image, {
                          className: "icon",
                          src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNGQ_txck.png",
                        }),
                        (0, h.tZ)(a.View, {
                          className: "flex-1",
                          children: "同行乘客",
                        }),
                        (0, h.BX)(a.View, {
                          className: "pas-box flex-align-items-center",
                          id: "AFAK",
                          onClick: function () {
                            1 !== te.length && I();
                          },
                          children: [
                            (0, h.tZ)(a.View, {
                              className: "pas-desc",
                              children: ie,
                            }),
                            te.length > 1 &&
                              (0, h.tZ)(a.View, {
                                className: "iconfont2 ifont2-arr",
                              }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        });
    },
    98704: function (e, t, i) {
      "use strict";
      var n = i(52500),
        a = i(92954),
        c = i.n(a),
        s = i(71515),
        r = i(17368),
        o = i(48813);
      t.Z = n.default.memo(function (e) {
        var t = e.noticeInfo,
          i = void 0 === t ? "" : t,
          n = e.onClick,
          a = void 0 === n ? function () {} : n;
        return (0, o.tZ)(s.View, {
          className: "train-smart-notice",
          id: "AFAL",
          onClick: a,
          children: (0, o.BX)(s.View, {
            className: "flex-align-items-center",
            children: [
              (0, o.tZ)(s.Image, {
                className: "icon",
                src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_notice_16.png",
              }),
              (0, o.tZ)(s.View, { className: "content", children: i }),
              (0, o.tZ)(r.Z, {
                mode: "img",
                iconUrl:
                  "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_12.png",
                customizeStyle: {
                  icon: "width: "
                    .concat(c().pxTransform(24), ";height: ")
                    .concat(c().pxTransform(24), ";"),
                },
                onClickHandle: function (e) {
                  e.stopPropagation(), a();
                },
              }),
            ],
          }),
        });
      });
    },
    80904: function (e, t, i) {
      "use strict";
      var n = i(90129),
        a = i(52500),
        c = i(71515),
        s = i(34229),
        r = i(79792),
        o = i(79910),
        l = i(92954),
        m = i.n(l),
        d = i(2809),
        u = i(48813),
        h = "smartRSTicket",
        p = "smartCSTicket";
      t.Z = a.default.memo(function (e) {
        var t = e.headTopImage,
          i = void 0 === t ? "" : t,
          l = e.headInfo,
          f = void 0 === l ? {} : l,
          N = e.smartSeries,
          Z = void 0 === N ? 0 : N,
          w = e.originToStation,
          g = void 0 === w ? "" : w,
          v = e.rescheduleToStation,
          V = void 0 === v ? "" : v,
          T = e.fromSource,
          x = void 0 === T ? "" : T,
          _ = e.isPollingQuery,
          B = e.onBack,
          b = void 0 === B ? function () {} : B,
          y = (0, a.useState)(!0),
          S = (0, n.Z)(y, 2),
          X = S[0],
          k = S[1],
          I = "https://images3.c-ctrip.com/ztrip/train_zhu/Tag_logo_znx".concat(
            r.default.isTieyou ? "_ty" : "",
            ".png"
          ),
          A = [g, V],
          z = (null == f ? void 0 : f.descriptions) || [],
          C =
            (null === d.ZP || void 0 === d.ZP
              ? void 0
              : d.ZP.statusBarHeight) || 0;
        return (0, u.BX)(c.View, {
          className: "tsmart-head-box",
          children: [
            (0, u.tZ)(c.View, {
              className: "top-bar-v2",
              style: "padding-top: ".concat(C, "px"),
              children: (0, u.tZ)(c.View, {
                className: "ifont-back iconfont",
                id: "AFAg",
                onClick: b,
              }),
            }),
            (0, u.BX)(c.View, {
              className: "top-box-v2",
              style: "padding-top: ".concat(C, "px"),
              children: [
                x === h &&
                  7 === Z &&
                  V &&
                  (0, u.BX)(c.View, {
                    className: "to-station flex",
                    style: "top: ".concat(m().pxTransform(2 * C + 64), ";"),
                    children: [
                      (0, u.tZ)(c.Image, {
                        className: "bg-card",
                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_zp.png",
                      }),
                      (0, u.tZ)(c.Swiper, {
                        className: "swiper-sta mb10",
                        vertical: !0,
                        autoplay: X,
                        interval: 500,
                        duration: 1e3,
                        onChange: function (e) {
                          var t;
                          ((null == e || null === (t = e.detail) || void 0 === t
                            ? void 0
                            : t.current) || 0) ===
                            A.length - 1 && k(!1);
                        },
                        children: A.map(function (e, t) {
                          return (0,
                          u.tZ)(c.SwiperItem, { children: (0, u.BX)(c.View, { className: "flex-align-items-center swiper-sta-item", children: [(0, u.tZ)(c.Image, { className: "sta-tag", src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNGQ_hcz.png" }), (0, u.tZ)(c.Text, { className: "sta-desc", children: e })] }) }, "sta_swiper_".concat(t));
                        }),
                      }),
                    ],
                  }),
                (0, u.tZ)(c.Image, {
                  className: "img-top-hd",
                  src: i,
                  webp: !0,
                }),
                f.topTitle &&
                  (0, u.tZ)(s.ZtRichText, {
                    className: "candidateTopTitle",
                    nodes: f.topTitle,
                  }),
                (0, u.BX)(c.View, {
                  className: "tit-bd",
                  children: [
                    x === h &&
                      (0, u.tZ)(s.ZtRichText, {
                        className: "tit",
                        nodes: o.Z.highLightText(
                          f.title,
                          f.colorTitle,
                          "#0282FF",
                          "#FC6E51"
                        ),
                      }),
                    x === p &&
                      (0, u.tZ)(s.ZtRichText, {
                        className: "tit",
                        nodes: _
                          ? '正在全力为您<font color="#FFB657">出票中…</font>'
                          : f.title,
                      }),
                  ],
                }),
                (0, u.BX)(c.View, {
                  className: "txt-bd",
                  children: [
                    (0, u.tZ)(c.Image, { className: "icon", src: I }),
                    z.map(function (e, t) {
                      return (0,
                      u.tZ)(s.ZtRichText, { className: "tag ".concat(0 === t ? "first" : ""), nodes: e }, e);
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
    },
    79982: function (e, t, i) {
      "use strict";
      var n = i(71515),
        a = (i(92954), i(52500)),
        c = i(25958),
        s = i(48813);
      t.Z = a.default.memo(function (e) {
        var t = e.show,
          i = void 0 !== t && t,
          a = e.width,
          r = void 0 === a ? 62 : a,
          o = e.isTieyou,
          l = void 0 !== o && o,
          m = e.handleClose,
          d = void 0 === m ? function () {} : m;
        return (0,
        s.tZ)(c.Z, { show: i, onClose: d, hiddenCloseIcon: !0, ubtTrace: function () {}, children: (0, s.BX)(n.View, { className: "train-smartSplitLoadingBd", children: [(0, s.tZ)(n.View, { className: "tit", children: "正在验证是否需要补款" }), (0, s.tZ)(n.View, { className: "txt", children: "验证成功后，将自动支付车票款，支付成功自动出票" }), (0, s.tZ)(n.View, { className: "loading", children: (0, s.tZ)(n.View, { className: "progress ".concat(l ? "ty" : "zx"), style: "width: ".concat(r, "%") }) }), (0, s.BX)(n.View, { className: "desc", children: [(0, s.tZ)(n.Text, { className: "status", children: "正在验证请耐心等待..." }), (0, s.BX)(n.Text, { className: "num ".concat(l ? "ty" : "zx"), children: [r, "%"] })] })] }) });
      });
    },
    52824: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return Z;
        },
      });
      var n = i(90129),
        a = i(71515),
        c = i(92954),
        s = i.n(c),
        r = i(52500),
        o = i(79910),
        l = i(79792),
        m = i(34229),
        d = i(17368),
        u = i(59510),
        h = i(70404),
        p = i(48813),
        f = r.default.memo(function (e) {
          var t = e.content,
            i = void 0 === t ? "" : t,
            n = e.onClickTipsIcon,
            c = void 0 === n ? function () {} : n;
          return i
            ? (0, p.BX)(a.View, {
                className: "tsmart-hc-banner flex-align-items-center",
                children: [
                  (0, p.tZ)(a.Image, {
                    className: "l-icon",
                    src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNGQ_redbag.png",
                  }),
                  (0, p.tZ)(a.View, { className: "desc", children: i }),
                  (0, p.tZ)(d.Z, {
                    mode: "img",
                    iconUrl:
                      "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_16.png",
                    customizeStyle: {
                      icon: "width: "
                        .concat(s().pxTransform(32), ";height: ")
                        .concat(s().pxTransform(32), ";"),
                    },
                    onClickHandle: c,
                  }),
                ],
              })
            : (0, p.tZ)(a.View, {});
        }),
        N = r.default.memo(function (e) {
          var t = e.data;
          return t
            ? (0, p.BX)(a.View, {
                className: "tsmart-travel-subsidy",
                children: [
                  (0, p.BX)(a.View, {
                    className: "tit-box flex-center",
                    children: [
                      (0, p.tZ)(a.Image, {
                        className: "img",
                        src: t.icon,
                        webp: !0,
                      }),
                      (0, p.tZ)(m.ZtRichText, {
                        className: "tit",
                        nodes: t.title,
                      }),
                    ],
                  }),
                  t.smartFreeEquityDescInfo &&
                    (0, p.tZ)(a.View, {
                      className: "sub-box flex-center",
                      children: t.smartFreeEquityDescInfo.map(function (e, t) {
                        return (0,
                        p.BX)(a.View, { className: "itm flex-align-items-center", children: [(0, p.tZ)(a.Image, { className: "icon", src: e.icon, webp: !0 }), (0, p.tZ)(m.ZtRichText, { className: "desc", nodes: e.desc })] }, t);
                      }),
                    }),
                ],
              })
            : (0, p.tZ)(p.HY, {});
        }),
        Z = r.default.memo(function (e) {
          var t,
            i = e.show,
            c = void 0 === i || i,
            s = e.isTieyou,
            Z = void 0 !== s && s,
            w = e.isFromSplitTicket,
            g = void 0 !== w && w,
            v = e.smartServicePayToast,
            V = e.needShare,
            T = void 0 === V ? 0 : V,
            x = e.needConfirmTicketInfo,
            _ = void 0 === x ? {} : x,
            B = e.payRemindInfo,
            b = void 0 === B ? {} : B,
            y = e.confirmBtnName,
            S = void 0 === y ? "确认出票" : y,
            X = e.servicePrice,
            k = void 0 === X ? 0 : X,
            I = e.hotelCouponPrice,
            A = void 0 === I ? 0 : I,
            z = e.planeCouponPrice,
            C = void 0 === z ? 0 : z,
            P = e.rescheduleType,
            L = void 0 === P ? 0 : P,
            R = e.series,
            D = void 0 === R ? 0 : R,
            F = e.RSTicketInfo,
            Y = e.orderTimeout,
            H = void 0 === Y ? "" : Y,
            U = e.hotelSfxProduct,
            E = void 0 === U ? null : U,
            M = e.handleClose,
            G = void 0 === M ? function () {} : M,
            j = e.confirmPay,
            Q = void 0 === j ? function () {} : j,
            O = e.goTT,
            q = void 0 === O ? function () {} : O,
            J = e.ubtTrace,
            K = void 0 === J ? function () {} : J,
            W = e.cancelService,
            $ = void 0 === W ? function () {} : W,
            ee = e.onShowHotelCouponDrawer,
            te = void 0 === ee ? function () {} : ee,
            ie = e.travelSubsidyInfo,
            ne = (0, r.useState)(!1),
            ae = (0, n.Z)(ne, 2),
            ce = ae[0],
            se = ae[1],
            re = (0, r.useState)(!1),
            oe = (0, n.Z)(re, 2),
            le = oe[0],
            me = oe[1];
          (0, r.useEffect)(
            function () {
              !g &&
                c &&
                T &&
                K(199893, {
                  exposureType: "popup",
                  bizKey: "reschedule_profit_pay_pop_show",
                  series: D,
                });
            },
            [c]
          );
          var de = function () {
              !g &&
                T &&
                K(199894, {
                  bizKey: "reschedule_profit_pay_agent_click",
                  series: D,
                });
            },
            ue =
              null != F &&
              null !== (t = F.orderTicketInfo) &&
              void 0 !== t &&
              t[0]
                ? F.orderTicketInfo[0]
                : null == _
                ? void 0
                : _.ticketInfo;
          if (!ue) return (0, p.tZ)(a.View, {});
          var he = !1;
          F && (he = !0);
          var pe =
              (null == b ? void 0 : b.rotaryTables) &&
              (null == b ? void 0 : b.rotaryTables.length) > 0 &&
              !ie,
            fe = g ? v : b,
            Ne = {};
          2 == L &&
            ((null == ue ? void 0 : ue.ticketInfoList) || []).forEach(function (
              e
            ) {
              switch (
                ((Ne.totalFee = (Ne.totalFee || 0) + e.ticketPrice),
                e.passengerType)
              ) {
                case "成人票":
                case "学生票":
                  (Ne.adultCount = (Ne.adultCount || 0) + 1),
                    (Ne.adultFee = (Ne.adultFee || 0) + e.ticketPrice);
                  break;
                case "儿童票":
                  (Ne.childCount = (Ne.childCount || 0) + 1),
                    (Ne.childFee = (Ne.childFee || 0) + e.ticketPrice);
              }
            });
          var Ze = function () {
              var e = fe.confirmBtnName || S;
              if (!g && 2 === L) {
                var t,
                  i,
                  n,
                  a,
                  c = Ne.totalFee || 0;
                if (ce) return e + "（¥".concat(c, "）");
                c += k;
                var s =
                    (null === (t = fe.autoTicketBtnName) ||
                    void 0 === t ||
                    null === (i = t.split("(")) ||
                    void 0 === i
                      ? void 0
                      : i[0]) || "",
                  r =
                    (null === (n = fe.autoTicketBtnName) ||
                    void 0 === n ||
                    null === (a = n.split(")")) ||
                    void 0 === a
                      ? void 0
                      : a[1]) || "";
                return s + "（¥".concat(c, "）") + r;
              }
              return ce ? e : fe.autoTicketBtnName;
            },
            we = (0, u.C)(ue.fromDate),
            ge = (0, u.C)(ue.toDate);
          return (0, p.tZ)(m.ZtDrawer, {
            show: c,
            className: "train-smart-rs-confirm-layer",
            isShowClose: !1,
            onWrapClose: G,
            children: (0, p.tZ)(a.View, {
              className: "content",
              children: (0, p.BX)(a.View, {
                className: "".concat(Z ? "ty" : "zx"),
                children: [
                  (0, p.BX)(a.View, {
                    className: "header-box flex-align-items-center flex-column",
                    children: [
                      !!T &&
                        (0, p.tZ)(a.View, {
                          className: "bg",
                          children: (0, p.tZ)(a.Image, {
                            src: Z
                              ? "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_bg_jt_ty.png"
                              : "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_bg_jt_zx.png",
                            className: "icon",
                          }),
                        }),
                      (function () {
                        if (g) {
                          var e = (null == v ? void 0 : v.title) || "";
                          return (0, p.tZ)(m.ZtRichText, {
                            className: "title",
                            space: "nbsp",
                            nodes: o.Z.convertAppTextToHtmlStr(e),
                          });
                        }
                        if (T) {
                          var t = "抢票升级".concat(
                            (null == b ? void 0 : b.middleRemindInfo) || ""
                          );
                          return (0, p.tZ)(m.ZtRichText, {
                            className: "title",
                            space: "nbsp",
                            nodes: o.Z.convertAppTextToHtmlStr(t),
                          });
                        }
                        return (0, p.BX)(a.View, {
                          className: "title flex-align-items-center",
                          children: [
                            (0, p.tZ)(a.Text, { children: "请核对信息 " }),
                            (0, p.tZ)(m.ZtCountdown, {
                              endTime: H,
                              format: { minute: ":" },
                              isShowHour: !1,
                              className: "high-tit",
                            }),
                            (0, p.tZ)(a.Text, { children: " 后自动取消" }),
                          ],
                        });
                      })(),
                      g
                        ? (0, p.BX)(a.View, {
                            className: "sub-tit flex-align-items-center",
                            children: [
                              (0, p.tZ)(a.Text, {
                                children: "为您节省补票手续费（铁路局收取），",
                              }),
                              (0, p.tZ)(m.ZtCountdown, {
                                endTime: H,
                                format: { minute: "分", second: "秒" },
                                isShowHour: !1,
                              }),
                              (0, p.tZ)(a.Text, { children: " 后自动取消" }),
                            ],
                          })
                        : T
                        ? (0, p.BX)(a.View, {
                            className: "sub-tit flex-align-items-center",
                            children: [
                              (0, p.tZ)(a.Text, { children: "请核对信息，" }),
                              (0, p.tZ)(m.ZtCountdown, {
                                endTime: H,
                                format: { minute: "分", second: "秒" },
                                isShowHour: !1,
                              }),
                              (0, p.tZ)(a.Text, { children: " 后自动取消" }),
                            ],
                          })
                        : void 0,
                      (0, p.tZ)(a.Image, {
                        className: "close-icon",
                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                        id: "AFAm",
                        onClick: G,
                      }),
                    ],
                  }),
                  (0, p.BX)(a.View, {
                    className: "pop-payment-detail",
                    children: [
                      he
                        ? (0, p.tZ)(h.Z, {
                            propStyle: { margin: "0 8px 8px 8px" },
                            RSTicketInfo: F,
                            smartSeries: D,
                          })
                        : (function () {
                            var e;
                            return (0, p.BX)(p.HY, {
                              children: [
                                (0, p.BX)(a.View, {
                                  className: "white-box pop-payment-tick",
                                  children: [
                                    (0, p.BX)(a.View, {
                                      className: "pop-payment-hd ".concat(
                                        T ? "needShare" : ""
                                      ),
                                      children: [
                                        (0, p.BX)(a.View, {
                                          className: "from",
                                          children: [
                                            (0, p.tZ)(a.View, {
                                              className: "date",
                                              children: we,
                                            }),
                                            (0, p.tZ)(a.View, {
                                              className: "time",
                                              children: ue.fromTime,
                                            }),
                                            (0, p.tZ)(a.View, {
                                              className: "station",
                                              children: ue.fromStation,
                                            }),
                                          ],
                                        }),
                                        (0, p.BX)(a.View, {
                                          className: "mid",
                                          children: [
                                            (0, p.tZ)(a.View, {
                                              className: "schedule",
                                              id: "AFAl",
                                              onClick: q,
                                              children: "时刻表",
                                            }),
                                            (0, p.BX)(a.View, {
                                              className: "txt",
                                              children: [
                                                ue.trainNo,
                                                (0, p.tZ)(a.Text, {
                                                  className:
                                                    "ifont-sfz iconfont",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, p.BX)(a.View, {
                                          className: "to",
                                          children: [
                                            (0, p.tZ)(a.View, {
                                              className: "date",
                                              children: ge,
                                            }),
                                            (0, p.tZ)(a.View, {
                                              className: "time",
                                              children: ue.toTime,
                                            }),
                                            (0, p.tZ)(a.View, {
                                              className: "station",
                                              children: ue.toStation,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, p.tZ)(a.View, {
                                      className: "pop-payment-list",
                                      children: ue.ticketInfoList.map(function (
                                        e,
                                        t
                                      ) {
                                        return (0, p.BX)(
                                          a.View,
                                          {
                                            className: "item",
                                            children: [
                                              (0, p.tZ)(a.View, {
                                                className: "name",
                                                children: e.passengerName,
                                              }),
                                              (0, p.tZ)(a.View, {
                                                className: "tag-grey",
                                                children: e.passengerType,
                                              }),
                                              e.seatTag &&
                                                (0, p.tZ)(a.View, {
                                                  className: "tag-window",
                                                  children: e.seatTag,
                                                }),
                                              (0, p.BX)(a.View, {
                                                className: "seat",
                                                children: [
                                                  e.seatType,
                                                  " ￥",
                                                  e.ticketPrice,
                                                  " ",
                                                  e.seatNo,
                                                ],
                                              }),
                                            ],
                                          },
                                          t
                                        );
                                      }),
                                    }),
                                    3 == L &&
                                      (0, p.tZ)(a.View, {
                                        className: "rs-tips",
                                        children:
                                          "车票差价退款将在改签成功后退回原支付账户",
                                      }),
                                  ],
                                }),
                                b &&
                                  (null === (e = b.remindList) || void 0 === e
                                    ? void 0
                                    : e.length) > 0 &&
                                  (0, p.tZ)(a.View, {
                                    className: "white-box pop-payment-tips",
                                    children: (0, p.tZ)(a.View, {
                                      className: "tip-content",
                                      children: b.remindList.map(function (
                                        e,
                                        t
                                      ) {
                                        return (0, p.tZ)(
                                          a.View,
                                          {
                                            className: "txt",
                                            children: (0, p.tZ)(m.ZtRichText, {
                                              nodes:
                                                o.Z.convertAppTextToHtmlStr(e),
                                            }),
                                          },
                                          t
                                        );
                                      }),
                                    }),
                                  }),
                                b &&
                                  b.remindInfo &&
                                  (0, p.tZ)(a.View, {
                                    className:
                                      "white-box pop-payment-remindInfo",
                                    children: (0, p.tZ)(a.View, {
                                      className: "txt",
                                      children: (0, p.tZ)(m.ZtRichText, {
                                        nodes: o.Z.convertAppTextToHtmlStr(
                                          b.remindInfo
                                        ),
                                      }),
                                    }),
                                  }),
                              ],
                            });
                          })(),
                      g
                        ? !!T &&
                          (0, p.BX)(a.View, {
                            className: "white-box upgrade-service",
                            children: [
                              (0, p.BX)(a.View, {
                                className: "upgrade-service-hd",
                                children: [
                                  (0, p.BX)(a.View, {
                                    className: "hd-left",
                                    children: [
                                      (0, p.tZ)(a.Text, {
                                        className: "main-tit",
                                        children: "购买升级套餐包",
                                      }),
                                      (0, p.tZ)(a.View, {
                                        className: "sub-tit sub-tit-box",
                                        children: "赠本次升级服务",
                                      }),
                                    ],
                                  }),
                                  (0, p.BX)(a.View, {
                                    className: "hd-right",
                                    children: [
                                      (0, p.tZ)(a.Text, {
                                        className: "sub-tit",
                                        children: "套餐价",
                                      }),
                                      pe &&
                                        (0, p.tZ)(a.Text, {
                                          className: "origin-price",
                                          children: "¥50",
                                        }),
                                      (0, p.tZ)(a.Text, {
                                        className: "amount-unit red-mark",
                                        children: "¥",
                                      }),
                                      (0, p.tZ)(a.Text, {
                                        className: "package-price",
                                        children: k,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              pe &&
                                (0, p.BX)(a.View, {
                                  className: "luck-draw-coupon",
                                  children: ["优惠券已抵扣 ¥", b.couponPrice],
                                }),
                              (0, p.BX)(a.View, {
                                className: "upgrade-service-cont ".concat(
                                  pe ? "lc-coupon" : ""
                                ),
                                children: [
                                  (0, p.BX)(a.View, {
                                    className: "train-coupon coupon-banner",
                                    children: [
                                      (0, p.BX)(a.View, {
                                        className: "train-coupon-tit",
                                        children: [
                                          (0, p.tZ)(a.Text, {
                                            className: "train-mark",
                                            children: "免费",
                                          }),
                                          "抢票升级",
                                        ],
                                      }),
                                      (0, p.tZ)(a.View, {
                                        className: "sub-tit",
                                        children: "火车票服务",
                                      }),
                                      (0, p.tZ)(a.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_plus.png",
                                        className: "add-icon",
                                      }),
                                    ],
                                  }),
                                  (0, p.BX)(a.View, {
                                    className: "hotel-coupon coupon-banner",
                                    children: [
                                      (0, p.BX)(a.View, {
                                        className: "hotel-coupon-tit",
                                        children: [
                                          (0, p.tZ)(a.Text, {
                                            className: "amount-unit",
                                            children: "¥",
                                          }),
                                          (0, p.tZ)(a.Text, {
                                            className: "coupon",
                                            children: A,
                                          }),
                                        ],
                                      }),
                                      (0, p.tZ)(a.View, {
                                        className: "sub-tit",
                                        children: "酒店满减券",
                                      }),
                                      (0, p.tZ)(a.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_ZNGQ_plus.png",
                                        className: "add-icon",
                                      }),
                                    ],
                                  }),
                                  (0, p.BX)(a.View, {
                                    className: "flight-coupon coupon-banner",
                                    children: [
                                      (0, p.BX)(a.View, {
                                        className: "flight-coupon-tit",
                                        children: [
                                          (0, p.tZ)(a.Text, {
                                            className: "amount-unit",
                                            children: "¥",
                                          }),
                                          (0, p.tZ)(a.Text, {
                                            className: "coupon",
                                            children: C,
                                          }),
                                        ],
                                      }),
                                      (0, p.tZ)(a.View, {
                                        className: "sub-tit",
                                        children: "机票满减券",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, p.BX)(a.View, {
                                className: "coupon-purchase-switcher",
                                children: [
                                  (0, p.tZ)(a.View, {
                                    className: "tit",
                                    children: fe.abandonRemindInfo,
                                  }),
                                  (0, p.tZ)(m.ZtSwitch, {
                                    className: "wx-switch-input",
                                    checked: ce,
                                    onChange: function () {
                                      se(!ce);
                                    },
                                    partner: l.default.partner,
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (function () {
                            var e = !!T && fe && fe.abandonRemindInfoNew;
                            return (
                              !!T &&
                              (0, p.BX)(a.View, {
                                className: "new-package-container ".concat(
                                  e ? "pb96" : ""
                                ),
                                children: [
                                  2 === L &&
                                    (0, p.tZ)(a.View, {
                                      className: "fee-tips",
                                      children:
                                        "铁路局规定: 改签需先支付新车票，改签成功后退回原票款",
                                    }),
                                  (0, p.BX)(a.View, {
                                    className: "new-package-style ".concat(
                                      le ? "opened" : ""
                                    ),
                                    children: [
                                      !o.Z.isEmptyObject(Ne) &&
                                        (0, p.BX)(p.HY, {
                                          children: [
                                            (0, p.BX)(a.View, {
                                              className: "total-fee flex",
                                              children: [
                                                (0, p.tZ)(a.Text, {
                                                  children: "需支付",
                                                }),
                                                (0, p.tZ)(a.Text, {
                                                  className: "unit",
                                                  children: "￥",
                                                }),
                                                (0, p.tZ)(a.Text, {
                                                  className: "fee",
                                                  children: Ne.totalFee,
                                                }),
                                              ],
                                            }),
                                            Ne.adultCount > 0 &&
                                              (0, p.BX)(a.View, {
                                                className: "item-fee flex",
                                                children: [
                                                  (0, p.BX)(a.Text, {
                                                    children: [
                                                      "新车票 x",
                                                      Ne.adultCount,
                                                    ],
                                                  }),
                                                  (0, p.BX)(a.Text, {
                                                    className: "fee",
                                                    children: [
                                                      "¥",
                                                      Ne.adultFee,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            Ne.childCount > 0 &&
                                              (0, p.BX)(a.View, {
                                                className: "item-fee flex",
                                                children: [
                                                  (0, p.BX)(a.Text, {
                                                    children: [
                                                      "新车票(儿童) x",
                                                      Ne.childCount,
                                                    ],
                                                  }),
                                                  (0, p.BX)(a.Text, {
                                                    className: "fee",
                                                    children: [
                                                      "¥",
                                                      Ne.childFee,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      (0, p.BX)(a.View, {
                                        className: "header-nps ".concat(
                                          2 === L && ce ? "disabled" : ""
                                        ),
                                        children: [
                                          (0, p.BX)(a.View, {
                                            className: "l-box",
                                            children: [
                                              2 !== L &&
                                                (0, p.tZ)(a.View, {
                                                  className: "line",
                                                }),
                                              (0, p.tZ)(a.View, {
                                                className: "tit ".concat(
                                                  2 === L && "tit-v2"
                                                ),
                                                children: "改签套餐包",
                                              }),
                                              (0, p.tZ)(d.Z, {
                                                mode: "img",
                                                iconUrl:
                                                  "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_16.png",
                                                jumpUrl: Z
                                                  ? "https://market.suanya.com/document/static/train/youhuiquanxt.html"
                                                  : "https://market.suanya.com/document/static/train/youhuiquanxz.html",
                                              }),
                                              (0, p.tZ)(a.View, {
                                                className: "iconfont detail",
                                                id: "AFAh",
                                                onClick: function () {
                                                  (2 === L && ce) ||
                                                    me(function (e) {
                                                      return !e;
                                                    });
                                                },
                                                children: "详情",
                                              }),
                                            ],
                                          }),
                                          (0, p.BX)(a.View, {
                                            className: "r-box",
                                            children: [
                                              (0, p.tZ)(a.View, {
                                                className: "tag",
                                                children: "赠本次改签服务",
                                              }),
                                              (0, p.BX)(a.View, {
                                                className:
                                                  "right flex-align-items-center",
                                                children: [
                                                  pe &&
                                                    (0, p.tZ)(a.Text, {
                                                      className: "origin-price",
                                                      children: "¥50",
                                                    }),
                                                  2 !== L &&
                                                    (0, p.tZ)(a.Text, {
                                                      className: "amount-unit",
                                                      children: "¥",
                                                    }),
                                                  2 !== L &&
                                                    (0, p.tZ)(a.Text, {
                                                      className:
                                                        "package-price",
                                                      children: k,
                                                    }),
                                                  2 === L &&
                                                    (0, p.BX)(a.Text, {
                                                      className: "pkg-price",
                                                      children: ["¥", k],
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      pe &&
                                        (0, p.BX)(a.View, {
                                          className: "coupon-tip ".concat(
                                            2 === L && ce ? "disabled" : ""
                                          ),
                                          children: [
                                            "优惠券已抵扣 ¥",
                                            b.couponPrice,
                                          ],
                                        }),
                                      (0, p.BX)(a.View, {
                                        className: "container-nps ".concat(
                                          2 === L ? "bg" : ""
                                        ),
                                        children: [
                                          (0, p.BX)(a.View, {
                                            className: "item",
                                            children: [
                                              (0, p.tZ)(a.Image, {
                                                className: "icon",
                                                src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNGQ_sy_gaiqian.png",
                                              }),
                                              (0, p.tZ)(a.View, {
                                                className: "tit",
                                                children: "本次改签服务",
                                              }),
                                              (0, p.tZ)(a.View, {
                                                className: "sub-tit",
                                                children: "免费赠送",
                                              }),
                                            ],
                                          }),
                                          (0, p.BX)(a.View, {
                                            className: "item",
                                            children: [
                                              (0, p.tZ)(a.Image, {
                                                className: "icon",
                                                src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNGQ_sy_hotel.png",
                                              }),
                                              (0, p.tZ)(a.View, {
                                                className: "tit",
                                                children: "酒店满减券",
                                              }),
                                              (0, p.BX)(a.View, {
                                                className: "sub-tit",
                                                children: ["价值¥", A],
                                              }),
                                            ],
                                          }),
                                          (0, p.BX)(a.View, {
                                            className: "item",
                                            children: [
                                              (0, p.tZ)(a.Image, {
                                                className: "icon",
                                                src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ZNGQ_sy_flightTicket.png",
                                              }),
                                              (0, p.tZ)(a.View, {
                                                className: "tit",
                                                children: "机票满减券",
                                              }),
                                              (0, p.BX)(a.View, {
                                                className: "sub-tit",
                                                children: ["价值¥", C],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, p.BX)(a.View, {
                                        className: "coupon-purchase-switcher",
                                        children: [
                                          (0, p.tZ)(a.View, {
                                            className: "tit",
                                            children: fe.abandonRemindInfo,
                                          }),
                                          (0, p.tZ)(m.ZtSwitch, {
                                            className: "wx-switch-input",
                                            checked: ce,
                                            onChange: function () {
                                              se(!ce);
                                            },
                                            partner: l.default.partner,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            );
                          })(),
                      !g &&
                        (0, p.tZ)(f, {
                          content: null == E ? void 0 : E.note,
                          onClickTipsIcon: te,
                        }),
                      !ce && (0, p.tZ)(N, { data: ie }),
                      T && fe && fe.abandonRemindInfoNew
                        ? (0, p.BX)(a.View, {
                            className: "botm-box-v2",
                            children: [
                              (0, p.tZ)(a.View, {
                                className: "cancel-box-v2",
                                id: "AFAi",
                                onClick: $,
                                children: fe.abandonRemindInfoNew || "",
                              }),
                              (0, p.tZ)(a.Button, {
                                className: "confirm-button-v2",
                                id: "AFAj",
                                onClick: function () {
                                  de(), Q();
                                },
                                children: (0, p.tZ)(m.ZtRichText, {
                                  nodes: o.Z.convertAppTextToHtmlStr(
                                    T ? fe.autoTicketBtnName : S
                                  ),
                                }),
                              }),
                            ],
                          })
                        : (0, p.tZ)(a.View, {
                            className: "smartrsbotmbox",
                            children: (0, p.tZ)(a.Button, {
                              className: "confirm-button",
                              id: "AFAk",
                              onClick: function () {
                                de(), ce ? $() : Q();
                              },
                              children: (0, p.tZ)(m.ZtRichText, {
                                nodes: o.Z.convertAppTextToHtmlStr(Ze()),
                              }),
                            }),
                          }),
                    ],
                  }),
                ],
              }),
            }),
          });
        });
    },
    88637: function (e, t, i) {
      "use strict";
      var n = i(52500),
        a = i(92954),
        c = i.n(a),
        s = i(71515),
        r = i(34229),
        o = i(38434),
        l = i(48813);
      t.Z = n.default.memo(function (e) {
        var t = e.show,
          i = void 0 !== t && t,
          n = e.title,
          a = void 0 === n ? "" : n,
          m = e.subTitle,
          d = void 0 === m ? "" : m,
          u = e.leftBtnName,
          h = e.rightBtnName,
          p = e.peaceRefundTips,
          f = void 0 === p ? "" : p,
          N = e.refuseToast,
          Z = void 0 === N ? [] : N,
          w = e.hasFreeTask,
          g = void 0 !== w && w,
          v = e.onLeftClick,
          V = void 0 === v ? function () {} : v,
          T = e.onRightClick,
          x = void 0 === T ? function () {} : T,
          _ = e.onClose,
          B = void 0 === _ ? function () {} : _,
          b = e.tag,
          y = void 0 === b ? "" : b,
          S = g ? "免服务费出票" : u;
        return (0, l.BX)(r.ZtDrawer, {
          show: i,
          isDefineHead: !0,
          isShowClose: !1,
          onWrapClose: B,
          className: "train-smart-refuse-drawer",
          children: [
            (0, l.tZ)(s.View, { className: "bg" }),
            (0, l.BX)(s.View, {
              className: "header",
              children: [
                (0, l.tZ)(s.View, { className: "tit", children: a }),
                (0, l.tZ)(s.Image, {
                  className: "icon-closed",
                  src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                  id: "AFBF",
                  onClick: B,
                }),
              ],
            }),
            (0, l.BX)(s.View, {
              className: "content",
              children: [
                (0, l.tZ)(s.View, { className: "tit", children: d }),
                null == Z
                  ? void 0
                  : Z.map(function (e, t) {
                      return (0,
                      l.BX)(s.View, { className: "item flex-align-items-center", children: [(0, l.tZ)(s.Image, { className: "icon", src: e.icon }), (0, l.tZ)(r.ZtRichText, { className: "txt", nodes: e.title })] }, t);
                    }),
                f &&
                  (0, l.tZ)(o.Z, {
                    bannerInfo: {
                      img: "https://images3.c-ctrip.com/ztrip/train_zhu/Tag_text_Anxintui.png",
                      content: f,
                    },
                    customizeStyle: "margin-right: "
                      .concat(c().pxTransform(32), ";margin-top: ")
                      .concat(c().pxTransform(24), ";"),
                  }),
              ],
            }),
            (0, l.BX)(s.View, {
              className: "button-box",
              children: [
                (0, l.BX)(s.Button, {
                  className: "btn btn-cancel flex-1",
                  id: "AFBG",
                  onClick: V,
                  children: [
                    (0, l.tZ)(s.Text, { children: S }),
                    g &&
                      !y &&
                      (0, l.tZ)(s.Image, {
                        className: "task-icon",
                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/Tag_ZNGQ_jujue_zrw.png",
                      }),
                    g &&
                      y &&
                      (0, l.tZ)(s.View, {
                        className: "tag-desc",
                        children: (0, l.tZ)(s.Text, {
                          className: "td-txt",
                          children: y,
                        }),
                      }),
                  ],
                }),
                (0, l.tZ)(s.Button, {
                  className: "btn btn-confirm flex-1",
                  id: "AFBH",
                  onClick: x,
                  children: h,
                }),
              ],
            }),
          ],
        });
      });
    },
    93510: function (e, t, i) {
      "use strict";
      var n = i(298),
        a = i(90129),
        c = i(92954),
        s = i.n(c),
        r = i(52500),
        o = i(71515),
        l = i(33477),
        m = i(2809),
        d = i(48813);
      t.Z = r.default.memo(function (e) {
        var t = (0, r.useRef)(m.ZP.isIPhoneX),
          i = (0, r.useState)([]),
          c = (0, a.Z)(i, 2),
          u = c[0],
          h = c[1],
          p = (0, r.useRef)(s().getBackgroundAudioManager()),
          f = (0, r.useRef)(!1),
          N = e.show,
          Z = void 0 !== N && N,
          w = e.isTieyou,
          g = void 0 !== w && w,
          v = e.voiceDescriptionInfos,
          V = void 0 === v ? null : v,
          T = e.title,
          x = void 0 === T ? "" : T,
          _ = e.handleClose,
          B = void 0 === _ ? function () {} : _;
        if (
          ((0, r.useEffect)(
            function () {
              Array.isArray(V) &&
                V.length > 0 &&
                h(
                  V.map(function (e) {
                    return (0,
                    n.Z)((0, n.Z)({}, e), {}, { PLAY_STATUS: "PAUSE", playIcon: "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_bf".concat(g ? "_ty" : "", "@3x.png") });
                  })
                );
            },
            [V, g]
          ),
          !V)
        )
          return (0, d.tZ)(o.View, {});
        var b = function (e) {
          console.log(u[e].PLAY_STATUS),
            "PAUSE" === (u[e].PLAY_STATUS || "PAUSE")
              ? ((function (e) {
                  var t = u[e].voiceUrl;
                  f.current ||
                    ((f.current = !0),
                    p.current.onError(function () {
                      (f.current = !1),
                        h(
                          V.map(function (e) {
                            return (0,
                            n.Z)((0, n.Z)({}, e), {}, { PLAY_STATUS: "PAUSE", playIcon: "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_bf".concat(g ? "_ty" : "", "@3x.png") });
                          })
                        );
                    }),
                    p.current.onEnded(function () {
                      (f.current = !1),
                        h(
                          V.map(function (e) {
                            return (0,
                            n.Z)((0, n.Z)({}, e), {}, { PLAY_STATUS: "PAUSE", playIcon: "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_bf".concat(g ? "_ty" : "", "@3x.png") });
                          })
                        );
                    })),
                    s().playBackgroundAudio({ dataUrl: t });
                })(e),
                h(
                  u.map(function (t, i) {
                    return e === i
                      ? (0, n.Z)(
                          (0, n.Z)({}, t),
                          {},
                          {
                            PLAY_STATUS: "PLAYING",
                            playIcon:
                              "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_zt".concat(
                                g ? "_ty" : "",
                                "@3x.png"
                              ),
                          }
                        )
                      : (0, n.Z)(
                          (0, n.Z)({}, t),
                          {},
                          {
                            PLAY_STATUS: "PAUSE",
                            playIcon:
                              "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_bf".concat(
                                g ? "_ty" : "",
                                "@3x.png"
                              ),
                          }
                        );
                  })
                ))
              : (s().pauseBackgroundAudio(),
                h(
                  u.map(function (e) {
                    return (0,
                    n.Z)((0, n.Z)({}, e), {}, { PLAY_STATUS: "PAUSE", playIcon: "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_bf".concat(g ? "_ty" : "", "@3x.png") });
                  })
                ));
        };
        return (0, d.tZ)(l.Z, {
          title: x,
          show: Z,
          handleClose: function () {
            s().stopBackgroundAudio(),
              h(
                V.map(function (e) {
                  return (0,
                  n.Z)((0, n.Z)({}, e), {}, { PLAY_STATUS: "PAUSE", playIcon: "https://images3.c-ctrip.com/ztrip/train.song/xcx/icon_zt".concat(g ? "_ty" : "", "@3x.png") });
                })
              ),
              B();
          },
          propStyle: { background: "#f7f7f7" },
          children: (0, d.tZ)(o.View, {
            className: "train-SmartSplitAudioPlayerLayer ".concat(
              t.current ? "isPhoneX" : ""
            ),
            children: u.map(function (e, t) {
              return (0, d.BX)(
                o.View,
                {
                  className: "item",
                  children: [
                    (0, d.BX)(o.View, {
                      className: "hd",
                      children: [
                        (0, d.tZ)(o.Image, {
                          src: "https://images3.c-ctrip.com/train/tieyou-mini-img/Q-icon@3x.png",
                          className: "QIcon",
                        }),
                        (0, d.tZ)(o.Text, {
                          className: "tit",
                          children: e.question,
                        }),
                      ],
                    }),
                    (0, d.BX)(o.View, {
                      className: "bd",
                      children: [
                        (0, d.tZ)(o.Image, {
                          src: e.headPicUrl,
                          className: "AIcon",
                        }),
                        (0, d.BX)(o.View, {
                          className: "player ".concat(g ? "ty" : "zx"),
                          id: "AFBI",
                          onClick: function () {
                            b(t);
                          },
                          children: [
                            (0, d.tZ)(o.Image, {
                              src: e.playIcon,
                              className: "control-icon",
                            }),
                            (0, d.tZ)(o.View, {
                              className: "progress "
                                .concat(g ? "ty" : "zx", " ")
                                .concat(
                                  "PLAYING" === e.PLAY_STATUS ? "active" : ""
                                ),
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
        });
      });
    },
    23263: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = i(57042),
        a = i(24460),
        c = i(21867),
        s = i(86066),
        r = i(52500),
        o = i(71515),
        l = (i(92954), i(48813)),
        m = (function (e) {
          (0, c.Z)(i, e);
          var t = (0, s.Z)(i);
          function i() {
            return (0, n.Z)(this, i), t.apply(this, arguments);
          }
          return (
            (0, a.Z)(i, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.data || {},
                    i = t.orderTicketList,
                    n = t.bubbleTips;
                  return i && i[0]
                    ? (0, l.tZ)(o.View, {
                        className: "train-smart-ticket-box",
                        children:
                          i &&
                          i.map(function (t) {
                            return (0, l.BX)(
                              o.View,
                              {
                                className: "white-box modify-box",
                                children: [
                                  (0, l.BX)(o.View, {
                                    className: "modify-hd",
                                    children: [
                                      (0, l.BX)(o.View, {
                                        className: "from",
                                        children: [
                                          (0, l.tZ)(o.View, {
                                            className: "date",
                                            children:
                                              t.fromDateDesc || t.fromDate,
                                          }),
                                          (0, l.tZ)(o.View, {
                                            className: "time",
                                            children: t.fromTime,
                                          }),
                                          (0, l.tZ)(o.View, {
                                            className: "station",
                                            children: t.fromStation,
                                          }),
                                        ],
                                      }),
                                      (0, l.BX)(o.View, {
                                        className: "mid",
                                        children: [
                                          (0, l.tZ)(o.View, {
                                            className: "jt",
                                            id: "AFBR",
                                            onClick: e.props.goTT,
                                            "data-info": t,
                                            children: "经停信息",
                                          }),
                                          (0, l.BX)(o.View, {
                                            className: "checi",
                                            children: [
                                              t.trainNo,
                                              i.fastPassFlag &&
                                                (0, l.tZ)(o.Text, {
                                                  className:
                                                    "ifont-sfz iconfont",
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, l.BX)(o.View, {
                                        className: "to",
                                        children: [
                                          (0, l.tZ)(o.View, {
                                            className: "date",
                                            children: t.toDateDesc || t.toDate,
                                          }),
                                          (0, l.tZ)(o.View, {
                                            className: "time",
                                            children: t.toTime,
                                          }),
                                          (0, l.tZ)(o.View, {
                                            className: "station",
                                            children: t.toStation,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  n &&
                                    (0, l.tZ)(o.View, {
                                      className: "bubble-tips color-primary",
                                      children: n,
                                    }),
                                  (0, l.tZ)(o.View, {
                                    className: "modify-bd",
                                    children: t.ticketInfoList.map(function (
                                      e
                                    ) {
                                      return (0, l.BX)(
                                        o.View,
                                        {
                                          className: "item",
                                          children: [
                                            (0, l.BX)(o.View, {
                                              className: "cont",
                                              children: [
                                                (0, l.tZ)(o.Text, {
                                                  className: "name",
                                                  children: e.passengerName,
                                                }),
                                                (0, l.tZ)(o.Text, {
                                                  className: "type",
                                                  children: e.passengerType,
                                                }),
                                              ],
                                            }),
                                            (0, l.BX)(o.View, {
                                              className: "rbox",
                                              children: [
                                                e.seatTag &&
                                                  (0, l.tZ)(o.Text, {
                                                    className: "tag",
                                                    children: e.seatTag,
                                                  }),
                                                e.seatType +
                                                  " ￥" +
                                                  e.ticketPrice +
                                                  " " +
                                                  e.seatNo,
                                              ],
                                            }),
                                          ],
                                        },
                                        "index"
                                      );
                                    }),
                                  }),
                                ],
                              },
                              "index"
                            );
                          }),
                      })
                    : (0, l.tZ)(o.View, {});
                },
              },
            ]),
            i
          );
        })(r.default.Component);
    },
    32e3: function (e, t, i) {
      "use strict";
      var n = i(52500),
        a = i(71515),
        c = i(48813);
      t.Z = n.default.memo(function (e) {
        var t = e.tag,
          i = e.trainDesc,
          n = e.statusDesc;
        return (0,
        c.BX)(a.View, { className: "tsmart-ticket-headinfo flex-align-items-center", children: [(0, c.tZ)(a.View, { className: "tag", children: t }), (0, c.tZ)(a.View, { className: "date", children: i }), (0, c.tZ)(a.Text, { className: "ifont-selected iconfont" }), (0, c.tZ)(a.View, { className: "status", children: n })] });
      });
    },
    61737: function (e, t, i) {
      "use strict";
      var n = i(52500),
        a = i(71515),
        c = i(48813);
      t.Z = n.default.memo(function (e) {
        var t = e.fromTime,
          i = e.toTime,
          n = e.fromStation,
          s = e.toStation,
          r = e.ticketTotalUseTime,
          o = e.durationDays,
          l = e.isShowTotalTimeDown,
          m = void 0 !== l && l,
          d = e.goTT;
        return (0,
        c.BX)(a.View, { className: "tsmart-train-info flex", children: [(0, c.BX)(a.View, { className: "l-box", children: [(0, c.tZ)(a.View, { className: "time", children: t }), (0, c.tZ)(a.View, { className: "station", children: n })] }), (0, c.BX)(a.View, { className: "m-box ".concat(r ? (m ? "time-down" : "time-up") : "v-mid"), children: [r && !m && (0, c.tZ)(a.View, { className: "duration", children: r }), (0, c.tZ)(a.View, { className: "schedule", id: "AFAJ", onClick: d, children: "时刻表" }), r && m && (0, c.tZ)(a.View, { className: "duration", children: r })] }), (0, c.BX)(a.View, { className: "r-box", children: [(0, c.BX)(a.View, { children: [o > 0 && (0, c.BX)(a.View, { className: "multi-day", children: ["+", o, "天"] }), (0, c.tZ)(a.View, { className: "time", children: i })] }), (0, c.tZ)(a.View, { className: "station", children: s })] })] });
      });
    },
  },
]);
