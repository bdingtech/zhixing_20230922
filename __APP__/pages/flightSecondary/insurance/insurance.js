!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [12328],
      {
        71560: function (e, t, i) {
          var n,
            c = i(32180),
            a = i(57042),
            o = i(24460),
            r = i(21867),
            l = i(86066),
            s = i(52500),
            d = (i(92954), i(71515)),
            u = i(81957),
            p = i(48792),
            h = i.n(p),
            f = i(79792),
            v = i(34229),
            m = i(20592),
            g = i(79910),
            k = i(48813),
            Z = {
              pageId: "10650060691",
              data: {
                isTieyou: f.default.isTieyou,
                productName: "",
                isSelected: !0,
                productDescription: {},
                descriptionUrl: "",
                type: "",
              },
              onLoad: function (e) {
                var t = e.data,
                  i = t.productDescription,
                  n = t.isSelected,
                  c = t.descriptionUrl,
                  a = t.type,
                  o = e.productName;
                this.setData({
                  productName: o,
                  isSelected: n,
                  productDescription: i,
                  descriptionUrl: c,
                  type: a,
                }),
                  (m.IK.productSelected = n);
              },
              handleSelect: function () {
                (m.IK.productSelected = !0),
                  this.invokeCallback({ selected: !0 }),
                  this.navigateBack();
              },
              handleCancel: function () {
                (m.IK.productSelected = !1),
                  this.invokeCallback({ selected: !1 }),
                  this.navigateBack();
              },
              toProductDetail: function () {
                var e = this.data,
                  t = e.descriptionUrl;
                if ("MEMBERSHIP" == e.type)
                  return this.navigateTo({
                    url: "/pages/usercenter/member/member",
                  });
                g.Z.commonNavigator(t.replace(/http:\/\//, "https://"));
              },
            },
            C =
              (0, u.h)()(
                (n =
                  h()(Z)(
                    (n = (function (e) {
                      (0, r.Z)(i, e);
                      var t = (0, l.Z)(i);
                      function i() {
                        return (0, a.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this.data,
                                t = e.productName,
                                i = e.descriptionUrl,
                                n = e.productDescription,
                                c = e.isSelected;
                              return (0, k.BX)(k.HY, {
                                children: [
                                  (0, k.BX)(d.View, {
                                    className: "title",
                                    children: [
                                      t,
                                      i &&
                                        (0, k.tZ)(d.View, {
                                          className: "iconfont ifont-detail",
                                          id: "AZAK",
                                          onClick: this.toProductDetail,
                                        }),
                                    ],
                                  }),
                                  (0, k.tZ)(d.View, {
                                    className: "content",
                                    id: "AZAL",
                                    onClick: this.handleSelect,
                                    children: (0, k.tZ)(v.ZtRichText, {
                                      nodes:
                                        null == n ? void 0 : n.productContent,
                                    }),
                                  }),
                                  (0, k.BX)(d.View, {
                                    className: "cancel",
                                    id: "AZAM",
                                    onClick: this.handleCancel,
                                    children: [
                                      c
                                        ? null == n
                                          ? void 0
                                          : n.cancelButtonText
                                        : null == n
                                        ? void 0
                                        : n.cancelDisplayTitle,
                                      (0, k.tZ)(d.View, {
                                        className: "iconfont icon-more",
                                      }),
                                    ],
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(s.default.Component))
                  ) || n)
              ) || n;
          Page(
            (0, c.createPageConfig)(
              C,
              "pages/flightSecondary/insurance/insurance",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                backgroundColor: "#fff",
                navigationBarTitleText: "套餐说明",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(71560);
        }),
          e.O();
      },
    ]);
})();
