"use strict";
"use strict";
function t(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.GeoMetry = void 0);
var e = (function () {
    function t(t, e) {
      for (var a = 0; a < e.length; a++) {
        var n = e[a];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    return function (e, a, n) {
      return a && t(e.prototype, a), n && t(e, n), e;
    };
  })(),
  a = require("./coordinateTranslate");
exports.GeoMetry = (function () {
  function n() {
    t(this, n), this.init();
  }
  return (
    e(n, [
      {
        key: "init",
        value: function () {
          this.coordinateTranslate = new a.CoordinateTranslate();
        },
      },
      {
        key: "getLength",
        value: function (t, e) {
          var a = this.coordinateTranslate.latLng2Mercator(t[1], t[0]),
            n = this.coordinateTranslate.latLng2Mercator(e[1], e[0]);
          return Math.sqrt(
            (a.x - n.x) * (a.x - n.x) + (a.y - n.y) * (a.y - n.y)
          );
        },
      },
      {
        key: "latlngDistanceTo",
        value: function (t, e) {
          var a = { x: t.longitude, y: t.latitude },
            n = { x: e.longitude, y: e.latitude };
          return this.distanceTo(a, n);
        },
      },
      {
        key: "distanceTo",
        value: function (t, e) {
          var a = [0, 0, 0],
            n = [0, 0, 0],
            i = 0,
            r = t.x,
            o = t.y,
            s = e.x,
            l = e.y;
          (r *= 0.01745329251994329),
            (o *= 0.01745329251994329),
            (s *= 0.01745329251994329),
            (l *= 0.01745329251994329);
          var u = Math.sin(r),
            c = Math.sin(o),
            h = Math.cos(r),
            y = Math.cos(o),
            g = Math.sin(s),
            M = Math.sin(l),
            f = Math.cos(s),
            d = Math.cos(l);
          return (
            (a[0] = y * h),
            (a[1] = y * u),
            (a[2] = c),
            (n[0] = d * f),
            (n[1] = d * g),
            (n[2] = M),
            (i = Math.sqrt(
              (a[0] - n[0]) * (a[0] - n[0]) +
                (a[1] - n[1]) * (a[1] - n[1]) +
                (a[2] - n[2]) * (a[2] - n[2])
            )),
            12742001.5798544 * Math.asin(i / 2)
          );
        },
      },
      {
        key: "headingTo",
        value: function (t, e) {
          var a = e.x - t.x,
            n = e.y - t.y,
            i = (180 * Math.atan2(a, n)) / Math.PI;
          return i >= 360 ? (i -= 360) : i < 0 && (i += 360), i;
        },
      },
      {
        key: "getNearsetPoint",
        value: function (t, e, a) {
          var n = 1e5 * e[0],
            i = 1e5 * e[1],
            r = 1e5 * a[0],
            o = 1e5 * a[1],
            s = 1e5 * t[0],
            l = 1e5 * t[1],
            u = r - n,
            c = o - i,
            h = Math.sqrt(u * u + c * c),
            y = s - n,
            g = l - i,
            M = Math.sqrt(y * y + g * g),
            f = 0,
            d = 0,
            v = 0,
            p = 0,
            P = 0,
            b = 0,
            T = 0,
            x = [],
            j = {},
            k = 0;
          if (h < 1e-9)
            return M < 1e-9
              ? ((x[0] = e[0]),
                (x[1] = e[1]),
                (k = 0),
                (j.minDist = k),
                (j.projectType = 0),
                (j.stProjectPos = x),
                j)
              : ((x[0] = e[0]),
                (x[1] = e[1]),
                (k = M),
                (j.minDist = k),
                (j.projectType = -1),
                (j.stProjectPos = x),
                j);
          if (((f = u / h), (d = c / h), (v = f * y + d * g) < 1e-9))
            return (
              (x[0] = e[0]),
              (x[1] = e[1]),
              (k = M),
              (j.minDist = k),
              (j.projectType = -1),
              (j.stProjectPos = x),
              j
            );
          if (v - h > -1e-9) {
            var m = s - r,
              q = l - o,
              D = Math.sqrt(m * m + q * q);
            return (
              (x[0] = a[0]),
              (x[1] = a[1]),
              (k = D),
              (j.minDist = k),
              (j.projectType = 1),
              (j.stProjectPos = x),
              j
            );
          }
          return (
            (p = n + v * f),
            (P = i + v * d),
            (b = s - p),
            (T = l - P),
            (k = Math.sqrt(b * b + T * T)),
            (x[0] = p / 1e5),
            (x[1] = P / 1e5),
            (j.minDist = k),
            (j.projectType = 0),
            (j.stProjectPos = x),
            j
          );
        },
      },
      {
        key: "bearing",
        value: function (t, e) {
          var a = Math.PI / 180,
            n = t.latitude * a,
            i = e.latitude * a,
            r = t.longitude * a,
            o = e.longitude * a,
            s = Math.sin(o - r) * Math.cos(i),
            l =
              Math.cos(n) * Math.sin(i) -
              Math.sin(n) * Math.cos(i) * Math.cos(o - r),
            u = ((180 * Math.atan2(s, l)) / Math.PI + 360) % 360;
          return u;
        },
      },
      {
        key: "angle",
        value: function (t, e, a) {
          return Math.abs(this.bearing(e, a) - this.bearing(t, e));
        },
      },
      {
        key: "calClockwiseAngle",
        value: function (t, e) {
          var a =
              t && "number" == typeof t.angle
                ? t.angle
                : t &&
                  t.latlng1 &&
                  t.latlng2 &&
                  this.bearing(t.latlng1, t.latlng2),
            n =
              (e && "number" == typeof e.angle
                ? e.angle
                : e &&
                  e.latlng1 &&
                  e.latlng2 &&
                  this.bearing(e.latlng1, e.latlng2)) - a;
          return (n = n > 0 ? n : n + 360);
        },
      },
      {
        key: "calCoordinate",
        value: function (t, e, a, n, i, r, o) {
          (this.latitude = t),
            (this.longitude = e),
            (this.speed = a || 0),
            (this.heading = n),
            (this.accuracy = i),
            (this.timestamp = r),
            (this.altitude = o),
            (this.pos = []),
            (this.a = { x: 128, y: 128 }),
            (this.b = 256 / 360),
            (this.c = 256 / (2 * Math.PI)),
            (this.d = !0);
        },
      },
    ]),
    n
  );
})();
