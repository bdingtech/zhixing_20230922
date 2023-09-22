!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [18210],
    {
      49793: function (e, n, t) {
        var c = t(90129),
          u = t(71515),
          l = t(52500),
          o = t(48813);
        n.Z = l.default.forwardRef(function (e, n) {
          var t,
            _ = e.useIdCode,
            a = (0, l.useState)(""),
            i = (0, c.Z)(a, 2),
            r = i[0],
            s = i[1],
            f = (0, l.useState)(!1),
            d = (0, c.Z)(f, 2),
            p = d[0],
            h = d[1],
            m = function () {
              h(!0);
            };
          return (
            (0, l.useImperativeHandle)(n, function () {
              return {
                getValue: function () {
                  return "".concat(r).concat(_);
                },
                clearVal: function () {
                  return s("");
                },
              };
            }),
            (0, o.BX)(u.View, {
              className: " _i _l _Sc _p _yc _Z",
              children: [
                _.length < 4 &&
                  new Array(4 - _.length).fill(0).map(function (e, n) {
                    return (0,
                    o.tZ)(u.View, { className: " _he _ie _je _ke _le _o _sb _me _Uc", style: { borderColor: p ? "#198CFF" : void 0 }, children: r[n] }, n);
                  }),
                null === (t = _ || "") || void 0 === t
                  ? void 0
                  : t.split("").map(function (e, n) {
                      return (0,
                      o.tZ)(u.View, { className: " _he _ie _je _ke _le _o _sb _me _Uc", children: e }, n);
                    }),
                _.length < 4 &&
                  (0, o.tZ)(u.Input, {
                    className: " _u _ne _oe _q _r _pe",
                    onClick: m,
                    onFocus: m,
                    onBlur: function () {
                      h(!1);
                    },
                    maxlength: 4 - _.length,
                    onInput: function (e) {
                      s(e.detail.value);
                    },
                  }),
              ],
            })
          );
        });
      },
    },
  ]);
})();
