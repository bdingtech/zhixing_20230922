!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [65982],
    {
      51881: function (n, e, i) {
        i.d(e, {
          Z: function () {
            return h;
          },
        });
        var o = i(57042),
          t = i(24460),
          a = i(81876),
          c = i(21867),
          l = i(86066),
          s = i(45023),
          r = i(52500),
          p = (i(92954), i(79910)),
          d = i(71515),
          u = i(48813),
          h = (function (n) {
            (0, c.Z)(i, n);
            var e = (0, l.Z)(i);
            function i(n) {
              var t;
              (0, o.Z)(this, i),
                (t = e.call(this, n)),
                (0, s.Z)((0, a.Z)(t), "innnerHandleWrapClose", function (n) {
                  n.stopPropagation(), p.Z.executeCB(t.props.handleWrapClose);
                }),
                (0, s.Z)((0, a.Z)(t), "innerHandleClose", function () {
                  p.Z.executeCB(t.props.handleClose);
                }),
                (0, s.Z)((0, a.Z)(t), "noop", function () {});
              var c = n.inlineStyle;
              return (t.inlineStyle = c), t;
            }
            return (
              (0, t.Z)(i, [
                {
                  key: "render",
                  value: function () {
                    var n = this.props,
                      e = n.isShow,
                      i = n.className,
                      o = void 0 === i ? "" : i;
                    return (0, u.tZ)(d.View, {
                      className: "common-activity-pop",
                      children:
                        e &&
                        (0, u.tZ)(d.View, {
                          className: "modal-container ".concat(o),
                          id: "AAAC",
                          onClick: this.innnerHandleWrapClose,
                          catchMove: !0,
                          children: (0, u.BX)(d.View, {
                            className: "modal-content",
                            style: this.inlineStyle,
                            children: [
                              this.props.children,
                              (0, u.tZ)(d.Icon, {
                                className: "icon-closed",
                                id: "AAAD",
                                onClick: this.innerHandleClose.bind(this),
                              }),
                            ],
                          }),
                        }),
                    });
                  },
                },
              ]),
              i
            );
          })(r.default.PureComponent);
      },
    },
  ]);
})();
