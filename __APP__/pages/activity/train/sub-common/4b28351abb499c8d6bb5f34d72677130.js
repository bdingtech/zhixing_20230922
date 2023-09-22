!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [82600],
    {
      52690: function (e, n, s) {
        s(92954), s(52500);
        var o = s(71515),
          a = s(48813);
        n.Z = function (e) {
          var n = e.goldFingerInfo,
            s = void 0 === n ? {} : n,
            i = e.grabSpeedLevelInfo,
            t = void 0 === i ? {} : i,
            c = e.accelerateStatusInfo,
            r = void 0 === c ? {} : c,
            l = e.showGoldFingerPopup,
            d = void 0 === l ? function () {} : l,
            g = e.isTieyou,
            u = e.desc,
            w = "",
            f = r && r.statusCode;
          100 !== f && 200 !== f && (w = r.statusDesc);
          var p = t.speedLeveldesc || w;
          return (
            g && (p = (p || "").replace("加速包", "抢票券")),
            console.warn("speedLeveldesc", p),
            (0, a.tZ)(o.View, {
              className: "train-robshare-gold-finger-banner",
              children: (0, a.tZ)(o.View, {
                className: "speed-target",
                children: (0, a.BX)(o.View, {
                  className: "cont",
                  children: [
                    u && (0, a.tZ)(o.View, { className: "desc", children: u }),
                    s &&
                      s.goldFingerToast &&
                      1 === s.goldFingerStatus &&
                      (0, a.BX)(o.View, {
                        className: "btn-gold-use",
                        id: "APAX",
                        onClick: d,
                        children: [
                          "使用金手指",
                          (0, a.tZ)(o.Text, {
                            className: "ifont-arr iconfont",
                          }),
                        ],
                      }),
                    s &&
                      s.goldFingerToast &&
                      0 === s.goldFingerStatus &&
                      (0, a.BX)(o.View, {
                        className: "txt-know",
                        id: "APAY",
                        onClick: d,
                        children: [
                          "了解金手指",
                          (0, a.tZ)(o.Text, {
                            className: "ifont-arr iconfont",
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            })
          );
        };
      },
    },
  ]);
})();
