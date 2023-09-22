"use strict";
"use strict";
var e = require("../../@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default =
    exports.flushCacheData =
    exports.clearStorage =
    exports.removeStorage =
    exports.getStorage =
    exports.setStorage =
    exports.initNsStorageByKey =
    exports.initNameSpace =
      void 0);
var t = e(require("../conn/conn")),
  r = "WEWORK_STORAGE_CACHE",
  a = "",
  o = {},
  n = {};
function l() {
  try {
    o = wx.getStorageSync(r) || {};
  } catch (e) {
    o = {};
  }
}
var i = function () {
  var e =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : "default_ns",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  l();
  var r = a,
    i = o[r] || {};
  (a = "default_ns"), o[e] ? (n = o[e]) : ((n = o[e] = {}), u());
  try {
    wx.setStorageSync("WEWORK_NS_KEY", a);
  } catch (e) {}
  t && t(r, i);
};
exports.initNameSpace = i;
var s = function (e) {
  var t,
    r = e.split(".");
  if (!n && r.length > 0) return "";
  t = n;
  for (var a = 0; a < r.length - 1; a++)
    void 0 === t[r[a]] && (t[r[a]] = {}), (t = t[r[a]]);
  return t;
};
exports.initNsStorageByKey = s;
var g = function (e, t) {
  var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
    a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
    n = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
  if (r) {
    var l = s(e),
      i = e.split(".");
    (l[i[i.length - 1]] = t), n && u(a);
  } else (o[e] = t), u(!0);
};
exports.setStorage = g;
var c = function (e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (t) {
    var r = s(e),
      a = e.split(".");
    return r[a[a.length - 1]];
  }
  return o[e];
};
exports.getStorage = c;
var v = function (e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (t) {
    var r = s(e),
      a = e.split(".");
    delete r[a[a.length - 1]], u();
  } else delete n[e], u();
};
exports.removeStorage = v;
var S = function (e) {
  var r;
  try {
    e
      ? (delete s(e)[(r = e.split("."))[r.length - 1]], u())
      : (wx.clearStorageSync(), i(a));
  } catch (e) {
    t.default.log(e);
  }
};
exports.clearStorage = S;
var u = function () {
  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
  try {
    e
      ? wx.setStorageSync(r, o)
      : (wx.setStorage({ key: r, data: o }), console.log("storage %o", o));
  } catch (e) {
    S();
  }
};
exports.flushCacheData = u;
try {
  a = wx.getStorageSync("WEWORK_NS_KEY") || "";
} catch (e) {
  a = "";
}
i(a || "default_ns");
var p = {
  initNameSpace: i,
  setStorage: g,
  getStorage: c,
  clearStorage: S,
  removeStorage: v,
  flushCacheData: u,
};
exports.default = p;
