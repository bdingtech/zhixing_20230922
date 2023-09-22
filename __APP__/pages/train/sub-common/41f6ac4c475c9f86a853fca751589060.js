!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [29126],
    {
      48665: function (e, t, i) {
        var a = i(52500),
          n = i(71515),
          l = i(48813);
        t.Z = a.default.memo(function (e) {
          var t = e.isLogin,
            i = e.doLogin;
          return (0,
          l.tZ)(n.View, { className: "node-isolate-login-module", children: !t && (0, l.BX)(n.View, { className: "no-login-module flex-align-items-center", children: [(0, l.tZ)(n.Image, { className: "avatar", src: "https://images3.c-ctrip.com/zt/activity/ztrip-flight-business-travel-card/avatar-top.png" }), (0, l.BX)(n.View, { className: "center-text flex-1 flex flex-column", children: [(0, l.tZ)(n.Text, { className: "main-title", children: "登录解锁更多低价" }), (0, l.tZ)(n.Text, { className: "sub-title", children: "低价保障 · 安心出行 · 退改无忧" })] }), (0, l.tZ)(n.Button, { className: "login-btn", id: "AcEt", onClick: i, children: "立即登录" })] }) });
        });
      },
    },
  ]);
})();
