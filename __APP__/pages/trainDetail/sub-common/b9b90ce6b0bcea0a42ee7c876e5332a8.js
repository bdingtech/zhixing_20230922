!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [43954],
    {
      67133: function (t, e, a) {
        var r = a(72216).default,
          n = a(93552).default,
          o = a(77108).default,
          i = a(93430).default,
          c =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var u = c(a(8271)),
          d = (function () {
            function t() {
              o(this, t);
            }
            return (
              i(t, null, [
                {
                  key: "isShowModal",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [],
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      a = arguments.length > 2 ? arguments[2] : void 0,
                      r = arguments.length > 3 ? arguments[3] : void 0,
                      o =
                        arguments.length > 4 &&
                        void 0 !== arguments[4] &&
                        arguments[4];
                    try {
                      var i = this.arrayObjectAddKey(t).sort(this.sortFn),
                        c = this.arrayObjectAddKey(e).sort(this.sortFn);
                      !0 === o &&
                        (i = this.arrayObjectAddKey(
                          this.elimination(t, e)
                        ).sort(this.sortFn));
                      var d = i.length,
                        l = c.length,
                        f = Reflect.get(i[0], "compareTime"),
                        s = Reflect.get(i[d - 1], "compareTime"),
                        m = Reflect.get(c[0], "compareTime"),
                        h = Array.from(
                          new Set(
                            []
                              .concat(n(a.split(",")), n(r.split(",")))
                              .map(function (t) {
                                return (0, u.default)(t).format("MM-DD");
                              })
                          )
                        ).join("、"),
                        p = Reflect.get(c[l - 1], "compareTime"),
                        v = (0, u.default)(f).diff(p, "hour"),
                        y = (0, u.default)(m).diff(s, "hour");
                      if ((f >= m && f <= p) || (s >= m && s <= p))
                        return { isShowModal: !1 };
                      if (p < f && Math.abs(v) >= 8) {
                        var M = c[0],
                          b = i[d - 1];
                        return {
                          isShowModal: !0,
                          showMsg: "添加后，新方案会帮您抢："
                            .concat(h, "最早班次为")
                            .concat(M.departTime, " ")
                            .concat(M.trainNumber, "，最晚班次为")
                            .concat(b.departTime, " ")
                            .concat(b.trainNumber, "的票"),
                        };
                      }
                      if (m > s && Math.abs(y) >= 8) {
                        var g = i[0],
                          T = c[l - 1];
                        return {
                          isShowModal: !0,
                          showMsg: "添加后，新方案会帮您抢："
                            .concat(h, "最早班次为")
                            .concat(g.departTime, " ")
                            .concat(g.trainNumber, "，最晚班次为")
                            .concat(T.departTime, " ")
                            .concat(T.trainNumber, "的票"),
                        };
                      }
                      return { isShowModal: !1 };
                    } catch (t) {
                      return { isShowModal: !1 };
                    }
                  },
                },
                {
                  key: "sortFn",
                  value: function (t, e) {
                    return t.compareTime - e.compareTime;
                  },
                },
                {
                  key: "elimination",
                  value: function (t, e) {
                    return t.filter(function (t) {
                      return e.every(function (e) {
                        return (
                          ""
                            .concat(e.departTime, "-")
                            .concat(e.trainNumber, "-")
                            .concat(e.departStation) !==
                          ""
                            .concat(t.departTime, "-")
                            .concat(t.trainNumber, "-")
                            .concat(t.departStation)
                        );
                      });
                    });
                  },
                },
                {
                  key: "arrayObjectAddKey",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [],
                      e = (0, u.default)().format("YYYY-MM-DD"),
                      a = t.map(function (t) {
                        return r(
                          r({}, t),
                          {},
                          {
                            compareTime: (0, u.default)(
                              "".concat(e, " ").concat(t.departTime)
                            ).valueOf(),
                          }
                        );
                      });
                    return a;
                  },
                },
              ]),
              t
            );
          })();
        e.default = d;
      },
    },
  ]);
})();
