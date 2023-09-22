!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [30120],
    {
      31952: function (t, e, i) {
        var n = i(52500),
          c = (i(92954), i(71515)),
          s = i(79910),
          a = i(34229),
          l = i(48813);
        e.Z = n.default.memo(function (t) {
          var e = t.tipList,
            i = void 0 === e ? [] : e,
            n = t.className,
            o = void 0 === n ? "" : n;
          return (0, l.tZ)(c.View, {
            className: "train-tip-list ".concat(o),
            children: i.map(function (t, e) {
              return (0,
              l.BX)(c.View, { className: "tip-item flex", children: [(0, l.tZ)(c.Text, { className: "dot flex-align-items-center" }), (0, l.tZ)(c.View, { className: "tip", children: (0, l.tZ)(a.ZtRichText, { space: "nbsp", nodes: s.Z.convertAppTextToHtmlStr(t) }) })] }, e);
            }),
          });
        });
      },
    },
  ]);
})();
