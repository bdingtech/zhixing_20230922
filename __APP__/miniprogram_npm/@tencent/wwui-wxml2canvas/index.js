"use strict";
"use strict";
var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(
    require("../../../@babel/runtime/regenerator")
  ),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("./xml-parser"),
  r = require("./widget").Widget,
  n = require("./draw").Draw,
  i = require("./utils").compareVersion;
Component({
  properties: { forceUseOldCanvas: { type: Boolean, value: !1 } },
  data: { isInit: !1, use2dCanvas: !1, width: 0, height: 0 },
  methods: {
    init: function () {
      var e = this,
        t = wx.getSystemInfoSync(),
        a = t.SDKVersion,
        r = t.pixelRatio,
        n = i(a, "2.9.2") >= 0 && !this.data.forceUseOldCanvas;
      return (
        (this.dpr = r),
        new Promise(function (t, a) {
          e.setData({ isInit: !0, use2dCanvas: n }, function () {
            n
              ? e
                  .createSelectorQuery()
                  .select("#".concat("xom-helper-canvas"))
                  .fields({ node: !0, size: !0 })
                  .exec(function (a) {
                    var r = a[0].node;
                    (e.helperCtx = r.getContext("2d")), t();
                  })
              : ((e.helperCtx = wx.createCanvasContext("xom-helper-canvas", e)),
                t());
          });
        })
      );
    },
    buildCanvas: function (e, t) {
      var a = this;
      return new Promise(function (r, n) {
        a.setData({ width: e, height: t }, function () {
          a.data.use2dCanvas
            ? a
                .createSelectorQuery()
                .select("#".concat("weui-canvas"))
                .fields({ node: !0, size: !0 })
                .exec(function (e) {
                  var t = e[0].node,
                    n = t.getContext("2d");
                  (t.width = e[0].width * a.dpr),
                    (t.height = e[0].height * a.dpr),
                    n.scale(a.dpr, a.dpr),
                    (a.ctx = n),
                    (a.canvas = t),
                    r();
                })
            : ((a.ctx = wx.createCanvasContext("weui-canvas", a)), r());
        });
      });
    },
    renderToCanvas: function (n) {
      var i = this;
      return t(
        e.default.mark(function t() {
          var s, o, u, c, d, h;
          return e.default.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (s = n.wxml),
                    (o = n.style),
                    (u = a(s)),
                    (c = u.root),
                    (d = new r(c, o)),
                    (h = d.init()),
                    (i.boundary = {
                      top: h.layoutBox.top,
                      left: h.layoutBox.left,
                      width: h.computedStyle.width,
                      height: h.computedStyle.height,
                    }),
                    (e.next = 7),
                    i.buildCanvas(i.boundary.width, i.boundary.height)
                  );
                case 7:
                  return e.abrupt("return", i.readyToRender(h));
                case 8:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )();
    },
    readyToRender: function (a) {
      var r = this;
      return t(
        e.default.mark(function t() {
          var i, s, o, u;
          return e.default.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((i = r.ctx),
                    (s = r.canvas),
                    !(o = r.data.use2dCanvas) || s)
                  ) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    Promise.reject(
                      new Error(
                        "renderToCanvas: fail canvas has not been created"
                      )
                    )
                  );
                case 5:
                  return (
                    i.clearRect(0, 0, r.data.width, r.data.height),
                    (u = new n(i, s, o)),
                    (e.next = 9),
                    u.drawNode(a)
                  );
                case 9:
                  if (o) {
                    e.next = 12;
                    break;
                  }
                  return (e.next = 12), r.canvasDraw(i);
                case 12:
                  return e.abrupt("return", Promise.resolve(a));
                case 13:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )();
    },
    canvasDraw: function (e, t) {
      return new Promise(function (a) {
        e.draw(t, function () {
          a();
        });
      });
    },
    canvasToTempFilePath: function () {
      var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = this.data.use2dCanvas;
      return new Promise(function (r, n) {
        var i = e.boundary,
          s = i.top,
          o = i.left,
          u = i.width,
          c = i.height,
          d = {
            x: o,
            y: s,
            width: u,
            height: c,
            destWidth: u * e.dpr,
            destHeight: c * e.dpr,
            canvasId: "weui-canvas",
            fileType: t.fileType || "png",
            quality: t.quality || 1,
            success: r,
            fail: n,
          };
        a && (delete d.canvasId, (d.canvas = e.canvas)),
          wx.canvasToTempFilePath(d, e);
      });
    },
  },
});
