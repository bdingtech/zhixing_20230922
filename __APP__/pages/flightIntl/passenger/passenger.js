!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [68461],
      {
        76654: function (e, t, a) {
          var i,
            n = a(32180),
            s = a(79301),
            r = a(90129),
            c = a(95308),
            l = a(57042),
            o = a(24460),
            m = a(81876),
            p = a(21867),
            d = a(86066),
            h = a(45023),
            u = a(90983),
            g = a(298),
            f = a(52500),
            N = a(71515),
            w = a(92954),
            Z = a.n(w),
            y = a(81957),
            v = a(48792),
            C = a.n(v),
            V = a(2326),
            b = a(79910),
            T = a(79792),
            x = a(49120),
            k = a(8271),
            B = a.n(k),
            D = a(83016),
            L = a(55916),
            X = a(58676),
            I = a(21999),
            S = a(77900),
            P = a(18433),
            M = a(48813),
            A = function (e) {
              var t,
                a = e.idx,
                i = e.data,
                n = e.scrollIntoView,
                s = e.observeCallback,
                r = (0, P.Z)({
                  selector: ".flt-intl-pas-page >>> #nav-wrap",
                  targetSelector: ".flt-intl-pas-page >>> #content-".concat(a),
                  observeCallback: function (e) {
                    s(e, a);
                  },
                  callbackDeps: [n],
                });
              return (0, M.BX)(N.View, {
                id: "content-".concat(a),
                ref: r,
                className: "content-item",
                children: [
                  (0, M.tZ)(N.View, {
                    className: "content-title",
                    children: i.title,
                  }),
                  i.samplePic &&
                    (0, M.tZ)(N.Image, {
                      className: "sample-pic",
                      mode: "widthFix",
                      src: i.samplePic,
                    }),
                  null === (t = i.contents) || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return (0,
                        M.BX)(f.default.Fragment, { children: [(0, M.tZ)(N.View, { className: "sub-tit", children: e.subTitle }), (0, M.tZ)(N.View, { className: "sub-cont", children: e.content })] }, e.subTitle);
                      }),
                ],
              });
            },
            E = function () {
              var e = [
                  {
                    title: "填写说明",
                    contents: [
                      {
                        subTitle: "姓名确认",
                        content:
                          "填写的姓名与证件信息需要确保与乘机所持证件一致。例如吕请确认是LYU、LV还是LU。",
                      },
                      {
                        subTitle: "姓名长度",
                        content:
                          "姓与名总长度须小于等于24个字符，若过长请联系航司确认缩写信息。",
                      },
                      {
                        subTitle: "特殊符号",
                        content:
                          "姓名中含有特殊符号“·”“-”等时，在Surname不用输入；在Given name中用空格代替。",
                      },
                      {
                        subTitle: "港澳台",
                        content:
                          "中国香港、澳门、台湾的护照不支持国内航班，请改用其他证件。",
                      },
                    ],
                  },
                  {
                    title: "新版护照",
                    samplePic:
                      "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/bianjichengjiren/xinban.png",
                  },
                  {
                    title: "旧版护照",
                    samplePic:
                      "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/bianjichengjiren/jiuban.png",
                  },
                  {
                    title: "港澳通行证",
                    samplePic:
                      "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/bianjichengjiren/gangao.png",
                  },
                  {
                    title: "台湾通行证",
                    samplePic:
                      "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/bianjichengjiren/taiwan.png",
                  },
                  {
                    title: "回乡证",
                    samplePic:
                      "https://images3.c-ctrip.com/ztrip/zhixingios/liuxiaomin/bianjichengjiren/huixiang.png",
                  },
                ],
                t = (0, f.useState)(0),
                a = (0, r.Z)(t, 2),
                i = a[0],
                n = a[1],
                s = (0, f.useState)(""),
                c = (0, r.Z)(s, 2),
                l = c[0],
                o = c[1],
                m = (0, f.useState)(""),
                p = (0, r.Z)(m, 2),
                d = p[0],
                h = p[1],
                u = function (e, t) {
                  if (l) return o(""), void h("");
                  e.intersectionRatio > 0 && (n(t), h("nav-".concat(t)));
                };
              return (0, M.BX)(N.View, {
                className: "flt-filling-standard flex flex-column flex-1",
                children: [
                  (0, M.tZ)(N.ScrollView, {
                    enableFlex: !0,
                    scrollX: !0,
                    className: "nav-wrap",
                    id: "nav-wrap",
                    scrollWithAnimation: !0,
                    scrollIntoView: d,
                    children: e.map(function (e, t) {
                      return (0, M.tZ)(
                        N.View,
                        {
                          id: "nav-".concat(t),
                          className: "nav-item ".concat(i == t ? "active" : ""),
                          onClick: function () {
                            n(t), o("content-".concat(t));
                          },
                          children: e.title,
                        },
                        e.title
                      );
                    }),
                  }),
                  (0, M.tZ)(N.View, {
                    className: "flex-1",
                    style: "overflow: hidden;",
                    children: (0, M.BX)(N.ScrollView, {
                      id: "standard-wrap",
                      className: "standard-cont",
                      scrollY: !0,
                      scrollWithAnimation: !0,
                      scrollIntoView: l,
                      children: [
                        (0, M.tZ)(N.View, {
                          className: "tips flex-center",
                          children:
                            "必须使用英文字符填写，并确保与乘机所持证件一致。",
                        }),
                        e.map(function (e, t) {
                          return (0,
                          M.tZ)(A, { idx: t, data: e, scrollIntoView: l, observeCallback: u }, e.title);
                        }),
                      ],
                    }),
                  }),
                ],
              });
            },
            _ = function (e) {
              var t = e.name,
                a = e.pinyinList,
                i = e.onPinyinClick,
                n = e.onClose;
              return (0, M.BX)(N.View, {
                className: "choose-name-pinyin flex flex-column",
                children: [
                  (0, M.BX)(N.View, {
                    className: "hd-wrap flex flex-column flex-center",
                    children: [
                      (0, M.tZ)(N.View, {
                        className: "hd-tit",
                        children: "请确认多音字的正确拼写",
                      }),
                      (0, M.tZ)(N.View, { className: "hd-name", children: t }),
                    ],
                  }),
                  (0, M.tZ)(N.View, {
                    className: "flex-1 pinyin-list-wrap",
                    children: (0, M.tZ)(N.ScrollView, {
                      scrollY: !0,
                      className: "flex-1",
                      children: a.map(function (e) {
                        return (0, M.tZ)(
                          N.View,
                          {
                            className: "pinyin-item flex-center",
                            onClick: function () {
                              return (function (e) {
                                i(e), null == n || n();
                              })(e);
                            },
                            children: e,
                          },
                          e
                        );
                      }),
                    }),
                  }),
                  (0, M.tZ)(N.View, {
                    className: "btn-wrap",
                    children: (0, M.tZ)(N.Button, {
                      className: "btn flex-center",
                      onClick: function () {
                        null == n || n();
                      },
                      children: "手动输入",
                    }),
                  }),
                ],
              });
            },
            F = function (e) {
              var t = e.name,
                a = e.pinyinList;
              if ((null == a ? void 0 : a.length) > 0 && t)
                return new Promise(function (e) {
                  var i = (0, x.getCurrentPage)();
                  null == i ||
                    i.showCommonDrawer({
                      hideTitle: !0,
                      hideClose: !1,
                      content: function (i) {
                        var n = i.onClose;
                        return (0, M.tZ)(_, {
                          name: t,
                          pinyinList: a,
                          onPinyinClick: function (t) {
                            return e(t);
                          },
                          onClose: n,
                        });
                      },
                      beforeClose: function () {
                        e();
                      },
                    });
                });
            },
            j = ["护照", "台胞证", "回乡证", "港澳通行证", "台湾通行证"],
            Y = "YYYY-MM-DD",
            z = {
              passengerType: "",
              passengerID: "",
              passengerENLastName: "",
              nationality: "",
              mobile: "",
              passportCode: "",
              passportType: "",
              passengerENFirstName: "",
              cardTimeLimit: "",
              passengerName: "",
              countryCode: "",
              passengerBirth: "",
              gender: "",
            },
            q = {
              pageId: "10650060685",
              data: {
                isTieyou: T.default.isTieyou,
                passenger: {},
                flightDepartDate: "",
                cardTypeList: j,
                today: "",
                birthDateEndDate: "",
                countryName: "",
                country: [],
                tags: [],
                tagView: "",
                mask: !1,
                maskType: "",
                transition: !1,
                showTypeList: !1,
                moreCountryList: !1,
                nameSpec: !1,
                showTimeLack: !1,
              },
              onLoad: function (e) {
                var t = e.data,
                  a = void 0 === t ? {} : t,
                  i = a.passenger,
                  n = void 0 === i ? {} : i,
                  s = a.flightDepartDate,
                  r = void 0 === s ? "" : s,
                  c = (0, g.Z)((0, g.Z)({}, z), n);
                c.passportType
                  ? c.passportType &&
                    !j.some(function (e) {
                      return e === c.passportType;
                    }) &&
                    ((c.passportType = "护照"),
                    (c.passportCode = ""),
                    (c.passengerENFirstName = ""),
                    (c.passengerENLastName = ""))
                  : (c.passportType = "护照"),
                  c.cardTimeLimit ||
                    (c.cardTimeLimit = B()().add(365, "day").format(Y));
                var l = B()().format(Y),
                  o = r ? B()(r).format(Y) : l;
                this.setData({
                  passenger: c,
                  today: l,
                  birthDateEndDate: o,
                  flightDepartDate: r,
                }),
                  this.getCountryData();
              },
              onShow: function () {
                var e = this.data.passenger;
                b.Z.setTitle(e.passengerID ? "编辑乘机人" : "新建乘机人");
              },
              getCountryData: function () {
                var e = this;
                Z().request({
                  url: "https://market.suanya.com/libs/country_list/country_list.json",
                  success: function (t) {
                    var a = t.data.data,
                      i = e.data.passenger,
                      n = e.getCountryName(i.nationality, a);
                    e.setData({
                      country: a,
                      tags: a.map(function (e) {
                        return e.t;
                      }),
                      countryName: n,
                    });
                  },
                });
              },
              ENFirstNameInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger,
                  i = (0, g.Z)(
                    (0, g.Z)({}, a),
                    {},
                    { passengerENFirstName: t.trim().toUpperCase() }
                  );
                this.setData({ passenger: i });
              },
              ENLastNameInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger,
                  i = (0, g.Z)(
                    (0, g.Z)({}, a),
                    {},
                    { passengerENLastName: t.trim().toUpperCase() }
                  );
                this.setData({ passenger: i });
              },
              handleZhNameInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger;
                this.setData({
                  passenger: (0, g.Z)(
                    (0, g.Z)({}, a),
                    {},
                    { passengerName: t }
                  ),
                });
              },
              switchGender: function (e) {
                var t = e.currentTarget.dataset.type,
                  a = this.data.passenger,
                  i = (0, g.Z)((0, g.Z)({}, a), {}, { gender: t });
                this.setData({ passenger: i });
              },
              birthdayChange: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger,
                  i = (0, g.Z)(
                    (0, g.Z)({}, a),
                    {},
                    { passengerBirth: B()(t).format(Y) }
                  );
                this.setData({ passenger: i });
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
                  n = this.data.passenger,
                  s = (0, g.Z)((0, g.Z)({}, n), {}, { nationality: i });
                this.setData({ passenger: s, countryName: a }),
                  this.toggleCountry();
              },
              tagClick: function (e) {
                var t = e.currentTarget.dataset.tag;
                console.log(t), this.setData({ tagView: t });
              },
              getCountryName: function (e, t) {
                var a = "";
                if ((null == t ? void 0 : t.length) > 0) {
                  var i,
                    n = (0, u.Z)(t);
                  try {
                    for (n.s(); !(i = n.n()).done; ) {
                      var s,
                        r = i.value,
                        c = (0, u.Z)(r.r);
                      try {
                        for (c.s(); !(s = c.n()).done; ) {
                          var l = s.value;
                          if (l.RegionCode === e) {
                            a = l.RegionName;
                            break;
                          }
                        }
                      } catch (e) {
                        c.e(e);
                      } finally {
                        c.f();
                      }
                    }
                  } catch (e) {
                    n.e(e);
                  } finally {
                    n.f();
                  }
                }
                return a;
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
                  a = this.data.passenger,
                  i = (0, g.Z)((0, g.Z)({}, a), {}, { passportType: t });
                this.setData({
                  passenger: i,
                  birthDateHidden: "身份证" === t || "户口簿" === t,
                }),
                  this.toggleCardType();
              },
              passportCodeInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger,
                  i = (0, g.Z)(
                    (0, g.Z)({}, a),
                    {},
                    { passportCode: t.trim().toUpperCase() }
                  );
                this.setData({ passenger: i });
              },
              cardTimeLimitChange: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger,
                  i = (0, g.Z)(
                    (0, g.Z)({}, a),
                    {},
                    { cardTimeLimit: B()(t).format(Y) }
                  );
                this.setData({ passenger: i });
              },
              phoneNumberInput: function (e) {
                var t = e.detail.value,
                  a = this.data.passenger,
                  i = (0, g.Z)((0, g.Z)({}, a), {}, { mobile: t.trim() });
                this.setData({ passenger: i });
              },
              handleClick: function () {
                var e = this.data,
                  t = e.passenger,
                  a = e.flightDepartDate,
                  i = b.Z.deepCopy(t);
                if (!i.passengerENFirstName || !i.passengerENLastName)
                  return (0, x.showModal)("名字不能为空");
                if (!i.gender) return (0, x.showModal)("请选择性别");
                if (!i.passengerBirth)
                  return (0, x.showModal)("出生日期不能为空");
                if (!i.nationality) return (0, x.showModal)("请选择国籍");
                if (!i.passportType) return (0, x.showModal)("请选择证件类型");
                if (!i.passportCode)
                  return (0, x.showModal)("证件号码不能为空");
                if (
                  !S.Z.isValidEnName(i.passengerENFirstName) ||
                  !S.Z.isValidEnName(i.passengerENLastName)
                )
                  return (0, x.showModal)("无效的姓名");
                if (!new Date(i.passengerBirth))
                  return (0, x.showModal)("无效的出生日期");
                if (!S.Z.isValidIdCode(i.passportType, i.passportCode))
                  return (0, x.showModal)("无效的证件号码");
                if (i.mobile && !S.Z.isMobile(i.mobile))
                  return (0, x.showModal)("手机号格式不正确");
                var n = B()().add(6, "month").format("YYYY-MM-DD");
                V.Z.compareDateToDate(n, i.cardTimeLimit)
                  ? this.toggleTimeLack()
                  : ((i.passengerType = (0, D.PX)(i, a)),
                    console.log(i),
                    this.SavePassenger(i));
              },
              SavePassenger: function (e) {
                var t = this;
                if (e) {
                  var a = {
                    commonPassengerInfo: (0, g.Z)({}, e),
                    ruleCheckFlag: 1,
                    confirmedCodes: this._confirmedCodes,
                  };
                  (0, x.showLoading)(),
                    (0, L.uK)(a)
                      .then(function (a) {
                        var i,
                          n = a.resultCode,
                          s = a.resultMessage,
                          r = a.blockIssues,
                          c = a.skipIssues;
                        if (1 == n)
                          return (
                            t._confirmedCodes.splice(
                              0,
                              (null === (i = t._confirmedCodes) || void 0 === i
                                ? void 0
                                : i.length) || 0
                            ),
                            t.invokeCallback(e),
                            void setTimeout(function () {
                              t.navigateBack();
                            }, 100)
                          );
                        if (100 != n)
                          if (101 != n) t.showCommonDialog(s);
                          else {
                            var l = null == c ? void 0 : c[0],
                              o = l.code,
                              m = l.msg;
                            t.showMultiButtonDialog({
                              hideTitle: !0,
                              content: m,
                              leftButtonName: "确认无误",
                              onLeftButtonClick: function () {
                                t._confirmedCodes.push(o), t.SavePassenger(e);
                              },
                              rightButtonName: "去修改",
                            });
                          }
                        else {
                          var p = (null == r ? void 0 : r[0]).msg;
                          t.showCommonDialog({
                            hideTitle: !0,
                            content: p,
                            buttonName: "去修改",
                          });
                        }
                      })
                      .finally(x.hideLoading);
                }
              },
              closeMask: function (e) {
                var t = e.currentTarget.dataset.type;
                "nameSpec" === t
                  ? this.toggleNameSpec()
                  : "card" === t
                  ? this.toggleCardType()
                  : "country" === t && this.toggleCountry();
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
              noop: function () {},
            },
            G =
              (0, y.h)()(
                (i =
                  C()(q)(
                    (i = (function (e) {
                      (0, p.Z)(a, e);
                      var t = (0, d.Z)(a);
                      function a() {
                        var e;
                        (0, l.Z)(this, a);
                        for (
                          var i = arguments.length, n = new Array(i), s = 0;
                          s < i;
                          s++
                        )
                          n[s] = arguments[s];
                        return (
                          (e = t.call.apply(t, [this].concat(n))),
                          (0, h.Z)((0, m.Z)(e), "_confirmedCodes", []),
                          e
                        );
                      }
                      return (
                        (0, o.Z)(a, [
                          {
                            key: "handleZhCN2Pinyin",
                            value: (function () {
                              var e = (0, c.Z)(
                                (0, s.Z)().mark(function e() {
                                  var t, a, i, n, c, l, o, m, p, d, h;
                                  return (0, s.Z)().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (
                                              ((a = this.data.passenger),
                                              (i = (a || {})
                                                .passengerName).trim())
                                            ) {
                                              e.next = 5;
                                              break;
                                            }
                                            return (
                                              this.setData({
                                                passenger: (0, g.Z)(
                                                  (0, g.Z)({}, a),
                                                  {},
                                                  { passengerName: i.trim() }
                                                ),
                                              }),
                                              e.abrupt(
                                                "return",
                                                (0, x.showToast)("请输入姓名")
                                              )
                                            );
                                          case 5:
                                            return (
                                              (n = { userName: i }),
                                              (0, x.showLoading)(),
                                              (e.next = 9),
                                              (0, L.aB)(n, {
                                                cacheControl: { useCache: !0 },
                                              })
                                            );
                                          case 9:
                                            if (
                                              ((c = e.sent),
                                              (0, x.hideLoading)(),
                                              !(
                                                (null ===
                                                  (t = c.userNameSpelling) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.length) > 0
                                              ))
                                            ) {
                                              e.next = 25;
                                              break;
                                            }
                                            if (
                                              ((l = ""),
                                              1 !=
                                                (o = c.userNameSpelling).length)
                                            ) {
                                              e.next = 18;
                                              break;
                                            }
                                            (l = o[0]), (e.next = 22);
                                            break;
                                          case 18:
                                            if (!(o.length > 1)) {
                                              e.next = 22;
                                              break;
                                            }
                                            return (
                                              (e.next = 21),
                                              F({ name: i, pinyinList: o })
                                            );
                                          case 21:
                                            l = e.sent;
                                          case 22:
                                            l &&
                                              ((m = l.split(" ") || []),
                                              (p = (0, r.Z)(m, 2)),
                                              (d = p[0]),
                                              (h = p[1]),
                                              this.setData({
                                                passenger: (0, g.Z)(
                                                  (0, g.Z)({}, a),
                                                  {},
                                                  {
                                                    passengerENLastName: d,
                                                    passengerENFirstName: h,
                                                  }
                                                ),
                                              })),
                                              (e.next = 26);
                                            break;
                                          case 25:
                                            (0, x.showToast)(
                                              "转拼音失败，请重试"
                                            );
                                          case 26:
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
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.passenger,
                                i = t.isTieyou,
                                n = t.today,
                                s = t.countryName,
                                r = t.transition,
                                c = t.mask,
                                l = t.maskType,
                                o = t.showTypeList,
                                m = t.cardTypeList,
                                p = t.nameSpec,
                                d = t.moreCountryList,
                                h = t.tags,
                                u = t.tagView,
                                g = t.country,
                                f = t.showTimeLack;
                              return (0, M.BX)(N.View, {
                                className: "flt-intl-pas-page",
                                children: [
                                  (0, M.BX)(N.View, {
                                    className: "section-text-warp",
                                    children: [
                                      (0, M.BX)(N.View, {
                                        className: "pasg-tips flex",
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "tip-cont flex-1",
                                            children:
                                              "姓名与乘机人证件一致，否则会影响登机",
                                          }),
                                          (0, M.BX)(N.View, {
                                            className: "filling-standard-btn",
                                            onClick: function () {
                                              (0,
                                              x.getCurrentPage)().showCommonDrawer(
                                                {
                                                  hideTitle: !1,
                                                  title: "填写规范",
                                                  content: function () {
                                                    return (0, M.tZ)(E, {});
                                                  },
                                                  className:
                                                    "flt-filling-standard-drawer",
                                                }
                                              );
                                            },
                                            children: [
                                              "填写规范",
                                              (0, M.tZ)(N.Text, {
                                                className:
                                                  "iconfont2 ifont2-arr",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "passenger-item",
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "title",
                                            children: "中文姓名",
                                          }),
                                          (0, M.BX)(N.View, {
                                            className:
                                              "cont flex-align-items-center",
                                            children: [
                                              (0, M.tZ)(N.Input, {
                                                className:
                                                  "passenger-item_input flex-1",
                                                placeholder: "选填，用于转拼音",
                                                type: "text",
                                                maxlength: "50",
                                                placeholderClass:
                                                  "input-placeholder",
                                                value: a.passengerName,
                                                onInput: this.handleZhNameInput,
                                              }),
                                              (0, M.tZ)(N.Button, {
                                                className: "to-pinyin",
                                                onClick: this.handleZhCN2Pinyin,
                                                children: "转拼音",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "passenger-item",
                                        children: [
                                          (0, M.BX)(N.View, {
                                            className: "title",
                                            children: [
                                              "姓(拼音)",
                                              (0, M.tZ)(N.Text, {
                                                className:
                                                  "iconfont ifont-detail",
                                                id: "AaBp",
                                                onClick: this.toggleNameSpec,
                                              }),
                                            ],
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "cont",
                                            children: (0, M.tZ)(N.Input, {
                                              className: "passenger-item_input",
                                              placeholder: "如：Li,Surname",
                                              type: "text",
                                              maxlength: "50",
                                              placeholderClass:
                                                "input-placeholder",
                                              value: a.passengerENLastName,
                                              onInput: this.ENLastNameInput,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "passenger-item",
                                        children: [
                                          (0, M.BX)(N.View, {
                                            className: "title",
                                            children: [
                                              "名(拼音)",
                                              (0, M.tZ)(N.Text, {
                                                className:
                                                  "iconfont ifont-detail",
                                                id: "AaBq",
                                                onClick: this.toggleNameSpec,
                                              }),
                                            ],
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "cont",
                                            children: (0, M.tZ)(N.Input, {
                                              className: "passenger-item_input",
                                              placeholder: "如：Li,Give name",
                                              type: "text",
                                              maxlength: "50",
                                              placeholderClass:
                                                "input-placeholder",
                                              value: a.passengerENFirstName,
                                              onInput: this.ENFirstNameInput,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "passenger-item",
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "title",
                                            children: "性别",
                                          }),
                                          (0, M.BX)(N.View, {
                                            className: "cont",
                                            children: [
                                              (0, M.BX)(N.View, {
                                                className:
                                                  "sex-item " +
                                                  ("M" === a.gender
                                                    ? i
                                                      ? "tycur"
                                                      : "zxcur"
                                                    : ""),
                                                "data-type": "M",
                                                id: "AaBr",
                                                onClick: this.switchGender,
                                                children: [
                                                  "男",
                                                  "M" === a.gender &&
                                                    (0, M.tZ)(N.Text, {
                                                      className:
                                                        "ifont-selected iconfont",
                                                    }),
                                                ],
                                              }),
                                              (0, M.BX)(N.View, {
                                                className:
                                                  "sex-item " +
                                                  ("F" === a.gender
                                                    ? i
                                                      ? "tycur"
                                                      : "zxcur"
                                                    : ""),
                                                "data-type": "F",
                                                id: "AaBs",
                                                onClick: this.switchGender,
                                                children: [
                                                  "女",
                                                  "F" === a.gender &&
                                                    (0, M.tZ)(N.Text, {
                                                      className:
                                                        "ifont-selected iconfont",
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "passenger-item",
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "title",
                                            children: "出生日期",
                                          }),
                                          (0, M.BX)(N.Picker, {
                                            className: "passenger-item_picker",
                                            mode: "date",
                                            start: "1890-01-01",
                                            end: n,
                                            value: a.passengerBirth,
                                            onChange: this.birthdayChange,
                                            children: [
                                              (0, M.tZ)(N.View, {
                                                className:
                                                  "passenger-item_input " +
                                                  (a.passengerBirth
                                                    ? ""
                                                    : "tgrey"),
                                                children:
                                                  "" === a.passengerBirth
                                                    ? "请输入出生日期"
                                                    : a.passengerBirth,
                                              }),
                                              (0, M.tZ)(N.Text, {
                                                className: "ifont-arr iconfont",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "passenger-item",
                                        id: "AaBt",
                                        onClick: this.toggleCountry,
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "title",
                                            children: "国籍/地区",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "cont",
                                            children: (0, M.tZ)(N.Text, {
                                              className:
                                                "passenger-item_input " +
                                                (s ? "" : "tgrey"),
                                              children: s || "请选择国籍",
                                            }),
                                          }),
                                          (0, M.tZ)(N.Text, {
                                            className: "ifont-arr iconfont",
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "passenger-item",
                                        id: "AaBu",
                                        onClick: this.toggleCardType,
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "title",
                                            children: "证件类型",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "cont",
                                            children: (0, M.tZ)(N.Text, {
                                              className: "passenger-item_input",
                                              children: a.passportType,
                                            }),
                                          }),
                                          (0, M.tZ)(N.Text, {
                                            className: "ifont-arr iconfont",
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "passenger-item",
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "title",
                                            children: "证件号码",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "cont",
                                            children: (0, M.tZ)(N.Input, {
                                              className: "passenger-item_input",
                                              placeholder: "请输入证件号码",
                                              placeholderClass:
                                                "input-placeholder",
                                              maxlength: "50",
                                              "data-type": a.passportType,
                                              value: a.passportCode,
                                              onInput: this.passportCodeInput,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "passenger-item",
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "title",
                                            children: "证件有效期",
                                          }),
                                          (0, M.BX)(N.Picker, {
                                            className: "passenger-item_picker",
                                            mode: "date",
                                            start: n,
                                            end: B()(n)
                                              .add(30, "year")
                                              .endOf("year")
                                              .format(Y),
                                            value: a.cardTimeLimit,
                                            onChange: this.cardTimeLimitChange,
                                            children: [
                                              (0, M.tZ)(N.View, {
                                                className:
                                                  "passenger-item_input",
                                                children: a.cardTimeLimit,
                                              }),
                                              (0, M.tZ)(N.Text, {
                                                className: "ifont-arr iconfont",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "passenger-item",
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "title",
                                            children: "手机号码",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "cont",
                                            children: (0, M.tZ)(N.Input, {
                                              className: "passenger-item_input",
                                              placeholder: "请输入联系手机号码",
                                              placeholderClass:
                                                "input-placeholder",
                                              maxlength: "20",
                                              value: a.mobile,
                                              onInput: this.phoneNumberInput,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, M.tZ)(N.View, {
                                    className: "btn-botm",
                                    children: (0, M.tZ)(N.Button, {
                                      className: "btn btn-primary",
                                      hoverClass: "btn-primary_hover",
                                      id: "AaBv",
                                      onClick: this.handleClick,
                                      children: "确定",
                                    }),
                                  }),
                                  c &&
                                    (0, M.tZ)(N.View, {
                                      className: "mask " + (r ? "active" : ""),
                                      "data-type": l,
                                      id: "AaBw",
                                      onClick: this.closeMask,
                                    }),
                                  (0, M.tZ)(N.View, {
                                    className:
                                      "idcard-list " + (o ? "active" : ""),
                                    children: m.map(function (t) {
                                      return (0,
                                      M.tZ)(M.HY, { children: (0, M.BX)(N.View, { className: "idcard-item", "data-type": t, id: "AaBx", onClick: e.chooseType, children: [t, a.passportType == t && (0, M.tZ)(N.Icon, { color: i ? "#fc6e51" : "#0080FF", size: "14", type: "success_no_circle", className: "icon-selected" })] }) });
                                    }),
                                  }),
                                  (0, M.BX)(N.View, {
                                    className:
                                      "pop-botm " + (p ? "active" : ""),
                                    children: [
                                      (0, M.BX)(N.View, {
                                        className: "pop-botm-hd",
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "btn-cancel",
                                            id: "AaBy",
                                            onClick: this.toggleNameSpec,
                                            children: "取消",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "tit",
                                            children: "填写姓名须知",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className:
                                              "btn-submit color-primary",
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.ScrollView, {
                                        className: "pop-pasg-info",
                                        scrollY: !0,
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "txt",
                                            children:
                                              "1.必须使用英文字符填写，并确保与乘机所持证件一致。",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "txt",
                                            children: "2.英文姓名的填写方法：",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "item",
                                            children:
                                              "• 姓名中含有特殊符号“.”“-”等时，在Surname不用输入；在Givenname中用空格代替。",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "item",
                                            children:
                                              "• 姓与名总长度须小于24个字符，若过长请联系航司确认缩写信息。",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "item",
                                            children:
                                              "• 必须按照护照显示区分姓与名，middlename填写在Givenname（名）栏中。",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "tit",
                                            children: "图示说明(新版护照）",
                                          }),
                                          (0, M.tZ)(N.Image, {
                                            src: "https://pic.c-ctrip.com/train/zt/flight/passport-new.jpg",
                                            mode: "widthFix",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "tit",
                                            children: "图示说明(老版护照）",
                                          }),
                                          (0, M.tZ)(N.Image, {
                                            src: "https://pic.c-ctrip.com/train/zt/flight/passport-old.jpg",
                                            mode: "widthFix",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, M.BX)(N.View, {
                                    className:
                                      "pop-botm " + (d ? "active" : ""),
                                    id: "AaBz",
                                    onClick: function (e) {
                                      e.stopPropagation();
                                    },
                                    catchMove: !0,
                                    children: [
                                      (0, M.BX)(N.View, {
                                        className: "pop-botm-hd",
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "btn-cancel",
                                            id: "AaCA",
                                            onClick: this.toggleCountry,
                                            children: "取消",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "tit",
                                            children: "选择国籍/地区",
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className:
                                              "btn-submit color-primary",
                                          }),
                                        ],
                                      }),
                                      (0, M.BX)(N.View, {
                                        className: "pop-botm-bd country-bd",
                                        children: [
                                          (0, M.tZ)(N.View, {
                                            className: "tag-letter",
                                            children: h.map(function (t) {
                                              return (0,
                                              M.tZ)(M.HY, { children: (0, M.tZ)(N.Text, { className: "letter color-primary", id: "AaCB", onClick: e.tagClick, "data-tag": t, children: "hot" === t ? "热门" : t }) });
                                            }),
                                          }),
                                          (0, M.tZ)(N.CustomWrapper, {
                                            children: (0, M.tZ)(N.ScrollView, {
                                              className: "country",
                                              scrollY: "true",
                                              scrollWithAnimation: "true",
                                              scrollIntoView: u,
                                              children: g.map(function (t) {
                                                return (0, M.tZ)(M.HY, {
                                                  children: (0, M.BX)(N.View, {
                                                    className: "box",
                                                    children: [
                                                      (0, M.tZ)(N.View, {
                                                        className: "title",
                                                        id: t.t,
                                                        children: t.title,
                                                      }),
                                                      (0, M.tZ)(N.View, {
                                                        className: "country",
                                                        children: t.r.map(
                                                          function (t) {
                                                            return (0, M.tZ)(
                                                              M.HY,
                                                              {
                                                                children: (0,
                                                                M.BX)(N.View, {
                                                                  className:
                                                                    "col",
                                                                  "data-name":
                                                                    t.RegionName,
                                                                  "data-code":
                                                                    t.RegionCode,
                                                                  id: "AaCC",
                                                                  onClick:
                                                                    e.handleCountrySelect,
                                                                  children: [
                                                                    (0, M.tZ)(
                                                                      N.Text,
                                                                      {
                                                                        className:
                                                                          "name",
                                                                        children:
                                                                          t.RegionName,
                                                                      }
                                                                    ),
                                                                    (0, M.tZ)(
                                                                      N.Text,
                                                                      {
                                                                        className:
                                                                          "code",
                                                                        children:
                                                                          t.RegionCode,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                              }
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                });
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, M.tZ)(N.View, {
                                    className: "pop-mid " + (f ? "active" : ""),
                                    children: (0, M.tZ)(N.View, {
                                      className: "pop-mid-bd",
                                      children: (0, M.BX)(N.View, {
                                        className: "pop-white",
                                        children: [
                                          (0, M.BX)(N.View, {
                                            className: "pop-content",
                                            children: [
                                              (0, M.tZ)(N.View, {
                                                className: "tit",
                                                children: "温馨提示",
                                              }),
                                              (0, M.tZ)(N.View, {
                                                className: "pop-content-txt",
                                                children:
                                                  "您证件有效期不足6个月，请更新证件后再预订机票",
                                              }),
                                            ],
                                          }),
                                          (0, M.tZ)(N.View, {
                                            className: "pop-btn",
                                            id: "AaCD",
                                            onClick: this.toggleTimeLack,
                                            children: (0, M.tZ)(N.View, {
                                              className:
                                                "btn-txt color-primary",
                                              children: "我知道了",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, M.tZ)(X.Z, { ref: this.onDialogAttach }),
                                  (0, M.tZ)(I.Z, { ref: this.onDrawerAttach }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(f.default.Component))
                  ) || i)
              ) || i;
          Page(
            (0, n.createPageConfig)(
              G,
              "pages/flightIntl/passenger/passenger",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [59188, 35048, 70486, 97709, 6189, 22843, 6878, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(76654);
          }
        ),
          e.O();
      },
    ]);
})();
