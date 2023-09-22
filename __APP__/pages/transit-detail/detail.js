"use strict";
"use strict";
function t(t) {
  return t && t.__esModule ? t : { default: t };
}
function e(t) {
  return function () {
    var e = t.apply(this, arguments);
    return new Promise(function (t, a) {
      function n(r, i) {
        try {
          var s = e[r](i),
            o = s.value;
        } catch (t) {
          return void a(t);
        }
        if (!s.done)
          return Promise.resolve(o).then(
            function (t) {
              n("next", t);
            },
            function (t) {
              n("throw", t);
            }
          );
        t(o);
      }
      return n("next");
    });
  };
}
var a =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var n in a)
          Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
      }
      return t;
    },
  n = t(require("../../presenters/TransitRoutePlanCloudPresenter.js")),
  r = require("../../libs/throttle-debounc"),
  i = t(require("../../utils/systemInfo")),
  s = require("../../models/RequestAPI"),
  o = require("../../utils/icon"),
  u = require("../../libs/runtime"),
  l = {
    data: {
      CDN_PATH: i.default.globalData.CDN_PATH,
      title: "公交详情",
      pageState: "mapView",
      indicatorDots: !0,
      vertical: !1,
      autoplay: !1,
      duration: 300,
      transitList: null,
      currentPlan: null,
      currentPlanIndex: 0,
      bottomPanelHeight: 50,
      swiperHeight: 130,
      loadingTransitPlan: !0,
      scrollTop: 0,
      bounds: [],
      markers: [],
      isIPhoneX: i.default.globalData.isIPhoneX,
      logo: o.TENCENTMAPLOGO,
    },
    onShow: (function () {
      var t = e(
        u.mark(function t() {
          return u.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (t.next = 3),
                      s.requestAPI.sendPv({
                        referer: i.default.globalData.referer,
                      })
                    );
                  case 3:
                    s.requestAPI.sendModePv("transitDetail"), (t.next = 9);
                    break;
                  case 6:
                    (t.prev = 6), (t.t0 = t.catch(0)), console.log(t.t0);
                  case 9:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
            [[0, 6]]
          );
        })
      );
      return function () {
        return t.apply(this, arguments);
      };
    })(),
    onLoad: function (t) {
      var e = this,
        a = s.requestAPI.getKey();
      this.setData({ subkey: a, mapShow: !0 }),
        (this.endInfo = JSON.parse(t.end)),
        (this.startInfo = JSON.parse(t.start));
      var o = t.index || 0,
        u = t.policy || "LEAST_TIME",
        l = i.default.globalData.themeColor;
      this.setData({
        statusBarHeight: i.default.globalData.statusBarHeight,
        titleBarHeight: i.default.globalData.titleBarHeight,
        currentPlanIndex: o,
        policy: u,
        latitude: this.endInfo.latitude,
        longitude: this.endInfo.longitude,
        themeColor: l,
      }),
        (this.map = wx.createMapContext("transitMap")),
        (this.transitRoutePlanPresenter = new n.default(this, {
          currentPlanIndex: o,
        })),
        this.loadTransitPlan(),
        (this.debounceSwitchPlan = (0, r.debounce)(300, function (t) {
          e.transitRoutePlanPresenter.switchPlan(t);
        }));
    },
    onUnload: function () {
      this.transitRoutePlanPresenter.rtTimeout &&
        clearInterval(this.transitRoutePlanPresenter.rtTimeout);
    },
    setLoading: function () {
      this.setData({ loadingTransitPlan: !0 });
    },
    setStatus: function (t) {
      t || this.setData({ loadingTransitPlan: !1 });
    },
    loadTransitPlan: function () {
      this.transitRoutePlanPresenter.transit({
        start: this.startInfo,
        end: this.endInfo,
        policy: this.data.policy,
      });
    },
    onPageState: function (t) {
      this.setData({ pageState: t.detail });
    },
    setTransitSuccess: function (t) {
      "mapView" === this.data.pageState &&
        t.bounds &&
        this.map.includePoints({ padding: [90, 90, 90, 90], points: t.bounds }),
        this.setData(t, function () {});
    },
    setRtBusesData: function (t) {
      var n = this;
      return e(
        u.mark(function e() {
          var r;
          return u.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (n.setData({ rtData: t }), !t.latitude || !t.longitude)
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (
                      (e.next = 4),
                      s.requestAPI.geocoder({
                        location: t.latitude + "," + t.longitude,
                      })
                    );
                  case 4:
                    (r = e.sent),
                      n.setData({
                        rtData: a({}, t, {
                          city: r.data.result.ad_info.city,
                          cityCode: r.data.result.ad_info.city_code.slice(3),
                        }),
                      });
                  case 6:
                  case "end":
                    return e.stop();
                }
            },
            e,
            n
          );
        })
      )();
    },
    changePageState: function (t) {
      var e = this,
        a = t.currentTarget.dataset.pagestate;
      this.setData({ pageState: a }, function () {
        "mapView" === a &&
          e.data.bounds &&
          e.map.includePoints({
            padding: [70, 70, 70, 70],
            points: e.data.bounds,
          });
      });
    },
    onSwiperChange: function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.detail ? t.detail.current : 0;
      this.setData({ scrollTop: 0 }),
        e !== this.data.currentPlanIndex &&
          this.transitRoutePlanPresenter.switchPlan(e);
    },
    toggleStation: function (t) {
      var e = t.currentTarget.dataset.stepindex,
        n = a({}, this.data.currentPlan);
      if (void 0 !== e && n) {
        var r = n.steps[e];
        (r = a({}, r, { showStation: !r.showStation })),
          (n.steps[e] = r),
          this.setData({ currentPlan: n });
      }
    },
    onGetTotalBarHeight: function (t) {
      this.setData({ totalBarHeight: t.detail });
    },
  };
Page(l);
