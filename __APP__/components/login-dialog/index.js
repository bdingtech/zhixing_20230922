"use strict";
"use strict";
var o = require("../behaviors/commDialogBehavior");
Component({
  behaviors: [o],
  properties: { tips: String },
  data: {},
  methods: {
    loginSuccess: function () {
      console.log("同意授权"),
        this.triggerEvent("loginSuccess"),
        this.closeDialog();
    },
    loginFail: function () {
      console.log("不同意授权"), this.closeDialog();
    },
  },
});
