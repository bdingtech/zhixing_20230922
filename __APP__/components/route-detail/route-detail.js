"use strict";
"use strict";
function t(t) {
  if (Array.isArray(t)) {
    for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
    return i;
  }
  return Array.from(t);
}
function e() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
  return t > 1e3 ? (Math.round(t / 100) / 10).toFixed(1) + "公里" : t + "米";
}
function i(t) {
  return (t = t || 1) > 60 ? (t / 60).toFixed(1) + "小时" : t + "分钟";
}
function n() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return t.distance ? "步行" + e(t.distance) + "(" + i(t.duration) + ")" : "";
}
function a(t) {
  return {
    buildingId: t.door.building_id,
    buildName: t.door.builidng_name,
    floorName: t.door.floor_name,
    icon: s.CN_DIRECTION_CONFIG[t.action],
  };
}
function r() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    e = [];
  for (var i in g) t[i] && e.push({ val: t[i], text: g[i] });
  return e;
}
function o(t, e) {
  return e ? "行进" + e + "米" : "";
}
function d(t) {
  return t.buildingid && t.__downup
    ? s.STAIRS_CONFIG[t.cl_type + "" + t.__downup]
    : t.maneuverType
    ? s.DIRECTION_CONFIG[t.maneuverType]
    : s.CN_DIRECTION_CONFIG[t.action];
}
function l(t) {
  var e = t.segmentList,
    i = void 0 === e ? [] : e,
    r = t.start,
    l = void 0 === r ? {} : r,
    c = t.end,
    f = void 0 === c ? {} : c,
    g = t.type,
    h = t.startWalkInfo,
    v = t.endWalkInfo,
    m = "室内路线",
    I = "室内路线",
    p = !1;
  "driving" === g && (h && (m = n(h)), v && (I = n(v))),
    l.buildingId === f.buildingId && (p = !0),
    (i = i.filter(function (t) {
      return t.action;
    }));
  var N = [
    {
      title: "从" + l.name + "出发",
      extra: l.floorName || "",
      icon: { url: s.POSITION_ICON },
    },
  ];
  i.reduce(
    function (t, e) {
      var i = t.res,
        n = t.pre,
        r = { url: d(e) },
        l = "driving" === g && "mycar" === e.__type,
        c = "出建筑物" === e.action,
        f = "进入建筑物" === e.action;
      if (e.buildingid || c || f || l)
        if (l)
          (n.title = "我的车"),
            (n.icon = { url: s.CN_DIRECTION_CONFIG["驾车"] }),
            (n.extra = "前往我的车"),
            (n.expandButtonText = m);
        else if (c) {
          var h = a(e);
          (n.title = h.buildName),
            (n.icon = { url: h.icon }),
            (n.extra = h.floorName),
            (n.expandButtonText = m);
        } else if (f) {
          var v = a(e);
          (n = {
            title: v.buildName,
            icon: { url: v.icon },
            buildingid: v.buildingId,
            extra: v.floorName,
            expandButtonText: I,
            children: [],
          }),
            i.push(n);
        } else
          n.buildingid && n.buildingid === e.buildingid
            ? n.children.push({
                icon: r,
                title: e.action,
                extra: o(e.action, e.roadLength),
              })
            : ((n = {
                buildingid: e.buildingid,
                extra: e.textInfo,
                hiddenIndoorBuildTitle: p,
                childrenVisible: p,
                children: [],
              }),
              i.push(n));
      else
        i.push({
          icon: r,
          hasSolidLine: !e.hasOwnProperty("buildingid"),
          title: e.action,
          extra: e.textInfo,
        }),
          (n = u({}, e));
      return { res: i, pre: n };
    },
    { res: N, pre: {} }
  );
  var b = {
    title: f.name,
    extra: f.floorName || "",
    icon: { url: s.POSITION_ICON },
  };
  return N.push(b), N;
}
var u =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i)
          Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
      }
      return t;
    },
  s = require("../../utils/icon"),
  c = (function (t) {
    return t && t.__esModule ? t : { default: t };
  })(require("../../utils/systemInfo")),
  f = c.default.globalData.CDN_PATH,
  g = {
    underpass_num: "地下通道",
    crosswalk_num: "人行横道",
    overpass_num: "天桥",
    light_num: "红绿灯",
  };
Component({
  properties: {
    height: { type: Number, value: 500 },
    sourceData: {
      type: Object,
      observer: function (t) {
        var e = t.activeIndex || 0,
          i = t.start,
          n = t.end,
          a = t.type;
        if ("driving" === a) {
          var o = t.cardData[e],
            d = o.segmentList,
            u = o.endWalkInfo,
            s = o.startWalkInfo;
          this.setData({
            type: a,
            meta: null,
            activeIndex: e,
            cards: t.cardData,
            data: l({
              segmentList: d,
              start: i,
              end: n,
              type: a,
              endWalkInfo: u,
              startWalkInfo: s,
            }),
          });
        }
        if ("walk" === a && t.cardData) {
          var c = r(t.cardData);
          t.end.floorName &&
            c.unshift({ text: "目的地在", val: t.end.floorName }),
            this.setData({
              type: a,
              meta: {
                title: t.cardData.time + " " + t.cardData.distance,
                des: c,
              },
              cards: null,
              data: l({
                segmentList: t.segmentList,
                start: i,
                end: n,
                type: a,
              }),
            });
        }
      },
    },
  },
  data: {
    CDN_PATH: f,
    meta: { title: "", des: "" },
    scrollTop: 0,
    type: "walk",
    data: [],
    isIPhoneX: c.default.globalData.isIPhoneX,
    logo: s.TENCENTMAPLOGO,
    windowHeight: c.default.globalData.windowHeight,
  },
  lifetimes: {
    ready: function () {
      var t = c.default.globalData.themeColor;
      this.setData({ themeColor: t });
    },
  },
  methods: {
    onToggleChildren: function (e) {
      var i = e.currentTarget.dataset.index;
      if (void 0 !== i) {
        var n = [].concat(t(this.data.data)),
          a = n[i];
        (a.childrenVisible = !a.childrenVisible), this.setData({ data: n });
      }
    },
    onSelectCardItem: function (t) {
      t.currentTarget.dataset &&
        this.triggerEvent("selectDriving", {
          index: t.currentTarget.dataset.index || 0,
        }),
        this.setData({ scrollTop: 0 });
    },
    onToggleRouteDetail: function () {
      this.triggerEvent("toggleroutedetail");
    },
  },
});
