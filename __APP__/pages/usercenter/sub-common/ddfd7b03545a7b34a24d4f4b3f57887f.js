!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [69666],
    {
      80689: function (e, t, o) {
        var n = o(90129),
          i = o(52500),
          a = o(71515),
          c = o(34229),
          r = o(72012),
          l = o(89042),
          s = o(48813);
        t.Z = i.default.memo(function (e) {
          var t,
            o = e.visible,
            h = e.shareTicket,
            u = e.tempKey,
            p = e.checkedTemplate,
            d = e.shareQRCodeImageUrl,
            k = e.onCanCel,
            m = e.onCheckTicketTemplate,
            f = e.onShareAction,
            v = e.ShareActionArray,
            C = e.isShowChangePas,
            w = void 0 !== C && C,
            T = e.onChangePasInfo,
            y = void 0 === T ? function () {} : T,
            I = e.isShowFlipButton,
            Z = void 0 !== I && I,
            g = e.ubtTrace,
            P = e.pageId,
            S = e.userTicketCovers,
            b = e.handleGetPaidCoverInfo,
            A = e.clickUbtKey,
            K = e.PopupType,
            N = void 0 === K ? 0 : K,
            U = (0, i.useState)(u),
            x = (0, n.Z)(U, 2),
            B = x[0],
            V = x[1];
          if (!o) return b(null), V(u), (0, s.tZ)(a.View, {});
          var F =
            null ===
              (t = ((null == S
                ? void 0
                : S.filter(function (e) {
                    return (
                      e.ticketNum === (null == h ? void 0 : h.ticketLongNum)
                    );
                  })) || [])[0]) || void 0 === t
              ? void 0
              : t.coverInfo;
          return (0, s.BX)(a.View, {
            className: "share-collection-ticket-share-container",
            children: [
              (0, s.tZ)(a.View, {
                className: "show-ticket-contet flex",
                children: (0, s.tZ)(r.Z, {
                  tempKey: u,
                  ticket: h,
                  checkedTemplate: p,
                  shareQRCodeImageUrl: d,
                  onCanCel: k,
                  isShowFlipButton: Z,
                  ubtTrace: g,
                  pageId: P,
                  coverInfoList: F,
                  handleGetPaidCoverInfo: b,
                  defaultTempKey: B,
                  clickUbtKey: A,
                  PopupType: N,
                }),
              }),
              (0, s.tZ)(c.ZtDrawer, {
                show: o,
                closeIconParams: { color: "#666", size: 24 },
                onClose: k,
                children: (0, s.tZ)(l.Z, {
                  tempKey: u,
                  ticket: h,
                  onCheckTicketTemplate: function (e, t) {
                    V(e.type), m(e, t);
                  },
                  onShareAction: f,
                  ShareActionArray: v,
                  isShowChangePas: w,
                  onChangePasInfo: y,
                  checkedTemplate: p,
                }),
              }),
            ],
          });
        });
      },
    },
  ]);
})();
