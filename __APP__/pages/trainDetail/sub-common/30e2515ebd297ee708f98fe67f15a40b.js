!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [31472],
    {
      81191: function (e, i, a) {
        a(52500);
        var r = a(49120),
          t = a(71515),
          n = a(48813);
        i.Z = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = e.page,
            a = e.idNumber,
            l = e.userName,
            c = e.onCancel,
            s = function () {
              var e, a;
              (i || (0, r.getCurrentPage)())[
                (
                  (null === (e = i.$instance) ||
                  void 0 === e ||
                  null === (a = e.router) ||
                  void 0 === a
                    ? void 0
                    : a.path) ||
                  i.route ||
                  ""
                ).indexOf("pages/12306/retrievePassWord") > 0
                  ? "redirectTo"
                  : "navigateTo"
              ]({ url: "/pages/12306/register/register" });
            };
          return (0, n.BX)(t.View, {
            className: "train-12306-retrevepwd-failed-unregister-pop",
            children: [
              (0, n.tZ)(t.View, {
                className: "p",
                style: "color: #FF7702;fontWeight:bold",
                children: "该证件号尚未注册",
              }),
              (0, n.BX)(t.View, {
                className: "account-list",
                children: [
                  (0, n.BX)(t.View, {
                    className: "li",
                    children: [
                      (0, n.tZ)(t.View, {
                        className: "label",
                        children: "证件号码",
                      }),
                      (0, n.tZ)(t.View, { className: "cont", children: a }),
                    ],
                  }),
                  (0, n.BX)(t.View, {
                    className: "li",
                    children: [
                      (0, n.tZ)(t.View, {
                        className: "label",
                        children: "姓名",
                      }),
                      (0, n.tZ)(t.View, { className: "cont", children: l }),
                    ],
                  }),
                ],
              }),
              (0, n.BX)(t.View, {
                className: "btn-box",
                children: [
                  (0, n.tZ)(t.View, {
                    className: "btn-cancel",
                    id: "AgAV",
                    onClick: c,
                    children: "返回修改",
                  }),
                  (0, n.BX)(t.View, {
                    className: "btn-submit",
                    id: "AgAW",
                    onClick: s,
                    children: [
                      "一键注册",
                      (0, n.tZ)(t.Text, {
                        className: "tag",
                        style:
                          "color: #fff;width: 1.9rem;height: .8rem;position: absolute;right: -1px;top:0px;padding-left: .4rem;font-size: .55rem;line-height: .8rem;background: url(https://images3.c-ctrip.com/train/wxapp/12306/tag.png) no-repeat;background-size: cover;box-sizing: border-box;",
                        children: "极速",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      },
    },
  ]);
})();
