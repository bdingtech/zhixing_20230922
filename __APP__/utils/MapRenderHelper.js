"use strict";
"use strict";
function e(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (null != e)
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return (t.default = e), t;
}
function t(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.MARKERS_CONFIG = void 0);
var r =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
  n = (function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    return function (t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t;
    };
  })(),
  a = e(require("./icon.js")),
  i = e(require("../config/mapStyle")),
  o = (function (e) {
    return e && e.__esModule ? e : { default: e };
  })(require("../entities/MarkerEntity")),
  u = (exports.MARKERS_CONFIG = {
    startMarker: [a.ROUTE_IC_MARKER_START_DISABLE, a.ROUTE_IC_MARKER_START],
    endMarker: [a.ROUTE_IC_MARKER_END_DISABLE, a.ROUTE_IC_MARKER_END],
  }),
  l = (function () {
    function e() {
      t(this, e);
    }
    return (
      n(e, [
        {
          key: "createStartMarker",
          value: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return this.createMarker(
              r(
                {
                  latitude: e.latitude,
                  longitude: e.longitude,
                  buildingId: e.buildingId,
                  floorName: e.floorName,
                  zIndex: i.MARKER_ZINDEX.START_DEST,
                },
                i.START_END_MARKER_SIZE,
                {
                  iconPath: u.startMarker[t],
                  anchor: { x: 0.5, y: 1 },
                  __marker_type: 3,
                }
              )
            );
          },
        },
        {
          key: "createDestMarker",
          value: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return this.createMarker(
              r(
                {
                  latitude: e.latitude,
                  longitude: e.longitude,
                  buildingId: e.buildingId,
                  floorName: e.floorName,
                  zIndex: i.MARKER_ZINDEX.START_DEST,
                },
                i.START_END_MARKER_SIZE,
                {
                  iconPath: u.endMarker[t],
                  anchor: { x: 0.5, y: 1 },
                  __marker_type: 3,
                }
              )
            );
          },
        },
        {
          key: "createMarker",
          value: function (e) {
            return new o.default(
              {
                latitude: e.latitude,
                longitude: e.longitude,
                width: e.width,
                height: e.height,
                iconPath: e.iconPath,
                zIndex: e.zIndex,
                anchor: e.anchor,
                callout: e.callout,
              },
              e
            );
          },
        },
      ]),
      e
    );
  })();
exports.default = l;
