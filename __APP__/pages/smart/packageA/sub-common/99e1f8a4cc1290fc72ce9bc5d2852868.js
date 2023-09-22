!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [16048],
    {
      24383: function (n, t, e) {
        var i = e(52500),
          l = e(71515),
          r = e(34229),
          a = e(48813);
        t.Z = i.default.memo(function (n) {
          var t = n.entrancePopup,
            e = n.onClose,
            c = n.entranceDrawerTips,
            o = n.isShow;
          if (!c) return (0, a.tZ)(a.HY, {});
          var s = function () {
            null == e || e();
          };
          return (0, a.tZ)(r.ZtDrawer, {
            title: null == t ? void 0 : t.title,
            onClose: s,
            onWrapClose: s,
            className: "entrance-pop",
            show: o,
            children:
              null != c && c.length
                ? (0, a.BX)(i.Fragment, {
                    children: [
                      c.map(function (n) {
                        var t = n.content,
                          e = n.title;
                        return (0,
                        a.BX)(i.Fragment, { children: [(0, a.tZ)(r.ZtRichText, { className: "title", nodes: e }), (0, a.tZ)(l.View, { className: "content-box", children: (0, a.tZ)(r.ZtRichText, { nodes: t }) })] }, e);
                      }),
                      (0, a.tZ)(l.View, {
                        className: "btn-submit-box",
                        children: (0, a.tZ)(l.Button, {
                          className: "btn-primary btn-submit",
                          id: "AACw",
                          onClick: s,
                          children: t.btn,
                        }),
                      }),
                    ],
                  })
                : null,
          });
        });
      },
    },
  ]);
})();
