"use strict";
"use strict";
module.exports = {
  hex: function (t) {
    var n = null;
    return !/^#/.test(t) || (7 !== t.length && 9 !== t.length)
      ? null !== (n = /^(rgb|rgba)\((.+)\)/.exec(t))
        ? "#".concat(
            n[2]
              .split(",")
              .map(function (t, n) {
                return (
                  (t = t.trim()),
                  1 ===
                    (t = (t =
                      3 === n
                        ? Math.floor(255 * parseFloat(t))
                        : parseInt(t, 10)).toString(16)).length &&
                    (t = "0".concat(t)),
                  t
                );
              })
              .join("")
          )
        : "#00000000"
      : t;
  },
  splitLineToCamelCase: function (t) {
    return t
      .split("-")
      .map(function (t, n) {
        return 0 === n ? t : t[0].toUpperCase() + t.slice(1);
      })
      .join("");
  },
  compareVersion: function (t, n) {
    (t = t.split(".")), (n = n.split("."));
    for (var r = Math.max(t.length, n.length); t.length < r; ) t.push("0");
    for (; n.length < r; ) n.push("0");
    for (var e = 0; e < r; e++) {
      var o = parseInt(t[e], 10),
        a = parseInt(n[e], 10);
      if (o > a) return 1;
      if (o < a) return -1;
    }
    return 0;
  },
};
