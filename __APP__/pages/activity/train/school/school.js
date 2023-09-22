!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [20143],
      {
        52727: function (e, t, i) {
          var n,
            s = i(32180),
            r = i(57042),
            o = i(24460),
            a = i(21867),
            c = i(86066),
            u = i(52500),
            l = i(71515),
            h = (i(92954), i(48792)),
            d = i.n(h),
            f = i(79792),
            v = i(49120),
            y = i(10741),
            p = i(17377),
            m = i(81957),
            g = i(48813),
            w = {
              pageId: "",
              data: {
                isTieyou: f.default.isTieyou,
                universityRenderList: [],
                inputKeyword: "",
                selectedUniversity: "",
              },
              onLoad: function (e) {
                var t = this,
                  i = e.fromPage,
                  n = void 0 === i ? "" : i,
                  s = e.shareKey,
                  r = void 0 === s ? "" : s;
                (this.fromPage = n),
                  (this.shareKey = decodeURIComponent(r)),
                  console.log("fromPage", this.fromPage),
                  console.log("shareKey", this.shareKey),
                  (this.universityList = []),
                  (this.universityRenderRaw = []),
                  this.getUniversityList()
                    .then(function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [];
                      return (t.universityList = e);
                    })
                    .catch(function (e) {
                      return console.log(e);
                    })
                    .finally(function () {
                      return (0, v.hideLoading)();
                    });
              },
              onUnload: function () {
                clearTimeout(this.searchTimer),
                  (this.searchTimer = null),
                  (this.universityList = null),
                  (this.universityRenderRaw = null);
              },
              getUniversityList: function () {
                return (
                  (0, v.showLoading)(),
                  new Promise(function (e, t) {
                    (0, p.WY)({
                      url: "https://market.suanya.com/libs/universities/university.json",
                      success: function (i) {
                        i && 200 === i.statusCode ? e(i.data) : t(i.errMsg);
                      },
                      fail: function (e) {
                        return t(e);
                      },
                    });
                  })
                );
              },
              searchInput: function (e) {
                var t = this,
                  i = e.detail.value,
                  n = void 0 === i ? "" : i;
                this.setData({ inputKeyword: n }),
                  (this.searchTimer = setTimeout(function () {
                    return t.handleSearch();
                  }, 200));
              },
              handleSearch: function () {
                var e = this,
                  t = this.data.inputKeyword,
                  i = void 0 === t ? "" : t,
                  n = function () {
                    e.setData({ universityRenderList: [] });
                  };
                if (!i) return n();
                var s = [
                    "!",
                    "！",
                    "@",
                    "#",
                    "$",
                    "￥",
                    "^",
                    "&",
                    "*",
                    "+",
                    "【",
                    "】",
                    "_",
                    "<",
                    ">",
                    "《",
                    "》",
                    "?",
                    "？",
                    "|",
                    "[",
                    "]",
                  ],
                  r = i.toUpperCase();
                return r.split("").some(function (e) {
                  return s.some(function (t) {
                    return t === e;
                  });
                })
                  ? (0, v.showToast)("请不要输入特殊字符")
                  : r.length < 2
                  ? n()
                  : 2 !== r.length ||
                    ["清华", "复旦"].find(function (e) {
                      return e === r;
                    })
                  ? (r[0] >= "A" && r[0] <= "Z"
                      ? (this.universityRenderRaw = this.universityList.filter(
                          function (e) {
                            return e.sp[0] === r[0] && e.sp.includes(r);
                          }
                        ))
                      : (this.universityRenderRaw = this.universityList.filter(
                          function (e) {
                            return e.cn.includes(r);
                          }
                        )),
                    void this.setData({
                      universityRenderList: this.universityRenderRaw.map(
                        function (e) {
                          return e.cn;
                        }
                      ),
                    }))
                  : n();
              },
              selectUniversity: function (e) {
                var t = e.currentTarget.dataset.index,
                  i = void 0 === t ? 0 : t,
                  n = this.data.universityRenderList[i],
                  s = this.universityRenderRaw.find(function (e) {
                    return e.cn === n;
                  });
                this.setData({
                  inputKeyword: n,
                  selectedUniversity: s,
                  showConfirmPop: !0,
                });
              },
              hidePop: function () {
                this.setData({ showConfirmPop: !1 });
              },
              cancel: function () {
                this.hidePop();
              },
              confirm: function () {
                var e = this;
                if ((this.hidePop(), "orderdetail" === this.fromPage)) {
                  var t = this.data.selectedUniversity,
                    i = t.cn,
                    n = void 0 === i ? "" : i,
                    s = t.code,
                    r = void 0 === s ? "" : s,
                    o = t.sp,
                    a = void 0 === o ? "" : o;
                  (0, y.Cr1)({
                    fromPage: "gp",
                    schoolName: n,
                    schoolCode: r + a,
                    orderNumber: this.shareKey,
                  })
                    .then(function (e) {
                      console.log(e);
                    })
                    .catch(function (e) {
                      console.log(e);
                    })
                    .finally(function () {
                      e.navigateBack({
                        selectedUniversity: e.data.selectedUniversity,
                      });
                    });
                } else
                  this.navigateBack({
                    selectedUniversity: this.data.selectedUniversity,
                  });
              },
            },
            R =
              (0, m.h)()(
                (n =
                  d()(w)(
                    (n = (function (e) {
                      (0, a.Z)(i, e);
                      var t = (0, c.Z)(i);
                      function i() {
                        return (0, r.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.inputKeyword,
                                n = t.universityRenderList,
                                s = t.showConfirmPop,
                                r = t.isTieyou,
                                o = t.selectedUniversity;
                              return (0, g.BX)(l.Block, {
                                children: [
                                  (0, g.BX)(l.View, {
                                    className: "school-hd",
                                    children: [
                                      (0, g.tZ)(l.View, {
                                        className: "tit",
                                        children: "请填写您的学校名称",
                                      }),
                                      (0, g.tZ)(l.Input, {
                                        type: "text",
                                        placeholder: "例：北京大学/BJDX",
                                        className: "input-txt",
                                        placeholderClass: "input-plr",
                                        onInput: this.searchInput,
                                        value: i,
                                      }),
                                    ],
                                  }),
                                  n.length > 0 &&
                                    (0, g.tZ)(l.View, {
                                      className: "school-list",
                                      children: n.map(function (t, i) {
                                        return (0,
                                        g.tZ)(l.View, { className: "item", "data-index": i, id: "AeEj", onClick: e.selectUniversity, children: t }, "index");
                                      }),
                                    }),
                                  s &&
                                    (0, g.tZ)(l.View, {
                                      className: "shade-box",
                                    }),
                                  s &&
                                    (0, g.BX)(l.View, {
                                      className: "pop-mid",
                                      children: [
                                        (0, g.tZ)(l.Icon, {
                                          className:
                                            "ifont-12306 iconfont " +
                                            (r ? "ty" : "zx"),
                                        }),
                                        (0, g.tZ)(l.View, {
                                          className: "tit",
                                          children: "学校信息已填写",
                                        }),
                                        (0, g.BX)(l.View, {
                                          className: "item",
                                          children: [
                                            "您已选择",
                                            (0, g.tZ)(l.Text, {
                                              className: "color-primary",
                                              children: o.cn,
                                            }),
                                            "。铁路局规定取票时需校验学校名称，请准确选择，以免出票失败哦。",
                                          ],
                                        }),
                                        (0, g.BX)(l.View, {
                                          className: "pop-btn",
                                          children: [
                                            (0, g.tZ)(l.Button, {
                                              className: "btn-cancel",
                                              id: "AeEk",
                                              onClick: this.cancel,
                                              children: "重新填写",
                                            }),
                                            (0, g.tZ)(l.Button, {
                                              className:
                                                "btn-primary btn-submit",
                                              id: "AeEl",
                                              onClick: this.confirm,
                                              children: "确定",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(u.default.Component))
                  ) || n)
              ) || n;
          Page(
            (0, s.createPageConfig)(
              R,
              "pages/activity/train/school/school",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#fff",
                backgroundColor: "#fff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(52727);
        }),
          e.O();
      },
    ]);
})();
