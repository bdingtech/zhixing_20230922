!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [13092],
    {
      19926: function (e, _, i) {
        i(92954);
        var a = i(52500),
          t = i(49120),
          c = i(71515),
          r = i(48813);
        _.Z = function (e) {
          var _ = e.onClose,
            i = void 0 === _ ? function () {} : _,
            n = e.onAdd,
            o = void 0 === n ? function () {} : n,
            d = e.content,
            s =
              void 0 === d
                ? "添加后，新方案会帮您抢：7月8日、7月9日最早班次为06：30 G122，最晚班次为21：21 G111的票"
                : d,
            g = e.pageType,
            l = void 0 === g ? "other" : g;
          (0, a.useEffect)(
            function () {
              var e;
              "other" !== l &&
                (null === (e = (0, t.getCurrentPage)()) ||
                  void 0 === e ||
                  e.ubtTrace(
                    "TZAgrabDetail_grabDetail_ModifyOrdNotice_exposure",
                    { PageId: (0, t.getCurrentPage)().pageId, Type: l }
                  ));
            },
            [l]
          );
          return (0, r.BX)(c.View, {
            className: " _p _Wb _i _k _l _qt",
            children: [
              (0, r.tZ)(c.Image, {
                className: " _Wb _nd _od _u _q _s _t",
                src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
              }),
              (0, r.tZ)(c.Image, {
                className: " _Lp _p _Pp _Gi",
                src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_09/img_tanchaung_tishi.webp",
              }),
              (0, r.tZ)(c.View, {
                className: " _p _bc _sb _pd _Oc",
                children: "温馨提示",
              }),
              (0, r.tZ)(c.View, {
                className: " _p _qd _rd _oc _sd _U _o",
                children: s,
              }),
              (0, r.BX)(c.View, {
                className: " _p _td _ud _Gc _Xc _i _Ga _Vb",
                children: [
                  (0, r.tZ)(c.View, {
                    className: " _p _Oa _o _vd _Gc _x _Wc _NA _Xc _Qf",
                    id: "BTNCANCEL",
                    onClick: function () {
                      var e;
                      null === (e = (0, t.getCurrentPage)()) ||
                        void 0 === e ||
                        e.ubtTrace(
                          "TZAgrabDetail_grabDetail_ModifyOrd_Cancel_click",
                          { PageId: (0, t.getCurrentPage)().pageId, Type: l }
                        ),
                        i();
                    },
                    children: "取消添加",
                  }),
                  (0, r.tZ)(c.View, {
                    className: " _p _Oa _o _w _Gc _qb _Wc _NA _Xc",
                    id: "BTNADD",
                    onClick: function () {
                      var e;
                      null === (e = (0, t.getCurrentPage)()) ||
                        void 0 === e ||
                        e.ubtTrace(
                          "TZAgrabDetail_grabDetail_Modify_Confirm_click",
                          { PageId: (0, t.getCurrentPage)().pageId, Type: l }
                        ),
                        o();
                    },
                    children: "继续添加",
                  }),
                ],
              }),
            ],
          });
        };
      },
    },
  ]);
})();
