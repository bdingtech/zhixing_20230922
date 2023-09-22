"use strict";
"use strict";
function t(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function e(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
}
function o(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var r = (function (r) {
  function n(o, r) {
    t(this, n);
    var i = e(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, o));
    return (i.status = r), i;
  }
  return o(n, Error), n;
})();
exports.default = r;
