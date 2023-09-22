"use strict";
"use strict";
function t(t, n) {
  if (!(t instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var n =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n];
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }
      return t;
    },
  e = (function () {
    function t(t, n) {
      for (var e = 0; e < n.length; e++) {
        var o = n[e];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (n, e, o) {
      return e && t(n.prototype, e), o && t(n, o), n;
    };
  })(),
  o = (function () {
    function o() {
      var n =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, o), (this.options = n);
    }
    return (
      e(o, [
        {
          key: "putOption",
          value: function (t, n) {
            (this.options = this.options || {}), (this.options[t] = n);
          },
        },
        {
          key: "getOption",
          value: function (t) {
            return this.options[t];
          },
        },
        {
          key: "setOptions",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            (this.options = this.options || {}),
              t && (this.options = n({}, this.options, t));
          },
        },
        {
          key: "deleteOption",
          value: function (t) {
            this.options[t] && delete this.options[t];
          },
        },
        {
          key: "getOptions",
          value: function () {
            return this.options;
          },
        },
      ]),
      o
    );
  })();
exports.default = o;
