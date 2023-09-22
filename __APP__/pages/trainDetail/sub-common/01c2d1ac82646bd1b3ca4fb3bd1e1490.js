!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [87577],
    {
      69817: function (i, o, e) {
        var n = e(90129),
          t = e(52500),
          a = e(92954),
          d = e.n(a),
          s = e(71515),
          l = e(34229),
          r = e(48813);
        o.Z = function (i) {
          var o = i.src,
            e = void 0 === o ? "" : o,
            a = i.visible,
            c = i.onFinish,
            u = void 0 === c ? function () {} : c,
            v = (0, t.useState)(null),
            p = (0, n.Z)(v, 2),
            f = p[0],
            h = p[1],
            w = (0, t.useState)(20),
            Z = (0, n.Z)(w, 2),
            m = Z[0],
            b = Z[1];
          if (!a) return (0, r.tZ)(r.HY, {});
          return (0, r.BX)(l.ZtActivityPop, {
            show: a,
            isShowClose: !1,
            className: "ad-video-pop",
            children: [
              (0, r.tZ)(s.Video, {
                id: "ad-video",
                className: "video",
                src: e,
                onEnded: u,
                controls: !1,
                onTimeUpdate: function (i) {
                  var o,
                    e,
                    n =
                      (null == i || null === (o = i.detail) || void 0 === o
                        ? void 0
                        : o.currentTime) || 1,
                    t =
                      (null == i || null === (e = i.detail) || void 0 === e
                        ? void 0
                        : e.duration) || 100;
                  b(Math.floor(20 * (1 - n / t)));
                },
                onProgress: function () {
                  if (!f) {
                    var i = d().createVideoContext("ad-video");
                    h(i), i.play();
                  }
                },
              }),
              (0, r.tZ)(s.CoverView, {
                className: "timeout",
                children: m + "s",
              }),
            ],
          });
        };
      },
    },
  ]);
})();
