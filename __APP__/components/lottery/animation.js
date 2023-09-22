"use strict";
"use strict";
module.exports = {
  init: function (t) {
    t.lottAnimation = function () {
      console.log("触发抽奖动效");
      var a = t.data.lottIndex,
        e = t.data.awardIndex[a];
      e++;
      var i = t;
      i.data.times[a] || (i.data.times[a] = 0),
        i.data.times[a]++,
        console.log("抽奖次数为", i.data.times[a]);
      var o = { isLotting: !0, isAnime: !0 };
      o["times[".concat(a, "]")] = i.data.times[a];
      var s = i.data.lottList[a].lott.gifts.length,
        n = s - 1;
      i.properties.widthRatio < 90 && (n = s - 1);
      var l = 5 * (s + 1) * i.data.times[a];
      (o["scrollLeft[".concat(a, "]")] = (l + e + n) * i.data.itemWidth),
        console.log("当前scrollLeft为", o["scrollLeft[".concat(a, "]")]),
        i.setData(o),
        (i.data.timer = setTimeout(function () {
          i.setData({ isAnime: !1, isLotting: !1 }),
            setTimeout(function () {
              e <= s &&
                (i.setData({ showGiftPop: !0 }),
                i.triggerEvent("layerChange", { show: !0 }));
            }, 1500),
            clearTimeout(i.data.timer);
        }, 1450));
    };
  },
};
