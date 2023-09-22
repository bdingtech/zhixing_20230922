!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [14030],
    {
      28044: function (e, t, i) {
        var n = i(52500),
          c = (i(92954), i(71515)),
          a = i(34229),
          l = i(48813);
        t.Z = n.default.memo(function (e) {
          var t = e.showHeadImg,
            i = e.headImg,
            n =
              void 0 === i
                ? "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/peitu_quxiao.png"
                : i,
            s = e.title,
            o = e.content,
            r = e.onCancel,
            m = e.onConfirm,
            d = e.cancelText,
            h = e.confirmText,
            f = void 0 === h ? "我知道了" : h;
          return (0,
          l.BX)(c.View, { className: "flt-common-drawer-content", children: [(0, l.tZ)(c.View, { className: "hd flex-center", children: t ? (0, l.tZ)(c.Image, { className: "head-img", src: n }) : (0, l.tZ)(c.View, { style: { height: "56rpx" } }) }), (0, l.BX)(c.View, { className: "body", children: [(0, l.tZ)(c.View, { className: "f-title flex-center", children: s }), (0, l.tZ)(c.View, { className: "f-sub-title flex-center", children: (0, l.tZ)(a.ZtRichText, { nodes: o }) })] }), (0, l.BX)(c.View, { className: "btm flex-align-items-center", children: [d && (0, l.tZ)(c.Button, { className: "btn flex-1 cancel", id: "AACs", onClick: r, children: d }), (0, l.tZ)(c.Button, { className: "btn flex-1", id: "AACt", onClick: m, children: f })] })] });
        });
      },
    },
  ]);
})();
