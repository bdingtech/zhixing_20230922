!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [37513],
    {
      81437: function (e, t, n) {
        var r = n(22276),
          a = n(90129),
          o = n(92954),
          i = n.n(o),
          u = (n(20592), n(3205)),
          s = n(18783),
          c = (n(20893), n(79910)),
          f = n(79792),
          l = (n(13025), n(25391)),
          d = n(49120),
          g = n(58801),
          h = (n(86977), n(8271)),
          m = n.n(h),
          v = n(28783),
          p = {
            isValidPassport: function (e) {
              return /^[a-zA-Z0-9]{5,17}$/.test(e);
            },
            isValidHKMacao: function (e) {
              return /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/.test(e);
            },
            isValidTaiwan: function (e) {
              return /^[0-9]{8}$/.test(e) || /^[0-9]{10}$/.test(e);
            },
            getRandomNumber: function (e) {
              for (var t = Math.random(), n = 0, r = 0; r < e.length; r++) {
                var a =
                    0 === r
                      ? 0
                      : e
                          .slice(0, r)
                          .map(function (e) {
                            return e[1];
                          })
                          .reduce(function (e, t) {
                            return e + t;
                          }),
                  o = e
                    .slice(0, r + 1)
                    .map(function (e) {
                      return e[1];
                    })
                    .reduce(function (e, t) {
                      return e + t;
                    });
                if (t >= a && t < o) {
                  n = e[r][0];
                  break;
                }
              }
              return n;
            },
            handleTrains: function (e, t) {
              var n,
                r = this,
                o = +new Date(),
                i = function (e) {
                  return +new Date(t.replace(/\-/g, "/") + " " + e + ":00");
                },
                u = function (e) {
                  return e >= s[0] && e <= s[1]
                    ? 2
                    : e >= s[1] && e <= s[2]
                    ? 4
                    : e >= s[2] && e <= s[3]
                    ? 8
                    : 16;
                },
                s = [i("00:00"), i("06:00"), i("12:00"), i("18:00")],
                c = [];
              return (
                e.forEach(function (e) {
                  var t;
                  if (
                    !(0 == e.SeatList.length || i(e.DepartTime) <= +new Date())
                  ) {
                    (n = e.SeatList[0]),
                      (e.SeatCount = r.handleSeats(e.SeatList)),
                      (e.Price = n.SeatPrice),
                      (e.SeatName = n.SeatName),
                      (e.isJianLou = !n.SeatInventory),
                      (e.TimesCost = (function (e) {
                        var t = Math.floor(parseInt(e) / 60),
                          n = parseInt(e) % 60;
                        return t > 0
                          ? "".concat(t, "时").concat(n, "分")
                          : "".concat(n, "分");
                      })(e.RunTime)),
                      (e.DepartTimeStamp = i(e.DepartTime)),
                      (e.IsLocked = e.DepartTimeStamp - o <= 48e4),
                      (e.timePeriod = u(e.DepartTimeStamp)),
                      (e.trainType = l.ZP.getTrainType(e.TrainNumber[0])),
                      (e.SaleNote = (e.SaleNote || "").replace(
                        /(<br\/>)/g,
                        ""
                      )),
                      (e.down = !1);
                    var s = [];
                    e.SeatList.forEach(function (e) {
                      if (
                        0 == e.SeatName.indexOf("硬卧上") ||
                        0 == e.SeatName.indexOf("硬卧中") ||
                        0 == e.SeatName.indexOf("软卧上") ||
                        0 == e.SeatName.indexOf("高级软卧上") ||
                        0 == e.SeatName.indexOf("高级动卧上") ||
                        0 == e.SeatName.indexOf("动卧上")
                      )
                        return !1;
                      0 == e.SeatName.indexOf("硬卧下")
                        ? (e.SeatName = "硬卧")
                        : 0 == e.SeatName.indexOf("软卧下")
                        ? (e.SeatName = "软卧")
                        : 0 == e.SeatName.indexOf("高级软卧下")
                        ? (e.SeatName = "高级软卧")
                        : 0 == e.SeatName.indexOf("高级动卧下")
                        ? (e.SeatName = "高级动卧")
                        : 0 == e.SeatName.indexOf("动卧下") &&
                          (e.SeatName = "动卧"),
                        s.push(e);
                    }),
                      (e.seats = s),
                      (e.IsCanHB = !0),
                      (e.isCanSecKill = !!e.isCanSecKill);
                    var f =
                        (null === (t = e.countryFlag) || void 0 === t
                          ? void 0
                          : t.split(",")) || [],
                      d = (0, a.Z)(f, 2),
                      g = d[0],
                      h = void 0 === g ? "CHN" : g,
                      m = d[1],
                      v = void 0 === m ? "CHN" : m;
                    (e._isCrossEnv = h !== v),
                      (e._toCountry = v),
                      (e._fromCountry = h),
                      !e.IsLocked && c.push(e);
                  }
                }),
                c
              );
            },
            handleSeats: function (e) {
              var t = 0;
              return (
                e.forEach(function (e) {
                  t += e.SeatInventory;
                }),
                t
              );
            },
            setTitle: function (e) {
              i().setNavigationBarTitle({ title: e });
            },
            loadingTimeoutId: "",
            showLoading: function (e) {
              i().showToast({
                title: e || "加载中...",
                icon: "loading",
                duration: 1e4,
                mask: !0,
              }),
                (p.isLoading = !0),
                clearTimeout(p.loadingTimeoutId),
                (p.loadingTimeoutId = setTimeout(function () {
                  p.isLoading = !1;
                }, 1e4));
            },
            hideLoading: function () {
              (p.isLoading = !1), i().hideToast();
            },
            isLoading: !1,
            hideToast: function () {
              i().hideToast();
            },
            isTest: function () {
              var e = f.default.platform && f.default.platform.toLowerCase();
              if (
                !s.ZP.userName ||
                !p.payPostfix.length ||
                "tieyou" !== f.default.partner ||
                ("ios" !== e && "devtools" !== e)
              )
                return !1;
              var t = s.ZP.userName;
              return c._.some(p.payPostfix, function (e) {
                return !!e && p.endsWith(t, e);
              });
            },
            payPostfix: [],
            setConfigPayPostfix: function (e) {
              p.payPostfix = e;
            },
            parsePasExt: function (e, t) {
              var n = {};
              if (t)
                try {
                  n = JSON.parse(t) || {};
                } catch (e) {
                  console.log(e);
                }
              return n;
            },
            endsWith: function (e, t, n) {
              var r = e.length;
              (n = void 0 === n ? r : +n) < 0 || n != n
                ? (n = 0)
                : n > r && (n = r);
              var a = n;
              return (n -= t.length) >= 0 && e.slice(n, a) == t;
            },
            forceBuyPackage: !1,
            isForceBuy: function () {
              return p.forceBuyPackage;
            },
            setConfigForceBuy: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              p.forceBuyPackage = e;
            },
            getPureDate: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : new Date(),
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              return new Date(
                e.getFullYear(),
                e.getMonth(),
                e.getDate(),
                t,
                0,
                0,
                0
              );
            },
            getDiffDays: function (e, t) {
              var n = p.getPureDate(e),
                r = p.getPureDate(t);
              return Math.floor((r - n) / 864e5);
            },
            getDiffDHS: function (e, t) {
              var n = 36e5,
                r = 864e5,
                a = t - e,
                o = (a % n) / 6e4,
                i = (a % r) / n,
                u = a / r;
              return {
                days: Math.floor(u),
                hours: Math.floor(i),
                seconds: Math.floor(o),
              };
            },
            isHasChild: function (e) {
              var t = this;
              return e.some(function (e) {
                return (
                  (t.getAge(e.Birthday) < 18 && "身份证" === e.IdentityType) ||
                  2 == e.PassengerType
                );
              });
            },
            isHasOld: function (e) {
              var t = this;
              return e.some(function (e) {
                return t.getAge(e.Birthday) > 70 && "身份证" === e.IdentityType;
              });
            },
            getAge: function (e) {
              if (!e) return -1;
              var t = e.split("-");
              return new Date().getFullYear() - t[0];
            },
            getDeferred: function () {
              var e = {};
              return (
                (e.promise = new Promise(function (t, n) {
                  (e.resolve = t), (e.reject = n);
                })),
                e
              );
            },
            useMixin: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
              t.forEach(function (t) {
                t.data && Object.assign(e.data, t.data),
                  t.methods &&
                    Object.keys(t.methods).forEach(function (n) {
                      e[n] = t.methods[n];
                    });
              });
            },
            canIUse: function () {
              return i().canIUse && i().canIUse.apply(i(), arguments);
            },
            isPuKuai: function (e) {
              return /^Z|K|T/.test(e);
            },
            isHardSeat: function (e) {
              return "硬座" === e;
            },
            isSoftSeat: function (e) {
              return "软座" === e;
            },
            isHardLieSeat: function (e) {
              return "硬卧" === e;
            },
            isSoftLieSeat: function (e) {
              return "软卧" === e;
            },
            unique: function (e) {
              for (var t = [], n = 0; n < e.length; n++)
                -1 == t.indexOf(e[n]) && t.push(e[n]);
              return t;
            },
            findUseTimeMedian: function (e) {
              return 0 == e.length
                ? 0
                : (e.sort(function (e, t) {
                    return e - t;
                  }),
                  e[Math.floor(e.length / 2)]);
            },
            getTrainTypes: function (e) {
              var t = ["G", "D", "C"],
                n = e
                  .map(function (e) {
                    return e[0];
                  })
                  .map(function (e) {
                    return t.indexOf(e) > -1 ? e : "O";
                  });
              return p.unique(n);
            },
            calJLEndTime: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "YYYY-MM-DD HH:mm:ss",
                n = Math.max.apply(Math, (0, r.Z)(e)),
                a = n - 36e5,
                o = new Date(a);
              return (
                new Date().getTime() >= o.getTime() &&
                  ((a = n - 21e5), (o = new Date(a))),
                m()(o).format(t)
              );
            },
            configs: {},
            setConfig: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              return (p.configs[e] = t), t;
            },
            getConfig: function (e, t) {
              return p.configs[e] || t;
            },
            setConfigSwitch: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              return p.setConfig(e, !!parseInt(t));
            },
            convertStr: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  /<font(\s+color=['"]([a-zA-Z#0-9]*)?['"])([^>]*)>([^<]*)<\/font>/gi,
                n = p.canIUse("rich-text");
              return n
                ? e.replace(t, '<span style="color:$2">$4</span>')
                : e.replace(t, "$4");
            },
            convertPureStr: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = /<[^>]+>/g;
              return e.replace(t, "");
            },
            convertArrayToObj: function (e) {
              var t = {};
              return p.isArray(e)
                ? (e.forEach(function (e) {
                    t[e.name] = e.value;
                  }),
                  t)
                : {};
            },
            convertObjToArray: function (e) {
              var t = [];
              if (!p.isObject(e)) return [];
              for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                var a = r[n];
                t.push({ name: a, value: e[a] });
              }
              return t;
            },
            isSameDay: function (e, t) {
              return (
                new Date(e).setHours(0, 0, 0, 0) ===
                new Date(t).setHours(0, 0, 0, 0)
              );
            },
            getSubscribe: function (e) {
              var t = p.getDeferred();
              return (
                g.Z.getSubscribeMsgInfo(e).then(
                  function (e) {
                    console.log(
                      "getSubscribe successCallBack unKnownList=====>",
                      e.unKnownList
                    );
                    var n = e.mainSwitch,
                      r = e.unKnownList;
                    t.resolve({ mainSwitch: n, unKnownList: r });
                  },
                  function () {
                    t.resolve({});
                  }
                ),
                t.promise
              );
            },
            setSubscribe: function (e) {
              var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                n = p.getDeferred();
              if (!e || 0 === e.length) return n.resolve(!1), n.promise;
              var r = function () {
                  t && (0, d.showToast)("订阅成功～"), n.resolve(!0);
                },
                a = function (e) {
                  console.log(e), n.resolve(!1);
                };
              return g.Z.executeSubscribeMsg(e).then(r, a), n.promise;
            },
            chunk: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1;
              t = Math.max(t, 0);
              var n = null == e ? 0 : e.length;
              if (!n || t < 1) return [];
              for (var r = 0, a = 0, o = new Array(Math.ceil(n / t)); r < n; )
                o[a++] = e.slice(r, (r += t));
              return o;
            },
            isIos: function () {
              var e = i().getSystemInfoSync().system || "";
              return (e = e.toLowerCase()).indexOf("ios") > -1;
            },
            checkDeletable: function (e, t) {
              var n = !1,
                r = !1;
              return (
                !e ||
                1 == e.isChild ||
                (t.forEach(function (t) {
                  t.isChild
                    ? (n = !0)
                    : t.PassengerID != e.PassengerID && (r = !0);
                }),
                !n || r)
              );
            },
            wait: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t = p.getDeferred(),
                n = setTimeout(t.resolve, e);
              return { promise: t.promise, timeoutId: n };
            },
            getUrlParam: S,
            getUrlParams: function (e, t) {
              if ("string" != typeof e) return !1;
              e = e.split(" ");
              var n = {},
                r = 0,
                a = e.length;
              if (0 === e.length) return !1;
              for (; r < a; r++) n[e[r]] = S(e[r], t);
              return n;
            },
            isAuthValid: function (e) {
              if (
                !(
                  e &&
                  e.ResponseStatus &&
                  e.ResponseStatus.Ack &&
                  "Failure" == e.ResponseStatus.Ack
                )
              )
                return !0;
              var t = e.ResponseStatus.Errors;
              if (t && t.length > 0) {
                var n = t[0].ErrorCode;
                if (n && "MobileRequestFilterException" == n) return !1;
              }
            },
            getPhoneModel: function () {
              try {
                var e;
                return i().getSystemInfoSync().model || "";
              } catch (e) {
                return console.log(e), "";
              }
            },
            isIphoneX: function () {
              var e = p.getPhoneModel(),
                t = e.slice(e.indexOf("<") + 1, e.indexOf(">"));
              return (
                [
                  "iPhone10,3",
                  "iPhone10,6",
                  "iPhone11,2",
                  "iPhone11,4",
                  "iPhone11,6",
                  "iPhone11,8",
                  "iPhone12,1",
                  "iPhone12,3",
                  "iPhone12,5",
                  "iPhone13,1",
                  "iPhone13,2",
                  "iPhone13,3",
                  "iPhone13,4",
                ].findIndex(function (e) {
                  return e === t;
                }) > -1
              );
            },
            getHours: function () {
              return new Array(25).fill().map(function (e, t) {
                return t > 9 ? "".concat(t, ":00") : "0".concat(t, ":00");
              });
            },
            getOutParams: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = decodeURIComponent(e.dstation || e.dStation || "上海"),
                n = decodeURIComponent(e.astation || e.aStation || "北京"),
                r = decodeURIComponent(
                  e.ddate || e.dDate || e.ddata || e.dData || ""
                ),
                a = decodeURIComponent(
                  e.trainname || e.trainName || ""
                ).toUpperCase(),
                o = decodeURIComponent(e.seat || ""),
                i = e.isgd,
                u = e.stu;
              return {
                dStation: t,
                aStation: n,
                dDate: r,
                isgd: !(!i || "0" == i || "false" == i) && i,
                seat: o,
                trainName: a,
                stu: !!u,
              };
            },
            getHourMinuteSecondByTimeStamp: function (e) {
              var t = 36e5,
                n = function (e) {
                  return e < 10 ? "0".concat(e) : e;
                },
                r = Math.floor(e / t);
              r = n(r);
              var a = e - r * t,
                o = Math.floor(a / 6e4);
              o = n(o);
              var i = Math.floor((a - 6e4 * o) / 1e3);
              return (i = n(i)), { hour: r, minute: o, second: i };
            },
            isArray: function (e) {
              if (Array.isArray) return Array.isArray(e);
              Array.isArray = function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              };
            },
            isObject: function (e) {
              return "[object Object]" === Object.prototype.toString.call(e);
            },
            isNumber: function (e) {
              return "[object Number]" === Object.prototype.toString.call(e);
            },
            isString: function (e) {
              return "[object String]" === Object.prototype.toString.call(e);
            },
            isNotEmptyObj: function (e) {
              var t = !1;
              return p.isObject(e) && (t = Object.keys(e).length > 0), t;
            },
            throttle: function (e, t) {
              (t = Number.parseInt(t)), Number.isNaN(t) && (t = 2500);
              var n = null;
              return function () {
                var r = Date.now();
                (r - n > t || !n) && (e.apply(this, arguments), (n = r));
              };
            },
            getBirthFromCode: function (e) {
              var t, n;
              if (15 == (e = e.toUpperCase()).length) {
                n = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
                var r = e.match(n);
                r &&
                  r.length > 5 &&
                  (t = "19" + r[2] + "-" + r[3] + "-" + r[4]);
              }
              18 == e.length &&
                ((n = new RegExp(
                  /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
                )),
                (r = e.match(n)) &&
                  r.length > 5 &&
                  (t = r[2] + "-" + r[3] + "-" + r[4]));
              return t;
            },
            getHourMinuteByMinute: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = 60,
                n = Math.floor(e / t),
                r = e - n * t;
              return n > 0
                ? "".concat(n, "时").concat(r, "分")
                : "".concat(r, "分");
            },
            getHourMinuteStringByTime: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              if (!e) return "";
              var t = e.split(" ");
              return t[1] ? t[1].slice(0, 5) : "";
            },
            getDiffDayByMinute: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              return e ? Math.floor(e / 1440) : "";
            },
            getHourMinuteSecondBySecond: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t = T(e);
              return ""
                .concat(t.hour, ":")
                .concat(t.minute, ":")
                .concat(t.second);
            },
            getHourMinuteSecondObjBySecond: T,
            toChineseNum: function (e) {
              var t = [
                  "零",
                  "一",
                  "二",
                  "三",
                  "四",
                  "五",
                  "六",
                  "七",
                  "八",
                  "九",
                ],
                n = ["", "十", "百", "千", "万"];
              e = parseInt(e);
              var r = function (e) {
                  for (
                    var r = e.toString().split("").reverse(), a = "", o = 0;
                    o < r.length;
                    o++
                  )
                    a =
                      ((0 == o && 0 == r[o]) ||
                      (o > 0 && 0 == r[o] && 0 == r[o - 1])
                        ? ""
                        : t[r[o]] + (0 == r[o] ? n[0] : n[o])) + a;
                  return a;
                },
                a = Math.floor(e / 1e4),
                o = e % 1e4;
              return (
                o.toString().length < 4 && (o = "0" + o),
                a ? r(a) + "万" + r(o) : r(e)
              );
            },
            gotoH5Page: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              e && u.Z.twebview({ data: { url: e } });
            },
            convertAppTextToHtmlStr: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  /<font(\s+color=['"]?([a-zA-Z#0-9]*)?['"]?)([^>]*?)>([^<]*?)<\/font>/gi;
              return e.replace(t, '<span style="color:$2">$4</span>');
            },
            formatTimeStamp: function (e) {
              if ("number" != typeof e) return "";
              var t = new Date(e),
                n = t.getFullYear(t),
                r =
                  t.getMonth() + 1 < 10
                    ? "0" + (t.getMonth() + 1)
                    : t.getMonth(),
                a = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
                o = t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
                i = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(),
                u = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds();
              return ""
                .concat(n, "-")
                .concat(r, "-")
                .concat(a, " ")
                .concat(o, ":")
                .concat(i, ":")
                .concat(u);
            },
            getSmartFilterResParams: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = !1,
                n = !1,
                r = !1,
                a = !1,
                o = [],
                i = [],
                u = [];
              if (!e || !e.length)
                return {
                  flightDisabled: r,
                  busDisabled: n,
                  transferAreaNames: u,
                  departureTimes: o,
                  hasTicketFlag: t,
                  transferElapsedTimeList: i,
                  sameTransferLocation: a,
                };
              for (var s = 0; s < e.length; s++) {
                var c = e[s];
                switch (c) {
                  case v.Z.ONLY_HAVE_TICKET:
                    t = !0;
                    break;
                  case v.Z.NO_BUS:
                    n = !0;
                    break;
                  case v.Z.NO_FLIGHT:
                    r = !0;
                    break;
                  case v.Z.SAME_STATION_TRANSFER:
                    a = !0;
                    break;
                  case v.Z.T0_6:
                    o.push({ startTime: "00:00", endTime: "06:00" });
                    break;
                  case v.Z.T6_12:
                    o.push({ startTime: "06:00", endTime: "12:00" });
                    break;
                  case v.Z.T12_18:
                    o.push({ startTime: "12:00", endTime: "18:00" });
                    break;
                  case v.Z.T18_24:
                    o.push({ startTime: "18:00", endTime: "24:00" });
                    break;
                  case v.Z.TD0_1:
                    i.push({ minMinute: 0, maxMinute: 59 });
                    break;
                  case v.Z.TD1_2:
                    i.push({ minMinute: 60, maxMinute: 119 });
                    break;
                  case v.Z.TD2_4:
                    i.push({ minMinute: 120, maxMinute: 239 });
                    break;
                  case v.Z.TD4_24:
                    i.push({ minMinute: 240, maxMinute: 1440 });
                    break;
                  default:
                    u.push(c);
                }
              }
              return {
                flightDisabled: r,
                busDisabled: n,
                transferAreaNames: u,
                departureTimes: o,
                hasTicketFlag: t,
                transferElapsedTimeList: i,
                sameTransferLocation: a,
              };
            },
          };
        function S(e, t) {
          if ("string" != typeof e) return !1;
          e = e.replace(/[\[\]]/g, "\\$&");
          var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
          return n
            ? n[2]
              ? decodeURIComponent(n[2].replace(/\+/g, " "))
              : ""
            : null;
        }
        function T() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          if (e <= 0) return 0;
          var t = 3600,
            n = 60,
            r = Math.floor(e / t),
            a = e - r * t,
            o = Math.floor(a / n),
            i = a - o * n,
            u = function (e) {
              return e < 10 ? "0".concat(e) : e;
            };
          return {
            hour: "".concat(u(r)),
            minute: "".concat(u(o)),
            second: "".concat(u(i)),
          };
        }
        t.Z = p;
      },
    },
  ]);
})();
