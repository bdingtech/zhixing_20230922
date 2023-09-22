"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.TRANSIT_ROUTEPLAN_ICON =
    exports.TRANSIT_LOADING =
    exports.ROUTE_ICON_MARKER_COLOR =
    exports.Nav_Marker_Icon_Path =
    exports.CN_DIRECTION_CONFIG =
    exports.IC_DEST_FAT =
    exports.IC_GETOFF =
    exports.IC_GETON =
    exports.IC_CHANGE =
    exports.ROUTE_IC_MARKER_END_DISABLE =
    exports.ROUTE_IC_MARKER_START_DISABLE =
    exports.ROUTE_IC_MARKER_START =
    exports.ROUTE_IC_MARKER_END =
    exports.VEHICLE_CONFIG =
    exports.VEHICLE_CONFIG_ACTIVE =
    exports.VEHICLE_CONFIG_NORMAL =
    exports.TENCENTMAPLOGO =
    exports.POSITION_ICON_3X =
    exports.POSITION_ICON =
    exports.DIRECTION_CONFIG =
    exports.CDN_PATH =
      void 0);
var _ = require("../config/appConfig"),
  r = _.CDN_PATH + "/",
  e = r;
exports.CDN_PATH = _.CDN_PATH;
(exports.DIRECTION_CONFIG = [
  "",
  "icon-ic_straight",
  "icon-ic_left_ahead",
  "icon-ic_left",
  "icon-ic_left_back",
  "icon-ic_uturn",
  "icon-ic_right_back",
  "icon-ic_right",
  "icon-ic_right_ahead",
]),
  (exports.POSITION_ICON = "icon-ic_marker"),
  (exports.POSITION_ICON_3X = "icon-ic_marker");
var o = e + "route_ic_bus_blue@2x.png",
  i = e + "route_ic_bus_normal@2x.png",
  t = e + "route_ic_car_blue@2x.png",
  c = e + "route_ic_car_hl@2x.png",
  I = e + "route_ic_walk_blue@2x.png",
  C = e + "route_ic_walk_normal@2x.png";
(exports.TENCENTMAPLOGO = e + "logo_small@2x.png"),
  (exports.VEHICLE_CONFIG_NORMAL = [c, i, C]),
  (exports.VEHICLE_CONFIG_ACTIVE = [t, o, I]),
  (exports.VEHICLE_CONFIG = {
    BUS: e + "bus_ic_bus@2x.png",
    SUBWAY: e + "bus_ic_subway_b@2x.png",
  }),
  (exports.ROUTE_IC_MARKER_END = r + "route_ic_marker_end@2x.png"),
  (exports.ROUTE_IC_MARKER_START = r + "route_ic_marker_start@2x.png"),
  (exports.ROUTE_IC_MARKER_START_DISABLE =
    r + "route_ic_marker_start_disable@2x.png"),
  (exports.ROUTE_IC_MARKER_END_DISABLE =
    r + "route_ic_marker_end_disable@2x.png"),
  (exports.IC_CHANGE = _.CDN_PATH + "/ic_change@2x.png"),
  (exports.IC_GETON = _.CDN_PATH + "/ic_up@2x.png"),
  (exports.IC_GETOFF = _.CDN_PATH + "/ic_down@2x.png"),
  (exports.IC_DEST_FAT = _.CDN_PATH + "/end@2x.png"),
  (exports.CN_DIRECTION_CONFIG = {
    进入建筑物: "icon-ic_marker",
    出建筑物: "icon-ic_marker",
    直行: "icon-ic_straight",
    偏左转: "icon-ic_left_ahead",
    左转: "icon-ic_left",
    左转掉头: "icon-ic_left_back",
    左转调头: "icon-ic_left_back",
    左后转: "icon-ic_left_back",
    右后转: "icon-ic_right_back",
    掉头: "icon-ic_uturn",
    右转: "icon-ic_right",
    右转掉头: "icon-ic_right_back",
    右转调头: "icon-ic_right_back",
    偏右转: "icon-ic_right_ahead",
    进入环岛: "icon-ic_roundabout",
  }),
  (exports.Nav_Marker_Icon_Path = _.CDN_PATH + "/ic_location@3x.png"),
  (exports.ROUTE_ICON_MARKER_COLOR =
    _.CDN_PATH + "/route_ic_marker_end_color@3x.png"),
  (exports.TRANSIT_LOADING = _.CDN_PATH + "/ic_loading_M@2x.png"),
  (exports.TRANSIT_ROUTEPLAN_ICON = {
    NETWORK: _.CDN_PATH + "/network.gif",
    MESSAGE: _.CDN_PATH + "/message.gif",
    LINE: _.CDN_PATH + "/line.gif",
    WALK: _.CDN_PATH + "/walk.gif",
  });
