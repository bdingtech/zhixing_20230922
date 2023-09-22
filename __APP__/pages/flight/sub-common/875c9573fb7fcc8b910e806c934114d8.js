!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [54726],
    {
      76988: function (t, e, n) {
        n.d(e, {
          Z: function () {
            return u;
          },
        });
        var i = n(57042),
          a = n(24460),
          o = n(45023),
          r = n(49120),
          s = n(92954),
          u = (function () {
            function t(e) {
              (0, i.Z)(this, t),
                (0, o.Z)(this, "models", void 0),
                (0, o.Z)(this, "store", void 0),
                (0, o.Z)(this, "dispatch", void 0),
                (0, o.Z)(this, "getState", void 0),
                (0, o.Z)(this, "pageInstance", void 0),
                this.initStore(),
                this.init(e);
            }
            return (
              (0, a.Z)(
                t,
                [
                  {
                    key: "initStore",
                    value: function () {
                      throw new Error("method initStore is not defined");
                    },
                  },
                  {
                    key: "init",
                    value: function (t) {
                      (this.pageInstance = t),
                        (this.dispatch = this.store.dispatch),
                        (this.getState = this.store.getState);
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (t) {
                      var e = this,
                        n = new this(t);
                      (this.instance = n),
                        (this.router = (0, s.getCurrentInstance)().router),
                        ((0, r.getCurrentPage)().pageService = n);
                      var i = t.componentDidShow;
                      t.componentDidShow = function () {
                        (e.instance = (0, r.getCurrentPage)().pageService),
                          i.call(t);
                      };
                      var a = t.componentWillUnmount;
                      return (
                        (t.componentWillUnmount = function () {
                          a.call(t), (e.instance = null), (e.router = null);
                        }),
                        n
                      );
                    },
                  },
                  {
                    key: "getInstance",
                    value: function () {
                      if (!this.instance)
                        throw new Error("instance is not created");
                      return this.instance;
                    },
                  },
                  {
                    key: "isActive",
                    value: function () {
                      return !!this.instance;
                    },
                  },
                  {
                    key: "getState",
                    value: function (t) {
                      return this.getInstance().getState()[
                        t || this.defaultModel
                      ];
                    },
                  },
                  {
                    key: "dispatch",
                    value: function (t) {
                      return this.getInstance().dispatch[
                        t || this.defaultModel
                      ];
                    },
                  },
                  {
                    key: "setState",
                    value: function (t) {
                      var e, n;
                      this.isActive() &&
                        (null ===
                          (e = (n = this.dispatch(this.defaultModel))
                            .setState) ||
                          void 0 === e ||
                          e.call(n, t));
                    },
                  },
                  {
                    key: "getPage",
                    value: function () {
                      return this.getInstance().pageInstance;
                    },
                  },
                  {
                    key: "setPageTitle",
                    value: function (t) {
                      return this.getPage().setPageTitle(t);
                    },
                  },
                  {
                    key: "showCommonDrawer",
                    value: function (t) {
                      return this.getPage().showCommonDrawer(t);
                    },
                  },
                  {
                    key: "closeCommonDrawer",
                    value: function (t) {
                      return this.getPage().closeCommonDrawer(t);
                    },
                  },
                  {
                    key: "showCommonDialog",
                    value: function (t) {
                      return this.getPage().showCommonDialog(t);
                    },
                  },
                  {
                    key: "showMultiButtonDialog",
                    value: function (t) {
                      return this.getPage().showMultiButtonDialog(t);
                    },
                  },
                  {
                    key: "navigateTo",
                    value: function (t) {
                      return this.getPage().navigateTo(t);
                    },
                  },
                  {
                    key: "navigateBack",
                    value: function (t) {
                      return this.getPage().navigateBack(t);
                    },
                  },
                  {
                    key: "ubtTrace",
                    value: function (t, e) {
                      return this.getPage().ubtTrace(t, e);
                    },
                  },
                  {
                    key: "refreshObserve",
                    value: function (t) {
                      if (t) return this.getPage().refreshObserve();
                    },
                  },
                  {
                    key: "getRouterParams",
                    value: function () {
                      var t;
                      return null === (t = this.router) || void 0 === t
                        ? void 0
                        : t.params;
                    },
                  },
                ]
              ),
              t
            );
          })();
        (0, o.Z)(u, "instance", void 0),
          (0, o.Z)(u, "defaultModel", "pageModel"),
          (0, o.Z)(u, "router", void 0);
      },
    },
  ]);
})();
