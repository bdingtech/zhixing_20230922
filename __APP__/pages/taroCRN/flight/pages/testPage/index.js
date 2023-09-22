!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [96270],
      {
        87075: function (e, t, o) {
          var n,
            i = o(32180),
            r = o(57042),
            a = o(24460),
            l = o(81876),
            c = o(21867),
            s = o(86066),
            d = o(45023),
            f = o(52500),
            u = o(92954),
            p = o.n(u),
            g = o(71515),
            h = o(49528),
            m = o(87298),
            b = o(23577),
            x = o(48813),
            y = function (e) {
              var t = e.params,
                o = e.isOpen,
                n = e.onDeletePopupButtonPress;
              if (!t || !o) return null;
              var i = t || {},
                r = i.title,
                a = void 0 === r ? "" : r,
                l = i.content,
                c = void 0 === l ? "" : l,
                s = o ? { display: "flex" } : {};
              return (0, x.tZ)(g.View, {
                className: "maskBox",
                style: s,
                catchMove: !1,
                children: (0, x.BX)(g.View, {
                  className: "popContent",
                  children: [
                    (0, x.BX)(g.View, {
                      className: "popFont",
                      children: [
                        (0, x.tZ)(g.View, {
                          className: "popTitle",
                          children: (0, x.tZ)(g.Text, {
                            className: "popTitleMain",
                            children: a,
                          }),
                        }),
                        (0, x.tZ)(g.Text, {
                          className: "popText",
                          children: c,
                        }),
                      ],
                    }),
                    (0, x.BX)(g.View, {
                      className: "popBtn",
                      children: [
                        (0, x.tZ)(g.View, {
                          className: "popBtnDel",
                          id: "AMBE",
                          onClick: function () {
                            n(!0);
                          },
                          children: "确认删除",
                        }),
                        (0, x.tZ)(g.View, {
                          className: "popBtnCancel",
                          id: "AMBF",
                          onClick: function () {
                            n(!1);
                          },
                          children: "再等等",
                        }),
                      ],
                    }),
                  ],
                }),
              });
            },
            w = o(35707),
            Z = o(88184),
            C = o(17152),
            v =
              (0, m.h)()(
                (n = (function (e) {
                  (0, c.Z)(o, e);
                  var t = (0, s.Z)(o);
                  function o(e) {
                    var n;
                    return (
                      (0, r.Z)(this, o),
                      (n = t.call(this, e)),
                      (0, d.Z)((0, l.Z)(n), "pageId", "10650084290"),
                      (0, d.Z)((0, l.Z)(n), "renderLine", function (e, t) {
                        return e
                          ? (0, x.tZ)(g.View, { style: S["line-transparent"] })
                          : t
                          ? (0, x.tZ)(g.View, { style: S["line-primary"] })
                          : (0, x.tZ)(g.View, { style: S.line });
                      }),
                      (0, d.Z)((0, l.Z)(n), "renderRound", function (e, t) {
                        return e
                          ? (0, x.tZ)(g.View, {
                              style: (0, h.Jn)([S.round, S["selected-round"]]),
                            })
                          : t
                          ? (0, x.tZ)(g.View, {
                              style: (0, h.Jn)([S.round, S["between-round"]]),
                            })
                          : (0, x.tZ)(g.View, { className: "round" });
                      }),
                      (0, d.Z)((0, l.Z)(n), "onClick", function () {
                        console.log("testNavigateTo start==="),
                          p().navigateTo({
                            url: 'pages/trainTimeTable/index?a=c&callback={console.log("callback")}',
                          });
                      }),
                      (0, d.Z)((0, l.Z)(n), "testNavigateTo", function () {
                        console.log("testNavigateTo start==="),
                          console.log("User", w.Z.cid),
                          n.navigateTo({
                            url: "/pages/taroCRN/flight/pages/surpriseGrabInput/index?",
                            data: { fromStation: "重庆", toStation: "涪陵" },
                            callback: function (e) {
                              console.log(e, "dasad");
                            },
                          });
                      }),
                      (n.state = {
                        trainStopList: [],
                        date: "",
                        fromStation: "",
                        fromStationIndex: 0,
                        toStationIndex: 0,
                        toStation: "",
                        trainNumber: "",
                        showModal: !1,
                      }),
                      n
                    );
                  }
                  return (
                    (0, a.Z)(o, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, u.getCurrentInstance)();
                          if (e && e.router && e.router.params) {
                            var t = e.router.params,
                              o = t.date,
                              n = t.trainNumber,
                              i = t.fromStation,
                              r = t.toStation;
                            this.setState(
                              {
                                date: o,
                                trainNumber: n,
                                fromStation: i,
                                toStation: r,
                              },
                              function () {}
                            );
                          }
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return console.log("pageid"), this.pageId;
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t = this,
                            o = this.state,
                            n =
                              (o.trainStopList,
                              o.fromStation,
                              o.toStation,
                              o.fromStationIndex,
                              o.toStationIndex,
                              o.scrollerKey),
                            i = void 0 === n ? "" : n,
                            r = o.showModal;
                          console.log("scrollerKey===", i),
                            console.log(
                              "testpageprops==",
                              null === (e = this.props.page) || void 0 === e
                                ? void 0
                                : e.push
                            ),
                            console.log(
                              "user.cid==",
                              w.Z.uid,
                              w.Z.cid,
                              w.Z.auth
                            ),
                            console.log(
                              p().getSystemInfoSync().windowWidth,
                              p().getSystemInfoSync()
                            ),
                            console.log(b.Z),
                            console.log("crn publish flight testv1"),
                            b.Z.isTieyou && b.Z.isCRN;
                          return (0, x.BX)(g.View, {
                            style: (0, h.Jn)({
                              display: "flex",
                              flex: 1,
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              backgroundColor: "#fff",
                              padding: 2,
                            }),
                            children: [
                              (0, x.tZ)(Z.Z, { title: "测试" }),
                              (0, x.tZ)(g.View, {
                                style: S.decorators,
                                id: "AMBG",
                                onClick: this.testNavigateTo,
                                children: (0, x.tZ)(g.Text, {
                                  style: { color: "#fff" },
                                  children: "装饰器测试",
                                }),
                              }),
                              (0, x.tZ)(C.Z, {
                                loop: !0,
                                style: { height: 30, width: 30 },
                                source:
                                  "https://images3.c-ctrip.com/zt/app/train/train_coupon.json",
                                defaultImg:
                                  "https://images3.c-ctrip.com/zt/app/train/icon_train_complete_gift.png",
                              }),
                              (0, x.tZ)(y, {
                                params: {
                                  title: "title",
                                  content: "content",
                                  price: 10,
                                },
                                isOpen: r,
                                onDeletePopupButtonPress: function () {
                                  t.setState({ showModal: !1 });
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    o
                  );
                })(f.Component))
              ) || n,
            S = (0, h.lW)({
              "checi-tab": {
                lineHeight: 25,
                height: 30,
                display: "flex",
                flexDirection: "row",
                transform: [{ translateX: 10 }, { translateY: 10 }],
              },
              "tab-item": {
                color: "#fff",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                fontSize: 14,
              },
              "left-round": {
                width: "12%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              },
              station: { flex: 4, display: "flex", flexDirection: "row" },
              to: { flex: 3 },
              from: { flex: 3 },
              time: { flex: 3 },
              "eft-b": { width: "20%", backgroundColor: "red", height: "100%" },
              "main-box": {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                marginBottom: 16,
                position: "absolute",
                top: 30,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#fff",
              },
              item: { display: "flex", flexDirection: "row", height: 50 },
              "item-b": {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                color: "#333",
                fontSize: 15,
              },
              "selected-item-b": { color: "#0086f6" },
              "roud-c": {
                width: "37%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
              line: { height: 20, backgroundColor: "#ccc", width: 1 },
              "line-transparent": {
                height: 20,
                backgroundColor: "transparent",
                width: 1,
              },
              "line-primary": {
                height: 20,
                backgroundColor: "#0080FF",
                width: 1,
              },
              round: {
                width: 12,
                height: 12,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: "#e5e5e5",
                borderStyle: "solid",
              },
              "between-round": { borderColor: "#0080FF" },
              "selected-round": {
                backgroundColor: "#0080FF",
                width: 13,
                height: 13,
                borderWidth: 1,
                borderRadius: 7.5,
                borderStyle: "solid",
              },
              "station-txt": {
                display: "flex",
                justifyContent: "center",
                flex: 1,
                height: "100%",
                color: "#333",
                fontSize: 15,
              },
              "right-checi": {
                display: "flex",
                flexDirection: "column",
                flex: 1,
              },
              "checi-content": {
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#fff",
                flex: 1,
              },
              "border-line": { height: 2, backgroundColor: "#dde4ed" },
              decorators: { width: 100, height: 100, backgroundColor: "red" },
            }),
            k = v;
          Page(
            (0, i.createPageConfig)(
              k,
              "pages/taroCRN/flight/pages/testPage/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "test",
                navigationStyle: "custom",
                navigationBarBackgroundColor: "#198CFF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(87075);
          }
        ),
          e.O();
      },
    ]);
})();
