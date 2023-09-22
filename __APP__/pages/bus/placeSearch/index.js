!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [61631],
      {
        71899: function (e, t, a) {
          var n = a(32180),
            i = a(79301),
            o = a(95308),
            c = a(57042),
            r = a(24460),
            s = a(21867),
            l = a(86066),
            u = a(92954),
            d = a.n(u),
            p = a(52500),
            h = a(71515),
            m = a(79792),
            v = a(28509),
            f = a(81957),
            y = a(298),
            g = a(45023),
            Y = a(48813),
            k = (function (e) {
              (0, s.Z)(a, e);
              var t = (0, l.Z)(a);
              function a(e) {
                var n;
                return (0, c.Z)(this, a), ((n = t.call(this, e)).state = {}), n;
              }
              return (
                (0, r.Z)(a, [
                  {
                    key: "onValChange",
                    value: function (e) {
                      var t = this.props.onChange;
                      t && t(e.detail.value);
                    },
                  },
                  {
                    key: "clear",
                    value: function () {
                      var e = this.props.onChange;
                      e && e("");
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        a = t.prefixChild,
                        n = t.title,
                        i = t.placeHolder,
                        o = void 0 === i ? "请输入" : i,
                        c = t.disabled,
                        r = t.enableClear,
                        s = void 0 !== r && r,
                        l = t.value,
                        u = void 0 === l ? "" : l,
                        d = t.style,
                        p = void 0 === d ? {} : d,
                        m = t.nameStyle,
                        v = void 0 === m ? {} : m,
                        f = t.inputStyle,
                        g = void 0 === f ? {} : f,
                        k = t.placeholderStyle,
                        X = void 0 === k ? {} : k,
                        Z = a || n,
                        b =
                          a ||
                          (0, Y.tZ)(h.View, {
                            className: "input-name",
                            style: (0, y.Z)({}, v),
                            children: n,
                          });
                      return (0, Y.tZ)(h.Block, {
                        children: (0, Y.BX)(h.View, {
                          className: "bus-input place-search-input",
                          style: p,
                          children: [
                            Z &&
                              (0, Y.tZ)(h.View, {
                                className: "prefix-dom prefix-class",
                                children: b,
                              }),
                            (0, Y.tZ)(h.Input, {
                              className: "input-dom place-search-input-dom",
                              placeholder: o,
                              "placeholder-style": (0, y.Z)(
                                { color: "#999999" },
                                X
                              ),
                              disabled: c,
                              style: (0, y.Z)({}, g),
                              value: u,
                              onInput: this.onValChange.bind(this),
                              ref: function (t) {
                                e.input = t;
                              },
                            }),
                            s &&
                              u &&
                              (0, Y.tZ)(h.Text, {
                                className:
                                  "ifont-closed iconfont place-search-input-clearbtn",
                                id: "AdAu",
                                onClick: this.clear.bind(this),
                              }),
                          ],
                        }),
                      });
                    },
                  },
                ]),
                a
              );
            })(p.default.Component);
          (0, g.Z)(k, "input", void 0);
          var X,
            Z = k,
            b = function (e, t) {
              for (
                var a, n, i = !1, o = t.length, c = 0, r = o - 1;
                c < o;
                r = c, c++
              )
                (a = t[c]),
                  (n = t[r]),
                  e.Y < n.Y
                    ? a.Y <= e.Y &&
                      (0, v.ui)((0, v.lu)(e.Y, a.Y), (0, v.lu)(n.X, a.X)) >
                        (0, v.ui)((0, v.lu)(e.X, a.X), (0, v.lu)(n.Y, a.Y)) &&
                      (i = !i)
                    : e.Y < a.Y &&
                      (0, v.ui)((0, v.lu)(e.Y, a.Y), (0, v.lu)(n.X, a.X)) <
                        (0, v.ui)((0, v.lu)(e.X, a.X), (0, v.lu)(n.Y, a.Y)) &&
                      (i = !i);
              return i;
            },
            C = function (e) {
              return e.map(function (e) {
                var t = e.coordinates,
                  a = {
                    coordinateX: { min: void 0, max: void 0 },
                    coordinateY: { min: void 0, max: void 0 },
                  };
                return (
                  (void 0 === t ? [] : t).forEach(function (e) {
                    var t = e.coordinateX,
                      n = void 0 === t ? 0 : t,
                      i = e.coordinateY,
                      o = void 0 === i ? 0 : i;
                    (a.coordinateX.min = a.coordinateX.min
                      ? Math.min(a.coordinateX.min, n)
                      : n),
                      (a.coordinateX.max = a.coordinateX.max
                        ? Math.max(a.coordinateX.max, n)
                        : n),
                      (a.coordinateY.min = a.coordinateY.min
                        ? Math.min(a.coordinateY.min, o)
                        : o),
                      (a.coordinateY.max = a.coordinateY.max
                        ? Math.max(a.coordinateY.max, o)
                        : o);
                  }),
                  [
                    a.coordinateX.min,
                    a.coordinateY.min,
                    a.coordinateX.max,
                    a.coordinateY.max,
                  ].join(",")
                );
              });
            },
            x =
              (0, f.h)()(
                (X = (function (e) {
                  (0, s.Z)(a, e);
                  var t = (0, l.Z)(a);
                  function a(e) {
                    var n;
                    return (
                      (0, c.Z)(this, a),
                      ((n = t.call(this, e)).pageId = "10650086973"),
                      (n.state = {
                        isTieyou: m.default.isTieyou,
                        bgTop: 0,
                        inputValue: "",
                        placeList: [],
                        searchRects: [],
                        city: "",
                      }),
                      n
                    );
                  }
                  return (
                    (0, r.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e =
                            (0, u.getCurrentInstance)().router.params.data ||
                            {};
                          this.initPageInfo(e),
                            d().setNavigationBarColor({
                              frontColor: "#000000",
                              backgroundColor: "#fff",
                            });
                        },
                      },
                      {
                        key: "initPageInfo",
                        value: function (e) {
                          var t = e.headTitle,
                            a = void 0 === t ? "选择地点" : t,
                            n = e.points,
                            i = void 0 === n ? [] : n,
                            o = e.city,
                            c = void 0 === o ? "请输入" : o;
                          this.setState({
                            headTitle: a,
                            searchRects: C(i),
                            points: i.map(function (e) {
                              var t = e.coordinates;
                              return (void 0 === t ? [] : t).map(function (e) {
                                return { X: e.coordinateX, Y: e.coordinateY };
                              });
                            }),
                            city: c,
                          });
                        },
                      },
                      {
                        key: "onInputChange",
                        value: function (e) {
                          var t = this;
                          this.setState(
                            { inputValue: e },
                            (0, o.Z)(
                              (0, i.Z)().mark(function a() {
                                var n, o;
                                return (0, i.Z)().wrap(function (a) {
                                  for (;;)
                                    switch ((a.prev = a.next)) {
                                      case 0:
                                        return (
                                          (a.next = 2),
                                          Promise.all(
                                            t.state.searchRects.map(function (
                                              a
                                            ) {
                                              return t.searchKeyWords({
                                                bounds: a,
                                                keyWords: e,
                                              });
                                            })
                                          )
                                        );
                                      case 2:
                                        (n = a.sent),
                                          (o = n.flat().filter(function (e) {
                                            var a = e.location,
                                              n = { X: a.lat, Y: a.lng };
                                            return t.state.points.find(
                                              function (e) {
                                                return b(n, e);
                                              }
                                            );
                                          })),
                                          t.setState({ placeList: o });
                                      case 5:
                                      case "end":
                                        return a.stop();
                                    }
                                }, a);
                              })
                            )
                          );
                        },
                      },
                      {
                        key: "onClickTabBackIcon",
                        value: function () {
                          this.navigateBack();
                        },
                      },
                      {
                        key: "searchKeyWords",
                        value: function (e) {
                          var t = e.bounds,
                            a = e.keyWords,
                            n =
                              "https://api.map.baidu.com/place/v2/search?query="
                                .concat(a, "&bounds=")
                                .concat(t, "&output=json&ak=")
                                .concat(
                                  "itfSDcLEo8XZgIWmdd3XZIpEG4A5QeMa",
                                  "&page_size=50"
                                );
                          return new Promise(function (e) {
                            d().request({
                              url: n,
                              method: "GET",
                              success: function (t) {
                                200 == t.statusCode &&
                                t.data &&
                                0 === t.data.status
                                  ? e(t.data.results)
                                  : e([]);
                              },
                              fail: function () {
                                e([]);
                              },
                            });
                          });
                        },
                      },
                      {
                        key: "onChoosePlace",
                        value: function (e) {
                          this.invokeCallback({ data: e }), this.navigateBack();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            a = t.isTieyou,
                            n = t.headTitle,
                            i = void 0 === n ? "选择地点" : n,
                            o = t.bgTop,
                            c = t.inputValue,
                            r = t.placeList,
                            s = t.city;
                          return (
                            d().setNavigationBarTitle({ title: i }),
                            (0, Y.BX)(h.View, {
                              className: "".concat(
                                a ? "ty" : "zx",
                                " place-search"
                              ),
                              children: [
                                (0, Y.tZ)(Z, {
                                  title: s,
                                  "comp-class": "place-search-input",
                                  "input-dom-class": "place-search-input-dom",
                                  "clear-dom-class":
                                    "place-search-input-clearbtn",
                                  style: { marginTop: "".concat(o + 10, "px") },
                                  onChange: this.onInputChange.bind(this),
                                  value: c,
                                  enableClear: !0,
                                }),
                                (0, Y.tZ)(h.View, {
                                  className: "place-list",
                                  children: r.map(function (t, a) {
                                    return (0,
                                    Y.BX)(h.View, { className: "place-item", id: "AdFb", onClick: e.onChoosePlace.bind(e, t), children: [(0, Y.tZ)(h.View, { className: "place-name", children: t.name }), (0, Y.tZ)(h.View, { className: "place-address", children: t.address })] }, a);
                                  }),
                                }),
                              ],
                            })
                          );
                        },
                      },
                    ]),
                    a
                  );
                })(p.default.Component))
              ) || X;
          Page(
            (0, n.createPageConfig)(
              x,
              "pages/bus/placeSearch/index",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(71899);
        }),
          e.O();
      },
    ]);
})();
