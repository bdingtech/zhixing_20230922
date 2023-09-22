!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [80092],
      {
        43301: function (t, e, a) {
          var n,
            i = a(32180),
            o = a(57042),
            c = a(24460),
            s = a(21867),
            r = a(86066),
            l = a(52500),
            u = a(92954),
            d = a.n(u),
            p = a(79792),
            m = a(71515),
            g = a(2809),
            h = a(79910),
            f = a(28509),
            b = a(81957),
            v = a(48813),
            y = (function (t) {
              (0, s.Z)(a, t);
              var e = (0, r.Z)(a);
              function a(t) {
                return (0, o.Z)(this, a), e.call(this, t);
              }
              return (
                (0, c.Z)(a, [
                  {
                    key: "render",
                    value: function () {
                      var t = this.props,
                        e = t.activeKey,
                        a = void 0 === e ? 2 : e,
                        n = t.onChange;
                      return (0, v.BX)(m.View, {
                        className: "bus-map-tab ".concat(
                          p.default.isTieyou ? "ty" : ""
                        ),
                        children: [
                          (0, v.tZ)(m.View, {
                            className: "bus-tab-active-bg",
                            style: {
                              transform: "translateX(calc(100% * ".concat(
                                a - 1,
                                "))"
                              ),
                            },
                          }),
                          [
                            { name: "出发站", key: 1 },
                            { name: "到达站", key: 2 },
                          ].map(function (t) {
                            var e = t.name,
                              i = t.key;
                            return (0,
                            v.tZ)(m.View, { className: "bus-tab-item ".concat(i === a ? "active" : ""), "data-tabKey": i, id: "AdCM", onClick: n, children: e }, i);
                          }),
                        ],
                      });
                    },
                  },
                ]),
                a
              );
            })(l.default.PureComponent),
            k =
              (0, b.h)()(
                (n = (function (t) {
                  (0, s.Z)(a, t);
                  var e = (0, r.Z)(a);
                  function a(t) {
                    var n, i;
                    (0, o.Z)(this, a),
                      ((i = e.call(this, t)).state = {
                        activeTab: 1,
                        fromStationInfo: null,
                        toStationInfo: null,
                        isTieyou: p.default.isTieyou,
                      });
                    var c =
                      1 ==
                      (null ===
                        (n = (0, u.getCurrentInstance)().router.params) ||
                      void 0 === n
                        ? void 0
                        : n.productLine);
                    return (i.pageId = c ? "10650063628" : "10650063632"), i;
                  }
                  return (
                    (0, c.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t;
                          p.default.isWechat ||
                            d().setNavigationBarTitle({ title: "地图页" });
                          var e =
                              (null ===
                                (t = (0, u.getCurrentInstance)().router
                                  .params) || void 0 === t
                                ? void 0
                                : t.data) || {},
                            a = e.fromStationInfo,
                            n = e.toStationInfo,
                            i = e.isTo;
                          this.setState({
                            fromStationInfo: a,
                            toStationInfo: n,
                            activeTab: i ? 2 : 1,
                          });
                        },
                      },
                      {
                        key: "onTabChange",
                        value: function (t) {
                          var e = t.currentTarget.dataset.tabKey;
                          this.setState({ activeTab: e });
                        },
                      },
                      {
                        key: "getCurrentTabLocation",
                        value: function () {
                          var t = this.state,
                            e = t.fromStationInfo,
                            a = t.toStationInfo,
                            n = (1 == t.activeTab ? e : a) || {},
                            i = n.baiduX,
                            o = n.baiduY,
                            c = n.name,
                            s = n.address,
                            r = n.aMapX,
                            l = n.aMapY;
                          if (r && l)
                            return {
                              latitude: r,
                              longitude: l,
                              name: c,
                              address: s,
                            };
                          var u = (0, f.$m)(o, i);
                          return {
                            latitude: u.latitude,
                            longitude: u.longitude,
                            name: c,
                            address: s,
                          };
                        },
                      },
                      {
                        key: "openMapApp",
                        value: function () {
                          var t = this.getCurrentTabLocation(),
                            e = t.latitude,
                            a = t.longitude,
                            n = t.name,
                            i = d().createMapContext("map", this),
                            o = p.default.isAlipay
                              ? "支付宝"
                              : p.default.isWechat
                              ? "微信"
                              : "应用";
                          if (d().canIUse("MapContext.openMapApp"))
                            try {
                              i.openMapApp &&
                                i.openMapApp({
                                  latitude: Number(e),
                                  longitude: Number(a),
                                  destination: n,
                                  fail: function (t) {
                                    console.log("fail", t);
                                  },
                                });
                            } catch (t) {
                              console.log("catch fail", t);
                            }
                          else
                            d().showModal({
                              title: "提示",
                              content: "当前"
                                .concat(
                                  o,
                                  "版本过低，无法使用该功能，请升级到最新"
                                )
                                .concat(o, "版本后重试。"),
                            });
                        },
                      },
                      {
                        key: "triggerBackAction",
                        value: function () {
                          d().getCurrentPages().length > 1
                            ? this.navigateBack()
                            : h.Z.relaunchHome("bus");
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this.state,
                            e = t.activeTab,
                            a = t.isTieyou,
                            n = this.getCurrentTabLocation(),
                            i = n.name,
                            o = n.address,
                            c = n.latitude,
                            s = n.longitude,
                            r = (0, v.tZ)(m.View, {
                              className: "empty-page",
                              children: (0, v.BX)(m.View, {
                                className: "empty-content",
                                children: [
                                  (0, v.tZ)(m.Image, {
                                    className: "sorry-image",
                                    mode: "aspectFit",
                                    src: a
                                      ? "https://pages.c-ctrip.com/bus-images/zhixing/icon/tykzt@3x.png"
                                      : "https://pages.c-ctrip.com/bus-images/zhixing/icon/kzt@3x.png",
                                  }),
                                  (0, v.tZ)(m.Text, {
                                    className: "sorry-title",
                                    children: "抱歉，暂无详细地址",
                                  }),
                                  (0, v.tZ)(m.Text, {
                                    className: "sorry-desc",
                                    children: "去别的地方看看吧",
                                  }),
                                ],
                              }),
                            });
                          return (0, v.BX)(m.View, {
                            className: "bus-map-page",
                            children: [
                              p.default.isWechat &&
                                (0, v.tZ)(m.View, {
                                  className: "back-btn-content",
                                  style: {
                                    top: "".concat(g.ZP.statusBarHeight, "px"),
                                    marginTop: "calc((".concat(
                                      g.ZP.titleBarHeight,
                                      "px - 30px) / 2)"
                                    ),
                                  },
                                  id: "AdCN",
                                  onClick: this.triggerBackAction.bind(this),
                                  children: (0, v.tZ)(m.Image, {
                                    src: "https://pages.c-ctrip.com/bus-images/zhixing/icon/zjt@3x.png",
                                    mode: "aspectFit",
                                    className: "back-icon",
                                  }),
                                }),
                              s && c
                                ? (0, v.tZ)(m.Map, {
                                    className: "map-content",
                                    id: "map",
                                    latitude: c,
                                    longitude: s,
                                    markers: [{ latitude: c, longitude: s }],
                                  })
                                : r,
                              (0, v.BX)(m.View, {
                                className: "bottom-content",
                                children: [
                                  (0, v.tZ)(y, {
                                    activeKey: e,
                                    onChange: this.onTabChange.bind(this),
                                  }),
                                  (0, v.BX)(m.View, {
                                    className: "bl",
                                    children: [
                                      (0, v.tZ)(m.View, {
                                        className: "title",
                                        children: i,
                                      }),
                                      (0, v.tZ)(m.View, {
                                        className: "desc",
                                        children:
                                          o ||
                                          "具体地址不明确，可联系出发车站工作人员进行咨询",
                                      }),
                                    ],
                                  }),
                                  p.default.isWechat &&
                                    s &&
                                    c &&
                                    (0, v.tZ)(m.View, {
                                      className: "br",
                                      id: "AdCO",
                                      onClick: this.openMapApp.bind(this),
                                      children: (0, v.tZ)(m.Image, {
                                        mode: "aspectFit",
                                        style: {
                                          width: "100%",
                                          height: "100%",
                                        },
                                        src: a
                                          ? "https://pages.c-ctrip.com/bus-images/zhixing/icon/tyqdh@3x.png"
                                          : "https://pages.c-ctrip.com/bus-images/zhixing/icon/qdh@3x.png",
                                      }),
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
                })(l.default.PureComponent))
              ) || n;
          Page(
            (0, i.createPageConfig)(
              k,
              "pages/bus/map/map",
              { root: { cn: [] } },
              {
                navigationStyle: "custom",
                enablePullDownRefresh: !1,
                backgroundColor: "#efefef",
                backgroundColorTop: "#2693ff",
                backgroundColorBottom: "#efefef",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(43301);
        }),
          t.O();
      },
    ]);
})();
