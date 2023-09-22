!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [61094],
    {
      26498: function (i, o, c) {
        var n = c(298),
          e = (c(92954), c(71515)),
          t = c(79792),
          d = c(52500),
          a = c(48813);
        o.Z = d.default.memo(function (i) {
          var o = i.checked,
            c = i.onClick,
            d = void 0 === c ? function () {} : c,
            s = i.value,
            u = i.size,
            l = void 0 === u ? 20 : u,
            f = i.style,
            v = void 0 === f ? {} : f,
            k = i.className,
            h = void 0 === k ? "" : k,
            b = i.disabled,
            p = void 0 !== b && b,
            w = i.onDisabledClick,
            r = void 0 === w ? function () {} : w,
            m = i.onCheckedView,
            x = void 0 === m ? function () {} : m,
            C = i.onCancelView,
            y = void 0 === C ? function () {} : C,
            V = i.useCustomView,
            z = void 0 !== V && V,
            Z = t.default.isTieyou;
          return (0, a.tZ)(e.View, {
            className: ""
              .concat(
                z
                  ? ""
                  : o
                  ? "icon-checked iconfont2 ifont2-checkboxed"
                  : "icon-check iconfont2 ifont2-checkbox",
                "  radio-comp "
              )
              .concat(Z ? "ty" : "zx", " ")
              .concat(h, " ")
              .concat(p ? "disabled" : ""),
            style: (0, n.Z)({ fontSize: "".concat(l, "px") }, v),
            id: "AABp",
            onClick: p ? r.bind(this, s) : d.bind(this, s),
            children: z && (o ? x() : y()),
          });
        });
      },
    },
  ]);
})();
