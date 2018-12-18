!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";function n(t){return"string"==typeof t?t.split(/([_A-Z])/).reduce((t,e,s)=>{return`${t}${t&&s%2!=0?"-":""}${(e="_"===e?"":e).toLowerCase()}`}):t}s.r(e);const i=t=>null==t;function r(t){t=t||{};const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t};const a={bubbles:!0,cancelable:!0,composed:!1};const l=(t=HTMLElement)=>(class extends t{childrenUpdated(){super.childrenUpdated&&super.childrenUpdated(),this.props&&this.props.hasOwnProperty("children")&&(this.props={children:this.children})}connectedCallback(){if(super.connectedCallback&&super.connectedCallback(),this.childrenUpdated){const t=this.childrenUpdated.bind(this);this._mo=new MutationObserver(t),this._mo.observe(this,{childList:!0}),t()}}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._mo&&this._mo.disconnect()}}),c=(t=HTMLElement)=>(class extends t{get context(){if(this._context)return this._context;let t=this;for(;t=t.parentNode||t.host;)if("context"in t)return t.context;return{}}set context(t){this._context=t}}),d=(t=HTMLElement)=>(class extends t{connectedCallback(){this.connecting&&this.connecting(),super.connectedCallback&&super.connectedCallback(),this.connected&&this.connected()}disconnectedCallback(){this.disconnecting&&this.disconnecting(),super.disconnectedCallback&&super.disconnectedCallback(),this.disconnected&&this.disconnected()}});var h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t};function u(t,e){const{attribute:s}=e,i="object"==typeof s?h({},s):{source:s,target:s};return!0===i.source&&(i.source=n(t)),!0===i.target&&(i.target=n(t)),i}function p(t){return t}const m=new Map;function g(t){const e=t||{},s=function({constructor:t},s){const n=function(t,e){const{coerce:s,default:n,deserialize:i,serialize:r}=e;return{attribute:u(t,e),coerce:s||p,default:n,deserialize:i||p,serialize:r||p}}(s,e);t.hasOwnProperty("_propsNormalized")||(t._propsNormalized={}),t._propsNormalized[s]=n;const{attribute:{source:i,target:r}}=n;i&&(t._observedAttributes.push(i),t._attributeToPropertyMap[i]=s,i!==r&&(t._attributeToAttributeMap[i]=r)),Object.defineProperty(t.prototype,s,{configurable:!0,get(){const t=this._props[s];return null==t?n.default:t},set(t){const{attribute:{target:e},serialize:i}=n;if(e){const s=i?i(t):t;null==s?this.removeAttribute(e):this.setAttribute(e,s)}this._props[s]=n.coerce(t),this.triggerUpdate()}})};return Object.keys(e).forEach(t=>s[t]=e[t]),s}const b=(t=HTMLElement)=>{var e,s;return s=e=class extends t{constructor(...t){var e;return e=super(...t),this._prevProps={},this._prevState={},this._props={},this._state={},e}static get observedAttributes(){return function(t){if(t.hasOwnProperty("_propsNormalized"))return;const{props:e}=t;r(e).forEach(s=>{let n=e[s]||e.any;m.has(n)&&(n=m.get(n)),"function"!=typeof n&&(n=g(n)),n({constructor:t},s)})}(this),this._observedAttributes.concat(super.observedAttributes||[])}static get props(){return this._props}static set props(t){this._props=t}get props(){return r(this.constructor.props).reduce((t,e)=>(t[e]=this[e],t),{})}set props(t){const e=this.constructor.props;r(t).forEach(s=>s in e&&(this[s]=t[s]))}get state(){return this._state}set state(t){this._state=t,this.triggerUpdate()}attributeChangedCallback(t,e,s){const{_attributeToAttributeMap:n,_attributeToPropertyMap:i,_propsNormalized:r}=this.constructor;super.attributeChangedCallback&&super.attributeChangedCallback(t,e,s);const o=i[t];if(o){const t=r[o];if(t){const{default:e,deserialize:n}=t,i=n?n(s):s;this._props[o]=null==i?e:i,this.triggerUpdate()}}const a=n[t];a&&(null==s?this.removeAttribute(a):this.setAttribute(a,s))}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.triggerUpdate()}shouldUpdate(){return!0}triggerUpdate(){var t;this._updating||(this._updating=!0,t=(()=>{const{_prevProps:t,_prevState:e}=this;this.updating&&this.updating(t,e),this.updated&&this.shouldUpdate(t,e)&&this.updated(t,e),this._prevProps=this.props,this._prevState=this.state,this._updating=!1}),window.Promise?Promise.resolve().then(t):setTimeout(t))}},e._attributeToAttributeMap={},e._attributeToPropertyMap={},e._observedAttributes=[],e._props={},s},{parse:f,stringify:v}=JSON,x=Object.freeze({source:!0}),_=t=>i(t)?0:Number(t),y=g({attribute:x}),w=g({attribute:x,coerce:t=>Array.isArray(t)?t:i(t)?null:[t],default:Object.freeze([]),deserialize:f,serialize:v}),k=g({attribute:x,coerce:Boolean,default:!1,deserialize:t=>!i(t),serialize:t=>t?"":null}),N=g({attribute:x,default:0,coerce:_,deserialize:_,serialize:t=>i(t)?null:String(Number(t))}),E=g({attribute:x,default:Object.freeze({}),deserialize:f,serialize:v}),T=g({attribute:x,default:"",coerce:String,serialize:t=>i(t)?null:String(t)});m.set(Array,w),m.set(Boolean,k),m.set(Number,N),m.set(Object,E),m.set(String,T);const C={any:y,array:w,boolean:k,number:N,object:E,string:T},A=(t=HTMLElement)=>(class extends t{get renderRoot(){return super.renderRoot||((t=this)._shadowRoot||(t._shadowRoot=t.shadowRoot||t.attachShadow({mode:"open"})));var t}renderer(t,e){super.renderer?super.renderer(t,e):t.innerHTML=e()||""}updated(t,e){super.updated&&super.updated(t,e),this.rendering&&this.rendering(),this.renderer(this.renderRoot,()=>this.render&&this.render(this)),this.rendered&&this.rendered()}}),S=new WeakMap,O=t=>"function"==typeof t&&S.has(t),V=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,M=(t,e,s=null)=>{let n=e;for(;n!==s;){const e=n.nextSibling;t.removeChild(n),n=e}},P={},z=`{{lit-${String(Math.random()).slice(2)}}}`,j=`\x3c!--${z}--\x3e`,$=new RegExp(`${z}|${j}`),L="$lit$";class H{constructor(t,e){this.parts=[],this.element=e;let s=-1,n=0;const i=[],r=e=>{const o=e.content,a=document.createTreeWalker(o,133,null,!1);let l,c;for(;a.nextNode();){s++,l=c;const e=c=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const i=e.attributes;let r=0;for(let t=0;t<i.length;t++)i[t].value.indexOf(z)>=0&&r++;for(;r-- >0;){const i=t.strings[n],r=B.exec(i)[2],o=r.toLowerCase()+L,a=e.getAttribute(o).split($);this.parts.push({type:"attribute",index:s,name:r,strings:a}),e.removeAttribute(o),n+=a.length-1}}"TEMPLATE"===e.tagName&&r(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(z)<0)continue;const r=e.parentNode,o=t.split($),a=o.length-1;n+=a;for(let t=0;t<a;t++)r.insertBefore(""===o[t]?R():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:s++});r.insertBefore(""===o[a]?R():document.createTextNode(o[a]),e),i.push(e)}else if(8===e.nodeType)if(e.nodeValue===z){const t=e.parentNode,r=e.previousSibling;null===r||r!==l||r.nodeType!==Node.TEXT_NODE?t.insertBefore(R(),e):s--,this.parts.push({type:"node",index:s++}),i.push(e),null===e.nextSibling?t.insertBefore(R(),e):s--,c=l,n++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(z,t+1));)this.parts.push({type:"node",index:-1})}}};r(e);for(const t of i)t.parentNode.removeChild(t)}}const U=t=>-1!==t.index,R=()=>document.createComment(""),B=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class W{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=V?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let s=0,n=0;const i=t=>{const r=document.createTreeWalker(t,133,null,!1);let o=r.nextNode();for(;s<e.length&&null!==o;){const t=e[s];if(U(t))if(n===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings,this.options));s++}else n++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return i(t),V&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class I{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="";for(let s=0;s<t;s++){const t=this.strings[s];let n=!1;e+=t.replace(B,(t,e,s,i)=>(n=!0,e+s+L+i+z)),n||(e+=j)}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F=t=>null===t||!("object"==typeof t||"function"==typeof t);class D{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new J(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:String(e);else s+="string"==typeof t?t:String(t)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class J{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===P||F(t)&&t===this.value||(this.value=t,O(t)||(this.committer.dirty=!0))}commit(){for(;O(this.value);){const t=this.value;this.value=P,t(this)}this.value!==P&&this.committer.commit()}}class X{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(R()),this.endNode=t.appendChild(R())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=R()),t._insert(this.endNode=R())}insertAfterPart(t){t._insert(this.startNode=R()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;O(this._pendingValue);){const t=this._pendingValue;this._pendingValue=P,t(this)}const t=this._pendingValue;t!==P&&(F(t)?t!==this.value&&this._commitText(t):t instanceof I?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const s=new W(e,t.processor,this.options),n=s._clone();s.update(t.values),this._commitNode(n),this.value=s}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)void 0===(s=e[n])&&(s=new X(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){M(this.startNode.parentNode,t.nextSibling,this.endNode)}}class K{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;O(this._pendingValue);){const t=this._pendingValue;this._pendingValue=P,t(this)}if(this._pendingValue===P)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=P}}class Z extends D{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new q(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class q extends J{}let G=!1;try{const t={get capture(){return G=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class Q{constructor(t,e,s){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;O(this._pendingValue);){const t=this._pendingValue;this._pendingValue=P,t(this)}if(this._pendingValue===P)return;const t=this._pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=Y(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=P}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Y=t=>t&&(G?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const tt=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];return"."===i?new Z(t,e.slice(1),s).parts:"@"===i?[new Q(t,e.slice(1),n.eventContext)]:"?"===i?[new K(t,e.slice(1),s)]:new D(t,e,s).parts}handleTextExpression(t){return new X(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function et(t){let e=st.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},st.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(z);return void 0===(s=e.keyString.get(n))&&(s=new H(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const st=new Map,nt=new WeakMap,it=(t,...e)=>new I(t,e,"html",tt);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const rt=((t=HTMLElement)=>(class extends t{constructor(...t){var e;return e=super(...t),this.__events={},e}static get observedAttributes(){return(this.events||[]).forEach(t=>{const e=`on${t[0].toUpperCase()+t.substring(1)}`;Object.defineProperty(this.prototype,e,{get(){return this.__events[t]||(this[e]=(()=>{})),this.__events[t]},set(e){this.__events[t]=(s=>{e(s),function(t,e,s){const n=o({},a,s);let i;"composed"in CustomEvent.prototype?i=new CustomEvent(e,n):((i=document.createEvent("CustomEvent")).initCustomEvent(e,n.bubbles,n.cancelable,n.detail),Object.defineProperty(i,"composed",{value:n.composed})),t.dispatchEvent(i)}(this,t,{detail:s})}),this.triggerUpdate&&this.triggerUpdate()}})}),super.observedAttributes}}))(((t=HTMLElement)=>d(l(c(b(A(t||HTMLElement))))))(((t=HTMLElement)=>(class extends t{renderer(t,e){((t,e,s)=>{let n=nt.get(e);void 0===n&&(M(e,e.firstChild),nt.set(e,n=new X(Object.assign({templateFactory:et},s))),n.appendInto(e)),n.setValue(t),n.commit()})(e(),t)}}))()));class ot extends rt{constructor(...t){var e;return e=super(...t),this.state={value:""},this.handleInput=(t=>{this.state={value:t.target.value}}),this.handleSubmit=(t=>{t.preventDefault(),this.state.value&&(this.onSubmit({value:this.state.value}),this.state={value:""})}),e}render({handleInput:t,handleSubmit:e}){return it`
      <style>
        :host {
          display: block;
        }

        form {
          position: relative;
          font-size: 24px;
          border-bottom: 1px solid #ededed;
        }

        input {
          padding: 16px 16px 16px 60px;
          border: none;
          background: rgba(0, 0, 0, 0.003);
          position: relative;
          margin: 0;
          width: 100%;
          font-size: 24px;
          font-family: inherit;
          font-weight: inherit;
          line-height: 1.4em;
          border: 0;
          outline: none;
          color: inherit;
          padding: 6px;
          border: 1px solid #CCC;
          box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
        }
      </style>
      <form @submit="${e}">
        <input
          value="${this.state.value}"
          type="text"
          placeholder="What needs to be done?"
          @input="${t}"
        />
      </form>
    `}}ot.events=["submit"];class at extends rt{constructor(...t){var e;return e=super(...t),this.handleCheck=(t=>{this.onCheck({index:this.index,value:t.target.checked})}),this.handleRemove=(()=>{this.onRemove({index:this.index})}),e}render({checked:t,handleCheck:e,handleRemove:s}){return it`
      <style>
        :host {
          display: block;
        }

        li {
          font-size: 24px;
          display: block;
          position: relative;
          border-bottom: 1px solid #ededed;
        }

        li input {
          text-align: center;
          width: 40px;
          /* auto, since non-WebKit browsers doesn't support input styling */
          height: auto;
          position: absolute;
          top: 9px;
          bottom: 0;
          margin: auto 0;
          border: none;
          /* Mobile Safari */
          -webkit-appearance: none;
          appearance: none;
        }

        li input:after {
          content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
        }

        li input:checked:after {
          content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
        }

        li label {
          white-space: pre;
          word-break: break-word;
          padding: 15px 60px 15px 15px;
          margin-left: 45px;
          display: block;
          line-height: 1.2;
          transition: color 0.4s;
        }

        li.completed label {
          color: #d9d9d9;
          text-decoration: line-through;
        }

        li button,
        li input[type="checkbox"] {
          outline: none;
        }

        li button {
          margin: 0;
          padding: 0;
          border: 0;
          background: none;
          font-size: 100%;
          vertical-align: baseline;
          font-family: inherit;
          font-weight: inherit;
          color: inherit;
          -webkit-appearance: none;
          appearance: none;
          -webkit-font-smoothing: antialiased;
          -moz-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        li button {
          position: absolute;
          top: 0;
          right: 10px;
          bottom: 0;
          width: 40px;
          height: 40px;
          margin: auto 0;
          font-size: 30px;
          color: #cc9a9a;
          margin-bottom: 11px;
          transition: color 0.2s ease-out;
        }

        li button:hover {
          color: #af5b5e;
        }
      </style>
      <li class="${t?"completed":""}">
        <input type="checkbox" ?checked="${t}" @change="${e}" />
        <label><slot></slot></label>
        <button @click="${s}">x</button>
      </li>
    `}}at.events=["check","remove"],at.props={checked:C.boolean,index:C.number},customElements.define("my-todo",class extends rt{constructor(...t){var e;return e=super(...t),this.state={list:[{text:"my initial todo",checked:!1},{text:"Learn about Web Components",checked:!0}]},this.handleCheck=(t=>{this.state.list[t.detail.index].checked=t.detail.value,this.state=this.state}),this.handleRemove=(t=>{this.state={list:this.state.list.filter((e,s)=>s!==t.detail.index)}}),this.handleSubmit=(t=>{this.state={list:[...this.state.list,{text:t.detail.value,checked:!1}]}}),e}render({handleCheck:t,handleRemove:e,handleSubmit:s}){return it`
      <style>
        :host {
          display: block;
        }

        h1 {
          font-size: 60px;
          font-weight: 100;
          text-align: center;
          color: rgba(175, 47, 47, 0.15);
        }

        section {
          background: #fff;
          margin: 130px 0 40px 0;
          position: relative;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
        }

        #list-container {
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid #e6e6e6;
        }
      </style>
      <h1>SkateJS & lit-html</h1>
      <section>
        <todo-input @submit="${s}"></todo-input>
        <ul id="list-container">
          ${this.state.list.map(({checked:s,text:n},i)=>it`
              <todo-item
                .checked="${s}"
                .index="${i}"
                @check="${t}"
                @remove="${e}"
              >${n}</todo-item>
            `)}
        </ul>
      </section>
    `}}),customElements.define("todo-input",ot),customElements.define("todo-item",at)}]);