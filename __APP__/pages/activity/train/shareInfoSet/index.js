!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [83558],
      {
        64070: function (e, t, n) {
          var a,
            i = n(32180),
            o = n(79301),
            r = n(95308),
            s = n(57042),
            c = n(24460),
            u = n(21867),
            h = n(86066),
            l = n(52500),
            f = (n(92954), n(17377)),
            d = n(71515),
            v = n(49120),
            p = n(79792),
            g = n(79910),
            y = n(81957),
            m = n(48813),
            w = (0, f.ZP)({
              serviceCode: "17679",
              channel: p.default.train_channel,
              path: "getConfigDataByKeys",
            }),
            k =
              (0, y.h)()(
                (a = (function (e) {
                  (0, u.Z)(n, e);
                  var t = (0, h.Z)(n);
                  function n() {
                    var e;
                    return (
                      (0, s.Z)(this, n),
                      ((e = t.call(this)).state = {
                        activityList: [],
                        selectedName: "",
                      }),
                      (e.shareInfo = {
                        path: g.Z.getHomePath(),
                        title: "智行火车票特价机票酒店汽车门票",
                      }),
                      e
                    );
                  }
                  return (
                    (0, c.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.onLoad();
                        },
                      },
                      {
                        key: "onLoad",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, n;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (0, v.showLoading)(),
                                          (e.next = 3),
                                          w({
                                            keys: ["ztrip-fe-qy-wechat-share"],
                                          })
                                        );
                                      case 3:
                                        (t = e.sent),
                                          (0, v.hideLoading)(),
                                          1 === t.resultCode
                                            ? ((n = t.configData[0].data),
                                              console.log("data", n),
                                              this.setState({
                                                activityList:
                                                  n.activityShareInfo,
                                              }))
                                            : (0, v.showToast)(
                                                t.resultMessage ||
                                                  "网络不给力，请稍后再试"
                                              );
                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          return this.shareInfo;
                        },
                      },
                      {
                        key: "chooseActivity",
                        value: function (e) {
                          var t = e.title,
                            n = e.banner,
                            a = e.url,
                            i = e.name;
                          (this.shareInfo = {
                            path:
                              0 === a.indexOf("http")
                                ? "/functionalPages/twebview/index?url=".concat(
                                    encodeURIComponent(a)
                                  )
                                : a,
                            imageUrl: n,
                            title: t,
                          }),
                            this.setState({ selectedName: i });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.activityList,
                            a = t.selectedName;
                          return (0, m.BX)(d.View, {
                            className: "shareinfo-set",
                            children: [
                              (0, m.tZ)(d.View, {
                                className: "topNote",
                                children: (0, m.tZ)(d.Text, {
                                  children:
                                    "选中下方按钮，即可将当前页面分享内容设置为对应内容",
                                }),
                              }),
                              n.map(function (t, n) {
                                return (0, m.tZ)(
                                  d.View,
                                  {
                                    className:
                                      a === t.name ? "row active" : "row",
                                    id: "AeEm",
                                    onClick: function () {
                                      e.chooseActivity(t);
                                    },
                                    children: (0, m.tZ)(d.Button, {
                                      children: t.name,
                                    }),
                                  },
                                  n
                                );
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(l.default.Component))
              ) || a;
          (k.enableShareAppMessage = !0),
            Page(
              (0, i.createPageConfig)(
                k,
                "pages/activity/train/shareInfoSet/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "页面分享信息设置",
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
          return (function (t) {
            return e((e.s = t));
          })(64070);
        }),
          e.O();
      },
    ]);
})();
