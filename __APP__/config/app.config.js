"use strict";
"use strict";
module.exports = {
  request: {
    api_prefix: "https://work.weixin.qq.com/cgi-bin/mng/",
    max_try: 3,
    app_type: 4,
  },
  setAppType: function (e) {
    this.request.app_type = e;
  },
  debug: !1,
};
