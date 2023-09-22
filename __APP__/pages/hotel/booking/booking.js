!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [94895],
      {
        83029: function (e, t, i) {
          var a,
            n,
            o = i(32180),
            r = i(57042),
            c = i(24460),
            l = i(21867),
            s = i(86066),
            d = i(45023),
            u = i(90983),
            h = i(90129),
            m = i(22276),
            p = i(79301),
            f = i(95308),
            g = i(298),
            k = i(52500),
            v = i(71515),
            b = i(92954),
            w = i.n(b),
            x = i(81957),
            y = i(48792),
            I = i.n(y),
            P = i(93761),
            N = i(79910),
            T = i(80626),
            Z = i(34229),
            C = i(49120),
            B = i(77900),
            V = i(3205),
            L = i(20592),
            D = i(79404),
            A = i(8271),
            R = i.n(A),
            X = i(79792),
            S = i(18783),
            F = i(39173),
            E = i(17767),
            M = i(73130),
            _ = i(43163),
            O = i(92667),
            q = i(90668),
            z = i(30071),
            G = i(48813),
            U = (function (e) {
              (0, l.Z)(i, e);
              var t = (0, s.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, r.Z)(this, i),
                  ((a = t.call(this, e)).state = { show: !1, info: {} }),
                  a
                );
              }
              return (
                (0, c.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.setState({
                        show: this.props.visible,
                        info: this.props.modalInfo,
                      });
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      this.setState({ show: e.visible, info: e.modalInfo });
                    },
                  },
                  {
                    key: "onClickClose",
                    value: function () {
                      this.props.onClose();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.show,
                        i = e.info;
                      return (0, G.tZ)(v.View, {
                        className: "hotel-back-tips-modal",
                        children:
                          t &&
                          (0, G.BX)(v.View, {
                            className: "backtips-modal",
                            children: [
                              (0, G.tZ)(v.View, {
                                className:
                                  "modal-mask " + (t ? "visible" : "hidden"),
                                id: "AXAD",
                                onClick: this.onClickClose.bind(this),
                              }),
                              (0, G.BX)(v.View, {
                                className:
                                  "modal-view " + (t ? "visible" : "hidden"),
                                children: [
                                  (0, G.BX)(v.View, {
                                    className: "modal-bar",
                                    children: [
                                      (0, G.tZ)(v.View, {
                                        className: "left-btn",
                                      }),
                                      (0, G.tZ)(v.View, {
                                        className: "title",
                                        children: i.title,
                                      }),
                                      (0, G.tZ)(v.View, {
                                        className: "right-btn",
                                        children: (0, G.tZ)(v.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AXAE",
                                          onClick: this.onClickClose.bind(this),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, G.tZ)(v.View, {
                                    className: "modal-content",
                                    children:
                                      i.content &&
                                      i.content.map(function (e) {
                                        return (0,
                                        G.tZ)(v.Block, { children: (0, G.tZ)(v.View, { className: "txt", children: e.title }) }, "index");
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      });
                    },
                  },
                ]),
                i
              );
            })(k.default.Component),
            H = i(28333),
            j = {
              today: R()().format("YYYY-MM-DD"),
              headerBanner:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/lianhehuiyuan@3x.webp",
              passengerConfigs: {
                name: "",
                enSurname: "",
                enName: "",
                mobile: "",
                email: "",
                iDCardType: "",
                idCardNo: "",
                birthday: "",
                sex: "",
                policySelected: !1,
              },
            },
            K = k.default.memo(function (e) {
              var t,
                i,
                a,
                n,
                o,
                r,
                c = e.venderData,
                l = e.onStateChange,
                s = (0, k.useState)(!1),
                d = (0, h.Z)(s, 2),
                u = d[0],
                m = d[1],
                p = (0, k.useState)(
                  (0, g.Z)(
                    (0, g.Z)({}, j.passengerConfigs),
                    {},
                    {
                      iDCardType:
                        ((null === (t = c.iDCardType) ||
                        void 0 === t ||
                        null === (i = t.itemList) ||
                        void 0 === i
                          ? void 0
                          : i.length) > 0 &&
                          c.iDCardType.itemList[0].itemId) ||
                        "",
                    }
                  )
                ),
                f = (0, h.Z)(p, 2),
                b = f[0],
                w = f[1],
                x = (0, k.useCallback)(
                  function (e, t) {
                    var i = N.Z.deepCopy(b);
                    (i[t] = e), w(i), l(i);
                  },
                  [b, l]
                ),
                y = (0, k.useCallback)(
                  function (e) {
                    b.iDCardType !== e && (m(!1), x(e, "iDCardType"));
                  },
                  [b, x]
                ),
                I = (0, k.useCallback)(
                  function (e) {
                    b.sex !== e && x(e, "sex");
                  },
                  [b, x]
                ),
                P = (0, k.useCallback)(function (e) {
                  V.Z.twebview({ data: { url: e } });
                }, []),
                T = "background-image: url(".concat(j.headerBanner, ")"),
                C = "background-image: url(".concat(c.memberLevelLogoUrl, ")");
              return (0, G.BX)(v.View, {
                className: "ht-booking-card",
                children: [
                  (0, G.BX)(v.View, {
                    className: "register",
                    children: [
                      c.title &&
                        (0, G.BX)(v.View, {
                          className: "reg-top",
                          style: T,
                          children: [
                            (0, G.BX)(v.View, {
                              className: "tit",
                              children: [
                                c.memberLevelLogoUrl &&
                                  (0, G.tZ)(v.View, {
                                    className: "crown",
                                    style: C,
                                  }),
                                (0, G.tZ)(Z.ZtRichText, {
                                  nodes: N.Z.convertAppTextToHtmlStr(c.title),
                                }),
                              ],
                            }),
                            c.subTitle &&
                              (0, G.tZ)(v.View, {
                                className: "desc",
                                children: (0, G.tZ)(Z.ZtRichText, {
                                  nodes: N.Z.convertAppTextToHtmlStr(
                                    c.subTitle
                                  ),
                                }),
                              }),
                          ],
                        }),
                      c.name &&
                        (0, G.BX)(v.View, {
                          className: "item",
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "label",
                              children: "中文姓名",
                            }),
                            (0, G.tZ)(v.Input, {
                              className: "input",
                              onInput: function (e) {
                                return x(e.detail.value.trim(), "name");
                              },
                              placeholder: "填写真实姓名，用于注册集团会员",
                              placeholderClass: "input-placeholder",
                            }),
                          ],
                        }),
                      c.iDCardType &&
                        (0, G.BX)(v.View, {
                          className: "item",
                          id: "AXAl",
                          onClick: function () {
                            return m(!0);
                          },
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "label",
                              children: "证件类型",
                            }),
                            (0, G.tZ)(v.View, {
                              className: "input",
                              children:
                                null ===
                                  (a = c.iDCardType.itemList.find(function (e) {
                                    return e.itemId === b.iDCardType;
                                  })) || void 0 === a
                                  ? void 0
                                  : a.itemText,
                            }),
                          ],
                        }),
                      c.idCardNo &&
                        (0, G.BX)(v.View, {
                          className: "item",
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "label",
                              children: "证件号码",
                            }),
                            (0, G.tZ)(v.Input, {
                              className: "input",
                              type: "idcard",
                              onInput: function (e) {
                                return x(e.detail.value.trim(), "idCardNo");
                              },
                              placeholder: "输入证件号码，用于注册集团会员",
                              placeholderClass: "input-placeholder",
                            }),
                          ],
                        }),
                      c.enSurname &&
                        (0, G.BX)(v.View, {
                          className: "item",
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "label",
                              children: "英文姓氏",
                            }),
                            (0, G.tZ)(v.Input, {
                              className: "input",
                              onInput: function (e) {
                                return x(e.detail.value.trim(), "enSurname");
                              },
                              placeholder: "姓氏拼音，如张三则填ZHANG",
                              placeholderClass: "input-placeholder",
                            }),
                          ],
                        }),
                      c.enName &&
                        (0, G.BX)(v.View, {
                          className: "item",
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "label",
                              children: "英文名字",
                            }),
                            (0, G.tZ)(v.Input, {
                              className: "input",
                              onInput: function (e) {
                                return x(e.detail.value.trim(), "enName");
                              },
                              placeholder: "名字拼音，如张三则填SAN",
                              placeholderClass: "input-placeholder",
                            }),
                          ],
                        }),
                      c.mobile &&
                        (0, G.BX)(v.View, {
                          className: "item",
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "label",
                              children: "手机号码",
                            }),
                            (0, G.tZ)(v.Input, {
                              className: "input",
                              type: "number",
                              onInput: function (e) {
                                return x(e.detail.value.trim(), "mobile");
                              },
                              placeholder: "用于注册集团会员",
                              placeholderClass: "input-placeholder",
                            }),
                          ],
                        }),
                      c.email &&
                        (0, G.BX)(v.View, {
                          className: "item",
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "label",
                              children: "邮箱地址",
                            }),
                            (0, G.tZ)(v.Input, {
                              className: "input",
                              onInput: function (e) {
                                return x(e.detail.value.trim(), "email");
                              },
                              placeholder: "用于注册集团会员",
                              placeholderClass: "input-placeholder",
                            }),
                          ],
                        }),
                      c.birthday &&
                        (0, G.BX)(v.View, {
                          className: "item",
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "label",
                              children: "生日",
                            }),
                            (0, G.tZ)(v.Picker, {
                              className: "input",
                              mode: "date",
                              start: "1990-01-01",
                              end: j.today,
                              value: b.birthday,
                              onChange: function (e) {
                                return x(e.detail.value, "birthday");
                              },
                              children: (0, G.tZ)(v.View, {
                                className: b.passengerBirth
                                  ? ""
                                  : "input-placeholder",
                                children:
                                  "" === b.birthday
                                    ? "请填写您的出生日期"
                                    : b.birthday,
                              }),
                            }),
                          ],
                        }),
                      c.sex &&
                        (0, G.BX)(v.View, {
                          className: "item",
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "label",
                              children: "性别",
                            }),
                            null === (n = c.sex) ||
                            void 0 === n ||
                            null === (o = n.itemList) ||
                            void 0 === o
                              ? void 0
                              : o.map(function (e) {
                                  return (0, G.BX)(
                                    v.View,
                                    {
                                      className: "input",
                                      children: [
                                        (0, G.tZ)(v.Text, {
                                          className: "".concat(
                                            e.itemId === b.sex
                                              ? "ifont2-checkboxed iconfont2"
                                              : "ifont2-checkbox iconfont2"
                                          ),
                                          id: "AXAm",
                                          onClick: function () {
                                            return I(e.itemId);
                                          },
                                        }),
                                        e.itemText,
                                      ],
                                    },
                                    e.itemId
                                  );
                                }),
                          ],
                        }),
                      (null === (r = c.privacyTermsList) || void 0 === r
                        ? void 0
                        : r.length) > 0 &&
                        (0, G.BX)(v.View, {
                          className: "policy",
                          children: [
                            (0, G.tZ)(H.Z, {
                              name: "checkbox".concat(
                                (0, q.gP)(b.policySelected, "ed")
                              ),
                              id: "AXAn",
                              onClick: function () {
                                return x(!b.policySelected, "policySelected");
                              },
                              type: "v2",
                              primary: !0,
                            }),
                            (0, G.tZ)(v.Text, { children: "已阅读并同意" }),
                            c.privacyTermsList.map(function (e, t) {
                              return (0, G.BX)(
                                k.default.Fragment,
                                {
                                  children: [
                                    0 === t ? "" : "与",
                                    (0, G.tZ)(v.Text, {
                                      className: "url",
                                      id: "AXAo",
                                      onClick: function () {
                                        return P(e.privacyTermsUrl);
                                      },
                                      children: e.privacyTermsName,
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                          ],
                        }),
                    ],
                  }),
                  c.iDCardType &&
                    c.iDCardType.itemList &&
                    (0, G.tZ)(Z.ZtDrawer, {
                      drawerStyle: { background: "#fff" },
                      show: u,
                      isShowClose: !0,
                      title: "选择证件类型",
                      height: "auto",
                      onClose: function () {
                        return m(!1);
                      },
                      children: c.iDCardType.itemList.map(function (e) {
                        return (0, G.tZ)(
                          v.View,
                          {
                            className: "card-type ".concat(
                              e.itemId === b.iDCardType ? "cur" : ""
                            ),
                            id: "AXAp",
                            onClick: function () {
                              return y(e.itemId);
                            },
                            children: e.itemText,
                          },
                          e.itemId
                        );
                      }),
                    }),
                ],
              });
            }),
            W = i(70204),
            Y = i(87186),
            Q = "RANGE_GUARANTEE",
            J = "ALL_GUARANTEE",
            $ = "NORMAL_PROBLEMS",
            ee = "ACTIVITY_RULES",
            te = "PRICE_COMPENSATE",
            ie = "ROOM_COMPENSATE",
            ae = "BASIC_INFO",
            ne = "ROOM_NUMBER",
            oe = "KEEP_STAY",
            re = "TRACELESS",
            ce = "POINT_FOOD",
            le = "REWARD_RULES",
            se = function (e) {
              var t = e.item,
                i = e.index,
                a = e.handlePerson;
              return (0, G.tZ)(k.default.Fragment, {
                children: (0, G.tZ)(v.Input, {
                  type: "text",
                  maxlength: "30",
                  placeholder: "每间需填1位入住人姓名",
                  className: "input",
                  placeholderClass: "input-placeholder",
                  "data-idx": i,
                  value: t.value,
                  onInput: function (e) {
                    return a(e, i);
                  },
                  alwaysEmbed: !0,
                }),
              });
            },
            de = function (e) {
              var t = e.item,
                i = e.index,
                a = e.handleFirstName,
                n = e.handleLastName;
              return (0, G.BX)(v.View, {
                className: "haiwai",
                children: [
                  (0, G.tZ)(v.View, {
                    className: "bd",
                    children: (0, G.tZ)(v.Input, {
                      type: "text",
                      maxlength: "26",
                      placeholder: "姓 Lastname",
                      className: "input",
                      placeholderClass: "input-placeholder",
                      "data-idx": i,
                      value: t.firstName,
                      onInput: function (e) {
                        return a(e, i);
                      },
                      alwaysEmbed: !0,
                    }),
                  }),
                  (0, G.tZ)(v.View, {
                    className: "bd",
                    children: (0, G.tZ)(v.Input, {
                      type: "text",
                      maxlength: "26",
                      placeholder: "名 FirstName",
                      className: "input",
                      placeholderClass: "input-placeholder",
                      "data-idx": i,
                      value: t.lastName,
                      onInput: function (e) {
                        return n(e, i);
                      },
                      alwaysEmbed: !0,
                    }),
                  }),
                ],
              });
            },
            ue = function (e) {
              var t = e.phoneRef;
              return (0, G.tZ)(v.Input, {
                type: "number",
                maxlength: "11",
                placeholder: "用于接收通知",
                className: "input",
                placeholderClass: "input-placeholder",
                ref: function (e) {
                  return t(e);
                },
                alwaysEmbed: !0,
              });
            },
            he = k.default.memo(function (e) {
              var t,
                i = e.checkBookingResult.provideIdentityCardNo,
                a = e.roomSelectorList,
                n = e.roomNum,
                o = e.queryRoomNum,
                r = e.expectArriveTimeInfo,
                c = e.namesList,
                l = e.personList,
                s = e.isOutland,
                d = e.cardNumber,
                u = e.currrentArrivalTime,
                h = e.couponInfo,
                m = e.handleRoomSelect,
                p = e.handlePerson,
                f = e.handleFirstName,
                g = e.handleLastName,
                b = e.phoneRef,
                w = e.handleCardNumber,
                x = e.openBookDrawer,
                y = n < (null == a ? void 0 : a.length);
              console.log("33333333333333333", h);
              var I = (0, k.useCallback)(
                  function () {
                    var e = (0, C.getCurrentPage)();
                    null != e &&
                      e.ubtTrace &&
                      e.ubtTrace(210157, {
                        bizKey: "hotel_detail_checkintime_click",
                      }),
                      x(J, r.title, r.expectArriveTimeDes);
                  },
                  [x, r]
                ),
                P = (0, k.useCallback)(
                  function (e) {
                    "add" === e && y
                      ? m(n + 1)
                      : "minus" === e && n > 1 && m(n - 1);
                  },
                  [n, y, m]
                );
              return (0, G.BX)(v.View, {
                className: "ht-booking-card checkin-info",
                children: [
                  (0, G.BX)(v.View, {
                    className: "tit-wrap",
                    children: [
                      (0, G.tZ)(v.View, {
                        className: "tit",
                        children: "入住信息",
                      }),
                      (0, G.BX)(v.View, {
                        className: "right",
                        children: [
                          (null == a ? void 0 : a.length) > 0 &&
                            o > 1 &&
                            o > (null == a ? void 0 : a.length) &&
                            (0, G.BX)(v.Text, {
                              className: "only-text",
                              children: [
                                "仅剩",
                                null == a ? void 0 : a.length,
                                "间",
                              ],
                            }),
                          (0, G.tZ)(H.Z, {
                            id: "AXHT",
                            name: "minus",
                            type: "v2",
                            primary: n > 1,
                            onClick: function () {
                              return P("minus");
                            },
                          }),
                          (0, G.tZ)(v.Text, {
                            className: "number",
                            id: "AXAg",
                            onClick: function () {
                              return x(ne, "选择间数");
                            },
                            children: "".concat(n, "间"),
                          }),
                          (0, G.tZ)(H.Z, {
                            name: "add",
                            type: "v2",
                            primary: y,
                            id: "AXAh",
                            onClick: function () {
                              return P("add");
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, G.BX)(v.View, {
                    className: "item",
                    style: (0, q.LP)(!(null != c && c.length), "flex"),
                    children: [
                      (0, G.tZ)(v.View, {
                        className: "label",
                        children: "住客姓名",
                      }),
                      (0, G.tZ)(v.View, {
                        className: "cont",
                        children: (0, G.tZ)(se, {
                          item: { value: null },
                          handlePerson: function () {},
                        }),
                      }),
                    ],
                  }),
                  null == c
                    ? void 0
                    : c.map(function (e, t) {
                        var i = "item".concat((0, q.gP)(e.error, " err")),
                          a = (0, q.gP)(
                            l.length > 1,
                            "房间".concat(t + 1),
                            "住客姓名"
                          );
                        return (0,
                        G.BX)(v.View, { className: i, children: [(0, G.tZ)(v.View, { className: "label", children: a }), (0, G.BX)(v.View, { className: "cont", children: [X.default.isWechat && !s && (0, G.tZ)(v.CustomWrapper, { children: (0, G.tZ)(se, { item: e, index: t, handlePerson: p }) }), !X.default.isWechat && !s && (0, G.tZ)(se, { item: e, index: t, handlePerson: p }), s && (0, G.tZ)(de, { item: e, index: t, handleFirstName: f, handleLastName: g }), e.error && (0, G.BX)(v.View, { className: "input-err", children: [(0, G.tZ)(v.Text, { className: "iconfont ifont-line-tips" }), (0, G.tZ)(v.Text, { children: e.error })] })] })] }, t);
                      }),
                  (0, G.BX)(v.View, {
                    className: "item",
                    children: [
                      (0, G.tZ)(v.View, {
                        className: "label",
                        children: "联系手机",
                      }),
                      (0, G.BX)(v.View, {
                        className: "cont",
                        children: [
                          !X.default.isWechat && (0, G.tZ)(ue, { phoneRef: b }),
                          X.default.isWechat &&
                            (0, G.tZ)(v.CustomWrapper, {
                              children: (0, G.tZ)(ue, { phoneRef: b }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  i &&
                    (0, G.BX)(v.View, {
                      className: "item",
                      children: [
                        (0, G.tZ)(v.View, {
                          className: "label",
                          children: "身份证号",
                        }),
                        (0, G.tZ)(v.View, {
                          className: "cont",
                          children: (0, G.tZ)(v.Input, {
                            type: "text",
                            placeholder: "请输入身份证号",
                            className: "input",
                            placeholderClass: "input-placeholder",
                            onInput: w,
                            value: d,
                            alwaysEmbed: !0,
                          }),
                        }),
                      ],
                    }),
                  (0, G.BX)(v.View, {
                    className: "item",
                    style: (0, q.LP)(!(null != c && c.length), "flex"),
                    children: [
                      (0, G.tZ)(v.View, {
                        className: "label",
                        children: "最晚到店",
                      }),
                      (0, G.tZ)(v.View, {
                        className: "cont",
                        children: (0, G.tZ)(v.Input, {
                          className: "input",
                          placeholder: "最晚到店时间",
                          placeholderClass: "input-placeholder",
                        }),
                      }),
                      (0, G.tZ)(v.Text, {
                        className: "ifont-arr iconfont right",
                      }),
                    ],
                  }),
                  (null == r ||
                  null === (t = r.hotelGuaranteeList) ||
                  void 0 === t
                    ? void 0
                    : t.length) > 0 &&
                    u &&
                    (0, G.BX)(v.View, {
                      className: "item",
                      id: "AXAi",
                      onClick: I,
                      children: [
                        (0, G.tZ)(v.View, {
                          className: "label",
                          children: "到店时间",
                        }),
                        (0, G.tZ)(v.View, {
                          className: "txt",
                          children: null == u ? void 0 : u.title,
                        }),
                        (0, G.tZ)(v.Text, {
                          className: "ifont-arr iconfont right",
                        }),
                      ],
                    }),
                  (null == h ? void 0 : h.couponTips) &&
                    (0, G.tZ)(v.View, {
                      className: "real-name-tip",
                      children: null == h ? void 0 : h.couponTips,
                    }),
                ],
              });
            }),
            me = {
              titleBanner:
                "https://images3.c-ctrip.com/ztrip/zhixingios/list/baby/icon_qinzi_bg@3x.png",
              colourfulDrawers: [$, ee, te, ie, ae, oe, re, ce, le],
              extraClassName:
                ((a = {}),
                (0, d.Z)(a, J, "arrival-wrap"),
                (0, d.Z)(a, Q, "arrival-wrap"),
                (0, d.Z)(a, ne, "room-select"),
                a),
              customBottomTypes: [re, ce],
            },
            pe = k.default.memo(function (e) {
              var t,
                i,
                a,
                n,
                o,
                r,
                c,
                l,
                s,
                d,
                u = e.drawerInfoList,
                h = e.drawerOptions,
                m = e.bookingCheckExtend,
                p = m.noRoomCompensate,
                f = m.preferenceExplainInfoList,
                g = m.priceCompensate,
                b = e.checkBookingResult.tracelessInfo,
                w = e.currrentArrivalTime,
                x = e.expectArriveTimeInfo,
                y = e.keepStayInfo,
                I = e.preferencePriceTagInfo,
                P = e.roomNum,
                N = e.roomSelectorList,
                T = e.userExchangePoint,
                C = e.subtitle,
                B = e.title,
                V = e.type,
                L = e.onClose,
                D = e.onBack,
                A = e.handleLastArrivalTime,
                R = e.handleRoomSelect,
                S = e.onClickDrawerRightBtn,
                F = e.handleDateCounterClick,
                E = e.isHourRoom,
                M = e.orderVipRecommendInfo,
                _ = ""
                  .concat(X.default.zxTyStr)
                  .concat((0, q.gP)(Boolean(V), " active"), " ")
                  .concat(me.extraClassName[V]),
                O = "pop-botm pop-infobox ".concat(_),
                z = me.colourfulDrawers.includes(V),
                U = V === oe,
                j = V === ce,
                K = me.customBottomTypes.includes(V),
                W = (U || z) && !K,
                Y =
                  null == T ||
                  null === (t = T.exchangePointList) ||
                  void 0 === t
                    ? void 0
                    : t.findIndex(function (e) {
                        return e.title.includes("早餐");
                      }),
                Q = Y > -1 ? T.exchangePointList[Y] : null,
                se =
                  null == Q || null === (i = Q.exchangeItems) || void 0 === i
                    ? void 0
                    : i.reduce(function (e, t) {
                        return e + t.num;
                      }, 0),
                de = null,
                ue = B,
                he = C,
                pe = "",
                fe = "";
              return (
                U && (de = null == y ? void 0 : y.imgUrl),
                V === re &&
                  null != b &&
                  b.title &&
                  ((ue = b.title), (he = b.description)),
                null != x &&
                  x.title &&
                  ((ue = x.title),
                  (he = (null == x ? void 0 : x.expectArriveTimeDes) || "")),
                h.leftBtnText && (pe = h.leftBtnText),
                h.rightBtnText && (fe = h.rightBtnText),
                j && (fe = "确认"),
                (0, G.BX)(v.View, {
                  children: [
                    (0, G.tZ)(v.View, {
                      className: "pop-mask",
                      id: "AXAI",
                      onClick: L,
                      style: (0, q.LP)(Boolean(V)),
                    }),
                    (0, G.BX)(v.View, {
                      className: O,
                      children: [
                        (0, G.tZ)(v.Image, {
                          className: "t-banner",
                          mode: "widthFix",
                          style: (0, q.LP)(z),
                          src: me.titleBanner,
                        }),
                        (0, G.tZ)(v.Text, {
                          className: "ifont-closed iconfont",
                          id: "AXAJ",
                          onClick: L,
                        }),
                        (0, G.BX)(v.View, {
                          className: "wrap".concat((0, q.gP)(j, " point-food")),
                          children: [
                            (0, G.BX)(v.View, {
                              className: "pop-infobox-hd",
                              style: (0, q.LP)(ue),
                              children: [
                                (0, G.tZ)(v.View, {
                                  className: "title",
                                  children: ue,
                                }),
                                he &&
                                  (0, G.tZ)(v.View, {
                                    className: "subtitle",
                                    children: he,
                                  }),
                              ],
                            }),
                            (0, G.BX)(v.View, {
                              className: "pop-infobox-hd",
                              style: (0, q.LP)(j, "flex"),
                              children: [
                                (0, G.BX)(v.View, {
                                  className: "title",
                                  children: [
                                    "免费早餐 ",
                                    (0, G.tZ)(v.Text, {
                                      className: "desc",
                                      children: "超值不花钱",
                                    }),
                                  ],
                                }),
                                (null == Q ? void 0 : Q.freeCount) > 0 &&
                                  (0, G.BX)(v.View, {
                                    className: "number",
                                    children: [
                                      "免费份数剩余",
                                      null == Q ? void 0 : Q.freeCount,
                                      "份",
                                    ],
                                  }),
                              ],
                            }),
                            (0, G.BX)(v.View, {
                              className: "pop-infobox-bd",
                              children: [
                                (0, G.tZ)(v.View, {
                                  className: "c-banner-wrap",
                                  style: (0, q.LP)(de),
                                  children: (0, G.tZ)(v.Image, {
                                    className: "c-banner",
                                    mode: "widthFix",
                                    src: de,
                                  }),
                                }),
                                (0, G.tZ)(v.View, {
                                  style: (0, q.LP)(V === ne),
                                  children:
                                    null == N
                                      ? void 0
                                      : N.map(function (e) {
                                          return (0, G.tZ)(
                                            v.View,
                                            {
                                              className: "item"
                                                .concat(
                                                  (0, q.gP)(e == P, " cur")
                                                )
                                                .concat(
                                                  (0, q.gP)(e % 4 == 0, " mr0")
                                                ),
                                              id: "AXAK",
                                              onClick: function () {
                                                return R(e);
                                              },
                                              children: e,
                                            },
                                            e
                                          );
                                        }),
                                }),
                                (0, G.tZ)(v.View, {
                                  style: (0, q.LP)(V === J),
                                  children:
                                    null == x ||
                                    null === (a = x.hotelGuaranteeList) ||
                                    void 0 === a
                                      ? void 0
                                      : a.map(function (e, t) {
                                          var i =
                                              e.value ===
                                              (null == w ? void 0 : w.value),
                                            a = (0, q.gP)(E, " hour"),
                                            n = (0, q.gP)(i, " cur"),
                                            o = (0, q.gP)(
                                              (t + 1) % 3 == 0,
                                              " mr0"
                                            ),
                                            r = "item"
                                              .concat(n)
                                              .concat(a)
                                              .concat(o);
                                          return (0, G.tZ)(
                                            v.View,
                                            {
                                              className: r,
                                              id: "AXAM",
                                              onClick: function () {
                                                return A(e);
                                              },
                                              children: (0, G.tZ)(v.View, {
                                                className: "title",
                                                children: e.title,
                                              }),
                                            },
                                            t
                                          );
                                        }),
                                }),
                                (0, G.tZ)(v.View, {
                                  style: (0, q.LP)(V === $),
                                  children:
                                    null == f
                                      ? void 0
                                      : f.map(function (e, t) {
                                          return (0,
                                          G.BX)(k.default.Fragment, { children: [(0, G.tZ)(v.View, { className: "tit", children: e.title }), (0, G.tZ)(v.View, { className: "txt", children: e.content })] }, t);
                                        }),
                                }),
                                (0, G.tZ)(v.View, {
                                  style: (0, q.LP)(V === ee),
                                  children:
                                    null == I
                                      ? void 0
                                      : I.map(function (e, t) {
                                          return (0,
                                          G.tZ)(v.View, { className: "txt", children: e }, "preference-".concat(t));
                                        }),
                                }),
                                (0, G.tZ)(v.View, {
                                  style: (0, q.LP)(V === le),
                                  children:
                                    null == M ||
                                    null === (n = M.rule) ||
                                    void 0 === n
                                      ? void 0
                                      : n.ruleList.map(function (e, t) {
                                          var i;
                                          return (0, G.BX)(G.HY, {
                                            children: [
                                              (0, G.tZ)(
                                                v.View,
                                                {
                                                  className: "txt",
                                                  children:
                                                    null == e
                                                      ? void 0
                                                      : e.title,
                                                },
                                                "preference-".concat(t)
                                              ),
                                              null == e ||
                                              null === (i = e.subTitleList) ||
                                              void 0 === i
                                                ? void 0
                                                : i.map(function (e, t) {
                                                    return (0,
                                                    G.tZ)(v.View, { className: "txt", children: e }, t);
                                                  }),
                                            ],
                                          });
                                        }),
                                }),
                                (0, G.tZ)(v.View, {
                                  style: (0, q.LP)(V === te),
                                  children:
                                    null == g ||
                                    null === (o = g.detail) ||
                                    void 0 === o ||
                                    null === (r = o.detail) ||
                                    void 0 === r
                                      ? void 0
                                      : r.map(function (e, t) {
                                          return (0,
                                          G.tZ)(v.View, { className: "txt", children: e.content }, t);
                                        }),
                                }),
                                (0, G.tZ)(v.View, {
                                  style: (0, q.LP)(V === ie),
                                  children:
                                    null == p ||
                                    null === (c = p.detail) ||
                                    void 0 === c ||
                                    null === (l = c.detail) ||
                                    void 0 === l
                                      ? void 0
                                      : l.map(function (e, t) {
                                          return (0,
                                          G.tZ)(v.View, { className: "txt", children: e.content }, t);
                                        }),
                                }),
                                (0, G.tZ)(v.View, {
                                  style: (0, q.LP)(V === ae),
                                  children: u.map(function (e, t) {
                                    var i;
                                    return (0, G.tZ)(
                                      k.default.Fragment,
                                      {
                                        children: (0, G.BX)(v.View, {
                                          className: "list-item",
                                          children: [
                                            e.title &&
                                              (0, G.tZ)(v.View, {
                                                className: "tit",
                                                children: e.title,
                                              }),
                                            null === (i = e.contentList) ||
                                            void 0 === i
                                              ? void 0
                                              : i.map(function (e, t) {
                                                  return (0,
                                                  G.tZ)(v.View, { className: "txt", children: e }, t);
                                                }),
                                          ],
                                        }),
                                      },
                                      t
                                    );
                                  }),
                                }),
                                (0, G.BX)(v.View, {
                                  className: "keep-stay",
                                  style: (0, q.LP)(V === oe),
                                  children: [
                                    (0, G.tZ)(v.View, {
                                      className: "c-tit",
                                      children:
                                        (null == y ? void 0 : y.title) &&
                                        (0, G.tZ)(Z.ZtRichLinkText, {
                                          nodes: y.title,
                                        }),
                                    }),
                                    (0, G.tZ)(v.View, {
                                      className: "c-desc",
                                      children: null == y ? void 0 : y.desc,
                                    }),
                                  ],
                                }),
                                (0, G.tZ)(v.View, {
                                  className: "traceless",
                                  style: (0, q.LP)(V === re),
                                  children:
                                    null == b ||
                                    null === (s = b.subItem) ||
                                    void 0 === s
                                      ? void 0
                                      : s.map(function (e, t) {
                                          var i;
                                          return (0, G.BX)(
                                            k.default.Fragment,
                                            {
                                              children: [
                                                (0, G.tZ)(v.View, {
                                                  className: "tit",
                                                  children: e.subTitle,
                                                }),
                                                null === (i = e.description) ||
                                                void 0 === i
                                                  ? void 0
                                                  : i.map(function (e, t) {
                                                      return (0,
                                                      G.tZ)(v.View, { className: "txt", children: (0, G.tZ)(Z.ZtRichLinkText, { nodes: e }) }, t);
                                                    }),
                                              ],
                                            },
                                            t
                                          );
                                        }),
                                }),
                                (0, G.tZ)(v.View, {
                                  className: "food-select",
                                  style: (0, q.LP)(V === ce),
                                  children:
                                    null == Q ||
                                    null === (d = Q.exchangeItems) ||
                                    void 0 === d
                                      ? void 0
                                      : d.map(function (e, t) {
                                          return (0, G.BX)(
                                            v.View,
                                            {
                                              className: "item",
                                              children: [
                                                (0, G.tZ)(v.View, {
                                                  className: "label",
                                                  children: e.date,
                                                }),
                                                (0, G.BX)(v.View, {
                                                  className: "icon-wrap",
                                                  children: [
                                                    (0, G.tZ)(H.Z, {
                                                      name: "minus",
                                                      type: "v2",
                                                      id: "AXAN",
                                                      onClick: function () {
                                                        return F(Y, t, "minus");
                                                      },
                                                      primary: e.num > 0,
                                                    }),
                                                    (0, G.tZ)(v.View, {
                                                      className: "number",
                                                      children: e.num,
                                                    }),
                                                    (0, G.tZ)(H.Z, {
                                                      name: "add",
                                                      type: "v2",
                                                      id: "AXAO",
                                                      onClick: function () {
                                                        return F(Y, t, "add");
                                                      },
                                                      primary: !0,
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
                            }),
                            (0, G.BX)(v.View, {
                              className: "drawer-btns",
                              style: (0, q.LP)(W || K, "flex"),
                              children: [
                                (0, G.BX)(v.View, {
                                  className: "wrap",
                                  style: (0, q.LP)(W, "flex"),
                                  children: [
                                    !U &&
                                      z &&
                                      (0, G.tZ)(v.View, {
                                        className: "btn close-btn",
                                        id: "AXAP",
                                        onClick: L,
                                        children: "我知道了",
                                      }),
                                    U &&
                                      (0, G.BX)(G.HY, {
                                        children: [
                                          (0, G.tZ)(v.View, {
                                            className: "btn close-btn",
                                            id: "AXAQ",
                                            onClick: D,
                                            children:
                                              null == y ? void 0 : y.btnText,
                                          }),
                                          (0, G.tZ)(v.View, {
                                            className: "btn btn-primary",
                                            id: "AXAR",
                                            onClick: L,
                                            children: "继续预订",
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, G.BX)(v.View, {
                                  className: "wrap",
                                  style: (0, q.LP)(K, "flex"),
                                  children: [
                                    pe &&
                                      (0, G.tZ)(v.View, {
                                        className: "btn close-btn",
                                        id: "AXAS",
                                        onClick: L,
                                        children: pe,
                                      }),
                                    j &&
                                      (0, G.BX)(v.View, {
                                        className: "points-detail",
                                        children: [
                                          "使用积分",
                                          (null == Q ? void 0 : Q.point) * se,
                                          "/剩余积分",
                                          (null == T
                                            ? void 0
                                            : T.currentPoint) -
                                            (null == T ? void 0 : T.needPoint),
                                        ],
                                      }),
                                    (0, G.tZ)(v.View, {
                                      className: "btn btn-primary",
                                      id: "AXAT",
                                      onClick: S,
                                      children: fe,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              );
            }),
            fe =
              "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/wanliutanceng/icon_maiguipei@3x.png",
            ge =
              "https://images3.c-ctrip.com/ztrip/hotel/dahua/tianxie/icon_pei_ruzhu@3x.webp",
            ke = "https://pages.ctrip.com/ztrip/document/hotel-jfqy.html",
            ve = k.default.memo(function (e) {
              var t = e.show,
                i = e.canUseCouponNum,
                a = e.couponInfo,
                n = e.couponList,
                o = e.displayPromotionList,
                r = e.validPreferentialList,
                c = e.checkPreferentialList,
                l = e.goCouponList,
                s =
                  (null == r ? void 0 : r.length) > 0 ||
                  ((null == n ? void 0 : n.length) > 0 && i > 0),
                d = "iconfont2 ifont2-checkbox";
              return (0, G.BX)(v.View, {
                className: "open-detail",
                style: (0, q.LP)(t),
                children: [
                  (null == o ? void 0 : o.length) > 0 &&
                    (0, G.BX)(v.View, {
                      className: "item coupon",
                      children: [
                        (0, G.tZ)(v.View, {
                          className: "label",
                          children: "促销优惠",
                        }),
                        (0, G.tZ)(v.View, {
                          className: "sale-wrap",
                          children: o.map(function (e, t) {
                            return (0,
                            G.BX)(v.View, { className: "sale-item", children: [(0, G.tZ)(v.View, { className: "", children: e.title }), (0, G.tZ)(v.View, { className: "sale-price", children: "-¥".concat(e.price) })] }, t);
                          }),
                        }),
                      ],
                    }),
                  s &&
                    (0, G.BX)(v.View, {
                      className: "item coupon",
                      children: [
                        (0, G.tZ)(v.View, {
                          className: "label",
                          children: "智行补贴",
                        }),
                        (0, G.BX)(v.View, {
                          className: "sale-wrap",
                          children: [
                            null == r
                              ? void 0
                              : r.map(function (e, t) {
                                  var i = (0, q.gP)(e.isSelected, " selected"),
                                    a = (0, q.gP)(e.isSelected, "ed"),
                                    n = (0, q.gP)(
                                      e.isSelected,
                                      " color-primary"
                                    );
                                  return (0,
                                  G.BX)(v.View, { className: "cont selection".concat(i), id: "AXAU", onClick: c, "data-item": e, children: [(0, G.tZ)(v.View, { className: "name", children: e.name }), (0, G.BX)(v.View, { className: "sale-price-wrap", children: [(0, G.tZ)(v.Text, { children: "-¥".concat(e.price) }), (0, G.tZ)(v.Text, { className: "".concat(d).concat(a).concat(n) }), (0, G.tZ)(v.Text, { className: "ifont-arr iconfont" })] })] }, t);
                                }),
                            (null == n ? void 0 : n.length) > 0 &&
                              i > 0 &&
                              (0, G.BX)(v.View, {
                                className: "cont selection".concat(
                                  (0, q.gP)(a, " selected")
                                ),
                                id: "AXAV",
                                onClick: l,
                                children: [
                                  (0, G.tZ)(v.View, {
                                    className: "name",
                                    children: a
                                      ? a.name
                                      : "".concat(i, "张可用"),
                                  }),
                                  (0, G.BX)(v.View, {
                                    className: "sale-price-wrap",
                                    children: [
                                      (0, G.tZ)(v.Text, {
                                        children: (0, q.gP)(
                                          a,
                                          "-¥".concat(
                                            null == a ? void 0 : a.price
                                          )
                                        ),
                                      }),
                                      Boolean(a) &&
                                        (0, G.tZ)(v.Text, {
                                          className: "color-primary "
                                            .concat(d)
                                            .concat((0, q.gP)(a, "ed")),
                                        }),
                                      (0, G.tZ)(v.Text, {
                                        className: "ifont-arr iconfont",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
            }),
            be = k.default.memo(function (e) {
              var t,
                i,
                a,
                n,
                o,
                r = e.allCashBackInfo,
                c = e.bookingCheckExtend,
                l = c.noRoomCompensate,
                s = c.priceCompensate,
                d = c.userRights,
                u = e.bookingCheckLoading,
                p = e.checkBookingResult,
                f = e.bottomInfo,
                g = e.canUseCouponNum,
                b = e.couponInfo,
                w = e.couponList,
                x = e.displayPreferentialList,
                y = e.displayPromotionList,
                I = e.memberRightInfoList,
                P = e.livedConsumePackages,
                N = e.preferencePriceTag,
                T = e.preferencePriceTagInfo,
                B = e.totalPreferentialList,
                L = e.userExchangePoint,
                D = e.toggleCashbackTips,
                A = e.onShowLivedConsumePackages,
                R = e.handlePreferential,
                S = e.checkPreferentialList,
                F = e.goCouponList,
                E = e.openBookDrawer,
                M = e.handleExchangeClick,
                _ = (0, q.M$)(
                  null == p ? void 0 : p.memberInfo,
                  "BOOKING",
                  "ty" === X.default.zxTyStr,
                  X.default.isBaidu
                ),
                O =
                  null == B
                    ? void 0
                    : B.filter(function (e) {
                        return 2e4 != e.parentId;
                      }),
                z = Boolean(
                  (null == y ? void 0 : y.length) ||
                    (null == O ? void 0 : O.length) ||
                    (null == w ? void 0 : w.length)
                ),
                U = "item ".concat((0, q.gP)(x, "open", "close")),
                H = (0, q.gP)(
                  (null == L ||
                  null === (t = L.exchangePointList) ||
                  void 0 === t
                    ? void 0
                    : t.length) > 1,
                  " many",
                  " single"
                ),
                j =
                  null == L ||
                  null === (i = L.exchangePointList) ||
                  void 0 === i
                    ? void 0
                    : i.find(function (e) {
                        return 2 === e.selectType;
                      }),
                K = null != j && j.title ? [j.title] : [],
                W = (0, k.useState)(K),
                Y = (0, h.Z)(W, 2),
                Q = Y[0],
                J = Y[1],
                ne = (0, k.useCallback)(
                  function () {
                    var e = (0, C.getCurrentPage)();
                    null != e &&
                      e.ubtTrace &&
                      e.ubtTrace(221533, {
                        PageId: X.default.isTieyou
                          ? "10650018762"
                          : "10650018585",
                      }),
                      E(ie, l.title);
                  },
                  [l, E]
                ),
                oe = (0, k.useCallback)(function () {
                  V.Z.twebview({ data: { url: ke } });
                }, []),
                re = (0, k.useCallback)(
                  function (e, t) {
                    var i;
                    if (
                      null !== (i = e.title) &&
                      void 0 !== i &&
                      i.includes("早餐")
                    )
                      return M(t), void E(ce);
                    if (2 !== e.selectType) M(t);
                    else {
                      var a = Q.includes(e.title)
                        ? Q.filter(function (t) {
                            return t !== e.title;
                          })
                        : [].concat((0, m.Z)(Q), [e.title]);
                      J(a);
                    }
                  },
                  [Q, M, E]
                );
              return (0, G.BX)(v.View, {
                className: "ht-booking-card sale-info",
                style: (0, q.LP)(!u),
                children: [
                  (0, G.tZ)(v.View, {
                    className: "box-top-banner",
                    style: (0, q.LP)(_),
                    children: (0, G.tZ)(v.Image, {
                      className: "banner",
                      mode: "widthFix",
                      src: _,
                    }),
                  }),
                  (0, G.tZ)(v.View, {
                    className: "tit-wrap",
                    style: (0, q.LP)(!_),
                    children: (0, G.tZ)(v.Text, {
                      className: "tit",
                      children: "本单可享",
                    }),
                  }),
                  Boolean(r.price) &&
                    (0, G.BX)(v.View, {
                      className: "item",
                      children: [
                        (0, G.BX)(v.View, {
                          className: "label",
                          id: "AXAW",
                          onClick: D,
                          children: [
                            "返现 ",
                            (0, G.tZ)(v.Text, {
                              className: "ifont-detail iconfont",
                            }),
                          ],
                        }),
                        (0, G.tZ)(v.View, {
                          className: "cont color-red",
                          children: "离店后返¥".concat(r.price, "元"),
                        }),
                      ],
                    }),
                  (0, G.BX)(v.View, {
                    className: U,
                    style: (0, q.LP)(z, "flex"),
                    children: [
                      (0, G.BX)(v.View, {
                        className: "label",
                        id: "AXAX",
                        onClick: function () {
                          return E($, "常见问题");
                        },
                        children: [
                          (0, G.tZ)(v.Text, { children: "促销优惠" }),
                          (0, G.tZ)(v.Text, {
                            className: "ifont-detail iconfont",
                          }),
                        ],
                      }),
                      (0, G.BX)(v.View, {
                        className: "cont-wrap",
                        id: "AXAY",
                        onClick: R,
                        children: [
                          (0, G.tZ)(v.View, {
                            className: "cont",
                            children:
                              f.preferentialPrice + f.promotionPrice > 0 &&
                              (0, G.BX)(v.Text, {
                                className: "color-red",
                                children: [
                                  "立减",
                                  "¥".concat(
                                    f.preferentialPrice + f.promotionPrice,
                                    "元"
                                  ),
                                ],
                              }),
                          }),
                          (0, G.tZ)(v.Text, {
                            className: "ifont-arr iconfont tram",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, G.tZ)(ve, {
                    show: z && x,
                    canUseCouponNum: g,
                    couponInfo: b,
                    couponList: w,
                    displayPromotionList: y,
                    validPreferentialList: O,
                    checkPreferentialList: S,
                    goCouponList: F,
                  }),
                  (0, G.BX)(v.View, {
                    className: "item member-rights",
                    style: (0, q.LP)(
                      null == L ||
                        null === (a = L.exchangePointList) ||
                        void 0 === a
                        ? void 0
                        : a.length,
                      "flex"
                    ),
                    children: [
                      (0, G.BX)(v.View, {
                        className: "label",
                        id: "AXAZ",
                        onClick: oe,
                        children: [
                          (0, G.tZ)(v.Text, { children: "专享权益" }),
                          (0, G.tZ)(v.Text, {
                            className: "ifont-detail iconfont",
                          }),
                        ],
                      }),
                      (0, G.BX)(v.View, {
                        className: "cont-wrap",
                        children: [
                          (0, G.BX)(v.View, {
                            className: "cont",
                            children: [
                              "共",
                              null == L ||
                              null === (n = L.exchangePointList) ||
                              void 0 === n
                                ? void 0
                                : n.length,
                              "项权益",
                            ],
                          }),
                          (0, G.BX)(v.View, {
                            className: "primary",
                            children: [
                              "剩余",
                              (null == L ? void 0 : L.currentPoint) -
                                (null == L ? void 0 : L.needPoint),
                              "积分",
                            ],
                          }),
                        ],
                      }),
                      (0, G.tZ)(v.View, {
                        className: "points-wrap".concat(H),
                        children:
                          null == L ||
                          null === (o = L.exchangePointList) ||
                          void 0 === o
                            ? void 0
                            : o.map(function (e, t) {
                                var i,
                                  a,
                                  n =
                                    null === (i = e.title) || void 0 === i
                                      ? void 0
                                      : i.includes("早餐"),
                                  o = e.selected;
                                n &&
                                  (o =
                                    null === (a = e.exchangeItems) ||
                                    void 0 === a
                                      ? void 0
                                      : a.some(function (e) {
                                          return e.num > 0;
                                        }));
                                var r = "".concat(
                                    (0, q.gP)(
                                      o,
                                      "ifont2-checkboxed",
                                      "ifont2-checkbox"
                                    )
                                  ),
                                  c = "iconfont2 ".concat(r, " color-primary"),
                                  l = "point".concat((0, q.gP)(o, " checked"));
                                return (0, G.BX)(
                                  v.View,
                                  {
                                    className: l,
                                    id: "AXAa",
                                    onClick: function () {
                                      return re(e, t);
                                    },
                                    children: [
                                      (0, G.BX)(v.View, {
                                        className: "header",
                                        children: [
                                          (0, G.tZ)(v.View, {
                                            className: "tit",
                                            children: e.title,
                                          }),
                                          (0, G.BX)(v.View, {
                                            className: "desc",
                                            children: [
                                              (0, G.tZ)(v.View, {
                                                children: e.rightDesc,
                                              }),
                                              (0, G.BX)(v.View, {
                                                className: "remark-wrap",
                                                children: [
                                                  (0, G.tZ)(v.Text, {
                                                    className: "remark",
                                                    children: e.pointRemark,
                                                  }),
                                                  (0, G.tZ)(v.Text, {
                                                    className: c,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          Boolean(e.worthMessage) &&
                                            (0, G.BX)(v.View, {
                                              className: "worth",
                                              children: [
                                                "价值",
                                                (0, G.BX)(v.Text, {
                                                  className:
                                                    "color-dark-yellow",
                                                  children: [
                                                    "¥",
                                                    e.worthMessage,
                                                  ],
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, G.BX)(v.View, {
                                        className: "botm",
                                        children: [
                                          (0, G.tZ)(v.Text, {
                                            className: "remark",
                                            children: e.pointRemark,
                                          }),
                                          (0, G.tZ)(v.Text, { className: c }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                      }),
                    ],
                  }),
                  (null == s ? void 0 : s.detail) &&
                    (0, G.BX)(v.View, {
                      className: "item",
                      children: [
                        (0, G.tZ)(v.View, {
                          className: "label",
                          children: s.detail.title,
                        }),
                        (0, G.BX)(v.View, {
                          className: "cont-wrap",
                          id: "AXAb",
                          onClick: function () {
                            return E(te, s.detail.title);
                          },
                          children: [
                            (0, G.BX)(v.View, {
                              className: "cont",
                              children: [
                                (0, G.tZ)(v.Image, {
                                  className: "icon mgp",
                                  src: fe,
                                  mode: "widthFix",
                                }),
                                (0, G.tZ)(v.Text, {
                                  className: "txt",
                                  children: s.subTitle,
                                }),
                              ],
                            }),
                            (0, G.tZ)(v.Text, {
                              className: "ifont-arr iconfont right",
                            }),
                          ],
                        }),
                      ],
                    }),
                  l &&
                    (0, G.BX)(v.View, {
                      className: "item",
                      children: [
                        (0, G.tZ)(v.View, {
                          className: "label",
                          children: l.title,
                        }),
                        (0, G.BX)(v.View, {
                          className: "cont-wrap",
                          id: "AXAc",
                          onClick: ne,
                          children: [
                            (0, G.tZ)(v.Image, {
                              className: "icon mgp",
                              src: ge,
                              mode: "widthFix",
                            }),
                            (0, G.tZ)(v.View, {
                              className: "txt",
                              children: l.subTitle,
                            }),
                            (0, G.tZ)(v.Text, {
                              className: "ifont-arr iconfont right",
                            }),
                          ],
                        }),
                      ],
                    }),
                  !X.default.isBaidu &&
                    (null == T ? void 0 : T.length) > 0 &&
                    N &&
                    (0, G.BX)(v.View, {
                      className: "item",
                      children: [
                        (0, G.tZ)(v.View, {
                          className: "label",
                          id: "AXAd",
                          children: "下单再领",
                        }),
                        (0, G.BX)(v.View, {
                          className: "cont-wrap",
                          onClick: function () {
                            return E(ee, "活动规则");
                          },
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "txt",
                              children: N,
                            }),
                            (0, G.tZ)(v.Text, {
                              className: "ifont-arr iconfont right",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (null == I ? void 0 : I.length) > 0 &&
                    (0, G.BX)(v.View, {
                      className: "item",
                      children: [
                        (0, G.tZ)(v.View, {
                          className: "label",
                          children: "会员权益",
                        }),
                        (0, G.tZ)(v.View, {
                          className: "cont",
                          children: I.filter(function (e) {
                            return Boolean(e.title);
                          }).map(function (e, t) {
                            return (0,
                            G.BX)(v.View, { className: "member-right", children: [(0, G.tZ)(v.Text, { className: "ifont-circle-line-check iconfont" }), " ", e.title] }, t);
                          }),
                        }),
                      ],
                    }),
                  P.detailNameStr &&
                    (0, G.BX)(v.View, {
                      className: "item",
                      id: "AXAe",
                      onClick: A,
                      children: [
                        (0, G.tZ)(v.View, {
                          className: "label",
                          children: "入住即送",
                        }),
                        (0, G.tZ)(v.View, {
                          className: "txt",
                          children: P.detailNameStr,
                        }),
                        (0, G.tZ)(v.Text, { className: "ifont-arr iconfont" }),
                      ],
                    }),
                  null == d
                    ? void 0
                    : d.map(function (e, t) {
                        return (0, G.BX)(
                          v.View,
                          {
                            className: "item",
                            id: "AXAf",
                            onClick: function () {
                              return E(ae, e.ruleTitle, null, e.ruleDesc);
                            },
                            children: [
                              (0, G.tZ)(v.View, {
                                className: "label",
                                children: e.title,
                              }),
                              (0, G.tZ)(v.View, {
                                className: "txt",
                                children: (0, G.tZ)(Z.ZtRichLinkText, {
                                  nodes: e.name,
                                }),
                              }),
                              (0, G.tZ)(v.Text, {
                                className: "ifont-arr iconfont right",
                              }),
                            ],
                          },
                          t
                        );
                      }),
                ],
              });
            }),
            we = k.default.memo(function (e) {
              var t,
                i,
                a,
                n,
                o = e.additionalBuyAmount,
                r = e.additionalPreferenceAmount,
                c = e.allCashBackInfo,
                l = e.atmosphere,
                s = e.bottomInfo,
                d = e.checkBookingResult,
                u = e.displayPriceDetail,
                m = e.displayPriceDetailType,
                p = e.popCuxiaoList,
                f = e.preferentialList,
                g = e.roomNum,
                b = e.roomPriceList,
                w = e.selectedAdditionalList,
                x = e.dates.totalDays,
                y = e.zxPreferentialTotal,
                I = e.zxPreferentialList,
                P = e.onClose,
                N = e.onClickDisplayPriceDetailType,
                T = e.toggleGuaranteeTips,
                Z = d || {},
                C = Z.bargainInfo,
                B = Z.payType,
                V = Z.depositPayment,
                L = Z.extraPaySurcharge,
                D = s.roomPrice,
                A = s.promotionPrice,
                R = s.preferentialPrice,
                X = s.showPrice,
                S = s.proPrice,
                F = (0, q.gP)(u, " active"),
                E = (0, q.gP)(
                  null == C ? void 0 : C.bargainFlag,
                  " pop-price-detail-back"
                ),
                M = ""
                  .concat("pop-botm pop-botm-detail pop-price-detail")
                  .concat(F)
                  .concat(E),
                _ = "back" === m,
                O = null != C && C.bargainFlag ? C.bargainTop : 0,
                z = D - A - R,
                U = "".concat(_ ? z : z + O),
                H = "".concat(_ ? X : S),
                j = 3 === B ? U : H,
                K = A + (3 !== B ? r : 0) - O - y,
                W = (0, q.gP)(
                  Boolean(null == C ? void 0 : C.bargainFlag),
                  " bargain"
                ),
                Y = (0, k.useState)(0),
                Q = (0, h.Z)(Y, 2),
                J = Q[0],
                $ = Q[1];
              return (
                (0, k.useEffect)(
                  function () {
                    $(Math.random()),
                      Boolean(null == C ? void 0 : C.bargainFlag) && N("back");
                  },
                  [u]
                ),
                (0, G.BX)(v.View, {
                  children: [
                    (0, G.tZ)(v.View, {
                      className: "pop-mask pop-mask-detail",
                      id: "AXBC",
                      onClick: P,
                      style: (0, q.LP)(u),
                    }),
                    (0, G.BX)(v.View, {
                      className: M,
                      children: [
                        (0, G.tZ)(v.Image, {
                          className: "atmosphere",
                          mode: "widthFix",
                          src: l,
                          style: (0, q.LP)(l),
                        }),
                        (0, G.BX)(v.ScrollView, {
                          scrollY: !0,
                          scrollTop: J,
                          className: "price-detail-bd",
                          children: [
                            3 === B &&
                              (0, G.BX)(v.View, {
                                className: "item total",
                                children: [
                                  (0, G.tZ)(v.Text, {
                                    className: "danbao-tit",
                                    children: "在线担保",
                                  }),
                                  (0, G.tZ)(v.Text, {
                                    className: "back-desc",
                                    children: "离店后3天内原路退还",
                                  }),
                                  (0, G.BX)(v.Text, {
                                    className: "fr color-red",
                                    children: ["￥", H],
                                  }),
                                  (null == V ? void 0 : V.simpleDesc) &&
                                    (0, G.BX)(v.View, {
                                      className: "info deposit",
                                      children: [
                                        (0, G.tZ)(v.Text, {
                                          children: V.simpleDesc,
                                        }),
                                        (0, G.tZ)(v.Text, {
                                          className: "ifont-detail iconfont",
                                          id: "AXBD",
                                          onClick: T,
                                        }),
                                      ],
                                    }),
                                  L &&
                                    (0, G.tZ)(v.View, {
                                      className: "info",
                                      children: L,
                                    }),
                                ],
                              }),
                            (0, G.BX)(v.View, {
                              className: "item".concat(W),
                              children: [
                                Boolean(null == C ? void 0 : C.bargainFlag) &&
                                  (0, G.tZ)(v.View, {
                                    className: "box-tab",
                                    children: (0, G.BX)(v.View, {
                                      className: "content",
                                      children: [
                                        (0, G.tZ)(v.View, {
                                          className: "tab-left".concat(
                                            (0, q.gP)(!_, " active")
                                          ),
                                          id: "AXBE",
                                          onClick: function () {
                                            return N("back");
                                          },
                                          children: "还价订",
                                        }),
                                        (0, G.tZ)(v.View, {
                                          className: "tab-right".concat(
                                            (0, q.gP)(_, " active")
                                          ),
                                          id: "AXBF",
                                          onClick: function () {
                                            return N(null);
                                          },
                                          children: "快速订",
                                        }),
                                      ],
                                    }),
                                  }),
                                (0, G.BX)(v.View, {
                                  className: "big-title",
                                  children: [
                                    [1, 4].includes(B) &&
                                      (0, G.tZ)(v.Text, {
                                        children: "在线支付",
                                      }),
                                    [2, 3].includes(B) &&
                                      (0, G.tZ)(v.Text, {
                                        children: "到店支付",
                                      }),
                                    (0, G.BX)(v.Text, {
                                      className: "fr color-red",
                                      children: ["￥", j],
                                    }),
                                  ],
                                }),
                                (0, G.BX)(v.View, {
                                  className: "strong room-price",
                                  children: [
                                    (0, G.BX)(v.View, {
                                      className: "wrapper",
                                      children: [
                                        (0, G.tZ)(v.Text, { children: "房费" }),
                                        s.maskTag &&
                                          (0, G.tZ)(v.Image, {
                                            src: s.maskTag,
                                            className: "mask-tag",
                                          }),
                                      ],
                                    }),
                                    (0, G.tZ)(v.Text, {
                                      className: "fr",
                                      children: "￥" + s.roomPrice,
                                    }),
                                  ],
                                }),
                                null == b
                                  ? void 0
                                  : b.map(function (e) {
                                      return (0,
                                      G.BX)(v.View, { className: "txt", children: [(0, G.BX)(v.View, { className: "date-breakfast", children: [(0, G.tZ)(v.Text, { className: "date", children: e.effectiveDate }), (0, G.tZ)(v.Text, { children: e.breakFast })] }), (0, G.tZ)(v.Text, { className: "fr", children: "¥" + e.amountAfterTax + "*" + g })] }, "idx");
                                    }),
                                L &&
                                  (0, G.tZ)(
                                    v.View,
                                    { className: "txt", children: L },
                                    "tax-desc"
                                  ),
                                3 !== B &&
                                  (null == w ? void 0 : w.length) > 0 &&
                                  (0, G.BX)(k.default.Fragment, {
                                    children: [
                                      (0, G.tZ)(v.View, { className: "line" }),
                                      (0, G.BX)(v.View, {
                                        className: "strong",
                                        children: [
                                          (0, G.tZ)(v.Text, {
                                            children: "超值加购",
                                          }),
                                          (0, G.tZ)(v.Text, {
                                            className: "fr",
                                            children: "￥" + o,
                                          }),
                                        ],
                                      }),
                                      w.map(function (e, t) {
                                        return (0,
                                        G.BX)(v.View, { className: "txt", children: [(0, G.tZ)(v.Text, { children: e.title }), (0, G.tZ)(v.Text, { className: "fr", children: "¥" + e.buyAmount })] }, t);
                                      }),
                                    ],
                                  }),
                                K > 0 &&
                                  (0, G.BX)(k.default.Fragment, {
                                    children: [
                                      (0, G.tZ)(v.View, { className: "line" }),
                                      (0, G.BX)(v.View, {
                                        className: "strong",
                                        children: [
                                          (0, G.tZ)(v.Text, {
                                            children: "促销优惠",
                                          }),
                                          (0, G.tZ)(v.Text, {
                                            className: "fr",
                                            children: "-￥".concat(K),
                                          }),
                                        ],
                                      }),
                                      3 !== B &&
                                        w
                                          .filter(function (e) {
                                            return Boolean(
                                              e.preferentialAmount
                                            );
                                          })
                                          .map(function (e, t) {
                                            return (0,
                                            G.BX)(v.View, { className: "txt", children: [(0, G.tZ)(v.Text, { children: e.displayText }), (0, G.tZ)(v.Text, { className: "fr", children: "-¥" + e.preferentialAmount })] }, t);
                                          }),
                                      null == p
                                        ? void 0
                                        : p
                                            .filter(function (e) {
                                              return Boolean(e.forceShowFlag);
                                            })
                                            .map(function (e, t) {
                                              return (0,
                                              G.BX)(v.View, { className: "txt", children: [(0, G.tZ)(v.Text, { children: e.title }), (0, G.tZ)(v.Text, { className: "fr", children: "-¥" + e.price })] }, t);
                                            }),
                                    ],
                                  }),
                                (null == C ? void 0 : C.bargainFlag) &&
                                  _ &&
                                  (0, G.BX)(k.default.Fragment, {
                                    children: [
                                      (0, G.tZ)(v.View, { className: "line" }),
                                      (0, G.BX)(v.View, {
                                        className: "strong back-strong",
                                        children: [
                                          (0, G.tZ)(v.Text, {
                                            children: "可与酒店还价",
                                          }),
                                          (0, G.tZ)(v.Text, {
                                            className: "fr",
                                            children: "-￥" + C.bargainTop,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ((null == I ? void 0 : I.length) > 0 ||
                                  (null == f ? void 0 : f.length) > 0) &&
                                  (0, G.BX)(k.default.Fragment, {
                                    children: [
                                      (0, G.tZ)(v.View, { className: "line" }),
                                      (0, G.BX)(v.View, {
                                        className: "strong",
                                        children: [
                                          (0, G.tZ)(v.Text, {
                                            children: "智行补贴",
                                          }),
                                          (0, G.tZ)(v.Text, {
                                            className: "fr",
                                            children: "-￥" + (y + R),
                                          }),
                                        ],
                                      }),
                                      (0, G.BX)(v.View, {
                                        children: [
                                          null == f
                                            ? void 0
                                            : f.map(function (e, t) {
                                                return (0,
                                                G.BX)(v.View, { className: "txt coupon", children: [(0, G.tZ)(v.Text, { children: e.name }), (0, G.tZ)(v.Text, { className: "fr", children: "-¥" + e.price })] }, t);
                                              }),
                                          null == I
                                            ? void 0
                                            : I.map(function (e, t) {
                                                return (0,
                                                G.BX)(v.View, { className: "txt coupon", children: [(0, G.tZ)(v.Text, { children: e.title }), (0, G.tZ)(v.Text, { className: "fr", children: "-¥" + e.price })] }, "zx-prefe-".concat(t));
                                              }),
                                        ],
                                      }),
                                    ],
                                  }),
                                (g > 1 || x > 1) &&
                                  j > 0 &&
                                  (0, G.BX)(G.HY, {
                                    children: [
                                      (0, G.tZ)(v.View, { className: "line" }),
                                      (0, G.BX)(v.View, {
                                        className: "actual-pay",
                                        children: ["实际花费￥", j],
                                      }),
                                      (0, G.BX)(v.View, {
                                        className: "average-price",
                                        children: [
                                          (0, G.tZ)(v.Text, {
                                            children: "每间每晚均价",
                                          }),
                                          "￥",
                                          parseFloat(
                                            ((j - o) / (x * g)).toFixed(2)
                                          ),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            0 !== (null == c ? void 0 : c.price) &&
                              (0, G.BX)(v.View, {
                                className: "item",
                                children: [
                                  (0, G.BX)(v.View, {
                                    className: "big-strong",
                                    children: [
                                      (0, G.tZ)(v.Text, {
                                        className: "danbao-tit",
                                        children: "离店后返现金",
                                      }),
                                      (null === (t = c.cashBackInfo) ||
                                      void 0 === t
                                        ? void 0
                                        : t.cashBackTitle) &&
                                        (0, G.tZ)(v.Text, {
                                          className: "back-desc",
                                          children:
                                            c.cashBackInfo.cashBackTitle,
                                        }),
                                      (0, G.tZ)(v.Text, {
                                        className: "fr color-red",
                                        children: "￥" + c.price,
                                      }),
                                    ],
                                  }),
                                  null === (i = c.cashBackInfo) ||
                                  void 0 === i ||
                                  null === (a = i.cashBackInfoDetailList) ||
                                  void 0 === a
                                    ? void 0
                                    : a.map(function (e, t) {
                                        return (0,
                                        G.BX)(v.View, { className: "txt", children: [(0, G.tZ)(v.Text, { children: e.cashBackDetailName }), (0, G.tZ)(v.Text, { className: "fr", children: e.cashBackDetailPrice })] }, t);
                                      }),
                                  (null === (n = c.randomCouponInfo) ||
                                  void 0 === n
                                    ? void 0
                                    : n.price) > 0 &&
                                    (0, G.BX)(v.View, {
                                      className: "txt",
                                      children: [
                                        (0, G.tZ)(v.Text, {
                                          children: c.randomCouponInfo.title,
                                        }),
                                        (0, G.tZ)(v.Text, {
                                          className: "fr",
                                          children: c.randomCouponInfo.price,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              );
            }),
            xe =
              "https://images3.c-ctrip.com/ztrip/hotel/icons/jikahuodong/ic_tc_hongbao@3x.png",
            ye = k.default.memo(function (e) {
              var t = e.bottomInfo,
                i = e.checkBookingResult,
                a = void 0 === i ? {} : i,
                n = e.displayPriceDetail,
                o = e.inviteFriendInfo,
                r = e.pageId,
                c = e.priceInfo,
                l = e.onClickBackTipsModalOpen,
                s = e.submitOrder,
                d = e.togglePriceDetail,
                u = a.bargainInfo,
                h = a.payType,
                m = null == u ? void 0 : u.bargainFlag,
                p = (0, q.gP)(n, "open"),
                f = "price".concat((0, q.gP)(c, " small")),
                g = (0, k.useCallback)(
                  function (e) {
                    var t;
                    null === (t = (0, C.getCurrentPage)()) ||
                      void 0 === t ||
                      t.ubtTrace(222809, { PageId: r }),
                      s(e);
                  },
                  [r, s]
                ),
                b = (0, k.useCallback)(
                  function (e) {
                    var t;
                    null === (t = (0, C.getCurrentPage)()) ||
                      void 0 === t ||
                      t.ubtTrace(222808, { PageId: r }),
                      s(e, "back");
                  },
                  [r, s]
                );
              return (0,
              G.BX)(v.View, { className: "ht-pay-box", children: [(0, G.BX)(v.View, { className: "left", children: [(0, G.BX)(v.View, { className: "price-wrap", children: [(0, G.BX)(v.View, { className: "normal", style: (0, q.LP)(!m), children: [(0, G.BX)(v.View, { className: f, children: [(0, G.tZ)(v.Text, { className: "prefix", style: (0, q.LP)(c), children: c }), (0, G.tZ)(v.Text, { className: "color-red", children: t.showPrice })] }), (0, G.BX)(v.View, { className: "cashback", style: (0, q.LP)(t.cashBackText), children: [(0, G.tZ)(v.Text, { className: "prefix", children: "本单实际花费" }), (0, G.BX)(v.Text, { className: "color-red", children: ["¥", t.showPrice - t.cashBackPrice] })] })] }), (0, G.BX)(v.View, { className: "bargain", style: (0, q.LP)(m), children: [[1,
                                4].includes(h) && (0, G.tZ)(v.View, { className: "prefix", children: "在线支付" }), 2 === h && (0, G.tZ)(v.View, { className: "prefix", children: "到店支付" }), 3 === h && (0, G.tZ)(v.View, { className: "prefix", children: "支付担保金" })] }), (0, G.BX)(v.View, { className: "action", id: "AXAx", onClick: d, children: ["明细 ", (0, G.tZ)(H.Z, { name: "arr", className: p })] })] }), (0, G.BX)(v.View, { className: "price-desc", style: (0, q.LP)(!m, "flex"), children: [t.discountInfo && (0, G.tZ)(v.View, { className: "desc", children: t.discountInfo }), t.cashBackText && (0, G.tZ)(v.View, { className: "desc", children: t.cashBackText }), (null == o ? void 0 : o.inviteFriendDesc) && (0, G.BX)(v.View, { className: "tag", children: [(0, G.tZ)(v.Image, { src: xe, mode: "widthFix", className: "icon" }), (0, G.tZ)(v.Text, { className: "color-red", children: o.inviteFriendDesc })] })] })] }), (0, G.BX)(v.View, { className: "right", children: [!m && (0, G.tZ)(v.View, { className: "btn-book btn-red", id: "AXAy", onClick: s, children: t.btnText }), m && u && (0, G.BX)(v.View, { className: "bargain-btns", children: [(0, G.BX)(v.View, { className: "bargain-btn", id: "AXAz", onClick: b, children: [(0, G.BX)(v.View, { className: "title", children: [(0, G.tZ)(v.View, { className: "name", children: "还价订" }), (0, G.tZ)(v.View, { className: "price", children: "￥" }), (0, G.tZ)(v.View, { className: "price strong", children: t.showPrice })] }), (0, G.BX)(v.View, { className: "desc", children: [(0, G.tZ)(v.Text, { className: "txt", children: u.confirmTimeDesc }), (0, G.tZ)(v.Text, { className: "line" }), (0, G.tZ)(v.Text, { className: "txt", children: u.successRateDesc })] })] }), (0, G.BX)(v.View, { className: "normal-btn btn-red", id: "AXBA", onClick: g, children: [(0, G.BX)(v.View, { className: "title", children: [(0, G.tZ)(v.View, { className: "name", children: "快速订" }), (0, G.tZ)(v.View, { className: "price", children: "￥" }), (0, G.tZ)(v.View, { className: "price strong", children: t.proPrice })] }), (0, G.BX)(v.View, { className: "desc", children: [(0, G.tZ)(v.Text, { className: "txt", children: "立即确认" }), (0, G.tZ)(v.Text, { className: "line" }), (0, G.tZ)(v.Text, { className: "txt", children: "成功率约100%" })] })] })] })] }), (0, G.BX)(v.View, { className: "bargain-desc", id: "AXBB", onClick: l, style: (0, q.LP)(null == u ? void 0 : u.description, "flex"), children: [(0, G.tZ)(v.Text, { children: null == u ? void 0 : u.description }), (0, G.tZ)(H.Z, { name: "detail" })] })] });
            }),
            Ie = {
              swan: "https://images3.c-ctrip.com/ztrip/hotel/icons/xiaochengxu/jiudianxuanchuan@3x.png",
              zxty: "https://images3.c-ctrip.com/ztrip/hotel/202109/slogan@3x.png",
            },
            Pe = k.default.memo(function (e) {
              var t,
                i,
                a = e.invoiceInformation,
                n = e.allCashBackInfo,
                o = e.serviceProvide,
                r = e.policyRelationList,
                c = X.default.isBaidu ? Ie.swan : Ie.zxty;
              return (0, G.BX)(k.default.Fragment, {
                children: [
                  (0, G.tZ)(v.View, {
                    className: "ht-booking-card pb0",
                    style: (0, q.LP)(a),
                    children: (0, G.BX)(v.View, {
                      className: "item",
                      children: [
                        (0, G.tZ)(v.View, {
                          className: "label",
                          children: "开具发票",
                        }),
                        (0, G.tZ)(v.View, { className: "txt", children: a }),
                      ],
                    }),
                  }),
                  (0, G.BX)(v.View, {
                    className: "tip-items",
                    children: [
                      (0, G.BX)(v.View, {
                        className: "book-tip-item",
                        style: (0, q.LP)(
                          null == n ||
                            null === (t = n.cashBackInfo) ||
                            void 0 === t
                            ? void 0
                            : t.cashBackSimpleRemark
                        ),
                        children: [
                          (0, G.tZ)(v.View, {
                            className: "title",
                            children: "返现说明：",
                          }),
                          (0, G.tZ)(v.View, {
                            className: "desc",
                            children:
                              null == n ||
                              null === (i = n.cashBackInfo) ||
                              void 0 === i
                                ? void 0
                                : i.cashBackSimpleRemark,
                          }),
                        ],
                      }),
                      (0, G.BX)(v.View, {
                        className: "book-tip-item statement",
                        style: (0, q.LP)(
                          Boolean(o && (null == r ? void 0 : r.length))
                        ),
                        children: [
                          o &&
                            !X.default.isBaidu &&
                            (0, G.tZ)(v.View, {
                              className: "desc",
                              children: o,
                            }),
                          null == r
                            ? void 0
                            : r.map(function (e, t) {
                                return (0,
                                G.tZ)(v.View, { className: "desc", children: (0, G.tZ)(Z.ZtRichLinkText, { nodes: e.desc }) }, t);
                              }),
                        ],
                      }),
                      (0, G.tZ)(v.View, {
                        className: "book-tip-item",
                        children: (0, G.tZ)(v.Image, {
                          className: "post",
                          mode: "widthFix",
                          src: c,
                        }),
                      }),
                    ],
                  }),
                ],
              });
            }),
            Ne = k.default.memo(function (e) {
              var t = e.bookingCheckLoading,
                i = e.bookDescriptionArr,
                a = e.cancelRemarkIcon,
                n = e.confirmRemarkIcon,
                o = e.dates,
                r = o.checkInDay_disp,
                c = o.checkOutDay_disp,
                l = o.totalDays,
                s = e.hourRoomInfo,
                d = s.duringTime,
                u = s.earliestArriveTime,
                m = s.latestArriveTime,
                p = e.roomConsumePackages,
                f = e.hotelRulesInfo,
                g = e.incentiveCancelRemark,
                b = e.incentiveConfirmRemark,
                w = e.roomInfo,
                x = e.showedRoom,
                y = e.onShowDateModal,
                I = e.openBasicInfoDrawer,
                P = e.openRoomModal,
                N = (0, h.Z)(r, 2),
                T = N[0],
                Z = N[1],
                C = (0, h.Z)(c, 2),
                B = C[0],
                V = C[1],
                L = "连住".concat(d, "，可住时段：").concat(u, "-").concat(m),
                D = d && u && m ? L : null,
                A = D ? "".concat(T, "（").concat(Z, "）") : null,
                R = "".concat(T, "(").concat(Z, ")"),
                S = "".concat(B, "(").concat(V, ")"),
                F = "".concat(l, "晚"),
                E = (null == p ? void 0 : p.length) > 0;
              return (0, G.BX)(v.View, {
                className: "hotel-white-box",
                children: [
                  (0, G.BX)(v.View, {
                    className: "book-room-info",
                    children: [
                      (0, G.BX)(v.View, {
                        className: "date-wrap",
                        children: [
                          (0, G.tZ)(v.View, {
                            className: "check-in-out",
                            children: A
                              ? (0, G.tZ)(v.Text, {
                                  className: "fragment",
                                  children: R,
                                })
                              : (0, G.BX)(k.default.Fragment, {
                                  children: [
                                    (0, G.tZ)(v.Text, {
                                      className: "fragment",
                                      children: R,
                                    }),
                                    (0, G.tZ)(v.Text, {
                                      className: "total",
                                      children: F,
                                    }),
                                    (0, G.tZ)(v.Text, {
                                      className: "fragment",
                                      children: S,
                                    }),
                                  ],
                                }),
                          }),
                          (0, G.tZ)(v.View, {
                            className: "change-date color-dark-blue",
                            id: "AXBI",
                            onClick: y,
                            style: (0, q.LP)(X.default.isBaidu),
                            children: "修改日期",
                          }),
                        ],
                      }),
                      (0, G.BX)(v.View, {
                        className: "tit",
                        children: [
                          (0, G.tZ)(v.Text, {
                            children: w.roomName || "没有房型名称",
                          }),
                          (0, G.tZ)(v.Text, {
                            className: "room-detail-entry color-dark-blue",
                            id: "AXBJ",
                            onClick: P,
                            style: (0, q.LP)(x && X.default.isBaidu),
                            children: "房间详情",
                          }),
                        ],
                      }),
                      D && (0, G.tZ)(v.View, { className: "txt", children: D }),
                      (null == i ? void 0 : i.length) > 0 &&
                        (0, G.tZ)(v.View, {
                          className: "txt",
                          children: i.map(function (e, t) {
                            return (0,
                            G.BX)(k.default.Fragment, { children: [(0, G.tZ)(v.View, { className: "desc", children: e }), t !== i.length - 1 && (0, G.tZ)(v.View, { className: "dot", children: "·" })] }, t);
                          }),
                        }),
                      (0, G.tZ)(v.View, {
                        className: "room-consume",
                        style: (0, q.LP)(E),
                        children:
                          null == p
                            ? void 0
                            : p.map(function (e, t) {
                                return (0,
                                G.BX)(v.View, { className: "item", children: [(0, G.tZ)(v.View, { className: "type", children: e.type }), (0, G.tZ)(v.View, { className: "name", children: e.jointName })] }, t);
                              }),
                      }),
                      (0, G.tZ)(v.View, {
                        className: "cancel-rule-breathing",
                        style: (0, q.LP)(t, "flex"),
                      }),
                      (0, G.BX)(v.View, {
                        className: "cancel-rule".concat(
                          (0, q.gP)(E, " consume")
                        ),
                        style: (0, q.LP)(!t, "flex"),
                        children: [
                          (0, G.BX)(v.View, {
                            className: "item txt-dark-blue",
                            style: (0, q.LP)(g, "flex"),
                            children: [
                              (0, G.tZ)(v.Image, { src: a, className: "icon" }),
                              (0, G.tZ)(v.Text, { children: g }),
                            ],
                          }),
                          (0, G.BX)(v.View, {
                            className: "item txt-dark-blue",
                            style: (0, q.LP)(b, "flex"),
                            children: [
                              (0, G.tZ)(v.Image, { src: n, className: "icon" }),
                              (0, G.tZ)(v.Text, { children: b }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (function (e) {
                    var t, i;
                    if (
                      null == e ||
                      null === (t = e.subSectionList) ||
                      void 0 === t ||
                      !t.length
                    )
                      return null;
                    var a = null == e ? void 0 : e.subSectionList[0];
                    return (0, G.BX)(v.View, {
                      className: "room-required",
                      children: [
                        (0, G.BX)(v.View, {
                          className: "first-title",
                          children: [
                            (0, G.tZ)(v.Text, { className: "dian" }),
                            (0, G.tZ)(v.Text, {
                              className: "text",
                              children: null == a ? void 0 : a.content,
                            }),
                          ],
                        }),
                        (0, G.tZ)(v.View, {
                          className: "basic-more",
                          id: "AXBK",
                          onClick: function () {
                            return I(null == f ? void 0 : f.subSectionListV2);
                          },
                          children: (0, G.BX)(v.Text, {
                            className: "txt color-dark-blue",
                            children: [
                              null == e ||
                              null === (i = e.subSectionList) ||
                              void 0 === i
                                ? void 0
                                : i.length,
                              "条·必读",
                            ],
                          }),
                        }),
                      ],
                    });
                  })(f),
                ],
              });
            }),
            Te = k.default.memo(function (e) {
              var t = e.isTraceless,
                i = e.openTracelessDrawer;
              return X.default.isWechat
                ? (0, G.tZ)(v.View, {
                    className: "ht-booking-card traceless",
                    children: (0, G.BX)(v.View, {
                      className: "item",
                      children: [
                        (0, G.BX)(v.View, {
                          className: "label",
                          id: "AXBL",
                          onClick: function () {
                            return i("detail");
                          },
                          children: [
                            "无痕预订 ",
                            (0, G.tZ)(v.Text, {
                              className: "ifont-detail iconfont",
                            }),
                          ],
                        }),
                        (0, G.BX)(v.View, {
                          className: "cont-wrap",
                          children: [
                            (0, G.BX)(v.View, {
                              className: "txt",
                              children: [
                                (0, G.tZ)(v.View, {
                                  className: "top",
                                  children: "住后订单自动删除，保护您的隐私",
                                }),
                                (0, G.tZ)(v.View, {
                                  className: "bottom",
                                  children:
                                    "同时关闭短信通知，不会获得返现/积分/经验值",
                                }),
                              ],
                            }),
                            (0, G.tZ)(H.Z, {
                              name: "checkbox".concat((0, q.gP)(t, "ed")),
                              id: "AXBM",
                              onClick: function () {
                                return i("checkbox");
                              },
                              type: "v2",
                              primary: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, G.tZ)(v.View, {});
            }),
            Ze = k.default.memo(function (e) {
              var t = e.additionalPurchaseList,
                i = e.additionalPurchaseSelectHandler,
                a = e.skipDescriptionPage;
              return X.default.isBaidu
                ? null
                : (0, G.BX)(v.View, {
                    className: "ht-booking-card purchase",
                    style: (0, q.LP)(null == t ? void 0 : t.length),
                    children: [
                      (0, G.tZ)(v.View, {
                        className: "tit-wrap no-border",
                        children: (0, G.tZ)(v.Text, {
                          className: "tit",
                          children: "超值加购",
                        }),
                      }),
                      t.map(function (e, t) {
                        return (0, G.tZ)(
                          v.View,
                          {
                            className: "item",
                            children: (0, G.BX)(v.View, {
                              className: "cont-wrap",
                              children: [
                                (0, G.tZ)(v.Image, {
                                  className: "left-icon",
                                  src: e.icon,
                                }),
                                (0, G.BX)(v.View, {
                                  className: "txt",
                                  children: [
                                    (0, G.BX)(v.View, {
                                      className: "top",
                                      id: "AXBG",
                                      onClick: function () {
                                        return a(e);
                                      },
                                      children: [
                                        (0, G.tZ)(v.Text, {
                                          className: "title",
                                          children: e.title,
                                        }),
                                        (0, G.tZ)(v.Text, {
                                          className: "ifont-pointsfor iconfont",
                                        }),
                                      ],
                                    }),
                                    e.extraDesc &&
                                      (0, G.tZ)(v.View, {
                                        className: "extra",
                                        children: e.extraDesc,
                                      }),
                                    e.remark &&
                                      (0, G.tZ)(v.View, {
                                        className: "bottom",
                                        children: e.remark,
                                      }),
                                  ],
                                }),
                                (0, G.BX)(v.View, {
                                  className: "icon-wrap",
                                  id: "AXBH",
                                  onClick: function () {
                                    return i(e);
                                  },
                                  children: [
                                    (0, G.BX)(v.View, {
                                      className: "amount",
                                      children: ["¥", e.buyAmount, "/份"],
                                    }),
                                    (0, G.tZ)(H.Z, {
                                      name: "checkbox".concat(
                                        (0, q.gP)(e.selected, "ed")
                                      ),
                                      type: "v2",
                                      primary: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          t
                        );
                      }),
                    ],
                  });
            }),
            Ce = i(47885),
            Be =
              (i(99344),
              "https://images3.c-ctrip.com/ztrip/train.xin/2023_04/word_tittle_2@3x.webp"),
            Ve = function (e) {
              var t,
                i,
                a = e.canReceiveCouponItem,
                n = e.onClose,
                o = e.goToIdentifyPage;
              return (0, G.BX)(v.View, {
                className: "customer-identify-pop",
                children: [
                  (0, G.tZ)(v.View, {
                    children: (0, G.tZ)(v.View, {
                      class: "top-title-box",
                      children: (0, G.BX)(v.View, {
                        className: "flex-jc-sb pl-40",
                        children: [
                          (0, G.BX)(v.View, {
                            class: "title-left",
                            children: [
                              (0, G.tZ)(v.Image, { src: Be }),
                              (0, G.tZ)(v.Text, {
                                children: "部分优惠券需要实名认证",
                              }),
                            ],
                          }),
                          (0, G.tZ)(v.Image, {
                            className: "image-right",
                            src: "https://images3.c-ctrip.com/ztrip/train.xin/2023_04/windows_pic@3x.webp",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, G.tZ)(v.View, {
                    className: "content-identify",
                    children: (0, G.BX)(v.View, {
                      className: "cop-box",
                      children: [
                        (0, G.BX)(v.View, {
                          children: [
                            (0, G.tZ)(v.View, {
                              className: "font-28 color-e61e00 font-500",
                              children:
                                null !==
                                  (t = null == a ? void 0 : a.promotionName) &&
                                void 0 !== t
                                  ? t
                                  : "消费立减券",
                            }),
                            (0, G.BX)(v.View, {
                              className:
                                "font-24 color-ff632c mt-8 flex-align-items-center",
                              children: [
                                (0, G.tZ)(v.Text, {
                                  className:
                                    "mr-4 iconfont2 ifont2-jinggao_linea_28 font-24",
                                }),
                                "实名认证后激活",
                              ],
                            }),
                          ],
                        }),
                        (0, G.BX)(v.View, {
                          className: "nowrap",
                          children: [
                            (0, G.tZ)(v.Text, {
                              className: "font-24 color-e61e00 mr-8",
                              children: "最高减",
                            }),
                            (0, G.BX)(v.Text, {
                              className: "font-48 color-ff2200",
                              children: [
                                (0, G.tZ)(v.Text, {
                                  className: "font-36",
                                  children: "￥",
                                }),
                                null !==
                                  (i =
                                    null == a
                                      ? void 0
                                      : a.currentCouponPrice) && void 0 !== i
                                  ? i
                                  : "0",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, G.BX)(v.View, {
                    className: "confirm-box",
                    children: [
                      (0, G.BX)(v.View, {
                        className: "left-btn btn",
                        onClick: n,
                        children: [
                          (0, G.tZ)(v.Text, { children: "不领券" }),
                          (0, G.tZ)(v.Text, {
                            className: "dian",
                            children: ".",
                          }),
                          (0, G.tZ)(v.Text, { children: "原价订" }),
                        ],
                      }),
                      (0, G.tZ)(v.View, {
                        className: "right-btn btn",
                        onClick: o,
                        children: "立即认证",
                      }),
                    ],
                  }),
                ],
              });
            },
            Le = {
              bigCouponAndMgp: {
                imgUrl:
                  "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/wanliutanceng/wanliu_maiguipei@3x.webp",
                title: "该订单共优惠了<font color='#FF5959'>key元</font>哦!",
                desc: "您可享受买贵必赔特权，再考虑一下吧~",
                btnText: "放弃优惠",
              },
              bigCoupon: {
                imgUrl:
                  "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/wanliutanceng/wanliu_jiesheng@3x.webp",
                title: "该订单共优惠了<font color='#FF5959'>key元</font>哦!",
                desc: "抢到就是赚到！您真的要放弃本次优惠？",
                btnText: "放弃优惠",
              },
              couponAndMgp: {
                imgUrl:
                  "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/wanliutanceng/wanliu_maiguipei@3x.webp",
                title: "酒店怕买贵？",
                desc: "别再浪费时间四处比价啦！买贵多少，我赔多少！",
                btnText: "放弃优惠",
              },
              fewRooms: {
                imgUrl:
                  "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/wanliutanceng/wanliu_remai@3x.webp",
                title: "当前房型仅剩<font color='#FF5959'>key间</font>哦!",
                desc: "快人一步锁定最后房型，赶紧预定吧！",
                btnText: "狠心离开",
              },
              tonightSale: {
                imgUrl:
                  "https://images3.c-ctrip.com/ztrip/hotel/t.ding/jinyetejia/wanliu_jinyetejia@3x.webp",
                title:
                  "该房型享今夜特价<font color='#FF5959'> 优惠￥key</font>",
                desc: "限时特价即将结束，再考虑一下吧~",
                btnText: "放弃低价",
              },
            },
            De = {
              baiduMapNewCustomer:
                "https://images3.c-ctrip.com/ztrip/hotel/icons/xiaochengxu/zhixingxinkehongbao@3x.png",
              baiduMapPost:
                "https://images3.c-ctrip.com/ztrip/hotel/icons/xiaochengxu/jiudianxuanchuan@3x.png",
              cancelRemark:
                "https://images3.c-ctrip.com/ztrip/hotel/2022/7/blue_ok@3x.webp",
              noCancelRemark:
                "https://images3.c-ctrip.com/ztrip/hotel/2022/7/nocancel@3x.webp",
              confirmRemark:
                "https://images3.c-ctrip.com/ztrip/hotel/2022/7/blue_flash@3x.webp",
              redPack:
                "https://images3.c-ctrip.com/ztrip/hotel/icons/jikahuodong/ic_tc_hongbao@3x.png",
              loginRedPack:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/kaoshenjia/kaoyanrili/zhixingxinkehongbao@3x.png",
              deterrentFloat:
                "https://images3.c-ctrip.com/ztrip/hotel/2022/5/rp-float@3x.png",
              zx: {
                newGuest:
                  "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/wanliutanceng/bdkx_xinke@3x.webp",
              },
              ty: {
                newGuest:
                  "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/wanliutanceng/bdkx_xinke_ty@3x.webp",
              },
              newGuestAtmosphere:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/fc_jgmx_xinke@3x.webp",
              blackDiamondMember:
                "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/fc_jgmx_tiyanhz@3x.webp",
              atmosphere: {
                0: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/fc_jgmx_putong@3x.webp",
                2: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/fc_jgmx_beiyin@3x.webp",
                3: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/fc_jgmx_huangjin@3x.webp",
                4: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/fc_jgmx_bojin@3x.webp",
                5: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/10.0qietu/fc_jgmx_heizuan@3x.webp",
              },
            },
            Ae = { 175: "积分兑早餐", 659: "积分兑换房费立减" },
            Re = {
              weapp: { success: 226745, error: 226746 },
              swan: { success: 226743, error: 226744 },
              alipay: { success: 226747, error: 226748 },
              other: { success: 226749, error: 226749 },
            },
            Xe = {
              pageId: X.default.isTieyou ? "10650018762" : "10650018585",
              pageTitle: "订单填写",
              data: {
                isTieyou: X.default.isTieyou,
                isBaidu: X.default.isBaidu,
                isBaiduMap: N.A.isBaiduMap,
                isBdOnly: X.default.isBaidu && !N.A.isBaiduMap,
                pageTitle: "订单填写",
                date: (0, T.Nj)().date,
                roomInfo: {
                  roomName: "房型名称",
                  bedtype: "大床",
                  breakfast: "双早",
                  canceltype: "免费取消",
                  broadband: "",
                  roomSize: 0,
                  windowType: "",
                },
                isOutland: !1,
                roomNum: 1,
                queryRoomNum: 1,
                roomSelectorList: [],
                personList: [],
                foreignPersonList: [],
                phone: "",
                cardNumber: "",
                checkBookingResult: {},
                selectGuaranteeTypeModel: {},
                historyGuaranteeItem: null,
                selectGuaranteeTimeIndex: -1,
                guaranteeText: "",
                guaranteeList: [],
                hotelCancelPenalty: {},
                allCashBackInfo: {},
                roomPriceList: [],
                couponList: [],
                canUseCouponNum: 0,
                preferentialList: [],
                promotionList: [],
                displayPromotionList: [],
                popCuxiaoList: [],
                zxPreferentialList: [],
                zxPreferentialTotal: 0,
                memberRightInfoList: [],
                receivePriceCompensate: 1,
                preferencePriceTag: "",
                preferencePriceTagInfo: [],
                additionalPurchaseList: [],
                selectedAdditionalList: [],
                additionalBuyAmount: 0,
                additionalPreferenceAmount: 0,
                bottomInfo: {
                  showPrice: 0,
                  proPrice: 0,
                  promotionPrice: 0,
                  preferentialPrice: 0,
                  roomPrice: 0,
                  btnText: "提交订单",
                  discountInfo: "",
                  priceInfo: "",
                  cashBackText: "",
                },
                displayPreferentialList: !1,
                displayPriceDetail: !1,
                displayPriceDetailType: "back",
                invoiceInformation: "",
                specialTip: "",
                cancelRemark: "",
                serviceProvide: "",
                incentiveCancelRemark: "",
                incentiveConfirmRemark: "",
                incentiveTips: [],
                hotelRulesInfo: null,
                totalPreferentialList: [],
                couponInfo: null,
                backTipsModalVisible: !1,
                backTipsModalInfo: "",
                keepStayModalVisible: !1,
                keepStayInfo: {},
                bubbleList: [],
                bubbleListVisible: !1,
                fixedBubbleListVisible: !1,
                bookingExcitationdisplay: "",
                showedRoom: null,
                transition: !1,
                suiteDetailPopupIndex: 0,
                iconMapping: {
                  1: "zaocan",
                  51: "chuang",
                  4: "fangjianmianji",
                  6: "louceng",
                  17: "jinyan",
                  18: "youchuang",
                  29: "yushi",
                  30: "bianlisheshi",
                  31: "xishuyongpin",
                  32: "shipinyinpin",
                  34: "shiwaijingguan",
                  35: "meitikeji",
                  36: "feiyongzhengce",
                  37: "wifi",
                  38: "wifi",
                  40: "djdiannao",
                  42: "djxianshiqi",
                  43: "djsheshi",
                  50: "qita",
                },
                roomBasicList: [],
                bookingCheckFailedVisible: !1,
                noLoginPriceDetail: {},
                hourRoomInfo: {},
                isHourRoom: !1,
                livedConsumePackages: {},
                showLivedConsumePackages: !1,
                currrentArrivalTime: null,
                showExchangePop: !1,
                isAlreadyShowPointPop: !1,
                drawerInfoList: [],
                policyRelationList: [],
                guaranteeDescVisible: !1,
                drawerSubtitle: null,
                drawerTitle: null,
                drawerType: null,
                bookingCheckExtend: {},
                bookingCheckLoading: !0,
                bubbleLoaded: !1,
                dateVisible: !1,
                isTraceless: !1,
                drawerOptions: {},
                roomConsumePackages: [],
                firstShow: !0,
                isShowIdentifyPop: !1,
              },
              room: {},
              hotel: {},
              detail: {},
              query: {},
              onLoad: function (e) {
                var t = (0, q.X5)(e),
                  i = (0, q.X5)(t.data),
                  a = "bd_search" === t.from;
                if (
                  ((i.isBdSearch = a),
                  this.setInstanceStates(i),
                  this.setDataFromQuery(i),
                  t.isTest)
                ) {
                  var n = a ? "搜索" : "地图",
                    o = (0, q.gP)(
                      i.autoReceiveToken,
                      "新客券token: ".concat(i.autoReceiveToken)
                    ),
                    r = "".concat(t.from, " 百度").concat(n).concat(o);
                  w().showToast({ title: r, icon: "none", duration: 3e3 });
                }
                (this.data.isBaiduMap || a) &&
                  (this.setRequestParamsForBaidu(t, i),
                  N.Z.setLaunchSource({
                    loginSoureType: "baidu_hotel",
                    loginSourceName: a ? "3510731780" : "351331763",
                  })),
                  this.fetchData(a, i, t);
              },
              setDataFromQuery: function (e) {
                var t = e.isBdSearch,
                  i = e.query,
                  a = void 0 === i ? {} : i,
                  n = e.name,
                  o = e.hotelName,
                  r = e.deterrentEndtime,
                  c = e.traceData,
                  l = e.queryTimeMillis,
                  s = e.hotelIndex,
                  d = o || n || this.pageTitle,
                  u = (0, T.Nj)(),
                  h = {
                    isBdSearch: t,
                    pageTitle: d,
                    deterrentEndtime: r,
                    date: u.date,
                    traceData: c,
                    queryTimeMillis: l,
                    hotelIndex: s,
                    roomNum: (null == a ? void 0 : a.roomNumber) || 1,
                    queryRoomNum: (null == a ? void 0 : a.roomNumber) || 1,
                  };
                if (a.checkInDate) {
                  var m = (0, T.BB)({
                    checkInDate: a.checkInDate,
                    checkOutDate: a.checkOutDate,
                  });
                  (h.date = (0, T.vc)({
                    checkInDate: m.checkInDate,
                    checkOutDate: m.checkOutDate,
                    smallHoursFlag: m.smallHoursFlag,
                  })),
                    (a.checkInDate = m.checkInDate),
                    (a.checkOutDate = m.checkOutDate),
                    (a.contrl = m.smallHoursFlag ? 4 : 3);
                } else
                  (a.checkInDate = h.date.checkInDate),
                    (a.checkOutDate = h.date.checkOutDate),
                    (a.contrl = u.smallHoursFlag ? 4 : 3);
                (this.query = a), this.setData(h), this.pageUbtTrace(e);
              },
              pageUbtTrace: function (e) {
                var t = e.deterrentEndtime,
                  i = e.traceData,
                  a = e.hotelIndex;
                this.ubtTrace("O_HOTEL_BOOK_PAGE", {
                  DeviceToken: S.ZP.openid,
                  Sequence: (0, g.Z)(
                    (0, g.Z)({}, this.query),
                    {},
                    {
                      hotelId: this.room.hotelId,
                      ratePlanID: this.room.roomId,
                      queryTimeMillis: this.data.queryTimeMillis,
                      traceData: i,
                      hotelIndex: a,
                    }
                  ),
                }),
                  this.ubtTrace("hotel_applets_booking_trace", {
                    DeviceToken: S.ZP.openid,
                    Sequence: {
                      currentPageName: "hotel_booking_page",
                      currentPageid: this.pageId,
                      fromPage: this.fromPage,
                    },
                  }),
                  t &&
                    this.ubtTrace(210158, {
                      bizKey: "hotel_book_coupon_buoy_show",
                      pageId: this.pageId,
                    });
              },
              setInstanceStates: function (e) {
                var t = e.room,
                  i = void 0 === t ? {} : t,
                  a = e.hotel,
                  n = void 0 === a ? {} : a,
                  o = e.detail,
                  r = void 0 === o ? {} : o,
                  c = e.query,
                  l = void 0 === c ? {} : c,
                  s = e.couponCode,
                  d = void 0 === s ? -1 : s;
                (this.room = i),
                  (this.hotel = n),
                  (this.detail = r),
                  (this.couponCode = d),
                  (this.fromPage = l.fromPage);
              },
              setRequestParamsForBaidu: function (e, t) {
                var i,
                  a = "bd_search" === e.from;
                (this.baiduHeadExtensions = []),
                  e.from && (this.fromPage = e.from),
                  e.ouid &&
                    ((this.bdAllianceValue = e.ouid),
                    this.baiduHeadExtensions.push({
                      name: "AllianceValue",
                      value: this.bdAllianceValue,
                    })),
                  e.bdAppId &&
                    ((this.baiduClientId = e.bdAppId),
                    this.baiduHeadExtensions.push({
                      name: "bdMapClientId",
                      value: this.baiduClientId,
                    })),
                  null !== (i = t.room) &&
                    void 0 !== i &&
                    i.allianceType &&
                    ((this.bdAllianceType = t.room.allianceType),
                    this.baiduHeadExtensions.push({
                      name: "AllianceType",
                      value: this.bdAllianceType,
                    })),
                  t.bdCouponId && (this.bdCouponId = t.bdCouponId),
                  e.couponIds && (this.bdReceiveCouponIds = e.couponIds),
                  a &&
                    this.baiduHeadExtensions.push({
                      name: "channel",
                      value: "bd_search",
                    });
              },
              fetchData: function (e, t, i) {
                var a = this;
                return (0, f.Z)(
                  (0, p.Z)().mark(function n() {
                    var o;
                    return (0, p.Z)().wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (((n.prev = 0), !a.data.isBaidu)) {
                                n.next = 20;
                                break;
                              }
                              if (!e) {
                                n.next = 11;
                                break;
                              }
                              if (S.ZP.isLogin) {
                                n.next = 6;
                                break;
                              }
                              return (
                                (n.next = 6), a.getBaiduSearchPhoneNumber()
                              );
                            case 6:
                              if (!t.autoReceiveToken) {
                                n.next = 9;
                                break;
                              }
                              return (
                                (n.next = 9),
                                (0, O.pE)({
                                  data: {
                                    token: t.autoReceiveToken,
                                    clientVersion: D.Z.clientVersion,
                                  },
                                })
                              );
                            case 9:
                              return (n.next = 11), (0, F.cN)();
                            case 11:
                              if (!S.ZP.isLogin) {
                                n.next = 14;
                                break;
                              }
                              return (n.next = 14), a.getUserImportantRight();
                            case 14:
                              return (n.next = 16), a.getBdMapRoomFacility(t);
                            case 16:
                              return (
                                (o = n.sent),
                                a.renderPage(o),
                                a.bookingCheck(),
                                n.abrupt("return")
                              );
                            case 20:
                              a.renderPage(), a.bookingCheck(), (n.next = 28);
                              break;
                            case 24:
                              (n.prev = 24),
                                (n.t0 = n.catch(0)),
                                console.error("fetchData error", n.t0),
                                i.isTest &&
                                  w().showModal({
                                    title: "错误",
                                    content: n.t0.toString(),
                                  });
                            case 28:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[0, 24]]
                    );
                  })
                )();
              },
              getBaiduSearchPhoneNumber: function () {
                var e = this;
                return new Promise(function (t) {
                  var i = { title: "登录成功", icon: "none" };
                  swan.getPhoneNumber({
                    success: function (i) {
                      e.setData({ isLogin: !0 }),
                        (0, S.qh)({
                          encryptedData: i.data,
                          iv: i.iv,
                          isNeedDuidAuth: 1,
                        })
                          .then(t)
                          .catch(t);
                    },
                    fail: function (e) {
                      console.error("getPhoneNumber fail", e),
                        (i.title = "登录失败"),
                        w().showToast(i),
                        t();
                    },
                  });
                });
              },
              getBdMapRoomFacility: function (e) {
                var t = this;
                return (0, f.Z)(
                  (0, p.Z)().mark(function i() {
                    var a,
                      n,
                      o,
                      r,
                      c,
                      l,
                      s,
                      d,
                      u,
                      h,
                      m,
                      f,
                      k,
                      v,
                      b,
                      w,
                      x,
                      y,
                      I,
                      P,
                      N,
                      T,
                      Z,
                      C;
                    return (0, p.Z)().wrap(
                      function (i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (a = e.room),
                                (i.prev = 1),
                                (r = t.data.date),
                                (c = {
                                  data: {
                                    hotelId: a.hotelId,
                                    baseRoomId: a.baseId,
                                    ratePlanCode: a.ratePlanID,
                                    checkIn: r.checkInDate,
                                    checkOut: r.checkOutDate,
                                    clientVersion: D.Z.clientVersion,
                                  },
                                }),
                                (i.next = 6),
                                (0, O.Vl)(c)
                              );
                            case 6:
                              if (
                                ((l = i.sent),
                                null !== (n = l.data) &&
                                  void 0 !== n &&
                                  null !== (o = n.roomBasicList) &&
                                  void 0 !== o &&
                                  o.length)
                              ) {
                                i.next = 9;
                                break;
                              }
                              return i.abrupt("return", []);
                            case 9:
                              return (
                                (s = l.data),
                                (d = s.roomBasicList),
                                (u = s.imageList),
                                (h = s.bedInfoTypeList),
                                (m = [4, 6, 38, 18, 17, 51, 5, 1]),
                                (f = [2, 3, 23, 7, 8, 12, 10]),
                                (k = d.filter(function (e) {
                                  return 36 === e.type;
                                })),
                                (v = []),
                                (b = []),
                                d.forEach(function (e) {
                                  var t = e.itemValue,
                                    i = e.type,
                                    a = (0, E.Tw)(i);
                                  if (t && a) {
                                    var n = v.find(function (t) {
                                      return t.type === e.type;
                                    });
                                    if (m.includes(i)) {
                                      if (![51, 5, 1].includes(i)) {
                                        var o = (0, g.Z)(
                                          (0, g.Z)({}, e),
                                          {},
                                          { iconUrl: a }
                                        );
                                        17 !== i ||
                                          t ||
                                          (o.itemValue = "吸烟详询酒店"),
                                          18 === i &&
                                            (t
                                              ? !t.includes("无窗") &&
                                                t.length > 4 &&
                                                (o.itemValue = "有窗户")
                                              : (o.itemValue = "窗户详询酒店")),
                                          b.push(o);
                                      }
                                    } else
                                      f.includes(i) ||
                                        (n
                                          ? n.itemValues.push((0, g.Z)({}, e))
                                          : v.push(
                                              (0, g.Z)(
                                                (0, g.Z)({}, e),
                                                {},
                                                {
                                                  iconUrl: a,
                                                  itemValues: [(0, g.Z)({}, e)],
                                                }
                                              )
                                            ));
                                  }
                                }),
                                (w = []),
                                (x = d.find(function (e) {
                                  return 51 === e.type;
                                })),
                                (y = d.find(function (e) {
                                  return 5 === e.type;
                                })),
                                (I = d.find(function (e) {
                                  return 1 === e.type;
                                })),
                                (P = k.find(function (e) {
                                  return 361 === e.subType;
                                })),
                                (N = k.find(function (e) {
                                  return 363 === e.subType;
                                })),
                                (T = x ? x.itemValue : ""),
                                (Z = y ? y.itemValue : ""),
                                (C = ""
                                  .concat(T)
                                  .concat(T ? "，" : "")
                                  .concat(Z ? "可住".concat(Z) : "")) &&
                                  w.push({
                                    itemValue: C,
                                    iconUrl: (0, E.Tw)(51),
                                    addInfo: P,
                                    type: "bedInfo",
                                  }),
                                I &&
                                  w.push(
                                    (0, g.Z)(
                                      (0, g.Z)({}, I),
                                      {},
                                      { iconUrl: (0, E.Tw)(1) }
                                    )
                                  ),
                                N &&
                                  w.push(
                                    (0, g.Z)(
                                      (0, g.Z)({}, N),
                                      {},
                                      { iconUrl: (0, E.Tw)(363) }
                                    )
                                  ),
                                t.setData({
                                  roomBasicList: d,
                                  showedRoom: (0, g.Z)(
                                    (0, g.Z)({}, a),
                                    {},
                                    {
                                      subRoomName: a.subRoomName,
                                      roomName: a.roomName,
                                      roomBasicList: d,
                                      typedBasicList: v,
                                      imageList: u,
                                      firstLineList: b,
                                      secondLineList: w,
                                      bedInfoTypeList: h,
                                    }
                                  ),
                                }),
                                i.abrupt("return", d)
                              );
                            case 32:
                              (i.prev = 32),
                                (i.t0 = i.catch(1)),
                                console.log("getBdMapRoomFacility error", i.t0);
                            case 35:
                            case "end":
                              return i.stop();
                          }
                      },
                      i,
                      null,
                      [[1, 32]]
                    );
                  })
                )();
              },
              closeRoomIntroduce: function () {
                this.setData({ transition: !1 });
              },
              openRoomModal: function () {
                var e = this;
                setTimeout(function () {
                  e.setData({ transition: !0 });
                }, 200);
              },
              switchSuiteTab: function (e) {
                this.data.suiteDetailPopupIndex !== e &&
                  this.setData({ suiteDetailPopupIndex: e });
              },
              onReady: function () {
                var e = this;
                w().nextTick(function () {
                  var t = w().createSelectorQuery(),
                    i = {},
                    a = e;
                  t.select(".hotel-date")
                    .boundingClientRect(function (e) {
                      e &&
                        ((i = { top: e.top, height: e.height }),
                        a.setData({ sizeQuery: i }));
                    })
                    .exec();
                });
              },
              onShow: function () {
                if (this.refreshPage && this.data.isBaidu) {
                  if (((this.refreshPage = !1), this.orderId)) {
                    var e,
                      t = encodeURIComponent(
                        JSON.stringify(this.baiduHeadExtensions)
                      ),
                      i = (0, q.gP)(
                        (null === (e = this.baiduHeadExtensions) || void 0 === e
                          ? void 0
                          : e.length) > 0,
                        "&baiduHeadExtensions=".concat(t)
                      ),
                      a = "/pages/hotel/order/order?orderId="
                        .concat(this.orderId, "&fromPage=")
                        .concat(this.fromPage)
                        .concat(i);
                    return (
                      w().navigateTo({ url: a }), void (this.orderId = null)
                    );
                  }
                  this.renderPage(), this.bookingCheck();
                }
                this.data.firstShow
                  ? this.setData({ firstShow: !1 })
                  : (this.getCoupon(),
                    console.log(
                      "--------------酒店填写页展示了--------",
                      this.room
                    ),
                    this.checkSelectCouponPage(),
                    this.ubtTrace("hotel_applets_booking_trace", {
                      DeviceToken: S.ZP.openid,
                      Sequence: {
                        currentPageName: "hotel_booking_page",
                        currentPageid: this.pageId,
                        fromPage: this.fromPage,
                      },
                    }));
              },
              getCoupon: function () {
                var e,
                  t = this,
                  i =
                    null === (e = this.room.canReceiveCouponItem) ||
                    void 0 === e
                      ? void 0
                      : e.promotionKey;
                i &&
                  (0, O._6)({
                    data: {
                      clientVersion: D.Z.clientVersion,
                      promotionKey: i,
                      hotelId: this.hotel.hotelId,
                    },
                  }).then(function (e) {
                    console.log("返回之后领取券的接口", e),
                      1 === e.resultCode &&
                        ((t.couponCode = 1), t.renderPage(), t.bookingCheck());
                  });
              },
              checkSelectCouponPage: function () {
                var e = z.gg.getAttr("selectCouponCode");
                if (e)
                  if (-1 === e) {
                    var t = this.data.preferentialList,
                      i = t.findIndex(function (e) {
                        return 2e4 === e.parentId;
                      });
                    -1 !== i && t.splice(i, 1);
                    var a = t.reduce(function (e, t) {
                      return e + t.price;
                    }, 0);
                    this.setData({
                      couponInfo: null,
                      preferentialList: t,
                      "bottomInfo.preferentialPrice": a,
                    }),
                      console.log("传递的参数==>", t),
                      this.bindBottomInfo();
                  } else {
                    var n = this.data.couponList.find(function (t) {
                      return t.couponCode === e;
                    });
                    if (
                      (n = (0, g.Z)(
                        (0, g.Z)({}, n),
                        {},
                        {
                          parentId: n.parentId,
                          coexistList: n.coexistList,
                          id: n.couponCode,
                          price: n.couponPrice,
                          name: n.couponDisplayName,
                          priority: n.priority,
                        }
                      ))
                    ) {
                      var o = this.data,
                        r = o.preferentialList,
                        c = o.totalPreferentialList;
                      console.log("传递的参数==>", r);
                      var l = r.findIndex(function (e) {
                        return 2e4 === e.parentId;
                      });
                      -1 !== l && r.splice(l, 1);
                      var s = c.findIndex(function (e) {
                        return 3e4 === e.parentId;
                      });
                      if (-1 !== s) {
                        c[s].isSelected = !1;
                        var d = r.findIndex(function (e) {
                          return 3e4 === e.parentId;
                        });
                        -1 !== d && r.splice(d, 1);
                      }
                      r.push(n);
                      var u = r.reduce(function (e, t) {
                        return e + t.price;
                      }, 0);
                      this.setData({
                        couponInfo: n,
                        preferentialList: r,
                        totalPreferentialList: c,
                        "bottomInfo.preferentialPrice": u,
                      }),
                        this.bindBottomInfo();
                    }
                  }
              },
              renderPage: function (e) {
                var t,
                  i,
                  a = this.data,
                  n = a.roomInfo,
                  o = a.roomNum,
                  r =
                    null !== (t = this.room) &&
                    void 0 !== t &&
                    null !== (i = t.roomBasicList) &&
                    void 0 !== i &&
                    i.length
                      ? this.room.roomBasicList
                      : e || [],
                  c = "",
                  l = "",
                  s = "",
                  d = "",
                  u = "",
                  h = 0,
                  m = "";
                r.forEach(function (e) {
                  switch (e.type) {
                    case 1:
                      l = e.itemValue;
                      break;
                    case 51:
                      c = e.itemValue;
                      break;
                    case 3:
                      u = e.itemValue;
                      break;
                    case 9:
                      s = e.itemValue;
                      break;
                    case 10:
                      d = e.itemValue;
                      break;
                    case 4:
                      h = e.itemValue;
                      break;
                    case 18:
                      m = e.itemValue;
                  }
                }),
                  (n.roomName = this.room.subRoomName || this.room.roomName),
                  (n.bedtype = c),
                  (n.breakfast = l),
                  (n.canceltype = u),
                  (n.broadband = s),
                  (n.roomSize = h),
                  (n.windowType = m),
                  this.setData({
                    roomInfo: n,
                    specialTip: d,
                    personList: z.L6.getAttr("personList") || [],
                    roomNum: Math.max(o, this.room.min || 0),
                  });
                var p = z.L6.getAttr("phone") || S.ZP.userName || "";
                p && (this.phoneNode.value = p),
                  z.gg.setAttr("selectCouponCode", null);
              },
              getRoomName: function () {
                var e = this.hotelCheckResult;
                return (0, q.xb)(e) || e.roomInfo
                  ? this.room.subRoomName
                  : e.roomInfo.roomName;
              },
              handleRoomChange: function () {
                this.setData({
                  isRoomSelectorOpen: !this.data.isRoomSelectorOpen,
                });
              },
              handleRoomSelect: function (e) {
                this.setData({ roomNum: e, queryRoomNum: 1 }),
                  this.bookingCheck();
              },
              handlePerson: function (e, t) {
                var i,
                  a = this.data,
                  n = a.personList,
                  o = a.receiveForeignGuest,
                  r =
                    null === (i = e.detail.value) || void 0 === i
                      ? void 0
                      : i.replace(/\s*/g, ""),
                  c =
                    3 === o
                      ? this.checkChineseName(r)
                      : this.checkChineseAndEnglishName(r);
                (n[t] = { value: r, error: c }),
                  this.setData({ personList: (0, m.Z)(n) });
              },
              checkChineseAndEnglishName: function (e) {
                var t,
                  i = null == e ? void 0 : e.includes("/");
                if (e)
                  if (i) {
                    var a = e.split("/"),
                      n = (0, h.Z)(a, 2),
                      o = n[0],
                      r = n[1];
                    (B.Z.isValidEnName(o) && B.Z.isValidEnName(r)) ||
                      (t =
                        '请输入正确的入住人姓名，英文姓和名用“/"隔开，如Han/Meimei');
                  } else t = this.checkChineseName(e);
                else t = "请填写入住人姓名";
                return t;
              },
              checkChineseName: function (e) {
                var t;
                return (
                  e
                    ? /^[\u4E00-\u9FA5\u00b7/\xb7\u2022.]{1,14}$/.test(e)
                      ? e.length < 2
                        ? (t = "中文姓名不可少于两个汉字")
                        : ["先生", "小姐", "女士"].some(function (t) {
                            return e.includes(t);
                          }) && (t = "请输入正确的入住人姓名")
                      : (t = "请输入中文，不含英文/数字/特殊字符")
                    : (t = "请填写入住人姓名"),
                  t
                );
              },
              handleFirstName: function (e, t) {
                var i = this.data.foreignPersonList,
                  a = e.detail.value || "";
                (i[t].firstName = a.trim()),
                  this.setData({ foreignPersonList: i });
              },
              handleLastName: function (e, t) {
                var i = this.data.foreignPersonList,
                  a = e.detail.value || "";
                (i[t].lastName = a.trim()),
                  this.setData({ foreignPersonList: i });
              },
              handlePhone: function (e) {
                this.setData({ phone: e.detail.value.trim() });
              },
              phoneRef: function (e) {
                this.phoneNode = e;
              },
              handleCardNumber: function (e) {
                this.setData({ cardNumber: e.detail.value.trim() });
              },
              handleLastArrivalTime: function (e) {
                var t = this,
                  i = this.data,
                  a = i.historyGuaranteeItem,
                  n = i.checkBookingResult,
                  o = { currrentArrivalTime: e },
                  r = a && a.guarantee !== e.guarantee,
                  c = !a && e.guarantee;
                if (e.guarantee) {
                  var l = this.getGuaranteeText(e, n);
                  (o.selectGuaranteeTypeModel = e),
                    (o.historyGuaranteeItem = e),
                    (o.guaranteeText = l),
                    this.bindBottomInfo();
                }
                this.closeBookDrawer(),
                  this.setData(o, function () {
                    (r || c) && t.bookingCheck();
                  });
              },
              togglePriceDetail: function () {
                this.setData({
                  displayPriceDetail: !this.data.displayPriceDetail,
                });
              },
              closePriceDetail: function () {
                this.setData({ displayPriceDetail: !1 });
              },
              showPriceDetail: function () {
                this.setData({ displayPriceDetail: !0 });
              },
              toggleGuaranteeTips: function () {
                this.setData({
                  guaranteeDescVisible: !this.data.guaranteeDescVisible,
                });
              },
              toggleCashbackTips: function () {
                var e = this.data,
                  t = e.isTieyou,
                  i = e.allCashBackInfo,
                  a = "请您离店后到“我的钱包”中查看或者进行提现操作。";
                i.cashBackInfo &&
                  i.cashBackInfo.cashBackDisplayRemark &&
                  (a = i.cashBackInfo.cashBackDisplayRemark),
                  w().showModal({
                    title: "本单预订可返 ¥".concat(i.price),
                    content: a,
                    confirmText: "知道了",
                    showCancel: !1,
                    confirmColor: t ? "#fc6e51" : "#0080FF",
                    success: function () {},
                  });
              },
              handlePreferential: function () {
                this.setData({
                  displayPreferentialList: !this.data.displayPreferentialList,
                });
              },
              onCloseExchangePointPop: function () {
                this.setData({ showExchangePop: !1 });
              },
              onCloseBookingCheckFailed: function () {
                this.setData({ bookingCheckFailedVisible: !1 }),
                  this.data.previousCheckInDate
                    ? this.onDateChange(
                        (0, T.vc)({
                          checkInDate: this.data.previousCheckInDate,
                          checkOutDate: this.data.previousCheckOutDate,
                        })
                      )
                    : this.onBackAction();
              },
              bookingCheck: function (e, t) {
                var i = this,
                  a = this.data,
                  n = a.roomNum,
                  o = a.selectGuaranteeTypeModel,
                  r = a.date,
                  c = a.foreignPersonList,
                  l = a.personList,
                  s = a.bottomInfo,
                  d = void 0 === s ? {} : s,
                  u = a.isBaidu,
                  h = a.isAlreadyShowPointPop,
                  m = a.traceData,
                  p = a.currrentArrivalTime,
                  f = this.room,
                  g = f.hotelId,
                  k = f.ratePlanID,
                  v = f.payType,
                  b = f.lastTime,
                  x = f.shadowId,
                  y = f.activityType,
                  I = f.subPayType,
                  P = f.psPriceProduct,
                  N = f.showPrice,
                  Z = f.cashBackAmount,
                  B = f.vendorId,
                  V = f.vendorRoomId,
                  L = f.vendorRateCode,
                  A = f.guaranteeInfo,
                  R = f.rightDetailInfoList,
                  X = f.checkInFreeFlag,
                  S = (0, T.rv)(r),
                  F = {
                    data: {
                      hotelId: g,
                      checkInDate: S.checkInDate,
                      checkOutDate: S.checkOutDate,
                      controlBitMap: this.getControlBitmap(this.query),
                      ratePlanCode: k || "",
                      ratePlanCategory: 1 == v ? "501" : "",
                      guestCount: n,
                      quantity: n,
                      hotelExtension: {
                        lateArriveTime: (null == p ? void 0 : p.value) || b,
                        specialList: [],
                        shadowId: x,
                      },
                      queryBitMap: y,
                      hourRoomMark: this.isHourRoom(this.room),
                      payType: v,
                      subPayType: I,
                      clientVersion: D.Z.clientVersion,
                      psPriceProduct: P,
                      showPrice: N,
                      cashBackAmount: Z,
                      traceData: m,
                    },
                  };
                B &&
                  (F.data.vendorInfo = {
                    vendorId: B,
                    vendorRoomId: V,
                    vendorRateCode: L,
                  }),
                  2 == v && (F.data.guaranteeInfo = A),
                  o &&
                    o.value &&
                    (F.data.hotelExtension.lateArriveTime = o.value);
                var E = [];
                this.data.isBaidu &&
                  ((E = this.baiduHeadExtensions),
                  F.head || (F.head = {}),
                  (F.head.extension = this.baiduHeadExtensions),
                  (F.data.traceData = this.room.traceData),
                  this.bdCouponId && (F.data.bdCouponId = this.bdCouponId),
                  this.bdReceiveCouponIds &&
                    (F.data.bdReceiveCouponIds = this.bdReceiveCouponIds)),
                  this.query.allianceInfo &&
                    (F.data.allianceInfo = this.query.allianceInfo),
                  X && 1 === n && (F.data.checkInFreeFlag = X),
                  (0, C.showToast)("可订检测中..."),
                  (0, O.Kw)(F, { extension: E })
                    .then(function (a) {
                      var o, s, m;
                      console.log(a);
                      var f = a || {},
                        g = f.resultCode,
                        k = f.resultMessage,
                        v = a.data || {};
                      if (n > 1 && 7 === g && void 0 === t)
                        return (
                          i.setData({ roomNum: v.roomInfo.maxQuantity }),
                          void i.bookingCheck(!1, v.roomInfo.maxQuantity)
                        );
                      if (1 !== g || (7 === g && void 0 !== t))
                        return w().showModal({
                          title: "温馨提示",
                          content: k || "网络请求错误，请重试",
                          confirmText: "知道了",
                          showCancel: !1,
                          confirmColor: "#fc6e51",
                          success: function (e) {
                            e.confirm && i.onBackAction();
                          },
                          fail: function () {
                            i.onBackAction();
                          },
                        });
                      if (1 != v.bookingType)
                        return i.data.isBaidu
                          ? void i.setData({ bookingCheckFailedVisible: !0 })
                          : w().showModal({
                              title: "温馨提示",
                              content:
                                "很抱歉，当前房型已订完，您可以选择其他房型~",
                              confirmText: "返回",
                              showCancel: !1,
                              confirmColor: "#fc6e51",
                              success: function (e) {
                                e.confirm && i.onBackAction();
                              },
                              fail: function () {
                                i.onBackAction();
                              },
                            });
                      var b = v.additionalPurchase,
                        x = void 0 === b ? {} : b,
                        y = v.hasEnName,
                        I = v.roomInfo,
                        P = v.hotelGuaranteeList,
                        N = v.cashBackInfo,
                        T = v.promotionList,
                        Z = v.hotelCancelPenalty,
                        C = v.roomRate,
                        B = v.memberInfo,
                        V = v.bargainInfo,
                        L = v.invoiceTargetType,
                        D = v.userExchangePoint,
                        A = v.regVendorMember,
                        X = v.studentPreAuth,
                        S = v.bookingExcitationdisplay,
                        F = v.inviteFriendInfo,
                        E = void 0 === F ? {} : F,
                        M = v.hourRoomInfo,
                        _ = v.expectArriveTimeInfo,
                        O = v.receiveForeignGuest,
                        z = v.policyRelationList,
                        G = void 0 === z ? [] : z,
                        U = v.traceData,
                        H = [];
                      x &&
                        x.additionalPurchaseList &&
                        Array.isArray(x.additionalPurchaseList) &&
                        x.additionalPurchaseList.length > 0 &&
                        (H = x.additionalPurchaseList).forEach(function (e) {
                          e.selected = !1;
                        });
                      var j = [],
                        K = [];
                      T &&
                        Array.isArray(T) &&
                        T.length > 0 &&
                        T.forEach(function (e) {
                          -999 === e.promotionId ? j.push(e) : K.push(e);
                        });
                      var W = Math.max(n, I.minQuantity),
                        Y = [];
                      (0, q.xb)(C) ||
                        (0, q.xb)(C.everyRoomRateList) ||
                        C.everyRoomRateList.forEach(function (e) {
                          var t = "";
                          0 == e.breakast
                            ? (t = "无早")
                            : 1 == e.breakast
                            ? (t = "单早")
                            : 2 == e.breakast
                            ? (t = "双早")
                            : 3 == e.breakast
                            ? (t = "三早")
                            : (e.breakast > 3 || -1 == e.breakast) &&
                              (t = "含早");
                          var i = {
                            breakFast: t,
                            effectiveDate: e.effectiveDate,
                            amountAfterTax: e.amountAfterTax,
                          };
                          Y.push(i);
                        });
                      var Q = [];
                      if (
                        ((0, q.xb)(R) || (Q = R),
                        !(0, q.xb)(B) && B.cardPointRatio > 0)
                      ) {
                        var J = { title: B.cardPointRatio + "倍经验值" };
                        Q.push(J);
                        var $ = { title: "累积订单+" + W * r.totalDays };
                        Q.push($);
                      }
                      var ee = c.slice(0, W),
                        te = l.slice(0, W);
                      if (y)
                        for (var ie = 0; ie < W; ie++)
                          ee[ie] || ee.push({ firstName: "", lastName: "" });
                      else
                        for (var ae = 0; ae < W; ae++)
                          te[ae] || "" === te[ae] || te.push("");
                      var ne = "";
                      V && V.bargainFlag && (ne = V.explainDataList);
                      var oe = i.handleUserExchangePoint(D),
                        re = !h && !(null == oe || !oe.exchangePointPopInfo),
                        ce =
                          null == T
                            ? void 0
                            : T.filter(function (e) {
                                var t,
                                  i =
                                    null == oe ||
                                    null === (t = oe.exchangePointList) ||
                                    void 0 === t
                                      ? void 0
                                      : t.find(function (t) {
                                          return (
                                            t.promotionId === e.promotionId
                                          );
                                        });
                                return !i || i.isDefault || i.selected;
                              });
                      (d.promotionPrice = i.getPromotionPrice(ce)),
                        (d.roomPrice = i.getRoomPrice(v)),
                        (d.maskTag = I.maskTag);
                      var le = i.processHotelBasicInfo(v.hotelBasicInfoList),
                        se = (null == E ? void 0 : E.preferencePriceTag) || "",
                        de =
                          (null == E ? void 0 : E.preferencePriceTagInfo) || [],
                        ue = p;
                      !p &&
                        null != _ &&
                        null !== (o = _.hotelGuaranteeList) &&
                        void 0 !== o &&
                        o.length &&
                        (ue = _.hotelGuaranteeList[0]);
                      var he;
                      he =
                        2 === (null == B ? void 0 : B.memberType)
                          ? De.newGuestAtmosphere
                          : 5 === (null == B ? void 0 : B.tempMemberLevel)
                          ? De.blackDiamondMember
                          : De.atmosphere[
                              (null == B ? void 0 : B.memberLevel) || 0
                            ];
                      var me = {
                        hotelRulesInfo: le,
                        drawerType: null,
                        checkBookingResult: v,
                        isOutland: y,
                        roomNum: W,
                        roomSelectorList: I.roomNumList,
                        guaranteeList: P,
                        selectGuaranteeTypeModel: i.getGuaranteeTypeModel(v),
                        allCashBackInfo: {
                          cashBackInfo: N || {},
                          price: N && N.cashBackPrice ? N.cashBackPrice : 0,
                        },
                        promotionList: T,
                        displayPromotionList: ce,
                        popCuxiaoList: K,
                        selectedAdditionalList: [],
                        additionalPurchaseList: H,
                        additionalPreferenceAmount: 0,
                        additionalBuyAmount: 0,
                        zxPreferentialList: j,
                        hotelCancelPenalty: Z,
                        roomPriceList: Y,
                        backTipsModalInfo: ne,
                        memberRightInfoList: Q,
                        foreignPersonList: ee,
                        personList: te,
                        bottomInfo: JSON.parse(JSON.stringify(d)),
                        regVendorMember: A,
                        bookingExcitationdisplay: S,
                        invoiceInformation: u
                          ? "下单后可开具发票"
                          : 1 != L
                          ? "如需发票，可向酒店索取"
                          : "下单后可开具发票",
                        userExchangePoint: oe,
                        exchangePointPopInfo:
                          null == oe ? void 0 : oe.exchangePointPopInfo,
                        showExchangePop: re,
                        studentPreAuth: X,
                        preferencePriceTag: se,
                        preferencePriceTagInfo: de,
                        previousCheckInDate: r.checkInDate,
                        previousCheckOutDate: r.checkOutDate,
                        noLoginPriceDetail:
                          null != I &&
                          null !== (s = I.priceDetailList) &&
                          void 0 !== s &&
                          s.length
                            ? I.priceDetailList[0]
                            : {},
                        hourRoomInfo: M || {},
                        expectArriveTimeInfo: _,
                        historyGuaranteeItem: ue,
                        currrentArrivalTime: ue,
                        checkInFreeFlag:
                          null === (m = v.roomInfo) || void 0 === m
                            ? void 0
                            : m.checkInFreeFlag,
                        receiveForeignGuest: O,
                        policyRelationList: G,
                        inviteFriendInfo: E,
                        atmosphere: he,
                        traceData: U,
                      };
                      i.setData(me, function () {
                        i.bindCancelRemark(v),
                          i.bindBottomInfo(),
                          i.getPreferentialActivity(),
                          i.getBookingCheckExtend(e),
                          re
                            ? setTimeout(function () {
                                i.setData({
                                  showExchangePop: !1,
                                  isAlreadyShowPointPop: !0,
                                });
                              }, 2500)
                            : 1 === i.couponCode
                            ? w().nextTick(function () {
                                var e, t;
                                w()
                                  .showToast({
                                    title:
                                      null === (e = i.room) ||
                                      void 0 === e ||
                                      null === (t = e.canReceiveCouponItem) ||
                                      void 0 === t
                                        ? void 0
                                        : t.promotionToastText,
                                    icon: "none",
                                  })
                                  .then(function () {
                                    i.couponCode = -1;
                                  });
                              })
                            : -91 === i.couponCode &&
                              i.setData({ isShowIdentifyPop: !0 });
                      });
                    })
                    .catch(function (e) {
                      console.log(e), i.setData({ bookingCheckLoading: !1 });
                    })
                    .finally(function () {
                      i.setData({ bookingCheckLoading: !1 }),
                        (0, C.hideLoading)();
                    });
              },
              handleUserExchangePoint: function (e) {
                var t = this;
                if (null == e || !e.currentPoint) return null;
                var i = e.exchangePointList || [],
                  a = null;
                i.forEach(function (e) {
                  if (
                    (!a && e.popWindowInfo && (a = e.popWindowInfo),
                    Ae[e.promotionId] &&
                      (t.ubtTrace(210158, {
                        bizKey: "hotel_book_credit_show",
                        pageId: t.pageId,
                        bookTimeStamp: new Date().getTime(),
                        tagDesc: Ae[e.promotionId],
                        hotelId: t.room.hotelId,
                        roomId: t.room.roomId,
                      }),
                      e.popWindowInfo &&
                        t.ubtTrace(210158, {
                          bizKey: "hotel_book_pop_show",
                          pageId: t.pageId,
                          bookTimeStamp: new Date().getTime(),
                          tagDesc: Ae[e.promotionId],
                          hotelId: t.room.hotelId,
                          roomId: t.room.roomId,
                        }),
                      e.isDefault &&
                        t.ubtTrace(210157, {
                          bizKey: "hotel_book_credit_click",
                          pageId: t.pageId,
                          bookTimeStamp: new Date().getTime(),
                          tagDesc: Ae[e.promotionId],
                          hotelId: t.room.hotelId,
                          roomId: t.room.roomId,
                        })),
                    2 === e.selectType && 2 === e.unit)
                  ) {
                    var i = t.data.date.totalDays,
                      n = t.query.checkOutDate,
                      o = i,
                      r = R()(n);
                    for (e.exchangeItems = []; o--; )
                      e.exchangeItems.unshift({ date: r.format(T.RA), num: 0 }),
                        (r = r.subtract(1, "day"));
                  }
                });
                var n = 0,
                  o = i.map(function (e) {
                    var t,
                      i = e.isDefault,
                      a = Object.assign({}, e, { selected: i });
                    return (
                      i &&
                        ((n += e.point || 0),
                        2 === a.selectType &&
                          null !== (t = a.exchangeItems) &&
                          void 0 !== t &&
                          t.length &&
                          (a.exchangeItems[0].num = 1),
                        e.freeCount &&
                          e.originalPoint &&
                          (n -= e.originalPoint)),
                      a
                    );
                  });
                return (
                  console.error("defaultNeedPoints", n),
                  (0, g.Z)(
                    (0, g.Z)({}, e),
                    {},
                    {
                      exchangePointList: o,
                      needPoint: n,
                      exchangePointPopInfo: a,
                    }
                  )
                );
              },
              handleDateCounterClick: function (e, t, i) {
                var a = this.data.userExchangePoint.exchangePointList[e],
                  n = a.exchangeItems[t],
                  o = a.exchangeItems.reduce(function (e, t) {
                    return e + t.num;
                  }, 0);
                if (!("add" !== i && n.num <= 0)) {
                  if ("add" === i && n.num >= a.limitCount)
                    return (0, C.showToast)("已选择本房间最多早餐份数");
                  if ("add" === i && o >= a.maxCount)
                    return (0, C.showToast)("酒店剩余可兑换早餐数不足");
                  var r = this.calculateExchangePoints(e, i, t);
                  r && this.setData({ userExchangePoint: r });
                }
              },
              handleExchangeClick: function (e) {
                var t,
                  i = this.data,
                  a = i.bottomInfo,
                  n = i.userExchangePoint,
                  o = i.displayPromotionList,
                  r = i.promotionList,
                  c = n.exchangePointList[e],
                  l = {},
                  s = this.calculateExchangePoints(e);
                s && (l.userExchangePoint = s),
                  Ae[c.promotionId] &&
                    c.selected &&
                    this.ubtTrace(210157, {
                      bizKey: "hotel_book_credit_click",
                      pageId: this.pageId,
                      bookTimeStamp: new Date().getTime(),
                      tagDesc: Ae[c.promotionId],
                      hotelId: this.room.hotelId,
                      roomId: this.room.roomId,
                    });
                var d = r.find(function (e) {
                  return e.promotionId === c.promotionId;
                });
                c.selected && d
                  ? (l.displayPromotionList = [].concat((0, m.Z)(o), [d]))
                  : d &&
                    (l.displayPromotionList = o.filter(function (e) {
                      return e.promotionId !== d.promotionId;
                    })),
                  null !== (t = l.displayPromotionList) &&
                    void 0 !== t &&
                    t.length &&
                    ((l.popCuxiaoList = l.displayPromotionList.filter(function (
                      e
                    ) {
                      return -999 !== e.promotionId;
                    })),
                    (a.promotionPrice = this.getPromotionPrice(
                      l.displayPromotionList
                    )),
                    (l.bottomInfo = a)),
                  this.setData(l),
                  this.checkCancelRemark(),
                  this.bindBottomInfo();
              },
              checkAvailableAfterAddPoint: function (e) {
                var t = this.data.userExchangePoint;
                return t.needPoint + e <= t.currentPoint;
              },
              calculateExchangePoints: function (e, t, i) {
                var a,
                  n = this.data.userExchangePoint,
                  o = n.exchangePointList,
                  r = n.currentPoint,
                  c = o[e],
                  l = i >= 0 ? c.exchangeItems[i] : null;
                l
                  ? ((a = c.exchangeItems.reduce(function (e, t) {
                      return e + t.num;
                    }, 0)),
                    (a += "add" === t ? 1 : -1),
                    (l.num += "add" === t ? 1 : -1),
                    (l.selected = a > 0))
                  : (c.selected = !c.selected);
                var s,
                  d = 0,
                  h = (0, u.Z)(o);
                try {
                  for (h.s(); !(s = h.n()).done; ) {
                    var m = s.value;
                    if (2 === m.selectType) {
                      var p,
                        f = 0,
                        k = (0, u.Z)(m.exchangeItems);
                      try {
                        for (k.s(); !(p = k.n()).done; ) {
                          f += p.value.num;
                        }
                      } catch (e) {
                        k.e(e);
                      } finally {
                        k.f();
                      }
                      var v = f - m.freeCount,
                        b = v >= 0 ? v : 0;
                      d += m.originalPoint * b;
                    } else m.selected && (d += m.freeCount ? 0 : m.point);
                  }
                } catch (e) {
                  h.e(e);
                } finally {
                  h.f();
                }
                return d > r
                  ? (l
                      ? ((a -= "add" === t ? 1 : -1),
                        (l.num -= "add" === t ? 1 : -1),
                        (l.selected = a > 0))
                      : (c.selected = !c.selected),
                    void (0, C.showToast)("剩余积分不足"))
                  : (console.error("needPoint", d),
                    (0, g.Z)(
                      (0, g.Z)({}, n),
                      {},
                      { needPoint: d, isPointEnough: d < r }
                    ));
              },
              getBookingCheckExtend: function (e) {
                var t = this,
                  i = (0, T.rv)(this.data.date),
                  a = {
                    data: {
                      hotelId: this.room.hotelId,
                      checkInDate: i.checkInDate,
                      checkOutDate: i.checkOutDate,
                      controlBitMap: this.getControlBitmap(this.query),
                      ratePlanCode: this.room.ratePlanID || "",
                      ratePlanCategory: 1 == this.room.payType ? "501" : "",
                      guestCount: this.data.roomNum,
                      quantity: this.data.roomNum,
                      hotelExtension: {
                        lateArriveTime: this.room.lastTime,
                        specialList: [],
                        shadowId: this.room.shadowId,
                      },
                      queryBitMap: this.room.activityType,
                      hourRoomMark: this.isHourRoom(this.room),
                      payType: this.room.payType,
                      subPayType: this.room.subPayType,
                      clientVersion: D.Z.clientVersion,
                      psPriceProduct: this.room.psPriceProduct,
                      showPrice: this.room.showPrice,
                      cashBackAmount: this.room.cashBackAmount,
                    },
                  },
                  n = [];
                this.data.isBaidu &&
                  (a.head || (a.head = {}),
                  (n = this.baiduHeadExtensions),
                  (a.data.traceData = this.room.traceData),
                  this.bdCouponId && (a.data.bdCouponId = this.bdCouponId)),
                  this.query.allianceInfo &&
                    (a.data.allianceInfo = this.query.allianceInfo),
                  (0, O.Gk)(a, { extension: n })
                    .then(function (i) {
                      !i || i.resultCode < 1
                        ? t.setData({ bookingCheckExtend: {} })
                        : (t.setData({ bookingCheckExtend: i.data || {} }),
                          t.handleConsumePackages(),
                          t.data.isBaidu &&
                            i &&
                            1 === i.resultCode &&
                            t.handleBdBookingData(i, e));
                    })
                    .catch(function () {
                      t.setData({ bookingCheckExtend: {} });
                    })
                    .finally(function () {
                      t.handleIncentive();
                    });
              },
              checkLogin: function () {
                var e = !!S.ZP.isLogin;
                return this.setData({ isLogin: e }), e;
              },
              doLogin: function (e) {
                var t = this;
                S.ZP.doLogin()
                  .then(function () {
                    t.setData({ isLogin: !0 }), e && e();
                  })
                  .catch(function () {
                    w().showToast({
                      title: "取消登录",
                      icon: "none",
                      duration: 1500,
                    });
                  });
              },
              loginToBooking: function () {
                var e = this;
                this.data.isBaidu &&
                  this.ubtTrace("200409", {
                    AllianceValue: this.bdAllianceValue,
                    AllianceType: this.bdAllianceType,
                    bdMapClientId: this.baiduClientId,
                    DeviceToken: S.ZP.openid,
                    Sequence: (0, g.Z)(
                      (0, g.Z)({}, this.query),
                      {},
                      {
                        ratePlanID: this.room.roomId,
                        hotelId: this.hotel.hotelId || this.room.hotelId,
                        queryTimeMillis: new Date().getTime(),
                      }
                    ),
                  });
                var t = this.data.userExcitationInfo,
                  i = t.need_access,
                  a = t.token;
                S.ZP.doLogin(
                  (0, f.Z)(
                    (0, p.Z)().mark(function t() {
                      return (0, p.Z)().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!e.checkLogin()) {
                                t.next = 6;
                                break;
                              }
                              return (t.next = 3), e.getUserImportantRight();
                            case 3:
                              1 === i &&
                                (0, O.pE)({
                                  data: {
                                    token: a,
                                    clientVersion: D.Z.clientVersion,
                                  },
                                }).then(function () {
                                  e.bookingCheck();
                                }),
                                (t.next = 7);
                              break;
                            case 6:
                              e.doLogin(
                                (0, f.Z)(
                                  (0, p.Z)().mark(function t() {
                                    return (0, p.Z)().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.next = 2),
                                              e.getUserImportantRight()
                                            );
                                          case 2:
                                            e.bookingCheck(!0);
                                          case 3:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                )
                              );
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )
                );
              },
              getUserImportantRight: function () {
                return (0, f.Z)(
                  (0, p.Z)().mark(function e() {
                    return (0, p.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, O.YO)({
                                  data: { clientVersion: D.Z.clientVersion },
                                })
                              );
                            case 3:
                              e.next = 8;
                              break;
                            case 5:
                              (e.prev = 5),
                                (e.t0 = e.catch(0)),
                                console.log(
                                  "getUserImportantRight error",
                                  e.t0
                                );
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 5]]
                    );
                  })
                )();
              },
              handleBdBookingData: function (e, t) {
                var i = this,
                  a = e.data.userExcitationInfos;
                if (a && a.length) {
                  var n = (0, h.Z)(a, 1)[0],
                    o = (0, h.Z)(n.items, 1)[0];
                  this.setData({
                    userExcitationInfo: o,
                    userExcitationShowFlag: null == n ? void 0 : n.showFlag,
                  }),
                    t &&
                      o &&
                      1 === o.need_access &&
                      (0, O.pE)({
                        data: {
                          token: o.token,
                          clientVersion: D.Z.clientVersion,
                        },
                      }).then(function () {
                        i.bookingCheck();
                      });
                } else this.setData({ userExcitationInfo: null });
              },
              handleConsumePackages: function () {
                var e = this.data.bookingCheckExtend.consumePackages,
                  t = {},
                  i = [];
                if (null != e && e.length) {
                  var a,
                    n,
                    o = e.filter(function (e) {
                      return 3 === e.type;
                    }),
                    r = o.length
                      ? o
                          .filter(function (e) {
                            var t;
                            return null === (t = e.consumePackageDetails) ||
                              void 0 === t
                              ? void 0
                              : t.length;
                          })
                          .map(function (e) {
                            return e.consumePackageDetails
                              .map(function (e) {
                                return e.priefName;
                              })
                              .join("+");
                          })
                          .join("+")
                      : "";
                  r && ((t.detailNameStr = r), (t.details = o));
                  var c = e.find(function (e) {
                      return 1 === e.type;
                    }),
                    l = e.find(function (e) {
                      return 2 === e.type;
                    });
                  if (
                    null != c &&
                    null !== (a = c.consumePackageDetails) &&
                    void 0 !== a &&
                    a.length
                  ) {
                    var s = {
                      type: "礼",
                      jointName: c.consumePackageDetails
                        .map(function (e) {
                          return e.priefName;
                        })
                        .join("+"),
                    };
                    i.push(s);
                  }
                  if (
                    null != l &&
                    null !== (n = l.consumePackageDetails) &&
                    void 0 !== n &&
                    n.length
                  ) {
                    var d = l.consumePackageDetails.filter(function (e) {
                        return 2 === e.type;
                      }),
                      u = l.consumePackageDetails.filter(function (e) {
                        return 3 === e.type;
                      });
                    if (null != d && d.length) {
                      var h = d
                        .map(function (e) {
                          return e.priefName;
                        })
                        .join("+");
                      i.push({ type: "食", jointName: h });
                    }
                    if (null != u && u.length) {
                      var m = u
                        .map(function (e) {
                          return e.priefName;
                        })
                        .join("+");
                      i.push({ type: "享", jointName: m });
                    }
                  }
                }
                this.setData({
                  roomConsumePackages: i,
                  livedConsumePackages: t,
                });
              },
              checkCancelRemark: function () {
                var e,
                  t = this.data,
                  i = t.checkBookingResult.hotelCancelPenalty,
                  a = t.userExchangePoint,
                  n = (this.room || {}).roomBasicList,
                  o =
                    null == n
                      ? void 0
                      : n.find(function (e) {
                          return -3 === e.type;
                        }),
                  r =
                    null == a ||
                    null === (e = a.exchangePointList) ||
                    void 0 === e
                      ? void 0
                      : e.find(function (e) {
                          return 2 === e.promotionType && 0 === e.point;
                        }),
                  c = "";
                null != o && o.itemValue && null != r && r.selected
                  ? (c = o.itemValue)
                  : i && (c = i.cancelRemark || i.cancelType),
                  this.setData({ incentiveCancelRemark: c });
              },
              handleIncentive: function () {
                var e,
                  t,
                  i = "";
                this.room &&
                  this.room.roomTagList &&
                  this.room.roomTagList.forEach(function (e) {
                    10020 == e.itemId && (i = "立即确认");
                  });
                var a = [],
                  n = !1,
                  o = [],
                  r = [],
                  c = this.room.max;
                this.data.checkBookingResult &&
                  this.data.checkBookingResult.roomInfo &&
                  (c = this.data.checkBookingResult.roomInfo.maxQuantity),
                  c > 0 &&
                    c < 5 &&
                    (a.push({
                      icon: "https://images3.c-ctrip.com/zhixing/zhixing_wechat/hotel_input_surplus.png",
                      tip: "房量紧张，这是我们最后".concat(c, "间"),
                    }),
                    r.push({
                      icon: "https://images3.c-ctrip.com/zhixing/zhixing_wechat/hotel_input_surplus.png",
                      text: "房量紧张，这是我们最后".concat(c, "间"),
                      type: 2,
                      priority: 1,
                    })),
                  this.room.lowestPriceRoomFlag &&
                    (a.push({
                      icon: "https://images3.c-ctrip.com/zhixing/zhixing_wechat/hotel_input_lowest.png",
                      tip: "恭喜，你已选择本店最划算的客房",
                      type: 2,
                    }),
                    r.push({
                      icon: "https://images3.c-ctrip.com/zhixing/zhixing_wechat/hotel_input_lowest.png",
                      text: "恭喜，你已选择本店最划算的客房",
                      type: 2,
                      priority: 1,
                    })),
                  null !== (e = this.data.bookingCheckExtend) &&
                    void 0 !== e &&
                    null !== (t = e.roomExcitationTextList) &&
                    void 0 !== t &&
                    t.length &&
                    (this.data.bookingCheckExtend.roomExcitationTextList.forEach(
                      function (e) {
                        if (
                          (a.push({ icon: e.iconUrl, tip: e.excitationText }),
                          e.priority && 1 === e.priority)
                        ) {
                          var t = "#E6F6F0",
                            i = "#00A663";
                          2 === e.type
                            ? ((t = "#FFEFEF"), (i = "#FE4839"))
                            : 3 === e.type &&
                              ((t = "#FEF0EA"), (i = "#F76D2F")),
                            o.push({
                              icon: e.iconUrl,
                              text: e.excitationText,
                              type: e.type,
                              priority: e.priority,
                              backgroundColor: t,
                              textColor: i,
                            });
                        } else
                          r.push({
                            icon: e.iconUrl,
                            text: e.excitationText,
                            type: e.type,
                            priority: e.priority,
                          });
                      }
                    ),
                    this.data.bookingCheckExtend.roomExcitationTextList[0]
                      .type > 0 &&
                      ((n = !0),
                      (r = r
                        .sort(function (e, t) {
                          return e.priority - t.priority;
                        })
                        .map(function (e) {
                          var t = "#E6F6F0",
                            i = "#00A663";
                          return (
                            2 === e.type
                              ? ((t = "#FFEFEF"), (i = "#FE4839"))
                              : 3 === e.type &&
                                ((t = "#FEF0EA"), (i = "#F76D2F")),
                            (0, g.Z)(
                              (0, g.Z)({}, e),
                              {},
                              { backgroundColor: t, textColor: i }
                            )
                          );
                        })))),
                  o.length > 0 && (r = o.concat(r)),
                  this.hotel &&
                    this.hotel.commonScore &&
                    this.hotel.commonScore > 4.7 &&
                    a.push({
                      icon: "https://images3.c-ctrip.com/zhixing/zhixing_wechat/hotel_input_high_score.png",
                      tip: "真棒！酒店评分高于附近同类型的酒店",
                    }),
                  this.checkCancelRemark(),
                  this.setData({
                    incentiveConfirmRemark: i,
                    bubbleList: r,
                    bubbleListVisible: n,
                    bubbleLoaded: !0,
                    incentiveTips: a.splice(0, 2).map(function (e) {
                      return (0,
                      g.Z)((0, g.Z)({}, e), {}, { tip: (0, q.xC)(e.tip) });
                    }),
                  });
              },
              getControlBitmap: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = 0,
                  i =
                    7 == e.hotelType ||
                    2 == e.specialChannel ||
                    1 === this.room.hourRoomFlag;
                return (
                  i && (t = 1024),
                  4 == e.contrl && (t += 4),
                  this.setData({ isHourRoom: i }),
                  t
                );
              },
              isHourRoom: function (e) {
                for (
                  var t = 1 === e.hourRoomFlag,
                    i = e.roomFeaturList || [],
                    a = 0;
                  a < i.length;
                  a++
                ) {
                  var n = i[a];
                  if (0 == n.type) {
                    t = 16 == (16 & n.key);
                    break;
                  }
                }
                return t;
              },
              getGuaranteeTypeModel: function (e) {
                var t = this,
                  i = {};
                if (e && e.hotelGuaranteeList.length > 0)
                  if ((0, q.xb)(t.data.selectGuaranteeTypeModel)) {
                    var a = e.hotelGuaranteeList.findIndex(function (e) {
                      return e.defaultItem;
                    });
                    a >= 0 &&
                      ((i = e.hotelGuaranteeList[a]),
                      t.setData({ selectGuaranteeTimeIndex: a }));
                  } else {
                    var n = e.hotelGuaranteeList.findIndex(function (e) {
                      return t.data.selectGuaranteeTypeModel.value === e.value;
                    });
                    if (n >= 0)
                      (i = e.hotelGuaranteeList[n]),
                        t.setData({ selectGuaranteeTimeIndex: n });
                    else {
                      var o = e.hotelGuaranteeList.findIndex(function (e) {
                        return e.defaultItem;
                      });
                      o >= 0 &&
                        ((i = e.hotelGuaranteeList[o]),
                        t.setData({ selectGuaranteeTimeIndex: o }));
                    }
                  }
                return (
                  t.setData({ guaranteeText: t.getGuaranteeText(i, e) }), i
                );
              },
              getGuaranteeText: function (e, t) {
                var i = t.expectArriveTimeInfo,
                  a = "";
                if ((0, q.xb)(e))
                  null != i &&
                    i.expectArriveTimeInfo &&
                    (a = i.expectArriveTimeInfo);
                else if (((a = e.title), [3, 2].includes(t.payType))) {
                  var n = (null == e ? void 0 : e.guarantee) && e.price > 0,
                    o = (0, q.gP)(
                      n,
                      "(在线担保¥".concat(e.price, ") 整晚保留"),
                      " 无需担保"
                    );
                  (a = "".concat(e.title).concat(o)),
                    (null == e ? void 0 : e.price) > 0 &&
                      (0, C.showToast)(
                        "您的到店时间较晚需要支付担保金，请注意取消规则变化"
                      );
                }
                return a;
              },
              getPromotionPrice: function (e) {
                var t = 0;
                return (
                  null != e &&
                    e.length &&
                    e.forEach(function (e) {
                      t += e.price;
                    }),
                  (0, q.US)(t)
                );
              },
              getRoomPrice: function (e) {
                var t = 0;
                e &&
                  e.roomRate.everyRoomRateList.forEach(function (e) {
                    t += e.amountAfterTax * this.data.roomNum;
                  }, this);
                return (t = (0, q.US)(t));
              },
              getPreferentialActivity: function () {
                var e = this,
                  t = this;
                if (1 == t.data.checkBookingResult.payType) {
                  var i = (0, T.rv)(t.data.date),
                    a = [
                      {
                        key: "Start",
                        value: t.detail ? t.detail.starLevel : "",
                      },
                      { key: "Price", value: t.data.bottomInfo.roomPrice },
                      { key: "RatePlanCode", value: t.room.ratePlanID },
                      {
                        key: "CityId",
                        value: t.detail ? t.detail.cityId : t.hotel.cityId,
                      },
                      { key: "HotelId", value: t.room.hotelId },
                      { key: "Score", value: t.hotel.commonScore },
                      { key: "CheckIn", value: i.checkInDate },
                      { key: "CheckOut", value: i.checkOutDate },
                      {
                        key: "ControlBitMap",
                        value: t.getControlBitmap(this.query),
                      },
                      { key: "QueryBitMap", value: t.room.activityType },
                      { key: "payType", value: t.room.payType },
                      { key: "ShadowId", value: t.room.shadowId },
                      { key: "ClientVersion", value: D.Z.clientVersion },
                    ];
                  t.detail &&
                    t.detail.hotelExtraInfo &&
                    t.detail.hotelExtraInfo.brandId &&
                    a.push({
                      key: "BrandId",
                      value: t.detail.hotelExtraInfo.brandId,
                    }),
                    t.room.vendorId &&
                      a.push({ key: "VendorId", value: t.room.vendorId }),
                    t.data.checkBookingResult.roomInfo &&
                      t.data.checkBookingResult.roomInfo.cardPrice &&
                      a.push({
                        key: "CardPrice",
                        value: t.data.checkBookingResult.roomInfo.cardPrice,
                      }),
                    t.data.checkBookingResult &&
                      !(0, q.xb)(t.data.checkBookingResult.roomRate) &&
                      a.push({ key: "RoomNumber", value: t.data.roomNum }),
                    t.data.checkBookingResult &&
                      !(0, q.xb)(t.data.checkBookingResult.memberInfo) &&
                      t.data.checkBookingResult.memberInfo.activityPrice &&
                      a.push({
                        key: "ActivityPrice",
                        value:
                          t.data.checkBookingResult.memberInfo.activityPrice,
                      }),
                    t.data.checkBookingResult &&
                      !(0, q.xb)(t.data.checkBookingResult.cashBackInfo) &&
                      t.data.checkBookingResult.cashBackInfo.cashBackPrice &&
                      a.push({
                        key: "CashBackPrice",
                        value:
                          t.data.checkBookingResult.cashBackInfo.cashBackPrice,
                      }),
                    t.data.bottomInfo.promotionPrice > 0 &&
                      a.push({
                        key: "PromotionPrice",
                        value: t.data.bottomInfo.promotionPrice,
                      }),
                    t.room.checkInFreeFlag &&
                      a.push({
                        key: "checkInFreeFlag",
                        value: t.room.checkInFreeFlag,
                      });
                  var n = { data: a },
                    o = [];
                  t.data.isBaidu &&
                    (n.head || (n.head = {}),
                    (o = this.baiduHeadExtensions),
                    (n.data.traceData = this.room.traceData)),
                    t.room.checkInFreeFlag &&
                      (n.data.checkInFreeFlag = t.room.checkInFreeFlag),
                    (0, O.BN)(n, { extension: o }).then(function (i) {
                      if (i && i.data && i.resultCode > 0) {
                        var a = i.data.cardInfo,
                          n = i.data.subsidyInfo,
                          o = i.data.ActivityList,
                          r = i.data.randomCouponInfo || {},
                          c = i.data.CouponList || [],
                          l = c.filter(function (e) {
                            return 0 === e.couponState;
                          }).length,
                          s = t.getDefaultCouponItem(c);
                        console.log("得到的selectedCoupon==>", s);
                        var d = t.getDefaultActivityItem(o),
                          u = [],
                          h = [],
                          m = e.data.zxPreferentialList || [];
                        if (a) {
                          var p = {
                            parentId: a.parentId,
                            coexistList: a.coexistList,
                            id: a.cardId,
                            price: a.discountPrice,
                            name: a.cardName,
                            title: a.cardName,
                            priority: a.priority,
                          };
                          u.push(p), h.push(p);
                        }
                        if (s) {
                          var f = {
                            parentId: s.parentId,
                            coexistList: s.coexistList,
                            id: s.couponCode,
                            price: s.couponPrice,
                            name: s.couponDisplayName,
                            priority: s.priority,
                            couponTips: s.couponTips,
                          };
                          u.push(f);
                        }
                        if (d) {
                          var g = {
                            parentId: d.parentId,
                            coexistList: d.coexistList,
                            id: d.activityId,
                            price: d.activityPrice,
                            name: d.activityName,
                            priority: d.priority,
                          };
                          u.push(g), h.push(g);
                        }
                        if (n) {
                          var k = {
                            parentId: n.parentId,
                            coexistList: n.coexistList,
                            id: n.cardId,
                            price: n.discountPrice,
                            name: n.subsidyName,
                            priority: n.priority,
                          };
                          u.push(k), h.push(k);
                        }
                        var v = e.data.allCashBackInfo;
                        r &&
                          r.price &&
                          ((v.price = parseFloat(
                            ((v.price || 0) + r.price).toFixed(2)
                          )),
                          (v.randomCouponInfo = r));
                        var b = 0;
                        m.forEach(function (e) {
                          b += e.price;
                        }),
                          e.setData({
                            preferentialList: u,
                            zxPreferentialList: m,
                            zxPreferentialTotal: b,
                            totalPreferentialList: h,
                            couponList: c,
                            canUseCouponNum: l,
                            allCashBackInfo: v,
                          }),
                          console.log("全部的优惠政策===>", h, u, c),
                          t.changePreferentialActivity(),
                          t.bindBottomInfo();
                      }
                    });
                }
              },
              checkPreferentialList: function (e) {
                var t = e.currentTarget.dataset.item || "";
                console.log("get item ==>", t);
                var i = this.data,
                  a = i.preferentialList,
                  n = i.totalPreferentialList;
                if (
                  a.find(function (e) {
                    return e.id === t.id;
                  })
                ) {
                  var o = a.findIndex(function (e) {
                    return e.id === t.id;
                  });
                  a.splice(o, 1);
                  var r = a.reduce(function (e, t) {
                      return e + t.price;
                    }, 0),
                    c = n.findIndex(function (e) {
                      return e.id === t.id;
                    });
                  -1 !== c && (n[c].isSelected = !1),
                    this.setData({
                      preferentialList: a,
                      totalPreferentialList: n,
                      "bottomInfo.preferentialPrice": r,
                    });
                } else {
                  if (3e4 === t.parentId) {
                    this.setData({ couponInfo: null });
                    var l = a.findIndex(function (e) {
                      return 2e4 === e.parentId;
                    });
                    a.splice(l, 1);
                  }
                  if (2e4 !== t.parentId) {
                    var s = n.findIndex(function (e) {
                      return e.id === t.id;
                    });
                    -1 !== s && (n[s].isSelected = !0);
                  }
                  a.push(t);
                  var d = a.reduce(function (e, t) {
                    return e + t.price;
                  }, 0);
                  console.log("得到的price ==> ", d),
                    this.setData({
                      preferentialList: a,
                      totalPreferentialList: n,
                      "bottomInfo.preferentialPrice": d,
                    });
                }
                this.bindBottomInfo();
              },
              changePreferentialActivity: function () {
                var e = this.data,
                  t = e.preferentialList,
                  i = e.totalPreferentialList;
                i.forEach(function (e) {
                  e.isSelected = !1;
                }),
                  t.forEach(function (e) {
                    if (3e4 !== e.parentId && 2e4 !== e.parentId) {
                      var t = i.findIndex(function (t) {
                        return t.id === e.id;
                      });
                      -1 !== t && (i[t].isSelected = !0);
                    }
                  });
                var a = t.find(function (e) {
                    return 2e4 === e.parentId;
                  }),
                  n = t.find(function (e) {
                    return 3e4 === e.parentId;
                  });
                if (a && (!n || n.price <= a.price))
                  this.setData({ couponInfo: a });
                else {
                  this.setData({ couponInfo: null });
                  var o = t.findIndex(function (e) {
                    return 2e4 === e.parentId;
                  });
                  -1 !== o && t.splice(o, 1);
                }
                if (n && a && a.price >= n.price) {
                  var r = t.findIndex(function (e) {
                    return 3e4 === e.parentId;
                  });
                  -1 !== r && t.splice(r, 1);
                } else if (n && (!a || a.price < n.price)) {
                  var c = i.findIndex(function (e) {
                    return 3e4 === e.parentId;
                  });
                  i[c].isSelected = !0;
                }
                var l = t.reduce(function (e, t) {
                  return e + t.price;
                }, 0);
                console.log("得到的price ==> ", l),
                  this.setData({
                    totalPreferentialList: i,
                    "bottomInfo.preferentialPrice": l,
                  });
              },
              goCouponList: function () {
                var e = this.data.preferentialList,
                  t = e.findIndex(function (e) {
                    return 2e4 === e.parentId;
                  });
                -1 !== t
                  ? z.gg.setAttr("selectCouponCode", e[t].couponCode)
                  : z.gg.setAttr("selectCouponCode", -1),
                  this.navigateTo({
                    url: "/pages/hotel/coupon/coupon?couponList=".concat(
                      JSON.stringify(this.data.couponList)
                    ),
                  });
              },
              getDefaultCouponItem: function (e) {
                if (!(0, q.xb)(e))
                  for (var t = 0; t < e.length; t++) {
                    var i = e[t];
                    if (1 === i.defaultFlag && 0 === i.couponState) return i;
                  }
                return null;
              },
              getDefaultActivityItem: function (e) {
                if (!(0, q.xb)(e)) {
                  for (var t = 0; t < e.length; t++) {
                    var i = e[t];
                    if (1 === i.defaultFlag) return i;
                  }
                  return e[0];
                }
                return null;
              },
              bindBottomInfo: function () {
                var e = this,
                  t = this.data,
                  i = t.additionalBuyAmount,
                  a = t.additionalPreferenceAmount,
                  n = "提交订单",
                  o = 0;
                e.data.allCashBackInfo &&
                  e.data.allCashBackInfo.price &&
                  (o = e.data.allCashBackInfo.price);
                var r = "",
                  c = "",
                  l =
                    e.data.bottomInfo.promotionPrice +
                    e.data.bottomInfo.preferentialPrice +
                    a;
                l > 0 && (r = "已减¥" + l);
                var s = e.data.bottomInfo.roomPrice + i - l,
                  d = "",
                  u = !1;
                3 == e.data.checkBookingResult.payType &&
                  ((s = 0),
                  (l =
                    e.data.bottomInfo.promotionPrice +
                    e.data.bottomInfo.preferentialPrice),
                  (0, q.xb)(e.data.selectGuaranteeTypeModel)
                    ? e.data.checkBookingResult.depositPayment.guaranteeAmount >
                        0 &&
                      (s =
                        e.data.checkBookingResult.depositPayment
                          .guaranteeAmount)
                    : (s = e.data.selectGuaranteeTypeModel.price),
                  (r = "到店支付:¥" + (e.data.bottomInfo.roomPrice - l)),
                  (n = "支付担保金"),
                  (d = "在线担保"),
                  (u = !0)),
                  o > 0 && (c = "返现¥" + o),
                  (s = (0, q.US)(s)),
                  e.setData({
                    "bottomInfo.showPrice": s,
                    "bottomInfo.proPrice": e.getProPrice(s),
                    "bottomInfo.btnText": n,
                    "bottomInfo.discountInfo": r,
                    "bottomInfo.priceInfo": d,
                    "bottomInfo.cashBackText": c,
                    "bottomInfo.isGuarantee": u,
                    "bottomInfo.cashBackPrice": o,
                    "bottomInfo.discountPrice": l,
                  });
              },
              getProPrice: function (e) {
                var t = this.data.checkBookingResult;
                return t.bargainInfo && t.bargainInfo.bargainFlag
                  ? (0, q.US)(e + t.bargainInfo.bargainTop)
                  : e;
              },
              bindCancelRemark: function (e) {
                var t = "";
                (0, q.xb)(e.depositPayment) ||
                  ((0, q.xb)(e.depositPayment.guaranteeRemark) ||
                    (t = e.depositPayment.guaranteeRemark + "；"),
                  (0, q.xb)(e.depositPayment.cancelRemark) ||
                    (t = t + e.depositPayment.cancelRemark + "。")),
                  this.setData({
                    cancelRemark: t,
                    serviceProvide: e.serviceProvide,
                  });
              },
              checkInput: function () {
                var e = this;
                if (e.data.isOutland) {
                  if (e.data.foreignPersonList.length < e.data.roomNum)
                    return "请输入入住人姓名";
                  for (var t = 0; t < e.data.foreignPersonList.length; t++) {
                    var i = e.data.foreignPersonList[t];
                    if (
                      i.firstName.length <= 0 ||
                      i.lastName.length <= 0 ||
                      !B.Z.isValidEnName(i.firstName) ||
                      !B.Z.isValidEnName(i.lastName)
                    )
                      return "请输入正确的入住人姓名";
                  }
                } else {
                  if (e.data.personList.length < e.data.roomNum)
                    return "请输入入住人姓名";
                  for (
                    var a = 3 === e.data.receiveForeignGuest, n = 0;
                    n < e.data.personList.length;
                    n++
                  ) {
                    var o = e.data.personList[n];
                    if (
                      a
                        ? this.checkChineseName(o.value)
                        : this.checkChineseAndEnglishName(o.value)
                    )
                      return "请输入正确的入住人姓名";
                  }
                }
                var r = e.phoneNode.props.value || "";
                if (r.length <= 0) return "请输入手机号码";
                if (!B.Z.isMobile(r)) return "手机号码有误，请重填";
                var c = e.data.cardNumber;
                if (
                  e.data.checkBookingResult &&
                  e.data.checkBookingResult.provideIdentityCardNo
                ) {
                  if (!c) return "请输入身份证号";
                  if (!B.Z.isValidSFZ(c)) return "身份证号有误，请重填";
                }
                return "";
              },
              phoneLoginPromise: function () {
                var e = this;
                return new Promise(function (t) {
                  S.ZP.doLogin().then(
                    (0, f.Z)(
                      (0, p.Z)().mark(function i() {
                        return (0, p.Z)().wrap(function (i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                if (!e.checkLogin()) {
                                  i.next = 6;
                                  break;
                                }
                                return (i.next = 3), e.getUserImportantRight();
                              case 3:
                                t(), (i.next = 7);
                                break;
                              case 6:
                                e.doLogin(
                                  (0, f.Z)(
                                    (0, p.Z)().mark(function i() {
                                      return (0, p.Z)().wrap(function (i) {
                                        for (;;)
                                          switch ((i.prev = i.next)) {
                                            case 0:
                                              return (
                                                (i.next = 2),
                                                e.getUserImportantRight()
                                              );
                                            case 2:
                                              return (
                                                (i.next = 4), e.bookingCheck(!0)
                                              );
                                            case 4:
                                              t();
                                            case 5:
                                            case "end":
                                              return i.stop();
                                          }
                                      }, i);
                                    })
                                  )
                                );
                              case 7:
                              case "end":
                                return i.stop();
                            }
                        }, i);
                      })
                    )
                  );
                });
              },
              submitOrder: function (e, t) {
                var i = this;
                return (0, f.Z)(
                  (0, p.Z)().mark(function a() {
                    var n, o, r, c, l, s, d, h, m, f, k, v, b, x;
                    return (0, p.Z)().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              (i.data.isBaidu &&
                                i.ubtTrace("200410", {
                                  AllianceValue: i.bdAllianceValue,
                                  AllianceType: i.bdAllianceType,
                                  bdMapClientId: i.baiduClientId,
                                  DeviceToken: S.ZP.openid,
                                  Sequence: (0, g.Z)(
                                    (0, g.Z)({}, i.query),
                                    {},
                                    {
                                      ratePlanID: i.room.roomId,
                                      hotelId:
                                        i.hotel.hotelId || i.room.hotelId,
                                      queryTimeMillis: new Date().getTime(),
                                    }
                                  ),
                                }),
                              !(r = (o = i).checkInput()))
                            ) {
                              a.next = 6;
                              break;
                            }
                            return (
                              w().showModal({
                                title: "温馨提示",
                                content: r,
                                confirmText: "知道了",
                                showCancel: !1,
                                confirmColor: "#fc6e51",
                              }),
                              a.abrupt("return")
                            );
                          case 6:
                            if (!(c = i.checkVenderMember())) {
                              a.next = 9;
                              break;
                            }
                            return a.abrupt("return", (0, C.showModal)(c));
                          case 9:
                            if (
                              ((l = o.data.personList.map(function (e) {
                                return e.value;
                              })),
                              (s = o.room.lastTime),
                              (0, q.xb)(o.data.selectGuaranteeTypeModel) ||
                              (0, q.xb)(o.data.selectGuaranteeTypeModel.value)
                                ? (0, q.xb)(
                                    o.data.checkBookingResult.hotelExt
                                  ) ||
                                  (0, q.xb)(
                                    o.data.checkBookingResult.hotelExt
                                      .lateArriveTime
                                  ) ||
                                  (s =
                                    o.data.checkBookingResult.hotelExt
                                      .lateArriveTime)
                                : (s = o.data.selectGuaranteeTypeModel.value),
                              o.data.isOutland)
                            )
                              for (
                                l = [], d = 0;
                                d < o.data.foreignPersonList.length;
                                d++
                              )
                                (h = o.data.foreignPersonList[d]),
                                  l.push(h.firstName + "/" + h.lastName);
                            if (
                              ((m = (0, T.rv)(i.data.date)),
                              (f = {
                                hotelId: o.room.hotelId,
                                clientVersion: D.Z.clientVersion,
                                fromPage: o.fromPage,
                                queryBitMap: 0,
                                controlBitMap: o.getControlBitmap(o.query),
                                customerRemark: "",
                                hotelRoomInfo: {
                                  checkInDate: m.checkInDate,
                                  checkOutDate: m.checkOutDate,
                                  ratePlanCode: o.room.ratePlanID,
                                  ratePlanCategory:
                                    1 == o.room.payType ? "501" : "",
                                  passengers: o.data.roomNum,
                                  quantity: o.data.roomNum,
                                  passengerList: l,
                                  payType: o.room.payType,
                                  subPayType: o.room.subPayType,
                                  lastArrivalTime:
                                    (null ===
                                      (n = o.data.currrentArrivalTime) ||
                                    void 0 === n
                                      ? void 0
                                      : n.value) || s,
                                  bedType: o.data.roomInfo.bedtype,
                                  broadband: o.data.roomInfo.broadband,
                                  hourRoomFlag: o.room.hourRoomFlag,
                                  roomTypeCode: "",
                                  shadowID: o.room.shadowId,
                                  hourSpan:
                                    (0, q.xb)(
                                      o.data.checkBookingResult.hotelExt
                                    ) ||
                                    (0, q.xb)(
                                      o.data.checkBookingResult.hotelExt
                                        .hourSpan
                                    )
                                      ? ""
                                      : o.data.checkBookingResult.hotelExt
                                          .hourSpan,
                                },
                                hotelContactInfo: {
                                  name: l[0],
                                  mobilephone: o.phoneNode.props.value,
                                  identityCardNo: o.data.checkBookingResult
                                    .provideIdentityCardNo
                                    ? o.data.cardNumber
                                    : null,
                                },
                                invoiceInformation: {},
                                specialRemarkList: [],
                                priceInfo: {
                                  amount: o.data.bottomInfo.roomPrice,
                                  currecyCode: "CNY",
                                },
                                vendorInfo:
                                  o.data.checkBookingResult.vendorInfo,
                                psPriceProduct: o.room.psPriceProduct,
                                showPrice:
                                  "back" === t
                                    ? o.data.bottomInfo.showPrice
                                    : o.data.bottomInfo.proPrice,
                                partakeBargainInfo: {
                                  joinBragain: "back" === t ? 1 : 0,
                                },
                                partakeTracelessInfo: {
                                  enableTraceless: o.data.isTraceless ? 1 : 0,
                                },
                                cashBackAmount: o.room.cashBackAmount,
                                receivePriceCompensate:
                                  o.data.receivePriceCompensate,
                                traceData: o.data.traceData,
                              }),
                              i.data.preferentialList &&
                                i.data.preferentialList.forEach(function (e) {
                                  switch (e.parentId) {
                                    case 1e4:
                                      f.activityId = e.id;
                                      break;
                                    case 2e4:
                                      f.couponCode = e.id;
                                  }
                                }),
                              i.data.preferentialList.some(function (e) {
                                return 3e4 === e.parentId;
                              }) && (f.queryBitMap += 8),
                              (i.data.preferentialList.some(function (e) {
                                return 4e4 === e.parentId;
                              }) ||
                                i.data.zxPreferentialTotal > 0) &&
                                (f.queryBitMap += 16),
                              (k = i.data.userExchangePoint) &&
                                k.exchangePointList.some(function (e) {
                                  return e.selected;
                                }) &&
                                (function () {
                                  var e,
                                    t = [],
                                    a = (0, u.Z)(k.exchangePointList);
                                  try {
                                    var n = function () {
                                      var a,
                                        n = e.value;
                                      if (
                                        null !== (a = n.exchangeItems) &&
                                        void 0 !== a &&
                                        a.length
                                      ) {
                                        var o = n.freeCount;
                                        n.exchangeItems
                                          .filter(function (e) {
                                            return e.num > 0;
                                          })
                                          .forEach(function (e) {
                                            var i = {
                                                promotionId: n.promotionId,
                                                promotionType: n.promotionType,
                                                count: e.num,
                                                point: e.num * n.originalPoint,
                                                effectiveDate: e.date,
                                              },
                                              a = 0,
                                              r = 0;
                                            o > 0 &&
                                              (o >= e.num
                                                ? ((o -= e.num),
                                                  (a = 0),
                                                  (r = e.num))
                                                : ((a = e.num - o),
                                                  (r = o),
                                                  (o = 0)),
                                              (i.point = a * n.originalPoint)),
                                              (i.dayFreeCount = r),
                                              (i.memberFree = r === e.num),
                                              t.push(i);
                                          });
                                      } else
                                        n.selected &&
                                          t.push({
                                            promotionId: n.promotionId,
                                            promotionType: n.promotionType,
                                            count: 1,
                                            point: n.freeCount ? 0 : n.point,
                                            effectiveDate: i.query.checkInDate,
                                            memberFree: n.memberFree,
                                            dayFreeCount: n.memberFree ? 1 : 0,
                                          });
                                    };
                                    for (a.s(); !(e = a.n()).done; ) n();
                                  } catch (e) {
                                    a.e(e);
                                  } finally {
                                    a.f();
                                  }
                                  t.length > 0 && (f.useRightPointList = t);
                                })(),
                              i.venderMember &&
                                (f.regVendorMemberInfoList = (0, g.Z)(
                                  {},
                                  i.venderMember
                                )),
                              3 !== i.data.checkBookingResult.payType &&
                                i.data.selectedAdditionalList &&
                                i.data.selectedAdditionalList.length > 0 &&
                                (f.additionalPurchaseList =
                                  i.data.selectedAdditionalList),
                              (v = { data: f }),
                              (b = []),
                              i.data.isBaidu &&
                                (v.head || (v.head = {}),
                                (b = i.baiduHeadExtensions),
                                (v.data.traceData = i.room.traceData),
                                i.bdCouponId &&
                                  (v.data.bdCouponId = i.bdCouponId)),
                              i.query.allianceInfo &&
                                (v.data.allianceInfo = i.query.allianceInfo),
                              i.room.checkInFreeFlag &&
                                (v.data.hotelRoomInfo.checkInFreeFlag =
                                  i.room.checkInFreeFlag),
                              !i.data.isBaiduMap || !i.room.needLogin)
                            ) {
                              a.next = 30;
                              break;
                            }
                            return (a.next = 30), i.phoneLoginPromise(e);
                          case 30:
                            console.log("HotelOrderCreate", v),
                              (x = "other"),
                              X.default.isWechat && (x = "weapp"),
                              X.default.isBaidu && (x = "swan"),
                              X.default.isAlipay && (x = "alipay"),
                              (0, C.showLoading)("正在为您预订中..."),
                              (0, O.bK)(v, { extension: b })
                                .then(function (e) {
                                  if (((0, C.hideLoading)(), e)) {
                                    if (
                                      (i.ubtTrace("O_HOTEL_INPUT", {
                                        DeviceToken: S.ZP.openid,
                                        Sequence: (0, g.Z)(
                                          (0, g.Z)({}, i.query),
                                          {},
                                          {
                                            ratePlanID: i.room.roomId,
                                            hotelId: i.hotel.hotelId,
                                            queryTimeMillis:
                                              i.data.queryTimeMillis,
                                            orderId: e.data
                                              ? e.data.orderId
                                              : "",
                                            traceData: i.data.traceData,
                                            hotelIndex: i.data.hotelIndex,
                                          }
                                        ),
                                      }),
                                      e.resultCode > 0)
                                    )
                                      N.Z.orderLog("hotel"),
                                        (i.refreshPage = !0),
                                        e.data.continuePayFlag
                                          ? o.doOrderPay(e.data.orderId, x)
                                          : o.goOrderDetail(e.data.orderId);
                                    else {
                                      var t = e.resultMessage,
                                        a = "好的";
                                      -2 == e.resultCode && (a = "继续预订"),
                                        t &&
                                          (i.ubtDevTrace(Re[x].error, {
                                            data: {
                                              retMsg: t,
                                              fromPage: i.fromPage,
                                            },
                                          }),
                                          w().showModal({
                                            title: "温馨提示",
                                            content: t,
                                            confirmText: a,
                                            showCancel: !1,
                                            confirmColor: "#fc6e51",
                                            success: function () {
                                              o.bookingCheck();
                                            },
                                          }));
                                    }
                                    L.wH.tempQueryStore = {};
                                  }
                                })
                                .catch(function (e) {
                                  i.ubtDevTrace(Re[x].error, {
                                    data: { error: e, fromPage: i.fromPage },
                                  });
                                }),
                              z.L6.setAttr("phone", o.phoneNode.props.value),
                              o.data.isOutland ||
                                o.data.isTraceless ||
                                z.L6.setAttr("personList", o.data.personList);
                          case 39:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                  })
                )();
              },
              doOrderPay: function (e, t) {
                var i = this;
                (0, C.showToast)("预订中..."),
                  P.ZP.doPayment({
                    business: "hotel",
                    orderNumber: e,
                    title: "预订酒店",
                    quickPay: !0,
                  })
                    .then(function () {
                      i.ubtDevTrace(Re[t].success, {
                        data: { fromPage: i.fromPage },
                      }),
                        i.payStatusModal("支付成功", e);
                    })
                    .catch(function () {
                      i.payStatusModal("支付失败", e);
                    });
              },
              payStatusModal: function (e, t) {
                var i = this;
                X.default.isWechat
                  ? w().showModal({
                      content: e,
                      showCancel: !1,
                      success: function (e) {
                        e.confirm && i.goOrderDetail(t);
                      },
                    })
                  : this.goOrderDetail(t);
              },
              goOrderDetail: function (e) {
                var t,
                  i =
                    this.data.isBaidu &&
                    (null === (t = this.baiduHeadExtensions) || void 0 === t
                      ? void 0
                      : t.length) > 0,
                  a = "&baiduHeadExtensions=".concat(
                    encodeURIComponent(JSON.stringify(this.baiduHeadExtensions))
                  ),
                  n = (0, q.gP)(i, a);
                w().navigateTo({
                  url: "/pages/hotel/order/order?orderId="
                    .concat(e, "&fromPage=")
                    .concat(this.fromPage)
                    .concat(n),
                });
              },
              handlePriceCompensate: function () {
                var e = this.data.receivePriceCompensate;
                this.setData({ receivePriceCompensate: e ? 0 : 1 });
              },
              onClickDisplayPriceDetailType: function (e) {
                this.setData({ displayPriceDetailType: e });
              },
              onClickBackTipsModalOpen: function () {
                this.ubtTrace(222812, { PageId: this.pageId }),
                  this.setData({ backTipsModalVisible: !0 });
              },
              onClickBackTipsModalClose: function () {
                this.setData({ backTipsModalVisible: !1 });
              },
              onClickKeepStayModalClose: function () {
                this.setData({ keepStayModalVisible: !1 });
              },
              onClickKeepStayModalBack: function () {
                this.onBackAction();
              },
              onBack: function () {
                var e,
                  t,
                  i = z.L6.getAttr("keeyStayModalStore") || {},
                  a = "date_" + R()().format("YYYY-MM-DD"),
                  n = R()().valueOf(),
                  o =
                    null === (e = i) ||
                    void 0 === e ||
                    null === (t = e[a]) ||
                    void 0 === t
                      ? void 0
                      : t.length;
                if (o && n - i[a][o - 1] <= 3e5) this.onBackAction();
                else {
                  var r = this.data,
                    c = r.bottomInfo,
                    l = r.bookingCheckExtend,
                    s = !(!l || !l.priceCompensate),
                    u = this.room.max,
                    h =
                      c && c.roomPrice
                        ? c.preferentialPrice + c.promotionPrice
                        : 0,
                    m = !!(c && c.roomPrice && h >= 0.1 * c.roomPrice),
                    p = !1;
                  u <= 3
                    ? (this.newUbtTrace(184080, 7),
                      this.setData({
                        keepStayInfo: (0, g.Z)(
                          (0, g.Z)({}, Le.fewRooms),
                          {},
                          { title: Le.fewRooms.title.replace("key", u) }
                        ),
                        drawerTitle: null,
                        drawerSubtitle: null,
                        drawerType: oe,
                      }),
                      (p = !0))
                    : this.room.tonightEndTime
                    ? (this.ubtTrace(225306, { PageId: this.pageId }),
                      this.setData({
                        keepStayInfo: (0, g.Z)(
                          (0, g.Z)({}, Le.tonightSale),
                          {},
                          {
                            title: Le.tonightSale.title.replace(
                              "key",
                              c.discountPrice
                            ),
                          }
                        ),
                        drawerTitle: null,
                        drawerSubtitle: null,
                        drawerType: oe,
                      }),
                      (p = !0))
                    : m && s
                    ? (this.newUbtTrace(184080, 1),
                      this.setData({
                        keepStayInfo: (0, g.Z)(
                          (0, g.Z)({}, Le.bigCouponAndMgp),
                          {},
                          { title: Le.bigCouponAndMgp.title.replace("key", h) }
                        ),
                        drawerTitle: null,
                        drawerSubtitle: null,
                        drawerType: oe,
                      }),
                      (p = !0))
                    : m && !s
                    ? (this.newUbtTrace(184080, 2),
                      this.setData({
                        keepStayInfo: (0, g.Z)(
                          (0, g.Z)({}, Le.bigCoupon),
                          {},
                          { title: Le.bigCoupon.title.replace("key", h) }
                        ),
                        drawerTitle: null,
                        drawerSubtitle: null,
                        drawerType: oe,
                      }),
                      (p = !0))
                    : !m &&
                      s &&
                      (this.newUbtTrace(184080, 4),
                      this.setData({
                        keepStayInfo: Le.couponAndMgp,
                        drawerTitle: null,
                        drawerSubtitle: null,
                        drawerType: oe,
                      }),
                      (p = !0)),
                    p
                      ? ((i = (0, d.Z)({}, a, i[a] ? i[a].concat([n]) : [n])),
                        z.L6.setAttr("keeyStayModalStore", i))
                      : this.onBackAction();
                }
              },
              isFirstPage: function () {
                var e = (0, b.getCurrentPages)();
                return !e || 1 === e.length;
              },
              onBackAction: function () {
                this.isFirstPage() ? this.toHotelIndex() : this.toBack();
              },
              toBack: function () {
                this.invokeCallback(), this.navigateBack();
              },
              toHotelIndex: function () {
                N.Z.relaunchHome();
              },
              openBasicInfoDrawer: function (e) {
                this.ubtTrace(210157, {
                  bizKey: "hotel_detail_bookinginfo_click",
                }),
                  this.openBookDrawer(ae, "订房必读", null, e);
              },
              newUbtTrace: function (e, t) {
                try {
                  this.ubtTrace(e, t);
                } catch (e) {
                  console.log(e);
                }
              },
              onPageScroll: function (e) {
                var t = this.data.bubbleListVisible,
                  i = new Date().getTime();
                if (this._lastScrollTopTime) {
                  if (!(i - this._lastScrollTopTime < 50)) {
                    this._lastScrollTopTime = i;
                    var a = this.data.fixedBubbleListVisible;
                    t &&
                      (e.scrollTop > 35
                        ? a || this.setData({ fixedBubbleListVisible: !0 })
                        : e.scrollTop <= 35 &&
                          a &&
                          this.setData({ fixedBubbleListVisible: !1 }));
                  }
                } else this._lastScrollTopTime = i;
              },
              skipToPointRulePage: function (e) {
                e && V.Z.twebview({ data: { url: e } });
              },
              skipDescriptionPage: function (e) {
                V.Z.twebview({ data: { url: e.descriptionUrl || "" } });
              },
              additionalPurchaseSelectHandler: function (e) {
                var t = this.data.additionalPurchaseList,
                  i = void 0 === t ? [] : t,
                  a = i.map(function (t) {
                    return (
                      e.itemId === t.itemId && (t.selected = !t.selected), t
                    );
                  }),
                  n =
                    i.filter(function (e) {
                      return e.selected;
                    }) || [],
                  o = 0,
                  r = 0;
                n.length > 0 &&
                  n.forEach(function (e) {
                    (o += parseFloat(e.preferentialAmount)),
                      (r += parseFloat(e.buyAmount));
                  }),
                  this.setData({
                    additionalPurchaseList: a,
                    selectedAdditionalList: n,
                    additionalBuyAmount: r,
                    additionalPreferenceAmount: o,
                  }),
                  console.log(
                    "additionalPurchaseList:",
                    this.data.additionalPurchaseList,
                    this.data.selectedAdditionalList
                  ),
                  this.bindBottomInfo();
              },
              handlePassengerStateChange: function (e) {
                console.log("venderMember", e), (this.venderMember = e);
              },
              checkVenderMember: function () {
                var e = this.data.regVendorMember;
                if (!e) return "";
                var t = this.venderMember;
                if (!t) return "请填写会员注册信息";
                var i = e.name,
                  a = e.enSurname,
                  n = e.enName,
                  o = e.iDCardType,
                  r = e.idCardNo,
                  c = e.mobile,
                  l = e.email,
                  s = e.birthday,
                  d = e.sex,
                  u = e.privacyTermsList;
                if (i) {
                  if (!t.name && i.requiredFlag) return "请填写姓名";
                  if (t.name && !B.Z.isValidCNName(t.name))
                    return "姓名有误，请检查后重新输入";
                }
                if (a) {
                  if (!t.enSurname && a.requiredFlag) return "请填写英文姓式";
                  if (t.enSurname && !B.Z.isValidEnName(t.enSurname))
                    return "英文姓式有误，请检查后重新输入";
                }
                if (n) {
                  if (!t.enName && n.requiredFlag) return "请填写英文名字";
                  if (t.enName && !B.Z.isValidEnName(t.enName))
                    return "英文名字有误，请检查后重新输入";
                }
                if (r) {
                  if (!t.idCardNo && r.requiredFlag) return "请填写证件号码";
                  var h = o.itemList.find(function (e) {
                    return e.itemId === t.iDCardType;
                  }).itemText;
                  if (!B.Z.isValidIdCode(h, t.idCardNo))
                    return "证件号码有误，请检查后重新输入";
                }
                if (c) {
                  if (!t.mobile && c.requiredFlag) return "请填写手机号码";
                  if (t.mobile && !B.Z.isMobile(t.mobile))
                    return "手机号码有误，请检查后重新输入";
                }
                if (l) {
                  if (!t.email && l.requiredFlag) return "请填写邮箱地址";
                  if (t.email && !B.Z.isEmail(t.email))
                    return "邮箱地址有误，请检查后重新输入";
                }
                return s && !t.birthday && s.requiredFlag
                  ? "请填写出生日期"
                  : d && "" === t.sex && d.requiredFlag
                  ? "请选择性别"
                  : u && u[0] && !t.policySelected
                  ? "请阅读并同意隐私条款"
                  : void 0;
              },
              onShowLivedConsumePackages: function () {
                this.setData({ showLivedConsumePackages: !0 });
              },
              onCloseLivedConsumePackages: function () {
                this.setData({ showLivedConsumePackages: !1 });
              },
              onDeterrentTimeUp: function () {
                var e = this;
                this.ubtTrace(210158, {
                  bizKey: "hotel_book_coupon_timeout_show",
                  pageId: this.pageId,
                }),
                  w().showToast({
                    title: "Oh No！倒计时结束 红包失效了",
                    icon: "none",
                    duration: 3e3,
                    complete: function () {
                      e.setData({ deterrentEndtime: null });
                    },
                  });
              },
              onClickDrawerRightBtn: function () {
                this.data.drawerType === re &&
                  this.setData({ isTraceless: !0 }),
                  this.closeBookDrawer();
              },
              openTracelessDrawer: function (e) {
                var t = "detail" === e;
                if (!this.data.isTraceless || t) {
                  var i = t
                    ? { rightBtnText: "开启无痕预订" }
                    : { leftBtnText: "我再想想", rightBtnText: "确认使用" };
                  this.setData({ drawerOptions: i }), this.openBookDrawer(re);
                } else this.setData({ isTraceless: !1 });
              },
              openBookDrawer: function (e, t) {
                var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null,
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : [];
                this.setData({
                  drawerInfoList: a,
                  drawerSubtitle: i,
                  drawerTitle: t,
                  drawerType: e,
                });
              },
              closeBookDrawer: function () {
                this.data.drawerType === oe &&
                  this.ubtTrace(225307, { PageId: this.pageId }),
                  this.setData({
                    drawerSubtitle: null,
                    drawerTitle: null,
                    drawerType: null,
                    drawerOptions: {},
                  });
              },
              renderTitleView: function () {
                var e = this.data.pageTitle;
                return (0, G.tZ)(v.View, {
                  className: "hotel-booking-title",
                  children: (0, G.tZ)(v.View, {
                    className: "title",
                    children: e,
                  }),
                });
              },
              processHotelBasicInfo: function (e) {
                return null != e && e.length
                  ? e.find(function (e) {
                      return 4 == e.type;
                    })
                  : null;
              },
              onDateChange: function (e) {
                var t = this;
                console.log("onDateChange", e);
                var i = e.checkInDate,
                  a = e.checkOutDate,
                  n = this.data.date;
                if (i !== n.checkInDate || a !== n.checkOutDate) {
                  var o = { dateVisible: !1, date: e };
                  this.query || (this.query = {});
                  var r = (0, T.BB)(e);
                  (this.query.checkInDate = r.checkInDate),
                    (this.query.checkOutDate = r.checkOutDate),
                    (this.query.contrl = r.smallHoursFlag ? 4 : 3),
                    this.setData(o, function () {
                      (t.room.lastTime = null),
                        t.renderPage(),
                        t.bookingCheck();
                    });
                } else this.setData({ dateVisible: !1 });
              },
              onDateClose: function () {
                this.setData({ dateVisible: !1 });
              },
              onShowDateModal: function () {
                this.setData({ dateVisible: !0 });
              },
              onCloseIdentifyPop: function () {
                this.setData({ isShowIdentifyPop: !1 });
              },
              goToIdentifyPage: function () {
                this.setData({ isShowIdentifyPop: !1 }),
                  this.navigateTo({
                    url: "/pages/usercenter/realNameVerify/index",
                  });
              },
            },
            Se =
              (0, x.h)(!1, { usePageWrapper: !0 })(
                (n =
                  I()(Xe)(
                    (n = (function (e) {
                      (0, l.Z)(i, e);
                      var t = (0, s.Z)(i);
                      function i() {
                        return (0, r.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e,
                                t,
                                i = this,
                                a = this.data,
                                n = a.atmosphere,
                                o = a.isBaidu,
                                r = a.roomInfo,
                                c = a.date,
                                l = a.dateVisible,
                                s = a.incentiveCancelRemark,
                                d = a.incentiveConfirmRemark,
                                u = a.roomNum,
                                h = a.queryRoomNum,
                                m = a.roomSelectorList,
                                p = a.isOutland,
                                f = a.personList,
                                g = a.foreignPersonList,
                                k = a.cardNumber,
                                b = a.guaranteeText,
                                w = a.allCashBackInfo,
                                x = a.displayPreferentialList,
                                y = a.bottomInfo,
                                I = a.promotionList,
                                P = a.displayPromotionList,
                                N = a.popCuxiaoList,
                                T = a.couponList,
                                C = a.couponInfo,
                                B = a.canUseCouponNum,
                                V = a.totalPreferentialList,
                                L = a.bookingCheckExtend,
                                D = a.memberRightInfoList,
                                A = a.userExchangePoint,
                                R = a.invoiceInformation,
                                S = a.cancelRemark,
                                F = a.specialTip,
                                E = a.serviceProvide,
                                O = a.guaranteeList,
                                z = a.displayPriceDetail,
                                H = a.displayPriceDetailType,
                                j = a.checkBookingResult,
                                Q = a.roomPriceList,
                                J = a.preferentialList,
                                $ = a.zxPreferentialList,
                                ee = a.zxPreferentialTotal,
                                te = a.backTipsModalVisible,
                                ie = a.backTipsModalInfo,
                                ae = a.keepStayInfo,
                                ne = a.preferencePriceTag,
                                oe = a.preferencePriceTagInfo,
                                re = a.additionalPurchaseList,
                                ce = a.selectedAdditionalList,
                                le = a.additionalBuyAmount,
                                se = a.additionalPreferenceAmount,
                                de = a.regVendorMember,
                                ue = a.bookingExcitationdisplay,
                                me = a.showedRoom,
                                fe = a.transition,
                                ge = a.userExcitationInfo,
                                ke = a.userExcitationShowFlag,
                                ve = a.isLogin,
                                xe = a.bookingCheckFailedVisible,
                                Ie = a.noLoginPriceDetail,
                                Be = a.hourRoomInfo,
                                Le = a.livedConsumePackages,
                                Ae = a.showLivedConsumePackages,
                                Re = a.expectArriveTimeInfo,
                                Xe = a.currrentArrivalTime,
                                Se = a.showExchangePop,
                                Fe = a.exchangePointPopInfo,
                                Ee = a.checkInFreeFlag,
                                Me = a.deterrentEndtime,
                                _e = a.policyRelationList,
                                Oe = a.inviteFriendInfo,
                                qe = a.guaranteeDescVisible,
                                ze = a.drawerInfoList,
                                Ge = a.drawerSubtitle,
                                Ue = a.drawerTitle,
                                He = a.drawerType,
                                je = a.bookingCheckLoading,
                                Ke = a.drawerOptions,
                                We = a.isTraceless,
                                Ye = a.roomConsumePackages,
                                Qe = a.isHourRoom,
                                Je = a.hotelRulesInfo,
                                $e = a.isShowIdentifyPop,
                                et = (0, q.gP)(X.default.isAlipay, " alipay"),
                                tt = "hotel-booking-page "
                                  .concat(X.default.zxTyStr)
                                  .concat(et),
                                it = o ? null : r.canceltype,
                                at = (
                                  "不可取消" === it ? "".concat(it, " ") : null
                                )
                                  ? De.noCancelRemark
                                  : De.cancelRemark,
                                nt = [
                                  r.bedtype ? "".concat(r.bedtype, " ") : null,
                                  r.breakfast
                                    ? "".concat(r.breakfast, " ")
                                    : null,
                                  r.roomSize
                                    ? "".concat(r.roomSize, "m² ")
                                    : null,
                                  r.windowType
                                    ? "".concat(r.windowType, " ")
                                    : null,
                                ].filter(function (e) {
                                  return !!e;
                                });
                              null != ge &&
                                ge.img &&
                                "url(".concat(ge.img, ")");
                              var ot = p ? g : f,
                                rt =
                                  !ve &&
                                  o &&
                                  1 === ke &&
                                  (null == Ie ? void 0 : Ie.price) &&
                                  !Ae,
                                ct = null;
                              return (
                                2 === (null == j ? void 0 : j.payType)
                                  ? (ct = "到店付")
                                  : 3 === (null == j ? void 0 : j.payType) &&
                                    (0 === (null == Xe ? void 0 : Xe.price) &&
                                      (ct = "到店付"),
                                    (ct = "在线担保")),
                                (0, G.BX)(v.View, {
                                  className: tt,
                                  children: [
                                    (0, G.BX)(v.View, {
                                      className: "hotel-box",
                                      children: [
                                        (0, G.tZ)(Ne, {
                                          showedRoom: me,
                                          bookingCheckLoading: je,
                                          bookDescriptionArr: nt,
                                          cancelRemarkIcon: at,
                                          confirmRemarkIcon: De.confirmRemark,
                                          dates: c,
                                          roomConsumePackages: Ye,
                                          hourRoomInfo: Be,
                                          incentiveCancelRemark: s,
                                          incentiveConfirmRemark: d,
                                          roomInfo: r,
                                          hotelRulesInfo: Je,
                                          onShowDateModal: this.onShowDateModal,
                                          openRoomModal: this.openRoomModal,
                                          openBasicInfoDrawer: function (e) {
                                            return i.openBasicInfoDrawer(e);
                                          },
                                        }),
                                        (0, G.tZ)(he, {
                                          checkBookingResult: j,
                                          roomSelectorList: m,
                                          roomNum: u,
                                          queryRoomNum: h,
                                          bookingExcitationdisplay: ue,
                                          guaranteeList: O,
                                          expectArriveTimeInfo: Re,
                                          namesList: ot,
                                          personList: f,
                                          isOutland: p,
                                          isHourRoom: Qe,
                                          cardNumber: k,
                                          guaranteeText: b,
                                          currrentArrivalTime: Xe,
                                          couponInfo: C,
                                          handleRoomSelect:
                                            this.handleRoomSelect,
                                          handlePerson: this.handlePerson,
                                          handleFirstName: this.handleFirstName,
                                          handleLastName: this.handleLastName,
                                          phoneRef: this.phoneRef,
                                          handleCardNumber:
                                            this.handleCardNumber,
                                          openBookDrawer: this.openBookDrawer,
                                        }),
                                        Boolean(de) &&
                                          (0, G.tZ)(K, {
                                            venderData: de,
                                            onStateChange: function (e) {
                                              return i.handlePassengerStateChange(
                                                e
                                              );
                                            },
                                          }),
                                        (0, G.tZ)(be, {
                                          allCashBackInfo: w,
                                          bookingCheckExtend: L,
                                          bookingCheckLoading: je,
                                          checkBookingResult: j,
                                          bottomInfo: y,
                                          canUseCouponNum: B,
                                          couponInfo: C,
                                          couponList: T,
                                          displayPreferentialList: x,
                                          displayPromotionList: P,
                                          memberRightInfoList: D,
                                          livedConsumePackages: Le,
                                          preferencePriceTag: ne,
                                          preferencePriceTagInfo: oe,
                                          promotionList: I,
                                          totalPreferentialList: V,
                                          toggleCashbackTips:
                                            this.toggleCashbackTips,
                                          userExchangePoint: A,
                                          checkInFreeFlag: Ee,
                                          handleExchangeClick:
                                            this.handleExchangeClick,
                                          handleDateCounterClick:
                                            this.handleDateCounterClick,
                                          onShowLivedConsumePackages:
                                            this.onShowLivedConsumePackages,
                                          handlePreferential:
                                            this.handlePreferential,
                                          checkPreferentialList:
                                            this.checkPreferentialList,
                                          goCouponList: this.goCouponList,
                                          openBookDrawer: this.openBookDrawer,
                                        }),
                                        (0, G.tZ)(Te, {
                                          isTraceless: We,
                                          openTracelessDrawer:
                                            this.openTracelessDrawer,
                                        }),
                                        (0, G.tZ)(Ze, {
                                          additionalPurchaseList: re,
                                          additionalPurchaseSelectHandler:
                                            this
                                              .additionalPurchaseSelectHandler,
                                          skipDescriptionPage:
                                            this.skipDescriptionPage,
                                        }),
                                        (0, G.tZ)(Pe, {
                                          invoiceInformation: R,
                                          specialTip: F,
                                          cancelRemark: S,
                                          payType:
                                            null == j ? void 0 : j.payType,
                                          allCashBackInfo: w,
                                          serviceProvide: E,
                                          policyRelationList: _e,
                                        }),
                                      ],
                                    }),
                                    (0, G.BX)(v.View, {
                                      className: "new-customer-login",
                                      style: (0, q.LP)(rt, "flex"),
                                      children: [
                                        (0, G.BX)(v.View, {
                                          className: "text-wrapper",
                                          children: [
                                            (0, G.tZ)(v.Image, {
                                              src: De.loginRedPack,
                                              className: "icon",
                                              mode: "widthFix",
                                            }),
                                            (0, G.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                "新客登录后下单，预计可低至",
                                                (0, G.tZ)(v.Text, {
                                                  className: "price",
                                                  children:
                                                    null == Ie
                                                      ? void 0
                                                      : Ie.price,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, G.tZ)(v.View, {
                                          className: "btn-wrapper",
                                          children: (0, G.tZ)(v.Button, {
                                            id: "AXAA",
                                            onClick: this.loginToBooking,
                                            children: "去登录",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, G.tZ)(ye, {
                                      bottomInfo: y,
                                      checkBookingResult: j,
                                      displayPriceDetail: z,
                                      inviteFriendInfo: Oe,
                                      pageId: this.pageId,
                                      priceInfo: ct,
                                      onClickBackTipsModalOpen:
                                        this.onClickBackTipsModalOpen,
                                      submitOrder: this.submitOrder,
                                      togglePriceDetail: this.togglePriceDetail,
                                    }),
                                    (0, G.tZ)(we, {
                                      additionalBuyAmount: le,
                                      additionalPreferenceAmount: se,
                                      allCashBackInfo: w,
                                      atmosphere: n,
                                      bottomInfo: y,
                                      checkBookingResult: j,
                                      displayPriceDetail: z,
                                      displayPriceDetailType: H,
                                      popCuxiaoList: N,
                                      preferentialList: J,
                                      roomNum: u,
                                      dates: c,
                                      roomPriceList: Q,
                                      selectedAdditionalList: ce,
                                      zxPreferentialTotal: ee,
                                      zxPreferentialList: $,
                                      onClose: this.closePriceDetail,
                                      onClickDisplayPriceDetailType:
                                        this.onClickDisplayPriceDetailType,
                                      toggleGuaranteeTips:
                                        this.toggleGuaranteeTips,
                                    }),
                                    (0, G.tZ)(Y.Z, {
                                      list: Le,
                                      show: Ae,
                                      onClose: this.onCloseLivedConsumePackages,
                                    }),
                                    (0, G.tZ)(pe, {
                                      isHourRoom: Qe,
                                      drawerInfoList: ze,
                                      drawerOptions: Ke,
                                      checkBookingResult: j,
                                      bookingCheckExtend: L,
                                      currrentArrivalTime: Xe,
                                      expectArriveTimeInfo: Re,
                                      guaranteeList: O,
                                      keepStayInfo: ae,
                                      preferencePriceTagInfo: oe,
                                      roomNum: u,
                                      roomSelectorList: m,
                                      subtitle: Ge,
                                      title: Ue,
                                      type: He,
                                      onClose: this.closeBookDrawer,
                                      onBack:
                                        this.onClickKeepStayModalBack.bind(
                                          this
                                        ),
                                      handleLastArrivalTime:
                                        this.handleLastArrivalTime,
                                      handleRoomSelect: this.handleRoomSelect,
                                      onClickDrawerRightBtn:
                                        this.onClickDrawerRightBtn,
                                      userExchangePoint: A,
                                      handleDateCounterClick:
                                        this.handleDateCounterClick,
                                    }),
                                    (0, G.tZ)(Ce.Z, {
                                      show: te,
                                      onClose: this.onClickBackTipsModalClose,
                                    }),
                                    (0, G.tZ)(U, {
                                      visible: te,
                                      modalInfo: ie,
                                      onClose:
                                        this.onClickBackTipsModalClose.bind(
                                          this
                                        ),
                                    }),
                                    (0, G.BX)(v.View, {
                                      children: [
                                        (null === (e = j.depositPayment) ||
                                        void 0 === e
                                          ? void 0
                                          : e.simpleDesc) &&
                                          (0, G.tZ)(Z.ZtActivityPop, {
                                            className:
                                              "zt-order-modal no-close",
                                            show: qe,
                                            onClose: this.toggleGuaranteeTips,
                                            onWrapClose:
                                              this.toggleGuaranteeTips,
                                            children: (0, G.BX)(v.View, {
                                              className: "info-wrapper",
                                              children: [
                                                (0, G.tZ)(v.View, {
                                                  className: "title",
                                                  children:
                                                    j.depositPayment.simpleDesc,
                                                }),
                                                j.depositPayment.descList.map(
                                                  function (e, t) {
                                                    return (0, G.tZ)(
                                                      v.View,
                                                      {
                                                        className: "desc",
                                                        children: e,
                                                      },
                                                      t
                                                    );
                                                  }
                                                ),
                                                (0, G.tZ)(v.View, {
                                                  className: "btn-wrapper one",
                                                  children: (0, G.tZ)(
                                                    v.Button,
                                                    {
                                                      id: "AXAB",
                                                      onClick:
                                                        this
                                                          .toggleGuaranteeTips,
                                                      className: "btn-primary",
                                                      children: "我知道了",
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          }),
                                        (0, G.tZ)(Z.ZtActivityPop, {
                                          className: "zt-order-modal no-close",
                                          show: xe,
                                          onClose:
                                            this.onCloseBookingCheckFailed,
                                          onWrapClose:
                                            this.onCloseBookingCheckFailed,
                                          children: (0, G.BX)(v.View, {
                                            className: "info-wrapper",
                                            children: [
                                              (0, G.tZ)(v.View, {
                                                className: "title",
                                                children: "温馨提示",
                                              }),
                                              (0, G.tZ)(v.View, {
                                                className: "desc center",
                                                children:
                                                  "很抱歉，该日期下您所选的房型已订完",
                                              }),
                                              (0, G.tZ)(v.View, {
                                                className: "btn-wrapper one",
                                                children: (0, G.tZ)(v.Button, {
                                                  id: "AXAC",
                                                  onClick:
                                                    this
                                                      .onCloseBookingCheckFailed,
                                                  className: "btn-primary",
                                                  children: "返回",
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, G.BX)(Z.ZtActivityPop, {
                                          className: "exchange-point-pop",
                                          animation: "scale",
                                          show: Se,
                                          isShowClose: !0,
                                          onClose: this.onCloseExchangePointPop,
                                          onWrapClose:
                                            this.onCloseExchangePointPop,
                                          children: [
                                            (null == Fe ? void 0 : Fe.title) &&
                                              (0, G.tZ)(Z.ZtRichLinkText, {
                                                className: "title",
                                                nodes: Fe.title,
                                              }),
                                            (null == Fe
                                              ? void 0
                                              : Fe.subTitle) &&
                                              (0, G.tZ)(Z.ZtRichLinkText, {
                                                className: "subtitle",
                                                nodes: Fe.subTitle,
                                              }),
                                            (null == Fe ? void 0 : Fe.imgUrl) &&
                                              (0, G.tZ)(v.View, {
                                                className: "image-wrap",
                                                children: (0, G.tZ)(v.Image, {
                                                  className: "image",
                                                  mode: "widthFix",
                                                  src: Fe.imgUrl,
                                                }),
                                              }),
                                          ],
                                        }),
                                        Boolean(Me) &&
                                          (0, G.BX)(v.View, {
                                            children: [
                                              (0, G.tZ)(v.Image, {
                                                src: De.deterrentFloat,
                                                className: "deterrent-float",
                                                mode: "widthFix",
                                                webp: !0,
                                              }),
                                              (0, G.tZ)(Z.ZtCountdown, {
                                                className: "deterrent-time",
                                                endTime: Me,
                                                isShowHour: !1,
                                                onTimeup:
                                                  this.onDeterrentTimeUp,
                                              }),
                                            ],
                                          }),
                                        o &&
                                          me &&
                                          (0, G.tZ)(W.Z, {
                                            room: me,
                                            transition: fe,
                                            onClose: this.closeRoomIntroduce,
                                            fromType: "HotelDetailPage",
                                          }),
                                        X.default.isBaidu &&
                                          (0, G.tZ)(_.Z, {
                                            calendarParams: c,
                                            visible: l,
                                            onConfirm: this.onDateChange,
                                            onClose: this.onDateClose,
                                          }),
                                        (0, G.tZ)(M.Z, {}),
                                      ],
                                    }),
                                    (0, G.tZ)(Z.ZtActivityPop, {
                                      className: "zt-order-modal",
                                      show: $e,
                                      isShowClose: !0,
                                      onClose: this.onCloseIdentifyPop,
                                      onWrapClose: this.onCloseIdentifyPop,
                                      children: (0, G.tZ)(Ve, {
                                        canReceiveCouponItem:
                                          null === (t = this.room) ||
                                          void 0 === t
                                            ? void 0
                                            : t.canReceiveCouponItem,
                                        onClose: this.onCloseIdentifyPop,
                                        goToIdentifyPage: this.goToIdentifyPage,
                                      }),
                                    }),
                                  ],
                                })
                              );
                            },
                          },
                        ]),
                        i
                      );
                    })(k.default.Component))
                  ) || n)
              ) || n;
          Page(
            (0, o.createPageConfig)(
              Se,
              "pages/hotel/booking/booking",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                navigationBarTitleText: "订单填写",
                navigationBarFrontColor: "#ffffff",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(83029);
        }),
          e.O();
      },
    ]);
})();
