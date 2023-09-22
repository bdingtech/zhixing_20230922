!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [27844],
      {
        25581: function (e, t, n) {
          var a,
            i = n(32180),
            r = n(79301),
            s = n(298),
            c = n(95308),
            l = n(57042),
            o = n(24460),
            d = n(81876),
            u = n(21867),
            p = n(86066),
            f = n(45023),
            m = n(52500),
            g = n(92954),
            h = n.n(g),
            y = n(71515),
            T = n(8271),
            C = n.n(T),
            v = n(23577),
            x = n(87298),
            k = n(29799),
            N = n(851),
            Z = n(35707),
            I = n(19972),
            w = n(981),
            b = n(92711),
            P = n(21961),
            B = n(99090),
            D = n(19032),
            L = n(48813),
            E = m.default.memo(function (e) {
              var t = e.passenger,
                n = void 0 === t ? {} : t,
                a = e.validateIndex,
                i = void 0 === a ? 0 : a,
                r = e.supportCardList,
                s = void 0 === r ? null : r,
                c = e.updatePassenger,
                l = void 0 === c ? function () {} : c,
                o = e.onShowTicketTypeDrawer,
                d = void 0 === o ? function () {} : o,
                u = e.onShowCardTypeDrawer,
                p = void 0 === u ? function () {} : u;
              if (w.Z.isEmptyObject(s) || s.length <= 0)
                return (0, L.tZ)(L.HY, {});
              var f = n || {},
                m = f.CNName,
                g = f.ENFirstName,
                h = f.ENLastName,
                T = f.CommonPassengerCard,
                v = f.Birthday,
                x = f.Gender,
                k = s[i],
                N = w.Z.getCardNumByCardType(T, null == k ? void 0 : k.idType),
                Z = w.Z.getCardTimeLimitByCardType(
                  T,
                  null == k ? void 0 : k.idType
                );
              return (0, L.BX)(y.View, {
                className: "passenger-booking",
                children: [
                  (0, L.BX)(y.View, {
                    className: "p-edit-item flex-row flex-align-items-center",
                    children: [
                      (0, L.tZ)(y.Text, {
                        className: "pb-label",
                        children: "乘客类型",
                      }),
                      (0, L.tZ)(y.Text, {
                        className: "edit-value flex-1",
                        onClick: d,
                        children:
                          (null == n ? void 0 : n.passengerTypeDesc) || "",
                      }),
                      (0, L.tZ)(y.View, {
                        onClick: d,
                        children: (0, L.tZ)(B.BD, { size: 12, color: "#ccc" }),
                      }),
                    ],
                  }),
                  (null == k ? void 0 : k.cname) &&
                    (0, L.BX)(y.View, {
                      className: "p-edit-item flex-row flex-align-items-center",
                      children: [
                        (0, L.tZ)(y.Text, {
                          className: "pb-label",
                          children: "姓名",
                        }),
                        (0, L.tZ)(y.Input, {
                          className: "edit-value flex-1",
                          type: "text",
                          placeholder: "与乘车人证件姓名一致",
                          placeholderClass: "placeholder-desc",
                          onInput: function (e) {
                            return l(e.detail.value, b.cx.CNAME);
                          },
                          value: m,
                        }),
                      ],
                    }),
                  (null == k ? void 0 : k.ename) &&
                    (0, L.BX)(y.View, {
                      className: "p-edit-item flex-row flex-align-items-center",
                      children: [
                        (0, L.tZ)(y.Text, {
                          className: "pb-label",
                          children: "英文姓",
                        }),
                        (0, L.tZ)(y.Input, {
                          className: "edit-value flex-1",
                          type: "text",
                          placeholder: "拼音姓/Sur name",
                          placeholderClass: "placeholder-desc",
                          onInput: function (e) {
                            return l(e.detail.value, b.cx.LENAME);
                          },
                          value: h,
                        }),
                      ],
                    }),
                  (null == k ? void 0 : k.ename) &&
                    (0, L.BX)(y.View, {
                      className: "p-edit-item flex-row flex-align-items-center",
                      children: [
                        (0, L.tZ)(y.Text, {
                          className: "pb-label",
                          children: "英文名",
                        }),
                        (0, L.tZ)(y.Input, {
                          className: "edit-value flex-1",
                          type: "text",
                          placeholder: "拼音名/Given name",
                          placeholderClass: "placeholder-desc",
                          onInput: function (e) {
                            return l(e.detail.value, b.cx.FENAME);
                          },
                          value: g,
                        }),
                      ],
                    }),
                  (null == k ? void 0 : k.gender) &&
                    (0, L.BX)(y.View, {
                      className: "p-edit-item flex-row flex-align-items-center",
                      children: [
                        (0, L.tZ)(y.Text, {
                          className: "pb-label",
                          children: "性别",
                        }),
                        (0, L.BX)(y.View, {
                          className:
                            "gender-item mr40 flex-row flex-align-items-center",
                          children: [
                            (0, L.tZ)(y.View, {
                              onClick: function () {
                                return l("M", b.cx.GENDER);
                              },
                              className: "flex-row flex-center",
                              children:
                                "M" == (null == x ? void 0 : x.toUpperCase())
                                  ? (0, L.tZ)(B.r5, {
                                      size: 20,
                                      color: "#198cff",
                                    })
                                  : (0, L.tZ)(B.xG, {
                                      size: 20,
                                      color: "#ccc",
                                    }),
                            }),
                            (0, L.tZ)(y.Text, {
                              className: "edit-value",
                              children: "男性",
                            }),
                          ],
                        }),
                        (0, L.BX)(y.View, {
                          className:
                            "gender-item flex-row flex-align-items-center",
                          children: [
                            (0, L.tZ)(y.View, {
                              onClick: function () {
                                return l("F", b.cx.GENDER);
                              },
                              className: "flex-row flex-center",
                              children:
                                "F" == (null == x ? void 0 : x.toUpperCase())
                                  ? (0, L.tZ)(B.r5, {
                                      size: 20,
                                      color: "#198cff",
                                    })
                                  : (0, L.tZ)(B.xG, {
                                      size: 20,
                                      color: "#ccc",
                                    }),
                            }),
                            (0, L.tZ)(y.Text, {
                              className: "edit-value",
                              children: "女性",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (null == k ? void 0 : k.idType) &&
                    (null == s ? void 0 : s.length) <= 1 &&
                    (0, L.BX)(y.View, {
                      className: "p-edit-item flex-row flex-align-items-center",
                      children: [
                        (0, L.tZ)(y.Text, {
                          className: "pb-label",
                          children: "证件类型",
                        }),
                        (0, L.tZ)(y.Text, {
                          className: "edit-value flex-1",
                          onClick: function () {
                            return (0, w.C)("目前仅支持一种证件下单");
                          },
                          children: k.idType,
                        }),
                      ],
                    }),
                  (null == k ? void 0 : k.idType) &&
                    (null == s ? void 0 : s.length) > 1 &&
                    (0, L.BX)(y.View, {
                      className: "p-edit-item flex-row flex-align-items-center",
                      children: [
                        (0, L.tZ)(y.Text, {
                          className: "pb-label",
                          children: "证件类型",
                        }),
                        (0, L.tZ)(y.Text, {
                          className: "edit-value flex-1",
                          onClick: p,
                          children: k.idType,
                        }),
                        (0, L.tZ)(y.View, {
                          onClick: p,
                          children: (0, L.tZ)(B.BD, {
                            size: 12,
                            color: "#ccc",
                          }),
                        }),
                      ],
                    }),
                  (null == k ? void 0 : k.idNum) &&
                    (0, L.BX)(y.View, {
                      className: "p-edit-item flex-row flex-align-items-center",
                      children: [
                        (0, L.tZ)(y.Text, {
                          className: "pb-label",
                          children: null == k ? void 0 : k.idType,
                        }),
                        (0, L.tZ)(y.Input, {
                          className: "edit-value flex-1",
                          type: "身份证" === k.idType ? "idcard" : "text",
                          placeholder: "乘客证件号码",
                          placeholderClass: "placeholder-desc",
                          onInput: function (e) {
                            return l(e.detail.value, b.cx.CARDNUM);
                          },
                          value: N,
                        }),
                      ],
                    }),
                  (null == k ? void 0 : k.visaDate) &&
                    (0, L.BX)(y.View, {
                      className: "p-edit-item flex-row flex-align-items-center",
                      children: [
                        (0, L.tZ)(y.Text, {
                          className: "pb-label",
                          children: "证件有效期",
                        }),
                        (0, L.tZ)(D.Z, {
                          style: { flex: 1 },
                          mode: "date",
                          start: "1890-01-01",
                          end: "2099-12-31",
                          value: Z,
                          titleTxt: "证件有效期",
                          onChange: function (e) {
                            return (function (e) {
                              var t = e;
                              C()(e).isBefore(C()()) &&
                                (t = C()().format("YYYY-MM-DD")),
                                l(t, b.cx.CARDTIMELIMIT);
                            })(e);
                          },
                          children: (0, L.BX)(y.View, {
                            className: "flex-row flex-align-items-center",
                            children: [
                              (0, L.tZ)(y.Text, {
                                className: "flex-1 ".concat(
                                  Z ? "" : "placeholder-desc"
                                ),
                                children: Z || "选择证件有效期",
                              }),
                              (0, L.tZ)(B.BD, { size: 12, color: "#ccc" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  (null == k ? void 0 : k.birth) &&
                    (0, L.BX)(y.View, {
                      className: "p-edit-item flex-row flex-align-items-center",
                      children: [
                        (0, L.tZ)(y.Text, {
                          className: "pb-label",
                          children: "出生日期",
                        }),
                        (0, L.tZ)(D.Z, {
                          style: { flex: 1 },
                          mode: "date",
                          start: "1890-01-01",
                          end: "2099-12-31",
                          value: v,
                          onChange: function (e) {
                            return (function (e) {
                              var t = e;
                              C()(e).isAfter(C()()) &&
                                (t = C()().format("YYYY-MM-DD")),
                                l(t, b.cx.BIRTH);
                            })(e);
                          },
                          children: (0, L.BX)(y.View, {
                            className: "flex-row flex-align-items-center",
                            children: [
                              (0, L.tZ)(y.Text, {
                                className: "flex-1 ".concat(
                                  v ? "" : "placeholder-desc"
                                ),
                                children: v || "选择出生日期",
                              }),
                              (0, L.tZ)(B.BD, { size: 12, color: "#ccc" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              });
            }),
            V = m.default.memo(function () {
              return (0,
              L.BX)(y.View, { className: "tips", children: [(0, L.tZ)(y.View, { className: "tp-tit", children: "请您在新增/编辑乘客前仔细阅读以下内容：" }), (0, L.tZ)(y.View, { className: "tp-desc", children: "根据实名制要求，购买船票需提交乘客的身份证信息，您在乘船时可能需要出具对应身份证件用户验证，请确保录入信息真实有效。平台将保护您录入的身份证件信息，且仅在具体订票过程中授权提供给与您进行交易的商户/承运人。" })] });
            }),
            A = n(90129),
            M = n(36168),
            S = n(49528),
            X = (0, S.lW)({ content: { marginBottom: 88 } }),
            R = function (e) {
              var t = e.ticketTypeList,
                n = e.selectedTicketType,
                a = void 0 === n ? null : n,
                i = e.onClose,
                r = e.onConfirm,
                s = (0, m.useState)(""),
                c = (0, A.Z)(s, 2),
                l = c[0],
                o = c[1];
              if (
                ((0, m.useLayoutEffect)(
                  function () {
                    null != a && a.ticketTypeId && o(a.ticketTypeId);
                  },
                  [null == a ? void 0 : a.ticketTypeId]
                ),
                (null == t ? void 0 : t.length) <= 0)
              )
                return (0, L.tZ)(L.HY, {});
              return (0, L.BX)(y.View, {
                className: "pts-content",
                children: [
                  (0, L.tZ)(y.View, {
                    className: "pts-tit",
                    children: "选择票种",
                  }),
                  (0, L.tZ)(y.View, {
                    style: X.content,
                    children: t.map(function (e, t) {
                      return (0, L.BX)(
                        y.View,
                        {
                          className:
                            "pas-type-item flex-row flex-align-items-center ".concat(
                              e.isSale ? "" : "disabled"
                            ),
                          children: [
                            e.icon &&
                              (0, L.tZ)(y.Image, {
                                className: "pts-icon",
                                src: e.icon,
                              }),
                            (0, L.BX)(y.View, {
                              className: "name-desc flex-1 flex flex-column",
                              children: [
                                (0, L.tZ)(y.Text, {
                                  className: "type-name",
                                  children: e.ticketType,
                                }),
                                (0, L.tZ)(y.Text, {
                                  className: "type-desc",
                                  children: e.ticketRuleDesc,
                                }),
                              ],
                            }),
                            (0, L.BX)(y.View, {
                              className: "pts-price flex flex-row",
                              children: ["¥", e.ticketPrice, "/张"],
                            }),
                            (0, L.tZ)(y.View, {
                              onClick: function () {
                                return (function (e) {
                                  e.isSale && o(e.ticketTypeId);
                                })(e);
                              },
                              className: "flex-row flex-center",
                              children:
                                l === e.ticketTypeId
                                  ? (0, L.tZ)(B.r5, {
                                      size: 20,
                                      color: "#198cff",
                                    })
                                  : (0, L.tZ)(B.xG, {
                                      size: 20,
                                      color: "#ccc",
                                    }),
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                  (0, L.BX)(M.Z, {
                    isShowIphoneXAdapter: !1,
                    children: [
                      (0, L.tZ)(y.Button, {
                        className: "pts-btn pts-cancel-btn flex-1",
                        onClick: function () {
                          o(a.ticketTypeId), i();
                        },
                        children: (0, L.tZ)(y.Text, {
                          className: "pts-btn-txt",
                          style: { color: "#198cff" },
                          children: "取消选择",
                        }),
                      }),
                      (0, L.tZ)(y.Button, {
                        className: "pts-btn pts-confirm-btn flex-1",
                        onClick: function () {
                          var e = t.find(function (e) {
                            return e.ticketTypeId === l;
                          });
                          r(e), i();
                        },
                        children: (0, L.tZ)(y.Text, {
                          className: "pts-btn-txt",
                          style: { color: "#fff" },
                          children: "确定",
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
            F = (0, S.lW)({
              iconClose: { position: "absolute", top: -2, right: 16 },
            }),
            Y = function (e) {
              var t = e.cardTypeList,
                n = void 0 === t ? [] : t,
                a = e.onClose,
                i = void 0 === a ? function () {} : a,
                r = e.onSelect,
                s = void 0 === r ? function () {} : r;
              if ((null == n ? void 0 : n.length) <= 0)
                return (0, L.tZ)(y.View, {});
              return (0, L.BX)(y.View, {
                className: "cts-content",
                children: [
                  (0, L.tZ)(y.View, {
                    onClick: i,
                    style: { position: "relative", zIndex: 1 },
                    children: (0, L.tZ)(B.bM, {
                      size: 24,
                      color: "#ccc",
                      style: F.iconClose,
                    }),
                  }),
                  (0, L.tZ)(y.View, {
                    className: "drawer-tit",
                    children: "选择证件类型",
                  }),
                  (0, L.tZ)(y.View, {
                    className: "type-list",
                    children: n.map(function (e, t) {
                      return (0, L.BX)(
                        m.Fragment,
                        {
                          children: [
                            (0, L.tZ)(y.View, {
                              className: "tl-item",
                              onClick: function () {
                                return (function (e) {
                                  s(e), null == i || i();
                                })(t);
                              },
                              children: e,
                            }),
                            t !== n.length - 1 &&
                              (0, L.tZ)(y.View, { className: "tl-h-line" }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                ],
              });
            },
            z = n(30595),
            G = n(52922),
            O =
              (0, x.h)(!1)(
                (a = (function (e) {
                  (0, u.Z)(n, e);
                  var t = (0, p.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, l.Z)(this, n),
                      (a = t.call(this, e)),
                      (0, f.Z)(
                        (0, d.Z)(a),
                        "checkPassengerTypeBeforeSave",
                        (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t, n) {
                              var i, c, l, o, d, u, p, f;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = !1),
                                          (e.prev = 1),
                                          (c = a.state.passenger),
                                          (l = (0, s.Z)(
                                            (0, s.Z)(
                                              {},
                                              a.checkPassengerTypeParams
                                            ),
                                            {},
                                            {
                                              psg: w.Z.getPassengerFormatData(
                                                c,
                                                t,
                                                n,
                                                !0
                                              ),
                                            }
                                          )),
                                          (e.next = 6),
                                          (0, P.Wj)(l)
                                        );
                                      case 6:
                                        if (
                                          1 !== (o = e.sent).code ||
                                          !o.data
                                        ) {
                                          e.next = 17;
                                          break;
                                        }
                                        if (
                                          ((d = o.data),
                                          (u = d.ticketList),
                                          (p = d.ticketTitle),
                                          u && !(u.length <= 1))
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        return e.abrupt("return", !0);
                                      case 11:
                                        if (
                                          u.some(function (e) {
                                            return (
                                              e.ticketTypeId == c.ticketTypeId
                                            );
                                          })
                                        ) {
                                          e.next = 14;
                                          break;
                                        }
                                        return (
                                          a.showCommonDialog({
                                            title: "温馨提示",
                                            content: "".concat(p, "(").concat(
                                              u
                                                .map(function (e) {
                                                  return e.ticketType;
                                                })
                                                .join("/"),
                                              ")"
                                            ),
                                          }),
                                          e.abrupt("return", !1)
                                        );
                                      case 14:
                                        return e.abrupt("return", !0);
                                      case 17:
                                        0 === o.code &&
                                          a.showCommonDialog({
                                            title: "温馨提示",
                                            content:
                                              (null === (f = o.data) ||
                                              void 0 === f
                                                ? void 0
                                                : f.errorMessage) ||
                                              "该乘客证件信息缺失，请补全信息",
                                          });
                                      case 18:
                                        e.next = 24;
                                        break;
                                      case 20:
                                        (e.prev = 20),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0),
                                          (0, w.C)("网络不给力，请重试");
                                      case 24:
                                        return e.abrupt("return", i);
                                      case 25:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[1, 20]]
                              );
                            })
                          );
                          return function (t, n) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, f.Z)((0, d.Z)(a), "onChangeTicketType", function (e) {
                        var t = a.state,
                          n = t.passenger,
                          i = t.selectedTicketType;
                        e.ticketTypeId !==
                          (null == i ? void 0 : i.ticketTypeId) &&
                          a.setState({
                            selectedTicketType: e,
                            passenger: (0, s.Z)(
                              (0, s.Z)({}, n),
                              {},
                              {
                                ticketTypeId: e.ticketTypeId,
                                passengerTypeDesc: e.ticketType,
                              }
                            ),
                            passengerType: w.Z.covertPassengerType(
                              e.ticketTypeId
                            ),
                          });
                      }),
                      (a.pageId = v.Z.isCRN ? "10650104530" : ""),
                      (a.state = {
                        passenger: null,
                        ticketTypeList: [],
                        selectedTicketType: null,
                        cardTypeList: [],
                        passengerType: "A",
                      }),
                      a
                    );
                  }
                  return (
                    (0, o.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            t,
                            n,
                            a =
                              (null === (e = h().getCurrentInstance().router) ||
                              void 0 === e
                                ? void 0
                                : e.params) || {},
                            i = a.ticketTypeList,
                            r = a.supportCardList,
                            c = a.isForeign,
                            l = a.ticketTypeIdList,
                            o = a.checkPassengerTypeParams;
                          this.checkPassengerTypeParams = o;
                          var d = (0, s.Z)({}, a.passengerInfo),
                            u =
                              (null == i
                                ? void 0
                                : i.filter(function (e) {
                                    return "student" !== e.ticketTypeId;
                                  })) || [];
                          (null == l ? void 0 : l.length) > 0 &&
                            ((u = u.filter(function (e) {
                              return l.some(function (t) {
                                return e.ticketTypeId == t;
                              });
                            })),
                            (d.ticketTypeId = u[0].ticketTypeId),
                            (d.passengerTypeDesc = u[0].ticketType)),
                            (this.supportCardList = r),
                            (this.isForeign = c);
                          var p = d;
                          if (w.Z.isEmptyObject(p))
                            p = {
                              passengerTypeDesc: "成人票",
                              ticketTypeId: "adult",
                            };
                          else if (p.ticketTypeId) {
                            var f;
                            if (
                              null === (f = u) || void 0 === f
                                ? void 0
                                : f.some(function (e) {
                                    return (
                                      e.ticketTypeId === p.ticketTypeId &&
                                      !e.isSale
                                    );
                                  })
                            ) {
                              var m,
                                g =
                                  null === (m = u) || void 0 === m
                                    ? void 0
                                    : m[0];
                              (p.ticketTypeId =
                                (null == g ? void 0 : g.ticketTypeId) ||
                                "adult"),
                                (p.passengerTypeDesc =
                                  (null == g ? void 0 : g.ticketType) ||
                                  "成人票");
                            }
                          } else
                            (p.ticketTypeId = "adult"),
                              (p.passengerTypeDesc = "成人票");
                          var y,
                            T =
                              (null === (t = u) || void 0 === t
                                ? void 0
                                : t.find(function (e) {
                                    return (
                                      e.ticketTypeId === p.ticketTypeId &&
                                      e.isSale
                                    );
                                  })) ||
                              (null === (n = u) || void 0 === n
                                ? void 0
                                : n[0]),
                            C = this.getCardTypeList(),
                            v = 0;
                          if (c)
                            if (
                              null !== (y = p) &&
                              void 0 !== y &&
                              y.foreignInfo
                            )
                              v =
                                null == r
                                  ? void 0
                                  : r.findIndex(function (e) {
                                      return e.country == p.foreignInfo.country;
                                    });
                            else {
                              var x = this.getInitForeignInfo(0);
                              p.foreignInfo = x;
                            }
                          else
                            v = this.getInitValidateIndex(
                              p.lastEditCardType,
                              p
                            );
                          this.setState({
                            passenger: p,
                            passengerType: w.Z.covertPassengerType(
                              p.ticketTypeId
                            ),
                            validateIndex: v,
                            ticketTypeList: u,
                            selectedTicketType: T,
                            cardTypeList: C,
                          });
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "getInitValidateIndex",
                        value: function (e, t) {
                          var n;
                          if (e) {
                            var a,
                              i = w.Z.getCardTypeName(e);
                            n =
                              null === (a = this.supportCardList) ||
                              void 0 === a
                                ? void 0
                                : a.findIndex(function (e) {
                                    return e.idType == i;
                                  });
                          } else
                            for (
                              var r = 0, s = this.supportCardList.length;
                              r < s;
                              r++
                            ) {
                              var c = this.supportCardList[r];
                              if (
                                w.Z.getCardNumByCardType(
                                  t.CommonPassengerCard,
                                  c.idType
                                )
                              ) {
                                n = r;
                                break;
                              }
                            }
                          return n || 0;
                        },
                      },
                      {
                        key: "getInitForeignInfo",
                        value: function (e) {
                          var t,
                            n = this.supportCardList[e],
                            a = { country: n.country, cardList: [] };
                          return (
                            null === (t = n.requiredCard) ||
                              void 0 === t ||
                              t.forEach(function (e) {
                                var t,
                                  n = {
                                    key: e.idType,
                                    value: "",
                                    infoList: [],
                                  };
                                null === (t = e.date) ||
                                  void 0 === t ||
                                  t.forEach(e.date, function (e) {
                                    n.infoList.push({ key: e.name, value: "" });
                                  }),
                                  a.cardList.push(n);
                              }),
                            a
                          );
                        },
                      },
                      {
                        key: "onSavePassenger",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.passenger,
                            a = t.validateIndex,
                            i = this.supportCardList[a],
                            r = JSON.parse(JSON.stringify(n));
                          if (
                            ((r.PassengerID = n.PassengerID
                              ? n.PassengerID
                              : ""),
                            i.cname)
                          ) {
                            var s = w.Z.checkPassengerInput("cname", n.CNName);
                            if (s) return void (0, w.C)(s);
                            r.displayName || (r.displayName = n.CNName);
                          }
                          if (i.ename) {
                            var c =
                              w.Z.checkPassengerInput("ename", n.ENFirstName) ||
                              w.Z.checkPassengerInput("ename", n.ENLastName);
                            if (c) return void (0, w.C)(c);
                            r.displayName ||
                              (r.displayName = ""
                                .concat(n.ENLastName, "/")
                                .concat(n.ENFirstName));
                          }
                          if (i.gender) {
                            if (!n.Gender)
                              return void (0, w.C)("请选择乘客性别");
                            r.Gender = n.Gender;
                          }
                          if (i.idNum) {
                            var l,
                              o = w.Z.getCardCode(i.idType),
                              d = w.Z.getCardNumByCardType(
                                n.CommonPassengerCard,
                                i.idType
                              );
                            if (
                              (l =
                                "1" == o
                                  ? w.Z.checkPassengerInput("idCard", d)
                                  : "2" == o
                                  ? w.Z.checkPassengerInput("passCard", d)
                                  : w.Z.checkPassengerInput("card", d))
                            )
                              return void (0, w.C)(l);
                            this.updateCommonPassengerCard(r, o, d),
                              (r.lastEditCardType = o);
                          } else r.lastEditCardType = "";
                          if (i.birth) {
                            if (!n.Birthday)
                              return void (0, w.C)("请选择出生日期");
                            r.Birthday = n.Birthday;
                          }
                          this.isForeign && (r.foreignInfo = n.foreignInfo);
                          var u = w.Z.getCardNumByCardType(
                            n.CommonPassengerCard,
                            i.idType
                          );
                          if (u && 18 === u.length) {
                            var p,
                              f =
                                u.substring(6, 10) +
                                "-" +
                                u.substring(10, 12) +
                                "-" +
                                u.substring(12, 14);
                            if ("elder" == n.ticketTypeId && w.Z.getAge(f) < 60)
                              return void (0, w.C)(
                                "年龄60周岁以下乘客不可购买老人票"
                              );
                            if (
                              ["childCarry", "child", "childBoy"].includes(
                                n.ticketTypeId
                              ) &&
                              w.Z.checkAgeOlderThan18(f)
                            )
                              return void (0, w.C)(
                                "满18岁不可预订".concat(
                                  w.Z.getDisplayPassengerType(
                                    w.Z.covertPassengerType(n.ticketTypeId)
                                  )
                                )
                              );
                            if (w.Z.getAge(f) < 16)
                              return void (
                                null === (p = this.showMultiButtonDialog) ||
                                void 0 === p ||
                                p.call(this, {
                                  title: "儿童监护人确认",
                                  content:
                                    "您正在录入未成年人信息，请确认您是该未成年人的监护人或已征得其监护人同意",
                                  leftButtonName: "暂缓",
                                  rightButtonName: "确定添加",
                                  onRightButtonClick: function () {
                                    e.continueAddPsgAfterCheckAge(
                                      r,
                                      e.supportCardList,
                                      e.isForeign
                                    );
                                  },
                                })
                              );
                          }
                          this.continueAddPsgAfterCheckAge(
                            r,
                            this.supportCardList,
                            this.isForeign
                          );
                        },
                      },
                      {
                        key: "updateCommonPassengerCard",
                        value: function (e, t, n) {
                          e.CommonPassengerCard || (e.CommonPassengerCard = []);
                          for (
                            var a = !1, i = 0, r = e.CommonPassengerCard.length;
                            i < r;
                            i++
                          ) {
                            var s = e.CommonPassengerCard[i];
                            if (s.CardType == t) {
                              (s.CardNo = n), (a = !0);
                              break;
                            }
                          }
                          a ||
                            e.CommonPassengerCard.push({
                              CardType: t,
                              CardNo: n,
                            });
                        },
                      },
                      {
                        key: "continueAddPsgAfterCheckAge",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t, n, a) {
                              var i,
                                c,
                                l = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          console.log("submitPassenger", t),
                                          (t.CommonPassengerCardList =
                                            t.CommonPassengerCard),
                                          (0, I.Q)(),
                                          (e.next = 5),
                                          this.checkPassengerTypeBeforeSave(
                                            n,
                                            a
                                          )
                                        );
                                      case 5:
                                        if (e.sent) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (0, I.Z)(), e.abrupt("return");
                                      case 9:
                                        (i = this.state.passengerType),
                                          Z.Z.isLogin
                                            ? ((c = {
                                                ParameterList: [
                                                  {
                                                    Key: "BizType",
                                                    Value: "BUS",
                                                  },
                                                  {
                                                    Key: "BookingType",
                                                    Value: "B",
                                                  },
                                                  {
                                                    Key: "EditType",
                                                    Value: t.PassengerID
                                                      ? "1"
                                                      : "0",
                                                  },
                                                ],
                                                CommonPassengerInfo: t,
                                              }),
                                              console.log(
                                                "submitPassenger---\x3e",
                                                JSON.stringify(c)
                                              ),
                                              (0, I.Q)("正在保存"),
                                              (0, P.pj)(c)
                                                .then(function (e) {
                                                  (0, I.Z)(),
                                                    (0, w.C)("保存成功"),
                                                    t.PassengerID ||
                                                      (t.PassengerID =
                                                        e.transactionID ||
                                                        e.TransactionID),
                                                    (!t.lastEditCardType &&
                                                      t.displayName) ||
                                                      (t.displayName =
                                                        w.Z.getPassengerDisplayName(
                                                          t,
                                                          n,
                                                          a
                                                        )),
                                                    l.navigateBack(
                                                      (0, s.Z)(
                                                        (0, s.Z)({}, t),
                                                        {},
                                                        { PassengerType: i }
                                                      )
                                                    );
                                                })
                                                .catch(function (e) {
                                                  console.log(
                                                    "SavePassenger.request.FAIL",
                                                    e
                                                  ),
                                                    (0, I.Z)(),
                                                    (0, w.C)(
                                                      "保存失败, 请检查信息后重试"
                                                    );
                                                }))
                                            : (t.PassengerID ||
                                                (t.PassengerID = w.Z.getUuid()),
                                              this.navigateBack(
                                                (0, s.Z)(
                                                  (0, s.Z)({}, t),
                                                  {},
                                                  { PassengerType: i }
                                                )
                                              ));
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
                          return function (t, n, a) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "updatePassenger",
                        value: function (e, t) {
                          var n;
                          console.log("updatePassenger", e, t);
                          var a = this.state.validateIndex,
                            i = (
                              (null === (n = h().getCurrentInstance().router) ||
                              void 0 === n
                                ? void 0
                                : n.params) || {}
                            ).supportCardList[a],
                            r = (0, s.Z)({}, this.state.passenger);
                          switch (t) {
                            case b.cx.CNAME:
                              r.CNName = e;
                              break;
                            case b.cx.GENDER:
                              r.Gender = e;
                              break;
                            case b.cx.FENAME:
                              r.ENFirstName = e;
                              break;
                            case b.cx.LENAME:
                              r.ENLastName = e;
                              break;
                            case b.cx.CARDNUM:
                              var c = w.Z.getCardCode(i.idType);
                              this.updateCardInfo(r, e, c, b.cx.CARDNUM);
                              break;
                            case b.cx.CARDTIMELIMIT:
                              var l = w.Z.getCardCode(i.idType);
                              this.updateCardInfo(r, e, l, b.cx.CARDTIMELIMIT);
                              break;
                            case b.cx.BIRTH:
                              r.Birthday = C()(e).format("YYYY-MM-DD");
                              break;
                            case b.cx.NATIONALITY:
                              (r.CountryCode = e.countryCode),
                                (r.Nationality = e.countryName);
                              break;
                            case b.cx.FREQUENCY:
                              r.frequency = e;
                              break;
                            case b.cx.STAYDAYS:
                              r.stayDays = e;
                          }
                          console.log("passethou", r),
                            this.setState({ passenger: r });
                        },
                      },
                      {
                        key: "updateCardInfo",
                        value: function (e, t, n, a) {
                          console.log("updateCardInfo", e, t),
                            e.CommonPassengerCard ||
                              ((e.CommonPassengerCard = []),
                              e.CommonPassengerCard.push({
                                CardType: n,
                                CardNo: "",
                              }));
                          var i = !1;
                          if (
                            (e.CommonPassengerCard.forEach(function (e) {
                              n == e.CardType &&
                                ((i = !0),
                                a == b.cx.CARDNUM && (e.CardNo = t),
                                a == b.cx.CARDTIMELIMIT &&
                                  (e.CardTimelimit = t));
                            }),
                            !i)
                          ) {
                            var r = { CardType: n };
                            a == b.cx.CARDNUM && (r.CardNo = t),
                              a == b.cx.CARDTIMELIMIT && (r.CardTimelimit = t),
                              e.CommonPassengerCard.push(r);
                          }
                          a == b.cx.CARDTIMELIMIT &&
                            this.setState({ passenger: (0, s.Z)({}, e) });
                        },
                      },
                      {
                        key: "getCardTypeList",
                        value: function () {
                          var e;
                          return (
                            (null === (e = this.supportCardList) || void 0 === e
                              ? void 0
                              : e.map(function (e) {
                                  return e.idType;
                                })) || []
                          );
                        },
                      },
                      {
                        key: "onSelectCardType",
                        value: function (e) {
                          this.setState({ validateIndex: e });
                        },
                      },
                      {
                        key: "getTitle",
                        value: function () {
                          var e,
                            t,
                            n =
                              null === (e = h().getCurrentInstance().router) ||
                              void 0 === e ||
                              null === (t = e.params) ||
                              void 0 === t
                                ? void 0
                                : t.passengerInfo;
                          return w.Z.isEmptyObject(n) ? "新增乘客" : "编辑乘客";
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.passenger,
                            a = t.validateIndex,
                            i = t.ticketTypeList,
                            r = t.selectedTicketType,
                            s = t.cardTypeList;
                          return (0, L.BX)(y.View, {
                            className: "ship-edit-passenger flex flex-column",
                            children: [
                              (0, L.tZ)(z.Z, { title: this.getTitle() }),
                              (0, L.BX)(y.View, {
                                className: "edit-passenger-content flex-1",
                                children: [
                                  (0, L.tZ)(E, {
                                    passenger: n,
                                    validateIndex: a,
                                    supportCardList: this.supportCardList,
                                    updatePassenger:
                                      this.updatePassenger.bind(this),
                                    onShowTicketTypeDrawer: function () {
                                      !(function (e) {
                                        var t = e.ticketTypeList,
                                          n = e.selectedTicketType,
                                          a = e.onConfirm,
                                          i = (0, g.getCurrentInstance)().page;
                                        null == i ||
                                          i.showCommonDrawer({
                                            hideClose: !0,
                                            hideTitle: !0,
                                            content: function (e) {
                                              var i = e.onClose;
                                              return (0, L.tZ)(R, {
                                                onClose: i,
                                                ticketTypeList: t,
                                                selectedTicketType: n,
                                                onConfirm: a,
                                              });
                                            },
                                            className: "pas-type-select-drawer",
                                          });
                                      })({
                                        ticketTypeList: i,
                                        selectedTicketType: r,
                                        onConfirm: e.onChangeTicketType,
                                      });
                                    },
                                    onShowCardTypeDrawer: function () {
                                      !(function (e) {
                                        var t = e.cardTypeList,
                                          n = e.onSelect,
                                          a = (0, g.getCurrentInstance)().page;
                                        null == a ||
                                          a.showCommonDrawer({
                                            hideTitle: !0,
                                            hideClose: !0,
                                            content: function (e) {
                                              var a = e.onClose;
                                              return (0, L.tZ)(Y, {
                                                onClose: a,
                                                cardTypeList: t,
                                                onSelect: n,
                                              });
                                            },
                                            className:
                                              "ship-editpas-cardtype-drawer",
                                            iphoneXFooterColor: "#f5f5f5",
                                          });
                                      })({
                                        cardTypeList: s,
                                        onSelect: function (t) {
                                          return e.onSelectCardType(t);
                                        },
                                      });
                                    },
                                  }),
                                  (0, L.tZ)(V, {}),
                                ],
                              }),
                              (0, L.tZ)(G.Z, {
                                onConfirm: this.onSavePassenger.bind(this),
                              }),
                              (0, L.tZ)(k.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                              (0, L.tZ)(N.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t);
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
              ) || a;
          Page(
            (0, i.createPageConfig)(
              O,
              "pages/taroCRN/ship/pages/editPassenger/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "编辑乘客",
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
        e.O(0, [98946, 7160, 83004, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(25581);
        }),
          e.O();
      },
    ]);
})();
