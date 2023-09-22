"use strict";
"use strict";
var i = require("../../api/api.js");
module.exports = Behavior({
  data: { pluginAppid: i.Utils.getPluginAppid() },
  methods: {
    dealDialog: function (e) {
      i.Utils.dealDialog(e, this);
    },
    closeDialog: function () {
      this.triggerEvent("closeDialog");
    },
  },
});
