!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [5572],
    {
      98221: function (t, e, n) {
        n.d(e, {
          V_: function () {
            return o;
          },
          Yv: function () {
            return l;
          },
          bR: function () {
            return r;
          },
          c9: function () {
            return i;
          },
          fK: function () {
            return a;
          },
          tt: function () {
            return c;
          },
        });
        var r = "¥",
          i = "网络请求失败，请重试",
          a = "KEY_CACHE_LAST_PASSENGER_LIST",
          c = 5,
          o = "vip_card_tying",
          l = "指定车厢";
      },
      37451: function (t, e, n) {
        n.d(e, {
          S: function () {
            return r;
          },
        });
        var r = n(79792).default.isTieyou ? "ty" : "zx",
          i = { tyClass: r };
        e.Z = i;
      },
      38561: function (t, e, n) {
        n.d(e, {
          $7: function () {
            return z;
          },
          A4: function () {
            return q;
          },
          Cl: function () {
            return ut;
          },
          DC: function () {
            return vt;
          },
          Dh: function () {
            return O;
          },
          Dw: function () {
            return ot;
          },
          E5: function () {
            return E;
          },
          Eg: function () {
            return Z;
          },
          G8: function () {
            return j;
          },
          GD: function () {
            return w;
          },
          GQ: function () {
            return Q;
          },
          HE: function () {
            return ft;
          },
          I8: function () {
            return P;
          },
          II: function () {
            return nt;
          },
          Kn: function () {
            return V;
          },
          MG: function () {
            return J;
          },
          MW: function () {
            return x;
          },
          Qr: function () {
            return S;
          },
          S: function () {
            return it;
          },
          Sn: function () {
            return W;
          },
          T$: function () {
            return dt;
          },
          VJ: function () {
            return st;
          },
          VL: function () {
            return L;
          },
          VY: function () {
            return I;
          },
          W5: function () {
            return R;
          },
          XR: function () {
            return $;
          },
          Xm: function () {
            return ht;
          },
          Y2: function () {
            return b;
          },
          YG: function () {
            return D;
          },
          _Q: function () {
            return at;
          },
          _g: function () {
            return lt;
          },
          aj: function () {
            return g;
          },
          ck: function () {
            return _;
          },
          dC: function () {
            return pt;
          },
          e$: function () {
            return F;
          },
          e6: function () {
            return h;
          },
          ej: function () {
            return Y;
          },
          gb: function () {
            return y;
          },
          gd: function () {
            return k;
          },
          hc: function () {
            return tt;
          },
          ki: function () {
            return K;
          },
          m0: function () {
            return gt;
          },
          mh: function () {
            return C;
          },
          pQ: function () {
            return U;
          },
          qL: function () {
            return H;
          },
          qd: function () {
            return G;
          },
          rN: function () {
            return Nt;
          },
          sA: function () {
            return v;
          },
          t0: function () {
            return Tt;
          },
          ti: function () {
            return B;
          },
          ur: function () {
            return N;
          },
          vT: function () {
            return M;
          },
          wS: function () {
            return rt;
          },
          zE: function () {
            return m;
          },
          zH: function () {
            return mt;
          },
          zK: function () {
            return ct;
          },
        });
        var r = n(79301),
          i = n(95308),
          a = n(298),
          c = (n(92954), n(79792)),
          o = n(35283),
          l = n(25391),
          u = n(8271),
          s = n.n(u),
          d = n(94190),
          f = n(10741),
          p = n(98221);
        function m(t) {
          if (!t || t <= 0) return "";
          var e = Math.floor(t / 60);
          return (e > 0 ? e + "时" : "") + (t - 60 * e) + "分";
        }
        function h(t) {
          return s()(new Date(t)).format("MM-DD");
        }
        function v(t) {
          return t.replace(/\-/g, "/");
        }
        function g(t) {
          if (!t || "string" != typeof t) return "";
          switch (t.slice(0, 1)) {
            case "Z":
            case "T":
            case "K":
              return "普快";
            case "G":
            case "C":
              return "高铁";
            case "D":
              return "动车";
            case "Y":
              return "旅游列车";
            case "L":
            default:
              return "普快";
          }
        }
        function N(t, e) {
          switch (t) {
            case "F":
              return "飞机";
            case "B":
            case "SC":
              return "汽车";
            case "S":
              return "船";
            case "T":
              return g(e);
            default:
              return "";
          }
        }
        function T(t) {
          switch (t) {
            case "T":
              return "train";
            case "F":
              return "flight";
            case "B":
              return "bus";
            case "S":
              return "ship";
            case "SC":
              return "scenicBus";
            default:
              return "train";
          }
        }
        function Z(t) {
          switch (t) {
            case "T":
              return "火车站";
            case "F":
              return "机场";
            case "B":
              return "汽车站";
            case "S":
              return "码头";
            case "SC":
              return "景点";
            default:
              return "城市";
          }
        }
        function y(t) {
          switch (t) {
            case 0:
              return "第一程";
            case 1:
              return "第二程";
            case 2:
              return "第三程";
            case 3:
              return "第四程";
            case 4:
              return "第五程";
            case 5:
              return "第六程";
            case 6:
              return "第七程";
            case 7:
              return "第八程";
            default:
              return "第".concat(t + 1, "程");
          }
        }
        function w(t) {
          switch (
            t ? new Date(t.replace(/-/g, "/")).getDay() : new Date().getDay()
          ) {
            case 0:
              return "周日";
            case 1:
              return "周一";
            case 2:
              return "周二";
            case 3:
              return "周三";
            case 4:
              return "周四";
            case 5:
              return "周五";
            case 6:
              return "周六";
            default:
              return "转换错误";
          }
        }
        function S(t) {
          if (!t) return !0;
          var e;
          for (e in t) return !1;
          return !0;
        }
        function x(t) {
          return !t || S(t) ? {} : t[T(t.tripType)] || {};
        }
        function V(t) {
          if (!t) return "";
          var e = x(t);
          switch (t.tripType) {
            case "F":
              return (e.airLine || "") + e.flightNo;
            case "T":
              return e.trainNo;
            case "S":
              return e.shipName;
            case "B":
            case "SC":
              return e.busType;
          }
        }
        function k() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = arguments.length > 1 ? arguments[1] : void 0;
          if (t && t[e + 1]) {
            var n,
              r,
              i,
              a,
              c,
              o = t[e].tripType === t[e + 1].tripType,
              l = null === (n = x(t[e])) || void 0 === n ? void 0 : n.toCode,
              u =
                null === (r = x(t[e + 1])) || void 0 === r
                  ? void 0
                  : r.fromCode,
              s = l === u;
            if (
              (o &&
                "T" ==
                  (null === (i = t[e]) || void 0 === i ? void 0 : i.tripType) &&
                ((l && u) ||
                  (s =
                    (null === (a = x(t[e])) || void 0 === a
                      ? void 0
                      : a.toStation) ===
                    (null === (c = x(t[e + 1])) || void 0 === c
                      ? void 0
                      : c.fromStation))),
              o && ["B", "S", "SC"].includes(t[e].tripType))
            ) {
              var d = x(t[e]).toStation === x(t[e + 1]).fromStation;
              return s && o && d;
            }
            return s && o;
          }
          return !1;
        }
        function b() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 4;
          return t.length > e ? t.substr(0, e) + "..." : t;
        }
        function L() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return t.some(function (t) {
            return "F" === t.tripType;
          });
        }
        function B() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return null == t
            ? void 0
            : t.some(function (t) {
                return "T" === t.tripType;
              });
        }
        function D() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return t.some(function (t) {
            return "B" === t.tripType;
          });
        }
        function C() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return t.some(function (t) {
            return "SC" === t.tripType;
          });
        }
        function I() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return t.some(function (t) {
            return "S" === t.tripType;
          });
        }
        function E() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return t.every(function (t) {
            return "T" === t.tripType;
          });
        }
        function X() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = arguments.length > 1 ? arguments[1] : void 0;
          return t.some(function (t) {
            return t.PassengerType === e;
          });
        }
        function A() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = !1;
          return (
            t.forEach(function (t) {
              var n = x(t);
              n.selectSeat &&
                n.selectSeat.seatName &&
                n.selectSeat.seatName.indexOf("卧") > -1 &&
                (e = !0);
            }),
            e
          );
        }
        function P(t) {
          var e = Object.prototype.toString.call(t),
            n = {};
          if ("[object Array]" === e) n = [];
          else {
            if ("[object Object]" !== e) return t;
            n = {};
          }
          return (
            "[object Array]" === e &&
              t.forEach(function (t) {
                n.push(P(t));
              }),
            "[object Object]" === e &&
              Object.keys(t).forEach(function (e) {
                n[e] = P(t[e]);
              }),
            n
          );
        }
        function z(t) {
          var e = t.tripType,
            n = x(t);
          return (
            "T" == e &&
            (!n.selectSeat.ticketLeft || n.selectSeat.ticketLeft <= 0)
          );
        }
        var M = function () {
            var t,
              e,
              n,
              r,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              c =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              o =
                (null == i || null === (t = i.selectSeat) || void 0 === t
                  ? void 0
                  : t.price) || 0,
              l = a.seatInfo,
              u = a.trainInfo,
              s = P(null == l ? void 0 : l.alternativeSeatInfoList) || [],
              d =
                P(null == u ? void 0 : u.alternativeTrainSchemeInfoList) || [];
            if (!c || null == c || !c.length) return o;
            var f =
                null == i || null === (e = i.selectSeat) || void 0 === e
                  ? void 0
                  : e.price,
              p =
                null == i || null === (n = i.selectSeat) || void 0 === n
                  ? void 0
                  : n.ztcode,
              m =
                null == i || null === (r = i.selectSeat) || void 0 === r
                  ? void 0
                  : r.seatName,
              h = null == i ? void 0 : i.seats,
              v =
                null == s
                  ? void 0
                  : s.filter(function (t) {
                      return null == t ? void 0 : t.selected;
                    }),
              g =
                null == d
                  ? void 0
                  : d.filter(function (t) {
                      return null == t ? void 0 : t.selected;
                    });
            if (
              (null == g ? void 0 : g.length) > 0 &&
              (null == v ? void 0 : v.length) > 0
            ) {
              var N = f;
              null == v ||
                v.forEach(function (t) {
                  null == h ||
                    h.forEach(function (e) {
                      (((null == t ? void 0 : t.ztCode) ||
                        (null == t ? void 0 : t.ztcode)) !==
                        (null == e ? void 0 : e.ztcode) &&
                        (null == t ? void 0 : t.seatName) !==
                          (null == e ? void 0 : e.seatName)) ||
                        (N = Math.max(N, null == e ? void 0 : e.price));
                    });
                }),
                null == v ||
                  v.forEach(function (t) {
                    null == g ||
                      g.forEach(function (e) {
                        var n;
                        null == e ||
                          null === (n = e.seats) ||
                          void 0 === n ||
                          n.forEach(function (e) {
                            ((null == t ? void 0 : t.ztCode) ||
                              (null == t ? void 0 : t.ztcode)) ===
                              (null == e ? void 0 : e.ztcode) &&
                              (o = Math.max(o, null == e ? void 0 : e.price));
                          });
                      });
                  }),
                (o = Math.max(o, N));
            } else
              0 == (null == g ? void 0 : g.length) &&
              (null == v ? void 0 : v.length) > 0
                ? null == v ||
                  v.forEach(function (t) {
                    null == h ||
                      h.forEach(function (e) {
                        ((null == t ? void 0 : t.seatName) !==
                          (null == e ? void 0 : e.seatName) &&
                          ((null == t ? void 0 : t.ztCode) ||
                            (null == t ? void 0 : t.ztcode)) !==
                            (null == e ? void 0 : e.ztcode)) ||
                          (o = Math.max(o, null == e ? void 0 : e.price));
                      });
                  })
                : (null == g ? void 0 : g.length) > 0 &&
                  0 == (null == v ? void 0 : v.length) &&
                  (null == g ||
                    g.forEach(function (t) {
                      var e;
                      null == t ||
                        null === (e = t.seats) ||
                        void 0 === e ||
                        e.forEach(function (t) {
                          (((null == t ? void 0 : t.ztCode) ||
                            (null == t ? void 0 : t.ztcode)) !== p &&
                            (null == t ? void 0 : t.seatName) !== m) ||
                            (o = Math.max(o, null == t ? void 0 : t.price));
                        });
                    }));
            return o;
          },
          F = function (t, e) {
            var n = [];
            return (
              (null == t ? void 0 : t.length) > 0 &&
                !S(e) &&
                (n =
                  1 === (null == t ? void 0 : t.length) ||
                  (null == t ? void 0 : t.length) > 2
                    ? e.single
                    : e.many),
              n
            );
          };
        function O() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = arguments.length > 4 ? arguments[4] : void 0,
            a = arguments.length > 5 ? arguments[5] : void 0,
            c = arguments.length > 6 ? arguments[6] : void 0,
            o = [];
          return (
            t.forEach(function (l, u) {
              var s,
                d,
                f,
                p,
                m,
                h = [],
                v = "F" === l.tripType,
                g = "T" === l.tripType,
                N = x(l),
                T = 0,
                Z = 0,
                y = N.childPrice,
                w = [];
              if (
                (e.forEach(function (t) {
                  "儿童票" === t.passengerType && y ? Z++ : T++,
                    "儿童票" === t.passengerType &&
                      y <= 0 &&
                      w.push(t.passengerName);
                }),
                g || (T += n.length),
                T > 0)
              ) {
                var V,
                  k =
                    0 === w.length
                      ? ""
                      : '乘客"' +
                        w.join("、") +
                        '"因仓位无儿童票，已转为成人票',
                  b =
                    (null == N || null === (V = N.selectSeat) || void 0 === V
                      ? void 0
                      : V.price) || 0;
                if (g && (null == r ? void 0 : r.robIndex) === u) {
                  var L = M(N, r, t);
                  L > b &&
                    ((k += "多选车次或座席先按最高价格收取，出票后退还差价"),
                    (b = L));
                }
                h.push({ name: "成人票", desc: k, price: b, count: T }),
                  v &&
                    h.push({
                      name: "成人机建燃油费",
                      price: N.flightDetail.product.atx,
                      count: T,
                    });
              }
              Z > 0 &&
                (h.push({ name: "儿童票", price: y || 0, count: Z }),
                v &&
                  h.push({
                    name: "儿童机建燃油费",
                    price: N.flightDetail.product.ctx,
                    count: Z,
                  }));
              var B = N.serviceFee;
              B && B > 0 && h.push({ name: "服务费", price: B, count: Z + T });
              var D =
                (null == N ||
                null === (s = N.assignCarriageInfo) ||
                void 0 === s ||
                null === (d = s.selectedCarriages) ||
                void 0 === d
                  ? void 0
                  : d.length) > 0;
              if (g && D) {
                var C = N.assignCarriageInfo.price;
                h.push({
                  name: N.assignCarriageInfo.xProductName || "指定车厢",
                  price: C,
                  count: e.length,
                  desc: "",
                });
              }
              if (
                g &&
                (null == N ||
                null === (f = N.berthTicket) ||
                void 0 === f ||
                null === (p = f.seatList) ||
                void 0 === p
                  ? void 0
                  : p.length) > 0 &&
                (null == N ||
                  null === (m = N.berthTicket) ||
                  void 0 === m ||
                  !m.isFreeFor12306)
              ) {
                var I,
                  E =
                    null == N || null === (I = N.berthTicket) || void 0 === I
                      ? void 0
                      : I.seatList,
                  X = 0;
                if (
                  (null == E ||
                    E.forEach(function (t) {
                      var e = null == t ? void 0 : t.price,
                        n = null == t ? void 0 : t.amount;
                      n > 0 &&
                        (h.push({
                          name: "指定" + (null == t ? void 0 : t.seatName),
                          price: i && a ? 0 : e,
                          count: n,
                          desc: "",
                        }),
                        (X += n));
                    }),
                  D &&
                    X > 0 &&
                    (!i || !a) &&
                    (null == c ? void 0 : c.length) > 0)
                ) {
                  var A = c.find(function (t) {
                    return (null == t ? void 0 : t.tripIndex) === u + 1;
                  });
                  h.push({
                    name: null == A ? void 0 : A.priceDetailName,
                    price: Math.abs((null == A ? void 0 : A.discount) || 0),
                    count: 1,
                    desc: "",
                    discountFlag: !0,
                  });
                }
              }
              var P = F(e, N.manualSelectSeatInfo),
                z =
                  null == P
                    ? void 0
                    : P.find(function (t) {
                        return t.isSelected;
                      });
              if (
                g &&
                !S(z) &&
                (h.push({
                  name: N.manualSelectSeatInfo.xProductName,
                  price: z.price,
                  count: e.length,
                  desc: "",
                }),
                D && (null == c ? void 0 : c.length) > 0)
              ) {
                var O = c.find(function (t) {
                  return (null == t ? void 0 : t.tripIndex) === u + 1;
                });
                h.push({
                  name: null == O ? void 0 : O.priceDetailName,
                  price: Math.abs((null == O ? void 0 : O.discount) || 0),
                  count: 1,
                  desc: "",
                  discountFlag: !0,
                });
              }
              o.push({
                tripType: l.tripType,
                tripIndex: u,
                priceDetailItems: h,
              });
            }),
            o
          );
        }
        function R() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = [];
          return (
            e.forEach(function (e) {
              if (e.productCode === p.V_) {
                var r,
                  i,
                  a =
                    (null == e || null === (r = e.vipCardInfo) || void 0 === r
                      ? void 0
                      : r.discountPrice) || 0,
                  c = a > 0 ? a + e.productPrice : e.productPrice;
                n.push({
                  productName: e.productName,
                  productPrice: c,
                  count: 1,
                  desc: "",
                }),
                  (null == e || null === (i = e.vipCardInfo) || void 0 === i
                    ? void 0
                    : i.discountPrice) > 0 &&
                    n.push({
                      productName: "平台补贴",
                      productPrice: a,
                      count: 1,
                      desc: "",
                      discountFlag: !0,
                    });
              } else n.push({ productName: e.productName, productPrice: e.productPrice, count: t.length, desc: "" });
            }),
            n
          );
        }
        function _(t) {
          var e = 1;
          return (
            "1" === t
              ? (e = 1)
              : "2" === t
              ? (e = 2)
              : "32" === t
              ? (e = 3)
              : "7" === t
              ? (e = 4)
              : "8" === t && (e = 5),
            e
          );
        }
        function Y(t) {
          return (t.match(/\<a\s([\w\W]*?)\<\/a\>/g) || []).map(function (t) {
            var e = {},
              n = t.match(/https?:\/\/[\w-.%#&?\/\\\=]+/);
            n.length && (e.href = n[0]);
            var r = t.match(/[^\x00-\xff]+(?=)/);
            return r.length && (e.text = r[0]), e;
          });
        }
        function j(t, e) {
          var n = "";
          return (
            Object.keys(e).map(function (t, r) {
              n += ""
                .concat(0 == r ? "?" : "&")
                .concat(t, "=")
                .concat(e[t]);
            }),
            (t += n)
          );
        }
        function G(t, e, n) {
          var r,
            i = +new Date(),
            a = function (t) {
              return +new Date(e.replace(/\-/g, "/") + " " + t + ":00");
            },
            c = [a("00:00"), a("06:00"), a("12:00"), a("18:00")],
            o = function (t) {
              return t >= c[0] && t <= c[1]
                ? 2
                : t >= c[1] && t <= c[2]
                ? 4
                : t >= c[2] && t <= c[3]
                ? 8
                : 16;
            },
            u = [];
          return (
            t.forEach(function (t) {
              if (!(0 == t.SeatList.length || a(t.DepartTime) <= +new Date())) {
                (r = t.SeatList[n]),
                  (t.SeatCount = (function (t) {
                    var e = 0;
                    return (
                      t.forEach(function (t) {
                        e += t.SeatInventory;
                      }),
                      e
                    );
                  })(t.SeatList)),
                  (t.Price = r.SeatPrice),
                  (t.SeatName = r.SeatName),
                  (t.isJianLou = !r.SeatInventory),
                  (t.TimesCost = (function (t) {
                    var e = Math.floor(parseInt(t) / 60),
                      n = parseInt(t) % 60;
                    return e > 0
                      ? "".concat(e, "时").concat(n, "分")
                      : "".concat(n, "分");
                  })(t.RunTime)),
                  (t.DepartTimeStamp = a(t.DepartTime)),
                  (t.DepartureDate = e),
                  (t.IsLocked = t.DepartTimeStamp - i <= 48e4),
                  (t.timePeriod = o(t.DepartTimeStamp)),
                  (t.trainType = l.ZP.getTrainType(t.TrainNumber[0])),
                  (t.SaleNote = (t.SaleNote || "").replace(/(<br\/>)/g, "")),
                  (t.down = !1);
                var c = [];
                t.SeatList.forEach(function (t) {
                  if (
                    0 == t.SeatName.indexOf("硬卧上") ||
                    0 == t.SeatName.indexOf("硬卧中") ||
                    0 == t.SeatName.indexOf("软卧上") ||
                    0 == t.SeatName.indexOf("高级软卧上") ||
                    0 == t.SeatName.indexOf("高级动卧上") ||
                    0 == t.SeatName.indexOf("动卧上")
                  )
                    return !1;
                  0 == t.SeatName.indexOf("硬卧下")
                    ? (t.SeatName = "硬卧")
                    : 0 == t.SeatName.indexOf("软卧下")
                    ? (t.SeatName = "软卧")
                    : 0 == t.SeatName.indexOf("高级软卧下")
                    ? (t.SeatName = "高级软卧")
                    : 0 == t.SeatName.indexOf("高级动卧下")
                    ? (t.SeatName = "高级动卧")
                    : 0 == t.SeatName.indexOf("动卧下") &&
                      (t.SeatName = "动卧"),
                    c.push(t);
                }),
                  (t.seats = c),
                  !t.IsLocked && u.push(t);
              }
            }),
            u
          );
        }
        function W(t, e, n) {
          try {
            t.ubtTrace(e, (0, a.Z)({}, n));
          } catch (t) {
            console.log(t);
          }
        }
        function H(t) {
          return new Promise(
            (function () {
              var e = (0, i.Z)(
                (0, r.Z)().mark(function e(n, i) {
                  var a, o, l, u, s;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (o =
                            null === (a = d.WG.get()) || void 0 === a
                              ? void 0
                              : a.bind12306),
                            (l = []),
                            (u = []),
                            t.forEach(function (t) {
                              if ("T" === t.tripType) {
                                var e = x(t);
                                l.push({
                                  productLine: c.default.partner || "zhixing",
                                  fromStationName: e.fromStation,
                                  toStationName: e.toStation,
                                  departDate: e.startDate,
                                  trainNumber: e.trainNo,
                                  userName: null == o ? void 0 : o.name,
                                }),
                                  u.push(
                                    ""
                                      .concat(e.trainNo, "|")
                                      .concat(e.fromStation, "|")
                                      .concat(e.toStation)
                                  );
                              }
                            }),
                            (s = []),
                            l.forEach(function (t) {
                              s.push((0, f.tMK)(t));
                            }),
                            Promise.all(s)
                              .then(function (t) {
                                console.log("querys", l),
                                  console.log("resList", t);
                                var e = {};
                                t.forEach(function (t) {
                                  if (t) {
                                    var n = t.trains;
                                    null == n ||
                                      n.forEach(function (t) {
                                        if (t) {
                                          var n = t.trainNo,
                                            r = t.fromStationName,
                                            i = t.toStationName,
                                            a = ""
                                              .concat(n, "|")
                                              .concat(r, "|")
                                              .concat(i);
                                          null != u &&
                                            u.includes(a) &&
                                            (e[a] = t.seats || []);
                                        }
                                      });
                                  }
                                }),
                                  n(e);
                              })
                              .catch(function (t) {
                                console.log("smart_queryTrainsLeftTicket", t),
                                  i();
                              });
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })()
          );
        }
        function K(t) {
          var e = !1,
            n = null;
          return (
            t.forEach(function (t) {
              var r = x(t);
              r.onlyShowFlag ||
                (!1 === e &&
                  "T" === t.tripType &&
                  (!r.selectSeat.ticketLeft || r.selectSeat.ticketLeft <= 0) &&
                  ((e = !0), (n = r)));
            }),
            { hasRob: e, robShift: n }
          );
        }
        function q(t) {
          if (t)
            for (var e = 0; e < t.length; e++) {
              var n = t[e],
                r = x(n);
              if (z(n)) {
                var i = new Date();
                if (
                  (new Date(
                    (r.startDate + " " + r.startTime).replace(/-/g, "/")
                  ).getTime() -
                    i.getTime()) /
                    1e3 /
                    60 /
                    60 <=
                  1
                )
                  return !0;
              }
            }
          return !1;
        }
        function Q(t, e) {
          if (!t || "string" != typeof t) return [];
          var n = [];
          return (
            t.replace(/([^?&]+)=([^&#]+)/g, function (t, r, i) {
              r === e && n.push(i);
            }),
            n
          );
        }
        function J(t) {
          var e = t.path;
          location.href = "ctrip://wireless/login/openMiniProgram?username="
            .concat("gh_0d303804b423", "&path=")
            .concat(o.Z.encode(e), "&type=0&isNeedToken=0");
        }
        function $() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          if (!t || null == t || !t.length) return !1;
          var e =
            null == t
              ? void 0
              : t.filter(function (t) {
                  return "T" === (null == t ? void 0 : t.tripType);
                });
          if (2 !== (null == e ? void 0 : e.length)) return !1;
          var n = !1,
            r = !1;
          return (
            null == t ||
              t.forEach(function (t) {
                z(t) ? (n = !0) : (r = !0);
              }),
            n && r
          );
        }
        var U = function (t, e) {
            if (null == e || !e.length) return !0;
            for (var n = 0; n < t.length; n += 1)
              if (!e.includes(t[n])) return !0;
            return !1;
          },
          tt = function (t, e) {
            if (null == e || !e.length) return !0;
            for (var n = 0; n < t.length; n += 1)
              if (!e.includes(t[n])) return !0;
            return !1;
          };
        function et(t) {
          var e = [];
          if (null == t || !t.length) return e;
          for (var n = s()().format("YYYY-MM-DD"), r = 0; r < t.length; r++) {
            var i = t[r];
            (s()(n).isBefore(s()(i)) || s()(n).isSame(s()(i))) && e.push(i);
          }
          return e;
        }
        var nt = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = et(t),
            n = s()().format("YYYY-MM-DD");
          return !e || e.length <= 0
            ? n
            : e[0] == n && e.length > 1
            ? e[1]
            : e[0];
        };
        function rt() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            r = {};
          return (
            e.forEach(function (t) {
              ((null != t && t.selected) || (null != t && t.disabled)) &&
                (r[t.SeatName] = !0);
            }),
            n.forEach(function (t) {
              r[t] = !0;
            }),
            t.forEach(function (t) {
              (t.f_extraAmount = null == t ? void 0 : t.extraAmount),
                (t.f_successRate = null == t ? void 0 : t.successRate),
                (t.defaultOpen = 0);
            }),
            t
          );
        }
        function it(t, e) {
          var n = t[0],
            r = T(null == n ? void 0 : n.tripType),
            i = null == n ? void 0 : n[r];
          return null == i ? void 0 : i[e];
        }
        function at(t, e) {
          var n = t[t.length - 1],
            r = T(null == n ? void 0 : n.tripType),
            i = null == n ? void 0 : n[r];
          return null == i ? void 0 : i[e];
        }
        function ct(t) {
          if (!t) return "";
          var e = t.split("-");
          if (3 !== e.length) return "";
          var n = parseInt(e[1], 10),
            r = parseInt(e[2], 10);
          return "".concat(n, "月").concat(r, "日");
        }
        function ot(t) {
          var e = t.tripType,
            n = x(t);
          return "T" === e
            ? n.trainNo
            : "F" === e
            ? (n.airLine || "") + n.flightNo
            : "SC" == e
            ? (null == n ? void 0 : n.busType) || "旅游专线"
            : "B" === e
            ? n.busType
            : "S" === e
            ? n.shipName
            : n.code;
        }
        function lt(t, e) {
          return (null == t ? void 0 : t.length) > e
            ? "".concat(t.slice(0, e - 1), "...")
            : t;
        }
        function ut(t) {
          if (!t) return "";
          if (Number.isNaN(Number(t))) return t;
          if ((t = parseInt(t)) < 60) return "".concat(t, "分");
          if (60 == t) return "1小时0分";
          var e = Math.floor(t / 60),
            n = t % 60;
          return "".concat(e, "时").concat(n, "分");
        }
        function st(t, e) {
          var n = t[e],
            r = t[e + 1];
          if (n && r) {
            var i = x(n),
              a = x(r),
              c = ""
                .concat(i.arriveDate, " ")
                .concat(i.arriveTime)
                .replace(/-/g, "/"),
              o = ""
                .concat(a.startDate, " ")
                .concat(a.startTime)
                .replace(/-/g, "/"),
              l = (new Date(o).getTime() - new Date(c).getTime()) / 6e4;
            return l <= 0 ? { timeStr: "" } : { time: l, timeStr: ut(l) };
          }
          return { timeStr: "" };
        }
        var dt = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = [];
          if (
            (null == t ||
              t.forEach(function (t) {
                var e,
                  r = null == t ? void 0 : t.tripType;
                (null !== (e = x(t)) && void 0 !== e && e.onlyShowFlag) ||
                  ("F" === r &&
                    n.push("机票价格动态调整，当前为预估价格，以最终下单为准"));
              }),
            B(t))
          ) {
            var r = null,
              i = A(t),
              a = X(e, 2),
              c = X(e, 3);
            a && c && i
              ? (r =
                  "卧铺按照上铺价格显示，铺位随机；学生、儿童票按成人价显示，实际收费以铁路局为准。提交订单后请按照显示金额支付，差价将在出票成功后返还。")
              : a && c
              ? (r =
                  "学生、儿童票按成人价显示，实际收费以铁路局为准。提交订单后请按照显示金额支付，差价将在出票成功后返还。")
              : a && i
              ? (r =
                  "卧铺按照上铺价格显示，铺位随机；儿童票按成人价显示，实际收费以铁路局为准。提交订单后请按照显示金额支付，差价将在出票成功后返还。")
              : c && i
              ? (r =
                  "卧铺按照上铺价格显示，铺位随机；学生票按成人价显示，实际收费以铁路局为准。提交订单后请按照显示金额支付，差价将在出票成功后返还。")
              : a
              ? (r =
                  "儿童乘客可在购买火车票时享受优惠价格。付款时先按照成人票价收取，出票成功后差价将退回原支付渠道。")
              : c
              ? (r =
                  "学生乘客可在购买火车票时享受优惠价格。付款时先按照成人票价收取，出票成功后差价将退回原支付渠道。")
              : i &&
                (r =
                  "卧铺铺位随机出票，按照上铺价格显示，实际票价以扣位结果为准。"),
              r && n.push(r);
          }
          return n;
        };
        function ft(t) {
          var e = t;
          return (
            "一等双软" === e
              ? (e = "一等卧")
              : "二等双软" === e
              ? (e = "二等卧")
              : "多功能座" === e && (e = "观光座"),
            e
          );
        }
        var pt = function (t) {
          return null == t
            ? void 0
            : t.reduce(function (t, e) {
                return t + e.amount;
              }, 0);
        };
        function mt(t, e) {
          var n = "";
          return (
            t &&
              t.forEach(function (t) {
                3 != t.PassengerType || t.isStudentToAdult
                  ? 4 == t.PassengerType
                    ? (n = "".concat(e, "暂不支持购买残军票"))
                    : "身份证" !== t.IdentityType &&
                      (n = "".concat(e, "暂不支持非身份证乘客使用"))
                  : (n = "".concat(e, "暂不支持购买学生票"));
              }),
            n
          );
        }
        function ht(t) {
          var e = t.details,
            n = [],
            r = "";
          return (
            null == e ||
              e.forEach(function (t, e) {
                var i,
                  a,
                  c,
                  o,
                  l,
                  u = x(t),
                  s = z(t);
                "T" === (null == t ? void 0 : t.tripType) &&
                  ((r += s ? "g" : "b"),
                  null != u &&
                    null !== (i = u.selectSeat) &&
                    void 0 !== i &&
                    null !== (a = i.seatName) &&
                    void 0 !== a &&
                    a.includes("卧") &&
                    null != u &&
                    u.berthTicket &&
                    n.push({
                      tripindex: e + 1,
                      seat:
                        null === (c = u.berthTicket) ||
                        void 0 === c ||
                        null === (o = c.seatList) ||
                        void 0 === o
                          ? void 0
                          : o.map(function (t) {
                              return {
                                seatName: null == t ? void 0 : t.seatName,
                                num: null == t ? void 0 : t.amount,
                                isSelected: (null == t ? void 0 : t.amount) > 0,
                              };
                            }),
                      noTicket:
                        pt(
                          null == u ||
                            null === (l = u.berthTicket) ||
                            void 0 === l
                            ? void 0
                            : l.seatList
                        ) > 0,
                      noTicketSelect:
                        null == u ? void 0 : u.berthTicket.acceptAnother,
                    }));
              }),
            { buyType: r, info: n }
          );
        }
        function vt(t) {
          switch (t) {
            case 2:
              return "三程中转";
            case 3:
              return "四程中转";
            case 4:
              return "五程中转";
            case 5:
              return "六程中转";
            case 6:
              return "七程中转";
            case 7:
              return "八程中转";
            default:
              return "".concat(t + 1, "程中转");
          }
        }
        function gt(t, e) {
          var n = t[e],
            r = t[e + 1];
          if (n && r) {
            var i = x(n),
              a = x(r),
              c = (i.arriveDate + " " + i.arriveTime).replace(/-/g, "/"),
              o = (a.startDate + " " + a.startTime).replace(/-/g, "/");
            return (new Date(o).getTime() - new Date(c).getTime()) / 6e4;
          }
          return 0;
        }
        function Nt(t, e) {
          var n = gt(t, e);
          return n <= 0 ? "" : m(n);
        }
        function Tt(t, e) {
          return "B" === e || "SC" === e
            ? t.ticketLeft >= 10
              ? "有票"
              : t.ticketLeft > 0
              ? "剩".concat(t.ticketLeft, "张")
              : "无票"
            : "T" === e
            ? t.ticketLeft > 0
              ? t.ticketLeft >= 20
                ? "有票"
                : "剩".concat(t.ticketLeft, "张")
              : "无票"
            : "F" === e
            ? t.ticketLeft
              ? Number.isNaN(Number(t.ticketLeft))
                ? ""
                : "(剩".concat(t.ticketLeft, "张)")
              : ""
            : t.ticketLeft > 0
            ? t.ticketLeft >= 20
              ? ""
              : "剩(".concat(t.ticketLeft, "张)")
            : "(无票)";
        }
      },
      33680: function (t, e, n) {
        n.d(e, {
          Z: function () {
            return g;
          },
        });
        var r = n(57042),
          i = n(24460),
          a = n(21867),
          c = n(86066),
          o = n(52500),
          l = (n(92954), n(65993)),
          u = n(90983),
          s = n(71515),
          d = n(34229),
          f = n(79910),
          p = n(37451),
          m = n(38561),
          h = n(48813);
        var v = (function (t) {
            (0, a.Z)(n, t);
            var e = (0, c.Z)(n);
            function n() {
              return (0, r.Z)(this, n), e.apply(this, arguments);
            }
            return (
              (0, i.Z)(n, [
                { key: "noop", value: function () {} },
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e = t.info,
                      n = void 0 === e ? {} : e,
                      r = t.onClose,
                      i = (function (t) {
                        if (!(0, m.Qr)(t)) {
                          var e,
                            n = t.remarkTitle,
                            r = t.remarkTail,
                            i = (0, u.Z)(n.remarkTypeList);
                          try {
                            for (i.s(); !(e = i.n()).done; ) {
                              var a = e.value;
                              a.contentList = [];
                              var c,
                                o = a.content.split("<br/>"),
                                l = (0, u.Z)(o);
                              try {
                                for (l.s(); !(c = l.n()).done; ) {
                                  var s = c.value,
                                    d = {};
                                  (d.type = /\<\/a\>/g.test(s)
                                    ? "navigator"
                                    : "text"),
                                    "text" === d.type
                                      ? (d.content =
                                          f.Z.convertAppTextToHtmlStr(s))
                                      : (d.content =
                                          f.Z.convertLinkRickTextToArray(s)),
                                    a.contentList.push(d);
                                }
                              } catch (t) {
                                l.e(t);
                              } finally {
                                l.f();
                              }
                            }
                          } catch (t) {
                            i.e(t);
                          } finally {
                            i.f();
                          }
                          var p,
                            h = (0, u.Z)(r.remarkTypeList);
                          try {
                            for (h.s(); !(p = h.n()).done; ) {
                              var v = p.value;
                              v.contentList = [];
                              var g = v.content.split("<br/>");
                              console.log(g);
                              var N,
                                T = (0, u.Z)(g);
                              try {
                                for (T.s(); !(N = T.n()).done; ) {
                                  var Z = N.value,
                                    y = {};
                                  (y.type = /\<\/a\>/g.test(Z)
                                    ? "navigator"
                                    : "text"),
                                    "text" === y.type
                                      ? (y.content = Z)
                                      : (y.content =
                                          f.Z.convertLinkRickTextToArray(Z)),
                                    v.contentList.push(y);
                                }
                              } catch (t) {
                                T.e(t);
                              } finally {
                                T.f();
                              }
                            }
                          } catch (t) {
                            h.e(t);
                          } finally {
                            h.f();
                          }
                          return t;
                        }
                      })((0, m.I8)(n));
                    return (0, h.tZ)(s.View, {
                      className: "smart-flight-refund-pop",
                      children: (0, h.BX)(s.View, {
                        className: "pop-botm ".concat(p.S),
                        children: [
                          (0, h.BX)(s.View, {
                            className: "pop-botm-hd",
                            children: [
                              (0, h.tZ)(s.View, {
                                className: "btn-cancel",
                                id: "ANAn",
                                onClick: r || this.noop,
                                children: "取消",
                              }),
                              (0, h.tZ)(s.View, {
                                className: "tit",
                                children: "退改说明/行李额",
                              }),
                              (0, h.tZ)(s.View, {
                                className: "btn-submit color-primary",
                              }),
                            ],
                          }),
                          (0, h.tZ)(s.ScrollView, {
                            className: "pop-product-info ".concat(p.S),
                            scrollY: !0,
                            children: (0, h.tZ)(s.Block, {
                              children:
                                i &&
                                (0, h.BX)(s.Block, {
                                  children: [
                                    (0, h.BX)(s.View, {
                                      className: "box",
                                      children: [
                                        (0, h.tZ)(s.View, {
                                          className: "title",
                                          children: i && i.remarkTitle.title,
                                        }),
                                        (0, h.tZ)(s.View, {
                                          className: "introduction",
                                          children:
                                            i.remarkTitle &&
                                            i.remarkTitle.remarkTypeList &&
                                            i.remarkTitle.remarkTypeList.map(
                                              function (t, e) {
                                                return (0, h.BX)(
                                                  s.Block,
                                                  {
                                                    children: [
                                                      (0, h.BX)(s.View, {
                                                        className: "tit",
                                                        children: [
                                                          (0, h.tZ)(s.Image, {
                                                            className: "image",
                                                            src: t.icon,
                                                          }),
                                                          (0, h.tZ)(
                                                            d.ZtRichText,
                                                            { nodes: t.title }
                                                          ),
                                                        ],
                                                      }),
                                                      t.contentList.map(
                                                        function (t, e) {
                                                          return (0, h.BX)(
                                                            s.Block,
                                                            {
                                                              children: [
                                                                "text" ===
                                                                  t.type &&
                                                                  (0, h.tZ)(
                                                                    s.View,
                                                                    {
                                                                      className:
                                                                        "txt",
                                                                      children:
                                                                        (0,
                                                                        h.tZ)(
                                                                          d.ZtRichText,
                                                                          {
                                                                            nodes:
                                                                              t.content,
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                "navigator" ===
                                                                  t.type &&
                                                                  (0, h.tZ)(
                                                                    s.View,
                                                                    {
                                                                      className:
                                                                        "txt",
                                                                      children:
                                                                        t.content.map(
                                                                          function (
                                                                            t,
                                                                            e
                                                                          ) {
                                                                            return (0,
                                                                            h.BX)(
                                                                              s.Block,
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    "txt" ===
                                                                                      t.type &&
                                                                                      (0,
                                                                                      h.tZ)(
                                                                                        s.Text,
                                                                                        {
                                                                                          children:
                                                                                            t.val,
                                                                                        }
                                                                                      ),
                                                                                    "url" ===
                                                                                      t.type &&
                                                                                      (0,
                                                                                      h.tZ)(
                                                                                        s.Navigator,
                                                                                        {
                                                                                          className:
                                                                                            "color-primary",
                                                                                          url: t.url,
                                                                                          children:
                                                                                            t.val,
                                                                                        }
                                                                                      ),
                                                                                  ],
                                                                              },
                                                                              e
                                                                            );
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                              ],
                                                            },
                                                            e
                                                          );
                                                        }
                                                      ),
                                                    ],
                                                  },
                                                  e
                                                );
                                              }
                                            ),
                                        }),
                                      ],
                                    }),
                                    i.remarkBody.map(function (t, e) {
                                      return (0, h.tZ)(
                                        s.Block,
                                        {
                                          children: (0, h.BX)(s.View, {
                                            className:
                                              "box " +
                                              ("行李规定" === t.title
                                                ? "wd50"
                                                : ""),
                                            children: [
                                              (0, h.tZ)(s.View, {
                                                className: "title",
                                                children: t.title,
                                              }),
                                              (0, h.tZ)(s.View, {
                                                className: "area",
                                                children:
                                                  t.remarkTypeL1List.map(
                                                    function (e, n) {
                                                      return (0, h.tZ)(
                                                        s.Block,
                                                        {
                                                          children:
                                                            e.title &&
                                                            ((e.remarkTypeList &&
                                                              0 ===
                                                                e.remarkTypeList
                                                                  .length) ||
                                                              !e.remarkTypeList)
                                                              ? (0, h.tZ)(
                                                                  s.View,
                                                                  {
                                                                    className:
                                                                      "tit",
                                                                    children:
                                                                      e.title,
                                                                  }
                                                                )
                                                              : (0, h.BX)(
                                                                  s.View,
                                                                  {
                                                                    className:
                                                                      "table " +
                                                                      (n ===
                                                                      t
                                                                        .remarkTypeL1List
                                                                        .length -
                                                                        1
                                                                        ? "last-child"
                                                                        : ""),
                                                                    children: [
                                                                      e.title &&
                                                                        (0,
                                                                        h.tZ)(
                                                                          s.View,
                                                                          {
                                                                            className:
                                                                              "left",
                                                                            children:
                                                                              (0,
                                                                              h.tZ)(
                                                                                s.View,
                                                                                {
                                                                                  children:
                                                                                    e.title,
                                                                                }
                                                                              ),
                                                                          }
                                                                        ),
                                                                      (0, h.tZ)(
                                                                        s.View,
                                                                        {
                                                                          className:
                                                                            "right",
                                                                          children:
                                                                            e.remarkTypeList.map(
                                                                              function (
                                                                                t,
                                                                                e
                                                                              ) {
                                                                                return (0,
                                                                                h.BX)(
                                                                                  s.View,
                                                                                  {
                                                                                    className:
                                                                                      "row",
                                                                                    children:
                                                                                      [
                                                                                        t.title &&
                                                                                          (0,
                                                                                          h.tZ)(
                                                                                            d.ZtRichText,
                                                                                            {
                                                                                              nodes:
                                                                                                t.title,
                                                                                            }
                                                                                          ),
                                                                                        t.content &&
                                                                                          (0,
                                                                                          h.tZ)(
                                                                                            d.ZtRichText,
                                                                                            {
                                                                                              nodes:
                                                                                                t.content,
                                                                                            }
                                                                                          ),
                                                                                      ],
                                                                                  },
                                                                                  e
                                                                                );
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                        },
                                                        n
                                                      );
                                                    }
                                                  ),
                                              }),
                                            ],
                                          }),
                                        },
                                        e
                                      );
                                    }),
                                    i.remarkTail.remarkTypeList.map(function (
                                      t,
                                      e
                                    ) {
                                      return (0, h.tZ)(
                                        s.Block,
                                        {
                                          children: (0, h.tZ)(s.View, {
                                            className: "box",
                                            children: (0, h.BX)(s.View, {
                                              className: "plain",
                                              children: [
                                                t.title &&
                                                  (0, h.tZ)(s.View, {
                                                    className: "title",
                                                    children: t.title,
                                                  }),
                                                t.contentList.map(function (
                                                  t,
                                                  e
                                                ) {
                                                  return (0, h.BX)(
                                                    s.Block,
                                                    {
                                                      children: [
                                                        "text" === t.type &&
                                                          (0, h.tZ)(s.View, {
                                                            className: "txt",
                                                            children: t.content,
                                                          }),
                                                        "navigator" ===
                                                          t.type &&
                                                          (0, h.tZ)(s.View, {
                                                            className: "txt",
                                                            children:
                                                              t.content.map(
                                                                function (
                                                                  t,
                                                                  e
                                                                ) {
                                                                  return (0,
                                                                  h.BX)(
                                                                    s.Block,
                                                                    {
                                                                      children:
                                                                        [
                                                                          "txt" ===
                                                                            t.type &&
                                                                            (0,
                                                                            h.tZ)(
                                                                              s.Text,
                                                                              {
                                                                                children:
                                                                                  t.val,
                                                                              }
                                                                            ),
                                                                          "url" ===
                                                                            t.type &&
                                                                            (0,
                                                                            h.tZ)(
                                                                              s.Navigator,
                                                                              {
                                                                                className:
                                                                                  "color-primary",
                                                                                url: t.url,
                                                                                children:
                                                                                  t.val,
                                                                              }
                                                                            ),
                                                                        ],
                                                                    },
                                                                    e
                                                                  );
                                                                }
                                                              ),
                                                          }),
                                                      ],
                                                    },
                                                    e
                                                  );
                                                }),
                                              ],
                                            }),
                                          }),
                                        },
                                        e
                                      );
                                    }),
                                  ],
                                }),
                            }),
                          }),
                        ],
                      }),
                    });
                  },
                },
              ]),
              n
            );
          })(o.default.Component),
          g = (function (t) {
            (0, a.Z)(n, t);
            var e = (0, c.Z)(n);
            function n() {
              return (0, r.Z)(this, n), e.apply(this, arguments);
            }
            return (
              (0, i.Z)(n, [
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e = t.info,
                      n = t.onClose,
                      r = t.visible;
                    return (0, h.tZ)(l.Z, {
                      toggleLayer: n,
                      hideLayer: !r,
                      enableTapBackground: !0,
                      className: "flight-refund-modify-drawer",
                      fixAtBottom: !0,
                      children: (0, h.tZ)(v, { info: e, onClose: n }),
                    });
                  },
                },
              ]),
              n
            );
          })(o.default.Component);
      },
      8400: function (t, e, n) {
        n(92954), n(52500);
        var r = n(71515),
          i = n(34229),
          a = n(79910),
          c = n(37451),
          o = n(48813);
        e.Z = function (t) {
          var e = t.title,
            n = void 0 === e ? "" : e,
            l = t.subTitle,
            u = void 0 === l ? "" : l,
            s = t.canShare,
            d = void 0 !== s && s;
          return n && u
            ? (0, o.BX)(r.View, {
                className: "smart-new-user-gifts",
                children: [
                  (0, o.BX)(r.View, {
                    className: "left",
                    children: [
                      (0, o.tZ)(r.Image, {
                        className: "gifts-icon",
                        src: "https://images3.c-ctrip.com/ztrip/train.xin/2021_04/edition/newpartner.png",
                      }),
                      (0, o.tZ)(r.View, { className: "separator" }),
                      (0, o.BX)(r.View, {
                        className: "content",
                        children: [
                          (0, o.tZ)(i.ZtRichText, {
                            className: "title",
                            nodes: a.Z.convertAppTextToHtmlStr(n),
                          }),
                          (0, o.tZ)(r.View, {
                            className: "subTitle",
                            children: u,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.tZ)(r.View, {
                    className: "right",
                    children: d
                      ? (0, o.tZ)(r.Button, {
                          className: "shareButton",
                          openType: "share",
                          children: "炫耀一下",
                        })
                      : (0, o.BX)(r.Block, {
                          children: [
                            (0, o.tZ)(r.Image, {
                              className: "status-icon",
                              src: "https://images3.c-ctrip.com/ztrip/train.xin/2020_12/spring/order/right_".concat(
                                c.S,
                                ".png"
                              ),
                            }),
                            (0, o.tZ)(r.View, {
                              className: "status-desc ".concat(c.S),
                              children: "已生效",
                            }),
                          ],
                        }),
                  }),
                ],
              })
            : (0, o.tZ)(r.View, {});
        };
      },
      65993: function (t, e, n) {
        n(52500), n(92954);
        var r = n(71515),
          i = n(48813);
        e.Z = function (t) {
          var e = t.hideLayer,
            n = void 0 !== e && e,
            a = t.noop,
            c = void 0 === a ? function () {} : a,
            o = t.toggleLayer,
            l = t.fixAtBottom,
            u = void 0 !== l && l,
            s = t.customStyle,
            d = t.className,
            f = void 0 === d ? "" : d;
          return n
            ? (0, i.tZ)(r.View, {})
            : (0, i.tZ)(r.View, {
                className: "smart-pop-layer ".concat(f),
                children: (0, i.tZ)(r.View, {
                  className: "pay-detail ".concat(u ? "fix-at-bottom" : ""),
                  id: "ANAo",
                  onClick: function (t) {
                    t.stopPropagation(), o();
                  },
                  catchMove: !0,
                  children: (0, i.tZ)(r.View, {
                    className: "pay-detail-bd "
                      .concat(n ? "hidden" : "visible", " ")
                      .concat(u ? "fix-at-bottom" : ""),
                    id: "ANAp",
                    onClick: function (t) {
                      t.stopPropagation(), c();
                    },
                    style: s,
                    children: t.children,
                  }),
                }),
              });
        };
      },
      15506: function (t, e, n) {
        n.d(e, {
          Z: function () {
            return d;
          },
        });
        var r = n(52500),
          i = (n(92954), n(65993)),
          a = n(71515),
          c = n(98221),
          o = n(48813),
          l = function (t) {
            var e = t.trip,
              n = void 0 === e ? {} : e,
              r = t.index,
              i = n.priceDetailItems || [];
            if (!i.length) return null;
            var l =
              "第" +
              {
                1: "一",
                2: "二",
                3: "三",
                4: "四",
                5: "五",
                6: "六",
                7: "七",
                8: "八",
                9: "九",
              }[r + 1] +
              "程 " +
              { T: "火车", F: "飞机", B: "汽车", SC: "汽车", S: "船" }[
                n.tripType
              ];
            return (0, o.tZ)(a.View, {
              className: "smart-trip-detail-dialog",
              children: (0, o.BX)(a.View, {
                className: "itemWrap",
                children: [
                  (0, o.tZ)(a.Text, { className: "titleTxt", children: l }),
                  i.map(function (t, e) {
                    return (0,
                    o.BX)(a.View, { className: "mt7", children: [(0, o.BX)(a.View, { className: "lineItem", children: [(0, o.tZ)(a.Text, { className: "nameTxt", children: t.name }), (0, o.tZ)(a.View, { className: "flexItem" }), (0, o.tZ)(a.Text, { className: "priceDesc flex-align-items-center ".concat(t.discountFlag || t.price < 0 ? "red-mark" : ""), children: "".concat(c.bR, " ").concat(Math.abs(t.price), "x").concat(t.count) })] }), !!t.desc && (0, o.tZ)(a.Text, { className: "price-item-desc", numberOfLines: 1, children: t.desc })] }, String(e));
                  }),
                ],
              }),
            });
          },
          u = r.default.memo(function (t) {
            var e = t.priceItem;
            return (0,
            o.BX)(a.View, { className: "mt7", children: [(0, o.BX)(a.View, { className: "lineItem", children: [(0, o.tZ)(a.Text, { className: "nameTxt", children: null == e ? void 0 : e.productName }), (0, o.tZ)(a.View, { className: "flexItem" }), (0, o.tZ)(a.View, { className: "priceDesc flex-align-items-center ".concat(e.discountFlag ? "red-mark" : ""), children: "".concat(c.bR, " ").concat(e.productPrice, "x").concat(e.count) })] }), !!e.desc && (0, o.tZ)(a.Text, { className: "price-item-desc", numberOfLines: 1, children: e.desc })] });
          }),
          s = function (t) {
            var e = t.priceDetail,
              n = void 0 === e ? [] : e,
              r = t.onClose,
              i = t.otherPriceDetail;
            return (0, o.BX)(a.View, {
              className: "smart-price-detail-dialog",
              children: [
                (0, o.BX)(a.View, {
                  className: "content",
                  children: [
                    (0, o.tZ)(a.Text, { className: "flexItem cRight" }),
                    (0, o.tZ)(a.Text, {
                      className: "flexItem detailTxt",
                      children: "价格明细",
                    }),
                    (0, o.tZ)(a.Text, {
                      className: "flexItem iconfont ifont-fail closeIcon",
                      id: "ANAq",
                      onClick: r,
                    }),
                  ],
                }),
                n.map(function (t, e) {
                  return (0, o.tZ)(l, { trip: t, index: e }, String(e));
                }),
                (null == i ? void 0 : i.length) > 0 &&
                  (0, o.tZ)(a.View, {
                    className: "smart-trip-detail-dialog",
                    children: (0, o.BX)(a.View, {
                      className: "itemWrap",
                      children: [
                        (0, o.tZ)(a.Text, {
                          className: "titleTxt",
                          children: "其他费用",
                        }),
                        i.map(function (t, e) {
                          return (0,
                          o.tZ)(u, { priceItem: t }, "other_detail_".concat(e));
                        }),
                      ],
                    }),
                  }),
              ],
            });
          },
          d = function (t) {
            var e = t.isShow,
              n = t.priceDetail,
              r = void 0 === n ? [] : n,
              a = t.onClose,
              c = t.fixAtBottom,
              l = t.otherPriceDetail;
            return r.length
              ? (console.log("priceDetail", r),
                (0, o.tZ)(i.Z, {
                  toggleLayer: a,
                  hideLayer: !e,
                  enableTapBackground: !0,
                  fixAtBottom: c,
                  children: (0, o.tZ)(s, {
                    priceDetail: r,
                    otherPriceDetail: l,
                    onClose: a,
                  }),
                }))
              : null;
          };
      },
      67751: function (t, e, n) {
        n.d(e, {
          Z: function () {
            return f;
          },
        });
        var r = n(57042),
          i = n(24460),
          a = n(21867),
          c = n(86066),
          o = n(52500),
          l = (n(92954), n(65993)),
          u = n(71515),
          s = n(48813),
          d = (function (t) {
            (0, a.Z)(n, t);
            var e = (0, c.Z)(n);
            function n() {
              var t;
              return (
                (0, r.Z)(this, n),
                ((t = e.call(this)).state = { activeIndex: 0 }),
                t
              );
            }
            return (
              (0, i.Z)(n, [
                {
                  key: "onSwitchTab",
                  value: function (t) {
                    var e = t.currentTarget.dataset.index;
                    this.setState({ activeIndex: e });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this,
                      e = this.props.info,
                      n = void 0 === e ? [] : e,
                      r = this.state.activeIndex;
                    return (0, s.tZ)(u.View, {
                      className: "smart-ship-refund",
                      children: (0, s.BX)(u.View, {
                        className: "ship-refund",
                        children: [
                          (0, s.tZ)(u.View, {
                            className: "tab-bar",
                            children: n.map(function (e, n) {
                              var i = e.ruleTitle;
                              return (0,
                              s.tZ)(u.Text, { className: "tab-item " + (r === n ? "cur" : ""), "data-index": n, id: "ANAr", onClick: t.onSwitchTab.bind(t), children: i }, "index");
                            }),
                          }),
                          n.map(function (t, e) {
                            var n = t.desc;
                            return r !== e
                              ? (0, s.tZ)(u.View, {}, "index")
                              : (0, s.tZ)(
                                  u.View,
                                  {
                                    className: "tab-content",
                                    children: (0, s.tZ)(u.ScrollView, {
                                      className: "desc-list",
                                      scrollY: !0,
                                      scrollWithAnimation: !0,
                                      children: n.map(function (t, e) {
                                        return (0,
                                        s.tZ)(u.View, { className: "desc", children: t }, String(e));
                                      }),
                                    }),
                                  },
                                  "index"
                                );
                          }),
                        ],
                      }),
                    });
                  },
                },
              ]),
              n
            );
          })(o.default.Component),
          f = (function (t) {
            (0, a.Z)(n, t);
            var e = (0, c.Z)(n);
            function n() {
              return (0, r.Z)(this, n), e.apply(this, arguments);
            }
            return (
              (0, i.Z)(n, [
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e = t.info,
                      n = t.onClose,
                      r = t.visible;
                    return (0, s.tZ)(l.Z, {
                      toggleLayer: n,
                      hideLayer: !r,
                      enableTapBackground: !0,
                      fixAtBottom: !0,
                      children: (0, s.tZ)(d, { info: e }),
                    });
                  },
                },
              ]),
              n
            );
          })(o.default.Component);
      },
      80836: function (t, e, n) {
        n.d(e, {
          Z: function () {
            return p;
          },
        });
        var r = n(298),
          i = (n(52500), n(92954), n(71515)),
          a = n(65993),
          c = n(38561),
          o = n(48813);
        var l = function (t) {
            var e = t.title,
              n = t.planName,
              r = t.price,
              a = t.duration;
            return (0, o.BX)(i.View, {
              className: "traffic-guide-plan-title-banner",
              children: [
                (0, o.BX)(i.View, {
                  className: "title-left",
                  children: [
                    (0, o.tZ)(i.View, { className: "title-tag", children: e }),
                    (0, o.tZ)(i.View, { className: "plan-name", children: n }),
                  ],
                }),
                (0, o.BX)(i.View, {
                  className: "title-right",
                  children: [
                    (0, o.tZ)(i.View, { className: "plan-desc", children: r }),
                    (0, o.tZ)(i.View, { className: "title-separator" }),
                    (0, o.tZ)(i.View, { className: "plan-desc", children: a }),
                  ],
                }),
              ],
            });
          },
          u = n(79910),
          s = n(34229);
        var d = function (t) {
            var e = t.type,
              n = t.onStation,
              r = t.offStation,
              a = t.instructions;
            return (0, o.BX)(i.View, {
              className: "traffic-guide-plan-public-step-box",
              children: [
                (0, o.tZ)(i.View, {
                  className: "step-type-icon ".concat(
                    "taxi" == e ? "taxi" : ""
                  ),
                }),
                (0, o.tZ)(i.View, {
                  className: "step-trans-icon ".concat(
                    "taxi" == e ? "taxi" : ""
                  ),
                }),
                (0, o.BX)(i.View, {
                  className: "step-content-box",
                  children: [
                    (0, o.tZ)(i.View, {
                      className: "station-name",
                      children: n,
                    }),
                    (0, o.tZ)(i.View, {
                      className: "instructions",
                      children: (0, o.tZ)(s.ZtRichText, {
                        space: "nbsp",
                        nodes: u.Z.convertAppTextToHtmlStr(a),
                      }),
                    }),
                    (0, o.tZ)(i.View, {
                      className: "station-name",
                      children: r,
                    }),
                  ],
                }),
              ],
            });
          },
          f = ["方式一", "方式二", "方式三"];
        var p = function (t) {
          var e = t.visible,
            n = t.onClose,
            u = t.trafficGuideInfo,
            s = t.fromLocation,
            p = t.toLocation,
            m = t.fixAtBottom;
          if (!u) return (0, o.tZ)(i.View, {});
          var h = u.taxiPrice,
            v = u.distance,
            g = u.taxiMinutes,
            N = u.optimalTrafficDTO,
            T = u.airExpressTransfer,
            Z = !1,
            y = [];
          if (
            (N &&
              ((Z = !0),
              y.push({
                type: "publicTrans",
                planName: "公交地铁",
                price: "预计￥".concat(N.price),
                duration: "全程".concat((0, c.zE)(N.durationMinutesTemp)),
                fromLocation: s,
                toLocation: p,
                steps:
                  N.steps &&
                  N.steps.map(function (t) {
                    var e = t.type,
                      n = t.onStation,
                      i = t.offStation,
                      a = t.name,
                      c = t.stopNum,
                      o = t.durationStr,
                      l = t.instructions,
                      u = {
                        type: e,
                        instructions: "".concat(l, "(").concat(o, ")"),
                      };
                    return (
                      3 == e &&
                        (u = (0, r.Z)(
                          (0, r.Z)({}, u),
                          {},
                          {
                            onStation: n,
                            offStation: i,
                            instructions: '<span style="color: #198CFF;">'
                              .concat(a, "，</span>乘坐")
                              .concat(c, "站(")
                              .concat(o, ")"),
                          }
                        )),
                      u
                    );
                  }),
              })),
            h &&
              y.push({
                type: "taxi",
                planName: "打车",
                price: "预计￥".concat(h),
                duration: "全程".concat((0, c.zE)(g)),
                fromLocation: s,
                toLocation: p,
                instructions: ""
                  .concat(v, "公里(")
                  .concat((0, c.zE)(g), "分钟)"),
              }),
            T)
          ) {
            var w = T.price,
              S = T.minutesCost,
              x = T.distance;
            y.push({
              type: "airExpress",
              planName: "机场巴士",
              price: "预计￥".concat(w),
              duration: "全程".concat((0, c.zE)(S)),
              fromLocation: s,
              toLocation: p,
              instructions: "".concat(x, "公里(").concat((0, c.zE)(S), "分钟)"),
            });
          }
          y.length > 1 && (Z = !0);
          var V = { borderRadius: "32rpx 32rpx 0 0" };
          return (
            Z && (V.top = "20%"),
            (0, o.tZ)(a.Z, {
              toggleLayer: n,
              hideLayer: !e,
              enableTapBackground: !0,
              fixAtBottom: m,
              customStyle: V,
              children: (0, o.BX)(i.View, {
                className: "smart-trip-traffic-guide-pop",
                children: [
                  (0, o.BX)(i.View, {
                    className: "traffic-guide-title-bar",
                    children: [
                      (0, o.tZ)(i.View, {
                        className: "traffic-guide-title",
                        children: "".concat(s, " - ").concat(p),
                      }),
                      (0, o.tZ)(i.View, {
                        className: "close-icon",
                        id: "ANAw",
                        onClick: n,
                      }),
                    ],
                  }),
                  (0, o.tZ)(i.ScrollView, {
                    scrollY: !0,
                    scrollWithAnimation: !0,
                    className: "traffic-guide-content",
                    children: y.map(function (t, e) {
                      return (0, o.BX)(
                        i.View,
                        {
                          className: "traffic-plan",
                          children: [
                            (0, o.tZ)(l, {
                              title: f[e],
                              planName: t.planName,
                              price: t.price,
                              duration: t.duration,
                            }),
                            (0, o.BX)(i.View, {
                              className: "traffic-plan-guide",
                              children: [
                                "publicTrans" == t.type &&
                                  (0, o.BX)(i.Block, {
                                    children: [
                                      (0, o.BX)(i.View, {
                                        className: "end-point-banner",
                                        children: [
                                          (0, o.tZ)(i.View, {
                                            className: "end-point-icon start",
                                          }),
                                          (0, o.tZ)(i.View, {
                                            className: "station-name",
                                            children: s,
                                          }),
                                        ],
                                      }),
                                      t.steps &&
                                        t.steps.map(function (e, n) {
                                          return (0,
                                          o.tZ)(i.Block, { children: 5 == e.type ? (0, o.BX)(i.View, { className: "walk-step", children: [(0, o.tZ)(i.View, { className: "walk-step-icon" }), (0, o.tZ)(i.View, { className: "instructions", children: e.instructions })] }) : (0, o.tZ)(d, { type: t.type, offStation: e.offStation, onStation: e.onStation, instructions: e.instructions }) }, n);
                                        }),
                                      (0, o.BX)(i.View, {
                                        className: "end-point-banner",
                                        children: [
                                          (0, o.tZ)(i.View, {
                                            className: "end-point-icon end",
                                          }),
                                          (0, o.tZ)(i.View, {
                                            className: "station-name",
                                            children: p,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ["taxi", "airExpress"].includes(t.type) &&
                                  (0, o.tZ)(d, {
                                    type: t.type,
                                    onStation: t.fromLocation,
                                    offStation: t.toLocation,
                                    instructions: t.instructions,
                                  }),
                              ],
                            }),
                          ],
                        },
                        e
                      );
                    }),
                  }),
                ],
              }),
            })
          );
        };
      },
    },
  ]);
})();
