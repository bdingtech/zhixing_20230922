"use strict";
"use strict";
function e(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function t(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
}
function r(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var n =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
  o = (function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    return function (t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t;
    };
  })(),
  i = (function (e) {
    return e && e.__esModule ? e : { default: e };
  })(require("./BaseEntity.js")),
  u = (function (u) {
    function a(r, n) {
      e(this, a);
      var o = t(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, n));
      return (o.markerOptions = r), o;
    }
    return (
      r(a, i.default),
      o(a, [
        {
          key: "setId",
          value: function (e) {
            this.markerOptions.id = this.id = +e;
          },
        },
        {
          key: "setIconPath",
          value: function (e) {
            this.markerOptions.iconPath = e;
          },
        },
        {
          key: "setCallout",
          value: function (e) {
            e
              ? (this.markerOptions.callout = e)
              : delete this.markerOptions.callout;
          },
        },
        {
          key: "toJson",
          value: function () {
            return n({ width: 26, height: 26 }, this.markerOptions);
          },
        },
      ]),
      a
    );
  })();
exports.default = u;
