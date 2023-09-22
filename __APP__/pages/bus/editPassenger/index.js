!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [87061],
      {
        68129: function (e, t, a) {
          var i,
            n = a(32180),
            s = a(79301),
            c = a(95308),
            r = a(298),
            o = a(57042),
            l = a(24460),
            d = a(81876),
            u = a(21867),
            h = a(86066),
            p = a(45023),
            m = a(52500),
            f = a(92954),
            N = a.n(f),
            k = a(71515),
            C = a(3205),
            v = a(79792),
            y = a(49120),
            w = a(43796),
            Z = a(77900),
            T = a(8271),
            g = a.n(T),
            b = a(43005),
            B = a(81957),
            V = a(48813),
            I = (function (e) {
              (0, u.Z)(a, e);
              var t = (0, h.Z)(a);
              function a(e) {
                var i;
                return (
                  (0, o.Z)(this, a),
                  ((i = t.call(this, e)).state = {
                    isTieyou: v.default.isTieyou,
                    userInfo: {},
                    show: !1,
                  }),
                  i
                );
              }
              return (
                (0, l.Z)(a, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.initPage(this.props);
                    },
                  },
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      this.initPage(e);
                    },
                  },
                  {
                    key: "initPage",
                    value: function (e) {
                      this.setState({ show: e.visible, userInfo: e.info });
                    },
                  },
                  {
                    key: "onClickConfirm",
                    value: function () {
                      this.props.onConfirm();
                    },
                  },
                  {
                    key: "onClickCancel",
                    value: function () {
                      this.props.onCancel();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.state,
                        t = e.isTieyou,
                        a = e.show,
                        i = e.userInfo;
                      return (0, V.tZ)(k.View, {
                        className: "bus-card-ocr-modal",
                        children:
                          a &&
                          (0, V.BX)(k.View, {
                            className: (t ? "ty" : "zx") + " cardocr-modal",
                            children: [
                              (0, V.tZ)(k.View, {
                                className:
                                  "modal-mask " + (a ? "visible" : "hidden"),
                              }),
                              (0, V.tZ)(k.View, {
                                className:
                                  "modal-view " + (a ? "visible" : "hidden"),
                                children: (0, V.BX)(k.View, {
                                  className: "modal-content",
                                  children: [
                                    (0, V.tZ)(k.View, {
                                      className: "bar",
                                      children: "确认乘客信息",
                                    }),
                                    (0, V.tZ)(k.View, {
                                      className: "label",
                                      children: "姓名",
                                    }),
                                    (0, V.tZ)(k.View, {
                                      className: "txt",
                                      children: i.name,
                                    }),
                                    (0, V.tZ)(k.View, {
                                      className: "label",
                                      children: "身份证号码",
                                    }),
                                    (0, V.tZ)(k.View, {
                                      className: "txt",
                                      children: i.no,
                                    }),
                                    (0, V.BX)(k.View, {
                                      className: "bottom",
                                      children: [
                                        (0, V.tZ)(k.View, {
                                          className: "cancel-btn",
                                          id: "AdAd",
                                          onClick:
                                            this.onClickCancel.bind(this),
                                          children: "返回修改",
                                        }),
                                        (0, V.tZ)(k.View, {
                                          className: "ok-btn",
                                          id: "AdAe",
                                          onClick:
                                            this.onClickConfirm.bind(this),
                                          children: "确认无误",
                                        }),
                                      ],
                                    }),
                                    (0, V.tZ)(k.View, {
                                      className: "close-icon",
                                      id: "AdAf",
                                      onClick: this.onClickCancel.bind(this),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      });
                    },
                  },
                ]),
                a
              );
            })(m.default.Component),
            x = a(75150),
            S = "YYYY-MM-DD",
            O = { text: "成人票" },
            P = { type: "1", text: "身份证", no: "" },
            X = [
              { type: "1", text: "身份证" },
              { type: "2", text: "护照" },
            ],
            E = {
              1: "姓名不能为空",
              2: "请填写正确的中文姓名",
              3: "证件号码不能为空",
              4: "请输入正确的证件号码",
              5: "出生满30天且小于16周岁才可以购买儿童票。请填写正确的身份证号",
              6: "小于6周岁才可以购买携童票。请填写正确的身份证号",
              7: "请输入正确的FIRST NAME",
              8: "请输入正确的LAST NAME",
              9: "FIRST NAME不能为空",
              10: "LAST NAME不能为空",
              11: "请选择出生日期",
            },
            M =
              (0, B.h)()(
                (i = (function (e) {
                  (0, u.Z)(a, e);
                  var t = (0, h.Z)(a);
                  function a(e) {
                    var i;
                    return (
                      (0, o.Z)(this, a),
                      (i = t.call(this, e)),
                      (0, p.Z)((0, d.Z)(i), "$PersonSaveTip", null),
                      (i.pageId = "10650060393"),
                      (i.state = {
                        isTieyou: v.default.isTieyou,
                        isNew: !0,
                        oldPasInfo: null,
                        ticketText: "",
                        pasCNName: "",
                        pasENFirstName: "",
                        pasENLastName: "",
                        birthday: "",
                        chooseBirth: "",
                        cardInfo: {},
                        supportCardList: [],
                        supportTicketList: [],
                        cardOcrModalVisible: !1,
                        cardOcrModalInfo: {},
                        isShowChildConfirmModal: !1,
                      }),
                      i
                    );
                  }
                  return (
                    (0, l.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e =
                            (0, f.getCurrentInstance)().router &&
                            (0, f.getCurrentInstance)().router.params;
                          console.log("params", e);
                          var t = JSON.parse(e.data || "");
                          console.log("data", t);
                          var a = null;
                          t && t.pasInfo && (a = t.pasInfo);
                          var i = null;
                          t && t.buyTicketRule && (i = t.buyTicketRule);
                          var n = !0;
                          a && (n = !1),
                            N().setNavigationBarTitle({
                              title: n ? "新增乘客" : "编辑乘客",
                            }),
                            console.log("pasInfo", a),
                            (0, y.setNavigationBarColor)({
                              frontColor: "#000000",
                              backgroundColor: "#fff",
                            }),
                            this.setState({
                              isOcr: t.isOcr,
                              oldPasInfo: a,
                              isNew: n,
                              pasCNName: n ? "" : a.CNName,
                              pasENFirstName: n ? "" : a.ENFirstName,
                              pasENLastName: n ? "" : a.ENLastName,
                              ticketText: n ? O.text : a.ptypeText,
                              cardInfo: {
                                type: n ? P.type : a.idcard.type,
                                text: n ? P.text : a.idcard.text,
                                no: n ? P.no : a.idcard.no,
                              },
                              supportCardList:
                                i.supportPassengerIdentityTypes.map(function (
                                  e
                                ) {
                                  return "二代身份证" === e ? "身份证" : e;
                                }),
                              supportTicketList: i.ticketRuleDesc
                                .filter(function (e) {
                                  return e.isSale;
                                })
                                .map(function (e) {
                                  var t = [];
                                  return (
                                    e.ticketRuleDesc &&
                                    -1 !== e.ticketRuleDesc.indexOf("|")
                                      ? (t = e.ticketRuleDesc.split("|"))
                                      : e.ticketRuleDesc &&
                                        (t = [e.ticketRuleDesc]),
                                    (0, r.Z)((0, r.Z)({}, e), {}, { desc: t })
                                  );
                                }),
                            });
                        },
                      },
                      {
                        key: "onReady",
                        value: function () {
                          var e = this;
                          this.state.isOcr &&
                            setTimeout(function () {
                              e.onClickOcr();
                            }, 300);
                        },
                      },
                      {
                        key: "onClickSave",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, s.Z)().mark(function e() {
                              var t, a;
                              return (0, s.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.prev = 0),
                                          0 == (t = this.validateInput()))
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return (
                                          N().showModal({
                                            title: "温馨提示",
                                            content: E[t] || "乘客信息未保存",
                                            confirmText: "知道了",
                                            showCancel: !1,
                                            confirmColor: "#fc6e51",
                                          }),
                                          this.ubtTrace(100983, {
                                            errorCode: t,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 6:
                                        if (!this.isChild()) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          (e.next = 9),
                                          this.setState({
                                            isShowChildConfirmModal: !0,
                                          })
                                        );
                                      case 9:
                                        return (
                                          (e.next = 11),
                                          null === (a = this.$PersonSaveTip) ||
                                          void 0 === a
                                            ? void 0
                                            : a.handleConfirmModalTip()
                                        );
                                      case 11:
                                        this.setState({
                                          isShowChildConfirmModal: !1,
                                        }),
                                          this.submitPasInfo(),
                                          (e.next = 19);
                                        break;
                                      case 15:
                                        (e.prev = 15),
                                          (e.t0 = e.catch(0)),
                                          this.setState({
                                            isShowChildConfirmModal: !1,
                                          }),
                                          this.ubtTrace(100984, {
                                            errorMsg: "提交乘客 js报错",
                                          });
                                      case 19:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 15]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "submitPasInfo",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.isNew,
                            i = t.cardInfo,
                            n = t.pasCNName,
                            s = t.pasENFirstName,
                            c = t.pasENLastName,
                            r = t.oldPasInfo,
                            o = t.ticketText,
                            l = t.birthday,
                            d = i.no,
                            u = {
                              commonPassengerInfo: {
                                passengerID: a ? "0" : r.PassengerID,
                                passengerType: "携童票" === o ? "婴儿票" : o,
                                passengerName: n,
                                passengerENFirstName: s,
                                passengerENLastName: c,
                                passportType: i.text,
                                passportCode: (d && d.toUpperCase()) || "",
                                passengerBirth: l || "",
                              },
                              headerPartner: v.default.isTieyou
                                ? "tieyou"
                                : "zhixing",
                            };
                          (0, y.showLoading)(),
                            (0, b.vW)(u)
                              .then(function (t) {
                                console.log("saveCommonPassengerPromise", t),
                                  1 == (null == t ? void 0 : t.resultCode)
                                    ? ((0, y.hideLoading)(),
                                      e.invokeCallback({
                                        needRefresh: !0,
                                        passengerID: a
                                          ? t.passengerId
                                          : r.PassengerID,
                                      }),
                                      e.navigateBack())
                                    : ((0, y.hideLoading)(),
                                      N().showToast({
                                        title: "保存乘客信息失败，请稍后再试~",
                                        icon: "none",
                                        duration: 1500,
                                      }),
                                      e.ubtTrace(
                                        100871,
                                        {
                                          postData: { passenger: u, isNew: a },
                                          returnData: t,
                                        } || { msg: "数据错误" }
                                      ));
                              })
                              .catch(function (t) {
                                console.log(t),
                                  (0, y.hideLoading)(),
                                  N().showToast({
                                    title: "保存乘客信息失败，请稍后再试~",
                                    icon: "none",
                                    duration: 1500,
                                  }),
                                  e.ubtTrace(100871, t);
                              });
                        },
                      },
                      {
                        key: "transfterPassengerType",
                        value: function (e) {
                          var t = "";
                          switch (e) {
                            case "X":
                              t = "婴儿票";
                              break;
                            case "C":
                              t = "儿童票";
                              break;
                            case "A":
                              t = "成人票";
                          }
                          return t;
                        },
                      },
                      {
                        key: "validateInput",
                        value: function () {
                          var e = this.state.cardInfo,
                            t = 0;
                          if (
                            0 != (t = this.isOnlyCName() && this.checkCName())
                          )
                            return t;
                          if (0 != (t = 2 == e.type && this.checkEName()))
                            return t;
                          if (0 != (t = this.checkIdCard())) return t;
                          if (1 == e.type) {
                            var a = e.no.substring(6, 14),
                              i = g()(a).format(S);
                            this.setState({ birthday: i });
                          } else if (2 == e.type) {
                            var n = this.state.chooseBirth;
                            n || (t = 11), this.setState({ birthday: n });
                          }
                          return 0 != (t = this.checkBirth()) ? t : 0;
                        },
                      },
                      {
                        key: "isOnlyCName",
                        value: function () {
                          var e = this.state.cardInfo;
                          return 1 == parseInt(e.type);
                        },
                      },
                      {
                        key: "checkCName",
                        value: function () {
                          var e = this.state.pasCNName,
                            t = e;
                          if (/[a-zA-Z0-9^.$()\xa6*+?]/.test(t)) return 2;
                          return (t = t.replace(/[^\u4e00-\u9fa5]/gi, ""))
                            ? /^[\u4e00-\u9fa5]+[\u4e00-\u9fa5]{1,14}$/.test(
                                e
                              ) && Z.Z.isValidCNName(e)
                              ? 0
                              : 2
                            : 1;
                        },
                      },
                      {
                        key: "checkEName",
                        value: function () {
                          var e = this.state,
                            t = e.pasENFirstName,
                            a = e.pasENLastName,
                            i = /^[a-zA-Z]+$/i;
                          return t
                            ? i.test(t)
                              ? a
                                ? i.test(a)
                                  ? 0
                                  : 8
                                : 10
                              : 7
                            : 9;
                        },
                      },
                      {
                        key: "checkIdCard",
                        value: function () {
                          var e = this.state.cardInfo,
                            t = parseInt(e.type),
                            a = e.no;
                          if (!a) return 3;
                          if (1 == t) {
                            if (18 != a.length || !Z.Z.isValidSFZ(a)) return 4;
                          } else if (2 == t && !/^[a-z0-9]{6,20}$/i.test(a))
                            return 4;
                          return 0;
                        },
                      },
                      {
                        key: "checkBirth",
                        value: function () {
                          var e = this.state,
                            t = e.cardInfo,
                            a = e.ticketText,
                            i = t.type;
                          if (1 != i) return 0;
                          var n = "";
                          if (1 == i) {
                            var s = t.no.substring(6, 14);
                            n = g()(s).format(S);
                          } else {
                            if (2 != i) return 0;
                            n = this.state.chooseBirth;
                          }
                          var c = 864e5;
                          if (g()(n).valueOf() > new Date().getTime()) return 4;
                          if ("携童票" === a) {
                            var r =
                              (new Date().getTime() - g()(n).valueOf()) / c;
                            if (r > 2190 || r < 30) return 6;
                          }
                          if ("儿童票" === a) {
                            var o =
                              (new Date().getTime() - g()(n).valueOf()) / c;
                            if (o > 5840 || o < 30) return 5;
                          }
                          return 0;
                        },
                      },
                      {
                        key: "isChild",
                        value: function () {
                          return (
                            "儿童票" === this.state.ticketText ||
                            "携童票" === this.state.ticketText ||
                            this.checkBirthIsKid()
                          );
                        },
                      },
                      {
                        key: "checkBirthIsKid",
                        value: function () {
                          var e = this.state,
                            t = e.cardInfo,
                            a = e.chooseBirth,
                            i = "";
                          switch (t.type && parseInt(t.type)) {
                            case 1:
                              var n = t.no.substring(6, 14);
                              i = g()(n).format(S);
                              break;
                            case 2:
                              i = a;
                          }
                          return (
                            (g()().valueOf() - g()(i).valueOf()) / 864e5 <= 5840
                          );
                        },
                      },
                      {
                        key: "onClickCardType",
                        value: function (e) {
                          var t = this.state.cardInfo,
                            a = X.find(function (t) {
                              return t.type == e;
                            });
                          t.type !== e &&
                            this.setState({
                              cardInfo: { type: a.type, text: a.text, no: "" },
                            });
                        },
                      },
                      {
                        key: "onClickTicketType",
                        value: function (e) {
                          this.setState({ ticketText: e.ticketType });
                        },
                      },
                      {
                        key: "onChangePasCNName",
                        value: function (e) {
                          var t = (e.detail.value || "").trim();
                          this.setState({ pasCNName: t.toUpperCase() });
                        },
                      },
                      {
                        key: "onChangeCardNumber",
                        value: function (e) {
                          var t = this.state.cardInfo,
                            a = (e.detail.value || "").trim();
                          this.setState({
                            cardInfo: (0, r.Z)((0, r.Z)({}, t), {}, { no: a }),
                          });
                        },
                      },
                      {
                        key: "onChangePasENFirstName",
                        value: function (e) {
                          var t = (e.detail.value || "").trim();
                          this.setState({ pasENFirstName: t });
                        },
                      },
                      {
                        key: "onChangePasENLastName",
                        value: function (e) {
                          var t = (e.detail.value || "").trim();
                          this.setState({ pasENLastName: t });
                        },
                      },
                      {
                        key: "onClickOcr",
                        value: function () {
                          var e = this;
                          C.Z.ocr(
                            {
                              bizType: "TRA",
                              title: "证件识别",
                              source: "busEditPassenger",
                            },
                            function (t) {
                              t &&
                                e.setState({
                                  cardInfo: {
                                    type: "1",
                                    text: "身份证",
                                    no: t.idCardNo,
                                  },
                                  pasCNName: t.name,
                                  cardOcrModalVisible: !0,
                                  cardOcrModalInfo: {
                                    name: t.name,
                                    no: t.idCardNo,
                                  },
                                });
                            }
                          );
                        },
                      },
                      {
                        key: "onClickCardOcrConfirm",
                        value: function () {
                          this.setState({ cardOcrModalVisible: !1 }),
                            this.onClickSave();
                        },
                      },
                      {
                        key: "onClickCardOcrCancel",
                        value: function () {
                          this.setState({ cardOcrModalVisible: !1 });
                        },
                      },
                      {
                        key: "onClickChooseBirth",
                        value: function (e) {
                          this.setState({ chooseBirth: e.detail.value });
                        },
                      },
                      {
                        key: "doBusNewTraceInfo",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1;
                          this.ubtTrace(
                            1 === t ? "BUS_Bus_C_click" : "BUS_Bus_O_show",
                            (0, r.Z)(
                              {
                                pageId: this.pageId,
                                type: v.default.jetpack,
                                utmSource: (0, w.bL)(),
                              },
                              e
                            )
                          );
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.isNew,
                            i = t.isTieyou,
                            n = t.ticketText,
                            s = t.pasCNName,
                            c = t.pasENFirstName,
                            r = t.pasENLastName,
                            o = t.cardInfo,
                            l = t.chooseBirth,
                            d = t.supportCardList,
                            u = t.supportTicketList,
                            h = t.cardOcrModalVisible,
                            p = t.cardOcrModalInfo,
                            m = t.isShowChildConfirmModal,
                            f =
                              1 === (null == u ? void 0 : u.length) &&
                              u.find(function (e) {
                                return "成人票" === e.ticketType;
                              });
                          return (0, V.BX)(k.View, {
                            className: (i ? "ty" : "zx") + " edit-passenger",
                            children: [
                              (0, V.BX)(k.View, {
                                className: "ticket-wrap ".concat(
                                  f ? "common" : ""
                                ),
                                children: [
                                  v.default.isWechat &&
                                    (0, V.tZ)(k.View, {
                                      className: "ocr-content-new",
                                      children: (0, V.BX)(k.View, {
                                        className: "ocr-btn",
                                        id: "AdBe",
                                        onClick: this.onClickOcr,
                                        children: [
                                          (0, V.tZ)(k.Text, {
                                            className: "iconfont ifont-scan",
                                          }),
                                          (0, V.tZ)(k.Text, {
                                            children: "扫描身份证快速添加",
                                          }),
                                        ],
                                      }),
                                    }),
                                  u[0] &&
                                    (0, V.BX)(k.View, {
                                      className: "ticket-content",
                                      children: [
                                        f &&
                                          (0, V.BX)(k.Block, {
                                            children: [
                                              (0, V.tZ)(k.View, {
                                                className: "title",
                                                children: "仅限成人票",
                                              }),
                                              (0, V.BX)(k.View, {
                                                className: "desc",
                                                children: [
                                                  "该班次仅支持",
                                                  (0, V.tZ)(k.Text, {
                                                    className: "color",
                                                    children: "成人票",
                                                  }),
                                                  "购买，如需购买儿童票、携童票请联系车站咨询具体情况",
                                                ],
                                              }),
                                            ],
                                          }),
                                        !f &&
                                          (0, V.BX)(k.Block, {
                                            children: [
                                              (0, V.tZ)(k.View, {
                                                className: "title",
                                                children: "选择票种",
                                              }),
                                              (0, V.tZ)(k.View, {
                                                className: "list",
                                                children: u.map(function (
                                                  t,
                                                  a
                                                ) {
                                                  return (0, V.BX)(
                                                    k.View,
                                                    {
                                                      className:
                                                        "item" +
                                                        (t.ticketType == n
                                                          ? " cur "
                                                          : ""),
                                                      id: "AdBf",
                                                      onClick:
                                                        e.onClickTicketType.bind(
                                                          e,
                                                          t
                                                        ),
                                                      children: [
                                                        (0, V.tZ)(k.View, {
                                                          className:
                                                            "check-icon",
                                                        }),
                                                        (0, V.BX)(k.View, {
                                                          className: "center",
                                                          children: [
                                                            (0, V.BX)(k.View, {
                                                              className:
                                                                "point",
                                                              children: [
                                                                (0, V.tZ)(
                                                                  k.View,
                                                                  {
                                                                    className:
                                                                      "name",
                                                                    children:
                                                                      t.ticketType,
                                                                  }
                                                                ),
                                                                (0, V.BX)(
                                                                  k.View,
                                                                  {
                                                                    className:
                                                                      "price",
                                                                    children: [
                                                                      (0, V.BX)(
                                                                        k.Text,
                                                                        {
                                                                          children:
                                                                            [
                                                                              "¥",
                                                                              t.ticketPrice,
                                                                            ],
                                                                        }
                                                                      ),
                                                                      (0, V.tZ)(
                                                                        k.Text,
                                                                        {
                                                                          className:
                                                                            "price-txt",
                                                                          children:
                                                                            "/张",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, V.tZ)(k.View, {
                                                              className: "txt",
                                                              children:
                                                                t.desc.map(
                                                                  function (
                                                                    e,
                                                                    t
                                                                  ) {
                                                                    return (0,
                                                                    V.tZ)(
                                                                      k.Text,
                                                                      {
                                                                        className:
                                                                          1 ===
                                                                          t
                                                                            ? "red-txt"
                                                                            : "",
                                                                        children:
                                                                          e,
                                                                      },
                                                                      "i"
                                                                    );
                                                                  }
                                                                ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    },
                                                    a
                                                  );
                                                }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, V.BX)(k.View, {
                                className: "input-wrap ".concat(
                                  f ? "common" : ""
                                ),
                                children: [
                                  2 != o.type &&
                                    (0, V.tZ)(k.Block, {
                                      children: (0, V.BX)(k.View, {
                                        className: "item",
                                        children: [
                                          (0, V.tZ)(k.View, {
                                            className: "label",
                                            children: "姓名",
                                          }),
                                          (0, V.tZ)(k.View, {
                                            className: "content",
                                            children: (0, V.tZ)(k.Input, {
                                              className: "content-input",
                                              placeholderClass:
                                                "content-input-focus",
                                              placeholder: "请输入您的姓名",
                                              value: s,
                                              type: "text",
                                              onInput: this.onChangePasCNName,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  2 == o.type &&
                                    (0, V.BX)(k.Block, {
                                      children: [
                                        (0, V.BX)(k.View, {
                                          className: "item",
                                          children: [
                                            (0, V.tZ)(k.View, {
                                              className: "label",
                                              children: "英文姓",
                                            }),
                                            (0, V.tZ)(k.View, {
                                              className: "content",
                                              children: (0, V.tZ)(k.Input, {
                                                className: "content-input",
                                                placeholderClass:
                                                  "content-input-focus",
                                                placeholder: "英文姓/Sur name",
                                                value: c,
                                                type: "text",
                                                onInput:
                                                  this.onChangePasENFirstName,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, V.BX)(k.View, {
                                          className: "item",
                                          children: [
                                            (0, V.tZ)(k.View, {
                                              className: "label",
                                              children: "姓名",
                                            }),
                                            (0, V.tZ)(k.View, {
                                              className: "content",
                                              children: (0, V.tZ)(k.Input, {
                                                className: "content-input",
                                                placeholderClass:
                                                  "content-input-focus",
                                                placeholder:
                                                  "英文名/Given name",
                                                value: r,
                                                type: "text",
                                                onInput:
                                                  this.onChangePasENLastName,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  d[0] &&
                                    1 === d.length &&
                                    -1 !== d.indexOf("身份证") &&
                                    (0, V.tZ)(k.Block, {
                                      children: (0, V.BX)(k.View, {
                                        className: "item",
                                        children: [
                                          (0, V.tZ)(k.View, {
                                            className: "label",
                                            children: "身份证",
                                          }),
                                          (0, V.tZ)(k.View, {
                                            className: "content",
                                            children: (0, V.tZ)(k.Input, {
                                              className: "content-input",
                                              placeholderClass:
                                                "content-input-focus",
                                              placeholder: "与乘车证件一致",
                                              value: o.no,
                                              type: "idcard",
                                              onInput: this.onChangeCardNumber,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  d[0] &&
                                    d.length > 1 &&
                                    -1 !== d.indexOf("身份证") &&
                                    -1 !== d.indexOf("护照") &&
                                    (0, V.BX)(k.Block, {
                                      children: [
                                        (0, V.BX)(k.View, {
                                          className: "item",
                                          children: [
                                            (0, V.tZ)(k.View, {
                                              className: "label",
                                              children: "证件类型",
                                            }),
                                            (0, V.BX)(k.View, {
                                              className: "content",
                                              children: [
                                                (0, V.BX)(k.View, {
                                                  className:
                                                    "card-type" +
                                                    (1 == o.type
                                                      ? " cur "
                                                      : ""),
                                                  id: "AdBg",
                                                  onClick:
                                                    this.onClickCardType.bind(
                                                      this,
                                                      "1"
                                                    ),
                                                  children: [
                                                    (0, V.tZ)(k.Text, {
                                                      className: "icon-check",
                                                    }),
                                                    (0, V.tZ)(k.Text, {
                                                      className: "type-name",
                                                      children: "身份证",
                                                    }),
                                                  ],
                                                }),
                                                (0, V.BX)(k.View, {
                                                  className:
                                                    "card-type" +
                                                    (2 == o.type
                                                      ? " cur "
                                                      : ""),
                                                  id: "AdBh",
                                                  onClick:
                                                    this.onClickCardType.bind(
                                                      this,
                                                      "2"
                                                    ),
                                                  children: [
                                                    (0, V.tZ)(k.Text, {
                                                      className: "icon-check",
                                                    }),
                                                    (0, V.tZ)(k.Text, {
                                                      className: "type-name",
                                                      children: "护照",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, V.BX)(k.View, {
                                          className: "item",
                                          children: [
                                            (0, V.tZ)(k.View, {
                                              className: "label",
                                              children:
                                                2 != o.type
                                                  ? "证件号码"
                                                  : "护照号码",
                                            }),
                                            (0, V.tZ)(k.View, {
                                              className: "content",
                                              children: (0, V.tZ)(k.Input, {
                                                className: "content-input",
                                                placeholderClass:
                                                  "content-input-focus",
                                                placeholder: "与乘车证件一致",
                                                value: o.no,
                                                type:
                                                  2 != o.type
                                                    ? "idcard"
                                                    : "text",
                                                onInput:
                                                  this.onChangeCardNumber,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  2 == o.type &&
                                    (0, V.tZ)(k.Block, {
                                      children: (0, V.BX)(k.View, {
                                        className: "item",
                                        children: [
                                          (0, V.tZ)(k.View, {
                                            className: "label",
                                            children: "出生日期",
                                          }),
                                          (0, V.BX)(k.Picker, {
                                            mode: "date",
                                            classname: "date-picker",
                                            onChange: this.onClickChooseBirth,
                                            children: [
                                              (0, V.tZ)(k.View, {
                                                className: "content",
                                                children: (0, V.tZ)(k.View, {
                                                  className:
                                                    "content-input ".concat(
                                                      l
                                                        ? ""
                                                        : "content-input-focus"
                                                    ),
                                                  children:
                                                    l || "请输入出生日期",
                                                }),
                                              }),
                                              (0, V.tZ)(k.View, {
                                                className: "arraw",
                                                id: "AdBi",
                                                onClick:
                                                  this.onClickChooseBirth,
                                                children: (0, V.tZ)(k.Text, {
                                                  className:
                                                    "ifont-arr iconfont",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                              (0, V.BX)(k.View, {
                                className: "tips-box",
                                children: [
                                  (0, V.tZ)(k.View, {
                                    className: "tit",
                                    children:
                                      "请您在编辑/新增乘客前仔细阅读以下内容：",
                                  }),
                                  (0, V.BX)(k.View, {
                                    children: [
                                      "根据实名制要求，购买火车票、飞机票、汽车票需提交乘客身份证件 信息，并需在乘车/机时出具对应身份证件用于验证，请确保录入信 息真实有效。",
                                      v.default.isTieyou ? "铁友" : "智行",
                                      "将通过加密等方式保护您录入的身份证件信息，且 仅在订票过程中授权提供给与您进行交易的服务商/承运人。",
                                    ],
                                  }),
                                ],
                              }),
                              (0, V.tZ)(k.View, {
                                className: "fixedBtn",
                                children: (0, V.tZ)(k.Button, {
                                  className: "btn",
                                  id: "AdBj",
                                  onClick: this.onClickSave,
                                  children: a ? "确定添加" : "保存",
                                }),
                              }),
                              (0, V.tZ)(I, {
                                visible: h,
                                info: p,
                                onConfirm:
                                  this.onClickCardOcrConfirm.bind(this),
                                onCancel: this.onClickCardOcrCancel.bind(this),
                              }),
                              (0, V.tZ)(x.Z, {
                                isShow: m,
                                ref: function (t) {
                                  return (e.$PersonSaveTip = t);
                                },
                                isHideSingleModule: !0,
                                doBusTraceInfo:
                                  this.doBusNewTraceInfo.bind(this),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(m.default.Component))
              ) || i;
          Page(
            (0, n.createPageConfig)(
              M,
              "pages/bus/editPassenger/index",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [86230, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(68129);
        }),
          e.O();
      },
    ]);
})();
