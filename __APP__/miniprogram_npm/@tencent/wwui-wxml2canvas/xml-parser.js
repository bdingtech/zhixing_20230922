"use strict";
"use strict";
module.exports = function (r) {
  return (
    (r = (r = r.trim()).replace(/<!--[\s\S]*?-->/g, "")),
    { declaration: t(), root: n() }
  );
  function t() {
    if (u(/^<\?xml\s*/)) {
      for (var r = { attributes: {} }; !i() && !a("?>"); ) {
        var t = e();
        if (!t) return r;
        r.attributes[t.name] = t.value;
      }
      return u(/\?>\s*/), r;
    }
  }
  function n() {
    var r = u(/^<([\w-:.]+)\s*/);
    if (r) {
      for (
        var t, s = { name: r[1], attributes: {}, children: [] };
        !(i() || a(">") || a("?>") || a("/>"));

      ) {
        var f = e();
        if (!f) return s;
        s.attributes[f.name] = f.value;
      }
      if (u(/^\s*\/>\s*/)) return s;
      for (
        u(/\??>\s*/),
          s.content = (function () {
            var r = u(/^([^<]*)/);
            return r ? r[1] : "";
          })();
        (t = n());

      )
        s.children.push(t);
      return u(/^<\/[\w-:.]+>\s*/), s;
    }
  }
  function e() {
    var r,
      t = u(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);
    if (t)
      return { name: t[1], value: ((r = t[2]), r.replace(/^['"]|['"]$/g, "")) };
  }
  function u(t) {
    var n = r.match(t);
    if (n) return (r = r.slice(n[0].length)), n;
  }
  function i() {
    return 0 == r.length;
  }
  function a(t) {
    return 0 == r.indexOf(t);
  }
};
