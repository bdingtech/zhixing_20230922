"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = exports.conn = void 0);
var e = {};
exports.conn = e;
var r = !0,
  n = function () {
    return "[" + o(new Date(), "%Y-%M-%d %h:%m:%s", !0) + "]";
  },
  o = function (e, r, n) {
    var o = e.getFullYear(),
      t = e.getMonth() + 1,
      a = e.getDate(),
      c = e.getHours(),
      l = e.getMinutes(),
      s = e.getSeconds();
    return (
      n &&
        ((t = t < 10 ? "0" + t : t),
        (a = a < 10 ? "0" + a : a),
        (c = c < 10 ? "0" + c : c),
        (l = l < 10 ? "0" + l : l),
        (s = s < 10 ? "0" + s : s)),
      (r = (r = r || "%Y-%M-%d %h:%m:%s")
        .replace(/%Y/g, o)
        .replace(/%M/g, t)
        .replace(/%d/g, a)
        .replace(/%h/g, c)
        .replace(/%m/g, l)
        .replace(/%s/g, s))
    );
  };
[
  "log",
  "info",
  "warn",
  "error",
  "assert",
  "dir",
  "clear",
  "profile",
  "profileEnd",
].forEach(function (o) {
  e[o] = function () {
    var e = "";
    r &&
      ((e = arguments).length > 0 && (e[0] = n() + JSON.stringify(e[0])),
      console[o].apply(console, e));
  };
}, Function.prototype.bind),
  (e.enableConsole = function (e) {
    r = !!e;
  });
var t = { conn: e };
exports.default = t;
