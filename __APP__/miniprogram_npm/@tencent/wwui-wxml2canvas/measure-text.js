"use strict";
"use strict";
module.exports = function (t, e, s) {
  var i =
    arguments.length > 3 && void 0 !== arguments[3]
      ? arguments[3]
      : "15px sans-serif";
  t.font = i;
  var r = e.split("\n"),
    h = [];
  return (
    r.forEach(function (e) {
      var i = 0,
        r = 0;
      "" === e
        ? h.push("")
        : e.split("").forEach(function (n, u) {
            (i += t.measureText(n).width) > s &&
              (h.push({
                text: e.slice(r, u),
                width: i - t.measureText(n).width,
              }),
              (i = t.measureText(n).width),
              (r = u)),
              u === e.length - 1 && h.push({ text: e.slice(r), width: i });
          });
    }),
    h
  );
};
