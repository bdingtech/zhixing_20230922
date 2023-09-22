"use strict";
"use strict";
Page({
  data: { protocolCont: "" },
  onLoad: function (o) {
    var t = decodeURIComponent(o.protocolCont);
    t && this.setData({ protocolCont: t });
  },
});
