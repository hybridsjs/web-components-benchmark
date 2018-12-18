!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.dispatchEvent(new CustomEvent(e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}({bubbles:!1},n)))}function a(t,e){var n=window.ShadyCSS;return n&&!n.nativeShadow?t(n):e}function i(t){var e=String(t.tagName).toLowerCase();return"<".concat(e,">")}n.r(e);var u="ActiveXObject"in window;function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(t){return t},s=function(t){if("object"!==f(t))throw TypeError("[property] Argument is not an object: ".concat("undefined"==typeof v?"undefined":f(v)));return t&&Object.freeze(t)};function d(t,e){var n=f(t),r=l;switch(n){case"string":r=String;break;case"number":r=Number;break;case"boolean":r=Boolean;break;case"function":t=(r=t)();break;case"object":t&&Object.freeze(t),r=s}return{get:function(e){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:t},set:function(t,e,n){return r(e,n)},connect:"object"!==n&&"undefined"!==n?function(n,r,c){if(n[r]===t){var a=o(r);if(n.hasAttribute(a)){var i=n.getAttribute(a);n[r]=""===i||i}}return e&&e(n,r,c)}:e}}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var b=new WeakMap,m=new WeakMap,h=1e3/60,g=[];function w(t){var e=t.composedPath()[0];e===t.currentTarget&&(g[0]||requestAnimationFrame(function(){return function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n&&performance.now()-n>h)requestAnimationFrame(function(){return t(e)});else{var r=g[e],o=performance.now();if(r){if(b.has(r)){var c=b.get(r),i=m.get(r);try{var u=r[c];u!==i&&(m.set(r,u),u(),i||a(function(t){return t.styleElement(r)}))}catch(n){throw t(e+1,o),n}}t(e+1,o)}else a(function(t){return g.forEach(function(e){return t.styleSubtree(e)})}),g=[]}}()}),-1===g.indexOf(e)&&g.push(e))}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!=typeof t)throw TypeError("[render] The first argument must be a function: ".concat(y(t)));var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){p(t,e,n[e])})}return t}({shadowRoot:!0},e);return{get:function(e){var r=t(e);return function(){return r(e,n.shadowRoot?e.shadowRoot:e)}},connect:function(t,e){if(b.has(t))throw Error("[render] Render factory already used in '".concat(b.get(t),"' key"));if(n.shadowRoot&&!t.shadowRoot){var r={mode:"open"};"object"===y(n.shadowRoot)&&Object.assign(r,n.shadowRoot),t.attachShadow(r)}return t.addEventListener("@invalidate",w),b.set(t,e),function(){t.removeEventListener("@invalidate",w),b.delete(t)}}}}var E=new WeakMap;function O(t,e){var n=E.get(t);n||(n=new Map,E.set(t,n));var r=n.get(e);return r||(r={target:t,key:e,value:void 0,deps:new Set,state:1,checksum:0},n.set(e,r)),r}function N(t){var e=t.state,n=t.deps,r=e;return n.forEach(function(t){t.target[t.key],r+=t.state}),r}var j=null;function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){var e="function"==typeof Map?new Map:void 0;return(T=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return C(t,arguments,M(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),A(r,t)})(t)}function C(t,e,n){return(C=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&A(o,n.prototype),o}).apply(null,arguments)}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t){c(t,"@invalidate",{bubbles:!0,composed:!0})}var L=function(t,e){return e};function R(t,e){t.hybrids=e,t.connects=[],Object.keys(e).forEach(function(n){var r=e[n],o=_(r);"function"===o?r="render"===n?S(r):{get:r}:null!==r&&"object"===o&&("object"!==o||r.get||r.set)||(r=d(r)),r.get=r.get||L,Object.defineProperty(t.prototype,n,{get:function(){return function(t,e,n){var r=O(t,e);if(j===r)throw j=null,Error("[cache] Circular '".concat(e,"' get invocation in '").concat(i(t),"'"));j&&j.deps.add(r);var o=j;if(j=r,r.checksum&&r.checksum===N(r))return j=o,r.value;r.deps.clear();try{var c=n(t,r.value);c!==r.value&&(r.state+=1,r.value=c),r.checksum=N(r),j=o}catch(t){throw j=null,t}return r.value}(this,n,r.get)},set:r.set&&function(t){var e=this;!function(t,e,n,r,o){if(j)throw j=null,Error("[cache] Try to set '".concat(e,"' of '").concat(i(t),"' in get call"));var c=O(t,e),a=n(t,r,c.value);a!==c.value&&(c.state+=1,c.value=a,o())}(this,n,r.set,t,function(){return P(e)})},enumerable:!0,configurable:!1}),r.connect&&t.connects.push(function(t){return r.connect(t,n,function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&function(t,e,n){if(j)throw j=null,Error("[cache] Try to invalidate '".concat(e,"' in '").concat(i(t),"' get call"));var r=O(t,e);r.checksum=0,n&&(r.value=void 0)}(t,n),P(t)})})})}var W=new WeakMap;function D(t,e){var n=_(e);if("object"!==n&&"function"!==n)throw TypeError("[define] Invalid second argument. It must be an object or a function");var r=window.customElements.get(t);if("function"===n)return r!==e?window.customElements.define(t,e):r;if(r){if(r.hybrids===e)return r;throw Error("[define] Element '".concat(t,"' already defined"))}var o=function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),k(this,M(n).apply(this,arguments))}var r,o,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(n,T(HTMLElement)),r=n,c=[{key:"name",get:function(){return t}}],(o=[{key:"connectedCallback",value:function(){var t=this,e=this.constructor.connects.reduce(function(e,n){var r=n(t);return r&&e.add(r),e},new Set);W.set(this,e),P(this)}},{key:"disconnectedCallback",value:function(){W.get(this).forEach(function(t){return t()})}}])&&x(r.prototype,o),c&&x(r,c),n}();return R(o,e),customElements.define(t,o),o}function $(t){return Object.keys(t).reduce(function(e,n){var r,c=o(r=(r=n)[0].toLowerCase()+r.slice(1));return e[n]=D(c,t[n]),e},{})}function B(){return"object"===_(arguments.length<=0?void 0:arguments[0])?$(arguments.length<=0?void 0:arguments[0]):D.apply(void 0,arguments)}var F=new WeakMap;document.addEventListener("@invalidate",function(t){var e=F.get(t.composedPath()[0]);e&&e.forEach(function(t){return t()})});var H=new WeakMap,I={get:function(t,e){return H.has(t)?H.get(t):(void 0!==e&&H.set(t,e),e)},set:function(t,e){return H.set(t,e),e}};function X(t){for(var e;t&&(e=I.get(t))&&e.endNode;)t=e.endNode;return t}function q(t){var e=I.get(t),n=e.startNode;if(n)for(var r=n,o=X(e.endNode).nextSibling;r;){var c=r.nextSibling;r.parentNode.removeChild(r),r=c!==o&&c}}var z=new WeakMap;function G(t,e,n){var r=z.get(e),o=n.map(function(t,e){return{id:Object.prototype.hasOwnProperty.call(t,"id")?t.id:e,value:t,placeholder:null,available:!0}});if(z.set(e,o),r){var c=new Set;o.forEach(function(t){return c.add(t.id)}),r=r.filter(function(t){return!!c.has(t.id)||(q(t.placeholder),t.placeholder.parentNode.removeChild(t.placeholder),!1)})}var a=e,i=n.length-1,u=I.get(e);o.forEach(function(e,n){var o,c=r&&r.find(function(t){return t.available&&t.id===e.id});c?(c.available=!1,(o=c.placeholder).previousSibling!==a&&function(t,e){var n=I.get(t),r=n.startNode,o=X(n.endNode);e.parentNode.insertBefore(t,e.nextSibling);for(var c=t,a=r;a;){var i=a.nextSibling;c.parentNode.insertBefore(a,c.nextSibling),c=a,a=i!==o.nextSibling&&i}}(o,a),c.value!==e.value&&V(t,o,e.value)):(o=document.createTextNode(""),a.parentNode.insertBefore(o,a.nextSibling),V(t,o,e.value)),a=X(I.get(o).endNode||o),0===n&&(u.startNode=o),n===i&&(u.endNode=a),e.placeholder=o}),r&&r.forEach(function(t){t.available&&(q(t.placeholder),t.placeholder.parentNode.removeChild(t.placeholder))})}function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function V(t,e,n){var r=Array.isArray(n)?"array":U(n),o=I.get(e,{});switch(o.type!==r&&(q(e),o=I.set(e,{type:r}),""!==e.textContent&&(e.textContent="")),r){case"function":n(t,e);break;case"array":G(t,e,n);break;default:e.textContent="number"===r||n?n:""}}function Z(t){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var J=new WeakMap;function K(t){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var Q=new WeakMap;function Y(t,e,n){var r=Q.get(e)||new Set,o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set;return Array.isArray(t)?t.forEach(function(t){return e.add(t)}):null!==t&&"object"===K(t)?Object.keys(t).forEach(function(n){return t[n]&&e.add(n)}):e.add(t),e}(n);Q.set(e,o),o.forEach(function(t){e.classList.add(t),r.delete(t)}),r.forEach(function(t){e.classList.remove(t)})}function tt(t){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var et=new WeakMap;function nt(t,e,n){if(null===n||"object"!==tt(n))throw TypeError("Style value must be an object instance in ".concat(i(e),":"),n);var r=et.get(e)||new Map,c=Object.keys(n).reduce(function(t,c){var a=o(c),i=n[c];return i||0===i?e.style.setProperty(a,i):e.style.removeProperty(a),t.set(a,i),r.delete(a),t},new Map);r.forEach(function(t,n){e.style[n]=""}),et.set(e,c)}function rt(t,e,n){if("on"===e.substr(0,2))return function(t){return function(e,n,r,o){if(o&&n.removeEventListener(t,J.get(o),void 0!==o.options&&o.options),r){if("function"!=typeof r)throw Error("Event listener must be a function: ".concat(Z(r)));J.set(r,r.bind(null,e)),n.addEventListener(t,J.get(r),void 0!==r.options&&r.options)}}}(e.substr(2));switch(t){case"class":return Y;case"style":return nt;default:return function(r,o,c){if(n||o instanceof SVGElement||!(e in o))if(!1===c||null==c)o.removeAttribute(t);else{var a=!0===c?"":String(c);o.setAttribute(t,a)}else o[e]!==c&&(o[e]=c)}}}function ot(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,c=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ct(t){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var at=Date.now(),it=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"{{h-".concat(at,"-").concat(t,"}}")},ut=it("(\\d+)"),ft=new RegExp("^".concat(ut,"$")),lt=new RegExp(ut,"g"),st="--".concat(at,"--"),dt=new RegExp(st,"g"),pt=new WeakMap;var yt="object"===ct(window.ShadyDOM)&&window.ShadyDOM.inUse?function(t){var e;return{get currentNode(){return e},nextNode:function(){return!!(e=void 0===e?t.childNodes[0]:e.childNodes.length?e.childNodes[0]:e.nextSibling?e.nextSibling:e.parentNode.nextSibling)}}}:function(t){return document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1)},vt=document.createElement("div");function bt(t,e){var n=document.createElement("template"),r=[],o=function(t){var e=t.reduce(function(e,n,r){return 0===r?n:t.slice(r).join("").match(/\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)?"".concat(e,"\x3c!--").concat(it(r-1),"--\x3e").concat(n):e+it(r-1)+n},"");return u?e.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>\/]+)/g,function(t){return"".concat(st).concat(t)}):e}(t);if(e&&(o="<svg>".concat(o,"</svg>")),u?n.innerHTML=o:(vt.innerHTML="<template>".concat(o,"</template>"),n.content.appendChild(vt.children[0].content)),e){var c=n.content.firstChild;n.content.removeChild(c),Array.from(c.childNodes).forEach(function(t){return n.content.appendChild(t)})}!function(t){for(var e,n=document.createNodeIterator(t,NodeFilter.SHOW_COMMENT,null,!1);e=n.nextNode();)ft.test(e.textContent)&&(e.parentNode.insertBefore(document.createTextNode(e.textContent),e),e.parentNode.removeChild(e))}(n.content);for(var i=yt(n.content),f=0,l=function(){var n=i.currentNode;if(n.nodeType===Node.TEXT_NODE){var o=n.textContent;if(!o.match(ft)){var c=o.match(lt);if(c){var a=n;c.reduce(function(t,e){var n=ot(t.pop().split(e),2),r=n[0],o=n[1];return r&&t.push(r),t.push(e),o&&t.push(o),t},[o]).forEach(function(t,e){0===e?a.textContent=t:a=a.parentNode.insertBefore(document.createTextNode(t),a.nextSibling)})}}var l=n.textContent.match(ft);l&&(u||(n.textContent=""),r[l[1]]=[f,V])}else n.nodeType===Node.ELEMENT_NODE&&Array.from(n.attributes).forEach(function(o){var c=o.value.trim(),a=u?o.name.replace(st,""):o.name,i=c.match(ft);if(i){var l=t[i[1]].replace(/\s*=\s*['"]*$/g,"").split(" ").pop();r[i[1]]=[f,rt(a,l,e)],n.removeAttribute(o.name)}else{var s=c.match(lt);if(s){var d="attr__".concat(a);s.forEach(function(t,e){var n=ot(t.match(ft),2)[1];r[n]=[f,function(n,r,o){var i=I.get(r,{});i[d]=(i[d]||c).replace(t,null==o?"":o),1!==s.length&&e+1!==s.length||(r.setAttribute(a,i[d]),i[d]=void 0)}]}),o.value="",u&&a!==o.name&&(n.removeAttribute(o.name),n.setAttribute(a,""))}}});f+=1};i.nextNode();)l();return function(t,e,o){var c=I.get(e,{type:"function"});if(n!==c.template){c.template&&q(e);var i=document.importNode(function(t,e){return e?a(function(n){var r=pt.get(t);r||(r=new Map,pt.set(t,r));var o=r.get(e);if(!o){(o=document.createElement("template")).content.appendChild(t.content.cloneNode(!0)),r.set(e,o);var c=o.content.querySelectorAll("style");Array.from(c).forEach(function(t){for(var e=t.childNodes.length+1,n=0;n<e;n+=1)t.parentNode.insertBefore(document.createTextNode(it()),t)}),n.prepareTemplate(o,e.toLowerCase())}return o},t):t}(n,t.tagName).content,!0),f=yt(i),l=r.slice(0),s=0,d=l.shift(),p=[];for(Object.assign(c,{template:n,markers:p});f.nextNode();){var y=f.currentNode;for(y.nodeType===Node.TEXT_NODE&&(ft.test(y.textContent)?y.textContent="":u&&(y.textContent=y.textContent.replace(dt,"")));d&&d[0]===s;)p.push([y,d[1]]),d=l.shift();s+=1}var v=Array.from(i.childNodes);if(c.startNode=v[0],c.endNode=v[v.length-1],e.nodeType===Node.TEXT_NODE){var b=e;v.forEach(function(t){e.parentNode.insertBefore(t,b.nextSibling),b=t})}else e.appendChild(i)}c.markers.forEach(function(e,n){var r=ot(e,2),a=r[0],i=r[1];c.lastArgs&&c.lastArgs[n]===o[n]||i(t,a,o[n],c.lastArgs?c.lastArgs[n]:void 0)}),c.lastArgs=o}}var mt=new WeakMap;function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;return function(r,o){var c;e&&(c=setTimeout(function(){c=void 0,requestAnimationFrame(function(){e(r,o)})},n)),mt.set(o,t),t.then(function(e){c&&clearTimeout(c),mt.get(o)===t&&(e(r,o),mt.set(o,null))})}}function gt(t){return B(t),this}function wt(t){return this.id=t,this}var St=new Map;function Et(t,e,n){return Object.assign(function(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,c=function(t,e){return"".concat(e?"svg:":"").concat(t.join(it()))}(t,n),a=St.get(c);a||(a=bt(t,n),St.set(c,a)),a(r,o,e)},{define:gt,key:wt})}function Ot(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Et(t,n)}Object.assign(Ot,{resolve:ht}),Object.assign(function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Et(t,n,!0)},{resolve:ht});function Nt(t){const e=t,n=[];n[0]=[1],n[1]=[1,1];for(let t=2;t<e;t++){n[t]=[1];for(let e=1;e<=t-1;e++){const r=n[t-1];n[t][e]=r[e]+r[e-1],n[t].push(1)}}return n}const jt=(t,e)=>{t._length=parseInt(e.target.getAttribute("data-value")),t.list=Nt(t._length)};B("pascal-triangle",{list:Nt(100),_length:100,render:({list:t})=>Ot`
        <div>
            <button data-value="10" onclick="${jt}">Load 10</button>
            <button data-value="100" onclick="${jt}">Load 100</button>
            <button data-value="500" onclick="${jt}">Load 500</button>
        </div>
        <div>
            ${t.map(t=>Ot`
                            <div>
                                ${t.map(t=>Ot`
                                                <triangle-item
                                                    text="${t}"
                                                ></triangle-item>
                                            `)}
                            </div>
                        `)}
        </div>
    `}),B("triangle-item",{text:d("text"),render:({text:t})=>Ot`
            <span>${t}</span>
        `})}]);