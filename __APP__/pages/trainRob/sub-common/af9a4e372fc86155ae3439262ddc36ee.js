!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [87032],
    {
      85727: function (e, n, i) {
        var t = i(92954),
          o = i.n(t);
        var h = o().getSystemInfoSync() || {},
          r = 48,
          s = {
            width: 87,
            height: 32,
            left: 281,
            top: 24,
            right: 368,
            bottom: 56,
          };
        try {
          (r =
            (s = o().getMenuButtonBoundingClientRect()).height +
            2 * (s.top - ((h && h.statusBarHeight) || 0))),
            h.model && -1 !== h.model.indexOf("iPhone") && (r = 44);
        } catch (e) {
          console.error("getMenu Error");
        }
        var a = {
          brand: h.brand,
          model: h.model,
          system: h.system,
          pixelRatio: h.pixelRatio,
          screenWidth: h.screenWidth,
          screenHeight: h.screenHeight,
          windowWidth: h.windowWidth,
          windowHeight: h.windowHeight,
          version: h.version,
          statusBarHeight: h.statusBarHeight,
          titleBarHeight: r,
          platform: h.platform,
          language: h.language,
          fontSizeSetting: h.fontSizeSetting,
          SDKVersion: h.SDKVersion,
          isIPhoneX: (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              n = e || "",
              i = n.slice(n.indexOf("<") + 1, n.indexOf(">")),
              t = [
                "iPhone10,3",
                "iPhone10,6",
                "iPhone11,2",
                "iPhone11,4",
                "iPhone11,6",
                "iPhone11,8",
                "iPhone12,1",
                "iPhone12,3",
                "iPhone12,5",
                "iPhone13,1",
                "iPhone13,2",
                "iPhone13,3",
                "iPhone13,4",
              ];
            return t.some(function (e) {
              return e === i;
            });
          })(h.model),
          networkType: "",
          isBaiduMap: !1,
          menuInfo: s,
        };
        n.ZP = a;
      },
    },
  ]);
})();
