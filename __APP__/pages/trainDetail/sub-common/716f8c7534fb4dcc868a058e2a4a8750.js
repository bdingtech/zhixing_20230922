!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [28718],
    {
      9173: function (e, c, n) {
        n(52500), n(92954);
        var a = n(71515),
          s = n(48813);
        c.Z = function () {
          return (0, s.BX)(a.View, {
            className: "dual-channel-box",
            children: [
              (0, s.BX)(a.View, {
                className: "dual-channel-banner",
                children: [
                  (0, s.BX)(a.View, {
                    className: "yupiao",
                    children: [
                      (0, s.tZ)(a.Icon, { className: "dual-channel-icon" }),
                      (0, s.tZ)(a.View, {
                        className: "icon-desc",
                        children: "余票监控",
                      }),
                    ],
                  }),
                  (0, s.BX)(a.View, {
                    className: "houbu",
                    children: [
                      (0, s.tZ)(a.Icon, { className: "dual-channel-icon" }),
                      (0, s.tZ)(a.View, {
                        className: "icon-desc",
                        children: "候补购票",
                      }),
                    ],
                  }),
                  (0, s.BX)(a.View, {
                    className: "plus-icon",
                    children: [
                      (0, s.tZ)(a.View, {
                        className: "plus-inner-icon horizontal",
                      }),
                      (0, s.tZ)(a.View, {
                        className: "plus-inner-icon vertical",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.tZ)(a.View, {
                className: "question-desc",
                children: "怎么样享双通道抢票？",
              }),
              (0, s.BX)(a.View, {
                className: "answer-desc",
                children: [
                  "铁路局规定：",
                  (0, s.tZ)(a.Text, {
                    className: "color-blue",
                    children: "开通铁路畅行会员完成实名制",
                  }),
                  "，即可免费享双通道抢票！",
                ],
              }),
            ],
          });
        };
      },
    },
  ]);
})();
