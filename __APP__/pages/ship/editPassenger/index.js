!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [66222],
      {
        27702: function (e, t, i) {
          var a,
            n = i(32180),
            s = i(298),
            r = i(57042),
            o = i(24460),
            c = i(21867),
            l = i(86066),
            d = i(52500),
            u = i(92954),
            p = i.n(u),
            m = i(81957),
            f = i(71515),
            h = i(79910),
            g = i(49120),
            y = i(58676),
            T = i(18783),
            v = i(8271),
            C = i.n(v),
            N = i(93621),
            k = i(70807),
            x = i(39886),
            I = i(48813),
            w = d.default.memo(function (e) {
              var t = e.passenger,
                i = void 0 === t ? {} : t,
                a = e.validateIndex,
                n = void 0 === a ? 0 : a,
                s = e.supportCardList,
                r = void 0 === s ? null : s,
                o = e.updatePassenger,
                c = void 0 === o ? function () {} : o,
                l = e.onShowTicketTypeDrawer,
                d = void 0 === l ? function () {} : l,
                u = e.onShowCardTypeDrawer,
                p = void 0 === u ? function () {} : u;
              if (h.Z.isEmptyObject(r) || r.length <= 0)
                return (0, I.tZ)(I.HY, {});
              var m = i || {},
                y = m.CNName,
                T = m.ENFirstName,
                v = m.ENLastName,
                x = m.CommonPassengerCard,
                w = m.Birthday,
                Z = m.Gender,
                b = r[n],
                P = N.Z.getCardNumByCardType(x, null == b ? void 0 : b.idType);
              return (0, I.BX)(f.View, {
                className: "passenger-booking",
                children: [
                  (0, I.BX)(f.View, {
                    className: "p-edit-item flex-align-items-center",
                    children: [
                      (0, I.tZ)(f.Text, {
                        className: "label",
                        children: "乘客类型",
                      }),
                      (0, I.tZ)(f.Text, {
                        className: "edit-value flex-1",
                        id: "AOAT",
                        onClick: d,
                        children:
                          (null == i ? void 0 : i.passengerTypeDesc) || "",
                      }),
                      (0, I.tZ)(f.Text, {
                        className: "iconfont ifont-arrdown",
                        id: "AOAU",
                        onClick: d,
                      }),
                    ],
                  }),
                  (null == b ? void 0 : b.cname) &&
                    (0, I.BX)(f.View, {
                      className: "p-edit-item flex-align-items-center",
                      children: [
                        (0, I.tZ)(f.Text, {
                          className: "label",
                          children: "姓名",
                        }),
                        (0, I.tZ)(f.Input, {
                          className: "edit-value flex-1",
                          type: "text",
                          placeholder: "与乘车人证件姓名一致",
                          placeholderClass: "placeholder-desc",
                          onInput: function (e) {
                            return c(e.detail.value, k.cx.CNAME);
                          },
                          value: y,
                        }),
                      ],
                    }),
                  (null == b ? void 0 : b.ename) &&
                    (0, I.BX)(f.View, {
                      className: "p-edit-item flex-align-items-center",
                      children: [
                        (0, I.tZ)(f.Text, {
                          className: "label",
                          children: "英文姓",
                        }),
                        (0, I.tZ)(f.Input, {
                          className: "edit-value flex-1",
                          type: "text",
                          placeholder: "拼音姓/Sur name",
                          placeholderClass: "placeholder-desc",
                          onInput: function (e) {
                            return c(e.detail.value, k.cx.LENAME);
                          },
                          value: v,
                        }),
                      ],
                    }),
                  (null == b ? void 0 : b.ename) &&
                    (0, I.BX)(f.View, {
                      className: "p-edit-item flex-align-items-center",
                      children: [
                        (0, I.tZ)(f.Text, {
                          className: "label",
                          children: "英文名",
                        }),
                        (0, I.tZ)(f.Input, {
                          className: "edit-value flex-1",
                          type: "text",
                          placeholder: "拼音名/Given name",
                          placeholderClass: "placeholder-desc",
                          onInput: function (e) {
                            return c(e.detail.value, k.cx.FENAME);
                          },
                          value: T,
                        }),
                      ],
                    }),
                  (null == b ? void 0 : b.gender) &&
                    (0, I.BX)(f.View, {
                      className: "p-edit-item flex-align-items-center",
                      children: [
                        (0, I.tZ)(f.Text, {
                          className: "label",
                          children: "性别",
                        }),
                        (0, I.BX)(f.View, {
                          className: "gender-item mr40 flex-align-items-center",
                          children: [
                            (0, I.tZ)(f.Text, {
                              className: "iconfont2 ".concat(
                                "M" === Z || "m" === Z
                                  ? "ifont2-checkboxed"
                                  : "ifont2-checkbox"
                              ),
                              id: "AOAV",
                              onClick: function () {
                                return c("M", k.cx.GENDER);
                              },
                            }),
                            (0, I.tZ)(f.Text, {
                              className: "edit-value",
                              children: "男性",
                            }),
                          ],
                        }),
                        (0, I.BX)(f.View, {
                          className: "gender-item flex-align-items-center",
                          children: [
                            (0, I.tZ)(f.Text, {
                              className: "iconfont2 ".concat(
                                "F" === Z || "f" === Z
                                  ? "ifont2-checkboxed"
                                  : "ifont2-checkbox"
                              ),
                              id: "AOAW",
                              onClick: function () {
                                return c("F", k.cx.GENDER);
                              },
                            }),
                            (0, I.tZ)(f.Text, {
                              className: "edit-value",
                              children: "女性",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (null == b ? void 0 : b.idType) &&
                    (null == r ? void 0 : r.length) <= 1 &&
                    (0, I.BX)(f.View, {
                      className: "p-edit-item flex-align-items-center",
                      children: [
                        (0, I.tZ)(f.Text, {
                          className: "label",
                          children: "证件类型",
                        }),
                        (0, I.tZ)(f.Text, {
                          className: "edit-value flex-1",
                          id: "AOAX",
                          onClick: function () {
                            return (0, g.showToast)("目前仅支持一种证件下单");
                          },
                          children: b.idType,
                        }),
                      ],
                    }),
                  (null == b ? void 0 : b.idType) &&
                    (null == r ? void 0 : r.length) > 1 &&
                    (0, I.BX)(f.View, {
                      className: "p-edit-item flex-align-items-center",
                      children: [
                        (0, I.tZ)(f.Text, {
                          className: "label",
                          children: "证件类型",
                        }),
                        (0, I.tZ)(f.Text, {
                          className: "edit-value flex-1",
                          id: "AOAY",
                          onClick: p,
                          children: b.idType,
                        }),
                        (0, I.tZ)(f.Text, {
                          className: "iconfont2 ifont2-zhankai_linea_12",
                          id: "AOAZ",
                          onClick: p,
                        }),
                      ],
                    }),
                  (null == b ? void 0 : b.idNum) &&
                    (0, I.BX)(f.View, {
                      className: "p-edit-item flex-align-items-center",
                      children: [
                        (0, I.tZ)(f.Text, {
                          className: "label",
                          children: null == b ? void 0 : b.idType,
                        }),
                        (0, I.tZ)(f.Input, {
                          className: "edit-value flex-1",
                          type: "身份证" === b.idType ? "idcard" : "text",
                          placeholder: "乘客证件号码",
                          placeholderClass: "placeholder-desc",
                          onInput: function (e) {
                            return c(e.detail.value, k.cx.CARDNUM);
                          },
                          value: P,
                        }),
                      ],
                    }),
                  (null == b ? void 0 : b.birth) &&
                    (0, I.BX)(f.View, {
                      className: "p-edit-item flex-align-items-center",
                      children: [
                        (0, I.tZ)(f.Text, {
                          className: "label",
                          children: "出生日期",
                        }),
                        (0, I.tZ)(f.Picker, {
                          className: "birthdate",
                          mode: "date",
                          start: "1890-01-01",
                          end: "2099-12-31",
                          value: w,
                          onChange: function (e) {
                            return (function (e) {
                              var t = e;
                              C()(e).isAfter(C()()) &&
                                (t = C()().format("YYYY-MM-DD")),
                                c(t, k.cx.BIRTH);
                            })(e.detail.value);
                          },
                          children: (0, I.BX)(f.View, {
                            className: "flex-align-items-center ".concat(
                              w ? "" : "placeholder-desc"
                            ),
                            children: [
                              (0, I.tZ)(f.Text, {
                                className: "flex-1",
                                children: w || "选择出生日期",
                              }),
                              (0, I.tZ)(f.Text, {
                                className: "iconfont2 ifont2-zhankai_linea_12",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              });
            }),
            Z = d.default.memo(function () {
              return (0,
              I.BX)(f.View, { className: "tips", children: [(0, I.tZ)(f.View, { className: "tit", children: "请您在新增/编辑乘客前仔细阅读以下内容：" }), (0, I.tZ)(f.View, { className: "desc", children: "根据实名制要求，购买船票需提交乘客的身份证信息，您在乘船时可能需要出具对应身份证件用户验证，请确保录入信息真实有效。平台将保护您录入的身份证件信息，且仅在具体订票过程中授权提供给与您进行交易的商户/承运人。" })] });
            }),
            b = d.default.memo(function (e) {
              var t = e.onSave,
                i = void 0 === t ? function () {} : t;
              return (0,
              I.tZ)(f.View, { className: "bottom-fixed-panel", id: "AOAN", onClick: i, children: (0, I.tZ)(f.Button, { className: "confirm-btn", children: "确定" }) });
            }),
            P = i(90129),
            A = i(34229),
            B = d.default.memo(function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                a = e.ticketTypeList,
                n = void 0 === a ? [] : a,
                s = e.selectedTicketType,
                r = void 0 === s ? null : s,
                o = e.onClose,
                c = void 0 === o ? function () {} : o,
                l = e.onComfirm,
                u = void 0 === l ? function () {} : l,
                p = (0, d.useState)(""),
                m = (0, P.Z)(p, 2),
                h = m[0],
                g = m[1];
              if (
                ((0, d.useEffect)(
                  function () {
                    null != r && r.ticketTypeId && g(r.ticketTypeId);
                  },
                  [null == r ? void 0 : r.ticketTypeId]
                ),
                (null == n ? void 0 : n.length) <= 0)
              )
                return (0, I.tZ)(I.HY, {});
              return (0, I.tZ)(A.ZtDrawer, {
                show: i,
                isShowClose: !1,
                className: "pas-type-select-drawer",
                onWrapClose: c,
                children: (0, I.BX)(f.View, {
                  className: "content",
                  children: [
                    (0, I.tZ)(f.View, {
                      className: "tit",
                      children: "选择票种",
                    }),
                    n.map(function (e, t) {
                      return (0, I.BX)(
                        f.View,
                        {
                          className:
                            "pas-type-item flex-align-items-center ".concat(
                              e.isSale ? "" : "disabled"
                            ),
                          children: [
                            e.icon &&
                              (0, I.tZ)(f.Image, {
                                className: "icon",
                                src: e.icon,
                              }),
                            (0, I.BX)(f.View, {
                              className: "name-desc flex-1 flex flex-column",
                              children: [
                                (0, I.tZ)(f.Text, {
                                  className: "type-name",
                                  children: e.ticketType,
                                }),
                                (0, I.tZ)(f.Text, {
                                  className: "type-desc",
                                  children: e.ticketRuleDesc,
                                }),
                              ],
                            }),
                            (0, I.BX)(f.View, {
                              className: "price",
                              children: ["¥", e.ticketPrice, "/张"],
                            }),
                            (0, I.tZ)(f.View, {
                              className: "iconfont2 ".concat(
                                h === e.ticketTypeId
                                  ? "ifont2-checkboxed"
                                  : "ifont2-checkbox"
                              ),
                              id: "AOAQ",
                              onClick: function () {
                                return (function (e) {
                                  e.isSale && g(e.ticketTypeId);
                                })(e);
                              },
                            }),
                          ],
                        },
                        t
                      );
                    }),
                    (0, I.BX)(f.View, {
                      className: "bottom-fixed-btn flex-align-items-center",
                      children: [
                        (0, I.tZ)(f.Button, {
                          className: "btn cancel-btn flex-1",
                          id: "AOAR",
                          onClick: function () {
                            g(r.ticketTypeId), c();
                          },
                          children: "取消选择",
                        }),
                        (0, I.tZ)(f.Button, {
                          className: "btn confirm-btn flex-1",
                          id: "AOAS",
                          onClick: function () {
                            var e = n.find(function (e) {
                              return e.ticketTypeId === h;
                            });
                            u(e);
                          },
                          children: "确定",
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            S = d.default.memo(function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                a = e.cardTypeList,
                n = void 0 === a ? [] : a,
                s = e.onClose,
                r = void 0 === s ? function () {} : s,
                o = e.onSelect,
                c = void 0 === o ? function () {} : o;
              return (null == n ? void 0 : n.length) <= 0
                ? (0, I.tZ)(f.View, {})
                : (0, I.tZ)(A.ZtDrawer, {
                    show: i,
                    isDefineHead: !0,
                    className: "ship-editpas-cardtype-drawer",
                    onWrapClose: r,
                    children: (0, I.BX)(f.View, {
                      className: "content",
                      children: [
                        (0, I.tZ)(f.View, {
                          className: "drawer-tit",
                          children: "选择证件类型",
                        }),
                        (0, I.tZ)(f.View, {
                          className: "iconfont2 ifont2-close",
                          id: "AOAO",
                          onClick: r,
                        }),
                        (0, I.tZ)(f.View, {
                          className: "type-list",
                          children: n.map(function (e, t) {
                            return (0, I.BX)(
                              d.Fragment,
                              {
                                children: [
                                  (0, I.tZ)(f.View, {
                                    className: "item",
                                    id: "AOAP",
                                    onClick: function () {
                                      return c(t);
                                    },
                                    children: e,
                                  }),
                                  t !== n.length - 1 &&
                                    (0, I.tZ)(f.View, { className: "h-line" }),
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
            D =
              (0, m.h)(!1, { usePageWrapper: !0 })(
                (a = (function (e) {
                  (0, c.Z)(i, e);
                  var t = (0, l.Z)(i);
                  function i(e) {
                    var a;
                    return (
                      (0, r.Z)(this, i),
                      ((a = t.call(this, e)).pageId = ""),
                      (a.state = {
                        passenger: null,
                        isShowTicketDrawer: !1,
                        ticketTypeList: [],
                        selectedTicketType: null,
                        isShowCardTypeSelectDrawer: !1,
                        cardTypeList: [],
                      }),
                      a
                    );
                  }
                  return (
                    (0, o.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = p().getCurrentInstance().router.params,
                            t = e.passengerInfo,
                            i = e.ticketTypeList,
                            a = e.supportCardList,
                            n = e.isForeign,
                            s =
                              null == i
                                ? void 0
                                : i.filter(function (e) {
                                    return (
                                      "student" !== e.ticketTypeId &&
                                      "elder" !== e.ticketTypeId
                                    );
                                  });
                          (this.supportCardList = a), (this.isForeign = n);
                          var r = t;
                          if (h.Z.isEmptyObject(r))
                            r = {
                              passengerTypeDesc: "成人票",
                              ticketTypeId: "adult",
                            };
                          else if (r.ticketTypeId) {
                            if (
                              null == s
                                ? void 0
                                : s.some(function (e) {
                                    return (
                                      e.ticketTypeId === r.ticketTypeId &&
                                      !e.isSale
                                    );
                                  })
                            ) {
                              var o = null == s ? void 0 : s[0];
                              (r.ticketTypeId =
                                (null == o ? void 0 : o.ticketTypeId) ||
                                "adult"),
                                (r.passengerTypeDesc =
                                  (null == o ? void 0 : o.ticketType) ||
                                  "成人票");
                            }
                          } else
                            (r.ticketTypeId = "adult"),
                              (r.passengerTypeDesc = "成人票");
                          var c,
                            l =
                              (null == s
                                ? void 0
                                : s.find(function (e) {
                                    return (
                                      e.ticketTypeId === r.ticketTypeId &&
                                      e.isSale
                                    );
                                  })) || (null == s ? void 0 : s[0]),
                            d = this.getCardTypeList(),
                            u = 0;
                          if (n)
                            if (
                              null !== (c = r) &&
                              void 0 !== c &&
                              c.foreignInfo
                            )
                              u =
                                null == a
                                  ? void 0
                                  : a.findIndex(function (e) {
                                      return e.country == r.foreignInfo.country;
                                    });
                            else {
                              var m = this.getInitForeignInfo(0);
                              r.foreignInfo = m;
                            }
                          else
                            u = this.getInitValidateIndex(
                              r.lastEditCardType,
                              r
                            );
                          this.setState({
                            passenger: r,
                            validateIndex: u,
                            ticketTypeList: s,
                            selectedTicketType: l,
                            cardTypeList: d,
                          });
                        },
                      },
                      {
                        key: "getInitValidateIndex",
                        value: function (e, t) {
                          var i;
                          if (e) {
                            var a,
                              n = N.Z.getCardTypeName(e);
                            i =
                              null === (a = this.supportCardList) ||
                              void 0 === a
                                ? void 0
                                : a.findIndex(function (e) {
                                    return e.idType == n;
                                  });
                          } else
                            for (
                              var s = 0, r = this.supportCardList.length;
                              s < r;
                              s++
                            ) {
                              var o = this.supportCardList[s];
                              if (
                                N.Z.getCardNumByCardType(
                                  t.CommonPassengerCard,
                                  o.idType
                                )
                              ) {
                                i = s;
                                break;
                              }
                            }
                          return i || 0;
                        },
                      },
                      {
                        key: "getInitForeignInfo",
                        value: function (e) {
                          var t,
                            i = this.supportCardList[e],
                            a = { country: i.country, cardList: [] };
                          return (
                            null === (t = i.requiredCard) ||
                              void 0 === t ||
                              t.forEach(function (e) {
                                var t,
                                  i = {
                                    key: e.idType,
                                    value: "",
                                    infoList: [],
                                  };
                                null === (t = e.date) ||
                                  void 0 === t ||
                                  t.forEach(e.date, function (e) {
                                    i.infoList.push({ key: e.name, value: "" });
                                  }),
                                  a.cardList.push(i);
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
                            i = t.passenger,
                            a = t.validateIndex,
                            n = this.supportCardList[a],
                            s = JSON.parse(JSON.stringify(i));
                          if (
                            ((s.passengerTypeDesc = i.passengerTypeDesc),
                            (s.ticketTypeId = i.ticketTypeId),
                            (s.PassengerID = i.PassengerID
                              ? i.PassengerID
                              : ""),
                            (s.PassengerType = N.Z.covertPassengerType(
                              s.ticketTypeId
                            )),
                            n.cname)
                          ) {
                            var r = N.Z.checkPassengerInput("cname", i.CNName);
                            if (r) return void (0, g.showToast)(r);
                            (s.CNName = i.CNName),
                              s.displayName || (s.displayName = i.CNName);
                          }
                          if (n.ename) {
                            var o =
                              N.Z.checkPassengerInput("ename", i.ENFirstName) ||
                              N.Z.checkPassengerInput("ename", i.ENLastName);
                            if (o) return void (0, g.showToast)(o);
                            (s.ENFirstName = i.ENFirstName),
                              (s.ENLastName = i.ENLastName),
                              s.displayName ||
                                (s.displayName = ""
                                  .concat(i.ENLastName, "/")
                                  .concat(i.ENFirstName));
                          }
                          if (n.gender) {
                            if (!i.Gender)
                              return void (0, g.showToast)("请选择乘客性别");
                            s.Gender = i.Gender;
                          }
                          if (n.idNum) {
                            var c,
                              l = N.Z.getCardCode(n.idType),
                              d = N.Z.getCardNumByCardType(
                                i.CommonPassengerCard,
                                n.idType
                              );
                            if (
                              (c =
                                "1" == l
                                  ? N.Z.checkPassengerInput("idCard", d)
                                  : "2" == l
                                  ? N.Z.checkPassengerInput("passCard", d)
                                  : N.Z.checkPassengerInput("card", d))
                            )
                              return void (0, g.showToast)(c);
                            this.updateCommonPassengerCard(s, l, d),
                              (s.lastEditCardType = l);
                          } else s.lastEditCardType = "";
                          if (n.birth) {
                            if (!i.Birthday)
                              return void (0, g.showToast)("请选择出生日期");
                            s.Birthday = i.Birthday;
                          }
                          if (
                            (this.isForeign && (s.foreignInfo = i.foreignInfo),
                            "childCarry" == i.ticketTypeId ||
                              "child" == i.ticketTypeId)
                          ) {
                            var u = N.Z.getCardNumByCardType(
                              i.CommonPassengerCard,
                              n.idType
                            );
                            if (u && 18 === u.length) {
                              var p,
                                m =
                                  u.substring(6, 10) +
                                  "-" +
                                  u.substring(10, 12) +
                                  "-" +
                                  u.substring(12, 14);
                              if (N.Z.checkAgeOlderThan18(m))
                                return void (0, g.showToast)(
                                  "childCarry" == i.ticketTypeId
                                    ? "满18岁不可预订携童票"
                                    : "满18岁不可预订儿童票"
                                );
                              if (N.Z.getAge(m) < 16)
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
                                        s,
                                        e.supportCardList,
                                        e.isForeign
                                      );
                                    },
                                  })
                                );
                            }
                          } else if ("adult" == i.ticketTypeId) {
                            var f = N.Z.getCardNumByCardType(
                              i.CommonPassengerCard,
                              n.idType
                            );
                            if (f && 18 === f.length) {
                              var h,
                                y =
                                  f.substring(6, 10) +
                                  "-" +
                                  f.substring(10, 12) +
                                  "-" +
                                  f.substring(12, 14);
                              if (N.Z.getAge(y) < 16)
                                return void (
                                  null === (h = this.showMultiButtonDialog) ||
                                  void 0 === h ||
                                  h.call(this, {
                                    title: "儿童监护人确认",
                                    content:
                                      "您正在录入未成年人信息，请确认您是该未成年人的监护人或已征得其监护人同意",
                                    leftButtonName: "暂缓",
                                    rightButtonName: "确定添加",
                                    onRightButtonClick: function () {
                                      e.continueAddPsgAfterCheckAge(
                                        s,
                                        e.supportCardList,
                                        e.isForeign
                                      );
                                    },
                                  })
                                );
                            }
                          }
                          this.continueAddPsgAfterCheckAge(
                            s,
                            this.supportCardList,
                            this.isForeign
                          );
                        },
                      },
                      {
                        key: "updateCommonPassengerCard",
                        value: function (e, t, i) {
                          e.CommonPassengerCard || (e.CommonPassengerCard = []);
                          for (
                            var a = !1, n = 0, s = e.CommonPassengerCard.length;
                            n < s;
                            n++
                          ) {
                            var r = e.CommonPassengerCard[n];
                            if (r.CardType == t) {
                              (r.CardNo = i), (a = !0);
                              break;
                            }
                          }
                          a ||
                            e.CommonPassengerCard.push({
                              CardType: t,
                              CardNo: i,
                            });
                        },
                      },
                      {
                        key: "continueAddPsgAfterCheckAge",
                        value: function (e, t, i) {
                          var a = this;
                          if (
                            (console.log("submitPassenger", e),
                            (e.CommonPassengerCardList = e.CommonPassengerCard),
                            T.ZP.isLogin)
                          ) {
                            var n = {
                              ParameterList: [
                                { Key: "BizType", Value: "BUS" },
                                { Key: "BookingType", Value: "B" },
                                {
                                  Key: "EditType",
                                  Value: e.PassengerID ? "1" : "0",
                                },
                              ],
                              CommonPassengerInfo: e,
                            };
                            (0, g.showLoading)("正在保存"),
                              console.log(
                                "submitPassenger---\x3e",
                                JSON.stringify(n)
                              ),
                              (0, x.pj)(n)
                                .then(function (n) {
                                  (0, g.hideLoading)(),
                                    (0, g.showToast)("保存成功"),
                                    e.PassengerID ||
                                      (e.PassengerID =
                                        n.transactionID || n.TransactionID),
                                    (!e.lastEditCardType && e.displayName) ||
                                      (e.displayName =
                                        N.Z.getPassengerDisplayName(e, t, i)),
                                    a.invokeCallback(e),
                                    a.navigateBack();
                                })
                                .catch(function (e) {
                                  console.log("SavePassenger.request.FAIL", e),
                                    (0, g.hideLoading)(),
                                    (0, g.showToast)(
                                      "保存失败, 请检查信息后重试"
                                    );
                                });
                          } else
                            e.PassengerID || (e.PassengerID = N.Z.getUuid()),
                              this.invokeCallback(e),
                              this.navigateBack();
                        },
                      },
                      {
                        key: "updatePassenger",
                        value: function (e, t) {
                          console.log("updatePassenger", e, t);
                          var i = this.state.validateIndex,
                            a =
                              p().getCurrentInstance().router.params
                                .supportCardList[i],
                            n = this.state.passenger;
                          switch (t) {
                            case k.cx.CNAME:
                              n.CNName = e;
                              break;
                            case k.cx.GENDER:
                              n.Gender = e;
                              break;
                            case k.cx.FENAME:
                              n.ENFirstName = e;
                              break;
                            case k.cx.LENAME:
                              n.ENLastName = e;
                              break;
                            case k.cx.CARDNUM:
                              var s = N.Z.getCardCode(a.idType);
                              this.updateCardInfo(n, e, s);
                              break;
                            case k.cx.BIRTH:
                              n.Birthday = C()(e).format("YYYY-MM-DD");
                              break;
                            case k.cx.NATIONALITY:
                              (n.CountryCode = e.countryCode),
                                (n.Nationality = e.countryName);
                              break;
                            case k.cx.FREQUENCY:
                              n.frequency = e;
                              break;
                            case k.cx.STAYDAYS:
                              n.stayDays = e;
                          }
                          console.log("passethou", n),
                            this.setState({ passenger: n });
                        },
                      },
                      {
                        key: "updateCardInfo",
                        value: function (e, t, i) {
                          console.log("updateCardInfo", e, t),
                            e.CommonPassengerCard ||
                              ((e.CommonPassengerCard = []),
                              e.CommonPassengerCard.push({
                                CardType: i,
                                CardNo: "",
                              }));
                          var a = !1;
                          e.CommonPassengerCard.forEach(function (e) {
                            i == e.CardType && ((a = !0), (e.CardNo = t));
                          }),
                            a ||
                              e.CommonPassengerCard.push({
                                CardType: i,
                                CardNo: t,
                              });
                        },
                      },
                      {
                        key: "onChangeTicketType",
                        value: function (e) {
                          var t = this.state,
                            i = t.passenger,
                            a = t.selectedTicketType;
                          e.ticketTypeId !==
                          (null == a ? void 0 : a.ticketTypeId)
                            ? this.setState({
                                isShowTicketDrawer: !1,
                                selectedTicketType: e,
                                passenger: (0, s.Z)(
                                  (0, s.Z)({}, i),
                                  {},
                                  {
                                    ticketTypeId: e.ticketTypeId,
                                    passengerTypeDesc: e.ticketType,
                                  }
                                ),
                              })
                            : this.setState({ isShowTicketDrawer: !1 });
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
                          this.setState({
                            isShowCardTypeSelectDrawer: !1,
                            validateIndex: e,
                          });
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          var e,
                            t =
                              null ===
                                (e = p().getCurrentInstance().router.params) ||
                              void 0 === e
                                ? void 0
                                : e.passengerInfo,
                            i = h.Z.isEmptyObject(t);
                          return (0, I.tZ)(f.View, {
                            children: i ? "新增乘客" : "编辑乘客",
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.passenger,
                            a = t.validateIndex,
                            n = t.isShowTicketDrawer,
                            s = t.ticketTypeList,
                            r = t.selectedTicketType,
                            o = t.isShowCardTypeSelectDrawer,
                            c = t.cardTypeList;
                          return (0, I.BX)(f.View, {
                            className: "ship-edit-passenger",
                            children: [
                              (0, I.tZ)(w, {
                                passenger: i,
                                validateIndex: a,
                                supportCardList: this.supportCardList,
                                updatePassenger:
                                  this.updatePassenger.bind(this),
                                onShowTicketTypeDrawer: function () {
                                  return e.setState({ isShowTicketDrawer: !0 });
                                },
                                onShowCardTypeDrawer: function () {
                                  return e.setState({
                                    isShowCardTypeSelectDrawer: !0,
                                  });
                                },
                              }),
                              (0, I.tZ)(Z, {}),
                              (0, I.tZ)(b, {
                                onSave: this.onSavePassenger.bind(this),
                              }),
                              (0, I.tZ)(B, {
                                visible: n,
                                selectedTicketType: r,
                                ticketTypeList: s,
                                onClose: function () {
                                  return e.setState({ isShowTicketDrawer: !1 });
                                },
                                onComfirm: this.onChangeTicketType,
                              }),
                              (0, I.tZ)(S, {
                                visible: o,
                                cardTypeList: c,
                                onClose: function () {
                                  return e.setState({
                                    isShowCardTypeSelectDrawer: !1,
                                  });
                                },
                                onSelect: function (t) {
                                  return e.onSelectCardType(t);
                                },
                              }),
                              (0, I.tZ)(y.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(d.default.Component))
              ) || a;
          Page(
            (0, n.createPageConfig)(
              D,
              "pages/ship/editPassenger/index",
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
        e.O(0, [606, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(27702);
        }),
          e.O();
      },
    ]);
})();
