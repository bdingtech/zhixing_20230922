!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [82316],
    {
      84828: function (e, i, t) {
        var a = t(52500),
          n = (t(92954), t(71515)),
          s = t(79792),
          c = t(48813);
        i.Z = a.default.memo(function (e) {
          var i = e.isNew,
            t = void 0 !== i && i,
            a = e.fromPage,
            o = void 0 === a ? "" : a;
          return (0,
          c.BX)(n.View, { className: "train-list-nodata-view", children: [(0, c.tZ)(n.Icon, { className: (t ? " new-img " : "img-selnone ") + (s.default.isTieyou ? "ty" : "zx") }), (0, c.tZ)(n.View, { className: "tit", children: "暂无内容" }), (0, c.tZ)(n.View, { className: "txt", children: "h5SmartSystem" === o ? "余票已全部售罄或当前日期暂未开售，换个日期试试吧" : "没有找到出行方案，换个日期试试吧" })] });
        });
      },
    },
  ]);
})();
