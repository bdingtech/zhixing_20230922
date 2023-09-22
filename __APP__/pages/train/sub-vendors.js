!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [98655],
    {
      63899: function (e, n, t) {
        var c = t(71515),
          i = (t(52500), t(48813));
        n.Z = function (e) {
          var n = e.children,
            t = e.className,
            r = e.renderExter;
          return (0, i.BX)(c.View, {
            className: "zx-common-btm-layer ".concat(t),
            children: [
              null == r ? void 0 : r(),
              (0, i.tZ)(c.View, { className: "content", children: n }),
            ],
          });
        };
      },
      87402: function (e, n, t) {
        t.d(n, {
          WG: function () {
            return s;
          },
        });
        var c = t(57042),
          i = t(24460),
          r = t(92954),
          a = t.n(r),
          o = (function () {
            function e(n) {
              (0, c.Z)(this, e), (this.key = n);
            }
            return (
              (0, i.Z)(
                e,
                [
                  {
                    key: "set",
                    value: function (e) {
                      if (null == e) return a().setStorageSync(this.key, "");
                      a().setStorageSync(this.key, e);
                    },
                  },
                  {
                    key: "get",
                    value: function () {
                      return a().getStorageSync(this.key);
                    },
                  },
                  {
                    key: "setAttr",
                    value: function (e, n) {
                      var t = this.get() || {};
                      (t[e] = n), this.set(t);
                    },
                  },
                  {
                    key: "getAttr",
                    value: function (e) {
                      return this.get()[e];
                    },
                  },
                  {
                    key: "removeAttr",
                    value: function (e) {
                      a().removeStorageSync(e);
                    },
                  },
                ],
                [
                  {
                    key: "getInstance",
                    value: function (n) {
                      return new e(n);
                    },
                  },
                ]
              ),
              e
            );
          })(),
          s =
            (o.getInstance("TRAIN_STATION_STORE_2"),
            o.getInstance("TRAIN_QUERY_STORE"),
            o.getInstance("TRAIN_BOOK_STORE"));
        o.getInstance("TRAIN_PASS_STORE"),
          o.getInstance("TRAIN_USER_STORE"),
          o.getInstance("LAST_UPDATE_TIME_V5"),
          o.getInstance("TRAIN_ACTIVITY_STORE"),
          o.getInstance("TRAIN_ORDER_DETAIL_STORE"),
          o.getInstance("TRAIN_BOOK_HOU_BU_STORE"),
          o.getInstance("TRAIN_INDEX_PAGE_STORE"),
          o.getInstance("TRAIN_STUDENT_ACTIVITY_STORE"),
          o.getInstance("BUS_TOUR_STATION_STORE"),
          o.getInstance("BUS_AIRPORT_STATION_STORE");
      },
      12386: function (e, n, t) {
        t(52500), t(92954);
        var c = t(71515),
          i = t(34229),
          r = t(48813);
        n.Z = function (e) {
          var n = e.visible,
            t = e.content,
            a = void 0 === t ? {} : t,
            o = e.onClose;
          if (!a) return null;
          var s = a.crossRule,
            l = void 0 === s ? {} : s,
            u = a.selfRec,
            d = void 0 === u ? {} : u;
          return (0, r.tZ)(i.ZtDrawer, {
            show: n,
            onClose: o,
            onWrapClose: o,
            closeIconParams: { type: "cancel", size: "22px", color: "#c3c3c3" },
            drawerStyle: {
              backgroundColor: "#f5f5f5",
              fontWeight: 600,
              borderRadius: "40rpx 40rpx 0 0",
            },
            title: "规则说明",
            children: (0, r.BX)(c.View, {
              className: "train-bookx-hotel-cross-rule-pop",
              children: [
                (0, r.BX)(c.View, {
                  className: "cross-rule-content",
                  children: [
                    (0, r.BX)(c.View, {
                      className: "title flex flex-center",
                      children: [
                        (0, r.tZ)(c.Text, { className: "icon" }),
                        (0, r.tZ)(c.Text, {
                          children: null == l ? void 0 : l.title,
                        }),
                      ],
                    }),
                    (0, r.tZ)(c.View, {
                      className: "detail-content",
                      children:
                        (null == l ? void 0 : l.details) &&
                        (null == l ? void 0 : l.details.length) > 0 &&
                        (null == l
                          ? void 0
                          : l.details.map(function (e, n) {
                              return (0,
                              r.BX)(c.View, { className: "item", children: [(0, r.tZ)(c.View, { className: "content", children: e.content }), (0, r.tZ)(c.View, { className: "desc", children: e.desc })] }, "crossRule_".concat(n));
                            })),
                    }),
                  ],
                }),
                (0, r.BX)(c.View, {
                  className: "selfRec-content",
                  children: [
                    (0, r.BX)(c.View, {
                      className: "title flex flex-center",
                      children: [
                        (0, r.tZ)(c.Text, { className: "icon" }),
                        (0, r.tZ)(c.Text, {
                          children: null == d ? void 0 : d.title,
                        }),
                      ],
                    }),
                    (0, r.tZ)(c.View, {
                      className: "detail-content flex",
                      children:
                        (null == d ? void 0 : d.contents) &&
                        (null == d ? void 0 : d.contents.length) > 0 &&
                        (null == d
                          ? void 0
                          : d.contents.map(function (e, n) {
                              return (0,
                              r.tZ)(c.View, { className: "item", children: (0, r.tZ)(c.View, { className: "reason flex flex-center", children: e }) }, "selfRec_".concat(n));
                            })),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      },
      25014: function (e, n, t) {
        t.d(n, {
          Ay: function () {
            return l;
          },
          B9: function () {
            return r;
          },
          MW: function () {
            return o;
          },
          a$: function () {
            return s;
          },
        });
        var c = t(298),
          i = t(52740),
          r = function (e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "1";
            function t(e, n, t) {
              if (!e) return e;
              for (var c = e.length - n - t, i = "", r = 0; r < c; r++)
                i += "*";
              return e.substring(0, n) + i + e.substring(e.length - t);
            }
            return "1" === n
              ? t(e, 4, 3)
              : "CGHB".indexOf(n) >= 0
              ? t(e, 2, 2)
              : e;
          },
          a = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return e.indexOf("H") >= 0
              ? "外国人永久居留身份证"
              : e.indexOf("1") >= 0
              ? "身份证"
              : e.indexOf("B") >= 0
              ? "护照"
              : e.indexOf("C") >= 0
              ? "港澳台居民居住证"
              : e.indexOf("G") >= 0
              ? "台胞证"
              : "";
          },
          o = function (e) {
            var n = e || "";
            return n.indexOf("外国人") >= 0
              ? "H"
              : n.indexOf("身份证") >= 0 || n.indexOf("港澳台") >= 0
              ? "1"
              : n.indexOf("港澳") >= 0
              ? "C"
              : n.indexOf("台湾") >= 0
              ? "G"
              : n.indexOf("护照") >= 0
              ? "B"
              : "";
          },
          s = function () {
            for (
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                n = arguments.length > 1 ? arguments[1] : void 0,
                t = n || [],
                s = e.map(function (e) {
                  return r(e.IdentityNo, o(e.IdentityType)) + "-" + e.CNName;
                }),
                l = [],
                u = [],
                d = [],
                f = 0;
              f < t.length;
              f++
            ) {
              var T = "";
              if (t[f].IDNo.indexOf("*") > 0) {
                T = t[f].IDNo + "-" + t[f].PassengerName;
                for (var N = !0, I = 0; I < s.length; I++)
                  if (T == s[I]) {
                    (N = !1),
                      u.push(
                        (0, c.Z)(
                          (0, c.Z)({}, e[I]),
                          {},
                          { isSelf: t[f].isSelf }
                        )
                      );
                    break;
                  }
                if (N) {
                  var v,
                    h = {
                      newPas: !0,
                      PassengerType: t[f].PassengerType,
                      pasName: t[f].PassengerName,
                      CNName: t[f].PassengerName,
                      IdentityNo: t[f].IDNo,
                      IdentityType: a(t[f].IDType),
                      cardType:
                        (null ===
                          (v = i.BT.find(function (e) {
                            return e.realType;
                          })) || void 0 === v
                          ? void 0
                          : v.commonServiceCode) || 1,
                      idcard: { text: a(t[f].IDType), showCode: t[f].IDNo },
                    };
                  l.push(h);
                }
              }
            }
            for (
              var g = function (n) {
                  var t = e[n];
                  u.find(function (e) {
                    return (
                      ""
                        .concat(e.IdentityNo, "-")
                        .concat(e.IdentityType, "-")
                        .concat(e.CNName) ==
                      ""
                        .concat(t.IdentityNo, "-")
                        .concat(t.IdentityType, "-")
                        .concat(t.CNName)
                    );
                  }) || d.push(t);
                },
                m = 0;
              m < e.length;
              m++
            )
              g(m);
            return [].concat(u, l, d);
          },
          l = function (e) {
            var n = (e && e.split("-")) || "2020";
            return new Date().getFullYear() - n[0];
          };
      },
    },
  ]);
})();
