!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1)}([function(n,e,t){"use strict";function r(n,e){for(var t=[],r=[],o=arguments.length;o-- >2;)t.push(arguments[o]);for(;t.length;){var u=t.pop();if(u&&u.pop)for(o=u.length;o--;)t.push(u[o]);else null!=u&&!0!==u&&!1!==u&&r.push(u)}return"function"==typeof n?n(e||{},r):{nodeName:n,attributes:e||{},children:r,key:e&&e.key}}function o(n,e,t,r){var o,u=[].map,i=r&&r.children[0]||null,l=i&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:u.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(i),c=[],f=!0,a=h(n),d=function n(e,t,r){for(var o in r)"function"==typeof r[o]?function(n,o){r[n]=function(n){var u=o(n);return"function"==typeof u&&(u=u(y(e,a),r)),u&&u!==(t=y(e,a))&&!u.then&&p(a=m(e,h(t,u),a)),u}}(o,r[o]):n(e.concat(o),t[o]=h(t[o]),r[o]=h(r[o]));return r}([],a,h(e));return p(),d;function s(n){return"function"==typeof n?s(n(a,d)):null!=n?n:""}function v(){o=!o;var n=s(t);for(r&&!o&&(i=function n(e,t,r,o,u){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var i=function n(e,t){var r="string"==typeof e||"number"==typeof e?document.createTextNode(e):(t=t||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName);var o=e.attributes;if(o){o.oncreate&&c.push(function(){o.oncreate(r)});for(var u=0;u<e.children.length;u++)r.appendChild(n(e.children[u]=s(e.children[u]),t));for(var i in o)N(r,i,o[i],null,t)}return r}(o,u);e.insertBefore(i,t),null!=r&&w(e,t,r),t=i}else if(null==r.nodeName)t.nodeValue=o;else{!function(n,e,t,r){for(var o in h(e,t))t[o]!==("value"===o||"checked"===o?n[o]:e[o])&&N(n,o,t[o],e[o],r);var u=f?t.oncreate:t.onupdate;u&&c.push(function(){u(n,e)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var l={},a={},d=[],v=r.children,p=o.children,m=0;m<v.length;m++){d[m]=t.childNodes[m];var y=b(v[m]);null!=y&&(l[y]=[d[m],v[m]])}for(var m=0,g=0;g<p.length;){var y=b(v[m]),j=b(p[g]=s(p[g]));if(a[y])m++;else if(null==j||j!==b(v[m+1]))if(null==j||f)null==y&&(n(t,d[m],v[m],p[g],u),g++),m++;else{var k=l[j]||[];y===j?(n(t,k[0],k[1],p[g],u),m++):k[0]?n(t,t.insertBefore(k[0],d[m]),k[1],p[g],u):n(t,d[m],null,p[g],u),a[j]=p[g],g++}else null==y&&w(t,d[m],v[m]),m++}for(;m<v.length;)null==b(v[m])&&w(t,d[m],v[m]),m++;for(var m in l)a[m]||w(t,l[m][0],l[m][1])}return t}(r,i,l,l=n)),f=!1;c.length;)c.pop()()}function p(){o||(o=!0,setTimeout(v))}function h(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t}function m(n,e,t){var r={};return n.length?(r[n[0]]=n.length>1?m(n.slice(1),e,t[n[0]]):e,h(t,r)):e}function y(n,e){for(var t=0;t<n.length;)e=e[n[t++]];return e}function b(n){return n?n.key:null}function g(n){return n.currentTarget.events[n.type](n)}function N(n,e,t,r,o){if("key"===e);else if("style"===e)for(var u in h(r,t)){var i=null==t||null==t[u]?"":t[u];"-"===u[0]?n[e].setProperty(u,i):n[e][u]=i}else"o"===e[0]&&"n"===e[1]?(e=e.slice(2),n.events?r||(r=n.events[e]):n.events={},n.events[e]=t,t?r||n.addEventListener(e,g):n.removeEventListener(e,g)):e in n&&"list"!==e&&!o?n[e]=null==t?"":t:null!=t&&!1!==t&&n.setAttribute(e,t),null!=t&&!1!==t||n.removeAttribute(e)}function w(n,e,t){function r(){n.removeChild(function n(e,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)n(e.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(e)}return e}(e,t))}var o=t.attributes&&t.attributes.onremove;o?o(e,r):r()}}t.r(e),t.d(e,"h",function(){return r}),t.d(e,"app",function(){return o})},function(n,e,t){"use strict";var r=t(0);(0,r.app)({count:0},{down:function(n){return function(e){return{count:e.count-n}}},up:function(n){return function(e){return{count:e.count+n}}}},function(n,e){return(0,r.h)("div",null,(0,r.h)("h1",null,n.count),(0,r.h)("button",{onclick:function(){return e.down(1)}},"-"),(0,r.h)("button",{onclick:function(){return e.up(1)}},"+"))},document.body)}]);