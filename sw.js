"use strict";
importScripts("sw-toolbox.js");
// "style/style.css"
toolbox.precache(["index.html"]);
toolbox.router.get("/images/*", toolbox.cacheFirst);
toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5 });
