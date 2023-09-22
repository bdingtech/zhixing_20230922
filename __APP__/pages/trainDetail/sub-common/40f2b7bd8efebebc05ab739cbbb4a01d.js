!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [5207],
    {
      34405: function (t, e) {
        var n = {
          trim: function (t) {
            return t.toString().replace();
          },
          nameCheck: function (t) {
            return /^[\u4E00-\u9FA5\uf900-\ufa2d\xb7s]{2,20}$/.test(t);
          },
          mobileCheck: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "86";
            return "86" == e
              ? /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/.test(t)
              : "852" === e
              ? /^(5|6|8|9)\d{7}$/.test(t)
              : "853" === e
              ? /^6\d{7}$/.test(t)
              : "886" === e
              ? /^[0][9]\d{8}$/.test(t)
              : /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/.test(t);
          },
          idCardCheck: function (t) {
            return /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/.test(
              t
            );
          },
          pwdCheck: function (t) {
            return t.length > 5;
          },
          numberCheck: function (t) {
            return /^[\d]+$/.test(t);
          },
          emailCheck: function (t) {
            return /^(\w+)(\.\w+)*@(\w+)(\.\w+)*.(\w+)$/i.test(t);
          },
          passportCheck: function (t) {
            return /^[a-zA-Z0-9]{5,17}$/.test(t);
          },
          combilePswCheck: function (t) {
            return /^(?![0-9]+$)(?![_]+$)(?![a-zA-Z]+$)[A-Za-z_0-9]{6,}$/.test(
              t
            );
          },
        };
        e.Z = n;
      },
    },
  ]);
})();
