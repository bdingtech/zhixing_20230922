!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [19772],
    {
      77177: function (t, n, e) {
        e.d(n, {
          Z: function () {
            return v;
          },
        });
        var r = e(298),
          o = e(74921),
          a = e(57042),
          s = e(24460),
          l = e(81876),
          i = e(21867),
          c = e(86066),
          p = e(45023),
          u = e(52500),
          g = e(71515),
          d = e(48813),
          h = [
            "start",
            "end",
            "colors",
            "locations",
            "useAngle",
            "angleCenter",
            "angle",
            "style",
            "children",
          ],
          Z = [
            ["top left", "top", "top right"],
            ["left", null, "right"],
            ["bottom left", "bottom", "bottom right"],
          ];
        function f(t, n) {
          var e,
            r =
              null === (e = Z[n.y - t.y + 1]) || void 0 === e
                ? void 0
                : e[n.x - t.x + 1];
          return r ? "to ".concat(r) : null;
        }
        var v = (function (t) {
          (0, i.Z)(e, t);
          var n = (0, c.Z)(e);
          function e() {
            var t;
            (0, a.Z)(this, e);
            for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
              o[s] = arguments[s];
            return (
              (t = n.call.apply(n, [this].concat(o))),
              (0, p.Z)((0, l.Z)(t), "state", { width: 1, height: 1 }),
              (0, p.Z)((0, l.Z)(t), "getAngle", function () {
                var n = t.props,
                  e = n.start,
                  r = n.end;
                if (t.props.useAngle) return t.props.angle + "deg";
                var o = f(e, r);
                return (
                  o ||
                  Math.atan2(
                    t.state.width * (t.props.end.y - t.props.start.y),
                    t.state.height * (t.props.end.x - t.props.start.x)
                  ) +
                    Math.PI / 2 +
                    "rad"
                );
              }),
              (0, p.Z)((0, l.Z)(t), "getColors", function () {
                return t.props.colors
                  .map(function (n, e) {
                    var r = t.props.locations[e],
                      o = "";
                    return r && (o = " " + 100 * r + "%"), n + o;
                  })
                  .join(",");
              }),
              t
            );
          }
          return (
            (0, s.Z)(e, [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    n =
                      (t.start,
                      t.end,
                      t.colors,
                      t.locations,
                      t.useAngle,
                      t.angleCenter,
                      t.angle,
                      t.style),
                    e = void 0 === n ? {} : n,
                    a = t.children,
                    s = (0, o.Z)(t, h);
                  return (0, d.tZ)(
                    g.View,
                    (0, r.Z)(
                      (0, r.Z)({}, s),
                      {},
                      {
                        style: (0, r.Z)(
                          (0, r.Z)({}, e),
                          {},
                          {
                            backgroundImage: "linear-gradient("
                              .concat(this.getAngle(), ",")
                              .concat(this.getColors(), ")"),
                          }
                        ),
                        children: a,
                      }
                    )
                  );
                },
              },
            ]),
            e
          );
        })(u.PureComponent);
        (0, p.Z)(v, "defaultProps", {
          start: { x: 0.5, y: 0 },
          end: { x: 0.5, y: 1 },
          locations: [],
          colors: [],
          useAngle: !1,
          angle: 0,
        });
      },
    },
  ]);
})();
