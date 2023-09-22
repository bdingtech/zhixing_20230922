"use strict";
"use strict";
var t =
  Object.assign ||
  function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  };
Component({
  properties: {
    status: {
      type: Object,
      observer: function (e) {
        if (e) {
          var r = !1;
          e.retry && (r = !0), this.setData(t({}, e, { showRetryBtn: r }));
        } else this.setData({ status: "" });
      },
    },
    height: { type: Number },
  },
  data: {
    type: "",
    loadingText: "",
    showRetryBtn: !1,
    loadErrorText: "网路异常，请稍后重试",
  },
  methods: {
    retryHandler: function () {
      "function" == typeof this.data.retry &&
        (this.setData({ type: "loading" }), this.data.retry());
    },
  },
});
