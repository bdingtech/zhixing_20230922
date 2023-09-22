!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [81062],
      {
        27829: function (e, t, n) {
          var i,
            a = n(32180),
            s = n(298),
            r = n(79301),
            o = n(22276),
            c = n(95308),
            l = n(90129),
            u = n(57042),
            d = n(24460),
            m = n(81876),
            f = n(21867),
            p = n(86066),
            h = n(45023),
            g = n(52500),
            y = n(92954),
            v = n.n(y),
            T = n(8271),
            b = n.n(T),
            k = n(71515),
            C = n(43796),
            N = n(79910),
            P = n(93761),
            Z = n(79792),
            w = n(79295),
            I = n(18783),
            x = n(13025),
            S = n(49120),
            B = n(9153),
            V = n(28509),
            D = n(46931),
            M = n(3106),
            A = n(77900),
            F = n(43005),
            L = n(21433),
            X = n(33359),
            O = n(81957),
            E = n(5830),
            R = n(48813),
            z = { 1: "身份证", 2: "护照", 7: "回乡证", 8: "台胞证" },
            H = "name",
            Y = "IDNum",
            U = "ticket_type",
            _ = { A: "A", C: "C" },
            j = {
              1: { tip: "姓名不能为空", type: H },
              2: { tip: "请填写正确的中文姓名", type: H },
              3: { tip: "证件号码不能为空", type: Y },
              4: { tip: "请输入正确的证件号码", type: Y },
              5: {
                tip: "出生满30天且小于16周岁才可以购买儿童票。请填写正确的身份证号",
                type: Y,
              },
              6: {
                tip: "小于6周岁才可以购买携童票。请填写正确的身份证号",
                type: Y,
              },
              12: { tip: "联系人手机号不能为空", type: "contractTel" },
              13: { tip: "请填写正确的手机号", type: "contractTel" },
              14: { tip: "乘客证件重复(同一证件只能购一张票)", type: Y },
            },
            J = function () {
              var e, t;
              return (
                (t = {}),
                (0, h.Z)(t, H, ""),
                (0, h.Z)(t, Y, ""),
                (0, h.Z)(t, U, _.A),
                (0, h.Z)(
                  t,
                  "focusCtrl",
                  ((e = {}), (0, h.Z)(e, H, !1), (0, h.Z)(e, Y, !1), e)
                ),
                t
              );
            },
            Q =
              (0, O.h)()(
                (i = (function (e) {
                  (0, f.Z)(n, e);
                  var t = (0, p.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, u.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, h.Z)((0, m.Z)(i), "shareImg", ""),
                      (0, h.Z)(
                        (0, m.Z)(i),
                        "pageId",
                        1 ==
                          ((0, y.getCurrentInstance)().router.params || {})
                            .onlyShare
                          ? "10650059585"
                          : "10650059587"
                      ),
                      (i.state = {
                        isShareOnly: !1,
                        isHaltSaled: !1,
                        editPassengers: [J()],
                        shiftInfo: null,
                        shareInfo: null,
                        isLoading: !0,
                        buyTicketRule: null,
                        commonPassengerInfo: [],
                        passengerInputTip: { index: -1, info: null },
                        ticketPriceInfo: [],
                        serviceChargeInfo: {},
                        showPriceDetailModal: !1,
                        isFeeModalShow: !1,
                        contractTel: v().getStorageSync("BUS_PHONE_NUMBER"),
                        isContractFocus: !1,
                        shareUrl: "",
                        utmSource: (0, C.Ug)(),
                      }),
                      i
                    );
                  }
                  return (
                    (0, d.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = (0, y.getCurrentInstance)().router.params || {};
                          Object.keys(t).forEach(function (e) {
                            t[e] = decodeURIComponent(t[e]);
                          }),
                            console.log(t),
                            this.setState(
                              {
                                shareInfo: t,
                                isShareOnly: !!t.onlyShare,
                                utmSource: (0, C.Ug)({
                                  station: [t.fromStation, t.fromCity],
                                }),
                              },
                              function () {
                                e.getShareImage(t),
                                  e.getSharePath(t),
                                  e.getBusDetail();
                              }
                            ),
                            t.onlyShare || this.getCommonPassengerInfo(),
                            (this.sourceId = (0, C.a3)());
                        },
                      },
                      {
                        key: "getSharePath",
                        value: function (e) {
                          var t = this,
                            n = this.state.shareInfo || e,
                            i = [
                              n.fromCity,
                              n.toCity,
                              n.fromStation,
                              n.toStation,
                              n.fromTime,
                              n.busNumber,
                              n.fromDate,
                              n.salePrice,
                              n.symbol,
                              n.productLine,
                              n.toTime,
                            ].map(encodeURIComponent),
                            a = (0, l.Z)(i, 11),
                            s = a[0],
                            r = a[1],
                            o = a[2],
                            c = a[3],
                            u = a[4],
                            d = a[5],
                            m = a[6],
                            f = a[7],
                            p = a[8],
                            h = a[9],
                            g = a[10],
                            y = {
                              param:
                                "/pages/bus/simpleBook/simpleBook?fromCity="
                                  .concat(s, "&toCity=")
                                  .concat(r, "&fromStation=")
                                  .concat(o, "&toStation=")
                                  .concat(c, "&fromTime=")
                                  .concat(u, "&toTime=")
                                  .concat(g, "&busNumber=")
                                  .concat(d, "&fromDate=")
                                  .concat(m, "&isNeedBusInfo=true&salePrice=")
                                  .concat(f, "&symbol=")
                                  .concat(p, "&productLine=")
                                  .concat(h),
                              scene: B.ZP.generateParamsScene,
                            };
                          (0, x.OJ)(y).then(function (e) {
                            1 === e.resultCode &&
                              t.setState({
                                shareUrl:
                                  "/pages/market/unlimitQRCode/index?scene=".concat(
                                    e.key
                                  ),
                              });
                          });
                        },
                      },
                      {
                        key: "getShareImage",
                        value: function (e) {
                          var t = this,
                            n = {
                              renderType: 2,
                              html: ' <div>\n    <style>\n    .share {\n      width: 800px;\n      height: 640px;\n      position: relative;\n      left: 0;\n      top: 0;\n      z-index: 10;\n      background: url("https://images3.c-ctrip.com/train/yzh/bus-mini/simplebook/card_book.png")\n        no-repeat 0 0;\n      background-size: cover;\n    }\n    .line-info {\n      position: absolute;\n      width: 697px;\n      height: 246px;\n      bottom: 120px;\n      left: 50%;\n      margin-left: -378px;\n      padding: 30px;\n    }\n    .share .line-info-top {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-bottom: 30px;\n    }\n    .share .line-info-top .line-tag {\n      vertical-align: middle;\n      font-size: 22px;\n      color: #eef6ff;\n      line-height: 30px;\n      background: #198cff;\n      border-radius: 6px;\n      display: inline-block;\n      padding: 0 4px;\n    }\n    .share .line-info-top .timeline {\n      vertical-align: middle;\n      margin: 0 12px;\n      font-size: 32px;\n      color: #333333;\n      letter-spacing: 0;\n    }\n    .share .line-info-top .cost-desc {\n      flex: 1;\n      text-align: right;\n      vertical-align: middle;\n      font-size: 26px;\n      color: #666666;\n      letter-spacing: 0;\n    }\n\n    .line-info-bottom {\n      display: flex;\n    }\n    .line-info-bottom .left {\n      font-family: WenQuanYi Micro Hei Mono;\n      font-size: 43px;\n      color: #333333;\n      letter-spacing: 0;\n      line-height: 60px;\n      position: relative;\n      margin-right: 60px;\n      font-weight: bold;\n    }\n    .line-info-bottom .left .time:first-child {\n      margin-bottom: 38px;\n    }\n    .line-info-bottom .left::after {\n      content: "";\n      width: 60px;\n      height: calc(100% - 40px);\n      position: absolute;\n      right: -60px;\n      top: 20px;\n      background: url("https://images3.c-ctrip.com/train/yzh/bus-mini/simplebook/jt@3x.png")\n        no-repeat;\n      background-size: contain;\n      background-position: center;\n    }\n    .line-info-bottom .middle {\n      flex: auto;\n      overflow: hidden;\n    }\n    .line-info-bottom .middle .station {\n      font-family: WenQuanYi Micro Hei Mono;\n      font-size: 50px;\n      color: #333333;\n      letter-spacing: 0;\n      line-height: 60px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      font-weight:bold;\n    }\n    .line-info-bottom .middle .station:first-child {\n      margin-bottom: 38px;\n    }\n    .line-info-bottom .right {\n      font-family: ZX-Regular;\n      font-size: 48px;\n      color: #ff5959;\n      letter-spacing: 0;\n      text-align: right;\n    }\n    .line-info-bottom .right::before {\n      content: "￥";\n      font-size: 32px;\n    }\n    </style>\n    <div class="screenshot-section share">\n    <div class="line-info">\n    <div class="line-info-top">\n      <span class="line-tag">出发</span>\n      <span class="timeline">'
                                .concat(
                                  this.formatTimeline(),
                                  ' </span>\n      <Text class="cost-desc">'
                                )
                                .concat(
                                  e.costTime || "",
                                  '</Text>\n    </div>\n    <div class="line-info-bottom">\n      <div class="left">\n        <div class="time">'
                                )
                                .concat(
                                  e.fromTime || "",
                                  '</div>\n        <div class="time">'
                                )
                                .concat(
                                  e.toTime || "",
                                  '</div>\n      </div>\n      <div class="middle">\n        <div class="station">'
                                )
                                .concat(
                                  e.fromStation || "",
                                  '</div>\n        <div class="station">'
                                )
                                .concat(
                                  e.toStation || "",
                                  "</div>\n      </div>\n    </div>\n  </div>\n    </div>\n    </div>"
                                ),
                              imgType: 1,
                            };
                          (0, x.TF)(n).then(function (e) {
                            t.shareImg = e.img;
                          });
                        },
                      },
                      {
                        key: "getBusDetail",
                        value: function () {
                          var e = this;
                          (0, S.showLoading)("加载中...");
                          var t = this.state.shareInfo,
                            n = t.fromCity,
                            i = t.toCity,
                            a = t.busNumber,
                            s = t.fromStation,
                            r = t.toStation,
                            o = t.fromDate,
                            c = t.symbol,
                            l = t.productLine,
                            u = {
                              fromCity: n,
                              toCity: i,
                              busNumber: a,
                              fromStation: s,
                              toStation: r,
                              fromDate: o,
                              fromTime: t.fromTime,
                              utmSource: this.state.utmSource,
                              symbol: c,
                              abTest: [
                                { name: "160818_crm_nwpkg", version: "B" },
                              ],
                              productLine: 1 * l,
                            };
                          (0, F.kb)(u)
                            .then(function (t) {
                              if (((0, S.hideLoading)(), 1 !== t.code))
                                return (
                                  v().showToast({
                                    title: "车次信息已失效",
                                    icon: "none",
                                    duration: 2500,
                                    mask: !0,
                                  }),
                                  void e.setState({
                                    isLoading: !1,
                                    isHaltSaled: !0,
                                  })
                                );
                              e.setState({
                                isLoading: !1,
                                buyTicketRule: t.data.buyTicketRule,
                                ticketPriceInfo: t.data.ticketPriceItems,
                                serviceChargeInfo: t.data.serviceChargeInfo,
                                shiftInfo: t.data,
                                isHaltSaled: b()(
                                  ""
                                    .concat(t.data.fromDate, " ")
                                    .concat(t.data.fromTime)
                                ).isBefore(b()()),
                              });
                            })
                            .catch(function () {
                              (0, S.hideLoading)(),
                                e.setState({ isLoading: !1 });
                            });
                        },
                      },
                      {
                        key: "getCommonPassengerInfo",
                        value: function () {
                          var e = this,
                            t = {
                              headerPartner: Z.default.isTieyou
                                ? "tieyou"
                                : "zhixing",
                              source: "flight",
                            };
                          return (0, F.JV)(t)
                            .then(function (t) {
                              if (1 === t.resultCode) {
                                var n = E.c.transferPassengerInfo(
                                  t.commonPassengers
                                );
                                e.setState({ commonPassengerInfo: n });
                              }
                            })
                            .catch(function (t) {
                              t && t.reLogin && e.getCommonPassengerInfo();
                            });
                        },
                      },
                      {
                        key: "onBackClick",
                        value: function () {
                          v().getCurrentPages().length > 1
                            ? v().navigateBack()
                            : v().reLaunch({
                                url: "/pages/home/index?tab=bus&sourceId=".concat(
                                  this.sourceId
                                ),
                              });
                        },
                      },
                      {
                        key: "onAddPassengerClick",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.getMaxPassengerLength()),
                                          !(
                                            this.state.editPassengers.length >=
                                            t
                                          ))
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          v().showToast({
                                            title: "每单最多添加".concat(
                                              t,
                                              "名乘客"
                                            ),
                                            icon: "none",
                                            duration: 1500,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 4:
                                        this.setState(
                                          {
                                            editPassengers: [].concat(
                                              (0, o.Z)(
                                                this.state.editPassengers
                                              ),
                                              [J()]
                                            ),
                                          },
                                          function () {
                                            v()
                                              .createSelectorQuery()
                                              .select(".bus-simple-book-page")
                                              .boundingClientRect(function (e) {
                                                e &&
                                                  v().pageScrollTo({
                                                    scrollTop: e.bottom,
                                                    duration: 300,
                                                  });
                                              })
                                              .exec();
                                          }
                                        );
                                      case 5:
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
                        key: "onReducePassengerClick",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t) {
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        this.setState({
                                          editPassengers: [].concat(
                                            (0, o.Z)(
                                              this.state.editPassengers.slice(
                                                0,
                                                t
                                              )
                                            ),
                                            (0, o.Z)(
                                              this.state.editPassengers.slice(
                                                t + 1
                                              )
                                            )
                                          ),
                                        });
                                      case 1:
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
                        key: "getLineInfo",
                        value: function () {
                          return this.state.shiftInfo || this.state.shareInfo;
                        },
                      },
                      {
                        key: "onVisiteMoreLineClick",
                        value: function () {
                          var e =
                              this.state.shareInfo ||
                              this.state.shiftInfo ||
                              {},
                            t = e.fromCity,
                            n = e.toCity,
                            i = e.productLine;
                          v().redirectTo({
                            url: "/pages/bus/list/list?date="
                              .concat(b()().format("YYYY-MM-DD"), "&tabType=")
                              .concat(i >= 3 ? "scenicArea" : "", "&fromCity=")
                              .concat(t, "&toCity=")
                              .concat(n, "&fromStation=&toStation=&sourceId=")
                              .concat(this.sourceId),
                          });
                        },
                      },
                      {
                        key: "formatTimeline",
                        value: function () {
                          var e =
                              this.state.shareInfo ||
                              this.state.shiftInfo ||
                              {},
                            t = e.fromDate,
                            n = e.fromTime,
                            i = b()(t).diff(b()().startOf("day"), "day"),
                            a = "";
                          if (0 === i) a = "今天";
                          else if (1 === i) a = "明天";
                          else if (2 === i) a = "后天";
                          else {
                            a = [
                              "星期日",
                              "星期一",
                              "星期二",
                              "星期三",
                              "星期四",
                              "星期五",
                              "星期六",
                            ][new Date(t).getDay()];
                          }
                          return ""
                            .concat(b()(t).format("M月D日 "))
                            .concat(a, " ")
                            .concat(n, " 出发");
                        },
                      },
                      {
                        key: "onNameInputBlur",
                        value: function () {
                          var e = this;
                          return setTimeout(function () {
                            e.setState({
                              passengerInputTip: (0, s.Z)(
                                (0, s.Z)({}, e.state.passengerInputTip),
                                {},
                                { index: -1 }
                              ),
                            });
                          }, 200);
                        },
                      },
                      {
                        key: "onInput",
                        value: function (e) {
                          if (
                            e &&
                            e.detail &&
                            e.target.dataset &&
                            e.target.dataset.InputType
                          ) {
                            var t = this.state.editPassengers,
                              n = e.target.dataset.InputType.split("-"),
                              i = (0, l.Z)(n, 2),
                              a = i[0],
                              r = i[1],
                              c = e.detail.value && e.detail.value.trim();
                            if ("contractTel" !== a)
                              if (
                                ((t[r] = (0, s.Z)(
                                  (0, s.Z)({}, t[r]),
                                  {},
                                  (0, h.Z)({}, a, c)
                                )),
                                a !== H)
                              )
                                this.setState({ editPassengers: (0, o.Z)(t) });
                              else {
                                var u = this.state.commonPassengerInfo.filter(
                                  function (e) {
                                    return (
                                      (e.CNName || "").indexOf(c) >= 0 &&
                                      e.CommonPassengerCard.some(function (e) {
                                        return 1 == e.CardType;
                                      }) &&
                                      Object.keys(_)
                                        .map(function (e) {
                                          return _[e];
                                        })
                                        .includes(e.PassengerType)
                                    );
                                  }
                                );
                                this.setState({
                                  passengerInputTip: (0, s.Z)(
                                    (0, s.Z)({}, this.state.passengerInputTip),
                                    {},
                                    {
                                      index: c ? r : -1,
                                      info:
                                        !!c &&
                                        u.length &&
                                        u.map(function (e) {
                                          var t;
                                          return (
                                            (t = {}),
                                            (0, h.Z)(
                                              t,
                                              H,
                                              "<span>".concat(
                                                e.CNName.replace(
                                                  new RegExp(c, "g"),
                                                  '<span style="color:#0080FF">'.concat(
                                                    c,
                                                    "</span>"
                                                  )
                                                ),
                                                "</span>"
                                              )
                                            ),
                                            (0, h.Z)(
                                              t,
                                              Y,
                                              e.CommonPassengerCard.find(
                                                function (e) {
                                                  return 1 == e.CardType;
                                                }
                                              ).CardNo
                                            ),
                                            (0, h.Z)(t, "passenger", e),
                                            t
                                          );
                                        }),
                                    }
                                  ),
                                  editPassengers: (0, o.Z)(t),
                                });
                              }
                            else this.setState({ contractTel: c });
                          }
                        },
                      },
                      {
                        key: "onRadioChange",
                        value: function (e, t) {
                          var n = this.state,
                            i = n.editPassengers;
                          n.ticketPriceInfo.some(function (e) {
                            return 2 === e.ticketType;
                          })
                            ? ((i[t] = (0, s.Z)(
                                (0, s.Z)({}, i[t]),
                                {},
                                (0, h.Z)({}, U, e)
                              )),
                              this.setState({ editPassengers: (0, o.Z)(i) }))
                            : v().showToast({
                                title: "该车次不支持儿童票",
                                icon: "none",
                              });
                        },
                      },
                      {
                        key: "onSelectPassengerTip",
                        value: function (e, t) {
                          var n,
                            i = this;
                          if (e) {
                            var a = e.index,
                              r = e.info,
                              c = this.state,
                              l = c.editPassengers,
                              u = c.ticketPriceInfo.some(function (e) {
                                return 2 === e.ticketType;
                              });
                            u ||
                              r[t].passenger.PassengerType !== _.C ||
                              v().showToast({
                                title: "该车次不支持儿童票",
                                icon: "none",
                              }),
                              (l[a] = (0, s.Z)(
                                (0, s.Z)({}, l[a]),
                                {},
                                ((n = {}),
                                (0, h.Z)(n, H, r[t].passenger.CNName),
                                (0, h.Z)(n, Y, r[t][Y]),
                                (0, h.Z)(
                                  n,
                                  U,
                                  u ? r[t].passenger.PassengerType : _.A
                                ),
                                n)
                              )),
                              this.setState(
                                { editPassengers: (0, o.Z)(l) },
                                function () {
                                  i.setState({
                                    passengerInputTip: (0, s.Z)(
                                      (0, s.Z)({}, e),
                                      {},
                                      { index: -1 }
                                    ),
                                  });
                                }
                              );
                          }
                        },
                      },
                      {
                        key: "getPriceDetail",
                        value: function () {
                          var e = this.state,
                            t = e.serviceChargeInfo,
                            n = e.editPassengers,
                            i = e.ticketPriceInfo,
                            a = e.shareInfo,
                            r = {},
                            o = {},
                            c = (0, s.Z)(
                              (0, s.Z)({}, t),
                              {},
                              { count: n.length }
                            ),
                            l = 0;
                          if (!i.length || !n.length)
                            return {
                              feeTotal: a && a.salePrice,
                              signalFee: a && a.salePrice,
                            };
                          var u = i.some(function (e) {
                              return 2 === e.ticketType;
                            }),
                            d = i.some(function (e) {
                              return 10 === e.ticketType;
                            }),
                            m = this.state.supportSwitchSubTicket,
                            f = this.state.isSpecialTicket,
                            p = n.filter(function (e) {
                              return e[U] === _.A;
                            }).length,
                            h = n.filter(function (e) {
                              return e[U] === _.C;
                            }).length;
                          d
                            ? ((r = {
                                name: u ? "成人票" : "票价",
                                price: i.filter(function (e) {
                                  return 10 === e.ticketType;
                                })[0].salePrice,
                                originPrice: i.filter(function (e) {
                                  return 10 === e.ticketType;
                                })[0].originPrice,
                                count: p,
                                unit: "张",
                                isShowOriginPrice: !1,
                              }),
                              (l = (0, V.IH)(l, (0, V.ui)(r.price, r.count))))
                            : ((r = {
                                name: u ? "成人票" : "票价",
                                price: i.filter(function (e) {
                                  return (
                                    2 !== e.ticketType && 3 !== e.ticketType
                                  );
                                })[0].salePrice,
                                originPrice: i.filter(function (e) {
                                  return (
                                    2 !== e.ticketType && 3 !== e.ticketType
                                  );
                                })[0].originPrice,
                                count: p,
                                unit: "张",
                                isShowOriginPrice: m && f,
                              }),
                              (l = (0, V.IH)(l, (0, V.ui)(r.price, r.count))));
                          return (
                            u &&
                              ((o = {
                                name: "儿童票",
                                price: i.filter(function (e) {
                                  return 2 === e.ticketType;
                                })[0].salePrice,
                                originPrice: i.filter(function (e) {
                                  return 2 === e.ticketType;
                                })[0].originPrice,
                                count: h,
                                unit: "张",
                                isActive: h > 0,
                              }),
                              (l = (0, V.IH)(l, (0, V.ui)(o.price, o.count)))),
                            {
                              feeTotal: (l = (0, V.IH)(
                                l,
                                (0, V.ui)(c.price, c.count)
                              )),
                              signalFee: (0, V.IH)(c.price, r.price),
                              adults: r,
                              childs: o,
                              serviceChargeList: c,
                            }
                          );
                        },
                      },
                      {
                        key: "onTogglePriceDetailModal",
                        value: function () {
                          this.setState({
                            showPriceDetailModal:
                              !this.state.showPriceDetailModal,
                          });
                        },
                      },
                      {
                        key: "onToggleFeeModal",
                        value: function () {
                          this.setState({
                            isFeeModalShow: !this.state.isFeeModalShow,
                          });
                        },
                      },
                      {
                        key: "isHaltSaledPromise",
                        value: function () {
                          var e = this;
                          return new Promise(function (t) {
                            var n = e.state,
                              i = n.shiftInfo,
                              a = n.shareInfo,
                              s = i || a,
                              r = s.fromDate,
                              o = s.fromTime;
                            b()("".concat(r, " ").concat(o)).isBefore(b()())
                              ? e.setState(
                                  {
                                    isHaltSaled: b()(
                                      "".concat(r, " ").concat(o)
                                    ).isBefore(b()()),
                                  },
                                  function () {
                                    t(!0);
                                  }
                                )
                              : t(!1);
                          });
                        },
                      },
                      {
                        key: "onOrderClick",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, i;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          this.isHaltSaledPromise()
                                        );
                                      case 2:
                                        if (!this.state.isHaltSaled) {
                                          e.next = 4;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 4:
                                        return (
                                          (e.prev = 4),
                                          (e.next = 7),
                                          this.checkPassengers()
                                        );
                                      case 7:
                                        if ((t = e.sent)) {
                                          e.next = 10;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 10:
                                        return (
                                          (0, S.showLoading)("正在下单..."),
                                          (n = this.createOrderParams(t)),
                                          (e.next = 14),
                                          (0, F.FQ)(n)
                                        );
                                      case 14:
                                        (i = e.sent) &&
                                        i.data &&
                                        i.data.orderNumber
                                          ? this.payOrder(i.data.orderNumber)
                                          : ((0, S.hideLoading)(),
                                            this.showMsg(
                                              i.message ||
                                                "提交订单失败，请重试"
                                            )),
                                          (e.next = 22);
                                        break;
                                      case 18:
                                        (e.prev = 18),
                                          (e.t0 = e.catch(4)),
                                          (0, S.hideLoading)(),
                                          this.showMsg(
                                            e.t0.message ||
                                              "提交订单失败，请重试"
                                          );
                                      case 22:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[4, 18]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "payOrder",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n,
                                i,
                                a,
                                s,
                                o = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = this.state.utmSource),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          (0, D.WS)({
                                            orderNumber: t,
                                            paymentChannel: M.T2,
                                            utmSource: n,
                                          })
                                        );
                                      case 4:
                                        null != (s = e.sent) &&
                                          null !== (i = s.data) &&
                                          void 0 !== i &&
                                          null !== (a = i.evokeCashier) &&
                                          void 0 !== a &&
                                          a.goodsId &&
                                          (0, P.VQ)({
                                            orderNumber: t,
                                            goodsId:
                                              s.data.evokeCashier.goodsId,
                                            business: "bus",
                                          })
                                            .then(function () {
                                              v().showToast({
                                                title: "支付成功",
                                              }),
                                                o.navigateToOrderDetail(t),
                                                (0, I.M9)({
                                                  isSaveSessionKey: 3,
                                                  force: !0,
                                                }).then(
                                                  function (e) {
                                                    if (e.unionid) {
                                                      var n = {
                                                        orderNumber: t,
                                                        unionId: e.unionid,
                                                      };
                                                      (0, F.Ml)(n);
                                                    }
                                                  },
                                                  function (e) {
                                                    console.log(
                                                      "unionid 获取失败",
                                                      e
                                                    );
                                                  }
                                                );
                                            })
                                            .catch(function () {
                                              (0, S.showToast)("支付失败");
                                            }),
                                          (e.next = 11);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0);
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 8]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "navigateToOrderDetail",
                        value: function (e) {
                          var t = this;
                          setTimeout(function () {
                            e &&
                              t.navigateTo({
                                url: "/pages/bus/neworderdetail/orderdetail?oid="
                                  .concat(e, "&utmSource=")
                                  .concat(t.state.utmSource, "&sourceId=")
                                  .concat(t.sourceId),
                              });
                          }, 1e3);
                        },
                      },
                      {
                        key: "handlePassengerRes",
                        value: function (e, t) {
                          var n = [];
                          return (
                            N._.each(e, function (e) {
                              var i = e,
                                a = e.CommonPassengerCard,
                                s = JSON.parse(
                                  JSON.stringify(
                                    t.supportPassengerIdentityTypes
                                  )
                                ),
                                r = [];
                              s.forEach(function (e, t) {
                                "二代身份证" === e && (s[t] = "身份证");
                              }),
                                a.forEach(function (e) {
                                  (e.text = z[e.CardType]),
                                    (e.no = e.CardNo),
                                    (e.type = e.CardType),
                                    s.some(function (t) {
                                      return t == e.text;
                                    }) &&
                                      e.CardNo &&
                                      z[e.CardType] &&
                                      r.push(e);
                                }),
                                (a = r),
                                (a = N._.sortBy(a, "CardType")),
                                (i.CommonPassengerCard = a),
                                (i.idcards = a);
                              var o = a[0] || {};
                              if (
                                ((i.idcard = Object.assign({}, o)),
                                (!i.PassengerType ||
                                  ("A" != i.PassengerType &&
                                    "C" != i.PassengerType &&
                                    "X" != i.PassengerType)) &&
                                  (i.PassengerType = "A"),
                                (i.isChild = "C" == i.PassengerType ? 1 : 0),
                                (i.isTakeChild =
                                  "X" == i.PassengerType ? 1 : 0),
                                (i.birth = i.BirthDay),
                                (i.id = i.PassengerID),
                                (i.ptypeText = i.isTakeChild
                                  ? "携童票"
                                  : i.isChild
                                  ? "儿童票"
                                  : "成人票"),
                                (i.cname = i.CNName),
                                (i.EName = i.ENFirstName + " " + i.ENLastName),
                                (i.name =
                                  2 == i.idcard.type
                                    ? i.EName || i.cname
                                    : i.cname || i.EName),
                                e.EXT)
                              ) {
                                var c = JSON.parse(e.EXT);
                                i.isSelf = 1 == c.IsSelf;
                              }
                              i.CommonPassengerCard &&
                                i.CommonPassengerCard.length &&
                                n.push(i);
                            }),
                            n
                          );
                        },
                      },
                      {
                        key: "handlePassengerInfo",
                        value: function (e) {
                          var t = [];
                          return (
                            e.forEach(function (e) {
                              var n = e.idcard;
                              t.push(
                                (0, s.Z)(
                                  {
                                    birthDay: e.birth,
                                    type: e.ptypeText,
                                    passengerType: e.PassengerType,
                                    name: e.name,
                                    id: e.PassengerID,
                                    cardName: n.text || "身份证",
                                    cardNum: n.no || "",
                                  },
                                  e
                                )
                              );
                            }),
                            t
                          );
                        },
                      },
                      {
                        key: "createOrderParams",
                        value: function (e) {
                          var t = this.state,
                            n = t.shiftInfo,
                            i = t.contractTel,
                            a = t.buyTicketRule,
                            s = this.handlePassengerRes(e, a),
                            r = n.productLine,
                            o = this.state.utmSource,
                            c = this.handlePassengerInfo(s).find(function (e) {
                              return e.PassengerType == _.A;
                            }),
                            l = s.map(function (e) {
                              var t = e.idcards.map(function (e) {
                                return {
                                  visaDate: "",
                                  taiwanEntry: "",
                                  idType: e.text,
                                  chinaEntry: "",
                                  cardCount: "",
                                  effectiveDate: "",
                                  idNum: e.CardNo,
                                };
                              });
                              return {
                                mobile: e.MobilePhone,
                                idCard: t,
                                address: e.DetailAddress,
                                fetcher: c && c.id == e.id,
                                gender: e.Gender,
                                passengerType:
                                  "X" == e.PassengerType
                                    ? "TC"
                                    : e.PassengerType,
                                birth: e.birthday || "",
                                nationality: e.nationality || "",
                                firstName: e.ENFirstName || "",
                                name: e.name,
                                lastName: e.ENLastName || "",
                                policyHolder: null,
                              };
                            }),
                            u = w.Z.getUnionData(),
                            d = {
                              productLine: r,
                              __productLine: 3 == r ? "point" : "bus",
                              fromCity: n.fromCity,
                              toCity: n.toCity,
                              fromStation: n.fromStation,
                              toStation: n.toStation,
                              fromDate: n.fromDate,
                              fromTime: n.fromTime,
                              toDate: n.toDate,
                              toTime: n.toTime,
                              lineCode: 1 === r ? n.symbol : n.busNumber,
                              website: n.businessLicense.website,
                              number: 1 === r ? n.busNumber : "",
                              fetcher: {
                                name: c.name,
                                lastName: c.ENLastName || "",
                                firstName: c.ENFirstName || "",
                                idNum: c.cardNum,
                                idType: c.cardName || "",
                                contactMobile: i || "",
                                contactAreaCode: c.CountryCode || "",
                                contactEmail: c.contactEmail || "",
                                otherPhone: c.MobilePhone || "",
                                otherAddress: c.DetailAddress || "",
                              },
                              customFromTime:
                                3 === n.fromTimeType
                                  ? this.state.custormFromTime ||
                                    this.options.fromTime
                                  : "",
                              passengers: l,
                              union: {
                                utmSource: o,
                                allianceid: "" + u.aid,
                                sid: "" + u.sid,
                              },
                              couponInfo: null,
                              appendProductList: [],
                              customStationInfo: {
                                customDepartureStation: "",
                                customDepartureAddress: "",
                                customDepartureCoordinateX: "",
                                customDepartureCoordinateY: "",
                                customDestinationStation: "",
                                customDestinationAddress: "",
                                customDestinationCoordinateX: "",
                                customDestinationCoordinateY: "",
                              },
                              isSpecialTicket:
                                1 === n.productLine &&
                                "subTicket" ===
                                  (
                                    (n.subTicketDetail || []).find(function (
                                      e
                                    ) {
                                      return e.checked;
                                    }) || {}
                                  ).type,
                              sourceId: this.sourceId,
                            };
                          return console.log(d), d;
                        },
                      },
                      {
                        key: "focusInput",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n, i, a;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = t.index),
                                          (i = t.type),
                                          (e.next = 3),
                                          this.clearFocus()
                                        );
                                      case 3:
                                        if (
                                          ((a = this.state.editPassengers),
                                          "contractTel" !== i)
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          this.setState({
                                            isContractFocus: !0,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 7:
                                        (a[1 * n].focusCtrl[i] = !0),
                                          this.setState({
                                            editPassengers: (0, o.Z)(a),
                                          });
                                      case 9:
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
                        key: "clearFocus",
                        value: function () {
                          var e = this;
                          return new Promise(function (t) {
                            var n = e.state.editPassengers;
                            n.forEach(function (e) {
                              (e.focusCtrl[H] = !1), (e.focusCtrl[Y] = !1);
                            }),
                              e.setState(
                                {
                                  isContractFocus: !1,
                                  editPassengers: (0, o.Z)(n),
                                },
                                t
                              );
                          });
                        },
                      },
                      {
                        key: "checkPassengers",
                        value: function () {
                          var e = this;
                          return new Promise(
                            (function () {
                              var t = (0, c.Z)(
                                (0, r.Z)().mark(function t(n) {
                                  var i, a, s, o, c, l, u;
                                  return (0, r.Z)().wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (i = e.state),
                                              (a = i.editPassengers),
                                              (s = i.commonPassengerInfo),
                                              (o = i.contractTel),
                                              (t.next = 3),
                                              Promise.all(
                                                a.map(function (t) {
                                                  return e.validateInput(t);
                                                })
                                              )
                                            );
                                          case 3:
                                            if (
                                              !(c = t.sent).find(function (e) {
                                                return 0 != e;
                                              })
                                            ) {
                                              t.next = 9;
                                              break;
                                            }
                                            return (
                                              v().showToast({
                                                title:
                                                  j[
                                                    c.find(function (e) {
                                                      return 0 != e;
                                                    })
                                                  ].tip || "乘客信息输入错误",
                                                icon: "none",
                                                duration: 3e3,
                                              }),
                                              (l = c.findIndex(function (e) {
                                                return 0 != e;
                                              })),
                                              e.focusInput({
                                                index: l,
                                                type: j[
                                                  c.find(function (e) {
                                                    return 0 != e;
                                                  })
                                                ].type,
                                              }),
                                              t.abrupt("return", n())
                                            );
                                          case 9:
                                            if (
                                              !a.some(function (e, t) {
                                                return a.some(function (n, i) {
                                                  return (
                                                    n[Y] === e[Y] && i !== t
                                                  );
                                                });
                                              })
                                            ) {
                                              t.next = 12;
                                              break;
                                            }
                                            return (
                                              v().showModal({
                                                title: "温馨提示",
                                                content:
                                                  j[14].tip ||
                                                  "乘客信息输入错误",
                                                confirmText: "知道了",
                                                showCancel: !1,
                                                confirmColor: "#fc6e51",
                                              }),
                                              t.abrupt("return", n())
                                            );
                                          case 12:
                                            if (
                                              a.some(function (e) {
                                                return e[U] === _.A;
                                              })
                                            ) {
                                              t.next = 15;
                                              break;
                                            }
                                            return (
                                              v().showToast({
                                                title: "请至少添加一名成人",
                                                icon: "none",
                                                duration: 2500,
                                              }),
                                              t.abrupt("return", n())
                                            );
                                          case 15:
                                            if (o) {
                                              t.next = 19;
                                              break;
                                            }
                                            return (
                                              v().showToast({
                                                title:
                                                  j[12].tip ||
                                                  "乘客信息输入错误",
                                                icon: "none",
                                              }),
                                              e.focusInput({
                                                index: -1,
                                                type: j[12].type,
                                              }),
                                              t.abrupt("return", n())
                                            );
                                          case 19:
                                            if (/^[0-9]{11}$/.test(o)) {
                                              t.next = 24;
                                              break;
                                            }
                                            return (
                                              v().showToast({
                                                title:
                                                  j[13].tip ||
                                                  "乘客信息输入错误",
                                                icon: "none",
                                              }),
                                              e.focusInput({
                                                index: -1,
                                                type: j[13].type,
                                              }),
                                              t.abrupt("return", n())
                                            );
                                          case 24:
                                            return (
                                              v().setStorage({
                                                key: "BUS_PHONE_NUMBER",
                                                data: o,
                                              }),
                                              (u = a.filter(function (e) {
                                                return !s.some(function (t) {
                                                  return (
                                                    t.CNName === e[H] &&
                                                    t.CommonPassengerCard.find(
                                                      function (t) {
                                                        return (
                                                          1 == t.CardType &&
                                                          t.CardNo === e[Y]
                                                        );
                                                      }
                                                    ) &&
                                                    t.PassengerType === e[U]
                                                  );
                                                });
                                              })),
                                              (t.prev = 26),
                                              (t.next = 29),
                                              Promise.all(
                                                u.map(function (t) {
                                                  return e.addOnePasToCommon(t);
                                                })
                                              )
                                            );
                                          case 29:
                                            t.next = 34;
                                            break;
                                          case 31:
                                            return (
                                              (t.prev = 31),
                                              (t.t0 = t.catch(26)),
                                              t.abrupt("return", n())
                                            );
                                          case 34:
                                            return (
                                              (t.next = 36),
                                              e.getCommonPassengerInfo()
                                            );
                                          case 36:
                                            v().nextTick(function () {
                                              console.log(
                                                "new commonPassengerInfo=",
                                                e.state.commonPassengerInfo
                                              ),
                                                n(
                                                  a.map(function (t) {
                                                    return e.state.commonPassengerInfo.find(
                                                      function (e) {
                                                        return (
                                                          e.CNName === t[H] &&
                                                          e.CommonPassengerCard.find(
                                                            function (e) {
                                                              return (
                                                                1 ==
                                                                  e.CardType &&
                                                                e.CardNo ===
                                                                  t[Y]
                                                              );
                                                            }
                                                          ) &&
                                                          e.PassengerType ===
                                                            t[U]
                                                        );
                                                      }
                                                    );
                                                  })
                                                );
                                            });
                                          case 37:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[26, 31]]
                                  );
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                        },
                      },
                      {
                        key: "addOnePasToCommon",
                        value: function (e) {
                          return new Promise(function (t, n) {
                            var i = e[Y].substring(6, 14),
                              a = b()(i).format("YYYY-MM-DD"),
                              s = {
                                commonPassengerInfo: {
                                  passengerID: "0",
                                  passengerType:
                                    e[U] === _.A ? "成人票" : "儿童票",
                                  passengerName: e[H],
                                  passengerENFirstName: "",
                                  passengerENLastName: "",
                                  passportType: "身份证",
                                  passportCode:
                                    (e[Y] && e[Y].toUpperCase()) || "",
                                  passengerBirth: a || "",
                                },
                                headerPartner: Z.default.isTieyou
                                  ? "tieyou"
                                  : "zhixing",
                              };
                            (0, F.vW)(s)
                              .then(function (e) {
                                console.log("SaveAndReturnPassengerPromise", e),
                                  e && "0" == e.Result.Result
                                    ? t(e)
                                    : (v().showToast({
                                        title: "保存乘客信息失败，请稍后再试~",
                                        icon: "none",
                                        duration: 1500,
                                      }),
                                      n(e));
                              })
                              .catch(function (e) {
                                v().showToast({
                                  title: "保存乘客信息失败，请稍后再试~",
                                  icon: "none",
                                  duration: 1500,
                                }),
                                  n(e);
                              });
                          });
                        },
                      },
                      {
                        key: "validateInput",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (n) {
                            var i = 0;
                            return (
                              0 != (i = t.checkCName(e[H])) ||
                                0 != (i = t.checkIdCard(e[Y])) ||
                                (i = t.checkBirth(e)),
                              n(i)
                            );
                          });
                        },
                      },
                      {
                        key: "isOnlyCName",
                        value: function () {
                          var e = this.state.cardInfo;
                          return 1 == parseInt(e.type);
                        },
                      },
                      {
                        key: "checkCName",
                        value: function (e) {
                          var t = e;
                          if (/[a-zA-Z0-9^.$()\xa6*+?]/.test(t)) return 2;
                          return (t = t.replace(/[^\u4e00-\u9fa5]/gi, ""))
                            ? /^[\u4e00-\u9fa5]+[\u4e00-\u9fa5]{1,14}$/.test(
                                t
                              ) && this.isValidName(t)
                              ? 0
                              : 2
                            : 1;
                        },
                      },
                      {
                        key: "isValidName",
                        value: function (e) {
                          var t = e;
                          if (!t) return !1;
                          return (
                            (t = (t = t.replace(/^\s+/g, "")).replace(
                              /\s+$/g,
                              ""
                            )),
                            !!/((^[\u4E00-\u9FA5]{1,14}([a-zA-Z]{0,26})$)|(^[a-zA-Z]+[\s\.]?([a-zA-Z]+[\s\.]?){0,4}[a-zA-Z]$))/.test(
                              t
                            )
                          );
                        },
                      },
                      {
                        key: "checkIdCard",
                        value: function (e) {
                          return e
                            ? 18 == e.length && A.Z.isValidSFZ(e)
                              ? 0
                              : 4
                            : 3;
                        },
                      },
                      {
                        key: "checkBirth",
                        value: function (e) {
                          var t = e[Y].substring(6, 14),
                            n = b()(t).format("YYYY-MM-D");
                          if (b()(n).isAfter(b()())) return 4;
                          if (e[U] === _.C) {
                            var i =
                              (new Date().getTime() - new Date(n).getTime()) /
                              864e5;
                            if (i > 5840 || i < 30) return 5;
                          }
                          return 0;
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          if (
                            (console.log(this.shareImg, this.state.shareUrl),
                            !this.state.isHaltSaled)
                          )
                            return {
                              bu: "bus",
                              path: this.state.shareUrl,
                              imageUrl:
                                this.shareImg ||
                                "https://images3.c-ctrip.com/train/yzh/bus-mini/simplebook/card_common.png",
                              title: "智行汽车票，比车站便宜",
                            };
                        },
                      },
                      {
                        key: "showMsg",
                        value: function (e, t) {
                          var n = this,
                            i = e,
                            a = "提示";
                          "string" == typeof e
                            ? (i = e)
                            : ((i = e.message), (a = e.title || "提示")),
                            v().showModal({
                              title: a,
                              content: i,
                              showCancel: !1,
                              success: function () {
                                t && t.call(n);
                              },
                            });
                        },
                      },
                      {
                        key: "getMaxPassengerLength",
                        value: function () {
                          var e = this.state.buyTicketRule;
                          return Math.min((e && e.maxSaleTicketNumber) || 3, 3);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.isShareOnly,
                            i = t.isHaltSaled,
                            a = t.editPassengers,
                            s = void 0 === a ? [] : a,
                            r = t.isLoading,
                            o = t.passengerInputTip,
                            c = t.showPriceDetailModal,
                            l = t.isFeeModalShow,
                            u = t.contractTel,
                            d = t.isContractFocus,
                            m = t.ticketPriceInfo,
                            f = this.getLineInfo(),
                            p = m.some(function (e) {
                              return 2 === e.ticketType;
                            }),
                            h = this.getMaxPassengerLength(),
                            g = this.getPriceDetail(),
                            y = g.feeTotal,
                            v = g.signalFee,
                            T = g.adults,
                            b = g.childs,
                            C = g.serviceChargeList;
                          return (0, R.BX)(k.View, {
                            className: "bus-simple-book-page ".concat(
                              Z.default.isTieyou ? "ty" : ""
                            ),
                            children: [
                              (0, R.BX)(k.View, {
                                className: "content",
                                children: [
                                  (0, R.tZ)(k.View, {
                                    className: "title-content",
                                    children: (0, R.tZ)(k.View, {
                                      className: "tit",
                                    }),
                                  }),
                                  !r &&
                                    (0, R.BX)(k.Block, {
                                      children: [
                                        !!f &&
                                          (0, R.BX)(k.View, {
                                            className: "line-info",
                                            children: [
                                              (0, R.BX)(k.View, {
                                                className: "line-info-top",
                                                children: [
                                                  (0, R.BX)(k.Text, {
                                                    className: "left",
                                                    children: [
                                                      (0, R.tZ)(k.Text, {
                                                        className: "line-tag",
                                                        children: "出发",
                                                      }),
                                                      (0, R.tZ)(k.Text, {
                                                        className: "timeline",
                                                        children:
                                                          this.formatTimeline(),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, R.tZ)(k.Text, {
                                                    className: "cost-desc",
                                                    children: f.costTime,
                                                  }),
                                                ],
                                              }),
                                              (0, R.BX)(k.View, {
                                                className: "line-info-bottom",
                                                children: [
                                                  (0, R.BX)(k.View, {
                                                    className: "left",
                                                    children: [
                                                      (0, R.tZ)(k.View, {
                                                        className: "time",
                                                        children: f.fromTime,
                                                      }),
                                                      (0, R.tZ)(k.View, {
                                                        className: "time",
                                                        children: f.toTime,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, R.BX)(k.View, {
                                                    className: "middle",
                                                    children: [
                                                      (0, R.BX)(k.View, {
                                                        className: "station",
                                                        children: [
                                                          (0, R.tZ)(k.View, {
                                                            className: "con",
                                                            children:
                                                              f.fromStation,
                                                          }),
                                                          (0, R.tZ)(k.View, {
                                                            className: "right",
                                                            children: v,
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.tZ)(k.View, {
                                                        className: "station to",
                                                        children: f.toStation,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        !n &&
                                          !i &&
                                          (0, R.BX)(k.Block, {
                                            children: [
                                              s.map(function (t, n) {
                                                return (0, R.BX)(
                                                  k.View,
                                                  {
                                                    className: "passenger-info",
                                                    children: [
                                                      (0, R.BX)(k.View, {
                                                        className:
                                                          "passenger-info-top",
                                                        children: [
                                                          (0, R.tZ)(k.View, {
                                                            className: "title",
                                                            children:
                                                              0 === n
                                                                ? (0, R.BX)(
                                                                    k.Block,
                                                                    {
                                                                      children:
                                                                        [
                                                                          "乘客信息",
                                                                          (0,
                                                                          R.BX)(
                                                                            k.Text,
                                                                            {
                                                                              className:
                                                                                "desc",
                                                                              children:
                                                                                [
                                                                                  "每单最多添加",
                                                                                  h,
                                                                                  "名乘客",
                                                                                ],
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  )
                                                                : (0, R.tZ)(
                                                                    k.Block,
                                                                    {
                                                                      children:
                                                                        "乘客".concat(
                                                                          n + 1
                                                                        ),
                                                                    }
                                                                  ),
                                                          }),
                                                          (0, R.tZ)(k.View, {
                                                            className:
                                                              "right-btn ".concat(
                                                                0 !== n
                                                                  ? "del-btn"
                                                                  : ""
                                                              ),
                                                            children:
                                                              0 === n
                                                                ? (0, R.BX)(
                                                                    k.Block,
                                                                    {
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          R.tZ)(
                                                                            k.Text,
                                                                            {
                                                                              className:
                                                                                "add pas-hand ".concat(
                                                                                  h <=
                                                                                    s.length
                                                                                    ? "disabled"
                                                                                    : ""
                                                                                ),
                                                                              id: "AdFd",
                                                                              onClick:
                                                                                e.onAddPassengerClick.bind(
                                                                                  e
                                                                                ),
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          R.tZ)(
                                                                            k.Text,
                                                                            {
                                                                              className:
                                                                                "text ".concat(
                                                                                  h <=
                                                                                    s.length
                                                                                    ? "disabled"
                                                                                    : ""
                                                                                ),
                                                                              id: "AdFe",
                                                                              onClick:
                                                                                e.onAddPassengerClick.bind(
                                                                                  e
                                                                                ),
                                                                              children:
                                                                                "新增乘客",
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  )
                                                                : (0, R.BX)(
                                                                    k.Block,
                                                                    {
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          R.tZ)(
                                                                            k.Text,
                                                                            {
                                                                              className:
                                                                                "del pas-hand",
                                                                              id: "AdFf",
                                                                              onClick:
                                                                                e.onReducePassengerClick.bind(
                                                                                  e,
                                                                                  n
                                                                                ),
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          R.tZ)(
                                                                            k.Text,
                                                                            {
                                                                              className:
                                                                                "text",
                                                                              id: "AdFg",
                                                                              onClick:
                                                                                e.onReducePassengerClick.bind(
                                                                                  e,
                                                                                  n
                                                                                ),
                                                                              children:
                                                                                "删除",
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(k.View, {
                                                        className:
                                                          "passenger-one",
                                                        children: [
                                                          (0, R.tZ)(k.View, {
                                                            className:
                                                              "input-item",
                                                            children: (0, R.BX)(
                                                              k.View,
                                                              {
                                                                className:
                                                                  "input-content",
                                                                children: [
                                                                  (0, R.tZ)(
                                                                    k.Text,
                                                                    {
                                                                      className:
                                                                        "name",
                                                                      children:
                                                                        "类型",
                                                                    }
                                                                  ),
                                                                  (0, R.tZ)(
                                                                    k.View,
                                                                    {
                                                                      className:
                                                                        "value",
                                                                      children:
                                                                        Object.keys(
                                                                          _
                                                                        ).map(
                                                                          function (
                                                                            i,
                                                                            a
                                                                          ) {
                                                                            return p ||
                                                                              _[
                                                                                i
                                                                              ] !==
                                                                                _.C
                                                                              ? (0,
                                                                                R.BX)(
                                                                                  k.View,
                                                                                  {
                                                                                    id: "AdFh",
                                                                                    onClick:
                                                                                      function () {
                                                                                        e.onRadioChange(
                                                                                          _[
                                                                                            i
                                                                                          ],
                                                                                          n
                                                                                        );
                                                                                      },
                                                                                    className:
                                                                                      "radio-comp ".concat(
                                                                                        t[
                                                                                          U
                                                                                        ] ===
                                                                                          _[
                                                                                            i
                                                                                          ]
                                                                                          ? "radio-checked"
                                                                                          : ""
                                                                                      ),
                                                                                    children:
                                                                                      [
                                                                                        (0,
                                                                                        R.tZ)(
                                                                                          k.View,
                                                                                          {
                                                                                            className:
                                                                                              "radio-cycle",
                                                                                          }
                                                                                        ),
                                                                                        (0,
                                                                                        R.BX)(
                                                                                          k.View,
                                                                                          {
                                                                                            children:
                                                                                              [
                                                                                                _[
                                                                                                  i
                                                                                                ] ===
                                                                                                _.A
                                                                                                  ? "成人票"
                                                                                                  : "儿童票",
                                                                                                " ",
                                                                                              ],
                                                                                          }
                                                                                        ),
                                                                                      ],
                                                                                  },
                                                                                  a
                                                                                )
                                                                              : null;
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                          }),
                                                          (0, R.BX)(k.View, {
                                                            className:
                                                              "input-item",
                                                            style: {
                                                              zIndex: 2,
                                                            },
                                                            children: [
                                                              (0, R.BX)(
                                                                k.View,
                                                                {
                                                                  className:
                                                                    "input-content",
                                                                  children: [
                                                                    (0, R.tZ)(
                                                                      k.Text,
                                                                      {
                                                                        className:
                                                                          "name",
                                                                        children:
                                                                          "姓名",
                                                                      }
                                                                    ),
                                                                    (0, R.tZ)(
                                                                      k.View,
                                                                      {
                                                                        className:
                                                                          "value",
                                                                        children:
                                                                          (0,
                                                                          R.tZ)(
                                                                            k.Input,
                                                                            {
                                                                              className:
                                                                                "table-input",
                                                                              "data-InputType":
                                                                                ""
                                                                                  .concat(
                                                                                    H,
                                                                                    "-"
                                                                                  )
                                                                                  .concat(
                                                                                    n
                                                                                  ),
                                                                              value:
                                                                                t[
                                                                                  H
                                                                                ],
                                                                              placeholder:
                                                                                "输入乘车人姓名",
                                                                              placeholderClass:
                                                                                "input-placehld",
                                                                              onInput:
                                                                                e.onInput.bind(
                                                                                  e
                                                                                ),
                                                                              cursorSpacing: 100,
                                                                              focus:
                                                                                t
                                                                                  .focusCtrl[
                                                                                  H
                                                                                ],
                                                                              onBlur:
                                                                                e.onNameInputBlur.bind(
                                                                                  e
                                                                                ),
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, R.tZ)(
                                                                k.View,
                                                                {
                                                                  className:
                                                                    "tip-comp ".concat(
                                                                      o &&
                                                                        o.index ==
                                                                          n &&
                                                                        o.info &&
                                                                        o.info
                                                                          .length
                                                                        ? "show"
                                                                        : ""
                                                                    ),
                                                                  children:
                                                                    !!o.info &&
                                                                    o.info.map(
                                                                      function (
                                                                        t,
                                                                        n
                                                                      ) {
                                                                        return (0,
                                                                        R.BX)(
                                                                          k.View,
                                                                          {
                                                                            className:
                                                                              "tip-comp-item",
                                                                            id: "AdFi",
                                                                            onClick:
                                                                              e.onSelectPassengerTip.bind(
                                                                                e,
                                                                                o,
                                                                                n
                                                                              ),
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                R.tZ)(
                                                                                  k.Text,
                                                                                  {
                                                                                    className:
                                                                                      "name",
                                                                                    dangerouslySetInnerHTML:
                                                                                      {
                                                                                        __html:
                                                                                          t[
                                                                                            H
                                                                                          ],
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                R.tZ)(
                                                                                  k.View,
                                                                                  {
                                                                                    className:
                                                                                      "value",
                                                                                    children:
                                                                                      (0,
                                                                                      R.tZ)(
                                                                                        k.View,
                                                                                        {
                                                                                          children:
                                                                                            t[
                                                                                              Y
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          },
                                                                          n
                                                                        );
                                                                      }
                                                                    ),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, R.tZ)(k.View, {
                                                            className:
                                                              "input-item",
                                                            children: (0, R.BX)(
                                                              k.View,
                                                              {
                                                                className:
                                                                  "input-content",
                                                                children: [
                                                                  (0, R.tZ)(
                                                                    k.Text,
                                                                    {
                                                                      className:
                                                                        "name",
                                                                      children:
                                                                        "身份证",
                                                                    }
                                                                  ),
                                                                  (0, R.tZ)(
                                                                    k.View,
                                                                    {
                                                                      className:
                                                                        "value",
                                                                      children:
                                                                        (0,
                                                                        R.tZ)(
                                                                          k.Input,
                                                                          {
                                                                            className:
                                                                              "table-input",
                                                                            "data-InputType":
                                                                              ""
                                                                                .concat(
                                                                                  Y,
                                                                                  "-"
                                                                                )
                                                                                .concat(
                                                                                  n
                                                                                ),
                                                                            cursorSpacing: 20,
                                                                            type: "idcard",
                                                                            value:
                                                                              t[
                                                                                Y
                                                                              ],
                                                                            placeholder:
                                                                              "输入乘车人证件号码",
                                                                            placeholderClass:
                                                                              "input-placehld",
                                                                            focus:
                                                                              t
                                                                                .focusCtrl[
                                                                                Y
                                                                              ],
                                                                            onInput:
                                                                              e.onInput.bind(
                                                                                e
                                                                              ),
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  },
                                                  n
                                                );
                                              }),
                                              (0, R.tZ)(k.View, {
                                                className:
                                                  "passenger-info tel-input",
                                                children: (0, R.tZ)(k.View, {
                                                  className: "passenger-one",
                                                  children: (0, R.tZ)(k.View, {
                                                    className: "input-item",
                                                    children: (0, R.BX)(
                                                      k.View,
                                                      {
                                                        className:
                                                          "input-content",
                                                        children: [
                                                          (0, R.tZ)(k.Text, {
                                                            className: "name",
                                                            children: "联系人",
                                                          }),
                                                          (0, R.tZ)(k.View, {
                                                            className: "value",
                                                            children: (0, R.tZ)(
                                                              k.Input,
                                                              {
                                                                className:
                                                                  "table-input",
                                                                "data-InputType":
                                                                  "contractTel",
                                                                type: "number",
                                                                value: u,
                                                                focus: d,
                                                                cursorSpacing: 20,
                                                                placeholder:
                                                                  "输入联系人手机号",
                                                                placeholderClass:
                                                                  "input-placehld",
                                                                onInput:
                                                                  this.onInput.bind(
                                                                    this
                                                                  ),
                                                              }
                                                            ),
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        (0, R.tZ)(k.View, {
                                          className: "fix-bottom",
                                          children: n
                                            ? (0, R.tZ)(k.Button, {
                                                className: "btn-share ".concat(
                                                  i ? "disabled" : ""
                                                ),
                                                openType: "share",
                                                disabled: i,
                                                children: "分享给乘客",
                                              })
                                            : (0, R.BX)(k.View, {
                                                className:
                                                  "pay-desk-content ".concat(
                                                    i ? "disabled" : ""
                                                  ),
                                                children: [
                                                  (0, R.tZ)(k.View, {
                                                    className: "price",
                                                    children: i ? "--" : y,
                                                  }),
                                                  (0, R.BX)(k.View, {
                                                    className: "pay-right",
                                                    children: [
                                                      (0, R.BX)(k.View, {
                                                        class: "detail",
                                                        id: "AdFj",
                                                        onClick:
                                                          this.onTogglePriceDetailModal.bind(
                                                            this
                                                          ),
                                                        children: [
                                                          "明细",
                                                          (0, R.tZ)(k.Text, {
                                                            className:
                                                              "icon-detail ifont-arr iconfont ".concat(
                                                                c
                                                                  ? "active"
                                                                  : ""
                                                              ),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.tZ)(k.View, {
                                                        className: "btn-pay",
                                                        id: "AdFk",
                                                        onClick:
                                                          this.onOrderClick.bind(
                                                            this
                                                          ),
                                                        children: "立即预订",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                        }),
                                        (0, R.tZ)(L.Z, {
                                          visible: c,
                                          info: {
                                            adults: T,
                                            childs: b,
                                            serviceChargeList: C,
                                          },
                                          onClose:
                                            this.onTogglePriceDetailModal.bind(
                                              this
                                            ),
                                          onCloseFeeModal:
                                            this.onToggleFeeModal.bind(this),
                                        }),
                                        (0, R.tZ)(X.Z, {
                                          visible: l,
                                          onClose:
                                            this.onToggleFeeModal.bind(this),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              i &&
                                (0, R.tZ)(k.View, {
                                  className: "empty-content",
                                  children: (0, R.BX)(k.View, {
                                    class: "content",
                                    children: [
                                      (0, R.tZ)(k.View, { className: "icon" }),
                                      (0, R.tZ)(k.View, {
                                        className: "tit",
                                        children: "来晚了! 本班次已停止售票",
                                      }),
                                      (0, R.tZ)(k.View, {
                                        className: "desc",
                                        children: "去看看其它班次吧",
                                      }),
                                      (0, R.tZ)(k.View, {
                                        className: "btn",
                                        id: "AdFl",
                                        onClick:
                                          this.onVisiteMoreLineClick.bind(this),
                                        children: "查看其他班次",
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(g.default.Component))
              ) || i;
          (Q.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                Q,
                "pages/bus/simpleBook/simpleBook",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "智行线上购票窗口",
                  navigationBarBackgroundColor: "#006DF6",
                  backgroundColor: "#f5f5f5",
                  backgroundColorTop: "#f5f5f5",
                  backgroundColorBottom: "#f5f5f5",
                  disableScroll: !1,
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [86230, 3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(27829);
        }),
          e.O();
      },
    ]);
})();
