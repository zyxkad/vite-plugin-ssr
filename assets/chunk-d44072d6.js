function T(e,t){let n;{var r=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=r}return n.stack=re(n.stack,t),n}function re(e,t){if(!e)return e;const n=oe(e);let r=0;return n.filter(o=>o.includes(" (internal/")||o.includes(" (node:internal")?!1:r<t&&ie(o)?(r++,!1):!0).join(`
`)}function ie(e){return e.startsWith("    at ")}function oe(e){return e.split(/\r?\n/)}function W(e,t){const n=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return n[e]=n[e]||t}function G(e){return Array.from(new Set(e))}const b=W("assertPackageInstances.ts",{instances:[]});function ae(){const e=G(b.instances);if(e.length>1)throw new Error(`Multiple versions \`vite-plugin-ssr@${e[0]}\` and \`vite-plugin-ssr@${e[1]}\` loaded. Make sure only one version is loaded.`)}function M(){if(!!b.checkBundle&&!(b.instances.length<=1))throw new Error("vite-plugin-ssr is included twice in your bundle. Make sure it's inlcuded only once. (To reduce bundle size.)")}function rt(){b.checkBundle=!0,M()}function le(e){b.instances.push(e),ae(),M()}const ce="0.4.80",_={projectName:"vite-plugin-ssr",projectVersion:ce,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"};le(_.projectVersion);const v=W("assert.ts",{alreadyLogged:new Set}),j=`[${_.npmPackageName}@${_.projectVersion}]`,ue=`${j}[Bug]`,fe=`${j}[Wrong Usage]`,de=`${j}[Warning]`,ge=`${j}[Info]`,N=2;function i(e,t){var n;if(e)return;const r=(()=>{if(!t)return null;const o=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${_.projectName} maintainers; you can ignore this): ${o}`})(),s=T([`${ue} You stumbled upon a bug in ${_.projectName}'s source code.`,`Reach out at ${_.githubRepository}/issues/new or ${_.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Don't hesitate to reach out as it makes ${_.projectName} more robust.`,r].filter(Boolean).join(" "),N);throw(n=v.onBeforeLog)===null||n===void 0||n.call(v),s}function E(e,t){var n;if(e)return;const r=t.startsWith("[")?"":" ",s=`${fe}${r}${t}`,o=T(s,N);throw(n=v.onBeforeLog)===null||n===void 0||n.call(v),o}function it(e){const t=e.startsWith("[")?"":" ";return T(`${j}${t}${e}`,N)}function he(e,t,{onlyOnce:n,showStackTrace:r}){var s;if(e)return;const o=`${de} ${t}`;if(n){const{alreadyLogged:a}=v,l=n===!0?o:n;if(a.has(l))return;a.add(l)}(s=v.onBeforeLog)===null||s===void 0||s.call(v),console.warn(r?new Error(o):o)}function ot(e,t,{onlyOnce:n}){var r;if(e)return;const s=`${ge} ${t}`;if(n){const{alreadyLogged:o}=v,a=s;if(o.has(a))return;o.add(a)}(r=v.onBeforeLog)===null||r===void 0||r.call(v),console.log(s)}const pe=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],Y=["vue","svelte","marko","md","mdx"],me=[...pe,...Y];function J(e){const t=me.some(n=>e.endsWith("."+n));return i(!ve(e)||t),t}function ve(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Ee(e){return Y.some(t=>e.endsWith("."+t))}function S(e,t,n){return typeof e=="string"?C(e.split(""),t,n).join(""):C(e,t,n)}function C(e,t,n){const r=[];let s=t>=0?t:e.length+t;i(s>=0&&s<=e.length);let o=n>=0?n:e.length+n;for(i(o>=0&&o<=e.length);!(s===o||(s===e.length&&(s=0),s===o));){const a=e[s];i(a!==void 0),r.push(a),s++}return r}function _e(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function ye(e,t){i(_e(e),{url:e}),i(t.startsWith("/"),{url:e,baseServer:t});const[n,...r]=e.split("#");i(n!==void 0);const s=["",...r].join("#")||null;i(s===null||s.startsWith("#"));const o=s===null?"":x(s.slice(1)),[a,...l]=n.split("?");i(a!==void 0);const c=["",...l].join("?")||null;i(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const u={},h={};Array.from(new URLSearchParams(c||"")).forEach(([m,k])=>{u[m]=k,h[m]=[...h[m]||[],k]});const{origin:f,pathnameResolved:L}=Re(a,t);i(f===null||f===x(f),{origin:f}),i(L.startsWith("/"),{url:e,pathnameResolved:L}),i(f===null||e.startsWith(f),{url:e,origin:f});const d=a.slice((f||"").length);{const m=`${f||""}${d}${c||""}${s||""}`;i(e===m,{url:e,urlRecreated:m})}let{pathname:p,hasBaseServer:R}=$e(L,t);return p=we(p),i(p.startsWith("/")),{origin:f,pathname:p,pathnameOriginal:d,hasBaseServer:R,search:u,searchAll:h,searchOriginal:c,hash:o,hashOriginal:s}}function x(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function we(e){return e.split("/").map(t=>x(t).split("/").join("%2F")).join("/")}function Re(e,t){var n;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let r,s;try{const o=new URL(e);r=o.origin,s=o.pathname}catch{r=null;let a=typeof window<"u"&&((n=window==null?void 0:window.document)===null||n===void 0?void 0:n.baseURI);a=a||"http://fake.example.org"+t,s=new URL(e,a).pathname}return i(s.startsWith("/"),{urlWithoutSearch:e,pathnameResolved:s}),i(s===s.split("?")[0].split("#")[0]),{origin:r,pathnameResolved:s}}function be(e){i(e.startsWith("/")),i(!e.includes("?")),i(!e.includes("#"))}function $e(e,t){be(e),i(je(t));let n=e;if(i(n.startsWith("/")),i(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let r=t;return t.endsWith("/")&&n===S(t,0,-1)&&(r=S(t,0,-1),i(n===r)),n.startsWith(r)?(i(n.startsWith("/")||n.startsWith("http")),i(n.startsWith(r)),n=n.slice(r.length),n.startsWith("/")||(n="/"+n),i(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function je(e){return e.startsWith("/")}function H(e,t){Object.assign(e,t)}function O(e){return e instanceof Function||typeof e=="function"}function $(e){return typeof e=="object"&&e!==null}function at(e){return(t,n)=>{const r=e(t),s=e(n);return r===s?0:r>s?-1:1}}function Le(e){return(t,n)=>{const r=e(t),s=e(n);if(i([!0,!1,null].includes(r)),i([!0,!1,null].includes(s)),r===s)return 0;if(r===!0||s===!1)return-1;if(s===!0||r===!1)return 1;i(!1)}}function Pe(e){return Le(t=>{const n=e(t);return n===null?null:!n})}function Se(){return typeof window<"u"&&typeof window.scrollY=="number"}function g(e,t,n="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return n==="undefined";if(n==="unknown")return!0;const s=e[t];return n==="array"?Array.isArray(s):n==="string[]"?Array.isArray(s)&&s.every(o=>typeof o=="string"):n==="function"?O(s):Array.isArray(n)?typeof s=="string"&&n.includes(s):n==="null"?s===null:n==="undefined"?s===void 0:n==="true"?s===!0:n==="false"?s===!1:typeof s===n}function Ie(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const xe=e=>e!=null,Fe="\\";function q(e){i(e&&!e.includes(Fe),`Wrongly formatted path: ${e}`)}const z=/[^a-zA-Z-_]/;function K(e){return Te(e)!==null}function Te(e){if(e===void 0||e.includes("\\")||e.startsWith("/"))return null;let t=null;if(e.startsWith("@")){if(!e.includes("/"))return null;const[l,...c]=e.split("/");t=l,e=c.join("/"),i(t&&t.startsWith("@"))}if(e==="")return null;const[n,...r]=e.split("/"),s=n,o=r.length===0?null:r.join("/");return i(s),z.test(s)||t&&z.test(t.slice(1))?null:{npmPackageName:t?`${t}/${s}`:s,modulePath:o}}const We=["clientRouting"];function Ne(e){We.forEach(t=>{if(i(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;E(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is forbidden: remove \`export { ${t} }\` instead. (${n})`),E(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const Q=["render","clientRouting","prerender","doNotPrerender"];function Oe(e,t){E(!Q.includes(e),`${t} has \`export default { ${e} }\` which is forbidden, use \`export { ${e} }\` instead.`)}function Ae(e){const t={};e.forEach(s=>{ke(s).forEach(({exportName:a,exportValue:l,isFromDefaultExport:c})=>{var u;i(a!=="default"),t[a]=(u=t[a])!==null&&u!==void 0?u:[],t[a].push({exportValue:l,filePath:s.filePath,_filePath:s.filePath,_fileType:s.fileType,_isFromDefaultExport:c})})});const n=Ce(),r={};return Object.entries(t).forEach(([s,o])=>{o.forEach(({exportValue:a,_fileType:l,_isFromDefaultExport:c})=>{var u;r[s]=(u=r[s])!==null&&u!==void 0?u:a,l===".page"&&!c&&(s in n||(n[s]=a))})}),i(!("default"in r)),i(!("default"in t)),{exports:r,exportsAll:t,pageExports:n}}function ke(e){const{filePath:t,fileExports:n}=e;i(n),i(J(t));const r=[];return Object.entries(n).sort(Pe(([s])=>s==="default")).forEach(([s,o])=>{let a=s==="default";if(a)if(Ee(t))s="Page";else{E($(o),`The \`export default\` of ${t} should be an object.`),Object.entries(o).forEach(([l,c])=>{Oe(l,t),r.push({exportName:l,exportValue:c,isFromDefaultExport:a})});return}r.push({exportName:s,exportValue:o,isFromDefaultExport:a})}),r.forEach(({exportName:s,isFromDefaultExport:o})=>{i(!(o&&Q.includes(s)))}),r}function Ce(){return new Proxy({},{get(...e){return Se()||he(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function Z(e){const t=".page.",n=S(e.split(t),0,-1).join(t);return i(!n.includes("\\")),n}function w(e){q(e),i(e.startsWith("/")||K(e),{filePath:e})}function lt(e){const t=e.filter(n=>A(n));if(E(t.length<=1,`Only one \`_error.page.js\` is allowed. Found several: ${t.join(" ")}`),t.length>0){const n=t[0];return i(n),n}return null}function A(e){return i(!e.includes("\\")),e.includes("/_error")}const ze=[".page",".page.server",".page.route",".page.client",".css"];function De(e){if(q(e),e.endsWith(".css"))return i(K(e),e),".css";i(J(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],s=n.slice(-2)[0];if(s==="page")return".page";if(i(r==="page",e),s==="server")return".page.server";if(s==="client")return".page.client";if(s==="route")return".page.route";i(!1,e)}function X(e){const t=o=>s.pageId===o||s.isDefaultPageFile&&(D(s.filePath)||Be(o,s.filePath)),n=De(e),s={filePath:e,fileType:n,isEnv:o=>{if(i(n!==".page.route"),o==="CLIENT_ONLY")return n===".page.client"||n===".css";if(o==="SERVER_ONLY")return n===".page.server";if(o==="CLIENT_AND_SERVER")return n===".page";i(!1)},isRelevant:t,isDefaultPageFile:F(e),isRendererPageFile:n!==".css"&&F(e)&&D(e),isErrorPageFile:A(e),pageId:Z(e)};return s}function F(e){return w(e),A(e)?!1:e.includes("/_default")}function D(e){return w(e),e.includes("/renderer/")}function Be(e,t){w(e),w(t),i(!e.endsWith("/")),i(!t.endsWith("/")),i(F(t));const n=S(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function Ve(e){i(g(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),i(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),i(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),i(g(e,"pageFilesLazy","object")),i(g(e,"pageFilesEager","object")),i(g(e,"pageFilesExportNamesLazy","object")),i(g(e,"pageFilesExportNamesEager","object")),i(g(e.pageFilesLazy,".page")),i(g(e.pageFilesLazy,".page.client")||g(e.pageFilesLazy,".page.server")),i(g(e,"pageFilesList","string[]"));const t={};P(e.pageFilesLazy).forEach(({filePath:r,pageFile:s,globValue:o})=>{var a;s=t[r]=(a=t[r])!==null&&a!==void 0?a:s;const l=o;B(l),s.loadFile=async()=>{"fileExports"in s||(s.fileExports=await l(),Ne(s))}}),P(e.pageFilesExportNamesLazy).forEach(({filePath:r,pageFile:s,globValue:o})=>{var a;s=t[r]=(a=t[r])!==null&&a!==void 0?a:s;const l=o;B(l),s.loadExportNames=async()=>{if(!("exportNames"in s)){const c=await l();E("exportNames"in c,"You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"),i(g(c,"exportNames","string[]"),s.filePath),s.exportNames=c.exportNames}}}),P(e.pageFilesEager).forEach(({filePath:r,pageFile:s,globValue:o})=>{var a;s=t[r]=(a=t[r])!==null&&a!==void 0?a:s;const l=o;i($(l)),s.fileExports=l}),P(e.pageFilesExportNamesEager).forEach(({filePath:r,pageFile:s,globValue:o})=>{var a;s=t[r]=(a=t[r])!==null&&a!==void 0?a:s;const l=o;i($(l)),i(g(l,"exportNames","string[]"),s.filePath),s.exportNames=l.exportNames}),e.pageFilesList.forEach(r=>{var s;t[r]=(s=t[r])!==null&&s!==void 0?s:X(r)});const n=Object.values(t);return n.forEach(({filePath:r})=>{i(!r.includes("\\"))}),n}function P(e){const t=[];return Object.entries(e).forEach(([n,r])=>{i(ze.includes(n)),i($(r)),Object.entries(r).forEach(([s,o])=>{const a=X(s);i(a.fileType===n),t.push({filePath:s,pageFile:a,globValue:o})})}),t}function B(e){i(O(e))}const y=globalThis.__vite_plugin_ssr__pageFiles=globalThis.__vite_plugin_ssr__pageFiles||{pageFilesAll:void 0,pageFilesGetter:void 0};function ct(e){y.pageFilesAll=Ve(e)}async function ut(e,t){e?(i(!y.pageFilesGetter),i(t===void 0)):(i(y.pageFilesGetter),i(typeof t=="boolean"),(!y.pageFilesAll||!t)&&await y.pageFilesGetter()),i(y.pageFilesAll);const n=y.pageFilesAll,r=Ue(n);return{pageFilesAll:n,allPageIds:r}}function Ue(e){const t=e.filter(({isDefaultPageFile:r})=>!r).map(({filePath:r})=>r).map(Z);return G(t)}function Ge(e,t){return ee(e,t,!0)}function ft(e,t){return ee(e,t,!1)}function ee(e,t,n){const r=n?"CLIENT_ONLY":"SERVER_ONLY",s=e.filter(d=>d.isRelevant(t)&&d.fileType!==".page.route").sort(Me(n,t)),o=d=>{const p=s.filter(m=>m.pageId===t&&m.isEnv(d?"CLIENT_AND_SERVER":r));E(p.length<=1,`Merge the following files into a single file: ${p.map(m=>m.filePath).join(" ")}`);const R=p[0];return i(R===void 0||!R.isDefaultPageFile),R},a=o(!1),l=o(!0),c=d=>s.filter(p=>p.isRendererPageFile&&p.isEnv(d?"CLIENT_AND_SERVER":r))[0],u=c(!1),h=c(!0),f=s.filter(d=>d.isDefaultPageFile&&!d.isRendererPageFile&&(d.isEnv(r)||d.isEnv("CLIENT_AND_SERVER")));return[a,l,...f,u,h].filter(xe)}function Me(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",r=-1,s=1,o=0;return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return r;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return s;{const c=a.isRendererPageFile,u=l.isRendererPageFile;if(!c&&u)return r;if(!u&&c)return s;i(c===u)}{const c=V(t,a.filePath),u=V(t,l.filePath);if(c<u)return r;if(u<c)return s;i(c===u)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return r;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return s}return o}}function V(e,t){w(e),w(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),s=t.slice(n),o=r.split("/").length,a=s.split("/").length;return o+a}const Ye="modulepreload",Je=function(e){return"/"+e},U={},dt=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Je(o),o in U)return;U[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let h=s.length-1;h>=0;h--){const f=s[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Ye,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function gt(e){const t=window.location.href,{origin:n,searchOriginal:r,hashOriginal:s,pathnameOriginal:o}=ye(t,"/");let a;if(e!=null&&e.withoutHash){a=`${o}${r||""}`;const l=`${n||""}${a}${s||""}`;i(t===l,{url:t,urlRecreated:l})}else{a=`${o}${r||""}${s||""}`;const l=`${n||""}${a}`;i(t===l,{url:t,urlRecreated:l})}return a}const He=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function te(e){const t=JSON.parse(e);return ne(t)}function ne(e){return typeof e=="string"?qe(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=ne(n)}),e)}function qe(e){for(const{match:t,deserialize:n}of He)if(t(e))return n(e,te);return e}function ht(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;i(t);const n=te(t);i(g(n,"pageContext","object"));const{pageContext:r}=n;return i(g(r,"_pageId","string")),H(r,{_pageContextRetrievedFromServer:{...r},_comesDirectlyFromServer:!0}),r}function Ke(e,t){if(!(t in e.exports))return null;const n=e.exports[t],r=e.exportsAll[t][0];i(r.exportValue===n);const{filePath:s}=r;return i(s),i(!t.endsWith(")")),E(O(n),`\`export { ${t} }\` of ${s} should be a function`),{hook:n,filePath:s}}function Qe(e,t){Ke(e,t)}function Ze(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[r])=>Ie(n,r)).forEach(([n,r])=>{e[n]=r})}const I=W("releasePageContextCommon.ts",{});function pt(e){i("exports"in e),i("exportsAll"in e),i("pageExports"in e),i($(e.pageExports));const t=e.exports.Page;return H(e,{Page:t}),st(e),Ze(e),i([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?tt(e):e}const Xe=["then","toJSON"],et=["_pageId"];function tt(e){return new Proxy(e,{get:n});function t(r){return!(r in e||Xe.includes(r)||typeof r=="symbol"||typeof r!="string"||r.startsWith("__v_"))}function n(r,s){return I.disableAssertPassToClient!==s&&nt(e._pageContextRetrievedFromServer,s,t(s)),I.disableAssertPassToClient=s,window.setTimeout(()=>{I.disableAssertPassToClient=void 0},0),e[s]}}function nt(e,t,n){if(!n||e===null)return;const r=Object.keys(e).filter(s=>!et.includes(s));E(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${r.map(s=>`'${s}'`).join(", ")}]\`.)`,"See https://vite-plugin-ssr.com/passToClient"].join(" "))}function st(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}const se="__whileFetchingAssets";async function mt(e,t){const n=Ge(e,t);try{await Promise.all(n.map(l=>{var c;return(c=l.loadFile)===null||c===void 0?void 0:c.call(l)}))}catch(l){throw l&&Object.assign(l,{[se]:!0}),l}const{exports:r,exportsAll:s,pageExports:o}=Ae(n);return{exports:r,exportsAll:s,pageExports:o,_pageFilesLoaded:n}}function vt(e){return e?e[se]===!0:!1}function Et(e){var t;if(g(e.exports,"render"))Qe(e,"render");else{const n=e._pageFilesLoaded.filter(s=>s.fileType===".page.client");let r;n.length===0?r="No file `*.page.client.*` found for URL "+((t=e.urlOriginal)!==null&&t!==void 0?t:window.location.href):r="One of the following files should export a `render()` hook: "+n.map(s=>s.filePath).join(" "),E(!1,r)}}export{je as A,Ge as B,_e as C,ot as D,vt as E,Qe as F,Et as G,rt as H,dt as _,i as a,A as b,E as c,g as d,he as e,K as f,$ as g,at as h,O as i,ct as j,j as k,it as l,Le as m,W as n,H as o,ye as p,gt as q,ft as r,S as s,pt as t,ht as u,mt as v,lt as w,Ke as x,te as y,ut as z};