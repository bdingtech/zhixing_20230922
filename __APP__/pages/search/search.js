"use strict";
"use strict";
function t(t) {
  return function () {
    var e = t.apply(this, arguments);
    return new Promise(function (t, a) {
      function n(i, o) {
        try {
          var s = e[i](o),
            r = s.value;
        } catch (t) {
          return void a(t);
        }
        if (!s.done)
          return Promise.resolve(r).then(
            function (t) {
              n("next", t);
            },
            function (t) {
              n("throw", t);
            }
          );
        t(r);
      }
      return n("next");
    });
  };
}
var e =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var n in a)
          Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
      }
      return t;
    },
  a = require("../../models/RequestAPI"),
  n = (function (t) {
    return t && t.__esModule ? t : { default: t };
  })(require("../../utils/systemInfo")),
  i = require("../../utils/icon"),
  o = require("../../libs/runtime");
Page({
  data: {
    title: "起终点选择",
    sdplaceholder: "start",
    splaceholder: "请输入起点",
    dplaceholder: "请输入终点",
    suggestionData: [],
    searchData: [],
    suggestionDataEmpty: !1,
    inputChange: !0,
    keyword: "",
    endPoint: {},
    startPoint: {},
    historyPoi: [],
    clearHistoryBtn: !0,
    searchValue: "",
    clearInput: !1,
    logo: i.TENCENTMAPLOGO,
    scrollHeight: 0,
    searchContentType: "suggestion",
    sugPageIndex: 1,
    searchPageIndex: 1,
    isIPhoneX: n.default.globalData.isIPhoneX,
  },
  onLoad: function (t) {
    var e = this;
    if (t && "start" === t.searchType && t.startPoint) {
      var a = {};
      "string" == typeof t.startPoint && (a = JSON.parse(t.startPoint)),
        "我的位置" === a.name
          ? this.setData({
              sdplaceholder: t.searchType,
              searchValue: "",
              inputChange: !1,
              searchContentType: "history",
            })
          : (this.setData({
              sdplaceholder: t.searchType,
              searchValue: a.name,
              keyword: a.name,
              inputChange: !0,
            }),
            this.onInputChange({}, a.name));
    }
    if (t && "end" === t.searchType && t && t.endPoint) {
      var n = {};
      "string" == typeof t.endPoint && (n = JSON.parse(t.endPoint)),
        "我的位置" === n.name
          ? this.setData({
              sdplaceholder: t.searchType,
              searchValue: "",
              inputChange: !1,
              searchContentType: "history",
            })
          : (this.setData({
              sdplaceholder: t.searchType,
              searchValue: n.name,
              keyword: n.name,
              inputChange: !0,
            }),
            this.onInputChange({}, n.name));
    }
    t && t.startPoint && this.setData({ startPoint: t.startPoint }),
      t && t.endPoint && this.setData({ endPoint: t.endPoint }),
      wx.getStorage({
        key: "historyPoi",
        success: function (t) {
          e.setData({ historyPoi: t.data, clearHistoryBtn: !0 });
        },
        fail: function (t) {
          e.setData({ historyPoi: [], clearHistoryBtn: !1 });
        },
      });
  },
  onShow: (function () {
    var e = t(
      o.mark(function t() {
        var e, i;
        return o.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (e = n.default.globalData.themeColor),
                    (i = n.default.globalData.windowHeight - 52 - 45),
                    this.setData({ themeColor: e, scrollHeight: i }),
                    this._getCity(),
                    (t.prev = 4),
                    (t.next = 7),
                    a.requestAPI.sendPv({
                      referer: n.default.globalData.referer,
                    })
                  );
                case 7:
                  a.requestAPI.sendModePv("search"), (t.next = 13);
                  break;
                case 10:
                  (t.prev = 10), (t.t0 = t.catch(4)), console.log(t.t0);
                case 13:
                case "end":
                  return t.stop();
              }
          },
          t,
          this,
          [[4, 10]]
        );
      })
    );
    return function () {
      return e.apply(this, arguments);
    };
  })(),
  _getCity: function () {
    var t = this;
    a.requestAPI
      .getLocation()
      .then(function (e) {
        var n = { location: e.latitude + "," + e.longitude };
        a.requestAPI
          .getLocationDetail(n)
          .then(function (e) {
            if (
              e.data.result.address_component &&
              e.data.result.address_component.city
            ) {
              var a = e.data.result.address_component.city.replace("市", "");
              t.city = a;
            }
          })
          .catch(function (t) {
            console.log(t),
              wx.showModal({ title: "", content: "GPS信号弱，请稍后重试" });
          });
      })
      .catch(function (t) {
        console.log(t),
          wx.showModal({ title: "", content: "GPS信号弱，请稍后重试" });
      });
  },
  onInputChange: function (t, e) {
    var a = this;
    if (
      ((this.keyword = e || t.detail.value),
      void 0 === (t || t.detail.keyCode) &&
        ((this.keyword = ""),
        this.setData({
          searchValue: "",
          inputChange: !1,
          searchContentType: "history",
        })),
      "" !== this.keyword.trim())
    ) {
      if (this.keyword !== this.data.keyword || "undefined" !== e) {
        this.setData({
          keyword: this.keyword,
          clearInput: !1,
          searchContentType: "suggestion",
          sugPageIndex: 1,
          searchPageIndex: 1,
        });
        var n = {
          region: this.city || "",
          keyword: this.keyword,
          region_fix: 0,
          page_size: 20,
          page_index: this.data.sugPageIndex,
          output: "json",
        };
        this.timeout && clearTimeout(this.timeout),
          (this.timeout = setTimeout(function () {
            a._getSuggestions(n), (a.timeout = null);
          }, 200));
      }
    } else
      this.setData({
        keyword: "",
        suggestionData: [],
        inputChange: !1,
        sugPageIndex: 1,
        searchPageIndex: 1,
        searchContentType: "history",
      });
  },
  onSearch: function () {
    if ("" === this.data.keyword)
      return (
        this.setData({ searchData: [], inputChange: !1 }),
        void wx.showToast({ icon: "none", title: "请输入搜索内容" })
      );
    this.setData({ searchContentType: "search" });
    var t = {
      boundary: "region(" + this.city + ",1)",
      keyword: this.data.keyword,
      page_size: 20,
      page_index: this.data.searchPageIndex,
    };
    wx.showLoading({ title: "正在加载" }), this._getSearch(t);
  },
  _getSearch: function (t) {
    var e = this;
    a.requestAPI
      .getSearch(t)
      .then(function (t) {
        switch ((wx.hideLoading(), t.statusCode)) {
          case 200:
            var a = t.data.data;
            if (t.data.count <= 0)
              return void e.setData({
                inputChange: !0,
                suggestionDataEmpty: !0,
                searchContentType: "empty",
              });
            if (e.data.searchPageIndex <= 1)
              e.setData({
                inputChange: !0,
                searchData: a,
                suggestionDataEmpty: !1,
                searchContentType: "search",
              });
            else {
              for (
                var n = e.data.searchData.length,
                  i = {
                    inputChange: !0,
                    suggestionDataEmpty: !1,
                    searchContentType: "search",
                  },
                  o = 0;
                o < a.length;
                o++
              )
                i["searchData[" + (n + o) + "]"] = a[o];
              e.setData(i);
            }
            e.onLoad({});
        }
      })
      .catch(function (t) {
        wx.hideLoading(),
          wx.showToast({
            title: "网络异常请重试",
            icon: "none",
            image: "",
            duration: 1500,
            mask: !1,
          }),
          console.log(t);
      });
  },
  _getSuggestions: function (t) {
    var e = this;
    a.requestAPI
      .getSuggestions(t)
      .then(function (t) {
        switch ((wx.hideLoading(), t.statusCode)) {
          case 200:
            var a = t.data.data;
            if (t.data.count <= 0)
              return void e.setData({
                inputChange: !0,
                suggestionDataEmpty: !0,
                searchContentType: "empty",
              });
            if (e.data.sugPageIndex <= 1)
              e.setData({
                inputChange: !0,
                suggestionData: a,
                suggestionDataEmpty: !1,
                searchContentType: "suggestion",
              });
            else {
              for (
                var n = e.data.suggestionData.length,
                  i = {
                    inputChange: !0,
                    suggestionDataEmpty: !1,
                    searchContentType: "suggestion",
                  },
                  o = 0;
                o < a.length;
                o++
              )
                i["suggestionData[" + (n + o) + "]"] = a[o];
              e.setData(i);
            }
            e.onLoad({});
        }
      })
      .catch(function (t) {
        wx.hideLoading(),
          wx.showToast({
            title: "网络异常请重试",
            icon: "none",
            image: "",
            duration: 1500,
            mask: !1,
          }),
          console.log(t);
      });
  },
  onScrolltolower: function (t) {
    var e = this;
    (this.timeout = null),
      this.timeout && clearTimeout(this.timeout),
      (this.timeout = setTimeout(function () {
        if ("suggestion" === e.data.searchContentType) {
          if (e.data.sugPageIndex <= 5) {
            e.setData({ sugPageIndex: e.data.sugPageIndex + 1 }),
              wx.showLoading({ title: "正在加载" });
            var t = {
              region: e.city || "",
              keyword: e.data.keyword,
              region_fix: 0,
              page_size: 20,
              page_index: e.data.sugPageIndex,
              output: "json",
            };
            e._getSuggestions(t);
          }
        } else if (
          "search" === e.data.searchContentType &&
          e.data.searchPageIndex <= 5
        ) {
          e.setData({ searchPageIndex: e.data.searchPageIndex + 1 }),
            wx.showLoading({ title: "正在加载" });
          var a = {
            boundary: "region(" + e.city + ",1)",
            keyword: e.data.keyword,
            page_size: 20,
            page_index: e.data.searchPageIndex,
          };
          e._getSearch(a);
        }
      }, 200));
  },
  onClickListItem: function (t) {
    var e = {};
    if ("suggestion" === this.data.searchContentType) {
      var a = t.currentTarget.dataset.index;
      (e = this.data.suggestionData[a]), this._createHistoryItem(e);
    } else if ("search" === this.data.searchContentType) {
      var n = t.currentTarget.dataset.index;
      (e = this.data.searchData[n]), this._createHistoryItem(e);
    }
    var i = JSON.stringify({
      name: e.title,
      latitude: e.location.lat,
      longitude: e.location.lng,
      poiid: e.id,
    });
    this._backToIndex(i), this.setData({ clearHistoryBtn: !0 });
  },
  _createHistoryItem: function (t) {
    var e = this;
    this.data.historyPoi.length > 9 && this.data.historyPoi.pop(),
      this.data.historyPoi.forEach(function (a, n) {
        a.title === t.title && e.data.historyPoi.splice(n, 1);
      }),
      this.data.historyPoi.unshift(t),
      wx.setStorage({ key: "historyPoi", data: this.data.historyPoi });
  },
  onClickHistotyPoi: function (t) {
    var e = t.currentTarget.dataset.index,
      a = this.data.historyPoi[e],
      n = JSON.stringify({
        name: a.title,
        latitude: a.location.lat,
        longitude: a.location.lng,
        poiid: a.id,
      });
    this._backToIndex(n), this.setData({ clearHistoryBtn: !0 });
  },
  onClearHistory: function () {
    var t = this;
    wx.showModal({
      title: "",
      content: "确认清空全部历史记录？",
      success: function (e) {
        if (e.confirm)
          wx.removeStorage({
            key: "historyPoi",
            success: function (e) {
              (t.data.clearHistoryBtn = !1), t.onLoad({});
            },
          });
        else if (e.cancel) return;
      },
    });
  },
  onClearInput: function () {
    this.setData({
      searchValue: "",
      inputChange: !1,
      suggestionDataEmpty: !0,
      clearInput: !0,
      keyword: "",
      searchContentType: "history",
      sugPageIndex: 1,
      searchPageIndex: 1,
    });
  },
  onGetTotalBarHeight: function (t) {
    this.setData({ totalBarHeight: t.detail });
  },
  _backToIndex: function (t) {
    var a = getCurrentPages(),
      n = a[a.length - 2];
    n && n.setData({ selectedPosition: e({}, JSON.parse(t)) }),
      wx.navigateBack({ delta: 1 });
  },
  onSelectPoint: function () {
    var t = this;
    wx.showLoading({ title: "正在加载" }),
      wx.chooseLocation({
        success: function (e) {
          wx.hideLoading(),
            e ||
              wx.showModal({ title: "", content: "暂无查询结果，请稍后重试" });
          var a = e.latitude,
            n = e.longitude,
            i = "";
          -1 !== i.indexOf("qqmap_") &&
            (i = e.poiid && e.poiid.replace("qqmap_", ""));
          var o = JSON.stringify({
              name: e.name,
              latitude: a,
              longitude: n,
              poiid: i,
            }),
            s = {
              title: e.name,
              location: { lat: a, lng: n },
              address: e.address,
              id: i,
            };
          t._createHistoryItem(s), t._backToIndex(o);
        },
        fail: function (t) {
          wx.hideLoading();
        },
        complete: function () {
          wx.hideLoading();
        },
      });
  },
  onMyPoint: function () {
    var t = this;
    wx.getLocation({
      type: "wgs84",
      success: function (e) {
        var a = e.latitude,
          n = e.longitude,
          i = JSON.stringify({ name: "我的位置", latitude: a, longitude: n });
        t.isMyPoint("start", t.data.endPoint, i),
          t.isMyPoint("end", t.data.startPoint, i);
      },
      complete: function (t) {},
      fail: function (t) {
        wx.getSetting({
          success: function (t) {
            t.authSetting["scope.userLocation"]
              ? wx.showToast({ title: "GPS信号弱，请稍后重试" })
              : wx.showToast({
                  icon: "none",
                  title: "请允许腾讯位置服务路线规划获取您的定位",
                  duration: 1500,
                });
          },
        });
      },
    });
  },
  isMyPoint: function (t, e, a) {
    if (this.data.sdplaceholder === t) {
      if (("string" == typeof e && (e = JSON.parse(e)), "我的位置" === e.name))
        return (
          (e = JSON.stringify(e)),
          void wx.showToast({ icon: "", title: "起点与终点不能相同" })
        );
      this._backToIndex(a);
    }
  },
});
