!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [39309],
      {
        9510: function (e, t, a) {
          var i,
            s = a(32180),
            n = a(57042),
            r = a(24460),
            o = a(21867),
            c = a(86066),
            l = a(45023),
            h = a(22276),
            p = a(298),
            d = a(52500),
            m = a(71515),
            g = a(92954),
            u = a.n(g),
            N = a(48792),
            f = a.n(N),
            w = a(79910),
            V = a(79792),
            Z = a(77900),
            y = a(2326),
            C = a(49120),
            v = a(58676),
            T = a(18783),
            b = a(55916),
            k = a(8271),
            B = a.n(k),
            D = a(4102),
            x = a(28352),
            I = a(81957),
            A = a(48813),
            F = "YYYY-MM-DD",
            X = V.default.isTieyou,
            U = X ? "铁友用户" : "智行用户",
            L = "http://pic.c-ctrip.com/train/zt/wechat/avatar-default-".concat(
              X ? "ty" : "zx",
              ".png"
            ),
            P = "网络错误，请稍候再试",
            S = [
              { code: 1, title: "身份证" },
              { code: 2, title: "护照" },
              { code: 8, title: "台胞证" },
              { code: 7, title: "回乡证" },
              { code: 4, title: "军人证" },
              { code: 25, title: "户口簿" },
              { code: 27, title: "出生证明" },
              { code: 32, title: "港澳台居民居住证" },
            ],
            E = {
              passengerType: "",
              passengerID: "",
              passengerENLastName: "",
              nationality: "",
              mobile: "",
              passportCode: "",
              passportType: "身份证",
              passengerENFirstName: "",
              cardTimeLimit: "",
              passengerName: "",
              countryCode: "",
              passengerBirth: "",
              gender: "",
            },
            M = {
              pageId: X ? "10650039657" : "10650039609",
              data: {
                isTieyou: X,
                canUseGetUserProfile: w.Z.canUseGetUserProfile,
                isLogin: !0,
                status: 0,
                flightStatus: 0,
                continueAdd: !1,
                invitedList: [],
                couponList: [],
                showFlightDetail: !1,
                typeList: S,
                nameENInput: !1,
                birthDateHidden: !0,
                passenger: E,
                submitDisabled: !1,
              },
              onLoad: function (e) {
                var t = this,
                  a = e.inviteId;
                console.log(a),
                  this.setData({ inviteId: parseInt(a) }),
                  this.checkLogin(),
                  this.getOpenId().then(
                    function (e) {
                      console.log(e), t.getActivityInfo();
                    },
                    function (e) {
                      console.log(e);
                    }
                  ),
                  this.getUserInfo(),
                  w.Z.setLaunchSource({
                    loginSoureType: "wechat",
                    loginSourceName: "fltInvitePassenger",
                  });
              },
              onShow: function () {},
              checkLogin: function () {
                var e = T.ZP.isLogin;
                return this.setData({ isLogin: e }), e;
              },
              getPhoneNumberAction: function () {
                var e = this;
                this.doLogin(function () {
                  e.getActivityInfo();
                });
              },
              doLogin: function (e) {
                var t = this;
                T.ZP.doLogin()
                  .then(function () {
                    t.setData({ isLogin: !0 }), null == e || e();
                  })
                  .catch(function () {
                    (0, C.showToast)("取消登录");
                  });
              },
              getOpenId: function () {
                var e = this;
                return new Promise(function (t, a) {
                  T.ZP.openid
                    ? (e.setData({ openId: T.ZP.openid }), t(T.ZP.openid))
                    : (0, T.M9)().then(
                        function (a) {
                          var i = a.openid;
                          e.setData({ openId: i }), t(i);
                        },
                        function () {
                          a("获取openId失败");
                        }
                      );
                });
              },
              getUserInfo: function () {
                var e = this;
                w.Z.canUseGetUserProfile
                  ? (0, C.getUserProfileInfo)({ getOnly: !0 })
                      .then(function (t) {
                        e.setData({
                          wxNickName: t.nickName || "",
                          wxAvatar: t.avatarUrl || "",
                        });
                      })
                      .catch(function () {
                        e.setData({ wxNickName: "", wxAvatar: "" });
                      })
                  : u().getSetting({
                      success: function (t) {
                        t.authSetting["scope.userInfo"] &&
                          u().getUserInfo({
                            success: function (t) {
                              var a = t.userInfo,
                                i = a.nickName,
                                s = a.avatarUrl;
                              e.setData({ wxNickName: i, wxAvatar: s });
                            },
                            fail: function () {},
                          });
                      },
                    });
              },
              getUserProfileAction: function (e) {
                var t = this,
                  a = this.data,
                  i = a.wxNickName,
                  s = a.wxAvatar;
                this.setData({ submitDisabled: !0 }),
                  i && s
                    ? this.handleConfirmAction(i, s, e || "default")
                    : (0, C.getUserProfileInfo)()
                        .then(function (a) {
                          t.handleConfirmAction(
                            a.nickName || "",
                            a.avatarUrl || "",
                            e || "default"
                          ).catch();
                        })
                        .catch(function () {
                          t.handleConfirmAction(
                            X ? "铁友用户" : "智行用户",
                            L,
                            e || "default"
                          );
                        });
              },
              checkUserInfoAuthority: function (e) {
                console.log(e);
                var t = e.currentTarget.dataset.type,
                  a = this.data,
                  i = a.wxNickName,
                  s = a.wxAvatar;
                i && s
                  ? this.handleConfirmAction(i, s, t || "default")
                  : e.detail && "getUserInfo:ok" === e.detail.errMsg
                  ? this.handleConfirmAction(
                      e.detail.userInfo.nickName,
                      e.detail.userInfo.avatarUrl,
                      t || "default"
                    )
                  : this.handleConfirmAction(
                      X ? "铁友用户" : "智行用户",
                      L,
                      t || "default"
                    );
              },
              getActivityInfo: function () {
                var e = this,
                  t = { inviteId: this.data.inviteId };
                (0, x.Ds)(t)
                  .then(function (t) {
                    console.log(t);
                    var a = t || {},
                      i = a.resultCode,
                      s = a.resultMessage,
                      n = a.nickName,
                      r = a.avatar,
                      o = a.mobile,
                      c = a.expireTime,
                      l = a.isInviter,
                      h = void 0 !== l && l,
                      p = a.isInvitee,
                      d = void 0 !== p && p,
                      m = a.tripType,
                      g = e.handleSegmentsData(t.segments || []),
                      u = t.passengers || [],
                      N = t.receivableCoupons || [],
                      f = t.receivedCoupons || [],
                      w = 1 === m && g.length > 1,
                      V = e.handleCouponsData(N, f),
                      Z = V.couponList,
                      y = V.receivedCouponPrice;
                    if (1 !== i)
                      return e.showCommonDialog({
                        title: "提示",
                        content: s || "网络错误，请稍候再试~",
                      });
                    e.setData({
                      nickName: decodeURIComponent(n || ""),
                      mobile: o || "",
                      name: decodeURIComponent(n || "") || o || U,
                      avatar: r || L,
                      isInviter: h,
                      isInvitee: d,
                      expireTime: c || "",
                      tripType: m,
                      isTransfer: w,
                      segments: g,
                      invitedList: u,
                      couponList: Z,
                      receivedCouponPrice: y,
                      continueAdd: !1,
                      flightStatus: e.checkFlightDepartStatus(g),
                    }),
                      e.countDown();
                  })
                  .catch(function (t) {
                    console.log(t), e.showFailAction();
                  });
              },
              handleSegmentsData: function (e) {
                return e.map(function (e) {
                  var t = B()(e.departDateTime),
                    a = B()(e.arriveDateTime);
                  return (0,
                  p.Z)((0, p.Z)({}, e), {}, { dptDate: t.format(F), dptTime: t.format("HH:mm"), dptMonthDay: t.format("M月D日"), dptWeekDay: D.Z.getWeekDayDesc(t), arrDate: a.format(F), arrTime: a.format("HH:mm"), arrMonthDay: a.format("M月D日"), arrWeekDay: D.Z.getWeekDayDesc(a) });
                });
              },
              handleCouponsData: function (e, t) {
                return {
                  couponList: []
                    .concat((0, h.Z)(t), (0, h.Z)(e))
                    .filter(function (e) {
                      return -1 !== e.receiveFlag;
                    })
                    .slice(0, 2),
                  receivedCouponPrice: t.reduce(function (e, t) {
                    return t.price + e;
                  }, 0),
                };
              },
              checkFlightDepartStatus: function (e) {
                if (e[0] && e[0].departDateTime) {
                  var t = e[0] && e[0].departDateTime,
                    a = new Date().getTime();
                  return new Date(y.Z.formatDateWithSlash(t)).getTime() <= a
                    ? 1
                    : 0;
                }
                return 1;
              },
              countDown: function () {
                var e = this.data.expireTime;
                if (!e)
                  return console.log("无效活动"), this.setData({ status: 0 });
                var t = y.Z.countDown(e),
                  a = t.hour,
                  i = t.min,
                  s = t.sec;
                if (t.end)
                  return clearTimeout(this.timer), this.setData({ status: 2 });
                this.setData({ status: 1, hour: a, min: i, sec: s }),
                  (this.timer = setTimeout(this.countDown, 1e3));
              },
              handleCouponsClick: function () {
                var e = this,
                  t = this.data.couponList.filter(function (e) {
                    return 0 === e.receiveFlag;
                  });
                if (0 !== t.length) {
                  var a = {
                    scene: t[0].scene,
                    promotionKeys: t.map(function (e) {
                      return e.promotionKey;
                    }),
                  };
                  (0, b.gj)(a)
                    .then(function (e) {
                      console.log(e);
                      var t = e.resultCode,
                        a = e.resultMessage;
                      (0, C.showToast)(1 === t ? "领取成功" : a || "领取失败");
                    })
                    .catch(function (e) {
                      console.log(e);
                    })
                    .finally(function () {
                      e.getActivityInfo();
                    });
                }
              },
              toggleFlightDetail: function () {
                var e = this.data.showFlightDetail;
                this.setData({ showFlightDetail: !e });
              },
              toggleExistedPassengers: function () {
                var e = this,
                  t = this.data.showAllPassenger;
                if (!t && !this._requestPsger)
                  return this.getPassengers(function () {
                    e.toggleExistedPassengers();
                  });
                this.setData({
                  mask: !t,
                  maskType: "passenger",
                  showAllPassenger: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  });
              },
              getPassengers: function (e) {
                var t = this;
                (0, b.Hh)(
                  { source: "flight", getPassengerType: 3 },
                  { checkFrameworkLogin: !1, checkLogin: !1 }
                ).then(function (a) {
                  if ("no login" === y.Z.checkResponseStatus(a).message)
                    return t.setData({ isLogin: !1 });
                  var i = a.resultCode,
                    s = a.resultMessage,
                    n = a.commonPassengers || [];
                  if (-96 === i) return t.setData({ isLogin: !1 });
                  if (1 !== i) return t.showCommonDialog(s || P);
                  var r = t.handlePassengers(n);
                  t.setData({ isLogin: !0, passengersList: r }),
                    (t._requestPsger = !0),
                    e && e();
                });
              },
              handlePassengers: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                return e.map(function (e) {
                  return (0,
                  p.Z)((0, p.Z)({}, e), {}, { name: e.passengerName || "".concat(e.passengerENLastName, "/").concat(e.passengerENFirstName), passengerTypeStr: e.passengerType.slice(0, 2) });
                });
              },
              handleExistedPassengerClick: function (e) {
                var t = e.currentTarget.dataset.index,
                  a = this.data.passengersList[t];
                (a.selected = !a.selected),
                  this.setData(
                    (0, l.Z)({}, "passengersList[".concat(t, "]"), a)
                  );
              },
              onCNNameInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger;
                this.setData({
                  passenger: (0, p.Z)(
                    (0, p.Z)({}, a),
                    {},
                    { passengerName: t.trim() }
                  ),
                });
              },
              onENLastNameInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger;
                this.setData({
                  passenger: (0, p.Z)(
                    (0, p.Z)({}, a),
                    {},
                    { passengerENLastName: t.trim().toUpperCase() }
                  ),
                });
              },
              onENFirstNameInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger;
                this.setData({
                  passenger: (0, p.Z)(
                    (0, p.Z)({}, a),
                    {},
                    { passengerENFirstName: t.trim().toUpperCase() }
                  ),
                });
              },
              toggleTypeList: function () {
                var e = this,
                  t = this.data.showTypeList;
                this.setData({
                  mask: !t,
                  maskType: "typeList",
                  showTypeList: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  });
              },
              onPassportTypeClick: function (e) {
                var t = e.currentTarget.dataset.index,
                  a = this.data,
                  i = a.passenger,
                  s = a.typeList[t].title;
                this.setData({
                  passenger: (0, p.Z)((0, p.Z)({}, i), {}, { passportType: s }),
                  nameENInput: "护照" === s,
                  birthDateHidden: "身份证" === s || "户口簿" === s,
                }),
                  this.toggleTypeList();
              },
              onPassportCodeInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger;
                this.setData({
                  passenger: (0, p.Z)(
                    (0, p.Z)({}, a),
                    {},
                    { passportCode: t.trim().toUpperCase() }
                  ),
                });
              },
              onBirthdayChange: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger;
                this.setData({
                  passenger: (0, p.Z)(
                    (0, p.Z)({}, a),
                    {},
                    { passengerBirth: B()(t).format(F) }
                  ),
                });
              },
              onPhoneNumberInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger;
                this.setData({
                  passenger: (0, p.Z)(
                    (0, p.Z)({}, a),
                    {},
                    { mobile: t.trim() }
                  ),
                });
              },
              handleSubmitClick: function () {
                var e = this.data,
                  t = e.passenger,
                  a = e.nameENInput,
                  i = w.Z.deepCopy(t);
                if (!i.passportType)
                  return this.showCommonDialog("请选择证件类型");
                if (a) {
                  if (!i.passengerENFirstName || !i.passengerENLastName)
                    return this.showCommonDialog("名字不能为空");
                  if (
                    !Z.Z.isValidEnName(i.passengerENFirstName) ||
                    !Z.Z.isValidEnName(i.passengerENLastName)
                  )
                    return this.showCommonDialog("无效的姓名！");
                } else {
                  if (!i.passengerName)
                    return this.showCommonDialog("名字不能为空");
                  if (!Z.Z.isValidCNName(i.passengerName))
                    return this.showCommonDialog("无效的姓名！");
                }
                if (!i.passportCode)
                  return this.showCommonDialog("证件号码不能为空！");
                if (!Z.Z.isValidIdCode(i.passportType, i.passportCode))
                  return this.showCommonDialog("无效的证件号码！");
                if (
                  (("身份证" !== i.passportType &&
                    "户口簿" !== i.passportType) ||
                    (i.passengerBirth = Z.Z.getBirthFromCode(i.passportCode)),
                  !i.passengerBirth || !new Date(i.passengerBirth))
                )
                  return this.showCommonDialog("无效的生日日期");
                var s = B()().format(F),
                  n = this.getFlightPasType(i);
                if (s === i.passengerBirth)
                  return this.showCommonDialog("无效的生日日期");
                if ("未满14天" === n)
                  return this.showCommonDialog(
                    "航班起飞当日，未满14天的婴儿，请至航空公司柜台申请购买机票"
                  );
                if (this.checkPassportByAge(i.passportType, i.passengerBirth)) {
                  if (i.mobile && !Z.Z.isMobile(i.mobile))
                    return this.showCommonDialog("手机号格式不正确");
                  this.setData({
                    passenger: (0, p.Z)(
                      (0, p.Z)({}, t),
                      {},
                      { passengerBirth: i.passengerBirth }
                    ),
                  }),
                    this.toggleConfirmPanel();
                }
              },
              getFlightPasType: function (e) {
                var t = this.data.segments,
                  a = t[0] && t[0].dptDate;
                if (!e.passengerBirth) return -1;
                var i = a || B()().format(F),
                  s = new Date(i.replace(/\-/g, "/")),
                  n = new Date(e.passengerBirth.replace(/\-/g, "/")),
                  r = s - 12096e5,
                  o = new Date(i.replace(/\-/g, "/"));
                o.setFullYear(o.getFullYear() - 2);
                var c = new Date(i.replace(/\-/g, "/"));
                return (
                  c.setFullYear(c.getFullYear() - 12),
                  n > r
                    ? 0
                    : n <= r && n > o
                    ? 3
                    : n <= o && n > c
                    ? 2
                    : n <= c
                    ? 1
                    : -1
                );
              },
              checkPassportByAge: function (e, t) {
                var a = this.data.flightDepartDate,
                  i = new Date(t.replace(/\-/g, "/")).getTime(),
                  s = a ? new Date(a.replace(/\-/g, "/")) : new Date();
                s.setFullYear(s.getFullYear() - 2);
                var n = a ? new Date(a.replace(/\-/g, "/")) : new Date();
                n.setFullYear(n.getFullYear() - 16);
                var r = a ? new Date(a.replace(/\-/g, "/")) : new Date();
                return (
                  r.setFullYear(r.getFullYear() - 100),
                  "户口簿" === e && i <= n
                    ? this.showCommonDialog("年龄已满16岁，不允许使用户口簿")
                    : "出生证明" === e && i <= s
                    ? this.showCommonDialog("年龄已满2岁，不允许使用出生证明")
                    : !("身份证" === e && i <= r) ||
                      this.showCommonDialog("身份证出生日期错误，请重新填写")
                );
              },
              handleConfirmAction: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : U,
                  a =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : L,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "default",
                  s = this.data,
                  n = s.inviteId,
                  r = s.passenger,
                  o = s.typeList,
                  c = s.passengersList,
                  l = s.nameENInput,
                  h = r.passengerName,
                  p = r.passengerENLastName,
                  d = r.passengerENFirstName,
                  m = r.passportType,
                  g = r.passportCode,
                  u = r.mobile,
                  N = r.passengerBirth,
                  f = null;
                if (
                  !(f =
                    "existed" === i
                      ? c
                          .filter(function (e) {
                            return e.selected;
                          })
                          .map(function (t) {
                            return {
                              cnName: t.passengerName,
                              enLastName: t.passengerENLastName,
                              enFirstName: t.passengerENFirstName,
                              passportTypeCode: o.filter(function (e) {
                                return e.title === t.passportType;
                              })[0].code,
                              passportNumber: t.passportCode,
                              birthday: t.passengerBirth,
                              mobile: t.mobile,
                              passengerType: e.getFlightPasType(t),
                            };
                          })
                      : [
                          {
                            cnName: l ? "" : h,
                            enLastName: l ? p : "",
                            enFirstName: l ? d : "",
                            passportTypeCode: o.filter(function (e) {
                              return e.title === m;
                            })[0].code,
                            passportNumber: g,
                            birthday: N,
                            mobile: u,
                            passengerType: this.getFlightPasType(r),
                          },
                        ]) ||
                  0 === f.length
                )
                  return this.showCommonDialog("请添加乘机人");
                var w = {
                  inviteId: n,
                  nickName: encodeURIComponent(t),
                  avatar: a || L,
                  passengers: f,
                };
                (0, x.Vf)(w)
                  .then(function (t) {
                    var a = t.resultCode,
                      i = t.resultMessage;
                    if (1 !== a) return e.showCommonDialog(i || P);
                    e.setData({
                      typeList: S,
                      nameENInput: !1,
                      birthDateHidden: !0,
                      passenger: E,
                    }),
                      e.getActivityInfo();
                  })
                  .catch(function (t) {
                    console.log(t), e.showCommonDialog(P);
                  })
                  .finally(function () {
                    "existed" === i
                      ? e.toggleExistedPassengers()
                      : e.toggleConfirmPanel(),
                      setTimeout(function () {
                        e.setData({ submitDisabled: !0 });
                      }, 500);
                  });
              },
              toggleConfirmPanel: function () {
                var e = this,
                  t = this.data.showConfirmPanel;
                this.setData({
                  mask: !t,
                  maskType: "confirm",
                  showConfirmPanel: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  });
              },
              toggleContinueAdd: function () {
                var e = this.data,
                  t = e.continueAdd;
                if (e.invitedList.length >= 9)
                  return (0, C.showToast)("最多添加9位乘机人");
                this.setData({ continueAdd: !t });
              },
              closeMask: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { currentTarget: { dataset: "" } },
                  t = e.currentTarget.dataset.type;
                "passenger" === t
                  ? this.toggleExistedPassengers()
                  : "typeList" === t
                  ? this.toggleTypeList()
                  : "confirm" === t
                  ? this.toggleConfirmPanel()
                  : "enNameSpec" === t
                  ? this.toggleENNameSpec()
                  : "nameSpec" === t && this.toggleNameSpec();
              },
              showFailAction: function (e) {
                var t = this;
                this.closeMask(),
                  this.setData({
                    mask: !0,
                    maskType: "fail",
                    showFailPopup: !0,
                    errorPopupMsg: e || "",
                  }),
                  setTimeout(function () {
                    t.setData({ transition: !0 });
                  }, 10);
              },
              hideFailAction: function () {
                this.setData({
                  mask: !1,
                  maskType: "",
                  showFailPopup: !1,
                  transition: !1,
                });
              },
              toFlightIndex: function () {
                w.Z.relaunchHome("flight");
              },
              toFlightList: function () {
                var e = this.data,
                  t = e.segments,
                  a = e.tripType,
                  i = e.isTransfer,
                  s = {
                    depCity: t[0].departCityName,
                    depCityCode: t[0].departCityCode,
                    arrCity: i ? t[1].arriveCityName : t[0].arriveCityName,
                    arrCityCode: i ? t[1].arriveCityCode : t[0].arriveCityCode,
                    departDate: t[0].dptDate,
                  };
                2 === a
                  ? ((s.returnDate = t[1].dptDate),
                    this.navigateTo({
                      url: "/pages/flight/roundtrip/roundtrip?departCity="
                        .concat(s.depCity, "&departCityCode=")
                        .concat(s.depCityCode, "&arriveCity=")
                        .concat(s.arrCity, "&arriveCityCode=")
                        .concat(s.arrCityCode, "&departDate=")
                        .concat(s.departDate, "&returnDate=")
                        .concat(s.returnDate),
                    }))
                  : this.navigateTo({
                      url: "/pages/flight/list/list?departCity="
                        .concat(s.depCity, "&departCityCode=")
                        .concat(s.depCityCode, "&arriveCity=")
                        .concat(s.arrCity, "&arriveCityCode=")
                        .concat(s.arrCityCode, "&departDate=")
                        .concat(s.departDate, "&nearby=1"),
                    });
              },
              doReload: function () {
                this.hideFailAction(), this.getOpenId();
              },
              onShareAppMessage: function (e) {
                var t = this.data,
                  a = t.isTieyou,
                  i = t.inviteId,
                  s = t.status;
                return (
                  t.isInviter && s && this.issueInviteAgain(),
                  console.log(e),
                  {
                    title: "我在".concat(
                      a ? "铁友" : "智行",
                      "预订机票，快来帮我填写乘机人信息"
                    ),
                    path: "/pages/activity/flight/invite/index?inviteId=".concat(
                      i
                    ),
                    imageUrl:
                      "https://images3.c-ctrip.com/zt/wechat/flight/invite_passenger_".concat(
                        a ? "ty" : "zx",
                        ".png"
                      ),
                  }
                );
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
              noop: function () {},
              issueInviteAgain: function () {
                var e = this,
                  t = { inviteId: this.data.inviteId };
                (0, b.il)(t)
                  .then(function (t) {
                    console.log(t), e.getActivityInfo();
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              generateShareInfo: function () {
                var e = {
                  nickName: U,
                  avatar: L,
                  bookingToken:
                    "gQcUeyJhIjpbBQYQMSwiYiIBBjxjIjoiU0hBIiwiZCI6IkxYAQr0WANlIjoiMjAyMC0wNS0xMSIsImYiOiJNVTIzMzUiLCJnIjoiY3RyaXAiLCJoIjoiQ09NTU9OX1lfUFVGSUxURVIiLCJpIjoiRWNvbm9teSIsImoiOiJZIiwiayI6IiIsImwiOiIwNjo0MCJ9XSwiYiI6eyJTUyI6IjAiLCJQRFQiOiJLTmRRYkF4anB6Z0V6eHh2UzlhUDNVNW5nWlluRUQ2NDV1UXI5eE1XSm81UUtFUVZ0ZUdEQzJJNTNmY3JEcS9tYlZBeGZLN3d1eVN1ZTZLQjIvMXRJQT09IiwiQlQiOiI4Z1B3Umx0N0ltRmtkV3gwVDNKcFoybHVVSEpwWTJVaU9qTXpOakFzSW1GcGNteHBibVZEYjJSbElqb2lUVlVpTENKaGNuSkRhWFI1UTI5a1pTSTZJa3hZUVNJc0ltTmhZbWx1RFJJQVdSRVFDRTVoYlFFMU9PZTdqK2ExanVpSXNTSXNJbVJVYVFVVUVEQTJPalF3QVJBY1pYQmhjblJFWVhRQktTUXlNREl3TFRBMUxURXhBUm9FY0hRZFpraFRTRUVpTENKbWJHbG5hSFJPZFcxaVpYSWlBWTQ0TWpNek5TSXNJbXRsZVNJNklrSmZDVUh3ZURRdE1qQjhaRGhoWXpaaFpEVXRZekpoTnkwMFpHUmpMVGc1TXpZdFpEY3lObVJpTlRVeFkySmlJaXdpY0dsa0lqb2lRMHBCVmtGVVQwdEZUbHBUVkVSOFkyVmpOMkl3TlRFdFpEQTVNQzAwWVdVNUxXSTFOR0V0TXpSaVpXTXdOekpsWVRZNGZESXdNakF0TURRdE1qQlVNVFU2TURVNk1qWUJVQzQ4QVJod2NtOWtkV04wTFJkRVEwMUJaMFZGUVVWWlowMUZWVkZKUTBGbkRRUXNRMGxuUW05MGJVWXlVSEl2QVFFTVFWRTlQUVZMQlQ0SVZIbHdJUndBUVNtSWZFMWhjbXRsZEdsdVp5SXNJbk53YkdsalpWUmhaeUk2Wm1Gc2MyVXNJblJ3RFM0Y0lpd2lkSEowSWpvQkNWQjJaVzVrYjNKT1lXMWxJam9pWTNSeWFYQWlmVjA9IiwiU1YiOiI0IiwiUFQiOiJOVU1fTElNSVQiLCJCTSI6IjAtMCJ9fQ==",
                };
                (0, b.il)(e, function (e) {
                  console.log("------------"), console.log(e);
                });
              },
            },
            J =
              (0, I.h)()(
                (i =
                  f()(M)(
                    (i = (function (e) {
                      (0, o.Z)(a, e);
                      var t = (0, c.Z)(a);
                      function a() {
                        return (0, n.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.isTieyou,
                                i = t.canUseGetUserProfile,
                                s = t.segments,
                                n = t.isTransfer,
                                r = t.showFlightDetail,
                                o = t.tripType,
                                c = t.avatar,
                                l = t.name,
                                h = t.min,
                                p = t.sec,
                                d = t.status,
                                g = t.isInviter,
                                u = t.couponList,
                                N = t.isLogin,
                                f = t.invitedList,
                                w = t.nameENInput,
                                V = t.birthDateHidden,
                                Z = t.isInvitee,
                                y = t.continueAdd,
                                C = t.receivedCouponPrice,
                                T = t.flightStatus,
                                b = t.passenger,
                                k = t.transition,
                                B = t.mask,
                                D = t.maskType,
                                x = t.showConfirmPanel,
                                I = t.showTypeList,
                                F = t.typeList,
                                X = t.showAllPassenger,
                                U = t.isIPhoneX,
                                L = t.passengersList,
                                P = t.nameSpec,
                                S = t.ENNameSpec,
                                E = t.showFailPopup,
                                M = t.errorPopupMsg,
                                J = t.submitDisabled;
                              return (0, A.BX)(m.Block, {
                                children: [
                                  (0, A.tZ)(m.View, {
                                    className: "top " + (a ? "ty" : "zx"),
                                    children: (0, A.tZ)(m.View, {
                                      className: "top-tick",
                                      children:
                                        s &&
                                        s.map(function (t, a) {
                                          return (0,
                                          A.BX)(m.Block, { children: [!(n && !r && 1 === a) && (0, A.BX)(m.View, { className: "top-tick-hd", children: [2 === o && (0, A.tZ)(m.Text, { className: "tag bgcolor-primary", children: 0 === a ? "去程" : "返程" }), 3 === o && (0, A.tZ)(m.Text, { className: "tag bgcolor-primary", children: 0 === a ? "第一程" : "第二程" }), n && (0, A.tZ)(m.Text, { className: "tag bgcolor-primary", children: r ? (0 === a ? "第一程" : "第二程") : "中转" }), t.dptMonthDay + " " + t.dptWeekDay + " " + ((2 !== o && 3 !== o && !n) || r ? t.flightNumber : t.departCityName + "-" + t.arriveCityName), (2 === o || 3 === o || n) && 0 === a && (0, A.tZ)(m.Text, { className: "ifont-triangle iconfont " + (r ? "open" : ""), id: "AeAL", onClick: e.toggleFlightDetail })] }), !((2 === o || 3 === o || n) && !r) && (0, A.BX)(m.View, { className: "top-tick-bd", children: [(0, A.BX)(m.View, { className: "from", children: [(0, A.tZ)(m.View, { className: "time", children: t.dptTime }), (0, A.tZ)(m.View, { className: "station", children: t.departCityName + t.departAirportName + t.departTerminal })] }), (0, A.BX)(m.View, { className: "mid", children: [1 === o && !n && !t.stopCityName && (0, A.tZ)(m.View, { className: "type", children: "直飞" }), t.stopCityName && (0, A.tZ)(m.View, { className: "type", children: "经停" }), t.stopCityName && (0, A.tZ)(m.View, { className: "color-primary", children: t.stopCityName })] }), (0, A.BX)(m.View, { className: "to", children: [(0, A.tZ)(m.View, { className: "time", children: t.arrTime }), (0, A.tZ)(m.View, { className: "station", children: t.arriveCityName + t.arriveAirportName + t.arriveTerminal })] })] })] }, "index");
                                        }),
                                    }),
                                  }),
                                  (0, A.BX)(m.View, {
                                    className: "wrap",
                                    children: [
                                      1 === d &&
                                        !g &&
                                        (0, A.BX)(m.View, {
                                          className: "white-box share-hail",
                                          children: [
                                            (0, A.tZ)(m.Image, {
                                              src: c,
                                              className: "avatar",
                                            }),
                                            (0, A.BX)(m.View, {
                                              className: "cont",
                                              children: [
                                                (0, A.tZ)(m.View, {
                                                  className: "txt",
                                                  children:
                                                    "Hi，您的好友" +
                                                    l +
                                                    "正在帮你买机票，请尽快填写信息吧～",
                                                }),
                                                (0, A.BX)(m.View, {
                                                  className: "tgrey",
                                                  children: [
                                                    "该页面将在",
                                                    (0, A.tZ)(m.Text, {
                                                      className: "color-red",
                                                      children: h + ":" + p,
                                                    }),
                                                    "后失效！",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      !g &&
                                        u &&
                                        u.length > 0 &&
                                        (0, A.BX)(m.View, {
                                          className: "white-box coupon-box",
                                          children: [
                                            (0, A.tZ)(m.View, {
                                              className: "coupon-hd",
                                              children:
                                                "你是新客，领券自己买更划算哦～",
                                            }),
                                            (0, A.tZ)(m.View, {
                                              className: "coupon-bd",
                                              children: u.map(function (t, a) {
                                                return (0,
                                                A.BX)(m.View, { className: 1 === u.length ? "item-one" : "item-two", children: [(0, A.BX)(m.View, { className: "cont", children: [(0, A.tZ)(m.View, { className: "price", children: t.price }), (0, A.tZ)(m.View, { className: "txt", children: t.promotionTitle })] }), (0, A.tZ)(m.Button, { className: "btn-get", id: "AeAM", onClick: e.handleCouponsClick, children: 0 === t.receiveFlag ? "领取" : "已领取" })] }, a);
                                              }),
                                            }),
                                          ],
                                        }),
                                      !N &&
                                        (0, A.tZ)(m.Block, {
                                          children: (0, A.BX)(m.View, {
                                            className:
                                              "white-box status-box full",
                                            children: [
                                              (0, A.tZ)(m.View, {
                                                className: "tit mt90",
                                                children:
                                                  "您还未登录，登录后可填写～",
                                              }),
                                              (0, A.tZ)(m.Button, {
                                                className: "btn-login",
                                                id: "AeAN",
                                                onClick:
                                                  this.getPhoneNumberAction,
                                                children: "一键登录",
                                              }),
                                            ],
                                          }),
                                        }),
                                      g &&
                                        N &&
                                        (0, A.BX)(m.Block, {
                                          children: [
                                            f &&
                                              0 === f.length &&
                                              (0, A.BX)(m.Block, {
                                                children: [
                                                  1 === d &&
                                                    (0, A.BX)(m.View, {
                                                      className:
                                                        "white-box status-box full",
                                                      children: [
                                                        (0, A.tZ)(m.Icon, {
                                                          className:
                                                            "icon-wait",
                                                        }),
                                                        (0, A.tZ)(m.View, {
                                                          className: "tit",
                                                          children:
                                                            "好友还未填写",
                                                        }),
                                                        (0, A.BX)(m.View, {
                                                          className: "txt",
                                                          children: [
                                                            "页面将在",
                                                            (0, A.tZ)(m.Text, {
                                                              className:
                                                                "color-red",
                                                              children:
                                                                h + ":" + p,
                                                            }),
                                                            "后失效，请尽快告知好友",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  2 === d &&
                                                    (0, A.BX)(m.View, {
                                                      className:
                                                        "white-box status-box full",
                                                      children: [
                                                        (0, A.tZ)(m.Icon, {
                                                          className: "icon-suc",
                                                        }),
                                                        (0, A.tZ)(m.View, {
                                                          className: "tit",
                                                          children:
                                                            "好友填写完成",
                                                        }),
                                                        (0, A.tZ)(m.View, {
                                                          className: "txt",
                                                          children:
                                                            "请刷新或通过小程序下单~",
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            f &&
                                              f.length > 0 &&
                                              (0, A.tZ)(m.Block, {
                                                children:
                                                  f.length > 0 &&
                                                  (0, A.BX)(m.View, {
                                                    className:
                                                      "white-box status-box full",
                                                    children: [
                                                      (0, A.tZ)(m.Icon, {
                                                        className: "icon-suc",
                                                      }),
                                                      (0, A.tZ)(m.View, {
                                                        className: "tit",
                                                        children:
                                                          "好友填写完成",
                                                      }),
                                                      (0, A.tZ)(m.View, {
                                                        className: "txt",
                                                        children:
                                                          "请刷新或通过小程序下单~",
                                                      }),
                                                      (0, A.tZ)(m.View, {
                                                        className: "pasg-list",
                                                        children: f.map(
                                                          function (e, t) {
                                                            return (0, A.BX)(
                                                              m.View,
                                                              {
                                                                className:
                                                                  "item",
                                                                children: [
                                                                  (0, A.BX)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "name",
                                                                      children:
                                                                        [
                                                                          e.passengerName
                                                                            ? e.passengerName
                                                                            : e.passengerENLastName +
                                                                              "/" +
                                                                              e.passengerENFirstName,
                                                                          (0,
                                                                          A.tZ)(
                                                                            m.Text,
                                                                            {
                                                                              className:
                                                                                "tag",
                                                                              children:
                                                                                e.passengerType,
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  (0, A.tZ)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "cert",
                                                                      children:
                                                                        e.passportTypeName +
                                                                        " " +
                                                                        e.passportNumber,
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              t
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                              }),
                                          ],
                                        }),
                                      !g &&
                                        N &&
                                        (0, A.BX)(m.Block, {
                                          children: [
                                            1 === d &&
                                              (0, A.BX)(m.Block, {
                                                children: [
                                                  (!Z || y) &&
                                                    (0, A.BX)(m.View, {
                                                      className:
                                                        "white-box pasg-box",
                                                      children: [
                                                        (0, A.BX)(m.View, {
                                                          className: "pasg-hd",
                                                          children: [
                                                            (0, A.tZ)(m.View, {
                                                              className: "tit",
                                                              children:
                                                                "填写乘机人",
                                                            }),
                                                            (0, A.BX)(m.View, {
                                                              className:
                                                                "rbox color-primary",
                                                              "data-ubt-key":
                                                                "132272",
                                                              id: "AeAO",
                                                              onClick:
                                                                this
                                                                  .toggleExistedPassengers,
                                                              children: [
                                                                (0, A.tZ)(
                                                                  m.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-pasgadd iconfont",
                                                                  }
                                                                ),
                                                                "选择已有乘机人",
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        (0, A.BX)(m.View, {
                                                          className:
                                                            "pasg-tips",
                                                          children: [
                                                            (0, A.tZ)(m.View, {
                                                              className: "cont",
                                                              children:
                                                                "姓名与乘机人证件一致，否则会影响登机",
                                                            }),
                                                            w
                                                              ? (0, A.BX)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "rbox",
                                                                    id: "AeAP",
                                                                    onClick:
                                                                      this
                                                                        .toggleENNameSpec,
                                                                    children: [
                                                                      "填写规范",
                                                                      (0, A.tZ)(
                                                                        m.Text,
                                                                        {
                                                                          className:
                                                                            "ifont-arr iconfont",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, A.BX)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "rbox",
                                                                    id: "AeAQ",
                                                                    onClick:
                                                                      this
                                                                        .toggleNameSpec,
                                                                    children: [
                                                                      "填写规范",
                                                                      (0, A.tZ)(
                                                                        m.Text,
                                                                        {
                                                                          className:
                                                                            "ifont-arr iconfont",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                          ],
                                                        }),
                                                        (0, A.BX)(m.View, {
                                                          className: "pasg-bd",
                                                          children: [
                                                            !w &&
                                                              (0, A.BX)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  children: [
                                                                    (0, A.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "label",
                                                                        children:
                                                                          "姓名",
                                                                      }
                                                                    ),
                                                                    (0, A.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          (0,
                                                                          A.tZ)(
                                                                            m.Input,
                                                                            {
                                                                              type: "text",
                                                                              className:
                                                                                "input-txt",
                                                                              placeholder:
                                                                                "请确保符合填写规范",
                                                                              placeholderClass:
                                                                                "input-plder",
                                                                              value:
                                                                                b.passengerName,
                                                                              onInput:
                                                                                this
                                                                                  .onCNNameInput,
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            w &&
                                                              (0, A.BX)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  children: [
                                                                    (0, A.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "label",
                                                                        children:
                                                                          "姓(拼音)",
                                                                      }
                                                                    ),
                                                                    (0, A.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          (0,
                                                                          A.tZ)(
                                                                            m.Input,
                                                                            {
                                                                              type: "text",
                                                                              className:
                                                                                "input-txt",
                                                                              placeholder:
                                                                                "如：LI,Surname",
                                                                              placeholderClass:
                                                                                "input-plder",
                                                                              value:
                                                                                b.passengerENLastName,
                                                                              onInput:
                                                                                this
                                                                                  .onENLastNameInput,
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            w &&
                                                              (0, A.BX)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  children: [
                                                                    (0, A.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "label",
                                                                        children:
                                                                          "名(拼音)",
                                                                      }
                                                                    ),
                                                                    (0, A.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          (0,
                                                                          A.tZ)(
                                                                            m.Input,
                                                                            {
                                                                              type: "text",
                                                                              className:
                                                                                "input-txt",
                                                                              placeholder:
                                                                                "如：LEI,Givenname",
                                                                              placeholderClass:
                                                                                "input-plder",
                                                                              value:
                                                                                b.passengerENFirstName,
                                                                              onInput:
                                                                                this
                                                                                  .onENFirstNameInput,
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            (0, A.BX)(m.View, {
                                                              className: "item",
                                                              id: "AeAR",
                                                              onClick:
                                                                this
                                                                  .toggleTypeList,
                                                              children: [
                                                                (0, A.tZ)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "label",
                                                                    children:
                                                                      "证件类型",
                                                                  }
                                                                ),
                                                                (0, A.tZ)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "cont",
                                                                    children:
                                                                      (0, A.tZ)(
                                                                        m.View,
                                                                        {
                                                                          className:
                                                                            "txt",
                                                                          children:
                                                                            b.passportType,
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, A.tZ)(
                                                                  m.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-arr iconfont",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, A.BX)(m.View, {
                                                              className: "item",
                                                              children: [
                                                                (0, A.tZ)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "label",
                                                                    children:
                                                                      "证件号码",
                                                                  }
                                                                ),
                                                                (0, A.tZ)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "cont",
                                                                    children:
                                                                      (0, A.tZ)(
                                                                        m.Input,
                                                                        {
                                                                          type: "text",
                                                                          className:
                                                                            "input-txt",
                                                                          placeholder:
                                                                            "请输入证件号",
                                                                          placeholderClass:
                                                                            "input-plder",
                                                                          value:
                                                                            b.passportCode,
                                                                          onInput:
                                                                            this
                                                                              .onPassportCodeInput,
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            !V &&
                                                              (0, A.BX)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  children: [
                                                                    (0, A.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "label",
                                                                        children:
                                                                          "出生日期",
                                                                      }
                                                                    ),
                                                                    (0, A.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "cont",
                                                                        children:
                                                                          (0,
                                                                          A.tZ)(
                                                                            m.Picker,
                                                                            {
                                                                              className:
                                                                                "birthdate",
                                                                              mode: "date",
                                                                              start:
                                                                                "1890-01-01",
                                                                              end: s[0]
                                                                                .dptDate,
                                                                              value:
                                                                                b.passengerBirth,
                                                                              onChange:
                                                                                this
                                                                                  .onBirthdayChange,
                                                                              children:
                                                                                (0,
                                                                                A.tZ)(
                                                                                  m.View,
                                                                                  {
                                                                                    className:
                                                                                      b.passengerBirth
                                                                                        ? ""
                                                                                        : "thin",
                                                                                    children:
                                                                                      "" ===
                                                                                      b.passengerBirth
                                                                                        ? "请输入出生日期"
                                                                                        : b.passengerBirth,
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            (0, A.BX)(m.View, {
                                                              className: "item",
                                                              children: [
                                                                (0, A.tZ)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "label",
                                                                    children:
                                                                      "手机号码",
                                                                  }
                                                                ),
                                                                (0, A.tZ)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "zone",
                                                                    children:
                                                                      "+86",
                                                                  }
                                                                ),
                                                                (0, A.tZ)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "cont",
                                                                    children:
                                                                      (0, A.tZ)(
                                                                        m.Input,
                                                                        {
                                                                          type: "text",
                                                                          className:
                                                                            "input-txt",
                                                                          placeholder:
                                                                            "用于接收航班通知",
                                                                          placeholderClass:
                                                                            "input-plder",
                                                                          value:
                                                                            b.mobile,
                                                                          onInput:
                                                                            this
                                                                              .onPhoneNumberInput,
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  Z &&
                                                    !y &&
                                                    (0, A.BX)(m.View, {
                                                      className:
                                                        "white-box status-box",
                                                      children: [
                                                        (0, A.tZ)(m.Icon, {
                                                          className: "icon-suc",
                                                        }),
                                                        (0, A.tZ)(m.View, {
                                                          className: "tit",
                                                          children:
                                                            "已成功提交给朋友，可继续添加",
                                                        }),
                                                        (0, A.tZ)(m.View, {
                                                          className:
                                                            "pasg-list",
                                                          children: f.map(
                                                            function (e, t) {
                                                              return (0, A.BX)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  children: [
                                                                    (0, A.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "name",
                                                                        children:
                                                                          [
                                                                            e.passengerName
                                                                              ? e.passengerName
                                                                              : e.passengerENLastName +
                                                                                "/" +
                                                                                e.passengerENFirstName,
                                                                            (0,
                                                                            A.tZ)(
                                                                              m.Text,
                                                                              {
                                                                                className:
                                                                                  "tag",
                                                                                children:
                                                                                  e.passengerType,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, A.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "cert",
                                                                        children:
                                                                          e.passportTypeName +
                                                                          " " +
                                                                          e.passportNumber,
                                                                      }
                                                                    ),
                                                                  ],
                                                                },
                                                                t
                                                              );
                                                            }
                                                          ),
                                                        }),
                                                        (0, A.BX)(m.View, {
                                                          className:
                                                            "btn-group",
                                                          children: [
                                                            (0, A.tZ)(
                                                              m.Button,
                                                              {
                                                                className:
                                                                  "btn-line-light btn-add",
                                                                id: "AeAS",
                                                                onClick:
                                                                  this
                                                                    .toggleContinueAdd,
                                                                children:
                                                                  "继续添加",
                                                              }
                                                            ),
                                                            (0, A.BX)(
                                                              m.Button,
                                                              {
                                                                className:
                                                                  "btn-buy " +
                                                                  (a
                                                                    ? "ty"
                                                                    : "zx"),
                                                                "data-ubt-key":
                                                                  "132274",
                                                                id: "AeAT",
                                                                onClick:
                                                                  this
                                                                    .toFlightList,
                                                                children: [
                                                                  "去买机票",
                                                                  !!C &&
                                                                    (0, A.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "coupon-tag",
                                                                        children:
                                                                          "省" +
                                                                          C,
                                                                      }
                                                                    ),
                                                                ],
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            2 === d &&
                                              (0, A.BX)(m.Block, {
                                                children: [
                                                  !Z &&
                                                    (0, A.BX)(m.View, {
                                                      className:
                                                        "white-box status-box full",
                                                      children: [
                                                        (0, A.tZ)(m.Icon, {
                                                          className:
                                                            "icon-fail",
                                                        }),
                                                        (0, A.tZ)(m.View, {
                                                          className: "tit",
                                                          children:
                                                            "页面已失效",
                                                        }),
                                                        (0, A.tZ)(m.View, {
                                                          className: "txt",
                                                          children:
                                                            "页面超过30分钟\n请告知好友重新发起并填写~",
                                                        }),
                                                      ],
                                                    }),
                                                  Z &&
                                                    (0, A.BX)(m.View, {
                                                      className:
                                                        "white-box status-box",
                                                      children: [
                                                        (0, A.tZ)(m.Icon, {
                                                          className: "icon-suc",
                                                        }),
                                                        (0, A.tZ)(m.View, {
                                                          className: "tit",
                                                          children:
                                                            "已成功提交给朋友",
                                                        }),
                                                        (0, A.tZ)(m.View, {
                                                          className:
                                                            "pasg-list",
                                                          children: f.map(
                                                            function (e, t) {
                                                              return (0, A.BX)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "item",
                                                                  children: [
                                                                    (0, A.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "name",
                                                                        children:
                                                                          [
                                                                            e.passengerName
                                                                              ? e.passengerName
                                                                              : e.passengerENLastName +
                                                                                "/" +
                                                                                e.passengerENFirstName,
                                                                            (0,
                                                                            A.tZ)(
                                                                              m.Text,
                                                                              {
                                                                                className:
                                                                                  "tag",
                                                                                children:
                                                                                  e.passengerType,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, A.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "cert",
                                                                        children:
                                                                          e.passportTypeName +
                                                                          " " +
                                                                          e.passportNumber,
                                                                      }
                                                                    ),
                                                                  ],
                                                                },
                                                                t
                                                              );
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  g &&
                                    N &&
                                    (0, A.tZ)(m.Block, {
                                      children:
                                        0 === T
                                          ? (0, A.BX)(m.Block, {
                                              children: [
                                                0 === f.length &&
                                                  (0, A.tZ)(m.View, {
                                                    className: "fixed-botm",
                                                    children: (0, A.tZ)(
                                                      m.Button,
                                                      {
                                                        className:
                                                          "btn-invite " +
                                                          (a ? "ty" : "zx"),
                                                        "data-type": "again",
                                                        openType: "share",
                                                        children:
                                                          "邀请好友填写",
                                                      }
                                                    ),
                                                  }),
                                                f.length > 0 &&
                                                  (0, A.BX)(m.View, {
                                                    className: "fixed-botm",
                                                    children: [
                                                      (0, A.tZ)(m.Button, {
                                                        className:
                                                          "btn btn-line-light " +
                                                          (a ? "ty" : "zx"),
                                                        "data-type": "again",
                                                        openType: "share",
                                                        children: "继续邀请",
                                                      }),
                                                      (0, A.tZ)(m.Button, {
                                                        className:
                                                          "btn-invite " +
                                                          (a ? "ty" : "zx"),
                                                        id: "AeAU",
                                                        onClick:
                                                          this.toFlightList,
                                                        children: "去买机票",
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            })
                                          : (0, A.tZ)(m.Block, {
                                              children:
                                                0 !== f.length &&
                                                (0, A.tZ)(m.View, {
                                                  className: "fixed-botm",
                                                  children: (0, A.tZ)(
                                                    m.Button,
                                                    {
                                                      className:
                                                        "btn-invite " +
                                                        (a ? "ty" : "zx"),
                                                      id: "AeAV",
                                                      onClick:
                                                        this.toFlightList,
                                                      children: "去买机票",
                                                    }
                                                  ),
                                                }),
                                            }),
                                    }),
                                  !g &&
                                    N &&
                                    (0, A.BX)(m.Block, {
                                      children: [
                                        1 === d &&
                                          (0 === f.length || y) &&
                                          (0, A.BX)(m.View, {
                                            className: "fixed-botm",
                                            children: [
                                              y &&
                                                (0, A.tZ)(m.Button, {
                                                  className:
                                                    "btn btn-line-light " +
                                                    (a ? "ty" : "zx"),
                                                  id: "AeAW",
                                                  onClick:
                                                    this.toggleContinueAdd,
                                                  children: "返回",
                                                }),
                                              (0, A.tZ)(m.Button, {
                                                className:
                                                  "btn btn-invite " +
                                                  (a ? "ty" : "zx"),
                                                "data-ubt-key": "132273",
                                                id: "AeAX",
                                                onClick: this.handleSubmitClick,
                                                children: "提交给好友",
                                              }),
                                            ],
                                          }),
                                        2 === d &&
                                          (0, A.tZ)(m.View, {
                                            className: "fixed-botm",
                                            children: (0, A.BX)(m.Button, {
                                              className:
                                                "btn-invite " +
                                                (a ? "ty" : "zx"),
                                              id: "AeAY",
                                              onClick: this.toFlightList,
                                              children: [
                                                "去买机票",
                                                !!C &&
                                                  (0, A.tZ)(m.Text, {
                                                    className: "coupon-tag",
                                                    children: "省" + C,
                                                  }),
                                              ],
                                            }),
                                          }),
                                      ],
                                    }),
                                  !1,
                                  B &&
                                    (0, A.tZ)(m.View, {
                                      className:
                                        "pop-mask " + (k ? "active" : ""),
                                      "data-type": D,
                                      id: "AeAZ",
                                      onClick: function (t) {
                                        t.stopPropagation(), e.closeMask(t);
                                      },
                                      catchMove: !0,
                                    }),
                                  (0, A.BX)(m.View, {
                                    className:
                                      "pop-botm " + (x ? "active" : ""),
                                    id: "AeAa",
                                    onClick: function (e) {
                                      e.stopPropagation();
                                    },
                                    catchMove: !0,
                                    children: [
                                      (0, A.tZ)(m.View, {
                                        className: "pop-botm-hd",
                                        children: "确认乘机人信息",
                                      }),
                                      (0, A.BX)(m.View, {
                                        className: "pop-botm-bd",
                                        children: [
                                          (0, A.tZ)(m.View, {
                                            className: "pop-tips",
                                            children:
                                              "姓名和证件号码错误将导致无法登机，请仔细核对，确保与乘机人证件一致",
                                          }),
                                          (0, A.BX)(m.View, {
                                            className: "pop-info",
                                            children: [
                                              (0, A.tZ)(m.View, {
                                                className: "tgrey",
                                                children: "姓名",
                                              }),
                                              (0, A.tZ)(m.View, {
                                                className: "txt",
                                                children: w
                                                  ? b.passengerENLastName +
                                                    "/" +
                                                    b.passengerENFirstName
                                                  : b.passengerName,
                                              }),
                                              (0, A.tZ)(m.View, {
                                                className: "tgrey",
                                                children: "证件号码",
                                              }),
                                              (0, A.tZ)(m.View, {
                                                className: "txt",
                                                children: b.passportCode,
                                              }),
                                              (0, A.tZ)(m.View, {
                                                className: "tgrey",
                                                children: "证件类型",
                                              }),
                                              (0, A.tZ)(m.View, {
                                                className: "txt",
                                                children: b.passportType,
                                              }),
                                              (0, A.tZ)(m.View, {
                                                className: "tgrey",
                                                children: "出生日期",
                                              }),
                                              (0, A.tZ)(m.View, {
                                                className: "txt",
                                                children: b.passengerBirth,
                                              }),
                                              b.mobile &&
                                                (0, A.BX)(m.Block, {
                                                  children: [
                                                    (0, A.tZ)(m.View, {
                                                      className: "tgrey",
                                                      children: "手机号码",
                                                    }),
                                                    (0, A.tZ)(m.View, {
                                                      className: "txt",
                                                      children: b.mobile,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, A.BX)(m.View, {
                                        className: "pop-botm-btn",
                                        children: [
                                          (0, A.tZ)(m.Button, {
                                            className: "btn-line",
                                            id: "AeAb",
                                            onClick: this.toggleConfirmPanel,
                                            children: "返回修改",
                                          }),
                                          i
                                            ? (0, A.tZ)(m.Button, {
                                                disabled: J,
                                                className: "btn-primary",
                                                id: "AeAc",
                                                onClick:
                                                  this.getUserProfileAction.bind(
                                                    this,
                                                    ""
                                                  ),
                                                children: "确认提交",
                                              })
                                            : (0, A.tZ)(m.Button, {
                                                disabled: J,
                                                className: "btn-primary",
                                                openType: "getUserInfo",
                                                lang: "zh_CN",
                                                onGetuserinfo:
                                                  this.checkUserInfoAuthority,
                                                children: "确认提交",
                                              }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, A.tZ)(m.View, {
                                    className:
                                      "idcard-list " + (I ? "active" : ""),
                                    children:
                                      F &&
                                      F.map(function (t, i) {
                                        return (0,
                                        A.BX)(m.View, { className: "idcard-item", "data-index": i, id: "AeAd", onClick: e.onPassportTypeClick, children: [t.title, b.passportType === t.title && (0, A.tZ)(m.Icon, { color: a ? "#fc6e51" : "#0080FF", size: "14", type: "success_no_circle", className: "icon-selected" })] }, "index");
                                      }),
                                  }),
                                  (0, A.BX)(m.View, {
                                    className:
                                      "pop-botm " + (X ? "active" : ""),
                                    children: [
                                      (0, A.tZ)(m.View, {
                                        className: "pop-botm-hd",
                                        id: "AeAe",
                                        onClick: function (e) {
                                          e.stopPropagation();
                                        },
                                        catchMove: !0,
                                        children: "选择已有乘机人",
                                      }),
                                      (0, A.tZ)(m.View, {
                                        className: "pop-botm-bd",
                                        children: (0, A.tZ)(m.ScrollView, {
                                          className:
                                            "white-bg tip-pass-list " +
                                            (U ? "iphone-x" : ""),
                                          scrollY: "true",
                                          children:
                                            L &&
                                            L.map(function (t, a) {
                                              return (0,
                                              A.tZ)(m.View, { className: "item " + (t.selected ? "current" : ""), "data-index": a, id: "AeAf", onClick: e.handleExistedPassengerClick, children: (0, A.BX)(m.View, { className: "item-container", children: [(0, A.BX)(m.View, { className: "info", children: [(0, A.BX)(m.View, { className: "name", children: [t.name, (0, A.tZ)(m.Text, { className: "type", children: t.passengerType })] }), (0, A.tZ)(m.View, { className: "identity", children: t.passportType && t.passportCode ? t.passportType + " " + t.maskPassportCode : "请补全证件信息" })] }), (0, A.tZ)(m.Text, { className: "iconfont " + (t.selected ? "ifont-checkboxed color-primary" : "ifont-checkbox") })] }) }, "passengerID");
                                            }),
                                        }),
                                      }),
                                      (0, A.tZ)(m.View, {
                                        className: "pop-botm-btn",
                                        id: "AeAg",
                                        onClick: function (e) {
                                          e.stopPropagation();
                                        },
                                        catchMove: !0,
                                        children: i
                                          ? (0, A.tZ)(m.Button, {
                                              className:
                                                "btn-radius-full btn-primary",
                                              id: "AeAh",
                                              onClick:
                                                this.getUserProfileAction.bind(
                                                  this,
                                                  "existed"
                                                ),
                                              children: "提交给朋友",
                                            })
                                          : (0, A.tZ)(m.Button, {
                                              className:
                                                "btn-radius-full btn-primary",
                                              "data-type": "existed",
                                              openType: "getUserInfo",
                                              lang: "zh_CN",
                                              onGetuserinfo:
                                                this.checkUserInfoAuthority,
                                              children: "提交给朋友",
                                            }),
                                      }),
                                    ],
                                  }),
                                  P &&
                                    (0, A.BX)(m.View, {
                                      className: "name-specification",
                                      children: [
                                        (0, A.tZ)(m.View, {
                                          className: "title",
                                          children:
                                            "请确保姓名与实际乘机人证件一致",
                                        }),
                                        (0, A.tZ)(m.View, {
                                          className: "txt",
                                          children:
                                            "1.特殊符号：姓名不用输入“·”、“-”等特殊符号，例如：“汉族然·买买提”可直接输入为“汉族然买买提”",
                                        }),
                                        (0, A.tZ)(m.View, {
                                          className: "txt",
                                          children:
                                            "2. 港澳台护照：香港、澳门、台湾的护照不支持国内航班，请改用其他证件。",
                                        }),
                                        (0, A.tZ)(m.View, {
                                          className: "txt",
                                          children:
                                            "3. 姓名过长：姓名过长时请保证填写完整，否则可能无法出票。",
                                        }),
                                        (0, A.tZ)(m.View, {
                                          className: "iconfont icon-close",
                                          id: "AeAi",
                                          onClick: this.toggleNameSpec,
                                        }),
                                      ],
                                    }),
                                  (0, A.BX)(m.View, {
                                    className:
                                      "pop-botm " + (S ? "active" : ""),
                                    children: [
                                      (0, A.BX)(m.View, {
                                        className: "pop-botm-hd",
                                        children: [
                                          (0, A.tZ)(m.View, {
                                            className: "btn-cancel",
                                            id: "AeAj",
                                            onClick: this.toggleENNameSpec,
                                            children: "取消",
                                          }),
                                          (0, A.tZ)(m.View, {
                                            className: "tit",
                                            children: "填写姓名须知",
                                          }),
                                          (0, A.tZ)(m.View, {
                                            className:
                                              "btn-submit color-primary",
                                          }),
                                        ],
                                      }),
                                      (0, A.BX)(m.ScrollView, {
                                        className: "pop-pasg-info",
                                        scrollY: !0,
                                        children: [
                                          (0, A.tZ)(m.View, {
                                            className: "txt",
                                            children:
                                              "1.必须使用英文字符填写，并确保与乘机所持证件一致。",
                                          }),
                                          (0, A.tZ)(m.View, {
                                            className: "txt",
                                            children: "2.英文姓名的填写方法：",
                                          }),
                                          (0, A.tZ)(m.View, {
                                            className: "item",
                                            children:
                                              "• 姓名中含有特殊符号“.”“-”等时，在Surname不用输入；在Givenname中用空格代替。",
                                          }),
                                          (0, A.tZ)(m.View, {
                                            className: "item",
                                            children:
                                              "• 姓与名总长度须小于24个字符，若过长请联系航司确认缩写信息。",
                                          }),
                                          (0, A.tZ)(m.View, {
                                            className: "item",
                                            children:
                                              "• 必须按照护照显示区分姓与名，middlename填写在Givenname（名）栏中。",
                                          }),
                                          (0, A.tZ)(m.View, {
                                            className: "tit",
                                            children: "图示说明(新版护照）",
                                          }),
                                          (0, A.tZ)(m.Image, {
                                            src: "https://pic.c-ctrip.com/train/zt/flight/passport-new.jpg",
                                            mode: "widthFix",
                                          }),
                                          (0, A.tZ)(m.View, {
                                            className: "tit",
                                            children: "图示说明(老版护照）",
                                          }),
                                          (0, A.tZ)(m.Image, {
                                            src: "https://pic.c-ctrip.com/train/zt/flight/passport-old.jpg",
                                            mode: "widthFix",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  E &&
                                    (0, A.BX)(m.View, {
                                      className: "fail-pop",
                                      id: "AeAk",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        (0, A.tZ)(m.View, {
                                          className: "title",
                                          children:
                                            M || "网络出了问题，请稍候再试",
                                        }),
                                        (0, A.BX)(m.View, {
                                          className: "btnbox",
                                          children: [
                                            (0, A.tZ)(m.View, {
                                              className: "left",
                                              id: "AeAl",
                                              onClick: this.doReload,
                                              children: "点击重试",
                                            }),
                                            (0, A.tZ)(m.View, {
                                              className: "right",
                                              id: "AeAm",
                                              onClick: this.toFlightList,
                                              children: "去买机票",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, A.tZ)(v.Z, {
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
                    })(d.default.Component))
                  ) || i)
              ) || i;
          (J.enableShareAppMessage = !0),
            Page(
              (0, s.createPageConfig)(
                J,
                "pages/activity/flight/invite/index",
                { root: { cn: [] } },
                {
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#0075F4",
                  navigationBarFrontColor: "#ffffff",
                  backgroundColorBottom: "#F5F5F5",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [3127, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(9510);
        }),
          e.O();
      },
    ]);
})();
