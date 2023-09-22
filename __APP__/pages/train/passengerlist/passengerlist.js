!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/dc0cfe7c36c66175a01e7585a0cfebf3.js"),
    require("../sub-common/9cf383cff2ba8ce0456965e69ba11b63.js"),
    require("../sub-common/023c833735f89bfd8e4bfa6050ae7715.js"),
    require("../sub-common/19f27d7cebe94aa1035a5e0048e105a3.js"),
    require("../sub-common/8e7fedfd866fcd380b23fd0a31b6f284.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [33097],
      {
        91976: function (e, t, n) {
          var i,
            r = n(32180),
            a = n(74921),
            s = n(22276),
            o = n(298),
            c = n(79301),
            u = n(95308),
            l = n(57042),
            d = n(24460),
            h = n(21867),
            f = n(86066),
            m = n(81957),
            p = n(71515),
            g = n(92954),
            v = n.n(g),
            y = n(79910),
            b = n(52500),
            S = n(25391),
            T = n(96158),
            w = n(18783),
            P = n(49120),
            x = n(13025),
            N = n(10741),
            k = n(77900),
            Z = n(79792),
            C = n(8271),
            I = n.n(C),
            E = n(20592),
            A = n(45742),
            _ = n(52740),
            D = n(48813),
            V = function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.onLogin,
                i = t.login12306Name,
                r = t.logedin,
                a = t.credit12306,
                s = t.useUpper12306Text,
                o = {
                  title: "未登录12306账号",
                  btnText: "去登录",
                  btnClass: "login",
                  renderSubContent: function () {
                    return s
                      ? a
                        ? (0, D.BX)(p.View, {
                            children: [
                              "认证12306会员后此单可获",
                              (0, D.tZ)(p.Text, {
                                className: "color-red",
                                children: a,
                              }),
                              "积分",
                            ],
                          })
                        : (0, D.tZ)(p.Text, {
                            children: "认证12306会员后此单可获积分",
                          })
                      : (0, D.tZ)(p.Text, {
                          children: "出票更快，购票可获积分",
                        });
                  },
                },
                c = {
                  title: i,
                  btnText: "切换账号",
                  btnClass: "switch",
                  renderSubContent: function () {
                    return (0, D.tZ)(p.Text, {
                      className: "txt",
                      children: "优先使用此12306账号为您出票",
                    });
                  },
                },
                u = r ? c : o;
              return (0, D.BX)(p.View, {
                className: "login-bar-with-12306 flex-align-items-center",
                children: [
                  (0, D.BX)(p.View, {
                    className: "lbox flex-1 flex-align-items-center",
                    children: [
                      (0, D.tZ)(p.Text, { className: "ifont-12306 iconfont" }),
                      (0, D.BX)(p.View, {
                        className: "cont",
                        children: [
                          (0, D.tZ)(p.View, {
                            className: "title",
                            children: u.title,
                          }),
                          (0, D.tZ)(p.View, {
                            className: "sub-cont",
                            children:
                              null === (e = u.renderSubContent) || void 0 === e
                                ? void 0
                                : e.call(u),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, D.tZ)(p.View, {
                    className: "rbox",
                    children: (0, D.tZ)(p.View, {
                      className: "login-btn ".concat(r ? "" : "unlogin"),
                      id: "AKFS",
                      onClick: n,
                      children: u.btnText,
                    }),
                  }),
                ],
              });
            },
            B = n(63899),
            L = function (e) {
              var t = e.memberPas,
                n = void 0 === t ? [] : t,
                i = e.pointAssignees,
                r = void 0 === i ? [] : i,
                a = e.onConfirm,
                s = n.filter(function (e) {
                  return !!e.chosen;
                }).length,
                o = r.filter(function (e) {
                  return !!e.chosen;
                }).length,
                c = s + o;
              return c <= 0
                ? null
                : (0, D.tZ)(B.Z, {
                    className: "trn-psg-list-footer",
                    children: (0, D.tZ)(p.View, {
                      className: "btn",
                      id: "AKFR",
                      onClick: a,
                      children:
                        c > 0
                          ? "已选"
                              .concat(c, "位")
                              .concat(o > 0 ? "受让人" : "乘客")
                          : "请选择乘客",
                    }),
                  });
            },
            F = n(26498),
            z = n(34229),
            R = n(86977);
          !(function (e) {
            (e.PASSENGER = "passenger"), (e.ASSIGNEE = "assignee");
          })(i || (i = {}));
          var K,
            G = [
              { name: "乘车人", key: i.PASSENGER },
              { name: "受让人", key: i.ASSIGNEE, tip: "积分兑车票" },
            ];
          !(function (e) {
            (e.InviteModal = "inviteModal"),
              (e.InvitePasSuccess = "InvitePasSuccess");
          })(K || (K = {}));
          var X = [
              "学生票每年最多享4次购票优惠",
              "乘车区间必须与学生优惠区间路段一致",
            ],
            M = "smart",
            U = "addAssignee",
            W = void 0,
            O = function (e) {
              var t = e.tabs,
                n = void 0 === t ? [] : t,
                i = e.selectedTabKey,
                r = e.onChange;
              return (0, D.BX)(p.View, {
                className: "trn-common-tab flex flex-center",
                children: [
                  null == n
                    ? void 0
                    : n.map(function (e, t) {
                        return (0,
                        D.tZ)(p.View, { className: "tab-item flex-1 " + (e.key === i ? "cur" : ""), id: "AKFT", onClick: r.bind(W, e.key), children: (0, D.BX)(p.View, { className: "text", children: [e.name, e.tip && (0, D.BX)(p.View, { className: "tag bottom", children: [e.tip, (0, D.tZ)(p.Image, { className: "trigons", src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/img_tag@3x.webp", mode: "aspectFill", webp: !0 })] })] }) }, t);
                      }),
                  (0, D.tZ)(p.View, {
                    className: "active-line",
                    style: {
                      width: "".concat(100 / n.length, "%"),
                      transform: "translateX(".concat(
                        100 *
                          n.findIndex(function (e) {
                            return e.key === i;
                          }),
                        "%)"
                      ),
                      transition: "transform .5s ease",
                    },
                  }),
                ],
              });
            },
            $ = function (e) {
              var t = e.btns;
              return t.length > 0
                ? (0, D.tZ)(p.View, {
                    className: "flex flex-center btns-view ",
                    children: t.map(function (e, t) {
                      return e.onSubmit
                        ? (0, D.tZ)(p.Form, {
                            reportSubmit: "true",
                            className: "flex-1 btn-item",
                            onSubmit: e.onSubmit,
                            children: (0, D.BX)(p.Button, {
                              formType: "submit",
                              className: "flex flex-center btn",
                              children: [
                                (0, D.tZ)(p.Image, {
                                  src: e.icon,
                                  className: "btn-icon",
                                  mode: "aspectFit",
                                  webp: !0,
                                }),
                                (0, D.tZ)(p.Text, { children: e.name }),
                              ],
                            }),
                          })
                        : (0, D.BX)(
                            p.Button,
                            {
                              className: "flex-1 flex flex-center btn-item",
                              onClick: function () {
                                var t;
                                null === (t = e.action) ||
                                  void 0 === t ||
                                  t.call(e);
                              },
                              id: e.shareId,
                              openType: e.shareId ? "share" : "",
                              children: [
                                (0, D.tZ)(p.Image, {
                                  src: e.icon,
                                  className: "btn-icon",
                                  mode: "aspectFit",
                                  webp: !0,
                                }),
                                (0, D.tZ)(p.Text, { children: e.name }),
                              ],
                            },
                            t
                          );
                    }),
                  })
                : null;
            },
            Q = function () {
              var e,
                t,
                n,
                i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = i.data,
                a = void 0 === r ? {} : r,
                s = i.onCheck,
                o = i.onEdit,
                c = i.onConvertStudentToAdult,
                u = i.onConvertStudentToAdultReverse,
                l = i.isDisableChosenView,
                d = function () {
                  return (
                    (0, b.useEffect)(function () {
                      (0, P.getCurrentPage)().ubtTrace(
                        "TZWBuyPassengerList_PassengerInfo_Edit_exposure",
                        {
                          PageId: (0, P.getCurrentPage)().pageId,
                          clickType: a.isStudentToAdult
                            ? "已改为成人票"
                            : "本次改为成人",
                          ExpoType: a._isStudentPreferenceNumLack ? 1 : 2,
                        }
                      );
                    }, []),
                    (0, D.BX)(p.View, {
                      className: "flex flex-center no-student-discount-view",
                      children: [
                        (0, D.tZ)(p.View, {
                          className: "flex-1 left-view",
                          children: a._isStudentPreferenceNumLack
                            ? (0, D.BX)(p.Block, {
                                children: [
                                  "当前学生乘客本学年的",
                                  (0, D.BX)(p.Text, {
                                    className: "active",
                                    children: [
                                      a._zxQueryStudentInfo.preferenceAllNum,
                                      "次优惠机会已用完",
                                    ],
                                  }),
                                  "，请购买成人票继续下单",
                                ],
                              })
                            : (0, D.tZ)(p.Block, {
                                children: a.isStudentToAdult
                                  ? "当前已改为成人票，如需购买学生票，请点击右侧按钮"
                                  : "学生票每年优惠"
                                      .concat(
                                        a._zxQueryStudentInfo.preferenceAllNum,
                                        "次，超过"
                                      )
                                      .concat(
                                        a._zxQueryStudentInfo.preferenceAllNum,
                                        "次或乘车区间不在优惠区间内，可购买成人票"
                                      ),
                              }),
                        }),
                        (0, D.tZ)(p.View, { className: "dash" }),
                        a.isStudentToAdult
                          ? (0, D.tZ)(p.View, {
                              className: "right-btn",
                              id: "AKFU",
                              onClick: u,
                              children: "已改为成人票",
                            })
                          : (0, D.tZ)(p.View, {
                              className: "right-btn active",
                              id: "AKFV",
                              onClick: c,
                              children: "本次改为成人",
                            }),
                      ],
                    })
                  );
                };
              return (0, D.BX)(p.View, {
                className: "trn-psglist-psg-item",
                children: [
                  (0, D.BX)(p.View, {
                    className: "flex flex-center content ".concat(
                      a._disabled ? "disabled" : ""
                    ),
                    children: [
                      (0, D.tZ)(p.Text, {
                        className: "iconfont2 ifont2-edit icon-edit",
                        id: "AKFW",
                        onClick: o,
                      }),
                      (0, D.BX)(p.View, {
                        className: "right flex-1 flex flex-center",
                        id: "AKFX",
                        onClick: s,
                        children: [
                          (0, D.BX)(p.View, {
                            className: "info flex-1 flex flex-column",
                            children: [
                              (0, D.BX)(p.View, {
                                className: "flex flex-center name",
                                children: [
                                  (0, D.tZ)(p.View, {
                                    className: "title",
                                    children: a._passengerName,
                                  }),
                                  null === (e = a._tags) || void 0 === e
                                    ? void 0
                                    : e.map(function (e, t) {
                                        return (0,
                                        D.tZ)(p.View, { className: "tag bd-1rpx ".concat(e.type || "normal", "-tag"), children: e.name }, t);
                                      }),
                                ],
                              }),
                              (0, D.tZ)(p.View, {
                                className: "desc",
                                children:
                                  a._passengerDesc ||
                                  (null === (t = a._renderPassengerDesc) ||
                                  void 0 === t
                                    ? void 0
                                    : t.call(a)),
                              }),
                            ],
                          }),
                          (0, D.BX)(p.View, {
                            className: "flex flex-center option-view",
                            children: [
                              (null === (n = a._renderTextView) || void 0 === n
                                ? void 0
                                : n.call(a)) &&
                                (0, D.tZ)(p.View, {
                                  className: "status",
                                  children: a._renderTextView(),
                                }),
                              !l &&
                                (0, D.tZ)(F.Z, { size: 20, checked: a.chosen }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  !!a._isShowStudentTicketRightsInfo && (0, D.tZ)(d, {}),
                ],
              });
            },
            H = function (e) {
              var t = e.isShowNoDiscountTip,
                n = void 0 !== t && t;
              return (0, D.BX)(p.View, {
                className: "student-tip",
                children: [
                  (0, D.tZ)(p.View, {
                    className: "desc",
                    children: n
                      ? "当前学生乘客本学年的4次优惠机会已用完，请购买成人票继续下单"
                      : "每学年需在学生优惠专区，或前往车站办理学生优惠资质核验，未完成学生优惠资质核验的旅客无法购买学生票，详见购买学生票有关规定。",
                  }),
                  (0, D.tZ)(p.View, {
                    className: "tip-view",
                    children: X.map(function (e, t) {
                      return (0,
                      D.tZ)(p.View, { className: "tip-item", children: (0, D.tZ)(p.Text, { children: e }) }, t);
                    }),
                  }),
                ],
              });
            },
            j = function (e) {
              var t = e.onDetail,
                n = e.is2023NewRule4Kids,
                i = e.isShowCrossEnvTips,
                r = e.memberPas,
                a = (0, R.Uy)("kidTipsInPassengerList") || "",
                s =
                  '<font color="#FD8700">铁路局新规：</font>自2023年1月1日乘车起，儿童票实行车票实名制管理，需用儿童本人证件购票/取票进站。如需携带儿童一起出行，请添加儿童乘客。';
              if (
                (n &&
                  !!a &&
                  r.some(function (e) {
                    return e.isChild && e.chosen;
                  }) &&
                  (s = a),
                i && (s = "铁路局规定：跨境列车仅支持选择护照类型乘车人"),
                !s)
              )
                return null;
              var o =
                "<div style='overflow:hidden;white-space:nowrap;text-overflow:ellipsis;'>".concat(
                  s,
                  "</div>"
                );
              return (0, D.BX)(p.View, {
                className: "notice-view flex flex-center",
                id: "AKFa",
                onClick: null == t ? void 0 : t.bind(W, s),
                children: [
                  (0, D.tZ)(z.ZtRichText, {
                    nodes: o,
                    space: "nbsp",
                    className: "flex-1 notice-content",
                  }),
                  (0, D.tZ)(p.Text, { className: "icon iconfont2 ifont2-arr" }),
                ],
              });
            },
            J = function (e) {
              var t = e.text,
                n = void 0 === t ? "下拉刷新列表查看最新乘客信息" : t;
              return (0, D.tZ)(p.View, {
                className: "flex flex-center refesh-tip",
                children: n,
              });
            },
            q = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "",
                i =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "";
              return e.map(function (e) {
                var r = [];
                1 == e.PassengerType || (3 == e.PassengerType && e.convertStu)
                  ? r.push({ name: "成人票" })
                  : 2 == e.PassengerType
                  ? r.push({ name: "儿童票" })
                  : 3 != e.PassengerType ||
                    e.convertStu ||
                    r.push({ name: "学生票" }),
                  e.isInvited && r.push({ name: "微信好友", type: "green" }),
                  e.isSelf && r.push({ name: "账号本人", type: "blue" });
                var a =
                    !k.Z.isValidChineseName(e.CNName) &&
                    "CN" === e.Nationality &&
                    i !== M,
                  s = !1;
                if (t) {
                  if (-1 !== ["2", "7", "8"].indexOf(e.cardType)) {
                    if (e.CardTimeLimit) {
                      var c = I()(e.CardTimeLimit).diff(I()(n), "day") >= 1;
                      s = !c;
                    } else s = !0;
                    e.Gender || (s = !0);
                  }
                  "2" !== e.cardType ||
                    (e.Nationality && e.IssueAt) ||
                    (s = !0);
                }
                var u =
                  !!e._zxQueryStudentInfo &&
                  e.isSelf &&
                  e.chosen &&
                  e._isStudentPreferenceNumLack &&
                  !e.isStudentToAdult;
                return (0, o.Z)(
                  (0, o.Z)({}, e),
                  {},
                  {
                    _passengerName: e.pasName,
                    _disabled: !e.Mobile || e.newPas || a || s,
                    _tags: r,
                    _isShowStudentTicketRightsInfo: u,
                    _renderPassengerDesc: function () {
                      return a
                        ? (0, D.tZ)(p.View, {
                            className: "identity",
                            children: (0, D.tZ)(p.View, {
                              className: "warn-txt",
                              children:
                                "铁路局规定：公民使用中国护照需使用中文姓名",
                            }),
                          })
                        : e.isChild
                        ? (0, D.tZ)(p.Block, {
                            children:
                              e.idcard.text && e.idcard.no
                                ? (0, D.tZ)(p.View, {
                                    className: "identity",
                                    children:
                                      e.idcard.text + " " + e.idcard.showCode,
                                  })
                                : (0, D.tZ)(p.View, {
                                    className: "identity",
                                    children: "出生日期 " + e.Birthday,
                                  }),
                          })
                        : (0, D.tZ)(p.View, {
                            className: "identity",
                            children: e.newPas
                              ? (0, D.tZ)(p.View, {
                                  className: "warn-txt",
                                  children:
                                    "乘客信息已过期，点击重新输入证件信息",
                                })
                              : e.idcard.text && e.idcard.no
                              ? (0, D.tZ)(p.Block, {
                                  children: e.Mobile
                                    ? s
                                      ? (0, D.tZ)(p.View, {
                                          className: "warn-txt",
                                          children: "请完善乘客信息",
                                        })
                                      : (0, D.tZ)(p.Text, {
                                          children:
                                            e.idcard.text +
                                            " " +
                                            e.idcard.showCode,
                                        })
                                    : (0, D.tZ)(p.View, {
                                        className: "warn-txt",
                                        children:
                                          "铁路局防疫新规，乘客补全手机号后方可购票",
                                      }),
                                })
                              : (0, D.tZ)(p.Text, {
                                  children: "信息不全，点击补充",
                                }),
                          });
                    },
                  }
                );
              });
            },
            Y = function (e) {
              var t = e.list,
                n = void 0 === t ? [] : t,
                r = e.onCheck,
                a = e.onEdit,
                s = e.onDelete,
                o = e.addNewPas,
                c = e.onInvite,
                u = e.isSupportInvite,
                l = e.hasFlightTrip,
                d = e.lastTripDepartDate,
                h = e.onConvertStudentToAdult,
                f = e.fromPage,
                m = [];
              u &&
                (m = m.concat([
                  {
                    name: "微信好友",
                    icon: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_yqwxhy@3x.webp",
                    onSubmit: c,
                  },
                ])),
                (m = m.concat([
                  {
                    name: "新增乘客",
                    icon: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_tjck@3x.webp",
                    action: o,
                  },
                ]));
              var g = q(n, l, d, f);
              return (0, D.BX)(p.Block, {
                children: [
                  (0, D.tZ)($, { btns: m }),
                  (0, D.tZ)(J, {}),
                  g.map(function (e, t) {
                    return (0, D.tZ)(
                      Q,
                      {
                        data: e,
                        onCheck: function () {
                          r({ index: t, type: i.PASSENGER });
                        },
                        onEdit: function () {
                          a({ index: t, type: i.PASSENGER });
                        },
                        onDelete: function () {
                          s(t);
                        },
                        onConvertStudentToAdult: function () {
                          h(t),
                            (0, P.getCurrentPage)().ubtTrace(
                              "TZWBuyPassengerList_PassengerInfo_Edit_click",
                              {
                                PageId: (0, P.getCurrentPage)().pageId,
                                clickType: "本次改为成人",
                                ExpoType: e._isStudentPreferenceNumLack ? 1 : 2,
                              }
                            );
                        },
                        onConvertStudentToAdultReverse: function () {
                          h(t, !0),
                            (0, P.getCurrentPage)().ubtTrace(
                              "TZWBuyPassengerList_PassengerInfo_Edit_click",
                              {
                                PageId: (0, P.getCurrentPage)().pageId,
                                clickType: "已改为成人票",
                                ExpoType: e._isStudentPreferenceNumLack ? 1 : 2,
                              }
                            );
                        },
                      },
                      "".concat(t, "-").concat(e.PassengerID)
                    );
                  }),
                ],
              });
            },
            ee = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return e.map(function (e) {
                var t = [];
                return (
                  e.ticket_type_name && t.push({ name: e.ticket_type_name }),
                  (0, o.Z)(
                    (0, o.Z)({}, e),
                    {},
                    {
                      _passengerName: e.name,
                      _tags: t,
                      _renderPassengerDesc: function () {
                        return (e.id_type_name || "") + " " + e.id_no;
                      },
                      _renderTextView: function () {
                        return (0, D.tZ)(p.Text, {
                          className: "effect-status ".concat(
                            "已生效" !== e.status_name ? "warn-txt" : ""
                          ),
                          children: e.status_name,
                        });
                      },
                    }
                  )
                );
              });
            },
            te = function (e) {
              var t = e.list,
                n = void 0 === t ? [] : t,
                r = e.onCheck,
                a = e.onEdit,
                s = e.addNewPas,
                o = e.isDisableChosenView,
                c = [
                  {
                    name: "新增受让人",
                    icon: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/icon_tjck@3x.webp",
                    action: s,
                  },
                ],
                u = ee(n);
              return (0, D.BX)(p.Block, {
                children: [
                  (0, D.tZ)($, { btns: c }),
                  (0, D.tZ)(J, {}),
                  u.map(function (e, t) {
                    return (0, D.tZ)(
                      Q,
                      {
                        data: e,
                        onCheck: function () {
                          r({ index: t, type: i.ASSIGNEE });
                        },
                        onEdit: function () {
                          a({ index: t, type: i.ASSIGNEE });
                        },
                        onDelete: function () {
                          a({ index: t, type: i.ASSIGNEE });
                        },
                        isDisableChosenView: o,
                      },
                      t
                    );
                  }),
                ],
              });
            },
            ne = n(31952);
          function ie() {
            return (0, D.BX)(p.View, {
              className: "train-assignee-tip-module",
              children: [
                (0, D.BX)(p.View, {
                  className: "title-content",
                  children: [
                    (0, D.tZ)(p.View, {
                      className: "title",
                      children: "什么是受让人？",
                    }),
                    (0, D.BX)(p.View, {
                      className: "rule",
                      id: "AKFQ",
                      onClick: T.tV,
                      children: [
                        "积分兑换规则",
                        (0, D.tZ)(p.Text, { className: "ifont-arr iconfont" }),
                      ],
                    }),
                  ],
                }),
                (0, D.tZ)(p.View, {
                  children: (0, D.tZ)(ne.Z, {
                    tipList: [
                      "兑换免费车票目前只支持受让人使用。",
                      "受让人是您设置的可共同享受积分兑换车票服务的人。本人默认为受让人，受让人添加上限为8人。",
                      "受让人需通过身份信息核验方可生效，请您准确填写积分受让人基本信息。",
                      "新添加的受让人在添加成功60天（含当天）后生效。",
                    ],
                    className: "train-force-bind-box-tip-list",
                  }),
                }),
              ],
            });
          }
          var re,
            ae = n(81437),
            se = n(25014),
            oe = n(9416),
            ce = n(90129),
            ue = n(94262),
            le = n(25958),
            de = b.default.memo(function (e) {
              var t = e.show,
                n = void 0 !== t && t,
                i = e.isTieyou,
                r = void 0 !== i && i,
                a = e.handleClose,
                s = void 0 === a ? function () {} : a,
                o = e.ubtTrace,
                c = void 0 === o ? function () {} : o;
              (0, b.useEffect)(
                function () {
                  n &&
                    c(197744, {
                      exposureType: "normal",
                      bizKey: "mini_t_fillpage_invite_show",
                    });
                },
                [n]
              );
              return (0, D.tZ)(le.Z, {
                show: n,
                onClose: s,
                hiddenCloseIcon: !0,
                ubtTrace: function () {},
                children: (0, D.BX)(p.View, {
                  className: "train-invite-pas-bd",
                  children: [
                    (0, D.tZ)(p.Image, {
                      src: "https://images3.c-ctrip.com/train/tieyou-mini-img/clock-icon-".concat(
                        r ? "ty" : "zx",
                        ".png"
                      ),
                      className: "clock-icon",
                      mode: "widthFix",
                    }),
                    (0, D.tZ)(p.View, {
                      className: "tit",
                      children: "邀请好友填写个人信息",
                    }),
                    (0, D.tZ)(p.View, {
                      className: "desc",
                      children:
                        "好友填写完毕后，其乘客信息会自动同步到微信好友列表中",
                    }),
                    (0, D.tZ)(p.Button, {
                      openType: "share",
                      className: "invite-btn ".concat(
                        r ? "invite-btn-ty" : "invite-btn-zx"
                      ),
                      id: "AKBs",
                      onClick: function () {
                        c(197746, { bizKey: "mini_t_fillpage_invite_click" });
                      },
                      children: "添加微信好友",
                    }),
                  ],
                }),
              });
            }),
            he = b.default.memo(function (e) {
              var t = e.show,
                n = void 0 !== t && t,
                i = e.isTieyou,
                r = void 0 !== i && i,
                a = e.handleClose,
                s = void 0 === a ? function () {} : a;
              return (0,
              D.tZ)(le.Z, { show: n, onClose: s, hiddenCloseIcon: !0, ubtTrace: function () {}, children: (0, D.BX)(p.View, { className: "train-invite-pas-bd", children: [(0, D.tZ)(p.Image, { src: "https://images3.c-ctrip.com/train/tieyou-mini-img/clock-icon-".concat(r ? "ty" : "zx", ".png"), className: "clock-icon", mode: "widthFix" }), (0, D.tZ)(p.View, { className: "tit", children: "分享成功" }), (0, D.tZ)(p.View, { className: "desc", children: "列表中好友的乘客信息有效期为24h，邀请成功后请及时购票～" }), (0, D.tZ)(p.Button, { openType: "share", className: "invite-btn ".concat(r ? "invite-btn-ty" : "invite-btn-zx"), children: "继续邀请微信好友" })] }) });
            }),
            fe = void 0,
            me = function () {},
            pe = (0, b.forwardRef)(function (e, t) {
              (0, ue.Z)(e);
              var n = (0, b.useState)(null),
                i = (0, ce.Z)(n, 2),
                r = i[0],
                a = i[1],
                s = (0, b.useState)(!1),
                o = (0, ce.Z)(s, 2),
                c = o[0],
                u = o[1],
                l = (0, b.useState)(!1),
                d = (0, ce.Z)(l, 2),
                h = d[0],
                f = d[1];
              (0, b.useImperativeHandle)(t, function () {
                return {
                  showToast: function (e) {
                    a(null == e ? void 0 : e.toast),
                      null == e || e.onConfirm,
                      (me =
                        (null == e ? void 0 : e.onCancel) || function () {}),
                      f(!0);
                  },
                  closeToast: function (e) {
                    (e && e !== (null == r ? void 0 : r.toastCode)) || u(!1);
                  },
                };
              }),
                (0, b.useLayoutEffect)(
                  function () {
                    r &&
                      h &&
                      v().nextTick(function () {
                        u(!0), f(!1);
                      });
                  },
                  [h, r]
                );
              var m = function () {
                for (
                  var e, t = arguments.length, n = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  n[i] = arguments[i];
                null === (e = me) ||
                  void 0 === e ||
                  e.call.apply(e, [fe].concat(n)),
                  u(!1),
                  (me = function () {});
              };
              if (!r) return null;
              switch (r.toastCode) {
                case K.InviteModal:
                  return (0,
                  D.tZ)(de, { show: c, handleClose: m, isTieyou: Z.default.isTieyou });
                case K.InvitePasSuccess:
                  return (0,
                  D.tZ)(he, { show: c, handleClose: m, isTieyou: Z.default.isTieyou });
                default:
                  return null;
              }
            }),
            ge = ["onConfirm", "onCancel"],
            ve = {
              status: _.oB.APPROVED,
              _isStudentPreferenceNumLack: !1,
              authFlag: _.SG.NORMAL,
            },
            ye =
              (0, m.h)(!1, { usePageWrapper: !0 })(
                (re = (function (e) {
                  (0, h.Z)(n, e);
                  var t = (0, f.Z)(n);
                  function n(e) {
                    var r;
                    return (
                      (0, l.Z)(this, n),
                      ((r = t.call(this, e)).disableBgStyle = !0),
                      (r.pageTitle = "选择乘客"),
                      (r.pageRootClassName = "trn-psg-list-view"),
                      (r.pageId = Z.default.isTieyou
                        ? "10650015728"
                        : "10650015727"),
                      (r.zxQueryStudentInfo = null),
                      (r.state = {
                        memberPas: [],
                        isWorkTime: !0,
                        isJianLou: !0,
                        logedin: 0,
                        login12306Name: "",
                        shownLogin12306Name: "",
                        passengerList12306: [],
                        credit12306: 0,
                        useUpper12306Text: !0,
                        useNew12306H5: !0,
                        passengerCountConfig: 5,
                        samePhoneInterceptFlag: 1,
                        isSupportShowAssigneeTab: !1,
                        isSupportShowPassengerTab: !0,
                        memberInfoWith12306: null,
                        pointPayTrainSeatPrice: 0,
                        selectedTabKey: i.PASSENGER,
                        pointAssignees: [],
                        is2023NewRule4Kids: !0,
                        hasFlightTrip: !1,
                        lastTripDepartDate: "",
                        isCrossEnvTrain: !1,
                        isDisableChosenView: !1,
                      }),
                      r
                    );
                  }
                  return (
                    (0, d.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this;
                          v().hideShareMenu && v().hideShareMenu(),
                            this.handleInitPage(),
                            (this.t6AccountIsLostEffectEvent = g.eventCenter.on(
                              A.n.T6_PWD_IS_LOSE_EFFECT,
                              function () {
                                (0, P.showToast)("缓存已过期，请重新登录12306"),
                                  e.handleInitPage();
                              }
                            ));
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          var e;
                          null === (e = this.t6AccountIsLostEffectEvent) ||
                            void 0 === e ||
                            e.off();
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.zxQueryStudentInfo = null;
                        },
                      },
                      {
                        key: "handleInitPage",
                        value: function () {
                          var e = this;
                          T.CZ.call(this);
                          var t,
                            n = this.$instance.router.params,
                            r = n.isJianLou,
                            a = void 0 === r ? 0 : r,
                            s = n.data,
                            o = void 0 === s ? {} : s,
                            c = o.selectedPasList,
                            u = void 0 === c ? [] : c,
                            l = o.credit12306,
                            d = o.useUpper12306Text,
                            h = o.useNew12306H5,
                            f = o.gotoH5PageSwitchOn,
                            m = void 0 === f || f,
                            p = o.passengerCountConfig,
                            g = o.isIncludeNoStuSeat,
                            v = void 0 !== g && g,
                            y = o.isPointPayMode,
                            b = o.isSupportShowAssigneeTab,
                            w = o.pointPayTrainSeatPrice,
                            P = o.switchPointPayModeTips,
                            x = o.hasFlightTrip,
                            N = o.lastTripDepartDate,
                            k = o.fromPage,
                            Z = o.isCrossEnvTrain,
                            C = void 0 !== Z && Z,
                            I = o.memberInfoWith12306;
                          if (
                            ((this.fromPage = k),
                            (this.memberInfoWith12306 = I),
                            m && h && this.getNew12306H5Flag(),
                            S.ZP.getTrain12306Config().then(function (t) {
                              e.setState({ isWorkTime: t.isIn12306WorkTime });
                            }),
                            this.fromPage == U &&
                              (null === (t = this.setPageTitle) ||
                                void 0 === t ||
                                t.call(this, "受让人管理")),
                            this.setState(
                              {
                                isJianLou: !!parseInt(a),
                                credit12306: l,
                                useUpper12306Text: d,
                                useNew12306H5: h,
                                passengerCountConfig: p || 5,
                                isIncludeNoStuSeat: v,
                                isSupportShowAssigneeTab: b,
                                pointPayTrainSeatPrice: w,
                                selectedTabKey:
                                  (y && b) || k == U ? i.ASSIGNEE : i.PASSENGER,
                                switchPointPayModeTips: P,
                                hasFlightTrip: x,
                                lastTripDepartDate: N,
                                isCrossEnvTrain: C,
                                isSupportShowPassengerTab: k !== U,
                                isDisableChosenView: k == U,
                              },
                              function () {
                                b &&
                                  e.ubtTrace("s_trn_z_trace_10650008809", {
                                    bizKey:
                                      "z_mini_passengerEdit_transferee_show",
                                  });
                              }
                            ),
                            k == U)
                          )
                            return this.loadAssigneeData([]);
                          this.loadPasData(y ? [] : u),
                            this.loadAssigneeData(y ? u : []),
                            this.loadMemberInfo(),
                            this.getOpenId(),
                            this.getUserInfo(),
                            this.getConfig();
                        },
                      },
                      {
                        key: "getNew12306H5Flag",
                        value: function () {
                          try {
                            var e = v().getStorageSync("gotoNew12306H5Flag");
                            this.gotoNew12306H5Flag = !e;
                          } catch (e) {
                            this.gotoNew12306H5Flag = !0;
                          }
                        },
                      },
                      {
                        key: "sortPassengerList",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n, i, r;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        (t = this.state.memberPas),
                                          (n = t.findIndex(function (e) {
                                            return e.isSelf;
                                          })) > 0 &&
                                            ((i = t[0]),
                                            (r = t[n]),
                                            (t[0] = r),
                                            (t[n] = i),
                                            this.setState({ memberPas: t }));
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
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "fetchStudentInfo",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e() {
                              var t,
                                n,
                                i,
                                r = arguments;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            !(
                                              r.length > 0 && void 0 !== r[0]
                                            ) || r[0]),
                                          this.state.logedin)
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return", !1);
                                      case 3:
                                        if (!this.zxQueryStudentInfo) {
                                          e.next = 5;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.zxQueryStudentInfo
                                        );
                                      case 5:
                                        return (
                                          (this.fetchStudent =
                                            this.fetchStudent || (0, T.AW)()),
                                          !t && (0, P.showLoading)(),
                                          (e.next = 9),
                                          this.fetchStudent
                                        );
                                      case 9:
                                        if (((e.t0 = e.sent), e.t0)) {
                                          e.next = 12;
                                          break;
                                        }
                                        e.t0 = {};
                                      case 12:
                                        if (
                                          ((n = e.t0),
                                          !t && (0, P.hideLoading)(),
                                          (this.fetchStudent = null),
                                          n)
                                        ) {
                                          e.next = 17;
                                          break;
                                        }
                                        return e.abrupt("return", ve);
                                      case 17:
                                        return (
                                          (i =
                                            n.preferencePreNum >=
                                            n.preferenceAllNum
                                              ? 1
                                              : 0),
                                          (this.zxQueryStudentInfo = (0, o.Z)(
                                            (0, o.Z)({}, n),
                                            {},
                                            { _isStudentPreferenceNumLack: i }
                                          )),
                                          e.abrupt(
                                            "return",
                                            this.zxQueryStudentInfo
                                          )
                                        );
                                      case 20:
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
                        key: "getConfig",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n, i, r;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t = {
                                            ConfigKey:
                                              "ztrip_miniapp_passengerlist",
                                          }),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          (0, x.fu)(t)
                                        );
                                      case 4:
                                        (n = e.sent).ConfigInfo &&
                                        n.ConfigInfo.Content
                                          ? ((i = JSON.parse(
                                              n.ConfigInfo.Content
                                            )),
                                            (r = i.samePhoneInterceptFlag),
                                            this.setState({
                                              samePhoneInterceptFlag: r,
                                            }))
                                          : this.setState({
                                              samePhoneInterceptFlag: 1,
                                            }),
                                          (e.next = 12);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0),
                                          this.setState({
                                            samePhoneInterceptFlag: 1,
                                          });
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 8]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getOpenId",
                        value: function () {
                          var e = this;
                          (0, w.M9)().then(
                            function (t) {
                              var n = t.openid;
                              e.setState({ openId: n });
                            },
                            function () {
                              console.log("获取openId失败");
                            }
                          );
                        },
                      },
                      {
                        key: "loadPasData",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e() {
                              var t,
                                n = this,
                                i = arguments;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            i.length > 0 && void 0 !== i[0]
                                              ? i[0]
                                              : []),
                                          (0, P.showLoading)(),
                                          e.abrupt(
                                            "return",
                                            Promise.all([
                                              this.getNormalPassengerList(t),
                                              this.getInvitedPassengersList(t),
                                            ])
                                              .then(function (e) {
                                                var t;
                                                (t =
                                                  e[0] && e[1]
                                                    ? [].concat(
                                                        (0, s.Z)(e[1]),
                                                        (0, s.Z)(e[0])
                                                      )
                                                    : []),
                                                  n.setState(
                                                    {
                                                      memberPas: (0, se.a$)(
                                                        t,
                                                        n.state
                                                          .passengerList12306
                                                      ),
                                                    },
                                                    (0, u.Z)(
                                                      (0, c.Z)().mark(
                                                        function e() {
                                                          return (0,
                                                          c.Z)().wrap(function (
                                                            e
                                                          ) {
                                                            for (;;)
                                                              switch (
                                                                (e.prev =
                                                                  e.next)
                                                              ) {
                                                                case 0:
                                                                  n.sortPassengerList();
                                                                case 1:
                                                                case "end":
                                                                  return e.stop();
                                                              }
                                                          },
                                                          e);
                                                        }
                                                      )
                                                    )
                                                  );
                                              })
                                              .finally(P.hideLoading)
                                          )
                                        );
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
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "loadAssigneeData",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e() {
                              var t,
                                n,
                                i = arguments;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            i.length > 0 && void 0 !== i[0]
                                              ? i[0]
                                              : []),
                                          (e.next = 3),
                                          (0, T.tp)()
                                        );
                                      case 3:
                                        (n = e.sent),
                                          this.setState({
                                            pointAssignees: n.map(function (e) {
                                              return (0, o.Z)(
                                                (0, o.Z)({}, e),
                                                {},
                                                {
                                                  chosen: t.some(function (t) {
                                                    return (
                                                      t.idcard.no.slice(
                                                        0,
                                                        4
                                                      ) ===
                                                        e.id_no.slice(0, 4) &&
                                                      t.idcard.no.slice(15) ===
                                                        e.id_no.slice(15) &&
                                                      t.pasName === e.name
                                                    );
                                                  }),
                                                }
                                              );
                                            }),
                                          });
                                      case 5:
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
                        key: "loadMemberInfo",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e() {
                              var t;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.t0 = this.memberInfoWith12306),
                                          e.t0)
                                        ) {
                                          e.next = 5;
                                          break;
                                        }
                                        return (e.next = 4), (0, T.S3)();
                                      case 4:
                                        e.t0 = e.sent;
                                      case 5:
                                        (t = e.t0),
                                          this.setState({
                                            memberInfoWith12306: t,
                                          });
                                      case 7:
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
                        key: "getUserInfo",
                        value: function () {
                          var e = this;
                          y.Z.canUseGetUserProfile
                            ? (0, P.getUserProfileInfo)({ getOnly: !0 })
                                .then(function (t) {
                                  var n = t.nickName,
                                    i = t.avatarUrl;
                                  n
                                    ? e.setState({
                                        nickName: n,
                                        avatarUrl:
                                          i ||
                                          "https://images3.c-ctrip.com/zt/wechat/default_invite_avatar.png",
                                      })
                                    : e.setState({
                                        nickName: Z.default.isTieyou
                                          ? "铁友用户"
                                          : "智行用户",
                                        avatarUrl:
                                          "https://images3.c-ctrip.com/zt/wechat/default_invite_avatar.png",
                                      });
                                })
                                .catch(function () {
                                  e.setState({
                                    nickName: Z.default.isTieyou
                                      ? "铁友用户"
                                      : "智行用户",
                                    avatarUrl:
                                      "https://images3.c-ctrip.com/zt/wechat/default_invite_avatar.png",
                                  });
                                })
                            : v().getSetting({
                                success: function (t) {
                                  console.log(t),
                                    t.authSetting["scope.userInfo"]
                                      ? v().getUserInfo({
                                          success: function (t) {
                                            var n = t.userInfo,
                                              i = n.nickName,
                                              r = n.avatarUrl;
                                            e.setState({
                                              nickName: i,
                                              avatarUrl: r,
                                            });
                                          },
                                        })
                                      : e.setState({
                                          nickName: Z.default.isTieyou
                                            ? "铁友用户"
                                            : "智行用户",
                                          avatarUrl:
                                            "https://images3.c-ctrip.com/zt/wechat/default_invite_avatar.png",
                                        });
                                },
                              });
                        },
                      },
                      {
                        key: "getNormalPassengerList",
                        value: function (e) {
                          return S.ZP.getCommonPassenger().then(function (t) {
                            return (
                              t.forEach(function (t) {
                                var n = y._.find(e, function (e) {
                                  return (
                                    e.chosen && e.PassengerID === t.PassengerID
                                  );
                                });
                                (t.chosen = !!n),
                                  (t.isStudentToAdult = !(
                                    null == n || !n.isStudentToAdult
                                  )),
                                  (t.isFreeChild = !(
                                    null == n || !n.isFreeChild
                                  ));
                              }),
                              t
                            );
                          });
                        },
                      },
                      {
                        key: "getInvitedPassengersList",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t = e.filter(function (e) {
                              return e.isInvited && e.chosen;
                            });
                          return (0, N.bPL)({}).then(function (e) {
                            var n = e.resultCode,
                              i = e.userTempPassengerEntityList,
                              r = ["身份证"];
                            if (1 === n) {
                              var a = (void 0 === i ? [] : i).map(function (e) {
                                var t;
                                return {
                                  CNName: e.cnName,
                                  pasName: e.cnName,
                                  IdentityNo: e.identityNo,
                                  cardType: e.identityType,
                                  IdentityType:
                                    null ===
                                      (t = _.BT.find(function (t) {
                                        return (
                                          t.commonServiceCode == e.identityType
                                        );
                                      })) || void 0 === t
                                      ? void 0
                                      : t.serviceName,
                                  idcard: {
                                    type: e.identityType,
                                    text: r[e.identityType - 1],
                                    no: e.identityNo,
                                    showCode: e.identityNo,
                                  },
                                  PassengerType: e.passengerType,
                                  Birthday: ae.Z.getBirthFromCode(e.identityNo),
                                  isInvited: !0,
                                  identityNoPass: e.identityNoPass,
                                  Mobile: e.mobileNoPass,
                                };
                              });
                              return (
                                a.forEach(function (e) {
                                  var n = t.find(function (t) {
                                    return e.identityNoPass == t.identityNoPass;
                                  });
                                  e.chosen = !!n;
                                }),
                                a
                              );
                            }
                            return [];
                          });
                        },
                      },
                      {
                        key: "setTabKey",
                        value: function (e) {
                          this.setState({ selectedTabKey: e });
                        },
                      },
                      {
                        key: "onLogin12306",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e() {
                              var t = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), S.ZP.goto12306H5({})
                                        );
                                      case 2:
                                        T.CZ.call(this, !0, function () {
                                          (t.zxQueryStudentInfo = null),
                                            (t.memberInfoWith12306 = null),
                                            t.loadPasData([]),
                                            t.loadAssigneeData(),
                                            t.loadMemberInfo();
                                        });
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
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onCommonPasSlected",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n, r;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = t.index),
                                          (r = t.type),
                                          (e.next = 3),
                                          this.preActionBeforePasSelected({
                                            type: r,
                                          })
                                        );
                                      case 3:
                                        if (e.sent) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 6:
                                        r === i.PASSENGER && this.choosePas(n),
                                          r === i.ASSIGNEE &&
                                            this.choosePointPas(n);
                                      case 8:
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
                        key: "checkCanTakeKidsUnder14",
                        value: function (e) {
                          var t = this.state.memberPas[e],
                            n = this.state.memberPas.filter(function (t, n) {
                              return !!t.chosen && n !== e;
                            }),
                            i = []
                              .concat((0, s.Z)(n), [
                                (0, o.Z)(
                                  (0, o.Z)({}, t),
                                  {},
                                  { chosen: !t.chosen }
                                ),
                              ])
                              .filter(function (e) {
                                return !!e.chosen;
                              });
                          if (i.length < 2) return !0;
                          var r =
                              i.filter(function (e) {
                                var t = e.Birthday;
                                return (
                                  (I()().valueOf() - I()(t).valueOf()) /
                                    864e5 <=
                                  5110
                                );
                              }).length > 0,
                            a =
                              i.filter(function (e) {
                                var t = e.Birthday;
                                return (
                                  (I()().valueOf() - I()(t).valueOf()) /
                                    864e5 >=
                                  6570
                                );
                              }).length > 0;
                          return !r || a;
                        },
                      },
                      {
                        key: "checkAdultPassengerIsBeyond14",
                        value: function (e) {
                          if (1 == e.PassengerType) {
                            var t = e.Birthday;
                            return !(
                              (I()().valueOf() - I()(t).valueOf()) / 864e5 <
                              5110
                            );
                          }
                          return !0;
                        },
                      },
                      {
                        key: "checkAccountSelfStudentInfo",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n,
                                i,
                                r,
                                a,
                                s,
                                o,
                                u = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          (n = t.find(function (e) {
                                            return (
                                              e.chosen &&
                                              e.isSelf &&
                                              3 == e.PassengerType &&
                                              !e.isStudentToAdult
                                            );
                                          }))
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return", t);
                                      case 3:
                                        return (
                                          (e.next = 5),
                                          this.fetchStudentInfo(!1)
                                        );
                                      case 5:
                                        if (
                                          ((i = e.sent),
                                          (r = i._isStudentPreferenceNumLack),
                                          (a = i.status),
                                          (s = i._noData),
                                          (o = i.authFlag),
                                          a == _.oB.APPROVED)
                                        ) {
                                          e.next = 28;
                                          break;
                                        }
                                        return (
                                          this.ubtTrace(
                                            "TZWBuyPassengerList_StuVerifyPop_exposure",
                                            {
                                              PageId: this.pageId,
                                              ExpoType: r ? 1 : s ? 3 : 2,
                                              Status: a,
                                              Type: o,
                                            }
                                          ),
                                          (e.next = 14),
                                          this.$CommonSceneDrawer.confirmAsync({
                                            title:
                                              _.yK[1 * a] ||
                                              _.yK[_.oB.UNCOMMITTED],
                                            cancelText: "暂时买成人票",
                                            confirmText: "继续买学生票",
                                            content: function () {
                                              return (0, D.BX)(p.View, {
                                                className:
                                                  "child-ticket-tip-content",
                                                children: [
                                                  "铁路局新规：购买学生票（",
                                                  (0, D.tZ)(p.Text, {
                                                    style: { color: "#198CFF" },
                                                    children:
                                                      n.pasName || n.CNName,
                                                  }),
                                                  "）前，需完成学生优惠资质信息核验，否则无法购买学生票影响出行。您可",
                                                  (0, D.tZ)(p.Text, {
                                                    style: { color: "#198CFF" },
                                                    onClick: function () {
                                                      (0, T.Zs)({
                                                        zxStudentInfo:
                                                          u.zxQueryStudentInfo,
                                                      }),
                                                        u.ubtTrace(
                                                          "TZWBuyPassengerList_StuVerifyPop_goVerify_click",
                                                          {
                                                            PageId: u.pageId,
                                                            ExpoType: r
                                                              ? 1
                                                              : s
                                                              ? 3
                                                              : 2,
                                                            Status: a,
                                                            Type: o,
                                                          }
                                                        );
                                                    },
                                                    children: "进行在线办理>",
                                                  }),
                                                  "。",
                                                ],
                                              });
                                            },
                                            ignoreBreak: !0,
                                          })
                                        );
                                      case 14:
                                        if (!e.sent) {
                                          e.next = 22;
                                          break;
                                        }
                                        return (
                                          (n.isStudentToAdult = !1),
                                          (n.chosen = !0),
                                          this.ubtTrace(
                                            "TZWBuyPassengerList_StuVerifyPop_Stu_click",
                                            {
                                              PageId: this.pageId,
                                              ExpoType: r ? 1 : s ? 3 : 2,
                                              Status: a,
                                              Type: o,
                                            }
                                          ),
                                          e.abrupt("return", t)
                                        );
                                      case 22:
                                        return (
                                          (n.isStudentToAdult = !0),
                                          (n.chosen = !0),
                                          this.ubtTrace(
                                            "TZWBuyPassengerList_StuVerifyPop_Adult_click",
                                            {
                                              PageId: this.pageId,
                                              ExpoType: r ? 1 : s ? 3 : 2,
                                              Status: a,
                                              Type: o,
                                            }
                                          ),
                                          e.abrupt("return", t)
                                        );
                                      case 26:
                                        e.next = 33;
                                        break;
                                      case 28:
                                        if (!r) {
                                          e.next = 32;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.showStudentTicketSelectionDialog(
                                            {
                                              pas: n,
                                              memberPas: t,
                                              isPreferenceNumLack: r,
                                            }
                                          )
                                        );
                                      case 32:
                                        return e.abrupt("return", t);
                                      case 33:
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
                        key: "showStudentTicketSelectionDialog",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n,
                                i,
                                r,
                                a,
                                s,
                                o,
                                u = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = t.pas),
                                          (i = t.memberPas),
                                          (r = t.isPreferenceNumLack),
                                          (a = function () {
                                            return (
                                              (n.isStudentToAdult = !1),
                                              (n.chosen = !0),
                                              u.ubtTrace(
                                                "TZWBuyPassengerList_StuConfirmPop_Stu_click",
                                                {
                                                  PageId: u.pageId,
                                                  ExpoType: r
                                                    ? 1
                                                    : n.zxQueryStudentInfo
                                                    ? 2
                                                    : 3,
                                                }
                                              ),
                                              i
                                            );
                                          }),
                                          (s = function () {
                                            return (
                                              (n.isStudentToAdult = !0),
                                              (n.chosen = !0),
                                              u.ubtTrace(
                                                "TZWBuyPassengerList_StuConfirmPop_Adult_click",
                                                {
                                                  PageId: u.pageId,
                                                  ExpoType: r
                                                    ? 1
                                                    : n.zxQueryStudentInfo
                                                    ? 2
                                                    : 3,
                                                }
                                              ),
                                              i
                                            );
                                          }),
                                          (e.next = 5),
                                          this.$CommonSceneDrawer.confirmAsync({
                                            title: r
                                              ? "学生优惠次数不足"
                                              : "确定购买学生票？",
                                            cancelText: r
                                              ? "购买学生票"
                                              : "购买成人票",
                                            confirmText: r
                                              ? "购买成人票"
                                              : "购买学生票",
                                            ignoreBreak: !0,
                                            content: function () {
                                              return (0, D.tZ)(H, {
                                                isShowNoDiscountTip: r,
                                              });
                                            },
                                          })
                                        );
                                      case 5:
                                        if (
                                          ((o = e.sent),
                                          this.ubtTrace(
                                            "TZWBuyPassengerList_StuConfirmPop_exposure",
                                            {
                                              PageId: this.pageId,
                                              ExpoType: r
                                                ? 1
                                                : n.zxQueryStudentInfo
                                                ? 2
                                                : 3,
                                            }
                                          ),
                                          !r)
                                        ) {
                                          e.next = 9;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          (o ? s : a)()
                                        );
                                      case 9:
                                        return e.abrupt(
                                          "return",
                                          (o ? a : s)()
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
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "choosePas",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n,
                                r,
                                a,
                                s,
                                o,
                                u,
                                l,
                                d,
                                h,
                                f,
                                m,
                                g,
                                v,
                                b,
                                S,
                                T,
                                w,
                                x,
                                N,
                                C,
                                E,
                                A = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((n = this.state),
                                          (r = n.memberPas),
                                          (a = n.passengerCountConfig),
                                          (s = n.is2023NewRule4Kids),
                                          (o = n.hasFlightTrip),
                                          (u = n.lastTripDepartDate),
                                          (l = n.isCrossEnvTrain),
                                          (d = r.filter(function (e) {
                                            return e.chosen;
                                          })),
                                          (f = r[(h = t)]),
                                          (m =
                                            !k.Z.isValidChineseName(f.CNName) &&
                                            "CN" === f.Nationality &&
                                            this.fromPage !== M),
                                          f.idcard.text && f.idcard.no && !m)
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        return (
                                          this.onCommonEditPas({
                                            index: t,
                                            type: i.PASSENGER,
                                          }),
                                          e.abrupt(
                                            "return",
                                            (0, P.showToast)("请先补全证件信息")
                                          )
                                        );
                                      case 8:
                                        if (
                                          f.isInvited ||
                                          1 != f.idcard.type ||
                                          k.Z.isValidSFZ(f.idcard.no)
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          (0, P.showToast)(
                                            "您的证件信息有误，请及时更新"
                                          ),
                                          e.abrupt(
                                            "return",
                                            setTimeout(function () {
                                              A.onCommonEditPas({
                                                index: t,
                                                type: i.PASSENGER,
                                              });
                                            }, 600)
                                          )
                                        );
                                      case 11:
                                        if (!l || 2 == f.idcard.type) {
                                          e.next = 13;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.showCommonDialog(
                                            "铁路局规定：乘客证件必须使用护照即可购买本线路车票"
                                          )
                                        );
                                      case 13:
                                        if (!f.isChild) {
                                          e.next = 22;
                                          break;
                                        }
                                        if (
                                          (864e5,
                                          (g = f.Birthday),
                                          (v = I()().valueOf()),
                                          (b = I()(g).valueOf()),
                                          !((v - b) / 864e5 > 5110))
                                        ) {
                                          e.next = 22;
                                          break;
                                        }
                                        return (
                                          this.$CommonSceneDrawer.alert({
                                            title: "不满足儿童票条件",
                                            content:
                                              "您选择的儿童乘客已不满足儿童购票规则，请修改相关乘客信息。",
                                            buttonName: "编辑修改",
                                            onButtonClick: function () {
                                              A.onCommonEditPas({ index: t });
                                            },
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 22:
                                        if (
                                          !o ||
                                          "2" !== f.idcard.type ||
                                          f.Nationality
                                        ) {
                                          e.next = 25;
                                          break;
                                        }
                                        return (
                                          (0, P.showToast)("国籍不能为空"),
                                          e.abrupt(
                                            "return",
                                            setTimeout(function () {
                                              A.onCommonEditPas({
                                                index: t,
                                                type: i.PASSENGER,
                                              });
                                            }, 600)
                                          )
                                        );
                                      case 25:
                                        if (
                                          !o ||
                                          "2" !== f.idcard.type ||
                                          f.IssueAt
                                        ) {
                                          e.next = 28;
                                          break;
                                        }
                                        return (
                                          (0, P.showToast)("发证机关不能为空"),
                                          e.abrupt(
                                            "return",
                                            setTimeout(function () {
                                              A.onCommonEditPas({
                                                index: t,
                                                type: i.PASSENGER,
                                              });
                                            }, 600)
                                          )
                                        );
                                      case 28:
                                        if (
                                          ((S =
                                            -1 !==
                                            ["2", "7", "8"].indexOf(
                                              f.idcard.type
                                            )),
                                          !o || !S || f.Gender)
                                        ) {
                                          e.next = 32;
                                          break;
                                        }
                                        return (
                                          (0, P.showToast)("性别不能为空"),
                                          e.abrupt(
                                            "return",
                                            setTimeout(function () {
                                              A.onCommonEditPas({
                                                index: t,
                                                type: i.PASSENGER,
                                              });
                                            }, 600)
                                          )
                                        );
                                      case 32:
                                        if (!o || !S || f.CardTimeLimit) {
                                          e.next = 35;
                                          break;
                                        }
                                        return (
                                          (0, P.showToast)(
                                            "证件有效期不能为空"
                                          ),
                                          e.abrupt(
                                            "return",
                                            setTimeout(function () {
                                              A.onCommonEditPas({
                                                index: t,
                                                type: i.PASSENGER,
                                              });
                                            }, 600)
                                          )
                                        );
                                      case 35:
                                        if (!o || !S) {
                                          e.next = 40;
                                          break;
                                        }
                                        if (
                                          I()(f.CardTimeLimit).diff(
                                            I()(u),
                                            "day"
                                          ) >= 1
                                        ) {
                                          e.next = 40;
                                          break;
                                        }
                                        return (
                                          (0, P.showToast)("请更新证件有效期"),
                                          e.abrupt(
                                            "return",
                                            setTimeout(function () {
                                              A.onCommonEditPas({
                                                index: t,
                                                type: i.PASSENGER,
                                              });
                                            }, 600)
                                          )
                                        );
                                      case 40:
                                        if (f.Mobile) {
                                          e.next = 43;
                                          break;
                                        }
                                        return (
                                          this.$CommonSceneDrawer.alert({
                                            title: "请补全乘客信息",
                                            content:
                                              "根据铁路局规定，为加强防疫情工作，自2月1日起，需提供每一名乘客本人使用的手机号，方可购票。以便在需要时联系乘客。未成年人、老年人或无手机的旅客可填写监护人或亲友手机号。",
                                            onButtonClick: function () {
                                              A.onCommonEditPas({
                                                index: t,
                                                type: i.PASSENGER,
                                              });
                                            },
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 43:
                                        if (this.checkCanTakeKidsUnder14(h)) {
                                          e.next = 45;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.$CommonSceneDrawer.alert(
                                            "铁路局规定：18岁以下乘客不可独自携带儿童出行"
                                          )
                                        );
                                      case 45:
                                        if (
                                          this.checkAdultPassengerIsBeyond14(f)
                                        ) {
                                          e.next = 47;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.$CommonSceneDrawer.confirm({
                                            content:
                                              '当前证件持有乘客<span style="color:#FD9227">未满14周岁</span>，不可购买成人票，请尽快修改为儿童票再进行购票，否则会影响出票。',
                                            cancelText: "我知道了",
                                            confirmText: "去修改",
                                            onConfirm: function () {
                                              A.onCommonEditPas({
                                                type: i.PASSENGER,
                                                index: t,
                                              });
                                            },
                                            onCancel: function () {},
                                          })
                                        );
                                      case 47:
                                        if (!f.chosen) {
                                          e.next = 54;
                                          break;
                                        }
                                        if (ae.Z.checkDeletable(f, d)) {
                                          e.next = 51;
                                          break;
                                        }
                                        return (
                                          this.$CommonSceneDrawer.alert(
                                            "儿童不能单独出行，请先添加成人"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 51:
                                        (f.chosen = !1), (e.next = 76);
                                        break;
                                      case 54:
                                        if (d.length != a) {
                                          e.next = 58;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.$CommonSceneDrawer.alert(
                                            "一个订单最多只能添加".concat(
                                              a,
                                              "名乘客，超过请分批购买"
                                            )
                                          )
                                        );
                                      case 58:
                                        if (
                                          !f.isChild ||
                                          y._.find(d, function (e) {
                                            return (
                                              1 == e.PassengerType ||
                                              !!e.isStudentToAdult
                                            );
                                          })
                                        ) {
                                          e.next = 62;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          this.$CommonSceneDrawer.alert(
                                            "儿童不能单独出行，请先添加成人"
                                          )
                                        );
                                      case 62:
                                        if (3 != f.PassengerType) {
                                          e.next = 75;
                                          break;
                                        }
                                        if (!this.state.isIncludeNoStuSeat) {
                                          e.next = 67;
                                          break;
                                        }
                                        this.$CommonSceneDrawer.confirm({
                                          title: "选择座席无法享受学生价",
                                          cancelText: "购买成人票",
                                          confirmText: "重选坐席",
                                          content:
                                            "学生票仅享受二等座、硬座、硬卧、无座等座席优惠。当前选择了不支持优惠的座席，请返回修改座席或购买全价成人票",
                                          onCancel: function () {
                                            (f.isStudentToAdult = !0),
                                              (f.chosen = !0),
                                              A.setState({ memberPas: r });
                                          },
                                          onConfirm: function () {
                                            A.navigateBack({
                                              selectedPasList: [],
                                            });
                                          },
                                        }),
                                          (e.next = 72);
                                        break;
                                      case 67:
                                        return (
                                          f.isSelf && this.fetchStudentInfo(),
                                          (e.next = 70),
                                          this.showStudentTicketSelectionDialog(
                                            {
                                              pas: f,
                                              memberPas: r,
                                              isPreferenceNumLack: !1,
                                            }
                                          )
                                        );
                                      case 70:
                                        (T = e.sent),
                                          this.setState({ memberPas: T });
                                      case 72:
                                        return e.abrupt("return", !1);
                                      case 75:
                                        f.chosen = !0;
                                      case 76:
                                        if (s) {
                                          e.next = 79;
                                          break;
                                        }
                                        return (
                                          this.setState({ memberPas: r }),
                                          e.abrupt("return")
                                        );
                                      case 79:
                                        f.chosen && f.isChild
                                          ? ((w = d.filter(function (e) {
                                              return !e.isChild;
                                            })),
                                            (x = d.filter(function (e) {
                                              return e.isFreeChild;
                                            })),
                                            864e5,
                                            (N = f.Birthday),
                                            (C = I()().valueOf()),
                                            (E = I()(N).valueOf()),
                                            (C - E) / 864e5 < 2190 && w > x
                                              ? ((f.chosen = !1),
                                                this.$CommonSceneDrawer.confirm(
                                                  {
                                                    maskClose: !1,
                                                    title: "确认购买儿童票？",
                                                    content: function () {
                                                      return (0, D.BX)(p.View, {
                                                        className:
                                                          "child-ticket-tip-content",
                                                        children: [
                                                          (0, D.BX)(p.View, {
                                                            children: [
                                                              "1. 每一名持票成年人旅客可",
                                                              (0, D.tZ)(
                                                                p.Text,
                                                                {
                                                                  style:
                                                                    "color:#FD9227",
                                                                  children:
                                                                    "免费携带一名未满6周岁且不单独占用席位的儿童乘车(如需座位，可购买优惠价儿童票)",
                                                                }
                                                              ),
                                                              "，超过一名时，超过人数应购买优惠价儿童票",
                                                            ],
                                                          }),
                                                          (0, D.BX)(p.View, {
                                                            children: [
                                                              "2. ",
                                                              (0, D.tZ)(
                                                                p.Text,
                                                                {
                                                                  style:
                                                                    "color:#FD9227",
                                                                  children:
                                                                    "携带儿童出行需持有效证件",
                                                                }
                                                              ),
                                                              "（身份证、户口本或出生医学证明等）",
                                                            ],
                                                          }),
                                                        ],
                                                      });
                                                    },
                                                    renderButtonView: function (
                                                      e
                                                    ) {
                                                      var t = e.close;
                                                      return (0, D.BX)(p.View, {
                                                        className:
                                                          "btn-group child-ticket-tip-btn-view",
                                                        children: [
                                                          (0, D.BX)(p.View, {
                                                            className:
                                                              "btn no ".concat(
                                                                Z.default
                                                                  .isTieyou
                                                                  ? "ty"
                                                                  : "zx"
                                                              ),
                                                            id: "AKFb",
                                                            onClick:
                                                              function () {
                                                                t(),
                                                                  (f.chosen =
                                                                    !0),
                                                                  (f.isFreeChild =
                                                                    !1),
                                                                  A.ubtDevTrace(
                                                                    "o_child_unfree"
                                                                  ),
                                                                  A.setState({
                                                                    memberPas:
                                                                      r,
                                                                  });
                                                              },
                                                            children: [
                                                              (0, D.tZ)(
                                                                p.Image,
                                                                {
                                                                  className:
                                                                    "tag",
                                                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/tag_etyz@3x.webp",
                                                                  mode: "aspectFit",
                                                                  webp: !0,
                                                                }
                                                              ),
                                                              "优惠价儿童票",
                                                            ],
                                                          }),
                                                          (0, D.tZ)(p.View, {
                                                            className:
                                                              "btn yes ".concat(
                                                                Z.default
                                                                  .isTieyou
                                                                  ? "ty"
                                                                  : "zx"
                                                              ),
                                                            id: "AKFc",
                                                            onClick:
                                                              function () {
                                                                t(),
                                                                  (f.chosen =
                                                                    !0),
                                                                  (f.isFreeChild =
                                                                    !0),
                                                                  A.setState({
                                                                    memberPas:
                                                                      r,
                                                                  }),
                                                                  A.ubtDevTrace(
                                                                    "o_child_free"
                                                                  );
                                                              },
                                                            children:
                                                              "免费儿童票",
                                                          }),
                                                        ],
                                                      });
                                                    },
                                                  }
                                                ))
                                              : ((f.isFreeChild = !1),
                                                this.setState({
                                                  memberPas: r,
                                                })))
                                          : this.setState({ memberPas: r });
                                      case 80:
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
                        key: "onCommonEditPas",
                        value: function (e) {
                          var t = e.type,
                            n = e.index;
                          if (t !== i.ASSIGNEE) {
                            var r = n,
                              a = this.state.memberPas[r];
                            this.goPassenger(a);
                          } else this.handleEditAssignees(n);
                        },
                      },
                      {
                        key: "goPassenger",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e(t) {
                              var n, i, r, a, s, o, u, l, d, h, f;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (E.ET.pas = t),
                                          (n = !t),
                                          (i = this.state),
                                          (r = i.login12306Name),
                                          (a = i.login12306Pas),
                                          (s = i.useNew12306H5),
                                          (o = i.memberPas),
                                          (u = void 0 === o ? [] : o),
                                          (l = i.is2023NewRule4Kids),
                                          (d = i.lastTripDepartDate),
                                          (h = i.hasFlightTrip),
                                          (f = i.memberInfoWith12306),
                                          (e.next = 5),
                                          this.navigateToAsync({
                                            url: S.ZP.getTrainPsgUrl(),
                                            ignoreError: !0,
                                            data: {
                                              login12306Name: r,
                                              login12306Pas: a,
                                              useNew12306H5: s,
                                              isEmptyPsgList:
                                                !u || 0 === u.length,
                                              is2023NewRule4Kids: l ? "1" : "",
                                              startCardTimeLimit: d
                                                ? I()(d)
                                                    .add(1, "day")
                                                    .format("YYYY-MM-DD")
                                                : "",
                                              hasFlightTrip: h,
                                              fromPage: this.fromPage,
                                              isShowAssigneeTiper:
                                                this.state.pointAssignees
                                                  .length < 8 &&
                                                n &&
                                                !(null == f || !f.isMember),
                                            },
                                          })
                                        );
                                      case 5:
                                        this.loadPasData(this.state.memberPas),
                                          n && this.loadAssigneeData();
                                      case 7:
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
                        key: "goAssignee",
                        value: function (e) {
                          var t = this;
                          this.state.logedin
                            ? this.navigateTo({
                                url: "/pages/train/assignee/assignee",
                                data: { passenger: e, handleType: e ? 2 : 1 },
                                callback: (function () {
                                  var e = (0, u.Z)(
                                    (0, c.Z)().mark(function e() {
                                      return (0, c.Z)().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (0, P.showLoading)(),
                                                (e.next = 3),
                                                t.loadAssigneeData()
                                              );
                                            case 3:
                                              (0, P.hideLoading)();
                                            case 4:
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
                              })
                            : (0, P.showToast)("请登录12306~");
                        },
                      },
                      {
                        key: "choosePointPas",
                        value: function (e) {
                          var t,
                            n = this.state,
                            i = n.pointAssignees,
                            r = n.memberInfoWith12306,
                            a = n.pointPayTrainSeatPrice,
                            o = void 0 === a ? 0 : a,
                            c = JSON.parse(JSON.stringify(i)),
                            u = c[e];
                          if ("未生效" === c[e].status_name)
                            return this.$CommonSceneDrawer.alert(
                              "乘客".concat(
                                u.name,
                                "身份核验未生效，暂时不能积分购票"
                              )
                            );
                          c[e].chosen = !c[e].chosen;
                          var l =
                              (null == r ||
                              null === (t = r.memberPoint) ||
                              void 0 === t
                                ? void 0
                                : t.totalPoint) || 0,
                            d =
                              c.filter(function (e) {
                                return e.chosen;
                              }).length *
                              o *
                              100;
                          if (l >= d)
                            return (
                              this.setState({ pointAssignees: (0, s.Z)(c) }),
                              void (
                                "护照" === u.id_type_name &&
                                c[e].chosen &&
                                this.$CommonSceneDrawer.alert(
                                  "您已选择使用护照号码购票，取票时请携带护照原件和电子取票号至火车站人工窗口或代售点取票。"
                                )
                              )
                            );
                          this.$CommonSceneDrawer.alert({
                            title: "积分不足，无法兑换",
                            content: "抱歉，积分不足无法兑换！您当前积分为"
                              .concat(l, "（<span style='color:#FF5959'>需要")
                              .concat(d, "积分</span>）"),
                          });
                        },
                      },
                      {
                        key: "handleEditAssignees",
                        value: function (e) {
                          var t = this;
                          if (this.state.logedin) {
                            var n = this.state.pointAssignees[e];
                            n.self
                              ? (0, P.showToast)("当前用户不可编辑")
                              : this.$CommonSceneDrawer.confirm({
                                  title: "删除受让人",
                                  content: "确认删除该受让人吗？",
                                  confirmText: "删除",
                                  cancelText: "取消",
                                  onConfirm: (function () {
                                    var e = (0, u.Z)(
                                      (0, c.Z)().mark(function e() {
                                        var i, r, a;
                                        return (0, c.Z)().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (0, P.showLoading)(),
                                                  (e.next = 3),
                                                  (0, T.Li)({
                                                    reqParams: {
                                                      deleteAssignee: n,
                                                      type: 3,
                                                    },
                                                  })
                                                );
                                              case 3:
                                                if (
                                                  ((i = e.sent),
                                                  (r = i.resultCode),
                                                  (a = i.resultMessage),
                                                  (0, P.showToast)(a),
                                                  1 === r)
                                                ) {
                                                  e.next = 9;
                                                  break;
                                                }
                                                return e.abrupt("return");
                                              case 9:
                                                return (
                                                  (e.next = 11),
                                                  t.loadAssigneeData()
                                                );
                                              case 11:
                                                (0, P.hideLoading)();
                                              case 12:
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
                                });
                          } else (0, P.showToast)("请登录12306~");
                        },
                      },
                      {
                        key: "preActionBeforePasSelected",
                        value: function (e) {
                          var t = this,
                            n = e.type;
                          return new Promise(
                            (function () {
                              var e = (0, u.Z)(
                                (0, c.Z)().mark(function e(r) {
                                  var a, s, u, l, d, h;
                                  return (0, c.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            ((a = t.state),
                                            (s = a.pointAssignees),
                                            (u = a.memberPas),
                                            (l = a.switchPointPayModeTips),
                                            (d = a.selectedTabKey),
                                            !(h =
                                              (n === i.PASSENGER &&
                                                s.find(function (e) {
                                                  return e.chosen;
                                                })) ||
                                              (n === i.ASSIGNEE &&
                                                u.find(function (e) {
                                                  return e.chosen;
                                                }))))
                                          ) {
                                            e.next = 7;
                                            break;
                                          }
                                          return (
                                            (e.next = 5),
                                            t.$CommonSceneDrawer.confirmAsync({
                                              content:
                                                "同一个订单不可混合添加“乘车人”和“受让人”，积分兑换仅支持受让人乘车",
                                              rightButtonName:
                                                n === i.PASSENGER
                                                  ? "使用现金"
                                                  : "使用积分",
                                            })
                                          );
                                        case 5:
                                          if (e.sent) {
                                            e.next = 7;
                                            break;
                                          }
                                          return e.abrupt("return", r(!1));
                                        case 7:
                                          if (!(d === i.ASSIGNEE && !!l)) {
                                            e.next = 13;
                                            break;
                                          }
                                          return (
                                            (e.next = 11),
                                            t.$CommonSceneDrawer.confirmAsync({
                                              content: l,
                                            })
                                          );
                                        case 11:
                                          if (e.sent) {
                                            e.next = 13;
                                            break;
                                          }
                                          return e.abrupt("return", r(!1));
                                        case 13:
                                          if (!h) {
                                            e.next = 16;
                                            break;
                                          }
                                          return (
                                            t.setState(
                                              {
                                                pointAssignees: s.map(function (
                                                  e
                                                ) {
                                                  return (0, o.Z)(
                                                    (0, o.Z)({}, e),
                                                    {},
                                                    { chosen: !1 }
                                                  );
                                                }),
                                                memberPas: u.map(function (e) {
                                                  return (0,
                                                  o.Z)((0, o.Z)({}, e), {}, { chosen: !1 });
                                                }),
                                              },
                                              r.bind(t, !0)
                                            ),
                                            e.abrupt("return")
                                          );
                                        case 16:
                                          r(!0);
                                        case 17:
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
                          );
                        },
                      },
                      {
                        key: "onDeleteCommonPassenger",
                        value: function (e) {
                          var t = this;
                          this.$CommonSceneDrawer.confirm({
                            content: "确认删除该乘车人吗",
                            cancelText: "取消",
                            confirmText: "删除",
                            onConfirm: (function () {
                              var n = (0, u.Z)(
                                (0, c.Z)().mark(function n() {
                                  var i, r, a, s, o, u;
                                  return (0, c.Z)().wrap(function (n) {
                                    for (;;)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          return (
                                            (i = t.state.memberPas[e]),
                                            (r = i.PassengerID),
                                            (a = i.IdentityType),
                                            (s = i.openId || ""),
                                            (o = i.IdentityNo),
                                            (u = i.isTempPassenger || 0),
                                            (n.next = 8),
                                            (0, oe.Kb)({
                                              passengerId: r,
                                              passportType: a,
                                              openId: s,
                                              certificateNum: o,
                                              isTempPassenger: u,
                                            })
                                          );
                                        case 8:
                                          1 === n.sent.resultCode &&
                                            t.loadPasData();
                                        case 10:
                                        case "end":
                                          return n.stop();
                                      }
                                  }, n);
                                })
                              );
                              return function () {
                                return n.apply(this, arguments);
                              };
                            })(),
                          });
                        },
                      },
                      {
                        key: "handleInviteInfos",
                        value: function (e) {
                          var t = this,
                            n = e.detail.formId,
                            i = this.state,
                            r = i.nickName,
                            a = i.openId,
                            s = i.avatarUrl,
                            o = E.ET.train;
                          if (o && o.TrainNumber) {
                            var c = o.DepartureDate,
                              u = o.DepartStation,
                              l = o.ArriveStation,
                              d = o.DepartTime,
                              h = o.ArriveTime,
                              f = o.TrainNumber,
                              m = o.TakeDays,
                              p = o.SeatName,
                              g = {
                                openId: a,
                                formId: n,
                                nickname: r,
                                picUrl: s,
                                userOrderTempInfo: {
                                  stationFrom: u,
                                  stationTo: l,
                                  trainTimes: f,
                                  departureDate: c,
                                  departureTime: d,
                                  arriveTime: h,
                                  arriveDate: I()(c)
                                    .add(m, "day")
                                    .format("YYYY-MM-DD"),
                                  seatName: p,
                                },
                              };
                            (0, oe.hI)(g)
                              .then(function (e) {
                                console.log(e);
                                var n = e.resultCode,
                                  i = e.param;
                                if (1 !== n) return Promise.reject();
                                var r = "pages/trnshare/invite/invite?param="
                                  .concat(i, "&openid=")
                                  .concat(a);
                                t.setState({ sharePath: r }),
                                  t.handleShowModalAsync(K.InviteModal);
                              })
                              .catch(function () {
                                t.$CommonSceneDrawer.alert(
                                  "获取出行信息失败，请稍候再试"
                                );
                              });
                          } else
                            this.$CommonSceneDrawer.alert(
                              "未获取到车次信息，请返回选择车次"
                            );
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          var e = this,
                            t = this.state.sharePath;
                          if (t)
                            return (
                              setTimeout(function () {
                                e.handleShowModalAsync(K.InvitePasSuccess);
                              }, 800),
                              {
                                title: "快来加入行程，我来帮你买票~",
                                path: t,
                                imageUrl:
                                  "https://images3.c-ctrip.com/zt/wechat/fill_in_information.png",
                              }
                            );
                        },
                      },
                      {
                        key: "handleShowModalAsync",
                        value: function (e) {
                          var t = this,
                            n =
                              "string" == typeof e
                                ? { toast: { toastCode: e }, data: {} }
                                : e,
                            i = n.onConfirm,
                            r = n.onCancel,
                            s = (0, a.Z)(n, ge);
                          return new Promise(function (e) {
                            var n;
                            null === (n = t.$CommonToaster) ||
                              void 0 === n ||
                              n.showToast(
                                (0, o.Z)(
                                  (0, o.Z)({}, s),
                                  {},
                                  {
                                    onConfirm: function () {
                                      for (
                                        var t = arguments.length,
                                          n = new Array(t),
                                          r = 0;
                                        r < t;
                                        r++
                                      )
                                        n[r] = arguments[r];
                                      null == i || i.apply(void 0, n),
                                        e({ code: 1, data: n });
                                    },
                                    onCancel: function () {
                                      for (
                                        var t = arguments.length,
                                          n = new Array(t),
                                          i = 0;
                                        i < t;
                                        i++
                                      )
                                        n[i] = arguments[i];
                                      null == r || r.apply(void 0, n),
                                        e({ code: 0, data: n });
                                    },
                                  }
                                )
                              );
                          });
                        },
                      },
                      {
                        key: "confirmPasChoose",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n, r, a, u, l, d, h, f, m, g;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state),
                                          (n = t.memberPas),
                                          (r = t.pointAssignees),
                                          (a = n
                                            .filter(function (e) {
                                              return (
                                                e.chosen &&
                                                !(e.isChild && e.isFreeChild)
                                              );
                                            })
                                            .map(function (e) {
                                              return 3 == e.PassengerType &&
                                                e.isStudentToAdult
                                                ? (0, o.Z)(
                                                    (0, o.Z)({}, e),
                                                    {},
                                                    { PassengerType: 1 }
                                                  )
                                                : e;
                                            })
                                            .sort(function (e) {
                                              return e.isChild ? 1 : -1;
                                            })),
                                          (u = n.filter(function (e) {
                                            return (
                                              e.chosen &&
                                              e.isChild &&
                                              e.isFreeChild
                                            );
                                          })),
                                          (l = a.filter(function (e) {
                                            var t = (0, se.Ay)(e.Birthday);
                                            return (
                                              t >= 18 &&
                                              t <= 70 &&
                                              "身份证" === e.IdentityType
                                            );
                                          })),
                                          (d = []),
                                          l.forEach(function (e) {
                                            d.push(e.Mobile);
                                          }),
                                          (d = (0, s.Z)(new Set(d))),
                                          (h = []),
                                          d.forEach(function (e) {
                                            var t = [];
                                            l.forEach(function (n) {
                                              e === n.Mobile &&
                                                t.push(n.CNName);
                                            }),
                                              t.length > 1 &&
                                                h.push(t.join("和"));
                                          }),
                                          !(
                                            h.length > 0 &&
                                            this.state.samePhoneInterceptFlag
                                          ))
                                        ) {
                                          e.next = 12;
                                          break;
                                        }
                                        return (
                                          this.$CommonSceneDrawer.alert({
                                            content: function () {
                                              return (0, D.BX)(p.View, {
                                                children: [
                                                  (0, D.tZ)(p.View, {
                                                    children:
                                                      "根据铁路局规定，乘客需使用本人手机号购票。" +
                                                      h.join("，") +
                                                      "手机号重复，请确认手机号填写正确。",
                                                  }),
                                                  (0, D.tZ)(p.View, {
                                                    children:
                                                      "*70岁以上老人及18岁以下未成年人可使用亲友手机号购票。",
                                                  }),
                                                ],
                                              });
                                            },
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 12:
                                        return (
                                          (f =
                                            this.state.selectedTabKey ===
                                              i.ASSIGNEE && 0 === a.length),
                                          (m = r.filter(function (e) {
                                            return e.chosen;
                                          })),
                                          f &&
                                            this.ubtTrace(202849, {
                                              bizKey:
                                                "z_mini_passengerEdit_transferee_confirm_click",
                                              transfereeNumber: r.filter(
                                                function (e) {
                                                  return e.chosen;
                                                }
                                              ).length,
                                            }),
                                          (e.next = 17),
                                          this.checkAccountSelfStudentInfo(n)
                                        );
                                      case 17:
                                        if (!(g = e.sent)._isBreak) {
                                          e.next = 20;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 20:
                                        this.setState({ memberPas: g }),
                                          this.confirmBack({
                                            memberPas: g,
                                            selectedPasList: a,
                                            selectedAssignees: m,
                                            isPointPayMode: f,
                                            freeChildren: u,
                                          });
                                      case 22:
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
                        key: "onPullDownRefresh",
                        value: (function () {
                          var e = (0, u.Z)(
                            (0, c.Z)().mark(function e() {
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          (v().stopPullDownRefresh(),
                                          this.state.selectedTabKey ===
                                            i.PASSENGER)
                                        ) {
                                          e.next = 10;
                                          break;
                                        }
                                        if (this.state.logedin) {
                                          e.next = 5;
                                          break;
                                        }
                                        return (
                                          (0, P.showToast)("请登录12306~"),
                                          e.abrupt("return")
                                        );
                                      case 5:
                                        return (
                                          (0, P.showLoading)(),
                                          (e.next = 8),
                                          Promise.all([
                                            this.loadMemberInfo(),
                                            this.loadAssigneeData(),
                                          ])
                                        );
                                      case 8:
                                        return (
                                          (0, P.hideLoading)(),
                                          e.abrupt("return")
                                        );
                                      case 10:
                                        this.loadPasData();
                                      case 11:
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
                        key: "onConvertStudentToAdult",
                        value: function (e) {
                          var t =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            n = this.state.memberPas[e];
                          (n.isStudentToAdult = !t),
                            this.setState({ memberPas: this.state.memberPas });
                        },
                      },
                      {
                        key: "getTabs",
                        value: function () {
                          var e = this;
                          return G.filter(function (t) {
                            return e.state.isSupportShowAssigneeTab
                              ? !!e.state.isSupportShowPassengerTab ||
                                  t.key !== i.PASSENGER
                              : t.key !== i.ASSIGNEE;
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t = this,
                            n = this.state,
                            r = n.logedin,
                            a = n.shownLogin12306Name,
                            s = n.selectedTabKey,
                            o = n.isWorkTime,
                            c = n.isJianLou,
                            u = n.memberPas,
                            l = n.pointAssignees,
                            d = n.credit12306,
                            h = n.useUpper12306Text,
                            f = n.is2023NewRule4Kids,
                            m = n.hasFlightTrip,
                            g = n.lastTripDepartDate,
                            v = n.isCrossEnvTrain,
                            y = n.isDisableChosenView,
                            b = this.getTabs();
                          return (0, D.BX)(p.View, {
                            className: "page-content",
                            children: [
                              !y &&
                                o &&
                                (0, D.tZ)(V, {
                                  onLogin: this.onLogin12306,
                                  login12306Name: a,
                                  logedin: r,
                                  credit12306: d,
                                  useUpper12306Text: h,
                                }),
                              !y &&
                                (0, D.tZ)(j, {
                                  onDetail:
                                    null === (e = this.$CommonSceneDrawer) ||
                                    void 0 === e
                                      ? void 0
                                      : e.alert,
                                  is2023NewRule4Kids: f,
                                  isShowCrossEnvTips: v,
                                  memberPas: u,
                                }),
                              (0, D.BX)(p.View, {
                                className: "psg-list-view",
                                children: [
                                  b.length > 1 &&
                                    (0, D.tZ)(O, {
                                      tabs: G,
                                      selectedTabKey: s,
                                      onChange: this.setTabKey,
                                    }),
                                  s === i.PASSENGER &&
                                    (0, D.tZ)(Y, {
                                      list: u,
                                      hasFlightTrip: m,
                                      lastTripDepartDate: g,
                                      onCheck: this.onCommonPasSlected,
                                      onEdit: this.onCommonEditPas,
                                      onDelete: this.onDeleteCommonPassenger,
                                      addNewPas: this.goPassenger,
                                      onInvite: this.handleInviteInfos,
                                      isSupportInvite: !c && Z.default.isWechat,
                                      onConvertStudentToAdult:
                                        this.onConvertStudentToAdult,
                                      fromPage: this.fromPage,
                                    }),
                                  s === i.ASSIGNEE &&
                                    (0, D.tZ)(te, {
                                      list: l,
                                      onCheck: this.onCommonPasSlected,
                                      onEdit: this.onCommonEditPas,
                                      addNewPas: this.goAssignee,
                                      isDisableChosenView: y,
                                    }),
                                ],
                              }),
                              s === i.ASSIGNEE && (0, D.tZ)(ie, {}),
                              !y &&
                                (0, D.tZ)(L, {
                                  memberPas: u,
                                  pointAssignees: l,
                                  onConfirm: this.confirmPasChoose,
                                }),
                              (0, D.tZ)(pe, {
                                ref: function (e) {
                                  return (t.$CommonToaster = e);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(b.default.Component))
              ) || re;
          (ye.enableShareAppMessage = !0),
            Page(
              (0, r.createPageConfig)(
                ye,
                "pages/train/passengerlist/passengerlist",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "选择乘车人",
                  navigationBarBackgroundColor: "#fff",
                  navigationBarTextStyle: "black",
                  enablePullDownRefresh: !0,
                  navigationStyle: "custom",
                  backgroundColorBottom: "#EFEFEF",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98655, 77, 61094, 30120, 26450, 8905, 37513, 71341, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(91976);
          }
        ),
          e.O();
      },
    ]);
})();
