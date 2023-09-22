!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [32690],
    {
      76290: function (o, t, e) {
        e.d(t, {
          ZP: function () {
            return C;
          },
          y3: function () {
            return n;
          },
        });
        var n,
          s = e(22276),
          a = e(298),
          r = e(57042),
          i = e(24460),
          u = e(45023),
          c = e(92954),
          l = e.n(c),
          d = e(18783);
        function f() {
          var o =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : n.orderDetail,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : d.ZP.userName;
          return "TRAIN_CROSS_TOAST_STORE_".concat(o, "_").concat(t);
        }
        function g(o) {
          var t = o.codeName,
            e = f(o.fromPage, o.uniqueCountId),
            n = l().getStorageSync(e) || {};
          console.log("old TrainToastCrossStore====", n),
            (n[t] = (n[t] || 0) + 1),
            console.log("new TrainToastCrossStore====", n),
            l().setStorageSync(e, n);
        }
        !(function (o) {
          (o.orderDetail = "orderDetail"),
            (o.grabDetail = "grabDetail"),
            (o.grabSuccess = "grabSuccess"),
            (o.shelves = "shelves"),
            (o.smartOrderDetail = "smartOrderDetail");
        })(n || (n = {}));
        var v = function (o) {
            try {
              return "string" != typeof o ? o : JSON.parse(o);
            } catch (t) {
              return o;
            }
          },
          C = (function () {
            function o(t) {
              var e = this,
                i = t.uniqueCountToasts,
                c = t.fromPage,
                d = void 0 === c ? n.orderDetail : c;
              (0, r.Z)(this, o),
                (0, u.Z)(this, "specialToasts", []),
                (0, u.Z)(this, "specialNotices", []),
                (0, u.Z)(this, "toasts", []),
                (0, u.Z)(this, "areas", []),
                (0, u.Z)(this, "notices", []),
                (0, u.Z)(this, "uniqueCountToasts", void 0),
                (0, u.Z)(this, "fromPage", void 0),
                (0, u.Z)(this, "disableToastAutoPop", void 0),
                (0, u.Z)(this, "getCommonToast", function () {
                  var o =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : function (o) {
                          return !!o;
                        };
                  if (e.disableToastAutoPop)
                    return (
                      console.log("octopus:commonToast toast autopop已禁用"),
                      null
                    );
                  console.log("specialToastList=", e.specialToasts);
                  var t = e.toasts.filter(function (o) {
                    var t = o.toastType,
                      n = o.toastCode;
                    return 1 === t && !e.specialToasts.includes(n);
                  })[0];
                  return (
                    t &&
                      o(t) &&
                      g({
                        codeName: t.toastCode,
                        fromPage: e.fromPage,
                        uniqueCountId: e.uniqueCountToasts[t.toastCode],
                      }),
                    t
                  );
                }),
                (0, u.Z)(this, "getCommonNotice", function () {
                  return (
                    console.log("specialNoticeList=", e.specialNotices),
                    e.notices.filter(function (o) {
                      var t = o.noticeCode;
                      return !e.specialNotices.includes(t);
                    })[0]
                  );
                }),
                (0, u.Z)(this, "getCommonNoticeScene", function () {
                  var o = e.getCommonNotice();
                  if (o) return e.getNoticeCrossScene(o.noticeCode);
                }),
                (0, u.Z)(this, "getNoticeCrossScene", function (o) {
                  var t = e.notices.find(function (t) {
                      return t.noticeCode === o;
                    }),
                    n = v(null == t ? void 0 : t.noticeJson),
                    s =
                      t &&
                      (0, a.Z)(
                        (0, a.Z)({}, t),
                        {},
                        {
                          _jsonInfo: n
                            ? (0, a.Z)((0, a.Z)({}, n), {}, { _codeName: o })
                            : null,
                        }
                      );
                  return (
                    s && console.log("getNoticeCrossScene=", o, s),
                    e.specialNotices.push(o),
                    s
                  );
                }),
                (0, u.Z)(this, "getAreaCrossScene", function (o) {
                  var t = e.areas.find(function (t) {
                      return t.areaCode === o;
                    }),
                    n = v(null == t ? void 0 : t.areaJson),
                    s =
                      t &&
                      (0, a.Z)(
                        (0, a.Z)({}, t),
                        {},
                        {
                          _jsonInfo: n
                            ? (0, a.Z)((0, a.Z)({}, n), {}, { _codeName: o })
                            : null,
                        }
                      );
                  return s && console.log("getAreaCrossScene=", o, s), s;
                }),
                (0, u.Z)(this, "getToastCrossScene", function (o) {
                  var t,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : function (o) {
                            return !!o;
                          },
                    i = Array.isArray(o) ? o : [o],
                    u = e.toasts.find(function (o) {
                      var t = o.toastCode;
                      return i.includes(t);
                    }),
                    c = v(null == u ? void 0 : u.toastJson),
                    l =
                      u &&
                      (0, a.Z)(
                        (0, a.Z)({}, u),
                        {},
                        {
                          _jsonInfo: c
                            ? (0, a.Z)(
                                (0, a.Z)((0, a.Z)({}, c), {
                                  toastJson: v(c.toastJson) || void 0,
                                }),
                                {},
                                { _codeName: u.toastCode }
                              )
                            : null,
                        }
                      );
                  if (
                    1 === (null == u ? void 0 : u.toastType) &&
                    e.disableToastAutoPop
                  )
                    return (
                      console.log("octopus:".concat(i, " toast autopop已禁用")),
                      null
                    );
                  var d = [
                    n.grabDetail,
                    n.grabSuccess,
                    n.shelves,
                    n.smartOrderDetail,
                  ];
                  return (
                    1 === (null == u ? void 0 : u.toastType) &&
                      d.includes(e.fromPage) &&
                      r(l) &&
                      i.forEach(function (o) {
                        g({
                          codeName: o,
                          fromPage: e.fromPage,
                          uniqueCountId: e.uniqueCountToasts[o],
                        });
                      }),
                    l && console.log("getToastCrossScene=", i, l),
                    (t = e.specialToasts).push.apply(t, (0, s.Z)(i)),
                    l
                  );
                }),
                (0, u.Z)(
                  this,
                  "getTrainCrossToastCountInStore4Service",
                  function () {
                    var o = this,
                      t = [],
                      e = {};
                    Object.keys(this.uniqueCountToasts)
                      .map(function (t) {
                        return {
                          uniqueCountId: o.uniqueCountToasts[t],
                          codeName: t,
                        };
                      })
                      .forEach(function (n) {
                        var s = n.uniqueCountId,
                          a = n.codeName,
                          r = f(o.fromPage, s),
                          i = e[r] || l().getStorageSync(r) || {};
                        (e[r] = i),
                          console.log("-----", r, i),
                          Object.keys(i).forEach(function (o) {
                            a === o &&
                              t.push({ ruleCode: o, showCount: i[o] || 0 });
                          });
                      });
                    var n = f(this.fromPage),
                      s = l().getStorageSync(n) || {};
                    return (
                      Object.keys(s).forEach(function (e) {
                        o.uniqueCountToasts[e] ||
                          t.push({ ruleCode: e, showCount: s[e] || 0 });
                      }),
                      console.log(
                        "getTrainCrossToastCountInStore4Service===",
                        t
                      ),
                      t
                    );
                  }
                ),
                this.create({ uniqueCountToasts: i, fromPage: d });
            }
            return (
              (0, i.Z)(o, [
                {
                  key: "create",
                  value: function (o) {
                    var t = o.uniqueCountToasts,
                      e = void 0 === t ? {} : t,
                      n = o.fromPage;
                    (this.uniqueCountToasts = e), (this.fromPage = n);
                  },
                },
                {
                  key: "initData",
                  value: function (o) {
                    var t = o.areas,
                      e = void 0 === t ? [] : t,
                      n = o.toasts,
                      s = void 0 === n ? [] : n,
                      a = o.notices,
                      r = void 0 === a ? [] : a,
                      i = o.disableToastAutoPop,
                      u = void 0 !== i && i;
                    Object.assign(this, {
                      areas: e,
                      notices: r,
                      toasts: s,
                      disableToastAutoPop: u,
                    });
                  },
                },
              ]),
              o
            );
          })();
        (0, u.Z)(C, "parseOctopusToast", function (o) {
          var t = v(null == o ? void 0 : o.toastJson);
          return (
            o &&
            (0, a.Z)(
              (0, a.Z)({}, o),
              {},
              {
                _jsonInfo: t
                  ? (0, a.Z)(
                      (0, a.Z)((0, a.Z)({}, t), {
                        toastJson: v(t.toastJson) || void 0,
                      }),
                      {},
                      { _codeName: o.toastCode }
                    )
                  : null,
              }
            )
          );
        }),
          (0, u.Z)(C, "parseOctopusArea", function (o) {
            var t = v(null == o ? void 0 : o.areaJson);
            return (
              o &&
              (0, a.Z)(
                (0, a.Z)({}, o),
                {},
                {
                  _jsonInfo: t
                    ? (0, a.Z)((0, a.Z)({}, t), {}, { _codeName: o.codeName })
                    : null,
                }
              )
            );
          }),
          (0, u.Z)(C, "parseOctopusAreaV2", function (o) {
            var t = v(null == o ? void 0 : o.areaJson);
            return o && (0, a.Z)((0, a.Z)({}, o), {}, { _jsonInfo: t });
          }),
          (0, u.Z)(C, "parseOctopusNotice", function (o) {
            var t = v(null == o ? void 0 : o.noticeJson);
            return (
              o &&
              (0, a.Z)(
                (0, a.Z)({}, o),
                {},
                {
                  _jsonInfo: t
                    ? (0, a.Z)((0, a.Z)({}, t), {}, { _codeName: o.codeName })
                    : null,
                }
              )
            );
          }),
          (0, u.Z)(C, "countTrainCrossToastInStore", g),
          (0, u.Z)(
            C,
            "getTrainCrossToastCountInStore4Service",
            function (o, t) {
              var e = [],
                n = {};
              Object.keys(o)
                .map(function (t) {
                  return { uniqueCountId: o[t], codeName: t };
                })
                .forEach(function (o) {
                  var s = o.uniqueCountId,
                    a = o.codeName,
                    r = f(t, s),
                    i = n[r] || l().getStorageSync(r) || {};
                  (n[r] = i),
                    Object.keys(i).forEach(function (o) {
                      a === o && e.push({ ruleCode: o, showCount: i[o] || 0 });
                    });
                });
              var s = f(t),
                a = l().getStorageSync(s) || {};
              return (
                Object.keys(a).forEach(function (t) {
                  o[t] || e.push({ ruleCode: t, showCount: a[t] || 0 });
                }),
                console.log("getTrainCrossToastCountInStore4Service===", e),
                e
              );
            }
          );
      },
    },
  ]);
})();
