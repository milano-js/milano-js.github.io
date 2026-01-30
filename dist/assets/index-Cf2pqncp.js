(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const H=globalThis,F=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),Q=new WeakMap;let dt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Q.set(e,t))}return t}toString(){return this.cssText}};const ft=i=>new dt(typeof i=="string"?i:i+"",void 0,V),A=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,r,s)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new dt(e,i,V)},vt=(i,t)=>{if(F)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),r=H.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=e.cssText,i.appendChild(o)}},tt=F?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return ft(e)})(i):i;const{is:bt,defineProperty:$t,getOwnPropertyDescriptor:yt,getOwnPropertyNames:_t,getOwnPropertySymbols:xt,getPrototypeOf:wt}=Object,R=globalThis,et=R.trustedTypes,At=et?et.emptyScript:"",kt=R.reactiveElementPolyfillSupport,S=(i,t)=>i,j={toAttribute(i,t){switch(t){case Boolean:i=i?At:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},W=(i,t)=>!bt(i,t),rt={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??=Symbol("metadata"),R.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);r!==void 0&&$t(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:s}=yt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){const l=r?.call(this);s?.call(this,a),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rt}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,o=[..._t(e),...xt(e)];for(const r of o)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,r]of e)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const r=this._$Eu(e,o);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)e.unshift(tt(r))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const s=(o.converter?.toAttribute!==void 0?o.converter:j).toAttribute(e,o.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=o.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:j;this._$Em=r;const l=a.fromAttribute(e,s.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(t,e,o,r=!1,s){if(t!==void 0){const a=this.constructor;if(r===!1&&(s=this[t]),o??=a.getPropertyOptions(t),!((o.hasChanged??W)(s,e)||o.useDefault&&o.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:r,wrapped:s},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o){const{wrapped:a}=s,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,s,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[S("elementProperties")]=new Map,_[S("finalized")]=new Map,kt?.({ReactiveElement:_}),(R.reactiveElementVersions??=[]).push("2.1.2");const G=globalThis,ot=i=>i,N=G.trustedTypes,it=N?N.createPolicy("lit-html",{createHTML:i=>i}):void 0,ht="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+f,St=`<${pt}>`,y=document,E=()=>y.createComment(""),P=i=>i===null||typeof i!="object"&&typeof i!="function",X=Array.isArray,Et=i=>X(i)||typeof i?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,at=/>/g,v=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,lt=/"/g,ut=/^(?:script|style|textarea|title)$/i,Pt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),$=Pt(1),x=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),ct=new WeakMap,b=y.createTreeWalker(y,129);function gt(i,t){if(!X(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Ct=(i,t)=>{const e=i.length-1,o=[];let r,s=t===2?"<svg>":t===3?"<math>":"",a=k;for(let l=0;l<e;l++){const n=i[l];let d,p,c=-1,u=0;for(;u<n.length&&(a.lastIndex=u,p=a.exec(n),p!==null);)u=a.lastIndex,a===k?p[1]==="!--"?a=st:p[1]!==void 0?a=at:p[2]!==void 0?(ut.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=v):p[3]!==void 0&&(a=v):a===v?p[0]===">"?(a=r??k,c=-1):p[1]===void 0?c=-2:(c=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?v:p[3]==='"'?lt:nt):a===lt||a===nt?a=v:a===st||a===at?a=k:(a=v,r=void 0);const m=a===v&&i[l+1].startsWith("/>")?" ":"";s+=a===k?n+St:c>=0?(o.push(d),n.slice(0,c)+ht+n.slice(c)+f+m):n+f+(c===-2?l:m)}return[gt(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class C{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,a=0;const l=t.length-1,n=this.parts,[d,p]=Ct(t,e);if(this.el=C.createElement(d,o),b.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=b.nextNode())!==null&&n.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(ht)){const u=p[a++],m=r.getAttribute(c).split(f),T=/([.?@])?(.*)/.exec(u);n.push({type:1,index:s,name:T[2],strings:m,ctor:T[1]==="."?Mt:T[1]==="?"?Ut:T[1]==="@"?zt:L}),r.removeAttribute(c)}else c.startsWith(f)&&(n.push({type:6,index:s}),r.removeAttribute(c));if(ut.test(r.tagName)){const c=r.textContent.split(f),u=c.length-1;if(u>0){r.textContent=N?N.emptyScript:"";for(let m=0;m<u;m++)r.append(c[m],E()),b.nextNode(),n.push({type:2,index:++s});r.append(c[u],E())}}}else if(r.nodeType===8)if(r.data===pt)n.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(f,c+1))!==-1;)n.push({type:7,index:s}),c+=f.length-1}s++}}static createElement(t,e){const o=y.createElement("template");return o.innerHTML=t,o}}function w(i,t,e=i,o){if(t===x)return t;let r=o!==void 0?e._$Co?.[o]:e._$Cl;const s=P(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(i),r._$AT(i,e,o)),o!==void 0?(e._$Co??=[])[o]=r:e._$Cl=r),r!==void 0&&(t=w(i,r._$AS(i,t.values),r,o)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??y).importNode(e,!0);b.currentNode=r;let s=b.nextNode(),a=0,l=0,n=o[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new M(s,s.nextSibling,this,t):n.type===1?d=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(d=new Tt(s,this,t)),this._$AV.push(d),n=o[++l]}a!==n?.index&&(s=b.nextNode(),a++)}return b.currentNode=y,r}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),P(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=C.createElement(gt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{const s=new Ot(r,this),a=s.u(this.options);s.p(e),this.T(a),this._$AH=s}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new C(t)),e}k(t){X(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const s of t)r===e.length?e.push(o=new M(this.O(E()),this.O(E()),this,this.options)):o=e[r],o._$AI(s),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const o=ot(t).nextSibling;ot(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(t,e=this,o,r){const s=this.strings;let a=!1;if(s===void 0)t=w(this,t,e,0),a=!P(t)||t!==this._$AH&&t!==x,a&&(this._$AH=t);else{const l=t;let n,d;for(t=s[0],n=0;n<s.length-1;n++)d=w(this,l[o+n],e,n),d===x&&(d=this._$AH[n]),a||=!P(d)||d!==this._$AH[n],d===h?t=h:t!==h&&(t+=(d??"")+s[n+1]),this._$AH[n]=d}a&&!r&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Ut extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class zt extends L{constructor(t,e,o,r,s){super(t,e,o,r,s),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??h)===x)return;const o=this._$AH,r=t===h&&o!==h||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==h&&(o===h||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const Ht=G.litHtmlPolyfillSupport;Ht?.(C,M),(G.litHtmlVersions??=[]).push("3.3.2");const jt=(i,t,e)=>{const o=e?.renderBefore??t;let r=o._$litPart$;if(r===void 0){const s=e?.renderBefore??null;o._$litPart$=r=new M(t.insertBefore(E(),s),s,void 0,e??{})}return r._$AI(i),r};const Y=globalThis;class g extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}}g._$litElement$=!0,g.finalized=!0,Y.litElementHydrateSupport?.({LitElement:g});const Nt=Y.litElementPolyfillSupport;Nt?.({LitElement:g});(Y.litElementVersions??=[]).push("4.2.2");const U=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};const Dt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:W},Rt=(i=Dt,t,e)=>{const{kind:o,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),o==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,i,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,i,l),l}}}if(o==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,i,!0,l)}}throw Error("Unsupported decorator location: "+o)};function Lt(i){return(t,e)=>typeof e=="object"?Rt(i,t,e):((o,r,s)=>{const a=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),a?Object.getOwnPropertyDescriptor(r,s):void 0})(i,t,e)}function Z(i){return Lt({...i,state:!0,attribute:!1})}const z=A`
  :host {
    /* Palette */
    --color-dark: #323330;
    --color-accent-yellow: #f0db4f;
    --color-primary-green: #004643;
    --color-accent-red: #e16162;
    --color-light-blue: #ebf2fa;
    --color-white: #ffffff;

    /* Typography */
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Space Grotesk', monospace; /* Tech feel */

    /* Shapes & Borders (Brutalist) */
    --border-thick: 3px solid var(--color-dark);
    --border-thin: 1px solid var(--color-dark);
    --radius-raw: 0px;
    --radius-soft: 4px;
    
    /* Patterns */
    --pattern-dots: radial-gradient(var(--color-dark) 1px, transparent 1px);
    --pattern-lines: repeating-linear-gradient(45deg, var(--color-dark), var(--color-dark) 2px, transparent 2px, transparent 10px);
    
    /* Spacing */
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;

    /* Shadows */
    --shadow-hard: 4px 4px 0px var(--color-dark);
    --shadow-hard-lg: 8px 8px 0px var(--color-dark);
  }
`;var Bt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,K=(i,t,e,o)=>{for(var r=o>1?void 0:o?It(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Bt(t,e,r),r};let O=class extends g{constructor(){super(...arguments),this.onlineCount=null,this.totalCount=null}async connectedCallback(){super.connectedCallback();try{const i=await fetch("https://discord.com/api/v9/invites/CrHrweEaUg?with_counts=true");if(i.ok){const t=await i.json();this.onlineCount=t.approximate_presence_count,this.totalCount=t.approximate_member_count}}catch(i){console.error("Failed to fetch Discord stats",i)}}render(){return $`
      <div class="hero-grid">
        <div class="logo-box">
          <div class="logo-wrapper">
            <img class="logo" src="/assets/mijs.svg" alt="Milano JS Logo" />
            <div class="balloon">dal 2012</div>
          </div>

          <a href="https://discord.gg/CrHrweEaUg" target="_blank" rel="noopener noreferrer" class="cta-button">
            Unisciti su Discord
          </a>
          
          <div class="discord-stats">
            <div class="discord-stat">
              <span class="dot"></span>
              <span>${this.onlineCount??"..."} Online</span>
            </div>
            <div class="discord-stat">
              <span class="dot total"></span>
              <span>${this.totalCount??"..."} Membri</span>
            </div>
          </div>
        </div>
        <div class="content-box">
          <h1>Milano<br>JavaScript<br>Community</h1>
          <div class="slogan-box">
            <span class="slogan-text">Il DOM de Milan</span>
          </div>
        </div>
      </div>
    `}};O.styles=[z,A`
      :host {
        display: block;
        border-bottom: var(--border-thick);
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr;
      }

      @media (min-width: 768px) {
        .hero-grid {
          grid-template-columns: 40% 60%;
        }
      }

      .logo-box {
        background-color: var(--color-light-blue);
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        border-bottom: var(--border-thick);
      }

      @media (min-width: 768px) {
        .logo-box {
          border-bottom: none;
          border-right: var(--border-thick);
        }
      }

      /* Wrapper for precise balloon positioning */
      .logo-wrapper {
        position: relative;
        display: inline-block;
        margin-bottom: 2rem;
      }

      img.logo {
        width: 180px;
        height: auto;
        filter: drop-shadow(var(--shadow-hard));
        display: block; /* Removes bottom spacing */
      }

      .balloon {
        position: absolute;
        top: -15px;
        right: -40px;
        background-color: var(--color-accent-red);
        color: white;
        padding: 0.5rem 1rem;
        font-family: var(--font-body);
        font-weight: 700;
        text-transform: uppercase;
        border: var(--border-thick);
        box-shadow: var(--shadow-hard);
        transform: rotate(12deg);
        z-index: 10;
        animation: glitch-anim 3s infinite linear alternate-reverse;
      }

      .content-box {
        background-color: var(--color-accent-yellow);
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      h1 {
        font-family: var(--font-heading);
        font-size: 3.5rem;
        font-weight: 900;
        text-transform: uppercase;
        line-height: 0.9;
        margin: 0;
        color: var(--color-dark);
        letter-spacing: -2px;
        text-shadow: 2px 2px 0px rgba(255,255,255,0.5);
      }

      @media (min-width: 1024px) {
        h1 { font-size: 5rem; }
      }

      .slogan-box {
        margin-top: 1.5rem;
        background-color: var(--color-dark);
        color: var(--color-white);
        padding: 0.5rem 1.5rem;
        font-family: var(--font-body);
        font-size: 1.2rem;
        font-weight: 700;
        transform: skewX(-10deg);
        box-shadow: var(--shadow-hard);
      }

      .slogan-text {
        display: block;
        transform: skewX(10deg);
      }

      .cta-button {
        display: inline-block;
        background-color: var(--color-primary-green);
        color: var(--color-white);
        font-family: var(--font-heading);
        font-size: 1.2rem;
        font-weight: 700;
        padding: 1rem 2rem;
        text-transform: uppercase;
        text-decoration: none;
        border: var(--border-thick);
        box-shadow: var(--shadow-hard);
        transition: all 0.2s ease;
        margin-bottom: 1rem;
      }

      .cta-button:hover {
        transform: translate(-2px, -2px);
        box-shadow: var(--shadow-hard-lg);
        filter: brightness(1.1);
      }
      
      .cta-button:active {
        transform: translate(0, 0);
        box-shadow: var(--shadow-hard);
      }

      .discord-stats {
        font-family: var(--font-body);
        font-size: 0.9rem;
        color: var(--color-dark);
        display: flex;
        gap: 1rem;
        font-weight: bold;
      }
      
      .discord-stat {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--color-primary-green);
        border: 1px solid black;
      }
      
      .dot.total { background-color: var(--color-accent-yellow); }

      /* Glitch Animation */
      @keyframes glitch-anim {
        0% { transform: rotate(12deg) translate(0); }
        20% { transform: rotate(12deg) translate(-2px, 2px); }
        40% { transform: rotate(12deg) translate(-2px, -2px); }
        60% { transform: rotate(12deg) translate(2px, 2px); }
        80% { transform: rotate(12deg) translate(2px, -2px); }
        100% { transform: rotate(12deg) translate(0); }
      }
    `];K([Z()],O.prototype,"onlineCount",2);K([Z()],O.prototype,"totalCount",2);O=K([U("hero-section")],O);var Jt=Object.getOwnPropertyDescriptor,qt=(i,t,e,o)=>{for(var r=o>1?void 0:o?Jt(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(r)||r);return r};let I=class extends g{render(){return $`
      <div class="bg-decoration"></div>
      <div class="container">
        <div class="text-content">
          <h2>Origins_<br>Protocol</h2>
          <p>
            Milano JS è la community JavaScript di Milano ma, soprattutto, è la prima nata in Italia. 
            Da subito ha riscontrato un enorme successo di pubblico; non solo la community milanese 
            è cresciuta molto in poco tempo, ma Milano JS è riuscita a influenzare 
            molte persone che, a loro volta, hanno creato una community JS nella loro città, 
            dando vita a una rete di community in tutta Italia.
          </p>
          <p>
            La voglia di confrontarsi con altri sviluppatori JavaScript è stata subito un'esigenza molto sentita dalla community e quindi, dopo qualche mese, è nato il Google Group 
            di Milano JS, diventato poi un canale Slack e infine un server Discord, 
            dove ci puoi trovare tutt’ora.
          </p>
        </div>
        
        <div class="video-wrapper">
          <div class="video-header">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
          <div class="video-container">
            <iframe 
              src="https://www.youtube.com/embed/9wXOEZETFTE?si=9ibJr3bTXaFDPZta" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    `}};I.styles=[z,A`
      :host {
        display: block;
        padding: var(--spacing-xl) var(--spacing-md);
        background-color: var(--color-white);
        border-bottom: var(--border-thick);
        position: relative;
        overflow: hidden;
      }
      
      /* Decorative Background Elements */
      .bg-decoration {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0.05;
        background-image: var(--pattern-dots);
        background-size: 20px 20px;
        pointer-events: none;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        gap: 4rem;
        grid-template-columns: 1fr;
        position: relative;
        z-index: 1;
      }

      @media (min-width: 900px) {
        .container {
          grid-template-columns: 1.2fr 0.8fr;
          align-items: start;
        }
      }

      .text-content {
        font-family: var(--font-body);
        font-size: 1.1rem;
        border: var(--border-thick);
        padding: 2rem;
        background: var(--color-white);
        box-shadow: var(--shadow-hard);
      }

      h2 {
        font-family: var(--font-heading);
        font-size: 3rem;
        color: var(--color-dark);
        margin-top: 0;
        line-height: 1;
        margin-bottom: 2rem;
        text-transform: uppercase;
        background: var(--color-accent-yellow);
        display: inline-block;
        padding: 0 0.5rem;
        border: var(--border-thick);
        transform: translate(-1rem, -3rem) rotate(-1deg);
      }

      p {
        line-height: 1.7;
        margin-bottom: 2rem;
      }

      /* Brutalist Video Frame */
      .video-wrapper {
        background: var(--color-dark);
        padding: 0.5rem;
        box-shadow: var(--shadow-hard-lg);
        border: var(--border-thick);
        position: relative;
      }
      
      .video-wrapper::before {
        content: '';
        position: absolute;
        bottom: -20px;
        right: -20px;
        width: 100%;
        height: 100%;
        background-image: var(--pattern-lines);
        background-size: 10px 10px;
        z-index: -1;
        opacity: 0.2;
      }

      .video-header {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        padding-left: 0.5rem;
      }

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: var(--color-white);
        border: 1px solid black;
      }

      .dot.red { background-color: var(--color-accent-red); }
      .dot.yellow { background-color: var(--color-accent-yellow); }
      .dot.green { background-color: var(--color-primary-green); }

      .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
        overflow: hidden;
        border: var(--border-thin);
        background: black;
      }

      .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
      }
    `];I=qt([U("content-section")],I);var Ft=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,mt=(i,t,e,o)=>{for(var r=o>1?void 0:o?Vt(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Ft(t,e,r),r};let D=class extends g{constructor(){super(...arguments),this.selectedPhoto=null,this.photos=["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg"]}openPhoto(i){this.selectedPhoto=i}closePhoto(){this.selectedPhoto=null}render(){return $`
      <h2>Evidence_Log</h2>
      <div class="gallery-grid">
        ${this.photos.map((i,t)=>$`
          <div class="gallery-item" data-index="0${t+1}" @click=${()=>this.openPhoto(i)}>
            <div class="tape"></div>
            <img src="/assets/photos/${i}" alt="Foto meetup Milano JS" loading="lazy" />
          </div>
        `)}
      </div>

      ${this.selectedPhoto?$`
        <div class="lightbox" @click=${this.closePhoto}>
          <div class="lightbox-content" @click=${i=>i.stopPropagation()}>
            <img src="/assets/photos/${this.selectedPhoto}" alt="Full size photo" />
            <button class="close-btn" @click=${this.closePhoto}>X</button>
          </div>
        </div>
      `:""}
    `}};D.styles=[z,A`
      :host {
        display: block;
        padding: var(--spacing-xl) var(--spacing-md);
        background-color: var(--color-light-blue);
        border-bottom: var(--border-thick);
        position: relative;
        overflow: hidden;
      }
      
      /* Brutalist Background Grid */
      :host::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-image: 
          linear-gradient(var(--color-dark) 1px, transparent 1px),
          linear-gradient(90deg, var(--color-dark) 1px, transparent 1px);
        background-size: 100px 100px;
        opacity: 0.05;
        z-index: 0;
      }

      h2 {
        text-align: center;
        font-family: var(--font-heading);
        font-size: 4rem;
        color: var(--color-dark);
        margin-bottom: 4rem;
        text-transform: uppercase;
        letter-spacing: -2px;
        position: relative;
        z-index: 2;
        text-shadow: 4px 4px 0px var(--color-accent-yellow);
      }

      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 3rem;
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
      }

      .gallery-item {
        position: relative;
        border: var(--border-thick);
        background: white;
        padding: 0.5rem;
        box-shadow: var(--shadow-hard);
        transition: transform 0.2s cubic-bezier(0.1, 0.7, 1.0, 0.1);
        cursor: pointer;
      }

      .gallery-item:nth-child(even) {
        transform: rotate(2deg) translateY(2rem);
      }

      .gallery-item:nth-child(odd) {
        transform: rotate(-1deg);
      }
      
      .gallery-item:nth-child(3n) {
        transform: rotate(1.5deg) translateY(-1rem);
      }

      .gallery-item:hover {
        transform: translate(-4px, -4px) rotate(0deg) !important;
        box-shadow: var(--shadow-hard-lg);
        z-index: 10;
        background-color: var(--color-accent-yellow);
      }

      .gallery-item img {
        width: 100%;
        height: auto;
        aspect-ratio: 4/3;
        object-fit: cover;
        filter: grayscale(100%) contrast(120%);
        transition: filter 0.3s ease;
        display: block;
        border: 1px solid black;
      }

      .gallery-item:hover img {
        filter: grayscale(0%) contrast(100%);
      }

      .tape {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 30px;
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        z-index: 20;
      }

      /* Number Decoration */
      .gallery-item::before {
        content: attr(data-index);
        position: absolute;
        bottom: -2rem;
        right: -1rem;
        font-family: var(--font-heading);
        font-size: 4rem;
        color: var(--color-dark);
        opacity: 0.1;
        font-weight: 900;
        pointer-events: none;
        z-index: -1;
      }

      /* Lightbox */
      .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(50, 51, 48, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 2rem;
        box-sizing: border-box;
      }

      .lightbox-content {
        position: relative;
        max-width: 100%;
        max-height: 100%;
        border: var(--border-thick);
        padding: 10px;
        background: var(--color-white);
        box-shadow: 0 0 50px rgba(0,0,0,0.8);
      }

      .lightbox img {
        max-width: 100%;
        max-height: 85vh;
        display: block;
        border: 1px solid black;
      }

      .close-btn {
        position: absolute;
        top: -2rem;
        right: -2rem;
        background: var(--color-accent-red);
        color: white;
        border: var(--border-thick);
        width: 3rem;
        height: 3rem;
        font-family: var(--font-heading);
        font-weight: 900;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-hard);
        transition: transform 0.1s;
      }
      
      .close-btn:hover {
        transform: translate(-2px, -2px);
        box-shadow: var(--shadow-hard-lg);
      }
    `];mt([Z()],D.prototype,"selectedPhoto",2);D=mt([U("photo-gallery")],D);var Wt=Object.getOwnPropertyDescriptor,Gt=(i,t,e,o)=>{for(var r=o>1?void 0:o?Wt(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(r)||r);return r};let J=class extends g{render(){return $`
      <div class="footer-grid">
        <div class="links">
          <a href="https://www.facebook.com/milanojavascript" target="_blank">Facebook</a>
          <a href="https://x.com/milano_js" target="_blank">X / Twitter</a>
          <a href="https://github.com/milano-js/" target="_blank">GitHub</a>
          <a href="https://www.youtube.com/@Milano-JS" target="_blank">YouTube</a>
          <a href="https://discord.gg/CrHrweEaUg" target="_blank">Discord</a>
        </div>
        <div class="copyright">
          © ${new Date().getFullYear()} MILANO JS // Nessun file JavaScript è stato maltrattato per creare questo sito che, di fatto, è in TypeScript.
        </div>
      </div>
    `}};J.styles=[z,A`
      :host {
        display: block;
        padding: 4rem 1rem;
        background-color: var(--color-white);
        color: var(--color-dark);
        border-top: var(--border-thick);
      }

      .footer-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }

      .links {
        display: flex;
        gap: 0;
        border: var(--border-thick);
        flex-wrap: wrap;
        box-shadow: var(--shadow-hard);
      }

      a {
        padding: 1rem 2rem;
        color: var(--color-dark);
        text-decoration: none;
        font-family: var(--font-body);
        font-weight: 700;
        text-transform: uppercase;
        border-right: var(--border-thick);
        transition: background-color 0.2s;
      }

      a:last-child {
        border-right: none;
      }

      a:hover {
        background-color: var(--color-accent-yellow);
      }

      .copyright {
        font-family: var(--font-body);
        font-size: 0.9rem;
        opacity: 0.6;
      }
    `];J=Gt([U("footer-section")],J);var Xt=Object.getOwnPropertyDescriptor,Yt=(i,t,e,o)=>{for(var r=o>1?void 0:o?Xt(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(r)||r);return r};let q=class extends g{render(){return $`
      <header>
        <hero-section></hero-section>
      </header>
      <main>
        <content-section></content-section>
        <photo-gallery></photo-gallery>
      </main>
      <footer>
        <footer-section></footer-section>
      </footer>
    `}};q.styles=[z,A`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--color-white);
        color: var(--color-dark);
        font-family: var(--font-body);
      }
    `];q=Yt([U("milano-app")],q);
