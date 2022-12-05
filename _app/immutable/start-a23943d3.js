import{S as et,i as tt,s as nt,a as rt,e as B,c as at,b as z,g as me,t as F,d as ge,f as J,h as G,j as st,o as Ie,k as ot,l as it,m as lt,n as Se,p as C,q as ct,r as ft,u as ut,v as X,w as Z,x as Ne,y as Q,z as x,A as ue}from"./chunks/index-fd610874.js";import{g as We,f as ze,s as W,a as Le,b as pt,i as ht,c as dt}from"./chunks/singletons-54913f0e.js";function mt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function gt(r){return r.split("%25").map(decodeURI).join("%25")}function _t(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const wt=["href","pathname","search","searchParams","toString","toJSON"];function yt(r,e){const t=new URL(r);for(const s of wt){let o=t[s];Object.defineProperty(t,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return bt(t),t}function bt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const vt="/__data.json";function Et(r){return r.replace(/\/$/,"")+vt}function kt(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;se.delete(s)}return _e(r,e)};const se=new Map;function St(r,e){const t=Qe(r,e),s=document.querySelector(t);if(s!=null&&s.textContent){const{body:o,...c}=JSON.parse(s.textContent),n=s.getAttribute("data-ttl");return n&&se.set(t,{body:o,init:c,ttl:1e3*Number(n)}),Promise.resolve(new Response(o,c))}return _e(r,e)}function Rt(r,e,t){if(se.size>0){const s=Qe(r,t),o=se.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);se.delete(s)}}return _e(e,t)}function Qe(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${kt(e.body)}"]`),s}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(r){const e=[],t=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${Lt(r).map((n,p,w)=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(n);if(d)return e.push(d[1]),t.push(d[2]),s.push(!1),"(?:/(.*))?";const g=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(n);if(g)return e.push(g[1]),t.push(g[2]),s.push(!0),"(?:/([^/]+))?";const b=p===w.length-1;return n?"/"+n.split(/\[(.+?)\](?!\])/).map((j,D)=>{if(D%2){if(j.startsWith("x+"))return Re(String.fromCharCode(parseInt(j.slice(2),16)));if(j.startsWith("u+"))return Re(String.fromCharCode(...j.slice(2).split("-").map(le=>parseInt(le,16))));const P=Ot.exec(j);if(!P)throw new Error(`Invalid param: ${j}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,q,M,ie,ee]=P;return e.push(ie),t.push(ee),s.push(!!q),M?"(.*?)":q?"([^/]*)?":"([^/]+?)"}return b&&j.includes(".")&&(o=!1),Re(j)}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:t,optional:s}}function It(r){return!/^\([^)]+\)$/.test(r)}function Lt(r){return r.slice(1).split("/").filter(It)}function jt(r,{names:e,types:t,optional:s},o){const c={};for(let n=0;n<e.length;n+=1){const p=e[n],w=t[n];let d=r[n+1];if(d||!s[n]){if(w){const g=o[w];if(!g)throw new Error(`Missing "${w}" param matcher`);if(!g(d))return}c[p]=d!=null?d:""}}return c}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function At(r,e,t,s){const o=new Set(e);return Object.entries(t).map(([p,[w,d,g]])=>{const{pattern:b,names:O,types:K,optional:j}=$t(p),D={id:p,exec:P=>{const q=b.exec(P);if(q)return jt(q,{names:O,types:K,optional:j},s)},errors:[1,...g||[]].map(P=>r[P]),layouts:[0,...d||[]].map(n),leaf:c(w)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function c(p){const w=p<0;return w&&(p=~p),[w,r[p]]}function n(p){return p===void 0?p:[o.has(p),r[p]]}}function Pt(r){let e,t,s;var o=r[0][0];function c(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=X(o,c(r))),{c(){e&&Z(e.$$.fragment),t=B()},l(n){e&&Ne(e.$$.fragment,n),t=B()},m(n,p){e&&Q(e,n,p),z(n,t,p),s=!0},p(n,p){const w={};if(p&4&&(w.data=n[2]),p&2&&(w.form=n[1]),o!==(o=n[0][0])){if(e){me();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),ge()}o?(e=X(o,c(n)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&x(e,n)}}}function Nt(r){let e,t,s;var o=r[0][0];function c(n){return{props:{data:n[2],$$slots:{default:[Ut]},$$scope:{ctx:n}}}}return o&&(e=X(o,c(r))),{c(){e&&Z(e.$$.fragment),t=B()},l(n){e&&Ne(e.$$.fragment,n),t=B()},m(n,p){e&&Q(e,n,p),z(n,t,p),s=!0},p(n,p){const w={};if(p&4&&(w.data=n[2]),p&523&&(w.$$scope={dirty:p,ctx:n}),o!==(o=n[0][0])){if(e){me();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),ge()}o?(e=X(o,c(n)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&x(e,n)}}}function Ut(r){let e,t,s;var o=r[0][1];function c(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=X(o,c(r))),{c(){e&&Z(e.$$.fragment),t=B()},l(n){e&&Ne(e.$$.fragment,n),t=B()},m(n,p){e&&Q(e,n,p),z(n,t,p),s=!0},p(n,p){const w={};if(p&8&&(w.data=n[3]),p&2&&(w.form=n[1]),o!==(o=n[0][1])){if(e){me();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),ge()}o?(e=X(o,c(n)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&x(e,n)}}}function Me(r){let e,t=r[5]&&He(r);return{c(){e=ot("div"),t&&t.c(),this.h()},l(s){e=it(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=lt(e);t&&t.l(o),o.forEach(G),this.h()},h(){Se(e,"id","svelte-announcer"),Se(e,"aria-live","assertive"),Se(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,o){z(s,e,o),t&&t.m(e,null)},p(s,o){s[5]?t?t.p(s,o):(t=He(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&G(e),t&&t.d()}}}function He(r){let e;return{c(){e=ct(r[6])},l(t){e=ft(t,r[6])},m(t,s){z(t,e,s)},p(t,s){s&64&&ut(e,t[6])},d(t){t&&G(e)}}}function Tt(r){let e,t,s,o,c;const n=[Nt,Pt],p=[];function w(g,b){return g[0][1]?0:1}e=w(r),t=p[e]=n[e](r);let d=r[4]&&Me(r);return{c(){t.c(),s=rt(),d&&d.c(),o=B()},l(g){t.l(g),s=at(g),d&&d.l(g),o=B()},m(g,b){p[e].m(g,b),z(g,s,b),d&&d.m(g,b),z(g,o,b),c=!0},p(g,[b]){let O=e;e=w(g),e===O?p[e].p(g,b):(me(),F(p[O],1,1,()=>{p[O]=null}),ge(),t=p[e],t?t.p(g,b):(t=p[e]=n[e](g),t.c()),J(t,1),t.m(s.parentNode,s)),g[4]?d?d.p(g,b):(d=Me(g),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null)},i(g){c||(J(t),c=!0)},o(g){F(t),c=!1},d(g){p[e].d(g),g&&G(s),d&&d.d(g),g&&G(o)}}}function Dt(r,e,t){let{stores:s}=e,{page:o}=e,{components:c}=e,{form:n}=e,{data_0:p=null}=e,{data_1:w=null}=e;st(s.page.notify);let d=!1,g=!1,b=null;return Ie(()=>{const O=s.page.subscribe(()=>{d&&(t(5,g=!0),t(6,b=document.title||"untitled page"))});return t(4,d=!0),O}),r.$$set=O=>{"stores"in O&&t(7,s=O.stores),"page"in O&&t(8,o=O.page),"components"in O&&t(0,c=O.components),"form"in O&&t(1,n=O.form),"data_0"in O&&t(2,p=O.data_0),"data_1"in O&&t(3,w=O.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[c,n,p,w,d,g,b,s,o]}class Ct extends et{constructor(e){super(),tt(this,e,Dt,Tt,nt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Vt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),qt=function(r,e){return new URL(r,e).href},Ye={},Y=function(e,t,s){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(c=>{if(c=qt(c,s),c in Ye)return;Ye[c]=!0;const n=c.endsWith(".css"),p=n?'[rel="stylesheet"]':"";if(!!s)for(let g=o.length-1;g>=0;g--){const b=o[g];if(b.href===c&&(!n||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":Vt,n||(d.as="script",d.crossOrigin=""),d.href=c,document.head.appendChild(d),n)return new Promise((g,b)=>{d.addEventListener("load",g),d.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())},Bt={},we=[()=>Y(()=>import("./chunks/0-ff104280.js"),["./chunks/0-ff104280.js","./chunks/_layout-5d13426d.js","./components/pages/_layout.svelte-91ac37b7.js","./chunks/index-fd610874.js"],import.meta.url),()=>Y(()=>import("./chunks/1-a33e4c8c.js"),["./chunks/1-a33e4c8c.js","./components/error.svelte-a2c867fb.js","./chunks/index-fd610874.js","./chunks/singletons-54913f0e.js","./chunks/index-1645db2a.js"],import.meta.url),()=>Y(()=>import("./chunks/2-39db418f.js"),["./chunks/2-39db418f.js","./components/pages/_page.svelte-93d01834.js","./chunks/index-fd610874.js"],import.meta.url),()=>Y(()=>import("./chunks/3-68055490.js"),["./chunks/3-68055490.js","./components/pages/memory/_page.svelte-aa4e1ad5.js","./chunks/index-fd610874.js","./assets/_page-2870e030.css"],import.meta.url),()=>Y(()=>import("./chunks/4-bbf421e6.js"),["./chunks/4-bbf421e6.js","./components/pages/telltale/_page.svelte-472e3dea.js","./chunks/index-fd610874.js","./chunks/index-1645db2a.js","./assets/_page-152f6357.css"],import.meta.url),()=>Y(()=>import("./chunks/5-65ae2eb1.js"),["./chunks/5-65ae2eb1.js","./components/pages/todo/_page.svelte-b4f5017f.js","./chunks/index-fd610874.js","./assets/_page-5e4daed3.css"],import.meta.url)],Ft=[],Jt={"/":[2],"/memory":[3],"/telltale":[4],"/todo":[5]},Gt={handleError:({error:r})=>{console.error(r)}};class je{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,t){this.status=e,this.location=t}}async function Kt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,zt=-2,Mt=-3,Ht=-4,Yt=-5,Xt=-6;function Zt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,t=Array(e.length);function s(o,c=!1){if(o===Wt)return;if(o===Mt)return NaN;if(o===Ht)return 1/0;if(o===Yt)return-1/0;if(o===Xt)return-0;if(c)throw new Error("Invalid input");if(o in t)return t[o];const n=e[o];if(!n||typeof n!="object")t[o]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":t[o]=new Date(n[1]);break;case"Set":const w=new Set;t[o]=w;for(let b=1;b<n.length;b+=1)w.add(s(n[b]));break;case"Map":const d=new Map;t[o]=d;for(let b=1;b<n.length;b+=2)d.set(s(n[b]),s(n[b+1]));break;case"RegExp":t[o]=new RegExp(n[1],n[2]);break;case"Object":t[o]=Object(n[1]);break;case"BigInt":t[o]=BigInt(n[1]);break;case"null":const g=Object.create(null);t[o]=g;for(let b=1;b<n.length;b+=2)g[n[b]]=s(n[b+1]);break}else{const p=new Array(n.length);t[o]=p;for(let w=0;w<n.length;w+=1){const d=n[w];d!==zt&&(p[w]=s(d))}}else{const p={};t[o]=p;for(const w in n){const d=n[w];p[w]=s(d)}}return t[o]}return s(0)}const xe="sveltekit:scroll",V="sveltekit:index",pe=At(we,Ft,Jt,Bt),Ae=we[0],Pe=we[1];Ae();Pe();let oe={};try{oe=JSON.parse(sessionStorage[xe])}catch{}function Oe(r){oe[r]=Le()}function Qt({target:r,base:e}){var Je;const t=[];let s=null;const o={before_navigate:[],after_navigate:[]};let c={branch:[],error:null,url:null},n=!1,p=!1,w=!0,d=!1,g=!1,b=!1,O=!1,K,j=(Je=history.state)==null?void 0:Je[V];j||(j=Date.now(),history.replaceState({...history.state,[V]:j},"",location.href));const D=oe[j];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let P,q,M;async function ie(){M=M||Promise.resolve(),await M,M=null;const a=new URL(location.href),l=ve(a,!0);s=null,await Ue(l,a,[])}async function ee(a,{noScroll:l=!1,replaceState:f=!1,keepFocus:i=!1,state:u={},invalidateAll:h=!1},m,E){return typeof a=="string"&&(a=new URL(a,We(document))),Ee({url:a,scroll:l?Le():null,keepfocus:i,redirect_chain:m,details:{state:u,replaceState:f},nav_token:E,accepted:()=>{h&&(O=!0)},blocked:()=>{},type:"goto"})}async function le(a){const l=ve(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return s={id:l.id,promise:Ce(l).then(f=>(f.type==="loaded"&&f.state.error&&(s=null),f))},s.promise}async function Ue(a,l,f,i,u={},h){var E,k;q=u;let m=a&&await Ce(a);if(m||(m=await Fe(l,{id:null},ae(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,q!==u)return!1;if(m.type==="redirect")if(f.length>10||f.includes(l.pathname))m=await ce({status:500,error:ae(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return ee(new URL(m.location,l).href,{},[...f,l.pathname],u),!1;else((k=(E=m.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await W.updated.check()&&await fe(l);if(t.length=0,O=!1,d=!0,i&&i.details){const{details:y}=i,v=y.replaceState?0:1;y.state[V]=j+=v,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(s=null,p){c=m.state,m.props.page&&(m.props.page.url=l);const y=de();K.$set(m.props),y()}else Te(m);if(i){const{scroll:y,keepfocus:v}=i;if(v||$e(),await ue(),w){const S=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):S?S.scrollIntoView():scrollTo(0,0)}}else await ue();w=!0,m.props.page&&(P=m.props.page),h&&h(),d=!1}function Te(a){var u,h;c=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),P=a.props.page;const f=de();K=new Ct({target:r,props:{...a.props,stores:W},hydrate:!0}),f();const i={from:null,to:he("to",{params:c.params,route:{id:(h=(u=c.route)==null?void 0:u.id)!=null?h:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};o.after_navigate.forEach(m=>m(i)),p=!0}async function te({url:a,params:l,branch:f,status:i,error:u,route:h,form:m}){var N;const E=f.filter(Boolean);let k="never";for(const $ of f)($==null?void 0:$.slash)!==void 0&&(k=$.slash);a.pathname=mt(a.pathname,k),a.search=a.search;const y={type:"loaded",state:{url:a,params:l,branch:f,error:u,route:h},props:{components:E.map($=>$.node.component)}};m!==void 0&&(y.props.form=m);let v={},S=!P;for(let $=0;$<E.length;$+=1){const A=E[$];v={...v,...A.data},(S||!c.branch.some(T=>T===A))&&(y.props[`data_${$}`]=v,S=S||Object.keys((N=A.data)!=null?N:{}).length>0)}if(S||(S=Object.keys(P.data).length!==Object.keys(v).length),!c.url||a.href!==c.url.href||c.error!==u||m!==void 0||S){y.props.page={error:u,params:l,route:h,status:i,url:a,form:m,data:S?v:P.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const $=(A,T)=>{Object.defineProperty(y.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${T}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return y}async function ye({loader:a,parent:l,url:f,params:i,route:u,server_data_node:h}){var y,v,S,U,N,$,A;let m=null;const E={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},k=await a();if((y=k.shared)!=null&&y.load){let T=function(..._){for(const R of _){const{href:I}=new URL(R,f);E.dependencies.add(I)}};const ne={route:{get id(){return E.route=!0,u.id}},params:new Proxy(i,{get:(_,R)=>(E.params.add(R),_[R])}),data:(v=h==null?void 0:h.data)!=null?v:null,url:yt(f,()=>{E.url=!0}),async fetch(_,R){let I;_ instanceof Request?(I=_.url,R={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...R}):I=_;const L=new URL(I,f).href;return T(L),p?Rt(I,L,R):St(I,R)},setHeaders:()=>{},depends:T,parent(){return E.parent=!0,l()}};Object.defineProperties(ne,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=(S=await k.shared.load.call(null,ne))!=null?S:null,m=m?await Kt(m):null}return{node:k,loader:a,server:h,shared:(U=k.shared)!=null&&U.load?{type:"data",data:m,uses:E}:null,data:(N=m!=null?m:h==null?void 0:h.data)!=null?N:null,slash:(A=($=k.shared)==null?void 0:$.trailingSlash)!=null?A:h==null?void 0:h.slash}}function De(a,l,f,i,u){if(O)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&f)return!0;for(const h of i.params)if(u[h]!==c.params[h])return!0;for(const h of i.dependencies)if(t.some(m=>m(new URL(h))))return!0;return!1}function be(a,l){var f,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((f=a.uses.dependencies)!=null?f:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Ce({id:a,invalidating:l,url:f,params:i,route:u}){var ne;if((s==null?void 0:s.id)===a)return s.promise;const{errors:h,layouts:m,leaf:E}=u,k=[...m,E];h.forEach(_=>_==null?void 0:_().catch(()=>{})),k.forEach(_=>_==null?void 0:_[1]().catch(()=>{}));let y=null;const v=c.url?a!==c.url.pathname+c.url.search:!1,S=c.route?a!==c.route.id:!1,U=k.reduce((_,R,I)=>{var re;const L=c.branch[I],H=!!(R!=null&&R[0])&&((L==null?void 0:L.loader)!==R[1]||De(_.some(Boolean),S,v,(re=L.server)==null?void 0:re.uses,i));return _.push(H),_},[]);if(U.some(Boolean)){try{y=await Ze(f,U)}catch(_){return ce({status:500,error:ae(_,{url:f,params:i,route:{id:u.id}}),url:f,route:u})}if(y.type==="redirect")return y}const N=y==null?void 0:y.nodes;let $=!1;const A=k.map(async(_,R)=>{var re;if(!_)return;const I=c.branch[R],L=N==null?void 0:N[R];if((!L||L.type==="skip")&&_[1]===(I==null?void 0:I.loader)&&!De($,S,v,(re=I.shared)==null?void 0:re.uses,i))return I;if($=!0,(L==null?void 0:L.type)==="error")throw L;return ye({loader:_[1],url:f,params:i,route:u,parent:async()=>{var Ke;const Ge={};for(let ke=0;ke<R;ke+=1)Object.assign(Ge,(Ke=await A[ke])==null?void 0:Ke.data);return Ge},server_data_node:be(L===void 0&&_[0]?{type:"skip"}:L!=null?L:null,I==null?void 0:I.server)})});for(const _ of A)_.catch(()=>{});const T=[];for(let _=0;_<k.length;_+=1)if(k[_])try{T.push(await A[_])}catch(R){if(R instanceof Xe)return{type:"redirect",location:R.location};let I=500,L;N!=null&&N.includes(R)?(I=(ne=R.status)!=null?ne:I,L=R.error):R instanceof je?(I=R.status,L=R.body):L=ae(R,{params:i,url:f,route:{id:u.id}});const H=await Ve(_,T,h);return H?await te({url:f,params:i,branch:T.slice(0,H.idx).concat(H.node),status:I,error:L,route:u}):await Fe(f,{id:u.id},L,I)}else T.push(void 0);return await te({url:f,params:i,branch:T,status:200,error:null,route:u,form:l?void 0:null})}async function Ve(a,l,f){for(;a--;)if(f[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await f[a](),loader:f[a],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:a,error:l,url:f,route:i}){var y;const u={},h=await Ae();let m=null;if(h.server)try{const v=await Ze(f,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;m=(y=v.nodes[0])!=null?y:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||n)&&await fe(f)}const E=await ye({loader:Ae,url:f,params:u,route:i,parent:()=>Promise.resolve({}),server_data_node:be(m)}),k={node:await Pe(),loader:Pe,shared:null,server:null,data:null};return await te({url:f,params:u,branch:[E,k],status:a,error:l,route:null})}function ve(a,l){if(qe(a))return;const f=gt(a.pathname.slice(e.length)||"/");for(const i of pe){const u=i.exec(f);if(u)return{id:a.pathname+a.search,invalidating:l,route:i,params:_t(u),url:a}}}function qe(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Be({url:a,type:l,intent:f,delta:i}){var E,k,y,v,S;let u=!1;const h={from:he("from",{params:c.params,route:{id:(k=(E=c.route)==null?void 0:E.id)!=null?k:null},url:c.url}),to:he("to",{params:(y=f==null?void 0:f.params)!=null?y:null,route:{id:(S=(v=f==null?void 0:f.route)==null?void 0:v.id)!=null?S:null},url:a}),willUnload:!f,type:l};i!==void 0&&(h.delta=i);const m={...h,cancel:()=>{u=!0}};return g||o.before_navigate.forEach(U=>U(m)),u?null:h}async function Ee({url:a,scroll:l,keepfocus:f,redirect_chain:i,details:u,type:h,delta:m,nav_token:E,accepted:k,blocked:y}){const v=ve(a,!1),S=Be({url:a,type:h,delta:m,intent:v});if(!S){y();return}Oe(j),k(),g=!0,p&&W.navigating.set(S),await Ue(v,a,i,{scroll:l,keepfocus:f,details:u},E,()=>{g=!1,o.after_navigate.forEach(U=>U(S)),W.navigating.set(null)})}async function Fe(a,l,f,i){return a.origin===location.origin&&a.pathname===location.pathname&&!n?await ce({status:i,error:f,url:a,route:l}):await fe(a)}function fe(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Ie(()=>(o.after_navigate.push(a),()=>{const l=o.after_navigate.indexOf(a);o.after_navigate.splice(l,1)}))},before_navigate:a=>{Ie(()=>(o.before_navigate.push(a),()=>{const l=o.before_navigate.indexOf(a);o.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(d||!p)&&(w=!1)},goto:(a,l={})=>{if("keepfocus"in l&&!("keepFocus"in l))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l&&!("noScroll"in l))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ee(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:l}=new URL(a,location.href);t.push(f=>f.href===l)}return ie()},invalidateAll:()=>(O=!0,ie()),prefetch:async a=>{const l=new URL(a,We(document));await le(l)},prefetch_routes:async a=>{const f=(a?pe.filter(i=>a.some(u=>i.exec(u))):pe).map(i=>Promise.all([...i.layouts,i.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(f)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:f,route:i}=c;if(!i)return;const u=await Ve(c.branch.length,f,i.errors);if(u){const h=await te({url:l,params:c.params,branch:f.slice(0,u.idx).concat(u.node),status:500,error:a.error,route:i});c=h.state;const m=de();K.$set(h.props),m(),ue().then($e)}}else if(a.type==="redirect")ee(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...P,form:a.data,status:a.status}},f=de();K.$set(l),f(),a.type==="success"&&ue().then($e)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var h,m;let u=!1;if(!g){const E={from:he("from",{params:c.params,route:{id:(m=(h=c.route)==null?void 0:h.id)!=null?m:null},url:c.url}),to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};o.before_navigate.forEach(k=>k(E))}u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(j);try{sessionStorage[xe]=JSON.stringify(oe)}catch{}}});const a=i=>{const{url:u,options:h,has:m}=ze(i);if(u&&h.prefetch&&!qe(u)){if(h.reload||m.rel_external||m.target||m.download)return;le(u)}};let l;const f=i=>{clearTimeout(l),l=setTimeout(()=>{var u;(u=i.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:u,url:h,options:m,has:E}=ze(i);if(!u||!h||!(u instanceof SVGAElement)&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:")||E.download)return;if(m.reload||E.rel_external||E.target){Be({url:h,type:"link"})||i.preventDefault(),g=!0;return}const[y,v]=h.href.split("#");if(v!==void 0&&y===location.href.split("#")[0]){b=!0,Oe(j),c.url=h,W.page.set({...P,url:h}),W.page.notify();return}Ee({url:h,scroll:m.noscroll?Le():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{var u;if((u=i.state)!=null&&u[V]){if(i.state[V]===j)return;const h=i.state[V]-j;Ee({url:new URL(location.href),scroll:oe[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=i.state[V]},blocked:()=>{history.go(-h)},type:"popstate",delta:h})}}),addEventListener("hashchange",()=>{b&&(b=!1,history.replaceState({...history.state,[V]:++j},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&W.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:f,params:i,route:u,data:h,form:m})=>{var y;n=!0;const E=new URL(location.href);let k;try{const v=f.map(async(S,U)=>{const N=h[U];return ye({loader:we[S],url:E,params:i,route:u,parent:async()=>{const $={};for(let A=0;A<U;A+=1)Object.assign($,(await v[A]).data);return $},server_data_node:be(N)})});k=await te({url:E,params:i,branch:await Promise.all(v),status:a,error:l,form:m,route:(y=pe.find(({id:S})=>S===u.id))!=null?y:null})}catch(v){if(v instanceof Xe){await fe(new URL(v.location,location.href));return}k=await ce({status:v instanceof je?v.status:500,error:ae(v,{url:E,params:i,route:u}),url:E,route:u})}Te(k)}}}async function Ze(r,e){var c;const t=new URL(r);t.pathname=Et(r.pathname);const s=await _e(t.href,{headers:{"x-sveltekit-invalidated":e.map(n=>n?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(c=o.nodes)==null||c.forEach(n=>{var p,w;(n==null?void 0:n.type)==="data"&&(n.data=Zt(n.data),n.uses={dependencies:new Set((p=n.uses.dependencies)!=null?p:[]),params:new Set((w=n.uses.params)!=null?w:[]),parent:!!n.uses.parent,route:!!n.uses.route,url:!!n.uses.url})}),o}function ae(r,e){var t;return r instanceof je?r.body:(t=Gt.handleError({error:r,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function he(r,e){for(const t of xt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function de(){return()=>{}}function $e(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function nn({env:r,hydrate:e,paths:t,target:s,version:o}){pt(t),dt(o);const c=Qt({target:s,base:t.base});ht({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{nn as start};
