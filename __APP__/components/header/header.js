"use strict";
"use strict";
var t =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a)
          Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
      }
      return t;
    },
  e = (function (t) {
    return t && t.__esModule ? t : { default: t };
  })(require("../../utils/systemInfo.js"));
Component({
  properties: {
    title: {
      type: String,
      value: "",
      observer: function (t) {
        this.setData({ title: t });
      },
    },
    titleStyle: {
      type: Object,
      observer: function (t) {
        this.setTitleStyle(t);
      },
    },
    backCount: {
      type: Number,
      observer: function (t) {
        this.backCount = t;
      },
    },
    bgc: {
      type: Object,
      observer: function (t) {
        this.setBgc(t);
      },
    },
    pageState: {
      type: String,
      observer: function (t) {
        this.setData({ pageState: t });
      },
    },
  },
  data: {
    statusBarHeight: 60,
    fontsize: 16,
    backgroundColor: "#fff",
    title: "",
    isIOS: e.default.globalData.isIOS,
  },
  lifetimes: {
    attached: function () {
      this.showNavigation();
    },
  },
  methods: {
    showNavigation: function () {
      var t = e.default.globalData.statusBarHeight,
        a = e.default.globalData.titleBarHeight,
        i = e.default.globalData.totalTopHeight;
      this.triggerEvent("totalBarHeight", i);
      var o = { statusBarHeight: t, titleBarHeight: a };
      this.setData(o), this.setTitleStyle(), this.setBgc();
    },
    setTitleStyle: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      wx.setNavigationBarColor(
        t({ frontColor: "#000000", backgroundColor: "#ffffff" }, e)
      );
    },
    setBgc: function (e) {
      wx.setBackgroundColor(
        t(
          { backgroundColorTop: "#ffffff", backgroundColorBottom: "#ffffff" },
          e
        )
      );
    },
    navigatorBack: function () {
      var t = this.data.title;
      "驾车路线详情" === t || "步行路线详情" === t
        ? (this.triggerEvent("routeDetailVisible", !1),
          this.setData({ title: "路线规划" }))
        : "公交详情" === t && "lineDetail" === this.data.pageState
        ? this.triggerEvent("pageState", "mapView")
        : wx.navigateBack({ delta: this.backCount || 1 });
    },
  },
});
