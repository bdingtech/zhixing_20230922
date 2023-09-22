!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [53472],
    {
      3909: function (e, t, n) {
        var a,
          o = n(32180),
          s = n(57042),
          l = n(24460),
          i = n(81876),
          c = n(21867),
          r = n(86066),
          u = n(45023),
          d = n(52500),
          _ = (n(92954), n(71515)),
          h = n(81957),
          v = n(48813),
          g = [
            "本机号码不再使用",
            "有其它账号",
            "对产品体验及服务不满意",
            "其他原因",
          ],
          f =
            (0, h.h)(!1, { usePageWrapper: !0 })(
              (a = (function (e) {
                (0, c.Z)(n, e);
                var t = (0, r.Z)(n);
                function n(e) {
                  var a;
                  return (
                    (0, s.Z)(this, n),
                    (a = t.call(this, e)),
                    (0, u.Z)((0, i.Z)(a), "disableBgStyle", !0),
                    (a.state = {
                      selectReasonIndex: -1,
                      otherReason: "",
                      lastMinutes: 5,
                    }),
                    a
                  );
                }
                return (
                  (0, l.Z)(n, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var e = this;
                        this.showCommonDialog({
                          hideButton: !0,
                          maskClose: !1,
                          title: "特别说明",
                          content: function (t) {
                            var n = t.onClose,
                              a = e.state.lastMinutes,
                              o = a >= 0 ? "知道了(".concat(a, "S)") : "知道了";
                            return (0, v.BX)(_.View, {
                              children: [
                                (0, v.tZ)(_.Text, {
                                  className: " _oc _G",
                                  children:
                                    "本页面不支持注销12306账号，若要注销12306账号，请勿在本页进行操作。",
                                }),
                                (0, v.tZ)(_.Button, {
                                  className: " _Fa _Oa _Fd _Gc _o _Xc",
                                  id: "AWAA",
                                  onClick: function () {
                                    return a < 0 && n();
                                  },
                                  style: a >= 0 ? "" : "background: #198cff",
                                  children: (0, v.tZ)(_.Text, {
                                    className: " _qb _Ec",
                                    children: o,
                                  }),
                                }),
                              ],
                            });
                          },
                        }),
                          (this.alertTimesInterval = setInterval(function () {
                            var t = e.state.lastMinutes - 1;
                            t >= 0 || clearInterval(e.alertTimesInterval),
                              e.setState({ lastMinutes: t });
                          }, 1e3));
                      },
                    },
                    {
                      key: "selectReason",
                      value: function (e) {
                        this.setState({ selectReasonIndex: e });
                      },
                    },
                    {
                      key: "onChange",
                      value: function (e) {
                        var t, n;
                        console.log(
                          null == e || null === (t = e.detail) || void 0 === t
                            ? void 0
                            : t.value
                        ),
                          this.setState({
                            otherReason:
                              null == e ||
                              null === (n = e.detail) ||
                              void 0 === n
                                ? void 0
                                : n.value,
                          });
                      },
                    },
                    {
                      key: "goNext",
                      value: function () {
                        var e,
                          t = this.state,
                          n = t.selectReasonIndex,
                          a = t.otherReason;
                        (e = n < 0 || n === g.length - 1 ? a : g[n]),
                          this.navigateTo({
                            url: "/pages/logoutAccount/logout/index",
                            data: { reason: e },
                          });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          t = this.state.selectReasonIndex;
                        return (0, v.BX)(_.View, {
                          className: " _wd",
                          children: [
                            (0, v.tZ)(_.View, {
                              className: " _sb _xd",
                              children: "您为什么要注销账号？",
                            }),
                            (0, v.tZ)(_.View, {
                              className: " _sb _G _id _ub",
                              children: "请告知注销原因，我们将努力改善",
                            }),
                            (0, v.tZ)(v.HY, {
                              children: g.map(function (n, a) {
                                return (0, v.BX)(
                                  _.View,
                                  {
                                    className: " _yb _i _l _hd",
                                    style:
                                      a === g.length - 1
                                        ? "border-bottom-width: 0"
                                        : "",
                                    id: "AWAB",
                                    onClick: function () {
                                      return e.selectReason(a);
                                    },
                                    children: [
                                      (0, v.tZ)(_.Text, {
                                        className: " _sb _I _j",
                                        children: n,
                                      }),
                                      t === a
                                        ? (0, v.tZ)(_.Text, {
                                            className:
                                              "iconfont2 selectArr ifont2-checkboxed",
                                          })
                                        : (0, v.tZ)(_.Text, {
                                            className:
                                              "iconfont2 arr ifont2-checkbox",
                                          }),
                                    ],
                                  },
                                  a
                                );
                              }),
                            }),
                            (0, v.tZ)(_.Textarea, {
                              className: " _yd _zd _dc _dd _G _Ad _Mb _Z",
                              placeholder:
                                "请填写详细原因以帮助我们做的更好（选填）",
                              placeholderClass: " _Bd _G",
                              onChange: this.onChange,
                            }),
                            (0, v.tZ)(_.Button, {
                              className: " _v _Gc _Oa _Cd _Dd _Ed _Jc _b _Ic",
                              id: "AWAC",
                              onClick: this.goNext,
                              children: "下一步",
                            }),
                          ],
                        });
                      },
                    },
                  ]),
                  n
                );
              })(d.Component))
            ) || a;
        Page(
          (0, o.createPageConfig)(
            f,
            "pages/logoutAccount/logoutReason/index",
            { root: { cn: [] } },
            {
              navigationBarBackgroundColor: "#fff",
              backgroundColorTop: "#EFEFEF",
              navigationBarTitleText: "",
              navigationBarTextStyle: "black",
              navigationStyle: "custom",
            } || {}
          )
        );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (t) {
          return e((e.s = t));
        })(3909);
      }),
        e.O();
    },
  ]);
})();
