(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function TS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fx={exports:{}},$c={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AS=Symbol.for("react.transitional.element"),RS=Symbol.for("react.fragment");function Bx(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:AS,type:e,key:i,ref:t!==void 0?t:null,props:n}}$c.Fragment=RS;$c.jsx=Bx;$c.jsxs=Bx;Fx.exports=$c;var J=Fx.exports,Ix={exports:{}},tu={},Hx={exports:{}},Gx={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,H){var F=N.length;N.push(H);t:for(;0<F;){var q=F-1>>>1,tt=N[q];if(0<a(tt,H))N[q]=H,N[F]=tt,F=q;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var H=N[0],F=N.pop();if(F!==H){N[0]=F;t:for(var q=0,tt=N.length,st=tt>>>1;q<st;){var at=2*(q+1)-1,mt=N[at],_t=at+1,Bt=N[_t];if(0>a(mt,F))_t<tt&&0>a(Bt,mt)?(N[q]=Bt,N[_t]=F,q=_t):(N[q]=mt,N[at]=F,q=at);else if(_t<tt&&0>a(Bt,F))N[q]=Bt,N[_t]=F,q=_t;else break t}}return H}function a(N,H){var F=N.sortIndex-H.sortIndex;return F!==0?F:N.id-H.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],f=1,d=null,h=3,p=!1,g=!1,v=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function y(N){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=N)i(c),H.sortIndex=H.expirationTime,t(l,H);else break;H=n(c)}}function C(N){if(v=!1,y(N),!g)if(n(l)!==null)g=!0,T||(T=!0,I());else{var H=n(c);H!==null&&Y(C,H.startTime-N)}}var T=!1,R=-1,L=5,E=-1;function M(){return m?!0:!(e.unstable_now()-E<L)}function D(){if(m=!1,T){var N=e.unstable_now();E=N;var H=!0;try{t:{g=!1,v&&(v=!1,x(R),R=-1),p=!0;var F=h;try{e:{for(y(N),d=n(l);d!==null&&!(d.expirationTime>N&&M());){var q=d.callback;if(typeof q=="function"){d.callback=null,h=d.priorityLevel;var tt=q(d.expirationTime<=N);if(N=e.unstable_now(),typeof tt=="function"){d.callback=tt,y(N),H=!0;break e}d===n(l)&&i(l),y(N)}else i(l);d=n(l)}if(d!==null)H=!0;else{var st=n(c);st!==null&&Y(C,st.startTime-N),H=!1}}break t}finally{d=null,h=F,p=!1}H=void 0}}finally{H?I():T=!1}}}var I;if(typeof _=="function")I=function(){_(D)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Z=k.port2;k.port1.onmessage=D,I=function(){Z.postMessage(null)}}else I=function(){u(D,0)};function Y(N,H){R=u(function(){N(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var F=h;h=H;try{return N()}finally{h=F}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=h;h=N;try{return H()}finally{h=F}},e.unstable_scheduleCallback=function(N,H,F){var q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?q+F:q):F=q,N){case 1:var tt=-1;break;case 2:tt=250;break;case 5:tt=1073741823;break;case 4:tt=1e4;break;default:tt=5e3}return tt=F+tt,N={id:f++,callback:H,priorityLevel:N,startTime:F,expirationTime:tt,sortIndex:-1},F>q?(N.sortIndex=F,t(c,N),n(l)===null&&N===n(c)&&(v?(x(R),R=-1):v=!0,Y(C,F-q))):(N.sortIndex=tt,t(l,N),g||p||(g=!0,T||(T=!0,I()))),N},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(N){var H=h;return function(){var F=h;h=H;try{return N.apply(this,arguments)}finally{h=F}}}})(Gx);Hx.exports=Gx;var CS=Hx.exports,Vx={exports:{}},Gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=Symbol.for("react.transitional.element"),wS=Symbol.for("react.portal"),DS=Symbol.for("react.fragment"),US=Symbol.for("react.strict_mode"),LS=Symbol.for("react.profiler"),NS=Symbol.for("react.consumer"),OS=Symbol.for("react.context"),PS=Symbol.for("react.forward_ref"),zS=Symbol.for("react.suspense"),FS=Symbol.for("react.memo"),kx=Symbol.for("react.lazy"),BS=Symbol.for("react.activity"),jp=Symbol.iterator;function IS(e){return e===null||typeof e!="object"?null:(e=jp&&e[jp]||e["@@iterator"],typeof e=="function"?e:null)}var Xx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wx=Object.assign,Yx={};function Lr(e,t,n){this.props=e,this.context=t,this.refs=Yx,this.updater=n||Xx}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qx(){}qx.prototype=Lr.prototype;function Cd(e,t,n){this.props=e,this.context=t,this.refs=Yx,this.updater=n||Xx}var wd=Cd.prototype=new qx;wd.constructor=Cd;Wx(wd,Lr.prototype);wd.isPureReactComponent=!0;var Zp=Array.isArray;function Vf(){}var Me={H:null,A:null,T:null,S:null},jx=Object.prototype.hasOwnProperty;function Dd(e,t,n){var i=n.ref;return{$$typeof:Rd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function HS(e,t){return Dd(e.type,t,e.props)}function Ud(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rd}function GS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Kp=/\/+/g;function Ru(e,t){return typeof e=="object"&&e!==null&&e.key!=null?GS(""+e.key):t.toString(36)}function VS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Vf,Vf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Vs(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Rd:case wS:r=!0;break;case kx:return r=e._init,Vs(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Ru(e,0):i,Zp(a)?(n="",r!=null&&(n=r.replace(Kp,"$&/")+"/"),Vs(a,t,n,"",function(c){return c})):a!=null&&(Ud(a)&&(a=HS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Kp,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(Zp(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Ru(i,l),r+=Vs(i,t,n,s,a);else if(l=IS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Ru(i,l++),r+=Vs(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return Vs(VS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function hl(e,t,n){if(e==null)return e;var i=[],a=0;return Vs(e,i,"","",function(s){return t.call(n,s,a++)}),i}function kS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},XS={map:hl,forEach:function(e,t,n){hl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hl(e,function(){t++}),t},toArray:function(e){return hl(e,function(t){return t})||[]},only:function(e){if(!Ud(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Gt.Activity=BS;Gt.Children=XS;Gt.Component=Lr;Gt.Fragment=DS;Gt.Profiler=LS;Gt.PureComponent=Cd;Gt.StrictMode=US;Gt.Suspense=zS;Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;Gt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Me.H.useMemoCache(e)}};Gt.cache=function(e){return function(){return e.apply(null,arguments)}};Gt.cacheSignal=function(){return null};Gt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Wx({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!jx.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Dd(e.type,a,i)};Gt.createContext=function(e){return e={$$typeof:OS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:NS,_context:e},e};Gt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)jx.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Dd(e,s,a)};Gt.createRef=function(){return{current:null}};Gt.forwardRef=function(e){return{$$typeof:PS,render:e}};Gt.isValidElement=Ud;Gt.lazy=function(e){return{$$typeof:kx,_payload:{_status:-1,_result:e},_init:kS}};Gt.memo=function(e,t){return{$$typeof:FS,type:e,compare:t===void 0?null:t}};Gt.startTransition=function(e){var t=Me.T,n={};Me.T=n;try{var i=e(),a=Me.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Vf,Qp)}catch(s){Qp(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Me.T=t}};Gt.unstable_useCacheRefresh=function(){return Me.H.useCacheRefresh()};Gt.use=function(e){return Me.H.use(e)};Gt.useActionState=function(e,t,n){return Me.H.useActionState(e,t,n)};Gt.useCallback=function(e,t){return Me.H.useCallback(e,t)};Gt.useContext=function(e){return Me.H.useContext(e)};Gt.useDebugValue=function(){};Gt.useDeferredValue=function(e,t){return Me.H.useDeferredValue(e,t)};Gt.useEffect=function(e,t){return Me.H.useEffect(e,t)};Gt.useEffectEvent=function(e){return Me.H.useEffectEvent(e)};Gt.useId=function(){return Me.H.useId()};Gt.useImperativeHandle=function(e,t,n){return Me.H.useImperativeHandle(e,t,n)};Gt.useInsertionEffect=function(e,t){return Me.H.useInsertionEffect(e,t)};Gt.useLayoutEffect=function(e,t){return Me.H.useLayoutEffect(e,t)};Gt.useMemo=function(e,t){return Me.H.useMemo(e,t)};Gt.useOptimistic=function(e,t){return Me.H.useOptimistic(e,t)};Gt.useReducer=function(e,t,n){return Me.H.useReducer(e,t,n)};Gt.useRef=function(e){return Me.H.useRef(e)};Gt.useState=function(e){return Me.H.useState(e)};Gt.useSyncExternalStore=function(e,t,n){return Me.H.useSyncExternalStore(e,t,n)};Gt.useTransition=function(){return Me.H.useTransition()};Gt.version="19.2.1";Vx.exports=Gt;var Mt=Vx.exports;const Jl=TS(Mt);var Zx={exports:{}},pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WS=Mt;function Kx(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function sa(){}var fn={d:{f:sa,r:function(){throw Error(Kx(522))},D:sa,C:sa,L:sa,m:sa,X:sa,S:sa,M:sa},p:0,findDOMNode:null},YS=Symbol.for("react.portal");function qS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:YS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var co=WS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function eu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fn;pn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Kx(299));return qS(e,t,null,n)};pn.flushSync=function(e){var t=co.T,n=fn.p;try{if(co.T=null,fn.p=2,e)return e()}finally{co.T=t,fn.p=n,fn.d.f()}};pn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,fn.d.C(e,t))};pn.prefetchDNS=function(e){typeof e=="string"&&fn.d.D(e)};pn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=eu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?fn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&fn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};pn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=eu(t.as,t.crossOrigin);fn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&fn.d.M(e)};pn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=eu(n,t.crossOrigin);fn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};pn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=eu(t.as,t.crossOrigin);fn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else fn.d.m(e)};pn.requestFormReset=function(e){fn.d.r(e)};pn.unstable_batchedUpdates=function(e,t){return e(t)};pn.useFormState=function(e,t,n){return co.H.useFormState(e,t,n)};pn.useFormStatus=function(){return co.H.useHostTransitionStatus()};pn.version="19.2.1";function Qx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qx)}catch(e){console.error(e)}}Qx(),Zx.exports=pn;var jS=Zx.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We=CS,Jx=Mt,ZS=jS;function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $x(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eg(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jp(e){if(Yo(e)!==e)throw Error(j(188))}function KS(e){var t=e.alternate;if(!t){if(t=Yo(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Jp(a),e;if(s===i)return Jp(a),t;s=s.sibling}throw Error(j(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function ng(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ng(e),t!==null)return t;e=e.sibling}return null}var be=Object.assign,QS=Symbol.for("react.element"),dl=Symbol.for("react.transitional.element"),io=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),ig=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),ag=Symbol.for("react.consumer"),Hi=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),Wf=Symbol.for("react.suspense_list"),Nd=Symbol.for("react.memo"),ha=Symbol.for("react.lazy"),Yf=Symbol.for("react.activity"),JS=Symbol.for("react.memo_cache_sentinel"),$p=Symbol.iterator;function Xr(e){return e===null||typeof e!="object"?null:(e=$p&&e[$p]||e["@@iterator"],typeof e=="function"?e:null)}var $S=Symbol.for("react.client.reference");function qf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$S?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ys:return"Fragment";case kf:return"Profiler";case ig:return"StrictMode";case Xf:return"Suspense";case Wf:return"SuspenseList";case Yf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case io:return"Portal";case Hi:return e.displayName||"Context";case ag:return(e._context.displayName||"Context")+".Consumer";case Ld:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nd:return t=e.displayName||null,t!==null?t:qf(e.type)||"Memo";case ha:t=e._payload,e=e._init;try{return qf(e(t))}catch{}}return null}var ao=Array.isArray,Nt=Jx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=ZS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ss={pending:!1,data:null,method:null,action:null},jf=[],qs=-1;function bi(e){return{current:e}}function Qe(e){0>qs||(e.current=jf[qs],jf[qs]=null,qs--)}function _e(e,t){qs++,jf[qs]=e.current,e.current=t}var yi=bi(null),Ao=bi(null),Ta=bi(null),vc=bi(null);function Sc(e,t){switch(_e(Ta,t),_e(Ao,e),_e(yi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sm(t),e=Ev(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Qe(yi),_e(yi,e)}function pr(){Qe(yi),Qe(Ao),Qe(Ta)}function Zf(e){e.memoizedState!==null&&_e(vc,e);var t=yi.current,n=Ev(t,e.type);t!==n&&(_e(Ao,e),_e(yi,n))}function yc(e){Ao.current===e&&(Qe(yi),Qe(Ao)),vc.current===e&&(Qe(vc),Fo._currentValue=ss)}var Cu,t0;function Ja(e){if(Cu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cu=t&&t[1]||"",t0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cu+e+t0}var wu=!1;function Du(e,t){if(!e||wu)return"";wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var h=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){h=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){h=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=a);break}}}finally{wu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ja(n):""}function ty(e,t){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return e.child!==t&&t!==null?Ja("Suspense Fallback"):Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return Du(e.type,!1);case 11:return Du(e.type.render,!1);case 1:return Du(e.type,!0);case 31:return Ja("Activity");default:return""}}function e0(e){try{var t="",n=null;do t+=ty(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Kf=Object.prototype.hasOwnProperty,Od=We.unstable_scheduleCallback,Uu=We.unstable_cancelCallback,ey=We.unstable_shouldYield,ny=We.unstable_requestPaint,Pn=We.unstable_now,iy=We.unstable_getCurrentPriorityLevel,sg=We.unstable_ImmediatePriority,rg=We.unstable_UserBlockingPriority,Mc=We.unstable_NormalPriority,ay=We.unstable_LowPriority,og=We.unstable_IdlePriority,sy=We.log,ry=We.unstable_setDisableYieldValue,qo=null,zn=null;function va(e){if(typeof sy=="function"&&ry(e),zn&&typeof zn.setStrictMode=="function")try{zn.setStrictMode(qo,e)}catch{}}var Fn=Math.clz32?Math.clz32:cy,oy=Math.log,ly=Math.LN2;function cy(e){return e>>>=0,e===0?32:31-(oy(e)/ly|0)|0}var pl=256,ml=262144,xl=4194304;function $a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=$a(i):(r&=o,r!==0?a=$a(r):n||(n=o&~e,n!==0&&(a=$a(n))))):(o=i&~s,o!==0?a=$a(o):r!==0?a=$a(r):n||(n=i&~e,n!==0&&(a=$a(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function jo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function uy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lg(){var e=xl;return xl<<=1,!(xl&62914560)&&(xl=4194304),e}function Lu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fy(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Fn(n),d=1<<f;o[f]=0,l[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&cg(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function cg(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Fn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function ug(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Fn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function fg(e,t){var n=t&-t;return n=n&42?1:Pd(n),n&(e.suspendedLanes|t)?0:n}function Pd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zd(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function hg(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:Pv(e.type))}function n0(e,t){var n=re.p;try{return re.p=e,t()}finally{re.p=n}}var Ga=Math.random().toString(36).slice(2),tn="__reactFiber$"+Ga,En="__reactProps$"+Ga,Nr="__reactContainer$"+Ga,Qf="__reactEvents$"+Ga,hy="__reactListeners$"+Ga,dy="__reactHandles$"+Ga,i0="__reactResources$"+Ga,Ko="__reactMarker$"+Ga;function Fd(e){delete e[tn],delete e[En],delete e[Qf],delete e[hy],delete e[dy]}function js(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nr]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=um(e);e!==null;){if(n=e[tn])return n;e=um(e)}return t}e=n,n=e.parentNode}return null}function Or(e){if(e=e[tn]||e[Nr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function so(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function sr(e){var t=e[i0];return t||(t=e[i0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[Ko]=!0}var dg=new Set,pg={};function _s(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(pg[e]=t,e=0;e<t.length;e++)dg.add(t[e])}var py=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),a0={},s0={};function my(e){return Kf.call(s0,e)?!0:Kf.call(a0,e)?!1:py.test(e)?s0[e]=!0:(a0[e]=!0,!1)}function $l(e,t,n){if(my(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ti(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jf(e){if(!e._valueTracker){var t=mg(e)?"checked":"value";e._valueTracker=xy(e,t,""+e[t])}}function xg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=mg(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function bc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gy=/[\n"\\]/g;function Kn(e){return e.replace(gy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $f(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?th(e,r,qn(t)):n!=null?th(e,r,qn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qn(o):e.removeAttribute("name")}function gg(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Jf(e);return}n=n!=null?""+qn(n):"",t=t!=null?""+qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Jf(e)}function th(e,t,n){t==="number"&&bc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function rr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function _g(e,t,n){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qn(n):""}function vg(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(ao(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Jf(e)}function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _y=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function r0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||_y.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Sg(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&r0(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&r0(e,s,t[s])}function Bd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tc(e){return Sy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gi(){}var eh=null;function Id(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,or=null;function o0(e){var t=Or(e);if(t&&(e=t.stateNode)){var n=e[En]||null;t:switch(e=t.stateNode,t.type){case"input":if($f(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[En]||null;if(!a)throw Error(j(90));$f(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&xg(i)}break t;case"textarea":_g(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&rr(e,!!n.multiple,t,!1)}}}var Nu=!1;function yg(e,t,n){if(Nu)return e(t,n);Nu=!0;try{var i=e(t);return i}finally{if(Nu=!1,(Zs!==null||or!==null)&&(pu(),Zs&&(t=Zs,e=or,or=Zs=null,o0(t),e)))for(t=0;t<e.length;t++)o0(e[t])}}function Ro(e,t){var n=e.stateNode;if(n===null)return null;var i=n[En]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nh=!1;if(Ki)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){nh=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{nh=!1}var Sa=null,Hd=null,ec=null;function Mg(){if(ec)return ec;var e,t=Hd,n=t.length,i,a="value"in Sa?Sa.value:Sa.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return ec=a.slice(e,1<i?1-i:void 0)}function nc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function l0(){return!1}function Tn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:l0,this.isPropagationStopped=l0,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),t}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Tn(vs),Qo=be({},vs,{view:0,detail:0}),yy=Tn(Qo),Ou,Pu,Yr,au=be({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(Ou=e.screenX-Yr.screenX,Pu=e.screenY-Yr.screenY):Pu=Ou=0,Yr=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Pu}}),c0=Tn(au),My=be({},au,{dataTransfer:0}),by=Tn(My),Ey=be({},Qo,{relatedTarget:0}),zu=Tn(Ey),Ty=be({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ay=Tn(Ty),Ry=be({},vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cy=Tn(Ry),wy=be({},vs,{data:0}),u0=Tn(wy),Dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ny(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ly[e])?!!t[e]:!1}function Gd(){return Ny}var Oy=be({},Qo,{key:function(e){if(e.key){var t=Dy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gd,charCode:function(e){return e.type==="keypress"?nc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Py=Tn(Oy),zy=be({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f0=Tn(zy),Fy=be({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gd}),By=Tn(Fy),Iy=be({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=Tn(Iy),Gy=be({},au,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=Tn(Gy),ky=be({},vs,{newState:0,oldState:0}),Xy=Tn(ky),Wy=[9,13,27,32],Vd=Ki&&"CompositionEvent"in window,uo=null;Ki&&"documentMode"in document&&(uo=document.documentMode);var Yy=Ki&&"TextEvent"in window&&!uo,bg=Ki&&(!Vd||uo&&8<uo&&11>=uo),h0=String.fromCharCode(32),d0=!1;function Eg(e,t){switch(e){case"keyup":return Wy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function qy(e,t){switch(e){case"compositionend":return Tg(t);case"keypress":return t.which!==32?null:(d0=!0,h0);case"textInput":return e=t.data,e===h0&&d0?null:e;default:return null}}function jy(e,t){if(Ks)return e==="compositionend"||!Vd&&Eg(e,t)?(e=Mg(),ec=Hd=Sa=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bg&&t.locale!=="ko"?null:t.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function p0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zy[e.type]:t==="textarea"}function Ag(e,t,n,i){Zs?or?or.push(i):or=[i]:Zs=i,t=Gc(t,"onChange"),0<t.length&&(n=new iu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var fo=null,Co=null;function Ky(e){yv(e,0)}function su(e){var t=so(e);if(xg(t))return e}function m0(e,t){if(e==="change")return t}var Rg=!1;if(Ki){var Fu;if(Ki){var Bu="oninput"in document;if(!Bu){var x0=document.createElement("div");x0.setAttribute("oninput","return;"),Bu=typeof x0.oninput=="function"}Fu=Bu}else Fu=!1;Rg=Fu&&(!document.documentMode||9<document.documentMode)}function g0(){fo&&(fo.detachEvent("onpropertychange",Cg),Co=fo=null)}function Cg(e){if(e.propertyName==="value"&&su(Co)){var t=[];Ag(t,Co,e,Id(e)),yg(Ky,t)}}function Qy(e,t,n){e==="focusin"?(g0(),fo=t,Co=n,fo.attachEvent("onpropertychange",Cg)):e==="focusout"&&g0()}function Jy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return su(Co)}function $y(e,t){if(e==="click")return su(t)}function tM(e,t){if(e==="input"||e==="change")return su(t)}function eM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Hn=typeof Object.is=="function"?Object.is:eM;function wo(e,t){if(Hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Kf.call(t,a)||!Hn(e[a],t[a]))return!1}return!0}function _0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function v0(e,t){var n=_0(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=_0(n)}}function wg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bc(e.document)}return t}function kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var nM=Ki&&"documentMode"in document&&11>=document.documentMode,Qs=null,ih=null,ho=null,ah=!1;function S0(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ah||Qs==null||Qs!==bc(i)||(i=Qs,"selectionStart"in i&&kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&wo(ho,i)||(ho=i,i=Gc(ih,"onSelect"),0<i.length&&(t=new iu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Qs)))}function Wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Js={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},Iu={},Ug={};Ki&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Ss(e){if(Iu[e])return Iu[e];if(!Js[e])return e;var t=Js[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ug)return Iu[e]=t[n];return e}var Lg=Ss("animationend"),Ng=Ss("animationiteration"),Og=Ss("animationstart"),iM=Ss("transitionrun"),aM=Ss("transitionstart"),sM=Ss("transitioncancel"),Pg=Ss("transitionend"),zg=new Map,sh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sh.push("scrollEnd");function di(e,t){zg.set(e,t),_s(t,[e])}var Ec=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wn=[],$s=0,Xd=0;function ru(){for(var e=$s,t=Xd=$s=0;t<e;){var n=Wn[t];Wn[t++]=null;var i=Wn[t];Wn[t++]=null;var a=Wn[t];Wn[t++]=null;var s=Wn[t];if(Wn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&Fg(n,a,s)}}function ou(e,t,n,i){Wn[$s++]=e,Wn[$s++]=t,Wn[$s++]=n,Wn[$s++]=i,Xd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Wd(e,t,n,i){return ou(e,t,n,i),Tc(e)}function ys(e,t){return ou(e,null,null,t),Tc(e)}function Fg(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Fn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Tc(e){if(50<Mo)throw Mo=0,Ah=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tr={};function rM(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,t,n,i){return new rM(e,t,n,i)}function Yd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,t){var n=e.alternate;return n===null?(n=Nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bg(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ic(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")Yd(e)&&(r=1);else if(typeof e=="string")r=fb(e,n,yi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Yf:return e=Nn(31,n,t,a),e.elementType=Yf,e.lanes=s,e;case Ys:return rs(n.children,a,s,t);case ig:r=8,a|=24;break;case kf:return e=Nn(12,n,t,a|2),e.elementType=kf,e.lanes=s,e;case Xf:return e=Nn(13,n,t,a),e.elementType=Xf,e.lanes=s,e;case Wf:return e=Nn(19,n,t,a),e.elementType=Wf,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hi:r=10;break t;case ag:r=9;break t;case Ld:r=11;break t;case Nd:r=14;break t;case ha:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=Nn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function rs(e,t,n,i){return e=Nn(7,e,i,t),e.lanes=n,e}function Hu(e,t,n){return e=Nn(6,e,null,t),e.lanes=n,e}function Ig(e){var t=Nn(18,null,null,0);return t.stateNode=e,t}function Gu(e,t,n){return t=Nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var y0=new WeakMap;function Qn(e,t){if(typeof e=="object"&&e!==null){var n=y0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:e0(t)},y0.set(e,t),t)}return{value:e,source:t,stack:e0(t)}}var er=[],nr=0,Ac=null,Do=0,jn=[],Zn=0,za=null,gi=1,_i="";function Fi(e,t){er[nr++]=Do,er[nr++]=Ac,Ac=e,Do=t}function Hg(e,t,n){jn[Zn++]=gi,jn[Zn++]=_i,jn[Zn++]=za,za=e;var i=gi;e=_i;var a=32-Fn(i)-1;i&=~(1<<a),n+=1;var s=32-Fn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,gi=1<<32-Fn(t)+a|n<<a|i,_i=s+e}else gi=1<<s|n<<a|i,_i=e}function qd(e){e.return!==null&&(Fi(e,1),Hg(e,1,0))}function jd(e){for(;e===Ac;)Ac=er[--nr],er[nr]=null,Do=er[--nr],er[nr]=null;for(;e===za;)za=jn[--Zn],jn[Zn]=null,_i=jn[--Zn],jn[Zn]=null,gi=jn[--Zn],jn[Zn]=null}function Gg(e,t){jn[Zn++]=gi,jn[Zn++]=_i,jn[Zn++]=za,gi=t.id,_i=t.overflow,za=e}var en=null,ye=null,ee=!1,Aa=null,Jn=!1,rh=Error(j(519));function Fa(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(Qn(t,e)),rh}function M0(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[tn]=e,t[En]=i,n){case"dialog":jt("cancel",t),jt("close",t);break;case"iframe":case"object":case"embed":jt("load",t);break;case"video":case"audio":for(n=0;n<Po.length;n++)jt(Po[n],t);break;case"source":jt("error",t);break;case"img":case"image":case"link":jt("error",t),jt("load",t);break;case"details":jt("toggle",t);break;case"input":jt("invalid",t),gg(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":jt("invalid",t);break;case"textarea":jt("invalid",t),vg(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||bv(t.textContent,n)?(i.popover!=null&&(jt("beforetoggle",t),jt("toggle",t)),i.onScroll!=null&&jt("scroll",t),i.onScrollEnd!=null&&jt("scrollend",t),i.onClick!=null&&(t.onclick=Gi),t=!0):t=!1,t||Fa(e,!0)}function b0(e){for(en=e.return;en;)switch(en.tag){case 5:case 31:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:en=en.return}}function Ts(e){if(e!==en)return!1;if(!ee)return b0(e),ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Uh(e.type,e.memoizedProps)),n=!n),n&&ye&&Fa(e),b0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));ye=cm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));ye=cm(e)}else t===27?(t=ye,Va(e.type)?(e=Ph,Ph=null,ye=e):ye=t):ye=en?ei(e.stateNode.nextSibling):null;return!0}function us(){ye=en=null,ee=!1}function Vu(){var e=Aa;return e!==null&&(yn===null?yn=e:yn.push.apply(yn,e),Aa=null),e}function Uo(e){Aa===null?Aa=[e]:Aa.push(e)}var oh=bi(null),Ms=null,Vi=null;function pa(e,t,n){_e(oh,t._currentValue),t._currentValue=n}function Yi(e){e._currentValue=oh.current,Qe(oh)}function lh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ch(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),lh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(j(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),lh(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Pr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=a.type;Hn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===vc.current){if(r=a.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}a=a.return}e!==null&&ch(t,e,n,i),t.flags|=262144}function Rc(e){for(e=e.firstContext;e!==null;){if(!Hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fs(e){Ms=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return Vg(Ms,e)}function vl(e,t){return Ms===null&&fs(e),Vg(e,t)}function Vg(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Vi===null){if(e===null)throw Error(j(308));Vi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vi=Vi.next=t;return n}var oM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},lM=We.unstable_scheduleCallback,cM=We.unstable_NormalPriority,Ge={$$typeof:Hi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zd(){return{controller:new oM,data:new Map,refCount:0}}function Jo(e){e.refCount--,e.refCount===0&&lM(cM,function(){e.controller.abort()})}var po=null,uh=0,gr=0,lr=null;function uM(e,t){if(po===null){var n=po=[];uh=0,gr=Sp(),lr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return uh++,t.then(E0,E0),t}function E0(){if(--uh===0&&po!==null){lr!==null&&(lr.status="fulfilled");var e=po;po=null,gr=0,lr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var T0=Nt.S;Nt.S=function(e,t){nv=Pn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&uM(e,t),T0!==null&&T0(e,t)};var os=bi(null);function Kd(){var e=os.current;return e!==null?e:xe.pooledCache}function ac(e,t){t===null?_e(os,os.current):_e(os,t.pool)}function kg(){var e=Kd();return e===null?null:{parent:Ge._currentValue,pool:e}}var zr=Error(j(460)),Qd=Error(j(474)),lu=Error(j(542)),Cc={then:function(){}};function A0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xg(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Gi,Gi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,C0(e),e;default:if(typeof t.status=="string")t.then(Gi,Gi);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,C0(e),e}throw ls=t,zr}}function ts(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ls=n,zr):n}}var ls=null;function R0(){if(ls===null)throw Error(j(459));var e=ls;return ls=null,e}function C0(e){if(e===zr||e===lu)throw Error(j(483))}var cr=null,Lo=0;function Sl(e){var t=Lo;return Lo+=1,cr===null&&(cr=[]),Xg(cr,e,t)}function qr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yl(e,t){throw t.$$typeof===QS?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Wg(e){function t(u,x){if(e){var _=u.deletions;_===null?(u.deletions=[x],u.flags|=16):_.push(x)}}function n(u,x){if(!e)return null;for(;x!==null;)t(u,x),x=x.sibling;return null}function i(u){for(var x=new Map;u!==null;)u.key!==null?x.set(u.key,u):x.set(u.index,u),u=u.sibling;return x}function a(u,x){return u=Wi(u,x),u.index=0,u.sibling=null,u}function s(u,x,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<x?(u.flags|=67108866,x):_):(u.flags|=67108866,x)):(u.flags|=1048576,x)}function r(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,x,_,y){return x===null||x.tag!==6?(x=Hu(_,u.mode,y),x.return=u,x):(x=a(x,_),x.return=u,x)}function l(u,x,_,y){var C=_.type;return C===Ys?f(u,x,_.props.children,y,_.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ha&&ts(C)===x.type)?(x=a(x,_.props),qr(x,_),x.return=u,x):(x=ic(_.type,_.key,_.props,null,u.mode,y),qr(x,_),x.return=u,x)}function c(u,x,_,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Gu(_,u.mode,y),x.return=u,x):(x=a(x,_.children||[]),x.return=u,x)}function f(u,x,_,y,C){return x===null||x.tag!==7?(x=rs(_,u.mode,y,C),x.return=u,x):(x=a(x,_),x.return=u,x)}function d(u,x,_){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Hu(""+x,u.mode,_),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case dl:return _=ic(x.type,x.key,x.props,null,u.mode,_),qr(_,x),_.return=u,_;case io:return x=Gu(x,u.mode,_),x.return=u,x;case ha:return x=ts(x),d(u,x,_)}if(ao(x)||Xr(x))return x=rs(x,u.mode,_,null),x.return=u,x;if(typeof x.then=="function")return d(u,Sl(x),_);if(x.$$typeof===Hi)return d(u,vl(u,x),_);yl(u,x)}return null}function h(u,x,_,y){var C=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:o(u,x,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case dl:return _.key===C?l(u,x,_,y):null;case io:return _.key===C?c(u,x,_,y):null;case ha:return _=ts(_),h(u,x,_,y)}if(ao(_)||Xr(_))return C!==null?null:f(u,x,_,y,null);if(typeof _.then=="function")return h(u,x,Sl(_),y);if(_.$$typeof===Hi)return h(u,x,vl(u,_),y);yl(u,_)}return null}function p(u,x,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(_)||null,o(x,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:return u=u.get(y.key===null?_:y.key)||null,l(x,u,y,C);case io:return u=u.get(y.key===null?_:y.key)||null,c(x,u,y,C);case ha:return y=ts(y),p(u,x,_,y,C)}if(ao(y)||Xr(y))return u=u.get(_)||null,f(x,u,y,C,null);if(typeof y.then=="function")return p(u,x,_,Sl(y),C);if(y.$$typeof===Hi)return p(u,x,_,vl(x,y),C);yl(x,y)}return null}function g(u,x,_,y){for(var C=null,T=null,R=x,L=x=0,E=null;R!==null&&L<_.length;L++){R.index>L?(E=R,R=null):E=R.sibling;var M=h(u,R,_[L],y);if(M===null){R===null&&(R=E);break}e&&R&&M.alternate===null&&t(u,R),x=s(M,x,L),T===null?C=M:T.sibling=M,T=M,R=E}if(L===_.length)return n(u,R),ee&&Fi(u,L),C;if(R===null){for(;L<_.length;L++)R=d(u,_[L],y),R!==null&&(x=s(R,x,L),T===null?C=R:T.sibling=R,T=R);return ee&&Fi(u,L),C}for(R=i(R);L<_.length;L++)E=p(R,u,L,_[L],y),E!==null&&(e&&E.alternate!==null&&R.delete(E.key===null?L:E.key),x=s(E,x,L),T===null?C=E:T.sibling=E,T=E);return e&&R.forEach(function(D){return t(u,D)}),ee&&Fi(u,L),C}function v(u,x,_,y){if(_==null)throw Error(j(151));for(var C=null,T=null,R=x,L=x=0,E=null,M=_.next();R!==null&&!M.done;L++,M=_.next()){R.index>L?(E=R,R=null):E=R.sibling;var D=h(u,R,M.value,y);if(D===null){R===null&&(R=E);break}e&&R&&D.alternate===null&&t(u,R),x=s(D,x,L),T===null?C=D:T.sibling=D,T=D,R=E}if(M.done)return n(u,R),ee&&Fi(u,L),C;if(R===null){for(;!M.done;L++,M=_.next())M=d(u,M.value,y),M!==null&&(x=s(M,x,L),T===null?C=M:T.sibling=M,T=M);return ee&&Fi(u,L),C}for(R=i(R);!M.done;L++,M=_.next())M=p(R,u,L,M.value,y),M!==null&&(e&&M.alternate!==null&&R.delete(M.key===null?L:M.key),x=s(M,x,L),T===null?C=M:T.sibling=M,T=M);return e&&R.forEach(function(I){return t(u,I)}),ee&&Fi(u,L),C}function m(u,x,_,y){if(typeof _=="object"&&_!==null&&_.type===Ys&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case dl:t:{for(var C=_.key;x!==null;){if(x.key===C){if(C=_.type,C===Ys){if(x.tag===7){n(u,x.sibling),y=a(x,_.props.children),y.return=u,u=y;break t}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ha&&ts(C)===x.type){n(u,x.sibling),y=a(x,_.props),qr(y,_),y.return=u,u=y;break t}n(u,x);break}else t(u,x);x=x.sibling}_.type===Ys?(y=rs(_.props.children,u.mode,y,_.key),y.return=u,u=y):(y=ic(_.type,_.key,_.props,null,u.mode,y),qr(y,_),y.return=u,u=y)}return r(u);case io:t:{for(C=_.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(u,x.sibling),y=a(x,_.children||[]),y.return=u,u=y;break t}else{n(u,x);break}else t(u,x);x=x.sibling}y=Gu(_,u.mode,y),y.return=u,u=y}return r(u);case ha:return _=ts(_),m(u,x,_,y)}if(ao(_))return g(u,x,_,y);if(Xr(_)){if(C=Xr(_),typeof C!="function")throw Error(j(150));return _=C.call(_),v(u,x,_,y)}if(typeof _.then=="function")return m(u,x,Sl(_),y);if(_.$$typeof===Hi)return m(u,x,vl(u,_),y);yl(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,x!==null&&x.tag===6?(n(u,x.sibling),y=a(x,_),y.return=u,u=y):(n(u,x),y=Hu(_,u.mode,y),y.return=u,u=y),r(u)):n(u,x)}return function(u,x,_,y){try{Lo=0;var C=m(u,x,_,y);return cr=null,C}catch(R){if(R===zr||R===lu)throw R;var T=Nn(29,R,null,u.mode);return T.lanes=y,T.return=u,T}finally{}}}var hs=Wg(!0),Yg=Wg(!1),da=!1;function Jd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,se&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Tc(e),Fg(e,null,n),t}return ou(e,i,t,n),Tc(e)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ug(e,n)}}function ku(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var hh=!1;function xo(){if(hh){var e=lr;if(e!==null)throw e}}function go(e,t,n,i){hh=!1;var a=e.updateQueue;da=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,f=c=l=null,o=s;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(te&h)===h:(i&h)===h){h!==0&&h===gr&&(hh=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,v=o;h=t;var m=n;switch(v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(m,d,h);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(m,d,h):g,h==null)break t;d=be({},d,h);break t;case 2:da=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,r|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(1);f===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=f,s===null&&(a.shared.lanes=0),Ia|=r,e.lanes=r,e.memoizedState=d}}function qg(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function jg(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qg(n[e],t)}var _r=bi(null),wc=bi(0);function w0(e,t){e=ta,_e(wc,e),_e(_r,t),ta=e|t.baseLanes}function dh(){_e(wc,ta),_e(_r,_r.current)}function $d(){ta=wc.current,Qe(_r),Qe(wc)}var Gn=bi(null),ti=null;function ma(e){var t=e.alternate;_e(Pe,Pe.current&1),_e(Gn,e),ti===null&&(t===null||_r.current!==null||t.memoizedState!==null)&&(ti=e)}function ph(e){_e(Pe,Pe.current),_e(Gn,e),ti===null&&(ti=e)}function Zg(e){e.tag===22?(_e(Pe,Pe.current),_e(Gn,e),ti===null&&(ti=e)):xa()}function xa(){_e(Pe,Pe.current),_e(Gn,Gn.current)}function Ln(e){Qe(Gn),ti===e&&(ti=null),Qe(Pe)}var Pe=bi(0);function Dc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Nh(n)||Oh(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qi=0,Vt=null,de=null,Ie=null,Uc=!1,ur=!1,ds=!1,Lc=0,No=0,fr=null,hM=0;function Le(){throw Error(j(321))}function tp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Hn(e[n],t[n]))return!1;return!0}function ep(e,t,n,i,a,s){return Qi=s,Vt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nt.H=e===null||e.memoizedState===null?A_:hp,ds=!1,s=n(i,a),ds=!1,ur&&(s=Qg(t,n,i,a)),Kg(e),s}function Kg(e){Nt.H=Oo;var t=de!==null&&de.next!==null;if(Qi=0,Ie=de=Vt=null,Uc=!1,No=0,fr=null,t)throw Error(j(300));e===null||Ve||(e=e.dependencies,e!==null&&Rc(e)&&(Ve=!0))}function Qg(e,t,n,i){Vt=e;var a=0;do{if(ur&&(fr=null),No=0,ur=!1,25<=a)throw Error(j(301));if(a+=1,Ie=de=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Nt.H=R_,s=t(n,i)}while(ur);return s}function dM(){var e=Nt.H,t=e.useState()[0];return t=typeof t.then=="function"?$o(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Vt.flags|=1024),t}function np(){var e=Lc!==0;return Lc=0,e}function ip(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ap(e){if(Uc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uc=!1}Qi=0,Ie=de=Vt=null,ur=!1,No=Lc=0,fr=null}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Vt.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Fe(){if(de===null){var e=Vt.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Ie===null?Vt.memoizedState:Ie.next;if(t!==null)Ie=t,de=e;else{if(e===null)throw Vt.alternate===null?Error(j(467)):Error(j(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Ie===null?Vt.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var t=No;return No+=1,fr===null&&(fr=[]),e=Xg(fr,e,t),t=Vt,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,Nt.H=t===null||t.memoizedState===null?A_:hp),e}function uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $o(e);if(e.$$typeof===Hi)return nn(e)}throw Error(j(438,String(e)))}function sp(e){var t=null,n=Vt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Vt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=cu(),Vt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=JS;return t.index++,n}function Ji(e,t){return typeof t=="function"?t(e):t}function sc(e){var t=Fe();return rp(t,de,e)}function rp(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(te&d)===d:(Qi&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===gr&&(f=!0);else if((Qi&h)===h){c=c.next,h===gr&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Vt.lanes|=h,Ia|=h;d=c.action,ds&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,Vt.lanes|=d,Ia|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Hn(s,e.memoizedState)&&(Ve=!0,f&&(n=lr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Xu(e){var t=Fe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Hn(s,t.memoizedState)||(Ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Jg(e,t,n){var i=Vt,a=Fe(),s=ee;if(s){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!Hn((de||a).memoizedState,n);if(r&&(a.memoizedState=n,Ve=!0),a=a.queue,op(e_.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ie!==null&&Ie.memoizedState.tag&1){if(i.flags|=2048,vr(9,{destroy:void 0},t_.bind(null,i,a,n,t),null),xe===null)throw Error(j(349));s||Qi&127||$g(i,t,n)}return n}function $g(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Vt.updateQueue,t===null?(t=cu(),Vt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function t_(e,t,n,i){t.value=n,t.getSnapshot=i,n_(t)&&i_(e)}function e_(e,t,n){return n(function(){n_(t)&&i_(e)})}function n_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Hn(e,n)}catch{return!0}}function i_(e){var t=ys(e,2);t!==null&&Mn(t,e,2)}function mh(e){var t=un();if(typeof e=="function"){var n=e;if(e=n(),ds){va(!0);try{n()}finally{va(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},t}function a_(e,t,n,i){return e.baseState=n,rp(e,de,typeof i=="function"?i:Ji)}function pM(e,t,n,i,a){if(hu(e))throw Error(j(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Nt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,s_(t,s)):(s.next=n.next,t.pending=n.next=s)}}function s_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Nt.T,r={};Nt.T=r;try{var o=n(a,i),l=Nt.S;l!==null&&l(r,o),D0(e,t,o)}catch(c){xh(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Nt.T=s}}else try{s=n(a,i),D0(e,t,s)}catch(c){xh(e,t,c)}}function D0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){U0(e,t,i)},function(i){return xh(e,t,i)}):U0(e,t,n)}function U0(e,t,n){t.status="fulfilled",t.value=n,r_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,s_(e,n)))}function xh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,r_(t),t=t.next;while(t!==i)}e.action=null}function r_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function o_(e,t){return t}function L0(e,t){if(ee){var n=xe.formState;if(n!==null){t:{var i=Vt;if(ee){if(ye){e:{for(var a=ye,s=Jn;a.nodeType!==8;){if(!s){a=null;break e}if(a=ei(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){ye=ei(a.nextSibling),i=a.data==="F!";break t}}Fa(i)}i=!1}i&&(t=n[0])}}return n=un(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o_,lastRenderedState:t},n.queue=i,n=b_.bind(null,Vt,i),i.dispatch=n,i=mh(!1),s=fp.bind(null,Vt,!1,i.queue),i=un(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=pM.bind(null,Vt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function N0(e){var t=Fe();return l_(t,de,e)}function l_(e,t,n){if(t=rp(e,t,o_)[0],e=sc(Ji)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=$o(t)}catch(r){throw r===zr?lu:r}else i=t;t=Fe();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Vt.flags|=2048,vr(9,{destroy:void 0},mM.bind(null,a,n),null)),[i,s,e]}function mM(e,t){e.action=t}function O0(e){var t=Fe(),n=de;if(n!==null)return l_(t,n,e);Fe(),t=t.memoizedState,n=Fe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function vr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Vt.updateQueue,t===null&&(t=cu(),Vt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function c_(){return Fe().memoizedState}function rc(e,t,n,i){var a=un();Vt.flags|=e,a.memoizedState=vr(1|t,{destroy:void 0},n,i===void 0?null:i)}function fu(e,t,n,i){var a=Fe();i=i===void 0?null:i;var s=a.memoizedState.inst;de!==null&&i!==null&&tp(i,de.memoizedState.deps)?a.memoizedState=vr(t,s,n,i):(Vt.flags|=e,a.memoizedState=vr(1|t,s,n,i))}function P0(e,t){rc(8390656,8,e,t)}function op(e,t){fu(2048,8,e,t)}function xM(e){Vt.flags|=4;var t=Vt.updateQueue;if(t===null)t=cu(),Vt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function u_(e){var t=Fe().memoizedState;return xM({ref:t,nextImpl:e}),function(){if(se&2)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function f_(e,t){return fu(4,2,e,t)}function h_(e,t){return fu(4,4,e,t)}function d_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function p_(e,t,n){n=n!=null?n.concat([e]):null,fu(4,4,d_.bind(null,t,e),n)}function lp(){}function m_(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&tp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function x_(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&tp(t,i[1]))return i[0];if(i=e(),ds){va(!0);try{e()}finally{va(!1)}}return n.memoizedState=[i,t],i}function cp(e,t,n){return n===void 0||Qi&1073741824&&!(te&261930)?e.memoizedState=t:(e.memoizedState=n,e=av(),Vt.lanes|=e,Ia|=e,n)}function g_(e,t,n,i){return Hn(n,t)?n:_r.current!==null?(e=cp(e,n,i),Hn(e,t)||(Ve=!0),e):!(Qi&42)||Qi&1073741824&&!(te&261930)?(Ve=!0,e.memoizedState=n):(e=av(),Vt.lanes|=e,Ia|=e,t)}function __(e,t,n,i,a){var s=re.p;re.p=s!==0&&8>s?s:8;var r=Nt.T,o={};Nt.T=o,fp(e,!1,t,n);try{var l=a(),c=Nt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=fM(l,i);_o(e,t,f,Bn(e))}else _o(e,t,i,Bn(e))}catch(d){_o(e,t,{then:function(){},status:"rejected",reason:d},Bn())}finally{re.p=s,r!==null&&o.types!==null&&(r.types=o.types),Nt.T=r}}function gM(){}function gh(e,t,n,i){if(e.tag!==5)throw Error(j(476));var a=v_(e).queue;__(e,a,t,ss,n===null?gM:function(){return S_(e),n(i)})}function v_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ss,baseState:ss,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:ss},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function S_(e){var t=v_(e);t.next===null&&(t=e.alternate.memoizedState),_o(e,t.next.queue,{},Bn())}function up(){return nn(Fo)}function y_(){return Fe().memoizedState}function M_(){return Fe().memoizedState}function _M(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Bn();e=Ra(n);var i=Ca(t,e,n);i!==null&&(Mn(i,t,n),mo(i,t,n)),t={cache:Zd()},e.payload=t;return}t=t.return}}function vM(e,t,n){var i=Bn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hu(e)?E_(t,n):(n=Wd(e,t,n,i),n!==null&&(Mn(n,e,i),T_(n,t,i)))}function b_(e,t,n){var i=Bn();_o(e,t,n,i)}function _o(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hu(e))E_(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Hn(o,r))return ou(e,t,a,0),xe===null&&ru(),!1}catch{}finally{}if(n=Wd(e,t,a,i),n!==null)return Mn(n,e,i),T_(n,t,i),!0}return!1}function fp(e,t,n,i){if(i={lane:2,revertLane:Sp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},hu(e)){if(t)throw Error(j(479))}else t=Wd(e,n,i,2),t!==null&&Mn(t,e,2)}function hu(e){var t=e.alternate;return e===Vt||t!==null&&t===Vt}function E_(e,t){ur=Uc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function T_(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ug(e,n)}}var Oo={readContext:nn,use:uu,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};Oo.useEffectEvent=Le;var A_={readContext:nn,use:uu,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:P0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,rc(4194308,4,d_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rc(4194308,4,e,t)},useInsertionEffect:function(e,t){rc(4,2,e,t)},useMemo:function(e,t){var n=un();t=t===void 0?null:t;var i=e();if(ds){va(!0);try{e()}finally{va(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=un();if(n!==void 0){var a=n(t);if(ds){va(!0);try{n(t)}finally{va(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=vM.bind(null,Vt,e),[i.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:function(e){e=mh(e);var t=e.queue,n=b_.bind(null,Vt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:lp,useDeferredValue:function(e,t){var n=un();return cp(n,e,t)},useTransition:function(){var e=mh(!1);return e=__.bind(null,Vt,e.queue,!0,!1),un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Vt,a=un();if(ee){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),xe===null)throw Error(j(349));te&127||$g(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,P0(e_.bind(null,i,s,e),[e]),i.flags|=2048,vr(9,{destroy:void 0},t_.bind(null,i,s,n,t),null),n},useId:function(){var e=un(),t=xe.identifierPrefix;if(ee){var n=_i,i=gi;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Lc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=hM++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:up,useFormState:L0,useActionState:L0,useOptimistic:function(e){var t=un();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fp.bind(null,Vt,!0,n),n.dispatch=t,[e,t]},useMemoCache:sp,useCacheRefresh:function(){return un().memoizedState=_M.bind(null,Vt)},useEffectEvent:function(e){var t=un(),n={impl:e};return t.memoizedState=n,function(){if(se&2)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},hp={readContext:nn,use:uu,useCallback:m_,useContext:nn,useEffect:op,useImperativeHandle:p_,useInsertionEffect:f_,useLayoutEffect:h_,useMemo:x_,useReducer:sc,useRef:c_,useState:function(){return sc(Ji)},useDebugValue:lp,useDeferredValue:function(e,t){var n=Fe();return g_(n,de.memoizedState,e,t)},useTransition:function(){var e=sc(Ji)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:$o(e),t]},useSyncExternalStore:Jg,useId:y_,useHostTransitionStatus:up,useFormState:N0,useActionState:N0,useOptimistic:function(e,t){var n=Fe();return a_(n,de,e,t)},useMemoCache:sp,useCacheRefresh:M_};hp.useEffectEvent=u_;var R_={readContext:nn,use:uu,useCallback:m_,useContext:nn,useEffect:op,useImperativeHandle:p_,useInsertionEffect:f_,useLayoutEffect:h_,useMemo:x_,useReducer:Xu,useRef:c_,useState:function(){return Xu(Ji)},useDebugValue:lp,useDeferredValue:function(e,t){var n=Fe();return de===null?cp(n,e,t):g_(n,de.memoizedState,e,t)},useTransition:function(){var e=Xu(Ji)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:$o(e),t]},useSyncExternalStore:Jg,useId:y_,useHostTransitionStatus:up,useFormState:O0,useActionState:O0,useOptimistic:function(e,t){var n=Fe();return de!==null?a_(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:sp,useCacheRefresh:M_};R_.useEffectEvent=u_;function Wu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _h={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Bn(),a=Ra(i);a.payload=t,n!=null&&(a.callback=n),t=Ca(e,a,i),t!==null&&(Mn(t,e,i),mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Bn(),a=Ra(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ca(e,a,i),t!==null&&(Mn(t,e,i),mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Bn(),i=Ra(n);i.tag=2,t!=null&&(i.callback=t),t=Ca(e,i,n),t!==null&&(Mn(t,e,n),mo(t,e,n))}};function z0(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!wo(n,i)||!wo(a,s):!0}function F0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&_h.enqueueReplaceState(t,t.state,null)}function ps(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=be({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function C_(e){Ec(e)}function w_(e){console.error(e)}function D_(e){Ec(e)}function Nc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function B0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function vh(e,t,n){return n=Ra(n),n.tag=3,n.payload={element:null},n.callback=function(){Nc(e,t)},n}function U_(e){return e=Ra(e),e.tag=3,e}function L_(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){B0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){B0(t,n,i),typeof a!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function SM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Pr(t,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 31:case 13:return ti===null?Bc():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Cc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),nf(e,i,a)),!1;case 22:return n.flags|=65536,i===Cc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),nf(e,i,a)),!1}throw Error(j(435,n.tag))}return nf(e,i,a),Bc(),!1}if(ee)return t=Gn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==rh&&(e=Error(j(422),{cause:i}),Uo(Qn(e,n)))):(i!==rh&&(t=Error(j(423),{cause:i}),Uo(Qn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Qn(i,n),a=vh(e.stateNode,i,a),ku(e,a),Ne!==4&&(Ne=2)),!1;var s=Error(j(520),{cause:i});if(s=Qn(s,n),yo===null?yo=[s]:yo.push(s),Ne!==4&&(Ne=2),t===null)return!0;i=Qn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=vh(n.stateNode,i,e),ku(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(wa===null||!wa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=U_(a),L_(a,e,n,i),ku(n,a),!1}n=n.return}while(n!==null);return!1}var dp=Error(j(461)),Ve=!1;function $e(e,t,n,i){t.child=e===null?Yg(t,null,n,i):hs(t,e.child,n,i)}function I0(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return fs(t),i=ep(e,t,n,r,s,a),o=np(),e!==null&&!Ve?(ip(e,t,a),$i(e,t,a)):(ee&&o&&qd(t),t.flags|=1,$e(e,t,i,a),t.child)}function H0(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Yd(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,N_(e,t,s,i,a)):(e=ic(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!pp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(r,i)&&e.ref===t.ref)return $i(e,t,a)}return t.flags|=1,e=Wi(s,i),e.ref=t.ref,e.return=t,t.child=e}function N_(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(wo(s,i)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=i=s,pp(e,a))e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,$i(e,t,a)}return Sh(e,t,n,i,a)}function O_(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return G0(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ac(t,s!==null?s.cachePool:null),s!==null?w0(t,s):dh(),Zg(t);else return i=t.lanes=536870912,G0(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(ac(t,s.cachePool),w0(t,s),xa(),t.memoizedState=null):(e!==null&&ac(t,null),dh(),xa());return $e(e,t,a,n),t.child}function ro(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function G0(e,t,n,i,a){var s=Kd();return s=s===null?null:{parent:Ge._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&ac(t,null),dh(),Zg(t),e!==null&&Pr(e,t,i,!0),t.childLanes=a,null}function oc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function V0(e,t,n){return hs(t,e.child,null,n),e=oc(t,t.pendingProps),e.flags|=2,Ln(t),t.memoizedState=null,e}function yM(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(i.mode==="hidden")return e=oc(t,i),t.lanes=536870912,ro(null,e);if(ph(t),(e=ye)?(e=Av(e,Jn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:gi,overflow:_i}:null,retryLane:536870912,hydrationErrors:null},n=Ig(e),n.return=t,t.child=n,en=t,ye=null)):e=null,e===null)throw Fa(t);return t.lanes=536870912,null}return oc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(ph(t),a)if(t.flags&256)t.flags&=-257,t=V0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(Ve||Pr(e,t,n,!1),a=(n&e.childLanes)!==0,Ve||a){if(i=xe,i!==null&&(r=fg(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,ys(e,r),Mn(i,e,r),dp;Bc(),t=V0(e,t,n)}else e=s.treeContext,ye=ei(r.nextSibling),en=t,ee=!0,Aa=null,Jn=!1,e!==null&&Gg(t,e),t=oc(t,i),t.flags|=4096;return t}return e=Wi(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Sh(e,t,n,i,a){return fs(t),n=ep(e,t,n,i,void 0,a),i=np(),e!==null&&!Ve?(ip(e,t,a),$i(e,t,a)):(ee&&i&&qd(t),t.flags|=1,$e(e,t,n,a),t.child)}function k0(e,t,n,i,a,s){return fs(t),t.updateQueue=null,n=Qg(t,i,n,a),Kg(e),i=np(),e!==null&&!Ve?(ip(e,t,s),$i(e,t,s)):(ee&&i&&qd(t),t.flags|=1,$e(e,t,n,s),t.child)}function X0(e,t,n,i,a){if(fs(t),t.stateNode===null){var s=tr,r=n.contextType;typeof r=="object"&&r!==null&&(s=nn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_h,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Jd(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?nn(r):tr,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Wu(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&_h.enqueueReplaceState(s,s.state,null),go(t,i,s,a),xo(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=ps(n,o);s.props=l;var c=s.context,f=n.contextType;r=tr,typeof f=="object"&&f!==null&&(r=nn(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&F0(t,s,i,r),da=!1;var h=t.memoizedState;s.state=h,go(t,i,s,a),xo(),c=t.memoizedState,o||h!==c||da?(typeof d=="function"&&(Wu(t,n,d,i),c=t.memoizedState),(l=da||z0(t,n,l,i,h,c,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,fh(e,t),r=t.memoizedProps,f=ps(n,r),s.props=f,d=t.pendingProps,h=s.context,c=n.contextType,l=tr,typeof c=="object"&&c!==null&&(l=nn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||h!==l)&&F0(t,s,i,l),da=!1,h=t.memoizedState,s.state=h,go(t,i,s,a),xo();var p=t.memoizedState;r!==d||h!==p||da||e!==null&&e.dependencies!==null&&Rc(e.dependencies)?(typeof o=="function"&&(Wu(t,n,o,i),p=t.memoizedState),(f=da||z0(t,n,f,i,h,p,l)||e!==null&&e.dependencies!==null&&Rc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=f):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,lc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=hs(t,e.child,null,a),t.child=hs(t,null,n,a)):$e(e,t,n,a),t.memoizedState=s.state,e=t.child):e=$i(e,t,a),e}function W0(e,t,n,i){return us(),t.flags|=256,$e(e,t,n,i),t.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(e){return{baseLanes:e,cachePool:kg()}}function ju(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=On),e}function P_(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(a?ma(t):xa(),(e=ye)?(e=Av(e,Jn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:gi,overflow:_i}:null,retryLane:536870912,hydrationErrors:null},n=Ig(e),n.return=t,t.child=n,en=t,ye=null)):e=null,e===null)throw Fa(t);return Oh(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(xa(),a=t.mode,o=Oc({mode:"hidden",children:o},a),i=rs(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=qu(n),i.childLanes=ju(e,r,n),t.memoizedState=Yu,ro(null,i)):(ma(t),yh(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(ma(t),t.flags&=-257,t=Zu(e,t,n)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,t=null):(xa(),o=i.fallback,a=t.mode,i=Oc({mode:"visible",children:i.children},a),o=rs(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,hs(t,e.child,null,n),i=t.child,i.memoizedState=qu(n),i.childLanes=ju(e,r,n),t.memoizedState=Yu,t=ro(null,i));else if(ma(t),Oh(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(j(419)),i.stack="",i.digest=r,Uo({value:i,source:null,stack:null}),t=Zu(e,t,n)}else if(Ve||Pr(e,t,n,!1),r=(n&e.childLanes)!==0,Ve||r){if(r=xe,r!==null&&(i=fg(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,ys(e,i),Mn(r,e,i),dp;Nh(o)||Bc(),t=Zu(e,t,n)}else Nh(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ye=ei(o.nextSibling),en=t,ee=!0,Aa=null,Jn=!1,e!==null&&Gg(t,e),t=yh(t,i.children),t.flags|=4096);return t}return a?(xa(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=Wi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Wi(c,o):(o=rs(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,ro(null,i),i=t.child,o=e.child.memoizedState,o===null?o=qu(n):(a=o.cachePool,a!==null?(l=Ge._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=kg(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=ju(e,r,n),t.memoizedState=Yu,ro(e.child,i)):(ma(t),n=e.child,e=n.sibling,n=Wi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function yh(e,t){return t=Oc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=Nn(22,e,null,t),e.lanes=0,e}function Zu(e,t,n){return hs(t,e.child,null,n),e=yh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Y0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),lh(e.return,t,n)}function Ku(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function z_(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Pe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,_e(Pe,r),$e(e,t,i,n),i=ee?Do:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Y0(e,n,t);else if(e.tag===19)Y0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Dc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ku(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Dc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ku(t,!0,n,null,s,i);break;case"together":Ku(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function $i(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ia|=t.lanes,!(n&t.childLanes))if(e!==null){if(Pr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Wi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Rc(e)))}function MM(e,t,n){switch(t.tag){case 3:Sc(t,t.stateNode.containerInfo),pa(t,Ge,e.memoizedState.cache),us();break;case 27:case 5:Zf(t);break;case 4:Sc(t,t.stateNode.containerInfo);break;case 10:pa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ph(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ma(t),t.flags|=128,null):n&t.child.childLanes?P_(e,t,n):(ma(t),e=$i(e,t,n),e!==null?e.sibling:null);ma(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Pr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return z_(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),_e(Pe,Pe.current),i)break;return null;case 22:return t.lanes=0,O_(e,t,n,t.pendingProps);case 24:pa(t,Ge,e.memoizedState.cache)}return $i(e,t,n)}function F_(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!pp(e,n)&&!(t.flags&128))return Ve=!1,MM(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ee&&t.flags&1048576&&Hg(t,Do,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ts(t.elementType),t.type=e,typeof e=="function")Yd(e)?(i=ps(e,i),t.tag=1,t=X0(null,t,e,i,n)):(t.tag=0,t=Sh(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Ld){t.tag=11,t=I0(null,t,e,i,n);break t}else if(a===Nd){t.tag=14,t=H0(null,t,e,i,n);break t}}throw t=qf(e)||e,Error(j(306,t,""))}}return t;case 0:return Sh(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=ps(i,t.pendingProps),X0(e,t,i,a,n);case 3:t:{if(Sc(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,fh(e,t),go(t,i,null,n);var r=t.memoizedState;if(i=r.cache,pa(t,Ge,i),i!==s.cache&&ch(t,[Ge],n,!0),xo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=W0(e,t,i,n);break t}else if(i!==a){a=Qn(Error(j(424)),t),Uo(a),t=W0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ei(e.firstChild),en=t,ee=!0,Aa=null,Jn=!0,n=Yg(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(us(),i===a){t=$i(e,t,n);break t}$e(e,t,i,n)}t=t.child}return t;case 26:return lc(e,t),e===null?(n=hm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ee||(n=t.type,e=t.pendingProps,i=Vc(Ta.current).createElement(n),i[tn]=t,i[En]=e,an(i,n,e),Ke(i),t.stateNode=i):t.memoizedState=hm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zf(t),e===null&&ee&&(i=t.stateNode=Rv(t.type,t.pendingProps,Ta.current),en=t,Jn=!0,a=ye,Va(t.type)?(Ph=a,ye=ei(i.firstChild)):ye=a),$e(e,t,t.pendingProps.children,n),lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((a=i=ye)&&(i=JM(i,t.type,t.pendingProps,Jn),i!==null?(t.stateNode=i,en=t,ye=ei(i.firstChild),Jn=!1,a=!0):a=!1),a||Fa(t)),Zf(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Uh(a,s)?i=null:r!==null&&Uh(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=ep(e,t,dM,null,null,n),Fo._currentValue=a),lc(e,t),$e(e,t,i,n),t.child;case 6:return e===null&&ee&&((e=n=ye)&&(n=$M(n,t.pendingProps,Jn),n!==null?(t.stateNode=n,en=t,ye=null,e=!0):e=!1),e||Fa(t)),null;case 13:return P_(e,t,n);case 4:return Sc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=hs(t,null,i,n):$e(e,t,i,n),t.child;case 11:return I0(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,pa(t,t.type,i.value),$e(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,fs(t),a=nn(a),i=i(a),t.flags|=1,$e(e,t,i,n),t.child;case 14:return H0(e,t,t.type,t.pendingProps,n);case 15:return N_(e,t,t.type,t.pendingProps,n);case 19:return z_(e,t,n);case 31:return yM(e,t,n);case 22:return O_(e,t,n,t.pendingProps);case 24:return fs(t),i=nn(Ge),e===null?(a=Kd(),a===null&&(a=xe,s=Zd(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},Jd(t),pa(t,Ge,a)):(e.lanes&n&&(fh(e,t),go(t,null,null,n),xo()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),pa(t,Ge,i)):(i=s.cache,pa(t,Ge,i),i!==a.cache&&ch(t,[Ge],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function Ai(e){e.flags|=4}function Qu(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(ov())e.flags|=8192;else throw ls=Cc,Qd}else e.flags&=-16777217}function q0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Dv(t))if(ov())e.flags|=8192;else throw ls=Cc,Qd}function Ml(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lg():536870912,e.lanes|=t,Sr|=t)}function jr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function bM(e,t,n){var i=t.pendingProps;switch(jd(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Yi(Ge),pr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ts(t)?Ai(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vu())),Se(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Ai(t),s!==null?(Se(t),q0(t,s)):(Se(t),Qu(t,a,null,i,n))):s?s!==e.memoizedState?(Ai(t),Se(t),q0(t,s)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ai(t),Se(t),Qu(t,a,e,i,n)),null;case 27:if(yc(t),n=Ta.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ai(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Se(t),null}e=yi.current,Ts(t)?M0(t):(e=Rv(a,i,n),t.stateNode=e,Ai(t))}return Se(t),null;case 5:if(yc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ai(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Se(t),null}if(s=yi.current,Ts(t))M0(t);else{var r=Vc(Ta.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[tn]=t,s[En]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(an(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ai(t)}}return Se(t),Qu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ai(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=Ta.current,Ts(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=en,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[tn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||bv(e.nodeValue,n)),e||Fa(t,!0)}else e=Vc(e).createTextNode(i),e[tn]=t,t.stateNode=e}return Se(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ts(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[tn]=t}else us(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else n=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ln(t),t):(Ln(t),null);if(t.flags&128)throw Error(j(558))}return Se(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ts(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(j(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[tn]=t}else us(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),a=!1}else a=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ln(t),t):(Ln(t),null)}return Ln(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ml(t,t.updateQueue),Se(t),null);case 4:return pr(),e===null&&yp(t.stateNode.containerInfo),Se(t),null;case 10:return Yi(t.type),Se(t),null;case 19:if(Qe(Pe),i=t.memoizedState,i===null)return Se(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)jr(i,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Dc(e),s!==null){for(t.flags|=128,jr(i,!1),e=s.updateQueue,t.updateQueue=e,Ml(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bg(n,e),n=n.sibling;return _e(Pe,Pe.current&1|2),ee&&Fi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Pn()>zc&&(t.flags|=128,a=!0,jr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Dc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ml(t,e),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ee)return Se(t),null}else 2*Pn()-i.renderingStartTime>zc&&n!==536870912&&(t.flags|=128,a=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pn(),e.sibling=null,n=Pe.current,_e(Pe,a?n&1|2:n&1),ee&&Fi(t,i.treeForkCount),e):(Se(t),null);case 22:case 23:return Ln(t),$d(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),n=t.updateQueue,n!==null&&Ml(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Qe(os),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yi(Ge),Se(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function EM(e,t){switch(jd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(Ge),pr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return yc(t),null;case 31:if(t.memoizedState!==null){if(Ln(t),t.alternate===null)throw Error(j(340));us()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ln(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));us()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Qe(Pe),null;case 4:return pr(),null;case 10:return Yi(t.type),null;case 22:case 23:return Ln(t),$d(),e!==null&&Qe(os),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yi(Ge),null;case 25:return null;default:return null}}function B_(e,t){switch(jd(t),t.tag){case 3:Yi(Ge),pr();break;case 26:case 27:case 5:yc(t);break;case 4:pr();break;case 31:t.memoizedState!==null&&Ln(t);break;case 13:Ln(t);break;case 19:Qe(Pe);break;case 10:Yi(t.type);break;case 22:case 23:Ln(t),$d(),e!==null&&Qe(os);break;case 24:Yi(Ge)}}function tl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){le(t,t.return,o)}}function Ba(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(f){le(a,l,f)}}}i=i.next}while(i!==s)}}catch(f){le(t,t.return,f)}}function I_(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{jg(t,n)}catch(i){le(e,e.return,i)}}}function H_(e,t,n){n.props=ps(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){le(e,t,i)}}function vo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){le(e,t,a)}}function vi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){le(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){le(e,t,a)}else n.current=null}function G_(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){le(e,e.return,a)}}function Ju(e,t,n){try{var i=e.stateNode;YM(i,e.type,n,t),i[En]=t}catch(a){le(e,e.return,a)}}function V_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function $u(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||V_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(i!==4&&(i===27&&Va(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Mh(e,t,n),e=e.sibling;e!==null;)Mh(e,t,n),e=e.sibling}function Pc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Va(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Pc(e,t,n),e=e.sibling;e!==null;)Pc(e,t,n),e=e.sibling}function k_(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);an(t,i,n),t[tn]=e,t[En]=n}catch(s){le(e,e.return,s)}}var Bi=!1,He=!1,tf=!1,j0=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function TM(e,t){if(e=e.containerInfo,wh=Yc,e=Dg(e),kd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,d=e,h=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=r+a),d!==s||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break e;if(h===n&&++c===a&&(o=r),h===s&&++f===i&&(l=r),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dh={focusedElem:e,selectionRange:n},Yc=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var g=ps(n.type,a);e=i.getSnapshotBeforeUpdate(g,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(v){le(n,n.return,v)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Lh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(j(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function X_(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n),i&4&&tl(5,n);break;case 1:if(Ci(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){le(n,n.return,r)}else{var a=ps(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){le(n,n.return,r)}}i&64&&I_(n),i&512&&vo(n,n.return);break;case 3:if(Ci(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{jg(e,t)}catch(r){le(n,n.return,r)}}break;case 27:t===null&&i&4&&k_(n);case 26:case 5:Ci(e,n),t===null&&i&4&&G_(n),i&512&&vo(n,n.return);break;case 12:Ci(e,n);break;case 31:Ci(e,n),i&4&&q_(e,n);break;case 13:Ci(e,n),i&4&&j_(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=OM.bind(null,n),tb(e,n))));break;case 22:if(i=n.memoizedState!==null||Bi,!i){t=t!==null&&t.memoizedState!==null||He,a=Bi;var s=He;Bi=i,(He=t)&&!s?Pi(e,n,(n.subtreeFlags&8772)!==0):Ci(e,n),Bi=a,He=s}break;case 30:break;default:Ci(e,n)}}function W_(e){var t=e.alternate;t!==null&&(e.alternate=null,W_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,Sn=!1;function Ri(e,t,n){for(n=n.child;n!==null;)Y_(e,t,n),n=n.sibling}function Y_(e,t,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 26:He||vi(n,t),Ri(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||vi(n,t);var i=Te,a=Sn;Va(n.type)&&(Te=n.stateNode,Sn=!1),Ri(e,t,n),bo(n.stateNode),Te=i,Sn=a;break;case 5:He||vi(n,t);case 6:if(i=Te,a=Sn,Te=null,Ri(e,t,n),Te=i,Sn=a,Te!==null)if(Sn)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(n.stateNode)}catch(s){le(n,t,s)}else try{Te.removeChild(n.stateNode)}catch(s){le(n,t,s)}break;case 18:Te!==null&&(Sn?(e=Te,om(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Er(e)):om(Te,n.stateNode));break;case 4:i=Te,a=Sn,Te=n.stateNode.containerInfo,Sn=!0,Ri(e,t,n),Te=i,Sn=a;break;case 0:case 11:case 14:case 15:Ba(2,n,t),He||Ba(4,n,t),Ri(e,t,n);break;case 1:He||(vi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&H_(n,t,i)),Ri(e,t,n);break;case 21:Ri(e,t,n);break;case 22:He=(i=He)||n.memoizedState!==null,Ri(e,t,n),He=i;break;default:Ri(e,t,n)}}function q_(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(n){le(t,t.return,n)}}}function j_(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(n){le(t,t.return,n)}}function AM(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new j0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new j0),t;default:throw Error(j(435,e.tag))}}function bl(e,t){var n=AM(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=PM.bind(null,e,i);i.then(a,a)}})}function gn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Va(o.type)){Te=o.stateNode,Sn=!1;break t}break;case 5:Te=o.stateNode,Sn=!1;break t;case 3:case 4:Te=o.stateNode.containerInfo,Sn=!0;break t}o=o.return}if(Te===null)throw Error(j(160));Y_(s,r,a),Te=null,Sn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Z_(t,e),t=t.sibling}var li=null;function Z_(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gn(t,e),_n(e),i&4&&(Ba(3,e,e.return),tl(3,e),Ba(5,e,e.return));break;case 1:gn(t,e),_n(e),i&512&&(He||n===null||vi(n,n.return)),i&64&&Bi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=li;if(gn(t,e),_n(e),i&512&&(He||n===null||vi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Ko]||s[tn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),an(s,i,n),s[tn]=e,Ke(s),i=s;break t;case"link":var r=pm("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),an(s,i,n),a.head.appendChild(s);break;case"meta":if(r=pm("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),an(s,i,n),a.head.appendChild(s);break;default:throw Error(j(468,i))}s[tn]=e,Ke(s),i=s}e.stateNode=i}else mm(a,e.type,e.stateNode);else e.stateNode=dm(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?mm(a,e.type,e.stateNode):dm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,n.memoizedProps)}break;case 27:gn(t,e),_n(e),i&512&&(He||n===null||vi(n,n.return)),n!==null&&i&4&&Ju(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gn(t,e),_n(e),i&512&&(He||n===null||vi(n,n.return)),e.flags&32){a=e.stateNode;try{xr(a,"")}catch(g){le(e,e.return,g)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Ju(e,a,n!==null?n.memoizedProps:a)),i&1024&&(tf=!0);break;case 6:if(gn(t,e),_n(e),i&4){if(e.stateNode===null)throw Error(j(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(g){le(e,e.return,g)}}break;case 3:if(fc=null,a=li,li=kc(t.containerInfo),gn(t,e),li=a,_n(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(g){le(e,e.return,g)}tf&&(tf=!1,K_(e));break;case 4:i=li,li=kc(e.stateNode.containerInfo),gn(t,e),_n(e),li=i;break;case 12:gn(t,e),_n(e);break;case 31:gn(t,e),_n(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,bl(e,i)));break;case 13:gn(t,e),_n(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(du=Pn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,bl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Bi,f=He;if(Bi=c||a,He=f||l,gn(t,e),He=f,Bi=c,_n(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Bi||He||es(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,h=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(g){le(l,l.return,g)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(g){le(l,l.return,g)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?lm(p,!0):lm(l.stateNode,!1)}catch(g){le(l,l.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,bl(e,n))));break;case 19:gn(t,e),_n(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,bl(e,i)));break;case 30:break;case 21:break;default:gn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(V_(i)){n=i;break}i=i.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var a=n.stateNode,s=$u(e);Pc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(xr(r,""),n.flags&=-33);var o=$u(e);Pc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=$u(e);Mh(e,c,l);break;default:throw Error(j(161))}}catch(f){le(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;K_(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ci(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)X_(e,t.alternate,t),t=t.sibling}function es(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ba(4,t,t.return),es(t);break;case 1:vi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&H_(t,t.return,n),es(t);break;case 27:bo(t.stateNode);case 26:case 5:vi(t,t.return),es(t);break;case 22:t.memoizedState===null&&es(t);break;case 30:es(t);break;default:es(t)}e=e.sibling}}function Pi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Pi(a,s,n),tl(4,s);break;case 1:if(Pi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){le(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)qg(l[a],o)}catch(c){le(i,i.return,c)}}n&&r&64&&I_(s),vo(s,s.return);break;case 27:k_(s);case 26:case 5:Pi(a,s,n),n&&i===null&&r&4&&G_(s),vo(s,s.return);break;case 12:Pi(a,s,n);break;case 31:Pi(a,s,n),n&&r&4&&q_(a,s);break;case 13:Pi(a,s,n),n&&r&4&&j_(a,s);break;case 22:s.memoizedState===null&&Pi(a,s,n),vo(s,s.return);break;case 30:break;default:Pi(a,s,n)}t=t.sibling}}function mp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Jo(n))}function xp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e))}function ai(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Q_(e,t,n,i),t=t.sibling}function Q_(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ai(e,t,n,i),a&2048&&tl(9,t);break;case 1:ai(e,t,n,i);break;case 3:ai(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jo(e)));break;case 12:if(a&2048){ai(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){le(t,t.return,l)}}else ai(e,t,n,i);break;case 31:ai(e,t,n,i);break;case 13:ai(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ai(e,t,n,i):So(e,t):s._visibility&2?ai(e,t,n,i):(s._visibility|=2,ks(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&mp(r,t);break;case 24:ai(e,t,n,i),a&2048&&xp(t.alternate,t);break;default:ai(e,t,n,i)}}function ks(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:ks(s,r,o,l,a),tl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?ks(s,r,o,l,a):So(s,r):(f._visibility|=2,ks(s,r,o,l,a)),a&&c&2048&&mp(r.alternate,r);break;case 24:ks(s,r,o,l,a),a&&c&2048&&xp(r.alternate,r);break;default:ks(s,r,o,l,a)}t=t.sibling}}function So(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:So(n,i),a&2048&&mp(i.alternate,i);break;case 24:So(n,i),a&2048&&xp(i.alternate,i);break;default:So(n,i)}t=t.sibling}}var oo=8192;function As(e,t,n){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)J_(e,t,n),e=e.sibling}function J_(e,t,n){switch(e.tag){case 26:As(e,t,n),e.flags&oo&&e.memoizedState!==null&&hb(n,li,e.memoizedState,e.memoizedProps);break;case 5:As(e,t,n);break;case 3:case 4:var i=li;li=kc(e.stateNode.containerInfo),As(e,t,n),li=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=oo,oo=16777216,As(e,t,n),oo=i):As(e,t,n));break;default:As(e,t,n)}}function $_(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,ev(i,e)}$_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tv(e),e=e.sibling}function tv(e){switch(e.tag){case 0:case 11:case 15:Zr(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Zr(e);break;case 12:Zr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,cc(e)):Zr(e);break;default:Zr(e)}}function cc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,ev(i,e)}$_(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ba(8,t,t.return),cc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,cc(t));break;default:cc(t)}e=e.sibling}}function ev(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:Ba(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Jo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ze=i;else t:for(n=e;Ze!==null;){i=Ze;var a=i.sibling,s=i.return;if(W_(i),i===n){Ze=null;break t}if(a!==null){a.return=s,Ze=a;break t}Ze=s}}}var RM={getCacheForType:function(e){var t=nn(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return nn(Ge).controller.signal}},CM=typeof WeakMap=="function"?WeakMap:Map,se=0,xe=null,Zt=null,te=0,oe=0,Un=null,ya=!1,Fr=!1,gp=!1,ta=0,Ne=0,Ia=0,cs=0,_p=0,On=0,Sr=0,yo=null,yn=null,bh=!1,du=0,nv=0,zc=1/0,Fc=null,wa=null,Xe=0,Da=null,yr=null,qi=0,Eh=0,Th=null,iv=null,Mo=0,Ah=null;function Bn(){return se&2&&te!==0?te&-te:Nt.T!==null?Sp():hg()}function av(){if(On===0)if(!(te&536870912)||ee){var e=ml;ml<<=1,!(ml&3932160)&&(ml=262144),On=e}else On=536870912;return e=Gn.current,e!==null&&(e.flags|=32),On}function Mn(e,t,n){(e===xe&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(Mr(e,0),Ma(e,te,On,!1)),Zo(e,n),(!(se&2)||e!==xe)&&(e===xe&&(!(se&2)&&(cs|=n),Ne===4&&Ma(e,te,On,!1)),Ei(e))}function sv(e,t,n){if(se&6)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||jo(e,t),a=i?UM(e,t):ef(e,t,!0),s=i;do{if(a===0){Fr&&!i&&Ma(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!wM(n)){a=ef(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=yo;var l=o.current.memoizedState.isDehydrated;if(l&&(Mr(o,r).flags|=256),r=ef(o,r,!1),r!==2){if(gp&&!l){o.errorRecoveryDisabledLanes|=s,cs|=s,a=4;break t}s=yn,yn=a,s!==null&&(yn===null?yn=s:yn.push.apply(yn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Mr(e,0),Ma(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:Ma(i,t,On,!ya);break t;case 2:yn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(a=du+300-Pn(),10<a)){if(Ma(i,t,On,!ya),nu(i,0,!0)!==0)break t;qi=t,i.timeoutHandle=Tv(Z0.bind(null,i,n,yn,Fc,bh,t,On,cs,Sr,ya,s,"Throttled",-0,0),a);break t}Z0(i,n,yn,Fc,bh,t,On,cs,Sr,ya,s,null,-0,0)}}break}while(1);Ei(e)}function Z0(e,t,n,i,a,s,r,o,l,c,f,d,h,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},J_(t,s,d);var g=(s&62914560)===s?du-Pn():(s&4194048)===s?nv-Pn():0;if(g=db(d,g),g!==null){qi=s,e.cancelPendingCommit=g(Q0.bind(null,e,t,s,n,i,a,r,o,l,f,d,null,h,p)),Ma(e,s,r,!c);return}}Q0(e,t,s,n,i,a,r,o,l)}function wM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Hn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ma(e,t,n,i){t&=~_p,t&=~cs,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Fn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&cg(e,n,t)}function pu(){return se&6?!0:(el(0,!1),!1)}function vp(){if(Zt!==null){if(oe===0)var e=Zt.return;else e=Zt,Vi=Ms=null,ap(e),cr=null,Lo=0,e=Zt;for(;e!==null;)B_(e.alternate,e),e=e.return;Zt=null}}function Mr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ZM(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),qi=0,vp(),xe=e,Zt=n=Wi(e.current,null),te=t,oe=0,Un=null,ya=!1,Fr=jo(e,t),gp=!1,Sr=On=_p=cs=Ia=Ne=0,yn=yo=null,bh=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Fn(i),s=1<<a;t|=e[a],i&=~s}return ta=t,ru(),n}function rv(e,t){Vt=null,Nt.H=Oo,t===zr||t===lu?(t=R0(),oe=3):t===Qd?(t=R0(),oe=4):oe=t===dp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Un=t,Zt===null&&(Ne=1,Nc(e,Qn(t,e.current)))}function ov(){var e=Gn.current;return e===null?!0:(te&4194048)===te?ti===null:(te&62914560)===te||te&536870912?e===ti:!1}function lv(){var e=Nt.H;return Nt.H=Oo,e===null?Oo:e}function cv(){var e=Nt.A;return Nt.A=RM,e}function Bc(){Ne=4,ya||(te&4194048)!==te&&Gn.current!==null||(Fr=!0),!(Ia&134217727)&&!(cs&134217727)||xe===null||Ma(xe,te,On,!1)}function ef(e,t,n){var i=se;se|=2;var a=lv(),s=cv();(xe!==e||te!==t)&&(Fc=null,Mr(e,t)),t=!1;var r=Ne;t:do try{if(oe!==0&&Zt!==null){var o=Zt,l=Un;switch(oe){case 8:vp(),r=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(t=!0);var c=oe;if(oe=0,Un=null,ir(e,o,l,c),n&&Fr){r=0;break t}break;default:c=oe,oe=0,Un=null,ir(e,o,l,c)}}DM(),r=Ne;break}catch(f){rv(e,f)}while(1);return t&&e.shellSuspendCounter++,Vi=Ms=null,se=i,Nt.H=a,Nt.A=s,Zt===null&&(xe=null,te=0,ru()),r}function DM(){for(;Zt!==null;)uv(Zt)}function UM(e,t){var n=se;se|=2;var i=lv(),a=cv();xe!==e||te!==t?(Fc=null,zc=Pn()+500,Mr(e,t)):Fr=jo(e,t);t:do try{if(oe!==0&&Zt!==null){t=Zt;var s=Un;e:switch(oe){case 1:oe=0,Un=null,ir(e,t,s,1);break;case 2:case 9:if(A0(s)){oe=0,Un=null,K0(t);break}t=function(){oe!==2&&oe!==9||xe!==e||(oe=7),Ei(e)},s.then(t,t);break t;case 3:oe=7;break t;case 4:oe=5;break t;case 7:A0(s)?(oe=0,Un=null,K0(t)):(oe=0,Un=null,ir(e,t,s,7));break;case 5:var r=null;switch(Zt.tag){case 26:r=Zt.memoizedState;case 5:case 27:var o=Zt;if(r?Dv(r):o.stateNode.complete){oe=0,Un=null;var l=o.sibling;if(l!==null)Zt=l;else{var c=o.return;c!==null?(Zt=c,mu(c)):Zt=null}break e}}oe=0,Un=null,ir(e,t,s,5);break;case 6:oe=0,Un=null,ir(e,t,s,6);break;case 8:vp(),Ne=6;break t;default:throw Error(j(462))}}LM();break}catch(f){rv(e,f)}while(1);return Vi=Ms=null,Nt.H=i,Nt.A=a,se=n,Zt!==null?0:(xe=null,te=0,ru(),Ne)}function LM(){for(;Zt!==null&&!ey();)uv(Zt)}function uv(e){var t=F_(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?mu(e):Zt=t}function K0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=k0(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=k0(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:ap(t);default:B_(n,t),t=Zt=Bg(t,ta),t=F_(n,t,ta)}e.memoizedProps=e.pendingProps,t===null?mu(e):Zt=t}function ir(e,t,n,i){Vi=Ms=null,ap(t),cr=null,Lo=0;var a=t.return;try{if(SM(e,a,t,n,te)){Ne=1,Nc(e,Qn(n,e.current)),Zt=null;return}}catch(s){if(a!==null)throw Zt=a,s;Ne=1,Nc(e,Qn(n,e.current)),Zt=null;return}t.flags&32768?(ee||i===1?e=!0:Fr||te&536870912?e=!1:(ya=e=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),fv(t,e)):mu(t)}function mu(e){var t=e;do{if(t.flags&32768){fv(t,ya);return}e=t.return;var n=bM(t.alternate,t,ta);if(n!==null){Zt=n;return}if(t=t.sibling,t!==null){Zt=t;return}Zt=t=e}while(t!==null);Ne===0&&(Ne=5)}function fv(e,t){do{var n=EM(e.alternate,e);if(n!==null){n.flags&=32767,Zt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zt=e;return}Zt=e=n}while(e!==null);Ne=6,Zt=null}function Q0(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do xu();while(Xe!==0);if(se&6)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));if(s=t.lanes|t.childLanes,s|=Xd,fy(e,n,s,r,o,l),e===xe&&(Zt=xe=null,te=0),yr=t,Da=e,qi=n,Eh=s,Th=a,iv=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,zM(Mc,function(){return xv(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Nt.T,Nt.T=null,a=re.p,re.p=2,r=se,se|=4;try{TM(e,t,n)}finally{se=r,re.p=a,Nt.T=i}}Xe=1,hv(),dv(),pv()}}function hv(){if(Xe===1){Xe=0;var e=Da,t=yr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Nt.T,Nt.T=null;var i=re.p;re.p=2;var a=se;se|=4;try{Z_(t,e);var s=Dh,r=Dg(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&wg(o.ownerDocument.documentElement,o)){if(l!==null&&kd(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),g=o.textContent.length,v=Math.min(l.start,g),m=l.end===void 0?v:Math.min(l.end,g);!p.extend&&v>m&&(r=m,m=v,v=r);var u=v0(o,v),x=v0(o,m);if(u&&x&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),v>m?(p.addRange(_),p.extend(x.node,x.offset)):(_.setEnd(x.node,x.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Yc=!!wh,Dh=wh=null}finally{se=a,re.p=i,Nt.T=n}}e.current=t,Xe=2}}function dv(){if(Xe===2){Xe=0;var e=Da,t=yr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Nt.T,Nt.T=null;var i=re.p;re.p=2;var a=se;se|=4;try{X_(e,t.alternate,t)}finally{se=a,re.p=i,Nt.T=n}}Xe=3}}function pv(){if(Xe===4||Xe===3){Xe=0,ny();var e=Da,t=yr,n=qi,i=iv;t.subtreeFlags&10256||t.flags&10256?Xe=5:(Xe=0,yr=Da=null,mv(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(wa=null),zd(n),t=t.stateNode,zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(qo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Nt.T,a=re.p,re.p=2,Nt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Nt.T=t,re.p=a}}qi&3&&xu(),Ei(e),a=e.pendingLanes,n&261930&&a&42?e===Ah?Mo++:(Mo=0,Ah=e):Mo=0,el(0,!1)}}function mv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jo(t)))}function xu(){return hv(),dv(),pv(),xv()}function xv(){if(Xe!==5)return!1;var e=Da,t=Eh;Eh=0;var n=zd(qi),i=Nt.T,a=re.p;try{re.p=32>n?32:n,Nt.T=null,n=Th,Th=null;var s=Da,r=qi;if(Xe=0,yr=Da=null,qi=0,se&6)throw Error(j(331));var o=se;if(se|=4,tv(s.current),Q_(s,s.current,r,n),se=o,el(0,!1),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(qo,s)}catch{}return!0}finally{re.p=a,Nt.T=i,mv(e,t)}}function J0(e,t,n){t=Qn(n,t),t=vh(e.stateNode,t,2),e=Ca(e,t,2),e!==null&&(Zo(e,2),Ei(e))}function le(e,t,n){if(e.tag===3)J0(e,e,n);else for(;t!==null;){if(t.tag===3){J0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wa===null||!wa.has(i))){e=Qn(n,e),n=U_(2),i=Ca(t,n,2),i!==null&&(L_(n,i,t,e),Zo(i,2),Ei(i));break}}t=t.return}}function nf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new CM;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(gp=!0,a.add(n),e=NM.bind(null,e,t,n),t.then(e,e))}function NM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&(te&n)===n&&(Ne===4||Ne===3&&(te&62914560)===te&&300>Pn()-du?!(se&2)&&Mr(e,0):_p|=n,Sr===te&&(Sr=0)),Ei(e)}function gv(e,t){t===0&&(t=lg()),e=ys(e,t),e!==null&&(Zo(e,t),Ei(e))}function OM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gv(e,n)}function PM(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),gv(e,n)}function zM(e,t){return Od(e,t)}var Ic=null,Xs=null,Rh=!1,Hc=!1,af=!1,ba=0;function Ei(e){e!==Xs&&e.next===null&&(Xs===null?Ic=Xs=e:Xs=Xs.next=e),Hc=!0,Rh||(Rh=!0,BM())}function el(e,t){if(!af&&Hc){af=!0;do for(var n=!1,i=Ic;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Fn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,$0(i,s))}else s=te,s=nu(i,i===xe?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||jo(i,s)||(n=!0,$0(i,s));i=i.next}while(n);af=!1}}function FM(){_v()}function _v(){Hc=Rh=!1;var e=0;ba!==0&&jM()&&(e=ba);for(var t=Pn(),n=null,i=Ic;i!==null;){var a=i.next,s=vv(i,t);s===0?(i.next=null,n===null?Ic=a:n.next=a,a===null&&(Xs=n)):(n=i,(e!==0||s&3)&&(Hc=!0)),i=a}Xe!==0&&Xe!==5||el(e,!1),ba!==0&&(ba=0)}function vv(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Fn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=uy(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=xe,n=te,n=nu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Uu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||jo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Uu(i),zd(n)){case 2:case 8:n=rg;break;case 32:n=Mc;break;case 268435456:n=og;break;default:n=Mc}return i=Sv.bind(null,e),n=Od(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Uu(i),e.callbackPriority=2,e.callbackNode=null,2}function Sv(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xu()&&e.callbackNode!==n)return null;var i=te;return i=nu(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(sv(e,i,t),vv(e,Pn()),e.callbackNode!=null&&e.callbackNode===n?Sv.bind(null,e):null)}function $0(e,t){if(xu())return null;sv(e,t,!0)}function BM(){KM(function(){se&6?Od(sg,FM):_v()})}function Sp(){if(ba===0){var e=gr;e===0&&(e=pl,pl<<=1,!(pl&261888)&&(pl=256)),ba=e}return ba}function tm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tc(""+e)}function em(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function IM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=tm((a[En]||null).action),r=i.submitter;r&&(t=(t=r[En]||null)?tm(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new iu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ba!==0){var l=r?em(a,r):new FormData(a);gh(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?em(a,r):new FormData(a),gh(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var sf=0;sf<sh.length;sf++){var rf=sh[sf],HM=rf.toLowerCase(),GM=rf[0].toUpperCase()+rf.slice(1);di(HM,"on"+GM)}di(Lg,"onAnimationEnd");di(Ng,"onAnimationIteration");di(Og,"onAnimationStart");di("dblclick","onDoubleClick");di("focusin","onFocus");di("focusout","onBlur");di(iM,"onTransitionRun");di(aM,"onTransitionStart");di(sM,"onTransitionCancel");di(Pg,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function yv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){Ec(f)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){Ec(f)}a.currentTarget=null,s=l}}}}function jt(e,t){var n=t[Qf];n===void 0&&(n=t[Qf]=new Set);var i=e+"__bubble";n.has(i)||(Mv(t,e,2,!1),n.add(i))}function of(e,t,n){var i=0;t&&(i|=4),Mv(n,e,i,t)}var El="_reactListening"+Math.random().toString(36).slice(2);function yp(e){if(!e[El]){e[El]=!0,dg.forEach(function(n){n!=="selectionchange"&&(VM.has(n)||of(n,!1,e),of(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[El]||(t[El]=!0,of("selectionchange",!1,t))}}function Mv(e,t,n,i){switch(Pv(t)){case 2:var a=xb;break;case 8:a=gb;break;default:a=Tp}n=a.bind(null,t,n,e),a=void 0,!nh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function lf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=js(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}yg(function(){var c=s,f=Id(n),d=[];t:{var h=zg.get(e);if(h!==void 0){var p=iu,g=e;switch(e){case"keypress":if(nc(n)===0)break t;case"keydown":case"keyup":p=Py;break;case"focusin":g="focus",p=zu;break;case"focusout":g="blur",p=zu;break;case"beforeblur":case"afterblur":p=zu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=c0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=By;break;case Lg:case Ng:case Og:p=Ay;break;case Pg:p=Hy;break;case"scroll":case"scrollend":p=yy;break;case"wheel":p=Vy;break;case"copy":case"cut":case"paste":p=Cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=f0;break;case"toggle":case"beforetoggle":p=Xy}var v=(t&4)!==0,m=!v&&(e==="scroll"||e==="scrollend"),u=v?h!==null?h+"Capture":null:h;v=[];for(var x=c,_;x!==null;){var y=x;if(_=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||_===null||u===null||(y=Ro(x,u),y!=null&&v.push(zo(x,y,_))),m)break;x=x.return}0<v.length&&(h=new p(h,g,null,n,f),d.push({event:h,listeners:v}))}}if(!(t&7)){t:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==eh&&(g=n.relatedTarget||n.fromElement)&&(js(g)||g[Nr]))break t;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?js(g):null,g!==null&&(m=Yo(g),v=g.tag,g!==m||v!==5&&v!==27&&v!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=c0,y="onMouseLeave",u="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(v=f0,y="onPointerLeave",u="onPointerEnter",x="pointer"),m=p==null?h:so(p),_=g==null?h:so(g),h=new v(y,x+"leave",p,n,f),h.target=m,h.relatedTarget=_,y=null,js(f)===c&&(v=new v(u,x+"enter",g,n,f),v.target=_,v.relatedTarget=m,y=v),m=y,p&&g)e:{for(v=kM,u=p,x=g,_=0,y=u;y;y=v(y))_++;y=0;for(var C=x;C;C=v(C))y++;for(;0<_-y;)u=v(u),_--;for(;0<y-_;)x=v(x),y--;for(;_--;){if(u===x||x!==null&&u===x.alternate){v=u;break e}u=v(u),x=v(x)}v=null}else v=null;p!==null&&nm(d,h,p,v,!1),g!==null&&m!==null&&nm(d,m,g,v,!0)}}t:{if(h=c?so(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=m0;else if(p0(h))if(Rg)T=tM;else{T=Jy;var R=Qy}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Bd(c.elementType)&&(T=m0):T=$y;if(T&&(T=T(e,c))){Ag(d,T,n,f);break t}R&&R(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&th(h,"number",h.value)}switch(R=c?so(c):window,e){case"focusin":(p0(R)||R.contentEditable==="true")&&(Qs=R,ih=c,ho=null);break;case"focusout":ho=ih=Qs=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,S0(d,n,f);break;case"selectionchange":if(nM)break;case"keydown":case"keyup":S0(d,n,f)}var L;if(Vd)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else Ks?Eg(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(bg&&n.locale!=="ko"&&(Ks||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ks&&(L=Mg()):(Sa=f,Hd="value"in Sa?Sa.value:Sa.textContent,Ks=!0)),R=Gc(c,E),0<R.length&&(E=new u0(E,e,null,n,f),d.push({event:E,listeners:R}),L?E.data=L:(L=Tg(n),L!==null&&(E.data=L)))),(L=Yy?qy(e,n):jy(e,n))&&(E=Gc(c,"onBeforeInput"),0<E.length&&(R=new u0("onBeforeInput","beforeinput",null,n,f),d.push({event:R,listeners:E}),R.data=L)),IM(d,e,c,n,f)}yv(d,t)})}function zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Ro(e,n),a!=null&&i.unshift(zo(e,a,s)),a=Ro(e,t),a!=null&&i.push(zo(e,a,s))),e.tag===3)return i;e=e.return}return[]}function kM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nm(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Ro(n,s),c!=null&&r.unshift(zo(n,c,l))):a||(c=Ro(n,s),c!=null&&r.push(zo(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var XM=/\r\n?/g,WM=/\u0000|\uFFFD/g;function im(e){return(typeof e=="string"?e:""+e).replace(XM,`
`).replace(WM,"")}function bv(e,t){return t=im(t),im(e)===t}function he(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||xr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&xr(e,""+i);break;case"className":gl(e,"class",i);break;case"tabIndex":gl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(e,n,i);break;case"style":Sg(e,i,s);break;case"data":if(t!=="object"){gl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=tc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",a.name,a,null),he(e,t,"formEncType",a.formEncType,a,null),he(e,t,"formMethod",a.formMethod,a,null),he(e,t,"formTarget",a.formTarget,a,null)):(he(e,t,"encType",a.encType,a,null),he(e,t,"method",a.method,a,null),he(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=tc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Gi);break;case"onScroll":i!=null&&jt("scroll",e);break;case"onScrollEnd":i!=null&&jt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=tc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":jt("beforetoggle",e),jt("toggle",e),$l(e,"popover",i);break;case"xlinkActuate":Ti(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ti(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ti(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ti(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ti(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ti(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ti(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ti(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ti(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":$l(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=vy.get(n)||n,$l(e,n,i))}}function Ch(e,t,n,i,a,s){switch(n){case"style":Sg(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"children":typeof i=="string"?xr(e,i):(typeof i=="number"||typeof i=="bigint")&&xr(e,""+i);break;case"onScroll":i!=null&&jt("scroll",e);break;case"onScrollEnd":i!=null&&jt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pg.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[En]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):$l(e,n,i)}}}function an(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":jt("error",e),jt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:he(e,t,s,r,n,null)}}a&&he(e,t,"srcSet",n.srcSet,n,null),i&&he(e,t,"src",n.src,n,null);return;case"input":jt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,t));break;default:he(e,t,i,f,n,null)}}gg(e,s,o,l,c,r,a,!1);return;case"select":jt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:he(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?rr(e,!!i,t,!1):n!=null&&rr(e,!!i,n,!0);return;case"textarea":jt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:he(e,t,r,o,n,null)}vg(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:he(e,t,l,i,n,null)}return;case"dialog":jt("beforetoggle",e),jt("toggle",e),jt("cancel",e),jt("close",e);break;case"iframe":case"object":jt("load",e);break;case"video":case"audio":for(i=0;i<Po.length;i++)jt(Po[i],e);break;case"image":jt("error",e),jt("load",e);break;case"details":jt("toggle",e);break;case"embed":case"source":case"link":jt("error",e),jt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:he(e,t,c,i,n,null)}return;default:if(Bd(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Ch(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&he(e,t,o,i,n,null))}function YM(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||he(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":f=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,t));break;default:p!==d&&he(e,t,h,p,i,d)}}$f(e,r,o,l,c,f,s,a);return;case"select":p=r=o=h=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||he(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":h=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&he(e,t,a,s,i,l)}t=o,n=r,i=p,h!=null?rr(e,!!n,h,!1):!!i!=!!n&&(t!=null?rr(e,!!n,t,!0):rr(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:he(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":h=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(j(91));break;default:a!==s&&he(e,t,r,a,i,s)}_g(e,h,p);return;case"option":for(var g in n)if(h=n[g],n.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:he(e,t,g,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:he(e,t,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in n)h=n[v],n.hasOwnProperty(v)&&h!=null&&!i.hasOwnProperty(v)&&he(e,t,v,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(j(137,t));break;default:he(e,t,c,h,i,p)}return;default:if(Bd(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Ch(e,t,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||Ch(e,t,f,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&he(e,t,u,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||he(e,t,d,h,i,p)}function am(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&am(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&am(d)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wh=null,Dh=null;function Vc(e){return e.nodeType===9?e:e.ownerDocument}function sm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ev(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Uh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cf=null;function jM(){var e=window.event;return e&&e.type==="popstate"?e===cf?!1:(cf=e,!0):(cf=null,!1)}var Tv=typeof setTimeout=="function"?setTimeout:void 0,ZM=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,KM=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(e){return rm.resolve(null).then(e).catch(QM)}:Tv;function QM(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function om(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Er(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")bo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,bo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Ko]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&bo(e.ownerDocument.body);n=a}while(n);Er(t)}function lm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Lh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Lh(n),Fd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function JM(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ko])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function $M(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ei(e.nextSibling),e===null))return null;return e}function Av(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ei(e.nextSibling),e===null))return null;return e}function Nh(e){return e.data==="$?"||e.data==="$~"}function Oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ei(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ph=null;function cm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ei(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Rv(e,t,n){switch(t=Vc(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function bo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fd(e)}var ni=new Map,fm=new Set;function kc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=re.d;re.d={f:eb,r:nb,D:ib,C:ab,L:sb,m:rb,X:lb,S:ob,M:cb};function eb(){var e=aa.f(),t=pu();return e||t}function nb(e){var t=Or(e);t!==null&&t.tag===5&&t.type==="form"?S_(t):aa.r(e)}var Br=typeof document>"u"?null:document;function Cv(e,t,n){var i=Br;if(i&&typeof t=="string"&&t){var a=Kn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),fm.has(a)||(fm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),an(t,"link",e),Ke(t),i.head.appendChild(t)))}}function ib(e){aa.D(e),Cv("dns-prefetch",e,null)}function ab(e,t){aa.C(e,t),Cv("preconnect",e,t)}function sb(e,t,n){aa.L(e,t,n);var i=Br;if(i&&e&&t){var a='link[rel="preload"][as="'+Kn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Kn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Kn(n.imageSizes)+'"]')):a+='[href="'+Kn(e)+'"]';var s=a;switch(t){case"style":s=br(e);break;case"script":s=Ir(e)}ni.has(s)||(e=be({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ni.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(nl(s))||t==="script"&&i.querySelector(il(s))||(t=i.createElement("link"),an(t,"link",e),Ke(t),i.head.appendChild(t)))}}function rb(e,t){aa.m(e,t);var n=Br;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Kn(i)+'"][href="'+Kn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ir(e)}if(!ni.has(s)&&(e=be({rel:"modulepreload",href:e},t),ni.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(il(s)))return}i=n.createElement("link"),an(i,"link",e),Ke(i),n.head.appendChild(i)}}}function ob(e,t,n){aa.S(e,t,n);var i=Br;if(i&&e){var a=sr(i).hoistableStyles,s=br(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(nl(s)))o.loading=5;else{e=be({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ni.get(s))&&Mp(e,n);var l=r=i.createElement("link");Ke(l),an(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,uc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function lb(e,t){aa.X(e,t);var n=Br;if(n&&e){var i=sr(n).hoistableScripts,a=Ir(e),s=i.get(a);s||(s=n.querySelector(il(a)),s||(e=be({src:e,async:!0},t),(t=ni.get(a))&&bp(e,t),s=n.createElement("script"),Ke(s),an(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function cb(e,t){aa.M(e,t);var n=Br;if(n&&e){var i=sr(n).hoistableScripts,a=Ir(e),s=i.get(a);s||(s=n.querySelector(il(a)),s||(e=be({src:e,async:!0,type:"module"},t),(t=ni.get(a))&&bp(e,t),s=n.createElement("script"),Ke(s),an(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function hm(e,t,n,i){var a=(a=Ta.current)?kc(a):null;if(!a)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=br(n.href),n=sr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=br(n.href);var s=sr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(nl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ni.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ni.set(e,n),s||ub(a,e,n,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ir(n),n=sr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function br(e){return'href="'+Kn(e)+'"'}function nl(e){return'link[rel="stylesheet"]['+e+"]"}function wv(e){return be({},e,{"data-precedence":e.precedence,precedence:null})}function ub(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),an(t,"link",n),Ke(t),e.head.appendChild(t))}function Ir(e){return'[src="'+Kn(e)+'"]'}function il(e){return"script[async]"+e}function dm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Kn(n.href)+'"]');if(i)return t.instance=i,Ke(i),i;var a=be({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ke(i),an(i,"style",a),uc(i,n.precedence,e),t.instance=i;case"stylesheet":a=br(n.href);var s=e.querySelector(nl(a));if(s)return t.state.loading|=4,t.instance=s,Ke(s),s;i=wv(n),(a=ni.get(a))&&Mp(i,a),s=(e.ownerDocument||e).createElement("link"),Ke(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),an(s,"link",i),t.state.loading|=4,uc(s,n.precedence,e),t.instance=s;case"script":return s=Ir(n.src),(a=e.querySelector(il(s)))?(t.instance=a,Ke(a),a):(i=n,(a=ni.get(s))&&(i=be({},n),bp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ke(a),an(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,uc(i,n.precedence,e));return t.instance}function uc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Mp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var fc=null;function pm(e,t,n){if(fc===null){var i=new Map,a=fc=new Map;a.set(n,i)}else a=fc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Ko]||s[tn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function mm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function fb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Dv(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function hb(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=br(i.href),s=t.querySelector(nl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Ke(s);return}s=t.ownerDocument||t,i=wv(i),(a=ni.get(a))&&Mp(i,a),s=s.createElement("link"),Ke(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),an(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Xc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var uf=0;function db(e,t){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&uf===0&&(uf=62500*qM());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>uf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wc=null;function hc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wc=new Map,t.forEach(pb,e),Wc=null,Xc.call(e))}function pb(e,t){if(!(t.state.loading&4)){var n=Wc.get(e);if(n)var i=n.get(null);else{n=new Map,Wc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Xc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Fo={$$typeof:Hi,Provider:null,Consumer:null,_currentValue:ss,_currentValue2:ss,_threadCount:0};function mb(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.hiddenUpdates=Lu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Uv(e,t,n,i,a,s,r,o,l,c,f,d){return e=new mb(e,t,n,r,l,c,f,d,o),t=1,s===!0&&(t|=24),s=Nn(3,null,null,t),e.current=s,s.stateNode=e,t=Zd(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Jd(s),e}function Lv(e){return e?(e=tr,e):tr}function Nv(e,t,n,i,a,s){a=Lv(a),i.context===null?i.context=a:i.pendingContext=a,i=Ra(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ca(e,i,t),n!==null&&(Mn(n,e,t),mo(n,e,t))}function xm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ep(e,t){xm(e,t),(e=e.alternate)&&xm(e,t)}function Ov(e){if(e.tag===13||e.tag===31){var t=ys(e,67108864);t!==null&&Mn(t,e,67108864),Ep(e,67108864)}}function gm(e){if(e.tag===13||e.tag===31){var t=Bn();t=Pd(t);var n=ys(e,t);n!==null&&Mn(n,e,t),Ep(e,t)}}var Yc=!0;function xb(e,t,n,i){var a=Nt.T;Nt.T=null;var s=re.p;try{re.p=2,Tp(e,t,n,i)}finally{re.p=s,Nt.T=a}}function gb(e,t,n,i){var a=Nt.T;Nt.T=null;var s=re.p;try{re.p=8,Tp(e,t,n,i)}finally{re.p=s,Nt.T=a}}function Tp(e,t,n,i){if(Yc){var a=zh(i);if(a===null)lf(e,t,i,qc,n),_m(e,i);else if(vb(a,e,t,n,i))i.stopPropagation();else if(_m(e,i),t&4&&-1<_b.indexOf(e)){for(;a!==null;){var s=Or(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=$a(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Fn(r);o.entanglements[1]|=l,r&=~l}Ei(s),!(se&6)&&(zc=Pn()+500,el(0,!1))}}break;case 31:case 13:o=ys(s,2),o!==null&&Mn(o,s,2),pu(),Ep(s,2)}if(s=zh(i),s===null&&lf(e,t,i,qc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else lf(e,t,i,null,n)}}function zh(e){return e=Id(e),Ap(e)}var qc=null;function Ap(e){if(qc=null,e=js(e),e!==null){var t=Yo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=tg(t),e!==null)return e;e=null}else if(n===31){if(e=eg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qc=e,null}function Pv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(iy()){case sg:return 2;case rg:return 8;case Mc:case ay:return 32;case og:return 268435456;default:return 32}default:return 32}}var Fh=!1,Ua=null,La=null,Na=null,Bo=new Map,Io=new Map,ga=[],_b="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _m(e,t){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(t.pointerId)}}function Kr(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Or(t),t!==null&&Ov(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function vb(e,t,n,i,a){switch(t){case"focusin":return Ua=Kr(Ua,e,t,n,i,a),!0;case"dragenter":return La=Kr(La,e,t,n,i,a),!0;case"mouseover":return Na=Kr(Na,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Bo.set(s,Kr(Bo.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Io.set(s,Kr(Io.get(s)||null,e,t,n,i,a)),!0}return!1}function zv(e){var t=js(e.target);if(t!==null){var n=Yo(t);if(n!==null){if(t=n.tag,t===13){if(t=tg(n),t!==null){e.blockedOn=t,n0(e.priority,function(){gm(n)});return}}else if(t===31){if(t=eg(n),t!==null){e.blockedOn=t,n0(e.priority,function(){gm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);eh=i,n.target.dispatchEvent(i),eh=null}else return t=Or(n),t!==null&&Ov(t),e.blockedOn=n,!1;t.shift()}return!0}function vm(e,t,n){dc(e)&&n.delete(t)}function Sb(){Fh=!1,Ua!==null&&dc(Ua)&&(Ua=null),La!==null&&dc(La)&&(La=null),Na!==null&&dc(Na)&&(Na=null),Bo.forEach(vm),Io.forEach(vm)}function Tl(e,t){e.blockedOn===t&&(e.blockedOn=null,Fh||(Fh=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Sb)))}var Al=null;function Sm(e){Al!==e&&(Al=e,We.unstable_scheduleCallback(We.unstable_NormalPriority,function(){Al===e&&(Al=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Ap(i||n)===null)continue;break}var s=Or(n);s!==null&&(e.splice(t,3),t-=3,gh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Er(e){function t(l){return Tl(l,e)}Ua!==null&&Tl(Ua,e),La!==null&&Tl(La,e),Na!==null&&Tl(Na,e),Bo.forEach(t),Io.forEach(t);for(var n=0;n<ga.length;n++){var i=ga[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ga.length&&(n=ga[0],n.blockedOn===null);)zv(n),n.blockedOn===null&&ga.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[En]||null;if(typeof s=="function")r||Sm(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[En]||null)o=r.formAction;else if(Ap(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Sm(n)}}}function Fv(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Rp(e){this._internalRoot=e}gu.prototype.render=Rp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=Bn();Nv(n,i,e,t,null,null)};gu.prototype.unmount=Rp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nv(e.current,2,null,e,null,null),pu(),t[Nr]=null}};function gu(e){this._internalRoot=e}gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=hg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ga.length&&t!==0&&t<ga[n].priority;n++);ga.splice(n,0,e),n===0&&zv(e)}};var ym=Jx.version;if(ym!=="19.2.1")throw Error(j(527,ym,"19.2.1"));re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=KS(t),e=e!==null?ng(e):null,e=e===null?null:e.stateNode,e};var yb={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:Nt,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{qo=Rl.inject(yb),zn=Rl}catch{}}tu.createRoot=function(e,t){if(!$x(e))throw Error(j(299));var n=!1,i="",a=C_,s=w_,r=D_;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Uv(e,1,!1,null,null,n,i,null,a,s,r,Fv),e[Nr]=t.current,yp(e),new Rp(t)};tu.hydrateRoot=function(e,t,n){if(!$x(e))throw Error(j(299));var i=!1,a="",s=C_,r=w_,o=D_,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Uv(e,1,!0,t,n??null,i,a,l,s,r,o,Fv),t.context=Lv(null),n=t.current,i=Bn(),i=Pd(i),a=Ra(i),a.callback=null,Ca(n,a,i),n=i,t.current.lanes=n,Zo(t,n),Ei(t),e[Nr]=t.current,yp(e),new gu(t)};tu.version="19.2.1";function Bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bv)}catch(e){console.error(e)}}Bv(),Ix.exports=tu;var Mb=Ix.exports;const _u="http://133.242.230.61:8000";async function bb(e,t){const n=await fetch(`${_u}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})});if(n.status===409)throw new Error("USER_ALREADY_EXISTS");if(!n.ok)throw new Error("network error");const i=await n.json();if(!i.ok)throw new Error("register failed");return i}async function Eb(e,t){const n=new URLSearchParams({username:e,password:t}),i=await fetch(`${_u}/auth/token`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n});if(!i.ok)throw new Error("login failed");return i.json()}async function Tb(e,t,n){console.log(t,n);const{robot_dat:i}=await Rb(e,t);return await Ab(e,i,n)}async function Ab(e,t,n){const i=[],a={robot_dat:t,steps:[{targets:n.map(c=>({joint_id:c.jointIndex,x:c.targetPosition[0],y:c.targetPosition[1],z:c.targetPosition[2]}))}]},s=await fetch(`${_u}/solve`,{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify(a)});if(!s.ok)throw new Error(`Network error: ${s.status}`);const r=s.body.getReader(),o=new TextDecoder;let l="";for(;;){const{value:c,done:f}=await r.read();if(f)break;l+=o.decode(c,{stream:!0});const d=l.split(`
`);l=d.pop();for(const h of d){if(!h.trim())continue;const p=JSON.parse(h);p.type==="step"&&i.push(p.joints),Mm(p)}}if(l){const c=JSON.parse(l);c.type==="step"&&i.push(c.joints),Mm(c)}return i}function Mm(e){switch(e.type){case"start":break;case"init":e.joints;break;case"ping":break;case"step":break;case"end":break;case"error":const{message:t,log_path:n}=e;throw new Error(t)}}async function Rb(e,t){const n=[];n.push(t.length.toString());for(let l=0;l<t.length;l++){n.push(`#${l}`);const c=t[l];n.push(`${c[0].toFixed(6)}	${c[1].toFixed(6)}	${c[2].toFixed(6)}`),n.push("0.0	0.0	1.0"),n.push("-1.570796327	1.570796327");const f=l<t.length-1?l+1:-1;n.push(f>=0?`${f}	-1`:"-1");const d=l>0?l-1:-1;n.push(d>=0?`${d}	-1`:"-1"),n.push("0.01	0.01"),n.push("0x00")}const i=n.join(`
`),a=new File([i],"joints.dat",{type:"text/plain"}),s=new FormData;s.append("file",a);const r=await fetch(`${_u}/robots/upload`,{method:"POST",headers:{Authorization:`Bearer ${e}`},body:s});if(!r.ok)throw new Error("UPLOAD_FAILED");const o=await r.json();if(!o.ok)throw new Error("solve failed");return o}const Cb=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";function wb(){const e=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",[t,n]=Mt.useState(e);return Mt.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{n(i.matches?"dark":"light")};return i.addEventListener("change",a),()=>i.removeEventListener("change",a)},[]),t}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ub=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,i)=>i?i.toUpperCase():n.toLowerCase()),bm=e=>{const t=Ub(e);return t.charAt(0).toUpperCase()+t.slice(1)},Iv=(...e)=>e.filter((t,n,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===n).join(" ").trim(),Lb=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=Mt.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a="",children:s,iconNode:r,...o},l)=>Mt.createElement("svg",{ref:l,...Nb,width:t,height:t,stroke:e,strokeWidth:i?Number(n)*24/Number(t):n,className:Iv("lucide",a),...!s&&!Lb(o)&&{"aria-hidden":"true"},...o},[...r.map(([c,f])=>Mt.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=(e,t)=>{const n=Mt.forwardRef(({className:i,...a},s)=>Mt.createElement(Ob,{ref:s,iconNode:t,className:Iv(`lucide-${Db(bm(e))}`,`lucide-${e}`,i),...a}));return n.displayName=bm(e),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],zb=al("chevron-left",Pb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Bb=al("chevron-right",Fb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M5 12h14",key:"1ays0h"}]],Hv=al("minus",Ib);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Gv=al("plus",Hb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vb=al("settings",Gb);function Em(e,t,n){Jl.useEffect(()=>{if(!t)return;function i(s){e.current&&!e.current.contains(s.target)&&n()}function a(s){s.key==="Escape"&&n()}return document.addEventListener("mousedown",i),document.addEventListener("keydown",a),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("keydown",a)}},[t])}function kb({isLoggedIn:e,username:t,onLogin:n,onLogout:i,appearance:a,onToggleAppearance:s}){const[r,o]=Mt.useState(!1),[l,c]=Mt.useState(!1),f=Mt.useRef(null),d=Mt.useRef(null),h=()=>{c(g=>!g)},p=()=>{c(!1),i()};return Em(d,l,()=>c(!1)),Em(f,r,()=>o(!1)),J.jsxs("header",{id:"app-header",children:[J.jsx("div",{id:"app-header-left",children:J.jsx("h1",{children:"関節独立型運動学計算Webアプリ"})}),J.jsxs("div",{id:"app-header-right",children:[e?J.jsxs("div",{className:"dropdown",ref:d,children:[J.jsx("button",{className:`dropdown-button ${l?"active":""}`,onClick:h,children:t}),l&&J.jsx("div",{className:"dropdown-menu",children:J.jsx("button",{className:"logout-button",onClick:p,children:"ログアウト"})})]}):J.jsx("button",{className:"dropdown-button",onClick:n,children:"ログイン"}),J.jsxs("div",{className:"dropdown",ref:f,children:[J.jsx("button",{type:"button",className:`dropdown-button ${r?"active":""}`,"aria-label":"設定",onClick:()=>o(g=>!g),children:J.jsx(Vb,{})}),r&&J.jsx("div",{className:"dropdown-menu",children:J.jsxs("div",{className:"menu-item",children:[J.jsx("span",{children:"ダークモード"}),J.jsxs("label",{className:"toggle",children:[J.jsx("input",{type:"checkbox",checked:a==="dark",onChange:s}),J.jsx("span",{className:"slider round"})]})]})})]})]})]})}function Xb({onCancel:e,onRegister:t,onLogin:n}){const[i,a]=Jl.useState("login"),[s,r]=Jl.useState(""),[o,l]=Jl.useState(""),c=f=>{f.preventDefault(),i==="login"?n(s,o):t(s,o)};return J.jsx("div",{className:"sheet-overlay",children:J.jsxs("div",{className:"sheet",children:[J.jsx("h2",{children:i==="login"?"ログイン":"新規作成"}),J.jsxs("form",{onSubmit:c,children:[J.jsxs("div",{className:"section",children:[J.jsx("label",{children:"ユーザー名"}),J.jsx("input",{type:"text",value:s,onChange:f=>r(f.target.value),required:!0,placeholder:"ユーザー名"})]}),J.jsxs("div",{className:"section",children:[J.jsx("label",{children:"パスワード"}),J.jsx("input",{type:"password",value:o,onChange:f=>l(f.target.value),required:!0,placeholder:"パスワード"})]}),J.jsx("div",{className:"login-modal-switch",children:i==="login"?J.jsx("button",{type:"button",className:"link-button",onClick:()=>a("register"),children:"アカウントをお持ちでない場合"}):J.jsx("button",{type:"button",className:"link-button",onClick:()=>a("login"),children:"既にアカウントをお持ちの場合"})}),J.jsxs("div",{className:"sheet-buttons",children:[J.jsx("button",{type:"button",onClick:e,children:"キャンセル"}),J.jsx("button",{type:"submit",children:i==="login"?"ログイン":"新規作成"})]})]})]})})}function Wb({joints:e,results:t,onAddPoint:n,onRemovePoint:i,isShowingResults:a,setIsShowingResults:s}){const r=a?t:e;return J.jsxs("div",{className:"sidebar joint-list-view",children:[J.jsxs("div",{className:"sidebar-header",children:[J.jsx("h2",{children:a?"計算結果":"ジョイント設定"}),t.length!==0&&J.jsxs("div",{className:"dual-controls navigation-controls",children:[J.jsx("button",{type:"button",onClick:()=>s(!1),disabled:!a,children:J.jsx(zb,{})}),J.jsx("button",{type:"button",onClick:()=>s(!0),disabled:a,children:J.jsx(Bb,{})})]})]}),a?J.jsx("p",{children:"逆運動学によって計算された関節位置です。"}):J.jsx("p",{children:"ロボットの各関節の位置を設定します。"}),J.jsx("div",{className:"table-wrapper",children:J.jsxs("table",{className:"points-table",children:[J.jsx("thead",{children:J.jsxs("tr",{children:[J.jsx("th",{children:"#"}),J.jsx("th",{children:"X"}),J.jsx("th",{children:"Y"}),J.jsx("th",{children:"Z"})]})}),J.jsx("tbody",{children:r.map(([o,l,c],f)=>J.jsxs("tr",{children:[J.jsx("td",{children:f+1}),J.jsx("td",{children:o.toFixed(2)}),J.jsx("td",{children:l.toFixed(2)}),J.jsx("td",{children:c.toFixed(2)})]},f))})]})}),J.jsxs("div",{className:"dual-controls list-controls",children:[J.jsx("button",{onClick:n,children:J.jsx(Gv,{})}),J.jsx("button",{onClick:i,disabled:e.length===0,children:J.jsx(Hv,{})})]})]})}function Yb({tasks:e,onAddPoint:t,onRemovePoint:n}){return J.jsxs("div",{className:"sidebar task-list-view",children:[J.jsx("h2",{children:"タスク設定"}),J.jsx("p",{children:"ジョイントを指定し、そのジョイントが到達すべき目標座標を設定します。"}),J.jsx("div",{className:"table-wrapper",children:J.jsxs("table",{className:"points-table",children:[J.jsx("thead",{children:J.jsxs("tr",{children:[J.jsx("th",{children:"#"}),J.jsx("th",{children:"X"}),J.jsx("th",{children:"Y"}),J.jsx("th",{children:"Z"})]})}),J.jsx("tbody",{children:e.map(({jointIndex:i,targetPosition:[a,s,r]},o)=>J.jsxs("tr",{children:[J.jsx("td",{children:i+1}),J.jsx("td",{children:a.toFixed(2)}),J.jsx("td",{children:s.toFixed(2)}),J.jsx("td",{children:r.toFixed(2)})]},o))})]})}),J.jsxs("div",{className:"dual-controls list-controls",children:[J.jsx("button",{onClick:t,children:J.jsx(Gv,{})}),J.jsx("button",{onClick:n,disabled:e.length===0,children:J.jsx(Hv,{})})]})]})}function qb({point:e,onFocusX:t,onFocusY:n,onFocusZ:i,onChange:a,onConfirm:s,onCancel:r}){const o=(l,c)=>{const f=[...e];f[l]=c,a(f)};return J.jsxs("div",{id:"toolbar",children:[J.jsxs("div",{className:"pointinput",children:[J.jsx("label",{children:"X"}),J.jsx("input",{type:"number",value:e[0].toFixed(2),onFocus:t,onChange:l=>o(0,Number(l.target.value))})]}),J.jsxs("div",{className:"pointinput",children:[J.jsx("label",{children:"Y"}),J.jsx("input",{type:"number",value:e[1].toFixed(2),onFocus:n,onChange:l=>o(1,Number(l.target.value))})]}),J.jsxs("div",{className:"pointinput",children:[J.jsx("label",{children:"Z"}),J.jsx("input",{type:"number",value:e[2].toFixed(2),onFocus:i,onChange:l=>o(2,Number(l.target.value))})]}),J.jsxs("div",{className:"toolbar-buttons",children:[J.jsx("button",{onClick:r,children:"✖️"}),J.jsx("button",{onClick:s,children:"✔️"})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="181",Oa={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jb=0,Tm=1,Zb=2,Vv=1,Kb=2,zi=3,Ha=0,bn=1,Ii=2,ji=0,hr=1,Am=2,Rm=3,Cm=4,Qb=5,ns=100,Jb=101,$b=102,t1=103,e1=104,n1=200,i1=201,a1=202,s1=203,Bh=204,Ih=205,r1=206,o1=207,l1=208,c1=209,u1=210,f1=211,h1=212,d1=213,p1=214,Hh=0,Gh=1,Vh=2,Tr=3,kh=4,Xh=5,Wh=6,Yh=7,kv=0,m1=1,x1=2,Pa=0,g1=1,_1=2,v1=3,S1=4,y1=5,M1=6,b1=7,Xv=300,Ar=301,Rr=302,qh=303,jh=304,vu=306,Zh=1e3,ki=1001,Kh=1002,In=1003,E1=1004,Cl=1005,$n=1006,ff=1007,as=1008,ea=1009,Wv=1010,Yv=1011,Ho=1012,wp=1013,ms=1014,Xi=1015,Hr=1016,Dp=1017,Up=1018,Go=1020,qv=35902,jv=35899,Zv=1021,Kv=1022,fi=1023,Vo=1026,ko=1027,Qv=1028,Lp=1029,Np=1030,Op=1031,Pp=1033,pc=33776,mc=33777,xc=33778,gc=33779,Qh=35840,Jh=35841,$h=35842,td=35843,ed=36196,nd=37492,id=37496,ad=37808,sd=37809,rd=37810,od=37811,ld=37812,cd=37813,ud=37814,fd=37815,hd=37816,dd=37817,pd=37818,md=37819,xd=37820,gd=37821,_d=36492,vd=36494,Sd=36495,yd=36283,Md=36284,bd=36285,Ed=36286,T1=3200,A1=3201,R1=0,C1=1,_a="",Yn="srgb",Cr="srgb-linear",jc="linear",fe="srgb",Rs=7680,wm=519,w1=512,D1=513,U1=514,Jv=515,L1=516,N1=517,O1=518,P1=519,Dm=35044,Um="300 es",Si=2e3,Zc=2001;function $v(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Kc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function z1(){const e=Kc("canvas");return e.style.display="block",e}const Lm={};function Nm(...e){const t="THREE."+e.shift();console.log(t,...e)}function Ft(...e){const t="THREE."+e.shift();console.warn(t,...e)}function Oe(...e){const t="THREE."+e.shift();console.error(t,...e)}function Xo(...e){const t=e.join(" ");t in Lm||(Lm[t]=!0,Ft(...e))}function F1(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class bs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Om=1234567;const Eo=Math.PI/180,Wo=180/Math.PI;function Gr(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[e&255]+sn[e>>8&255]+sn[e>>16&255]+sn[e>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Yt(e,t,n){return Math.max(t,Math.min(n,e))}function zp(e,t){return(e%t+t)%t}function B1(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function I1(e,t,n){return e!==t?(n-e)/(t-e):0}function To(e,t,n){return(1-n)*e+n*t}function H1(e,t,n,i){return To(e,t,1-Math.exp(-n*i))}function G1(e,t=1){return t-Math.abs(zp(e,t*2)-t)}function V1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function k1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function X1(e,t){return e+Math.floor(Math.random()*(t-e+1))}function W1(e,t){return e+Math.random()*(t-e)}function Y1(e){return e*(.5-Math.random())}function q1(e){e!==void 0&&(Om=e);let t=Om+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function j1(e){return e*Eo}function Z1(e){return e*Wo}function K1(e){return(e&e-1)===0&&e!==0}function Q1(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function J1(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function $1(e,t,n,i,a){const s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),f=r((t+i)/2),d=s((t-i)/2),h=r((t-i)/2),p=s((i-t)/2),g=r((i-t)/2);switch(a){case"XYX":e.set(o*f,l*d,l*h,o*c);break;case"YZY":e.set(l*h,o*f,l*d,o*c);break;case"ZXZ":e.set(l*d,l*h,o*f,o*c);break;case"XZX":e.set(o*f,l*g,l*p,o*c);break;case"YXY":e.set(l*p,o*f,l*g,o*c);break;case"ZYZ":e.set(l*g,l*p,o*f,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ws(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ln(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const tE={DEG2RAD:Eo,RAD2DEG:Wo,generateUUID:Gr,clamp:Yt,euclideanModulo:zp,mapLinear:B1,inverseLerp:I1,lerp:To,damp:H1,pingpong:G1,smoothstep:V1,smootherstep:k1,randInt:X1,randFloat:W1,randFloatSpread:Y1,seededRandom:q1,degToRad:j1,radToDeg:Z1,isPowerOfTwo:K1,ceilPowerOfTwo:Q1,floorPowerOfTwo:J1,setQuaternionFromProperEuler:$1,normalize:ln,denormalize:Ws};class Xt{constructor(t=0,n=0){Xt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xs{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],f=i[a+2],d=i[a+3],h=s[r+0],p=s[r+1],g=s[r+2],v=s[r+3];if(o<=0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(o>=1){t[n+0]=h,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(d!==v||l!==h||c!==p||f!==g){let m=l*h+c*p+f*g+d*v;m<0&&(h=-h,p=-p,g=-g,v=-v,m=-m);let u=1-o;if(m<.9995){const x=Math.acos(m),_=Math.sin(x);u=Math.sin(u*x)/_,o=Math.sin(o*x)/_,l=l*u+h*o,c=c*u+p*o,f=f*u+g*o,d=d*u+v*o}else{l=l*u+h*o,c=c*u+p*o,f=f*u+g*o,d=d*u+v*o;const x=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=x,c*=x,f*=x,d*=x}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],f=i[a+3],d=s[r],h=s[r+1],p=s[r+2],g=s[r+3];return t[n]=o*g+f*d+l*p-c*h,t[n+1]=l*g+f*h+c*d-o*p,t[n+2]=c*g+f*p+o*h-l*d,t[n+3]=f*g-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(a/2),d=o(s/2),h=l(i/2),p=l(a/2),g=l(s/2);switch(r){case"XYZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"YXZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"ZXY":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"ZYX":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"YZX":this._x=h*f*d+c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d-h*p*g;break;case"XZY":this._x=h*f*d-c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d+h*p*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+a*c-s*l,this._y=a*f+r*l+s*o-i*c,this._z=s*f+r*c+i*l-a*o,this._w=r*f-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,n=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Pm.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Pm.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),f=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*f,this.y=i+l*f+o*c-s*d,this.z=a+l*d+s*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return hf.copy(this).projectOnVector(t),this.sub(hf)}reflect(t){return this.sub(hf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hf=new P,Pm=new xs;class kt{constructor(t,n,i,a,s,r,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const f=this.elements;return f[0]=t,f[1]=a,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=a[0],m=a[3],u=a[6],x=a[1],_=a[4],y=a[7],C=a[2],T=a[5],R=a[8];return s[0]=r*v+o*x+l*C,s[3]=r*m+o*_+l*T,s[6]=r*u+o*y+l*R,s[1]=c*v+f*x+d*C,s[4]=c*m+f*_+d*T,s[7]=c*u+f*y+d*R,s[2]=h*v+p*x+g*C,s[5]=h*m+p*_+g*T,s[8]=h*u+p*y+g*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*s*f+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,h=o*l-f*s,p=c*s-r*l,g=n*d+i*h+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(a*c-f*i)*v,t[2]=(o*i-a*r)*v,t[3]=h*v,t[4]=(f*n-a*l)*v,t[5]=(a*s-o*n)*v,t[6]=p*v,t[7]=(i*l-c*n)*v,t[8]=(r*n-i*s)*v,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(df.makeScale(t,n)),this}rotate(t){return this.premultiply(df.makeRotation(-t)),this}translate(t,n){return this.premultiply(df.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const df=new kt,zm=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fm=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eE(){const e={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===fe&&(a.r=Zi(a.r),a.g=Zi(a.g),a.b=Zi(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(a.r=dr(a.r),a.g=dr(a.g),a.b=dr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_a?jc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Cr]:{primaries:t,whitePoint:i,transfer:jc,toXYZ:zm,fromXYZ:Fm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:zm,fromXYZ:Fm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),e}const ie=eE();function Zi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function dr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Cs;class nE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Cs===void 0&&(Cs=Kc("canvas")),Cs.width=t.width,Cs.height=t.height;const a=Cs.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Cs}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Kc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Zi(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zi(n[i]/255)*255):n[i]=Zi(n[i]);return{data:n,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let iE=0;class Fp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Gr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(pf(a[r].image)):s.push(pf(a[r]))}else s=pf(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function pf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?nE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let aE=0;const mf=new P;class hn extends bs{constructor(t=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=ki,a=ki,s=$n,r=as,o=fi,l=ea,c=hn.DEFAULT_ANISOTROPY,f=_a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Gr(),this.name="",this.source=new Fp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mf).x}get height(){return this.source.getSize(mf).y}get depth(){return this.source.getSize(mf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ft(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zh:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Kh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zh:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Kh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Xv;hn.DEFAULT_ANISOTROPY=1;class ze{constructor(t=0,n=0,i=0,a=1){ze.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,C=(u+1)/2,T=(f+h)/4,R=(d+v)/4,L=(g+m)/4;return _>y&&_>C?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=T/i,s=R/i):y>C?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=T/a,s=L/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=R/s,a=L/s),this.set(i,a,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(h-f)/x,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this.w=Yt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this.w=Yt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sE extends bs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ze(0,0,t,n),this.scissorTest=!1,this.viewport=new ze(0,0,t,n);const a={width:t,height:n,depth:i.depth},s=new hn(a);this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new Fp(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends sE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class tS extends hn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=In,this.minFilter=In,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rE extends hn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=In,this.minFilter=In,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,si):si.fromBufferAttribute(s,r),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(t.matrixWorld),this.union(wl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qr),Dl.subVectors(this.max,Qr),ws.subVectors(t.a,Qr),Ds.subVectors(t.b,Qr),Us.subVectors(t.c,Qr),ra.subVectors(Ds,ws),oa.subVectors(Us,Ds),Ya.subVectors(ws,Us);let n=[0,-ra.z,ra.y,0,-oa.z,oa.y,0,-Ya.z,Ya.y,ra.z,0,-ra.x,oa.z,0,-oa.x,Ya.z,0,-Ya.x,-ra.y,ra.x,0,-oa.y,oa.x,0,-Ya.y,Ya.x,0];return!xf(n,ws,Ds,Us,Dl)||(n=[1,0,0,0,1,0,0,0,1],!xf(n,ws,Ds,Us,Dl))?!1:(Ul.crossVectors(ra,oa),n=[Ul.x,Ul.y,Ul.z],xf(n,ws,Ds,Us,Dl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wi=[new P,new P,new P,new P,new P,new P,new P,new P],si=new P,wl=new sl,ws=new P,Ds=new P,Us=new P,ra=new P,oa=new P,Ya=new P,Qr=new P,Dl=new P,Ul=new P,qa=new P;function xf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){qa.fromArray(e,s);const o=a.x*Math.abs(qa.x)+a.y*Math.abs(qa.y)+a.z*Math.abs(qa.z),l=t.dot(qa),c=n.dot(qa),f=i.dot(qa);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const oE=new sl,Jr=new P,gf=new P;class Su{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):oE.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);const n=Jr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Jr,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(gf)),this.expandByPoint(Jr.copy(t.center).sub(gf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Di=new P,_f=new P,Ll=new P,la=new P,vf=new P,Nl=new P,Sf=new P;class yu{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Di.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){_f.copy(t).add(n).multiplyScalar(.5),Ll.copy(n).sub(t).normalize(),la.copy(this.origin).sub(_f);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Ll),o=la.dot(this.direction),l=-la.dot(Ll),c=la.lengthSq(),f=Math.abs(1-r*r);let d,h,p,g;if(f>0)if(d=r*l-o,h=r*o-l,g=s*f,d>=0)if(h>=-g)if(h<=g){const v=1/f;d*=v,h*=v,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(r*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(_f).addScaledVector(Ll,h),p}intersectSphere(t,n){Di.subVectors(t.center,this.origin);const i=Di.dot(this.direction),a=Di.dot(Di)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,a=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,a=(t.min.x-h.x)*c),f>=0?(s=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,n,i,a,s){vf.subVectors(n,t),Nl.subVectors(i,t),Sf.crossVectors(vf,Nl);let r=this.direction.dot(Sf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;la.subVectors(this.origin,t);const l=o*this.direction.dot(Nl.crossVectors(la,Nl));if(l<0)return null;const c=o*this.direction.dot(vf.cross(la));if(c<0||l+c>r)return null;const f=-o*la.dot(Sf);return f<0?null:this.at(f/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,n,i,a,s,r,o,l,c,f,d,h,p,g,v,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,f,d,h,p,g,v,m)}set(t,n,i,a,s,r,o,l,c,f,d,h,p,g,v,m){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/Ls.setFromMatrixColumn(t,0).length(),s=1/Ls.setFromMatrixColumn(t,1).length(),r=1/Ls.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),f=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=r*f,p=r*d,g=o*f,v=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-v*c,n[9]=-o*l,n[2]=v-h*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){const h=l*f,p=l*d,g=c*f,v=c*d;n[0]=h+v*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-o,n[2]=p*o-g,n[6]=v+h*o,n[10]=r*l}else if(t.order==="ZXY"){const h=l*f,p=l*d,g=c*f,v=c*d;n[0]=h-v*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*f,n[9]=v-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const h=r*f,p=r*d,g=o*f,v=o*d;n[0]=l*f,n[4]=g*c-p,n[8]=h*c+v,n[1]=l*d,n[5]=v*c+h,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const h=r*l,p=r*c,g=o*l,v=o*c;n[0]=l*f,n[4]=v-h*d,n[8]=g*d+p,n[1]=d,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+g,n[10]=h-v*d}else if(t.order==="XZY"){const h=r*l,p=r*c,g=o*l,v=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+v,n[5]=r*f,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*f,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lE,t,cE)}lookAt(t,n,i){const a=this.elements;return wn.subVectors(t,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),ca.crossVectors(i,wn),ca.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),ca.crossVectors(i,wn)),ca.normalize(),Ol.crossVectors(wn,ca),a[0]=ca.x,a[4]=Ol.x,a[8]=wn.x,a[1]=ca.y,a[5]=Ol.y,a[9]=wn.y,a[2]=ca.z,a[6]=Ol.z,a[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],u=i[14],x=i[3],_=i[7],y=i[11],C=i[15],T=a[0],R=a[4],L=a[8],E=a[12],M=a[1],D=a[5],I=a[9],k=a[13],Z=a[2],Y=a[6],N=a[10],H=a[14],F=a[3],q=a[7],tt=a[11],st=a[15];return s[0]=r*T+o*M+l*Z+c*F,s[4]=r*R+o*D+l*Y+c*q,s[8]=r*L+o*I+l*N+c*tt,s[12]=r*E+o*k+l*H+c*st,s[1]=f*T+d*M+h*Z+p*F,s[5]=f*R+d*D+h*Y+p*q,s[9]=f*L+d*I+h*N+p*tt,s[13]=f*E+d*k+h*H+p*st,s[2]=g*T+v*M+m*Z+u*F,s[6]=g*R+v*D+m*Y+u*q,s[10]=g*L+v*I+m*N+u*tt,s[14]=g*E+v*k+m*H+u*st,s[3]=x*T+_*M+y*Z+C*F,s[7]=x*R+_*D+y*Y+C*q,s[11]=x*L+_*I+y*N+C*tt,s[15]=x*E+_*k+y*H+C*st,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],p=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+s*l*d-a*c*d-s*o*h+i*c*h+a*o*p-i*l*p)+v*(+n*l*p-n*c*h+s*r*h-a*r*p+a*c*f-s*l*f)+m*(+n*c*d-n*o*p-s*r*d+i*r*p+s*o*f-i*c*f)+u*(-a*o*f-n*l*d+n*o*h+a*r*d-i*r*h+i*l*f)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],p=t[11],g=t[12],v=t[13],m=t[14],u=t[15],x=d*m*c-v*h*c+v*l*p-o*m*p-d*l*u+o*h*u,_=g*h*c-f*m*c-g*l*p+r*m*p+f*l*u-r*h*u,y=f*v*c-g*d*c+g*o*p-r*v*p-f*o*u+r*d*u,C=g*d*l-f*v*l-g*o*h+r*v*h+f*o*m-r*d*m,T=n*x+i*_+a*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=x*R,t[1]=(v*h*s-d*m*s-v*a*p+i*m*p+d*a*u-i*h*u)*R,t[2]=(o*m*s-v*l*s+v*a*c-i*m*c-o*a*u+i*l*u)*R,t[3]=(d*l*s-o*h*s-d*a*c+i*h*c+o*a*p-i*l*p)*R,t[4]=_*R,t[5]=(f*m*s-g*h*s+g*a*p-n*m*p-f*a*u+n*h*u)*R,t[6]=(g*l*s-r*m*s-g*a*c+n*m*c+r*a*u-n*l*u)*R,t[7]=(r*h*s-f*l*s+f*a*c-n*h*c-r*a*p+n*l*p)*R,t[8]=y*R,t[9]=(g*d*s-f*v*s-g*i*p+n*v*p+f*i*u-n*d*u)*R,t[10]=(r*v*s-g*o*s+g*i*c-n*v*c-r*i*u+n*o*u)*R,t[11]=(f*o*s-r*d*s-f*i*c+n*d*c+r*i*p-n*o*p)*R,t[12]=C*R,t[13]=(f*v*a-g*d*a+g*i*h-n*v*h-f*i*m+n*d*m)*R,t[14]=(g*o*a-r*v*a-g*i*l+n*v*l+r*i*m-n*o*m)*R,t[15]=(r*d*a-f*o*a+f*i*l-n*d*l-r*i*h+n*o*h)*R,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,f=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+i,f*l-a*r,0,c*l-a*o,f*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,f=r+r,d=o+o,h=s*c,p=s*f,g=s*d,v=r*f,m=r*d,u=o*d,x=l*c,_=l*f,y=l*d,C=i.x,T=i.y,R=i.z;return a[0]=(1-(v+u))*C,a[1]=(p+y)*C,a[2]=(g-_)*C,a[3]=0,a[4]=(p-y)*T,a[5]=(1-(h+u))*T,a[6]=(m+x)*T,a[7]=0,a[8]=(g+_)*R,a[9]=(m-x)*R,a[10]=(1-(h+v))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let s=Ls.set(a[0],a[1],a[2]).length();const r=Ls.set(a[4],a[5],a[6]).length(),o=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],ri.copy(this);const c=1/s,f=1/r,d=1/o;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=f,ri.elements[5]*=f,ri.elements[6]*=f,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,n.setFromRotationMatrix(ri),i.x=s,i.y=r,i.z=o,this}makePerspective(t,n,i,a,s,r,o=Si,l=!1){const c=this.elements,f=2*s/(n-t),d=2*s/(i-a),h=(n+t)/(n-t),p=(i+a)/(i-a);let g,v;if(l)g=s/(r-s),v=r*s/(r-s);else if(o===Si)g=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===Zc)g=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Si,l=!1){const c=this.elements,f=2/(n-t),d=2/(i-a),h=-(n+t)/(n-t),p=-(i+a)/(i-a);let g,v;if(l)g=1/(r-s),v=r/(r-s);else if(o===Si)g=-2/(r-s),v=-(r+s)/(r-s);else if(o===Zc)g=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Ls=new P,ri=new we,lE=new P(0,0,0),cE=new P(1,1,1),ca=new P,Ol=new P,wn=new P,Bm=new we,Im=new xs;class na{constructor(t=0,n=0,i=0,a=na.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],f=a[9],d=a[2],h=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Bm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Im.setFromEuler(this),this.setFromQuaternion(Im,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class Bp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uE=0;const Hm=new P,Ns=new xs,Ui=new we,Pl=new P,$r=new P,fE=new P,hE=new xs,Gm=new P(1,0,0),Vm=new P(0,1,0),km=new P(0,0,1),Xm={type:"added"},dE={type:"removed"},Os={type:"childadded",child:null},yf={type:"childremoved",child:null};class dn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new P,n=new na,i=new xs,a=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new we},normalMatrix:{value:new kt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ns.setFromAxisAngle(t,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,n){return Ns.setFromAxisAngle(t,n),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Gm,t)}rotateY(t){return this.rotateOnAxis(Vm,t)}rotateZ(t){return this.rotateOnAxis(km,t)}translateOnAxis(t,n){return Hm.copy(t).applyQuaternion(this.quaternion),this.position.add(Hm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Gm,t)}translateY(t){return this.translateOnAxis(Vm,t)}translateZ(t){return this.translateOnAxis(km,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Pl.copy(t):Pl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt($r,Pl,this.up):Ui.lookAt(Pl,$r,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xm),Os.child=t,this.dispatchEvent(Os),Os.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(dE),yf.child=t,this.dispatchEvent(yf),yf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xm),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,fE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,hE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}dn.DEFAULT_UP=new P(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new P,Li=new P,Mf=new P,Ni=new P,Ps=new P,zs=new P,Wm=new P,bf=new P,Ef=new P,Tf=new P,Af=new ze,Rf=new ze,Cf=new ze;class ui{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),oi.subVectors(t,n),a.cross(oi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){oi.subVectors(a,n),Li.subVectors(i,n),Mf.subVectors(t,n);const r=oi.dot(oi),o=oi.dot(Li),l=oi.dot(Mf),c=Li.dot(Li),f=Li.dot(Mf),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*f)*h,g=(r*f-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(r,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Af.setScalar(0),Rf.setScalar(0),Cf.setScalar(0),Af.fromBufferAttribute(t,n),Rf.fromBufferAttribute(t,i),Cf.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Af,s.x),r.addScaledVector(Rf,s.y),r.addScaledVector(Cf,s.z),r}static isFrontFacing(t,n,i,a){return oi.subVectors(i,n),Li.subVectors(t,n),oi.cross(Li).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),oi.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ui.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return ui.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Ps.subVectors(a,i),zs.subVectors(s,i),bf.subVectors(t,i);const l=Ps.dot(bf),c=zs.dot(bf);if(l<=0&&c<=0)return n.copy(i);Ef.subVectors(t,a);const f=Ps.dot(Ef),d=zs.dot(Ef);if(f>=0&&d<=f)return n.copy(a);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(Ps,r);Tf.subVectors(t,s);const p=Ps.dot(Tf),g=zs.dot(Tf);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(zs,o);const m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return Wm.subVectors(s,a),o=(d-f)/(d-f+(p-g)),n.copy(a).addScaledVector(Wm,o);const u=1/(m+v+h);return r=v*u,o=h*u,n.copy(i).addScaledVector(Ps,r).addScaledVector(zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ua={h:0,s:0,l:0},zl={h:0,s:0,l:0};function wf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ae{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=ie.workingColorSpace){return this.r=t,this.g=n,this.b=i,ie.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=ie.workingColorSpace){if(t=zp(t,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=wf(r,s,t+1/3),this.g=wf(r,s,t),this.b=wf(r,s,t-1/3)}return ie.colorSpaceToWorking(this,a),this}setStyle(t,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ft("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Yn){const i=eS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return ie.workingToColorSpace(rn.copy(this),t),Math.round(Yt(rn.r*255,0,255))*65536+Math.round(Yt(rn.g*255,0,255))*256+Math.round(Yt(rn.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ie.workingColorSpace){ie.workingToColorSpace(rn.copy(this),n);const i=rn.r,a=rn.g,s=rn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const f=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=ie.workingColorSpace){return ie.workingToColorSpace(rn.copy(this),n),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Yn){ie.workingToColorSpace(rn.copy(this),t);const n=rn.r,i=rn.g,a=rn.b;return t!==Yn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(ua),this.setHSL(ua.h+t,ua.s+n,ua.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ua),t.getHSL(zl);const i=To(ua.h,zl.h,n),a=To(ua.s,zl.s,n),s=To(ua.l,zl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ae;ae.NAMES=eS;let pE=0;class rl extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=hr,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Ih,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Ft(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==Ha&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Ih&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wr extends rl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new P,Fl=new Xt;let mE=0;class Mi{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Dm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fl.fromBufferAttribute(this,n),Fl.applyMatrix3(t),this.setXY(n,Fl.x,Fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix3(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix4(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyNormalMatrix(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.transformDirection(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ws(n,this.array)),n}setX(t,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ws(n,this.array)),n}setY(t,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ws(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ws(n,this.array)),n}setW(t,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),a=ln(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),a=ln(a,this.array),s=ln(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dm&&(t.usage=this.usage),t}}class nS extends Mi{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class iS extends Mi{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class hi extends Mi{constructor(t,n,i){super(new Float32Array(t),n,i)}}let xE=0;const Xn=new we,Df=new dn,Fs=new P,Dn=new sl,to=new sl,je=new P;class An extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($v(t)?iS:nS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,n,i){return Xn.makeTranslation(t,n,i),this.applyMatrix4(Xn),this}scale(t,n,i){return Xn.makeScale(t,n,i),this.applyMatrix4(Xn),this}lookAt(t){return Df.lookAt(t),Df.updateMatrix(),this.applyMatrix4(Df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new hi(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];to.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Dn.min,to.min),Dn.expandByPoint(je),je.addVectors(Dn.max,to.max),Dn.expandByPoint(je)):(Dn.expandByPoint(to.min),Dn.expandByPoint(to.max))}Dn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)je.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(je));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)je.fromBufferAttribute(o,c),l&&(Fs.fromBufferAttribute(t,c),je.add(Fs)),a=Math.max(a,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new P,l[L]=new P;const c=new P,f=new P,d=new P,h=new Xt,p=new Xt,g=new Xt,v=new P,m=new P;function u(L,E,M){c.fromBufferAttribute(i,L),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),f.sub(c),d.sub(c),p.sub(h),g.sub(h);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(D),o[L].add(v),o[E].add(v),o[M].add(v),l[L].add(m),l[E].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,E=x.length;L<E;++L){const M=x[L],D=M.start,I=M.count;for(let k=D,Z=D+I;k<Z;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const _=new P,y=new P,C=new P,T=new P;function R(L){C.fromBufferAttribute(a,L),T.copy(C);const E=o[L];_.copy(E),_.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(T,E);const D=y.dot(l[L])<0?-1:1;r.setXYZW(L,_.x,_.y,_.z,D)}for(let L=0,E=x.length;L<E;++L){const M=x[L],D=M.start,I=M.count;for(let k=D,Z=D+I;k<Z;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const a=new P,s=new P,r=new P,o=new P,l=new P,c=new P,f=new P,d=new P;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);a.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,m),f.subVectors(r,s),d.subVectors(a,s),f.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)a.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),f.subVectors(r,s),d.subVectors(a,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)je.fromBufferAttribute(t,n),je.normalize(),t.setXYZ(n,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*f;for(let u=0;u<f;u++)h[g++]=c[p++]}return new Mi(h,f,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new An,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(a[l]=f,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const f=a[c];this.setAttribute(c,f.clone(n))}const s=t.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,f=r.length;c<f;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ym=new we,ja=new yu,Bl=new Su,qm=new P,Il=new P,Hl=new P,Gl=new P,Uf=new P,Vl=new P,jm=new P,kl=new P;class Vn extends dn{constructor(t=new An,n=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(Uf.fromBufferAttribute(d,t),r?Vl.addScaledVector(Uf,f):Vl.addScaledVector(Uf.sub(n),f))}n.add(Vl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),ja.copy(t.ray).recast(t.near),!(Bl.containsPoint(ja.origin)===!1&&(ja.intersectSphere(Bl,qm)===null||ja.origin.distanceToSquared(qm)>(t.far-t.near)**2))&&(Ym.copy(s).invert(),ja.copy(t.ray).applyMatrix4(Ym),!(i.boundingBox!==null&&ja.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ja)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=h.length;g<v;g++){const m=h[g],u=r[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=_;y<C;y+=3){const T=o.getX(y),R=o.getX(y+1),L=o.getX(y+2);a=Xl(this,u,t,i,c,f,d,T,R,L),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const x=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);a=Xl(this,r,t,i,c,f,d,x,_,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=h.length;g<v;g++){const m=h[g],u=r[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=_;y<C;y+=3){const T=y,R=y+1,L=y+2;a=Xl(this,u,t,i,c,f,d,T,R,L),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const x=m,_=m+1,y=m+2;a=Xl(this,r,t,i,c,f,d,x,_,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function gE(e,t,n,i,a,s,r,o){let l;if(t.side===bn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Ha,o),l===null)return null;kl.copy(o),kl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(kl);return c<n.near||c>n.far?null:{distance:c,point:kl.clone(),object:e}}function Xl(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Il),e.getVertexPosition(l,Hl),e.getVertexPosition(c,Gl);const f=gE(e,t,n,i,Il,Hl,Gl,jm);if(f){const d=new P;ui.getBarycoord(jm,Il,Hl,Gl,d),a&&(f.uv=ui.getInterpolatedAttribute(a,o,l,c,d,new Xt)),s&&(f.uv1=ui.getInterpolatedAttribute(s,o,l,c,d,new Xt)),r&&(f.normal=ui.getInterpolatedAttribute(r,o,l,c,d,new P),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};ui.getNormal(Il,Hl,Gl,h.normal),f.face=h,f.barycoord=d}return f}class ol extends An{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],f=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,t,r,s,0),g("z","y","x",1,-1,i,n,-t,r,s,1),g("x","z","y",1,1,t,i,n,a,r,2),g("x","z","y",1,-1,t,i,-n,a,r,3),g("x","y","z",1,-1,t,n,i,a,s,4),g("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new hi(c,3)),this.setAttribute("normal",new hi(f,3)),this.setAttribute("uv",new hi(d,2));function g(v,m,u,x,_,y,C,T,R,L,E){const M=y/R,D=C/L,I=y/2,k=C/2,Z=T/2,Y=R+1,N=L+1;let H=0,F=0;const q=new P;for(let tt=0;tt<N;tt++){const st=tt*D-k;for(let at=0;at<Y;at++){const mt=at*M-I;q[v]=mt*x,q[m]=st*_,q[u]=Z,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[u]=T>0?1:-1,f.push(q.x,q.y,q.z),d.push(at/R),d.push(1-tt/L),H+=1}}for(let tt=0;tt<L;tt++)for(let st=0;st<R;st++){const at=h+st+Y*tt,mt=h+st+Y*(tt+1),_t=h+(st+1)+Y*(tt+1),Bt=h+(st+1)+Y*tt;l.push(at,mt,Bt),l.push(mt,_t,Bt),F+=6}o.addGroup(p,F,E),p+=F,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function cn(e){const t={};for(let n=0;n<e.length;n++){const i=Dr(e[n]);for(const a in i)t[a]=i[a]}return t}function _E(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function aS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const vE={clone:Dr,merge:cn};var SE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends rl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SE,this.fragmentShader=yE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=_E(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sS extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fa=new P,Zm=new Xt,Km=new Xt;class ci extends sS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fa.x,fa.y).multiplyScalar(-t/fa.z),fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fa.x,fa.y).multiplyScalar(-t/fa.z)}getViewSize(t,n){return this.getViewBounds(t,Zm,Km),n.subVectors(Km,Zm)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Eo*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,Is=1;class ME extends dn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(Bs,Is,t,n);a.layers=this.layers,this.add(a);const s=new ci(Bs,Is,t,n);s.layers=this.layers,this.add(s);const r=new ci(Bs,Is,t,n);r.layers=this.layers,this.add(r);const o=new ci(Bs,Is,t,n);o.layers=this.layers,this.add(o);const l=new ci(Bs,Is,t,n);l.layers=this.layers,this.add(l);const c=new ci(Bs,Is,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Si)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,s),t.setRenderTarget(i,1,a),t.render(n,r),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,a),t.render(n,f),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rS extends hn{constructor(t=[],n=Ar,i,a,s,r,o,l,c,f){super(t,n,i,a,s,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bE extends gs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new rS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ol(5,5,5),s=new ia({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:ji});s.uniforms.tEquirect.value=n;const r=new Vn(a,s),o=n.minFilter;return n.minFilter===as&&(n.minFilter=$n),new ME(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}class Wl extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EE={type:"move"};class Lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Wl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class TE extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class AE extends hn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=In,f=In,d,h){super(null,r,o,l,c,f,a,s,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nf=new P,RE=new P,CE=new kt;class mi{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Nf.subVectors(i,n).cross(RE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Nf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||CE.getNormalMatrix(t),a=this.coplanarPoint(Nf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Za=new Su,wE=new Xt(.5,.5),Yl=new P;class oS{constructor(t=new mi,n=new mi,i=new mi,a=new mi,s=new mi,r=new mi){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Si,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],f=s[4],d=s[5],h=s[6],p=s[7],g=s[8],v=s[9],m=s[10],u=s[11],x=s[12],_=s[13],y=s[14],C=s[15];if(a[0].setComponents(c-r,p-f,u-g,C-x).normalize(),a[1].setComponents(c+r,p+f,u+g,C+x).normalize(),a[2].setComponents(c+o,p+d,u+v,C+_).normalize(),a[3].setComponents(c-o,p-d,u-v,C-_).normalize(),i)a[4].setComponents(l,h,m,y).normalize(),a[5].setComponents(c-l,p-h,u-m,C-y).normalize();else if(a[4].setComponents(c-l,p-h,u-m,C-y).normalize(),n===Si)a[5].setComponents(c+l,p+h,u+m,C+y).normalize();else if(n===Zc)a[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Za.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Za)}intersectsSprite(t){Za.center.set(0,0,0);const n=wE.distanceTo(t.center);return Za.radius=.7071067811865476+n,Za.applyMatrix4(t.matrixWorld),this.intersectsSphere(Za)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Yl.x=a.normal.x>0?t.max.x:t.min.x,Yl.y=a.normal.y>0?t.max.y:t.min.y,Yl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ll extends rl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qc=new P,Jc=new P,Qm=new we,eo=new yu,ql=new Su,Of=new P,Jm=new P;class cl extends dn{constructor(t=new An,n=new ll){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)Qc.fromBufferAttribute(n,a-1),Jc.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Qc.distanceTo(Jc);t.setAttribute("lineDistance",new hi(i,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(a),ql.radius+=s,t.ray.intersectsSphere(ql)===!1)return;Qm.copy(a).invert(),eo.copy(t.ray).applyMatrix4(Qm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const u=f.getX(v),x=f.getX(v+1),_=jl(this,t,eo,l,u,x,v);_&&n.push(_)}if(this.isLineLoop){const v=f.getX(g-1),m=f.getX(p),u=jl(this,t,eo,l,v,m,g-1);u&&n.push(u)}}else{const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const u=jl(this,t,eo,l,v,v+1,v);u&&n.push(u)}if(this.isLineLoop){const v=jl(this,t,eo,l,g-1,p,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jl(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(Qc.fromBufferAttribute(o,a),Jc.fromBufferAttribute(o,s),n.distanceSqToSegment(Qc,Jc,Of,Jm)>i)return;Of.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Of);if(!(c<t.near||c>t.far))return{distance:c,point:Jm.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}class lS extends hn{constructor(t,n,i=ms,a,s,r,o=In,l=In,c,f=Vo,d=1){if(f!==Vo&&f!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:n,depth:d};super(h,a,s,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cS extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Mu extends An{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,f=l+1,d=t/o,h=n/l,p=[],g=[],v=[],m=[];for(let u=0;u<f;u++){const x=u*h-r;for(let _=0;_<c;_++){const y=_*d-s;g.push(y,-x,0),v.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const _=x+c*u,y=x+c*(u+1),C=x+1+c*(u+1),T=x+1+c*u;p.push(_,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new hi(g,3)),this.setAttribute("normal",new hi(v,3)),this.setAttribute("uv",new hi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ur extends An{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const f=[],d=new P,h=new P,p=[],g=[],v=[],m=[];for(let u=0;u<=i;u++){const x=[],_=u/i;let y=0;u===0&&r===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const T=C/n;d.x=-t*Math.cos(a+T*s)*Math.sin(r+_*o),d.y=t*Math.cos(r+_*o),d.z=t*Math.sin(a+T*s)*Math.sin(r+_*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(T+y,1-_),x.push(c++)}f.push(x)}for(let u=0;u<i;u++)for(let x=0;x<n;x++){const _=f[u][x+1],y=f[u][x],C=f[u+1][x],T=f[u+1][x+1];(u!==0||r>0)&&p.push(_,y,T),(u!==i-1||l<Math.PI)&&p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new hi(g,3)),this.setAttribute("normal",new hi(v,3)),this.setAttribute("uv",new hi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class DE extends rl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class UE extends rl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class uS extends sS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class LE extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const $m=new we;class fS{constructor(t,n,i=0,a=1/0){this.ray=new yu(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new Bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Oe("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return $m.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($m),this}intersectObject(t,n=!0,i=[]){return Td(t,this,i,n),i.sort(tx),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)Td(t[a],this,i,n);return i.sort(tx),i}}function tx(e,t){return e.distance-t.distance}function Td(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){const s=e.children;for(let r=0,o=s.length;r<o;r++)Td(s[r],t,n,!0)}}class ex{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Yt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class NE extends bs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function nx(e,t,n,i){const a=OE(i);switch(n){case Zv:return e*t;case Qv:return e*t/a.components*a.byteLength;case Lp:return e*t/a.components*a.byteLength;case Np:return e*t*2/a.components*a.byteLength;case Op:return e*t*2/a.components*a.byteLength;case Kv:return e*t*3/a.components*a.byteLength;case fi:return e*t*4/a.components*a.byteLength;case Pp:return e*t*4/a.components*a.byteLength;case pc:case mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xc:case gc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jh:case td:return Math.max(e,16)*Math.max(t,8)/4;case Qh:case $h:return Math.max(e,8)*Math.max(t,8)/2;case ed:case nd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case id:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ad:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case rd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case od:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ld:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case cd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ud:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case fd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case hd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case dd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case pd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case md:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case gd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case _d:case vd:case Sd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case yd:case Md:return Math.ceil(e/4)*Math.ceil(t/4)*8;case bd:case Ed:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OE(e){switch(e){case ea:case Wv:return{byteLength:1,components:1};case Ho:case Yv:case Hr:return{byteLength:2,components:1};case Dp:case Up:return{byteLength:2,components:4};case ms:case wp:case Xi:return{byteLength:4,components:1};case qv:case jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function PE(e){const t=new WeakMap;function n(o,l){const c=o.array,f=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const f=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,f);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];e.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var zE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,WE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,s3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h3="gl_FragColor = linearToOutputTexel( gl_FragColor );",d3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,v3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,w3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ST=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ET=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:zE,alphahash_pars_fragment:FE,alphamap_fragment:BE,alphamap_pars_fragment:IE,alphatest_fragment:HE,alphatest_pars_fragment:GE,aomap_fragment:VE,aomap_pars_fragment:kE,batching_pars_vertex:XE,batching_vertex:WE,begin_vertex:YE,beginnormal_vertex:qE,bsdfs:jE,iridescence_fragment:ZE,bumpmap_pars_fragment:KE,clipping_planes_fragment:QE,clipping_planes_pars_fragment:JE,clipping_planes_pars_vertex:$E,clipping_planes_vertex:t3,color_fragment:e3,color_pars_fragment:n3,color_pars_vertex:i3,color_vertex:a3,common:s3,cube_uv_reflection_fragment:r3,defaultnormal_vertex:o3,displacementmap_pars_vertex:l3,displacementmap_vertex:c3,emissivemap_fragment:u3,emissivemap_pars_fragment:f3,colorspace_fragment:h3,colorspace_pars_fragment:d3,envmap_fragment:p3,envmap_common_pars_fragment:m3,envmap_pars_fragment:x3,envmap_pars_vertex:g3,envmap_physical_pars_fragment:C3,envmap_vertex:_3,fog_vertex:v3,fog_pars_vertex:S3,fog_fragment:y3,fog_pars_fragment:M3,gradientmap_pars_fragment:b3,lightmap_pars_fragment:E3,lights_lambert_fragment:T3,lights_lambert_pars_fragment:A3,lights_pars_begin:R3,lights_toon_fragment:w3,lights_toon_pars_fragment:D3,lights_phong_fragment:U3,lights_phong_pars_fragment:L3,lights_physical_fragment:N3,lights_physical_pars_fragment:O3,lights_fragment_begin:P3,lights_fragment_maps:z3,lights_fragment_end:F3,logdepthbuf_fragment:B3,logdepthbuf_pars_fragment:I3,logdepthbuf_pars_vertex:H3,logdepthbuf_vertex:G3,map_fragment:V3,map_pars_fragment:k3,map_particle_fragment:X3,map_particle_pars_fragment:W3,metalnessmap_fragment:Y3,metalnessmap_pars_fragment:q3,morphinstance_vertex:j3,morphcolor_vertex:Z3,morphnormal_vertex:K3,morphtarget_pars_vertex:Q3,morphtarget_vertex:J3,normal_fragment_begin:$3,normal_fragment_maps:tT,normal_pars_fragment:eT,normal_pars_vertex:nT,normal_vertex:iT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:sT,clearcoat_normal_fragment_maps:rT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:lT,opaque_fragment:cT,packing:uT,premultiplied_alpha_fragment:fT,project_vertex:hT,dithering_fragment:dT,dithering_pars_fragment:pT,roughnessmap_fragment:mT,roughnessmap_pars_fragment:xT,shadowmap_pars_fragment:gT,shadowmap_pars_vertex:_T,shadowmap_vertex:vT,shadowmask_pars_fragment:ST,skinbase_vertex:yT,skinning_pars_vertex:MT,skinning_vertex:bT,skinnormal_vertex:ET,specularmap_fragment:TT,specularmap_pars_fragment:AT,tonemapping_fragment:RT,tonemapping_pars_fragment:CT,transmission_fragment:wT,transmission_pars_fragment:DT,uv_pars_fragment:UT,uv_pars_vertex:LT,uv_vertex:NT,worldpos_vertex:OT,background_vert:PT,background_frag:zT,backgroundCube_vert:FT,backgroundCube_frag:BT,cube_vert:IT,cube_frag:HT,depth_vert:GT,depth_frag:VT,distanceRGBA_vert:kT,distanceRGBA_frag:XT,equirect_vert:WT,equirect_frag:YT,linedashed_vert:qT,linedashed_frag:jT,meshbasic_vert:ZT,meshbasic_frag:KT,meshlambert_vert:QT,meshlambert_frag:JT,meshmatcap_vert:$T,meshmatcap_frag:t2,meshnormal_vert:e2,meshnormal_frag:n2,meshphong_vert:i2,meshphong_frag:a2,meshphysical_vert:s2,meshphysical_frag:r2,meshtoon_vert:o2,meshtoon_frag:l2,points_vert:c2,points_frag:u2,shadow_vert:f2,shadow_frag:h2,sprite_vert:d2,sprite_frag:p2},ut={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},xi={basic:{uniforms:cn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:cn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ae(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:cn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:cn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:cn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new ae(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:cn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:cn([ut.points,ut.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:cn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:cn([ut.common,ut.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:cn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:cn([ut.sprite,ut.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:cn([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:cn([ut.lights,ut.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};xi.physical={uniforms:cn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Zl={r:0,b:0,g:0},Ka=new na,m2=new we;function x2(e,t,n,i,a,s,r){const o=new ae(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:t).get(y)),y}function v(_){let y=!1;const C=g(_);C===null?u(o,l):C&&C.isColor&&(u(C,1),y=!0);const T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,y){const C=g(y);C&&(C.isCubeTexture||C.mapping===vu)?(f===void 0&&(f=new Vn(new ol(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:Dr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),Ka.copy(y.backgroundRotation),Ka.x*=-1,Ka.y*=-1,Ka.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ka.y*=-1,Ka.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(m2.makeRotationFromEuler(Ka)),f.material.toneMapped=ie.getTransfer(C.colorSpace)!==fe,(d!==C||h!==C.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=C,h=C.version,p=e.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Vn(new Mu(2,2),new ia({name:"BackgroundMaterial",uniforms:Dr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ie.getTransfer(C.colorSpace)!==fe,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=C,h=C.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,y){_.getRGB(Zl,aS(e)),i.buffers.color.setClear(Zl.r,Zl.g,Zl.b,y,r)}function x(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:v,addToRenderList:m,dispose:x}}function g2(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=h(null);let s=a,r=!1;function o(M,D,I,k,Z){let Y=!1;const N=d(k,I,D);s!==N&&(s=N,c(s.object)),Y=p(M,k,I,Z),Y&&g(M,k,I,Z),Z!==null&&t.update(Z,e.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,y(M,D,I,k),Z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function f(M){return e.deleteVertexArray(M)}function d(M,D,I){const k=I.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let Y=Z[D.id];Y===void 0&&(Y={},Z[D.id]=Y);let N=Y[k];return N===void 0&&(N=h(l()),Y[k]=N),N}function h(M){const D=[],I=[],k=[];for(let Z=0;Z<n;Z++)D[Z]=0,I[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,D,I,k){const Z=s.attributes,Y=D.attributes;let N=0;const H=I.getAttributes();for(const F in H)if(H[F].location>=0){const tt=Z[F];let st=Y[F];if(st===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),tt===void 0||tt.attribute!==st||st&&tt.data!==st.data)return!0;N++}return s.attributesNum!==N||s.index!==k}function g(M,D,I,k){const Z={},Y=D.attributes;let N=0;const H=I.getAttributes();for(const F in H)if(H[F].location>=0){let tt=Y[F];tt===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor));const st={};st.attribute=tt,tt&&tt.data&&(st.data=tt.data),Z[F]=st,N++}s.attributes=Z,s.attributesNum=N,s.index=k}function v(){const M=s.newAttributes;for(let D=0,I=M.length;D<I;D++)M[D]=0}function m(M){u(M,0)}function u(M,D){const I=s.newAttributes,k=s.enabledAttributes,Z=s.attributeDivisors;I[M]=1,k[M]===0&&(e.enableVertexAttribArray(M),k[M]=1),Z[M]!==D&&(e.vertexAttribDivisor(M,D),Z[M]=D)}function x(){const M=s.newAttributes,D=s.enabledAttributes;for(let I=0,k=D.length;I<k;I++)D[I]!==M[I]&&(e.disableVertexAttribArray(I),D[I]=0)}function _(M,D,I,k,Z,Y,N){N===!0?e.vertexAttribIPointer(M,D,I,Z,Y):e.vertexAttribPointer(M,D,I,k,Z,Y)}function y(M,D,I,k){v();const Z=k.attributes,Y=I.getAttributes(),N=D.defaultAttributeValues;for(const H in Y){const F=Y[H];if(F.location>=0){let q=Z[H];if(q===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const tt=q.normalized,st=q.itemSize,at=t.get(q);if(at===void 0)continue;const mt=at.buffer,_t=at.type,Bt=at.bytesPerElement,W=_t===e.INT||_t===e.UNSIGNED_INT||q.gpuType===wp;if(q.isInterleavedBufferAttribute){const Q=q.data,dt=Q.stride,zt=q.offset;if(Q.isInstancedInterleavedBuffer){for(let Tt=0;Tt<F.locationSize;Tt++)u(F.location+Tt,Q.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Tt=0;Tt<F.locationSize;Tt++)m(F.location+Tt);e.bindBuffer(e.ARRAY_BUFFER,mt);for(let Tt=0;Tt<F.locationSize;Tt++)_(F.location+Tt,st/F.locationSize,_t,tt,dt*Bt,(zt+st/F.locationSize*Tt)*Bt,W)}else{if(q.isInstancedBufferAttribute){for(let Q=0;Q<F.locationSize;Q++)u(F.location+Q,q.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Q=0;Q<F.locationSize;Q++)m(F.location+Q);e.bindBuffer(e.ARRAY_BUFFER,mt);for(let Q=0;Q<F.locationSize;Q++)_(F.location+Q,st/F.locationSize,_t,tt,st*Bt,st/F.locationSize*Q*Bt,W)}}else if(N!==void 0){const tt=N[H];if(tt!==void 0)switch(tt.length){case 2:e.vertexAttrib2fv(F.location,tt);break;case 3:e.vertexAttrib3fv(F.location,tt);break;case 4:e.vertexAttrib4fv(F.location,tt);break;default:e.vertexAttrib1fv(F.location,tt)}}}}x()}function C(){L();for(const M in i){const D=i[M];for(const I in D){const k=D[I];for(const Z in k)f(k[Z].object),delete k[Z];delete D[I]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const I in D){const k=D[I];for(const Z in k)f(k[Z].object),delete k[Z];delete D[I]}delete i[M.id]}function R(M){for(const D in i){const I=i[D];if(I[M.id]===void 0)continue;const k=I[M.id];for(const Z in k)f(k[Z].object),delete k[Z];delete I[M.id]}}function L(){E(),r=!0,s!==a&&(s=a,c(s.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function _2(e,t,n){let i;function a(c){i=c}function s(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function r(c,f,d){d!==0&&(e.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let g=0;g<d;g++)p+=f[g];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],f[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=f[v]*h[v];n.update(g,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function v2(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==fi&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ea&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Xi&&!L)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ft("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),x=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function S2(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new mi,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||a;return a=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!a||g===null||g.length===0||s&&!m)s?f(null):c();else{const x=s?0:i,_=x*4;let y=u.clippingState||null;l.value=y,y=f(g,h,_,p);for(let C=0;C!==_;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=p+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,y=p;_!==v;++_,y+=4)r.copy(d[_]).applyMatrix4(x,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function y2(e){let t=new WeakMap;function n(r,o){return o===qh?r.mapping=Ar:o===jh&&(r.mapping=Rr),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===qh||o===jh)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new bE(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Ea=4,ix=[.125,.215,.35,.446,.526,.582],is=20,M2=256,no=new uS,ax=new ae;let Pf=null,zf=0,Ff=0,Bf=!1;const b2=new P;class sx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=b2}=s;Pf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pf,zf,Ff),this._renderer.xr.enabled=Bf,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ar||t.mapping===Rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Hr,format:fi,colorSpace:Cr,depthBuffer:!1},a=rx(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rx(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=E2(s)),this._blurMaterial=A2(s,t,n),this._ggxMaterial=T2(s,t,n)}return a}_compileMaterial(t){const n=new Vn(new An,t);this._renderer.compile(n,no)}_sceneToCubeUV(t,n,i,a,s){const l=new ci(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(ax),d.toneMapping=Pa,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vn(new ol,new wr({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let u=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,u=!0):(m.color.copy(ax),u=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));const C=this._cubeSize;Hs(a,y*C,_>2?C:0,C,C),d.setRenderTarget(a),u&&d.render(v,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=x}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===Ar||t.mapping===Rr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=lx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ox());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Hs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,no)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),h=.05+c*.95,p=d*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Ea?i-g+Ea:0),u=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-n,Hs(s,m,u,3*v,2*v),a.setRenderTarget(s),a.render(o,no),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Hs(t,m,u,3*v,2*v),a.setRenderTarget(t),a.render(o,no)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[a];d.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*is-1),v=s/g,m=isFinite(s)?1+Math.floor(f*v):is;m>is&&Ft(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);const u=[];let x=0;for(let R=0;R<is;++R){const L=R/v,E=Math.exp(-L*L/2);u.push(E),R===0?x+=E:R<m&&(x+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const y=this._sizeLods[a],C=3*y*(a>_-Ea?a-_+Ea:0),T=4*(this._cubeSize-y);Hs(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(d,no)}}function E2(e){const t=[],n=[],i=[];let a=e;const s=e-Ea+1+ix.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Ea?l=ix[r-e+Ea-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,v=3,m=2,u=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,L=T>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(E,v*g*T),_.set(h,m*g*T);const M=[T,T,T,T,T,T];y.set(M,u*g*T)}const C=new An;C.setAttribute("position",new Mi(x,v)),C.setAttribute("uv",new Mi(_,m)),C.setAttribute("faceIndex",new Mi(y,u)),i.push(new Vn(C,null)),a>Ea&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function rx(e,t,n){const i=new gs(e,t,n);return i.texture.mapping=vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function T2(e,t,n){return new ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function A2(e,t,n){const i=new Float32Array(is),a=new P(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ox(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function lx(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===qh||l===jh,f=l===Ar||l===Rr;if(c||f){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new sx(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||f&&p&&a(p)?(n===null&&(n=new sx(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function C2(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Xo("WebGLRenderer: "+i+" extension not supported."),a}}}function w2(e,t,n,i){const a={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete a[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,y=x.length;_<y;_+=3){const C=x[_+0],T=x[_+1],R=x[_+2];h.push(C,T,T,R,R,C)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const C=_+0,T=_+1,R=_+2;h.push(C,T,T,R,R,C)}}else return;const m=new($v(h)?iS:nS)(h,1);m.version=v;const u=s.get(d);u&&t.remove(u),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function D2(e,t,n){let i;function a(h){i=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,s,h*r),n.update(p,i,1)}function c(h,p,g){g!==0&&(e.drawElementsInstanced(i,p,s,h*r,g),n.update(p,i,g))}function f(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function d(h,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/r,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,g);let u=0;for(let x=0;x<g;x++)u+=p[x]*v[x];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function U2(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:Oe("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function L2(e,t,n){const i=new WeakMap,a=new ze;function s(r,o,l){const c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let C=o.attributes.position.count*y,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*T*4*d),L=new tS(R,C,T,d);L.type=Xi,L.needsUpdate=!0;const E=y*4;for(let D=0;D<d;D++){const I=u[D],k=x[D],Z=_[D],Y=C*T*4*D;for(let N=0;N<I.count;N++){const H=N*E;g===!0&&(a.fromBufferAttribute(I,N),R[Y+H+0]=a.x,R[Y+H+1]=a.y,R[Y+H+2]=a.z,R[Y+H+3]=0),v===!0&&(a.fromBufferAttribute(k,N),R[Y+H+4]=a.x,R[Y+H+5]=a.y,R[Y+H+6]=a.z,R[Y+H+7]=0),m===!0&&(a.fromBufferAttribute(Z,N),R[Y+H+8]=a.x,R[Y+H+9]=a.y,R[Y+H+10]=a.z,R[Y+H+11]=Z.itemSize===4?a.w:1)}}h={count:d,texture:L,size:new Xt(C,T)},i.set(o,h),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function N2(e,t,n,i){let a=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=t.get(l,f);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return d}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}const dS=new hn,cx=new lS(1,1),pS=new tS,mS=new rE,xS=new rS,ux=[],fx=[],hx=new Float32Array(16),dx=new Float32Array(9),px=new Float32Array(4);function Vr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=ux[a];if(s===void 0&&(s=new Float32Array(a),ux[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Ye(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Eu(e,t){let n=fx[t];n===void 0&&(n=new Int32Array(t),fx[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function O2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function P2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2fv(this.addr,t),qe(n,t)}}function z2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ye(n,t))return;e.uniform3fv(this.addr,t),qe(n,t)}}function F2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4fv(this.addr,t),qe(n,t)}}function B2(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qe(n,t)}else{if(Ye(n,i))return;px.set(i),e.uniformMatrix2fv(this.addr,!1,px),qe(n,i)}}function I2(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qe(n,t)}else{if(Ye(n,i))return;dx.set(i),e.uniformMatrix3fv(this.addr,!1,dx),qe(n,i)}}function H2(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qe(n,t)}else{if(Ye(n,i))return;hx.set(i),e.uniformMatrix4fv(this.addr,!1,hx),qe(n,i)}}function G2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function V2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2iv(this.addr,t),qe(n,t)}}function k2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3iv(this.addr,t),qe(n,t)}}function X2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4iv(this.addr,t),qe(n,t)}}function W2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Y2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2uiv(this.addr,t),qe(n,t)}}function q2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3uiv(this.addr,t),qe(n,t)}}function j2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4uiv(this.addr,t),qe(n,t)}}function Z2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(cx.compareFunction=Jv,s=cx):s=dS,n.setTexture2D(t||s,a)}function K2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||mS,a)}function Q2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||xS,a)}function J2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||pS,a)}function $2(e){switch(e){case 5126:return O2;case 35664:return P2;case 35665:return z2;case 35666:return F2;case 35674:return B2;case 35675:return I2;case 35676:return H2;case 5124:case 35670:return G2;case 35667:case 35671:return V2;case 35668:case 35672:return k2;case 35669:case 35673:return X2;case 5125:return W2;case 36294:return Y2;case 36295:return q2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return K2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return J2}}function tA(e,t){e.uniform1fv(this.addr,t)}function eA(e,t){const n=Vr(t,this.size,2);e.uniform2fv(this.addr,n)}function nA(e,t){const n=Vr(t,this.size,3);e.uniform3fv(this.addr,n)}function iA(e,t){const n=Vr(t,this.size,4);e.uniform4fv(this.addr,n)}function aA(e,t){const n=Vr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function sA(e,t){const n=Vr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function rA(e,t){const n=Vr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function oA(e,t){e.uniform1iv(this.addr,t)}function lA(e,t){e.uniform2iv(this.addr,t)}function cA(e,t){e.uniform3iv(this.addr,t)}function uA(e,t){e.uniform4iv(this.addr,t)}function fA(e,t){e.uniform1uiv(this.addr,t)}function hA(e,t){e.uniform2uiv(this.addr,t)}function dA(e,t){e.uniform3uiv(this.addr,t)}function pA(e,t){e.uniform4uiv(this.addr,t)}function mA(e,t,n){const i=this.cache,a=t.length,s=Eu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==a;++r)n.setTexture2D(t[r]||dS,s[r])}function xA(e,t,n){const i=this.cache,a=t.length,s=Eu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||mS,s[r])}function gA(e,t,n){const i=this.cache,a=t.length,s=Eu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||xS,s[r])}function _A(e,t,n){const i=this.cache,a=t.length,s=Eu(n,a);Ye(i,s)||(e.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||pS,s[r])}function vA(e){switch(e){case 5126:return tA;case 35664:return eA;case 35665:return nA;case 35666:return iA;case 35674:return aA;case 35675:return sA;case 35676:return rA;case 5124:case 35670:return oA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return fA;case 36294:return hA;case 36295:return dA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return _A}}class SA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$2(n.type)}}class yA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vA(n.type)}}class MA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const If=/(\w+)(\])?(\[|\.)?/g;function mx(e,t){e.seq.push(t),e.map[t.id]=t}function bA(e,t,n){const i=e.name,a=i.length;for(If.lastIndex=0;;){const s=If.exec(i),r=If.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){mx(n,c===void 0?new SA(o,e,t):new yA(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new MA(o),mx(n,d)),n=d}}}class _c{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=t.getActiveUniform(n,a),r=t.getUniformLocation(n,s.name);bA(s,r,this)}}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function xx(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const EA=37297;let TA=0;function AA(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const gx=new kt;function RA(e){ie._getMatrix(gx,ie.workingColorSpace,e);const t=`mat3( ${gx.elements.map(n=>n.toFixed(4))} )`;switch(ie.getTransfer(e)){case jc:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function _x(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+AA(e.getShaderSource(t),o)}else return s}function CA(e,t){const n=RA(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wA(e,t){let n;switch(t){case g1:n="Linear";break;case _1:n="Reinhard";break;case v1:n="Cineon";break;case S1:n="ACESFilmic";break;case M1:n="AgX";break;case b1:n="Neutral";break;case y1:n="Custom";break;default:Ft("WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Kl=new P;function DA(){ie.getLuminanceCoefficients(Kl);const e=Kl.x.toFixed(4),t=Kl.y.toFixed(4),n=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UA(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function LA(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function NA(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function lo(e){return e!==""}function vx(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sx(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const OA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(e){return e.replace(OA,zA)}const PA=new Map;function zA(e,t){let n=Wt[t];if(n===void 0){const i=PA.get(t);if(i!==void 0)n=Wt[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ad(n)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yx(e){return e.replace(FA,BA)}function BA(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Mx(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function IA(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Vv?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Kb?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function HA(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ar:case Rr:t="ENVMAP_TYPE_CUBE";break;case vu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function GA(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Rr:t="ENVMAP_MODE_REFRACTION";break}return t}function VA(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case kv:t="ENVMAP_BLENDING_MULTIPLY";break;case m1:t="ENVMAP_BLENDING_MIX";break;case x1:t="ENVMAP_BLENDING_ADD";break}return t}function kA(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XA(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=IA(n),c=HA(n),f=GA(n),d=VA(n),h=kA(n),p=UA(n),g=LA(s),v=a.createProgram();let m,u,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(lo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(lo).join(`
`),u.length>0&&(u+=`
`)):(m=[Mx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),u=[Mx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pa?"#define TONE_MAPPING":"",n.toneMapping!==Pa?Wt.tonemapping_pars_fragment:"",n.toneMapping!==Pa?wA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,CA("linearToOutputTexel",n.outputColorSpace),DA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lo).join(`
`)),r=Ad(r),r=vx(r,n),r=Sx(r,n),o=Ad(o),o=vx(o,n),o=Sx(o,n),r=yx(r),o=yx(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=x+m+r,y=x+u+o,C=xx(a,a.VERTEX_SHADER,_),T=xx(a,a.FRAGMENT_SHADER,y);a.attachShader(v,C),a.attachShader(v,T),n.index0AttributeName!==void 0?a.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function R(D){if(e.debug.checkShaderErrors){const I=a.getProgramInfoLog(v)||"",k=a.getShaderInfoLog(C)||"",Z=a.getShaderInfoLog(T)||"",Y=I.trim(),N=k.trim(),H=Z.trim();let F=!0,q=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(F=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,v,C,T);else{const tt=_x(a,C,"vertex"),st=_x(a,T,"fragment");Oe("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+tt+`
`+st)}else Y!==""?Ft("WebGLProgram: Program Info Log:",Y):(N===""||H==="")&&(q=!1);q&&(D.diagnostics={runnable:F,programLog:Y,vertexShader:{log:N,prefix:m},fragmentShader:{log:H,prefix:u}})}a.deleteShader(C),a.deleteShader(T),L=new _c(a,v),E=NA(a,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(v,EA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TA++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let WA=0;class YA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new qA(t),n.set(t,i)),i}}class qA{constructor(t){this.id=WA++,this.code=t,this.usedTimes=0}}function jA(e,t,n,i,a,s,r){const o=new Bp,l=new YA,c=new Set,f=[],d=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,D,I,k){const Z=I.fog,Y=k.geometry,N=E.isMeshStandardMaterial?I.environment:null,H=(E.isMeshStandardMaterial?n:t).get(E.envMap||N),F=H&&H.mapping===vu?H.image.height:null,q=g[E.type];E.precision!==null&&(p=a.getMaxPrecision(E.precision),p!==E.precision&&Ft("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,st=tt!==void 0?tt.length:0;let at=0;Y.morphAttributes.position!==void 0&&(at=1),Y.morphAttributes.normal!==void 0&&(at=2),Y.morphAttributes.color!==void 0&&(at=3);let mt,_t,Bt,W;if(q){const ce=xi[q];mt=ce.vertexShader,_t=ce.fragmentShader}else mt=E.vertexShader,_t=E.fragmentShader,l.update(E),Bt=l.getVertexShaderID(E),W=l.getFragmentShaderID(E);const Q=e.getRenderTarget(),dt=e.state.buffers.depth.getReversed(),zt=k.isInstancedMesh===!0,Tt=k.isBatchedMesh===!0,Kt=!!E.map,Je=!!E.matcap,qt=!!H,Ee=!!E.aoMap,w=!!E.lightMap,Qt=!!E.bumpMap,Jt=!!E.normalMap,ge=!!E.displacementMap,yt=!!E.emissiveMap,Ae=!!E.metalnessMap,Rt=!!E.roughnessMap,Ht=E.anisotropy>0,A=E.clearcoat>0,S=E.dispersion>0,B=E.iridescence>0,K=E.sheen>0,et=E.transmission>0,X=Ht&&!!E.anisotropyMap,Et=A&&!!E.clearcoatMap,ft=A&&!!E.clearcoatNormalMap,Ct=A&&!!E.clearcoatRoughnessMap,bt=B&&!!E.iridescenceMap,nt=B&&!!E.iridescenceThicknessMap,ot=K&&!!E.sheenColorMap,Lt=K&&!!E.sheenRoughnessMap,Dt=!!E.specularMap,xt=!!E.specularColorMap,Pt=!!E.specularIntensityMap,U=et&&!!E.transmissionMap,ht=et&&!!E.thicknessMap,lt=!!E.gradientMap,ct=!!E.alphaMap,it=E.alphaTest>0,$=!!E.alphaHash,vt=!!E.extensions;let It=Pa;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(It=e.toneMapping);const ve={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:mt,fragmentShader:_t,defines:E.defines,customVertexShaderID:Bt,customFragmentShaderID:W,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&k._colorsTexture!==null,instancing:zt,instancingColor:zt&&k.instanceColor!==null,instancingMorph:zt&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Cr,alphaToCoverage:!!E.alphaToCoverage,map:Kt,matcap:Je,envMap:qt,envMapMode:qt&&H.mapping,envMapCubeUVHeight:F,aoMap:Ee,lightMap:w,bumpMap:Qt,normalMap:Jt,displacementMap:h&&ge,emissiveMap:yt,normalMapObjectSpace:Jt&&E.normalMapType===C1,normalMapTangentSpace:Jt&&E.normalMapType===R1,metalnessMap:Ae,roughnessMap:Rt,anisotropy:Ht,anisotropyMap:X,clearcoat:A,clearcoatMap:Et,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ct,dispersion:S,iridescence:B,iridescenceMap:bt,iridescenceThicknessMap:nt,sheen:K,sheenColorMap:ot,sheenRoughnessMap:Lt,specularMap:Dt,specularColorMap:xt,specularIntensityMap:Pt,transmission:et,transmissionMap:U,thicknessMap:ht,gradientMap:lt,opaque:E.transparent===!1&&E.blending===hr&&E.alphaToCoverage===!1,alphaMap:ct,alphaTest:it,alphaHash:$,combine:E.combine,mapUv:Kt&&v(E.map.channel),aoMapUv:Ee&&v(E.aoMap.channel),lightMapUv:w&&v(E.lightMap.channel),bumpMapUv:Qt&&v(E.bumpMap.channel),normalMapUv:Jt&&v(E.normalMap.channel),displacementMapUv:ge&&v(E.displacementMap.channel),emissiveMapUv:yt&&v(E.emissiveMap.channel),metalnessMapUv:Ae&&v(E.metalnessMap.channel),roughnessMapUv:Rt&&v(E.roughnessMap.channel),anisotropyMapUv:X&&v(E.anisotropyMap.channel),clearcoatMapUv:Et&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ft&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(E.sheenRoughnessMap.channel),specularMapUv:Dt&&v(E.specularMap.channel),specularColorMapUv:xt&&v(E.specularColorMap.channel),specularIntensityMapUv:Pt&&v(E.specularIntensityMap.channel),transmissionMapUv:U&&v(E.transmissionMap.channel),thicknessMapUv:ht&&v(E.thicknessMap.channel),alphaMapUv:ct&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Jt||Ht),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(Kt||ct),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:at,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:It,decodeVideoTexture:Kt&&E.map.isVideoTexture===!0&&ie.getTransfer(E.map.colorSpace)===fe,decodeVideoTextureEmissive:yt&&E.emissiveMap.isVideoTexture===!0&&ie.getTransfer(E.emissiveMap.colorSpace)===fe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ii,flipSided:E.side===bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:vt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&E.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(x(M,E),_(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const M=g[E.type];let D;if(M){const I=xi[M];D=vE.clone(I.uniforms)}else D=E.uniforms;return D}function C(E,M){let D;for(let I=0,k=f.length;I<k;I++){const Z=f[I];if(Z.cacheKey===M){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new XA(e,M,E,s),f.push(D)),D}function T(E){if(--E.usedTimes===0){const M=f.indexOf(E);f[M]=f[f.length-1],f.pop(),E.destroy()}}function R(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:f,dispose:L}}function ZA(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function KA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function bx(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ex(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(d,h,p,g,v,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=m),t++,u}function o(d,h,p,g,v,m){const u=r(d,h,p,g,v,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,h,p,g,v,m){const u=r(d,h,p,g,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||KA),i.length>1&&i.sort(h||bx),a.length>1&&a.sort(h||bx)}function f(){for(let d=t,h=e.length;d<h;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:f,sort:c}}function QA(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new Ex,e.set(i,[r])):a>=s.length?(r=new Ex,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function JA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new ae};break;case"SpotLight":n={position:new P,direction:new P,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new ae,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":n={color:new ae,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function $A(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let tR=0;function eR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function nR(e){const t=new JA,n=$A(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const a=new P,s=new we,r=new we;function o(c){let f=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,x=0,_=0,y=0,C=0,T=0,R=0;c.sort(eR);for(let E=0,M=c.length;E<M;E++){const D=c[E],I=D.color,k=D.intensity,Z=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=I.r*k,d+=I.g*k,h+=I.b*k;else if(D.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],k);R++}else if(D.isDirectionalLight){const N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,F=n.get(D);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=N,p++}else if(D.isSpotLight){const N=t.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(I).multiplyScalar(k),N.distance=Z,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,i.spot[v]=N;const H=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,H.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[v]=H.matrix,D.castShadow){const F=n.get(D);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=Y,y++}v++}else if(D.isRectAreaLight){const N=t.get(D);N.color.copy(I).multiplyScalar(k),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=N,m++}else if(D.isPointLight){const N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){const H=D.shadow,F=n.get(D);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,F.shadowCameraNear=H.camera.near,F.shadowCameraFar=H.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=N,g++}else if(D.isHemisphereLight){const N=t.get(D);N.skyColor.copy(D.color).multiplyScalar(k),N.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[u]=N,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==x||L.numPointShadows!==_||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=x,L.numPointShadows=_,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=R,i.version=tR++)}function l(c,f){let d=0,h=0,p=0,g=0,v=0;const m=f.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const _=c[u];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),d++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),r.identity(),s.copy(_.matrixWorld),s.premultiply(m),r.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Tx(e){const t=new nR(e),n=[],i=[];function a(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function r(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function iR(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new Tx(e),t.set(a,[o])):s>=r.length?(o=new Tx(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const aR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rR(e,t,n){let i=new oS;const a=new Xt,s=new Xt,r=new ze,o=new DE({depthPacking:A1}),l=new UE,c={},f=n.maxTextureSize,d={[Ha]:bn,[bn]:Ha,[Ii]:Ii},h=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:aR,fragmentShader:sR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new An;g.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Vn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vv;let u=this.type;this.render=function(T,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=e.getRenderTarget(),M=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),I=e.state;I.setBlending(ji),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=u!==zi&&this.type===zi,Z=u===zi&&this.type!==zi;for(let Y=0,N=T.length;Y<N;Y++){const H=T[Y],F=H.shadow;if(F===void 0){Ft("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);const q=F.getFrameExtents();if(a.multiply(q),s.copy(F.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/q.x),a.x=s.x*q.x,F.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/q.y),a.y=s.y*q.y,F.mapSize.y=s.y)),F.map===null||k===!0||Z===!0){const st=this.type!==zi?{minFilter:In,magFilter:In}:{};F.map!==null&&F.map.dispose(),F.map=new gs(a.x,a.y,st),F.map.texture.name=H.name+".shadowMap",F.camera.updateProjectionMatrix()}e.setRenderTarget(F.map),e.clear();const tt=F.getViewportCount();for(let st=0;st<tt;st++){const at=F.getViewport(st);r.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),I.viewport(r),F.updateMatrices(H,st),i=F.getFrustum(),y(R,L,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===zi&&x(F,L),F.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,D)};function x(T,R){const L=t.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gs(a.x,a.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(R,null,L,h,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(R,null,L,p,v,null)}function _(T,R,L,E){let M=null;const D=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=M.uuid,k=R.uuid;let Z=c[I];Z===void 0&&(Z={},c[I]=Z);let Y=Z[k];Y===void 0&&(Y=M.clone(),Z[k]=Y,R.addEventListener("dispose",C)),M=Y}if(M.visible=R.visible,M.wireframe=R.wireframe,E===zi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=e.properties.get(M);I.light=L}return M}function y(T,R,L,E,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===zi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const k=t.update(T),Z=T.material;if(Array.isArray(Z)){const Y=k.groups;for(let N=0,H=Y.length;N<H;N++){const F=Y[N],q=Z[F.materialIndex];if(q&&q.visible){const tt=_(T,q,E,M);T.onBeforeShadow(e,T,R,L,k,tt,F),e.renderBufferDirect(L,null,k,tt,T,F),T.onAfterShadow(e,T,R,L,k,tt,F)}}}else if(Z.visible){const Y=_(T,Z,E,M);T.onBeforeShadow(e,T,R,L,k,Y,null),e.renderBufferDirect(L,null,k,Y,T,null),T.onAfterShadow(e,T,R,L,k,Y,null)}}const I=T.children;for(let k=0,Z=I.length;k<Z;k++)y(I[k],R,L,E,M)}function C(T){T.target.removeEventListener("dispose",C);for(const L in c){const E=c[L],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const oR={[Hh]:Gh,[Vh]:Wh,[kh]:Yh,[Tr]:Xh,[Gh]:Hh,[Wh]:Vh,[Yh]:kh,[Xh]:Tr};function lR(e,t){function n(){let U=!1;const ht=new ze;let lt=null;const ct=new ze(0,0,0,0);return{setMask:function(it){lt!==it&&!U&&(e.colorMask(it,it,it,it),lt=it)},setLocked:function(it){U=it},setClear:function(it,$,vt,It,ve){ve===!0&&(it*=It,$*=It,vt*=It),ht.set(it,$,vt,It),ct.equals(ht)===!1&&(e.clearColor(it,$,vt,It),ct.copy(ht))},reset:function(){U=!1,lt=null,ct.set(-1,0,0,0)}}}function i(){let U=!1,ht=!1,lt=null,ct=null,it=null;return{setReversed:function($){if(ht!==$){const vt=t.get("EXT_clip_control");$?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),ht=$;const It=it;it=null,this.setClear(It)}},getReversed:function(){return ht},setTest:function($){$?Q(e.DEPTH_TEST):dt(e.DEPTH_TEST)},setMask:function($){lt!==$&&!U&&(e.depthMask($),lt=$)},setFunc:function($){if(ht&&($=oR[$]),ct!==$){switch($){case Hh:e.depthFunc(e.NEVER);break;case Gh:e.depthFunc(e.ALWAYS);break;case Vh:e.depthFunc(e.LESS);break;case Tr:e.depthFunc(e.LEQUAL);break;case kh:e.depthFunc(e.EQUAL);break;case Xh:e.depthFunc(e.GEQUAL);break;case Wh:e.depthFunc(e.GREATER);break;case Yh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ct=$}},setLocked:function($){U=$},setClear:function($){it!==$&&(ht&&($=1-$),e.clearDepth($),it=$)},reset:function(){U=!1,lt=null,ct=null,it=null,ht=!1}}}function a(){let U=!1,ht=null,lt=null,ct=null,it=null,$=null,vt=null,It=null,ve=null;return{setTest:function(ce){U||(ce?Q(e.STENCIL_TEST):dt(e.STENCIL_TEST))},setMask:function(ce){ht!==ce&&!U&&(e.stencilMask(ce),ht=ce)},setFunc:function(ce,pi,ii){(lt!==ce||ct!==pi||it!==ii)&&(e.stencilFunc(ce,pi,ii),lt=ce,ct=pi,it=ii)},setOp:function(ce,pi,ii){($!==ce||vt!==pi||It!==ii)&&(e.stencilOp(ce,pi,ii),$=ce,vt=pi,It=ii)},setLocked:function(ce){U=ce},setClear:function(ce){ve!==ce&&(e.clearStencil(ce),ve=ce)},reset:function(){U=!1,ht=null,lt=null,ct=null,it=null,$=null,vt=null,It=null,ve=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,u=null,x=null,_=null,y=null,C=null,T=null,R=new ae(0,0,0),L=0,E=!1,M=null,D=null,I=null,k=null,Z=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=H>=1):F.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=H>=2);let q=null,tt={};const st=e.getParameter(e.SCISSOR_BOX),at=e.getParameter(e.VIEWPORT),mt=new ze().fromArray(st),_t=new ze().fromArray(at);function Bt(U,ht,lt,ct){const it=new Uint8Array(4),$=e.createTexture();e.bindTexture(U,$),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let vt=0;vt<lt;vt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ht,0,e.RGBA,1,1,ct,0,e.RGBA,e.UNSIGNED_BYTE,it):e.texImage2D(ht+vt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,it);return $}const W={};W[e.TEXTURE_2D]=Bt(e.TEXTURE_2D,e.TEXTURE_2D,1),W[e.TEXTURE_CUBE_MAP]=Bt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[e.TEXTURE_2D_ARRAY]=Bt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),W[e.TEXTURE_3D]=Bt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),r.setFunc(Tr),Qt(!1),Jt(Tm),Q(e.CULL_FACE),Ee(ji);function Q(U){f[U]!==!0&&(e.enable(U),f[U]=!0)}function dt(U){f[U]!==!1&&(e.disable(U),f[U]=!1)}function zt(U,ht){return d[U]!==ht?(e.bindFramebuffer(U,ht),d[U]=ht,U===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=ht),U===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=ht),!0):!1}function Tt(U,ht){let lt=p,ct=!1;if(U){lt=h.get(ht),lt===void 0&&(lt=[],h.set(ht,lt));const it=U.textures;if(lt.length!==it.length||lt[0]!==e.COLOR_ATTACHMENT0){for(let $=0,vt=it.length;$<vt;$++)lt[$]=e.COLOR_ATTACHMENT0+$;lt.length=it.length,ct=!0}}else lt[0]!==e.BACK&&(lt[0]=e.BACK,ct=!0);ct&&e.drawBuffers(lt)}function Kt(U){return g!==U?(e.useProgram(U),g=U,!0):!1}const Je={[ns]:e.FUNC_ADD,[Jb]:e.FUNC_SUBTRACT,[$b]:e.FUNC_REVERSE_SUBTRACT};Je[t1]=e.MIN,Je[e1]=e.MAX;const qt={[n1]:e.ZERO,[i1]:e.ONE,[a1]:e.SRC_COLOR,[Bh]:e.SRC_ALPHA,[u1]:e.SRC_ALPHA_SATURATE,[l1]:e.DST_COLOR,[r1]:e.DST_ALPHA,[s1]:e.ONE_MINUS_SRC_COLOR,[Ih]:e.ONE_MINUS_SRC_ALPHA,[c1]:e.ONE_MINUS_DST_COLOR,[o1]:e.ONE_MINUS_DST_ALPHA,[f1]:e.CONSTANT_COLOR,[h1]:e.ONE_MINUS_CONSTANT_COLOR,[d1]:e.CONSTANT_ALPHA,[p1]:e.ONE_MINUS_CONSTANT_ALPHA};function Ee(U,ht,lt,ct,it,$,vt,It,ve,ce){if(U===ji){v===!0&&(dt(e.BLEND),v=!1);return}if(v===!1&&(Q(e.BLEND),v=!0),U!==Qb){if(U!==m||ce!==E){if((u!==ns||y!==ns)&&(e.blendEquation(e.FUNC_ADD),u=ns,y=ns),ce)switch(U){case hr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Am:e.blendFunc(e.ONE,e.ONE);break;case Rm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Cm:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Oe("WebGLState: Invalid blending: ",U);break}else switch(U){case hr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Am:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Rm:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cm:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",U);break}x=null,_=null,C=null,T=null,R.set(0,0,0),L=0,m=U,E=ce}return}it=it||ht,$=$||lt,vt=vt||ct,(ht!==u||it!==y)&&(e.blendEquationSeparate(Je[ht],Je[it]),u=ht,y=it),(lt!==x||ct!==_||$!==C||vt!==T)&&(e.blendFuncSeparate(qt[lt],qt[ct],qt[$],qt[vt]),x=lt,_=ct,C=$,T=vt),(It.equals(R)===!1||ve!==L)&&(e.blendColor(It.r,It.g,It.b,ve),R.copy(It),L=ve),m=U,E=!1}function w(U,ht){U.side===Ii?dt(e.CULL_FACE):Q(e.CULL_FACE);let lt=U.side===bn;ht&&(lt=!lt),Qt(lt),U.blending===hr&&U.transparent===!1?Ee(ji):Ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const ct=U.stencilWrite;o.setTest(ct),ct&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),yt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):dt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(U){M!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),M=U)}function Jt(U){U!==jb?(Q(e.CULL_FACE),U!==D&&(U===Tm?e.cullFace(e.BACK):U===Zb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):dt(e.CULL_FACE),D=U}function ge(U){U!==I&&(N&&e.lineWidth(U),I=U)}function yt(U,ht,lt){U?(Q(e.POLYGON_OFFSET_FILL),(k!==ht||Z!==lt)&&(e.polygonOffset(ht,lt),k=ht,Z=lt)):dt(e.POLYGON_OFFSET_FILL)}function Ae(U){U?Q(e.SCISSOR_TEST):dt(e.SCISSOR_TEST)}function Rt(U){U===void 0&&(U=e.TEXTURE0+Y-1),q!==U&&(e.activeTexture(U),q=U)}function Ht(U,ht,lt){lt===void 0&&(q===null?lt=e.TEXTURE0+Y-1:lt=q);let ct=tt[lt];ct===void 0&&(ct={type:void 0,texture:void 0},tt[lt]=ct),(ct.type!==U||ct.texture!==ht)&&(q!==lt&&(e.activeTexture(lt),q=lt),e.bindTexture(U,ht||W[U]),ct.type=U,ct.texture=ht)}function A(){const U=tt[q];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function B(){try{e.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function K(){try{e.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function et(){try{e.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Et(){try{e.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ft(){try{e.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Ct(){try{e.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function bt(){try{e.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function nt(){try{e.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ot(U){mt.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),mt.copy(U))}function Lt(U){_t.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),_t.copy(U))}function Dt(U,ht){let lt=c.get(ht);lt===void 0&&(lt=new WeakMap,c.set(ht,lt));let ct=lt.get(U);ct===void 0&&(ct=e.getUniformBlockIndex(ht,U.name),lt.set(U,ct))}function xt(U,ht){const ct=c.get(ht).get(U);l.get(ht)!==ct&&(e.uniformBlockBinding(ht,ct,U.__bindingPointIndex),l.set(ht,ct))}function Pt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},q=null,tt={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,u=null,x=null,_=null,y=null,C=null,T=null,R=new ae(0,0,0),L=0,E=!1,M=null,D=null,I=null,k=null,Z=null,mt.set(0,0,e.canvas.width,e.canvas.height),_t.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Q,disable:dt,bindFramebuffer:zt,drawBuffers:Tt,useProgram:Kt,setBlending:Ee,setMaterial:w,setFlipSided:Qt,setCullFace:Jt,setLineWidth:ge,setPolygonOffset:yt,setScissorTest:Ae,activeTexture:Rt,bindTexture:Ht,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:bt,texImage3D:nt,updateUBOMapping:Dt,uniformBlockBinding:xt,texStorage2D:ft,texStorage3D:Ct,texSubImage2D:K,texSubImage3D:et,compressedTexSubImage2D:X,compressedTexSubImage3D:Et,scissor:ot,viewport:Lt,reset:Pt}}function cR(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Kc("canvas")}function v(A,S,B){let K=1;const et=Ht(A);if((et.width>B||et.height>B)&&(K=B/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(K*et.width),Et=Math.floor(K*et.height);d===void 0&&(d=g(X,Et));const ft=S?g(X,Et):d;return ft.width=X,ft.height=Et,ft.getContext("2d").drawImage(A,0,0,X,Et),Ft("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+X+"x"+Et+")."),ft}else return"data"in A&&Ft("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(A,S,B,K,et=!1){if(A!==null){if(e[A]!==void 0)return e[A];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=S;if(S===e.RED&&(B===e.FLOAT&&(X=e.R32F),B===e.HALF_FLOAT&&(X=e.R16F),B===e.UNSIGNED_BYTE&&(X=e.R8)),S===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(X=e.R8UI),B===e.UNSIGNED_SHORT&&(X=e.R16UI),B===e.UNSIGNED_INT&&(X=e.R32UI),B===e.BYTE&&(X=e.R8I),B===e.SHORT&&(X=e.R16I),B===e.INT&&(X=e.R32I)),S===e.RG&&(B===e.FLOAT&&(X=e.RG32F),B===e.HALF_FLOAT&&(X=e.RG16F),B===e.UNSIGNED_BYTE&&(X=e.RG8)),S===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(X=e.RG8UI),B===e.UNSIGNED_SHORT&&(X=e.RG16UI),B===e.UNSIGNED_INT&&(X=e.RG32UI),B===e.BYTE&&(X=e.RG8I),B===e.SHORT&&(X=e.RG16I),B===e.INT&&(X=e.RG32I)),S===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(X=e.RGB8UI),B===e.UNSIGNED_SHORT&&(X=e.RGB16UI),B===e.UNSIGNED_INT&&(X=e.RGB32UI),B===e.BYTE&&(X=e.RGB8I),B===e.SHORT&&(X=e.RGB16I),B===e.INT&&(X=e.RGB32I)),S===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),B===e.UNSIGNED_INT&&(X=e.RGBA32UI),B===e.BYTE&&(X=e.RGBA8I),B===e.SHORT&&(X=e.RGBA16I),B===e.INT&&(X=e.RGBA32I)),S===e.RGB&&(B===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),S===e.RGBA){const Et=et?jc:ie.getTransfer(K);B===e.FLOAT&&(X=e.RGBA32F),B===e.HALF_FLOAT&&(X=e.RGBA16F),B===e.UNSIGNED_BYTE&&(X=Et===fe?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(A,S){let B;return A?S===null||S===ms||S===Go?B=e.DEPTH24_STENCIL8:S===Xi?B=e.DEPTH32F_STENCIL8:S===Ho&&(B=e.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ms||S===Go?B=e.DEPTH_COMPONENT24:S===Xi?B=e.DEPTH_COMPONENT32F:S===Ho&&(B=e.DEPTH_COMPONENT16),B}function C(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==In&&A.minFilter!==$n?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){const S=A.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&f.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),M(S)}function L(A){const S=i.get(A);if(S.__webglInit===void 0)return;const B=A.source,K=h.get(B);if(K){const et=K[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(A),Object.keys(K).length===0&&h.delete(B)}i.remove(A)}function E(A){const S=i.get(A);e.deleteTexture(S.__webglTexture);const B=A.source,K=h.get(B);delete K[S.__cacheKey],r.memory.textures--}function M(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let et=0;et<S.__webglFramebuffer[K].length;et++)e.deleteFramebuffer(S.__webglFramebuffer[K][et]);else e.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)e.deleteFramebuffer(S.__webglFramebuffer[K]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let K=0,et=B.length;K<et;K++){const X=i.get(B[K]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),r.memory.textures--),i.remove(B[K])}i.remove(A)}let D=0;function I(){D=0}function k(){const A=D;return A>=a.maxTextures&&Ft("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),D+=1,A}function Z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Y(A,S){const B=i.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const K=A.image;if(K===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{W(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+S)}function N(A,S){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){W(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+S)}function H(A,S){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){W(B,A,S);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+S)}function F(A,S){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Q(B,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+S)}const q={[Zh]:e.REPEAT,[ki]:e.CLAMP_TO_EDGE,[Kh]:e.MIRRORED_REPEAT},tt={[In]:e.NEAREST,[E1]:e.NEAREST_MIPMAP_NEAREST,[Cl]:e.NEAREST_MIPMAP_LINEAR,[$n]:e.LINEAR,[ff]:e.LINEAR_MIPMAP_NEAREST,[as]:e.LINEAR_MIPMAP_LINEAR},st={[w1]:e.NEVER,[P1]:e.ALWAYS,[D1]:e.LESS,[Jv]:e.LEQUAL,[U1]:e.EQUAL,[O1]:e.GEQUAL,[L1]:e.GREATER,[N1]:e.NOTEQUAL};function at(A,S){if(S.type===Xi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===$n||S.magFilter===ff||S.magFilter===Cl||S.magFilter===as||S.minFilter===$n||S.minFilter===ff||S.minFilter===Cl||S.minFilter===as)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,q[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,q[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,q[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,tt[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===In||S.minFilter!==Cl&&S.minFilter!==as||S.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function mt(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const K=S.source;let et=h.get(K);et===void 0&&(et={},h.set(K,et));const X=Z(S);if(X!==A.__cacheKey){et[X]===void 0&&(et[X]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),et[X].usedTimes++;const Et=et[A.__cacheKey];Et!==void 0&&(et[A.__cacheKey].usedTimes--,Et.usedTimes===0&&E(S)),A.__cacheKey=X,A.__webglTexture=et[X].texture}return B}function _t(A,S,B){return Math.floor(Math.floor(A/B)/S)}function Bt(A,S,B,K){const X=A.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,B,K,S.data);else{X.sort((nt,ot)=>nt.start-ot.start);let Et=0;for(let nt=1;nt<X.length;nt++){const ot=X[Et],Lt=X[nt],Dt=ot.start+ot.count,xt=_t(Lt.start,S.width,4),Pt=_t(ot.start,S.width,4);Lt.start<=Dt+1&&xt===Pt&&_t(Lt.start+Lt.count-1,S.width,4)===xt?ot.count=Math.max(ot.count,Lt.start+Lt.count-ot.start):(++Et,X[Et]=Lt)}X.length=Et+1;const ft=e.getParameter(e.UNPACK_ROW_LENGTH),Ct=e.getParameter(e.UNPACK_SKIP_PIXELS),bt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let nt=0,ot=X.length;nt<ot;nt++){const Lt=X[nt],Dt=Math.floor(Lt.start/4),xt=Math.ceil(Lt.count/4),Pt=Dt%S.width,U=Math.floor(Dt/S.width),ht=xt,lt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Pt),e.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Pt,U,ht,lt,B,K,S.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ft),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ct),e.pixelStorei(e.UNPACK_SKIP_ROWS,bt)}}function W(A,S,B){let K=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=e.TEXTURE_3D);const et=mt(A,S),X=S.source;n.bindTexture(K,A.__webglTexture,e.TEXTURE0+B);const Et=i.get(X);if(X.version!==Et.__version||et===!0){n.activeTexture(e.TEXTURE0+B);const ft=ie.getPrimaries(ie.workingColorSpace),Ct=S.colorSpace===_a?null:ie.getPrimaries(S.colorSpace),bt=S.colorSpace===_a||ft===Ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let nt=v(S.image,!1,a.maxTextureSize);nt=Rt(S,nt);const ot=s.convert(S.format,S.colorSpace),Lt=s.convert(S.type);let Dt=_(S.internalFormat,ot,Lt,S.colorSpace,S.isVideoTexture);at(K,S);let xt;const Pt=S.mipmaps,U=S.isVideoTexture!==!0,ht=Et.__version===void 0||et===!0,lt=X.dataReady,ct=C(S,nt);if(S.isDepthTexture)Dt=y(S.format===ko,S.type),ht&&(U?n.texStorage2D(e.TEXTURE_2D,1,Dt,nt.width,nt.height):n.texImage2D(e.TEXTURE_2D,0,Dt,nt.width,nt.height,0,ot,Lt,null));else if(S.isDataTexture)if(Pt.length>0){U&&ht&&n.texStorage2D(e.TEXTURE_2D,ct,Dt,Pt[0].width,Pt[0].height);for(let it=0,$=Pt.length;it<$;it++)xt=Pt[it],U?lt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,xt.width,xt.height,ot,Lt,xt.data):n.texImage2D(e.TEXTURE_2D,it,Dt,xt.width,xt.height,0,ot,Lt,xt.data);S.generateMipmaps=!1}else U?(ht&&n.texStorage2D(e.TEXTURE_2D,ct,Dt,nt.width,nt.height),lt&&Bt(S,nt,ot,Lt)):n.texImage2D(e.TEXTURE_2D,0,Dt,nt.width,nt.height,0,ot,Lt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&ht&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,Dt,Pt[0].width,Pt[0].height,nt.depth);for(let it=0,$=Pt.length;it<$;it++)if(xt=Pt[it],S.format!==fi)if(ot!==null)if(U){if(lt)if(S.layerUpdates.size>0){const vt=nx(xt.width,xt.height,S.format,S.type);for(const It of S.layerUpdates){const ve=xt.data.subarray(It*vt/xt.data.BYTES_PER_ELEMENT,(It+1)*vt/xt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,It,xt.width,xt.height,1,ot,ve)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,nt.depth,ot,xt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,it,Dt,xt.width,xt.height,nt.depth,0,xt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?lt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,nt.depth,ot,Lt,xt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,it,Dt,xt.width,xt.height,nt.depth,0,ot,Lt,xt.data)}else{U&&ht&&n.texStorage2D(e.TEXTURE_2D,ct,Dt,Pt[0].width,Pt[0].height);for(let it=0,$=Pt.length;it<$;it++)xt=Pt[it],S.format!==fi?ot!==null?U?lt&&n.compressedTexSubImage2D(e.TEXTURE_2D,it,0,0,xt.width,xt.height,ot,xt.data):n.compressedTexImage2D(e.TEXTURE_2D,it,Dt,xt.width,xt.height,0,xt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?lt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,xt.width,xt.height,ot,Lt,xt.data):n.texImage2D(e.TEXTURE_2D,it,Dt,xt.width,xt.height,0,ot,Lt,xt.data)}else if(S.isDataArrayTexture)if(U){if(ht&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,Dt,nt.width,nt.height,nt.depth),lt)if(S.layerUpdates.size>0){const it=nx(nt.width,nt.height,S.format,S.type);for(const $ of S.layerUpdates){const vt=nt.data.subarray($*it/nt.data.BYTES_PER_ELEMENT,($+1)*it/nt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,nt.width,nt.height,1,ot,Lt,vt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ot,Lt,nt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Dt,nt.width,nt.height,nt.depth,0,ot,Lt,nt.data);else if(S.isData3DTexture)U?(ht&&n.texStorage3D(e.TEXTURE_3D,ct,Dt,nt.width,nt.height,nt.depth),lt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ot,Lt,nt.data)):n.texImage3D(e.TEXTURE_3D,0,Dt,nt.width,nt.height,nt.depth,0,ot,Lt,nt.data);else if(S.isFramebufferTexture){if(ht)if(U)n.texStorage2D(e.TEXTURE_2D,ct,Dt,nt.width,nt.height);else{let it=nt.width,$=nt.height;for(let vt=0;vt<ct;vt++)n.texImage2D(e.TEXTURE_2D,vt,Dt,it,$,0,ot,Lt,null),it>>=1,$>>=1}}else if(Pt.length>0){if(U&&ht){const it=Ht(Pt[0]);n.texStorage2D(e.TEXTURE_2D,ct,Dt,it.width,it.height)}for(let it=0,$=Pt.length;it<$;it++)xt=Pt[it],U?lt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,ot,Lt,xt):n.texImage2D(e.TEXTURE_2D,it,Dt,ot,Lt,xt);S.generateMipmaps=!1}else if(U){if(ht){const it=Ht(nt);n.texStorage2D(e.TEXTURE_2D,ct,Dt,it.width,it.height)}lt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,Lt,nt)}else n.texImage2D(e.TEXTURE_2D,0,Dt,ot,Lt,nt);m(S)&&u(K),Et.__version=X.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,B){if(S.image.length!==6)return;const K=mt(A,S),et=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+B);const X=i.get(et);if(et.version!==X.__version||K===!0){n.activeTexture(e.TEXTURE0+B);const Et=ie.getPrimaries(ie.workingColorSpace),ft=S.colorSpace===_a?null:ie.getPrimaries(S.colorSpace),Ct=S.colorSpace===_a||Et===ft?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const bt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,ot=[];for(let $=0;$<6;$++)!bt&&!nt?ot[$]=v(S.image[$],!0,a.maxCubemapSize):ot[$]=nt?S.image[$].image:S.image[$],ot[$]=Rt(S,ot[$]);const Lt=ot[0],Dt=s.convert(S.format,S.colorSpace),xt=s.convert(S.type),Pt=_(S.internalFormat,Dt,xt,S.colorSpace),U=S.isVideoTexture!==!0,ht=X.__version===void 0||K===!0,lt=et.dataReady;let ct=C(S,Lt);at(e.TEXTURE_CUBE_MAP,S);let it;if(bt){U&&ht&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,Pt,Lt.width,Lt.height);for(let $=0;$<6;$++){it=ot[$].mipmaps;for(let vt=0;vt<it.length;vt++){const It=it[vt];S.format!==fi?Dt!==null?U?lt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,vt,0,0,It.width,It.height,Dt,It.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,vt,Pt,It.width,It.height,0,It.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,vt,0,0,It.width,It.height,Dt,xt,It.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,vt,Pt,It.width,It.height,0,Dt,xt,It.data)}}}else{if(it=S.mipmaps,U&&ht){it.length>0&&ct++;const $=Ht(ot[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,Pt,$.width,$.height)}for(let $=0;$<6;$++)if(nt){U?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ot[$].width,ot[$].height,Dt,xt,ot[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Pt,ot[$].width,ot[$].height,0,Dt,xt,ot[$].data);for(let vt=0;vt<it.length;vt++){const ve=it[vt].image[$].image;U?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,vt+1,0,0,ve.width,ve.height,Dt,xt,ve.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,vt+1,Pt,ve.width,ve.height,0,Dt,xt,ve.data)}}else{U?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Dt,xt,ot[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Pt,Dt,xt,ot[$]);for(let vt=0;vt<it.length;vt++){const It=it[vt];U?lt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,vt+1,0,0,Dt,xt,It.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,vt+1,Pt,Dt,xt,It.image[$])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),X.__version=et.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function dt(A,S,B,K,et,X){const Et=s.convert(B.format,B.colorSpace),ft=s.convert(B.type),Ct=_(B.internalFormat,Et,ft,B.colorSpace),bt=i.get(S),nt=i.get(B);if(nt.__renderTarget=S,!bt.__hasExternalTextures){const ot=Math.max(1,S.width>>X),Lt=Math.max(1,S.height>>X);et===e.TEXTURE_3D||et===e.TEXTURE_2D_ARRAY?n.texImage3D(et,X,Ct,ot,Lt,S.depth,0,Et,ft,null):n.texImage2D(et,X,Ct,ot,Lt,0,Et,ft,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,et,nt.__webglTexture,0,ge(S)):(et===e.TEXTURE_2D||et>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,et,nt.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function zt(A,S,B){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){const K=S.depthTexture,et=K&&K.isDepthTexture?K.type:null,X=y(S.stencilBuffer,et),Et=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=ge(S);yt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ft,X,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,ft,X,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,X,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Et,e.RENDERBUFFER,A)}else{const K=S.textures;for(let et=0;et<K.length;et++){const X=K[et],Et=s.convert(X.format,X.colorSpace),ft=s.convert(X.type),Ct=_(X.internalFormat,Et,ft,X.colorSpace),bt=ge(S);B&&yt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,bt,Ct,S.width,S.height):yt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,bt,Ct,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Ct,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Tt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const et=K.__webglTexture,X=ge(S);if(S.depthTexture.format===Vo)yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,et,0);else if(S.depthTexture.format===ko)yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Kt(A){const S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const K=A.texture.mipmaps;K&&K.length>0?Tt(S.__webglFramebuffer[0],A):Tt(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=e.createRenderbuffer(),zt(S.__webglDepthbuffer[K],A,!1);else{const et=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,X)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),zt(S.__webglDepthbuffer,A,!1);else{const et=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,et,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Je(A,S,B){const K=i.get(A);S!==void 0&&dt(K.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&Kt(A)}function qt(A){const S=A.texture,B=i.get(A),K=i.get(S);A.addEventListener("dispose",R);const et=A.textures,X=A.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=S.version,r.memory.textures++),X){B.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ft]=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)B.__webglFramebuffer[ft][Ct]=e.createFramebuffer()}else B.__webglFramebuffer[ft]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)B.__webglFramebuffer[ft]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(Et)for(let ft=0,Ct=et.length;ft<Ct;ft++){const bt=i.get(et[ft]);bt.__webglTexture===void 0&&(bt.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&yt(A)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const Ct=et[ft];B.__webglColorRenderbuffer[ft]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[ft]);const bt=s.convert(Ct.format,Ct.colorSpace),nt=s.convert(Ct.type),ot=_(Ct.internalFormat,bt,nt,Ct.colorSpace,A.isXRRenderTarget===!0),Lt=ge(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Lt,ot,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,B.__webglColorRenderbuffer[ft])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),zt(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),at(e.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)dt(B.__webglFramebuffer[ft][Ct],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ct);else dt(B.__webglFramebuffer[ft],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Et){for(let ft=0,Ct=et.length;ft<Ct;ft++){const bt=et[ft],nt=i.get(bt);let ot=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,nt.__webglTexture),at(ot,bt),dt(B.__webglFramebuffer,A,bt,e.COLOR_ATTACHMENT0+ft,ot,0),m(bt)&&u(ot)}n.unbindTexture()}else{let ft=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,K.__webglTexture),at(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)dt(B.__webglFramebuffer[Ct],A,S,e.COLOR_ATTACHMENT0,ft,Ct);else dt(B.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,ft,0);m(S)&&u(ft),n.unbindTexture()}A.depthBuffer&&Kt(A)}function Ee(A){const S=A.textures;for(let B=0,K=S.length;B<K;B++){const et=S[B];if(m(et)){const X=x(A),Et=i.get(et).__webglTexture;n.bindTexture(X,Et),u(X),n.unbindTexture()}}}const w=[],Qt=[];function Jt(A){if(A.samples>0){if(yt(A)===!1){const S=A.textures,B=A.width,K=A.height;let et=e.COLOR_BUFFER_BIT;const X=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Et=i.get(A),ft=S.length>1;if(ft)for(let bt=0;bt<S.length;bt++)n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Ct=A.texture.mipmaps;Ct&&Ct.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let bt=0;bt<S.length;bt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=e.STENCIL_BUFFER_BIT)),ft){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Et.__webglColorRenderbuffer[bt]);const nt=i.get(S[bt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,nt,0)}e.blitFramebuffer(0,0,B,K,0,0,B,K,et,e.NEAREST),l===!0&&(w.length=0,Qt.length=0,w.push(e.COLOR_ATTACHMENT0+bt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(w.push(X),Qt.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Qt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,w))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ft)for(let bt=0;bt<S.length;bt++){n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.RENDERBUFFER,Et.__webglColorRenderbuffer[bt]);const nt=i.get(S[bt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+bt,e.TEXTURE_2D,nt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function ge(A){return Math.min(a.maxSamples,A.samples)}function yt(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(A){const S=r.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function Rt(A,S){const B=A.colorSpace,K=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Cr&&B!==_a&&(ie.getTransfer(B)===fe?(K!==fi||et!==ea)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",B)),S}function Ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=F,this.rebindTextures=Je,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=yt}function uR(e,t){function n(i,a=_a){let s;const r=ie.getTransfer(a);if(i===ea)return e.UNSIGNED_BYTE;if(i===Dp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Up)return e.UNSIGNED_SHORT_5_5_5_1;if(i===qv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===jv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wv)return e.BYTE;if(i===Yv)return e.SHORT;if(i===Ho)return e.UNSIGNED_SHORT;if(i===wp)return e.INT;if(i===ms)return e.UNSIGNED_INT;if(i===Xi)return e.FLOAT;if(i===Hr)return e.HALF_FLOAT;if(i===Zv)return e.ALPHA;if(i===Kv)return e.RGB;if(i===fi)return e.RGBA;if(i===Vo)return e.DEPTH_COMPONENT;if(i===ko)return e.DEPTH_STENCIL;if(i===Qv)return e.RED;if(i===Lp)return e.RED_INTEGER;if(i===Np)return e.RG;if(i===Op)return e.RG_INTEGER;if(i===Pp)return e.RGBA_INTEGER;if(i===pc||i===mc||i===xc||i===gc)if(r===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qh||i===Jh||i===$h||i===td)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===td)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ed||i===nd||i===id)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ed||i===nd)return r===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===id)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ad||i===sd||i===rd||i===od||i===ld||i===cd||i===ud||i===fd||i===hd||i===dd||i===pd||i===md||i===xd||i===gd)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ad)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===od)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ld)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ud)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===md)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_d||i===vd||i===Sd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===_d)return r===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yd||i===Md||i===bd||i===Ed)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===yd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Md)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ed)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Go?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const fR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new cS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new ia({vertexShader:fR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vn(new Mu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pR extends bs{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new dR,u={},x=n.getContextAttributes();let _=null,y=null;const C=[],T=[],R=new Xt;let L=null;const E=new ci;E.viewport=new ze;const M=new ci;M.viewport=new ze;const D=[E,M],I=new LE;let k=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=C[W];return Q===void 0&&(Q=new Lf,C[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=C[W];return Q===void 0&&(Q=new Lf,C[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=C[W];return Q===void 0&&(Q=new Lf,C[W]=Q),Q.getHandSpace()};function Y(W){const Q=T.indexOf(W.inputSource);if(Q===-1)return;const dt=C[Q];dt!==void 0&&(dt.update(W.inputSource,W.frame,c||r),dt.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",N),a.removeEventListener("inputsourceschange",H);for(let W=0;W<C.length;W++){const Q=T[W];Q!==null&&(T[W]=null,C[W].disconnect(Q))}k=null,Z=null,m.reset();for(const W in u)delete u[W];t.setRenderTarget(_),p=null,h=null,d=null,a=null,y=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(a,n)),d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",N),a.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await n.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,zt=null,Tt=null;x.depth&&(Tt=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,dt=x.stencil?ko:Vo,zt=x.stencil?Go:ms);const Kt={colorFormat:n.RGBA8,depthFormat:Tt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Kt),a.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new gs(h.textureWidth,h.textureHeight,{format:fi,type:ea,depthTexture:new lS(h.textureWidth,h.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const dt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,dt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new gs(p.framebufferWidth,p.framebufferHeight,{format:fi,type:ea,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Bt.setContext(a),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(W){for(let Q=0;Q<W.removed.length;Q++){const dt=W.removed[Q],zt=T.indexOf(dt);zt>=0&&(T[zt]=null,C[zt].disconnect(dt))}for(let Q=0;Q<W.added.length;Q++){const dt=W.added[Q];let zt=T.indexOf(dt);if(zt===-1){for(let Kt=0;Kt<C.length;Kt++)if(Kt>=T.length){T.push(dt),zt=Kt;break}else if(T[Kt]===null){T[Kt]=dt,zt=Kt;break}if(zt===-1)break}const Tt=C[zt];Tt&&Tt.connect(dt)}}const F=new P,q=new P;function tt(W,Q,dt){F.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(dt.matrixWorld);const zt=F.distanceTo(q),Tt=Q.projectionMatrix.elements,Kt=dt.projectionMatrix.elements,Je=Tt[14]/(Tt[10]-1),qt=Tt[14]/(Tt[10]+1),Ee=(Tt[9]+1)/Tt[5],w=(Tt[9]-1)/Tt[5],Qt=(Tt[8]-1)/Tt[0],Jt=(Kt[8]+1)/Kt[0],ge=Je*Qt,yt=Je*Jt,Ae=zt/(-Qt+Jt),Rt=Ae*-Qt;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Rt),W.translateZ(Ae),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Tt[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ht=Je+Ae,A=qt+Ae,S=ge-Rt,B=yt+(zt-Rt),K=Ee*qt/A*Ht,et=w*qt/A*Ht;W.projectionMatrix.makePerspective(S,B,K,et,Ht,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function st(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let Q=W.near,dt=W.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),I.near=M.near=E.near=Q,I.far=M.far=E.far=dt,(k!==I.near||Z!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),k=I.near,Z=I.far),I.layers.mask=W.layers.mask|6,E.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const zt=W.parent,Tt=I.cameras;st(I,zt);for(let Kt=0;Kt<Tt.length;Kt++)st(Tt[Kt],zt);Tt.length===2?tt(I,E,M):I.projectionMatrix.copy(E.projectionMatrix),at(W,I,zt)};function at(W,Q,dt){dt===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(dt.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Wo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(W){return u[W]};let mt=null;function _t(W,Q){if(f=Q.getViewerPose(c||r),g=Q,f!==null){const dt=f.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let zt=!1;dt.length!==I.cameras.length&&(I.cameras.length=0,zt=!0);for(let qt=0;qt<dt.length;qt++){const Ee=dt[qt];let w=null;if(p!==null)w=p.getViewport(Ee);else{const Jt=d.getViewSubImage(h,Ee);w=Jt.viewport,qt===0&&(t.setRenderTargetTextures(y,Jt.colorTexture,Jt.depthStencilTexture),t.setRenderTarget(y))}let Qt=D[qt];Qt===void 0&&(Qt=new ci,Qt.layers.enable(qt),Qt.viewport=new ze,D[qt]=Qt),Qt.matrix.fromArray(Ee.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Ee.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(w.x,w.y,w.width,w.height),qt===0&&(I.matrix.copy(Qt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),zt===!0&&I.cameras.push(Qt)}const Tt=a.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const qt=d.getDepthInformation(dt[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,a.renderState)}if(Tt&&Tt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let qt=0;qt<dt.length;qt++){const Ee=dt[qt].camera;if(Ee){let w=u[Ee];w||(w=new cS,u[Ee]=w);const Qt=d.getCameraImage(Ee);w.sourceTexture=Qt}}}}for(let dt=0;dt<C.length;dt++){const zt=T[dt],Tt=C[dt];zt!==null&&Tt!==void 0&&Tt.update(zt,Q,c||r)}mt&&mt(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Bt=new hS;Bt.setAnimationLoop(_t),this.setAnimationLoop=function(W){mt=W},this.dispose=function(){}}}const Qa=new na,mR=new we;function xR(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,aS(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,x,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,x,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===bn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===bn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=t.get(u),_=x.envMap,y=x.envMapRotation;_&&(m.envMap.value=_,Qa.copy(y),Qa.x*=-1,Qa.y*=-1,Qa.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qa.y*=-1,Qa.z*=-1),m.envMapRotation.value.setFromMatrix4(mR.makeRotationFromEuler(Qa)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===bn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const x=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function gR(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=a[x.id];y===void 0&&(g(x),y=f(x),a[x.id]=y,x.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(x,C);const T=t.render.frame;s[x.id]!==T&&(h(x),s[x.id]=T)}function f(x){const _=d();x.__bindingPointIndex=_;const y=e.createBuffer(),C=x.__size,T=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,C,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,y),y}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=a[x.id],y=x.uniforms,C=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let T=0,R=y.length;T<R;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,M=L.length;E<M;E++){const D=L[E];if(p(D,T,E,C)===!0){const I=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let Z=0;for(let Y=0;Y<k.length;Y++){const N=k[Y],H=v(N);typeof N=="number"||typeof N=="boolean"?(D.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,I+Z,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=0,D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=0,D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=0):(N.toArray(D.__data,Z),Z+=H.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,I,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(x,_,y,C){const T=x.value,R=_+"_"+y;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const L=C[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(x){const _=x.uniforms;let y=0;const C=16;for(let R=0,L=_.length;R<L;R++){const E=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,D=E.length;M<D;M++){const I=E[M],k=Array.isArray(I.value)?I.value:[I.value];for(let Z=0,Y=k.length;Z<Y;Z++){const N=k[Z],H=v(N),F=y%C,q=F%H.boundary,tt=F+q;y+=q,tt!==0&&C-tt<H.storage&&(y+=C-tt),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=H.storage}}}const T=y%C;return T>0&&(y+=C-T),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ft("WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function u(){for(const x in a)e.deleteBuffer(a[x]);r=[],a={},s={}}return{bind:l,update:c,dispose:u}}const _R=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Oi=null;function vR(){return Oi===null&&(Oi=new AE(_R,32,32,Np,Hr),Oi.minFilter=$n,Oi.magFilter=$n,Oi.wrapS=ki,Oi.wrapT=ki,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class SR{constructor(t={}){const{canvas:n=z1(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const g=new Set([Pp,Op,Lp]),v=new Set([ea,ms,Ho,Go,Dp,Up]),m=new Uint32Array(4),u=new Int32Array(4);let x=null,_=null;const y=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let R=!1;this._outputColorSpace=Yn;let L=0,E=0,M=null,D=-1,I=null;const k=new ze,Z=new ze;let Y=null;const N=new ae(0);let H=0,F=n.width,q=n.height,tt=1,st=null,at=null;const mt=new ze(0,0,F,q),_t=new ze(0,0,F,q);let Bt=!1;const W=new oS;let Q=!1,dt=!1;const zt=new we,Tt=new P,Kt=new ze,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Ee(){return M===null?tt:1}let w=i;function Qt(b,O){return n.getContext(b,O)}try{const b={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cp}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",$,!1),n.addEventListener("webglcontextcreationerror",vt,!1),w===null){const O="webgl2";if(w=Qt(O,b),w===null)throw Qt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let Jt,ge,yt,Ae,Rt,Ht,A,S,B,K,et,X,Et,ft,Ct,bt,nt,ot,Lt,Dt,xt,Pt,U,ht;function lt(){Jt=new C2(w),Jt.init(),Pt=new uR(w,Jt),ge=new v2(w,Jt,t,Pt),yt=new lR(w,Jt),ge.reversedDepthBuffer&&h&&yt.buffers.depth.setReversed(!0),Ae=new U2(w),Rt=new ZA,Ht=new cR(w,Jt,yt,Rt,ge,Pt,Ae),A=new y2(T),S=new R2(T),B=new PE(w),U=new g2(w,B),K=new w2(w,B,Ae,U),et=new N2(w,K,B,Ae),Lt=new L2(w,ge,Ht),bt=new S2(Rt),X=new jA(T,A,S,Jt,ge,U,bt),Et=new xR(T,Rt),ft=new QA,Ct=new iR(Jt),ot=new x2(T,A,S,yt,et,p,l),nt=new rR(T,et,ge),ht=new gR(w,Ae,ge,yt),Dt=new _2(w,Jt,Ae),xt=new D2(w,Jt,Ae),Ae.programs=X.programs,T.capabilities=ge,T.extensions=Jt,T.properties=Rt,T.renderLists=ft,T.shadowMap=nt,T.state=yt,T.info=Ae}lt();const ct=new pR(T,w);this.xr=ct,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const b=Jt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Jt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(F,q,!1))},this.getSize=function(b){return b.set(F,q)},this.setSize=function(b,O,G=!0){if(ct.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,q=O,n.width=Math.floor(b*tt),n.height=Math.floor(O*tt),G===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(F*tt,q*tt).floor()},this.setDrawingBufferSize=function(b,O,G){F=b,q=O,tt=G,n.width=Math.floor(b*G),n.height=Math.floor(O*G),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,O,G,V){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,O,G,V),yt.viewport(k.copy(mt).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(_t)},this.setScissor=function(b,O,G,V){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,O,G,V),yt.scissor(Z.copy(_t).multiplyScalar(tt).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(b){yt.setScissorTest(Bt=b)},this.setOpaqueSort=function(b){st=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,G=!0){let V=0;if(b){let z=!1;if(M!==null){const rt=M.texture.format;z=g.has(rt)}if(z){const rt=M.texture.type,pt=v.has(rt),St=ot.getClearColor(),gt=ot.getClearAlpha(),Ut=St.r,Ot=St.g,At=St.b;pt?(m[0]=Ut,m[1]=Ot,m[2]=At,m[3]=gt,w.clearBufferuiv(w.COLOR,0,m)):(u[0]=Ut,u[1]=Ot,u[2]=At,u[3]=gt,w.clearBufferiv(w.COLOR,0,u))}else V|=w.COLOR_BUFFER_BIT}O&&(V|=w.DEPTH_BUFFER_BIT),G&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",$,!1),n.removeEventListener("webglcontextcreationerror",vt,!1),ot.dispose(),ft.dispose(),Ct.dispose(),Rt.dispose(),A.dispose(),S.dispose(),et.dispose(),U.dispose(),ht.dispose(),X.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Gp),ct.removeEventListener("sessionend",Vp),ka.stop()};function it(b){b.preventDefault(),Nm("WebGLRenderer: Context Lost."),R=!0}function $(){Nm("WebGLRenderer: Context Restored."),R=!1;const b=Ae.autoReset,O=nt.enabled,G=nt.autoUpdate,V=nt.needsUpdate,z=nt.type;lt(),Ae.autoReset=b,nt.enabled=O,nt.autoUpdate=G,nt.needsUpdate=V,nt.type=z}function vt(b){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const O=b.target;O.removeEventListener("dispose",It),ve(O)}function ve(b){ce(b),Rt.remove(b)}function ce(b){const O=Rt.get(b).programs;O!==void 0&&(O.forEach(function(G){X.releaseProgram(G)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,G,V,z,rt){O===null&&(O=Je);const pt=z.isMesh&&z.matrixWorld.determinant()<0,St=vS(b,O,G,V,z);yt.setMaterial(V,pt);let gt=G.index,Ut=1;if(V.wireframe===!0){if(gt=K.getWireframeAttribute(G),gt===void 0)return;Ut=2}const Ot=G.drawRange,At=G.attributes.position;let $t=Ot.start*Ut,ue=(Ot.start+Ot.count)*Ut;rt!==null&&($t=Math.max($t,rt.start*Ut),ue=Math.min(ue,(rt.start+rt.count)*Ut)),gt!==null?($t=Math.max($t,0),ue=Math.min(ue,gt.count)):At!=null&&($t=Math.max($t,0),ue=Math.min(ue,At.count));const De=ue-$t;if(De<0||De===1/0)return;U.setup(z,V,St,G,gt);let Ue,me=Dt;if(gt!==null&&(Ue=B.get(gt),me=xt,me.setIndex(Ue)),z.isMesh)V.wireframe===!0?(yt.setLineWidth(V.wireframeLinewidth*Ee()),me.setMode(w.LINES)):me.setMode(w.TRIANGLES);else if(z.isLine){let wt=V.linewidth;wt===void 0&&(wt=1),yt.setLineWidth(wt*Ee()),z.isLineSegments?me.setMode(w.LINES):z.isLineLoop?me.setMode(w.LINE_LOOP):me.setMode(w.LINE_STRIP)}else z.isPoints?me.setMode(w.POINTS):z.isSprite&&me.setMode(w.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Xo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const wt=z._multiDrawStarts,Re=z._multiDrawCounts,ne=z._multiDrawCount,Rn=gt?B.get(gt).bytesPerElement:1,Es=Rt.get(V).currentProgram.getUniforms();for(let Cn=0;Cn<ne;Cn++)Es.setValue(w,"_gl_DrawID",Cn),me.render(wt[Cn]/Rn,Re[Cn])}else if(z.isInstancedMesh)me.renderInstances($t,De,z.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Re=Math.min(G.instanceCount,wt);me.renderInstances($t,De,Re)}else me.render($t,De)};function pi(b,O,G){b.transparent===!0&&b.side===Ii&&b.forceSinglePass===!1?(b.side=bn,b.needsUpdate=!0,fl(b,O,G),b.side=Ha,b.needsUpdate=!0,fl(b,O,G),b.side=Ii):fl(b,O,G)}this.compile=function(b,O,G=null){G===null&&(G=b),_=Ct.get(G),_.init(O),C.push(_),G.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),b!==G&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(_.pushLight(z),z.castShadow&&_.pushShadow(z))}),_.setupLights();const V=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const rt=z.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const St=rt[pt];pi(St,G,z),V.add(St)}else pi(rt,G,z),V.add(rt)}),_=C.pop(),V},this.compileAsync=function(b,O,G=null){const V=this.compile(b,O,G);return new Promise(z=>{function rt(){if(V.forEach(function(pt){Rt.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){z(b);return}setTimeout(rt,10)}Jt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ii=null;function _S(b){ii&&ii(b)}function Gp(){ka.stop()}function Vp(){ka.start()}const ka=new hS;ka.setAnimationLoop(_S),typeof self<"u"&&ka.setContext(self),this.setAnimationLoop=function(b){ii=b,ct.setAnimationLoop(b),b===null?ka.stop():ka.start()},ct.addEventListener("sessionstart",Gp),ct.addEventListener("sessionend",Vp),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,O,M),_=Ct.get(b,C.length),_.init(O),C.push(_),zt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(zt,Si,O.reversedDepth),dt=this.localClippingEnabled,Q=bt.init(this.clippingPlanes,dt),x=ft.get(b,y.length),x.init(),y.push(x),ct.enabled===!0&&ct.isPresenting===!0){const rt=T.xr.getDepthSensingMesh();rt!==null&&Tu(rt,O,-1/0,T.sortObjects)}Tu(b,O,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(st,at),qt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,qt&&ot.addToRenderList(x,b),this.info.render.frame++,Q===!0&&bt.beginShadows();const G=_.state.shadowsArray;nt.render(G,b,O),Q===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,z=x.transmissive;if(_.setupLights(),O.isArrayCamera){const rt=O.cameras;if(z.length>0)for(let pt=0,St=rt.length;pt<St;pt++){const gt=rt[pt];Xp(V,z,b,gt)}qt&&ot.render(b);for(let pt=0,St=rt.length;pt<St;pt++){const gt=rt[pt];kp(x,b,gt,gt.viewport)}}else z.length>0&&Xp(V,z,b,O),qt&&ot.render(b),kp(x,b,O);M!==null&&E===0&&(Ht.updateMultisampleRenderTarget(M),Ht.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(T,b,O),U.resetDefaultState(),D=-1,I=null,C.pop(),C.length>0?(_=C[C.length-1],Q===!0&&bt.setGlobalState(T.clippingPlanes,_.state.camera)):_=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function Tu(b,O,G,V){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){V&&Kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(zt);const pt=et.update(b),St=b.material;St.visible&&x.push(b,pt,St,G,Kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){const pt=et.update(b),St=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Kt.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Kt.copy(pt.boundingSphere.center)),Kt.applyMatrix4(b.matrixWorld).applyMatrix4(zt)),Array.isArray(St)){const gt=pt.groups;for(let Ut=0,Ot=gt.length;Ut<Ot;Ut++){const At=gt[Ut],$t=St[At.materialIndex];$t&&$t.visible&&x.push(b,pt,$t,G,Kt.z,At)}}else St.visible&&x.push(b,pt,St,G,Kt.z,null)}}const rt=b.children;for(let pt=0,St=rt.length;pt<St;pt++)Tu(rt[pt],O,G,V)}function kp(b,O,G,V){const{opaque:z,transmissive:rt,transparent:pt}=b;_.setupLightsView(G),Q===!0&&bt.setGlobalState(T.clippingPlanes,G),V&&yt.viewport(k.copy(V)),z.length>0&&ul(z,O,G),rt.length>0&&ul(rt,O,G),pt.length>0&&ul(pt,O,G),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Xp(b,O,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[V.id]===void 0&&(_.state.transmissionRenderTarget[V.id]=new gs(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Hr:ea,minFilter:as,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const rt=_.state.transmissionRenderTarget[V.id],pt=V.viewport||k;rt.setSize(pt.z*T.transmissionResolutionScale,pt.w*T.transmissionResolutionScale);const St=T.getRenderTarget(),gt=T.getActiveCubeFace(),Ut=T.getActiveMipmapLevel();T.setRenderTarget(rt),T.getClearColor(N),H=T.getClearAlpha(),H<1&&T.setClearColor(16777215,.5),T.clear(),qt&&ot.render(G);const Ot=T.toneMapping;T.toneMapping=Pa;const At=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),_.setupLightsView(V),Q===!0&&bt.setGlobalState(T.clippingPlanes,V),ul(b,G,V),Ht.updateMultisampleRenderTarget(rt),Ht.updateRenderTargetMipmap(rt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let ue=0,De=O.length;ue<De;ue++){const Ue=O[ue],{object:me,geometry:wt,material:Re,group:ne}=Ue;if(Re.side===Ii&&me.layers.test(V.layers)){const Rn=Re.side;Re.side=bn,Re.needsUpdate=!0,Wp(me,G,V,wt,Re,ne),Re.side=Rn,Re.needsUpdate=!0,$t=!0}}$t===!0&&(Ht.updateMultisampleRenderTarget(rt),Ht.updateRenderTargetMipmap(rt))}T.setRenderTarget(St,gt,Ut),T.setClearColor(N,H),At!==void 0&&(V.viewport=At),T.toneMapping=Ot}function ul(b,O,G){const V=O.isScene===!0?O.overrideMaterial:null;for(let z=0,rt=b.length;z<rt;z++){const pt=b[z],{object:St,geometry:gt,group:Ut}=pt;let Ot=pt.material;Ot.allowOverride===!0&&V!==null&&(Ot=V),St.layers.test(G.layers)&&Wp(St,O,G,gt,Ot,Ut)}}function Wp(b,O,G,V,z,rt){b.onBeforeRender(T,O,G,V,z,rt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(T,O,G,V,b,rt),z.transparent===!0&&z.side===Ii&&z.forceSinglePass===!1?(z.side=bn,z.needsUpdate=!0,T.renderBufferDirect(G,O,V,z,b,rt),z.side=Ha,z.needsUpdate=!0,T.renderBufferDirect(G,O,V,z,b,rt),z.side=Ii):T.renderBufferDirect(G,O,V,z,b,rt),b.onAfterRender(T,O,G,V,z,rt)}function fl(b,O,G){O.isScene!==!0&&(O=Je);const V=Rt.get(b),z=_.state.lights,rt=_.state.shadowsArray,pt=z.state.version,St=X.getParameters(b,z.state,rt,O,G),gt=X.getProgramCacheKey(St);let Ut=V.programs;V.environment=b.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(b.isMeshStandardMaterial?S:A).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",It),Ut=new Map,V.programs=Ut);let Ot=Ut.get(gt);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===pt)return qp(b,St),Ot}else St.uniforms=X.getUniforms(b),b.onBeforeCompile(St,T),Ot=X.acquireProgram(St,gt),Ut.set(gt,Ot),V.uniforms=St.uniforms;const At=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(At.clippingPlanes=bt.uniform),qp(b,St),V.needsLights=yS(b),V.lightsStateVersion=pt,V.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.directionalShadowMap.value=z.state.directionalShadowMap,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotShadowMap.value=z.state.spotShadowMap,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMap.value=z.state.pointShadowMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Ot,V.uniformsList=null,Ot}function Yp(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=_c.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function qp(b,O){const G=Rt.get(b);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function vS(b,O,G,V,z){O.isScene!==!0&&(O=Je),Ht.resetTextureUnits();const rt=O.fog,pt=V.isMeshStandardMaterial?O.environment:null,St=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Cr,gt=(V.isMeshStandardMaterial?S:A).get(V.envMap||pt),Ut=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ot=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,ue=!!G.morphAttributes.color;let De=Pa;V.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(De=T.toneMapping);const Ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=Ue!==void 0?Ue.length:0,wt=Rt.get(V),Re=_.state.lights;if(Q===!0&&(dt===!0||b!==I)){const on=b===I&&V.id===D;bt.setState(V,b,on)}let ne=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Re.state.version||wt.outputColorSpace!==St||z.isBatchedMesh&&wt.batching===!1||!z.isBatchedMesh&&wt.batching===!0||z.isBatchedMesh&&wt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&wt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&wt.instancing===!1||!z.isInstancedMesh&&wt.instancing===!0||z.isSkinnedMesh&&wt.skinning===!1||!z.isSkinnedMesh&&wt.skinning===!0||z.isInstancedMesh&&wt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&wt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&wt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&wt.instancingMorph===!1&&z.morphTexture!==null||wt.envMap!==gt||V.fog===!0&&wt.fog!==rt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==bt.numPlanes||wt.numIntersection!==bt.numIntersection)||wt.vertexAlphas!==Ut||wt.vertexTangents!==Ot||wt.morphTargets!==At||wt.morphNormals!==$t||wt.morphColors!==ue||wt.toneMapping!==De||wt.morphTargetsCount!==me)&&(ne=!0):(ne=!0,wt.__version=V.version);let Rn=wt.currentProgram;ne===!0&&(Rn=fl(V,O,z));let Es=!1,Cn=!1,kr=!1;const Ce=Rn.getUniforms(),mn=wt.uniforms;if(yt.useProgram(Rn.program)&&(Es=!0,Cn=!0,kr=!0),V.id!==D&&(D=V.id,Cn=!0),Es||I!==b){yt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ce.setValue(w,"projectionMatrix",b.projectionMatrix),Ce.setValue(w,"viewMatrix",b.matrixWorldInverse);const xn=Ce.map.cameraPosition;xn!==void 0&&xn.setValue(w,Tt.setFromMatrixPosition(b.matrixWorld)),ge.logarithmicDepthBuffer&&Ce.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ce.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),I!==b&&(I=b,Cn=!0,kr=!0)}if(z.isSkinnedMesh){Ce.setOptional(w,z,"bindMatrix"),Ce.setOptional(w,z,"bindMatrixInverse");const on=z.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ce.setValue(w,"boneTexture",on.boneTexture,Ht))}z.isBatchedMesh&&(Ce.setOptional(w,z,"batchingTexture"),Ce.setValue(w,"batchingTexture",z._matricesTexture,Ht),Ce.setOptional(w,z,"batchingIdTexture"),Ce.setValue(w,"batchingIdTexture",z._indirectTexture,Ht),Ce.setOptional(w,z,"batchingColorTexture"),z._colorsTexture!==null&&Ce.setValue(w,"batchingColorTexture",z._colorsTexture,Ht));const kn=G.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Lt.update(z,G,Rn),(Cn||wt.receiveShadow!==z.receiveShadow)&&(wt.receiveShadow=z.receiveShadow,Ce.setValue(w,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(mn.envMap.value=gt,mn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(mn.envMapIntensity.value=O.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=vR()),Cn&&(Ce.setValue(w,"toneMappingExposure",T.toneMappingExposure),wt.needsLights&&SS(mn,kr),rt&&V.fog===!0&&Et.refreshFogUniforms(mn,rt),Et.refreshMaterialUniforms(mn,V,tt,q,_.state.transmissionRenderTarget[b.id]),_c.upload(w,Yp(wt),mn,Ht)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_c.upload(w,Yp(wt),mn,Ht),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ce.setValue(w,"center",z.center),Ce.setValue(w,"modelViewMatrix",z.modelViewMatrix),Ce.setValue(w,"normalMatrix",z.normalMatrix),Ce.setValue(w,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const on=V.uniformsGroups;for(let xn=0,Au=on.length;xn<Au;xn++){const Xa=on[xn];ht.update(Xa,Rn),ht.bind(Xa,Rn)}}return Rn}function SS(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function yS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,O,G){const V=Rt.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Rt.get(b.texture).__webglTexture=O,Rt.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const G=Rt.get(b);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const MS=w.createFramebuffer();this.setRenderTarget=function(b,O=0,G=0){M=b,L=O,E=G;let V=!0,z=null,rt=!1,pt=!1;if(b){const gt=Rt.get(b);if(gt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(w.FRAMEBUFFER,null),V=!1;else if(gt.__webglFramebuffer===void 0)Ht.setupRenderTarget(b);else if(gt.__hasExternalTextures)Ht.rebindTextures(b,Rt.get(b.texture).__webglTexture,Rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const At=b.depthTexture;if(gt.__boundDepthTexture!==At){if(At!==null&&Rt.has(At)&&(b.width!==At.image.width||b.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(b)}}const Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(pt=!0);const Ot=Rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?z=Ot[O][G]:z=Ot[O],rt=!0):b.samples>0&&Ht.useMultisampledRTT(b)===!1?z=Rt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[G]:z=Ot,k.copy(b.viewport),Z.copy(b.scissor),Y=b.scissorTest}else k.copy(mt).multiplyScalar(tt).floor(),Z.copy(_t).multiplyScalar(tt).floor(),Y=Bt;if(G!==0&&(z=MS),yt.bindFramebuffer(w.FRAMEBUFFER,z)&&V&&yt.drawBuffers(b,z),yt.viewport(k),yt.scissor(Z),yt.setScissorTest(Y),rt){const gt=Rt.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+O,gt.__webglTexture,G)}else if(pt){const gt=O;for(let Ut=0;Ut<b.textures.length;Ut++){const Ot=Rt.get(b.textures[Ut]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ut,Ot.__webglTexture,G,gt)}}else if(b!==null&&G!==0){const gt=Rt.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,gt.__webglTexture,G)}D=-1},this.readRenderTargetPixels=function(b,O,G,V,z,rt,pt,St=0){if(!(b&&b.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(gt=gt[pt]),gt){yt.bindFramebuffer(w.FRAMEBUFFER,gt);try{const Ut=b.textures[St],Ot=Ut.format,At=Ut.type;if(!ge.textureFormatReadable(Ot)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(At)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-V&&G>=0&&G<=b.height-z&&(b.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+St),w.readPixels(O,G,V,z,Pt.convert(Ot),Pt.convert(At),rt))}finally{const Ut=M!==null?Rt.get(M).__webglFramebuffer:null;yt.bindFramebuffer(w.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,O,G,V,z,rt,pt,St=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(gt=gt[pt]),gt)if(O>=0&&O<=b.width-V&&G>=0&&G<=b.height-z){yt.bindFramebuffer(w.FRAMEBUFFER,gt);const Ut=b.textures[St],Ot=Ut.format,At=Ut.type;if(!ge.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,$t),w.bufferData(w.PIXEL_PACK_BUFFER,rt.byteLength,w.STREAM_READ),b.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+St),w.readPixels(O,G,V,z,Pt.convert(Ot),Pt.convert(At),0);const ue=M!==null?Rt.get(M).__webglFramebuffer:null;yt.bindFramebuffer(w.FRAMEBUFFER,ue);const De=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await F1(w,De,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,$t),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,rt),w.deleteBuffer($t),w.deleteSync(De),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,G=0){const V=Math.pow(2,-G),z=Math.floor(b.image.width*V),rt=Math.floor(b.image.height*V),pt=O!==null?O.x:0,St=O!==null?O.y:0;Ht.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,G,0,0,pt,St,z,rt),yt.unbindTexture()};const bS=w.createFramebuffer(),ES=w.createFramebuffer();this.copyTextureToTexture=function(b,O,G=null,V=null,z=0,rt=null){rt===null&&(z!==0?(Xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=z,z=0):rt=0);let pt,St,gt,Ut,Ot,At,$t,ue,De;const Ue=b.isCompressedTexture?b.mipmaps[rt]:b.image;if(G!==null)pt=G.max.x-G.min.x,St=G.max.y-G.min.y,gt=G.isBox3?G.max.z-G.min.z:1,Ut=G.min.x,Ot=G.min.y,At=G.isBox3?G.min.z:0;else{const kn=Math.pow(2,-z);pt=Math.floor(Ue.width*kn),St=Math.floor(Ue.height*kn),b.isDataArrayTexture?gt=Ue.depth:b.isData3DTexture?gt=Math.floor(Ue.depth*kn):gt=1,Ut=0,Ot=0,At=0}V!==null?($t=V.x,ue=V.y,De=V.z):($t=0,ue=0,De=0);const me=Pt.convert(O.format),wt=Pt.convert(O.type);let Re;O.isData3DTexture?(Ht.setTexture3D(O,0),Re=w.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ht.setTexture2DArray(O,0),Re=w.TEXTURE_2D_ARRAY):(Ht.setTexture2D(O,0),Re=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);const ne=w.getParameter(w.UNPACK_ROW_LENGTH),Rn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Es=w.getParameter(w.UNPACK_SKIP_PIXELS),Cn=w.getParameter(w.UNPACK_SKIP_ROWS),kr=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ue.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ue.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ut),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ot),w.pixelStorei(w.UNPACK_SKIP_IMAGES,At);const Ce=b.isDataArrayTexture||b.isData3DTexture,mn=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const kn=Rt.get(b),on=Rt.get(O),xn=Rt.get(kn.__renderTarget),Au=Rt.get(on.__renderTarget);yt.bindFramebuffer(w.READ_FRAMEBUFFER,xn.__webglFramebuffer),yt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Au.__webglFramebuffer);for(let Xa=0;Xa<gt;Xa++)Ce&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Rt.get(b).__webglTexture,z,At+Xa),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Rt.get(O).__webglTexture,rt,De+Xa)),w.blitFramebuffer(Ut,Ot,pt,St,$t,ue,pt,St,w.DEPTH_BUFFER_BIT,w.NEAREST);yt.bindFramebuffer(w.READ_FRAMEBUFFER,null),yt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||Rt.has(b)){const kn=Rt.get(b),on=Rt.get(O);yt.bindFramebuffer(w.READ_FRAMEBUFFER,bS),yt.bindFramebuffer(w.DRAW_FRAMEBUFFER,ES);for(let xn=0;xn<gt;xn++)Ce?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,kn.__webglTexture,z,At+xn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,kn.__webglTexture,z),mn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,on.__webglTexture,rt,De+xn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,on.__webglTexture,rt),z!==0?w.blitFramebuffer(Ut,Ot,pt,St,$t,ue,pt,St,w.COLOR_BUFFER_BIT,w.NEAREST):mn?w.copyTexSubImage3D(Re,rt,$t,ue,De+xn,Ut,Ot,pt,St):w.copyTexSubImage2D(Re,rt,$t,ue,Ut,Ot,pt,St);yt.bindFramebuffer(w.READ_FRAMEBUFFER,null),yt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else mn?b.isDataTexture||b.isData3DTexture?w.texSubImage3D(Re,rt,$t,ue,De,pt,St,gt,me,wt,Ue.data):O.isCompressedArrayTexture?w.compressedTexSubImage3D(Re,rt,$t,ue,De,pt,St,gt,me,Ue.data):w.texSubImage3D(Re,rt,$t,ue,De,pt,St,gt,me,wt,Ue):b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,rt,$t,ue,pt,St,me,wt,Ue.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,rt,$t,ue,Ue.width,Ue.height,me,Ue.data):w.texSubImage2D(w.TEXTURE_2D,rt,$t,ue,pt,St,me,wt,Ue);w.pixelStorei(w.UNPACK_ROW_LENGTH,ne),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Rn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Es),w.pixelStorei(w.UNPACK_SKIP_ROWS,Cn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,kr),rt===0&&O.generateMipmaps&&w.generateMipmap(Re),yt.unbindTexture()},this.initRenderTarget=function(b){Rt.get(b).__webglFramebuffer===void 0&&Ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ht.setTextureCube(b,0):b.isData3DTexture?Ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ht.setTexture2DArray(b,0):Ht.setTexture2D(b,0),yt.unbindTexture()},this.resetState=function(){L=0,E=0,M=null,yt.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),n.unpackColorSpace=ie._getUnpackColorSpace()}}const yR={light:{text:"#000000",background:"#ffffff",backgroundSecondary:"#f5f5f5",border:"#dddddd",accent:"#264af4",orange:"#c74700",yellow:"#b78f00"},dark:{text:"#ffffff",background:"#0d0d0d",backgroundSecondary:"#1a1a1a",border:"#333333",accent:"#7096f8",orange:"#e25100",yellow:"#8d6300"}};function Ax(e){const t=yR[e];return{axis:Number(t.text.replace("#","0x")),grid:Number(t.text.replace("#","0x")),background:Number(t.background.replace("#","0x")),label:t.text,mesh:Number(t.accent.replace("#","0x")),task:Number(t.orange.replace("#","0x")),preview:Number(t.yellow.replace("#","0x"))}}function MR(e,t){e.background=new ae(t.background),e.traverse(n=>{var i,a;if(n instanceof cl){const s=(i=n.userData)==null?void 0:i.color;s&&t[s]!==void 0&&n.material.color.set(t[s])}if(n instanceof Vn){const s=(a=n.userData)==null?void 0:a.color;s&&t[s]!==void 0&&n.material.color.set(t[s])}})}function bR({inputPoint:e,target:t,isEditing:n,roboMeshesRef:i,previewMeshRef:a,previewLineRef:s,hoverSphereRef:r,sceneRef:o,selectedJointIndex:l,color:c}){Mt.useEffect(()=>{var m;const f=a.current;if(!n||!f||(f.position.set(e[0],e[1],e[2]),t==="task"))return;const d=i.current;if(d.length===0)return;const p=d[d.length-1].position,g=e,v=new An().setFromPoints([p.clone(),new P(g[0],g[1],g[2])]);if(s.current)s.current.geometry.dispose(),s.current.geometry=v;else{const u=new ll({color:c}),x=new cl(v,u);x.userData.color="preview",(m=o.current)==null||m.add(x),s.current=x}},[e,n,t,i,a,s,o]),Mt.useEffect(()=>{const f=r.current;if(!f)return;if(l===null){f.visible=!1;return}const d=i.current[l];if(!d){f.visible=!1;return}f.position.copy(d.position),f.visible=!0},[l,i,r])}function ER({displayJoints:e,sceneRef:t,roboMeshesRef:n,roboLineRef:i,sphereRadius:a,color:s}){Mt.useEffect(()=>{const r=t.current;if(!r)return;const o=n.current;for(;o.length<e.length;){const l=new Ur(a,32,16),c=new wr({color:s}),f=new Vn(l,c);f.userData.color="mesh",r.add(f),o.push(f)}for(;o.length>e.length;){const l=o.pop();l&&r.remove(l)}e.forEach((l,c)=>{o[c].position.set(l[0],l[1],l[2])})},[e,t,n,a]),Mt.useEffect(()=>{const r=t.current;if(!r||(i.current&&(r.remove(i.current),i.current.geometry.dispose(),i.current=null),e.length<2))return;const o=e.map(d=>new P(d[0],d[1],d[2])),l=new An().setFromPoints(o),c=new ll({color:s}),f=new cl(l,c);f.userData.color="mesh",r.add(f),i.current=f},[e,t,i])}function TR({tasks:e,sceneRef:t,taskMeshesRef:n,sphereRadius:i,color:a}){Mt.useEffect(()=>{const s=t.current;if(!s)return;const r=n.current;for(;r.length<e.length;){const o=new Ur(i,32,16),l=new wr({color:a}),c=new Vn(o,l);c.userData.color="task",s.add(c),r.push(c)}for(;r.length>e.length;){const o=r.pop();o&&(s.remove(o),o.geometry.dispose())}e.forEach(({targetPosition:o},l)=>{r[l].position.set(o[0],o[1],o[2])})},[e])}class AR extends dn{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Xt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(n){n.element&&n.element instanceof n.element.ownerDocument.defaultView.Element&&n.element.parentNode!==null&&n.element.remove()})})}copy(t,n){return super.copy(t,n),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Gs=new P,Rx=new we,Cx=new we,wx=new P,Dx=new P;class RR{constructor(t={}){const n=this;let i,a,s,r;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:a}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Rx.copy(v.matrixWorldInverse),Cx.multiplyMatrices(v.projectionMatrix,Rx),f(g,g,v),this.sortObjects&&p(g)},this.setSize=function(g,v){i=g,a=v,s=i/2,r=a/2,l.style.width=g+"px",l.style.height=v+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,m=g.children.length;v<m;v++)c(g.children[v])}function f(g,v,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Gs.setFromMatrixPosition(g.matrixWorld),Gs.applyMatrix4(Cx);const u=Gs.z>=-1&&Gs.z<=1&&g.layers.test(m.layers)===!0,x=g.element;x.style.display=u===!0?"":"none",u===!0&&(g.onBeforeRender(n,v,m),x.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Gs.x*s+s)+"px,"+(-Gs.y*r+r)+"px)",x.parentNode!==l&&l.appendChild(x),g.onAfterRender(n,v,m));const _={distanceToCameraSquared:d(m,g)};o.objects.set(g,_)}for(let u=0,x=g.children.length;u<x;u++)f(g.children[u],v,m)}function d(g,v){return wx.setFromMatrixPosition(g.matrixWorld),Dx.setFromMatrixPosition(v.matrixWorld),wx.distanceToSquared(Dx)}function h(g){const v=[];return g.traverseVisible(function(m){m.isCSS2DObject&&v.push(m)}),v}function p(g){const v=h(g).sort(function(u,x){if(u.renderOrder!==x.renderOrder)return x.renderOrder-u.renderOrder;const _=o.objects.get(u).distanceToCameraSquared,y=o.objects.get(x).distanceToCameraSquared;return _-y}),m=v.length;for(let u=0,x=v.length;u<x;u++)v[u].element.style.zIndex=m-u}}}const CR=(e,t)=>{const n=new TE;n.background=new ae(t);const i=new uS(0,0,0,0,.1,1e3),a=new SR;a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(a.domElement);const s=new RR;return s.domElement.classList.add("label-renderer"),e.appendChild(s.domElement),{scene:n,camera:i,renderer:a,labelRenderer:s}},Ux=(e,t,n,i,a=500)=>{const s=e.clientWidth,r=e.clientHeight,o=s/r;o>=1?(t.top=a,t.bottom=-a,t.left=-a*o,t.right=a*o):(t.left=-a,t.right=a,t.top=a/o,t.bottom=-a/o),t.updateProjectionMatrix(),n.setSize(s,r),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(s,r)};function wR(e,t,n,i){const a=new ll({color:i}),s=new P(t.xMin,t.yMax,t.zMax),r=new P(t.xMax,t.yMax,t.zMax),o=new P(t.xMin,t.yMin,t.zMax),l=new P(t.xMax,t.yMin,t.zMax),c=new P(t.xMin,t.yMax,t.zMin),f=new P(t.xMax,t.yMax,t.zMin),d=new P(t.xMin,t.yMin,t.zMin),h=new P(t.xMax,t.yMin,t.zMin),p=[[s,o],[l,r],[o,l],[c,d],[h,f],[d,h],[o,d],[l,h]];for(const[g,v]of p){const m=new An().setFromPoints([g,v]),u=new cl(m,a);u.userData.color="axis",e.add(u)}Hf(e,t,n,"x"),Hf(e,t,n,"y"),Hf(e,t,n,"z")}function Hf(e,t,n,i){const a=new ll({color:8947848}),{xMin:s,xMax:r,yMin:o,yMax:l,zMin:c,zMax:f}=t,d=i==="x"?s:i==="y"?o:c,h=i==="x"?r:i==="y"?l:f,p=Lx(i.toUpperCase());i==="x"?p.position.set((s+r)/2,o-16,f+16):i==="y"?p.position.set(s-16,(o+l)/2,f+16):p.position.set(r+16,o-16,(c+f)/2),e.add(p);for(let g=d;g<=h;g+=n){let v,m,u;i==="x"?(v=new P(g,o,f),m=new P(g,o+2,f),u=new P(g,o-8,f+8)):i==="y"?(v=new P(s,g,f),m=new P(s+2,g,f-2),u=new P(s-8,g,f+8)):(v=new P(r,o,g),m=new P(r,o+2,g),u=new P(r+8,o-8,g));const x=new An().setFromPoints([v,m]),_=new cl(x,a);e.add(_);const y=Lx(g.toString());y.position.copy(u),e.add(y)}}function Lx(e){const t=document.createElement("div");return t.className="label",t.textContent=e,new AR(t)}const Nx={type:"change"},Ip={type:"start"},gS={type:"end"},Ql=new yu,Ox=new mi,DR=Math.cos(70*tE.DEG2RAD),ke=new P,vn=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gf=1e-6;class UR extends NE{constructor(t,n=null){super(t,n),this.state=pe.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oa.ROTATE,MIDDLE:Oa.DOLLY,RIGHT:Oa.PAN},this.touches={ONE:ar.ROTATE,TWO:ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new xs,this._lastTargetPosition=new P,this._quat=new xs().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ex,this._sphericalDelta=new ex,this._scale=1,this._panOffset=new P,this._rotateStart=new Xt,this._rotateEnd=new Xt,this._rotateDelta=new Xt,this._panStart=new Xt,this._panEnd=new Xt,this._panDelta=new Xt,this._dollyStart=new Xt,this._dollyEnd=new Xt,this._dollyDelta=new Xt,this._dollyDirection=new P,this._mouse=new Xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NR.bind(this),this._onPointerDown=LR.bind(this),this._onPointerUp=OR.bind(this),this._onContextMenu=GR.bind(this),this._onMouseWheel=FR.bind(this),this._onKeyDown=BR.bind(this),this._onTouchStart=IR.bind(this),this._onTouchMove=HR.bind(this),this._onMouseDown=PR.bind(this),this._onMouseMove=zR.bind(this),this._interceptControlDown=VR.bind(this),this._interceptControlUp=kR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nx),this.update(),this.state=pe.NONE}update(t=null){const n=this.object.position;ke.copy(n).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),a<-Math.PI?a+=vn:a>Math.PI&&(a-=vn),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),n.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=ke.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ql.origin.copy(this.object.position),Ql.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ql.direction))<DR?this.object.lookAt(this.target):(Ox.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ql.intersectPlane(Ox,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Gf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gf||this._lastTargetPosition.distanceToSquared(this.target)>Gf?(this.dispatchEvent(Nx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?vn/60*this.autoRotateSpeed*t:vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){ke.setFromMatrixColumn(n,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,n){this.screenSpacePanning===!0?ke.setFromMatrixColumn(n,1):(ke.setFromMatrixColumn(n,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;ke.copy(a).sub(this.target);let s=ke.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=t-i.left,s=n-i.top,r=i.width,o=i.height;this._mouse.x=a/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._panStart.set(i,a)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,a=t.pageY-n.y,s=Math.sqrt(i*i+a*a);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),a=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(a,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,a=t.pageY-n.y,s=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Xt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function LR(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function NR(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function OR(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gS),this.state=pe.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function PR(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Oa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=pe.DOLLY;break;case Oa.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=pe.ROTATE}break;case Oa.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Ip)}function zR(e){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function FR(e){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(e.preventDefault(),this.dispatchEvent(Ip),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(gS))}function BR(e){this.enabled!==!1&&this._handleKeyDown(e)}function IR(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=pe.TOUCH_ROTATE;break;case ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=pe.TOUCH_DOLLY_PAN;break;case ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Ip)}function HR(e){switch(this._trackPointer(e),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=pe.NONE}}function GR(e){this.enabled!==!1&&e.preventDefault()}function VR(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kR(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const XR=(e,t)=>{const n=new UR(e,t.domElement);return n.mouseButtons={LEFT:null,MIDDLE:Oa.DOLLY,RIGHT:Oa.ROTATE},n.enableDamping=!1,n},WR=e=>{const t=i=>{i.key==="Control"&&(e.enableRotate=!1,e.enablePan=!0)},n=i=>{i.key==="Control"&&(e.enableRotate=!0,e.enablePan=!1)};return window.addEventListener("keydown",t),window.addEventListener("keyup",n),()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}},YR=(e,t,n,i,a)=>{const s=()=>{a.update(),n.render(e,t),i.render(e,t),requestAnimationFrame(s)};s()};function Hp(e){return new P((e.xMax+e.xMin)/2,(e.yMax+e.yMin)/2,(e.zMax+e.zMin)/2)}function qR(e,t,n){const i=Hp(e);t.position.set(i.x,i.y,i.z+300),t.zoom=1,t.updateProjectionMatrix(),n.target.copy(i),n.update()}function jR(e,t,n){const i=Hp(e);t.position.set(i.x+300,i.y,i.z),t.zoom=1,t.updateProjectionMatrix(),n.target.copy(i),n.update()}function ZR(e,t,n){const i=Hp(e);t.position.set(i.x+100,i.y+50,i.z+150),t.zoom=1,t.updateProjectionMatrix(),n.target.copy(i),n.update()}function KR(e,t){const n=t.getBoundingClientRect(),i=new Xt;return i.x=(e.clientX-n.left)/n.width*2-1,i.y=-((e.clientY-n.top)/n.height)*2+1,i}function Px(e,t,n){const i=new fS;i.setFromCamera(e,t);const a=new P;return i.ray.intersectPlane(n,a),a}function QR(e,t,n,i){const a=new fS;a.setFromCamera(e,t),1/t.zoom;let s=null,r=1/0;return n.forEach((o,l)=>{const c=a.ray.distanceToPoint(o.position);c<=i&&c<r&&(r=c,s=l)}),s}function JR({appearance:e,joints:t,tasks:n,results:i,isEditing:a,isShowingResults:s,target:r,inputPoint:o,selectedJointIndex:l,onInputPointChange:c,setSelectedJointIndex:f,onInputPointConfirm:d}){const[h,p]=Mt.useState(()=>Ax(e)),g=s?i:t,v={xMin:-50,xMax:50,yMin:0,yMax:100,zMin:-50,zMax:50},m=10,u=100,x=.8,_=2,y=Mt.useRef(null),C=Mt.useRef(null),T=Mt.useRef(null),R=Mt.useRef(null),L=Mt.useRef(null),E=Mt.useRef(null),[M,D]=Mt.useState(null),I=Mt.useRef(new mi(new P(0,0,1),0)),k=Mt.useRef(new mi(new P(1,0,0),0)),Z=Mt.useRef([]),Y=Mt.useRef(null),N=Mt.useRef([]),H=Mt.useRef(null),F=Mt.useRef(null),q=Mt.useRef(null);function tt(){const st=T.current;if(!st)return;const at=1/st.zoom;Z.current.forEach(mt=>{mt.scale.setScalar(at)}),N.current.forEach(mt=>{mt.scale.setScalar(at)}),H.current&&H.current.scale.setScalar(at),q.current&&q.current.scale.setScalar(at)}return Mt.useEffect(()=>{const st=y.current;if(!st)return;const{scene:at,camera:mt,renderer:_t,labelRenderer:Bt}=CR(st,h.background);C.current=at,T.current=mt,R.current=_t,L.current=Bt,Ux(st,mt,_t,Bt,u);const W=XR(mt,_t);W.addEventListener("change",tt),E.current=W;const Q=WR(W);wR(at,v,m,h.axis);const dt=new Vn(new Ur(x*_,32,16),new wr({color:h.preview,transparent:!0,opacity:.7,depthWrite:!1}));dt.userData.color="preview",dt.visible=!1,at.add(dt),q.current=dt;const zt=()=>{Ux(st,mt,_t,Bt,u)};return window.addEventListener("resize",zt),YR(at,mt,_t,Bt,W),()=>{q.current&&(at.remove(q.current),q.current.geometry.dispose(),q.current=null),W.removeEventListener("change",tt),Q(),window.removeEventListener("resize",zt)}},[]),Mt.useEffect(()=>{const st=Ax(e);p(st);const at=C.current;at&&MR(at,st)},[e]),Mt.useEffect(()=>{if(C.current){if(!a){D(null);return}D(r==="robo"?"xy":"jointindex")}},[a]),Mt.useEffect(()=>{const st=C.current,at=T.current,mt=E.current;if(!(!st||!at||!mt))if(M===null)H.current&&(st.remove(H.current),H.current.geometry.dispose(),H.current=null),F.current&&(st.remove(F.current),F.current.geometry.dispose(),F.current=null),q.current&&(q.current.visible=!1),ZR(v,at,mt);else if(M==="xy"){const _t=new Vn(new Ur(x,32,16),new wr({color:h.preview}));_t.userData.color="preview",st.add(_t),H.current=_t,qR(v,at,mt)}else M==="z"&&jR(v,at,mt)},[M]),Mt.useEffect(()=>{const st=y.current;if(!st)return;function at(mt){if(!a)return;const _t=y.current,Bt=T.current;if(!_t||!Bt)return;const W=KR(mt,_t);if(M==="jointindex"){const Q=1/Bt.zoom,dt=QR(W,Bt,Z.current,x*Q*_);f(dt)}if(M==="xy"){const Q=Px(W,Bt,I.current);c([Q.x,Q.y,Q.z])}if(M==="z"){const Q=Px(W,Bt,k.current);c([o[0],o[1],Q.z])}}return st.addEventListener("mousemove",at),()=>st.removeEventListener("mousemove",at)},[M]),Mt.useEffect(()=>{const st=y.current;if(!st)return;function at(mt){if(M==="jointindex"){if(l===null)return;D("xy");return}if(M==="xy"){k.current.constant=-o[0],D("z");return}if(M==="z"){d();return}}return st.addEventListener("click",at),()=>st.removeEventListener("click",at)},[M,o,l]),bR({inputPoint:o,target:r,isEditing:a,roboMeshesRef:Z,previewMeshRef:H,previewLineRef:F,hoverSphereRef:q,sceneRef:C,selectedJointIndex:l,color:h.preview}),ER({displayJoints:g,sceneRef:C,roboMeshesRef:Z,roboLineRef:Y,sphereRadius:x,color:h.mesh}),TR({tasks:n,sceneRef:C,taskMeshesRef:N,sphereRadius:x,color:h.task}),J.jsx("div",{ref:y,id:"three-canvas"})}function $R(){const e=wb(),[t,n]=Mt.useState(Cb()),[i,a]=Mt.useState(null),[s,r]=Mt.useState(!1),[o,l]=Mt.useState(null),[c,f]=Mt.useState(!1),[d,h]=Mt.useState([]),[p,g]=Mt.useState([]),[v,m]=Mt.useState(!1),[u,x]=Mt.useState([]),[_,y]=Mt.useState(!1),[C,T]=Mt.useState(null),[R,L]=Mt.useState(null),[E,M]=Mt.useState([0,0,0]),[D,I]=Mt.useState(null),k=Mt.useRef(E);Mt.useEffect(()=>{n(e)},[e]),Mt.useEffect(()=>{k.current=E},[E]);const Z=async(at,mt)=>{try{const _t=await Eb(at,mt);r(!0),l(at),a(_t.access_token),f(!1)}catch{alert("ログインに失敗しました。")}},Y=async(at,mt)=>{try{await bb(at,mt),alert("登録が完了しました。続けてログインしてください。")}catch(_t){_t instanceof Error&&_t.message==="USER_ALREADY_EXISTS"?alert("そのユーザー名は既に使われています。"):alert("登録に失敗しました。")}},N=async()=>{try{if(!i){alert("ログインをしてください。"),f(!0);return}if(d.length===0){alert("ジョイントを設定してください。");return}if(p.length===0){alert("タスクを設定してください。");return}const mt=(await Tb(i,d,p))[0].slice().sort((_t,Bt)=>_t.joint_id-Bt.joint_id).map(_t=>[_t.x,_t.y,_t.z]);x(mt),console.log("最終結果:",mt)}catch(at){alert("計算に失敗しました。"),console.error(at)}},H=()=>{n(at=>at==="light"?"dark":"light")},F=at=>{M([0,0,0]),T(at),y(!0)},q=()=>{const at=k.current;if(C==="robo")h(mt=>[...mt,at]);else if(C==="task"){const mt=D!==null?D:d.length-1;g(_t=>[..._t,{jointIndex:mt,targetPosition:at}])}T(null),y(!1)},tt=()=>{T(null),y(!1)},st=at=>{at==="robo"?h(mt=>mt.slice(0,-1)):at==="task"&&g(mt=>mt.slice(0,-1))};return J.jsxs("div",{id:"app-container",className:`${t}-appearance`,children:[J.jsx(kb,{isLoggedIn:s,username:o??void 0,onLogin:()=>{f(!0)},onLogout:()=>{r(!1),l(null)},appearance:t,onToggleAppearance:H}),c&&J.jsx(Xb,{onCancel:()=>f(!1),onRegister:async(at,mt)=>{Y(at,mt)},onLogin:async(at,mt)=>{Z(at,mt)}}),J.jsxs("main",{id:"app-main",children:[J.jsx(Wb,{joints:d,results:u,onAddPoint:()=>F("robo"),onRemovePoint:()=>st("robo"),isShowingResults:v,setIsShowingResults:m}),J.jsxs("div",{id:"three-canvas-container",children:[J.jsx(JR,{appearance:t,joints:d,tasks:p,results:u,isEditing:_,isShowingResults:v,target:C,inputPoint:E,onInputPointChange:M,selectedJointIndex:D,setSelectedJointIndex:I,onInputPointConfirm:q}),_?J.jsx(qb,{point:E,onFocusX:()=>{L("x")},onFocusY:()=>{L("y")},onFocusZ:()=>{L("z")},onChange:M,onConfirm:q,onCancel:tt}):J.jsx("button",{className:"solve-button",onClick:N,children:"実行"})]}),J.jsx(Yb,{tasks:p,onAddPoint:()=>F("task"),onRemovePoint:()=>st("task")})]})]})}const zx=document.getElementById("root");zx&&Mb.createRoot(zx).render(J.jsx($R,{}));
