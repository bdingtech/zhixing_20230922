!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [59188],
    {
      83016: function (e, n, t) {
        t.d(n, {
          $4: function () {
            return R;
          },
          Ay: function () {
            return Y;
          },
          Cd: function () {
            return F;
          },
          G6: function () {
            return x;
          },
          Kq: function () {
            return b;
          },
          MH: function () {
            return j;
          },
          PX: function () {
            return P;
          },
          QE: function () {
            return M;
          },
          RR: function () {
            return _;
          },
          Yw: function () {
            return A;
          },
          jp: function () {
            return S;
          },
          p9: function () {
            return N;
          },
          r1: function () {
            return T;
          },
          se: function () {
            return E;
          },
          w5: function () {
            return D;
          },
          wD: function () {
            return L;
          },
        });
        var r = t(298),
          a = t(90983),
          s = t(22276),
          o = (t(52500), t(8271)),
          i = t.n(o),
          u = t(92954),
          p = t.n(u),
          l = t(55916),
          g = t(59086),
          c = t(49120),
          f = t(77900),
          m = t(79910),
          h = t(2326),
          d = t(38064),
          v = t(65677),
          y = i()().format("YYYY-MM-DD HH:mm:ss"),
          N = [
            { code: "0", name: "身份证", hint: "", english_enable: !1 },
            { code: "1", name: "护照", hint: "", english_enable: !1 },
            { code: "2", name: "台胞证", hint: "", english_enable: !1 },
            { code: "3", name: "回乡证", hint: "", english_enable: !1 },
            {
              code: "4",
              name: "军人证",
              hint: "仅支持拼音/数字，如flight123",
              english_enable: !1,
            },
            { code: "5", name: "港澳通行证", hint: "", english_enable: !1 },
            {
              code: "6",
              name: "户口簿",
              hint: "可填写身份证号码或出生日期",
              english_enable: !1,
            },
            {
              code: "7",
              name: "出生证明",
              hint: "可用出生日期代替",
              english_enable: !1,
            },
            {
              code: "8",
              name: "港澳台居民居住证",
              hint: "",
              english_enable: !1,
            },
          ],
          D = function (e) {
            var n;
            return parseInt(
              (null ===
                (n = N.find(function (n) {
                  return n.name == e;
                })) || void 0 === n
                ? void 0
                : n.code) || 0
            );
          },
          C = function (e, n) {
            return (
              !(!n || 1 !== n.type || !n.pgs) &&
              n.pgs.some(function (n) {
                return n.name === e.name && n.cardNo === e.maskPassportCode;
              })
            );
          },
          w = function (e) {
            if (!e) return !1;
            var n = e;
            return (
              (n = (n = n.replace(/^\s+/g, "")).replace(/\s+$/g, "")),
              /((^[\u4E00-\u9FA5]{1,14}([a-zA-Z]{0,26})$)|(^[a-zA-Z]+[\s\.]?([a-zA-Z]+[\s\.]?){0,4}[a-zA-Z]$))/.test(
                n
              )
            );
          },
          T = function (e) {
            return e.passengerName
              ? (function (e) {
                  if (!e) return !1;
                  var n = e,
                    t = /^[\u4E00-\u9FA5]{1,13}[\u4E00-\u9FA5]$/;
                  return (n = (n = n.replace(/^\s+/g, "")).replace(
                    /\s+$/g,
                    ""
                  )).includes("·") || n.includes(".")
                    ? t.test(n.replace(/[\xb7.]/g, "")) &&
                        /^(?![\xb7.])(?!.*[\xb7.]$)/.test(n) &&
                        !/[\xb7.]{2}/.test(n)
                    : t.test(n);
                })(e.passengerName)
              : w(e.passengerENFirstName) && w(e.passengerENLastName);
          },
          F = function (e) {
            return (
              !!e &&
              ((null == e ? void 0 : e.match(/[\u4e00-\u9fa5]+/g)) || []).join(
                ""
              ).length >= 2
            );
          },
          B = function (e) {
            return e && 0 != e.length
              ? e
                  .map(function (e) {
                    var n = N.filter(function (n) {
                      return n.code == e;
                    });
                    if (n.length > 0) return n[0];
                  })
                  .filter(function (e) {
                    return e;
                  })
              : N;
          },
          E = function (e, n, t, r) {
            var a =
              (function (e, n) {
                var t = new Date(e),
                  r = new Date(n),
                  a = t.getFullYear(),
                  s = r.getFullYear(),
                  o = t.getMonth(),
                  i = r.getMonth(),
                  u = t.getDate(),
                  p = 12 * (s - a) + (i - o);
                return r.getDate() < u && p--, p;
              })(e, r) / 12;
            return a >= n && a < t;
          },
          b = function (e) {
            var n = e.passportType,
              t = e.gender,
              r = e.passengerBirth,
              a = e.nationality,
              s = e.cardTimeLimit;
            return !(
              (h.Z.isNeedGenderField(n) && !t) ||
              (h.Z.isNeedBirthDayField(n) && !r) ||
              (h.Z.isNeedNationalityField(n) && !a) ||
              (h.Z.isNeedCardTimeLimitField(n) && !s)
            );
          },
          Z = function (e, n, t, r) {
            var a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : y;
            if (!e.passportType || 0 == e.passportType.length)
              return { info: "无效的证件类型,请重新编辑", type: 3 };
            var s = B(t),
              o = s.some(function (n) {
                return n.name == e.passportType;
              });
            if (!o) {
              var u = "该航班不支持" + e.passportType + "购票";
              return { info: u, type: 2 };
            }
            var p = [
              "身份证",
              "护照",
              "台胞证",
              "回乡证",
              "军人证",
              "港澳通行证",
              "户口簿",
              "出生证明",
              "港澳台居民居住证",
            ];
            if (
              !(o = p.some(function (n) {
                return n === e.passportType;
              }))
            )
              return {
                info: (u = "当前不支持".concat(
                  e.passportType,
                  "购票,请重新编辑"
                )),
                type: 3,
              };
            if (!f.Z.isValidIdCode(e.passportType, e.passportCode))
              return { info: "无效的证件号码,请重新编辑", type: 3 };
            if (!T(e))
              return e.passengerName
                ? F(e.passengerName)
                  ? {
                      info: "购买机票时，姓名不用输入特殊字符，已为您自动修改乘机人信息。例如: “汉祖然·买买提”会自动修改为“汉祖然买买提”",
                      type: 3,
                      isCNName: !0,
                    }
                  : { info: "姓名字数需要大于等于两个字", type: 2 }
                : { info: e.passengerName + "姓名不正确,请重新编辑", type: 3 };
            if (
              !(
                "身份证" == e.passportType ||
                (e.passengerBirth && new Date(e.passengerBirth))
              )
            )
              return { info: "无效的生日信息,请重新编辑", type: 3 };
            if (!e.passengerType)
              return { info: "无效的乘客类型,请重新编辑", type: 3 };
            var l = "";
            if (r) {
              var g = [];
              if (
                (Array.isArray(r) || (g = r.split(",")),
                (l = "该航班仅支持".concat(
                  g.join("周岁，"),
                  "周岁年龄段乘客购票"
                )),
                !(o = g.some(function (n) {
                  var t = n.split("-");
                  return E(e.passengerBirth, t[0], t[1], a);
                })))
              )
                return { info: l, type: 2 };
            }
            if (!b(e)) return { info: "完善信息后再预订", type: 3 };
            var c = e.cardTimeLimit;
            return h.Z.isNeedCardTimeLimitField(
              null == e ? void 0 : e.passportType
            ) &&
              a &&
              i()(c).diff(i()(a), "day") < 1
              ? { info: "请更新证件有效期", type: 3 }
              : (o = n.some(function (n) {
                  return n == e.passengerType;
                }))
              ? { info: "", type: 1 }
              : {
                  info: "抱歉，该价格不支持购买" + e.passengerType,
                  type: 4,
                  passengerType: e.passengerType,
                };
          },
          Y = function (e, n) {
            var t = new Date(m.Z.formatDateWithSlash(e)),
              r = t.getFullYear(),
              a = t.getMonth() + 1,
              s = t.getDate(),
              o = n ? new Date(m.Z.formatDateWithSlash(n)) : new Date(),
              i = o.getFullYear(),
              u = o.getMonth() + 1,
              p = o.getDate();
            if (i === r) return 0;
            var l = i - r;
            return l > 0
              ? a === u
                ? p - s < 0
                  ? l - 1
                  : l
                : u - a < 0
                ? l - 1
                : l
              : -1;
          },
          P = function (e, n) {
            if (!e.passengerBirth) return "";
            var t = new Date(e.passengerBirth.replace(/\-/g, "/")),
              r = new Date(n.replace(/\-/g, "/")) - 12096e5,
              a = new Date(n.replace(/\-/g, "/"));
            a.setFullYear(a.getFullYear() - 2);
            var s = new Date(n.replace(/\-/g, "/"));
            return (
              s.setFullYear(s.getFullYear() - 12),
              t > r
                ? "未满14天"
                : t <= r && t > a
                ? "婴儿票"
                : t <= a && t > s
                ? "儿童票"
                : t <= s
                ? "成人票"
                : ""
            );
          },
          L = function (e, n) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "*";
            return !(
              !e ||
              !n ||
              e.length != n.length ||
              e.split("").some(function (e, r) {
                return n.charAt(r) !== t && n.charAt(r) !== e;
              })
            );
          },
          k = function (e, n, t) {
            var r, a;
            if (
              (m.Z.isEmptyArray(null == e ? void 0 : e.pgs) ||
                m.Z.isEmptyObject(
                  null == e || null === (r = e.pgs) || void 0 === r
                    ? void 0
                    : r.find(function (e) {
                        return !(null == e || !e.tag);
                      })
                )) &&
              m.Z.isEmptyArray(n)
            )
              return null;
            var s = [],
              o =
                null == e || null === (a = e.pgs) || void 0 === a
                  ? void 0
                  : a.find(function (e) {
                      var n;
                      return (
                        e.name ===
                          (null == t ||
                          null === (n = t.passengerName) ||
                          void 0 === n
                            ? void 0
                            : n.toUpperCase()) && L(t.passportCode, e.cardNo)
                      );
                    });
            return (
              m.Z.isEmptyObject(o) ||
                !o.tag ||
                s.includes(o.tag) ||
                s.push(o.tag),
              null == n ||
                n.forEach(function (e) {
                  var n,
                    r =
                      null === (n = e.businessList) || void 0 === n
                        ? void 0
                        : n.find(function (e) {
                            var n;
                            return (
                              e.name ===
                                (null == t ||
                                null === (n = t.passengerName) ||
                                void 0 === n
                                  ? void 0
                                  : n.toUpperCase()) &&
                              L(t.passportCode, e.idCardNo)
                            );
                          });
                  m.Z.isEmptyObject(r) ||
                    !e.passengerTag ||
                    s.includes(e.passengerTag) ||
                    s.push(e.passengerTag);
                }),
              s
            );
          },
          A = function () {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = t.flightGoDate,
              o = void 0 === r ? y : r,
              i = t.spi,
              u = t.preferentialZones,
              p = (0, s.Z)(n),
              l = (0, a.Z)(p);
            try {
              for (l.s(); !(e = l.n()).done; ) {
                var g = e.value,
                  c = !!g.passengerENLastName && !!g.passengerENFirstName;
                (g.name =
                  ["护照", "台胞证", "回乡证"].includes(g.passportType) && c
                    ? ""
                        .concat(g.passengerENLastName, "/")
                        .concat(g.passengerENFirstName)
                    : g.passengerName ||
                      ""
                        .concat(g.passengerENLastName, "/")
                        .concat(g.passengerENFirstName)),
                  (g.passengerBirth =
                    "身份证" === g.passportType &&
                    f.Z.isValidSFZ(g.passportCode)
                      ? f.Z.getBirthFromCode(g.passportCode)
                      : g.passengerBirth),
                  (g.isSupportAdultChild = !1),
                  (g.age = Y(g.passengerBirth, o)),
                  (g.passengerTypeDefault = g.passengerType),
                  (g.passengerType = P(g, o)),
                  (g.ticketType = P(g, o)),
                  (g.passengerTypeStr = g.passengerType.slice(0, 2)),
                  (g.isStudent = C(g, i)),
                  (g.tags = k(i, u, g));
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
            return p;
          },
          M = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = { source: "flight", getPassengerType: 3 };
            return (
              (0, c.showLoading)(),
              (0, l.Hh)(n)
                .then(function (n) {
                  console.log(n);
                  var t = n.resultCode,
                    r = n.resultMessage,
                    a = n.commonPassengers || [];
                  return 1 != t
                    ? (0, c.getCurrentPage)().showCommonDialog(
                        r || "网络异常，请稍后重试"
                      )
                    : A(a, e);
                })
                .catch(function (e) {
                  console.log(e),
                    (0, c.getCurrentPage)().showCommonDialog(
                      "网络异常，请稍后重试"
                    );
                })
                .finally(function () {
                  return (0, c.hideLoading)();
                })
            );
          },
          j = function (e) {
            var n = {
              passengerID: e.passengerID,
              passportType: e.passportType,
              isTempPassenger: e.isTempPassenger || 0,
            };
            return (0, l.Q3)(n)
              .then(function (e) {
                return console.log(e);
              })
              .catch(function (e) {
                console.log(e),
                  (0, c.getCurrentPage)().showCommonDialog(
                    "网络异常，请稍后重试"
                  );
              });
          },
          I = function (e) {
            var n = {
              commonPassengerInfo: {
                passengerID: e.passengerID,
                passengerName: e.passengerName,
                passengerType: e.passengerType,
                passengerENFirstName: e.passengerENFirstName,
                passengerENLastName: e.passengerENLastName,
                passportType: e.passportType,
                passportCode: e.passportCode,
                middleName: e.middleName,
                mobile: e.mobile,
                passengerBirth: e.passengerBirth,
              },
            };
            (0, c.showLoading)();
            var t = (0, c.getCurrentPage)();
            return (0, l.uK)(n)
              .then(function (e) {
                var n = e.resultCode,
                  t = e.resultMessage;
                if (1 != n) throw new Error(t);
              })
              .catch(function (e) {
                console.log(e),
                  t.showCommonDialog(e.message || "网络异常，请稍后重试");
              })
              .finally(function () {
                return (0, c.hideLoading)();
              });
          },
          S = function (e, n, t, r) {
            var a = new Date(e.passengerBirth.replace(/\-/g, "/")),
              s = new Date(n.replace(/\-/g, "/"));
            s.setFullYear(s.getFullYear() - 2);
            var o = new Date(n.replace(/\-/g, "/"));
            o.setFullYear(o.getFullYear() - 12);
            var i = new Date(n.replace(/\-/g, "/"));
            i.setFullYear(i.getFullYear() - 80);
            var u = new Date(t.replace(/\-/g, "/"));
            u.setFullYear(u.getFullYear() - 2);
            var p = new Date(t.replace(/\-/g, "/"));
            p.setFullYear(p.getFullYear() - 12);
            var l = new Date(t.replace(/\-/g, "/"));
            return (
              l.setFullYear(l.getFullYear() - 80),
              a > s && a <= u
                ? {
                    type: "edit",
                    content: ""
                      .concat(
                        e.name,
                        "第二程起飞当日已满2周岁，不允许购买婴儿票。如仍需为"
                      )
                      .concat(e.name, "在第一程购买婴儿票，请分开预订"),
                  }
                : a > o && a <= p
                ? {
                    type: "edit",
                    content: ""
                      .concat(
                        e.name,
                        "第二程起飞当日已满12周岁，不允许购买儿童票。如仍需为"
                      )
                      .concat(e.name, "在第一程购买儿童票，请分开预订"),
                  }
                : "春秋航空" === r && a > i && a <= l
                ? {
                    type: "confirm",
                    content: "".concat(
                      e.name,
                      "第二程起飞当日已满80周岁，根据航司规定需与航司联系购票"
                    ),
                  }
                : { content: "" }
            );
          },
          _ = function (e, n) {
            var t = [],
              r = [];
            e.forEach(function (e) {
              !(function (e, n) {
                if (!n || 0 == Object.keys(n).length) return !0;
                var t = n.whiteIdentNumLimit,
                  r = void 0 === t ? [] : t,
                  a = n.identNumLimit,
                  s = void 0 === a ? [] : a,
                  o = n.supportPsgerType,
                  i = n.card,
                  u = n.ages,
                  p = n.flightGoDate,
                  l = n.tripType,
                  g = n.segments,
                  c = n.flightReturnDate;
                if (
                  r.length > 0 &&
                  !r.some(function (n) {
                    return e.passportCode.startsWith(n);
                  })
                )
                  return !1;
                if (
                  s.some(function (n) {
                    return e.passportCode.startsWith(n);
                  })
                )
                  return !1;
                if (!e.mobile) return !1;
                if (o || i || u) {
                  var f = Z(e, o, i, u, p || y);
                  if (1 !== f.type) {
                    var m = f.type,
                      h = f.isCNName;
                    return 4 !== m && 3 === m && !!h;
                  }
                }
                if (2 === l) {
                  var d = g[1].flights[0].airFullName,
                    v = S(e, p, c, d);
                  if (v.content) return v.type, !1;
                }
                return !0;
              })(e, n)
                ? r.push(e)
                : t.push(e);
            });
            var a = t.filter(function (e) {
                return !!e.userSelf;
              }),
              o = t.filter(function (e) {
                return !e.userSelf;
              }),
              i = g.Uh.get() || [],
              u = [];
            i.forEach(function (e) {
              var n = o.find(function (n) {
                return n.passengerID == e;
              });
              n && ((n.order = !0), u.push(n));
            });
            var p = o.filter(function (e) {
              return !e.order;
            });
            return [].concat((0, s.Z)(a), u, (0, s.Z)(p), r);
          },
          R = function (e) {
            var n = e.validateParams,
              t = e.closeDrawer,
              a = e.passenger,
              s = e.selectedPassengers,
              o = e.toEditPassenger,
              i = void 0 === o ? function () {} : o,
              u = e.updateMobileCallback,
              l = (0, c.getCurrentPage)();
            if (
              s.some(function (e) {
                return e.passportCode === a.passportCode;
              })
            )
              return l.showCommonDialog("有多位乘客证件号相同，请修改乘客"), !1;
            if (!a.mobile) {
              var g = function (n) {
                I(n.passenger).then(function () {
                  u
                    ? u(n.passenger)
                    : (n.passenger.selected && s.push(n.passenger),
                      setTimeout(function () {
                        (0,
                        d.oS)((0, r.Z)((0, r.Z)({}, e), {}, { passengers: [] }));
                      }, 50));
                });
              };
              return (
                null == t || t(),
                setTimeout(function () {
                  (0, v.B)({
                    validateParams: n,
                    passenger: a,
                    selectedPassengers: s,
                    toEditPassenger: i,
                    onConfirm: function (e) {
                      return g(e);
                    },
                  });
                }, 50),
                !1
              );
            }
            if (!n || 0 == Object.keys(n).length) return !0;
            var f = n.onBackAction,
              h = n.whiteIdentNumLimit,
              N = void 0 === h ? [] : h,
              D = n.identNumLimit,
              C = void 0 === D ? [] : D,
              w = n.max,
              T = void 0 === w ? 0 : w,
              F = n.stock,
              B = void 0 === F ? 0 : F,
              E = n.supportPsgerType,
              b = n.card,
              Y = n.ages,
              P = n.flightGoDate,
              L = n.tripType,
              k = n.segments,
              A = n.flightReturnDate;
            if (
              N.length > 0 &&
              !N.some(function (e) {
                return a.passportCode.startsWith(e);
              })
            )
              return (
                l.showCommonDialog(
                  "该报价仅限身份证以".concat(
                    N.join("，"),
                    "开头的乘机人可购买，请更换乘机人"
                  )
                ),
                !1
              );
            if (
              C.some(function (e) {
                return a.passportCode.startsWith(e);
              })
            )
              return (
                l.showCommonDialog(
                  "身份证以".concat(
                    C.join("，"),
                    "开头的乘机人不可购买该报价，请更换乘机人"
                  )
                ),
                !1
              );
            if (T && s.length >= T)
              return l.showCommonDialog("一次最多选择".concat(T, "位乘客")), !1;
            if (B && s.length === B)
              return (
                l.showCommonDialog("很抱歉，该航班仅剩".concat(B, "张机票")), !1
              );
            var M = a.passengerENFirstName + a.passengerENLastName;
            if (["回乡证", "台胞证"].includes(a.passportType) && !M)
              return (
                l.showMultiButtonDialog({
                  content: "请修改乘机人姓名为英文",
                  rightButtonName: "去编辑",
                  onRightButtonClick: function () {
                    return i({ passenger: a });
                  },
                  leftButtonName: "我知道了",
                }),
                !1
              );
            if (E || b || Y) {
              var j = Z(a, E, b, Y, P || y);
              if (1 !== j.type) {
                var _ = j.type,
                  R = j.info,
                  x = j.isCNName;
                return 4 === _
                  ? (l.showMultiButtonDialog({
                      content: R,
                      leftButtonName: "修改乘客",
                      rightButtonName: "切换价格",
                      onRightButtonClick: function () {
                        f ? f() : p().navigateBack();
                      },
                      onLeftButtonClick: function () {},
                    }),
                    !1)
                  : 3 === _
                  ? x
                    ? ((a.name = a.name.replace(/[^\u4E00-\u9FA5]/g, "")),
                      (a.passengerName = a.passengerName.replace(
                        /[^\u4E00-\u9FA5]/g,
                        ""
                      )),
                      l.showCommonDialog(R),
                      !0)
                    : (l.showMultiButtonDialog({
                        content: R,
                        leftButtonName: "取消",
                        rightButtonName: "编辑",
                        onRightButtonClick: function () {
                          i({ passenger: a });
                        },
                        onLeftButtonClick: function () {},
                      }),
                      !1)
                  : (l.showCommonDialog(R), !1);
              }
            }
            if (2 === L) {
              var $ = k[1].flights[0].airFullName,
                W = S(a, P, A, $);
              if (W.content)
                return "confirm" === W.type
                  ? (l.showCommonDialog(W.content), !1)
                  : (l.showMultiButtonDialog({
                      content: W.content,
                      rightButtonName: "重新预订",
                      onRightButtonClick: function () {
                        m.Z.relaunchHome("flight");
                      },
                      leftButtonName: "更改乘机人",
                    }),
                    !1);
            }
            return !0;
          },
          x = function (e, n) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : y;
            if ("function" == typeof e) {
              var r = { passenger: n, flightDepartDate: t };
              (0, c.getCurrentPage)().navigateTo({
                url: "/pages/flight/flightPassenger/flightPassenger",
                data: r,
                callback: e,
              });
            } else
              console.log(
                "调用方式不正确, editPassenger 的 callback 为必填项, 且为第一个参数!"
              );
          };
      },
    },
  ]);
})();
