!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [56474],
    {
      64959: function (e, t, n) {
        var r = n(79301),
          c = n(95308),
          a = n(11354),
          u = n(79910),
          s = n(71515),
          o = n(52500),
          i = n(48813);
        t.Z = (0, o.forwardRef)(function (e, t) {
          var n = e.onGetCodeAsync,
            l = (0, a.Z)(60),
            _ = l.time,
            f = l.isActive,
            d = l.start,
            p = l.reset,
            v = (0, o.useRef)(null),
            w = function () {
              var e;
              return null === (e = v.current) || void 0 === e
                ? void 0
                : e.value;
            },
            x = function () {
              return v.current && (v.current.value = "");
            },
            Z = u.Z.throttle(
              (0, c.Z)(
                (0, r.Z)().mark(function e() {
                  var t;
                  return (0, r.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), null == n ? void 0 : n();
                        case 2:
                          if (((e.t0 = e.sent), e.t0)) {
                            e.next = 5;
                            break;
                          }
                          e.t0 = { getCode: !0 };
                        case 5:
                          if (((t = e.t0), t.getCode)) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return");
                        case 9:
                          x(), p(), d();
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              1e3
            );
          return (
            (0, o.useImperativeHandle)(t, function () {
              return { getValue: w, resetValue: x };
            }),
            (0, i.BX)(s.View, {
              className: " _i _l _n",
              children: [
                (0, i.tZ)(s.Input, {
                  className: " _j",
                  placeholderClass: " _we _xe _Uc _U",
                  placeholder: "请输入验证码",
                  ref: v,
                }),
                (0, i.tZ)(s.View, {
                  className: " _x _qe _Uc _re _se _te _ue _bc _o _ve",
                  onClick: f ? function () {} : Z,
                  children: f ? "重新获取·".concat(_, "s") : "获取验证码",
                }),
              ],
            })
          );
        });
      },
    },
  ]);
})();
