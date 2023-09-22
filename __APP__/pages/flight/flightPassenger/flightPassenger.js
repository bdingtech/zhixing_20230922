!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    require("../sub-common/87dd7ca508f26cc44a96a97518946752.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [45640],
      {
        84458: function (e, t, a) {
          var s,
            i = a(32180),
            n = a(90129),
            r = a(57042),
            c = a(24460),
            l = a(21867),
            o = a(86066),
            p = a(79301),
            d = a(298),
            m = a(95308),
            h = a(52500),
            u = a(71515),
            g = (a(92954), a(48792)),
            N = a.n(g),
            f = a(3205),
            Z = a(79792),
            w = a(86977),
            y = a(58676),
            T = a(55916),
            C = a(83016),
            v = a(59086),
            b = a(8271),
            V = a.n(b),
            B = a(49120),
            D = a(79910),
            I = a(77900),
            x = a(2326),
            k = a(13025),
            E = a(45245),
            L = a(81957),
            X = a(48813),
            F = "YYYY-MM-DD",
            S = {
              passengerID: "",
              passengerType: "",
              passengerName: "",
              passengerENFirstName: "",
              middleName: "",
              passengerENLastName: "",
              passportType: "",
              passportCode: "",
              passengerBirth: "",
              mobile: "",
              nationality: "",
              cardTimeLimit: "",
              gender: "",
              issueAt: "",
            },
            P = (0, w.D8)("enableCheckMobile"),
            A = {
              COUNTRY_LIST: [],
              pageId: Z.default.isTieyou ? "10650016362" : "10320613378",
              data: {
                isTieyou: Z.default.isTieyou,
                passenger: {},
                nameENInput: !1,
                flightDepartDate: "",
                cardTypeList: [
                  "身份证",
                  "护照",
                  "台胞证",
                  "回乡证",
                  "军人证",
                  "户口簿",
                  "出生证明",
                  "港澳台居民居住证",
                ],
                showTypeList: !1,
                birthDateEndDate: "",
                mask: !1,
                maskType: "",
                transition: !1,
                nameSpec: !1,
                ENNameSpec: !1,
                showConfirmInfo: !1,
                isChildBaby: !1,
                nationalityInput: !1,
                cardTimeLimitInput: !1,
                birthDayInput: !1,
                pasNationalityStr: "",
              },
              onLoad: function (e) {
                var t = this;
                return (0, m.Z)(
                  (0, p.Z)().mark(function a() {
                    var s, i, n, r, c, l, o, m, h, u;
                    return (0, p.Z)().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (s = e.data),
                              (n = (i = void 0 === s ? {} : s).passenger),
                              (r = void 0 === n ? {} : n),
                              (c = i.flightDepartDate),
                              (l = void 0 === c ? "" : c),
                              (o = (0, d.Z)((0, d.Z)({}, S), r)).passportType ||
                                (o.passportType = "身份证"),
                              (a.next = 6),
                              t.getCountryName(o.nationality)
                            );
                          case 6:
                            (m = a.sent),
                              (h = l ? V()(l).format(F) : V()().format(F)),
                              (u = o.passengerName),
                              t.setData({
                                isEdit: u,
                                passenger: o,
                                nameENInput: [
                                  "护照",
                                  "回乡证",
                                  "台胞证",
                                ].includes(o.passportType),
                                birthDateEndDate: h,
                                flightDepartDate: l,
                                nationalityInput: x.Z.isNeedNationalityField(
                                  o.passportType
                                ),
                                cardTimeLimitInput:
                                  x.Z.isNeedCardTimeLimitField(o.passportType),
                                genderInput: x.Z.isNeedGenderField(
                                  o.passportType
                                ),
                                birthDayInput: x.Z.isNeedBirthDayField(
                                  o.passportType
                                ),
                                pasNationalityStr: m,
                              }),
                              t.phoneNumberRef &&
                                (t.phoneNumberRef.value =
                                  E.Z.initSplitFormatPhone(o.mobile)),
                              t.passportCodeRef &&
                                (t.passportCodeRef.value =
                                  E.Z.initSplitFormatIdentity(o.passportCode)),
                              D.Z.setTitle(u ? "编辑乘机人" : "新增乘机人");
                          case 13:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                  })
                )();
              },
              onShow: function () {},
              getCountryName: function (e) {
                return (0, m.Z)(
                  (0, p.Z)().mark(function t() {
                    var a, s, i, n, r, c;
                    return (0, p.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (a = { keys: ["mini-fe-12306-country"] }),
                              (t.next = 3),
                              (0, k.SZ)(a)
                            );
                          case 3:
                            if (1 !== (s = t.sent).resultCode) {
                              t.next = 9;
                              break;
                            }
                            return (
                              (n = (s || {}).configDataList),
                              (r = (
                                (void 0 === n ? [] : n).find(function (e) {
                                  return "mini-fe-12306-country" === e.key;
                                }) || {}
                              ).data),
                              (c =
                                (null ===
                                  (i = r.find(function (t) {
                                    return t.code === e;
                                  })) || void 0 === i
                                  ? void 0
                                  : i.name) || ""),
                              t.abrupt("return", c)
                            );
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              cnNameChange: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger,
                  s = (0, d.Z)(
                    (0, d.Z)({}, a),
                    {},
                    { passengerName: t.trim() }
                  );
                this.setData({ passenger: s });
              },
              enFirstNameChange: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger,
                  s = (0, d.Z)(
                    (0, d.Z)({}, a),
                    {},
                    { passengerENFirstName: t.trim().toUpperCase() }
                  );
                this.setData({ passenger: s });
              },
              enNameLastChange: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger,
                  s = (0, d.Z)(
                    (0, d.Z)({}, a),
                    {},
                    { passengerENLastName: t.trim().toUpperCase() }
                  );
                this.setData({ passenger: s });
              },
              toggleCardType: function () {
                var e = this,
                  t = this.data.showTypeList;
                this.setData({ mask: !t, maskType: "card", showTypeList: !t }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              chooseType: function (e) {
                var t = this.data.passenger,
                  a = (0, d.Z)((0, d.Z)({}, t), {}, { passportType: e });
                this.setData({
                  passenger: a,
                  nameENInput: ["护照", "回乡证", "台胞证"].includes(e),
                  nationalityInput: x.Z.isNeedNationalityField(e),
                  genderInput: x.Z.isNeedGenderField(e),
                  cardTimeLimitInput: x.Z.isNeedCardTimeLimitField(e),
                  birthDayInput: x.Z.isNeedBirthDayField(e),
                }),
                  this.toggleCardType();
              },
              refPassportCode: function (e) {
                this.passportCodeRef = e;
              },
              passportCodeInput: function (e) {
                var t = e.detail,
                  a = t.value,
                  s = t.keyCode,
                  i = this.data.passenger;
                if (null == a || !a.trim())
                  return (
                    (this.passportCodeRef.value = ""),
                    void this.setData({
                      passenger: (0, d.Z)(
                        (0, d.Z)({}, i),
                        {},
                        { passportCode: "" }
                      ),
                    })
                  );
                if ("身份证" === e.currentTarget.dataset.type) {
                  var n = E.Z.splitFormatIdentity({ value: a, keyCode: s });
                  n !== a && (this.passportCodeRef.value = n);
                }
                var r = (0, d.Z)(
                  (0, d.Z)({}, i),
                  {},
                  { passportCode: a.replace(/\s/g, "").toUpperCase() }
                );
                this.setData({ passenger: r });
              },
              refPhoneNumber: function (e) {
                this.phoneNumberRef = e;
              },
              phoneNumberInput: function (e) {
                var t = e.detail,
                  a = t.value,
                  s = t.keyCode;
                if (null != a && a.trim()) {
                  var i = E.Z.splitFormatPhone({ value: a, keyCode: s });
                  i != a && (this.phoneNumberRef.value = i);
                  var n = this.data.passenger,
                    r = (0, d.Z)(
                      (0, d.Z)({}, n),
                      {},
                      { mobile: a.replace(/\s/g, "") }
                    );
                  this.setData({ passenger: r });
                } else this.phoneNumberRef.value = "";
              },
              birthdayChange: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger,
                  s = (0, d.Z)(
                    (0, d.Z)({}, a),
                    {},
                    { passengerBirth: V()(t).format(F) }
                  );
                this.setData({ passenger: s });
              },
              handleClick: function () {
                var e = this.data,
                  t = e.passenger,
                  a = e.nameENInput,
                  s = e.flightDepartDate,
                  i = e.nationalityInput,
                  n = e.cardTimeLimitInput,
                  r = e.genderInput,
                  c = D.Z.deepCopy(t);
                if (!c.passportType) return (0, B.showToast)("请选择证件类型");
                if (a) {
                  if (!c.passengerENFirstName || !c.passengerENLastName)
                    return (0, B.showToast)("名字不能为空");
                  if (
                    !I.Z.isValidEnName(c.passengerENFirstName) ||
                    !I.Z.isValidEnName(c.passengerENLastName)
                  )
                    return (0, B.showToast)("无效的姓名！");
                } else {
                  if (!c.passengerName) return (0, B.showToast)("名字不能为空");
                  if (!(0, C.r1)(c)) return (0, B.showToast)("无效的姓名！");
                }
                if (!c.passportCode)
                  return (0, B.showToast)("证件号码不能为空！");
                if (!I.Z.isValidIdCode(c.passportType, c.passportCode))
                  return (0, B.showToast)("无效的证件号码！");
                if (
                  (("身份证" !== c.passportType &&
                    "户口簿" !== c.passportType) ||
                    (c.passengerBirth = I.Z.getBirthFromCode(c.passportCode)),
                  !c.passengerBirth || !new Date(c.passengerBirth))
                )
                  return (0, B.showToast)("无效的生日日期");
                var l = V()().format(F),
                  o = (0, C.PX)(c, s);
                if (l === c.passengerBirth)
                  return (0, B.showToast)("无效的生日日期");
                if ("未满14天" === o)
                  return (0, B.showToast)(
                    "航班起飞当日，未满14天的婴儿，请至航空公司柜台申请购买机票"
                  );
                if (this.checkPassportByAge(c.passportType, c.passengerBirth)) {
                  if (P && !c.mobile)
                    return (0, B.showToast)("手机号码不能为空");
                  if (c.mobile && !I.Z.isMobile(c.mobile))
                    return (0, B.showToast)("手机号格式不正确");
                  if (r && !c.gender) return (0, B.showToast)("性别不能为空");
                  if (i && !c.nationality)
                    return (0, B.showToast)("国籍不能为空");
                  if (n) {
                    if (!c.cardTimeLimit)
                      return (0, B.showToast)("证件有效期不能为空");
                    if (V()(c.cardTimeLimit).isBefore(l))
                      return (0, B.showToast)("无效的证件有效期");
                  } else
                    c.cardTimeLimit = x.Z.getDefaultCardTimeLimit(
                      c.passportType
                    );
                  this.setData({
                    passenger: (0, d.Z)(
                      (0, d.Z)({}, t),
                      {},
                      {
                        passengerBirth: c.passengerBirth,
                        cardTimeLimit: c.cardTimeLimit,
                      }
                    ),
                    isChildBaby: "儿童票" === o || "婴儿票" === o,
                  }),
                    this.toggleConfirmInfo();
                }
              },
              toggleConfirmInfo: function () {
                var e = this,
                  t = this.data.showConfirmInfo;
                this.setData({
                  mask: !t,
                  maskType: "confirm",
                  showConfirmInfo: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              persistUpdatedPassenger: function (e) {
                try {
                  v.Uh.getAsync().then(function (t) {
                    var a = t || [];
                    a.some(function (t) {
                      return e == t;
                    }) &&
                      (a = a.filter(function (t) {
                        return e != t;
                      })),
                      a.unshift(e),
                      v.Uh.setAsync(a);
                  });
                } catch (e) {
                  console.log(e);
                }
              },
              savePassenger: function () {
                var e = this,
                  t = this.data,
                  a = t.passenger,
                  s = t.nameENInput,
                  i = t.flightDepartDate,
                  n = D.Z.deepCopy(a);
                (n.passengerType = (0, C.PX)(n, i)),
                  s
                    ? ((n.passengerName = ""), (n.name = ""))
                    : ((n.passengerENFirstName = ""),
                      (n.passengerENLastName = ""));
                var r = { commonPassengerInfo: n };
                console.log(n),
                  (0, B.showLoading)(),
                  (0, T.uK)(r)
                    .then(function (t) {
                      if (1 != t.resultCode)
                        return e.showCommonDialog(t.resultMessage);
                      e.invokeCallback({
                        passenger: n,
                        newPassengerID: t.passengerId,
                      }),
                        e.persistUpdatedPassenger(t.passengerId),
                        setTimeout(function () {
                          e.navigateBack();
                        }, 100);
                    })
                    .catch(function () {
                      return e.showCommonDialog("网络错误，请稍候再试");
                    })
                    .finally(function () {
                      e.toggleConfirmInfo(), (0, B.hideLoading)();
                    });
              },
              checkPassportByAge: function (e, t) {
                var a = this.data.flightDepartDate,
                  s = new Date(t.replace(/\-/g, "/")).getTime(),
                  i = a ? new Date(a.replace(/\-/g, "/")) : new Date();
                i.setFullYear(i.getFullYear() - 2);
                var n = a ? new Date(a.replace(/\-/g, "/")) : new Date();
                n.setFullYear(n.getFullYear() - 16);
                var r = a ? new Date(a.replace(/\-/g, "/")) : new Date();
                return (
                  r.setFullYear(r.getFullYear() - 100),
                  "户口簿" === e && s <= n
                    ? this.showCommonDialog("年龄已满16岁，不允许使用户口簿")
                    : "出生证明" === e && s <= i
                    ? this.showCommonDialog("年龄已满2岁，不允许使用出生证明")
                    : !("身份证" === e && s <= r) ||
                      this.showCommonDialog("身份证出生日期错误，请重新填写")
                );
              },
              toChildGuide: function () {
                f.Z.twebview({
                  data: {
                    url: "https://pages.ctrip.com/ztrip/document/babyguide.html",
                  },
                });
              },
              closeMask: function (e) {
                var t = e.currentTarget.dataset.type;
                "nameSpec" === t
                  ? this.toggleNameSpec()
                  : "card" === t
                  ? this.toggleCardType()
                  : "confirm" === t
                  ? this.toggleConfirmInfo()
                  : "enNameSpec" === t && this.toggleENNameSpec();
              },
              toggleNameSpec: function () {
                var e = this,
                  t = this.data.nameSpec;
                this.setData({ mask: !t, maskType: "nameSpec", nameSpec: !t }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              toggleENNameSpec: function () {
                var e = this,
                  t = this.data.ENNameSpec;
                this.setData({
                  mask: !t,
                  maskType: "enNameSpec",
                  ENNameSpec: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              handleSelectNationality: function () {
                var e = this;
                return (0, m.Z)(
                  (0, p.Z)().mark(function t() {
                    var a, s, i;
                    return (0, p.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (a = e.data.passenger),
                                (t.prev = 1),
                                (t.next = 4),
                                e.navigateToAsync({
                                  url: "/functionalPages/country/country",
                                })
                              );
                            case 4:
                              (s = t.sent),
                                (i = s.res) &&
                                  e.setData({
                                    passenger: (0, d.Z)(
                                      (0, d.Z)({}, a),
                                      {},
                                      { nationality: i.code }
                                    ),
                                    pasNationalityStr: i.name,
                                  }),
                                (t.next = 12);
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t.catch(1)),
                                console.log(t.t0);
                            case 12:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 9]]
                    );
                  })
                )();
              },
              cardLimitChange: function (e) {
                var t = (e.target || {}).value,
                  a = this.data.passenger;
                this.setData({
                  passenger: (0, d.Z)(
                    (0, d.Z)({}, a),
                    {},
                    { cardTimeLimit: t }
                  ),
                });
              },
              handleGenderChange: function (e) {
                var t = e.target,
                  a = this.data.passenger;
                this.setData({
                  passenger: (0, d.Z)((0, d.Z)({}, a), {}, { gender: t.value }),
                });
              },
            },
            _ =
              (0, L.h)()(
                (s =
                  N()(A)(
                    (s = (function (e) {
                      (0, l.Z)(a, e);
                      var t = (0, o.Z)(a);
                      function a() {
                        return (0, r.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.nameENInput,
                                s = t.passenger,
                                i = t.birthDateEndDate,
                                r = t.transition,
                                c = t.mask,
                                l = t.maskType,
                                o = t.showTypeList,
                                p = t.cardTypeList,
                                d = t.isTieyou,
                                m = t.nameSpec,
                                g = t.showConfirmInfo,
                                N = t.ENNameSpec,
                                f = t.isChildBaby,
                                Z = t.nationalityInput,
                                w = t.cardTimeLimitInput,
                                T = t.birthDayInput,
                                C = t.genderInput,
                                v = t.pasNationalityStr,
                                b = (function (e) {
                                  return [
                                    V()(e).add(1, "day").format(F),
                                    V()(e)
                                      .add(30, "year")
                                      .endOf("year")
                                      .format(F),
                                  ];
                                })(t.flightDepartDate),
                                B = (0, n.Z)(b, 2),
                                D = B[0],
                                I = B[1];
                              return (0, X.BX)(X.HY, {
                                children: [
                                  (0, X.BX)(u.View, {
                                    className: "section-text-warp",
                                    children: [
                                      (0, X.tZ)(u.View, {
                                        className: "pasg-tips",
                                        children:
                                          "请仔细核对乘机人、航班信息，若信息有误可能无法登机",
                                      }),
                                      !a &&
                                        (0, X.BX)(u.View, {
                                          className: "passenger-item",
                                          children: [
                                            (0, X.BX)(u.View, {
                                              className: "title",
                                              children: [
                                                "姓名",
                                                (0, X.tZ)(u.Text, {
                                                  className:
                                                    "iconfont ifont-detail",
                                                  id: "AcEA",
                                                  onClick: this.toggleNameSpec,
                                                }),
                                              ],
                                            }),
                                            (0, X.tZ)(u.View, {
                                              className: "cont",
                                              children: (0, X.tZ)(u.Input, {
                                                className:
                                                  "passenger-item_input",
                                                placeholder:
                                                  "请确保符合填写规范",
                                                type: "text",
                                                maxlength: "50",
                                                placeholderClass:
                                                  "input-placeholder",
                                                value: s.passengerName,
                                                onInput: this.cnNameChange,
                                                onBlur: this.cnNameChange,
                                              }),
                                            }),
                                          ],
                                        }),
                                      a &&
                                        (0, X.BX)(u.View, {
                                          className: "passenger-item",
                                          children: [
                                            (0, X.BX)(u.View, {
                                              className: "title",
                                              children: [
                                                "姓(拼音)",
                                                (0, X.tZ)(u.Text, {
                                                  className:
                                                    "iconfont ifont-detail",
                                                  id: "AcEB",
                                                  onClick:
                                                    this.toggleENNameSpec,
                                                }),
                                              ],
                                            }),
                                            (0, X.tZ)(u.View, {
                                              className: "cont",
                                              children: (0, X.tZ)(u.Input, {
                                                className:
                                                  "passenger-item_input",
                                                placeholder: "如：LI,Surname",
                                                type: "text",
                                                maxlength: "50",
                                                placeholderClass:
                                                  "input-placeholder",
                                                value: s.passengerENLastName,
                                                onInput: this.enNameLastChange,
                                                onBlur: this.enNameLastChange,
                                              }),
                                            }),
                                          ],
                                        }),
                                      a &&
                                        (0, X.BX)(u.View, {
                                          className: "passenger-item",
                                          children: [
                                            (0, X.BX)(u.View, {
                                              className: "title",
                                              children: [
                                                "名(拼音)",
                                                (0, X.tZ)(u.Text, {
                                                  className:
                                                    "iconfont ifont-detail",
                                                  id: "AcEC",
                                                  onClick:
                                                    this.toggleENNameSpec,
                                                }),
                                              ],
                                            }),
                                            (0, X.tZ)(u.View, {
                                              className: "cont",
                                              children: (0, X.tZ)(u.Input, {
                                                className:
                                                  "passenger-item_input",
                                                placeholder:
                                                  "如：LEI,Givenname",
                                                type: "text",
                                                maxlength: "50",
                                                placeholderClass:
                                                  "input-placeholder",
                                                value: s.passengerENFirstName,
                                                onInput: this.enFirstNameChange,
                                                onBlur: this.enFirstNameChange,
                                              }),
                                            }),
                                          ],
                                        }),
                                      T &&
                                        (0, X.BX)(u.View, {
                                          className: "passenger-item",
                                          children: [
                                            (0, X.tZ)(u.View, {
                                              className: "title",
                                              children: "出生日期",
                                            }),
                                            (0, X.tZ)(u.View, {
                                              className: "cont",
                                              children: (0, X.tZ)(u.Picker, {
                                                className:
                                                  "passenger-item_input",
                                                mode: "date",
                                                start: "1890-01-01",
                                                end: i,
                                                value: s.passengerBirth,
                                                onChange: this.birthdayChange,
                                                children: (0, X.tZ)(u.View, {
                                                  className:
                                                    "passenger-item_input",
                                                  children:
                                                    "" == s.passengerBirth
                                                      ? "请输入出生日期"
                                                      : s.passengerBirth,
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      C &&
                                        (0, X.BX)(u.View, {
                                          className: "passenger-item",
                                          children: [
                                            (0, X.tZ)(u.View, {
                                              className: "title",
                                              children: "性别",
                                            }),
                                            (0, X.tZ)(u.View, {
                                              className: "cont",
                                              children: (0, X.BX)(
                                                u.RadioGroup,
                                                {
                                                  className:
                                                    "gender-radio-group",
                                                  onChange:
                                                    this.handleGenderChange,
                                                  children: [
                                                    (0, X.BX)(u.Label, {
                                                      className:
                                                        "gender-radio ".concat(
                                                          "M" === s.gender
                                                            ? "checked"
                                                            : ""
                                                        ),
                                                      children: [
                                                        "男",
                                                        (0, X.tZ)(u.Radio, {
                                                          className: "radio",
                                                          value: "M",
                                                          style:
                                                            "display: none",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, X.BX)(u.Label, {
                                                      className:
                                                        "gender-radio ".concat(
                                                          "F" === s.gender
                                                            ? "checked"
                                                            : ""
                                                        ),
                                                      children: [
                                                        "女",
                                                        (0, X.tZ)(u.Radio, {
                                                          className: "radio",
                                                          value: "F",
                                                          style:
                                                            "display: none",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }
                                              ),
                                            }),
                                          ],
                                        }),
                                      (0, X.BX)(u.View, {
                                        className: "passenger-item",
                                        id: "AcED",
                                        onClick: this.toggleCardType,
                                        children: [
                                          (0, X.tZ)(u.View, {
                                            className: "title",
                                            children: "证件类型",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className: "cont",
                                            children: (0, X.tZ)(u.Text, {
                                              className: "passenger-item_input",
                                              children: s.passportType,
                                            }),
                                          }),
                                          (0, X.tZ)(u.Text, {
                                            className: "ifont-arr iconfont",
                                          }),
                                        ],
                                      }),
                                      (0, X.BX)(u.View, {
                                        className: "passenger-item",
                                        children: [
                                          (0, X.tZ)(u.View, {
                                            className: "title",
                                            children: "证件号码",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className: "cont",
                                            children: (0, X.tZ)(u.Input, {
                                              className: "passenger-item_input",
                                              placeholder:
                                                "请确保与实际乘机证件一致",
                                              placeholderClass:
                                                "input-placeholder",
                                              maxlength: "50",
                                              "data-type": s.passportType,
                                              onInput: this.passportCodeInput,
                                              ref: this.refPassportCode,
                                            }),
                                          }),
                                        ],
                                      }),
                                      w &&
                                        (0, X.BX)(u.View, {
                                          className: "passenger-item",
                                          children: [
                                            (0, X.tZ)(u.View, {
                                              className: "title",
                                              children: "证件有效期",
                                            }),
                                            (0, X.tZ)(u.View, {
                                              className: "cont",
                                              children: (0, X.tZ)(u.Picker, {
                                                mode: "date",
                                                value:
                                                  s.cardTimeLimit ||
                                                  V()()
                                                    .add(9, "year")
                                                    .add(45, "day")
                                                    .format(F),
                                                start: D,
                                                end: I,
                                                onChange: this.cardLimitChange,
                                                children: (0, X.tZ)(u.Text, {
                                                  className: "strong",
                                                  children:
                                                    s.cardTimeLimit ||
                                                    "请选择证件有效期",
                                                }),
                                              }),
                                            }),
                                            (0, X.tZ)(u.Text, {
                                              className: "ifont-arr iconfont",
                                            }),
                                          ],
                                        }),
                                      Z &&
                                        (0, X.BX)(u.View, {
                                          className: "passenger-item",
                                          id: "AcEE",
                                          onClick: this.handleSelectNationality,
                                          children: [
                                            (0, X.tZ)(u.View, {
                                              className: "title",
                                              children: "国籍",
                                            }),
                                            (0, X.tZ)(u.View, {
                                              className: "cont",
                                              children: (0, X.tZ)(u.Text, {
                                                className:
                                                  "passenger-item_input",
                                                children: v || "请选择国籍",
                                              }),
                                            }),
                                            (0, X.tZ)(u.Text, {
                                              className: "ifont-arr iconfont",
                                            }),
                                          ],
                                        }),
                                      (0, X.BX)(u.View, {
                                        className: "passenger-item",
                                        children: [
                                          (0, X.tZ)(u.View, {
                                            className: "title",
                                            children: "联系手机",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className: "cont",
                                            children: (0, X.tZ)(u.Input, {
                                              className: "passenger-item_input",
                                              placeholder:
                                                "用于接收航空公司通知",
                                              placeholderClass:
                                                "input-placeholder",
                                              maxlength: "20",
                                              onInput: this.phoneNumberInput,
                                              ref: this.refPhoneNumber,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, X.BX)(u.View, {
                                        className: "tip",
                                        id: "AcEG",
                                        onClick: this.toChildGuide,
                                        children: [
                                          (0, X.tZ)(u.View, {
                                            className: "iconfont ifont-detail",
                                          }),
                                          "儿童/婴儿预订说明",
                                        ],
                                      }),
                                      (0, X.tZ)(u.Button, {
                                        className: "btn btn-primary",
                                        hoverClass: "btn-primary_hover",
                                        id: "AcEH",
                                        onClick: this.handleClick,
                                        children: "确定",
                                      }),
                                      (0, X.BX)(u.View, {
                                        className: "agree-content",
                                        children: [
                                          (0, X.tZ)(u.View, {
                                            className: "color-primary",
                                            children:
                                              "请您在新增/编辑乘客前仔细阅读以下内容：",
                                          }),
                                          (0, X.BX)(u.Text, {
                                            className: "content",
                                            children: [
                                              "根据实名制要求，购买机票需提交乘机人身份证件信息，并在乘机时出具对应身份证件用于验证，请确保录入信息真实有效。",
                                              d ? "铁友" : "智行",
                                              "将通过加密等方式保护您录入的身份证件信息，且仅在具体订票过程中授权给与您进行交易的商户/承运人、机票分销系统服务商。",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  c &&
                                    (0, X.tZ)(u.View, {
                                      className: "mask " + (r ? "active" : ""),
                                      "data-type": l,
                                      id: "AcEI",
                                      onClick: this.closeMask,
                                    }),
                                  (0, X.tZ)(u.View, {
                                    className:
                                      "idcard-list " + (o ? "active" : ""),
                                    children: p.map(function (t) {
                                      return (0, X.tZ)(X.HY, {
                                        children: (0, X.BX)(u.View, {
                                          className: "idcard-item",
                                          id: "AcEJ",
                                          onClick: function () {
                                            return e.chooseType(t);
                                          },
                                          children: [
                                            t,
                                            s.passportType == t &&
                                              (0, X.tZ)(u.Icon, {
                                                color: d
                                                  ? "#fc6e51"
                                                  : "#0080FF",
                                                size: "14",
                                                type: "success_no_circle",
                                                className: "icon-selected",
                                              }),
                                          ],
                                        }),
                                      });
                                    }),
                                  }),
                                  m &&
                                    (0, X.BX)(u.View, {
                                      className: "name-specification",
                                      children: [
                                        (0, X.tZ)(u.View, {
                                          className: "title",
                                          children:
                                            "请确保姓名与实际乘机人证件一致",
                                        }),
                                        (0, X.tZ)(u.View, {
                                          className: "txt",
                                          children:
                                            "1.特殊符号：姓名不用输入“·”、“-”等特殊符号，例如：“汉族然·买买提”可直接输入为“汉族然买买提”",
                                        }),
                                        (0, X.tZ)(u.View, {
                                          className: "txt",
                                          children:
                                            "2. 港澳台护照：香港、澳门、台湾的护照不支持国内航班，请改用其他证件。",
                                        }),
                                        (0, X.tZ)(u.View, {
                                          className: "txt",
                                          children:
                                            "3. 姓名过长：姓名过长时请保证填写完整，否则可能无法出票。",
                                        }),
                                        (0, X.tZ)(u.View, {
                                          className: "iconfont icon-close",
                                          id: "AcEK",
                                          onClick: this.toggleNameSpec,
                                        }),
                                      ],
                                    }),
                                  g &&
                                    (0, X.BX)(u.View, {
                                      className: "pop-white",
                                      children: [
                                        (0, X.BX)(u.View, {
                                          className: "pop-content",
                                          children: [
                                            (0, X.tZ)(u.View, {
                                              className: "tit",
                                              children: "请确认乘机人信息",
                                            }),
                                            (0, X.tZ)(h.Fragment, {
                                              children:
                                                f &&
                                                (0, X.tZ)(u.View, {
                                                  className: "pasg-tips",
                                                  children:
                                                    "您正在录入未成年人信息，请确认您是该未成年人的监护人或已征得其监护人同意。",
                                                }),
                                            }),
                                            (0, X.BX)(u.View, {
                                              className: "pop-content-txt",
                                              children: [
                                                (0, X.BX)(u.View, {
                                                  className: "col",
                                                  children: [
                                                    (0, X.tZ)(u.Text, {
                                                      className: "label",
                                                      children: "姓名",
                                                    }),
                                                    (0, X.tZ)(u.Text, {
                                                      className: "txt",
                                                      children: a
                                                        ? s.passengerENLastName +
                                                          "/" +
                                                          s.passengerENFirstName
                                                        : s.passengerName,
                                                    }),
                                                  ],
                                                }),
                                                (0, X.BX)(u.View, {
                                                  className: "col",
                                                  children: [
                                                    (0, X.tZ)(u.Text, {
                                                      className: "label",
                                                      children: "出生日期",
                                                    }),
                                                    (0, X.tZ)(u.Text, {
                                                      className: "txt",
                                                      children:
                                                        s.passengerBirth,
                                                    }),
                                                  ],
                                                }),
                                                C &&
                                                  (0, X.BX)(u.View, {
                                                    className: "col",
                                                    children: [
                                                      (0, X.tZ)(u.Text, {
                                                        className: "label",
                                                        children: "性别",
                                                      }),
                                                      (0, X.tZ)(u.Text, {
                                                        className: "txt",
                                                        children: {
                                                          M: "男",
                                                          F: "女",
                                                        }[s.gender],
                                                      }),
                                                    ],
                                                  }),
                                                (0, X.BX)(u.View, {
                                                  className: "col",
                                                  children: [
                                                    (0, X.tZ)(u.Text, {
                                                      className: "label",
                                                      children: "证件类型",
                                                    }),
                                                    (0, X.tZ)(u.Text, {
                                                      className: "txt",
                                                      children: s.passportType,
                                                    }),
                                                  ],
                                                }),
                                                (0, X.BX)(u.View, {
                                                  className: "col",
                                                  children: [
                                                    (0, X.tZ)(u.Text, {
                                                      className: "label",
                                                      children: "证件号码",
                                                    }),
                                                    (0, X.tZ)(u.Text, {
                                                      className: "txt",
                                                      children: s.passportCode,
                                                    }),
                                                  ],
                                                }),
                                                w &&
                                                  (0, X.BX)(u.View, {
                                                    className: "col",
                                                    children: [
                                                      (0, X.tZ)(u.Text, {
                                                        className: "label",
                                                        children: "证件有效期",
                                                      }),
                                                      (0, X.tZ)(u.Text, {
                                                        className: "txt",
                                                        children:
                                                          s.cardTimeLimit,
                                                      }),
                                                    ],
                                                  }),
                                                Z &&
                                                  (0, X.BX)(u.View, {
                                                    className: "col",
                                                    children: [
                                                      (0, X.tZ)(u.Text, {
                                                        className: "label",
                                                        children: "国籍",
                                                      }),
                                                      (0, X.tZ)(u.Text, {
                                                        className: "txt",
                                                        children: v,
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, X.BX)(u.View, {
                                          className: "pop-btn",
                                          children: [
                                            (0, X.tZ)(u.Button, {
                                              className: "btn-grey",
                                              hoverClass: "btn_hover",
                                              id: "AcEL",
                                              onClick: this.toggleConfirmInfo,
                                              children: "返回修改",
                                            }),
                                            (0, X.tZ)(u.Button, {
                                              className: "btn-primary",
                                              hoverClass: "btn_hover",
                                              id: "AcEM",
                                              onClick: this.savePassenger,
                                              children: "保存",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, X.BX)(u.View, {
                                    className:
                                      "pop-botm " + (N ? "active" : ""),
                                    children: [
                                      (0, X.BX)(u.View, {
                                        className: "pop-botm-hd",
                                        children: [
                                          (0, X.tZ)(u.View, {
                                            className: "btn-cancel",
                                            id: "AcEN",
                                            onClick: this.toggleENNameSpec,
                                            children: "取消",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className: "tit",
                                            children: "填写姓名须知",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className:
                                              "btn-submit color-primary",
                                          }),
                                        ],
                                      }),
                                      (0, X.BX)(u.ScrollView, {
                                        className: "pop-pasg-info",
                                        scrollY: !0,
                                        children: [
                                          (0, X.tZ)(u.View, {
                                            className: "txt",
                                            children:
                                              "1.必须使用英文字符填写，并确保与乘机所持证件一致。",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className: "txt",
                                            children: "2.英文姓名的填写方法：",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className: "item",
                                            children:
                                              "• 姓名中含有特殊符号“.”“-”等时，在Surname不用输入；在Givenname中用空格代替。",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className: "item",
                                            children:
                                              "• 姓与名总长度须小于24个字符，若过长请联系航司确认缩写信息。",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className: "item",
                                            children:
                                              "• 必须按照护照显示区分姓与名，middlename填写在Givenname（名）栏中。",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className: "tit",
                                            children: "图示说明(新版护照）",
                                          }),
                                          (0, X.tZ)(u.Image, {
                                            src: "https://pic.c-ctrip.com/train/zt/flight/passport-new.jpg",
                                            mode: "widthFix",
                                          }),
                                          (0, X.tZ)(u.View, {
                                            className: "tit",
                                            children: "图示说明(老版护照）",
                                          }),
                                          (0, X.tZ)(u.Image, {
                                            src: "https://pic.c-ctrip.com/train/zt/flight/passport-old.jpg",
                                            mode: "widthFix",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, X.tZ)(y.Z, {
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
                    })(h.default.Component))
                  ) || s)
              ) || s;
          Page(
            (0, i.createPageConfig)(
              _,
              "pages/flight/flightPassenger/flightPassenger",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            59188, 35048, 70486, 97709, 6189, 22843, 6878, 14906, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(84458);
          }
        ),
          e.O();
      },
    ]);
})();
