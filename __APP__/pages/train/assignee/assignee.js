!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/342bdcbe80e808fa7b62443e18d9142f.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [93667],
      {
        10141: function (e, t, a) {
          var n,
            s = a(32180),
            i = a(79301),
            l = a(298),
            o = a(95308),
            r = a(57042),
            c = a(24460),
            d = a(81876),
            u = a(21867),
            h = a(86066),
            p = a(45023),
            m = a(52500),
            g = a(71515),
            v = a(92954),
            f = a.n(v),
            b = a(58676),
            w = a(79792),
            y = a(79204),
            x = a(49120),
            _ = a(96158),
            N = a(81957),
            Z = a(48813),
            C =
              (0, N.h)()(
                (n = (function (e) {
                  (0, u.Z)(a, e);
                  var t = (0, h.Z)(a);
                  function a(e) {
                    var n;
                    return (
                      (0, r.Z)(this, a),
                      (n = t.call(this, e)),
                      (0, p.Z)(
                        (0, d.Z)(n),
                        "pageId",
                        w.default.isTieyou ? "10650082702" : "10650082700"
                      ),
                      (n.state = {
                        handleType: 0,
                        passenger: n.createNewPas(),
                      }),
                      n
                    );
                  }
                  return (
                    (0, c.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.initData();
                        },
                      },
                      {
                        key: "initData",
                        value: function () {
                          var e,
                            t,
                            a = this,
                            n =
                              (null === (e = f().getCurrentInstance().router) ||
                              void 0 === e ||
                              null === (t = e.params) ||
                              void 0 === t
                                ? void 0
                                : t.data) || {},
                            s = n.handleType,
                            i = void 0 === s ? 1 : s,
                            l = n.passenger,
                            o = void 0 === l ? {} : l;
                          this.setState(
                            {
                              handleType: o && 2 === i ? 2 : 1,
                              passenger: this.createNewPas(o),
                            },
                            function () {
                              1 === a.state.handleType &&
                                f().setNavigationBarTitle({
                                  title: "添加受让人",
                                }),
                                2 === a.state.handleType &&
                                  f().setNavigationBarTitle({
                                    title: "编辑受让人",
                                  });
                            }
                          );
                        },
                      },
                      {
                        key: "createNewPas",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          return Object.assign(
                            {
                              name: "",
                              id_type: "1",
                              id_type_name: _.PJ[1],
                              sex_name: "1",
                              type_name: _.UL[1],
                              id_no: "",
                              mobile: "",
                              self: !1,
                              email: "",
                              mobileCode: "86",
                            },
                            e
                          );
                        },
                      },
                      {
                        key: "showCardType",
                        value: function () {
                          var e = this,
                            t = Object.keys(_.PJ).map(function (e) {
                              return _.PJ[e];
                            });
                          f().showActionSheet({
                            itemList: t,
                            success: function (t) {
                              var a;
                              (a = w.default.isAlipay ? t.index : t.tapIndex),
                                e.setState(
                                  {
                                    passenger: Object.assign(
                                      e.state.passenger,
                                      {
                                        id_type_name:
                                          _.PJ[Object.keys(_.PJ)[a]],
                                        id_type: Object.keys(_.PJ)[a],
                                      }
                                    ),
                                  },
                                  function () {
                                    var t,
                                      a,
                                      n,
                                      s,
                                      i =
                                        1 !=
                                        (null === (t = e.state.passenger) ||
                                        void 0 === t
                                          ? void 0
                                          : t.id_type);
                                    null === (a = e.$MobileCodeSelector) ||
                                      void 0 === a ||
                                      null === (n = a.setEnableSelect) ||
                                      void 0 === n ||
                                      n.call(a, i),
                                      e.isEnableSelect !== i &&
                                        (null === (s = e.$MobileCodeSelector) ||
                                          void 0 === s ||
                                          s.init()),
                                      (e.isEnableSelect = i);
                                  }
                                );
                            },
                          });
                        },
                      },
                      {
                        key: "onInputChange",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t = arguments.length > 1 ? arguments[1] : void 0;
                          this.setState({
                            passenger: Object.assign(
                              this.state.passenger,
                              (0, p.Z)({}, t, e)
                            ),
                          });
                        },
                      },
                      {
                        key: "onInputBlur",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t = arguments.length > 1 ? arguments[1] : void 0;
                          e.trim() &&
                            ("mobile" != t ||
                              /^1[3456789]\d{9}$/.test(e.trim()) ||
                              this.showMessage("手机号格式不正确~"));
                        },
                      },
                      {
                        key: "showMessage",
                        value: function (e, t) {
                          this.showCommonDialog({
                            title: "",
                            content: e,
                            onButtonClick: t,
                          });
                        },
                      },
                      {
                        key: "validAll",
                        value: function () {
                          var e = this;
                          return new Promise(function (t) {
                            var a, n;
                            return e.state.passenger.name
                              ? e.state.passenger.id_no
                                ? (0, _.kJ)(
                                    e.state.passenger.name,
                                    e.state.passenger.id_type_name
                                  )
                                  ? e.state.passenger.id_no &&
                                    e.state.passenger.id_no.indexOf("*") < 0 &&
                                    !(0, _.nR)(
                                      e.state.passenger.id_type_name,
                                      e.state.passenger.id_no
                                    )
                                    ? (t(!1),
                                      e.showMessage(
                                        "无效的" +
                                          e.state.passenger.id_type_name +
                                          "！"
                                      ))
                                    : (null !== (a = e.state.passenger.email) &&
                                        void 0 !== a &&
                                        a.trim()) ||
                                      (null !==
                                        (n = e.state.passenger.mobile) &&
                                        void 0 !== n &&
                                        n.trim())
                                    ? void t(!0)
                                    : (t(!1),
                                      e.showMessage(
                                        "乘车人手机号码或电子邮箱至少填写一项"
                                      ))
                                  : (t(!1), e.showMessage("输入正确的姓名"))
                                : (t(!1), e.showMessage("请输入证件号"))
                              : (t(!1), e.showMessage("请输入姓名"));
                          });
                        },
                      },
                      {
                        key: "submit",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e() {
                              var t,
                                a,
                                n,
                                s,
                                o,
                                r,
                                c,
                                d = this;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          this.ubtTrace("c_trn_z_10650008809", {
                                            bizKey:
                                              "z_mini_passengerEdit_transfereeIntro_confirm_click",
                                          }),
                                          (e.next = 3),
                                          this.validAll()
                                        );
                                      case 3:
                                        if (e.sent) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 6:
                                        return (
                                          (t = this.state),
                                          (a = t.handleType),
                                          (n = t.passenger),
                                          (s = (0, l.Z)(
                                            (0, l.Z)(
                                              { type: a },
                                              1 === a ? { addAssignee: n } : {}
                                            ),
                                            2 === a ? { updateAssignee: n } : {}
                                          )),
                                          (0, x.showLoading)(),
                                          (e.next = 11),
                                          (0, _.Li)({ reqParams: s })
                                        );
                                      case 11:
                                        if (((e.t0 = e.sent), e.t0)) {
                                          e.next = 14;
                                          break;
                                        }
                                        e.t0 = {};
                                      case 14:
                                        (o = e.t0),
                                          (r = o.resultCode),
                                          (c = o.resultMessage),
                                          (0, x.hideLoading)(),
                                          this.showMessage(c, function () {
                                            1 === r && d.navigateBack();
                                          });
                                      case 19:
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
                        key: "onExportPasClick",
                        value: function () {
                          var e = this;
                          this.ubtTrace("c_trn_z_10650008809", {
                            bizKey:
                              "z_mini_passengerEdit_transfereeIntro_click",
                          }),
                            this.navigateTo({
                              url: "../exportAssignee/exportAssignee",
                              callback: function (t) {
                                e.setState({ passenger: e.createNewPas(t) });
                              },
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.passenger,
                            n = t.handleType;
                          return (0, Z.BX)(g.View, {
                            className: "train-assignee-page",
                            children: [
                              1 === n &&
                                (0, Z.tZ)(g.View, {
                                  className: "export-content ".concat(
                                    w.default.zxTyStr
                                  ),
                                  id: "AKAX",
                                  onClick: this.onExportPasClick.bind(this),
                                  children: (0, Z.BX)(g.View, {
                                    className: "export-btn",
                                    children: [
                                      (0, Z.tZ)(g.Text, { className: "icon" }),
                                      (0, Z.tZ)(g.Text, {
                                        className: "txt",
                                        children: "从乘车人导入",
                                      }),
                                    ],
                                  }),
                                }),
                              (0, Z.tZ)(g.View, {
                                className: "pasg-add",
                                children: (0, Z.BX)(g.View, {
                                  className: "train-list",
                                  children: [
                                    (0, Z.BX)(g.View, {
                                      className: "item add-box",
                                      children: [
                                        (0, Z.tZ)(g.View, {
                                          className: "label",
                                          children: "姓名",
                                        }),
                                        (0, Z.tZ)(g.View, {
                                          className: "cont",
                                          children: (0, Z.tZ)(g.Input, {
                                            className: "strong",
                                            type: "text",
                                            placeholder: "请输入您的真实姓名",
                                            placeholderClass: "placeholder",
                                            value: a.name,
                                            onInput: function (t) {
                                              e.onInputChange(
                                                t.detail.value,
                                                "name"
                                              );
                                            },
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, Z.BX)(g.View, {
                                      className: "item add-box",
                                      id: "AKAY",
                                      onClick: this.showCardType,
                                      children: [
                                        (0, Z.tZ)(g.View, {
                                          className: "label",
                                          children: "证件类型",
                                        }),
                                        (0, Z.tZ)(g.View, {
                                          className: "cont",
                                          children: (0, Z.tZ)(g.Text, {
                                            className: "strong",
                                            children: a.id_type_name,
                                          }),
                                        }),
                                        (0, Z.tZ)(g.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                                    (0, Z.BX)(g.View, {
                                      className: "item add-box",
                                      children: [
                                        (0, Z.tZ)(g.View, {
                                          className: "label",
                                          children: "证件号码",
                                        }),
                                        (0, Z.tZ)(g.View, {
                                          className: "cont",
                                          children: (0, Z.tZ)(g.Input, {
                                            className: "strong",
                                            type: "text",
                                            placeholder: "请输入证件号码",
                                            placeholderClass: "placeholder",
                                            maxLength: 30,
                                            value: a.id_no,
                                            onInput: function (t) {
                                              e.onInputChange(
                                                t.detail.value,
                                                "id_no"
                                              );
                                            },
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, Z.BX)(g.View, {
                                      className: "item add-box",
                                      children: [
                                        (0, Z.tZ)(g.View, {
                                          className: "label",
                                          children: "手机号",
                                        }),
                                        (0, Z.BX)(g.View, {
                                          className: "cont flex",
                                          children: [
                                            (0, Z.tZ)(y.Z, {
                                              ref: function (t) {
                                                return (e.$MobileCodeSelector =
                                                  t);
                                              },
                                              style: { paddingRight: "6px" },
                                              value: a.mobileCode,
                                              onChange: function (t) {
                                                e.onInputChange(
                                                  t,
                                                  "mobileCode"
                                                );
                                              },
                                            }),
                                            (0, Z.tZ)(g.Input, {
                                              className: "strong flex-1",
                                              type: "text",
                                              placeholder: "请输入您的手机号",
                                              placeholderClass: "placeholder",
                                              maxlength: "18",
                                              onInput: function (t) {
                                                e.onInputChange(
                                                  t.detail.value,
                                                  "mobile"
                                                );
                                              },
                                              value: a.mobile,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, Z.BX)(g.View, {
                                      className: "item add-box",
                                      children: [
                                        (0, Z.tZ)(g.View, {
                                          className: "label",
                                          children: "邮箱",
                                        }),
                                        (0, Z.tZ)(g.View, {
                                          className: "cont",
                                          children: (0, Z.tZ)(g.Input, {
                                            className: "strong",
                                            type: "text",
                                            placeholder: "请输入您的电子邮箱",
                                            placeholderClass: "placeholder",
                                            maxlength: "18",
                                            onInput: function (t) {
                                              e.onInputChange(
                                                t.detail.value,
                                                "email"
                                              );
                                            },
                                            value: a.email,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.BX)(g.View, {
                                className: "text-tips",
                                children: [
                                  (0, Z.tZ)(g.View, {
                                    className: "col",
                                    children:
                                      "请您在添加乘客前仔细阅读以下内容:",
                                  }),
                                  (0, Z.BX)(g.View, {
                                    children: [
                                      "根据铁路12306等铁路客运机构实名制购票要求，购买火车票需提供乘客的证件信息和手机号，并需在服务中出具对应证件信息用于验证，请确保录入信息真实有效。",
                                      w.default.partnerCN,
                                      "将采取措施保护您录入的证件信息和手机号，且仅授权提供给【服务方、铁路12306、铁路代售点】等用于为您提供服务。",
                                    ],
                                  }),
                                ],
                              }),
                              (0, Z.tZ)(g.View, {
                                className: "bottom-view",
                                children: (0, Z.tZ)(g.Button, {
                                  className: "btn btn-primary",
                                  hoverClass: "btn-primary_hover",
                                  id: "AKAZ",
                                  onClick: this.submit,
                                  children: "确定",
                                }),
                              }),
                              (0, Z.tZ)(b.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(m.default.Component))
              ) || n;
          Page(
            (0, s.createPageConfig)(
              C,
              "pages/train/assignee/assignee",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "受让人",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                enablePullDownRefresh: !1,
                backgroundColorBottom: "#efefef",
                backgroundColorTop: "#efefef",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [1709, 98398, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(10141);
        }),
          e.O();
      },
    ]);
})();
