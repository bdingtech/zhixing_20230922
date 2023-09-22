!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [35769],
      {
        28977: function (e, a, n) {
          var t,
            i = n(32180),
            o = n(57042),
            r = n(24460),
            l = n(21867),
            s = n(86066),
            u = n(52500),
            c = n(71515),
            d = (n(92954), n(81957)),
            h = n(48792),
            f = n.n(h),
            m = n(79792),
            g = n(58676),
            p = n(29386),
            v = n(48813),
            C = {
              pageId: "10650060687",
              data: {
                isTieyou: m.default.isTieyou,
                orderNumber: "",
                email: "",
              },
              onLoad: function (e) {
                console.log("page start");
                var a = e.orderNumber;
                this.setData({ orderNumber: a });
              },
              onEmailChange: function (e) {
                var a = e.detail.value;
                this.setData({ email: a.trim() });
              },
              handleClick: function () {
                var e = this,
                  a = this.data,
                  n = a.orderNumber,
                  t = a.email;
                if (t) {
                  if (
                    !/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(
                      t
                    )
                  )
                    return this.showCommonDialog("请输入正确的邮箱地址");
                  var i = { data: { orderNumber: n, emailAddress: t } };
                  (0, p.C)(i).then(function (a) {
                    var n = a.resultCode,
                      t = a.data || {};
                    1 === n && t.executeResult
                      ? e.showCommonDialog("提交成功")
                      : e.showCommonDialog("提交失败，请稍候再试");
                  });
                }
              },
            },
            b =
              (0, d.h)()(
                (t =
                  f()(C)(
                    (t = (function (e) {
                      (0, l.Z)(n, e);
                      var a = (0, s.Z)(n);
                      function n() {
                        return (0, o.Z)(this, n), a.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(n, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                a = this.data,
                                n = a.email,
                                t = a.isTieyou;
                              return (0, v.BX)(v.HY, {
                                children: [
                                  (0, v.tZ)(c.View, {
                                    className: "page",
                                    children: (0, v.BX)(c.View, {
                                      className: "box",
                                      children: [
                                        (0, v.BX)(c.View, {
                                          className: "cont",
                                          children: [
                                            (0, v.tZ)(c.View, {
                                              className: "label",
                                              children: "邮箱地址",
                                            }),
                                            (0, v.tZ)(c.Input, {
                                              className: "input",
                                              placeholder: "请输入邮箱地址",
                                              placeholderClass:
                                                "input-placeholder",
                                              value: n,
                                              onInput: this.onEmailChange,
                                            }),
                                          ],
                                        }),
                                        (0, v.tZ)(c.Button, {
                                          className:
                                            "btn " +
                                            (n ? "" : "disabled") +
                                            " " +
                                            (t ? "ty" : "zx"),
                                          id: "AZAg",
                                          onClick: this.handleClick,
                                          children: "发送",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, v.tZ)(g.Z, {
                                    ref: function (a) {
                                      e.onDialogAttach(a);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        n
                      );
                    })(u.default.Component))
                  ) || t)
              ) || t;
          Page(
            (0, i.createPageConfig)(
              b,
              "pages/flightSecondary/sendinvoice/sendinvoice",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "获取英文行程单",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                backgroundColor: "#fff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [21969, 19559, 11216, 68592], function () {
          return (function (a) {
            return e((e.s = a));
          })(28977);
        }),
          e.O();
      },
    ]);
})();
