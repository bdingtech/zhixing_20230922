!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [59337],
    {
      44830: function (n, e, t) {
        t.d(e, {
          e: function () {
            return f;
          },
        });
        var o = t(13025),
          r = t(8271),
          s = t.n(r),
          i = ["硬卧", "二等座", "硬座", "无座"],
          u = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12],
          a =
            "学生票的乘车时间为6月1号-9月30日，12月1日-5月31日。您选择的日期不在优惠时间段内，请购买全价成人票";
        function f(n) {
          var e = n.stuPsgs,
            t = n.seatNames,
            o = n.dates,
            r = { isPass: !0, errMsg: "", btnName: "", code: 0 };
          return e && e.length
            ? (function () {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                return (
                  0 !== n.length &&
                  n.every(function (n) {
                    return i.indexOf(n) > -1;
                  })
                );
              })(t)
              ? ((function () {
                  var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return (
                    0 !== n.length &&
                    n.every(function (n) {
                      var e = s()(n).month() + 1;
                      return u.indexOf(e) > -1;
                    })
                  );
                })(o) ||
                  ((r.isPass = !1),
                  (r.errMsg = a),
                  (r.btnName = "修改日期"),
                  (r.code = 2)),
                r)
              : ((r.isPass = !1),
                (r.errMsg =
                  "学生票仅支持硬座、硬卧、二等座、无座座席优惠，您选择的座席不在优惠范围内，请重新选择，或购买成人票"),
                (r.btnName = "修改座席"),
                (r.code = 1),
                r)
            : r;
        }
        (0, o.fu)({ ConfigKey: "tieyou_wx_student_ticket" })
          .then(function (n) {
            if (n.ConfigInfo && n.ConfigInfo.Content) {
              var e = JSON.parse(n.ConfigInfo.Content);
              (u = e.availableMouth), (a = e.errMsg);
            }
          })
          .catch(function (n) {
            return console.log(n);
          });
      },
    },
  ]);
})();
