"use strict";
"use strict";
function e(e, t, o, n) {
  function i() {
    function i() {
      (u = Number(new Date())), o.apply(c, d);
    }
    var c = this,
      a = Number(new Date()) - u,
      d = arguments;
    n && !r && i(),
      r && clearTimeout(r),
      void 0 === n && a > e
        ? i()
        : !0 !== t &&
          (r = setTimeout(
            n
              ? function () {
                  r = void 0;
                }
              : i,
            void 0 === n ? e - a : e
          ));
  }
  var r,
    u = 0;
  return (
    "boolean" != typeof t && ((n = o), (o = t), (t = void 0)),
    (i.cancel = function () {
      clearTimeout(r);
    }),
    i
  );
}
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.throttle = e),
  (exports.debounce = function (t, o, n) {
    return void 0 === n ? e(t, o, !1) : e(t, n, !1 !== o);
  });
