!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [59777],
    {
      74290: function (e, i, t) {
        var l = t(79910),
          n = t(49120),
          o = t(34229),
          r = t(71515),
          a = t(52500),
          c = t(48813);
        i.Z = function (e) {
          var i = e.visible,
            t = void 0 !== i && i,
            s = e.data,
            d = e.onClose,
            u = e.oid,
            p = void 0 === u ? "" : u;
          if (
            ((0, a.useEffect)(
              function () {
                var e, i, l;
                t &&
                  s &&
                  (null === (e = (0, n.getCurrentPage)()) ||
                    void 0 === e ||
                    null === (i = e.ubtTrace) ||
                    void 0 === i ||
                    i.call(e, "TZWBuyOrderDetail_ResTicketPop_exposure", {
                      PageId:
                        null === (l = (0, n.getCurrentPage)()) || void 0 === l
                          ? void 0
                          : l.pageId,
                      orderid: p + "",
                      scmType:
                        null != s && s.type
                          ? (null == s ? void 0 : s.type) + ""
                          : "跨站多买",
                    }));
              },
              [t, s, p]
            ),
            !s)
          )
            return null;
          var m =
            (null == s ? void 0 : s.imgUrl) ||
            "https://images3.c-ctrip.com/ztrip/train.song/order_details/img_wsj@3x.webp";
          return (0, c.tZ)(o.ZtActivityPop, {
            show: t,
            className: "trn-ticketRecommend-dialog",
            animation: "comeup",
            onClose: d,
            onWrapClose: d,
            children: (0, c.BX)(r.View, {
              className: "content",
              id: "AADl",
              onClick: function () {
                var e, i, t;
                null === (e = (0, n.getCurrentPage)()) ||
                  void 0 === e ||
                  null === (i = e.ubtTrace) ||
                  void 0 === i ||
                  i.call(e, "TZWBuyOrderDetail_ResTicketPop_Share_click", {
                    PageId:
                      null === (t = (0, n.getCurrentPage)()) || void 0 === t
                        ? void 0
                        : t.pageId,
                    orderid: p + "",
                    scmType:
                      null != s && s.type
                        ? (null == s ? void 0 : s.type) + ""
                        : "跨站多买",
                  }),
                  l.Z.commonNavigator(null == s ? void 0 : s.jumpUrl);
              },
              children: [
                (0, c.tZ)(r.Image, { src: m, className: "bg", webp: !0 }),
                (0, c.BX)(r.View, {
                  className: "title",
                  children: [
                    "恭喜您是今天第",
                    (0, c.tZ)(r.Text, {
                      className: "num",
                      children: (null == s ? void 0 : s.num) || 1024,
                    }),
                    "位使用",
                  ],
                }),
                (0, c.tZ)(r.Image, {
                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/img_mc@3x.webp",
                  className: "title-bg",
                  webp: !0,
                }),
              ],
            }),
          });
        };
      },
    },
  ]);
})();
