!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/e4417bd6df8881f75099b5a95342fe64.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [40731],
      {
        88964: function (e, t, a) {
          var n = a(32180),
            c = a(79301),
            i = a(95308),
            r = a(298),
            o = a(57042),
            l = a(24460),
            s = a(81876),
            d = a(21867),
            h = a(86066),
            u = a(45023),
            f = a(52500),
            m = a(92954),
            p = a.n(m),
            D = a(71515),
            g = a(9062),
            k = a(81957),
            y = a(79792),
            w = a(79910),
            v = a(43796),
            b = a(55916),
            T = a(4601),
            Z = a(8271),
            N = a.n(Z),
            I = a(22276),
            C = a(18596),
            x = [
              19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632,
              21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450,
              38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104,
              38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104,
              100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956,
              9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872,
              42448, 83315, 21200, 43432, 59728, 27296, 44710, 43856, 19296,
              43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925,
              19152, 42192, 54484, 53840, 54616, 46400, 46496, 103846, 38320,
              18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256,
              19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613,
              37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680,
              37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416,
              86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726,
              42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152,
              42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864,
              42359, 42160, 43600, 111189, 27936, 44448,
            ],
            V = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
            O = ["初", "十", "廿", "卅"],
            B = [
              { date: "正月初一", name: "春节" },
              { date: "正月十五", name: "元宵节" },
              { date: "二月初二", name: "龙抬头" },
              { date: "五月初五", name: "端午节" },
              { date: "七月初七", name: "七夕" },
              { date: "七月十五", name: "中元节" },
              { date: "八月十五", name: "中秋节" },
              { date: "九月初九", name: "重阳节" },
              { date: "腊月初八", name: "腊八节" },
              { date: "腊月三十", name: "除夕" },
            ],
            S = [
              { date: "0101", name: "元旦" },
              { date: "0214", name: "情人节" },
              { date: "0308", name: "妇女节" },
              { date: "0312", name: "植树节" },
              { date: "0401", name: "愚人节" },
              { date: "0422", name: "地球日" },
              { date: "0501", name: "劳动节" },
              { date: "0504", name: "青年节" },
              { date: "0601", name: "儿童节" },
              { date: "0701", name: "建党日" },
              { date: "0801", name: "建军节" },
              { date: "0910", name: "教师节" },
              { date: "1001", name: "国庆节" },
              { date: "1101", name: "万圣节" },
              { date: "1225", name: "圣诞节" },
            ],
            M = [
              { date: "2020-04-04", name: "清明节" },
              { date: "2020-05-10", name: "母亲节" },
              { date: "2020-06-21", name: "父亲节" },
              { date: "2020-11-26", name: "感恩节" },
            ],
            P = [
              "2020-04-26",
              "2020-05-09",
              "2020-06-28",
              "2020-09-27",
              "2020-10-10",
            ],
            L = [
              "2020-04-04",
              "2020-04-05",
              "2020-04-06",
              "2020-05-01",
              "2020-05-02",
              "2020-05-03",
              "2020-05-04",
              "2020-05-05",
              "2020-06-25",
              "2020-06-26",
              "2020-06-27",
              "2020-10-01",
              "2020-10-02",
              "2020-10-03",
              "2020-10-04",
              "2020-10-05",
              "2020-10-06",
              "2020-10-07",
              "2020-10-08",
            ];
          function X(e) {
            return e.replace(/\-/g, "/");
          }
          function A(e) {
            return e < 10 ? "0" + e : e;
          }
          function _(e, t) {
            if (!e || !t) return 0;
            var a = new Date(e).getTime();
            return (new Date(t).getTime() - a) / 864e5;
          }
          function R(e) {
            var t = e ? new Date(X(e)) : new Date(),
              a = t.getFullYear(),
              n = t.getMonth() + 1,
              c = t.getDate();
            return "".concat(a, "-").concat(A(n), "-").concat(A(c));
          }
          function F(e) {
            if (!e) return "";
            var t = new Date(X(e)),
              a = t.getMonth() + 1,
              n = t.getDate();
            return "".concat(a, "月").concat(n, "日");
          }
          function E(e) {
            var t = R(),
              a = (e ? new Date(X(e)) : new Date()).getDay(),
              n = _(t, e),
              c = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][a];
            return (
              0 === n
                ? (c = "今天")
                : 1 === n
                ? (c = "明天")
                : 2 === n && (c = "后天"),
              c
            );
          }
          function H(e) {
            var t = e ? new Date(X(e)) : new Date(),
              a = t.getFullYear(),
              n = t.getMonth() + 1;
            return "".concat(a, "-").concat(n);
          }
          function G(e, t) {
            var a = "",
              n = t.replace(/\-/g, "").slice(4),
              c = e.lunarDate,
              i = e.isLeap;
            return (
              B.some(function (e) {
                return e.date === c && !i;
              }) &&
                (a = B.filter(function (e) {
                  return e.date === c;
                })[0].name),
              !a &&
                S.some(function (e) {
                  return e.date === n;
                }) &&
                (a = S.filter(function (e) {
                  return e.date === n;
                })[0].name),
              !a &&
                M.some(function (e) {
                  return e.date === t;
                }) &&
                (a = M.filter(function (e) {
                  return e.date === t;
                })[0].name),
              a
            );
          }
          function q(e, t, a) {
            if (!e || !t) return !1;
            var n = new Date(X(e)),
              c = new Date(X(t)),
              i = new Date(X(a));
            return i > n && i < c;
          }
          function j(e) {
            var t = e.filter(function (e) {
              return e.price && 0 !== e.price;
            });
            if (0 !== t.length) {
              var a = C.Z.sortBy(t, "price")[0].price;
              e = e.map(function (e) {
                return e.price
                  ? (0, r.Z)(
                      (0, r.Z)({}, e),
                      {},
                      { lowestPrice: e.price === a }
                    )
                  : e;
              });
            }
            return e;
          }
          function Y(e) {
            var t,
              a = 348;
            for (t = 32768; t > 8; t >>= 1) a += x[e - 1900] & t ? 1 : 0;
            return a + J(e);
          }
          function z(e) {
            return 15 & x[e - 1900];
          }
          function J(e) {
            return z(e) ? (65536 & x[e - 1900] ? 30 : 29) : 0;
          }
          function K(e, t) {
            return x[e - 1900] & (65536 >> t) ? 30 : 29;
          }
          function Q(e) {
            var t;
            switch (e) {
              case 1:
                t = "正";
                break;
              case 11:
                t = "十一";
                break;
              case 12:
                t = "腊";
                break;
              default:
                t = V[(e - 1) % 10];
            }
            return t + "月";
          }
          function W(e) {
            var t;
            switch (e) {
              case 10:
                t = "初十";
                break;
              case 20:
                t = "二十";
                break;
              case 30:
                t = "三十";
                break;
              default:
                (t = O[Math.floor(e / 10)]), (t += V[(e % 10) - 1]);
            }
            return t;
          }
          function U(e) {
            var t,
              a,
              n = new Date(e),
              c = 0,
              i = new Date(1900, 0, 31),
              r = Math.round((n - i) / 864e5),
              o = {};
            for (
              o.dayCyl = r + 40, o.monCyl = 14, t = 1900;
              t < 2050 && r > 0;
              t++
            )
              (r -= c = Y(t)), (o.monCyl += 12);
            for (
              r < 0 && ((r += c), t--, (o.monCyl -= 12)),
                o.year = t,
                o.yearCyl = t - 1864,
                a = z(t),
                o.isLeap = !1,
                t = 1;
              t < 13 && r > 0;
              t++
            )
              a > 0 && t == a + 1 && 0 == o.isLeap
                ? (--t, (o.isLeap = !0), (c = J(o.year)))
                : (c = K(o.year, t)),
                1 == o.isLeap && t == a + 1 && (o.isLeap = !1),
                (r -= c),
                0 == o.isLeap && o.monCyl++;
            return (
              0 == r &&
                a > 0 &&
                t == a + 1 &&
                (o.isLeap
                  ? (o.isLeap = !1)
                  : ((o.isLeap = !0), --t, --o.monCyl)),
              r < 0 && ((r += c), --t, --o.monCyl),
              (o.month = t),
              (o.day = r + 1),
              {
                year: o.year,
                month: o.month,
                day: o.day,
                isLeap: o.isLeap,
                lunarDate: "".concat(Q(o.month)).concat(W(o.day)),
                lunarDay: 1 === o.day ? Q(o.month) : W(o.day),
              }
            );
          }
          function $(e, t, a) {
            var n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            (e = X(e)), (t = X(t));
            for (
              var c = R(),
                i = new Date(e),
                r = new Date(t),
                o = i.getFullYear(),
                l = r.getFullYear(),
                s = [],
                d = l > o;
              l - o >= 0;

            ) {
              console.log("year", o);
              for (
                var h = l - o > 0 ? i.getMonth() + 1 : d ? 1 : i.getMonth() + 1,
                  u = l - o > 0 ? 12 : r.getMonth() + 1;
                u - h >= 0;

              ) {
                console.log("month", h);
                var f = new Date(o, h, 0).getDate();
                console.log(f);
                for (
                  var m = {
                      month: "".concat(o, "-").concat(h),
                      monthCN: "".concat(o, "年").concat(h, "月"),
                      dates: [],
                    },
                    p = function (e) {
                      var t = ""
                          .concat(o, "-")
                          .concat(A(h), "-")
                          .concat(A(e + 1)),
                        l = X(t),
                        s =
                          new Date(l).getTime() < i.getTime() ||
                          new Date(l).getTime() > r.getTime(),
                        d = U(l),
                        u = G(d, t),
                        f = P.some(function (e) {
                          return e === t;
                        }),
                        p = L.some(function (e) {
                          return e === t;
                        }),
                        D = !1,
                        k = !1,
                        y = !1,
                        w = !1,
                        v = 0,
                        b = "";
                      if (
                        ("checkInOut" === n.type
                          ? ((D = t === n.checkInDate || t === n.checkOutDate),
                            (y =
                              "flight" === n.bu
                                ? n.checkInDate && t === n.checkInDate
                                : n.checkInDate &&
                                  n.checkOutDate &&
                                  t === n.checkInDate),
                            (w =
                              n.checkInDate &&
                              n.checkOutDate &&
                              t === n.checkOutDate),
                            (k = q(n.checkInDate, n.checkOutDate, t)))
                          : (D = Array.isArray(a)
                              ? a.some(function (e) {
                                  return R(e) === t;
                                })
                              : t === R(a)),
                        "flight" === n.bu &&
                          n.flightType !== g.C4.multi &&
                          n.flightType !== g.C4.internation)
                      ) {
                        var T = n.price.findIndex(function (e) {
                          return e.flightDate.split(" ")[0] === t;
                        });
                        T > -1 && (v = n.price[T].price);
                      }
                      if ("ticket" === n.bu) {
                        var Z = n.price.findIndex(function (e) {
                          return e.ticketDate === t;
                        });
                        s ||
                          (-1 == Z && (s = !0),
                          Z > -1 &&
                            (0 == n.price[Z].inventoryNum ||
                              !n.price[Z].price) &&
                            (s = !0)),
                          Z > -1 && (v = n.price[Z].price);
                      }
                      n.info &&
                        (b = n.info["".concat(t)]
                          ? n.info["".concat(t)].title
                          : "");
                      var N = {
                        date: t,
                        day: e + 1,
                        today: t === c,
                        selected: D,
                        outOfRange: s,
                        lunar: d.lunarDay,
                        festival: u,
                        workDay: f,
                        restDay: p,
                        through: k,
                        checkIn: y,
                        checkOut: w,
                        price: v,
                        info: b,
                      };
                      m.dates.push(N);
                    },
                    D = 0;
                  D < f;
                  D++
                )
                  p(D);
                var k = new Date(X(m.dates[0].date)).getDay(),
                  y = new Array(k).fill({});
                (m.dates = j([].concat((0, I.Z)(y), (0, I.Z)(m.dates)))),
                  s.push(m),
                  h++;
              }
              o++;
            }
            return s;
          }
          var ee,
            te = a(48813),
            ae = { dptLabel: "去", rtnLabel: "返", showTotalPrice: !0 },
            ne =
              (0, k.h)()(
                (ee = (function (e) {
                  (0, d.Z)(a, e);
                  var t = (0, h.Z)(a);
                  function a(e) {
                    var n;
                    return (
                      (0, o.Z)(this, a),
                      (n = t.call(this, e)),
                      (0, u.Z)((0, s.Z)(n), "pageId", "10650059484"),
                      (n.state = {
                        isTieyou: y.default.isTieyou,
                        isIPhoneX: w.Z.isIPhoneX(),
                        isBaidu: y.default.isBaidu,
                        chooseDate: "",
                        type: "",
                        beginDate: "",
                        endDate: "",
                        checkInDate: "",
                        checkOutDate: "",
                        multipleLimit: 15,
                        bu: "",
                        confirmBtn: !1,
                        tip: "",
                        showHotelNotice: "",
                        noticeDate: "",
                        dateMap: [],
                        checkInDateStr: "",
                        checkOutDateStr: "",
                        weekInDay: "",
                        weekOutDay: "",
                        dayDiff: 0,
                        clickDisabled: !1,
                        attachedTitle: "",
                        monthView: "",
                        flightType: "",
                        roundPriceList: [],
                        roundTotalPrice: "",
                        haveRoundTotalPrice: !1,
                        showGuide: !1,
                        selectedText: void 0,
                        bottomFixedConfig: (0, r.Z)({}, ae),
                      }),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, i.Z)(
                            (0, c.Z)().mark(function e() {
                              var t,
                                a,
                                n,
                                i,
                                o,
                                l,
                                s,
                                d,
                                h,
                                u,
                                f,
                                D,
                                g,
                                k,
                                y,
                                b,
                                T,
                                Z,
                                N,
                                I,
                                C,
                                x,
                                V,
                                O,
                                B,
                                S,
                                M,
                                P,
                                L,
                                X,
                                A,
                                R,
                                H,
                                G,
                                q,
                                j,
                                Y,
                                z,
                                J,
                                K,
                                Q,
                                W,
                                U,
                                $,
                                ee,
                                te,
                                ne,
                                ce = this;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        (t = (0, m.getCurrentInstance)().router
                                          .params.data),
                                          (n = (a = void 0 === t ? {} : t)
                                            .beginDate),
                                          (i = void 0 === n ? "" : n),
                                          (o = a.endDate),
                                          (l = void 0 === o ? "" : o),
                                          (s = a.chooseDate),
                                          (d = void 0 === s ? "" : s),
                                          (h = a.type),
                                          (u = void 0 === h ? "single" : h),
                                          (f = a.title),
                                          (D = void 0 === f ? "选择日期" : f),
                                          (g = a.confirmBtn),
                                          (k = void 0 !== g && g),
                                          (y = a.tip),
                                          (b = void 0 === y ? "" : y),
                                          (T = a.multipleLimit),
                                          (Z = void 0 === T ? 15 : T),
                                          (N = a.checkInDate),
                                          (I = void 0 === N ? "" : N),
                                          (C = a.checkOutDate),
                                          (x = void 0 === C ? "" : C),
                                          (V = a.checkInDesc),
                                          (O = void 0 === V ? "入住" : V),
                                          (B = a.checkOutDesc),
                                          (S = void 0 === B ? "离店" : B),
                                          (M = a.checkOutPlaceHolderDesc),
                                          (P =
                                            void 0 === M ? "选择离店日期" : M),
                                          (L = a.bu),
                                          (X = void 0 === L ? "" : L),
                                          (A = a.showHotelNotice),
                                          (R = void 0 !== A && A),
                                          (H = a.noticeDate),
                                          (G = void 0 === H ? "" : H),
                                          (q = a.sameDateAvailable),
                                          (j = void 0 !== q && q),
                                          (Y = a.showDayDiff),
                                          (z = void 0 === Y || Y),
                                          (J = a.flightType),
                                          (K = void 0 === J ? "" : J),
                                          (Q = a.queryParams),
                                          (W = a.haveRoundTotalPrice),
                                          (U = a.utmSource),
                                          ($ = a.selectedText),
                                          (ee = a.bottomFixedConfig),
                                          (te = w.Z.deepCopy(a)),
                                          "multiple" !== u ||
                                            Array.isArray(d) ||
                                            (te.chooseDate = [te.chooseDate]),
                                          (ne =
                                            "[object Object]" ===
                                            Object.prototype.toString.call(ee)),
                                          this.setState({
                                            chooseDate: te.chooseDate || "",
                                            type: u,
                                            bu: X,
                                            showHotelNotice: R,
                                            confirmBtn: k,
                                            tip: b,
                                            multipleLimit: Z,
                                            beginDate: i,
                                            endDate: l,
                                            checkInDate: I,
                                            checkOutDate: x,
                                            checkInDesc: O,
                                            checkOutDesc: S,
                                            checkOutPlaceHolderDesc: P,
                                            noticeDate: G,
                                            sameDateAvailable: j,
                                            showDayDiff: z,
                                            checkInDateStr: F(I),
                                            checkOutDateStr: F(x),
                                            weekInDay: E(I),
                                            weekOutDay: E(x),
                                            dayDiff: _(I, x),
                                            clickDisabled: !1,
                                            attachedTitle: "",
                                            monthView: "",
                                            flightType: K,
                                            queryParams: Q,
                                            haveRoundTotalPrice: W,
                                            selectedText: $,
                                            bottomFixedConfig: ne
                                              ? (0, r.Z)((0, r.Z)({}, ae), ee)
                                              : (0, r.Z)({}, ae),
                                          }),
                                          p().setNavigationBarTitle({
                                            title: D,
                                          }),
                                          this.generateDateMap(te),
                                          "bus" === X &&
                                            (0, v.MX)({ utmSource: U }).then(
                                              function (e) {
                                                e &&
                                                  ce.setState({
                                                    showGuide: !(0, v.Bq)(
                                                      v.t0.DATE_SELECT_IN_DATE
                                                    ),
                                                  });
                                              }
                                            );
                                      case 9:
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
                        key: "generateDateMap",
                        value: function (e) {
                          var t,
                            a,
                            n = this,
                            c = e.chooseDate,
                            i = e.beginDate,
                            o = e.endDate,
                            l = e.checkInDate,
                            s = e.checkOutDate,
                            d = e.type,
                            h = e.bu,
                            u = e.queryParams,
                            f = e.info,
                            m = e.priceList,
                            p = e.flightType,
                            D = function (e) {
                              (t = $(i, o, c, e)),
                                n.setState({ dateMap: t }, function () {
                                  setTimeout(function () {
                                    n.getElementHeight(function () {
                                      n.scrollToView();
                                    });
                                  }, 100);
                                });
                            };
                          "ticket" === h && m
                            ? D((a = { bu: h, price: m }))
                            : "flight" === h && p === g.C4.single
                            ? ((a = {
                                type: d,
                                checkInDate: l,
                                checkOutDate: s,
                              }),
                              (0, b.MX)(u).then(
                                function (e) {
                                  var t = e.resultCode,
                                    n = e.data;
                                  1 === t &&
                                    n &&
                                    (a = (0, r.Z)(
                                      (0, r.Z)({}, a),
                                      {},
                                      { bu: h, price: n }
                                    )),
                                    D(a);
                                },
                                function () {
                                  D(a);
                                }
                              ))
                            : D(
                                (a = {
                                  type: d,
                                  info: f,
                                  checkInDate: l,
                                  checkOutDate: s,
                                })
                              );
                        },
                      },
                      {
                        key: "getRoundLowestPriceReq",
                        value: function (e, t) {
                          var a = e.data,
                            n = a.departCityCode,
                            c = a.arriveCityCode;
                          return (0, b.y8)({
                            data: {
                              departureCityCode: n,
                              arrivalCityCode: c,
                              departureDate: t,
                            },
                          }).then(function (e) {
                            var t = e.resultCode,
                              a = (e.data || {}).results;
                            return 1 === t && a ? a : [];
                          });
                        },
                      },
                      {
                        key: "handleDateClick",
                        value: function (e, t, a) {
                          var n = this,
                            o = new Date().getTime(),
                            l = this.state,
                            s = l.beginDate,
                            d = l.endDate,
                            h = l.dateMap,
                            f = l.type,
                            m = l.chooseDate,
                            D = l.multipleLimit,
                            k = l.confirmBtn,
                            y = l.sameDateAvailable,
                            v = l.showHotelNotice,
                            b = l.bu,
                            T = l.queryParams,
                            Z = l.roundPriceList,
                            N = l.flightType,
                            I = w.Z.deepCopy(h);
                          if (!a) {
                            var C = I.findIndex(function (t) {
                                return t.month === e;
                              }),
                              x = I[C].dates.findIndex(function (e) {
                                return e.date === t;
                              });
                            if ("single" === f) {
                              for (var V = 0, O = 0, B = 0; B < I.length; B++)
                                for (var S = 0; S < I[B].dates.length; S++)
                                  I[B].dates[S].selected && ((V = B), (O = S));
                              (C === V && x === O) ||
                                ((I[V].dates[O].selected = !1),
                                (I[C].dates[x].selected = !0),
                                this.setState({ chooseDate: t, dateMap: I })),
                                console.log(
                                  "点击延迟时间=====",
                                  new Date().getTime() - o
                                ),
                                k ||
                                  (this.invokeCallback(t), this.navigateBack());
                            } else if ("multiple" === f) {
                              var M = [],
                                P = I[C].dates[x].selected;
                              if (P)
                                M = m.filter(function (e) {
                                  return e !== t;
                                });
                              else {
                                var L = m.length;
                                if (L >= D)
                                  return p().showModal({
                                    title: "温馨提示",
                                    content: "最多选择"
                                      .concat(D, "个日期, 当前选择")
                                      .concat(L, "个"),
                                    confirmText: "确定",
                                    showCancel: !1,
                                  });
                                M = w._.sortBy(m.concat(t));
                              }
                              (I[C].dates[x].selected = !P),
                                this.setState({
                                  chooseDate: M,
                                  dateMap: I,
                                  clickDisabled: 0 === M.length,
                                });
                            } else if ("checkInOut" === f) {
                              var G = this.state,
                                q = G.checkInDate,
                                j = G.checkOutDate,
                                Y = "",
                                z = (function () {
                                  var e = (0, i.Z)(
                                    (0, c.Z)().mark(function e(t) {
                                      var a,
                                        i,
                                        o,
                                        l,
                                        h,
                                        u = arguments;
                                      return (0, c.Z)().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                if (
                                                  ((a =
                                                    u.length > 1 &&
                                                    void 0 !== u[1]
                                                      ? u[1]
                                                      : ""),
                                                  (i = {
                                                    type: "checkInOut",
                                                    checkInDate: t,
                                                    checkOutDate: a,
                                                  }),
                                                  "flight" !== b ||
                                                    N !== g.C4.goback)
                                                ) {
                                                  e.next = 21;
                                                  break;
                                                }
                                                if (a) {
                                                  e.next = 17;
                                                  break;
                                                }
                                                return (
                                                  (e.prev = 4),
                                                  (e.next = 7),
                                                  n.getRoundLowestPriceReq(T, t)
                                                );
                                              case 7:
                                                (o = e.sent),
                                                  (i = (0, r.Z)(
                                                    (0, r.Z)({}, i),
                                                    {},
                                                    {
                                                      bu: b,
                                                      flightType: N,
                                                      price: o,
                                                    }
                                                  )),
                                                  n.setState({
                                                    roundPriceList: o,
                                                  }),
                                                  (e.next = 15);
                                                break;
                                              case 12:
                                                (e.prev = 12),
                                                  (e.t0 = e.catch(4)),
                                                  console.log(e.t0);
                                              case 15:
                                                e.next = 19;
                                                break;
                                              case 17:
                                                (l = Z.filter(function (e) {
                                                  return e.flightDate === a;
                                                })[0]),
                                                  (Y = l && l.price);
                                              case 19:
                                                e.next = 22;
                                                break;
                                              case 21:
                                                "flight" === b &&
                                                  N === g.C4.multi &&
                                                  (i = (0, r.Z)(
                                                    (0, r.Z)({}, i),
                                                    {},
                                                    { bu: b, flightType: N }
                                                  ));
                                              case 22:
                                                (h = $(s, d, "", i)),
                                                  n.setState({
                                                    checkInDate: t,
                                                    checkOutDate: a,
                                                    checkInDateStr: F(t),
                                                    checkOutDateStr: F(a),
                                                    weekInDay: E(t),
                                                    weekOutDay: E(a),
                                                    dayDiff: _(t, a),
                                                    dateMap: h,
                                                    clickDisabled: !a,
                                                    roundTotalPrice: Y,
                                                  }),
                                                  t &&
                                                    a &&
                                                    !k &&
                                                    (n.invokeCallback({
                                                      checkInDate: t,
                                                      checkOutDate: a,
                                                    }),
                                                    n.navigateBack());
                                              case 25:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        null,
                                        [[4, 12]]
                                      );
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })();
                              if (q && j) {
                                if ((z(t), v && "hotel" === b)) {
                                  var J = new Date(
                                      new Date().getTime() - 864e5
                                    ),
                                    K = ""
                                      .concat(J.getFullYear(), "-")
                                      .concat(A(J.getMonth() + 1), "-")
                                      .concat(A(J.getDate()));
                                  if (K === q) {
                                    var Q = H(K),
                                      W = h.findIndex(function (e) {
                                        return e.month === Q;
                                      }),
                                      U = h[W].dates.findIndex(function (e) {
                                        return e.date === K;
                                      }),
                                      ee = "dateMap["
                                        .concat(W, "].dates[")
                                        .concat(U, "].lunar");
                                    this.setState((0, u.Z)({}, ee, "凌晨入住"));
                                  }
                                }
                              } else if (q && !j)
                                if (new Date(X(t)) < new Date(X(q))) z(t);
                                else if (t === q) y ? z(q, t) : z(t);
                                else if ("hotel" === b) {
                                  var te =
                                    new Date(X(t)).getTime() - new Date(X(q));
                                  if (Math.floor(te / 864e5) > 28) {
                                    var ae = new Date(
                                      new Date(X(q)).getTime() + 24192e5
                                    );
                                    z(
                                      q,
                                      ""
                                        .concat(ae.getFullYear(), "-")
                                        .concat(A(ae.getMonth() + 1), "-")
                                        .concat(A(ae.getDate()))
                                    );
                                  } else if ((z(q, t), v && "hotel" === b)) {
                                    var ne = R();
                                    if (
                                      (console.log(
                                        "所选时间为需要改变时间",
                                        ne
                                      ),
                                      ne === t)
                                    ) {
                                      var ce = H(),
                                        ie = h.findIndex(function (e) {
                                          return e.month === ce;
                                        }),
                                        re = h[ie].dates.findIndex(function (
                                          e
                                        ) {
                                          return e.date === t;
                                        }),
                                        oe = "dateMap["
                                          .concat(ie, "].dates[")
                                          .concat(re, "].lunar");
                                      this.setState(
                                        (0, u.Z)({}, oe, "中午离店")
                                      );
                                    }
                                    var le = new Date(
                                        new Date().getTime() - 864e5
                                      ),
                                      se = ""
                                        .concat(le.getFullYear(), "-")
                                        .concat(A(le.getMonth() + 1), "-")
                                        .concat(A(le.getDate()));
                                    if (se === q) {
                                      var de = H(se),
                                        he = h.findIndex(function (e) {
                                          return e.month === de;
                                        }),
                                        ue = h[he].dates.findIndex(function (
                                          e
                                        ) {
                                          return e.date === se;
                                        }),
                                        fe = "dateMap["
                                          .concat(he, "].dates[")
                                          .concat(ue, "].lunar");
                                      this.setState(
                                        (0, u.Z)({}, fe, "凌晨入住")
                                      );
                                    }
                                  }
                                } else z(q, t);
                            }
                          }
                        },
                      },
                      {
                        key: "handleConfirmAction",
                        value: function (e) {
                          var t = this.state,
                            a = t.type,
                            n = t.chooseDate,
                            c = t.checkInDate,
                            i = t.checkOutDate;
                          e ||
                            ("checkInOut" !== a
                              ? (this.invokeCallback(n), this.navigateBack())
                              : (this.invokeCallback({
                                  checkInDate: c,
                                  checkOutDate: i,
                                }),
                                this.navigateBack()));
                        },
                      },
                      {
                        key: "onViewScrollEvent",
                        value: function (e) {
                          var t = e.detail.scrollTop,
                            a = this.state,
                            n = a.dateMap,
                            c = a.attachedTitle,
                            i = a.isBaidu,
                            r = a.monthView;
                          if (this._heightArray) {
                            var o = this._heightArray.length;
                            i && r && this.setState({ monthView: "" });
                            for (var l = 0; l < o; l++)
                              if (t < this._heightArray[l] - 25) {
                                if (c === n[l].monthCN) return;
                                this.setState({ attachedTitle: n[l].monthCN });
                                break;
                              }
                          }
                        },
                      },
                      {
                        key: "getMonthHeightPromise",
                        value: function (e) {
                          return new Promise(function (t, a) {
                            var n = p().createSelectorQuery();
                            n.select("".concat(e)).boundingClientRect(),
                              n.exec(function (e) {
                                e[0] && e[0].height
                                  ? t(e[0].height)
                                  : a("获取高度失败");
                              });
                          });
                        },
                      },
                      {
                        key: "getElementHeight",
                        value: function (e) {
                          var t = this,
                            a = this.state.dateMap,
                            n = a.map(function (e) {
                              return t.getMonthHeightPromise(
                                "#date".concat(e.month)
                              );
                            });
                          Promise.all(n)
                            .then(function (a) {
                              for (var n = [], c = 0, i = 0; i < a.length; i++)
                                (c += a[i] + 30 + 36), n.push(c);
                              (t._heightArray = n),
                                console.log(t._heightArray),
                                e && e();
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        },
                      },
                      {
                        key: "scrollToView",
                        value: function () {
                          var e = this.state,
                            t = e.type,
                            a = e.chooseDate,
                            n = e.checkInDate,
                            c = H(
                              "checkInOut" === t
                                ? n
                                : Array.isArray(a)
                                ? a[0]
                                : a
                            );
                          this.setState({ monthView: "date".concat(c) });
                        },
                      },
                      {
                        key: "openTestPageByFastClick",
                        value: function () {
                          this._clickTestId || (this._clickTestId = 0);
                          var e = new Date().getTime();
                          (this._testTimeStamp && 0 !== this._clickTestId) ||
                            (this._testTimeStamp = e),
                            e - this._testTimeStamp < 1e3
                              ? ((this._clickTestId += 1),
                                (this._testTimeStamp = e))
                              : (this._clickTestId = 0),
                            console.log(this._clickTestId),
                            this._clickTestId >= 5 &&
                              this.navigateTo({
                                url: "/functionalPages/testpage/testpage",
                              });
                        },
                      },
                      {
                        key: "transArr",
                        value: function (e) {
                          var t = [];
                          return (
                            e.forEach(function (e, a) {
                              var n = Math.floor(a / 7);
                              t[n] || (t[n] = []), t[n].push(e);
                            }),
                            t
                          );
                        },
                      },
                      {
                        key: "getMonthDateItems",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.bu,
                            n = t.dateMap,
                            c = t.type,
                            i = t.isTieyou,
                            o = t.showGuide,
                            l = t.selectedText,
                            s = void 0 === l ? {} : l,
                            d = s.sameText,
                            h = s.dptText,
                            u = s.rtnText,
                            f = function (t, n, i) {
                              var r;
                              return t.date
                                ? (0, te.BX)(
                                    D.View,
                                    {
                                      taroKey: String(i),
                                      className: "item "
                                        .concat(t.workDay ? "work" : "", " ")
                                        .concat(t.restDay ? "rest" : "", " ")
                                        .concat(
                                          t.outOfRange
                                            ? "disabled"
                                            : t.selected
                                            ? "cur"
                                            : "",
                                          " "
                                        )
                                        .concat(t.checkIn ? "from" : "", " ")
                                        .concat(t.checkOut ? "to" : "", " ")
                                        .concat(t.through ? "through" : ""),
                                      "data-month": n.month,
                                      "data-date": t.date,
                                      "data-disabled": t.outOfRange ? "1" : "0",
                                      onClick: e.handleDateClick.bind(
                                        e,
                                        n.month,
                                        t.date,
                                        t.outOfRange
                                      ),
                                      children: [
                                        t.workDay &&
                                          (0, te.tZ)(D.Text, {
                                            className: "ifont-ban iconfont",
                                          }),
                                        t.restDay &&
                                          (0, te.tZ)(D.Text, {
                                            className: "ifont-xiu iconfont",
                                          }),
                                        "checkInOut" === c &&
                                        t.selected &&
                                        null !== (r = Object.keys(s)) &&
                                        void 0 !== r &&
                                        r.length
                                          ? (0, te.tZ)(D.Block, {
                                              children:
                                                t.checkIn === t.checkOut
                                                  ? (0, te.tZ)(D.Text, {
                                                      class: "flight-type-text",
                                                      children: d,
                                                    })
                                                  : (0, te.BX)(D.Block, {
                                                      children: [
                                                        t.checkIn &&
                                                          (0, te.tZ)(D.Text, {
                                                            class:
                                                              "flight-type-text",
                                                            children: h,
                                                          }),
                                                        t.checkOut &&
                                                          (0, te.tZ)(D.Text, {
                                                            class:
                                                              "flight-type-text",
                                                            children: u,
                                                          }),
                                                      ],
                                                    }),
                                            })
                                          : null,
                                        (0, te.tZ)(D.View, {
                                          className: "".concat(
                                            t.today || t.festival
                                              ? "holiday"
                                              : "date"
                                          ),
                                          children: t.today
                                            ? "今天"
                                            : t.festival
                                            ? t.festival
                                            : t.day,
                                        }),
                                        t.info
                                          ? (0, te.tZ)(D.View, {
                                              className: "qiang",
                                              children: t.info,
                                            })
                                          : t.price
                                          ? (0, te.tZ)(D.View, {
                                              className: "price ".concat(
                                                t.lowestPrice ? "dijia" : ""
                                              ),
                                              children: t.price,
                                            })
                                          : "flight" !== a
                                          ? (0, te.tZ)(D.View, {
                                              className: "lunar",
                                              children: t.lunar,
                                            })
                                          : null,
                                      ],
                                    },
                                    t.date
                                  )
                                : (0, te.tZ)(
                                    D.View,
                                    { className: "item" },
                                    String(i)
                                  );
                            };
                          if ("bus" === a && o) {
                            var m = n.map(function (t) {
                                return (0,
                                r.Z)((0, r.Z)({}, t), {}, { dates: e.transArr(t.dates) });
                              }),
                              p = (0, te.BX)(D.View, {
                                className: "guide-bus-calendar",
                                children: [
                                  (0, te.BX)(D.View, {
                                    className: "guide-row",
                                    children: [
                                      (0, te.tZ)(D.Image, {
                                        src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/hands@3x.png",
                                        mode: "aspectFit",
                                        className: "guide-point",
                                      }),
                                      (0, te.tZ)(D.Image, {
                                        src: "https://images3.c-ctrip.com/train/yzh/bus-mini/guide/yd@3x.png",
                                        mode: "widthFix",
                                        className: "guide-line",
                                      }),
                                      (0, te.BX)(D.View, {
                                        className: "guide-text",
                                        children: [
                                          "选择",
                                          (0, te.tZ)(D.Text, {
                                            className: "hl",
                                            children: "出发",
                                          }),
                                          "日期",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, te.tZ)(D.View, {
                                    className: "guide-jump-btn",
                                    onClick: this.handleCloseGuide,
                                    children: "跳过",
                                  }),
                                ],
                              });
                            return m.map(function (t, a) {
                              return (0, te.BX)(
                                D.View,
                                {
                                  children: [
                                    0 != a &&
                                      (0, te.tZ)(D.View, {
                                        id: "month" + t.month,
                                        className: "cld-month",
                                        children: t.monthCN,
                                      }),
                                    (0, te.tZ)(D.View, {
                                      id: "date" + t.month,
                                      className: "cld-date ".concat(
                                        i ? "ty" : "zx",
                                        " cld-date-with-guide"
                                      ),
                                      children: t.dates.map(function (a) {
                                        return a.find(function (e) {
                                          return e.today;
                                        })
                                          ? (0, te.tZ)(T.Z, {
                                              showGuide: o,
                                              TipComp: p,
                                              rootContentClassName:
                                                "bus-canlendar-guide-display-conent",
                                              onRead: e.onReadGuide.bind(e),
                                              children: a.map(function (e, a) {
                                                return f(e, t, a);
                                              }),
                                            })
                                          : (0, te.tZ)(D.View, {
                                              children: a.map(function (e, a) {
                                                return f(e, t, a);
                                              }),
                                            });
                                      }),
                                    }),
                                  ],
                                },
                                String(a)
                              );
                            });
                          }
                          return n.map(function (e, t) {
                            return (0, te.BX)(
                              D.View,
                              {
                                children: [
                                  0 != t &&
                                    (0, te.tZ)(D.View, {
                                      id: "month" + e.month,
                                      className: "cld-month",
                                      children: e.monthCN,
                                    }),
                                  (0, te.tZ)(D.View, {
                                    id: "date" + e.month,
                                    className: "cld-date ".concat(
                                      i ? "ty" : "zx"
                                    ),
                                    children: e.dates.map(function (t, a) {
                                      return f(t, e, a);
                                    }),
                                  }),
                                ],
                              },
                              String(t)
                            );
                          });
                        },
                      },
                      {
                        key: "onReadGuide",
                        value: function () {
                          (0, v.EC)(v.t0.DATE_SELECT_IN_DATE),
                            this.setState({ showGuide: !1 });
                        },
                      },
                      {
                        key: "handleCloseGuide",
                        value: function () {
                          var e = this;
                          (0, v.G8)("skip").finally(function () {
                            e.setState({ showGuide: !1 });
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.isIPhoneX,
                            a = e.bu,
                            n = e.checkInDateStr,
                            c = e.checkOutDateStr,
                            i = e.checkInDate,
                            r = e.checkOutDate,
                            o = e.checkInDesc,
                            l = e.checkOutDesc,
                            s = e.checkOutPlaceHolderDesc,
                            d = e.weekInDay,
                            h = e.weekOutDay,
                            u = e.dayDiff,
                            f = e.showDayDiff,
                            m = e.showHotelNotice,
                            p = e.noticeDate,
                            k = e.tip,
                            y = e.attachedTitle,
                            w = e.dateMap,
                            v = e.monthView,
                            b = e.confirmBtn,
                            T = e.clickDisabled,
                            Z = e.roundTotalPrice,
                            I = e.haveRoundTotalPrice,
                            C = e.flightType,
                            x = e.bottomFixedConfig,
                            V = this.getMonthDateItems(),
                            O = c ? "".concat(c, " ").concat(h) : s;
                          return (0, te.BX)(D.View, {
                            className: "page calendar",
                            children: [
                              "hotel" === a
                                ? (0, te.BX)(D.View, {
                                    className: "cld-hotel",
                                    children: [
                                      (0, te.BX)(D.View, {
                                        className: "from",
                                        children: [
                                          (0, te.tZ)(D.View, {
                                            className: "tit",
                                            children: o,
                                          }),
                                          (0, te.BX)(D.View, {
                                            className: "date",
                                            children: [n, " ", d],
                                          }),
                                        ],
                                      }),
                                      (0, te.BX)(D.View, {
                                        className: "jianye",
                                        style: { color: u && f ? "" : "#fff" },
                                        children: ["(共", u, "晚)"],
                                      }),
                                      (0, te.BX)(D.View, {
                                        className: "to",
                                        children: [
                                          (0, te.tZ)(D.View, {
                                            className: "tit",
                                            children: l,
                                          }),
                                          (0, te.tZ)(D.View, {
                                            className: "date ".concat(
                                              c ? "" : "tgrey"
                                            ),
                                            children: O,
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : "",
                              "hotel" === a && m
                                ? (0, te.tZ)(D.View, {
                                    className: "hotel-notice",
                                    children: (0, te.BX)("text", {
                                      className: "txt",
                                      children: [
                                        "今晨6点前入住，请选择",
                                        p,
                                        "入住",
                                      ],
                                    }),
                                  })
                                : "",
                              "flight" === a &&
                                C === g.C4.goback &&
                                (0, te.tZ)(te.HY, {
                                  children: (0, te.tZ)(D.View, {
                                    className: "price-tip",
                                    children: (0, te.tZ)(D.View, {
                                      className: "price-tip-cont",
                                      children:
                                        "所选日期为出发地日期，显示单成人价，变价频繁以实际支付价为准",
                                    }),
                                  }),
                                }),
                              (0, te.BX)(D.View, {
                                className: "cld-week",
                                onClick: this.openTestPageByFastClick,
                                children: [
                                  (0, te.tZ)(D.View, {
                                    className: "item",
                                    children: "日",
                                  }),
                                  (0, te.tZ)(D.View, {
                                    className: "item",
                                    children: "一",
                                  }),
                                  (0, te.tZ)(D.View, {
                                    className: "item",
                                    children: "二",
                                  }),
                                  (0, te.tZ)(D.View, {
                                    className: "item",
                                    children: "三",
                                  }),
                                  (0, te.tZ)(D.View, {
                                    className: "item",
                                    children: "四",
                                  }),
                                  (0, te.tZ)(D.View, {
                                    className: "item",
                                    children: "五",
                                  }),
                                  (0, te.tZ)(D.View, {
                                    className: "item",
                                    children: "六",
                                  }),
                                ],
                              }),
                              k &&
                                (0, te.tZ)(D.View, {
                                  className: "cld-tips",
                                  children: k,
                                }),
                              (0, te.tZ)(D.View, {
                                className: "cld-month-top",
                                children: y || (w[0] && w[0].monthCN),
                              }),
                              (0, te.tZ)(D.View, {
                                className: "scroll-container",
                                children: (0, te.tZ)(D.ScrollView, {
                                  className: "cld-box",
                                  scrollY: !0,
                                  enableBackToTop: !0,
                                  scrollWithAnimation: !0,
                                  scrollIntoView: v,
                                  onScroll: this.onViewScrollEvent,
                                  children: V,
                                }),
                              }),
                              I &&
                                (0, te.BX)(D.View, {
                                  className: "total-price-box",
                                  children: [
                                    (0, te.BX)(D.View, {
                                      className: x.showTotalPrice
                                        ? ""
                                        : "label-box",
                                      children: [
                                        (0, te.BX)(D.View, {
                                          className: "label-item",
                                          children: [
                                            (0, te.BX)(D.Text, {
                                              className: "price-label",
                                              children: [x.dptLabel, "："],
                                            }),
                                            (0, te.tZ)(D.Text, {
                                              className: "price-date dpt-date",
                                              children: N()(i).format("MM-DD"),
                                            }),
                                          ],
                                        }),
                                        (0, te.BX)(D.View, {
                                          className: "label-item",
                                          children: [
                                            (0, te.BX)(D.Text, {
                                              className: "price-label",
                                              children: [x.rtnLabel, "："],
                                            }),
                                            (0, te.tZ)(D.Text, {
                                              className: "price-date ".concat(
                                                r
                                                  ? ""
                                                  : "price-date-placeholder"
                                              ),
                                              children: r
                                                ? N()(r).format("MM-DD")
                                                : "未选择",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    x.showTotalPrice &&
                                      (0, te.BX)(D.Block, {
                                        children: [
                                          (0, te.tZ)(D.Text, {
                                            className: "price-label",
                                            children: "往返总价：",
                                          }),
                                          (0, te.tZ)(D.Text, {
                                            className: "price-num color-red",
                                            children: Z
                                              ? "".concat(Z, "起")
                                              : "--",
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              b &&
                                (0, te.tZ)(D.View, {
                                  className: "cld-btn "
                                    .concat(t ? "iphone" : "", " ")
                                    .concat(I ? "no-border" : ""),
                                  children: (0, te.tZ)(D.Button, {
                                    className: "btn-primary ".concat(
                                      T ? "disabled" : ""
                                    ),
                                    "data-disabled": T ? "1" : "0",
                                    onClick: this.handleConfirmAction.bind(
                                      this,
                                      T
                                    ),
                                    children: "确定",
                                  }),
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(f.default.Component))
              ) || ee;
          Page(
            (0, n.createPageConfig)(
              ne,
              "functionalPages/calendar/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#fff",
                navigationBarTextStyle: "black",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [36941, 97144, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(88964);
        }),
          e.O();
      },
    ]);
})();
