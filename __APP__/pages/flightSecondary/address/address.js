!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [76076],
      {
        71941: function (e, a, t) {
          var n,
            i = t(32180),
            s = t(57042),
            o = t(24460),
            r = t(21867),
            c = t(86066),
            l = t(52500),
            d = t(71515),
            u = (t(92954), t(48792)),
            h = t.n(u),
            p = t(81957),
            m = t(79792),
            g = t(49120),
            f = t(48813),
            v = {
              pageId: "10650060707",
              data: {
                isTieyou: m.default.isTieyou,
                contactName: "",
                region: [],
                regionDesc: "",
                address: "",
              },
              onLoad: function (e) {
                var a = e.data,
                  t = void 0 === a ? {} : a,
                  n = t.contactName,
                  i = t.region,
                  s = t.address;
                i &&
                  this.setData({
                    contactName: n,
                    region: i,
                    address: s,
                    regionDesc: i.join(" "),
                  });
              },
              bindRegionChange: function (e) {
                var a = e.detail.value;
                this.setData({ region: a, regionDesc: a.join(" ") });
              },
              nameInput: function (e) {
                this.setData({ contactName: e.detail.value });
              },
              addressInput: function (e) {
                this.setData({ address: e.detail.value });
              },
              handleSubmit: function () {
                var e = this.data,
                  a = e.contactName,
                  t = e.region,
                  n = e.regionDesc,
                  i = e.address;
                a
                  ? n
                    ? i
                      ? (this.invokeCallback({
                          contactName: a.trim(),
                          region: t,
                          address: i.trim(),
                        }),
                        this.navigateBack())
                      : (0, g.showModal)("详细地址不能为空！")
                    : (0, g.showModal)("\b请选择正确的地区！")
                  : (0, g.showModal)("\b姓名不能为空！");
              },
            },
            N =
              (0, p.h)()(
                (n =
                  h()(v)(
                    (n = (function (e) {
                      (0, r.Z)(t, e);
                      var a = (0, c.Z)(t);
                      function t() {
                        return (0, s.Z)(this, t), a.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(t, [
                          {
                            key: "render",
                            value: function () {
                              var e = this.data,
                                a = e.contactName,
                                t = e.region,
                                n = e.regionDesc,
                                i = e.address,
                                s = e.isTieyou;
                              return (0, f.BX)(f.HY, {
                                children: [
                                  (0, f.BX)(d.View, {
                                    className: "book-list",
                                    children: [
                                      (0, f.BX)(d.View, {
                                        className: "item",
                                        children: [
                                          (0, f.tZ)(d.Text, {
                                            className: "label",
                                            children: "收件人",
                                          }),
                                          (0, f.tZ)(d.Input, {
                                            type: "text",
                                            placeholder: "请填写收件人姓名",
                                            placeholderClass: "input-pld",
                                            className: "input-txt",
                                            onInput: this.nameInput,
                                            onBlur: this.nameInput,
                                            value: a,
                                          }),
                                        ],
                                      }),
                                      (0, f.BX)(d.View, {
                                        className: "item",
                                        children: [
                                          (0, f.tZ)(d.Text, {
                                            className: "label",
                                            children: "地区",
                                          }),
                                          (0, f.tZ)(d.Picker, {
                                            className: "picker",
                                            mode: "region",
                                            onChange: this.bindRegionChange,
                                            value: t,
                                            children: (0, f.tZ)(d.View, {
                                              className: "address",
                                              children: n || "请选择",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, f.BX)(d.View, {
                                        className: "item",
                                        children: [
                                          (0, f.tZ)(d.Text, {
                                            className: "label",
                                            children: "详细地址",
                                          }),
                                          (0, f.tZ)(d.Input, {
                                            type: "text",
                                            placeholder: "请填写详细地址",
                                            placeholderClass: "input-pld",
                                            className: "input-txt",
                                            onInput: this.addressInput,
                                            onBlur: this.addressInput,
                                            value: i,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, f.tZ)(d.View, {
                                    className: "btn " + (s ? "ty" : "zx"),
                                    id: "AZAA",
                                    onClick: this.handleSubmit,
                                    children: "确定",
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        t
                      );
                    })(l.default.Component))
                  ) || n)
              ) || n;
          Page(
            (0, i.createPageConfig)(
              N,
              "pages/flightSecondary/address/address",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "填写配送信息",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                backgroundColor: "#fff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (a) {
            return e((e.s = a));
          })(71941);
        }),
          e.O();
      },
    ]);
})();
