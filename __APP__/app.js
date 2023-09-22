require("./mini_build_version.js"),
  require("./common"),
  require("./vendors"),
  require("./taro"),
  require("./runtime"),
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [32143],
    {
      58493: function () {
        "function" != typeof Promise.prototype.finally &&
          (Promise.prototype.finally = function (e) {
            var t = this;
            return this.then(function (a) {
              return t.constructor.resolve(e()).then(function () {
                return a;
              });
            }).catch(function (a) {
              return t.constructor.resolve(e()).then(function () {
                throw a;
              });
            });
          });
      },
      86346: function (e, t, a) {
        "use strict";
        a(17488), a(96440);
        var i = a(32180),
          n = a(88744),
          r = a(92954),
          o = a.n(r),
          s = a(57042),
          d = a(24460),
          c = a(21867),
          p = a(86066),
          l = a(52500),
          g = a(48792),
          u = a.n(g),
          h = (a(58493), a(32180).document);
        function x(e, t) {
          return JSON.stringify(e) == JSON.stringify(t);
        }
        function f(e, t) {
          if (
            t.l &&
            (function (e) {
              return !!(
                e &&
                e.timeStamp &&
                ("click" == e.type || "longpress" == e.type) &&
                e.touches &&
                e.touches[0] &&
                e.target &&
                e.currentTarget
              );
            })(e)
          ) {
            var a,
              i,
              n = e.type;
            !(function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                a = o().getCurrentInstance().page;
              if (a) {
                var i,
                  n = {
                    pageId: a.pageId || "0",
                    type: e.type,
                    xpath: "//Page",
                  };
                if (
                  e &&
                  e.mpEvent &&
                  !x(e.mpEvent.currentTarget, e.mpEvent.target)
                ) {
                  n.xpath += "/CurrentTarget";
                  var r = e.currentTarget.id;
                  r && (n.xpath += "[@id=" + r + "]"),
                    t && "boundFn" !== t && (n.xpath += "[@fn=" + t + "]");
                  var s = e.currentTarget.dataset.ubtKey;
                  s && (n.xpath += "[@cid=" + s + "]");
                }
                n.xpath += "/Target";
                var d = e.target.id;
                d && (n.xpath += "[@id=" + d + "]");
                var c = e.target.dataset.ubtKey;
                c && (n.xpath += "[@cid=" + c + "]"),
                  (n.xpath += "[@x=" + e.touches[0].pageX + "]"),
                  (n.xpath += "[@y=" + e.touches[0].pageY + "]"),
                  console.log("useraction", n),
                  null === (i = a.__ubt_instance) ||
                    void 0 === i ||
                    i.send("useraction", {
                      action: "click",
                      ts: +new Date(),
                      xpath: n.xpath,
                    });
              }
            })(
              e,
              (null === (a = t.l["".concat(n, "false")]) || void 0 === a
                ? void 0
                : a.name) ||
                (null === (i = t.l["".concat(n, "true")]) || void 0 === i
                  ? void 0
                  : i.name) ||
                ""
            );
          }
        }
        i.hooks &&
          h &&
          h.getElementById &&
          (i.hooks.tap("modifyDispatchEvent", function (e, t) {
            f(e, t);
          }),
          Object.defineProperty(i.TaroEvent.prototype, "target", {
            get: function () {
              var e = this.cacheTarget;
              if (e) return e;
              var t,
                a,
                i = Object.create(
                  (null === (t = this.mpEvent) || void 0 === t
                    ? void 0
                    : t.target) || null
                ),
                n = h.getElementById(
                  (null === (a = i.dataset) || void 0 === a ? void 0 : a.sid) ||
                    i.id ||
                    null
                );
              for (var r in ((i.dataset = null !== n ? n.dataset : {}),
              null === (o = this.mpEvent) || void 0 === o
                ? void 0
                : o.detail)) {
                var o;
                i[r] = this.mpEvent.detail[r];
              }
              return (this.cacheTarget = i), i;
            },
          }),
          Object.defineProperty(i.TaroEvent.prototype, "currentTarget", {
            get: function () {
              var e = this.cacheCurrentTarget;
              if (e) return e;
              var t,
                a,
                i,
                n,
                r,
                o,
                s = h,
                d = Object.create(
                  (null === (t = this.mpEvent) || void 0 === t
                    ? void 0
                    : t.currentTarget) || null
                ),
                c = s.getElementById(
                  (null === (a = d.dataset) || void 0 === a ? void 0 : a.sid) ||
                    d.id ||
                    null
                ),
                p = s.getElementById(
                  (null === (i = this.mpEvent) ||
                  void 0 === i ||
                  null === (n = i.target) ||
                  void 0 === n
                    ? void 0
                    : n.dataset.sid) ||
                    (null === (r = this.mpEvent) ||
                    void 0 === r ||
                    null === (o = r.target) ||
                    void 0 === o
                      ? void 0
                      : o.id) ||
                    null
                );
              if (null === c || (c && c === p))
                return (this.cacheCurrentTarget = this.target), this.target;
              for (var l in ((d.dataset = c.dataset),
              null === (g = this.mpEvent) || void 0 === g
                ? void 0
                : g.detail)) {
                var g;
                d[l] = this.mpEvent.detail[l];
              }
              return (this.cacheCurrentTarget = d), d;
            },
          })),
          a(1996);
        var m = a(298),
          b = a(79792),
          v = a(79295),
          y = a(18783),
          k = a(13025),
          w = a(45553),
          P = a(79910),
          S = a(17917),
          T = a(20893),
          C = a(6117),
          O = a(20592),
          _ = a(74867);
        Object.hasOwnProperty("getOwnPropertyDescriptors") ||
          (console.warn(
            "不支持Object.getOwnPropertyDescriptors, 作polyfill处理"
          ),
          Object.defineProperty(Object, "getOwnPropertyDescriptors", {
            configurable: !0,
            writable: !0,
            value: function (e) {
              return Reflect.ownKeys(e).reduce(function (t, a) {
                return Object.defineProperty(t, a, {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: Object.getOwnPropertyDescriptor(e, a),
                });
              }, {});
            },
          })),
          "devtools" == (o().getSystemInfoSync() || {}).platform ||
            (b.default.isAlipay && my.isIDE) ||
            (function () {
              try {
                return __wxConfig && __wxConfig.debug;
              } catch (e) {}
              return !1;
            })() ||
            (console.error(
              "注意：当前console被全部重写，如有需要，请检查 utils/bootstrap.js consoleAble方法"
            ),
            ["log", "warn", "info", "debug", "error"].forEach(function (e) {
              console[e] = function () {};
            }));
        var A = a(32180).window;
        function D() {
          try {
            var e = o().getUpdateManager();
            e.onCheckForUpdate(function (e) {
              console.log("是否有新版本", e.hasUpdate);
            }),
              e.onUpdateReady(function () {
                o().showModal({
                  title: "更新提示",
                  content: "新版本已经准备好，是否重启应用？",
                  success: function (t) {
                    t.confirm && e.applyUpdate();
                  },
                });
              });
          } catch (e) {
            console.log(e);
          }
        }
        function Z() {
          return {
            partner: b.default.partner,
            version: b.default.version,
            miniType: b.default.miniType,
            os: b.default.os,
            userName: y.ZP.userName || "",
            openid: y.ZP.openid || "",
            cid: y.ZP.cid || "",
          };
        }
        var L,
          q = {
            onError: function (e) {
              try {
                var t,
                  a,
                  i =
                    "string" == typeof e
                      ? e
                      : JSON.stringify({
                          errorMsg: e.message,
                          errorStack: e.stack,
                        }),
                  n = i.match(
                    /(setStorageSync:fail|setStorage:fail).*(quota reached|exceed storage max size)/g
                  );
                n && n.length > 0 && console.error("本地缓存size超了");
                var s =
                    null === (t = (0, r.getCurrentInstance)()) || void 0 === t
                      ? void 0
                      : t.router,
                  d = o().getCurrentPages() || [],
                  c = (0, r.getCurrentInstance)().page || d[d.length - 1],
                  p =
                    (null == s ? void 0 : s.$taroPath) ||
                    (null == c ? void 0 : c.$taroPath) ||
                    (null == c ? void 0 : c.route) ||
                    (null == c ? void 0 : c.__route__) ||
                    "current rounter null",
                  l =
                    null == d || null === (a = d.map) || void 0 === a
                      ? void 0
                      : a.call(d, function (e) {
                          return e.$taroPath || e.route || e.__route__;
                        });
                (0, S.P)(i, p);
                var g = "path: "
                  .concat(p, ";\npathStack: ")
                  .concat(l.join(","), ";\nmessage: ")
                  .concat(e, ";");
                o().nextTick(function () {
                  var e, t, a;
                  !c ||
                    (null !== (e = c.data) &&
                      void 0 !== e &&
                      null !== (t = e.root) &&
                      void 0 !== t &&
                      null !== (a = t.cn) &&
                      void 0 !== a &&
                      a.length) ||
                    P.Z.errorLog(336, g);
                }),
                  P.Z.errorLog(332, g),
                  _.Z.ubtTrace("o_mini_error", { error: g });
              } catch (e) {
                console.log(e);
              }
            },
            onLaunch: function (e) {
              var t = this;
              console.log("App onLaunch:", e),
                _.Z.commonDebugTrace(
                  "app onLaunch start:".concat(JSON.stringify(e))
                ),
                w.ZP && (0, w.ZP)(e),
                b.default.isTT &&
                  (_.Z.commonDebugTrace("app onLaunch setUnionData start"),
                  v.Z.setUnionData(e && e.query),
                  _.Z.commonDebugTrace("app onLaunch setUnionData done")),
                e && e.scene && (0, b.setAppScene)(e.scene),
                (0, y.M9)().then(
                  function (e) {
                    var t = e.openid;
                    return console.log("openid", t);
                  },
                  function () {
                    return console.error("openid获取失败");
                  }
                ),
                b.default.isWechat &&
                  (wx.onPageNotFound(function (e) {
                    try {
                      if (
                        (console.warn("页面不存在", e.path),
                        _.Z.ubtTrace(138304, (0, m.Z)((0, m.Z)({}, e), Z())),
                        t.handlePageNotFound(e))
                      )
                        return;
                      _.Z.ubtTrace(204334, (0, m.Z)((0, m.Z)({}, e), Z())),
                        P.Z.insertActionLog(
                          "page_not_found",
                          e.path,
                          JSON.stringify(e)
                        ),
                        o().reLaunch({ url: P.Z.getHomePath() });
                    } catch (e) {
                      console.log(e);
                    }
                  }),
                  wx.onUnhandledRejection &&
                    wx.onUnhandledRejection(function (e) {
                      try {
                        var t,
                          a =
                            null == e || null === (t = e.reason) || void 0 === t
                              ? void 0
                              : t.stack;
                        if (a) {
                          var i = (0, r.getCurrentInstance)().router,
                            n = i.path + P.Z.stringifyQuery(i.params, "?");
                          (0, S.P)(a, n), P.Z.errorLog(333, a);
                        }
                      } catch (e) {
                        console.log(e);
                      }
                    }),
                  wx.onMemoryWarning(function (e) {
                    try {
                      var t = o()
                        .getCurrentPages()
                        .map(function (e) {
                          return e.route;
                        })
                        .join(",");
                      _.Z.ubtDevTrace("o_mini_memory_warning", {
                        level: (null == e ? void 0 : e.level) || -1,
                        pageStr: t,
                      });
                    } catch (e) {
                      console.warn("onMemoryWarning", e);
                    }
                  }),
                  wx.checkIsAddedToMyMiniProgram &&
                    wx.checkIsAddedToMyMiniProgram({
                      success: function (e) {
                        _.Z.ubtExposure("TZWHomePage_exposure", {
                          is_added_myApplet: null != e && e.added ? "1" : "0",
                        });
                      },
                    }));
            },
            onShow: function (e) {
              if (
                (console.log("App onShow:", e),
                _.Z.commonDebugTrace(
                  "app onShow start: ".concat(JSON.stringify(e))
                ),
                (0, C.f)("appOnShow", Date.now()),
                b.default.isH5 && (e.query = e),
                (0, w.Cu)(e),
                _.Z.commonDebugTrace("app onShow setUnionData start"),
                v.Z.setUnionData(e && e.query),
                _.Z.commonDebugTrace("app onShow setUnionData done"),
                e &&
                  e.scene &&
                  ((0, b.setAppScene)(e.scene), (O.Bc.options = e)),
                (0, y.nF)(e.query),
                e.query &&
                  e.query.TaskId &&
                  (0, k.GY)(
                    { TaskId: e.query.TaskId, Status: 2 },
                    { checkCid: !0 }
                  ).catch(function (e) {
                    console.error("sendPushStatus fail", e);
                  }),
                e && 1043 === e.scene)
              ) {
                var t = e.path || "";
                _.Z.ubtTrace(164565, (0, m.Z)({ path: t }, Z()));
              }
              e &&
                e.query &&
                e.query.loginSource &&
                P.Z.setLaunchSource({
                  loginSoureType: "wechat",
                  loginSourceName: e.query.loginSource,
                }),
                (function (e) {
                  if (
                    b.default.isWechat ||
                    b.default.isBaidu ||
                    b.default.isAlipay ||
                    b.default.isTT
                  ) {
                    if (e.query && "true" === e.query.forceUpdate) return D();
                    (0, k.fu)({ ConfigKey: "ztrip_miniapp_update" })
                      .then(function (e) {
                        if (e.ConfigInfo && e.ConfigInfo.Content)
                          try {
                            var t = (
                                JSON.parse(e.ConfigInfo.Content.trim()) || {}
                              ).force_update,
                              a = void 0 !== t && t;
                            if ((console.log("是否强制更新小程序", a), !a))
                              return;
                            D();
                          } catch (e) {
                            console.log(e);
                          }
                      })
                      .catch(function (e) {
                        return console.log(e);
                      });
                  }
                })(e),
                (A.mini = {
                  navigateTo: o().navigateTo,
                  switchTab: o().switchTab,
                });
            },
            handlePageNotFound: function (e) {
              if (e.path) {
                var t = (0, T.p)(e.path);
                if (t) {
                  var a = t.realPath;
                  if (e.query)
                    for (var i in (t.home &&
                      (e.query = (0, m.Z)(
                        (0, m.Z)({}, e.query),
                        {},
                        { tab: P.Z.getTabFromOldParam(e.query) }
                      )),
                    e.query))
                      a.indexOf("?") > -1
                        ? (a += "&".concat(i, "=").concat(e.query[i]))
                        : (a += "?".concat(i, "=").concat(e.query[i]));
                  return (
                    t.home
                      ? o().reLaunch({ url: a })
                      : o().redirectTo({ url: a }),
                    !0
                  );
                }
              }
            },
          },
          I =
            (a(28509),
            u()(q)(
              (L = (function (e) {
                (0, c.Z)(a, e);
                var t = (0, p.Z)(a);
                function a() {
                  return (0, s.Z)(this, a), t.apply(this, arguments);
                }
                return (
                  (0, d.Z)(a, [
                    {
                      key: "render",
                      value: function () {
                        return this.props.children;
                      },
                    },
                  ]),
                  a
                );
              })(l.default.Component))
            ) || L),
          R = {
            pages: [
              "pages/home/index",
              "pages/trnshare/grablist/grablist",
              "pages/myctrip/list/list",
              "pages/my/index",
              "pages/miniPolicy/miniPolicy",
            ],
            subPackages: [
              {
                root: "pages/trainRob",
                pages: [
                  "setgrab/setgrab",
                  "otherlist/otherlist",
                  "grabrate/grabrate",
                  "crossTrainList/crossTrainList",
                ],
              },
              {
                root: "pages/train",
                pages: [
                  "orderdetail/orderdetail",
                  "passengerlist/passengerlist",
                  "list/list",
                  "booking/booking",
                  "refund/index",
                  "refund/artificialRefund/index",
                  "refund/refundResult/index",
                  "passenger/index",
                  "assignee/assignee",
                  "exportAssignee/exportAssignee",
                  "gaiqian/gaiqian",
                  "detention/detention",
                  "share/share",
                  "bookx/bookx",
                  "smsWebview/index",
                  "userVerify/index",
                  "accounthelp/index1",
                  "friendbuy/index",
                  "darkReason/darkReason",
                  "certificateVerification/index",
                  "coupon/coupon",
                  "studentVerification/studentVerification",
                ],
              },
              {
                root: "pages/trainminor",
                pages: [
                  "zhengwandian/zhengwandian",
                  "zhengwandian/list",
                  "daping/daping",
                  "journey/journey",
                  "servicenotice/servicenotice",
                  "jumppage/jumppage",
                ],
              },
              {
                root: "pages/trainsmart",
                pages: [
                  "smartSplitTicket/index",
                  "smartRSTicket/index",
                  "smartCSTicket/index",
                ],
              },
              {
                root: "pages/trainDetail",
                pages: [
                  "graborder/graborder",
                  "order/order",
                  "grabsuccess/grabsuccess",
                  "accountHelpList/index",
                  "accountHelpOrder/index",
                  "grabRepeat/index",
                  "jianlouConfirm/index",
                  "webviewpay/index",
                  "friendSpeedUp/index",
                  "shelves/shelves",
                  "secSkill/secSkill",
                  "insuranceOrderDetail/insuranceOrderDetail",
                  "ticketQrcode/ticketQrcode",
                ],
              },
              {
                root: "pages/12306",
                pages: [
                  "face/face",
                  "faceAuth/faceAuth",
                  "login/login",
                  "register/register",
                  "member/member",
                  "retrievePassWord/retrievePassWord",
                  "management12306account/index",
                  "change12306mobile/index",
                  "change12306password/index",
                  "dark/index",
                  "dark/predark",
                  "register/sendSms/sendSms",
                  "login/sendSms/sendSms",
                ],
              },
              {
                root: "pages/flight",
                pages: [
                  "list/list",
                  "bookx/bookx",
                  "book/book",
                  "detail/detail",
                  "flightPassenger/flightPassenger",
                  "monitoredit/monitoredit",
                  "monitordetail/monitordetail",
                  "roundtrip/roundtrip",
                  "multiFlights/multiFlights",
                  "specialList/specialList",
                  "invite/invite",
                ],
                plugins: {
                  routePlan: {
                    version: "1.0.12",
                    provider: "wx50b5593e81dd937a",
                  },
                },
              },
              {
                root: "pages/flightIntl",
                pages: [
                  "list/list",
                  "bookx/bookx",
                  "book/book",
                  "passenger/passenger",
                  "detail/detail",
                ],
              },
              {
                root: "pages/flightSecondary",
                pages: [
                  "coupon/coupon",
                  "productdetail/productdetail",
                  "address/address",
                  "insurance/insurance",
                  "bap/bap",
                  "sendinvoice/sendinvoice",
                  "priceparity/priceparity",
                ],
              },
              {
                root: "pages/flightAfterSale",
                pages: [
                  "rebookApply/rebookApply",
                  "rebookOperate/rebookOperate",
                  "rebookList/rebookList",
                  "rebookConfirm/rebookConfirm",
                  "rebookDetail/rebookDetail",
                  "refundOperate/refundOperate",
                  "refundDetail/refundDetail",
                  "refundReason/refundReason",
                ],
              },
              {
                root: "pages/bus",
                pages: [
                  "list/list",
                  "editPassenger/index",
                  "passengerList/index",
                  "newbook/book",
                  "place/index",
                  "placeSearch/index",
                  "bookcoupon/bookcoupon",
                  "neworderdetail/orderdetail",
                  "insurancedetail/insurancedetail",
                  "citySelect/index",
                  "simpleBook/simpleBook",
                  "stationScanBook/stationScanBook",
                  "map/map",
                ],
              },
              {
                root: "pages/hotel",
                pages: [
                  "list/list",
                  "detail/detail",
                  "map/map",
                  "coupon/coupon",
                  "swan/swan",
                  "facility/facility",
                  "keywordsearch/index",
                  "packages/selectcoupon/selectcoupon",
                  "packages/monitoredit/monitoredit",
                  "packages/monitordetail/monitordetail",
                  "packages/monitorlist/monitorlist",
                  "packages/collect/collect",
                  "packages/sharedOrder/sharedOrder",
                  "booking/booking",
                  "order/order",
                  "orderCancel/orderCancel",
                  "dianping/dianping",
                  "picshow/picshow",
                  "imagebox/imagebox",
                  "transitpage/transitpage",
                  "invoiceinfo/invoiceinfo",
                  "city/city",
                  "comment/comment",
                  "comment/myComments",
                ],
              },
              {
                root: "pages/smart/packageA",
                pages: [
                  "searchSite/index",
                  "searchList/index",
                  "multiPlan/index",
                  "tripDetail/index",
                  "booking/index",
                  "orderDetail/index",
                  "robTaskSetting/index",
                  "newTripDetail/index",
                  "shareLanding/index",
                ],
              },
              {
                root: "pages/ship",
                pages: [
                  "list/list",
                  "book/book",
                  "x/x",
                  "orderdetail/orderdetail",
                  "shipline/shipline",
                  "passengerList/index",
                  "editPassenger/index",
                ],
              },
              {
                root: "pages/ticket",
                name: "ticket_stub",
                pages: [
                  "packageA/search/search",
                  "index/index",
                  "packageA/list/list",
                  "packageA/detail/detail",
                  "packageA/book/book",
                  "packageA/order/order",
                  "packageA/refund/refund",
                  "packageA/coupon/coupon",
                  "packageA/evaluate/evaluate",
                  "packageA/activity/live/index",
                ],
              },
              {
                root: "pages/activity/train",
                pages: [
                  "school/school",
                  "ztripInnerWelfare/ztripInnerWelfare",
                  "vipCouponShare/vipCouponShare",
                  "20200609-ztrip-signin/index",
                  "avatarAndNameAuth/index",
                  "newStudentGift/studentGift",
                  "20201224-ztrip-back-home-ticket/jumppage",
                  "speedassistV2/index",
                  "speedassist/0901/speedassist0901",
                  "speedassist/0902/speedassist0902",
                  "speedassist/0903/speedassist0903",
                  "speedassist/0904/speedassist0904",
                  "welfareGroup/index",
                  "20210512-ztrip-taobao-sale/index",
                  "ztrip-assist-official-account/index",
                  "20210714-ztrip-station-coupon-verification-for-retailer-scan/index",
                  "groupScanCode/index",
                  "groupScanCodeV2/index",
                  "shareInfoSet/index",
                  "20220217-ztrip-lottery/index",
                  "20220418-ztrip-game-for-peace/index",
                  "browseVideo/index",
                  "imMiddlePage/index",
                ],
                plugins: {
                  chatGroupPlugin: {
                    version: "1.0.5",
                    provider: "wx4d2deeab3aed6e5a",
                  },
                  mercPlugin: {
                    version: "2.5.3",
                    provider: "wx87ebb56764fea681",
                  },
                },
              },
              {
                root: "pages/activity/flight",
                pages: [
                  "monitor/index",
                  "invite/index",
                  "inviteCashBack/index",
                  "flightSpecial/flightSpecial",
                  "kanjia/index",
                ],
              },
              {
                root: "pages/robshareV3",
                pages: ["index", "rank/rank"],
                disableOther: !0,
              },
              {
                root: "pages/usercenter",
                pages: [
                  "kaquan/kaquan",
                  "member/member",
                  "memberRights/index",
                  "store/store",
                  "integral/integral",
                  "plsell/plsell",
                  "tmall/index",
                  "management/index",
                  "accountapplication/index",
                  "userInfo/index",
                  "shareCollection/shareCollection",
                  "globalSearch/index",
                  "realNameVerify/index",
                ],
              },
              { root: "pages/zxpay/index", pages: ["index"] },
              { root: "pages/accounts", pages: ["login"] },
              {
                root: "functionalPages",
                pages: [
                  "subscribeApp/index",
                  "calendar/index",
                  "city/index",
                  "trainCity/index",
                  "flightCity/index",
                  "trainSmartCity/index",
                  "avatarAndNameAuth/index",
                  "country/country",
                  "share/share",
                  "subscribe/index",
                  "transit/index",
                  "twebview/index",
                  "twebview/index1",
                  "twebview/index2",
                  "twebview/index3",
                  "twebview/index4",
                  "twebviewV2/index",
                  "twebviewV2/index1",
                  "twebviewV2/index2",
                  "twebviewV2/index3",
                  "twebviewV2/index4",
                  "ocr/index",
                  "middle/index",
                  "testpage/testpage",
                  "testpage/section",
                  "trainCitySelector/trainCitySelector",
                ],
              },
              {
                root: "pages/logoutAccount",
                pages: [
                  "logoutReason/index",
                  "logoutVerifyCode/index",
                  "logout/index",
                ],
              },
              {
                root: "pages/trnshare/invite",
                pages: ["invite"],
                disableOther: !1,
                disableAlipay: !0,
              },
              {
                root: "pages/newpay",
                pages: ["newpay"],
                disableOther: !1,
                disableAlipay: !0,
              },
              {
                root: "pages/robshareMdPage",
                pages: [
                  "index",
                  "index1",
                  "index2",
                  "index3",
                  "index4",
                  "index5",
                  "index6",
                  "index7",
                  "index8",
                  "index9",
                ],
                disableOther: !1,
                disableAlipay: !0,
              },
              {
                root: "pages/robshare",
                pages: [
                  "0903/robshare0914",
                  "robshare/0904/robshare0914",
                  "robshare/0906/robshare0914",
                  "robshare/0907/robshare0914",
                  "robshare2/0910/robshare0914",
                  "robshare2/0909/robshare0914",
                ],
                disableOther: !1,
                disableAlipay: !0,
              },
              {
                root: "pages/market",
                pages: [
                  "unlimitQRCode/index",
                  "mdpage/index",
                  "mdpage/index1",
                  "mdpage/index2",
                  "mdpage/index3",
                  "mdpage/index4",
                  "mdpage/index5",
                  "mdpage/index6",
                  "mdpage/index7",
                  "mdpage/index8",
                  "mdpage/index9",
                ],
                disableOther: !1,
                disableAlipay: !0,
              },
              {
                root: "pages/taroCRN",
                pages: [
                  "train/pages/trainTimeTable/index",
                  "train/pages/CandidateOrderDetail/index",
                  "train/pages/candidateDiagnosis/index",
                  "train/pages/candidateOrderInput/index",
                  "train/pages/candidateOrderPay/index",
                  "train/pages/candidateOrderUpdate/index",
                  "train/pages/ticketUpgradeDetail/index",
                  "train/pages/UpgradeTicket/index",
                  "train/pages/pointsDetail/index",
                  "train/pages/member/home/index",
                  "train/pages/selfTicketOrderList/index",
                  "train/pages/remainingTicketMonitor/index",
                  "flight/pages/testPage/index",
                  "flight/pages/surpriseGrabInput/index",
                  "flight/pages/surpriseGrabDetail/index",
                  "flight/pages/surpriseGrabFlightSelect/index",
                  "flight/pages/refundDetail/index",
                  "flight/pagesRefund/choosePassenger/index",
                  "flight/pagesRefund/chooseReason/index",
                  "flight/pagesRefund/refundApply/index",
                  "flight/pagesRefund/refundConfirm/index",
                  "flight/pages/rebookOperate/index",
                  "flight/pages/rebookApply/index",
                  "flight/pages/rebookReason/index",
                  "flight/pages/rebookList/index",
                  "flight/pages/rebookConfirm/index",
                  "flight/pages/rebookDetail/index",
                  "ticket/pages/index/index",
                  "ticket/pages/index/searchResult",
                  "ticket/pages/search/index",
                  "ticket/pages/searchList/searchList",
                  "ticket/pages/orderDetail/index",
                  "ticket/pages/detail/index",
                  "ship/pages/x/index",
                  "ship/pages/book/book",
                  "ship/pages/passengerList/index",
                  "ship/pages/editPassenger/index",
                  "ship/pages/orderdetail/orderdetail",
                  "ship/pages/couponList/index",
                  "ship/pages/shipLineList/index",
                ],
              },
            ],
            preloadRule: {
              "pages/home/index": { packages: ["pages/train"] },
              "pages/ticket/index/index": {
                network: "all",
                packages: ["ticket_stub"],
              },
              "pages/myctrip/list/list": {
                network: "all",
                packages: ["pages/trainDetail"],
              },
              "pages/train/booking/booking": {
                network: "all",
                packages: ["pages/trainDetail"],
              },
              "pages/trainRob/grabrate/grabrate": {
                network: "all",
                packages: ["pages/trainDetail"],
              },
              "pages/trnshare/grablist/grablist": {
                network: "all",
                packages: ["pages/train"],
              },
            },
            plugins: {},
            window: {
              backgroundTextStyle: "light",
              navigationBarBackgroundColor: "#0066E6",
              navigationBarTextStyle: "white",
              backgroundColor: "#cccccc",
            },
            tabBar: {
              color: "#7F8389",
              selectedColor: "#5495e6",
              borderStyle: "black",
              backgroundColor: "#ffffff",
              list: [
                {
                  pagePath: "pages/home/index",
                  iconPath: "images/home/bar_sy@3x.png",
                  selectedIconPath: "images/home/bar_sy_yx@3x.png",
                  text: "首页",
                },
                {
                  pagePath: "pages/trnshare/grablist/grablist",
                  iconPath: "images/home/bar_qp@3x.png",
                  selectedIconPath: "images/home/bar_qp_yx@3x.png",
                  text: "抢票",
                },
                {
                  pagePath: "pages/myctrip/list/list",
                  iconPath: "images/home/bar_dd@3x.png",
                  selectedIconPath: "images/home/bar_dd_yx@3x.png",
                  text: "订单",
                },
                {
                  pagePath: "pages/my/index",
                  iconPath: "images/home/bar_grzx@3x.png",
                  selectedIconPath: "images/home/bar_grzx_yx@3x.png",
                  text: "我的",
                },
              ],
            },
            permission: {
              "scope.userLocation": {
                desc: "您的位置信息将用于定位您的当前所在城市",
              },
            },
            sitemapLocation: "sitemap.json",
            requiredPrivateInfos: ["getLocation"],
          };
        (i.window.__taroAppConfig = R),
          App((0, n.Ox)(I, l, l.default, R)),
          (0, r.initPxTransform)({
            designWidth: 750,
            deviceRatio: { 375: 2, 640: 1.17, 750: 1, 828: 0.905 },
          });
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (t) {
          return e((e.s = t));
        })(86346);
      }),
        e.O();
    },
  ]);
