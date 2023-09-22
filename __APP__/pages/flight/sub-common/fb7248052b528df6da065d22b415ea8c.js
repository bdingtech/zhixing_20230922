!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [6189],
    {
      41408: function (e, t, n) {
        n.d(t, {
          u: function () {
            return u;
          },
        }),
          n(52500);
        var i = n(71515),
          a = n(79792),
          c = n(49120),
          o = n(79910),
          s = n(48813),
          l = a.default.isTieyou,
          r = "pas-btn-invite",
          p = function (e) {
            var t = e.onClose;
            return (0, s.BX)(i.View, {
              className: "pop-invite",
              children: [
                (0, s.tZ)(i.View, {
                  className: "tit",
                  children: "邀请微信好友填写",
                }),
                (0, s.tZ)(i.View, {
                  className: "txt",
                  children: "好友完成后可收到微信通知\n刷新该页面即可",
                }),
                (0, s.BX)(i.View, {
                  className: "pop-btn",
                  children: [
                    (0, s.tZ)(i.View, {
                      className: "tag",
                      children: "新客领¥10券",
                    }),
                    (0, s.BX)(i.Button, {
                      className: "btn-invite",
                      "data-type": "invite",
                      id: r,
                      openType: "share",
                      children: [
                        (0, s.tZ)(i.Text, {
                          className: "ifont-wechat iconfont",
                        }),
                        "去邀请",
                      ],
                    }),
                  ],
                }),
                (0, s.tZ)(i.Text, {
                  className: "ifont-closed iconfont",
                  id: "AADP",
                  onClick: t,
                }),
              ],
            });
          },
          u = function (e) {
            var t,
              n = (0, c.getCurrentPage)(),
              i = n.onShareAppMessage;
            (n.onShareAppMessage = function (n) {
              var a;
              if ((null === (a = t) || void 0 === a || a(), n.target.id == r))
                return (
                  o.Z.sendUbtTrace("FltWWrite_InvitePop_Invite_click"),
                  {
                    title: "我在".concat(
                      l ? "铁友" : "智行",
                      "预订机票，快来帮我填写乘机人信息"
                    ),
                    path: "/".concat(e),
                    imageUrl:
                      "https://images3.c-ctrip.com/zt/wechat/flight/invite_passenger_".concat(
                        l ? "ty" : "zx",
                        ".png"
                      ),
                  }
                );
              null == i || i(n);
            }),
              n.showCommonDialog({
                hideTitle: !0,
                hideButton: !0,
                content: function (e) {
                  var n = e.onClose;
                  return (t = n), (0, s.tZ)(p, { onClose: n });
                },
                className: "invite-passenger-dialog",
              });
          };
      },
    },
  ]);
})();
