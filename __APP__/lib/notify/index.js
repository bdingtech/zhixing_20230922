"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var e = [];
function t(t, n, o) {
  t &&
    n &&
    (o ||
      console.log(
        "addNotification Warning: no identity will can't remove notice"
      ),
    (function (t) {
      e.push(t);
    })({ name: t, selector: n, identity: o }));
}
function n(t, n) {
  for (var o = 0; o < e.length; o++) {
    var i = e[o];
    if (i.name === t && i.identity === n) return void e.splice(o, 1);
  }
}
var o = {
  add: t,
  addOnce: function (o, i, r) {
    e.length > 0 && n(o, r), t(o, i, r);
  },
  remove: n,
  postNotify: function (t, n) {
    if (0 != e.length)
      for (var o = 0; o < e.length; o++) {
        var i = e[o];
        i.name === t && i.selector(n);
      }
  },
};
exports.default = o;
