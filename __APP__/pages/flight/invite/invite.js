!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1775d7c9f65b9a6f532fd61b25d0faaf.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [37928],
      {
        7752: function (e, t, a) {
          var i,
            n = a(32180),
            s = a(57042),
            o = a(24460),
            c = a(21867),
            l = a(86066),
            r = a(298),
            d = a(52500),
            h = a(71515),
            m = a(92954),
            p = a.n(m),
            u = a(48792),
            g = a.n(u),
            f = a(79792),
            N = a(2326),
            w = a(18783),
            Z = a(8271),
            y = a.n(Z),
            V = a(49120),
            C = a(79910),
            v = a(55916),
            I = a(77900),
            b = a(81957),
            T = a(13975),
            x = a(48813),
            k = {
              护照: 2,
              台胞证: 8,
              回乡证: 7,
              港澳通行证: 10,
              台湾通行证: 22,
            },
            D = {
              firstName: "",
              lastName: "",
              gender: "M",
              birthDay: "",
              countryName: "中国大陆",
              countryCode: "CN",
              mobile: "",
              passportType: "护照",
              passportCode: "",
              passportLimitTime: "",
            },
            B = "",
            P = "",
            L = f.default.isTieyou,
            X = {
              pageId: L ? "10650034313" : "10650031970",
              data: {
                isTieyou: L,
                showResult: !1,
                commitSuccess: !1,
                commitFail: !1,
                friendCommitSuccess: !1,
                isLogin: !1,
                canGetMobile: !1,
                passengerInfo: D,
                openId: w.ZP.openid,
                nickName: "",
                contactPhone: "",
                arriveCityName: "",
                today: y()().format("YYYY-MM-DD"),
                validTime: 15,
                initFail: !1,
                moreCountryList: !1,
                showTimeLack: !1,
                nameSpec: !1,
                mask: !1,
                maskType: "country",
                transition: !1,
                tagView: "",
                tags: [],
                country: [],
                cardTypeList: Object.keys(k),
                index: 0,
                total: 0,
                totalFlightCouponPrice: 0,
                totalFlightIntlCouponPrice: 0,
              },
              onLoad: function (e) {
                var t = this,
                  a = e.param,
                  i = void 0 === a ? "" : a,
                  n = e.contactPhone,
                  s = void 0 === n ? "" : n,
                  o = e.arriveCityName,
                  c = void 0 === o ? "" : o;
                (B = decodeURIComponent(i)),
                  (P = this.formatPhone(s)),
                  this.setData({
                    nickName: P,
                    contactPhone: s,
                    arriveCityName: decodeURIComponent(c),
                  }),
                  this.checkLogin(),
                  this.getPassengerInfo(1)
                    .then(function () {})
                    .catch(function () {
                      t.setData({ showResult: !0, initFail: !0 });
                    }),
                  w.ZP.isLogin &&
                    this.getFlightCouponIndex()
                      .then(function (e) {
                        var a = e.total,
                          i = e.totalFlightCouponPrice,
                          n = e.totalFlightIntlCouponPrice,
                          s = e.flightIntlIndexCoupon;
                        t.setData({
                          total: a,
                          totalFlightCouponPrice: i,
                          totalFlightIntlCouponPrice: n,
                          flightIntlIndexCoupon: s,
                        });
                      })
                      .catch(function (e) {
                        console.log(e);
                      }),
                  this.getCountryData();
              },
              getOpenId: function () {
                var e = this;
                w.ZP.openid
                  ? this.setData({ openId: w.ZP.openid })
                  : (0, w.M9)().then(
                      function (t) {
                        var a = t.openid;
                        console.log("openid", a), e.setData({ openId: a });
                      },
                      function () {
                        console.log("获取openId失败");
                      }
                    );
              },
              formatPhone: function (e) {
                return e.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
              },
              getCountryData: function () {
                var e = this;
                p().request({
                  url: "https://market.suanya.com/libs/country_list/country_list.json",
                  success: function (t) {
                    var a = t.data.data;
                    e.setData({
                      country: a,
                      tags: a.map(function (e) {
                        return e.t;
                      }),
                    });
                  },
                });
              },
              checkLogin: function () {
                var e = this,
                  t = w.ZP.isLogin;
                this.setData({ isLogin: t }, function () {
                  console.log("是否登录了:", e.data.isLogin);
                });
              },
              getPassengerInfo: function (e) {
                var t = this.data.passengerInfo.gender,
                  a = { param: B, openId: w.ZP.openid, pageType: e, gender: t };
                return (
                  (0, V.showLoading)(),
                  new Promise(function (e, t) {
                    (0, T.JJ)(a)
                      .then(function (a) {
                        (0, V.hideLoading)();
                        var i = a.resultCode,
                          n = a.resultMessage;
                        if (1 === i) e();
                        else {
                          if (-2 !== i)
                            return void (0, V.showModal)(
                              n || "网络开小差，请稍后再试"
                            );
                          t();
                        }
                      })
                      .catch(function () {
                        t();
                      });
                  }).finally(V.hideLoading)
                );
              },
              addPassengerInfo: function () {
                var e = this,
                  t = this.data.passengerInfo,
                  a = t.firstName,
                  i = t.lastName,
                  n = t.birthDay,
                  s = t.passportCode,
                  o = t.passportType,
                  c = t.passportLimitTime,
                  l = t.mobile,
                  r = t.countryCode,
                  d = t.gender,
                  h = {
                    openId: w.ZP.openid,
                    param: B,
                    airplanePassengerList: [
                      {
                        familyName: i,
                        firstName: a,
                        birthday: n,
                        country: r,
                        certificateType: k[o],
                        certificateNum: s,
                        certificateValidTime: c,
                        gender: d,
                        mobile: l,
                      },
                    ],
                  };
                (0, T.zC)(h)
                  .then(function (t) {
                    1 === t.resultCode
                      ? e.setData({ showResult: !0, commitSuccess: !0 })
                      : (0, V.showModal)(
                          t.resultMessage || "网络开小差，请稍后再试"
                        );
                  })
                  .catch(function () {});
              },
              getFlightCouponIndex: function () {
                var e = {
                  scene: "aAEPQb46d0H",
                  head: {
                    extension: [{ name: "correctVersion", value: "15" }],
                  },
                };
                return new Promise(function (t, a) {
                  (0, v.Td)(e).then(function (e) {
                    var i = e.resultCode,
                      n = e.resultMessage,
                      s = e.extendDataEntityList || [],
                      o =
                        s.filter(function (e) {
                          return 200 === e.couponType;
                        })[0] || {},
                      c =
                        s.filter(function (e) {
                          return 500 === e.couponType;
                        })[0] || {},
                      l = 0,
                      r = 0;
                    c.couponData &&
                      c.couponData.promotionReceiveEntityList.length > 0 &&
                      c.couponData.promotionReceiveEntityList.forEach(function (
                        e
                      ) {
                        l += e.price;
                      }),
                      o.couponData &&
                        o.couponData.promotionReceiveEntityList.length > 0 &&
                        o.couponData.promotionReceiveEntityList.forEach(
                          function (e) {
                            r += e.price;
                          }
                        ),
                      1 === i
                        ? t({
                            total: l + r,
                            totalFlightCouponPrice: r,
                            totalFlightIntlCouponPrice: l,
                            flightIntlIndexCoupon: c,
                          })
                        : a(n);
                  });
                });
              },
              onShareAppMessage: function () {
                return {
                  title: "我在智行预订机票，快来帮我填写乘机人信息",
                  path: "/pages/flight/invite/invite?param="
                    .concat(encodeURIComponent(B), "&contactPhone=")
                    .concat(this.data.contactPhone, "&arriveCityName=")
                    .concat(encodeURIComponent(this.data.arriveCityName)),
                  imageUrl:
                    "https://images3.c-ctrip.com/train/hd/flight-invite-write/Mask.png",
                };
              },
              getCounponInfo: function (e) {
                var t = this;
                (0, w.pt)(function () {
                  w.ZP.isLogin
                    ? t
                        .getFlightCouponIndex()
                        .then(function (e) {
                          var a = e.total,
                            i = e.totalFlightCouponPrice,
                            n = e.totalFlightIntlCouponPrice;
                          t.setData(
                            {
                              total: a,
                              totalFlightCouponPrice: i,
                              totalFlightIntlCouponPrice: n,
                            },
                            function () {
                              n
                                ? t.goToIndex()
                                : (0, V.showModal)(
                                    "领取失败，您已经是我们的老朋友咯~"
                                  );
                            }
                          );
                        })
                        .catch(function (e) {
                          console.log(e);
                        })
                    : w.ZP.doLogin()
                        .then(function () {
                          t.getFlightCouponIndex()
                            .then(function (e) {
                              var a = e.total,
                                i = e.totalFlightCouponPrice,
                                n = e.totalFlightIntlCouponPrice;
                              t.setData(
                                {
                                  total: a,
                                  totalFlightCouponPrice: i,
                                  totalFlightIntlCouponPrice: n,
                                },
                                function () {
                                  n
                                    ? t.goToIndex()
                                    : (0, V.showModal)(
                                        "领取失败，您已经是我们的老朋友咯~"
                                      );
                                }
                              );
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        })
                        .catch(function () {
                          (0, V.showModal)("登录取消");
                        });
                }).call(this, e);
              },
              handleSubmit: function () {
                var e = this,
                  t = this.data.passengerInfo,
                  a = C.Z.deepCopy(t);
                if (!a.firstName || !a.lastName)
                  return (0, V.showModal)("名字不能为空");
                if (
                  !I.Z.isValidEnName(a.lastName) ||
                  !I.Z.isValidEnName(a.firstName)
                )
                  return (0, V.showModal)("无效的姓名");
                if (!a.birthDay) return (0, V.showModal)("出生日期不能为空");
                if (!new Date(a.birthDay))
                  return (0, V.showModal)("无效的出生日期");
                if (!a.countryName) return (0, V.showModal)("请选择国籍");
                if (!a.mobile) return (0, V.showModal)("手机号不能为空");
                if (!I.Z.isMobile(a.mobile))
                  return (0, V.showModal)("手机号格式不正确");
                if (!a.passportType) return (0, V.showModal)("请选择证件类型");
                if (!a.passportCode)
                  return (0, V.showModal)("证件号码不能为空");
                if (!I.Z.isValidIdCode(a.passportType, a.passportCode))
                  return (0, V.showModal)("无效的证件号码");
                if (!a.passportLimitTime)
                  return (0, V.showModal)("证件有效期不能为空");
                var i = y()().add(6, "month").format("YYYY-MM-DD");
                N.Z.compareDateToDate(i, a.passportLimitTime)
                  ? this.toggleTimeLack()
                  : this.getPassengerInfo(1)
                      .then(function () {
                        e.addPassengerInfo();
                      })
                      .catch(function () {
                        e.setData({ showResult: !0, commitFail: !0 });
                      });
              },
              closeMask: function (e) {
                var t = e.currentTarget.dataset.type;
                "nameSpec" === t
                  ? this.toggleNameSpec()
                  : "card" === t
                  ? this.toggleCardType()
                  : "country" === t && this.toggleCountry();
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
                var t = e.currentTarget.dataset.type,
                  a = this.data.passengerInfo,
                  i = (0, r.Z)((0, r.Z)({}, a), {}, { passportType: t });
                this.setData({ passengerInfo: i }), this.toggleCardType();
              },
              toggleCountry: function () {
                var e = this,
                  t = this.data.moreCountryList;
                this.setData({
                  mask: !t,
                  maskType: "country",
                  moreCountryList: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              handleCountrySelect: function (e) {
                var t = e.currentTarget.dataset,
                  a = t.name,
                  i = t.code,
                  n = this.data.passengerInfo,
                  s = (0, r.Z)(
                    (0, r.Z)({}, n),
                    {},
                    { countryName: a, countryCode: i }
                  );
                this.setData({ passengerInfo: s }), this.toggleCountry();
              },
              tagClick: function (e) {
                var t = e.currentTarget.dataset.tag;
                console.log(t), this.setData({ tagView: t });
              },
              toggleNameSpec: function () {
                var e = this,
                  t = this.data.nameSpec;
                this.setData({ mask: !t, maskType: "nameSpec", nameSpec: !t }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              toggleTimeLack: function () {
                var e = this,
                  t = this.data.showTimeLack;
                this.setData({
                  mask: !t,
                  maskType: "timeLack",
                  showTimeLack: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              chooseSex: function (e) {
                console.log(e);
                var t = e.target.dataset.gender,
                  a = this.data.passengerInfo,
                  i = (0, r.Z)((0, r.Z)({}, a), {}, { gender: t });
                this.setData({ passengerInfo: i });
              },
              lastNameInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passengerInfo,
                  i = (0, r.Z)(
                    (0, r.Z)({}, a),
                    {},
                    { lastName: t.trim().toUpperCase() }
                  );
                this.setData({ passengerInfo: i });
              },
              firstNameInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passengerInfo,
                  i = (0, r.Z)(
                    (0, r.Z)({}, a),
                    {},
                    { firstName: t.trim().toUpperCase() }
                  );
                this.setData({ passengerInfo: i });
              },
              phoneInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passengerInfo,
                  i = (0, r.Z)((0, r.Z)({}, a), {}, { mobile: t });
                this.setData({ passengerInfo: i });
              },
              cardInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passengerInfo,
                  i = (0, r.Z)(
                    (0, r.Z)({}, a),
                    {},
                    { passportCode: t.trim().toUpperCase() }
                  );
                this.setData({ passengerInfo: i });
              },
              bindDateChange: function (e) {
                var t = e.detail.value,
                  a = this.data.passengerInfo,
                  i = (0, r.Z)((0, r.Z)({}, a), {}, { passportLimitTime: t });
                this.setData({ passengerInfo: i });
              },
              bindBirthDateChange: function (e) {
                var t = e.detail.value,
                  a = this.data.passengerInfo,
                  i = (0, r.Z)((0, r.Z)({}, a), {}, { birthDay: t });
                this.setData({ passengerInfo: i });
              },
              goBackWrite: function () {
                var e = this,
                  t = this.data.commitSuccess;
                this.getPassengerInfo(1)
                  .then(function () {
                    e.setData({
                      passengerInfo: D,
                      showResult: !1,
                      commitSuccess: !t,
                    });
                  })
                  .catch(function () {
                    e.setData({
                      showResult: !0,
                      commitSuccess: !t,
                      initFail: !0,
                    });
                  });
              },
              goToIndex: function () {
                C.Z.relaunchHome("flight");
              },
              noop: function () {},
            },
            F =
              (0, b.h)()(
                (i =
                  g()(X)(
                    (i = (function (e) {
                      (0, c.Z)(a, e);
                      var t = (0, l.Z)(a);
                      function a() {
                        return (0, s.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.isTieyou,
                                i = t.arriveCityName,
                                n = t.nickName,
                                s = t.validTime,
                                o = t.passengerInfo,
                                c = t.today,
                                l = t.transition,
                                r = t.mask,
                                d = t.maskType,
                                m = t.showTypeList,
                                p = t.cardTypeList,
                                u = t.nameSpec,
                                g = t.moreCountryList,
                                f = t.tags,
                                N = t.tagView,
                                w = t.country,
                                Z = t.showTimeLack,
                                y = t.showResult,
                                V = t.commitSuccess,
                                C = t.isLogin,
                                v = t.totalFlightIntlCouponPrice,
                                I = t.commitFail,
                                b = t.initFail;
                              return (0, x.BX)(x.HY, {
                                children: [
                                  (0, x.BX)(h.View, {
                                    className:
                                      "invite-top " + (a ? "ty" : "zx"),
                                    children: [
                                      (0, x.tZ)(h.View, {
                                        className: "tit",
                                        children: "邀请你去「" + i + "」",
                                      }),
                                      (0, x.tZ)(h.View, {
                                        className: "txt",
                                        children:
                                          "填写你的个人信息，TA帮你买机票",
                                      }),
                                    ],
                                  }),
                                  !y &&
                                    (0, x.BX)(h.View, {
                                      className: "wrap",
                                      children: [
                                        (0, x.BX)(h.View, {
                                          className: "white-box invite-info",
                                          children: [
                                            "Hi，您的好友",
                                            (0, x.tZ)(h.Text, {
                                              className: "color-red",
                                              children: n,
                                            }),
                                            "邀请您填写乘机人信息。请正确填写证件号及有效日期，旅行结束日必须比证件到期日至少早六个月，并在分享后",
                                            (0, x.tZ)(h.Text, {
                                              className: "color-red",
                                              children: s + "分钟内",
                                            }),
                                            "完成填写。",
                                          ],
                                        }),
                                        (0, x.BX)(h.View, {
                                          className: "white-box invite-scan",
                                          children: [
                                            (0, x.BX)(h.View, {
                                              className: "invite-add",
                                              children: [
                                                (0, x.BX)(h.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, x.BX)(h.View, {
                                                      className: "label",
                                                      id: "AcEO",
                                                      onClick:
                                                        this.toggleNameSpec,
                                                      children: [
                                                        "姓（拼音）",
                                                        (0, x.tZ)(h.Text, {
                                                          className:
                                                            "ifont-qus iconfont color-primary",
                                                        }),
                                                        (0, x.tZ)(h.View, {
                                                          className: "txt",
                                                          children: "Surname",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, x.tZ)(h.View, {
                                                      className: "cont",
                                                      children: (0, x.tZ)(
                                                        h.Input,
                                                        {
                                                          type: "text",
                                                          className:
                                                            "input-txt",
                                                          placeholder: "如：LI",
                                                          placeholderClass:
                                                            "input-plder",
                                                          value: o.lastName,
                                                          onInput:
                                                            this.lastNameInput,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, x.BX)(h.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, x.BX)(h.View, {
                                                      className: "label",
                                                      id: "AcEP",
                                                      onClick:
                                                        this.toggleNameSpec,
                                                      children: [
                                                        "名（拼音）",
                                                        (0, x.tZ)(h.Text, {
                                                          className:
                                                            "ifont-qus iconfont color-primary",
                                                        }),
                                                        (0, x.tZ)(h.View, {
                                                          className: "txt",
                                                          children:
                                                            "Given name",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, x.tZ)(h.View, {
                                                      className: "cont",
                                                      children: (0, x.tZ)(
                                                        h.Input,
                                                        {
                                                          type: "text",
                                                          className:
                                                            "input-txt",
                                                          placeholder:
                                                            "如：MEIMEI",
                                                          placeholderClass:
                                                            "input-plder",
                                                          value: o.firstName,
                                                          onInput:
                                                            this.firstNameInput,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            !1,
                                          ],
                                        }),
                                        (0, x.BX)(h.View, {
                                          className: "white-box invite-add",
                                          children: [
                                            (0, x.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "label",
                                                  children: "性别",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "cont",
                                                  children: (0, x.BX)(h.View, {
                                                    className:
                                                      "sex-box " +
                                                      (a ? "ty" : "zx"),
                                                    children: [
                                                      (0, x.BX)(h.View, {
                                                        className:
                                                          "type " +
                                                          ("M" === o.gender
                                                            ? "cur"
                                                            : ""),
                                                        id: "AcEQ",
                                                        onClick: this.chooseSex,
                                                        "data-gender": "M",
                                                        children: [
                                                          "男",
                                                          (0, x.tZ)(h.Text, {
                                                            className:
                                                              "M" === o.gender
                                                                ? "ifont-gou iconfont"
                                                                : "",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, x.BX)(h.View, {
                                                        className:
                                                          "type " +
                                                          ("F" === o.gender
                                                            ? "cur"
                                                            : ""),
                                                        id: "AcER",
                                                        onClick: this.chooseSex,
                                                        "data-gender": "F",
                                                        children: [
                                                          "女",
                                                          (0, x.tZ)(h.Text, {
                                                            className:
                                                              "F" === o.gender
                                                                ? "ifont-gou iconfont"
                                                                : "",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, x.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "label",
                                                  children: "出生日期",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "cont",
                                                  children: (0, x.tZ)(
                                                    h.Picker,
                                                    {
                                                      mode: "date",
                                                      value: o.birthDay,
                                                      start: "1890-01-01",
                                                      end: c,
                                                      onChange:
                                                        this
                                                          .bindBirthDateChange,
                                                      children: o.birthDay
                                                        ? (0, x.tZ)(h.View, {
                                                            className: "txt",
                                                            children:
                                                              o.birthDay,
                                                          })
                                                        : (0, x.tZ)(h.View, {
                                                            className: "tgrey",
                                                            children:
                                                              "请选择出生日期",
                                                          }),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, x.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "label",
                                                  children: "国家/地区",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "cont",
                                                  id: "AcES",
                                                  onClick: this.toggleCountry,
                                                  children: (0, x.tZ)(h.View, {
                                                    className: "txt",
                                                    children: o.countryName,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, x.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "label",
                                                  children: "手机号码",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "cont",
                                                  children: (0, x.tZ)(h.Input, {
                                                    type: "text",
                                                    className: "input-txt",
                                                    placeholder:
                                                      "请输入联系手机号码",
                                                    placeholderClass:
                                                      "input-plder",
                                                    onInput: this.phoneInput,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, x.BX)(h.View, {
                                          className: "white-box invite-add",
                                          children: [
                                            (0, x.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "label",
                                                  children: "证件类型",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "cont",
                                                  children: (0, x.tZ)(h.View, {
                                                    className: "txt",
                                                    id: "AcET",
                                                    onClick:
                                                      this.toggleCardType,
                                                    children: o.passportType,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, x.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "label",
                                                  children: "证件号码",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "cont",
                                                  children: (0, x.tZ)(h.Input, {
                                                    type: "text",
                                                    className: "input-txt",
                                                    placeholder: "请输入证件号",
                                                    placeholderClass:
                                                      "input-plder",
                                                    onInput: this.cardInput,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, x.BX)(h.View, {
                                              className: "item",
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "label",
                                                  children: "证件有效期",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "cont",
                                                  children: (0, x.tZ)(
                                                    h.Picker,
                                                    {
                                                      mode: "date",
                                                      value:
                                                        o.passportLimitTime,
                                                      start: "2010-10-30",
                                                      end: "2030-10-30",
                                                      onChange:
                                                        this.bindDateChange,
                                                      children: (0, x.tZ)(
                                                        h.View,
                                                        {
                                                          className:
                                                            o.passportLimitTime
                                                              ? "txt"
                                                              : "tgrey",
                                                          children:
                                                            o.passportLimitTime ||
                                                            "请选择有效期",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, x.tZ)(h.Button, {
                                          className: "btn-submit btn-primary",
                                          id: "AcEU",
                                          onClick: this.handleSubmit,
                                          children: "确定并提交",
                                        }),
                                        r &&
                                          (0, x.tZ)(h.View, {
                                            className:
                                              "mask " + (l ? "active" : ""),
                                            "data-type": d,
                                            id: "AcEV",
                                            onClick: this.closeMask,
                                          }),
                                        (0, x.tZ)(h.View, {
                                          className:
                                            "idcard-list " +
                                            (m ? "active" : ""),
                                          children: p.map(function (t) {
                                            return (0,
                                            x.tZ)(x.HY, { children: (0, x.BX)(h.View, { className: "idcard-item", "data-type": t, id: "AcEW", onClick: e.chooseType, children: [t, o.passportType == t && (0, x.tZ)(h.Icon, { color: a ? "#fc6e51" : "#0080FF", size: "14", type: "success_no_circle", className: "icon-selected" })] }) });
                                          }),
                                        }),
                                        (0, x.BX)(h.View, {
                                          className:
                                            "pop-botm " + (u ? "active" : ""),
                                          children: [
                                            (0, x.BX)(h.View, {
                                              className: "pop-botm-hd",
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "btn-cancel",
                                                  id: "AcEX",
                                                  onClick: this.toggleNameSpec,
                                                  children: "取消",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "tit",
                                                  children: "填写姓名须知",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className:
                                                    "btn-submit color-primary",
                                                }),
                                              ],
                                            }),
                                            (0, x.BX)(h.ScrollView, {
                                              className: "pop-pasg-info",
                                              scrollY: !0,
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "txt",
                                                  children:
                                                    "1.必须使用英文字符填写，并确保与乘机所持证件一致。",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "txt",
                                                  children:
                                                    "2.英文姓名的填写方法：",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "item",
                                                  children:
                                                    "• 姓名中含有特殊符号“.”“-”等时，在Surname不用输入；在Givenname中用空格代替。",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "item",
                                                  children:
                                                    "• 姓与名总长度须小于24个字符，若过长请联系航司确认缩写信息。",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "item",
                                                  children:
                                                    "• 必须按照护照显示区分姓与名，middlename填写在Givenname（名）栏中。",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "tit",
                                                  children:
                                                    "图示说明(新版护照）",
                                                }),
                                                (0, x.tZ)(h.Image, {
                                                  src: "https://pic.c-ctrip.com/train/zt/flight/passport-new.jpg",
                                                  mode: "widthFix",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "tit",
                                                  children:
                                                    "图示说明(老版护照）",
                                                }),
                                                (0, x.tZ)(h.Image, {
                                                  src: "https://pic.c-ctrip.com/train/zt/flight/passport-old.jpg",
                                                  mode: "widthFix",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, x.BX)(h.View, {
                                          className:
                                            "pop-botm " + (g ? "active" : ""),
                                          id: "AcEY",
                                          onClick: function (e) {
                                            e.stopPropagation();
                                          },
                                          catchMove: !0,
                                          children: [
                                            (0, x.BX)(h.View, {
                                              className: "pop-botm-hd",
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "btn-cancel",
                                                  id: "AcEZ",
                                                  onClick: this.toggleCountry,
                                                  children: "取消",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "tit",
                                                  children: "选择国籍/地区",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className:
                                                    "btn-submit color-primary",
                                                }),
                                              ],
                                            }),
                                            (0, x.BX)(h.View, {
                                              className:
                                                "pop-botm-bd country-bd",
                                              children: [
                                                (0, x.tZ)(h.View, {
                                                  className: "tag-letter",
                                                  children: f.map(function (t) {
                                                    return (0,
                                                    x.tZ)(x.HY, { children: (0, x.tZ)(h.Text, { className: "letter color-primary", id: "AcEa", onClick: e.tagClick, "data-tag": t, children: "hot" === t ? "热门" : t }) });
                                                  }),
                                                }),
                                                (0, x.tZ)(h.ScrollView, {
                                                  className: "country",
                                                  scrollY: "true",
                                                  scrollWithAnimation: "true",
                                                  scrollIntoView: N,
                                                  children: w.map(function (t) {
                                                    return (0, x.tZ)(x.HY, {
                                                      children: (0, x.BX)(
                                                        h.View,
                                                        {
                                                          className: "box",
                                                          children: [
                                                            (0, x.tZ)(h.View, {
                                                              className:
                                                                "title",
                                                              id: t.t,
                                                              children: t.title,
                                                            }),
                                                            (0, x.tZ)(h.View, {
                                                              className:
                                                                "country",
                                                              children: t.r.map(
                                                                function (t) {
                                                                  return (0,
                                                                  x.tZ)(x.HY, {
                                                                    children:
                                                                      (0, x.BX)(
                                                                        h.View,
                                                                        {
                                                                          className:
                                                                            "col",
                                                                          "data-name":
                                                                            t.RegionName,
                                                                          "data-code":
                                                                            t.RegionCode,
                                                                          id: "AcEb",
                                                                          onClick:
                                                                            e.handleCountrySelect,
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              x.tZ)(
                                                                                h.Text,
                                                                                {
                                                                                  className:
                                                                                    "name",
                                                                                  children:
                                                                                    t.RegionName,
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              x.tZ)(
                                                                                h.Text,
                                                                                {
                                                                                  className:
                                                                                    "code",
                                                                                  children:
                                                                                    t.RegionCode,
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                  });
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    });
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, x.tZ)(h.View, {
                                          className:
                                            "pop-mid " + (Z ? "active" : ""),
                                          children: (0, x.tZ)(h.View, {
                                            className: "pop-mid-bd",
                                            children: (0, x.BX)(h.View, {
                                              className: "pop-white",
                                              children: [
                                                (0, x.BX)(h.View, {
                                                  className: "pop-content",
                                                  children: [
                                                    (0, x.tZ)(h.View, {
                                                      className: "tit",
                                                      children: "温馨提示",
                                                    }),
                                                    (0, x.tZ)(h.View, {
                                                      className:
                                                        "pop-content-txt",
                                                      children:
                                                        "您证件有效期不足6个月，请更新证件后再预订机票",
                                                    }),
                                                  ],
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "pop-btn",
                                                  id: "AcEc",
                                                  onClick: this.toggleTimeLack,
                                                  children: (0, x.tZ)(h.View, {
                                                    className:
                                                      "btn-txt color-primary",
                                                    children: "我知道了",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  y &&
                                    (0, x.BX)(h.View, {
                                      className: "wrap",
                                      children: [
                                        V &&
                                          (0, x.tZ)(h.View, {
                                            className:
                                              "white-box invite-result",
                                            children: (0, x.BX)(h.View, {
                                              className: "invite-result-bd",
                                              children: [
                                                (0, x.tZ)(h.Icon, {
                                                  className: "icon-suc",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "tit",
                                                  children: "提交成功！",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "txt",
                                                  children:
                                                    "信息已提交成功\n您的好友可在智行中刷新查看到哦",
                                                }),
                                                !C &&
                                                  (0, x.tZ)(h.Button, {
                                                    className:
                                                      "btn-get btn-primary",
                                                    openType: "getPhoneNumber",
                                                    onGetphonenumber:
                                                      this.getCounponInfo,
                                                    children:
                                                      "新客可领取最高95元专属福利",
                                                  }),
                                                C &&
                                                  0 !== v &&
                                                  (0, x.tZ)(h.Button, {
                                                    className:
                                                      "btn-get btn-primary",
                                                    id: "AcEd",
                                                    onClick: this.goToIndex,
                                                    children:
                                                      "新客可领取最高95元专属福利",
                                                  }),
                                                C &&
                                                  0 === v &&
                                                  (0, x.tZ)(h.Button, {
                                                    className:
                                                      "btn-get btn-primary",
                                                    id: "AcEe",
                                                    onClick: this.goToIndex,
                                                    children:
                                                      "前往" +
                                                      (a ? "铁友" : "智行"),
                                                  }),
                                                (0, x.tZ)(h.Button, {
                                                  className: "btn-goon",
                                                  id: "AcEf",
                                                  onClick: this.goBackWrite,
                                                  children: "继续添加",
                                                }),
                                              ],
                                            }),
                                          }),
                                        I &&
                                          (0, x.tZ)(h.View, {
                                            className:
                                              "white-box invite-result",
                                            children: (0, x.BX)(h.View, {
                                              className: "invite-result-bd",
                                              children: [
                                                (0, x.tZ)(h.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/flight/icon-time.png",
                                                  className: "img",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "tit",
                                                  children: "提交失败！",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "txt",
                                                  children:
                                                    "页面超过15分钟\n请告知好友重新发起并填写~",
                                                }),
                                              ],
                                            }),
                                          }),
                                        b &&
                                          (0, x.tZ)(h.View, {
                                            className:
                                              "white-box invite-result",
                                            children: (0, x.BX)(h.View, {
                                              className: "invite-result-bd",
                                              children: [
                                                (0, x.tZ)(h.Icon, {
                                                  className: "icon-fail",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "tit",
                                                  children: "页面信息已过期",
                                                }),
                                                (0, x.tZ)(h.View, {
                                                  className: "txt",
                                                  children:
                                                    "请告知好友重新发起并填写~",
                                                }),
                                              ],
                                            }),
                                          }),
                                        (0, x.BX)(h.View, {
                                          className: "invite-advant",
                                          children: [
                                            (0, x.tZ)(h.View, {
                                              className: "invite-advant-hd",
                                              children: "智行国际机票",
                                            }),
                                            (0, x.BX)(h.View, {
                                              className: "invite-advant-bd",
                                              children: [
                                                (0, x.BX)(h.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, x.tZ)(h.Icon, {
                                                      className: "icon-advant1",
                                                    }),
                                                    (0, x.tZ)(h.View, {
                                                      className: "txt",
                                                      children:
                                                        "智行机票新客特权\n最高95元优惠券",
                                                    }),
                                                  ],
                                                }),
                                                (0, x.BX)(h.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, x.tZ)(h.Icon, {
                                                      className: "icon-advant2",
                                                    }),
                                                    (0, x.tZ)(h.View, {
                                                      className: "txt",
                                                      children:
                                                        "智行机票特惠\n全网低价不怕比价",
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
                            },
                          },
                        ]),
                        a
                      );
                    })(d.default.Component))
                  ) || i)
              ) || i;
          (F.enableShareAppMessage = !0),
            Page(
              (0, n.createPageConfig)(
                F,
                "pages/flight/invite/invite",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "",
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
        e.O(0, [49608, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(7752);
        }),
          e.O();
      },
    ]);
})();
