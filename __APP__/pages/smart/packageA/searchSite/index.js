!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [95940],
      {
        98786: function (e, t, n) {
          var a = n(32180),
            i = n(298),
            r = n(79301),
            o = n(95308),
            c = n(57042),
            s = n(24460),
            l = n(81876),
            u = n(21867),
            h = n(86066),
            d = n(45023),
            f = n(52500),
            m = n(92954),
            p = n.n(m),
            v = n(71515),
            g = n(79792),
            w = n(81957),
            y = n(38911),
            Z = n(49120),
            S = n(20592),
            k = n(79910),
            N = n(27113),
            L = n(38561),
            b = n(48813);
          function T(e) {
            var t = e.stationType;
            if (!e.isShowStationTag) return "tag-hidden";
            switch (t) {
              case "T":
                return "train-tag";
              case "F":
                return "air-tag";
              case "B":
                return "bus-tag";
              case "S":
                return "ship-tag";
              case "SC":
                return "scene-tag";
              default:
                return "train-tag";
            }
          }
          function x(e) {
            if (!e) return [];
            var t = 1;
            return (
              e.forEach(function (e) {
                var n = e.stations,
                  a = "";
                (e.clickIndex = t++),
                  n.forEach(function (e) {
                    (e.clickIndex = t++),
                      e.stationType !== a
                        ? ((e.isShowStationTag = !0), (a = e.stationType))
                        : (e.isShowStationTag = !1);
                  });
              }),
              e
            );
          }
          var C = function (e) {
            var t = e.areas,
              n = void 0 === t ? [] : t,
              a = e.onSelectStation,
              i = e.keyword,
              r = e.moreRelatedLocations,
              o = void 0 === r ? [] : r,
              c = e.onSelectMoreRelatedItem;
            return (0, b.tZ)(v.View, {
              className: "smart-search-result",
              children: (0, b.BX)(v.View, {
                className: "list",
                children: [
                  x(n).map(function (e) {
                    var t = e.showName.split(i);
                    return (0, b.BX)(
                      v.View,
                      {
                        className: "city-item",
                        children: [
                          (0, b.BX)(v.View, {
                            className: "row cityName",
                            onClick: function () {
                              return a(e);
                            },
                            children: [
                              (0, b.tZ)(v.View, {
                                className: "city-tag",
                                children: "城市",
                              }),
                              (0, b.BX)(v.View, {
                                className: "city-txt",
                                children: [
                                  t[0] && (0, b.tZ)(v.Text, { children: t[0] }),
                                  t.length > 1 &&
                                    (0, b.tZ)(v.Text, {
                                      className: "color-primary",
                                      children: i,
                                    }),
                                  t[1] && (0, b.tZ)(v.Text, { children: t[1] }),
                                ],
                              }),
                            ],
                          }),
                          (0, b.tZ)(v.View, {
                            className: "station-list",
                            children:
                              e.stations &&
                              e.stations.map(function (e) {
                                var t = e.name.split(i);
                                return (0, b.BX)(
                                  v.View,
                                  {
                                    className: "row station-item",
                                    onClick: function () {
                                      return a(e);
                                    },
                                    children: [
                                      (0, b.tZ)(v.View, {
                                        className: "station-type ".concat(T(e)),
                                        children: (0, L.Eg)(e.stationType),
                                      }),
                                      (0, b.BX)(v.View, {
                                        className: "station-name",
                                        children: [
                                          t[0] &&
                                            (0, b.tZ)(v.Text, {
                                              children: t[0],
                                            }),
                                          t.length > 1 &&
                                            (0, b.tZ)(v.Text, {
                                              className: "color-primary",
                                              children: i,
                                            }),
                                          t[1] &&
                                            (0, b.tZ)(v.Text, {
                                              children: t[1],
                                            }),
                                        ],
                                      }),
                                      e.relationTrafficList &&
                                        e.relationTrafficList.map(function (e) {
                                          return (0,
                                          b.tZ)(v.View, { className: "subway", children: e }, e);
                                        }),
                                    ],
                                  },
                                  e.code
                                );
                              }),
                          }),
                        ],
                      },
                      e.areaId
                    );
                  }),
                  (0, b.tZ)(v.View, {
                    className: "moreLoc-list",
                    children:
                      o &&
                      o.map(function (e, t) {
                        var n = e.name.split(i);
                        return (0, b.BX)(
                          v.View,
                          {
                            className: "moreLoc-item",
                            onClick: function () {
                              c(e);
                            },
                            children: [
                              (0, b.tZ)(v.Text, {
                                className: "query-tag",
                                children: "智能查询",
                              }),
                              (0, b.BX)(v.View, {
                                className: "loc-info",
                                children: [
                                  (0, b.BX)(v.View, {
                                    className: "loc-name",
                                    children: [
                                      n[0] &&
                                        (0, b.tZ)(v.Text, { children: n[0] }),
                                      n.length > 1 &&
                                        (0, b.tZ)(v.Text, {
                                          className: "color-primary",
                                          children: i,
                                        }),
                                      n[1] &&
                                        (0, b.tZ)(v.Text, { children: n[1] }),
                                    ],
                                  }),
                                  (0, b.tZ)(v.View, {
                                    className: "loc-address",
                                    children: e.address,
                                  }),
                                ],
                              }),
                            ],
                          },
                          String(t)
                        );
                      }),
                  }),
                ],
              }),
            });
          };
          function V(e) {
            switch (e) {
              case "T":
                return "ifont-train2 icon-train";
              case "F":
                return "ifont-flight2 icon-plane";
              case "B":
                return "ifont-bus icon-train";
              case "S":
                return "ifont-ship icon-train";
              case "SC":
                return "ifont-travel icon-train";
              default:
                return "ifont-train2 icon-train";
            }
          }
          var B,
            I = function (e) {
              var t = e.areas,
                n = void 0 === t ? {} : t,
                a = e.stations,
                i = void 0 === a ? [] : a,
                r = e.onSelectStation,
                o = e.isLocateSuccess,
                c = void 0 === o || o,
                s = e.beginLocate;
              return c
                ? 0 === i.length
                  ? (0, b.tZ)(v.View, {})
                  : (0, b.BX)(v.View, {
                      className: "smart-nearby-location",
                      children: [
                        (0, b.tZ)(v.View, {
                          className: "title",
                          children: "搜索推荐",
                        }),
                        (0, b.BX)(v.View, {
                          className: "content",
                          children: [
                            n.areaId &&
                              (0, b.BX)(v.View, {
                                className: "loc",
                                onClick: function () {
                                  return r(n);
                                },
                                children: [
                                  (0, b.tZ)(v.View, {
                                    className:
                                      "ifont-location iconfont icon-loc icon",
                                  }),
                                  n.name,
                                ],
                              }),
                            i.map(function (e) {
                              return (0, b.BX)(
                                v.View,
                                {
                                  className: "loc",
                                  onClick: function () {
                                    return r(e);
                                  },
                                  children: [
                                    (0, b.tZ)(v.View, {
                                      className: "".concat(
                                        V(e.stationType),
                                        " iconfont icon"
                                      ),
                                    }),
                                    e.showName,
                                    e.relativeDistance
                                      ? "·".concat(e.relativeDistance, "km")
                                      : "",
                                  ],
                                },
                                e.areaId
                              );
                            }),
                          ],
                        }),
                      ],
                    })
                : (0, b.BX)(v.View, {
                    className: "smart-nearby-location",
                    children: [
                      (0, b.tZ)(v.View, {
                        className: "title",
                        children: "搜索推荐",
                      }),
                      (0, b.tZ)(v.View, {
                        className: "content",
                        children: (0, b.BX)(v.View, {
                          className: "loc",
                          onClick: s,
                          children: [
                            (0, b.tZ)(v.View, {
                              className:
                                "ifont-location iconfont icon-loc icon",
                            }),
                            "定位失败",
                          ],
                        }),
                      }),
                    ],
                  });
            },
            R =
              (0, w.h)()(
                (B = (function (e) {
                  (0, u.Z)(n, e);
                  var t = (0, h.Z)(n);
                  function n() {
                    var e;
                    (0, c.Z)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      (e = t.call.apply(t, [this].concat(i))),
                      (0, d.Z)((0, l.Z)(e), "state", {
                        inputKeyword: "",
                        areas: [],
                        nearbyLocation: {},
                        moreRelatedLocations: [],
                        isLocateSuccess: !0,
                      }),
                      (0, d.Z)(
                        (0, l.Z)(e),
                        "pageId",
                        g.default.isTieyou ? "10650060077" : "10650060075"
                      ),
                      (0, d.Z)((0, l.Z)(e), "fromUrl", ""),
                      (0, d.Z)((0, l.Z)(e), "openLocate", function () {
                        p().showModal({
                          title: "请求授权当前位置",
                          content: "需要获取您的地理位置，请确认授权",
                          success: function (t) {
                            t.confirm &&
                              p().openSetting({
                                success: function (t) {
                                  t.authSetting["scope.userLocation"]
                                    ? e.beginLocate()
                                    : p().showToast({
                                        title: "授权失败",
                                        icon: "none",
                                        duration: 1e3,
                                      });
                                },
                              });
                          },
                        });
                      }),
                      e
                    );
                  }
                  return (
                    (0, s.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.handleRouteParams(), this.beginLocate();
                        },
                      },
                      {
                        key: "handleRouteParams",
                        value: function () {
                          var e;
                          (0, m.getCurrentInstance)().router.params.url
                            ? ((this.fromUrl = decodeURIComponent(
                                (0, m.getCurrentInstance)().router.params.url
                              )),
                              (e = this.parseH5InitParams().title))
                            : (e =
                                (0, m.getCurrentInstance)().router.params
                                  .data &&
                                (0, m.getCurrentInstance)().router.params.data
                                  .title);
                          p().setNavigationBarTitle({ title: e });
                        },
                      },
                      {
                        key: "parseH5InitParams",
                        value: function () {
                          var e,
                            t = k.Z.parseQuery(this.fromUrl).initParams,
                            n = {};
                          try {
                            n = JSON.parse(t);
                          } catch (e) {
                            console.log(e);
                          }
                          return n;
                        },
                      },
                      {
                        key: "inputRef",
                        value: function (e) {
                          this.inputRefNode = e;
                        },
                      },
                      {
                        key: "beginLocate",
                        value: function () {
                          var e = this;
                          (0, N.y9)().then(
                            function (t) {
                              null != t && t.longitude
                                ? e._onHandleCurrentPosition(t)
                                : e.setState({ isLocateSuccess: !1 });
                            },
                            function () {
                              e.setState({ isLocateSuccess: !1 });
                            }
                          );
                        },
                      },
                      {
                        key: "getNearbyLoaction",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), k.Z.checkSecretToken()
                                        );
                                      case 2:
                                        return (
                                          (e.next = 4),
                                          (0, y.J4)({
                                            lng: t.longitude,
                                            lat: t.latitude,
                                          })
                                        );
                                      case 4:
                                        1 === (n = e.sent).resultCode
                                          ? this.setState({
                                              nearbyLocation: n,
                                              isLocateSuccess: !0,
                                            })
                                          : this.setState({
                                              nearbyLocation: {
                                                cityName: "定位失败",
                                              },
                                              isLocateSuccess: !0,
                                            });
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
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "_onHandleCurrentPosition",
                        value: function (e) {
                          null !== e && this.getNearbyLoaction(e);
                        },
                      },
                      {
                        key: "searchInput",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n, a, i, o, c, s;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((n = t.detail.value),
                                          this.setData({ inputKeyword: n }),
                                          "" !== n && "" !== n.trim())
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 4:
                                        return (
                                          (a = []),
                                          (e.next = 7),
                                          k.Z.checkSecretToken()
                                        );
                                      case 7:
                                        return (
                                          (e.next = 9),
                                          (0, y.zP)({ keyword: n })
                                        );
                                      case 9:
                                        if (
                                          (1 === (i = e.sent).resultCode &&
                                            (a = i.areas),
                                          (o = 0),
                                          a.forEach(function (e) {
                                            o++,
                                              e.stations &&
                                                e.stations.length &&
                                                (o += e.stations.length);
                                          }),
                                          (c = []),
                                          !(o < 5))
                                        ) {
                                          e.next = 19;
                                          break;
                                        }
                                        return (
                                          (e.next = 17), (0, y.hm)({ query: n })
                                        );
                                      case 17:
                                        1 === (s = e.sent).resultCode &&
                                          s.result &&
                                          (c = s.result);
                                      case 19:
                                        this.setState({
                                          areas: a,
                                          moreRelatedLocations: c,
                                        });
                                      case 20:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getMoreRelatedLocations",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, a;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state.inputKeyword),
                                          "" !== (n = void 0 === t ? "" : t) &&
                                            "" !== n.trim())
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 3:
                                        return (
                                          (e.prev = 3),
                                          (0, Z.showLoading)(),
                                          (e.next = 7),
                                          k.Z.checkSecretToken()
                                        );
                                      case 7:
                                        return (
                                          (e.next = 9), (0, y.hm)({ query: n })
                                        );
                                      case 9:
                                        1 === (a = e.sent).resultCode &&
                                        a.result &&
                                        a.result.length
                                          ? this.setState({
                                              moreRelatedLocations: a.result,
                                            })
                                          : (0, Z.showToast)(
                                              a.resultMessage ||
                                                "暂无更多相关地点"
                                            ),
                                          (e.next = 16);
                                        break;
                                      case 13:
                                        (e.prev = 13),
                                          (e.t0 = e.catch(3)),
                                          (0, Z.showModal)(
                                            "网络出错，请稍后重试~"
                                          );
                                      case 16:
                                        return (
                                          (e.prev = 16),
                                          (0, Z.hideLoading)(),
                                          e.finish(16)
                                        );
                                      case 19:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[3, 13, 16, 19]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "searchClear",
                        value: function () {
                          this.setState({ inputKeyword: "" }),
                            (this.inputRefNode.value = "");
                        },
                      },
                      {
                        key: "onSelectStation",
                        value: function (e) {
                          if (this.fromUrl) {
                            var t = this.parseH5InitParams(),
                              n = this.fromUrl.split("?")[0];
                            t =
                              "fromLocation" === t.queryType
                                ? (0, i.Z)(
                                    (0, i.Z)({}, t),
                                    {},
                                    { fromLocation: e }
                                  )
                                : (0, i.Z)(
                                    (0, i.Z)({}, t),
                                    {},
                                    { toLocation: e }
                                  );
                            var a = g.default.isTieyou ? "3C4264" : "0066E6",
                              r = ""
                                .concat(n, "?initParams=")
                                .concat(
                                  encodeURIComponent(JSON.stringify(t)),
                                  "&titleColor=ffffff&titleBgColor="
                                )
                                .concat(a);
                            (S.Bc.WEBVIEW_REFRESH_BACK_DATA = {
                              h5Url: r,
                              backToMini: !0,
                              needRefresh: !0,
                            }),
                              this.navigateBack();
                          } else this.invokeCallback(e), this.navigateBack();
                        },
                      },
                      {
                        key: "onSelectMoreRelatedItem",
                        value: function (e) {
                          var t = {
                            areaId: e.adcode,
                            city: e.city,
                            district: e.district,
                            isFromBaiduFlag: !0,
                            lat: e.location && e.location.lat,
                            lng: e.location && e.location.lng,
                            name: e.name,
                            province: e.province,
                          };
                          this.onSelectStation(t);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.areas,
                            n = e.inputKeyword,
                            a = e.nearbyLocation,
                            i = e.moreRelatedLocations,
                            r = e.isLocateSuccess;
                          console.log("inputKeyword", !n);
                          var o = n && n.length;
                          return (0, b.BX)(v.View, {
                            className: "smart-search-site",
                            children: [
                              (0, b.tZ)(v.View, {
                                className: "search-input-box ".concat(
                                  g.default.isWxGov ? "wxgov" : ""
                                ),
                                children: (0, b.BX)(v.View, {
                                  className: "search-input-bd",
                                  children: [
                                    (0, b.tZ)(v.Text, {
                                      className: "ifont-search iconfont",
                                    }),
                                    (0, b.tZ)(v.Input, {
                                      className: "search-module_input",
                                      placeholderClass:
                                        "search-module_input_focus",
                                      placeholder: "请选择城市或站点",
                                      type: "text",
                                      onInput: k.Z.debounce(
                                        this.searchInput.bind(this)
                                      ),
                                      focus: "true",
                                      ref: this.inputRef,
                                    }),
                                    n &&
                                      (0, b.tZ)(v.Text, {
                                        className:
                                          "ifont-del iconfont icon-del",
                                        onClick: this.searchClear.bind(this),
                                      }),
                                  ],
                                }),
                              }),
                              o
                                ? (0, b.tZ)(C, {
                                    onSelectStation:
                                      this.onSelectStation.bind(this),
                                    areas: t,
                                    keyword: n,
                                    moreRelatedLocations: i,
                                    getMoreRelatedLocations:
                                      this.getMoreRelatedLocations.bind(this),
                                    onSelectMoreRelatedItem:
                                      this.onSelectMoreRelatedItem.bind(this),
                                  })
                                : (0, b.tZ)(I, {
                                    areas: a.areas,
                                    stations: a.stations,
                                    onSelectStation:
                                      this.onSelectStation.bind(this),
                                    isLocateSuccess: r,
                                    beginLocate: this.openLocate,
                                  }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(f.default.Component))
              ) || B;
          Page(
            (0, a.createPageConfig)(
              R,
              "pages/smart/packageA/searchSite/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "出发站",
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#EFEFEF",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [5572, 71229, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(98786);
        }),
          e.O();
      },
    ]);
})();
