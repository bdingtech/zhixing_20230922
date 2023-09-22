!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [83196],
    {
      89042: function (e, t, c) {
        var n = c(90129),
          i = c(52500),
          a = (c(92954), c(79792)),
          l = c(71515),
          r = c(16832),
          s = c(48813);
        t.Z = i.default.memo(function (e) {
          var t = e.tempKey,
            c = e.ticket,
            o = e.onCheckTicketTemplate,
            m = e.onShareAction,
            h = e.ShareActionArray,
            f = e.isShowChangePas,
            u = e.onChangePasInfo,
            p = e.checkedTemplate,
            d = (0, i.useState)(t),
            w = (0, n.Z)(d, 2),
            g = w[0],
            x = w[1];
          (0, i.useEffect)(
            function () {
              p && x(p);
            },
            [p]
          );
          var V = a.default.isWechat
            ? h
            : h.filter(function (e) {
                return e.type !== r.ky.WECHAT;
              });
          return (0, s.BX)(l.View, {
            className: "share-collection-share-detail",
            children: [
              (0, s.BX)(l.View, {
                className: "title-content flex",
                children: [
                  (0, s.tZ)(l.View, { children: "全部模板" }),
                  f &&
                    (0, s.BX)(l.View, {
                      className: "change-pas flex flex-center",
                      id: "AACT",
                      onClick: function () {
                        return u(c);
                      },
                      children: [
                        (0, s.tZ)(l.Image, {
                          className: "img",
                          src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/01/icon_fx_qh.png",
                        }),
                        (0, s.tZ)(l.View, { children: "换乘车人" }),
                      ],
                    }),
                ],
              }),
              (0, s.tZ)(l.View, {
                className: "template-content flex",
                children: r.I2.map(function (e, t) {
                  return (0, s.tZ)(
                    l.View,
                    {
                      className: "template-img-content ".concat(
                        g === e.type ? "checked-template" : ""
                      ),
                      id: "AACU",
                      onClick: function () {
                        return (function (e, t) {
                          x(e.type), o(e, t);
                        })(e, c);
                      },
                      children: (0, s.tZ)(l.Image, {
                        className: "template-img",
                        src: e.smallImg,
                      }),
                    },
                    "share_icon_".concat(t)
                  );
                }),
              }),
              (0, s.tZ)(l.View, {
                class: "title-content",
                children: "分享或保存",
              }),
              (0, s.tZ)(l.View, {
                class: "share-icon-content flex",
                children: V.map(function (e, t) {
                  return (0, s.BX)(
                    l.View,
                    {
                      className: "share-icon-item flex flex-center flex-column",
                      id: "AACV",
                      onClick: function () {
                        return m(e, c, g);
                      },
                      children: [
                        (0, s.tZ)(l.Image, {
                          className: "icon",
                          src: e.iconSource,
                        }),
                        (0, s.tZ)(l.View, {
                          className: "name",
                          children: e.name,
                        }),
                      ],
                    },
                    "share_icon_".concat(t)
                  );
                }),
              }),
            ],
          });
        });
      },
    },
  ]);
})();
