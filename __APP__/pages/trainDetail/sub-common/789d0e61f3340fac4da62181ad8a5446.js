!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [85379],
    {
      90620: function (e, t, n) {
        var a = n(298),
          i = n(74921),
          s = n(90129),
          c = n(52500),
          o = n(71515),
          l = (n(92954), n(48813)),
          u = ["onRef", "className"];
        t.Z = c.default.memo(function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = (0, c.useState)(!1),
            n = (0, s.Z)(t, 2),
            r = n[0],
            f = n[1],
            d = (0, c.useState)(""),
            p = (0, s.Z)(d, 2),
            Z = p[0],
            m = p[1],
            w = e.onRef,
            h = e.className,
            v = (0, i.Z)(e, u);
          (0, c.useImperativeHandle)(w, function () {
            return {
              getPassWord: function () {
                return Z;
              },
              setPassWord: function (e) {
                m(e);
              },
            };
          });
          var x = function (e) {
              m(e.detail.value);
            },
            g = function (e) {
              f(e);
            };
          return (0, l.BX)(o.View, {
            className: "flex-align-items-center ".concat(h),
            children: [
              (0, l.tZ)(o.View, {
                style: { flex: 1, marginRight: "10px" },
                children: (0, l.tZ)(
                  o.Input,
                  (0, a.Z)(
                    (0, a.Z)({}, v),
                    {},
                    {
                      className: "input-txt",
                      type: "text",
                      password: !r,
                      value: Z,
                      onInput: x,
                    }
                  )
                ),
              }),
              (0, l.tZ)(o.Block, {
                children: (0, l.tZ)(o.View, {
                  id: "AgAS",
                  onClick: function () {
                    g(!r);
                  },
                  children: r
                    ? (0, l.tZ)(o.View, { className: "i12306-eyeopen" })
                    : (0, l.tZ)(o.View, { className: "i12306-eyeclosed" }),
                }),
              }),
            ],
          });
        });
      },
    },
  ]);
})();
