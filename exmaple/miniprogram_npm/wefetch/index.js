module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1558338760201, function(require, module, exports) {
module.exports = require('./dist/wefetch.min.js')
}, function(modId) {var map = {"./dist/wefetch.min.js":1558338760202}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558338760202, function(require, module, exports) {
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).wefetch=t()}(this,function(){function e(){this.listeners={}}e.prototype.on=function(e,t){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(t)},e.prototype.emit=function(e,t){var n=this.listeners[e];n&&n.forEach(function(e){e(t)})};var i=new e;function t(r){return function(n){n=n||{};for(var e=arguments.length,o=Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return new Promise(function(e,t){n.config.eventType?i.emit(n.config.eventType,r.apply(void 0,[Object.assign({},n,{success:e,fail:t})].concat(o))):r.apply(void 0,[Object.assign({},n,{success:e,fail:t})].concat(o))})}}function n(){this.platform=null}n.prototype.getRequest=function(){try{if(wx.request)return this.platform="wechat",t(wx.request)}catch(e){try{if(my.httpRequest)return this.platform="ali",t(my.httpRequest)}catch(e){if(swan.request)return this.platform="swan",t(swan.request)}}},n.prototype.getUpload=function(){return"wechat"===this.platform?t(wx.uploadFile):"ali"===this.platform?t(my.uploadFile):"swan"===this.platform?t(swan.uploadFile):void 0},n.prototype.getDownload=function(){return"wechat"===this.platform?t(wx.downloadFile):"ali"===this.platform?t(my.downloadFile):"swan"===this.platform?t(swan.downloadFile):void 0};var o=new n,r="multipart/form-data",u="image/jpeg",a={createRequest:o.getRequest(),header:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},method:"get",timeout:0};function s(o,r){return function(){for(var e=new Array(arguments.length),t=0,n=e.length;t<n;t++)e[t]=arguments[t];return o.apply(r,e)}}var f=Object.prototype.toString,c={type:function(){for(var e={},t=["String","Object","Number","Array","Undefined","Function","Null","Date"],n=0,o=t.length;n<o;n++)!function(t){e["is"+t]=function(e){return f.call(e)==="[object "+t+"]"}}(t[n]);return e}(),forEach:function(e,t){if(e)if("object"!=typeof e&&(e=[e]),this.type.isArray(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)},merge:function(){var n={};function e(e,t){"object"==typeof n[t]&&"object"==typeof e?n[t]=c.merge(n[t],e):n[t]=e}for(var t=0,o=arguments.length;t<o;t++)this.forEach(arguments[t],e);return n},deepMerge:function(){var n={};function e(e,t){"object"==typeof n[t]&&"object"==typeof e?n[t]=c.deepMerge(n[t],e):n[t]="object"==typeof e?c.deepMerge({},e):e}for(var t=0,o=arguments.length;t<o;t++)this.forEach(arguments[t],e);return n},mergeConfig:function(t,n){var o={};return n=n||{},["url","method","data","config"].forEach(function(e){n[e]&&(o[e]=n[e])}),["header"].forEach(function(e){c.type.isObject(n[e])?o[e]=c.deepMerge(t[e],n[e]):n[e]?o[e]=n[e]:c.type.isObject(t[e])?o[e]=c.deepMerge(t[e]):t[e]&&(o[e]=t[e])}),["baseUrl","timeout","eventType","createRequest"].forEach(function(e){n[e]?o[e]=n[e]:t[e]&&(o[e]=t[e])}),o},extends:function(n,e,o){return this.forEach(e,function(e,t){n[t]=o&&"function"==typeof e?s(e,o):e}),n}};function l(){this.handles=[]}function p(e){return(0,e.createRequest)(e).then(function(e){return e},function(e){return Promise.reject(e)})}function h(e){this.defaults=e,this.before=new l,this.after=new l}function d(e){var t=new h(e),n=s(h.prototype.request,t);return c.extends(n,h.prototype,t),c.extends(n,t),n}l.prototype.use=function(e,t){return this.handles.push({fulfilled:e,rejected:t}),this.handles.length-1},l.prototype.eject=function(e){this.handles[e]&&(this.handles[e]=null)},l.prototype.forEach=function(t){this.handles.forEach(function(e){e&&t(e)})},["options","get","head","post","put","delete","trace","connect","postJson"].forEach(function(n){h.prototype[n]=function(e,t){return this.request(c.merge(t||{},{url:e,method:n}))}}),h.prototype.download=function(e,t){return(t=t||{}).createRequest=o.getDownload(),t.header?t.header["Content-Type"]=t.header["Content-Type"]||u:t.header={"Content-Type":u},c.type.isObject(e)?this.request(c.merge(t,e)):this.request(c.merge(t,{url:e}))},h.prototype.upload=function(e,t){return(t=t||{}).createRequest=o.getUpload(),t.header?t.header["Content-Type"]=t.header["Content-Type"]||r:t.header={"Content-Type":r},c.type.isObject(e)?this.request(t,e):this.request(c.merge(t,{url:e}))},h.prototype.on=function(e,t){i.on(e,t)},h.prototype.abort=function(e,t){this.on(e,function(e){e.abort(),t&&t()})},h.prototype.onProcess=function(e,t){this.on(e,function(e){e.onProgressUpdate(t)})},h.prototype.promisify=t,h.prototype.request=function(e){"string"==typeof e&&((e=arguments[1]||{}).url=arguments[0]),"postJson"===(e=c.mergeConfig(this.defaults,e)).method&&(e.method="post",e.header["Content-Type"]="application/json;charset=utf-8"),-1===e.url.indexOf("http")&&(e.downloadUrl&&"download"===e.method?e.url=e.downloadUrl+e.url:e.uploadUrl&&"upload"===e.method?e.url=e.uploadUrl+e.url:e.url=e.baseUrl+e.url),"download"===e.method&&(e.method="get",e.createRequest=o.getDownload()),"upload"===e.method&&(e.method="post",e.createRequest=o.getUpload());var t=[p,void 0];e.config=e.config||{};var n=Promise.resolve(e);for(this.before.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.after.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},Promise.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){n.resolve(t(e)).then(function(){return e})},function(e){n.resolve(t(value)).then(function(){return Promise.reject(e)})})};var y=d(a);return y.all=function(e){return Promise.all(e)},y.retry=function n(o,r,i){if(i=i||1e3,!o&&0!==o||!r)throw new Error("request and times params is required");if("function"!=typeof r)throw new Error("request must be a function, but got a\n"+typeof r);i||(i=0);var u=r();return 1<o?(o--,new Promise(function(e,t){u.then(e).catch(function(){setTimeout(function(){e(n(o,r,i))},i)})})):u},y.create=function(e){return d(c.merge(a,e))},y});

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1558338760201);
})()
//# sourceMappingURL=index.js.map