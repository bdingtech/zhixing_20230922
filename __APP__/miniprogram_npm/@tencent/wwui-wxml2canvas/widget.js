"use strict";
"use strict";
require("../../../@babel/runtime/helpers/Objectvalues");
var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  i = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("widget-ui"),
  a = require("./utils").splitLineToCamelCase,
  s = (function (e) {
    r(s, n);
    var a = i(s);
    function s(e) {
      var r;
      return (
        t(this, s),
        ((r = a.call(this, e.style)).name = e.name),
        (r.attributes = e.attributes),
        r
      );
    }
    return s;
  })(),
  u = (function () {
    function r(e, i) {
      t(this, r),
        (this.xom = e),
        (this.style = i),
        (this.inheritProps = [
          "fontSize",
          "lineHeight",
          "textAlign",
          "verticalAlign",
          "color",
        ]);
    }
    return (
      e(r, [
        {
          key: "init",
          value: function () {
            return (
              (this.container = this.create(this.xom)),
              this.container.layout(),
              this.inheritStyle(this.container),
              this.container
            );
          },
        },
        {
          key: "inheritStyle",
          value: function (e) {
            var t = this,
              r = e.parent || null,
              i = e.children || {},
              n = e.computedStyle;
            r &&
              this.inheritProps.forEach(function (e) {
                n[e] = n[e] || r.computedStyle[e];
              }),
              Object.values(i).forEach(function (e) {
                t.inheritStyle(e);
              });
          },
        },
        {
          key: "create",
          value: function (e) {
            var t = this,
              r = (e.attributes.class || "").split(" ");
            r = r.map(function (e) {
              return a(e.trim());
            });
            var i = {};
            r.forEach(function (e) {
              Object.assign(i, t.style[e] || {});
            });
            for (
              var n = {}, u = 0, l = Object.keys(e.attributes);
              u < l.length;
              u++
            ) {
              var c = l[u],
                h = e.attributes[c],
                o = a(c);
              n[o] = "" === h || "true" === h || ("false" !== h && h);
            }
            n.text = e.content;
            var b = new s({ name: e.name, style: i, attributes: n });
            return (
              e.children.forEach(function (e) {
                var r = t.create(e);
                b.add(r);
              }),
              b
            );
          },
        },
      ]),
      r
    );
  })();
module.exports = { Widget: u };
