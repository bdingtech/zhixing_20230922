!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [14856],
    {
      45066: function (e, t, n) {
        n.d(t, {
          F0: function () {
            return g;
          },
          WE: function () {
            return v;
          },
          cQ: function () {
            return m.Z;
          },
        });
        var o = n(92954),
          r = n.n(o),
          i = n(79792),
          a = n(79910),
          c = n(18783),
          s = {
            index: { route: "pages/ticket/index/index" },
            detail: { route: "pages/ticket/packageA/detail/detail" },
            list: { route: "pages/ticket/packageA/list/list" },
            order: { route: "pages/ticket/packageA/order/order" },
            refund: { route: "pages/ticket/packageA/refund/refund" },
            search: { route: "pages/ticket/packageA/search/search" },
            book: { route: "pages/ticket/packageA/book/book" },
            coupon: { route: "pages/ticket/packageA/coupon/coupon" },
            evaluate: { route: "pages/ticket/packageA/evaluate/evaluate" },
            spike: { route: "pages/ticket/packageA/activity/spike/spike" },
            live: { route: "pages/ticket/packageA/activity/live/index" },
          },
          u = {
            list: { pageid: "" },
            book: { pageid: "" },
            orderdetail: { pageid: "" },
          },
          l = {
            main: {
              index: { pageid: "" },
              detail: { pageid: "" },
              list: { pageid: "" },
              refund: { pageid: "" },
              search: { pageid: "" },
              book: { pageid: "" },
              coupon: { pageid: "" },
            },
            wx45dff5234240ad90: {
              list: { pageid: "" },
              book: { pageid: "" },
              orderdetail: { pageid: "" },
            },
            wx76dcd806f382ec8e: u,
            wx8d638099006a5a3b: u,
          },
          p = {},
          f = {};
        !(function () {
          var e = i.default.appId,
            t = l.main,
            n = l[e] || {};
          (n.__proto__ = t),
            Object.keys(s).forEach(function (e) {
              var t = s[e],
                o = n[e];
              (f[e] = t.route), (p[t.route] = Object.assign({ name: e }, t, o));
            });
        })();
        var d = {
            pageId: function (e, t) {
              var n = p[e.route];
              return n
                ? (t && n.pageidPromotion) || n.pageid || "0"
                : e.__cpage.pageId || "0";
            },
            navigateTo: function (e, t, n, o) {
              var i = d.map(e, t);
              i &&
                (a.Z.isTabUrl(i)
                  ? r().reLaunch({ url: i })
                  : n
                  ? d.checkLogin(n, function () {
                      d._navigateTo(v.serializeURL(i, { didLogin: !0 }), o);
                    })
                  : d._navigateTo(i, o));
            },
            isLogin: function (e) {
              return new Promise(function (t, n) {
                e
                  ? (0, c._5)().then(
                      function () {
                        t(!0);
                      },
                      function () {
                        t(!1);
                      }
                    )
                  : t(c.ZP.isLogin);
              });
            },
            navigateBackTo: function (e, t, n, o) {
              var i = function () {
                var n = f[e];
                if (n)
                  if (a.Z.isTabUrl(n)) r().switchTab({ url: n });
                  else {
                    var i = r().getCurrentPages(),
                      c = i.findIndex(function (e, t, o) {
                        return e.route === n;
                      });
                    if (c >= 0) r().navigateBack({ delta: i.length - c - 1 });
                    else {
                      var s = (s = "/" + n + "?" + v.serializeParams(t));
                      d._navigateTo(s, o);
                    }
                  }
                else console.error(e, "----页面存在或不在配置列表");
              };
              n
                ? d.checkLogin(n, function () {
                    i();
                  })
                : i();
            },
            checkLogin: function (e, t) {
              return new Promise(function (n, o) {
                d.isLogin(e > 1).then(function (e) {
                  e
                    ? (t && t(!1), n(!1))
                    : c.ZP.doLogin().then(
                        function () {
                          t && t(!0), n(!0);
                        },
                        function () {
                          console.log("取消登录"), o();
                        }
                      );
                });
              });
            },
            redirectTo: function (e, t, n, o) {
              var i = d.map(e, t, n);
              i &&
                (a.Z.isTabUrl(i)
                  ? r().switchTab({ url: i })
                  : n
                  ? d.checkLogin(n, function () {
                      d._redirectTo(i, o);
                    })
                  : d._redirectTo(i, o));
            },
            reLaunch: function (e, t, n) {
              var o = d.map(e, t);
              o &&
                (n
                  ? d.checkLogin(n, function () {
                      r().reLaunch({ url: o });
                    })
                  : r().reLaunch({ url: o }));
            },
            _redirectTo: function (e, t) {
              (!t || t > 10) && (t = 10);
              var n = r().getCurrentPages().length;
              if (n > t) {
                var o = n - t + 1;
                d._backAndPush(o, e);
              } else r().redirectTo({ url: e });
            },
            _navigateTo: function (e, t) {
              t || (t = 10),
                r().getCurrentPages().length >= t
                  ? d._redirectTo(e, t)
                  : r().navigateTo({ url: e });
            },
            _backAndPush: function (e, t) {
              r().navigateBack({
                delta: e,
                success: function (e) {
                  setTimeout(function () {
                    r().showToast({
                      title: "...请稍后",
                      icon: "loading",
                      duration: 1e3,
                      mask: !0,
                    });
                  }, 100);
                },
              }),
                setTimeout(function () {
                  r().hideToast(), r().navigateTo({ url: t });
                }, 1e3);
            },
            map: function (e, t, n) {
              var o = f[e],
                r = "";
              if (o) r = "/" + o + "?" + v.serializeParams(t);
              else {
                if (void 0 === e) return r;
                if (0 !== e.indexOf("/"))
                  return 0 === e.indexOf("http")
                    ? "/functionalPages/twebview/index?url="
                        .concat(encodeURIComponent(e), "&needLogin=")
                        .concat(n ? "1" : "0")
                    : r;
                r = e;
              }
              return r;
            },
          },
          g = d;
        String.prototype.splice ||
          (String.prototype.splice = function (e, t, n) {
            return this.slice(0, e) + n + this.slice(e + Math.abs(t));
          });
        var h = function (e) {
          if (!e) return null;
          var t = [];
          for (var n in e) {
            var o,
              r = e[n];
            (o = n + "=" + (r instanceof Object ? JSON.stringify(e[n]) : r)),
              t.push(o);
          }
          return t.join("&");
        };
        var v = {
            serializeParams: h,
            parseURLParam: function (e) {
              var t;
              t =
                "string" == typeof e
                  ? (function (e) {
                      if (!e) return {};
                      e.indexOf("?") > 0 && (e = e.substring(e.indexOf("?")));
                      for (
                        var t,
                          n = {},
                          o = e.replace(/^\?/, "").split("&"),
                          r = o.length,
                          i = 0;
                        i < r;
                        i++
                      )
                        o[i] && (n[(t = o[i].split("="))[0]] = t[1]);
                      return n;
                    })(e)
                  : e;
              var n = {};
              for (var o in t) {
                var r = t[o];
                r = decodeURIComponent(r);
                var i = "",
                  a = !1;
                try {
                  i = JSON.parse(r);
                } catch (e) {
                  a = !0;
                } finally {
                  a || (r = i);
                }
                "undefined" === r
                  ? (r = void 0)
                  : "null" === r
                  ? (r = null)
                  : "NaN" === r && (r = NaN),
                  (n[o] = r);
              }
              return n;
            },
            versionCompare: function (e, t) {
              for (
                var n = e.split("."),
                  o = t.split("."),
                  r = 0,
                  i = Math.max(n.length, o.length),
                  a = 0;
                a < i;
                a++
              ) {
                var c = n[a],
                  s = o[a];
                if (c !== s) {
                  if (void 0 === c) {
                    r = -1;
                    break;
                  }
                  if (void 0 === s || c > s) {
                    r = 1;
                    break;
                  }
                  r = -1;
                }
              }
              return r;
            },
            serializeURL: function (e, t) {
              if (!e) return "";
              var n = h(t);
              return e.indexOf("?") > 0
                ? e.endsWith("?") || e.endsWith("&")
                  ? e + n
                  : e + "&" + n
                : e + "?" + n;
            },
          },
          m = n(36039);
      },
      80048: function (e, t, n) {
        n.d(t, {
          b: function () {
            return o;
          },
        });
        var o = "k2CjO3z2cvj";
      },
      73851: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return l;
          },
        });
        var o = n(92954),
          r = n.n(o),
          i = n(18783),
          a = n(45023),
          c = n(79910),
          s = n(36039).Z.deepClone;
        function u(e, t, n, o) {
          var r = e["$" + t] || [];
          Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return e.$target && (r.push(e.$target), (e["$" + t] = r)), s(n);
            },
            set: function (e) {
              c._.isEqual(e, n) ||
                (setTimeout(function () {
                  o && o(e);
                }, 0),
                r.length &&
                  setTimeout(function () {
                    r.forEach(function (e) {
                      return e();
                    });
                  }, 0),
                (n = e));
            },
          });
        }
        var l = {
          $watch: function (e, t) {
            Object.keys(t).forEach(function (n) {
              u(e.data, n, e.data[n], function (o) {
                t[n].call(e, o);
              });
            });
          },
          $computed: function (e, t) {
            var n = Object.keys(t);
            Object.keys(e.data).forEach(function (t) {
              u(e.data, t, e.data[t]);
            });
            var o = n.reduce(function (n, o) {
              return (
                (e.data.$target = function () {
                  e.setData((0, a.Z)({}, o, t[o].call(e)));
                }),
                (n[o] = t[o].call(e)),
                (e.data.$target = null),
                n
              );
            }, {});
            e.setData(o);
          },
          isLogin: function (e) {
            return new Promise(function (t, n) {
              e
                ? (0, i._5)().then(
                    function () {
                      t(!0);
                    },
                    function () {
                      t(!1);
                    }
                  )
                : t(i.ZP.isLogin);
            });
          },
          doLogin: function (e) {
            i.ZP.doLogin().then(
              function () {
                e && e();
              },
              function () {
                r().showToast({
                  title: "取消登录",
                  icon: "none",
                  duration: 1500,
                });
              }
            );
          },
          autoJump: function (e) {
            var t = e.navigateTo,
              n = e.redirectTo,
              o = e.reLaunch,
              i = t || n || o;
            i &&
              ((i = decodeURIComponent(i)),
              t
                ? this.navigateTo({ url: i })
                : n
                ? this.redirectTo({ url: i })
                : o && r().reLaunch({ url: i }));
          },
          showMsg: function (e, t) {
            var n = this,
              o = e,
              i = "提示";
            "string" == typeof e
              ? (o = e)
              : ((o = e.message), (i = e.title || "提示")),
              r().showModal({
                title: i,
                content: o,
                showCancel: !1,
                success: function (e) {
                  t && t.call(n);
                },
              });
          },
          showToast: function (e, t) {
            var n = this;
            if (e) {
              var o = "成功",
                i = "none",
                a = 2e3;
              "string" == typeof e
                ? (o = e)
                : ((o = e.message || "成功"),
                  (i = e.icon || "none"),
                  (a = e.duration || 2e3)),
                r().showToast({
                  title: o,
                  icon: i,
                  duration: a,
                  mask: !1,
                  complete: function () {
                    t && t.call(n);
                  },
                });
            }
          },
          showLoading: function (e) {
            r().showLoading({ title: e || "加载中...", mask: !0 });
          },
          hideLoading: function (e) {
            r().hideLoading({
              complete: function () {
                e &&
                  "[object Function]" === Object.prototype.toString.call(e) &&
                  e();
              },
            });
          },
          onHide: function () {
            this.hideLoading();
          },
        };
      },
      55099: function (e, t, n) {
        n.d(t, {
          BZ: function () {
            return f;
          },
          Gw: function () {
            return g;
          },
          Jr: function () {
            return k;
          },
          L1: function () {
            return w;
          },
          Mb: function () {
            return R;
          },
          Nc: function () {
            return C;
          },
          Nd: function () {
            return L;
          },
          Ur: function () {
            return Z;
          },
          Z: function () {
            return d;
          },
          Z$: function () {
            return v;
          },
          _d: function () {
            return S;
          },
          aY: function () {
            return B;
          },
          bC: function () {
            return T;
          },
          bx: function () {
            return N;
          },
          cZ: function () {
            return x;
          },
          cr: function () {
            return D;
          },
          dc: function () {
            return m;
          },
          lc: function () {
            return O;
          },
          mn: function () {
            return j;
          },
          om: function () {
            return b;
          },
          px: function () {
            return A;
          },
          rn: function () {
            return I;
          },
          tn: function () {
            return h;
          },
          vC: function () {
            return P;
          },
          vU: function () {
            return y;
          },
          yn: function () {
            return V;
          },
        });
        var o = n(22276),
          r = n(298),
          i = n(79792),
          a = n(79295),
          c = n(18783),
          s = n(49120),
          u = n(17377);
        function l() {
          var e = [],
            t = {
              platform: "wxapp",
              weiXinPlatform: i.default.weiXinPlatform || "android",
              clientInfo: i.default.clientInfo || "",
              deviceId: c.ZP.cid || "",
              partner: i.default.partner,
              reqTime: "" + new Date().getTime(),
              channel: i.default.train_channel,
              openId: c.ZP.openid,
              aid: "",
              sid: "",
              ouid: "",
              correctVersion: "19",
            };
          t.clientInfo.length && (t.clientInfo += "|");
          var n = a.Z.getUnionData();
          return (
            n &&
              ((t.clientInfo += "aid="
                .concat(n.aid, "|sid=")
                .concat(n.sid, "|ouid=")
                .concat(n.ouid)),
              (t.aid = "" + n.aid),
              (t.sid = "" + n.sid),
              (t.ouid = "" + n.ouid)),
            Object.keys(t).forEach(function (n) {
              e.push({ name: n, value: t[n] });
            }),
            e
          );
        }
        function p(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { needLogin: !1, cb: function () {} },
            i = function (e) {
              c.ZP.doLogout()
                .then(function () {
                  (0, s.showToast)(e),
                    c.ZP.doLogin().then(function () {
                      n.cb && n.cb();
                    });
                })
                .catch(function (e) {
                  console.log(e);
                });
            };
          return (
            (e = "https://".concat(u.fv.host).concat(e)),
            (t.head = (0, r.Z)((0, r.Z)({}, (0, u.Et)()), t.head)),
            t.head && t.head.extension
              ? (t.head.extension = [].concat(
                  (0, o.Z)(l()),
                  (0, o.Z)(t.head.extension)
                ))
              : (t.head.extension = l()),
            new Promise(function (o, r) {
              (0, u.WY)({
                url: e,
                data: t,
                success: function (e) {
                  if (
                    e.data.ResponseStatus &&
                    e.data.ResponseStatus.Ack &&
                    "Failure" == e.data.ResponseStatus.Ack
                  ) {
                    var t = e.data.ResponseStatus.Errors;
                    if (t && t.length > 0) {
                      var a = t[0].ErrorCode;
                      if (
                        a &&
                        ("MobileRequestFilterException" == a ||
                          "AccountsMobileRequestFilterException" == a)
                      )
                        return (
                          r({ errorCode: -96, errorMessage: "登陆失效" }),
                          n.needLogin && i("登录已失效，请重新登录"),
                          !1
                        );
                    }
                  }
                  if (e.data.resultCode && -96 === e.data.resultCode)
                    return n.needLogin && (r({}), i(e.data.resultMessage)), !1;
                  o(e.data);
                },
                fail: function (e) {
                  r(e.data);
                },
                complete: function () {},
              });
            })
          );
        }
        function f(e) {
          return p("/restapi/soa2/17477/json/searchScenicSpotList", e);
        }
        function d() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { source: "scenicspot" };
          return p("/restapi/soa2/16586/json/GetCommonPassengerV1", e);
        }
        function g() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17477/json/searchHotScenicSpotList", e);
        }
        function h() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { overseasCityFlag: 0 };
          return p("/restapi/soa2/17477/json/getScenicSpotCitys", e);
        }
        function v() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17477/json/scenicSpotCitySearch", e);
        }
        function m() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17477/json/searchAutoComplete", e);
        }
        function k() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/12905/json/GetTyCityByLBS", e);
        }
        function b() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p(
            "/restapi/soa2/17477/json/searchScenicSpotSaleUnitDetail",
            e
          );
        }
        function T() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17477/json/searchScenicSpotImage", e);
        }
        function w() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17477/json/searchScenicSpotPriceCalendar", e);
        }
        function y() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17477/json/scenicSpotDynamicForm", e);
        }
        function C() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p(
            "/restapi/soa2/17477/json/searchScenicSpotResourceDetail",
            e
          );
        }
        function Z() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17477/json/searchScenicSpotCouponList", e);
        }
        function S() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17477/json/receiveScenicSpotCoupon", e);
        }
        function L() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17476/json/getOrderDetail", e);
        }
        function N() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17477/json/scenicSpotCouponTag", e);
        }
        function I() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17476/json/cancelOrder", e);
        }
        function B() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17476/json/returnOrderCheck", e);
        }
        function V() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17476/json/returnOrder", e);
        }
        function A() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17476/json/createOrder", e);
        }
        function j() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p("/restapi/soa2/17477/json/searchScenicSpotComment", e);
        }
        function P(e) {
          return p("/restapi/soa2/17477/json/KeywordSearchRecommend", e);
        }
        function D(e) {
          return p("/restapi/soa2/17477/json/scenicSpotSearchLog", e);
        }
        function O(e) {
          return p(
            "/restapi/soa2/17477/json/getUserAvailableCouponCollection",
            e
          );
        }
        function x(e) {
          return p("/restapi/soa2/14593/json/ExchangeVipCreditReward", e);
        }
        function R(e) {
          return p("/restapi/soa2/17477/json/searchActivityScenicSpotList", e);
        }
      },
      15148: function (e, t, n) {
        n.d(t, {
          G: function () {
            return s;
          },
        });
        var o = n(80048),
          r = n(55099),
          i = n(20689),
          a = n(73851),
          c = n(92954),
          s = {
            initCoupon: function () {
              this.queryScenicSpotCouponTag(), this.queryPopCouponList();
            },
            hasPopLastDay: function () {
              if (!i.v8.get()) return !1;
              var e = i.v8.get();
              return Date.now() - e < 864e5;
            },
            queryScenicSpotCouponTag: function () {
              var e = this;
              (0, r.bx)({ sceneID: o.b }).then(function (t) {
                e.setData({
                  hasCoupon: 1 === t.resultCode && !!t.totalCount,
                  couponTag: Object.assign(
                    {},
                    {
                      tagType: t.tagType,
                      totalCount: t.totalCount,
                      totalCouponPrice: t.totalCouponPrice,
                    }
                  ),
                });
              });
            },
            queryPopCouponList: function () {
              var e = this;
              (0, r.Ur)({ sceneID: o.b, backType: 0, needCoupon: 0 })
                .then(function (t) {
                  if (1 === t.resultCode) {
                    var n = t.promotionReceiveScenicSpotCouponList || [],
                      o =
                        (!!n.length && !e.hasPopLastDay()) ||
                        e.data.isShowTicketCouponPop;
                    e.setData(
                      {
                        popCouponList: n,
                        sceneID: t.sceneID,
                        isShowTicketCouponPop: o,
                        couponStyle: {
                          couponBgImage:
                            t.couponBgImage ||
                            "https://images3.c-ctrip.com/ztrip/attractionTicket/couponBgTitleNew.png",
                          couponBtnImage:
                            t.couponBtnImage ||
                            "https://images3.c-ctrip.com/ztrip/attractionTicket/receiveCouponBtn.png",
                          couponBgColor: t.couponBgColor || [
                            "#FF1A25",
                            "#FD1440",
                            "#FF1A25",
                            "#FD1440",
                          ],
                        },
                      },
                      function () {
                        o && i.v8.set(Date.now());
                      }
                    );
                  } else e.setData({ popCouponList: [] });
                })
                .catch(function (e) {});
            },
            receiveRequest: function () {
              var e = this,
                t = this.data,
                n = t.popCouponList,
                o = t.sceneID,
                i = [];
              n.forEach(function (e) {
                i.push(e.promotionKey);
              }),
                a.Z.showLoading(),
                (0, r._d)({
                  sceneID: o,
                  promotionReceiveScenicSpotCouponList: i,
                })
                  .then(function (t) {
                    a.Z.hideLoading(),
                      1 === t.resultCode
                        ? (a.Z.showToast("领取成功"),
                          c.eventCenter.emit("receiveCoupon"),
                          e.closePop())
                        : (a.Z.showToast(
                            t.resultMessage || "网络异常，请稍后再试！"
                          ),
                          e.closePop()),
                      e.queryScenicSpotCouponTag();
                  })
                  .catch(function () {
                    a.Z.hideLoading(),
                      a.Z.showToast("网络异常，请稍后再试！"),
                      e.closePop();
                  });
            },
            closePop: function () {
              this.setData({ isShowTicketCouponPop: !1 });
            },
            showPop: function () {
              this.setData({ isShowTicketCouponPop: !0 }), i.v8.set(Date.now());
            },
          };
      },
      20689: function (e, t, n) {
        n.d(t, {
          $s: function () {
            return u;
          },
          JE: function () {
            return h;
          },
          O5: function () {
            return l;
          },
          RX: function () {
            return s;
          },
          kB: function () {
            return g;
          },
          pT: function () {
            return f;
          },
          sE: function () {
            return p;
          },
          v8: function () {
            return d;
          },
        });
        var o = n(57042),
          r = n(24460),
          i = n(92954),
          a = n.n(i),
          c = (function () {
            function e(t) {
              (0, o.Z)(this, e), (this.key = t);
            }
            return (
              (0, r.Z)(
                e,
                [
                  {
                    key: "set",
                    value: function (e) {
                      if (null == e) return a().setStorageSync(this.key, "");
                      a().setStorageSync(this.key, e);
                    },
                  },
                  {
                    key: "get",
                    value: function () {
                      return a().getStorageSync(this.key);
                    },
                  },
                  {
                    key: "setAttr",
                    value: function (e, t) {
                      var n = this.get() || {};
                      (n[e] = t), this.set(n);
                    },
                  },
                  {
                    key: "getAttr",
                    value: function (e) {
                      return this.get()[e];
                    },
                  },
                  {
                    key: "removeAttr",
                    value: function (e) {
                      a().removeStorageSync(e);
                    },
                  },
                ],
                [
                  {
                    key: "getInstance",
                    value: function (t) {
                      return new e(t);
                    },
                  },
                ]
              ),
              e
            );
          })(),
          s = c.getInstance("HOME_DEFAULT_ALERT_STORE"),
          u = c.getInstance("CITY_CURRENT_STORE"),
          l = c.getInstance("CITY_LIST_STORE"),
          p = c.getInstance("IS_CHANGE_CITY"),
          f = c.getInstance("SEARCH_HISTORY_STORE"),
          d = c.getInstance("HOME_HISTORY_STORE"),
          g = c.getInstance("BOOK_HANDTIP_STORE"),
          h = c.getInstance("FAIL_TICKETING_STORE");
      },
      36039: function (e, t, n) {
        var o = n(22276),
          r = n(90983),
          i = n(77900),
          a = {
            deepClone: function (e) {
              var t = Object.prototype.toString.call(e),
                n = {};
              if ("[object Array]" === t) n = [];
              else {
                if ("[object Object]" !== t) return e;
                n = {};
              }
              return (
                "[object Array]" === t &&
                  e.forEach(function (e) {
                    n.push(a.deepClone(e));
                  }),
                "[object Object]" === t &&
                  Object.keys(e).forEach(function (t) {
                    n[t] = a.deepClone(e[t]);
                  }),
                n
              );
            },
            getUrlParams: function (e) {
              if (e) {
                var t,
                  n = decodeURIComponent(e)
                    .replace(/^(\?|#)/, "")
                    .split(/&amp;|&/),
                  o = {},
                  i = (0, r.Z)(n);
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    var a = t.value.split("=");
                    o[a[0]] = decodeURIComponent(a[1] || "");
                  }
                } catch (e) {
                  i.e(e);
                } finally {
                  i.f();
                }
                return o;
              }
            },
            parseQrCodeScene: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.scene;
              if (!t) return e;
              var n = a.getUrlParams(t);
              return Object.assign(e, n);
            },
            isObject: function (e) {
              return "[object Object]" === Object.prototype.toString.call(e);
            },
            isEmptyObj: function (e) {
              return a.isObject(e) && 0 === Object.keys(e).length;
            },
            dealCityItem: function (e) {
              e.forEach(function (e) {
                (e.cityName = e.name),
                  (e.cityID = e.id),
                  delete e.name,
                  delete e.id;
              });
            },
            debounce: function (e, t) {
              var n = null;
              return function () {
                var o = this,
                  r = arguments;
                n && (clearTimeout(n), (n = null)),
                  (n = setTimeout(function () {
                    e.apply(o, r);
                  }, t));
              };
            },
            getSpotId: function (e) {
              var t = "";
              return (
                e.extendInfo.forEach(function (e) {
                  "scenicspotID" == e.key && (t = e.value);
                }),
                t
              );
            },
            timeTotime: function (e) {
              var t = new Date(e),
                n = t.getFullYear() + "/",
                o =
                  (t.getMonth() + 1 < 10
                    ? "0" + (t.getMonth() + 1)
                    : t.getMonth() + 1) + "/",
                r = t.getDate() + " ";
              return new Date(n + o + r + "00:00:00").getTime();
            },
            getDateDesc: function (e) {
              var t = new Date().getTime(),
                n = ((t = a.timeTotime(t)) - (e = a.timeTotime(e))) / 1e3,
                o = Math.floor(n / 86400);
              return 0 == (o = parseInt(o))
                ? "今天"
                : -1 == o
                ? "明天"
                : -2 == o
                ? "后天"
                : "";
            },
            isValidEnFirstName: function (e) {
              return !!/^[a-zA-Z]{1,26}$/.test(e);
            },
            isValidHZ: function (e) {
              return !(
                !/^[a-zA-Z]{5,17}$/.test(e) && !/^[a-zA-Z0-9]{5,17}$/.test(e)
              );
            },
            isValidGA: function (e) {
              if (!e) return !1;
              return !!/^[HMChmc]{1}([0-9]{10}|[0-9]{8})$/.test(e);
            },
            isValidTBCard: function (e) {
              if (!e) return !1;
              return !!/^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/.test(e);
            },
            isValidTW: function (e) {
              if (!e) return !1;
              return !!/^[Tt]{1}[0-9]{8}/.test(e);
            },
            cardNumberReg: function (e, t) {
              var n = !0;
              switch (t) {
                case 1:
                  n = a.isValidSFZ(e);
                  break;
                case 2:
                  n = a.isValidHZ(e);
                  break;
                case 7:
                  n = a.isValidGA(e);
                  break;
                case 8:
                  n = a.isValidTBCard(e);
                  break;
                case 10:
                  n = a.isValidGA(e);
                  break;
                case 22:
                  n = a.isValidTW(e);
                  break;
                default:
                  n = !0;
              }
              return n;
            },
            handlerAddressBook: function (e) {
              var t = "";
              return "string" == typeof e
                ? e
                : e
                ? 0 === (e.phoneList || []).length
                  ? ""
                  : (e.phoneList.map(function (e) {
                      if (t) return t;
                      for (var n in e) {
                        var o = e[n];
                        if (
                          o &&
                          (t = (o.split("-").join("") || "").replace(/\s/g, ""))
                        ) {
                          var r = t.match(/^(\+86)?((1[3-9][0-9])\d{8})$/);
                          r && r[2] && (t = r[2]);
                        }
                      }
                    }),
                    t)
                : "";
            },
            assembleSuccessivePriceList: function (e) {
              for (var t = [], n = 0; n < e.length; n++)
                if (e[n].salePrice) {
                  var o = {
                    ticketDate: e[n].date,
                    price: e[n].salePrice,
                    originPrice: e[n].salePrice,
                    inventoryNum: e[n].inventoryNum,
                  };
                  t.push(o);
                }
              return t;
            },
            deduplication: function (e) {
              var t = (e = e || []).filter(function (e) {
                  return !!e.passengerName;
                }),
                n = (0, o.Z)(
                  new Set(
                    t.map(function (e) {
                      return (
                        e.passengerName +
                        "#" +
                        e.passportType +
                        "#" +
                        e.passportCode
                      );
                    })
                  )
                );
              return t.filter(function (e) {
                return (
                  -1 !==
                  n.indexOf(
                    e.passengerName +
                      "#" +
                      e.passportType +
                      "#" +
                      e.passportCode
                  )
                );
              });
            },
            switchTypeToTicketName: function (e) {
              var t = "";
              switch (e) {
                case 1:
                  t = "成人";
                  break;
                case 2:
                  t = "儿童";
                  break;
                case 4:
                  t = "学生";
                  break;
                case 8:
                  t = "老人";
                  break;
                case 16:
                  t = "其他";
                  break;
                case 32:
                  t = "家庭";
                  break;
                default:
                  t = "";
              }
              return t + "票";
            },
            emptyOrUndefined: function (e) {
              return void 0 === e || "" == e || null == e;
            },
            getPlaceText: function (e) {
              var t = "";
              switch (e) {
                case 1:
                  t = "须与证件上的名字一致";
                  break;
                case 2.1:
                  t = "请填写正确的英文姓";
                  break;
                case 2.2:
                  t = "请填写正确的英文名";
                  break;
                case 6:
                  t = "请填写证件号码";
                  break;
                case 13:
                  t = "接收确认短信";
                  break;
                case 14:
                  t = "请填写邮箱";
              }
              return t;
            },
            initFormItem: function (e, t, n, o) {
              var r =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 0,
                i =
                  arguments.length > 5 &&
                  void 0 !== arguments[5] &&
                  arguments[5],
                a = {
                  iD: e,
                  name: t,
                  type: n,
                  nameVal: "",
                  placeText: o,
                  inputType: r,
                  isFocus: !1,
                  isShowTip: !1,
                };
              return i && (a.nameRealVal = ""), a;
            },
            clearForm: function (e) {
              e &&
                0 != e.length &&
                ((e[0].passengerID = ""),
                e.forEach(function (e) {
                  (e.isShowTip = !1),
                    (e.isFocus = !1),
                    (e.nameVal = ""),
                    e.nameRealVal && (e.nameRealVal = "");
                }));
            },
            isValidSFZ: function (e) {
              var t, n;
              if (
                !{
                  11: "北京",
                  12: "天津",
                  13: "河北",
                  14: "山西",
                  15: "内蒙古",
                  21: "辽宁",
                  22: "吉林",
                  23: "黑龙江 ",
                  31: "上海",
                  32: "江苏",
                  33: "浙江",
                  34: "安徽",
                  35: "福建",
                  36: "江西",
                  37: "山东",
                  41: "河南",
                  42: "湖北 ",
                  43: "湖南",
                  44: "广东",
                  45: "广西",
                  46: "海南",
                  50: "重庆",
                  51: "四川",
                  52: "贵州",
                  53: "云南",
                  54: "西藏 ",
                  61: "陕西",
                  62: "甘肃",
                  63: "青海",
                  64: "宁夏",
                  65: "新疆",
                  71: "台湾",
                  81: "香港",
                  82: "澳门",
                  91: "国外 ",
                }[(e = e.toUpperCase()).substr(0, 2)]
              )
                return !1;
              if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(e)) return !1;
              if (15 == (t = e.length)) {
                n = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
                var o = e.match(n);
                if (!o || o.length < 5) return !1;
                var r = new Date("19" + o[2] + "/" + o[3] + "/" + o[4]);
                if (
                  r.getYear() == Number(o[2]) &&
                  r.getMonth() + 1 == Number(o[3]) &&
                  r.getDate() == Number(o[4])
                ) {
                  var i = new Array(
                      7,
                      9,
                      10,
                      5,
                      8,
                      4,
                      2,
                      1,
                      6,
                      3,
                      7,
                      9,
                      10,
                      5,
                      8,
                      4,
                      2
                    ),
                    a = new Array(
                      "1",
                      "0",
                      "X",
                      "9",
                      "8",
                      "7",
                      "6",
                      "5",
                      "4",
                      "3",
                      "2"
                    ),
                    c = 0;
                  for (
                    e = e.substr(0, 6) + "19" + e.substr(6, e.length - 6),
                      s = 0;
                    s < 17;
                    s++
                  )
                    c += e.substr(s, 1) * i[s];
                  return (e += a[c % 11]), !0;
                }
                return !1;
              }
              if (18 == t) {
                if (
                  ((n = new RegExp(
                    /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
                  )),
                  !(o = e.match(n)) || o.length < 5)
                )
                  return !1;
                if (
                  (r = new Date(
                    o[2] + "/" + o[3] + "/" + o[4]
                  )).getFullYear() == Number(o[2]) &&
                  r.getMonth() + 1 == Number(o[3]) &&
                  r.getDate() == Number(o[4])
                ) {
                  var s;
                  for (
                    i = new Array(
                      7,
                      9,
                      10,
                      5,
                      8,
                      4,
                      2,
                      1,
                      6,
                      3,
                      7,
                      9,
                      10,
                      5,
                      8,
                      4,
                      2
                    ),
                      a = new Array(
                        "1",
                        "0",
                        "X",
                        "9",
                        "8",
                        "7",
                        "6",
                        "5",
                        "4",
                        "3",
                        "2"
                      ),
                      c = 0,
                      s = 0;
                    s < 17;
                    s++
                  )
                    c += e.substr(s, 1) * i[s];
                  return a[c % 11] == e.substr(17, 1);
                }
                return !1;
              }
              return !1;
            },
            isTheBestCoupon: function (e, t) {
              return e.every(function (e) {
                return (
                  e.couponId == t.couponId || t.couponPrice >= e.couponPrice
                );
              });
            },
            formReg: function (e) {
              e.forEach(function (t, n) {
                var o = t.iD,
                  r = t.inputType,
                  c = t.nameVal,
                  s = t.nameRealVal,
                  u = !0;
                if (0 == r)
                  if (0 == c.length) (t.isShowTip = !0), (t.isFocus = !1);
                  else {
                    if ((1 === o && (u = i.Z.isValidCNName(c)), 2 === o))
                      if ("英文姓" == t.name) u = i.Z.isValidEnName(c);
                      else {
                        u = a.isValidEnFirstName(c);
                        var l = e[n - 1].nameVal;
                        c.length + l.length > 26 &&
                          (Toast.show(
                            "英文姓名长度不可超过26个字母,英文名过长可使用缩写"
                          ),
                          (e[n - 1].isShowTip = !0),
                          (u = !0));
                      }
                    if (6 === o) {
                      var p = t.cardId;
                      u = a.cardNumberReg(s, p);
                    }
                    13 === o && (u = i.Z.isMobile(s)),
                      (t.isShowTip = !u),
                      (t.isFocus = !1);
                  }
              });
            },
            switchTypeToAgeType: function (e) {
              var t = "";
              switch (e) {
                case 1:
                  t = "ADU";
                  break;
                case 2:
                  t = "CHI";
                  break;
                case 4:
                case 8:
                case 16:
                case 32:
                default:
                  t = "ADU";
              }
              return t;
            },
            mobileFormater: function (e) {
              return (
                e.substr(0, 3) +
                e.substr(3, 4).replace(/\w/g, "*") +
                e.substr(7)
              );
            },
            isEmptyObject: function (e) {
              if (!e) return !0;
              var t;
              for (t in e) return !1;
              return !0;
            },
            findSelectedPromoitonItem: function (e) {
              var t = null;
              return (
                e &&
                  e.length > 0 &&
                  e.forEach(function (e) {
                    e.couponList &&
                      e.couponList.length &&
                      e.couponList.forEach(function (n) {
                        n.selectFlag && ((t = a.deepClone(n)).type = e.type);
                      });
                  }),
                t
              );
            },
            getIntervalHMS: function (e) {
              var t = Math.floor(e / 36e5);
              t = t > 9 ? t : "0" + t;
              var n = e % 36e5,
                o = Math.floor(n / 6e4);
              o = o > 9 ? o : "0" + o;
              var r = n % 6e4,
                i = Math.round(r / 1e3);
              return [t, o, (i = i > 9 ? i + "" : "0" + i)];
            },
            judgeZeroHMS: function (e) {
              return (
                !(!e || !e.length) &&
                e.every(function (e) {
                  return "00" == e;
                })
              );
            },
            getAge: function (e) {
              var t = String(e).length;
              if (0 == t || (15 != t && 18 != t)) return 0;
              var n = "";
              if (18 == t) {
                var o = e.substr(6, 4),
                  r = e.substr(10, 2),
                  i = e.substr(12, 2);
                n = "".concat(o, "/").concat(r, "/").concat(i);
              }
              if (15 == t) {
                var a = e.substr(6, 2),
                  c = e.substr(8, 2),
                  s = e.substr(10, 2);
                n = "19".concat(a, "/").concat(c, "/").concat(s);
              }
              var u = new Date(n),
                l = new Date(),
                p = l.getFullYear() - u.getFullYear();
              return (
                (l.getMonth() < u.getMonth() ||
                  (l.getMonth() == u.getMonth() &&
                    l.getDate() < u.getDate())) &&
                  p--,
                p
              );
            },
          };
        t.Z = a;
      },
      52341: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return f;
          },
        });
        var o = n(57042),
          r = n(24460),
          i = n(21867),
          a = n(86066),
          c = n(52500),
          s = n(71515),
          u =
            (n(92954),
            {
              full: "ifont-stars comment-grade-star iconfont",
              half: "ifont-starh comment-grade-star iconfont",
              empty: "ifont-stark comment-grade-star iconfont",
            });
        var l = {
            getClass: function (e, t) {
              return t <= Math.floor(e)
                ? u.full
                : t > Math.floor(e) && t <= Math.ceil(e)
                ? e <= Math.floor(e) + 0.4
                  ? u.empty
                  : e > Math.floor(e) + 0.4 && e < Math.floor(e) + 0.7
                  ? u.half
                  : u.full
                : u.empty;
            },
          },
          p = n(48813),
          f = (function (e) {
            (0, i.Z)(n, e);
            var t = (0, a.Z)(n);
            function n() {
              return (0, o.Z)(this, n), t.apply(this, arguments);
            }
            return (
              (0, r.Z)(n, [
                {
                  key: "render",
                  value: function () {
                    var e = (this.props.data || {}).commentGrade;
                    return (0, p.tZ)(s.Block, {
                      children: [1, 2, 3, 4, 5].map(function (t, n) {
                        return (0,
                        p.tZ)(s.Block, { children: (0, p.tZ)(s.Text, { className: l.getClass(e, t) }) }, "idx");
                      }),
                    });
                  },
                },
              ]),
              n
            );
          })(c.default.Component);
      },
      19330: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return l;
          },
        });
        var o = n(57042),
          r = n(24460),
          i = n(21867),
          a = n(86066),
          c = n(52500),
          s = n(71515),
          u = (n(92954), n(48813)),
          l = (function (e) {
            (0, i.Z)(n, e);
            var t = (0, a.Z)(n);
            function n() {
              return (0, o.Z)(this, n), t.apply(this, arguments);
            }
            return (
              (0, r.Z)(n, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.data || {},
                      t = e.openBuyReading,
                      n = e.activeMainRes,
                      o = e.applyBtn;
                    return (
                      e.isLogin,
                      (0, u.tZ)(s.Block, {
                        children: (0, u.tZ)(s.View, {
                          className: "pop-mask " + (t ? "active" : ""),
                          id: "ALBT",
                          onClick: this.props.closeBuyReading,
                          children: (0, u.BX)(s.View, {
                            className: "pop-botm",
                            children: [
                              (0, u.BX)(s.View, {
                                className: "pop-botm-bd pop-tick-detail",
                                children: [
                                  (0, u.BX)(s.View, {
                                    className: "pop-tick-detail-hd",
                                    children: [
                                      (0, u.BX)(s.View, {
                                        className: "cont",
                                        children: [
                                          (0, u.tZ)(s.View, {
                                            className: "tit",
                                            children: n.name || "",
                                          }),
                                          (0, u.tZ)(s.View, {
                                            className: "txt",
                                            children: (0, u.tZ)(s.Text, {
                                              children:
                                                "参考门市价：¥" +
                                                (n.marketPrice || "-"),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, u.tZ)(s.Text, {
                                        className: "ifont-closed iconfont",
                                        id: "ALBU",
                                        onClick: this.props.closeBuyReading,
                                      }),
                                    ],
                                  }),
                                  (0, u.BX)(s.ScrollView, {
                                    scrollY: "true",
                                    className: "pop-scroll",
                                    children: [
                                      (n.resourceAddCategoryList || []).map(
                                        function (e, t) {
                                          return (0, u.tZ)(
                                            s.Block,
                                            {
                                              children: (0, u.BX)(s.View, {
                                                className: "pop-tick-detail-bd",
                                                children: [
                                                  (0, u.tZ)(s.View, {
                                                    className: "tit",
                                                    children: e.title || "",
                                                  }),
                                                  (
                                                    e.resourceAddInfoList || []
                                                  ).map(function (e, t) {
                                                    return (0, u.tZ)(
                                                      s.Block,
                                                      {
                                                        children: (0, u.BX)(
                                                          s.View,
                                                          {
                                                            className: "item",
                                                            children: [
                                                              (0, u.tZ)(
                                                                s.View,
                                                                {
                                                                  className:
                                                                    "label",
                                                                  children:
                                                                    e.title,
                                                                }
                                                              ),
                                                              (0, u.tZ)(
                                                                s.View,
                                                                {
                                                                  className:
                                                                    "cont",
                                                                  children: (
                                                                    e.resourceAddInfoDetailList ||
                                                                    []
                                                                  ).map(
                                                                    function (
                                                                      e,
                                                                      t
                                                                    ) {
                                                                      return (0,
                                                                      u.tZ)(
                                                                        s.Block,
                                                                        {
                                                                          children:
                                                                            (0,
                                                                            u.tZ)(
                                                                              s.View,
                                                                              {
                                                                                className:
                                                                                  "txt",
                                                                                children:
                                                                                  e.descDetail,
                                                                              }
                                                                            ),
                                                                        },
                                                                        t
                                                                      );
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                      },
                                                      t
                                                    );
                                                  }),
                                                ],
                                              }),
                                            },
                                            t
                                          );
                                        }
                                      ),
                                      (0, u.BX)(s.View, {
                                        className: "pop-tick-detail-bd",
                                        children: [
                                          (0, u.tZ)(s.View, {
                                            className: "tit",
                                            children: "供应商资质",
                                          }),
                                          (0, u.BX)(s.View, {
                                            className: "item",
                                            children: [
                                              (0, u.tZ)(s.View, {
                                                className: "label",
                                              }),
                                              (0, u.tZ)(s.View, {
                                                className: "cont",
                                                children: (0, u.tZ)(s.Image, {
                                                  className: "blicense",
                                                  src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/yingyezhizhao@3x.webp",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              o &&
                                (0, u.BX)(s.View, {
                                  className: "book-botm",
                                  children: [
                                    (0, u.tZ)(s.View, {
                                      className: "cont",
                                      children: (0, u.tZ)(s.View, {
                                        className: "price color-red",
                                        children: n.salePrice,
                                      }),
                                    }),
                                    (0, u.tZ)(s.Button, {
                                      className: "btn-book ticket-btn-red",
                                      id: "ALBV",
                                      onClick: this.props.goToBook,
                                      "data-resource": n,
                                      children: "立即预订",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                      })
                    );
                  },
                },
              ]),
              n
            );
          })(c.default.Component);
      },
      36318: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return p;
          },
        });
        var o = n(57042),
          r = n(24460),
          i = n(21867),
          a = n(86066),
          c = n(52500),
          s = n(71515),
          u = (n(92954), n(18783)),
          l = n(48813),
          p = (function (e) {
            (0, i.Z)(n, e);
            var t = (0, a.Z)(n);
            function n() {
              return (0, o.Z)(this, n), t.apply(this, arguments);
            }
            return (
              (0, r.Z)(n, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.data || {},
                      t = e.couponStyle,
                      n = e.popCouponList,
                      o = e.isLogin;
                    return (0, l.BX)(s.Block, {
                      children: [
                        (0, l.tZ)(s.View, { className: "pop-mask active" }),
                        (0, l.BX)(s.View, {
                          className: "pop-mid pop-coupon",
                          children: [
                            (0, l.tZ)(s.View, {
                              className: "pop-coupon-hd",
                              style:
                                "background: url(" +
                                (t.couponBgImage ||
                                  "https://images3.c-ctrip.com/ztrip/attractionTicket/couponBgTitleNew.png") +
                                ") no-repeat;background-size: cover;",
                            }),
                            (0, l.BX)(s.View, {
                              className: "pop-coupon-bd",
                              style:
                                "background: " +
                                ((t.couponBgColor && t.couponBgColor[0]) ||
                                  "#FF1A25"),
                              children: [
                                (0, l.tZ)(s.View, {
                                  className: "pop-coupon-list",
                                  children: (n || []).map(function (e, t) {
                                    return (0,
                                    l.tZ)(s.Block, { children: (0, l.BX)(s.View, { className: "item", children: [(0, l.tZ)(s.View, { className: "price", children: e.price }), (0, l.BX)(s.View, { className: "cont", children: [(0, l.tZ)(s.View, { className: "tit", children: e.promotionTitle }), (0, l.tZ)(s.View, { className: "txt", children: e.promotionDes })] })] }) }, "idx");
                                  }),
                                }),
                                (0, l.BX)(s.View, {
                                  style:
                                    "position:relative;margin-top:" +
                                    (n.length > 2
                                      ? n.length > 3
                                        ? "40rpx"
                                        : "20rpx"
                                      : "0"),
                                  children: [
                                    (0, l.tZ)(s.Image, {
                                      src:
                                        t.couponBtnImage ||
                                        "https://images3.c-ctrip.com/ztrip/attractionTicket/receiveCouponBtn.png",
                                      className: "receive-btn-wrap",
                                    }),
                                    (0, l.tZ)(s.View, {
                                      children: o
                                        ? (0, l.tZ)(s.Button, {
                                            className: "btn-get",
                                            id: "ALBe",
                                            onClick: this.props.receiveRequest,
                                            children: "立即领取",
                                          })
                                        : (0, l.tZ)(s.Button, {
                                            className: "btn-get",
                                            id: "ALBd",
                                            onClick: function () {
                                              u.ZP.doLogin();
                                            },
                                            children: "立即领取",
                                          }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.tZ)(s.Text, {
                              className: "ifont-closed iconfont",
                              id: "ALBf",
                              onClick: this.props.closePop,
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                },
              ]),
              n
            );
          })(c.default.Component);
      },
      65444: function (e, t) {
        t.Z = {
          repalceCharCode: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = e
                .replace(/\&amp\;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, ",");
            return (t = (t = (t = (t = (t = (t = t.replace(
              /&#x20;/g,
              ""
            )).replace(/&#x0A;/g, "\n")).replace(/&#x2F;/g, "/")).replace(
              /&#165;/g,
              "¥"
            )).replace(/&#160;/g, " ")).replace(/(amp;)+/g, ""));
          },
          isOverflow: function (e, t, n) {
            if (!t) return !1;
            var o = 0,
              r = 0,
              i = !1,
              a = t.split("\n\n");
            return (
              2 * (r = a.length) - 1 > n
                ? (i = !0)
                : a.forEach(function (t) {
                    if ((o > 0 && (r++, (o = 0)), r > n)) i = !0;
                    else
                      for (var a = 0; a < t.length; a++)
                        if (
                          (t.charCodeAt(a) > 127 || 94 === t.charCodeAt(a)
                            ? (o += 2)
                            : o++,
                          o >= e && (r++, (o -= e)),
                          r > n)
                        ) {
                          i = !0;
                          break;
                        }
                  }),
              i
            );
          },
        };
      },
    },
  ]);
})();
