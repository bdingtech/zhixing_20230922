"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.uid = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
    return Number(Math.random().toString().substr(2, e) + Date.now()).toString(
      36
    );
  }),
  (exports.checkWxVersion = void 0);
var e = require("../../lib/conn/conn"),
  r = require("../../lib/util/index");
exports.checkWxVersion = function () {
  var n = wx.getSystemInfoSync(),
    o = n.version,
    t = n.platform,
    i = n.environment,
    s = "wxwork" !== i;
  return (
    e.conn.log("version", o, "platform", t, "environment", i),
    s &&
      (("ios" == t && (0, r.compareVersion)(o, "8.0.6") >= 0) ||
        ("android" == t && (0, r.compareVersion)(o, "8.0.3") >= 0))
  );
};
