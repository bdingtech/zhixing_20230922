!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [84650],
    {
      80290: function (t, a, e) {
        var n,
          i = e(32180),
          o = e(57042),
          r = e(24460),
          c = e(21867),
          s = e(86066),
          l = e(22276),
          h = e(52500),
          d = e(71515),
          u = e(92954),
          f = e.n(u),
          g = e(48792),
          m = e.n(g),
          N = e(79910),
          y = e(79792),
          v = e(3205),
          w = e(18783),
          p = e(10741),
          C = e(49120),
          D = e(8271),
          x = e.n(D),
          T = e(4102),
          Z = e(81957),
          k = e(48813),
          b = y.default.isTieyou,
          B = "YYYY-MM-DD",
          S = {
            pageId: b ? "10650008769" : "10650008768",
            data: {
              isTieyou: b,
              isTrainNoQuery: !0,
              trainNo: "",
              trainNoCache: [],
              orderList: [],
              monthDay: "",
              dayInfo: "",
              fromStation: "",
              toStation: "",
              partnerCN: y.default.partnerCN,
              isLogin: !1,
              canGetMobile: !1,
            },
            onLoad: function () {
              this.getTodayInfo(),
                this.getTrainNoCache(),
                this.judgeCanGetMobile();
            },
            onShow: function () {
              w.ZP.isLogin &&
                (this.getOrderList(), this.setData({ isLogin: !0 }));
            },
            getOrderList: function () {
              var t = this;
              (0, C.showLoading)();
              var a = { partnerName: y.default.partner };
              return (0, p.cYY)(a)
                .then(function (a) {
                  if (1 === a.resultCode) {
                    var e = a.orderInfos,
                      n = void 0 === e ? [] : e;
                    if (n.length < 1) return;
                    var i = t.filterOrdersByIsValid(n),
                      o = t.filterOrdersByTime(i);
                    t.setData({ orderList: o });
                  }
                })
                .catch(function (t) {
                  return console.log(t);
                })
                .finally(function () {
                  return (0, C.hideLoading)();
                });
            },
            filterOrdersByIsValid: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return t.filter(function (t) {
                return 1 === t.isValid;
              });
            },
            filterOrdersByTime: function () {
              var t = this,
                a =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                e = [];
              return (
                a.forEach(function (a) {
                  var n = a.trainInfo,
                    i = n.fromDate,
                    o = void 0 === i ? "" : i,
                    r = n.fromTime,
                    c = void 0 === r ? "" : r;
                  t.diffDate(o, c) && e.push(a.trainInfo);
                }),
                e
              );
            },
            diffDate: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                e = t + " " + a;
              e = e.replace(/-/g, "/");
              var n = Math.abs(Date.now() - new Date(e).getTime()),
                i = Math.floor(n / 864e5);
              return i < 7;
            },
            clickTab: function (t) {
              var a = t.currentTarget.dataset.flag,
                e = void 0 === a ? "" : a;
              this.setData({ isTrainNoQuery: "trainNoQuery" === e });
            },
            setSearchTrainNo: function (t) {
              this.setData({ trainNo: t.detail.value.toUpperCase() || "" });
            },
            confirmQuery: function () {
              var t = this,
                a = this.data,
                e = a.trainNo,
                n = void 0 === e ? "" : e,
                i = a.monthDay,
                o = void 0 === i ? "" : i;
              if (n)
                return this.searchTrainDelay()
                  .then(function () {
                    t.setTrainNoCache(), t.gotoListPage(o, 1);
                  })
                  .catch(function () {
                    (0,
                    C.showModal)("您输入的车次号不存在或暂未获取成功，请重新输入车次号！");
                  });
              (0, C.showModal)("请输入要查询的车次号");
            },
            getTrainNoCache: function () {
              try {
                var t = f().getStorageSync("trainNoCache");
                this.setData({ trainNoCache: t || [] });
              } catch (t) {
                console.log(t);
              }
            },
            setTrainNoCache: function () {
              try {
                var t = this.data,
                  a = t.trainNo,
                  e = t.trainNoCache;
                if (!a || e.indexOf(a) > -1) return !1;
                var n = (0, l.Z)(e);
                n.push(a),
                  n.length > 3 && n.shift(),
                  f().setStorageSync("trainNoCache", n);
              } catch (t) {
                console.log(t);
              }
            },
            clearTrainNoCache: function () {
              try {
                f().removeStorageSync("trainNoCache"),
                  this.setData({ trainNoCache: [] });
              } catch (t) {
                console.log(t);
              }
            },
            clickOrder: function (t) {
              var a = this,
                e = t.currentTarget.dataset.index,
                n = void 0 === e ? 0 : e,
                i = this.data.orderList[n],
                o = i.trainNo,
                r = void 0 === o ? "" : o,
                c = i.fromStation,
                s = void 0 === c ? "" : c,
                l = i.toStation,
                h = void 0 === l ? "" : l,
                d = i.fromDate,
                u = void 0 === d ? "" : d,
                f = x()(u).format("M月D日");
              this.setData({
                trainNo: r.toUpperCase(),
                fromStation: s,
                toStation: h,
              }),
                this.searchTrainDelay()
                  .then(function () {
                    return a.gotoListPage(f, 2);
                  })
                  .catch(function () {
                    (0,
                    C.showModal)("该车次无法获取正晚点信息，请尝试其他车次！");
                  });
            },
            gotoListPage: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                e = this.data,
                n = e.trainNo,
                i = void 0 === n ? "" : n,
                o = e.fromStation,
                r = void 0 === o ? "" : o,
                c = e.toStation,
                s = void 0 === c ? "" : c;
              1 == a && ((r = ""), (s = "")),
                this.ubtTrace(102421, {
                  trainNo: i,
                  fromStation: r,
                  toStation: s,
                  monthDay: t,
                  isFrom: a,
                }),
                this.navigateTo({
                  url: "/pages/trainminor/zhengwandian/list?trainNo="
                    .concat(i, "&fromStation=")
                    .concat(r, "&toStation=")
                    .concat(s, "&monthDay=")
                    .concat(t, "&isFrom=")
                    .concat(a),
                });
            },
            getTodayInfo: function () {
              var t = Date.now(),
                a = x()(t).format("M月D日"),
                e = T.Z.getWeekDay(t);
              this.setData({ monthDay: a, dayInfo: e });
            },
            chooseDate: function () {
              var t = this,
                a = x()().format(B),
                e = x()().add(365, "day").format(B);
              v.Z.calendar(
                {
                  chooseDate: a,
                  beginDate: a,
                  endDate: e,
                  title: "选择出发日期",
                },
                function (a) {
                  var e = x()(a).format(B),
                    n = x()(a).format("M月D日"),
                    i = T.Z.getWeekDay(e);
                  t.setData({ monthDay: n, dayInfo: i });
                }
              );
            },
            clickHistory: function (t) {
              var a = t.currentTarget.dataset.index,
                e = void 0 === a ? 0 : a,
                n = this.data.trainNoCache[e];
              this.setData({ trainNo: n });
            },
            searchTrainDelay: function () {
              var t = { trainNo: this.data.trainNo || "" };
              return (0, p.Beu)(t, { cacheControl: { useCache: !0 } }).then(
                function (t) {
                  if (
                    1 === t.resultCode &&
                    t.trainDelayInfos &&
                    t.trainDelayInfos.length > 0
                  )
                    return 1;
                  throw t;
                }
              );
            },
            onShareAppMessage: function () {
              return {
                title: "点我一下，全国列车正晚点早知道！",
                bu: "train",
                imageUrl: "https://images3.c-ctrip.com/zt/wechat/share-zwd.png",
                path: "/pages/trainminor/zhengwandian/zhengwandian",
              };
            },
            login: function () {
              var t = this;
              w.ZP.doLogin()
                .then(function () {
                  t.getOrderList();
                })
                .catch(function (t) {
                  console.log(t);
                });
            },
            judgeCanGetMobile: function () {
              var t = this;
              return (0, w.M9)().then(
                function () {
                  return t.setData({ canGetMobile: !0 });
                },
                function () {
                  return t.setData({ canGetMobile: !1 });
                }
              );
            },
            gotoIndexPage: function () {
              N.Z.relaunchHome();
            },
          },
          V =
            (0, Z.h)()(
              (n =
                m()(S)(
                  (n = (function (t) {
                    (0, c.Z)(e, t);
                    var a = (0, s.Z)(e);
                    function e() {
                      return (0, o.Z)(this, e), a.apply(this, arguments);
                    }
                    return (
                      (0, r.Z)(e, [
                        {
                          key: "render",
                          value: function () {
                            var t = this,
                              a = this.data,
                              e = a.isTrainNoQuery,
                              n = a.trainNo,
                              i = a.monthDay,
                              o = a.dayInfo,
                              r = a.trainNoCache,
                              c = a.isLogin,
                              s = a.orderList,
                              l = a.partnerCN,
                              h = a.canGetMobile;
                            return (0, k.BX)(d.Block, {
                              children: [
                                (0, k.BX)(d.View, {
                                  className: "sel-tab ".concat(b ? "ty" : "zx"),
                                  children: [
                                    (0, k.tZ)(d.View, {
                                      className: "item " + (e ? "cur" : ""),
                                      "data-flag": "trainNoQuery",
                                      id: "AGAP",
                                      onClick: this.clickTab,
                                      "data-ubt-key":
                                        "wx_zhengwandian_trainNoQuery",
                                      children: "车次查询",
                                    }),
                                    (0, k.tZ)(d.View, {
                                      className: "item " + (e ? "" : "cur"),
                                      "data-flag": "trainOrderQuery",
                                      id: "AGAQ",
                                      onClick: this.clickTab,
                                      "data-ubt-key":
                                        "wx_zhengwandian_trainOrderQuery",
                                      children: "订单查询",
                                    }),
                                    (0, k.tZ)(d.Icon, {
                                      className: "scrollbar",
                                    }),
                                  ],
                                }),
                                e &&
                                  (0, k.tZ)(d.Block, {
                                    children: (0, k.BX)(d.View, {
                                      className: "checi-box ".concat(
                                        b ? "ty" : "zx"
                                      ),
                                      children: [
                                        (0, k.BX)(d.View, {
                                          className: "item",
                                          children: [
                                            (0, k.tZ)(d.Text, {
                                              className: "tit",
                                              children: "车次号",
                                            }),
                                            (0, k.tZ)(d.Input, {
                                              type: "text",
                                              className: "input-txt",
                                              placeholder: "请输入准确车次",
                                              placeholderClass: "input-plder",
                                              onInput: this.setSearchTrainNo,
                                              value: n,
                                            }),
                                          ],
                                        }),
                                        (0, k.BX)(d.View, {
                                          className: "item",
                                          children: [
                                            (0, k.tZ)(d.Text, {
                                              className: "tit",
                                              children: "出发日期/到达日期",
                                            }),
                                            (0, k.tZ)(d.View, {
                                              className: "date",
                                              id: "AGAR",
                                              onClick: this.chooseDate,
                                              children: i + " " + o,
                                            }),
                                          ],
                                        }),
                                        r.length > 0 &&
                                          (0, k.BX)(d.View, {
                                            className: "history",
                                            children: [
                                              r.map(function (a, e) {
                                                return (0,
                                                k.tZ)(d.Text, { className: "checi", "data-index": e, id: "AGAS", onClick: t.clickHistory, children: a }, "index");
                                              }),
                                              (0, k.tZ)(d.Text, {
                                                className: "clear",
                                                id: "AGAT",
                                                onClick: this.clearTrainNoCache,
                                                children: "清除记录",
                                              }),
                                            ],
                                          }),
                                        (0, k.tZ)(d.Button, {
                                          className: "btn-primary",
                                          hoverClass: "btn-primary_hover",
                                          id: "AGAU",
                                          onClick: this.confirmQuery,
                                          "data-ubt-key":
                                            "wx_zhengwandian_confirmQuery",
                                          children: "确认查询",
                                        }),
                                        (0, k.BX)(d.View, {
                                          className: "info",
                                          children: [
                                            (0, k.tZ)(d.View, {
                                              className: "txt",
                                              children:
                                                "仅提供过去1小时和未来3小时内列车正晚点信息；",
                                            }),
                                            (0, k.tZ)(d.View, {
                                              className: "txt",
                                              children:
                                                "查询结果仅供参考，以火车站为准。",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                !e &&
                                  (0, k.tZ)(d.Block, {
                                    children: c
                                      ? (0, k.tZ)(d.Block, {
                                          children:
                                            s.length > 0
                                              ? (0, k.BX)(d.View, {
                                                  className: "order-box",
                                                  children: [
                                                    (0, k.tZ)(d.View, {
                                                      className: "txt",
                                                      children:
                                                        "仅展示前后一周内的订单：",
                                                    }),
                                                    s.map(function (a, e) {
                                                      return (0,
                                                      k.BX)(d.View, { className: "item", "data-index": e, id: "AGAV", onClick: t.clickOrder, children: [(0, k.BX)(d.View, { className: "tit", children: [a.trainNo + " " + a.fromStation, (0, k.tZ)(d.Icon, { className: "icon-arr" }), a.toStation] }), (0, k.tZ)(d.View, { className: "time", children: a.fromDate + " " + a.fromTime + " 出发" })] }, "index");
                                                    }),
                                                  ],
                                                })
                                              : (0, k.tZ)(d.View, {
                                                  className: "order-box",
                                                  children: (0, k.BX)(d.View, {
                                                    className: "order-none",
                                                    children: [
                                                      (0, k.tZ)(d.Image, {
                                                        src:
                                                          "http://images3.c-ctrip.com/zt/wechat/" +
                                                          (b
                                                            ? "list-none-ty"
                                                            : "list-none-zx") +
                                                          ".png",
                                                        className: "img-none",
                                                      }),
                                                      (0, k.tZ)(d.View, {
                                                        className: "txt",
                                                        children:
                                                          "仅展示前后一周内订单，暂无可查询订单哦",
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                        })
                                      : (0, k.tZ)(d.Block, {
                                          children: (0, k.BX)(d.View, {
                                            className:
                                              "unlogin " + (b ? "ty" : "zx"),
                                            children: [
                                              (0, k.tZ)(d.View, {
                                                className: "txt",
                                                children:
                                                  "登录或注册" +
                                                  l +
                                                  "账号后，您可查看历史订单",
                                              }),
                                              h
                                                ? (0, k.tZ)(d.Button, {
                                                    className: "btn-login",
                                                    hoverClass:
                                                      "btn-login_hover",
                                                    id: "AGAW",
                                                    onClick: this.login,
                                                    "data-ubt-key":
                                                      "wx_zhengwandian_login_wxmobile",
                                                    children: "立即登录",
                                                  })
                                                : (0, k.tZ)(d.Button, {
                                                    className: "btn-login",
                                                    hoverClass:
                                                      "btn-login_hover",
                                                    id: "AGAX",
                                                    onClick: this.login,
                                                    "data-ubt-key":
                                                      "wx_zhengwandian_login",
                                                    children: "立即登录",
                                                  }),
                                            ],
                                          }),
                                        }),
                                  }),
                                (0, k.tZ)(d.Button, {
                                  className: "fixed-home " + (b ? "ty" : "zx"),
                                  id: "AGAY",
                                  onClick: this.gotoIndexPage,
                                  "data-ubt-key":
                                    "wx_zhengwandian_gotoIndexPage",
                                }),
                                (0, k.tZ)(d.Button, {
                                  className: "fixed-share " + (b ? "ty" : "zx"),
                                  openType: "share",
                                  "data-flag": "shareToFriends",
                                  id: "AGAZ",
                                  onClick: this.noop,
                                  "data-ubt-key":
                                    "wx_zhengwandian_shareToFriends",
                                }),
                              ],
                            });
                          },
                        },
                      ]),
                      e
                    );
                  })(h.default.Component))
                ) || n)
            ) || n;
        (V.enableShareAppMessage = !0),
          Page(
            (0, i.createPageConfig)(
              V,
              "pages/trainminor/zhengwandian/zhengwandian",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "正晚点查询",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0075F4",
                backgroundColorBottom: "#ffffff",
              } || {}
            )
          );
      },
    },
    function (t) {
      t.O(0, [19559, 11216, 68592], function () {
        return (function (a) {
          return t((t.s = a));
        })(80290);
      }),
        t.O();
    },
  ]);
})();
