!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [74171],
    {
      477: function (e, c, t) {
        var a = t(79792),
          d = a.default.appId || "wx76dcd806f382ec8e",
          f = {
            wx76dcd806f382ec8e: "NdvyuBq2SJA1v9c5QcPwcsqbLUrdENKwG409niPJCK8",
            wx45dff5234240ad90: "X1-vIt06A_tyhEfwKqbk0dbJPMAIO-G577rta3YN7H4",
            wx78a2429469c8c120: "uaWG0L3IXCWAeBBzY7pP2WXKWP1guADSDCf0qX3vED4",
            wx2a123137e10cae35: "6SwakjmKxJIV0WlM4S3jb0JulGEgc_NRtLWpFT8---w",
            wx41109903d3bb4f63: "nnlh_tBzKdr7NV0AFIJrhBMbga-ih_I0jdfdk32l5_k",
            wxbd33b0cfa7cda030: "LtyZ7RsN8xnFwLzaYjSWm93dgsLvzj4BFFGNzngJUmg",
            wx4efc89b936baea18: "S4nmyVxVlLOosOY3BUbSQy93Tj4KGy2XS5slvMDd_dc",
          }[d],
          x = {
            wx76dcd806f382ec8e: "Rr_-dvOh1mfMq6MldrOHIq8MXJN6JBCLEqXa0TUdqYY",
            wx45dff5234240ad90: "jCO-_qw188Vies9QYILu7Mx3Ho_7ih3yniv9P7Cb6V0",
            wx78a2429469c8c120: "MhmqJ8ERKs6B2_UjOsRBkpeg0SPzCW-ij_osySJ6stc",
            wx2a123137e10cae35: "1vefw7z37j6yx3sOkOpvVrqRDij8XU8tW9YOvxKGgd4",
            wx41109903d3bb4f63: "WfROzD8uuSSLLPI_metPgj-r-mo-qSJzE5Em5jyzvTg",
            wxbd33b0cfa7cda030: "sfJhXA2rh6vp_Id6ZmIR0jsgVcHSAEaov3fa3rvoqYU",
            wx4efc89b936baea18: "5fDbk5_uYckwe-fS6EJMVilfsPGdgdUk0E4Mvvc9Xg0",
          }[d],
          m = {
            wx76dcd806f382ec8e: "LUmqL3gefVsNrPNm66ttG70O6LF0SMNeAKzI1sob6Zk",
            wx45dff5234240ad90: "wP2sHtK70KQEshaRse1DdNfmN5QLokkVEhMaJx6uUUM",
            wx78a2429469c8c120: "cCZz1mgI0Qsu9mXL73y39Gxr_R9CWRQToO5zFKFL9GE",
            wx2a123137e10cae35: "c7mALhqT4lwHmPpRNN1JDrRHIUFEDBCSZIyXtV9vkvo",
            wx41109903d3bb4f63: "ATIheeImEn0xpzwGvdNDunWe2VlMiHmR6xIoi1zaJCI",
            wxbd33b0cfa7cda030: "pjE589xXkfnfBfMXHbYOnreKTO9bLzgxYzYt9J_GiX8",
            wx4efc89b936baea18: "A6FcRpDlEvTLJfbMRzHuzzdFhMMccBMPPSFVAPr8Y4U",
          }[d],
          w = {
            wx76dcd806f382ec8e: "ONJrNUrl64S_o4Lu46xCbuk1FjESBpoZ4nVOtF6Km00",
            wx45dff5234240ad90: "ymhD68HomIMqxqJk0mAPsqpNOiahkueYMPUst1CqSak",
            wx78a2429469c8c120: "xmaU1L5H06d0FC8OU8ncsQ-UZZoUwa59cIwPSRZO3LU",
            wx2a123137e10cae35: "dFRyCvnWHrVVpgXakpZryqCJmz6-SyAjjFTCRlpsrZo",
            wx41109903d3bb4f63: "cCblSIkOr6TpFe9IYNLmyMFcW6g2m_VeeDxfR83IwN0",
            wxbd33b0cfa7cda030: "sm3N4I1naJwQJZpP0zzmvV9ug7lyGvbEtKdfa0XZ6UY",
            wx4efc89b936baea18: "3FS963wfC2dJ4Qxb3gkvcw4N7baDmZyKUuoNn3EQfT8",
          }[d],
          I = {
            wx76dcd806f382ec8e: "BgT3CPx31t5piwRLSfs9kmCz5R6lk12S-X5_xHo8Apc",
            wx45dff5234240ad90: "EKaglGJmTeYi8ICC_JHjNNfDSmqALYvYLhNrlylIAWM",
            wx78a2429469c8c120: "I2dY6RKwZWTCe67awkO91c9HqQVDb6OSfODAaE9OWkk",
            wx2a123137e10cae35: "Qy86GJuhf1YcUlrHFlfxpgdNkSdrl1o6hmfNyrQZmWA",
            wx41109903d3bb4f63: "CP6Rc1GKuOTbXWPNNgsbLtxeeMu0upqO5n-hkkj4bEs",
            wxbd33b0cfa7cda030: "4ivf_bH72s8oyVmfmteZy6Z2L3g9ZCO3EJ-wBOmZzkc",
            wx4efc89b936baea18: "jI9_gd7KA_1oDqQ0RAE9rcEnOgkuDO6fFVfIKDsaIQU",
          }[d],
          i = [x, f, w].filter(function (e) {
            return !!e;
          }),
          b = [m, f, x].filter(function (e) {
            return !!e;
          }),
          N = [
            { title: "火车票购票提醒", tempId: f },
            { title: "余票紧张提醒", tempId: x },
            { title: "助力活动提醒", tempId: I },
          ].filter(function (e) {
            return !!e.tempId;
          }),
          s = [
            { title: "火车票购票提醒", tempId: f },
            { title: "好友加速成功通知", tempId: w },
            { title: "助力活动提醒", tempId: I },
          ].filter(function (e) {
            return !!e.tempId;
          }),
          u = a.default.isTieyou
            ? [
                {
                  title: " 火车票出票结果通知",
                  tempId: "gcq3IBPsusXl73kMTzbq7nHVT9TNcT4OtqHjxXEudt4",
                },
              ]
            : [
                {
                  title: " 火车票出票结果通知",
                  tempId: "jfYjIG3Yz_QLp_lFGKgWkPRG7IKJCxsEFaloExppby0",
                },
              ],
          l = a.default.isTieyou
            ? ["gcq3IBPsusXl73kMTzbq7nHVT9TNcT4OtqHjxXEudt4"]
            : ["jfYjIG3Yz_QLp_lFGKgWkPRG7IKJCxsEFaloExppby0"],
          n = a.default.isTieyou
            ? ["gcq3IBPsusXl73kMTzbq7nHVT9TNcT4OtqHjxXEudt4"]
            : [
                "kXLnac15BL5LAygKgVCeA1F7-kxEwRlsz5BD3fQcwAw",
                "H3N8J1b3pO9FDkTAivEMJA03pgQksXmr04Ut8DA25Ao",
              ],
          y = !1;
        c.Z = {
          hotCities: [
            { cityName: "北京" },
            { cityName: "上海" },
            { cityName: "广州" },
            { cityName: "深圳" },
            { cityName: "苏州" },
            { cityName: "杭州" },
            { cityName: "天津" },
            { cityName: "南京" },
            { cityName: "成都" },
            { cityName: "西安" },
            { cityName: "重庆" },
            { cityName: "郑州" },
            { cityName: "长沙" },
            { cityName: "合肥" },
            { cityName: "昆山" },
            { cityName: "宁波" },
          ],
          TMPIDS: i,
          TMPIDS_NORMAL: b,
          TMPIDS_NORMAL_INFO: N,
          TMPIDS_LONG: l,
          TMPIDS_GRAB: s,
          TMPIDS_LONG_INFO: u,
          checkList12306Call: function () {
            return y;
          },
          callList12306: function () {
            y = !0;
          },
          maxOtherAmount: 11,
          TRAIN_BUY_REMIND_ID: f,
          ACTIVITY_REMIND_ID: I,
          TMPIDS_V2: n,
        };
      },
    },
  ]);
})();
