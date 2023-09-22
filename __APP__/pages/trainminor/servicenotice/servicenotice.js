!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [1008],
    {
      43752: function (e, t, a) {
        var n,
          i = a(32180),
          c = a(57042),
          o = a(24460),
          r = a(21867),
          s = a(86066),
          l = a(52500),
          u = a(71515),
          d = a(92954),
          h = a.n(d),
          p = a(48792),
          f = a.n(p),
          m = a(79792),
          y = a(81957),
          w = a(48813),
          B = {
            pageId: "10650060613",
            data: { isTieyou: m.default.isTieyou, key: "" },
            onLoad: function (e) {
              var t = e.key || "";
              t
                ? (this.setData({ key: t }),
                  h().setClipboardData({
                    data: t,
                    success: function () {
                      h().getClipboardData({ success: function () {} });
                    },
                  }))
                : h().showToast({ icon: "none", title: "未获取到验证码" });
            },
          },
          N =
            (0, y.h)()(
              (n =
                f()(B)(
                  (n = (function (e) {
                    (0, r.Z)(a, e);
                    var t = (0, s.Z)(a);
                    function a() {
                      return (0, c.Z)(this, a), t.apply(this, arguments);
                    }
                    return (
                      (0, o.Z)(a, [
                        {
                          key: "render",
                          value: function () {
                            var e = this.data,
                              t = e.isTieyou,
                              a = e.key;
                            return (0, w.BX)(u.Block, {
                              children: [
                                (0, w.BX)(u.View, {
                                  className: "top " + (t ? "ty" : "zx"),
                                  children: [
                                    (0, w.tZ)(u.View, {
                                      className: "tit",
                                      children: "开通微信服务通知",
                                    }),
                                    (0, w.tZ)(u.View, {
                                      className: "txt",
                                      children:
                                        "开通微信通知服务后，可及时接收抢票通知",
                                    }),
                                    (0, w.tZ)(u.View, {
                                      className: "txt",
                                      children: "出行通知、退款到账通知等信息",
                                    }),
                                    (0, w.tZ)(u.Icon, {
                                      className: "icon-" + (t ? "ty" : "zx"),
                                    }),
                                  ],
                                }),
                                (0, w.BX)(u.View, {
                                  className: "wrap",
                                  children: [
                                    !!a &&
                                      (0, w.BX)(u.Block, {
                                        children: [
                                          (0, w.tZ)(u.View, {
                                            className: "tit",
                                            children: "开通流程",
                                          }),
                                          (0, w.BX)(u.View, {
                                            className: "txt",
                                            children: [
                                              "1. 点击",
                                              (0, w.tZ)(u.Text, {
                                                className: "color-primary",
                                                children: "“去开启”",
                                              }),
                                              "前往“客服会话”页",
                                            ],
                                          }),
                                          (0, w.BX)(u.View, {
                                            className: "txt",
                                            children: [
                                              "2. 发送",
                                              (0, w.tZ)(u.Text, {
                                                className: "color-primary",
                                                children: a,
                                              }),
                                              "即可获得关联二维码（已为你复制，",
                                              (0, w.tZ)(u.Text, {
                                                className: "color-primary",
                                                children: "直接粘贴",
                                              }),
                                              "即可）",
                                            ],
                                          }),
                                        ],
                                      }),
                                    !!a &&
                                      (0, w.tZ)(u.Button, {
                                        className: "btn-go btn-primary",
                                        openType: "contact",
                                        children: "去开启",
                                      }),
                                  ],
                                }),
                              ],
                            });
                          },
                        },
                      ]),
                      a
                    );
                  })(l.default.Component))
                ) || n)
            ) || n;
        Page(
          (0, i.createPageConfig)(
            N,
            "pages/trainminor/servicenotice/servicenotice",
            { root: { cn: [] } },
            {
              navigationBarTitleText: "智行火车票",
              navigationBarBackgroundColor: "#0066E6",
              backgroundColorTop: "#0075F4",
              backgroundColorBottom: "#ffffff",
            } || {}
          )
        );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (t) {
          return e((e.s = t));
        })(43752);
      }),
        e.O();
    },
  ]);
})();
