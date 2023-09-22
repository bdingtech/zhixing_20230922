!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [86167],
    {
      73689: function (e, t, a) {
        a(52500);
        var r = a(71515),
          i = a(65363),
          s = a(79792),
          n = a(48813);
        t.Z = function (e) {
          var t = e.isPreRequest,
            a = void 0 !== t && t,
            l = e.visible,
            h = e.width,
            o = e.height,
            u = e.shareUrl,
            c = e.templateKey,
            m = e.extraParams,
            p = e.onClose,
            d = (0, i.Z)({
              isRequestImage: a || l,
              shareUrl: u,
              templateKey: c,
              width: h,
              height: o,
              extraParams: m,
              onClose: p,
            }),
            w = d.shareImage,
            g = d.SharePicturePop,
            x = d.SavePictureButton,
            P = d.ShareFriendButton;
          return w
            ? (0, n.tZ)(g, {
                className: " _i _n",
                imageStyle: { borderRadius: "48rpx" },
                show: l,
                children: (0, n.BX)(r.View, {
                  className: " _i _n _l _Fa",
                  children: [
                    (0, n.tZ)(x, {}),
                    s.default.isWechat &&
                      (0, n.tZ)(P, { style: { marginLeft: "40rpx" } }),
                  ],
                }),
              })
            : null;
        };
      },
    },
  ]);
})();
