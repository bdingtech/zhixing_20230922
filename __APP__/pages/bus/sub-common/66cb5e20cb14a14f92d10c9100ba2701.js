!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [8831],
    {
      43213: function (e, t, a) {
        var i = a(57042),
          n = a(24460),
          c = a(21867),
          s = a(86066),
          r = a(52500),
          o = (a(92954), a(79792)),
          l = a(71515),
          d = a(8271),
          u = a.n(d),
          h = a(3106),
          f = a(48813),
          p = "YYYY-MM-DD",
          m = u()().format(p),
          w = u()().add(1, "day").format(p),
          k = (function (e) {
            (0, c.Z)(a, e);
            var t = (0, s.Z)(a);
            function a(e) {
              var n;
              return (
                (0, i.Z)(this, a),
                ((n = t.call(this, e)).state = {
                  isTieyou: o.default.isTieyou,
                  showThirdTab: !1,
                  dateView: "",
                  dateMap: [],
                  topFix: 0,
                }),
                n
              );
            }
            return (
              (0, n.Z)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.init(this.props);
                  },
                },
                {
                  key: "init",
                  value: function (e) {
                    var t = e.dateList || null,
                      a = e.chooseDate || m;
                    (this.pageId = e.pageId || ""), this.setDateMap(t, a);
                  },
                },
                {
                  key: "setDateMap",
                  value: function (e, t) {
                    var a = this,
                      i = [];
                    if (e && e.length > 0) i = e;
                    else
                      for (var n = 0; n < 60; n++)
                        i.push({
                          date:
                            0 === n
                              ? u()().format(p)
                              : u()().add(n, "day").format(p),
                          desc: "",
                        });
                    i.forEach(function (e) {
                      if (e.date === m) e.weekDay = "今天";
                      else if (e.date === w) e.weekDay = "明天";
                      else {
                        var t = new Date(e.date.replace(/\-/g, "/"));
                        e.weekDay = [
                          "周日",
                          "周一",
                          "周二",
                          "周三",
                          "周四",
                          "周五",
                          "周六",
                        ][t.getDay()];
                      }
                      (e.dateStr = e.date.slice(5, 10)),
                        e.desc && a.setState({ showThirdTab: !0 });
                    }),
                      this.setState({ dateMap: i }, function () {
                        o.default.isH5
                          ? setTimeout(function () {
                              a.refreshSelectDate(t);
                            }, 1500)
                          : a.refreshSelectDate(t);
                      });
                  },
                },
                {
                  key: "refreshSelectDate",
                  value: function (e) {
                    var t,
                      a = this.state.dateMap,
                      i = a.findIndex(function (t) {
                        return t.date === e;
                      }),
                      n = a.findIndex(function (e) {
                        return e.isActive;
                      });
                    (t =
                      e === m || e === w
                        ? m
                        : u()(e).subtract(2, "day").format(p)),
                      a.forEach(function (e, t) {
                        t === n && (e.isActive = !1),
                          t === i && (e.isActive = !0);
                      }),
                      this.setState({ dateView: "c-".concat(t), dateMap: a });
                  },
                },
                {
                  key: "doBusTraceInfo",
                  value: function (e, t) {
                    var a, i;
                    null === (a = (i = this.props).doBusTraceInfo) ||
                      void 0 === a ||
                      a.call(i, e, t);
                  },
                },
                {
                  key: "onClickCalender",
                  value: function () {
                    this.doBusTraceInfo(
                      {
                        bizKey: "calendarIcon",
                        comment: "顶部右侧日历按钮",
                        clickType: h.uh.confirmClick,
                      },
                      2
                    ),
                      this.props.onShowCalendar();
                  },
                },
                {
                  key: "onClickDate",
                  value: function (e) {
                    var t = e.currentTarget.dataset.date;
                    this.doBusTraceInfo(
                      {
                        bizKey: "changeTime",
                        comment: "列表页顶部切换日期",
                        clickType: h.uh.confirmClick,
                      },
                      2
                    ),
                      this.refreshSelectDate(t),
                      this.props.onChangeDate(t);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state,
                      a = t.isTieyou,
                      i = t.dateView,
                      n = t.dateMap,
                      c = t.showThirdTab,
                      s = t.topFix;
                    return (0, f.tZ)(l.View, {
                      className: "bus-date-picker",
                      children: (0, f.BX)(l.View, {
                        className: "date-picker " + (c ? "three" : "two"),
                        style: { top: "".concat(s, "px") },
                        children: [
                          (0, f.tZ)(l.View, {
                            className: "calendar-list " + (a ? "ty" : "zx"),
                            children: (0, f.tZ)(l.ScrollView, {
                              className: "calendar-scroll-list",
                              scrollX: !0,
                              scrollWithAnimation: "true",
                              scrollIntoView: i,
                              children: n.map(function (t, a) {
                                return (0,
                                f.tZ)(l.Block, { children: (0, f.BX)(l.View, { className: "item " + (t.isActive ? "cur bgcolor-primary" : ""), id: "c-" + t.date, "data-date": t.date, onClick: e.onClickDate.bind(e), children: [(0, f.tZ)(l.View, { className: "week", children: t.weekDay }), (0, f.tZ)(l.View, { className: "date", children: t.dateStr }), c && (0, f.tZ)(l.View, { className: "desc", children: t.desc || "--" })] }) }, a);
                              }),
                            }),
                          }),
                          (0, f.tZ)(l.View, {
                            className: "calendar-all",
                            id: "AAAX",
                            onClick: this.onClickCalender.bind(this),
                            children: (0, f.tZ)(l.View, { className: "img" }),
                          }),
                        ],
                      }),
                    });
                  },
                },
              ]),
              a
            );
          })(r.default.Component);
        t.Z = k;
      },
    },
  ]);
})();
