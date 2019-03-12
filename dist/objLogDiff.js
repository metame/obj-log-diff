parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UnXq":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.entries=function(t){return Object.entries(t)},exports.isObject=function(e){return"object"===t(e)},exports.printVal=function(t){return["".concat(exports.isObject(t)?JSON.stringify(t):t)].map(function(t){return t.length>10?"".concat(t.slice(0,10),"..."):t})[0]};
},{}],"0JcT":[function(require,module,exports) {
"use strict";function r(r,o){return e(r)||n(r,o)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(r,t){var n=[],e=!0,o=!1,u=void 0;try{for(var i,a=r[Symbol.iterator]();!(e=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(c){o=!0,u=c}finally{try{e||null==a.return||a.return()}finally{if(o)throw u}}return n}function e(r){if(Array.isArray(r))return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeValidations=function(t){return t.reduce(function(t,n){var e=r(t,2),o=e[0],u=e[1],i=r(n,2),a=i[0],c=i[1];return[o&&a,u.concat(c)]},[!0,[]])},exports.validate=function(r){return function(t,n){return exports.mergeValidations(r.map(function(r){return r(t,n)}))}};
},{}],"SLM8":[function(require,module,exports) {
"use strict";function t(t,u){return e(t)||r(t,u)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(t,n){var r=[],e=!0,u=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(e=(c=i.next()).done)&&(r.push(c.value),!n||r.length!==n);e=!0);}catch(a){u=!0,o=a}finally{try{e||null==i.return||i.return()}finally{if(u)throw o}}return r}function e(t){if(Array.isArray(t))return t}Object.defineProperty(exports,"__esModule",{value:!0});var u=function(t){return function(n){return t.filter(function(t){return-1===n.indexOf(t)})}},o=function(t){return function(n){return n.length>0?["".concat(t," ").concat(n.join())]:[]}},c=function(t){return function(n){return"".concat(t," has key(s) that ").concat(n," does not: ")}},i=function(n){var r=t(n,2),e=r[0],i=r[1];return function(n){var r=t(n,2),a=r[0],f=r[1];return o(c(e)(a))(u(Object.keys(i))(Object.keys(f))).concat(o(c(e)(a))(u(Object.keys(f))(Object.keys(i))))}};exports.validateKeysEqual=function(t,n){return[i(t)(n)].map(function(t){return[0===t.length,t]})[0]};
},{}],"zE8G":[function(require,module,exports) {
"use strict";function t(t,a){return e(t)||n(t,a)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(t,r){var n=[],e=!0,a=!1,o=void 0;try{for(var u,i=t[Symbol.iterator]();!(e=(u=i.next()).done)&&(n.push(u.value),!r||n.length!==r);e=!0);}catch(c){a=!0,o=c}finally{try{e||null==i.return||i.return()}finally{if(a)throw o}}return n}function e(t){if(Array.isArray(t))return t}Object.defineProperty(exports,"__esModule",{value:!0});var a=require("../utils"),o=function(r){var n=t(r,2),e=n[0],o=n[1];return function(r){var n=t(r,2),u=n[0],i=n[1];return"".concat(e," (").concat(a.printVal(o),") does not strictly equal ").concat(u," (").concat(a.printVal(i),")")}};exports.validateStrictEqual=function(r,n){var e=t(r,2),a=e[0],u=e[1],i=t(n,2),c=i[0],l=i[1];return u===l?[!0,[]]:[!1,[o([a,u])([c,l])]]};
},{"../utils":"UnXq"}],"2bP4":[function(require,module,exports) {
"use strict";function t(t,e){return o(t)||r(t,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(t,n){var r=[],o=!0,e=!1,u=void 0;try{for(var c,i=t[Symbol.iterator]();!(o=(c=i.next()).done)&&(r.push(c.value),!n||r.length!==n);o=!0);}catch(f){e=!0,u=f}finally{try{o||null==i.return||i.return()}finally{if(e)throw u}}return r}function o(t){if(Array.isArray(t))return t}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(exports,"__esModule",{value:!0});var u=require("../utils"),c=function(t){return function(n){return e(t)===e(n)}},i=function(n){var r=t(n,2),o=r[0],c=r[1];return"".concat(o," (").concat(u.printVal(c),") is ").concat(e(c))},f=function(t){return function(n){return"Type of ".concat(i(t)," while type of ").concat(i(n))}};exports.validateTypesMatch=function(n,r){var o=t(n,2),e=o[0],u=o[1],i=t(r,2),a=i[0],y=i[1];return c(u)(y)?[!0,[]]:[!1,[f([e,u])([a,y])]]};
},{"../utils":"UnXq"}],"/jVG":[function(require,module,exports) {
"use strict";function n(n,u){return e(n)||t(n,u)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function t(n,r){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(a){u=!0,o=a}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return t}function e(n){if(Array.isArray(n))return n}Object.defineProperty(exports,"__esModule",{value:!0});var u=require("../objLogDiff"),o=require("../utils"),i=require("../validate"),c=function(r){return function(t){return r.filter(function(r){var e=n(r,2),u=e[0],o=e[1];return!!t[u]&&o!==t[u]}).map(function(r){var e=n(r,2),u=e[0];return[u,e[1],t[u]]})}},a=function(n){return function(r){return function(t){return function(e){return function(u){return"".concat(n," has ").concat(e," for key ").concat(t," while ").concat(r," has ").concat(u)}}}}},f=function(n){return[!1,[n]]},l=function(r,t){var e=n(r,2),i=e[0],l=e[1],s=n(t,2),v=s[0],y=s[1];return c(o.entries(l))(y).map(function(r){var t=n(r,3),e=t[0],c=t[1],l=t[2];return o.isObject(c)?u.objLogDiff(["".concat(i,":").concat(e),c])(["".concat(v,":").concat(e),l]):f(a(i)(v)(e)(c)(l))})};exports.validateValuesEqual=function(n,r){return i.mergeValidations(l(n,r))};
},{"../objLogDiff":"6zF/","../utils":"UnXq","../validate":"0JcT"}],"6zF/":[function(require,module,exports) {
"use strict";function e(e,i){return a(e)||r(e,i)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,t){var r=[],a=!0,i=!1,l=void 0;try{for(var u,n=e[Symbol.iterator]();!(a=(u=n.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(o){i=!0,l=o}finally{try{a||null==n.return||n.return()}finally{if(i)throw l}}return r}function a(e){if(Array.isArray(e))return e}Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./utils"),l=require("./validate"),u=require("./validator/validateKeysEqual"),n=require("./validator/validateStrictEqual"),o=require("./validator/validateTypesMatch"),v=require("./validator/validateValuesEqual");exports.objLogDiff=function(t){var r=e(t,2),a=r[0],c=r[1];return function(t){var r=e(t,2),d=r[0],s=r[1];return l.validate([o.validateTypesMatch].concat(i.isObject(c)&&i.isObject(s)?[u.validateKeysEqual,v.validateValuesEqual]:[n.validateStrictEqual]))([a,c],[d,s])}};
},{"./utils":"UnXq","./validate":"0JcT","./validator/validateKeysEqual":"SLM8","./validator/validateStrictEqual":"zE8G","./validator/validateTypesMatch":"2bP4","./validator/validateValuesEqual":"/jVG"}]},{},["6zF/"], null)
//# sourceMappingURL=/objLogDiff.js.map