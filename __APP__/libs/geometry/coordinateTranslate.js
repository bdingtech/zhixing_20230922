"use strict";
"use strict";
function t(t, a) {
  if (!(t instanceof a))
    throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var a = (function () {
  function t(t, a) {
    for (var n = 0; n < a.length; n++) {
      var e = a[n];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        "value" in e && (e.writable = !0),
        Object.defineProperty(t, e.key, e);
    }
  }
  return function (a, n, e) {
    return n && t(a.prototype, n), e && t(a, e), a;
  };
})();
exports.CoordinateTranslate = (function () {
  function n(a, e, i, r, o, h, s) {
    t(this, n),
      (this.latitude = a),
      (this.longitude = e),
      (this.speed = i || 0),
      (this.heading = r),
      (this.accuracy = o),
      (this.timestamp = h),
      (this.altitude = s),
      (this.pos = []),
      (this.a = { x: 128, y: 128 }),
      (this.b = 256 / 360),
      (this.c = 256 / (2 * Math.PI)),
      (this.d = !0);
  }
  return (
    a(n, [
      {
        key: "clamp",
        value: function (t, a, n) {
          return Math.max(a, Math.min(n, t));
        },
      },
      {
        key: "fromLatLngToPoint",
        value: function (t, a) {
          var n = { x: 0, y: 0 },
            e = this.a;
          n.x = e.x + t * this.b;
          var i = this.clamp(
            Math.sin((a * Math.PI) / 180),
            -(1 - 1e-15),
            1 - 1e-15
          );
          return (n.y = e.y + 0.5 * Math.log((1 + i) / (1 - i)) * -this.c), n;
        },
      },
      {
        key: "fromPointToLatLng",
        value: function (t, a) {
          var n = this.a,
            e =
              (180 *
                (2 * Math.atan(Math.exp((a - n.y) / -this.c)) - Math.PI / 2)) /
              Math.PI;
          return { x: (t - n.x) / this.b, y: e };
        },
      },
      {
        key: "latLngToCoord",
        value: function (t, a, n) {
          var e = this.fromLatLngToPoint(t, a);
          if (e) {
            var i = n || 18,
              r = Math.pow(2, i);
            (e.x *= r), (e.y *= r);
          }
          return e;
        },
      },
      {
        key: "coordToLatLng",
        value: function (t, a, n) {
          var e = n || 18,
            i = Math.pow(2, e),
            r = { x: t / i, y: a / i };
          return this.fromPointToLatLng(r.x, r.y);
        },
      },
      {
        key: "mercator2latLng",
        value: function (t, a) {
          (t = (t / 20037508.34) * 180),
            (a = (a / 20037508.34) * 180),
            (a =
              (180 / Math.PI) *
              (2 * Math.atan(Math.exp((a * Math.PI) / 180)) - Math.PI / 2));
          var n = {};
          return (n.x = t), (n.y = a), n;
        },
      },
      {
        key: "latLng2Mercator",
        value: function (t, a) {
          (t = (20037508.34 * t) / 180),
            (a =
              (20037508.34 *
                (a =
                  Math.log(Math.tan(((90 + a) * Math.PI) / 360)) /
                  (Math.PI / 180))) /
              180);
          var n = {};
          return (n.x = t), (n.y = a), n;
        },
      },
      {
        key: "getCollideIndex",
        value: function () {
          return this.collideIndex;
        },
      },
      {
        key: "intersect",
        value: function (t) {
          for (var a = Array.prototype.slice.call(t), n = 0; n < a.length; n++)
            this.pos.push(a[n].id);
          for (; a.length > 1; ) {
            var e = a.shift();
            this.poiGland(e, a);
          }
        },
      },
      {
        key: "poiGland",
        value: function (t, a) {
          for (var n = this.getBounds(t), e = 0; e < a.length; e++) {
            var i = a[e];
            if (!i.bad) {
              var r = this.getBounds(i);
              if (this.impact(n, r)) {
                i.bad = !0;
                var o = i.id,
                  h = this.pos.indexOf(o);
                h > -1 && this.pos.splice(h, 1);
              }
            }
          }
          var s = [];
          (s = this.pos.slice()), (this.collideIndex = s);
        },
      },
      {
        key: "impact",
        value: function (t, a) {
          var n = t.x <= a.x ? a.x : t.x,
            e = t.y <= a.y ? a.y : t.y;
          return (
            n >= t.x &&
            n <= t.x + t.w &&
            e >= t.y &&
            e <= t.y + t.h &&
            n >= a.x &&
            n <= a.x + a.w &&
            e >= a.y &&
            e <= a.y + a.h
          );
        },
      },
      {
        key: "getBounds",
        value: function (t) {
          var a = {};
          return (
            (a.x = t.min.x),
            (a.y = t.min.y),
            (a.w = Math.abs(t.max.x - t.min.x)),
            (a.h = Math.abs(t.max.y - t.min.y)),
            a
          );
        },
      },
      {
        key: "judgeRect",
        value: function (t, a) {
          var n = t.max,
            e = t.min,
            i = a.max,
            r = a.min,
            o = e.x - n.x,
            h = e.y - n.y,
            s = r.x - i.x,
            u = r.y - i.y,
            y = o / 2,
            c = h / 2,
            l = s / 2,
            x = u / 2,
            M = { x: n.x + o, y: n.y + h },
            v = { x: e.x + s, y: e.y + u };
          return (
            Math.abs(v.x - M.x) <= Math.abs(y) + Math.abs(l) &&
            Math.abs(v.y - M.y) <= Math.abs(c) + Math.abs(x)
          );
        },
      },
      {
        key: "distanceTo",
        value: function (t, a) {
          var n = [0, 0, 0],
            e = [0, 0, 0],
            i = 0,
            r = t.x,
            o = t.y,
            h = a.x,
            s = a.y;
          (r *= 0.01745329251994329),
            (o *= 0.01745329251994329),
            (h *= 0.01745329251994329),
            (s *= 0.01745329251994329);
          var u = Math.sin(r),
            y = Math.sin(o),
            c = Math.cos(r),
            l = Math.cos(o),
            x = Math.sin(h),
            M = Math.sin(s),
            v = Math.cos(h),
            f = Math.cos(s);
          return (
            (n[0] = l * c),
            (n[1] = l * u),
            (n[2] = y),
            (e[0] = f * v),
            (e[1] = f * x),
            (e[2] = M),
            (i = Math.sqrt(
              (n[0] - e[0]) * (n[0] - e[0]) +
                (n[1] - e[1]) * (n[1] - e[1]) +
                (n[2] - e[2]) * (n[2] - e[2])
            )),
            12742001.5798544 * Math.asin(i / 2)
          );
        },
      },
      {
        key: "headingTo",
        value: function (t, a) {
          var n = a.x - t.x,
            e = a.y - t.y,
            i = (180 * Math.atan2(n, e)) / Math.PI;
          return i >= 360 ? (i -= 360) : i < 0 && (i += 360), i;
        },
      },
    ]),
    n
  );
})();
