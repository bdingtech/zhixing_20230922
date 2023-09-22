"use strict";
"use strict";
function t(t) {
  if (Array.isArray(t)) {
    for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
    return r;
  }
  return Array.from(t);
}
function e(t) {
  var n = t;
  if (i(n)) {
    if (!(n.length > 0)) return n;
    n = n.map(function (t) {
      return e(t);
    });
  } else r(n) && (n = "function" == typeof n.clone ? n.clone() : a(n));
  return n;
}
function r(t) {
  return "object" === (void 0 === t ? "undefined" : o(t)) && !!t;
}
function n() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    e = t.latitude,
    r = t.longitude;
  return !(!e || !r) && !(e < -90 || e > 90) && !(r > 180 || r < -180);
}
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.calculateDistance = exports.isArray = exports.objectClone = void 0);
var o =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
(exports.getDecryptedLbsPoints = function (e) {
  if (!e) return null;
  e = [].concat(t(e));
  for (var r = 2; r < e.length; r++) e[r] = e[r - 2] + e[r] / 1e6;
  return e;
}),
  (exports.lbsPolyline2LatLngs = function (t) {
    for (var e = [], r = 0; r < t.length; )
      e.push({ latitude: t[r++], longitude: t[r++] });
    return e;
  }),
  (exports.getBounds = function (t) {
    for (var e = {}, r = {}, n = 0; n < t.length; n++) {
      var o = t[n],
        u = o.latitude || o.lat,
        a = o.longitude || o.lng;
      (!e.latitude || e.latitude > u) && (e.latitude = u),
        (!e.longitude || e.longitude > a) && (e.longitude = a),
        (!r.latitude || r.latitude < u) && (r.latitude = u),
        (!r.longitude || r.longitude < a) && (r.longitude = a);
    }
    return [e, r];
  }),
  (exports.deepClone = e),
  (exports.isObject = r),
  (exports.obj2params = function (t) {
    var e = "";
    for (var r in t) t[r] && (e += r + "=" + t[r] + "&");
    return e;
  }),
  (exports.hashCode = function (t) {
    var e,
      r = 0;
    if (0 === t.length) return r;
    for (e = 0; e < t.length; e++)
      (r = (r << 5) - r + t.charCodeAt(e)), (r |= 0);
    return r;
  }),
  (exports.isPlainObject = function (t) {
    return "[object Object]" === Object.prototype.toString.call(t);
  }),
  (exports.isValidLatlon = n),
  (exports.formatMinuteTime = function (t) {
    return t >= 60
      ? Math.floor(t / 60) + "小时" + (t % 60 > 0 ? (t % 60) + "分" : "")
      : t + "分";
  }),
  (exports.checkNetwork = function () {
    return new Promise(function (t, e) {
      wx.getNetworkType({
        success: function (r) {
          "none" !== r.networkType
            ? t()
            : e(new u.default("网络异常，请稍后重试", -1e3));
        },
        fail: function () {
          e(new u.default("网络异常，请稍后重试", -1e3));
        },
      });
    });
  }),
  (exports.isValidParams = function (t, e) {
    if (!t || !t.start || !t.end)
      return e({ status: -1001, message: "起终点不能为空，请选择起终点" }), !1;
    var r = t.start,
      n = t.end;
    return r.name && n.name
      ? r.name !== n.name ||
          r.latitude !== n.latitude ||
          r.longitude !== n.longitude ||
          (e({ status: -1001, message: "起终点不能相同，请修改后重试" }), !1)
      : (e({ status: -1001, message: "起终点不能为空，请选择起终点" }), !1);
  }),
  (exports.isValidStartEndPoints = function (t, e) {
    var r = t.start,
      o = t.end;
    return +r.latitude && +r.longitude && +o.latitude && +o.longitude
      ? (r.latitude === o.latitude && r.longitude === o.longitude) ||
        ("我的位置" === r.name && "我的位置" === o.name)
        ? (e({ status: -1001, message: "起终点不能相同，请修改后重试" }), !1)
        : !(!n(r) || !n(o)) ||
          (e({
            status: -1001,
            message: "起终点的经纬度超出范围，请修改后重试",
          }),
          !1)
      : (e({ status: -1001, message: "起终点不能为空，请选择起终点" }), !1);
  }),
  (exports.compareVersion = function (t, e) {
    (t = t.split(".")), (e = e.split("."));
    for (var r = Math.max(t.length, e.length); t.length < r; ) t.push("0");
    for (; e.length < r; ) e.push("0");
    for (var n = 0; n < r; n++) {
      var o = parseInt(t[n]),
        u = parseInt(e[n]);
      if (o > u) return 1;
      if (o < u) return -1;
    }
    return 0;
  });
var u = (function (t) {
    return t && t.__esModule ? t : { default: t };
  })(require("./RequestError")),
  a = (exports.objectClone = function t(e) {
    if ("object" !== (void 0 === e ? "undefined" : o(e)) || null === e)
      return e;
    if (e instanceof Array) return [].concat(e);
    var r = new Object();
    for (var n in e) e.hasOwnProperty(n) && (r[n] = t(e[n]));
    return r;
  }),
  i = (exports.isArray =
    Array.isArray ||
    function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    });
exports.calculateDistance = function (t, e) {
  var r = Math.abs(t.latitude - e.latitude),
    n = Math.abs(t.longitude - e.longitude);
  return Math.pow(r * r + n * n, 0.5);
};
