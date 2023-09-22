!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [92167],
    {
      8724: function (c, t, e) {
        var n = e(52500),
          o = e(71515),
          i = e(34229),
          l = e(48813);
        t.Z = n.default.memo(function (c) {
          var t = c.detailInfo,
            e = void 0 === t ? {} : t,
            n = c.onClose,
            s = void 0 === n ? function () {} : n;
          return null != e && e.content
            ? (0, l.BX)(i.ZtDrawer, {
                show: !0,
                isShowClose: !1,
                onWrapClose: s,
                className: "train-product-drawer",
                children: [
                  (0, l.tZ)(o.View, { className: "tit", children: e.title }),
                  (0, l.tZ)(o.Image, {
                    className: "close-icon",
                    src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                    id: "AADv",
                    onClick: s,
                  }),
                  (0, l.tZ)(o.View, {
                    className: "cont-box",
                    children: (0, l.tZ)(o.ScrollView, {
                      className: "scroll-cont",
                      scrollY: !0,
                      children: (0, l.tZ)(i.ZtRichText, { nodes: e.content }),
                    }),
                  }),
                  (0, l.tZ)(o.View, {
                    className: "c-btn-box",
                    children: (0, l.tZ)(o.Button, {
                      className: "btn",
                      id: "AADw",
                      onClick: s,
                      children: "知道了",
                    }),
                  }),
                ],
              })
            : (0, l.tZ)(l.HY, {});
        });
      },
    },
  ]);
})();
