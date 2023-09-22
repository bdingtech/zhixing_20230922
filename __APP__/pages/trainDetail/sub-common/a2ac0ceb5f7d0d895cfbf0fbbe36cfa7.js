!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [50460],
    {
      54415: function (_, c, i) {
        i(92954), i(52500);
        var s = i(71515),
          e = i(48813);
        c.Z = function (_) {
          var c = _.onClose,
            i = void 0 === c ? function () {} : c;
          return (0, e.BX)(s.View, {
            className: " _p _Wb _md _i _k _l",
            children: [
              (0, e.tZ)(s.Image, {
                className: " _Wb _nd _od _u _q _s _t",
                src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
              }),
              (0, e.tZ)(s.View, {
                className: " _p _bc _sb _pd _Oc",
                children: "温馨提示",
              }),
              (0, e.tZ)(s.View, {
                className: " _p _qd _rd _oc _sd _U _o",
                children:
                  "在客流高峰期，为维护正常的运输秩序和保证列车运行安全，请勿“买短乘长”；若需补票，请上车后及时找列车员补票，如无法补票，请严格遵守铁路相关政策，并配合铁路工作人员的指示。通过“买短乘长”恶意逃票属于违法行为，情节严重者需要承担刑事责任。",
              }),
              (0, e.tZ)(s.View, {
                className: " _p _td _ud _Gc _Xc _vd _Oa _o _x _Wc",
                id: "AAEg",
                onClick: i,
                children: "我知道了",
              }),
            ],
          });
        };
      },
    },
  ]);
})();
