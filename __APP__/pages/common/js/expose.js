"use strict";
"use strict";
var e = 331,
  t = require("../../../api/api.js");
function i() {
  return Date.now() + Math.random().toString(36).slice(-6);
}
module.exports = {
  init: function (r, a) {
    var n;
    a && (e = a),
      (r.exposeLog = []),
      (r.exposure =
        ((n = r),
        void setTimeout(function () {
          (n._expose_observer = n.createIntersectionObserver({
            observeAll: !0,
          })),
            n._expose_observer
              .relativeToViewport()
              .observe(".igame-expose", function (e) {
                if (e.intersectionRatio > 0) {
                  var t = {},
                    i = e.dataset.rpid.split("-"),
                    a = i[0];
                  (t.module = i[1]),
                    (t.type = a),
                    (t.time = parseInt(Date.now() / 1e3)),
                    e.dataset.gid && (t.gid = e.dataset.gid),
                    "brand" === a
                      ? (t.brandid = e.dataset.brandid)
                      : "merchant" === a
                      ? (t.merchantid = e.dataset.merchantid)
                      : "task" === a
                      ? ((t.merchantid = e.dataset.merchantid),
                        (t.brandid = e.dataset.brandid),
                        (t.actid = e.dataset.actid))
                      : "award" === a &&
                        ((t.brandid = e.dataset.brandid),
                        (t.giftid = e.dataset.giftid),
                        (t.actid = e.dataset.actid)),
                    r.exposeLog.push(t),
                    r.exposeLog.length >= 10 && r.reportExpose();
                }
              });
        }, 3e3))),
      (r.reportExpose = function () {
        if (!(r.exposeLog.length <= 0)) {
          var a = (function (r) {
              var a = [];
              for (var n in r) {
                var o = r[n],
                  p = {
                    gid: o.gid || e,
                    event_time: o.time,
                    first_channel: "miniprogram_plugin",
                    second_channel: o.module,
                    business_type: 1,
                    report_type: 2,
                    trace_id: i(),
                  },
                  d = {
                    plugin_version: t._version,
                    plugin_type: t.pluginType,
                    appid: t.appid,
                  };
                "brand" === o.type
                  ? ((d.brand_id = o.brandid), (p.event_id = "brand_exposure"))
                  : "merchant" === o.type
                  ? ((d.merchant_id = o.merchantid),
                    (p.event_id = "merchant_exposure"))
                  : "task" === o.type
                  ? ((p.event_id = "task_exposure"),
                    (d.merchant_id = o.merchantid),
                    (d.brand_id = o.brandid),
                    (d.act_id = o.actid + ""))
                  : "award" === o.type &&
                    ((p.event_id = "award_exposure"),
                    (d.brand_id = o.brandid),
                    (d.act_id = o.actid + ""),
                    (d.gift_id = o.giftid)),
                  (p.event_content = JSON.stringify(d)),
                  a.push(p);
              }
              return a;
            })(r.exposeLog),
            n = "https://a.igame.qq.com/tipmp.user.commreport.commreport/";
          wx.getStorageSync("plugin_openid")
            ? (n += "CommReport")
            : (n += "CommReportNoLogin"),
            t.httpRequest(
              {
                url: n,
                data: {
                  version: "v0.0.0",
                  headers: ["Tip-Channel: WXPROC"],
                  app_name: "pvpapp",
                  list: a,
                },
                method: "POST",
                success: function (e) {
                  (e && e.ret && 0 !== e.ret) || (r.exposeLog = []);
                },
              },
              !1
            ),
            (r.exposeLog = []);
        }
      }),
      (r.reportAndCloseTimer = function () {
        r.reportExpose(),
          r._exposeTimer && clearInterval(r._exposeTimer),
          r._expose_observer && r._expose_observer.disconnect();
      }),
      (r._exposeTimer = setInterval(r.reportExpose, 1e4));
  },
  reportExposeRequest: function (r, a, n, o, p) {
    var d = [],
      s = {
        gid: e,
        event_id: r,
        event_time: parseInt(Date.now() / 1e3),
        first_channel: "miniprogram_plugin",
        second_channel: a,
        business_type: 1,
        report_type: 2,
        trace_id: i(),
      },
      c = {
        plugin_version: t._version,
        plugin_type: t.pluginType,
        appid: t.appid,
        brand_id: n,
      };
    o &&
      ((s.gid = o.gid || s.gid),
      (c.act_id = o.actid + ""),
      (c.act_type = o.actType || "")),
      p &&
        ((c.goods_id = p.goodsid || ""),
        (c.goods_type = p.goodsType || ""),
        (c.target_page = p.targetPage || ""),
        (c.target_type = p.targetType || ""),
        (c.create_channel = p.createChannel || ""),
        (c.gift_id = p.giftid || "")),
      (c = JSON.stringify(c)),
      (s.event_content = c),
      d.push(s);
    var _ = "https://a.igame.qq.com/tipmp.user.commreport.commreport/";
    wx.getStorageSync("plugin_openid")
      ? (_ += "CommReport")
      : (_ += "CommReportNoLogin"),
      t.httpRequest(
        {
          url: _,
          data: {
            version: "v0.0.0",
            headers: ["Tip-Channel: WXPROC"],
            app_name: "pvpapp",
            list: d,
          },
          method: "POST",
          success: function (e) {
            e && e.ret && e.ret;
          },
        },
        !1
      );
  },
};
