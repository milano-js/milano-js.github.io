(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const U=globalThis,W=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),tt=new WeakMap;let ht=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&tt.set(e,t))}return t}toString(){return this.cssText}};const bt=i=>new ht(typeof i=="string"?i:i+"",void 0,G),x=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,r,s)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new ht(e,i,G)},yt=(i,t)=>{if(W)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),r=U.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=e.cssText,i.appendChild(o)}},et=W?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return bt(e)})(i):i;const{is:$t,defineProperty:xt,getOwnPropertyDescriptor:wt,getOwnPropertyNames:_t,getOwnPropertySymbols:At,getPrototypeOf:kt}=Object,I=globalThis,rt=I.trustedTypes,St=rt?rt.emptyScript:"",Et=I.reactiveElementPolyfillSupport,P=(i,t)=>i,j={toAttribute(i,t){switch(t){case Boolean:i=i?St:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},X=(i,t)=>!$t(i,t),ot={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),I.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ot){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);r!==void 0&&xt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:s}=wt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){const l=r?.call(this);s?.call(this,a),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ot}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=kt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,o=[..._t(e),...At(e)];for(const r of o)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,r]of e)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const r=this._$Eu(e,o);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)e.unshift(et(r))}else t!==void 0&&e.push(et(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const s=(o.converter?.toAttribute!==void 0?o.converter:j).toAttribute(e,o.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=o.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:j;this._$Em=r;const l=a.fromAttribute(e,s.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(t,e,o,r=!1,s){if(t!==void 0){const a=this.constructor;if(r===!1&&(s=this[t]),o??=a.getPropertyOptions(t),!((o.hasChanged??X)(s,e)||o.useDefault&&o.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:r,wrapped:s},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o){const{wrapped:a}=s,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,s,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[P("elementProperties")]=new Map,w[P("finalized")]=new Map,Et?.({ReactiveElement:w}),(I.reactiveElementVersions??=[]).push("2.1.2");const Y=globalThis,it=i=>i,H=Y.trustedTypes,st=H?H.createPolicy("lit-html",{createHTML:i=>i}):void 0,pt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,ut="?"+v,Pt=`<${ut}>`,$=document,C=()=>$.createComment(""),O=i=>i===null||typeof i!="object"&&typeof i!="function",Z=Array.isArray,Ct=i=>Z(i)||typeof i?.[Symbol.iterator]=="function",J=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,nt=/>/g,b=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,ct=/"/g,gt=/^(?:script|style|textarea|title)$/i,Ot=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),u=Ot(1),_=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),dt=new WeakMap,y=$.createTreeWalker($,129);function mt(i,t){if(!Z(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const zt=(i,t)=>{const e=i.length-1,o=[];let r,s=t===2?"<svg>":t===3?"<math>":"",a=E;for(let l=0;l<e;l++){const n=i[l];let d,p,c=-1,m=0;for(;m<n.length&&(a.lastIndex=m,p=a.exec(n),p!==null);)m=a.lastIndex,a===E?p[1]==="!--"?a=at:p[1]!==void 0?a=nt:p[2]!==void 0?(gt.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=b):p[3]!==void 0&&(a=b):a===b?p[0]===">"?(a=r??E,c=-1):p[1]===void 0?c=-2:(c=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?b:p[3]==='"'?ct:lt):a===ct||a===lt?a=b:a===at||a===nt?a=E:(a=b,r=void 0);const f=a===b&&i[l+1].startsWith("/>")?" ":"";s+=a===E?n+Pt:c>=0?(o.push(d),n.slice(0,c)+pt+n.slice(c)+v+f):n+v+(c===-2?l:f)}return[mt(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class z{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,a=0;const l=t.length-1,n=this.parts,[d,p]=zt(t,e);if(this.el=z.createElement(d,o),y.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=y.nextNode())!==null&&n.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(pt)){const m=p[a++],f=r.getAttribute(c).split(v),D=/([.?@])?(.*)/.exec(m);n.push({type:1,index:s,name:D[2],strings:f,ctor:D[1]==="."?Tt:D[1]==="?"?Dt:D[1]==="@"?Ut:L}),r.removeAttribute(c)}else c.startsWith(v)&&(n.push({type:6,index:s}),r.removeAttribute(c));if(gt.test(r.tagName)){const c=r.textContent.split(v),m=c.length-1;if(m>0){r.textContent=H?H.emptyScript:"";for(let f=0;f<m;f++)r.append(c[f],C()),y.nextNode(),n.push({type:2,index:++s});r.append(c[m],C())}}}else if(r.nodeType===8)if(r.data===ut)n.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(v,c+1))!==-1;)n.push({type:7,index:s}),c+=v.length-1}s++}}static createElement(t,e){const o=$.createElement("template");return o.innerHTML=t,o}}function A(i,t,e=i,o){if(t===_)return t;let r=o!==void 0?e._$Co?.[o]:e._$Cl;const s=O(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(i),r._$AT(i,e,o)),o!==void 0?(e._$Co??=[])[o]=r:e._$Cl=r),r!==void 0&&(t=A(i,r._$AS(i,t.values),r,o)),t}class Mt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??$).importNode(e,!0);y.currentNode=r;let s=y.nextNode(),a=0,l=0,n=o[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new T(s,s.nextSibling,this,t):n.type===1?d=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(d=new jt(s,this,t)),this._$AV.push(d),n=o[++l]}a!==n?.index&&(s=y.nextNode(),a++)}return y.currentNode=$,r}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),O(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=z.createElement(mt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{const s=new Mt(r,this),a=s.u(this.options);s.p(e),this.T(a),this._$AH=s}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new z(t)),e}k(t){Z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const s of t)r===e.length?e.push(o=new T(this.O(C()),this.O(C()),this,this.options)):o=e[r],o._$AI(s),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const o=it(t).nextSibling;it(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(t,e=this,o,r){const s=this.strings;let a=!1;if(s===void 0)t=A(this,t,e,0),a=!O(t)||t!==this._$AH&&t!==_,a&&(this._$AH=t);else{const l=t;let n,d;for(t=s[0],n=0;n<s.length-1;n++)d=A(this,l[o+n],e,n),d===_&&(d=this._$AH[n]),a||=!O(d)||d!==this._$AH[n],d===h?t=h:t!==h&&(t+=(d??"")+s[n+1]),this._$AH[n]=d}a&&!r&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Dt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Ut extends L{constructor(t,e,o,r,s){super(t,e,o,r,s),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??h)===_)return;const o=this._$AH,r=t===h&&o!==h||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==h&&(o===h||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class jt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const Ht=Y.litHtmlPolyfillSupport;Ht?.(z,T),(Y.litHtmlVersions??=[]).push("3.3.2");const Nt=(i,t,e)=>{const o=e?.renderBefore??t;let r=o._$litPart$;if(r===void 0){const s=e?.renderBefore??null;o._$litPart$=r=new T(t.insertBefore(C(),s),s,void 0,e??{})}return r._$AI(i),r};const K=globalThis;class g extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _}}g._$litElement$=!0,g.finalized=!0,K.litElementHydrateSupport?.({LitElement:g});const Rt=K.litElementPolyfillSupport;Rt?.({LitElement:g});(K.litElementVersions??=[]).push("4.2.2");const k=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};const It={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:X},Lt=(i=It,t,e)=>{const{kind:o,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),o==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,i,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,i,l),l}}}if(o==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,i,!0,l)}}throw Error("Unsupported decorator location: "+o)};function Bt(i){return(t,e)=>typeof e=="object"?Lt(i,t,e):((o,r,s)=>{const a=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),a?Object.getOwnPropertyDescriptor(r,s):void 0})(i,t,e)}function B(i){return Bt({...i,state:!0,attribute:!1})}const S=x`
  :host {
    /* Palette */
    --color-dark: #323330;
    --color-accent-yellow: #f0db4f;
    --color-primary-green: #004643;
    --color-accent-red: #e16162;
    --color-light-blue: #ebf2fa;
    --color-white: #ffffff;
    --color-black: #000000;

    /* Typography */
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Space Grotesk', monospace; /* Tech feel */

    /* Shapes & Borders (Brutalist) */
    --border-thick: 3px solid var(--border-color);
    --border-thin: 1px solid var(--border-color);
    --radius-raw: 0px;
    --radius-soft: 4px;
    
    /* Patterns */
    --pattern-dots: radial-gradient(var(--pattern-color) 1px, transparent 1px);
    --pattern-lines: repeating-linear-gradient(45deg, var(--pattern-color), var(--pattern-color) 2px, transparent 2px, transparent 10px);
    
    /* Spacing */
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;

    /* Shadows */
    --shadow-hard: 4px 4px 0px var(--shadow-color);
    --shadow-hard-lg: 8px 8px 0px var(--shadow-color);

    /* Semantic Variables (Light Default) */
    --bg-page: var(--color-white);
    --bg-card: var(--color-white);
    --bg-contrast: var(--color-dark);
    --bg-surface-alt: var(--color-light-blue);
    --text-primary: var(--color-dark);
    --text-inverse: var(--color-white);
    --text-on-accent: var(--color-dark);
    --bg-action-primary: var(--color-primary-green);
    --text-on-action: var(--color-white);
    --border-color: var(--color-dark);
    --shadow-color: var(--color-dark);
    --pattern-color: var(--color-dark);
  }

  /* Dark Theme Overrides */
  /* Applies if user explicitly chooses dark OR if they prefer dark and haven't chosen light (assuming default handling elsewhere, 
     but request says 'light theme should be the default' which often implies ignoring system pref unless mapped. 
     For 'light default' + 'user choice stored', we usually rely on a class applied by JS. 
     If we want 'system default' as fallback, we keep media query. 
     If we want STRICT light default, we only use the selector.
     However, standard best practice for 'light default' usually means the site loads light unless user switches. 
     So we will stick to the selector applied by JS.
     BUT, to be safe and support system pref if logic allows, I will combine them or just use the selector as primary.
     Given user requirement "light theme should be the default", I will use a selector that requires the JS to act for Dark, 
     but I will also keep the media query wrapped in a way that it can be overridden, OR just rely on the JS to set the attribute based on preference if we wanted that.
     Simple approach: The JS will handle the default state (light). The CSS just reacts to the attribute. */
  
  :host-context(body[data-theme="dark"]) {
    --bg-page: var(--color-dark);
    --bg-card: #2a2b28;
    --bg-contrast: var(--color-light-blue);
    --bg-surface-alt: #252525;
    --text-primary: var(--color-light-blue);
    --text-inverse: var(--color-dark);
    --text-on-accent: var(--color-dark);
    --bg-action-primary: var(--color-accent-yellow);
    --text-on-action: var(--color-dark);
    --border-color: var(--color-light-blue);
    --shadow-color: var(--color-black);
    --pattern-color: var(--color-light-blue);
  }
`;var Jt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Q=(i,t,e,o)=>{for(var r=o>1?void 0:o?qt(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Jt(t,e,r),r};let M=class extends g{constructor(){super(...arguments),this.onlineCount=null,this.totalCount=null}async connectedCallback(){super.connectedCallback();try{const i=await fetch("https://discord.com/api/v9/invites/CrHrweEaUg?with_counts=true");if(i.ok){const t=await i.json();this.onlineCount=t.approximate_presence_count,this.totalCount=t.approximate_member_count}}catch(i){console.error("Failed to fetch Discord stats",i)}}render(){return u`
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
    `}};M.styles=[S,x`
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
        background-color: var(--bg-surface-alt);
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
        color: var(--text-on-accent);
        letter-spacing: -2px;
        text-shadow: 2px 2px 0px rgba(255,255,255,0.5);
      }

      @media (min-width: 1024px) {
        h1 { font-size: 5rem; }
      }

      .slogan-box {
        margin-top: 1.5rem;
        background-color: var(--bg-contrast);
        color: var(--text-inverse);
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
        background-color: var(--bg-action-primary);
        color: var(--text-on-action);
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
        color: var(--text-primary);
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
    `];Q([B()],M.prototype,"onlineCount",2);Q([B()],M.prototype,"totalCount",2);M=Q([k("hero-section")],M);var Ft=Object.getOwnPropertyDescriptor,Vt=(i,t,e,o)=>{for(var r=o>1?void 0:o?Ft(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(r)||r);return r};let q=class extends g{render(){return u`
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
    `}};q.styles=[S,x`
      :host {
        display: block;
        padding: var(--spacing-xl) var(--spacing-md);
        background-color: var(--bg-page);
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
        font-size: 1.1rem;
        border: var(--border-thick);
        padding: 2rem;
        background: var(--bg-card);
        box-shadow: var(--shadow-hard);
      }

      h2 {
        font-family: var(--font-heading);
        font-size: 3rem;
        color: var(--text-on-accent);
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
        background: var(--bg-contrast);
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
        background-color: var(--bg-page);
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
    `];q=Vt([k("content-section")],q);var Wt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,ft=(i,t,e,o)=>{for(var r=o>1?void 0:o?Gt(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Wt(t,e,r),r};let N=class extends g{constructor(){super(...arguments),this.selectedPhoto=null,this.photos=["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg"]}openPhoto(i){this.selectedPhoto=i}closePhoto(){this.selectedPhoto=null}render(){return u`
      <h2>Evidence_Log</h2>
      <div class="gallery-grid">
        ${this.photos.map((i,t)=>u`
          <div class="gallery-item" data-index="0${t+1}" @click=${()=>this.openPhoto(i)}>
            <div class="tape"></div>
            <img src="/assets/photos/${i}" alt="Foto meetup Milano JS" loading="lazy" />
          </div>
        `)}
      </div>

      ${this.selectedPhoto?u`
        <div class="lightbox" @click=${this.closePhoto}>
          <div class="lightbox-content" @click=${i=>i.stopPropagation()}>
            <img src="/assets/photos/${this.selectedPhoto}" alt="Full size photo" />
            <button class="close-btn" @click=${this.closePhoto}>X</button>
          </div>
        </div>
      `:""}
    `}};N.styles=[S,x`
      :host {
        display: block;
        padding: var(--spacing-xl) var(--spacing-md);
        background-color: var(--bg-surface-alt);
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
          linear-gradient(var(--pattern-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--pattern-color) 1px, transparent 1px);
        background-size: 100px 100px;
        opacity: 0.05;
        z-index: 0;
      }

      h2 {
        text-align: center;
        font-family: var(--font-heading);
        font-size: 4rem;
        color: var(--text-primary);
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
        background: var(--bg-card);
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
        color: var(--text-primary);
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
        background: var(--bg-card);
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
    `];ft([B()],N.prototype,"selectedPhoto",2);N=ft([k("photo-gallery")],N);var Xt=Object.getOwnPropertyDescriptor,Yt=(i,t,e,o)=>{for(var r=o>1?void 0:o?Xt(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(r)||r);return r};let F=class extends g{render(){return u`
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
    `}};F.styles=[S,x`
      :host {
        display: block;
        padding: 4rem 1rem;
        background-color: var(--bg-page);
        color: var(--text-primary);
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
        color: var(--text-primary);
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
        color: var(--text-on-accent);
      }

      .copyright {
        font-family: var(--font-body);
        font-size: 0.9rem;
        opacity: 0.6;
      }
    `];F=Yt([k("footer-section")],F);var Zt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,vt=(i,t,e,o)=>{for(var r=o>1?void 0:o?Kt(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Zt(t,e,r),r};let R=class extends g{constructor(){super(...arguments),this.isDark=!1}connectedCallback(){super.connectedCallback(),localStorage.getItem("theme")==="dark"&&(this.isDark=!0,document.body.setAttribute("data-theme","dark"))}toggleTheme(){this.isDark=!this.isDark,this.isDark?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.body.removeAttribute("data-theme"),localStorage.setItem("theme","light"))}render(){return u`
      <button @click=${this.toggleTheme} aria-label="Toggle Dark Mode">
        ${this.isDark?u`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>`:u`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>`}
      </button>
    `}};R.styles=[S,x`
      :host {
        display: inline-block;
      }
      
      button {
        background: var(--bg-card);
        border: var(--border-thick);
        box-shadow: var(--shadow-hard);
        padding: 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }

      button:hover {
        transform: translate(-2px, -2px);
        box-shadow: var(--shadow-hard-lg);
      }

      button:active {
        transform: translate(0, 0);
        box-shadow: var(--shadow-hard);
      }

      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: var(--text-primary);
      }
    `];vt([B()],R.prototype,"isDark",2);R=vt([k("theme-toggle")],R);var Qt=Object.getOwnPropertyDescriptor,te=(i,t,e,o)=>{for(var r=o>1?void 0:o?Qt(t,e):t,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=a(r)||r);return r};let V=class extends g{render(){return u`
      <header>
        <div class="app-header">
          <theme-toggle></theme-toggle>
        </div>
        <hero-section></hero-section>
      </header>
      <main>
        <content-section></content-section>
        <photo-gallery></photo-gallery>
      </main>
      <footer>
        <footer-section></footer-section>
      </footer>
    `}};V.styles=[S,x`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--bg-page);
        color: var(--text-primary);
        font-family: var(--font-body);
      }
      
      .app-header {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 1000;
      }
    `];V=te([k("milano-app")],V);
