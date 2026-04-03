var AlarmoCard=function(e){"use strict";function t(e,t,i,a){var s,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}function i(e,t,i,a,s,o,r){try{var n=e[o](r),l=n.value}catch(e){return void i(e)}n.done?t(l):Promise.resolve(l).then(a,s)}function a(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t);if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach(function(t){a(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}"function"==typeof SuppressedError&&SuppressedError;var r=globalThis,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),d=new WeakMap;let c=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){var e=this.o,t=this.t;if(n&&void 0===e){var i=void 0!==t&&1===t.length;i&&(e=d.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&d.set(t,e))}return e}toString(){return this.cssText}};var h,u,p,_=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=1===e.length?e[0]:i.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new c(s,e,l)},g=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{var t="";for(var i of e.cssRules)t+=i.cssText;return(e=>new c("string"==typeof e?e:e+"",void 0,l))(t)})(e):e,{is:m,defineProperty:v,getOwnPropertyDescriptor:b,getOwnPropertyNames:f,getOwnPropertySymbols:y,getPrototypeOf:w}=Object,$=globalThis,k=$.trustedTypes,x=k?k.emptyScript:"",A=$.reactiveElementPolyfillSupport,C=(e,t)=>e,O={toAttribute(e,t){switch(t){case Boolean:e=e?x:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){var i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},z=(e,t)=>!m(e,t),S={attribute:!0,type:String,converter:O,reflect:!1,useDefault:!1,hasChanged:z};null!==(h=Symbol.metadata)&&void 0!==h||(Symbol.metadata=Symbol("metadata")),null!==(u=$.litPropertyMetadata)&&void 0!==u||($.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S;if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){var i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&v(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){var a,{get:s,set:o}=null!==(a=b(this.prototype,e))&&void 0!==a?a:{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){var a=null==s?void 0:s.call(this);null!=o&&o.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:S}static _$Ei(){if(!this.hasOwnProperty(C("elementProperties"))){var e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}}static finalize(){if(!this.hasOwnProperty(C("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){var e=this.properties,t=[...f(e),...y(e)];for(var i of t)this.createProperty(i,e[i])}var a=this[Symbol.metadata];if(null!==a){var s=litPropertyMetadata.get(a);if(void 0!==s)for(var[o,r]of s)this.elementProperties.set(o,r)}for(var[n,l]of(this._$Eh=new Map,this.elementProperties)){var d=this._$Eu(n,l);void 0!==d&&this._$Eh.set(d,n)}this.elementStyles=this.finalizeStyles(this.styles)}}static finalizeStyles(e){var t=[];if(Array.isArray(e)){var i=new Set(e.flat(1/0).reverse());for(var a of i)t.unshift(g(a))}else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){var i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}_$E_(){var e=new Map,t=this.constructor.elementProperties;for(var i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e,t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(var i of t){var a=document.createElement("style"),s=r.litNonce;void 0!==s&&a.setAttribute("nonce",s),a.textContent=i.cssText,e.appendChild(a)}})(t,this.constructor.elementStyles),t}connectedCallback(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$EO)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){var s,o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:O).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(e,t){var i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){var s,o,r,n=i.getPropertyOptions(a),l="function"==typeof n.converter?{fromAttribute:n.converter}:void 0!==(null===(s=n.converter)||void 0===s?void 0:s.fromAttribute)?n.converter:O;this._$Em=a;var d=l.fromAttribute(t,n.type);this[a]=null!==(o=null!=d?d:null===(r=this._$Ej)||void 0===r?void 0:r.get(a))&&void 0!==o?o:d,this._$Em=null}}requestUpdate(e,t,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4?arguments[4]:void 0;if(void 0!==e){var o,r,n=this.constructor;if(!1===a&&(s=this[e]),null!=i||(i=n.getPropertyOptions(e)),!((null!==(o=i.hasChanged)&&void 0!==o?o:z)(s,t)||i.useDefault&&i.reflect&&s===(null===(r=this._$Ej)||void 0===r?void 0:r.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,i,a){var s,o,r,{useDefault:n,reflect:l,wrapped:d}=i;n&&!(null!==(s=this._$Ej)&&void 0!==s?s:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,null!==(o=null!=a?a:t)&&void 0!==o?o:this[e]),!0!==d||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===l&&this._$Em!==e&&(null!==(r=this._$Eq)&&void 0!==r?r:this._$Eq=new Set).add(e))}_$EP(){var e=this;return function(e){return function(){var t=this,a=arguments;return new Promise(function(s,o){var r=e.apply(t,a);function n(e){i(r,s,o,n,l,"next",e)}function l(e){i(r,s,o,n,l,"throw",e)}n(void 0)})}}(function*(){e.isUpdatePending=!0;try{yield e._$ES}catch(t){Promise.reject(t)}var t=e.scheduleUpdate();return null!=t&&(yield t),!e.isUpdatePending})()}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(this.isUpdatePending){if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(var[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}var a=this.constructor.elementProperties;if(a.size>0)for(var[s,o]of a){var{wrapped:r}=o,n=this[s];!0!==r||this._$AL.has(s)||void 0===n||this.C(s,void 0,o,n)}}var l=!1,d=this._$AL;try{var c;(l=this.shouldUpdate(d))?(this.willUpdate(d),null!==(c=this._$EO)&&void 0!==c&&c.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(d)):this._$EM()}catch(d){throw l=!1,this._$EM(),d}l&&this._$AE(d)}}willUpdate(e){}_$AE(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};var j;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[C("elementProperties")]=new Map,E[C("finalized")]=new Map,null!=A&&A({ReactiveElement:E}),(null!==(p=$.reactiveElementVersions)&&void 0!==p?p:$.reactiveElementVersions=[]).push("2.1.2");var P=globalThis,M=e=>e,T=P.trustedTypes,L=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,D="$lit$",N="lit$".concat(Math.random().toFixed(9).slice(2),"$"),H="?"+N,U="<".concat(H,">"),R=document,B=()=>R.createComment(""),F=e=>null===e||"object"!=typeof e&&"function"!=typeof e,V=Array.isArray,I="[ \t\n\f\r]",q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,W=/>/g,G=RegExp(">|".concat(I,"(?:([^\\s\"'>=/]+)(").concat(I,"*=").concat(I,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),K=/'/g,J=/"/g,Y=/^(?:script|style|textarea|title)$/i,Q=(e=>function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];return{_$litType$:e,strings:t,values:a}})(1),X=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),te=new WeakMap,ie=R.createTreeWalker(R,129);function ae(e,t){if(!V(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(t):t}var se=(e,t)=>{for(var i,a=e.length-1,s=[],o=2===t?"<svg>":3===t?"<math>":"",r=q,n=0;n<a;n++){for(var l=e[n],d=void 0,c=void 0,h=-1,u=0;u<l.length&&(r.lastIndex=u,null!==(c=r.exec(l)));)u=r.lastIndex,r===q?"!--"===c[1]?r=Z:void 0!==c[1]?r=W:void 0!==c[2]?(Y.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=G):void 0!==c[3]&&(r=G):r===G?">"===c[0]?(r=null!=i?i:q,h=-1):void 0===c[1]?h=-2:(h=r.lastIndex-c[2].length,d=c[1],r=void 0===c[3]?G:'"'===c[3]?J:K):r===J||r===K?r=G:r===Z||r===W?r=q:(r=G,i=void 0);var p=r===G&&e[n+1].startsWith("/>")?" ":"";o+=r===q?l+U:h>=0?(s.push(d),l.slice(0,h)+D+l.slice(h)+N+p):l+N+(-2===h?n:p)}return[ae(e,o+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class oe{constructor(e,t){var i,{strings:a,_$litType$:s}=e;this.parts=[];var o=0,r=0,n=a.length-1,l=this.parts,[d,c]=se(a,s);if(this.el=oe.createElement(d,t),ie.currentNode=this.el.content,2===s||3===s){var h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;null!==(i=ie.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(var u of i.getAttributeNames())if(u.endsWith(D)){var p=c[r++],_=i.getAttribute(u).split(N),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:g[2],strings:_,ctor:"."===g[1]?ce:"?"===g[1]?he:"@"===g[1]?ue:de}),i.removeAttribute(u)}else u.startsWith(N)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(Y.test(i.tagName)){var m=i.textContent.split(N),v=m.length-1;if(v>0){i.textContent=T?T.emptyScript:"";for(var b=0;b<v;b++)i.append(m[b],B()),ie.nextNode(),l.push({type:2,index:++o});i.append(m[v],B())}}}else if(8===i.nodeType)if(i.data===H)l.push({type:2,index:o});else for(var f=-1;-1!==(f=i.data.indexOf(N,f+1));)l.push({type:7,index:o}),f+=N.length-1;o++}}static createElement(e,t){var i=R.createElement("template");return i.innerHTML=e,i}}function re(e,t){var i,a,s,o,r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,l=arguments.length>3?arguments[3]:void 0;if(t===X)return t;var d=void 0!==l?null===(i=n._$Co)||void 0===i?void 0:i[l]:n._$Cl,c=F(t)?void 0:t._$litDirective$;return(null===(a=d)||void 0===a?void 0:a.constructor)!==c&&(null!==(s=d)&&void 0!==s&&null!==(o=s._$AO)&&void 0!==o&&o.call(s,!1),void 0===c?d=void 0:(d=new c(e))._$AT(e,n,l),void 0!==l?(null!==(r=n._$Co)&&void 0!==r?r:n._$Co=[])[l]=d:n._$Cl=d),void 0!==d&&(t=re(e,d._$AS(e,t.values),d,l)),t}class ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t,{el:{content:i},parts:a}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:R).importNode(i,!0);ie.currentNode=s;for(var o=ie.nextNode(),r=0,n=0,l=a[0];void 0!==l;){var d;if(r===l.index){var c=void 0;2===l.type?c=new le(o,o.nextSibling,this,e):1===l.type?c=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(c=new pe(o,this,e)),this._$AV.push(c),l=a[++n]}r!==(null===(d=l)||void 0===d?void 0:d.index)&&(o=ie.nextNode(),r++)}return ie.currentNode=R,s}p(e){var t=0;for(var i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class le{get _$AU(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}constructor(e,t,i,a){var s;this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=null===(s=null==a?void 0:a.isConnected)||void 0===s||s}get parentNode(){var e,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e){e=re(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),F(e)?e===ee||null==e||""===e?(this._$AH!==ee&&this._$AR(),this._$AH=ee):e!==this._$AH&&e!==X&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>V(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ee&&F(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){var t,{values:i,_$litType$:a}=e,s="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=oe.createElement(ae(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.p(i);else{var o=new ne(s,this),r=o.u(this.options);o.p(i),this.T(r),this._$AH=o}}_$AC(e){var t=te.get(e.strings);return void 0===t&&te.set(e.strings,t=new oe(e)),t}k(e){V(this._$AH)||(this._$AH=[],this._$AR());var t,i=this._$AH,a=0;for(var s of e)a===i.length?i.push(t=new le(this.O(B()),this.O(B()),this,this.options)):t=i[a],t._$AI(s),a++;a<i.length&&(this._$AR(t&&t._$AB.nextSibling,a),i.length=a)}_$AR(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e!==this._$AB;){var i,a=M(e).nextSibling;M(e).remove(),e=a}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class de{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,s){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ee}_$AI(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,s=this.strings,o=!1;if(void 0===s)e=re(this,e,t,0),(o=!F(e)||e!==this._$AH&&e!==X)&&(this._$AH=e);else{var r,n,l=e;for(e=s[0],r=0;r<s.length-1;r++)(n=re(this,l[i+r],t,r))===X&&(n=this._$AH[r]),o||(o=!F(n)||n!==this._$AH[r]),n===ee?e=ee:e!==ee&&(e+=(null!=n?n:"")+s[r+1]),this._$AH[r]=n}o&&!a&&this.j(e)}j(e){e===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class ce extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ee?void 0:e}}class he extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ee)}}class ue extends de{constructor(e,t,i,a,s){super(e,t,i,a,s),this.type=5}_$AI(e){var t;if((e=null!==(t=re(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:ee)!==X){var i=this._$AH,a=e===ee&&i!==ee||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==ee&&(i===ee||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}class pe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}}var _e=P.litHtmlPolyfillSupport;null!=_e&&_e(oe,le),(null!==(j=P.litHtmlVersions)&&void 0!==j?j:P.litHtmlVersions=[]).push("3.3.2");var ge,me,ve=globalThis;class be extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t,i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(e){var t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var a,s=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t,o=s._$litPart$;if(void 0===o){var r,n=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new le(t.insertBefore(B(),n),n,void 0,null!=i?i:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return X}}be._$litElement$=!0,be.finalized=!0,null===(ge=ve.litElementHydrateSupport)||void 0===ge||ge.call(ve,{LitElement:be});var fe=ve.litElementPolyfillSupport;null==fe||fe({LitElement:be}),(null!==(me=ve.litElementVersions)&&void 0!==me?me:ve.litElementVersions=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var ye=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},we={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:z},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,{kind:a,metadata:s}=i,o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===a){var{name:r}=i;return{set(i){var a=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,a,e,!0,i)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===a){var{name:n}=i;return function(i){var a=this[n];t.call(this,i),this.requestUpdate(n,a,e,!0,i)}}throw Error("Unsupported decorator location: "+a)};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ke(e){return(t,i)=>"object"==typeof i?$e(e,t,i):((e,t,i)=>{var a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function xe(e){return ke(o(o({},e),{},{state:!0,attribute:!1}))}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Ae="number";var Ce;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(Ce||(Ce={}));const Oe={[Ce.ArmedAway]:"hass:shield-lock",[Ce.ArmedHome]:"hass:shield-home",[Ce.ArmedNight]:"hass:shield-moon",[Ce.ArmedVacation]:"hass:shield-airplane",[Ce.ArmedCustomBypass]:"hass:security",[Ce.Disarmed]:"hass:shield-off",[Ce.Arming]:"hass:shield-outline",[Ce.Pending]:"hass:shield-outline",[Ce.Triggered]:"hass:bell-ring"};var ze;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm"}(ze||(ze={}));const Se={[ze.ArmAway]:"mdi:lock",[ze.ArmHome]:"mdi:home",[ze.ArmNight]:"mdi:moon-waning-crescent",[ze.ArmVacation]:"mdi:airplane",[ze.ArmCustomBypass]:"mdi:shield",[ze.Disarm]:"mdi:shield-off"},Ee={[ze.ArmAway]:Ce.ArmedAway,[ze.ArmHome]:Ce.ArmedHome,[ze.ArmNight]:Ce.ArmedNight,[ze.ArmVacation]:Ce.ArmedVacation,[ze.ArmCustomBypass]:Ce.ArmedCustomBypass,[ze.Disarm]:Ce.Disarmed};var je;!function(e){e.Disarm="disarm",e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired",e.ReadyToArmModesChanged="ready_to_arm_modes_changed"}(je||(je={}));const Pe="alarmo_updated",Me=["arming","pending"],Te={type:"",entity:"",name:"",keep_keypad_visible:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0,show_ready_indicator:!0,show_bypassed_sensors:!0,use_code_dialog:!1,hide_keypad:!1},Le=2.5,De={skip_delay:!1,force:!1};var Ne;!function(e){e.Red="red",e.Pink="pink",e.Purple="purple",e.DeepPurple="deep-purple",e.Indigo="indigo",e.Blue="blue",e.LightBlue="light-blue",e.Cyan="cyan",e.Teal="teal",e.Green="green",e.LightGreen="light-green",e.Lime="lime",e.Yellow="yellow",e.Amber="amber",e.Orange="orange",e.DeepOrange="deep-orange",e.Brown="brown",e.LightGrey="light-grey",e.Grey="grey",e.DarkGrey="dark-grey",e.BlueGrey="blue-grey",e.Black="black",e.White="white"}(Ne||(Ne={}));var He={heading:"Možnosti aktivace",skip_delay:"Přeskočit čas pro vystup",force:"Bypass otevřených senzorů"},Ue={keep_keypad_visible:"Zachovat klávesnici vždy viditelnou, i když není vyžadován žádný kód.",button_scale_actions:"Měřítko použité pro změnu velikosti tlačítek akcí.",button_scale_keypad:"Měřítko použité pro změnu velikosti tlačítek klávesnice.",show_messages:"Zobrazit diagnostické zprávy při spuštění alarmu nebo nemožnosti aktivace.",show_ready_indicator:"Zobrazit indikátor připraveno/nepřipraveno na tlačítkách režimu aktivace.",show_bypassed_sensors:"Zobrazit varování při aktivaci alarmu s přemostěnými senzory.",use_code_dialog:"Zobrazte klávesnici pro zadání kódu jako vyskakovací dialog.",hide_keypad:"Skrýt tlačítka klávesnice pro zadávání kódu.",available_actions:"Dostupné akce:",action_dialog:{title:"Upravit zobrazení akce '{action}'",show_button:{title:"Viditelnost akčního tlačítka",options:{always:"Vždy zobrazeno",never:"Nikdy zobrazeno",disarmed:"Zobrazit pouze při odzbrojení",armed:"Zobrazit pouze při zapnutí"}},button_label:"Přepsat popisek tlačítka",button_icon:"Ikona zobrazeného tlačítka",state_label:"Přepsat popisek stavu",color:"Přepsat barvu použitou pro akci"}},Re={blocking_sensors:"Nelze aktivovat kvůli následujícím senzorům",triggered_sensors:"Alarm byl spuštěn následujícími senzory",bypassed_sensors:"Jsou tam přemostěné senzory"},Be={arm_options:He,editor:Ue,errors:Re},Fe={heading:"Scharfschaltungsoptionen",skip_delay:"Ausgangsverzögerung überspringen",force:"Offene Sensoren ignorieren"},Ve={keep_keypad_visible:"Zeige das Pin-Eingabefeld immer an, auch wenn kein Code erfordert ist.",button_scale_actions:"Skalierungsfaktor für Buttongröße der Aktionen.",button_scale_keypad:"Skalierungsfaktor für Buttongröße der Pin-Eingabefeld.",show_messages:"Anzeige von Diagnosemeldungen, wenn der Alarm ausgelöst wird oder nicht scharf geschaltet werden kann.",show_ready_indicator:"Zeigt die Bereitschafts-/Nicht-Bereitschaftsanzeige auf den Scharfschaltmodus-Tasten an.",show_bypassed_sensors:"Warnung anzeigen, wenn der Alarm mit umgangenen Sensoren aktiviert wird.",use_code_dialog:"Zeigen Sie die Tastatur zur Codeeingabe als Popup-Dialog an.",hide_keypad:"Blenden Sie die Tasten der Tastatur zur Codeeingabe aus.",available_actions:"Verfügbare Aktionen:",action_dialog:{title:"Anzeige der Aktion '{action}' anpassen",show_button:{title:"Sichtbarkeit der Aktionsschaltfläche",options:{always:"Immer angezeigt",never:"Nie angezeigt",disarmed:"Nur im deaktivierten Zustand anzeigen",armed:"Nur im aktivierten Zustand anzeigen"}},button_label:"Überschreibung der Tastenbeschriftung",button_icon:"Angezeigtes Schaltflächensymbol",state_label:"Überschreibung der Statusbezeichnung",color:"Die für die Aktion verwendete Farbe überschreiben"}},Ie={blocking_sensors:"Konnte nicht scharf geschaltet werden, da folgende Sensoren geöffnet sind",triggered_sensors:"Alarm wurde durch folgende Sensoren ausgelöst",bypassed_sensors:"Es gibt umgangene Sensoren"},qe={arm_options:Fe,editor:Ve,errors:Ie},Ze={heading:"Επιλογές για όπλισμα",skip_delay:"Παράλειψη καθυστέρησης εξόδου",force:"Παράκαμψη ανοιχτών αισθητήρων"},We={keep_keypad_visible:"Κράτησε το πληκτρολόγιο πάντα ορατό, ακόμη και όταν δεν απαιτείται εισαγωγή κωδικού.",button_scale_actions:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών ενεργειών.",button_scale_keypad:"Συντελεστής κλίμακας για αλλαγή μεγέθους των κουμπιών του πληκτρολογίου.",show_messages:"Εμφάνιση διαγνωστικών μηνυμάτων όταν ενεργοποιείται ο συναγερμός ή δεν μπορεί να οπλιστεί.",show_ready_indicator:"Εμφάνιση ένδειξης έτοιμο/μη έτοιμο στα κουμπιά λειτουργίας όπλισης.",show_bypassed_sensors:"Εμφάνιση προειδοποιητικού μηνύματος όταν ο συναγερμός οπλίζεται με παρακαμφθέντες αισθητήρες.",use_code_dialog:"Εμφανίστε το πληκτρολόγιο για την εισαγωγή του κωδικού ως αναδυόμενο παράθυρο διαλόγου.",hide_keypad:"Απόκρυψη των κουμπιών του πληκτρολογίου για την εισαγωγή του κωδικού.",available_actions:"Διαθέσιμες ενέργειες:",action_dialog:{title:"Προσαρμογή εμφάνισης της ενέργειας '{action}'",show_button:{title:"Ορατότητα κουμπιού ενέργειας",options:{always:"Εμφανίζεται πάντα",never:"Ποτέ δεν εμφανίζεται",disarmed:"Εμφάνιση μόνο όταν είναι αφοπλισμένο",armed:"Εμφάνιση μόνο όταν είναι οπλισμένο"}},button_icon:"Εμφανιζόμενο εικονίδιο κουμπιού",state_label:"Αντικατάσταση ετικέτας κατάστασης",color:"Παράκαμψη χρώματος που χρησιμοποιείται για την ενέργεια"}},Ge={blocking_sensors:"Δεν ήταν δυνατή η όπλιση λόγω των ακόλουθων αισθητήρων",triggered_sensors:"Ο συναγερμός ενεργοποιήθηκε από τους ακόλουθους αισθητήρες",bypassed_sensors:"Υπάρχουν παρακαμφθέντες αισθητήρες"},Ke={arm_options:Ze,editor:We,errors:Ge},Je={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},Ye={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",show_ready_indicator:"Show ready/not ready indicator on arm mode buttons.",show_bypassed_sensors:"Show warning message when alarm is armed with bypassed sensors.",use_code_dialog:"Display the keypad for entering the code as a popup dialog.",hide_keypad:"Hide the keypad buttons for entering the code.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",show_button:{title:"Button visibility",options:{always:"Always shown",never:"Never shown",disarmed:"Show only when disarmed",armed:"Hide only when disarmed"}},button_label:"Override displayed action label",button_icon:"Override displayed icon",state_label:"Override displayed state label",color:"Override color used for the action"}},Qe={blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors",bypassed_sensors:"There are bypassed sensors"},Xe={arm_options:Je,editor:Ye,errors:Qe},et={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},tt={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",show_ready_indicator:"Mostrar indicador listo/no listo en los botones de modo armado.",show_bypassed_sensors:"Mostrar advertencia cuando la alarma está activada con sensores omitidos.",use_code_dialog:"Muestra el teclado para ingresar el código como un cuadro de diálogo emergente.",hide_keypad:"Ocultar los botones del teclado para ingresar el código.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",show_button:{title:"Visibilidad del botón de acción",options:{always:"Mostrar siempre",never:"Ocultar siempre",disarmed:"Mostrar solo si desarmada",armed:"Ocultar solo si desarmada"}},button_label:"Sobrescribir el texto del botón",button_icon:"Icono de botón mostrado",state_label:"Sobrescribir el texto de estado",color:"Anular el color utilizado para la acción"}},it={blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores",bypassed_sensors:"Hay sensores omitidos"},at={arm_options:et,editor:tt,errors:it},st={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},ot={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",show_ready_indicator:"Afficher l'indicateur prêt/pas prêt sur les boutons de mode d'armement.",show_bypassed_sensors:"Afficher un avertissement lorsque l'alarme est armée avec des capteurs ignorés.",use_code_dialog:"Affichez le clavier pour saisir le code sous forme de boîte de dialogue contextuelle.",hide_keypad:"Masquer les boutons du clavier pour saisir le code.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",show_button:{title:"Visibilité du bouton d'action",options:{always:"Toujours affiché",never:"Jamais affiché",disarmed:"Afficher uniquement si désarmé",armed:"Afficher uniquement si armé"}},button_label:"Remplacer le libellé du bouton",button_icon:"Icône de bouton affichée",state_label:"Remplacer l'étiquette d'état",color:"Remplacer la couleur utilisée pour l'action"}},rt={blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)",bypassed_sensors:"Il y a des capteurs ignorés"},nt={arm_options:st,editor:ot,errors:rt},lt={heading:"Opzioni di inserimento",skip_delay:"Ignorare il ritardo di uscita",force:"Ignorare i sensori aperti"},dt={keep_keypad_visible:"Mantenere la tastiera sempre visibile, anche quando nessun codice è richiesto.",button_scale_actions:"Fattore di scala da applicare per ridimensionare i pulsanti di azione.",button_scale_keypad:"Fattore di scala da applicare per ridimensionare i pulsanti della tastiera.",show_messages:"Mostrare messaggi diagnostici quando l'allarme viene attivato o non può essere inserito.",show_ready_indicator:"Mostra l'indicatore pronto/non pronto sui pulsanti della modalità di inserimento.",show_bypassed_sensors:"Mostra avviso quando l'allarme è armato con sensori esclusi.",use_code_dialog:"Visualizza la tastiera per l'immissione del codice come finestra di dialogo popup.",hide_keypad:"Nascondi i pulsanti della tastiera per l'inserimento del codice.",available_actions:"Azioni disponibili:",action_dialog:{title:"Personalizzare la visualizzazione dell'azione '{action}'",show_button:{title:"Visibilità del pulsante di azione",options:{always:"Sempre visualizzato",never:"Mai visualizzato",disarmed:"Mostra solo quando disarmato",armed:"Mostra solo quando disarmato"}},button_label:"Sovrascrivere l'etichetta del pulsante",button_icon:"Icona del pulsante visualizzato",state_label:"Sovrascrivere l'etichetta di stato",color:"Sostituisci il colore utilizzato per l'azione"}},ct={blocking_sensors:"Impossibile inserire l'allarme a causa dei seguenti sensori",triggered_sensors:"L'allarme è stato attivato dai seguenti sensori",bypassed_sensors:"Sono presenti sensori esclusi"},ht={arm_options:lt,editor:dt,errors:ct},ut={heading:"Opties voor inschakelen",skip_delay:"Sla vertraging over",force:"Negeer open sensoren"},pt={keep_keypad_visible:"Houd het keypad altijd zichtbaar, ook wanneer er geen code vereist is.",button_scale_actions:"Schaalfactor actieknoppen",button_scale_keypad:"Schaalfactor keypadknoppen",show_messages:"Toon diagnostische berichten wanneer het alarm wordt geactiveerd of niet kan worden ingeschakeld.",show_ready_indicator:"Toon gereed/niet gereed-indicator op inschakelmodusknoppen.",show_bypassed_sensors:"Toon melding wanneer het alarm is ingeschakeld met omzeilde sensoren.",use_code_dialog:"Geef het toetsenbord voor het invoeren van de code weer als een pop-upvenster.",hide_keypad:"Verberg het toetsenbord voor het invoeren van de code.",available_actions:"Beschikbare acties:",action_dialog:{title:"Weergave van actie '{action}' aanpassen",show_button:{title:"Actieknop weergave",options:{always:"Altijd zichtbaar",never:"Nooit zichtbaar",disarmed:"Toon alleen bij uitgeschakeld",armed:"Zichtbaar tenzij uitgeschakeld"}},button_label:"Weergegeven naam voor actie",button_icon:"Weergegeven icoon voor actie",state_label:"Weergegeven status",color:"Weergegeven kleur voor action"}},_t={blocking_sensors:"Kon niet inschakelen vanwege de volgende sensoren",triggered_sensors:"Alarm werd geactiveerd door de volgende sensoren",bypassed_sensors:"Er zijn omzeilde sensoren"},gt={arm_options:ut,editor:pt,errors:_t},mt={heading:"Opções para armar",skip_delay:"Omitir tempo para sair",force:"Ignorar os sensores abertos"},vt={keep_keypad_visible:"Mantenha o teclado sempre visível, mesmo quando não for necessária nenhuma entrada de código.",button_scale_actions:"Fator de escala para redimensionar botões de ação.",button_scale_keypad:"Fator de escala para redimensionar os botões do teclado.",show_messages:"Mostrar mensagens de diagnóstico quando o alarme estiver disparado ou não puder ser armado.",show_ready_indicator:"Mostrar indicador de disponível/não disponível nos botões do modo de armar.",show_bypassed_sensors:"Mostrar aviso quando o alarme for ativado com sensores ignorados.",use_code_dialog:"Exiba o teclado para inserir o código como uma caixa de diálogo pop-up.",hide_keypad:"Oculte os botões do teclado para inserir o código.",available_actions:"Ações disponíveis:",action_dialog:{title:"Personalize a exibição da ação '{action}'",show_button:{title:"Visibilidade do botão de ação",options:{always:"Sempre visível",never:"Sempre visível",disarmed:"Mostrar somente quando desarmado",armed:"Mostrar somente quando armado"}},button_label:"Substituir texto do botão",button_icon:"Ícone de botão exibido",state_label:"Substituir texto de status",color:"Substituir a cor usada para a ação"}},bt={blocking_sensors:"Não foi possível armar devido aos seguintes sensores",triggered_sensors:"O alarme foi disparado pelos seguintes sensores",bypassed_sensors:"Existem sensores ignorados"},ft={arm_options:mt,editor:vt,errors:bt},yt={heading:"Варианты постановки на охрану",skip_delay:"Задержка перед выходом",force:"Обход датчиков открытия"},wt={keep_keypad_visible:"Клавиатура всегда видима, даже если ввод кода не требуется.",button_scale_actions:"Коэффициент масштабирования для изменения размера кнопок действий.",button_scale_keypad:"Коэффициент масштабирования для изменения размера кнопок клавиатуры.",show_messages:"Вывод диагностических сообщений, когда срабатывает сигнализация или ее невозможно включить.",show_ready_indicator:"Отображать индикатор готовности/неготовности на кнопках режима охраны.",show_bypassed_sensors:"Вывод предупреждающего сообщения, когда сигнализация включена с помощью обходных датчиков.",use_code_dialog:"Отобразить клавиатуру для ввода кода в виде всплывающего диалогового окна.",hide_keypad:"Скрыть кнопки клавиатуры для ввода кода.",available_actions:"Доступные действия:",action_dialog:{title:"Настройка отображения действия '{action}'",show_button:{title:"Видимость кнопки действия",options:{always:"Показывать всегда",never:"Показывать никогда",disarmed:"Показывать только при снятии с охраны",armed:"Показывать только при поддержании под охраной"}},button_label:"Измененение названия кнопки",button_icon:"Отображаемый значок кнопки",state_label:"Изменение названия состояния",color:"Переопределить цвет, используемый для действия"}},$t={blocking_sensors:"Не удалось включить охрану из-за следующих датчиков",triggered_sensors:"Сигнал тревоги был вызван следующими датчиками",bypassed_sensors:"Есть обходные датчики"},kt={arm_options:yt,editor:wt,errors:$t},xt={heading:"Alternativ vid aktivering",skip_delay:"Hoppa över lämna fördröjning",force:"Förbikoppla öppna sensorer"},At={keep_keypad_visible:"Håll knappsatsen alltid synlig, även när ingen kodinmatning krävs.",button_scale_actions:"Ändra storlek på åtgärdsknapparna.",button_scale_keypad:"Ändra storlek på knapparna på knappsatsen.",show_messages:"Visa diagnostiska meddelanden när larmet utlöses eller inte kan aktiveras.",show_ready_indicator:"Visa redo/ej redo-indikator på lägesknapparna.",show_bypassed_sensors:"Visa varningsmeddelande när larmet är aktiverat med förbikopplade sensorer.",use_code_dialog:"Visa knappsatsen för att ange koden som en popup-dialogruta.",hide_keypad:"Dölj knapparna på tangentbordet för att ange koden.",available_actions:"Tillgängliga åtgärder:",action_dialog:{title:"Anpassa visningen av åtgärden '{action}'",show_button:{title:"Synlighet för åtgärdsknapp",options:{always:"Visas alltid",never:"Visas aldrig",disarmed:"Visa endast vid avaktivering",armed:"Visa endast vid aktivering"}},button_label:"Anpassad knappetikett",button_icon:"Visad knappikon",state_label:"Anpassad tillståndsetikett",color:"Åsidosättningsfärg som används för åtgärden"}},Ct={blocking_sensors:"Kunde inte aktivera på grund av följande sensorer",triggered_sensors:"Larmet utlöstes av följande sensorer",bypassed_sensors:"Det finns förbikopplade sensorer"},Ot={arm_options:xt,editor:At,errors:Ct},zt={heading:"警戒选项",skip_delay:"跳过离开延迟",force:"绕过开放的传感器"},St={keep_keypad_visible:"保持小键盘总是可见，即使不需要输入密码",button_scale_actions:"调整动作按键大小的缩放系数",button_scale_keypad:"调整小键盘按键大小的缩放系数",show_messages:"当警报被触发或无法警戒时，显示诊断信息。",show_ready_indicator:"在手臂模式按钮上显示就绪/未就绪指示器。",show_bypassed_sensors:"当警报配备旁路传感器时显示警告消息。",use_code_dialog:"以弹出对话框的形式显示用于输入代码的键盘。",hide_keypad:"隐藏用于输入代码的键盘按钮。",available_actions:"可用动作：",action_dialog:{title:"自定义动作'{action}'的显示",show_button:{title:"操作按钮可见性",options:{always:"始终显示",never:"从不显示",disarmed:"仅在解除武装时显示",armed:"仅在武装时显示"}},button_label:"覆盖按钮标签",button_icon:"显示的按钮图标",state_label:"覆盖状态标签",color:"覆盖操作使用的颜色"}},Et={blocking_sensors:"由于以下传感器而无法警戒",triggered_sensors:"警报是由以下传感器触发的",bypassed_sensors:"有绕过的传感器"},jt={arm_options:zt,editor:St,errors:Et},Pt={cs:Object.freeze({__proto__:null,arm_options:He,default:Be,editor:Ue,errors:Re}),de:Object.freeze({__proto__:null,arm_options:Fe,default:qe,editor:Ve,errors:Ie}),el:Object.freeze({__proto__:null,arm_options:Ze,default:Ke,editor:We,errors:Ge}),en:Object.freeze({__proto__:null,arm_options:Je,default:Xe,editor:Ye,errors:Qe}),es:Object.freeze({__proto__:null,arm_options:et,default:at,editor:tt,errors:it}),fr:Object.freeze({__proto__:null,arm_options:st,default:nt,editor:ot,errors:rt}),it:Object.freeze({__proto__:null,arm_options:lt,default:ht,editor:dt,errors:ct}),nl:Object.freeze({__proto__:null,arm_options:ut,default:gt,editor:pt,errors:_t}),"pt-BR":Object.freeze({__proto__:null,arm_options:mt,default:ft,editor:vt,errors:bt}),ru:Object.freeze({__proto__:null,arm_options:yt,default:kt,editor:wt,errors:$t}),sv:Object.freeze({__proto__:null,arm_options:xt,default:Ot,editor:At,errors:Ct}),"zh-Hans":Object.freeze({__proto__:null,arm_options:zt,default:jt,editor:St,errors:Et})};function Mt(e,t,i="",a=""){const s=t.replace(/['"]+/g,"");var o;try{o=e.split(".").reduce((e,t)=>e[t],Pt[s])}catch(t){o=e.split(".").reduce((e,t)=>e[t],Pt.en)}if(void 0===o&&(o=e.split(".").reduce((e,t)=>e[t],Pt.en)),""!==i&&""!==a){Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]);for(let e=0;e<i.length;e++)o=o.replace(i[e],a[e])}return o}function Tt(e){return null!=e}function Lt(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!Tt(e)}}function Dt(e){return e.substring(0,e.indexOf("."))}const Nt=(e,t)=>{let i={hide:!1};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},Ht=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(ze.ArmAway),1&t&&i.push(ze.ArmHome),4&t&&i.push(ze.ArmNight),32&t&&i.push(ze.ArmVacation),16&t&&i.push(ze.ArmCustomBypass),i},Ut=(e,t,i)=>{const a=Dt(e.entity_id),s=e.attributes.device_class,o=e.state;if(Object.values(Ce).includes(o)&&i){const e=Nt(o,i);if(!Lt(e.state_label))return e.state_label}let r="";return s&&(r=t(`component.${a}.entity_component.${s}.state.${e.state}`)),r||(r=t(`component.${a}.entity_component._.state.${e.state}`)),r},Rt=e=>null!==e.attributes.code_format,Bt=(e,t,i=!1)=>{if(!e||!e.state)return"var(--state-unavailable-color)";let a=e.state;if(i){const i=Object.values(ze).map(e=>Ee[e]);if(!i.includes(a)){const t=e.attributes.arm_mode;t&&(a=t)}const s=[ze.Disarm,...Ht(e)].filter(e=>!Nt(Ee[e],t).hide);1==s.length&&(a=Ee[s[0]])}if(Object.keys(t.states||{}).includes(a)&&Tt((t.states[a]||{}).color)){const e=t.states[a].color;return Object.values(Ne).includes(e)?`var(--${e}-color)`:e}return a==Ce.Disarmed?"var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))":Object.values(Ce).includes(a)?`var(--state-alarm_control_panel-${a}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`:"var(--disabled-color, var(--state-inactive-color))"},Ft=e=>e.callWS({type:"alarmo/entities"}),Vt=e=>e.callWS({type:"alarmo/config"}),It=(e,t,i,a)=>{a=a||{},i=null==i?{}:i;const s=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return s.detail=i,e.dispatchEvent(s),s};let qt=class extends be{constructor(){super(...arguments),this._entities=null,this._editAction=null}async firstUpdated(){Ft(this.hass).then(e=>{this._entities=e.map(e=>e.entity_id)}).catch(e=>{var t;null===(t=this.hass)||void 0===t||t.callService("system_log","write",{message:`Failed to fetch entities: ${e}`,level:"error"})}),this._alarmoConfig=await Vt(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign(Object.assign({},Te),e)}render(){var e,t,i,a,s,o,r,n;if(!this._config||!this.hass||!this._entities)return Q``;if(!this._entities.length)return Q`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const l=this._config.entity?this.hass.states[this._config.entity]:void 0,d=(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ae&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);if(null!==this._editAction){const e=Nt(Ee[this._editAction],this._config);return Q`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass.localize("ui.common.back")}
              .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${Mt("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`))}</span
            >
          </div>
        </div>

        <div>
          <span>${Mt("editor.action_dialog.show_button.title",this.hass.language)}</span>
          <div style="display: flex; flex-direction: row">
            <ha-formfield label="${Mt("editor.action_dialog.show_button.options.always",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="never"
                @change=${()=>this._updateStateConfig(Ee[this._editAction],{hide:void 0})}
                ?checked=${!Tt(e.hide)||[!1,"never"].includes(e.hide)}
              >
              </ha-radio>
            </ha-formfield>

            <ha-formfield label="${Mt("editor.action_dialog.show_button.options.never",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="always"
                @change=${()=>this._updateStateConfig(Ee[this._editAction],{hide:"always"})}
                ?checked=${[!0,"always"].includes(e.hide||!1)}
              >
              </ha-radio>
            </ha-formfield>

            ${this._editAction==ze.Disarm?Q`
            <ha-formfield label="${Mt("editor.action_dialog.show_button.options.armed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="disarmed"
                @change=${()=>this._updateStateConfig(Ee[this._editAction],{hide:"disarmed"})}
                ?checked=${"disarmed"==e.hide}
              >
              </ha-radio>
            </ha-formfield>`:Q`
            <ha-formfield label="${Mt("editor.action_dialog.show_button.options.disarmed",this.hass.language)}">
              <ha-radio
                name="show_button"
                value="armed"
                @change=${()=>this._updateStateConfig(Ee[this._editAction],{hide:"armed"})}
                ?checked=${"armed"==e.hide}
              >
              </ha-radio>
            </ha-formfield>
              `}
          </div>
        </div>

        <div class="grid">
          <ha-textfield
            label="${Mt("editor.action_dialog.button_label",this.hass.language)}"
            .value="${e.button_label||""}"
            placeholder="${this.hass.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${e.hide}
            @input=${e=>this._updateStateConfig(Ee[this._editAction],{button_label:String(e.target.value).trim()})}
          ></ha-textfield>

          <ha-icon-picker
            .hass=${this.hass}
            label="${Mt("editor.action_dialog.button_icon",this.hass.language)}"
            .value="${e.button_icon||Se[this._editAction]}"
            ?disabled=${e.hide}
            @value-changed=${e=>this._updateStateConfig(Ee[this._editAction],{button_icon:e.detail.value})}
            >
          </ha-icon-picker>

          <ha-textfield
            label="${Mt("editor.action_dialog.state_label",this.hass.language)}"
            .value="${e.state_label||""}"
            placeholder="${this.hass.localize(`component.alarm_control_panel.entity_component._.state.${Ee[this._editAction]}`)}"
            @input=${e=>this._updateStateConfig(Ee[this._editAction],{state_label:String(e.target.value).trim()})}
          ></ha-textfield>

          <ha-select
            .icon=${Tt(e.color)}
            label="${Mt("editor.action_dialog.color",this.hass.language)}"
            .value=${e.color}
            @closed=${e=>{e.stopPropagation()}}
            @selected=${e=>{e.stopPropagation();const t=e.target.value;this._updateStateConfig(Ee[this._editAction],{color:t||void 0})}}
            fixedMenuPosition
            naturalMenuWidth
            clearable
          >
          ${e.color?Q`
              <span slot="icon">
                <span class="circle-color" style="--circle-color: ${Object.values(Ne).includes(e.color)?`var(--${e.color}-color)`:e.color}">
                </span>
              </span>
            `:ee}
            ${Tt(e.color)&&e.color.length&&!Object.values(Ne).includes(e.color)?Q`
                <ha-list-item .value=${e.color} graphic="icon">
                  ${e.color}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${e.color}">
                    </span>
                  </span>
                </ha-list-item>
            `:ee}
            ${Object.values(Ne).map(e=>Q`
                <ha-list-item .value=${e} graphic="icon">
                  ${this.hass.localize(`ui.components.color-picker.colors.${e}`)||e}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${`var(--${e}-color)`}">
                    </span>
                  </span>
                </ha-list-item>
              `)}
          </ha-select>
        </div>
      `}return Q`
      <div class="card-config">
        <div class="grid">
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
            .hass=${this.hass}
            .value="${this._config.entity||""}"
            .includeDomains=${["alarm_control_panel"]}
            .entityFilter=${e=>this._entities.includes(e.entity_id)}
            @change=${e=>this._updateConfig("entity",e.target.value)}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-textfield
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.name||""}"
            @input=${e=>this._updateConfig("name",String(e.target.value).trim())}
          ></ha-textfield>
        </div>

        ${l?Q`
              <div class="config-item">
                <span>${Mt("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row">
                ${this._renderActionOptions()}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${Mt("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_actions||1}
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${Le}"
              step="0.1"
              labeled
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Mt("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              .value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${Le}"
              step="0.1"
              labeled
              ?disabled=${!l||!d||(null===(t=this._config)||void 0===t?void 0:t.use_code_dialog)}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${Mt("editor.hide_keypad",this.hass.language)}>
            <ha-switch
              .checked=${this._config.hide_keypad}
              @change=${e=>this._updateConfig("hide_keypad",e.target.checked)}
              ?disabled=${!l||!d}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Mt("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!l||!d||(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_arm_required)==(null===(a=this._alarmoConfig)||void 0===a?void 0:a.code_disarm_required)||(null===(s=this._config)||void 0===s?void 0:s.use_code_dialog)||(null===(o=this._config)||void 0===o?void 0:o.hide_keypad)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Mt("editor.use_code_dialog",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_code_dialog}
              @change=${e=>this._updateConfig("use_code_dialog",e.target.checked)}
              ?disabled=${!l||!(null===(r=this._alarmoConfig)||void 0===r?void 0:r.code_arm_required)&&!(null===(n=this._alarmoConfig)||void 0===n?void 0:n.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Mt("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!Tt(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Mt("editor.show_ready_indicator",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_ready_indicator}
              @change=${e=>this._updateConfig("show_ready_indicator",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${Mt("editor.show_bypassed_sensors",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_bypassed_sensors}
              @change=${e=>this._updateConfig("show_bypassed_sensors",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `}_renderActionOptions(){if(!this._config||!this.hass||!this._config.entity)return ee;const e=this.hass.states[this._config.entity],t=Ht(e);let i=[ze.Disarm,...t].map(e=>({id:e,label:this.hass.localize(`ui.card.alarm_control_panel.${e}`),hidden:["always",!0].includes(Nt(Ee[e],this._config).hide||!1),order:Nt(Ee[e],this._config).button_order}));return i.sort((e,t)=>e.hidden&&!t.hidden?1:t.hidden&&!e.hidden?-1:Tt(e.order)||Tt(t.order)?Tt(e.order)&&!Tt(t.order)?-1:!Tt(e.order)&&Tt(t.order)?1:e.order-t.order:0),Q`
      <ha-sortable
        handle-selector=".handle"
        draggable-selector=".draggable"
        @item-moved=${e=>this._handleActionsMoved(e,i.map(e=>Ee[e.id]))}
      >
        <div class="sortable-list">
        ${i.map((e,t)=>Q`
          <div class="sortable-item ${e.hidden?"":"draggable"}"">
            <ha-svg-icon
              class="handle"
              style="cursor: grab"
              .path=${"M21 11H3V9H21V11M21 13H3V15H21V13Z"}
            ></ha-svg-icon>

            <ha-icon-button
              .path=${e.hidden?"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z":"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
              style="${e.hidden?"":"color: var(--primary-color)"}"
              ?disabled=${!e.hidden&&i.filter(e=>!e.hidden).length<=2||e.id==ze.Disarm}
              @click=${a=>{if(this._updateStateConfig(Ee[e.id],e.hidden?{hide:void 0}:{hide:"always"}),e.hidden){let e=new CustomEvent("",{detail:{oldIdx:t,nexIdx:i.filter(e=>!e.hidden).length}});this._handleActionsMoved(e,i.map(e=>Ee[e.id]))}a.target.blur()}}
            >
            </ha-icon-button>
            <span>${e.label}</span>
            <ha-icon-button
              .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
              style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
              ?disabled=${e.hidden}
              @click=${()=>this._editActionClick(e.id)}
            >
            </ha-icon-button>
          </div>
        `)}
        </div>
      </ha-sortable>
    `}_handleActionsMoved(e,t){const i=e.detail.oldIndex,a=e.detail.newIndex;let s=t[i];t=t.filter((e,t)=>t!=i),t.splice(a,0,s);let o=Object.assign({},this._config.states);t.forEach((e,t)=>{o=Object.assign(Object.assign({},o),{[e]:Object.assign(Object.assign({},o[e]||{}),{button_order:t+1})})}),this._updateConfig("states",o)}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}It(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const a=e=>function(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,i])=>Object.assign(e,{[t]:i}),{}):{}}(e,Object.keys(e).filter(t=>Tt(e[t]||"string"==typeof e[t])));let s=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const o=a(Object.assign(Object.assign({},s[e]),t));s=a(Object.assign(Object.assign({},s),{[e]:o})),this._updateConfig("states",s)}_editActionClick(e){this._editAction=e}_goBack(){this._editAction=null}static get styles(){return _`
      div.config-row {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
      }
      div.config-item {
        padding-top: 20px;
      }
      div.config-row > * {
        display: flex;
        align-items: center;
      }
      ha-textfield {
        width: 100%;
      }
      div.grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px 8px;
      }
      div.grid > * {
        display: flex;
        flex-direction: column;
        flex: 1 0 300px;
      }
      div.sortable-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 0px 8px;
      }
      div.sortable-item {
        display: flex;
        font-size: 0.875rem;
        align-items: center;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
      .circle-color {
        display: block;
        background-color: var(--circle-color, var(--divider-color));
        border: 1px solid var(--outline-color);
        border-radius: var(--ha-border-radius-pill);
        width: 20px;
        height: 20px;
        box-sizing: border-box;
      }
    `}};t([ke({attribute:!1})],qt.prototype,"hass",void 0),t([xe()],qt.prototype,"_config",void 0),t([xe()],qt.prototype,"_alarmoConfig",void 0),t([xe()],qt.prototype,"_entities",void 0),t([xe()],qt.prototype,"_editAction",void 0),qt=t([ye("alarmo-card-editor")],qt);var Zt,Wt,Gt=Object.freeze({__proto__:null,get AlarmoCardEditor(){return qt}});class Kt extends be{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0,this._touchStarted=!1,this._hover=!1}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return Me.includes(i)?this.startTimer():Me.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;Me.includes(e)&&this.startTimer(),this.addEventListener("click",this.handleClick),this.addEventListener("touchstart",()=>{this._touchStarted=!0}),this.addEventListener("touchend",()=>{setTimeout(()=>{this._touchStarted=!1},10)}),this.addEventListener("mouseenter",()=>{this._touchStarted||(this._hover=!0)}),this.addEventListener("mouseleave",()=>{this._hover=!1})}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then(e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)}).catch(e=>{}),this.timer=window.setInterval(()=>{this.requestUpdate()},1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this._hover&&Me.includes(e)&&this.timer?Q` <ha-icon icon="mdi:skip-forward"></ha-icon> `:this.datetime&&this.duration?Q` ${Math.max(Math.round(this.getRemaining()),0)} `:Q` <ha-icon .icon=${Oe[e]}></ha-icon> `}handleClick(){const e=this.hass.states[this.entity].state;Me.includes(e)&&this.timer?this.hass.callService("alarmo","skip_delay",{entity_id:this.entity}):It(this,"hass-more-info",{entityId:this.entity})}render(){let e=45,t=2*Math.PI*e;const i=this.hass.states[this.entity],a=this.datetime&&this.duration;return Q`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${i.state.split("_").shift()} ${a?"timer":""}">
          <circle cx="${50}" cy="${50}" r="${e}"></circle>
          <path
            stroke-dasharray="${(this.getFraction()*t).toFixed(2)} ${t.toFixed(2)}"
            class="remaining"
            d="
              M ${50}, ${50}
              m -${e}, 0
              a ${e},${e} 0 1,0 90,0
              a ${e},${e} 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <div class="overlay ${i.state.split("_").shift()} ${a?"timer":""}">
        <div class="value">${this._stateValue(i.state)}</div>
      </div>
    `}static get styles(){return _`
      :host {
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: rotateZ(90deg) scale(1, -1);
      }
      .track {
        stroke-width: 4px;
        stroke-linecap: round;
        stroke: var(--disabled-text-color);
        fill: none;
      }
      .track .remaining {
        transition: 0.3s linear stroke;
        stroke: var(--alarm-state-color);
      }
      .track.arming .remaining,
      .track.pending .remaining {
        transition: 1s linear stroke-dasharray;
      }
      .overlay {
        position: absolute;
        margin-top: -60px;
        margin-left: 0;
        width: 60px;
        height: 60px;
        font-size: 1.5em;
        white-space: nowrap;
      }
      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: var(--alarm-state-color);
        transition: 0.3s linear color;
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      .value ha-icon {
        --mdc-icon-size: 1.2em;
      }
      .disarmed,
      .armed {
        animation: none;
      }
      .triggered,
      .arming,
      .pending {
        animation: pulse 1s infinite;
      }
      .arming.timer,
      .pending.timer {
        animation: none;
      }
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}}t([ke()],Kt.prototype,"hass",void 0),t([ke()],Kt.prototype,"entity",void 0),t([xe()],Kt.prototype,"_hover",void 0),customElements.define("alarmo-state-badge",Kt),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Zt||(Zt={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Wt||(Wt={}));class Jt extends be{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return Q``;const e=this.entity in this.hass.states;let t=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(t=Object.assign(Object.assign({},t),{state:this.state}));const i=e?Ut(t,this.hass.localize):this.hass.localize("state.default.unavailable",this.hass.locale||{language:this.hass.language,number_format:Zt.language}),a=e?t.attributes.friendly_name||(s=t.entity_id).substring(s.indexOf(".")+1):this.entity;var s;let o=!!this.state||"on"==t.state;return Q`
      <div class="badge-container" @click=${()=>It(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${o?"active":""}" id="badge">
          <div class="value">
            <ha-state-icon
              .hass=${this.hass}
              .stateObj=${t}
            ></ha-state-icon>
            <div class="label">
              <span>${i}</span>
            </div>
          </div>
        </div>
        <div class="title">${a}</div>
      </div>
    `}static get styles(){return _`
      .badge-container {
        display: inline-block;
        text-align: center;
        vertical-align: top;
        padding: var(--ha-label-badge-padding, 0 0 0 0);
        cursor: pointer;
      }
      .label-badge {
        position: relative;
        display: block;
        margin: 0 auto;
        width: var(--ha-label-badge-size, 2.5em);
        text-align: center;
        height: var(--ha-label-badge-size, 2.5em);
        line-height: var(--ha-label-badge-size, 2.5em);
        font-size: var(--ha-label-badge-font-size, 1.5em);
        border-radius: 50%;
        border: 0.1em solid var(--primary-color);
        color: var(--label-badge-text-color, rgb(76, 76, 76));
        white-space: nowrap;
        background-color: none;
        background-size: cover;
        transition: border 0.3s ease-in-out;
      }
      .label-badge.active {
        border: 0.1em solid var(--label-badge-red);
      }
      .label-badge .value {
        font-size: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label-badge .label {
        position: absolute;
        bottom: -1em;
        left: -0.2em;
        right: -0.2em;
        line-height: 1em;
        font-size: 0.5em;
      }
      .label-badge .label span {
        box-sizing: border-box;
        max-width: 100%;
        display: inline-block;
        background-color: var(--primary-color);
        color: var(--ha-label-badge-label-color, white);
        border-radius: 1em;
        padding: 9% 16% 8% 16%;
        font-weight: 500;
        overflow: hidden;
        text-transform: uppercase;
        text-overflow: ellipsis;
        transition: background-color 0.3s ease-in-out;
        text-transform: var(--ha-label-badge-label-text-transform, uppercase);
      }
      .label-badge.active .label span {
        background-color: var(--label-badge-red);
      }
      .badge-container .title {
        margin-top: 1em;
        font-size: var(--ha-label-badge-title-font-size, 0.9em);
        width: var(--ha-label-badge-title-width, 5em);
        font-weight: var(--ha-label-badge-title-font-weight, 400);
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
      }
    `}}t([ke()],Jt.prototype,"hass",void 0),t([ke()],Jt.prototype,"entity",void 0),t([ke()],Jt.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",Jt);class Yt extends be{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return Q`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}handleFocus(e){e.target.blur()}static get styles(){return _`
      button {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid var(--alarmo-button-border-color, var(--outline-color));
        border-radius: var(--alarmo-button-border-radius, 8px);
        background: transparent;
        color: var(--alarmo-button-color, var(--primary-color));
        padding: calc(var(--content-scale, 1) * 0.875rem);
        font-size: calc(var(--content-scale, 1) * var(--alarmo-button-font-size));
        letter-spacing: 0.04em;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 1;
        transition: border-color 0.1s ease-in-out;
      }
      button:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        border-radius: var(--alarmo-button-border-radius, 8px);
        background: var(--alarmo-button-background-color, var(--card-background-color));
        opacity: var(--alarmo-button-background-opacity, 0);
        z-index: -2;
        transition: opacity 0.1s ease-in-out;
      }
      button:not(:disabled):hover:before {
        background: var(--alarmo-button-background-color, var(--primary-color));
        opacity: calc(var(--alarmo-button-background-opacity, 0) + 0.12);
      }
      button:not(:disabled) {
        cursor: pointer;
      }
      button:disabled {
        color: var(--disabled-text-color);
      }
      button:not(:disabled):active:before {
        opacity: calc(var(--alarmo-button-background-opacity, 0) + 0.24);
      }
      button:not(:disabled):active {
        border: 1px solid var(--alarmo-button-border-color, var(--outline-hover-color));
      }
      button:focus {
        outline: none;
      }
      ::slotted(ha-icon) {
        --mdc-icon-size: calc(var(--content-scale, 1) * 1.5rem);
        margin: calc(var(--content-scale, 1) * -0.25rem) 0px;
        display: flex;
      }
      ::slotted(ha-icon.leading) {
        margin-left: calc(var(--content-scale, 1) * -0.3rem);
        margin-right: calc(var(--content-scale, 1) * 0.3rem);
      }
      ::slotted span {
        display: flex;
      }
    `}}t([ke({type:Boolean})],Yt.prototype,"disabled",void 0),t([ke({type:Boolean})],Yt.prototype,"scaled",void 0),customElements.define("alarmo-button",Yt);const Qt=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([ke({attribute:!1})],i.prototype,"hass",void 0),i},Xt=["1","2","3","4","5","6","7","8","9","0","clear","submit"];let ei=class extends(Qt(be)){constructor(){super(...arguments),this._input="",this._showClearButton=!1,this._narrow=!1,this._codeClearTimer=0}hassSubscribe(){return[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:Pe})]}async _fetchData(e){var t;if(e.data.area_id===(null===(t=this._params)||void 0===t?void 0:t.area_id))switch(e.data.event){case je.Disarm:case je.Arm:case je.Trigger:this._confirm(e.data.event);break;case je.InvalidCodeProvided:case je.NoCodeProvided:this._showCodeError();break;case je.FailedToArm:case je.CommandNotAllowed:this._confirm(e.data.event);case je.TriggerTimeExpired:case je.ReadyToArmModesChanged:}}shouldUpdate(e){const t=e.get("hass");return!(!e.has("_params")&&this._params)||(!!e.has("_showClearButton")||(!t||t.states[this._params.entity_id]!==this.hass.states[this._params.entity_id]&&(t.states[this._params.entity_id],this.hass.states[this._params.entity_id],!0)))}firstUpdated(e){super.firstUpdated(e),this.addEventListener("keypress",e=>{"Enter"===e.key&&this._input.length&&this._submit()})}async showDialog(e){this._params=e,this._input="",this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,await this.updateComplete}closeDialog(){return this._params=void 0,this._showClearButton=!1,!0}_showCodeError(){this._codeField&&(this._codeField.classList.remove("error"),this._codeField.classList.add("error"),this._codeField.invalid=!0)}_clearCodeError(){this._codeField&&this._codeField.classList.contains("error")&&(this._codeField.classList.remove("error"),this._codeField.invalid=!1,this._input="",this._codeField.value="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._codeField&&(this._codeField.value=""),this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_submit(){var e;const t=null!==(e=this._input)&&void 0!==e?e:"";this._clearCodeError(),this._params.action==ze.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._params.entity_id,code:t}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this._params.armOptions),{entity_id:this._params.entity_id,mode:Ee[this._params.action],code:t}))}_confirm(e){var t,i;null===(i=null===(t=this._params)||void 0===t?void 0:t.confirm)||void 0===i||i.call(t,e),this.closeDialog()}_cancel(){var e,t;null===(t=null===(e=this._params)||void 0===e?void 0:e.cancel)||void 0===t||t.call(e),this.closeDialog()}_numberClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._setCodeClearTimer(),this._input=this._input+t,this._codeField&&(this._codeField.value=this._input),this._showClearButton=!0}_clear(){this._input="",this._codeField&&(this._codeField.value=""),this._showClearButton=!1}render(){if(!this._params||!this.hass)return ee;return"text"===this._params.code_format?Q`
        <ha-dialog
          open
          @closed=${this._cancel}
          header-title="${this.hass.localize("ui.dialogs.enter_code.title")}"
          width="small"
        >
          <ha-textfield
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputMode="text"
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-textfield>
          <ha-dialog-footer>
            <ha-button slot="secondaryAction" data-dialog="close" appearance="plain">
              ${this.hass.localize("ui.common.cancel")}
            </ha-button>
            <ha-button @click=${this._submit} slot="primaryAction">
              ${this.hass.localize("ui.common.submit")}
            </ha-button>
          </ha-dialog-footer>
        </ha-dialog>
      `:Q`
      <ha-dialog
        open
        header-title="${this.hass.localize("ui.dialogs.enter_code.title")}"
        @closed=${this._cancel}
        width="small"
      >
        <div class="container">
          <ha-textfield
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputMode="numeric"
            @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
            @focus=${this._clearCodeError}
          ></ha-textfield>
          <div class="keypad">
            ${Xt.map(e=>""===e?Q`<span></span>`:"clear"===e?Q`
                      <ha-control-button
                        @click=${this._clear}
                        class="clear"
                        .disabled=${!this._showClearButton}
                        .label=${this.hass.localize("ui.common.clear")}
                      >
                        <ha-svg-icon path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}></ha-svg-icon>
                      </ha-control-button>
                    `:"submit"===e?Q`
                        <ha-control-button
                          @click=${this._submit}
                          class="submit"
                          .label=${this.hass.localize("ui.common.submit")}
                        >
                          <ha-svg-icon path=${"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}></ha-svg-icon>
                        </ha-control-button>
                      `:Q`
                        <ha-control-button
                          .value=${e}
                          @click=${this._numberClick}
                          .label=${e}
                        >
                          ${e}
                        </ha-control-button>
                      `)}
          </div>
        </div>
      </ha-dialog>
    `}};ei.styles=_`
    ha-dialog {
      /* Place above other dialogs */
      --dialog-z-index: 104;
    }
    ha-textfield {
      width: 100%;
      max-width: 240px;
      margin: 0px auto;
      text-align: center;
      margin-left: calc(50% - 240px / 2);
      margin-bottom: 18.5px;
    }
    ha-textfield.error {
      animation: shake 0.2s ease-in-out 0s 2;
      margin-bottom: 0px;
    }
    @keyframes shake {
      0% {
        margin-left: calc(50% - 240px / 2);
      }
      25% {
        margin-left: calc(50% - 240px / 2 + 10px);
      }
      75% {
        margin-left: calc(50% - 240px / 2 - 10px);
      }
      100% {
        margin-left: calc(50% - 240px / 2);
      }
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .keypad {
      --keypad-columns: 3;
      margin-top: 12px;
      padding: 12px;
      display: grid;
      grid-template-columns: repeat(var(--keypad-columns), auto);
      grid-auto-rows: auto;
      grid-gap: 24px;
      justify-items: center;
      align-items: center;
    }
    .clear {
      grid-row-start: 4;
      grid-column-start: 0;
    }
    @media all and (max-height: 450px) {
      .keypad {
        --keypad-columns: 6;
      }
      .clear {
        grid-row-start: 1;
        grid-column-start: 6;
      }
    }

    ha-control-button {
      width: 56px;
      height: 56px;
      --control-button-border-radius: 28px;
      --mdc-icon-size: 24px;
      font-size: 24px;
    }
    .submit {
      --control-button-background-color: var(--green-color);
      --control-button-icon-color: var(--green-color);
    }
    .clear {
      --control-button-background-color: var(--red-color);
      --control-button-icon-color: var(--red-color);
    }
    .hidden {
      display: none;
    }
    .buttons {
      margin-top: 12px;
    }
  `,t([ke({attribute:!1})],ei.prototype,"hass",void 0),t([xe()],ei.prototype,"_params",void 0),t([
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function(e){return(t,i,a)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>{var i,a;return null!==(i=null===(a=t.renderRoot)||void 0===a?void 0:a.querySelector(e))&&void 0!==i?i:null})(this)}})}("#code")],ei.prototype,"_codeField",void 0),t([xe()],ei.prototype,"_showClearButton",void 0),t([xe()],ei.prototype,"_narrow",void 0),ei=t([ye("alarmo-code-dialog")],ei);var ti=Object.freeze({__proto__:null,get AlarmoCodeDialog(){return ei}});let ii=class extends be{render(){if(!this.hass||!this.config)return ee;const e=this.hass.states[this.config.entity];let t=e.state;const i=Object.values(ze).map(e=>Ee[e]);if(!i.includes(t)){const i=e.attributes.arm_mode;i&&(t=i)}return Q`
      <div class="container">
        ${this._renderOptions(t)}
      </div>
    `}_renderOptions(e){const t=this.hass.states[this.config.entity],i=[ze.Disarm,...Ht(t)].filter(e=>{const i=Nt(Ee[e],this.config).hide;if("boolean"==typeof i||!Tt(i))return!i;switch(i){case"always":return!1;case"never":return!0;case"armed":return"disarmed"==t.state;case"disarmed":return"disarmed"!==t.state}}),a=i.map(e=>Nt(Ee[e],this.config)).some(e=>!Tt(e.button_label)||e.button_label.length);return i.sort((e,t)=>{const i=Nt(Ee[e],this.config).button_order,a=Nt(Ee[t],this.config).button_order;return Tt(i)||Tt(a)?Tt(i)&&!Tt(a)?-1:!Tt(i)&&Tt(a)?1:i-a:0}),i.map(i=>{const s=Tt(this.readyForArmModes)&&!this.readyForArmModes.includes(Ee[i])&&i!=ze.Disarm,o=Nt(Ee[i],this.config);return Q`
        <div class="button ${Ee[i]==e?"selected":""}" @click=${e=>this._handleClick(e,i)}>
          <div class="content ${a?"has-text":""}">
            <ha-icon icon="${Lt(o.button_icon)?Se[i]:o.button_icon}"></ha-icon>
            ${Ee[i]!=e&&Tt(this.readyForArmModes)?Q`
              <ha-icon
                icon="${"mdi:circle-medium"}"
                class="badge ${s?"error":"success"}"
              ></ha-icon>
            `:ee}
            <span>
              ${Tt(o.button_label)?o.button_label:i==ze.Disarm&&t.state!==Ce.Disarmed?this.hass.localize(`ui.card.alarm_control_panel.${i}`):this.hass.localize(`ui.card.alarm_control_panel.modes.${Ee[i]}`)}
            </span>
          </div>
        </div>
      `})}_handleClick(e,t){It(this,"button-clicked",{ev:e,action:t})}static get styles(){return _`
      :host {
        width: 100%;
        display: inline-block;
        padding: 0px 10px;
        box-sizing: border-box;
      }
      div.container {
        position: relative;
        display: flex;
        width: 100%;
        gap: 0px;
        flex-wrap: wrap;
        padding: 4px;
        box-sizing: border-box;
        --selected-color: var(--alarm-state-color);
      }
      div.container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--primary-text-color);
        opacity: 0.05;
        border-radius: calc(var(--content-scale, 1) * 18px);
      }
      div.button {
        cursor: pointer;
        position: relative;
        flex: 1;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /* For safari border-radius overflow */
        z-index: 0;
      }
      div.content {
        display: flex;
        position: relative;
        inline-size: calc(100% - 4px);
        border-radius: calc(var(--content-scale, 1) * 6px);
        height: calc(var(--content-scale, 1) * 26px);
        color: var(--primary-text-color);
        --mdc-icon-size: calc(var(--content-scale, 1) * 22px);
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
        padding: 8px 2px;
        overvlow: hidden;
        flex: 1;
        gap: 4px;
        transition:
          color ease-in-out 180ms;
      }
      div.content.has-text {
        height: calc(var(--content-scale, 1) * 40px);
      }
      div.content::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--selected-color);
        opacity: 0;
        border-radius: calc(var(--content-scale, 1) * 14px);
        transition:
          background-color ease-in-out 180ms,
          opacity ease-in-out 80ms;
      }
      div.content.focused::before,
      div.content:hover::before {
        opacity: 0.24;
      }
      div.button.selected .content::before {
        opacity: 1;
      }
      div.content ha-icon {
        display: flex;
      }
      div.content span {
        display: flex;
        max-width: calc(100% - 4px);
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: clip;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
        font-weight: 400;
        font-size: calc(var(--content-scale, 1) * 1rem);
      }
      div.button.selected div.content ha-icon, div.button.selected div.content {
        color: white;
      }
      @media (max-width: 280px) {
        div.container {
          flex-direction: column;
        }
      }
      div.content ha-icon.badge {
        position: absolute;
        top: 0px;
        margin-left: calc(var(--content-scale, 1) * 28px);
      }
      div.content ha-icon.success {
        color: var(--green-color);
      }
      div.content ha-icon.error {
        color: var(--red-color);
      }
    `}};t([ke({attribute:!1})],ii.prototype,"hass",void 0),t([ke({attribute:!1})],ii.prototype,"config",void 0),t([ke({attribute:!1})],ii.prototype,"readyForArmModes",void 0),ii=t([ye("alarmo-actions-bar")],ii);const ai=["1","2","3","4","5","6","7","8","9","","0","clear"];return e.AlarmoCard=class extends(Qt(be)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},De),this.readyForArmModes=null,this.backendConnection=null,this.showBypassedSensors=!1,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then(function(){return Gt}),document.createElement("alarmo-card-editor")}static async getStubConfig(e){let t=Object.keys(e.states).find(e=>"alarm_control_panel"==Dt(e));return await Ft(e).then(e=>{const i=e.sort((e,t)=>Number(e.area_id)-Number(t.area_id));i.length&&(t=i[0].entity_id)}),{type:"custom:alarmo-card",entity:t}}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ae?!Rt(t)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?4:9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==Dt(e.entity))throw new Error("Invalid configuration provided for entity");if(Tt(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>Le))throw new Error("Invalid configuration provided for button_scale_keypad");if(Tt(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>Le))throw new Error("Invalid configuration provided for button_scale_actions")})(e),this._config=Object.assign(Object.assign({},Te),e)}hassSubscribe(){return[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:Pe})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||Ft(this.hass).then(e=>{const t=e.find(e=>e.entity_id==this._config.entity);t&&(this.area_id=t.area_id?t.area_id:null)}).then(()=>Vt(this.hass)).then(e=>{this._alarmoConfig=e,this.backendConnection=!0}).then(()=>{return e=this.hass,t=this._config.entity,e.callWS({type:"alarmo/ready_to_arm_modes",entity_id:t});var e,t}).then(e=>{this.readyForArmModes=e.modes}).catch(e=>{this.backendConnection=!1})}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case je.Arm:this._clearCode();break;case je.Trigger:break;case je.InvalidCodeProvided:case je.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case je.FailedToArm:this.warning="blocking_sensors",this._last_command=e.data.command,this._last_code=this._input,this._clearCode();break;case je.CommandNotAllowed:this._clearCode();break;case je.TriggerTimeExpired:break;case je.ReadyToArmModesChanged:this.readyForArmModes=e.data.modes}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some(e=>t.states[e]!==this.hass.states[e]))}processStateUpdate(e,t){t.state!=e.state&&(this.subscribedEntities=[]),(t.state==Ce.Disarmed||t.last_changed!==e.last_changed)&&this._clearCode()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return Q``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?Q`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:Q`
      <ha-card>
        ${i.state===Ce.Disarmed?Q`
              <ha-dropdown
                placement="bottom-end"
                id="cornerMenu"
              >
                <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}>
                </ha-icon-button>
                <span class="title">
                  ${Mt("arm_options.heading",this.hass.language)}
                </span>
                <ha-dropdown-item @click=${e=>this._toggleArmOptions(e,"skip_delay")}>
                  <ha-icon
                    icon="mdi:check"
                    style="${this.armOptions.skip_delay?"":"visibility: hidden"}"
                  ></ha-icon>
                  ${Mt("arm_options.skip_delay",this.hass.language)}
                </ha-dropdown-item>
                <ha-dropdown-item @click=${e=>this._toggleArmOptions(e,"force")}>
                  <ha-icon
                    icon="mdi:check"
                    style="${this.armOptions.force?"":"visibility: hidden"}"
                  ></ha-icon>
                  ${Mt("arm_options.force",this.hass.language)}
                </ha-dropdown-item>
              </ha-dropdown>
            `:""}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              style="--alarm-state-color: ${Bt(i,this._config)}"
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">
              ${((e,t)=>Lt(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}
            </div>
            <div class="state">
              ${Ut(i,this.hass.localize,this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="actions" class="actions">
          ${this._renderActions()}
        </div>

        ${!Rt(i)&&!this._config.keep_keypad_visible||this._config.use_code_dialog?Q``:Q`
              <ha-textfield
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!Rt(i)}
                @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputMode=${(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)===Ae?"numeric":"text"}
              ></ha-textfield>
            `}
        ${!Rt(i)&&!this._config.keep_keypad_visible||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)!==Ae||this._config.use_code_dialog||this._config.hide_keypad?Q``:Q`
          <div id="keypad" class="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
            ${ai.map(e=>""===e?Q`
              <alarmo-button
                disabled
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
                class="placeholder"
              ></alarmo-button>
            `:Q`
              <alarmo-button
                .value="${e}"
                @click=${this._handlePadClick}
                ?disabled=${!Rt(i)||"clear"===e&&!this._input.length}
                class="${"clear"!==e?"numberKey":"clear"}"
                style="--content-scale: ${this._config.button_scale_keypad}"
                ?scaled=${1!=this._config.button_scale_keypad}
              >
                ${"clear"===e?Q`<ha-icon icon="mdi:close" style="--mdc-icon-size: calc(${this._config.button_scale_keypad} * 24px)"></ha-icon>`:Q` <span>${e}</span>`}
              </alarmo-button>
            `)}
          </div>
        `}
      </ha-card>
    `:Q`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return Q``;const e=this.hass.states[this._config.entity],t=this._config.show_ready_indicator;return Q`
      <alarmo-actions-bar
        @button-clicked=${e=>this._handleActionClick(e,e.detail.action)}
        .hass=${this.hass}
        .config=${this._config}
        .readyForArmModes=${t?this.readyForArmModes:void 0}
        style="--alarm-state-color: ${Bt(e,this._config,!0)}; --content-scale: ${this._config.button_scale_actions}"
      ></alarmo-actions-bar>
    `}_renderWarning(){var e;if(!this.hass||!this._config||!this._config.show_messages)return Q``;const t=this.hass.states[this._config.entity];return t.attributes.open_sensors&&t.state==Ce.Triggered||"blocking_sensors"==this.warning&&t.attributes.open_sensors?Q`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?Mt("errors.blocking_sensors",this.hass.language):Mt("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(t.attributes.open_sensors).map(([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),Q`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `))}
            </div>
          ${"blocking_sensors"==this.warning&&t.attributes.open_sensors?Q`
            <alarmo-button
              @click=${this._forceRetryClick}
              style="--content-scale: ${this._config.button_scale_actions}"
              ?scaled=${1!=this._config.button_scale_actions}
            >
              <span>${Mt("arm_options.force",this.hass.language)}</span>
            </alarmo-button>
          `:""}
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:t.state.startsWith("armed_")&&(null===(e=t.attributes.bypassed_sensors)||void 0===e?void 0:e.length)&&this._config.show_bypassed_sensors?Q`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${Mt("errors.bypassed_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${t.attributes.bypassed_sensors.map(e=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),Q`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:Q``}_handlePadClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._input="clear"===t?"":this._input+t}async _handleActionClick(e,t){var i;e.target.blur(),this._clearCodeError();const a=this.hass.states[this._config.entity];if((null===(i=this._config)||void 0===i?void 0:i.use_code_dialog)&&!this._config.hide_keypad&&Rt(a)){const i=await new Promise(i=>{const a=e.target,s={code_format:this._alarmoConfig.code_format,area_id:this.area_id,entity_id:this._config.entity,action:t,armOptions:this.armOptions,cancel:()=>{i(null)},confirm:e=>{i(e)}};It(a,"show-dialog",{dialogTag:"alarmo-code-dialog",dialogImport:()=>Promise.resolve().then(function(){return ti}),dialogParams:s})});i!=je.Arm&&i!=je.Disarm||(this.warning="",this.armOptions=Object.assign({},De))}else t==ze.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:Ee[t],code:this._input})),this.warning="",this.armOptions=Object.assign({},De)}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e,t){e.stopImmediatePropagation(),e.target.blur(),"skip_delay"==t?this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay}):"force"==t&&(this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force}))}_forceRetryClick(){if(!this.hass||!this._config||!this._last_command)return;let e=this._last_command;this.hass.callService("alarmo","arm",{entity_id:this._config.entity,mode:Ee[e],code:this._last_code,force:!0}),this._last_command=void 0,this._last_code=void 0}static get styles(){return _`
      ha-card {
        padding-bottom: 16px;
        position: relative;
        height: 100%;
        box-sizing: border-box;
      }
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0px auto;
        padding: 20px 0px;
        box-sizing: border-box;
        gap: 20px;
        margin: 0px 50px;
      }
      .header .icon {
        display: flex;
      }
      .header .summary {
        display: flex;
        flex-direction: column;
      }
      .header .name {
        font-size: 24px;
        display: flex;
      }
      .header .state {
        font-size: 14px;
        display: flex;
      }
      .actions {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .actions alarmo-button {
        margin: 0 8px 8px;
      }
      ha-textfield {
        margin: 15px auto;
        max-width: 200px;
        text-align: center;
        margin-left: calc(50% - 200px / 2);
        margin-right: calc(50% - 200px / 2);
      }
      ha-textfield.error {
        animation: shake 0.2s ease-in-out 0s 2;
      }
      #keypad {
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        direction: ltr;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-rows: auto;
        grid-gap: var(--ha-space-4, 16px);
      }
      #keypad alarmo-button {
        width: calc(var(--content-scale, 1) * 56px);
        height: calc(var(--content-scale, 1) * 56px);
        --alarmo-button-font-size: 24px;
        --alarmo-button-background-color: var(--primary-text-color);
        --alarmo-button-background-opacity: 0.05;
        --alarmo-button-border-radius: 50%;
        --alarmo-button-border-color: none;
        --alarmo-button-color: var(--primary-text-color);
        font-weight: 500;
      }
      #keypad alarmo-button.clear:not([disabled]) {
        --alarmo-button-background-color: var(--red-color);
        --alarmo-button-color: var(--red-color);
        --alarmo-button-background-opacity: 0.10;
      }
      #keypad alarmo-button.placeholder {
        visibility: hidden;
      }
      @keyframes shake {
        0% {
          margin-left: calc(50% - 200px / 2);
        }
        25% {
          margin-left: calc(50% - 200px / 2 + 10px);
        }
        75% {
          margin-left: calc(50% - 200px / 2 - 10px);
        }
        100% {
          margin-left: calc(50% - 200px / 2);
        }
      }
      div.messagebox {
        width: 90%;
        margin: 0px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        --border-color: var(--label-badge-red);
      }
      div.messagebox.warning {
        --border-color: var(--label-badge-yellow);
      }
      div.messagebox.warning alarmo-sensor-badge {
        --label-badge-red: var(--label-badge-yellow);
      }
      div.messagebox-left {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 0px 1px 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      div.messagebox-right {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 1px 1px 0px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      div.messagebox-inner {
        flex-direction: column;
        border-bottom: 1px solid var(--border-color);
        flex: 1 1;
      }
      div.messagebox .description {
        display: flex;
        flex-direction: row;
      }
      div.messagebox .description span {
        color: var(--label-badge-red);
        font-weight: 500;
        display: flex;
        margin-top: -10px;
        padding: 0px 5px;
        flex-shrink: 2;
      }
      div.messagebox.warning .description span {
        color: #d0863d;
      }
      div.messagebox .description-filler {
        flex: 1;
        border-top: 1px solid var(--border-color);
        min-width: 5px;
      }
      div.messagebox .description ha-icon {
        --mdc-icon-size: 24px;
        margin: 0px 4px 0px 0px;
      }
      div.messagebox .content {
        display: flex;
        flex-basis: 100%;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        color: var(--primary-text-color);
      }
      div.messagebox .content .badge {
        width: 64px;
        margin: 5px 0px;
        justify-content: center;
        align-items: center;
      }
      div.messagebox alarmo-button {
        display: flex;
        justify-self: center;
        margin-bottom: 10px;
      }
      ha-dropdown {
        display: block;
        position: absolute;
        right: 4px;
        top: 4px;
      }
      ha-dropdown span.title {
        font-weight: bold;
        display: flex;
        height: 32px;
        align-items: center;
        padding: 0px 8px;
      }
      @media all and (max-width: 250px) {
        ha-dropdown {
          display: none;
        }
      }
    `}},t([ke({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([xe()],e.AlarmoCard.prototype,"_config",void 0),t([xe()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([xe()],e.AlarmoCard.prototype,"_input",void 0),t([xe()],e.AlarmoCard.prototype,"warning",void 0),t([xe()],e.AlarmoCard.prototype,"area_id",void 0),t([xe()],e.AlarmoCard.prototype,"armOptions",void 0),t([xe()],e.AlarmoCard.prototype,"readyForArmModes",void 0),t([xe()],e.AlarmoCard.prototype,"backendConnection",void 0),t([xe()],e.AlarmoCard.prototype,"showBypassedSensors",void 0),e.AlarmoCard=t([ye("alarmo-card")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace.",preview:!0}),console.info(`%c  ALARMO-CARD  \n%c  Version: ${"v1.6.8".padEnd(7," ")}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e}({});
