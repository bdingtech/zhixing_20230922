"use strict";
"use strict";
function t(t) {
  return function () {
    var e = t.apply(this, arguments);
    return new Promise(function (t, r) {
      function n(i, a) {
        try {
          var s = e[i](a),
            o = s.value;
        } catch (t) {
          return void r(t);
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
var e = require("../../config/appConfig"),
  r = (function (t) {
    return t && t.__esModule ? t : { default: t };
  })(require("../../utils/systemInfo")),
  n = require("../../models/RequestAPI"),
  i = require("../../libs/runtime");
Component({
  properties: {
    routeType: {
      type: String,
      observer: function (t) {
        this.setData({ currentType: t });
      },
    },
    startPoint: { type: Object },
    endPoint: { type: Object },
  },
  data: {
    CDN_PATH: e.CDN_PATH,
    routeTypes: [
      {
        type: "driving",
        text: "驾车",
        normalImg: "icon-route_ic_car",
        activeImg: "icon-route_ic_car",
      },
      {
        type: "transit",
        text: "公交",
        normalImg: "icon-route_ic_bus",
        activeImg: "icon-route_ic_bus",
      },
      {
        type: "walking",
        text: "步行",
        normalImg: "icon-route_ic_walk",
        activeImg: "icon-route_ic_walk",
      },
    ],
    currentType: { type: String, value: "" },
  },
  lifetimes: {
    ready: function () {
      var t = r.default.globalData.themeColor;
      this.setData({ themeColor: t });
    },
  },
  pageLifetimes: {
    show: (function () {
      var e = t(
        i.mark(function t() {
          var e, a;
          return i.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((e = getCurrentPages()),
                      (a = e[e.length - 1]).data.selectedPosition)
                    ) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return");
                  case 4:
                    return (
                      "start" === this.searchType &&
                        this.triggerEvent(
                          "startendchange",
                          {
                            startPoint: a.data.selectedPosition,
                            endPoint: this.properties.endPoint,
                          },
                          {}
                        ),
                      "end" === this.searchType &&
                        this.triggerEvent(
                          "startendchange",
                          {
                            startPoint: this.properties.startPoint,
                            endPoint: a.data.selectedPosition,
                          },
                          {}
                        ),
                      a && a.setData({ selectedPosition: null }),
                      (t.prev = 7),
                      (t.next = 10),
                      n.requestAPI.sendPv({
                        referer: r.default.globalData.referer,
                      })
                    );
                  case 10:
                    t.next = 15;
                    break;
                  case 12:
                    (t.prev = 12), (t.t0 = t.catch(7)), console.log(t.t0);
                  case 15:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
            [[7, 12]]
          );
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
  },
  methods: {
    onExchangeRoute: function () {
      this.triggerEvent("exchange");
    },
    onChangeType: function (t) {
      var e = t.currentTarget.dataset.type;
      e !== this.data.currentType &&
        (this.setData({ currentType: e }),
        this.triggerEvent("changeRouteType", { type: e }));
    },
    onClickStart: function () {
      (this.searchType = "start"),
        wx.navigateTo({
          url:
            "../../pages/search/search?searchType=start&startPoint=" +
            JSON.stringify(this.data.startPoint) +
            "&endPoint=" +
            JSON.stringify(this.data.endPoint),
        });
    },
    onClickEnd: function () {
      (this.searchType = "end"),
        wx.navigateTo({
          url:
            "../../pages/search/search?searchType=end&startPoint=" +
            JSON.stringify(this.data.startPoint) +
            "&endPoint=" +
            JSON.stringify(this.data.endPoint),
        });
    },
  },
});
