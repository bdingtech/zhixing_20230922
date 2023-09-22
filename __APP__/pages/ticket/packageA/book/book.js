!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    require("../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [2545],
      {
        83430: function (e, t, i) {
          var n,
            a = i(32180),
            o = i(79301),
            s = i(95308),
            c = i(57042),
            r = i(24460),
            l = i(81876),
            u = i(21867),
            d = i(86066),
            h = i(45023),
            m = i(52500),
            p = i(71515),
            f = i(92954),
            g = i.n(f),
            v = i(79792),
            _ = i(18783),
            y = i(77900),
            N = i(79910),
            w = i(27113),
            T = i(93761),
            x = i(838),
            Z = i(8271),
            k = i.n(Z),
            C = i(4102),
            I = i(58676),
            S = i(49120),
            L = i(48813),
            b = function (e) {
              var t = e.showCalendar;
              return (0, L.BX)(p.View, {
                className: "more-btn",
                onClick: t,
                children: [
                  (0, L.tZ)(p.Text, { children: "更多\n日期" }),
                  (0, L.tZ)(p.Text, { className: "iconfont2 ifont2-arr arr" }),
                ],
              });
            },
            V = m.default.memo(function (e) {
              var t = e.dateList,
                i = e.selectedDate,
                n = e.useDateClick,
                a = e.isShowMoreDateBtn,
                o = e.showCalendar;
              return null != t && t.length
                ? (0, L.BX)(p.View, {
                    className: "ticket-calendar",
                    children: [
                      (0, L.BX)(p.View, {
                        className: "flex-align-items-center",
                        children: [
                          (0, L.tZ)(p.View, {
                            className: "tit",
                            style: "margin-bottom:0",
                            children: "使用日期",
                          }),
                          !i &&
                            (0, L.tZ)(p.View, {
                              className: "use-date-tag shake",
                              children: "请先选择使用日期",
                            }),
                        ],
                      }),
                      (0, L.tZ)(p.ScrollView, {
                        scrollX: !0,
                        scrollWithAnimation: !0,
                        className: "ticket-calendar-list",
                        scrollIntoView: "id_".concat(i),
                        children: t.map(function (e, t) {
                          var a = i === e.dateStr;
                          return (0,
                          L.tZ)(p.View, { className: "item", id: "id_".concat(e.dateStr), children: (0, L.BX)(p.View, { className: "item-c ".concat(e.canBook ? "" : "disable", " ").concat(a ? "selected" : ""), onClick: n, "data-item": e, children: [(0, L.BX)(p.Text, { children: [e.desc, e.date] }), e.canBook ? (0, L.BX)(p.Text, { className: "price-desc ".concat(a ? "color-primary" : ""), children: ["¥", e.price] }) : (0, L.tZ)(p.Text, { children: "不可订" }), a && (0, L.tZ)(p.Text, { className: "iconfont2 ifont2-selected calendar-selected-icon" })] }) }, t);
                        }),
                      }),
                      a && (0, L.tZ)(b, { showCalendar: o }),
                    ],
                  })
                : (0, L.tZ)(p.View, {});
            }),
            D = function (e) {
              var t = e.productList,
                i = e.onSelectProduct;
              return (0, L.tZ)(L.HY, {
                children:
                  null == t
                    ? void 0
                    : t.map(function (e, t) {
                        var n;
                        return (0, L.BX)(
                          p.View,
                          {
                            className: " _tE _hd _i _k _p _yc",
                            children: [
                              (0, L.tZ)(p.Text, {
                                className: "book-title",
                                children: null == e ? void 0 : e.propertyName,
                              }),
                              (0, L.tZ)(p.ScrollView, {
                                scrollX: !0,
                                scrollWithAnimation: !0,
                                className: " _Pc _Ym",
                                children:
                                  null == e ||
                                  null === (n = e.propertyValueInfoList) ||
                                  void 0 === n
                                    ? void 0
                                    : n.map(function (t, n) {
                                        return (0, L.tZ)(
                                          p.View,
                                          {
                                            className: " _yE",
                                            onClick: function () {
                                              return (
                                                !(null != t && t.disabled) &&
                                                i(
                                                  null == e
                                                    ? void 0
                                                    : e.propertyId,
                                                  null == t
                                                    ? void 0
                                                    : t.propertyValueId
                                                )
                                              );
                                            },
                                            children: (0, L.BX)(p.View, {
                                              className:
                                                " _db _GI _o _jj _Mj _HI _Qf _E _Mb _i _n _l " +
                                                (null != t && t.disabled
                                                  ? " _Bd"
                                                  : null != t && t.selected
                                                  ? " _II _Fc _mt _p"
                                                  : " _oc"),
                                              children: [
                                                (0, L.tZ)(p.Text, {
                                                  children:
                                                    null == t
                                                      ? void 0
                                                      : t.propertyValueName,
                                                }),
                                                (null == t
                                                  ? void 0
                                                  : t.selected) &&
                                                  (0, L.tZ)(p.Text, {
                                                    className:
                                                      "iconfont2 ifont2-selected time-selected-icon",
                                                  }),
                                              ],
                                            }),
                                          },
                                          n
                                        );
                                      }),
                              }),
                              (0, L.tZ)(p.View, {
                                className: " _u _gg _Ce _r _JI _a",
                              }),
                            ],
                          },
                          t
                        );
                      }),
              });
            },
            P = i(94262),
            B = m.default.memo(function (e) {
              var t,
                i,
                n,
                a,
                o,
                s = e.name,
                c = e.price,
                r = e.ticketNum,
                l = e.mainResInfo,
                u = e.decreaseBtnClick,
                d = e.addBtnClick,
                h = e.showModal,
                m = e.limitSaleTag,
                f = e.showCommonDrawer,
                g =
                  1 == l.refundNewType
                    ? "随时退"
                    : 2 == l.refundNewType
                    ? "非随时退"
                    : "不可退",
                v =
                  null == l ||
                  null === (t = l.resourceAddCategoryList) ||
                  void 0 === t ||
                  null ===
                    (i = t.find(function (e) {
                      return "111" === (null == e ? void 0 : e.titleCode);
                    })) ||
                  void 0 === i ||
                  null === (n = i.resourceAddInfoList) ||
                  void 0 === n ||
                  null ===
                    (a = n.find(function (e) {
                      return "83" === (null == e ? void 0 : e.code);
                    })) ||
                  void 0 === a ||
                  null === (o = a.resourceAddInfoDetailList) ||
                  void 0 === o
                    ? void 0
                    : o.map(function (e) {
                        return null == e ? void 0 : e.descDetail;
                      });
              return (0, L.BX)(p.View, {
                className: " _mj",
                children: [
                  (0, L.BX)(p.View, {
                    className: " _mj _i _l",
                    children: [
                      (0, L.tZ)(p.Text, {
                        className: " _sb _tb _j",
                        children: s,
                      }),
                      (0, L.BX)(p.View, {
                        children: [
                          (0, L.tZ)(p.Text, {
                            className: " _Ze _Sv",
                            children: "¥",
                          }),
                          (0, L.tZ)(p.Text, {
                            className: " _Ze _kh _le",
                            children: c,
                          }),
                        ],
                      }),
                      (0, L.tZ)(p.Image, {
                        src:
                          r == l.minQuantity
                            ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddtx_icon_bkjs@3x.png"
                            : "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddtx_icon_kjs@3x.png",
                        className: " _rf _ug",
                        onClick: u,
                      }),
                      (0, L.tZ)(p.Text, {
                        className: " _pj _o _sb _I",
                        children: r,
                      }),
                      (0, L.tZ)(p.Image, {
                        src:
                          r == l.maxQuantity
                            ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddtx_icon_bkj@3x.png"
                            : "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddtx_icon_kj@3x.png",
                        className: " _rf _ug",
                        onClick: d,
                      }),
                    ],
                  }),
                  (null == v ? void 0 : v.length) > 0 &&
                    (0, L.BX)(p.View, {
                      className: " _qd _i _l",
                      onClick: function () {
                        f({
                          title: "适用人群",
                          className: "t-book-person-pop",
                          content: function (e) {
                            return (
                              (0, P.Z)(e),
                              (0, L.BX)(p.View, {
                                className: " _a _Fi _vu",
                                children: [
                                  (0, L.tZ)(p.View, {
                                    className: " _sb _tb",
                                    children: s,
                                  }),
                                  (0, L.BX)(p.View, {
                                    className: " _oc _F _Pc _T",
                                    children: ["适用条件：", v.join("；")],
                                  }),
                                ],
                              })
                            );
                          },
                        });
                      },
                      children: [
                        (0, L.tZ)(p.Text, {
                          className: " _oc _F _Pv _Ym _yc _Xm",
                          children: v.join(),
                        }),
                        (0, L.tZ)(p.Image, {
                          className: " _Ye _og _Ac",
                          src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                        }),
                      ],
                    }),
                  (0, L.BX)(p.View, {
                    className: " _qd _i _l",
                    children: [
                      (0, L.tZ)(p.View, {
                        className: " _bc _uC _pa _hk _Zn _i _l",
                        children: (0, L.tZ)(p.Text, {
                          className: 1 == l.refundNewType ? " _Jo" : " _Xh",
                          children: g,
                        }),
                      }),
                      (0, L.tZ)(p.View, { className: " _Yf _dg _wl _Dm" }),
                      (0, L.BX)(p.View, {
                        style: "display: flex;align-items: center;",
                        onClick: h,
                        children: [
                          (0, L.tZ)(p.Text, {
                            className: " _Nd _F",
                            children: "购票须知",
                          }),
                          (0, L.tZ)(p.Image, {
                            className: " _Ye _og _Ac",
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (null == m ? void 0 : m.length) > 0 &&
                    (0, L.tZ)(p.View, {
                      children: m.map(function (e, t) {
                        return (0,
                        L.tZ)(p.View, { className: " _Nd _F _ub", children: e }, t);
                      }),
                    }),
                ],
              });
            }),
            E = i(36039),
            X = function (e) {
              var t = e.fillInNumberLimit,
                i = e.ticketNum,
                n = e.unitQuantity,
                a = e.commonPassengers,
                o = "O" === t ? "取票人" : "游客信息",
                s = "O" === t ? "1" : i * n,
                c = "需填写".concat(s, "个").concat(o),
                r =
                  (
                    (null == a
                      ? void 0
                      : a.filter(function (e) {
                          return !0 === (null == e ? void 0 : e.isSelected);
                        })) || []
                  ).length === Number(s);
              return (0, L.BX)(p.View, {
                className: " _i _l",
                children: [
                  (0, L.tZ)(p.Text, { className: " _sb _tb", children: c }),
                  !r &&
                    (0, L.tZ)(p.View, {
                      className: " _gp _Kv _vd _pa _T _o _x _Cl _cf",
                      children: "请选择",
                    }),
                ],
              });
            },
            M = function (e) {
              var t,
                i = e.commonPassengers,
                n = e.chooseTourist,
                a = e.onMorePas;
              return (0, L.BX)(p.View, {
                className: " _Pc _i _l _tm",
                children: [
                  null == i || null === (t = i.slice(0, 3)) || void 0 === t
                    ? void 0
                    : t.map(function (e, t) {
                        return (0,
                        L.BX)(p.View, { className: e.isSelected ? " _VI _jC _hw _TI _db _Mb _Ym _yc _UI _Qf _x _Mj _p" : " _TI _db _HI _Mb _Ym _yc _UI _Qf _oc _G _Mj", onClick: n, "data-item": e, "data-index": t, children: [(0, L.tZ)(p.Text, { children: e.passengerName }), e.isSelected && (0, L.tZ)(p.Text, { className: "iconfont2 ifont2-selected pas-selected-icon" })] }, t);
                      }),
                  (0, L.tZ)(p.View, {
                    className: " _Fo _db _HI _o _Mj _oc _G",
                    onClick: a,
                    children: "选择/新增",
                  }),
                ],
              });
            },
            F = function (e) {
              var t,
                i = e.formList,
                n = e.onEdit,
                a =
                  null == i || null === (t = i.map) || void 0 === t
                    ? void 0
                    : t.call(i, function (e) {
                        var t = {};
                        return (
                          null == e ||
                            e.map(function (e) {
                              1 === e.iD
                                ? (Reflect.set(t, "passengerName", e.nameVal),
                                  Reflect.set(t, "isForeign", !1))
                                : 6 === e.iD
                                ? (Reflect.set(t, "passportType", e.name),
                                  Reflect.set(t, "passportCode", e.nameVal))
                                : 2 === e.iD && "英文姓" === e.name
                                ? Reflect.set(t, "passengerName", e.nameVal)
                                : 2 === e.iD &&
                                  (Reflect.set(t, "passportType", e.name),
                                  Reflect.set(t, "passportCode", e.nameVal),
                                  Reflect.set(t, "isForeign", !0)),
                                null != e &&
                                  e.passengerID &&
                                  Reflect.set(
                                    t,
                                    "passengerID",
                                    null == e ? void 0 : e.passengerID
                                  );
                            }),
                          t
                        );
                      });
              return (0, L.tZ)(L.HY, {
                children:
                  null == a
                    ? void 0
                    : a.map(function (e, t) {
                        return (0, L.BX)(
                          p.View,
                          {
                            className: "-qd",
                            children: [
                              (0, L.tZ)(p.Text, {
                                className: " _Vu _Ma _I",
                                children: "游客".concat(t + 1),
                              }),
                              !(null == e || !e.passengerName) &&
                                (0, L.BX)(p.View, {
                                  className: " _Db _i",
                                  children: [
                                    (0, L.tZ)(p.Text, {
                                      className: " _sb _tb",
                                      children:
                                        null == e ? void 0 : e.passengerName,
                                    }),
                                    !(null == e || !e.passportType) &&
                                      !(null == e || !e.passportCode) &&
                                      (0, L.tZ)(p.Text, {
                                        className: " _ub _Ma _E",
                                        children: ""
                                          .concat(
                                            null == e ? void 0 : e.passportType,
                                            "  "
                                          )
                                          .concat(
                                            null == e ? void 0 : e.passportCode
                                          ),
                                      }),
                                  ],
                                }),
                              !(null != e && e.passengerName) &&
                                (0, L.tZ)(p.View, {
                                  className: " _Db _i",
                                  children: (0, L.tZ)(p.Text, {
                                    className: " _sb _tb",
                                    style: "color:#ff5959",
                                    children: "请完善游客信息",
                                  }),
                                }),
                              (0, L.tZ)(p.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddtx_icon_hsbj@3x.png",
                                className: " _Ta _Ua",
                                onClick: function () {
                                  return n(e);
                                },
                              }),
                            ],
                          },
                          t
                        );
                      }),
              });
            },
            R = function (e) {
              var t = e.contactPhone,
                i = e.onPutPhone;
              return (0, L.BX)(p.View, {
                className: "-qd",
                children: [
                  (0, L.tZ)(p.Text, {
                    className: " _Vu _Ma _I",
                    children: "联系手机",
                  }),
                  (0, L.tZ)(p.View, {
                    className: " _Db _i",
                    children: (0, L.tZ)(p.Input, {
                      type: "text",
                      placeholder: "用于接收确认短信",
                      className: " _sb _I",
                      maxlength: 11,
                      placeholderClass: " _we _I",
                      value: t,
                      onInput: function (e) {
                        return i(e.detail.value);
                      },
                    }),
                  }),
                  (0, L.tZ)(p.Image, {
                    onClick: function () {
                      g().chooseContact({
                        success: function (e) {
                          i(e.phoneNumber);
                        },
                      });
                    },
                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddtx_icon_txl@3x.png",
                    className: " _Ij _nc _Iq",
                  }),
                ],
              });
            },
            A = function (e) {
              var t = e.email,
                i = e.onPutEmail;
              return (0, L.BX)(p.View, {
                className: "-qd",
                children: [
                  (0, L.tZ)(p.Text, {
                    className: " _Vu _Ma _I",
                    children: "邮箱号",
                  }),
                  (0, L.tZ)(p.View, {
                    className: " _Db _i",
                    children: (0, L.tZ)(p.Input, {
                      type: "text",
                      placeholder: "用于接收消息通知",
                      className: " _sb _I",
                      placeholderClass: " _we _I",
                      value: t,
                      onInput: function (e) {
                        return i(e.detail.value);
                      },
                    }),
                  }),
                ],
              });
            },
            j = function (e) {
              var t = e.commonPassengers,
                i = e.onTips,
                n = e.selectedTips;
              return t.find(function (e) {
                return (
                  e.isSelected &&
                  "1" === (null == e ? void 0 : e.cardType) &&
                  E.Z.getAge((null == e ? void 0 : e.passportCode) || "") < 18
                );
              })
                ? (0, L.BX)(p.View, {
                    className: " _i _WI _Rx _Fv",
                    onClick: function () {
                      return i(!n);
                    },
                    children: [
                      n
                        ? (0, L.tZ)(p.Text, {
                            className: "iconfont2 ifont2-checkboxed",
                            style: "color: #198cff; font-size: 18px",
                          })
                        : (0, L.tZ)(p.Text, {
                            className: "iconfont2 ifont2-checkbox",
                            style: "color: #ccc;font-size: 18px",
                          }),
                      (0, L.tZ)(p.Text, {
                        className: " _Ma _E _Q _xq",
                        children:
                          "本人是订单中未成年人的监护人或已征得其监控人同意，允许平台提供产品或服务为目的，处理未成年人信息",
                      }),
                    ],
                  })
                : (0, L.tZ)(p.View, {});
            },
            Q = function (e) {
              var t = e.fillInNumberLimit,
                i = e.ticketNum,
                n = e.unitQuantity,
                a = e.commonPassengers,
                o = e.chooseTourist,
                s = e.formList,
                c = e.contactPhone,
                r = e.onPutPhone,
                l = e.isNeedEmail,
                u = e.email,
                d = e.onPutEmail,
                h = e.onMorePas,
                m = e.onEdit,
                f = e.onTips,
                g = e.selectedTips,
                v =
                  null == a
                    ? void 0
                    : a.some(function (e) {
                        return !0 === e.isSelected;
                      });
              return (0, L.BX)(p.View, {
                className: " _a _Oa _er",
                children: [
                  (0, L.BX)(p.View, {
                    className: " _SI",
                    children: [
                      (0, L.tZ)(X, {
                        fillInNumberLimit: t,
                        ticketNum: i,
                        unitQuantity: n,
                        commonPassengers: a,
                      }),
                      (0, L.tZ)(M, {
                        commonPassengers: a,
                        chooseTourist: o,
                        onMorePas: h,
                      }),
                      (null == s ? void 0 : s.length) > 0 &&
                        v &&
                        (0, L.tZ)(F, { formList: s, onEdit: m }),
                      l && (0, L.tZ)(A, { email: u, onPutEmail: d }),
                      (0, L.tZ)(R, { contactPhone: c, onPutPhone: r }),
                    ],
                  }),
                  (0, L.tZ)(j, {
                    commonPassengers: a,
                    onTips: f,
                    selectedTips: g,
                  }),
                ],
              });
            },
            z = function (e) {
              var t = null;
              return (
                e &&
                  e.length > 0 &&
                  e.forEach(function (e) {
                    e.couponList &&
                      e.couponList.length &&
                      e.couponList.forEach(function (i) {
                        i.selectFlag && ((t = i).type = e.type);
                      });
                  }),
                t
              );
            },
            O = function (e) {
              var t = !1;
              return (
                e &&
                  e.length > 0 &&
                  e.forEach(function (e) {
                    (e.couponList || []).forEach(function (e) {
                      e.selectFlag && (t = !0);
                    });
                  }),
                t
              );
            },
            q = function (e) {
              var t = "",
                i = !1,
                n = 0;
              if (1 !== e.type && e.couponList && e.couponList.length)
                (t =
                  e.couponList[0].couponDisplayName +
                  e.couponList[0].couponPrice +
                  "元"),
                  (i = e.couponList[0].selectFlag),
                  (n = e.couponList[0].couponPrice);
              else if (e.couponList && e.couponList.length > 0) {
                e.couponList.some(function (e) {
                  return 0 == e.couponState;
                }) &&
                  (e.lastSelCoupon
                    ? ((i = e.lastSelCoupon.selectFlag),
                      (t = e.lastSelCoupon.couponDisplayName.replace(
                        "门票",
                        ""
                      )),
                      (n = e.lastSelCoupon.couponPrice))
                    : ((i = !1), (t = "未选择优惠券"), (n = 0)));
              }
              return { text: t, price: n, isSelected: i };
            },
            H = function (e, t, i, n) {
              var a = "",
                o = 0,
                s = z(e);
              return (
                s
                  ? (1 == s.type
                      ? (s.couponName = s.couponDisplayName.replace("门票", ""))
                      : (s.couponName =
                          s.couponDisplayName + s.couponPrice + "元"),
                    (a = s.couponName),
                    (o = 4 == s.type ? s.couponPrice * n : s.couponPrice))
                  : (a =
                      t && i
                        ? 0 == e.length
                          ? "暂无可用优惠"
                          : "暂未选择任何优惠方案"
                        : "选择日期后，查看可用优惠"),
                { message: a, price: o }
              );
            },
            W = function (e, t) {
              var i = !1,
                n = "",
                a = 0,
                o = z(e);
              return (
                o &&
                  ((i = !0),
                  (a = 4 == o.type ? o.couponPrice * t : o.couponPrice),
                  (n =
                    4 == o.type
                      ? "下单立减金"
                      : 1 == o.type
                      ? "优惠券折扣"
                      : "会员折扣")),
                { text: n, total: a, isShow: i }
              );
            },
            Y = i(45066),
            $ = i(81957),
            J = i(20689),
            U = i(55099),
            G = i(73851),
            K = i(19330),
            ee = i(22276),
            te = i(90129),
            ie = i(34229),
            ne = function (e) {
              var t = e.item,
                i = e.onItem,
                n = e.onEdit;
              return (0, L.BX)(p.View, {
                className: " _QI _DB _l _ag -md",
                onClick: i,
                children: [
                  (0, L.tZ)(p.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddtx_icon_hsbj@3x.png",
                    className: " _Ta _Ua _le",
                    onClick: function (e) {
                      e.stopPropagation(), n(!1, t);
                    },
                  }),
                  (0, L.BX)(p.View, {
                    className: " _i _nj",
                    children: [
                      (0, L.tZ)(p.Text, {
                        className: " _sb _Ec",
                        children: t.passengerName,
                      }),
                      !!t.passportCode &&
                        (0, L.BX)(p.Text, {
                          className: " _Ma _E _Ac",
                          children: [t.passportType, " ", t.passportCode],
                        }),
                    ],
                  }),
                  t.isSelected
                    ? (0, L.tZ)(p.Text, {
                        className: "iconfont2 ifont2-checkboxed",
                        style: "color: #198cff; font-size: 24px",
                      })
                    : (0, L.tZ)(p.Text, {
                        className: "iconfont2 ifont2-checkbox",
                        style: "color: #ccc;font-size: 24px",
                      }),
                ],
              });
            },
            ae = (0, m.forwardRef)(function (e, t) {
              var i,
                n = e.onConfirm,
                a = e.onEdit,
                o =
                  (e.showCommonDialog,
                  e.showMultiButtonDialog,
                  e.resourceId,
                  e.selectedDate,
                  e.eduCertificationInfo,
                  (0, m.useState)(!1)),
                s = (0, te.Z)(o, 2),
                c = s[0],
                r = s[1],
                l = (0, m.useState)([]),
                u = (0, te.Z)(l, 2),
                d = u[0],
                h = u[1],
                f = (0, m.useState)(1),
                g = (0, te.Z)(f, 2),
                v = g[0],
                _ = g[1],
                y = (0, m.useState)(!1),
                w = (0, te.Z)(y, 2),
                T = w[0],
                x = w[1];
              (0, m.useImperativeHandle)(t, function () {
                return {
                  setShow: function (e) {
                    r(!0),
                      h(N.Z.deepCopy(e.passengers)),
                      _(e.needMax),
                      x(e.showStillText);
                  },
                  setHide: function () {
                    r(!1);
                  },
                  selectPassenger: function (e, t) {
                    k(e, t);
                  },
                  getShowVal: function () {
                    return c;
                  },
                };
              });
              var Z =
                  (null ===
                    (i = d.filter(function (e) {
                      return e.isSelected;
                    })) || void 0 === i
                    ? void 0
                    : i.length) || 0,
                k = function (e, t) {
                  if (e.passportCode) {
                    var i = d.filter(function (e) {
                      return e.isSelected;
                    });
                    if (1 === v) {
                      var n = -1;
                      d.forEach(function (e, t) {
                        e.isSelected && (n = t), (e.isSelected = !1);
                      }),
                        n !== t && (d[t].isSelected = !d[t].isSelected),
                        h((0, ee.Z)(d));
                    } else {
                      if (
                        (console.log(i, v), i.length >= v && !d[t].isSelected)
                      )
                        return void (0, S.showToast)(
                          "只需要选择" + v + "位出行人"
                        );
                      (d[t].isSelected = !d[t].isSelected), h((0, ee.Z)(d));
                    }
                  } else (0, S.showToast)("信息不完善");
                };
              return (0, L.tZ)(ie.ZtDrawer, {
                show: c,
                isDefineHead: !0,
                onWrapClose: function () {
                  return r(!1);
                },
                className: "ticket-pas-list",
                children: (0, L.BX)(p.View, {
                  className: " _i _k _KG _PI _vA",
                  children: [
                    (0, L.BX)(p.View, {
                      className: " _kg _o _Xb _Jv _p",
                      children: [
                        v
                          ? (0, L.BX)(L.HY, {
                              children: [
                                (T ? "还需" : "需") + "选择",
                                (0, L.tZ)(p.Text, {
                                  className: "color-primary",
                                  children: v - Z,
                                }),
                                "个出行人",
                              ],
                            })
                          : "请选择出行人",
                        (0, L.tZ)(p.View, {
                          className: " _u _x _Jv _qk _q",
                          onClick: function () {
                            var e = (d || []).filter(function (e) {
                                return e.isSelected;
                              }),
                              t = (d || []).filter(function (e) {
                                return !e.isSelected;
                              }),
                              i = [].concat(e, t);
                            console.log("出行人选择结果", i), n(i), r(!1);
                          },
                          children: "确定",
                        }),
                      ],
                    }),
                    (0, L.tZ)(p.View, {
                      className: " _j _iF",
                      children:
                        null == d
                          ? void 0
                          : d.map(function (e, t) {
                              return (0, L.tZ)(
                                ne,
                                {
                                  item: e,
                                  onItem: function () {
                                    return (function (e, t) {
                                      k(e, t);
                                    })(e, t);
                                  },
                                  onEdit: a,
                                },
                                t
                              );
                            }),
                    }),
                    (0, L.tZ)(p.View, {
                      className: " _ld _a",
                      children: (0, L.BX)(p.View, {
                        className: " _Gc _w _dc _i _l _n _qb _Jv",
                        onClick: function () {
                          return a(!0, null);
                        },
                        children: [
                          (0, L.tZ)(p.Image, {
                            className: " _Ta _Ua _lj",
                            src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/icon_xzck@3x.png",
                          }),
                          (0, L.tZ)(p.Text, { children: "新增游客" }),
                        ],
                      }),
                    }),
                  ],
                }),
              });
            }),
            oe = i(298),
            se = i(3205),
            ce = (0, m.forwardRef)(function (e, t) {
              var i = e.onCardList,
                n = e.navigateTo,
                a = e.addPassenger,
                o = e.showMultiButtonDialog,
                s = (0, m.useState)("pasList"),
                c = (0, te.Z)(s, 2),
                r = c[0],
                l = c[1],
                u = (0, m.useState)(!1),
                d = (0, te.Z)(u, 2),
                h = d[0],
                f = d[1],
                g = (0, m.useState)(!0),
                v = (0, te.Z)(g, 2),
                _ = v[0],
                N = v[1],
                w = (0, m.useState)(!1),
                T = (0, te.Z)(w, 2),
                x = T[0],
                Z = T[1],
                k = (0, m.useState)({
                  passportType: "身份证",
                  cardType: "1",
                  countryCode: "86",
                  gender: "U",
                  issueAt: "CN",
                }),
                C = (0, te.Z)(k, 2),
                I = C[0],
                b = C[1];
              (0, m.useImperativeHandle)(t, function () {
                return {
                  setShow: function (e, t, i, n) {
                    (I.passengerName =
                      (null == t ? void 0 : t.passengerName) || ""),
                      (I.mobile = (null == t ? void 0 : t.mobile) || ""),
                      (I.passportType =
                        (null == t ? void 0 : t.passportType) || "身份证"),
                      (I.cardType = (null == t ? void 0 : t.cardType) || "1"),
                      (I.passportCode =
                        (null == t ? void 0 : t.passportCode) || ""),
                      (I.countryCode =
                        (null == t ? void 0 : t.countryCode) || "86"),
                      (I.gender = (null == t ? void 0 : t.gender) || "U"),
                      (I.issueAt = (null == t ? void 0 : t.issueAt) || "CN"),
                      (I.passengerBirth =
                        (null == t ? void 0 : t.passengerBirth) || ""),
                      (I.passengerENLastName =
                        (null == t ? void 0 : t.passengerENLastName) || ""),
                      (I.passengerENFirstName =
                        (null == t ? void 0 : t.passengerENFirstName) || ""),
                      b((0, oe.Z)((0, oe.Z)({}, t), I)),
                      N(e),
                      f(!0),
                      l(i),
                      Z(n);
                  },
                  setHide: function () {
                    f(!1);
                  },
                  setCard: function (e) {
                    (I.passportType = null == e ? void 0 : e.passportType),
                      (I.cardType = null == e ? void 0 : e.cardType),
                      f(!0);
                  },
                };
              }),
                console.log("编辑乘客", I);
              var V = function (e, t) {
                (I[e] = t), b((0, oe.Z)({}, I));
              };
              return (0, L.tZ)(ie.ZtDrawer, {
                show: h,
                isDefineHead: !0,
                onWrapClose: function () {
                  return f(!1);
                },
                className: "ticket-pas-edit",
                children: (0, L.BX)(p.View, {
                  className: " _kd _i _k _KG _vA",
                  children: [
                    (0, L.BX)(p.View, {
                      className: " _kg _o _Xb _Jv _p",
                      children: [
                        (0, L.tZ)(p.Text, {
                          children: _ ? "新增游客" : "编辑游客",
                        }),
                        (0, L.tZ)(p.View, {
                          className: " _u _x _Jv _qk _q",
                          onClick: function () {
                            return f(!1);
                          },
                          children: "取消",
                        }),
                      ],
                    }),
                    (0, L.BX)(p.View, {
                      className: " _j _iF",
                      children: [
                        _ &&
                          (0, L.BX)(p.View, {
                            className: " _Gy _yd _Oa _RI _i _k _l _n",
                            onClick: function () {
                              se.Z.ocr(
                                { bizType: "TRA", title: "证件识别" },
                                function (e) {
                                  console.log("证件识别结果", e),
                                    V(
                                      "passengerName",
                                      null == e ? void 0 : e.name
                                    ),
                                    V("passportCode", e.idCardNo);
                                }
                              );
                            },
                            children: [
                              (0, L.BX)(p.View, {
                                className: " _i _l",
                                children: [
                                  (0, L.tZ)(p.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddtx_icon_sm@3x.png",
                                    className: " _Ta _Ua _lj",
                                  }),
                                  (0, L.tZ)(p.Text, {
                                    className: " _x _Jv",
                                    children: "扫描证件添加",
                                  }),
                                ],
                              }),
                              (0, L.tZ)(p.Text, {
                                className: " _Ma _D",
                                children: "仅支持身份证",
                              }),
                            ],
                          }),
                        (0, L.BX)(p.View, {
                          className: " _yb _i _l _ag _hd -nd",
                          children: [
                            (0, L.tZ)(p.View, {
                              className: " _Vu _Ma _I",
                              children: "姓名",
                            }),
                            (0, L.tZ)(p.Input, {
                              type: "text",
                              placeholder: "请输入游客姓名",
                              className: " _sb _I _j",
                              placeholderClass: " _Bd _I",
                              value: null == I ? void 0 : I.passengerName,
                              onInput: function (e) {
                                return V("passengerName", e.detail.value);
                              },
                            }),
                          ],
                        }),
                        x &&
                          (0, L.BX)(p.View, {
                            className: " _yb _i _l _ag _hd -nd",
                            children: [
                              (0, L.tZ)(p.View, {
                                className: " _Vu _Ma _I",
                                children: "英文名",
                              }),
                              (0, L.tZ)(p.Input, {
                                type: "text",
                                placeholder: "请输入游客英文名",
                                className: " _sb _I _j",
                                placeholderClass: " _Bd _I",
                                value:
                                  null == I ? void 0 : I.passengerENFirstName,
                                onInput: function (e) {
                                  return V(
                                    "passengerENFirstName",
                                    e.detail.value
                                  );
                                },
                              }),
                            ],
                          }),
                        x &&
                          (0, L.BX)(p.View, {
                            className: " _yb _i _l _ag _hd -nd",
                            children: [
                              (0, L.tZ)(p.View, {
                                className: " _Vu _Ma _I",
                                children: "英文姓",
                              }),
                              (0, L.tZ)(p.Input, {
                                type: "text",
                                placeholder: "请输入英文姓",
                                className: " _sb _I _j",
                                placeholderClass: " _Bd _I",
                                value:
                                  null == I ? void 0 : I.passengerENLastName,
                                onInput: function (e) {
                                  return V(
                                    "passengerENLastName",
                                    e.detail.value
                                  );
                                },
                              }),
                            ],
                          }),
                        (0, L.BX)(p.View, {
                          className: " _yb _i _l _ag _hd -nd",
                          onClick: function () {
                            return i(null == I ? void 0 : I.passportType);
                          },
                          children: [
                            (0, L.tZ)(p.View, {
                              className: " _Vu _Ma _I",
                              children: "证件类型",
                            }),
                            (0, L.tZ)(p.Text, {
                              className: " _sb _I _j",
                              children: null == I ? void 0 : I.passportType,
                            }),
                            (0, L.tZ)(p.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                              className: " _Ye _og",
                            }),
                          ],
                        }),
                        "护照" === (null == I ? void 0 : I.passportType) &&
                          (0, L.BX)(p.View, {
                            className: " _yb _i _l _ag _hd -nd",
                            onClick: function () {
                              n({
                                url: "/functionalPages/country/country",
                                callback: function (e) {
                                  console.log("选择国家", e),
                                    V("issueAt", null == e ? void 0 : e.code);
                                },
                              });
                            },
                            children: [
                              (0, L.tZ)(p.View, {
                                className: " _Vu _Ma _I",
                                children: "国家地区",
                              }),
                              (0, L.tZ)(p.Text, {
                                className: " _sb _I _j",
                                children: null == I ? void 0 : I.issueAt,
                              }),
                              (0, L.tZ)(p.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/ddxq_icon_ckgd@3x.png",
                                className: " _Ye _og",
                              }),
                            ],
                          }),
                        (0, L.BX)(p.View, {
                          className: " _yb _i _l _ag _hd -nd",
                          children: [
                            (0, L.tZ)(p.View, {
                              className: " _Vu _Ma _I",
                              children: "证件号码",
                            }),
                            (0, L.tZ)(p.Input, {
                              type: "text",
                              placeholder: "请输入游客证件号码",
                              className: " _sb _I _j",
                              placeholderClass: " _Bd _I",
                              value: null == I ? void 0 : I.passportCode,
                              onInput: function (e) {
                                return V("passportCode", e.detail.value);
                              },
                            }),
                          ],
                        }),
                        (0, L.BX)(p.View, {
                          className: " _yb _i _l _ag _hd -nd",
                          children: [
                            (0, L.tZ)(p.View, {
                              className: " _Vu _Ma _I",
                              children: "联系手机",
                            }),
                            (0, L.BX)(p.Text, {
                              className: " _sb _I _bn",
                              children: [
                                "+",
                                null == I ? void 0 : I.countryCode,
                              ],
                            }),
                            (0, L.tZ)(p.Input, {
                              type: "number",
                              placeholder: "用于接收确认短信",
                              className: " _sb _I _j",
                              maxlength: 11,
                              placeholderClass: " _Bd _I",
                              value: null == I ? void 0 : I.mobile,
                              onInput: function (e) {
                                return V("mobile", e.detail.value);
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, L.tZ)(p.View, {
                      className: " _ld _a",
                      children: (0, L.tZ)(p.View, {
                        className: " _Gc _w _dc _i _l _n _qb _Jv",
                        onClick: function () {
                          var e = I.passengerName,
                            t = void 0 === e ? "" : e,
                            i = (I.passportType, I.countryCode, I.mobile),
                            n = I.cardType,
                            s = void 0 === n ? "1" : n,
                            c = I.passportCode,
                            l = void 0 === c ? "" : c,
                            u =
                              (I.gender,
                              I.passengerBirth,
                              I.issueAt,
                              I.passengerENLastName),
                            d = I.passengerENFirstName;
                          y.Z.isValidCNName(t)
                            ? !x || y.Z.isValidEnName(u)
                              ? !x || y.Z.isValidEnName(d)
                                ? E.Z.cardNumberReg(l, Number(s))
                                  ? y.Z.isMobile(i)
                                    ? 1 == s && E.Z.getAge(l) < 18
                                      ? o({
                                          title: "未成年人信息授权确认",
                                          content:
                                            "您正在录入未成年人信息，请确定您是该未成年人的监护人或已征得其监护人同意",
                                          leftButtonName: "暂缓",
                                          rightButtonName: "已授权",
                                          maskClose: !1,
                                          onLeftButtonClick: function () {},
                                          onRightButtonClick: function () {
                                            return a(I, r);
                                          },
                                        })
                                      : a(I, r)
                                    : (0, S.showToast)("请输入正确的手机号")
                                  : (0, S.showToast)("请输入正确的证件号码")
                                : (0, S.showToast)("请填写正确的英文名")
                              : (0, S.showToast)("请填写正确的英文姓")
                            : (0, S.showToast)("请输入合法的姓名");
                        },
                        children: (0, L.tZ)(p.Text, { children: "确认添加" }),
                      }),
                    }),
                  ],
                }),
              });
            }),
            re = [
              { passportType: "身份证", cardType: 1 },
              { passportType: "护照", cardType: 2 },
              { passportType: "台胞证", cardType: 8 },
              { passportType: "回乡证", cardType: 7 },
              { passportType: "港澳通行证", cardType: 10 },
              { passportType: "台湾通行证", cardType: 22 },
            ],
            le = (0, m.forwardRef)(function (e, t) {
              var i = e.cardTypeList,
                n = e.onConfirm,
                a = (0, m.useState)(!1),
                o = (0, te.Z)(a, 2),
                s = o[0],
                c = o[1],
                r = (0, m.useState)(""),
                l = (0, te.Z)(r, 2),
                u = l[0],
                d = l[1];
              (0, m.useImperativeHandle)(t, function () {
                return {
                  setShow: function (e) {
                    c(!0), d(e);
                  },
                  setHide: function () {
                    c(!1);
                  },
                };
              });
              var h = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                1 === i.length &&
                "身份证" !== e.passportType &&
                Reflect.ownKeys(e).length > 0
                  ? (0, S.showToast)("该景点只支持使用身份证")
                  : (c(!1), n(e));
              };
              return (0, L.tZ)(ie.ZtDrawer, {
                className: "ticket-card-list",
                show: s,
                isDefineHead: !0,
                onWrapClose: function () {
                  return h(
                    re.find(function (e) {
                      return e.passportType === u;
                    })
                  );
                },
                children: (0, L.BX)(p.View, {
                  className: " _kd _i _k _qH _vA",
                  children: [
                    (0, L.BX)(p.View, {
                      className: " _kg _o _Xb _Jv _p",
                      children: [
                        (0, L.tZ)(p.Text, { children: "证件类型" }),
                        (0, L.tZ)(p.View, {
                          className: " _u _x _Jv _qk _q",
                          onClick: function () {
                            return h(
                              re.find(function (e) {
                                return e.passportType === u;
                              })
                            );
                          },
                          children: "取消",
                        }),
                      ],
                    }),
                    (0, L.tZ)(p.View, {
                      className: " _j _iF",
                      children: re.map(function (e, t) {
                        return (0, L.BX)(
                          p.View,
                          {
                            className: " _yb _i _l _ag -xc",
                            onClick: function () {
                              return h(e);
                            },
                            children: [
                              (0, L.tZ)(p.Text, {
                                className: " _j _Ma _I",
                                style:
                                  e.passportType === u ? "color: #198cff;" : "",
                                children: e.passportType,
                              }),
                              (null == e ? void 0 : e.passportType) === u &&
                                (0, L.tZ)(p.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/icon_lsdg@3x.png",
                                  className: " _Ye _og",
                                }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              });
            }),
            ue = i(90481),
            de = (i(20592), null),
            he = null,
            me = function (e) {
              var t = (0, m.useState)(!1),
                i = (0, te.Z)(t, 2),
                n = i[0],
                a = i[1],
                o = (0, m.useState)({}),
                s = (0, te.Z)(o, 2),
                c = s[0],
                r = s[1],
                l = e.onRef;
              (0, m.useImperativeHandle)(l, function () {
                return {
                  trigger: function (e) {
                    var t = e.calenderOpts,
                      i = void 0 === t ? {} : t;
                    return new Promise(function (e, t) {
                      r(i), (de = e), (he = t), a(!0);
                    });
                  },
                };
              });
              return (
                console.log("calenderSetter", c),
                (0, L.tZ)(
                  ue.Z,
                  (0, oe.Z)(
                    (0, oe.Z)({ visible: n, maxHeight: "80vh" }, c),
                    {},
                    {
                      onConfirm: function (e) {
                        var t;
                        a(!1),
                          null === (t = de) || void 0 === t || t(e),
                          (de = null);
                      },
                      notShowLunar: !0,
                      customInitDateHandler: function (e) {
                        var t = null == c ? void 0 : c.selectedDate,
                          i = null == c ? void 0 : c.priceList,
                          n = {};
                        t === e && (n.selected = !0);
                        var a =
                          null == i
                            ? void 0
                            : i.find(function (t) {
                                return t.date === e;
                              });
                        a && (n.info = "¥".concat(a.salePrice));
                        var o =
                          (null == a ? void 0 : a.inventoryNum) > 0 &&
                          (null == a ? void 0 : a.salePrice) > 0;
                        return (a && o) || (n.selectType = 3), n;
                      },
                      onClose: function () {
                        var e;
                        a(!1),
                          null === (e = he) || void 0 === e || e(),
                          (he = null);
                      },
                    }
                  )
                )
              );
            },
            pe = m.default.memo(function (e) {
              var t = e.onZengXin,
                i = e.data;
              return i
                ? (0, L.tZ)(p.View, {
                    className: " _KI _Tr _LI _yc",
                    onClick: t,
                    children: (0, L.tZ)(p.View, {
                      className: " _i _l _MI",
                      children: i.headTopText.map(function (e, t) {
                        return (0,
                        L.BX)(p.View, { className: " _i _l _bn", children: [(0, L.tZ)(p.Image, { src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/mp_icon_dg@3x.png", className: " _NI _Ye" }), (0, L.tZ)(p.Text, { className: " _xh _E", children: e })] }, t);
                      }),
                    }),
                  })
                : (0, L.tZ)(p.View, {});
            }),
            fe = m.default.memo(function (e) {
              var t,
                i,
                n = e.data;
              return (0, L.BX)(p.View, {
                className: " _yd _Zr _i _k -fd",
                children: [
                  (0, L.tZ)(p.Image, {
                    src: null == n ? void 0 : n.modalHeaderImg,
                    className: "-gd",
                  }),
                  (0, L.BX)(p.View, {
                    style: "z-index:2",
                    children: [
                      (0, L.tZ)(p.View, {
                        className: " _i _l _MI _OI",
                        children:
                          null == n ||
                          null === (t = n.headTopText) ||
                          void 0 === t
                            ? void 0
                            : t.map(function (e, t) {
                                return (0,
                                L.BX)(p.View, { className: " _i _l _bn", children: [(0, L.tZ)(p.Image, { src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/new/mp_icon_dg@3x.png", className: " _NI _Ye" }), (0, L.tZ)(p.Text, { className: " _xh _E", children: e })] }, t);
                              }),
                      }),
                      null == n || null === (i = n.contentInfo) || void 0 === i
                        ? void 0
                        : i.map(function (e, t) {
                            return (0,
                            L.BX)(p.View, { className: "-hd", children: [(0, L.BX)(p.View, { className: "-id", children: [(0, L.tZ)(p.View, { className: "-jd", children: t + 1 }), (0, L.tZ)(p.View, { className: "-kd", children: e.title })] }), (0, L.tZ)(p.View, { className: "-ld", children: (0, L.tZ)(p.Text, { children: e.content.replace(/br/g, "\n") }) })] }, t);
                          }),
                    ],
                  }),
                ],
              });
            }),
            ge = "YYYY-MM-DD",
            ve = E.Z.deepClone,
            _e = E.Z.mobileFormater,
            ye = E.Z.isValidEnFirstName,
            Ne = E.Z.cardNumberReg,
            we = E.Z.deduplication,
            Te = E.Z.switchTypeToTicketName,
            xe = E.Z.emptyOrUndefined,
            Ze = E.Z.initFormItem,
            ke = E.Z.getPlaceText,
            Ce = E.Z.clearForm,
            Ie = E.Z.debounce,
            Se = E.Z.formReg,
            Le = E.Z.switchTypeToAgeType,
            be = E.Z.findSelectedPromoitonItem,
            Ve = [
              { inputType: 0, name: "中文姓名", iD: 1, type: "ChineseName" },
              { inputType: 0, name: "手机号码", iD: 13, type: "ContactPhone" },
            ],
            De = [
              {
                desc: "今天",
                date: k()().format("MM-DD"),
                dateStr: k()().format(ge),
                price: "--",
                canBook: !1,
              },
              {
                desc: "明天",
                date: k()().add(1, "day").format("MM-DD"),
                dateStr: k()().add(1, "day").format(ge),
                price: "--",
                canBook: !1,
              },
              {
                desc: "后天",
                date: k()().add(2, "day").format("MM-DD"),
                dateStr: k()().add(2, "day").format(ge),
                price: "--",
                canBook: !1,
              },
            ],
            Pe =
              (0, $.h)(!1, { usePageWrapper: !0 })(
                (n = (function (e) {
                  (0, u.Z)(i, e);
                  var t = (0, d.Z)(i);
                  function i(e) {
                    var n, a;
                    return (
                      (0, c.Z)(this, i),
                      (a = t.call(this, e)),
                      (0, h.Z)((0, l.Z)(a), "pageTitle", "订单填写"),
                      (0, h.Z)(
                        (0, l.Z)(a),
                        "pageId",
                        v.default.isTieyou ? "10650059442" : "10650059424"
                      ),
                      (0, h.Z)((0, l.Z)(a), "pageContentIsFullScreen", !0),
                      (a.state =
                        ((n = {
                          partner: v.default.isTieyou ? "tieyou" : "zhixing",
                          isTieyou: v.default.isTieyou,
                          isLoading: !0,
                          loadError: !1,
                          isDynamicFormEmpty: !1,
                          isShowHandAddInfoTip: !1,
                          mainResPriceList: [],
                          isShowPasListModal: !1,
                          openBuyReading: !1,
                          cardPickWithFormIndex: 0,
                          unitQuantity: 1,
                          mainResInfo: {
                            ctripPrice: "--",
                            isBookingLimit: !1,
                            refundNewType: 2,
                            minQuantity: 1,
                            maxQuantity: 99,
                            name: "",
                            advanceBookingRemainTime: "",
                          },
                          fillInNumberLimit: "O",
                          cardTypeList: [],
                          ticketName: "",
                          ticketNum: 1,
                          price: "--",
                          formList: [],
                          selectedDate: "",
                          useDateTagList: ve(De),
                          commonPassengers: [],
                          limitSaleTag: [],
                          isQueryCoupon: !1,
                          lastThreeDay: [
                            k()().format(ge),
                            k()().add(1, "day").format(ge),
                            k()().add(2, "day").format(ge),
                          ],
                          isShowMoreDateBtn: !1,
                          needMax: 0,
                          showStillText: !1,
                          isShowExtraView: !1,
                          locationInfo: {
                            countryId: 1,
                            countryName: "",
                            provinceId: 0,
                            provinceName: "",
                            cityID: 0,
                            cityName: "",
                            cityCode: "",
                          },
                          ruleTextArray: [
                            "1.积分兑换比例为500积分=5元优惠券，1000积分=10元优惠券；",
                            "2.积分兑换所得的优惠券有效期为90天，仅可抵扣门票订单，需票面价大于优惠券抵扣金额时方可使用；",
                            "3.同一用户每天最多可使用积分兑换10次优惠券；",
                            "4.使用积分兑换优惠券后，已消耗的积分概不退还。",
                          ],
                        }),
                        (0, h.Z)(n, "openBuyReading", !1),
                        (0, h.Z)(n, "hasInit", !1),
                        (0, h.Z)(n, "isAllowExchange", !1),
                        (0, h.Z)(n, "discountList", []),
                        (0, h.Z)(n, "exchanageCouponInfo", []),
                        (0, h.Z)(n, "isShowMoreDiscount", !1),
                        (0, h.Z)(n, "isShowPromotionRule", !1),
                        (0, h.Z)(n, "isShowExchangeRule", !1),
                        (0, h.Z)(n, "isShowTipModal", !1),
                        (0, h.Z)(n, "tipType", ""),
                        (0, h.Z)(n, "hadShowTip", !1),
                        (0, h.Z)(n, "contactPhone", ""),
                        (0, h.Z)(n, "email", ""),
                        (0, h.Z)(n, "selectedTips", !1),
                        n)),
                      a
                    );
                  }
                  return (
                    (0, r.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e, t, i, n, a;
                          (this.oldTotalPrice = 0),
                            (this.oldDecreaseTotal = 0),
                            (this.hasTipRepeatOrder = !1),
                            this.silentLocation(),
                            (this.debounceQueryCouponList = Ie(
                              this.getNewCouponList,
                              200
                            ));
                          var o =
                              (null === (e = this.$instance) ||
                              void 0 === e ||
                              null === (t = e.router) ||
                              void 0 === t
                                ? void 0
                                : t.params) || {},
                            s = o.resourceId,
                            c = o.spotId,
                            r = o.source,
                            l = void 0 === r ? "wechat" : r,
                            u = o.productId,
                            d =
                              (o.productName,
                              JSON.parse(
                                (null === (i = this.$instance) ||
                                void 0 === i ||
                                null === (n = i.router) ||
                                void 0 === n ||
                                null === (a = n.params) ||
                                void 0 === a
                                  ? void 0
                                  : a.resourceIdList) || "[]"
                              ));
                          this.setState({
                            resourceId: s,
                            spotId: c,
                            source: l,
                            contactPhone: _.ZP.userName,
                            productId: u,
                            resourceIdList: d,
                          }),
                            this.ubtTrace("SZWBooking_exposure", {
                              PageId: this.pageId,
                              Source: l,
                            });
                          var h = {
                            resourceIDList: null == d ? void 0 : d.slice(0, 20),
                          };
                          (null == d ? void 0 : d.length) > 1
                            ? this.initMultiIdPage(u, h)
                            : ((null != d && d.length) ||
                                (h = { resourceIDList: [s] }),
                              this.initPage(h));
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e = this.state,
                            t = e.resourceIdList,
                            i = e.productId;
                          (null == t ? void 0 : t.length) > 1 &&
                            this.getProductSale(i);
                        },
                      },
                      {
                        key: "initMultiIdPage",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e(t, i) {
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), this.getProductSale(t)
                                        );
                                      case 2:
                                        this.initOtherQuest(i);
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t, i) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "initPage",
                        value: function (e) {
                          this.queryResourceDetail(e), this.initOtherQuest(e);
                        },
                      },
                      {
                        key: "initOtherQuest",
                        value: function (e) {
                          this.queryPriceCalendar(e),
                            this.getPassengerList(),
                            this.requestTicketIndexBannerInfo();
                        },
                      },
                      {
                        key: "showBuyReadingModal",
                        value: function () {
                          this.setState({ openBuyReading: !0 });
                        },
                      },
                      {
                        key: "closeBuyReading",
                        value: function () {
                          this.setState({ openBuyReading: !1 });
                        },
                      },
                      {
                        key: "getNeedMax",
                        value: function () {
                          var e = this.state,
                            t = e.formList,
                            i = e.ticketNum,
                            n = e.fillInNumberLimit,
                            a = e.unitQuantity,
                            o = e.commonPassengers.filter(function (e) {
                              return e.isSelected;
                            });
                          if ("O" === n)
                            return (
                              o &&
                                o.length &&
                                this.setState({ showStillText: !0 }),
                              1
                            );
                          var s = 0;
                          return (
                            t &&
                              t.length > 0 &&
                              t.forEach(function (e) {
                                e[0] &&
                                  0 == e[0].passengerID.length &&
                                  e[0].nameVal.length > 0 &&
                                  s++;
                              }),
                            o &&
                              o.length &&
                              this.setState({ showStillText: !0 }),
                            i * a - s
                          );
                        },
                      },
                      {
                        key: "togglePasModal",
                        value: function () {
                          var e = this.state,
                            t = e.isShowPasListModal,
                            i = e.commonPassengers,
                            n = this.getNeedMax();
                          if (t) {
                            var a = (i || []).filter(function (e) {
                                return e.isSelected;
                              }),
                              o = (i || []).filter(function (e) {
                                return !e.isSelected;
                              });
                            i = [].concat(a, o);
                          }
                          this.setState({
                            needMax: n,
                            commonPassengers: i,
                            isShowPasListModal: !t,
                          });
                        },
                      },
                      {
                        key: "selectPas",
                        value: function (e) {
                          var t = e.currentTarget.dataset.index,
                            i = this.state,
                            n = i.commonPassengers,
                            a = i.needMax,
                            o = n.filter(function (e) {
                              return e.isSelected;
                            });
                          if (1 === a) {
                            var s = -1;
                            n.forEach(function (e, t) {
                              e.isSelected && (s = t), (e.isSelected = !1);
                            }),
                              s !== t && (n[t].isSelected = !n[t].isSelected),
                              n.forEach(function (e) {
                                e.isSelected;
                              }),
                              this.dealPasListSel(n);
                          } else {
                            if (o.length >= a && !n[t].isSelected)
                              return void G.Z.showToast(
                                "只需要选择" + a + "个出行人"
                              );
                            (n[t].isSelected = !n[t].isSelected),
                              n.forEach(function (e) {
                                e.isSelected;
                              }),
                              this.dealPasListSel(n);
                          }
                        },
                      },
                      {
                        key: "calTotalPrice",
                        value: function () {
                          var e = this.state,
                            t = e.price,
                            i = e.ticketNum,
                            n = e.isQueryCoupon;
                          if (!e.selectedDate) return 0;
                          if (n) return this.oldTotalPrice;
                          var a = i * t - this.getDiscountTotal(),
                            o = parseInt(a) === a ? 0 : 2;
                          return (
                            (a = a.toFixed(o)), (this.oldTotalPrice = a), a
                          );
                        },
                      },
                      {
                        key: "calDecreaseTotal",
                        value: function () {
                          var e = this.state,
                            t = e.isQueryCoupon;
                          if (!e.selectedDate) return 0;
                          if (t) return this.oldDecreaseTotal;
                          var i = this.getDiscountTotal();
                          return (this.oldDecreaseTotal = i), i;
                        },
                      },
                      {
                        key: "onTicketNumChange",
                        value: function () {
                          var e = this,
                            t = this;
                          this.setState({ isQueryCoupon: !0 }, function () {
                            t.state.selectedDate
                              ? t.debounceQueryCouponList()
                              : e.setState({ isQueryCoupon: !1 });
                          }),
                            this.calDecreaseTotal();
                        },
                      },
                      {
                        key: "onSelectedChange",
                        value: function () {
                          var e = this;
                          this.setState({ isQueryCoupon: !0 }, function () {
                            e.getNewCouponList();
                          }),
                            this.calDecreaseTotal();
                        },
                      },
                      {
                        key: "onSelectedDateChange",
                        value: function () {
                          var e = this;
                          this.setState({ isQueryCoupon: !0 }, function () {
                            e.getNewCouponList();
                          });
                        },
                      },
                      {
                        key: "getDiscountTotal",
                        value: function () {
                          var e = this.state,
                            t = e.discountList,
                            i = e.ticketNum,
                            n = e.exchanageCouponInfo,
                            a = e.isAllowExchange,
                            o = 0,
                            s = be(t);
                          if (
                            (s &&
                              (4 == s.type
                                ? (o += Number(s.couponPrice) * i)
                                : (o += Number(s.couponPrice))),
                            n &&
                              n.length > 0 &&
                              a &&
                              (o += Number(n[0].couponPrice)),
                            o > 0)
                          ) {
                            var c = parseInt(o) === o ? 0 : 2;
                            o = o.toFixed(c);
                          }
                          return o;
                        },
                      },
                      {
                        key: "silentLocation",
                        value: function () {
                          var e = this,
                            t = this.state.locationInfo;
                          (0, w.CC)()
                            .then(
                              function (i) {
                                i &&
                                  ((t.countryName = ""),
                                  (t.provinceName = ""),
                                  (t.cityID = i.cityId),
                                  (t.cityName = i.cityName),
                                  e.setState({ locationInfo: t }));
                              },
                              function (e) {
                                console.log(e);
                              }
                            )
                            .catch(function () {});
                        },
                      },
                      {
                        key: "requestTicketIndexBannerInfo",
                        value: function () {
                          var e = this;
                          (0, x.kR)({ bannerType: 2 })
                            .then(function (t) {
                              e.setState({
                                zengxinConfigs:
                                  null == t ? void 0 : t.zengxinConfigs,
                              });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        },
                      },
                      {
                        key: "getProductSale",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (i) {
                            (0, x.U7)(
                              { productId: e },
                              { checkFrameworkLogin: !1 }
                            )
                              .then(function (e) {
                                var n, a;
                                null != e &&
                                null !== (n = e.productSaleProperty) &&
                                void 0 !== n &&
                                null !== (a = n.propertyList) &&
                                void 0 !== a &&
                                a.length
                                  ? t.setState({
                                      productSale:
                                        null == e
                                          ? void 0
                                          : e.productSaleProperty,
                                    })
                                  : t.setState(
                                      { productSale: null },
                                      function () {
                                        t.initPage({
                                          resourceIDList:
                                            t.state.resourceIdList,
                                        });
                                      }
                                    ),
                                  i();
                              })
                              .catch(function () {
                                return i();
                              });
                          });
                        },
                      },
                      {
                        key: "isShowHandTip",
                        value: function () {
                          var e = this,
                            t = !1,
                            i = J.kB.get(),
                            n = Date.now();
                          i
                            ? n - i > 864e5 && ((t = !0), J.kB.set(n))
                            : (J.kB.set(n), (t = !0)),
                            this.setState(
                              { isShowHandAddInfoTip: t },
                              function () {
                                e.state.isShowHandAddInfoTip &&
                                  setTimeout(function () {
                                    e.setState({ isShowHandAddInfoTip: !1 });
                                  }, 3e3);
                              }
                            );
                        },
                      },
                      {
                        key: "doLogin",
                        value: function (e) {
                          var t = this;
                          _.ZP.doLogin().then(
                            function () {
                              t.setState({ isLogin: !0 }), e && e();
                            },
                            function () {
                              t.navigateBack(),
                                g().showToast({
                                  title: "取消登录",
                                  icon: "none",
                                  duration: 1500,
                                });
                            }
                          );
                        },
                      },
                      {
                        key: "getPassengerList",
                        value: function () {
                          var e = this;
                          (0, U.Z)()
                            .then(function (t) {
                              if (
                                (console.log("GetPassengerList", t),
                                1 === t.resultCode)
                              ) {
                                var i = we(t.commonPassengers || []);
                                i.forEach(function (e) {
                                  return (e.isSelected = !1);
                                }),
                                  e.setState(
                                    { commonPassengers: i },
                                    function () {
                                      (null == i ? void 0 : i.length) > 0 &&
                                        setTimeout(function () {
                                          e.chooseTourist({
                                            currentTarget: {
                                              dataset: { item: i[0], index: 0 },
                                            },
                                          });
                                        }, 500);
                                    }
                                  );
                              } else {
                                var n = t.resultMessage;
                                G.Z.isLogin(!0)
                                  .then(function (t) {
                                    t
                                      ? G.Z.showToast(n || "获取常旅失败")
                                      : e.doLogin(function () {
                                          e.getPassengerList();
                                        });
                                  })
                                  .catch(function () {
                                    G.Z.showToast(n || "获取常旅失败");
                                  });
                              }
                            })
                            .catch(function (t) {
                              -96 == t.errorCode &&
                                e.doLogin(function () {
                                  e.getPassengerList();
                                });
                            });
                        },
                      },
                      {
                        key: "switchChange",
                        value: function (e) {
                          var t = this,
                            i = e.detail.value || e.detail.checked || !1;
                          if (i) {
                            var n = this.state.discountList,
                              a = be(n);
                            if (a && 2 != a.type)
                              return void this.setState(
                                { isAllowExchange: !0 },
                                function () {
                                  t.setState({
                                    tipType: 2,
                                    isShowTipModal: !0,
                                    isAllowExchange: !1,
                                  });
                                }
                              );
                          }
                          this.setState({ isAllowExchange: i, hadShowTip: !0 });
                        },
                      },
                      {
                        key: "cancelAllList",
                        value: function () {
                          var e = this.state.discountList;
                          e.forEach(function (e) {
                            e.couponList &&
                              e.couponList.length > 0 &&
                              e.couponList.forEach(function (e) {
                                e.selectFlag = !1;
                              }),
                              "lastSelCoupon" in e &&
                                e.lastSelCoupon &&
                                (e.lastSelCoupon.selectFlag = !1);
                          }),
                            this.setState({ discountList: e });
                        },
                      },
                      {
                        key: "selectDiscountItem",
                        value: function (e) {
                          var t = this.state,
                            i = t.discountList,
                            n = t.exchanageCouponInfo,
                            a = t.isAllowExchange,
                            o = i.find(function (t) {
                              return t.type == e;
                            });
                          if (o && o.couponList && o.couponList.length > 0)
                            if (1 == e)
                              if (o.lastSelCoupon) {
                                if (a && n && n.length > 0)
                                  return void this.setState({
                                    tipType: e,
                                    isShowTipModal: !0,
                                  });
                                (o.lastSelCoupon.selectFlag = !0),
                                  o.couponList.forEach(function (e) {
                                    e.couponCode == o.lastSelCoupon.couponCode
                                      ? (e.selectFlag = !0)
                                      : (e.selectFlag = !1);
                                  }),
                                  i.forEach(function (t) {
                                    t.type != e &&
                                      t.couponList &&
                                      t.couponList.length > 0 &&
                                      (t.couponList[0].selectFlag = !1);
                                  });
                              } else {
                                var s = {
                                  currentTarget: { dataset: { item: o } },
                                };
                                this.jumpToCouponList(s);
                              }
                            else {
                              if (a && n && n.length > 0)
                                return void this.setState({
                                  tipType: e,
                                  isShowTipModal: !0,
                                });
                              (o.couponList[0].selectFlag = !0),
                                i.forEach(function (t) {
                                  t.lastSelCoupon &&
                                    (t.lastSelCoupon.selectFlag = !1),
                                    t.type != e &&
                                      t.couponList &&
                                      t.couponList.length > 0 &&
                                      t.couponList.forEach(function (e) {
                                        e.selectFlag = !1;
                                      });
                                });
                            }
                          this.setState({ discountList: i });
                        },
                      },
                      {
                        key: "discountItemClick",
                        value: function (e) {
                          var t = e.currentTarget.dataset.item,
                            i = e.currentTarget.dataset.status,
                            n = t.type;
                          i ? this.cancelAllList() : this.selectDiscountItem(n);
                        },
                      },
                      {
                        key: "jumpToCouponList",
                        value: function (e) {
                          var t = this,
                            i = e.currentTarget.dataset.item;
                          if (1 == i.type) {
                            console.log("跳转优惠券列表页");
                            var n = this.state,
                              a = n.selectedDate,
                              o = n.discountList,
                              s = n.isQueryCoupon,
                              c = n.isAllowExchange,
                              r = n.exchanageCouponInfo,
                              l = i.couponList || [];
                            if (!a || 0 == l.length || s) return;
                            var u =
                              l.find(function (e) {
                                return e.selectFlag;
                              }) || {};
                            this.navigateTo({
                              url: "/pages/ticket/packageA/coupon/coupon?couponCode=".concat(
                                u ? u.couponCode : ""
                              ),
                              data: { couponList: l, selectedCouponItem: u },
                              callback: function (e) {
                                if (e) {
                                  var i = e.selectedCouponItem || null;
                                  if (c && r && r.length > 0)
                                    return (
                                      (i.selectFlag = !1),
                                      o.forEach(function (e) {
                                        1 == e.type && (e.lastSelCoupon = i);
                                      }),
                                      void t.setState({
                                        discountList: o,
                                        tipType: 1,
                                        isShowTipModal: !0,
                                      })
                                    );
                                  (i.selectFlag = !0),
                                    o.forEach(function (e) {
                                      1 == e.type
                                        ? ((e.lastSelCoupon = i),
                                          (e.couponList || []).forEach(
                                            function (e) {
                                              e.couponCode == i.couponCode
                                                ? (e.selectFlag = !0)
                                                : (e.selectFlag = !1);
                                            }
                                          ))
                                        : e.couponList.forEach(function (e) {
                                            e.selectFlag = !1;
                                          });
                                    });
                                } else
                                  o.forEach(function (e) {
                                    1 == e.type &&
                                      e.lastSelCoupon &&
                                      (e.lastSelCoupon = null),
                                      (e.couponList || []).forEach(function (
                                        e
                                      ) {
                                        e.selectFlag = !1;
                                      });
                                  });
                                t.setState({ discountList: o });
                              },
                            });
                          }
                        },
                      },
                      {
                        key: "showMoreDiscount",
                        value: function () {
                          this.state.isShowMoreDiscount ||
                            this.setState({ isShowMoreDiscount: !0 });
                        },
                      },
                      {
                        key: "toggelPromotionRule",
                        value: function () {
                          var e = this.state.isShowPromotionRule;
                          this.setState({ isShowPromotionRule: !e });
                        },
                      },
                      {
                        key: "toggleExchangeRule",
                        value: function () {
                          var e = this.state.isShowExchangeRule;
                          this.setState({ isShowExchangeRule: !e });
                        },
                      },
                      {
                        key: "closeExchangeRule",
                        value: function () {
                          this.setState({ isShowExchangeRule: !1 });
                        },
                      },
                      {
                        key: "useDiscountClick",
                        value: function () {
                          var e = this.state,
                            t = e.tipType,
                            i = e.discountList;
                          2 == t
                            ? this.setState({
                                tipType: "",
                                isShowTipModal: !1,
                                isAllowExchange: !1,
                              })
                            : (i.forEach(function (e) {
                                if (e.type == t)
                                  if (1 == e.type) {
                                    if (e.lastSelCoupon)
                                      (e.lastSelCoupon.selectFlag = !0),
                                        (e.couponList || []).forEach(function (
                                          t
                                        ) {
                                          t.couponCode ==
                                          e.lastSelCoupon.couponCode
                                            ? (t.selectFlag = !0)
                                            : (t.selectFlag = !1);
                                        });
                                  } else {
                                    (e.couponList || [])[0].selectFlag = !0;
                                  }
                              }),
                              this.setState({
                                discountList: i,
                                tipType: "",
                                isShowTipModal: !1,
                                isAllowExchange: !1,
                              }));
                        },
                      },
                      {
                        key: "useExchangeClick",
                        value: function () {
                          this.cancelAllList(),
                            this.setState({
                              tipType: "",
                              isShowTipModal: !1,
                              isAllowExchange: !0,
                            });
                        },
                      },
                      {
                        key: "getNewCouponList",
                        value: function () {
                          var e = this,
                            t = this.state.resourceId,
                            i = this.state,
                            n = i.selectedDate,
                            a = i.ticketNum;
                          (0, U.lc)({
                            resourceId: t,
                            orderDate: n,
                            orderQuantity: a,
                            fromPage: "wechat",
                          })
                            .then(function (t) {
                              console.log("可用优惠模块", t);
                              var i = [],
                                n = [];
                              if (1 == t.resultCode) {
                                if (
                                  t.availableCouponList &&
                                  t.availableCouponList.length > 0
                                ) {
                                  var a = (i = t.availableCouponList).find(
                                    function (e) {
                                      return 1 == e.type;
                                    }
                                  );
                                  if (
                                    a &&
                                    a.couponList &&
                                    a.couponList.length > 0
                                  ) {
                                    var o = a.couponList.filter(function (e) {
                                      return 0 == e.couponState;
                                    });
                                    if (o && o.length > 0) {
                                      var s = o.find(function (e) {
                                        return 1 == e.selectFlag;
                                      });
                                      a.lastSelCoupon = s || o[0];
                                    } else {
                                      var c = i.findIndex(function (e) {
                                        return 1 == e.type;
                                      });
                                      i.splice(c, 1);
                                    }
                                  }
                                }
                                t.exchanageCouponInfo &&
                                  t.exchanageCouponInfo.length > 0 &&
                                  (n = t.exchanageCouponInfo);
                              }
                              e.setState({
                                discountList: i,
                                isQueryCoupon: !1,
                                isAllowExchange: !1,
                                exchanageCouponInfo: n,
                                hasInit: !0,
                              });
                            })
                            .catch(function () {
                              e.setState({
                                discountList: [],
                                isAllowExchange: !1,
                                exchanageCouponInfo: [],
                                isQueryCoupon: !1,
                                hasInit: !1,
                              });
                            });
                        },
                      },
                      {
                        key: "queryPriceCalendar",
                        value: function (e) {
                          var t = this;
                          (0, U.L1)(e)
                            .then(function (e) {
                              var i, n, a;
                              1 === (null == e ? void 0 : e.resultCode) &&
                              null != e &&
                              null !== (i = e.resourceList) &&
                              void 0 !== i &&
                              i.length
                                ? (t.setState({
                                    isLoading: !1,
                                    multiPriceCalendarList:
                                      (null == e ? void 0 : e.resourceList) ||
                                      [],
                                  }),
                                  t.handleDateList(
                                    null == e ||
                                      null === (n = e.resourceList) ||
                                      void 0 === n ||
                                      null === (a = n[0]) ||
                                      void 0 === a
                                      ? void 0
                                      : a.dateList
                                  ))
                                : t.setState({
                                    isLoading: !1,
                                    loadError: !0,
                                    multiPriceCalendarList: [],
                                  });
                            })
                            .catch(function () {
                              t.setState({ isLoading: !1, loadError: !0 }),
                                G.Z.showToast({
                                  message: "获取价格日历失败",
                                  icon: "none",
                                });
                            });
                        },
                      },
                      {
                        key: "handleDateList",
                        value: function (e) {
                          var t = this,
                            i = ve(De);
                          null == e ||
                            e.forEach(function (e) {
                              var t = e.inventoryNum > 0 && e.salePrice > 0,
                                n = i.findIndex(function (t) {
                                  return t.dateStr === e.date;
                                });
                              n > -1
                                ? (i[n] = {
                                    canBook: t,
                                    price: e.salePrice,
                                    date: k()(e.date).format("MM-DD"),
                                    dateStr: e.date,
                                    desc: C.Z.getWeekDayDesc(e.date),
                                  })
                                : i.push({
                                    canBook: t,
                                    price: e.salePrice,
                                    date: k()(e.date).format("MM-DD"),
                                    dateStr: e.date,
                                    desc: C.Z.getWeekDayDesc(e.date),
                                  });
                            });
                          var n = !0;
                          if (e.length < 4) {
                            var a = this.state.lastThreeDay;
                            e.every(function (e) {
                              return a.includes(e.date);
                            }) && (n = !1);
                          }
                          var o = i.find(function (e) {
                              return e.dateStr === t.state.selectedDate;
                            }),
                            s = {
                              useDateTagList: i,
                              isShowMoreDateBtn: n,
                              mainResPriceList: e,
                            };
                          (s.price =
                            null != o && o.canBook
                              ? null == o
                                ? void 0
                                : o.price
                              : 0),
                            (null != o && o.canBook) ||
                              ((s.selectedDate = ""),
                              o &&
                                (0, S.showToast)(
                                  "当前选中日期有变化，请重新选择"
                                )),
                            this.setState(s);
                        },
                      },
                      {
                        key: "queryResourceDetail",
                        value: function (e) {
                          var t = this;
                          (0, U.Nc)(e)
                            .then(function (i) {
                              if (
                                (console.log("资源详情数据", i),
                                1 == i.resultCode &&
                                  i.resourceList &&
                                  i.resourceList.length)
                              ) {
                                var n = i.resourceList[0] || {},
                                  a = Te(n.peopleGroup);
                                t.setState(
                                  {
                                    ticketName: a,
                                    price: n.salePrice,
                                    ticketNum: n.minQuantity,
                                    mainResInfo: n,
                                    unitQuantity:
                                      (n.unitQuantity &&
                                        n.unitQuantity > 0 &&
                                        n.unitQuantity) ||
                                      1,
                                    limitSaleTag: n.limitSaleTag || [],
                                  },
                                  function () {
                                    t.isShowHandTip(),
                                      t.queryDynamicForm(e),
                                      t.onTicketNumChange();
                                  }
                                );
                              } else
                                t.setState({ loadError: !0 }),
                                  (0, S.showToast)(
                                    i.resultMessage || "当前资源不支持预订"
                                  ),
                                  setTimeout(function () {
                                    t.navigateBack();
                                  }, 1e3);
                              console.log("queryResourceDetail---\x3e", i);
                            })
                            .catch(function () {
                              t.setState({ loadError: !0 }),
                                G.Z.showToast({
                                  message: "网络超时，请稍后重试",
                                  icon: "none",
                                });
                            });
                        },
                      },
                      {
                        key: "queryDynamicForm",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            n = i.mainResInfo,
                            a = i.unitQuantity;
                          (0, U.vU)(e)
                            .then(function (e) {
                              if (1 == e.resultCode) {
                                console.log("queryDynamicForm---\x3e", e);
                                var i = e.resourceList[0],
                                  o =
                                    (null == e ? void 0 : e.isNeedEmail) || !1,
                                  s = i.customerInfoItemList || [],
                                  c = !1;
                                0 == s.length && ((c = !0), (s = ve(Ve)));
                                var r = s.findIndex(function (e) {
                                    return 4 == e.iD;
                                  }),
                                  l = [];
                                if (r > -1) {
                                  var u = [1, 2, 7, 8, 10, 22];
                                  l = s[r].cardTypeList.filter(function (e) {
                                    return u.includes(e.iD);
                                  });
                                }
                                var d = 1;
                                "A" == i.fillInNumberLimit &&
                                  (d = n.minQuantity * a),
                                  t.filterDynamicForm(s, l[0], d),
                                  t.setState({
                                    cardTypeList: l,
                                    isDynamicFormEmpty: c,
                                    fillInNumberLimit:
                                      i.fillInNumberLimit || "O",
                                    isNeedEmail: o,
                                  });
                              } else t.setState({ loadError: !0 });
                            })
                            .catch(function () {
                              t.setState({ loadError: !0 });
                            });
                        },
                      },
                      {
                        key: "filterDynamicForm",
                        value: function (e, t, i) {
                          var n = [1, 2, 6, 13],
                            a = e.filter(function (e) {
                              return n.includes(e.iD);
                            }),
                            o = [];
                          a.forEach(function (e) {
                            var i = {};
                            if (2 == e.iD) {
                              var n = ke(2.1);
                              (i = Ze(e.iD, "英文姓", e.type, n, e.inputType)),
                                o.push(i),
                                (n = ke(2.2)),
                                (i = Ze(
                                  e.iD,
                                  "英文名",
                                  e.type,
                                  n,
                                  e.inputType
                                )),
                                o.push(i);
                            } else {
                              var a = ke(e.iD);
                              6 == e.iD
                                ? (((i = Ze(
                                    e.iD,
                                    e.name,
                                    e.type,
                                    a,
                                    e.inputType,
                                    !0
                                  )).cardId = t.iD),
                                  (i.name = t.name))
                                : (i = Ze(
                                    e.iD,
                                    e.name,
                                    e.type,
                                    a,
                                    e.inputType
                                  )),
                                o.push(i);
                            }
                          }),
                            (o[0].passengerID = "");
                          var s = [o];
                          if (i > 1)
                            for (var c = 0; c < i - 1; c++) {
                              var r = ve(o);
                              s.push(r);
                            }
                          console.log("生成表单", s),
                            this.setState({ formList: s });
                        },
                      },
                      {
                        key: "useDateClick",
                        value: function (e) {
                          var t = e.currentTarget.dataset.item;
                          t.canBook &&
                            (this.setState({
                              selectedDate: null == t ? void 0 : t.dateStr,
                              price: t.price,
                            }),
                            this.onSelectedChange());
                        },
                      },
                      {
                        key: "matchCalPrice",
                        value: function (e, t) {
                          console.log(e, t);
                          for (var i = 0; i < e.length; i++)
                            if (e[i].date == t) return e[i].salePrice;
                        },
                      },
                      {
                        key: "showCalendar",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                a,
                                s,
                                c,
                                r,
                                l,
                                u = this;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((i = this.state),
                                          (n = i.mainResPriceList),
                                          (a = i.selectedDate),
                                          0 != n.length)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          G.Z.showToast({
                                            message: "暂无更多价格日历",
                                            icon: "none",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 4:
                                        return (
                                          console.log(n),
                                          console.log(a),
                                          (s = k()(n[0].date).format(ge)),
                                          (c = ""),
                                          a && (c = a),
                                          (r = k()(n[n.length - 1].date).format(
                                            ge
                                          )),
                                          (e.next = 12),
                                          null ===
                                            (t = this.$CalenderSelector) ||
                                          void 0 === t
                                            ? void 0
                                            : t.trigger({
                                                calenderOpts: {
                                                  beginDate: s,
                                                  endDate: r,
                                                  selectedDate: c,
                                                  priceList: n,
                                                },
                                              })
                                        );
                                      case 12:
                                        (l = e.sent),
                                          this.setState(
                                            { selectedDate: l },
                                            function () {
                                              u.onSelectedChange();
                                            }
                                          );
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
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "addBtnClick",
                        value: function () {
                          var e = this.state,
                            t = e.ticketNum,
                            i = e.mainResInfo,
                            n = e.fillInNumberLimit,
                            a = e.formList,
                            o = e.unitQuantity;
                          if (a && 0 != a.length)
                            if (t == i.maxQuantity)
                              G.Z.showToast({
                                message: "最多购买".concat(i.maxQuantity, "份"),
                                icon: "none",
                              });
                            else if (
                              (this.setState({ ticketNum: t + 1 }),
                              this.onTicketNumChange(),
                              "A" == n)
                            ) {
                              for (var s = 0; s < o; s++) {
                                var c = ve(a[0]);
                                if (xe(c)) return;
                                Ce(c), a.push(c);
                              }
                              this.setState({ formList: a });
                            }
                        },
                      },
                      {
                        key: "decreaseBtnClick",
                        value: function () {
                          var e = this.state,
                            t = e.ticketNum,
                            i = e.fillInNumberLimit,
                            n = e.formList,
                            a = e.commonPassengers,
                            o = e.mainResInfo,
                            s = e.unitQuantity;
                          if (n && 0 != n.length)
                            if (t == o.minQuantity)
                              G.Z.showToast("至少购买".concat(t, "份"));
                            else {
                              if ("A" == i) {
                                var c = n.length,
                                  r = s;
                                n.splice(c - r, r).forEach(function (e) {
                                  a.forEach(function (t) {
                                    t.passengerID === e[0].passengerID &&
                                      (t.isSelected = !1);
                                  });
                                });
                              }
                              this.setState({
                                formList: n,
                                commonPassengers: a,
                                ticketNum: t - 1,
                              }),
                                this.onTicketNumChange();
                            }
                        },
                      },
                      {
                        key: "beforeChooseTourist",
                        value: function (e) {
                          var t = this.checkProduct();
                          t ? (0, S.showToast)(t) : this.chooseTourist(e);
                        },
                      },
                      {
                        key: "chooseTourist",
                        value: function (e) {
                          var t = e.currentTarget.dataset,
                            i = t.item,
                            n = t.index,
                            a = this.state,
                            o = a.commonPassengers,
                            s = a.fillInNumberLimit,
                            c = a.formList,
                            r = a.ticketNum,
                            l = a.loadError,
                            u = a.unitQuantity;
                          if (!(l || (c && 0 == c.length)))
                            if ("O" === s) {
                              var d = c[0];
                              i.isSelected
                                ? Ce(d)
                                : this.selTouristInfoFillForm(i, d),
                                o.forEach(function (e, t) {
                                  t !== n && (e.isSelected = !1);
                                }),
                                (o[n].isSelected = !o[n].isSelected),
                                console.log(o),
                                this.setState({
                                  commonPassengers: o,
                                  formList: [d],
                                });
                            } else {
                              var h = 0;
                              if (
                                (c.forEach(function (e) {
                                  (0 === e[0].passengerID.length &&
                                    0 === e[0].nameVal.length) ||
                                    h++;
                                }),
                                i.isSelected)
                              ) {
                                var m = c.findIndex(function (e) {
                                  return e[0].passengerID == i.passengerID;
                                });
                                (o[n].isSelected = !o[n].isSelected),
                                  m > -1 && Ce(c[m]),
                                  c.forEach(function (e, t) {
                                    0 == e[0].passengerID.length &&
                                      0 == e[0].nameVal.length &&
                                      (c.splice(t, 1), c.push(e));
                                  }),
                                  this.setState({
                                    commonPassengers: o,
                                    formList: c,
                                  });
                              } else if (h == r * u)
                                if (1 == h) {
                                  o.forEach(function (e) {
                                    return (e.isSelected = !1);
                                  });
                                  var p = c[0];
                                  Ce(p),
                                    (o[n].isSelected = !o[n].isSelected),
                                    this.selTouristInfoFillForm(i, c[0]),
                                    this.setState({
                                      commonPassengers: o,
                                      formList: c,
                                    });
                                } else
                                  G.Z.showToast(
                                    "您只需选择".concat(h, "个出行人")
                                  );
                              else if (h < r * u) {
                                var f = c.findIndex(function (e) {
                                  return (
                                    0 == e[0].passengerID.length &&
                                    0 == e[0].nameVal.length
                                  );
                                });
                                this.selTouristInfoFillForm(i, c[f]),
                                  (o[n].isSelected = !o[n].isSelected),
                                  this.setState({
                                    commonPassengers: o,
                                    formList: c,
                                  });
                              }
                            }
                        },
                      },
                      {
                        key: "onMorePas",
                        value: function () {
                          var e,
                            t = this.checkProduct();
                          t
                            ? (0, S.showToast)(t)
                            : null === (e = this.$PassengerListNode) ||
                              void 0 === e ||
                              e.setShow({
                                needMax: this.getNeedMax,
                                passengers: this.state.commonPassengers,
                                showStillText: this.state.showStillText,
                              });
                        },
                      },
                      {
                        key: "onFormEdit",
                        value: function (e) {
                          var t,
                            i = this.state.commonPassengers,
                            n = Reflect.ownKeys(e).length > 0;
                          null === (t = this.$EditPassengerNode) ||
                            void 0 === t ||
                            t.setShow(
                              !n,
                              null == i
                                ? void 0
                                : i.find(function (t) {
                                    return (
                                      t.passengerID ==
                                      (null == e ? void 0 : e.passengerID)
                                    );
                                  }),
                              "formList",
                              e.isForeign
                            );
                        },
                      },
                      {
                        key: "onEdit",
                        value: function (e, t) {
                          var i, n;
                          null === (i = this.$PassengerListNode) ||
                            void 0 === i ||
                            i.setHide(),
                            null === (n = this.$EditPassengerNode) ||
                              void 0 === n ||
                              n.setShow(
                                e,
                                t,
                                "pasList",
                                null == t ? void 0 : t.isForeign
                              );
                        },
                      },
                      {
                        key: "onCardList",
                        value: function (e) {
                          var t, i;
                          null === (t = this.$EditPassengerNode) ||
                            void 0 === t ||
                            t.setHide(),
                            null === (i = this.$CardListNode) ||
                              void 0 === i ||
                              i.setShow(e);
                        },
                      },
                      {
                        key: "chooseCard",
                        value: function (e) {
                          var t;
                          null === (t = this.$EditPassengerNode) ||
                            void 0 === t ||
                            t.setCard(e);
                        },
                      },
                      {
                        key: "onPutPhone",
                        value: function (e) {
                          this.setState({ contactPhone: e });
                        },
                      },
                      {
                        key: "onPutEmail",
                        value: function (e) {
                          this.setState({ email: e });
                        },
                      },
                      {
                        key: "addPassenger",
                        value: function (e, t) {
                          var i = this,
                            n = e.maskPassportCode,
                            a = void 0 === n ? "" : n,
                            o = e.passengerENLastName,
                            s = void 0 === o ? "" : o,
                            c = e.passportType,
                            r = void 0 === c ? "身份证" : c,
                            l = e.passengerENFirstName,
                            u = void 0 === l ? "" : l,
                            d = e.countryCode,
                            h = void 0 === d ? "86" : d,
                            m = e.showPassportCode,
                            p = void 0 === m ? "" : m,
                            f = e.nationality,
                            g = void 0 === f ? "CN" : f,
                            v = e.passengerID,
                            _ = void 0 === v ? "" : v,
                            y = e.cardType,
                            N = void 0 === y ? "1" : y,
                            w = e.passengerBirth,
                            T = void 0 === w ? "" : w,
                            Z = e.gender,
                            k = void 0 === Z ? "U" : Z,
                            C = e.passengerTypeEnumCode,
                            I = void 0 === C ? "A" : C,
                            L = e.cardTimeLimit,
                            b = void 0 === L ? "" : L,
                            V = e.middleName,
                            D = void 0 === V ? "" : V,
                            P = e.mobile,
                            B = void 0 === P ? "" : P,
                            E = e.studentInfo,
                            X = void 0 === E ? "" : E,
                            M = e.passengerName,
                            F = void 0 === M ? "" : M,
                            R = e.passengerType,
                            A = void 0 === R ? "成人票" : R,
                            j = e.issueAt,
                            Q = void 0 === j ? "" : j,
                            z = e.passportCode,
                            O = void 0 === z ? "" : z,
                            q = e.userSelf,
                            H = void 0 === q ? 0 : q,
                            W = e.child,
                            Y = void 0 !== W && W,
                            $ = {
                              passengerID: ""
                                .concat(_)
                                .substring(0, "".concat(_).indexOf("_")),
                              passengerType: A,
                              passengerTypeEnumCode: I,
                              passengerName: F,
                              passengerENFirstName: u,
                              middleName: D,
                              passengerENLastName: s,
                              passengerBirth: T,
                              mobile: B,
                              countryCode: h,
                              gender: k,
                              nationality: g,
                              studentInfo: X,
                              userSelf: H,
                              child: Y,
                              cardList: [
                                {
                                  cardType: N,
                                  passportType: r,
                                  passportCode: O,
                                  issueAt: Q,
                                  cardTimeLimit: b,
                                  showPassportCode: p,
                                  maskPassportCode: a,
                                },
                              ],
                            };
                          (0, S.showLoading)("保存中..."),
                            (0, x.cA)({
                              source: "comInfo",
                              ruleCheckFlag: 0,
                              confirmedCodes: [],
                              commonPassengerInfo: $,
                            })
                              .then(function (e) {
                                var n;
                                (0, S.hideLoading)(),
                                  1 === (null == e ? void 0 : e.resultCode)
                                    ? ((0, S.showToast)("保存成功"),
                                      i.getPassengerList(),
                                      null === (n = i.$EditPassengerNode) ||
                                        void 0 === n ||
                                        n.setHide(),
                                      "pasList" === t &&
                                        setTimeout(function () {
                                          i.onMorePas();
                                        }, 500))
                                    : (0, S.showToast)("保存失败，请稍后再试");
                              })
                              .catch(function (e) {
                                return console.log(e);
                              });
                        },
                      },
                      {
                        key: "selTouristInfoFillForm",
                        value: function (e, t) {
                          var i = this.state.cardTypeList;
                          if (!xe(t)) {
                            var n = t.findIndex(function (e) {
                              return 6 == e.iD;
                            });
                            if (n > -1) {
                              var a = i.some(function (t) {
                                return t.iD == Number(e.cardType);
                              });
                              e.passportCode &&
                                e.passportCode.length > 0 &&
                                a &&
                                Number(e.cardType) !== t[n].cardId &&
                                ((t[n].cardId = Number(e.cardType)),
                                (t[n].name = e.passportType));
                            }
                            t.forEach(function (t) {
                              (t.isShowTip = !1),
                                (t.isFocus = !1),
                                (t.nameVal = ""),
                                1 === t.iD && (t.nameVal = e.passengerName),
                                2 === t.iD &&
                                  ("英文姓" == t.name
                                    ? (t.nameVal = e.passengerENLastName)
                                    : (t.nameVal = e.passengerENFirstName)),
                                6 == t.iD &&
                                  (t.cardId == Number(e.cardType)
                                    ? ((t.nameVal = e.showPassportCode),
                                      (t.nameRealVal = e.passportCode))
                                    : ((t.nameVal = ""), (t.nameRealVal = ""))),
                                13 === t.iD &&
                                  ((t.nameVal = _e(e.mobile)),
                                  (t.nameRealVal = e.mobile));
                            }),
                              (t[0].passengerID = e.passengerID);
                          }
                        },
                      },
                      {
                        key: "inputFocus",
                        value: function (e) {
                          console.log(e);
                          var t = e.currentTarget.dataset,
                            i = t.rowIndex,
                            n = t.columnIndex,
                            a = this.state,
                            o = a.formList,
                            s = a.isShowHandAddInfoTip;
                          0 == i &&
                            0 == n &&
                            s &&
                            this.setState({ isShowHandAddInfoTip: !1 }),
                            (o[i][n].isFocus = !0),
                            this.setState({ formList: o });
                        },
                      },
                      {
                        key: "clearNameVal",
                        value: function (e) {
                          var t = e.currentTarget.dataset,
                            i = t.rowIndex,
                            n = t.columnIndex,
                            a = this.state.formList;
                          (a[i][n].nameVal = ""),
                            a[i][n].nameRealVal && (a[i][n].nameRealVal = ""),
                            this.setState({ formList: a });
                        },
                      },
                      {
                        key: "inputChange",
                        value: function (e) {
                          var t = e.detail.value,
                            i = e.currentTarget.dataset,
                            n = i.column,
                            a = i.columnIndex,
                            o = i.rowIndex;
                          n.nameVal && n.nameRealVal && n.nameVal.includes("*")
                            ? (t = "")
                            : "英文姓" == n.name && (t = t.replace(/\s+/g, ""));
                          var s = this.state.formList;
                          (s[o][a].nameVal = t),
                            (s[o][a].nameRealVal = t),
                            this.setState({ formList: s });
                        },
                      },
                      {
                        key: "inputBlur",
                        value: function (e) {
                          var t = this,
                            i = e.currentTarget.dataset,
                            n = i.rowIndex,
                            a = i.columnIndex,
                            o = this.state.formList,
                            s = o[n][a],
                            c = s.nameVal,
                            r = s.iD,
                            l = s.inputType,
                            u = s.name,
                            d = s.nameRealVal,
                            h = !0;
                          if (
                            (1 === r && 0 == l && (h = y.Z.isValidCNName(c)),
                            2 === r &&
                              0 == l &&
                              (h =
                                "英文姓" == u ? y.Z.isValidEnName(c) : ye(c)),
                            6 === r && 0 == l)
                          ) {
                            var m = o[n][a].cardId;
                            h = Ne(d, m);
                          }
                          13 === r && 0 == l && (h = y.Z.isMobile(d)),
                            (o[n][a].isShowTip = !h),
                            (o[n][a].isFocus = !1),
                            setTimeout(function () {
                              t.setState({ formList: o });
                            }, 300);
                        },
                      },
                      {
                        key: "showCardPick",
                        value: function (e) {
                          var t = this.state.cardTypeList,
                            i = [],
                            n = this;
                          t.forEach(function (e) {
                            return i.push(e.name);
                          });
                          var a = e.currentTarget.dataset,
                            o = a.column,
                            s = a.rowIndex;
                          this.setState({
                            cardPickWithFormIndex: s,
                            selectedCardType: o.cardId,
                          }),
                            g().showActionSheet({
                              itemList: i,
                              success: function (e) {
                                var i;
                                (i = v.default.isAlipay ? e.index : e.tapIndex),
                                  n.cardPickCallback(t[i]);
                              },
                              fail: function (e) {
                                console.log(e.errMsg);
                              },
                            });
                        },
                      },
                      {
                        key: "cardPickCallback",
                        value: function (e) {
                          var t = this.state,
                            i = t.formList,
                            n = t.cardPickWithFormIndex,
                            a = t.commonPassengers;
                          i[n].forEach(function (t) {
                            6 == t.iD && ((t.cardId = e.iD), (t.name = e.name));
                          });
                          var o = i[n][0].passengerID;
                          if (o.length > 0) {
                            var s = a.findIndex(function (e) {
                              return e.passengerID == o;
                            });
                            Number(a[s].cardType) == e.iD
                              ? i[n].forEach(function (e) {
                                  6 == e.iD &&
                                    ((e.nameVal = a[s].showPassportCode),
                                    (e.nameRealVal = a[s].passportCode));
                                })
                              : i[n].forEach(function (e) {
                                  6 == e.iD &&
                                    ((e.nameVal = ""), (e.nameRealVal = ""));
                                });
                          }
                          this.setState({ formList: i });
                        },
                      },
                      {
                        key: "dealPasListSel",
                        value: function (e) {
                          var t = this.state,
                            i = t.formList;
                          if ("O" === t.fillInNumberLimit) {
                            var n = i[0],
                              a = e.findIndex(function (e) {
                                return e.isSelected;
                              });
                            if (-1 == a) return;
                            var o = e[a];
                            this.selTouristInfoFillForm(o, n),
                              this.setState({
                                formList: [n],
                                commonPassengers: e,
                              });
                          } else {
                            i.forEach(function (t, n) {
                              t[0].passengerID.length > 0 &&
                                -1 ==
                                  e.findIndex(function (e) {
                                    return (
                                      e.isSelected &&
                                      e.passengerID == t[0].passengerID
                                    );
                                  }) &&
                                Ce(i[n]);
                            });
                            var s = [];
                            if (
                              (e.forEach(function (e) {
                                e.isSelected &&
                                  (i.some(function (t) {
                                    return t[0].passengerID == e.passengerID;
                                  }) ||
                                    s.push(e));
                              }),
                              s.length > 0)
                            )
                              for (var c = 0; c < s.length; c++)
                                for (var r = s[c], l = 0; l < i.length; l++) {
                                  var u = i[l];
                                  if (
                                    0 == u[0].passengerID.length &&
                                    0 == u[0].nameVal.length
                                  ) {
                                    this.selTouristInfoFillForm(r, u);
                                    break;
                                  }
                                }
                            this.setState({ formList: i, commonPassengers: e });
                          }
                        },
                      },
                      {
                        key: "toggleDetail",
                        value: function () {
                          var e = this.state,
                            t = e.selectedDate;
                          if (!e.isQueryCoupon)
                            if (0 != t.length) {
                              var i = this.state.isShowExtraView;
                              this.setState({ isShowExtraView: !i });
                            } else G.Z.showToast("请选择使用日期");
                        },
                      },
                      {
                        key: "goPayCenter",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              var t,
                                i,
                                n,
                                a,
                                s,
                                c,
                                r,
                                l,
                                u,
                                d,
                                h,
                                m,
                                p,
                                f,
                                g,
                                v,
                                _,
                                N,
                                w,
                                T,
                                x,
                                Z,
                                k,
                                C,
                                I,
                                L,
                                b,
                                V,
                                D,
                                P,
                                B,
                                X,
                                M,
                                F,
                                R,
                                A,
                                j,
                                Q,
                                z;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((i = this.state.spotId),
                                          (n = this.state),
                                          (a = n.formList),
                                          (s = n.selectedDate),
                                          (c = n.mainResInfo),
                                          (r = n.isDynamicFormEmpty),
                                          (l = n.discountList),
                                          (u = n.isShowExtraView),
                                          (d = n.isQueryCoupon),
                                          (h = n.price),
                                          (m = n.ticketName),
                                          (p = n.ticketNum),
                                          (f = n.locationInfo),
                                          (g = n.isAllowExchange),
                                          (v = n.exchanageCouponInfo),
                                          n.isShowTip,
                                          (_ = n.isNeedEmail),
                                          (N = n.contactPhone),
                                          (w = n.email),
                                          (T = n.selectedTips),
                                          this.ubtTrace(
                                            "SZWBooking_Pay_click",
                                            { PageId: this.pageId }
                                          ),
                                          (x = [
                                            {
                                              ticketName: m,
                                              ticketPrice: h,
                                              ticketNum: p,
                                            },
                                          ]),
                                          !d)
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 6:
                                        if (0 != s.length) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          G.Z.showToast("请选择使用日期"),
                                          e.abrupt("return")
                                        );
                                      case 9:
                                        if (!(Z = this.checkProduct())) {
                                          e.next = 13;
                                          break;
                                        }
                                        return (
                                          (0, S.showToast)(Z),
                                          e.abrupt("return")
                                        );
                                      case 13:
                                        if (
                                          (u &&
                                            this.setState({
                                              isShowExtraView: !1,
                                            }),
                                          a && 0 != a.length)
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 16:
                                        if (
                                          (console.log("选中日期", s),
                                          this.checkFormList(a))
                                        ) {
                                          e.next = 21;
                                          break;
                                        }
                                        return (
                                          G.Z.showToast("请将信息填写完整"),
                                          e.abrupt("return")
                                        );
                                      case 21:
                                        if (!_ || y.Z.isEmail(w)) {
                                          e.next = 24;
                                          break;
                                        }
                                        return (
                                          (0, S.showToast)("请输入正确的邮箱"),
                                          e.abrupt("return")
                                        );
                                      case 24:
                                        if (y.Z.isMobile(N)) {
                                          e.next = 27;
                                          break;
                                        }
                                        return (
                                          (0, S.showToast)(
                                            "请输入正确的手机号"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 27:
                                        if (
                                          ((k = []),
                                          r ||
                                            a.forEach(function (e) {
                                              var t = {
                                                cName: "",
                                                eName: "",
                                                idCardType: null,
                                                idCardName: "",
                                                idCardNo: "",
                                                ageType: Le(c.peopleGroup),
                                                birthCity: "",
                                                birthDate: "",
                                                cardCity: "",
                                                gender: null,
                                                visaOrgan: "",
                                                passportDate: "",
                                                visaCountry: "",
                                                passportNo: "",
                                                issueDate: "",
                                                idCardTimelimit: "",
                                                passportType: "",
                                                nationality: "",
                                                resourceID: c.id,
                                                countryCode: "86",
                                                mobile: "",
                                              };
                                              e.forEach(function (i, n) {
                                                1 == i.iD &&
                                                  (t.cName = i.nameVal),
                                                  2 == i.iD &&
                                                    "英文姓" == i.name &&
                                                    (t.eName =
                                                      i.nameVal +
                                                      "/" +
                                                      e[n + 1].nameVal),
                                                  6 == i.iD &&
                                                    ((t.idCardName = i.name),
                                                    (t.idCardType = i.cardId),
                                                    (t.idCardNo =
                                                      i.nameRealVal)),
                                                  13 == i.iD &&
                                                    (t.mobile = i.nameRealVal);
                                              }),
                                                k.push(t);
                                            }),
                                          (C = a[0]),
                                          (I = {
                                            contactName: "",
                                            countryCode: "86",
                                            mobile: "",
                                            address: "",
                                            email: w,
                                          }),
                                          !xe(C))
                                        ) {
                                          e.next = 34;
                                          break;
                                        }
                                        return (
                                          G.Z.hideLoading(), e.abrupt("return")
                                        );
                                      case 34:
                                        if (
                                          ((L = C.findIndex(function (e) {
                                            return 1 == e.iD;
                                          })),
                                          C.forEach(function (e, t) {
                                            1 == e.iD &&
                                              (I.contactName = e.nameVal),
                                              2 == e.iD &&
                                                "英文姓" == e.name &&
                                                -1 == L &&
                                                (I.contactName =
                                                  e.nameVal +
                                                  "/" +
                                                  C[t + 1].nameVal),
                                              13 == e.iD && (I.mobile = N);
                                          }),
                                          (b = []),
                                          (V = g && v && v.length > 0),
                                          (D = be(l)),
                                          V && b.push(2),
                                          D && b.push(D.type),
                                          (P = D && 3 == D.type ? 1 : 0),
                                          (B = D && 4 == D.type ? 1 : 0),
                                          (X = !1),
                                          (M = null),
                                          D &&
                                            1 == D.type &&
                                            ((X = !0), (M = D.couponCode)),
                                          (F = this.state),
                                          (R = F.source),
                                          (A = F.productSale),
                                          (j = []),
                                          (null == A ||
                                          null === (t = A.propertyList) ||
                                          void 0 === t
                                            ? void 0
                                            : t.length) > 0 &&
                                            ((Q = []),
                                            null == A ||
                                              A.propertyList.forEach(function (
                                                e
                                              ) {
                                                var t,
                                                  i =
                                                    null == e ||
                                                    null ===
                                                      (t =
                                                        e.propertyValueInfoList) ||
                                                    void 0 === t
                                                      ? void 0
                                                      : t.find(function (e) {
                                                          return e.selected;
                                                        });
                                                i &&
                                                  Q.push({
                                                    id:
                                                      null == e
                                                        ? void 0
                                                        : e.propertyId,
                                                    name:
                                                      null == e
                                                        ? void 0
                                                        : e.propertyName,
                                                    content:
                                                      i.propertyValueName,
                                                  });
                                              }),
                                            null != Q &&
                                              Q.length &&
                                              j.push({ addInfoDetails: Q })),
                                          (z = {
                                            orderCheckFlag: this
                                              .hasTipRepeatOrder
                                              ? 0
                                              : 1,
                                            couponCode: M,
                                            scenicSpotId: Number(i),
                                            source: R,
                                            useDate: s,
                                            contactInfo: I,
                                            passengerList: k,
                                            resourceInfoList: [
                                              {
                                                resourceId: c.id,
                                                quantity: x[0].ticketNum,
                                                itemAddInfos: j,
                                              },
                                            ],
                                            locationInfo: f,
                                            resourceDeductFlag: B,
                                            vipDeductFlag: P,
                                            deductTypes: b,
                                          }),
                                          console.log("create params==>>", z),
                                          !k.find(function (e) {
                                            return (
                                              1 ===
                                                (null == e
                                                  ? void 0
                                                  : e.idCardType) &&
                                              E.Z.getAge(
                                                (null == e
                                                  ? void 0
                                                  : e.idCardNo) || ""
                                              ) < 18
                                            );
                                          }) || T)
                                        ) {
                                          e.next = 55;
                                          break;
                                        }
                                        return (
                                          (0, S.showToast)("请勾选未成年协议"),
                                          e.abrupt("return")
                                        );
                                      case 55:
                                        V
                                          ? this.ExchangeIntegral(z, v[0])
                                          : this.createOrder(z, X);
                                      case 56:
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
                        key: "ExchangeIntegral",
                        value: function (e, t) {
                          var i = this;
                          (0, U.cZ)({
                            code: t.code,
                            businessType: "ticketOrder",
                          })
                            .then(function (t) {
                              if (
                                (console.log("积分兑换结果", t),
                                1 === t.resultCode)
                              )
                                (e.couponCode = t.couponCode),
                                  i.createOrder(e, !0, !0);
                              else {
                                G.Z.hideLoading();
                                var n,
                                  a = t.title;
                                n =
                                  a.includes("积分不足") ||
                                  a.includes("兑换次数不足") ||
                                  a.includes("库存不足")
                                    ? "抱歉！由于".concat(
                                        a,
                                        "，导致本次积分兑换失败。本次购票不会扣除您的积分，并将使用正常票价购票。"
                                      )
                                    : "抱歉！本次积分兑换失败。本次购票不会扣除您的积分，并将使用正常票价购票。";
                                var o = i;
                                i.setState({ isAllowExchange: !1 });
                                var s =
                                  "tieyou" == i.state.partner
                                    ? "#FE4839"
                                    : "#5495E6";
                                g().showModal({
                                  content: n,
                                  confirmText: "继续购票",
                                  cancelText: "取消购票",
                                  cancelColor: "#666",
                                  confirmColor: s,
                                  success: function (t) {
                                    t.confirm && o.createOrder(e);
                                  },
                                });
                              }
                            })
                            .catch(function () {
                              G.Z.hideLoading(), G.Z.showToast("网络超时");
                            });
                        },
                      },
                      {
                        key: "createOrder",
                        value: function (e) {
                          var t = this,
                            i =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            n =
                              arguments.length > 2 &&
                              void 0 !== arguments[2] &&
                              arguments[2];
                          (0, U.px)(ve(e))
                            .then(function (a) {
                              if (
                                (G.Z.hideLoading(),
                                console.log("创建订单结果---\x3e", a),
                                1 == a.resultCode)
                              )
                                (t.hasTipRepeatOrder = !1),
                                  (i || n) && t.getNewCouponList(),
                                  t.callPayOperation(a.orderNumber, n);
                              else if (2 == a.resultCode) {
                                t.hasTipRepeatOrder = !0;
                                var o = t,
                                  s = a.orderNumber,
                                  c =
                                    "tieyou" == t.state.partner
                                      ? "#FE4839"
                                      : "#5495E6";
                                g().showModal({
                                  content:
                                    a.resultMessage ||
                                    "查看您已有一个相同的待支付订单，重复下单可能无法享受优惠哦～",
                                  confirmText: "查看订单",
                                  cancelText: "继续预订",
                                  cancelColor: "#666",
                                  confirmColor: c,
                                  success: function (t) {
                                    if (t.confirm) {
                                      o.hasTipRepeatOrder = !1;
                                      var a = o.state.source,
                                        c = void 0 === a ? "wechat" : a;
                                      o.navigateTo({
                                        url: "/pages/taroCRN/ticket/pages/orderDetail/index?orderNumber="
                                          .concat(s, "&source=")
                                          .concat(
                                            c,
                                            "&fromPage=ticketBook_repeat"
                                          ),
                                        callback: function (e) {
                                          e && o.getNewCouponList();
                                        },
                                      });
                                    } else
                                      G.Z.showLoading("继续预订"),
                                        (e.orderCheckFlag = 0),
                                        o.createOrder(e, i, n);
                                  },
                                });
                              } else {
                                if (n) {
                                  var r = "".concat(
                                    a.resultMessage,
                                    "。您本次兑换的优惠券90天内购票仍可使用。"
                                  );
                                  g().showModal({
                                    content: r,
                                    showCancel: !1,
                                    confirmText: "知道了",
                                  });
                                }
                                var l = a.resultMessage;
                                t.showCommonDialog({
                                  title: "提示",
                                  content: l || "网络错误，请稍候再试~",
                                });
                              }
                            })
                            .catch(function () {
                              G.Z.hideLoading();
                            });
                        },
                      },
                      {
                        key: "callPayOperation",
                        value: function (e, t) {
                          var i = this;
                          (0, T.VQ)({ business: "ticket", orderNumber: e })
                            .then(function () {
                              G.Z.showToast("支付成功"),
                                v.default.isTieyou || i.giveTicket(e),
                                setTimeout(function () {
                                  Y.F0.redirectTo("order", { orderNumber: e });
                                }, 300);
                            })
                            .catch(function () {
                              G.Z.showLoading("处理中..."),
                                setTimeout(function () {
                                  G.Z.hideLoading();
                                  var n = i.state.source;
                                  i.navigateTo({
                                    url: "/pages/taroCRN/ticket/pages/orderDetail/index?orderNumber="
                                      .concat(e, "&source=")
                                      .concat(
                                        n,
                                        "&fromPage=ticketBook_repeat&hasExchange="
                                      )
                                      .concat(t),
                                    callback: function (e) {
                                      e && i.getNewCouponList();
                                    },
                                  });
                                }, 800);
                            });
                        },
                      },
                      {
                        key: "checkFormList",
                        value: function (e) {
                          var t = this.state.fillInNumberLimit;
                          if ("O" == t) {
                            var i = e[0];
                            Se(i);
                          } else
                            "A" == t &&
                              e.forEach(function (e) {
                                Se(e);
                              });
                          return (
                            this.setState({ formList: e }),
                            N._.flattenDeep(e).every(function (e) {
                              return 0 == e.isShowTip;
                            })
                          );
                        },
                      },
                      {
                        key: "giveTicket",
                        value: function (e) {
                          var t = this;
                          setTimeout(
                            (0, s.Z)(
                              (0, o.Z)().mark(function i() {
                                var n, a, s, c, r;
                                return (0, o.Z)().wrap(function (i) {
                                  for (;;)
                                    switch ((i.prev = i.next)) {
                                      case 0:
                                        return (
                                          (a = t.state),
                                          (s = a.ticketNum),
                                          (c = a.price),
                                          (i.next = 3),
                                          (0, x.dz)({ orderNumber: e })
                                        );
                                      case 3:
                                        1 ===
                                          (null == (r = i.sent)
                                            ? void 0
                                            : r.resultCode) &&
                                          null != r &&
                                          null !== (n = r.orderBaseInfo) &&
                                          void 0 !== n &&
                                          n.showOrderNumber &&
                                          (0, x.Kz)({
                                            orderNumber: e,
                                            showOrderNumber:
                                              r.orderBaseInfo.showOrderNumber,
                                            orderPrice: s * c,
                                          })
                                            .then(function (e) {
                                              1 === e.resultCode &&
                                                console.log(
                                                  "报名结果---报名成功"
                                                );
                                            })
                                            .catch(function (e) {
                                              return console.log(e);
                                            });
                                      case 5:
                                      case "end":
                                        return i.stop();
                                    }
                                }, i);
                              })
                            ),
                            100
                          );
                        },
                      },
                      {
                        key: "onSelectProduct",
                        value: function (e, t) {
                          var i,
                            n,
                            a = this,
                            o = this.state.productSale;
                          null == o ||
                            null === (i = o.propertyList) ||
                            void 0 === i ||
                            i.forEach(function (i) {
                              var n;
                              e === (null == i ? void 0 : i.propertyId) &&
                                (null == i ||
                                  null === (n = i.propertyValueInfoList) ||
                                  void 0 === n ||
                                  n.forEach(function (e) {
                                    (null == e ? void 0 : e.propertyValueId) ===
                                    t
                                      ? (e.selected = !e.selected)
                                      : (e.selected = !1);
                                  }));
                            }),
                            null == o ||
                              null === (n = o.propertyList) ||
                              void 0 === n ||
                              n.forEach(function (e) {
                                var t;
                                null == e ||
                                  null === (t = e.propertyValueInfoList) ||
                                  void 0 === t ||
                                  t.forEach(function (t) {
                                    var i,
                                      n,
                                      a,
                                      s = t.resourceIdList || [];
                                    null == o ||
                                      null === (i = o.propertyList) ||
                                      void 0 === i ||
                                      null ===
                                        (n = i.filter(function (t) {
                                          return (
                                            (null == e
                                              ? void 0
                                              : e.propertyId) !==
                                            (null == t ? void 0 : t.propertyId)
                                          );
                                        })) ||
                                      void 0 === n ||
                                      n.forEach(function (e) {
                                        var t,
                                          i,
                                          n =
                                            (null == e ||
                                            null ===
                                              (t = e.propertyValueInfoList) ||
                                            void 0 === t ||
                                            null ===
                                              (i = t.find(function (e) {
                                                return null == e
                                                  ? void 0
                                                  : e.selected;
                                              })) ||
                                            void 0 === i
                                              ? void 0
                                              : i.resourceIdList) || [];
                                        (null == n ? void 0 : n.length) > 0 &&
                                          (s = s.filter(function (e) {
                                            return n.includes(e);
                                          }));
                                      }),
                                      null !== (a = s) &&
                                      void 0 !== a &&
                                      a.length
                                        ? (t.disabled = !1)
                                        : (t.disabled = !0);
                                  });
                              }),
                            this.setState({ productSale: o }, function () {
                              return a.updateResourced();
                            });
                        },
                      },
                      {
                        key: "updateResourced",
                        value: function () {
                          var e,
                            t,
                            i,
                            n,
                            a,
                            o = this,
                            s = this.state.resourceIdList;
                          null === (e = this.state.productSale) ||
                            void 0 === e ||
                            null === (t = e.propertyList) ||
                            void 0 === t ||
                            t.forEach(function (e) {
                              var t,
                                i,
                                n =
                                  (null == e ||
                                  null === (t = e.propertyValueInfoList) ||
                                  void 0 === t ||
                                  null ===
                                    (i = t.find(function (e) {
                                      return null == e ? void 0 : e.selected;
                                    })) ||
                                  void 0 === i
                                    ? void 0
                                    : i.resourceIdList) || [];
                              (null == n ? void 0 : n.length) > 0 &&
                                (s = s.filter(function (e) {
                                  return n.includes(e);
                                }));
                            }),
                            1 ===
                              (null === (i = s) || void 0 === i
                                ? void 0
                                : i.length) &&
                              this.setState(
                                {
                                  resourceId:
                                    null === (n = s) || void 0 === n
                                      ? void 0
                                      : n[0],
                                  commonPassengers:
                                    null ===
                                      (a = this.state.commonPassengers) ||
                                    void 0 === a
                                      ? void 0
                                      : a.map(function (e) {
                                          return (e.isSelected = !1), e;
                                        }),
                                },
                                function () {
                                  var e;
                                  o.queryResourceDetail({ resourceIDList: s });
                                  var t = o.state.multiPriceCalendarList;
                                  o.handleDateList(
                                    (null == t ||
                                    null ===
                                      (e = t.find(function (e) {
                                        var t;
                                        return (
                                          e.resourceID ===
                                          (null === (t = s) || void 0 === t
                                            ? void 0
                                            : t[0])
                                        );
                                      })) ||
                                    void 0 === e
                                      ? void 0
                                      : e.dateList) || []
                                  );
                                }
                              );
                        },
                      },
                      {
                        key: "checkProduct",
                        value: function () {
                          var e,
                            t = this.state.productSale,
                            i = "";
                          if (
                            (null == t ||
                            null === (e = t.propertyList) ||
                            void 0 === e
                              ? void 0
                              : e.length) > 0
                          )
                            for (
                              var n = t.propertyList, a = 0;
                              a < n.length;
                              a++
                            ) {
                              var o, s;
                              if (
                                !(null === (o = n[a]) ||
                                void 0 === o ||
                                null === (s = o.propertyValueInfoList) ||
                                void 0 === s
                                  ? void 0
                                  : s.find(function (e) {
                                      return e.selected;
                                    }))
                              ) {
                                var c;
                                i = "请选择".concat(
                                  null === (c = n[a]) || void 0 === c
                                    ? void 0
                                    : c.propertyName
                                );
                                break;
                              }
                            }
                          return i;
                        },
                      },
                      {
                        key: "onTips",
                        value: function (e) {
                          this.setState({ selectedTips: e });
                        },
                      },
                      {
                        key: "goToPolicy",
                        value: function (e) {
                          var t =
                              1 === e
                                ? "https://market.suanya.com/document/static/train/ticketrisknew.html"
                                : "https://market.suanya.com/document/static/train/bookticketnew.html",
                            i = v.default.isTieyou ? "1003" : "1002";
                          (t = ""
                            .concat(t, "?version=")
                            .concat(new Date().valueOf(), "&appId=")
                            .concat(i)),
                            N.Z.commonNavigator(t);
                        },
                      },
                      {
                        key: "onZengXin",
                        value: function () {
                          var e = this;
                          this.showCommonDrawer({
                            hideTitle: !0,
                            className: "ticket-book-zengxin-pop",
                            content: function () {
                              return (0, L.tZ)(fe, {
                                data: e.state.zengxinConfigs,
                              });
                            },
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t = this,
                            i = this.state,
                            n = i.partner,
                            a = i.useDateTagList,
                            o = i.isShowMoreDateBtn,
                            s = i.mainResInfo,
                            c = i.ticketName,
                            r = i.price,
                            l = i.ticketNum,
                            u = i.limitSaleTag,
                            d = i.fillInNumberLimit,
                            h = i.unitQuantity,
                            m = i.commonPassengers,
                            f = i.formList,
                            g = i.cardTypeList,
                            _ = i.exchanageCouponInfo,
                            y = i.discountList,
                            N = i.isAllowExchange,
                            w = i.hadShowTip,
                            T = i.selectedDate,
                            x = i.hasInit,
                            Z = i.isShowMoreDiscount,
                            k = i.isTieyou,
                            C = i.openBuyReading,
                            S = i.isShowExtraView,
                            b = i.isShowTipModal,
                            P = i.tipType,
                            E = i.isShowPromotionRule,
                            X = i.isShowExchangeRule,
                            M = i.ruleTextArray,
                            F = i.isLogin,
                            R = i.contactPhone,
                            A = i.isNeedEmail,
                            j = i.email,
                            z = i.resourceId,
                            Y = i.mainRes,
                            $ = i.productSale,
                            J = i.isLoading,
                            U = i.selectedTips,
                            G = i.zengxinConfigs,
                            ee = this.calTotalPrice(),
                            te = this.calDecreaseTotal();
                          return (0, L.BX)(p.Block, {
                            children: [
                              (0, L.BX)(p.View, {
                                style: "display: flex;flex-direction: column;",
                                children: [
                                  J
                                    ? (0, L.BX)(p.View, {
                                        className: "sketelonWrap",
                                        children: [
                                          (0, L.BX)(p.View, {
                                            className: "skeleton-item",
                                            style: "padding:30rpx 30rpx 32rpx",
                                            children: [
                                              (0, L.BX)(p.View, {
                                                className: "bd",
                                                children: [
                                                  (0, L.tZ)(p.View, {
                                                    className: "tit",
                                                    style:
                                                      "padding-left:10rpx;margin-bottom:20rpx",
                                                    children: (0, L.tZ)(
                                                      p.View,
                                                      { className: "useDate" }
                                                    ),
                                                  }),
                                                  (0, L.BX)(p.View, {
                                                    className:
                                                      "book-date-inner tip",
                                                    style:
                                                      "border-bottom: 1rpx solid #eee",
                                                    children: [
                                                      [1, 2, 3].map(function (
                                                        e,
                                                        t
                                                      ) {
                                                        return (0, L.tZ)(
                                                          p.View,
                                                          {
                                                            className:
                                                              "dateItem",
                                                          },
                                                          t
                                                        );
                                                      }),
                                                      (0, L.tZ)(p.View, {
                                                        className: "more",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, L.tZ)(p.View, {
                                                className: "book-select",
                                                style:
                                                  "background-color:#fff;margin-top:20rpx",
                                                children: (0, L.BX)(p.View, {
                                                  className: "book-select-bd",
                                                  children: [
                                                    (0, L.BX)(p.View, {
                                                      className: "cont",
                                                      children: [
                                                        (0, L.tZ)(p.View, {
                                                          className:
                                                            "tit ticketTitle",
                                                        }),
                                                        (0, L.tZ)(p.View, {
                                                          className: "txt t2",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, L.BX)(p.View, {
                                                      className: "book-counter",
                                                      children: [
                                                        (0, L.tZ)(p.Text, {
                                                          className:
                                                            "ifont-minus iconfont decrease",
                                                        }),
                                                        (0, L.tZ)(p.Input, {
                                                          type: "num",
                                                          className:
                                                            "input-num",
                                                          disabled: "true",
                                                        }),
                                                        (0, L.tZ)(p.Text, {
                                                          className:
                                                            "ifont-add iconfont decrease",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(p.View, {
                                            className: "book-white",
                                            children: [
                                              (0, L.tZ)(p.View, {
                                                className: "tit tit1",
                                              }),
                                              (0, L.BX)(p.View, {
                                                className: "pasg-select",
                                                children: [
                                                  [1, 2, 3].map(function (
                                                    e,
                                                    t
                                                  ) {
                                                    return (0, L.tZ)(
                                                      p.View,
                                                      {
                                                        className: "item pas1",
                                                      },
                                                      t
                                                    );
                                                  }),
                                                  (0, L.tZ)(p.View, {
                                                    className: "more pas1",
                                                  }),
                                                ],
                                              }),
                                              (0, L.tZ)(p.View, {
                                                className: "pasg-add",
                                                children: [1, 2, 3].map(
                                                  function (e, t) {
                                                    return (0, L.BX)(
                                                      p.View,
                                                      {
                                                        className:
                                                          "item inpItem",
                                                        children: [
                                                          (0, L.tZ)(p.View, {
                                                            className:
                                                              "inpLeft",
                                                          }),
                                                          (0, L.tZ)(p.View, {
                                                            className:
                                                              "inpRight",
                                                          }),
                                                        ],
                                                      },
                                                      t
                                                    );
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, L.tZ)(p.View, {
                                            className: "book-white",
                                            children: (0, L.BX)(p.View, {
                                              className: "couponWrap",
                                              style:
                                                "height:50rpx;padding-bottom:30rpx",
                                              children: [
                                                (0, L.tZ)(p.Text, {
                                                  className: "couponTitle",
                                                  children: "优惠券",
                                                }),
                                                (0, L.tZ)(p.Text, {
                                                  className: "couponTitle",
                                                  children:
                                                    "暂无优惠券可使用呀呀",
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      })
                                    : (0, L.BX)(p.View, {
                                        className:
                                          "book-view " +
                                          ("tieyou" == n ? "ty" : "zx"),
                                        children: [
                                          (0, L.BX)(p.View, {
                                            className: "book-white",
                                            style: "padding-bottom:30rpx",
                                            children: [
                                              (0, L.tZ)(p.View, {
                                                className: "tit",
                                                children:
                                                  (null == s
                                                    ? void 0
                                                    : s.name) || "订单填写",
                                              }),
                                              (0, L.tZ)(V, {
                                                dateList: a,
                                                selectedDate: T,
                                                useDateClick: this.useDateClick,
                                                isShowMoreDateBtn: o,
                                                showCalendar: this.showCalendar,
                                              }),
                                              (null == $ ||
                                              null === (e = $.propertyList) ||
                                              void 0 === e
                                                ? void 0
                                                : e.length) > 0 &&
                                                (0, L.tZ)(D, {
                                                  productList:
                                                    null == $
                                                      ? void 0
                                                      : $.propertyList,
                                                  onSelectProduct:
                                                    this.onSelectProduct,
                                                }),
                                              !!c &&
                                                (0, L.tZ)(B, {
                                                  name: c,
                                                  price: r,
                                                  ticketNum: l,
                                                  mainResInfo: s,
                                                  decreaseBtnClick:
                                                    this.decreaseBtnClick,
                                                  addBtnClick: this.addBtnClick,
                                                  showModal:
                                                    this.showBuyReadingModal,
                                                  limitSaleTag: u,
                                                  showCommonDrawer:
                                                    this.showCommonDrawer,
                                                }),
                                            ],
                                          }),
                                          (0, L.tZ)(pe, {
                                            onZengXin: this.onZengXin,
                                            data: G,
                                          }),
                                          (0, L.tZ)(Q, {
                                            fillInNumberLimit: d,
                                            ticketNum: l,
                                            unitQuantity: h,
                                            formList: f,
                                            commonPassengers: m,
                                            chooseTourist:
                                              this.beforeChooseTourist,
                                            contactPhone: R,
                                            onPutPhone: this.onPutPhone,
                                            isNeedEmail: A,
                                            email: j,
                                            onPutEmail: this.onPutEmail,
                                            onMorePas: this.onMorePas,
                                            onEdit: this.onFormEdit,
                                            onTips: this.onTips,
                                            selectedTips: U,
                                          }),
                                          (0, L.BX)(p.View, {
                                            className: "book-white offers-box",
                                            children: [
                                              (0, L.BX)(p.View, {
                                                className: "offers-hd",
                                                children: [
                                                  "优惠信息",
                                                  _ &&
                                                    _.length > 0 &&
                                                    (!y || 0 == y.length) &&
                                                    !N &&
                                                    !w &&
                                                    (0, L.tZ)(p.Text, {
                                                      className: "txtTitle",
                                                      children:
                                                        "勾选积分兑换后，可减" +
                                                        _[0].couponPrice +
                                                        "元",
                                                    }),
                                                ],
                                              }),
                                              (0, L.BX)(p.View, {
                                                className: "offers-lst",
                                                children: [
                                                  (0, L.BX)(p.View, {
                                                    className: "item",
                                                    style:
                                                      "padding-bottom:24rpx",
                                                    children: [
                                                      (0, L.BX)(p.View, {
                                                        className: "offers-bd",
                                                        children: [
                                                          (0, L.BX)(p.View, {
                                                            className: "cont",
                                                            children: [
                                                              (0, L.BX)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "stit",
                                                                  children: [
                                                                    (0, L.tZ)(
                                                                      p.Text,
                                                                      {
                                                                        className:
                                                                          "tag-orage",
                                                                        children:
                                                                          "惠",
                                                                      }
                                                                    ),
                                                                    "优惠促销",
                                                                    (0, L.tZ)(
                                                                      p.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-detail iconfont hitSlop",
                                                                        id: "ALAg",
                                                                        onClick:
                                                                          this
                                                                            .toggelPromotionRule,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, L.tZ)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "txt",
                                                                  children: (0,
                                                                  L.tZ)(
                                                                    p.Text,
                                                                    {
                                                                      children:
                                                                        H(
                                                                          y,
                                                                          T,
                                                                          x
                                                                        )
                                                                          .message,
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          T &&
                                                            (0, L.BX)(p.View, {
                                                              className: "rbox",
                                                              style:
                                                                "padding:" +
                                                                (Z
                                                                  ? "0"
                                                                  : "20rpx 30rpx"),
                                                              id: "ALAh",
                                                              onClick:
                                                                this
                                                                  .showMoreDiscount,
                                                              children: [
                                                                H(y, T, x, l)
                                                                  .price > 0 &&
                                                                  (0, L.tZ)(
                                                                    p.Text,
                                                                    {
                                                                      className:
                                                                        "color-red",
                                                                      children:
                                                                        "-¥" +
                                                                        H(
                                                                          y,
                                                                          T,
                                                                          x,
                                                                          l
                                                                        ).price,
                                                                    }
                                                                  ),
                                                                !Z &&
                                                                  y &&
                                                                  y.length >
                                                                    0 &&
                                                                  (0, L.tZ)(
                                                                    p.Text,
                                                                    {
                                                                      className:
                                                                        "ifont-arr iconfont",
                                                                    }
                                                                  ),
                                                              ],
                                                            }),
                                                        ],
                                                      }),
                                                      T &&
                                                        Z &&
                                                        y &&
                                                        !!y.length &&
                                                        (0, L.tZ)(p.View, {
                                                          className:
                                                            "offers-select",
                                                          children: y.map(
                                                            function (e, i) {
                                                              return (0, L.tZ)(
                                                                p.Block,
                                                                {
                                                                  children:
                                                                    e.couponList &&
                                                                    e.couponList
                                                                      .length >
                                                                      0 &&
                                                                    (0, L.BX)(
                                                                      p.View,
                                                                      {
                                                                        className:
                                                                          "lst " +
                                                                          (q(e)
                                                                            .isSelected
                                                                            ? "cur"
                                                                            : ""),
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            L.BX)(
                                                                              p.View,
                                                                              {
                                                                                style:
                                                                                  "flex:1;display:flex;flex-direction:row;justify-content:center",
                                                                                id: "ALAi",
                                                                                onClick:
                                                                                  t.discountItemClick,
                                                                                "data-item":
                                                                                  e,
                                                                                "data-status":
                                                                                  q(
                                                                                    e
                                                                                  )
                                                                                    .isSelected,
                                                                                children:
                                                                                  [
                                                                                    (0,
                                                                                    L.tZ)(
                                                                                      p.Text,
                                                                                      {
                                                                                        className:
                                                                                          (q(
                                                                                            e
                                                                                          )
                                                                                            .isSelected
                                                                                            ? "ifont-radioed color-primary"
                                                                                            : "ifont-radio") +
                                                                                          " iconfont",
                                                                                      }
                                                                                    ),
                                                                                    (0,
                                                                                    L.tZ)(
                                                                                      p.View,
                                                                                      {
                                                                                        className:
                                                                                          "cont",
                                                                                        children:
                                                                                          q(
                                                                                            e
                                                                                          )
                                                                                            .text,
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            L.BX)(
                                                                              p.View,
                                                                              {
                                                                                className:
                                                                                  "rbox",
                                                                                "data-item":
                                                                                  e,
                                                                                id: "ALAj",
                                                                                onClick:
                                                                                  t.jumpToCouponList,
                                                                                children:
                                                                                  [
                                                                                    q(
                                                                                      e
                                                                                    )
                                                                                      .price >
                                                                                      0 &&
                                                                                      (0,
                                                                                      L.tZ)(
                                                                                        p.Text,
                                                                                        {
                                                                                          children:
                                                                                            "-¥" +
                                                                                            q(
                                                                                              e
                                                                                            )
                                                                                              .price,
                                                                                        }
                                                                                      ),
                                                                                    1 ==
                                                                                      e.type &&
                                                                                      !!e
                                                                                        .couponList
                                                                                        .length &&
                                                                                      (0,
                                                                                      L.tZ)(
                                                                                        p.Text,
                                                                                        {
                                                                                          className:
                                                                                            "ifont-arr iconfont",
                                                                                          style:
                                                                                            "color:" +
                                                                                            (q(
                                                                                              e
                                                                                            )
                                                                                              .isSelected
                                                                                              ? "#333"
                                                                                              : "#ccc"),
                                                                                        }
                                                                                      ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                },
                                                                i
                                                              );
                                                            }
                                                          ),
                                                        }),
                                                    ],
                                                  }),
                                                  (0, L.tZ)(p.View, {
                                                    className: "item",
                                                    children: (0, L.BX)(
                                                      p.View,
                                                      {
                                                        className: "offers-bd",
                                                        children: [
                                                          (0, L.BX)(p.View, {
                                                            className: "cont",
                                                            children: [
                                                              (0, L.BX)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "stit",
                                                                  children: [
                                                                    (0, L.tZ)(
                                                                      p.Text,
                                                                      {
                                                                        className:
                                                                          "tag-red",
                                                                        children:
                                                                          "兑",
                                                                      }
                                                                    ),
                                                                    "积分兑换",
                                                                    (0, L.tZ)(
                                                                      p.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-detail iconfont hitSlop",
                                                                        id: "ALAk",
                                                                        onClick:
                                                                          this
                                                                            .toggleExchangeRule,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (!T || !x) &&
                                                                (0, L.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "txt",
                                                                    children:
                                                                      "选择日期后，查看可用积分",
                                                                  }
                                                                ),
                                                              T &&
                                                                _.length > 0 &&
                                                                (0, L.BX)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "txt",
                                                                    style:
                                                                      "display:flex;flex-direction:row;align-items:center;color:" +
                                                                      (O(y)
                                                                        ? "#ccc"
                                                                        : "#666"),
                                                                    children: [
                                                                      _[0]
                                                                        .rewardValue +
                                                                        "积分兑换" +
                                                                        _[0]
                                                                          .couponPrice +
                                                                        "元券",
                                                                      O(y)
                                                                        ? (0,
                                                                          L.tZ)(
                                                                            p.Text,
                                                                            {
                                                                              children:
                                                                                "（不可与优惠促销同享）",
                                                                            }
                                                                          )
                                                                        : (0,
                                                                          L.tZ)(
                                                                            p.Text,
                                                                            {
                                                                              className:
                                                                                "tag-line " +
                                                                                (k
                                                                                  ? "ty"
                                                                                  : "zx"),
                                                                              children:
                                                                                "立减" +
                                                                                _[0]
                                                                                  .couponPrice +
                                                                                "元",
                                                                            }
                                                                          ),
                                                                    ],
                                                                  }
                                                                ),
                                                              T &&
                                                                !_.length &&
                                                                x &&
                                                                (0, L.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "txt",
                                                                    style:
                                                                      "color:#ccc",
                                                                    children:
                                                                      "暂无可兑换积分",
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                          (0, L.tZ)(p.View, {
                                                            className: "rbox",
                                                            children:
                                                              N &&
                                                              (0, L.tZ)(
                                                                p.Text,
                                                                {
                                                                  className:
                                                                    "color-red",
                                                                  style:
                                                                    "margin-right:5px",
                                                                  children:
                                                                    "-¥" +
                                                                    _[0]
                                                                      .couponPrice,
                                                                }
                                                              ),
                                                          }),
                                                          T &&
                                                            _ &&
                                                            _[0] &&
                                                            (0, L.tZ)(
                                                              p.Switch,
                                                              {
                                                                disabled: !T,
                                                                checked: N,
                                                                onChange:
                                                                  this
                                                                    .switchChange,
                                                                className:
                                                                  "wx-switch-input " +
                                                                  (k
                                                                    ? "ty"
                                                                    : "zx"),
                                                              }
                                                            ),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, L.tZ)(p.View, {
                                                className: "",
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(p.View, {
                                            className: "px-view",
                                            children: [
                                              (0, L.tZ)(p.View, {
                                                className: "pxTxt",
                                                children:
                                                  "已阅读并同意以下协议",
                                              }),
                                              (0, L.BX)(p.View, {
                                                className: "pxTxt",
                                                children: [
                                                  "点击立即支付表示已阅读并同意",
                                                  (0, L.tZ)(p.Text, {
                                                    className: "color-primary",
                                                    style: "font-weight: 500",
                                                    onClick: function () {
                                                      return t.goToPolicy(1);
                                                    },
                                                    children:
                                                      "《高风险项目警示》",
                                                  }),
                                                  "，",
                                                  (0, L.tZ)(p.Text, {
                                                    className: "color-primary",
                                                    style: "font-weight: 500",
                                                    onClick: function () {
                                                      return t.goToPolicy(2);
                                                    },
                                                    children: "《预订条款》",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, L.tZ)(p.Image, {
                                            src: v.default.isTieyou
                                              ? "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_dbpx_ty@3x.png"
                                              : "https://images3.c-ctrip.com/ztrip/train_bin/ll/jdxq_dbpx_zx@3x.png",
                                            className: "px-icon",
                                          }),
                                          (0, L.tZ)(p.View, {
                                            className: "blank-botm",
                                          }),
                                        ],
                                      }),
                                  (0, L.tZ)(p.View, {
                                    className: "buy-reading-wrap",
                                    children: (0, L.tZ)(K.Z, {
                                      data: {
                                        isTieyou: "tieyou" == n,
                                        openBuyReading: C,
                                        activeMainRes: s,
                                        isLogin: F,
                                      },
                                      closeBuyReading: this.closeBuyReading,
                                      goToBook: this.goToBook,
                                      afterLoginRoute: this.afterLoginRoute,
                                    }),
                                  }),
                                  (0, L.BX)(p.View, {
                                    className: "book-botm book-botm-v2",
                                    children: [
                                      (0, L.BX)(p.View, {
                                        className: "cont priceWrap",
                                        children: [
                                          (0, L.tZ)(p.View, {
                                            className: "price totalPrice",
                                            style: "font-size:44rpx",
                                            children: (T && ee) || 0,
                                          }),
                                          te > 0 &&
                                            (0, L.tZ)(p.View, {
                                              className: "decWrap",
                                              children: (0, L.tZ)(p.Text, {
                                                className: "decreaseText",
                                                children: "已减" + te + "元",
                                              }),
                                            }),
                                        ],
                                      }),
                                      (0, L.BX)(p.View, {
                                        id: "ALAl",
                                        onClick: this.toggleDetail,
                                        className: "book-detail",
                                        style: "padding:0 12rpx 0 10rpx",
                                        children: [
                                          "明细",
                                          (0, L.tZ)(p.Text, {
                                            className:
                                              (S
                                                ? "ifont-arrdown"
                                                : "ifont-arrup") + " iconfont",
                                          }),
                                        ],
                                      }),
                                      (0, L.tZ)(p.Button, {
                                        className: "btn-book btn-red",
                                        id: "ALAm",
                                        onClick: this.goPayCenter,
                                        children: "去支付",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, L.tZ)(p.View, {
                                className:
                                  "pop-mask book-price-detail " +
                                  (S ? "active" : ""),
                                id: "ALAn",
                                onClick: this.toggleDetail,
                                children: (0, L.BX)(p.View, {
                                  className: "pop-botm pop-detail",
                                  children: [
                                    (0, L.tZ)(p.View, {
                                      className: "tit",
                                      children: "费用明细",
                                    }),
                                    (0, L.BX)(p.View, {
                                      className: "item",
                                      children: [
                                        (0, L.tZ)(p.View, {
                                          className: "cont",
                                          children: c,
                                        }),
                                        (0, L.BX)(p.View, {
                                          className: "rbox",
                                          style: "color:#FE4839",
                                          children: [
                                            "￥" + r + " x",
                                            (0, L.tZ)(p.Text, {
                                              className: "tgrey",
                                              style: "color:#FE4839",
                                              children: l,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    N &&
                                      _ &&
                                      _.length > 0 &&
                                      (0, L.BX)(p.View, {
                                        className: "item",
                                        children: [
                                          (0, L.BX)(p.View, {
                                            className: "cont",
                                            style:
                                              "font-weight:500;display:flex;align-items:center",
                                            children: [
                                              (0, L.tZ)(p.View, {
                                                className: "cIconWrap",
                                                children: (0, L.tZ)(p.Text, {
                                                  className: "couponIcon",
                                                  children: "兑",
                                                }),
                                              }),
                                              "积分兑换",
                                            ],
                                          }),
                                          (0, L.tZ)(p.View, {
                                            className: "rbox",
                                            style: "color:#FE4839",
                                            children: "-￥" + _[0].couponPrice,
                                          }),
                                        ],
                                      }),
                                    W(y, l).isShow &&
                                      (0, L.BX)(p.View, {
                                        className: "item",
                                        children: [
                                          (0, L.BX)(p.View, {
                                            className: "cont",
                                            style:
                                              "font-weight:500;display:flex;align-items:center",
                                            children: [
                                              (0, L.tZ)(p.View, {
                                                className: "cIconWrap",
                                                style:
                                                  "background-Color:#FF7D00",
                                                children: (0, L.tZ)(p.Text, {
                                                  className: "couponIcon",
                                                  style:
                                                    "background-Color:#FF7D00",
                                                  children: "惠",
                                                }),
                                              }),
                                              (0, L.tZ)(p.Text, {
                                                children: W(y, l).text,
                                              }),
                                            ],
                                          }),
                                          (0, L.tZ)(p.View, {
                                            className: "rbox",
                                            style: "color:#FE4839",
                                            children: "-￥" + W(y, l).total,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                              b &&
                                (0, L.tZ)(p.View, {
                                  class: "mask",
                                  onTouchMove: this.noop,
                                }),
                              b &&
                                (0, L.tZ)(p.View, {
                                  className: "dialog",
                                  onTouchMove: this.noop,
                                  children: (0, L.BX)(p.View, {
                                    className: "content",
                                    children: [
                                      (0, L.tZ)(p.View, {
                                        className: "title",
                                        children:
                                          2 == P
                                            ? "积分兑换提示"
                                            : "优惠促销提示",
                                      }),
                                      2 == P
                                        ? (0, L.tZ)(p.View, {
                                            className: "itemContent",
                                            style:
                                              "margin-top:15px;margin-bottom:20px",
                                            children:
                                              "您已选择的优惠促销与积分兑换不可同时使用，您确定使用积分兑换吗？",
                                          })
                                        : (0, L.tZ)(p.View, {
                                            className: "itemContent",
                                            style:
                                              "margin-top:15px;margin-bottom:20px",
                                            children:
                                              "您已选择的积分兑换与优惠促销不可同时使用，您确定使用优惠促销吗？",
                                          }),
                                      2 == P
                                        ? (0, L.BX)(p.View, {
                                            style:
                                              "display:flex;flex-direction: row;justify-content:space-between;align-items: center",
                                            children: [
                                              (0, L.tZ)(p.Button, {
                                                className: "btn-grey",
                                                id: "ALAw",
                                                onClick: this.useExchangeClick,
                                                style:
                                                  "width:240rpx;margin:0;border-radius:10rpx;background:#f5f5f5;color:#666",
                                                children: "用积分兑换",
                                              }),
                                              (0, L.tZ)(p.Button, {
                                                className: "btn-primary",
                                                id: "ALAx",
                                                onClick: this.useDiscountClick,
                                                style:
                                                  "width:240rpx;margin:0;border-radius:10rpx;",
                                                children: "用优惠促销",
                                              }),
                                            ],
                                          })
                                        : (0, L.BX)(p.View, {
                                            style:
                                              "display:flex;flex-direction: row;justify-content:space-between;align-items: center",
                                            children: [
                                              (0, L.tZ)(p.Button, {
                                                className: "btn-grey",
                                                id: "ALAy",
                                                onClick: this.useDiscountClick,
                                                style:
                                                  "width:240rpx;margin:0;border-radius:10rpx;background:#f5f5f5;color:#666",
                                                children: "用优惠促销",
                                              }),
                                              (0, L.tZ)(p.Button, {
                                                className: "btn-primary",
                                                id: "ALAz",
                                                onClick: this.useExchangeClick,
                                                style:
                                                  "width:240rpx;margin:0;border-radius:10rpx;",
                                                children: "用积分兑换",
                                              }),
                                            ],
                                          }),
                                    ],
                                  }),
                                }),
                              E &&
                                (0, L.tZ)(p.View, {
                                  className: "mask",
                                  onTouchMove: this.noop,
                                }),
                              E &&
                                (0, L.tZ)(p.View, {
                                  className: "dialog",
                                  onTouchMove: this.noop,
                                  children: (0, L.BX)(p.View, {
                                    className: "content",
                                    children: [
                                      (0, L.tZ)(p.View, {
                                        className: "title",
                                        children: "优惠促销说明",
                                      }),
                                      (0, L.tZ)(p.View, {
                                        className: "itemTitle",
                                        children:
                                          "1、我是会员，为什么不能使用会员折扣？",
                                      }),
                                      (0, L.tZ)(p.View, {
                                        className: "itemContent",
                                        children:
                                          "会员折扣适用于平台大部分景点门票，部分门票已提供最低价格，不参与会员折扣。",
                                      }),
                                      (0, L.tZ)(p.View, {
                                        className: "itemTitle",
                                        style: "margin-top:15rpx",
                                        children: "2、为什么找不到优惠券了？",
                                      }),
                                      (0, L.tZ)(p.View, {
                                        className: "itemContent",
                                        children:
                                          "能使用的券都会在优惠促销中展示，部分门票已提供最低价格，不可使用优惠券。",
                                      }),
                                      (0, L.tZ)(p.View, {
                                        className: "closeIcon",
                                        id: "ALBA",
                                        onClick: this.toggelPromotionRule,
                                        children: (0, L.tZ)(p.View, {
                                          className: "closeRadius",
                                          children: (0, L.tZ)(p.Text, {
                                            className:
                                              "iconfont ifont-closed closeX",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              X &&
                                (0, L.tZ)(p.View, {
                                  className: "mask",
                                  onTouchMove: this.noop,
                                }),
                              X &&
                                (0, L.tZ)(p.View, {
                                  className: "dialog",
                                  onTouchMove: this.noop,
                                  children: (0, L.BX)(p.View, {
                                    className: "content",
                                    children: [
                                      (0, L.tZ)(p.View, {
                                        className: "title",
                                        style: "margin-bottom:15px",
                                        children: "积分兑换规则",
                                      }),
                                      M.map(function (e, t) {
                                        return (0,
                                        L.tZ)(p.View, { className: "itemContent", style: "margin-bottom:12px", children: e }, t);
                                      }),
                                      (0, L.tZ)(p.Button, {
                                        className: "btn-primary",
                                        id: "ALBB",
                                        onClick: this.closeExchangeRule,
                                        style:
                                          "width:510rpx;margin-top:20px;border-radius: 88rpx;",
                                        children: "知道了",
                                      }),
                                    ],
                                  }),
                                }),
                              (0, L.tZ)(I.Z, {
                                ref: function (e) {
                                  t.onDialogAttach(e);
                                },
                              }),
                              (0, L.tZ)(ae, {
                                ref: function (e) {
                                  return (t.$PassengerListNode = e);
                                },
                                onConfirm: this.dealPasListSel,
                                onEdit: this.onEdit,
                                navigateTo: this.navigateTo,
                                showMultiButtonDialog:
                                  this.showMultiButtonDialog,
                                showCommonDialog: this.showCommonDialog,
                                resourceId: z,
                                selectedDate: T,
                                eduCertificationInfo:
                                  null == Y ? void 0 : Y.eduCertificationInfo,
                              }),
                              (0, L.tZ)(ce, {
                                ref: function (e) {
                                  return (t.$EditPassengerNode = e);
                                },
                                onCardList: this.onCardList,
                                navigateTo: this.navigateTo,
                                addPassenger: this.addPassenger,
                                showMultiButtonDialog:
                                  this.showMultiButtonDialog,
                              }),
                              (0, L.tZ)(le, {
                                cardTypeList: g,
                                ref: function (e) {
                                  return (t.$CardListNode = e);
                                },
                                onConfirm: this.chooseCard,
                              }),
                              (0, L.tZ)(I.Z, {
                                ref: function (e) {
                                  t.onDialogAttach(e);
                                },
                              }),
                              (0, L.tZ)(me, {
                                onRef: function (e) {
                                  return (t.$CalenderSelector = e);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(m.default.Component))
              ) || n;
          Page(
            (0, a.createPageConfig)(
              Pe,
              "pages/ticket/packageA/book/book",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "订单填写",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [14856, 3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(83430);
        }),
          e.O();
      },
    ]);
})();
