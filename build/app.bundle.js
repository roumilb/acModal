var acModal=function(t){var e={};function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,o){"use strict";function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}o.r(e),o.d(e,"default",(function(){return a}));var a=function(){function t(e,o,n,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.title=e,this.message=o,this.buttons=n,this.parameters=a}var e,o,a;return e=t,(o=[{key:"display",value:function(){var t=this.createModal();if(void 0!==this.parameters.appendTo){var e=document.querySelector(this.parameters.appendTo);if(e.length<1)return console.error("Error: Could not find the element to append the modal"),!1;e.appendChild(t)}else document.body.appendChild(t)}},{key:"createModal",value:function(){var t=this,e=document.createElement("div");e.setAttribute("id","acmodal__overlay");var o,n=document.createElement("div");n.setAttribute("id","acmodal__modal"),void 0!==this.title&&((o=document.createElement("h2")).setAttribute("id","acmodal__modal__title"),o.innerText=this.title);var a=document.createElement("p");a.setAttribute("id","acmodal__modal__message"),a.innerText=this.message;var r=document.createElement("div");r.setAttribute("id","acmodal__modal__actions");for(var c=function(o){var n=document.createElement("button"),a=t.buttons[o].primary?"acmodal__button__primary":"acmodal__button__secondary";n.classList.add("acmodal__button",a),n.innerText=t.buttons[o].text,n.addEventListener("click",(function(){void 0!==t.buttons[o].callBackFunction&&t.buttons[o].callBackFunction(),e.remove()})),r.appendChild(n)},i=0;i<this.buttons.length;i++)c(i);return void 0!==this.title&&n.appendChild(o),n.appendChild(a),n.appendChild(r),e.appendChild(n),e}}])&&n(e.prototype,o),a&&n(e,a),t}()},function(t,e,o){var n=o(2).default;o(5),t.exports=n},function(t,e,o){"use strict";function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}o.r(e),o.d(e,"default",(function(){return c}));var a=o(3).default,r=o(4).default,c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,o,c;return e=t,c=[{key:"confirm",value:function(t){if(void 0===t.message)return console.error("Error: could not instantiate without message"),!1;var e=t.message,o=t.title,n={text:void 0===t.successText?"OK":t.successText,callBackFunction:t.successCallBack},r={text:void 0===t.cancelText?"Cancel":t.cancelText,callBackFunction:t.cancelCallBack},c={appendTo:t.appendTo},i=new a(o,e,n,r,c);i.display()}},{key:"alert",value:function(t){if(void 0===t.message)return console.error("Error: could not instantiate without message"),!1;var e=t.message,o=t.title,n={text:void 0===t.buttonText?"OK":t.buttonText,callBackFunction:t.buttonCallBack},a={appendTo:t.appendTo},c=new r(o,e,n,a);c.display()}}],(o=null)&&n(e.prototype,o),c&&n(e,c),t}()},function(t,e,o){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e,o){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(n){var a=Object.getOwnPropertyDescriptor(n,e);return a.get?a.get.call(o):a.value}})(t,e,o||t)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}o.r(e),o.d(e,"default",(function(){return u}));var u=function(t){function e(t,o,n,a,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var l=[{text:a.text,primary:!1,callBackFunction:a.callBackFunction},{text:n.text,primary:!0,callBackFunction:n.callBackFunction}];return r(this,i(e).call(this,t,o,l,c))}var o,n,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),o=e,(n=[{key:"display",value:function(){c(i(e.prototype),"display",this).call(this)}}])&&a(o.prototype,n),u&&a(o,u),e}(o(0).default)},function(t,e,o){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e,o){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(n){var a=Object.getOwnPropertyDescriptor(n,e);return a.get?a.get.call(o):a.value}})(t,e,o||t)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}o.r(e),o.d(e,"default",(function(){return u}));var u=function(t){function e(t,o,n,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var c=[{text:n.text,primary:!0,callBackFunction:n.callBackFunction}];return r(this,i(e).call(this,t,o,c,a))}var o,n,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),o=e,(n=[{key:"display",value:function(){c(i(e.prototype),"display",this).call(this)}}])&&a(o.prototype,n),u&&a(o,u),e}(o(0).default)},function(t,e,o){var n=o(6),a=o(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var r={insert:"head",singleton:!1},c=(n("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss",a,r),a.locals?a.locals:{});t.exports=c},function(t,e,o){"use strict";var n,a={},r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},c=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}();function i(t,e,o){t=o.base?t+o.base:t,a[t]||(a[t]=[]);for(var n=0;n<e.length;n++){var r=e[n],c={css:r[1],media:r[2],sourceMap:r[3]},i=a[t];i[n]?i[n].updater(c):i.push({updater:_(c,o)})}for(var l=e.length;l<a[t].length;l++)a[t][l].updater();a[t].length=e.length,0===a[t].length&&delete a[t]}function l(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var a=o.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var r=c(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function s(t,e,o,n){var a=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,a);else{var r=document.createTextNode(a),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(r,c[e]):t.appendChild(r)}}function f(t,e,o){var n=o.css,a=o.media,r=o.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,p=0;function _(t,e){var o,n,a;if(e.singleton){var r=p++;o=m||(m=l(e)),n=s.bind(null,o,r,!1),a=s.bind(null,o,r,!0)}else o=l(e),n=f.bind(null,o,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else a()}}t.exports=function(t,e,o){return(o=o||{}).singleton||"boolean"==typeof o.singleton||(o.singleton=r()),i(t,e,o),function(e){i(t,e||[],o)}}},function(t,e,o){(e=o(8)(!1)).push([t.i,"#acmodal__overlay{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,0.6);z-index:100}#acmodal__overlay #acmodal__modal{height:auto;background-color:#fff;border-radius:10px;position:fixed}@media screen and (max-width: 599px){#acmodal__overlay #acmodal__modal{width:96%;right:2%;bottom:10px}}@media screen and (min-width: 599px){#acmodal__overlay #acmodal__modal{left:50%;top:50%;transform:translate(-50%, -60%);width:500px}}#acmodal__overlay #acmodal__modal #acmodal__modal__title,#acmodal__overlay #acmodal__modal #acmodal__modal__message,#acmodal__overlay #acmodal__modal #acmodal__modal__actions{display:block;width:100%;margin:0;padding:1rem;box-sizing:border-box;color:#343434}#acmodal__overlay #acmodal__modal #acmodal__modal__title{border-bottom:1px solid #EFEFEF}#acmodal__overlay #acmodal__modal #acmodal__modal__message{min-height:70px;font-size:1.1rem}#acmodal__overlay #acmodal__modal #acmodal__modal__actions{text-align:right}@media screen and (max-width: 599px){#acmodal__overlay #acmodal__modal #acmodal__modal__actions{text-align:center}}#acmodal__overlay #acmodal__modal #acmodal__modal__actions .acmodal__button{padding:.5rem .8rem;border:2px solid #343434;font-size:1rem;border-radius:5px;color:#343434;margin:0 .5rem;cursor:pointer;transition:.2s}@media screen and (max-width: 599px){#acmodal__overlay #acmodal__modal #acmodal__modal__actions .acmodal__button{width:90%;margin:.5rem 0}}@media screen and (min-width: 599px){#acmodal__overlay #acmodal__modal #acmodal__modal__actions .acmodal__button.acmodal__button__secondary:hover{background-color:#EFEFEF}#acmodal__overlay #acmodal__modal #acmodal__modal__actions .acmodal__button.acmodal__button__primary:hover{opacity:.8}}#acmodal__overlay #acmodal__modal #acmodal__modal__actions .acmodal__button.acmodal__button__primary{background-color:#343434;color:#fff}#acmodal__overlay #acmodal__modal #acmodal__modal__actions .acmodal__button.acmodal__button__secondary{background-color:#fff}\n",""]),t.exports=e},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var a=(c=n,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(l," */")),r=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[o].concat(r).concat([a]).join("\n")}var c,i,l;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n=0;n<t.length;n++){var a=[].concat(t[n]);o&&(a[2]?a[2]="".concat(o," and ").concat(a[2]):a[2]=o),e.push(a)}},e}}]);
//# sourceMappingURL=app.bundle.js.map