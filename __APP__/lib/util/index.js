"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.compareVersion = function (t, o) {
    (t = t.split(".")), (o = o.split("."));
    var e = Math.max(t.length, o.length);
    for (; t.length < e; ) t.push("0");
    for (; o.length < e; ) o.push("0");
    for (var r = 0; r < e; r++) {
      var n = parseInt(t[r]),
        p = parseInt(o[r]);
      if (n > p) return 1;
      if (n < p) return -1;
    }
    return 0;
  }),
  (exports.logkvAutoReport = exports.logkvReport = exports.report = void 0);
exports.report = function (t, o) {
  var e =
    "https://work.weixin.qq.com/wework_admin/report?r=" + Math.random() + "&q=";
  (e += encodeURIComponent(
    'st:sgkvuin_report={"kv":' +
      (o || 79505334) +
      ',"key":"' +
      t +
      '","id":' +
      +new Date() +
      "}"
  )),
    wx.request({ url: e });
};
exports.logkvReport = function (t, o) {
  var e =
    "https://work.weixin.qq.com/wework_admin/report?r=" + Math.random() + "&q=";
  (e +=
    encodeURIComponent(
      'st:logkv_report={"kv": "'.concat(t, '", "value": "').concat(o || 1, '"}')
    ) + "&_t=".concat(+new Date())),
    console.log(e),
    wx.request({ url: e });
};
exports.logkvAutoReport = function (t, o) {
  var e =
    "https://work.weixin.qq.com/wework_admin/report?r=" + Math.random() + "&q=";
  (e +=
    encodeURIComponent(
      'st:logkvauto_report={"kv": "'.concat(t, '", "key": "').concat(o, '"}')
    ) + "&_t=".concat(+new Date())),
    wx.request({ url: e });
};
