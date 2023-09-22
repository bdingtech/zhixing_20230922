!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [97709],
    {
      65677: function (e, n, s) {
        s.d(n, {
          B: function () {
            return u;
          },
        });
        var a = s(52500),
          r = (s(92954), s(71515)),
          t = s(49120),
          o = s(77900),
          i = s(83016),
          l = s(48813),
          c = function (e) {
            var n = e.onClose,
              s = e.onConfirm,
              c = e.validateParams,
              u = e.passenger,
              d = e.selectedPassengers,
              p = e.toEditPassenger,
              m = (0, a.useRef)();
            return (0, l.BX)(l.HY, {
              children: [
                (0, l.BX)(r.View, {
                  className: "input-box",
                  children: [
                    (0, l.BX)(r.View, {
                      className: "phone-input-wrapper flex-align-items-center",
                      children: [
                        "+86",
                        (0, l.tZ)(r.Input, {
                          ref: m,
                          className: "phone-input",
                          placeholderClass: "phone-input-placeholder",
                          placeholder: "用于接受航空公司重要通知",
                          type: "number",
                          maxlength: 11,
                          cursorSpacing: 50,
                          alwaysEmbed: !0,
                        }),
                      ],
                    }),
                    (0, l.tZ)(r.View, {
                      className: "input-note",
                      children:
                        "*应航司要求，乘机人乘坐航班需预留手机号码，且成人乘机人不可预留相同手机号",
                    }),
                  ],
                }),
                (0, l.tZ)(r.View, {
                  className: "drawer-botm",
                  children: (0, l.tZ)(r.Button, {
                    className: "confirm-btn",
                    id: "AADQ",
                    onClick: function () {
                      var e = m.current.value;
                      if (!e) return (0, t.showToast)("手机号码不能为空");
                      if (!o.Z.isMobile(e))
                        return (0, t.showToast)("手机号格式不正确");
                      u.mobile = e;
                      var a = (0, i.$4)({
                        validateParams: c,
                        passenger: u,
                        selectedPassengers: d,
                        toEditPassenger: p,
                      });
                      (u.selected = a), s({ passenger: u }), n();
                    },
                    children: "确认",
                  }),
                }),
              ],
            });
          },
          u = function (e) {
            var n = e.passenger,
              s = e.validateParams,
              a = e.selectedPassengers,
              r = e.toEditPassenger,
              o = e.onConfirm,
              i = void 0 === o ? function () {} : o;
            (0, t.getCurrentPage)().showCommonDrawer({
              title: "请补充".concat(null == n ? void 0 : n.name, "的手机号"),
              content: function (e) {
                var t = e.onClose;
                return (0, l.tZ)(c, {
                  onClose: t,
                  onConfirm: i,
                  passenger: n,
                  validateParams: s,
                  selectedPassengers: a,
                  toEditPassenger: r,
                });
              },
              className: "pas-phone-input-drawer",
            });
          };
      },
    },
  ]);
})();
