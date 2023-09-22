!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [70592],
    {
      83011: function (e, t, a) {
        a(52500);
        var l = a(71515),
          n = a(48813);
        t.Z = function (e) {
          var t = e.className,
            a = e.style,
            s = e.content,
            c = void 0 === s ? [] : s,
            i = e.dotStyle,
            r = e.txtStyle,
            o = e.itemStyle,
            _ = e.color;
          if (!(c && c.length > 0)) return (0, n.tZ)(l.View, {});
          var u = i || {},
            w = r || {};
          return (
            _ && ((u.backgroundColor = _), (w.color = _)),
            (0, n.tZ)(l.View, {
              className: t,
              style: a,
              children: c.map(function (e, t) {
                return (0,
                n.BX)(l.View, { style: o, className: " _i _Ga", children: [(0, n.tZ)(l.View, { className: " _Ha _Ia _Ja _Ka _La", style: u }), (0, n.tZ)(l.View, { className: " _j _Ma _Na _Q", style: w, children: e })] }, t);
              }),
            })
          );
        };
      },
    },
  ]);
})();
