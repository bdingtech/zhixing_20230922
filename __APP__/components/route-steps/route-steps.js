"use strict";
"use strict";
function t(t) {
  if (Array.isArray(t)) {
    for (var a = 0, e = Array(t.length); a < t.length; a++) e[a] = t[a];
    return e;
  }
  return Array.from(t);
}
function a() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    a = [];
  for (var e in d) t[e] && a.push({ val: t[e], text: d[e] });
  return a;
}
function e(t) {
  return t.buildingid && t.__downup
    ? i.STAIRS_CONFIG[t.cl_type + "" + t.__downup]
    : t.maneuverType
    ? i.DIRECTION_CONFIG[t.maneuverType]
    : i.CN_DIRECTION_CONFIG[t.action];
}
function r(t) {
  var a = t.segmentList,
    r = void 0 === a ? [] : a,
    o = t.start,
    d = void 0 === o ? {} : o,
    s = t.end,
    l = void 0 === s ? {} : s,
    c = t.type;
  t.startWalkInfo, t.endWalkInfo;
  r.forEach(function (t, a) {
    t.action || 0 === a || (t.action = r[a - 1].action);
  });
  var u = [
    {
      title: "" + d.name,
      extra: d.floorName || "",
      icon: { url: i.POSITION_ICON },
      distance: n(r[0]),
      roadName: r[0].roadName || "无名路",
    },
  ];
  if ("driving" === c)
    for (var f = 1; f < r.length; f++) {
      var v = r[f - 1],
        m = r[f],
        h = { url: e(v) };
      u.push({
        icon: h,
        hasSolidLine: !m.hasOwnProperty("buildingid"),
        title: v.action,
        extra: m.textInfo,
        distance: n(m),
        roadName: m.roadName || "无名路",
      });
    }
  else if ("walk" === c) {
    u[0].distance = u[0].distance.replace("行驶", "行进") + "米";
    for (var g = 1; g < r.length; g++) {
      var p = r[g - 1],
        I = r[g],
        N = { url: e(p) };
      u.push({
        icon: N,
        hasSolidLine: !I.hasOwnProperty("buildingid"),
        title: p.action,
        extra: I.textInfo,
        roadLength: I.roadLength,
        roadName: I.roadName || "无名路",
      });
    }
    for (var y = 1; y < u.length; y++) {
      var _ = u[y - 1],
        D = u[y];
      _.title === D.title &&
        _.roadName === D.roadName &&
        ((_.distance += D.distance), u.splice(y, 1), y--);
    }
    for (var C = 1; C < u.length; C++) u[C].distance = n(u[C]);
  }
  var O = {
    title: l.name,
    extra: l.floorName || "",
    icon: { url: i.POSITION_ICON },
  };
  return u.push(O), u;
}
function n(t) {
  return t
    ? t.distance
      ? "行驶" + t.distance
      : t.roadLength
      ? "行进" + t.roadLength + "米"
      : ""
    : "";
}
var i = require("../../utils/icon"),
  o = (function (t) {
    return t && t.__esModule ? t : { default: t };
  })(require("../../utils/systemInfo"));
Component({
  properties: {
    sourceData: {
      type: Object,
      observer: function (t) {
        var e = t.activeIndex || 0,
          n = t.start,
          i = t.end,
          o = t.type;
        if ("driving" === o) {
          var d = t.cardData[e],
            s = d.segmentList,
            l = d.endWalkInfo,
            c = d.startWalkInfo;
          this.setData({
            type: o,
            meta: null,
            activeIndex: e,
            cards: t.cardData,
            data: r({
              segmentList: s,
              start: n,
              end: i,
              type: o,
              endWalkInfo: l,
              startWalkInfo: c,
            }),
          });
        }
        if ("walk" === o && t.cardData) {
          var u = a(t.cardData);
          t.end.floorName &&
            u.unshift({ text: "目的地在", val: t.end.floorName }),
            this.setData({
              type: o,
              meta: {
                title: t.cardData.time + " " + t.cardData.distance,
                des: u,
              },
              cards: null,
              data: r({
                segmentList: t.segmentList,
                start: n,
                end: i,
                type: o,
              }),
            });
        }
      },
    },
  },
  data: {
    CDN_PATH: i.CDN_PATH,
    scrollTop: 0,
    type: "walk",
    data: [],
    themeColor: "",
  },
  lifetimes: {
    ready: function () {
      var t = o.default.globalData.themeColor;
      this.setData({ themeColor: t });
    },
  },
  methods: {
    toggleChildren: function (a) {
      var e = a.currentTarget.dataset.index;
      if (void 0 !== e) {
        var r = [].concat(t(this.data.data)),
          n = r[e];
        (n.childrenVisible = !n.childrenVisible), this.setData({ data: r });
      }
    },
    selectCardItem: function (t) {
      t.currentTarget.dataset &&
        this.triggerEvent("selectDriving", {
          index: t.currentTarget.dataset.index || 0,
        }),
        this.setData({ scrollTop: 0 });
    },
  },
});
var d = {
  underpass_num: "地下通道",
  crosswalk_num: "人行横道",
  overpass_num: "天桥",
  light_num: "红绿灯",
  kcal: "燃烧",
};
